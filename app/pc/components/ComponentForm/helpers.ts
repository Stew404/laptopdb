import { Laptop } from "@/app/types";
import { ArraysReducerState, reducerState } from "./types";

export const getGpu = (laptop: Laptop) => {
    if (typeof laptop.gpu === "string") {
        return laptop.gpu;
    } else if (typeof laptop.igpu === "string") {
        return laptop.igpu;
    } else {
        return "Невозможно";
    }
};

export const getRam = (laptop: Laptop) => {
    return laptop.ram.toString();
};

export const getCpu = (laptop: Laptop) =>{
    return laptop.cpu
}

export const getResolution = (laptop: Laptop) => {
    return laptop.resolution
}

const getters = {
    "cpu": getCpu,
    "gpu": getGpu,
    "ram": getRam,
    "resolution": getResolution
}


export const createArr = (key: keyof reducerState, laptops: Laptop[])=>{
    let arr = laptops.map((laptop) => getters[key](laptop));
    return [...new Set(arr)];
}


const isConsistsToCpu = (laptop: Laptop, stateCpu: string)=>{
    if(!stateCpu) return true

    return laptop.cpu === stateCpu;
}

const isConsistsToGpu = (laptop: Laptop, stateGpu: string) => {
    if (!stateGpu) return true;

    return getGpu(laptop) === stateGpu;
};

const isConsistsToRam = (laptop: Laptop, stateRam: string) => {
    if (!stateRam) return true;

    return getRam(laptop) === stateRam;
};

const isConsistsToResolution = (laptop: Laptop, stateResolution: string) => {
    if (!stateResolution) return true;

    return getResolution(laptop) === stateResolution;
};

const filters = {
    cpu: isConsistsToCpu,
    gpu: isConsistsToGpu,
    ram: isConsistsToRam,
    resolution: isConsistsToResolution
}

export const getFormStateFromLaptop = (laptop: Laptop)=>{
    let state: Partial<reducerState> = {}

    for (const key in getters) {
        state[key as keyof reducerState] = getters[key as keyof reducerState](laptop);
    }
    return state as reducerState
}

export const filterLaptops = (formState: reducerState, laptops: Laptop[]) => {
    let excludedLaptops: Laptop[] = [];
    let filteredLaptops = laptops.filter((laptop) => {
        for (const key in formState) {
            let filter = filters[key as keyof reducerState];

            if (!filter(laptop, formState[key as keyof reducerState])) {
                excludedLaptops.push(laptop);
                return false;
            }
        }

        return true;
    });

    return [filteredLaptops, excludedLaptops];
};

export const buildArrays = (
    formState: reducerState,
    filteredLaptops: Laptop[],
    excludedLaptops: Laptop[]
) => {
    let arrays: ArraysReducerState = {
        cpu: [],
        gpu: [],
        ram: [],
        resolution: []
    }

    const fields = Object.keys(formState) as (keyof reducerState)[];

    fields.forEach((key)=>{
        arrays[key] = [
            ...new Set([
                ...createArr(key, filteredLaptops),
                "_",
                ...createArr(key, excludedLaptops),
            ]),
        ];
    });

    return arrays;
};
