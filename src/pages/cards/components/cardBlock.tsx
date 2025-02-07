import { FC } from "react";
import { ICardBasic } from "../../../types/types.ts";
import { ToggleFavourite } from "../../../shared/components/toggleFavourite.tsx";
import { Link } from "react-router";

export const CardBlock: FC<ICardBasic> = ({ id, name, image }) => {
    return (
        <Link to={"/cards/$cardId"} className="block">
            <div className="flex flex-col sm:flex-row w-[300px] sm:w-[600px] bg-[#3c3e44] rounded-xl text-white font-bold text-2xl transition-opacity duration-200 hover:opacity-85">
                <img
                    src={image}
                    alt={`image_${name}`}
                    className="w-[300px] h-[300px] sm:w-[228px] sm:h-[228px]  rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none"
                />

                <div className="flex flex-1 flex-col justify-between p-4 w-[300px] sm:w-[228] sm:flex-row sm:items-center">
                    <p className="text-center sm:text-left">{name}</p>

                    <div className="mt-2 sm:mt-0 self-center sm:self-end">
                        <ToggleFavourite id={id} />
                    </div>
                </div>
            </div>
        </Link>
    );
};
