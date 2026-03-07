'use client'

import { Reducer, useEffect, useReducer, useRef} from "react";
import ComponentSelect from "../../ui/ComponentSelect/ComponentSelect";
import { Laptop } from "@/app/types";
import { buildArrays, convertArraysToGroups, createArr, filterLaptops, getFormStateFromLaptop} from "./helpers";
import { ArraysReducerState, ArraysReducerUpdateStateAction, reducerActions, reducerState } from "./types";
import { useLaptop } from "@/app/hooks/useMessage";
import BlockStyle from "@/app/ui/BlockStyle";

const reducer: Reducer<reducerState, reducerActions> = (state, action) => {
    if (action.type === "update_field") {
        return {
            ...state,
            [action.name]: action.value,
        };
    }

    if (action.type === "update_state") {
        return {...action.state};
    }

    console.log("Unknown action");
    return state;
};   

const reducerInitialState: reducerState = {
    cpu: "",
    gpu: "",
    ram: "",
    resolution: ""
};

const arraysReducer: Reducer<
    ArraysReducerState,
    ArraysReducerUpdateStateAction
> = (state, action) => {
    if (action.type === "update_state") {
        return action.state;
    }

    console.log("Unknown action: " + action.type);
    return state;
};

export default function ComponentForm({laptops} : {laptops: Laptop[]}){
    const formRef = useRef<HTMLFormElement>(null)
    const [arraysState, arraysDispatch] = useReducer(arraysReducer, {
        cpu: convertArraysToGroups({ filtered: createArr("cpu", laptops), excluded: []}),
        gpu: convertArraysToGroups({ filtered: createArr("gpu", laptops), excluded: []}),
        ram: convertArraysToGroups({ filtered: createArr("ram", laptops), excluded: []}),
        resolution:  convertArraysToGroups({ filtered: createArr("resolution", laptops), excluded: []})
    });

    const [formState, formDispatch] = useReducer(reducer, reducerInitialState);

    const {laptop, setLaptop, clearLaptop} = useLaptop()

    useEffect(()=>{
        let [filteredLaptops, excludedLaptops] = filterLaptops(formState, laptops);
        console.log("filt: " + filteredLaptops, "excl:" + excludedLaptops)
        if(filteredLaptops.length === 1){
            setLaptop(filteredLaptops[0]);
            console.log("one laptop")
        } else {
            if(laptop) clearLaptop()
        }

        arraysDispatch({
            type: "update_state",
            state: buildArrays(formState, filteredLaptops, excludedLaptops)
        });


    }, [formState])

    useEffect(()=>{
        if(laptop){
            formDispatch({
                type: "update_state",
                state: getFormStateFromLaptop(laptop),
            })
        } else {
            formDispatch({
                type: "update_state",
                state: reducerInitialState,
            });
        }
    }, [laptop])

    useEffect(()=>{
        formDispatch({
            type: "update_state",
            state: reducerInitialState,
        });
    }, [laptops])

    return (
        <BlockStyle additionalClasses="shadow-padding rounded-full">
            <form
                ref={formRef}
                action=""
                className="flex gap-[2rem] justify-between w-full"
            >
                <ComponentSelect
                    name="cpu"
                    id="cpu-select"
                    selectedOption={formState.cpu}
                    labelOption="Процессор"
                    options={arraysState.cpu}
                    onChange={(newValue) => {
                        console.log(newValue)
                        formDispatch({
                            type: "update_field",
                            name: "cpu",
                            value: newValue as string,
                        });
                    }}
                />
                <ComponentSelect
                    name="gpu"
                    id="gpu-select"
                    selectedOption={formState.gpu}
                    labelOption="Видеокарта"
                    options={arraysState.gpu}
                    onChange={(newValue) => {
                        formDispatch({
                            type: "update_field",
                            name: "gpu",
                            value: newValue as string,
                        });
                    }}
                />
                <ComponentSelect
                    name="ram"
                    id="ram-select"
                    selectedOption={formState.ram}
                    labelOption="ОЗУ"
                    options={arraysState.ram}
                    onChange={(newValue) => {
                        formDispatch({
                            type: "update_field",
                            name: "ram",
                            value: newValue as string,
                        });
                    }}
                />

                <ComponentSelect
                    name="resolution"
                    id="resolution-select"
                    selectedOption={formState.resolution}
                    labelOption="Разрешение экрана"
                    options={arraysState.resolution}
                    onChange={(newValue) => {
                        formDispatch({
                            type: "update_field",
                            name: "resolution",
                            value: newValue as string,
                        });
                    }}
                />
            </form>
        </BlockStyle>
    );
}