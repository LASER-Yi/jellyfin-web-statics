"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[87080,30531],{81038:function(e,t,n){n.r(t),n.d(t,{default:function(){return b},fillImage:function(){return f},fillImages:function(){return p},getPrimaryImageAspectRatio:function(){return g},lazyChildren:function(){return v},lazyImage:function(){return d},setLazyImage:function(){return y}}),n(2663),n(81414),n(59139),n(86028),n(88646),n(19131),n(54134),n(91270),n(14011),n(56187),n(38690),n(89228),n(13227),n(11431);var r=n(31338),a=n(60934);function i(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){s=!0,i=e},f:function(){try{l||null==n.return||n.return()}finally{if(s)throw i}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var l=new function(){return new Worker(n.p+"blurhash.worker.bundle.js")},s={};function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.getAttribute("data-src");t&&m(e,t)}function c(e,t,n,r){var a=document.createElement("canvas");a.setAttribute("aria-hidden","true"),a.width=n,a.height=r;var i=a.getContext("2d"),o=i.createImageData(n,r);o.data.set(t),i.putImageData(o,0,0),requestAnimationFrame((function(){a.classList.add("blurhash-canvas"),e.parentNode.insertBefore(a,e),e.classList.add("blurhashed"),e.removeAttribute("data-blurhash")}))}function u(e,t){try{s[t]=(s[t]||[]).filter((function(t){return t!==e})),s[t].push(e),l.postMessage({hash:t,width:20,height:20})}catch(t){return console.error(t),void e.classList.add("non-blurhashable")}}function f(e){if(!e)throw new Error("entry cannot be null");var t,n=e.target;t=n?n.getAttribute("data-src"):e,e.isIntersecting?t&&m(n,t):t||function(e){var t;e.removeEventListener("animationend",h);var n,r=e.previousSibling;"CANVAS"===(null==r?void 0:r.tagName)&&r.classList.remove("lazy-hidden"),null===(t=e.parentNode)||void 0===t||null===(t=t.querySelector(".cardPadder"))||void 0===t||t.classList.remove("lazy-hidden-children"),"IMG"!==e.tagName?(n=e.style.backgroundImage.slice(4,-1).replace(/"/g,""),e.style.backgroundImage="none"):(n=e.getAttribute("src"),e.setAttribute("src","")),e.setAttribute("data-src",n),e.classList.remove("lazy-image-fadein-fast","lazy-image-fadein"),e.classList.add("lazy-hidden")}(n)}function h(e){var t=e.target;requestAnimationFrame((function(){var e,n=t.previousSibling;t.classList.contains("blurhashed")&&"CANVAS"===(null==n?void 0:n.tagName)&&n.classList.add("lazy-hidden"),null===(e=t.parentNode)||void 0===e||null===(e=e.querySelector(".cardPadder"))||void 0===e||e.classList.add("lazy-hidden-children")})),t.removeEventListener("animationend",h)}function m(e,t){if(void 0===t)throw new TypeError("url cannot be undefined");var n=new Image;n.src=t,e.classList.add("lazy-hidden"),e.addEventListener("animationend",h),n.addEventListener("load",(function(){requestAnimationFrame((function(){"IMG"!==e.tagName?e.style.backgroundImage="url('"+t+"')":e.setAttribute("src",t),e.removeAttribute("data-src"),a.enableFastFadein()?e.classList.add("lazy-image-fadein-fast"):e.classList.add("lazy-image-fadein"),e.classList.remove("lazy-hidden")}))}))}function v(e){if(a.enableBlurhash()){var t,n=i(e.querySelectorAll(".lazy"));try{for(n.s();!(t=n.n()).done;){var o=t.value,l=o.getAttribute("data-blurhash");!o.classList.contains("blurhashed","non-blurhashable")&&l?u(o,l):l||o.classList.contains("blurhashed")||o.classList.add("non-blurhashable")}}catch(e){n.e(e)}finally{n.f()}}r.NC(e,f)}function g(e){for(var t=[],n=0,r=e.length;n<r;n++){var a=e[n].PrimaryImageAspectRatio||0;a&&(t[t.length]=a)}if(!t.length)return null;t.sort((function(e,t){return e-t}));var i,o=Math.floor(t.length/2);i=t.length%2?t[o]:(t[o-1]+t[o])/2;var l=2/3;if(Math.abs(l-i)<=.15)return l;var s=16/9;if(Math.abs(s-i)<=.2)return s;if(Math.abs(1-i)<=.15)return 1;var d=4/3;return Math.abs(d-i)<=.15?d:i}function p(e){for(var t=0,n=e.length;t<n;t++)f(e[0])}function y(e,t){e.classList.add("lazy"),e.setAttribute("data-src",t),d(e)}l.addEventListener("message",(function(e){var t=e.data,n=t.pixels,r=t.hsh,a=t.width,o=t.height,l=s[r];if(null!=l&&l.length){var d,u=i(l);try{for(u.s();!(d=u.n()).done;)c(d.value,n,a,o)}catch(e){u.e(e)}finally{u.f()}delete s[r]}}));var b={setLazyImage:y,fillImages:p,fillImage:f,lazyImage:d,lazyChildren:v,getPrimaryImageAspectRatio:g}},31338:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,"string");if("object"!==r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(a.key),"symbol"===r(i)?i:String(i)),a)}var i}n.d(t,{NC:function(){return o}}),n(81414),n(47134),n(91270),n(14011),n(26031),n(95822),n(56187),n(38690),n(11908),n(33096),n(89228),n(13227),n(11431);var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=t}var t,n;return t=e,(n=[{key:"createObserver",value:function(){var e=this.options.callback,t=new IntersectionObserver((function(t){t.forEach((function(t){e(t)}))}),{rootMargin:"50%",threshold:0});this.observer=t}},{key:"addElements",value:function(e){var t=this.observer;t||(this.createObserver(),t=this.observer),Array.from(e).forEach((function(e){t.observe(e)}))}},{key:"destroyObserver",value:function(){var e=this.observer;e&&(e.disconnect(),this.observer=null)}},{key:"destroy",value:function(){this.destroyObserver(),this.options=null}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){!function(e,t,n){e.length&&new i({callback:n}).addElements(e)}(e.getElementsByClassName("lazy"),0,t)}t.ZP={LazyLoader:i,lazyChildren:o}},30531:function(e,t,n){n.r(t),n(81414),n(37666);var r=n(94994),a=n(28540),i=n(18613),o=n(56663),l=n(3137),s=n(56809);function d(e,t,n,i){return a.ZP.show(),e.getItem(e.getCurrentUserId(),n).then((function(l){return l.IsSeries?e.getNewLiveTvTimerDefaults({programId:n}).then((function(t){return e.createLiveTvSeriesTimer(t).then((function(){a.ZP.hide(),(0,o.Z)(r.ZP.translate("SeriesRecordingScheduled"))}))})):i?c(t,e.serverId()):u(e.serverId(),t,!0)}))}function c(e,t){return new Promise((function(n,o){(0,l.Z)({text:r.ZP.translate("MessageConfirmRecordingCancellation"),primary:"delete",confirmText:r.ZP.translate("HeaderCancelRecording"),cancelText:r.ZP.translate("HeaderKeepRecording")}).then((function(){a.ZP.show(),u(i.Z.getApiClient(t),e,!0).then(n,o)}),o)}))}function u(e,t,n){return a.ZP.show(),e.cancelLiveTvTimer(t).then((function(){!1!==n&&(a.ZP.hide(),(0,o.Z)(r.ZP.translate("RecordingCancelled")))}))}function f(e,t,n){return a.ZP.show(),e.getNewLiveTvTimerDefaults({programId:t}).then((function(t){return(n?e.createLiveTvSeriesTimer(t):e.createLiveTvTimer(t)).then((function(){a.ZP.hide(),(0,o.Z)(r.ZP.translate("RecordingScheduled"))}))}))}t.default={cancelTimer:u,createRecording:f,changeRecordingToSeries:d,toggleRecording:function(e,t,n,l,c){var h=i.Z.getApiClient(e),m=n&&"Cancelled"!==l;return c&&m?function(e,t,n,l,d){return new Promise((function(t,c){var f=[];f.push({name:r.ZP.translate("HeaderKeepRecording"),id:"cancel",type:"submit"}),"InProgress"===l?f.push({name:r.ZP.translate("HeaderStopRecording"),id:"canceltimer",type:"cancel"}):f.push({name:r.ZP.translate("HeaderCancelRecording"),id:"canceltimer",type:"cancel"}),f.push({name:r.ZP.translate("HeaderCancelSeries"),id:"cancelseriestimer",type:"cancel"}),s.Z.show({text:r.ZP.translate("MessageConfirmRecordingCancellation"),buttons:f}).then((function(l){var s=i.Z.getApiClient(e);"canceltimer"===l?(a.ZP.show(),u(s,n,!0).then(t,c)):"cancelseriestimer"===l?(a.ZP.show(),s.cancelLiveTvSeriesTimer(d).then((function(){(0,o.Z)(r.ZP.translate("SeriesCancelled")),a.ZP.hide(),t()}),c)):t()}),c)}))}(e,0,n,l,c):m&&t?d(h,n,t,!0):t?f(h,t):Promise.reject()},cancelTimerWithConfirmation:c,cancelSeriesTimerWithConfirmation:function(e,t){return new Promise((function(n,s){(0,l.Z)({text:r.ZP.translate("MessageConfirmRecordingCancellation"),primary:"delete",confirmText:r.ZP.translate("HeaderCancelSeries"),cancelText:r.ZP.translate("HeaderKeepSeries")}).then((function(){a.ZP.show(),i.Z.getApiClient(t).cancelLiveTvSeriesTimer(e).then((function(){(0,o.Z)(r.ZP.translate("SeriesCancelled")),a.ZP.hide(),n()}),s)}),s)}))}}},61008:function(e,t,n){n(13227),n(81414),n(37666),n(14011),n(11431),n(62659),n(54112),n(84159);var r=n(48957),a=n(58517),i=n(66560),o=n(94994),l=n(72365),s=n(30531),d=n(18613),c=n(56663),u=n(60934);function f(e,t,n){for(var a,i=e.parentNode,o=e.classList.length?".".concat(e.classList[0]):"",s=i.querySelectorAll("".concat(o,"[data-id]")),d=[],c=!1,u=0,f=s.length;u<f;u++)s[u]===e&&(c=!0,a=u),!c&&n||d.push(s[u].getAttribute("data-id"));var h=l.ZP.parentWithClass(e,"itemsContainer");if(null!=h&&h.fetchData){var m=n?{StartIndex:a}:{};return h.fetchData(m).then((function(e){return n?r.O.queue({items:e.Items}):r.O.play({items:e.Items,startIndex:a})}))}if(d.length)return n?r.O.queue({ids:d,serverId:t}):r.O.play({ids:d,serverId:t,startIndex:a})}function h(e){var t=(e=l.ZP.parentWithAttribute(e,"data-id")).getAttribute("data-serverid"),n=e.getAttribute("data-id"),r=e.getAttribute("data-type"),a=d.Z.getApiClient(t);return"Timer"===r?a.getLiveTvTimer(n):"SeriesTimer"===r?a.getLiveTvSeriesTimer(n):a.getItem(a.getCurrentUserId(),n)}function m(e){return{Type:e.getAttribute("data-type"),Id:e.getAttribute("data-id"),TimerId:e.getAttribute("data-timerid"),CollectionType:e.getAttribute("data-collectiontype"),ChannelId:e.getAttribute("data-channelid"),SeriesId:e.getAttribute("data-seriesid"),ServerId:e.getAttribute("data-serverid"),MediaType:e.getAttribute("data-mediatype"),Path:e.getAttribute("data-path"),IsFolder:"true"===e.getAttribute("data-isfolder"),StartDate:e.getAttribute("data-startdate"),EndDate:e.getAttribute("data-enddate"),UserData:{PlaybackPositionTicks:parseInt(e.getAttribute("data-positionticks")||"0",10)}}}function v(e,t,a){t=t||e;var y=e.getAttribute("data-id");y||(y=(e=l.ZP.parentWithAttribute(e,"data-id")).getAttribute("data-id"));var b=m(e),I=l.ZP.parentWithClass(e,"itemsContainer"),A="items-"+(b.IsFolder?b.Id:null==I?void 0:I.getAttribute("data-parentid"))+"-Folder",P=b.ServerId,Z=b.Type,C="Program"===Z?b.ChannelId:b.Id;if("Photo"===b.MediaType&&"link"===a&&(a="play"),"link"===a)i.appRouter.showItem(b,{context:e.getAttribute("data-context"),parentId:e.getAttribute("data-parentid")});else if("programdialog"===a)!function(e){Promise.all([n.e(95785),n.e(85624)]).then(n.bind(n,45012)).then((function(t){t.default.show(e.Id,e.ServerId)}))}(b);else if("instantmix"===a)r.O.instantMix({Id:C,ServerId:P});else if("play"===a||"resume"===a){var S=parseInt(e.getAttribute("data-positionticks")||"0",10),w=u.getSortValuesLegacy(A,"SortName");r.O.canPlay(b)?r.O.play({ids:[C],startPositionTicks:S,serverId:P,queryOptions:{SortBy:w.sortBy,SortOrder:w.sortOrder}}):console.warn("Unable to play item",b)}else if("queue"===a)r.O.isPlaying()?(r.O.queue({ids:[C],serverId:P}),(0,c.Z)(o.ZP.translate("MediaQueued"))):r.O.queue({ids:[C],serverId:P});else if("playallfromhere"===a)f(e,P);else if("queueallfromhere"===a)f(e,P,!0);else if("setplaylistindex"===a)r.O.setCurrentPlaylistItem(e.getAttribute("data-playlistitemid"));else if("record"===a)!function(e,t,n,r,a){if("Program"===n||r||a){var i="Program"===n?t:null;s.default.toggleRecording(e,i,r,a)}}(P,y,Z,e.getAttribute("data-timerid"),e.getAttribute("data-seriestimerid"));else if("menu"===a){var T="false"===t.getAttribute("data-playoptions")?{shuffle:!1,instantMix:!1,play:!1,playAllFromHere:!1,queue:!1,queueAllFromHere:!1}:{};T.positionTo=t,function(e,t){h(e).then((function(r){var a=e.getAttribute("data-playlistid"),i=e.getAttribute("data-collectionid");if(a){var o=l.ZP.parentWithAttribute(e,"data-playlistitemid");r.PlaylistItemId=o?o.getAttribute("data-playlistitemid"):null}Promise.all([n.e(9337),n.e(31473)]).then(n.bind(n,9337)).then((function(n){d.Z.getApiClient(r.ServerId).getCurrentUser().then((function(o){n.show(Object.assign({item:r,play:!0,queue:!0,playAllFromHere:!r.IsFolder,queueAllFromHere:!r.IsFolder,playlistId:a,collectionId:i,user:o},t||{})).then((function(n){var r,a;"playallfromhere"===n.command||"queueallfromhere"===n.command?v(e,t.positionTo,n.command):(n.updated||n.deleted)&&(r=e,(a=(a=t.itemsContainer)||l.ZP.parentWithAttribute(r,"is","emby-itemscontainer"))&&a.notifyRefreshNeeded(!0))})).catch((function(){}))}))}))}))}(e,T)}else if("playmenu"===a)!function(e,t){var r=m(e);n.e(95004).then(n.bind(n,95004)).then((function(e){e.show({item:r,positionTo:t})}))}(e,t);else if("edit"===a)h(t).then((function(e){!function(e,t){var r=d.Z.getApiClient(t);new Promise((function(t,a){var i=r.serverInfo().Id;"Timer"===e.Type?e.ProgramId?Promise.all([n.e(95785),n.e(85624)]).then(n.bind(n,45012)).then((function(n){n.default.show(e.ProgramId,i).then(t,a)})):n.e(21341).then(n.bind(n,21341)).then((function(n){n.default.show(e.Id,i).then(t,a)})):Promise.all([n.e(43786),n.e(13784)]).then(n.bind(n,43786)).then((function(n){n.default.show(e.Id,i).then(t,a)}))}))}(e,P)}));else if("playtrailer"===a)h(t).then(p);else if("addtoplaylist"===a)h(t).then(g);else if("custom"===a){var L=t.getAttribute("data-customaction");e.dispatchEvent(new CustomEvent("action-".concat(L),{detail:{playlistItemId:e.getAttribute("data-playlistitemid")},cancelable:!1,bubbles:!0}))}}function g(e){n.e(43126).then(n.bind(n,43126)).then((function(t){(new(0,t.default)).show({items:[e.Id],serverId:e.ServerId})}))}function p(e){var t=d.Z.getApiClient(e.ServerId);t.getLocalTrailers(t.getCurrentUserId(),e.Id).then((function(e){r.O.play({items:e})}))}function y(e){var t=l.ZP.parentWithClass(e.target,"itemAction");if(t){var n=t,r=n.getAttribute("data-action");if(r||(n=l.ZP.parentWithAttribute(n,"data-action"))&&(r=n.getAttribute("data-action")),r)return v(t,n,r),e.preventDefault(),e.stopPropagation(),!1}}function b(e){var t=e.detail.command;if("play"===t||"resume"===t||"record"===t||"menu"===t||"info"===t){var n=e.target,r=l.ZP.parentWithClass(n,"itemAction")||l.ZP.parentWithAttribute(n,"data-id");r&&(e.preventDefault(),e.stopPropagation(),v(r,r,t))}}t.ZP={on:function(e,t){!1!==(t=t||{}).click&&e.addEventListener("click",y),!1!==t.command&&a.default.on(e,b)},off:function(e,t){t=t||{},e.removeEventListener("click",y),!1!==t.command&&a.default.off(e,b)},onClick:y,getShortcutAttributesHtml:function(e,t){var n='data-id="'.concat(e.Id,'" data-serverid="').concat(t||e.ServerId,'" data-type="').concat(e.Type,'" data-mediatype="').concat(e.MediaType,'" data-channelid="').concat(e.ChannelId,'" data-isfolder="').concat(e.IsFolder,'"'),r=e.CollectionType;return r&&(n+=' data-collectiontype="'.concat(r,'"')),n}}}}]);