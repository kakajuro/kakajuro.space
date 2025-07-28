<script lang="ts">
  let { position, slug }: {
    position: [x:number, y:number, z:number],
    slug: string
  } = $props();

  import { Mesh } from 'three'
  import { T } from '@threlte/core'
  import { Spring } from 'svelte/motion'

  import { cameraRef, orbitControlsRef, rotation, focus } from '@components/SceneState.svelte';

  import { focusOnSphere } from './helpers.svelte';

  const scale = new Spring(1);

  let colour = $state("green");
  let isFocused:boolean = $state(false);
  let meshRef:Mesh;

  $effect(() => {
    if (focus.mesh?.id === meshRef.id) {
      isFocused = true;
    } else {
     isFocused = false;
     colour = "green";
    }
    if (isFocused) colour = "red";
  });

</script>

<T.Mesh
  oncreate={(ref) => {
    meshRef = ref;
  }}
  rotation.y={rotation.value}
  position={position}
  scale={scale.current}
  onpointerenter={() => {
    scale.target = 1.2
    if (!isFocused) colour = "hotpink";
  }}
  onpointerleave={() => {
    scale.target = 1
    if (!isFocused) colour = "green";
  }}
  onclick={() => {
    focusOnSphere(position, meshRef, cameraRef, orbitControlsRef);
  }}
>
  <T.SphereGeometry args={[1, 64, 32]} />
  <T.MeshBasicMaterial color={colour}/>
</T.Mesh>
