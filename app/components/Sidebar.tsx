'use client'

import { useEffect, useRef, useState } from "react";
import {Transition} from "react-transition-group";
import Link from "next/link";

const duration = 200;

const defaultStyle = {
    transition: `opacity ${duration}ms ease, transform ${duration}ms ease`,
    opacity: 0,
    transform: "translateX(0)"
};

const transitionStyles = {
    entering: { opacity: 1, transform: "translateX(-20px)" },
    entered: { opacity: 1, transform: "translateX(-20px)" },
    exiting: { opacity: 0, transform: "translateX(0)" },
    exited: { opacity: 0, transform: "translateX(0)" },
};

export default function Sidebar({vendorsWithModels, modelsWithLaptops}) {
    const vendors = Object.keys(vendorsWithModels);
    const laptops = Object.keys(modelsWithLaptops);

    const [currentVendor, setCurrentVendor] =
        useState<keyof typeof vendorsWithModels | null>(null);
    
    const [currentModel, setCurrentModel] = useState<keyof typeof modelsWithLaptops | null>(null)

    const modelRef = useRef<HTMLDivElement | null>(null);
    const laptopRef = useRef<HTMLDivElement | null>(null);

    const [isModelOpen, setIsModelOpen] = useState(false)
    const [isLaptopOpen, setIsLaptopOpen] = useState(false)

    const blockStyle ="h-full w-[150px] flex flex-col items-center justify-start py-[1em] overflow-y-auto"
    const buttonStyle = "w-full text-left px-[1em] hover:bg-gray-300 cursor-pointer";
    const openBlocksStyle =
        "bg-[var(--background)] shadow-[var(--shadow)]";
    return (
        <aside className="min-w-fit max-w-1/6 h-full flex text-xl">
            <div className={blockStyle}>
                {vendors.map((vendor) => {
                    return (
                        <button
                            className={buttonStyle}
                            onClick={() => {
                                setIsModelOpen((state) => !state);
                                if (vendor !== currentVendor) {
                                    setIsModelOpen(true);
                                }
                                setIsLaptopOpen(false)
                                setCurrentVendor(vendor);
                            }}
                            key={`${vendor}-${Date.now()}`}
                        >
                            {vendor}
                        </button>
                    );
                })}
            </div>
            <Transition nodeRef={modelRef} in={isModelOpen}>
                {(state) => (
                    <div
                        ref={modelRef}
                        className={`${blockStyle} ${openBlocksStyle}`}
                        style={{
                            ...defaultStyle,
                            ...transitionStyles[state],
                        }}
                    >
                        {currentVendor &&
                            vendorsWithModels[currentVendor].map((model) => {
                                return (
                                    <button
                                        className={buttonStyle}
                                        key={`${model}-${Date.now()}`}
                                        onClick={
                                            ()=>{
                                                setIsLaptopOpen(
                                                    (state) => !state
                                                );
                                                if (model !== currentModel) {
                                                    setIsLaptopOpen(true);
                                                }
                                                setCurrentModel(model);
                                            }
                                        }
                                    >
                                        {model}
                                    </button>
                                );
                            })}
                    </div>
                )}
            </Transition>
            <Transition nodeRef={laptopRef} in={isLaptopOpen}>
                {(state) => (
                    <div
                        ref={laptopRef}
                        className={`${blockStyle} ${openBlocksStyle}`}
                        style={{
                            ...defaultStyle,
                            ...transitionStyles[state],
                        }}
                    >
                        {currentModel &&
                            modelsWithLaptops[currentModel].map((laptop) => {
                                return (
                                    <Link
                                        href={`?laptop=${laptop}`}
                                        className={buttonStyle}
                                        key={`${laptop}-${Date.now()}`}
                                    >
                                        Ноутбук {laptop}
                                    </Link>
                                );
                            })}
                    </div>
                )}
            </Transition>
        </aside>
    );
}