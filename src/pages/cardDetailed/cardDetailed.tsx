import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getCard } from "../../api/api.ts";
import { ToggleFavourite } from "../../shared/components/toggleFavourite.tsx";
import { getEpisodes } from "../../api/api.ts";
import { useParams } from "react-router";

export const CardDetailed = () => {
    const { cardId } = useParams();
    const { data, error, isLoading } = useQuery({
        queryKey: ["detailedItem", cardId],
        queryFn: () => getCard("1"),
        refetchOnWindowFocus: false,
        placeholderData: keepPreviousData,
    });

    const { data: episodes, isLoading: isLoadingEpisodes } = useQuery({
        queryKey: ["episodes", data?.episode],
        queryFn: () => (data ? getEpisodes(data.episode) : []),
        enabled: !!data?.episode,
    });

    if (isLoading) {
        return <div className="text-white text-center mt-4">Загрузка...</div>;
    }
    if (error) {
        return (
            <div className="text-red-500 text-center mt-4">
                Ошибка при загрузке данных(. Попробуйте обновить страницу
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto bg-[#272B33] text-white p-6 rounded-lg shadow-lg mt-10">
            <h1 className="text-2xl font-bold text-center mb-4">{data.name}</h1>
            <div className="flex flex-col md:flex-row items-center gap-4">
                <img
                    src={data.image}
                    alt={`image_${data.name}`}
                    className="w-full max-w-[300px] rounded-lg shadow-md"
                />
                <div className="flex flex-col gap-2 text-lg">
                    <p>
                        <span className="font-semibold">Статус:</span>{" "}
                        {data.status}
                    </p>
                    <p>
                        <span className="font-semibold">Вид:</span>{" "}
                        {data.species}
                    </p>
                    {data.type && (
                        <p>
                            <span className="font-semibold">Тип:</span>{" "}
                            {data.type}
                        </p>
                    )}
                    <p>
                        <span className="font-semibold">Пол:</span>{" "}
                        {data.gender}
                    </p>
                    <p>
                        <span className="font-semibold">Происхождение:</span>{" "}
                        {data.origin.name}
                    </p>
                    <p>
                        <span className="font-semibold">Локация:</span>{" "}
                        {data.location.name}
                    </p>
                </div>
            </div>
            <div className="mt-4">
                <h2 className="text-xl font-semibold mb-2">Эпизоды:</h2>
                {isLoadingEpisodes ? (
                    <p className="text-gray-400">Загрузка эпизодов...</p>
                ) : (
                    <ul className="list-disc list-inside text-gray-300">
                        {Array.isArray(episodes) ? (
                            episodes.map((ep, index) => (
                                <li key={index}>{ep.name}</li>
                            ))
                        ) : (
                            <li>{episodes.name}</li>
                        )}
                    </ul>
                )}
            </div>
            <div className="mt-4 flex justify-center">
                <ToggleFavourite id={data.id} />
            </div>
        </div>
    );
};
