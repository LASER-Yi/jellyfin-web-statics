"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[73327],{73327:function(e,t,r){r.d(t,{ZP:function(){return w}}),r(66066),r(84159),r(13227),r(81414),r(37666),r(14011),r(11431),r(88646),r(54134),r(91270),r(59139),r(56187),r(38690),r(89228);var i,a=r(30325),n=r(94994);!function(e){e.None="none",e.SmallLibraryTiles="smalllibrarytiles",e.LibraryButtons="librarybuttons",e.ActiveRecordings="activerecordings",e.Resume="resume",e.ResumeAudio="resumeaudio",e.LatestMedia="latestmedia",e.NextUp="nextup",e.LiveTv="livetv",e.ResumeBook="resumebook"}(i||(i={}));var s=[i.SmallLibraryTiles,i.Resume,i.ResumeAudio,i.ResumeBook,i.LiveTv,i.NextUp,i.LatestMedia,i.None],o=r(60635),l=r(18613),d=r(61570);var c=r(65009),u=r.n(c),h=r(81038),m=r(66560),f=r(23509);var v=r(35478);var p={Audio:"audioplayback,markplayed",Video:"videoplayback,markplayed"};function b(e,t,r,i,a,s){var o,c="",u=null!==(o=p[i])&&void 0!==o?o:"markplayed";c+='<h2 class="sectionTitle sectionTitle-cards padded-left">'+n.ZP.translate(r)+"</h2>",s.enableOverflow?(c+='<div is="emby-scroller" class="padded-top-focusscale padded-bottom-focusscale" data-centerfocus="true">',c+='<div is="emby-itemscontainer" class="itemsContainer scrollSlider focuscontainer-x" data-monitor="'.concat(u,'">')):c+='<div is="emby-itemscontainer" class="itemsContainer padded-left padded-right vertical-wrap focuscontainer-x" data-monitor="'.concat(u,'">'),s.enableOverflow&&(c+="</div>"),c+="</div>",e.classList.add("hide"),e.innerHTML=c;var h=e.querySelector(".itemsContainer");h&&(h.fetchData=function(e,t,r){var i=r.enableOverflow;return function(){var r=l.Z.getApiClient(t),a={Limit:i?12:5,Recursive:!0,Fields:"PrimaryImageAspectRatio,BasicSyncInfo",ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Thumb",EnableTotalRecordCount:!1,MediaTypes:e};return r.getResumableItems(r.getCurrentUserId(),a)}}(i,t.serverId(),s),h.getItemsHtml=function(e,t,r){var i=r.enableOverflow;return function(r){return d.default.getCardsHtml({items:r,preferThumb:!0,inheritThumb:!e,shape:"Book"===t?(0,v.pk)(i):(0,v.gB)(i),overlayText:!1,showTitle:!0,showParentTitle:!0,lazy:!0,showDetailsMenu:!0,overlayPlayButton:!0,context:"home",centerText:!0,allowBottomPadding:!1,cardLayout:!1,showYear:!0,lines:2})}}(a.useEpisodeImagesInNextUpAndResume(),i,s),h.parentContainer=e)}function g(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,a=function(){};return{s:a,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,s=!0,o=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return s=e.done,e},e:function(e){o=!0,n=e},f:function(){try{s||null==r.return||r.return()}finally{if(o)throw n}}}}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function T(e){return e<0||e>s.length?"":s[e]}function C(e,t){for(var r=e.querySelectorAll(".itemsContainer"),i=[],a=0,n=r.length;a<n;a++)i.push(r[a].resume(t));return Promise.all(i)}function I(e,t,r,s,o,c,p){var g=c[p],y=e.querySelector(".section"+p),T={enableOverflow:!0};switch(g){case i.ActiveRecordings:!function(e,t,r,i){var a="";a+='<div class="sectionTitleContainer sectionTitleContainer-cards">',a+='<h2 class="sectionTitle sectionTitle-cards padded-left">'+(t?n.ZP.translate("HeaderActiveRecordings"):n.ZP.translate("HeaderLatestRecordings"))+"</h2>",a+="</div>",i.enableOverflow?(a+='<div is="emby-scroller" class="padded-top-focusscale padded-bottom-focusscale" data-centerfocus="true">',a+='<div is="emby-itemscontainer" class="itemsContainer scrollSlider focuscontainer-x">'):a+='<div is="emby-itemscontainer" class="itemsContainer padded-left padded-right vertical-wrap focuscontainer-x">',i.enableOverflow&&(a+="</div>"),a+="</div>",e.classList.add("hide"),e.innerHTML=a;var s=e.querySelector(".itemsContainer");s&&(s.fetchData=function(e,t,r){var i=r.enableOverflow;return function(){var r=l.Z.getApiClient(e);return r.getLiveTvRecordings({userId:r.getCurrentUserId(),Limit:i?12:5,Fields:"PrimaryImageAspectRatio,BasicSyncInfo",EnableTotalRecordCount:!1,IsLibraryItem:!!t&&null,IsInProgress:!!t||null})}}(r.serverId(),t,i),s.getItemsHtml=function(e,t){var r=t.enableOverflow;return function(t){return d.default.getCardsHtml({items:t,shape:r?"autooverflow":"auto",showTitle:!0,showParentTitle:!0,coverImage:!0,lazy:!0,showDetailsMenu:!0,centerText:!0,overlayText:!1,showYear:!0,lines:2,overlayPlayButton:!e,allowBottomPadding:!r,preferThumb:!0,cardLayout:!1,overlayMoreButton:e,action:e?"none":null,centerPlayButton:e})}}(t,i),s.parentContainer=e)}(y,!0,t,T);break;case i.LatestMedia:!function(e,t,r,i,s){var o,c;e.classList.remove("verticalSection");var h=["playlists","livetv","boxsets","channels"],f=null!==(c=null===(o=r.Configuration)||void 0===o?void 0:o.LatestItemsExcludes)&&void 0!==c?c:[];i.forEach((function(r){if(r.Id&&-1===f.indexOf(r.Id)&&r.CollectionType&&-1===h.indexOf(r.CollectionType)){var i=document.createElement("div");i.classList.add("verticalSection"),i.classList.add("hide"),e.appendChild(i),function(e,t,r,i,s){var o="";o+='<div class="sectionTitleContainer sectionTitleContainer-cards padded-left">',a.Z.tv?o+='<h2 class="sectionTitle sectionTitle-cards">'+n.ZP.translate("LatestFromLibrary",u()(i.Name))+"</h2>":(o+='<a is="emby-linkbutton" href="'+m.appRouter.getRouteUrl(i,{section:"latest"})+'" class="more button-flat button-flat-mini sectionTitleTextButton">',o+='<h2 class="sectionTitle sectionTitle-cards">',o+=n.ZP.translate("LatestFromLibrary",u()(i.Name)),o+="</h2>",o+='<span class="material-icons chevron_right" aria-hidden="true"></span>',o+="</a>"),o+="</div>",s.enableOverflow?(o+='<div is="emby-scroller" class="padded-top-focusscale padded-bottom-focusscale" data-centerfocus="true">',o+='<div is="emby-itemscontainer" class="itemsContainer scrollSlider focuscontainer-x">'):o+='<div is="emby-itemscontainer" class="itemsContainer focuscontainer-x padded-left padded-right vertical-wrap">',s.enableOverflow&&(o+="</div>"),o+="</div>",e.innerHTML=o;var c,h,f,p,b=e.querySelector(".itemsContainer");b&&(b.fetchData=(c=t.serverId(),h=i.Id,f=i.CollectionType,p=s.enableOverflow,function(){var e=l.Z.getApiClient(c),t=16;p?"music"===f&&(t=30):t="tvshows"===f?5:"music"===f?9:8;var r={Limit:t,Fields:"PrimaryImageAspectRatio,BasicSyncInfo,Path",ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Thumb",ParentId:h};return e.getLatestItems(r)}),b.getItemsHtml=function(e,t,r){var i=r.enableOverflow;return function(r){var a;return a="Channel"===e||"movies"===t||"books"===t||"tvshows"===t?(0,v.pk)(i):"music"===t||"homevideos"===t?(0,v.nY)(i):(0,v.gB)(i),d.default.getCardsHtml({items:r,shape:a,preferThumb:"movies"!==t&&"tvshows"!==t&&"Channel"!==e&&"music"!==t?"auto":null,showUnplayedIndicator:!1,showChildCountIndicator:!0,context:"home",overlayText:!1,centerText:!0,overlayPlayButton:"photos"!==t,allowBottomPadding:!i&&!0,cardLayout:!1,showTitle:"photos"!==t,showYear:"movies"===t||"tvshows"===t||!t,showParentTitle:"music"===t||"tvshows"===t||!t||!1,lines:2})}}(i.Type,i.CollectionType,s),b.parentContainer=e)}(i,t,0,r,s)}}))}(y,t,r,o,T);break;case i.LibraryButtons:!function(e,t){e.classList.remove("verticalSection");var r=function(e){var t="";t+='<div class="verticalSection verticalSection-extrabottompadding">',t+='<h2 class="sectionTitle sectionTitle-cards padded-left">'+n.ZP.translate("HeaderMyMedia")+"</h2>",t+='<div is="emby-itemscontainer" class="itemsContainer padded-left padded-right vertical-wrap focuscontainer-x" data-multiselect="false">';for(var r=0,i=e.length;r<i;r++){var a=e[r],s=f.ZP.getLibraryIcon(a.CollectionType);t+='<a is="emby-linkbutton" href="'+m.appRouter.getRouteUrl(a)+'" class="raised homeLibraryButton"><span class="material-icons homeLibraryIcon '+s+'" aria-hidden="true"></span><span class="homeLibraryText">'+u()(a.Name)+"</span></a>"}return(t+="</div>")+"</div>"}(t);e.innerHTML=r,h.default.lazyChildren(e)}(y,o);break;case i.LiveTv:return function(e,t,r,i){var s;return(null===(s=r.Policy)||void 0===s?void 0:s.EnableLiveTvAccess)?t.getLiveTvRecommendedPrograms({userId:t.getCurrentUserId(),IsAiring:!0,limit:1,ImageTypeLimit:1,EnableImageTypes:"Primary,Thumb,Backdrop",EnableTotalRecordCount:!1,Fields:"ChannelInfo,PrimaryImageAspectRatio"}).then((function(r){var s;(null===(s=r.Items)||void 0===s?void 0:s.length)&&function(e,t,r){var i="";e.classList.remove("padded-left"),e.classList.remove("padded-right"),e.classList.remove("padded-bottom"),e.classList.remove("verticalSection"),i+='<div class="verticalSection">',i+='<div class="sectionTitleContainer sectionTitleContainer-cards padded-left">',i+='<h2 class="sectionTitle sectionTitle-cards">'+n.ZP.translate("LiveTV")+"</h2>",i+="</div>",r.enableOverflow?(i+='<div is="emby-scroller" class="padded-top-focusscale padded-bottom-focusscale" data-centerfocus="true" data-scrollbuttons="false">',i+='<div class="padded-top padded-bottom scrollSlider focuscontainer-x">'):i+='<div class="padded-top padded-bottom focuscontainer-x">',i+='<a is="emby-linkbutton" href="'+m.appRouter.getRouteUrl("livetv",{serverId:t,section:"programs"})+'" class="raised"><span>'+n.ZP.translate("Programs")+"</span></a>",i+='<a is="emby-linkbutton" href="'+m.appRouter.getRouteUrl("livetv",{serverId:t,section:"guide"})+'" class="raised"><span>'+n.ZP.translate("Guide")+"</span></a>",i+='<a is="emby-linkbutton" href="'+m.appRouter.getRouteUrl("livetv",{serverId:t,section:"channels"})+'" class="raised"><span>'+n.ZP.translate("Channels")+"</span></a>",i+='<a is="emby-linkbutton" href="'+m.appRouter.getRouteUrl("recordedtv",{serverId:t})+'" class="raised"><span>'+n.ZP.translate("Recordings")+"</span></a>",i+='<a is="emby-linkbutton" href="'+m.appRouter.getRouteUrl("livetv",{serverId:t,section:"dvrschedule"})+'" class="raised"><span>'+n.ZP.translate("Schedule")+"</span></a>",i+='<a is="emby-linkbutton" href="'+m.appRouter.getRouteUrl("livetv",{serverId:t,section:"seriesrecording"})+'" class="raised"><span>'+n.ZP.translate("Series")+"</span></a>",i+="</div>",r.enableOverflow&&(i+="</div>"),i+="</div>",i+="</div>",i+='<div class="verticalSection">',i+='<div class="sectionTitleContainer sectionTitleContainer-cards padded-left">',a.Z.tv?i+='<h2 class="sectionTitle sectionTitle-cards">'+n.ZP.translate("HeaderOnNow")+"</h2>":(i+='<a is="emby-linkbutton" href="'+m.appRouter.getRouteUrl("livetv",{serverId:t,section:"onnow"})+'" class="more button-flat button-flat-mini sectionTitleTextButton">',i+='<h2 class="sectionTitle sectionTitle-cards">',i+=n.ZP.translate("HeaderOnNow"),i+="</h2>",i+='<span class="material-icons chevron_right" aria-hidden="true"></span>',i+="</a>"),i+="</div>",r.enableOverflow?(i+='<div is="emby-scroller" class="padded-top-focusscale padded-bottom-focusscale" data-centerfocus="true">',i+='<div is="emby-itemscontainer" class="itemsContainer scrollSlider focuscontainer-x">'):i+='<div is="emby-itemscontainer" class="itemsContainer padded-left padded-right vertical-wrap focuscontainer-x">',r.enableOverflow&&(i+="</div>"),i+="</div>",i+="</div>",e.innerHTML=i;var s,o=e.querySelector(".itemsContainer");o&&(o.parentContainer=e,o.fetchData=function(e){return function(){var t=l.Z.getApiClient(e);return t.getLiveTvRecommendedPrograms({userId:t.getCurrentUserId(),IsAiring:!0,limit:24,ImageTypeLimit:1,EnableImageTypes:"Primary,Thumb,Backdrop",EnableTotalRecordCount:!1,Fields:"ChannelInfo,PrimaryImageAspectRatio"})}}(t),o.getItemsHtml=(s=r.enableOverflow,function(e){return d.default.getCardsHtml({items:e,preferThumb:"auto",inheritThumb:!1,shape:s?"autooverflow":"auto",showParentTitleOrTitle:!0,showTitle:!0,centerText:!0,coverImage:!0,overlayText:!1,allowBottomPadding:!s,showAirTime:!0,showChannelName:!1,showAirDateTime:!1,showAirEndTime:!0,defaultShape:(0,v.gB)(s),lines:3,overlayPlayButton:!0})}))}(e,t.serverId(),i)})):Promise.resolve()}(y,t,r,T);case i.NextUp:!function(e,t,r,i){var s="";s+='<div class="sectionTitleContainer sectionTitleContainer-cards padded-left">',a.Z.tv?(s+='<h2 class="sectionTitle sectionTitle-cards">',s+=n.ZP.translate("NextUp"),s+="</h2>"):(s+='<a is="emby-linkbutton" href="'+m.appRouter.getRouteUrl("nextup",{serverId:t.serverId()})+'" class="button-flat button-flat-mini sectionTitleTextButton">',s+='<h2 class="sectionTitle sectionTitle-cards">',s+=n.ZP.translate("NextUp"),s+="</h2>",s+='<span class="material-icons chevron_right" aria-hidden="true"></span>',s+="</a>"),s+="</div>",i.enableOverflow?(s+='<div is="emby-scroller" class="padded-top-focusscale padded-bottom-focusscale" data-centerfocus="true">',s+='<div is="emby-itemscontainer" class="itemsContainer scrollSlider focuscontainer-x" data-monitor="videoplayback,markplayed">'):s+='<div is="emby-itemscontainer" class="itemsContainer padded-left padded-right vertical-wrap focuscontainer-x" data-monitor="videoplayback,markplayed">',i.enableOverflow&&(s+="</div>"),s+="</div>",e.classList.add("hide"),e.innerHTML=s;var o,c,u=e.querySelector(".itemsContainer");u&&(u.fetchData=function(e,t,r){var i=r.enableOverflow;return function(){var r=l.Z.getApiClient(e),a=new Date;return a.setDate(a.getDate()-t.maxDaysForNextUp()),r.getNextUpEpisodes({Limit:i?24:15,Fields:"PrimaryImageAspectRatio,DateCreated,BasicSyncInfo,Path,MediaSourceCount",UserId:r.getCurrentUserId(),ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb",EnableTotalRecordCount:!1,DisableFirstEpisode:!1,NextUpDateCutoff:a.toISOString(),EnableRewatching:t.enableRewatchingInNextUp()})}}(t.serverId(),r,i),u.getItemsHtml=(o=r.useEpisodeImagesInNextUpAndResume(),c=i.enableOverflow,function(e){return d.default.getCardsHtml({items:e,preferThumb:!0,inheritThumb:!o,shape:(0,v.gB)(c),overlayText:!1,showTitle:!0,showParentTitle:!0,lazy:!0,overlayPlayButton:!0,context:"home",centerText:!0,allowBottomPadding:!c,cardLayout:!1})}),u.parentContainer=e)}(y,t,s,T);break;case i.Resume:return b(y,t,"HeaderContinueWatching","Video",s,T);case i.ResumeAudio:return b(y,t,"HeaderContinueListening","Audio",s,T);case i.ResumeBook:return b(y,t,"HeaderContinueReading","Book",s,T);case i.SmallLibraryTiles:!function(e,t,r){var i=r.enableOverflow,a="";t.length&&(a+='<h2 class="sectionTitle sectionTitle-cards padded-left">'+n.ZP.translate("HeaderMyMedia")+"</h2>",i?(a+='<div is="emby-scroller" class="padded-top-focusscale padded-bottom-focusscale" data-centerfocus="true">',a+='<div is="emby-itemscontainer" class="itemsContainer scrollSlider focuscontainer-x">'):a+='<div is="emby-itemscontainer" class="itemsContainer padded-left padded-right focuscontainer-x vertical-wrap">',a+=d.default.getCardsHtml({items:t,shape:(0,v.gB)(i),showTitle:!0,centerText:!0,overlayText:!1,lazy:!0,transition:!1,allowBottomPadding:!i}),i&&(a+="</div>"),a+="</div>"),e.innerHTML=a,h.default.lazyChildren(e)}(y,o,T);break;default:y.innerHTML=""}return Promise.resolve()}r(61414),r(82427),r(24432),r(38228);var w={getDefaultSection:T,loadSections:function(e,t,r,s){return function(e,t){return e.getUserViews({},t||e.getCurrentUserId()).then((function(e){return e.Items}))}(t,r.Id).then((function(l){var d,c,u="";if(l.length){for(var h=a.Z.tv?8:7,m=0;m<h;m++)u+='<div class="verticalSection section'+m+'"></div>';e.innerHTML=u,e.classList.add("homeSectionsContainer");for(var f=[],v=function(e,t){for(var r=[],n=0;n<7;n++){var s=e.get("homesection"+n)||T(n);"folders"===s&&(s=T(0)),r.push(s)}return!a.Z.tv||r.includes(i.SmallLibraryTiles)||r.includes(i.LibraryButtons)?r:[i.SmallLibraryTiles].concat(r)}(s),p=0;p<v.length;p++)f.push(I(e,t,r,s,l,v,p));return Promise.all(f).then((function(){return new Promise((function(e){return setTimeout(e,0)}))})).then((function(){return C(e,{refresh:!0})}))}c=null!==(d=r.Policy)&&void 0!==d&&d.IsAdministrator?n.ZP.translate("NoCreatedLibraries",'<br><a id="button-createLibrary" class="button-link">',"</a>"):n.ZP.translate("AskAdminToCreateLibrary"),u+='<div class="centerMessage padded-left padded-right">',u+="<h2>"+n.ZP.translate("MessageNothingHere")+"</h2>",u+="<p>"+c+"</p>",u+="</div>",e.innerHTML=u;var b=e.querySelector("#button-createLibrary");b&&b.addEventListener("click",(function(){o.default.navigate("dashboard/libraries")}))}))},destroySections:function(e){var t,r=g(e.querySelectorAll(".itemsContainer"));try{for(r.s();!(t=r.n()).done;){var i=t.value;i.fetchData=null,i.parentContainer=null,i.getItemsHtml=null}}catch(e){r.e(e)}finally{r.f()}e.innerHTML=""},pause:function(e){var t,r=g(e.querySelectorAll(".itemsContainer"));try{for(r.s();!(t=r.n()).done;)t.value.pause()}catch(e){r.e(e)}finally{r.f()}},resume:C}},82427:function(e,t,r){r(13227),r(81414),r(37666),r(14011),r(11431),r(44901),r(54112);var i=r(61008),a=r(58517),n=r(48957),s=r(81038),o=r(30325),l=r(57366),d=r(72365),c=r(28540),u=r(34643),h=r(44038),m=r(67561),f=(r(67752),r(18613)),v=r(28172),p=Object.create(HTMLDivElement.prototype);function b(e){var t=this,r=t.multiSelect;!1!==(null==r?void 0:r.onContainerClick.call(t,e))&&i.ZP.onClick.call(t,e)}function g(e){return e.preventDefault(),e.stopPropagation(),!1}function y(e){var t=e.target,r=d.ZP.parentWithAttribute(t,"data-id");if(null!=r&&r.getAttribute("data-serverid"))return a.default.handleCommand("menu",{sourceElement:r}),e.preventDefault(),e.stopPropagation(),!1}function T(e,t,i){var a=this;Promise.all([r.e(61570),r.e(83264)]).then(r.bind(r,61570)).then((function(e){e.onUserDataChanged(i,a)}));var n=C(a);-1===n.indexOf("markfavorite")&&-1===n.indexOf("markplayed")||a.notifyRefreshNeeded()}function C(e){var t=e.getAttribute("data-monitor");return t?t.split(","):[]}function I(e,t,i){var a=this;if(-1===C(a).indexOf("timers")){var n=i.ProgramId,s=i.Id;Promise.all([r.e(61570),r.e(83264)]).then(r.bind(r,61570)).then((function(e){e.onTimerCreated(n,s,a)}))}else a.notifyRefreshNeeded()}function w(){-1!==C(this).indexOf("seriestimers")&&this.notifyRefreshNeeded()}function P(e,t,i){var a=this;-1===C(a).indexOf("timers")?Promise.all([r.e(61570),r.e(83264)]).then(r.bind(r,61570)).then((function(e){e.onTimerCancelled(i.Id,a)})):a.notifyRefreshNeeded()}function L(e,t,i){var a=this;-1===C(a).indexOf("seriestimers")?Promise.all([r.e(61570),r.e(83264)]).then(r.bind(r,61570)).then((function(e){e.onSeriesTimerCancelled(i.Id,a)})):a.notifyRefreshNeeded()}function S(e,t,r){var i=this,a=C(i);if(-1===a.indexOf("seriestimers")&&-1===a.indexOf("timers")){var n=r.ItemsAdded||[],s=r.ItemsRemoved||[];if(n.length||s.length){var o=i.getAttribute("data-parentid");if(o){var l=r.FoldersAddedTo||[],d=r.FoldersRemovedFrom||[],c=r.CollectionFolders||[];if(-1===l.indexOf(o)&&-1===d.indexOf(o)&&-1===c.indexOf(o))return}i.notifyRefreshNeeded()}}}function x(e,t){var r,i=this,a=t.state,n=C(i);if(a.NowPlayingItem&&"Video"===a.NowPlayingItem.MediaType){if(-1!==n.indexOf("videoplayback"))return void i.notifyRefreshNeeded(!0)}else if("Audio"===(null===(r=a.NowPlayingItem)||void 0===r?void 0:r.MediaType)&&-1!==n.indexOf("audioplayback"))return void i.notifyRefreshNeeded(!0)}function R(e,t,r,i){var a=r.bind(e);i=i||h.default,m.Z.on(i,t,a),e["event_"+t]=a}function A(e,t,r){var i=e["event_"+t];i&&(r=r||h.default,m.Z.off(r,t,i),e["event_"+t]=null)}function k(e,t){e.refreshInterval&&(clearInterval(e.refreshInterval),e.refreshInterval=null,t||(e.refreshIntervalEndTime=null))}function Z(e,t){k(e),t||(t=parseInt(e.getAttribute("data-refreshinterval")||"0",10)),t&&(e.refreshInterval=setInterval(e.notifyRefreshNeeded.bind(e),t),e.refreshIntervalEndTime=(new Date).getTime()+t)}function E(e){var t=e.Items||e,r=this.parentContainer;r&&(t.length?r.classList.remove("hide"):r.classList.add("hide"));var i,a,n=document.activeElement;this.contains(n)&&(a=!0,i=n.getAttribute("data-id")),this.innerHTML=this.getItemsHtml(t),s.default.lazyChildren(this),a&&function(e,t){if(t){var r=e.querySelector('[data-id="'+t+'"]');if(r)try{return void u.Z.focus(r)}catch(e){console.error(e)}}u.Z.autoFocus(e)}(this,i),Z(this),this.afterRefresh&&this.afterRefresh(e)}p.enableMultiSelect=function(e){var t=this.multiSelect;if(e){if(!t){var i=this;Promise.all([r.e(52943),r.e(9245)]).then(r.bind(r,8156)).then((function(e){var t=e.default;i.multiSelect=new t({container:i,bindOnClick:!1})}))}}else t&&(t.destroy(),this.multiSelect=null)},p.enableDragReordering=function(e){var t=this.sortable;if(e){if(!t){var r=this;r.sortable=new v.ZP(r,{draggable:".listItem",handle:".listViewDragHandle",onEnd:function(e){return function(e,t){var r=e.item,i=e.newIndex,a=r.getAttribute("data-playlistitemid"),n=r.getAttribute("data-playlistid");if(n){var s=r.getAttribute("data-serverid"),o=f.Z.getApiClient(s);c.ZP.show(),o.ajax({url:o.getUrl("Playlists/"+n+"/Items/"+a+"/Move/"+i),type:"POST"}).then((function(){c.ZP.hide()}),(function(){c.ZP.hide(),t.refreshItems()}))}else{var l=e.oldIndex;r.dispatchEvent(new CustomEvent("itemdrop",{detail:{oldIndex:l,newIndex:i,playlistItemId:a},bubbles:!0,cancelable:!1}))}}(e,r)}})}}else t&&(t.destroy(),this.sortable=null)},p.createdCallback=function(){this.classList.add("itemsContainer")},p.attachedCallback=function(){this.addEventListener("click",b),l.Z.touch?this.addEventListener("contextmenu",g):"false"!==this.getAttribute("data-contextmenu")&&this.addEventListener("contextmenu",y),(o.Z.desktop||o.Z.mobile&&"false"!==this.getAttribute("data-multiselect"))&&this.enableMultiSelect(!0),o.Z.tv&&this.classList.add("itemsContainer-tv"),i.ZP.on(this,{click:!1}),R(this,"UserDataChanged",T),R(this,"TimerCreated",I),R(this,"SeriesTimerCreated",w),R(this,"TimerCancelled",P),R(this,"SeriesTimerCancelled",L),R(this,"LibraryChanged",S),R(this,"playbackstop",x,n.O),"true"===this.getAttribute("data-dragreorder")&&this.enableDragReordering(!0)},p.detachedCallback=function(){k(this),this.enableMultiSelect(!1),this.enableDragReordering(!1),this.removeEventListener("click",b),this.removeEventListener("contextmenu",y),this.removeEventListener("contextmenu",g),i.ZP.off(this,{click:!1}),A(this,"UserDataChanged"),A(this,"TimerCreated"),A(this,"SeriesTimerCreated"),A(this,"TimerCancelled"),A(this,"SeriesTimerCancelled"),A(this,"LibraryChanged"),A(this,"playbackstop",n.O),this.fetchData=null,this.getItemsHtml=null,this.parentContainer=null},p.pause=function(){k(this,!0),this.paused=!0},p.resume=function(e){this.paused=!1;var t=this.refreshIntervalEndTime;if(t){var r=t-(new Date).getTime();r>0&&!this.needsRefresh?Z(this,r):(this.needsRefresh=!0,this.refreshIntervalEndTime=null)}return this.needsRefresh||null!=e&&e.refresh?this.refreshItems():Promise.resolve()},p.refreshItems=function(){return this.fetchData?this.paused?(this.needsRefresh=!0,Promise.resolve()):(this.needsRefresh=!1,this.fetchData().then(E.bind(this))):Promise.resolve()},p.notifyRefreshNeeded=function(e){if(this.paused)this.needsRefresh=!0;else{var t=this.refreshTimeout;t&&clearTimeout(t),!0===e?this.refreshItems():this.refreshTimeout=setTimeout(this.refreshItems.bind(this),1e4)}},document.registerElement("emby-itemscontainer",{prototype:p,extends:"div"})},24432:function(e,t,r){r(13227),r(81414),r(37666),r(14011),r(11431);var i=r(15723),a=r(72365),n=r(30325),s=r(58517),o=r(34643),l=r(57366),d=(r(67752),Object.create(HTMLDivElement.prototype));function c(e){var t=e.detail.command;"end"===t?(o.Z.focusLast(this,"."+this.getAttribute("data-navcommands")),e.preventDefault(),e.stopPropagation()):"pageup"===t?(o.Z.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),-12),e.preventDefault(),e.stopPropagation()):"pagedown"===t&&(o.Z.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),12),e.preventDefault(),e.stopPropagation())}d.createdCallback=function(){this.classList.add("emby-scroller")},d.scrollToBeginning=function(){this.scroller&&this.scroller.slideTo(0,!0)},d.toStart=function(e,t){this.scroller&&this.scroller.toStart(e,t)},d.toCenter=function(e,t){this.scroller&&this.scroller.toCenter(e,t)},d.scrollToPosition=function(e,t){this.scroller&&this.scroller.slideTo(e,t)},d.getScrollPosition=function(){if(this.scroller)return this.scroller.getScrollPosition()},d.getScrollSize=function(){if(this.scroller)return this.scroller.getScrollSize()},d.getScrollEventName=function(){if(this.scroller)return this.scroller.getScrollEventName()},d.getScrollSlider=function(){if(this.scroller)return this.scroller.getScrollSlider()},d.addScrollEventListener=function(e,t){this.scroller&&a.ZP.addEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},d.removeScrollEventListener=function(e,t){this.scroller&&a.ZP.removeEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},d.attachedCallback=function(){this.getAttribute("data-navcommands")&&s.default.on(this,c);var e="false"!==this.getAttribute("data-horizontal"),t=this.querySelector(".scrollSlider");e&&(t.style["white-space"]="nowrap");var d,u,h=n.Z.desktop&&e&&"false"!==this.getAttribute("data-scrollbuttons"),m={horizontal:e,mouseDragging:1,mouseWheel:"false"!==this.getAttribute("data-mousewheel"),touchDragging:1,slidee:t,scrollBy:200,speed:e?270:240,elasticBounds:1,dragHandle:1,autoImmediate:!0,skipSlideToWhenVisible:"true"===this.getAttribute("data-skipfocuswhenvisible"),dispatchScrollEvent:h||"true"===this.getAttribute("data-scrollevent"),hideScrollbar:h||"true"===this.getAttribute("data-hidescrollbar"),allowNativeSmoothScroll:"true"===this.getAttribute("data-allownativesmoothscroll")&&!h,allowNativeScroll:!h,forceHideScrollbars:h,requireAnimation:h&&l.Z.edge};this.scroller=new i.Z(this,m),this.scroller.init(),this.scroller.reload(),n.Z.tv&&this.getAttribute("data-centerfocus")&&(this,d=this.scroller,a.ZP.addEventListener(this,"focus",(function(e){var t=o.Z.focusableParent(e.target);t&&d.toCenter(t)}),{capture:!0,passive:!0})),h&&(u=this,r.e(39346).then(r.bind(r,39346)).then((function(){u.insertAdjacentHTML("beforebegin",'<div is="emby-scrollbuttons" class="emby-scrollbuttons padded-right"></div>')})))},d.pause=function(){var e=this.headroom;e&&e.pause()},d.resume=function(){var e=this.headroom;e&&e.resume()},d.detachedCallback=function(){this.getAttribute("data-navcommands")&&s.default.off(this,c);var e=this.headroom;e&&(e.destroy(),this.headroom=null);var t=this.scroller;t&&(t.destroy(),this.scroller=null)},document.registerElement("emby-scroller",{prototype:d,extends:"div"})}}]);