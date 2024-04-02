"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[73468,79617,96084,1998],{73706:function(e,t,i){var n=i(22622),o=i(9482),a=i(90381);t.Ay={getVideoQualityOptions:function(e){var t,i=e.currentMaxBitrate,l=e.videoWidth,r=e.videoHeight;l/r<16/9&&(l=r*(16/9));var c=null==e.maxVideoWidth?a.A.maxVideoWidth():e.maxVideoWidth,s=(c<0?null===(t=n.g.screen())||void 0===t?void 0:t.maxAllowedWidth:c)||4096,u=l||4096,d=[],h={name:o.Ay.translate("Auto"),bitrate:0,selected:e.isAutomaticBitrateEnabled};if(e.enableAuto&&d.push(h),u>=3800&&s>=1930&&(d.push({name:"4K - 120 Mbps",maxHeight:2160,bitrate:12e7}),d.push({name:"4K - 80 Mbps",maxHeight:2160,bitrate:8e7})),u>=1900&&s>=1290&&(d.push({name:"1080p - 60 Mbps",maxHeight:1080,bitrate:6e7}),d.push({name:"1080p - 40 Mbps",maxHeight:1080,bitrate:4e7}),d.push({name:"1080p - 20 Mbps",maxHeight:1080,bitrate:2e7}),d.push({name:"1080p - 15 Mbps",maxHeight:1080,bitrate:15e6}),d.push({name:"1080p - 10 Mbps",maxHeight:1080,bitrate:1e7})),u>=1260&&s>=650&&(d.push({name:"720p - 8 Mbps",maxHeight:720,bitrate:8e6}),d.push({name:"720p - 6 Mbps",maxHeight:720,bitrate:6e6}),d.push({name:"720p - 4 Mbps",maxHeight:720,bitrate:4e6})),u>=620&&(d.push({name:"480p - 3 Mbps",maxHeight:480,bitrate:3e6}),d.push({name:"480p - 1.5 Mbps",maxHeight:480,bitrate:15e5}),d.push({name:"480p - 720 kbps",maxHeight:480,bitrate:72e4})),d.push({name:"360p - 420 kbps",maxHeight:360,bitrate:42e4}),i){for(var b=d.length-1,p=0,v=d.length;p<v;p++){var m=d[p];if(m.bitrate>0&&m.bitrate<=i){b=p;break}}var y=d[b];e.isAutomaticBitrateEnabled?h.autoText=y.name:y.selected=!0}return d},getAudioQualityOptions:function(e){var t=e.currentMaxBitrate,i=[],n={name:o.Ay.translate("Auto"),bitrate:0,selected:e.isAutomaticBitrateEnabled};if(e.enableAuto&&i.push(n),i.push({name:"2 Mbps",bitrate:2e6}),i.push({name:"1.5 Mbps",bitrate:15e5}),i.push({name:"1 Mbps",bitrate:1e6}),i.push({name:"320 kbps",bitrate:32e4}),i.push({name:"256 kbps",bitrate:256e3}),i.push({name:"192 kbps",bitrate:192e3}),i.push({name:"128 kbps",bitrate:128e3}),i.push({name:"96 kbps",bitrate:96e3}),i.push({name:"64 kbps",bitrate:64e3}),t){for(var a=i.length-1,l=0,r=i.length;l<r;l++){var c=i[l];if(c.bitrate>0&&c.bitrate<=t){a=l;break}}var s=i[a];e.isAutomaticBitrateEnabled?n.autoText=s.name:s.selected=!0}return i}}},77506:function(e,t,i){i.r(t),i.d(t,{default:function(){return P}}),i(29305),i(32733),i(84701),i(81678),i(24776),i(69892),i(44962),i(86584),i(89336),i(4754),i(94),i(36947),i(78557),i(96054),i(95021),i(73687),i(83994),i(82367);var n=i(90381),o=i(22622),a=i(83775),l=i(73706),r=i(9482),c=i(56869),s=i(62014),u=(i(63001),i(77157),i(86191)),d=i(50764),h=i(22696),b=i.n(h);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function v(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,m(n.key),n)}}function m(e){var t=function(e,t){if("object"!=p(e)||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,"string");if("object"!=p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==p(t)?t:t+""}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function f(e){e.innerHTML=[5,10,15,20,25,30].map((function(e){return{name:r.Ay.translate("ValueSeconds",e),value:1e3*e}})).map((function(e){return'<option value="'.concat(e.value,'">').concat(e.name,"</option>")})).join("")}function S(e,t,i,o){var a="Audio"===i?l.Ay.getAudioQualityOptions({currentMaxBitrate:n.A.maxStreamingBitrate(t,i),isAutomaticBitrateEnabled:n.A.enableAutomaticBitrateDetection(t,i),enableAuto:!0}):l.Ay.getVideoQualityOptions({currentMaxBitrate:n.A.maxStreamingBitrate(t,i),isAutomaticBitrateEnabled:n.A.enableAutomaticBitrateDetection(t,i),enableAuto:!0,maxVideoWidth:o});e.innerHTML=a.map((function(e){return'<option value="'.concat(e.bitrate||"",'">').concat(e.name,"</option>")})).join("")}function A(e,t,i){S(e,t,i),n.A.enableAutomaticBitrateDetection(t,i)?e.value="":e.value=n.A.maxStreamingBitrate(t,i)}function k(e,t){var i=l.Ay.getVideoQualityOptions({currentMaxBitrate:n.A.maxChromecastBitrate(),isAutomaticBitrateEnabled:!n.A.maxChromecastBitrate(),enableAuto:!0,maxVideoWidth:t});e.innerHTML=i.map((function(e){return'<option value="'.concat(e.bitrate||"",'">').concat(e.name,"</option>")})).join(""),e.value=n.A.maxChromecastBitrate()||""}function x(e,t,i){e.value?(n.A.maxStreamingBitrate(t,i,e.value),n.A.enableAutomaticBitrateDetection(t,i,!1)):n.A.enableAutomaticBitrateDetection(t,i,!0)}function g(e,t,i,a,l){var s=l.getCurrentUserId(),u=t.Id;!function(e,t,i){if(t.Policy.EnableVideoPlaybackTranscoding?e.querySelector(".videoQualitySection").classList.remove("hide"):e.querySelector(".videoQualitySection").classList.add("hide"),o.g.supports("multiserver"))return e.querySelector(".fldVideoInNetworkQuality").classList.remove("hide"),e.querySelector(".fldVideoInternetQuality").classList.remove("hide"),void(t.Policy.EnableAudioPlaybackTranscoding?e.querySelector(".musicQualitySection").classList.remove("hide"):e.querySelector(".musicQualitySection").classList.add("hide"));i.getEndpointInfo().then((function(i){i.IsInNetwork?(e.querySelector(".fldVideoInNetworkQuality").classList.remove("hide"),e.querySelector(".fldVideoInternetQuality").classList.add("hide"),e.querySelector(".musicQualitySection").classList.add("hide")):(e.querySelector(".fldVideoInNetworkQuality").classList.add("hide"),e.querySelector(".fldVideoInternetQuality").classList.remove("hide"),t.Policy.EnableAudioPlaybackTranscoding?e.querySelector(".musicQualitySection").classList.remove("hide"):e.querySelector(".musicQualitySection").classList.add("hide"))}))}(e,t,l),e.querySelector("#selectAllowedAudioChannels").value=i.allowedAudioChannels(),l.getCultures().then((function(i){!function(e,t){var i="";i+="<option value=''>".concat(r.Ay.translate("AnyLanguage"),"</option>");for(var n=0,o=t.length;n<o;n++){var a=t[n];i+="<option value='".concat(a.ThreeLetterISOLanguageName,"'>").concat(a.DisplayName,"</option>")}e.innerHTML=i}(e.querySelector("#selectAudioLanguage"),i),e.querySelector("#selectAudioLanguage",e).value=t.Configuration.AudioLanguagePreference||"",e.querySelector(".chkEpisodeAutoPlay").checked=t.Configuration.EnableNextEpisodeAutoPlay||!1})),o.g.supports("externalplayerintent")&&u===s?e.querySelector(".fldExternalPlayer").classList.remove("hide"):e.querySelector(".fldExternalPlayer").classList.add("hide"),u===s&&(t.Policy.EnableVideoPlaybackTranscoding||t.Policy.EnableAudioPlaybackTranscoding)?(e.querySelector(".qualitySections").classList.remove("hide"),o.g.supports("chromecast")&&t.Policy.EnableVideoPlaybackTranscoding?e.querySelector(".fldChromecastQuality").classList.remove("hide"):e.querySelector(".fldChromecastQuality").classList.add("hide")):(e.querySelector(".qualitySections").classList.add("hide"),e.querySelector(".fldChromecastQuality").classList.add("hide")),e.querySelector(".chkPlayDefaultAudioTrack").checked=t.Configuration.PlayDefaultAudioTrack||!1,e.querySelector(".chkPreferFmp4HlsContainer").checked=i.preferFmp4HlsContainer(),e.querySelector(".chkEnableCinemaMode").checked=i.enableCinemaMode(),e.querySelector("#selectAudioNormalization").value=i.selectAudioNormalization(),e.querySelector(".chkEnableNextVideoOverlay").checked=i.enableNextVideoInfoOverlay(),e.querySelector(".chkRememberAudioSelections").checked=t.Configuration.RememberAudioSelections||!1,e.querySelector(".chkRememberSubtitleSelections").checked=t.Configuration.RememberSubtitleSelections||!1,e.querySelector(".chkExternalVideoPlayer").checked=n.A.enableSystemExternalPlayers(),e.querySelector(".chkLimitSupportedVideoResolution").checked=n.A.limitSupportedVideoResolution(),A(e.querySelector(".selectVideoInNetworkQuality"),!0,"Video"),A(e.querySelector(".selectVideoInternetQuality"),!1,"Video"),A(e.querySelector(".selectMusicInternetQuality"),!1,"Audio"),k(e.querySelector(".selectChromecastVideoQuality"));var d,h=e.querySelector(".selectChromecastVersion"),p="",v=function(e,t){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!i){if(Array.isArray(e)||(i=function(e,t){if(e){if("string"==typeof e)return y(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?y(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,r=!1;return{s:function(){i=i.call(e)},n:function(){var e=i.next();return l=e.done,e},e:function(e){r=!0,a=e},f:function(){try{l||null==i.return||i.return()}finally{if(r)throw a}}}}(a.CastReceiverApplications);try{for(v.s();!(d=v.n()).done;){var m=d.value;p+="<option value='".concat(b()(m.Id),"'>").concat(b()(m.Name),"</option>")}}catch(e){v.e(e)}finally{v.f()}h.innerHTML=p,h.value=t.Configuration.CastReceiverId,e.querySelector(".selectMaxVideoWidth").value=n.A.maxVideoWidth();var S=e.querySelector(".selectSkipForwardLength");f(S),S.value=i.skipForwardLength();var x=e.querySelector(".selectSkipBackLength");f(x),x.value=i.skipBackLength(),c.Ay.hide()}function C(e,t,i){e.value=t,e.selectedIndex<0&&(e.value=i)}function L(e){var t=this.options.element,i=t.querySelector(".selectVideoInNetworkQuality"),n=t.querySelector(".selectVideoInternetQuality"),o=t.querySelector(".selectChromecastVideoQuality"),a=i.value,l=n.value,r=o.value,c=parseInt(e.target.value||"0",10)||0;S(i,!0,"Video",c),S(n,!1,"Video",c),k(o,c),C(i,a,""),C(n,l,""),C(o,r,"")}function w(e){var t=this,i=u.A.getApiClient(t.options.serverId),o=t.options.userId,a=t.options.userSettings;return a.setUserInfo(o,i).then((function(){var e=t.options.enableSaveConfirmation;!function(e,t,i,o,a,l){c.Ay.show(),a.getUser(i).then((function(i){(function(e,t,i,o){return n.A.enableSystemExternalPlayers(e.querySelector(".chkExternalVideoPlayer").checked),n.A.maxChromecastBitrate(e.querySelector(".selectChromecastVideoQuality").value),n.A.maxVideoWidth(e.querySelector(".selectMaxVideoWidth").value),n.A.limitSupportedVideoResolution(e.querySelector(".chkLimitSupportedVideoResolution").checked),x(e.querySelector(".selectVideoInNetworkQuality"),!0,"Video"),x(e.querySelector(".selectVideoInternetQuality"),!1,"Video"),x(e.querySelector(".selectMusicInternetQuality"),!1,"Audio"),i.allowedAudioChannels(e.querySelector("#selectAllowedAudioChannels").value),t.Configuration.AudioLanguagePreference=e.querySelector("#selectAudioLanguage").value,t.Configuration.PlayDefaultAudioTrack=e.querySelector(".chkPlayDefaultAudioTrack").checked,t.Configuration.EnableNextEpisodeAutoPlay=e.querySelector(".chkEpisodeAutoPlay").checked,i.preferFmp4HlsContainer(e.querySelector(".chkPreferFmp4HlsContainer").checked),i.enableCinemaMode(e.querySelector(".chkEnableCinemaMode").checked),i.selectAudioNormalization(e.querySelector("#selectAudioNormalization").value),i.enableNextVideoInfoOverlay(e.querySelector(".chkEnableNextVideoOverlay").checked),t.Configuration.RememberAudioSelections=e.querySelector(".chkRememberAudioSelections").checked,t.Configuration.RememberSubtitleSelections=e.querySelector(".chkRememberSubtitleSelections").checked,t.Configuration.CastReceiverId=e.querySelector(".selectChromecastVersion").value,i.skipForwardLength(e.querySelector(".selectSkipForwardLength").value),i.skipBackLength(e.querySelector(".selectSkipBackLength").value),o.updateUserConfiguration(t.Id,t.Configuration)})(t,i,o,a).then((function(){c.Ay.hide(),l&&(0,d.A)(r.Ay.translate("SettingsSaved")),s.A.trigger(e,"saved")}),(function(){c.Ay.hide()}))}))}(t,t.options.element,o,a,i,e)})),e&&e.preventDefault(),!1}function I(e,t){e.element.innerHTML=r.Ay.translateHtml('<form style="margin:0 auto"> <div class="verticalSection verticalSection-extrabottompadding"> <h2 class="sectionTitle"> ${HeaderAudioSettings} </h2> <div class="selectContainer"> <select is="emby-select" id="selectAllowedAudioChannels" label="${LabelAllowedAudioChannels}"> <option value="-1">${Auto}</option> <option value="1">${LabelSelectMono}</option> <option value="2">${LabelSelectStereo}</option> <option value="6">5.1 ${LabelSelectAudioChannels}</option> <option value="8">7.1 ${LabelSelectAudioChannels}</option> </select> </div> <div class="selectContainer"> <select is="emby-select" id="selectAudioLanguage" label="${LabelAudioLanguagePreference}"></select> </div> <label class="checkboxContainer"> <input type="checkbox" is="emby-checkbox" class="chkPlayDefaultAudioTrack"/> <span>${LabelPlayDefaultAudioTrack}</span> </label> </div> <div class="qualitySections hide"> <div class="verticalSection verticalSection-extrabottompadding videoQualitySection hide"> <h2 class="sectionTitle"> ${HeaderVideoQuality} </h2> <div class="selectContainer fldVideoInNetworkQuality hide"> <select is="emby-select" class="selectVideoInNetworkQuality" label="${LabelHomeNetworkQuality}"></select> </div> <div class="selectContainer fldVideoInternetQuality hide"> <select is="emby-select" class="selectVideoInternetQuality" label="${LabelInternetQuality}"></select> </div> <div class="selectContainer fldChromecastQuality hide"> <select is="emby-select" class="selectChromecastVideoQuality" label="${LabelMaxChromecastBitrate}"></select> </div> <div class="selectContainer"> <select is="emby-select" class="selectMaxVideoWidth" label="${LabelMaxVideoResolution}"> <option value="0">${Auto}</option> <option value="-1">${ScreenResolution}</option> <option value="640">360p</option> <option value="852">480p</option> <option value="1280">720p</option> <option value="1920">1080p</option> <option value="3840">4K</option> <option value="7680">8K</option> </select> </div> <div class="checkboxContainer checkboxContainer-withDescription"> <label> <input type="checkbox" is="emby-checkbox" class="chkLimitSupportedVideoResolution"/> <span>${LimitSupportedVideoResolution}</span> </label> <div class="fieldDescription checkboxFieldDescription">${LimitSupportedVideoResolutionHelp}</div> </div> </div> <div class="verticalSection verticalSection-extrabottompadding musicQualitySection hide"> <h2> ${HeaderMusicQuality} </h2> <div class="selectContainer"> <select is="emby-select" class="selectMusicInternetQuality" label="${LabelInternetQuality}"></select> </div> </div> </div> <div class="verticalSection verticalSection-extrabottompadding"> <h2 class="sectionTitle"> ${TabAdvanced} </h2> <div class="selectContainer"> <select is="emby-select" id="selectAudioNormalization" label="${LabelSelectAudioNormalization}"> <option value="Off">${Off}</option> <option value="TrackGain">${LabelTrackGain}</option> <option value="AlbumGain">${LabelAlbumGain}</option> </select> <div class="fieldDescription">${SelectAudioNormalizationHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription"> <label> <input type="checkbox" is="emby-checkbox" class="chkPreferFmp4HlsContainer"/> <span>${PreferFmp4HlsContainer}</span> </label> <div class="fieldDescription checkboxFieldDescription">${PreferFmp4HlsContainerHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription cinemaModeOptions"> <label> <input type="checkbox" is="emby-checkbox" class="chkEnableCinemaMode"/> <span>${EnableCinemaMode}</span> </label> <div class="fieldDescription checkboxFieldDescription">${CinemaModeConfigurationHelp}</div> </div> <div class="checkboxContainer fldEpisodeAutoPlay"> <label> <input type="checkbox" is="emby-checkbox" class="chkEpisodeAutoPlay"/> <span>${PlayNextEpisodeAutomatically}</span> </label> </div> <div class="checkboxContainer checkboxContainer-withDescription"> <label> <input type="checkbox" is="emby-checkbox" class="chkRememberAudioSelections"/> <span>${RememberAudioSelections}</span> </label> <div class="fieldDescription checkboxFieldDescription">${RememberAudioSelectionsHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription"> <label> <input type="checkbox" is="emby-checkbox" class="chkRememberSubtitleSelections"/> <span>${RememberSubtitleSelections}</span> </label> <div class="fieldDescription checkboxFieldDescription">${RememberSubtitleSelectionsHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription fldEnableNextVideoOverlay"> <label> <input type="checkbox" is="emby-checkbox" class="chkEnableNextVideoOverlay"/> <span>${EnableNextVideoInfoOverlay}</span> </label> <div class="fieldDescription checkboxFieldDescription">${EnableNextVideoInfoOverlayHelp}</div> </div> <div class="checkboxContainer fldExternalPlayer checkboxContainer-withDescription hide"> <label> <input type="checkbox" is="emby-checkbox" class="chkExternalVideoPlayer"/> <span>${EnableExternalVideoPlayers}</span> </label> <div class="fieldDescription checkboxFieldDescription"> <div class="labelNativeExternalPlayers">${EnableExternalVideoPlayersHelp}</div> </div> </div> <div class="selectContainer"> <select is="emby-select" class="selectChromecastVersion" label="${LabelChromecastVersion}"></select> </div> <div class="selectContainer"> <select is="emby-select" class="selectSkipForwardLength" label="${LabelSkipForwardLength}"></select> </div> <div class="selectContainer"> <select is="emby-select" class="selectSkipBackLength" label="${LabelSkipBackLength}"></select> </div> </div> <button is="emby-button" type="submit" class="raised button-submit block btnSave hide"> <span>${Save}</span> </button> </form> ',"core"),e.element.querySelector("form").addEventListener("submit",w.bind(t)),e.enableSaveButton&&e.element.querySelector(".btnSave").classList.remove("hide"),e.element.querySelector(".selectMaxVideoWidth").addEventListener("change",L.bind(t)),t.loadData(),e.autoFocus&&a.A.autoFocus(e.element)}var q=function(){return e=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=t,I(t,this)},t=[{key:"loadData",value:function(){var e=this,t=e.options.element;c.Ay.show();var i=e.options.userId,n=u.A.getApiClient(e.options.serverId),o=e.options.userSettings;n.getUser(i).then((function(a){n.getSystemInfo().then((function(l){o.setUserInfo(i,n).then((function(){e.dataLoaded=!0,g(t,a,o,l,n)}))}))}))}},{key:"submit",value:function(){w.call(this)}},{key:"destroy",value:function(){this.options=null}}],t&&v(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}(),V=q,E=i(82885),M=i(84069),T=E.UserSettings;function P(e,t){var i,n=t.userId||ApiClient.getCurrentUserId(),o=n===ApiClient.getCurrentUserId()?E:new T;e.addEventListener("viewshow",(function(){i?i.loadData():i=new V({serverId:ApiClient.serverId(),userId:n,element:e.querySelector(".settingsContainer"),userSettings:o,enableSaveButton:!0,enableSaveConfirmation:!0,autoFocus:M.default.isEnabled()})})),e.addEventListener("viewdestroy",(function(){i&&(i.destroy(),i=null)}))}},63001:function(e,t,i){var n=i(46782),o=i(34789),a=i(79617),l=(i(69177),Object.create(HTMLSelectElement.prototype));function r(){return!(!o.A.edgeUwp&&!o.A.xboxOne&&(o.A.tizen||o.A.orsay||o.A.web0s||!o.A.tv&&n.A.tv))}function c(e){var t=s(e),i=t?t.textContent||t.innerText:null;a.default.show({items:e.options,positionTo:e,title:i}).then((function(t){!function(e,t){e.value=t}(e,t),function(e){var t=new Event("change",{bubbles:!1,cancelable:!0});e.dispatchEvent(t)}(e)}))}function s(e){for(var t=e.previousSibling;t&&"LABEL"!==t.tagName;)t=t.previousSibling;return t}function u(){var e=s(this);e&&e.classList.add("selectLabelFocused")}function d(){var e=s(this);e&&e.classList.remove("selectLabelFocused")}function h(e){e.button||r()||(e.preventDefault(),c(this))}function b(e){switch(e.keyCode){case 13:return void(r()||(e.preventDefault(),c(this)));case 37:case 38:case 39:case 40:return void(n.A.tv&&e.preventDefault())}}var p=0;l.createdCallback=function(){this.id||(this.id="embyselect"+p,p++),this.classList.add("emby-select-withcolor"),n.A.tv&&this.classList.add("emby-select-focusscale"),this.addEventListener("mousedown",h),this.addEventListener("keydown",b),this.addEventListener("focus",u),this.addEventListener("blur",d)},l.attachedCallback=function(){var e;if(!this.classList.contains("emby-select")){this.classList.add("emby-select");var t,i=this.ownerDocument.createElement("label");i.innerText=this.getAttribute("label")||"",i.classList.add("selectLabel"),i.htmlFor=this.id,null===(e=this.parentNode)||void 0===e||e.insertBefore(i,this),this.classList.contains("emby-select-withcolor")&&(null===(t=this.parentNode)||void 0===t||t.insertAdjacentHTML("beforeend",'<div class="selectArrowContainer"><div style="visibility:hidden;display:none;">0</div><span class="selectArrow material-icons keyboard_arrow_down" aria-hidden="true"></span></div>'))}},l.setLabel=function(e){var t;(null===(t=this.parentNode)||void 0===t?void 0:t.querySelector("label")).innerText=e},document.registerElement("emby-select",{prototype:l,extends:"select"})},79617:function(e,t,i){i.r(t),i.d(t,{show:function(){return d}});var n=i(22696),o=i.n(n),a=i(79754),l=i(46782),r=i(9482),c=i(47629),s=(i(10353),function(e){var t="function"==typeof Symbol&&Symbol.iterator,i=t&&e[t],n=0;if(i)return i.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")});function u(e,t,n){Promise.resolve().then(i.bind(i,46345)).then((function(i){var o=n?"on":"off";i.centerFocus[o](e,t)})).catch((function(e){console.warn("Error in centerFocus",e)}))}function d(e){var t,i,n,d={removeOnClose:!0,enableHistory:e.enableHistory,scrollY:!1};l.A.tv?(d.size="fullscreen",n=!0,d.autoFocus=!0):(d.modal=!1,d.entryAnimation=e.entryAnimation,d.exitAnimation=e.exitAnimation,d.entryAnimationDuration=e.entryAnimationDuration||140,d.exitAnimationDuration=e.exitAnimationDuration||100,d.autoFocus=!1);var h=a.default.createDialog(d);n?h.classList.add("actionsheet-fullscreen"):h.classList.add("actionsheet-not-fullscreen"),h.classList.add("actionSheet"),e.dialogClass&&h.classList.add(e.dialogClass);var b="",p=l.A.tv?"scrollY smoothScrollY hiddenScrollY":"scrollY",v="";e.items.length>20&&(v+="min-width:"+(c.Ay.getWindowSize().innerWidth>=300?240:200)+"px;");var m,y=!1,f=[];try{for(var S=s(e.items),A=S.next();!A.done;A=S.next())(m=(L=A.value).icon||(L.selected?"check":null))&&(y=!0),f.push(m||"")}catch(e){t={error:e}}finally{try{A&&!A.done&&(i=S.return)&&i.call(S)}finally{if(t)throw t.error}}l.A.tv&&(b+='<button is="paper-icon-button-light" class="btnCloseActionSheet hide-mouse-idle-tv" tabindex="-1" title="'.concat(r.Ay.translate("ButtonBack"),'">\n                     <span class="material-icons arrow_back" aria-hidden="true"></span>\n                 </button>'));var k=e.title&&!y;k||l.A.tv?b+='<div class="actionSheetContent actionSheetContent-centered">':b+='<div class="actionSheetContent">',e.title&&(b+='<h1 class="actionSheetTitle">'+o()(e.title)+"</h1>"),e.text&&(b+='<p class="actionSheetText">'+o()(e.text)+"</p>");var x="actionSheetScroller";l.A.tv&&(x+=" actionSheetScroller-tv focuscontainer-x focuscontainer-y"),b+='<div class="'+x+" "+p+'" style="'+v+'">';var g="listItem listItem-button actionSheetMenuItem";(e.border||e.shaded)&&(g+=" listItem-border"),e.menuItemClass&&(g+=" "+e.menuItemClass),l.A.tv&&(g+=" listItem-focusscale"),l.A.mobile&&(g+=" actionsheet-xlargeFont");for(var C=0;C<e.items.length;C++){var L;(L=e.items[C]).divider?b+='<div class="actionsheetDivider"></div>':(b+="<button"+(L.selected&&l.A.tv?" autoFocus":"")+' is="emby-button" type="button" class="'+g+'" data-id="'+(null==L.id||""===L.id?L.value:L.id)+'">',(m=f[C])?b+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons '.concat(m,'" aria-hidden="true"></span>'):y&&!k&&(b+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons check" aria-hidden="true" style="visibility:hidden;"></span>'),b+='<div class="listItemBody actionsheetListItemBody">',b+='<div class="listItemBodyText actionSheetItemText">',b+=o()(L.name||L.textContent||L.innerText),b+="</div>",L.secondaryText&&(b+='<div class="listItemBodyText secondary">'.concat(o()(L.secondaryText),"</div>")),b+="</div>",L.asideText&&(b+='<div class="listItemAside actionSheetItemAsideText">'.concat(o()(L.asideText),"</div>")),b+="</button>")}if(e.showCancel&&(b+='<div class="buttons">',b+='<button is="emby-button" type="button" class="btnCloseActionSheet">'.concat(r.Ay.translate("ButtonCancel"),"</button>"),b+="</div>"),b+="</div>",h.innerHTML=b,l.A.tv){var w=h.querySelector(".actionSheetScroller");w&&u(w,!1,!0)}var I=h.querySelector(".btnCloseActionSheet");I&&I.addEventListener("click",(function(){a.default.close(h)}));var q,V=null;return e.timeout&&(q=setTimeout((function(){a.default.close(h)}),e.timeout)),new Promise((function(t,i){var n=!1;h.addEventListener("click",(function(i){var o=c.Ay.parentWithClass(i.target,"actionSheetMenuItem");o&&(V=o.getAttribute("data-id"),e.resolveOnClick&&(Array.isArray(e.resolveOnClick)?-1!==e.resolveOnClick.indexOf(V)&&(t(V),n=!0):(t(V),n=!0)),a.default.close(h))})),h.addEventListener("close",(function(){if(l.A.tv){var o=h.querySelector(".actionSheetScroller");o&&u(o,!1,!1)}q&&(clearTimeout(q),q=void 0),n||(null!=V?(e.callback&&e.callback(V),t(V)):i("ActionSheet closed without resolving"))})),a.default.open(h).catch((function(e){console.warn("DialogHelper.open error",e)}));var o=e.positionTo&&"fullscreen"!==d.size?function(e,t,i){var n=c.Ay.getWindowSize(),o=n.innerHeight,a=n.innerWidth,l=function(e){var t,i,n=[];if(!document)return n;try{for(var o=s(e),a=o.next();!a.done;a=o.next()){var l=a.value.getBoundingClientRect();n.push({top:l.top,left:l.left,width:l.width,height:l.height})}}catch(e){t={error:e}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(t)throw t.error}}return n}([e])[0];"top"!==t.positionY&&(l.top+=(l.height||0)/2),l.left+=(l.width||0)/2;var r=i.offsetHeight||300,u=i.offsetWidth||160;l.top-=r/2,l.left-=u/2;var d=l.left+u-a,h=l.top+r-o;return d>0&&(l.left-=d+20),h>0&&(l.top-=h+20),l.top+=t.offsetTop||0,l.left+=t.offsetLeft||0,l.top=Math.max(l.top,10),l.left=Math.max(l.left,10),l}(e.positionTo,e,h):null;o&&(h.style.position="fixed",h.style.margin="0",h.style.left=o.left+"px",h.style.top=o.top+"px")}))}t.default={show:d}}}]);