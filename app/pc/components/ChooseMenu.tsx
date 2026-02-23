'use client'

import { useRef, useState } from "react";
import {Transition, TransitionStatus} from "react-transition-group";
import Link from "next/link";
import { Laptop } from "../../types";

const TRANSTITON_DURATION = 100;

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
    "h-full w-[20rem] flex flex-col items-center justify-start py-[1em] overflow-y-auto";

const buttonStyle = `
        flex items-center justify-center
        w-full h-[3rem] 
        text-[1.4rem] text-center text-(--sidebar-elem-text-color) 
        px-[1em]
        mb-[.2rem]
        bg-(--sidebar-elem-bg-color) hover:bg-gray-700 
        rounded-[8px]
        cursor-pointer
        font-normal
        `;

export function ChooseMenu({
    brandsWithLines,
    linesWithGenerations,
}: {
    brandsWithLines: Record<Laptop["brand"], Laptop["line"][]>;
    linesWithGenerations: Record<Laptop["line"], Laptop["generation"][]>;
}) {
    const vendors = Object.keys(brandsWithLines);

    const [currentVendor, setCurrentVendor] = useState<Laptop["brand"] | null>(null);
    const [currentLine, setCurrentLine] = useState<Laptop["line"] | null>(null);

    const lineRef = useRef<HTMLDivElement | null>(null);
    const modelRef = useRef<HTMLDivElement | null>(null);

    const [isLineOpen, setIsLineOpen] = useState(false);
    const [isModelOpen, setIsModelOpen] = useState(false);

    const vendorClickHandler = (vendor: Laptop["brand"]) => {
        setIsLineOpen((state) => !state);
        if (vendor !== currentVendor) {
            setIsLineOpen(true);
            setCurrentVendor(vendor);
        } else {
            setCurrentVendor(null);
        }
        setCurrentLine(null);
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
    };

    return (
        <div>
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
                            onClick={()=>{vendorClickHandler(vendor)}}
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
                                    if(linesWithGenerations[line].length === 0){
                                        return (
                                            <Link
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
                                                href={`?line=${line}`}
                                                onClick={() => {
                                                    lineClickHandler(line);
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
                                            onClick={()=>{lineClickHandler(line)}}
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
                                (generation) => {
                                    return (
                                        <Link
                                            href={`?generation=${generation}`}
                                            className={buttonStyle}
                                            key={`${generation}-${Date.now()}`}
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
