"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[62629,12801,31473,27636],{12801:function(e,t,n){n.r(t),n.d(t,{show:function(){return m}}),n(13227),n(81414),n(37666),n(14011),n(11431),n(44901),n(88646),n(54134),n(91270),n(59139),n(56187),n(38690),n(89228);var a=n(65009),i=n.n(a),r=n(93355),s=n(30325),o=n(94994),l=n(72365);function u(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,o=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){o=!0,r=e},f:function(){try{s||null==n.return||n.return()}finally{if(o)throw r}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function d(e,t,a){Promise.resolve().then(n.bind(n,54517)).then((function(n){var i=a?"on":"off";n.centerFocus[i](e,t)}))}function m(e){var t,n={removeOnClose:!0,enableHistory:e.enableHistory,scrollY:!1};s.Z.tv?(n.size="fullscreen",t=!0,n.autoFocus=!0):(n.modal=!1,n.entryAnimation=e.entryAnimation,n.exitAnimation=e.exitAnimation,n.entryAnimationDuration=e.entryAnimationDuration||140,n.exitAnimationDuration=e.exitAnimationDuration||100,n.autoFocus=!1);var a=r.default.createDialog(n);t?a.classList.add("actionsheet-fullscreen"):a.classList.add("actionsheet-not-fullscreen"),a.classList.add("actionSheet"),e.dialogClass&&a.classList.add(e.dialogClass);var c="",m=s.Z.tv?"scrollY smoothScrollY hiddenScrollY":"scrollY",h="";e.items.length>20&&(h+="min-width:"+(l.ZP.getWindowSize().innerWidth>=300?240:200)+"px;");var f,v,g=!1,p=[],b=u(e.items);try{for(b.s();!(v=b.n()).done;){var y=v.value;(f=y.icon||(y.selected?"check":null))&&(g=!0),p.push(f||"")}}catch(e){b.e(e)}finally{b.f()}s.Z.tv&&(c+='<button is="paper-icon-button-light" class="btnCloseActionSheet hide-mouse-idle-tv" tabindex="-1" title="'.concat(o.ZP.translate("ButtonBack"),'">\n                     <span class="material-icons arrow_back" aria-hidden="true"></span>\n                 </button>'));var w=e.title&&!g;w||s.Z.tv?c+='<div class="actionSheetContent actionSheetContent-centered">':c+='<div class="actionSheetContent">',e.title&&(c+='<h1 class="actionSheetTitle">'+i()(e.title)+"</h1>"),e.text&&(c+='<p class="actionSheetText">'+i()(e.text)+"</p>");var S="actionSheetScroller";s.Z.tv&&(S+=" actionSheetScroller-tv focuscontainer-x focuscontainer-y"),c+='<div class="'+S+" "+m+'" style="'+h+'">';var k="listItem listItem-button actionSheetMenuItem";(e.border||e.shaded)&&(k+=" listItem-border"),e.menuItemClass&&(k+=" "+e.menuItemClass),s.Z.tv&&(k+=" listItem-focusscale"),s.Z.mobile&&(k+=" actionsheet-xlargeFont");for(var I=0;I<e.items.length;I++){var P=e.items[I];P.divider?c+='<div class="actionsheetDivider"></div>':(c+="<button"+(P.selected&&s.Z.tv?" autoFocus":"")+' is="emby-button" type="button" class="'+k+'" data-id="'+(null==P.id||""===P.id?P.value:P.id)+'">',(f=p[I])?c+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons '.concat(f,'" aria-hidden="true"></span>'):g&&!w&&(c+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons check" aria-hidden="true" style="visibility:hidden;"></span>'),c+='<div class="listItemBody actionsheetListItemBody">',c+='<div class="listItemBodyText actionSheetItemText">',c+=i()(P.name||P.textContent||P.innerText),c+="</div>",P.secondaryText&&(c+='<div class="listItemBodyText secondary">'.concat(i()(P.secondaryText),"</div>")),c+="</div>",P.asideText&&(c+='<div class="listItemAside actionSheetItemAsideText">'.concat(i()(P.asideText),"</div>")),c+="</button>")}e.showCancel&&(c+='<div class="buttons">',c+='<button is="emby-button" type="button" class="btnCloseActionSheet">'.concat(o.ZP.translate("ButtonCancel"),"</button>"),c+="</div>"),c+="</div>",a.innerHTML=c,s.Z.tv&&d(a.querySelector(".actionSheetScroller"),!1,!0);var L,T,A=a.querySelector(".btnCloseActionSheet");return A&&A.addEventListener("click",(function(){r.default.close(a)})),e.timeout&&(T=setTimeout((function(){r.default.close(a)}),e.timeout)),new Promise((function(t,i){var o;a.addEventListener("click",(function(n){var i=l.ZP.parentWithClass(n.target,"actionSheetMenuItem");i&&(L=i.getAttribute("data-id"),e.resolveOnClick&&(e.resolveOnClick.indexOf?-1!==e.resolveOnClick.indexOf(L)&&(t(L),o=!0):(t(L),o=!0)),r.default.close(a))})),a.addEventListener("close",(function(){s.Z.tv&&d(a.querySelector(".actionSheetScroller"),!1,!1),T&&(clearTimeout(T),T=null),o||(null!=L?(e.callback&&e.callback(L),t(L)):i("ActionSheet closed without resolving"))})),r.default.open(a);var c=e.positionTo&&"fullscreen"!==n.size?function(e,t){var n=l.ZP.getWindowSize(),a=n.innerHeight,i=n.innerWidth,r=function(e){var t=[];if(!document)return t;var n,a=u(e);try{for(a.s();!(n=a.n()).done;){var i=n.value.getBoundingClientRect();t.push({top:i.top,left:i.left,width:i.width,height:i.height})}}catch(e){a.e(e)}finally{a.f()}return t}([e.positionTo])[0];"top"!==e.positionY&&(r.top+=(r.height||0)/2),r.left+=(r.width||0)/2;var s=t.offsetHeight||300,o=t.offsetWidth||160;r.top-=s/2,r.left-=o/2;var c=r.left+o-i,d=r.top+s-a;return c>0&&(r.left-=c+20),d>0&&(r.top-=d+20),r.top+=e.offsetTop||0,r.left+=e.offsetLeft||0,r.top=Math.max(r.top,10),r.left=Math.max(r.left,10),r}(e,a):null;c&&(a.style.position="fixed",a.style.margin=0,a.style.left=c.left+"px",a.style.top=c.top+"px")}))}n(38228),t.default={show:m}},56229:function(e,t,n){n.r(t),n(81414),n(47134),n(63241),n(44901),n(62659);var a=n(61693),i=n(67561),r=n(57366),s=n(81038),o=n(30325),l=n(48957),u=n(69011),c=n(84881),d=n(72365),m=n(9337),h=(n(61414),n(27636),n(18613));function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function v(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==f(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,"string");if("object"!==f(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(a.key),"symbol"===f(i)?i:String(i)),a)}var i}n(26031),n(95822),n(56187),n(38690),n(11908),n(33096),n(89228),n(13227),n(14011),n(11431);var g,p,b,y,w,S,k,I,P,L,T,A,x,B,C,Z,E=new(function(){function e(){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.element=((t=document.createElement("div")).classList.add("appfooter"),document.body.appendChild(t),t),this.add=function(e){this.element.appendChild(e)},this.insert=function(e){"string"==typeof e?this.element.insertAdjacentHTML("afterbegin",e):this.element.insertBefore(e,this.element.firstChild)}}var t,n;return t=e,(n=[{key:"destroy",value:function(){this.element=null}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}()),M=n(61008),O=(n(42855),n(66560)),q=[],N=0,R={},D=0,F=!0;function j(){this.classList.add("hide")}function U(){l.O.playPause(g)}function H(){if(Z)return Z;var e,t,n=E.element;return(Z=n.querySelector(".nowPlayingBar"))||(n.insertAdjacentHTML("afterbegin",(e="",e+='<div class="nowPlayingBar hide nowPlayingBar-hidden">',e+='<div class="nowPlayingBarTop">',e+='<div class="nowPlayingBarPositionContainer sliderContainer" dir="ltr">',e+='<input type="range" is="emby-slider" pin step=".01" min="0" max="100" value="0" class="slider-medium-thumb nowPlayingBarPositionSlider" data-slider-keep-progress="true"/>',e+="</div>",e+='<div class="nowPlayingBarInfoContainer">',e+='<div class="nowPlayingImage"></div>',e+='<div class="nowPlayingBarText"></div>',e+="</div>",e+='<div class="nowPlayingBarCenter" dir="ltr">',e+='<button is="paper-icon-button-light" class="previousTrackButton mediaButton"><span class="material-icons skip_previous" aria-hidden="true"></span></button>',e+='<button is="paper-icon-button-light" class="playPauseButton mediaButton"><span class="material-icons pause" aria-hidden="true"></span></button>',e+='<button is="paper-icon-button-light" class="stopButton mediaButton"><span class="material-icons stop" aria-hidden="true"></span></button>',o.Z.mobile||(e+='<button is="paper-icon-button-light" class="nextTrackButton mediaButton"><span class="material-icons skip_next" aria-hidden="true"></span></button>'),e+='<div class="nowPlayingBarCurrentTime"></div>',e+="</div>",e+='<div class="nowPlayingBarRight">',e+='<button is="paper-icon-button-light" class="muteButton mediaButton"><span class="material-icons volume_up" aria-hidden="true"></span></button>',e+='<div class="sliderContainer nowPlayingBarVolumeSliderContainer hide" style="width:9em;vertical-align:middle;display:inline-flex;">',e+='<input type="range" is="emby-slider" pin step="1" min="0" max="100" value="0" class="slider-medium-thumb nowPlayingBarVolumeSlider"/>',e+="</div>",e+='<button is="paper-icon-button-light" class="btnAirPlay mediaButton"><span class="material-icons airplay" aria-hidden="true"></span></button>',e+='<button is="paper-icon-button-light" class="toggleRepeatButton mediaButton"><span class="material-icons repeat" aria-hidden="true"></span></button>',e+='<button is="paper-icon-button-light" class="btnShuffleQueue mediaButton"><span class="material-icons shuffle" aria-hidden="true"></span></button>',e+='<div class="nowPlayingBarUserDataButtons">',e+="</div>",e+='<button is="paper-icon-button-light" class="playPauseButton mediaButton"><span class="material-icons pause" aria-hidden="true"></span></button>',o.Z.mobile?e+='<button is="paper-icon-button-light" class="nextTrackButton mediaButton"><span class="material-icons skip_next" aria-hidden="true"></span></button>':e+='<button is="paper-icon-button-light" class="btnToggleContextMenu mediaButton"><span class="material-icons more_vert" aria-hidden="true"></span></button>',e+="</div>",(e+="</div>")+"</div>")),window.CustomElements.upgradeSubtree(n),Z=n.querySelector(".nowPlayingBar"),o.Z.mobile&&(_(Z.querySelector(".btnShuffleQueue")),_(Z.querySelector(".nowPlayingBarCenter"))),r.Z.safari&&r.Z.slow&&Z.classList.add("noMediaProgress"),M.ZP.on(Z),p=(t=Z).querySelector(".nowPlayingBarCurrentTime"),b=t.querySelector(".nowPlayingImage"),w=t.querySelector(".nowPlayingBarText"),S=t.querySelector(".nowPlayingBarUserDataButtons"),T=t.querySelector(".nowPlayingBarPositionSlider"),k=t.querySelector(".muteButton"),L=t.querySelectorAll(".playPauseButton"),x=t.querySelector(".toggleRepeatButton"),I=t.querySelector(".nowPlayingBarVolumeSlider"),P=t.querySelector(".nowPlayingBarVolumeSliderContainer"),k.addEventListener("click",(function(){g&&l.O.toggleMute(g)})),t.querySelector(".stopButton").addEventListener("click",(function(){g&&l.O.stop(g)})),L.forEach((function(e){e.addEventListener("click",U)})),t.querySelector(".nextTrackButton").addEventListener("click",(function(){g&&l.O.nextTrack(g)})),t.querySelector(".previousTrackButton").addEventListener("click",(function(e){if(g){if(l.O.isPlayingAudio(g)){if(e.detail>1)return;if(l.O.currentTime(g)>=5||l.O.getCurrentPlaylistIndex(g)<=1)return l.O.seekPercent(0,g),void(T.value=0)}l.O.previousTrack(g)}})),t.querySelector(".previousTrackButton").addEventListener("dblclick",(function(){g&&l.O.previousTrack(g)})),(A=t.querySelector(".btnAirPlay")).addEventListener("click",(function(){g&&l.O.toggleAirPlay(g)})),t.querySelector(".btnShuffleQueue").addEventListener("click",(function(){g&&l.O.toggleQueueShuffleMode()})),(x=t.querySelector(".toggleRepeatButton")).addEventListener("click",(function(){switch(l.O.getRepeatMode()){case"RepeatAll":l.O.setRepeatMode("RepeatOne");break;case"RepeatOne":l.O.setRepeatMode("RepeatNone");break;case"RepeatNone":l.O.setRepeatMode("RepeatAll")}})),B=x.querySelector(".material-icons"),P.classList.toggle("hide",c.M.supports("physicalvolumecontrol")),I.addEventListener("input",(function(e){g&&g.setVolume(e.target.value)})),T.addEventListener("change",(function(){if(g){var e=parseFloat(this.value);l.O.seekPercent(e,g)}})),T.getBubbleText=function(e){if(null==R||!R.NowPlayingItem||!D)return"--:--";var t=D;return t/=100,t*=e,a.ZP.getDisplayRunningTime(t)},t.addEventListener("click",(function(e){d.ZP.parentWithTag(e.target,["BUTTON","INPUT"])||O.appRouter.showNowPlaying()}))),Z}function _(e){e.classList.add("hide")}function V(e){L&&L.forEach((function(t){var n=t.querySelector(".material-icons");n.classList.remove("play_arrow","pause"),n.classList.add(e?"play_arrow":"pause")}))}function W(e){B.classList.remove("repeat","repeat_one");var t="buttonActive";switch(e){case"RepeatAll":B.classList.add("repeat"),x.classList.add(t);break;case"RepeatOne":B.classList.add("repeat_one"),x.classList.add(t);break;default:B.classList.add("repeat"),x.classList.remove(t)}}function Y(e,t,n){if(T&&!T.dragging)if(t){var i=e/t;i*=100,T.value=i}else T.value=0;if(T&&T.setBufferedRanges(n,t,e),p){var r=null==e?"--:--":a.ZP.getDisplayRunningTime(e);t&&(r+=" / "+a.ZP.getDisplayRunningTime(t)),p.innerHTML=r}}function Q(e,t){var n=q,a=!0,i=!0;-1===n.indexOf("ToggleMute")&&(a=!1);var r=k.querySelector(".material-icons");r.classList.remove("volume_off","volume_up"),r.classList.add(e?"volume_off":"volume_up"),-1===n.indexOf("SetVolume")&&(i=!1),g.isLocalPlayer&&c.M.supports("physicalvolumecontrol")&&(a=!1,i=!1),a?k.classList.remove("hide"):_(k),I&&(P.classList.toggle("hide",!i),I.dragging||(I.value=t||0))}function z(e,t){console.debug("nowplaying event: "+e.type),ee.call(this,e,t)}function K(){C&&W(l.O.getRepeatMode())}function X(){if(C){var e=l.O.getQueueShuffleMode(),t="buttonActive",n=Z.querySelector(".btnShuffleQueue");"Shuffle"===e?n.classList.add(t):n.classList.remove(t)}}function $(){C=!1;var e=document.getElementsByClassName("nowPlayingBar")[0];e&&function(e){e.offsetWidth,e.classList.add("nowPlayingBar-hidden"),d.ZP.addEventListener(e,d.ZP.whichTransitionEvent(),j,{once:!0})}(e)}function G(e,t){console.debug("[nowPlayingBar:onPlaybackStopped] event: "+e.type),this.isLocalPlayer?"Audio"!==t.NextMediaType&&$():t.NextMediaType||$()}function J(){C&&V(this.paused())}function ee(e,t){if("init"!==e.type){console.debug("[nowPlayingBar:onStateChanged] event: "+e.type);t.NowPlayingItem&&!o.Z.tv&&!1!==t.IsFullscreen?this.isLocalPlayer&&t.NowPlayingItem&&"Video"===t.NowPlayingItem.MediaType?$():(C=!0,Z||H(),function(e,t,n){var a;F?(a=H(),d.ZP.removeEventListener(a,d.ZP.whichTransitionEvent(),j,{once:!0}),a.classList.remove("hide"),a.offsetWidth,a.classList.remove("nowPlayingBar-hidden")):$(),R=t;var i=l.O.getPlayerInfo(),r=t.PlayState||{};V(r.IsPaused);var c=i.supportedCommands;q=c,-1===c.indexOf("SetRepeatMode")?x.classList.add("hide"):x.classList.remove("hide");var f=-1===c.indexOf("AirPlay");if(A.classList.toggle("hide",f),W(l.O.getRepeatMode()),X(),Q(r.IsMuted,r.VolumeLevel),T&&!T.dragging){T.disabled=!r.CanSeek;var v=t.MediaSource&&null==t.MediaSource.RunTimeTicks;T.setIsClear(v)}var g=t.NowPlayingItem||{};Y(r.PositionTicks,g.RunTimeTicks,l.O.getBufferedRanges(n)),function(e){var t=e.NowPlayingItem,n=t?u.Z.getNowPlayingNames(t):[];if(w.innerHTML="",n){var a=document.createElement("div"),i=document.createElement("div");if(i.classList.add("nowPlayingBarSecondaryText"),n.length>1&&(n[1].secondary=!0,n[1].text)){var r=document.createElement("a");r.innerText=n[1].text,i.appendChild(r)}if(n[0].text){var l=document.createElement("a");l.innerText=n[0].text,a.appendChild(l)}w.appendChild(a),w.appendChild(i)}var c=t?function(e,t){if(!e)throw new Error("item cannot be null!");if("Episode"!==e.Type)return null;if((t=t||{}).type=t.type||"Primary","Primary"===t.type&&e.SeriesPrimaryImageTag)return t.tag=e.SeriesPrimaryImageTag,h.Z.getApiClient(e.ServerId).getScaledImageUrl(e.SeriesId,t);if("Thumb"===t.type){if(e.SeriesThumbImageTag)return t.tag=e.SeriesThumbImageTag,h.Z.getApiClient(e.ServerId).getScaledImageUrl(e.SeriesId,t);if(e.ParentThumbImageTag)return t.tag=e.ParentThumbImageTag,h.Z.getApiClient(e.ServerId).getScaledImageUrl(e.ParentThumbItemId,t)}return null}(t,{height:70})||function(e,t){var n;if(!e)throw new Error("item cannot be null!");return(t=t||{}).type=t.type||"Primary",null!==(n=e.ImageTags)&&void 0!==n&&n[t.type]?(t.tag=e.ImageTags[t.type],h.Z.getApiClient(e.ServerId).getScaledImageUrl(e.PrimaryImageItemId||e.Id,t)):e.AlbumId&&e.AlbumPrimaryImageTag?(t.tag=e.AlbumPrimaryImageTag,h.Z.getApiClient(e.ServerId).getScaledImageUrl(e.AlbumId,t)):null}(t,{height:70}):null;if(c!==y&&(c?(y=c,s.default.lazyImage(b,y),b.style.display=null,w.style.marginLeft=null):(y=null,b.style.backgroundImage="",b.style.display="none",w.style.marginLeft="1em")),t.Id){var d=h.Z.getApiClient(t.ServerId);d.getItem(d.getCurrentUserId(),t.Id).then((function(e){var t=e.UserData||{},n=null==t.Likes?"":t.Likes;if(!o.Z.mobile){var a=Z.querySelector(".btnToggleContextMenu"),i=a.cloneNode(!0);a.parentNode.replaceChild(i,a);var r={play:!1,queue:!1,stopPlayback:!0,clearQueue:!0,positionTo:a=Z.querySelector(".btnToggleContextMenu")};d.getCurrentUser().then((function(t){a.addEventListener("click",(function(){m.default.show(Object.assign({item:e,user:t},r)).catch((function(){}))}))}))}S.innerHTML='<button is="emby-ratingbutton" type="button" class="listItemButton mediaButton paper-icon-button-light" data-id="'+e.Id+'" data-serverid="'+e.ServerId+'" data-itemtype="'+e.Type+'" data-likes="'+n+'" data-isfavorite="'+t.IsFavorite+'"><span class="material-icons favorite" aria-hidden="true"></span></button>'}))}else S.innerHTML=""}(t)}(0,t,this)):$()}}function te(){if(C){var e=(new Date).getTime();if(!(e-N<700)){N=e;var t=this;D=l.O.duration(t),Y(1e4*l.O.currentTime(t),D,l.O.getBufferedRanges(t))}}}function ne(){C&&Q(this.isMuted(),this.getVolume())}function ae(e,t){var n=l.O.getPlayerState(e);ee.call(e,{type:t},n)}function ie(e){e!==g&&(function(){var e=g;e&&(i.Z.off(e,"playbackstart",z),i.Z.off(e,"statechange",z),i.Z.off(e,"repeatmodechange",K),i.Z.off(e,"shufflequeuemodechange",X),i.Z.off(e,"playbackstop",G),i.Z.off(e,"volumechange",ne),i.Z.off(e,"pause",J),i.Z.off(e,"unpause",J),i.Z.off(e,"timeupdate",te),g=null,$())}(),g=e,e&&(ae(e,"init"),i.Z.on(e,"playbackstart",z),i.Z.on(e,"statechange",z),i.Z.on(e,"repeatmodechange",K),i.Z.on(e,"shufflequeuemodechange",X),i.Z.on(e,"playbackstop",G),i.Z.on(e,"volumechange",ne),i.Z.on(e,"pause",J),i.Z.on(e,"unpause",J),i.Z.on(e,"timeupdate",te)))}i.Z.on(l.O,"playerchange",(function(){ie(l.O.getCurrentPlayer())})),ie(l.O.getCurrentPlayer()),document.addEventListener("viewbeforeshow",(function(e){e.detail.options.enableMediaControl?F||(F=!0,g?ae(g,"refresh"):$()):F&&(F=!1,$())}))},69011:function(e,t,n){n(96626),t.Z={getNowPlayingNames:function(e,t){var n,a,i=e,r=null,s=e.Name;e.AlbumId&&"Audio"===e.MediaType&&(i={Id:e.AlbumId,Name:e.Album,Type:"MusicAlbum",IsFolder:!0}),"Video"===e.MediaType&&(null!=e.IndexNumber&&(s=e.IndexNumber+" - "+s),null!=e.ParentIndexNumber&&(s=e.ParentIndexNumber+"."+s));var o="";null!==(n=e.ArtistItems)&&void 0!==n&&n.length?(r={Id:e.ArtistItems[0].Id,Name:e.ArtistItems[0].Name,Type:"MusicArtist",IsFolder:!0},o=e.ArtistItems.map((function(e){return e.Name})).join(", ")):null!==(a=e.Artists)&&void 0!==a&&a.length?o=e.Artists.join(", "):e.SeriesName||e.Album?(o=s,s=e.SeriesName||e.Album,r=i,i=e.SeriesId?{Id:e.SeriesId,Name:e.SeriesName,Type:"Series",IsFolder:!0}:null):e.ProductionYear&&!1!==t&&(o=e.ProductionYear);var l=[];return l.push({text:s,item:i}),o&&l.push({text:o,item:r}),l}}},27636:function(e,t,n){n.r(t);var a=n(44038),i=n(94994),r=n(67561),s=n(38228),o=n(18613);function l(){var e=this,t=e.getAttribute("data-id"),n=e.getAttribute("data-serverid"),a=o.Z.getApiClient(n),i=this.getAttribute("data-likes");i="true"===i||"false"!==i&&null,function(e,t,n,a,i){return t.updateFavoriteStatus(t.getCurrentUserId(),n,!i)}(0,a,t,0,"true"===this.getAttribute("data-isfavorite")).then((function(t){c(e,t.Likes,t.IsFavorite)}))}function u(e,t,n){n.ItemId===this.getAttribute("data-id")&&c(this,n.Likes,n.IsFavorite)}function c(e,t,n,a){var i=e.querySelector(".material-icons");n?(i&&(i.classList.add("favorite"),i.classList.add("ratingbutton-icon-withrating")),e.classList.add("ratingbutton-withrating")):(i&&(i.classList.add("favorite"),i.classList.remove("ratingbutton-icon-withrating")),e.classList.remove("ratingbutton-withrating")),!1!==a&&(e.setAttribute("data-isfavorite",n),e.setAttribute("data-likes",null===t?"":t)),d(e,n)}function d(e,t){e.title=t?i.ZP.translate("Favorite"):i.ZP.translate("AddToFavorites");var n=e.querySelector(".button-text");n&&(n.innerText=e.title)}function m(e){var t,n,i;e.removeEventListener("click",l),(i=(t=e)[n="UserDataChanged"])&&(r.Z.off(a.default,n,i),t[n]=null)}function h(e){var t,n,i;m(e),e.addEventListener("click",l),t=e,n="UserDataChanged",i=u.bind(t),r.Z.on(a.default,n,i),t[n]=i}var f=Object.create(s.Z);f.createdCallback=function(){s.Z.createdCallback&&s.Z.createdCallback.call(this)},f.attachedCallback=function(){s.Z.attachedCallback&&s.Z.attachedCallback.call(this);var e=this.getAttribute("data-id"),t=this.getAttribute("data-serverid");if(e&&t){var n=this.getAttribute("data-likes");c(this,n="true"===n||"false"!==n&&null,"true"===this.getAttribute("data-isfavorite"),!1),h(this)}else d(this)},f.detachedCallback=function(){s.Z.detachedCallback&&s.Z.detachedCallback.call(this),m(this)},f.setItem=function(e){if(e){this.setAttribute("data-id",e.Id),this.setAttribute("data-serverid",e.ServerId);var t=e.UserData||{};c(this,t.Likes,t.IsFavorite),h(this)}else this.removeAttribute("data-id"),this.removeAttribute("data-serverid"),this.removeAttribute("data-likes"),this.removeAttribute("data-isfavorite"),m(this)},document.registerElement("emby-ratingbutton",{prototype:f,extends:"button"})},42855:function(e,t,n){n(86225),n(33096),n(63241),n(48914),n(84159),n(59139),n(86028),n(81414),n(47134),n(96626),n(88646),n(54134),n(91270),n(14011),n(56187),n(38690),n(89228),n(13227),n(11431);var a=n(57366),i=n(72365),r=n(30325),s=n(84280),o=(n(67752),n(62033),n(94994)),l=n(34706);function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var c=Object.create(HTMLInputElement.prototype),d=!1;if(Object.getOwnPropertyDescriptor&&Object.defineProperty){var m=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value");null!=m&&m.configurable&&(d=!0)}function h(e,t){return t>0||(t=parseFloat(e.step))>0?t:1}function f(e,t){var n=e.sliderBubbleTrack.getBoundingClientRect(),a=(t-n.left)/n.width;o.ZP.getIsElementRTL(e)&&(a=(n.right-t)/n.width);var i=e.max-e.min;if("any"!==e.step&&0!==i){var r=h(e)/i;a=Math.round(a/r)*r}return Math.min(Math.max(a,0),1)}function v(e,t){var n=(e.max-e.min)*t,a=null;if("any"!==e.step){var i=h(e);a=(0,l.SN)(i),n=Math.round(n/i)*i}var r=parseFloat(e.min);return n+=r,null!=a&&(a=Math.max(a,(0,l.SN)(r)),n=parseFloat(n.toFixed(a))),Math.min(Math.max(n,e.min),e.max)}function g(e){if(!e||!this.keyboardDragging&&!this.touched){var t=this,n=t.value;cancelAnimationFrame(t.updateValuesFrame),t.updateValuesFrame=requestAnimationFrame((function(){var e=t.backgroundLower;if(e){var a=(n-t.min)/(t.max-t.min);a*=100,e.style.width=a+"%"}t.markerContainerElement&&(t.triedAddingMarkers||function(e){e.markerInfo=[],e.getMarkerInfo&&(e.markerInfo=e.getMarkerInfo()),e.markerInfo.forEach((function(t){var n,a;e.markerContainerElement.insertAdjacentHTML("beforeend",(a="","chapterMarker"===(n=t).className&&(a=n.className,"string"==typeof n.name&&n.name.length&&(a="".concat(n.className," marker-").concat(n.name.substring(0,100).toLowerCase().replace(" ","-")))),'<span class="material-icons sliderMarker '.concat(a,'" aria-hidden="true"></span>')))})),e.markerElements=e.markerContainerElement.querySelectorAll(".sliderMarker"),e.triedAddingMarkers=!0}(t),function(e,t){var n,a;if(null!==(n=e.markerInfo)&&void 0!==n&&n.length&&null!==(a=e.markerElements)&&void 0!==a&&a.length)for(var i=0,r=e.markerElements.length;i<r;i++)e.markerInfo.length>i&&b(e,v(e,e.markerInfo[i].progress),e.markerElements[i],t)}(t,n))}))}}function p(e,t,n,a){requestAnimationFrame((function(){var i,r=e.sliderBubbleTrack.getBoundingClientRect(),s=a.getBoundingClientRect(),l=r.width*t/100;o.ZP.getIsElementRTL(e)&&(l=r.width-l),l=Math.min(Math.max(l,s.width/2),r.width-s.width/2),a.style.left=l+"px",i=e.getBubbleHtml?e.getBubbleHtml(t,n):'<h1 class="sliderBubbleText">'+(i=e.getBubbleText?e.getBubbleText(t,n):n.toLocaleString())+"</h1>",a.innerHTML=i}))}function b(e,t,n,a){requestAnimationFrame((function(){var i=e.sliderBubbleTrack.getBoundingClientRect(),r=n.getBoundingClientRect();if(i.width&&r.width){var s=i.width*t/100-r.width/2;s=Math.min(Math.max(s,-r.width/2),i.width-r.width/2),n.style.left=s+"px",a>=t?(n.classList.remove("unwatched"),n.classList.add("watched")):(n.classList.add("unwatched"),n.classList.remove("watched"))}}))}c.attachedCallback=function(){if("true"!==this.getAttribute("data-embyslider")){this.setAttribute("data-embyslider","true"),this.classList.add("mdl-slider"),this.classList.add("mdl-js-slider"),a.Z.edge&&this.classList.add("slider-browser-edge"),r.Z.mobile||this.classList.add("mdl-slider-hoverthumb"),r.Z.tv&&this.classList.add("show-focus");var e=i.ZP.parentWithClass(this,"sliderContainer-settings");if(e&&this.getAttribute("label")){var t=this.ownerDocument.createElement("label");t.innerText=this.getAttribute("label"),t.classList.add("sliderLabel"),t.htmlFor=this.id,e.insertBefore(t,e.firstChild)}var n=this.parentNode;n.classList.add("mdl-slider-container"),n.insertAdjacentHTML("beforeend",'<div class="mdl-slider-background-flex-container"><div class="mdl-slider-background-flex"><div class="mdl-slider-background-flex-inner"><div class="mdl-slider-background-upper"></div><div class="mdl-slider-background-lower"></div></div></div></div><div class="sliderBubbleTrack"><div class="sliderBubble hide"></div></div>'),this.sliderBubbleTrack=n.querySelector(".sliderBubbleTrack"),this.backgroundLower=n.querySelector(".mdl-slider-background-lower"),this.backgroundUpper=n.querySelector(".mdl-slider-background-upper");var s=n.querySelector(".sliderBubble"),o=s.classList.contains("hide");this.markerContainerElement=n.querySelector(".sliderMarkerContainer"),i.ZP.addEventListener(this,"input",(function(){var e,t,n,a;this.dragging=!0,"true"!==this.dataset.sliderKeepProgress&&g.call(this),p(this,100*(e=this,t=this.value,a=0!==(n=e.max-e.min)?(t-e.min)/n:0,Math.min(Math.max(a,0),1)),parseFloat(this.value),s),o&&(s.classList.remove("hide"),o=!1)}),{passive:!0}),i.ZP.addEventListener(this,"change",(function(){this.dragging=!1,"true"===this.dataset.sliderKeepProgress&&g.call(this),s.classList.add("hide"),o=!0}),{passive:!0}),i.ZP.addEventListener(this,window.PointerEvent?"pointermove":"mousemove",(function(e){if(!this.dragging){var t=f(this,e.clientX);p(this,100*t,v(this,t),s),o&&(s.classList.remove("hide"),o=!1)}}),{passive:!0}),i.ZP.addEventListener(this,window.PointerEvent?"pointerleave":"mouseleave",(function(){s.classList.add("hide"),o=!0}),{passive:!0}),a.Z.iOS&&(i.ZP.addEventListener(this,"touchstart",(function(e){if(1===e.targetTouches.length){this.touched=!0;var t=f(this,e.targetTouches[0].clientX);this.value=v(this,t),this.dispatchEvent(new Event("input",{bubbles:!0,cancelable:!1})),e.preventDefault()}}),{capture:!0}),i.ZP.addEventListener(this,"touchmove",(function(e){if(this.touched&&1===e.targetTouches.length){var t=f(this,e.targetTouches[0].clientX);this.value=v(this,t),this.dispatchEvent(new Event("input",{bubbles:!0,cancelable:!1}))}}),{passive:!0}),i.ZP.addEventListener(this,"touchend",(function(){var e=this;setTimeout((function(){e.touched=!1,e.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!1}))}),0)}),{passive:!0})),d?this.addEventListener("valueset",g.bind(this,!0)):((u=(l=this).interval)&&clearInterval(u),l.interval=setInterval(g.bind(l,!0),100)),g.call(this)}var l,u};var y,w=1e3;function S(e){clearTimeout(y),y=void 0,e.keyboardDragging=!1;var t=new Event("change",{bubbles:!0,cancelable:!1});e.dispatchEvent(t)}function k(e,t){!function(e){e.keyboardDragging=!0,clearTimeout(y),y=setTimeout((function(){S(e)}),w)}(e),e.value=Math.max(e.min,Math.min(e.max,parseFloat(e.value)+t));var n=new Event("input",{bubbles:!0,cancelable:!1});e.dispatchEvent(n)}function I(e){switch(s.ZP.getKeyName(e)){case"ArrowLeft":case"Left":k(this,-h(this,this.keyboardStepDown)),e.preventDefault(),e.stopPropagation();break;case"ArrowRight":case"Right":k(this,h(this,this.keyboardStepUp)),e.preventDefault(),e.stopPropagation();break;case"Enter":this.keyboardDragging&&(S(this),e.preventDefault(),e.stopPropagation())}}function P(e,t,n){var a=e.style;o.ZP.getIsRTL()?a.right=Math.max(t,0)+"%":a.left=Math.max(t,0)+"%";var i=n-t;a.width=Math.max(Math.min(i,100),0)+"%"}c.enableKeyboardDragging=function(){this.keyboardDraggingEnabled||(this.addEventListener("keydown",I),this.keyboardDraggingEnabled=!0)},c.setKeyboardSteps=function(e,t){this.keyboardStepDown=e||t||1,this.keyboardStepUp=t||e||1},c.setBufferedRanges=function(e,t,n){var a=this.backgroundUpper;if(a){null!=t&&(e=function(e,t){return t?e.map((function(e){return{start:e.start/t*100,end:e.end/t*100}})):[]}(e,t),n=n/t*100);var i,r=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,o=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){o=!0,r=e},f:function(){try{s||null==n.return||n.return()}finally{if(o)throw r}}}}(e);try{for(r.s();!(i=r.n()).done;){var s=i.value;if(!(null!=n&&n>=s.end))return void P(a,s.start,s.end)}}catch(e){r.e(e)}finally{r.f()}P(a,0,0)}},c.setIsClear=function(e){var t=this.backgroundLower;t&&(e?t.classList.add("mdl-slider-background-lower-clear"):t.classList.remove("mdl-slider-background-lower-clear"))},c.detachedCallback=function(){var e=this.interval;e&&clearInterval(e),this.interval=null,this.backgroundUpper=null,this.backgroundLower=null},document.registerElement("emby-slider",{prototype:c,extends:"input"})}}]);