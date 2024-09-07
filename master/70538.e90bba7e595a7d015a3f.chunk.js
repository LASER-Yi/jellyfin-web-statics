/*! For license information please see 70538.e90bba7e595a7d015a3f.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[70538],{70538:function(t,e,r){r.r(e),r.d(e,{default:function(){return O},show:function(){return I}}),r(29305),r(32733),r(51770),r(84701),r(2623),r(44962),r(17731),r(87324),r(89336),r(10849),r(70389),r(36947),r(26437),r(52697),r(78557),r(90076),r(50987),r(83994),r(23630),r(82367);var n,o,i,a=r(22696),l=r.n(a),u=r(63853),c=r(75384),s=r(79754),d=r(86191),f=r(47629),h=r(8566),p=r(10838),v=r(46782),y=r(5898),b='<div class="formDialogHeader"> <button is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1" title="${ButtonBack}"><span class="material-icons arrow_back" aria-hidden="true"></span></button> <h3 class="formDialogHeaderTitle"> ${HeaderUploadSubtitle} </h3> </div> <div class="formDialogContent"> <div class="dialogContentInner"> <form class="uploadSubtitleForm"> <div class="flex align-items-center" style="margin:1.5em 0"> <h2 style="margin:0">${HeaderAddUpdateSubtitle}</h2> <button is="emby-button" type="button" class="raised raised-mini btnBrowse"> <span class="material-icons folder" aria-hidden="true"></span> <span>${Browse}</span> </button> </div> <div> <div class="subtitleEditor-dropZone fieldDescription"> <div id="labelDropSubtitle">${LabelDropSubtitleHere}</div> <output id="subtitleOutput" class="flex align-items-center justify-content-center" style="position:absolute;top:0;left:0;right:0;bottom:0;width:100%"></output> <input type="file" accept=".sub,.srt,.vtt,.ass,.ssa,.mks" id="uploadSubtitle" name="uploadSubtitle" style="position:absolute;top:0;left:0;right:0;bottom:0;width:100%;opacity:0"/> </div> <div id="fldUpload" class="hide"> <br/> <div class="checkboxContainer"> <label> <input type="checkbox" is="emby-checkbox" id="chkIsForced"/> <span>${LabelIsForced}</span> </label> <label> <input type="checkbox" is="emby-checkbox" id="chkIsHearingImpaired"/> <span>${LabelIsHearingImpaired}</span> </label> </div> <div class="selectContainer flex-grow"> <select is="emby-select" id="selectLanguage" required="required" label="${LabelLanguage}"></select> </div> <button is="emby-button" type="submit" class="raised button-submit block"> <span>${Upload}</span> </button> </div> </div> </form> </div> </div> ',m=r(50764),g=(r(10353),r(63001),r(76562));function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function L(){L=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var i=e&&e.prototype instanceof b?e:b,a=Object.create(i.prototype),l=new _(n||[]);return o(a,"_invoke",{value:I(t,r,l)}),a}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var f="suspendedStart",h="suspendedYield",p="executing",v="completed",y={};function b(){}function m(){}function g(){}var S={};c(S,a,(function(){return this}));var x=Object.getPrototypeOf,k=x&&x(x(j([])));k&&k!==r&&n.call(k,a)&&(S=k);var E=g.prototype=b.prototype=Object.create(S);function A(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function F(t,e){function r(o,i,a,l){var u=d(t[o],t,i);if("throw"!==u.type){var c=u.arg,s=c.value;return s&&"object"==w(s)&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,a,l)}),(function(t){r("throw",t,a,l)})):e.resolve(s).then((function(t){c.value=t,a(c)}),(function(t){return r("throw",t,a,l)}))}l(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function I(e,r,n){var o=f;return function(i,a){if(o===p)throw Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var l=n.delegate;if(l){var u=O(l,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===f)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var c=d(e,r,n);if("normal"===c.type){if(o=n.done?v:h,c.arg===y)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(o=v,n.method="throw",n.arg=c.arg)}}}function O(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=d(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function q(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function D(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(q,this),this.reset(!0)}function j(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(w(e)+" is not iterable")}return m.prototype=g,o(E,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:m,configurable:!0}),m.displayName=c(g,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},A(F.prototype),c(F.prototype,l,(function(){return this})),e.AsyncIterator=F,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new F(s(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},A(E),c(E,u,"Generator"),c(E,a,(function(){return this})),c(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=j,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(D),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return l.type="throw",l.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],l=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),D(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;D(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:j(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}function S(t,e,r,n,o,i,a){try{var l=t[i](a),u=l.value}catch(t){return void r(t)}l.done?e(u):Promise.resolve(u).then(n,o)}var x=!1;function k(t){h.Ay.hide();var e=t.target.error;e.code!==e.ABORT_ERR&&(0,m.A)(y.Ay.translate("MessageFileReadError"))}function E(t){return t&&[".sub",".srt",".vtt",".ass",".ssa",".mks"].some((function(e){return t.name.endsWith(e)}))}function A(t){return F.apply(this,arguments)}function F(){var t;return t=L().mark((function t(e){var r,a,l,p,v,b,w,S;return L().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(E(r=i)){t.next=5;break}return(0,m.A)(y.Ay.translate("MessageSubtitleFileTypeAllowed")),e.preventDefault(),t.abrupt("return");case 5:return h.Ay.show(),a=f.Ay.parentWithClass(this,"dialog"),l=a.querySelector("#selectLanguage").value,p=a.querySelector("#chkIsForced").checked,v=a.querySelector("#chkIsHearingImpaired").checked,b=(0,u.L)((0,c.C)(d.A.getApiClient(o))),t.next=13,(0,g.W)(r);case 13:w=t.sent,S=r.name.substring(r.name.lastIndexOf(".")+1).toLowerCase(),b.uploadSubtitle({itemId:n,uploadSubtitleDto:{Data:w,Language:l,IsForced:p,Format:S,IsHearingImpaired:v}}).then((function(){a.querySelector("#uploadSubtitle").value="",h.Ay.hide(),x=!0,s.default.close(a)})),e.preventDefault();case 17:case"end":return t.stop()}}),t,this)})),F=function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){S(i,n,o,a,l,"next",t)}function l(t){S(i,n,o,a,l,"throw",t)}a(void 0)}))},F.apply(this,arguments)}function I(t){return new Promise((function(e){x=!1,function(t,e){n=(t=t||{}).itemId,o=t.serverId;var r={removeOnClose:!0,scrollY:!1};v.A.tv?r.size="fullscreen":r.size="small";var a,u=s.default.createDialog(r);u.classList.add("formDialog"),u.classList.add("subtitleUploaderDialog"),u.innerHTML=y.Ay.translateHtml(b,"core"),v.A.tv&&p.default.centerFocus.on(u,!1),u.addEventListener("close",(function(){v.A.tv&&p.default.centerFocus.off(u,!1),h.Ay.hide(),e(x)})),s.default.open(u),(a=u).querySelector(".uploadSubtitleForm").addEventListener("submit",A),a.querySelector("#uploadSubtitle").addEventListener("change",(function(){!function(t,e){var r=e[0];if(!E(r))return t.querySelector("#subtitleOutput").innerHTML="",t.querySelector("#fldUpload").classList.add("hide"),t.querySelector("#labelDropSubtitle").classList.remove("hide"),void(i=null);i=r;var n,o=new FileReader;o.onerror=k,o.onloadstart=function(){t.querySelector("#fldUpload").classList.add("hide")},o.onabort=function(){h.Ay.hide(),console.debug("File read cancelled")},o.onload=(n=r,function(){var e='<div><span class="material-icons subtitles" aria-hidden="true" style="transform: translateY(25%);"></span><span>'.concat(l()(n.name),"</span></div>");t.querySelector("#subtitleOutput").innerHTML=e,t.querySelector("#fldUpload").classList.remove("hide"),t.querySelector("#labelDropSubtitle").classList.add("hide")}),o.readAsDataURL(r)}(a,this.files)})),a.querySelector(".btnBrowse").addEventListener("click",(function(){a.querySelector("#uploadSubtitle").click()}));var c=u.querySelector("#selectLanguage");t.languages&&(c.innerHTML=t.languages.list||null,c.value=t.languages.value||null),u.querySelector(".btnCancel").addEventListener("click",(function(){s.default.close(u)}))}(t,e)}))}var O={show:I}},76562:function(t,e,r){function n(t){return new Promise((function(e,r){var n=new FileReader;n.onload=function(t){var r,n,o,i=null===(o=null===(n=null===(r=t.target)||void 0===r?void 0:r.result)||void 0===n?void 0:n.split)||void 0===o?void 0:o.call(n,",")[1];e(i)},n.onerror=r,n.readAsDataURL(t)}))}function o(t){return new Promise((function(e,r){var n=new FileReader;n.onload=function(t){var r,n=null===(r=t.target)||void 0===r?void 0:r.result;e(n)},n.onerror=r,n.readAsText(t)}))}r.d(e,{Q:function(){return o},W:function(){return n}})}}]);