<script setup lang="ts">

import '../../assets/css/friends.css'
import HorizontalFriendCardComp from "@/components/horizontalTheme/HorizontalFriendCardComp.vue";
import HorizontalHeaderComp from "@/components/horizontalTheme/HorizontalHeaderComp.vue";
import HorizontalTagCardComp from "@/components/horizontalTheme/HorizontalTagCardComp.vue";
import HorizontalCategoryCardComp from "@/components/horizontalTheme/HorizontalCategoryCardComp.vue";
import SearchCard from "@/components/SearchCard.vue";
import {ref} from "vue";
import type {IFriendInfo} from "@/api/interface/home";
import {homeFriends} from "@/api/homeApi";
import HorizontalArticleListComp from "@/components/horizontalTheme/HorizontalArticleListComp.vue";
import HorizontalCommentComp from "@/components/horizontalTheme/HorizontalCommentComp.vue";
import ArticleDetail from "@/components/ArticleDetail.vue";

const friendsGroup = ref<Map<string, IFriendInfo[]>>()

homeFriends().then(res => {
  friendsGroup.value = res.data as Map<string, IFriendInfo[]>
})

import {useHead} from "@unhead/vue";

useHead({
  title: '友链 | Z 不殊',
  meta: [
    {
      name: 'Z 不殊友链',
      content: 'Z 不殊, 欢迎友链',
    },
    {
      name: 'Z 不殊',
      content: 'Z 不殊, zhoujun134',
    },
    {
      name: 'zhoujun134',
      content: 'zhoujun134, Z 不殊',
    },
    {
      name: '手写博客',
      content: '手写博客, vue3 ts java',
    },
  ],
})

function deal(friendInfo: string | IFriendInfo[]) {
  return friendInfo as IFriendInfo
}

</script>

<template>
  <div class="zj-home-container">
    <el-container>
      <el-main class="zj-home-body-container">
        <div class="zj-home-main-container">
          <el-affix>
            <horizontal-header-comp active-index="4"/>
          </el-affix>
          <el-card v-for="(friendList, key) in friendsGroup" :key="key"
                   class="zj-home-friends-card-group"
          >
            <template #header>{{ key }}</template>
            <div class="zj-home-friends-container">
              <horizontal-friend-card-comp
                  v-for="(friendInfo, key2) in friendList"
                  :friend-info="deal(friendInfo)"/>
            </div>
          </el-card>
          <horizontal-comment-comp article-id="friends-page"/>

          <el-card class="zj-blog-footer">
            <p>© 2024- zbusTop-Z不殊</p>
            <p>京ICP备2023022073号-1</p>
            <p>京公网安备11010802044104号</p>
          </el-card>
        </div>
        <div class="zj-home-right-container">
          <el-affix :offset="80">
            <horizontal-tag-card-comp/>
            <horizontal-category-card-comp/>
          </el-affix>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>

</style>
