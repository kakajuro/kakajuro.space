import { Vector3 } from 'three'

import type { cameraRefT, orbitControlsT } from 'src/types';

export let focusOnSphere = (spherePosition: [number, number, number], cameraRef:cameraRefT, orbitControlsRef:orbitControlsT) => {
  if (cameraRef.value && orbitControlsRef.value) {
    const [x, y, z] = spherePosition;

    const offset = 10;
    const cameraPosition = new Vector3(x + offset, y + 10, z + offset);

    cameraRef.value!.position.copy(cameraPosition);

    orbitControlsRef.value!.target.set(x, y, z);
    orbitControlsRef

    cameraRef.value!.lookAt(x, y, z);

    orbitControlsRef.value!.update();

    console.log(`Focused on sphere at (${x}, ${y}, ${z})`);
  }
}
