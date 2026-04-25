'use client'

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Transition, TransitionStatus } from "react-transition-group";
import Link from "next/link";
import { Laptop } from "../../types";
import { useSidebarTab } from "@/app/hooks/useSidebarTab";

const TRANSTITON_DURATION = 280;

const defaultStyle = {
    transition: `opacity ${TRANSTITON_DURATION}ms ease, transform ${TRANSTITON_DURATION}ms cubic-bezier(.2,.8,.2,1), filter ${TRANSTITON_DURATION}ms ease`,
    opacity: 0,
    visibility: "visible",
    transform: "translateX(2.4rem) scale(.96)",
    filter: "blur(.4rem)",
};

const transitionStyles: Record<TransitionStatus, any> = {
    entering: {
        opacity: 1,
        visibility: "visible",
        transform: "translateX(0) scale(1)",
        filter: "blur(0)",
    },
    entered: {
        opacity: 1,
        visibility: "visible",
        transform: "translateX(0) scale(1)",
        filter: "blur(0)",
    },
    exiting: {
        opacity: 0,
        visibility: "visible",
        transform: "translateX(2.4rem) scale(.96)",
        filter: "blur(.4rem)",
    },
    exited: {
        opacity: 0,
        visibility: "visible",
        transform: "translateX(2.4rem) scale(.96)",
        filter: "blur(.4rem)",
    },
    unmounted: {
        opacity: 0,
        visibility: "visible",
        transform: "translateX(2.4rem) scale(.96)",
        filter: "blur(.4rem)",
    },
};



const blockStyle =
    "w-[70%] h-full flex flex-col items-center justify-start py-[1rem] overflow-y-auto rounded-[2.6rem] px-[.5rem] sidebar-scroll";

const buttonStyle = `
        group
        flex items-center justify-start
        w-full min-h-[4.2rem]
        overflow-hidden whitespace-nowrap
        text-[1.35rem] text-center text-(--sidebar-elem-text-color)
        px-[1.2rem]
        mb-[.45rem]
        bg-(--sidebar-elem-bg-color)
        main-border soft-shadow
        transition-all duration-300
        hover:-translate-y-[2px]
        hover:brightness-110
        hover:shadow-[0_0_2.2rem_rgba(120,160,255,.18)]
        active:translate-y-0
        active:shadow-[var(--inset-shadow-strong)]
        rounded-[1.8rem]
        cursor-pointer
        font-[700]
    `;

