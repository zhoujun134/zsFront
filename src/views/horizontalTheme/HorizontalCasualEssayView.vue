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
      <el-main class="zj-home-body-container">
        <div class="zj-home-main-container">
          <el-affix>
            <horizontal-header-comp active-index="2"/>
          </el-affix>
          <horizontal-article-list-comp category-id="zs-suibi" category-name="随笔"/>
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
