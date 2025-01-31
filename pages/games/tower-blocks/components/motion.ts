import * as THREE from 'three';
import { gsap } from 'gsap';

export const setCamera = (camera: THREE.OrthographicCamera, y: number, speed: number = 0.3) => {
  gsap.to(camera.position, { duration: speed, y: y + 4, ease: "power1.inOut" });
  gsap.to(camera.lookAt, { duration: speed, y: y, ease: "power1.inOut" });
};