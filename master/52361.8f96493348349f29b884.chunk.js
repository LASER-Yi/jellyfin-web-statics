"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[52361,62882,96084,40501],{52361:function(e,t,n){n.r(t),n.d(t,{default:function(){return c},show:function(){return r}}),n(24776),n(77575),n(78557),n(67593),n(96054),n(90076);var o=n(79754),i=n(98320),a=n(5898),s=(n(63001),n(15453),'<div class="formDialogHeader"> <button is="paper-icon-button-light" class="btnCancel autoSize" title="${Previous}" tabindex="-1"> <span class="material-icons arrow_back" aria-hidden="true"></span> </button> <h3 class="formDialogHeaderTitle"> ${HeaderAccessSchedule} </h3> </div> <div class="formDialogContent scrollY" style="padding-top:2em"> <div class="dialogContentInner dialog-content-centered"> <form class="scheduleForm" style="margin:auto"> <div class="selectContainer"> <select is="emby-select" id="selectDay" label="${LabelAccessDay}"> <option value="Sunday">${Sunday}</option> <option value="Monday">${Monday}</option> <option value="Tuesday">${Tuesday}</option> <option value="Wednesday">${Wednesday}</option> <option value="Thursday">${Thursday}</option> <option value="Friday">${Friday}</option> <option value="Saturday">${Saturday}</option> <option value="Everyday">${OptionEveryday}</option> <option value="Weekday">${OptionWeekdays}</option> <option value="Weekend">${OptionWeekends}</option> </select> </div> <div class="selectContainer"> <select is="emby-select" class="selectHour" id="selectStart" label="${LabelAccessStart}"></select> </div> <div class="selectContainer"> <select is="emby-select" class="selectHour" id="selectEnd" label="${LabelAccessEnd}"></select> </div> <div class="formDialogFooter"> <button is="emby-button" type="submit" class="raised button-submit block formDialogFooterItem"> <span>${Add}</span> </button> </div> </form> </div> </div> ');function l(e){var t=0,n=e%1;return n&&(t=parseInt(60*n,10)),i.Ay.getDisplayTime(new Date(2e3,1,1,e,t,0,0))}function r(e){return new Promise((function(t,n){var i=o.default.createDialog({removeOnClose:!0,size:"small"});i.classList.add("formDialog");var r,c,d,u,v,f="";f+=a.Ay.translateHtml(s),i.innerHTML=f,function(e){for(var t="",n=0;n<24;n+=.5)t+='<option value="'.concat(n,'">').concat(l(n),"</option>");t+='<option value="24">'.concat(l(0),"</option>"),e.querySelector("#selectStart").innerHTML=t,e.querySelector("#selectEnd").innerHTML=t}(i),r=i,d=(c=e.schedule).DayOfWeek,u=c.StartHour,v=c.EndHour,r.querySelector("#selectDay").value=d||"Sunday",r.querySelector("#selectStart").value=u||0,r.querySelector("#selectEnd").value=v||0,o.default.open(i),i.addEventListener("close",(function(){i.submitted?t(e.schedule):n()})),i.querySelector(".btnCancel").addEventListener("click",(function(){o.default.close(i)})),i.querySelector("form").addEventListener("submit",(function(t){return function(e,t){var n={DayOfWeek:e.querySelector("#selectDay").value,StartHour:e.querySelector("#selectStart").value,EndHour:e.querySelector("#selectEnd").value};parseFloat(n.StartHour)>=parseFloat(n.EndHour)?alert(a.Ay.translate("ErrorStartHourGreaterThanEnd")):(e.submitted=!0,t.schedule=Object.assign(t.schedule,n),o.default.close(e))}(i,e),t.preventDefault(),!1}))}))}var c={show:r}},63001:function(e,t,n){var o=n(46782),i=n(34789),a=n(62882),s=(n(69177),Object.create(HTMLSelectElement.prototype));function l(){return!(!i.A.edgeUwp&&!i.A.xboxOne&&(i.A.tizen||i.A.orsay||i.A.web0s||!i.A.tv&&o.A.tv))}function r(e){var t=c(e),n=t?t.textContent||t.innerText:null;a.default.show({items:e.options,positionTo:e,title:n}).then((function(t){!function(e,t){e.value=t}(e,t),function(e){var t=new Event("change",{bubbles:!1,cancelable:!0});e.dispatchEvent(t)}(e)}))}function c(e){for(var t=e.previousSibling;t&&"LABEL"!==t.tagName;)t=t.previousSibling;return t}function d(){var e=c(this);e&&e.classList.add("selectLabelFocused")}function u(){var e=c(this);e&&e.classList.remove("selectLabelFocused")}function v(e){e.button||l()||(e.preventDefault(),r(this))}function f(e){switch(e.keyCode){case 13:return void(l()||(e.preventDefault(),r(this)));case 37:case 38:case 39:case 40:return void(o.A.tv&&e.preventDefault())}}var h=0;s.createdCallback=function(){this.id||(this.id="embyselect"+h,h++),this.classList.add("emby-select-withcolor"),o.A.tv&&this.classList.add("emby-select-focusscale"),this.addEventListener("mousedown",v),this.addEventListener("keydown",f),this.addEventListener("focus",d),this.addEventListener("blur",u)},s.attachedCallback=function(){var e;if(!this.classList.contains("emby-select")){this.classList.add("emby-select");var t,n=this.ownerDocument.createElement("label");n.innerText=this.getAttribute("label")||"",n.classList.add("selectLabel"),n.htmlFor=this.id,null===(e=this.parentNode)||void 0===e||e.insertBefore(n,this),this.classList.contains("emby-select-withcolor")&&(null===(t=this.parentNode)||void 0===t||t.insertAdjacentHTML("beforeend",'<div class="selectArrowContainer"><div style="visibility:hidden;display:none;">0</div><span class="selectArrow material-icons keyboard_arrow_down" aria-hidden="true"></span></div>'))}},s.setLabel=function(e){var t;(null===(t=this.parentNode)||void 0===t?void 0:t.querySelector("label")).innerText=e},document.registerElement("emby-select",{prototype:s,extends:"select"})},62882:function(e,t,n){n.r(t),n.d(t,{show:function(){return u}});var o=n(22696),i=n.n(o),a=n(79754),s=n(46782),l=n(5898),r=n(47629),c=(n(10353),function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],o=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&o>=e.length&&(e=void 0),{value:e&&e[o++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")});function d(e,t,o){Promise.resolve().then(n.bind(n,10838)).then((function(n){var i=o?"on":"off";n.centerFocus[i](e,t)})).catch((function(e){console.warn("Error in centerFocus",e)}))}function u(e){var t,n,o,u={removeOnClose:!0,enableHistory:e.enableHistory,scrollY:!1};s.A.tv?(u.size="fullscreen",o=!0,u.autoFocus=!0):(u.modal=!1,u.entryAnimation=e.entryAnimation,u.exitAnimation=e.exitAnimation,u.entryAnimationDuration=e.entryAnimationDuration||140,u.exitAnimationDuration=e.exitAnimationDuration||100,u.autoFocus=!1);var v=a.default.createDialog(u);o?v.classList.add("actionsheet-fullscreen"):v.classList.add("actionsheet-not-fullscreen"),v.classList.add("actionSheet"),e.dialogClass&&v.classList.add(e.dialogClass);var f="",h=s.A.tv?"scrollY smoothScrollY hiddenScrollY":"scrollY",y="";e.items.length>20&&(y+="min-width:"+(r.Ay.getWindowSize().innerWidth>=300?240:200)+"px;");var m,p=!1,b=[];try{for(var S=c(e.items),A=S.next();!A.done;A=S.next())(m=(C=A.value).icon||(C.selected?"check":null))&&(p=!0),b.push(m||"")}catch(e){t={error:e}}finally{try{A&&!A.done&&(n=S.return)&&n.call(S)}finally{if(t)throw t.error}}s.A.tv&&(f+='<button is="paper-icon-button-light" class="btnCloseActionSheet hide-mouse-idle-tv" tabindex="-1" title="'.concat(l.Ay.translate("ButtonBack"),'">\n                     <span class="material-icons arrow_back" aria-hidden="true"></span>\n                 </button>'));var g=e.title&&!p;g||s.A.tv?f+='<div class="actionSheetContent actionSheetContent-centered">':f+='<div class="actionSheetContent">',e.title&&(f+='<h1 class="actionSheetTitle">'+i()(e.title)+"</h1>"),e.text&&(f+='<p class="actionSheetText">'+i()(e.text)+"</p>");var w="actionSheetScroller";s.A.tv&&(w+=" actionSheetScroller-tv focuscontainer-x focuscontainer-y"),f+='<div class="'+w+" "+h+'" style="'+y+'">';var x="listItem listItem-button actionSheetMenuItem";(e.border||e.shaded)&&(x+=" listItem-border"),e.menuItemClass&&(x+=" "+e.menuItemClass),s.A.tv&&(x+=" listItem-focusscale"),s.A.mobile&&(x+=" actionsheet-xlargeFont");for(var L=0;L<e.items.length;L++){var C;(C=e.items[L]).divider?f+='<div class="actionsheetDivider"></div>':(f+="<button"+(C.selected&&s.A.tv?" autoFocus":"")+' is="emby-button" type="button" class="'+x+'" data-id="'+(null==C.id||""===C.id?C.value:C.id)+'">',(m=b[L])?f+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons '.concat(m,'" aria-hidden="true"></span>'):p&&!g&&(f+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons check" aria-hidden="true" style="visibility:hidden;"></span>'),f+='<div class="listItemBody actionsheetListItemBody">',f+='<div class="listItemBodyText actionSheetItemText">',f+=i()(C.name||C.textContent||C.innerText),f+="</div>",C.secondaryText&&(f+='<div class="listItemBodyText secondary">'.concat(i()(C.secondaryText),"</div>")),f+="</div>",C.asideText&&(f+='<div class="listItemAside actionSheetItemAsideText">'.concat(i()(C.asideText),"</div>")),f+="</button>")}if(e.showCancel&&(f+='<div class="buttons">',f+='<button is="emby-button" type="button" class="btnCloseActionSheet">'.concat(l.Ay.translate("ButtonCancel"),"</button>"),f+="</div>"),f+="</div>",v.innerHTML=f,s.A.tv){var T=v.querySelector(".actionSheetScroller");T&&d(T,!1,!0)}var E=v.querySelector(".btnCloseActionSheet");E&&E.addEventListener("click",(function(){a.default.close(v)}));var I,k=null;return e.timeout&&(I=setTimeout((function(){a.default.close(v)}),e.timeout)),new Promise((function(t,n){var o=!1;v.addEventListener("click",(function(n){var i=r.Ay.parentWithClass(n.target,"actionSheetMenuItem");i&&(k=i.getAttribute("data-id"),e.resolveOnClick&&(Array.isArray(e.resolveOnClick)?-1!==e.resolveOnClick.indexOf(k)&&(t(k),o=!0):(t(k),o=!0)),a.default.close(v))})),v.addEventListener("close",(function(){if(s.A.tv){var i=v.querySelector(".actionSheetScroller");i&&d(i,!1,!1)}I&&(clearTimeout(I),I=void 0),o||(null!=k?(e.callback&&e.callback(k),t(k)):n(new Error("ActionSheet closed without resolving")))})),a.default.open(v).catch((function(e){console.warn("DialogHelper.open error",e)}));var i=e.positionTo&&"fullscreen"!==u.size?function(e,t,n){var o=r.Ay.getWindowSize(),i=o.innerHeight,a=o.innerWidth,s=function(e){var t,n,o=[];if(!document)return o;try{for(var i=c(e),a=i.next();!a.done;a=i.next()){var s=a.value.getBoundingClientRect();o.push({top:s.top,left:s.left,width:s.width,height:s.height})}}catch(e){t={error:e}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return o}([e])[0];"top"!==t.positionY&&(s.top+=(s.height||0)/2),s.left+=(s.width||0)/2;var l=n.offsetHeight||300,d=n.offsetWidth||160;s.top-=l/2,s.left-=d/2;var u=s.left+d-a,v=s.top+l-i;return u>0&&(s.left-=u+20),v>0&&(s.top-=v+20),s.top+=t.offsetTop||0,s.left+=t.offsetLeft||0,s.top=Math.max(s.top,10),s.left=Math.max(s.left,10),s}(e.positionTo,e,v):null;i&&(v.style.position="fixed",v.style.margin="0",v.style.left=i.left+"px",v.style.top=i.top+"px")}))}t.default={show:u}}}]);