<script setup lang="ts">

import ArticleDetail from "@/components/ArticleDetail.vue";
import ArticleToc from "@/components/ArticleToc.vue";
import {onMounted, ref} from "vue";
import {generateTocList, type TocItem, tocTotalLength} from "@/api/views/tocify";
import HorizontalHeaderComp from "@/components/horizontalTheme/HorizontalHeaderComp.vue";
import SearchCard from "@/components/SearchCard.vue";
import HorizontalCommentComp from "@/components/horizontalTheme/HorizontalCommentComp.vue";

defineProps<{
  articleId: string
}>()

const tocList = ref([] as TocItem[])
onMounted( () => {
  setTimeout(() => {
    tocList.value = generateTocList();
    console.log("tocTotalLength: ", tocTotalLength)
  }, 800)
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
          <article-detail :article-id="articleId"></article-detail>
          <horizontal-comment-comp :article-id="articleId"/>
          <el-card class="zj-blog-footer">
            <p>© 2024- zbusTop-Z不殊</p>
            <p>京ICP备2023022073号-1</p>
            <p>京公网安备11010802044104号</p>
          </el-card>
        </div>
        <div class="zj-home-right-container" v-if="tocTotalLength > 3">
          <el-affix :offset="80">
            <div class="zj-home-blog-toc-list-container">
              <el-aside style="width: 100%">
                <article-toc :toc-list="tocList"/>
              </el-aside>
            </div>
          </el-affix>
          <el-backtop :right="100" :bottom="100"/>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
</style>
