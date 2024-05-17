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
  <el-card class="hidden-xs-only" style="width: 150%">
    <template #header style="padding: 0">
      <span style="font-size: 24px; text-align: left"
         v-if="tocList.length > 0"
      >
        # 目录
      </span>
    </template>

    <el-scrollbar style="height: 50vh">
      <el-tree
          style="width: 100%; font-size: 16px; "
          :data="tocList"
          :props="defaultProps"
          @node-click="handleNodeClick"
          default-expand-all
          @highlight-current="true"
          empty-text=''
      />
    </el-scrollbar>
  </el-card>
</template>

<style scoped>
</style>
