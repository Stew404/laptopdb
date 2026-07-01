import { Object3D, Object3DEventMap } from "three";
import {create} from "zustand";

type ScrewCoords = { x: number; y: number; z:number, node: Object3D<Object3DEventMap> };

type ScrewsCoolingCoords = ScrewCoords[]
type ScrewsScreenCoords = ScrewCoords[]

export type ScrewsCoords = [ScrewsCoolingCoords, ScrewsScreenCoords]

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
    setModelPath: (newPath:string) => void;
    setScrewsCoords: (newCoords: ScrewsCoords) => void;
    screwsCoords: ScrewsCoords
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
        })),
    screwsCoords: [[],[]],
    setScrewsCoords: (newCoords)=>
    set((state)=> ({
        ...state,
        screwsCoords: newCoords
    }))
}));