export function ChooseMenu({
    brandsWithLines,
    linesWithGenerations,
    selectedState,
}: {
    brandsWithLines: Record<Laptop["brand"], Laptop["line"][]>;
    linesWithGenerations: Record<Laptop["line"], Laptop["generation"][]>;
    selectedState: {
        vendor: Laptop["brand"];
        line: Laptop["line"];
        generation?: NonNullable<Laptop["generation"]>;
    };
}) {
    const vendors = Object.keys(brandsWithLines);

    const { sidebarTab } = useSidebarTab()

    const [currentVendor, setCurrentVendor] = useState<Laptop["brand"] | null>(
        selectedState.vendor ?? null
    );
    const [currentLine, setCurrentLine] = useState<Laptop["line"] | null>(selectedState.line ?? null);
    const [currentGeneration, setCurrentGeneration] = useState<Laptop["generation"] | null>(selectedState.generation ?? null);

    const lineRef = useRef<HTMLDivElement | null>(null);
    const modelRef = useRef<HTMLDivElement | null>(null);

    const [isLineOpen, setIsLineOpen] = useState(!!selectedState);
    const [isModelOpen, setIsModelOpen] = useState(!!selectedState.generation);

    useEffect(() => {
        if (selectedState.vendor) {
            setCurrentVendor(selectedState.vendor)
            setCurrentLine(selectedState.line)

            setIsLineOpen(true)
            setIsModelOpen(true)
        } else {
            setCurrentVendor(null);
            setCurrentLine(null);
            setCurrentGeneration(null);

            setIsLineOpen(false);
            setIsModelOpen(false);
        }

        if (selectedState.generation) {
            setCurrentGeneration(selectedState.generation)
        }
    }, [selectedState])

    useEffect(() => { console.log("render menu") })

    const vendorClickHandler = (vendor: Laptop["brand"]) => {
        setIsLineOpen((state) => !state);
        if (vendor !== currentVendor) {
            setIsLineOpen(true);
            setCurrentVendor(vendor);
        } else {
            setCurrentVendor(null);
        }
        setCurrentLine(null);
        setCurrentGeneration(null);
        setIsModelOpen(false);
    };

    const lineClickHandler = (line: Laptop["line"]) => {
        setIsModelOpen((state) => !state);
        if (line !== currentLine) {
            setIsModelOpen(true);
            setCurrentLine(line);
        } else {
            setCurrentLine(null);
        }
        setCurrentGeneration(null);
    };

    const generationClickHandler = (generation: Laptop["generation"]) => {
        setCurrentGeneration(() => generation)
    };

    return (
        <div
            className={`relative w-full h-full overflow-hidden ${sidebarTab !== "choose-menu" ? "opacity-0 hidden" : ""
                }`}
        >
            <div
                className={`
                h-full flex flex-col justify-start py-[1rem] overflow-y-auto rounded-[2.6rem] px-[.5rem] sidebar-scroll
                transition-all duration-300
                ${isLineOpen ? "w-[4.6rem] opacity-70" : "w-[62%] opacity-100"}
                ${isModelOpen ? "opacity-45" : ""}
            `}
            >
                {vendors.map((vendor) => {
                    const isActive = vendor === currentVendor;

                    return (
                        <button
                            className={
                                buttonStyle +
                                ` ${isLineOpen ? "justify-center px-0" : "justify-start"} ${isActive
                                    ? "bg-(--sidebar-elem-selected-color) shadow-[0_0_2.6rem_rgba(120,160,255,.28)]"
                                    : ""
                                }`
                            }
                            onClick={() => vendorClickHandler(vendor)}
                            key={vendor}
                            type="button"
                        >
                            <span
                                className={`truncate transition-all duration-300 ${isLineOpen ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
                                    }`}
                            >
                                {vendor}
                            </span>

                            <span
                                className={`transition-all duration-300 ${isLineOpen ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
                                    }`}
                            >
                                {vendor.slice(0, 1)}
                            </span>
                        </button>
                    );
                })}
            </div>

            <Transition
                nodeRef={lineRef}
                in={isLineOpen}
                timeout={{ exit: TRANSTITON_DURATION }}
                mountOnEnter
                unmountOnExit
            >
                {(state) => (
                    <div
                        ref={lineRef}
                        className={`${blockStyle} absolute top-0 left-[5.6rem] z-[2] ${isModelOpen ? "opacity-75 scale-[.985]" : ""
                            }`}
                        style={{
                            ...defaultStyle,
                            ...transitionStyles[state],
                        }}
                    >
                        {currentVendor &&
                            brandsWithLines[currentVendor].map((line) => {
                                const hasGenerations = linesWithGenerations[line].length > 0;
                                const isActive = line === currentLine;

                                if (!hasGenerations) {
                                    return (
                                        <Link
                                            className={
                                                buttonStyle +
                                                ` justify-start ${isActive
                                                    ? "bg-(--sidebar-elem-selected-color) shadow-[0_0_2.6rem_rgba(120,160,255,.28)]"
                                                    : ""
                                                }`
                                            }
                                            href={`?vendor=${currentVendor}&line=${line}`}
                                            onClick={() => setCurrentLine(line)}
                                            key={line}
                                        >
                                            <span className="truncate">{line}</span>
                                        </Link>
                                    );
                                }

                                return (
                                    <div key={line} className="w-full mb-[.45rem]">
                                        <button
                                            className={
                                                buttonStyle +
                                                ` ${line === currentLine
                                                    ? "bg-(--sidebar-elem-selected-color) shadow-[0_0_2.6rem_rgba(120,160,255,.28)]"
                                                    : ""
                                                }`
                                            }
                                            onClick={() => lineClickHandler(line)}
                                            type="button"
                                        >
                                            <span className="truncate">{line}</span>
                                            <span
                                                className={`ml-auto transition-transform duration-300 ${line === currentLine && isModelOpen ? "rotate-180" : ""
                                                    }`}
                                            >
                                                ↓
                                            </span>
                                        </button>

                                        <div
                                            className={`grid transition-all duration-300 ease-[cubic-bezier(.2,.8,.2,1)] ${line === currentLine && isModelOpen
                                                ? "grid-rows-[1fr] opacity-100 mt-[.5rem]"
                                                : "grid-rows-[0fr] opacity-0"
                                                }`}
                                        >
                                            <div className="overflow-hidden">
                                                <div className="flex flex-col gap-[.45rem] pl-[1rem]">
                                                    {linesWithGenerations[line].map((generation, index) => (
                                                        <Link
                                                            href={`?vendor=${currentVendor}&line=${line}&generation=${generation}`}
                                                            className={
                                                                buttonStyle +
                                                                ` min-h-[3.8rem] text-[1.25rem] rounded-[1.5rem] ${generation === currentGeneration
                                                                    ? "bg-(--sidebar-elem-selected-color) shadow-[0_0_2.2rem_rgba(120,160,255,.25)]"
                                                                    : ""
                                                                }`
                                                            }
                                                            key={`${generation}-${index}`}
                                                            onClick={() => generationClickHandler(generation)}
                                                        >
                                                            <span className="truncate">{generation}</span>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                )}
            </Transition>


        </div>
    );
}
