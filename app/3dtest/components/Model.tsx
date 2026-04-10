import { useModelController } from "@/app/hooks/useModelController";
import { useSpring } from "@react-spring/three";
import { useFrame, useLoader } from "@react-three/fiber";
import {useRef} from "react";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

const LAPTOP_ANGLE = 120
const LAPTOP_DISPLAY_NODE = "LaptopCover"
const COVER_NODE_NAME = "Down_C"
const COMPONENTS_NODE_NAME = "Down_A"

export default function Model(){

    const {scene, nodes} = useLoader(GLTFLoader, "/MSI_titan_gt76.glb");
    const {isLaptopOpen, isBottomCoverHidden, isTopComponentsHidden} = useModelController()
    console.log(nodes)

    const bottomCoverRef = useRef(nodes[COVER_NODE_NAME].position.z);
    const topComponentsRef = useRef(nodes[COMPONENTS_NODE_NAME].position.z);

    const props = useSpring({
        coverRotation: isLaptopOpen
            ? Math.PI + ((Math.PI / 180) * LAPTOP_ANGLE)
            : Math.PI,
        bottomCoverScale: isBottomCoverHidden ? 0.0001 : 1,
        bottomCoverPosition: isBottomCoverHidden
            ? bottomCoverRef.current - 5
            : bottomCoverRef.current,
        topComponentsScale: isTopComponentsHidden ? 0.0001 : 1,
        topComponentsPosition: isTopComponentsHidden
            ? topComponentsRef.current - 5
            : topComponentsRef.current,
    });
    
    useFrame(() => {
        const coverNode = nodes[COVER_NODE_NAME];
        const componentsNode = nodes[COMPONENTS_NODE_NAME];
        const laptopDisplayNode = nodes[LAPTOP_DISPLAY_NODE];

        if (laptopDisplayNode) {
            nodes.LaptopCover.rotation.x = props.coverRotation.get();
        }

        if (coverNode) {
            coverNode.scale.setScalar(props.bottomCoverScale.get());
            coverNode.position.setZ(props.bottomCoverPosition.get());
        }

        if (componentsNode) {
            componentsNode.scale.setScalar(props.topComponentsScale.get());
            componentsNode.position.setZ(props.topComponentsPosition.get());
        }
    });

  return <primitive object={scene} />;
}