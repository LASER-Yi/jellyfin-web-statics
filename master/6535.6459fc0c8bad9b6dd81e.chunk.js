/*! For license information please see 6535.6459fc0c8bad9b6dd81e.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6535],{31214:function(e,t,a){a.d(t,{ZP:function(){return M}}),a(5769),a(23938),a(61013),a(63238),a(55849),a(95623),a(61514),a(61418),a(17460),a(14078),a(98010),a(32081),a(72410),a(69217),a(27471),a(99785),a(25901),a(92189),a(91047),a(98521),a(6798),a(82923),a(21897),a(12274),a(50987),a(60190);var r,i,n=a(65009),o=a.n(n),l=a(94994),c=a(72365),s=(a(12291),a(15856),a(62033),'<h2>${HeaderLibrarySettings}</h2> <div class="selectContainer fldMetadataLanguage hide"> <select is="emby-select" id="selectLanguage" label="${LabelMetadataDownloadLanguage}"></select> </div> <div class="selectContainer fldMetadataCountry hide"> <select is="emby-select" id="selectCountry" label="${LabelCountry}"></select> </div> <div class="checkboxContainer checkboxContainer-withDescription chkEnablePhotosContainer"> <label> <input type="checkbox" is="emby-checkbox" class="chkEnablePhotos" checked="checked"/> <span>${EnablePhotos}</span> </label> <div class="fieldDescription checkboxFieldDescription">${EnablePhotosHelp}</div> </div> <div class="inputContainer fldSeasonZeroDisplayName hide advanced"> <input is="emby-input" type="text" id="txtSeasonZeroName" label="${LabelSpecialSeasonsDisplayName}" value="Specials" required/> </div> <div class="checkboxContainer checkboxContainer-withDescription chkEnableEmbeddedTitlesContainer hide advanced"> <label> <input is="emby-checkbox" type="checkbox" id="chkEnableEmbeddedTitles"/> <span>${PreferEmbeddedTitlesOverFileNames}</span> </label> <div class="fieldDescription checkboxFieldDescription">${PreferEmbeddedTitlesOverFileNamesHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription chkEnableEmbeddedExtrasTitlesContainer hide advanced"> <label> <input is="emby-checkbox" type="checkbox" id="chkEnableEmbeddedExtrasTitles"/> <span>${PreferEmbeddedExtrasTitlesOverFileNames}</span> </label> <div class="fieldDescription checkboxFieldDescription">${PreferEmbeddedExtrasTitlesOverFileNamesHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription chkEnableEmbeddedEpisodeInfosContainer hide advanced"> <label> <input is="emby-checkbox" type="checkbox" id="chkEnableEmbeddedEpisodeInfos"/> <span>${PreferEmbeddedEpisodeInfosOverFileNames}</span> </label> <div class="fieldDescription checkboxFieldDescription">${PreferEmbeddedEpisodeInfosOverFileNamesHelp}</div> </div> <div class="selectContainer fldAllowEmbeddedSubtitlesContainer hide advanced" style="margin:2em 0"> <select is="emby-select" id="selectAllowEmbeddedSubtitles" label="${AllowEmbeddedSubtitles}"> <option value="AllowAll">${AllowEmbeddedSubtitlesAllowAllOption}</option> <option value="AllowText">${AllowEmbeddedSubtitlesAllowTextOption}</option> <option value="AllowImage">${AllowEmbeddedSubtitlesAllowImageOption}</option> <option value="AllowNone">${AllowEmbeddedSubtitlesAllowNoneOption}</option> </select> <div class="fieldDescription">${AllowEmbeddedSubtitlesHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription advanced"> <label> <input type="checkbox" is="emby-checkbox" class="chkEnableRealtimeMonitor" checked="checked"/> <span>${LabelEnableRealtimeMonitor}</span> </label> <div class="fieldDescription checkboxFieldDescription">${LabelEnableRealtimeMonitorHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription chkAutomaticallyAddToCollectionContainer hide advanced"> <label> <input is="emby-checkbox" type="checkbox" id="chkAutomaticallyAddToCollection"/> <span>${LabelAutomaticallyAddToCollection}</span> </label> <div class="fieldDescription checkboxFieldDescription">${LabelAutomaticallyAddToCollectionHelp}</div> </div> <div class="metadataReaders hide advanced" style="margin-bottom:2em"> </div> <div class="metadataFetchers hide" style="margin-bottom:2em"> </div> <div class="selectContainer fldAutoRefreshInterval hide advanced" style="margin:2em 0"> <select is="emby-select" id="selectAutoRefreshInterval" label="${LabelAutomaticallyRefreshInternetMetadataEvery}"></select> <div class="fieldDescription">${MessageEnablingOptionLongerScans}</div> </div> <div class="metadataSavers hide" style="margin-bottom:2em"> </div> <div class="imageFetchers hide advanced" style="margin-bottom:2em"> </div> <div class="checkboxContainer checkboxContainer-withDescription chkSaveLocalContainer hide"> <label> <input is="emby-checkbox" type="checkbox" id="chkSaveLocal"/> <span>${LabelSaveLocalMetadata}</span> </label> <div class="fieldDescription checkboxFieldDescription">${LabelSaveLocalMetadataHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription chkAutomaticallyGroupSeriesContainer hide advanced"> <label> <input type="checkbox" is="emby-checkbox" class="chkAutomaticallyGroupSeries"/> <span>${OptionAutomaticallyGroupSeries}</span> </label> <div class="fieldDescription checkboxFieldDescription">${OptionAutomaticallyGroupSeriesHelp}</div> </div> <div class="chapterSettingsSection hide"> <h2>${HeaderChapterImages}</h2> <div class="checkboxContainer checkboxContainer-withDescription fldExtractChapterImages"> <label> <input type="checkbox" is="emby-checkbox" class="chkExtractChapterImages"/> <span>${OptionExtractChapterImage}</span> </label> <div class="fieldDescription checkboxFieldDescription">${ExtractChapterImagesHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription fldExtractChaptersDuringLibraryScan advanced"> <label> <input type="checkbox" is="emby-checkbox" class="chkExtractChaptersDuringLibraryScan"/> <span>${LabelExtractChaptersDuringLibraryScan}</span> </label> <div class="fieldDescription checkboxFieldDescription">${LabelExtractChaptersDuringLibraryScanHelp}</div> </div> </div> <div class="subtitleDownloadSettings hide"> <h2>${HeaderSubtitleDownloads}</h2> <div> <h3 class="checkboxListLabel">${LabelDownloadLanguages}</h3> <div class="subtitleDownloadLanguages paperList checkboxList" style="max-height:10.5em;overflow-y:auto;padding:.5em 1em"> </div> </div> <br/> <div class="subtitleFetchers advanced" style="margin-bottom:2em"> </div> <div class="checkboxContainer checkboxContainer-withDescription"> <label> <input is="emby-checkbox" type="checkbox" id="chkRequirePerfectMatch" checked="checked"/> <span>${OptionRequirePerfectSubtitleMatch}</span> </label> <div class="fieldDescription checkboxFieldDescription">${OptionRequirePerfectSubtitleMatchHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription advanced"> <label> <input is="emby-checkbox" type="checkbox" id="chkSkipIfAudioTrackPresent"/> <span>${LabelSkipIfAudioTrackPresent}</span> </label> <div class="fieldDescription checkboxFieldDescription">${LabelSkipIfAudioTrackPresentHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription advanced"> <label> <input is="emby-checkbox" type="checkbox" id="chkSkipIfGraphicalSubsPresent"/> <span>${LabelSkipIfGraphicalSubsPresent}</span> </label> <div class="fieldDescription checkboxFieldDescription">${LabelSkipIfGraphicalSubsPresentHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription advanced"> <label> <input type="checkbox" is="emby-checkbox" id="chkSaveSubtitlesLocally" checked="checked"/> <span>${SaveSubtitlesIntoMediaFolders}</span> </label> <div class="fieldDescription checkboxFieldDescription">${SaveSubtitlesIntoMediaFoldersHelp}</div> </div> </div> ');function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function u(){u=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,r=Object.defineProperty||function(e,t,a){e[t]=a.value},i="function"==typeof Symbol?Symbol:{},n=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function c(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,a){return e[t]=a}}function s(e,t,a,i){var n=t&&t.prototype instanceof b?t:b,o=Object.create(n.prototype),l=new C(i||[]);return r(o,"_invoke",{value:x(e,a,l)}),o}function h(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var p={};function b(){}function v(){}function y(){}var m={};c(m,n,(function(){return this}));var f=Object.getPrototypeOf,k=f&&f(f(q([])));k&&k!==t&&a.call(k,n)&&(m=k);var S=y.prototype=b.prototype=Object.create(m);function g(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function L(e,t){function i(r,n,o,l){var c=h(e[r],e,n);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"==d(u)&&a.call(u,"__await")?t.resolve(u.__await).then((function(e){i("next",e,o,l)}),(function(e){i("throw",e,o,l)})):t.resolve(u).then((function(e){s.value=e,o(s)}),(function(e){return i("throw",e,o,l)}))}l(c.arg)}var n;r(this,"_invoke",{value:function(e,a){function r(){return new t((function(t,r){i(e,a,t,r)}))}return n=n?n.then(r,r):r()}})}function x(e,t,a){var r="suspendedStart";return function(i,n){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw n;return{value:void 0,done:!0}}for(a.method=i,a.arg=n;;){var o=a.delegate;if(o){var l=E(o,a);if(l){if(l===p)continue;return l}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var c=h(e,t,a);if("normal"===c.type){if(r=a.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(r="completed",a.method="throw",a.arg=c.arg)}}}function E(e,t){var a=t.method,r=e.iterator[a];if(void 0===r)return t.delegate=null,"throw"===a&&e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method)||"return"!==a&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+a+"' method")),p;var i=h(r,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,p;var n=i.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function q(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:D}}function D(){return{value:void 0,done:!0}}return v.prototype=y,r(S,"constructor",{value:y,configurable:!0}),r(y,"constructor",{value:v,configurable:!0}),v.displayName=c(y,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,l,"GeneratorFunction")),e.prototype=Object.create(S),e},e.awrap=function(e){return{__await:e}},g(L.prototype),c(L.prototype,o,(function(){return this})),e.AsyncIterator=L,e.async=function(t,a,r,i,n){void 0===n&&(n=Promise);var o=new L(s(t,a,r,i),n);return e.isGeneratorFunction(a)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},g(S),c(S,l,"Generator"),c(S,n,(function(){return this})),c(S,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),a=[];for(var r in t)a.push(r);return a.reverse(),function e(){for(;a.length;){var r=a.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=q,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(A),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(a,r){return o.type="throw",o.arg=e,t.next=a,r&&(t.method="next",t.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var n=this.tryEntries[i],o=n.completion;if("root"===n.tryLoc)return r("end");if(n.tryLoc<=this.prev){var l=a.call(n,"catchLoc"),c=a.call(n,"finallyLoc");if(l&&c){if(this.prev<n.catchLoc)return r(n.catchLoc,!0);if(this.prev<n.finallyLoc)return r(n.finallyLoc)}else if(l){if(this.prev<n.catchLoc)return r(n.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<n.finallyLoc)return r(n.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&a.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var n=i;break}}n&&("break"===e||"continue"===e)&&n.tryLoc<=t&&t<=n.finallyLoc&&(n=null);var o=n?n.completion:{};return o.type=e,o.arg=t,n?(this.method="next",this.next=n.finallyLoc,p):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),A(a),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var i=r.arg;A(a)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:q(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),p}},e}function h(e,t,a,r,i,n,o){try{var l=e[n](o),c=l.value}catch(e){return void a(e)}l.done?t(c):Promise.resolve(c).then(r,i)}function p(e){return function(){var t=this,a=arguments;return new Promise((function(r,i){var n=e.apply(t,a);function o(e){h(n,r,i,o,l,"next",e)}function l(e){h(n,r,i,o,l,"throw",e)}o(void 0)}))}}function b(e){return ApiClient.getCultures().then((function(t){!function(e,t){var a="";a+="<option value=''></option>";for(var r=0;r<t.length;r++){var i=t[r];a+="<option value='".concat(i.TwoLetterISOLanguageName,"'>").concat(i.DisplayName,"</option>")}e.innerHTML=a}(e.querySelector("#selectLanguage"),t),function(e,t){for(var a="",r=0;r<t.length;r++){var i=t[r];a+='<label><input type="checkbox" is="emby-checkbox" class="chkSubtitleLanguage" data-lang="'.concat(i.ThreeLetterISOLanguageName.toLowerCase(),'" /><span>').concat(i.DisplayName,"</span></label>")}e.innerHTML=a}(e.querySelector(".subtitleDownloadLanguages"),t)}))}function v(e){return ApiClient.getCountries().then((function(t){var a="";a+="<option value=''></option>";for(var r=0;r<t.length;r++){var i=t[r];a+="<option value='".concat(i.TwoLetterISORegionName,"'>").concat(i.DisplayName,"</option>")}e.innerHTML=a}))}function y(e){var t="";t+="<option value='0'>".concat(l.ZP.translate("Never"),"</option>"),t+=[30,60,90].map((function(e){return"<option value='".concat(e,"'>").concat(l.ZP.translate("EveryNDays",e),"</option>")})).join(""),e.innerHTML=t}function m(e,t){var a="",r=e.querySelector(".metadataReaders");if(t.length<1)return r.innerHTML="",r.classList.add("hide"),!1;a+='<h3 class="checkboxListLabel">'.concat(l.ZP.translate("LabelMetadataReaders"),"</h3>"),a+='<div class="checkboxList paperList checkboxList-paperList">';for(var i=0;i<t.length;i++){var n=t[i];a+='<div class="listItem localReaderOption sortableOption" data-pluginname="'.concat(o()(n.Name),'">'),a+='<span class="listItemIcon material-icons live_tv" aria-hidden="true"></span>',a+='<div class="listItemBody">',a+='<h3 class="listItemBodyText">',a+=o()(n.Name),a+="</h3>",a+="</div>",i>0?a+='<button type="button" is="paper-icon-button-light" title="'.concat(l.ZP.translate("Up"),'" class="btnSortableMoveUp btnSortable" data-pluginindex="').concat(i,'"><span class="material-icons keyboard_arrow_up" aria-hidden="true"></span></button>'):t.length>1&&(a+='<button type="button" is="paper-icon-button-light" title="'.concat(l.ZP.translate("Down"),'" class="btnSortableMoveDown btnSortable" data-pluginindex="').concat(i,'"><span class="material-icons keyboard_arrow_down" aria-hidden="true"></span></button>')),a+="</div>"}return a+="</div>",a+='<div class="fieldDescription">'.concat(l.ZP.translate("LabelMetadataReadersHelp"),"</div>"),t.length<2?r.classList.add("hide"):r.classList.remove("hide"),r.innerHTML=a,!0}function f(e,t){var a="",r=e.MetadataFetchers;return(r=T(r,t.MetadataFetcherOrder||[])).length?(a+='<div class="metadataFetcher" data-type="'+e.Type+'">',a+='<h3 class="checkboxListLabel">'+l.ZP.translate("LabelTypeMetadataDownloaders",l.ZP.translate("TypeOptionPlural"+e.Type))+"</h3>",a+='<div class="checkboxList paperList checkboxList-paperList">',r.forEach((function(e,i){a+='<div class="listItem metadataFetcherItem sortableOption" data-pluginname="'+o()(e.Name)+'">';var n=(t.MetadataFetchers?t.MetadataFetchers.includes(e.Name):e.DefaultEnabled)?' checked="checked"':"";a+='<label class="listItemCheckboxContainer"><input type="checkbox" is="emby-checkbox" class="chkMetadataFetcher" data-pluginname="'+o()(e.Name)+'" '+n+"><span></span></label>",a+='<div class="listItemBody">',a+='<h3 class="listItemBodyText">',a+=o()(e.Name),a+="</h3>",a+="</div>",i>0?a+='<button type="button" is="paper-icon-button-light" title="'+l.ZP.translate("Up")+'" class="btnSortableMoveUp btnSortable" data-pluginindex="'+i+'"><span class="material-icons keyboard_arrow_up" aria-hidden="true"></span></button>':r.length>1&&(a+='<button type="button" is="paper-icon-button-light" title="'+l.ZP.translate("Down")+'" class="btnSortableMoveDown btnSortable" data-pluginindex="'+i+'"><span class="material-icons keyboard_arrow_down" aria-hidden="true"></span></button>'),a+="</div>"})),a+="</div>",a+='<div class="fieldDescription">'+l.ZP.translate("LabelMetadataDownloadersHelp")+"</div>",a+="</div>"):a}function k(e,t){for(var a=e.TypeOptions||[],r=0;r<a.length;r++){var i=a[r];if(i.Type===t)return i}return null}function S(e,t,a){for(var r="",i=e.querySelector(".metadataFetchers"),n=0;n<t.TypeOptions.length;n++){var o=t.TypeOptions[n];r+=f(o,k(a,o.Type)||{})}return i.innerHTML=r,r?(i.classList.remove("hide"),e.querySelector(".fldAutoRefreshInterval").classList.remove("hide"),e.querySelector(".fldMetadataLanguage").classList.remove("hide"),e.querySelector(".fldMetadataCountry").classList.remove("hide")):(i.classList.add("hide"),e.querySelector(".fldAutoRefreshInterval").classList.add("hide"),e.querySelector(".fldMetadataLanguage").classList.add("hide"),e.querySelector(".fldMetadataCountry").classList.add("hide")),!0}function g(e,t,a){var r="",i=e.querySelector(".subtitleFetchers"),n=t.SubtitleFetchers;if(!(n=T(n,a.SubtitleFetcherOrder||[])).length)return r;r+='<h3 class="checkboxListLabel">'.concat(l.ZP.translate("LabelSubtitleDownloaders"),"</h3>"),r+='<div class="checkboxList paperList checkboxList-paperList">';for(var c=0;c<n.length;c++){var s=n[c];r+='<div class="listItem subtitleFetcherItem sortableOption" data-pluginname="'.concat(o()(s.Name),'">');var d=(a.DisabledSubtitleFetchers?!a.DisabledSubtitleFetchers.includes(s.Name):s.DefaultEnabled)?' checked="checked"':"";r+='<label class="listItemCheckboxContainer"><input type="checkbox" is="emby-checkbox" class="chkSubtitleFetcher" data-pluginname="'.concat(o()(s.Name),'" ').concat(d,"><span></span></label>"),r+='<div class="listItemBody">',r+='<h3 class="listItemBodyText">',r+=o()(s.Name),r+="</h3>",r+="</div>",c>0?r+='<button type="button" is="paper-icon-button-light" title="'.concat(l.ZP.translate("Up"),'" class="btnSortableMoveUp btnSortable" data-pluginindex="').concat(c,'"><span class="material-icons keyboard_arrow_up" aria-hidden="true"></span></button>'):n.length>1&&(r+='<button type="button" is="paper-icon-button-light" title="'.concat(l.ZP.translate("Down"),'" class="btnSortableMoveDown btnSortable" data-pluginindex="').concat(c,'"><span class="material-icons keyboard_arrow_down" aria-hidden="true"></span></button>')),r+="</div>"}r+="</div>",r+='<div class="fieldDescription">'.concat(l.ZP.translate("SubtitleDownloadersHelp"),"</div>"),i.innerHTML=r}function L(e,t){var a="",r=e.ImageFetchers;if(!(r=T(r,t.ImageFetcherOrder||[])).length)return a;a+='<div class="imageFetcher" data-type="'+e.Type+'">',a+='<div class="flex align-items-center" style="margin:1.5em 0 .5em;">',a+='<h3 class="checkboxListLabel" style="margin:0;">'+l.ZP.translate("HeaderTypeImageFetchers",l.ZP.translate("TypeOptionPlural"+e.Type))+"</h3>";var i=e.SupportedImageTypes||[];(i.length>1||1===i.length&&"Primary"!==i[0])&&(a+='<button is="emby-button" class="raised btnImageOptionsForType" type="button" style="font-size:90%;"><span>'+l.ZP.translate("HeaderFetcherSettings")+"</span></button>"),a+="</div>",a+='<div class="checkboxList paperList checkboxList-paperList">';for(var n=0;n<r.length;n++){var c=r[n];a+='<div class="listItem imageFetcherItem sortableOption" data-pluginname="'+o()(c.Name)+'">';var s=(t.ImageFetchers?t.ImageFetchers.includes(c.Name):c.DefaultEnabled)?' checked="checked"':"";a+='<label class="listItemCheckboxContainer"><input type="checkbox" is="emby-checkbox" class="chkImageFetcher" data-pluginname="'+o()(c.Name)+'" '+s+"><span></span></label>",a+='<div class="listItemBody">',a+='<h3 class="listItemBodyText">',a+=o()(c.Name),a+="</h3>",a+="</div>",n>0?a+='<button type="button" is="paper-icon-button-light" title="'+l.ZP.translate("Up")+'" class="btnSortableMoveUp btnSortable" data-pluginindex="'+n+'"><span class="material-icons keyboard_arrow_up" aria-hidden="true"></span></button>':r.length>1&&(a+='<button type="button" is="paper-icon-button-light" title="'+l.ZP.translate("Down")+'" class="btnSortableMoveDown btnSortable" data-pluginindex="'+n+'"><span class="material-icons keyboard_arrow_down" aria-hidden="true"></span></button>'),a+="</div>"}return a+="</div>",(a+='<div class="fieldDescription">'+l.ZP.translate("LabelImageFetchersHelp")+"</div>")+"</div>"}function x(e,t,a){for(var r="",i=e.querySelector(".imageFetchers"),n=0;n<t.TypeOptions.length;n++){var o=t.TypeOptions[n];r+=L(o,k(a,o.Type)||{})}return i.innerHTML=r,r?(i.classList.remove("hide"),e.querySelector(".chkSaveLocalContainer").classList.remove("hide")):(i.classList.add("hide"),e.querySelector(".chkSaveLocalContainer").classList.add("hide")),!0}function E(e){var t=e.querySelector(".btnSortable"),a=t.querySelector(".material-icons");e.previousSibling?(t.title=l.ZP.translate("Up"),t.classList.add("btnSortableMoveUp"),t.classList.remove("btnSortableMoveDown"),a.classList.remove("keyboard_arrow_down"),a.classList.add("keyboard_arrow_up")):(t.title=l.ZP.translate("Down"),t.classList.remove("btnSortableMoveUp"),t.classList.add("btnSortableMoveDown"),a.classList.remove("keyboard_arrow_up"),a.classList.add("keyboard_arrow_down"))}function w(e){var t,n=c.ZP.parentWithClass(e.target,"btnImageOptionsForType");if(n)return t=c.ZP.parentWithClass(n,"imageFetcher").getAttribute("data-type"),void a.e(59263).then(a.bind(a,59263)).then((function(e){var a=e.default,n=k(r,t);n||(n={Type:t},r.TypeOptions.push(n));var o=k(i||{},t);(new a).show(t,n,o)}));A.call(this,e)}function A(e){var t=c.ZP.parentWithClass(e.target,"btnSortable");if(t){var a=c.ZP.parentWithClass(t,"sortableOption"),r=c.ZP.parentWithClass(a,"paperList");if(t.classList.contains("btnSortableMoveDown")){var i=a.nextSibling;i&&(a.parentNode.removeChild(a),i.parentNode.insertBefore(a,i.nextSibling))}else{var n=a.previousSibling;n&&(a.parentNode.removeChild(a),n.parentNode.insertBefore(a,n))}Array.prototype.forEach.call(r.querySelectorAll(".sortableOption"),E)}}function C(e){e.querySelector(".metadataReaders").addEventListener("click",A),e.querySelector(".subtitleFetchers").addEventListener("click",A),e.querySelector(".metadataFetchers").addEventListener("click",A),e.querySelector(".imageFetchers").addEventListener("click",w),e.querySelector("#chkEnableEmbeddedTitles").addEventListener("change",(function(t){e.querySelector(".chkEnableEmbeddedExtrasTitlesContainer").classList.toggle("hide",!t.currentTarget.checked)}))}function q(){return(q=p(u().mark((function e(t,a,n){var o;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r={TypeOptions:[]},i=null,null===n&&t.classList.add("newlibrary"),t.innerHTML=l.ZP.translateHtml(s),y(t.querySelector("#selectAutoRefreshInterval")),o=[b(t),v(t.querySelector("#selectCountry"))],Promise.all(o).then((function(){return D(t,a).then((function(){n&&I(t,n),C(t)}))}));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e,t){return"homevideos"===t||"photos"===t?e.querySelector(".chkEnablePhotosContainer").classList.remove("hide"):e.querySelector(".chkEnablePhotosContainer").classList.add("hide"),"tvshows"!==t&&"movies"!==t&&"homevideos"!==t&&"musicvideos"!==t&&"mixed"!==t?e.querySelector(".chapterSettingsSection").classList.add("hide"):e.querySelector(".chapterSettingsSection").classList.remove("hide"),"tvshows"===t?(e.querySelector(".chkAutomaticallyGroupSeriesContainer").classList.remove("hide"),e.querySelector(".fldSeasonZeroDisplayName").classList.remove("hide"),e.querySelector("#txtSeasonZeroName").setAttribute("required","required")):(e.querySelector(".chkAutomaticallyGroupSeriesContainer").classList.add("hide"),e.querySelector(".fldSeasonZeroDisplayName").classList.add("hide"),e.querySelector("#txtSeasonZeroName").removeAttribute("required")),"books"===t||"boxsets"===t||"playlists"===t||"music"===t?(e.querySelector(".chkEnableEmbeddedTitlesContainer").classList.add("hide"),e.querySelector(".chkEnableEmbeddedExtrasTitlesContainer").classList.add("hide")):(e.querySelector(".chkEnableEmbeddedTitlesContainer").classList.remove("hide"),e.querySelector("#chkEnableEmbeddedTitles").checked&&e.querySelector(".chkEnableEmbeddedExtrasTitlesContainer").classList.remove("hide")),"tvshows"===t?e.querySelector(".chkEnableEmbeddedEpisodeInfosContainer").classList.remove("hide"):e.querySelector(".chkEnableEmbeddedEpisodeInfosContainer").classList.add("hide"),"tvshows"===t||"movies"===t||"musicvideos"===t||"mixed"===t?e.querySelector(".fldAllowEmbeddedSubtitlesContainer").classList.remove("hide"):e.querySelector(".fldAllowEmbeddedSubtitlesContainer").classList.add("hide"),e.querySelector(".chkAutomaticallyAddToCollectionContainer").classList.toggle("hide","movies"!==t&&"mixed"!==t),function(e,t){var a=e.classList.contains("newlibrary");return ApiClient.getJSON(ApiClient.getUrl("Libraries/AvailableOptions",{LibraryContentType:t,IsNewLibrary:a})).then((function(t){i=t,e.availableOptions=t,function(e,t){var a="",r=e.querySelector(".metadataSavers");if(!t.length)return r.innerHTML="",r.classList.add("hide"),!1;a+='<h3 class="checkboxListLabel">'.concat(l.ZP.translate("LabelMetadataSavers"),"</h3>"),a+='<div class="checkboxList paperList checkboxList-paperList">';for(var i=0;i<t.length;i++){var n=t[i];a+='<label><input type="checkbox" data-defaultenabled="'.concat(n.DefaultEnabled,'" is="emby-checkbox" class="chkMetadataSaver" data-pluginname="').concat(o()(n.Name),'" ',!1,"><span>").concat(o()(n.Name),"</span></label>")}a+="</div>",a+='<div class="fieldDescription" style="margin-top:.25em;">'.concat(l.ZP.translate("LabelMetadataSaversHelp"),"</div>"),r.innerHTML=a,r.classList.remove("hide")}(e,t.MetadataSavers),m(e,t.MetadataReaders),S(e,t,{}),g(e,t,{}),x(e,t,{}),t.SubtitleFetchers.length?e.querySelector(".subtitleDownloadSettings").classList.remove("hide"):e.querySelector(".subtitleDownloadSettings").classList.add("hide")})).catch((function(){return Promise.resolve()}))}(e,t)}function T(e,t){return(e=e.slice(0)).sort((function(e,a){return(e=t.indexOf(e.Name))-t.indexOf(a.Name)})),e}function I(e,t){r=t,i=e.availableOptions,e.querySelector("#selectLanguage").value=t.PreferredMetadataLanguage||"",e.querySelector("#selectCountry").value=t.MetadataCountryCode||"",e.querySelector("#selectAutoRefreshInterval").value=t.AutomaticRefreshIntervalDays||"0",e.querySelector("#txtSeasonZeroName").value=t.SeasonZeroDisplayName||"Specials",e.querySelector(".chkEnablePhotos").checked=t.EnablePhotos,e.querySelector(".chkEnableRealtimeMonitor").checked=t.EnableRealtimeMonitor,e.querySelector(".chkExtractChaptersDuringLibraryScan").checked=t.ExtractChapterImagesDuringLibraryScan,e.querySelector(".chkExtractChapterImages").checked=t.EnableChapterImageExtraction,e.querySelector("#chkSaveLocal").checked=t.SaveLocalMetadata,e.querySelector(".chkAutomaticallyGroupSeries").checked=t.EnableAutomaticSeriesGrouping,e.querySelector("#chkEnableEmbeddedTitles").checked=t.EnableEmbeddedTitles,e.querySelector(".chkEnableEmbeddedExtrasTitlesContainer").classList.toggle("hide",!t.EnableEmbeddedTitles),e.querySelector("#chkEnableEmbeddedExtrasTitles").checked=t.EnableEmbeddedExtrasTitles,e.querySelector("#chkEnableEmbeddedEpisodeInfos").value=t.EnableEmbeddedEpisodeInfos,e.querySelector("#selectAllowEmbeddedSubtitles").value=t.AllowEmbeddedSubtitles,e.querySelector("#chkSkipIfGraphicalSubsPresent").checked=t.SkipSubtitlesIfEmbeddedSubtitlesPresent,e.querySelector("#chkSaveSubtitlesLocally").checked=t.SaveSubtitlesWithMedia,e.querySelector("#chkSkipIfAudioTrackPresent").checked=t.SkipSubtitlesIfAudioTrackMatches,e.querySelector("#chkRequirePerfectMatch").checked=t.RequirePerfectSubtitleMatch,e.querySelector("#chkAutomaticallyAddToCollection").checked=t.AutomaticallyAddToCollection,Array.prototype.forEach.call(e.querySelectorAll(".chkMetadataSaver"),(function(e){e.checked=t.MetadataSavers?t.MetadataSavers.includes(e.getAttribute("data-pluginname")):"true"===e.getAttribute("data-defaultenabled")})),Array.prototype.forEach.call(e.querySelectorAll(".chkSubtitleLanguage"),(function(e){e.checked=!!t.SubtitleDownloadLanguages&&t.SubtitleDownloadLanguages.includes(e.getAttribute("data-lang"))})),m(e,T(e.availableOptions.MetadataReaders,t.LocalMetadataReaderOrder||[])),S(e,e.availableOptions,t),x(e,e.availableOptions,t),g(e,e.availableOptions,t)}var M={embed:function(e,t,a){return q.apply(this,arguments)},setContentType:D,getLibraryOptions:function(e){var t={EnableArchiveMediaFiles:!1,EnablePhotos:e.querySelector(".chkEnablePhotos").checked,EnableRealtimeMonitor:e.querySelector(".chkEnableRealtimeMonitor").checked,ExtractChapterImagesDuringLibraryScan:e.querySelector(".chkExtractChaptersDuringLibraryScan").checked,EnableChapterImageExtraction:e.querySelector(".chkExtractChapterImages").checked,EnableInternetProviders:!0,SaveLocalMetadata:e.querySelector("#chkSaveLocal").checked,EnableAutomaticSeriesGrouping:e.querySelector(".chkAutomaticallyGroupSeries").checked,PreferredMetadataLanguage:e.querySelector("#selectLanguage").value,MetadataCountryCode:e.querySelector("#selectCountry").value,SeasonZeroDisplayName:e.querySelector("#txtSeasonZeroName").value,AutomaticRefreshIntervalDays:parseInt(e.querySelector("#selectAutoRefreshInterval").value,10),EnableEmbeddedTitles:e.querySelector("#chkEnableEmbeddedTitles").checked,EnableEmbeddedExtrasTitles:e.querySelector("#chkEnableEmbeddedExtrasTitles").checked,EnableEmbeddedEpisodeInfos:e.querySelector("#chkEnableEmbeddedEpisodeInfos").checked,AllowEmbeddedSubtitles:e.querySelector("#selectAllowEmbeddedSubtitles").value,SkipSubtitlesIfEmbeddedSubtitlesPresent:e.querySelector("#chkSkipIfGraphicalSubsPresent").checked,SkipSubtitlesIfAudioTrackMatches:e.querySelector("#chkSkipIfAudioTrackPresent").checked,SaveSubtitlesWithMedia:e.querySelector("#chkSaveSubtitlesLocally").checked,RequirePerfectSubtitleMatch:e.querySelector("#chkRequirePerfectMatch").checked,AutomaticallyAddToCollection:e.querySelector("#chkAutomaticallyAddToCollection").checked,MetadataSavers:Array.prototype.map.call(Array.prototype.filter.call(e.querySelectorAll(".chkMetadataSaver"),(function(e){return e.checked})),(function(e){return e.getAttribute("data-pluginname")})),TypeOptions:[]};return t.LocalMetadataReaderOrder=Array.prototype.map.call(e.querySelectorAll(".localReaderOption"),(function(e){return e.getAttribute("data-pluginname")})),t.SubtitleDownloadLanguages=Array.prototype.map.call(Array.prototype.filter.call(e.querySelectorAll(".chkSubtitleLanguage"),(function(e){return e.checked})),(function(e){return e.getAttribute("data-lang")})),function(e,t){t.DisabledSubtitleFetchers=Array.prototype.map.call(Array.prototype.filter.call(e.querySelectorAll(".chkSubtitleFetcher"),(function(e){return!e.checked})),(function(e){return e.getAttribute("data-pluginname")})),t.SubtitleFetcherOrder=Array.prototype.map.call(e.querySelectorAll(".subtitleFetcherItem"),(function(e){return e.getAttribute("data-pluginname")}))}(e,t),function(e,t){for(var a=e.querySelectorAll(".metadataFetcher"),r=0;r<a.length;r++){var i=a[r],n=i.getAttribute("data-type"),o=k(t,n);o||(o={Type:n},t.TypeOptions.push(o)),o.MetadataFetchers=Array.prototype.map.call(Array.prototype.filter.call(i.querySelectorAll(".chkMetadataFetcher"),(function(e){return e.checked})),(function(e){return e.getAttribute("data-pluginname")})),o.MetadataFetcherOrder=Array.prototype.map.call(i.querySelectorAll(".metadataFetcherItem"),(function(e){return e.getAttribute("data-pluginname")}))}}(e,t),function(e,t){for(var a=e.querySelectorAll(".imageFetcher"),r=0;r<a.length;r++){var i=a[r],n=i.getAttribute("data-type"),o=k(t,n);o||(o={Type:n},t.TypeOptions.push(o)),o.ImageFetchers=Array.prototype.map.call(Array.prototype.filter.call(i.querySelectorAll(".chkImageFetcher"),(function(e){return e.checked})),(function(e){return e.getAttribute("data-pluginname")})),o.ImageFetcherOrder=Array.prototype.map.call(i.querySelectorAll(".imageFetcherItem"),(function(e){return e.getAttribute("data-pluginname")}))}}(e,t),function(e){for(var t=(r||{}).TypeOptions||[],a=0;a<t.length;a++){var i=t[a],n=k(e,i.Type);n||(n={Type:i.Type},e.TypeOptions.push(n)),i.ImageOptions&&(n.ImageOptions=i.ImageOptions)}}(t),t},setLibraryOptions:I}},27127:function(e,t,a){a(67752);var r=Object.create(HTMLInputElement.prototype);function i(e){if(13===e.keyCode)return e.preventDefault(),this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),!1}r.attachedCallback=function(){if("true"!==this.getAttribute("data-embytoggle")){this.setAttribute("data-embytoggle","true"),this.classList.add("mdl-switch__input");var e=this.parentNode;e.classList.add("mdl-switch"),e.classList.add("mdl-js-switch");var t=e.querySelector("span");e.insertAdjacentHTML("beforeend",'<div class="mdl-switch__trackContainer"><div class="mdl-switch__track"></div><div class="mdl-switch__thumb"><span class="mdl-switch__focus-helper"></span></div></div>'),t.classList.add("toggleButtonLabel"),t.classList.add("mdl-switch__label"),this.addEventListener("keydown",i)}},document.registerElement("emby-toggle",{prototype:r,extends:"input"})}}]);