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
  <el-card class="hidden-xs-only">
    <el-tag
        style="width: 100%"
        v-if="tocList.length > 0"
        effect="dark"
        type="primary">目录
    </el-tag>
    <el-tree
        style="width: 100%;"
        :data="tocList"
        :props="defaultProps"
        @node-click="handleNodeClick"
        default-expand-all
        @highlight-current="true"
        empty-text=''
    />
  </el-card>
</template>

<style scoped>
</style>
