import { Canvas } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { Photos } from "./PaperPlanes/Photos";
import { useLayoutEffect } from "react";
// @ts-ignore
import { Gradient } from "./Gradient";

const Scene = () => {
  useLayoutEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  }, []);
  return (
    <>
      <canvas id="gradient-canvas" data-transition-in />
      <Canvas
        style={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
        }}
      >
        <Photos />
        <Text>SHEEEEEESH</Text>
      </Canvas>
    </>
  );
};

export default Scene;
