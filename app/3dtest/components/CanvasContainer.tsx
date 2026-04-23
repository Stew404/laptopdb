'use client'
import { Canvas } from "@react-three/fiber"
import Model from "./Model";
import { CameraControls, Center, Environment} from "@react-three/drei";
import {Vector3} from "three";
import { useModelController } from "@/app/hooks/useModelController";
import * as THREE from "three"
import { useEffect, useState } from "react";
import DisassemblyMenu from "./DisassemblyMenu";

THREE.Object3D.DEFAULT_UP.set(0,0,1)

export default function CanvasContainer(){

    const { isLaptopOpen, isBottomCoverHidden, isTopComponentsHidden, changeIsLaptopOpen, changeisBottomCoverHidden, changeisTopComponentsHidden, mode, changeMode } = useModelController();

    const [dragIsEnabled, setDragIsEnabled] = useState(true)

    useEffect(()=>{
        setDragIsEnabled(() => mode === "free" ? true : false)
    }, [mode])

    return (
        <div className="w-full h-screen relative">
            <div className="absolute z-2">
                <button
                    className="button"
                    onClick={() => {
                        changeIsLaptopOpen();
                    }}
                >
                    {isLaptopOpen ? "Закрыть" : "Открыть"} крышку
                </button>
                {!dragIsEnabled && <DisassemblyMenu/>}
                <button
                    className="button"
                    onClick={() => {
                        changeMode();
                    }}
                >
                    {mode === "free" ? "Включить" : "Выключить"} режим разборки
                </button>
            </div>
            <Canvas>
                {/* <Html transform>
                    <div className="button text-[30px]">
                        test
                    </div>
                </Html> */}
                <ambientLight intensity={1} />
                <Environment preset="dawn" />

                {/* Scale приближает относительно текущего, надо как нибудь менять базовый */}
                <Center
                    scale={
                        dragIsEnabled
                            ? new Vector3(2.5, 2.5, 2.5)
                            : new Vector3(4, 4, 4)
                    }
                >
                    <Model />
                </Center>
                <CameraControls
                    polarAngle={dragIsEnabled ? Math.PI / 3 : Math.PI}
                    azimuthAngle={dragIsEnabled ? 3*Math.PI/4 : 2 * Math.PI}
                    enabled={dragIsEnabled}
                />
                <axesHelper scale={10} />
            </Canvas>
        </div>
    );
    
} 