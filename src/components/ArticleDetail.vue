<script lang="ts" setup>

import {nextTick, onMounted, ref} from 'vue';
//引入markdown样式
import '../assets/css/detail/detail.css'
import {getArticleDetail} from "@/api/articleApi";
import type {IArticle} from "@/api/interface/article/article";
import {Calendar, UserFilled} from "@element-plus/icons-vue";
import {useHead} from "@unhead/vue";
import mediumZoom from "medium-zoom";
import Prism from "prismjs" //代码高亮插件的core
import "prismjs/plugins/line-numbers/prism-line-numbers.js"//行号插件
import "prismjs/themes/prism-okaidia.css"//高亮主题
import "prismjs/plugins/line-numbers/prism-line-numbers.css"//行号插件的样式

const props = defineProps<{
  articleId: string
}>()

const articleDetails = ref()
const articleInfo = ref<IArticle>()

onMounted(async () => {
  await getArticleDetail({
    articleId: props.articleId
  }).then(res => {
    const result = res.data as IArticle
    // articleDetails.value = result.content
    articleInfo.value = result
    if (result.content) {
      articleDetails.value = result.content
      nextTick(() => {
        mediumZoom('[data-zoomable]', {
          // 打开之后非图片区域显示黑色
          background: 'rgba(0, 0, 0, 0.6)'
        });
        // 全局代码高亮(必须等获取数据之后，代码高亮才能生效，也可以用定时器定时)
        Prism.highlightAll()
      })
    }
  })
})
useHead({
  title: '详情 | Z 不殊',
  meta: [
    {
      name: '关于 Z 不殊',
      content: 'Z 不殊, 关于 Z 不殊 的故事',
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
    {
      name: "description",
      content: () => {
        if (articleInfo.value?.articleAbstract) {
          return articleInfo.value?.articleAbstract;
        }
        if (articleInfo.value?.title) {
          return articleInfo.value?.title;
        }
        return props.articleId;
      }
    }
  ],
})
</script>

<template>
  <div class="markdown-body zj-markdown-container" v-if="articleInfo">
    <!--        <el-card class="zj-detail-header-img-card">-->
    <!--        </el-card>-->
    <el-card>
      <h1>{{ articleInfo.title }}</h1>
      <el-space :wrap="true" :size="10" :fill="true">
        <el-row>
          <el-col :span="24">
            <el-text>
              <el-icon>
                <UserFilled/>
              </el-icon>
              创建人: zhouJun134
            </el-text>
            <el-text style="margin-left: 10px">
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

