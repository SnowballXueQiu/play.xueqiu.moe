<template>
  <n-layout-header class="header">
    <n-space justify="space-between" align="center" class="header-content">
      <n-space :align="'center'" class="logo-title" @click="router.push('/')">
        <n-avatar
          :round="false"
          :size="40"
          src="/avatar.jpeg"
          :bordered="false"
          class="logo"
        />
        <n-space :align="'center'" :size="8">
          <n-text class="site-title">雪球游戏集</n-text>
          <n-text class="site-domain">play.xueqiu.moe</n-text>
        </n-space>
      </n-space>
      <n-space :align="'center'" :size="24">
        <n-button text>
          <a href="https://blog.qwq.my" target="_blank" class="nav-link">Blog</a>
        </n-button>
        <n-button text>
          <a href="https://github.com/SnowballXueQiu/play.xueqiu.moe" target="_blank" class="nav-link">
            <icon-brand-github class="github-icon" />
          </a>
        </n-button>
      </n-space>
    </n-space>
  </n-layout-header>
</template>

<script setup lang="ts">
import { NLayoutHeader, NSpace, NAvatar, NText, NButton, NIcon } from 'naive-ui'
import { IconBrandGithub } from '@tabler/icons-vue'
import { useRouter } from 'nuxt/app'

const router = useRouter()
</script>

<style scoped>
.header {
  padding: 12px 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  height: 64px;
}

.header-content {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.site-title {
  font-size: 1.2rem;
  font-weight: bold;
}

.site-domain {
  font-size: 0.8rem;
  color: #999;
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
  width: 24px;
  height: 24px;
}
</style>