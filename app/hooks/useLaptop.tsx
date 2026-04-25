import { create } from "zustand";
import { Laptop } from "../types";

interface LaptopState {
    laptop: Laptop | null;
    setLaptop: (newLaptop: Laptop) => void;
    clearLaptop: () => void;
}

export const useLaptop = create<LaptopState>((set) => ({
    laptop: null,
    setLaptop: (newLaptop) => {
        set(() => ({ laptop: newLaptop }));
    },
    clearLaptop: () => {
        set(() => ({ laptop: null }));
    },
}));
