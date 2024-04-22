"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[18084,79617,1998,15605],{35300:function(e,t,n){n.r(t),n(84734),n(77575),n(78557),n(67593),n(23630);var a=n(98320),i=n(62014),r=n(34789),o=n(58782),s=n(46782),l=n(80669),u=n(65875),c=n(22622),d=n(47629),f=n(9482),m=n(55802),p=(n(15453),n(15605),n(86191));function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function v(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,g(a.key),a)}}function g(e){var t=function(e,t){if("object"!=y(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,"string");if("object"!=y(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==y(t)?t:t+""}n(29305),n(32733),n(84701),n(81678),n(44962),n(4754),n(94),n(36947),n(83994),n(82367);var h,b,A,S,I,T,P,w,L,k,B,C,x,M,E,q,N,R=new(function(){return e=function e(){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.element=((t=document.createElement("div")).classList.add("appfooter"),document.body.appendChild(t),t),this.add=function(e){this.element.appendChild(e)},this.insert=function(e){"string"==typeof e?this.element.insertAdjacentHTML("afterbegin",e):this.element.insertBefore(e,this.element.firstChild)}},(t=[{key:"destroy",value:function(){this.element=null}}])&&v(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}()),F=n(22832),O=(n(57949),n(70267)),D=[],U=0,_={},H=0,j=!0,V=!1,W=!1;function Y(){this.classList.add("hide")}function Q(){l.f.playPause(h)}function z(){if(N)return N;var e,t,n=R.element;return(N=n.querySelector(".nowPlayingBar"))||(n.insertAdjacentHTML("afterbegin",(e="",e+='<div class="nowPlayingBar hide nowPlayingBar-hidden">',e+='<div class="nowPlayingBarTop">',e+='<div class="nowPlayingBarPositionContainer sliderContainer" dir="ltr">',e+='<input type="range" is="emby-slider" pin step=".01" min="0" max="100" value="0" class="slider-medium-thumb nowPlayingBarPositionSlider" data-slider-keep-progress="true"/>',e+="</div>",e+='<div class="nowPlayingBarInfoContainer">',e+='<div class="nowPlayingImage"></div>',e+='<div class="nowPlayingBarText"></div>',e+="</div>",e+='<div class="nowPlayingBarCenter" dir="ltr">',e+='<button is="paper-icon-button-light" class="previousTrackButton mediaButton" title="'.concat(f.Ay.translate("ButtonPreviousTrack"),'"><span class="material-icons skip_previous" aria-hidden="true"></span></button>'),e+='<button is="paper-icon-button-light" class="playPauseButton mediaButton" title="'.concat(f.Ay.translate("ButtonPause"),'"><span class="material-icons pause" aria-hidden="true"></span></button>'),e+='<button is="paper-icon-button-light" class="stopButton mediaButton" title="'.concat(f.Ay.translate("ButtonStop"),'"><span class="material-icons stop" aria-hidden="true"></span></button>'),s.A.mobile||(e+='<button is="paper-icon-button-light" class="nextTrackButton mediaButton" title="'.concat(f.Ay.translate("ButtonNextTrack"),'"><span class="material-icons skip_next" aria-hidden="true"></span></button>')),e+='<div class="nowPlayingBarCurrentTime"></div>',e+="</div>",e+='<div class="nowPlayingBarRight">',e+='<button is="paper-icon-button-light" class="muteButton mediaButton" title="'.concat(f.Ay.translate("Mute"),'"><span class="material-icons volume_up" aria-hidden="true"></span></button>'),e+='<div class="sliderContainer nowPlayingBarVolumeSliderContainer hide" style="width:9em;vertical-align:middle;display:inline-flex;">',e+='<input type="range" is="emby-slider" pin step="1" min="0" max="100" value="0" class="slider-medium-thumb nowPlayingBarVolumeSlider"/>',e+="</div>",e+='<button is="paper-icon-button-light" class="btnAirPlay mediaButton" title="'.concat(f.Ay.translate("AirPlay"),'"><span class="material-icons airplay" aria-hidden="true"></span></button>'),e+='<button is="paper-icon-button-light" class="openLyricsButton mediaButton" title="'.concat(f.Ay.translate("Lyrics"),'"><span class="material-icons lyrics" style="top:0.1em" aria-hidden="true"></span></button>'),e+='<button is="paper-icon-button-light" class="toggleRepeatButton mediaButton" title="'.concat(f.Ay.translate("Repeat"),'"><span class="material-icons repeat" aria-hidden="true"></span></button>'),e+='<button is="paper-icon-button-light" class="btnShuffleQueue mediaButton" title="'.concat(f.Ay.translate("Shuffle"),'"><span class="material-icons shuffle" aria-hidden="true"></span></button>'),e+='<div class="nowPlayingBarUserDataButtons">',e+="</div>",e+='<button is="paper-icon-button-light" class="playPauseButton mediaButton" title="'.concat(f.Ay.translate("ButtonPause"),'"><span class="material-icons pause" aria-hidden="true"></span></button>'),s.A.mobile?e+='<button is="paper-icon-button-light" class="nextTrackButton mediaButton" title="'.concat(f.Ay.translate("ButtonNextTrack"),'"><span class="material-icons skip_next" aria-hidden="true"></span></button>'):e+='<button is="paper-icon-button-light" class="btnToggleContextMenu mediaButton" title="'.concat(f.Ay.translate("ButtonMore"),'"><span class="material-icons more_vert" aria-hidden="true"></span></button>'),e+="</div>",(e+="</div>")+"</div>")),window.CustomElements.upgradeSubtree(n),N=n.querySelector(".nowPlayingBar"),s.A.mobile&&(J(N.querySelector(".btnShuffleQueue")),J(N.querySelector(".nowPlayingBarCenter"))),r.A.safari&&r.A.slow&&N.classList.add("noMediaProgress"),F.Ay.on(N),b=(t=N).querySelector(".nowPlayingBarCurrentTime"),A=t.querySelector(".nowPlayingImage"),I=t.querySelector(".nowPlayingBarText"),T=t.querySelector(".nowPlayingBarUserDataButtons"),B=t.querySelector(".nowPlayingBarPositionSlider"),P=t.querySelector(".muteButton"),k=t.querySelectorAll(".playPauseButton"),x=t.querySelector(".toggleRepeatButton"),w=t.querySelector(".nowPlayingBarVolumeSlider"),L=t.querySelector(".nowPlayingBarVolumeSliderContainer"),E=N.querySelector(".openLyricsButton"),P.addEventListener("click",(function(){h&&l.f.toggleMute(h)})),t.querySelector(".stopButton").addEventListener("click",(function(){h&&l.f.stop(h)})),k.forEach((function(e){e.addEventListener("click",Q)})),t.querySelector(".nextTrackButton").addEventListener("click",(function(){h&&l.f.nextTrack(h)})),t.querySelector(".previousTrackButton").addEventListener("click",(function(e){if(h){if(l.f.isPlayingAudio(h)){if(e.detail>1)return;if(l.f.currentTime(h)>=5e3||l.f.getCurrentPlaylistIndex(h)<=0)return l.f.seekPercent(0,h),void(B.value=0)}l.f.previousTrack(h)}})),t.querySelector(".previousTrackButton").addEventListener("dblclick",(function(){h&&l.f.previousTrack(h)})),(C=t.querySelector(".btnAirPlay")).addEventListener("click",(function(){h&&l.f.toggleAirPlay(h)})),t.querySelector(".btnShuffleQueue").addEventListener("click",(function(){h&&l.f.toggleQueueShuffleMode()})),E.addEventListener("click",(function(){V?O.appRouter.back():O.appRouter.show("lyrics")})),(x=t.querySelector(".toggleRepeatButton")).addEventListener("click",(function(){switch(l.f.getRepeatMode()){case"RepeatAll":l.f.setRepeatMode("RepeatOne");break;case"RepeatOne":l.f.setRepeatMode("RepeatNone");break;case"RepeatNone":l.f.setRepeatMode("RepeatAll")}})),M=x.querySelector(".material-icons"),L.classList.toggle("hide",c.g.supports("physicalvolumecontrol")),w.addEventListener("input",(function(e){h&&h.setVolume(e.target.value)})),B.addEventListener("change",(function(){if(h){var e=parseFloat(this.value);l.f.seekPercent(e,h)}})),B.getBubbleText=function(e){if(null==_||!_.NowPlayingItem||!H)return"--:--";var t=H;return t/=100,t*=e,a.Ay.getDisplayRunningTime(t)},t.addEventListener("click",(function(e){d.Ay.parentWithTag(e.target,["BUTTON","INPUT"])||O.appRouter.showNowPlaying()}))),N}function G(e){e.classList.remove("hide")}function J(e){e.classList.add("hide")}function K(e){k&&k.forEach((function(t){var n=t.querySelector(".material-icons");n.classList.remove("play_arrow","pause"),n.classList.add(e?"play_arrow":"pause"),t.title=f.Ay.translate(e?"Play":"ButtonPause")}))}function X(e){M.classList.remove("repeat","repeat_one");var t="buttonActive";switch(e){case"RepeatAll":M.classList.add("repeat"),x.classList.add(t);break;case"RepeatOne":M.classList.add("repeat_one"),x.classList.add(t);break;default:M.classList.add("repeat"),x.classList.remove(t)}}function Z(e,t,n){if(B&&!B.dragging)if(t){var i=e/t;i*=100,B.value=i}else B.value=0;if(B&&B.setBufferedRanges(n,t,e),b){var r=null==e?"--:--":a.Ay.getDisplayRunningTime(e);t&&(r+=" / "+a.Ay.getDisplayRunningTime(t)),b.innerHTML=r}}function $(e,t){var n=D,a=!0,i=!0;-1===n.indexOf("ToggleMute")&&(a=!1);var r=P.querySelector(".material-icons");r.classList.remove("volume_off","volume_up"),r.classList.add(e?"volume_off":"volume_up"),P.title=f.Ay.translate(e?"Unmute":"Mute"),-1===n.indexOf("SetVolume")&&(i=!1),h.isLocalPlayer&&c.g.supports("physicalvolumecontrol")&&(a=!1,i=!1),a?G(P):J(P),w&&(L.classList.toggle("hide",!i),w.dragging||(w.value=t||0))}function ee(){q&&(W?G(E):J(E),te())}function te(){q&&E.classList.toggle("buttonActive",V)}function ne(e,t){console.debug("nowplaying event: "+e.type),W="Audio"===t.NowPlayingItem.Type,le.call(this,e,t)}function ae(){q&&X(l.f.getRepeatMode())}function ie(){if(q){var e=l.f.getQueueShuffleMode(),t="buttonActive",n=N.querySelector(".btnShuffleQueue");"Shuffle"===e?n.classList.add(t):n.classList.remove(t)}}function re(){q=!1;var e=document.getElementsByClassName("nowPlayingBar")[0];e&&function(e){e.offsetWidth,e.classList.add("nowPlayingBar-hidden"),d.Ay.addEventListener(e,d.Ay.whichTransitionEvent(),Y,{once:!0})}(e)}function oe(e,t){console.debug("[nowPlayingBar:onPlaybackStopped] event: "+e.type),this.isLocalPlayer?"Audio"!==t.NextMediaType&&re():t.NextMediaType||re()}function se(){q&&K(this.paused())}function le(e,t){if("init"!==e.type){console.debug("[nowPlayingBar:onStateChanged] event: "+e.type);t.NowPlayingItem&&!s.A.tv&&!1!==t.IsFullscreen?this.isLocalPlayer&&t.NowPlayingItem&&"Video"===t.NowPlayingItem.MediaType?re():(q=!0,N||(z(),ee()),function(e,t,n){var a;j?(a=z(),d.Ay.removeEventListener(a,d.Ay.whichTransitionEvent(),Y,{once:!0}),a.classList.remove("hide"),a.offsetWidth,a.classList.remove("nowPlayingBar-hidden")):re(),_=t;var i=l.f.getPlayerInfo(),r=t.PlayState||{};K(r.IsPaused);var c=i.supportedCommands;D=c,-1===c.indexOf("SetRepeatMode")?x.classList.add("hide"):x.classList.remove("hide");var f=-1===c.indexOf("AirPlay");if(C.classList.toggle("hide",f),X(l.f.getRepeatMode()),ie(),$(r.IsMuted,r.VolumeLevel),B&&!B.dragging){B.disabled=!r.CanSeek;var y=t.MediaSource&&null==t.MediaSource.RunTimeTicks;B.setIsClear(y)}var v=t.NowPlayingItem||{};Z(r.PositionTicks,v.RunTimeTicks,l.f.getBufferedRanges(n)),function(e){var t=e.NowPlayingItem,n=t?u.A.getNowPlayingNames(t):[];if(I.innerHTML="",n){var a=document.createElement("div"),i=document.createElement("div");if(i.classList.add("nowPlayingBarSecondaryText"),n.length>1&&(n[1].secondary=!0,n[1].text)){var r=document.createElement("a");r.innerText=n[1].text,i.appendChild(r)}if(n[0].text){var l=document.createElement("a");l.innerText=n[0].text,a.appendChild(l)}I.appendChild(a),I.appendChild(i)}var c=t?function(e,t){if(!e)throw new Error("item cannot be null!");if("Episode"!==e.Type)return null;if((t=t||{}).type=t.type||"Primary","Primary"===t.type&&e.SeriesPrimaryImageTag)return t.tag=e.SeriesPrimaryImageTag,p.A.getApiClient(e.ServerId).getScaledImageUrl(e.SeriesId,t);if("Thumb"===t.type){if(e.SeriesThumbImageTag)return t.tag=e.SeriesThumbImageTag,p.A.getApiClient(e.ServerId).getScaledImageUrl(e.SeriesId,t);if(e.ParentThumbImageTag)return t.tag=e.ParentThumbImageTag,p.A.getApiClient(e.ServerId).getScaledImageUrl(e.ParentThumbItemId,t)}return null}(t,{height:70})||function(e,t){var n;if(!e)throw new Error("item cannot be null!");return(t=t||{}).type=t.type||"Primary",null!==(n=e.ImageTags)&&void 0!==n&&n[t.type]?(t.tag=e.ImageTags[t.type],p.A.getApiClient(e.ServerId).getScaledImageUrl(e.PrimaryImageItemId||e.Id,t)):e.AlbumId&&e.AlbumPrimaryImageTag?(t.tag=e.AlbumPrimaryImageTag,p.A.getApiClient(e.ServerId).getScaledImageUrl(e.AlbumId,t)):null}(t,{height:70}):null;if(c!==S&&(c?(S=c,o.default.lazyImage(A,S),A.style.display=null,I.style.marginLeft=null):(S=null,A.style.backgroundImage="",A.style.display="none",I.style.marginLeft="1em")),t.Id){var d=p.A.getApiClient(t.ServerId);d.getItem(d.getCurrentUserId(),t.Id).then((function(e){var t=e.UserData||{},n=null==t.Likes?"":t.Likes;if(!s.A.mobile){var a=N.querySelector(".btnToggleContextMenu"),i=a.cloneNode(!0);a.parentNode.replaceChild(i,a);var r={play:!1,queue:!1,stopPlayback:!0,clearQueue:!0,positionTo:a=N.querySelector(".btnToggleContextMenu")};d.getCurrentUser().then((function(t){a.addEventListener("click",(function(){m.default.show(Object.assign({item:e,user:t},r)).catch((function(){}))}))}))}T.innerHTML='<button is="emby-ratingbutton" type="button" class="mediaButton paper-icon-button-light" data-id="'+e.Id+'" data-serverid="'+e.ServerId+'" data-itemtype="'+e.Type+'" data-likes="'+n+'" data-isfavorite="'+t.IsFavorite+'"><span class="material-icons favorite" aria-hidden="true"></span></button>'}))}else T.innerHTML=""}(t),ee()}(0,t,this)):re()}}function ue(){if(q){var e=(new Date).getTime();if(!(e-U<700)){U=e;var t=this;H=l.f.duration(t),Z(1e4*l.f.currentTime(t),H,l.f.getBufferedRanges(t))}}}function ce(){q&&$(this.isMuted(),this.getVolume())}function de(e,t){var n=l.f.getPlayerState(e);le.call(e,{type:t},n)}function fe(e){V="/lyrics"===O.appRouter.currentRouteInfo.path.toLowerCase(),e!==h&&(function(){var e=h;e&&(i.A.off(e,"playbackstart",ne),i.A.off(e,"statechange",ne),i.A.off(e,"repeatmodechange",ae),i.A.off(e,"shufflequeuemodechange",ie),i.A.off(e,"playbackstop",oe),i.A.off(e,"volumechange",ce),i.A.off(e,"pause",se),i.A.off(e,"unpause",se),i.A.off(e,"timeupdate",ue),h=null,re())}(),h=e,e&&(de(e,"init"),i.A.on(e,"playbackstart",ne),i.A.on(e,"statechange",ne),i.A.on(e,"repeatmodechange",ae),i.A.on(e,"shufflequeuemodechange",ie),i.A.on(e,"playbackstop",oe),i.A.on(e,"volumechange",ce),i.A.on(e,"pause",se),i.A.on(e,"unpause",se),i.A.on(e,"timeupdate",ue)))}i.A.on(l.f,"playerchange",(function(){fe(l.f.getCurrentPlayer())})),fe(l.f.getCurrentPlayer()),document.addEventListener("viewbeforeshow",(function(e){V="/lyrics"===O.appRouter.currentRouteInfo.path.toLowerCase(),te(),e.detail.options.enableMediaControl?j||(j=!0,h?de(h,"refresh"):re()):j&&(j=!1,re())}))},65875:function(e,t,n){n(86584),t.A={getNowPlayingNames:function(e,t){var n,a,i=e,r=null,o=e.Name;e.AlbumId&&"Audio"===e.MediaType&&(i={Id:e.AlbumId,Name:e.Album,Type:"MusicAlbum",IsFolder:!0}),"Video"===e.MediaType&&(null!=e.IndexNumber&&(o=e.IndexNumber+" - "+o),null!=e.ParentIndexNumber&&(o=e.ParentIndexNumber+"."+o));var s="";null!==(n=e.ArtistItems)&&void 0!==n&&n.length?(r={Id:e.ArtistItems[0].Id,Name:e.ArtistItems[0].Name,Type:"MusicArtist",IsFolder:!0},s=e.ArtistItems.map((function(e){return e.Name})).join(", ")):null!==(a=e.Artists)&&void 0!==a&&a.length?s=e.Artists.join(", "):e.SeriesName||e.Album?(s=o,o=e.SeriesName||e.Album,r=i,i=e.SeriesId?{Id:e.SeriesId,Name:e.SeriesName,Type:"Series",IsFolder:!0}:null):e.ProductionYear&&!1!==t&&(s=e.ProductionYear);var l=[];return l.push({text:o,item:i}),s&&l.push({text:s,item:r}),l}}},15605:function(e,t,n){n.r(t);var a=n(10736),i=n(9482),r=n(62014),o=n(10353),s=n(86191);function l(){var e=this,t=e.getAttribute("data-id"),n=e.getAttribute("data-serverid"),a=s.A.getApiClient(n),i=this.getAttribute("data-likes");i="true"===i||"false"!==i&&null,function(e,t,n,a,i){return t.updateFavoriteStatus(t.getCurrentUserId(),n,!i)}(0,a,t,0,"true"===this.getAttribute("data-isfavorite")).then((function(t){c(e,t.Likes,t.IsFavorite)}))}function u(e,t,n){n.ItemId===this.getAttribute("data-id")&&c(this,n.Likes,n.IsFavorite)}function c(e,t,n,a){var i=e.querySelector(".material-icons");n?(i&&(i.classList.add("favorite"),i.classList.add("ratingbutton-icon-withrating")),e.classList.add("ratingbutton-withrating")):(i&&(i.classList.add("favorite"),i.classList.remove("ratingbutton-icon-withrating")),e.classList.remove("ratingbutton-withrating")),!1!==a&&(e.setAttribute("data-isfavorite",n),e.setAttribute("data-likes",null===t?"":t)),d(e,n)}function d(e,t){e.title=t?i.Ay.translate("Favorite"):i.Ay.translate("AddToFavorites");var n=e.querySelector(".button-text");n&&(n.innerText=e.title)}function f(e){var t,n,i;e.removeEventListener("click",l),(i=(t=e)[n="UserDataChanged"])&&(r.A.off(a.default,n,i),t[n]=null)}function m(e){var t,n,i;f(e),e.addEventListener("click",l),t=e,n="UserDataChanged",i=u.bind(t),r.A.on(a.default,n,i),t[n]=i}var p=Object.create(o.A);p.createdCallback=function(){o.A.createdCallback&&o.A.createdCallback.call(this)},p.attachedCallback=function(){o.A.attachedCallback&&o.A.attachedCallback.call(this);var e=this.getAttribute("data-id"),t=this.getAttribute("data-serverid");if(e&&t){var n=this.getAttribute("data-likes");c(this,n="true"===n||"false"!==n&&null,"true"===this.getAttribute("data-isfavorite"),!1),m(this)}else d(this)},p.detachedCallback=function(){o.A.detachedCallback&&o.A.detachedCallback.call(this),f(this)},p.setItem=function(e){if(e){this.setAttribute("data-id",e.Id),this.setAttribute("data-serverid",e.ServerId);var t=e.UserData||{};c(this,t.Likes,t.IsFavorite),m(this)}else this.removeAttribute("data-id"),this.removeAttribute("data-serverid"),this.removeAttribute("data-likes"),this.removeAttribute("data-isfavorite"),f(this)},document.registerElement("emby-ratingbutton",{prototype:p,extends:"button"})},79617:function(e,t,n){n.r(t),n.d(t,{show:function(){return d}});var a=n(22696),i=n.n(a),r=n(79754),o=n(46782),s=n(9482),l=n(47629),u=(n(10353),function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],a=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&a>=e.length&&(e=void 0),{value:e&&e[a++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")});function c(e,t,a){Promise.resolve().then(n.bind(n,46345)).then((function(n){var i=a?"on":"off";n.centerFocus[i](e,t)})).catch((function(e){console.warn("Error in centerFocus",e)}))}function d(e){var t,n,a,d={removeOnClose:!0,enableHistory:e.enableHistory,scrollY:!1};o.A.tv?(d.size="fullscreen",a=!0,d.autoFocus=!0):(d.modal=!1,d.entryAnimation=e.entryAnimation,d.exitAnimation=e.exitAnimation,d.entryAnimationDuration=e.entryAnimationDuration||140,d.exitAnimationDuration=e.exitAnimationDuration||100,d.autoFocus=!1);var f=r.default.createDialog(d);a?f.classList.add("actionsheet-fullscreen"):f.classList.add("actionsheet-not-fullscreen"),f.classList.add("actionSheet"),e.dialogClass&&f.classList.add(e.dialogClass);var m="",p=o.A.tv?"scrollY smoothScrollY hiddenScrollY":"scrollY",y="";e.items.length>20&&(y+="min-width:"+(l.Ay.getWindowSize().innerWidth>=300?240:200)+"px;");var v,g=!1,h=[];try{for(var b=u(e.items),A=b.next();!A.done;A=b.next())(v=(w=A.value).icon||(w.selected?"check":null))&&(g=!0),h.push(v||"")}catch(e){t={error:e}}finally{try{A&&!A.done&&(n=b.return)&&n.call(b)}finally{if(t)throw t.error}}o.A.tv&&(m+='<button is="paper-icon-button-light" class="btnCloseActionSheet hide-mouse-idle-tv" tabindex="-1" title="'.concat(s.Ay.translate("ButtonBack"),'">\n                     <span class="material-icons arrow_back" aria-hidden="true"></span>\n                 </button>'));var S=e.title&&!g;S||o.A.tv?m+='<div class="actionSheetContent actionSheetContent-centered">':m+='<div class="actionSheetContent">',e.title&&(m+='<h1 class="actionSheetTitle">'+i()(e.title)+"</h1>"),e.text&&(m+='<p class="actionSheetText">'+i()(e.text)+"</p>");var I="actionSheetScroller";o.A.tv&&(I+=" actionSheetScroller-tv focuscontainer-x focuscontainer-y"),m+='<div class="'+I+" "+p+'" style="'+y+'">';var T="listItem listItem-button actionSheetMenuItem";(e.border||e.shaded)&&(T+=" listItem-border"),e.menuItemClass&&(T+=" "+e.menuItemClass),o.A.tv&&(T+=" listItem-focusscale"),o.A.mobile&&(T+=" actionsheet-xlargeFont");for(var P=0;P<e.items.length;P++){var w;(w=e.items[P]).divider?m+='<div class="actionsheetDivider"></div>':(m+="<button"+(w.selected&&o.A.tv?" autoFocus":"")+' is="emby-button" type="button" class="'+T+'" data-id="'+(null==w.id||""===w.id?w.value:w.id)+'">',(v=h[P])?m+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons '.concat(v,'" aria-hidden="true"></span>'):g&&!S&&(m+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons check" aria-hidden="true" style="visibility:hidden;"></span>'),m+='<div class="listItemBody actionsheetListItemBody">',m+='<div class="listItemBodyText actionSheetItemText">',m+=i()(w.name||w.textContent||w.innerText),m+="</div>",w.secondaryText&&(m+='<div class="listItemBodyText secondary">'.concat(i()(w.secondaryText),"</div>")),m+="</div>",w.asideText&&(m+='<div class="listItemAside actionSheetItemAsideText">'.concat(i()(w.asideText),"</div>")),m+="</button>")}if(e.showCancel&&(m+='<div class="buttons">',m+='<button is="emby-button" type="button" class="btnCloseActionSheet">'.concat(s.Ay.translate("ButtonCancel"),"</button>"),m+="</div>"),m+="</div>",f.innerHTML=m,o.A.tv){var L=f.querySelector(".actionSheetScroller");L&&c(L,!1,!0)}var k=f.querySelector(".btnCloseActionSheet");k&&k.addEventListener("click",(function(){r.default.close(f)}));var B,C=null;return e.timeout&&(B=setTimeout((function(){r.default.close(f)}),e.timeout)),new Promise((function(t,n){var a=!1;f.addEventListener("click",(function(n){var i=l.Ay.parentWithClass(n.target,"actionSheetMenuItem");i&&(C=i.getAttribute("data-id"),e.resolveOnClick&&(Array.isArray(e.resolveOnClick)?-1!==e.resolveOnClick.indexOf(C)&&(t(C),a=!0):(t(C),a=!0)),r.default.close(f))})),f.addEventListener("close",(function(){if(o.A.tv){var i=f.querySelector(".actionSheetScroller");i&&c(i,!1,!1)}B&&(clearTimeout(B),B=void 0),a||(null!=C?(e.callback&&e.callback(C),t(C)):n("ActionSheet closed without resolving"))})),r.default.open(f).catch((function(e){console.warn("DialogHelper.open error",e)}));var i=e.positionTo&&"fullscreen"!==d.size?function(e,t,n){var a=l.Ay.getWindowSize(),i=a.innerHeight,r=a.innerWidth,o=function(e){var t,n,a=[];if(!document)return a;try{for(var i=u(e),r=i.next();!r.done;r=i.next()){var o=r.value.getBoundingClientRect();a.push({top:o.top,left:o.left,width:o.width,height:o.height})}}catch(e){t={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return a}([e])[0];"top"!==t.positionY&&(o.top+=(o.height||0)/2),o.left+=(o.width||0)/2;var s=n.offsetHeight||300,c=n.offsetWidth||160;o.top-=s/2,o.left-=c/2;var d=o.left+c-r,f=o.top+s-i;return d>0&&(o.left-=d+20),f>0&&(o.top-=f+20),o.top+=t.offsetTop||0,o.left+=t.offsetLeft||0,o.top=Math.max(o.top,10),o.left=Math.max(o.left,10),o}(e.positionTo,e,f):null;i&&(f.style.position="fixed",f.style.margin="0",f.style.left=i.left+"px",f.style.top=i.top+"px")}))}t.default={show:d}}}]);