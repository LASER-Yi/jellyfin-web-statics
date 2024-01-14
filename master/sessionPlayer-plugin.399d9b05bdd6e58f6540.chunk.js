"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[96813],{70497:function(e,t,a){a.r(t),a(96626),a(81414),a(47134),a(2663),a(37666),a(62659),a(26031),a(95822),a(56187),a(38690),a(11908),a(33096),a(89228),a(13227),a(14011),a(11431);var n=a(48957),r=a(44038),i=a(18613),u=a(90846),l=a(67561);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function s(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,y(n.key),n)}}function y(e){var t=function(e,t){if("object"!=o(e)||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,"string");if("object"!=o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==o(t)?t:String(t)}function c(){var e=n.O.getPlayerInfo();return e?e.id:null}function d(e,t,a){var n=c(),r={ItemIds:(t.ids||t.items.map((function(e){return e.Id}))).join(","),PlayCommand:a};return t.startPositionTicks&&(r.StartPositionTicks=t.startPositionTicks),t.mediaSourceId&&(r.MediaSourceId=t.mediaSourceId),null!=t.audioStreamIndex&&(r.AudioStreamIndex=t.audioStreamIndex),null!=t.subtitleStreamIndex&&(r.SubtitleStreamIndex=t.subtitleStreamIndex),null!=t.startIndex&&(r.StartIndex=t.startIndex),e.sendPlayCommand(n,r)}function m(e,t,a){var n=c();e.sendPlayStateCommand(n,t,a)}function v(e){var t=e.currentServerId;return t?i.Z.getApiClient(t):i.Z.currentApiClient()}function f(e,t,a){var n={Name:t};a&&(n.Arguments=a),e.sendCommand(n)}function p(e,t,a){var r=a.serverId();t.forEach((function(e){e.NowPlayingItem&&(e.NowPlayingItem.ServerId=r)}));var i,u=c(),o=t.filter((function(e){return e.Id===u}))[0];if(o){!function(e,t){if(null!=e&&e.NowPlayingItem){var a=e.NowPlayingItem;(!a.ImageTags||!a.ImageTags.Primary&&a.PrimaryImageTag)&&(a.ImageTags=a.ImageTags||{},a.ImageTags.Primary=a.PrimaryImageTag),a.BackdropImageTag&&a.BackdropItemId===a.Id&&(a.BackdropImageTags=[a.BackdropImageTag]),a.BackdropImageTag&&a.BackdropItemId!==a.Id&&(a.ParentBackdropImageTags=[a.BackdropImageTag],a.ParentBackdropItemId=a.BackdropItemId),a.ServerId||(a.ServerId=t.serverId())}}(o,a);var s=(e.lastPlayerData,(i=[]).push("statechange"),i.push("timeupdate"),i.push("pause"),i);e.lastPlayerData=o;for(var y=0,d=s.length;y<d;y++)l.Z.trigger(e,s[y],[o])}else e.lastPlayerData=o,n.O.setDefaultPlayerActive()}function I(){var e=this,t=v(e);t.isMessageChannelOpen()||t.getSessions().then((function(a){p(e,a,t)}))}function P(e){e.isUpdating=!0,v(e).sendMessage("SessionsStart","100,800"),e.pollInterval&&(clearInterval(e.pollInterval),e.pollInterval=null),e.pollInterval=setInterval(I.bind(e),5e3)}var g=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var t=this;this.name="Remote Control",this.type=u.z.MediaPlayer,this.isLocalPlayer=!1,this.id="remoteplayer",l.Z.on(r.default,"Sessions",(function(e,a,n){p(t,n,a)}))}var t,a;return t=e,(a=[{key:"beginPlayerUpdates",value:function(){this.playerListenerCount=this.playerListenerCount||0,this.playerListenerCount<=0&&(this.playerListenerCount=0,P(this)),this.playerListenerCount++}},{key:"endPlayerUpdates",value:function(){var e;this.playerListenerCount=this.playerListenerCount||0,this.playerListenerCount--,this.playerListenerCount<=0&&((e=this).isUpdating=!0,v(e).sendMessage("SessionsStop"),e.pollInterval&&(clearInterval(e.pollInterval),e.pollInterval=null),this.playerListenerCount=0)}},{key:"getPlayerState",value:function(){return this.lastPlayerData||{}}},{key:"getTargets",value:function(){var e=v(this),t={ControllableByUserId:e.getCurrentUserId()};if(e){var a=this.name;return e.getSessions(t).then((function(t){return t.filter((function(t){return t.DeviceId!==e.deviceId()})).map((function(e){return{name:e.DeviceName,deviceName:e.DeviceName,deviceType:e.DeviceType,id:e.Id,playerName:a,appName:e.Client,playableMediaTypes:e.PlayableMediaTypes,isLocalPlayer:!1,supportedCommands:e.Capabilities.SupportedCommands,user:e.UserId?{Id:e.UserId,Name:e.UserName,PrimaryImageTag:e.UserPrimaryImageTag}:null}}))}))}return Promise.resolve([])}},{key:"sendCommand",value:function(e){var t=c();v(this).sendCommand(t,e)}},{key:"play",value:function(e){return(e=Object.assign({},e)).items&&(e.ids=e.items.map((function(e){return e.Id})),e.items=null),d(v(this),e,"PlayNow")}},{key:"shuffle",value:function(e){d(v(this),{ids:[e.Id]},"PlayShuffle")}},{key:"instantMix",value:function(e){d(v(this),{ids:[e.Id]},"PlayInstantMix")}},{key:"queue",value:function(e){d(v(this),e,"PlayLast")}},{key:"queueNext",value:function(e){d(v(this),e,"PlayNext")}},{key:"canPlayMediaType",value:function(e){return"audio"===(e=(e||"").toLowerCase())||"video"===e}},{key:"canQueueMediaType",value:function(e){return this.canPlayMediaType(e)}},{key:"stop",value:function(){m(v(this),"stop")}},{key:"nextTrack",value:function(){m(v(this),"nextTrack")}},{key:"previousTrack",value:function(){m(v(this),"previousTrack")}},{key:"seek",value:function(e){m(v(this),"seek",{SeekPositionTicks:e})}},{key:"currentTime",value:function(e){if(null!=e)return this.seek(1e4*e);var t=this.lastPlayerData||{};return(t=t.PlayState||{}).PositionTicks/1e4}},{key:"duration",value:function(){var e=this.lastPlayerData||{};return(e=e.NowPlayingItem||{}).RunTimeTicks}},{key:"paused",value:function(){var e=this.lastPlayerData||{};return(e=e.PlayState||{}).IsPaused}},{key:"getVolume",value:function(){var e=this.lastPlayerData||{};return(e=e.PlayState||{}).VolumeLevel}},{key:"isMuted",value:function(){var e=this.lastPlayerData||{};return(e=e.PlayState||{}).IsMuted}},{key:"pause",value:function(){m(v(this),"Pause")}},{key:"unpause",value:function(){m(v(this),"Unpause")}},{key:"playPause",value:function(){m(v(this),"PlayPause")}},{key:"setMute",value:function(e){f(this,e?"Mute":"Unmute")}},{key:"toggleMute",value:function(){f(this,"ToggleMute")}},{key:"setVolume",value:function(e){f(this,"SetVolume",{Volume:e})}},{key:"volumeUp",value:function(){f(this,"VolumeUp")}},{key:"volumeDown",value:function(){f(this,"VolumeDown")}},{key:"toggleFullscreen",value:function(){f(this,"ToggleFullscreen")}},{key:"audioTracks",value:function(){var e=this.lastPlayerData||{};return((e=e.NowPlayingItem||{}).MediaStreams||[]).filter((function(e){return"Audio"===e.Type}))}},{key:"getAudioStreamIndex",value:function(){var e=this.lastPlayerData||{};return(e=e.PlayState||{}).AudioStreamIndex}},{key:"playTrailers",value:function(e){f(this,"PlayTrailers",{ItemId:e.Id})}},{key:"setAudioStreamIndex",value:function(e){f(this,"SetAudioStreamIndex",{Index:e})}},{key:"subtitleTracks",value:function(){var e=this.lastPlayerData||{};return((e=e.NowPlayingItem||{}).MediaStreams||[]).filter((function(e){return"Subtitle"===e.Type}))}},{key:"getSubtitleStreamIndex",value:function(){var e=this.lastPlayerData||{};return(e=e.PlayState||{}).SubtitleStreamIndex}},{key:"setSubtitleStreamIndex",value:function(e){f(this,"SetSubtitleStreamIndex",{Index:e})}},{key:"setRepeatMode",value:function(e){f(this,"SetRepeatMode",{RepeatMode:e})}},{key:"getRepeatMode",value:function(){}},{key:"setQueueShuffleMode",value:function(e){f(this,"SetShuffleQueue",{ShuffleMode:e})}},{key:"getQueueShuffleMode",value:function(){}},{key:"displayContent",value:function(e){f(this,"DisplayContent",e)}},{key:"isPlaying",value:function(e){var t=this.lastPlayerData||{};return null!=t.NowPlayingItem&&(t.NowPlayingItem.MediaType===e||!e)}},{key:"isPlayingVideo",value:function(){var e=this.lastPlayerData||{};return"Video"===(e=e.NowPlayingItem||{}).MediaType}},{key:"isPlayingAudio",value:function(){var e=this.lastPlayerData||{};return"Audio"===(e=e.NowPlayingItem||{}).MediaType}},{key:"getPlaylist",value:function(){return Promise.resolve([])}},{key:"getCurrentPlaylistItemId",value:function(){}},{key:"setCurrentPlaylistItem",value:function(){return Promise.resolve()}},{key:"removeFromPlaylist",value:function(){return Promise.resolve()}},{key:"tryPair",value:function(){return Promise.resolve()}}])&&s(t.prototype,a),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.default=g}}]);