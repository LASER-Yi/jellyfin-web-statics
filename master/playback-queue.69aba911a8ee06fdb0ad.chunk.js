"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[77574,96084,14980],{65875:function(e,t,n){n(86584),t.A={getNowPlayingNames:function(e,t){var n,i,a=e,r=null,l=e.Name;e.AlbumId&&"Audio"===e.MediaType&&(a={Id:e.AlbumId,Name:e.Album,Type:"MusicAlbum",IsFolder:!0}),"Video"===e.MediaType&&(null!=e.IndexNumber&&(l=e.IndexNumber+" - "+l),null!=e.ParentIndexNumber&&(l=e.ParentIndexNumber+"."+l));var s="";null!==(n=e.ArtistItems)&&void 0!==n&&n.length?(r={Id:e.ArtistItems[0].Id,Name:e.ArtistItems[0].Name,Type:"MusicArtist",IsFolder:!0},s=e.ArtistItems.map((function(e){return e.Name})).join(", ")):null!==(i=e.Artists)&&void 0!==i&&i.length?s=e.Artists.join(", "):e.SeriesName||e.Album?(s=l,l=e.SeriesName||e.Album,r=a,a=e.SeriesId?{Id:e.SeriesId,Name:e.SeriesName,Type:"Series",IsFolder:!0}:null):e.ProductionYear&&!1!==t&&(s=e.ProductionYear);var o=[];return o.push({text:l,item:a}),s&&o.push({text:s,item:r}),o}}},84688:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}}),n(29305),n(32733),n(84701),n(24776),n(14382),n(69892),n(76281),n(84734),n(44962),n(86584),n(89336),n(77575),n(78557),n(67593),n(96054),n(90076),n(95021),n(73687),n(99425),n(83994),n(93062),n(82367);var i=n(22696),a=n.n(i),r=n(98320),l=n(89166),s=n(6940),o=n(76542),u=n(56142),c=n(65875),d=n(44797),f=n(22622),m=n(5898),y=n(46782),g=n(82885),h=n(55802),v=(n(10353),n(15453),n(1177),n(15605),n(57949),n(86191)),p=n(50764),b=n(70267),S=n(36645);function I(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return A(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,a=function(){};return{s:a,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){s=!0,r=e},f:function(){try{l||null==n.return||n.return()}finally{if(s)throw r}}}}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=Array(t);n<t;n++)i[n]=e[n];return i}var T=!0,P=!0;function L(e,t){t?e.classList.remove("hide"):e.classList.add("hide")}function q(){function e(e,n,r){Y=r;var s=r.NowPlayingItem,o=u.f.getPlayerInfo().supportedCommands;J=o;var d=r.PlayState||{},f=o.includes("DisplayMessage")||o.includes("SendString")||o.includes("Select");if(L(n.querySelector(".btnToggleFullscreen"),s&&"Video"==s.MediaType&&o.includes("ToggleFullscreen")),function(e,t){var n=J;L(t.querySelector(".btnAudioTracks"),u.f.audioTracks(e).length>1&&-1!=n.indexOf("SetAudioStreamIndex"))}(e,n),function(e,t){var n=J;L(t.querySelector(".btnSubtitles"),u.f.subtitleTracks(e).length&&-1!=n.indexOf("SetSubtitleStreamIndex"))}(e,n),o.includes("DisplayMessage")&&!K.isLocalPlayer?n.querySelector(".sendMessageSection").classList.remove("hide"):n.querySelector(".sendMessageSection").classList.add("hide"),o.includes("SendString")&&!K.isLocalPlayer?n.querySelector(".sendTextSection").classList.remove("hide"):n.querySelector(".sendTextSection").classList.add("hide"),o.includes("Select")&&!K.isLocalPlayer?n.querySelector(".navigationSection").classList.remove("hide"):n.querySelector(".navigationSection").classList.add("hide"),f&&!K.isLocalPlayer?n.querySelector(".remoteControlSection").classList.remove("hide"):n.querySelector(".remoteControlSection").classList.add("hide"),L(n.querySelector(".btnLyrics"),"Audio"===(null==s?void 0:s.Type)&&!y.A.mobile),L(n.querySelector(".btnStop"),null!=s),L(n.querySelector(".btnNextTrack"),null!=s),L(n.querySelector(".btnPreviousTrack"),null!=s),y.A.mobile){var m=u.f.isPlayingVideo()&&null!==s,p=!u.f.isPlayingVideo()&&null!==s,b=p&&"AudioBook"==s.Type;L(n.querySelector(".btnRepeat"),p&&!b),L(n.querySelector(".btnShuffleQueue"),p&&!b),L(n.querySelector(".btnRewind"),m||b),L(n.querySelector(".btnFastForward"),m||b),L(n.querySelector(".nowPlayingSecondaryButtons .btnShuffleQueue"),m),L(n.querySelector(".nowPlayingSecondaryButtons .btnRepeat"),m)}else L(n.querySelector(".btnRewind"),null!=s),L(n.querySelector(".btnFastForward"),null!=s);var T=n.querySelector(".nowPlayingPositionSlider");if(T&&s&&s.RunTimeTicks&&T.setKeyboardSteps(1e6*g.skipBackLength()/s.RunTimeTicks,1e6*g.skipForwardLength()/s.RunTimeTicks),T&&!T.dragging){T.disabled=!d.CanSeek;var P=r.MediaSource&&null==r.MediaSource.RunTimeTicks;T.setIsClear(P)}A(d.IsPaused,null!=s),q(d.PositionTicks,s?s.RunTimeTicks:null),i(n,d.IsMuted,d.VolumeLevel),s&&"Video"==s.MediaType?n.classList.remove("hideVideoButtons"):n.classList.add("hideVideoButtons"),t(u.f.getRepeatMode()),C(!1),function(e,t,n){var i,r=t.NowPlayingItem,s=r?(i=r,c.A.getNowPlayingNames(i,void 0).map((function(e){return a()(e.text)})).join("<br/>")).replace("<br/>"," - "):"";if(r){var o=r.ServerId||n;if("AudioBook"==r.Type||"Audio"==r.Type||"Audio"==r.MediaStreams[0].Type){var u="",d="";if(null!=r.Artists)if(null!=r.ArtistItems){var f,m=I(r.ArtistItems);try{for(m.s();!(f=m.n()).done;){var g=f.value;u+='<a class="button-link" is="emby-linkbutton" href="#/details?id='.concat(g.Id,"&serverId=").concat(o,'">').concat(a()(g.Name),"</a>"),g!==r.ArtistItems.slice(-1)[0]&&(u+=", ")}}catch(e){m.e(e)}finally{m.f()}}else if(r.Artists){var p,b=I(r.Artists);try{for(b.s();!(p=b.n()).done;){var A=p.value;u+="<a>".concat(a()(A),"</a>"),A!==r.Artists.slice(-1)[0]&&(u+=", ")}}catch(e){b.e(e)}finally{b.f()}}null!=r.Album&&(d='<a class="button-link" is="emby-linkbutton" href="#/details?id='+r.AlbumId+"&serverId=".concat(o,'">')+a()(r.Album)+"</a>"),e.querySelector(".nowPlayingAlbum").innerHTML=d,e.querySelector(".nowPlayingArtist").innerHTML=u,e.querySelector(".nowPlayingSongName").innerText=r.Name}else if("Episode"==r.Type){if(null!=r.SeasonName){var T=r.SeasonName;e.querySelector(".nowPlayingSeason").innerHTML='<a class="button-link" is="emby-linkbutton" href="#/details?id='+r.SeasonId+"&serverId=".concat(o,'">').concat(a()(T),"</a>")}if(null!=r.SeriesName){var P=r.SeriesName;null!=r.SeriesId?e.querySelector(".nowPlayingSerie").innerHTML='<a class="button-link" is="emby-linkbutton" href="#/details?id='+r.SeriesId+"&serverId=".concat(o,'">').concat(a()(P),"</a>"):e.querySelector(".nowPlayingSerie").innerText=P}e.querySelector(".nowPlayingEpisode").innerText=r.Name}else e.querySelector(".nowPlayingPageTitle").innerHTML=s;s.length>0&&"Audio"!=r.Type&&"Episode"!=r.Type?e.querySelector(".nowPlayingPageTitle").classList.remove("hide"):e.querySelector(".nowPlayingPageTitle").classList.add("hide");var L=function(e,t){if("Episode"!==e.Type)return null;if((t=t||{}).type=t.type||"Primary","Primary"===t.type&&e.SeriesPrimaryImageTag)return t.tag=e.SeriesPrimaryImageTag,v.A.getApiClient(e.ServerId).getScaledImageUrl(e.SeriesId,t);if("Thumb"===t.type){if(e.SeriesThumbImageTag)return t.tag=e.SeriesThumbImageTag,v.A.getApiClient(e.ServerId).getScaledImageUrl(e.SeriesId,t);if(e.ParentThumbImageTag)return t.tag=e.ParentThumbImageTag,v.A.getApiClient(e.ServerId).getScaledImageUrl(e.ParentThumbItemId,t)}return null}(r,{maxHeight:300})||function(e,t){var n;return(t=t||{}).type=t.type||"Primary",null!==(n=e.ImageTags)&&void 0!==n&&n[t.type]?(t.tag=e.ImageTags[t.type],v.A.getApiClient(e.ServerId).getScaledImageUrl(e.PrimaryImageItemId||e.Id,t)):e.AlbumId&&e.AlbumPrimaryImageTag?(t.tag=e.AlbumPrimaryImageTag,v.A.getApiClient(e.ServerId).getScaledImageUrl(e.AlbumId,t)):null}(r,{maxHeight:300}),q=e.querySelector(".btnToggleContextMenu"),x=document.activeElement===q,k=q.cloneNode(!0);q.parentNode.replaceChild(k,q),q=e.querySelector(".btnToggleContextMenu"),x&&q.focus();var w={play:!1,queue:!1,stopPlayback:!0,clearQueue:!0,openAlbum:!1,positionTo:q},C=v.A.getApiClient(r.ServerId);C.getItem(C.getCurrentUserId(),r.Id).then((function(e){C.getCurrentUser().then((function(t){q.addEventListener("click",(function(){h.default.show(Object.assign({item:e,user:t,isMobile:y.A.mobile},w)).catch((function(){}))}))}))})),function(e,t,n){var i=t.NowPlayingItem,a=e.querySelector(".nowPlayingPageImageContainer");n?(a.innerHTML='<img class="nowPlayingPageImage" src="'+n+'" />',e.querySelector(".nowPlayingPageImage").classList.toggle("nowPlayingPageImageAudio","Audio"===i.Type),e.querySelector(".nowPlayingPageImage").classList.toggle("nowPlayingPageImagePoster","Audio"!==i.Type)):a.innerHTML='<div class="nowPlayingPageImageContainerNoAlbum"><button data-action="link" class="cardImageContainer coveredImage '+(0,S.Qp)(i.Name)+' cardContent cardContent-shadow itemAction"><span class="cardImageIcon material-icons album" aria-hidden="true"></span></button></div>'}(e,t,L),(0,l.C9)([r]),C.getItem(C.getCurrentUserId(),r.Id).then((function(t){var n=t.UserData||{},i=null==n.Likes?"":n.Likes;e.querySelector(".nowPlayingPageUserDataButtonsTitle").innerHTML='<button is="emby-ratingbutton" type="button" class="paper-icon-button-light" data-id="'+t.Id+'" data-serverid="'+t.ServerId+'" data-itemtype="'+t.Type+'" data-likes="'+i+'" data-isfavorite="'+n.IsFavorite+'"><span class="material-icons favorite" aria-hidden="true"></span></button>',e.querySelector(".nowPlayingPageUserDataButtons").innerHTML='<button is="emby-ratingbutton" type="button" class="paper-icon-button-light" data-id="'+t.Id+'" data-serverid="'+t.ServerId+'" data-itemtype="'+t.Type+'" data-likes="'+i+'" data-isfavorite="'+n.IsFavorite+'"><span class="material-icons favorite" aria-hidden="true"></span></button>'}))}else(0,l.gJ)(),e.querySelector(".nowPlayingPageUserDataButtons").innerHTML=""}(n,r)}function t(e){var t=z.querySelectorAll(".repeatToggleButton"),n='<span class="material-icons repeat" aria-hidden="true"></span>',i=!0;switch(e){case"RepeatAll":break;case"RepeatOne":n='<span class="material-icons repeat_one" aria-hidden="true"></span>';break;default:i=!1}var a,r=I(t);try{for(r.s();!(a=r.n()).done;){var l=a.value;l.classList.toggle("buttonActive",i),l.innerHTML=n}}catch(e){r.e(e)}finally{r.f()}}function i(e,t,n){var i=e,a=J;-1===a.indexOf("Mute")&&(T=!1),-1===a.indexOf("SetVolume")&&(P=!1),K.isLocalPlayer&&f.g.supports("physicalvolumecontrol")&&(T=!1,P=!1);var r=i.querySelector(".buttonMute"),l=r.querySelector(".material-icons");if(l.classList.remove("volume_off","volume_up"),t?(r.setAttribute("title",m.Ay.translate("Unmute")),l.classList.add("volume_off")):(r.setAttribute("title",m.Ay.translate("Mute")),l.classList.add("volume_up")),T||P){r.classList.toggle("hide",!T);var s=e.querySelector(".nowPlayingVolumeSlider"),o=e.querySelector(".nowPlayingVolumeSliderContainer");s&&(o.classList.toggle("hide",!P),s.dragging||(s.value=n||0))}else e.querySelector(".volumecontrol").classList.add("hide")}function A(e,t){var n=z,i=n.querySelector(".btnPlayPause"),a=i.querySelector(".material-icons");a.classList.remove("play_circle_filled","pause_circle_filled"),a.classList.add(e?"play_circle_filled":"pause_circle_filled");var r=n.querySelector(".playlistIndexIndicatorImage");r&&r.classList.toggle("playlistIndexIndicatorPausedImage",e),L(i,t)}function q(e,t){var n=z,i=n.querySelector(".nowPlayingPositionSlider");if(i&&!i.dragging)if(t){var a=e/t;a*=100,i.value=a}else i.value=0;n.querySelector(".positionTime").innerHTML=Number.isFinite(e)?r.Ay.getDisplayRunningTime(e):"--:--",n.querySelector(".runtime").innerHTML=Number.isFinite(t)?r.Ay.getDisplayRunningTime(t):"--:--"}function x(e){return u.f.getPlaylist(e)}function k(e,t){console.debug("remotecontrol event: "+e.type),D.call(this,e,t)}function w(){t(u.f.getRepeatMode())}function C(){var e,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=u.f.getQueueShuffleMode(this),i="buttonActive",a=I(z.querySelectorAll(".btnShuffleQueue"));try{for(a.s();!(e=a.n()).done;){var r=e.value;"Shuffle"===n?r.classList.add(i):r.classList.remove(i)}}catch(e){a.e(e)}finally{a.f()}t&&M()}function M(){var e,t;e=z,x(t=this).then((function(n){var i="",a=!0;y.A.mobile&&(n.length>0?e.querySelector(".btnTogglePlaylist").classList.remove("hide"):e.querySelector(".btnTogglePlaylist").classList.add("hide"),a=!1),i+=s.A.getListViewHtml({items:n,smallIcon:!0,action:"setplaylistindex",enableUserDataButtons:a,rightButtons:[{icon:"remove_circle_outline",title:m.Ay.translate("ButtonRemove"),id:"remove"}],dragHandle:!0});var r=e.querySelector(".playlist"),l=r.querySelector("button:focus");if(r.innerHTML=i,null!==l){l=l.getAttribute("data-playlistitemid");var c=r.querySelector('button[data-playlistitemid="'.concat(l,'"]'));null!==c&&c.focus()}var d=u.f.getCurrentPlaylistItemId(t);if(d){var f=r.querySelector('.listItem[data-playlistItemId="'.concat(d,'"] .listItemImage'));f&&(f.classList.remove("lazy"),f.classList.add("playlistIndexIndicatorImage"),f.classList.toggle("playlistIndexIndicatorPausedImage",u.f.paused()))}o.default.lazyChildren(r)}))}function N(e,t){var n=z;if(void 0!==t)for(var i=t.playlistItemIds,a=0,r=i.length;a<r;a++){var l=n.querySelector('.listItem[data-playlistItemId="'+i[a]+'"]');l&&l.parentNode.removeChild(l)}else M()}function E(t,n){console.debug("remotecontrol event: "+t.type),n.NextMediaType||(e(this,z,{}),b.appRouter.back())}function R(){A(this.paused(),!0)}function D(t,n){e(this,z,n),M()}function H(){var e=(new Date).getTime();e-W>=700&&(W=e,$=u.f.duration(this),q(1e4*u.f.currentTime(this),$))}function F(){i(z,this.isMuted(),this.getVolume())}function O(){var e=K;e&&(d.A.off(e,"playbackstart",k),d.A.off(e,"statechange",D),d.A.off(e,"repeatmodechange",w),d.A.off(e,"shufflequeuemodechange",C),d.A.off(e,"playlistitemremove",N),d.A.off(e,"playlistitemmove",M),d.A.off(e,"playlistitemadd",M),d.A.off(e,"playbackstop",E),d.A.off(e,"volumechange",F),d.A.off(e,"pause",R),d.A.off(e,"unpause",R),d.A.off(e,"timeupdate",H),K=null)}function B(e,t){if(O(),K=t,t){var n=u.f.getPlayerState(t);D.call(t,{type:"init"},n),d.A.on(t,"playbackstart",k),d.A.on(t,"statechange",D),d.A.on(t,"repeatmodechange",w),d.A.on(t,"shufflequeuemodechange",C),d.A.on(t,"playlistitemremove",N),d.A.on(t,"playlistitemmove",M),d.A.on(t,"playlistitemadd",M),d.A.on(t,"playbackstop",E),d.A.on(t,"volumechange",F),d.A.on(t,"pause",R),d.A.on(t,"unpause",R),d.A.on(t,"timeupdate",H);var i=u.f.getPlayerInfo().supportedCommands;J=i,function(e,t){for(var n=e.querySelectorAll(".btnCommand"),i=0,a=n.length;i<a;i++){var r=-1!==t.indexOf(n[i].getAttribute("data-command"));n[i].disabled=!r}}(e,i)}}function U(){K&&(this.classList.contains("repeatToggleButton")?function(){switch(u.f.getRepeatMode()){case"RepeatAll":u.f.setRepeatMode("RepeatOne");break;case"RepeatOne":u.f.setRepeatMode("RepeatNone");break;case"RepeatNone":u.f.setRepeatMode("RepeatAll")}}():u.f.sendCommand({Name:this.getAttribute("data-command")},K))}function V(){Promise.all([n.e(45642),n.e(81949)]).then(n.bind(n,4330)).then((function(e){var t=e.default;x(K).then((function(e){return e.filter((function(e){return e.Id&&e.ServerId}))})).then((function(e){var n=e.length?e[0].ServerId:ApiClient.serverId();(new t).show({items:e.map((function(e){return e.Id})),serverId:n,enableAddToPlayQueue:!1,defaultValue:"new"}).catch((function(){}))}))})).catch((function(e){console.error("[savePlaylist] failed to load playlist editor",e)}))}function _(){B(z,u.f.getCurrentPlayer())}function j(e){var t=e.target;return u.f.sendCommand({Name:"DisplayMessage",Arguments:{Header:t.querySelector("#txtMessageTitle").value,Text:t.querySelector("#txtMessageText",t).value}},K),t.querySelector("input").value="",(0,p.A)(m.Ay.translate("MessageSent")),e.preventDefault(),e.stopPropagation(),!1}function Q(e){var t=e.target;return u.f.sendCommand({Name:"SendString",Arguments:{String:t.querySelector("#txtTypeText",t).value}},K),t.querySelector("input").value="",(0,p.A)(m.Ay.translate("TextSent")),e.preventDefault(),e.stopPropagation(),!1}var z,K,Y,J=[],W=0,$=0,G=this;G.init=function(e,t){!function(e,t){var i='<div class="volumecontrol flex align-items-center flex-wrap-wrap justify-content-center">';i+='<button is="paper-icon-button-light" class="buttonMute autoSize" title='.concat(m.Ay.translate("Mute"),'><span class="xlargePaperIconButton material-icons volume_up" aria-hidden="true"></span></button>'),i+='<div class="sliderContainer nowPlayingVolumeSliderContainer"><input is="emby-slider" type="range" step="1" min="0" max="100" value="0" class="nowPlayingVolumeSlider"/></div>',i+="</div>";var a=t.querySelector(".playlistSectionButton");if(y.A.mobile?(a.querySelector(".btnTogglePlaylist").insertAdjacentHTML("afterend",i),a.classList.add("playlistSectionButtonTransparent"),t.querySelector(".btnTogglePlaylist").classList.remove("hide"),t.querySelector(".playlistSectionButton").classList.remove("justify-content-center"),t.querySelector(".playlistSectionButton").classList.add("justify-content-space-between")):(t.querySelector(".nowPlayingSecondaryButtons").insertAdjacentHTML("beforeend",i),a.classList.remove("align-items-center","justify-content-center"),a.classList.add("align-items-right","justify-content-flex-end"),t.querySelector(".playlist").classList.remove("hide"),t.querySelector(".btnSavePlaylist").classList.remove("hide"),t.classList.add("padded-bottom")),function(e){for(var t=e.querySelectorAll(".btnCommand"),i=e.querySelector(".nowPlayingPositionSlider"),a=0,l=t.length;a<l;a++)t[a].addEventListener("click",U);e.querySelector(".btnToggleFullscreen").addEventListener("click",(function(){K&&u.f.toggleFullscreen(K)})),e.querySelector(".btnAudioTracks").addEventListener("click",(function(e){var t,i,a,r,l;K&&null!==(t=Y)&&void 0!==t&&t.NowPlayingItem&&(i=K,a=e.target,r=u.f.getAudioStreamIndex(i),l=u.f.audioTracks(i).map((function(e){var t={name:e.DisplayTitle,id:e.Index};return e.Index==r&&(t.selected=!0),t})),Promise.resolve().then(n.bind(n,62882)).then((function(e){e.show({items:l,positionTo:a,callback:function(e){u.f.setAudioStreamIndex(parseInt(e,10),i)}})})))})),e.querySelector(".btnSubtitles").addEventListener("click",(function(e){var t,i,a,r,l;K&&null!==(t=Y)&&void 0!==t&&t.NowPlayingItem&&(i=K,a=e.target,r=u.f.getSubtitleStreamIndex(i),(l=u.f.subtitleTracks(i).map((function(e){var t={name:e.DisplayTitle,id:e.Index};return e.Index==r&&(t.selected=!0),t}))).unshift({id:-1,name:m.Ay.translate("Off"),selected:null==r}),Promise.resolve().then(n.bind(n,62882)).then((function(e){e.show({items:l,positionTo:a,callback:function(e){u.f.setSubtitleStreamIndex(parseInt(e,10),i)}})})))})),e.querySelector(".btnStop").addEventListener("click",(function(){K&&u.f.stop(K)})),e.querySelector(".btnPlayPause").addEventListener("click",(function(){K&&u.f.playPause(K)})),e.querySelector(".btnNextTrack").addEventListener("click",(function(){K&&u.f.nextTrack(K)})),e.querySelector(".btnRewind").addEventListener("click",(function(){K&&u.f.rewind(K)})),e.querySelector(".btnFastForward").addEventListener("click",(function(){K&&u.f.fastForward(K)})),e.querySelector(".btnLyrics").addEventListener("click",(function(){b.appRouter.show("lyrics")}));var s,o=I(e.querySelectorAll(".btnShuffleQueue"));try{for(o.s();!(s=o.n()).done;)s.value.addEventListener("click",(function(){K&&u.f.toggleQueueShuffleMode(K)}))}catch(e){o.e(e)}finally{o.f()}e.querySelector(".btnPreviousTrack").addEventListener("click",(function(e){if(K){if(u.f.isPlayingAudio(K)){if(e.detail>1)return;if(u.f.currentTime(K)>=5e3||u.f.getCurrentPlaylistIndex(K)<=0)return u.f.seekPercent(0,K),void(i.value=0)}u.f.previousTrack(K)}})),e.querySelector(".btnPreviousTrack").addEventListener("dblclick",(function(){K&&u.f.previousTrack(K)})),i.addEventListener("change",(function(){var e=this.value;if(K){var t=parseFloat(e);u.f.seekPercent(t,K)}})),i.getBubbleText=function(e){if(null==Y||!Y.NowPlayingItem||!$)return"--:--";var t=$;return t/=100,t*=e,r.Ay.getDisplayRunningTime(t)},e.querySelector(".nowPlayingVolumeSlider").addEventListener("input",(function(e){u.f.setVolume(e.target.value,K)})),e.querySelector(".buttonMute").addEventListener("click",(function(){u.f.toggleMute(K)}));var c=e.querySelector(".playlist");c.addEventListener("action-remove",(function(e){u.f.removeFromPlaylist([e.detail.playlistItemId],K)})),c.addEventListener("itemdrop",(function(e){var t=e.detail.newIndex,n=e.detail.playlistItemId;u.f.movePlaylistItem(n,t,K)})),e.querySelector(".btnSavePlaylist").addEventListener("click",V),e.querySelector(".btnTogglePlaylist").addEventListener("click",(function(){e.querySelector(".playlist").classList.contains("hide")?(e.querySelector(".playlist").classList.remove("hide"),e.querySelector(".btnSavePlaylist").classList.remove("hide"),e.querySelector(".volumecontrol").classList.add("hide"),y.A.mobile&&e.querySelector(".playlistSectionButton").classList.remove("playlistSectionButtonTransparent")):(e.querySelector(".playlist").classList.add("hide"),e.querySelector(".btnSavePlaylist").classList.add("hide"),(T||P)&&e.querySelector(".volumecontrol").classList.remove("hide"),y.A.mobile&&e.querySelector(".playlistSectionButton").classList.add("playlistSectionButtonTransparent"))}))}(t),t.querySelector(".sendMessageForm").addEventListener("submit",j),t.querySelector(".typeTextForm").addEventListener("submit",Q),d.A.on(u.f,"playerchange",_),y.A.tv){var l=t.querySelector(".nowPlayingPositionSlider");l.classList.add("focusable"),l.enableKeyboardDragging()}}(0,z=t)},G.onShow=function(){B(z,u.f.getCurrentPlayer())},G.destroy=function(){O(),d.A.off(u.f,"playerchange",_),Y=null}}var x=n(73233);function k(e){var t,n=new q;function i(e){32===e.keyCode&&"BUTTON"!==e.target.tagName&&(u.f.playPause(t),e.preventDefault(),e.stopPropagation())}function a(){t&&(t=null)}n.init(e,e.querySelector(".remoteControlContent")),e.addEventListener("viewshow",(function(){var e;x.default.setTransparentMenu(!0),(e=u.f.getCurrentPlayer())!==t&&(a(),t=e),document.addEventListener("keydown",i),n&&n.onShow()})),e.addEventListener("viewbeforehide",(function(){x.default.setTransparentMenu(!1),document.removeEventListener("keydown",i),a(),n&&n.destroy()}))}n(81077),n(98959)},81077:function(e,t,n){n(69177),n(10353);var i=Object.create(HTMLDivElement.prototype);function a(){var e=this,t=e.parentNode.querySelector(".collapseContent");t.expanded?(t.expanded=!1,function(e,t){requestAnimationFrame((function(){t.style.height=t.offsetHeight+"px",t.offsetHeight,t.classList.remove("expanded"),t.style.height="0",setTimeout((function(){t.classList.contains("expanded")?t.classList.remove("hide"):t.classList.add("hide")}),300),e.querySelector(".material-icons").classList.remove("emby-collapse-expandIconExpanded")}))}(e,t)):(t.expanded=!0,function(e,t){requestAnimationFrame((function(){t.classList.remove("hide"),t.classList.add("expanded"),t.style.height="auto";var n=t.offsetHeight+"px";t.style.height="0",t.offsetHeight,t.style.height=n,setTimeout((function(){t.classList.contains("expanded")?t.classList.remove("hide"):t.classList.add("hide"),t.style.height="auto"}),300),e.querySelector(".material-icons").classList.add("emby-collapse-expandIconExpanded")}))}(e,t))}i.attachedCallback=function(){if(!this.classList.contains("emby-collapse")){this.classList.add("emby-collapse");var e=this.querySelector(".collapseContent");e&&e.classList.add("hide");var t=this.getAttribute("title"),n='<button is="emby-button" type="button" on-click="toggleExpand" id="expandButton" class="emby-collapsible-button iconRight"><h3 class="emby-collapsible-title" title="'+t+'">'+t+'</h3><span class="material-icons emby-collapse-expandIcon expand_more" aria-hidden="true"></span></button>';this.insertAdjacentHTML("afterbegin",n);var i=this.querySelector(".emby-collapsible-button");i.addEventListener("click",a),"true"===this.getAttribute("data-expanded")&&a.call(i)}},document.registerElement("emby-collapse",{prototype:i,extends:"div"})},1177:function(e,t,n){n(84734),n(44962),n(78557),n(96054),n(90076),n(83994),n(82367);var i=n(22832),a=n(38490),r=n(56142),l=n(76542),s=n(46782),o=n(34789),u=n(47629),c=n(8566),d=n(9164),f=n(10736),m=n(44797),y=(n(69177),n(86191)),g=n(65210),h=Object.create(HTMLDivElement.prototype);function v(e){var t=this,n=t.multiSelect;!1!==(null==n?void 0:n.onContainerClick.call(t,e))&&i.Ay.onClick.call(t,e)}function p(e){return e.preventDefault(),e.stopPropagation(),!1}function b(e){var t=e.target,n=u.Ay.parentWithAttribute(t,"data-id");if(null!=n&&n.getAttribute("data-serverid"))return a.default.handleCommand("menu",{sourceElement:n}),e.preventDefault(),e.stopPropagation(),!1}function S(e,t,i){var a=this;Promise.all([n.e(45642),n.e(24468),n.e(14980)]).then(n.bind(n,24468)).then((function(e){e.onUserDataChanged(i,a)}));var r=I(a);-1===r.indexOf("markfavorite")&&-1===r.indexOf("markplayed")||a.notifyRefreshNeeded()}function I(e){var t=e.getAttribute("data-monitor");return t?t.split(","):[]}function A(e,t,i){var a=this;if(-1===I(a).indexOf("timers")){var r=i.ProgramId,l=i.Id;Promise.all([n.e(45642),n.e(24468),n.e(14980)]).then(n.bind(n,24468)).then((function(e){e.onTimerCreated(r,l,a)}))}else a.notifyRefreshNeeded()}function T(){-1!==I(this).indexOf("seriestimers")&&this.notifyRefreshNeeded()}function P(e,t,i){var a=this;-1===I(a).indexOf("timers")?Promise.all([n.e(45642),n.e(24468),n.e(14980)]).then(n.bind(n,24468)).then((function(e){e.onTimerCancelled(i.Id,a)})):a.notifyRefreshNeeded()}function L(e,t,i){var a=this;-1===I(a).indexOf("seriestimers")?Promise.all([n.e(45642),n.e(24468),n.e(14980)]).then(n.bind(n,24468)).then((function(e){e.onSeriesTimerCancelled(i.Id,a)})):a.notifyRefreshNeeded()}function q(e,t,n){var i=this,a=I(i);if(-1===a.indexOf("seriestimers")&&-1===a.indexOf("timers")){var r=n.ItemsAdded||[],l=n.ItemsRemoved||[];if(r.length||l.length){var s=i.getAttribute("data-parentid");if(s){var o=n.FoldersAddedTo||[],u=n.FoldersRemovedFrom||[],c=n.CollectionFolders||[];if(-1===o.indexOf(s)&&-1===u.indexOf(s)&&-1===c.indexOf(s))return}i.notifyRefreshNeeded()}}}function x(e,t){var n,i=this,a=t.state,r=I(i);if(a.NowPlayingItem&&"Video"===a.NowPlayingItem.MediaType){if(-1!==r.indexOf("videoplayback"))return void i.notifyRefreshNeeded(!0)}else if("Audio"===(null===(n=a.NowPlayingItem)||void 0===n?void 0:n.MediaType)&&-1!==r.indexOf("audioplayback"))return void i.notifyRefreshNeeded(!0)}function k(e,t,n,i){var a=n.bind(e);i=i||f.default,m.A.on(i,t,a),e["event_"+t]=a}function w(e,t,n){var i=e["event_"+t];i&&(n=n||f.default,m.A.off(n,t,i),e["event_"+t]=null)}function C(e,t){e.refreshInterval&&(clearInterval(e.refreshInterval),e.refreshInterval=null,t||(e.refreshIntervalEndTime=null))}function M(e,t){C(e),t||(t=parseInt(e.getAttribute("data-refreshinterval")||"0",10)),t&&(e.refreshInterval=setInterval(e.notifyRefreshNeeded.bind(e),t),e.refreshIntervalEndTime=(new Date).getTime()+t)}function N(e){var t=e.Items||e,n=this.parentContainer;n&&(t.length?n.classList.remove("hide"):n.classList.add("hide"));var i,a,r=document.activeElement;this.contains(r)&&(a=!0,i=r.getAttribute("data-id")),this.innerHTML=this.getItemsHtml(t),l.default.lazyChildren(this),a&&function(e,t){if(t){var n=e.querySelector('[data-id="'+t+'"]');if(n)try{return void d.A.focus(n)}catch(e){console.error(e)}}d.A.autoFocus(e)}(this,i),M(this),this.afterRefresh&&this.afterRefresh(e)}h.enableMultiSelect=function(e){var t=this.multiSelect;if(e){if(!t){var i=this;n.e(35308).then(n.bind(n,35308)).then((function(e){var t=e.default;i.multiSelect=new t({container:i,bindOnClick:!1})}))}}else t&&(t.destroy(),this.multiSelect=null)},h.enableDragReordering=function(e){var t=this.sortable;if(e){if(!t){var n=this;n.sortable=new g.Ay(n,{draggable:".listItem",handle:".listViewDragHandle",onEnd:function(e){return function(e,t){var n=e.item,i=e.newIndex,a=n.getAttribute("data-playlistitemid"),r=n.getAttribute("data-playlistid");if(r){var l=n.getAttribute("data-serverid"),s=y.A.getApiClient(l);c.Ay.show(),s.ajax({url:s.getUrl("Playlists/"+r+"/Items/"+a+"/Move/"+i),type:"POST"}).then((function(){c.Ay.hide()}),(function(){c.Ay.hide(),t.refreshItems()}))}else{var o=e.oldIndex;n.dispatchEvent(new CustomEvent("itemdrop",{detail:{oldIndex:o,newIndex:i,playlistItemId:a},bubbles:!0,cancelable:!1}))}}(e,n)}})}}else t&&(t.destroy(),this.sortable=null)},h.createdCallback=function(){this.classList.add("itemsContainer")},h.attachedCallback=function(){this.addEventListener("click",v),o.A.touch?this.addEventListener("contextmenu",p):"false"!==this.getAttribute("data-contextmenu")&&this.addEventListener("contextmenu",b),(s.A.desktop||s.A.mobile&&"false"!==this.getAttribute("data-multiselect"))&&this.enableMultiSelect(!0),s.A.tv&&this.classList.add("itemsContainer-tv"),i.Ay.on(this,{click:!1}),k(this,"UserDataChanged",S),k(this,"TimerCreated",A),k(this,"SeriesTimerCreated",T),k(this,"TimerCancelled",P),k(this,"SeriesTimerCancelled",L),k(this,"LibraryChanged",q),k(this,"playbackstop",x,r.f),"true"===this.getAttribute("data-dragreorder")&&this.enableDragReordering(!0)},h.detachedCallback=function(){C(this),this.enableMultiSelect(!1),this.enableDragReordering(!1),this.removeEventListener("click",v),this.removeEventListener("contextmenu",b),this.removeEventListener("contextmenu",p),i.Ay.off(this,{click:!1}),w(this,"UserDataChanged"),w(this,"TimerCreated"),w(this,"SeriesTimerCreated"),w(this,"TimerCancelled"),w(this,"SeriesTimerCancelled"),w(this,"LibraryChanged"),w(this,"playbackstop",r.f),this.fetchData=null,this.getItemsHtml=null,this.parentContainer=null},h.pause=function(){C(this,!0),this.paused=!0},h.resume=function(e){this.paused=!1;var t=this.refreshIntervalEndTime;if(t){var n=t-(new Date).getTime();n>0&&!this.needsRefresh?M(this,n):(this.needsRefresh=!0,this.refreshIntervalEndTime=null)}return this.needsRefresh||null!=e&&e.refresh?this.refreshItems():Promise.resolve()},h.refreshItems=function(){return this.fetchData?this.paused?(this.needsRefresh=!0,Promise.resolve()):(this.needsRefresh=!1,this.fetchData().then(N.bind(this))):Promise.resolve()},h.notifyRefreshNeeded=function(e){if(this.paused)this.needsRefresh=!0;else{var t=this.refreshTimeout;t&&clearTimeout(t),!0===e?this.refreshItems():this.refreshTimeout=setTimeout(this.refreshItems.bind(this),1e4)}},document.registerElement("emby-itemscontainer",{prototype:h,extends:"div"})}}]);