"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4231],{14231:function(e,t,a){a.r(t),a(5769),a(63238),a(61418),a(17460),a(14078),a(55849),a(99785);var s=a(83094),l=a(1115),n=a(6594),o=a(78695),r=a(53754),i=(a(30983),a(78066),a(21865),a(65219),a(50447),a(56561),a(16589),a(53913)),c=a(38440);function d(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function u(e,t,s){Promise.resolve().then(a.bind(a,74227)).then((function(a){var l=s?"on":"off";a.centerFocus[l](e,t)}))}function f(e){n.ZP.show();var t=s.ZP.parentWithClass(e.target,"dialog"),a=this.options,o=i.Z.getApiClient(a.serverId),d="all"===t.querySelector("#selectMetadataRefreshMode").value,u="scan"===t.querySelector("#selectMetadataRefreshMode").value?"Default":"FullRefresh",f="FullRefresh"===u&&t.querySelector(".chkReplaceImages").checked;return a.itemIds.forEach((function(e){o.refreshItem(e,{Recursive:!0,ImageRefreshMode:u,MetadataRefreshMode:u,ReplaceAllImages:f,ReplaceAllMetadata:d})})),l.default.close(t),(0,c.Z)(r.ZP.translate("RefreshQueued")),n.ZP.hide(),e.preventDefault(),!1}var h=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=t}var t,a;return t=e,(a=[{key:"show",value:function(){var e={removeOnClose:!0,scrollY:!1};o.Z.tv?e.size="fullscreen":e.size="small";var t=l.default.createDialog(e);t.classList.add("formDialog");var a="";return a+='<div class="formDialogHeader">',a+='<button is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1"><span class="material-icons arrow_back"></span></button>',a+='<h3 class="formDialogHeaderTitle">',a+=r.ZP.translate("RefreshMetadata"),a+="</h3>",a+="</div>",a+=function(){var e="";return e+='<div class="formDialogContent smoothScrollY" style="padding-top:2em;">',e+='<div class="dialogContentInner dialog-content-centered">',e+='<form style="margin:auto;">',e+='<div class="fldSelectPlaylist selectContainer">',e+='<select is="emby-select" id="selectMetadataRefreshMode" label="'+r.ZP.translate("LabelRefreshMode")+'">',e+='<option value="scan">'+r.ZP.translate("ScanForNewAndUpdatedFiles")+"</option>",e+='<option value="missing">'+r.ZP.translate("SearchForMissingMetadata")+"</option>",e+='<option value="all" selected>'+r.ZP.translate("ReplaceAllMetadata")+"</option>",e+="</select>",e+="</div>",e+='<label class="checkboxContainer hide fldReplaceExistingImages">',e+='<input type="checkbox" is="emby-checkbox" class="chkReplaceImages" />',e+="<span>"+r.ZP.translate("ReplaceExistingImages")+"</span>",e+="</label>",e+='<div class="fieldDescription">',e+=r.ZP.translate("RefreshDialogHelp"),e+="</div>",e+='<input type="hidden" class="fldSelectedItemIds" />',e+="<br />",e+='<div class="formDialogFooter">',e+='<button is="emby-button" type="submit" class="raised btnSubmit block formDialogFooterItem button-submit">'+r.ZP.translate("Refresh")+"</button>",e+="</div>",e+="</form>",(e+="</div>")+"</div>"}(),t.innerHTML=a,t.querySelector("form").addEventListener("submit",f.bind(this)),t.querySelector("#selectMetadataRefreshMode").addEventListener("change",(function(){"scan"===this.value?t.querySelector(".fldReplaceExistingImages").classList.add("hide"):t.querySelector(".fldReplaceExistingImages").classList.remove("hide")})),this.options.mode&&(t.querySelector("#selectMetadataRefreshMode").value=this.options.mode),t.querySelector("#selectMetadataRefreshMode").dispatchEvent(new CustomEvent("change")),t.querySelector(".btnCancel").addEventListener("click",(function(){l.default.close(t)})),o.Z.tv&&u(t.querySelector(".formDialogContent"),!1,!0),new Promise((function(e,a){o.Z.tv&&u(t.querySelector(".formDialogContent"),!1,!1),t.addEventListener("close",e),l.default.open(t)}))}}])&&d(t.prototype,a),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.default=h}}]);