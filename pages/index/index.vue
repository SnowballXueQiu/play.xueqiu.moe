<template>
  <div>
    <Header />
    <n-layout-content class="content">
      <n-card class="welcome-card">
        <n-space vertical align="center">
          <n-h1>欢迎来到雪球游戏集</n-h1>
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

const router = useRouter()
</script>

<style scoped>
.content {
  padding: 40px;
  min-height: calc(100vh - 64px);
  background: #f5f5f5;
}
.welcome-card {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}
</style>