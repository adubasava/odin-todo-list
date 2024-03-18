(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>d});var o=n(601),r=n.n(o),c=n(314),i=n.n(c)()(r());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]),i.push([e.id,"body {\n    font-family: Roboto, 'Times New Roman', Times, serif;\n    display: grid;\n    grid-template-columns: 250px 1fr 2fr;\n    grid-template-rows: 100px 3fr;    \n    height: 100vh;\n    justify-content: start;\n    gap: 5px;\n}\n\n.header {\n    grid-column: 1 / 3;\n    display: flex;\n    justify-content: space-between;\n    align-items: baseline;\n    margin-left: 20px;\n}\n\n.user {\n    font-weight: 700;\n    background-color: rgb(173, 255, 47, 0.5);\n}\n\n.header h1 {\n    color: green;\n}\n\n.sidebar {\n    grid-row-start: 2;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-start;\n    background-color: greenyellow;\n    color: green;\n    border-radius: 12px;\n    padding: 0 20px;\n    border: 1px solid green;\n}\n\n.add-project, .add-task, .submit, .close, .task-view-edit, .task-delete, .cancel {\n    background-color: green;\n    color: white;\n    border: 1px solid white;\n    border-radius: 10px;\n    font-size: 14px;\n    cursor: pointer;\n    padding: 8px 12px;\n    box-shadow: 5px 5px 2px 0px rgba(0,0,0,0.3);\n}\n\n.task-view-edit {\n    margin-left: 5px;\n    margin-right: 5px;\n    background-color: cornflowerblue;\n}\n\n.task-delete {\n    margin-left: 5px;\n    margin-right: 5px;\n    background-color: brown;\n}\n\n.close {\n    background-color: brown;\n}\n\nform {\n    line-height: 1.5;\n}\n\n.title {\n    display: flex;\n    justify-content: center;\n    align-items: baseline;\n    gap: 10px;\n}\n\n.title-tasks {\n    display: flex;\n    justify-content: space-between;\n    align-items: baseline;\n    background-color: greenyellow;\n    border-radius: 12px;\n    border: 1px solid green;\n    padding-left: 30px;\n    padding-right: 30px;\n}\n\n.projects {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.project {\n    width: 220px;\n    font-size: 14px;\n    border-radius: 12px;\n    background-color: white;\n    border: 2px solid green;\n    cursor: pointer;\n    padding: 8px 10px;\n    box-shadow: 5px 5px 2px 0px rgba(0,0,0,0.3);\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.project-edit {\n    background-color: cornflowerblue;\n    border: 1px solid black;\n    box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.3);\n}\n\n.project-delete {\n    background-color: brown;\n    border: 1px solid black;\n    box-shadow: 2px 2px 2px 0px rgba(0,0,0,0.3);\n}\n\n.filter-white {\n    filter: invert(100%) sepia(0%) saturate(7446%) hue-rotate(296deg) brightness(108%) contrast(100%);\n}\n\n.main-section {\n    grid-row-start: 2;\n    grid-column: 2 / -1;\n    padding: 0 20px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.task-cards {        \n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.task {\n    padding: 20px;\n    background-color: rgb(115, 179, 18);\n    border-radius: 12px;\n    border: 1px solid green;\n    display: grid;\n    grid-template-columns: 0.5fr 2fr 3fr 1fr 1fr;\n    align-items: baseline;\n    gap: 5px;\n    box-shadow: 5px 5px 2px 0px rgba(0,0,0,0.3);\n}\n\n.task-due-date {\n    justify-self: end;\n    margin-right: 30px;\n}\n\n.submit, .cancel {\n    margin-left: 10px;\n    margin-right: 10px;\n}\n\ndialog {\n    border-radius: 6px;\n    border-color: green;\n}\n\n::backdrop {\n    background-color: rgb(138, 235, 198);\n    opacity: 0.75;\n}\n\ninput, select {\n    border: 1px solid rgb(138, 235, 198);\n    border-radius: 4px;\n    width: 100%;\n}\n\ninput:focus {\n    border: 0.5px solid rgb(138, 235, 198);\n    background-color: rgba(138, 235, 198, 0.2);\n}\n",""]);const d=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,c){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var d=0;d<this.length;d++){var l=this[d][0];null!=l&&(i[l]=!0)}for(var a=0;a<e.length;a++){var s=[].concat(e[a]);o&&i[s[0]]||(void 0!==c&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=c),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),t.push(s))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var c={},i=[],d=0;d<e.length;d++){var l=e[d],a=o.base?l[0]+o.base:l[0],s=c[a]||0,u="".concat(a," ").concat(s);c[a]=s+1;var p=n(u),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var b=r(m,o);o.byIndex=d,t.splice(d,0,{identifier:u,updater:b,references:1})}i.push(u)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var c=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<c.length;i++){var d=n(c[i]);t[d].references--}for(var l=o(e,r),a=0;a<c.length;a++){var s=n(c[a]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}c=l}}},659:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var c=t[o]={id:o,exports:{}};return e[o](c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(72),t=n.n(e),o=n(825),r=n.n(o),c=n(659),i=n.n(c),d=n(56),l=n.n(d),a=n(540),s=n.n(a),u=n(113),p=n.n(u),m=n(208),b={};function f(e,t,n,o){const r=document.createElement("div");r.classList.add(t),r.id=n;const c=document.createTextNode(e);r.appendChild(c),o.appendChild(r)}function y(e,t,n){const o=document.createElement("span");o.classList.add(t);const r=document.createTextNode(e);o.appendChild(r),n.appendChild(o)}function g(e,t,n){const o=document.createElement(t),r=document.createTextNode(e);o.appendChild(r),n.appendChild(o)}function h(e,t,n,o){const r=new Image;r.src=e,r.width=t,r.classList.add(n),o.appendChild(r)}function v(e,t,n,o){const r=document.createElement("button");r.classList.add(t),r.id=n;const c=document.createTextNode(e);r.appendChild(c),o.appendChild(r)}function x(e,t){const n=document.createElement("input");n.type="checkbox",n.id=e,t.appendChild(n)}b.styleTagTransform=p(),b.setAttributes=l(),b.insert=i().bind(null,"head"),b.domAPI=r(),b.insertStyleElement=s(),t()(m.A,b),m.A&&m.A.locals&&m.A.locals;const k=document.querySelector(".header");class j{constructor({title:e,description:t,dueDate:n,priority:o,status:r,project:c}){this.title=e,this.description=t,this.dueDate=n,this.priority=o,this.status=r,this.project=c}toggleStatus(){this.status=!this.status}}class w{constructor(e){this.title=e}}const E=document.querySelector(".main-section"),S=[];function q(e){document.getElementById(e).remove()}function $(e){const t=document.createElement("dialog");t.id=`dial-${e}`,document.body.appendChild(t),t.showModal(),t.innerHTML+=['<form action="#"><br>','<label for="ettitle">',"Title:","</label>",'<input type="text" name="ettitle" id="ettitle"><br>','<label for="edescription">',"Description:","</label>",'<input type="text" name="edescription" id="edescription"><br>','<label for="edueDate">',"Due date:","</label>",'<input type="date" name="edueDate" id="edueDate"><br>','<label for="epriority">',"Priority:","</label>",'<select name="epriority" id="epriority">','<option value="high" selected>',"High","</option>",'<option value="medium">',"Medium","</option>",'<option value="low">',"Low","</option></select><br>",'<label for="etproject">',"Project:","</label>",'<select name="etproject" id="etproject">',"<option disabled>","Choose a project","</option></select><br>","<br><br>",'<center><button type="submit" class="submit" id=',e,">","Edit task","</button>",'<button class="cancel">',"Cancel","</button></center>","</form>"].join("");const n=document.getElementById("etproject");for(let e=0;e<B.length;++e)n[n.length]=new Option(B[e].title,B[e].title);document.querySelector("#ettitle").value=S[e].title,document.querySelector("#edescription").value=S[e].description,document.querySelector("#edueDate").value=S[e].dueDate,document.querySelector("#epriority").value=S[e].priority,document.querySelector("#etproject").value=S[e].project,document.getElementById(e).addEventListener("click",(()=>{S[e].title=document.querySelector("#ettitle").value,S[e].description=document.querySelector("#edescription").value,S[e].dueDate=document.querySelector("#edueDate").value,S[e].priority=document.querySelector("#epriority").value,S[e].project=document.querySelector("#etproject").value,D(),t.close(),document.getElementById(`dial-${e}`).remove()})),document.querySelector(".cancel").addEventListener("click",(()=>{t.close(),document.getElementById(`dial-${e}`).remove()}))}function D(){const e=document.querySelector(".task-cards");e.textContent="";for(let t=0,n=S.length;t<n;t++){f("","task",`task-${t}`,e);const n=document.querySelector(`#task-${t}`);x(`check-${t}`,n),y(`${S[t].title}`,"task-title",n),y(`${S[t].dueDate}`,"task-due-date",n),v("View / edit","task-view-edit",`btn-task-${t}`,n),v("Delete","task-delete",`del-task-${t}`,n),document.querySelector(`#btn-task-${t}`).addEventListener("click",(()=>$(t))),document.querySelector(`#del-task-${t}`).addEventListener("click",(()=>q(`task-${t}`))),document.getElementById(`check-${t}`).addEventListener("change",(function(){this.checked?(document.getElementById(`task-${t}`).style.textDecoration="line-through",document.getElementById(`task-${t}`).style.backgroundColor="gray",S[t].status=!0):(document.getElementById(`task-${t}`).style.textDecoration="none",document.getElementById(`task-${t}`).style.backgroundColor="rgb(115, 179, 18)",S[t].status=!1)}))}}function I(e){const t=document.querySelector(".task-cards");t.textContent="";for(let n=0,o=S.length;n<o;n++)if(S[n].project==e.title){f("","task",`task-${n}`,t);const e=document.querySelector(`#task-${n}`);x(`check-${n}`,e),y(`${S[n].title}`,"task-title",e),y(`${S[n].dueDate}`,"task-due-date",e),v("View / edit","task-view-edit",`btn-task-${n}`,e),v("Delete","task-delete",`del-task-${n}`,e),document.querySelector(`#btn-task-${n}`).addEventListener("click",(()=>$(n))),document.querySelector(`#del-task-${n}`).addEventListener("click",(()=>q(`task-${n}`)))}}function L(e){const t=document.createElement("dialog");t.id=`dial-proj-${e}`,document.body.appendChild(t),t.showModal(),t.innerHTML+=['<form action="#"><br>','<label for="epttitle">',"Title:","</label>",'<input type="text" name="epttitle" id="epttitle"><br>',"<br><br>",'<center><button type="submit" class="submit" id=',e,">","Edit task","</button>",'<button class="cancel">',"Cancel","</button></center>","</form>"].join(""),document.querySelector("#epttitle").value=B[e].title,document.getElementById(e).addEventListener("click",(()=>{B[e].title=document.querySelector("#epttitle").value,T(),t.close(),document.getElementById(`dial-proj-${e}`).remove()})),document.querySelector(".cancel").addEventListener("click",(()=>{t.close(),document.getElementById(`dial-proj-${e}`).remove()}))}const C=document.querySelector(".sidebar"),B=[];function T(){const e=document.querySelector(".projects");e.textContent="";for(let t=0,n=B.length;t<n;t++){f("","proj",`project-${t}`,e);const n=document.querySelector(`#project-${t}`);v(`${B[t].title}`,"project",`btn-project-title-${t}`,n),v("","project-edit",`btn-project-${t}`,document.getElementById(`btn-project-title-${t}`)),h("../src/pencil.svg",10,"filter-white",document.getElementById(`btn-project-${t}`)),v("","project-delete",`del-project-${t}`,document.getElementById(`btn-project-title-${t}`)),h("../src/delete.svg",10,"filter-white",document.getElementById(`del-project-${t}`)),document.querySelector(`#project-${t}`).addEventListener("click",(()=>{I(B[t])})),document.getElementById(`btn-project-${t}`).addEventListener("click",(()=>{L(t)})),document.getElementById(`del-project-${t}`).addEventListener("click",(()=>{var e;e=`project-${t}`,document.getElementById(e).remove()}))}}f("Welcome, ","welcome","welcome",k),y("Sherlock Holmes","user",document.querySelector(".welcome")),y("!","default",document.querySelector(".welcome")),g("To-Do List","h1",k),function(){f("","title","title",C),g("Your projects","h4",document.querySelector(".title")),v("Add project","add-project","add-project",document.querySelector(".title")),f("","projects","projects",C);const e=new w("Default project");B.push(e);const t=new w("Default project 2");B.push(t),T()}(),function(){f("","title-tasks","title-tasks",E),g("All projects","h2",document.querySelector(".title-tasks")),v("Add task","add-task","add-task",document.querySelector(".title-tasks")),f("","task-cards","task-cards",E);const e=new j({title:"Get started here",description:"Get started here",dueDate:"2024-03-24",priority:"high",status:!1,project:B[0].title});S.push(e);const t=new j({title:"Get started here 2",description:"Get started here 2",dueDate:"2024-03-24",priority:"high",status:!1,project:B[1].title});S.push(t),D()}(),document.querySelector(".add-task").addEventListener("click",(function(){const e=document.createElement("dialog");e.id="dialogadd",document.body.appendChild(e),e.showModal(),e.innerHTML+=['<center><button class="close">',"X","</button></center>","<h3>","Add task","<h3>",'<form action="#"><br>','<label for="ttitle">',"Title:","</label>",'<input type="text" name="ttitle" id="ttitle"><br>','<label for="description">',"Description:","</label>",'<input type="text" name="description" id="description"><br>','<label for="dueDate">',"Due date:","</label>",'<input type="date" name="dueDate" id="dueDate"><br>','<label for="priority">',"Priority:","</label>",'<select name="priority" id="priority">','<option value="high" selected>',"High","</option>",'<option value="medium">',"Medium","</option>",'<option value="low">',"Low","</option></select><br>",'<label for="tproject">',"Project:","</label>",'<select name="tproject" id="tproject">',"<option disabled>","Choose a project","</option></select><br>","<br><br>",'<center><button type="submit" class="submit">',"Add task","</button></center>","</form>"].join("");const t=document.getElementById("tproject");for(let e=0;e<B.length;++e)t[t.length]=new Option(B[e].title,B[e].title);addEventListener("submit",(t=>{t.preventDefault();const n=new j({title:document.querySelector("#ttitle").value,description:document.querySelector("#description").value,dueDate:document.querySelector("#dueDate").value,priority:document.querySelector("#priority").value,status:!1,project:document.querySelector("#tproject").value});S.push(n),D(),e.close(),document.getElementById("dialogadd").remove()})),document.querySelector(".close").addEventListener("click",(()=>{e.close(),document.getElementById("dialogadd").remove()}))})),document.querySelector(".add-project").addEventListener("click",(function(){const e=document.createElement("dialog");e.id="dialogaddproj",document.body.appendChild(e),e.showModal(),e.innerHTML+=['<center><button class="close">',"X","</button></center>","<h3>","Add project","<h3>",'<form action="#"><br>','<label for="ptitle">',"Title:","</label>",'<input type="text" name="ptitle" id="ptitle"><br><br>','<center><button type="submit" class="submit">',"Add project","</button></center>","</form>"].join(""),addEventListener("submit",(t=>{t.preventDefault();const n=new w(document.querySelector("#ptitle").value);B.push(n),T(),e.close(),document.getElementById("dialogaddproj").remove()})),document.querySelector(".close").addEventListener("click",(()=>{e.close(),document.getElementById("dialogaddproj").remove()}))}))})()})();