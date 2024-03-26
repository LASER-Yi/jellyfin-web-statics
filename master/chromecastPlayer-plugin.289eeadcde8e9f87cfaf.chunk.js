"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9601,87503],{59209:function(e,t,a){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function s(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,i(n.key),n)}}function i(e){var t=function(e,t){if("object"!=n(e)||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var s=a.call(e,"string");if("object"!=n(s))return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==n(t)?t:String(t)}a.r(t),a(81414),a(37666),a(26031),a(95822),a(56187),a(38690),a(11908),a(33096),a(89228),a(13227),a(14011),a(11431);var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,a;return t=e,(a=[{key:"load",value:function(){if("cordova"===window.appMode||"android"===window.appMode)return window.chrome=window.chrome||{},Promise.resolve();var e=!1;return e?Promise.resolve():new Promise((function(t){var a=document.createElement("script");a.setAttribute("type","text/javascript"),a.onload=function(){e=!0,t()},a.setAttribute("src","https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"),document.querySelector("head").appendChild(a)}))}}])&&s(t.prototype,a),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.default=r},37198:function(e,t,a){a.r(t),a(3127),a(81414),a(37666),a(96626),a(13227),a(14011),a(11431),a(5735),a(32904),a(48349),a(62659),a(26031),a(95822),a(56187),a(38690),a(11908),a(19131),a(44901),a(54112),a(2663),a(33096),a(89228);var n=a(59858),s=a(60934),i=a(2513),r=a(94994),o=a(59209),l=a(18613),u=a(37099),c=a(86062),d=a(74131),y=a(98048);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,p(n.key),n)}}function f(e,t,a){return t&&h(e.prototype,t),a&&h(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}function p(e){var t=function(e,t){if("object"!=m(e)||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,"string");if("object"!=m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==m(t)?t:String(t)}var g="Google Cast",P=null,S=null;function I(e){var t=P,a=S;P=null,S=null,e?t&&t():a?a():i.O.removeActivePlayer(g)}var k="IDLE",b="urn:x-cast:com.connectsdk",M=function(){function e(){v(this,e),this.deviceState=0,this.currentMediaSession=null,this.session=null,this.castPlayerState=k,this.hasReceivers=!1,this.errorHandler=this.onError.bind(this),this.mediaStatusUpdateHandler=this.onMediaStatusUpdate.bind(this),this.initializeCastPlayer()}return f(e,[{key:"initializeCastPlayer",value:function(){var e,t=this,a=window.chrome;if(a)if(null!==(e=a.cast)&&void 0!==e&&e.isAvailable){var n=l.Z.currentApiClient(),s=n.getCurrentUserId();n.getUser(s).then((function(e){var n=e.Configuration.CastReceiverId;if(n){var s=new a.cast.SessionRequest(n),i=new a.cast.ApiConfig(s,t.sessionListener.bind(t),t.receiverListener.bind(t));console.debug("chromecast.initialize (applicationId=".concat(n,")")),a.cast.initialize(i,t.onInitSuccess.bind(t),t.errorHandler)}else console.warn("Not initializing chromecast: CastReceiverId is ".concat(n))}))}else setTimeout(this.initializeCastPlayer.bind(this),1e3);else console.warn("Not initializing chromecast: chrome object is missing")}},{key:"onInitSuccess",value:function(){this.isInitialized=!0,console.debug("[chromecastPlayer] init success")}},{key:"onError",value:function(){console.debug("[chromecastPlayer] error")}},{key:"sessionListener",value:function(e){this.session=e,this.session&&(this.session.media[0]&&this.onMediaDiscovered("activeSession",this.session.media[0]),this.onSessionConnected(e))}},{key:"messageListener",value:function(e,t){if("string"==typeof t&&(t=JSON.parse(t)),"playbackerror"===t.type){var a=t.data;setTimeout((function(){C(r.ZP.translate("MessagePlaybackError"+a),r.ZP.translate("HeaderPlaybackError"))}),300)}else"connectionerror"===t.type?setTimeout((function(){C(r.ZP.translate("MessageChromecastConnectionError"),r.ZP.translate("HeaderError"))}),300):t.type&&d.Z.trigger(this,t.type,[t.data])}},{key:"receiverListener",value:function(e){"available"===e?(console.debug("[chromecastPlayer] receiver found"),this.hasReceivers=!0):(console.debug("[chromecastPlayer] receiver list empty"),this.hasReceivers=!1)}},{key:"sessionUpdateListener",value:function(e){e?console.debug("[chromecastPlayer] sessionUpdateListener: already alive"):(this.session=null,this.deviceState=0,this.castPlayerState=k,document.removeEventListener("volumeupbutton",w,!1),document.removeEventListener("volumedownbutton",T,!1),console.debug("[chromecastPlayer] sessionUpdateListener: setting currentMediaSession to null"),this.currentMediaSession=null,I(!1))}},{key:"launchApp",value:function(){console.debug("[chromecastPlayer] launching app..."),chrome.cast.requestSession(this.onRequestSessionSuccess.bind(this),this.onLaunchError.bind(this))}},{key:"onRequestSessionSuccess",value:function(e){console.debug("[chromecastPlayer] session success: "+e.sessionId),this.onSessionConnected(e)}},{key:"onSessionConnected",value:function(e){this.session=e,this.deviceState=1,this.session.addMessageListener(b,this.messageListener.bind(this)),this.session.addMediaListener(this.sessionMediaListener.bind(this)),this.session.addUpdateListener(this.sessionUpdateListener.bind(this)),document.addEventListener("volumeupbutton",w,!1),document.addEventListener("volumedownbutton",T,!1),d.Z.trigger(this,"connect"),this.sendMessage({options:{},command:"Identify"})}},{key:"sessionMediaListener",value:function(e){this.currentMediaSession=e,this.currentMediaSession.addUpdateListener(this.mediaStatusUpdateHandler)}},{key:"onLaunchError",value:function(){console.debug("[chromecastPlayer] launch error"),this.deviceState=3,I(!1)}},{key:"stopApp",value:function(){this.session&&this.session.stop(this.onStopAppSuccess.bind(this,"Session stopped"),this.errorHandler)}},{key:"onStopAppSuccess",value:function(e){console.debug(e),this.deviceState=0,this.castPlayerState=k,document.removeEventListener("volumeupbutton",w,!1),document.removeEventListener("volumedownbutton",T,!1),this.currentMediaSession=null}},{key:"loadMedia",value:function(e,t){return this.session?(e.items=e.items.map((function(e){return{Id:e.Id,ServerId:e.ServerId,Name:e.Name,Type:e.Type,MediaType:e.MediaType,IsFolder:e.IsFolder}})),this.sendMessage({options:e,command:t})):(console.debug("[chromecastPlayer] no session"),Promise.reject(new Error("no session")))}},{key:"sendMessage",value:function(e){var t,a,i,r,o,u=null,c=this.session;null!=c&&null!==(t=c.receiver)&&void 0!==t&&t.friendlyName&&(u=c.receiver.friendlyName);var d=(o=null!==(a=e.options)&&void 0!==a&&a.ServerId?l.Z.getApiClient(e.options.ServerId):null!==(i=e.options)&&void 0!==i&&null!==(i=i.items)&&void 0!==i&&i.length?l.Z.getApiClient(e.options.items[0].ServerId):l.Z.currentApiClient()).serverAddress(),y=new URL(d).hostname,m="localhost"===y||y.startsWith("127.")||"[::1]"===y?o.serverInfo().LocalAddress:d;e=Object.assign(e,{userId:o.getCurrentUserId(),deviceId:o.deviceId(),accessToken:o.accessToken(),serverAddress:m,serverId:o.serverId(),serverVersion:o.serverVersion(),receiverName:u}),console.debug("[chromecastPlayer] message{"+e.command+"; "+d+" -> "+m+"}");var v=n.Z.maxChromecastBitrate();return v&&(e.maxBitrate=v),null!==(r=e.options)&&void 0!==r&&r.items&&(e.subtitleAppearance=s.getSubtitleAppearanceSettings(),e.subtitleBurnIn=n.Z.get("subtitleburnin")||""),this.sendMessageInternal(e)}},{key:"sendMessageInternal",value:function(e){return e=JSON.stringify(e),this.session.sendMessage(b,e,this.onPlayCommandSuccess.bind(this),this.errorHandler),Promise.resolve()}},{key:"onPlayCommandSuccess",value:function(){console.debug("Message was sent to receiver ok.")}},{key:"onMediaDiscovered",value:function(e,t){console.debug("[chromecastPlayer] new media session ID:"+t.mediaSessionId+" ("+e+")"),this.currentMediaSession=t,"loadMedia"===e&&(this.castPlayerState="PLAYING"),"activeSession"===e&&(this.castPlayerState=t.playerState),this.currentMediaSession.addUpdateListener(this.mediaStatusUpdateHandler)}},{key:"onMediaStatusUpdate",value:function(e){console.debug("[chromecastPlayer] updating media: "+e),!1===e&&(this.castPlayerState=k)}},{key:"setReceiverVolume",value:function(e,t){this.currentMediaSession?e?this.session.setReceiverMuted(!0,this.mediaCommandSuccessCallback.bind(this),this.errorHandler):this.session.setReceiverVolumeLevel(t||1,this.mediaCommandSuccessCallback.bind(this),this.errorHandler):console.debug("this.currentMediaSession is null")}},{key:"mute",value:function(){this.setReceiverVolume(!0)}},{key:"mediaCommandSuccessCallback",value:function(e){console.debug(e)}}]),e}();function C(e,t){(0,u.Z)({text:e,title:t})}function w(){i.O.volumeUp()}function T(){i.O.volumeDown()}function L(e,t){d.Z.on(e._castPlayer,t,(function(a,n){if(console.debug("[chromecastPlayer] "+t),null!=n&&n.ItemId){var s=e.getPlayerStateInternal(n);d.Z.trigger(e,t,[s])}}))}function x(){var e=this;e._castPlayer=new M,document.dispatchEvent(new CustomEvent("chromecastloaded",{detail:{player:e}})),d.Z.on(e._castPlayer,"connect",(function(){P?I(!0):i.O.setActivePlayer(g,e.getCurrentTargetInfo()),console.debug("[chromecastPlayer] connect"),e.lastPlayerData=null})),d.Z.on(e._castPlayer,"playbackstart",(function(t,a){console.debug("[chromecastPlayer] playbackstart"),e._castPlayer.initializeCastPlayer();var n=e.getPlayerStateInternal(a);d.Z.trigger(e,"playbackstart",[n]),e._playNextAfterEnded=!0})),d.Z.on(e._castPlayer,"playbackstop",(function(t,a){console.debug("[chromecastPlayer] playbackstop");var n=e.getPlayerStateInternal(a);e._playNextAfterEnded||(n.nextItem=null,n.NextMediaType=null),d.Z.trigger(e,"playbackstop",[n]);var s=(n=e.lastPlayerData.PlayState||{}).VolumeLevel||.5,i=n.IsMuted||!1;e.lastPlayerData={PlayState:{VolumeLevel:s,IsMuted:i}}})),d.Z.on(e._castPlayer,"playbackprogress",(function(t,a){console.debug("[chromecastPlayer] positionchange");var n=e.getPlayerStateInternal(a);d.Z.trigger(e,"timeupdate",[n])})),L(e,"timeupdate"),L(e,"pause"),L(e,"unpause"),L(e,"volumechange"),L(e,"repeatmodechange"),L(e,"shufflequeuemodechange"),d.Z.on(e._castPlayer,"playstatechange",(function(t,a){console.debug("[chromecastPlayer] playstatechange");var n=e.getPlayerStateInternal(a);d.Z.trigger(e,"pause",[n])}))}var A=function(){function e(){var t=this;v(this,e),this.name=g,this.type=c.z.MediaPlayer,this.id="chromecast",this.isLocalPlayer=!1,this.lastPlayerData={},(new o.default).load().then((function(){d.Z.on(l.Z,"localusersignedin",(function(){x.call(t)})),l.Z.currentUserId&&x.call(t)}))}return f(e,[{key:"tryPair",value:function(){var e=this._castPlayer;return 1!==e.deviceState&&e.isInitialized?new Promise((function(t,a){P=t,S=a,e.launchApp()})):(P=null,S=null,Promise.reject(new Error("tryPair failed")))}},{key:"getTargets",value:function(){var e,t=[];return null!==(e=this._castPlayer)&&void 0!==e&&e.hasReceivers&&t.push(this.getCurrentTargetInfo()),Promise.resolve(t)}},{key:"getCurrentTargetInfo",value:function(){var e,t=null,a=this._castPlayer;return null!==(e=a.session)&&void 0!==e&&null!==(e=e.receiver)&&void 0!==e&&e.friendlyName&&(t=a.session.receiver.friendlyName),{name:g,id:g,playerName:g,playableMediaTypes:["Audio","Video"],isLocalPlayer:!1,appName:g,deviceName:t,deviceType:"cast",supportedCommands:["VolumeUp","VolumeDown","Mute","Unmute","ToggleMute","SetVolume","SetAudioStreamIndex","SetSubtitleStreamIndex","DisplayContent","SetRepeatMode","SetShuffleQueue","EndSession","PlayMediaSource","PlayTrailers"]}}},{key:"getPlayerStateInternal",value:function(e){var t=!1;return e&&!this.lastPlayerData&&(t=!0),e=e||this.lastPlayerData,this.lastPlayerData=e,function(e){if(null!=e&&e.NowPlayingItem){var t,a=e.NowPlayingItem;null!==(t=a.ImageTags)&&void 0!==t&&t.Primary||!a.PrimaryImageTag||(a.ImageTags=a.ImageTags||{},a.ImageTags.Primary=a.PrimaryImageTag),a.BackdropImageTag&&a.BackdropItemId===a.Id&&(a.BackdropImageTags=[a.BackdropImageTag]),a.BackdropImageTag&&a.BackdropItemId!==a.Id&&(a.ParentBackdropImageTags=[a.BackdropImageTag],a.ParentBackdropItemId=a.BackdropItemId)}}(e),t&&d.Z.trigger(this,"statechange",[e]),e}},{key:"playWithCommand",value:function(e,t){if(!e.items){var a=l.Z.getApiClient(e.serverId),n=this;return a.getItem(a.getCurrentUserId(),e.ids[0]).then((function(a){return e.items=[a],n.playWithCommand(e,t)}))}return e.items.length>1&&e&&e.ids&&e.items.sort((function(t,a){return e.ids.indexOf(t.Id)-e.ids.indexOf(a.Id)})),this._castPlayer.loadMedia(e,t)}},{key:"seek",value:function(e){e=parseInt(e,10),e/=1e7,this._castPlayer.sendMessage({options:{position:e},command:"Seek"})}},{key:"setAudioStreamIndex",value:function(e){this._castPlayer.sendMessage({options:{index:e},command:"SetAudioStreamIndex"})}},{key:"setSubtitleStreamIndex",value:function(e){this._castPlayer.sendMessage({options:{index:e},command:"SetSubtitleStreamIndex"})}},{key:"setMaxStreamingBitrate",value:function(e){this._castPlayer.sendMessage({options:e,command:"SetMaxStreamingBitrate"})}},{key:"isFullscreen",value:function(){var e=this.lastPlayerData||{};return(e=e.PlayState||{}).IsFullscreen}},{key:"nextTrack",value:function(){this._castPlayer.sendMessage({options:{},command:"NextTrack"})}},{key:"previousTrack",value:function(){this._castPlayer.sendMessage({options:{},command:"PreviousTrack"})}},{key:"volumeDown",value:function(){var e=this._castPlayer.session.receiver.volume.level;null==e&&(e=.5),e-=.05,e=Math.max(e,0),this._castPlayer.session.setReceiverVolumeLevel(e)}},{key:"endSession",value:function(){var e=this;this.stop().then((function(){setTimeout((function(){e._castPlayer.stopApp()}),1e3)}))}},{key:"volumeUp",value:function(){var e=this._castPlayer.session.receiver.volume.level;null==e&&(e=.5),e+=.05,e=Math.min(e,1),this._castPlayer.session.setReceiverVolumeLevel(e)}},{key:"setVolume",value:function(e){e=Math.min(e,100),e=Math.max(e,0),e/=100,this._castPlayer.session.setReceiverVolumeLevel(e)}},{key:"unpause",value:function(){this._castPlayer.sendMessage({options:{},command:"Unpause"})}},{key:"playPause",value:function(){this._castPlayer.sendMessage({options:{},command:"PlayPause"})}},{key:"pause",value:function(){this._castPlayer.sendMessage({options:{},command:"Pause"})}},{key:"stop",value:function(){return this._playNextAfterEnded=!1,this._castPlayer.sendMessage({options:{},command:"Stop"})}},{key:"displayContent",value:function(e){this._castPlayer.sendMessage({options:e,command:"DisplayContent"})}},{key:"setMute",value:function(e){var t=this._castPlayer;e?t.sendMessage({options:{},command:"Mute"}):t.sendMessage({options:{},command:"Unmute"})}},{key:"getRepeatMode",value:function(){var e=this.lastPlayerData||{};return(e=e.PlayState||{}).RepeatMode}},{key:"getQueueShuffleMode",value:function(){var e=this.lastPlayerData||{};return(e=e.PlayState||{}).ShuffleMode}},{key:"playTrailers",value:function(e){this._castPlayer.sendMessage({options:{ItemId:e.Id,ServerId:e.ServerId},command:"PlayTrailers"})}},{key:"setRepeatMode",value:function(e){this._castPlayer.sendMessage({options:{RepeatMode:e},command:"SetRepeatMode"})}},{key:"setQueueShuffleMode",value:function(e){this._castPlayer.sendMessage({options:{ShuffleMode:e},command:"SetShuffleQueue"})}},{key:"toggleMute",value:function(){this._castPlayer.sendMessage({options:{},command:"ToggleMute"})}},{key:"audioTracks",value:function(){var e=this.lastPlayerData||{};return((e=e.NowPlayingItem||{}).MediaStreams||[]).filter((function(e){return"Audio"===e.Type}))}},{key:"getAudioStreamIndex",value:function(){var e=this.lastPlayerData||{};return(e=e.PlayState||{}).AudioStreamIndex}},{key:"subtitleTracks",value:function(){var e=this.lastPlayerData||{};return((e=e.NowPlayingItem||{}).MediaStreams||[]).filter((function(e){return"Subtitle"===e.Type}))}},{key:"getSubtitleStreamIndex",value:function(){var e=this.lastPlayerData||{};return(e=e.PlayState||{}).SubtitleStreamIndex}},{key:"getMaxStreamingBitrate",value:function(){var e=this.lastPlayerData||{};return(e=e.PlayState||{}).MaxStreamingBitrate}},{key:"getVolume",value:function(){var e=this.lastPlayerData||{};return null==(e=e.PlayState||{}).VolumeLevel?100:e.VolumeLevel}},{key:"isPlaying",value:function(e){var t=this.lastPlayerData||{};return null!=t.NowPlayingItem&&(t.NowPlayingItem.MediaType===e||!e)}},{key:"isPlayingVideo",value:function(){var e=this.lastPlayerData||{};return"Video"===(e=e.NowPlayingItem||{}).MediaType}},{key:"isPlayingAudio",value:function(){var e=this.lastPlayerData||{};return"Audio"===(e=e.NowPlayingItem||{}).MediaType}},{key:"currentTime",value:function(e){if(null!=e)return this.seek(1e4*e);var t=this.lastPlayerData||{};return(t=t.PlayState||{}).PositionTicks/1e4}},{key:"duration",value:function(){var e=this.lastPlayerData||{};return(e=e.NowPlayingItem||{}).RunTimeTicks}},{key:"getBufferedRanges",value:function(){var e=this.lastPlayerData||{};return(e=e.PlayState||{}).BufferedRanges||[]}},{key:"paused",value:function(){var e=this.lastPlayerData||{};return(e=e.PlayState||{}).IsPaused}},{key:"isMuted",value:function(){var e=this.lastPlayerData||{};return(e=e.PlayState||{}).IsMuted}},{key:"shuffle",value:function(e){var t=l.Z.getApiClient(e.ServerId),a=t.getCurrentUserId(),n=this;t.getItem(a,e.Id).then((function(e){n.playWithCommand({items:[e]},"Shuffle")}))}},{key:"instantMix",value:function(e){var t=l.Z.getApiClient(e.ServerId),a=t.getCurrentUserId(),n=this;t.getItem(a,e.Id).then((function(e){n.playWithCommand({items:[e]},"InstantMix")}))}},{key:"canPlayMediaType",value:function(e){return"audio"===(e=(e||"").toLowerCase())||"video"===e}},{key:"canQueueMediaType",value:function(e){return this.canPlayMediaType(e)}},{key:"queue",value:function(e){this.playWithCommand(e,"PlayLast")}},{key:"queueNext",value:function(e){this.playWithCommand(e,"PlayNext")}},{key:"play",value:function(e){if(e.items)return this.playWithCommand(e,"PlayNow");if(!e.serverId)throw new Error("serverId required!");var t,a,n,s=this;return(t=l.Z.getApiClient(e.serverId),a={Ids:e.ids.join(",")},n=t.getCurrentUserId(),a.Ids&&1===a.Ids.split(",").length?t.getItem(n,a.Ids.split(",")).then((function(e){return{Items:[e],TotalRecordCount:1}})):(a.Limit=a.Limit||100,a.ExcludeLocationTypes="Virtual",a.EnableTotalRecordCount=!1,(0,y.k)(t,n,a))).then((function(t){return e.items=t.Items,s.playWithCommand(e,"PlayNow")}))}},{key:"toggleFullscreen",value:function(){}},{key:"beginPlayerUpdates",value:function(){}},{key:"endPlayerUpdates",value:function(){}},{key:"getPlaylist",value:function(){return Promise.resolve([])}},{key:"getCurrentPlaylistItemId",value:function(){}},{key:"setCurrentPlaylistItem",value:function(){return Promise.resolve()}},{key:"removeFromPlaylist",value:function(){return Promise.resolve()}},{key:"getPlayerState",value:function(){return this.getPlayerStateInternal()||{}}},{key:"getCurrentPlaylistIndex",value:function(){var e;return null===(e=this.getPlayerStateInternal())||void 0===e||null===(e=e.NowPlayingItem)||void 0===e?void 0:e.IndexNumber}},{key:"clearQueue",value:function(e){}}]),e}();t.default=A}}]);