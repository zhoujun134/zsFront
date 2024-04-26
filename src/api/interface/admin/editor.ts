export interface ISearchReq {
    searchKey: string
}

export interface IArticleOperateReq {
    articleId: string,
    title: string,
    articleAbstract: string
    content: string,
    createTime?: string
    headerImageUrl?: string
    tagIdList?: string[]
    categoryIdList?: string[]
}

