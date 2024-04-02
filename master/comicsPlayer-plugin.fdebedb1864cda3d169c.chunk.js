/*! For license information please see comicsPlayer-plugin.fdebedb1864cda3d169c.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[41542],{73108:function(t,e,r){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,o(n.key),n)}}function o(t){var e=function(t,e){if("object"!=n(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,"string");if("object"!=n(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==n(e)?e:e+""}r.r(e),r.d(e,{ComicsPlayer:function(){return D},default:function(){return M}}),r(29305),r(32733),r(51770),r(84701),r(2623),r(69892),r(87324),r(10849),r(70389),r(36947),r(26437),r(52697),r(95021),r(73687),r(44962),r(81678),r(24776),r(14382),r(76281),r(17731),r(89336),r(26448),r(4754),r(58551),r(94),r(78557),r(90076),r(50987),r(83994),r(23630),r(82367),r(24362),r(76218),r(99102),r(33087),r(36457),r(88908),r(83810);var a=function(){return t=function t(e,r,n,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e,this._size=r,this._path=n,this._archiveRef=i},(e=[{key:"name",get:function(){return this._name}},{key:"size",get:function(){return this._size}},{key:"extract",value:function(){return this._archiveRef.extractSingleFile(this._path)}}])&&i(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}();function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,i,o,a,c=[],s=!0,u=!1;try{if(o=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=o.call(r)).done)&&(c.push(n.value),c.length!==e);s=!0);}catch(t){u=!0,i=t}finally{try{if(!s&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw i}}return c}}(t,e)||l(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){if(t){if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(t,e):void 0}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function h(){h=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,a=Object.create(o.prototype),c=new C(n||[]);return i(a,"_invoke",{value:j(t,r,c)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var y="suspendedStart",v="suspendedYield",d="executing",g="completed",m={};function b(){}function w(){}function E(){}var S={};l(S,a,(function(){return this}));var _=Object.getPrototypeOf,P=_&&_(_(A([])));P&&P!==r&&n.call(P,a)&&(S=P);var k=E.prototype=b.prototype=Object.create(S);function L(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function r(i,o,a,s){var u=p(t[i],t,o);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==c(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,s)}),(function(t){r("throw",t,a,s)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,s)}))}s(u.arg)}var o;i(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,i){r(t,n,e,i)}))}return o=o?o.then(i,i):i()}})}function j(e,r,n){var i=y;return function(o,a){if(i===d)throw Error("Generator is already running");if(i===g){if("throw"===o)throw a;return{value:t,done:!0}}for(n.method=o,n.arg=a;;){var c=n.delegate;if(c){var s=O(c,n);if(s){if(s===m)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===y)throw i=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=d;var u=p(e,r,n);if("normal"===u.type){if(i=n.done?g:v,u.arg===m)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(i=g,n.method="throw",n.arg=u.arg)}}}function O(e,r){var n=r.method,i=e.iterator[n];if(i===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var o=p(i,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function A(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw new TypeError(c(e)+" is not iterable")}return w.prototype=E,i(k,"constructor",{value:E,configurable:!0}),i(E,"constructor",{value:w,configurable:!0}),w.displayName=l(E,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,l(t,u,"GeneratorFunction")),t.prototype=Object.create(k),t},e.awrap=function(t){return{__await:t}},L(x.prototype),l(x.prototype,s,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new x(f(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(k),l(k,u,"Generator"),l(k,a,(function(){return this})),l(k,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=A,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(I),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return c.type="throw",c.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;I(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:A(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}function p(t,e,r,n,i,o,a){try{var c=t[o](a),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,i)}function y(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,v(n.key),n)}}function v(t){var e=function(t,e){if("object"!=c(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==c(e)?e:e+""}var d=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._worker=new Worker(r.workerUrl),this._worker.addEventListener("message",this._workerMsg.bind(this)),this._callbacks=[],this._content={},this._processed=0,this._file=e}return e=t,r=[{key:"open",value:(i=h().mark((function t(){var e=this;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this._postMessage({type:"HELLO"},(function(t,e,r){"READY"===r.type&&t()}));case 2:return t.next=4,this._postMessage({type:"OPEN",file:this._file},(function(t,r,n){"OPENED"===n.type&&t(e)}));case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t,this)})),o=function(){var t=this,e=arguments;return new Promise((function(r,n){var o=i.apply(t,e);function a(t){p(o,r,n,a,c,"next",t)}function c(t){p(o,r,n,a,c,"throw",t)}a(void 0)}))},function(){return o.apply(this,arguments)})},{key:"hasEncryptedData",value:function(){return this._postMessage({type:"CHECK_ENCRYPTION"},(function(t,e,r){"ENCRYPTION_STATUS"===r.type&&t(r.status)}))}},{key:"usePassword",value:function(t){return this._postMessage({type:"SET_PASSPHRASE",passphrase:t},(function(t,e,r){"PASSPHRASE_STATUS"===r.type&&t(r.status)}))}},{key:"getFilesObject",value:function(){var t=this;return this._processed>0?Promise.resolve().then((function(){return t._content})):this._postMessage({type:"LIST_FILES"},(function(e,r,n){if("ENTRY"===n.type){var i=n.entry,o=u(t._getProp(t._content,i.path),2),c=o[0],s=o[1];return"FILE"===i.type&&(c[s]=new a(i.fileName,i.size,i.path,t)),!0}"END"===n.type&&(t._processed=1,e(t._cloneContent(t._content)))}))}},{key:"getFilesArray",value:function(){var t=this;return this.getFilesObject().then((function(e){return t._objectToArray(e)}))}},{key:"extractSingleFile",value:function(t){return this._postMessage({type:"EXTRACT_SINGLE_FILE",target:t},(function(t,e,r){"FILE"===r.type&&t(new File([r.entry.fileData],r.entry.fileName,{type:"application/octet-stream"}))}))}},{key:"extractFiles",value:function(t){var e=this;return this._processed>1?Promise.resolve().then((function(){return e._content})):this._postMessage({type:"EXTRACT_FILES"},(function(r,n,i){if("ENTRY"===i.type){var o=u(e._getProp(e._content,i.entry.path),2),a=o[0],c=o[1];return"FILE"===i.entry.type&&(a[c]=new File([i.entry.fileData],i.entry.fileName,{type:"application/octet-stream"}),void 0!==t&&setTimeout(t.bind(null,{file:a[c],path:i.entry.path}))),!0}"END"===i.type&&(e._processed=2,e._worker.terminate(),r(e._cloneContent(e._content)))}))}},{key:"_cloneContent",value:function(t){if(t instanceof File||t instanceof a||null===t)return t;for(var e={},r=0,n=Object.keys(t);r<n.length;r++){var i=n[r];e[i]=this._cloneContent(t[i])}return e}},{key:"_objectToArray",value:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=[],n=0,i=Object.keys(t);n<i.length;n++){var o=i[n];t[o]instanceof File||t[o]instanceof a||null===t[o]?r.push({file:t[o]||o,path:e}):r.push.apply(r,function(t){if(Array.isArray(t))return f(t)}(c=this._objectToArray(t[o],"".concat(e).concat(o,"/")))||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(c)||l(c)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())}var c;return r}},{key:"_getProp",value:function(t,e){var r=e.split("/");""===r[r.length-1]&&r.pop();var n,i=t,o=null,a=function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=l(t))){r&&(t=r);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,o=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw o}}}}(r);try{for(a.s();!(n=a.n()).done;){var c=n.value;i[c]=i[c]||{},o=i,i=i[c]}}catch(t){a.e(t)}finally{a.f()}return[o,r[r.length-1]]}},{key:"_postMessage",value:function(t,e){var r=this;return this._worker.postMessage(t),new Promise((function(t,n){r._callbacks.push(r._msgHandler.bind(r,e,t,n))}))}},{key:"_msgHandler",value:function(t,e,r,n){if("BUSY"===n.type)r("worker is busy");else{if("ERROR"!==n.type)return t(e,r,n);r(n.error)}}},{key:"_workerMsg",value:function(t){var e=t.data;(0,this._callbacks[this._callbacks.length-1])(e)||this._callbacks.pop()}}],n=[{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t._options=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){var n,i,o;n=t,i=e,o=r[e],(i=v(i))in n?Object.defineProperty(n,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[i]=o})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({workerUrl:"../dist/worker-bundle.js"},e),t._options}},{key:"open",value:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return r=r||t._options||t.init()&&console.warn("Automatically initializing using options: ",t._options),new t(e,r).open()}}],r&&y(e.prototype,r),n&&y(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,r,n,i,o}(),g=r(56869),m=r(79754),b=r(74550),w=r(70267),E=r(86191),S=r(82885),_=r(66176);function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function k(){k=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,a=Object.create(o.prototype),c=new C(n||[]);return i(a,"_invoke",{value:j(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var h="suspendedStart",p="suspendedYield",y="executing",v="completed",d={};function g(){}function m(){}function b(){}var w={};u(w,a,(function(){return this}));var E=Object.getPrototypeOf,S=E&&E(E(A([])));S&&S!==r&&n.call(S,a)&&(w=S);var _=b.prototype=g.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function r(i,o,a,c){var s=f(t[i],t,o);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==P(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}var o;i(this,"_invoke",{value:function(t,n){function i(){return new e((function(e,i){r(t,n,e,i)}))}return o=o?o.then(i,i):i()}})}function j(e,r,n){var i=h;return function(o,a){if(i===y)throw Error("Generator is already running");if(i===v){if("throw"===o)throw a;return{value:t,done:!0}}for(n.method=o,n.arg=a;;){var c=n.delegate;if(c){var s=O(c,n);if(s){if(s===d)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===h)throw i=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=y;var u=f(e,r,n);if("normal"===u.type){if(i=n.done?v:p,u.arg===d)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(i=v,n.method="throw",n.arg=u.arg)}}}function O(e,r){var n=r.method,i=e.iterator[n];if(i===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,O(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var o=f(i,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,d):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function A(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw new TypeError(P(e)+" is not iterable")}return m.prototype=b,i(_,"constructor",{value:b,configurable:!0}),i(b,"constructor",{value:m,configurable:!0}),m.displayName=u(b,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,u(t,s,"GeneratorFunction")),t.prototype=Object.create(_),t},e.awrap=function(t){return{__await:t}},L(x.prototype),u(x.prototype,c,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new x(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(_),u(_,s,"Generator"),u(_,a,(function(){return this})),u(_,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=A,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(I),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return c.type="throw",c.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;I(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:A(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),d}},e}function L(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return x(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?x(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,o=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw o}}}}function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function j(t,e,r,n,i,o,a){try{var c=t[o](a),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,i)}function O(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function T(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,A(n.key),n)}}function I(t,e,r){return e&&T(t.prototype,e),r&&T(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function C(t,e,r){return(e=A(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function A(t){var e=function(t,e){if("object"!=P(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=P(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==P(e)?e:e+""}var D=function(){return I((function t(){var e=this;O(this,t),C(this,"onDirChanged",(function(){var t=e.comicsPlayerSettings.langDir;t=t&&"ltr"!==t?"ltr":"rtl",e.changeLanguageDirection(t),e.comicsPlayerSettings.langDir=t})),C(this,"onViewChanged",(function(){var t=e.comicsPlayerSettings.pagesPerView;t=t&&1!==t?1:2,e.changeView(t),e.comicsPlayerSettings.pagesPerView=t})),this.name="Comics Player",this.type=_.Q.MediaPlayer,this.id="comicsplayer",this.priority=1,this.imageMap=new Map,this.onDialogClosed=this.onDialogClosed.bind(this),this.onWindowKeyUp=this.onWindowKeyUp.bind(this)}),[{key:"play",value:function(t){this.currentPage=0,this.pageCount=0;var e=t.items[0].Id;this.comicsPlayerSettings=S.getComicsPlayerSettings(e);var r=this.createMediaElement();return this.setCurrentSrc(r,t)}},{key:"stop",value:function(){var t;this.unbindEvents();var e={src:this.item};Events.trigger(this,"stopped",[e]);var r=this.item.Id;S.setComicsPlayerSettings(this.comicsPlayerSettings,r),null===(t=this.archiveSource)||void 0===t||t.release();var n=this.mediaElement;n&&(m.default.close(n),this.mediaElement=null),g.Ay.hide()}},{key:"destroy",value:function(){}},{key:"currentTime",value:function(){return this.currentPage}},{key:"duration",value:function(){return this.pageCount}},{key:"currentItem",value:function(){return this.item}},{key:"volume",value:function(){return 100}},{key:"isMuted",value:function(){return!1}},{key:"paused",value:function(){return!1}},{key:"seekable",value:function(){return!0}},{key:"onDialogClosed",value:function(){this.stop()}},{key:"changeLanguageDirection",value:function(t){var e=this.currentPage;this.swiperInstance.changeLanguageDirection(t);var r="ltr"===t?"arrow_circle_left":"arrow_circle_right";this.mediaElement.querySelector(".btnToggleLangDir > span").classList.remove(r);var n="ltr"===t?"arrow_circle_right":"arrow_circle_left";this.mediaElement.querySelector(".btnToggleLangDir > span").classList.add(n);var i="ltr"===t?"Right To Left":"Left To Right";this.mediaElement.querySelector(".btnToggleLangDir").title=i,this.reload(e)}},{key:"changeView",value:function(t){var e=this.currentPage;this.swiperInstance.params.slidesPerView=t,this.swiperInstance.params.slidesPerGroup=t;var r=1===t?"devices_fold":"import_contacts";this.mediaElement.querySelector(".btnToggleView > span").classList.remove(r);var n=1===t?"import_contacts":"devices_fold";this.mediaElement.querySelector(".btnToggleView > span").classList.add(n);var i=1===t?"Double Page View":"Single Page View";this.mediaElement.querySelector(".btnToggleView").title=i,this.reload(e)}},{key:"reload",value:function(t){var e=this.swiperInstance.params.effect;this.swiperInstance.params.effect="none",this.swiperInstance.update(),this.swiperInstance.slideNext(),this.swiperInstance.slidePrev(),this.currentPage!=t&&(this.swiperInstance.slideTo(t),this.swiperInstance.update()),this.swiperInstance.params.effect=e,this.swiperInstance.update()}},{key:"onWindowKeyUp",value:function(t){"Escape"===b.Ay.getKeyName(t)&&this.stop()}},{key:"bindMediaElementEvents",value:function(){var t=this.mediaElement;null==t||t.addEventListener("close",this.onDialogClosed,{once:!0}),null==t||t.querySelector(".btnExit").addEventListener("click",this.onDialogClosed,{once:!0}),null==t||t.querySelector(".btnToggleLangDir").addEventListener("click",this.onDirChanged),null==t||t.querySelector(".btnToggleView").addEventListener("click",this.onViewChanged)}},{key:"bindEvents",value:function(){this.bindMediaElementEvents(),document.addEventListener("keyup",this.onWindowKeyUp)}},{key:"unbindMediaElementEvents",value:function(){var t=this.mediaElement;null==t||t.removeEventListener("close",this.onDialogClosed),null==t||t.querySelector(".btnExit").removeEventListener("click",this.onDialogClosed),null==t||t.querySelector(".btnToggleLangDir").removeEventListener("click",this.onDirChanged),null==t||t.querySelector(".btnToggleView").removeEventListener("click",this.onViewChanged)}},{key:"unbindEvents",value:function(){this.unbindMediaElementEvents(),document.removeEventListener("keyup",this.onWindowKeyUp)}},{key:"createMediaElement",value:function(){var t=this.mediaElement;if(t)return t;if(!(t=document.getElementById("comicsPlayer"))){t=m.default.createDialog({exitAnimationDuration:400,size:"fullscreen",autoFocus:!1,scrollY:!1,exitAnimation:"fadeout",removeOnClose:!0});var e=1===this.comicsPlayerSettings.pagesPerView?"import_contacts":"devices_fold",r="ltr"===this.comicsPlayerSettings.langDir?"arrow_circle_right":"arrow_circle_left";t.id="comicsPlayer",t.classList.add("slideshowDialog"),t.innerHTML="<div dir=".concat(this.comicsPlayerSettings.langDir,' class="slideshowSwiperContainer">\n                                <div class="swiper-wrapper"></div>\n                                <div class="swiper-button-next actionButtonIcon"></div>\n                                <div class="swiper-button-prev actionButtonIcon"></div>\n                                <div class="swiper-pagination"></div>\n                            </div>\n                            <div class="actionButtons">\n                                <button is="paper-icon-button-light" class="autoSize btnToggleLangDir" tabindex="-1">\n                                    <span class="material-icons actionButtonIcon ').concat(r,'" aria-hidden="true"></span>\n                                </button>\n                                <button is="paper-icon-button-light" class="autoSize btnToggleView" tabindex="-1">\n                                    <span class="material-icons actionButtonIcon ').concat(e,'" aria-hidden="true"></span>\n                                </button>\n                                <button is="paper-icon-button-light" class="autoSize btnExit" tabindex="-1">\n                                    <span class="material-icons actionButtonIcon close" aria-hidden="true"></span>\n                                </button>\n                            </div>'),m.default.open(t)}this.mediaElement=t;var n="ltr"===this.comicsPlayerSettings.langDir?"Right To Left":"Left To Right";this.mediaElement.querySelector(".btnToggleLangDir").title=n;var i=1===this.comicsPlayerSettings.pagesPerView?"Double Page View":"Single Page View";return this.mediaElement.querySelector(".btnToggleView").title=i,this.bindEvents(),t}},{key:"setCurrentSrc",value:function(t,e){var n=this,i=e.items[0];this.item=i,this.streamInfo={started:!0,ended:!1,item:this.item,mediaSource:{Id:i.Id}},g.Ay.show();var o=i.ServerId,a=E.A.getApiClient(o);d.init({workerUrl:w.appRouter.baseUrl()+"/libraries/worker-bundle.js"});var c=a.getItemDownloadUrl(i.Id);return this.archiveSource=new N(c),Promise.all([r.e(76173),r.e(5503)]).then(r.bind(r,66189)),this.archiveSource.load().then((function(){return Promise.all([r.e(76173),r.e(51850)]).then(r.bind(r,43634))})).then((function(r){var i=r.Swiper;g.Ay.hide(),n.pageCount=n.archiveSource.urls.length,n.currentPage=e.startPositionTicks/1e4||0,n.swiperInstance=new i(t.querySelector(".slideshowSwiperContainer"),{direction:"horizontal",loop:!1,zoom:{minRatio:1,toggle:!0,containerClass:"slider-zoom-container"},autoplay:!1,keyboard:{enabled:!0},preloadImages:!0,slidesPerView:n.comicsPlayerSettings.pagesPerView,slidesPerGroup:n.comicsPlayerSettings.pagesPerView,slidesPerColumn:1,initialSlide:n.currentPage,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,type:"fraction"},virtual:{slides:n.archiveSource.urls,cache:!0,renderSlide:n.getImgFromUrl,addSlidesBefore:1,addSlidesAfter:1}}),n.swiperInstance.on("slideChange",(function(){n.currentPage=n.swiperInstance.activeIndex,Events.trigger(n,"pause")}))}))}},{key:"getImgFromUrl",value:function(t){return'<div class="swiper-slide">\n                   <div class="slider-zoom-container">\n                       <img src="'.concat(t,'" class="swiper-slide-img">\n                   </div>\n               </div>')}},{key:"canPlayMediaType",value:function(t){return"book"===(t||"").toLowerCase()}},{key:"canPlayItem",value:function(t){return t.Path&&(t.Path.endsWith("cbz")||t.Path.endsWith("cbr"))}}])}(),F=["jpg","jpeg","jpe","jif","jfif","jfi","png","avif","gif","bmp","dib","tiff","tif","webp"],N=function(){return I((function t(e){O(this,t),this.url=e,this.files=[],this.urls=[]}),[{key:"load",value:(t=k().mark((function t(){var e,r,n,i,o,a,c;return k().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(this.url);case 2:if((e=t.sent).ok){t.next=5;break}return t.abrupt("return");case 5:return t.next=7,e.blob();case 7:return r=t.sent,t.next=10,d.open(r);case 10:return this.archive=t.sent,t.next=13,this.archive.getFilesArray();case 13:return this.raw=t.sent,t.next=16,this.archive.extractFiles();case 16:return t.next=18,this.archive.getFilesArray();case 18:n=(n=t.sent).filter((function(t){var e=t.file.name,r=e.lastIndexOf(".");return-1!==r&&F.includes(e.slice(r+1))})),n.sort((function(t,e){return t.file.name<e.file.name?-1:1})),i=L(n);try{for(i.s();!(o=i.n()).done;)a=o.value,c=URL.createObjectURL(a.file),this.urls.push(c)}catch(t){i.e(t)}finally{i.f()}case 23:case"end":return t.stop()}}),t,this)})),e=function(){var e=this,r=arguments;return new Promise((function(n,i){var o=t.apply(e,r);function a(t){j(o,n,i,a,c,"next",t)}function c(t){j(o,n,i,a,c,"throw",t)}a(void 0)}))},function(){return e.apply(this,arguments)})},{key:"release",value:function(){this.files=[],this.urls.forEach(URL.revokeObjectURL),this.urls=[]}}]);var t,e}(),M=D}}]);