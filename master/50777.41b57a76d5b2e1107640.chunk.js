/*! For license information please see 50777.41b57a76d5b2e1107640.chunk.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[50777],{57530:function(e,t,r){"use strict";r.d(t,{Ay:function(){return x}}),r(29305),r(32733),r(84701),r(24776),r(69892),r(76281),r(44962),r(89336),r(78557),r(90076),r(95021),r(73687),r(83994),r(82367);var i,n=r(46782),a=r(11274),s=r(9482);!function(e){e.None="none",e.SmallLibraryTiles="smalllibrarytiles",e.LibraryButtons="librarybuttons",e.ActiveRecordings="activerecordings",e.Resume="resume",e.ResumeAudio="resumeaudio",e.LatestMedia="latestmedia",e.NextUp="nextup",e.LiveTv="livetv",e.ResumeBook="resumebook"}(i||(i={}));var o=[i.SmallLibraryTiles,i.Resume,i.ResumeAudio,i.ResumeBook,i.LiveTv,i.NextUp,i.LatestMedia,i.None],l=r(89100),c=r(52993),d=r(85427),u=r(86191),f=r(24468);var h=r(22696),v=r.n(h),m=r(58782),p=r(70267),b=r(40782);var y=r(80633);var g=r(65369);var T={Audio:"audioplayback,markplayed",Video:"videoplayback,markplayed"};function A(e,t,r,i,n,a){var o,l="",c=null!==(o=T[i])&&void 0!==o?o:"markplayed";l+='<h2 class="sectionTitle sectionTitle-cards padded-left">'+s.Ay.translate(r)+"</h2>",a.enableOverflow?(l+='<div is="emby-scroller" class="padded-top-focusscale padded-bottom-focusscale" data-centerfocus="true">',l+='<div is="emby-itemscontainer" class="itemsContainer scrollSlider focuscontainer-x" data-monitor="'.concat(c,'">')):l+='<div is="emby-itemscontainer" class="itemsContainer padded-left padded-right vertical-wrap focuscontainer-x" data-monitor="'.concat(c,'">'),a.enableOverflow&&(l+="</div>"),l+="</div>",e.classList.add("hide"),e.innerHTML=l;var d=e.querySelector(".itemsContainer");d&&(d.fetchData=function(e,t,r){var i=r.enableOverflow;return function(){var r=u.A.getApiClient(t),n={Limit:i?12:5,Recursive:!0,Fields:"PrimaryImageAspectRatio",ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Thumb",EnableTotalRecordCount:!1,MediaTypes:e};return r.getResumableItems(r.getCurrentUserId(),n)}}(i,t.serverId(),a),d.getItemsHtml=function(e,t,r){var i=r.enableOverflow;return function(r){return f.default.getCardsHtml({items:r,preferThumb:!0,inheritThumb:!e,shape:"Book"===t?(0,y.xK)(i):(0,y.UI)(i),overlayText:!1,showTitle:!0,showParentTitle:!0,lazy:!0,showDetailsMenu:!0,overlayPlayButton:!0,context:"home",centerText:!0,allowBottomPadding:!1,cardLayout:!1,showYear:!0,lines:2})}}(n.useEpisodeImagesInNextUpAndResume(),i,a),d.parentContainer=e)}function C(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return I(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?I(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,o=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return s=e.done,e},e:function(e){o=!0,a=e},f:function(){try{s||null==r.return||r.return()}finally{if(o)throw a}}}}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=Array(t);r<t;r++)i[r]=e[r];return i}function w(e){return e<0||e>o.length?"":o[e]}function L(e,t){for(var r=e.querySelectorAll(".itemsContainer"),i=[],n=0,a=r.length;n<a;n++)i.push(r[n].resume(t));return Promise.all(i)}function S(e,t,r,a,o,l,c){var d=l[c],h=e.querySelector(".section"+c),T={enableOverflow:!0};switch(d){case i.ActiveRecordings:!function(e,t,r,i){var n="";n+='<div class="sectionTitleContainer sectionTitleContainer-cards">',n+='<h2 class="sectionTitle sectionTitle-cards padded-left">'+(t?s.Ay.translate("HeaderActiveRecordings"):s.Ay.translate("HeaderLatestRecordings"))+"</h2>",n+="</div>",i.enableOverflow?(n+='<div is="emby-scroller" class="padded-top-focusscale padded-bottom-focusscale" data-centerfocus="true">',n+='<div is="emby-itemscontainer" class="itemsContainer scrollSlider focuscontainer-x">'):n+='<div is="emby-itemscontainer" class="itemsContainer padded-left padded-right vertical-wrap focuscontainer-x">',i.enableOverflow&&(n+="</div>"),n+="</div>",e.classList.add("hide"),e.innerHTML=n;var a=e.querySelector(".itemsContainer");a&&(a.fetchData=function(e,t,r){var i=r.enableOverflow;return function(){var r=u.A.getApiClient(e);return r.getLiveTvRecordings({userId:r.getCurrentUserId(),Limit:i?12:5,Fields:"PrimaryImageAspectRatio",EnableTotalRecordCount:!1,IsLibraryItem:!!t&&null,IsInProgress:!!t||null})}}(r.serverId(),t,i),a.getItemsHtml=function(e,t){var r=t.enableOverflow;return function(t){return f.default.getCardsHtml({items:t,shape:r?"autooverflow":"auto",showTitle:!0,showParentTitle:!0,coverImage:!0,lazy:!0,showDetailsMenu:!0,centerText:!0,overlayText:!1,showYear:!0,lines:2,overlayPlayButton:!e,allowBottomPadding:!r,preferThumb:!0,cardLayout:!1,overlayMoreButton:e,action:e?"none":null,centerPlayButton:e})}}(t,i),a.parentContainer=e)}(h,!0,t,T);break;case i.LatestMedia:!function(e,t,r,i,a){var o,l;e.classList.remove("verticalSection");var c=["playlists","livetv","boxsets","channels","folders"],d=null!==(l=null===(o=r.Configuration)||void 0===o?void 0:o.LatestItemsExcludes)&&void 0!==l?l:[];i.forEach((function(r){if(r.Id&&!d.includes(r.Id)&&(!r.CollectionType||!c.includes(r.CollectionType))){var i=document.createElement("div");i.classList.add("verticalSection"),i.classList.add("hide"),e.appendChild(i),function(e,t,r,i,a){var o="";o+='<div class="sectionTitleContainer sectionTitleContainer-cards padded-left">',n.A.tv?o+='<h2 class="sectionTitle sectionTitle-cards">'+s.Ay.translate("LatestFromLibrary",v()(i.Name))+"</h2>":(o+='<a is="emby-linkbutton" href="'+p.appRouter.getRouteUrl(i,{section:"latest"})+'" class="more button-flat button-flat-mini sectionTitleTextButton">',o+='<h2 class="sectionTitle sectionTitle-cards">',o+=s.Ay.translate("LatestFromLibrary",v()(i.Name)),o+="</h2>",o+='<span class="material-icons chevron_right" aria-hidden="true"></span>',o+="</a>"),o+="</div>",a.enableOverflow?(o+='<div is="emby-scroller" class="padded-top-focusscale padded-bottom-focusscale" data-centerfocus="true">',o+='<div is="emby-itemscontainer" class="itemsContainer scrollSlider focuscontainer-x">'):o+='<div is="emby-itemscontainer" class="itemsContainer focuscontainer-x padded-left padded-right vertical-wrap">',a.enableOverflow&&(o+="</div>"),o+="</div>",e.innerHTML=o;var l,c,d,h,m=e.querySelector(".itemsContainer");m&&(m.fetchData=(l=t.serverId(),c=i.Id,d=i.CollectionType,h=a.enableOverflow,function(){var e=u.A.getApiClient(l),t=16;h?d===g.X.Music&&(t=30):t=d===g.X.Tvshows?5:d===g.X.Music?9:8;var r={Limit:t,Fields:"PrimaryImageAspectRatio,Path",ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Thumb",ParentId:c};return e.getLatestItems(r)}),m.getItemsHtml=function(e,t,r){var i=r.enableOverflow;return function(r){var n,a=!1;return n="Channel"===e||"movies"===t||"books"===t||"tvshows"===t?(0,y.xK)(i):"music"===t||"homevideos"===t?(0,y.zP)(i):(0,y.UI)(i),f.default.getCardsHtml({items:r,shape:n,preferThumb:"movies"!==t&&"tvshows"!==t&&"Channel"!==e&&"music"!==t?"auto":null,showUnplayedIndicator:!1,showChildCountIndicator:!0,context:"home",overlayText:!1,centerText:!0,overlayPlayButton:"photos"!==t,allowBottomPadding:!i&&!0,cardLayout:a,showTitle:"photos"!==t,showYear:"movies"===t||"tvshows"===t||!t,showParentTitle:"music"===t||"tvshows"===t||!t||a,lines:2})}}(i.Type,i.CollectionType,a),m.parentContainer=e)}(i,t,0,r,a)}}))}(h,t,r,o,T);break;case i.LibraryButtons:!function(e,t){e.classList.remove("verticalSection");var r=function(e){var t="";t+='<div class="verticalSection verticalSection-extrabottompadding">',t+='<h2 class="sectionTitle sectionTitle-cards padded-left">'+s.Ay.translate("HeaderMyMedia")+"</h2>",t+='<div is="emby-itemscontainer" class="itemsContainer padded-left padded-right vertical-wrap focuscontainer-x" data-multiselect="false">';for(var r=0,i=e.length;r<i;r++){var n=e[r],a=b.Ay.getLibraryIcon(n.CollectionType);t+='<a is="emby-linkbutton" href="'+p.appRouter.getRouteUrl(n)+'" class="raised homeLibraryButton"><span class="material-icons homeLibraryIcon '+a+'" aria-hidden="true"></span><span class="homeLibraryText">'+v()(n.Name)+"</span></a>"}return(t+="</div>")+"</div>"}(t);e.innerHTML=r,m.default.lazyChildren(e)}(h,o);break;case i.LiveTv:return function(e,t,r,i){var a;return(null===(a=r.Policy)||void 0===a?void 0:a.EnableLiveTvAccess)?t.getLiveTvRecommendedPrograms({userId:t.getCurrentUserId(),IsAiring:!0,limit:1,ImageTypeLimit:1,EnableImageTypes:"Primary,Thumb,Backdrop",EnableTotalRecordCount:!1,Fields:"ChannelInfo,PrimaryImageAspectRatio"}).then((function(r){var a;(null===(a=r.Items)||void 0===a?void 0:a.length)&&function(e,t,r){var i="";e.classList.remove("padded-left"),e.classList.remove("padded-right"),e.classList.remove("padded-bottom"),e.classList.remove("verticalSection"),i+='<div class="verticalSection">',i+='<div class="sectionTitleContainer sectionTitleContainer-cards padded-left">',i+='<h2 class="sectionTitle sectionTitle-cards">'+s.Ay.translate("LiveTV")+"</h2>",i+="</div>",r.enableOverflow?(i+='<div is="emby-scroller" class="padded-top-focusscale padded-bottom-focusscale" data-centerfocus="true" data-scrollbuttons="false">',i+='<div class="padded-top padded-bottom scrollSlider focuscontainer-x">'):i+='<div class="padded-top padded-bottom focuscontainer-x">',i+='<a is="emby-linkbutton" href="'+p.appRouter.getRouteUrl("livetv",{serverId:t,section:"programs"})+'" class="raised"><span>'+s.Ay.translate("Programs")+"</span></a>",i+='<a is="emby-linkbutton" href="'+p.appRouter.getRouteUrl("livetv",{serverId:t,section:"guide"})+'" class="raised"><span>'+s.Ay.translate("Guide")+"</span></a>",i+='<a is="emby-linkbutton" href="'+p.appRouter.getRouteUrl("livetv",{serverId:t,section:"channels"})+'" class="raised"><span>'+s.Ay.translate("Channels")+"</span></a>",i+='<a is="emby-linkbutton" href="'+p.appRouter.getRouteUrl("recordedtv",{serverId:t})+'" class="raised"><span>'+s.Ay.translate("Recordings")+"</span></a>",i+='<a is="emby-linkbutton" href="'+p.appRouter.getRouteUrl("livetv",{serverId:t,section:"dvrschedule"})+'" class="raised"><span>'+s.Ay.translate("Schedule")+"</span></a>",i+='<a is="emby-linkbutton" href="'+p.appRouter.getRouteUrl("livetv",{serverId:t,section:"seriesrecording"})+'" class="raised"><span>'+s.Ay.translate("Series")+"</span></a>",i+="</div>",r.enableOverflow&&(i+="</div>"),i+="</div>",i+="</div>",i+='<div class="verticalSection">',i+='<div class="sectionTitleContainer sectionTitleContainer-cards padded-left">',n.A.tv?i+='<h2 class="sectionTitle sectionTitle-cards">'+s.Ay.translate("HeaderOnNow")+"</h2>":(i+='<a is="emby-linkbutton" href="'+p.appRouter.getRouteUrl("livetv",{serverId:t,section:"onnow"})+'" class="more button-flat button-flat-mini sectionTitleTextButton">',i+='<h2 class="sectionTitle sectionTitle-cards">',i+=s.Ay.translate("HeaderOnNow"),i+="</h2>",i+='<span class="material-icons chevron_right" aria-hidden="true"></span>',i+="</a>"),i+="</div>",r.enableOverflow?(i+='<div is="emby-scroller" class="padded-top-focusscale padded-bottom-focusscale" data-centerfocus="true">',i+='<div is="emby-itemscontainer" class="itemsContainer scrollSlider focuscontainer-x">'):i+='<div is="emby-itemscontainer" class="itemsContainer padded-left padded-right vertical-wrap focuscontainer-x">',r.enableOverflow&&(i+="</div>"),i+="</div>",i+="</div>",e.innerHTML=i;var a,o=e.querySelector(".itemsContainer");o&&(o.parentContainer=e,o.fetchData=function(e){return function(){var t=u.A.getApiClient(e);return t.getLiveTvRecommendedPrograms({userId:t.getCurrentUserId(),IsAiring:!0,limit:24,ImageTypeLimit:1,EnableImageTypes:"Primary,Thumb,Backdrop",EnableTotalRecordCount:!1,Fields:"ChannelInfo,PrimaryImageAspectRatio"})}}(t),o.getItemsHtml=(a=r.enableOverflow,function(e){return f.default.getCardsHtml({items:e,preferThumb:"auto",inheritThumb:!1,shape:a?"autooverflow":"auto",showParentTitleOrTitle:!0,showTitle:!0,centerText:!0,coverImage:!0,overlayText:!1,allowBottomPadding:!a,showAirTime:!0,showChannelName:!1,showAirDateTime:!1,showAirEndTime:!0,defaultShape:(0,y.UI)(a),lines:3,overlayPlayButton:!0})}))}(e,t.serverId(),i)})):Promise.resolve()}(h,t,r,T);case i.NextUp:!function(e,t,r,i){var a="";a+='<div class="sectionTitleContainer sectionTitleContainer-cards padded-left">',n.A.tv?(a+='<h2 class="sectionTitle sectionTitle-cards">',a+=s.Ay.translate("NextUp"),a+="</h2>"):(a+='<a is="emby-linkbutton" href="'+p.appRouter.getRouteUrl("nextup",{serverId:t.serverId()})+'" class="button-flat button-flat-mini sectionTitleTextButton">',a+='<h2 class="sectionTitle sectionTitle-cards">',a+=s.Ay.translate("NextUp"),a+="</h2>",a+='<span class="material-icons chevron_right" aria-hidden="true"></span>',a+="</a>"),a+="</div>",i.enableOverflow?(a+='<div is="emby-scroller" class="padded-top-focusscale padded-bottom-focusscale" data-centerfocus="true">',a+='<div is="emby-itemscontainer" class="itemsContainer scrollSlider focuscontainer-x" data-monitor="videoplayback,markplayed">'):a+='<div is="emby-itemscontainer" class="itemsContainer padded-left padded-right vertical-wrap focuscontainer-x" data-monitor="videoplayback,markplayed">',i.enableOverflow&&(a+="</div>"),a+="</div>",e.classList.add("hide"),e.innerHTML=a;var o,l,c=e.querySelector(".itemsContainer");c&&(c.fetchData=function(e,t,r){var i=r.enableOverflow;return function(){var r=u.A.getApiClient(e),n=new Date;return n.setDate(n.getDate()-t.maxDaysForNextUp()),r.getNextUpEpisodes({Limit:i?24:15,Fields:"PrimaryImageAspectRatio,DateCreated,Path,MediaSourceCount",UserId:r.getCurrentUserId(),ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb",EnableTotalRecordCount:!1,DisableFirstEpisode:!1,NextUpDateCutoff:n.toISOString(),EnableResumable:!1,EnableRewatching:t.enableRewatchingInNextUp()})}}(t.serverId(),r,i),c.getItemsHtml=(o=r.useEpisodeImagesInNextUpAndResume(),l=i.enableOverflow,function(e){return f.default.getCardsHtml({items:e,preferThumb:!0,inheritThumb:!o,shape:(0,y.UI)(l),overlayText:!1,showTitle:!0,showParentTitle:!0,lazy:!0,overlayPlayButton:!0,context:"home",centerText:!0,allowBottomPadding:!l,cardLayout:!1})}),c.parentContainer=e)}(h,t,a,T);break;case i.Resume:return A(h,t,"HeaderContinueWatching","Video",a,T);case i.ResumeAudio:return A(h,t,"HeaderContinueListening","Audio",a,T);case i.ResumeBook:return A(h,t,"HeaderContinueReading","Book",a,T);case i.SmallLibraryTiles:!function(e,t,r){var i=r.enableOverflow,n="";t.length&&(n+='<h2 class="sectionTitle sectionTitle-cards padded-left">'+s.Ay.translate("HeaderMyMedia")+"</h2>",i?(n+='<div is="emby-scroller" class="padded-top-focusscale padded-bottom-focusscale" data-centerfocus="true">',n+='<div is="emby-itemscontainer" class="itemsContainer scrollSlider focuscontainer-x">'):n+='<div is="emby-itemscontainer" class="itemsContainer padded-left padded-right focuscontainer-x vertical-wrap">',n+=f.default.getCardsHtml({items:t,shape:(0,y.UI)(i),showTitle:!0,centerText:!0,overlayText:!1,lazy:!0,transition:!1,allowBottomPadding:!i}),i&&(n+="</div>"),n+="</div>"),e.innerHTML=n,m.default.lazyChildren(e)}(h,o,T);break;default:h.innerHTML=""}return Promise.resolve()}r(15453),r(1177),r(41765),r(10353);var x={getDefaultSection:w,loadSections:function(e,t,r,o){var u=r.Id||t.getCurrentUserId();return d.q.fetchQuery((0,a.q)((0,c.C)(t),u)).then((function(e){return e.Items||[]})).then((function(a){var c,d,u="";if(a.length){for(var f=n.A.tv?8:7,h=0;h<f;h++)u+='<div class="verticalSection section'+h+'"></div>';e.innerHTML=u,e.classList.add("homeSectionsContainer");for(var v=[],m=function(e,t){for(var r=[],a=0;a<7;a++){var s=e.get("homesection"+a)||w(a);"folders"===s&&(s=w(0)),r.push(s)}return!n.A.tv||r.includes(i.SmallLibraryTiles)||r.includes(i.LibraryButtons)?r:[i.SmallLibraryTiles].concat(r)}(o),p=0;p<m.length;p++)v.push(S(e,t,r,o,a,m,p));return Promise.all(v).then((function(){return new Promise((function(e){return setTimeout(e,0)}))})).then((function(){return L(e,{refresh:!0})}))}d=null!==(c=r.Policy)&&void 0!==c&&c.IsAdministrator?s.Ay.translate("NoCreatedLibraries",'<br><a id="button-createLibrary" class="button-link">',"</a>"):s.Ay.translate("AskAdminToCreateLibrary"),u+='<div class="centerMessage padded-left padded-right">',u+="<h2>"+s.Ay.translate("MessageNothingHere")+"</h2>",u+="<p>"+d+"</p>",u+="</div>",e.innerHTML=u;var b=e.querySelector("#button-createLibrary");b&&b.addEventListener("click",(function(){l.default.navigate("dashboard/libraries")}))}))},destroySections:function(e){var t,r=C(e.querySelectorAll(".itemsContainer"));try{for(r.s();!(t=r.n()).done;){var i=t.value;i.fetchData=null,i.parentContainer=null,i.getItemsHtml=null}}catch(e){r.e(e)}finally{r.f()}e.innerHTML=""},pause:function(e){var t,r=C(e.querySelectorAll(".itemsContainer"));try{for(r.s();!(t=r.n()).done;)t.value.pause()}catch(e){r.e(e)}finally{r.f()}},resume:L}},1177:function(e,t,r){"use strict";r(44962),r(84734),r(78557),r(96054),r(90076),r(83994),r(82367);var i=r(22832),n=r(38490),a=r(80669),s=r(58782),o=r(46782),l=r(34789),c=r(47629),d=r(56869),u=r(9164),f=r(10736),h=r(62014),v=(r(69177),r(86191)),m=r(65210),p=Object.create(HTMLDivElement.prototype);function b(e){var t=this,r=t.multiSelect;!1!==(null==r?void 0:r.onContainerClick.call(t,e))&&i.Ay.onClick.call(t,e)}function y(e){return e.preventDefault(),e.stopPropagation(),!1}function g(e){var t=e.target,r=c.Ay.parentWithAttribute(t,"data-id");if(null!=r&&r.getAttribute("data-serverid"))return n.default.handleCommand("menu",{sourceElement:r}),e.preventDefault(),e.stopPropagation(),!1}function T(e,t,i){var n=this;Promise.all([r.e(45642),r.e(24468),r.e(95947)]).then(r.bind(r,24468)).then((function(e){e.onUserDataChanged(i,n)}));var a=A(n);-1===a.indexOf("markfavorite")&&-1===a.indexOf("markplayed")||n.notifyRefreshNeeded()}function A(e){var t=e.getAttribute("data-monitor");return t?t.split(","):[]}function C(e,t,i){var n=this;if(-1===A(n).indexOf("timers")){var a=i.ProgramId,s=i.Id;Promise.all([r.e(45642),r.e(24468),r.e(95947)]).then(r.bind(r,24468)).then((function(e){e.onTimerCreated(a,s,n)}))}else n.notifyRefreshNeeded()}function I(){-1!==A(this).indexOf("seriestimers")&&this.notifyRefreshNeeded()}function w(e,t,i){var n=this;-1===A(n).indexOf("timers")?Promise.all([r.e(45642),r.e(24468),r.e(95947)]).then(r.bind(r,24468)).then((function(e){e.onTimerCancelled(i.Id,n)})):n.notifyRefreshNeeded()}function L(e,t,i){var n=this;-1===A(n).indexOf("seriestimers")?Promise.all([r.e(45642),r.e(24468),r.e(95947)]).then(r.bind(r,24468)).then((function(e){e.onSeriesTimerCancelled(i.Id,n)})):n.notifyRefreshNeeded()}function S(e,t,r){var i=this,n=A(i);if(-1===n.indexOf("seriestimers")&&-1===n.indexOf("timers")){var a=r.ItemsAdded||[],s=r.ItemsRemoved||[];if(a.length||s.length){var o=i.getAttribute("data-parentid");if(o){var l=r.FoldersAddedTo||[],c=r.FoldersRemovedFrom||[],d=r.CollectionFolders||[];if(-1===l.indexOf(o)&&-1===c.indexOf(o)&&-1===d.indexOf(o))return}i.notifyRefreshNeeded()}}}function x(e,t){var r,i=this,n=t.state,a=A(i);if(n.NowPlayingItem&&"Video"===n.NowPlayingItem.MediaType){if(-1!==a.indexOf("videoplayback"))return void i.notifyRefreshNeeded(!0)}else if("Audio"===(null===(r=n.NowPlayingItem)||void 0===r?void 0:r.MediaType)&&-1!==a.indexOf("audioplayback"))return void i.notifyRefreshNeeded(!0)}function R(e,t,r,i){var n=r.bind(e);i=i||f.default,h.A.on(i,t,n),e["event_"+t]=n}function k(e,t,r){var i=e["event_"+t];i&&(r=r||f.default,h.A.off(r,t,i),e["event_"+t]=null)}function P(e,t){e.refreshInterval&&(clearInterval(e.refreshInterval),e.refreshInterval=null,t||(e.refreshIntervalEndTime=null))}function E(e,t){P(e),t||(t=parseInt(e.getAttribute("data-refreshinterval")||"0",10)),t&&(e.refreshInterval=setInterval(e.notifyRefreshNeeded.bind(e),t),e.refreshIntervalEndTime=(new Date).getTime()+t)}function O(e){var t=e.Items||e,r=this.parentContainer;r&&(t.length?r.classList.remove("hide"):r.classList.add("hide"));var i,n,a=document.activeElement;this.contains(a)&&(n=!0,i=a.getAttribute("data-id")),this.innerHTML=this.getItemsHtml(t),s.default.lazyChildren(this),n&&function(e,t){if(t){var r=e.querySelector('[data-id="'+t+'"]');if(r)try{return void u.A.focus(r)}catch(e){console.error(e)}}u.A.autoFocus(e)}(this,i),E(this),this.afterRefresh&&this.afterRefresh(e)}p.enableMultiSelect=function(e){var t=this.multiSelect;if(e){if(!t){var i=this;r.e(35308).then(r.bind(r,35308)).then((function(e){var t=e.default;i.multiSelect=new t({container:i,bindOnClick:!1})}))}}else t&&(t.destroy(),this.multiSelect=null)},p.enableDragReordering=function(e){var t=this.sortable;if(e){if(!t){var r=this;r.sortable=new m.Ay(r,{draggable:".listItem",handle:".listViewDragHandle",onEnd:function(e){return function(e,t){var r=e.item,i=e.newIndex,n=r.getAttribute("data-playlistitemid"),a=r.getAttribute("data-playlistid");if(a){var s=r.getAttribute("data-serverid"),o=v.A.getApiClient(s);d.Ay.show(),o.ajax({url:o.getUrl("Playlists/"+a+"/Items/"+n+"/Move/"+i),type:"POST"}).then((function(){d.Ay.hide()}),(function(){d.Ay.hide(),t.refreshItems()}))}else{var l=e.oldIndex;r.dispatchEvent(new CustomEvent("itemdrop",{detail:{oldIndex:l,newIndex:i,playlistItemId:n},bubbles:!0,cancelable:!1}))}}(e,r)}})}}else t&&(t.destroy(),this.sortable=null)},p.createdCallback=function(){this.classList.add("itemsContainer")},p.attachedCallback=function(){this.addEventListener("click",b),l.A.touch?this.addEventListener("contextmenu",y):"false"!==this.getAttribute("data-contextmenu")&&this.addEventListener("contextmenu",g),(o.A.desktop||o.A.mobile&&"false"!==this.getAttribute("data-multiselect"))&&this.enableMultiSelect(!0),o.A.tv&&this.classList.add("itemsContainer-tv"),i.Ay.on(this,{click:!1}),R(this,"UserDataChanged",T),R(this,"TimerCreated",C),R(this,"SeriesTimerCreated",I),R(this,"TimerCancelled",w),R(this,"SeriesTimerCancelled",L),R(this,"LibraryChanged",S),R(this,"playbackstop",x,a.f),"true"===this.getAttribute("data-dragreorder")&&this.enableDragReordering(!0)},p.detachedCallback=function(){P(this),this.enableMultiSelect(!1),this.enableDragReordering(!1),this.removeEventListener("click",b),this.removeEventListener("contextmenu",g),this.removeEventListener("contextmenu",y),i.Ay.off(this,{click:!1}),k(this,"UserDataChanged"),k(this,"TimerCreated"),k(this,"SeriesTimerCreated"),k(this,"TimerCancelled"),k(this,"SeriesTimerCancelled"),k(this,"LibraryChanged"),k(this,"playbackstop",a.f),this.fetchData=null,this.getItemsHtml=null,this.parentContainer=null},p.pause=function(){P(this,!0),this.paused=!0},p.resume=function(e){this.paused=!1;var t=this.refreshIntervalEndTime;if(t){var r=t-(new Date).getTime();r>0&&!this.needsRefresh?E(this,r):(this.needsRefresh=!0,this.refreshIntervalEndTime=null)}return this.needsRefresh||null!=e&&e.refresh?this.refreshItems():Promise.resolve()},p.refreshItems=function(){return this.fetchData?this.paused?(this.needsRefresh=!0,Promise.resolve()):(this.needsRefresh=!1,this.fetchData().then(O.bind(this))):Promise.resolve()},p.notifyRefreshNeeded=function(e){if(this.paused)this.needsRefresh=!0;else{var t=this.refreshTimeout;t&&clearTimeout(t),!0===e?this.refreshItems():this.refreshTimeout=setTimeout(this.refreshItems.bind(this),1e4)}},document.registerElement("emby-itemscontainer",{prototype:p,extends:"div"})},41765:function(e,t,r){"use strict";r(44962),r(78557),r(90076),r(83994),r(82367);var i=r(56422),n=r(47629),a=r(46782),s=r(38490),o=r(9164),l=r(34789),c=(r(69177),Object.create(HTMLDivElement.prototype));function d(e){var t=e.detail.command;"end"===t?(o.A.focusLast(this,"."+this.getAttribute("data-navcommands")),e.preventDefault(),e.stopPropagation()):"pageup"===t?(o.A.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),-12),e.preventDefault(),e.stopPropagation()):"pagedown"===t&&(o.A.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),12),e.preventDefault(),e.stopPropagation())}c.createdCallback=function(){this.classList.add("emby-scroller")},c.scrollToBeginning=function(){this.scroller&&this.scroller.slideTo(0,!0)},c.toStart=function(e,t){this.scroller&&this.scroller.toStart(e,t)},c.toCenter=function(e,t){this.scroller&&this.scroller.toCenter(e,t)},c.scrollToPosition=function(e,t){this.scroller&&this.scroller.slideTo(e,t)},c.getScrollPosition=function(){if(this.scroller)return this.scroller.getScrollPosition()},c.getScrollSize=function(){if(this.scroller)return this.scroller.getScrollSize()},c.getScrollEventName=function(){if(this.scroller)return this.scroller.getScrollEventName()},c.getScrollSlider=function(){if(this.scroller)return this.scroller.getScrollSlider()},c.addScrollEventListener=function(e,t){this.scroller&&n.Ay.addEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},c.removeScrollEventListener=function(e,t){this.scroller&&n.Ay.removeEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},c.attachedCallback=function(){this.getAttribute("data-navcommands")&&s.default.on(this,d);var e="false"!==this.getAttribute("data-horizontal"),t=this.querySelector(".scrollSlider");e&&(t.style["white-space"]="nowrap");var c,u,f=a.A.desktop&&e&&"false"!==this.getAttribute("data-scrollbuttons"),h={horizontal:e,mouseDragging:1,mouseWheel:"false"!==this.getAttribute("data-mousewheel"),touchDragging:1,slidee:t,scrollBy:200,speed:e?270:240,elasticBounds:1,dragHandle:1,autoImmediate:!0,skipSlideToWhenVisible:"true"===this.getAttribute("data-skipfocuswhenvisible"),dispatchScrollEvent:f||"true"===this.getAttribute("data-scrollevent"),hideScrollbar:f||"true"===this.getAttribute("data-hidescrollbar"),allowNativeSmoothScroll:"true"===this.getAttribute("data-allownativesmoothscroll")&&!f,allowNativeScroll:!f,forceHideScrollbars:f,requireAnimation:f&&l.A.edge};this.scroller=new i.A(this,h),this.scroller.init(),this.scroller.reload(),a.A.tv&&this.getAttribute("data-centerfocus")&&(this,c=this.scroller,n.Ay.addEventListener(this,"focus",(function(e){var t=o.A.focusableParent(e.target);t&&c.toCenter(t)}),{capture:!0,passive:!0})),f&&(u=this,r.e(49275).then(r.bind(r,49275)).then((function(){u.insertAdjacentHTML("beforebegin",'<div is="emby-scrollbuttons" class="emby-scrollbuttons padded-right"></div>')})))},c.pause=function(){var e=this.headroom;e&&e.pause()},c.resume=function(){var e=this.headroom;e&&e.resume()},c.detachedCallback=function(){this.getAttribute("data-navcommands")&&s.default.off(this,d);var e=this.headroom;e&&(e.destroy(),this.headroom=null);var t=this.scroller;t&&(t.destroy(),this.scroller=null)},document.registerElement("emby-scroller",{prototype:c,extends:"div"})},11274:function(e,t,r){"use strict";r.d(t,{D:function(){return c},q:function(){return l}});var i=r(29593),n=r(8280),a=r(61586),s=r(14847),o=function(){return o=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},o.apply(this,arguments)},l=function(e,t,r){return(0,n.j)({queryKey:["User",t,"Views",r],queryFn:function(n){var a=n.signal;return function(e,t,r,n){return a=void 0,s=void 0,c=function(){return function(e,t){var r,i,n,a,s={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return a={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function o(o){return function(l){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,o[0]&&(s=0)),s;)try{if(r=1,i&&(n=2&o[0]?i.return:o[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,o[1])).done)return n;switch(i=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,i=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!((n=(n=s.trys).length>0&&n[n.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){s.label=o[1];break}if(6===o[0]&&s.label<n[1]){s.label=n[1],n=o;break}if(n&&s.label<n[2]){s.label=n[2],s.ops.push(o);break}n[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],i=0}finally{r=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}}(this,(function(a){switch(a.label){case 0:if(!e)throw new Error("No API instance available");if(!t)throw new Error("No User ID provided");return[4,(0,i.a)(e).getUserViews(o(o({},r),{userId:t}),n)];case 1:return[2,a.sent().data]}}))},new((l=void 0)||(l=Promise))((function(e,t){function r(e){try{n(c.next(e))}catch(e){t(e)}}function i(e){try{n(c.throw(e))}catch(e){t(e)}}function n(t){var n;t.done?e(t.value):(n=t.value,n instanceof l?n:new l((function(e){e(n)}))).then(r,i)}n((c=c.apply(a,s||[])).next())}));var a,s,l,c}(e,t,r,{signal:a})},staleTime:1e3,enabled:!!e&&!!t})},c=function(e,t){var r=(0,s.gf)().api;return(0,a.I)(l(r,e,t))}},4452:function(e,t){var r;!function(){"use strict";var i={}.hasOwnProperty;function n(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=s(e,a(r)))}return e}function a(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)i.call(e,r)&&e[r]&&(t=s(t,r));return t}function s(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()}}]);