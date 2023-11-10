"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[21341],{21341:function(e,t,i){i.r(t),i.d(t,{default:function(){return v}}),i(13227),i(81414),i(37666),i(14011),i(11431);var n,s,a,o,l=i(93355),r=i(94994),d=i(30325),c=i(28540),u=i(54517),p=(i(38228),i(85500),i(62033),i(61414),i(18613)),m=!1;function f(e){m=e,l.default.close(n)}function b(e){var t=this,i=p.Z.getApiClient(a);return i.getLiveTvTimer(s).then((function(e){e.PrePaddingSeconds=60*t.querySelector("#txtPrePaddingMinutes").value,e.PostPaddingSeconds=60*t.querySelector("#txtPostPaddingMinutes").value,i.updateLiveTvTimer(e).then(o)})),e.preventDefault(),!1}var v={show:function(e,t,v){return new Promise((function(h){m=!1,a=t,c.ZP.show(),v=v||{},o=h;var g={removeOnClose:!0,scrollY:!1};d.Z.tv&&(g.size="fullscreen");var y=l.default.createDialog(g);y.classList.add("formDialog"),y.classList.add("recordingDialog"),d.Z.tv||(y.style["min-width"]="20%",y.classList.add("dialog-fullscreen-lowres"));var L,x="";x+=r.ZP.translateHtml('<div class="formDialogHeader"> <button is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1" title="${ButtonBack}"><span class="material-icons arrow_back" aria-hidden="true"></span></button> <h3 class="formDialogHeaderTitle"> ${HeaderRecordingOptions} </h3> </div> <div class="formDialogContent smoothScrollY"> <div class="dialogContentInner dialog-content-centered"> <form> <br/> <div class="inputContainer"> <div class="flex align-items-center"> <div class="flex-grow"> <input is="emby-input" type="number" id="txtPrePaddingMinutes" pattern="[0-9]*" required="required" min="0" step="1" label="${LabelStartWhenPossible}"/> </div> <div class="fieldDescription" style="margin-left:.5em;font-size:90%;margin-top:1.3em"> ${MinutesBefore} </div> </div> </div> <div class="inputContainer"> <div class="flex align-items-center"> <div class="flex-grow"> <input is="emby-input" type="number" id="txtPostPaddingMinutes" pattern="[0-9]*" required="required" min="0" step="1" label="${LabelStopWhenPossible}"/> </div> <div class="fieldDescription" style="margin-left:.5em;font-size:90%;margin-top:1.3em"> ${MinutesAfter} </div> </div> </div> <br/> <div class="formDialogFooter"> <button is="emby-button" type="submit" class="raised btnSubmit block formDialogFooterItem button-submit hide"> <span>${Save}</span> </button> <button is="emby-button" type="button" class="raised btnCancelRecording block formDialogFooterItem button-cancel" style="white-space:nowrap"> <span>${HeaderCancelRecording}</span> </button> </div> </form> </div> </div> ',"core"),y.innerHTML=x,!1===v.enableCancel&&y.querySelector(".formDialogFooter").classList.add("hide"),n=y,y.addEventListener("closing",(function(){m||y.querySelector(".btnSubmit").click()})),y.addEventListener("close",(function(){m&&h({updated:!0,deleted:!0})})),d.Z.tv&&u.default.centerFocus.on(y.querySelector(".formDialogContent"),!1),(L=y).querySelector(".btnCancel").addEventListener("click",(function(){f(!1)})),L.querySelector(".btnCancelRecording").addEventListener("click",(function(){var e,t;(e=p.Z.getApiClient(a),t=s,i.e(30531).then(i.bind(i,30531)).then((function(i){i.default.cancelTimerWithConfirmation(t,e.serverId())}))).then((function(){f(!0)}))})),L.querySelector("form").addEventListener("submit",b),function(e,t){c.ZP.show(),s=t,p.Z.getApiClient(a).getLiveTvTimer(t).then((function(t){!function(e,t){e.querySelector("#txtPrePaddingMinutes").value=t.PrePaddingSeconds/60,e.querySelector("#txtPostPaddingMinutes").value=t.PostPaddingSeconds/60,c.ZP.hide()}(e,t),c.ZP.hide()}))}(y,e),l.default.open(y)}))}}},85500:function(e,t,i){i(67752),i(38228);var n=Object.create(HTMLDivElement.prototype);function s(){var e=this,t=e.parentNode.querySelector(".collapseContent");t.expanded?(t.expanded=!1,function(e,t){requestAnimationFrame((function(){t.style.height=t.offsetHeight+"px",t.offsetHeight,t.classList.remove("expanded"),t.style.height="0",setTimeout((function(){t.classList.contains("expanded")?t.classList.remove("hide"):t.classList.add("hide")}),300),e.querySelector(".material-icons").classList.remove("emby-collapse-expandIconExpanded")}))}(e,t)):(t.expanded=!0,function(e,t){requestAnimationFrame((function(){t.classList.remove("hide"),t.classList.add("expanded"),t.style.height="auto";var i=t.offsetHeight+"px";t.style.height="0",t.offsetHeight,t.style.height=i,setTimeout((function(){t.classList.contains("expanded")?t.classList.remove("hide"):t.classList.add("hide"),t.style.height="auto"}),300),e.querySelector(".material-icons").classList.add("emby-collapse-expandIconExpanded")}))}(e,t))}n.attachedCallback=function(){if(!this.classList.contains("emby-collapse")){this.classList.add("emby-collapse");var e=this.querySelector(".collapseContent");e&&e.classList.add("hide");var t=this.getAttribute("title"),i='<button is="emby-button" type="button" on-click="toggleExpand" id="expandButton" class="emby-collapsible-button iconRight"><h3 class="emby-collapsible-title" title="'+t+'">'+t+'</h3><span class="material-icons emby-collapse-expandIcon expand_more" aria-hidden="true"></span></button>';this.insertAdjacentHTML("afterbegin",i);var n=this.querySelector(".emby-collapsible-button");n.addEventListener("click",s),"true"===this.getAttribute("data-expanded")&&s.call(n)}},document.registerElement("emby-collapse",{prototype:n,extends:"div"})}}]);