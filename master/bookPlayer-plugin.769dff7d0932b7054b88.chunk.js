/*! For license information please see bookPlayer-plugin.769dff7d0932b7054b88.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7634,414,74742],{46353:function(e,t,n){n.r(t),n.d(t,{BookPlayer:function(){return g}}),n(99785),n(91047),n(98521),n(6798),n(82923),n(21897),n(12274),n(55849),n(50987),n(60190),n(72410),n(5769),n(63238),n(61418),n(17460),n(14078),n(95289),n(19068),n(87211),n(25901),n(92189),n(95163);var r=n(28540),o=n(84280),i=n(93355),a=n(18613),l=n(10341),s=n(65055),u=n(72365),c=n(94994),h=n(60934),d=n(81643),f=(n(61414),n(6453));function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function y(){y=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,n){return e[t]=n}}function u(e,t,n,o){var i=t&&t.prototype instanceof d?t:d,a=Object.create(i.prototype),l=new C(o||[]);return r(a,"_invoke",{value:L(e,n,l)}),a}function c(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var h={};function d(){}function f(){}function p(){}var m={};s(m,i,(function(){return this}));var b=Object.getPrototypeOf,g=b&&b(b(T([])));g&&g!==t&&n.call(g,i)&&(m=g);var k=p.prototype=d.prototype=Object.create(m);function E(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){function o(r,i,a,l){var s=c(e[r],e,i);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"==v(h)&&n.call(h,"__await")?t.resolve(h.__await).then((function(e){o("next",e,a,l)}),(function(e){o("throw",e,a,l)})):t.resolve(h).then((function(e){u.value=e,a(u)}),(function(e){return o("throw",e,a,l)}))}l(s.arg)}var i;r(this,"_invoke",{value:function(e,n){function r(){return new t((function(t,r){o(e,n,t,r)}))}return i=i?i.then(r,r):r()}})}function L(e,t,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var l=S(a,n);if(l){if(l===h)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=c(e,t,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}function S(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,S(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var o=c(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,h;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function T(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:B}}function B(){return{value:void 0,done:!0}}return f.prototype=p,r(k,"constructor",{value:p,configurable:!0}),r(p,"constructor",{value:f,configurable:!0}),f.displayName=s(p,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,s(e,l,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(w.prototype),s(w.prototype,a,(function(){return this})),e.AsyncIterator=w,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new w(u(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(k),s(k,l,"Generator"),s(k,i,(function(){return this})),s(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=T,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(P),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(l&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),P(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:T(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},e}function p(e,t,n,r,o,i,a){try{var l=e[i](a),s=l.value}catch(e){return void n(e)}l.done?t(s):Promise.resolve(s).then(r,o)}function m(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){p(i,r,o,a,l,"next",e)}function l(e){p(i,r,o,a,l,"throw",e)}a(void 0)}))}}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==v(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t);if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key,"string"),"symbol"===v(o)?o:String(o)),r)}var o}var g=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name="Book Player",this.type="mediaplayer",this.id="bookplayer",this.priority=1,this.onDialogClosed=this.onDialogClosed.bind(this),this.openTableOfContents=this.openTableOfContents.bind(this),this.previous=this.previous.bind(this),this.next=this.next.bind(this),this.onWindowKeyUp=this.onWindowKeyUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this)}var t,v;return t=e,(v=[{key:"play",value:function(e){this.progress=0,this.cancellationToken=!1,this.loaded=!1,r.ZP.show();var t=this.createMediaElement();return this.setCurrentSrc(t,e)}},{key:"stop",value:function(){this.unbindEvents();var e={src:this.item};d.Z.trigger(this,"stopped",[e]);var t=this.mediaElement,n=this.tocElement,o=this.rendition;t&&(i.default.close(t),this.mediaElement=null),n&&(n.destroy(),this.tocElement=null),o&&o.destroy(),r.ZP.hide(),this.cancellationToken=!0}},{key:"destroy",value:function(){}},{key:"currentItem",value:function(){return this.item}},{key:"currentTime",value:function(){return 1e3*this.progress}},{key:"duration",value:function(){return 1e3}},{key:"getBufferedRanges",value:function(){return[{start:0,end:1e7}]}},{key:"volume",value:function(){return 100}},{key:"isMuted",value:function(){return!1}},{key:"paused",value:function(){return!1}},{key:"seekable",value:function(){return!0}},{key:"onWindowKeyUp",value:function(e){var t=o.ZP.getKeyName(e);if(this.loaded)switch(t){case"l":case"ArrowRight":case"Right":this.next();break;case"j":case"ArrowLeft":case"Left":this.previous();break;case"Escape":this.tocElement?this.tocElement.destroy():this.stop()}}},{key:"onTouchStart",value:function(e){this.loaded&&e.touches&&0!==e.touches.length&&(e.touches[0].clientX%u.ZP.getWindowSize().innerWidth<u.ZP.getWindowSize().innerWidth/2?this.previous():this.next())}},{key:"onDialogClosed",value:function(){this.stop()}},{key:"bindMediaElementEvents",value:function(){var e,t,n=this.mediaElement;n.addEventListener("close",this.onDialogClosed,{once:!0}),n.querySelector("#btnBookplayerExit").addEventListener("click",this.onDialogClosed,{once:!0}),n.querySelector("#btnBookplayerToc").addEventListener("click",this.openTableOfContents),n.querySelector("#btnBookplayerFullscreen").addEventListener("click",this.toggleFullscreen),null===(e=n.querySelector("#btnBookplayerPrev"))||void 0===e||e.addEventListener("click",this.previous),null===(t=n.querySelector("#btnBookplayerNext"))||void 0===t||t.addEventListener("click",this.next)}},{key:"bindEvents",value:function(){this.bindMediaElementEvents(),document.addEventListener("keyup",this.onWindowKeyUp),this.rendition.on("touchstart",this.onTouchStart),this.rendition.on("keyup",this.onWindowKeyUp)}},{key:"unbindMediaElementEvents",value:function(){var e,t,n=this.mediaElement;n.removeEventListener("close",this.onDialogClosed),n.querySelector("#btnBookplayerExit").removeEventListener("click",this.onDialogClosed),n.querySelector("#btnBookplayerToc").removeEventListener("click",this.openTableOfContents),n.querySelector("#btnBookplayerFullscreen").removeEventListener("click",this.toggleFullscreen),null===(e=n.querySelector("#btnBookplayerPrev"))||void 0===e||e.removeEventListener("click",this.previous),null===(t=n.querySelector("#btnBookplayerNext"))||void 0===t||t.removeEventListener("click",this.next)}},{key:"unbindEvents",value:function(){var e,t;this.mediaElement&&this.unbindMediaElementEvents(),document.removeEventListener("keyup",this.onWindowKeyUp),null===(e=this.rendition)||void 0===e||e.off("touchstart",this.onTouchStart),null===(t=this.rendition)||void 0===t||t.off("keyup",this.onWindowKeyUp)}},{key:"openTableOfContents",value:function(){this.loaded&&(this.tocElement=new s.default(this))}},{key:"toggleFullscreen",value:function(){if(l.Z.isEnabled){var e=document.querySelector("#btnBookplayerFullscreen .material-icons");e.classList.remove(l.Z.isFullscreen?"fullscreen_exit":"fullscreen"),e.classList.add(l.Z.isFullscreen?"fullscreen":"fullscreen_exit"),l.Z.toggle()}}},{key:"previous",value:function(e){null==e||e.preventDefault(),this.rendition&&("rtl"===this.rendition.book.package.metadata.direction?this.rendition.next():this.rendition.prev())}},{key:"next",value:function(e){null==e||e.preventDefault(),this.rendition&&("rtl"===this.rendition.book.package.metadata.direction?this.rendition.prev():this.rendition.next())}},{key:"createMediaElement",value:function(){var e=this.mediaElement;return e||((e=document.getElementById("bookPlayer"))||((e=i.default.createDialog({exitAnimationDuration:400,size:"fullscreen",autoFocus:!1,scrollY:!1,exitAnimation:"fadeout",removeOnClose:!0})).id="bookPlayer",e.innerHTML=(0,c.tC)(f.default),i.default.open(e)),this.mediaElement=e,e)}},{key:"setCurrentSrc",value:function(e,t){var o=this,i=t.items[0];this.item=i,this.streamInfo={started:!0,ended:!1,item:this.item,mediaSource:{Id:i.Id}};var s=i.ServerId,u=a.Z.getApiClient(s);return l.Z.isEnabled||(document.getElementById("btnBookplayerFullscreen").display="none"),new Promise((function(e,a){Promise.all([n.e(36369),n.e(10573)]).then(n.t.bind(n,17884,23)).then((function(n){var l=n.default,s=u.getItemDownloadUrl(i.Id),c=l(s,{openAs:"epub"}),f=document.body.clientHeight,v=f-.0425*f,p=c.renderTo("bookPlayerContainer",{width:"100%",height:v,flow:"paginated",allowScriptedContent:!0});return o.currentSrc=s,o.rendition=p,p.themes.register("dark",{body:{color:"#fff"}}),"dark"!==h.theme(void 0)&&null!==h.theme(void 0)||p.themes.select("dark"),p.display().then((function(){var n=document.querySelector(".epub-container");return n.style.opacity="0",o.bindEvents(),o.rendition.book.locations.generate(1024).then(m(y().mark((function i(){var l,s;return y().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(o.cancellationToken&&a(),0==(l=t.startPositionTicks/1e7)){i.next=6;break}return s=c.locations.cfiFromPercentage(l),i.next=6,p.display(s);case 6:return o.loaded=!0,n.style.opacity="",p.on("relocated",(function(e){o.progress=c.locations.percentageFromCfi(e.start.cfi),d.Z.trigger(o,"pause")})),r.ZP.hide(),i.abrupt("return",e());case 11:case"end":return i.stop()}}),i)}))))}),(function(){return console.error("failed to display epub"),a()}))}))}))}},{key:"canPlayMediaType",value:function(e){return"book"===(e||"").toLowerCase()}},{key:"canPlayItem",value:function(e){return e.Path&&e.Path.endsWith("epub")}}])&&b(t.prototype,v),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.default=g},65055:function(e,t,n){n.r(t),n.d(t,{default:function(){return a}}),n(63238),n(55849),n(90938),n(72410),n(23938),n(19068),n(87211),n(25901),n(92189),n(95163),n(99785),n(91047),n(5769),n(17460),n(14078);var r=n(93355);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t);if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key,"string"),"symbol"===o(i)?i:String(i)),r)}var i}var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.bookPlayer=t,this.rendition=t.rendition,this.onDialogClosed=this.onDialogClosed.bind(this),this.createMediaElement()}var t,n;return t=e,(n=[{key:"destroy",value:function(){var e=this.elem;e&&(this.unbindEvents(),r.default.close(e)),this.bookPlayer.tocElement=null}},{key:"bindEvents",value:function(){var e=this.elem;e.addEventListener("close",this.onDialogClosed,{once:!0}),e.querySelector(".btnBookplayerTocClose").addEventListener("click",this.onDialogClosed,{once:!0})}},{key:"unbindEvents",value:function(){var e=this.elem;e.removeEventListener("close",this.onDialogClosed),e.querySelector(".btnBookplayerTocClose").removeEventListener("click",this.onDialogClosed)}},{key:"onDialogClosed",value:function(){this.destroy()}},{key:"replaceLinks",value:function(e,t){e.querySelectorAll("a[href]").forEach((function(e){var n=e.getAttribute("href");e.onclick=function(){return t(n),!1}}))}},{key:"createMediaElement",value:function(){var e=this,t=this.rendition,n=r.default.createDialog({size:"small",autoFocus:!1,removeOnClose:!0});n.id="dialogToc";var o='<div class="topRightActionButtons">';o+='<button is="paper-icon-button-light" class="autoSize bookplayerButton btnBookplayerTocClose hide-mouse-idle-tv" tabindex="-1"><span class="material-icons bookplayerButtonIcon close" aria-hidden="true"></span></button>',o+="</div>",o+='<ul class="toc">',t.book.navigation.forEach((function(e){o+="<li>";var n=e.href.startsWith("../")?e.href.slice(3):e.href;o+='<a href="'.concat(t.book.path.directory+n,'">').concat(e.label,"</a>"),o+="</li>"})),o+="</ul>",n.innerHTML=o,this.replaceLinks(n,(function(n){var r=t.book.path.relative(n);t.display(r),e.destroy()})),this.elem=n,this.bindEvents(),r.default.open(n)}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}()},6453:function(e,t,n){n.r(t),t.default='<div class="topButtons"> <button is="paper-icon-button-light" id="btnBookplayerToc" class="autoSize bookplayerButton hide-mouse-idle-tv" tabindex="-1"> <span class="material-icons bookplayerButtonIcon toc" aria-hidden="true"></span> </button> <button is="paper-icon-button-light" id="btnBookplayerExit" class="autoSize bookplayerButton hide-mouse-idle-tv" tabindex="-1"> <span class="material-icons bookplayerButtonIcon close" aria-hidden="true"></span> </button> <button is="paper-icon-button-light" id="btnBookplayerFullscreen" class="autoSize bookplayerButton hide-mouse-idle-tv" tabindex="-1"> <span class="material-icons bookplayerButtonIcon fullscreen" aria-hidden="true"></span> </button> </div> <div id="bookPlayerContainer" class="bookPlayerContainer"></div> '}}]);