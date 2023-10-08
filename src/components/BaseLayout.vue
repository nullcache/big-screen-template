<script setup>
import ScreenWrapper from './ScreenWrapper.vue'
import BaseHeader from './BaseHeader.vue'
import BaseMenu from './BaseMenu.vue'
</script>
<template>
  <ScreenWrapper>
    <div class="basic-layout">
      <BaseHeader />
      <RouterView />
      <BaseMenu />
    </div>
  </ScreenWrapper>
</template>

<style lang="less">
.screen-adapter {
  background-color: #354159;
}

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
    font-size: 30px;
  }
}
.menu {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%);
  background-color: gray;
  padding: 10px 10px;
  color: #fff;
  display: flex;
  width: 200px;
  justify-content: space-between;
  box-sizing: border-box;
  border-radius: 10px;

  div {
    cursor: pointer;
    padding: 0 10px;
  }
}
</style>
