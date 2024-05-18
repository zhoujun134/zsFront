<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import type {ArticleListReq, IArticle, ICategory, ITag} from "@/api/interface/article/article";
import type {Page} from "@/api/interface/IResult";
import {getArticleList, getDefaultPageListIArticle} from "@/api/articleApi";
import {useRoute} from "vue-router";
import {Timer} from "@element-plus/icons-vue";

const props = defineProps<{
  categoryId?: string,
  categoryName?: string,
  tagId?: string,
  tagName?: string
}>()

const route = useRoute()
let newCategoryId: string = route.query.categoryId?.toLocaleString() ? route.query.categoryId?.toLocaleString() : '';
let newCategoryName: string = route.query.categoryName?.toLocaleString() ? route.query.categoryName?.toLocaleString() : '';
let keyword: string = route.query.keyword?.toLocaleString() ? route.query.keyword?.toLocaleString() : '';
if (newCategoryName && props.categoryName) {
  newCategoryName = props.categoryName
}
const categoryInfo = ref<ICategory>({
  categoryId: newCategoryId,
  name: newCategoryName
})

let newTagId: string = route.query.tagId?.toLocaleString() ? route.query.tagId?.toLocaleString() : '';
let newTagName: string = route.query.tagName?.toLocaleString() ? route.query.tagName?.toLocaleString() : '';

if (newTagName && props.tagName) {
  newTagName = props.tagName
}
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
  getArticleList(request.value).then(result => {
    articlePageInfo.value = result.data;
    if (categoryInfo.value.categoryId || tagInfo.value.tagId || keyword) {
      let elementById = document.getElementById("zj-home-main-introduce-card-body");
      if (elementById) {
        elementById.style.display = "none";
      }
    }
  }).catch(error => {
    return getDefaultPageListIArticle("获取页面文章出错了")
  })
}

function articleListPageChange(currentPage?: number) {
  request.value.pageNumber = currentPage ? currentPage : request.value.pageNumber;
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

function onCurrentPageChange(currentPage: number): void {
  articleListPageChange(currentPage)
}

</script>

<template>
  <div v-if="categoryInfo.name || tagInfo.tagName">
    <div class="zj-article-header-category-tag" >
      <el-button v-if="categoryInfo.name"
                 :id="categoryInfo.name"
                 type="primary" disabled>{{ categoryInfo.name }}</el-button>
      <el-button v-if="tagInfo.tagName"
                 :id="tagInfo.tagName"
                 type="primary" disabled>{{ tagInfo.tagName }}</el-button>
    </div>
  </div>
  <div style="display: block">
    <el-card class="zj-blog-list-item"
             v-for="(post, index) in articlePageInfo.records"
             :key="post.articleId"
    >
      <router-link :to="'/web/detail/' + post.articleId">
        <h2 class="zj-post-title">{{ post.title }}</h2>
      </router-link>
      <p v-if="post.articleAbstract"
         class="zj-post-content">
        {{ post.articleAbstract }}
      </p>
      <hr v-if="post.articleAbstract"/>
      <div class="flex gap-2" v-if="post.createTime || post.tagList">
        <el-text v-if="post.createTime"
                 style="margin-left: 10px"
                 effect="dark"
                 type="primary"
                 round
        >
          <el-icon>
            <Timer/>
          </el-icon>
          {{ post.createTime }}
        </el-text>
        <el-tag v-if="post.tagList"
                style="margin-left: 10px"
                v-for="item in post.tagList"
                :key="item.tagId"
                type="danger"
                effect="dark"
                round
        >
          {{ item.tagName }}
        </el-tag>
      </div>
    </el-card>
  </div>
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
