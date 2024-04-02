"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[40394],{9066:function(t,e,n){n.r(e),n(29305),n(32733),n(84701),n(81678),n(44962),n(4754),n(94),n(36947),n(36457),n(26437),n(52697),n(78557),n(21359),n(61642),n(83994),n(82367);var r=n(10699),i=n(62014);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,f(r.key),r)}}function l(t,e,n){return e=y(e),function(t,e){if(e&&("object"===o(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,u()?Reflect.construct(e,n||[],y(t).constructor):e.apply(t,n))}function u(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(u=function(){return!!t})()}function c(){return c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=y(t)););return t}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(arguments.length<3?t:n):i.value}},c.apply(this,arguments)}function y(t){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},y(t)}function s(t,e){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},s(t,e)}function f(t){var e=function(t,e){if("object"!=o(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==o(e)?e:e+""}var p,h,b,P=function(t){function e(t,n){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(r=l(this,e,[t,n])).isPlayerActive=!1,r.savedPlaybackRate=1,r.minBufferingThresholdMillis=3e3,t.currentTimeAsync&&(r.currentTimeAsync=function(){return r.player.currentTimeAsync()}),r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&s(t,e)}(e,t),n=e,(r=[{key:"localBindToPlayer",value:function(){c(y(e.prototype),"localBindToPlayer",this).call(this);var t=this;this._onPlaybackStart=function(e,n){t.isPlayerActive=!0,t.onPlaybackStart(e,n)},this._onPlaybackStop=function(e){t.isPlayerActive=!1,t.onPlaybackStop(e)},this._onUnpause=function(){t.onUnpause()},this._onPause=function(){t.onPause()},this._onTimeUpdate=function(e){var n=new Date,r=t.player.currentTime();t.onTimeUpdate(e,{currentTime:n,currentPosition:r})},this._onPlaying=function(){clearTimeout(t.notifyBuffering),t.onReady()},this._onWaiting=function(){clearTimeout(t.notifyBuffering),t.notifyBuffering=setTimeout((function(){t.onBuffering()}),t.minBufferingThresholdMillis)},i.A.on(this.player,"playbackstart",this._onPlaybackStart),i.A.on(this.player,"playbackstop",this._onPlaybackStop),i.A.on(this.player,"unpause",this._onUnpause),i.A.on(this.player,"pause",this._onPause),i.A.on(this.player,"timeupdate",this._onTimeUpdate),i.A.on(this.player,"playing",this._onPlaying),i.A.on(this.player,"waiting",this._onWaiting),this.savedPlaybackRate=this.player.getPlaybackRate()}},{key:"localUnbindFromPlayer",value:function(){c(y(e.prototype),"localUnbindFromPlayer",this).call(this),i.A.off(this.player,"playbackstart",this._onPlaybackStart),i.A.off(this.player,"playbackstop",this._onPlaybackStop),i.A.off(this.player,"unpause",this._onPlayerUnpause),i.A.off(this.player,"pause",this._onPlayerPause),i.A.off(this.player,"timeupdate",this._onTimeUpdate),i.A.off(this.player,"playing",this._onPlaying),i.A.off(this.player,"waiting",this._onWaiting),this.player.setPlaybackRate(this.savedPlaybackRate)}},{key:"onQueueUpdate",value:function(){i.A.trigger(this.player,"playlistitemadd")}},{key:"isPlaybackActive",value:function(){return this.isPlayerActive}},{key:"isPlaying",value:function(){return!this.player.paused()}},{key:"currentTime",value:function(){return this.player.currentTime()}},{key:"hasPlaybackRate",value:function(){return!0}},{key:"setPlaybackRate",value:function(t){this.player.setPlaybackRate(t)}},{key:"getPlaybackRate",value:function(){return this.player.getPlaybackRate()}}])&&a(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r}(r.default);p=P,b="htmlvideoplayer",(h=f(h="type"))in p?Object.defineProperty(p,h,{value:b,enumerable:!0,configurable:!0,writable:!0}):p[h]=b,e.default=P}}]);