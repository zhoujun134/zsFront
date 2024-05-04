<script setup lang="ts">

import '../../assets/css/comment.css'
import HorizontalCommentSubmitFormCard from "@/components/horizontalTheme/card/HorizontalCommentSubmitFormCard.vue";
import {getCommentListByArticleId, submitLikeComment} from "@/api/articleApi";
import {onMounted, ref} from "vue";
import type {ICommentInfo} from "@/api/interface/article/article";
import {ElMessage} from "element-plus";
import {ChatDotSquare, Pointer, Star, Timer, UserFilled} from "@element-plus/icons-vue";

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

function dealComment(comment: string) {
  return comment.replace(/\n/g, '<br>');
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
          style="margin-top: 1%">
        <el-text style="width: 100%; border: 0" shadow="hover">
          <div class="zj-home-comment-card-container">
            <div class="zj-home-comment-card-info-container">
                <el-text class="zj-home-comment-card-title">
                  <el-icon class="zj-home-comment-card-title-el-icon"><UserFilled/></el-icon>
                  {{ comment.author }}
                </el-text>
              <div v-html="dealComment(comment.content)">
              </div>
              <div style="margin-top: 5px">
                <el-text type="primary"
                         @click="changeChildSubmitFormShow(comment)">
                  <el-icon>
                    <ChatDotSquare/>
                  </el-icon>
                  回复
                </el-text>
                <el-text style="margin-left: 10px" type="warning" @click="submitLike(comment.commentId)">
                  <el-icon>
                    <Star/>
                  </el-icon>
                  ({{ comment.likeNum }})
                </el-text>
                <el-text style="margin-left: 10px" disabled v-if="comment.createTime">
                  <el-icon>
                    <Timer/>
                  </el-icon>
                  {{ comment.createTime }}
                </el-text>
              </div>

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
                  <el-text style="width: 100%; border: 0" shadow="hover">
                    <div class="zj-home-comment-card-container">
                      <div class="zj-home-comment-card-info-container">
                        <el-text class="zj-home-comment-card-title">
                          <el-icon class="zj-home-comment-card-title-el-icon"><UserFilled/></el-icon>
                          {{ child.author }}
                        </el-text>

                        <div v-html="dealComment(child.content)">
                        </div>
                        <div style="margin-top: 5px">
                          <el-text type="primary"
                                   @click="changeChildSubmitFormShow(comment)">
                            <el-icon>
                              <ChatDotSquare/>
                            </el-icon>
                            回复
                          </el-text>
                          <el-text style="margin-left: 10px" type="warning" @click="submitLike(child.commentId)">
                            <el-icon>
                              <Star/>
                            </el-icon>
                            ({{ child.likeNum }})
                          </el-text>
                          <el-text style="margin-left: 10px" disabled v-if="child.createTime">
                            <el-icon>
                              <Timer/>
                            </el-icon>
                            {{ child.createTime }}
                          </el-text>
                        </div>

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
                  </el-text>
                </el-col>
              </el-row>
            </div>
          </div>

        </el-text>
      </el-col>
    </el-row>
  </el-card>
</template>

<style scoped>

</style>
