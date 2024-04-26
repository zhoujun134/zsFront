<script setup lang="ts">
import {handleNodeClick, type TocItem} from "@/api/views/tocify";


const defaultProps = {
  children: 'children',
  label: 'text',
}

defineProps<{
  tocList: TocItem[]
}>()

</script>

<template>
  <div class="zj-blog-toc-list-container hidden-xs-only">
    <el-card>
      <el-tag v-if="tocList.length > 0" effect="dark" type="info">目录</el-tag>
      <el-tree
          style="max-width: 600px"
          :data="tocList"
          :props="defaultProps"
          @node-click="handleNodeClick"
          default-expand-all
          @highlight-current="true"
          empty-text=''
      />
    </el-card>
  </div>
</template>

<style scoped>
</style>
