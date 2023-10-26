"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[77611],{77611:function(e,t,i){i.r(t),i.d(t,{default:function(){return x}}),i(5769),i(61013),i(27471),i(63238),i(61418),i(17460),i(14078),i(55849),i(48410),i(19068),i(87211),i(25901),i(92189),i(95163),i(99785),i(91047);var a=i(65009),l=i.n(a),n=i(72365),s=i(34643),c=i(93355),r=i(58517),o=i(30325),u=i(94994),b=i(60934),d=(i(12291),i(62033),i(38228),i(61414),i(15856),i(18613));function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function h(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,(void 0,l=function(e,t){if("object"!==p(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var a=i.call(e,"string");if("object"!==p(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(a.key),"symbol"===p(l)?l:String(l)),a)}var l}function f(e){return e.preventDefault(),!1}function m(e,t,i){!function(e,t,a,n,s){var c=e.querySelector(".genreFilters");n.length?c.classList.remove("hide"):c.classList.add("hide");var r="";r+=n.map((function(e){var t,a,n="";return n+="<label>",n+='<input is="emby-checkbox" type="checkbox"'+(t=e,(-1!==((a=-1===(i.settings.GenreIds||"").indexOf("|")?",":"|")+(i.settings.GenreIds||"")+a).indexOf(a+t.Id+a)?" checked":"")+' data-filter="')+e.Id+'" class="chkGenreFilter"/>',(n+="<span>"+l()(e.Name)+"</span>")+"</label>"})).join(""),c.querySelector(".filterOptions").innerHTML=r}(e,0,0,t.Genres)}function v(e,t,i){var a=i.checked;a=a||null,b.setFilter(t,a)}function y(e,t){for(var i=n.ZP.parentWithClass(e,"checkboxList-verticalwrap"),a=s.Z.getFocusableElements(i),l=-1,c=0,r=a.length;c<r;c++)if(a[c]===e){l=c;break}l+=t,l=Math.min(a.length-1,l);var o=a[l=Math.max(0,l)];o&&s.Z.focus(o)}function k(e,t,a){Promise.resolve().then(i.bind(i,54517)).then((function(i){var l=a?"on":"off";i.centerFocus[l](e,t)}))}function g(e){switch(e.detail.command){case"left":y(e.target,-1),e.preventDefault();break;case"right":y(e.target,1),e.preventDefault()}}function S(e,t){for(var i=e.querySelectorAll(".checkboxList-verticalwrap"),a=0,l=i.length;a<l;a++)t?r.default.on(i[a],g):r.default.off(i[a],g)}var x=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,i;return t=e,(i=[{key:"show",value:function(e){return new Promise((function(t){var i={removeOnClose:!0,scrollY:!1};o.Z.tv?i.size="fullscreen":i.size="small";var a=c.default.createDialog(i);a.classList.add("formDialog");var l="";l+='<div class="formDialogHeader">',l+='<button is="paper-icon-button-light" class="btnCancel hide-mouse-idle-tv" tabindex="-1" title="'.concat(u.ZP.translate("ButtonBack"),'"><span class="material-icons arrow_back" aria-hidden="true"></span></button>'),l+='<h3 class="formDialogHeaderTitle">${Filters}</h3>',l+="</div>",l+='<div class="formDialogContent smoothScrollY"> <div class="dialogContentInner dialog-content-centered"> <form style="margin:auto"> <div class="verticalSection verticalSection-extrabottompadding basicFilterSection focuscontainer-x" style="margin-top:2em"> <div class="checkboxList checkboxList-verticalwrap"> <label class="viewSetting simpleFilter" data-settingname="IsUnplayed"> <input type="checkbox" is="emby-checkbox" class="chkUnplayed"/> <span>${Unplayed}</span> </label> <label class="viewSetting simpleFilter" data-settingname="IsPlayed"> <input type="checkbox" is="emby-checkbox" class="chkPlayed"/> <span>${Played}</span> </label> <label class="viewSetting simpleFilter" data-settingname="IsFavorite"> <input type="checkbox" is="emby-checkbox" class="chkFavorite"/> <span>${Favorite}</span> </label> <label class="viewSetting simpleFilter" data-settingname="IsResumable"> <input type="checkbox" is="emby-checkbox" class="chkResumable"/> <span>${ContinueWatching}</span> </label> </div> </div> <div class="verticalSection verticalSection-extrabottompadding viewSetting focuscontainer-x" data-settingname="SeriesStatus"> <h2 class="checkboxListLabel">${HeaderSeriesStatus}</h2> <div class="checkboxList checkboxList-verticalwrap"> <label> <input type="checkbox" is="emby-checkbox" class="chkSeriesStatus" data-filter="Continuing"/> <span>${Continuing}</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkSeriesStatus" data-filter="Ended"/> <span>${Ended}</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkSeriesStatus" data-filter="Unreleased"/> <span>${Unreleased}</span> </label> </div> </div> <div class="verticalSection verticalSection-extrabottompadding hide genreFilters focuscontainer-x"> <h2 class="checkboxListLabel">${Genres}</h2> <div class="checkboxList checkboxList-verticalwrap filterOptions"> </div> </div> <div class="verticalSection verticalSection-extrabottompadding viewSetting focuscontainer-x" data-settingname="VideoType"> <h2 class="checkboxListLabel">${HeaderVideoType}</h2> <div class="checkboxList checkboxList-verticalwrap"> <label> <input type="checkbox" is="emby-checkbox" class="simpleFilter chkHDFilter" data-settingname="IsHD"/> <span>HD</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="simpleFilter chk4KFilter" data-settingname="Is4K"/> <span>4K</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="simpleFilter chkSDFilter" data-settingname="IsSD"/> <span>SD</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="simpleFilter chk3DFilter" data-settingname="Is3D"/> <span>3D</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkVideoTypeFilter" data-filter="Bluray"/> <span>Blu-ray</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkVideoTypeFilter" data-filter="Dvd"/> <span>DVD</span> </label> </div> </div> <div class="verticalSection verticalSection-extrabottompadding featureSection hide focuscontainer-x"> <h2 class="checkboxListLabel">${Features}</h2> <div class="checkboxList checkboxList-verticalwrap"> <label class="viewSetting simpleFilter" data-settingname="HasSubtitles"> <input type="checkbox" is="emby-checkbox" class="chkFeatureFilter chkSubtitle"/> <span>${Subtitles}</span> </label> <label class="viewSetting simpleFilter" data-settingname="HasTrailer"> <input type="checkbox" is="emby-checkbox" class="chkFeatureFilter chkTrailer"/> <span>${Trailers}</span> </label> <label class="viewSetting simpleFilter" data-settingname="HasSpecialFeature"> <input type="checkbox" is="emby-checkbox" class="chkFeatureFilter chkSpecialFeature"/> <span>${Extras}</span> </label> <label class="viewSetting simpleFilter" data-settingname="HasThemeSong"> <input type="checkbox" is="emby-checkbox" class="chkFeatureFilter chkThemeSong"/> <span>${ThemeSongs}</span> </label> <label class="viewSetting simpleFilter" data-settingname="HasThemeVideo"> <input type="checkbox" is="emby-checkbox" class="chkFeatureFilter chkThemeVideo"/> <span>${ThemeVideos}</span> </label> </div> </div> </form> </div> </div> ',a.innerHTML=u.ZP.translateHtml(l,"core");for(var n,s=a.querySelectorAll(".viewSetting"),r=0,p=s.length;r<p;r++)-1===e.visibleSettings.indexOf(s[r].getAttribute("data-settingname"))?s[r].classList.add("hide"):s[r].classList.remove("hide");!function(e,t){e.querySelector("form").addEventListener("submit",f);var i,a,l=e.querySelectorAll(".simpleFilter");for(i=0,a=l.length;i<a;i++)"INPUT"===l[i].tagName?l[i].checked=t[l[i].getAttribute("data-settingname")]||!1:l[i].querySelector("input").checked=t[l[i].getAttribute("data-settingname")]||!1;var n=t.VideoTypes?t.VideoTypes.split(","):[];for(i=0,a=(l=e.querySelectorAll(".chkVideoTypeFilter")).length;i<a;i++)l[i].checked=-1!==n.indexOf(l[i].getAttribute("data-filter"));var s=t.SeriesStatus?t.SeriesStatus.split(","):[];for(i=0,a=(l=e.querySelectorAll(".chkSeriesStatus")).length;i<a;i++)l[i].checked=-1!==s.indexOf(l[i].getAttribute("data-filter"));e.querySelector(".basicFilterSection .viewSetting:not(.hide)")?e.querySelector(".basicFilterSection").classList.remove("hide"):e.querySelector(".basicFilterSection").classList.add("hide"),e.querySelector(".featureSection .viewSetting:not(.hide)")?e.querySelector(".featureSection").classList.remove("hide"):e.querySelector(".featureSection").classList.add("hide")}(a,e.settings),function(e,t){var i=d.Z.getApiClient(t.serverId),a=Object.assign(t.filterMenuOptions,{UserId:i.getCurrentUserId(),ParentId:t.parentId,IncludeItemTypes:t.itemTypes.join(",")});i.getFilters(a).then((function(i){m(e,i,t)}))}(a,e),S(a,!0),a.querySelector(".btnCancel").addEventListener("click",(function(){c.default.close(a)})),o.Z.tv&&k(a.querySelector(".formDialogContent"),!1,!0),a.querySelector("form").addEventListener("change",(function(){n=!0}),!0),c.default.open(a).then((function(){return S(a,!1),o.Z.tv&&k(a.querySelector(".formDialogContent"),!1,!1),n?(function(e,t,i){e.querySelectorAll(".simpleFilter").forEach((function(e){"INPUT"===e.tagName?v(0,i+"-filter-"+e.getAttribute("data-settingname"),e):v(0,i+"-filter-"+e.getAttribute("data-settingname"),e.querySelector("input"))}));var a=[];e.querySelectorAll(".chkVideoTypeFilter").forEach((function(e){e.checked&&a.push(e.getAttribute("data-filter"))})),b.setFilter(i+"-filter-VideoTypes",a.join(","));var l=[];e.querySelectorAll(".chkSeriesStatus").forEach((function(e){e.checked&&l.push(e.getAttribute("data-filter"))})),b.setFilter("".concat(i,"-filter-SeriesStatus"),l.join(","));var n=[];e.querySelectorAll(".chkGenreFilter").forEach((function(e){e.checked&&n.push(e.getAttribute("data-filter"))})),b.setFilter(i+"-filter-GenreIds",n.join(","))}(a,e.settings,e.settingsKey),t()):t()}))}))}}])&&h(t.prototype,i),Object.defineProperty(t,"prototype",{writable:!1}),e}()}}]);