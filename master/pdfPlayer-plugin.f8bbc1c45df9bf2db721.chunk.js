"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7058],{81580:function(e,t,n){n.r(t),n.d(t,{PdfPlayer:function(){return h}}),n(5769),n(63238),n(61418),n(17460),n(14078),n(32081),n(72410),n(95623),n(61514),n(95289),n(99785);var i=n(18613),a=n(28540),s=n(84280),o=n(93355),r=n(72365),u=n(52050),l=n(81643);function c(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}n(61414);var h=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name="PDF Player",this.type="mediaplayer",this.id="pdfplayer",this.priority=1,this.onDialogClosed=this.onDialogClosed.bind(this),this.onWindowKeyUp=this.onWindowKeyUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this)}var t,h;return t=e,(h=[{key:"play",value:function(e){this.progress=0,this.loaded=!1,this.cancellationToken=!1,this.pages={},a.ZP.show();var t=this.createMediaElement();return this.setCurrentSrc(t,e)}},{key:"stop",value:function(){this.unbindEvents();var e={src:this.item};l.Z.trigger(this,"stopped",[e]);var t=this.mediaElement;t&&(o.default.close(t),this.mediaElement=null),a.ZP.hide(),this.cancellationToken=!0}},{key:"destroy",value:function(){}},{key:"currentItem",value:function(){return this.item}},{key:"currentTime",value:function(){return this.progress}},{key:"duration",value:function(){return this.book?this.book.numPages:0}},{key:"volume",value:function(){return 100}},{key:"isMuted",value:function(){return!1}},{key:"paused",value:function(){return!1}},{key:"seekable",value:function(){return!0}},{key:"onWindowKeyUp",value:function(e){var t=s.ZP.getKeyName(e);if(this.loaded)switch(t){case"l":case"ArrowRight":case"Right":this.next();break;case"j":case"ArrowLeft":case"Left":this.previous();break;case"Escape":this.stop()}}},{key:"onTouchStart",value:function(e){this.loaded&&e.touches&&0!==e.touches.length&&(e.touches[0].clientX<r.ZP.getWindowSize().innerWidth/2?this.previous():this.next())}},{key:"onDialogClosed",value:function(){this.stop()}},{key:"bindMediaElementEvents",value:function(){var e=this.mediaElement;e.addEventListener("close",this.onDialogClosed,{once:!0}),e.querySelector(".btnExit").addEventListener("click",this.onDialogClosed,{once:!0})}},{key:"bindEvents",value:function(){this.bindMediaElementEvents(),document.addEventListener("keyup",this.onWindowKeyUp),document.addEventListener("touchstart",this.onTouchStart)}},{key:"unbindMediaElementEvents",value:function(){var e=this.mediaElement;e.removeEventListener("close",this.onDialogClosed),e.querySelector(".btnExit").removeEventListener("click",this.onDialogClosed)}},{key:"unbindEvents",value:function(){this.mediaElement&&this.unbindMediaElementEvents(),document.removeEventListener("keyup",this.onWindowKeyUp),document.removeEventListener("touchstart",this.onTouchStart)}},{key:"createMediaElement",value:function(){var e=this.mediaElement;return e||((e=document.getElementById("pdfPlayer"))||((e=o.default.createDialog({exitAnimationDuration:400,size:"fullscreen",autoFocus:!1,scrollY:!1,exitAnimation:"fadeout",removeOnClose:!0})).id="pdfPlayer",e.innerHTML='<canvas id="canvas"></canvas><div class="actionButtons"><button is="paper-icon-button-light" class="autoSize btnExit" tabindex="-1"><span class="material-icons actionButtonIcon close" aria-hidden="true"></span></button></div>',o.default.open(e)),this.mediaElement=e,e)}},{key:"setCurrentSrc",value:function(e,t){var a=this,s=t.items[0];this.item=s,this.streamInfo={started:!0,ended:!1,item:this.item,mediaSource:{Id:s.Id}};var o=s.ServerId,r=i.Z.getApiClient(o);return Promise.all([n.e(5304),n.e(4551),n.e(9707)]).then(n.t.bind(n,58233,23)).then((function(e){var n=e.GlobalWorkerOptions,i=e.getDocument,o=r.getItemDownloadUrl(s.Id);return a.bindEvents(),n.workerSrc=u.appRouter.baseUrl()+"/libraries/pdf.worker.js",i(o).promise.then((function(e){if(!a.cancellationToken){a.book=e,a.loaded=!0;var n=t.startPositionTicks/1e4;0!==n?(a.loadPage(n+1),a.progress=n):a.loadPage(1)}}))}))}},{key:"next",value:function(){this.progress!==this.duration()-1&&(this.loadPage(this.progress+2),this.progress=this.progress+1,l.Z.trigger(this,"pause"))}},{key:"previous",value:function(){0!==this.progress&&(this.loadPage(this.progress),this.progress=this.progress-1,l.Z.trigger(this,"pause"))}},{key:"replaceCanvas",value:function(e){var t=document.getElementById("canvas");e.id="canvas",t.parentNode.replaceChild(e,t)}},{key:"loadPage",value:function(e){for(var t="page",n=[t+e],i=1;i<=2;i++)e-i>0&&n.push(t+(e-i)),e+i<this.duration()&&n.push(t+(e+i));for(var a=0,s=n;a<s.length;a++){var o=s[a];this.pages[o]||(this.pages[o]=document.createElement("canvas"),this.renderPage(this.pages[o],parseInt(o.slice(4))))}for(var r in this.replaceCanvas(this.pages[t+e],e),this.pages)n.includes(r)||delete this.pages[r]}},{key:"renderPage",value:function(e,t){this.book.getPage(t).then((function(t){var n=t.getViewport({scale:1}),i=e.getContext("2d"),s=r.ZP.getWindowSize().innerWidth/n.width,o=r.ZP.getWindowSize().innerHeight/n.height,u=Math.min(o,s),l=t.getViewport({scale:u});e.width=l.width,e.height=l.height;var c={canvasContext:i,viewport:l};t.render(c).promise.then((function(){a.ZP.hide()}))}))}},{key:"canPlayMediaType",value:function(e){return"book"===(e||"").toLowerCase()}},{key:"canPlayItem",value:function(e){return e.Path&&e.Path.endsWith("pdf")}}])&&c(t.prototype,h),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.default=h}}]);