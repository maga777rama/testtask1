import { Input } from "antd";
import { useSearchStore } from "../stores/searchStore.ts";
import { Link, useLocation } from "react-router";
import { usePaginationStore } from "../stores/paginationStore.ts";

export const Header = () => {
    const location = useLocation();
    const { searchText, setSearchText } = useSearchStore();
    const setPage = usePaginationStore((state) => state.setPage);

    return (
        <header className="h-13 flex items-center">
            <nav className="w-full flex items-center justify-between pr-4.5 pl-4.5 font-bold text-lg">
                <Link
                    to="/cards"
                    className={` ${location.pathname === "/cards" && "invisible"} text-current hover:text-orange-500 transition-colors duration-300`}
                >
                    Главная
                </Link>

                <Input
                    className={` ${location.pathname !== "/cards" && "invisible"}`}
                    placeholder="Search by name"
                    style={{ maxWidth: "500px", margin: "0 20px 0 20px" }}
                    value={searchText}
                    onChange={(e) => {
                        setPage(1);
                        setSearchText(e.target.value);
                    }}
                />

                <Link
                    to="/favourites"
                    className={`${location.pathname === "/favourites" && "invisible"} hover:text-orange-500 transition-colors duration-300`}
                >
                    Избранное
                </Link>
            </nav>
        </header>
    );
};
