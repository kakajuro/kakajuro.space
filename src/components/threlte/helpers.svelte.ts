import { Vector3 } from 'three'

import { setFocus, focus } from '@components/SceneState.svelte';

import type { cameraRefT, orbitControlsT, focusT } from 'src/types';

export let focusOnSphere = (spherePosition: [number, number, number], meshObject:focusT['mesh'], cameraRef:cameraRefT, orbitControlsRef:orbitControlsT) => {
  if (cameraRef.value && orbitControlsRef.value) {
    const [x, y, z] = spherePosition;

    const offset = 10;
    const cameraPosition = new Vector3(x + offset, y + 10, z + offset);

    cameraRef.value!.position.copy(cameraPosition);

    orbitControlsRef.value!.target.set(x, y, z);

    cameraRef.value!.lookAt(x, y, z);

    orbitControlsRef.value!.update(0.5);

    setFocus([x, y, z], meshObject);

    console.log(`Focused on sphere at (${x}, ${y}, ${z})`);
  }
}
