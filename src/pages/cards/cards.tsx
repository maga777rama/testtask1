import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { usePaginationStore } from "../../stores/paginationStore.ts";
import { CardList } from "./components/cardList.tsx";
import { getData, getSearchData } from "../../api/api.ts";
import { Pagination } from "../../shared/components/pagination.tsx";
import { useSearchStore } from "../../stores/searchStore.ts";
import { useDebounce } from "use-debounce";

export const Cards = () => {
    const page = usePaginationStore((state) => state.page);
    const setPage = usePaginationStore((state) => state.setPage);
    const searchText = useSearchStore((state) => state.searchText);
    const [debouncedSearchText] = useDebounce(searchText, 800);

    const { data, error, isLoading } = useQuery({
        queryKey: ["items", { page, debouncedSearchText }],
        queryFn: () =>
            debouncedSearchText
                ? getSearchData(page, debouncedSearchText)
                : getData(page),
        refetchOnWindowFocus: false,
        placeholderData: keepPreviousData,
    });

    if (isLoading) {
        return <div>Загрузка...</div>;
    }
    if (error) {
        console.error(error);
        return (
            <div>Ошибка при загрузке данных. Попробуйте обновить страницу</div>
        );
    }

    if (data.error) {
        return (
            <main className="flex flex-col items-center">
                <section className="flex justify-center w-full bg-[rgb(39,43,51)] p-[92px]">
                    <h1 className={"text-5xl font-extrabold text-white"}>
                        Ничего не найдено
                    </h1>
                </section>
            </main>
        );
    }

    return (
        <main className="flex flex-col items-center">
            <section className="h-[50vh] flex justify-center items-center w-full">
                <h1 className="font-extrabold text-6xl md:text-8xl text-center">
                    The Rick and Morty
                </h1>
            </section>

            <section className="flex justify-center w-full bg-[rgb(39,43,51)] p-[50] sm:p-[92px]">
                {!data.error && <CardList data={data.results} />}
            </section>
            {data.info.pages > 1 && (
                <Pagination data={data} page={page} setPage={setPage} />
            )}
        </main>
    );
};
