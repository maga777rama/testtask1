const BASE_URL = "https://rickandmortyapi.com/api/character";

export const getData = async (page: number) => {
    try {
        const response = await fetch(`${BASE_URL}?page=${page}`);
        return await response.json();
    } catch (error) {
        console.error(error);
    }
};
export const getSearchData = async (page: number, searchText: string) => {
    try {
        const response = await fetch(
            `${BASE_URL}?page=${page}&name=${searchText}`,
        );
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getFavItems = async (itemList: Array<number>) => {
    try {
        const response = await fetch(
            `${BASE_URL}/${itemList.length !== 0 ? itemList : ""}`,
        );
        return await response.json();
    } catch (error) {
        console.error(error);
    }
};

export const getCard = async (id: string) => {
    try {
        const request = await fetch(`${BASE_URL}/${id}`);
        return await request.json();
    } catch (error) {
        console.error(error);
    }
};

export const getEpisodes = async (episodes: Array<string>) => {
    const episodeIds = episodes.map((url) => url.split("/").pop()).join(",");
    const response = await fetch(
        `https://rickandmortyapi.com/api/episode/${episodeIds}`,
    );
    return await response.json();
};
