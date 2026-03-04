'use client'

import { Reducer, useEffect, useReducer, useRef} from "react";
import ComponentSelect from "../../ui/ComponentSelect";
import { Laptop } from "@/app/types";
import { buildArrays, createArr, filterLaptops, getFormStateFromLaptop} from "./helpers";
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
        cpu: createArr("cpu", laptops),
        gpu: createArr("gpu", laptops),
        ram: createArr("ram", laptops),
        resolution: createArr("resolution", laptops)
    });

    const [formState, formDispatch] = useReducer(reducer, reducerInitialState);

    const {laptop, setLaptop, clearLaptop} = useLaptop()

    useEffect(()=>{
        let filteredLaptops = filterLaptops(formState, laptops);
        //TODO: transfer these filtered laptops to main component if last one laptop
        console.log(formState) 
        if(filteredLaptops.length === 1){
            setLaptop(filteredLaptops[0]);
            
        } else {
            if(laptop) clearLaptop()
        }

        arraysDispatch({
            type: "update_state",
            state: buildArrays(formState, filteredLaptops),
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
        </BlockStyle>
    );
}