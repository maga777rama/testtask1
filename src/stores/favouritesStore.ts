import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavouritesState {
    cards: Array<number>;
    toggleCard: (id: number) => void;
}

export const useFavouriteStore = create<FavouritesState>()(
    persist(
        (set) => ({
            cards: [],
            toggleCard: (id) => {
                set((state) => ({
                    cards: state.cards.includes(id)
                        ? state.cards.filter((cardId) => cardId !== id)
                        : [...state.cards, id],
                }));
            },
        }),
        { name: "favouriteCards-storage" },
    ),
);
