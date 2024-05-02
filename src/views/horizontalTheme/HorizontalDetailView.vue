<script setup lang="ts">

import ArticleDetail from "@/components/ArticleDetail.vue";
import ArticleToc from "@/components/ArticleToc.vue";
import {onMounted, ref} from "vue";
import {generateTocList, type TocItem} from "@/api/views/tocify";
import HorizontalHeaderComp from "@/components/horizontalTheme/HorizontalHeaderComp.vue";
import SearchCard from "@/components/SearchCard.vue";
import HorizontalTagCardComp from "@/components/horizontalTheme/HorizontalTagCardComp.vue";
import HorizontalCategoryCardComp from "@/components/horizontalTheme/HorizontalCategoryCardComp.vue";
import HorizontalCommentComp from "@/components/horizontalTheme/HorizontalCommentComp.vue";
import HorizontalArticleListComp from "@/components/horizontalTheme/HorizontalArticleListComp.vue";

defineProps<{
  articleId: string
}>()

const tocList = ref([] as TocItem[])
onMounted(async () => {
  setTimeout(() => {
    tocList.value = generateTocList();
    console.log(tocList.value.length)
  }, 500)
})

</script>

<template>
  <div class="zj-home-container">
    <el-container>
      <el-header style="height: auto">
        <horizontal-header-comp/>
      </el-header>
      <el-main class="zj-home-body-container">
        <div class="zj-home-main-container">
          <article-detail :article-id="articleId"></article-detail>
          <horizontal-comment-comp :article-id="articleId"/>
          <el-card class="zj-blog-footer">
            <p>© 2024- zbusTop-Z不殊</p>
            <p>京ICP备2023022073号-1</p>
            <p>京公网安备11010802044104号</p>
          </el-card>
        </div>
        <div class="zj-home-right-container">
          <search-card></search-card>
          <horizontal-tag-card-comp/>
          <horizontal-category-card-comp/>
          <el-affix :offset="80">
            <div v-if="tocList.length > 0"
                 class="zj-home-blog-toc-list-container">
              <el-aside style="width: 100%">
                <article-toc :toc-list="tocList"/>
              </el-aside>
            </div>
          </el-affix>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
</style>
