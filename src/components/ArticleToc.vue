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
    <el-text
        style="width: 100%; font-size: 24px; text-align: center"
        v-if="tocList.length > 0"
        effect="dark"># 目录
    </el-text>
    <el-tree
        style="width: 100%; font-size: 16px; "
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
