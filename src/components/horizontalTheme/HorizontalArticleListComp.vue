<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import type {ArticleListReq, IArticle, ICategory, ITag} from "@/api/interface/article/article";
import type {Page} from "@/api/interface/IResult";
import {getArticleList, getDefaultPageListIArticle} from "@/api/articleApi";
import {useRoute} from "vue-router";
import {Timer} from "@element-plus/icons-vue";

defineProps<{
  categoryId?: string,
  tagId?: string,
}>()

const route = useRoute()
let newCategoryId: string = route.query.categoryId?.toLocaleString() ? route.query.categoryId?.toLocaleString() : '';
let newCategoryName: string = route.query.categoryName?.toLocaleString() ? route.query.categoryName?.toLocaleString() : '';
let keyword: string = route.query.keyword?.toLocaleString() ? route.query.keyword?.toLocaleString() : '';
const categoryInfo = ref<ICategory>({
  categoryId: newCategoryId,
  name: newCategoryName
})

let newTagId: string = route.query.tagId?.toLocaleString() ? route.query.tagId?.toLocaleString() : '';
let newTagName: string = route.query.tagName?.toLocaleString() ? route.query.tagName?.toLocaleString() : '';

const tagInfo = ref<ITag>({
  tagId: newTagId,
  tagName: newTagName
})

watch(
    () => route.query,
    (toParams, previousParams) => {
      let newCategoryId: string = toParams.categoryId?.toLocaleString() ? toParams.categoryId?.toLocaleString() : '';
      let newCategoryName: string = toParams.categoryName?.toLocaleString() ? toParams.categoryName?.toLocaleString() : '';
      categoryInfo.value.categoryId = newCategoryId
      categoryInfo.value.name = newCategoryName
      let newTagId: string = toParams.tagId?.toLocaleString() ? toParams.tagId?.toLocaleString() : '';
      let newTagName: string = toParams.tagName?.toLocaleString() ? toParams.tagName?.toLocaleString() : '';
      tagInfo.value.tagId = newTagId
      tagInfo.value.tagName = newTagName
      let newKeyword: string = route.query.keyword?.toLocaleString() ? route.query.keyword?.toLocaleString() : '';
      articleList(newCategoryId, newTagId, newKeyword)
    }
)


const articlePageInfo = ref({
  current: 1,
  total: 0,
  records: [] as IArticle[]
} as Page<IArticle>)

const request = ref<ArticleListReq>({
  categoryId: "",
  tagId: "",
  keyword: keyword,
  pageNumber: 1,
  pageSize: 10
} as ArticleListReq);

function articleList(categoryId?: string, tagId?: string, keyword?: string, currentPage?: number, pageSize?: number) {
  request.value.categoryId = categoryId;
  request.value.tagId = tagId;
  request.value.keyword = keyword;
  if (currentPage) {
    request.value.pageNumber = currentPage;
  }
  if (pageSize) {
    request.value.pageSize = pageSize
  }
  console.log("json req: " + JSON.stringify(request.value))
  getArticleList(request.value).then(result => {
    articlePageInfo.value = result.data;
    // request.value.pageSize = result.data.pageSize;
    console.log("articlePageInfo: " + JSON.stringify(result))
  }).catch(error => {
    return getDefaultPageListIArticle("获取页面文章出错了")
  })
}

function articleListPageChange(currentPage?: number) {
  request.value.pageNumber = currentPage ? currentPage : request.value.pageNumber;
  console.log("request: after: " + JSON.stringify(request.value))
  getArticleList(request.value).then(result => {
    articlePageInfo.value = result.data;
  }).catch(error => {
    return getDefaultPageListIArticle("获取页面文章出错了")
  })
}

// 页面挂载时，渲染
onMounted(() => {
  articleList(categoryInfo.value.categoryId, tagInfo.value.tagId, keyword)
})

function onChangePageSizeAndCurrent(currentPage: number, pageSize: number): void {
  console.log("currentPage and pageSize: ", currentPage, pageSize);
  articleListPageChange(currentPage)
}

function onCurrentPageChange(currentPage: number) : void {
  console.log("onCurrentPageChange currentPage: ", currentPage);
  articleListPageChange(currentPage)
}


const types = ['primary', 'success', 'info', 'warning', 'danger']
</script>

<template>
      <div v-if="categoryInfo.name || tagInfo.tagName">
        <div class="card-header">
          <el-button v-if="categoryInfo.name" type="primary" disabled>{{ categoryInfo.name }}</el-button>
          <el-button v-if="tagInfo.tagName" type="primary" disabled>{{ tagInfo.tagName }}</el-button>
        </div>
      </div>
      <el-card class="zj-blog-list-item"
               v-for="(post, index) in articlePageInfo.records"
               :key="post.articleId"
      >
<!--        <router-link v-if="post.headerImageUrl"-->
<!--                     :to="'/web/detail/' + post.articleId">-->
<!--          <div class="card-header">-->
<!--            <el-image-->
<!--                class="zj-home-article-header-image"-->
<!--                :src="post.headerImageUrl"/>-->
<!--          </div>-->
<!--        </router-link>-->
        <router-link :to="'/web/detail/' + post.articleId">
          <h2 class="post-title">{{ post.title }}</h2>
        </router-link>
        <p v-if="post.articleAbstract"
           class="post-content">
          {{ post.articleAbstract }}
        </p>
        <hr v-if="post.articleAbstract"/>
        <div class="flex gap-2" v-if="post.createTime || post.tagList">
          <el-text v-if="post.createTime"
              style="margin-left: 10px"
              effect="dark"
              round
          >
            <el-icon><Timer /></el-icon>
            创建时间: {{ post.createTime }}
          </el-text>
          <el-tag v-if="post.tagList"
              style="margin-left: 10px"
              v-for="item in post.tagList"
              :key="item.tagId"
              :type="types[index % types.length]"
              effect="dark"
              round
          >
            {{ item.tagName }}
          </el-tag>
        </div>
      </el-card>
<!--  分页组件-->
  <div style="display: flex; justify-content: center; margin-top: 5%">
    <!--                   :hide-on-single-page="true"-->
    <el-pagination background layout="prev, pager, next"
                   v-model:total="articlePageInfo.total"
                   v-model:page-count="articlePageInfo.pageSize"
                   @current-change="onCurrentPageChange"
    />
  </div>
</template>

<style scoped>

</style>
