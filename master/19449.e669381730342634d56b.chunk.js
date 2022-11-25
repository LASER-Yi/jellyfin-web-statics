"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[19449],{19449:function(e,t,o){o.r(t),o(5769),o(61013),o(23938),o(63238),o(61418),o(17460),o(14078),o(99785);var n,l=o(65009),a=o.n(l),r=o(72365),i=o(93355),c=o(28540),s=o(30325),d=o(52050),u=o(94994),v=(o(38228),o(61414),o(12291),o(62033),o(15856),o(18613)),f=o(56663);function m(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e){c.ZP.show();var t=r.ZP.parentWithClass(this,"dialog"),o=t.querySelector("#selectCollectionToAddTo").value,l=v.Z.getApiClient(n);return o?function(e,t,o){var n=e.getUrl("Collections/".concat(o,"/Items"),{Ids:t.querySelector(".fldSelectedItemIds").value||""});e.ajax({type:"POST",url:n}).then((function(){c.ZP.hide(),t.submitted=!0,i.default.close(t),(0,f.Z)(u.ZP.translate("MessageItemsAdded"))}))}(l,t,o):function(e,t){var o=e.getUrl("Collections",{Name:t.querySelector("#txtNewCollectionName").value,IsLocked:!t.querySelector("#chkEnableInternetMetadata").checked,Ids:t.querySelector(".fldSelectedItemIds").value||""});e.ajax({type:"POST",url:o,dataType:"json"}).then((function(o){c.ZP.hide();var n=o.Id;t.submitted=!0,i.default.close(t),function(e,t){d.appRouter.showItem(t,e.serverId())}(e,n)}))}(l,t),e.preventDefault(),!1}function p(e){e.dispatchEvent(new CustomEvent("change",{}))}function h(e,t,n){Promise.resolve().then(o.bind(o,54517)).then((function(o){var l=n?"on":"off";o.centerFocus[l](e,t)}))}var C=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,o;return t=e,(o=[{key:"show",value:function(e){var t=e.items||{};n=e.serverId;var o={removeOnClose:!0,scrollY:!1};s.Z.tv?o.size="fullscreen":o.size="small";var l=i.default.createDialog(o);l.classList.add("formDialog");var r="",d=t.length?u.ZP.translate("HeaderAddToCollection"):u.ZP.translate("NewCollection");return r+='<div class="formDialogHeader">',r+='<button is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1" title="'.concat(u.ZP.translate("ButtonBack"),'"><span class="material-icons arrow_back" aria-hidden="true"></span></button>'),r+='<h3 class="formDialogHeaderTitle">',r+=d,r+="</h3>",r+="</div>",r+=function(){var e="";return e+='<div class="formDialogContent smoothScrollY" style="padding-top:2em;">',e+='<div class="dialogContentInner dialog-content-centered">',e+='<form class="newCollectionForm" style="margin:auto;">',e+="<div>",e+=u.ZP.translate("NewCollectionHelp"),e+="</div>",e+='<div class="fldSelectCollection">',e+="<br/>",e+="<br/>",e+='<div class="selectContainer">',e+='<select is="emby-select" label="'.concat(u.ZP.translate("LabelCollection"),'" id="selectCollectionToAddTo" autofocus></select>'),e+="</div>",e+="</div>",e+='<div class="newCollectionInfo">',e+='<div class="inputContainer">',e+='<input is="emby-input" type="text" id="txtNewCollectionName" required="required" label="'.concat(u.ZP.translate("LabelName"),'" />'),e+='<div class="fieldDescription">'.concat(u.ZP.translate("NewCollectionNameExample"),"</div>"),e+="</div>",e+='<label class="checkboxContainer">',e+='<input is="emby-checkbox" type="checkbox" id="chkEnableInternetMetadata" />',e+="<span>".concat(u.ZP.translate("SearchForCollectionInternetMetadata"),"</span>"),e+="</label>",e+="</div>",e+='<div class="formDialogFooter">',e+='<button is="emby-button" type="submit" class="raised btnSubmit block formDialogFooterItem button-submit">'.concat(u.ZP.translate("ButtonOk"),"</button>"),e+="</div>",e+='<input type="hidden" class="fldSelectedItemIds" />',e+="</form>",(e+="</div>")+"</div>"}(),l.innerHTML=r,function(e,t){if(e.querySelector("#selectCollectionToAddTo").addEventListener("change",(function(){this.value?(e.querySelector(".newCollectionInfo").classList.add("hide"),e.querySelector("#txtNewCollectionName").removeAttribute("required")):(e.querySelector(".newCollectionInfo").classList.remove("hide"),e.querySelector("#txtNewCollectionName").setAttribute("required","required"))})),e.querySelector("form").addEventListener("submit",b),e.querySelector(".fldSelectedItemIds",e).value=t.join(","),t.length)e.querySelector(".fldSelectCollection").classList.remove("hide"),function(e){c.ZP.show();var t=e.querySelector("#selectCollectionToAddTo");e.querySelector(".newCollectionInfo").classList.add("hide");var o=v.Z.getApiClient(n);o.getItems(o.getCurrentUserId(),{Recursive:!0,IncludeItemTypes:"BoxSet",SortBy:"SortName",EnableTotalRecordCount:!1}).then((function(e){var o="";o+='<option value="">'.concat(u.ZP.translate("OptionNew"),"</option>"),o+=e.Items.map((function(e){return'<option value="'.concat(e.Id,'">').concat(a()(e.Name),"</option>")})),t.innerHTML=o,t.value="",p(t),c.ZP.hide()}))}(e);else{e.querySelector(".fldSelectCollection").classList.add("hide");var o=e.querySelector("#selectCollectionToAddTo");o.innerHTML="",o.value="",p(o)}}(l,t),l.querySelector(".btnCancel").addEventListener("click",(function(){i.default.close(l)})),s.Z.tv&&h(l.querySelector(".formDialogContent"),!1,!0),i.default.open(l).then((function(){return s.Z.tv&&h(l.querySelector(".formDialogContent"),!1,!1),l.submitted?Promise.resolve():Promise.reject()}))}}])&&m(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.default=C}}]);