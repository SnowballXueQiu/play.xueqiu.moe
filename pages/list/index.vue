<template>
  <div>
    <Header />
    <n-layout-content class="content">
      <n-grid :cols="3" :x-gap="24" :y-gap="24">
        <n-grid-item v-for="game in games" :key="game.id">
          <n-card class="game-card" hoverable>
            <n-space vertical>
              <div class="game-header">
                <n-text class="game-title">{{ game.title }}</n-text>
                <n-space class="game-heat">
                  <icon-flame-filled v-for="i in game.heat" :key="i" class="heat-active" />
                  <icon-flame v-for="i in 5 - game.heat" :key="i + game.heat" class="heat-inactive" />
                </n-space>
              </div>
              <n-text depth="3" class="game-description">{{ game.description }}</n-text>
              <n-button type="primary" block @click="router.push(`/game/${game.id}`)">
                开始游戏
              </n-button>
            </n-space>
          </n-card>
        </n-grid-item>
      </n-grid>
    </n-layout-content>
  </div>
</template>

<script setup lang="ts">
import { NLayoutContent, NCard, NSpace, NText, NButton, NGrid, NGridItem } from 'naive-ui'
import { IconFlame, IconFlameFilled } from '@tabler/icons-vue'
import { useRouter } from 'nuxt/app'
import { games } from './games'

const router = useRouter()
</script>

<style scoped>
.content {
  padding: 40px;
  min-height: calc(100vh - 64px);
  background: #f5f5f5;
}
.game-card {
  transition: all 0.3s ease;
}
.game-card:hover {
  transform: translateY(-4px);
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
  margin-bottom: 16px;
  color: #666;
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