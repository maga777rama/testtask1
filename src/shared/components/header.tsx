import { Link, useLocation } from "@tanstack/react-router";
import { Input } from "antd";
import { useSearchStore } from "../../stores/searchStore.ts";

export const Header = () => {
    const location = useLocation();
    const searchText = useSearchStore((state) => state.searchText);
    const setSearchText = useSearchStore((state) => state.setSearchText);

    return (
        <header className="h-13 flex items-center">
            <nav className="w-full flex items-center justify-between pr-4.5 pl-4.5 font-bold text-lg">
                <Link
                    to="/"
                    className={` ${location.href === "/" && "invisible"} text-current hover:text-orange-500 transition-colors duration-300`}
                >
                    Главная
                </Link>

                <Input
                    className={` ${location.href !== "/" && "invisible"}`}
                    placeholder="Search by name"
                    style={{ maxWidth: "500px", margin: "0 20px 0 20px" }}
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                />

                <Link
                    to="/favourites"
                    className={`${location.href === "/favourites" && "invisible"} hover:text-orange-500 transition-colors duration-300`}
                >
                    Избранное
                </Link>
            </nav>
        </header>
    );
};
