<script lang="ts">
  import { T, useTask } from '@threlte/core'
  import { interactivity, OrbitControls, Grid, Stars, HTML } from '@threlte/extras'
  import { Spring } from 'svelte/motion'
  import { Vector3 } from 'three'

  import type { PerspectiveCamera } from 'three'

  interactivity()

  const scale = new Spring(1);
  const zoomDiff = 100;

  let cameraRef:PerspectiveCamera | undefined = $state();
  let orbitControlsRef: any = $state();

  let rotation = $state(0);
  let color = $state("blue");
  useTask((delta) => {
    rotation += delta
  });

  let focusOnSphere = (spherePosition: [number, number, number]) => {
    if (cameraRef && orbitControlsRef) {
      const [x, y, z] = spherePosition;

      // Calculate a good camera position (offset from the sphere)
      const offset = 10;
      const cameraPosition = new Vector3(x + offset, y + 10, z + offset);

      // Move camera to new position
      cameraRef.position.copy(cameraPosition);

      // Update OrbitControls target to the sphere
      orbitControlsRef.target.set(x, y, z);

      // Make the camera look at the sphere
      cameraRef.lookAt(x, y, z);

      // Update the controls
      orbitControlsRef.update();

      console.log(`Focused on sphere at (${x}, ${y}, ${z})`);
    }
  }
</script>

<T.PerspectiveCamera
  makeDefault
  position={[10, 10, 0]}
  oncreate={(ref) => {
    cameraRef = ref;
    ref.lookAt(0, 0, 0)
  }}
  fov={70}
>
  <OrbitControls
    enableDamping
    autoRotate
    maxDistance={300}
    oncreate={(ref) => {
      orbitControlsRef = ref;
    }}
  />
</T.PerspectiveCamera>

<T.DirectionalLight position={[5, 1, 1]} />

<T.Mesh
  rotation.y={rotation}
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
    focusOnSphere([0, 1, 0]);
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
  rotation.y={rotation}
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
    focusOnSphere([5, 1, 1]);
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

<Stars
  radius={100}
/>
