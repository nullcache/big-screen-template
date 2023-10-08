<script setup>
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { LineChart } from 'echarts/charts'
import { GridComponent } from 'echarts/components'
import { UniversalTransition } from 'echarts/features'
import VChart, { THEME_KEY } from 'vue-echarts'
import { ref, provide, computed } from 'vue'
import { getLine } from '@/services/index'

use([CanvasRenderer, LineChart, UniversalTransition, GridComponent])

provide(THEME_KEY, 'dark')
const xData = ref([])
const yData = ref([])

const option = computed(() => ({
  xAxis: {
    type: 'category',
    data: xData.value
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: yData.value,
      type: 'line',
      smooth: true
    }
  ]
}))

async function getData() {
  const res = await getLine()
  xData.value = res.data.labels
  yData.value = res.data.values
}

getData()
</script>

<template>
  <v-chart class="chart" :option="option" v-if="xData.length" />
</template>

<style scoped lang="less"></style>
