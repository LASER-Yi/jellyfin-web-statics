"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[61951],{7786:function(t,e,n){n.r(e),n(26031),n(95822),n(56187),n(38690),n(81414),n(11908),n(33096),n(43908),n(39574),n(35190),n(86225),n(36763),n(89228),n(13227),n(14011),n(11431);var r=n(33678),i=n(74131);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,y(r.key),r)}}function u(){return u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=l(t)););return t}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(arguments.length<3?t:n):i.value}},u.apply(this,arguments)}function l(t){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},l(t)}function c(t,e){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},c(t,e)}function y(t){var e=function(t,e){if("object"!=o(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==o(e)?e:String(e)}var f,s,p,h=function(t){function e(t,n){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(r=function(t,e,n){return e=l(e),function(t,e){if(e&&("object"===o(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){return!1}}()?Reflect.construct(e,n||[],l(t).constructor):e.apply(t,n))}(this,e,[t,n])).isPlayerActive=!1,r.savedPlaybackRate=1,r.minBufferingThresholdMillis=3e3,t.currentTimeAsync&&(r.currentTimeAsync=function(){return r.player.currentTimeAsync()}),r}var n,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&c(t,e)}(e,t),n=e,(r=[{key:"localBindToPlayer",value:function(){u(l(e.prototype),"localBindToPlayer",this).call(this);var t=this;this._onPlaybackStart=function(e,n){t.isPlayerActive=!0,t.onPlaybackStart(e,n)},this._onPlaybackStop=function(e){t.isPlayerActive=!1,t.onPlaybackStop(e)},this._onUnpause=function(){t.onUnpause()},this._onPause=function(){t.onPause()},this._onTimeUpdate=function(e){var n=new Date,r=t.player.currentTime();t.onTimeUpdate(e,{currentTime:n,currentPosition:r})},this._onPlaying=function(){clearTimeout(t.notifyBuffering),t.onReady()},this._onWaiting=function(){clearTimeout(t.notifyBuffering),t.notifyBuffering=setTimeout((function(){t.onBuffering()}),t.minBufferingThresholdMillis)},i.Z.on(this.player,"playbackstart",this._onPlaybackStart),i.Z.on(this.player,"playbackstop",this._onPlaybackStop),i.Z.on(this.player,"unpause",this._onUnpause),i.Z.on(this.player,"pause",this._onPause),i.Z.on(this.player,"timeupdate",this._onTimeUpdate),i.Z.on(this.player,"playing",this._onPlaying),i.Z.on(this.player,"waiting",this._onWaiting),this.savedPlaybackRate=this.player.getPlaybackRate()}},{key:"localUnbindFromPlayer",value:function(){u(l(e.prototype),"localUnbindFromPlayer",this).call(this),i.Z.off(this.player,"playbackstart",this._onPlaybackStart),i.Z.off(this.player,"playbackstop",this._onPlaybackStop),i.Z.off(this.player,"unpause",this._onPlayerUnpause),i.Z.off(this.player,"pause",this._onPlayerPause),i.Z.off(this.player,"timeupdate",this._onTimeUpdate),i.Z.off(this.player,"playing",this._onPlaying),i.Z.off(this.player,"waiting",this._onWaiting),this.player.setPlaybackRate(this.savedPlaybackRate)}},{key:"onQueueUpdate",value:function(){i.Z.trigger(this.player,"playlistitemadd")}},{key:"isPlaybackActive",value:function(){return this.isPlayerActive}},{key:"isPlaying",value:function(){return!this.player.paused()}},{key:"currentTime",value:function(){return this.player.currentTime()}},{key:"hasPlaybackRate",value:function(){return!0}},{key:"setPlaybackRate",value:function(t){this.player.setPlaybackRate(t)}},{key:"getPlaybackRate",value:function(){return this.player.getPlaybackRate()}}])&&a(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}(r.default);f=h,p="htmlvideoplayer",(s=y(s="type"))in f?Object.defineProperty(f,s,{value:p,enumerable:!0,configurable:!0,writable:!0}):f[s]=p,e.default=h}}]);