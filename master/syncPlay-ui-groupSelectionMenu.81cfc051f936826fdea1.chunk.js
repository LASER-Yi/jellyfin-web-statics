"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3460,52011,96084],{1724:function(e,n,t){t.r(n),t(29305),t(32733),t(84701),t(81678),t(44962),t(86584),t(4754),t(94),t(36947),t(78557),t(83994),t(82367);var a=t(45568),o=t(56869),r=t(50764),l=t(79617),i=t(9482),c=t(39387),y=t(38829),s=t(86191),u=t(66176),p=t(62014);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function d(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,b(a.key),a)}}function b(e){var n=function(e,n){if("object"!=f(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var a=t.call(e,"string");if("object"!=f(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==f(n)?n:n+""}var v=new(function(){return e=function e(){var n,t=this;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.syncPlayEnabled=!1,this.SyncPlay=null===(n=y.X.firstOfType(u.Q.SyncPlay))||void 0===n?void 0:n.instance,this.SyncPlay&&p.A.on(this.SyncPlay.Manager,"enabled",(function(e,n){t.syncPlayEnabled=n})),p.A.on(y.X,"registered",(function(e,n){n.type===u.Q.SyncPlay&&(t.SyncPlay=n.instance,p.A.on(n.instance.Manager,"enabled",(function(e,n){t.syncPlayEnabled=n})))}))},(n=[{key:"showNewJoinGroupSelection",value:function(e,n,t){var a=n.localUser?n.localUser.Policy:{};t.getSyncPlayGroups().then((function(c){c.json().then((function(c){var y=c.map((function(e){return{name:e.GroupName,icon:"person",id:e.GroupId,selected:!1,secondaryText:e.Participants.join(", ")}}));if("CreateAndJoinGroups"===a.SyncPlayAccess&&y.push({name:i.Ay.translate("LabelSyncPlayNewGroup"),icon:"add",id:"new-group",selected:!0,secondaryText:i.Ay.translate("LabelSyncPlayNewGroupDescription")}),0===y.length&&"JoinGroups"===a.SyncPlayAccess)return(0,r.A)({text:i.Ay.translate("MessageSyncPlayCreateGroupDenied")}),void o.Ay.hide();var s={title:i.Ay.translate("HeaderSyncPlaySelectGroup"),items:y,positionTo:e,border:!0,dialogClass:"syncPlayGroupMenu"};l.default.show(s).then((function(e){"new-group"==e?t.createSyncPlayGroup({GroupName:i.Ay.translate("SyncPlayGroupDefaultTitle",n.localUser.Name)}):e&&t.joinSyncPlayGroup({GroupId:e})})).catch((function(e){e&&console.error("SyncPlay: unexpected error listing groups:",e)})),o.Ay.hide()}))})).catch((function(e){console.error(e),o.Ay.hide(),(0,r.A)({text:i.Ay.translate("MessageSyncPlayErrorAccessingGroups")})}))}},{key:"showLeaveGroupSelection",value:function(e,n,t){var r,c,y,s,u=this,p=null===(r=this.SyncPlay)||void 0===r?void 0:r.Manager.getGroupInfo(),f=[];null!==(c=this.SyncPlay)&&void 0!==c&&c.Manager.isPlaylistEmpty()||null!==(y=this.SyncPlay)&&void 0!==y&&y.Manager.isPlaybackActive()?null!==(s=this.SyncPlay)&&void 0!==s&&s.Manager.isPlaybackActive()&&f.push({name:i.Ay.translate("LabelSyncPlayHaltPlayback"),icon:"pause_circle_filled",id:"halt-playback",selected:!1,secondaryText:i.Ay.translate("LabelSyncPlayHaltPlaybackDescription")}):f.push({name:i.Ay.translate("LabelSyncPlayResumePlayback"),icon:"play_circle_filled",id:"resume-playback",selected:!1,secondaryText:i.Ay.translate("LabelSyncPlayResumePlaybackDescription")}),f.push({name:i.Ay.translate("Settings"),icon:"video_settings",id:"settings",selected:!1,secondaryText:i.Ay.translate("LabelSyncPlaySettingsDescription")}),f.push({name:i.Ay.translate("LabelSyncPlayLeaveGroup"),icon:"meeting_room",id:"leave-group",selected:!0,secondaryText:i.Ay.translate("LabelSyncPlayLeaveGroupDescription")});var d={title:p.GroupName,text:p.Participants.join(", "),dialogClass:"syncPlayGroupMenu",items:f,positionTo:e,border:!0};l.default.show(d).then((function(e){var n;if("resume-playback"==e)null===(n=u.SyncPlay)||void 0===n||n.Manager.resumeGroupPlayback(t);else if("halt-playback"==e){var o;null===(o=u.SyncPlay)||void 0===o||o.Manager.haltGroupPlayback(t)}else if("leave-group"==e)t.leaveSyncPlayGroup();else if("settings"==e){var r;new a.default(t,null===(r=u.SyncPlay)||void 0===r?void 0:r.Manager.getTimeSyncCore(),{groupInfo:p}).embed().catch((function(e){e&&console.error("Error creating SyncPlay settings editor",e)}))}})).catch((function(e){e&&console.error("SyncPlay: unexpected error showing group menu:",e)})),o.Ay.hide()}},{key:"show",value:function(e){var n=this;o.Ay.show(),c.default.check().then((function(){console.debug("Playback is allowed.")})).catch((function(e){console.error("Playback not allowed!",e),(0,r.A)({text:i.Ay.translate("MessageSyncPlayPlaybackPermissionRequired")})}));var t=s.A.currentApiClient();s.A.user(t).then((function(a){n.syncPlayEnabled?n.showLeaveGroupSelection(e,a,t):n.showNewJoinGroupSelection(e,a,t)})).catch((function(e){console.error(e),o.Ay.hide(),(0,r.A)({text:i.Ay.translate("MessageSyncPlayNoGroupsAvailable")})}))}}])&&d(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,n}());n.default=v},39387:function(e,n,t){t.r(n),t(29305),t(32733),t(84701),t(81678),t(44962),t(4754),t(94),t(36947),t(78557),t(90076),t(45309),t(83994),t(82367);var a=t(22622);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function r(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,l(a.key),a)}}function l(e){var n=function(e,n){if("object"!=o(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var a=t.call(e,"string");if("object"!=o(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==o(n)?n:n+""}var i=function(){return e=function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)},(n=[{key:"check",value:function(){if(a.g.supports("htmlaudioautoplay"))return Promise.resolve(!0);var e,n=((e=document.createElement("audio")).classList.add("testMediaPlayerAudio"),e.classList.add("hide"),document.body.appendChild(e),e.volume=1,e.src="assets/audio/silence.mp3",e);return n.play().finally((function(){!function(e){e.pause(),e.remove()}(n)}))}}])&&r(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,n}();n.default=new i}}]);