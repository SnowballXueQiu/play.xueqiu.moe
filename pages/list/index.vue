<template>
  <div>
    <Header />
    <n-layout-content class="content">
      <n-space vertical :size="24">
        <n-card v-for="game in games" 
          :key="game.label" 
          class="game-card" 
          hoverable
        >
          <n-space vertical>
            <div class="game-header">
              <n-text class="game-title">{{ game.title }}</n-text>
              <n-space class="game-heat">
                <icon-flame-filled v-for="i in game.heat" :key="i" class="heat-active" />
                <icon-flame v-for="i in 5 - game.heat" :key="i + game.heat" class="heat-inactive" />
              </n-space>
            </div>
            <n-text depth="3" class="game-description">{{ game.description }}</n-text>
            <n-button type="primary" block @click="router.push(`/games/${game.label}`)">
              开始游戏
            </n-button>
          </n-space>
        </n-card>
      </n-space>
    </n-layout-content>
    <InfoCircle />
  </div>
</template>

<script setup lang="ts">
import { NLayoutContent, NCard, NSpace, NText, NButton, NGrid, NGridItem } from 'naive-ui'
import { IconFlame, IconFlameFilled } from '@tabler/icons-vue'
import { useRouter } from 'nuxt/app'
import { games } from './games'
import InfoCircle from '~/components/InfoCircle.vue';

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

.game-card {
  width: 300px;
  transition: all 0.3s ease;
}

.game-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.game-title {
  font-size: 1.2rem;
  font-weight: bold;
}

.game-description {
  margin: 12px 0;
  color: #666;
  min-height: 40px;
}

.heat-active {
  color: #ff9f43;
  width: 20px;
  height: 20px;
}

.heat-inactive {
  color: #ccc;
  width: 20px;
  height: 20px;
}
</style>