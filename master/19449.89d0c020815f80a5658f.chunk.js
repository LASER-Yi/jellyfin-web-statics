"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[19449,12801,49213,5864,31473,18633],{12801:function(e,t,n){n.r(t),n.d(t,{show:function(){return v}}),n(13227),n(81414),n(37666),n(14011),n(11431),n(44901),n(88646),n(54134),n(91270),n(59139),n(56187),n(38690),n(89228);var o=n(65009),i=n.n(o),a=n(93355),l=n(30325),r=n(94994),s=n(72365);function c(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,r=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){r=!0,a=e},f:function(){try{l||null==n.return||n.return()}finally{if(r)throw a}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function d(e,t,o){Promise.resolve().then(n.bind(n,54517)).then((function(n){var i=o?"on":"off";n.centerFocus[i](e,t)}))}function v(e){var t,n={removeOnClose:!0,enableHistory:e.enableHistory,scrollY:!1};l.Z.tv?(n.size="fullscreen",t=!0,n.autoFocus=!0):(n.modal=!1,n.entryAnimation=e.entryAnimation,n.exitAnimation=e.exitAnimation,n.entryAnimationDuration=e.entryAnimationDuration||140,n.exitAnimationDuration=e.exitAnimationDuration||100,n.autoFocus=!1);var o=a.default.createDialog(n);t?o.classList.add("actionsheet-fullscreen"):o.classList.add("actionsheet-not-fullscreen"),o.classList.add("actionSheet"),e.dialogClass&&o.classList.add(e.dialogClass);var u="",v=l.Z.tv?"scrollY smoothScrollY hiddenScrollY":"scrollY",f="";e.items.length>20&&(f+="min-width:"+(s.ZP.getWindowSize().innerWidth>=300?240:200)+"px;");var m,h,b=!1,p=[],y=c(e.items);try{for(y.s();!(h=y.n()).done;){var S=h.value;(m=S.icon||(S.selected?"check":null))&&(b=!0),p.push(m||"")}}catch(e){y.e(e)}finally{y.f()}l.Z.tv&&(u+='<button is="paper-icon-button-light" class="btnCloseActionSheet hide-mouse-idle-tv" tabindex="-1" title="'.concat(r.ZP.translate("ButtonBack"),'">\n                     <span class="material-icons arrow_back" aria-hidden="true"></span>\n                 </button>'));var C=e.title&&!b;C||l.Z.tv?u+='<div class="actionSheetContent actionSheetContent-centered">':u+='<div class="actionSheetContent">',e.title&&(u+='<h1 class="actionSheetTitle">'+i()(e.title)+"</h1>"),e.text&&(u+='<p class="actionSheetText">'+i()(e.text)+"</p>");var g="actionSheetScroller";l.Z.tv&&(g+=" actionSheetScroller-tv focuscontainer-x focuscontainer-y"),u+='<div class="'+g+" "+v+'" style="'+f+'">';var I="listItem listItem-button actionSheetMenuItem";(e.border||e.shaded)&&(I+=" listItem-border"),e.menuItemClass&&(I+=" "+e.menuItemClass),l.Z.tv&&(I+=" listItem-focusscale"),l.Z.mobile&&(I+=" actionsheet-xlargeFont");for(var w=0;w<e.items.length;w++){var x=e.items[w];x.divider?u+='<div class="actionsheetDivider"></div>':(u+="<button"+(x.selected&&l.Z.tv?" autoFocus":"")+' is="emby-button" type="button" class="'+I+'" data-id="'+(null==x.id||""===x.id?x.value:x.id)+'">',(m=p[w])?u+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons '.concat(m,'" aria-hidden="true"></span>'):b&&!C&&(u+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons check" aria-hidden="true" style="visibility:hidden;"></span>'),u+='<div class="listItemBody actionsheetListItemBody">',u+='<div class="listItemBodyText actionSheetItemText">',u+=i()(x.name||x.textContent||x.innerText),u+="</div>",x.secondaryText&&(u+='<div class="listItemBodyText secondary">'.concat(i()(x.secondaryText),"</div>")),u+="</div>",x.asideText&&(u+='<div class="listItemAside actionSheetItemAsideText">'.concat(i()(x.asideText),"</div>")),u+="</button>")}e.showCancel&&(u+='<div class="buttons">',u+='<button is="emby-button" type="button" class="btnCloseActionSheet">'.concat(r.ZP.translate("ButtonCancel"),"</button>"),u+="</div>"),u+="</div>",o.innerHTML=u,l.Z.tv&&d(o.querySelector(".actionSheetScroller"),!1,!0);var T,Z,L=o.querySelector(".btnCloseActionSheet");return L&&L.addEventListener("click",(function(){a.default.close(o)})),e.timeout&&(Z=setTimeout((function(){a.default.close(o)}),e.timeout)),new Promise((function(t,i){var r;o.addEventListener("click",(function(n){var i=s.ZP.parentWithClass(n.target,"actionSheetMenuItem");i&&(T=i.getAttribute("data-id"),e.resolveOnClick&&(e.resolveOnClick.indexOf?-1!==e.resolveOnClick.indexOf(T)&&(t(T),r=!0):(t(T),r=!0)),a.default.close(o))})),o.addEventListener("close",(function(){l.Z.tv&&d(o.querySelector(".actionSheetScroller"),!1,!1),Z&&(clearTimeout(Z),Z=null),r||(null!=T?(e.callback&&e.callback(T),t(T)):i("ActionSheet closed without resolving"))})),a.default.open(o);var u=e.positionTo&&"fullscreen"!==n.size?function(e,t){var n=s.ZP.getWindowSize(),o=n.innerHeight,i=n.innerWidth,a=function(e){var t=[];if(!document)return t;var n,o=c(e);try{for(o.s();!(n=o.n()).done;){var i=n.value.getBoundingClientRect();t.push({top:i.top,left:i.left,width:i.width,height:i.height})}}catch(e){o.e(e)}finally{o.f()}return t}([e.positionTo])[0];"top"!==e.positionY&&(a.top+=(a.height||0)/2),a.left+=(a.width||0)/2;var l=t.offsetHeight||300,r=t.offsetWidth||160;a.top-=l/2,a.left-=r/2;var u=a.left+r-i,d=a.top+l-o;return u>0&&(a.left-=u+20),d>0&&(a.top-=d+20),a.top+=e.offsetTop||0,a.left+=e.offsetLeft||0,a.top=Math.max(a.top,10),a.left=Math.max(a.left,10),a}(e,o):null;u&&(o.style.position="fixed",o.style.margin=0,o.style.left=u.left+"px",o.style.top=u.top+"px")}))}n(38228),t.default={show:v}},19449:function(e,t,n){n.r(t),n(13227),n(96626),n(84159),n(81414),n(37666),n(14011),n(11431),n(26031),n(95822),n(56187),n(38690),n(11908),n(33096),n(89228);var o,i=n(65009),a=n.n(i),l=n(72365),r=n(93355),s=n(84597),c=n(30325),u=n(66560),d=n(94994),v=(n(38228),n(61414),n(12291),n(62033),n(15856),n(18613)),f=n(56663);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function h(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,b(o.key),o)}}function b(e){var t=function(e,t){if("object"!=m(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!=m(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==m(t)?t:String(t)}function p(e){s.ZP.show();var t=l.ZP.parentWithClass(this,"dialog"),n=t.querySelector("#selectCollectionToAddTo").value,i=v.Z.getApiClient(o);return n?function(e,t,n){var o=e.getUrl("Collections/".concat(n,"/Items"),{Ids:t.querySelector(".fldSelectedItemIds").value||""});e.ajax({type:"POST",url:o}).then((function(){s.ZP.hide(),t.submitted=!0,r.default.close(t),(0,f.Z)(d.ZP.translate("MessageItemsAdded"))}))}(i,t,n):function(e,t){var n=e.getUrl("Collections",{Name:t.querySelector("#txtNewCollectionName").value,IsLocked:!t.querySelector("#chkEnableInternetMetadata").checked,Ids:t.querySelector(".fldSelectedItemIds").value||""});e.ajax({type:"POST",url:n,dataType:"json"}).then((function(n){s.ZP.hide();var o=n.Id;t.submitted=!0,r.default.close(t),function(e,t){u.appRouter.showItem(t,e.serverId())}(e,o)}))}(i,t),e.preventDefault(),!1}function y(e){e.dispatchEvent(new CustomEvent("change",{}))}function S(e,t,o){Promise.resolve().then(n.bind(n,54517)).then((function(n){var i=o?"on":"off";n.centerFocus[i](e,t)}))}var C=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,(n=[{key:"show",value:function(e){var t=e.items||{};o=e.serverId;var n={removeOnClose:!0,scrollY:!1};c.Z.tv?n.size="fullscreen":n.size="small";var i=r.default.createDialog(n);i.classList.add("formDialog");var l="",u=t.length?d.ZP.translate("HeaderAddToCollection"):d.ZP.translate("NewCollection");return l+='<div class="formDialogHeader">',l+='<button is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1" title="'.concat(d.ZP.translate("ButtonBack"),'"><span class="material-icons arrow_back" aria-hidden="true"></span></button>'),l+='<h3 class="formDialogHeaderTitle">',l+=u,l+="</h3>",l+="</div>",l+=function(){var e="";return e+='<div class="formDialogContent smoothScrollY" style="padding-top:2em;">',e+='<div class="dialogContentInner dialog-content-centered">',e+='<form class="newCollectionForm" style="margin:auto;">',e+="<div>",e+=d.ZP.translate("NewCollectionHelp"),e+="</div>",e+='<div class="fldSelectCollection">',e+="<br/>",e+="<br/>",e+='<div class="selectContainer">',e+='<select is="emby-select" label="'.concat(d.ZP.translate("LabelCollection"),'" id="selectCollectionToAddTo" autofocus></select>'),e+="</div>",e+="</div>",e+='<div class="newCollectionInfo">',e+='<div class="inputContainer">',e+='<input is="emby-input" type="text" id="txtNewCollectionName" required="required" label="'.concat(d.ZP.translate("LabelName"),'" />'),e+='<div class="fieldDescription">'.concat(d.ZP.translate("NewCollectionNameExample"),"</div>"),e+="</div>",e+='<label class="checkboxContainer">',e+='<input is="emby-checkbox" type="checkbox" id="chkEnableInternetMetadata" />',e+="<span>".concat(d.ZP.translate("SearchForCollectionInternetMetadata"),"</span>"),e+="</label>",e+="</div>",e+='<div class="formDialogFooter">',e+='<button is="emby-button" type="submit" class="raised btnSubmit block formDialogFooterItem button-submit">'.concat(d.ZP.translate("ButtonOk"),"</button>"),e+="</div>",e+='<input type="hidden" class="fldSelectedItemIds" />',e+="</form>",(e+="</div>")+"</div>"}(),i.innerHTML=l,function(e,t){if(e.querySelector("#selectCollectionToAddTo").addEventListener("change",(function(){this.value?(e.querySelector(".newCollectionInfo").classList.add("hide"),e.querySelector("#txtNewCollectionName").removeAttribute("required")):(e.querySelector(".newCollectionInfo").classList.remove("hide"),e.querySelector("#txtNewCollectionName").setAttribute("required","required"))})),e.querySelector("form").addEventListener("submit",p),e.querySelector(".fldSelectedItemIds",e).value=t.join(","),t.length)e.querySelector(".fldSelectCollection").classList.remove("hide"),function(e){s.ZP.show();var t=e.querySelector("#selectCollectionToAddTo");e.querySelector(".newCollectionInfo").classList.add("hide");var n=v.Z.getApiClient(o);n.getItems(n.getCurrentUserId(),{Recursive:!0,IncludeItemTypes:"BoxSet",SortBy:"SortName",EnableTotalRecordCount:!1}).then((function(e){var n="";n+='<option value="">'.concat(d.ZP.translate("OptionNew"),"</option>"),n+=e.Items.map((function(e){return'<option value="'.concat(e.Id,'">').concat(a()(e.Name),"</option>")})),t.innerHTML=n,t.value="",y(t),s.ZP.hide()}))}(e);else{e.querySelector(".fldSelectCollection").classList.add("hide");var n=e.querySelector("#selectCollectionToAddTo");n.innerHTML="",n.value="",y(n)}}(i,t),i.querySelector(".btnCancel").addEventListener("click",(function(){r.default.close(i)})),c.Z.tv&&S(i.querySelector(".formDialogContent"),!1,!0),r.default.open(i).then((function(){return c.Z.tv&&S(i.querySelector(".formDialogContent"),!1,!1),i.submitted?Promise.resolve():Promise.reject()}))}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.default=C},15856:function(e,t,n){var o=n(30325),i=n(57366),a=n(12801),l=(n(67752),Object.create(HTMLSelectElement.prototype));function r(){return!(!i.Z.edgeUwp&&!i.Z.xboxOne&&(i.Z.tizen||i.Z.orsay||i.Z.web0s||!i.Z.tv&&o.Z.tv))}function s(e){var t=c(e),n=t?t.textContent||t.innerText:null;a.default.show({items:e.options,positionTo:e,title:n}).then((function(t){!function(e,t){e.value=t}(e,t),function(e){var t=document.createEvent("HTMLEvents");t.initEvent("change",!1,!0),e.dispatchEvent(t)}(e)}))}function c(e){for(var t=e.previousSibling;t&&"LABEL"!==t.tagName;)t=t.previousSibling;return t}function u(){var e=c(this);e&&e.classList.add("selectLabelFocused")}function d(){var e=c(this);e&&e.classList.remove("selectLabelFocused")}function v(e){e.button||r()||(e.preventDefault(),s(this))}function f(e){switch(e.keyCode){case 13:return void(r()||(e.preventDefault(),s(this)));case 37:case 38:case 39:case 40:return void(o.Z.tv&&e.preventDefault())}}var m=0;l.createdCallback=function(){this.id||(this.id="embyselect"+m,m++),this.classList.add("emby-select-withcolor"),o.Z.tv&&this.classList.add("emby-select-focusscale"),this.addEventListener("mousedown",v),this.addEventListener("keydown",f),this.addEventListener("focus",u),this.addEventListener("blur",d)},l.attachedCallback=function(){var e;if(!this.classList.contains("emby-select")){this.classList.add("emby-select");var t,n=this.ownerDocument.createElement("label");n.innerText=this.getAttribute("label")||"",n.classList.add("selectLabel"),n.htmlFor=this.id,null===(e=this.parentNode)||void 0===e||e.insertBefore(n,this),this.classList.contains("emby-select-withcolor")&&(null===(t=this.parentNode)||void 0===t||t.insertAdjacentHTML("beforeend",'<div class="selectArrowContainer"><div style="visibility:hidden;display:none;">0</div><span class="selectArrow material-icons keyboard_arrow_down" aria-hidden="true"></span></div>'))}},l.setLabel=function(e){var t;(null===(t=this.parentNode)||void 0===t?void 0:t.querySelector("label")).innerText=e},document.registerElement("emby-select",{prototype:l,extends:"select"})}}]);