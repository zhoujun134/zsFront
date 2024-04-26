<script setup lang="ts">
import '../../assets/css/home.css'
import SearchCard from "@/components/SearchCard.vue";
import HorizontalHeaderComp from "@/components/horizontalTheme/HorizontalHeaderComp.vue";
import HorizontalArticleListComp from "@/components/horizontalTheme/HorizontalArticleListComp.vue";
import HorizontalCategoryCardComp from "@/components/horizontalTheme/HorizontalCategoryCardComp.vue";
import HorizontalTagCardComp from "@/components/horizontalTheme/HorizontalTagCardComp.vue";
import ArticleToc from "@/components/ArticleToc.vue";
import HorizontalCommentComp from "@/components/horizontalTheme/HorizontalCommentComp.vue";
import ArticleDetail from "@/components/ArticleDetail.vue";

</script>

<template>
  <div class="zj-home-container">
    <el-container>
      <div class="zj-home-header-container">
        <el-header>
          <el-affix :offset="10">
            <horizontal-header-comp/>
          </el-affix>
        </el-header>
      </div>

      <el-main class="zj-home-body-container">
        <div class="zj-home-main-container">
          <horizontal-article-list-comp/>
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
