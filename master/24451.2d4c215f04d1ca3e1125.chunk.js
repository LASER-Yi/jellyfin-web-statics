"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[24451,46832],{79689:function(e,t,l){l.r(t),l.d(t,{PlaylistEditor:function(){return C}});var i,o=l(11444),n=l(77612),a=l(32215),r=l(4748),s=l(22696),d=l.n(s),u=l(47629),c=l(9482),v=l(82885),y=l(66176),f=l(52993),m=l(79754),p=l(56869),h=l(46782),P=l(80669),b=l(38829),g=l(70267),S=l(86191);function A(e){var t,l=u.Ay.parentWithClass(this,"dialog");if(l){var o=null===(t=l.querySelector("#selectPlaylistToAddTo"))||void 0===t?void 0:t.value;p.Ay.show(),o?(v.currentSettings.set("playlisteditor-lastplaylistid",o),function(e,t){var l,o=S.A.getApiClient(i),n=(0,f.C)(o),a=(null===(l=e.querySelector(".fldSelectedItemIds"))||void 0===l?void 0:l.value)||"";return"queue"===t?(P.f.queue({serverId:i,ids:a.split(",")}),e.submitted=!0,m.default.close(e),Promise.resolve()):(0,r.C)(n).addItemToPlaylist({playlistId:t,ids:a.split(","),userId:o.getCurrentUserId()}).then((function(){e.submitted=!0,m.default.close(e)}))}(l,o).catch((function(e){console.error("[PlaylistEditor] Failed to add to playlist %s",o,e)})).finally(p.Ay.hide)):function(e){var t,l,o=S.A.getApiClient(i),n=(0,f.C)(o),a=(null===(t=e.querySelector(".fldSelectedItemIds"))||void 0===t?void 0:t.value)||void 0;return(0,r.C)(n).createPlaylist({createPlaylistDto:{Name:null===(l=e.querySelector("#txtNewPlaylistName"))||void 0===l?void 0:l.value,Ids:null==a?void 0:a.split(","),UserId:o.getCurrentUserId()}}).then((function(t){var l;e.submitted=!0,m.default.close(e),l=t.data.Id,g.appRouter.showItem(l,i)}))}(l).catch((function(e){console.error("[PlaylistEditor] Failed to create playlist",e)})).finally(p.Ay.hide)}else console.error("[PlaylistEditor] Dialog element is missing!");return e.preventDefault(),!1}function I(e){e.dispatchEvent(new CustomEvent("change",{}))}function q(e,t,i){e?Promise.resolve().then(l.bind(l,46345)).then((function(l){var o=i?"on":"off";l.centerFocus[o](e,t)})).catch((function(e){console.error("[PlaylistEditor] failed to load scroll helper",e)})):console.error("[PlaylistEditor] cannot focus null element")}l(10353),l(98959),l(15453),l(63001);var C=function(){function e(){}return e.prototype.show=function(e){var t,l=e.items||[];i=e.serverId;var r={removeOnClose:!0,scrollY:!1,size:h.A.tv?"fullscreen":"small"},s=m.default.createDialog(r);s.classList.add("formDialog");var u="",g=c.Ay.translate("HeaderAddToPlaylist");return u+='<div class="formDialogHeader">',u+='<button is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1" title="'.concat(c.Ay.translate("ButtonBack"),'"><span class="material-icons arrow_back" aria-hidden="true"></span></button>'),u+='<h3 class="formDialogHeaderTitle">',u+=g,u+="</h3>",u+="</div>",u+=function(e){var t="";t+='<div class="formDialogContent smoothScrollY" style="padding-top:2em;">',t+='<div class="dialogContentInner dialog-content-centered">',t+='<form style="margin:auto;">',t+='<div class="fldSelectPlaylist selectContainer">';var l=e.length?" autofocus":"";return t+='<select is="emby-select" id="selectPlaylistToAddTo" label="'.concat(c.Ay.translate("LabelPlaylist"),'"').concat(l,"></select>"),t+="</div>",t+='<div class="newPlaylistInfo">',t+='<div class="inputContainer">',l=e.length?"":" autofocus",t+='<input is="emby-input" type="text" id="txtNewPlaylistName" required="required" label="'.concat(c.Ay.translate("LabelName"),'"').concat(l," />"),t+="</div>",t+="</div>",t+='<div class="formDialogFooter">',t+='<button is="emby-button" type="submit" class="raised btnSubmit block formDialogFooterItem button-submit">'.concat(c.Ay.translate("Add"),"</button>"),t+="</div>",t+='<input type="hidden" class="fldSelectedItemIds" />',t+="</form>",(t+="</div>")+"</div>"}(l),s.innerHTML=u,function(e,t,l){var r,s,u,m;null===(r=e.querySelector("#selectPlaylistToAddTo"))||void 0===r||r.addEventListener("change",(function(){var t,l,i,o;this.value?(null===(t=e.querySelector(".newPlaylistInfo"))||void 0===t||t.classList.add("hide"),null===(l=e.querySelector("#txtNewPlaylistName"))||void 0===l||l.removeAttribute("required")):(null===(i=e.querySelector(".newPlaylistInfo"))||void 0===i||i.classList.remove("hide"),null===(o=e.querySelector("#txtNewPlaylistName"))||void 0===o||o.setAttribute("required","required"))})),null===(s=e.querySelector("form"))||void 0===s||s.addEventListener("submit",A);var h=e.querySelector(".fldSelectedItemIds");if(h&&(h.value=l.join(",")),l.length)null===(u=e.querySelector(".fldSelectPlaylist"))||void 0===u||u.classList.remove("hide"),function(e,t){var l,r,s=t.querySelector("#selectPlaylistToAddTo");if(!s)return Promise.reject(new Error("Playlist <select> element is missing"));p.Ay.show(),null===(l=t.querySelector(".newPlaylistInfo"))||void 0===l||l.classList.add("hide");var u=S.A.getApiClient(i),m=(0,f.C)(u),h=null===(r=b.X.firstOfType(y.Q.SyncPlay))||void 0===r?void 0:r.instance;return(0,a.n)(m).getItems({userId:u.getCurrentUserId(),includeItemTypes:[o.D.Playlist],sortBy:[n.B.SortName],recursive:!0}).then((function(t){var l,i=t.data,o="";(!1!==e.enableAddToPlayQueue&&P.f.isPlaying()||(null==h?void 0:h.Manager.isSyncPlayEnabled()))&&(o+='<option value="queue">'.concat(c.Ay.translate("AddToPlayQueue"),"</option>")),o+='<option value="">'.concat(c.Ay.translate("OptionNew"),"</option>"),o+=null===(l=i.Items)||void 0===l?void 0:l.map((function(e){return'<option value="'.concat(e.Id,'">').concat(d()(e.Name),"</option>")})),s.innerHTML=o;var n=e.defaultValue;n||(n=v.currentSettings.get("playlisteditor-lastplaylistid")||""),s.value="new"===n?"":n,s.value||(s.value=""),I(s)}))}(t,e).catch((function(e){console.error("[PlaylistEditor] failed to populate playlists",e)})).finally(p.Ay.hide);else{null===(m=e.querySelector(".fldSelectPlaylist"))||void 0===m||m.classList.add("hide");var g=e.querySelector("#selectPlaylistToAddTo");g&&(g.innerHTML="",g.value="",I(g))}}(s,e,l),null===(t=s.querySelector(".btnCancel"))||void 0===t||t.addEventListener("click",(function(){m.default.close(s)})),h.A.tv&&q(s.querySelector(".formDialogContent"),!1,!0),m.default.open(s).then((function(){return h.A.tv&&q(s.querySelector(".formDialogContent"),!1,!1),s.submitted?Promise.resolve():Promise.reject(new Error)}))},e}();t.default=C}}]);