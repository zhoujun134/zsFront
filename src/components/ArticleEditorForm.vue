<script setup lang="ts">

import {onMounted, reactive, ref} from "vue";
import type {ICategory, ITag} from "@/api/interface/article/article";

import '../assets/css/admin/editor.css'
import {Plus} from '@element-plus/icons-vue'

import {ElMessage, type UploadFile, type UploadFiles, type UploadProps, type UploadUserFile} from 'element-plus'
import type {IResult} from "@/api/interface/IResult";
import type {IArticleOperateReq, ISearchReq} from "@/api/interface/admin/editor";
import {addArticleCategory, addArticleTag, publishArticle} from "@/api/editorApi";
import {getCategoryList, getTagList} from "@/api/articleApi";

const articleInfo = reactive<IArticleOperateReq>({
  title: "",
  articleAbstract: "",
  content: ""
} as IArticleOperateReq)

function saveArticleData() {
  publishArticle(articleInfo).then(res => {
    if (res.code == "0") {
      ElMessage.success({
        message: "发布文章成功！",
        duration: 5 * 1000
      })
    }
  })
}

const rules = reactive({
  content: [
    {required: true, message: '请输入内容', trigger: 'blur'}
  ],
  title: [
    {required: true, message: '请输入标题', trigger: 'blur'}
  ],
  articleAbstract: [
    {required: false, message: '请输入文章摘要', trigger: 'blur'}
  ]
})

const fileList = ref<UploadUserFile[]>([
  {
    name: 'init.jpeg',
    url: 'https://img.zbus.top/zbus/blog202403150008819.webp',
  }
])

const dialogImageUrl = ref('')
const dialogVisible = ref(false)

const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles)
}

const handlePictureCardPreview: UploadProps['onPreview'] = (uploadFile) => {
  dialogImageUrl.value = uploadFile.url!
  dialogVisible.value = true
}

function onSuccessDealUpload(response: any, uploadFile: UploadFile, uploadFiles: UploadFiles): void {
  if (response) {
    const result = response as IResult<string>
    if (result && result.code == "0" && result.data) {
      articleInfo.headerImageUrl = result.data
    }
  }
}

// 分类

const categoryList = ref([] as ICategory[])
const tagList = ref([] as ITag[])

function searchCategory(searchKey: string) {
  const searchReq: ISearchReq = {
    searchKey: searchKey
  } as ISearchReq;
  getCategoryList(searchReq).then(res => {
    if (res && res.data && res.data.length > 0) {
      categoryList.value = res.data
    }
  }).catch(error => {
    console.log("获取文章分类列表出错啦！" + error)
  })
}

function searchTag(searchKey: string) {
  const searchReq: ISearchReq = {
    searchKey: searchKey
  } as ISearchReq;
  getTagList(searchReq).then(res => {
    if (res && res.data && res.data.length > 0) {
      tagList.value = res.data
    }
  }).catch(error => {
    console.log("获取文章标签列表出错啦！" + error)
  })
}

const toolbars = {
  bold: true, // 粗体
  italic: true, // 斜体
  header: true, // 标题
  underline: false, // 下划线
  strikethrough: false, // 中划线
  mark: false, // 标记
  superscript: false, // 上角标
  subscript: false, // 下角标
  quote: false, // 引用
  ol: true, // 有序列表
  ul: true, // 无序列表
  link: true, // 链接
  imagelink: true, // 图片链接
  code: true, // code
  table: true, // 表格
  fullscreen: true, // 全屏编辑
  readmodel: true, // 沉浸式阅读
  htmlcode: true, // 展示html源码
  help: false, // 帮助
  /* 1.3.5 */
  undo: true, // 上一步
  redo: true, // 下一步
  trash: true, // 清空
  save: true, // 保存（触发events中的save事件）
  /* 1.4.2 */
  navigation: false, // 导航目录
  /* 2.1.8 */
  alignleft: true, // 左对齐
  aligncenter: true, // 居中
  alignright: true, // 右对齐
  /* 2.2.1 */
  subfield: true, // 单双栏模式
  preview: true, // 预览
}

const goBack = () => {
  window.location.href = '/web';
}

onMounted(async () => {
  // 初始化分类信息
  searchCategory("")
  // 初始化标签雷彪
  searchTag("")
})

