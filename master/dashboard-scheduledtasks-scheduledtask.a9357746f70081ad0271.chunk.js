"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[53006,78130,49213,16160],{76293:function(e,t,i){i.r(t),i.d(t,{default:function(){return d}}),i(13227),i(96626),i(81414),i(37666),i(14011),i(11431),i(63402),i(63241),i(54112),i(72326);var n=i(34862),r=i(61693),a=i(72365),s=i(94994),l=(i(62033),i(38228),i(15856),i(3137)),o=i(91888),c={refreshScheduledTask:function(e){n.ZP.show();var t=(0,o.a)("id");ApiClient.getScheduledTask(t).then((function(t){c.loadScheduledTask(e,t)}))},loadScheduledTask:function(e,t){$(".taskName",e).html(t.Name),$("#pTaskDescription",e).html(t.Description),i.e(1826).then(i.bind(i,1826)).then((function(){c.loadTaskTriggers(e,t)})),n.ZP.hide()},loadTaskTriggers:function(e,t){var i="";i+='<div class="paperList">';for(var n=0,r=t.Triggers.length;n<r;n++){var a=t.Triggers[n];if(i+='<div class="listItem listItem-border">',i+='<span class="material-icons listItemIcon schedule" aria-hidden="true"></span>',a.MaxRuntimeTicks?i+='<div class="listItemBody two-line">':i+='<div class="listItemBody">',i+="<div class='listItemBodyText'>"+c.getTriggerFriendlyName(a)+"</div>",a.MaxRuntimeTicks){i+='<div class="listItemBodyText secondary">';var l=a.MaxRuntimeTicks/36e9;i+=1==l?s.ZP.translate("ValueTimeLimitSingleHour"):s.ZP.translate("ValueTimeLimitMultiHour",l),i+="</div>"}i+="</div>",i+='<button class="btnDeleteTrigger" data-index="'+n+'" type="button" is="paper-icon-button-light" title="'+s.ZP.translate("Delete")+'"><span class="material-icons delete" aria-hidden="true"></span></button>',i+="</div>"}i+="</div>",e.querySelector(".taskTriggers").innerHTML=i},getTriggerFriendlyName:function(e){if("DailyTrigger"==e.Type)return s.ZP.translate("DailyAt",c.getDisplayTime(e.TimeOfDayTicks));if("WeeklyTrigger"==e.Type)return s.ZP.translate("WeeklyAt",e.DayOfWeek,c.getDisplayTime(e.TimeOfDayTicks));if("SystemEventTrigger"==e.Type&&"WakeFromSleep"==e.SystemEvent)return s.ZP.translate("OnWakeFromSleep");if("IntervalTrigger"==e.Type){var t=e.IntervalTicks/36e9;return.25==t?s.ZP.translate("EveryXMinutes","15"):.5==t?s.ZP.translate("EveryXMinutes","30"):.75==t?s.ZP.translate("EveryXMinutes","45"):1==t?s.ZP.translate("EveryHour"):s.ZP.translate("EveryXHours",t)}return"StartupTrigger"==e.Type?s.ZP.translate("OnApplicationStartup"):e.Type},getDisplayTime:function(e){var t=e/1e4,i=new Date;return i.setHours(0,0,0,0),i.setTime(i.getTime()+t),r.ZP.getDisplayTime(i)},showAddTriggerPopup:function(e){$("#selectTriggerType",e).val("DailyTrigger"),e.querySelector("#selectTriggerType").dispatchEvent(new CustomEvent("change",{})),$("#popupAddTrigger",e).removeClass("hide")},confirmDeleteTrigger:function(e,t){(0,l.Z)(s.ZP.translate("MessageDeleteTaskTrigger"),s.ZP.translate("HeaderDeleteTaskTrigger")).then((function(){c.deleteTrigger(e,t)}))},deleteTrigger:function(e,t){n.ZP.show();var i=(0,o.a)("id");ApiClient.getScheduledTask(i).then((function(i){i.Triggers.splice(t,1),ApiClient.updateScheduledTaskTriggers(i.Id,i.Triggers).then((function(){c.refreshScheduledTask(e)}))}))},refreshTriggerFields:function(e,t){"DailyTrigger"==t?($("#fldTimeOfDay",e).show(),$("#fldDayOfWeek",e).hide(),$("#fldSelectSystemEvent",e).hide(),$("#fldSelectInterval",e).hide(),$("#selectTimeOfDay",e).attr("required","required")):"WeeklyTrigger"==t?($("#fldTimeOfDay",e).show(),$("#fldDayOfWeek",e).show(),$("#fldSelectSystemEvent",e).hide(),$("#fldSelectInterval",e).hide(),$("#selectTimeOfDay",e).attr("required","required")):"SystemEventTrigger"==t?($("#fldTimeOfDay",e).hide(),$("#fldDayOfWeek",e).hide(),$("#fldSelectSystemEvent",e).show(),$("#fldSelectInterval",e).hide(),$("#selectTimeOfDay",e).removeAttr("required")):"IntervalTrigger"==t?($("#fldTimeOfDay",e).hide(),$("#fldDayOfWeek",e).hide(),$("#fldSelectSystemEvent",e).hide(),$("#fldSelectInterval",e).show(),$("#selectTimeOfDay",e).removeAttr("required")):"StartupTrigger"==t&&($("#fldTimeOfDay",e).hide(),$("#fldDayOfWeek",e).hide(),$("#fldSelectSystemEvent",e).hide(),$("#fldSelectInterval",e).hide(),$("#selectTimeOfDay",e).removeAttr("required"))},getTriggerToAdd:function(e){var t={Type:$("#selectTriggerType",e).val()};"DailyTrigger"==t.Type?t.TimeOfDayTicks=$("#selectTimeOfDay",e).val():"WeeklyTrigger"==t.Type?(t.DayOfWeek=$("#selectDayOfWeek",e).val(),t.TimeOfDayTicks=$("#selectTimeOfDay",e).val()):"SystemEventTrigger"==t.Type?t.SystemEvent=$("#selectSystemEvent",e).val():"IntervalTrigger"==t.Type&&(t.IntervalTicks=$("#selectInterval",e).val());var i=$("#txtTimeLimit",e).val()||"0";return i=36e5*parseFloat(i),t.MaxRuntimeTicks=1e4*i||null,t}};function d(e){e.querySelector(".addTriggerForm").addEventListener("submit",(function(t){n.ZP.show();var i=(0,o.a)("id");ApiClient.getScheduledTask(i).then((function(t){t.Triggers.push(c.getTriggerToAdd(e)),ApiClient.updateScheduledTaskTriggers(t.Id,t.Triggers).then((function(){$("#popupAddTrigger").addClass("hide"),c.refreshScheduledTask(e)}))})),t.preventDefault()})),function(e){for(var t=[],i=0;i<864e5;i+=9e5)t.push({name:c.getDisplayTime(1e4*i),value:1e4*i});e.innerHTML=t.map((function(e){return'<option value="'+e.value+'">'+e.name+"</option>"})).join("")}(e.querySelector("#selectTimeOfDay")),$(e.querySelector("#popupAddTrigger").parentNode).trigger("create"),e.querySelector(".selectTriggerType").addEventListener("change",(function(){c.refreshTriggerFields(e,this.value)})),e.querySelector(".btnAddTrigger").addEventListener("click",(function(){c.showAddTriggerPopup(e)})),e.addEventListener("click",(function(t){var i=a.ZP.parentWithClass(t.target,"btnDeleteTrigger");i&&c.confirmDeleteTrigger(e,parseInt(i.getAttribute("data-index"),10))})),e.addEventListener("viewshow",(function(){c.refreshScheduledTask(e)}))}},15856:function(e,t,i){var n=i(30325),r=i(57366),a=i(78130),s=(i(67752),Object.create(HTMLSelectElement.prototype));function l(){return!(!r.Z.edgeUwp&&!r.Z.xboxOne&&(r.Z.tizen||r.Z.orsay||r.Z.web0s||!r.Z.tv&&n.Z.tv))}function o(e){var t=c(e),i=t?t.textContent||t.innerText:null;a.default.show({items:e.options,positionTo:e,title:i}).then((function(t){!function(e,t){e.value=t}(e,t),function(e){var t=new Event("change",{bubbles:!1,cancelable:!0});e.dispatchEvent(t)}(e)}))}function c(e){for(var t=e.previousSibling;t&&"LABEL"!==t.tagName;)t=t.previousSibling;return t}function d(){var e=c(this);e&&e.classList.add("selectLabelFocused")}function u(){var e=c(this);e&&e.classList.remove("selectLabelFocused")}function f(e){e.button||l()||(e.preventDefault(),o(this))}function v(e){switch(e.keyCode){case 13:return void(l()||(e.preventDefault(),o(this)));case 37:case 38:case 39:case 40:return void(n.Z.tv&&e.preventDefault())}}var h=0;s.createdCallback=function(){this.id||(this.id="embyselect"+h,h++),this.classList.add("emby-select-withcolor"),n.Z.tv&&this.classList.add("emby-select-focusscale"),this.addEventListener("mousedown",f),this.addEventListener("keydown",v),this.addEventListener("focus",d),this.addEventListener("blur",u)},s.attachedCallback=function(){var e;if(!this.classList.contains("emby-select")){this.classList.add("emby-select");var t,i=this.ownerDocument.createElement("label");i.innerText=this.getAttribute("label")||"",i.classList.add("selectLabel"),i.htmlFor=this.id,null===(e=this.parentNode)||void 0===e||e.insertBefore(i,this),this.classList.contains("emby-select-withcolor")&&(null===(t=this.parentNode)||void 0===t||t.insertAdjacentHTML("beforeend",'<div class="selectArrowContainer"><div style="visibility:hidden;display:none;">0</div><span class="selectArrow material-icons keyboard_arrow_down" aria-hidden="true"></span></div>'))}},s.setLabel=function(e){var t;(null===(t=this.parentNode)||void 0===t?void 0:t.querySelector("label")).innerText=e},document.registerElement("emby-select",{prototype:s,extends:"select"})},78130:function(e,t,i){i.r(t),i.d(t,{show:function(){return u}});var n=i(65009),r=i.n(n),a=i(93355),s=i(30325),l=i(94994),o=i(72365),c=(i(38228),function(e){var t="function"==typeof Symbol&&Symbol.iterator,i=t&&e[t],n=0;if(i)return i.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")});function d(e,t,n){Promise.resolve().then(i.bind(i,22652)).then((function(i){var r=n?"on":"off";i.centerFocus[r](e,t)})).catch((function(e){console.warn("Error in centerFocus",e)}))}function u(e){var t,i,n,u={removeOnClose:!0,enableHistory:e.enableHistory,scrollY:!1};s.Z.tv?(u.size="fullscreen",n=!0,u.autoFocus=!0):(u.modal=!1,u.entryAnimation=e.entryAnimation,u.exitAnimation=e.exitAnimation,u.entryAnimationDuration=e.entryAnimationDuration||140,u.exitAnimationDuration=e.exitAnimationDuration||100,u.autoFocus=!1);var f=a.default.createDialog(u);n?f.classList.add("actionsheet-fullscreen"):f.classList.add("actionsheet-not-fullscreen"),f.classList.add("actionSheet"),e.dialogClass&&f.classList.add(e.dialogClass);var v="",h=s.Z.tv?"scrollY smoothScrollY hiddenScrollY":"scrollY",g="";e.items.length>20&&(g+="min-width:"+(o.ZP.getWindowSize().innerWidth>=300?240:200)+"px;");var m,T=!1,y=[];try{for(var p=c(e.items),S=p.next();!S.done;S=p.next())(m=(I=S.value).icon||(I.selected?"check":null))&&(T=!0),y.push(m||"")}catch(e){t={error:e}}finally{try{S&&!S.done&&(i=p.return)&&i.call(p)}finally{if(t)throw t.error}}s.Z.tv&&(v+='<button is="paper-icon-button-light" class="btnCloseActionSheet hide-mouse-idle-tv" tabindex="-1" title="'.concat(l.ZP.translate("ButtonBack"),'">\n                     <span class="material-icons arrow_back" aria-hidden="true"></span>\n                 </button>'));var b=e.title&&!T;b||s.Z.tv?v+='<div class="actionSheetContent actionSheetContent-centered">':v+='<div class="actionSheetContent">',e.title&&(v+='<h1 class="actionSheetTitle">'+r()(e.title)+"</h1>"),e.text&&(v+='<p class="actionSheetText">'+r()(e.text)+"</p>");var k="actionSheetScroller";s.Z.tv&&(k+=" actionSheetScroller-tv focuscontainer-x focuscontainer-y"),v+='<div class="'+k+" "+h+'" style="'+g+'">';var D="listItem listItem-button actionSheetMenuItem";(e.border||e.shaded)&&(D+=" listItem-border"),e.menuItemClass&&(D+=" "+e.menuItemClass),s.Z.tv&&(D+=" listItem-focusscale"),s.Z.mobile&&(D+=" actionsheet-xlargeFont");for(var w=0;w<e.items.length;w++){var I;(I=e.items[w]).divider?v+='<div class="actionsheetDivider"></div>':(v+="<button"+(I.selected&&s.Z.tv?" autoFocus":"")+' is="emby-button" type="button" class="'+D+'" data-id="'+(null==I.id||""===I.id?I.value:I.id)+'">',(m=y[w])?v+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons '.concat(m,'" aria-hidden="true"></span>'):T&&!b&&(v+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons check" aria-hidden="true" style="visibility:hidden;"></span>'),v+='<div class="listItemBody actionsheetListItemBody">',v+='<div class="listItemBodyText actionSheetItemText">',v+=r()(I.name||I.textContent||I.innerText),v+="</div>",I.secondaryText&&(v+='<div class="listItemBodyText secondary">'.concat(r()(I.secondaryText),"</div>")),v+="</div>",I.asideText&&(v+='<div class="listItemAside actionSheetItemAsideText">'.concat(r()(I.asideText),"</div>")),v+="</button>")}if(e.showCancel&&(v+='<div class="buttons">',v+='<button is="emby-button" type="button" class="btnCloseActionSheet">'.concat(l.ZP.translate("ButtonCancel"),"</button>"),v+="</div>"),v+="</div>",f.innerHTML=v,s.Z.tv){var x=f.querySelector(".actionSheetScroller");x&&d(x,!1,!0)}var Z=f.querySelector(".btnCloseActionSheet");Z&&Z.addEventListener("click",(function(){a.default.close(f)}));var A,L=null;return e.timeout&&(A=setTimeout((function(){a.default.close(f)}),e.timeout)),new Promise((function(t,i){var n=!1;f.addEventListener("click",(function(i){var r=o.ZP.parentWithClass(i.target,"actionSheetMenuItem");r&&(L=r.getAttribute("data-id"),e.resolveOnClick&&(Array.isArray(e.resolveOnClick)?-1!==e.resolveOnClick.indexOf(L)&&(t(L),n=!0):(t(L),n=!0)),a.default.close(f))})),f.addEventListener("close",(function(){if(s.Z.tv){var r=f.querySelector(".actionSheetScroller");r&&d(r,!1,!1)}A&&(clearTimeout(A),A=void 0),n||(null!=L?(e.callback&&e.callback(L),t(L)):i("ActionSheet closed without resolving"))})),a.default.open(f).catch((function(e){console.warn("DialogHelper.open error",e)}));var r=e.positionTo&&"fullscreen"!==u.size?function(e,t,i){var n=o.ZP.getWindowSize(),r=n.innerHeight,a=n.innerWidth,s=function(e){var t,i,n=[];if(!document)return n;try{for(var r=c(e),a=r.next();!a.done;a=r.next()){var s=a.value.getBoundingClientRect();n.push({top:s.top,left:s.left,width:s.width,height:s.height})}}catch(e){t={error:e}}finally{try{a&&!a.done&&(i=r.return)&&i.call(r)}finally{if(t)throw t.error}}return n}([e])[0];"top"!==t.positionY&&(s.top+=(s.height||0)/2),s.left+=(s.width||0)/2;var l=i.offsetHeight||300,d=i.offsetWidth||160;s.top-=l/2,s.left-=d/2;var u=s.left+d-a,f=s.top+l-r;return u>0&&(s.left-=u+20),f>0&&(s.top-=f+20),s.top+=t.offsetTop||0,s.left+=t.offsetLeft||0,s.top=Math.max(s.top,10),s.left=Math.max(s.left,10),s}(e.positionTo,e,f):null;r&&(f.style.position="fixed",f.style.margin="0",f.style.left=r.left+"px",f.style.top=r.top+"px")}))}t.default={show:u}}}]);