<script setup lang="ts">

import {onMounted, ref} from "vue";
import {generateTocList, type TocItem} from "@/api/views/tocify";
import HorizontalHeaderComp from "@/components/horizontalTheme/HorizontalHeaderComp.vue";
import SearchCard from "@/components/SearchCard.vue";
import HorizontalTagCardComp from "@/components/horizontalTheme/HorizontalTagCardComp.vue";
import HorizontalCategoryCardComp from "@/components/horizontalTheme/HorizontalCategoryCardComp.vue";
import HorizontalArticleListComp from "@/components/horizontalTheme/HorizontalArticleListComp.vue";

const tocList = ref([] as TocItem[])
onMounted(async () => {
  setTimeout(() => {
    tocList.value = generateTocList();
    console.log(tocList.value.length)
  }, 500)
})

import {useHead} from "@unhead/vue";

useHead({
  title: '随笔 | Z 不殊',
  meta: [
    {
      name: 'Z 不殊随笔',
      content: 'Z 不殊, 随笔',
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
