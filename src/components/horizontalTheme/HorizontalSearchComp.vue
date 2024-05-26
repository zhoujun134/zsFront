<template>
  <div>
    <el-button type="primary" icon="el-icon-search" @click="onclickShow">搜索</el-button>

    <el-dialog
        :visible.sync="showDialog"
        title="搜索"
        @close="closeDialog"
        width="30%"
    >
      <el-input
          v-model="searchQuery"
          placeholder="请输入搜索内容"
          @keyup.enter="search"
      ></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button type="primary" @click="search">搜 索</el-button>
      </span>
    </el-dialog>

    <div v-if="searchResults.length > 0" class="search-results">
      <div
          v-for="(result, index) in searchResults"
          :key="index"
          class="search-result"
          @click="goToArticle(result.id)"
      >
        <el-link :href="result.link">{{ result.title }}</el-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const showDialog = ref(false);
const searchQuery = ref('');
const searchResults = ref<Array<{ id: number; title: string; link: string }>>([]);

function onclickShow() {
  showDialog.value = !showDialog.value;
}
const search = () => {
  // 假设你有一个searchArticles的函数用于获取搜索结果
  // 这里仅模拟数据返回
  const mockResults = [
    { id: 1, title: '文章1', link: '/article/1' },
    // ... 其他模拟结果
  ];
  searchResults.value = mockResults.filter(result => result.title.includes(searchQuery.value));
};

const closeDialog = () => {
  showDialog.value = false;
  searchQuery.value = '';
};

const goToArticle = (id: number) => {
  // 这里只是模拟，你可以使用Vue Router进行导航
  console.log(`跳转到文章 ${id}`);
  // 例如：router.push(`/article/${id}`);
};


</script>

<style scoped>
.search-results {
  margin-top: 20px;
}

.search-result {
  margin-bottom: 10px;
}
</style>
