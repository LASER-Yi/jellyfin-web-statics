"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[54687],{36929:function(e,t,a){a.r(t),a(13227),a(81414),a(37666),a(14011),a(11431),a(47134),a(26031),a(95822),a(56187),a(38690),a(11908),a(33096),a(89228);var o=a(72365),n=a(93355),r=a(28540),l=a(30325),s=a(94994),i=(a(62033),a(38228),a(61414),a(12291),a(15856),a(18613)),c=a(56663);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function d(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,n=function(e,t){if("object"!==u(e)||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var o=a.call(e,"string");if("object"!==u(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===u(n)?n:String(n)),o)}var n}function f(e,t,o){Promise.resolve().then(a.bind(a,54517)).then((function(a){var n=o?"on":"off";a.centerFocus[n](e,t)}))}function p(e){r.ZP.show();var t=o.ZP.parentWithClass(e.target,"dialog"),a=this.options,l=i.Z.getApiClient(a.serverId),u="all"===t.querySelector("#selectMetadataRefreshMode").value,d="scan"===t.querySelector("#selectMetadataRefreshMode").value?"Default":"FullRefresh",f="FullRefresh"===d&&t.querySelector(".chkReplaceImages").checked;return a.itemIds.forEach((function(e){l.refreshItem(e,{Recursive:!0,ImageRefreshMode:d,MetadataRefreshMode:d,ReplaceAllImages:f,ReplaceAllMetadata:u})})),n.default.close(t),(0,c.Z)(s.ZP.translate("RefreshQueued")),r.ZP.hide(),e.preventDefault(),!1}var m=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=t}var t,a;return t=e,(a=[{key:"show",value:function(){var e={removeOnClose:!0,scrollY:!1};l.Z.tv?e.size="fullscreen":e.size="small";var t=n.default.createDialog(e);t.classList.add("formDialog");var a="",o=s.ZP.translate("RefreshMetadata");return a+='<div class="formDialogHeader">',a+='<button is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1" title="'.concat(s.ZP.translate("ButtonBack"),'"><span class="material-icons arrow_back" aria-hidden="true"></span></button>'),a+='<h3 class="formDialogHeaderTitle">',a+=o,a+="</h3>",a+="</div>",a+=function(){var e="";return e+='<div class="formDialogContent smoothScrollY" style="padding-top:2em;">',e+='<div class="dialogContentInner dialog-content-centered">',e+='<form style="margin:auto;">',e+='<div class="fldSelectPlaylist selectContainer">',e+='<select is="emby-select" id="selectMetadataRefreshMode" label="'+s.ZP.translate("LabelRefreshMode")+'">',e+='<option value="scan" selected>'+s.ZP.translate("ScanForNewAndUpdatedFiles")+"</option>",e+='<option value="missing">'+s.ZP.translate("SearchForMissingMetadata")+"</option>",e+='<option value="all">'+s.ZP.translate("ReplaceAllMetadata")+"</option>",e+="</select>",e+="</div>",e+='<label class="checkboxContainer hide fldReplaceExistingImages">',e+='<input type="checkbox" is="emby-checkbox" class="chkReplaceImages" />',e+="<span>"+s.ZP.translate("ReplaceExistingImages")+"</span>",e+="</label>",e+='<div class="fieldDescription">',e+=s.ZP.translate("RefreshDialogHelp"),e+="</div>",e+='<input type="hidden" class="fldSelectedItemIds" />',e+="<br />",e+='<div class="formDialogFooter">',e+='<button is="emby-button" type="submit" class="raised btnSubmit block formDialogFooterItem button-submit">'+s.ZP.translate("Refresh")+"</button>",e+="</div>",e+="</form>",(e+="</div>")+"</div>"}(),t.innerHTML=a,t.querySelector("form").addEventListener("submit",p.bind(this)),t.querySelector("#selectMetadataRefreshMode").addEventListener("change",(function(){"scan"===this.value?t.querySelector(".fldReplaceExistingImages").classList.add("hide"):t.querySelector(".fldReplaceExistingImages").classList.remove("hide")})),this.options.mode&&(t.querySelector("#selectMetadataRefreshMode").value=this.options.mode),t.querySelector("#selectMetadataRefreshMode").dispatchEvent(new CustomEvent("change")),t.querySelector(".btnCancel").addEventListener("click",(function(){n.default.close(t)})),l.Z.tv&&f(t.querySelector(".formDialogContent"),!1,!0),new Promise((function(e){l.Z.tv&&f(t.querySelector(".formDialogContent"),!1,!1),t.addEventListener("close",e),n.default.open(t)}))}}])&&d(t.prototype,a),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.default=m}}]);