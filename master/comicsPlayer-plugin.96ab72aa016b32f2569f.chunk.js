"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2430,2126],{85803:function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t),n.d(t,{ComicsPlayer:function(){return C},default:function(){return x}}),n(15610),n(52077),n(25901),n(92189),n(91047),n(5769),n(86248),n(61484),n(63238),n(17460),n(14078),n(23938),n(61418),n(95289),n(98010),n(58112),n(95623),n(72410),n(69217),n(70684),n(68581),n(55849),n(99785),n(92571),n(72482),n(20252),n(14009),n(12699);var i=function(){function e(t,n,r,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t,this._size=n,this._path=r,this._archiveRef=i}var t,n;return t=e,(n=[{key:"name",get:function(){return this._name}},{key:"size",get:function(){return this._size}},{key:"extract",value:function(){return this._archiveRef.extractSingleFile(this._path)}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||u(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a=[],o=!0,s=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(e){s=!0,i=e}finally{try{o||null==n.return||n.return()}finally{if(s)throw i}}return a}}(e,t)||u(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(e,t,n,r,i,a,o){try{var s=e[a](o),l=s.value}catch(e){return void n(e)}s.done?t(l):Promise.resolve(l).then(r,i)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._worker=new Worker(n.workerUrl),this._worker.addEventListener("message",this._workerMsg.bind(this)),this._callbacks=[],this._content={},this._processed=0,this._file=t}var t,n,r,a,s;return t=e,n=[{key:"open",value:(a=regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._postMessage({type:"HELLO"},(function(e,t,n){"READY"===n.type&&e()}));case 2:return e.next=4,this._postMessage({type:"OPEN",file:this._file},(function(e,n,r){"OPENED"===r.type&&e(t)}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e,this)})),s=function(){var e=this,t=arguments;return new Promise((function(n,r){var i=a.apply(e,t);function o(e){h(i,n,r,o,s,"next",e)}function s(e){h(i,n,r,o,s,"throw",e)}o(void 0)}))},function(){return s.apply(this,arguments)})},{key:"hasEncryptedData",value:function(){return this._postMessage({type:"CHECK_ENCRYPTION"},(function(e,t,n){"ENCRYPTION_STATUS"===n.type&&e(n.status)}))}},{key:"usePassword",value:function(e){return this._postMessage({type:"SET_PASSPHRASE",passphrase:e},(function(e,t,n){"PASSPHRASE_STATUS"===n.type&&e(n.status)}))}},{key:"getFilesObject",value:function(){var e=this;return this._processed>0?Promise.resolve().then((function(){return e._content})):this._postMessage({type:"LIST_FILES"},(function(t,n,r){if("ENTRY"===r.type){var a=r.entry,o=c(e._getProp(e._content,a.path),2),s=o[0],l=o[1];return"FILE"===a.type&&(s[l]=new i(a.fileName,a.size,a.path,e)),!0}"END"===r.type&&(e._processed=1,t(e._cloneContent(e._content)))}))}},{key:"getFilesArray",value:function(){var e=this;return this.getFilesObject().then((function(t){return e._objectToArray(t)}))}},{key:"extractSingleFile",value:function(e){return this._postMessage({type:"EXTRACT_SINGLE_FILE",target:e},(function(e,t,n){"FILE"===n.type&&e(new File([n.entry.fileData],n.entry.fileName,{type:"application/octet-stream"}))}))}},{key:"extractFiles",value:function(e){var t=this;return this._processed>1?Promise.resolve().then((function(){return t._content})):this._postMessage({type:"EXTRACT_FILES"},(function(n,r,i){if("ENTRY"===i.type){var a=c(t._getProp(t._content,i.entry.path),2),o=a[0],s=a[1];return"FILE"===i.entry.type&&(o[s]=new File([i.entry.fileData],i.entry.fileName,{type:"application/octet-stream"}),void 0!==e&&setTimeout(e.bind(null,{file:o[s],path:i.entry.path}))),!0}"END"===i.type&&(t._processed=2,t._worker.terminate(),n(t._cloneContent(t._content)))}))}},{key:"_cloneContent",value:function(e){if(e instanceof File||e instanceof i||null===e)return e;for(var t={},n=0,r=Object.keys(e);n<r.length;n++){var a=r[n];t[a]=this._cloneContent(e[a])}return t}},{key:"_objectToArray",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=[],r=0,a=Object.keys(e);r<a.length;r++){var o=a[r];e[o]instanceof File||e[o]instanceof i||null===e[o]?n.push({file:e[o]||o,path:t}):n.push.apply(n,l(this._objectToArray(e[o],"".concat(t).concat(o,"/"))))}return n}},{key:"_getProp",value:function(e,t){var n=t.split("/");""===n[n.length-1]&&n.pop();var r,i=e,a=null,o=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=u(e))){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw a}}}}(n);try{for(o.s();!(r=o.n()).done;){var s=r.value;i[s]=i[s]||{},a=i,i=i[s]}}catch(e){o.e(e)}finally{o.f()}return[a,n[n.length-1]]}},{key:"_postMessage",value:function(e,t){var n=this;return this._worker.postMessage(e),new Promise((function(e,r){n._callbacks.push(n._msgHandler.bind(n,t,e,r))}))}},{key:"_msgHandler",value:function(e,t,n,r){if("BUSY"===r.type)n("worker is busy");else{if("ERROR"!==r.type)return e(t,n,r);n(r.error)}}},{key:"_workerMsg",value:function(e){var t=e.data;(0,this._callbacks[this._callbacks.length-1])(t)||this._callbacks.pop()}}],r=[{key:"init",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e._options=o({workerUrl:"../dist/worker-bundle.js"},t),e._options}},{key:"open",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;n=n||e._options||e.init()&&console.warn("Automatically initializing using options: ",e._options);var r=new e(t,n);return r.open()}}],n&&p(t.prototype,n),r&&p(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),y=n(51161),v=n(48102),g=n(84280),m=n(52050),b=n(18613),w=n(60934);function P(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw a}}}}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function S(e,t,n,r,i,a,o){try{var s=e[a](o),l=s.value}catch(e){return void n(e)}s.done?t(l):Promise.resolve(l).then(r,i)}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e,t,n){return t&&_(e.prototype,t),n&&_(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n(33609);var C=function(){function e(){var t=this;E(this,e),T(this,"onDirChanged",(function(){var e=t.comicsPlayerSettings.langDir;e=e&&"ltr"!==e?"ltr":"rtl",t.changeLanguageDirection(e),t.comicsPlayerSettings.langDir=e})),T(this,"onViewChanged",(function(){var e=t.comicsPlayerSettings.pagesPerView;e=e&&1!==e?1:2,t.changeView(e),t.comicsPlayerSettings.pagesPerView=e})),this.name="Comics Player",this.type="mediaplayer",this.id="comicsplayer",this.priority=1,this.imageMap=new Map,this.onDialogClosed=this.onDialogClosed.bind(this),this.onWindowKeyUp=this.onWindowKeyUp.bind(this)}return I(e,[{key:"play",value:function(e){this.currentPage=0,this.pageCount=0;var t=e.items[0].Id;this.comicsPlayerSettings=w.getComicsPlayerSettings(t);var n=this.createMediaElement();return this.setCurrentSrc(n,e)}},{key:"stop",value:function(){var e;this.unbindEvents();var t={src:this.item};Events.trigger(this,"stopped",[t]);var n=this.item.Id;w.setComicsPlayerSettings(this.comicsPlayerSettings,n),null===(e=this.archiveSource)||void 0===e||e.release();var r=this.mediaElement;r&&(v.default.close(r),this.mediaElement=null),y.ZP.hide()}},{key:"destroy",value:function(){}},{key:"currentTime",value:function(){return this.currentPage}},{key:"duration",value:function(){return this.pageCount}},{key:"currentItem",value:function(){return this.item}},{key:"volume",value:function(){return 100}},{key:"isMuted",value:function(){return!1}},{key:"paused",value:function(){return!1}},{key:"seekable",value:function(){return!0}},{key:"onDialogClosed",value:function(){this.stop()}},{key:"changeLanguageDirection",value:function(e){var t=this.currentPage;this.swiperInstance.changeLanguageDirection(e);var n="ltr"===e?"arrow_circle_left":"arrow_circle_right";this.mediaElement.querySelector(".btnToggleLangDir > span").classList.remove(n);var r="ltr"===e?"arrow_circle_right":"arrow_circle_left";this.mediaElement.querySelector(".btnToggleLangDir > span").classList.add(r);var i="ltr"===e?"Right To Left":"Left To Right";this.mediaElement.querySelector(".btnToggleLangDir").title=i,this.reload(t)}},{key:"changeView",value:function(e){var t=this.currentPage;this.swiperInstance.params.slidesPerView=e,this.swiperInstance.params.slidesPerGroup=e;var n=1===e?"devices_fold":"import_contacts";this.mediaElement.querySelector(".btnToggleView > span").classList.remove(n);var r=1===e?"import_contacts":"devices_fold";this.mediaElement.querySelector(".btnToggleView > span").classList.add(r);var i=1===e?"Double Page View":"Single Page View";this.mediaElement.querySelector(".btnToggleView").title=i,this.reload(t)}},{key:"reload",value:function(e){var t=this.swiperInstance.params.effect;this.swiperInstance.params.effect="none",this.swiperInstance.update(),this.swiperInstance.slideNext(),this.swiperInstance.slidePrev(),this.currentPage!=e&&(this.swiperInstance.slideTo(e),this.swiperInstance.update()),this.swiperInstance.params.effect=t,this.swiperInstance.update()}},{key:"onWindowKeyUp",value:function(e){"Escape"===g.ZP.getKeyName(e)&&this.stop()}},{key:"bindMediaElementEvents",value:function(){var e=this.mediaElement;null==e||e.addEventListener("close",this.onDialogClosed,{once:!0}),null==e||e.querySelector(".btnExit").addEventListener("click",this.onDialogClosed,{once:!0}),null==e||e.querySelector(".btnToggleLangDir").addEventListener("click",this.onDirChanged),null==e||e.querySelector(".btnToggleView").addEventListener("click",this.onViewChanged)}},{key:"bindEvents",value:function(){this.bindMediaElementEvents(),document.addEventListener("keyup",this.onWindowKeyUp)}},{key:"unbindMediaElementEvents",value:function(){var e=this.mediaElement;null==e||e.removeEventListener("close",this.onDialogClosed),null==e||e.querySelector(".btnExit").removeEventListener("click",this.onDialogClosed),null==e||e.querySelector(".btnToggleLangDir").removeEventListener("click",this.onDirChanged),null==e||e.querySelector(".btnToggleView").removeEventListener("click",this.onViewChanged)}},{key:"unbindEvents",value:function(){this.unbindMediaElementEvents(),document.removeEventListener("keyup",this.onWindowKeyUp)}},{key:"createMediaElement",value:function(){var e=this.mediaElement;if(e)return e;if(!(e=document.getElementById("comicsPlayer"))){e=v.default.createDialog({exitAnimationDuration:400,size:"fullscreen",autoFocus:!1,scrollY:!1,exitAnimation:"fadeout",removeOnClose:!0});var t=1===this.comicsPlayerSettings.pagesPerView?"import_contacts":"devices_fold",n="ltr"===this.comicsPlayerSettings.langDir?"arrow_circle_right":"arrow_circle_left";e.id="comicsPlayer",e.classList.add("slideshowDialog"),e.innerHTML="<div dir=".concat(this.comicsPlayerSettings.langDir,' class="slideshowSwiperContainer">\n                                <div class="swiper-wrapper"></div>\n                                <div class="swiper-button-next actionButtonIcon"></div>\n                                <div class="swiper-button-prev actionButtonIcon"></div>\n                                <div class="swiper-pagination"></div>\n                            </div>\n                            <div class="actionButtons">\n                                <button is="paper-icon-button-light" class="autoSize btnToggleLangDir" tabindex="-1">\n                                    <span class="material-icons actionButtonIcon ').concat(n,'" aria-hidden="true"></span>\n                                </button>\n                                <button is="paper-icon-button-light" class="autoSize btnToggleView" tabindex="-1">\n                                    <span class="material-icons actionButtonIcon ').concat(t,'" aria-hidden="true"></span>\n                                </button>\n                                <button is="paper-icon-button-light" class="autoSize btnExit" tabindex="-1">\n                                    <span class="material-icons actionButtonIcon close" aria-hidden="true"></span>\n                                </button>\n                            </div>'),v.default.open(e)}this.mediaElement=e;var r="ltr"===this.comicsPlayerSettings.langDir?"Right To Left":"Left To Right";this.mediaElement.querySelector(".btnToggleLangDir").title=r;var i=1===this.comicsPlayerSettings.pagesPerView?"Double Page View":"Single Page View";return this.mediaElement.querySelector(".btnToggleView").title=i,this.bindEvents(),e}},{key:"setCurrentSrc",value:function(e,t){var r=this,i=t.items[0];this.item=i,this.streamInfo={started:!0,ended:!1,item:this.item,mediaSource:{Id:i.Id}},y.ZP.show();var a=i.ServerId,o=b.Z.getApiClient(a);d.init({workerUrl:m.appRouter.baseUrl()+"/libraries/worker-bundle.js"});var s=o.getItemDownloadUrl(i.Id);return this.archiveSource=new j(s),Promise.all([n.e(5359),n.e(538)]).then(n.bind(n,11309)),this.archiveSource.load().then((function(){return Promise.all([n.e(5359),n.e(4259)]).then(n.bind(n,16870))})).then((function(n){var i=n.Swiper;y.ZP.hide(),r.pageCount=r.archiveSource.urls.length,r.currentPage=t.startPositionTicks/1e4||0,r.swiperInstance=new i(e.querySelector(".slideshowSwiperContainer"),{direction:"horizontal",loop:!1,zoom:{minRatio:1,toggle:!0,containerClass:"slider-zoom-container"},autoplay:!1,keyboard:{enabled:!0},preloadImages:!0,slidesPerView:r.comicsPlayerSettings.pagesPerView,slidesPerGroup:r.comicsPlayerSettings.pagesPerView,slidesPerColumn:1,initialSlide:r.currentPage,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,type:"fraction"},virtual:{slides:r.archiveSource.urls,cache:!0,renderSlide:r.getImgFromUrl,addSlidesBefore:1,addSlidesAfter:1}}),r.swiperInstance.on("slideChange",(function(){r.currentPage=r.swiperInstance.activeIndex,Events.trigger(r,"pause")}))}))}},{key:"getImgFromUrl",value:function(e){return'<div class="swiper-slide">\n                   <div class="slider-zoom-container">\n                       <img src="'.concat(e,'" class="swiper-slide-img">\n                   </div>\n               </div>')}},{key:"canPlayMediaType",value:function(e){return"book"===(e||"").toLowerCase()}},{key:"canPlayItem",value:function(e){return!(!e.Path||!e.Path.endsWith("cbz")&&!e.Path.endsWith("cbr"))}}]),e}(),L=["jpg","jpeg","jpe","jif","jfif","jfi","png","avif","gif","bmp","dib","tiff","tif","webp"],j=function(){function e(t){E(this,e),this.url=t,this.files=[],this.urls=[]}var t,n;return I(e,[{key:"load",value:(t=regeneratorRuntime.mark((function e(){var t,n,r,i,a,o,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.url);case 2:if((t=e.sent).ok){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,t.blob();case 7:return n=e.sent,e.next=10,d.open(n);case 10:return this.archive=e.sent,e.next=13,this.archive.getFilesArray();case 13:return this.raw=e.sent,e.next=16,this.archive.extractFiles();case 16:return e.next=18,this.archive.getFilesArray();case 18:r=(r=e.sent).filter((function(e){var t=e.file.name,n=t.lastIndexOf(".");return-1!==n&&L.includes(t.slice(n+1))})),r.sort((function(e,t){return e.file.name<t.file.name?-1:1})),i=P(r);try{for(i.s();!(a=i.n()).done;)o=a.value,s=URL.createObjectURL(o.file),this.urls.push(s)}catch(e){i.e(e)}finally{i.f()}case 23:case"end":return e.stop()}}),e,this)})),n=function(){var e=this,n=arguments;return new Promise((function(r,i){var a=t.apply(e,n);function o(e){S(a,r,i,o,s,"next",e)}function s(e){S(a,r,i,o,s,"throw",e)}o(void 0)}))},function(){return n.apply(this,arguments)})},{key:"release",value:function(){this.files=[],this.urls.forEach(URL.revokeObjectURL),this.urls=[]}}]),e}(),x=C},18375:function(e,t,n){var r=n(54933),i=n.n(r),a=n(93476),o=n.n(a)()(i());o.push([e.id,"#comicsPlayer{background:#fff}#comicsPlayer .slideshowSwiperContainer{height:100%}#comicsPlayer .slider-zoom-container{height:100%;text-align:center}#comicsPlayer .swiper-slide-img{height:100%;max-height:100%;max-width:100%;object-fit:contain;width:100%}#comicsPlayer .swiper-pagination{background:#fff;color:#000;left:50%;padding:2px 5px;text-shadow:0 0 20px #fff;-webkit-transform:translate(-50%);transform:translate(-50%);width:-webkit-max-content;width:max-content}#comicsPlayer .actionButtons>button:hover{background:#fff}",""]),t.Z=o},33609:function(e,t,n){n.r(t);var r=n(1892),i=n.n(r),a=n(95760),o=n.n(a),s=n(38311),l=n.n(s),c=n(58192),u=n.n(c),f=n(38060),h=n.n(f),p=n(54865),d=n.n(p),y=n(18375),v={};v.styleTagTransform=d(),v.setAttributes=u(),v.insert=l().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=h(),i()(y.Z,v),t.default=y.Z&&y.Z.locals?y.Z.locals:void 0}}]);