/*! For license information please see session-login.5be69e42ebd8accacef4.chunk.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[93649,96084,40367],{2825:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return I}}),r(44962),r(29305),r(32733),r(51770),r(84701),r(2623),r(24776),r(69892),r(76281),r(87324),r(89336),r(10849),r(70389),r(36947),r(26437),r(52697),r(78557),r(90076),r(95021),r(73687),r(83994),r(23630),r(82367);var n=r(31234),a=r.n(n),o=r(47593),i=r(22622),c=r(90381),u=r(47629),s=r(56869),l=r(46782),d=r(73233),f=r(34789),h=r(9482),v=(r(77157),r(89100)),y=r(86191),m=r(50764),p=r(79754),g=r(41177),b=r(36668);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function S(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return A(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?A(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw o}}}}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function x(){x=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var o=t&&t.prototype instanceof p?t:p,i=Object.create(o.prototype),c=new M(n||[]);return a(i,"_invoke",{value:E(e,r,c)}),i}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=l;var f="suspendedStart",h="suspendedYield",v="executing",y="completed",m={};function p(){}function g(){}function b(){}var S={};s(S,i,(function(){return this}));var A=Object.getPrototypeOf,k=A&&A(A(T([])));k&&k!==r&&n.call(k,i)&&(S=k);var C=b.prototype=p.prototype=Object.create(S);function L(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function q(e,t){function r(a,o,i,c){var u=d(e[a],e,o);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==w(l)&&n.call(l,"__await")?t.resolve(l.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(l).then((function(e){s.value=e,i(s)}),(function(e){return r("throw",e,i,c)}))}c(u.arg)}var o;a(this,"_invoke",{value:function(e,n){function a(){return new t((function(t,a){r(e,n,t,a)}))}return o=o?o.then(a,a):a()}})}function E(t,r,n){var a=f;return function(o,i){if(a===v)throw Error("Generator is already running");if(a===y){if("throw"===o)throw i;return{value:e,done:!0}}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var u=I(c,n);if(u){if(u===m)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===f)throw a=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=v;var s=d(t,r,n);if("normal"===s.type){if(a=n.done?y:h,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(a=y,n.method="throw",n.arg=s.arg)}}}function I(t,r){var n=r.method,a=t.iterator[n];if(a===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,I(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var o=d(a,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function M(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function T(t){if(t||""===t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function r(){for(;++a<t.length;)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}throw new TypeError(w(t)+" is not iterable")}return g.prototype=b,a(C,"constructor",{value:b,configurable:!0}),a(b,"constructor",{value:g,configurable:!0}),g.displayName=s(b,u,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,s(e,u,"GeneratorFunction")),e.prototype=Object.create(C),e},t.awrap=function(e){return{__await:e}},L(q.prototype),s(q.prototype,c,(function(){return this})),t.AsyncIterator=q,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new q(l(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},L(C),s(C,u,"Generator"),s(C,i,(function(){return this})),s(C,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=T,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return c.type="throw",c.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),P(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;P(r)}return a}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:T(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}function k(e,t,r,n,a,o,i){try{var c=e[o](i),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,a)}var C=!f.A.slow&&!f.A.edge;function L(e,t,r,n,a){s.Ay.show(),t.authenticateUserByName(n,a).then((function(e){var n=e.User;s.Ay.hide(),q(n.Id,e.AccessToken,t,r)}),(function(t){if(e.querySelector("#txtManualPassword").value="",s.Ay.hide(),[401,403].includes(t.status)){var r=401===t.status?"MessageInvalidUser":"MessageUnauthorizedUser";(0,m.A)(h.Ay.translate(r))}else v.default.alert({message:h.Ay.translate("MessageUnableToConnectToServer"),title:h.Ay.translate("HeaderConnectionFailure")})}))}function q(e,t,r,n){v.default.onServerChanged(e,t,r),v.default.navigate(n||"home.html")}function E(e,t,r){e.querySelector(".chkRememberLogin").checked=c.A.enableAutoLogin(),e.querySelector(".manualLoginForm").classList.remove("hide"),e.querySelector(".visualLoginForm").classList.add("hide"),e.querySelector(".btnManual").classList.add("hide"),r?e.querySelector("#txtManualPassword").focus():e.querySelector("#txtManualName").focus(),t?e.querySelector(".btnCancel").classList.remove("hide"):e.querySelector(".btnCancel").classList.add("hide")}function I(e,t){function n(){var e=t.serverid;return e?y.A.getOrCreateApiClient(e):ApiClient}function f(){if(t.url)try{return decodeURIComponent(t.url)}catch(e){console.warn("[LoginPage] unable to decode url param",t.url,e)}return"/home.html"}function m(){e.querySelector(".visualLoginForm").classList.remove("hide"),e.querySelector(".manualLoginForm").classList.add("hide"),e.querySelector(".btnManual").classList.remove("hide"),Promise.resolve().then(r.bind(r,84069)).then((function(t){t.default.autoFocus(e)}))}e.querySelector("#divUsers").addEventListener("click",(function(t){var r=u.Ay.parentWithClass(t.target,"card"),a=r?r.querySelector(".cardContent"):null;if(a){var o=e,i=a.getAttribute("data-userid"),c=a.getAttribute("data-username"),s=a.getAttribute("data-haspw");"manual"===i?(o.querySelector("#txtManualName").value="",E(o,!0)):"false"==s?L(o,n(),f(),c,""):(o.querySelector("#txtManualName").value=c,o.querySelector("#txtManualPassword").value="",E(o,!0,!0))}})),e.querySelector(".manualLoginForm").addEventListener("submit",(function(t){return c.A.enableAutoLogin(e.querySelector(".chkRememberLogin").checked),L(e,n(),f(),e.querySelector("#txtManualName").value,e.querySelector("#txtManualPassword").value),t.preventDefault(),!1})),e.querySelector(".btnForgotPassword").addEventListener("click",(function(){v.default.navigate("forgotpassword.html")})),e.querySelector(".btnCancel").addEventListener("click",m),e.querySelector(".btnQuick").addEventListener("click",(function(){return e=n(),t=f(),r=e.getUrl("/QuickConnect/Initiate"),e.ajax({type:"POST",url:r},!0).then((function(e){return e.json()})).then((function(r){if(!r.Secret||!r.Code)return console.error("Malformed quick connect response",r),!1;(0,g.A)({dialogOptions:{id:"quickConnectAlert"},title:h.Ay.translate("QuickConnect"),text:h.Ay.translate("QuickConnectAuthorizeCode",r.Code)});var n=e.getUrl("/QuickConnect/Connect?Secret="+r.Secret),a=setInterval((function(){e.getJSON(n).then(function(){var r,n=(r=x().mark((function r(n){var o,i;return x().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n.Authenticated){r.next=2;break}return r.abrupt("return");case 2:return clearInterval(a),(o=document.getElementById("quickConnectAlert"))&&p.default.close(o),r.next=7,e.quickConnect(n.Secret);case 7:q((i=r.sent).User.Id,i.AccessToken,e,t);case 9:case"end":return r.stop()}}),r)})),function(){var e=this,t=arguments;return new Promise((function(n,a){var o=r.apply(e,t);function i(e){k(o,n,a,i,c,"next",e)}function c(e){k(o,n,a,i,c,"throw",e)}i(void 0)}))});return function(e){return n.apply(this,arguments)}}(),(function(e){clearInterval(a);var t=document.getElementById("quickConnectAlert");t&&p.default.close(t),v.default.alert({message:h.Ay.translate("QuickConnectDeactivated"),title:h.Ay.translate("HeaderError")}),console.error("Unable to login with quick connect",e)}))}),5e3,n);return!0}),(function(e){return v.default.alert({message:h.Ay.translate("QuickConnectNotActive"),title:h.Ay.translate("HeaderError")}),console.error("Quick connect error: ",e),!1})),!1;var e,t,r})),e.querySelector(".btnManual").addEventListener("click",(function(){e.querySelector("#txtManualName").value="",E(e,!0)})),e.querySelector(".btnSelectServer").addEventListener("click",(function(){v.default.selectServer()})),e.addEventListener("viewshow",(function(){s.Ay.show(),d.default.setTransparentMenu(!0),i.g.supports("multiserver")||e.querySelector(".btnSelectServer").classList.add("hide");var t=n();t.getQuickConnect("Enabled").then((function(t){!0===t&&e.querySelector(".btnQuick").classList.remove("hide")})).catch((function(){console.debug("Failed to get QuickConnect status")})),t.getPublicUsers().then((function(r){r.length?(m(),function(e,t,r){var n,a="",o=S(r);try{for(o.s();!(n=o.n()).done;){var i=n.value,c="card squareCard scalableCard squareCard-scalable";l.A.tv&&(c+=" show-focus",C&&(c+=" show-animation")),a+='<button type="button" class="'+c+'">',a+='<div class="cardBox cardBox-bottompadded">',a+='<div class="cardScalable">',a+='<div class="cardPadder cardPadder-square"></div>',a+='<div class="cardContent" data-haspw="'.concat(i.HasPassword,'" data-username="').concat(i.Name,'" data-userid="').concat(i.Id,'">'),i.PrimaryImageTag?a+='<div class="cardImageContainer coveredImage" style="background-image:url(\''+t.getUserImageUrl(i.Id,{width:300,tag:i.PrimaryImageTag,type:"Primary"})+"');\"></div>":(a+='<div class="cardImage flex align-items-center justify-content-center '.concat((0,b.Qp)(),'">'),a+='<span class="material-icons cardImageIcon person" aria-hidden="true"></span>',a+="</div>"),a+="</div>",a+="</div>",a+='<div class="cardFooter visualCardBox-cardFooter">',a+='<div class="cardText singleCardText cardTextCentered">'+i.Name+"</div>",a+="</div>",a+="</div>",a+="</button>"}}catch(e){o.e(e)}finally{o.f()}e.querySelector("#divUsers").innerHTML=a}(e,t,r)):(e.querySelector("#txtManualName").value="",E(e,!1,!1))})).catch().then((function(){s.Ay.hide()})),t.getJSON(t.getUrl("Branding/Configuration")).then((function(t){var r=e.querySelector(".loginDisclaimer");r.innerHTML=a().sanitize((0,o.A)({html:!0}).render(t.LoginDisclaimer||""));var n,i=S(r.querySelectorAll("a"));try{for(i.s();!(n=i.n()).done;){var c=n.value;c.rel="noopener noreferrer",c.target="_blank",c.classList.add("button-link"),c.setAttribute("is","emby-linkbutton"),l.A.tv&&(c.tabIndex=-1)}}catch(e){i.e(e)}finally{i.f()}}))})),e.addEventListener("viewhide",(function(){d.default.setTransparentMenu(!1)}))}},36668:function(e,t,r){"use strict";r.d(t,{QW:function(){return w},Qp:function(){return p},Rn:function(){return m},Tj:function(){return h},a_:function(){return v},hn:function(){return l},n5:function(){return d},uA:function(){return y},w:function(){return f},zo:function(){return b}});var n=r(80633),a=r(51686),o=r(4452),i=r.n(o),c=2/3,u=16/9,s=1e3/185,l=function(e){return"Program"===e||"Timer"===e||"Recording"===e},d=function(e){return"play"===e.defaultAction&&e.isFolder?"link":e.isPhoto?"play":e.defaultAction},f=function(e){var t=window.screen;return!!(t&&t.availWidth-e>20)},h=function(e){return null==e?n.G8.MixedSquare:e>=1.33?n.G8.MixedBackdrop:e>.8?n.G8.MixedSquare:n.G8.MixedPortrait},v=function(e){var t;return i()(((t={card:!0})["".concat(e.shape,"Card")]=e.shape,t["".concat(e.cardCssClass)]=e.cardCssClass,t["".concat(e.cardClass)]=e.cardClass,t["card-hoverable"]=e.isDesktop,t["show-focus"]=e.isTV,t["show-animation"]=e.isTV&&e.enableFocusTransform,t.groupedCard=e.showChildCountIndicator&&e.childCount,t["card-withuserdata"]=!["MusicAlbum","MusicArtist","Audio"].includes(e.itemType),t.itemAction="button"===e.tagName,t))},y=function(e){var t;return i()(((t={cardImageContainer:!0,coveredImage:e.hasCoverImage,"coveredImage-contain":e.hasCoverImage&&"TvChannel"===e.itemType})[p(e.itemName)]=!e.imgUrl,t))},m=function(e){return i()({cardBox:!0,visualCardBox:e.cardLayout,"cardBox-bottompadded":e.hasOuterCardFooter&&!e.cardLayout})},p=function(e){return"defaultCardBackground defaultCardBackground".concat(g(e))},g=function(e){if(e){for(var t=Math.floor(e.length/2),r=String(e.slice(t,t+1).charCodeAt(0)),n=0,o=0;o<r.length;o++)n+=parseInt(r.charAt(o),10);return parseInt(String(n).slice(-1),10)%5+1}return(0,a.HO)(1,5)},b=function(e){return e?-1!==(e=e.toLowerCase()).indexOf("portrait")?c:-1!==e.indexOf("backdrop")?u:-1!==e.indexOf("square")?1:-1!==e.indexOf("banner")?s:null:null},w=function(e,t,r,n){switch(e){case"portrait":return S(t,n);case"square":return A(t,n);case"banner":return x(t);case"backdrop":return k(t,n);case"smallBackdrop":return C(t);case"overflowSmallBackdrop":return L(t,r,n);case"overflowPortrait":return q(t,r,n);case"overflowSquare":return E(t,r,n);case"overflowBackdrop":return I(t,r,n);default:return 4}},S=function(e,t){switch(!0){case t:return 5.9999999988;case e>=2200:return 10;case e>=1920:return 9.000000000009;case e>=1600:return 8;case e>=1400:return 7.0000000000021;case e>=1200:return 5.9999999988;case e>=800:return 5;case e>=700:return 4;default:return 3.0000000003}},A=function(e,t){switch(!0){case t:return 5.9999999988;case e>=2200:return 10;case e>=1920:return 9.000000000009;case e>=1600:return 8;case e>=1400:return 7.0000000000021;case e>=1200:return 5.9999999988;case e>=800:return 5;case e>=700:return 4;case e>=500:return 3.0000000003;default:return 2}},x=function(e){switch(!0){case e>=2200:return 4;case e>=1200:return 3.0000000003;case e>=800:return 2;default:return 1}},k=function(e,t){switch(!0){case t:return 4;case e>=2500:return 6;case e>=1600:return 5;case e>=1200:return 4;case e>=770:return 3;case e>=420:return 2;default:return 1}},C=function(e){switch(!0){case e>=1600:return 8;case e>=1400:return 7.000000000007001;case e>=1200:return 5.9999999988;case e>=1e3:return 5;case e>=800:return 4;case e>=500:return 3.0000000003;default:return 2}},L=function(e,t,r){switch(!0){case r:return 100/18.9;case t&&e>=800:return 100/15.5;case t:return 100/23.3;case e>=540:return 100/30;default:return 100/72}},q=function(e,t,r){switch(!0){case r:return 100/15.5;case t&&e>=1700:return 100/11.6;case t:return 100/15.5;case e>=1400:return 100/15;case e>=1200:return 100/18;case e>=760:return 100/23;case e>=400:return 100/31.5;default:return 100/42}},E=function(e,t,r){switch(!0){case r:return 100/15.5;case t&&e>=1700:return 100/11.6;case t:return 100/15.5;case e>=1400:return 100/15;case e>=1200:return 100/18;case e>=760:return 100/23;case e>=540:return 100/31.5;default:return 100/42}},I=function(e,t,r){switch(!0){case r:return 100/23.3;case t&&e>=1700:return 100/18.5;case t:return 100/23.3;case e>=1800:return 100/23.5;case e>=1400:return 100/30;case e>=760:return 2.5;case e>=640:return 100/56;default:return 100/72}}},10947:function(e,t,r){"use strict";var n;r.d(t,{B:function(){return n}}),function(e){e.SET_TABS="SET_TABS",e.SHOW_VIDEO_OSD="SHOW_VIDEO_OSD"}(n||(n={}))},80633:function(e,t,r){"use strict";var n;function a(e){return void 0===e&&(e=!0),e?n.SquareOverflow:n.Square}function o(e){return void 0===e&&(e=!0),e?n.BackdropOverflow:n.Backdrop}function i(e){return void 0===e&&(e=!0),e?n.PortraitOverflow:n.Portrait}r.d(t,{G8:function(){return n},UI:function(){return o},xK:function(){return i},zP:function(){return a}}),function(e){e.Backdrop="backdrop",e.BackdropOverflow="overflowBackdrop",e.Banner="banner",e.Portrait="portrait",e.PortraitOverflow="overflowPortrait",e.Square="square",e.SquareOverflow="overflowSquare",e.Auto="auto",e.AutoHome="autohome",e.AutoOverflow="autooverflow",e.AutoVertical="autoVertical",e.Mixed="mixed",e.MixedSquare="mixedSquare",e.MixedBackdrop="mixedBackdrop",e.MixedPortrait="mixedPortrait"}(n||(n={}))},40782:function(e,t,r){"use strict";var n=r(11444),a="assets/img/devices/";t.Ay={getDeviceIcon:function(e){var t;switch(e.AppName||e.Client){case"Samsung Smart TV":return a+"samsung.svg";case"Xbox One":return a+"xbox.svg";case"Sony PS4":return a+"playstation.svg";case"Kodi":case"Kodi JellyCon":return a+"kodi.svg";case"Jellyfin Android":case"AndroidTV":case"Android TV":return a+"android.svg";case"Jellyfin Mobile (iOS)":case"Jellyfin Mobile (iPadOS)":case"Jellyfin iOS":case"Infuse":return a+"apple.svg";case"Home Assistant":return a+"home-assistant.svg";case"Jellyfin Roku":return a+"roku.svg";case"Finamp":return a+"finamp.svg";case"Jellyfin Web":return function(e){switch(e){case"Opera":case"Opera TV":case"Opera Android":return a+"opera.svg";case"Chrome":case"Chrome Android":return a+"chrome.svg";case"Firefox":case"Firefox Android":return a+"firefox.svg";case"Safari":case"Safari iPad":case"Safari iPhone":return a+"safari.svg";case"Edge Chromium":case"Edge Chromium Android":case"Edge Chromium iPad":case"Edge Chromium iPhone":return a+"edgechromium.svg";case"Edge":return a+"edge.svg";case"Internet Explorer":return a+"msie.svg";default:return a+"html5.svg"}}(e.Name||e.DeviceName);default:if(null===(t=e.Capabilities)||void 0===t?void 0:t.IconUrl)try{return new URL(e.Capabilities.IconUrl).toString()}catch(t){console.error("[getDeviceIcon] device capabilities has invalid IconUrl",e,t)}return a+"other.svg"}},getLibraryIcon:function(e){switch(e){case"movies":return"video_library";case"music":return"library_music";case"photos":case"homevideos":return"photo_library";case"livetv":return"live_tv";case"tvshows":return"tv";case"trailers":return"local_movies";case"musicvideos":return"music_video";case"books":return"library_books";case"channels":return"videocam";case"playlists":return"view_list";default:return"folder"}},getItemTypeIcon:function(e){switch(e){case n.D.MusicAlbum:return"album";case n.D.MusicArtist:case n.D.Person:return"person";case n.D.Audio:return"audiotrack";case n.D.Movie:return"movie";case n.D.Episode:case n.D.Series:return"tv";case n.D.Program:return"live_tv";case n.D.Book:return"book";case n.D.Folder:return"folder";case n.D.BoxSet:return"collections";case n.D.Playlist:return"view_list";case n.D.Photo:return"photo";case n.D.PhotoAlbum:return"photo_album";default:return"folder"}}}},4452:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=i(e,o(r)))}return e}function o(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=i(t,r));return t}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()}}]);