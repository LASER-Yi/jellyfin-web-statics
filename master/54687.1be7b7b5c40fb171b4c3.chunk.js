"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[54687,78691],{36929:function(e,t,a){a.r(t),a(13227),a(81414),a(37666),a(14011),a(11431),a(47134),a(26031),a(95822),a(56187),a(38690),a(11908),a(33096),a(89228);var n=a(72365),s=a(93355),i=a(84597),o=a(30325),r=a(94994),l=(a(62033),a(38228),a(61414),a(12291),a(15856),a(18613)),c=a(56663);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function u(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,f(n.key),n)}}function f(e){var t=function(e,t){if("object"!=d(e)||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,"string");if("object"!=d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==d(t)?t:String(t)}function v(e,t,n){Promise.resolve().then(a.bind(a,35545)).then((function(a){var s=n?"on":"off";a.centerFocus[s](e,t)}))}function h(e){i.ZP.show();var t=n.ZP.parentWithClass(e.target,"dialog"),a=this.options,o=l.Z.getApiClient(a.serverId),d="all"===t.querySelector("#selectMetadataRefreshMode").value,u="scan"===t.querySelector("#selectMetadataRefreshMode").value?"Default":"FullRefresh",f="FullRefresh"===u&&t.querySelector(".chkReplaceImages").checked;return a.itemIds.forEach((function(e){o.refreshItem(e,{Recursive:!0,ImageRefreshMode:u,MetadataRefreshMode:u,ReplaceAllImages:f,ReplaceAllMetadata:d})})),s.default.close(t),(0,c.Z)(r.ZP.translate("RefreshQueued")),i.ZP.hide(),e.preventDefault(),!1}var b=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=t}var t,a;return t=e,(a=[{key:"show",value:function(){var e={removeOnClose:!0,scrollY:!1};o.Z.tv?e.size="fullscreen":e.size="small";var t=s.default.createDialog(e);t.classList.add("formDialog");var a="",n=r.ZP.translate("RefreshMetadata");return a+='<div class="formDialogHeader">',a+='<button is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1" title="'.concat(r.ZP.translate("ButtonBack"),'"><span class="material-icons arrow_back" aria-hidden="true"></span></button>'),a+='<h3 class="formDialogHeaderTitle">',a+=n,a+="</h3>",a+="</div>",a+=function(){var e="";return e+='<div class="formDialogContent smoothScrollY" style="padding-top:2em;">',e+='<div class="dialogContentInner dialog-content-centered">',e+='<form style="margin:auto;">',e+='<div class="fldSelectPlaylist selectContainer">',e+='<select is="emby-select" id="selectMetadataRefreshMode" label="'+r.ZP.translate("LabelRefreshMode")+'">',e+='<option value="scan" selected>'+r.ZP.translate("ScanForNewAndUpdatedFiles")+"</option>",e+='<option value="missing">'+r.ZP.translate("SearchForMissingMetadata")+"</option>",e+='<option value="all">'+r.ZP.translate("ReplaceAllMetadata")+"</option>",e+="</select>",e+="</div>",e+='<label class="checkboxContainer hide fldReplaceExistingImages">',e+='<input type="checkbox" is="emby-checkbox" class="chkReplaceImages" />',e+="<span>"+r.ZP.translate("ReplaceExistingImages")+"</span>",e+="</label>",e+='<div class="fieldDescription">',e+=r.ZP.translate("RefreshDialogHelp"),e+="</div>",e+='<input type="hidden" class="fldSelectedItemIds" />',e+="<br />",e+='<div class="formDialogFooter">',e+='<button is="emby-button" type="submit" class="raised btnSubmit block formDialogFooterItem button-submit">'+r.ZP.translate("Refresh")+"</button>",e+="</div>",e+="</form>",(e+="</div>")+"</div>"}(),t.innerHTML=a,t.querySelector("form").addEventListener("submit",h.bind(this)),t.querySelector("#selectMetadataRefreshMode").addEventListener("change",(function(){"scan"===this.value?t.querySelector(".fldReplaceExistingImages").classList.add("hide"):t.querySelector(".fldReplaceExistingImages").classList.remove("hide")})),this.options.mode&&(t.querySelector("#selectMetadataRefreshMode").value=this.options.mode),t.querySelector("#selectMetadataRefreshMode").dispatchEvent(new CustomEvent("change")),t.querySelector(".btnCancel").addEventListener("click",(function(){s.default.close(t)})),o.Z.tv&&v(t.querySelector(".formDialogContent"),!1,!0),new Promise((function(e){o.Z.tv&&v(t.querySelector(".formDialogContent"),!1,!1),t.addEventListener("close",e),s.default.open(t)}))}}])&&u(t.prototype,a),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.default=b},15856:function(e,t,a){var n=a(30325),s=a(57366),i=a(80454),o=(a(67752),Object.create(HTMLSelectElement.prototype));function r(){return!(!s.Z.edgeUwp&&!s.Z.xboxOne&&(s.Z.tizen||s.Z.orsay||s.Z.web0s||!s.Z.tv&&n.Z.tv))}function l(e){var t=c(e),a=t?t.textContent||t.innerText:null;i.default.show({items:e.options,positionTo:e,title:a}).then((function(t){!function(e,t){e.value=t}(e,t),function(e){var t=new Event("change",{bubbles:!1,cancelable:!0});e.dispatchEvent(t)}(e)}))}function c(e){for(var t=e.previousSibling;t&&"LABEL"!==t.tagName;)t=t.previousSibling;return t}function d(){var e=c(this);e&&e.classList.add("selectLabelFocused")}function u(){var e=c(this);e&&e.classList.remove("selectLabelFocused")}function f(e){e.button||r()||(e.preventDefault(),l(this))}function v(e){switch(e.keyCode){case 13:return void(r()||(e.preventDefault(),l(this)));case 37:case 38:case 39:case 40:return void(n.Z.tv&&e.preventDefault())}}var h=0;o.createdCallback=function(){this.id||(this.id="embyselect"+h,h++),this.classList.add("emby-select-withcolor"),n.Z.tv&&this.classList.add("emby-select-focusscale"),this.addEventListener("mousedown",f),this.addEventListener("keydown",v),this.addEventListener("focus",d),this.addEventListener("blur",u)},o.attachedCallback=function(){var e;if(!this.classList.contains("emby-select")){this.classList.add("emby-select");var t,a=this.ownerDocument.createElement("label");a.innerText=this.getAttribute("label")||"",a.classList.add("selectLabel"),a.htmlFor=this.id,null===(e=this.parentNode)||void 0===e||e.insertBefore(a,this),this.classList.contains("emby-select-withcolor")&&(null===(t=this.parentNode)||void 0===t||t.insertAdjacentHTML("beforeend",'<div class="selectArrowContainer"><div style="visibility:hidden;display:none;">0</div><span class="selectArrow material-icons keyboard_arrow_down" aria-hidden="true"></span></div>'))}},o.setLabel=function(e){var t;(null===(t=this.parentNode)||void 0===t?void 0:t.querySelector("label")).innerText=e},document.registerElement("emby-select",{prototype:o,extends:"select"})}}]);