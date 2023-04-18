import { useTexture } from "@react-three/drei";
import { memo, useMemo, useRef, useState } from "react";
import { Mesh, RepeatWrapping } from "three";
import { useFrame, useThree } from "@react-three/fiber";
import anime from "../../assets/anime.jpg";
import { appliedForces } from "./helpers";

export type Photo = {
  x: number;
  y: number;
  index: number;
  offset?: { x: number; y: number };
};

export const Photo = memo(({ x, y, offset = { x: 0, y: 0 } }: Photo) => {
  const { viewport } = useThree();
  const photos = useTexture(anime);
  const photoMap = useMemo(() => photos.clone(), [photos]);
  photoMap.wrapS = RepeatWrapping;
  photoMap.wrapT = RepeatWrapping;
  photoMap.repeat.set(1 / 6, 1 / 6);
  photoMap.offset.set(offset.x, offset.y);
  const ref = useRef<Mesh>(null);

  const [t, setT] = useState(0);
  const direction = useRef<number>();

  useFrame(({ mouse }) => {
    if (!ref.current) {
      return;
    }
    if (!direction.current) {
      direction.current = x > (viewport.width * mouse.x) / 2 ? -1 : 1;
    }
    ref.current.position.add(appliedForces(t, direction.current));

    setT(t + 1);
  });

  return (
    <mesh position-x={x} position-y={y} ref={ref} scale={[2, 3, 2]}>
      <planeGeometry />
      <meshBasicMaterial map={photoMap} />
    </mesh>
  );
});
