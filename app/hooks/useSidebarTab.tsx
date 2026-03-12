import { create } from "zustand";

type SidebarTab = "choose-menu" | "laptop-info"

interface SidebarTabState {
    sidebarTab: SidebarTab;
    setSidebarTab: (newSidebarTab: string) => void;
    swapSidebarTab: () => void;
}

export const useSidebarTab = create<SidebarTabState>((set) => ({
    sidebarTab: "choose-menu",
    setSidebarTab: (newSidebarTab) => {
        if (
            newSidebarTab === "choose-menu" ||
            newSidebarTab === "laptop-info"
        ) {
            set(() => ({ sidebarTab: newSidebarTab }));
        } else {
            console.log("Invalid sidebar tab name")
        }
    },
    swapSidebarTab: () => {set((state) => {
        return state.sidebarTab === "choose-menu"
            ? { sidebarTab: "laptop-info" }
            : { sidebarTab: "choose-menu" };
    });
    },
}));
