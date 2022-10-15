"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5202],{7786:function(t,e,n){n.r(e),n(99785),n(50987),n(12274),n(63238),n(3214),n(83011),n(20252),n(25901),n(92189),n(91047),n(5769),n(17460),n(14078);var r=n(33678),i=n(81643);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=u(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(arguments.length<3?t:n):i.value}},l.apply(this,arguments)}function u(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=y(t)););return t}function c(t,e){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},c(t,e)}function s(t,e){if(e&&("object"===o(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function y(t){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},y(t)}var f,p,h,b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&c(t,e)}(f,t);var e,n,r,o,u=(r=f,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=y(r);if(o){var n=y(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return s(this,t)});function f(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,f),(n=u.call(this,t,e)).isPlayerActive=!1,n.savedPlaybackRate=1,n.minBufferingThresholdMillis=3e3,t.currentTimeAsync&&(n.currentTimeAsync=function(){return n.player.currentTimeAsync()}),n}return e=f,(n=[{key:"localBindToPlayer",value:function(){l(y(f.prototype),"localBindToPlayer",this).call(this);var t=this;this._onPlaybackStart=function(e,n){t.isPlayerActive=!0,t.onPlaybackStart(e,n)},this._onPlaybackStop=function(e){t.isPlayerActive=!1,t.onPlaybackStop(e)},this._onUnpause=function(){t.onUnpause()},this._onPause=function(){t.onPause()},this._onTimeUpdate=function(e){var n=new Date,r=t.player.currentTime();t.onTimeUpdate(e,{currentTime:n,currentPosition:r})},this._onPlaying=function(){clearTimeout(t.notifyBuffering),t.onReady()},this._onWaiting=function(){clearTimeout(t.notifyBuffering),t.notifyBuffering=setTimeout((function(){t.onBuffering()}),t.minBufferingThresholdMillis)},i.Z.on(this.player,"playbackstart",this._onPlaybackStart),i.Z.on(this.player,"playbackstop",this._onPlaybackStop),i.Z.on(this.player,"unpause",this._onUnpause),i.Z.on(this.player,"pause",this._onPause),i.Z.on(this.player,"timeupdate",this._onTimeUpdate),i.Z.on(this.player,"playing",this._onPlaying),i.Z.on(this.player,"waiting",this._onWaiting),this.savedPlaybackRate=this.player.getPlaybackRate()}},{key:"localUnbindFromPlayer",value:function(){l(y(f.prototype),"localUnbindFromPlayer",this).call(this),i.Z.off(this.player,"playbackstart",this._onPlaybackStart),i.Z.off(this.player,"playbackstop",this._onPlaybackStop),i.Z.off(this.player,"unpause",this._onPlayerUnpause),i.Z.off(this.player,"pause",this._onPlayerPause),i.Z.off(this.player,"timeupdate",this._onTimeUpdate),i.Z.off(this.player,"playing",this._onPlaying),i.Z.off(this.player,"waiting",this._onWaiting),this.player.setPlaybackRate(this.savedPlaybackRate)}},{key:"onQueueUpdate",value:function(){i.Z.trigger(this.player,"playlistitemadd")}},{key:"isPlaybackActive",value:function(){return this.isPlayerActive}},{key:"isPlaying",value:function(){return!this.player.paused()}},{key:"currentTime",value:function(){return this.player.currentTime()}},{key:"hasPlaybackRate",value:function(){return!0}},{key:"setPlaybackRate",value:function(t){this.player.setPlaybackRate(t)}},{key:"getPlaybackRate",value:function(){return this.player.getPlaybackRate()}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),f}(r.default);h="htmlvideoplayer",(p="type")in(f=b)?Object.defineProperty(f,p,{value:h,enumerable:!0,configurable:!0,writable:!0}):f.type=h,e.default=b}}]);