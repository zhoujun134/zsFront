<script setup lang="ts">

import SearchCard from "@/components/SearchCard.vue";
import HorizontalTagCardComp from "@/components/horizontalTheme/HorizontalTagCardComp.vue";
import HorizontalCategoryCardComp from "@/components/horizontalTheme/HorizontalCategoryCardComp.vue";
import HorizontalHeaderComp from "@/components/horizontalTheme/HorizontalHeaderComp.vue";
import ArticleDetail from "@/components/ArticleDetail.vue";
import HorizontalCommentComp from "@/components/horizontalTheme/HorizontalCommentComp.vue";
import {useHead} from "@unhead/vue";
useHead({
  title: '关于我 | Z 不殊',
  meta: [
    {
      name: '关于Z 不殊',
      content: 'Z 不殊, 关于Z 不殊的故事',
    },
    {
      name: 'Z 不殊',
      content: 'Z 不殊, zhoujun134',
    },
    {
      name: 'zhoujun134',
      content: 'zhoujun134, Z 不殊',
    },
    {
      name: '手写博客',
      content: '手写博客, vue3 ts java',
    },
  ],
})
</script>

<template>
  <div class="zj-home-container">
    <el-container>
      <el-main class="zj-home-body-container">
        <div class="zj-home-main-container">
          <el-affix>
            <horizontal-header-comp active-index="5"/>
          </el-affix>
          <article-detail article-id="409427aa9e274ad9939a283e259c8bf8" />
          <horizontal-comment-comp article-id="409427aa9e274ad9939a283e259c8bf8"/>
          <el-card class="zj-blog-footer">
            <p>© 2024- zbusTop-Z不殊</p>
            <p>京ICP备2023022073号-1</p>
            <p>京公网安备11010802044104号</p>
          </el-card>
        </div>
        <div class="zj-home-right-container">
          <el-affix :offset="80">
            <horizontal-tag-card-comp/>
            <horizontal-category-card-comp/>
          </el-affix>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>

</style>
