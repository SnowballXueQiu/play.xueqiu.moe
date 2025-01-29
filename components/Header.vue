<template>
  <n-layout-header class="header">
    <n-space justify="space-between" align="center" class="header-content">
      <n-space :align="'center'" class="logo-title" @click="router.push('/')">
        <n-avatar
          :round="false"
          size="medium"
          src="/avatar.jpeg"
          :bordered="false"
          class="logo"
        />
        <n-text class="site-title">雪球游戏集</n-text>
      </n-space>
      <n-space :align="'center'" :size="24">
        <n-button text>
          <a href="https://github.com/SnowballXueQiu/play.xueqiu.moe" target="_blank" class="nav-link">
            <n-icon size="24" class="github-icon">
              <img src="/github.svg" width="24" height="24" alt="GitHub" />
            </n-icon>
          </a>
        </n-button>
      </n-space>
    </n-space>
  </n-layout-header>
</template>

<script setup lang="ts">
import { NLayoutHeader, NSpace, NAvatar, NText, NButton, NIcon } from 'naive-ui'
import { useRouter } from 'nuxt/app'

const router = useRouter()
</script>

<style scoped>
.header {
  padding: 12px 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
}
.header-content {
  height: 100%;
  width: 100%;
}
.site-title {
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 40px;
}
.logo {
  border-radius: 8px;
}
.logo-title {
  cursor: pointer;
}
.nav-link {
  color: #000;
  text-decoration: none;
  font-size: 1rem;
}
.github-icon {
  color: #000;
}
</style>