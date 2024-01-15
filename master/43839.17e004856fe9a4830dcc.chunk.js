"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[43839,10586],{43126:function(e,t,n){n.r(t),n.d(t,{PlaylistEditor:function(){return I}}),n(13227),n(96626),n(84159),n(81414),n(37666),n(14011),n(11431),n(26031),n(95822),n(56187),n(38690),n(11908),n(33096),n(89228);var i,l=n(65009),a=n.n(l),r=n(72365),o=n(93355),s=n(84597),c=n(30325),u=n(48957),d=n(67932),v=n(60934),f=n(66560),y=n(94994),m=n(90846),b=(n(38228),n(62033),n(61414),n(15856),n(18613));function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function h(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,S(i.key),i)}}function P(e,t,n){return t&&h(e.prototype,t),n&&h(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function S(e){var t=function(e,t){if("object"!=p(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,"string");if("object"!=p(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==p(t)?t:String(t)}function g(e){var t=r.ZP.parentWithClass(this,"dialog"),n=t.querySelector("#selectPlaylistToAddTo").value,l=b.Z.getApiClient(i);return n?(v.set("playlisteditor-lastplaylistid",n),function(e,t,n){var i=t.querySelector(".fldSelectedItemIds").value||"";if("queue"===n)return u.O.queue({serverId:e.serverId(),ids:i.split(",")}),t.submitted=!0,void o.default.close(t);s.ZP.show();var l=e.getUrl("Playlists/".concat(n,"/Items"),{Ids:i,userId:e.getCurrentUserId()});e.ajax({type:"POST",url:l}).then((function(){s.ZP.hide(),t.submitted=!0,o.default.close(t)}))}(l,t,n)):function(e,t){s.ZP.show();var n=e.getUrl("Playlists",{Name:t.querySelector("#txtNewPlaylistName").value,Ids:t.querySelector(".fldSelectedItemIds").value||"",userId:e.getCurrentUserId()});e.ajax({type:"POST",url:n,dataType:"json",contentType:"application/json"}).then((function(n){s.ZP.hide();var i=n.Id;t.submitted=!0,o.default.close(t),function(e,t){f.appRouter.showItem(t,e.serverId())}(e,i)}))}(l,t),e.preventDefault(),!1}function w(e){e.dispatchEvent(new CustomEvent("change",{}))}function L(e,t,i){Promise.resolve().then(n.bind(n,54517)).then((function(n){var l=i?"on":"off";n.centerFocus[l](e,t)}))}var I=P((function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var n=t.items||{};i=t.serverId;var l={removeOnClose:!0,scrollY:!1};c.Z.tv?l.size="fullscreen":l.size="small";var r=o.default.createDialog(l);r.classList.add("formDialog");var f="",p=y.ZP.translate("HeaderAddToPlaylist");return f+='<div class="formDialogHeader">',f+='<button is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1" title="'.concat(y.ZP.translate("ButtonBack"),'"><span class="material-icons arrow_back" aria-hidden="true"></span></button>'),f+='<h3 class="formDialogHeaderTitle">',f+=p,f+="</h3>",f+="</div>",f+=function(e){var t="";t+='<div class="formDialogContent smoothScrollY" style="padding-top:2em;">',t+='<div class="dialogContentInner dialog-content-centered">',t+='<form style="margin:auto;">',t+='<div class="fldSelectPlaylist selectContainer">';var n=e.length?" autofocus":"";return t+='<select is="emby-select" id="selectPlaylistToAddTo" label="'.concat(y.ZP.translate("LabelPlaylist"),'"').concat(n,"></select>"),t+="</div>",t+='<div class="newPlaylistInfo">',t+='<div class="inputContainer">',n=e.length?"":" autofocus",t+='<input is="emby-input" type="text" id="txtNewPlaylistName" required="required" label="'.concat(y.ZP.translate("LabelName"),'"').concat(n," />"),t+="</div>",t+="</div>",t+='<div class="formDialogFooter">',t+='<button is="emby-button" type="submit" class="raised btnSubmit block formDialogFooterItem button-submit">'.concat(y.ZP.translate("Add"),"</button>"),t+="</div>",t+='<input type="hidden" class="fldSelectedItemIds" />',t+="</form>",(t+="</div>")+"</div>"}(n),r.innerHTML=f,function(e,t,n){if(e.querySelector("#selectPlaylistToAddTo").addEventListener("change",(function(){this.value?(e.querySelector(".newPlaylistInfo").classList.add("hide"),e.querySelector("#txtNewPlaylistName").removeAttribute("required")):(e.querySelector(".newPlaylistInfo").classList.remove("hide"),e.querySelector("#txtNewPlaylistName").setAttribute("required","required"))})),e.querySelector("form").addEventListener("submit",g),e.querySelector(".fldSelectedItemIds",e).value=n.join(","),n.length)e.querySelector(".fldSelectPlaylist").classList.remove("hide"),function(e,t){var n,l=t.querySelector("#selectPlaylistToAddTo");s.ZP.hide(),t.querySelector(".newPlaylistInfo").classList.add("hide");var r=b.Z.getApiClient(i),o=null===(n=d.E.firstOfType(m.z.SyncPlay))||void 0===n?void 0:n.instance;r.getItems(r.getCurrentUserId(),{Recursive:!0,IncludeItemTypes:"Playlist",SortBy:"SortName",EnableTotalRecordCount:!1}).then((function(t){var n="";(!1!==e.enableAddToPlayQueue&&u.O.isPlaying()||null!=o&&o.Manager.isSyncPlayEnabled())&&(n+='<option value="queue">'.concat(y.ZP.translate("AddToPlayQueue"),"</option>")),n+='<option value="">'.concat(y.ZP.translate("OptionNew"),"</option>"),n+=t.Items.map((function(e){return'<option value="'.concat(e.Id,'">').concat(a()(e.Name),"</option>")})),l.innerHTML=n;var i=e.defaultValue;i||(i=v.get("playlisteditor-lastplaylistid")||""),l.value="new"===i?"":i,l.value||(l.value=""),w(l),s.ZP.hide()}))}(t,e);else{e.querySelector(".fldSelectPlaylist").classList.add("hide");var l=e.querySelector("#selectPlaylistToAddTo");l.innerHTML="",l.value="",w(l)}}(r,t,n),r.querySelector(".btnCancel").addEventListener("click",(function(){o.default.close(r)})),c.Z.tv&&L(r.querySelector(".formDialogContent"),!1,!0),o.default.open(r).then((function(){return c.Z.tv&&L(r.querySelector(".formDialogContent"),!1,!1),r.submitted?Promise.resolve():Promise.reject()}))}));t.default=I},15856:function(e,t,n){var i=n(30325),l=n(57366),a=n(12801),r=(n(67752),Object.create(HTMLSelectElement.prototype));function o(){return!(!l.Z.edgeUwp&&!l.Z.xboxOne&&(l.Z.tizen||l.Z.orsay||l.Z.web0s||!l.Z.tv&&i.Z.tv))}function s(e){var t=c(e),n=t?t.textContent||t.innerText:null;a.default.show({items:e.options,positionTo:e,title:n}).then((function(t){!function(e,t){e.value=t}(e,t),function(e){var t=document.createEvent("HTMLEvents");t.initEvent("change",!1,!0),e.dispatchEvent(t)}(e)}))}function c(e){for(var t=e.previousSibling;t&&"LABEL"!==t.tagName;)t=t.previousSibling;return t}function u(){var e=c(this);e&&e.classList.add("selectLabelFocused")}function d(){var e=c(this);e&&e.classList.remove("selectLabelFocused")}function v(e){e.button||o()||(e.preventDefault(),s(this))}function f(e){switch(e.keyCode){case 13:return void(o()||(e.preventDefault(),s(this)));case 37:case 38:case 39:case 40:return void(i.Z.tv&&e.preventDefault())}}var y=0;r.createdCallback=function(){this.id||(this.id="embyselect"+y,y++),this.classList.add("emby-select-withcolor"),i.Z.tv&&this.classList.add("emby-select-focusscale"),this.addEventListener("mousedown",v),this.addEventListener("keydown",f),this.addEventListener("focus",u),this.addEventListener("blur",d)},r.attachedCallback=function(){var e;if(!this.classList.contains("emby-select")){this.classList.add("emby-select");var t,n=this.ownerDocument.createElement("label");n.innerText=this.getAttribute("label")||"",n.classList.add("selectLabel"),n.htmlFor=this.id,null===(e=this.parentNode)||void 0===e||e.insertBefore(n,this),this.classList.contains("emby-select-withcolor")&&(null===(t=this.parentNode)||void 0===t||t.insertAdjacentHTML("beforeend",'<div class="selectArrowContainer"><div style="visibility:hidden;display:none;">0</div><span class="selectArrow material-icons keyboard_arrow_down" aria-hidden="true"></span></div>'))}},r.setLabel=function(e){var t;(null===(t=this.parentNode)||void 0===t?void 0:t.querySelector("label")).innerText=e},document.registerElement("emby-select",{prototype:r,extends:"select"})}}]);