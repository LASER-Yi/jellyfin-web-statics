"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[90311,30531,85624,83264,81038],{81038:function(e,t,n){n.r(t),n.d(t,{default:function(){return p},fillImage:function(){return f},fillImages:function(){return y},getPrimaryImageAspectRatio:function(){return g},lazyChildren:function(){return v},lazyImage:function(){return c},setLazyImage:function(){return b}}),n(98010),n(63238),n(52077),n(911),n(72410),n(69217),n(15610),n(17460),n(25901),n(92189),n(91047),n(5769),n(14078);var r=n(31338),a=n(60934);function i(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){l=!0,i=e},f:function(){try{s||null==n.return||n.return()}finally{if(l)throw i}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var s=new function(){return new Worker(n.p+"blurhash.worker.bundle.js")},l={};function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.getAttribute("data-src");t&&m(e,t)}function u(e,t,n,r){var a=document.createElement("canvas");a.setAttribute("aria-hidden","true"),a.width=n,a.height=r;var i=a.getContext("2d"),o=i.createImageData(n,r);o.data.set(t),i.putImageData(o,0,0),requestAnimationFrame((function(){a.classList.add("blurhash-canvas"),e.parentNode.insertBefore(a,e),e.classList.add("blurhashed"),e.removeAttribute("data-blurhash")}))}function d(e,t){try{l[t]=(l[t]||[]).filter((function(t){return t!==e})),l[t].push(e),s.postMessage({hash:t,width:20,height:20})}catch(t){return console.error(t),void e.classList.add("non-blurhashable")}}function f(e){if(!e)throw new Error("entry cannot be null");var t,n=e.target;t=n?n.getAttribute("data-src"):e,e.isIntersecting?t&&m(n,t):t||function(e){var t,n;e.removeEventListener("animationend",h);var r,a=e.previousSibling;"CANVAS"===(null==a?void 0:a.tagName)&&a.classList.remove("lazy-hidden"),null===(t=e.parentNode)||void 0===t||null===(n=t.querySelector(".cardPadder"))||void 0===n||n.classList.remove("lazy-hidden-children"),"IMG"!==e.tagName?(r=e.style.backgroundImage.slice(4,-1).replace(/"/g,""),e.style.backgroundImage="none"):(r=e.getAttribute("src"),e.setAttribute("src","")),e.setAttribute("data-src",r),e.classList.remove("lazy-image-fadein-fast","lazy-image-fadein"),e.classList.add("lazy-hidden")}(n)}function h(e){var t=e.target;requestAnimationFrame((function(){var e,n,r=t.previousSibling;t.classList.contains("blurhashed")&&"CANVAS"===(null==r?void 0:r.tagName)&&r.classList.add("lazy-hidden"),null===(e=t.parentNode)||void 0===e||null===(n=e.querySelector(".cardPadder"))||void 0===n||n.classList.add("lazy-hidden-children")})),t.removeEventListener("animationend",h)}function m(e,t){if(void 0===t)throw new TypeError("url cannot be undefined");var n=new Image;n.src=t,e.classList.add("lazy-hidden"),e.addEventListener("animationend",h),n.addEventListener("load",(function(){requestAnimationFrame((function(){"IMG"!==e.tagName?e.style.backgroundImage="url('"+t+"')":e.setAttribute("src",t),e.removeAttribute("data-src"),a.enableFastFadein()?e.classList.add("lazy-image-fadein-fast"):e.classList.add("lazy-image-fadein"),e.classList.remove("lazy-hidden")}))}))}function v(e){if(a.enableBlurhash()){var t,n=i(e.querySelectorAll(".lazy"));try{for(n.s();!(t=n.n()).done;){var o=t.value,s=o.getAttribute("data-blurhash");!o.classList.contains("blurhashed","non-blurhashable")&&s?d(o,s):s||o.classList.contains("blurhashed")||o.classList.add("non-blurhashable")}}catch(e){n.e(e)}finally{n.f()}}r.NC(e,f)}function g(e){for(var t=[],n=0,r=e.length;n<r;n++){var a=e[n].PrimaryImageAspectRatio||0;a&&(t[t.length]=a)}if(!t.length)return null;t.sort((function(e,t){return e-t}));var i,o=Math.floor(t.length/2);i=t.length%2?t[o]:(t[o-1]+t[o])/2;var s=2/3;if(Math.abs(s-i)<=.15)return s;var l=16/9;if(Math.abs(l-i)<=.2)return l;if(Math.abs(1-i)<=.15)return 1;var c=4/3;return Math.abs(c-i)<=.15?c:i}function y(e){for(var t=0,n=e.length;t<n;t++)f(e[0])}function b(e,t){e.classList.add("lazy"),e.setAttribute("data-src",t),c(e)}s.addEventListener("message",(function(e){var t=e.data,n=t.pixels,r=t.hsh,a=t.width,o=t.height,s=l[r];if(null!=s&&s.length){var c,d=i(s);try{for(d.s();!(c=d.n()).done;)u(c.value,n,a,o)}catch(e){d.e(e)}finally{d.f()}delete l[r]}}));var p={setLazyImage:b,fillImages:y,fillImage:f,lazyImage:c,lazyChildren:v,getPrimaryImageAspectRatio:g}},31338:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,"string");if("object"!==r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(a.key),"symbol"===r(i)?i:String(i)),a)}var i}n.d(t,{NC:function(){return o}}),n(63238),n(55849),n(15610),n(17460),n(19068),n(87211),n(25901),n(92189),n(95163),n(99785),n(91047),n(5769),n(14078);var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=t}var t,n;return t=e,(n=[{key:"createObserver",value:function(){var e=this.options.callback,t=new IntersectionObserver((function(t){t.forEach((function(t){e(t)}))}),{rootMargin:"50%",threshold:0});this.observer=t}},{key:"addElements",value:function(e){var t=this.observer;t||(this.createObserver(),t=this.observer),Array.from(e).forEach((function(e){t.observe(e)}))}},{key:"destroyObserver",value:function(){var e=this.observer;e&&(e.disconnect(),this.observer=null)}},{key:"destroy",value:function(){this.destroyObserver(),this.options=null}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){!function(e,t,n){e.length&&new i({callback:n}).addElements(e)}(e.getElementsByClassName("lazy"),0,t)}t.ZP={LazyLoader:i,lazyChildren:o}},30531:function(e,t,n){n.r(t),n(63238),n(61418);var r=n(94994),a=n(28540),i=n(18613),o=n(56663),s=n(3137),l=n(56809);function c(e,t,n,i){return a.ZP.show(),e.getItem(e.getCurrentUserId(),n).then((function(s){return s.IsSeries?e.getNewLiveTvTimerDefaults({programId:n}).then((function(t){return e.createLiveTvSeriesTimer(t).then((function(){a.ZP.hide(),(0,o.Z)(r.ZP.translate("SeriesRecordingScheduled"))}))})):i?u(t,e.serverId()):d(e.serverId(),t,!0)}))}function u(e,t){return new Promise((function(n,o){(0,s.Z)({text:r.ZP.translate("MessageConfirmRecordingCancellation"),primary:"delete",confirmText:r.ZP.translate("HeaderCancelRecording"),cancelText:r.ZP.translate("HeaderKeepRecording")}).then((function(){a.ZP.show(),d(i.Z.getApiClient(t),e,!0).then(n,o)}),o)}))}function d(e,t,n){return a.ZP.show(),e.cancelLiveTvTimer(t).then((function(){!1!==n&&(a.ZP.hide(),(0,o.Z)(r.ZP.translate("RecordingCancelled")))}))}function f(e,t,n){return a.ZP.show(),e.getNewLiveTvTimerDefaults({programId:t}).then((function(t){return(n?e.createLiveTvSeriesTimer(t):e.createLiveTvTimer(t)).then((function(){a.ZP.hide(),(0,o.Z)(r.ZP.translate("RecordingScheduled"))}))}))}t.default={cancelTimer:d,createRecording:f,changeRecordingToSeries:c,toggleRecording:function(e,t,n,s,u){var h=i.Z.getApiClient(e),m=n&&"Cancelled"!==s;return u&&m?function(e,t,n,s,c){return new Promise((function(t,u){var f=[];f.push({name:r.ZP.translate("HeaderKeepRecording"),id:"cancel",type:"submit"}),"InProgress"===s?f.push({name:r.ZP.translate("HeaderStopRecording"),id:"canceltimer",type:"cancel"}):f.push({name:r.ZP.translate("HeaderCancelRecording"),id:"canceltimer",type:"cancel"}),f.push({name:r.ZP.translate("HeaderCancelSeries"),id:"cancelseriestimer",type:"cancel"}),l.Z.show({text:r.ZP.translate("MessageConfirmRecordingCancellation"),buttons:f}).then((function(s){var l=i.Z.getApiClient(e);"canceltimer"===s?(a.ZP.show(),d(l,n,!0).then(t,u)):"cancelseriestimer"===s?(a.ZP.show(),l.cancelLiveTvSeriesTimer(c).then((function(){(0,o.Z)(r.ZP.translate("SeriesCancelled")),a.ZP.hide(),t()}),u)):t()}),u)}))}(e,0,n,s,u):m&&t?c(h,n,t,!0):t?f(h,t):Promise.reject()},cancelTimerWithConfirmation:u,cancelSeriesTimerWithConfirmation:function(e,t){return new Promise((function(n,l){(0,s.Z)({text:r.ZP.translate("MessageConfirmRecordingCancellation"),primary:"delete",confirmText:r.ZP.translate("HeaderCancelSeries"),cancelText:r.ZP.translate("HeaderKeepSeries")}).then((function(){a.ZP.show(),i.Z.getApiClient(t).cancelLiveTvSeriesTimer(e).then((function(){(0,o.Z)(r.ZP.translate("SeriesCancelled")),a.ZP.hide(),n()}),l)}),l)}))}}}}]);