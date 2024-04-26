<script setup lang="ts">

import Header from "@/components/Header.vue";
import ArticleCategoryCard from "@/components/ArticleCategoryCard.vue";
import ArticleTagCard from "@/components/ArticleTagCard.vue";
import {getArticleList, getDefaultPageListIArticle} from "@/api/articleApi";
import type {Page} from "@/api/interface/IResult";
import type {IArticle, ICategory} from "@/api/interface/article/article";
import {onMounted, ref, watch} from "vue";
import {useRoute} from "vue-router";

const route = useRoute()
let newCategoryId: string = route.query.categoryId?.toLocaleString() ? route.query.categoryId?.toLocaleString() : '';
let newCategoryName: string = route.query.categoryName?.toLocaleString() ? route.query.categoryName?.toLocaleString() : '';

const categoryInfo = ref<ICategory>({
  categoryId: newCategoryId,
  name: newCategoryName
})

watch(
    () => route.query,
    (toParams, previousParams) => {
      let newCategoryId: string = toParams.categoryId?.toLocaleString() ? toParams.categoryId?.toLocaleString() : '';
      let newCategoryName: string = toParams.categoryName?.toLocaleString() ? toParams.categoryName?.toLocaleString() : '';
      categoryInfo.value.categoryId = newCategoryId
      categoryInfo.value.name = newCategoryName
      articleList(newCategoryId)
    }
)

const articlePageInfo = ref<Page<IArticle>>()
function articleList(categoryId: string) {
  const request = {categoryId: categoryId, pageNumber: 1, pageSize: 5};
  getArticleList(request).then(result => {
    articlePageInfo.value = result.data;
  }).catch(error => {
    return getDefaultPageListIArticle("获取页面文章出错了")
  })
}

onMounted(async () => {
  articleList(categoryInfo.value.categoryId)
})


const types = ['primary', 'success', 'info', 'warning', 'danger']
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
        <el-card>
          <template v-if="categoryInfo.name" #header>
            <div class="card-header">
              <span>{{ categoryInfo.name }}</span>
            </div>
          </template>
          <div class="zj-blog-main-body">
            <el-card class="zj-blog-card-list-item"
                     v-for="(post, index) in articlePageInfo?.records"
                     :key="post.articleId"
            >
              <router-link :to="'/detail/' + post.articleId">
                <div class="card-header">
                  <el-image
                      class="zj-blog-list-item-header"
                      :src="post.headerImageUrl"/>
                </div>
              </router-link>
              <router-link :to="'/detail/' + post.articleId">
                <h2 class="post-title">{{ post.title }}</h2>
              </router-link>
              <p class="post-content">{{ post.articleAbstract }}</p>
              <hr/>
              <div class="flex gap-2">
                <el-tag
                    style="margin-left: 10px"
                    effect="dark"
                    round
                >
                  创建时间: {{ post.createTime }}
                </el-tag>
                <el-tag
                    style="margin-left: 10px"
                    v-for="item in post.tagList"
                    :key="item.tagId"
                    :type="types[index % types.length]"
                    effect="dark"
                    round
                >
                  {{ item.tagId }}
                </el-tag>
              </div>
            </el-card>
          </div>

        </el-card>
      </el-main>
    </div>

    <div class="zj-body-right">
      <article-tag-card></article-tag-card>
      <article-category-card></article-category-card>
    </div>
  </div>
</template>

<style scoped>

</style>
