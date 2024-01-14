"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[92125],{79637:function(e,t,r){r.r(t),r(13227),r(81414),r(37666),r(14011),r(11431),r(32904),r(44901),r(26031),r(95822),r(56187),r(38690),r(11908),r(33096),r(89228);var n=r(57366),o=r(66560),i=r(84597),u=r(57084),a=r(90846),l=r(67561);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,d(n.key),n)}}function d(e){var t=function(e,t){if("object"!=s(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==s(t)?t:String(t)}var f={2:"YoutubeBadRequest",5:"YoutubePlaybackError",100:"YoutubeNotFound",101:"YoutubeDenied",150:"YoutubeDenied"};function y(){var e=this.currentYoutubePlayer,t=this.videoDialog;e&&t&&e.setSize(t.offsetWidth,t.offsetHeight)}function v(e){e.timeUpdateInterval&&clearInterval(e.timeUpdateInterval),e.timeUpdateInterval=null}function m(e){v(e);var t=e.resizeListener;t&&(window.removeEventListener("resize",t),window.removeEventListener("orientationChange",t),e.resizeListener=null);var r={src:e._currentSrc};l.Z.trigger(e,"stopped",[r]),e._currentSrc=null,e.currentYoutubePlayer&&e.currentYoutubePlayer.destroy(),e.currentYoutubePlayer=null}function h(e){e.target.playVideo()}function p(){l.Z.trigger(this,"timeupdate")}function b(e,t,r){e.started||(e.started=!0,r(),v(e),e.timeUpdateInterval=setInterval(p.bind(e),500),t.fullscreen?o.appRouter.showVideoOsd().then((function(){e.videoDialog.classList.remove("onTop")})):((0,u.G2)(u.q3.Backdrop),e.videoDialog.classList.remove("onTop")),i.ZP.hide())}var P=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name="Youtube Player",this.type=a.z.MediaPlayer,this.id="youtubeplayer",this.priority=1}var t,o;return t=e,(o=[{key:"play",value:function(e){this.started=!1;var t=this;return function(e,t){return new Promise((function(o){var u=document.querySelector(".youtubePlayerContainer");u?(t.fullscreen&&document.body.classList.add("hide-scroll"),o(u.querySelector("#player"))):r.e(72911).then(r.bind(r,5233)).then((function(){i.ZP.show();var r=document.createElement("div");r.classList.add("youtubePlayerContainer"),t.fullscreen&&r.classList.add("onTop"),r.innerHTML='<div id="player"></div>';var u,a,l=r.querySelector("#player");document.body.insertBefore(r,document.body.firstChild),e.videoDialog=r,t.fullscreen&&document.body.classList.add("hide-scroll"),t.fullscreen&&r.animate&&!n.Z.slow?(u=r,1,a={duration:240,iterations:1},u.animate([{transform:"scale3d(.2, .2, .2)  ",opacity:".6",offset:0},{transform:"none",opacity:"1",offset:1}],a)).onfinish=function(){o(l)}:o(l)}))}))}(this,e).then((function(r){return function(e,t,r){return new Promise((function(t,n){e._currentSrc=r.url;var o=new URLSearchParams(r.url.split("?")[1]);if(window.onYouTubeIframeAPIReady=function(){e.currentYoutubePlayer=new YT.Player("player",{height:e.videoDialog.offsetHeight,width:e.videoDialog.offsetWidth,videoId:o.get("v"),events:{onReady:h,onStateChange:function(n){n.data===YT.PlayerState.PLAYING?b(e,r,t):n.data===YT.PlayerState.ENDED?m(e):n.data===YT.PlayerState.PAUSED&&l.Z.trigger(e,"pause")},onError:function(e){return n(f[e.data]||"ErrorDefault")}},playerVars:{controls:0,enablejsapi:1,modestbranding:1,rel:0,showinfo:0,fs:0,playsinline:1}});var i=e.resizeListener;i?(window.removeEventListener("resize",i),window.addEventListener("resize",i)):(i=e.resizeListener=y.bind(e),window.addEventListener("resize",i)),window.removeEventListener("orientationChange",i),window.addEventListener("orientationChange",i)},window.YT)window.onYouTubeIframeAPIReady();else{var i=document.createElement("script");i.src="https://www.youtube.com/iframe_api";var u=document.getElementsByTagName("script")[0];u.parentNode.insertBefore(i,u)}}))}(t,0,e)}))}},{key:"stop",value:function(e){return this._currentSrc&&(this.currentYoutubePlayer&&this.currentYoutubePlayer.stopVideo(),m(this),e&&this.destroy()),Promise.resolve()}},{key:"destroy",value:function(){(0,u.G2)(u.q3.None),document.body.classList.remove("hide-scroll");var e=this.videoDialog;e&&(this.videoDialog=null,e.parentNode.removeChild(e))}},{key:"canPlayMediaType",value:function(e){return"audio"===(e=(e||"").toLowerCase())||"video"===e}},{key:"canPlayItem",value:function(){return!1}},{key:"canPlayUrl",value:function(e){return-1!==e.toLowerCase().indexOf("youtube.com")}},{key:"getDeviceProfile",value:function(){return Promise.resolve({})}},{key:"currentSrc",value:function(){return this._currentSrc}},{key:"setSubtitleStreamIndex",value:function(){}},{key:"canSetAudioStreamIndex",value:function(){return!1}},{key:"setAudioStreamIndex",value:function(){}},{key:"currentTime",value:function(e){var t=this.currentYoutubePlayer;if(t)return null!=e?void t.seekTo(e/1e3,!0):1e3*t.getCurrentTime()}},{key:"duration",value:function(){var e=this.currentYoutubePlayer;return e?1e3*e.getDuration():null}},{key:"pause",value:function(){var e=this.currentYoutubePlayer;if(e){e.pauseVideo();var t=this;setTimeout((function(){l.Z.trigger(t,"pause")}),200)}}},{key:"unpause",value:function(){var e=this.currentYoutubePlayer;if(e){e.playVideo();var t=this;setTimeout((function(){l.Z.trigger(t,"unpause")}),200)}}},{key:"paused",value:function(){var e=this.currentYoutubePlayer;return!!e&&2===e.getPlayerState()}},{key:"volume",value:function(e){return null!=e?this.setVolume(e):this.getVolume()}},{key:"setVolume",value:function(e){var t=this.currentYoutubePlayer;t&&null!=e&&t.setVolume(e)}},{key:"getVolume",value:function(){var e=this.currentYoutubePlayer;if(e)return e.getVolume()}},{key:"setMute",value:function(e){var t=this.currentYoutubePlayer;e?t&&t.mute():t&&t.unMute()}},{key:"isMuted",value:function(){var e=this.currentYoutubePlayer;if(e)return e.isMuted()}}])&&c(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.default=P}}]);