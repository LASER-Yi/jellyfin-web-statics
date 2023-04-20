"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[49906,12801,49213,31473,56948],{12801:function(e,t,n){n.r(t),n.d(t,{show:function(){return v}}),n(5769),n(63238),n(61418),n(17460),n(14078),n(27471),n(72410),n(15610),n(52077),n(25901),n(92189),n(91047);var i=n(65009),o=n.n(i),r=n(93355),a=n(30325),s=n(94994),c=n(72365);function l(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,r=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw r}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function d(e,t,i){Promise.resolve().then(n.bind(n,54517)).then((function(n){var o=i?"on":"off";n.centerFocus[o](e,t)}))}function v(e){var t,n={removeOnClose:!0,enableHistory:e.enableHistory,scrollY:!1};a.Z.tv?(n.size="fullscreen",t=!0,n.autoFocus=!0):(n.modal=!1,n.entryAnimation=e.entryAnimation,n.exitAnimation=e.exitAnimation,n.entryAnimationDuration=e.entryAnimationDuration||140,n.exitAnimationDuration=e.exitAnimationDuration||100,n.autoFocus=!1);var i=r.default.createDialog(n);t?i.classList.add("actionsheet-fullscreen"):i.classList.add("actionsheet-not-fullscreen"),i.classList.add("actionSheet"),e.dialogClass&&i.classList.add(e.dialogClass);var u="",v=a.Z.tv?"scrollY smoothScrollY hiddenScrollY":"scrollY",f="";e.items.length>20&&(f+="min-width:"+(c.ZP.getWindowSize().innerWidth>=300?240:200)+"px;");var h,y,m=!1,b=[],p=l(e.items);try{for(p.s();!(y=p.n()).done;){var g=y.value;(h=g.icon||(g.selected?"check":null))&&(m=!0),b.push(h||"")}}catch(e){p.e(e)}finally{p.f()}a.Z.tv&&(u+='<button is="paper-icon-button-light" class="btnCloseActionSheet hide-mouse-idle-tv" tabindex="-1" title="'.concat(s.ZP.translate("ButtonBack"),'">\n                     <span class="material-icons arrow_back" aria-hidden="true"></span>\n                 </button>'));var S=e.title&&!m;S||a.Z.tv?u+='<div class="actionSheetContent actionSheetContent-centered">':u+='<div class="actionSheetContent">',e.title&&(u+='<h1 class="actionSheetTitle">'+o()(e.title)+"</h1>"),e.text&&(u+='<p class="actionSheetText">'+o()(e.text)+"</p>");var w="actionSheetScroller";a.Z.tv&&(w+=" actionSheetScroller-tv focuscontainer-x focuscontainer-y"),u+='<div class="'+w+" "+v+'" style="'+f+'">';var k="listItem listItem-button actionSheetMenuItem";(e.border||e.shaded)&&(k+=" listItem-border"),e.menuItemClass&&(k+=" "+e.menuItemClass),a.Z.tv&&(k+=" listItem-focusscale"),a.Z.mobile&&(k+=" actionsheet-xlargeFont");for(var C=0;C<e.items.length;C++){var x=e.items[C];x.divider?u+='<div class="actionsheetDivider"></div>':(u+="<button"+(x.selected&&a.Z.tv?" autoFocus":"")+' is="emby-button" type="button" class="'+k+'" data-id="'+(null==x.id||""===x.id?x.value:x.id)+'">',(h=b[C])?u+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons '.concat(h,'" aria-hidden="true"></span>'):m&&!S&&(u+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons check" aria-hidden="true" style="visibility:hidden;"></span>'),u+='<div class="listItemBody actionsheetListItemBody">',u+='<div class="listItemBodyText actionSheetItemText">',u+=o()(x.name||x.textContent||x.innerText),u+="</div>",x.secondaryText&&(u+='<div class="listItemBodyText secondary">'.concat(o()(x.secondaryText),"</div>")),u+="</div>",x.asideText&&(u+='<div class="listItemAside actionSheetItemAsideText">'.concat(o()(x.asideText),"</div>")),u+="</button>")}e.showCancel&&(u+='<div class="buttons">',u+='<button is="emby-button" type="button" class="btnCloseActionSheet">'.concat(s.ZP.translate("ButtonCancel"),"</button>"),u+="</div>"),u+="</div>",i.innerHTML=u,a.Z.tv&&d(i.querySelector(".actionSheetScroller"),!1,!0);var L,T,I=i.querySelector(".btnCloseActionSheet");return I&&I.addEventListener("click",(function(){r.default.close(i)})),e.timeout&&(T=setTimeout((function(){r.default.close(i)}),e.timeout)),new Promise((function(t,o){var s;i.addEventListener("click",(function(n){var o=c.ZP.parentWithClass(n.target,"actionSheetMenuItem");o&&(L=o.getAttribute("data-id"),e.resolveOnClick&&(e.resolveOnClick.indexOf?-1!==e.resolveOnClick.indexOf(L)&&(t(L),s=!0):(t(L),s=!0)),r.default.close(i))})),i.addEventListener("close",(function(){a.Z.tv&&d(i.querySelector(".actionSheetScroller"),!1,!1),T&&(clearTimeout(T),T=null),s||(null!=L?(e.callback&&e.callback(L),t(L)):o("ActionSheet closed without resolving"))})),r.default.open(i);var u=e.positionTo&&"fullscreen"!==n.size?function(e,t){var n=c.ZP.getWindowSize(),i=n.innerHeight,o=n.innerWidth,r=function(e){var t=[];if(!document)return t;var n,i=l(e);try{for(i.s();!(n=i.n()).done;){var o=n.value.getBoundingClientRect();t.push({top:o.top,left:o.left,width:o.width,height:o.height})}}catch(e){i.e(e)}finally{i.f()}return t}([e.positionTo])[0];"top"!==e.positionY&&(r.top+=(r.height||0)/2),r.left+=(r.width||0)/2;var a=t.offsetHeight||300,s=t.offsetWidth||160;r.top-=a/2,r.left-=s/2;var u=r.left+s-o,d=r.top+a-i;return u>0&&(r.left-=u+20),d>0&&(r.top-=d+20),r.top+=e.offsetTop||0,r.left+=e.offsetLeft||0,r.top=Math.max(r.top,10),r.left=Math.max(r.left,10),r}(e,i):null;u&&(i.style.position="fixed",i.style.margin=0,i.style.left=u.left+"px",i.style.top=u.top+"px")}))}n(38228),t.default={show:v}},49906:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}}),n(72410),n(15610),n(52077),n(25901),n(92189),n(91047),n(19068),n(87211),n(95163),n(99785),n(92571),n(98010),n(20252),n(55849),n(14009),n(12699),n(5769),n(63238),n(61418),n(17460),n(14078),n(27471);var i=n(93355),o=n(30325),r=n(94994),a=n(60934);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function c(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,v(i.key),i)}}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return(t=v(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e){var t=function(e,t){if("object"!==s(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,"string");if("object"!==s(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===s(t)?t:String(t)}function f(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,r=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw r}}}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function y(e){return e.preventDefault(),!1}function m(e,t,i){Promise.resolve().then(n.bind(n,54517)).then((function(n){var o=i?"on":"off";n.centerFocus[o](e,t)}))}function b(e,t,n){var i=e.querySelector(t);n&&!i.classList.contains("hiddenFromViewSettings")?i.classList.remove("hide"):i.classList.add("hide")}n(12291),n(62033),n(38228),n(61414),n(15856);var p=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,(n=[{key:"show",value:function(e){return new Promise((function(t){var n={removeOnClose:!0,scrollY:!1};o.Z.tv?n.size="fullscreen":n.size="small";var s=i.default.createDialog(n);s.classList.add("formDialog");var c="";c+='<div class="formDialogHeader">',c+='<button is="paper-icon-button-light" class="btnCancel hide-mouse-idle-tv" tabindex="-1" title="'.concat(r.ZP.translate("ButtonBack"),'"><span class="material-icons arrow_back" aria-hidden="true"></span></button>'),c+='<h3 class="formDialogHeaderTitle">${Settings}</h3>',c+="</div>",c+='<div class="formDialogContent smoothScrollY" style="padding-top:2em"> <div class="dialogContentInner dialog-content-centered"> <form style="margin:auto"> <div class="verticalSection"> <div class="selectContainer viewSetting hide" data-settingname="imageType"> <select is="emby-select" label="${LabelImageType}" class="selectImageType"> <option value="primary">${Primary}</option> <option value="banner">${Banner}</option> <option value="disc">${Disc}</option> <option value="logo">${Logo}</option> <option value="thumb">${Thumb}</option> <option value="list">${List}</option> </select> </div> <div class="checkboxContainer viewSetting viewSetting-checkboxContainer hide chkTitleContainer" data-settingname="showTitle"> <label> <input is="emby-checkbox" type="checkbox" class="chkShowTitle"/> <span>${ShowTitle}</span> </label> </div> <div class="checkboxContainer viewSetting viewSetting-checkboxContainer hide chkYearContainer" data-settingname="showYear"> <label> <input is="emby-checkbox" type="checkbox" class="chkShowYear"/> <span>${ShowYear}</span> </label> </div> <div class="checkboxContainer viewSetting viewSetting-checkboxContainer hide" data-settingname="groupBySeries"> <label> <input is="emby-checkbox" type="checkbox" class="chkGroupBySeries"/> <span>${GroupBySeries}</span> </label> </div> <div class="checkboxContainer viewSetting viewSetting-checkboxContainer hide chkCardLayoutContainer" data-settingname="cardLayout"> <label> <input is="emby-checkbox" type="checkbox" class="chkEnableCardLayout"/> <span>${EnableCardLayout}</span> </label> </div> </div> </form> </div> </div> ',s.innerHTML=r.ZP.translateHtml(c,"core");var l,d,v=f(s.querySelectorAll(".viewSetting"));try{for(v.s();!(l=v.n()).done;){var h=l.value;-1===e.visibleSettings.indexOf(h.getAttribute("data-settingname"))?(h.classList.add("hide"),h.classList.add("hiddenFromViewSettings")):(h.classList.remove("hide"),h.classList.remove("hiddenFromViewSettings"))}}catch(e){v.e(e)}finally{v.f()}!function(e,t){e.querySelector("form").addEventListener("submit",y);var n,i=f(e.querySelectorAll(".viewSetting-checkboxContainer"));try{for(i.s();!(n=i.n()).done;){var o=n.value;o.querySelector("input").checked=t[o.getAttribute("data-settingname")]||!1}}catch(e){i.e(e)}finally{i.f()}e.querySelector(".selectImageType").value=t.imageType||"primary"}(s,e.settings),s.querySelector(".selectImageType").addEventListener("change",(function(){b(s,".chkTitleContainer","list"!==this.value&&"banner"!==this.value),b(s,".chkYearContainer","list"!==this.value&&"banner"!==this.value),b(s,".chkCardLayoutContainer","list"!==this.value&&"banner"!==this.value)})),s.querySelector(".btnCancel").addEventListener("click",(function(){i.default.close(s)})),o.Z.tv&&m(s.querySelector(".formDialogContent"),!1,!0),s.querySelector(".selectImageType").dispatchEvent(new CustomEvent("change",{})),s.querySelector("form").addEventListener("change",(function(){d=!0}),!0),i.default.open(s).then((function(){return o.Z.tv&&m(s.querySelector(".formDialogContent"),!1,!1),d?(function(e,t,n,i){if(i)i((function(t){return u(u({},t),{},{StartIndex:0,imageType:e.querySelector(".selectImageType").value,showTitle:e.querySelector(".chkShowTitle").checked||!1,showYear:e.querySelector(".chkShowYear").checked||!1,cardLayout:e.querySelector(".chkEnableCardLayout").checked||!1})}));else{var o,r=f(e.querySelectorAll(".viewSetting-checkboxContainer"));try{for(r.s();!(o=r.n()).done;){var s=o.value;a.set(n+"-"+s.getAttribute("data-settingname"),s.querySelector("input").checked)}}catch(e){r.e(e)}finally{r.f()}a.set(n+"-imageType",e.querySelector(".selectImageType").value)}}(s,e.settings,e.settingsKey,e.setviewsettings),t()):t()}))}))}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}()},15856:function(e,t,n){var i=n(30325),o=n(57366),r=n(12801),a=(n(67752),Object.create(HTMLSelectElement.prototype));function s(){return!(!o.Z.edgeUwp&&!o.Z.xboxOne&&(o.Z.tizen||o.Z.orsay||o.Z.web0s||!o.Z.tv&&i.Z.tv))}function c(e){var t=l(e),n=t?t.textContent||t.innerText:null;r.default.show({items:e.options,positionTo:e,title:n}).then((function(t){!function(e,t){e.value=t}(e,t),function(e){var t=document.createEvent("HTMLEvents");t.initEvent("change",!1,!0),e.dispatchEvent(t)}(e)}))}function l(e){for(var t=e.previousSibling;t&&"LABEL"!==t.tagName;)t=t.previousSibling;return t}function u(){var e=l(this);e&&e.classList.add("selectLabelFocused")}function d(){var e=l(this);e&&e.classList.remove("selectLabelFocused")}function v(e){e.button||s()||(e.preventDefault(),c(this))}function f(e){switch(e.keyCode){case 13:return void(s()||(e.preventDefault(),c(this)));case 37:case 38:case 39:case 40:return void(i.Z.tv&&e.preventDefault())}}var h=0;a.createdCallback=function(){this.id||(this.id="embyselect"+h,h++),this.classList.add("emby-select-withcolor"),i.Z.tv&&this.classList.add("emby-select-focusscale"),this.addEventListener("mousedown",v),this.addEventListener("keydown",f),this.addEventListener("focus",u),this.addEventListener("blur",d)},a.attachedCallback=function(){var e;if(!this.classList.contains("emby-select")){this.classList.add("emby-select");var t,n=this.ownerDocument.createElement("label");n.innerText=this.getAttribute("label")||"",n.classList.add("selectLabel"),n.htmlFor=this.id,null===(e=this.parentNode)||void 0===e||e.insertBefore(n,this),this.classList.contains("emby-select-withcolor")&&(null===(t=this.parentNode)||void 0===t||t.insertAdjacentHTML("beforeend",'<div class="selectArrowContainer"><div style="visibility:hidden;display:none;">0</div><span class="selectArrow material-icons keyboard_arrow_down" aria-hidden="true"></span></div>'))}},a.setLabel=function(e){var t;(null===(t=this.parentNode)||void 0===t?void 0:t.querySelector("label")).innerText=e},document.registerElement("emby-select",{prototype:a,extends:"select"})}}]);