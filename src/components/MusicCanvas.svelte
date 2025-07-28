<script>
    import  { Canvas } from "@threlte/core";
    import Scene from './threlte/Scene.svelte';
</script>

<div class="w-screen h-screen">
  <Canvas class="w-screen h-screen absolute pointer-events-none">
    <Scene />
  </Canvas>
</div>
