<script setup>
import dayjs from 'dayjs'
import { onMounted, onUnmounted, ref } from 'vue'
import { useFullscreen } from '@vueuse/core'

const currentTime = ref(new Date())
const el = ref()
const { isFullscreen, toggle } = useFullscreen(el)

let interval
onMounted(() => {
  interval = setInterval(() => {
    currentTime.value = new Date()
  }, 1000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>
<template>
  <div class="header">
    <div class="full-screen-btn" @click="toggle">
      {{ isFullscreen ? '返回' : '全屏' }}
    </div>
    <div class="title">大屏可视化</div>
    <div class="time">
      {{ dayjs(currentTime).format('HH:mm:ss') }}
    </div>
  </div>
</template>

<style lang="less">
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #051745;
  height: 77px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(50, 197, 255);

  .title {
    font-size: 36px;
  }

  .full-screen-btn {
    position: absolute;
    left: 40px;
    font-size: 20px;
    border: 1px solid;
    border-radius: 10px;
    padding: 8px 16px;
    cursor: pointer;
  }

  .time {
    position: absolute;
    right: 40px;
    font-family: PingFangSC-Semibold, 'PingFang SC';
    font-size: 34px;
    font-weight: 600;
    line-height: 48px;
  }
}
</style>
