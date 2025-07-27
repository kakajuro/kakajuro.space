<script lang="ts">
  import { T, useTask } from '@threlte/core'
  import { interactivity, OrbitControls, Grid, Stars, HTML } from '@threlte/extras'
  import { Spring } from 'svelte/motion'

  import { focusOnSphere } from './helpers.svelte';

  import { cameraRef,
           orbitControlsRef,
           rotation,
           incrementRotation,
           setCameraRef,
           setOrbitControlsRef } from '../SceneState.svelte';

  import Bubble from './Bubble.svelte';

  interactivity()

  const scale = new Spring(1);

  let color = $state("blue");
  useTask((delta) => {
    incrementRotation(delta);
  });
</script>

<T.PerspectiveCamera
  makeDefault
  position={[10, 10, 0]}
  oncreate={(ref) => {
    setCameraRef(ref);
    ref.lookAt(0, 0, 0)
  }}
  fov={70}
>
  <OrbitControls
    enableDamping
    autoRotate
    maxDistance={300}
    oncreate={(ref) => {
      setOrbitControlsRef(ref);
    }}
  />
</T.PerspectiveCamera>

<T.DirectionalLight position={[5, 1, 1]} />

<T.Mesh
  rotation.y={rotation.value}
  position.y={1}
  scale={scale.current}
  onpointerenter={() => {
    scale.target = 1.5
    color = "hotpink"
  }}
  onpointerleave={() => {
    scale.target = 1
    color = "blue"
  }}
  onclick={() => {
    color = "red";
    focusOnSphere([0, 1, 0], cameraRef, orbitControlsRef);
  }}
>
  <T.SphereGeometry args={[1, 64, 32]} />
  <T.MeshBasicMaterial color={color}/>
  <HTML
    position.y={1}
    pointerEvents="none"
    autoRender={true}
  >
    <p
      class="w-32 translate-x-1/2 text-lg text-red-500"
    >
      SOME TEXT HERE FOR TESTING
    </p>
  </HTML>
</T.Mesh>

<T.Mesh
  rotation.y={rotation.value}
  position.x={5}
  position.y={1}
  position.z={1}
  scale={scale.current}
  onpointerenter={() => {
    scale.target = 1.5
    color = "hotpink"
  }}
  onpointerleave={() => {
    scale.target = 1
    color = "blue"
  }}
  onclick={() => {
    color = "red";
    focusOnSphere([5, 1, 1], cameraRef, orbitControlsRef);
  }}
>
  <T.SphereGeometry args={[1, 64, 32]} />
  <T.MeshBasicMaterial color={color}/>
</T.Mesh>

<!-- <Grid
  sectionThickness={0}
  infiniteGrid
  cellColor="#dddddd"
  cellSize={2}
/> -->

<Bubble />

<Stars
  radius={100}
/>
