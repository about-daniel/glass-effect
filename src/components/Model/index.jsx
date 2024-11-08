import { useEffect, useRef } from "react";
import { useGLTF, Text, MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";

export default function Model() {
  const { nodes, materials } = useGLTF("/375.glb");
  const { viewport } = useThree();
  const torus = useRef(null);
  useEffect(() => {
    if (torus.current) {
      console.log(torus.current.material);
    }
  }, [nodes, torus]);
  useFrame(() => {
    torus.current.rotation.z -= 0.01;
  });

  // const materialProps = {
  //   thickness: 20,
  //   roughness: 0.1,
  //   transmission: 1,
  //   ior: 1.2,
  //   chromaticAberration: 0.2,
  //   backside: true,
  // };
  const materialProps = useControls({
    thickness: { value: 20, min: 0, max: 50, step: 0.5 },
    roughness: { value: 0.1, min: 0, max: 1, step: 0.1 },
    transmission: { value: 1, min: 0, max: 1, step: 0.1 },
    ior: { value: 1.2, min: 0, max: 5, step: 0.1 },
    chromaticAberration: { value: 0.3, min: 0, max: 1 },
    backside: { value: true },
    distortion: { value: 0, min: 0, max: 20, step: 0.1 },
    distortionScale: { value: 0, min: 0, max: 20, step: 0.1 },
    anisotropicBlur: { value: 0, min: 0, max: 20, step: 0.1 },
  });

  return (
    <group dispose={null} scale={[3, 3, 3]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        material={materials["Material.002"]}
        position={[-0.011, -0.02, -0.007]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[10, 4.99, 10]}
        ref={torus}
      >
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/375.glb");
