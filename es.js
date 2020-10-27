!function(){"use strict";const{document:e,MutationObserver:t,Set:r,WeakMap:l}=self,n=e=>"querySelectorAll"in e,{filter:o}=[];var s=s=>{const a=new l,c=e=>{const{query:t}=s;if(t.length)for(let r=0,{length:l}=e;r<l;r++)u(o.call(e[r].addedNodes,n),!0,t),u(o.call(e[r].removedNodes,n),!1,t)},u=(e,t,l,n=new r)=>{for(let o,c,h=0,{length:d}=e;h<d;h++)if(!n.has(c=e[h])){if(n.add(c),t)for(let e,n=i(c),u=0,{length:h}=l;u<h;u++)n.call(c,e=l[u])&&(a.has(c)||a.set(c,new r),o=a.get(c),o.has(e)||(o.add(e),s.handle(c,t,e)));else a.has(c)&&(o=a.get(c),a.delete(c),o.forEach((e=>{s.handle(c,t,e)})));u(f(c),t,l,n)}},i=e=>e.matches||e.webkitMatchesSelector||e.msMatchesSelector,h=(e,t=!0)=>{u(e,t,s.query)},f=e=>g.length?e.querySelectorAll(g):g,d=new t(c),p=s.root||e,{query:g}=s;return d.observe(p,{childList:!0,subtree:!0}),h(f(p)),{drop:e=>{for(let t=0,{length:r}=e;t<r;t++)a.delete(e[t])},flush:()=>{c(d.takeRecords())},observer:d,parse:h}};const{customElements:a,document:c,Element:u,MutationObserver:i,Object:h,Promise:f,Map:d,Set:p,WeakMap:g}=self,{attachShadow:y}=u.prototype,{createElement:b}=c,{_:w,define:m,get:v}=a,{defineProperty:q,getOwnPropertyNames:S,setPrototypeOf:A}=h,E=new g,M=new p,O=new d,k=new d,N=new d,P=new d,$=[],C=[],V=e=>P.get(e)||v.call(a,e),_=(e,t,r)=>{const l=N.get(r);if(t&&!l.isPrototypeOf(e)){x=A(e,l);try{new l.constructor}finally{x=null}}const n=(t?"":"dis")+"connectedCallback";n in l&&e[n]()},{parse:L}=s({query:C,handle:_}),{parse:T}=s({query:$,handle(e,t){E.has(e)&&(t?M.add(e):M.delete(e),D.call(C,e))}}),W=e=>{if(!k.has(e)){let t,r=new f((e=>{t=e}));k.set(e,{$:r,_:t})}return k.get(e).$},j=((e,t)=>{const r=e=>{for(let t=0,{length:r}=e;t<r;t++)l(e[t])},l=({target:e,attributeName:t,oldValue:r})=>{e.attributeChangedCallback(t,r,e.getAttribute(t))};return(n,o)=>{const{observedAttributes:s}=n.constructor;return s&&e(o).then((()=>{new t(r).observe(n,{attributes:!0,attributeOldValue:!0,attributeFilter:s});for(let e=0,{length:t}=s;e<t;e++)n.hasAttribute(s[e])&&l({target:n,attributeName:s[e],oldValue:null})})),n}})(W,i);let x=null;function D(e){const{parse:t,root:r}=E.get(e);t(r.querySelectorAll(this),e.isConnected)}S(self).filter((e=>/^HTML(?!Element)/.test(e))).forEach((e=>{function t(){const{constructor:e}=this;if(!O.has(e)){if(w&&w.classes.has(e))return;throw new TypeError("Illegal constructor")}const{is:t,tag:r}=O.get(e);if(x)return j(x,t);const l=b.call(c,r);return l.setAttribute("is",t),j(A(l,e.prototype),t)}A(t,self[e]),(t.prototype=self[e].prototype).constructor=t,q(self,e,{value:t})})),q(c,"createElement",{value(e,t){const r=t&&t.is;if(r){const t=P.get(r);if(t&&O.get(t).tag===e)return new t}const l=b.call(c,e);return r&&l.setAttribute("is",r),l}}),y&&q(u.prototype,"attachShadow",{value(){const e=y.apply(this,arguments),{parse:t}=s({query:C,root:e,handle:_});return E.set(this,{root:e,parse:t}),e}}),q(a,"get",{configurable:!0,value:V}),q(a,"whenDefined",{configurable:!0,value:W}),q(a,"define",{configurable:!0,value(e,t,r){let l;const n=r&&r.extends;if(n){if(V(e))throw new Error(`'${e}' has already been defined as a custom element`);l=`${n}[is="${e}"]`,O.set(t,{is:e,tag:n}),N.set(l,t.prototype),P.set(e,t),C.push(l)}else m.apply(a,arguments),$.push(l=e);W(e).then((()=>{n?(L(c.querySelectorAll(l)),M.forEach(D,[l])):T(c.querySelectorAll(l))})),k.get(e)._(t)}})}();
