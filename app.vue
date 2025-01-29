<template>
  <n-config-provider>
    <n-message-provider>
      <n-notification-provider>
        <n-dialog-provider>
          <NuxtPage />
        </n-dialog-provider>
      </n-notification-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import {
  NConfigProvider,
  NMessageProvider,
  NNotificationProvider,
  NDialogProvider
} from 'naive-ui'
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
