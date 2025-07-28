import { PerspectiveCamera } from 'three'
import * as THREEOrbit from 'three/examples/jsm/controls/OrbitControls.js';

import type { cameraRefT, focusT, orbitControlsT } from "../types";

// Transform
export let rotation = $state({ value: 0 });

export let incrementRotation = (delta:number) => {
  rotation.value += delta;
}

// Camera
export let cameraRef:cameraRefT = $state({ value: null });
export let orbitControlsRef:orbitControlsT = $state({ value:null });

export let setCameraRef = (newRef:PerspectiveCamera) => {
  cameraRef.value = newRef;
}

export let setOrbitControlsRef = (newRef:THREEOrbit.OrbitControls) => {
  orbitControlsRef.value = newRef;
}

// Focus
export let focus:focusT = $state({ position: [], mesh: null });

export let setFocus = (newPos:focusT['position'], mesh:focusT['mesh']) => {
  focus.position = newPos;
  focus.mesh = mesh;
}
