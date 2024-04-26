<script setup lang="ts">

import Header from "@/components/Header.vue";
import ArticleDetail from "@/components/ArticleDetail.vue";
import ArticleToc from "@/components/ArticleToc.vue";
import {onMounted, ref} from "vue";
import {generateTocList, type TocItem} from "@/api/views/tocify";
import ArticleListTemp from "@/components/ArticleList.vue";
import ArticleCategoryCard from "@/components/ArticleCategoryCard.vue";
import ArticleTagCard from "@/components/ArticleTagCard.vue";

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

// 设置目录样式
// window.onscroll = function () {
//   let scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
//   let stickyDiv = document.querySelector('#zs-zj-blog-toc-container') as HTMLElement;
//   if (scrollTop > 100) {
//     if (stickyDiv) {
//       stickyDiv.style.position = 'fixed';
//       stickyDiv.style.top = '0';
//     }
//   } else {
//     if (stickyDiv) {
//       stickyDiv.style.marginTop = "2.8%";
//     }
//   }
// };

</script>

<template>
  <div class="zj-container">
    <div class="zj-body-left">
      <el-aside width="10%" class="hidden-xs-only">
        <Header/>
      </el-aside>
    </div>
    <div class="zj-body-container">
      <el-main>
        <article-detail :article-id="articleId"></article-detail>
      </el-main>
    </div>
    <div class="zj-body-right">
      <article-tag-card></article-tag-card>
      <article-category-card></article-category-card>
      <el-affix :offset="20">
        <div id="zs-zj-blog-toc-container" v-if="tocList.length > 0" class="zj-blog-toc-list-container hidden-xs-only">
          <el-aside>
            <article-toc :toc-list="tocList"/>
          </el-aside>
        </div>
      </el-affix>
    </div>
  </div>
</template>

<style scoped>
</style>
