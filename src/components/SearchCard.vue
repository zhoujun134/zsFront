<script setup lang="ts">

import {ref} from "vue";
import {useRouter} from "vue-router";

const searchForm = ref({
  searchKeyWord: ''
})

const router = useRouter();

function onClickSearch() {
  if (searchForm.value.searchKeyWord) {
    router.push({
      path: "/web",
      query: {
        keyword: searchForm.value.searchKeyWord
      }
    });
  }
}
</script>

<template>
  <el-card>
    <el-form :model="searchForm">
      <el-form-item prop="searchKeyWord" >
        <el-input placeholder="请输入搜索的关键字回车"
            v-model="searchForm.searchKeyWord"
            clearable
            type="text">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onClickSearch">搜索</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<style scoped>

</style>
