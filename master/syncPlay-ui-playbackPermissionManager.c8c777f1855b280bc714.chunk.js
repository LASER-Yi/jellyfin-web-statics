"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[89824],{94915:function(e,t,r){r.r(t),r(81414),r(37666),r(44231),r(26031),r(95822),r(56187),r(38690),r(11908),r(33096),r(89228),r(13227),r(14011),r(11431);var n=r(84881);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==o(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===o(i)?i:String(i)),n)}var i}var u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r;return t=e,(r=[{key:"check",value:function(){if(n.M.supports("htmlaudioautoplay"))return Promise.resolve(!0);var e,t=((e=document.createElement("audio")).classList.add("testMediaPlayerAudio"),e.classList.add("hide"),document.body.appendChild(e),e.volume=1,e.src="assets/audio/silence.mp3",e);return t.play().finally((function(){!function(e){e.pause(),e.remove()}(t)}))}}])&&i(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.default=new u}}]);