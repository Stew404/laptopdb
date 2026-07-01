'use client'
import { Canvas } from "@react-three/fiber"
import Model from "./Model/Model";
import { CameraControls, Center, Environment, Html} from "@react-three/drei";
import {Vector3} from "three";
import { useModelController } from "@/app/hooks/useModelController";
import * as THREE from "three"
import { useEffect, useState, Suspense} from "react";
import DisassemblyMenu from "./DisassemblyMenu";

THREE.Object3D.DEFAULT_UP.set(0,0,1)

export default function CanvasContainer(){

    const { isLaptopOpen, changeIsLaptopOpen, mode, changeMode, setModelPath } = useModelController();

    const [dragIsEnabled, setDragIsEnabled] = useState(true)

    useEffect(()=>{
        setDragIsEnabled(() => mode === "free" ? true : false)
    }, [mode])

    return (
        <div className="w-full h-screen relative">
            <div className="absolute z-2 flex flex-col gap-[10px]">
                <button
                    className="button"
                    onClick={() => {
                        changeIsLaptopOpen();
                    }}
                >
                    {isLaptopOpen ? "Закрыть" : "Открыть"} крышку
                </button>
                {!dragIsEnabled && <DisassemblyMenu />}
                <button
                    className="button"
                    onClick={() => {
                        changeMode();
                    }}
                >
                    {mode === "free" ? "Включить" : "Выключить"} режим разборки
                </button>
                <div className="button">
                    <input
                        className="absolute opacity-0 h-[0px]"
                        onChange={(e) => {
                            if (e.target.files) {
                                const file = e.target.files[0];
                                setModelPath(URL.createObjectURL(file));
                            }
                        }}
                        type="file"
                        name="model"
                        id="model"
                        accept="model/gltf-binary, .glb"
                    />
                    <p>Выберите файл</p>
                </div>
            </div>
            <Canvas>
                <Suspense
                    fallback={
                        <Html center>
                            <p>Loading...</p>
                        </Html>
                    }
                >
                    <ambientLight intensity={1} />
                    <Environment preset="dawn" />
                    {/* Scale приближает относительно текущего, надо как нибудь менять базовый */}
                    <Center>
                        <Model />
                    </Center>
                    <CameraControls
                        polarAngle={dragIsEnabled ? Math.PI / 3 : Math.PI}
                        azimuthAngle={
                            dragIsEnabled ? (3 * Math.PI) / 4 : 2 * Math.PI
                        }
                        distance={dragIsEnabled ? 0.67 : 0.37}
                        enabled={dragIsEnabled}
                    />
                    <axesHelper scale={10} />
                </Suspense>
            </Canvas>
        </div>
    );
    
} 