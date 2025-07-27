import { PerspectiveCamera } from 'three'
import * as THREEtypes from 'three/examples/jsm/controls/OrbitControls.js';

export type cameraRefT = {
  value: PerspectiveCamera | null
}

export type orbitControlsT = {
  value: THREEtypes.OrbitControls | null
}
