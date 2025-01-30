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
  color: hsl(0 0% 100%);
  background: hsl(228 7% 12%)
    url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" fill="hsl(228 7% 15%)" width="50" height="50">\
      <rect width="25" height="25" />\
      <rect x="25" y="25" width="25" height="25" />\
  </svg>');
}
</style>