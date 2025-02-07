interface Location {
    name: string;
    url: string;
}

export interface ICardBasic {
    id: number;
    name: string;
    image: string;
}

export interface ICard {
    id: number;
    name: string;
    status: "Alive" | "Dead" | "unknown";
    species: string;
    type: string;
    gender: "Male" | "Female" | "Genderless" | "unknown";
    origin: Location;
    location: Location;
    image: string;
    episode: string[];
    url: string;
    created: string;
}

export interface IInfo {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
}

export interface IData {
    info: IInfo;
    results: ICard[];
}

export type PageParams = {
    page: number;
};
