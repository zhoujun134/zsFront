import{d as y,t as d,r as h,a,b as p,q as f,w as o,f as u,e as t,v as c,x as _,l as I,y as T,E as g,z}from"./index-BTh5yUdm.js";const C=y({__name:"LoginForm",setup(S){d({tokenName:"",tokenValue:"",tokenTimeout:0,sessionTimeout:0,loginId:""});const s=h({tokenName:"",tokenValue:"",tokenTimeout:0,sessionTimeout:0,loginId:""}),l=d({username:"",password:""});d({username:[{required:!0,message:"请输入用户名",trigger:["change","blur"]},{pattern:/^[a-zA-Z][a-zA-Z0-9-]{3,31}$/,message:"用户名由英文字母开头的长度4-32位字母、_和-组成",trigger:["change","blur"]}],password:{required:!0,message:"请输入至少8个字符的密码",min:8,trigger:["change","blur"]}});function k(){T(l).then(n=>{if(n.code!="0"){const r=n.message?n.message:"登录失败，请联系管理员处理！";g.error({message:r,duration:5*1e3})}const e=n.data;e.tokenValue&&e.tokenName&&(s.value=e),localStorage.getItem("zsUserToken")&&(localStorage.setItem("zsUserToken",JSON.stringify(e)),g.success({message:"欢迎登录当前系统",duration:5*1e3}))}).catch(n=>{console.log("登录遇到异常了！"+n);let{message:e}=n;g.error({message:e,duration:5*1e3})})}return(n,e)=>{const m=a("el-input"),r=a("el-form-item"),V=a("el-button"),b=a("router-link"),w=a("el-form"),v=a("el-link"),N=a("el-card"),x=a("el-container");return p(),f(x,{class:"zj-blog-login-container"},{default:o(()=>[u("div",null,[t(w,{"label-width":"auto",model:l,style:{"max-width":"600px"}},{default:o(()=>[t(r,{label:"用户名"},{default:o(()=>[t(m,{modelValue:l.username,"onUpdate:modelValue":e[0]||(e[0]=i=>l.username=i)},null,8,["modelValue"])]),_:1}),t(r,{label:"密码"},{default:o(()=>[t(m,{modelValue:l.password,"onUpdate:modelValue":e[1]||(e[1]=i=>l.password=i),type:"password","show-password":!0},null,8,["modelValue"])]),_:1}),t(r,{label:"       "},{default:o(()=>[t(V,{type:"primary",onClick:k},{default:o(()=>[c("登录")]),_:1}),t(b,{to:"/register",style:{"margin-left":"20px"}},{default:o(()=>[c("注册")]),_:1})]),_:1})]),_:1},8,["model"]),s.value.loginId?(p(),f(N,{key:0},{default:o(()=>[u("p",null,"loginId: "+_(s.value.loginId),1),u("p",null,"tokenName: "+_(s.value.tokenName),1),u("p",null,"tokenValue: "+_(s.value.tokenValue),1),t(v,{href:"/web"},{default:o(()=>[c("回到首页")]),_:1})]),_:1})):I("",!0)])]),_:1})}}}),q=z(C,[["__scopeId","data-v-a9e5d395"]]);export{q as default};