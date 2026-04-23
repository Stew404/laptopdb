import {create} from "zustand";

interface ModelControllerState {
    isLaptopOpen: boolean;
    isBottomCoverHidden: boolean;
    isTopComponentsHidden: boolean;
    mode: "free" | "disassembly"
    changeIsLaptopOpen: () => void;
    changeisBottomCoverHidden: () => void;
    changeisTopComponentsHidden: () => void;
    changeMode: ()=> void,
    disassemblyMenuStage: number;
    setNextStage: ()=>void;
    setPrevStage: ()=>void;
}

export const useModelController = create<ModelControllerState>((set) => ({
    isLaptopOpen: false,
    changeIsLaptopOpen: () =>
        set((state) => ({ ...state, isLaptopOpen: !state.isLaptopOpen })),
    isBottomCoverHidden: false,
    changeisBottomCoverHidden: () =>
        set((state) => ({
            ...state,
            isBottomCoverHidden: !state.isBottomCoverHidden,
        })),
    isTopComponentsHidden: false,
    changeisTopComponentsHidden: () =>
        set((state) => ({
            ...state,
            isTopComponentsHidden: !state.isTopComponentsHidden,
        })),
    mode: "free",
    changeMode: () =>
        set((state) => ({
            ...state,
            mode: state.mode === "free" ? "disassembly" : "free",
        })),
    disassemblyMenuStage: 0,
    setNextStage: () =>
        set((state) => ({
            ...state,
            disassemblyMenuStage: state.disassemblyMenuStage + 1,
        })),
    setPrevStage: () =>
        set((state) => ({
            ...state,
            disassemblyMenuStage: state.disassemblyMenuStage - 1,
        })),
}));