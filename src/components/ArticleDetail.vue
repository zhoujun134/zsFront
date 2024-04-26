<script lang="ts" setup>

import {onMounted, ref} from 'vue';
//引入markdown样式
import 'highlight.js/styles/atom-one-dark.css'
import '../assets/css/detail/detail.css'
import {getArticleDetail} from "@/api/articleApi";
import type {IArticle} from "@/api/interface/article/article";
import {dealWithCopy, marked} from "@/api/views/zjMarked";

const props = defineProps<{
  articleId: string
}>()

const articleDetails = ref()
const articleInfo = ref<IArticle>()

onMounted(async () => {
  const content = await getArticleDetail({
    articleId: props.articleId
  }).then(res => {
    const result = res.data as IArticle
    // articleDetails.value = result.content
    articleInfo.value = result
    return result.content
  })
  articleDetails.value = marked.parse(content)
  setTimeout(() => {
    dealWithCopy()
  }, 500)
})

</script>

<template>
  <div class="markdown-body" v-if="articleInfo">
    <el-card class="zj-detail-header-img-card">
    </el-card>
    <el-card>
        <h1>{{ articleInfo.title }}</h1>
      <el-space :wrap="true" :size="10" :fill="true">
        <el-row>
          <el-col :span="24">
            <el-tag type="success">创建时间: {{ articleInfo.createTime }}</el-tag>
            <el-tag type="success" v-if="articleInfo.categoryList"
                    v-for="(category,index) in articleInfo.categoryList"
            >{{ category.name }}
            </el-tag>
            <el-tag type="success" v-if="articleInfo.tagList"
                    v-for="(tag,index) in articleInfo.tagList"
            >{{ tag.tagName }}
            </el-tag>
          </el-col>
        </el-row>
      </el-space>
    </el-card>
    <el-card class="zj-detail-content-card">
      <div v-html="articleDetails" class="markdown-body"></div>
      <el-backtop :right="100" :bottom="100" style="color: black"/>
    </el-card>
  </div>
</template>

<style scoped>

</style>

