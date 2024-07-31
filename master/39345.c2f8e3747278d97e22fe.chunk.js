"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[39345],{39345:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}}),n(44962),n(14382),n(17731),n(86584),n(78557),n(90076),n(83994),n(82367);var a,i,s=n(22696),l=n.n(s),r=n(22622),o=n(79754),c=n(46782),d=n(9482),u=n(82885),h=n(56869),v=n(9164),b=n(47629),m=(n(63001),n(15453),n(10353),n(86191)),p=n(50764),f=n(40532);function y(e,t){var n="Items/"+a.Id+"/RemoteSearch/Subtitles/"+t,s=m.A.getApiClient(a.ServerId);s.ajax({type:"POST",url:s.getUrl(n)}).then((function(){i=!0,(0,p.A)(d.Ay.translate("MessageDownloadQueued")),v.A.autoFocus(e)}))}function g(e,t,n){function i(t){a=t,function(e,t){var n=(t.MediaStreams||[]).filter((function(e){return"Subtitle"===e.Type})),a="";n.length&&(a+="<h2>"+d.Ay.translate("MySubtitles")+"</h2>",a+="<div>",a+=n.map((function(e){var t="",n=c.A.tv?"button":"div",a=c.A.tv&&e.Path?"listItem listItem-border btnDelete":"listItem listItem-border";return c.A.tv&&(a+=" listItem-focusscale listItem-button"),t+="<"+n+' class="'+(a+=" listItem-noborder")+'" data-index="'+e.Index+'">',t+='<span class="listItemIcon material-icons closed_caption" aria-hidden="true"></span>',t+='<div class="listItemBody two-line">',t+="<div>",t+=l()(e.DisplayTitle||""),t+="</div>",e.Path&&(t+='<div class="secondary listItemBodyText">'+l()(e.Path)+"</div>"),t+="</a>",t+="</div>",!c.A.tv&&e.Path&&(t+='<button is="paper-icon-button-light" data-index="'+e.Index+'" title="'+d.Ay.translate("Delete")+'" class="btnDelete listItemButton"><span class="material-icons delete" aria-hidden="true"></span></button>'),t+"</"+n+">"})).join(""),a+="</div>");var i=e.querySelector(".subtitleList");n.length?i.classList.remove("hide"):i.classList.add("hide"),i.innerHTML=a}(e,t);var n=t.Path||"",i=Math.max(n.lastIndexOf("/"),n.lastIndexOf("\\"));i>-1&&(n=n.substring(i+1)),n?(e.querySelector(".pathValue").innerText=n,e.querySelector(".originalFile").classList.remove("hide")):(e.querySelector(".pathValue").innerHTML="",e.querySelector(".originalFile").classList.add("hide")),h.Ay.hide()}e.querySelector(".noSearchResults").classList.add("hide"),"string"==typeof n?t.getItem(t.getCurrentUserId(),n).then(i):i(n)}function A(e){var t=this,n=t.querySelector("#selectLanguage",t).value;return function(e,t){u.set("subtitleeditor-language",t),h.Ay.show();var n=m.A.getApiClient(a.ServerId),i=n.getUrl("Items/"+a.Id+"/RemoteSearch/Subtitles/"+t);n.getJSON(i).then((function(t){!function(e,t){var n="",a="";if(!t.length)return e.querySelector(".noSearchResults").classList.remove("hide"),e.querySelector(".subtitleResults").innerHTML="",void h.Ay.hide();e.querySelector(".noSearchResults").classList.add("hide");for(var i=0,s=t.length;i<s;i++){var r=t[i],o=r.ProviderName;o!==n&&(i>0&&(a+="</div>"),a+="<h2>"+o+"</h2>",a+="<div>",n=o);var u=c.A.tv?"button":"div",v=c.A.tv?"listItem listItem-border btnOptions":"listItem listItem-border";c.A.tv&&(v+=" listItem-focusscale listItem-button"),a+="<"+u+' class="'+v+'" data-subid="'+r.Id+'">',a+='<span class="listItemIcon material-icons closed_caption" aria-hidden="true"></span>';var b=r.IsHashMatch||r.AiTranslated||r.MachineTranslated||r.Forced||r.HearingImpaired;if(a+='<div class="listItemBody '+(r.Comment||b?"three-line":"two-line")+'">',a+="<div>"+l()(r.Name)+"</div>",a+='<div class="secondary listItemBodyText">',r.Format&&(a+='<span style="margin-right:1em;">'+d.Ay.translate("FormatValue",r.Format)+"</span>"),null!=r.DownloadCount&&(a+='<span style="margin-right:1em;">'+d.Ay.translate("DownloadsValue",r.DownloadCount)+"</span>"),r.FrameRate&&(a+="<span>"+d.Ay.translate("Framerate")+": "+r.FrameRate+"</span>"),a+="</div>",r.Comment&&(a+='<div class="secondary listItemBodyText" style="white-space:pre-line;">'+l()(r.Comment)+"</div>"),b){a+='<div class="secondary listItemBodyText">';var m='<span class="inline-flex align-items-center justify-content-center subtitleFeaturePillow">';r.IsHashMatch&&(a+=m+d.Ay.translate("PerfectMatch")+"</span>"),r.AiTranslated&&(a+=m+d.Ay.translate("AiTranslated")+"</span>"),r.MachineTranslated&&(a+=m+d.Ay.translate("MachineTranslated")+"</span>"),r.Forced&&(a+=m+d.Ay.translate("ForeignPartsOnly")+"</span>"),r.HearingImpaired&&(a+=m+d.Ay.translate("HearingImpairedShort")+"</span>"),a+="</div>"}a+="</div>",c.A.tv||(a+='<button type="button" is="paper-icon-button-light" data-subid="'+r.Id+'" class="btnDownload listItemButton"><span class="material-icons file_download" aria-hidden="true"></span></button>'),a+="</"+u+">"}t.length&&(a+="</div>"),e.querySelector(".subtitleResults").innerHTML=a,h.Ay.hide()}(e,t)}))}(b.Ay.parentWithClass(t,"formDialogContent"),n),e.preventDefault(),!1}function S(e){var t=b.Ay.parentWithClass(e.target,"btnDelete");if(t){var n=t.getAttribute("data-index");!function(e,t){var n=d.Ay.translate("MessageAreYouSureDeleteSubtitles");(0,f.A)({title:d.Ay.translate("ConfirmDeletion"),text:n,confirmText:d.Ay.translate("Delete"),primary:"delete"}).then((function(){h.Ay.show();var n=a.Id,s="Videos/"+n+"/Subtitles/"+t,l=m.A.getApiClient(a.ServerId);l.ajax({type:"DELETE",url:l.getUrl(s)}).then((function(){i=!0,g(e,l,n)}))}))}(b.Ay.parentWithClass(t,"subtitleEditorDialog"),n)}}function L(e){var t,a=b.Ay.parentWithClass(e.target,"btnOptions");a&&(t=a.getAttribute("data-subid"),function(e,t,a){var i=[];i.push({name:d.Ay.translate("Download"),id:"download"}),Promise.resolve().then(n.bind(n,79617)).then((function(n){n.show({items:i,positionTo:e}).then((function(e){"download"===e&&y(t,a)}))}))}(a,b.Ay.parentWithClass(a,"subtitleEditorDialog"),t));var i=b.Ay.parentWithClass(e.target,"btnDownload");i&&(t=i.getAttribute("data-subid"),y(b.Ay.parentWithClass(i,"subtitleEditorDialog"),t))}function I(e,t,a){Promise.resolve().then(n.bind(n,46345)).then((function(n){var i=n.default,s=a?"on":"off";i.centerFocus[s](e,t)}))}function C(e){var t=b.Ay.parentWithClass(e.target,"subtitleEditorDialog"),s=t.querySelector("#selectLanguage"),l=m.A.getApiClient(a.ServerId);Promise.all([n.e(45642),n.e(61910)]).then(n.bind(n,61910)).then((function(e){e.default.show({languages:{list:s.innerHTML,value:s.value},itemId:a.Id,serverId:a.ServerId}).then((function(e){e&&(i=!0,g(t,l,a.Id))}))}))}var w={show:function(e,t){return h.Ay.show(),function(e,t){i=!1;var n=m.A.getApiClient(t);return n.getItem(n.getCurrentUserId(),e).then((function(e){var t={removeOnClose:!0,scrollY:!1};c.A.tv?t.size="fullscreen":t.size="small";var a=o.default.createDialog(t);a.classList.add("formDialog"),a.classList.add("subtitleEditorDialog"),a.innerHTML=d.Ay.translateHtml('<div class="formDialogHeader"> <button is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1" title="${ButtonBack}"><span class="material-icons arrow_back" aria-hidden="true"></span></button> <h3 class="formDialogHeaderTitle">${Subtitles}</h3> <a is="emby-linkbutton" rel="noopener noreferrer" data-autohide="true" class="button-link btnHelp flex align-items-center" href="https://jellyfin.org/docs/general/server/media/external-files" target="_blank" style="margin-left:auto;margin-right:.5em;padding:.25em" title="${Help}"><span class="material-icons info" aria-hidden="true"></span><span style="margin-left:.25em">${Help}</span></a> </div> <div class="formDialogContent smoothScrollY"> <div class="dialogContentInner dialog-content-centered"> <div class="subtitleList" style="margin-bottom:2em"></div> <h2>${SearchForSubtitles}</h2> <p style="margin:1.5em 0" class="originalFile"><span class="originalSubtitleFileLabel secondaryText"></span><span class="pathValue"></span></p> <form class="subtitleSearchForm" style="max-width:none"> <div class="flex align-items-center"> <div class="selectContainer flex-grow" style="margin-bottom:0"> <select is="emby-select" id="selectLanguage" required="required" label="${LabelLanguage}" autofocus></select> </div> <button type="submit" is="paper-icon-button-light" title="${Search}" class="btnSearchSubtitles flex-shrink-zero emby-select-iconbutton"><span class="material-icons search" aria-hidden="true"></span></button> <button type="button" is="paper-icon-button-light" title="${Upload}" class="btnOpenUploadMenu flex-shrink-zero emby-select-iconbutton"><span class="material-icons add" aria-hidden="true"></span></button> </div> <button is="emby-button" type="submit" class="raised btnSubmit block button-submit">${Search}</button> </form> <br/> <div class="subtitleResults"></div> <div class="noSearchResults hide"> ${NoSubtitleSearchResultsFound} </div> </div> </div> ',"core"),a.querySelector(".originalSubtitleFileLabel").innerHTML=d.Ay.translate("File"),a.querySelector(".subtitleSearchForm").addEventListener("submit",A),a.querySelector(".btnOpenUploadMenu").addEventListener("click",C);var s=a.querySelector(".btnSubmit");c.A.tv?(I(a.querySelector(".formDialogContent"),!1,!0),a.querySelector(".btnSearchSubtitles").classList.add("hide")):s.classList.add("hide"),!c.A.tv&&r.g.supports("externallinks")||a.querySelector(".btnHelp").remove();var l=a.querySelector(".formDialogContent");return a.querySelector(".subtitleList").addEventListener("click",S),a.querySelector(".subtitleResults").addEventListener("click",L),n.getCultures().then((function(e){!function(e,t,n){var a=e.querySelector("#selectLanguage");a.innerHTML=n.map((function(e){return'<option value="'+e.ThreeLetterISOLanguageName+'">'+e.DisplayName+"</option>"}));var i=u.get("subtitleeditor-language");i?a.value=i:t.getCurrentUser().then((function(e){var t=e.Configuration.SubtitleLanguagePreference;t&&(a.value=t)}))}(l,n,e)})),a.querySelector(".btnCancel").addEventListener("click",(function(){o.default.close(a)})),new Promise((function(t,s){a.addEventListener("close",(function(){c.A.tv&&I(a.querySelector(".formDialogContent"),!1,!1),i?t():s()})),o.default.open(a),g(l,n,e)}))}))}(e,t)}}},63001:function(e,t,n){var a=n(46782),i=n(34789),s=n(79617),l=(n(69177),Object.create(HTMLSelectElement.prototype));function r(){return!(!i.A.edgeUwp&&!i.A.xboxOne&&(i.A.tizen||i.A.orsay||i.A.web0s||!i.A.tv&&a.A.tv))}function o(e){var t=c(e),n=t?t.textContent||t.innerText:null;s.default.show({items:e.options,positionTo:e,title:n}).then((function(t){!function(e,t){e.value=t}(e,t),function(e){var t=new Event("change",{bubbles:!1,cancelable:!0});e.dispatchEvent(t)}(e)}))}function c(e){for(var t=e.previousSibling;t&&"LABEL"!==t.tagName;)t=t.previousSibling;return t}function d(){var e=c(this);e&&e.classList.add("selectLabelFocused")}function u(){var e=c(this);e&&e.classList.remove("selectLabelFocused")}function h(e){e.button||r()||(e.preventDefault(),o(this))}function v(e){switch(e.keyCode){case 13:return void(r()||(e.preventDefault(),o(this)));case 37:case 38:case 39:case 40:return void(a.A.tv&&e.preventDefault())}}var b=0;l.createdCallback=function(){this.id||(this.id="embyselect"+b,b++),this.classList.add("emby-select-withcolor"),a.A.tv&&this.classList.add("emby-select-focusscale"),this.addEventListener("mousedown",h),this.addEventListener("keydown",v),this.addEventListener("focus",d),this.addEventListener("blur",u)},l.attachedCallback=function(){var e;if(!this.classList.contains("emby-select")){this.classList.add("emby-select");var t,n=this.ownerDocument.createElement("label");n.innerText=this.getAttribute("label")||"",n.classList.add("selectLabel"),n.htmlFor=this.id,null===(e=this.parentNode)||void 0===e||e.insertBefore(n,this),this.classList.contains("emby-select-withcolor")&&(null===(t=this.parentNode)||void 0===t||t.insertAdjacentHTML("beforeend",'<div class="selectArrowContainer"><div style="visibility:hidden;display:none;">0</div><span class="selectArrow material-icons keyboard_arrow_down" aria-hidden="true"></span></div>'))}},l.setLabel=function(e){var t;(null===(t=this.parentNode)||void 0===t?void 0:t.querySelector("label")).innerText=e},document.registerElement("emby-select",{prototype:l,extends:"select"})}}]);