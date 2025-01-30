<template>
  <div>
    <Header />
    <n-layout-content class="content">
      <n-card class="welcome-card">
        <n-space vertical align="center">
          <n-h2>欢迎来到雪球游戏集</n-h2>
          <Animation />
          <n-p>这里收集了一系列有趣的 H5 小游戏，快来体验吧！</n-p>
          <n-button type="primary" size="large" @click="router.push('/list')">
            开始探索游戏
          </n-button>
        </n-space>
      </n-card>
    </n-layout-content>
    <InfoCircle />
  </div>
</template>

<script setup lang="ts">
import { NLayoutContent, NCard, NSpace, NH1, NP, NButton } from 'naive-ui'
import { useRouter } from 'nuxt/app'
import InfoCircle from '~/components/InfoCircle.vue'
import Header from '~/components/Header.vue'
import Animation from './components/Animation.vue'

const router = useRouter()
</script>

<style scoped>
.content {
  padding: clamp(16px, 5vw, 40px);
  min-height: calc(100vh - 64px);
  background: #f5f5f5;
  display: flex;
  justify-content: center;
}
.welcome-card {
  width: 100%;
  max-width: 600px;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 24px;
}
</style>