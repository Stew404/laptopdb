import { Component, FC, SelectHTMLAttributes, useRef } from "react"

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
    return (
        <select
            ref={ref}
            className="button h-[5rem] rounded-[50px]  text-center text-[1.8rem]"
            name={name}
            id={id}
            onChange={onChange}
            value={selectedOption}
        >
            <option value="">{labelOption}</option>
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
}

export default ComponentSelect