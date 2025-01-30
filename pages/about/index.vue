<template>
  <div>
    <Header />
    <n-layout-content class="content">
      <n-card class="about-card">
        <n-space vertical align="center">
          <n-h1>关于我们</n-h1>
          <n-p>这里是关于我们的页面，介绍了我们的团队和项目。</n-p>
        </n-space>
      </n-card>
    </n-layout-content>
    <InfoCircle />
  </div>
</template>

<script setup lang="ts">
import { NLayoutContent, NCard, NSpace, NH1, NP } from 'naive-ui'
import InfoCircle from '~/components/InfoCircle.vue'
import Header from '~/components/Header.vue'
</script>