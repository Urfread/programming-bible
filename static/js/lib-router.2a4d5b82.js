/*! For license information please see lib-router.2a4d5b82.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_documentation_site=self.webpackChunkmy_documentation_site||[]).push([["118"],{8293:function(e,t,n){var r,a,i,o;function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{J0:function(){return c},RQ:function(){return P},X3:function(){return E},Zn:function(){return w},aU:function(){return r},cP:function(){return v},cm:function(){return S},fp:function(){return m},lX:function(){return s},pC:function(){return x}}),(i=r||(r={})).Pop="POP",i.Push="PUSH",i.Replace="REPLACE";let u="popstate";function s(e){return void 0===e&&(e={}),function(e,t,n,a){void 0===a&&(a={});let{window:i=document.defaultView,v5Compat:o=!1}=a,s=i.history,h=r.Pop,v=null,m=g();function g(){return(s.state||{idx:null}).idx}function y(){h=r.Pop;let e=g(),t=null==e?null:e-m;m=e,v&&v({action:h,location:w.location,delta:t})}null==m&&(m=0,s.replaceState(l({},s.state,{idx:m}),""));function b(e){let t="null"!==i.location.origin?i.location.origin:i.location.href,n="string"==typeof e?e:d(e);return c(t,"No window.location.(origin|href) available to create URL for href: "+(n=n.replace(/ $/,"%20"))),new URL(n,t)}let w={get action(){return h},get location(){return e(i,s)},listen(e){if(v)throw Error("A history only accepts one active listener");return i.addEventListener(u,y),v=e,()=>{i.removeEventListener(u,y),v=null}},createHref:e=>t(i,e),createURL:b,encodeLocation(e){let t=b(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){h=r.Push;let a=f(w.location,e,t);n&&n(a,e);let l=p(a,m=g()+1),u=w.createHref(a);try{s.pushState(l,"",u)}catch(e){if(e instanceof DOMException&&"DataCloneError"===e.name)throw e;i.location.assign(u)}o&&v&&v({action:h,location:w.location,delta:1})},replace:function(e,t){h=r.Replace;let a=f(w.location,e,t);n&&n(a,e);let i=p(a,m=g()),l=w.createHref(a);s.replaceState(i,"",l),o&&v&&v({action:h,location:w.location,delta:0})},go:e=>s.go(e)};return w}(function(e,t){let{pathname:n,search:r,hash:a}=e.location;return f("",{pathname:n,search:r,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"==typeof t?t:d(t)},null,e)}function c(e,t){if(!1===e||null==e)throw Error(t)}function h(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw Error(t)}catch(e){}}}function p(e,t){return{usr:e.state,key:e.key,idx:t}}function f(e,t,n,r){return void 0===n&&(n=null),l({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?v(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function d(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function v(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function m(e,t,n){return void 0===n&&(n="/"),function(e,t,n,r){let a=w(("string"==typeof t?v(t):t).pathname||"/",n);if(null==a)return null;let i=function e(t,n,r,a){void 0===n&&(n=[]),void 0===r&&(r=[]),void 0===a&&(a="");let i=(t,i,o)=>{let l={relativePath:void 0===o?t.path||"":o,caseSensitive:!0===t.caseSensitive,childrenIndex:i,route:t};l.relativePath.startsWith("/")&&(c(l.relativePath.startsWith(a),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+a)+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),l.relativePath=l.relativePath.slice(a.length));let u=P([a,l.relativePath]),s=r.concat(l);if(t.children&&t.children.length>0&&(c(!0!==t.index,'Index routes must not have child routes. Please remove all child routes from route path "'+u+'".'),e(t.children,n,s,u)),null!=t.path||!!t.index)n.push({path:u,score:function(e,t){let n=e.split("/"),r=n.length;return n.some(y)&&(r+=-2),t&&(r+=2),n.filter(e=>!y(e)).reduce((e,t)=>e+(g.test(t)?3:""===t?1:10),r)}(u,t.index),routesMeta:s})};return t.forEach((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let n of function e(t){let n=t.split("/");if(0===n.length)return[];let[r,...a]=n,i=r.endsWith("?"),o=r.replace(/\?$/,"");if(0===a.length)return i?[o,""]:[o];let l=e(a.join("/")),u=[];return u.push(...l.map(e=>""===e?o:[o,e].join("/"))),i&&u.push(...l),u.map(e=>t.startsWith("/")&&""===e?"/":e)}(e.path))i(e,t,n);else i(e,t)}),n}(e);(function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))})(i);let o=null;for(let e=0;null==o&&e<i.length;++e){let t=function(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return h(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t)+")."),e}}(a);o=function(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,a={},i="/",o=[];for(let e=0;e<r.length;++e){let l=r[e],u=e===r.length-1,s="/"===i?t:t.slice(i.length)||"/",c=b({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},s),h=l.route;if(!c&&u&&n&&!r[r.length-1].route.index&&(c=b({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},s)),!c)return null;Object.assign(a,c.params),o.push({params:a,pathname:P([i,c.pathname]),pathnameBase:_(P([i,c.pathnameBase])),route:h}),"/"!==c.pathnameBase&&(i=P([i,c.pathnameBase]))}return o}(i[e],t,r)}return o}(e,t,n,!1)}(o=a||(a={})).data="data",o.deferred="deferred",o.redirect="redirect",o.error="error";let g=/^:[\w-]+$/,y=e=>"*"===e;function b(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!0),h("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*"))+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, '+('please change the route path to "'+e.replace(/\*$/,"/*"))+'".');let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:r.reduce((e,t,n)=>{let{paramName:r,isOptional:a}=t;if("*"===r){let e=l[n]||"";o=i.slice(0,i.length-e.length).replace(/(.)\/+$/,"$1")}let u=l[n];return a&&!u?e[r]=void 0:e[r]=(u||"").replace(/%2F/g,"/"),e},{}),pathname:i,pathnameBase:o,pattern:e}}function w(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function R(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r))+"].  Please separate it out to the "+("`to."+n)+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function S(e,t){let n=e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0);return t?n.map((e,t)=>t===n.length-1?e.pathname:e.pathnameBase):n.map(e=>e.pathnameBase)}function x(e,t,n,r){let a,i;void 0===r&&(r=!1),"string"==typeof e?a=v(e):(c(!(a=l({},e)).pathname||!a.pathname.includes("?"),R("?","pathname","search",a)),c(!a.pathname||!a.pathname.includes("#"),R("#","pathname","hash",a)),c(!a.search||!a.search.includes("#"),R("#","search","hash",a)));let o=""===e||""===a.pathname,u=o?"/":a.pathname;if(null==u)i=n;else{let e=t.length-1;if(!r&&u.startsWith("..")){let t=u.split("/");for(;".."===t[0];)t.shift(),e-=1;a.pathname=t.join("/")}i=e>=0?t[e]:"/"}let s=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:a=""}="string"==typeof e?v(e):e;return{pathname:n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}(n,t):t,search:U(r),hash:C(a)}}(a,i),h=u&&"/"!==u&&u.endsWith("/"),p=(o||"."===u)&&n.endsWith("/");return!s.pathname.endsWith("/")&&(h||p)&&(s.pathname+="/"),s}let P=e=>e.join("/").replace(/\/\/+/g,"/"),_=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),U=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",C=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";class E extends Error{}Symbol("deferred")},8085:function(e,t,n){n.d(t,{VK:function(){return w}});var r,a,i,o,l,u,s=n(5271),c=n(967),h=n(3384),p=n(8293);function f(){return(f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let d="application/x-www-form-urlencoded";function v(e){return null!=e&&"string"==typeof e.tagName}let m=null,g=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function y(e){return null==e||g.has(e)?e:null}try{window.__reactRouterVersion="6"}catch(e){}let b=(i||(i=n.t(s,2))).startTransition;(o||(o=n.t(c,2))).flushSync;(i||(i=n.t(s,2))).useId;function w(e){let{basename:t,children:n,future:r,window:a}=e,i=s.useRef();null==i.current&&(i.current=(0,p.lX)({window:a,v5Compat:!0}));let o=i.current,[l,u]=s.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},f=s.useCallback(e=>{c&&b?b(()=>u(e)):u(e)},[u,c]);return s.useLayoutEffect(()=>o.listen(f),[o,f]),s.useEffect(()=>(0,h.$A)(r),[r]),s.createElement(h.F0,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement;function R(e){let t=React.useContext(UNSAFE_DataRouterContext);return t||UNSAFE_invariant(!1),t}(r=l||(l={})).UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState",(a=u||(u={})).UseFetcher="useFetcher",a.UseFetchers="useFetchers",a.UseScrollRestoration="useScrollRestoration";let S=0,x=()=>"__"+String(++S)+"__"},3384:function(e,t,n){n.d(t,{$A:function(){return P},F0:function(){return _},TH:function(){return m},s0:function(){return y}});var r,a,i,o,l=n(5271),u=n(8293);function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}let c=l.createContext(null),h=l.createContext(null),p=l.createContext(null),f=l.createContext({outlet:null,matches:[],isDataRoute:!1}),d=l.createContext(null);function v(){return null!=l.useContext(p)}function m(){return v()||(0,u.J0)(!1),l.useContext(p).location}function g(e){!l.useContext(h).static&&l.useLayoutEffect(e)}function y(){let{isDataRoute:e}=l.useContext(f);return e?function(){var e;let t;let{router:n}=(e=b.UseNavigateStable,(t=l.useContext(c))||(0,u.J0)(!1),t),r=R(w.UseNavigateStable),a=l.useRef(!1);return g(()=>{a.current=!0}),l.useCallback(function(e,t){void 0===t&&(t={}),a.current&&("number"==typeof e?n.navigate(e):n.navigate(e,s({fromRouteId:r},t)))},[n,r])}():function(){v()||(0,u.J0)(!1);let e=l.useContext(c),{basename:t,future:n,navigator:r}=l.useContext(h),{matches:a}=l.useContext(f),{pathname:i}=m(),o=JSON.stringify((0,u.cm)(a,n.v7_relativeSplatPath)),s=l.useRef(!1);return g(()=>{s.current=!0}),l.useCallback(function(n,a){if(void 0===a&&(a={}),!s.current)return;if("number"==typeof n){r.go(n);return}let l=(0,u.pC)(n,JSON.parse(o),i,"path"===a.relative);null==e&&"/"!==t&&(l.pathname="/"===l.pathname?t:(0,u.RQ)([t,l.pathname])),(a.replace?r.replace:r.push)(l,a.state,a)},[t,r,o,i,e])}()}var b=((r=b||{}).UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r);var w=((a=w||{}).UseBlocker="useBlocker",a.UseLoaderData="useLoaderData",a.UseActionData="useActionData",a.UseRouteError="useRouteError",a.UseNavigation="useNavigation",a.UseRouteLoaderData="useRouteLoaderData",a.UseMatches="useMatches",a.UseRevalidator="useRevalidator",a.UseNavigateStable="useNavigate",a.UseRouteId="useRouteId",a);function R(e){var t;let n;let r=(t=0,(n=l.useContext(f))||(0,u.J0)(!1),n),a=r.matches[r.matches.length-1];return a.route.id||(0,u.J0)(!1),a.route.id}let S={},x=(e,t,n)=>{var r,a;return r=0,void(!S[a="⚠️ React Router Future Flag Warning: "+t+". "+("You can use the `"+e)+"` future flag to opt-in early. "+("For more information, see "+n)+"."]&&(S[a]=!0,console.warn(a)))};function P(e,t){!(null!=e&&e.v7_startTransition)&&x("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),!(null!=e&&e.v7_relativeSplatPath)&&(!t||!t.v7_relativeSplatPath)&&x("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"),t&&(!t.v7_fetcherPersist&&x("v7_fetcherPersist","The persistence behavior of fetchers is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist"),!t.v7_normalizeFormMethod&&x("v7_normalizeFormMethod","Casing of `formMethod` fields is being normalized to uppercase in v7","https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod"),!t.v7_partialHydration&&x("v7_partialHydration","`RouterProvider` hydration behavior is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_partialhydration"),!t.v7_skipActionErrorRevalidation&&x("v7_skipActionErrorRevalidation","The revalidation behavior after 4xx/5xx `action` responses is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation"))}function _(e){let{basename:t="/",children:n=null,location:r,navigationType:a=u.aU.Pop,navigator:i,static:o=!1,future:c}=e;v()&&(0,u.J0)(!1);let f=t.replace(/^\/*/,"/"),d=l.useMemo(()=>({basename:f,navigator:i,static:o,future:s({v7_relativeSplatPath:!1},c)}),[f,c,i,o]);"string"==typeof r&&(r=(0,u.cP)(r));let{pathname:m="/",search:g="",hash:y="",state:b=null,key:w="default"}=r,R=l.useMemo(()=>{let e=(0,u.Zn)(m,f);return null==e?null:{location:{pathname:e,search:g,hash:y,state:b,key:w},navigationType:a}},[f,m,g,y,b,w,a]);return null==R?null:l.createElement(h.Provider,{value:d},l.createElement(p.Provider,{children:n,value:R}))}(o||(o=n.t(l,2))).startTransition;var U=((i=U||{})[i.pending=0]="pending",i[i.success=1]="success",i[i.error=2]="error",i);new Promise(()=>{})}}]);