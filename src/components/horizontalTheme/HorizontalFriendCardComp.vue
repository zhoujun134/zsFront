<script setup lang="ts">

import type {IFriendInfo} from "@/api/interface/home";

defineProps({
  friendInfo: {
    type: Object as () => IFriendInfo,
    default: Object as () => {
      title: "Z 不殊",
      siteUrl: "https://zbus.top/",
      logoUrl: "https://zbus.top/upload/logo.png",
      description: "快乐，简单，程序改变世界"
    }
  }
})

</script>

<template>

  <el-card class="zj-home-friends-card">
    <div class="zj-home-friends-card-content">
      <div class="zj-home-friends-card-avatar-container">
        <el-link :underline="false" href="/web">
          <el-avatar :src="friendInfo.logoUrl" alt="Avatar" class="zj-home-friends-card-avatar-img"/>
        </el-link>
      </div>
      <div class="zj-home-friends-card-info-container">
        <el-link :underline="false" :href="friendInfo.siteUrl">
          <h3 class="zj-home-friends-card-title">{{friendInfo.title}}</h3>
        </el-link>
        <p class="description">{{ friendInfo.description }}</p>
      </div>
    </div>
  </el-card>
</template>

<style scoped>

</style>
