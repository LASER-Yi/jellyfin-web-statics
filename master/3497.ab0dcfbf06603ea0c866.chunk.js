"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3497],{83173:function(e,t,i){i.r(t),i.d(t,{default:function(){return Z},showEditor:function(){return C}}),i(5769),i(61013),i(23938),i(52077),i(911),i(52327),i(63238),i(61418),i(17460),i(14078),i(98010),i(32081),i(99785);var n=i(65009),a=i.n(n),r=i(28540),l=i(93355),o=i(72365),s=(i(72326),i(31214)),c=i(94994),d=(i(38228),i(61414),i(62033),i(15856),i(27127),i(56663)),u=i(37099);function p(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t,i){return t&&p(e.prototype,t),i&&p(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function v(){if(T)return!1;if(0==w.length)return(0,u.Z)({text:c.ZP.translate("PleaseAddAtLeastOneFolder"),type:"error"}),!1;T=!0,r.ZP.show();var e=o.ZP.parentWithClass(this,"dlg-librarycreator"),t=$("#txtValue",e).val(),i=$("#selectCollectionType",e).val();"mixed"==i&&(i=null);var n=s.ZP.getLibraryOptions(e.querySelector(".libraryOptions"));return n.PathInfos=w,ApiClient.addVirtualFolder(t,i,L.refresh,n).then((function(){k=!0,T=!1,r.ZP.hide(),l.default.close(e)}),(function(){(0,d.Z)(c.ZP.translate("ErrorAddingMediaPathToVirtualFolder")),T=!1,r.ZP.hide()})),!1}function f(){var e=o.ZP.parentWithClass(this,"dlg-librarycreator");Promise.resolve().then(i.bind(i,98043)).then((function(t){var i=new(0,t.default);i.show({enableNetworkSharePath:!0,callback:function(t,n){t&&function(e,t,i){var n=t.toLowerCase();if(!w.filter((function(e){return e.Path.toLowerCase()==n})).length){var a={Path:t};i&&(a.NetworkPath=i),w.push(a),y(e)}}(e,t,n),i.close()}})}))}function h(e,t){var i="";return i+='<div class="listItem listItem-border lnkPath" style="padding-left:.5em;">',i+='<div class="'.concat(e.NetworkPath?"listItemBody two-line":"listItemBody",'">'),i+='<div class="listItemBodyText">'.concat(a()(e.Path),"</div>"),e.NetworkPath&&(i+='<div class="listItemBodyText secondary">'.concat(a()(e.NetworkPath),"</div>")),i+="</div>",(i+='<button type="button" is="paper-icon-button-light"" class="listItemButton btnRemovePath" data-index="'.concat(t,'"><span class="material-icons remove_circle" aria-hidden="true"></span></button>'))+"</div>"}function y(e){var t=w.map(h).join(""),i=e.querySelector(".folderList");i.innerHTML=t,t?i.classList.remove("hide"):i.classList.add("hide")}function m(e){var t=o.ZP.parentWithClass(e.target,"btnRemovePath"),i=parseInt(t.getAttribute("data-index")),n=w[i].Path.toLowerCase();w=w.filter((function(e){return e.Path.toLowerCase()!=n})),y(o.ZP.parentWithClass(t,"dlg-librarycreator"))}function g(){P(k)}var P,L,C=b((function e(t){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),new Promise((function(e){L=t,P=e,k=!1;var i,n,a=l.default.createDialog({size:"small",modal:!1,removeOnClose:!0,scrollY:!1});a.classList.add("ui-body-a"),a.classList.add("background-theme-a"),a.classList.add("dlg-librarycreator"),a.classList.add("formDialog"),a.innerHTML=c.ZP.translateHtml('<div class="formDialogHeader"> <button type="button" is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1" title="${ButtonBack}"><span class="material-icons arrow_back" aria-hidden="true"></span></button> <h3 class="formDialogHeaderTitle">${ButtonAddMediaLibrary}</h3> </div> <div class="formDialogContent scrollY" style="padding-top:2em"> <div class="dialogContentInner dialog-content-centered"> <div id="fldCollectionType" class="selectContainer"> <select is="emby-select" id="selectCollectionType" data-mini="true" required="required" label="${LabelContentType}"></select> <div class="collectionTypeFieldDescription fieldDescription"> </div> </div> <div class="inputContainer"> <input is="emby-input" type="text" id="txtValue" required="required" label="${LabelDisplayName}"/> </div> <div class="folders"> <div style="display:flex;align-items:center"> <h1 style="margin:.5em 0">${Folders}</h1> <button is="emby-button" type="button" class="fab btnAddFolder submit" style="margin-left:1em" title="${Add}"> <span class="material-icons add" aria-hidden="true"></span> </button> </div> <div class="paperList folderList hide" style="margin-bottom:2em"></div> </div> <div class="libraryOptions"></div> </div> </div> <div class="formDialogFooter"> <button is="emby-button" type="button" class="raised btnSubmit button-submit block formDialogFooterItem"> <span>${ButtonOk}</span> </button> </div> '),i=a,n=t.collectionTypeOptions,$("#selectCollectionType",i).html(function(e){return e.map((function(e){return'<option value="'.concat(e.value,'">').concat(e.name,"</option>")})).join("")}(n)).val("").on("change",(function(){var e=this.value,t=$(this).parents(".dialog")[0];if(s.ZP.setContentType(t.querySelector(".libraryOptions"),e),e?t.querySelector(".libraryOptions").classList.remove("hide"):t.querySelector(".libraryOptions").classList.add("hide"),"mixed"!=e){var i=this.selectedIndex;if(-1!=i){var a=this.options[i].innerHTML.replace("*","").replace("&amp;","&");$("#txtValue",t).val(a)}}var r=n.find((function(t){return t.value===e}));$(".collectionTypeFieldDescription",t).html((null==r?void 0:r.message)||"")})),i.querySelector(".btnAddFolder").addEventListener("click",f),i.querySelector(".btnSubmit").addEventListener("click",v),i.querySelector(".folderList").addEventListener("click",m),a.addEventListener("close",g),l.default.open(a),a.querySelector(".btnCancel").addEventListener("click",(function(){l.default.close(a)})),w=[],y(a),function(e){s.ZP.embed(e.querySelector(".libraryOptions")).then((function(){$("#selectCollectionType",e).trigger("change")}))}(a)}))})),w=[],k=!1,T=!1,Z=C}}]);