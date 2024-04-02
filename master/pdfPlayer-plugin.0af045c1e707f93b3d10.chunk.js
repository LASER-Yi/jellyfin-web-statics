"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4836],{38362:function(e,t,n){n.r(t),n.d(t,{PdfPlayer:function(){return p}}),n(29305),n(32733),n(84701),n(36947),n(44962),n(81678),n(76281),n(89336),n(4754),n(94),n(78557),n(96054),n(90076),n(50987),n(99425),n(83994),n(82367);var i=n(86191),o=n(56869),r=n(74550),a=n(79754),s=n(47629),u=n(70267),l=n(66176),c=n(62014);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function h(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,v(i.key),i)}}function v(e){var t=function(e,t){if("object"!=d(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,"string");if("object"!=d(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==d(t)?t:t+""}n(15453);var p=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name="PDF Player",this.type=l.Q.MediaPlayer,this.id="pdfplayer",this.priority=1,this.onDialogClosed=this.onDialogClosed.bind(this),this.onWindowKeyUp=this.onWindowKeyUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this)},(t=[{key:"play",value:function(e){this.progress=0,this.loaded=!1,this.cancellationToken=!1,this.pages={},o.Ay.show();var t=this.createMediaElement();return this.setCurrentSrc(t,e)}},{key:"stop",value:function(){this.unbindEvents();var e={src:this.item};c.A.trigger(this,"stopped",[e]);var t=this.mediaElement;t&&(a.default.close(t),this.mediaElement=null),o.Ay.hide(),this.cancellationToken=!0}},{key:"destroy",value:function(){}},{key:"currentItem",value:function(){return this.item}},{key:"currentTime",value:function(){return this.progress}},{key:"duration",value:function(){return this.book?this.book.numPages:0}},{key:"volume",value:function(){return 100}},{key:"isMuted",value:function(){return!1}},{key:"paused",value:function(){return!1}},{key:"seekable",value:function(){return!0}},{key:"onWindowKeyUp",value:function(e){var t=r.Ay.getKeyName(e);if(this.loaded)switch(t){case"l":case"ArrowRight":case"Right":this.next();break;case"j":case"ArrowLeft":case"Left":this.previous();break;case"Escape":this.stop()}}},{key:"onTouchStart",value:function(e){this.loaded&&e.touches&&0!==e.touches.length&&(e.touches[0].clientX<s.Ay.getWindowSize().innerWidth/2?this.previous():this.next())}},{key:"onDialogClosed",value:function(){this.stop()}},{key:"bindMediaElementEvents",value:function(){var e=this.mediaElement;e.addEventListener("close",this.onDialogClosed,{once:!0}),e.querySelector(".btnExit").addEventListener("click",this.onDialogClosed,{once:!0})}},{key:"bindEvents",value:function(){this.bindMediaElementEvents(),document.addEventListener("keyup",this.onWindowKeyUp),document.addEventListener("touchstart",this.onTouchStart)}},{key:"unbindMediaElementEvents",value:function(){var e=this.mediaElement;e.removeEventListener("close",this.onDialogClosed),e.querySelector(".btnExit").removeEventListener("click",this.onDialogClosed)}},{key:"unbindEvents",value:function(){this.mediaElement&&this.unbindMediaElementEvents(),document.removeEventListener("keyup",this.onWindowKeyUp),document.removeEventListener("touchstart",this.onTouchStart)}},{key:"createMediaElement",value:function(){var e=this.mediaElement;return e||((e=document.getElementById("pdfPlayer"))||((e=a.default.createDialog({exitAnimationDuration:400,size:"fullscreen",autoFocus:!1,scrollY:!1,exitAnimation:"fadeout",removeOnClose:!0})).id="pdfPlayer",e.innerHTML='<canvas id="canvas"></canvas><div class="actionButtons"><button is="paper-icon-button-light" class="autoSize btnExit" tabindex="-1"><span class="material-icons actionButtonIcon close" aria-hidden="true"></span></button></div>',a.default.open(e)),this.mediaElement=e,e)}},{key:"setCurrentSrc",value:function(e,t){var o=this,r=t.items[0];this.item=r,this.streamInfo={started:!0,ended:!1,item:this.item,mediaSource:{Id:r.Id}};var a=r.ServerId,s=i.A.getApiClient(a);return Promise.all([n.e(59928),n.e(69601),n.e(99911)]).then(n.t.bind(n,14144,23)).then((function(e){var n=e.GlobalWorkerOptions,i=e.getDocument,a=s.getItemDownloadUrl(r.Id);return o.bindEvents(),n.workerSrc=u.appRouter.baseUrl()+"/libraries/pdf.worker.js",i(a).promise.then((function(e){if(!o.cancellationToken){o.book=e,o.loaded=!0;var n=t.startPositionTicks/1e4;0!==n?(o.loadPage(n+1),o.progress=n):o.loadPage(1)}}))}))}},{key:"next",value:function(){this.progress!==this.duration()-1&&(this.loadPage(this.progress+2),this.progress=this.progress+1,c.A.trigger(this,"pause"))}},{key:"previous",value:function(){0!==this.progress&&(this.loadPage(this.progress),this.progress=this.progress-1,c.A.trigger(this,"pause"))}},{key:"replaceCanvas",value:function(e){var t=document.getElementById("canvas");e.id="canvas",t.parentNode.replaceChild(e,t)}},{key:"loadPage",value:function(e){for(var t="page",n=[t+e],i=1;i<=2;i++)e-i>0&&n.push(t+(e-i)),e+i<this.duration()&&n.push(t+(e+i));for(var o=0,r=n;o<r.length;o++){var a=r[o];this.pages[a]||(this.pages[a]=document.createElement("canvas"),this.renderPage(this.pages[a],parseInt(a.slice(4),10)))}for(var s in this.replaceCanvas(this.pages[t+e],e),this.pages)n.includes(s)||delete this.pages[s]}},{key:"renderPage",value:function(e,t){this.book.getPage(t).then((function(t){var n=s.Ay.getWindowSize().innerWidth,i=s.Ay.getWindowSize().innerHeight,r=Math.ceil(window.devicePixelRatio||1),a=t.getViewport({scale:r}),u=e.getContext("2d");e.width=a.width,e.height=a.height,n<i?(e.style.width="100%",e.style.height="auto"):(e.style.height="100%",e.style.width="auto");var l={canvasContext:u,viewport:a};t.render(l).promise.then((function(){o.Ay.hide()}))}))}},{key:"canPlayMediaType",value:function(e){return"book"===(e||"").toLowerCase()}},{key:"canPlayItem",value:function(e){var t;return null===(t=e.Path)||void 0===t?void 0:t.endsWith("pdf")}}])&&h(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();t.default=p}}]);