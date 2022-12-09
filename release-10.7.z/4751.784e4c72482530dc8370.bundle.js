"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4751,8013],{4751:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}}),n(5769),n(98010),n(63238),n(23938),n(61418),n(61013),n(17460),n(14078),n(72410),n(55849),n(95623);var i,a=n(47518),r=n(38102),o=n(6594),l=n(53754),s=n(83094),c=n(1892),u=n.n(c),d=n(61197),v=(u()(d.Z,{insert:"head",singleton:!1}),d.Z.locals,n(53913)),f=n(61642),m=n(8013),p=n(56346),h=[],y=[];function P(){var e=i;if(e){e.parentNode.removeChild(e),i=null,h=[],y=[];for(var t=document.querySelectorAll(".itemSelectionPanel"),n=0,a=t.length;n<a;n++){var r=t[n].parentNode;r.removeChild(t[n]),r.classList.remove("withMultiSelect")}}}function b(e,t){var n=s.ZP.parentWithAttribute(e,"data-id").getAttribute("data-id");if(t?h.filter((function(e){return e===n})).length||(h.push(n),y.push(e)):(h=h.filter((function(e){return e!==n})),y=y.filter((function(t){return t!==e}))),h.length){var i=document.querySelector(".itemSelectionCount");i&&(i.innerHTML=h.length)}else P()}function g(e){b(this,this.checked)}function S(e,t){var n=e.querySelector(".itemSelectionPanel");if(!n){(n=document.createElement("div")).classList.add("itemSelectionPanel");var i=e.querySelector(".cardBox")||e.querySelector(".cardContent");i.classList.add("withMultiSelect"),i.appendChild(n);var r="chkItemSelect";t&&!a.Z.firefox&&(r+=" checkedInitial");var o=t?" checked":"";n.innerHTML='<label class="checkboxContainer"><input type="checkbox" is="emby-checkbox" data-outlineclass="multiSelectCheckboxOutline" class="'.concat(r,'"').concat(o,"/><span></span></label>"),n.querySelector(".chkItemSelect").addEventListener("change",g)}}function Z(e){var t=v.Z.currentApiClient();t.getCurrentUser().then((function(i){var a=[];a.push({name:l.ZP.translate("AddToCollection"),id:"addtocollection",icon:"add"}),a.push({name:l.ZP.translate("AddToPlaylist"),id:"playlist",icon:"playlist_add"}),i.Policy.EnableContentDeletion&&a.push({name:l.ZP.translate("Delete"),id:"delete",icon:"delete"}),i.Policy.EnableContentDownloading&&r.M.supports("filedownload"),i.Policy.IsAdministrator&&a.push({name:l.ZP.translate("GroupVersions"),id:"groupvideos",icon:"call_merge"}),a.push({name:l.ZP.translate("MarkPlayed"),id:"markplayed",icon:"check_box"}),a.push({name:l.ZP.translate("MarkUnplayed"),id:"markunplayed",icon:"check_box_outline_blank"}),a.push({name:l.ZP.translate("RefreshMetadata"),id:"refresh",icon:"refresh"}),Promise.resolve().then(n.bind(n,32465)).then((function(i){i.show({items:a,positionTo:e.target,callback:function(e){var i=h.slice(0),a=t.serverInfo().Id;switch(e){case"addtocollection":n.e(6372).then(n.bind(n,86372)).then((function(e){new(0,e.default)({items:i,serverId:a})})),P(),I();break;case"playlist":new m.default({items:i,serverId:a}),P(),I();break;case"delete":(function(e,t){return new Promise((function(n,i){var a=l.ZP.translate("ConfirmDeleteItem"),r=l.ZP.translate("HeaderDeleteItem");t.length>1&&(a=l.ZP.translate("ConfirmDeleteItems"),r=l.ZP.translate("HeaderDeleteItems")),(0,p.Z)(a,r).then((function(){var a=t.map((function(t){e.deleteItem(t)}));Promise.all(a).then(n,(function(){(function(e){return new Promise((function(t){(0,f.Z)(e).then(t,t)}))})(l.ZP.translate("ErrorDeletingItem")).then(i,i)}))}),i)}))})(t,i).then(I),P(),I();break;case"groupvideos":!function(e,t){t.length<2?(0,f.Z)({text:l.ZP.translate("PleaseSelectTwoItems")}):(o.ZP.show(),e.ajax({type:"POST",url:e.getUrl("Videos/MergeVersions",{Ids:t.join(",")})}).then((function(){o.ZP.hide(),P(),I()})))}(t,i);break;case"markplayed":i.forEach((function(e){t.markPlayed(t.getCurrentUserId(),e)})),P(),I();break;case"markunplayed":i.forEach((function(e){t.markUnplayed(t.getCurrentUserId(),e)})),P(),I();break;case"refresh":n.e(4231).then(n.bind(n,14231)).then((function(e){new(0,e.default)({itemIds:i,serverId:a}).show()})),P(),I()}}})}))}))}function I(){var e=[];[].forEach.call(y,(function(t){var n=s.ZP.parentWithAttribute(t,"is","emby-itemscontainer");n&&!e.includes(n)&&e.push(n)}));for(var t=0,n=e.length;t<n;t++)e[t].notifyRefreshNeeded(!0)}function C(e){Promise.resolve().then(n.bind(n,65219)).then((function(){for(var t=document.querySelectorAll(".card"),n=0,a=t.length;n<a;n++)S(t[n],e===t[n]);!function(){var e=i;if(!e){(e=document.createElement("div")).classList.add("selectionCommandsPanel"),document.body.appendChild(e),i=e;var t="";t+='<button is="paper-icon-button-light" class="btnCloseSelectionPanel autoSize"><span class="material-icons close"></span></button>',t+='<h1 class="itemSelectionCount"></h1>',t+='<button is="paper-icon-button-light" class="btnSelectionPanelOptions autoSize" style="margin-left:auto;"><span class="material-icons '.concat("more_vert",'"></span></button>'),e.innerHTML=t,e.querySelector(".btnCloseSelectionPanel").addEventListener("click",P);var n=e.querySelector(".btnSelectionPanelOptions");s.ZP.addEventListener(n,"click",Z,{passive:!0})}}(),b(e,!0)}))}function k(e){var t=e.target;if(h.length){var n=s.ZP.parentWithClass(t,"card");if(n){var i=n.querySelector(".itemSelectionPanel");if(i)return function(e,t){if(!s.ZP.parentWithClass(e.target,"chkItemSelect")){var n=t.querySelector(".chkItemSelect");if(n)if(n.classList.contains("checkedInitial"))n.classList.remove("checkedInitial");else{var i=!n.checked;n.checked=i,b(n,i)}}return e.preventDefault(),e.stopPropagation(),!1}(e,i)}return e.preventDefault(),e.stopPropagation(),!1}}function w(e){var t,n,i,r,o,l=e.container;function c(e){var t=s.ZP.parentWithClass(e.target,"card");return t&&C(t),e.preventDefault(),e.stopPropagation&&e.stopPropagation(),!1}function u(e){return e.changedTouches||e.targetTouches||e.touches}function d(e){var a=u(e)[0];if(t=null,i=0,r=0,a){i=a.clientX,r=a.clientY;var o=a.target;if(o){var l=s.ZP.parentWithClass(o,"card");l&&(n&&(clearTimeout(n),n=null),t=l,n=setTimeout(h,550))}}}function v(e){if(t){var n,a,o=u(e)[0];if(o){var l=o.clientX||0,s=o.clientY||0;n=Math.abs(l-(i||0)),a=Math.abs(s-(r||0))}else n=100,a=100;(n>=5||a>=5)&&p()}}function f(e){p()}function m(e){n&&(clearTimeout(n),n=null),t=e.target,n=setTimeout(h,550)}function p(e){n&&(clearTimeout(n),n=null),t=null}function h(){if(t){var e=s.ZP.parentWithClass(t,"card");t=null,e&&C(e)}}o=l,a.Z.touch&&!a.Z.safari?o.addEventListener("contextmenu",c):(s.ZP.addEventListener(o,"touchstart",d,{passive:!0}),s.ZP.addEventListener(o,"touchmove",v,{passive:!0}),s.ZP.addEventListener(o,"touchend",f,{passive:!0}),s.ZP.addEventListener(o,"touchcancel",f,{passive:!0}),s.ZP.addEventListener(o,"mousedown",m,{passive:!0}),s.ZP.addEventListener(o,"mouseleave",p,{passive:!0}),s.ZP.addEventListener(o,"mouseup",p,{passive:!0})),!1!==e.bindOnClick&&l.addEventListener("click",k),this.onContainerClick=k,this.destroy=function(){l.removeEventListener("click",k),l.removeEventListener("contextmenu",c);var e=l;s.ZP.removeEventListener(e,"touchstart",d,{passive:!0}),s.ZP.removeEventListener(e,"touchmove",v,{passive:!0}),s.ZP.removeEventListener(e,"touchend",f,{passive:!0}),s.ZP.removeEventListener(e,"mousedown",m,{passive:!0}),s.ZP.removeEventListener(e,"mouseleave",p,{passive:!0}),s.ZP.removeEventListener(e,"mouseup",p,{passive:!0})}}document.addEventListener("viewbeforehide",P)},8013:function(e,t,n){n.r(t),n.d(t,{showEditor:function(){return g}}),n(5769),n(52077),n(72482),n(61013),n(23938),n(63238),n(61418),n(17460),n(14078),n(19068),n(87211),n(25901),n(92189),n(95163),n(99785),n(91047);var i,a=n(83094),r=n(1115),o=n(6594),l=n(78695),s=n(53218),c=n(22155),u=n(28978),d=n(6383),v=n(53754),f=(n(78066),n(30983),n(21865),n(50447),n(56561),n(16589),n(53913));function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function p(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(void 0,a=function(e,t){if("object"!==m(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t);if("object"!==m(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(i.key,"string"),"symbol"===m(a)?a:String(a)),i)}var a}function h(e,t,n){return t&&p(e.prototype,t),n&&p(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function y(e){var t=a.ZP.parentWithClass(this,"dialog"),n=t.querySelector("#selectPlaylistToAddTo").value,l=f.Z.getApiClient(i);return n?(u.set("playlisteditor-lastplaylistid",n),function(e,t,n){var i=t.querySelector(".fldSelectedItemIds").value||"";if("queue"===n)return s.O.queue({serverId:e.serverId(),ids:i.split(",")}),t.submitted=!0,void r.default.close(t);o.ZP.show();var a=e.getUrl("Playlists/".concat(n,"/Items"),{Ids:i,userId:e.getCurrentUserId()});e.ajax({type:"POST",url:a}).then((function(){o.ZP.hide(),t.submitted=!0,r.default.close(t)}))}(l,t,n)):function(e,t){o.ZP.show();var n=e.getUrl("Playlists",{Name:t.querySelector("#txtNewPlaylistName").value,Ids:t.querySelector(".fldSelectedItemIds").value||"",userId:e.getCurrentUserId()});e.ajax({type:"POST",url:n,dataType:"json",contentType:"application/json"}).then((function(n){o.ZP.hide();var i=n.Id;t.submitted=!0,r.default.close(t),function(e,t){d.appRouter.showItem(t,e.serverId())}(e,i)}))}(l,t),e.preventDefault(),!1}function P(e){e.dispatchEvent(new CustomEvent("change",{}))}function b(e,t,i){Promise.resolve().then(n.bind(n,74227)).then((function(n){var a=i?"on":"off";n.centerFocus[a](e,t)}))}var g=h((function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var n=t.items||{};i=t.serverId;var a={removeOnClose:!0,scrollY:!1};l.Z.tv?a.size="fullscreen":a.size="small";var d=r.default.createDialog(a);d.classList.add("formDialog");var m="";return m+='<div class="formDialogHeader">',m+='<button is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1"><span class="material-icons arrow_back"></span></button>',m+='<h3 class="formDialogHeaderTitle">',m+=v.ZP.translate("HeaderAddToPlaylist"),m+="</h3>",m+="</div>",m+=function(e){var t="";t+='<div class="formDialogContent smoothScrollY" style="padding-top:2em;">',t+='<div class="dialogContentInner dialog-content-centered">',t+='<form style="margin:auto;">',t+='<div class="fldSelectPlaylist selectContainer">';var n=e.length?" autofocus":"";return t+='<select is="emby-select" id="selectPlaylistToAddTo" label="'.concat(v.ZP.translate("LabelPlaylist"),'"').concat(n,"></select>"),t+="</div>",t+='<div class="newPlaylistInfo">',t+='<div class="inputContainer">',n=e.length?"":" autofocus",t+='<input is="emby-input" type="text" id="txtNewPlaylistName" required="required" label="'.concat(v.ZP.translate("LabelName"),'"').concat(n," />"),t+="</div>",t+="</div>",t+='<div class="formDialogFooter">',t+='<button is="emby-button" type="submit" class="raised btnSubmit block formDialogFooterItem button-submit">'.concat(v.ZP.translate("Add"),"</button>"),t+="</div>",t+='<input type="hidden" class="fldSelectedItemIds" />',t+="</form>",(t+="</div>")+"</div>"}(n),d.innerHTML=m,function(e,t,n){if(e.querySelector("#selectPlaylistToAddTo").addEventListener("change",(function(){this.value?(e.querySelector(".newPlaylistInfo").classList.add("hide"),e.querySelector("#txtNewPlaylistName").removeAttribute("required")):(e.querySelector(".newPlaylistInfo").classList.remove("hide"),e.querySelector("#txtNewPlaylistName").setAttribute("required","required"))})),e.querySelector("form").addEventListener("submit",y),e.querySelector(".fldSelectedItemIds",e).value=n.join(","),n.length)e.querySelector(".fldSelectPlaylist").classList.remove("hide"),function(e,t){var n=t.querySelector("#selectPlaylistToAddTo");o.ZP.hide(),t.querySelector(".newPlaylistInfo").classList.add("hide");var a=f.Z.getApiClient(i);a.getItems(a.getCurrentUserId(),{Recursive:!0,IncludeItemTypes:"Playlist",SortBy:"SortName",EnableTotalRecordCount:!1}).then((function(t){var i="";(!1!==e.enableAddToPlayQueue&&s.O.isPlaying()||c.Z.Manager.isSyncPlayEnabled())&&(i+='<option value="queue">'.concat(v.ZP.translate("AddToPlayQueue"),"</option>")),i+='<option value="">'.concat(v.ZP.translate("OptionNew"),"</option>"),i+=t.Items.map((function(e){return'<option value="'.concat(e.Id,'">').concat(e.Name,"</option>")})),n.innerHTML=i;var a=e.defaultValue;a||(a=u.get("playlisteditor-lastplaylistid")||""),n.value="new"===a?"":a,n.value||(n.value=""),P(n),o.ZP.hide()}))}(t,e);else{e.querySelector(".fldSelectPlaylist").classList.add("hide");var a=e.querySelector("#selectPlaylistToAddTo");a.innerHTML="",a.value="",P(a)}}(d,t,n),d.querySelector(".btnCancel").addEventListener("click",(function(){r.default.close(d)})),l.Z.tv&&b(d.querySelector(".formDialogContent"),!1,!0),r.default.open(d).then((function(){return l.Z.tv&&b(d.querySelector(".formDialogContent"),!1,!1),d.submitted?Promise.resolve():Promise.reject()}))}));t.default=g},61197:function(e,t,n){var i=n(93476),a=n.n(i)()((function(e){return e[1]}));a.push([e.id,".itemSelectionPanel{position:absolute;bottom:0;left:0;right:0;top:0;background-color:rgba(0,0,0,.3);z-index:99998}.selectionCommandsPanel{position:fixed;top:0;left:0;right:0;padding:1em .5em;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;z-index:99999}.itemSelectionCount{vertical-align:middle;color:#fff!important;margin:0}.multiSelectCheckboxOutline{top:0!important;border-radius:0!important}.withMultiSelect{position:relative}",""]),t.Z=a}}]);