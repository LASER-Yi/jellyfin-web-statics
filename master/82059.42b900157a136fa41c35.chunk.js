"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[82059],{82059:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}}),r(5769),r(63238),r(61418),r(17460),r(14078),r(61013),r(19068),r(87211),r(25901),r(92189),r(95163),r(99785),r(91047);var n=r(93355),o=r(30325),i=r(94994),l=r(60934);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==a(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===a(o)?o:String(o)),n)}var o}function s(e){return e.preventDefault(),!1}function u(e,t,n){Promise.resolve().then(r.bind(r,54517)).then((function(r){var o=n?"on":"off";r.centerFocus[o](e,t)}))}r(15856),r(61414),r(38228);var f=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r;return t=e,(r=[{key:"show",value:function(e){return new Promise((function(t,r){var a={removeOnClose:!0,scrollY:!1};o.Z.tv?a.size="fullscreen":a.size="small";var c=n.default.createDialog(a);c.classList.add("formDialog");var f,d,v,y="";y+='<div class="formDialogHeader">',y+='<button is="paper-icon-button-light" class="btnCancel hide-mouse-idle-tv" tabindex="-1" title="'.concat(i.ZP.translate("ButtonBack"),'"><span class="material-icons arrow_back" aria-hidden="true"></span></button>'),y+='<h3 class="formDialogHeaderTitle">${Sort}</h3>',y+="</div>",y+='<div class="formDialogContent smoothScrollY"> <div class="dialogContentInner dialog-content-centered"> <form style="margin:auto"> <div class="verticalSection verticalSection-extrabottompadding" style="margin-top:2em"> <div class="selectContainer"> <select is="emby-select" class="selectSortBy" label="${LabelSortBy}"> </select> </div> <div class="selectContainer"> <select is="emby-select" class="selectSortOrder" label="${LabelSortOrder}"> <option value="Ascending">${Ascending}</option> <option value="Descending">${Descending}</option> </select> </div> </div> </form> </div> </div> ',c.innerHTML=i.ZP.translateHtml(y,"core"),function(e,t){e.querySelector(".selectSortBy").innerHTML=t.map((function(e){return'<option value="'+e.value+'">'+e.name+"</option>"})).join("")}(c,e.sortOptions),f=c,d=e.settings,f.querySelector("form").addEventListener("submit",s),f.querySelector(".selectSortOrder").value=d.sortOrder,f.querySelector(".selectSortBy").value=d.sortBy,c.querySelector(".btnCancel").addEventListener("click",(function(){n.default.close(c)})),o.Z.tv&&u(c.querySelector(".formDialogContent"),!1,!0),c.querySelector("form").addEventListener("change",(function(){v=!0}),!0),n.default.open(c).then((function(){if(o.Z.tv&&u(c.querySelector(".formDialogContent"),!1,!1),v)return function(e,t){l.setFilter(t+"-sortorder",e.querySelector(".selectSortOrder").value),l.setFilter(t+"-sortby",e.querySelector(".selectSortBy").value)}(c,e.settingsKey),void t();r()}))}))}}])&&c(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}()}}]);