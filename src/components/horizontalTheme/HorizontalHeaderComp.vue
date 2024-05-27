<script setup lang="ts">

import {inject, onMounted, type Ref, ref} from "vue";
import type {IHomeInfo} from "@/api/interface/home";
import {homeIndex} from "@/api/homeApi";
import {useRoute, useRouter} from "vue-router";
import {useToggle} from '@vueuse/shared'
import {useDark} from "@vueuse/core";
import {Search, Star, Switch} from "@element-plus/icons-vue";
import HorizontalSearchComp from "@/components/horizontalTheme/HorizontalSearchComp.vue";
import {searchShowVariable} from "@/api/gloablConfig";

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

function onClick(url: string) {
  if (url) {
    window.location.href = url;
  }
}

let searchShowVar: Ref<boolean> = inject("searchShowVariable", ref<boolean>(false))

import {ElMessage, ElMessageBox} from 'element-plus'

const router = useRouter();
const openSearch = () => {
  ElMessageBox.prompt('请输入您想要搜索的内容', '全站搜索', {
    confirmButtonText: '搜索',
    cancelButtonText: '取消',
    inputValidator: (data: string): boolean => !!(data && data.length >= 3),
    inputErrorMessage: '至少输入3个字符',
  }).then(({value}) => {
    router.push({
      path: "/web",
      query: {
        keyword: value
      }
    });
  }).catch(() => {
        ElMessage({
          type: 'info',
          message: '已取消搜索',
        })
      })
}
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
          :close-on-click-outside="true"
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
          <el-menu-item index="2-1" @click="onClick('/archivist')">
            <el-link :underline="false" href="/archivist">归档</el-link>
          </el-menu-item>
          <el-menu-item index="2-2" @click="onClick('/casual/essay')">
            <el-link :underline="false" href="/casual/essay">随笔</el-link>
          </el-menu-item>
          <el-menu-item index="2-3" @click="onClick('/editor')" v-if="homeIndexInfo.login">
            <el-link :underline="false" href="/editor">发布文章</el-link>
          </el-menu-item>
          <el-menu-item index="2-4" @click="onClick('/friends')">
            <el-link :underline="false" href="/friends">友链</el-link>
          </el-menu-item>
          <el-menu-item index="2-5" @click="onClick('/about')">
            <el-link :underline="false" href="/about">关于我</el-link>
          </el-menu-item>
          <el-menu-item index="2-6" @click="onClick('https://afdian.net/a/zbusTop')">
            <el-link :underline="false" href="https://afdian.net/a/zbusTop">为我发电</el-link>
          </el-menu-item>
          <el-menu-item index="2-7" @click="openSearch" align="right">
            <el-icon>
              <Search/>
            </el-icon>
          </el-menu-item>
          <el-menu-item index="2-8" @click="toggleDark()">
            <el-icon>
              <Switch/>
            </el-icon>
          </el-menu-item>
        </el-sub-menu>

      </el-menu>


    </div>

    <el-menu
        class="zj-home-header-md"
        :default-active="activeIndex"
        mode="horizontal"
        :ellipsis="false"
        :close-on-click-outside="true"
    >
      <el-menu-item index="0" @click="onClick('/web')">
        <el-link :underline="false" href="/web">
          <img
              style="width: 50px"
              src="/logo.png"
              alt="zBus logo"
          />
        </el-link>
      </el-menu-item>
      <el-menu-item index="1" @click="onClick('/archivist')">
        <el-link :underline="false" href="/archivist">归档</el-link>
      </el-menu-item>
      <el-menu-item index="2" @click="onClick('/casual/essay')">
        <el-link :underline="false" href="/casual/essay">随笔</el-link>
      </el-menu-item>
      <el-menu-item index="3" @click="onClick('/editor')" v-if="homeIndexInfo.login">
        <el-link :underline="false" href="/editor">发布文章</el-link>
      </el-menu-item>
      <el-menu-item index="4" @click="onClick('/friends')">
        <el-link :underline="false" href="/friends">友链</el-link>
      </el-menu-item>
      <el-menu-item index="5" @click="onClick('/about')">
        <el-link :underline="false" href="/about">关于我</el-link>
      </el-menu-item>
      <el-menu-item index="6" @click="onClick('https://afdian.net/a/zbusTop')">
        <el-link :underline="false" href="https://afdian.net/a/zbusTop">为我发电</el-link>
      </el-menu-item>
      <el-menu-item index="7" @click="openSearch" align="right">
        <el-icon>
          <Search/>
        </el-icon>
      </el-menu-item>
      <el-menu-item index="8" @click="toggleDark()">
        <el-icon>
          <Switch/>
        </el-icon>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style scoped>
</style>
