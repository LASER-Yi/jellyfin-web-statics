"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3679],{3679:function(e,r,t){t.r(r),t(19068),t(87211),t(25901),t(92189),t(63238),t(95163),t(99785),t(91047),t(5769),t(17460),t(14078);var i=t(72365),n=t(30531),o=(t(61414),t(38228),t(18613));function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function a(e,r){for(var t=0;t<r.length;t++){var i=r[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(void 0,n=function(e,r){if("object"!==s(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var i=t.call(e,r);if("object"!==s(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(i.key,"string"),"symbol"===s(n)?n:String(n)),i)}var n}function c(){var e=this.item;if(e){var r=e.ServerId,t=e.Id,i=e.TimerId,o=e.Status,s=e.SeriesTimerId,a=this;n.default.toggleRecording(r,t,i,o,s).then((function(){a.refresh(r,t)}))}}function u(e,r){var t=e.querySelector(".material-icons");t.classList.remove("fiber_smart_record"),t.classList.remove("fiber_manual_record"),t.classList.add(r)}var l=function(){function e(r){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=r;var t=r.button;u(t,"fiber_manual_record"),r.item?this.refreshItem(r.item):r.itemId&&r.serverId&&this.refresh(r.itemId,r.serverId);var n=c.bind(this);this.clickFn=n,i.ZP.addEventListener(t,"click",n,{passive:!0})}var r,t;return r=e,(t=[{key:"refresh",value:function(e,r){var t=o.Z.getApiClient(e),i=this;t.getItem(t.getCurrentUserId(),r).then((function(e){i.refreshItem(e)}))}},{key:"refreshItem",value:function(e){var r=this.options.button;this.item=e,u(r,function(e){var r;if("SeriesTimer"===e.Type)return"fiber_smart_record";if(e.TimerId||e.SeriesTimerId)r=e.Status||"Cancelled";else{if("Timer"!==e.Type)return"fiber_manual_record";r=e.Status}return e.SeriesTimerId&&"Cancelled"!==r?"fiber_smart_record":"fiber_manual_record"}(e)),e.TimerId&&"Cancelled"!==(e.Status||"Cancelled")?r.classList.add("recordingIcon-active"):r.classList.remove("recordingIcon-active")}},{key:"destroy",value:function(){var e=this.options;if(e){var r=e.button,t=this.clickFn;t&&i.ZP.removeEventListener(r,"click",t,{passive:!0})}this.options=null,this.item=null}}])&&a(r.prototype,t),Object.defineProperty(r,"prototype",{writable:!1}),e}();r.default=l}}]);