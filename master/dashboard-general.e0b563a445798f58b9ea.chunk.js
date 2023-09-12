"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[44083,12801,49213,31473],{12801:function(e,t,n){n.r(t),n.d(t,{show:function(){return h}}),n(5769),n(63238),n(61418),n(17460),n(14078),n(27471),n(72410),n(15610),n(52077),n(25901),n(92189),n(91047);var a=n(65009),i=n.n(a),o=n(93355),r=n(30325),l=n(94994),s=n(72365);function c(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return r=e.done,e},e:function(e){l=!0,o=e},f:function(){try{r||null==n.return||n.return()}finally{if(l)throw o}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function d(e,t,a){Promise.resolve().then(n.bind(n,54517)).then((function(n){var i=a?"on":"off";n.centerFocus[i](e,t)}))}function h(e){var t,n={removeOnClose:!0,enableHistory:e.enableHistory,scrollY:!1};r.Z.tv?(n.size="fullscreen",t=!0,n.autoFocus=!0):(n.modal=!1,n.entryAnimation=e.entryAnimation,n.exitAnimation=e.exitAnimation,n.entryAnimationDuration=e.entryAnimationDuration||140,n.exitAnimationDuration=e.exitAnimationDuration||100,n.autoFocus=!1);var a=o.default.createDialog(n);t?a.classList.add("actionsheet-fullscreen"):a.classList.add("actionsheet-not-fullscreen"),a.classList.add("actionSheet"),e.dialogClass&&a.classList.add(e.dialogClass);var u="",h=r.Z.tv?"scrollY smoothScrollY hiddenScrollY":"scrollY",v="";e.items.length>20&&(v+="min-width:"+(s.ZP.getWindowSize().innerWidth>=300?240:200)+"px;");var f,m,p=!1,b=[],y=c(e.items);try{for(y.s();!(m=y.n()).done;){var g=m.value;(f=g.icon||(g.selected?"check":null))&&(p=!0),b.push(f||"")}}catch(e){y.e(e)}finally{y.f()}r.Z.tv&&(u+='<button is="paper-icon-button-light" class="btnCloseActionSheet hide-mouse-idle-tv" tabindex="-1" title="'.concat(l.ZP.translate("ButtonBack"),'">\n                     <span class="material-icons arrow_back" aria-hidden="true"></span>\n                 </button>'));var S=e.title&&!p;S||r.Z.tv?u+='<div class="actionSheetContent actionSheetContent-centered">':u+='<div class="actionSheetContent">',e.title&&(u+='<h1 class="actionSheetTitle">'+i()(e.title)+"</h1>"),e.text&&(u+='<p class="actionSheetText">'+i()(e.text)+"</p>");var x="actionSheetScroller";r.Z.tv&&(x+=" actionSheetScroller-tv focuscontainer-x focuscontainer-y"),u+='<div class="'+x+" "+h+'" style="'+v+'">';var C="listItem listItem-button actionSheetMenuItem";(e.border||e.shaded)&&(C+=" listItem-border"),e.menuItemClass&&(C+=" "+e.menuItemClass),r.Z.tv&&(C+=" listItem-focusscale"),r.Z.mobile&&(C+=" actionsheet-xlargeFont");for(var w=0;w<e.items.length;w++){var L=e.items[w];L.divider?u+='<div class="actionsheetDivider"></div>':(u+="<button"+(L.selected&&r.Z.tv?" autoFocus":"")+' is="emby-button" type="button" class="'+C+'" data-id="'+(null==L.id||""===L.id?L.value:L.id)+'">',(f=b[w])?u+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons '.concat(f,'" aria-hidden="true"></span>'):p&&!S&&(u+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons check" aria-hidden="true" style="visibility:hidden;"></span>'),u+='<div class="listItemBody actionsheetListItemBody">',u+='<div class="listItemBodyText actionSheetItemText">',u+=i()(L.name||L.textContent||L.innerText),u+="</div>",L.secondaryText&&(u+='<div class="listItemBodyText secondary">'.concat(i()(L.secondaryText),"</div>")),u+="</div>",L.asideText&&(u+='<div class="listItemAside actionSheetItemAsideText">'.concat(i()(L.asideText),"</div>")),u+="</button>")}e.showCancel&&(u+='<div class="buttons">',u+='<button is="emby-button" type="button" class="btnCloseActionSheet">'.concat(l.ZP.translate("ButtonCancel"),"</button>"),u+="</div>"),u+="</div>",a.innerHTML=u,r.Z.tv&&d(a.querySelector(".actionSheetScroller"),!1,!0);var P,A,k=a.querySelector(".btnCloseActionSheet");return k&&k.addEventListener("click",(function(){o.default.close(a)})),e.timeout&&(A=setTimeout((function(){o.default.close(a)}),e.timeout)),new Promise((function(t,i){var l;a.addEventListener("click",(function(n){var i=s.ZP.parentWithClass(n.target,"actionSheetMenuItem");i&&(P=i.getAttribute("data-id"),e.resolveOnClick&&(e.resolveOnClick.indexOf?-1!==e.resolveOnClick.indexOf(P)&&(t(P),l=!0):(t(P),l=!0)),o.default.close(a))})),a.addEventListener("close",(function(){r.Z.tv&&d(a.querySelector(".actionSheetScroller"),!1,!1),A&&(clearTimeout(A),A=null),l||(null!=P?(e.callback&&e.callback(P),t(P)):i("ActionSheet closed without resolving"))})),o.default.open(a);var u=e.positionTo&&"fullscreen"!==n.size?function(e,t){var n=s.ZP.getWindowSize(),a=n.innerHeight,i=n.innerWidth,o=function(e){var t=[];if(!document)return t;var n,a=c(e);try{for(a.s();!(n=a.n()).done;){var i=n.value.getBoundingClientRect();t.push({top:i.top,left:i.left,width:i.width,height:i.height})}}catch(e){a.e(e)}finally{a.f()}return t}([e.positionTo])[0];"top"!==e.positionY&&(o.top+=(o.height||0)/2),o.left+=(o.width||0)/2;var r=t.offsetHeight||300,l=t.offsetWidth||160;o.top-=r/2,o.left-=l/2;var u=o.left+l-i,d=o.top+r-a;return u>0&&(o.left-=u+20),d>0&&(o.top-=d+20),o.top+=e.offsetTop||0,o.left+=e.offsetLeft||0,o.top=Math.max(o.top,10),o.left=Math.max(o.left,10),o}(e,a):null;u&&(a.style.position="fixed",a.style.margin=0,a.style.left=u.left+"px",a.style.top=u.top+"px")}))}n(38228),t.default={show:h}},4282:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}}),n(5769),n(61013),n(32081),n(63238),n(61418),n(17460),n(14078),n(51789);var a=n(28540),i=n(94994),o=(n(12291),n(85511),n(62033),n(15856),n(38228),n(60635)),r=n(37099);function l(){a.ZP.show();var e=this;return $(e).parents(".page"),ApiClient.getServerConfiguration().then((function(t){t.ServerName=$("#txtServerName",e).val(),t.UICulture=$("#selectLocalizationLanguage",e).val(),t.CachePath=e.querySelector("#txtCachePath").value,t.MetadataPath=$("#txtMetadataPath",e).val(),t.MetadataNetworkPath=$("#txtMetadataNetworkPath",e).val(),t.QuickConnectAvailable=e.querySelector("#chkQuickConnectAvailable").checked,t.ParallelImageEncodingLimit=parseInt(e.querySelector("#txtParallelImageEncodingLimit").value||"0",10),ApiClient.updateServerConfiguration(t).then((function(){ApiClient.getNamedConfiguration(s).then((function(t){t.LoginDisclaimer=e.querySelector("#txtLoginDisclaimer").value,t.CustomCss=e.querySelector("#txtCustomCss").value,t.SplashscreenEnabled=e.querySelector("#chkSplashScreenAvailable").checked,ApiClient.updateNamedConfiguration(s,t).then((function(){o.default.processServerConfigurationUpdateResult()}))}))}),(function(){(0,r.Z)(i.ZP.translate("ErrorDefault")),o.default.processServerConfigurationUpdateResult()}))})),!1}var s="branding";function c(e){$("#btnSelectCachePath",e).on("click.selectDirectory",(function(){Promise.resolve().then(n.bind(n,98043)).then((function(t){var n=new(0,t.default);n.show({callback:function(t){t&&(e.querySelector("#txtCachePath").value=t),n.close()},validateWriteable:!0,header:i.ZP.translate("HeaderSelectServerCachePath"),instruction:i.ZP.translate("HeaderSelectServerCachePathHelp")})}))})),$("#btnSelectMetadataPath",e).on("click.selectDirectory",(function(){Promise.resolve().then(n.bind(n,98043)).then((function(t){var n=new(0,t.default);n.show({path:$("#txtMetadataPath",e).val(),networkSharePath:$("#txtMetadataNetworkPath",e).val(),callback:function(t,a){t&&$("#txtMetadataPath",e).val(t),a&&$("#txtMetadataNetworkPath",e).val(a),n.close()},validateWriteable:!0,header:i.ZP.translate("HeaderSelectMetadataPath"),instruction:i.ZP.translate("HeaderSelectMetadataPathHelp"),enableNetworkSharePath:!0})}))})),$(".dashboardGeneralForm",e).off("submit",l).on("submit",l),e.addEventListener("viewshow",(function(){var t=ApiClient.getServerConfiguration(),n=ApiClient.getJSON(ApiClient.getUrl("Localization/Options")),i=ApiClient.getSystemInfo();Promise.all([t,n,i]).then((function(t){var n,i,o,r;n=e,i=t[0],o=t[1],r=t[2],n.querySelector("#txtServerName").value=r.ServerName,n.querySelector("#txtCachePath").value=r.CachePath||"",n.querySelector("#chkQuickConnectAvailable").checked=!0===i.QuickConnectAvailable,$("#txtMetadataPath",n).val(r.InternalMetadataPath||""),$("#txtMetadataNetworkPath",n).val(r.MetadataNetworkPath||""),$("#selectLocalizationLanguage",n).html(o.map((function(e){return'<option value="'+e.Value+'">'+e.Name+"</option>"}))).val(i.UICulture),n.querySelector("#txtParallelImageEncodingLimit").value=i.ParallelImageEncodingLimit||"",a.ZP.hide()})),ApiClient.getNamedConfiguration(s).then((function(t){e.querySelector("#txtLoginDisclaimer").value=t.LoginDisclaimer||"",e.querySelector("#txtCustomCss").value=t.CustomCss||"",e.querySelector("#chkSplashScreenAvailable").checked=!0===t.SplashscreenEnabled}))}))}},15856:function(e,t,n){var a=n(30325),i=n(57366),o=n(12801),r=(n(67752),Object.create(HTMLSelectElement.prototype));function l(){return!(!i.Z.edgeUwp&&!i.Z.xboxOne&&(i.Z.tizen||i.Z.orsay||i.Z.web0s||!i.Z.tv&&a.Z.tv))}function s(e){var t=c(e),n=t?t.textContent||t.innerText:null;o.default.show({items:e.options,positionTo:e,title:n}).then((function(t){!function(e,t){e.value=t}(e,t),function(e){var t=document.createEvent("HTMLEvents");t.initEvent("change",!1,!0),e.dispatchEvent(t)}(e)}))}function c(e){for(var t=e.previousSibling;t&&"LABEL"!==t.tagName;)t=t.previousSibling;return t}function u(){var e=c(this);e&&e.classList.add("selectLabelFocused")}function d(){var e=c(this);e&&e.classList.remove("selectLabelFocused")}function h(e){e.button||l()||(e.preventDefault(),s(this))}function v(e){switch(e.keyCode){case 13:return void(l()||(e.preventDefault(),s(this)));case 37:case 38:case 39:case 40:return void(a.Z.tv&&e.preventDefault())}}var f=0;r.createdCallback=function(){this.id||(this.id="embyselect"+f,f++),this.classList.add("emby-select-withcolor"),a.Z.tv&&this.classList.add("emby-select-focusscale"),this.addEventListener("mousedown",h),this.addEventListener("keydown",v),this.addEventListener("focus",u),this.addEventListener("blur",d)},r.attachedCallback=function(){var e;if(!this.classList.contains("emby-select")){this.classList.add("emby-select");var t,n=this.ownerDocument.createElement("label");n.innerText=this.getAttribute("label")||"",n.classList.add("selectLabel"),n.htmlFor=this.id,null===(e=this.parentNode)||void 0===e||e.insertBefore(n,this),this.classList.contains("emby-select-withcolor")&&(null===(t=this.parentNode)||void 0===t||t.insertAdjacentHTML("beforeend",'<div class="selectArrowContainer"><div style="visibility:hidden;display:none;">0</div><span class="selectArrow material-icons keyboard_arrow_down" aria-hidden="true"></span></div>'))}},r.setLabel=function(e){var t;(null===(t=this.parentNode)||void 0===t?void 0:t.querySelector("label")).innerText=e},document.registerElement("emby-select",{prototype:r,extends:"select"})},85511:function(e,t,n){function a(e,t){var n,a=this;function i(){if((!a.lineHeight||a.lineHeight<=0)&&(e.rows=1,n=function(e){for(var t=window.getComputedStyle(e,null),n=0,a=0,i=["paddingTop","paddingBottom"];a<i.length;a++)n+=parseInt(t[i[a]],10);return n}(e),a.rows=e.rows||1,a.lineHeight=e.scrollHeight/a.rows-n/a.rows,a.maxAllowedHeight=a.lineHeight*t-n),a.lineHeight<=0)return e.style.overflowY="scroll",e.style.height="auto",void(e.rows=3);var i=0;e.scrollHeight-n>a.maxAllowedHeight?(e.style.overflowY="scroll",i=a.maxAllowedHeight):(e.style.overflowY="hidden",e.style.height="auto",i=e.scrollHeight),e.style.height=i+"px"}void 0===t&&(t=999),e.addEventListener("input",i),e.addEventListener("focus",i),e.addEventListener("valueset",i),i()}n(32081),n(20252),n(99785),n(67752),n(62033);var i=Object.create(HTMLTextAreaElement.prototype),o=0;if(Object.getOwnPropertyDescriptor&&Object.defineProperty){var r=Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype,"value");if(null!=r&&r.configurable){var l=r.set;r.set=function(e){l.call(this,e),this.dispatchEvent(new CustomEvent("valueset",{bubbles:!1,cancelable:!1}))},Object.defineProperty(HTMLTextAreaElement.prototype,"value",r)}}i.createdCallback=function(){this.id||(this.id="embytextarea"+o,o++)},i.attachedCallback=function(){if(!this.classList.contains("emby-textarea")){this.rows=1,this.classList.add("emby-textarea");var e=this.parentNode,t=this.ownerDocument.createElement("label");t.innerText=this.getAttribute("label")||"",t.classList.add("textareaLabel"),t.htmlFor=this.id,e.insertBefore(t,this),this.addEventListener("focus",(function(){t.classList.add("textareaLabelFocused"),t.classList.remove("textareaLabelUnfocused")})),this.addEventListener("blur",(function(){t.classList.remove("textareaLabelFocused"),t.classList.add("textareaLabelUnfocused")})),this.label=function(e){t.innerText=e},new a(this)}},document.registerElement("emby-textarea",{prototype:i,extends:"textarea"})}}]);