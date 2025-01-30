<template>
  <div class="info-circle" @click="router.push('/about')">
    <IconInfoCircle size="24" color="gray" />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'nuxt/app'
import { IconInfoCircle } from '@tabler/icons-vue'

const router = useRouter()
</script>

<style scoped>
.info-circle {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>