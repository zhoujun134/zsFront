<script setup lang="ts">

import '../../assets/css/comment.css'
import HorizontalCommentSubmitFormCard from "@/components/horizontalTheme/card/HorizontalCommentSubmitFormCard.vue";
import {getCommentListByArticleId, submitLikeComment} from "@/api/articleApi";
import {onMounted, ref} from "vue";
import type {ICommentInfo} from "@/api/interface/article/article";
import {ElMessage} from "element-plus";
const props = defineProps({
  articleId: {
    type: String,
    default: String as () => ''
  }
})

const comments = ref<ICommentInfo[]>([] as ICommentInfo[])

function getCommentList() {
  getCommentListByArticleId(props.articleId).then(res => {
    if (res.code === "0" && res.data) {
      comments.value = res.data
    }
  })
}

function changeChildSubmitFormShow(comment: ICommentInfo) {
  comment.isShowSubmit = !comment.isShowSubmit;
}

function changeUpdate() {
  setTimeout(() => {
    getCommentList()
  }, 500)
}

// 页面挂载时，渲染
onMounted(() => {
  getCommentList()
})

function submitLike(commentId: string) {
  submitLikeComment(commentId).then(res => {
    if (res.code === "0") {
      ElMessage.success({
        message: "点赞评论成功",
        type: 'success'
      })
      getCommentList()
    }
  })
}

</script>

<template>

  <horizontal-comment-submit-form-card :article-id="articleId" @callParentMethod="changeUpdate"/>
  <el-card style="margin-top: 2%" v-if="comments.length > 0">
    <el-row>
      <el-col :span="24" style="margin-top: 2%">
        <el-card style="width: 100%" shadow="hover">评论列表</el-card>
      </el-col>
      <el-col
          v-for="(comment, index) in comments"
          :span="24"
          style="margin-top: 2%" >
        <el-card style="width: 100%; border: 0" shadow="hover">
          <div class="zj-home-comment-card-container">
            <div class="zj-home-comment-card-avatar-container">
              <el-link :underline="false" href="/web">
                <el-avatar shape="square" src="https://zbus.top/upload/logo.png"
                           alt="Avatar" class="zj-home-comment-card-avatar-img"/>
              </el-link>
            </div>
            <div class="zj-home-comment-card-info-container">
              <el-link :underline="false" href="/web">
                <p class="zj-home-comment-card-title">{{comment.author}}</p>
              </el-link>
              <p class="description">{{comment.content}}</p>
              <el-button type="primary"
                         @click="changeChildSubmitFormShow(comment)">回复</el-button>
              <el-button type="warning" @click="submitLike(comment.commentId)">点赞({{comment.likeNum}})</el-button>
              <el-button type="success" disabled v-if="comment.createTime">{{comment.createTime}}</el-button>
              <horizontal-comment-submit-form-card
                  :is-show-heading="false"
                  v-if="comment.isShowSubmit"
                  :article-id="articleId"
                  :parent-comment-id="comment.commentId"
                  :reply-comment-id="comment.commentId"
                  @callParentMethod="changeUpdate"
              />
              <el-row style="margin-top: 2%" v-if="comment.children">
                <el-col :span="24" v-for="(child, index) in comment.children">
                  <el-card style="width: 100%; border: 0" shadow="hover">
                    <div class="zj-home-comment-card-container">
                      <div class="zj-home-comment-card-avatar-container">
                        <el-link :underline="false" href="/web">
                          <el-avatar shape="square" src="https://zbus.top/upload/logo.png"
                                     alt="Avatar" class="zj-home-comment-card-avatar-img"/>
                        </el-link>
                      </div>
                      <div class="zj-home-comment-card-info-container">
                        <el-link :underline="false" href="/web">
                          <p class="zj-home-comment-card-title">{{child.author}}</p>
                        </el-link>
                        <p class="description">{{child.content}}</p>
                        <el-button type="primary"
                                   @click="changeChildSubmitFormShow(child)">回复</el-button>
                        <el-button type="warning" @click="submitLike(child.commentId)">点赞({{child.likeNum}})</el-button>
                        <el-button type="success" disabled v-if="child.createTime">{{child.createTime}}</el-button>
                        <horizontal-comment-submit-form-card
                            v-if="child.isShowSubmit"
                            :is-show-heading="false"
                            :article-id="articleId"
                            :parent-comment-id="child.commentId"
                            :reply-comment-id="comment.commentId"
                            @callParentMethod="changeUpdate"
                        />
                      </div>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </div>
          </div>

        </el-card>
      </el-col>
    </el-row>
  </el-card>
</template>

<style scoped>

</style>
