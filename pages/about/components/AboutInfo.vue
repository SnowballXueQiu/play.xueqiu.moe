<template>
  <div class="about-info">
    <n-card>
      <h2>关于我们</h2>
      <n-button @click="$router.push('/')">
        返回首页
      </n-button>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { NCard, NButton } from 'naive-ui'
</script>

<style scoped>
.about-info {
  padding: 20px;
}
</style>