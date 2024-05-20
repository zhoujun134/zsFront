<script setup lang="ts">

import {onMounted, ref} from "vue";
import type {IHomeInfo} from "@/api/interface/home";
import {homeIndex} from "@/api/homeApi";
import {useRoute} from "vue-router";
import {useToggle} from '@vueuse/shared'
import {useDark} from "@vueuse/core";

const isDark = useDark()
const toggleDark = useToggle(isDark)

const props = defineProps({
  activeIndex: {
    type: String,
    default: "0"
  }
})
const activeIndex = ref(props.activeIndex)

const homeIndexInfo = ref<IHomeInfo>({login: false} as IHomeInfo)
const route = useRoute()
let newCategoryName: string = route.query.categoryName?.toLocaleString() ? route.query.categoryName?.toLocaleString() : '';
if (newCategoryName && newCategoryName == '随笔') {
  activeIndex.value = '2'
}
if (newCategoryName && newCategoryName == 'java') {
  activeIndex.value = '0'
}
// 页面挂载时，渲染
onMounted(() => {
  homeIndex().then(res => {
    if (res.data) {
      const resData = res.data as IHomeInfo
      homeIndexInfo.value.login = resData.login
    }
  })
})
</script>

<template>
  <div class="zj-home-header">
    <div class="zj-home-header-xs">
      <el-menu
          style="width: 100%"
          :default-active="activeIndex"
          mode="vertical"
          :popper-offset="5"
          :ellipsis="false"

      >
        <el-sub-menu index="2-">
          <template #title>
            <el-link :underline="false" href="/web">
              <img
                  style="width: 50px"
                  src="/logo.png"
                  alt="zBus logo"
              /><span style="margin-left: 10px;">Z 不殊</span>
            </el-link>
          </template>
          <el-menu-item index="2-1">
            <el-link :underline="false" href="/archivist">归档</el-link>
          </el-menu-item>
          <el-menu-item index="2-2">
            <el-link :underline="false" href="/casual/essay">随笔</el-link>
          </el-menu-item>
          <el-menu-item index="2-3" v-if="homeIndexInfo.login">
            <el-link :underline="false" href="/editor">发布文章</el-link>
          </el-menu-item>
          <el-menu-item index="2-4">
            <el-link :underline="false" href="/friends">友链</el-link>
          </el-menu-item>
          <el-menu-item index="2-5">
            <el-link :underline="false" href="/about">关于我</el-link>
          </el-menu-item>
          <el-menu-item index="2-6">
            <el-link :underline="false" href="https://afdian.net/a/zbusTop">为我发电</el-link>
          </el-menu-item>
          <el-menu-item index="2-7" @click="toggleDark()">
            <span v-if="isDark">white</span>
            <span v-if="!isDark">dark</span>
          </el-menu-item>
        </el-sub-menu>

      </el-menu>


    </div>

    <el-menu
        class="zj-home-header-md"
        :default-active="activeIndex"
        mode="horizontal"
        :ellipsis="false"
    >
      <el-menu-item index="0">
        <el-link :underline="false" href="/web">
          <img
              style="width: 50px"
              src="/logo.png"
              alt="zBus logo"
          />
        </el-link>
      </el-menu-item>
      <el-menu-item index="1">
        <el-link :underline="false" href="/archivist">归档</el-link>
      </el-menu-item>
      <el-menu-item index="2">
        <el-link :underline="false" href="/casual/essay">随笔</el-link>
      </el-menu-item>
      <el-menu-item index="3" v-if="homeIndexInfo.login">
        <el-link :underline="false" href="/editor">发布文章</el-link>
      </el-menu-item>
      <el-menu-item index="4">
        <el-link :underline="false" href="/friends">友链</el-link>
      </el-menu-item>
      <el-menu-item index="5">
        <el-link :underline="false" href="/about">关于我</el-link>
      </el-menu-item>
      <el-menu-item index="6">
        <el-link :underline="false" href="https://afdian.net/a/zbusTop">为我发电</el-link>
      </el-menu-item>
      <el-menu-item index="7" @click="toggleDark()">
        <span v-if="isDark">white</span>
        <span v-if="!isDark">dark</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style scoped>

</style>
