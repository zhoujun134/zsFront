<script lang="ts" setup>

import {onMounted, ref} from 'vue';
//引入markdown样式
import 'highlight.js/styles/atom-one-dark.css'
import '../assets/css/detail/detail.css'
import {getArticleDetail} from "@/api/articleApi";
import type {IArticle} from "@/api/interface/article/article";
import {dealWithCopy, marked} from "@/api/views/zjMarked";
import {Calendar} from "@element-plus/icons-vue";
import {useHead} from "@unhead/vue";

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
  if (content) {
    articleDetails.value = marked.parse(content)
  }
  setTimeout(() => {
    dealWithCopy()
  }, 500)
})

useHead({
  title: '详情 | 快跑小火车',
  meta: [
    {
      name: '关于快跑小火车',
      content: '快跑小火车, 关于快跑小火车的故事',
    },
    {
      name: '快跑小火车',
      content: '快跑小火车, zhoujun134',
    },
    {
      name: 'zhoujun134',
      content: 'zhoujun134, 快跑小火车',
    },
    {
      name: '手写博客',
      content: '手写博客, vue3 ts java',
    },
  ],
})
</script>

<template>
  <div class="markdown-body zj-markdown-container" v-if="articleInfo">
    <!--    <el-card class="zj-detail-header-img-card">-->
    <!--    </el-card>-->
    <el-card>
      <h1>{{ articleInfo.title }}</h1>
      <el-space :wrap="true" :size="10" :fill="true">
        <el-row>
          <el-col :span="24">
            <el-text>
              <el-icon>
                <Calendar/>
              </el-icon>
              创建时间: {{ articleInfo.createTime }}
            </el-text>
            <el-text v-if="articleInfo.categoryList"
                     v-for="(category, index) in articleInfo.categoryList"
            >{{ category.name }}
            </el-text>
            <el-text v-if="articleInfo.tagList"
                     v-for="(tag,index) in articleInfo.tagList"
            >{{ tag.tagName }}
            </el-text>
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
.zj-markdown-container {
  margin-top: 10px;
}
</style>

