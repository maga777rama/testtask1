import { toast, Toaster } from "react-hot-toast";
import { useFavouriteStore } from "../../stores/favouritesStore.ts";
import { Button } from "antd";

export const ToggleFavourite = (cardId: { id: number }) => {
    const favouriteList = useFavouriteStore((state) => state.cards);
    const toggle = useFavouriteStore((state) => state.toggleCard);
    const isFav = favouriteList.includes(cardId.id);

    const buttonText = isFav ? "Удалить из избранного" : "Добавить в избранное";

    const notify = () =>
        toast.success(!isFav ? "Добавлен в избранное" : "Удален из избранного");

    const handleToggle: (
        event: React.MouseEvent<HTMLElement, MouseEvent>,
    ) => void = (event) => {
        event.preventDefault();
        event.stopPropagation();
        toggle(cardId.id);
        notify();
    };

    return (
        <div>
            <Button
                type="primary"
                style={{
                    backgroundColor: "gray",
                    // borderColor: isFav ? "orange" : "",
                    border: `2px solid ${isFav ? "orange" : "gray"}`,
                    zIndex: 1000,
                }}
                onClick={handleToggle}
            >
                {buttonText}
            </Button>
            <Toaster
                toastOptions={{
                    className: "",
                    success: {
                        style: {
                            background: "#3c3e44",
                            color: "#fff",
                            fontWeight: "normal",
                            fontSize: "14px",
                        },
                    },
                }}
            />
        </div>
    );
};
