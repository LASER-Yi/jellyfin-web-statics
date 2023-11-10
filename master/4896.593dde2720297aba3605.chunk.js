"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4896,12801,49213,3346,31473,5424],{12801:function(e,t,n){n.r(t),n.d(t,{show:function(){return v}}),n(13227),n(81414),n(37666),n(14011),n(11431),n(44901),n(88646),n(54134),n(91270),n(59139),n(56187),n(38690),n(89228);var i=n(65009),o=n.n(i),s=n(93355),a=n(30325),l=n(94994),r=n(72365);function c(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){l=!0,s=e},f:function(){try{a||null==n.return||n.return()}finally{if(l)throw s}}}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function u(e,t,i){Promise.resolve().then(n.bind(n,54517)).then((function(n){var o=i?"on":"off";n.centerFocus[o](e,t)}))}function v(e){var t,n={removeOnClose:!0,enableHistory:e.enableHistory,scrollY:!1};a.Z.tv?(n.size="fullscreen",t=!0,n.autoFocus=!0):(n.modal=!1,n.entryAnimation=e.entryAnimation,n.exitAnimation=e.exitAnimation,n.entryAnimationDuration=e.entryAnimationDuration||140,n.exitAnimationDuration=e.exitAnimationDuration||100,n.autoFocus=!1);var i=s.default.createDialog(n);t?i.classList.add("actionsheet-fullscreen"):i.classList.add("actionsheet-not-fullscreen"),i.classList.add("actionSheet"),e.dialogClass&&i.classList.add(e.dialogClass);var d="",v=a.Z.tv?"scrollY smoothScrollY hiddenScrollY":"scrollY",h="";e.items.length>20&&(h+="min-width:"+(r.ZP.getWindowSize().innerWidth>=300?240:200)+"px;");var p,m,f=!1,y=[],b=c(e.items);try{for(b.s();!(m=b.n()).done;){var S=m.value;(p=S.icon||(S.selected?"check":null))&&(f=!0),y.push(p||"")}}catch(e){b.e(e)}finally{b.f()}a.Z.tv&&(d+='<button is="paper-icon-button-light" class="btnCloseActionSheet hide-mouse-idle-tv" tabindex="-1" title="'.concat(l.ZP.translate("ButtonBack"),'">\n                     <span class="material-icons arrow_back" aria-hidden="true"></span>\n                 </button>'));var g=e.title&&!f;g||a.Z.tv?d+='<div class="actionSheetContent actionSheetContent-centered">':d+='<div class="actionSheetContent">',e.title&&(d+='<h1 class="actionSheetTitle">'+o()(e.title)+"</h1>"),e.text&&(d+='<p class="actionSheetText">'+o()(e.text)+"</p>");var C="actionSheetScroller";a.Z.tv&&(C+=" actionSheetScroller-tv focuscontainer-x focuscontainer-y"),d+='<div class="'+C+" "+v+'" style="'+h+'">';var L="listItem listItem-button actionSheetMenuItem";(e.border||e.shaded)&&(L+=" listItem-border"),e.menuItemClass&&(L+=" "+e.menuItemClass),a.Z.tv&&(L+=" listItem-focusscale"),a.Z.mobile&&(L+=" actionsheet-xlargeFont");for(var T=0;T<e.items.length;T++){var w=e.items[T];w.divider?d+='<div class="actionsheetDivider"></div>':(d+="<button"+(w.selected&&a.Z.tv?" autoFocus":"")+' is="emby-button" type="button" class="'+L+'" data-id="'+(null==w.id||""===w.id?w.value:w.id)+'">',(p=y[T])?d+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons '.concat(p,'" aria-hidden="true"></span>'):f&&!g&&(d+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons check" aria-hidden="true" style="visibility:hidden;"></span>'),d+='<div class="listItemBody actionsheetListItemBody">',d+='<div class="listItemBodyText actionSheetItemText">',d+=o()(w.name||w.textContent||w.innerText),d+="</div>",w.secondaryText&&(d+='<div class="listItemBodyText secondary">'.concat(o()(w.secondaryText),"</div>")),d+="</div>",w.asideText&&(d+='<div class="listItemAside actionSheetItemAsideText">'.concat(o()(w.asideText),"</div>")),d+="</button>")}e.showCancel&&(d+='<div class="buttons">',d+='<button is="emby-button" type="button" class="btnCloseActionSheet">'.concat(l.ZP.translate("ButtonCancel"),"</button>"),d+="</div>"),d+="</div>",i.innerHTML=d,a.Z.tv&&u(i.querySelector(".actionSheetScroller"),!1,!0);var x,A,P=i.querySelector(".btnCloseActionSheet");return P&&P.addEventListener("click",(function(){s.default.close(i)})),e.timeout&&(A=setTimeout((function(){s.default.close(i)}),e.timeout)),new Promise((function(t,o){var l;i.addEventListener("click",(function(n){var o=r.ZP.parentWithClass(n.target,"actionSheetMenuItem");o&&(x=o.getAttribute("data-id"),e.resolveOnClick&&(e.resolveOnClick.indexOf?-1!==e.resolveOnClick.indexOf(x)&&(t(x),l=!0):(t(x),l=!0)),s.default.close(i))})),i.addEventListener("close",(function(){a.Z.tv&&u(i.querySelector(".actionSheetScroller"),!1,!1),A&&(clearTimeout(A),A=null),l||(null!=x?(e.callback&&e.callback(x),t(x)):o("ActionSheet closed without resolving"))})),s.default.open(i);var d=e.positionTo&&"fullscreen"!==n.size?function(e,t){var n=r.ZP.getWindowSize(),i=n.innerHeight,o=n.innerWidth,s=function(e){var t=[];if(!document)return t;var n,i=c(e);try{for(i.s();!(n=i.n()).done;){var o=n.value.getBoundingClientRect();t.push({top:o.top,left:o.left,width:o.width,height:o.height})}}catch(e){i.e(e)}finally{i.f()}return t}([e.positionTo])[0];"top"!==e.positionY&&(s.top+=(s.height||0)/2),s.left+=(s.width||0)/2;var a=t.offsetHeight||300,l=t.offsetWidth||160;s.top-=a/2,s.left-=l/2;var d=s.left+l-o,u=s.top+a-i;return d>0&&(s.left-=d+20),u>0&&(s.top-=u+20),s.top+=e.offsetTop||0,s.left+=e.offsetLeft||0,s.top=Math.max(s.top,10),s.left=Math.max(s.left,10),s}(e,i):null;d&&(i.style.position="fixed",i.style.margin=0,i.style.left=d.left+"px",i.style.top=d.top+"px")}))}n(38228),t.default={show:v}},4896:function(e,t,n){n.r(t),n.d(t,{default:function(){return L}}),n(13227),n(81414),n(37666),n(14011),n(11431);var i,o,s,a=n(93355),l=n(94994),r=n(30325),c=n(28540),d=n(54517),u=n(61693),v=(n(38228),n(12291),n(62033),n(15856),n(61414),n(18613)),h='<div class="formDialogHeader"> <button is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1" title="${ButtonBack}"><span class="material-icons arrow_back" aria-hidden="true"></span></button> <h3 class="formDialogHeaderTitle"> ${HeaderSeriesOptions} </h3> </div> <div class="formDialogContent smoothScrollY"> <div class="dialogContentInner dialog-content-centered" style="padding-top:2em"> <form style="max-width:none"> <div class="selectContainer"> <select is="emby-select" class="selectShowType" label="${LabelRecord}"> <option value="new">${NewEpisodesOnly}</option> <option value="all">${AllEpisodes}</option> </select> </div> <div class="checkboxContainer checkboxContainer-withDescription"> <label> <input type="checkbox" is="emby-checkbox" class="chkSkipEpisodesInLibrary"/> <span>${SkipEpisodesAlreadyInMyLibrary}</span> </label> <div class="fieldDescription checkboxFieldDescription">${SkipEpisodesAlreadyInMyLibraryHelp}</div> </div> <div class="selectContainer"> <select is="emby-select" class="selectChannels" label="${LabelChannels}"> <option class="optionChannelOnly" value="one">${OneChannel}</option> <option value="all">${AllChannels}</option> </select> </div> <div class="selectContainer"> <select is="emby-select" class="selectAirTime" label="${LabelAirTime}"> <option class="optionAroundTime" value="original"></option> <option value="any">${Anytime}</option> </select> </div> <div class="selectContainer"> <select is="emby-select" class="selectKeepUpTo" label="${LabelKeepUpTo}"></select> </div> <div class="inputContainer"> <div class="flex align-items-center"> <div class="flex-grow"> <input is="emby-input" type="number" id="txtPrePaddingMinutes" pattern="[0-9]*" required="required" min="0" step="1" label="${LabelStartWhenPossible}"/> </div> <div class="fieldDescription" style="margin-left:.5em;font-size:90%;margin-top:1.3em"> ${MinutesBefore} </div> </div> </div> <div class="inputContainer"> <div class="flex align-items-center"> <div class="flex-grow"> <input is="emby-input" type="number" id="txtPostPaddingMinutes" pattern="[0-9]*" required="required" min="0" step="1" label="${LabelStopWhenPossible}"/> </div> <div class="fieldDescription" style="margin-left:.5em;font-size:90%;margin-top:1.3em"> ${MinutesAfter} </div> </div> </div> <br/> <div class="formDialogFooter"> <button is="emby-button" type="submit" class="raised btnSubmit block formDialogFooterItem button-submit hide"> <span>${Save}</span> </button> <button is="emby-button" type="button" class="raised btnCancelRecording block formDialogFooterItem button-cancel" style="white-space:nowrap"> <span>${HeaderCancelRecording}</span> </button> </div> </form> </div> </div> ',p=!1,m=!1;function f(e,t){e.querySelector("#txtPrePaddingMinutes").value=t.PrePaddingSeconds/60,e.querySelector("#txtPostPaddingMinutes").value=t.PostPaddingSeconds/60,e.querySelector(".selectChannels").value=t.RecordAnyChannel?"all":"one",e.querySelector(".selectAirTime").value=t.RecordAnyTime?"any":"original",e.querySelector(".selectShowType").value=t.RecordNewOnly?"new":"all",e.querySelector(".chkSkipEpisodesInLibrary").checked=t.SkipEpisodesInLibrary,e.querySelector(".selectKeepUpTo").value=t.KeepUpTo||0,t.ChannelName||t.ChannelNumber?e.querySelector(".optionChannelOnly").innerText=l.ZP.translate("ChannelNameOnly",t.ChannelName||t.ChannelNumber):e.querySelector(".optionChannelOnly").innerHTML=l.ZP.translate("OneChannel"),e.querySelector(".optionAroundTime").innerHTML=l.ZP.translate("AroundTime",u.ZP.getDisplayTime(u.ZP.parseISO8601Date(t.StartDate))),c.ZP.hide()}function y(e){p=!0,m=e,a.default.close(i)}function b(e){var t=this,n=v.Z.getApiClient(s);return n.getLiveTvSeriesTimer(o).then((function(e){e.PrePaddingSeconds=60*t.querySelector("#txtPrePaddingMinutes").value,e.PostPaddingSeconds=60*t.querySelector("#txtPostPaddingMinutes").value,e.RecordAnyChannel="all"===t.querySelector(".selectChannels").value,e.RecordAnyTime="any"===t.querySelector(".selectAirTime").value,e.RecordNewOnly="new"===t.querySelector(".selectShowType").value,e.SkipEpisodesInLibrary=t.querySelector(".chkSkipEpisodesInLibrary").checked,e.KeepUpTo=t.querySelector(".selectKeepUpTo").value,n.updateLiveTvSeriesTimer(e)})),e.preventDefault(),!1}function S(e){!function(e){for(var t="",n=0;n<=50;n++)t+='<option value="'+n+'">'+(0===n?l.ZP.translate("AsManyAsPossible"):1===n?l.ZP.translate("ValueOneEpisode"):l.ZP.translate("ValueEpisodeCount",n))+"</option>";e.querySelector(".selectKeepUpTo").innerHTML=t}(e),e.querySelector(".btnCancel").addEventListener("click",(function(){y(!1)})),e.querySelector(".btnCancelRecording").addEventListener("click",(function(){var e,t;(e=v.Z.getApiClient(s),t=o,new Promise((function(i,o){n.e(30531).then(n.bind(n,30531)).then((function(n){n.default.cancelSeriesTimerWithConfirmation(t,e.serverId()).then(i,o)}))}))).then((function(){y(!0)}))})),e.querySelector("form").addEventListener("submit",b)}function g(e,t){var n=v.Z.getApiClient(s);c.ZP.show(),"string"==typeof t?(o=t,n.getLiveTvSeriesTimer(t).then((function(t){f(e,t),c.ZP.hide()}))):t&&(o=t.Id,f(e,t),c.ZP.hide())}function C(){this.querySelector(".btnSubmit").click()}var L={show:function(e,t,n){return new Promise((function(o,u){p=!1,m=!1,s=t,c.ZP.show(),n=n||{};var v={removeOnClose:!0,scrollY:!1};r.Z.tv?v.size="fullscreen":v.size="small";var f=a.default.createDialog(v);f.classList.add("formDialog"),f.classList.add("recordingDialog"),r.Z.tv||(f.style["min-width"]="20%");var y="";y+=l.ZP.translateHtml(h,"core"),f.innerHTML=y,!1===n.enableCancel&&f.querySelector(".formDialogFooter").classList.add("hide"),i=f,f.addEventListener("closing",(function(){m||this.querySelector(".btnSubmit").click()})),f.addEventListener("close",(function(){p?o({updated:!0,deleted:m}):u()})),r.Z.tv&&d.default.centerFocus.on(f.querySelector(".formDialogContent"),!1),S(f),g(f,e),a.default.open(f)}))},embed:function(e,t,n){p=!1,m=!1,s=t,c.ZP.show(),n=n||{};var o={removeOnClose:!0,scrollY:!1};r.Z.tv?o.size="fullscreen":o.size="small";var a=n.context;a.classList.add("hide"),a.innerHTML=l.ZP.translateHtml(h,"core"),a.querySelector(".formDialogHeader").classList.add("hide"),a.querySelector(".formDialogFooter").classList.add("hide"),a.querySelector(".formDialogContent").className="",a.querySelector(".dialogContentInner").className="",a.classList.remove("hide"),a.removeEventListener("change",C),a.addEventListener("change",C),i=a,S(a),g(a,e)}}},15856:function(e,t,n){var i=n(30325),o=n(57366),s=n(12801),a=(n(67752),Object.create(HTMLSelectElement.prototype));function l(){return!(!o.Z.edgeUwp&&!o.Z.xboxOne&&(o.Z.tizen||o.Z.orsay||o.Z.web0s||!o.Z.tv&&i.Z.tv))}function r(e){var t=c(e),n=t?t.textContent||t.innerText:null;s.default.show({items:e.options,positionTo:e,title:n}).then((function(t){!function(e,t){e.value=t}(e,t),function(e){var t=document.createEvent("HTMLEvents");t.initEvent("change",!1,!0),e.dispatchEvent(t)}(e)}))}function c(e){for(var t=e.previousSibling;t&&"LABEL"!==t.tagName;)t=t.previousSibling;return t}function d(){var e=c(this);e&&e.classList.add("selectLabelFocused")}function u(){var e=c(this);e&&e.classList.remove("selectLabelFocused")}function v(e){e.button||l()||(e.preventDefault(),r(this))}function h(e){switch(e.keyCode){case 13:return void(l()||(e.preventDefault(),r(this)));case 37:case 38:case 39:case 40:return void(i.Z.tv&&e.preventDefault())}}var p=0;a.createdCallback=function(){this.id||(this.id="embyselect"+p,p++),this.classList.add("emby-select-withcolor"),i.Z.tv&&this.classList.add("emby-select-focusscale"),this.addEventListener("mousedown",v),this.addEventListener("keydown",h),this.addEventListener("focus",d),this.addEventListener("blur",u)},a.attachedCallback=function(){var e;if(!this.classList.contains("emby-select")){this.classList.add("emby-select");var t,n=this.ownerDocument.createElement("label");n.innerText=this.getAttribute("label")||"",n.classList.add("selectLabel"),n.htmlFor=this.id,null===(e=this.parentNode)||void 0===e||e.insertBefore(n,this),this.classList.contains("emby-select-withcolor")&&(null===(t=this.parentNode)||void 0===t||t.insertAdjacentHTML("beforeend",'<div class="selectArrowContainer"><div style="visibility:hidden;display:none;">0</div><span class="selectArrow material-icons keyboard_arrow_down" aria-hidden="true"></span></div>'))}},a.setLabel=function(e){var t;(null===(t=this.parentNode)||void 0===t?void 0:t.querySelector("label")).innerText=e},document.registerElement("emby-select",{prototype:a,extends:"select"})}}]);