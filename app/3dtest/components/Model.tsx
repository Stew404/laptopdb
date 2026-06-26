import { useModelController } from "@/app/hooks/useModelController";
import { useSpring } from "@react-spring/three";
import { useFrame, useLoader } from "@react-three/fiber";
import {useEffect, useRef} from "react";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { DisassemblyOverlay } from "./DisassemblyOverlay";

const LAPTOP_ANGLE = 90
const SCREEN_NODE_NAME = "Screen"
const COVER_NODE_NAME = "Cover"
const COOLING_NODE_NAME = "Cooling"
// const SCREEN_NODE_NAME = "LaptopCover"
// const COVER_NODE_NAME = "Down_B"
// const COOLING_NODE_NAME = "Down_C"
export default function Model(){

    // const {scene, nodes} = useLoader(GLTFLoader, "/MSI_titan_gt76.glb");
    const {isLaptopOpen, isBottomCoverHidden, isCoolingHidden, mode, modelPath} = useModelController()
    const path = modelPath ? modelPath : "/lenovo_thinkbook_with_rigfixed123.glb";
    const { scene, nodes } = useLoader(GLTFLoader, path);

    const coverNode = nodes[COVER_NODE_NAME];
    const coolingNode = nodes[COOLING_NODE_NAME];
    const displayNode = nodes[SCREEN_NODE_NAME];

    console.log(nodes)
    const bottomCoverRef = useRef(coverNode.position.z);
    const coolingRef = useRef(coolingNode.position.z);
    const displayRef = useRef(displayNode.rotation.x);


    const props = useSpring({
        screenRotation: isLaptopOpen
            ? displayRef.current + (Math.PI / 180) * LAPTOP_ANGLE
            : displayRef.current,
        coverScale: isBottomCoverHidden ? 0.0001 : 1,
        coverPosition: isBottomCoverHidden
            ? bottomCoverRef.current - 5
            : bottomCoverRef.current,
        coolingScale: isCoolingHidden ? 0.0001 : 1,
        coolingPosition: isCoolingHidden
            ? coolingRef.current - 5
            : coolingRef.current,
    });
    
    
    useFrame(() => {

        if (displayNode) {
            displayNode.rotation.x = props.screenRotation.get();
        }

        if (coverNode) {
            coverNode.scale.setScalar(props.coverScale.get());
            coverNode.position.setZ(props.coverPosition.get());
        }

        if (coolingNode) {
            coolingNode.scale.setScalar(props.coolingScale.get());
            coolingNode.position.setZ(props.coolingPosition.get());
        }
    });

  return (
      <>
          <primitive object={scene} />
          {mode === "disassembly" && <DisassemblyOverlay/>}
      </>
  );
}