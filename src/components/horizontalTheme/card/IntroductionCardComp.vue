<script setup lang="ts">

</script>

<template>
  <div class="zj-home-main-introduce-card-body">
    <transition name="el-zoom-in-top">
      <el-card class="zj-home-main-introduce-card">
        <template #header><h2>欢迎来到我的小站</h2>本博客是自己手写的</template>
        <p class="zj-blog-p">
          经历了一段时间的折腾，该网站终于测试上线了，其中从不会，到各种找资源，尝试了很多目前开源的一些博客框架，最终还是放弃了，
          一是想自学一下前端，方便以后自己开发一些页面，二是为了做一些自定义的内容。因此便有了这个站点。
        </p>
        <p class="zj-blog-p">
          <el-tag type="success" class="zj-blog-tag"> 前端:</el-tag>
          基于 vue3 + typeScript + element-plus 构建。
        </p>
        <p class="zj-blog-p">
          <el-tag type="success" class="zj-blog-tag"> 后端:</el-tag>
          基于 java 语言编写，使用了 springboot 构建，数据库采用的是 Mysql + redis。
        </p>
        <p class="zj-blog-p">
          <el-tag type="warning" class="zj-blog-tag">Notice:</el-tag>
          由于前端页面是边学边写的，可能会存在一些 bug，欢迎大家评论和留言，我将不断改进，也希望大家共同进步。
        </p>
        <p class="zj-blog-p">如果您想了解更多，
          <el-link :underline="false" href="/about" style="font-size: 16px; text-indent: 0">请点击跳转</el-link>
        </p>
      </el-card>
    </transition>
    <el-card class="zj-home-main-introduce-card">
      <template #header><h3>快跑小火车</h3></template>
      <img
          src="/logo.webp"
          style="width: 100%;"
      />
      <p class="zj-blog-p">如果您想了解更多，
        <el-link :underline="false" href="/about" style="font-size: 16px; text-indent: 0">请点击跳转</el-link>
      </p>
    </el-card>
  </div>
</template>

<style scoped>

</style>
