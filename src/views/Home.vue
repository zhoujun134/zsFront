<script setup lang="ts">

// import ArticleList from "@/components/ArticleList.vue";
import Header from "@/components/Header.vue";
import ArticleList from "@/components/ArticleList.vue";
import ArticleTagCard from "@/components/ArticleTagCard.vue";
import ArticleCategoryCard from "@/components/ArticleCategoryCard.vue";
import SearchCard from "@/components/SearchCard.vue";
</script>

<template>
  <div class="zj-container">
      <div class="zj-body-left">
        <el-aside width="10%">
          <Header/>
        </el-aside>
      </div>
      <div class="zj-body-container">
        <el-main>
          <article-list></article-list>
        </el-main>
      </div>

      <div class="zj-body-right">
        <article-tag-card></article-tag-card>
        <article-category-card></article-category-card>
        <search-card></search-card>
      </div>

  </div>
</template>

<style scoped>
</style>
