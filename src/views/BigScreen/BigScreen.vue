<script setup>
import BarChart from './cpns/BarChart.vue'
import LineChart from './cpns/LineChart.vue'
import PieChart from './cpns/PieChart.vue'
</script>

<template>
  <div class="big-screen">
    <div class="left-part">
      <div class="title">饼图</div>
      <PieChart style="height: 500px" />
    </div>
    <div class="right-part">
      <div class="top-part">
        <div class="title">折线/曲线图</div>
        <LineChart style="height: 400px" />
      </div>
      <div class="bottom-part">
        <div class="title">柱状图</div>
        <BarChart style="height: 200px; margin-top: -20px" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.big-screen {
  display: flex;
  position: relative;
  margin: 123px 77px 0px 37px;
  -webkit-box-pack: justify;
  justify-content: space-between;

  .left-part {
    width: 413px;
    height: 860px;
    background: rgba(2, 6, 25, 0.86);
    border-radius: 12px;
    border: 1px solid rgb(77, 94, 155);
    padding: 28px 28px 23px;
    box-sizing: border-box;
  }

  .right-part {
    width: 1370px;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;

    .top-part {
      height: 543px;
      background: rgba(2, 6, 25, 0.86);
      border-radius: 12px;
      border: 1px solid rgb(77, 94, 155);
      padding: 23px 23px 30px 30px;
      box-sizing: border-box;
    }

    .bottom-part {
      height: 298px;
      background: rgba(2, 6, 25, 0.86);
      border-radius: 12px;
      border: 1px solid rgb(77, 94, 155);
      padding: 23px 64px 23px 25px;
      box-sizing: border-box;
    }
  }

  .title {
    font-size: 22px;
    margin-bottom: 40px;
  }
}
</style>
