<template>
  <div class="screen-adapter" :style="style">
    <slot></slot>
  </div>
</template>
<script setup>
import { toRefs, onMounted, onUnmounted, ref, computed } from 'vue'
const props = defineProps({
  width: {
    type: String,
    default: '1920'
  },
  height: {
    type: String,
    default: '1080'
  }
})

const { width, height } = toRefs(props)

const w = window.innerWidth / +width.value
const h = window.innerHeight / +height.value

const scaleRatio = ref(w < h ? w : h)
const style = computed(() => {
  return {
    width: width.value + 'px',
    height: height.value + 'px',
    transform: `scale(${scaleRatio.value}) translate(-50%, -50%)`
  }
})
const Debounce = (fn, delay = 200) => {
  let timer
  return (...rest) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      timer = null
      fn.call(this, ...rest)
    }, delay)
  }
}

// 获取放大缩小比例 以小的为准
const getScaleRatio = () => {
  const w = window.innerWidth / +width.value
  const h = window.innerHeight / +height.value
  scaleRatio.value = w < h ? w : h
}

onMounted(() => {
  window.onresize = Debounce(getScaleRatio)
})
onUnmounted(() => {
  window.onresize = null
})
</script>
<style lang="less" scoped>
.screen-adapter {
  position: absolute;
  top: 50%;
  left: 50%;
  transition: 0.3s;
  transform-origin: 0 0; // 变化中心改为左上角 默认是center
}
</style>
