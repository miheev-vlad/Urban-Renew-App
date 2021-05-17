(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(645),i=n.n(r)()((function(e){return e[1]}));i.push([e.id,"/**\r\n * Body CSS\r\n */\r\n\r\n html,\r\n body {\r\n   height: 100%;\r\n }\r\n \r\n html,\r\n body,\r\n input,\r\n textarea,\r\n button {\r\n   -webkit-font-smoothing: antialiased;\r\n   -moz-osx-font-smoothing: grayscale;\r\n   text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\r\n }\r\n \r\n \r\n /**\r\n  * Sidebar CSS\r\n  */\r\n \r\n #sidebar {\r\n   background-color: #2196F3;\r\n   padding: 15px;\r\n   text-transform: uppercase;\r\n }\r\n \r\n @media (min-width: 768px) {\r\n   #sidebar {\r\n     position: fixed;\r\n     top: 0;\r\n     bottom: 0;\r\n     width: 180px;\r\n     height: 100%;\r\n     padding-top: 30px;\r\n   }\r\n }\r\n \r\n \r\n /**\r\n  * Content CSS\r\n  */\r\n @media (min-width: 768px) {\r\n   #content {\r\n     margin-left: 180px;\r\n   }\r\n }\r\n\r\n /* suggestion-text */\r\n .suggestion-text {\r\n   padding: 10px;\r\n }\r\n\r\n /* floating-btn */\r\n .floating-btn-log {\r\n   position: fixed;\r\n   bottom: 50px;\r\n   right: 110px;\r\n }\r\n .floating-btn-reg {\r\n  position: fixed;\r\n  bottom: 50px;\r\n  right: 50px;\r\n}\r\n\r\n /* auth-modal */\r\n .auth-modal {\r\n   max-width: 600px;\r\n   max-height: 300px;\r\n   margin: 100px auto;\r\n   overflow-y: auto;\r\n   background: #fff;\r\n }\r\n .auth-modal-content {\r\n   padding: 1rem;\r\n }\r\n\r\n /* text-center */\r\n .text-center {\r\n   text-align: center;\r\n   padding-top: 10px;\r\n }\r\n\r\n  /* suggestion-modal */\r\n  .suggestion-modal {\r\n    max-width: 600px;\r\n    max-height: 300px;\r\n    margin: 100px auto;\r\n    overflow-y: auto;\r\n    background: #fff;\r\n  }\r\n  .suggestion-modal-content {\r\n    padding: 1rem;\r\n  }\r\n",""]);const a=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(i[o]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);r&&i[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},379:(e,t,n)=>{var r,i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function o(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],i=0;i<e.length;i++){var s=e[i],d=t.base?s[0]+t.base:s[0],l=n[d]||0,u="".concat(d," ").concat(l);n[d]=l+1;var c=o(u),m={css:s[1],media:s[2],sourceMap:s[3]};-1!==c?(a[c].references++,a[c].updater(m)):a.push({identifier:u,updater:g(m,t),references:1}),r.push(u)}return r}function d(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var o=i(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var l,u=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function c(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,i);else{var a=document.createTextNode(i),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a)}}function m(e,t,n){var r=n.css,i=n.media,a=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,p=0;function g(e,t){var n,r,i;if(t.singleton){var a=p++;n=f||(f=d(t)),r=c.bind(null,n,a,!1),i=c.bind(null,n,a,!0)}else n=d(t),r=m.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=o(n[r]);a[i].references--}for(var d=s(e,t),l=0;l<n.length;l++){var u=o(n[l]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}n=d}}}}},t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(28);function i(e){const t=document.createElement("div");t.classList.add("suggestion-modal");const n=`\n    <div class="mui--text-dark-secondary mui--text-display1 text-center">Suggestions List</div>\n    <div class="suggestion-modal-content">${e}</div>\n  `;t.innerHTML=n,mui.overlay("on",t)}function a(e){const t=document.createElement("div");t.classList.add("auth-modal");const n=`\n    <div class="mui--text-dark-secondary mui--text-display1 text-center">${e.title}</div>\n    <div class="auth-modal-content">${e.data}</div>\n  `;t.innerHTML=n;const r={onclose:()=>location.reload()};mui.overlay("on",r,t)}function o(e){return e?(localStorage.setItem("idToken",JSON.stringify(e)),Promise.resolve({title:"Successful authorisation!",data:'<div class="mui--text-dark-secondary mui--text-headline text-center">Now you can add your suggestions.</div>'})):Promise.resolve({title:"Warning!",data:'<div class="mui--text-accent mui--text-headline text-center">Authorisation Error.</div>'})}function s(e){return e?(localStorage.setItem("idToken",JSON.stringify(e)),Promise.resolve({title:"Successful registration!",data:'<div class="mui--text-dark-secondary mui--text-headline text-center">Now you can add your suggestions.</div>'})):Promise.resolve({title:"Warning!",data:'<div class="mui--text-accent mui--text-headline text-center">The email is already in use by another account.</div>'})}t()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;class d{static create(e){if(localStorage.getItem("idToken"))return fetch(`https://urban-app-a085c-default-rtdb.firebaseio.com/suggestions.json?auth=${JSON.parse(localStorage.getItem("idToken"))}`,{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((t=>(e.id=t.name,e))).then(u).then(d.renderList).then((()=>a({title:"Suggestion successfully added!",data:'<div class="mui--text-dark-secondary mui--text-headline text-center">Thanks for participating in the project.</div>'})));a({title:"Warning!",data:'<div class="mui--text-accent mui--text-headline text-center">Authorisation Error.</div>'})}static renderList(){const e=c(),t=e.length?e.map(m).join(""):'<div class="mui--text-subhead suggestion-text">You haven\'t suggested anything yet</div>';document.getElementById("list").innerHTML=t}}function l(e){return e.length?`<ol class="mui--text-title">${e.map((e=>`<li>${e.text}</li>`)).join("")}</ol>`:'<p class="mui--text-title">No suggestions yet</p>'}function u(e){const t=c();t.push(e),localStorage.setItem("suggestions",JSON.stringify(t))}function c(){return JSON.parse(localStorage.getItem("suggestions")||"[]")}function m(e){return`\n    <div class="mui--text-subhead suggestion-text">${e.text}</div>\n    <div class="mui-divider"></div>\n  `}const f=document.getElementById("link-btn"),p=document.getElementById("auth-btn"),g=document.getElementById("register-btn"),h=document.getElementById("form"),v=h.querySelector("#suggestion-input"),b=h.querySelector("#submit");function x(e){e.preventDefault();const t=e.target.querySelector("#email").value,n=e.target.querySelector("#password").value,r=e.target.querySelector("#submit-login");r.disabled=!0,function(e,t){return fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAs_7iLebJpRpJk4tPXhAuTA2mUKtkcZjI",{method:"POST",body:JSON.stringify({email:e,password:t,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>e.idToken))}(t,n).then(o).then(a).then((()=>r.disabled=!1))}function y(e){e.preventDefault();const t=e.target.querySelector("#email").value,n=e.target.querySelector("#password").value,r=e.target.querySelector("#submit-register");r.disabled=!0,function(e,t){return fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAs_7iLebJpRpJk4tPXhAuTA2mUKtkcZjI",{method:"POST",body:JSON.stringify({email:e,password:t,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>e.idToken))}(t,n).then(s).then(a).then((()=>r.disabled=!1))}window.addEventListener("load",(function(){localStorage.getItem("idToken")&&(b.disabled=!1,v.disabled=!1,p.disabled=!0,g.disabled=!0)})),window.addEventListener("load",d.renderList),f.addEventListener("click",(function(){fetch("https://urban-app-a085c-default-rtdb.firebaseio.com/suggestions.json").then((e=>e.json())).then((e=>e&&e.error?`<p class="error">${e.error}</p>`:e?Object.keys(e).map((t=>({...e[t],id:t}))):[])).then(l).then(i)})),p.addEventListener("click",(function(){a({title:"Authorization",data:'\n  <form class="mui-form" id="auth-form">\n    <div class="mui-textfield mui-textfield--float-label">\n      <input\n        type="email"\n        id="email"\n        required\n      >\n      <label for="email">Email</label>\n    </div>\n    <div class="mui-textfield mui-textfield--float-label">\n    <input\n      type="password"\n      id="password"\n      required\n    >\n    <label for="password">Password</label>\n    </div>\n    <button\n      type="submit"\n      id="submit-login"\n      class="mui-btn mui-btn--raised mui-btn--primary"\n    >\n      Log In\n  </form>\n  '}),document.getElementById("auth-form").addEventListener("submit",x,{once:!0})})),g.addEventListener("click",(function(){a({title:"Registration",data:'\n  <form class="mui-form" id="auth-form">\n    <div class="mui-textfield mui-textfield--float-label">\n      <input\n        type="email"\n        id="email"\n        required\n      >\n      <label for="email">Email</label>\n    </div>\n    <div class="mui-textfield mui-textfield--float-label">\n    <input\n      type="password"\n      id="password"\n      required\n    >\n    <label for="password">Password</label>\n    </div>\n    <button\n    type="submit"\n    id="submit-register"\n    class="mui-btn mui-btn--raised mui-btn--accent"\n    >\n      SignUp\n    </button>\n  </form>\n  '}),document.getElementById("auth-form").addEventListener("submit",y,{once:!0})})),h.addEventListener("submit",(function(e){e.preventDefault();const t={text:v.value.trim(),date:(new Date).toJSON()};b.disabled=!0,d.create(t).then((()=>{v.value="",v.className="",b.disabled=!1}))}))})()})();