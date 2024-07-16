"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[39435,78938],{58782:function(e,t,r){r.r(t),r.d(t,{default:function(){return b},fillImage:function(){return f},fillImages:function(){return g},getPrimaryImageAspectRatio:function(){return v},lazyChildren:function(){return h},lazyImage:function(){return u},setLazyImage:function(){return p}}),r(29305),r(32733),r(84701),r(14382),r(69892),r(44962),r(89336),r(26448),r(78557),r(95021),r(73687),r(83994),r(93062),r(82367);var n=r(99891),a=r(82885);function i(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return o(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return l=e.done,e},e:function(e){s=!0,i=e},f:function(){try{l||null==r.return||r.return()}finally{if(s)throw i}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var l=new function(){return new Worker(r.p+"blurhash.worker.bundle.js")},s={};function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.getAttribute("data-src");t&&m(e,t)}function c(e,t,r,n){var a=document.createElement("canvas");a.setAttribute("aria-hidden","true"),a.width=r,a.height=n;var i=a.getContext("2d"),o=i.createImageData(r,n);o.data.set(t),i.putImageData(o,0,0),requestAnimationFrame((function(){a.classList.add("blurhash-canvas"),e.parentNode.insertBefore(a,e),e.classList.add("blurhashed"),e.removeAttribute("data-blurhash")}))}function d(e,t){try{s[t]=(s[t]||[]).filter((function(t){return t!==e})),s[t].push(e),l.postMessage({hash:t,width:20,height:20})}catch(t){return console.error(t),void e.classList.add("non-blurhashable")}}function f(e){if(!e)throw new Error("entry cannot be null");var t,r=e.target;t=r?r.getAttribute("data-src"):e,e.isIntersecting?t&&m(r,t):t||function(e){var t;e.removeEventListener("animationend",y);var r,n=e.previousSibling;"CANVAS"===(null==n?void 0:n.tagName)&&n.classList.remove("lazy-hidden"),null===(t=e.parentNode)||void 0===t||null===(t=t.querySelector(".cardPadder"))||void 0===t||t.classList.remove("lazy-hidden-children"),"IMG"!==e.tagName?(r=e.style.backgroundImage.slice(4,-1).replace(/"/g,""),e.style.backgroundImage="none"):(r=e.getAttribute("src"),e.setAttribute("src","")),e.setAttribute("data-src",r),e.classList.remove("lazy-image-fadein-fast","lazy-image-fadein"),e.classList.add("lazy-hidden")}(r)}function y(e){var t=e.target;requestAnimationFrame((function(){var e,r=t.previousSibling;t.classList.contains("blurhashed")&&"CANVAS"===(null==r?void 0:r.tagName)&&r.classList.add("lazy-hidden"),null===(e=t.parentNode)||void 0===e||null===(e=e.querySelector(".cardPadder"))||void 0===e||e.classList.add("lazy-hidden-children")})),t.removeEventListener("animationend",y)}function m(e,t){if(void 0===t)throw new TypeError("url cannot be undefined");var r=new Image;r.src=t,e.classList.add("lazy-hidden"),e.addEventListener("animationend",y),r.addEventListener("load",(function(){requestAnimationFrame((function(){"IMG"!==e.tagName?e.style.backgroundImage="url('"+t+"')":e.setAttribute("src",t),e.removeAttribute("data-src"),a.enableFastFadein()?e.classList.add("lazy-image-fadein-fast"):e.classList.add("lazy-image-fadein"),e.classList.remove("lazy-hidden")}))}))}function h(e){if(a.enableBlurhash()){var t,r=i(e.querySelectorAll(".lazy"));try{for(r.s();!(t=r.n()).done;){var o=t.value,l=o.getAttribute("data-blurhash");!o.classList.contains("blurhashed","non-blurhashable")&&l?d(o,l):l||o.classList.contains("blurhashed")||o.classList.add("non-blurhashable")}}catch(e){r.e(e)}finally{r.f()}}n.WK(e,f)}function v(e){for(var t=[],r=0,n=e.length;r<n;r++){var a=e[r].PrimaryImageAspectRatio||0;a&&(t[t.length]=a)}if(!t.length)return null;t.sort((function(e,t){return e-t}));var i,o=Math.floor(t.length/2);i=t.length%2?t[o]:(t[o-1]+t[o])/2;var l=2/3;if(Math.abs(l-i)<=.15)return l;var s=16/9;if(Math.abs(s-i)<=.2)return s;if(Math.abs(1-i)<=.15)return 1;var u=4/3;return Math.abs(u-i)<=.15?u:i}function g(e){for(var t=0,r=e.length;t<r;t++)f(e[0])}function p(e,t){e.classList.add("lazy"),e.setAttribute("data-src",t),u(e)}l.addEventListener("message",(function(e){var t=e.data,r=t.pixels,n=t.hsh,a=t.width,o=t.height,l=s[n];if(null!=l&&l.length){var u,d=i(l);try{for(d.s();!(u=d.n()).done;)c(u.value,r,a,o)}catch(e){d.e(e)}finally{d.f()}delete s[n]}}));var b={setLazyImage:p,fillImages:g,fillImage:f,lazyImage:u,lazyChildren:h,getPrimaryImageAspectRatio:v}},99891:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,i(n.key),n)}}function i(e){var t=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,"string");if("object"!=n(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==n(t)?t:t+""}r.d(t,{WK:function(){return l}}),r(29305),r(32733),r(84701),r(81678),r(69892),r(44962),r(4754),r(94),r(36947),r(78557),r(83994),r(23630),r(82367);var o=function(){return e=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=t},(t=[{key:"createObserver",value:function(){var e=this.options.callback,t=new IntersectionObserver((function(t){t.forEach((function(t){e(t)}))}),{rootMargin:"50%",threshold:0});this.observer=t}},{key:"addElements",value:function(e){var t=this.observer;t||(this.createObserver(),t=this.observer),Array.from(e).forEach((function(e){t.observe(e)}))}},{key:"destroyObserver",value:function(){var e=this.observer;e&&(e.disconnect(),this.observer=null)}},{key:"destroy",value:function(){this.destroyObserver(),this.options=null}}])&&a(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();function l(e,t){!function(e,t,r){e.length&&new o({callback:r}).addElements(e)}(e.getElementsByClassName("lazy"),0,t)}t.Ay={LazyLoader:o,lazyChildren:l}},78938:function(e,t,r){r.r(t),r(78557),r(90076);var n=r(9482),a=r(56869),i=r(86191),o=r(50764),l=r(40532),s=r(48080);function u(e,t,r,i){return a.Ay.show(),e.getItem(e.getCurrentUserId(),r).then((function(l){return l.IsSeries?e.getNewLiveTvTimerDefaults({programId:r}).then((function(t){return e.createLiveTvSeriesTimer(t).then((function(){a.Ay.hide(),(0,o.A)(n.Ay.translate("SeriesRecordingScheduled"))}))})):i?c(t,e.serverId()):d(e.serverId(),t,!0)}))}function c(e,t){return new Promise((function(r,o){(0,l.A)({text:n.Ay.translate("MessageConfirmRecordingCancellation"),primary:"delete",confirmText:n.Ay.translate("HeaderCancelRecording"),cancelText:n.Ay.translate("HeaderKeepRecording")}).then((function(){a.Ay.show(),d(i.A.getApiClient(t),e,!0).then(r,o)}),o)}))}function d(e,t,r){return a.Ay.show(),e.cancelLiveTvTimer(t).then((function(){!1!==r&&(a.Ay.hide(),(0,o.A)(n.Ay.translate("RecordingCancelled")))}))}function f(e,t,r){return a.Ay.show(),e.getNewLiveTvTimerDefaults({programId:t}).then((function(t){return(r?e.createLiveTvSeriesTimer(t):e.createLiveTvTimer(t)).then((function(){a.Ay.hide(),(0,o.A)(n.Ay.translate("RecordingScheduled"))}))}))}t.default={cancelTimer:d,createRecording:f,changeRecordingToSeries:u,toggleRecording:function(e,t,r,l,c){var y=i.A.getApiClient(e),m=r&&"Cancelled"!==l;return c&&m?function(e,t,r,l,u){return new Promise((function(t,c){var f=[];f.push({name:n.Ay.translate("HeaderKeepRecording"),id:"cancel",type:"submit"}),"InProgress"===l?f.push({name:n.Ay.translate("HeaderStopRecording"),id:"canceltimer",type:"cancel"}):f.push({name:n.Ay.translate("HeaderCancelRecording"),id:"canceltimer",type:"cancel"}),f.push({name:n.Ay.translate("HeaderCancelSeries"),id:"cancelseriestimer",type:"cancel"}),s.A.show({text:n.Ay.translate("MessageConfirmRecordingCancellation"),buttons:f}).then((function(l){var s=i.A.getApiClient(e);"canceltimer"===l?(a.Ay.show(),d(s,r,!0).then(t,c)):"cancelseriestimer"===l?(a.Ay.show(),s.cancelLiveTvSeriesTimer(u).then((function(){(0,o.A)(n.Ay.translate("SeriesCancelled")),a.Ay.hide(),t()}),c)):t()}),c)}))}(e,0,r,l,c):m&&t?u(y,r,t,!0):t?f(y,t):Promise.reject()},cancelTimerWithConfirmation:c,cancelSeriesTimerWithConfirmation:function(e,t){return new Promise((function(r,s){(0,l.A)({text:n.Ay.translate("MessageConfirmRecordingCancellation"),primary:"delete",confirmText:n.Ay.translate("HeaderCancelSeries"),cancelText:n.Ay.translate("HeaderKeepSeries")}).then((function(){a.Ay.show(),i.A.getApiClient(t).cancelLiveTvSeriesTimer(e).then((function(){(0,o.A)(n.Ay.translate("SeriesCancelled")),a.Ay.hide(),r()}),s)}),s)}))}}},22832:function(e,t,r){r(44962),r(24776),r(29305),r(32733),r(84701),r(81678),r(14382),r(69892),r(89336),r(4754),r(94),r(33087),r(36947),r(36457),r(88908),r(83810),r(78557),r(96054),r(90076),r(95021),r(73687),r(83994),r(23630),r(82367);var n=r(4748),a=r(80669),i=r(38490),o=r(70267),l=r(9482),s=r(47629),u=r(78938),c=r(86191),d=r(50764),f=r(82885),y=r(52993);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=m(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==m(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function p(e,t,r){for(var n,i=e.parentNode,o=e.classList.length?".".concat(e.classList[0]):"",l=i.querySelectorAll("".concat(o,"[data-id]")),u=[],c=!1,d=0,f=l.length;d<f;d++)l[d]===e&&(c=!0,n=d),!c&&r||u.push(l[d].getAttribute("data-id"));var y=s.Ay.parentWithClass(e,"itemsContainer");if(null!=y&&y.fetchData){var m=r?{StartIndex:n}:{};return y.fetchData(m).then((function(e){return r?a.f.queue({items:e.Items}):a.f.play({items:e.Items,startIndex:n})}))}if(u.length)return r?a.f.queue({ids:u,serverId:t}):a.f.play({ids:u,serverId:t,startIndex:n})}function b(e){var t=(e=s.Ay.parentWithAttribute(e,"data-id")).getAttribute("data-serverid"),r=e.getAttribute("data-id"),n=e.getAttribute("data-type"),a=c.A.getApiClient(t);return"Timer"===n?a.getLiveTvTimer(r):"SeriesTimer"===n?a.getLiveTvSeriesTimer(r):a.getItem(a.getCurrentUserId(),r)}function A(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};b(e).then((function(a){var i=e.getAttribute("data-playlistid"),o=e.getAttribute("data-collectionid");if(i){var l=s.Ay.parentWithAttribute(e,"data-playlistitemid");a.PlaylistItemId=l?l.getAttribute("data-playlistitemid"):null}var u=c.A.getApiClient(a.ServerId),d=(0,y.C)(u);Promise.all([Promise.all([r.e(55802),r.e(1998)]).then(r.bind(r,55802)),u.getCurrentUser(),i?(0,n.C)(d).getPlaylistUser({playlistId:i,userId:u.getCurrentUserId()}).then((function(e){return e.data})).catch((function(e){return console.info("[Shortcuts] Failed to fetch playlist permissions",e),{CanEdit:!1}})):Promise.resolve({CanEdit:!1})]).then((function(e){var r,n,l=(n=3,function(e){if(Array.isArray(e))return e}(r=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,i,o,l=[],s=!0,u=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=i.call(r)).done)&&(l.push(n.value),l.length!==t);s=!0);}catch(e){u=!0,a=e}finally{try{if(!s&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(u)throw a}}return l}}(r,n)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?g(e,t):void 0}}(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=l[0],u=l[1],c=l[2];return s.show(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){v(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({item:a,play:!0,queue:!0,playAllFromHere:"Season"===a.Type||!a.IsFolder,queueAllFromHere:!a.IsFolder,playlistId:i,canEditPlaylist:!!c.CanEdit,collectionId:o,user:u},t))})).then((function(r){var n,a;"playallfromhere"===r.command||"queueallfromhere"===r.command?S(e,t.positionTo,r.command):(r.updated||r.deleted)&&(n=e,(a=(a=t.itemsContainer)||s.Ay.parentWithAttribute(n,"is","emby-itemscontainer"))&&a.notifyRefreshNeeded(!0))})).catch((function(){}))}))}function I(e){return{Type:e.getAttribute("data-type"),Id:e.getAttribute("data-id"),TimerId:e.getAttribute("data-timerid"),CollectionType:e.getAttribute("data-collectiontype"),ChannelId:e.getAttribute("data-channelid"),SeriesId:e.getAttribute("data-seriesid"),ServerId:e.getAttribute("data-serverid"),MediaType:e.getAttribute("data-mediatype"),Path:e.getAttribute("data-path"),IsFolder:"true"===e.getAttribute("data-isfolder"),StartDate:e.getAttribute("data-startdate"),EndDate:e.getAttribute("data-enddate"),UserData:{PlaybackPositionTicks:parseInt(e.getAttribute("data-positionticks")||"0",10)}}}function S(e,t,n){t=t||e;var i=e.getAttribute("data-id");i||(i=(e=s.Ay.parentWithAttribute(e,"data-id")).getAttribute("data-id"));var y=I(e),m=s.Ay.parentWithClass(e,"itemsContainer"),h="items-"+(y.IsFolder?y.Id:null==m?void 0:m.getAttribute("data-parentid"))+"-Folder",v=y.ServerId,g=y.Type,S="Program"===g?y.ChannelId:y.Id;if("Photo"===y.MediaType&&"link"===n&&(n="play"),"link"===n)o.appRouter.showItem(y,{context:e.getAttribute("data-context"),parentId:e.getAttribute("data-parentid")});else if("programdialog"===n)!function(e){Promise.all([r.e(10739),r.e(23346)]).then(r.bind(r,63834)).then((function(t){t.default.show(e.Id,e.ServerId)}))}(y);else if("instantmix"===n)a.f.instantMix({Id:S,ServerId:v});else if("play"===n||"resume"===n){var T=parseInt(e.getAttribute("data-positionticks")||"0",10),P=f.getSortValuesLegacy(h,"SortName");a.f.canPlay(y)?a.f.play({ids:[S],startPositionTicks:T,serverId:v,queryOptions:{SortBy:P.sortBy,SortOrder:P.sortOrder}}):console.warn("Unable to play item",y)}else if("queue"===n)a.f.isPlaying()?(a.f.queue({ids:[S],serverId:v}),(0,d.A)(l.Ay.translate("MediaQueued"))):a.f.queue({ids:[S],serverId:v});else if("playallfromhere"===n)p(e,v);else if("queueallfromhere"===n)p(e,v,!0);else if("setplaylistindex"===n)a.f.setCurrentPlaylistItem(e.getAttribute("data-playlistitemid"));else if("record"===n)!function(e,t,r,n,a){if("Program"===r||n||a){var i="Program"===r?t:null;u.default.toggleRecording(e,i,n,a)}}(v,i,g,e.getAttribute("data-timerid"),e.getAttribute("data-seriestimerid"));else if("menu"===n){var L="false"===t.getAttribute("data-playoptions")?{shuffle:!1,instantMix:!1,play:!1,playAllFromHere:!1,queue:!1,queueAllFromHere:!1}:{};L.positionTo=t,A(e,L)}else if("playmenu"===n)!function(e,t){var n=I(e);r.e(44910).then(r.bind(r,44910)).then((function(e){e.show({item:n,positionTo:t})}))}(e,t);else if("edit"===n)b(t).then((function(e){!function(e,t){var n=c.A.getApiClient(t);new Promise((function(t,a){var i=n.serverInfo().Id;"Timer"===e.Type?e.ProgramId?Promise.all([r.e(10739),r.e(23346)]).then(r.bind(r,63834)).then((function(r){r.default.show(e.ProgramId,i).then(t,a)})):r.e(59801).then(r.bind(r,59801)).then((function(r){r.default.show(e.Id,i).then(t,a)})):Promise.all([r.e(45642),r.e(26855),r.e(89058)]).then(r.bind(r,26855)).then((function(r){r.default.show(e.Id,i).then(t,a)}))}))}(e,v)}));else if("playtrailer"===n)b(t).then(C);else if("addtoplaylist"===n)b(t).then(w);else if("custom"===n){var O=t.getAttribute("data-customaction");e.dispatchEvent(new CustomEvent("action-".concat(O),{detail:{playlistItemId:e.getAttribute("data-playlistitemid")},cancelable:!1,bubbles:!0}))}}function w(e){Promise.all([r.e(45642),r.e(79689)]).then(r.bind(r,79689)).then((function(t){(new(0,t.default)).show({items:[e.Id],serverId:e.ServerId}).catch((function(){}))})).catch((function(e){console.error("[addToPlaylist] failed to load playlist editor",e)}))}function C(e){var t=c.A.getApiClient(e.ServerId);t.getLocalTrailers(t.getCurrentUserId(),e.Id).then((function(e){a.f.play({items:e})}))}function T(e){var t=s.Ay.parentWithClass(e.target,"itemAction");if(t){var r=t,n=r.getAttribute("data-action");if(n||(r=s.Ay.parentWithAttribute(r,"data-action"))&&(n=r.getAttribute("data-action")),n)return S(t,r,n),e.preventDefault(),e.stopPropagation(),!1}}function P(e){var t=e.detail.command;if("play"===t||"resume"===t||"record"===t||"menu"===t||"info"===t){var r=e.target,n=s.Ay.parentWithClass(r,"itemAction")||s.Ay.parentWithAttribute(r,"data-id");n&&(e.preventDefault(),e.stopPropagation(),S(n,n,t))}}t.Ay={on:function(e,t){!1!==(t=t||{}).click&&e.addEventListener("click",T),!1!==t.command&&i.default.on(e,P)},off:function(e,t){t=t||{},e.removeEventListener("click",T),!1!==t.command&&i.default.off(e,P)},onClick:T,getShortcutAttributesHtml:function(e,t){var r='data-id="'.concat(e.Id,'" data-serverid="').concat(t||e.ServerId,'" data-type="').concat(e.Type,'" data-mediatype="').concat(e.MediaType,'" data-channelid="').concat(e.ChannelId,'" data-isfolder="').concat(e.IsFolder,'"'),n=e.CollectionType;return n&&(r+=' data-collectiontype="'.concat(n,'"')),r}}}}]);