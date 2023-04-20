"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[69227],{77611:function(e,t,i){i.r(t),i.d(t,{default:function(){return L}}),i(5769),i(61013),i(27471),i(63238),i(61418),i(17460),i(14078),i(48410),i(19068),i(87211),i(25901),i(92189),i(95163),i(99785),i(92571),i(98010),i(20252),i(55849),i(14009),i(12699),i(91047);var a=i(65009),c=i.n(a),r=i(72365),l=i(34643),n=i(93355),s=i(58517),o=i(30325),u=i(94994),b=i(60934),d=(i(12291),i(62033),i(38228),i(61414),i(15856),i(18613));function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function p(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,m(a.key),a)}}function y(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function f(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?y(Object(i),!0).forEach((function(t){k(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):y(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function k(e,t,i){return(t=m(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function m(e){var t=function(e,t){if("object"!==h(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var a=i.call(e,"string");if("object"!==h(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===h(t)?t:String(t)}function v(e){return e.preventDefault(),!1}function S(e,t,i){!function(e,t,a,r,l){var n=e.querySelector(".genreFilters");r.length?n.classList.remove("hide"):n.classList.add("hide");var s="";s+=r.map((function(e){var t,a,r="";return r+="<label>",r+='<input is="emby-checkbox" type="checkbox"'+(t=e,(-1!==((a=-1===(i.settings.GenreIds||"").indexOf("|")?",":"|")+(i.settings.GenreIds||"")+a).indexOf(a+t.Id+a)?" checked":"")+' data-filter="')+e.Id+'" class="chkGenreFilter"/>',(r+="<span>"+c()(e.Name)+"</span>")+"</label>"})).join(""),n.querySelector(".filterOptions").innerHTML=s}(e,0,0,t.Genres)}function g(e,t,i){var a=i.checked;a=a||null,b.setFilter(t,a)}function x(e,t){for(var i=r.ZP.parentWithClass(e,"checkboxList-verticalwrap"),a=l.Z.getFocusableElements(i),c=-1,n=0,s=a.length;n<s;n++)if(a[n]===e){c=n;break}c+=t,c=Math.min(a.length-1,c);var o=a[c=Math.max(0,c)];o&&l.Z.focus(o)}function F(e,t,a){Promise.resolve().then(i.bind(i,54517)).then((function(i){var c=a?"on":"off";i.centerFocus[c](e,t)}))}function w(e){switch(e.detail.command){case"left":x(e.target,-1),e.preventDefault();break;case"right":x(e.target,1),e.preventDefault()}}function q(e,t){for(var i=e.querySelectorAll(".checkboxList-verticalwrap"),a=0,c=i.length;a<c;a++)t?s.default.on(i[a],w):s.default.off(i[a],w)}var L=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,i;return t=e,(i=[{key:"show",value:function(e){return new Promise((function(t){var i={removeOnClose:!0,scrollY:!1};o.Z.tv?i.size="fullscreen":i.size="small";var a=n.default.createDialog(i);a.classList.add("formDialog");var c="";c+='<div class="formDialogHeader">',c+='<button is="paper-icon-button-light" class="btnCancel hide-mouse-idle-tv" tabindex="-1" title="'.concat(u.ZP.translate("ButtonBack"),'"><span class="material-icons arrow_back" aria-hidden="true"></span></button>'),c+='<h3 class="formDialogHeaderTitle">${Filters}</h3>',c+="</div>",c+='<div class="formDialogContent smoothScrollY"> <div class="dialogContentInner dialog-content-centered"> <form style="margin:auto"> <div class="verticalSection verticalSection-extrabottompadding basicFilterSection focuscontainer-x" style="margin-top:2em"> <div class="checkboxList checkboxList-verticalwrap"> <label class="viewSetting simpleFilter" data-settingname="IsUnplayed"> <input type="checkbox" is="emby-checkbox" class="chkUnplayed"/> <span>${Unplayed}</span> </label> <label class="viewSetting simpleFilter" data-settingname="IsPlayed"> <input type="checkbox" is="emby-checkbox" class="chkPlayed"/> <span>${Played}</span> </label> <label class="viewSetting simpleFilter" data-settingname="IsFavorite"> <input type="checkbox" is="emby-checkbox" class="chkFavorite"/> <span>${Favorite}</span> </label> <label class="viewSetting simpleFilter" data-settingname="IsResumable"> <input type="checkbox" is="emby-checkbox" class="chkResumable"/> <span>${ContinueWatching}</span> </label> </div> </div> <div class="verticalSection verticalSection-extrabottompadding viewSetting focuscontainer-x" data-settingname="SeriesStatus"> <h2 class="checkboxListLabel">${HeaderSeriesStatus}</h2> <div class="checkboxList checkboxList-verticalwrap"> <label> <input type="checkbox" is="emby-checkbox" class="chkSeriesStatus" data-filter="Continuing"/> <span>${Continuing}</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkSeriesStatus" data-filter="Ended"/> <span>${Ended}</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkSeriesStatus" data-filter="Unreleased"/> <span>${Unreleased}</span> </label> </div> </div> <div class="verticalSection verticalSection-extrabottompadding hide genreFilters focuscontainer-x"> <h2 class="checkboxListLabel">${Genres}</h2> <div class="checkboxList checkboxList-verticalwrap filterOptions"> </div> </div> <div class="verticalSection verticalSection-extrabottompadding viewSetting focuscontainer-x" data-settingname="VideoType"> <h2 class="checkboxListLabel">${HeaderVideoType}</h2> <div class="checkboxList checkboxList-verticalwrap"> <label> <input type="checkbox" is="emby-checkbox" class="simpleFilter chkHDFilter" data-settingname="IsHD"/> <span>HD</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="simpleFilter chk4KFilter" data-settingname="Is4K"/> <span>4K</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="simpleFilter chkSDFilter" data-settingname="IsSD"/> <span>SD</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="simpleFilter chk3DFilter" data-settingname="Is3D"/> <span>3D</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkVideoTypeFilter" data-filter="Bluray"/> <span>Blu-ray</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkVideoTypeFilter" data-filter="Dvd"/> <span>DVD</span> </label> </div> </div> <div class="verticalSection verticalSection-extrabottompadding featureSection hide focuscontainer-x"> <h2 class="checkboxListLabel">${Features}</h2> <div class="checkboxList checkboxList-verticalwrap"> <label class="viewSetting simpleFilter" data-settingname="HasSubtitles"> <input type="checkbox" is="emby-checkbox" class="chkFeatureFilter chkSubtitle"/> <span>${Subtitles}</span> </label> <label class="viewSetting simpleFilter" data-settingname="HasTrailer"> <input type="checkbox" is="emby-checkbox" class="chkFeatureFilter chkTrailer"/> <span>${Trailers}</span> </label> <label class="viewSetting simpleFilter" data-settingname="HasSpecialFeature"> <input type="checkbox" is="emby-checkbox" class="chkFeatureFilter chkSpecialFeature"/> <span>${Extras}</span> </label> <label class="viewSetting simpleFilter" data-settingname="HasThemeSong"> <input type="checkbox" is="emby-checkbox" class="chkFeatureFilter chkThemeSong"/> <span>${ThemeSongs}</span> </label> <label class="viewSetting simpleFilter" data-settingname="HasThemeVideo"> <input type="checkbox" is="emby-checkbox" class="chkFeatureFilter chkThemeVideo"/> <span>${ThemeVideos}</span> </label> </div> </div> </form> </div> </div> ',a.innerHTML=u.ZP.translateHtml(c,"core");for(var r,l=a.querySelectorAll(".viewSetting"),s=0,h=l.length;s<h;s++)-1===e.visibleSettings.indexOf(l[s].getAttribute("data-settingname"))?l[s].classList.add("hide"):l[s].classList.remove("hide");!function(e,t){e.querySelector("form").addEventListener("submit",v);var i,a,c=e.querySelectorAll(".simpleFilter");for(i=0,a=c.length;i<a;i++)"INPUT"===c[i].tagName?c[i].checked=t[c[i].getAttribute("data-settingname")]||!1:c[i].querySelector("input").checked=t[c[i].getAttribute("data-settingname")]||!1;var r=t.VideoTypes?t.VideoTypes.split(","):[];for(i=0,a=(c=e.querySelectorAll(".chkVideoTypeFilter")).length;i<a;i++)c[i].checked=-1!==r.indexOf(c[i].getAttribute("data-filter"));var l=t.SeriesStatus?t.SeriesStatus.split(","):[];for(i=0,a=(c=e.querySelectorAll(".chkSeriesStatus")).length;i<a;i++)c[i].checked=-1!==l.indexOf(c[i].getAttribute("data-filter"));e.querySelector(".basicFilterSection .viewSetting:not(.hide)")?e.querySelector(".basicFilterSection").classList.remove("hide"):e.querySelector(".basicFilterSection").classList.add("hide"),e.querySelector(".featureSection .viewSetting:not(.hide)")?e.querySelector(".featureSection").classList.remove("hide"):e.querySelector(".featureSection").classList.add("hide")}(a,e.settings),function(e,t){var i=d.Z.getApiClient(t.serverId),a=Object.assign(t.filterMenuOptions,{UserId:i.getCurrentUserId(),ParentId:t.parentId,IncludeItemTypes:t.itemTypes.join(",")});i.getFilters(a).then((function(i){S(e,i,t)}))}(a,e),q(a,!0),a.querySelector(".btnCancel").addEventListener("click",(function(){n.default.close(a)})),o.Z.tv&&F(a.querySelector(".formDialogContent"),!1,!0),a.querySelector("form").addEventListener("change",(function(){r=!0}),!0),n.default.open(a).then((function(){return q(a,!1),o.Z.tv&&F(a.querySelector(".formDialogContent"),!1,!1),r?(function(e,t,i,a){for(var c=e.querySelectorAll(".simpleFilter"),r=[],l=0,n=(c=e.querySelectorAll(".chkVideoTypeFilter")).length;l<n;l++)c[l].checked&&r.push(c[l].getAttribute("data-filter"));for(var s=[],o=0,u=(c=e.querySelectorAll(".chkSeriesStatus")).length;o<u;o++)c[o].checked&&s.push(c[o].getAttribute("data-filter"));for(var d=[],h=0,p=(c=e.querySelectorAll(".chkGenreFilter")).length;h<p;h++)c[h].checked&&d.push(c[h].getAttribute("data-filter"));if(a)a((function(t){return f(f({},t),{},{StartIndex:0,IsPlayed:e.querySelector(".chkPlayed").checked,IsUnplayed:e.querySelector(".chkUnplayed").checked,IsFavorite:e.querySelector(".chkFavorite").checked,IsResumable:e.querySelector(".chkResumable").checked,Is4K:e.querySelector(".chk4KFilter").checked,IsHD:e.querySelector(".chkHDFilter").checked,IsSD:e.querySelector(".chkSDFilter").checked,Is3D:e.querySelector(".chk3DFilter").checked,VideoTypes:r.join(","),SeriesStatus:s.join(","),HasSubtitles:e.querySelector(".chkSubtitle").checked,HasTrailer:e.querySelector(".chkTrailer").checked,HasSpecialFeature:e.querySelector(".chkSpecialFeature").checked,HasThemeSong:e.querySelector(".chkThemeSong").checked,HasThemeVideo:e.querySelector(".chkThemeVideo").checked,GenreIds:d.join(",")})}));else{for(var y=0,k=c.length;y<k;y++)"INPUT"===c[y].tagName?g(0,i+"-filter-"+c[y].getAttribute("data-settingname"),c[y]):g(0,i+"-filter-"+c[y].getAttribute("data-settingname"),c[y].querySelector("input"));b.setFilter(i+"-filter-GenreIds",d.join(","))}}(a,e.settings,e.settingsKey,e.setfilters),t()):t()}))}))}}])&&p(t.prototype,i),Object.defineProperty(t,"prototype",{writable:!1}),e}()}}]);