"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6813],{70497:function(e,t,a){a.r(t),a(61013),a(63238),a(55849),a(98010),a(61418),a(48410),a(99785);var n=a(48957),i=a(44038),r=a(18613),u=a(81643);function l(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(){var e=n.O.getPlayerInfo();return e?e.id:null}function o(e,t,a){var n=s(),i={ItemIds:(t.ids||t.items.map((function(e){return e.Id}))).join(","),PlayCommand:a};return t.startPositionTicks&&(i.StartPositionTicks=t.startPositionTicks),t.mediaSourceId&&(i.MediaSourceId=t.mediaSourceId),null!=t.audioStreamIndex&&(i.AudioStreamIndex=t.audioStreamIndex),null!=t.subtitleStreamIndex&&(i.SubtitleStreamIndex=t.subtitleStreamIndex),null!=t.startIndex&&(i.StartIndex=t.startIndex),e.sendPlayCommand(n,i)}function y(e,t,a){var n=s();e.sendPlayStateCommand(n,t,a)}function d(e){var t=e.currentServerId;return t?r.Z.getApiClient(t):r.Z.currentApiClient()}function c(e,t,a){var n={Name:t};a&&(n.Arguments=a),e.sendCommand(n)}function v(e,t,a){var i=a.serverId();t.forEach((function(e){e.NowPlayingItem&&(e.NowPlayingItem.ServerId=i)}));var r,l=s(),o=t.filter((function(e){return e.Id===l}))[0];if(o){!function(e,t){if(e&&e.NowPlayingItem){var a=e.NowPlayingItem;(!a.ImageTags||!a.ImageTags.Primary&&a.PrimaryImageTag)&&(a.ImageTags=a.ImageTags||{},a.ImageTags.Primary=a.PrimaryImageTag),a.BackdropImageTag&&a.BackdropItemId===a.Id&&(a.BackdropImageTags=[a.BackdropImageTag]),a.BackdropImageTag&&a.BackdropItemId!==a.Id&&(a.ParentBackdropImageTags=[a.BackdropImageTag],a.ParentBackdropItemId=a.BackdropItemId),a.ServerId||(a.ServerId=t.serverId())}}(o,a);var y=(e.lastPlayerData,(r=[]).push("statechange"),r.push("timeupdate"),r.push("pause"),r);e.lastPlayerData=o;for(var d=0,c=y.length;d<c;d++)u.Z.trigger(e,y[d],[o])}else e.lastPlayerData=o,n.O.setDefaultPlayerActive()}function m(){var e=this,t=d(e);t.isMessageChannelOpen()||t.getSessions().then((function(a){v(e,a,t)}))}function f(e){e.isUpdating=!0,d(e).sendMessage("SessionsStart","100,800"),e.pollInterval&&(clearInterval(e.pollInterval),e.pollInterval=null),e.pollInterval=setInterval(m.bind(e),5e3)}var I=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var t=this;this.name="Remote Control",this.type="mediaplayer",this.isLocalPlayer=!1,this.id="remoteplayer",u.Z.on(i.default,"Sessions",(function(e,a,n){v(t,n,a)}))}var t,a;return t=e,(a=[{key:"beginPlayerUpdates",value:function(){this.playerListenerCount=this.playerListenerCount||0,this.playerListenerCount<=0&&(this.playerListenerCount=0,f(this)),this.playerListenerCount++}},{key:"endPlayerUpdates",value:function(){var e;this.playerListenerCount=this.playerListenerCount||0,this.playerListenerCount--,this.playerListenerCount<=0&&((e=this).isUpdating=!0,d(e).sendMessage("SessionsStop"),e.pollInterval&&(clearInterval(e.pollInterval),e.pollInterval=null),this.playerListenerCount=0)}},{key:"getPlayerState",value:function(){return this.lastPlayerData||{}}},{key:"getTargets",value:function(){var e=d(this),t={ControllableByUserId:e.getCurrentUserId()};if(e){var a=this.name;return e.getSessions(t).then((function(t){return t.filter((function(t){return t.DeviceId!==e.deviceId()})).map((function(e){return{name:e.DeviceName,deviceName:e.DeviceName,deviceType:e.DeviceType,id:e.Id,playerName:a,appName:e.Client,playableMediaTypes:e.PlayableMediaTypes,isLocalPlayer:!1,supportedCommands:e.Capabilities.SupportedCommands,user:e.UserId?{Id:e.UserId,Name:e.UserName,PrimaryImageTag:e.UserPrimaryImageTag}:null}}))}))}return Promise.resolve([])}},{key:"sendCommand",value:function(e){var t=s();d(this).sendCommand(t,e)}},{key:"play",value:function(e){return(e=Object.assign({},e)).items&&(e.ids=e.items.map((function(e){return e.Id})),e.items=null),o(d(this),e,"PlayNow")}},{key:"shuffle",value:function(e){o(d(this),{ids:[e.Id]},"PlayShuffle")}},{key:"instantMix",value:function(e){o(d(this),{ids:[e.Id]},"PlayInstantMix")}},{key:"queue",value:function(e){o(d(this),e,"PlayNext")}},{key:"queueNext",value:function(e){o(d(this),e,"PlayLast")}},{key:"canPlayMediaType",value:function(e){return"audio"===(e=(e||"").toLowerCase())||"video"===e}},{key:"canQueueMediaType",value:function(e){return this.canPlayMediaType(e)}},{key:"stop",value:function(){y(d(this),"stop")}},{key:"nextTrack",value:function(){y(d(this),"nextTrack")}},{key:"previousTrack",value:function(){y(d(this),"previousTrack")}},{key:"seek",value:function(e){y(d(this),"seek",{SeekPositionTicks:e})}},{key:"currentTime",value:function(e){if(null!=e)return this.seek(1e4*e);var t=this.lastPlayerData||{};return(t=t.PlayState||{}).PositionTicks/1e4}},{key:"duration",value:function(){var e=this.lastPlayerData||{};return(e=e.NowPlayingItem||{}).RunTimeTicks}},{key:"paused",value:function(){var e=this.lastPlayerData||{};return(e=e.PlayState||{}).IsPaused}},{key:"getVolume",value:function(){var e=this.lastPlayerData||{};return(e=e.PlayState||{}).VolumeLevel}},{key:"isMuted",value:function(){var e=this.lastPlayerData||{};return(e=e.PlayState||{}).IsMuted}},{key:"pause",value:function(){y(d(this),"Pause")}},{key:"unpause",value:function(){y(d(this),"Unpause")}},{key:"playPause",value:function(){y(d(this),"PlayPause")}},{key:"setMute",value:function(e){c(this,e?"Mute":"Unmute")}},{key:"toggleMute",value:function(){c(this,"ToggleMute")}},{key:"setVolume",value:function(e){c(this,"SetVolume",{Volume:e})}},{key:"volumeUp",value:function(){c(this,"VolumeUp")}},{key:"volumeDown",value:function(){c(this,"VolumeDown")}},{key:"toggleFullscreen",value:function(){c(this,"ToggleFullscreen")}},{key:"audioTracks",value:function(){var e=this.lastPlayerData||{};return((e=e.NowPlayingItem||{}).MediaStreams||[]).filter((function(e){return"Audio"===e.Type}))}},{key:"getAudioStreamIndex",value:function(){var e=this.lastPlayerData||{};return(e=e.PlayState||{}).AudioStreamIndex}},{key:"playTrailers",value:function(e){c(this,"PlayTrailers",{ItemId:e.Id})}},{key:"setAudioStreamIndex",value:function(e){c(this,"SetAudioStreamIndex",{Index:e})}},{key:"subtitleTracks",value:function(){var e=this.lastPlayerData||{};return((e=e.NowPlayingItem||{}).MediaStreams||[]).filter((function(e){return"Subtitle"===e.Type}))}},{key:"getSubtitleStreamIndex",value:function(){var e=this.lastPlayerData||{};return(e=e.PlayState||{}).SubtitleStreamIndex}},{key:"setSubtitleStreamIndex",value:function(e){c(this,"SetSubtitleStreamIndex",{Index:e})}},{key:"setRepeatMode",value:function(e){c(this,"SetRepeatMode",{RepeatMode:e})}},{key:"getRepeatMode",value:function(){}},{key:"setQueueShuffleMode",value:function(e){c(this,"SetShuffleQueue",{ShuffleMode:e})}},{key:"getQueueShuffleMode",value:function(){}},{key:"displayContent",value:function(e){c(this,"DisplayContent",e)}},{key:"isPlaying",value:function(e){var t=this.lastPlayerData||{};return null!=t.NowPlayingItem&&(t.NowPlayingItem.MediaType===e||!e)}},{key:"isPlayingVideo",value:function(){var e=this.lastPlayerData||{};return"Video"===(e=e.NowPlayingItem||{}).MediaType}},{key:"isPlayingAudio",value:function(){var e=this.lastPlayerData||{};return"Audio"===(e=e.NowPlayingItem||{}).MediaType}},{key:"getPlaylist",value:function(){return Promise.resolve([])}},{key:"getCurrentPlaylistItemId",value:function(){}},{key:"setCurrentPlaylistItem",value:function(){return Promise.resolve()}},{key:"removeFromPlaylist",value:function(){return Promise.resolve()}},{key:"tryPair",value:function(){return Promise.resolve()}}])&&l(t.prototype,a),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.default=I}}]);