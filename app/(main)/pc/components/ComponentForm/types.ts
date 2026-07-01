import { GroupBase } from "react-select";
import { SelectOption } from "../../ui/ComponentSelect/types";

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

export interface filteredAndExcludedArrays {
    filtered: string[],
    excluded: string[]
}

export interface ArraysReducerState {
    cpu: GroupBase<SelectOption>[],
    gpu: GroupBase<SelectOption>[],
    ram: GroupBase<SelectOption>[],
    resolution: GroupBase<SelectOption>[],
}

export interface ArraysReducerUpdateStateAction {
    type: "update_state",
    state: ArraysReducerState
}
