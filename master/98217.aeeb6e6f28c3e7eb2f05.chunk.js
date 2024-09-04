"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[98217,96084],{73696:function(t,e,r){r.r(e),r.d(e,{MediaLibraryEditor:function(){return w},default:function(){return x}}),r(44962),r(29305),r(32733),r(84701),r(81678),r(14382),r(86584),r(77575),r(4754),r(94),r(36947),r(78557),r(96054),r(90076),r(83994),r(82367);var i=r(22696),n=r.n(i),a=(r(63855),r(56869)),o=r(79754),l=r(47629),s=r(9938),d=r(5898),c=(r(10353),r(15453),r(84501),r(41177)),u=r(50764),y=r(40532);function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function f(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,p(i.key),i)}}function m(t,e,r){return e&&f(t.prototype,e),r&&f(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function p(t){var e=function(t,e){if("object"!=b(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,"string");if("object"!=b(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==b(e)?e:e+""}function v(){if(T)return!1;T=!0,a.Ay.show();var t=l.Ay.parentWithClass(this,"dlg-libraryeditor");if(!I.library.ItemId)return a.Ay.hide(),o.default.close(t),(0,c.A)({text:d.Ay.translate("LibraryInvalidItemIdError")}),!1;var e=s.Ay.getLibraryOptions(t.querySelector(".libraryOptions"));return e=Object.assign(I.library.LibraryOptions||{},e),ApiClient.updateVirtualFolderOptions(I.library.ItemId,e).then((function(){O=!0,T=!1,a.Ay.hide(),o.default.close(t)}),(function(){T=!1,a.Ay.hide()})),!1}function h(t){var e=l.Ay.parentWithClass(t.target,"listItem");if(e){var r,i=parseInt(e.getAttribute("data-index"),10),n=(null===(r=I.library.LibraryOptions)||void 0===r?void 0:r.PathInfos)||[],a=null==i?{}:n[i]||{},o=a.Path||(null==i?null:I.library.Locations[i]),s=l.Ay.parentWithClass(t.target,"btnRemovePath");if(s)return void function(t,e){var r=t,i=I.library;(0,y.A)({title:d.Ay.translate("HeaderRemoveMediaLocation"),text:d.Ay.translate("MessageConfirmRemoveMediaLocation"),confirmText:d.Ay.translate("Delete"),primary:"delete"}).then((function(){var t=I.refresh;ApiClient.removeMediaPath(i.Name,e,t).then((function(){O=!0,A(l.Ay.parentWithClass(r,"dlg-libraryeditor"))}),(function(){(0,u.A)(d.Ay.translate("ErrorDefault"))}))}))}(s,o);C(l.Ay.parentWithClass(e,"dlg-libraryeditor"),o,a.NetworkPath)}}function g(t,e){var r="";return r+='<div class="listItem listItem-border lnkPath" data-index="'.concat(e,'">'),r+='<div class="'.concat(t.NetworkPath?"listItemBody two-line":"listItemBody",'">'),r+='<h3 class="listItemBodyText">',r+=n()(t.Path),r+="</h3>",t.NetworkPath&&(r+='<div class="listItemBodyText secondary">'.concat(n()(t.NetworkPath),"</div>")),r+="</div>",(r+='<button type="button" is="paper-icon-button-light" class="listItemButton btnRemovePath" data-index="'.concat(e,'"><span class="material-icons remove_circle" aria-hidden="true"></span></button>'))+"</div>"}function A(t){ApiClient.getVirtualFolders().then((function(e){var r=e.filter((function(t){return t.Name===I.library.Name}))[0];r&&(I.library=r,L(t,I))}))}function L(t,e){var r,i=(null===(r=e.library.LibraryOptions)||void 0===r?void 0:r.PathInfos)||[];i.length||(i=e.library.Locations.map((function(t){return{Path:t}}))),"boxsets"===e.library.CollectionType?t.querySelector(".folders").classList.add("hide"):t.querySelector(".folders").classList.remove("hide"),t.querySelector(".folderList").innerHTML=i.map(g).join("")}function P(){C(l.Ay.parentWithClass(this,"dlg-libraryeditor"))}function C(t,e,i){Promise.resolve().then(r.bind(r,21840)).then((function(r){var n=new(0,r.default);n.show({pathReadOnly:null!=e,path:e,networkSharePath:i,callback:function(r,i){r&&(e?function(t,e,r){var i=I.library;ApiClient.updateMediaPath(i.Name,{Path:e,NetworkPath:r}).then((function(){O=!0,A(t)}),(function(){(0,u.A)(d.Ay.translate("ErrorAddingMediaPathToVirtualFolder"))}))}(t,e,i):function(t,e,r){var i=I.library,n=I.refresh;ApiClient.addMediaPath(i.Name,e,r,n).then((function(){O=!0,A(t)}),(function(){(0,u.A)(d.Ay.translate("ErrorAddingMediaPathToVirtualFolder"))}))}(t,r,i)),n.close()}})}))}function k(){S.resolveWith(null,[O])}var S,I,w=m((function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var r=jQuery.Deferred();I=e,S=r,O=!1;var i=o.default.createDialog({size:"small",modal:!1,removeOnClose:!0,scrollY:!1});return i.classList.add("dlg-libraryeditor"),i.classList.add("ui-body-a"),i.classList.add("background-theme-a"),i.classList.add("formDialog"),i.innerHTML=d.Ay.translateHtml('<div class="formDialogHeader"> <button type="button" is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1" title="${ButtonBack}"><span class="material-icons arrow_back" aria-hidden="true"></span></button> <h3 class="formDialogHeaderTitle"></h3> </div> <div class="formDialogContent scrollY" style="padding-top:2em"> <div class="dialogContentInner dialog-content-centered"> <div class="infoBanner" style="margin-bottom:1.8em"> ${ChangingMetadataImageSettingsNewContent} </div> <div class="folders hide"> <div style="display:flex;align-items:center"> <h1 style="margin:.5em 0">${Folders}</h1> <button is="emby-button" type="button" class="fab btnAddFolder submit" title="${Add}"> <span class="material-icons add" aria-hidden="true"></span> </button> </div> <div class="paperList folderList" style="margin-bottom:2em"></div> </div> <div class="libraryOptions"></div> </div> </div> <div class="formDialogFooter"> <button is="emby-button" type="button" class="raised btnSubmit button-submit block formDialogFooterItem"> <span>${ButtonOk}</span> </button> </div> '),i.querySelector(".formDialogHeaderTitle").innerText=e.library.Name,function(t,e){L(t,e),t.querySelector(".btnAddFolder").addEventListener("click",P),t.querySelector(".folderList").addEventListener("click",h),t.querySelector(".btnSubmit").addEventListener("click",v),s.Ay.embed(t.querySelector(".libraryOptions"),e.library.CollectionType,e.library.LibraryOptions)}(i,e),i.addEventListener("close",k),o.default.open(i),i.querySelector(".btnCancel").addEventListener("click",(function(){o.default.close(i)})),A(i),r.promise()})),O=!1,T=!1,x=w}}]);