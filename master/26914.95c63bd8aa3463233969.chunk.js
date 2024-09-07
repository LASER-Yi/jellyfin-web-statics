/*! For license information please see 26914.95c63bd8aa3463233969.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[26914],{26914:function(t,e,r){r.r(e),r.d(e,{default:function(){return F},show:function(){return _}}),r(29305),r(32733),r(51770),r(84701),r(2623),r(44962),r(87324),r(89336),r(10849),r(70389),r(36947),r(26437),r(52697),r(78557),r(90076),r(50987),r(83994),r(23630),r(82367);var n,o,i,a=r(22696),c=r.n(a),l=r(76229),u=r(75384),s=r(79754),f=r(86191),d=r(47629),h=r(8566),p=r(10838),y=r(46782),v=r(5898),m='<div class="formDialogHeader"> <button is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1" title="${ButtonBack}"><span class="material-icons arrow_back" aria-hidden="true"></span></button> <h3 class="formDialogHeaderTitle"> ${HeaderUploadLyrics} </h3> </div> <div class="formDialogContent"> <div class="dialogContentInner"> <form class="uploadLyricsForm"> <div class="flex align-items-center" style="margin:1.5em 0"> <h2 style="margin:0">${HeaderAddLyrics}</h2> <button is="emby-button" type="button" class="raised raised-mini btnBrowse"> <span class="material-icons folder" aria-hidden="true"></span> <span>${Browse}</span> </button> </div> <div> <div class="lyricsEditor-dropZone fieldDescription"> <div id="labelDropLyrics">${LabelDropLyricsHere}</div> <output id="lyricsOutput" class="flex align-items-center justify-content-center" style="position:absolute;top:0;left:0;right:0;bottom:0;width:100%"></output> <input type="file" accept=".lrc,.txt" id="uploadLyrics" name="uploadLyrics" style="position:absolute;top:0;left:0;right:0;bottom:0;width:100%;opacity:0"/> </div> <div id="fldUpload" class="hide"> <br/> <button is="emby-button" type="submit" class="raised button-submit block"> <span>${Upload}</span> </button> </div> </div> </form> </div> </div> ',g=r(50764),b=(r(10353),r(63001),r(76562));function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function L(){L=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var i=e&&e.prototype instanceof m?e:m,a=Object.create(i.prototype),c=new q(n||[]);return o(a,"_invoke",{value:_(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var d="suspendedStart",h="suspendedYield",p="executing",y="completed",v={};function m(){}function g(){}function b(){}var x={};u(x,a,(function(){return this}));var E=Object.getPrototypeOf,S=E&&E(E(T([])));S&&S!==r&&n.call(S,a)&&(x=S);var A=b.prototype=m.prototype=Object.create(x);function k(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,i,a,c){var l=f(t[o],t,i);if("throw"!==l.type){var u=l.arg,s=u.value;return s&&"object"==w(s)&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(s).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}))}c(l.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function _(e,r,n){var o=d;return function(i,a){if(o===p)throw Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var l=F(c,n);if(l){if(l===v)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var u=f(e,r,n);if("normal"===u.type){if(o=n.done?y:h,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=y,n.method="throw",n.arg=u.arg)}}}function F(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,F(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function D(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function q(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(w(e)+" is not iterable")}return g.prototype=b,o(A,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:g,configurable:!0}),g.displayName=u(b,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,u(t,l,"GeneratorFunction")),t.prototype=Object.create(A),t},e.awrap=function(t){return{__await:t}},k(O.prototype),u(O.prototype,c,(function(){return this})),e.AsyncIterator=O,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new O(s(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(A),u(A,l,"Generator"),u(A,a,(function(){return this})),u(A,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,q.prototype={constructor:q,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(D),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var l=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(l&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),D(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;D(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}function x(t,e,r,n,o,i,a){try{var c=t[i](a),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,o)}var E=!1;function S(t){h.Ay.hide();var e=t.target.error;e.code!==e.ABORT_ERR&&(0,g.A)(v.Ay.translate("MessageFileReadError"))}function A(t){return t&&[".lrc",".txt"].some((function(e){return t.name.endsWith(e)}))}function k(t){return O.apply(this,arguments)}function O(){var t;return t=L().mark((function t(e){var r,a,c,p,y;return L().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),A(r=i)){t.next=5;break}return(0,g.A)(v.Ay.translate("MessageLyricsFileTypeAllowed")),t.abrupt("return");case 5:return h.Ay.show(),a=d.Ay.parentWithClass(this,"dialog"),c=(0,u.C)(f.A.getApiClient(o)),p=(0,l.t)(c),t.next=11,(0,b.Q)(r);case 11:y=t.sent,p.uploadLyrics({itemId:n,fileName:r.name,body:y}).then((function(){a.querySelector("#uploadLyrics").value="",h.Ay.hide(),E=!0,s.default.close(a)}));case 13:case"end":return t.stop()}}),t,this)})),O=function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){x(i,n,o,a,c,"next",t)}function c(t){x(i,n,o,a,c,"throw",t)}a(void 0)}))},O.apply(this,arguments)}function _(t){return new Promise((function(e){E=!1,function(t,e){n=(t=t||{}).itemId,o=t.serverId;var r={removeOnClose:!0,scrollY:!1};y.A.tv?r.size="fullscreen":r.size="small";var a,l=s.default.createDialog(r);l.classList.add("formDialog"),l.classList.add("lyricsUploaderDialog"),l.innerHTML=v.Ay.translateHtml(m,"core"),y.A.tv&&p.default.centerFocus.on(l,!1),l.addEventListener("close",(function(){y.A.tv&&p.default.centerFocus.off(l,!1),h.Ay.hide(),e(E)})),s.default.open(l),(a=l).querySelector(".uploadLyricsForm").addEventListener("submit",k),a.querySelector("#uploadLyrics").addEventListener("change",(function(){!function(t,e){var r=e[0];if(!A(r))return t.querySelector("#lyricsOutput").innerHTML="",t.querySelector("#fldUpload").classList.add("hide"),t.querySelector("#labelDropLyrics").classList.remove("hide"),void(i=null);i=r;var n,o=new FileReader;o.onerror=S,o.onloadstart=function(){t.querySelector("#fldUpload").classList.add("hide")},o.onabort=function(){h.Ay.hide(),console.debug("File read cancelled")},o.onload=(n=r,function(){var e='<div><span class="material-icons lyrics" aria-hidden="true" style="transform: translateY(25%);"></span><span>'.concat(c()(n.name),"</span></div>");t.querySelector("#lyricsOutput").innerHTML=e,t.querySelector("#fldUpload").classList.remove("hide"),t.querySelector("#labelDropLyrics").classList.add("hide")}),o.readAsDataURL(r)}(a,this.files)})),a.querySelector(".btnBrowse").addEventListener("click",(function(){a.querySelector("#uploadLyrics").click()})),l.querySelector(".btnCancel").addEventListener("click",(function(){s.default.close(l)}))}(t,e)}))}var F={show:_}},76562:function(t,e,r){function n(t){return new Promise((function(e,r){var n=new FileReader;n.onload=function(t){var r,n,o,i=null===(o=null===(n=null===(r=t.target)||void 0===r?void 0:r.result)||void 0===n?void 0:n.split)||void 0===o?void 0:o.call(n,",")[1];e(i)},n.onerror=r,n.readAsDataURL(t)}))}function o(t){return new Promise((function(e,r){var n=new FileReader;n.onload=function(t){var r,n=null===(r=t.target)||void 0===r?void 0:r.result;e(n)},n.onerror=r,n.readAsText(t)}))}r.d(e,{Q:function(){return o},W:function(){return n}})}}]);