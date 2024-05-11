"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[79214,79617,96084,28312,1998],{25583:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}}),a(44962),a(86584),a(78557),a(96054),a(90076),a(83994),a(82367),a(63855);var n=a(56869),i=a(9482),o=(a(77157),a(31293),a(98959),a(63001),a(10353),a(89100)),r=a(41177);function l(){n.Ay.show();var e=this;return $(e).parents(".page"),ApiClient.getServerConfiguration().then((function(t){t.ServerName=$("#txtServerName",e).val(),t.UICulture=$("#selectLocalizationLanguage",e).val(),t.CachePath=e.querySelector("#txtCachePath").value,t.MetadataPath=$("#txtMetadataPath",e).val(),t.MetadataNetworkPath=$("#txtMetadataNetworkPath",e).val(),t.QuickConnectAvailable=e.querySelector("#chkQuickConnectAvailable").checked,t.LibraryScanFanoutConcurrency=parseInt(e.querySelector("#txtLibraryScanFanoutConcurrency").value||"0",10),t.ParallelImageEncodingLimit=parseInt(e.querySelector("#txtParallelImageEncodingLimit").value||"0",10),ApiClient.updateServerConfiguration(t).then((function(){ApiClient.getNamedConfiguration(s).then((function(t){t.LoginDisclaimer=e.querySelector("#txtLoginDisclaimer").value,t.CustomCss=e.querySelector("#txtCustomCss").value,t.SplashscreenEnabled=e.querySelector("#chkSplashScreenAvailable").checked,ApiClient.updateNamedConfiguration(s,t).then((function(){o.default.processServerConfigurationUpdateResult()}))}))}),(function(){(0,r.A)(i.Ay.translate("ErrorDefault")),o.default.processServerConfigurationUpdateResult()}))})),!1}var s="branding";function c(e){$("#btnSelectCachePath",e).on("click.selectDirectory",(function(){Promise.resolve().then(a.bind(a,21840)).then((function(t){var a=new(0,t.default);a.show({callback:function(t){t&&(e.querySelector("#txtCachePath").value=t),a.close()},validateWriteable:!0,header:i.Ay.translate("HeaderSelectServerCachePath"),instruction:i.Ay.translate("HeaderSelectServerCachePathHelp")})}))})),$("#btnSelectMetadataPath",e).on("click.selectDirectory",(function(){Promise.resolve().then(a.bind(a,21840)).then((function(t){var a=new(0,t.default);a.show({path:$("#txtMetadataPath",e).val(),networkSharePath:$("#txtMetadataNetworkPath",e).val(),callback:function(t,n){t&&$("#txtMetadataPath",e).val(t),n&&$("#txtMetadataNetworkPath",e).val(n),a.close()},validateWriteable:!0,header:i.Ay.translate("HeaderSelectMetadataPath"),instruction:i.Ay.translate("HeaderSelectMetadataPathHelp")})}))})),$(".dashboardGeneralForm",e).off("submit",l).on("submit",l),e.addEventListener("viewshow",(function(){var t=ApiClient.getServerConfiguration(),a=ApiClient.getJSON(ApiClient.getUrl("Localization/Options")),i=ApiClient.getSystemInfo();Promise.all([t,a,i]).then((function(t){var a,i,o,r;a=e,i=t[0],o=t[1],r=t[2],a.querySelector("#txtServerName").value=r.ServerName,a.querySelector("#txtCachePath").value=r.CachePath||"",a.querySelector("#chkQuickConnectAvailable").checked=!0===i.QuickConnectAvailable,$("#txtMetadataPath",a).val(r.InternalMetadataPath||""),$("#txtMetadataNetworkPath",a).val(r.MetadataNetworkPath||""),$("#selectLocalizationLanguage",a).html(o.map((function(e){return'<option value="'+e.Value+'">'+e.Name+"</option>"}))).val(i.UICulture),a.querySelector("#txtLibraryScanFanoutConcurrency").value=i.LibraryScanFanoutConcurrency||"",a.querySelector("#txtParallelImageEncodingLimit").value=i.ParallelImageEncodingLimit||"",n.Ay.hide()})),ApiClient.getNamedConfiguration(s).then((function(t){e.querySelector("#txtLoginDisclaimer").value=t.LoginDisclaimer||"",e.querySelector("#txtCustomCss").value=t.CustomCss||"",e.querySelector("#chkSplashScreenAvailable").checked=!0===t.SplashscreenEnabled}))}))}},63001:function(e,t,a){var n=a(46782),i=a(34789),o=a(79617),r=(a(69177),Object.create(HTMLSelectElement.prototype));function l(){return!(!i.A.edgeUwp&&!i.A.xboxOne&&(i.A.tizen||i.A.orsay||i.A.web0s||!i.A.tv&&n.A.tv))}function s(e){var t=c(e),a=t?t.textContent||t.innerText:null;o.default.show({items:e.options,positionTo:e,title:a}).then((function(t){!function(e,t){e.value=t}(e,t),function(e){var t=new Event("change",{bubbles:!1,cancelable:!0});e.dispatchEvent(t)}(e)}))}function c(e){for(var t=e.previousSibling;t&&"LABEL"!==t.tagName;)t=t.previousSibling;return t}function u(){var e=c(this);e&&e.classList.add("selectLabelFocused")}function d(){var e=c(this);e&&e.classList.remove("selectLabelFocused")}function h(e){e.button||l()||(e.preventDefault(),s(this))}function v(e){switch(e.keyCode){case 13:return void(l()||(e.preventDefault(),s(this)));case 37:case 38:case 39:case 40:return void(n.A.tv&&e.preventDefault())}}var f=0;r.createdCallback=function(){this.id||(this.id="embyselect"+f,f++),this.classList.add("emby-select-withcolor"),n.A.tv&&this.classList.add("emby-select-focusscale"),this.addEventListener("mousedown",h),this.addEventListener("keydown",v),this.addEventListener("focus",u),this.addEventListener("blur",d)},r.attachedCallback=function(){var e;if(!this.classList.contains("emby-select")){this.classList.add("emby-select");var t,a=this.ownerDocument.createElement("label");a.innerText=this.getAttribute("label")||"",a.classList.add("selectLabel"),a.htmlFor=this.id,null===(e=this.parentNode)||void 0===e||e.insertBefore(a,this),this.classList.contains("emby-select-withcolor")&&(null===(t=this.parentNode)||void 0===t||t.insertAdjacentHTML("beforeend",'<div class="selectArrowContainer"><div style="visibility:hidden;display:none;">0</div><span class="selectArrow material-icons keyboard_arrow_down" aria-hidden="true"></span></div>'))}},r.setLabel=function(e){var t;(null===(t=this.parentNode)||void 0===t?void 0:t.querySelector("label")).innerText=e},document.registerElement("emby-select",{prototype:r,extends:"select"})},31293:function(e,t,a){function n(e,t){var a,n=this;function i(){if((!n.lineHeight||n.lineHeight<=0)&&(e.rows=1,a=function(e){for(var t=window.getComputedStyle(e,null),a=0,n=0,i=["paddingTop","paddingBottom"];n<i.length;n++)a+=parseInt(t[i[n]],10);return a}(e),n.rows=e.rows||1,n.lineHeight=e.scrollHeight/n.rows-a/n.rows,n.maxAllowedHeight=n.lineHeight*t-a),n.lineHeight<=0)return e.style.overflowY="scroll",e.style.height="auto",void(e.rows=3);var i=0;e.scrollHeight-a>n.maxAllowedHeight?(e.style.overflowY="scroll",i=n.maxAllowedHeight):(e.style.overflowY="hidden",e.style.height="auto",i=e.scrollHeight),e.style.height=i+"px"}void 0===t&&(t=999),e.addEventListener("input",i),e.addEventListener("focus",i),e.addEventListener("valueset",i),i()}a(36947),a(36457),a(96054),a(69177),a(98959);var i=Object.create(HTMLTextAreaElement.prototype),o=0;if(Object.getOwnPropertyDescriptor&&Object.defineProperty){var r=Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype,"value");if(null!=r&&r.configurable){var l=r.set;r.set=function(e){l.call(this,e),this.dispatchEvent(new CustomEvent("valueset",{bubbles:!1,cancelable:!1}))},Object.defineProperty(HTMLTextAreaElement.prototype,"value",r)}}i.createdCallback=function(){this.id||(this.id="embytextarea"+o,o++)},i.attachedCallback=function(){if(!this.classList.contains("emby-textarea")){this.rows=1,this.classList.add("emby-textarea");var e=this.parentNode,t=this.ownerDocument.createElement("label");t.innerText=this.getAttribute("label")||"",t.classList.add("textareaLabel"),t.htmlFor=this.id,e.insertBefore(t,this),this.addEventListener("focus",(function(){t.classList.add("textareaLabelFocused"),t.classList.remove("textareaLabelUnfocused")})),this.addEventListener("blur",(function(){t.classList.remove("textareaLabelFocused"),t.classList.add("textareaLabelUnfocused")})),this.label=function(e){t.innerText=e},new n(this)}},document.registerElement("emby-textarea",{prototype:i,extends:"textarea"})},79617:function(e,t,a){a.r(t),a.d(t,{show:function(){return d}});var n=a(22696),i=a.n(n),o=a(79754),r=a(46782),l=a(9482),s=a(47629),c=(a(10353),function(e){var t="function"==typeof Symbol&&Symbol.iterator,a=t&&e[t],n=0;if(a)return a.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")});function u(e,t,n){Promise.resolve().then(a.bind(a,46345)).then((function(a){var i=n?"on":"off";a.centerFocus[i](e,t)})).catch((function(e){console.warn("Error in centerFocus",e)}))}function d(e){var t,a,n,d={removeOnClose:!0,enableHistory:e.enableHistory,scrollY:!1};r.A.tv?(d.size="fullscreen",n=!0,d.autoFocus=!0):(d.modal=!1,d.entryAnimation=e.entryAnimation,d.exitAnimation=e.exitAnimation,d.entryAnimationDuration=e.entryAnimationDuration||140,d.exitAnimationDuration=e.exitAnimationDuration||100,d.autoFocus=!1);var h=o.default.createDialog(d);n?h.classList.add("actionsheet-fullscreen"):h.classList.add("actionsheet-not-fullscreen"),h.classList.add("actionSheet"),e.dialogClass&&h.classList.add(e.dialogClass);var v="",f=r.A.tv?"scrollY smoothScrollY hiddenScrollY":"scrollY",m="";e.items.length>20&&(m+="min-width:"+(s.Ay.getWindowSize().innerWidth>=300?240:200)+"px;");var b,y=!1,p=[];try{for(var g=c(e.items),S=g.next();!S.done;S=g.next())(b=(L=S.value).icon||(L.selected?"check":null))&&(y=!0),p.push(b||"")}catch(e){t={error:e}}finally{try{S&&!S.done&&(a=g.return)&&a.call(g)}finally{if(t)throw t.error}}r.A.tv&&(v+='<button is="paper-icon-button-light" class="btnCloseActionSheet hide-mouse-idle-tv" tabindex="-1" title="'.concat(l.Ay.translate("ButtonBack"),'">\n                     <span class="material-icons arrow_back" aria-hidden="true"></span>\n                 </button>'));var x=e.title&&!y;x||r.A.tv?v+='<div class="actionSheetContent actionSheetContent-centered">':v+='<div class="actionSheetContent">',e.title&&(v+='<h1 class="actionSheetTitle">'+i()(e.title)+"</h1>"),e.text&&(v+='<p class="actionSheetText">'+i()(e.text)+"</p>");var A="actionSheetScroller";r.A.tv&&(A+=" actionSheetScroller-tv focuscontainer-x focuscontainer-y"),v+='<div class="'+A+" "+f+'" style="'+m+'">';var C="listItem listItem-button actionSheetMenuItem";(e.border||e.shaded)&&(C+=" listItem-border"),e.menuItemClass&&(C+=" "+e.menuItemClass),r.A.tv&&(C+=" listItem-focusscale"),r.A.mobile&&(C+=" actionsheet-xlargeFont");for(var w=0;w<e.items.length;w++){var L;(L=e.items[w]).divider?v+='<div class="actionsheetDivider"></div>':(v+="<button"+(L.selected&&r.A.tv?" autoFocus":"")+' is="emby-button" type="button" class="'+C+'" data-id="'+(null==L.id||""===L.id?L.value:L.id)+'">',(b=p[w])?v+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons '.concat(b,'" aria-hidden="true"></span>'):y&&!x&&(v+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons check" aria-hidden="true" style="visibility:hidden;"></span>'),v+='<div class="listItemBody actionsheetListItemBody">',v+='<div class="listItemBodyText actionSheetItemText">',v+=i()(L.name||L.textContent||L.innerText),v+="</div>",L.secondaryText&&(v+='<div class="listItemBodyText secondary">'.concat(i()(L.secondaryText),"</div>")),v+="</div>",L.asideText&&(v+='<div class="listItemAside actionSheetItemAsideText">'.concat(i()(L.asideText),"</div>")),v+="</button>")}if(e.showCancel&&(v+='<div class="buttons">',v+='<button is="emby-button" type="button" class="btnCloseActionSheet">'.concat(l.Ay.translate("ButtonCancel"),"</button>"),v+="</div>"),v+="</div>",h.innerHTML=v,r.A.tv){var k=h.querySelector(".actionSheetScroller");k&&u(k,!1,!0)}var I=h.querySelector(".btnCloseActionSheet");I&&I.addEventListener("click",(function(){o.default.close(h)}));var P,E=null;return e.timeout&&(P=setTimeout((function(){o.default.close(h)}),e.timeout)),new Promise((function(t,a){var n=!1;h.addEventListener("click",(function(a){var i=s.Ay.parentWithClass(a.target,"actionSheetMenuItem");i&&(E=i.getAttribute("data-id"),e.resolveOnClick&&(Array.isArray(e.resolveOnClick)?-1!==e.resolveOnClick.indexOf(E)&&(t(E),n=!0):(t(E),n=!0)),o.default.close(h))})),h.addEventListener("close",(function(){if(r.A.tv){var i=h.querySelector(".actionSheetScroller");i&&u(i,!1,!1)}P&&(clearTimeout(P),P=void 0),n||(null!=E?(e.callback&&e.callback(E),t(E)):a("ActionSheet closed without resolving"))})),o.default.open(h).catch((function(e){console.warn("DialogHelper.open error",e)}));var i=e.positionTo&&"fullscreen"!==d.size?function(e,t,a){var n=s.Ay.getWindowSize(),i=n.innerHeight,o=n.innerWidth,r=function(e){var t,a,n=[];if(!document)return n;try{for(var i=c(e),o=i.next();!o.done;o=i.next()){var r=o.value.getBoundingClientRect();n.push({top:r.top,left:r.left,width:r.width,height:r.height})}}catch(e){t={error:e}}finally{try{o&&!o.done&&(a=i.return)&&a.call(i)}finally{if(t)throw t.error}}return n}([e])[0];"top"!==t.positionY&&(r.top+=(r.height||0)/2),r.left+=(r.width||0)/2;var l=a.offsetHeight||300,u=a.offsetWidth||160;r.top-=l/2,r.left-=u/2;var d=r.left+u-o,h=r.top+l-i;return d>0&&(r.left-=d+20),h>0&&(r.top-=h+20),r.top+=t.offsetTop||0,r.left+=t.offsetLeft||0,r.top=Math.max(r.top,10),r.left=Math.max(r.left,10),r}(e.positionTo,e,h):null;i&&(h.style.position="fixed",h.style.margin="0",h.style.left=i.left+"px",h.style.top=i.top+"px")}))}t.default={show:d}}}]);