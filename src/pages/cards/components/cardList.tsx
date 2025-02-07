import { ICard } from "../../../types/types.ts";
import { CardBlock } from "./cardBlock.tsx";

export const CardList = ({ data }: { data: ICard[] }) => {
    return (
        <div className={"grid gap-5 grid-cols-1 xl:grid-cols-2 text-white"}>
            {data.map((item: ICard) => (
                <CardBlock key={item.id} {...item} />
            ))}
        </div>
    );
};
