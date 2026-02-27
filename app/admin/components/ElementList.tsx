
import { getLaptops } from "@/app/db/laptops";
import Element from "./Element";

import remove from "@/app/actions/remove";

type ElementType = "laptop"
//  | "component" | "mobile"

const ELEMENT_GETTERS = {
    "laptop": getLaptops
}

export default async function ElementList({type, searchQuery = "", page}: {type: ElementType, searchQuery?: string, page: number}){
    const elements = await ELEMENT_GETTERS[type](searchQuery, page);
    
    return (
        <div className="mb-[2rem]">
            {elements.length > 0 &&
                elements.map((element) => {
                    const name = `${element.brand} ${element.line} ${element.generation ?? ""} ${element.model}`;
                    const removeElem = async () => {
                        "use server";
                        const message = await remove(element.id);
                        return message;
                    };
                    return (
                        <Element
                            key={`elem-${element.id}`}
                            name={name}
                            dateEdited={new Date(
                                element.dateEdited
                            ).toLocaleString()}
                            id={element.id}
                            removeAction={removeElem}
                        />
                    );
                })}
            {elements.length == 0 && <p className="text-center">Ничего не найдено</p>}
        </div>
    );

}