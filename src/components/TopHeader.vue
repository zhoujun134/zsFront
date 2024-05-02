<script setup lang="ts">
import {onMounted, ref} from "vue";
import type {IHomeInfo} from "@/api/interface/home";
import {homeIndex} from "@/api/homeApi";

const homeIndexInfo = ref<IHomeInfo>({login: false } as IHomeInfo)

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
<div class="zj-top-header-container">
  <el-header>
    <div>
      <a href="/">
        <el-avatar :size="100" src='/logo.png'/>
      </a>
    </div>
    <h1>
      <a href="/">Z 不殊</a>
    </h1>
    <p style="font-size: 14px; color: #6e7781">学习，归档，总结</p>
      <el-link href="/" :underline="false">首页</el-link>
      <el-link :underline="false" href="/categoryInfo?categoryId=zs-suibi&categoryName=随笔">随笔</el-link>
    <div v-if="homeIndexInfo.login">
      <el-link :underline="false" href="/editor">发布文章</el-link>
    </div>
    <div>
      <el-link :underline="false">友链</el-link>
    </div>
    <div>
      <el-link :underline="false">关于我</el-link>
    </div>
  </el-header>
</div>
</template>

<style scoped>

</style>