function addCategory(value: any): void {
  console.log("add Category: ", value)
  let categoryNames: string[] = value as string[]
  if (categoryNames.length == 0) {
    return;
  }

  let needAddCategoryList: ICategory[] = []
  const existCategoryMap = new Map(categoryList.value.map(item => [item.categoryId, item.name]));
  for (let i = 0; i < categoryNames.length; i++) {
    if (existCategoryMap.has(categoryNames[i])) {
      continue
    }
    needAddCategoryList.push({
      name: categoryNames[i]
    } as ICategory);
  }
  addArticleCategory(needAddCategoryList).then(res => {
    if (res.code == "0") {
      ElMessage.success({
        message: "添加分类成功！",
        duration: 5 * 1000
      })
    }
  }).catch(error => {
    let {message} = error
    ElMessage.error({
      message: "系统开小差了！请稍后重试！" + message,
      duration: 5 * 1000
    })
  })
}


function addTag(value: any): void {
  console.log("add Tag: ", value)
  let tagNames: string[] = value as string[]
  if (tagNames.length == 0) {
    return;
  }
  tagNames = [tagNames[tagNames.length - 1]]
  const existTagMap = new Map(tagList.value.map(item => [item.tagId, item.tagName]));
  let needAddTagList: ITag[] = []
  for (let i = 0; i < tagNames.length; i++) {
    if (existTagMap.has(tagNames[i])) {
      continue
    }
    needAddTagList.push({
      tagName: tagNames[i]
    } as ITag);
  }
  addArticleTag(needAddTagList).then(res => {
    if (res.code == "0") {
      ElMessage.success({
        message: "添加文章标签成功！",
        duration: 5 * 1000
      })
    }
  }).catch(error => {
    let {message} = error
    ElMessage.error({
      message: "系统开小差了！请稍后重试！" + message,
      duration: 5 * 1000
    })
  })
}
</script>

<template>
  <div class="zj-editor-container">
    <el-form
        :model="articleInfo"
        :rules="rules"
        label-position="right"
        label-width="auto"
        class="zj-el-form">
      <div class="zj-el-form-item">
        <el-form-item label="文章标题" prop="title">
          <el-input type="text" v-model="articleInfo.title"/>
        </el-form-item>
      </div>
      <div class="zj-el-form-item">
        <el-form-item label="封面图片" prop="title">
          <el-upload
              v-model:file-list="fileList"
              action="/api/admin/file/upload"
              list-type="picture-card"
              :limit="1"
              :with-credentials='true'
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
              :on-success="onSuccessDealUpload"
          >
            <el-icon>
              <Plus/>
            </el-icon>
          </el-upload>

          <el-dialog v-model="dialogVisible" width="80%">
            <div class="zj-image-container">
              <img w-full :src="dialogImageUrl" alt="Preview Image"/>
            </div>
          </el-dialog>
        </el-form-item>
      </div>
      <div class="zj-el-form-item">
        <el-form-item label="文章摘要" prop="articleAbstract">
          <el-input type="textarea" v-model="articleInfo.articleAbstract"/>
        </el-form-item>
      </div>
      <div class="zj-el-form-item">
        <el-form-item label="文章内容" prop="content">
          <mavon-editor class="zj-mavon-editor"
                        v-model="articleInfo.content"
                        :toolbars="toolbars"
                        :ishljs="true"
                        :subfield="true"
                        defaultOpen="'edit'"
          >

          </mavon-editor>
        </el-form-item>
      </div>

      <div class="zj-el-form-item">
        <el-form-item label="文章分类" prop="articleAbstract">
          <el-select
              v-model="articleInfo.categoryIdList"
              multiple
              filterable
              allow-create
              :reserve-keyword="false"
              :remote='true'
              :remote-method="searchCategory"
              @change="addCategory"
              placeholder="请选择文章分类，回车可新建"
              style="width: 60%"
          >
            <el-option
                v-for="item in categoryList"
                :key="item.categoryId"
                :label="item.name"
                :value="item.categoryId"
            />

          </el-select>
        </el-form-item>
      </div>
      <div class="zj-el-form-item">
        <el-form-item label="文章标签" prop="articleAbstract">
          <el-select
              v-model="articleInfo.tagIdList"
              multiple
              filterable
              allow-create
              :reserve-keyword="false"
              :remote='true'
              @change="addTag"
              :remote-method="searchTag"
              placeholder="请选择文章标签，回车可新建"
              style="width: 60%"
          >
            <el-option
                v-for="item in tagList"
                :key="item.tagId"
                :label="item.tagName"
                :value="item.tagId"
            />
          </el-select>
        </el-form-item>
      </div>
      <div class="zj-el-form-item-submit">
        <div class="zj-el-form-item-submit-button">
          <el-form-item label="  ">
            <el-button type="primary" @click="saveArticleData()">发布</el-button>
            <el-button type="primary" @click="goBack">返回首页</el-button>
          </el-form-item>
        </div>
      </div>
    </el-form>
  </div>
</template>

<style scoped>

</style>
