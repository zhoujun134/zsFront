<script setup lang="ts">

import ArticleEditor from "@/components/ArticleEditorForm.vue";
</script>

<template>
  <div class="zj-container">
    <div class="zj-body-container zj-editor-container-view">
      <el-main>
        <article-editor />
      </el-main>
    </div>
  </div>
</template>

<style scoped>
.zj-editor-container-view {
  width: 80%;
}
</style>
