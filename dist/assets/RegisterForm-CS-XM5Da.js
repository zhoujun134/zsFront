import{d as z,r as w,a as n,b as x,c as y,e,w as o,f as l,_ as k,t as f,i as C,j as I,k as N,L as S,D as U,G as $,H as F}from"./index-CHPERFiM.js";const _=d=>(U("data-v-cba7a3e8"),d=d(),$(),d),R={class:"zj-home-container"},B={class:"zj-home-main-container"},J={class:"zj-blog-register-container"},O={class:"zj-blog-register-form-item"},T=_(()=>l("h1",null,"欢迎前辈回家，快来注册吧！",-1)),D={class:"zj-blog-register-form-item"},E={class:"zj-blog-register-form-item"},G={class:"zj-blog-register-form-item"},H={class:"zj-blog-register-form-item"},L={class:"zj-blog-register-form-item"},P={class:"zj-blog-register-form-item"},Z=_(()=>l("p",null,"© 2024- zbusTop-Z不殊",-1)),q=_(()=>l("p",null,"京ICP备2023022073号-1",-1)),A=_(()=>l("p",null,"京公网安备11010802044104号",-1)),K={class:"zj-home-right-container"},M=z({__name:"RegisterForm",setup(d){const t=w({name:"",username:"",password:"",email:"",description:""});function p(){console.log("registerForm before: = "+JSON.stringify(t.value));const m=S(t.value);console.log("handleRegister 注册结果为: "+JSON.stringify(m))}return(m,s)=>{const u=n("el-affix"),g=n("el-text"),r=n("el-input"),i=n("el-form-item"),c=n("el-button"),v=n("router-link"),b=n("el-form"),V=n("el-card"),h=n("el-main"),j=n("el-container");return x(),y("div",R,[e(j,null,{default:o(()=>[e(h,{class:"zj-home-body-container"},{default:o(()=>[l("div",B,[e(u,null,{default:o(()=>[e(k)]),_:1}),l("div",J,[e(b,{model:t.value,"label-width":"auto",class:"zj-el-form"},{default:o(()=>[l("div",O,[e(g,null,{default:o(()=>[T]),_:1})]),l("div",D,[e(i,{label:"用户名称"},{default:o(()=>[e(r,{modelValue:t.value.name,"onUpdate:modelValue":s[0]||(s[0]=a=>t.value.name=a)},null,8,["modelValue"])]),_:1})]),l("div",E,[e(i,{label:"用户名"},{default:o(()=>[e(r,{modelValue:t.value.username,"onUpdate:modelValue":s[1]||(s[1]=a=>t.value.username=a)},null,8,["modelValue"])]),_:1})]),l("div",G,[e(i,{label:"邮箱"},{default:o(()=>[e(r,{modelValue:t.value.email,"onUpdate:modelValue":s[2]||(s[2]=a=>t.value.email=a)},null,8,["modelValue"])]),_:1})]),l("div",H,[e(i,{label:"描述"},{default:o(()=>[e(r,{modelValue:t.value.description,"onUpdate:modelValue":s[3]||(s[3]=a=>t.value.description=a)},null,8,["modelValue"])]),_:1})]),l("div",L,[e(i,{label:"密码"},{default:o(()=>[e(r,{type:"password",modelValue:t.value.password,"onUpdate:modelValue":s[4]||(s[4]=a=>t.value.password=a)},null,8,["modelValue"])]),_:1})]),l("div",P,[e(i,{label:"  "},{default:o(()=>[e(c,{type:"primary",onClick:s[5]||(s[5]=a=>p())},{default:o(()=>[f("注册")]),_:1}),e(c,{type:"primary"},{default:o(()=>[e(v,{to:"/login",style:{color:"white"}},{default:o(()=>[f("登录")]),_:1})]),_:1})]),_:1})])]),_:1},8,["model"])]),e(V,{class:"zj-blog-footer"},{default:o(()=>[Z,q,A]),_:1})]),l("div",K,[e(u,{offset:80},{default:o(()=>[e(C),e(I),e(N)]),_:1})])]),_:1})]),_:1})])}}}),W=F(M,[["__scopeId","data-v-cba7a3e8"]]);export{W as default};