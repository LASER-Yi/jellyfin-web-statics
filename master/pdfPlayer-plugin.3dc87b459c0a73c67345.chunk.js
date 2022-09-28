"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7058,4942],{81580:function(e,t,n){n.r(t),n.d(t,{PdfPlayer:function(){return d}}),n(5769),n(63238),n(61418),n(17460),n(14078),n(32081),n(72410),n(95623),n(61514),n(95289),n(99785);var i=n(18613),a=n(51161),o=n(84280),s=n(48102),r=n(72365),u=n(52050),l=(n(27120),n(61414),n(47005));function c(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var d=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name="PDF Player",this.type="mediaplayer",this.id="pdfplayer",this.priority=1,this.onDialogClosed=this.onDialogClosed.bind(this),this.onWindowKeyUp=this.onWindowKeyUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this)}var t,d;return t=e,(d=[{key:"play",value:function(e){this.progress=0,this.loaded=!1,this.cancellationToken=!1,this.pages={},a.ZP.show();var t=this.createMediaElement();return this.setCurrentSrc(t,e)}},{key:"stop",value:function(){this.unbindEvents();var e={src:this.item};l.Events.trigger(this,"stopped",[e]);var t=this.mediaElement;t&&(s.default.close(t),this.mediaElement=null),a.ZP.hide(),this.cancellationToken=!0}},{key:"destroy",value:function(){}},{key:"currentItem",value:function(){return this.item}},{key:"currentTime",value:function(){return this.progress}},{key:"duration",value:function(){return this.book?this.book.numPages:0}},{key:"volume",value:function(){return 100}},{key:"isMuted",value:function(){return!1}},{key:"paused",value:function(){return!1}},{key:"seekable",value:function(){return!0}},{key:"onWindowKeyUp",value:function(e){var t=o.ZP.getKeyName(e);if(this.loaded)switch(t){case"l":case"ArrowRight":case"Right":this.next();break;case"j":case"ArrowLeft":case"Left":this.previous();break;case"Escape":this.stop()}}},{key:"onTouchStart",value:function(e){this.loaded&&e.touches&&0!==e.touches.length&&(e.touches[0].clientX<r.ZP.getWindowSize().innerWidth/2?this.previous():this.next())}},{key:"onDialogClosed",value:function(){this.stop()}},{key:"bindMediaElementEvents",value:function(){var e=this.mediaElement;e.addEventListener("close",this.onDialogClosed,{once:!0}),e.querySelector(".btnExit").addEventListener("click",this.onDialogClosed,{once:!0})}},{key:"bindEvents",value:function(){this.bindMediaElementEvents(),document.addEventListener("keyup",this.onWindowKeyUp),document.addEventListener("touchstart",this.onTouchStart)}},{key:"unbindMediaElementEvents",value:function(){var e=this.mediaElement;e.removeEventListener("close",this.onDialogClosed),e.querySelector(".btnExit").removeEventListener("click",this.onDialogClosed)}},{key:"unbindEvents",value:function(){this.mediaElement&&this.unbindMediaElementEvents(),document.removeEventListener("keyup",this.onWindowKeyUp),document.removeEventListener("touchstart",this.onTouchStart)}},{key:"createMediaElement",value:function(){var e=this.mediaElement;return e||((e=document.getElementById("pdfPlayer"))||((e=s.default.createDialog({exitAnimationDuration:400,size:"fullscreen",autoFocus:!1,scrollY:!1,exitAnimation:"fadeout",removeOnClose:!0})).id="pdfPlayer",e.innerHTML='<canvas id="canvas"></canvas><div class="actionButtons"><button is="paper-icon-button-light" class="autoSize btnExit" tabindex="-1"><span class="material-icons actionButtonIcon close" aria-hidden="true"></span></button></div>',s.default.open(e)),this.mediaElement=e,e)}},{key:"setCurrentSrc",value:function(e,t){var a=this,o=t.items[0];this.item=o,this.streamInfo={started:!0,ended:!1,item:this.item,mediaSource:{Id:o.Id}};var s=o.ServerId,r=i.Z.getApiClient(s);return Promise.all([n.e(5304),n.e(4551),n.e(9707)]).then(n.t.bind(n,58233,23)).then((function(e){var n=e.GlobalWorkerOptions,i=e.getDocument,s=r.getItemDownloadUrl(o.Id);return a.bindEvents(),n.workerSrc=u.appRouter.baseUrl()+"/libraries/pdf.worker.js",i(s).promise.then((function(e){if(!a.cancellationToken){a.book=e,a.loaded=!0;var n=t.startPositionTicks/1e4;0!==n?(a.loadPage(n+1),a.progress=n):a.loadPage(1)}}))}))}},{key:"next",value:function(){this.progress!==this.duration()-1&&(this.loadPage(this.progress+2),this.progress=this.progress+1,l.Events.trigger(this,"pause"))}},{key:"previous",value:function(){0!==this.progress&&(this.loadPage(this.progress),this.progress=this.progress-1,l.Events.trigger(this,"pause"))}},{key:"replaceCanvas",value:function(e){var t=document.getElementById("canvas");e.id="canvas",t.parentNode.replaceChild(e,t)}},{key:"loadPage",value:function(e){for(var t="page",n=[t+e],i=1;i<=2;i++)e-i>0&&n.push(t+(e-i)),e+i<this.duration()&&n.push(t+(e+i));for(var a=0,o=n;a<o.length;a++){var s=o[a];this.pages[s]||(this.pages[s]=document.createElement("canvas"),this.renderPage(this.pages[s],parseInt(s.slice(4))))}for(var r in this.replaceCanvas(this.pages[t+e],e),this.pages)n.includes(r)||delete this.pages[r]}},{key:"renderPage",value:function(e,t){this.book.getPage(t).then((function(t){var n=t.getViewport({scale:1}),i=e.getContext("2d"),o=r.ZP.getWindowSize().innerWidth/n.width,s=r.ZP.getWindowSize().innerHeight/n.height,u=Math.min(s,o),l=t.getViewport({scale:u});e.width=l.width,e.height=l.height;var c={canvasContext:i,viewport:l};t.render(c).promise.then((function(){a.ZP.hide()}))}))}},{key:"canPlayMediaType",value:function(e){return"book"===(e||"").toLowerCase()}},{key:"canPlayItem",value:function(e){return!(!e.Path||!e.Path.endsWith("pdf"))}}])&&c(t.prototype,d),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.default=d},37350:function(e,t,n){var i=n(54933),a=n.n(i),o=n(93476),s=n.n(o)()(a());s.push([e.id,"#pdfPlayer{background:#000;height:100%;overflow:none;position:relative;width:100%;z-index:100}#canvas{display:block;margin:auto}.actionButtons{position:absolute;right:.5vh;top:.5vh;z-index:1002}.actionButtonIcon{color:#000;opacity:.7}",""]),t.Z=s},27120:function(e,t,n){n.r(t);var i=n(1892),a=n.n(i),o=n(95760),s=n.n(o),r=n(38311),u=n.n(r),l=n(58192),c=n.n(l),d=n(38060),h=n.n(d),v=n(54865),p=n.n(v),f=n(37350),g={};g.styleTagTransform=p(),g.setAttributes=c(),g.insert=u().bind(null,"head"),g.domAPI=s(),g.insertStyleElement=h(),a()(f.Z,g),t.default=f.Z&&f.Z.locals?f.Z.locals:void 0}}]);