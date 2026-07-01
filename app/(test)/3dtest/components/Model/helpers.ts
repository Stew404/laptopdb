import { ScrewsCoords } from "@/app/hooks/useModelController";
import { Object3D, Object3DEventMap } from "three";

type Nodes = {
    [name: string]: Object3D<Object3DEventMap>;
}

export function getScrewsCoords(
    nodes: Nodes,
    screwCoolingName: string,
    screwCoverName: string
): ScrewsCoords {

    const coolingNodes = Object.values(nodes).filter(
        (node) =>
            node.name.includes(screwCoolingName)
    );

    const coverNodes = Object.values(nodes).filter(
        (node) =>
            node.name.includes(screwCoverName)
    );



    return [
        [
            ...coverNodes.map((node) => ({
                x: node.position.x,
                y: node.position.y,
                z: node.position.z,
                node: node,
            })),
        ],
        [
            ...coolingNodes.map((node) => ({
                x: node.position.x,
                y: node.position.y,
                z: node.position.z,
                node: node,
            })),
        ],
    ];
}