import{d as j,l as p,r as T,a as n,b as v,c as S,e,w as o,f as a,_ as C,t as f,q as $,y as g,J as B,i as U,j as q,k as E,K as F,E as k,D as L,G as Z,H as A}from"./index-DSaWIePJ.js";const _=r=>(L("data-v-64e93812"),r=r(),Z(),r),D={class:"zj-home-container"},J={class:"zj-home-main-container"},G={class:"zj-blog-login-container"},H={class:"zj-blog-login-form-item"},K=_(()=>a("h1",null,"欢迎前辈回家，快登入解锁更多功能吧！",-1)),M=_(()=>a("p",null,"© 2024- zbusTop-Z不殊",-1)),O=_(()=>a("p",null,"京ICP备2023022073号-1",-1)),P=_(()=>a("p",null,"京公网安备11010802044104号",-1)),Q={class:"zj-home-right-container"},R=j({__name:"LoginForm",setup(r){p({tokenName:"",tokenValue:"",tokenTimeout:0,sessionTimeout:0,loginId:""});const i=T({tokenName:"",tokenValue:"",tokenTimeout:0,sessionTimeout:0,loginId:""}),l=p({username:"",password:""});p({username:[{required:!0,message:"请输入用户名",trigger:["change","blur"]},{pattern:/^[a-zA-Z][a-zA-Z0-9-]{3,31}$/,message:"用户名由英文字母开头的长度4-32位字母、_和-组成",trigger:["change","blur"]}],password:{required:!0,message:"请输入至少8个字符的密码",min:8,trigger:["change","blur"]}});function w(){F(l).then(s=>{if(s.code!="0"){const m=s.message?s.message:"登录失败，请联系管理员处理！";k.error({message:m,duration:5*1e3})}const t=s.data;t.tokenValue&&t.tokenName&&(i.value=t),localStorage.getItem("zsUserToken")&&(localStorage.setItem("zsUserToken",JSON.stringify(t)),k.success({message:"欢迎登录当前系统",duration:5*1e3}))}).catch(s=>{console.log("登录遇到异常了！"+s);let{message:t}=s;k.error({message:t,duration:5*1e3})})}return(s,t)=>{const c=n("el-affix"),m=n("el-text"),h=n("el-input"),u=n("el-form-item"),V=n("el-button"),z=n("router-link"),y=n("el-form"),I=n("el-link"),b=n("el-card"),x=n("el-main"),N=n("el-container");return v(),S("div",D,[e(N,null,{default:o(()=>[e(x,{class:"zj-home-body-container"},{default:o(()=>[a("div",J,[e(c,null,{default:o(()=>[e(C)]),_:1}),a("div",G,[e(y,{"label-width":"auto",model:l,style:{"max-width":"600px"}},{default:o(()=>[a("div",H,[e(m,null,{default:o(()=>[K]),_:1})]),e(u,{label:"用户名"},{default:o(()=>[e(h,{modelValue:l.username,"onUpdate:modelValue":t[0]||(t[0]=d=>l.username=d)},null,8,["modelValue"])]),_:1}),e(u,{label:"密码"},{default:o(()=>[e(h,{modelValue:l.password,"onUpdate:modelValue":t[1]||(t[1]=d=>l.password=d),type:"password","show-password":!0},null,8,["modelValue"])]),_:1}),e(u,{label:"       "},{default:o(()=>[e(V,{type:"primary",onClick:w},{default:o(()=>[f("登录")]),_:1}),e(V,{type:"primary"},{default:o(()=>[e(z,{to:"/register",style:{color:"white"}},{default:o(()=>[f("注册")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"]),i.value.loginId?(v(),$(b,{key:0},{default:o(()=>[a("p",null,"loginId: "+g(i.value.loginId),1),a("p",null,"tokenName: "+g(i.value.tokenName),1),a("p",null,"tokenValue: "+g(i.value.tokenValue),1),e(I,{href:"/web"},{default:o(()=>[f("回到首页")]),_:1})]),_:1})):B("",!0)]),e(b,{class:"zj-blog-footer"},{default:o(()=>[M,O,P]),_:1})]),a("div",Q,[e(c,{offset:80},{default:o(()=>[e(U),e(q),e(E)]),_:1})])]),_:1})]),_:1})])}}}),X=A(R,[["__scopeId","data-v-64e93812"]]);export{X as default};
