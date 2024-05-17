<script setup lang="ts">
import '../../assets/css/home.css'
import SearchCard from "@/components/SearchCard.vue";
import HorizontalCategoryCardComp from "@/components/horizontalTheme/HorizontalCategoryCardComp.vue";
import HorizontalTagCardComp from "@/components/horizontalTheme/HorizontalTagCardComp.vue";
import HorizontalImageCardComp from "@/components/horizontalTheme/card/HorizontalImageCardComp.vue";
import HorizontalHeaderComp from "@/components/horizontalTheme/HorizontalHeaderComp.vue";
import HorizontalArchiveCardComp from "@/components/horizontalTheme/card/HorizontalArchiveCardComp.vue";

import {useHead} from "@unhead/vue";

useHead({
  title: '归档 | Z 不殊',
  meta: [
    {
      name: 'Z 不殊',
      content: 'Z 不殊, 归档',
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
            <horizontal-header-comp active-index="1"/>
          </el-affix>
          <horizontal-image-card-comp />
          <horizontal-archive-card-comp />
          <el-card class="zj-blog-footer">
            <p>© 2024- zbusTop-Z不殊</p>
            <p>京ICP备2023022073号-1</p>
            <p>京公网安备11010802044104号</p>
          </el-card>
        </div>
        <div class="zj-home-right-container">
          <el-affix :offset="80">
            <search-card></search-card>
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
