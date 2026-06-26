import {create} from "zustand";

interface ModelControllerState {
    isLaptopOpen: boolean;
    isBottomCoverHidden: boolean;
    isCoolingHidden: boolean;
    mode: "free" | "disassembly"
    changeIsLaptopOpen: () => void;
    changeisBottomCoverHidden: () => void;
    changeisCoolingHidden: () => void;
    changeMode: ()=> void,
    disassemblyMenuStage: number;
    setNextStage: ()=>void;
    setPrevStage: ()=>void;
    modelPath: string;
    setModelPath: (newPath:string) => void
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
    isCoolingHidden: false,
    changeisCoolingHidden: () =>
        set((state) => ({
            ...state,
            isCoolingHidden: !state.isCoolingHidden,
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
    modelPath: "",
    setModelPath: (newPath)=>
        set((state)=>({
            ...state,
            modelPath: newPath
        }))
}));