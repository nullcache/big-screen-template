<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const activeMenu = computed(() => route.path)

const menus = [
  {
    path: '/big-screen',
    name: '大屏'
  },
  {
    path: '/news-list',
    name: '新闻'
  }
]
</script>
<template>
  <div class="menu">
    <div
      v-for="item in menus"
      :key="item.path"
      @click="router.push(item.path)"
      :class="{ active: item.path === activeMenu }"
      class="menu-item"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<style lang="less">
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

  .menu-item {
    cursor: pointer;
    padding: 0 10px;
    font-size: 22px;
    &.active {
      color: #35edd7;
    }
  }
}
</style>
