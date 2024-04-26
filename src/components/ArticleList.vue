<script setup lang="ts">
import {onMounted, ref} from "vue";
import type {ArticleListReq, IArticle} from "@/api/interface/article/article";
import type {Page} from "@/api/interface/IResult";
import {getArticleList, getDefaultPageListIArticle} from "@/api/articleApi";


const articlePageInfo = ref({
  current: 1,
  total: 0,
  records: [] as IArticle[]
} as Page<IArticle>)

const articleListReq = ref(
    {
      pageNumber: 1,
      pageSize: 5
    } as ArticleListReq)

function articleList() {
  getArticleList(articleListReq.value).then(result => {
    articlePageInfo.value = result.data;
  }).catch(error => {
    return getDefaultPageListIArticle("获取页面文章出错了")
  })
}

// 页面挂载时，渲染
onMounted(() => {
  articleList()
})
const types = ['primary', 'success', 'info', 'warning', 'danger']
</script>

<template>
  <div>
    <el-card class="zj-blog-list-item"
             v-for="(post, index) in articlePageInfo.records"
             :key="post.articleId"
    >
        <router-link :to="'/detail/' + post.articleId">
          <div class="card-header">
            <el-image
                class="zj-blog-list-item-header"
                :src="post.headerImageUrl" />
          </div>
        </router-link>
      <router-link :to="'/detail/' + post.articleId">
        <h2 class="post-title">{{ post.title }}</h2>
      </router-link>
      <p class="post-content">{{ post.articleAbstract }}</p>
      <hr />
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
</template>

<style scoped>

</style>
