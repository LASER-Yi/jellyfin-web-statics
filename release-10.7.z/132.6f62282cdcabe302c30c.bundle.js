(self.webpackChunk=self.webpackChunk||[]).push([[132],{80132:function(e,t,i){"use strict";i.r(t),i(5769),i(63238),i(61418),i(17460),i(14078);var n,r,o,a,s=i(1115),l=i(53754),d=i(78695),c=i(6594),u=i(74227),f=(i(2553),i(78066),i(38473),i(30983),i(21865),i(16589),i(26330),i(56561),i(93462),i(53913)),g=i(13771),m=i.n(g),v=!1;function p(e){v=e,s.default.close(n)}function b(e){var t=this,i=f.Z.getApiClient(o);return i.getLiveTvTimer(r).then((function(e){e.PrePaddingSeconds=60*t.querySelector("#txtPrePaddingMinutes").value,e.PostPaddingSeconds=60*t.querySelector("#txtPostPaddingMinutes").value,i.updateLiveTvTimer(e).then(a)})),e.preventDefault(),!1}t.default={show:function(e,t,g){return new Promise((function(h,P){v=!1,o=t,c.ZP.show(),g=g||{},a=h;var w={removeOnClose:!0,scrollY:!1};d.Z.tv&&(w.size="fullscreen");var y=s.default.createDialog(w);y.classList.add("formDialog"),y.classList.add("recordingDialog"),d.Z.tv||(y.style["min-width"]="20%",y.classList.add("dialog-fullscreen-lowres"));var x,S="";S+=l.ZP.translateHtml(m(),"core"),y.innerHTML=S,!1===g.enableCancel&&y.querySelector(".formDialogFooter").classList.add("hide"),n=y,y.addEventListener("closing",(function(){v||y.querySelector(".btnSubmit").click()})),y.addEventListener("close",(function(){v&&h({updated:!0,deleted:!0})})),d.Z.tv&&u.default.centerFocus.on(y.querySelector(".formDialogContent"),!1),(x=y).querySelector(".btnCancel").addEventListener("click",(function(){p(!1)})),x.querySelector(".btnCancelRecording").addEventListener("click",(function(){var e,t;(e=f.Z.getApiClient(o),t=r,Promise.resolve().then(i.bind(i,58104)).then((function(i){i.default.cancelTimerWithConfirmation(t,e.serverId())}))).then((function(){p(!0)}))})),x.querySelector("form").addEventListener("submit",b),function(e,t){c.ZP.show(),r=t,f.Z.getApiClient(o).getLiveTvTimer(t).then((function(t){!function(e,t,i){e.querySelector("#txtPrePaddingMinutes").value=t.PrePaddingSeconds/60,e.querySelector("#txtPostPaddingMinutes").value=t.PostPaddingSeconds/60,c.ZP.hide()}(e,t),c.ZP.hide()}))}(y,e),s.default.open(y)}))}}},94921:function(e,t,i){"use strict";var n=i(93476),r=i.n(n)()((function(e){return e[1]}));r.push([e.id,".recordingDialog-imageContainer{-webkit-flex-shrink:0;flex-shrink:0;padding:1em 1em 1em 0;width:25%}.recordingDialog-img{width:100%}.recordingDialog-itemName{margin-top:.7em}.recordingDetailsContainer{display:-webkit-flex;display:flex}.recordingDetails{-webkit-flex-grow:1;flex-grow:1}.recordingDetailText{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;-webkit-flex-wrap:wrap;flex-wrap:wrap}",""]),t.Z=r},13771:function(e){e.exports='<div class="formDialogHeader"> <button is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1"><span class="material-icons arrow_back"></span></button> <h3 class="formDialogHeaderTitle"> ${HeaderRecordingOptions} </h3> </div> <div class="formDialogContent smoothScrollY"> <div class="dialogContentInner dialog-content-centered"> <form> <br/> <div class="inputContainer"> <div class="flex align-items-center"> <div class="flex-grow"> <input is="emby-input" type="number" id="txtPrePaddingMinutes" pattern="[0-9]*" required="required" min="0" step="1" label="${LabelStartWhenPossible}"/> </div> <div class="fieldDescription" style="margin-left:.5em;font-size:90%;margin-top:1.3em"> ${MinutesBefore} </div> </div> </div> <div class="inputContainer"> <div class="flex align-items-center"> <div class="flex-grow"> <input is="emby-input" type="number" id="txtPostPaddingMinutes" pattern="[0-9]*" required="required" min="0" step="1" label="${LabelStopWhenPossible}"/> </div> <div class="fieldDescription" style="margin-left:.5em;font-size:90%;margin-top:1.3em"> ${MinutesAfter} </div> </div> </div> <br/> <div class="formDialogFooter"> <button is="emby-button" type="submit" class="raised btnSubmit block formDialogFooterItem button-submit hide"> <span>${Save}</span> </button> <button is="emby-button" type="button" class="raised btnCancelRecording block formDialogFooterItem button-cancel" style="white-space:nowrap"> <span>${HeaderCancelRecording}</span> </button> </div> </form> </div> </div> '},26330:function(e,t,i){"use strict";var n=i(1892),r=i.n(n),o=i(94921);r()(o.Z,{insert:"head",singleton:!1}),o.Z.locals}}]);