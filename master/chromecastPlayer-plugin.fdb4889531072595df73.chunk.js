"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9601,87503],{59209:function(e,t,a){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function s(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==n(e)||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var s=a.call(e,"string");if("object"!==n(s))return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(s.key),"symbol"===n(i)?i:String(i)),s)}var i}a.r(t),a(63238),a(61418),a(19068),a(87211),a(25901),a(92189),a(95163),a(99785),a(91047),a(5769),a(17460),a(14078);var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,a;return t=e,(a=[{key:"load",value:function(){if("cordova"===window.appMode||"android"===window.appMode)return window.chrome=window.chrome||{},Promise.resolve();var e=!1;return e?Promise.resolve():new Promise((function(t){var a=document.createElement("script");a.setAttribute("type","text/javascript"),a.onload=function(){e=!0,t()},a.setAttribute("src","https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"),document.querySelector("head").appendChild(a)}))}}])&&s(t.prototype,a),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.default=i},37198:function(e,t,a){a.r(t),a(63238),a(61418),a(61013),a(5769),a(17460),a(14078),a(70684),a(68581),a(90938),a(48410),a(19068),a(87211),a(25901),a(92189),a(95163),a(69217),a(27471),a(32081),a(98010),a(99785),a(91047);var n,s,i=a(59858),r=a(60934),o=a(48957),l=a(94994),u=a(59209),c=a(18613),d=a(37099),y=a(90846),m=a(67561),v=a(84641);function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,s=function(e,t){if("object"!==h(e)||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,"string");if("object"!==h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===h(s)?s:String(s)),n)}var s}function g(e,t,a){return t&&p(e.prototype,t),a&&p(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}var P="Google Cast";function S(e){var t=n,a=s;n=null,s=null,e?t&&t():a?a():o.O.removeActivePlayer(P)}var k="IDLE",I="urn:x-cast:com.connectsdk",b=function(){function e(){f(this,e),this.deviceState=0,this.currentMediaSession=null,this.session=null,this.castPlayerState=k,this.hasReceivers=!1,this.errorHandler=this.onError.bind(this),this.mediaStatusUpdateHandler=this.onMediaStatusUpdate.bind(this),this.initializeCastPlayer()}return g(e,[{key:"initializeCastPlayer",value:function(){var e,t=this,a=window.chrome;if(a)if(null!==(e=a.cast)&&void 0!==e&&e.isAvailable){var n=c.Z.currentApiClient(),s=n.getCurrentUserId();n.getUser(s).then((function(e){var n=e.Configuration.CastReceiverId;if(n){var s=new a.cast.SessionRequest(n),i=new a.cast.ApiConfig(s,t.sessionListener.bind(t),t.receiverListener.bind(t));console.debug("chromecast.initialize (applicationId=".concat(n,")")),a.cast.initialize(i,t.onInitSuccess.bind(t),t.errorHandler)}else console.warn("Not initializing chromecast: CastReceiverId is ".concat(n))}))}else setTimeout(this.initializeCastPlayer.bind(this),1e3);else console.warn("Not initializing chromecast: chrome object is missing")}},{key:"onInitSuccess",value:function(){this.isInitialized=!0,console.debug("chromecast init success")}},{key:"onError",value:function(){console.debug("chromecast error")}},{key:"sessionListener",value:function(e){this.session=e,this.session&&(this.session.media[0]&&this.onMediaDiscovered("activeSession",this.session.media[0]),this.onSessionConnected(e))}},{key:"messageListener",value:function(e,t){if("string"==typeof t&&(t=JSON.parse(t)),"playbackerror"===t.type){var a=t.data;setTimeout((function(){M(l.ZP.translate("MessagePlaybackError"+a),l.ZP.translate("HeaderPlaybackError"))}),300)}else"connectionerror"===t.type?setTimeout((function(){M(l.ZP.translate("MessageChromecastConnectionError"),l.ZP.translate("HeaderError"))}),300):t.type&&m.Z.trigger(this,t.type,[t.data])}},{key:"receiverListener",value:function(e){"available"===e?(console.debug("chromecast receiver found"),this.hasReceivers=!0):(console.debug("chromecast receiver list empty"),this.hasReceivers=!1)}},{key:"sessionUpdateListener",value:function(e){e?console.debug("sessionUpdateListener: already alive"):(this.session=null,this.deviceState=0,this.castPlayerState=k,document.removeEventListener("volumeupbutton",C,!1),document.removeEventListener("volumedownbutton",w,!1),console.debug("sessionUpdateListener: setting currentMediaSession to null"),this.currentMediaSession=null,S(!1))}},{key:"launchApp",value:function(){console.debug("chromecast launching app..."),chrome.cast.requestSession(this.onRequestSessionSuccess.bind(this),this.onLaunchError.bind(this))}},{key:"onRequestSessionSuccess",value:function(e){console.debug("chromecast session success: "+e.sessionId),this.onSessionConnected(e)}},{key:"onSessionConnected",value:function(e){this.session=e,this.deviceState=1,this.session.addMessageListener(I,this.messageListener.bind(this)),this.session.addMediaListener(this.sessionMediaListener.bind(this)),this.session.addUpdateListener(this.sessionUpdateListener.bind(this)),document.addEventListener("volumeupbutton",C,!1),document.addEventListener("volumedownbutton",w,!1),m.Z.trigger(this,"connect"),this.sendMessage({options:{},command:"Identify"})}},{key:"sessionMediaListener",value:function(e){this.currentMediaSession=e,this.currentMediaSession.addUpdateListener(this.mediaStatusUpdateHandler)}},{key:"onLaunchError",value:function(){console.debug("chromecast launch error"),this.deviceState=3,S(!1)}},{key:"stopApp",value:function(){this.session&&this.session.stop(this.onStopAppSuccess.bind(this,"Session stopped"),this.errorHandler)}},{key:"onStopAppSuccess",value:function(e){console.debug(e),this.deviceState=0,this.castPlayerState=k,document.removeEventListener("volumeupbutton",C,!1),document.removeEventListener("volumedownbutton",w,!1),this.currentMediaSession=null}},{key:"loadMedia",value:function(e,t){return this.session?(e.items=e.items.map((function(e){return{Id:e.Id,ServerId:e.ServerId,Name:e.Name,Type:e.Type,MediaType:e.MediaType,IsFolder:e.IsFolder}})),this.sendMessage({options:e,command:t})):(console.debug("no session"),Promise.reject(new Error("no session")))}},{key:"sendMessage",value:function(e){var t,a,n,s,o,l,u=null,d=this.session;null!=d&&null!==(t=d.receiver)&&void 0!==t&&t.friendlyName&&(u=d.receiver.friendlyName);var y=(l=null!==(a=e.options)&&void 0!==a&&a.ServerId?c.Z.getApiClient(e.options.ServerId):null!==(n=e.options)&&void 0!==n&&null!==(s=n.items)&&void 0!==s&&s.length?c.Z.getApiClient(e.options.items[0].ServerId):c.Z.currentApiClient()).serverAddress(),m=new URL(y).hostname,v="localhost"===m||m.startsWith("127.")||"[::1]"===m?l.serverInfo().LocalAddress:y;e=Object.assign(e,{userId:l.getCurrentUserId(),deviceId:l.deviceId(),accessToken:l.accessToken(),serverAddress:v,serverId:l.serverId(),serverVersion:l.serverVersion(),receiverName:u}),console.debug("[chromecastPlayer] message{"+e.command+"; "+y+" -> "+v+"}");var h=i.Z.maxChromecastBitrate();return h&&(e.maxBitrate=h),null!==(o=e.options)&&void 0!==o&&o.items&&(e.subtitleAppearance=r.getSubtitleAppearanceSettings(),e.subtitleBurnIn=i.Z.get("subtitleburnin")||""),this.sendMessageInternal(e)}},{key:"sendMessageInternal",value:function(e){return e=JSON.stringify(e),this.session.sendMessage(I,e,this.onPlayCommandSuccess.bind(this),this.errorHandler),Promise.resolve()}},{key:"onPlayCommandSuccess",value:function(){console.debug("Message was sent to receiver ok.")}},{key:"onMediaDiscovered",value:function(e,t){console.debug("chromecast new media session ID:"+t.mediaSessionId+" ("+e+")"),this.currentMediaSession=t,"loadMedia"===e&&(this.castPlayerState="PLAYING"),"activeSession"===e&&(this.castPlayerState=t.playerState),this.currentMediaSession.addUpdateListener(this.mediaStatusUpdateHandler)}},{key:"onMediaStatusUpdate",value:function(e){console.debug("chromecast updating media: "+e),!1===e&&(this.castPlayerState=k)}},{key:"setReceiverVolume",value:function(e,t){this.currentMediaSession?e?this.session.setReceiverMuted(!0,this.mediaCommandSuccessCallback.bind(this),this.errorHandler):this.session.setReceiverVolumeLevel(t||1,this.mediaCommandSuccessCallback.bind(this),this.errorHandler):console.debug("this.currentMediaSession is null")}},{key:"mute",value:function(){this.setReceiverVolume(!0)}},{key:"mediaCommandSuccessCallback",value:function(e){console.debug(e)}}]),e}();function M(e,t){(0,d.Z)({text:e,title:t})}function C(){o.O.volumeUp()}function w(){o.O.volumeDown()}function T(e,t){m.Z.on(e._castPlayer,t,(function(a,n){console.debug("cc: "+t);var s=e.getPlayerStateInternal(n);m.Z.trigger(e,t,[s])}))}function L(){var e=this;e._castPlayer=new b,document.dispatchEvent(new CustomEvent("chromecastloaded",{detail:{player:e}})),m.Z.on(e._castPlayer,"connect",(function(){n?S(!0):o.O.setActivePlayer(P,e.getCurrentTargetInfo()),console.debug("cc: connect"),e.lastPlayerData=null})),m.Z.on(e._castPlayer,"playbackstart",(function(t,a){console.debug("cc: playbackstart"),e._castPlayer.initializeCastPlayer();var n=e.getPlayerStateInternal(a);m.Z.trigger(e,"playbackstart",[n])})),m.Z.on(e._castPlayer,"playbackstop",(function(t,a){console.debug("cc: playbackstop");var n=e.getPlayerStateInternal(a);m.Z.trigger(e,"playbackstop",[n]);var s=(n=e.lastPlayerData.PlayState||{}).VolumeLevel||.5,i=n.IsMuted||!1;e.lastPlayerData={},e.lastPlayerData.PlayState={},e.lastPlayerData.PlayState.VolumeLevel=s,e.lastPlayerData.PlayState.IsMuted=i})),m.Z.on(e._castPlayer,"playbackprogress",(function(t,a){console.debug("cc: positionchange");var n=e.getPlayerStateInternal(a);m.Z.trigger(e,"timeupdate",[n])})),T(e,"timeupdate"),T(e,"pause"),T(e,"unpause"),T(e,"volumechange"),T(e,"repeatmodechange"),T(e,"shufflequeuemodechange"),m.Z.on(e._castPlayer,"playstatechange",(function(t,a){console.debug("cc: playstatechange");var n=e.getPlayerStateInternal(a);m.Z.trigger(e,"pause",[n])}))}var D=function(){function e(){var t=this;f(this,e),this.name=P,this.type=y.z.MediaPlayer,this.id="chromecast",this.isLocalPlayer=!1,this.lastPlayerData={},(new u.default).load().then((function(){m.Z.on(c.Z,"localusersignedin",(function(){L.call(t)})),c.Z.currentUserId&&L.call(t)}))}return g(e,[{key:"tryPair",value:function(){var e=this._castPlayer;return 1!==e.deviceState&&e.isInitialized?new Promise((function(t,a){n=t,s=a,e.launchApp()})):(n=null,s=null,Promise.reject(new Error("tryPair failed")))}},{key:"getTargets",value:function(){var e,t=[];return null!==(e=this._castPlayer)&&void 0!==e&&e.hasReceivers&&t.push(this.getCurrentTargetInfo()),Promise.resolve(t)}},{key:"getCurrentTargetInfo",value:function(){var e,t,a=null,n=this._castPlayer;return null!==(e=n.session)&&void 0!==e&&null!==(t=e.receiver)&&void 0!==t&&t.friendlyName&&(a=n.session.receiver.friendlyName),{name:P,id:P,playerName:P,playableMediaTypes:["Audio","Video"],isLocalPlayer:!1,appName:P,deviceName:a,deviceType:"cast",supportedCommands:["VolumeUp","VolumeDown","Mute","Unmute","ToggleMute","SetVolume","SetAudioStreamIndex","SetSubtitleStreamIndex","DisplayContent","SetRepeatMode","SetShuffleQueue","EndSession","PlayMediaSource","PlayTrailers"]}}},{key:"getPlayerStateInternal",value:function(e){var t=!1;return e&&!this.lastPlayerData&&(t=!0),e=e||this.lastPlayerData,this.lastPlayerData=e,function(e){if(null!=e&&e.NowPlayingItem){var t,a=e.NowPlayingItem;null!==(t=a.ImageTags)&&void 0!==t&&t.Primary||!a.PrimaryImageTag||(a.ImageTags=a.ImageTags||{},a.ImageTags.Primary=a.PrimaryImageTag),a.BackdropImageTag&&a.BackdropItemId===a.Id&&(a.BackdropImageTags=[a.BackdropImageTag]),a.BackdropImageTag&&a.BackdropItemId!==a.Id&&(a.ParentBackdropImageTags=[a.BackdropImageTag],a.ParentBackdropItemId=a.BackdropItemId)}}(e),console.debug(JSON.stringify(e)),t&&m.Z.trigger(this,"statechange",[e]),e}},{key:"playWithCommand",value:function(e,t){if(!e.items){var a=c.Z.getApiClient(e.serverId),n=this;return a.getItem(a.getCurrentUserId(),e.ids[0]).then((function(a){return e.items=[a],n.playWithCommand(e,t)}))}return e.items.length>1&&e&&e.ids&&e.items.sort((function(t,a){return e.ids.indexOf(t.Id)-e.ids.indexOf(a.Id)})),this._castPlayer.loadMedia(e,t)}},{key:"seek",value:function(e){e=parseInt(e,10),e/=1e7,this._castPlayer.sendMessage({options:{position:e},command:"Seek"})}},{key:"setAudioStreamIndex",value:function(e){this._castPlayer.sendMessage({options:{index:e},command:"SetAudioStreamIndex"})}},{key:"setSubtitleStreamIndex",value:function(e){this._castPlayer.sendMessage({options:{index:e},command:"SetSubtitleStreamIndex"})}},{key:"setMaxStreamingBitrate",value:function(e){this._castPlayer.sendMessage({options:e,command:"SetMaxStreamingBitrate"})}},{key:"isFullscreen",value:function(){var e=this.lastPlayerData||{};return(e=e.PlayState||{}).IsFullscreen}},{key:"nextTrack",value:function(){this._castPlayer.sendMessage({options:{},command:"NextTrack"})}},{key:"previousTrack",value:function(){this._castPlayer.sendMessage({options:{},command:"PreviousTrack"})}},{key:"volumeDown",value:function(){var e=this._castPlayer.session.receiver.volume.level;null==e&&(e=.5),e-=.05,e=Math.max(e,0),this._castPlayer.session.setReceiverVolumeLevel(e)}},{key:"endSession",value:function(){var e=this;this.stop().then((function(){setTimeout((function(){e._castPlayer.stopApp()}),1e3)}))}},{key:"volumeUp",value:function(){var e=this._castPlayer.session.receiver.volume.level;null==e&&(e=.5),e+=.05,e=Math.min(e,1),this._castPlayer.session.setReceiverVolumeLevel(e)}},{key:"setVolume",value:function(e){e=Math.min(e,100),e=Math.max(e,0),e/=100,this._castPlayer.session.setReceiverVolumeLevel(e)}},{key:"unpause",value:function(){this._castPlayer.sendMessage({options:{},command:"Unpause"})}},{key:"playPause",value:function(){this._castPlayer.sendMessage({options:{},command:"PlayPause"})}},{key:"pause",value:function(){this._castPlayer.sendMessage({options:{},command:"Pause"})}},{key:"stop",value:function(){return this._castPlayer.sendMessage({options:{},command:"Stop"})}},{key:"displayContent",value:function(e){this._castPlayer.sendMessage({options:e,command:"DisplayContent"})}},{key:"setMute",value:function(e){var t=this._castPlayer;e?t.sendMessage({options:{},command:"Mute"}):t.sendMessage({options:{},command:"Unmute"})}},{key:"getRepeatMode",value:function(){var e=this.lastPlayerData||{};return(e=e.PlayState||{}).RepeatMode}},{key:"getQueueShuffleMode",value:function(){var e=this.lastPlayerData||{};return(e=e.PlayState||{}).ShuffleMode}},{key:"playTrailers",value:function(e){this._castPlayer.sendMessage({options:{ItemId:e.Id,ServerId:e.ServerId},command:"PlayTrailers"})}},{key:"setRepeatMode",value:function(e){this._castPlayer.sendMessage({options:{RepeatMode:e},command:"SetRepeatMode"})}},{key:"setQueueShuffleMode",value:function(e){this._castPlayer.sendMessage({options:{ShuffleMode:e},command:"SetShuffleQueue"})}},{key:"toggleMute",value:function(){this._castPlayer.sendMessage({options:{},command:"ToggleMute"})}},{key:"audioTracks",value:function(){var e=this.lastPlayerData||{};return((e=e.NowPlayingItem||{}).MediaStreams||[]).filter((function(e){return"Audio"===e.Type}))}},{key:"getAudioStreamIndex",value:function(){var e=this.lastPlayerData||{};return(e=e.PlayState||{}).AudioStreamIndex}},{key:"subtitleTracks",value:function(){var e=this.lastPlayerData||{};return((e=e.NowPlayingItem||{}).MediaStreams||[]).filter((function(e){return"Subtitle"===e.Type}))}},{key:"getSubtitleStreamIndex",value:function(){var e=this.lastPlayerData||{};return(e=e.PlayState||{}).SubtitleStreamIndex}},{key:"getMaxStreamingBitrate",value:function(){var e=this.lastPlayerData||{};return(e=e.PlayState||{}).MaxStreamingBitrate}},{key:"getVolume",value:function(){var e=this.lastPlayerData||{};return null==(e=e.PlayState||{}).VolumeLevel?100:e.VolumeLevel}},{key:"isPlaying",value:function(e){var t=this.lastPlayerData||{};return null!=t.NowPlayingItem&&(t.NowPlayingItem.MediaType===e||!e)}},{key:"isPlayingVideo",value:function(){var e=this.lastPlayerData||{};return"Video"===(e=e.NowPlayingItem||{}).MediaType}},{key:"isPlayingAudio",value:function(){var e=this.lastPlayerData||{};return"Audio"===(e=e.NowPlayingItem||{}).MediaType}},{key:"currentTime",value:function(e){if(null!=e)return this.seek(1e4*e);var t=this.lastPlayerData||{};return(t=t.PlayState||{}).PositionTicks/1e4}},{key:"duration",value:function(){var e=this.lastPlayerData||{};return(e=e.NowPlayingItem||{}).RunTimeTicks}},{key:"getBufferedRanges",value:function(){var e=this.lastPlayerData||{};return(e=e.PlayState||{}).BufferedRanges||[]}},{key:"paused",value:function(){var e=this.lastPlayerData||{};return(e=e.PlayState||{}).IsPaused}},{key:"isMuted",value:function(){var e=this.lastPlayerData||{};return(e=e.PlayState||{}).IsMuted}},{key:"shuffle",value:function(e){var t=c.Z.getApiClient(e.ServerId),a=t.getCurrentUserId(),n=this;t.getItem(a,e.Id).then((function(e){n.playWithCommand({items:[e]},"Shuffle")}))}},{key:"instantMix",value:function(e){var t=c.Z.getApiClient(e.ServerId),a=t.getCurrentUserId(),n=this;t.getItem(a,e.Id).then((function(e){n.playWithCommand({items:[e]},"InstantMix")}))}},{key:"canPlayMediaType",value:function(e){return"audio"===(e=(e||"").toLowerCase())||"video"===e}},{key:"canQueueMediaType",value:function(e){return this.canPlayMediaType(e)}},{key:"queue",value:function(e){this.playWithCommand(e,"PlayLast")}},{key:"queueNext",value:function(e){this.playWithCommand(e,"PlayNext")}},{key:"play",value:function(e){if(e.items)return this.playWithCommand(e,"PlayNow");if(!e.serverId)throw new Error("serverId required!");var t,a,n,s=this;return(t=c.Z.getApiClient(e.serverId),a={Ids:e.ids.join(",")},n=t.getCurrentUserId(),a.Ids&&1===a.Ids.split(",").length?t.getItem(n,a.Ids.split(",")).then((function(e){return{Items:[e],TotalRecordCount:1}})):(a.Limit=a.Limit||100,a.ExcludeLocationTypes="Virtual",a.EnableTotalRecordCount=!1,(0,v.k)(t,n,a))).then((function(t){return e.items=t.Items,s.playWithCommand(e,"PlayNow")}))}},{key:"toggleFullscreen",value:function(){}},{key:"beginPlayerUpdates",value:function(){}},{key:"endPlayerUpdates",value:function(){}},{key:"getPlaylist",value:function(){return Promise.resolve([])}},{key:"getCurrentPlaylistItemId",value:function(){}},{key:"setCurrentPlaylistItem",value:function(){return Promise.resolve()}},{key:"removeFromPlaylist",value:function(){return Promise.resolve()}},{key:"getPlayerState",value:function(){return this.getPlayerStateInternal()||{}}}]),e}();t.default=D}}]);