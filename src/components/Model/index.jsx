import { useEffect, useRef } from "react";
import { useGLTF, Text, MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";

export default function Model() {
  const { nodes } = useGLTF("/375.glb");
  const { viewport } = useThree();
  const torus = useRef(null);
  useEffect(() => {
    console.log(nodes);
  }, [nodes]);
  useFrame(() => {
    torus.current.rotation.z += 0.02;
  });

  const materialProps = {
    thickness: 0.2,
    roughness: 0,
    transmission: 1,
    ior: 1.2,
    chromaticAberration: 0.02,
    backside: true,
  };

  return (
    <group scale={viewport.width / 3.75}>
      <Text
        font={"/PPNeueMontreal-Bold.otf"}
        position={[0, 0, -1]}
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        STUDIO375
      </Text>

      <mesh ref={torus} {...nodes.Curve}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
}
