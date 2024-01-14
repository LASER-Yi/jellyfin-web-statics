"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[36929,54687],{36929:function(e,t,n){n.r(t),n(13227),n(81414),n(37666),n(14011),n(11431),n(47134),n(26031),n(95822),n(56187),n(38690),n(11908),n(33096),n(89228);var a=n(72365),s=n(93355),i=n(84597),o=n(30325),r=n(94994),l=(n(62033),n(38228),n(61414),n(12291),n(15856),n(18613)),c=n(56663);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,f(a.key),a)}}function f(e){var t=function(e,t){if("object"!=d(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,"string");if("object"!=d(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==d(t)?t:String(t)}function v(e,t,a){Promise.resolve().then(n.bind(n,54517)).then((function(n){var s=a?"on":"off";n.centerFocus[s](e,t)}))}function h(e){i.ZP.show();var t=a.ZP.parentWithClass(e.target,"dialog"),n=this.options,o=l.Z.getApiClient(n.serverId),d="all"===t.querySelector("#selectMetadataRefreshMode").value,u="scan"===t.querySelector("#selectMetadataRefreshMode").value?"Default":"FullRefresh",f="FullRefresh"===u&&t.querySelector(".chkReplaceImages").checked;return n.itemIds.forEach((function(e){o.refreshItem(e,{Recursive:!0,ImageRefreshMode:u,MetadataRefreshMode:u,ReplaceAllImages:f,ReplaceAllMetadata:d})})),s.default.close(t),(0,c.Z)(r.ZP.translate("RefreshQueued")),i.ZP.hide(),e.preventDefault(),!1}var p=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=t}var t,n;return t=e,(n=[{key:"show",value:function(){var e={removeOnClose:!0,scrollY:!1};o.Z.tv?e.size="fullscreen":e.size="small";var t=s.default.createDialog(e);t.classList.add("formDialog");var n="",a=r.ZP.translate("RefreshMetadata");return n+='<div class="formDialogHeader">',n+='<button is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1" title="'.concat(r.ZP.translate("ButtonBack"),'"><span class="material-icons arrow_back" aria-hidden="true"></span></button>'),n+='<h3 class="formDialogHeaderTitle">',n+=a,n+="</h3>",n+="</div>",n+=function(){var e="";return e+='<div class="formDialogContent smoothScrollY" style="padding-top:2em;">',e+='<div class="dialogContentInner dialog-content-centered">',e+='<form style="margin:auto;">',e+='<div class="fldSelectPlaylist selectContainer">',e+='<select is="emby-select" id="selectMetadataRefreshMode" label="'+r.ZP.translate("LabelRefreshMode")+'">',e+='<option value="scan" selected>'+r.ZP.translate("ScanForNewAndUpdatedFiles")+"</option>",e+='<option value="missing">'+r.ZP.translate("SearchForMissingMetadata")+"</option>",e+='<option value="all">'+r.ZP.translate("ReplaceAllMetadata")+"</option>",e+="</select>",e+="</div>",e+='<label class="checkboxContainer hide fldReplaceExistingImages">',e+='<input type="checkbox" is="emby-checkbox" class="chkReplaceImages" />',e+="<span>"+r.ZP.translate("ReplaceExistingImages")+"</span>",e+="</label>",e+='<div class="fieldDescription">',e+=r.ZP.translate("RefreshDialogHelp"),e+="</div>",e+='<input type="hidden" class="fldSelectedItemIds" />',e+="<br />",e+='<div class="formDialogFooter">',e+='<button is="emby-button" type="submit" class="raised btnSubmit block formDialogFooterItem button-submit">'+r.ZP.translate("Refresh")+"</button>",e+="</div>",e+="</form>",(e+="</div>")+"</div>"}(),t.innerHTML=n,t.querySelector("form").addEventListener("submit",h.bind(this)),t.querySelector("#selectMetadataRefreshMode").addEventListener("change",(function(){"scan"===this.value?t.querySelector(".fldReplaceExistingImages").classList.add("hide"):t.querySelector(".fldReplaceExistingImages").classList.remove("hide")})),this.options.mode&&(t.querySelector("#selectMetadataRefreshMode").value=this.options.mode),t.querySelector("#selectMetadataRefreshMode").dispatchEvent(new CustomEvent("change")),t.querySelector(".btnCancel").addEventListener("click",(function(){s.default.close(t)})),o.Z.tv&&v(t.querySelector(".formDialogContent"),!1,!0),new Promise((function(e){o.Z.tv&&v(t.querySelector(".formDialogContent"),!1,!1),t.addEventListener("close",e),s.default.open(t)}))}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.default=p},15856:function(e,t,n){var a=n(30325),s=n(57366),i=n(12801),o=(n(67752),Object.create(HTMLSelectElement.prototype));function r(){return!(!s.Z.edgeUwp&&!s.Z.xboxOne&&(s.Z.tizen||s.Z.orsay||s.Z.web0s||!s.Z.tv&&a.Z.tv))}function l(e){var t=c(e),n=t?t.textContent||t.innerText:null;i.default.show({items:e.options,positionTo:e,title:n}).then((function(t){!function(e,t){e.value=t}(e,t),function(e){var t=document.createEvent("HTMLEvents");t.initEvent("change",!1,!0),e.dispatchEvent(t)}(e)}))}function c(e){for(var t=e.previousSibling;t&&"LABEL"!==t.tagName;)t=t.previousSibling;return t}function d(){var e=c(this);e&&e.classList.add("selectLabelFocused")}function u(){var e=c(this);e&&e.classList.remove("selectLabelFocused")}function f(e){e.button||r()||(e.preventDefault(),l(this))}function v(e){switch(e.keyCode){case 13:return void(r()||(e.preventDefault(),l(this)));case 37:case 38:case 39:case 40:return void(a.Z.tv&&e.preventDefault())}}var h=0;o.createdCallback=function(){this.id||(this.id="embyselect"+h,h++),this.classList.add("emby-select-withcolor"),a.Z.tv&&this.classList.add("emby-select-focusscale"),this.addEventListener("mousedown",f),this.addEventListener("keydown",v),this.addEventListener("focus",d),this.addEventListener("blur",u)},o.attachedCallback=function(){var e;if(!this.classList.contains("emby-select")){this.classList.add("emby-select");var t,n=this.ownerDocument.createElement("label");n.innerText=this.getAttribute("label")||"",n.classList.add("selectLabel"),n.htmlFor=this.id,null===(e=this.parentNode)||void 0===e||e.insertBefore(n,this),this.classList.contains("emby-select-withcolor")&&(null===(t=this.parentNode)||void 0===t||t.insertAdjacentHTML("beforeend",'<div class="selectArrowContainer"><div style="visibility:hidden;display:none;">0</div><span class="selectArrow material-icons keyboard_arrow_down" aria-hidden="true"></span></div>'))}},o.setLabel=function(e){var t;(null===(t=this.parentNode)||void 0===t?void 0:t.querySelector("label")).innerText=e},document.registerElement("emby-select",{prototype:o,extends:"select"})}}]);