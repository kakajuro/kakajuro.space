import { PerspectiveCamera } from 'three'
import * as THREEtypes from 'three/examples/jsm/controls/OrbitControls.js';

import type { cameraRefT, orbitControlsT } from "../types";

export let rotation = $state({ value: 0 });
export let cameraRef:cameraRefT = $state({ value: null });
export let orbitControlsRef:orbitControlsT = $state({ value:null });

export let incrementRotation = (delta:number) => {
  rotation.value += delta;
}

export let setCameraRef = (newRef:PerspectiveCamera) => {
  cameraRef.value = newRef;
}

export let setOrbitControlsRef = (newRef:THREEtypes.OrbitControls) => {
  orbitControlsRef.value = newRef;
}

