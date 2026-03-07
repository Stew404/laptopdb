'use client'
import {FC, ReactNode, useEffect, useState} from "react"
import dynamic from "next/dynamic";
import { ActionMeta, GroupBase, Props, SingleValue } from "react-select";
import { filteredAndExcludedArrays } from "../../components/ComponentForm/types";
import { ComponentSelectProps, SelectOption } from "./types";
import { selectStyles } from "./variables";


const Select = dynamic<Props<SelectOption, false, GroupBase<SelectOption>>>(() => import("react-select"), {ssr: false})


const ComponentSelect : FC<ComponentSelectProps> =  ({name, id, labelOption, selectedOption, options, onChange}) => {

    const changeHandler = (
        value: SingleValue<SelectOption>,
        action: ActionMeta<{ value: string; label: string }>
    ) => {
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

    return (
        <>
            <Select
                styles={selectStyles}
                options={options}
                placeholder={
                    selectedOption === "" ? labelOption : selectedOption
                }
                onChange={changeHandler}
                formatGroupLabel={formatGroupLabel}
                noOptionsMessage={()=>{
                    return <p>Не найдено</p>
                }}
                isOptionDisabled={(option, selectValue) => {
                    console.log("option")
                    console.log(option)
                    console.log("selectValue")
                    console.log(selectValue)
                    if (typeof option.value === "string") {
                        console.log("options")
                        console.log(options)
                        return options[1].options.map((option) => option.value).includes(option.value);
                    }
                    return false;
                }}
            />
            {/* <select
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
            </select> */}
        </>
    );
}

export default ComponentSelect