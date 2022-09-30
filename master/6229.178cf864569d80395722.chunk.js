"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6229,7636],{56229:function(e,t,a){a.r(t),a(63238),a(55849),a(43512),a(27471),a(48410);var n=a(61693),i=a(47005),r=a(57366),s=a(98301),o=a(30325),l=a(48957),u=a(69011),d=a(84881),c=a(72365),g=a(9337),m=(a(61414),a(27636),a(18613));function p(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}a(99785);var v,f,h,y,b,P,I,T,S,w,k,L,B,A,E,C=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var t,a=this;a.element=((t=document.createElement("div")).classList.add("appfooter"),document.body.appendChild(t),t),a.add=function(e){a.element.appendChild(e)},a.insert=function(e){"string"==typeof e?a.element.insertAdjacentHTML("afterbegin",e):a.element.insertBefore(e,a.element.firstChild)}}var t,a;return t=e,(a=[{key:"destroy",value:function(){this.element=null}}])&&p(t.prototype,a),Object.defineProperty(t,"prototype",{writable:!1}),e}()),M=a(61008),O=(a(42855),a(52050)),x=[],N=0,Z={},q=0,R=!0;function U(){this.classList.add("hide")}function _(){l.O.playPause(v)}function F(){if(E)return E;var e,t,a=C.element;return(E=a.querySelector(".nowPlayingBar"))||(a.insertAdjacentHTML("afterbegin",(e="",e+='<div class="nowPlayingBar hide nowPlayingBar-hidden">',e+='<div class="nowPlayingBarTop">',e+='<div class="nowPlayingBarPositionContainer sliderContainer">',e+='<input type="range" is="emby-slider" pin step=".01" min="0" max="100" value="0" class="slider-medium-thumb nowPlayingBarPositionSlider" data-slider-keep-progress="true"/>',e+="</div>",e+='<div class="nowPlayingBarInfoContainer">',e+='<div class="nowPlayingImage"></div>',e+='<div class="nowPlayingBarText"></div>',e+="</div>",e+='<div class="nowPlayingBarCenter">',e+='<button is="paper-icon-button-light" class="previousTrackButton mediaButton"><span class="material-icons skip_previous" aria-hidden="true"></span></button>',e+='<button is="paper-icon-button-light" class="playPauseButton mediaButton"><span class="material-icons pause" aria-hidden="true"></span></button>',e+='<button is="paper-icon-button-light" class="stopButton mediaButton"><span class="material-icons stop" aria-hidden="true"></span></button>',o.Z.mobile||(e+='<button is="paper-icon-button-light" class="nextTrackButton mediaButton"><span class="material-icons skip_next" aria-hidden="true"></span></button>'),e+='<div class="nowPlayingBarCurrentTime"></div>',e+="</div>",e+='<div class="nowPlayingBarRight">',e+='<button is="paper-icon-button-light" class="muteButton mediaButton"><span class="material-icons volume_up" aria-hidden="true"></span></button>',e+='<div class="sliderContainer nowPlayingBarVolumeSliderContainer hide" style="width:9em;vertical-align:middle;display:inline-flex;">',e+='<input type="range" is="emby-slider" pin step="1" min="0" max="100" value="0" class="slider-medium-thumb nowPlayingBarVolumeSlider"/>',e+="</div>",e+='<button is="paper-icon-button-light" class="toggleRepeatButton mediaButton"><span class="material-icons repeat" aria-hidden="true"></span></button>',e+='<button is="paper-icon-button-light" class="btnShuffleQueue mediaButton"><span class="material-icons shuffle" aria-hidden="true"></span></button>',e+='<div class="nowPlayingBarUserDataButtons">',e+="</div>",e+='<button is="paper-icon-button-light" class="playPauseButton mediaButton"><span class="material-icons pause" aria-hidden="true"></span></button>',o.Z.mobile?e+='<button is="paper-icon-button-light" class="nextTrackButton mediaButton"><span class="material-icons skip_next" aria-hidden="true"></span></button>':e+='<button is="paper-icon-button-light" class="btnToggleContextMenu mediaButton"><span class="material-icons more_vert" aria-hidden="true"></span></button>',e+="</div>",(e+="</div>")+"</div>")),window.CustomElements.upgradeSubtree(a),E=a.querySelector(".nowPlayingBar"),o.Z.mobile&&(D(E.querySelector(".btnShuffleQueue")),D(E.querySelector(".nowPlayingBarCenter"))),r.Z.safari&&r.Z.slow&&E.classList.add("noMediaProgress"),M.ZP.on(E),f=(t=E).querySelector(".nowPlayingBarCurrentTime"),h=t.querySelector(".nowPlayingImage"),b=t.querySelector(".nowPlayingBarText"),P=t.querySelector(".nowPlayingBarUserDataButtons"),k=t.querySelector(".nowPlayingBarPositionSlider"),I=t.querySelector(".muteButton"),w=t.querySelectorAll(".playPauseButton"),L=t.querySelector(".toggleRepeatButton"),T=t.querySelector(".nowPlayingBarVolumeSlider"),S=t.querySelector(".nowPlayingBarVolumeSliderContainer"),I.addEventListener("click",(function(){v&&l.O.toggleMute(v)})),t.querySelector(".stopButton").addEventListener("click",(function(){v&&l.O.stop(v)})),w.forEach((function(e){e.addEventListener("click",_)})),t.querySelector(".nextTrackButton").addEventListener("click",(function(){v&&l.O.nextTrack(v)})),t.querySelector(".previousTrackButton").addEventListener("click",(function(e){if(v)if("Audio"===Z.NowPlayingItem.MediaType&&(v._currentTime>=5||!l.O.previousTrack(v))){if(e.detail>1&&l.O.previousTrack(v))return;l.O.seekPercent(0,v),k.value=0}else l.O.previousTrack(v)})),t.querySelector(".previousTrackButton").addEventListener("dblclick",(function(){v&&l.O.previousTrack(v)})),t.querySelector(".btnShuffleQueue").addEventListener("click",(function(){v&&l.O.toggleQueueShuffleMode()})),(L=t.querySelector(".toggleRepeatButton")).addEventListener("click",(function(){switch(l.O.getRepeatMode()){case"RepeatAll":l.O.setRepeatMode("RepeatOne");break;case"RepeatOne":l.O.setRepeatMode("RepeatNone");break;case"RepeatNone":l.O.setRepeatMode("RepeatAll")}})),B=L.querySelector(".material-icons"),S.classList.toggle("hide",d.M.supports("physicalvolumecontrol")),T.addEventListener("input",(function(e){v&&v.setVolume(e.target.value)})),k.addEventListener("change",(function(){if(v){var e=parseFloat(this.value);l.O.seekPercent(e,v)}})),k.getBubbleText=function(e){if(!Z||!Z.NowPlayingItem||!q)return"--:--";var t=q;return t/=100,t*=e,n.ZP.getDisplayRunningTime(t)},t.addEventListener("click",(function(e){c.ZP.parentWithTag(e.target,["BUTTON","INPUT"])||O.appRouter.showNowPlaying()}))),E}function D(e){e.classList.add("hide")}function V(e){w&&w.forEach((function(t){var a=t.querySelector(".material-icons");a.classList.remove("play_arrow","pause"),a.classList.add(e?"play_arrow":"pause")}))}function j(e){B.classList.remove("repeat","repeat_one");var t="buttonActive";switch(e){case"RepeatAll":B.classList.add("repeat"),L.classList.add(t);break;case"RepeatOne":B.classList.add("repeat_one"),L.classList.add(t);break;default:B.classList.add("repeat"),L.classList.remove(t)}}function H(e,t,a){if(k&&!k.dragging)if(t){var i=e/t;i*=100,k.value=i}else k.value=0;if(k&&k.setBufferedRanges(a,t,e),f){var r=null==e?"--:--":n.ZP.getDisplayRunningTime(e);t&&(r+=" / "+n.ZP.getDisplayRunningTime(t)),f.innerHTML=r}}function Q(e,t){var a=x,n=!0,i=!0;-1===a.indexOf("ToggleMute")&&(n=!1);var r=I.querySelector(".material-icons");r.classList.remove("volume_off","volume_up"),r.classList.add(e?"volume_off":"volume_up"),-1===a.indexOf("SetVolume")&&(i=!1),v.isLocalPlayer&&d.M.supports("physicalvolumecontrol")&&(n=!1,i=!1),n?I.classList.remove("hide"):D(I),T&&(S.classList.toggle("hide",!i),T.dragging||(T.value=t||0))}function W(e,t){console.debug("nowplaying event: "+e.type),X.call(this,e,t)}function Y(){A&&j(l.O.getRepeatMode())}function z(){if(A){var e=l.O.getQueueShuffleMode(),t="buttonActive",a=E.querySelector(".btnShuffleQueue");"Shuffle"===e?a.classList.add(t):a.classList.remove(t)}}function G(){A=!1;var e=document.getElementsByClassName("nowPlayingBar")[0];e&&function(e){e.offsetWidth,e.classList.add("nowPlayingBar-hidden"),c.ZP.addEventListener(e,c.ZP.whichTransitionEvent(),U,{once:!0})}(e)}function J(e,t){console.debug("nowplaying event: "+e.type),this.isLocalPlayer?"Audio"!==t.NextMediaType&&G():t.NextMediaType||G()}function K(){A&&V(this.paused())}function X(e,t){if("init"!==e.type){console.debug("nowplaying event: "+e.type);t.NowPlayingItem&&!o.Z.tv&&!1!==t.IsFullscreen?this.isLocalPlayer&&t.NowPlayingItem&&"Video"===t.NowPlayingItem.MediaType?G():(A=!0,E||F(),function(e,t,a){var n;R?(n=F(),c.ZP.removeEventListener(n,c.ZP.whichTransitionEvent(),U,{once:!0}),n.classList.remove("hide"),n.offsetWidth,n.classList.remove("nowPlayingBar-hidden")):G(),Z=t;var i=l.O.getPlayerInfo(),r=t.PlayState||{};V(r.IsPaused);var d=i.supportedCommands;if(x=d,-1===d.indexOf("SetRepeatMode")?L.classList.add("hide"):L.classList.remove("hide"),j(l.O.getRepeatMode()),z(),Q(r.IsMuted,r.VolumeLevel),k&&!k.dragging){k.disabled=!r.CanSeek;var p=t.MediaSource&&null==t.MediaSource.RunTimeTicks;k.setIsClear(p)}var v=t.NowPlayingItem||{};H(r.PositionTicks,v.RunTimeTicks,l.O.getBufferedRanges(a)),function(e){var t=e.NowPlayingItem,a=t?u.Z.getNowPlayingNames(t):[];if(b.innerHTML="",a){var n=document.createElement("div"),i=document.createElement("div");if(i.classList.add("nowPlayingBarSecondaryText"),a.length>1&&(a[1].secondary=!0,a[1].text)){var r=document.createElement("a");r.innerHTML=a[1].text,i.appendChild(r)}if(a[0].text){var l=document.createElement("a");l.innerHTML=a[0].text,n.appendChild(l)}b.appendChild(n),b.appendChild(i)}var d=t?function(e,t){if(!e)throw new Error("item cannot be null!");if("Episode"!==e.Type)return null;if((t=t||{}).type=t.type||"Primary","Primary"===t.type&&e.SeriesPrimaryImageTag)return t.tag=e.SeriesPrimaryImageTag,m.Z.getApiClient(e.ServerId).getScaledImageUrl(e.SeriesId,t);if("Thumb"===t.type){if(e.SeriesThumbImageTag)return t.tag=e.SeriesThumbImageTag,m.Z.getApiClient(e.ServerId).getScaledImageUrl(e.SeriesId,t);if(e.ParentThumbImageTag)return t.tag=e.ParentThumbImageTag,m.Z.getApiClient(e.ServerId).getScaledImageUrl(e.ParentThumbItemId,t)}return null}(t,{height:70})||function(e,t){if(!e)throw new Error("item cannot be null!");return(t=t||{}).type=t.type||"Primary",e.ImageTags&&e.ImageTags[t.type]?(t.tag=e.ImageTags[t.type],m.Z.getApiClient(e.ServerId).getScaledImageUrl(e.PrimaryImageItemId||e.Id,t)):e.AlbumId&&e.AlbumPrimaryImageTag?(t.tag=e.AlbumPrimaryImageTag,m.Z.getApiClient(e.ServerId).getScaledImageUrl(e.AlbumId,t)):null}(t,{height:70}):null;if(d!==y&&(d?(y=d,s.default.lazyImage(h,y),h.style.display=null,b.style.marginLeft=null):(y=null,h.style.backgroundImage="",h.style.display="none",b.style.marginLeft="1em")),t.Id){var c=m.Z.getApiClient(t.ServerId);c.getItem(c.getCurrentUserId(),t.Id).then((function(e){var t=e.UserData||{},a=null==t.Likes?"":t.Likes;if(!o.Z.mobile){var n=E.querySelector(".btnToggleContextMenu"),i=n.cloneNode(!0);n.parentNode.replaceChild(i,n);var r={play:!1,queue:!1,stopPlayback:!0,clearQueue:!0,positionTo:n=E.querySelector(".btnToggleContextMenu")};c.getCurrentUser().then((function(t){n.addEventListener("click",(function(){g.default.show(Object.assign({item:e,user:t},r))}))}))}P.innerHTML='<button is="emby-ratingbutton" type="button" class="listItemButton mediaButton paper-icon-button-light" data-id="'+e.Id+'" data-serverid="'+e.ServerId+'" data-itemtype="'+e.Type+'" data-likes="'+a+'" data-isfavorite="'+t.IsFavorite+'"><span class="material-icons favorite" aria-hidden="true"></span></button>'}))}else P.innerHTML=""}(t)}(0,t,this)):G()}}function $(){if(A){var e=(new Date).getTime();if(!(e-N<700)){N=e;var t=this;q=l.O.duration(t),H(1e4*l.O.currentTime(t),q,l.O.getBufferedRanges(t))}}}function ee(){A&&Q(this.isMuted(),this.getVolume())}function te(e,t){var a=l.O.getPlayerState(e);X.call(e,{type:t},a)}function ae(e){e!==v&&(function(){var e=v;e&&(i.Events.off(e,"playbackstart",W),i.Events.off(e,"statechange",W),i.Events.off(e,"repeatmodechange",Y),i.Events.off(e,"shufflequeuemodechange",z),i.Events.off(e,"playbackstop",J),i.Events.off(e,"volumechange",ee),i.Events.off(e,"pause",K),i.Events.off(e,"unpause",K),i.Events.off(e,"timeupdate",$),v=null,G())}(),v=e,e&&(te(e,"init"),i.Events.on(e,"playbackstart",W),i.Events.on(e,"statechange",W),i.Events.on(e,"repeatmodechange",Y),i.Events.on(e,"shufflequeuemodechange",z),i.Events.on(e,"playbackstop",J),i.Events.on(e,"volumechange",ee),i.Events.on(e,"pause",K),i.Events.on(e,"unpause",K),i.Events.on(e,"timeupdate",$)))}i.Events.on(l.O,"playerchange",(function(){ae(l.O.getCurrentPlayer())})),ae(l.O.getCurrentPlayer()),document.addEventListener("viewbeforeshow",(function(e){e.detail.options.enableMediaControl?R||(R=!0,v?te(v,"refresh"):G()):R&&(R=!1,G())}))},69011:function(e,t,a){a(61013);var n=a(65009),i=a.n(n);t.Z={getNowPlayingNames:function(e,t){var a=e,n=null,r=e.Name;e.AlbumId&&"Audio"===e.MediaType&&(a={Id:e.AlbumId,Name:e.Album,Type:"MusicAlbum",IsFolder:!0}),"Video"===e.MediaType&&(null!=e.IndexNumber&&(r=e.IndexNumber+" - "+r),null!=e.ParentIndexNumber&&(r=e.ParentIndexNumber+"."+r));var s="";e.ArtistItems&&e.ArtistItems.length?(n={Id:e.ArtistItems[0].Id,Name:e.ArtistItems[0].Name,Type:"MusicArtist",IsFolder:!0},s=e.ArtistItems.map((function(e){return e.Name})).join(", ")):e.Artists&&e.Artists.length?s=e.Artists.join(", "):e.SeriesName||e.Album?(s=r,r=e.SeriesName||e.Album,n=a,a=e.SeriesId?{Id:e.SeriesId,Name:e.SeriesName,Type:"Series",IsFolder:!0}:null):e.ProductionYear&&!1!==t&&(s=e.ProductionYear);var o=[];return o.push({text:i()(r),item:a}),s&&o.push({text:i()(s),item:n}),o}}},27636:function(e,t,a){a.r(t);var n=a(44038),i=a(47005),r=a(94994),s=a(38228),o=a(18613);function l(){var e=this,t=e.getAttribute("data-id"),a=e.getAttribute("data-serverid"),n=o.Z.getApiClient(a),i=this.getAttribute("data-likes");i="true"===i||"false"!==i&&null,function(e,t,a,n,i){return t.updateFavoriteStatus(t.getCurrentUserId(),a,!i)}(0,n,t,0,"true"===this.getAttribute("data-isfavorite")).then((function(t){d(e,t.Likes,t.IsFavorite)}))}function u(e,t,a){a.ItemId===this.getAttribute("data-id")&&d(this,a.Likes,a.IsFavorite)}function d(e,t,a,n){var i=e.querySelector(".material-icons");a?(i&&(i.classList.add("favorite"),i.classList.add("ratingbutton-icon-withrating")),e.classList.add("ratingbutton-withrating")):(i&&(i.classList.add("favorite"),i.classList.remove("ratingbutton-icon-withrating")),e.classList.remove("ratingbutton-withrating")),!1!==n&&(e.setAttribute("data-isfavorite",a),e.setAttribute("data-likes",null===t?"":t)),c(e,a)}function c(e,t){e.title=t?r.ZP.translate("Favorite"):r.ZP.translate("AddToFavorites");var a=e.querySelector(".button-text");a&&(a.innerText=e.title)}function g(e){var t,a,r;e.removeEventListener("click",l),(r=(t=e)[a="UserDataChanged"])&&(i.Events.off(n.default,a,r),t[a]=null)}function m(e){var t,a,r;g(e),e.addEventListener("click",l),t=e,a="UserDataChanged",r=u.bind(t),i.Events.on(n.default,a,r),t[a]=r}var p=Object.create(s.Z);p.createdCallback=function(){s.Z.createdCallback&&s.Z.createdCallback.call(this)},p.attachedCallback=function(){s.Z.attachedCallback&&s.Z.attachedCallback.call(this);var e=this.getAttribute("data-id"),t=this.getAttribute("data-serverid");if(e&&t){var a=this.getAttribute("data-likes");d(this,a="true"===a||"false"!==a&&null,"true"===this.getAttribute("data-isfavorite"),!1),m(this)}else c(this)},p.detachedCallback=function(){s.Z.detachedCallback&&s.Z.detachedCallback.call(this),g(this)},p.setItem=function(e){if(e){this.setAttribute("data-id",e.Id),this.setAttribute("data-serverid",e.ServerId);var t=e.UserData||{};d(this,t.Likes,t.IsFavorite),m(this)}else this.removeAttribute("data-id"),this.removeAttribute("data-serverid"),this.removeAttribute("data-likes"),this.removeAttribute("data-isfavorite"),g(this)},document.registerElement("emby-ratingbutton",{prototype:p,extends:"button"})}}]);