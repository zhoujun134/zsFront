function f(l,e){let t=document.createElement("a");return t.id=l,t.href="#"+t.id,t.textContent=e,t.className="toc-link",t}function m(){let l=document.querySelectorAll("h1, h2, h3");const e=[];for(let t=0;t<l.length;t++){let h=l.item(t);if(h==null)continue;let r=h.nodeName.toLowerCase().substring(1),c="toc-h-a-"+t,s=h.textContent?h.textContent:"",d=f(c,s),n={id:c,level:r,url:"#"+d.id,text:s};if(h.textContent="",h.appendChild(d),r=="1"&&e.push(n),r=="2")if(e.length>0){let i=e[e.length-1];i.level=="1"?u(i,n):e.push(n)}else e.push(n);if(r=="3")if(e.length>0){let i=e[e.length-1];if(i.level=="1"||i.level=="2"){let o=i.children;if(o)if(o.length>0){let a=o[o.length-1];u(a,n)}else o.push(n);else i.children=[n]}else e.push(n)}else e.push(n)}return e}function u(l,e){l.children?l.children.push(e):l.children=[e]}function g(l){window.location.href=l.url}export{m as g,g as h};