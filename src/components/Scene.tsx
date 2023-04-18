import { Canvas } from "@react-three/fiber";
import { Photos } from "./PaperPlanes/Photos";
import { Photo } from "./PaperPlanes/Photo";

const Scene = () => {
  return (
    <Canvas style={{ width: "100vw", height: "100vh" }}>
      <color attach="background" args={["#000000"]} />
      <Photos />
    </Canvas>
  );
};

export default Scene;
