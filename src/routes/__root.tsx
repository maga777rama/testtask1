import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Header } from "../shared/components/header.tsx";
const Root = () => {
    return (
        <>
            <Header />
            <hr className={"opacity-30"} />
            <Outlet />
            <TanStackRouterDevtools />
        </>
    );
};

export const Route = createRootRoute({
    component: Root,
});
