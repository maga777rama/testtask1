import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useFavouriteStore } from "../../stores/favouritesStore.ts";
import { CardList } from "../cards/components/cardList.tsx";
import { getFavItems } from "../../api/api.ts";

export const Favourites = () => {
    const itemList = useFavouriteStore((state) => state.cards);

    const { data, error, isLoading } = useQuery({
        queryKey: ["favourites", { itemList }],
        queryFn: () => getFavItems(itemList),
        refetchOnWindowFocus: false,
        placeholderData: keepPreviousData,
    });

    if (isLoading) {
        return <div>Загрузка...</div>;
    }
    if (error) {
        return (
            <div>Ошибка при загрузке данных(. Попробуйте обновить страницу</div>
        );
    }

    const items = Array.isArray(data) ? data : [data];
    return (
        <main className={"flex flex-col items-center"}>
            <section className={"h-[50vh] flex items-center"}>
                <h6 className={"font-extrabold text-6xl "}>Избранное</h6>
            </section>
            {itemList.length === 0 ? (
                <div className={""}>
                    Список избранных пуст. Добавьте персонажей с главной
                    страницы!
                </div>
            ) : (
                <section className="flex justify-center w-full bg-[rgb(39,43,51)] p-[50] sm:p-[92px]">
                    <CardList data={items} />
                </section>
            )}
        </main>
    );
};
