import {FC, SelectHTMLAttributes, useRef } from "react"

interface ComponentSelectProps {
    name: string;
    id: string;
    labelOption: string;
    selectedOption: string;
    options: string[];
    onChange?: SelectHTMLAttributes<HTMLSelectElement>["onChange"];
}

const ComponentSelect : FC<ComponentSelectProps> =  ({name, id, labelOption, selectedOption, options, onChange}) => {
    const ref = useRef<HTMLSelectElement>(null)
    console.log(options)

    const popOverRef = useRef<HTMLDivElement>(null)
    

    let isExcluded = false
    return (
        <>
            <select
                ref={ref}
                className="button h-[5rem] rounded-[50px]  text-center text-[1.8rem]"
                name={name}
                id={id}
                onChange={onChange}
                value={selectedOption}
            >
                <option value="">{labelOption}</option>
                {options.map((option) => {
                    if (option === "_") {
                        isExcluded = true;
                        return;
                    }

                    return (
                        <option
                            key={option}
                            value={option}
                            disabled={isExcluded}
                            className="h-[100px]"

                            title={isExcluded ? "Недоступно в данной конфигурации" : ""}
                        >
                            {option}
                        </option>
                    );
                })}
            </select>
        </>
    );
}

export default ComponentSelect