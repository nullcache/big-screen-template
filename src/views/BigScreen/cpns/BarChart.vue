<script setup>
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart } from 'echarts/charts'
import { TooltipComponent, GridComponent } from 'echarts/components'
import VChart, { THEME_KEY } from 'vue-echarts'
import { ref, provide, computed } from 'vue'
import { getBar } from '@/services/index'

use([CanvasRenderer, BarChart, TooltipComponent, GridComponent])

provide(THEME_KEY, 'dark')
const xData = ref([])
const yData = ref([])

const option = computed(() => ({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: xData.value,
      axisTick: {
        alignWithLabel: true
      }
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Direct',
      type: 'bar',
      barWidth: '60%',
      data: yData.value
    }
  ]
}))

async function getData() {
  const res = await getBar()
  xData.value = res.data.labels
  yData.value = res.data.values
}

getData()
</script>

<template>
  <v-chart class="chart" :option="option" v-if="xData.length" />
</template>

<style scoped lang="less"></style>
