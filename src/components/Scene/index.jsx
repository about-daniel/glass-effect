"use client";
import { Canvas } from "@react-three/fiber";
import styles from "./scene.module.scss";
import { Environment, OrbitControls } from "@react-three/drei";
import Model from "../Model";
import { useEffect } from "react";

export default function Scene() {
  useEffect(() => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    // We listen to the resize event
    window.addEventListener("resize", () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
  }, []);
  return (
    <Canvas style={{ background: "#000000" }}>
      <OrbitControls enableZoom={false} enablePan={false} />
      <Model />
      <directionalLight intensity={2} position={[0, 2, 3]} />
      <Environment preset="city" />
    </Canvas>
  );
}
