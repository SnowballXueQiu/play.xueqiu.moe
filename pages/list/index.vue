<template>
  <div>
    <Header />
    <n-layout-content class="content">
      <n-card>
        <n-h2>游戏列表</n-h2>
        <n-list>
          <n-list-item v-for="game in games" :key="game.id">
            <n-thing>
              <template #header>
                {{ game.title }}
              </template>
              <template #description>
                {{ game.description }}
              </template>
            </n-thing>
            <template #suffix>
              <n-button @click="router.push(`/game/${game.id}`)">
                开始游戏
              </n-button>
            </template>
          </n-list-item>
        </n-list>
      </n-card>
    </n-layout-content>
  </div>
</template>

<script setup lang="ts">
import { NLayoutContent, NCard, NH2, NList, NListItem, NThing, NButton } from 'naive-ui'
import { useRouter } from 'nuxt/app'

const router = useRouter()

// 示例游戏数据
const games = [
  {
    id: '1',
    title: '2048',
    description: '经典数字益智游戏'
  },
  {
    id: '2',
    title: '贪吃蛇',
    description: '永不过时的休闲游戏'
  },
  {
    id: '3',
    title: '俄罗斯方块',
    description: '考验反应能力的方块游戏'
  }
]
</script>

<style scoped>
.content {
  padding: 40px;
  min-height: calc(100vh - 64px);
  background: #f5f5f5;
}
</style>