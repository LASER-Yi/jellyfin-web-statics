"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[77611,12801,49213,31473,69227],{12801:function(e,t,i){i.r(t),i.d(t,{show:function(){return h}}),i(5769),i(63238),i(61418),i(17460),i(14078),i(27471),i(72410),i(15610),i(52077),i(25901),i(92189),i(91047);var n=i(65009),a=i.n(n),r=i(93355),s=i(30325),c=i(94994),l=i(72365);function o(e,t){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!i){if(Array.isArray(e)||(i=function(e,t){if(e){if("string"==typeof e)return u(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?u(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,c=!1;return{s:function(){i=i.call(e)},n:function(){var e=i.next();return s=e.done,e},e:function(e){c=!0,r=e},f:function(){try{s||null==i.return||i.return()}finally{if(c)throw r}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function d(e,t,n){Promise.resolve().then(i.bind(i,54517)).then((function(i){var a=n?"on":"off";i.centerFocus[a](e,t)}))}function h(e){var t,i={removeOnClose:!0,enableHistory:e.enableHistory,scrollY:!1};s.Z.tv?(i.size="fullscreen",t=!0,i.autoFocus=!0):(i.modal=!1,i.entryAnimation=e.entryAnimation,i.exitAnimation=e.exitAnimation,i.entryAnimationDuration=e.entryAnimationDuration||140,i.exitAnimationDuration=e.exitAnimationDuration||100,i.autoFocus=!1);var n=r.default.createDialog(i);t?n.classList.add("actionsheet-fullscreen"):n.classList.add("actionsheet-not-fullscreen"),n.classList.add("actionSheet"),e.dialogClass&&n.classList.add(e.dialogClass);var u="",h=s.Z.tv?"scrollY smoothScrollY hiddenScrollY":"scrollY",b="";e.items.length>20&&(b+="min-width:"+(l.ZP.getWindowSize().innerWidth>=300?240:200)+"px;");var p,f,v=!1,m=[],y=o(e.items);try{for(y.s();!(f=y.n()).done;){var S=f.value;(p=S.icon||(S.selected?"check":null))&&(v=!0),m.push(p||"")}}catch(e){y.e(e)}finally{y.f()}s.Z.tv&&(u+='<button is="paper-icon-button-light" class="btnCloseActionSheet hide-mouse-idle-tv" tabindex="-1" title="'.concat(c.ZP.translate("ButtonBack"),'">\n                     <span class="material-icons arrow_back" aria-hidden="true"></span>\n                 </button>'));var g=e.title&&!v;g||s.Z.tv?u+='<div class="actionSheetContent actionSheetContent-centered">':u+='<div class="actionSheetContent">',e.title&&(u+='<h1 class="actionSheetTitle">'+a()(e.title)+"</h1>"),e.text&&(u+='<p class="actionSheetText">'+a()(e.text)+"</p>");var k="actionSheetScroller";s.Z.tv&&(k+=" actionSheetScroller-tv focuscontainer-x focuscontainer-y"),u+='<div class="'+k+" "+h+'" style="'+b+'">';var x="listItem listItem-button actionSheetMenuItem";(e.border||e.shaded)&&(x+=" listItem-border"),e.menuItemClass&&(x+=" "+e.menuItemClass),s.Z.tv&&(x+=" listItem-focusscale"),s.Z.mobile&&(x+=" actionsheet-xlargeFont");for(var w=0;w<e.items.length;w++){var F=e.items[w];F.divider?u+='<div class="actionsheetDivider"></div>':(u+="<button"+(F.selected&&s.Z.tv?" autoFocus":"")+' is="emby-button" type="button" class="'+x+'" data-id="'+(null==F.id||""===F.id?F.value:F.id)+'">',(p=m[w])?u+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons '.concat(p,'" aria-hidden="true"></span>'):v&&!g&&(u+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons check" aria-hidden="true" style="visibility:hidden;"></span>'),u+='<div class="listItemBody actionsheetListItemBody">',u+='<div class="listItemBodyText actionSheetItemText">',u+=a()(F.name||F.textContent||F.innerText),u+="</div>",F.secondaryText&&(u+='<div class="listItemBodyText secondary">'.concat(a()(F.secondaryText),"</div>")),u+="</div>",F.asideText&&(u+='<div class="listItemAside actionSheetItemAsideText">'.concat(a()(F.asideText),"</div>")),u+="</button>")}e.showCancel&&(u+='<div class="buttons">',u+='<button is="emby-button" type="button" class="btnCloseActionSheet">'.concat(c.ZP.translate("ButtonCancel"),"</button>"),u+="</div>"),u+="</div>",n.innerHTML=u,s.Z.tv&&d(n.querySelector(".actionSheetScroller"),!1,!0);var L,I,T=n.querySelector(".btnCloseActionSheet");return T&&T.addEventListener("click",(function(){r.default.close(n)})),e.timeout&&(I=setTimeout((function(){r.default.close(n)}),e.timeout)),new Promise((function(t,a){var c;n.addEventListener("click",(function(i){var a=l.ZP.parentWithClass(i.target,"actionSheetMenuItem");a&&(L=a.getAttribute("data-id"),e.resolveOnClick&&(e.resolveOnClick.indexOf?-1!==e.resolveOnClick.indexOf(L)&&(t(L),c=!0):(t(L),c=!0)),r.default.close(n))})),n.addEventListener("close",(function(){s.Z.tv&&d(n.querySelector(".actionSheetScroller"),!1,!1),I&&(clearTimeout(I),I=null),c||(null!=L?(e.callback&&e.callback(L),t(L)):a("ActionSheet closed without resolving"))})),r.default.open(n);var u=e.positionTo&&"fullscreen"!==i.size?function(e,t){var i=l.ZP.getWindowSize(),n=i.innerHeight,a=i.innerWidth,r=function(e){var t=[];if(!document)return t;var i,n=o(e);try{for(n.s();!(i=n.n()).done;){var a=i.value.getBoundingClientRect();t.push({top:a.top,left:a.left,width:a.width,height:a.height})}}catch(e){n.e(e)}finally{n.f()}return t}([e.positionTo])[0];"top"!==e.positionY&&(r.top+=(r.height||0)/2),r.left+=(r.width||0)/2;var s=t.offsetHeight||300,c=t.offsetWidth||160;r.top-=s/2,r.left-=c/2;var u=r.left+c-a,d=r.top+s-n;return u>0&&(r.left-=u+20),d>0&&(r.top-=d+20),r.top+=e.offsetTop||0,r.left+=e.offsetLeft||0,r.top=Math.max(r.top,10),r.left=Math.max(r.left,10),r}(e,n):null;u&&(n.style.position="fixed",n.style.margin=0,n.style.left=u.left+"px",n.style.top=u.top+"px")}))}i(38228),t.default={show:h}},77611:function(e,t,i){i.r(t),i.d(t,{default:function(){return I}}),i(5769),i(61013),i(27471),i(63238),i(61418),i(17460),i(14078),i(48410),i(19068),i(87211),i(25901),i(92189),i(95163),i(99785),i(92571),i(98010),i(20252),i(55849),i(14009),i(12699),i(91047);var n=i(65009),a=i.n(n),r=i(72365),s=i(34643),c=i(93355),l=i(58517),o=i(30325),u=i(94994),d=i(60934),h=(i(12291),i(62033),i(38228),i(61414),i(15856),i(18613));function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function p(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,y(n.key),n)}}function f(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function v(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?f(Object(i),!0).forEach((function(t){m(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):f(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function m(e,t,i){return(t=y(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function y(e){var t=function(e,t){if("object"!==b(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,"string");if("object"!==b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===b(t)?t:String(t)}function S(e){return e.preventDefault(),!1}function g(e,t,i){!function(e,t,n,r,s){var c=e.querySelector(".genreFilters");r.length?c.classList.remove("hide"):c.classList.add("hide");var l="";l+=r.map((function(e){var t,n,r="";return r+="<label>",r+='<input is="emby-checkbox" type="checkbox"'+(t=e,(-1!==((n=-1===(i.settings.GenreIds||"").indexOf("|")?",":"|")+(i.settings.GenreIds||"")+n).indexOf(n+t.Id+n)?" checked":"")+' data-filter="')+e.Id+'" class="chkGenreFilter"/>',(r+="<span>"+a()(e.Name)+"</span>")+"</label>"})).join(""),c.querySelector(".filterOptions").innerHTML=l}(e,0,0,t.Genres)}function k(e,t,i){var n=i.checked;n=n||null,d.setFilter(t,n)}function x(e,t){for(var i=r.ZP.parentWithClass(e,"checkboxList-verticalwrap"),n=s.Z.getFocusableElements(i),a=-1,c=0,l=n.length;c<l;c++)if(n[c]===e){a=c;break}a+=t,a=Math.min(n.length-1,a);var o=n[a=Math.max(0,a)];o&&s.Z.focus(o)}function w(e,t,n){Promise.resolve().then(i.bind(i,54517)).then((function(i){var a=n?"on":"off";i.centerFocus[a](e,t)}))}function F(e){switch(e.detail.command){case"left":x(e.target,-1),e.preventDefault();break;case"right":x(e.target,1),e.preventDefault()}}function L(e,t){for(var i=e.querySelectorAll(".checkboxList-verticalwrap"),n=0,a=i.length;n<a;n++)t?l.default.on(i[n],F):l.default.off(i[n],F)}var I=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,i;return t=e,(i=[{key:"show",value:function(e){return new Promise((function(t){var i={removeOnClose:!0,scrollY:!1};o.Z.tv?i.size="fullscreen":i.size="small";var n=c.default.createDialog(i);n.classList.add("formDialog");var a="";a+='<div class="formDialogHeader">',a+='<button is="paper-icon-button-light" class="btnCancel hide-mouse-idle-tv" tabindex="-1" title="'.concat(u.ZP.translate("ButtonBack"),'"><span class="material-icons arrow_back" aria-hidden="true"></span></button>'),a+='<h3 class="formDialogHeaderTitle">${Filters}</h3>',a+="</div>",a+='<div class="formDialogContent smoothScrollY"> <div class="dialogContentInner dialog-content-centered"> <form style="margin:auto"> <div class="verticalSection verticalSection-extrabottompadding basicFilterSection focuscontainer-x" style="margin-top:2em"> <div class="checkboxList checkboxList-verticalwrap"> <label class="viewSetting simpleFilter" data-settingname="IsUnplayed"> <input type="checkbox" is="emby-checkbox" class="chkUnplayed"/> <span>${Unplayed}</span> </label> <label class="viewSetting simpleFilter" data-settingname="IsPlayed"> <input type="checkbox" is="emby-checkbox" class="chkPlayed"/> <span>${Played}</span> </label> <label class="viewSetting simpleFilter" data-settingname="IsFavorite"> <input type="checkbox" is="emby-checkbox" class="chkFavorite"/> <span>${Favorite}</span> </label> <label class="viewSetting simpleFilter" data-settingname="IsResumable"> <input type="checkbox" is="emby-checkbox" class="chkResumable"/> <span>${ContinueWatching}</span> </label> </div> </div> <div class="verticalSection verticalSection-extrabottompadding viewSetting focuscontainer-x" data-settingname="SeriesStatus"> <h2 class="checkboxListLabel">${HeaderSeriesStatus}</h2> <div class="checkboxList checkboxList-verticalwrap"> <label> <input type="checkbox" is="emby-checkbox" class="chkSeriesStatus" data-filter="Continuing"/> <span>${Continuing}</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkSeriesStatus" data-filter="Ended"/> <span>${Ended}</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkSeriesStatus" data-filter="Unreleased"/> <span>${Unreleased}</span> </label> </div> </div> <div class="verticalSection verticalSection-extrabottompadding hide genreFilters focuscontainer-x"> <h2 class="checkboxListLabel">${Genres}</h2> <div class="checkboxList checkboxList-verticalwrap filterOptions"> </div> </div> <div class="verticalSection verticalSection-extrabottompadding viewSetting focuscontainer-x" data-settingname="VideoType"> <h2 class="checkboxListLabel">${HeaderVideoType}</h2> <div class="checkboxList checkboxList-verticalwrap"> <label> <input type="checkbox" is="emby-checkbox" class="simpleFilter chkHDFilter" data-settingname="IsHD"/> <span>HD</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="simpleFilter chk4KFilter" data-settingname="Is4K"/> <span>4K</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="simpleFilter chkSDFilter" data-settingname="IsSD"/> <span>SD</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="simpleFilter chk3DFilter" data-settingname="Is3D"/> <span>3D</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkVideoTypeFilter" data-filter="Bluray"/> <span>Blu-ray</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkVideoTypeFilter" data-filter="Dvd"/> <span>DVD</span> </label> </div> </div> <div class="verticalSection verticalSection-extrabottompadding featureSection hide focuscontainer-x"> <h2 class="checkboxListLabel">${Features}</h2> <div class="checkboxList checkboxList-verticalwrap"> <label class="viewSetting simpleFilter" data-settingname="HasSubtitles"> <input type="checkbox" is="emby-checkbox" class="chkFeatureFilter chkSubtitle"/> <span>${Subtitles}</span> </label> <label class="viewSetting simpleFilter" data-settingname="HasTrailer"> <input type="checkbox" is="emby-checkbox" class="chkFeatureFilter chkTrailer"/> <span>${Trailers}</span> </label> <label class="viewSetting simpleFilter" data-settingname="HasSpecialFeature"> <input type="checkbox" is="emby-checkbox" class="chkFeatureFilter chkSpecialFeature"/> <span>${Extras}</span> </label> <label class="viewSetting simpleFilter" data-settingname="HasThemeSong"> <input type="checkbox" is="emby-checkbox" class="chkFeatureFilter chkThemeSong"/> <span>${ThemeSongs}</span> </label> <label class="viewSetting simpleFilter" data-settingname="HasThemeVideo"> <input type="checkbox" is="emby-checkbox" class="chkFeatureFilter chkThemeVideo"/> <span>${ThemeVideos}</span> </label> </div> </div> </form> </div> </div> ',n.innerHTML=u.ZP.translateHtml(a,"core");for(var r,s=n.querySelectorAll(".viewSetting"),l=0,b=s.length;l<b;l++)-1===e.visibleSettings.indexOf(s[l].getAttribute("data-settingname"))?s[l].classList.add("hide"):s[l].classList.remove("hide");!function(e,t){e.querySelector("form").addEventListener("submit",S);var i,n,a=e.querySelectorAll(".simpleFilter");for(i=0,n=a.length;i<n;i++)"INPUT"===a[i].tagName?a[i].checked=t[a[i].getAttribute("data-settingname")]||!1:a[i].querySelector("input").checked=t[a[i].getAttribute("data-settingname")]||!1;var r=t.VideoTypes?t.VideoTypes.split(","):[];for(i=0,n=(a=e.querySelectorAll(".chkVideoTypeFilter")).length;i<n;i++)a[i].checked=-1!==r.indexOf(a[i].getAttribute("data-filter"));var s=t.SeriesStatus?t.SeriesStatus.split(","):[];for(i=0,n=(a=e.querySelectorAll(".chkSeriesStatus")).length;i<n;i++)a[i].checked=-1!==s.indexOf(a[i].getAttribute("data-filter"));e.querySelector(".basicFilterSection .viewSetting:not(.hide)")?e.querySelector(".basicFilterSection").classList.remove("hide"):e.querySelector(".basicFilterSection").classList.add("hide"),e.querySelector(".featureSection .viewSetting:not(.hide)")?e.querySelector(".featureSection").classList.remove("hide"):e.querySelector(".featureSection").classList.add("hide")}(n,e.settings),function(e,t){var i=h.Z.getApiClient(t.serverId),n=Object.assign(t.filterMenuOptions,{UserId:i.getCurrentUserId(),ParentId:t.parentId,IncludeItemTypes:t.itemTypes.join(",")});i.getFilters(n).then((function(i){g(e,i,t)}))}(n,e),L(n,!0),n.querySelector(".btnCancel").addEventListener("click",(function(){c.default.close(n)})),o.Z.tv&&w(n.querySelector(".formDialogContent"),!1,!0),n.querySelector("form").addEventListener("change",(function(){r=!0}),!0),c.default.open(n).then((function(){return L(n,!1),o.Z.tv&&w(n.querySelector(".formDialogContent"),!1,!1),r?(function(e,t,i,n){for(var a=e.querySelectorAll(".simpleFilter"),r=[],s=0,c=(a=e.querySelectorAll(".chkVideoTypeFilter")).length;s<c;s++)a[s].checked&&r.push(a[s].getAttribute("data-filter"));for(var l=[],o=0,u=(a=e.querySelectorAll(".chkSeriesStatus")).length;o<u;o++)a[o].checked&&l.push(a[o].getAttribute("data-filter"));for(var h=[],b=0,p=(a=e.querySelectorAll(".chkGenreFilter")).length;b<p;b++)a[b].checked&&h.push(a[b].getAttribute("data-filter"));if(n)n((function(t){return v(v({},t),{},{StartIndex:0,IsPlayed:e.querySelector(".chkPlayed").checked,IsUnplayed:e.querySelector(".chkUnplayed").checked,IsFavorite:e.querySelector(".chkFavorite").checked,IsResumable:e.querySelector(".chkResumable").checked,Is4K:e.querySelector(".chk4KFilter").checked,IsHD:e.querySelector(".chkHDFilter").checked,IsSD:e.querySelector(".chkSDFilter").checked,Is3D:e.querySelector(".chk3DFilter").checked,VideoTypes:r.join(","),SeriesStatus:l.join(","),HasSubtitles:e.querySelector(".chkSubtitle").checked,HasTrailer:e.querySelector(".chkTrailer").checked,HasSpecialFeature:e.querySelector(".chkSpecialFeature").checked,HasThemeSong:e.querySelector(".chkThemeSong").checked,HasThemeVideo:e.querySelector(".chkThemeVideo").checked,GenreIds:h.join(",")})}));else{for(var f=0,m=a.length;f<m;f++)"INPUT"===a[f].tagName?k(0,i+"-filter-"+a[f].getAttribute("data-settingname"),a[f]):k(0,i+"-filter-"+a[f].getAttribute("data-settingname"),a[f].querySelector("input"));d.setFilter(i+"-filter-GenreIds",h.join(","))}}(n,e.settings,e.settingsKey,e.setfilters),t()):t()}))}))}}])&&p(t.prototype,i),Object.defineProperty(t,"prototype",{writable:!1}),e}()},15856:function(e,t,i){var n=i(30325),a=i(57366),r=i(12801),s=(i(67752),Object.create(HTMLSelectElement.prototype));function c(){return!(!a.Z.edgeUwp&&!a.Z.xboxOne&&(a.Z.tizen||a.Z.orsay||a.Z.web0s||!a.Z.tv&&n.Z.tv))}function l(e){var t=o(e),i=t?t.textContent||t.innerText:null;r.default.show({items:e.options,positionTo:e,title:i}).then((function(t){!function(e,t){e.value=t}(e,t),function(e){var t=document.createEvent("HTMLEvents");t.initEvent("change",!1,!0),e.dispatchEvent(t)}(e)}))}function o(e){for(var t=e.previousSibling;t&&"LABEL"!==t.tagName;)t=t.previousSibling;return t}function u(){var e=o(this);e&&e.classList.add("selectLabelFocused")}function d(){var e=o(this);e&&e.classList.remove("selectLabelFocused")}function h(e){e.button||c()||(e.preventDefault(),l(this))}function b(e){switch(e.keyCode){case 13:return void(c()||(e.preventDefault(),l(this)));case 37:case 38:case 39:case 40:return void(n.Z.tv&&e.preventDefault())}}var p=0;s.createdCallback=function(){this.id||(this.id="embyselect"+p,p++),this.classList.add("emby-select-withcolor"),n.Z.tv&&this.classList.add("emby-select-focusscale"),this.addEventListener("mousedown",h),this.addEventListener("keydown",b),this.addEventListener("focus",u),this.addEventListener("blur",d)},s.attachedCallback=function(){var e;if(!this.classList.contains("emby-select")){this.classList.add("emby-select");var t,i=this.ownerDocument.createElement("label");i.innerText=this.getAttribute("label")||"",i.classList.add("selectLabel"),i.htmlFor=this.id,null===(e=this.parentNode)||void 0===e||e.insertBefore(i,this),this.classList.contains("emby-select-withcolor")&&(null===(t=this.parentNode)||void 0===t||t.insertAdjacentHTML("beforeend",'<div class="selectArrowContainer"><div style="visibility:hidden;display:none;">0</div><span class="selectArrow material-icons keyboard_arrow_down" aria-hidden="true"></span></div>'))}},s.setLabel=function(e){var t;(null===(t=this.parentNode)||void 0===t?void 0:t.querySelector("label")).innerText=e},document.registerElement("emby-select",{prototype:s,extends:"select"})}}]);