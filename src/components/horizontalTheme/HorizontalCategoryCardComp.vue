<script setup lang="ts">

import type {ISearchReq} from "@/api/interface/admin/editor";
import {getCategoryList} from "@/api/articleApi";
import {onMounted, ref, watch} from "vue";
import type {ICategory} from "@/api/interface/article/article";
import {useRoute, useRouter} from 'vue-router'

const categoryList = ref<ICategory[]>()

function getHomeCategoryList() {
  const searchReq: ISearchReq = {
    searchKey: ""
  } as ISearchReq;
  getCategoryList(searchReq).then(res => {
    if (res && res.data && res.data.length > 0) {
      categoryList.value = res.data
    }
  }).catch(error => {
    console.log("获取文章分类列表出错啦！" + error)
  })
}
const router = useRouter();

// 页面挂载时，渲染
onMounted(() => {
  getHomeCategoryList()
})
function onCategoryClick(row: any, column: any, cell: HTMLTableCellElement, event: Event) {
  router.push({
    path: "/web",
    query: {
      categoryId: row.categoryId,
      categoryName: row.name
    }
  });
}




</script>

<template>
  <div class="zj-category-list-container">
    <el-card>
      <template #header>
        <div class="card-header">
          <span>分类</span>
        </div>
      </template>
      <el-table :data="categoryList"
                style="width: 100%"
                :show-header='false'
                @cell-click="onCategoryClick"
      >
        <el-table-column prop="name" label="文章分类"/>
      </el-table>
    </el-card>
  </div>
</template>

<style scoped>

</style>
