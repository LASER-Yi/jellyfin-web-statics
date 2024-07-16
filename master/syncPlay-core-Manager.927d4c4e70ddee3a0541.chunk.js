"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[60138,83354,49755],{73391:function(e,t,n){n.r(t),n(29305),n(32733),n(84701),n(81678),n(44962),n(86584),n(4754),n(94),n(36947),n(78557),n(83994),n(82367);var r=n(20919);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,o(r.key),r)}}function o(e){var t=function(e,t){if("object"!=i(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==i(t)?t:t+""}var s=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.manager=null},t=[{key:"init",value:function(e){this.manager=e}},{key:"playPause",value:function(){this.manager.isPlaying()?this.pause():this.unpause()}},{key:"unpause",value:function(){this.manager.getApiClient().requestSyncPlayUnpause()}},{key:"pause",value:function(){this.manager.getApiClient().requestSyncPlayPause(),this.manager.getPlayerWrapper().localPause()}},{key:"seek",value:function(e){this.manager.getApiClient().requestSyncPlaySeek({PositionTicks:e})}},{key:"play",value:function(e){var t=this.manager.getApiClient(),n=function(n){var r=n.map((function(e){return e.Id}));return t.requestSyncPlaySetNewQueue({PlayingQueue:r,PlayingItemPosition:e.startIndex?e.startIndex:0,StartPositionTicks:e.startPositionTicks?e.startPositionTicks:0})};return e.items?r.translateItemsForPlayback(t,e.items,e).then(n):r.getItemsForPlayback(t,{Ids:e.ids.join(",")}).then((function(i){return r.translateItemsForPlayback(t,i.Items,e).then(n)}))}},{key:"setCurrentPlaylistItem",value:function(e){this.manager.getApiClient().requestSyncPlaySetPlaylistItem({PlaylistItemId:e})}},{key:"clearPlaylist",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.manager.getApiClient().requestSyncPlayRemoveFromPlaylist({ClearPlaylist:!0,ClearPlayingItem:e})}},{key:"removeFromPlaylist",value:function(e){this.manager.getApiClient().requestSyncPlayRemoveFromPlaylist({PlaylistItemIds:e})}},{key:"movePlaylistItem",value:function(e,t){this.manager.getApiClient().requestSyncPlayMovePlaylistItem({PlaylistItemId:e,NewIndex:t})}},{key:"queue",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Queue",n=this.manager.getApiClient();e.items?r.translateItemsForPlayback(n,e.items,e).then((function(e){var r=e.map((function(e){return e.Id}));n.requestSyncPlayQueue({ItemIds:r,Mode:t})})):r.getItemsForPlayback(n,{Ids:e.ids.join(",")}).then((function(i){r.translateItemsForPlayback(n,i.Items,e).then((function(e){var r=e.map((function(e){return e.Id}));n.requestSyncPlayQueue({ItemIds:r,Mode:t})}))}))}},{key:"queueNext",value:function(e){this.queue(e,"QueueNext")}},{key:"nextItem",value:function(){this.manager.getApiClient().requestSyncPlayNextItem({PlaylistItemId:this.manager.getQueueCore().getCurrentPlaylistItemId()})}},{key:"previousItem",value:function(){this.manager.getApiClient().requestSyncPlayPreviousItem({PlaylistItemId:this.manager.getQueueCore().getCurrentPlaylistItemId()})}},{key:"setRepeatMode",value:function(e){this.manager.getApiClient().requestSyncPlaySetRepeatMode({Mode:e})}},{key:"setShuffleMode",value:function(e){this.manager.getApiClient().requestSyncPlaySetShuffleMode({Mode:e})}},{key:"toggleShuffleMode",value:function(){var e=this.manager.getQueueCore().getShuffleMode();e="Sorted"===e?"Shuffle":"Sorted",this.manager.getApiClient().requestSyncPlaySetShuffleMode({Mode:e})}}],t&&a(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();t.default=s},86004:function(e,t,n){n.r(t),n(29305),n(32733),n(84701),n(81678),n(24776),n(14382),n(44962),n(4754),n(94),n(9698),n(36947),n(78557),n(96054),n(83994),n(82367);var r=n(20919),i=n(55125),a=n(629),o=n(19907),s=n(73391),l=n(50764),u=n(9482),c=n(62014);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,p(r.key),r)}}function p(e){var t=function(e,t){if("object"!=y(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==y(t)?t:t+""}var m=function(){return e=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.playerFactory=t,this.apiClient=null,this.timeSyncCore=new i.default,this.playbackCore=new a.default,this.queueCore=new o.default,this.controller=new s.default,this.syncMethod="None",this.groupInfo=null,this.syncPlayEnabledAt=null,this.syncPlayReady=!1,this.queuedCommand=null,this.followingGroupPlayback=!0,this.lastPlaybackCommand=null,this.currentPlayer=null,this.playerWrapper=null},t=[{key:"init",value:function(e){var t=this;this.updateApiClient(e),this.playerWrapper=this.playerFactory.getDefaultWrapper(this),this.timeSyncCore.init(this),this.playbackCore.init(this),this.queueCore.init(this),this.controller.init(this),c.A.on(this.timeSyncCore,"time-sync-server-update",(function(e,n,r){t.syncEnabled&&t.getApiClient().sendSyncPlayPing({Ping:r})}))}},{key:"updateApiClient",value:function(e){if(!e)throw new Error("ApiClient is null!");this.apiClient=e}},{key:"getTimeSyncCore",value:function(){return this.timeSyncCore}},{key:"getPlaybackCore",value:function(){return this.playbackCore}},{key:"getQueueCore",value:function(){return this.queueCore}},{key:"getController",value:function(){return this.controller}},{key:"getPlayerWrapper",value:function(){return this.playerWrapper}},{key:"getApiClient",value:function(){return this.apiClient}},{key:"getLastPlaybackCommand",value:function(){return this.lastPlaybackCommand}},{key:"onPlayerChange",value:function(e){this.bindToPlayer(e)}},{key:"bindToPlayer",value:function(e){this.releaseCurrentPlayer(),e&&(this.playerWrapper.unbindFromPlayer(),this.currentPlayer=e,this.playerWrapper=this.playerFactory.getWrapper(e,this),this.isSyncPlayEnabled()&&this.playerWrapper.bindToPlayer(),c.A.trigger(this,"playerchange",[this.currentPlayer]))}},{key:"releaseCurrentPlayer",value:function(){this.currentPlayer=null,this.playerWrapper.unbindFromPlayer(),this.playerWrapper=this.playerFactory.getDefaultWrapper(this),this.isSyncPlayEnabled()&&this.playerWrapper.bindToPlayer(),c.A.trigger(this,"playerchange",[this.currentPlayer])}},{key:"processGroupUpdate",value:function(e,t){switch(e.Type){case"PlayQueue":this.queueCore.updatePlayQueue(t,e.Data);break;case"UserJoined":(0,l.A)(u.Ay.translate("MessageSyncPlayUserJoined",e.Data)),this.groupInfo.Participants?this.groupInfo.Participants.push(e.Data):this.groupInfo.Participants=[e.Data];break;case"UserLeft":(0,l.A)(u.Ay.translate("MessageSyncPlayUserLeft",e.Data)),this.groupInfo.Participants&&(this.groupInfo.Participants=this.groupInfo.Participants.filter((function(t){return t!==e.Data})));break;case"GroupJoined":e.Data.LastUpdatedAt=new Date(e.Data.LastUpdatedAt),this.enableSyncPlay(t,e.Data,!0);break;case"SyncPlayIsDisabled":(0,l.A)(u.Ay.translate("MessageSyncPlayIsDisabled"));break;case"NotInGroup":case"GroupLeft":this.disableSyncPlay(!0);break;case"GroupUpdate":e.Data.LastUpdatedAt=new Date(e.Data.LastUpdatedAt),this.groupInfo=e.Data;break;case"StateUpdate":c.A.trigger(this,"group-state-update",[e.Data.State,e.Data.Reason]),console.debug("SyncPlay processGroupUpdate: state changed to ".concat(e.Data.State," because ").concat(e.Data.Reason,"."));break;case"GroupDoesNotExist":(0,l.A)(u.Ay.translate("MessageSyncPlayGroupDoesNotExist"));break;case"CreateGroupDenied":(0,l.A)(u.Ay.translate("MessageSyncPlayCreateGroupDenied"));break;case"JoinGroupDenied":(0,l.A)(u.Ay.translate("MessageSyncPlayJoinGroupDenied"));break;case"LibraryAccessDenied":(0,l.A)(u.Ay.translate("MessageSyncPlayLibraryAccessDenied"));break;default:console.error("SyncPlay processGroupUpdate: command ".concat(e.Type," not recognised."))}}},{key:"processCommand",value:function(e){if(null!==e)if("string"==typeof e.When&&(e.When=new Date(e.When),e.EmittedAt=new Date(e.EmittedAt),e.PositionTicks=e.PositionTicks?parseInt(e.PositionTicks,10):null),this.isSyncPlayEnabled())if(e.EmittedAt.getTime()<this.syncPlayEnabledAt.getTime())console.debug("SyncPlay processCommand: ignoring old command.",e);else{if(!this.syncPlayReady)return console.debug("SyncPlay processCommand: SyncPlay not ready, queued command.",e),void(this.queuedCommand=e);if(this.lastPlaybackCommand=e,this.isPlaybackActive()){var t=this.queueCore.getCurrentPlaylistItemId();e.PlaylistItemId===t||"Stop"===e.Command?(console.log("SyncPlay will ".concat(e.Command," at ").concat(e.When," (in ").concat(e.When.getTime()-Date.now()," ms)").concat(e.PositionTicks?"":" from "+e.PositionTicks,".")),this.playbackCore.applyCommand(e)):console.error("SyncPlay processCommand: playlist item does not match!",e)}else console.debug("SyncPlay processCommand: no active player!")}else console.debug("SyncPlay processCommand: SyncPlay not enabled, ignoring command.",e)}},{key:"processStateChange",value:function(e){null!==e&&null!==e.State&&null!==e.Reason&&(this.isSyncPlayEnabled()?c.A.trigger(this,"group-state-change",[e.State,e.Reason]):console.debug("SyncPlay processStateChange: SyncPlay not enabled, ignoring group state update.",e))}},{key:"followGroupPlayback",value:function(e){return this.followingGroupPlayback=!0,e.requestSyncPlaySetIgnoreWait({IgnoreWait:!1})}},{key:"resumeGroupPlayback",value:function(e){var t=this;this.followGroupPlayback(e).then((function(){t.queueCore.startPlayback(e)}))}},{key:"haltGroupPlayback",value:function(e){this.followingGroupPlayback=!1,e.requestSyncPlaySetIgnoreWait({IgnoreWait:!0}),this.playbackCore.localStop()}},{key:"isFollowingGroupPlayback",value:function(){return this.followingGroupPlayback}},{key:"enableSyncPlay",value:function(e,t){var n=this,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this.isSyncPlayEnabled()){if(t.GroupId===this.groupInfo.GroupId)return void console.debug("SyncPlay enableSyncPlay: group ".concat(this.groupInfo.GroupId," already joined."));console.warn("SyncPlay enableSyncPlay: switching from group ".concat(this.groupInfo.GroupId," to group ").concat(t.GroupId,".")),this.disableSyncPlay(!1),i=!1}this.groupInfo=t,this.syncPlayEnabledAt=t.LastUpdatedAt,this.playerWrapper.bindToPlayer(),c.A.trigger(this,"enabled",[!0]),r.waitForEventOnce(this.timeSyncCore,"time-sync-server-update").then((function(){n.syncPlayReady=!0,n.processCommand(n.queuedCommand,e),n.queuedCommand=null})),this.syncPlayReady=!1,this.followingGroupPlayback=!0,this.timeSyncCore.forceUpdate(),i&&(0,l.A)(u.Ay.translate("MessageSyncPlayEnabled"))}},{key:"disableSyncPlay",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.syncPlayEnabledAt=null,this.syncPlayReady=!1,this.followingGroupPlayback=!0,this.lastPlaybackCommand=null,this.queuedCommand=null,this.playbackCore.syncEnabled=!1,c.A.trigger(this,"enabled",[!1]),this.playerWrapper.unbindFromPlayer(),e&&(0,l.A)(u.Ay.translate("MessageSyncPlayDisabled"))}},{key:"isSyncPlayEnabled",value:function(){return null!==this.syncPlayEnabledAt}},{key:"getGroupInfo",value:function(){return this.groupInfo}},{key:"getStats",value:function(){return{TimeSyncDevice:this.timeSyncCore.getActiveDeviceName(),TimeSyncOffset:this.timeSyncCore.getTimeOffset().toFixed(2),PlaybackDiff:this.playbackCore.playbackDiffMillis.toFixed(2),SyncMethod:this.syncMethod}}},{key:"isPlaybackActive",value:function(){return this.playerWrapper.isPlaybackActive()}},{key:"isRemote",value:function(){return this.playerWrapper.isRemote()}},{key:"isPlaylistEmpty",value:function(){return this.queueCore.isPlaylistEmpty()}},{key:"isPlaying",value:function(){return!!this.lastPlaybackCommand&&"Unpause"===this.lastPlaybackCommand.Command}},{key:"showSyncIcon",value:function(e){this.syncMethod=e,c.A.trigger(this,"syncing",[!0,this.syncMethod])}},{key:"clearSyncIcon",value:function(){this.syncMethod="None",c.A.trigger(this,"syncing",[!1,this.syncMethod])}}],t&&f(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();t.default=m},67122:function(e,t,n){n.r(t),n(29305),n(32733),n(84701),n(81678),n(44962),n(89336),n(26448),n(4754),n(94),n(36947),n(78557),n(90076),n(45309),n(83994),n(82367);var r=n(62014);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,l(r.key),r)}}function s(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function l(e){var t=function(e,t){if("object"!=i(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==i(t)?t:t+""}var u=function(){return s((function e(t,n,r,i){a(this,e),this.requestSent=t.getTime(),this.requestReceived=n.getTime(),this.responseSent=r.getTime(),this.responseReceived=i.getTime()}),[{key:"getOffset",value:function(){return(this.requestReceived-this.requestSent+(this.responseSent-this.responseReceived))/2}},{key:"getDelay",value:function(){return this.responseReceived-this.requestSent-(this.responseSent-this.requestReceived)}},{key:"getPing",value:function(){return this.getDelay()/2}}])}(),c=function(){return s((function e(t){a(this,e),this.manager=t,this.pingStop=!0,this.pollingInterval=1e3,this.poller=null,this.pings=0,this.measurement=null,this.measurements=[]}),[{key:"isReady",value:function(){return!!this.measurement}},{key:"getTimeOffset",value:function(){return this.measurement?this.measurement.getOffset():0}},{key:"getPing",value:function(){return this.measurement?this.measurement.getPing():0}},{key:"updateTimeOffset",value:function(e){this.measurements.push(e),this.measurements.length>8&&this.measurements.shift();var t=this.measurements.slice(0);t.sort((function(e,t){return e.getDelay()-t.getDelay()})),this.measurement=t[0]}},{key:"requestPing",value:function(){return console.warn("SyncPlay TimeSync requestPing: override this method!"),Promise.reject("Not implemented.")}},{key:"internalRequestPing",value:function(){var e=this;this.poller||this.pingStop||(this.poller=setTimeout((function(){e.poller=null,e.requestPing().then((function(t){return e.onPingResponseCallback(t)})).catch((function(t){return e.onPingRequestErrorCallback(t)})).finally((function(){return e.internalRequestPing()}))}),this.pollingInterval))}},{key:"onPingResponseCallback",value:function(e){var t=e.requestSent,n=e.requestReceived,i=e.responseSent,a=e.responseReceived,o=new u(t,n,i,a);this.updateTimeOffset(o),this.pings>=3?this.pollingInterval=6e4:this.pings++,r.A.trigger(this,"update",[null,this.getTimeOffset(),this.getPing()])}},{key:"onPingRequestErrorCallback",value:function(e){console.error(e),r.A.trigger(this,"update",[e,null,null])}},{key:"resetMeasurements",value:function(){this.measurement=null,this.measurements=[]}},{key:"startPing",value:function(){this.pingStop=!1,this.internalRequestPing()}},{key:"stopPing",value:function(){this.pingStop=!0,this.poller&&(clearTimeout(this.poller),this.poller=null)}},{key:"forceUpdate",value:function(){this.stopPing(),this.pollingInterval=1e3,this.pings=0,this.startPing()}},{key:"remoteDateToLocal",value:function(e){return new Date(e.getTime()-this.getTimeOffset())}},{key:"localDateToRemote",value:function(e){return new Date(e.getTime()+this.getTimeOffset())}}])}();t.default=c},55125:function(e,t,n){n.r(t),n(29305),n(32733),n(84701),n(81678),n(44962),n(4754),n(94),n(36947),n(78557),n(83994),n(82367);var r=n(90381),i=n(62014),a=n(67202),o=n(4438),s=n(95937);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,c(r.key),r)}}function c(e){var t=function(e,t){if("object"!=l(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==l(t)?t:t+""}function y(e,t){return new Date(e.getTime()+t)}var f=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.manager=null,this.timeSyncServer=null,this.timeSyncDeviceId=(0,o.getSetting)("timeSyncDevice")||"server",this.extraTimeOffset=(0,a.S)((0,o.getSetting)("extraTimeOffset"),0)},(t=[{key:"init",value:function(e){var t=this;this.manager=e,this.timeSyncServer=new s.default(e),i.A.on(this.timeSyncServer,"update",(function(e,n,r,a){n?console.debug("SyncPlay TimeSyncCore: time sync with server issue:",n):i.A.trigger(t,"time-sync-server-update",[r,a])})),i.A.on(r.A,"change",(function(e,n){"extraTimeOffset"===n&&(t.extraTimeOffset=(0,a.S)((0,o.getSetting)("extraTimeOffset"),0))}))}},{key:"forceUpdate",value:function(){this.timeSyncServer.forceUpdate()}},{key:"getActiveDeviceName",value:function(){return"Server"}},{key:"remoteDateToLocal",value:function(e){return y(this.timeSyncServer.remoteDateToLocal(e),-this.extraTimeOffset)}},{key:"localDateToRemote",value:function(e){return y(this.timeSyncServer.localDateToRemote(e),this.extraTimeOffset)}},{key:"getTimeOffset",value:function(){return this.timeSyncServer.getTimeOffset()+this.extraTimeOffset}}])&&u(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();t.default=f},95937:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,a(r.key),r)}}function a(e){var t=function(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,"string");if("object"!=r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==r(t)?t:t+""}function o(e,t,n){return t=l(t),function(e,t){if(t&&("object"==r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,s()?Reflect.construct(t,n||[],l(e).constructor):t.apply(e,n))}function s(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(s=function(){return!!e})()}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}function u(e,t){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},u(e,t)}n.r(t),n(29305),n(32733),n(84701),n(81678),n(44962),n(4754),n(94),n(36947),n(26437),n(52697),n(78557),n(90076),n(21359),n(83994),n(82367);var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o(this,t,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}(t,e),n=t,(r=[{key:"requestPing",value:function(){var e,t=this.manager.getApiClient(),n=new Date;return t.getServerTime().then((function(t){return e=new Date,t.json()})).then((function(t){var r=new Date(t.RequestReceptionTime),i=new Date(t.ResponseTransmissionTime);return Promise.resolve({requestSent:n,requestReceived:r,responseSent:i,responseReceived:e})}))}}])&&i(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r}(n(67122).default);t.default=c}}]);