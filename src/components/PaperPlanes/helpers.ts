import { Vector2, Vector3 } from "three";
import { Photo } from "./Photo";

let t = 0;
const splicedIndexes: number[] = [];

export const updatedPositions = (
  photos: Photo[],
  mousePosition: Omit<Photo, "index">,
  distance: number = 0.3,
  maxPhotoCount: number = 20
): Photo[] => {
  const d = new Vector2(mousePosition.x, mousePosition.y).distanceTo(
    new Vector2(photos.at(-1)?.x, photos.at(-1)?.y)
  );
  if (d > distance && photos.length < maxPhotoCount + 1) {
    t++;

    return [
      ...photos,
      {
        ...mousePosition,
        index: t,
        offset: {
          x: Math.floor(Math.random() * 5) / 5,
          y: Math.floor(Math.random() * 5) / 5,
        },
      },
    ];
  }

  return photos.length > maxPhotoCount
    ? photos.slice(1)
    : photos.map((plane) => ({ ...plane }));
};

export const appliedForces = (t: number, dir: number) => {
  return new Vector3(0.1 * dir * t, 10 - t, 0).multiplyScalar(0.001);
};
