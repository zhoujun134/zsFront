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
                  :friend-info="friendInfo"/>
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
            <search-card></search-card>
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
