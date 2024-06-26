<script setup lang="ts">

import '../../../assets/css/comment.css'
import {reactive, ref} from "vue";
import {ElMessage, type FormInstance, type FormRules} from "element-plus";
import type {ICommentInfo, ICommentSubmitRequest} from "@/api/interface/article/article";
import {submitComment} from "@/api/articleApi";

const props = defineProps({
  articleId: {
    type: String,
    default: ''
  },
  parentCommentId: {
    type: String,
    default: ''
  },
  replyCommentId: {
    type: String,
    default: ''
  },
  isShowHeading: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits([
    'callParentMethod'
])


const request = ref<ICommentSubmitRequest>({
  articleId: props.articleId,
  parentCommentId: props.parentCommentId,
  replyCommentId: props.replyCommentId,
  author: '',
  email: '',
  content: ''
})

const commentFormRef = ref<FormInstance>()
const commentRules = reactive<FormRules<ICommentSubmitRequest>>({
  email: [
    {
      required: true,
      message: "请输入邮箱名称",
      trigger: ["blur"]
    },
    {
      pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
      message: "请输入正确的邮箱地址",
      trigger: ["blur"],
    }
  ],
  author: {
    required: true,
    message: "请输入至少3个字符的昵称",
    min: 3,
    trigger: ["blur"]
  },
  content: {
    required: true,
    message: "请输入至少5个字符的评论内容",
    min: 5,
    trigger: ["blur"]
  }
})

function addComment() {
  submitComment(request.value).then(res => {
    if (res.code === "0") {
      ElMessage.success({
        message: "提交评论成功！请等待审核！",
        duration: 5 * 1000
      })
    } else {
      ElMessage.error({
        message: "提交评论失败，失败原因: " + res.message,
        duration: 5 * 1000
      })
    }
  })
  emit('callParentMethod')
}

const submitCommentForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) {
    // 如果 formEl 是 undefined，直接返回 false
    return false;
  }

  try {
    // 验证表单，这里假设 validate 方法返回 Promise<boolean>
    const valid = await formEl.validate(); // 注意这里我们直接 await 验证结果，而不是传递回调函数
    if (valid) {
      // 如果验证成功，添加评论并返回 true
      addComment();
      return true;
    } else {
      // 如果验证失败，返回 false
      return false;
    }
  } catch (error) {
    // 处理验证过程中可能发生的错误
    console.error('表单验证过程中发生错误:', error);
    return false;
  }
}
</script>

<template>
  <el-card style="margin-top: 5%">
    <template v-if="isShowHeading" #header>
      发表评论
    </template>
    <el-form
        label-width="auto"
        :model="request"
        :rules="commentRules"
        ref="commentFormRef"
    >
      <el-row>
        <el-col :span="24">
          <el-form-item label="  " prop="author">
            <el-input v-model.author="request.author" placeholder="请输入昵称"/>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="  " prop="email">
            <el-input v-model.email="request.email" placeholder="请输入邮箱"/>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="  " prop="content">
            <el-input v-model.content="request.content"
                      type="textarea"
                      rows="5"
                      placeholder="请输入评论内容"/>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="       ">
            <el-button type="primary" @click="submitCommentForm(commentFormRef)">提交</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </el-card>
</template>

<style scoped>

</style>
