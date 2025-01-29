<template>
  <div class="hero">
    <n-card>
      <h2>欢迎访问</h2>
      <n-button type="primary" @click="handleNavigate">
        关于我们
      </n-button>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { NCard, NButton } from 'naive-ui'
import { useRouter } from 'nuxt/app'

const router = useRouter()
const handleNavigate = () => {
  router.push('/about')
}
</script>

<style scoped>
.hero {
  padding: 20px;
}
</style>