<script setup lang="ts">

import type {ISearchReq} from "@/api/interface/admin/editor";
import {getTagList} from "@/api/articleApi";
import {onMounted, ref} from "vue";
import type {ITag} from "@/api/interface/article/article";


const tagList = ref<ITag[]>()

function getHomeTagList() {
  const searchReq: ISearchReq = {
    searchKey: ""
  } as ISearchReq;
  getTagList(searchReq).then(res => {
    if (res && res.data && res.data.length > 0) {
      tagList.value = res.data
    }
  }).catch(error => {
    console.log("获取文章标签列表出错啦！" + error)
  })
}

function onTagClick(evt: MouseEvent) {
  // console.log(evt)
}

// 页面挂载时，渲染
onMounted(() => {
  getHomeTagList()
})

const tagTypeList = ['info', 'primary', 'success', 'warning', 'danger'];

</script>

<template>
  <div class="zj-tag-list-container">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>标签</span>
        </div>
      </template>
      <el-tag v-for="(tag, index) in tagList"
              :key="tag.tagId"
              class="text item"
              :type="tagTypeList[index % 5]"
              @click="onTagClick"
      >
        <el-link :href="'/web?tagId=' + tag.tagId +'&tagName=' + tag.tagName" :underline="false">
          {{ tag.tagName }}
        </el-link>
      </el-tag>
    </el-card>
  </div>
</template>

<style scoped>

</style>
