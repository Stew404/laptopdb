export interface reducerState {
    cpu: string;
    gpu: string;
    ram: string;
    resolution: string
}

export interface reducerUpdateFieldAction {
    type: "update_field";
    name: string;
    value: string;
}

export interface ArraysReducerState {
    cpu: string[];
    gpu: string[];
    ram: string[];
    resolution: string[]
}

export interface reducerUpdateStateAction {
    type: "update_state",
    state: ArraysReducerState
}
