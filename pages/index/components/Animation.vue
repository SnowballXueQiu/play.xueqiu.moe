<template>
  <div>
    <canvas 
      ref="canvas" 
      style="display: block; inline-size: 100%; max-inline-size: 400px;" 
      width="400" 
      height="300" 
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { ring } from './boxes';
import { plane } from './plane';
import { setupAnimation } from './motion';

const canvas = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
  if (canvas.value) {
    setupAnimation(canvas.value, ring, plane);
  }
});
</script>

<style scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  min-block-size: 100svb;
  display: grid;
  place-items: center;
  font-family: system-ui;
}
</style>