"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[43839,10586],{43126:function(e,t,n){n.r(t),n.d(t,{PlaylistEditor:function(){return L}}),n(13227),n(96626),n(84159),n(81414),n(37666),n(14011),n(11431),n(26031),n(95822),n(56187),n(38690),n(11908),n(33096),n(89228);var i,l=n(65009),a=n.n(l),o=n(72365),r=n(93355),s=n(34862),c=n(30325),u=n(2513),d=n(67932),v=n(60934),f=n(66560),y=n(94994),m=n(86062),b=(n(38228),n(62033),n(61414),n(15856),n(18613));function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function h(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,P(i.key),i)}}function P(e){var t=function(e,t){if("object"!=p(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,"string");if("object"!=p(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==p(t)?t:String(t)}function S(e){var t=o.ZP.parentWithClass(this,"dialog"),n=t.querySelector("#selectPlaylistToAddTo").value,l=b.Z.getApiClient(i);return n?(v.set("playlisteditor-lastplaylistid",n),function(e,t,n){var i=t.querySelector(".fldSelectedItemIds").value||"";if("queue"===n)return u.O.queue({serverId:e.serverId(),ids:i.split(",")}),t.submitted=!0,void r.default.close(t);s.ZP.show();var l=e.getUrl("Playlists/".concat(n,"/Items"),{Ids:i,userId:e.getCurrentUserId()});e.ajax({type:"POST",url:l}).then((function(){s.ZP.hide(),t.submitted=!0,r.default.close(t)}))}(l,t,n)):function(e,t){s.ZP.show();var n=e.getUrl("Playlists",{Name:t.querySelector("#txtNewPlaylistName").value,Ids:t.querySelector(".fldSelectedItemIds").value||"",userId:e.getCurrentUserId()});e.ajax({type:"POST",url:n,dataType:"json",contentType:"application/json"}).then((function(n){s.ZP.hide();var i=n.Id;t.submitted=!0,r.default.close(t),function(e,t){f.appRouter.showItem(t,e.serverId())}(e,i)}))}(l,t),e.preventDefault(),!1}function g(e){e.dispatchEvent(new CustomEvent("change",{}))}function w(e,t,i){Promise.resolve().then(n.bind(n,22652)).then((function(n){var l=i?"on":"off";n.centerFocus[l](e,t)}))}var L=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,(n=[{key:"show",value:function(e){var t=e.items||{};i=e.serverId;var n={removeOnClose:!0,scrollY:!1};c.Z.tv?n.size="fullscreen":n.size="small";var l=r.default.createDialog(n);l.classList.add("formDialog");var o="",f=y.ZP.translate("HeaderAddToPlaylist");return o+='<div class="formDialogHeader">',o+='<button is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1" title="'.concat(y.ZP.translate("ButtonBack"),'"><span class="material-icons arrow_back" aria-hidden="true"></span></button>'),o+='<h3 class="formDialogHeaderTitle">',o+=f,o+="</h3>",o+="</div>",o+=function(e){var t="";t+='<div class="formDialogContent smoothScrollY" style="padding-top:2em;">',t+='<div class="dialogContentInner dialog-content-centered">',t+='<form style="margin:auto;">',t+='<div class="fldSelectPlaylist selectContainer">';var n=e.length?" autofocus":"";return t+='<select is="emby-select" id="selectPlaylistToAddTo" label="'.concat(y.ZP.translate("LabelPlaylist"),'"').concat(n,"></select>"),t+="</div>",t+='<div class="newPlaylistInfo">',t+='<div class="inputContainer">',n=e.length?"":" autofocus",t+='<input is="emby-input" type="text" id="txtNewPlaylistName" required="required" label="'.concat(y.ZP.translate("LabelName"),'"').concat(n," />"),t+="</div>",t+="</div>",t+='<div class="formDialogFooter">',t+='<button is="emby-button" type="submit" class="raised btnSubmit block formDialogFooterItem button-submit">'.concat(y.ZP.translate("Add"),"</button>"),t+="</div>",t+='<input type="hidden" class="fldSelectedItemIds" />',t+="</form>",(t+="</div>")+"</div>"}(t),l.innerHTML=o,function(e,t,n){if(e.querySelector("#selectPlaylistToAddTo").addEventListener("change",(function(){this.value?(e.querySelector(".newPlaylistInfo").classList.add("hide"),e.querySelector("#txtNewPlaylistName").removeAttribute("required")):(e.querySelector(".newPlaylistInfo").classList.remove("hide"),e.querySelector("#txtNewPlaylistName").setAttribute("required","required"))})),e.querySelector("form").addEventListener("submit",S),e.querySelector(".fldSelectedItemIds",e).value=n.join(","),n.length)e.querySelector(".fldSelectPlaylist").classList.remove("hide"),function(e,t){var n,l=t.querySelector("#selectPlaylistToAddTo");s.ZP.hide(),t.querySelector(".newPlaylistInfo").classList.add("hide");var o=b.Z.getApiClient(i),r=null===(n=d.E.firstOfType(m.z.SyncPlay))||void 0===n?void 0:n.instance;o.getItems(o.getCurrentUserId(),{Recursive:!0,IncludeItemTypes:"Playlist",SortBy:"SortName",EnableTotalRecordCount:!1}).then((function(t){var n="";(!1!==e.enableAddToPlayQueue&&u.O.isPlaying()||null!=r&&r.Manager.isSyncPlayEnabled())&&(n+='<option value="queue">'.concat(y.ZP.translate("AddToPlayQueue"),"</option>")),n+='<option value="">'.concat(y.ZP.translate("OptionNew"),"</option>"),n+=t.Items.map((function(e){return'<option value="'.concat(e.Id,'">').concat(a()(e.Name),"</option>")})),l.innerHTML=n;var i=e.defaultValue;i||(i=v.get("playlisteditor-lastplaylistid")||""),l.value="new"===i?"":i,l.value||(l.value=""),g(l),s.ZP.hide()}))}(t,e);else{e.querySelector(".fldSelectPlaylist").classList.add("hide");var l=e.querySelector("#selectPlaylistToAddTo");l.innerHTML="",l.value="",g(l)}}(l,e,t),l.querySelector(".btnCancel").addEventListener("click",(function(){r.default.close(l)})),c.Z.tv&&w(l.querySelector(".formDialogContent"),!1,!0),r.default.open(l).then((function(){return c.Z.tv&&w(l.querySelector(".formDialogContent"),!1,!1),l.submitted?Promise.resolve():Promise.reject()}))}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.default=L},15856:function(e,t,n){var i=n(30325),l=n(57366),a=n(78130),o=(n(67752),Object.create(HTMLSelectElement.prototype));function r(){return!(!l.Z.edgeUwp&&!l.Z.xboxOne&&(l.Z.tizen||l.Z.orsay||l.Z.web0s||!l.Z.tv&&i.Z.tv))}function s(e){var t=c(e),n=t?t.textContent||t.innerText:null;a.default.show({items:e.options,positionTo:e,title:n}).then((function(t){!function(e,t){e.value=t}(e,t),function(e){var t=new Event("change",{bubbles:!1,cancelable:!0});e.dispatchEvent(t)}(e)}))}function c(e){for(var t=e.previousSibling;t&&"LABEL"!==t.tagName;)t=t.previousSibling;return t}function u(){var e=c(this);e&&e.classList.add("selectLabelFocused")}function d(){var e=c(this);e&&e.classList.remove("selectLabelFocused")}function v(e){e.button||r()||(e.preventDefault(),s(this))}function f(e){switch(e.keyCode){case 13:return void(r()||(e.preventDefault(),s(this)));case 37:case 38:case 39:case 40:return void(i.Z.tv&&e.preventDefault())}}var y=0;o.createdCallback=function(){this.id||(this.id="embyselect"+y,y++),this.classList.add("emby-select-withcolor"),i.Z.tv&&this.classList.add("emby-select-focusscale"),this.addEventListener("mousedown",v),this.addEventListener("keydown",f),this.addEventListener("focus",u),this.addEventListener("blur",d)},o.attachedCallback=function(){var e;if(!this.classList.contains("emby-select")){this.classList.add("emby-select");var t,n=this.ownerDocument.createElement("label");n.innerText=this.getAttribute("label")||"",n.classList.add("selectLabel"),n.htmlFor=this.id,null===(e=this.parentNode)||void 0===e||e.insertBefore(n,this),this.classList.contains("emby-select-withcolor")&&(null===(t=this.parentNode)||void 0===t||t.insertAdjacentHTML("beforeend",'<div class="selectArrowContainer"><div style="visibility:hidden;display:none;">0</div><span class="selectArrow material-icons keyboard_arrow_down" aria-hidden="true"></span></div>'))}},o.setLabel=function(e){var t;(null===(t=this.parentNode)||void 0===t?void 0:t.querySelector("label")).innerText=e},document.registerElement("emby-select",{prototype:o,extends:"select"})}}]);