/*! For license information please see session-login.e6079bb3f86654eb5a02.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7051],{76933:function(t,e,r){r.r(e),r.d(e,{default:function(){return E}}),r(25901),r(92189),r(91047),r(98521),r(6798),r(82923),r(21897),r(99785),r(12274),r(55849),r(50987),r(60190),r(72410),r(15610),r(52077),r(5769),r(95623),r(23938),r(63238),r(61418),r(17460),r(14078);var n=r(31699),o=r.n(n),a=r(76728),i=r(84881),c=r(59858),u=r(72365),l=r(28540),s=r(30325),d=r(70645),f=r(57366),h=r(94994),v=(r(12291),r(60635)),y=r(18613),p=r(56663),m=r(93355),g=r(37099),b=r(61570);function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function S(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function L(){L=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,a=Object.create(o.prototype),i=new P(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=S(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var s={};function d(){}function f(){}function h(){}var v={};c(v,o,(function(){return this}));var y=Object.getPrototypeOf,p=y&&y(y(q([])));p&&p!==e&&r.call(p,o)&&(v=p);var m=h.prototype=d.prototype=Object.create(v);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function n(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,d=s.value;return d&&"object"==w(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(d).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}var o;this._invoke=function(t,r){function a(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(a,a):a()}}function S(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,S(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function q(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:C}}function C(){return{value:void 0,done:!0}}return f.prototype=h,c(m,"constructor",h),c(h,"constructor",f),f.displayName=c(h,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c(t,i,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},g(b.prototype),c(b.prototype,a,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new b(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},g(m),c(m,i,"Generator"),c(m,o,(function(){return this})),c(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=q,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:q(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}function x(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}var k=!f.Z.slow&&!f.Z.edge;function P(t,e,r,n){l.ZP.show(),e.authenticateUserByName(r,n).then((function(t){var r=t.User;l.ZP.hide(),q(r.Id,t.AccessToken,e)}),(function(e){if(t.querySelector("#txtManualPassword").value="",l.ZP.hide(),[401,403].includes(e.status)){var r=401===e.status?"MessageInvalidUser":"MessageUnauthorizedUser";(0,p.Z)(h.ZP.translate(r))}else v.ZP.alert({message:h.ZP.translate("MessageUnableToConnectToServer"),title:h.ZP.translate("HeaderConnectionFailure")})}))}function q(t,e,r){v.ZP.onServerChanged(t,e,r),v.ZP.navigate("home.html")}function C(t,e,r){t.querySelector(".chkRememberLogin").checked=c.Z.enableAutoLogin(),t.querySelector(".manualLoginForm").classList.remove("hide"),t.querySelector(".visualLoginForm").classList.add("hide"),t.querySelector(".btnManual").classList.add("hide"),r?t.querySelector("#txtManualPassword").focus():t.querySelector("#txtManualName").focus(),e?t.querySelector(".btnCancel").classList.remove("hide"):t.querySelector(".btnCancel").classList.add("hide")}function E(t,e){function n(){var t=e.serverid;return t?y.Z.getOrCreateApiClient(t):ApiClient}function f(){t.querySelector(".visualLoginForm").classList.remove("hide"),t.querySelector(".manualLoginForm").classList.add("hide"),t.querySelector(".btnManual").classList.remove("hide"),Promise.resolve().then(r.bind(r,87680)).then((function(e){e.default.autoFocus(t)}))}t.querySelector("#divUsers").addEventListener("click",(function(e){var r=u.ZP.parentWithClass(e.target,"card"),o=r?r.querySelector(".cardContent"):null;if(o){var a=t,i=o.getAttribute("data-userid"),c=o.getAttribute("data-username"),l=o.getAttribute("data-haspw");"manual"===i?(a.querySelector("#txtManualName").value="",C(a,!0)):"false"==l?P(a,n(),c,""):(a.querySelector("#txtManualName").value=c,a.querySelector("#txtManualPassword").value="",C(a,!0,!0))}})),t.querySelector(".manualLoginForm").addEventListener("submit",(function(e){c.Z.enableAutoLogin(t.querySelector(".chkRememberLogin").checked);var r=n();return P(t,r,t.querySelector("#txtManualName").value,t.querySelector("#txtManualPassword").value),e.preventDefault(),!1})),t.querySelector(".btnForgotPassword").addEventListener("click",(function(){v.ZP.navigate("forgotpassword.html")})),t.querySelector(".btnCancel").addEventListener("click",f),t.querySelector(".btnQuick").addEventListener("click",(function(){return t=n(),e=t.getUrl("/QuickConnect/Initiate"),t.getJSON(e).then((function(e){if(!e.Secret||!e.Code)return console.error("Malformed quick connect response",e),!1;(0,g.Z)({dialogOptions:{id:"quickConnectAlert"},title:h.ZP.translate("QuickConnect"),text:h.ZP.translate("QuickConnectAuthorizeCode",e.Code)});var r=t.getUrl("/QuickConnect/Connect?Secret="+e.Secret),n=setInterval((function(){t.getJSON(r).then(function(){var e,r=(e=L().mark((function e(r){var o,a;return L().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.Authenticated){e.next=2;break}return e.abrupt("return");case 2:return clearInterval(n),(o=document.getElementById("quickConnectAlert"))&&m.default.close(o),e.next=7,t.quickConnect(r.Secret);case 7:q((a=e.sent).User.Id,a.AccessToken,t);case 9:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(t){x(a,n,o,i,c,"next",t)}function c(t){x(a,n,o,i,c,"throw",t)}i(void 0)}))});return function(t){return r.apply(this,arguments)}}(),(function(t){clearInterval(n);var e=document.getElementById("quickConnectAlert");e&&m.default.close(e),v.ZP.alert({message:h.ZP.translate("QuickConnectDeactivated"),title:h.ZP.translate("HeaderError")}),console.error("Unable to login with quick connect",t)}))}),5e3,r);return!0}),(function(t){return v.ZP.alert({message:h.ZP.translate("QuickConnectNotActive"),title:h.ZP.translate("HeaderError")}),console.error("Quick connect error: ",t),!1})),!1;var t,e})),t.querySelector(".btnManual").addEventListener("click",(function(){t.querySelector("#txtManualName").value="",C(t,!0)})),t.querySelector(".btnSelectServer").addEventListener("click",(function(){v.ZP.selectServer()})),t.addEventListener("viewshow",(function(){l.ZP.show(),d.Z.setTransparentMenu(!0),i.M.supports("multiserver")||t.querySelector(".btnSelectServer").classList.add("hide");var e=n();e.getQuickConnect("Enabled").then((function(e){!0===e&&t.querySelector(".btnQuick").classList.remove("hide")})).catch((function(){console.debug("Failed to get QuickConnect status")})),e.getPublicUsers().then((function(r){r.length?(f(),function(t,e,r){for(var n="",o=0;o<r.length;o++){var a=r[o],i="card squareCard scalableCard squareCard-scalable";s.Z.tv&&(i+=" show-focus",k&&(i+=" show-animation")),n+='<button type="button" class="'+i+'">',n+='<div class="cardBox cardBox-bottompadded">',n+='<div class="cardScalable">',n+='<div class="cardPadder cardPadder-square"></div>',n+='<div class="cardContent" data-haspw="'.concat(a.HasPassword,'" data-username="').concat(a.Name,'" data-userid="').concat(a.Id,'">'),a.PrimaryImageTag?n+='<div class="cardImageContainer coveredImage" style="background-image:url(\''+e.getUserImageUrl(a.Id,{width:300,tag:a.PrimaryImageTag,type:"Primary"})+"');\"></div>":(n+='<div class="cardImage flex align-items-center justify-content-center '.concat(b.default.getDefaultBackgroundClass(),'">'),n+='<span class="material-icons cardImageIcon person" aria-hidden="true"></span>',n+="</div>"),n+="</div>",n+="</div>",n+='<div class="cardFooter visualCardBox-cardFooter">',n+='<div class="cardText singleCardText cardTextCentered">'+a.Name+"</div>",n+="</div>",n+="</div>",n+="</button>"}t.querySelector("#divUsers").innerHTML=n}(t,e,r)):(t.querySelector("#txtManualName").value="",C(t,!1,!1))})).catch().then((function(){l.ZP.hide()})),e.getJSON(e.getUrl("Branding/Configuration")).then((function(e){var r=t.querySelector(".disclaimer");r.innerHTML=o().sanitize((0,a.TU)(e.LoginDisclaimer||""));var n,i=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return S(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?S(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){c=!0,a=t},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw a}}}}(r.querySelectorAll("a"));try{for(i.s();!(n=i.n()).done;){var c=n.value;c.rel="noopener noreferrer",c.target="_blank",c.classList.add("button-link"),c.setAttribute("is","emby-linkbutton"),s.Z.tv&&(c.tabIndex=-1)}}catch(t){i.e(t)}finally{i.f()}}))})),t.addEventListener("viewhide",(function(){d.Z.setTransparentMenu(!1)}))}}}]);