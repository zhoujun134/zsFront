import request from "@/api/service";
import type {IResult} from "@/api/interface/IResult";
import type {IArticleOperateReq, ISearchReq} from "@/api/interface/admin/editor";
import type {IArticle, ICategory, ITag} from "@/api/interface/article/article";

export async function uploadFile(data: object) {
    return await request({
        url: '/api/admin/file/upload',
        method: 'post',
        data: data,
    }).then(resp => {
        return JSON.parse(JSON.stringify(resp)) as IResult<string>;
    }).catch(error => {
        let {message} = error
        console.log("上传出现错误啦！" + message)
        return {
            code: "-1",
            message: message,
            data: ""
        }
    })
}


export async function publishArticle(data: IArticleOperateReq) {
    return await request({
        url: '/api/admin/zs/article/add',
        method: 'post',
        data: data,
    }).then(resp => {
        return JSON.parse(JSON.stringify(resp)) as IResult<IArticle>;
    }).catch(error => {
        let {message} = error
        console.log("获取文章列表出现错误啦！" + message)
        return {
            code: "-1",
            message: message
        }
    })
}
