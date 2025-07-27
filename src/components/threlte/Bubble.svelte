<script lang="ts">
  import { T } from '@threlte/core'
  import { HTML } from '@threlte/extras'
  import { Spring } from 'svelte/motion'

  import { cameraRef, orbitControlsRef, rotation } from '@components/SceneState.svelte';

  import { focusOnSphere } from './helpers.svelte';

  const scale = new Spring(1);
  let color = $state("green");

</script>

<T.Mesh
  rotation.y={rotation.value}
  position.y={6}
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
    focusOnSphere([0, 6, 0], cameraRef, orbitControlsRef);
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
