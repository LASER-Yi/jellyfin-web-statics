"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[32379,80454,49213,33390],{34300:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}}),n(13227),n(44901),n(96626),n(2663),n(81414),n(37666),n(14011),n(11431);var r=n(94994),i=n(84597),o=n(72365),l=(n(62033),n(38228),n(12291),n(15856),n(60635)),a=n(28457);function s(e){return-1!==["nextpvr"].indexOf(e||"")}function c(e,t){var n=e.querySelector(".selectType"),r=t.Type||"";t.Source&&s(t.Source)&&(r=t.Source),n.value=r,u.call(n),e.querySelector(".txtDevicePath").value=t.Url||"",e.querySelector(".txtFriendlyName").value=t.FriendlyName||"",e.querySelector(".txtUserAgent").value=t.UserAgent||"",e.querySelector(".fldDeviceId").value=t.DeviceId||"",e.querySelector(".chkFavorite").checked=t.ImportFavoritesOnly,e.querySelector(".chkTranscode").checked=t.AllowHWTranscoding,e.querySelector(".chkStreamLoop").checked=t.EnableStreamLooping,e.querySelector(".chkIgnoreDts").checked=t.IgnoreDts,e.querySelector(".txtTunerCount").value=t.TunerCount||"0"}function u(){var e=this.value,t=o.ZP.parentWithClass(this,"page"),n="hdhomerun"===e,i="hdhomerun"===e,l="hdhomerun"===e,a="hdhomerun"===e,s="m3u"===e,c="m3u"===e,u="m3u"===e,d="m3u"===e,h="m3u"===e,v="other"!==e,f=s,y=t.querySelector(".txtDevicePath");a?(y.label(r.ZP.translate("LabelTunerIpAddress")),t.querySelector(".fldPath").classList.remove("hide")):s?(y.label(r.ZP.translate("LabelFileOrUrl")),t.querySelector(".fldPath").classList.remove("hide")):t.querySelector(".fldPath").classList.add("hide"),f?(t.querySelector(".btnSelectPath").classList.remove("hide"),t.querySelector(".txtDevicePath").setAttribute("required","required")):(t.querySelector(".btnSelectPath").classList.add("hide"),t.querySelector(".txtDevicePath").removeAttribute("required")),h?t.querySelector(".fldUserAgent").classList.remove("hide"):t.querySelector(".fldUserAgent").classList.add("hide"),l?t.querySelector(".fldFavorites").classList.remove("hide"):t.querySelector(".fldFavorites").classList.add("hide"),i?t.querySelector(".fldTranscode").classList.remove("hide"):t.querySelector(".fldTranscode").classList.add("hide"),c?t.querySelector(".fldStreamLoop").classList.remove("hide"):t.querySelector(".fldStreamLoop").classList.add("hide"),u?t.querySelector(".fldIgnoreDts").classList.remove("hide"):t.querySelector(".fldIgnoreDts").classList.add("hide"),d?(t.querySelector(".fldTunerCount").classList.remove("hide"),t.querySelector(".txtTunerCount").setAttribute("required","required")):(t.querySelector(".fldTunerCount").classList.add("hide"),t.querySelector(".txtTunerCount").removeAttribute("required")),n?t.querySelector(".drmMessage").classList.remove("hide"):t.querySelector(".drmMessage").classList.add("hide"),v?t.querySelector(".button-submit").classList.remove("hide"):t.querySelector(".button-submit").classList.add("hide")}function d(e,t){t.id||e.querySelector(".btnDetect").classList.remove("hide"),e.addEventListener("viewshow",(function(){var n=t.id;(function(e,t){return ApiClient.getJSON(ApiClient.getUrl("LiveTv/TunerHosts/Types")).then((function(n){var i=e.querySelector(".selectType"),o="";o+=n.map((function(e){return'<option value="'+e.Id+'">'+e.Name+"</option>"})).join(""),o+='<option value="other">',o+=r.ZP.translate("TabOther"),o+="</option>",i.innerHTML=o,i.disabled=null!=t,i.value="",u.call(i)}))})(e,n).then((function(){!function(e,t){e.querySelector(".txtDevicePath").value="",e.querySelector(".chkFavorite").checked=!1,e.querySelector(".txtDevicePath").value="",t&&ApiClient.getNamedConfiguration("livetv").then((function(n){var r=n.TunerHosts.filter((function(e){return e.Id===t}))[0];c(e,r)}))}(e,n)}))})),e.querySelector("form").addEventListener("submit",(function(t){return function(e){i.ZP.show();var t={Type:e.querySelector(".selectType").value,Url:e.querySelector(".txtDevicePath").value||null,UserAgent:e.querySelector(".txtUserAgent").value||null,FriendlyName:e.querySelector(".txtFriendlyName").value||null,DeviceId:e.querySelector(".fldDeviceId").value||null,TunerCount:e.querySelector(".txtTunerCount").value||0,ImportFavoritesOnly:e.querySelector(".chkFavorite").checked,AllowHWTranscoding:e.querySelector(".chkTranscode").checked,EnableStreamLooping:e.querySelector(".chkStreamLoop").checked,IgnoreDts:e.querySelector(".chkIgnoreDts").checked};s(t.Type)&&(t.Source=t.Type,t.Type="m3u"),(0,a.a)("id")&&(t.Id=(0,a.a)("id")),ApiClient.ajax({type:"POST",url:ApiClient.getUrl("LiveTv/TunerHosts"),data:JSON.stringify(t),contentType:"application/json"}).then((function(){l.default.processServerConfigurationUpdateResult(),l.default.navigate("dashboard/livetv")}),(function(){i.ZP.hide(),l.default.alert({message:r.ZP.translate("ErrorSavingTvProvider")})}))}(e),t.preventDefault(),t.stopPropagation(),!1})),e.querySelector(".selectType").addEventListener("change",u),e.querySelector(".btnDetect").addEventListener("click",(function(){Promise.all([n.e(75841),n.e(87080),n.e(29252)]).then(n.bind(n,27021)).then((function(e){return(new(0,e.default)).show({serverId:ApiClient.serverId()})})).then((function(t){c(e,t)}))})),e.querySelector(".btnSelectPath").addEventListener("click",(function(){Promise.resolve().then(n.bind(n,98043)).then((function(t){var n=new(0,t.default);n.show({includeFiles:!0,callback:function(t){t&&(e.querySelector(".txtDevicePath").value=t),n.close()}})}))}))}},15856:function(e,t,n){var r=n(30325),i=n(57366),o=n(80454),l=(n(67752),Object.create(HTMLSelectElement.prototype));function a(){return!(!i.Z.edgeUwp&&!i.Z.xboxOne&&(i.Z.tizen||i.Z.orsay||i.Z.web0s||!i.Z.tv&&r.Z.tv))}function s(e){var t=c(e),n=t?t.textContent||t.innerText:null;o.default.show({items:e.options,positionTo:e,title:n}).then((function(t){!function(e,t){e.value=t}(e,t),function(e){var t=new Event("change",{bubbles:!1,cancelable:!0});e.dispatchEvent(t)}(e)}))}function c(e){for(var t=e.previousSibling;t&&"LABEL"!==t.tagName;)t=t.previousSibling;return t}function u(){var e=c(this);e&&e.classList.add("selectLabelFocused")}function d(){var e=c(this);e&&e.classList.remove("selectLabelFocused")}function h(e){e.button||a()||(e.preventDefault(),s(this))}function v(e){switch(e.keyCode){case 13:return void(a()||(e.preventDefault(),s(this)));case 37:case 38:case 39:case 40:return void(r.Z.tv&&e.preventDefault())}}var f=0;l.createdCallback=function(){this.id||(this.id="embyselect"+f,f++),this.classList.add("emby-select-withcolor"),r.Z.tv&&this.classList.add("emby-select-focusscale"),this.addEventListener("mousedown",h),this.addEventListener("keydown",v),this.addEventListener("focus",u),this.addEventListener("blur",d)},l.attachedCallback=function(){var e;if(!this.classList.contains("emby-select")){this.classList.add("emby-select");var t,n=this.ownerDocument.createElement("label");n.innerText=this.getAttribute("label")||"",n.classList.add("selectLabel"),n.htmlFor=this.id,null===(e=this.parentNode)||void 0===e||e.insertBefore(n,this),this.classList.contains("emby-select-withcolor")&&(null===(t=this.parentNode)||void 0===t||t.insertAdjacentHTML("beforeend",'<div class="selectArrowContainer"><div style="visibility:hidden;display:none;">0</div><span class="selectArrow material-icons keyboard_arrow_down" aria-hidden="true"></span></div>'))}},l.setLabel=function(e){var t;(null===(t=this.parentNode)||void 0===t?void 0:t.querySelector("label")).innerText=e},document.registerElement("emby-select",{prototype:l,extends:"select"})},80454:function(e,t,n){n.r(t),n.d(t,{show:function(){return d}});var r=n(65009),i=n.n(r),o=n(93355),l=n(30325),a=n(94994),s=n(72365),c=(n(38228),function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")});function u(e,t,r){Promise.resolve().then(n.bind(n,35545)).then((function(n){var i=r?"on":"off";n.centerFocus[i](e,t)})).catch((function(e){console.warn("Error in centerFocus",e)}))}function d(e){var t,n,r,d={removeOnClose:!0,enableHistory:e.enableHistory,scrollY:!1};l.Z.tv?(d.size="fullscreen",r=!0,d.autoFocus=!0):(d.modal=!1,d.entryAnimation=e.entryAnimation,d.exitAnimation=e.exitAnimation,d.entryAnimationDuration=e.entryAnimationDuration||140,d.exitAnimationDuration=e.exitAnimationDuration||100,d.autoFocus=!1);var h=o.default.createDialog(d);r?h.classList.add("actionsheet-fullscreen"):h.classList.add("actionsheet-not-fullscreen"),h.classList.add("actionSheet"),e.dialogClass&&h.classList.add(e.dialogClass);var v="",f=l.Z.tv?"scrollY smoothScrollY hiddenScrollY":"scrollY",y="";e.items.length>20&&(y+="min-width:"+(s.ZP.getWindowSize().innerWidth>=300?240:200)+"px;");var m,S=!1,p=[];try{for(var b=c(e.items),L=b.next();!L.done;L=b.next())(m=(I=L.value).icon||(I.selected?"check":null))&&(S=!0),p.push(m||"")}catch(e){t={error:e}}finally{try{L&&!L.done&&(n=b.return)&&n.call(b)}finally{if(t)throw t.error}}l.Z.tv&&(v+='<button is="paper-icon-button-light" class="btnCloseActionSheet hide-mouse-idle-tv" tabindex="-1" title="'.concat(a.ZP.translate("ButtonBack"),'">\n                     <span class="material-icons arrow_back" aria-hidden="true"></span>\n                 </button>'));var q=e.title&&!S;q||l.Z.tv?v+='<div class="actionSheetContent actionSheetContent-centered">':v+='<div class="actionSheetContent">',e.title&&(v+='<h1 class="actionSheetTitle">'+i()(e.title)+"</h1>"),e.text&&(v+='<p class="actionSheetText">'+i()(e.text)+"</p>");var g="actionSheetScroller";l.Z.tv&&(g+=" actionSheetScroller-tv focuscontainer-x focuscontainer-y"),v+='<div class="'+g+" "+f+'" style="'+y+'">';var T="listItem listItem-button actionSheetMenuItem";(e.border||e.shaded)&&(T+=" listItem-border"),e.menuItemClass&&(T+=" "+e.menuItemClass),l.Z.tv&&(T+=" listItem-focusscale"),l.Z.mobile&&(T+=" actionsheet-xlargeFont");for(var x=0;x<e.items.length;x++){var I;(I=e.items[x]).divider?v+='<div class="actionsheetDivider"></div>':(v+="<button"+(I.selected&&l.Z.tv?" autoFocus":"")+' is="emby-button" type="button" class="'+T+'" data-id="'+(null==I.id||""===I.id?I.value:I.id)+'">',(m=p[x])?v+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons '.concat(m,'" aria-hidden="true"></span>'):S&&!q&&(v+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons check" aria-hidden="true" style="visibility:hidden;"></span>'),v+='<div class="listItemBody actionsheetListItemBody">',v+='<div class="listItemBodyText actionSheetItemText">',v+=i()(I.name||I.textContent||I.innerText),v+="</div>",I.secondaryText&&(v+='<div class="listItemBodyText secondary">'.concat(i()(I.secondaryText),"</div>")),v+="</div>",I.asideText&&(v+='<div class="listItemAside actionSheetItemAsideText">'.concat(i()(I.asideText),"</div>")),v+="</button>")}if(e.showCancel&&(v+='<div class="buttons">',v+='<button is="emby-button" type="button" class="btnCloseActionSheet">'.concat(a.ZP.translate("ButtonCancel"),"</button>"),v+="</div>"),v+="</div>",h.innerHTML=v,l.Z.tv){var w=h.querySelector(".actionSheetScroller");w&&u(w,!1,!0)}var C=h.querySelector(".btnCloseActionSheet");C&&C.addEventListener("click",(function(){o.default.close(h)}));var k,A=null;return e.timeout&&(k=setTimeout((function(){o.default.close(h)}),e.timeout)),new Promise((function(t,n){var r=!1;h.addEventListener("click",(function(n){var i=s.ZP.parentWithClass(n.target,"actionSheetMenuItem");i&&(A=i.getAttribute("data-id"),e.resolveOnClick&&(Array.isArray(e.resolveOnClick)?-1!==e.resolveOnClick.indexOf(A)&&(t(A),r=!0):(t(A),r=!0)),o.default.close(h))})),h.addEventListener("close",(function(){if(l.Z.tv){var i=h.querySelector(".actionSheetScroller");i&&u(i,!1,!1)}k&&(clearTimeout(k),k=void 0),r||(null!=A?(e.callback&&e.callback(A),t(A)):n("ActionSheet closed without resolving"))})),o.default.open(h).catch((function(e){console.warn("DialogHelper.open error",e)}));var i=e.positionTo&&"fullscreen"!==d.size?function(e,t,n){var r=s.ZP.getWindowSize(),i=r.innerHeight,o=r.innerWidth,l=function(e){var t,n,r=[];if(!document)return r;try{for(var i=c(e),o=i.next();!o.done;o=i.next()){var l=o.value.getBoundingClientRect();r.push({top:l.top,left:l.left,width:l.width,height:l.height})}}catch(e){t={error:e}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return r}([e])[0];"top"!==t.positionY&&(l.top+=(l.height||0)/2),l.left+=(l.width||0)/2;var a=n.offsetHeight||300,u=n.offsetWidth||160;l.top-=a/2,l.left-=u/2;var d=l.left+u-o,h=l.top+a-i;return d>0&&(l.left-=d+20),h>0&&(l.top-=h+20),l.top+=t.offsetTop||0,l.left+=t.offsetLeft||0,l.top=Math.max(l.top,10),l.left=Math.max(l.left,10),l}(e.positionTo,e,h):null;i&&(h.style.position="fixed",h.style.margin="0",h.style.left=i.left+"px",h.style.top=i.top+"px")}))}t.default={show:d}}}]);