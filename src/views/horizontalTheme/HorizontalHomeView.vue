<script setup lang="ts">
import '../../assets/css/home.css'
import SearchCard from "@/components/SearchCard.vue";
import HorizontalHeaderComp from "@/components/horizontalTheme/HorizontalHeaderComp.vue";
import HorizontalArticleListComp from "@/components/horizontalTheme/HorizontalArticleListComp.vue";
import HorizontalCategoryCardComp from "@/components/horizontalTheme/HorizontalCategoryCardComp.vue";
import HorizontalTagCardComp from "@/components/horizontalTheme/HorizontalTagCardComp.vue";
import IntroductionCardComp from "@/components/horizontalTheme/card/IntroductionCardComp.vue";
import HorizontalImageCardComp from "@/components/horizontalTheme/card/HorizontalImageCardComp.vue";
import {useHead} from "@unhead/vue";
import HorizontalSearchComp from "@/components/horizontalTheme/HorizontalSearchComp.vue";

useHead({
  title: 'Z 不殊',
  meta: [
    {
      name: 'Z 不殊',
      content: 'Z 不殊, 快跑小火车, zhoujun134',
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
            <horizontal-header-comp/>
          </el-affix>

          <horizontal-image-card-comp />

          <introduction-card-comp />
          <horizontal-article-list-comp/>
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
