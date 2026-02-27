'use client'

import { Reducer, useEffect, useReducer, useRef} from "react";
import ComponentSelect from "../../ui/ComponentSelect";
import { Laptop } from "@/app/types";
import { buildArrays, createArr, filterLaptops} from "./helpers";
import { ArraysReducerState, reducerState, reducerUpdateFieldAction, reducerUpdateStateAction } from "./types";

const reducer: Reducer<reducerState, reducerUpdateFieldAction> = (
    state,
    action
) => {
    if (action.type === "update_field") {
        return {
            ...state,
            [action.name]: action.value,
        };
    }

    console.log("Unknown action: " + action.type)
    return state
};   

const reducerInitialState: reducerState = {
    cpu: "",
    gpu: "",
    ram: "",
    resolution: ""
};

const arraysReducer: Reducer<ArraysReducerState, reducerUpdateStateAction> = (state, action)=>{
    if (action.type === "update_state") {
        return action.state;
    }

    console.log("Unknown action: " + action.type);
    return state;
}

export default function ComponentForm({laptops} : {laptops: Laptop[]}){
    const formRef = useRef<HTMLFormElement>(null)
    const [arraysState, arraysDispatch] = useReducer(arraysReducer, {
        cpu: createArr("cpu", laptops),
        gpu: createArr("gpu", laptops),
        ram: createArr("ram", laptops),
        resolution: createArr("resolution", laptops)
    });

    const [formState, formDispatch] = useReducer(reducer, reducerInitialState);

    useEffect(()=>{
        let filteredLaptops = filterLaptops(formState, laptops);
        //TODO: transfer these filtered laptops to main component if last one laptop
        console.log(filteredLaptops)

        arraysDispatch({
            type: "update_state",
            state: buildArrays(formState, filteredLaptops),
        });


    }, [formState])

    return (
        <form ref={formRef} action="">
            <ComponentSelect
                name="cpu"
                id="cpu-select"
                selectedOption={formState.cpu}
                labelOption="Процессор"
                options={arraysState.cpu}
                onChange={(e) => {
                    formDispatch({
                        type: "update_field",
                        name: "cpu",
                        value: e.target.value,
                    });
                }}
            />
            <ComponentSelect
                name="gpu"
                id="gpu-select"
                selectedOption={formState.gpu}
                labelOption="Видеокарта"
                options={arraysState.gpu}
                onChange={(e) => {
                    formDispatch({
                        type: "update_field",
                        name: "gpu",
                        value: e.target.value,
                    });
                }}
            />
            <ComponentSelect
                name="ram"
                id="ram-select"
                selectedOption={formState.ram}
                labelOption="ОЗУ"
                options={arraysState.ram}
                onChange={(e) => {
                    formDispatch({
                        type: "update_field",
                        name: "ram",
                        value: e.target.value,
                    });
                }}
            />

            <ComponentSelect
                name="resolution"
                id="resolution-select"
                selectedOption={formState.resolution}
                labelOption="Разрешение экрана"
                options={arraysState.resolution}
                onChange={(e) => {
                    formDispatch({
                        type: "update_field",
                        name: "resolution",
                        value: e.target.value,
                    });
                }}
            />
        </form>
    );
}