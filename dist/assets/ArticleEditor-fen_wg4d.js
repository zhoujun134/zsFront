import{s as w,d as $,l as N,r as p,o as G,a as u,b as f,c as y,e as r,w as i,f as c,m as H,p as K,F as L,n as U,q,t as x,E as _,v as Q,x as W}from"./index-DSaWIePJ.js";async function X(m){return await w({url:"/api/admin/zs/article/add",method:"post",data:m}).then(t=>JSON.parse(JSON.stringify(t))).catch(t=>{let{message:d}=t;return console.log("获取文章列表出现错误啦！"+d),{code:"-1",message:d}})}async function Y(m){return await w({url:"/api/admin/zs/article/category/add",method:"post",data:m}).then(t=>JSON.parse(JSON.stringify(t))).catch(t=>{let{message:d}=t;return console.log("添加文章分类！"+d),{code:"-1",message:d}})}async function Z(m){return await w({url:"/api/admin/zs/article/tag/add",method:"post",data:m}).then(t=>JSON.parse(JSON.stringify(t))).catch(t=>{let{message:d}=t;return console.log("添加文章标签！"+d),{code:"-1",message:d}})}const ee={class:"zj-editor-container"},te={class:"zj-el-form-item"},ae={class:"zj-el-form-item"},le={class:"zj-image-container"},oe=["src"],se={class:"zj-el-form-item"},re={class:"zj-el-form-item"},ne={class:"zj-el-form-item"},ie={class:"zj-el-form-item"},de={class:"zj-el-form-item-submit"},ue={class:"zj-el-form-item-submit-button"},me=$({__name:"ArticleEditor",setup(m){const t=N({title:"",articleAbstract:"",content:""});function d(){X(t).then(s=>{s.code=="0"&&_.success({message:"发布文章成功！",duration:5*1e3})})}const T=N({content:[{required:!0,message:"请输入内容",trigger:"blur"}],title:[{required:!0,message:"请输入标题",trigger:"blur"}],articleAbstract:[{required:!1,message:"请输入文章摘要",trigger:"blur"}]}),V=p([{name:"init.jpeg",url:"https://img.zbus.top/zbus/blog202403150008819.webp"}]),z=p(""),h=p(!1),O=(s,e)=>{console.log(s,e)},S=s=>{z.value=s.url,h.value=!0};function J(s,e,l){if(s){const n=s;n&&n.code=="0"&&n.data&&(t.headerImageUrl=n.data)}}const b=p([]),v=p([]);function C(s){Q({searchKey:s}).then(l=>{l&&l.data&&l.data.length>0&&(b.value=l.data)}).catch(l=>{console.log("获取文章分类列表出错啦！"+l)})}function j(s){W({searchKey:s}).then(l=>{l&&l.data&&l.data.length>0&&(v.value=l.data)}).catch(l=>{console.log("获取文章标签列表出错啦！"+l)})}const M={bold:!0,italic:!0,header:!0,underline:!1,strikethrough:!1,mark:!1,superscript:!1,subscript:!1,quote:!1,ol:!0,ul:!0,link:!0,imagelink:!0,code:!0,table:!0,fullscreen:!0,readmodel:!0,htmlcode:!0,help:!1,undo:!0,redo:!0,trash:!0,save:!0,navigation:!1,alignleft:!0,aligncenter:!0,alignright:!0,subfield:!0,preview:!0},B=()=>{window.location.href="/web"};G(async()=>{C(""),j("")});function R(s){console.log("add Category: ",s);let e=s;if(e.length==0)return;let l=[];const n=new Map(b.value.map(a=>[a.categoryId,a.name]));for(let a=0;a<e.length;a++)n.has(e[a])||l.push({name:e[a]});Y(l).then(a=>{a.code=="0"&&_.success({message:"添加分类成功！",duration:5*1e3})}).catch(a=>{let{message:g}=a;_.error({message:"系统开小差了！请稍后重试！"+g,duration:5*1e3})})}function E(s){console.log("add Tag: ",s);let e=s;if(e.length==0)return;e=[e[e.length-1]];const l=new Map(v.value.map(a=>[a.tagId,a.tagName]));let n=[];for(let a=0;a<e.length;a++)l.has(e[a])||n.push({tagName:e[a]});Z(n).then(a=>{a.code=="0"&&_.success({message:"添加文章标签成功！",duration:5*1e3})}).catch(a=>{let{message:g}=a;_.error({message:"系统开小差了！请稍后重试！"+g,duration:5*1e3})})}return(s,e)=>{const l=u("el-input"),n=u("el-form-item"),a=u("el-icon"),g=u("el-upload"),F=u("el-dialog"),P=u("mavon-editor"),k=u("el-option"),A=u("el-select"),I=u("el-button"),D=u("el-form");return f(),y("div",ee,[r(D,{model:t,rules:T,"label-position":"right","label-width":"auto",class:"zj-el-form"},{default:i(()=>[c("div",te,[r(n,{label:"文章标题",prop:"title"},{default:i(()=>[r(l,{type:"text",modelValue:t.title,"onUpdate:modelValue":e[0]||(e[0]=o=>t.title=o)},null,8,["modelValue"])]),_:1})]),c("div",ae,[r(n,{label:"封面图片",prop:"title"},{default:i(()=>[r(g,{"file-list":V.value,"onUpdate:fileList":e[1]||(e[1]=o=>V.value=o),action:"/api/admin/file/upload","list-type":"picture-card",limit:1,"with-credentials":!0,"on-preview":S,"on-remove":O,"on-success":J},{default:i(()=>[r(a,null,{default:i(()=>[r(H(K))]),_:1})]),_:1},8,["file-list"]),r(F,{modelValue:h.value,"onUpdate:modelValue":e[2]||(e[2]=o=>h.value=o),width:"80%"},{default:i(()=>[c("div",le,[c("img",{"w-full":"",src:z.value,alt:"Preview Image"},null,8,oe)])]),_:1},8,["modelValue"])]),_:1})]),c("div",se,[r(n,{label:"文章摘要",prop:"articleAbstract"},{default:i(()=>[r(l,{type:"textarea",modelValue:t.articleAbstract,"onUpdate:modelValue":e[3]||(e[3]=o=>t.articleAbstract=o)},null,8,["modelValue"])]),_:1})]),c("div",re,[r(n,{label:"文章内容",prop:"content"},{default:i(()=>[r(P,{class:"zj-mavon-editor",modelValue:t.content,"onUpdate:modelValue":e[4]||(e[4]=o=>t.content=o),toolbars:M,ishljs:!0,subfield:!0,defaultOpen:"'edit'"},null,8,["modelValue"])]),_:1})]),c("div",ne,[r(n,{label:"文章分类",prop:"articleAbstract"},{default:i(()=>[r(A,{modelValue:t.categoryIdList,"onUpdate:modelValue":e[5]||(e[5]=o=>t.categoryIdList=o),multiple:"",filterable:"","allow-create":"","reserve-keyword":!1,remote:!0,"remote-method":C,onChange:R,placeholder:"请选择文章分类，回车可新建",style:{width:"60%"}},{default:i(()=>[(f(!0),y(L,null,U(b.value,o=>(f(),q(k,{key:o.categoryId,label:o.name,value:o.categoryId},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),c("div",ie,[r(n,{label:"文章标签",prop:"articleAbstract"},{default:i(()=>[r(A,{modelValue:t.tagIdList,"onUpdate:modelValue":e[6]||(e[6]=o=>t.tagIdList=o),multiple:"",filterable:"","allow-create":"","reserve-keyword":!1,remote:!0,onChange:E,"remote-method":j,placeholder:"请选择文章标签，回车可新建",style:{width:"60%"}},{default:i(()=>[(f(!0),y(L,null,U(v.value,o=>(f(),q(k,{key:o.tagId,label:o.tagName,value:o.tagId},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),c("div",de,[c("div",ue,[r(n,{label:"  "},{default:i(()=>[r(I,{type:"primary",onClick:e[7]||(e[7]=o=>d())},{default:i(()=>[x("发布")]),_:1}),r(I,{type:"primary",onClick:B},{default:i(()=>[x("返回首页")]),_:1})]),_:1})])])]),_:1},8,["model","rules"])])}}});export{me as default};
