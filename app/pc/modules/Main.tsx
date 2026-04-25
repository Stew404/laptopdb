"use client";

import { Laptop } from "../../types";
import ComponentForm from "../components/ComponentForm/ComponentForm";
import LaptopInfo from "../components/LaptopInfo";
import BlockStyle from "@/app/ui/BlockStyle";
import { useBaseLaptop } from "@/app/hooks/useBaseLaptop";
import { useEffect } from "react";

export default function Main({ laptops }: { laptops: Laptop[] }) {
    const { setBaseLaptop, clearBaseLaptop } = useBaseLaptop();

    useEffect(() => {
        setBaseLaptop(laptops[0]);

        return () => {
            clearBaseLaptop();
        };
    }, [laptops, setBaseLaptop, clearBaseLaptop]);

    return (
        <BlockStyle style="blue">
            <main className="relative w-full h-full p-[1.2rem] flex flex-col rounded-[4rem] rounded-br-[2rem] overflow-visible animate-device-panel">
                <div className="relative z-[50] shrink-0">
                    <ComponentForm laptops={laptops} />
                </div>

                <div className="relative z-[1] flex-1 min-h-0 mt-[1.2rem]">
                    <LaptopInfo />
                </div>
            </main>
        </BlockStyle>
    );
}