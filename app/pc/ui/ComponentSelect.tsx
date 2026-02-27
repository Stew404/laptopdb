import { FC, SelectHTMLAttributes } from "react"

interface ComponentSelectProps {
    name: string;
    id: string;
    labelOption: string;
    selectedOption: string;
    options: string[];
    onChange?: SelectHTMLAttributes<HTMLSelectElement>["onChange"];
}

const ComponentSelect : FC<ComponentSelectProps> =  ({name, id, labelOption, selectedOption, options, onChange}) => {
    return (
        <select className="button h-[5rem] rounded-[50px]" name={name} id={id} onChange={onChange} defaultValue={selectedOption}>
            <option value="">{labelOption}</option>
            {options.map((option, index) => (
                <option
                    key={option}
                    value={option}
                >
                    {option}
                </option>
            ))}
        </select>
    );
}

export default ComponentSelect