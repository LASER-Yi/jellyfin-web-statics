/*! For license information please see 36542.ec23e2db3f06f357c693.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[36542],{36542:function(t,e,r){r.r(e),r(81414),r(37666),r(26031),r(95822),r(56187),r(38690),r(11908),r(33096),r(89228),r(13227),r(14011),r(11431),r(9883),r(70753),r(61632),r(77337),r(39574),r(47134),r(43908),r(91162),r(88646);var n=r(72365),o=r(2513),i=r(74131),a=r(70350),u=r(30325),c=r(34643),s=r(94994),l=r(21776);function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function h(){h=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof b?e:b,a=Object.create(i.prototype),u=new D(n||[]);return o(a,"_invoke",{value:k(t,r,u)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var d="suspendedStart",y="suspendedYield",v="executing",m="completed",g={};function b(){}function w(){}function x(){}var L={};s(L,a,(function(){return this}));var E=Object.getPrototypeOf,N=E&&E(E(H([])));N&&N!==r&&n.call(N,a)&&(L=N);var T=x.prototype=b.prototype=Object.create(L);function P(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(o,i,a,u){var c=p(t[o],t,i);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"==f(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,u)}))}u(c.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function k(e,r,n){var o=d;return function(i,a){if(o===v)throw new Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var u=n.delegate;if(u){var c=_(u,n);if(c){if(c===g)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=p(e,r,n);if("normal"===s.type){if(o=n.done?m:y,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function _(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,_(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=p(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function D(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function H(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(f(e)+" is not iterable")}return w.prototype=x,o(T,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:w,configurable:!0}),w.displayName=s(x,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,s(t,c,"GeneratorFunction")),t.prototype=Object.create(T),t},e.awrap=function(t){return{__await:t}},P(S.prototype),s(S.prototype,u,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new S(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},P(T),s(T,c,"Generator"),s(T,a,(function(){return this})),s(T,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=H,D.prototype={constructor:D,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return u.type="throw",u.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:H(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function p(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,d(n.key),n)}}function d(t){var e=function(t,e){if("object"!=f(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==f(e)?e:String(e)}function y(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function v(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){y(i,n,o,a,u,"next",t)}function u(t){y(i,n,o,a,u,"throw",t)}a(void 0)}))}}r(38228);var m=n.ZP.whichTransitionEvent();function g(){var t=this,e=t.options.parent,r=Math.max(Math.round(k(t)/1e3),0);console.debug("up next seconds remaining: "+r);var n='<span class="upNextDialog-countdownText">'+s.ZP.translate("HeaderSecondsValue",r)+"</span>",o="Episode"===t.itemType?s.ZP.translate("HeaderNextEpisodePlayingInValue",n):s.ZP.translate("HeaderNextVideoPlayingInValue",n);e.querySelector(".upNextDialog-nextVideoText").innerHTML=o}function b(t){var e=this,r=e.options.parent;r.querySelector(".upNextDialog-mediainfo").innerHTML=a.ZP.getPrimaryMediaInfoHtml(t,{criticRating:!0,originalAirDate:!1,starRating:!0,subtitles:!1});var n=l.ZP.getDisplayName(t);t.SeriesName&&(n=t.SeriesName+" - "+n),r.querySelector(".upNextDialog-title").innerText=n||"",e.itemType=t.Type,e.show()}function w(t){t._countdownTextTimeout&&(clearInterval(t._countdownTextTimeout),t._countdownTextTimeout=null)}function x(){return L.apply(this,arguments)}function L(){return(L=v(h().mark((function t(){var e,r;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e=this.options)){t.next=6;break}return r=e.player,t.next=5,this.hide();case 5:o.O.nextTrack(r);case 6:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function E(t,e){var r;e.parent.innerHTML=(r="",r+='<div class="flex flex-direction-column flex-grow">',r+='<h2 class="upNextDialog-nextVideoText" style="margin:.25em 0;">&nbsp;</h2>',r+='<h3 class="upNextDialog-title" style="margin:.25em 0 .5em;"></h3>',r+='<div class="flex flex-direction-row upNextDialog-mediainfo">',r+="</div>",r+='<div class="flex flex-direction-row upNextDialog-buttons" style="margin-top:1em;">',r+='<button type="button" is="emby-button" class="raised raised-mini btnStartNow upNextDialog-button">',r+=s.ZP.translate("HeaderStartNow"),r+="</button>",r+='<button type="button" is="emby-button" class="raised raised-mini btnHide upNextDialog-button">',r+=s.ZP.translate("Hide"),r+="</button>",(r+="</div>")+"</div>"),e.parent.classList.add("hide"),e.parent.classList.add("upNextDialog"),e.parent.classList.add("upNextDialog-hidden"),b.call(t,e.nextItem),e.parent.querySelector(".btnHide").addEventListener("click",t.hide.bind(t)),e.parent.querySelector(".btnStartNow").addEventListener("click",x.bind(t))}function N(t,e){var r=t._onHideAnimationComplete;r&&n.ZP.removeEventListener(e,m,r,{once:!0})}function T(t){var e=t.target;e.classList.add("hide"),N(this,e),i.Z.trigger(this,"hide")}function P(){return S.apply(this,arguments)}function S(){return(S=v(h().mark((function t(){var e,r,o,i;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this,w(this),e.options){t.next=4;break}return t.abrupt("return");case 4:if(r=e.options.parent){t.next=7;break}return t.abrupt("return");case 7:if(N(this,r),!r.classList.contains("upNextDialog-hidden")){t.next=10;break}return t.abrupt("return");case 10:return o=T.bind(e),e._onHideAnimationComplete=o,t.next=14,new Promise((function(t){n.ZP.addEventListener(r,m,t,{once:!0}),r.offsetWidth,r.classList.add("upNextDialog-hidden")}));case 14:i=t.sent,e._onHideAnimationComplete(i);case 16:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function k(t){var e=t.options;if(e){var r=o.O.duration(e.player);if(r){var n=r-1e4*o.O.currentTime(e.player);return Math.round(n/1e4)}}return 0}var _=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=e,E(this,e)}var e,r,n;return e=t,r=[{key:"show",value:function(){var t,e=this.options.parent;N(this,e),e.classList.remove("hide"),e.offsetWidth,e.classList.remove("upNextDialog-hidden"),u.Z.tv&&setTimeout((function(){c.Z.focus(e.querySelector(".btnStartNow"))}),50),k(t=this)<=0||(g.call(t),w(t),t._countdownTextTimeout=setInterval(g.bind(t),400))}},{key:"hide",value:(n=v(h().mark((function t(){return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.bind(this)();case 2:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"destroy",value:function(){P.call(this),this.options=null,this.itemType=null}}],r&&p(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();e.default=_}}]);