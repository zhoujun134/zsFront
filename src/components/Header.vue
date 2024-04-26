<script setup lang="ts">

import {homeIndex} from "@/api/homeApi";
import {onMounted, ref} from "vue";
import type {IHomeInfo} from "@/api/interface/home";
import {dealWithCopy} from "@/api/views/zjMarked";

const homeIndexInfo = ref<IHomeInfo>({login: false } as IHomeInfo)

// 页面挂载时，渲染
onMounted(() => {
  homeIndex().then(res => {
    console.log("res: " + JSON.stringify(res))
    if (res.data) {
      const resData = res.data as IHomeInfo
      homeIndexInfo.value.login = resData.login
    }
  })
})

</script>

<template>
  <div class="zj-blog-header hidden-xs-only">
    <div class="zj-blog-header-avatar">
      <a href="/">
        <el-avatar :size="100" src='https://zbus.top/upload/logo.png'/>
      </a>
    </div>
    <h1>
      <a href="/">Z 不殊</a>
    </h1>
    <p style="font-size: 14px; color: #6e7781">学习，归档，总结</p>
    <div class="zj-el-link">
      <el-link href="/" :underline="false">首页</el-link>
    </div>
    <div class="zj-el-link">
      <el-link :underline="false" href="/categoryInfo?categoryId=zs-suibi&categoryName=随笔">随笔</el-link>
    </div>
    <div v-if="homeIndexInfo.login" class="zj-el-link">
      <el-link :underline="false" href="/editor">发布文章</el-link>
    </div>
    <div class="zj-el-link">
      <el-link :underline="false">友链</el-link>
    </div>
    <div class="zj-el-link">
      <el-link :underline="false">关于我</el-link>
    </div>
  </div>
</template>

<style scoped>

</style>
