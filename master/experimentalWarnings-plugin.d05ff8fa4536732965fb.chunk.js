"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[65004],{6390:function(e,t,r){r.r(t),r(63238),r(61418),r(19068),r(87211),r(25901),r(92189),r(95163),r(99785),r(91047),r(5769),r(17460),r(14078);var n=r(94994),a=r(60934),o=r(84881),i=r(37099),l=r(20484);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,a=function(e,t){if("object"!==u(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===u(a)?a:String(a)),n)}var a}function s(e,t,r){if(o.M.supports(r))return Promise.resolve();var n=new Date;return t+=n.getFullYear()+"-w"+function(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate())),r=t.getUTCDay()||7;t.setUTCDate(t.getUTCDate()+4-r);var n=new Date(Date.UTC(t.getUTCFullYear(),0,1));return Math.ceil(((t-n)/864e5+1)/7)}(n),"1"===a.get(t,!1)?Promise.resolve():(a.set(t,"1",!1),(0,i.Z)(e))}var c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name="Experimental playback warnings",this.type=l.z.PreplayIntercept,this.id="expirementalplaybackwarnings"}var t,r;return t=e,(r=[{key:"intercept",value:function(e){var t=e.item;return t?"Iso"===t.VideoType?s(n.ZP.translate("UnsupportedPlayback"),"isoexpirementalinfo","nativeisoplayback"):"BluRay"===t.VideoType?s(n.ZP.translate("UnsupportedPlayback"),"blurayexpirementalinfo","nativeblurayplayback"):"Dvd"===t.VideoType?s(n.ZP.translate("UnsupportedPlayback"),"dvdexpirementalinfo","nativedvdplayback"):Promise.resolve():Promise.resolve()}}])&&p(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.default=c}}]);