"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2169],{18100:function(e,t,n){n.r(t),n.d(t,{HtmlVideoPlayer:function(){return ne}}),n(99785),n(72410),n(25901),n(92189),n(91047),n(5769),n(86248),n(63238),n(61418),n(95623),n(61514),n(17460),n(14078),n(98010),n(52077),n(911),n(23938),n(52327),n(15610),n(43512),n(55849),n(61013),n(32081),n(11755);var r=n(31699),i=n.n(r),a=n(47518),o=n(47005),s=n(94389),u=n(56705),l=n(83094),c=n(53218),d=n(86628),h=n(90884),v=n(71616),f=n(92275),p=n(44614),y=n(53913),m=n(72247),b=n(62474),k=n(69288);function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a=[],o=!0,s=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(e){s=!0,i=e}finally{try{o||null==n.return||n.return()}finally{if(s)throw i}}return a}}(e,t)||P(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=P(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw a}}}}function P(e,t){if(e){if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?S(e,t):void 0}}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function E(e,t,n,r,i,a,o){try{var s=e[a](o),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,i)}function T(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function o(e){E(a,r,i,o,s,"next",e)}function s(e){E(a,r,i,o,s,"throw",e)}o(void 0)}))}}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function M(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,O(e,t,"set"),n),n}function L(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,O(e,t,"get"))}function O(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}function Z(e){return new Promise((function(t){var n=new XMLHttpRequest;n.open("HEAD",e,!0),n.onload=function(){t(n.responseURL||e)},n.onerror=function(n){console.error(n),t(e)},n.send(null)}))}function I(e,t){var n=e.replace(/\\N/gi,"\n").replace(/\r/gi,"");return t?n.replace(/\n/gi,"<br>"):n}function V(e,t,n){if(v.ZP.isLocalItem(t)&&e.Path)return e.Path;var r=c.O.getSubtitleUrl(e,t.ServerId);return n&&(r=r.replace(".vtt",n)),r}var W=new WeakMap,F=new WeakMap,R=new WeakMap,U=new WeakMap,_=new WeakMap,j=new WeakMap,D=new WeakMap,N=new WeakMap,H=new WeakMap,q=new WeakMap,B=new WeakMap,Q=new WeakMap,z=new WeakMap,J=new WeakMap,X=new WeakMap,G=new WeakMap,$=new WeakMap,K=new WeakMap,Y=new WeakMap,ee=new WeakMap,te=new WeakMap,ne=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),A(this,"name",void 0),A(this,"type","mediaplayer"),A(this,"id","htmlvideoplayer"),A(this,"priority",1),A(this,"isFetching",!1),M(this,W,{writable:!0,value:void 0}),M(this,F,{writable:!0,value:void 0}),M(this,R,{writable:!0,value:void 0}),M(this,U,{writable:!0,value:void 0}),M(this,_,{writable:!0,value:void 0}),M(this,j,{writable:!0,value:void 0}),M(this,D,{writable:!0,value:void 0}),M(this,N,{writable:!0,value:void 0}),M(this,H,{writable:!0,value:void 0}),M(this,q,{writable:!0,value:void 0}),M(this,B,{writable:!0,value:void 0}),M(this,Q,{writable:!0,value:void 0}),M(this,z,{writable:!0,value:void 0}),M(this,J,{writable:!0,value:0}),M(this,X,{writable:!0,value:void 0}),M(this,G,{writable:!0,value:void 0}),M(this,$,{writable:!0,value:void 0}),M(this,K,{writable:!0,value:void 0}),M(this,Y,{writable:!0,value:void 0}),A(this,"_hlsPlayer",void 0),A(this,"_castPlayer",void 0),A(this,"_currentPlayOptions",void 0),M(this,ee,{writable:!0,value:void 0}),M(this,te,{writable:!0,value:void 0}),A(this,"onEnded",(function(e){var n=e.target;t.destroyCustomTrack(n),(0,h.mr)(t,n,t.onError)})),A(this,"onTimeUpdate",(function(e){var n=e.target,r=n.currentTime;r&&!L(t,$)&&(x(t,$,!0),t.ensureValidVideo(n)),x(t,K,r);var i=t._currentPlayOptions;if(i){var a=1e3*r;a+=(i.transcodingOffsetTicks||0)/1e4,t.updateSubtitleText(a)}o.Events.trigger(t,"timeupdate")})),A(this,"onVolumeChange",(function(e){var n=e.target;(0,h.wk)(n.volume),o.Events.trigger(t,"volumechange")})),A(this,"onNavigatedToOsd",(function(){var e=L(t,W);e&&(e.classList.remove("videoPlayerContainer-onTop"),t.onStartedAndNavigatedToOsd())})),A(this,"onPlaying",(function(e){var n=e.target;L(t,G)||(x(t,G,!0),n.removeAttribute("controls"),u.ZP.hide(),(0,h.AW)(t,e.target,t._currentPlayOptions.playerStartPositionTicks,(function(){L(t,_)&&(L(t,_).timeOffset=(t._currentPlayOptions.transcodingOffsetTicks||0)/1e7+L(t,H),L(t,_).resize(),L(t,_).resetRenderAheadCache(!1))})),t._currentPlayOptions.fullscreen?d.appRouter.showVideoOsd().then(t.onNavigatedToOsd):(d.appRouter.setTransparency("backdrop"),L(t,W).classList.remove("videoPlayerContainer-onTop"),t.onStartedAndNavigatedToOsd())),o.Events.trigger(t,"playing")})),A(this,"onPlay",(function(){o.Events.trigger(t,"unpause")})),A(this,"onClick",(function(){o.Events.trigger(t,"click")})),A(this,"onDblClick",(function(){o.Events.trigger(t,"dblclick")})),A(this,"onPause",(function(){o.Events.trigger(t,"pause")})),A(this,"onError",(function(e){var n,r=e.target,i=r.error&&r.error.code||0,a=r.error&&r.error.message||"";switch(console.error("media element error: ".concat(i," ").concat(a)),i){case 1:default:return;case 2:n="network";break;case 3:if(t._hlsPlayer)return void(0,h.tq)(t);n="mediadecodeerror";break;case 4:n="medianotsupported"}(0,h.p_)(t,n)})),a.Z.edgeUwp?this.name="Windows Video Player":this.name="Html Video Player"}var t,r,P,S,E;return t=e,r=[{key:"currentSrc",value:function(){return L(this,X)}},{key:"incrementFetchQueue",value:function(){L(this,J)<=0&&(this.isFetching=!0,o.Events.trigger(this,"beginFetch")),x(this,J,+L(this,J)+1)}},{key:"decrementFetchQueue",value:function(){x(this,J,+L(this,J)-1),L(this,J)<=0&&(this.isFetching=!1,o.Events.trigger(this,"endFetch"))}},{key:"updateVideoUrl",value:function(e){var t=e.url.toLowerCase().includes(".m3u8"),n=e.mediaSource,r=e.item;if(n&&r&&!n.RunTimeTicks&&t&&"Transcode"===e.playMethod&&(a.Z.iOS||a.Z.osx)){var i=e.url.replace("master.m3u8","live.m3u8");return u.ZP.show(),console.debug("prefetching hls playlist: ".concat(i)),y.Z.getApiClient(r.ServerId).ajax({type:"GET",url:i}).then((function(){console.debug("completed prefetching hls playlist: ".concat(i)),u.ZP.hide(),e.url=i}),(function(){console.error("error prefetching hls playlist: ".concat(i)),u.ZP.hide()}))}return Promise.resolve()}},{key:"play",value:function(e){var t=this;return x(this,G,!1),x(this,$,!1),x(this,K,null),!1!==e.resetSubtitleOffset&&this.resetSubtitleOffset(),this.createMediaElement(e).then((function(n){return t.updateVideoUrl(e).then((function(){return t.setCurrentSrc(n,e)}))}))}},{key:"setSrcWithFlvJs",value:function(e,t,r){var i=this;return n.e(1723).then(n.t.bind(n,91723,23)).then((function(t){var n=t.default.createPlayer({type:"flv",url:r},{seekType:"range",lazyLoad:!1});return n.attachMediaElement(e),n.load(),x(i,Y,n),x(i,X,r),n.play()}))}},{key:"setSrcWithHlsJs",value:function(e,t,r){var i=this;return new Promise((function(t,o){var s;s=T(regeneratorRuntime.mark((function n(){var s,u,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s=30,(a.Z.chrome||a.Z.edgeChromium||a.Z.firefox)&&c.O.getMaxStreamingBitrate(i)>=25e6&&(s=6),n.next=4,(0,b.X0)();case 4:u=n.sent,(l=new Hls({manifestLoadingTimeOut:2e4,maxBufferLength:s,xhrSetup:function(e){e.withCredentials=u}})).loadSource(r),l.attachMedia(e),(0,h.eQ)(i,l,e,i.onError,t,o),i._hlsPlayer=l,x(i,X,r);case 11:case"end":return n.stop()}}),n)}))),n.e(4291).then(n.t.bind(n,14291,23)).then((function(e){var t=e.default;window.Hls=t,s()}))}))}},{key:"setCurrentSrc",value:(E=T(regeneratorRuntime.mark((function e(t,n){var r,i,a,o,s=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.removeEventListener("error",this.onError),r=n.url,console.debug("playing url: ".concat(r)),(i=(n.playerStartPositionTicks||0)/1e7)&&(r+="#t=".concat(i)),(0,h.LE)(this),(0,h.Xw)(this),(0,h.t_)(this),x(this,F,null==n.mediaSource.DefaultSubtitleStreamIndex?-1:n.mediaSource.DefaultSubtitleStreamIndex),null!=L(this,F)&&L(this,F)>=0&&((a=n.mediaSource.MediaStreams[L(this,F)])&&"Encode"!==a.DeliveryMethod||x(this,F,-1)),x(this,R,"Transcode"===n.playMethod?null:n.mediaSource.DefaultAudioStreamIndex),this._currentPlayOptions=n,(o=(0,h.cV)(n.mediaSource))&&(t.crossOrigin=o),!(0,h.rR)(n.mediaSource.RunTimeTicks,"Video")||!r.includes(".m3u8")){e.next=18;break}return e.abrupt("return",this.setSrcWithHlsJs(t,n,r));case 18:if("Transcode"===n.playMethod||"flv"!==n.mediaSource.Container){e.next=22;break}return e.abrupt("return",this.setSrcWithFlvJs(t,n,r));case 22:return t.autoplay=!0,e.next=25,(0,b.X0)();case 25:return e.sent&&(t.crossOrigin="use-credentials"),e.abrupt("return",(0,h.NB)(t,r,n).then((function(){return x(s,X,r),(0,h.WX)(t,s.onError)})));case 28:case"end":return e.stop()}}),e,this)}))),function(e,t){return E.apply(this,arguments)})},{key:"setSubtitleStreamIndex",value:function(e){this.setCurrentTrackElement(e)}},{key:"resetSubtitleOffset",value:function(){x(this,H,0),x(this,N,!1)}},{key:"enableShowingSubtitleOffset",value:function(){x(this,N,!0)}},{key:"disableShowingSubtitleOffset",value:function(){x(this,N,!1)}},{key:"isShowingSubtitleOffsetEnabled",value:function(){return L(this,N)}},{key:"getTextTrack",value:function(){var e=L(this,z);return e?Array.from(e.textTracks).find((function(e){return"showing"===e.mode})):null}},{key:"setSubtitleOffset",value:function(e){var t=parseFloat(e);if(L(this,_))this.updateCurrentTrackOffset(t),L(this,_).timeOffset=(this._currentPlayOptions.transcodingOffsetTicks||0)/1e7+t;else{var n=this.getTextTrack();n?this.setTextTrackSubtitleOffset(n,t):L(this,B)?this.setTrackEventsSubtitleOffset(L(this,B),t):console.debug("No available track, cannot apply offset: ",t)}}},{key:"updateCurrentTrackOffset",value:function(e){var t=e,n=e;return L(this,H)&&(t-=L(this,H)),x(this,H,n),t}},{key:"setTextTrackSubtitleOffset",value:function(e,t){e.cues&&(t=this.updateCurrentTrackOffset(t),Array.from(e.cues).forEach((function(e){e.startTime-=t,e.endTime-=t})))}},{key:"setTrackEventsSubtitleOffset",value:function(e,t){Array.isArray(e)&&(t=1e7*this.updateCurrentTrackOffset(t),e.forEach((function(e){e.StartPositionTicks-=t,e.EndPositionTicks-=t})))}},{key:"getSubtitleOffset",value:function(){return L(this,H)}},{key:"isAudioStreamSupported",value:function(e,t,n){var r=(e.Codec||"").toLowerCase();return!r||!t||(t.DirectPlayProfiles||[]).some((function(e){return"Video"===e.Type&&(0,k.V)((e.Container||"").toLowerCase(),n)&&(0,k.V)((e.AudioCodec||"").toLowerCase(),r)}))}},{key:"getSupportedAudioStreams",value:function(){var e=this,t=L(this,ee),n=this._currentPlayOptions.mediaSource,r=n.Container.toLowerCase();return function(e){return e.MediaStreams.filter((function(e){return"Audio"===e.Type}))}(n).filter((function(n){return e.isAudioStreamSupported(n,t,r)}))}},{key:"setAudioStreamIndex",value:function(e){var t=this.getSupportedAudioStreams();if(!(t.length<2)){var n,r=-1,i=w(t);try{for(i.s();!(n=i.n()).done;){var a=n.value;if(r++,a.Index===e)break}}catch(e){i.e(e)}finally{i.f()}if(-1!==r){var o=L(this,z);if(o){var s=o.audioTracks||[];console.debug("found ".concat(s.length," audio tracks"));var u,l=w(Array.from(s).entries());try{for(l.s();!(u=l.n()).done;){var c=g(u.value,2),d=c[0],h=c[1];r===d?(console.debug("setting audio track ".concat(d," to enabled")),h.enabled=!0):(console.debug("setting audio track ".concat(d," to disabled")),h.enabled=!1)}}catch(e){l.e(e)}finally{l.f()}}}}}},{key:"stop",value:function(e){var t=L(this,z),n=L(this,X);return t&&(n&&t.pause(),(0,h.mr)(this,t,this.onError)),this.destroyCustomTrack(t),e&&this.destroy(),Promise.resolve()}},{key:"destroy",value:function(){(0,h.LE)(this),(0,h.Xw)(this),d.appRouter.setTransparency("none"),document.body.classList.remove("hide-scroll");var e=L(this,z);e&&(x(this,z,null),this.destroyCustomTrack(e),e.removeEventListener("timeupdate",this.onTimeUpdate),e.removeEventListener("ended",this.onEnded),e.removeEventListener("volumechange",this.onVolumeChange),e.removeEventListener("pause",this.onPause),e.removeEventListener("playing",this.onPlaying),e.removeEventListener("play",this.onPlay),e.removeEventListener("click",this.onClick),e.removeEventListener("dblclick",this.onDblClick),e.removeEventListener("waiting",this.onWaiting),e.removeEventListener("error",this.onError),(0,h.Zr)(e),e.parentNode.removeChild(e));var t=L(this,W);t&&(x(this,W,null),t.parentNode.removeChild(t)),f.Z.isEnabled?f.Z.exit():document.webkitIsFullScreen&&document.webkitCancelFullscreen&&document.webkitCancelFullscreen()}},{key:"onStartedAndNavigatedToOsd",value:function(){this.setCurrentTrackElement(L(this,F)),null!=L(this,R)&&this.canSetAudioStreamIndex()&&this.setAudioStreamIndex(L(this,R))}},{key:"ensureValidVideo",value:function(e){if(e===L(this,z)&&0===e.videoWidth&&0===e.videoHeight){var t=(this._currentPlayOptions||{}).mediaSource;t&&!t.RunTimeTicks||(0,h.p_)(this,"mediadecodeerror")}}},{key:"onWaiting",value:function(){o.Events.trigger(this,"waiting")}},{key:"destroyCustomTrack",value:function(e){if(L(this,te)&&(L(this,te).disconnect(),x(this,te,null)),L(this,q)){var t=L(this,q).parentNode;t&&function(e){var t=e.parentNode;if(t)try{t.removeChild(e)}catch(e){console.error("error removing dialog element: ".concat(e))}}(t),x(this,q,null)}if(x(this,B,null),e){var n,r=w(e.textTracks||[]);try{for(r.s();!(n=r.n()).done;){var i=n.value;i.label.includes("manualTrack")&&(i.mode="disabled")}}catch(e){r.e(e)}finally{r.f()}}x(this,D,-1),x(this,U,null),this._currentAspectRatio=null;var a=L(this,_);a&&a.dispose(),x(this,_,null);var o=L(this,j);o&&o.setEnabled(!1),x(this,j,null)}},{key:"fetchSubtitlesUwp",value:function(e){return Windows.Storage.StorageFile.getFileFromPathAsync(e.Path).then((function(e){return Windows.Storage.FileIO.readTextAsync(e)})).then((function(e){return JSON.parse(e)}))}},{key:"fetchSubtitles",value:(S=T(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.Windows||!v.ZP.isLocalItem(n)){e.next=2;break}return e.abrupt("return",this.fetchSubtitlesUwp(t,n));case 2:return this.incrementFetchQueue(),e.prev=3,e.next=6,fetch(V(t,n,".js"));case 6:if((r=e.sent).ok){e.next=9;break}throw new Error(r);case 9:return e.abrupt("return",r.json());case 10:return e.prev=10,this.decrementFetchQueue(),e.finish(10);case 13:case"end":return e.stop()}}),e,this,[[3,,10,13]])}))),function(e,t){return S.apply(this,arguments)})},{key:"setTrackForDisplay",value:function(e,t){if(t){if(L(this,D)!==t.Index){this.resetSubtitleOffset();var n=this._currentPlayOptions.item;this.destroyCustomTrack(e),x(this,D,t.Index),this.renderTracksEvents(e,t,n)}}else this.destroyCustomTrack(e)}},{key:"renderSsaAss",value:function(e,t,r){var i=this,a=["application/vnd.ms-opentype","application/x-truetype-font","font/otf","font/ttf","font/woff","font/woff2"],o=[],s=this._currentPlayOptions.mediaSource.MediaAttachments||[],u=y.Z.getApiClient(r);s.forEach((function(e){a.includes(e.MimeType)&&o.push(u.getUrl(e.DeliveryUrl))}));var l=u.getUrl("/FallbackFont/Fonts",{api_key:u.accessToken()}),c=this,v={video:e,subUrl:V(t,r),fonts:o,workerUrl:"".concat(d.appRouter.baseUrl(),"/libraries/subtitles-octopus-worker.js"),legacyWorkerUrl:"".concat(d.appRouter.baseUrl(),"/libraries/subtitles-octopus-worker-legacy.js"),onError:function(){x(c,_,null),setTimeout((function(){(0,h.p_)(c,"mediadecodeerror")}),0)},timeOffset:(this._currentPlayOptions.transcodingOffsetTicks||0)/1e7,renderMode:"wasm-blend",dropAllAnimations:!1,libassMemoryLimit:40,libassGlyphLimit:40,targetFps:24,prescaleFactor:.8,prescaleHeightLimit:1080,maxRenderHeight:2160,resizeVariation:.2,renderAhead:90};n.e(9022).then(n.t.bind(n,49022,23)).then((function(e){var t=e.default;Promise.all([u.getNamedConfiguration("encoding"),Z(v.workerUrl),Z(v.legacyWorkerUrl)]).then((function(e){var n=g(e,3),r=n[0],a=n[1],s=n[2];v.workerUrl=a,v.legacyWorkerUrl=s,r.EnableFallbackFont?u.getJSON(l).then((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];e.forEach((function(e){var t=u.getUrl("/FallbackFont/Fonts/".concat(e.Name),{api_key:u.accessToken()});o.push(t)})),x(i,_,new t(v))})):x(i,_,new t(v))}))}))}},{key:"requiresCustomSubtitlesElement",value:function(){if(a.Z.ps4)return!0;if(a.Z.firefox||a.Z.web0s)return!0;if(a.Z.edge)return!0;if(a.Z.iOS){var e=navigator.userAgent.toLowerCase();if((e.includes("os 9")||e.includes("os 8"))&&!e.includes("safari"))return!0}return!1}},{key:"renderSubtitlesWithCustomElement",value:function(e,t,n){var r=this;this.fetchSubtitles(t,n).then((function(t){if(!L(r,q)){var n=document.createElement("div");n.classList.add("videoSubtitles"),n.innerHTML='<div class="videoSubtitlesInner"></div>',x(r,q,n.querySelector(".videoSubtitlesInner")),r.setSubtitleAppearance(n,L(r,q)),e.parentNode.appendChild(n),x(r,B,t.TrackEvents)}}))}},{key:"setSubtitleAppearance",value:function(e,t){Promise.all([Promise.resolve().then(n.bind(n,28978)),n.e(8995).then(n.bind(n,78995))]).then((function(n){var r=g(n,2),i=r[0];r[1].applyStyles({text:t,window:e},i.getSubtitleAppearanceSettings())}))}},{key:"getCueCss",value:function(e,t){return"".concat(t,"::cue {\n                ").concat(e.text.map((function(e){return void 0!==e.value&&""!==e.value?"".concat(e.name,":").concat(e.value,"!important;"):""})).join(""),"\n            }")}},{key:"setCueAppearance",value:function(){var e=this;Promise.all([Promise.resolve().then(n.bind(n,28978)),n.e(8995).then(n.bind(n,78995))]).then((function(t){var n=g(t,2),r=n[0],i=n[1],a="".concat(e.id,"-cuestyle"),o=document.querySelector("#".concat(a));o||((o=document.createElement("style")).id=a,document.getElementsByTagName("head")[0].appendChild(o)),o.innerHTML=e.getCueCss(i.getStyles(r.getSubtitleAppearanceSettings()),".htmlvideoplayer")}))}},{key:"renderTracksEvents",value:function(e,t,r){if(!v.ZP.isLocalItem(r)||t.IsExternal){var i=(t.Codec||"").toLowerCase();if("ssa"===i||"ass"===i)return void this.renderSsaAss(e,t,r);if(this.requiresCustomSubtitlesElement())return void this.renderSubtitlesWithCustomElement(e,t,r)}var a=null;if(e.textTracks&&e.textTracks.length>0){a=e.textTracks[0];try{for(a.mode="showing";a.cues.length;)a.removeCue(a.cues[0])}catch(e){console.error("error removing cue from textTrack")}a.mode="disabled"}else a=e.addTextTrack("subtitles","manualTrack","und");this.fetchSubtitles(t,r).then((function(e){Promise.resolve().then(n.bind(n,28978)).then((function(t){console.debug("downloaded ".concat(e.TrackEvents.length," track events"));var n,r=t.getSubtitleAppearanceSettings(),i=parseInt(r.verticalPosition,10),o=w(e.TrackEvents);try{for(o.s();!(n=o.n()).done;){var s=n.value,u=new(window.VTTCue||window.TextTrackCue)(s.StartPositionTicks/1e7,s.EndPositionTicks/1e7,I(s.Text,!1));"auto"===u.line&&(u.line=i),a.addCue(u)}}catch(e){o.e(e)}finally{o.f()}a.mode="showing"}))}))}},{key:"updateSubtitleText",value:function(e){var t=L(this,U);if(t)try{t.seek(e/1e3)}catch(e){console.error("error in libjass: ".concat(e))}else{var n=L(this,B),r=L(this,q);if(n&&r){var a,o,s=1e4*e,u=w(n);try{for(u.s();!(o=u.n()).done;){var l=o.value;if(l.StartPositionTicks<=s&&l.EndPositionTicks>=s){a=l;break}}}catch(e){u.e(e)}finally{u.f()}a&&a.Text?(r.innerHTML=i().sanitize(I(a.Text,!0)),r.classList.remove("hide")):r.classList.add("hide")}}}},{key:"setCurrentTrackElement",value:function(e){console.debug("setting new text track index to: ".concat(e));var t=this._currentPlayOptions.mediaSource.MediaStreams.filter((function(e){return"Subtitle"===e.Type})),n=-1===e?null:t.filter((function(t){return t.Index===e}))[0];this.setTrackForDisplay(L(this,z),n),function(e,t){if(t&&"Embed"===t.DeliveryMethod)return!0;if(a.Z.firefox&&(e||"").toLowerCase().includes(".m3u8"))return!1;if(a.Z.ps4)return!1;if(a.Z.web0s)return!1;if(a.Z.edge)return!1;if(a.Z.iOS&&(a.Z.iosVersion||10)<10)return!1;if(t){var n=(t.Codec||"").toLowerCase();if("ssa"===n||"ass"===n)return!1}return!0}(L(this,X),n)?-1!==e&&this.setCueAppearance():(e=-1,n=null)}},{key:"createMediaElement",value:function(e){var t=this,r=document.querySelector(".videoPlayerContainer");return r?(e.fullscreen&&(document.body.classList.add("hide-scroll"),!this.forcedFullscreen&&!window.NativeShell&&a.Z.web0s&&f.Z.isEnabled&&f.Z.request().then((function(){t.forcedFullscreen=!0}))),Promise.resolve(r.querySelector("video"))):n.e(9677).then(n.bind(n,78159)).then((function(){u.ZP.show();var n=document.createElement("div");n.classList.add("videoPlayerContainer"),e.fullscreen&&n.classList.add("videoPlayerContainer-onTop");var r="",i="htmlvideoplayer";s.M.supports("htmlvideoautoplay")?a.Z.web0s?r+='<video class="'+i+'" preload="auto" autoplay="autoplay" webkit-playsinline playsinline>':r+='<video class="'+i+'" preload="metadata" autoplay="autoplay" webkit-playsinline playsinline>':r+='<video class="'+i+'" preload="metadata" autoplay="autoplay" controls="controls" webkit-playsinline playsinline>',r+="</video>",n.innerHTML=r;var o,c=n.querySelector("video");if(c.volume=(0,h.jt)(),c.addEventListener("timeupdate",t.onTimeUpdate),c.addEventListener("ended",t.onEnded),c.addEventListener("volumechange",t.onVolumeChange),c.addEventListener("pause",t.onPause),c.addEventListener("playing",t.onPlaying),c.addEventListener("play",t.onPlay),c.addEventListener("click",t.onClick),c.addEventListener("dblclick",t.onDblClick),c.addEventListener("waiting",t.onWaiting),e.backdropUrl&&(c.poster=e.backdropUrl),document.body.insertBefore(n,document.body.firstChild),x(t,W,n),x(t,z,c),delete t.forcedFullscreen,e.fullscreen){if(document.body.classList.add("hide-scroll"),!window.NativeShell&&a.Z.web0s&&f.Z.isEnabled)return f.Z.request().then((function(){t.forcedFullscreen=!0})),c;if(!a.Z.slow&&a.Z.supportsCssAnimation())return(o=n,new Promise((function(e){o.style.animation="htmlvideoplayer-zoomin ".concat(240,"ms ease-in normal"),l.ZP.addEventListener(o,l.ZP.whichAnimationEvent(),e,{once:!0})}))).then((function(){return c}))}return c}))}},{key:"canPlayMediaType",value:function(e){return"video"===(e||"").toLowerCase()}},{key:"supportsPlayMethod",value:function(e,t){return!s.M.supportsPlayMethod||s.M.supportsPlayMethod(e,t)}},{key:"getDeviceProfile",value:function(t,n){var r=this;return e.getDeviceProfileInternal(t,n).then((function(e){return x(r,ee,e),e}))}},{key:"supports",value:function(t){return L(this,Q)||x(this,Q,e.getSupportedFeatures()),L(this,Q).includes(t)}},{key:"currentTime",value:function(e){var t=L(this,z);if(t){if(null!=e)return void(t.currentTime=e/1e3);var n=L(this,K);return n?1e3*n:1e3*(t.currentTime||0)}}},{key:"duration",value:function(){var e=L(this,z);if(e){var t=e.duration;if((0,h.jO)(t))return 1e3*t}return null}},{key:"canSetAudioStreamIndex",value:function(){var e=L(this,z);return!!e&&(0,m.j)(e)}},{key:"setPictureInPictureEnabled",value:function(t){var n=L(this,z);document.pictureInPictureEnabled?n&&(t?n.requestPictureInPicture().catch(e.onPictureInPictureError):document.exitPictureInPicture().catch(e.onPictureInPictureError)):window.Windows?(this.isPip=t,t?Windows.UI.ViewManagement.ApplicationView.getForCurrentView().tryEnterViewModeAsync(Windows.UI.ViewManagement.ApplicationViewMode.compactOverlay):Windows.UI.ViewManagement.ApplicationView.getForCurrentView().tryEnterViewModeAsync(Windows.UI.ViewManagement.ApplicationViewMode.default)):n&&n.webkitSupportsPresentationMode&&"function"==typeof n.webkitSetPresentationMode&&n.webkitSetPresentationMode(t?"picture-in-picture":"inline")}},{key:"isPictureInPictureEnabled",value:function(){if(document.pictureInPictureEnabled)return!!document.pictureInPictureElement;if(window.Windows)return this.isPip||!1;var e=L(this,z);return!!e&&"picture-in-picture"===e.webkitPresentationMode}},{key:"isAirPlayEnabled",value:function(){return!!document.AirPlayEnabled&&!!document.AirplayElement}},{key:"setAirPlayEnabled",value:function(e){var t=L(this,z);document.AirPlayEnabled?t&&(e?t.requestAirPlay().catch((function(e){console.error("Error requesting AirPlay",e)})):document.exitAirPLay().catch((function(e){console.error("Error exiting AirPlay",e)}))):t.webkitShowPlaybackTargetPicker()}},{key:"setBrightness",value:function(e){var t=L(this,z);if(t){e=Math.max(0,e);var n=e=Math.min(100,e),r=(n=Math.max(20,n))>=100?"none":n/100;t.style["-webkit-filter"]="brightness(".concat(r,")"),t.style.filter="brightness(".concat(r,")"),t.brightnessValue=e,o.Events.trigger(this,"brightnesschange")}}},{key:"getBrightness",value:function(){var e=L(this,z);if(e){var t=e.brightnessValue;return null==t?100:t}}},{key:"seekable",value:function(){var e=L(this,z);if(e){var t=e.seekable;if(t&&t.length){var n=t.start(0),r=t.end(0);return(0,h.jO)(n)||(n=0),(0,h.jO)(r)||(r=0),r-n>0}return!1}}},{key:"pause",value:function(){var e=L(this,z);e&&e.pause()}},{key:"resume",value:function(){var e=L(this,z);e&&e.play()}},{key:"unpause",value:function(){var e=L(this,z);e&&e.play()}},{key:"paused",value:function(){var e=L(this,z);return!!e&&e.paused}},{key:"setPlaybackRate",value:function(e){var t=L(this,z);t&&(t.playbackRate=e)}},{key:"getPlaybackRate",value:function(){var e=L(this,z);return e?e.playbackRate:null}},{key:"getSupportedPlaybackRates",value:function(){return[{name:"0.5x",id:.5},{name:"0.75x",id:.75},{name:"1x",id:1},{name:"1.25x",id:1.25},{name:"1.5x",id:1.5},{name:"1.75x",id:1.75},{name:"2x",id:2}]}},{key:"setVolume",value:function(e){var t=L(this,z);t&&(t.volume=Math.pow(e/100,3))}},{key:"getVolume",value:function(){var e=L(this,z);if(e)return Math.min(Math.round(100*Math.pow(e.volume,1/3)),100)}},{key:"volumeUp",value:function(){this.setVolume(Math.min(this.getVolume()+2,100))}},{key:"volumeDown",value:function(){this.setVolume(Math.max(this.getVolume()-2,0))}},{key:"setMute",value:function(e){var t=L(this,z);t&&(t.muted=e)}},{key:"isMuted",value:function(){var e=L(this,z);return!!e&&e.muted}},{key:"setAspectRatio",value:function(e){var t=L(this,z);t&&("auto"===e?t.style.removeProperty("object-fit"):t.style["object-fit"]=e),this._currentAspectRatio=e}},{key:"getAspectRatio",value:function(){return this._currentAspectRatio||"auto"}},{key:"getSupportedAspectRatios",value:function(){return[{name:p.ZP.translate("Auto"),id:"auto"},{name:p.ZP.translate("AspectRatioCover"),id:"cover"},{name:p.ZP.translate("AspectRatioFill"),id:"fill"}]}},{key:"togglePictureInPicture",value:function(){return this.setPictureInPictureEnabled(!this.isPictureInPictureEnabled())}},{key:"toggleAirPlay",value:function(){return this.setAirPlayEnabled(!this.isAirPlayEnabled())}},{key:"getBufferedRanges",value:function(){var e=L(this,z);return e?(0,h.wf)(this,e):[]}},{key:"getStats",value:function(){var e=L(this,z),t=this._currentPlayOptions||[],n=[];if(!e)return Promise.resolve({categories:n});var r={stats:[],type:"media"};if(n.push(r),t.url){var i=document.createElement("a");i.setAttribute("href",t.url);var o=(i.protocol||"").replace(":","");o&&r.stats.push({label:p.ZP.translate("LabelProtocol"),value:o}),i=null}this._hlsPlayer?r.stats.push({label:p.ZP.translate("LabelStreamType"),value:"HLS"}):r.stats.push({label:p.ZP.translate("LabelStreamType"),value:"Video"});var s={stats:[],type:"video"};n.push(s);var u=window.devicePixelRatio||1,l=e.getBoundingClientRect?e.getBoundingClientRect():{},c=Math.round(l.height*u),d=Math.round(l.width*u);if(d&&c&&!a.Z.tv&&s.stats.push({label:p.ZP.translate("LabelPlayerDimensions"),value:"".concat(d,"x").concat(c)}),c=e.videoHeight,(d=e.videoWidth)&&c&&s.stats.push({label:p.ZP.translate("LabelVideoResolution"),value:"".concat(d,"x").concat(c)}),e.getVideoPlaybackQuality){var h=e.getVideoPlaybackQuality(),v=h.droppedVideoFrames||0;s.stats.push({label:p.ZP.translate("LabelDroppedFrames"),value:v});var f=h.corruptedVideoFrames||0;s.stats.push({label:p.ZP.translate("LabelCorruptedFrames"),value:f})}var y={stats:[],type:"audio"};n.push(y);var m=e.sinkId;return m&&y.stats.push({label:"Sink Id:",value:m}),Promise.resolve({categories:n})}}],P=[{key:"getDeviceProfileInternal",value:function(e,t){return s.M.getDeviceProfile?s.M.getDeviceProfile(e,t):(0,m.Z)({})}},{key:"getSupportedFeatures",value:function(){var e=[],t=document.createElement("video");return("function"==typeof t.webkitSupportsPresentationMode&&t.webkitSupportsPresentationMode("picture-in-picture")&&"function"==typeof t.webkitSetPresentationMode||document.pictureInPictureEnabled||window.Windows&&Windows.UI.ViewManagement.ApplicationView.getForCurrentView().isViewModeSupported(Windows.UI.ViewManagement.ApplicationViewMode.compactOverlay))&&e.push("PictureInPicture"),(a.Z.safari||a.Z.iOS||a.Z.iPad)&&e.push("AirPlay"),"number"==typeof t.playbackRate&&e.push("PlaybackRate"),e.push("SetBrightness"),e.push("SetAspectRatio"),e}},{key:"onPictureInPictureError",value:function(e){console.error("Picture in picture error: ".concat(e))}}],r&&C(t.prototype,r),P&&C(t,P),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.default=ne}}]);