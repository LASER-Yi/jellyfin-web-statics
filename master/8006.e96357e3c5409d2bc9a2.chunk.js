"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8006],{58006:function(e,t,o){o.r(t),o.d(t,{default:function(){return a}}),o(5769),o(63238),o(61418),o(17460),o(14078);var n=o(93355),r=o(30325),l=o(94994);function i(e,t,n){Promise.resolve().then(o.bind(o,54517)).then((function(o){var r=n?"on":"off";o.centerFocus[r](e,t)}))}o(61414),o(62033),o(15856);var a={show:function(e){return new Promise((function(t,o){var a={removeOnClose:!0,scrollY:!1};r.Z.tv?a.size="fullscreen":a.size="small";var s=n.default.createDialog(a);s.classList.add("formDialog");var c="",u=!1;c+=l.ZP.translateHtml('<div class="formDialogHeader"> <button is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1" title="${ButtonBack}"><span class="material-icons arrow_back" aria-hidden="true"></span></button> <h3 class="formDialogHeaderTitle"> ${Edit} </h3> </div> <div class="formDialogContent smoothScrollY" style="padding-top:2em"> <form class="popupEditPersonForm dialogContentInner dialog-content-centered"> <div class="inputContainer"> <input type="text" is="emby-input" class="txtPersonName" required="required" label="${LabelName}"/> </div> <div class="selectContainer"> <select is="emby-select" id="selectPersonType" class="selectPersonType" label="${LabelType}"> <option value=""></option> <option value="Actor">${Actor}</option> <option value="Composer">${Composer}</option> <option value="Director">${Director}</option> <option value="GuestStar">${GuestStar}</option> <option value="Producer">${Producer}</option> <option value="Writer">${Writer}</option> <option value="Conductor">${Conductor}</option> <option value="Lyricist">${Lyricist}</option> <option value="Arranger">${Arranger}</option> <option value="Engineer">${Engineer}</option> <option value="Mixer">${Mixer}</option> <option value="Remixer">${Remixer}</option> </select> </div> <div class="inputContainer fldRole hide"> <input is="emby-input" type="text" class="txtPersonRole" label="${LabelPersonRole}"/> <div class="fieldDescription">${LabelPersonRoleHelp}</div> </div> <div class="formDialogFooter"> <button is="emby-button" type="submit" class="raised button-submit block formDialogFooterItem"> <span>${Save}</span> </button> </div> </form> </div> ',"core"),s.innerHTML=c,s.querySelector(".txtPersonName",s).value=e.Name||"",s.querySelector(".selectPersonType",s).value=e.Type||"",s.querySelector(".txtPersonRole",s).value=e.Role||"",r.Z.tv&&i(s.querySelector(".formDialogContent"),!1,!0),n.default.open(s),s.addEventListener("close",(function(){r.Z.tv&&i(s.querySelector(".formDialogContent"),!1,!1),u?t(e):o()})),s.querySelector(".selectPersonType").addEventListener("change",(function(){"Actor"===this.value?s.querySelector(".fldRole").classList.remove("hide"):s.querySelector(".fldRole").classList.add("hide")})),s.querySelector(".btnCancel").addEventListener("click",(function(){n.default.close(s)})),s.querySelector("form").addEventListener("submit",(function(t){return u=!0,e.Name=s.querySelector(".txtPersonName",s).value,e.Type=s.querySelector(".selectPersonType",s).value,e.Role=s.querySelector(".txtPersonRole",s).value||null,n.default.close(s),t.preventDefault(),!1})),s.querySelector(".selectPersonType").dispatchEvent(new CustomEvent("change",{bubbles:!0}))}))}}}}]);