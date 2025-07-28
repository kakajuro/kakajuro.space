<script lang="ts">
  import { T, useTask } from '@threlte/core'
  import { interactivity, OrbitControls, Stars } from '@threlte/extras'

  import { incrementRotation,
           setCameraRef,
           setOrbitControlsRef } from '../SceneState.svelte';

  import Bubble from './Bubble.svelte';

  interactivity()

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

<Bubble
  slug="album1"
  position={[0, 1, 0]}
/>

<Bubble
  slug="album2"
  position={[5, 1, 1]}
/>

<Bubble
  slug="album3"
  position={[0, 6, 0]}
/>

<Stars
  radius={100}
/>
