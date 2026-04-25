import { create } from "zustand";
import { Laptop } from "../types";

interface BaseLaptopState {
    baseLaptop: Laptop | null;
    setBaseLaptop: (newBaseLaptop: Laptop) => void;
    clearBaseLaptop: () => void;
}

export const useBaseLaptop = create<BaseLaptopState>((set) => ({
    baseLaptop: null,
    setBaseLaptop: (newBaseLaptop) => {
        set(() => ({ baseLaptop: newBaseLaptop }));
    },
    clearBaseLaptop: () => {
        set(() => ({ baseLaptop: null }));
    },
}));
