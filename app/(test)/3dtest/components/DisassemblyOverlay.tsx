import { useModelController } from "@/app/hooks/useModelController";
import { Html } from "@react-three/drei";

type Coords = { x: number; y: number };
type CoordsStage = Coords[]

const TEST_COORDS_STAGES: CoordsStage[] = [
    [
        { x: 0.7, y: 0.5 },
        { x: -0.7, y: 0.5 },
        { x: 0.7, y: -0.5 },
        { x: -0.7, y: -0.5 }
    ],
    [
        { x: -0.74, y: -0.57 },
        { x: -0.74, y: -0.25 },
        { x: -0.50, y: -0.57 },
        { x: -0.48, y: -0.27 },
        { x: -0.465, y: -0.19 },
        { x: -0.43, y: -0.06 },
        { x: -0.63, y: -0.06 },
        { x: -0.63, y: 0.13 },
        { x: -0.43, y: 0.13 },
        { x: 0.07, y: -0.22 },
        { x: -0.245, y: -0.22 },
        { x: -0.245, y: -0.48 },
        { x: 0.07, y: -0.48 },
        { x: 0.5, y: -0.57 },
        { x: 0.74, y: -0.57 },
        { x: 0.74, y: -0.25 },
        { x: 0.48, y: -0.27 },
    ],
    []
]

const pointerStyle = {
    width: 30,
    height: 30,
    borderColor: "#FFFFFF",
    borderWidth: 3,
    borderRadius: "50%",
    transform: "translate(-50%, -50%)",
    animationName: "pulse",
    animationDuration: ".5s",
    animationIterationCount: "infinite",
    animationDirection: "alternate",
};

export function DisassemblyOverlay(){

    const {disassemblyMenuStage, screwsCoords} = useModelController()

    return (
        <>
            {screwsCoords[disassemblyMenuStage]?.map(({ x, y, z, node }) => {
                console.log(x, y)
                node.position.z = z
                return <Html key={x + y} position={[x, y, 0]}>
                    <div onClick={function(e){
                        node.position.z = 100
                        e.currentTarget.remove()

                    }} style={pointerStyle}></div>
                </Html>
            })}
        </>
    );
}