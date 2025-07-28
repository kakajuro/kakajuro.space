import { PerspectiveCamera, Mesh } from 'three'
import * as THREEtypes from 'three/examples/jsm/controls/OrbitControls.js';

export type cameraRefT = {
  value: PerspectiveCamera | null
}

export type orbitControlsT = {
  value: THREEtypes.OrbitControls | null
}

export type focusT = {
  position: [x:number, y:number, z:number] | [],
  mesh: Mesh | null
}
