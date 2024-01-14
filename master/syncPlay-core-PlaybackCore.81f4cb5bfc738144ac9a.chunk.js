/*! For license information please see syncPlay-core-PlaybackCore.81f4cb5bfc738144ac9a.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[60619,9983,45385,15065,23852],{7125:function(e,t,n){n.r(t),n.d(t,{TicksPerMillisecond:function(){return s},WaitForEventDefaultTimeout:function(){return a},WaitForPlayerEventTimeout:function(){return o},getItemsForPlayback:function(){return l},stringToGuid:function(){return u},translateItemsForPlayback:function(){return h},waitForEventOnce:function(){return c}}),n(81414),n(37666),n(47134),n(59139),n(86028),n(62659),n(44901),n(19131),n(96626),n(2663);var r=n(67561),i=n(84641),a=3e4,o=500,s=1e4;function c(e,t,n,i){var a=arguments;return new Promise((function(o,s){var c;n&&(c=setTimeout((function(){s("Timed out.")}),n));var u=function(){r.Z.off(e,t,l),c&&clearTimeout(c),Array.isArray(i)&&i.forEach((function(t){r.Z.off(e,t,h)}))},l=function(){u(),o(a)},h=function(e){u(),s(e.type)};r.Z.on(e,t,l),Array.isArray(i)&&i.forEach((function(t){r.Z.on(e,t,h)}))}))}function u(e){return e.replace(/([0-z]{8})([0-z]{4})([0-z]{4})([0-z]{4})([0-z]{12})/,"$1-$2-$3-$4-$5")}function l(e,t){if(t.Ids&&1===t.Ids.split(",").length){var n=t.Ids.split(",");return e.getItem(e.getCurrentUserId(),n).then((function(e){return{Items:[e]}}))}return t.Limit=t.Limit||300,t.Fields="Chapters",t.ExcludeLocationTypes="Virtual",t.EnableTotalRecordCount=!1,t.CollapseBoxSetItems=!1,(0,i.k)(e,e.getCurrentUserId(),t)}function h(e,t,n){t.length>1&&n&&n.ids&&t.sort((function(e,t){return n.ids.indexOf(e.Id)-n.ids.indexOf(t.Id)}));var r,i,a,o,s,c=t[0],u=n.queryOptions||{};if("Program"===c.Type)r=l(e,{Ids:c.ChannelId});else if("Playlist"===c.Type)r=l(e,{ParentId:c.Id,SortBy:n.shuffle?"Random":null});else if("MusicArtist"===c.Type)r=l(e,{ArtistIds:c.Id,Filters:"IsNotFolder",Recursive:!0,SortBy:n.shuffle?"Random":"SortName",MediaTypes:"Audio"});else if("Photo"===c.MediaType)r=l(e,{ParentId:c.ParentId,Filters:"IsNotFolder",Recursive:!1,SortBy:n.shuffle?"Random":"SortName",MediaTypes:"Photo,Video"}).then((function(e){var t=e.Items.map((function(e){return e.Id})).indexOf(c.Id);return-1===t&&(t=0),n.startIndex=t,Promise.resolve(e)}));else if("PhotoAlbum"===c.Type)r=l(e,{ParentId:c.Id,Filters:"IsNotFolder",Recursive:!1,SortBy:n.shuffle?"Random":"SortName",MediaTypes:"Photo,Video",Limit:1e3});else if("MusicGenre"===c.Type)r=l(e,{GenreIds:c.Id,Filters:"IsNotFolder",Recursive:!0,SortBy:n.shuffle?"Random":"SortName",MediaTypes:"Audio"});else if(c.IsFolder){var h=null;n.shuffle?h="Random":"BoxSet"===c.Type&&(h="SortName"),r=l(e,(i={ParentId:c.Id,Filters:"IsNotFolder",Recursive:!0,SortBy:h,MediaTypes:"Audio,Video"},a=u,-1===(s=(o=Object.assign(i,a)).Filters?o.Filters.split(","):[]).indexOf("IsNotFolder")&&s.push("IsNotFolder"),o.Filters=s.join(","),o))}else"Episode"===c.Type&&1===t.length&&(r=new Promise((function(t,n){e.getCurrentUser().then((function(r){r.Configuration.EnableNextEpisodeAutoPlay&&c.SeriesId?e.getEpisodes(c.SeriesId,{IsVirtualUnaired:!1,IsMissing:!1,UserId:e.getCurrentUserId(),Fields:"Chapters"}).then((function(e){var n=!1;e.Items=e.Items.filter((function(e){return!!n||e.Id===c.Id&&(n=!0,!0)})),e.TotalRecordCount=e.Items.length,t(e)}),n):t(null)}))})));return r?r.then((function(e){return e?e.Items:t})):Promise.resolve(t)}},75094:function(e,t,n){n.r(t),n(84159),n(48914),n(26031),n(95822),n(56187),n(38690),n(81414),n(11908),n(33096),n(37666),n(89228),n(13227),n(14011),n(11431),n(9883),n(70753),n(61632),n(77337),n(39574),n(47134),n(43908),n(91162),n(88646);var r=n(67561),i=n(23472),a=n(7125),o=n(40599);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function c(){c=function(){return t};var e,t={},n=Object.prototype,r=n.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function h(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{h({},"")}catch(e){h=function(e,t,n){return e[t]=n}}function y(e,t,n,r){var a=t&&t.prototype instanceof S?t:S,o=Object.create(a.prototype),s=new A(r||[]);return i(o,"_invoke",{value:E(e,n,s)}),o}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=y;var d="suspendedStart",m="suspendedYield",p="executing",g="completed",v={};function S(){}function b(){}function k(){}var T={};h(T,o,(function(){return this}));var P=Object.getPrototypeOf,w=P&&P(P(R([])));w&&w!==n&&r.call(w,o)&&(T=w);var I=k.prototype=S.prototype=Object.create(T);function C(e){["next","throw","return"].forEach((function(t){h(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function n(i,a,o,c){var u=f(e[i],e,a);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==s(h)&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,o,c)}),(function(e){n("throw",e,o,c)})):t.resolve(h).then((function(e){l.value=e,o(l)}),(function(e){return n("throw",e,o,c)}))}c(u.arg)}var a;i(this,"_invoke",{value:function(e,r){function i(){return new t((function(t,i){n(e,r,t,i)}))}return a=a?a.then(i,i):i()}})}function E(t,n,r){var i=d;return function(a,o){if(i===p)throw new Error("Generator is already running");if(i===g){if("throw"===a)throw o;return{value:e,done:!0}}for(r.method=a,r.arg=o;;){var s=r.delegate;if(s){var c=L(s,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===d)throw i=g,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=p;var u=f(t,n,r);if("normal"===u.type){if(i=r.done?g:m,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(i=g,r.method="throw",r.arg=u.arg)}}}function L(t,n){var r=n.method,i=t.iterator[r];if(i===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,L(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var a=f(i,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var o=a.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function D(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function F(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(D,this),this.reset(!0)}function R(t){if(t||""===t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function n(){for(;++i<t.length;)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}throw new TypeError(s(t)+" is not iterable")}return b.prototype=k,i(I,"constructor",{value:k,configurable:!0}),i(k,"constructor",{value:b,configurable:!0}),b.displayName=h(k,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,k):(e.__proto__=k,h(e,l,"GeneratorFunction")),e.prototype=Object.create(I),e},t.awrap=function(e){return{__await:e}},C(x.prototype),h(x.prototype,u,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,r,i,a){void 0===a&&(a=Promise);var o=new x(y(e,n,r,i),a);return t.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},C(I),h(I,l,"Generator"),h(I,o,(function(){return this})),h(I,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=R,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(F),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return s.type="throw",s.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),F(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;F(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:R(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}function u(e,t,n,r,i,a,o){try{var s=e[a](o),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,i)}function l(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function o(e){u(a,r,i,o,s,"next",e)}function s(e){u(a,r,i,o,s,"throw",e)}o(void 0)}))}}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,y(r.key),r)}}function y(e){var t=function(e,t){if("object"!=s(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==s(t)?t:String(t)}var f=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.manager=null,this.timeSyncCore=null,this.syncEnabled=!1,this.playbackDiffMillis=0,this.syncAttempts=0,this.lastSyncTime=new Date,this.playerIsBuffering=!1,this.lastCommand=null,this.scheduledCommandTimeout=null,this.syncTimeout=null,this.loadPreferences()}var t,n,s,u,y;return t=e,n=[{key:"init",value:function(e){var t=this;this.manager=e,this.timeSyncCore=e.getTimeSyncCore(),r.Z.on(this.manager,"settings-update",(function(){t.loadPreferences()}))}},{key:"loadPreferences",value:function(){this.minDelaySpeedToSync=(0,i.f)((0,o.getSetting)("minDelaySpeedToSync"),60),this.maxDelaySpeedToSync=(0,i.f)((0,o.getSetting)("maxDelaySpeedToSync"),3e3),this.speedToSyncDuration=(0,i.f)((0,o.getSetting)("speedToSyncDuration"),1e3),this.minDelaySkipToSync=(0,i.f)((0,o.getSetting)("minDelaySkipToSync"),400),this.useSpeedToSync=(0,i.s)((0,o.getSetting)("useSpeedToSync"),!0),this.useSkipToSync=(0,i.s)((0,o.getSetting)("useSkipToSync"),!0),this.enableSyncCorrection=(0,i.s)((0,o.getSetting)("enableSyncCorrection"),!1)}},{key:"onPlaybackStart",value:function(e,t){r.Z.trigger(this.manager,"playbackstart",[e,t])}},{key:"onPlaybackStop",value:function(e){this.lastCommand=null,r.Z.trigger(this.manager,"playbackstop",[e])}},{key:"onUnpause",value:function(){r.Z.trigger(this.manager,"unpause")}},{key:"onPause",value:function(){r.Z.trigger(this.manager,"pause")}},{key:"onTimeUpdate",value:function(e,t){this.syncPlaybackTime(t),r.Z.trigger(this.manager,"timeupdate",[e,t])}},{key:"onReady",value:function(){this.playerIsBuffering=!1,this.sendBufferingRequest(!1),r.Z.trigger(this.manager,"ready")}},{key:"onBuffering",value:function(){this.playerIsBuffering=!0,this.sendBufferingRequest(!0),r.Z.trigger(this.manager,"buffering")}},{key:"sendBufferingRequest",value:(y=l(c().mark((function e(){var t,n,r,i,o,s,u,l,h,y,f=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=!(f.length>0&&void 0!==f[0])||f[0],!(n=this.manager.getPlayerWrapper()).currentTimeAsync){e.next=8;break}return e.next=5,n.currentTimeAsync();case 5:e.t0=e.sent,e.next=9;break;case 8:e.t0=n.currentTime();case 9:r=e.t0,i=Math.round(r*a.TicksPerMillisecond),o=n.isPlaying(),s=new Date,u=this.timeSyncCore.localDateToRemote(s),l=this.manager.getQueueCore().getCurrentPlaylistItemId(),h={When:u.toISOString(),PositionTicks:i,IsPlaying:o,PlaylistItemId:l},y=this.manager.getApiClient(),t?y.requestSyncPlayBuffering(h):y.requestSyncPlayReady(h);case 18:case"end":return e.stop()}}),e,this)}))),function(){return y.apply(this,arguments)})},{key:"isBuffering",value:function(){return this.playerIsBuffering}},{key:"applyCommand",value:(u=l(c().mark((function e(t){var n,r,i,o,s;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.lastCommand||this.lastCommand.When.getTime()!==t.When.getTime()||this.lastCommand.PositionTicks!==t.PositionTicks||this.lastCommand.Command!==t.Command||this.lastCommand.PlaylistItemId!==t.PlaylistItemId){e.next=37;break}if(console.debug("SyncPlay applyCommand: duplicate command received!",t),n=new Date,!(this.timeSyncCore.remoteDateToLocal(t.When)>n)){e.next=9;break}return console.debug("SyncPlay applyCommand: command already scheduled.",t),e.abrupt("return");case 9:if(r=this.manager.getPlayerWrapper(),e.t0=Math,!r.currentTimeAsync){e.next=17;break}return e.next=14,r.currentTimeAsync();case 14:e.t1=e.sent,e.next=18;break;case 17:e.t1=r.currentTime();case 18:e.t2=e.t1,e.t3=a.TicksPerMillisecond,e.t4=e.t2*e.t3,i=e.t0.round.call(e.t0,e.t4),o=r.isPlaying(),e.t5=t.Command,e.next="Unpause"===e.t5?26:"Pause"===e.t5?28:"Stop"===e.t5?30:"Seek"===e.t5?32:34;break;case 26:return o||this.scheduleUnpause(t.When,t.PositionTicks),e.abrupt("break",36);case 28:return(o||i!==t.PositionTicks)&&this.schedulePause(t.When,t.PositionTicks),e.abrupt("break",36);case 30:return o&&this.scheduleStop(t.When),e.abrupt("break",36);case 32:return o||i!==t.PositionTicks?(s=Math.round(100*(Math.random()-.5))*a.TicksPerMillisecond,this.scheduleSeek(t.When,t.PositionTicks+s),console.debug("SyncPlay applyCommand: adding random offset to force seek:",s,t)):this.sendBufferingRequest(!1),e.abrupt("break",36);case 34:return console.error("SyncPlay applyCommand: command is not recognised:",t),e.abrupt("break",36);case 36:return e.abrupt("return");case 37:if(this.lastCommand=t,!this.manager.isRemote()){e.next=40;break}return e.abrupt("return");case 40:e.t6=t.Command,e.next="Unpause"===e.t6?43:"Pause"===e.t6?45:"Stop"===e.t6?47:"Seek"===e.t6?49:51;break;case 43:return this.scheduleUnpause(t.When,t.PositionTicks),e.abrupt("break",53);case 45:return this.schedulePause(t.When,t.PositionTicks),e.abrupt("break",53);case 47:return this.scheduleStop(t.When),e.abrupt("break",53);case 49:return this.scheduleSeek(t.When,t.PositionTicks),e.abrupt("break",53);case 51:return console.error("SyncPlay applyCommand: command is not recognised:",t),e.abrupt("break",53);case 53:case"end":return e.stop()}}),e,this)}))),function(e){return u.apply(this,arguments)})},{key:"scheduleUnpause",value:(s=l(c().mark((function e(t,n){var i,o,s,u,l,h,y,f=this;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.clearScheduledCommand(),i=this.maxDelaySpeedToSync/2,o=new Date,s=this.timeSyncCore.remoteDateToLocal(t),!(u=this.manager.getPlayerWrapper()).currentTimeAsync){e.next=11;break}return e.next=8,u.currentTimeAsync();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=u.currentTime();case 12:e.t1=e.t0,e.t2=a.TicksPerMillisecond,l=e.t1*e.t2,s>o?(h=s-o,l-n>this.minDelaySkipToSync*a.TicksPerMillisecond&&this.localSeek(n),this.scheduledCommandTimeout=setTimeout((function(){f.localUnpause(),r.Z.trigger(f.manager,"notify-osd",["unpause"]),f.syncTimeout=setTimeout((function(){f.syncEnabled=!0}),i)}),h),console.debug("Scheduled unpause in",h/1e3,"seconds.")):(y=this.estimateCurrentTicks(n,t),a.waitForEventOnce(this.manager,"unpause").then((function(){f.localSeek(y)})),this.localUnpause(),setTimeout((function(){r.Z.trigger(f.manager,"notify-osd",["unpause"])}),100),this.syncTimeout=setTimeout((function(){f.syncEnabled=!0}),i),console.debug("SyncPlay scheduleUnpause: unpause now from ".concat(y," (was at ").concat(l,").")));case 16:case"end":return e.stop()}}),e,this)}))),function(e,t){return s.apply(this,arguments)})},{key:"schedulePause",value:function(e,t){var n=this;this.clearScheduledCommand();var r=new Date,i=this.timeSyncCore.remoteDateToLocal(e),o=function(){a.waitForEventOnce(n.manager,"pause",a.WaitForPlayerEventTimeout).then((function(){n.localSeek(t)})).catch((function(){n.localSeek(t)})),n.localPause()};if(i>r){var s=i-r;this.scheduledCommandTimeout=setTimeout(o,s),console.debug("Scheduled pause in",s/1e3,"seconds.")}else o(),console.debug("SyncPlay schedulePause: now.")}},{key:"scheduleStop",value:function(e){var t=this;this.clearScheduledCommand();var n=new Date,r=this.timeSyncCore.remoteDateToLocal(e),i=function(){t.localStop()};if(r>n){var a=r-n;this.scheduledCommandTimeout=setTimeout(i,a),console.debug("Scheduled stop in",a/1e3,"seconds.")}else i(),console.debug("SyncPlay scheduleStop: now.")}},{key:"scheduleSeek",value:function(e,t){var n=this;this.clearScheduledCommand();var r=new Date,i=this.timeSyncCore.remoteDateToLocal(e),o=function(){n.localUnpause(),n.localSeek(t),a.waitForEventOnce(n.manager,"ready",a.WaitForEventDefaultTimeout).then((function(){n.localPause(),n.sendBufferingRequest(!1)})).catch((function(e){console.error("Timed out while waiting for 'ready' event! Seeking to ".concat(t,"."),e),n.localSeek(t)}))};if(i>r){var s=i-r;this.scheduledCommandTimeout=setTimeout(o,s),console.debug("Scheduled seek in",s/1e3,"seconds.")}else o(),console.debug("SyncPlay scheduleSeek: now.")}},{key:"clearScheduledCommand",value:function(){clearTimeout(this.scheduledCommandTimeout),clearTimeout(this.syncTimeout),this.syncEnabled=!1;var e=this.manager.getPlayerWrapper();e.hasPlaybackRate()&&e.setPlaybackRate(1),this.manager.clearSyncIcon()}},{key:"localUnpause",value:function(){if(this.manager.isPlaybackActive())return this.manager.getPlayerWrapper().localUnpause();console.debug("SyncPlay localUnpause: no active player!")}},{key:"localPause",value:function(){if(this.manager.isPlaybackActive())return this.manager.getPlayerWrapper().localPause();console.debug("SyncPlay localPause: no active player!")}},{key:"localSeek",value:function(e){if(this.manager.isPlaybackActive())return this.manager.getPlayerWrapper().localSeek(e);console.debug("SyncPlay localSeek: no active player!")}},{key:"localStop",value:function(){if(this.manager.isPlaybackActive())return this.manager.getPlayerWrapper().localStop();console.debug("SyncPlay localStop: no active player!")}},{key:"estimateCurrentTicks",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new Date;return e+(this.timeSyncCore.localDateToRemote(n).getTime()-t.getTime())*a.TicksPerMillisecond}},{key:"syncPlaybackTime",value:function(e){var t=this,n=this.maxDelaySpeedToSync,i=this.speedToSyncDuration;if(this.manager.isPlaybackActive()){var o=this.lastCommand;if(o&&"Unpause"===o.Command&&!this.isBuffering()){var s=this.manager.getQueueCore().getCurrentPlaylistItemId();if(o.PlaylistItemId===s){var c=e.currentTime,u=e.currentPosition*a.TicksPerMillisecond,l=this.estimateCurrentTicks(o.PositionTicks,o.When,c),h=(l-u)/a.TicksPerMillisecond;if(this.playbackDiffMillis=h,r.Z.trigger(this.manager,"playback-diff",[this.playbackDiffMillis]),!(c-this.lastSyncTime<n/2)){this.lastSyncTime=c;var y=this.manager.getPlayerWrapper();if(this.syncEnabled&&this.enableSyncCorrection){var f=Math.abs(h);if(y.hasPlaybackRate()&&this.useSpeedToSync&&f>=this.minDelaySpeedToSync&&f<this.maxDelaySpeedToSync){h<=.2*-i&&(i=Math.abs(h)/.8);var d=1+h/i;d<=0&&console.error("SyncPlay error: speed should not be negative!",d,h,i),y.setPlaybackRate(d),this.syncEnabled=!1,this.syncAttempts++,this.manager.showSyncIcon("SpeedToSync (x".concat(d.toFixed(2),")")),this.syncTimeout=setTimeout((function(){y.setPlaybackRate(1),t.syncEnabled=!0,t.manager.clearSyncIcon()}),i),console.log("SyncPlay SpeedToSync",d)}else this.useSkipToSync&&f>=this.minDelaySkipToSync?(this.localSeek(l),this.syncEnabled=!1,this.syncAttempts++,this.manager.showSyncIcon("SkipToSync (".concat(this.syncAttempts,")")),this.syncTimeout=setTimeout((function(){t.syncEnabled=!0,t.manager.clearSyncIcon()}),n/2),console.log("SyncPlay SkipToSync",l)):(this.syncAttempts>0&&console.debug("Playback has been synced after",this.syncAttempts,"attempts."),this.syncAttempts=0)}}}}}else console.debug("SyncPlay syncPlaybackTime: no active player!")}}],n&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.default=f},40599:function(e,t,n){n.r(t),n.d(t,{getSetting:function(){return a},setSetting:function(){return o}});var r=n(59858),i="syncPlay";function a(e){return r.Z.get(e,i)}function o(e,t){return r.Z.set(e,t,i)}}}]);