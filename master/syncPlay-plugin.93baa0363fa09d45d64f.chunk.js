"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[59444,25516,61951],{46140:function(t,e,n){function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t){return o=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},o(t)}function i(t,e){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},i(t,e)}function a(t){var e=function(t,e){if("object"!=r(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==r(e)?e:String(e)}n.r(e),n(26031),n(95822),n(56187),n(38690),n(81414),n(11908),n(33096),n(43908),n(39574),n(36763),n(89228),n(13227),n(14011),n(11431);var u,c,l,f=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),t=this,i=arguments,n=o(n=e),function(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){return!1}}()?Reflect.construct(n,i||[],o(t).constructor):n.apply(t,i));var t,n,i}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&i(t,e)}(e,t),n=e,Object.defineProperty(n,"prototype",{writable:!1}),n;var n}(n(7786).default);u=f,l="htmlaudioplayer",(c=a(c="type"))in u?Object.defineProperty(u,c,{value:l,enumerable:!0,configurable:!0,writable:!0}):u[c]=l,e.default=f},7786:function(t,e,n){n.r(e),n(26031),n(95822),n(56187),n(38690),n(81414),n(11908),n(33096),n(43908),n(39574),n(35190),n(86225),n(36763),n(89228),n(13227),n(14011),n(11431);var r=n(33678),o=n(74131);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,f(r.key),r)}}function u(){return u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=c(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},u.apply(this,arguments)}function c(t){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},c(t)}function l(t,e){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},l(t,e)}function f(t){var e=function(t,e){if("object"!=i(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==i(e)?e:String(e)}var y,s,p,b=function(t){function e(t,n){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(r=function(t,e,n){return e=c(e),function(t,e){if(e&&("object"===i(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){return!1}}()?Reflect.construct(e,n||[],c(t).constructor):e.apply(t,n))}(this,e,[t,n])).isPlayerActive=!1,r.savedPlaybackRate=1,r.minBufferingThresholdMillis=3e3,t.currentTimeAsync&&(r.currentTimeAsync=function(){return r.player.currentTimeAsync()}),r}var n,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&l(t,e)}(e,t),n=e,(r=[{key:"localBindToPlayer",value:function(){u(c(e.prototype),"localBindToPlayer",this).call(this);var t=this;this._onPlaybackStart=function(e,n){t.isPlayerActive=!0,t.onPlaybackStart(e,n)},this._onPlaybackStop=function(e){t.isPlayerActive=!1,t.onPlaybackStop(e)},this._onUnpause=function(){t.onUnpause()},this._onPause=function(){t.onPause()},this._onTimeUpdate=function(e){var n=new Date,r=t.player.currentTime();t.onTimeUpdate(e,{currentTime:n,currentPosition:r})},this._onPlaying=function(){clearTimeout(t.notifyBuffering),t.onReady()},this._onWaiting=function(){clearTimeout(t.notifyBuffering),t.notifyBuffering=setTimeout((function(){t.onBuffering()}),t.minBufferingThresholdMillis)},o.Z.on(this.player,"playbackstart",this._onPlaybackStart),o.Z.on(this.player,"playbackstop",this._onPlaybackStop),o.Z.on(this.player,"unpause",this._onUnpause),o.Z.on(this.player,"pause",this._onPause),o.Z.on(this.player,"timeupdate",this._onTimeUpdate),o.Z.on(this.player,"playing",this._onPlaying),o.Z.on(this.player,"waiting",this._onWaiting),this.savedPlaybackRate=this.player.getPlaybackRate()}},{key:"localUnbindFromPlayer",value:function(){u(c(e.prototype),"localUnbindFromPlayer",this).call(this),o.Z.off(this.player,"playbackstart",this._onPlaybackStart),o.Z.off(this.player,"playbackstop",this._onPlaybackStop),o.Z.off(this.player,"unpause",this._onPlayerUnpause),o.Z.off(this.player,"pause",this._onPlayerPause),o.Z.off(this.player,"timeupdate",this._onTimeUpdate),o.Z.off(this.player,"playing",this._onPlaying),o.Z.off(this.player,"waiting",this._onWaiting),this.player.setPlaybackRate(this.savedPlaybackRate)}},{key:"onQueueUpdate",value:function(){o.Z.trigger(this.player,"playlistitemadd")}},{key:"isPlaybackActive",value:function(){return this.isPlayerActive}},{key:"isPlaying",value:function(){return!this.player.paused()}},{key:"currentTime",value:function(){return this.player.currentTime()}},{key:"hasPlaybackRate",value:function(){return!0}},{key:"setPlaybackRate",value:function(t){this.player.setPlaybackRate(t)}},{key:"getPlaybackRate",value:function(){return this.player.getPlaybackRate()}}])&&a(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}(r.default);y=b,p="htmlvideoplayer",(s=f(s="type"))in y?Object.defineProperty(y,s,{value:p,enumerable:!0,configurable:!0,writable:!0}):y[s]=p,e.default=b},22126:function(t,e,n){n.r(e);var r=n(2513),o=n(18613),i=n(74131),a=n(17031),u=n(33678),c=n(7786),l=n(46140),f=n(86062),y=function(){function t(){this.name="SyncPlay Plugin",this.id="syncplay",this.type=f.z.SyncPlay,this.priority=1,this.instance=a.default,this.init()}return t.prototype.init=function(){a.default.PlayerFactory.setDefaultWrapper(u.default),a.default.PlayerFactory.registerWrapper(c.default),a.default.PlayerFactory.registerWrapper(l.default),i.Z.on(r.O,"playerchange",(function(t,e){a.default.Manager.onPlayerChange(e)}));var t=o.Z.currentApiClient();t&&a.default.Manager.init(t),i.Z.on(o.Z,"apiclientcreated",(function(t,e){return a.default.Manager.init(e)})),i.Z.on(o.Z,"localusersignedin",(function(){return a.default.Manager.updateApiClient(o.Z.currentApiClient())})),i.Z.on(o.Z,"localusersignedout",(function(){return a.default.Manager.updateApiClient(o.Z.currentApiClient())}))},t}();e.default=y}}]);