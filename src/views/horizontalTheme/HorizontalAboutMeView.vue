<script setup lang="ts">

import SearchCard from "@/components/SearchCard.vue";
import HorizontalTagCardComp from "@/components/horizontalTheme/HorizontalTagCardComp.vue";
import HorizontalCategoryCardComp from "@/components/horizontalTheme/HorizontalCategoryCardComp.vue";
import HorizontalHeaderComp from "@/components/horizontalTheme/HorizontalHeaderComp.vue";
import ArticleDetail from "@/components/ArticleDetail.vue";
import HorizontalCommentComp from "@/components/horizontalTheme/HorizontalCommentComp.vue";
import HorizontalArticleListComp from "@/components/horizontalTheme/HorizontalArticleListComp.vue";
</script>

<template>
  <div class="zj-home-container">
    <el-container>
      <el-main class="zj-home-body-container">
        <div class="zj-home-main-container">
          <el-affix>
            <horizontal-header-comp active-index="5"/>
          </el-affix>
          <article-detail article-id="a37b457a97974cccbdabbfc224dac7bb" />
          <horizontal-comment-comp article-id="a37b457a97974cccbdabbfc224dac7bb"/>
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
