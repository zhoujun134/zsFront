import{r as m}from"./index-Cxf4HKka.js";function v(l,e){let t=document.createElement("a");return t.id=l,t.href="#"+t.id,t.textContent=e,t.className="toc-link",t}const i=m(0);function p(){let l=document.querySelectorAll("h1, h2, h3");const e=[];for(let t=0;t<l.length;t++){let o=l.item(t);if(o==null)continue;let a=o.nodeName.toLowerCase().substring(1),u="toc-h-a-"+t,c=o.textContent?o.textContent:"",s=v(u,c),n={id:u,level:a,url:"#"+s.id,text:c};if(o.textContent="",o.appendChild(s),a=="1"&&(e.push(n),i.value+=1),a=="2")if(e.length>0){let h=e[e.length-1];h.level=="1"?d(h,n):(e.push(n),i.value+=1)}else e.push(n),i.value+=1;if(a=="3")if(e.length>0){let h=e[e.length-1];if(h.level=="1"||h.level=="2"){let r=h.children;if(r)if(r.length>0){let f=r[r.length-1];d(f,n)}else r.push(n),i.value+=1;else h.children=[n],i.value+=1}else e.push(n),i.value+=1}else e.push(n),i.value+=1}return e}function d(l,e){l.children?l.children.push(e):l.children=[e],i.value+=1}function C(l){window.location.href=l.url}export{p as g,C as h,i as t};
