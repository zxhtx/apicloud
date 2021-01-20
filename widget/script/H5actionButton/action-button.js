/*!
 *  * action-button v1.0.0
 *  * (c) 2019-2019 
 *  * Released under the MIT License.
 */!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){t.exports=n(3)},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);n(1),n(2);const i=t=>{if("string"==typeof t){const e=document.querySelector(t);return e||document.createElement("div")}return t},o=(t,e)=>{if(r(t,e))return;let n=t.className.split(" ");n.push(e),t.className=n.join(" ")},r=(t,e)=>{return new RegExp(`(^|\\s)${e}($|\\s)`).test(t.className)},s=(t,e)=>{if(r(t,e)){for(var n=" "+t.className.replace(/[\t\r\n]/g,"")+" ";n.indexOf(" "+e+" ")>=0;)n=n.replace(" "+e+" "," ");t.className=n.replace(/^\s+|\s+$/g,"")}};let a=document.createElement("div").style,c=(()=>{let t={webkit:"webkitTransform",Moz:"MozTransform",O:"OTransform",ms:"msTransform",standard:"transform"};for(let e in t)if(void 0!==a[t[e]])return e;return!1})();function l(t){return!1!==c&&("standard"===c?t:c+t.charAt(0).toUpperCase()+t.substr(1))}window.ActionButton=class{constructor(t){this._loadContent(t.items),this.el=i(".actionsheet-container"),this.cancelBtn=i(".actionsheet-cancel"),this.modal=i(".actionsheet-modal"),this.actionBottom=i(".actionsheet-bottom"),this.itemsEl=this.el.getElementsByClassName("action-button-item"),this.container=i(".action-button-container"),this._initClick(t)}show(){o(this.el,"on"),this.modal.style.opacity=1,this.actionBottom.style[l("transform")]="translateY(0%)"}_initClick(t){this.cancelBtn.onclick=()=>{this.hide()};for(let e=0;e<this.itemsEl.length;e++)this.itemsEl[e].onclick=()=>{t.itemClick.call(this,{index:e,...t[e]}),!1!==t.autoHide&&this.hide()};t.tapHidden&&(this.actionBottom.onclick=function(t){t.stopPropagation()},this.el.onclick=this.cancelBtn.onclick)}hide(){this.modal.style.opacity=0,this.actionBottom.style[l("transform")]="translateY(100%)";let t=this;this.modal.addEventListener("transitionend",function e(){s(t.el,"on"),t.modal.removeEventListener("transitionend",e)},!1)}_loadContent(t){let e="";for(let n=0;n<t.length;n++){let i=t[n];e+=`<div class="action-button-item">\n        <img src="${i.img}">\n        <div class="action-button-text">${i.text}</div>\n      </div>`}let n=document.createElement("div");n.className="actionsheet-container",n.innerHTML=`<div class="actionsheet-modal"></div>\n      <div class="actionsheet-bottom">\n        <div class="action-button-container clearfix">\n        ${e}\n        </div>\n        <div class="actionsheet-cancel">取消</div>\n      </div>`,document.body.appendChild(n)}}}]);