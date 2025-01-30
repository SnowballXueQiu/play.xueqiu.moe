<template>
  <div>
    <Header />
    <n-layout-content class="content">
      <n-card class="about-card" bordered>
        <n-space vertical align="center">
          <n-h1>关于我们</n-h1>
          <n-divider />
          <n-p>
            欢迎来到雪球游戏集的世界！我们致力于为您提供最有趣、最精彩的H5小游戏体验。我们的团队由一群充满激情和创意的游戏爱好者组成，致力于为您带来无尽的欢乐和惊喜。
          </n-p>
          <n-p>
            所有游戏均来源于互联网，如有侵权，请及时联系我们，我们将尽快处理。
          </n-p>
          <n-divider />
          <n-space vertical align="start" class="contact-info">
            <n-space align="center" inline>
              <n-icon size="24">
                <icon-brand-github />
              </n-icon>
              <n-p>
                我的 GitHub: <a href="https://github.com/SnowballXueQiu" target="_blank">SnowballXueQiu</a>
              </n-p>
            </n-space>
            <n-space align="center" inline>
              <n-icon size="24">
                <icon-article />
              </n-icon>
              <n-p>
                我的个人博客: <a href="https://blog.qwq.my" target="_blank">blog.qwq.my</a>
              </n-p>
            </n-space>
          </n-space>
        </n-space>
      </n-card>
    </n-layout-content>
    <InfoCircle />
  </div>
</template>

<script setup lang="ts">
import { NLayoutContent, NCard, NSpace, NH1, NP, NDivider, NIcon } from 'naive-ui'
import InfoCircle from '~/components/InfoCircle.vue'
import Header from '~/components/Header.vue'
import { IconBrandGithub, IconArticle } from '@tabler/icons-vue'
</script>

<style scoped>
.content {
  padding: clamp(16px, 5vw, 40px);
  min-height: calc(100vh - 64px);
  background: linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%);
  display: flex;
  justify-content: center;
  align-items: center;
}
.about-card {
  width: 100%;
  max-width: 600px;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 24px;
}
.contact-info {
  width: 100%;
}
.contact-info n-space {
  margin-bottom: 8px;
}
a {
  color: inherit;
  text-decoration: none;
}
</style>