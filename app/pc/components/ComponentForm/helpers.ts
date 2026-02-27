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

export const filterLaptops = (formState: reducerState, laptops: Laptop[]) => {
    return laptops.filter((laptop) => {
        for (const key in formState) {
            let filter = filters[key as keyof reducerState];

            if (!filter(laptop, formState[key as keyof reducerState])) {
                return false;
            }
        }

        return true;
    });
};

export const buildArrays = (
    formState: reducerState,
    filteredLaptops: Laptop[]
) => {
    let arrays: ArraysReducerState = {
        cpu: [],
        gpu: [],
        ram: [],
        resolution: []
    }

    const fields = Object.keys(formState) as (keyof reducerState)[];

    fields.forEach((key)=>{
        arrays[key] = createArr(key, filteredLaptops)
    });

    return arrays;
};
