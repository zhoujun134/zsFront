export interface IArticle {
    articleId: string,
    title: string,
    articleAbstract: string
    content: string,
    createTime?: string
    headerImageUrl?: string
    tagList?: ITag[]
    categoryList?: ICategory[]
}

export interface ICategory {
    categoryId: string,
    name: string
}

export interface ITag {
    tagId: string,
    tagName: string
}

export interface ArticleListReq {
    pageNumber: number,
    pageSize: number,
    categoryId?: string,
    tagId?: string,
    keyword?: string,
}

export interface ArticleDetailReq {
    articleId: string
}

export interface ICommentInfo {
    commentId: string,
    author: string,
    content: string,
    createTime: string,
    likeNum?: number,
    children: ICommentInfo[],
    isShowSubmit?: boolean
}

export interface ICommentSubmitRequest {
    articleId?: string,
    parentCommentId?: string,
    replyCommentId?: string,
    author: string,
    email: string,
    content: string;
}

export interface ICommentLikeSubmitRequest {
    commentId: string
}
