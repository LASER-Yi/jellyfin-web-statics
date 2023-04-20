"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[34681,49213,71483],{86875:function(e,t,n){n.r(t),n(5769),n(27471),n(61013),n(98010),n(63238),n(38217),n(32081),n(61418),n(17460),n(14078),n(72410),n(15610),n(52077),n(25901),n(92189),n(91047),n(51789);var a=n(61693),r=n(28540),i=n(71487),s=n(94994),o=(n(61414),n(56663)),l=n(85951);function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function u(e,t){var n=t.map((function(e){var t='<div class="listItem">';return t+='<div class="listItemBody">',t+='<h3 class="listItemBodyText">',t+=e,t+="</h3>",t+="</div>",(t+='<button type="button" is="paper-icon-button-light" class="blockedTag btnDeleteTag listItemButton" data-tag="'+e+'"><span class="material-icons delete"></span></button>')+"</div>"})).join("");n&&(n='<div class="paperList">'+n+"</div>");var a=e.querySelector(".blockedTags");a.innerHTML=n;var r,i=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,o=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){o=!0,i=e},f:function(){try{s||null==n.return||n.return()}finally{if(o)throw i}}}}(a.querySelectorAll(".btnDeleteTag"));try{for(i.s();!(r=i.n()).done;)r.value.addEventListener("click",(function(){var n=this.getAttribute("data-tag"),a=t.filter((function(e){return e!=n}));u(e,a)}))}catch(e){i.e(e)}finally{i.f()}}function d(e,t){var n="",a=0;n+=t.map((function(e){var t="";return t+='<div class="liSchedule listItem" data-day="'+e.DayOfWeek+'" data-start="'+e.StartHour+'" data-end="'+e.EndHour+'">',t+='<div class="listItemBody two-line">',t+='<h3 class="listItemBodyText">',t+=s.ZP.translate("Option"+e.DayOfWeek),t+="</h3>",t+='<div class="listItemBodyText secondary">'+v(e.StartHour)+" - "+v(e.EndHour)+"</div>",t+="</div>",t+='<button type="button" is="paper-icon-button-light" class="btnDelete listItemButton" data-index="'+a+'"><span class="material-icons delete"></span></button>',a++,t+"</div>"})).join("");var r=e.querySelector(".accessScheduleList");r.innerHTML=n,$(".btnDelete",r).on("click",(function(){!function(e,t,n){t.splice(n,1),d(e,t)}(e,t,parseInt(this.getAttribute("data-index"),10))}))}function v(e){var t=0,n=e%1;return n&&(t=parseInt(60*n,10)),a.ZP.getDisplayTime(new Date(2e3,1,1,e,t,0,0))}function f(e){return $(".liSchedule",e).map((function(){return{DayOfWeek:this.getAttribute("data-day"),StartHour:this.getAttribute("data-start"),EndHour:this.getAttribute("data-end")}})).get()}function h(e){return $(".blockedTag",e).map((function(){return this.getAttribute("data-tag")})).get()}window.UserParentalControlPage={onSubmit:function(){var e=$(this).parents(".page");r.ZP.show();var t=(0,l.a)("userId");return ApiClient.getUser(t).then((function(t){!function(e,t){e.Policy.MaxParentalRating=$("#selectMaxParentalRating",t).val()||null,e.Policy.BlockUnratedItems=$(".chkUnratedItem",t).get().filter((function(e){return e.checked})).map((function(e){return e.getAttribute("data-itemtype")})),e.Policy.AccessSchedules=f(t),e.Policy.BlockedTags=h(t),ApiClient.updateUserPolicy(e.Id,e.Policy).then((function(){r.ZP.hide(),(0,o.Z)(s.ZP.translate("SettingsSaved"))}))}(t,e)})),!1}},$(document).on("pageinit","#userParentalControlPage",(function(){var e=this;$(".btnAddSchedule",e).on("click",(function(){!function(e,t,a){t=t||{},n.e(39592).then(n.bind(n,39592)).then((function(n){n.default.show({schedule:t}).then((function(t){var n=f(e);-1==a&&(a=n.length),n[a]=t,d(e,n)}))}))}(e,{},-1)})),$(".btnAddBlockedTag",e).on("click",(function(){!function(e){n.e(23690).then(n.bind(n,23690)).then((function(t){(0,t.default)({label:s.ZP.translate("LabelTag")}).then((function(t){var n=h(e);-1==n.indexOf(t)&&(n.push(t),u(e,n))}))}))}(e)})),$(".userParentalControlForm").off("submit",UserParentalControlPage.onSubmit).on("submit",UserParentalControlPage.onSubmit)})).on("pageshow","#userParentalControlPage",(function(){var e=this;r.ZP.show();var t=(0,l.a)("userId"),n=ApiClient.getUser(t),a=ApiClient.getParentalRatings();Promise.all([n,a]).then((function(t){!function(e,t,n){e.querySelector(".username").innerHTML=t.Name,i.default.setTitle(t.Name),function(e,t){var n=[{name:s.ZP.translate("Books"),value:"Book"},{name:s.ZP.translate("Channels"),value:"ChannelContent"},{name:s.ZP.translate("LiveTV"),value:"LiveTvChannel"},{name:s.ZP.translate("Movies"),value:"Movie"},{name:s.ZP.translate("Music"),value:"Music"},{name:s.ZP.translate("Trailers"),value:"Trailer"},{name:s.ZP.translate("Shows"),value:"Series"}],a="";a+='<h3 class="checkboxListLabel">'+s.ZP.translate("HeaderBlockItemsWithNoRating")+"</h3>",a+='<div class="checkboxList paperList checkboxList-paperList">';for(var r=0,i=n.length;r<i;r++){var o=n[r],l=-1!=t.Policy.BlockUnratedItems.indexOf(o.value)?' checked="checked"':"";a+='<label><input type="checkbox" is="emby-checkbox" class="chkUnratedItem" data-itemtype="'+o.value+'" type="checkbox"'+l+"><span>"+o.name+"</span></label>"}a+="</div>",$(".blockUnratedItems",e).html(a).trigger("create")}(e,t),u(e,t.Policy.BlockedTags),function(e,t){var n,a="";a+="<option value=''></option>";for(var r=[],i=0,s=e.length;i<s;i++){if(n=e[i],r.length){var o=r[r.length-1];if(o.Value===n.Value){o.Name+="/"+n.Name;continue}}r.push({Name:n.Name,Value:n.Value})}for(var l=0,c=r.length;l<c;l++)a+="<option value='"+(n=r[l]).Value+"'>"+n.Name+"</option>";$("#selectMaxParentalRating",t).html(a)}(n,e);var a="";if(t.Policy.MaxParentalRating)for(var o=0,l=n.length;o<l;o++){var c=n[o];t.Policy.MaxParentalRating>=c.Value&&(a=c.Value)}$("#selectMaxParentalRating",e).val(a),t.Policy.IsAdministrator?$(".accessScheduleSection",e).hide():$(".accessScheduleSection",e).show(),d(e,t.Policy.AccessSchedules||[]),r.ZP.hide()}(e,t[0],t[1])}))}))},51869:function(e,t,n){var a="assets/img/devices/";t.ZP={getDeviceIcon:function(e){switch(e.AppName||e.Client){case"Samsung Smart TV":return a+"samsung.svg";case"Xbox One":return a+"xbox.svg";case"Sony PS4":return a+"playstation.svg";case"Kodi":case"Kodi JellyCon":return a+"kodi.svg";case"Jellyfin Android":case"AndroidTV":case"Android TV":return a+"android.svg";case"Jellyfin Mobile (iOS)":case"Jellyfin Mobile (iPadOS)":case"Jellyfin iOS":case"Infuse":return a+"apple.svg";case"Home Assistant":return a+"home-assistant.svg";case"Jellyfin Roku":return a+"roku.svg";case"Finamp":return a+"finamp.svg";case"Jellyfin Web":return function(e){switch(e){case"Opera":case"Opera TV":case"Opera Android":return a+"opera.svg";case"Chrome":case"Chrome Android":return a+"chrome.svg";case"Firefox":case"Firefox Android":return a+"firefox.svg";case"Safari":case"Safari iPad":case"Safari iPhone":return a+"safari.svg";case"Edge Chromium":case"Edge Chromium Android":case"Edge Chromium iPad":case"Edge Chromium iPhone":return a+"edgechromium.svg";case"Edge":return a+"edge.svg";case"Internet Explorer":return a+"msie.svg";default:return a+"html5.svg"}}(e.Name||e.DeviceName);default:return a+"other.svg"}},getLibraryIcon:function(e){switch(e){case"movies":return"video_library";case"music":return"library_music";case"photos":case"homevideos":return"photo_library";case"livetv":return"live_tv";case"tvshows":return"tv";case"trailers":return"local_movies";case"musicvideos":return"music_video";case"books":return"library_books";case"channels":return"videocam";case"playlists":return"view_list";default:return"folder"}}}}}]);