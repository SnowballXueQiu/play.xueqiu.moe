<template>
  <div>
    <div class="scoreboard">
      当前得分: {{ player1Score }}
      <br />
      <IconHeartFilled v-for="n in lives" :key="'filled-' + n" />
      <IconHeart v-for="n in (3 - lives)" :key="'empty-' + n" />
    </div>
    <canvas id="game"></canvas>
  </div>
</template>

<script setup lang="ts">
import { usePongGame } from './components/PongGame';
import { IconHeartFilled, IconHeart } from '@tabler/icons-vue';

const { canvas, player1Score, lives } = usePongGame();
</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background: #213769;
}
canvas {
  display: block;
  background: #213769;
}
.scoreboard {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 24px;
  text-align: center;
}
</style>