import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Cards } from "./pages/cards/cards.tsx";
import { CardDetailed } from "./pages/cardDetailed/cardDetailed.tsx";
import { Favourites } from "./pages/favourites/favourites.tsx";
import { queryClient } from "./api/queryClient.ts";
import { QueryClientProvider } from "@tanstack/react-query";
import { Header } from "./layout/header.tsx";

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <QueryClientProvider client={queryClient}>
            <BrowserRouter basename={"/testtask1/"}>
                <Header />
                <Routes>
                    <Route path={"/"} element={<Navigate to={"/cards"} />} />
                    <Route path={"/cards"} element={<Cards />} />
                    <Route path={"/cards/:id"} element={<CardDetailed />} />
                    <Route path={"/favourites"} element={<Favourites />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>,
    );
}
