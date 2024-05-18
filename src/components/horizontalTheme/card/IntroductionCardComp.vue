<script setup lang="ts">

</script>

<template>
  <div class="zj-home-main-introduce-card-body" id="zj-home-main-introduce-card-body">
    <el-card class="zj-home-main-introduce-card">
      <template #header><h2>🚄 欢迎来到我的小站</h2>本博客是自己从零倒一的实现。</template>
      <p class="zj-blog-p">
        👨‍💻 对于博客的建设，经历了一段时间的折腾，反反复复可能都不能满意，其中尝试过，WordPress， hexo, docusaurus, halo 等这些开源的博客项目，
        但是都多多少少有一些限制和不喜欢的地方，最终还是放弃了它们。
      </p>
      <p class="zj-blog-p">
        因此, 便有了自己书写一个博客的想法。经过这段时间的倒腾，也算是把第一版的系统样子做了出来，
        其中从前端的不会，到各种找资源，各种学习，css 的一些样式真的比较生疏，为什么要倒腾？
        一是想自学一下前端，方便以后自己开发一些页面，二是为了做一些自定义的内容，方便自己以后能够将自己想表达的东西，呈现出来。因此，便有了这个站点。
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
        <el-link :underline="false" href="/web/detail/061fdace32984832a5c7297ea3ac05ca" style="font-size: 16px; text-indent: 0">请点击跳转</el-link>
      </p>
    </el-card>
  </div>
</template>

<style scoped>

</style>
