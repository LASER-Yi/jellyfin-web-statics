"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[27515,83264],{77086:function(e,t,n){t.Z={getDisplayPlayMethod:function(e){var t,n;return e.NowPlayingItem?null!==(t=e.TranscodingInfo)&&void 0!==t&&t.IsVideoDirect&&e.TranscodingInfo.IsAudioDirect?"Remux":null!==(n=e.TranscodingInfo)&&void 0!==n&&n.IsVideoDirect?"DirectStream":"Transcode"===e.PlayState.PlayMethod?"Transcode":"DirectStream"===e.PlayState.PlayMethod||"DirectPlay"===e.PlayState.PlayMethod?"DirectPlay":void 0:null}}},45193:function(e,t,n){n.r(t),n.d(t,{default:function(){return O}}),n(13227),n(81414),n(47134),n(37666),n(14011),n(11431),n(2663),n(48914),n(44901),n(84159);var a=n(65009),i=n.n(a),r=n(61693),s=n(67561),o=n(21776),l=n(44038),d=n(72365),c=n(94994),u=n(20990),g=n(49365),m=n(84597),h=n(77086),v=n(61570),f=n(81038),p=(n(96626),n(54112),n(54134),n(26031),n(95822),n(56187),n(38690),n(11908),n(33096),n(89228),n(98283)),y=(n(38228),n(18613)),P=n(37099),I=n(23472);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function S(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,T(a.key),a)}}function T(e){var t=function(e,t){if("object"!=b(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,"string");if("object"!=b(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==b(t)?t:String(t)}function C(e,t,n,a,r){null==a&&(a=parseInt(t.getAttribute("data-activitystartindex")||"0",10)),r=r||parseInt(t.getAttribute("data-activitylimit")||"7",10);var s=new Date,o=(0,I.s)(t.getAttribute("data-useractivity"),!0);o?s.setTime(s.getTime()-864e5):s.setTime(s.getTime()-6048e5),ApiClient.getJSON(ApiClient.getUrl("System/ActivityLog/Entries",{startIndex:a,limit:r,minDate:s.toISOString(),hasUserId:o})).then((function(s){if(t.setAttribute("data-activitystartindex",a),t.setAttribute("data-activitylimit",r),!a){var o=d.ZP.parentWithClass(t,"activityContainer");o&&(s.Items.length?o.classList.remove("hide"):o.classList.add("hide"))}e.items=s.Items,function(e,t,n){e.innerHTML=n.Items.map((function(e){return function(e,t){var n="";n+='<div class="listItem listItem-border">';var a="#00a4dc",r="notifications";return"Error"!=e.Severity&&"Fatal"!=e.Severity&&"Warn"!=e.Severity||(a="#cc0000",r="notification_important"),e.UserId&&e.UserPrimaryImageTag?n+='<span class="listItemIcon material-icons dvr" aria-hidden="true" style="width:2em!important;height:2em!important;padding:0;color:transparent;background-color:'+a+";background-image:url('"+t.getUserImageUrl(e.UserId,{type:"Primary",tag:e.UserPrimaryImageTag})+"');background-repeat:no-repeat;background-position:center center;background-size: cover;\"></span>":n+='<span class="listItemIcon material-icons '+r+'" aria-hidden="true" style="background-color:'+a+'"></span>',n+='<div class="listItemBody three-line">',n+='<div class="listItemBodyText">',n+=i()(e.Name),n+="</div>",n+='<div class="listItemBodyText secondary">',n+=(0,p.Z)(Date.parse(e.Date),Date.now(),{locale:(0,g.Kd)()}),n+="</div>",n+='<div class="listItemBodyText secondary listItemBodyText-nowrap">',n+=i()(e.ShortOverview||""),n+="</div>",n+="</div>",e.Overview&&(n+='<button type="button" is="paper-icon-button-light" class="btnEntryInfo" data-id="'.concat(e.Id,'" title="').concat(c.ZP.translate("Info"),'">\n                       <span class="material-icons info" aria-hidden="true"></span>\n                    </button>')),n+"</div>"}(e,t)})).join("")}(t,n,s)}))}function Z(e,t){var n=this.options;n&&n.serverId===t.serverId()&&C(this,n.element,t)}function L(e){var t=d.ZP.parentWithClass(e.target,"btnEntryInfo");if(t){var n=t.getAttribute("data-id"),a=this.items;if(a){var i=a.filter((function(e){return e.Id.toString()===n}))[0];i&&function(e){(0,P.Z)({text:e.Overview})}(i)}}}var k=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=t;var n=t.element;n.classList.add("activityLogListWidget"),n.addEventListener("click",L.bind(this));var a=y.Z.getApiClient(t.serverId);C(this,n,a);var i=Z.bind(this);this.updateFn=i,s.Z.on(l.default,"ActivityLogEntry",i),a.sendMessage("ActivityLogEntryStart","0,1500")}var t,n;return t=e,(n=[{key:"destroy",value:function(){var e=this.options;e&&(e.element.classList.remove("activityLogListWidget"),y.Z.getApiClient(e.serverId).sendMessage("ActivityLogEntryStop","0,1500"));var t=this.updateFn;t&&s.Z.off(l.default,"ActivityLogEntry",t),this.items=null,this.options=null}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),x=n(23509),A=n(24102),w=(n(82427),n(5607)),D=n(60635),R=n(3137),N=n(26059);function M(e,t){var n,a=[],i=h.Z.getDisplayPlayMethod(t);if("Remux"===i)n=c.ZP.translate("Remuxing"),a.push(c.ZP.translate("RemuxHelp1")),a.push("<br/>"),a.push(c.ZP.translate("RemuxHelp2"));else if("DirectStream"===i)n=c.ZP.translate("DirectStreaming"),a.push(c.ZP.translate("DirectStreamHelp1")),a.push("<br/>"),a.push(c.ZP.translate("DirectStreamHelp2"));else if("DirectPlay"===i)n=c.ZP.translate("DirectPlaying"),a.push(c.ZP.translate("DirectPlayHelp"));else if("Transcode"===i){var r;n=c.ZP.translate("Transcoding"),a.push(c.ZP.translate("MediaIsBeingConverted")),a.push(DashboardPage.getSessionNowPlayingStreamInfo(t)),null!==(r=t.TranscodingInfo)&&void 0!==r&&null!==(r=r.TranscodeReasons)&&void 0!==r&&r.length&&(a.push("<br/>"),a.push(c.ZP.translate("LabelReasonForTranscoding")),t.TranscodingInfo.TranscodeReasons.forEach((function(e){a.push(c.ZP.translate(e))})))}(0,P.Z)({text:a.join("<br/>"),title:n})}function U(e,t){n.e(23690).then(n.bind(n,23690)).then((function(e){(0,e.default)({title:c.ZP.translate("HeaderSendMessage"),label:c.ZP.translate("LabelMessageText"),confirmText:c.ZP.translate("ButtonSend")}).then((function(e){e&&y.Z.getApiClient(t.ServerId).sendMessageCommand(t.Id,{Text:e,TimeoutMs:5e3})}))}))}function q(e){var t=d.ZP.parentWithClass(e.target,"sessionCardButton");if(t){var a=d.ZP.parentWithClass(t,"card");if(a){var i=a.id,r=(DashboardPage.sessionsList||[]).filter((function(e){return"session"+e.Id===i}))[0];r&&(t.classList.contains("btnCardOptions")?function(e,t){n.e(12801).then(n.bind(n,12801)).then((function(n){var a,i=n.default,r=[];return t.ServerId&&t.DeviceId!==y.Z.deviceId()&&r.push({name:c.ZP.translate("SendMessage"),id:"sendmessage"}),null!==(a=t.TranscodingInfo)&&void 0!==a&&null!==(a=a.TranscodeReasons)&&void 0!==a&&a.length&&r.push({name:c.ZP.translate("ViewPlaybackInfo"),id:"transcodinginfo"}),i.show({items:r,positionTo:e}).then((function(e){switch(e){case"sendmessage":U(0,t);break;case"transcodinginfo":M(0,t)}}))}))}(t,r):t.classList.contains("btnSessionInfo")?M(0,r):t.classList.contains("btnSessionSendMessage")?U(0,r):t.classList.contains("btnSessionStop")?y.Z.getApiClient(r.ServerId).sendPlayStateCommand(r.Id,"Stop"):t.classList.contains("btnSessionPlayPause")&&r.PlayState&&y.Z.getApiClient(r.ServerId).sendPlayStateCommand(r.Id,"PlayPause"))}}}function B(e,t){t.getSystemInfo().then((function(t){e.querySelector("#serverName").innerText=c.ZP.translate("DashboardServerName",t.ServerName),e.querySelector("#versionNumber").innerText=c.ZP.translate("DashboardVersionNumber",t.Version),t.CanSelfRestart?e.querySelector("#btnRestartServer").classList.remove("hide"):e.querySelector("#btnRestartServer").classList.add("hide"),e.querySelector("#cachePath").innerText=t.CachePath,e.querySelector("#logPath").innerText=t.LogPath,e.querySelector("#transcodePath").innerText=t.TranscodingTempPath,e.querySelector("#metadataPath").innerText=t.InternalMetadataPath,e.querySelector("#webPath").innerText=t.WebPath}))}function E(e,t){(function(e,t){var n="";DashboardPage.sessionsList=t;var a=e.querySelector(".activeDevices"),r=a.querySelector(".card");r&&r.classList.add("deadSession");for(var s=0,o=t.length;s<o;s++){var l=t[s],d="session"+l.Id,u=e.querySelector("#"+d);if(u)DashboardPage.updateSession(u,l);else{var g,m,h=l.NowPlayingItem,v=DashboardPage.getNowPlayingImageUrl(h);n+='<div class="scalableCard card activeSession backdropCard backdropCard-scalable" id="'+d+'">',n+='<div class="cardBox visualCardBox">',n+='<div class="cardScalable visualCardBox-cardScalable">',n+='<div class="cardPadder cardPadder-backdrop"></div>',n+='<div class="cardContent '.concat((0,N.Rk)(),'">'),v?(n+='<div class="sessionNowPlayingContent sessionNowPlayingContent-withbackground"',n+=' data-src="'+v+'" style="display:inline-block;background-image:url(\''+v+"');\"></div>"):n+='<div class="sessionNowPlayingContent"></div>',n+='<div class="sessionNowPlayingInnerContent '.concat(v?"darkenContent":"",'">'),n+='<div class="sessionAppInfo">';var f=DashboardPage.getClientImage(l);f&&(n+=f),n+='<div class="sessionAppName" style="display:inline-block; text-align:left;"  dir="ltr" >',n+='<div class="sessionDeviceName">'+i()(l.DeviceName)+"</div>",n+='<div class="sessionAppSecondaryText">'+i()(DashboardPage.getAppSecondaryText(l))+"</div>",n+="</div>",n+="</div>",n+='<div class="sessionNowPlayingDetails">';var p=DashboardPage.getNowPlayingName(l);n+='<div class="sessionNowPlayingInfo" data-imgsrc="'+p.image+'">',n+='<span class="sessionNowPlayingName">'+p.html+"</span>",n+="</div>",n+='<div class="sessionNowPlayingTime">'+i()(DashboardPage.getSessionNowPlayingTime(l))+"</div>",n+="</div>";var P=100*(null==l||null===(g=l.PlayState)||void 0===g?void 0:g.PositionTicks)/(null==h?void 0:h.RunTimeTicks);n+=A.ZP.getProgressHtml(P||0,{containerClass:"playbackProgress"}),P=null==l||null===(m=l.TranscodingInfo)||void 0===m||null===(m=m.CompletionPercentage)||void 0===m?void 0:m.toFixed(1),n+=A.ZP.getProgressHtml(P||0,{containerClass:"transcodingProgress"}),n+=A.ZP.getProgressHtml(100,{containerClass:"backgroundProgress"}),n+="</div>",n+="</div>",n+="</div>",n+='<div class="sessionCardFooter cardFooter">',n+='<div class="sessionCardButtons flex align-items-center justify-content-center">';var I=l.ServerId&&l.NowPlayingItem&&l.SupportsRemoteControl?"":" hide";n+='<button is="paper-icon-button-light" class="sessionCardButton btnSessionPlayPause paper-icon-button-light '+I+'"><span class="material-icons '+(l.PlayState.IsPaused?"pause":"play_arrow")+'" aria-hidden="true"></span></button>',n+='<button is="paper-icon-button-light" class="sessionCardButton btnSessionStop paper-icon-button-light '+I+'"><span class="material-icons stop" aria-hidden="true"></span></button>',n+='<button is="paper-icon-button-light" class="sessionCardButton btnSessionInfo paper-icon-button-light '+I+'" title="'+c.ZP.translate("ViewPlaybackInfo")+'"><span class="material-icons info" aria-hidden="true"></span></button>',n+='<button is="paper-icon-button-light" class="sessionCardButton btnSessionSendMessage paper-icon-button-light '+(I=l.ServerId&&-1!==l.SupportedCommands.indexOf("DisplayMessage")&&l.DeviceId!==y.Z.deviceId()?"":" hide")+'" title="'+c.ZP.translate("SendMessage")+'"><span class="material-icons message" aria-hidden="true"></span></button>',n+="</div>",n+='<div class="flex align-items-center justify-content-center">';var b=DashboardPage.getUserImage(l);n+=b?'<div class="activitylogUserPhoto" style="background-image:url(\''+b+"');\"></div>":'<div style="height:1.71em;"></div>',n+='<div class="sessionUserName">',n+=DashboardPage.getUsersHtml(l),n+="</div>",n+="</div>",n+="</div>",n+="</div>",n+="</div>"}}a.insertAdjacentHTML("beforeend",n);var S=a.querySelector(".deadSession");S&&S.parentNode.removeChild(S)})(e,t=function(e){for(var t=[],n=(new Date).getTime()-9e5,a=0,i=e.length;a<i;a++){var s=e[a];(s.NowPlayingItem||s.UserId)&&r.ZP.parseISO8601Date(s.LastActivityDate,!0).getTime()>=n&&t.push(s)}return t}(t)),m.ZP.hide()}function W(e,t){t.getSessions({ActiveWithinSeconds:960}).then((function(t){E(e,t)})),t.getScheduledTasks().then((function(t){H(e,t)}))}function H(e,t){var n="";t=t.filter((function(e){return"Idle"!=e.State&&!e.IsHidden})),t.length?e.querySelector(".runningTasksContainer").classList.remove("hide"):e.querySelector(".runningTasksContainer").classList.add("hide");for(var a=0,i=t.length;a<i;a++){var r=t[a];if(n+="<p>",n+=r.Name+"<br/>","Running"===r.State){var s=(r.CurrentProgressPercentage||0).toFixed(1);n+='<progress max="100" value="'+s+'" title="'+s+'%">',n+=s+"%",n+="</progress>",n+="<span style='color:#00a4dc;margin-left:5px;margin-right:5px;'>"+s+"%</span>",n+='<button type="button" is="paper-icon-button-light" title="'+c.ZP.translate("ButtonStop")+'" onclick="DashboardPage.stopTask(this, \''+r.Id+'\');" class="autoSize"><span class="material-icons cancel" aria-hidden="true"></span></button>'}else"Cancelling"===r.State&&(n+='<span style="color:#cc0000;">'+c.ZP.translate("LabelStopping")+"</span>");n+="</p>"}e.querySelector("#divRunningTasks").innerHTML=n}function O(e){function t(e,t){console.debug("onRestartRequired not implemented",e,t)}function n(e,t){console.debug("onServerShuttingDown not implemented",e,t)}function a(e,t){console.debug("onServerRestarting not implemented",e,t)}function i(t,n){n.serverId()===d&&(W(e,n),B(e,n))}function r(t,n,a){n.serverId()===d&&E(e,a)}function o(t,n,a){n.serverId()===d&&H(e,a)}var d=ApiClient.serverId();e.querySelector(".activeDevices").addEventListener("click",q),e.addEventListener("viewshow",(function(){var d=this,c=ApiClient;c&&(m.ZP.show(),W(d,c),DashboardPage.startInterval(c),s.Z.on(l.default,"RestartRequired",t),s.Z.on(l.default,"ServerShuttingDown",n),s.Z.on(l.default,"ServerRestarting",a),s.Z.on(l.default,"PackageInstalling",i),s.Z.on(l.default,"PackageInstallationCompleted",i),s.Z.on(l.default,"Sessions",r),s.Z.on(l.default,"ScheduledTasksInfo",o),DashboardPage.lastAppUpdateCheck=null,B(d,ApiClient),d.userActivityLog||(d.userActivityLog=new k({serverId:ApiClient.serverId(),element:d.querySelector(".userActivityItems")})),d.serverActivityLog||(d.serverActivityLog=new k({serverId:ApiClient.serverId(),element:d.querySelector(".serverActivityItems")})),function(e,t){t.getLiveTvRecordings({UserId:D.default.getCurrentUserId(),IsInProgress:!0,Fields:"CanDelete,PrimaryImageAspectRatio",EnableTotalRecordCount:!1,EnableImageTypes:"Primary,Thumb,Backdrop"}).then((function(t){var n=e.querySelector(".activeRecordingItems");if(!t.Items.length)return e.querySelector(".activeRecordingsSection").classList.add("hide"),void(n.innerHTML="");e.querySelector(".activeRecordingsSection").classList.remove("hide"),n.innerHTML=v.default.getCardsHtml({items:t.Items,shape:"auto",defaultShape:"backdrop",showTitle:!0,showParentTitle:!0,coverImage:!0,cardLayout:!1,centerText:!0,preferThumb:"auto",overlayText:!1,overlayMoreButton:!0,action:"none",centerPlayButton:!0}),f.default.lazyChildren(n)}))}(e,c),m.ZP.hide()),(0,w.Z)({mode:"on",taskKey:"RefreshLibrary",button:d.querySelector(".btnRefresh")})})),e.addEventListener("viewbeforehide",(function(){var e=ApiClient;s.Z.off(l.default,"RestartRequired",t),s.Z.off(l.default,"ServerShuttingDown",n),s.Z.off(l.default,"ServerRestarting",a),s.Z.off(l.default,"PackageInstalling",i),s.Z.off(l.default,"PackageInstallationCompleted",i),s.Z.off(l.default,"Sessions",r),s.Z.off(l.default,"ScheduledTasksInfo",o),e&&DashboardPage.stopInterval(e),(0,w.Z)({mode:"off",taskKey:"RefreshLibrary",button:this.querySelector(".btnRefresh")})})),e.addEventListener("viewdestroy",(function(){var e=this.userActivityLog;e&&e.destroy();var t=this.serverActivityLog;t&&t.destroy()}))}window.DashboardPage={startInterval:function(e){e.sendMessage("SessionsStart","0,1500"),e.sendMessage("ScheduledTasksInfoStart","0,1000")},stopInterval:function(e){e.sendMessage("SessionsStop"),e.sendMessage("ScheduledTasksInfoStop")},getSessionNowPlayingStreamInfo:function(e){var t="",n=!1,a=h.Z.getDisplayPlayMethod(e);if("DirectPlay"===a)t+=c.ZP.translate("DirectPlaying");else if("Remux"===a)t+=c.ZP.translate("Remuxing");else if("DirectStream"===a)t+=c.ZP.translate("DirectStreaming");else if("Transcode"===a){var i;null!==(i=e.TranscodingInfo)&&void 0!==i&&i.Framerate&&(t+="".concat(c.ZP.translate("Framerate"),": ").concat(e.TranscodingInfo.Framerate,"fps")),n=!0}if(n){var r=[];e.TranscodingInfo&&(e.TranscodingInfo.Bitrate&&(e.TranscodingInfo.Bitrate>1e6?r.push((e.TranscodingInfo.Bitrate/1e6).toFixed(1)+" Mbps"):r.push(Math.floor(e.TranscodingInfo.Bitrate/1e3)+" Kbps")),e.TranscodingInfo.Container&&r.push(e.TranscodingInfo.Container.toUpperCase()),e.TranscodingInfo.VideoCodec&&r.push(e.TranscodingInfo.VideoCodec.toUpperCase()),e.TranscodingInfo.AudioCodec&&e.TranscodingInfo.AudioCodec!=e.TranscodingInfo.Container&&r.push(e.TranscodingInfo.AudioCodec.toUpperCase())),r.length&&(t+="<br/><br/>"+r.join(" "))}return t},getSessionNowPlayingTime:function(e){var t=e.NowPlayingItem,n="";return t&&(e.PlayState.PositionTicks?n+=r.ZP.getDisplayRunningTime(e.PlayState.PositionTicks):n+="0:00",n+=" / ",t.RunTimeTicks?n+=r.ZP.getDisplayRunningTime(t.RunTimeTicks):n+="0:00"),n},getAppSecondaryText:function(e){return e.Client+" "+e.ApplicationVersion},getNowPlayingName:function(e){var t,n,a="",r=e.NowPlayingItem;if(!r)return{html:c.ZP.translate("LastSeen",(0,u.Z)(Date.parse(e.LastActivityDate),(0,g.LP)())),image:a};var s=i()(o.ZP.getDisplayName(r)),l="";return null!==(t=r.Artists)&&void 0!==t&&t.length?(l=s,s=i()(r.Artists[0])):r.SeriesName||r.Album?(l=s,s=i()(r.SeriesName||r.Album)):r.ProductionYear&&(l=r.ProductionYear),null!==(n=r.ImageTags)&&void 0!==n&&n.Logo?a=ApiClient.getScaledImageUrl(r.Id,{tag:r.ImageTags.Logo,maxHeight:24,maxWidth:130,type:"Logo"}):r.ParentLogoImageTag&&(a=ApiClient.getScaledImageUrl(r.ParentLogoItemId,{tag:r.ParentLogoImageTag,maxHeight:24,maxWidth:130,type:"Logo"})),a&&(s='<img src="'+a+'" style="max-height:24px;max-width:130px;" />'),{html:l?s+"<br/>"+l:s,image:a}},getUsersHtml:function(e){var t=[];e.UserId&&t.push(i()(e.UserName));for(var n=0,a=e.AdditionalUsers.length;n<a;n++)t.push(i()(e.AdditionalUsers[n].UserName));return t.join(", ")},getUserImage:function(e){return e.UserId&&e.UserPrimaryImageTag?ApiClient.getUserImageUrl(e.UserId,{tag:e.UserPrimaryImageTag,type:"Primary"}):null},updateSession:function(e,t){var n,a,i;e.classList.remove("deadSession");var r=t.NowPlayingItem;r?(e.classList.add("playingSession"),e.querySelector(".btnSessionInfo").classList.remove("hide")):(e.classList.remove("playingSession"),e.querySelector(".btnSessionInfo").classList.add("hide")),t.ServerId&&-1!==t.SupportedCommands.indexOf("DisplayMessage")?e.querySelector(".btnSessionSendMessage").classList.remove("hide"):e.querySelector(".btnSessionSendMessage").classList.add("hide");var s=e.querySelector(".btnSessionPlayPause");t.ServerId&&r&&t.SupportsRemoteControl?(s.classList.remove("hide"),e.querySelector(".btnSessionStop").classList.remove("hide")):(s.classList.add("hide"),e.querySelector(".btnSessionStop").classList.add("hide"));var o=s.querySelector(".material-icons");o.classList.remove("play_arrow","pause"),o.classList.add(null!==(n=t.PlayState)&&void 0!==n&&n.IsPaused?"play_arrow":"pause"),e.querySelector(".sessionNowPlayingTime").innerText=DashboardPage.getSessionNowPlayingTime(t),e.querySelector(".sessionUserName").innerHTML=DashboardPage.getUsersHtml(t),e.querySelector(".sessionAppSecondaryText").innerText=DashboardPage.getAppSecondaryText(t);var l=DashboardPage.getNowPlayingName(t),d=e.querySelector(".sessionNowPlayingInfo");l.image&&l.image==d.getAttribute("data-imgsrc")||(d.innerHTML=l.html,d.setAttribute("data-imgsrc",l.image||""));var c=e.querySelector(".playbackProgress"),u=e.querySelector(".transcodingProgress"),g=100*(null==t||null===(a=t.PlayState)||void 0===a?void 0:a.PositionTicks)/(null==r?void 0:r.RunTimeTicks);c.outerHTML=A.ZP.getProgressHtml(g||0,{containerClass:"playbackProgress"}),g=null==t||null===(i=t.TranscodingInfo)||void 0===i||null===(i=i.CompletionPercentage)||void 0===i?void 0:i.toFixed(1),u.outerHTML=A.ZP.getProgressHtml(g||0,{containerClass:"transcodingProgress"});var m=DashboardPage.getNowPlayingImageUrl(r)||"",h=e.querySelector(".sessionNowPlayingContent");m!=h.getAttribute("data-src")&&(h.style.backgroundImage=m?"url('"+m+"')":"",h.setAttribute("data-src",m),m?(h.classList.add("sessionNowPlayingContent-withbackground"),e.querySelector(".sessionNowPlayingInnerContent").classList.add("darkenContent")):(h.classList.remove("sessionNowPlayingContent-withbackground"),e.querySelector(".sessionNowPlayingInnerContent").classList.remove("darkenContent")))},getClientImage:function(e){return"<img src='"+x.ZP.getDeviceIcon(e)+"' />"},getNowPlayingImageUrl:function(e){var t,n;if(null!=e&&null!==(t=e.BackdropImageTags)&&void 0!==t&&t.length)return ApiClient.getScaledImageUrl(e.Id,{maxWidth:Math.round(.2*d.ZP.getScreenWidth()),type:"Backdrop",tag:e.BackdropImageTags[0]});if(null!=e&&null!==(n=e.ParentBackdropImageTags)&&void 0!==n&&n.length)return ApiClient.getScaledImageUrl(e.ParentBackdropItemId,{maxWidth:Math.round(.2*d.ZP.getScreenWidth()),type:"Backdrop",tag:e.ParentBackdropImageTags[0]});if(null!=e&&e.BackdropImageTag)return ApiClient.getScaledImageUrl(e.BackdropItemId,{maxWidth:Math.round(.2*d.ZP.getScreenWidth()),type:"Backdrop",tag:e.BackdropImageTag});var a=(null==e?void 0:e.ImageTags)||{};return e&&a.Thumb?ApiClient.getScaledImageUrl(e.Id,{maxWidth:Math.round(.2*d.ZP.getScreenWidth()),type:"Thumb",tag:a.Thumb}):null!=e&&e.ParentThumbImageTag?ApiClient.getScaledImageUrl(e.ParentThumbItemId,{maxWidth:Math.round(.2*d.ZP.getScreenWidth()),type:"Thumb",tag:e.ParentThumbImageTag}):null!=e&&e.ThumbImageTag?ApiClient.getScaledImageUrl(e.ThumbItemId,{maxWidth:Math.round(.2*d.ZP.getScreenWidth()),type:"Thumb",tag:e.ThumbImageTag}):e&&a.Primary?ApiClient.getScaledImageUrl(e.Id,{maxWidth:Math.round(.2*d.ZP.getScreenWidth()),type:"Primary",tag:a.Primary}):null!=e&&e.PrimaryImageTag?ApiClient.getScaledImageUrl(e.PrimaryImageItemId,{maxWidth:Math.round(.2*d.ZP.getScreenWidth()),type:"Primary",tag:e.PrimaryImageTag}):null!=e&&e.AlbumPrimaryImageTag?ApiClient.getScaledImageUrl(e.AlbumId,{maxWidth:Math.round(.2*d.ZP.getScreenWidth()),type:"Primary",tag:e.AlbumPrimaryImageTag}):null},systemUpdateTaskKey:"SystemUpdateTask",stopTask:function(e,t){var n=d.ZP.parentWithClass(e,"page");ApiClient.stopScheduledTask(t).then((function(){W(n,ApiClient)}))},restart:function(e){(0,R.Z)({title:c.ZP.translate("Restart"),text:c.ZP.translate("MessageConfirmRestart"),confirmText:c.ZP.translate("Restart"),primary:"delete"}).then((function(){var t=d.ZP.parentWithClass(e,"page");t.querySelector("#btnRestartServer").disabled=!0,t.querySelector("#btnShutdown").disabled=!0,ApiClient.restartServer()}))},shutdown:function(e){(0,R.Z)({title:c.ZP.translate("ButtonShutdown"),text:c.ZP.translate("MessageConfirmShutdown"),confirmText:c.ZP.translate("ButtonShutdown"),primary:"delete"}).then((function(){var t=d.ZP.parentWithClass(e,"page");t.querySelector("#btnRestartServer").disabled=!0,t.querySelector("#btnShutdown").disabled=!0,ApiClient.shutdownServer()}))}}},82427:function(e,t,n){n(13227),n(81414),n(37666),n(14011),n(11431),n(44901),n(54112);var a=n(61008),i=n(58517),r=n(48957),s=n(81038),o=n(30325),l=n(57366),d=n(72365),c=n(84597),u=n(34643),g=n(44038),m=n(67561),h=(n(67752),n(18613)),v=n(28172),f=Object.create(HTMLDivElement.prototype);function p(e){var t=this,n=t.multiSelect;!1!==(null==n?void 0:n.onContainerClick.call(t,e))&&a.ZP.onClick.call(t,e)}function y(e){return e.preventDefault(),e.stopPropagation(),!1}function P(e){var t=e.target,n=d.ZP.parentWithAttribute(t,"data-id");if(null!=n&&n.getAttribute("data-serverid"))return i.default.handleCommand("menu",{sourceElement:n}),e.preventDefault(),e.stopPropagation(),!1}function I(e,t,a){var i=this;Promise.all([n.e(61570),n.e(83264)]).then(n.bind(n,61570)).then((function(e){e.onUserDataChanged(a,i)}));var r=b(i);-1===r.indexOf("markfavorite")&&-1===r.indexOf("markplayed")||i.notifyRefreshNeeded()}function b(e){var t=e.getAttribute("data-monitor");return t?t.split(","):[]}function S(e,t,a){var i=this;if(-1===b(i).indexOf("timers")){var r=a.ProgramId,s=a.Id;Promise.all([n.e(61570),n.e(83264)]).then(n.bind(n,61570)).then((function(e){e.onTimerCreated(r,s,i)}))}else i.notifyRefreshNeeded()}function T(){-1!==b(this).indexOf("seriestimers")&&this.notifyRefreshNeeded()}function C(e,t,a){var i=this;-1===b(i).indexOf("timers")?Promise.all([n.e(61570),n.e(83264)]).then(n.bind(n,61570)).then((function(e){e.onTimerCancelled(a.Id,i)})):i.notifyRefreshNeeded()}function Z(e,t,a){var i=this;-1===b(i).indexOf("seriestimers")?Promise.all([n.e(61570),n.e(83264)]).then(n.bind(n,61570)).then((function(e){e.onSeriesTimerCancelled(a.Id,i)})):i.notifyRefreshNeeded()}function L(e,t,n){var a=this,i=b(a);if(-1===i.indexOf("seriestimers")&&-1===i.indexOf("timers")){var r=n.ItemsAdded||[],s=n.ItemsRemoved||[];if(r.length||s.length){var o=a.getAttribute("data-parentid");if(o){var l=n.FoldersAddedTo||[],d=n.FoldersRemovedFrom||[],c=n.CollectionFolders||[];if(-1===l.indexOf(o)&&-1===d.indexOf(o)&&-1===c.indexOf(o))return}a.notifyRefreshNeeded()}}}function k(e,t){var n,a=this,i=t.state,r=b(a);if(i.NowPlayingItem&&"Video"===i.NowPlayingItem.MediaType){if(-1!==r.indexOf("videoplayback"))return void a.notifyRefreshNeeded(!0)}else if("Audio"===(null===(n=i.NowPlayingItem)||void 0===n?void 0:n.MediaType)&&-1!==r.indexOf("audioplayback"))return void a.notifyRefreshNeeded(!0)}function x(e,t,n,a){var i=n.bind(e);a=a||g.default,m.Z.on(a,t,i),e["event_"+t]=i}function A(e,t,n){var a=e["event_"+t];a&&(n=n||g.default,m.Z.off(n,t,a),e["event_"+t]=null)}function w(e,t){e.refreshInterval&&(clearInterval(e.refreshInterval),e.refreshInterval=null,t||(e.refreshIntervalEndTime=null))}function D(e,t){w(e),t||(t=parseInt(e.getAttribute("data-refreshinterval")||"0",10)),t&&(e.refreshInterval=setInterval(e.notifyRefreshNeeded.bind(e),t),e.refreshIntervalEndTime=(new Date).getTime()+t)}function R(e){var t=e.Items||e,n=this.parentContainer;n&&(t.length?n.classList.remove("hide"):n.classList.add("hide"));var a,i,r=document.activeElement;this.contains(r)&&(i=!0,a=r.getAttribute("data-id")),this.innerHTML=this.getItemsHtml(t),s.default.lazyChildren(this),i&&function(e,t){if(t){var n=e.querySelector('[data-id="'+t+'"]');if(n)try{return void u.Z.focus(n)}catch(e){console.error(e)}}u.Z.autoFocus(e)}(this,a),D(this),this.afterRefresh&&this.afterRefresh(e)}f.enableMultiSelect=function(e){var t=this.multiSelect;if(e){if(!t){var a=this;Promise.all([n.e(52943),n.e(9245)]).then(n.bind(n,8156)).then((function(e){var t=e.default;a.multiSelect=new t({container:a,bindOnClick:!1})}))}}else t&&(t.destroy(),this.multiSelect=null)},f.enableDragReordering=function(e){var t=this.sortable;if(e){if(!t){var n=this;n.sortable=new v.ZP(n,{draggable:".listItem",handle:".listViewDragHandle",onEnd:function(e){return function(e,t){var n=e.item,a=e.newIndex,i=n.getAttribute("data-playlistitemid"),r=n.getAttribute("data-playlistid");if(r){var s=n.getAttribute("data-serverid"),o=h.Z.getApiClient(s);c.ZP.show(),o.ajax({url:o.getUrl("Playlists/"+r+"/Items/"+i+"/Move/"+a),type:"POST"}).then((function(){c.ZP.hide()}),(function(){c.ZP.hide(),t.refreshItems()}))}else{var l=e.oldIndex;n.dispatchEvent(new CustomEvent("itemdrop",{detail:{oldIndex:l,newIndex:a,playlistItemId:i},bubbles:!0,cancelable:!1}))}}(e,n)}})}}else t&&(t.destroy(),this.sortable=null)},f.createdCallback=function(){this.classList.add("itemsContainer")},f.attachedCallback=function(){this.addEventListener("click",p),l.Z.touch?this.addEventListener("contextmenu",y):"false"!==this.getAttribute("data-contextmenu")&&this.addEventListener("contextmenu",P),(o.Z.desktop||o.Z.mobile&&"false"!==this.getAttribute("data-multiselect"))&&this.enableMultiSelect(!0),o.Z.tv&&this.classList.add("itemsContainer-tv"),a.ZP.on(this,{click:!1}),x(this,"UserDataChanged",I),x(this,"TimerCreated",S),x(this,"SeriesTimerCreated",T),x(this,"TimerCancelled",C),x(this,"SeriesTimerCancelled",Z),x(this,"LibraryChanged",L),x(this,"playbackstop",k,r.O),"true"===this.getAttribute("data-dragreorder")&&this.enableDragReordering(!0)},f.detachedCallback=function(){w(this),this.enableMultiSelect(!1),this.enableDragReordering(!1),this.removeEventListener("click",p),this.removeEventListener("contextmenu",P),this.removeEventListener("contextmenu",y),a.ZP.off(this,{click:!1}),A(this,"UserDataChanged"),A(this,"TimerCreated"),A(this,"SeriesTimerCreated"),A(this,"TimerCancelled"),A(this,"SeriesTimerCancelled"),A(this,"LibraryChanged"),A(this,"playbackstop",r.O),this.fetchData=null,this.getItemsHtml=null,this.parentContainer=null},f.pause=function(){w(this,!0),this.paused=!0},f.resume=function(e){this.paused=!1;var t=this.refreshIntervalEndTime;if(t){var n=t-(new Date).getTime();n>0&&!this.needsRefresh?D(this,n):(this.needsRefresh=!0,this.refreshIntervalEndTime=null)}return this.needsRefresh||null!=e&&e.refresh?this.refreshItems():Promise.resolve()},f.refreshItems=function(){return this.fetchData?this.paused?(this.needsRefresh=!0,Promise.resolve()):(this.needsRefresh=!1,this.fetchData().then(R.bind(this))):Promise.resolve()},f.notifyRefreshNeeded=function(e){if(this.paused)this.needsRefresh=!0;else{var t=this.refreshTimeout;t&&clearTimeout(t),!0===e?this.refreshItems():this.refreshTimeout=setTimeout(this.refreshItems.bind(this),1e4)}},document.registerElement("emby-itemscontainer",{prototype:f,extends:"div"})}}]);