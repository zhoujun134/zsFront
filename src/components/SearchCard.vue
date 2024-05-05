<script setup lang="ts">

import {ref} from "vue";
import {useRouter} from "vue-router";

const searchForm = ref({
  searchKeyWord: ''
})

const router = useRouter();

function onChangeSearch(value: string | number):void {
  console.log("value: ",  value)
}
function onClickSearch() {
  if (searchForm.value.searchKeyWord) {
    router.push({
      path: "/web",
      query: {
        keyword: searchForm.value.searchKeyWord
      }
    });
  }else {
    router.push({
      path: "/web",
    })
  }
}
</script>

<template>
  <el-card>
    <el-form :model="searchForm"
             @submit.native.prevent>
      <el-form-item prop="searchKeyWord" >
        <el-input placeholder="请输入搜索的关键字回车"
            v-model="searchForm.searchKeyWord"
            @keydown.enter="onClickSearch"
            clearable
            type="text">
        </el-input>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<style scoped>

</style>
