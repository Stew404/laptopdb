'use client'
import {FC, ReactNode, useMemo} from "react"
import dynamic from "next/dynamic";
import { GroupBase, Props, SingleValue } from "react-select";
import { ComponentSelectProps, SelectOption } from "./types";
import { selectStyles } from "./variables";

const Select = dynamic<Props<SelectOption, false, GroupBase<SelectOption>>>(() => import("react-select"), {ssr: false})

const ComponentSelect : FC<ComponentSelectProps> =  ({labelOption, selectedOption, options, onChange}) => {
    const changeHandler = (value: SingleValue<SelectOption>) => {
        if (value && onChange) {
            onChange(value.value);
        }
    };

    const formatGroupLabel = (group: GroupBase<SelectOption>) => {
        return (
            <div>
                <span>{group.label}</span>
            </div>
        ) as ReactNode;
    };

    const selectedValue = useMemo(() => {
        for (const group of options) {
            const found = group.options.find((option) => option.value === selectedOption);
            if (found) return found;
        }
        return null;
    }, [options, selectedOption]);

    const excludedValues = useMemo(() => {
        return options[1]?.options.map((option) => option.value) ?? [];
    }, [options]);

    return (
        <Select
            styles={selectStyles}
            options={options}
            value={selectedValue}
            placeholder={labelOption}
            onChange={changeHandler}
            formatGroupLabel={formatGroupLabel}
            noOptionsMessage={() => <p>Не найдено</p>}
            isSearchable={false}
            isOptionDisabled={(option) => excludedValues.includes(option.value)}
        />
    );
}

export default ComponentSelect
