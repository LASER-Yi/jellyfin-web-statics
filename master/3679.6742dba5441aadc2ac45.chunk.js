"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3679,30531],{3679:function(e,t,r){r.r(t),r(26031),r(95822),r(56187),r(38690),r(81414),r(11908),r(33096),r(89228),r(13227),r(14011),r(11431);var n=r(72365),i=r(30531),a=(r(61414),r(38228),r(18613));function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,s(n.key),n)}}function s(e){var t=function(e,t){if("object"!=c(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==c(t)?t:String(t)}function l(){var e=this.item;if(e){var t=e.ServerId,r=e.Id,n=e.TimerId,a=e.Status,c=e.SeriesTimerId,o=this;i.default.toggleRecording(t,r,n,a,c).then((function(){o.refresh(t,r)}))}}function u(e,t){var r=e.querySelector(".material-icons");r.classList.remove("fiber_smart_record"),r.classList.remove("fiber_manual_record"),r.classList.add(t)}var f=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=t;var r=t.button;u(r,"fiber_manual_record"),t.item?this.refreshItem(t.item):t.itemId&&t.serverId&&this.refresh(t.itemId,t.serverId);var i=l.bind(this);this.clickFn=i,n.ZP.addEventListener(r,"click",i,{passive:!0})}var t,r;return t=e,(r=[{key:"refresh",value:function(e,t){var r=a.Z.getApiClient(e),n=this;r.getItem(r.getCurrentUserId(),t).then((function(e){n.refreshItem(e)}))}},{key:"refreshItem",value:function(e){var t=this.options.button;this.item=e,u(t,function(e){var t;if("SeriesTimer"===e.Type)return"fiber_smart_record";if(e.TimerId||e.SeriesTimerId)t=e.Status||"Cancelled";else{if("Timer"!==e.Type)return"fiber_manual_record";t=e.Status}return e.SeriesTimerId&&"Cancelled"!==t?"fiber_smart_record":"fiber_manual_record"}(e)),e.TimerId&&"Cancelled"!==(e.Status||"Cancelled")?t.classList.add("recordingIcon-active"):t.classList.remove("recordingIcon-active")}},{key:"destroy",value:function(){var e=this.options;if(e){var t=e.button,r=this.clickFn;r&&n.ZP.removeEventListener(t,"click",r,{passive:!0})}this.options=null,this.item=null}}])&&o(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.default=f},30531:function(e,t,r){r.r(t),r(81414),r(37666);var n=r(94994),i=r(84597),a=r(18613),c=r(56663),o=r(3137),s=r(56809);function l(e,t,r,a){return i.ZP.show(),e.getItem(e.getCurrentUserId(),r).then((function(o){return o.IsSeries?e.getNewLiveTvTimerDefaults({programId:r}).then((function(t){return e.createLiveTvSeriesTimer(t).then((function(){i.ZP.hide(),(0,c.Z)(n.ZP.translate("SeriesRecordingScheduled"))}))})):a?u(t,e.serverId()):f(e.serverId(),t,!0)}))}function u(e,t){return new Promise((function(r,c){(0,o.Z)({text:n.ZP.translate("MessageConfirmRecordingCancellation"),primary:"delete",confirmText:n.ZP.translate("HeaderCancelRecording"),cancelText:n.ZP.translate("HeaderKeepRecording")}).then((function(){i.ZP.show(),f(a.Z.getApiClient(t),e,!0).then(r,c)}),c)}))}function f(e,t,r){return i.ZP.show(),e.cancelLiveTvTimer(t).then((function(){!1!==r&&(i.ZP.hide(),(0,c.Z)(n.ZP.translate("RecordingCancelled")))}))}function d(e,t,r){return i.ZP.show(),e.getNewLiveTvTimerDefaults({programId:t}).then((function(t){return(r?e.createLiveTvSeriesTimer(t):e.createLiveTvTimer(t)).then((function(){i.ZP.hide(),(0,c.Z)(n.ZP.translate("RecordingScheduled"))}))}))}t.default={cancelTimer:f,createRecording:d,changeRecordingToSeries:l,toggleRecording:function(e,t,r,o,u){var m=a.Z.getApiClient(e),h=r&&"Cancelled"!==o;return u&&h?function(e,t,r,o,l){return new Promise((function(t,u){var d=[];d.push({name:n.ZP.translate("HeaderKeepRecording"),id:"cancel",type:"submit"}),"InProgress"===o?d.push({name:n.ZP.translate("HeaderStopRecording"),id:"canceltimer",type:"cancel"}):d.push({name:n.ZP.translate("HeaderCancelRecording"),id:"canceltimer",type:"cancel"}),d.push({name:n.ZP.translate("HeaderCancelSeries"),id:"cancelseriestimer",type:"cancel"}),s.Z.show({text:n.ZP.translate("MessageConfirmRecordingCancellation"),buttons:d}).then((function(o){var s=a.Z.getApiClient(e);"canceltimer"===o?(i.ZP.show(),f(s,r,!0).then(t,u)):"cancelseriestimer"===o?(i.ZP.show(),s.cancelLiveTvSeriesTimer(l).then((function(){(0,c.Z)(n.ZP.translate("SeriesCancelled")),i.ZP.hide(),t()}),u)):t()}),u)}))}(e,0,r,o,u):h&&t?l(m,r,t,!0):t?d(m,t):Promise.reject()},cancelTimerWithConfirmation:u,cancelSeriesTimerWithConfirmation:function(e,t){return new Promise((function(r,s){(0,o.Z)({text:n.ZP.translate("MessageConfirmRecordingCancellation"),primary:"delete",confirmText:n.ZP.translate("HeaderCancelSeries"),cancelText:n.ZP.translate("HeaderKeepSeries")}).then((function(){i.ZP.show(),a.Z.getApiClient(t).cancelLiveTvSeriesTimer(e).then((function(){(0,c.Z)(n.ZP.translate("SeriesCancelled")),i.ZP.hide(),r()}),s)}),s)}))}}}}]);