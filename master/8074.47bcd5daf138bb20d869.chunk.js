"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8074],{77086:function(e,a,t){a.Z={getDisplayPlayMethod:function(e){return e.NowPlayingItem?e.TranscodingInfo&&e.TranscodingInfo.IsVideoDirect&&e.TranscodingInfo.IsAudioDirect?"Remux":e.TranscodingInfo&&e.TranscodingInfo.IsVideoDirect?"DirectStream":"Transcode"===e.PlayState.PlayMethod?"Transcode":"DirectStream"===e.PlayState.PlayMethod||"DirectPlay"===e.PlayState.PlayMethod?"DirectPlay":void 0:null}}},68074:function(e,a,t){t.r(a),t(61013),t(63238),t(61418),t(76056),t(43512),t(98010),t(5769),t(17460),t(14078),t(99785);var n=t(47005),l=(t(61414),t(94994)),s=t(30325),r=t(48957),i=t(77086),o=t(99294),u=t(18613);function c(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(){this.enabled(!1)}function p(e){return l.ZP.translate(""+e)}function v(e,a,t){var n,s,r,i,o=[];return e.TranscodingInfo&&(n=e.TranscodingInfo.VideoCodec,s=e.TranscodingInfo.AudioCodec,r=e.TranscodingInfo.Bitrate,i=e.TranscodingInfo.AudioChannels),n&&o.push({label:l.ZP.translate("LabelVideoCodec"),value:e.TranscodingInfo.IsVideoDirect?n.toUpperCase()+" (direct)":n.toUpperCase()}),s&&o.push({label:l.ZP.translate("LabelAudioCodec"),value:e.TranscodingInfo.IsAudioDirect?s.toUpperCase()+" (direct)":s.toUpperCase()}),"Transcode"===t&&(i&&o.push({label:l.ZP.translate("LabelAudioChannels"),value:i}),r&&o.push({label:l.ZP.translate("LabelBitrate"),value:f(r)}),e.TranscodingInfo.CompletionPercentage&&o.push({label:l.ZP.translate("LabelTranscodingProgress"),value:e.TranscodingInfo.CompletionPercentage.toFixed(1)+"%"}),e.TranscodingInfo.Framerate&&o.push({label:l.ZP.translate("LabelTranscodingFramerate"),value:e.TranscodingInfo.Framerate+" fps"}),e.TranscodingInfo.TranscodeReasons&&e.TranscodingInfo.TranscodeReasons.length&&o.push({label:l.ZP.translate("LabelReasonForTranscoding"),value:e.TranscodingInfo.TranscodeReasons.map(p).join("<br/>")}),e.TranscodingInfo.HardwareAccelerationType&&o.push({label:l.ZP.translate("LabelHardwareEncoding"),value:e.TranscodingInfo.HardwareAccelerationType})),o}function f(e){return e>1e6?(e/1e6).toFixed(1)+" Mbps":Math.floor(e/1e3)+" kbps"}function h(e,a){var t,n=[],s=r.O.currentMediaSource(a)||{},i=s.Bitrate,o=s.Size;s.Container&&n.push({label:l.ZP.translate("LabelProfileContainer"),value:s.Container}),o&&n.push({label:l.ZP.translate("LabelSize"),value:(t=o,t>=1073741824?parseFloat((t/1073741824).toFixed(1))+" GiB":t>=1048576?parseFloat((t/1048576).toFixed(1))+" MiB":Math.floor(t/1024)+" KiB")}),i&&n.push({label:l.ZP.translate("LabelBitrate"),value:f(i)});var u=(s.MediaStreams||[]).filter((function(e){return"Video"===e.Type}))[0]||{},c=u.Codec,d=r.O.getAudioStreamIndex(a),p=r.O.audioTracks(a).filter((function(e){return"Audio"===e.Type&&e.Index===d}))[0]||{},v=p.Codec,h=p.Channels,b=[];c&&b.push(c.toUpperCase()),u.Profile&&b.push(u.Profile),b.length&&n.push({label:l.ZP.translate("LabelVideoCodec"),value:b.join(" ")}),u.BitRate&&n.push({label:l.ZP.translate("LabelVideoBitrate"),value:f(u.BitRate)}),u.VideoRangeType&&n.push({label:l.ZP.translate("LabelVideoRangeType"),value:u.VideoRangeType});var y=[];return v&&y.push(v.toUpperCase()),p.Profile&&y.push(p.Profile),y.length&&n.push({label:l.ZP.translate("LabelAudioCodec"),value:y.join(" ")}),p.BitRate&&n.push({label:l.ZP.translate("LabelAudioBitrate"),value:f(p.BitRate)}),h&&n.push({label:l.ZP.translate("LabelAudioChannels"),value:h}),p.SampleRate&&n.push({label:l.ZP.translate("LabelAudioSampleRate"),value:p.SampleRate+" Hz"}),p.BitDepth&&n.push({label:l.ZP.translate("LabelAudioBitDepth"),value:p.BitDepth}),n}function b(e,a){var t=function(){!function(e,a){var t=(new Date).getTime();t-(e.lastRender||0)<700||(e.lastRender=t,function(e,a){var t=a.getStats?a.getStats():Promise.resolve({}),n=function(e,a){if((new Date).getTime()-(e.lastSessionTime||0)<1e4)return Promise.resolve(e.lastSession);var t=u.Z.getApiClient(r.O.currentItem(a).ServerId);return t.getSessions({deviceId:t.deviceId()}).then((function(a){return e.lastSession=a[0]||{},e.lastSessionTime=(new Date).getTime(),Promise.resolve(e.lastSession)}),(function(){return Promise.resolve({})}))}(e,a);return Promise.all([t,n]).then((function(e){var t=e[0].categories||[],n=e[1],s=i.Z.getDisplayPlayMethod(n),c=s;"DirectPlay"===s?c=l.ZP.translate("DirectPlaying"):"Remux"===s?c=l.ZP.translate("Remuxing"):"DirectStream"===s?c=l.ZP.translate("DirectStreaming"):"Transcode"===s&&(c=l.ZP.translate("Transcoding"));var d={stats:[],name:l.ZP.translate("LabelPlaybackInfo")};d.stats.unshift({label:l.ZP.translate("LabelPlayMethod"),value:c}),d.stats.unshift({label:l.ZP.translate("LabelPlayer"),value:a.name});var p=[];p.push(d);for(var f=0,b=t.length;f<b;f++){var y=t[f];"audio"===y.type?y.name=l.ZP.translate("LabelAudioInfo"):"video"===y.type&&(y.name=l.ZP.translate("LabelVideoInfo")),p.push(y)}var P=l.ZP.translate("LabelTranscodingInfo");"Remux"===s?P=l.ZP.translate("LabelRemuxingInfo"):"DirectStream"===s&&(P=l.ZP.translate("LabelDirectStreamingInfo")),n.TranscodingInfo&&p.push({stats:v(n,0,s),name:P}),p.push({stats:h(0,a),name:l.ZP.translate("LabelOriginalMediaInfo")});var m,g,S=u.Z.getApiClient(r.O.currentItem(a).ServerId);return o.Z.Manager.isSyncPlayEnabled()&&S.isMinServerVersion("10.6.0")&&p.push({stats:(m=[],g=o.Z.Manager.getStats(),m.push({label:l.ZP.translate("LabelSyncPlayTimeSyncDevice"),value:g.TimeSyncDevice}),m.push({label:l.ZP.translate("LabelSyncPlayTimeSyncOffset"),value:g.TimeSyncOffset+" "+l.ZP.translate("MillisecondsUnit")}),m.push({label:l.ZP.translate("LabelSyncPlayPlaybackDiff"),value:g.PlaybackDiff+" "+l.ZP.translate("MillisecondsUnit")}),m.push({label:l.ZP.translate("LabelSyncPlaySyncMethod"),value:g.SyncMethod}),m),name:l.ZP.translate("LabelSyncPlayInfo")}),Promise.resolve(p)}))}(e,a).then((function(a){var t=e.element;t&&function(e,a){e.querySelector(".playerStats-stats").innerHTML=a.map((function(e){var a="",t=e.stats;t.length&&e.name&&(a+='<div class="playerStats-stat playerStats-stat-header">',a+='<div class="playerStats-stat-label">',a+=e.name,a+="</div>",a+='<div class="playerStats-stat-value">',a+=e.subText||"",a+="</div>",a+="</div>");for(var n=0,l=t.length;n<l;n++){a+='<div class="playerStats-stat">';var s=t[n];a+='<div class="playerStats-stat-label">',a+=s.label,a+="</div>",a+='<div class="playerStats-stat-value">',a+=s.value,a+="</div>",a+="</div>"}return a})).join("")}(t,a)})))}(e,a)};e.onTimeUpdate=t,n.Events.on(a,"timeupdate",t)}function y(e,a){var t=e.onTimeUpdate;t&&n.Events.off(a,"timeupdate",t)}var P=function(){function e(a){!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=a,function(e){var a,t=document.createElement("div");t.classList.add("playerStats"),s.Z.tv&&t.classList.add("playerStats-tv"),t.classList.add("hide"),a=s.Z.tv?"":'<button type="button" is="paper-icon-button-light" class="playerStats-closeButton"><span class="material-icons close" aria-hidden="true"></span></button>';var n=s.Z.tv?"playerStats-content playerStats-content-tv":"playerStats-content";t.innerHTML='<div class="'+n+'">'+a+'<div class="playerStats-stats"></div></div>',(a=t.querySelector(".playerStats-closeButton"))&&a.addEventListener("click",d.bind(e)),document.body.appendChild(t),e.element=t}(this),this.enabled(!0)}var a,t;return a=e,(t=[{key:"enabled",value:function(e){if(null==e)return this._enabled;var a=this.options;a&&(this._enabled=e,e?(this.element.classList.remove("hide"),b(this,a.player)):(this.element.classList.add("hide"),y(this,a.player)))}},{key:"toggle",value:function(){this.enabled(!this.enabled())}},{key:"destroy",value:function(){var e=this.options;e&&(this.options=null,y(this,e.player));var a=this.element;a&&(a.parentNode.removeChild(a),this.element=null)}}])&&c(a.prototype,t),Object.defineProperty(a,"prototype",{writable:!1}),e}();a.default=P}}]);