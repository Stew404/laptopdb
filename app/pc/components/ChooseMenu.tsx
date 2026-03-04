'use client'

import { useEffect, useRef, useState } from "react";
import {Transition, TransitionStatus} from "react-transition-group";
import Link from "next/link";
import { Laptop } from "../../types";

const TRANSTITON_DURATION = 50;

const defaultStyle = {
    transition: `opacity ${TRANSTITON_DURATION}ms ease, transform ${TRANSTITON_DURATION}ms ease-out`,
    opacity: 0,
    visibility: "visible",
    transform: "translateX(100%)",
};

const transitionStyles: Record<TransitionStatus, any> = {
    entering: {
        opacity: 1,
        visibility: "visible",
        transform: "translateX(0)",
    },
    entered: {
        opacity: 1,
        visibility: "visible",
        transform: "translateX(0)",
    },
    exiting: {
        opacity: 0,
        visibility: "visible",
        transform: "translateX(100%)",
    },
    exited: {
        opacity: 0,
        visibility: "visible",
        transform: "translateX(100%)",
    },
    unmounted: {
        opacity: 0,
        visibility: "visible",
        transform: "translateX(100%)",
    },
};



const blockStyle =
    "w-3/5 h-full flex flex-col items-center justify-start py-[1em] overflow-y-auto";

const buttonStyle = `
        flex items-center justify-center
        w-full h-[3rem] 
        text-[1.4rem] text-center text-(--sidebar-elem-text-color) 
        px-[1em]
        mb-[.2rem]
        bg-(--sidebar-elem-bg-color) hover:bg-neutral-400 
        rounded-[8px]
        cursor-pointer
        font-normal
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

    const [currentVendor, setCurrentVendor] = useState<Laptop["brand"] | null>(
        null
    );
    const [currentLine, setCurrentLine] = useState<Laptop["line"] | null>(null);
    const [currentGeneration, setCurrentGeneration] = useState<Laptop["generation"] | null>(null);

    const lineRef = useRef<HTMLDivElement | null>(null);
    const modelRef = useRef<HTMLDivElement | null>(null);

    const [isLineOpen, setIsLineOpen] = useState(false);
    const [isModelOpen, setIsModelOpen] = useState(false);

    useEffect(()=>{
        console.log("render change")
        if(selectedState.vendor){
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

        if(selectedState.generation){
            setCurrentGeneration(selectedState.generation)
        }
    }, [selectedState])

    useEffect(()=>{console.log("render menu")})

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
        <div className="relative w-full">
            <div
                className={
                    blockStyle +
                    ` ${
                        isLineOpen
                            ? isModelOpen
                                ? "opacity-30"
                                : "opacity-60"
                            : ""
                    }`
                }
            >
                {vendors.map((vendor) => {
                    return (
                        <button
                            className={
                                buttonStyle +
                                ` ${isLineOpen ? "justify-start" : ""}
                                ${
                                    vendor === currentVendor
                                        ? "bg-(--sidebar-elem-selected-color)"
                                        : ""
                                }
                                `
                            }
                            onClick={() => {
                                vendorClickHandler(vendor);
                            }}
                            key={`${vendor}-${Date.now()}`}
                        >
                            {vendor}
                        </button>
                    );
                })}
            </div>
            <Transition
                nodeRef={lineRef}
                in={isLineOpen}
                timeout={{ exit: TRANSTITON_DURATION }}
                mountOnEnter={true}
                unmountOnExit={true}
            >
                {(state) => {
                    return (
                        <div
                            ref={lineRef}
                            className={`${blockStyle} absolute top-0 left-[40px] ${
                                isModelOpen ? "opacity-60!" : ""
                            }`}
                            style={{
                                ...defaultStyle,
                                ...transitionStyles[state],
                            }}
                        >
                            {currentVendor &&
                                brandsWithLines[currentVendor].map((line) => {
                                    if (
                                        linesWithGenerations[line].length === 0
                                    ) {
                                        return (
                                            <Link
                                                className={
                                                    buttonStyle +
                                                    ` 
                                                ${
                                                    line === currentLine
                                                        ? "bg-(--sidebar-elem-selected-color)"
                                                        : ""
                                                }`
                                                }
                                                href={`?vendor=${currentVendor}&line=${line}`}
                                                onClick={() => {
                                                    setCurrentLine(line)
                                                }}
                                                key={`${line}-${Date.now()}`}
                                            >
                                                {line}
                                            </Link>
                                        );
                                    }

                                    return (
                                        <button
                                            className={
                                                buttonStyle +
                                                ` ${
                                                    isModelOpen
                                                        ? "justify-start"
                                                        : ""
                                                }

                                                ${
                                                    line === currentLine
                                                        ? "bg-(--sidebar-elem-selected-color)"
                                                        : ""
                                                }`
                                            }
                                            key={`${line}-${Date.now()}`}
                                            onClick={() => {
                                                lineClickHandler(line);
                                            }}
                                        >
                                            {line}
                                        </button>
                                    );
                                })}
                        </div>
                    );
                }}
            </Transition>
            <Transition
                nodeRef={modelRef}
                in={isModelOpen}
                timeout={{ exit: TRANSTITON_DURATION }}
                mountOnEnter={true}
                unmountOnExit={true}
            >
                {(state) => (
                    <div
                        ref={modelRef}
                        className={`${blockStyle}  absolute top-0 left-[80px]`}
                        style={{
                            ...defaultStyle,
                            ...transitionStyles[state],
                        }}
                    >
                        {currentLine &&
                            linesWithGenerations[currentLine].map(
                                (generation, index) => {
                                    return (
                                        <Link
                                            href={`?vendor=${currentVendor}&line=${currentLine}&generation=${generation}`}
                                            className={
                                                buttonStyle +
                                                `
                                                ${
                                                    generation === currentGeneration
                                                        ? "bg-(--sidebar-elem-selected-color)"
                                                        : ""
                                                }`
                                            }
                                            key={`${generation}-${index}`}
                                            onClick={() => {
                                                generationClickHandler(
                                                    generation
                                                );
                                            }}
                                        >
                                            {generation}
                                        </Link>
                                    );
                                }
                            )}
                    </div>
                )}
            </Transition>
        </div>
    );
}
