<script setup lang="ts">

import {getArchiveMap} from "@/api/articleApi";
import {onMounted, ref} from "vue";
import type {IArchiveArticle} from "@/api/interface/article/article";

const archiveList = ref<IArchiveArticle[]>()

// 页面挂载时，渲染
onMounted(() => {
  getArchiveMap().then(res => {
    archiveList.value = res.data
  })
})
const types = ["success", "primary", "warning"]
</script>

<template>
  <el-card class="zj-blog-list-item">
    <div class="zj-blog-timeline-container">
      <el-timeline class="zj-blog-timeline">
        <el-tag type="success" class="zj-blog-timeline-tag"><h1>2024 仍在继续！</h1></el-tag>
        <el-timeline-item
            v-for="(archiveInfo, index) in archiveList"
            :key="index"
            type="primary"
            :color="'cornflowerblue'"
            :timestamp="archiveInfo.createTimeStr"
        >
          <router-link :to="'/web/detail/' + archiveInfo.articleId">
            <h3 class="post-title">{{ archiveInfo.title }}</h3>
          </router-link>
        </el-timeline-item>
      </el-timeline>
    </div>
  </el-card>
</template>

<style scoped>

</style>
