import{d as p,a as t,b as c,k as v,w as o,c as r,l as u,e,m as b,r as k,o as y,f as a,_ as x,A as z,n as C,h as j}from"./index-Bl3UOadG.js";import{h as w,g as N}from"./tocify-CR_qm4l0.js";const $={key:0,style:{"font-size":"24px","text-align":"left"}},L=p({__name:"ArticleToc",props:{tocList:{}},setup(m){const n={children:"children",label:"text"};return(l,h)=>{const s=t("el-tree"),i=t("el-scrollbar"),_=t("el-card");return c(),v(_,{class:"hidden-xs-only",style:{width:"150%"}},{header:o(()=>[l.tocList.length>0?(c(),r("span",$," # 目录 ")):u("",!0)]),default:o(()=>[e(i,{style:{height:"50vh"}},{default:o(()=>[e(s,{style:{width:"100%","font-size":"16px"},data:l.tocList,props:n,onNodeClick:b(w),"default-expand-all":"",onHighlightCurrent:d=>!0,"empty-text":""},null,8,["data","onNodeClick"])]),_:1})]),_:1})}}}),B={class:"zj-home-container"},I={class:"zj-home-main-container"},T=a("p",null,"© 2024- zbusTop-Z不殊",-1),V=a("p",null,"京ICP备2023022073号-1",-1),A=a("p",null,"京公网安备11010802044104号",-1),D={class:"zj-home-right-container"},H={key:0,class:"zj-home-blog-toc-list-container"},M=p({__name:"HorizontalDetailView",props:{articleId:{}},setup(m){const n=k([]);return y(async()=>{setTimeout(()=>{n.value=N(),console.log(n.value.length)},500)}),(l,h)=>{const s=t("el-affix"),i=t("el-card"),_=t("el-aside"),d=t("el-backtop"),f=t("el-main"),g=t("el-container");return c(),r("div",B,[e(g,null,{default:o(()=>[e(f,{class:"zj-home-body-container"},{default:o(()=>[a("div",I,[e(s,null,{default:o(()=>[e(x,{"active-index":"2"})]),_:1}),e(z,{"article-id":l.articleId},null,8,["article-id"]),e(C,{"article-id":l.articleId},null,8,["article-id"]),e(i,{class:"zj-blog-footer"},{default:o(()=>[T,V,A]),_:1})]),a("div",D,[e(s,{offset:80},{default:o(()=>[e(j),n.value.length>0?(c(),r("div",H,[e(_,{style:{width:"100%"}},{default:o(()=>[e(L,{"toc-list":n.value},null,8,["toc-list"])]),_:1})])):u("",!0)]),_:1}),e(d,{right:100,bottom:100})])]),_:1})]),_:1})])}}});export{M as default};
