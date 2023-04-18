"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[56810,49213,23976],{8985:function(e,t,i){i.r(t),i(27471),i(61013),i(32081),i(43512),i(98010),i(63238),i(72410),i(15610),i(17460),i(52077),i(25901),i(92189),i(91047),i(5769),i(14078),i(72326);var n=i(28540),c=i(71487),o=i(94994),s=i(60635),r=i(56663),a=i(85951);function l(e,t){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!i){if(Array.isArray(e)||(i=function(e,t){if(e){if("string"==typeof e)return d(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?d(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var n=0,c=function(){};return{s:c,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,r=!1;return{s:function(){i=i.call(e)},n:function(){var e=i.next();return s=e.done,e},e:function(e){r=!0,o=e},f:function(){try{s||null==i.return||i.return()}finally{if(r)throw o}}}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function u(){var e=$(this).parents(".page")[0];return n.ZP.show(),h().then((function(t){!function(e,t){e.Name=$("#txtUserName",t).val(),e.Policy.IsAdministrator=$("#chkIsAdmin",t).is(":checked"),e.Policy.IsHidden=$("#chkIsHidden",t).is(":checked"),e.Policy.IsDisabled=$("#chkDisabled",t).is(":checked"),e.Policy.EnableRemoteControlOfOtherUsers=$("#chkEnableRemoteControlOtherUsers",t).is(":checked"),e.Policy.EnableLiveTvManagement=$("#chkManageLiveTv",t).is(":checked"),e.Policy.EnableLiveTvAccess=$("#chkEnableLiveTvAccess",t).is(":checked"),e.Policy.EnableSharedDeviceControl=$("#chkRemoteControlSharedDevices",t).is(":checked"),e.Policy.EnableMediaPlayback=$("#chkEnableMediaPlayback",t).is(":checked"),e.Policy.EnableAudioPlaybackTranscoding=$("#chkEnableAudioPlaybackTranscoding",t).is(":checked"),e.Policy.EnableVideoPlaybackTranscoding=$("#chkEnableVideoPlaybackTranscoding",t).is(":checked"),e.Policy.EnablePlaybackRemuxing=$("#chkEnableVideoPlaybackRemuxing",t).is(":checked"),e.Policy.EnableCollectionManagement=$("#chkEnableCollectionManagement",t).is(":checked"),e.Policy.ForceRemoteSourceTranscoding=$("#chkForceRemoteSourceTranscoding",t).is(":checked"),e.Policy.EnableContentDownloading=$("#chkEnableDownloading",t).is(":checked"),e.Policy.EnableRemoteAccess=$("#chkRemoteAccess",t).is(":checked"),e.Policy.RemoteClientBitrateLimit=parseInt(1e6*parseFloat($("#txtRemoteClientBitrateLimit",t).val()||"0"),10),e.Policy.LoginAttemptsBeforeLockout=parseInt($("#txtLoginAttemptsBeforeLockout",t).val()||"0",10),e.Policy.MaxActiveSessions=parseInt($("#txtMaxActiveSessions",t).val()||"0",10),e.Policy.AuthenticationProviderId=t.querySelector(".selectLoginProvider").value,e.Policy.PasswordResetProviderId=t.querySelector(".selectPasswordResetProvider").value,e.Policy.EnableContentDeletion=$("#chkEnableDeleteAllFolders",t).is(":checked"),e.Policy.EnableContentDeletionFromFolders=e.Policy.EnableContentDeletion?[]:$(".chkFolder",t).get().filter((function(e){return e.checked})).map((function(e){return e.getAttribute("data-id")})),ApiClient.isMinServerVersion("10.6.0")&&(e.Policy.SyncPlayAccess=t.querySelector("#selectSyncPlayAccess").value),ApiClient.updateUser(e).then((function(){ApiClient.updateUserPolicy(e.Id,e.Policy).then((function(){s.default.navigate("userprofiles.html"),n.ZP.hide(),(0,r.Z)(o.ZP.translate("SettingsSaved"))}))}))}(t,e)})),!1}function h(){var e=(0,a.a)("userId");return ApiClient.getUser(e)}$(document).on("pageinit","#editUserPage",(function(){$(".editUserProfileForm").off("submit",u).on("submit",u);var e=this;$("#chkEnableDeleteAllFolders",this).on("change",(function(){this.checked?$(".deleteAccess",e).hide():$(".deleteAccess",e).show()})),ApiClient.getServerConfiguration().then((function(t){t.EnableRemoteAccess?e.querySelector(".fldRemoteAccess").classList.remove("hide"):e.querySelector(".fldRemoteAccess").classList.add("hide")}))})).on("pagebeforeshow","#editUserPage",(function(){var e;e=this,n.ZP.show(),h().then((function(t){!function(e,t){ApiClient.getJSON(ApiClient.getUrl("Auth/Providers")).then((function(i){!function(e,t,i){i.length>1?e.querySelector(".fldSelectLoginProvider").classList.remove("hide"):e.querySelector(".fldSelectLoginProvider").classList.add("hide");var n=t.Policy.AuthenticationProviderId;e.querySelector(".selectLoginProvider").innerHTML=i.map((function(e){var t=e.Id===n||i.length<2?" selected":"";return'<option value="'+e.Id+'"'+t+">"+e.Name+"</option>"}))}(e,t,i)})),ApiClient.getJSON(ApiClient.getUrl("Auth/PasswordResetProviders")).then((function(i){!function(e,t,i){i.length>1?e.querySelector(".fldSelectPasswordResetProvider").classList.remove("hide"):e.querySelector(".fldSelectPasswordResetProvider").classList.add("hide");var n=t.Policy.PasswordResetProviderId;e.querySelector(".selectPasswordResetProvider").innerHTML=i.map((function(e){var t=e.Id===n||i.length<2?" selected":"";return'<option value="'+e.Id+'"'+t+">"+e.Name+"</option>"}))}(e,t,i)})),ApiClient.getJSON(ApiClient.getUrl("Library/MediaFolders",{IsHidden:!1})).then((function(i){!function(e,t,i){ApiClient.getJSON(ApiClient.getUrl("Channels",{SupportsMediaDeletion:!0})).then((function(n){var c,o,s="",r=l(i);try{for(r.s();!(o=r.n()).done;){var a=o.value;c=t.Policy.EnableContentDeletion||-1!=t.Policy.EnableContentDeletionFromFolders.indexOf(a.Id)?' checked="checked"':"",s+='<label><input type="checkbox" is="emby-checkbox" class="chkFolder" data-id="'+a.Id+'" '+c+"><span>"+a.Name+"</span></label>"}}catch(e){r.e(e)}finally{r.f()}var d,u=l(n.Items);try{for(u.s();!(d=u.n()).done;){var h=d.value;c=t.Policy.EnableContentDeletion||-1!=t.Policy.EnableContentDeletionFromFolders.indexOf(h.Id)?' checked="checked"':"",s+='<label><input type="checkbox" is="emby-checkbox" class="chkFolder" data-id="'+h.Id+'" '+c+"><span>"+h.Name+"</span></label>"}}catch(e){u.e(e)}finally{u.f()}$(".deleteAccess",e).html(s).trigger("create"),$("#chkEnableDeleteAllFolders",e).prop("checked",t.Policy.EnableContentDeletion)}))}(e,t,i.Items)})),t.Policy.IsDisabled?$(".disabledUserBanner",e).show():$(".disabledUserBanner",e).hide(),$("#txtUserName",e).prop("disabled","").removeAttr("disabled"),$("#fldConnectInfo",e).show(),$(".lnkEditUserPreferences",e).attr("href","mypreferencesmenu.html?userId="+t.Id),c.default.setTitle(t.Name),e.querySelector(".username").innerHTML=t.Name,$("#txtUserName",e).val(t.Name),$("#chkIsAdmin",e).prop("checked",t.Policy.IsAdministrator),$("#chkDisabled",e).prop("checked",t.Policy.IsDisabled),$("#chkIsHidden",e).prop("checked",t.Policy.IsHidden),$("#chkEnableCollectionManagement",e).prop("checked",t.Policy.chkEnableCollectionManagement),$("#chkRemoteControlSharedDevices",e).prop("checked",t.Policy.EnableSharedDeviceControl),$("#chkEnableRemoteControlOtherUsers",e).prop("checked",t.Policy.EnableRemoteControlOfOtherUsers),$("#chkEnableDownloading",e).prop("checked",t.Policy.EnableContentDownloading),$("#chkManageLiveTv",e).prop("checked",t.Policy.EnableLiveTvManagement),$("#chkEnableLiveTvAccess",e).prop("checked",t.Policy.EnableLiveTvAccess),$("#chkEnableMediaPlayback",e).prop("checked",t.Policy.EnableMediaPlayback),$("#chkEnableAudioPlaybackTranscoding",e).prop("checked",t.Policy.EnableAudioPlaybackTranscoding),$("#chkEnableVideoPlaybackTranscoding",e).prop("checked",t.Policy.EnableVideoPlaybackTranscoding),$("#chkEnableVideoPlaybackRemuxing",e).prop("checked",t.Policy.EnablePlaybackRemuxing),$("#chkForceRemoteSourceTranscoding",e).prop("checked",t.Policy.ForceRemoteSourceTranscoding),$("#chkRemoteAccess",e).prop("checked",null==t.Policy.EnableRemoteAccess||t.Policy.EnableRemoteAccess),$("#txtRemoteClientBitrateLimit",e).val(t.Policy.RemoteClientBitrateLimit/1e6||""),$("#txtLoginAttemptsBeforeLockout",e).val(t.Policy.LoginAttemptsBeforeLockout||"0"),$("#txtMaxActiveSessions",e).val(t.Policy.MaxActiveSessions||"0"),ApiClient.isMinServerVersion("10.6.0")&&$("#selectSyncPlayAccess").val(t.Policy.SyncPlayAccess),n.ZP.hide()}(e,t)}))}))},51869:function(e,t,i){t.ZP={getDeviceIcon:function(e){switch(e.AppName||e.Client){case"Samsung Smart TV":return"assets/img/devices/samsung.svg";case"Xbox One":return"assets/img/devices/xbox.svg";case"Sony PS4":return"assets/img/devices/playstation.svg";case"Kodi":case"Kodi JellyCon":return"assets/img/devices/kodi.svg";case"Jellyfin Android":case"AndroidTV":case"Android TV":return"assets/img/devices/android.svg";case"Jellyfin Mobile (iOS)":case"Jellyfin Mobile (iPadOS)":case"Jellyfin iOS":case"Infuse":return"assets/img/devices/apple.svg";case"Home Assistant":return"assets/img/devices/home-assistant.svg";case"Jellyfin Roku":return"assets/img/devices/roku.svg";case"Finamp":return"assets/img/devices/finamp.svg";case"Jellyfin Web":return function(e){switch(e){case"Opera":case"Opera TV":case"Opera Android":return"assets/img/devices/opera.svg";case"Chrome":case"Chrome Android":return"assets/img/devices/chrome.svg";case"Firefox":case"Firefox Android":return"assets/img/devices/firefox.svg";case"Safari":case"Safari iPad":case"Safari iPhone":return"assets/img/devices/safari.svg";case"Edge Chromium":case"Edge Chromium Android":case"Edge Chromium iPad":case"Edge Chromium iPhone":return"assets/img/devices/edgechromium.svg";case"Edge":return"assets/img/devices/edge.svg";case"Internet Explorer":return"assets/img/devices/msie.svg";default:return"assets/img/devices/html5.svg"}}(e.Name||e.DeviceName);default:return"assets/img/devices/other.svg"}},getLibraryIcon:function(e){switch(e){case"movies":return"video_library";case"music":return"library_music";case"photos":case"homevideos":return"photo_library";case"livetv":return"live_tv";case"tvshows":return"tv";case"trailers":return"local_movies";case"musicvideos":return"music_video";case"books":return"library_books";case"channels":return"videocam";case"playlists":return"view_list";default:return"folder"}}}}}]);