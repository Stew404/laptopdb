'use client'
import { Canvas } from "@react-three/fiber"
import Model from "./Model";
import { CameraControls, Center, Environment} from "@react-three/drei";
import {Vector3} from "three";
import { useModelController } from "@/app/hooks/useModelController";

export default function CanvasContainer(){

    const { isLaptopOpen, isBottomCoverHidden, isTopComponentsHidden, changeIsLaptopOpen, changeisBottomCoverHidden, changeisTopComponentsHidden } = useModelController();
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
                <button
                    className="button"
                    onClick={() => {
                        changeisBottomCoverHidden();
                    }}
                >
                    {isBottomCoverHidden ? "Закрыть" : "Открыть"} нижнюю крышку
                </button>
                <button
                    className="button"
                    onClick={() => {
                        changeisTopComponentsHidden();
                    }}
                >
                    {isTopComponentsHidden ? "Вернуть" : "Убрать"} охлаждение
                </button>
            </div>
            <Canvas>
                {/* <Html transform>
                    <div className="button text-[30px]">
                        test
                    </div>
                </Html> */}
                <ambientLight intensity={1} />
                <Environment preset="studio" />

                <Center scale={new Vector3(2.5, 2.5, 2.5)}>
                    <Model />
                </Center>
                <CameraControls />
            </Canvas>
        </div>
    );
    
} 