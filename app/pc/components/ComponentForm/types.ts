export interface reducerState {
    cpu: string;
    gpu: string;
    ram: string;
    resolution: string
}

interface reducerUpdateFieldAction {
    type: "update_field";
    name: string;
    value: string;
}
interface reducerUpdateStateAction {
    type: "update_state";
    state: reducerState
}

export type reducerActions = reducerUpdateFieldAction | reducerUpdateStateAction;

export interface ArraysReducerState {
    cpu: string[];
    gpu: string[];
    ram: string[];
    resolution: string[]
}

export interface ArraysReducerUpdateStateAction {
    type: "update_state",
    state: ArraysReducerState
}
