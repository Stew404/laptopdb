import {create} from "zustand";

interface ModelControllerState {
    isLaptopOpen: boolean;
    isBottomCoverHidden: boolean;
    isTopComponentsHidden: boolean;
    changeIsLaptopOpen: () => void;
    changeisBottomCoverHidden: () => void;
    changeisTopComponentsHidden: () => void;
}

export const useModelController = create<ModelControllerState>((set) => ({
    isLaptopOpen: false,
    changeIsLaptopOpen: () =>
        set((state) => ({ ...state, isLaptopOpen: !state.isLaptopOpen })),
    isBottomCoverHidden: false,
    changeisBottomCoverHidden: () =>
        set((state) => ({ ...state, isBottomCoverHidden: !state.isBottomCoverHidden })),
    isTopComponentsHidden: false,
    changeisTopComponentsHidden: () =>
        set((state) => ({
            ...state, 
            isTopComponentsHidden: !state.isTopComponentsHidden,
        })),
}));