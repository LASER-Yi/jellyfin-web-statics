"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[102,763],{10763:function(e,t,i){function a(e,t){var i=[];switch(e.textSize||""){case"smaller":i.push({name:"font-size",value:".8em"});break;case"small":i.push({name:"font-size",value:"inherit"});break;case"larger":i.push({name:"font-size",value:"2em"});break;case"extralarge":i.push({name:"font-size",value:"2.2em"});break;case"large":i.push({name:"font-size",value:"1.72em"});break;default:i.push({name:"font-size",value:"1.36em"})}switch("bold"===(e.textWeight||"")?i.push({name:"font-weight",value:"bold"}):i.push({name:"font-weight",value:"normal"}),e.dropShadow||""){case"raised":i.push({name:"text-shadow",value:"-1px -1px white, 0px -1px white, -1px 0px white, 1px 1px black, 0px 1px black, 1px 0px black"});break;case"depressed":i.push({name:"text-shadow",value:"1px 1px white, 0px 1px white, 1px 0px white, -1px -1px black, 0px -1px black, -1px 0px black"});break;case"uniform":i.push({name:"text-shadow",value:"-1px 0px #000000, 0px 1px #000000, 1px 0px #000000, 0px -1px #000000"});break;case"none":i.push({name:"text-shadow",value:"none"});break;default:i.push({name:"text-shadow",value:"#000000 0px 0px 7px"})}var a=e.textBackground||"transparent";a&&i.push({name:"background-color",value:a});var n=e.textColor||"#ffffff";switch(n&&i.push({name:"color",value:n}),e.font||""){case"typewriter":i.push({name:"font-family",value:'"Courier New",monospace'}),i.push({name:"font-variant",value:"none"});break;case"print":i.push({name:"font-family",value:"Georgia,Times New Roman,Arial,Helvetica,serif"}),i.push({name:"font-variant",value:"none"});break;case"console":i.push({name:"font-family",value:"Consolas,Lucida Console,Menlo,Monaco,monospace"}),i.push({name:"font-variant",value:"none"});break;case"cursive":i.push({name:"font-family",value:"Lucida Handwriting,Brush Script MT,Segoe Script,cursive,Quintessential,system-ui,-apple-system,BlinkMacSystemFont,sans-serif"}),i.push({name:"font-variant",value:"none"});break;case"casual":i.push({name:"font-family",value:"Gabriola,Segoe Print,Comic Sans MS,Chalkboard,Short Stack,system-ui,-apple-system,BlinkMacSystemFont,sans-serif"}),i.push({name:"font-variant",value:"none"});break;case"smallcaps":i.push({name:"font-family",value:"Copperplate Gothic,Copperplate Gothic Bold,Copperplate,system-ui,-apple-system,BlinkMacSystemFont,sans-serif"}),i.push({name:"font-variant",value:"small-caps"});break;default:i.push({name:"font-family",value:"inherit"}),i.push({name:"font-variant",value:"none"})}if(!t){var l=parseInt(e.verticalPosition,10),o=Math.abs(1.35*l);l<0?(i.push({name:"min-height",value:"".concat(o,"em")}),i.push({name:"margin-top",value:""})):(i.push({name:"min-height",value:""}),i.push({name:"margin-top",value:"".concat(o,"em")}))}return i}function n(e,t){var i=[];return t||(parseInt(e.verticalPosition,10)<0?(i.push({name:"top",value:""}),i.push({name:"bottom",value:"0"})):(i.push({name:"top",value:"0"}),i.push({name:"bottom",value:""}))),i}function l(e,t){return{text:a(e,t),window:n(e,t)}}function o(e,t){for(var i=0,a=e.length;i<a;i++){var n=e[i];t.style[n.name]=n.value}}function s(e,t){var i=l(t,!!e.preview);e.text&&o(i.text,e.text),e.window&&o(i.window,e.window)}i.r(t),i.d(t,{applyStyles:function(){return s},getStyles:function(){return l}}),i(32081),t.default={getStyles:l,applyStyles:s}},11237:function(e,t,i){i.r(t),i.d(t,{default:function(){return P}}),i(48410),i(99785);var a,n=i(94994),l=i(84881),o=i(59858),s=i(34643),r=i(30325),u=i(28540),c=i(10763),p=function(e,t){var i="";i+="<option value=''>"+n.ZP.translate("AnyLanguage")+"</option>";for(var a=0,l=t.length;a<l;a++){var o=t[a];i+="<option value='"+o.ThreeLetterISOLanguageName+"'>"+o.DisplayName+"</option>"}e.innerHTML=i},v=i(72365),d=i(47005),f=(i(15856),i(42855),i(62033),i(12291),i(18613)),b=i(56663);function m(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function h(e){return{textSize:e.querySelector("#selectTextSize").value,textWeight:e.querySelector("#selectTextWeight").value,dropShadow:e.querySelector("#selectDropShadow").value,font:e.querySelector("#selectFont").value,textBackground:e.querySelector("#inputTextBackground").value,textColor:r.Z.tv?e.querySelector("#selectTextColor").value:e.querySelector("#inputTextColor").value,verticalPosition:e.querySelector("#sliderVerticalPosition").value}}function S(e){for(var t=v.ZP.parentWithClass(e.target,"subtitlesettings"),i=t.querySelectorAll(".subtitlesHelp"),a=0,n=i.length;a<n;a++)i[a].classList.add("hide");t.querySelector(".subtitles"+this.value+"Help").classList.remove("hide")}function y(e){var t=v.ZP.parentWithClass(e.target,"subtitlesettings"),i=h(t),a={window:t.querySelector(".subtitleappearance-preview-window"),text:t.querySelector(".subtitleappearance-preview-text"),preview:!0};c.default.applyStyles(a,i),c.default.applyStyles({window:t.querySelector(".subtitleappearance-fullpreview-window"),text:t.querySelector(".subtitleappearance-fullpreview-text")},i)}function g(e){clearTimeout(a),this._fullPreview.classList.remove("subtitleappearance-fullpreview-hide"),e&&this._refFullPreview++,0===this._refFullPreview&&(a=setTimeout(x.bind(this),1e3))}function x(e){clearTimeout(a),e&&this._refFullPreview--,0===this._refFullPreview&&this._fullPreview.classList.add("subtitleappearance-fullpreview-hide")}var w=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=t,function(e,t){if(e.element.classList.add("subtitlesettings"),e.element.innerHTML=n.ZP.translateHtml('<form style="margin:0 auto"> <div class="verticalSection"> <h2 class="sectionTitle"> ${Subtitles} </h2> <div class="selectContainer"> <select is="emby-select" id="selectSubtitleLanguage" label="${LabelPreferredSubtitleLanguage}"></select> </div> <div class="selectContainer"> <select is="emby-select" id="selectSubtitlePlaybackMode" label="${LabelSubtitlePlaybackMode}"> <option value="Default">${Default}</option> <option value="Smart">${Smart}</option> <option value="OnlyForced">${OnlyForcedSubtitles}</option> <option value="Always">${AlwaysPlaySubtitles}</option> <option value="None">${None}</option> </select> <div class="fieldDescription subtitlesDefaultHelp subtitlesHelp hide">${DefaultSubtitlesHelp}</div> <div class="fieldDescription subtitlesSmartHelp subtitlesHelp hide">${SmartSubtitlesHelp}</div> <div class="fieldDescription subtitlesAlwaysHelp subtitlesHelp hide">${AlwaysPlaySubtitlesHelp}</div> <div class="fieldDescription subtitlesOnlyForcedHelp subtitlesHelp hide">${OnlyForcedSubtitlesHelp}</div> <div class="fieldDescription subtitlesNoneHelp subtitlesHelp hide">${NoSubtitlesHelp}</div> </div> <div class="selectContainer fldBurnIn hide"> <select is="emby-select" id="selectSubtitleBurnIn" label="${LabelBurnSubtitles}"> <option value="">${Auto}</option> <option value="onlyimageformats">${OnlyImageFormats}</option> <option value="allcomplexformats">${AllComplexFormats}</option> <option value="all">${All}</option> </select> <div class="fieldDescription">${BurnSubtitlesHelp}</div> </div> </div> <div class="verticalSection subtitleAppearanceSection hide"> <h2 class="sectionTitle"> ${HeaderSubtitleAppearance} </h2> <div class="subtitleappearance-fullpreview subtitleappearance-fullpreview-hide"> <div class="subtitleappearance-fullpreview-window"> <div class="subtitleappearance-fullpreview-text"> ${HeaderSubtitleAppearance} <br> ${TheseSettingsAffectSubtitlesOnThisDevice} </div> </div> </div> <div style="margin:2em 0 2em"> <div class="subtitleappearance-preview flex align-items-center justify-content-center" style="margin:2em 0;padding:1.6em;color:#000;background:linear-gradient(140deg,#aa5cc3,#00a4dc)"> <div class="subtitleappearance-preview-window flex align-items-center justify-content-center" style="width:90%;padding:.25em"> <div class="subtitleappearance-preview-text flex align-items-center justify-content-center"> ${TheseSettingsAffectSubtitlesOnThisDevice} </div> </div> </div> <div class="fieldDescription">${SubtitleAppearanceSettingsDisclaimer}</div> <div class="fieldDescription">${SubtitleAppearanceSettingsAlsoPassedToCastDevices}</div> </div> <div class="selectContainer"> <select is="emby-select" id="selectTextSize" label="${LabelTextSize}"> <option value="smaller">${Smaller}</option> <option value="small">${Small}</option> <option value="">${Normal}</option> <option value="large">${Large}</option> <option value="larger">${Larger}</option> <option value="extralarge">${ExtraLarge}</option> </select> </div> <div class="selectContainer"> <select is="emby-select" id="selectTextWeight" label="${LabelTextWeight}"> <option value="normal">${Normal}</option> <option value="bold">${Bold}</option> </select> </div> <div class="selectContainer"> <select is="emby-select" id="selectFont" label="${LabelFont}"> <option value="">${Default}</option> <option value="typewriter">${Typewriter}</option> <option value="print">${Print}</option> <option value="console">${Console}</option> <option value="cursive">${Cursive}</option> <option value="casual">${Casual}</option> <option value="smallcaps">${SmallCaps}</option> </select> </div> <div class="inputContainer hide"> <input is="emby-input" id="inputTextBackground" label="${LabelTextBackgroundColor}" type="text"/> </div> <div class="selectContainer"> <input is="emby-input" id="inputTextColor" label="${LabelTextColor}" type="color"/> </div> <div class="selectContainer hide"> <select is="emby-select" id="selectTextColor" label="${LabelTextColor}"> <option value="#ffffff">${White}</option> <option value="#ffff00">${Yellow}</option> <option value="#008000">${Green}</option> <option value="#00ffff">${Cyan}</option> <option value="#0000ff">${Blue}</option> <option value="#ff00ff">${Magenta}</option> <option value="#ff0000">${Red}</option> <option value="#000000">${Black}</option> </select> </div> <div class="selectContainer"> <select is="emby-select" id="selectDropShadow" label="${LabelDropShadow}"> <option value="none">${None}</option> <option value="raised">${Raised}</option> <option value="depressed">${Depressed}</option> <option value="uniform">${Uniform}</option> <option value="">${DropShadow}</option> </select> </div> <div class="sliderContainer-settings"> <div class="sliderContainer"> <input is="emby-slider" id="sliderVerticalPosition" label="${LabelSubtitleVerticalPosition}" type="range" min="-16" max="16"/> </div> <div class="fieldDescription">${SubtitleVerticalPositionHelp}</div> </div> <div class="checkboxContainer"> <label> <input is="emby-checkbox" type="checkbox" class="chkPreview"/> <span>${Preview}</span> </label> </div> </div> <button is="emby-button" type="submit" class="raised button-submit block btnSave hide"> <span>${Save}</span> </button> </form> ',"core"),e.element.querySelector("form").addEventListener("submit",t.onSubmit.bind(t)),e.element.querySelector("#selectSubtitlePlaybackMode").addEventListener("change",S),e.element.querySelector("#selectTextSize").addEventListener("change",y),e.element.querySelector("#selectTextWeight").addEventListener("change",y),e.element.querySelector("#selectDropShadow").addEventListener("change",y),e.element.querySelector("#selectFont").addEventListener("change",y),e.element.querySelector("#selectTextColor").addEventListener("change",y),e.element.querySelector("#inputTextColor").addEventListener("change",y),e.element.querySelector("#inputTextBackground").addEventListener("change",y),e.enableSaveButton&&e.element.querySelector(".btnSave").classList.remove("hide"),l.M.supports("subtitleappearancesettings")){e.element.querySelector(".subtitleAppearanceSection").classList.remove("hide"),t._fullPreview=e.element.querySelector(".subtitleappearance-fullpreview"),t._refFullPreview=0;var i=e.element.querySelector("#sliderVerticalPosition");i.addEventListener("input",y),i.addEventListener("input",(function(){return g.call(t)}));var a=window.PointerEvent?"pointer":"mouse";i.addEventListener("".concat(a,"enter"),(function(){return g.call(t,!0)})),i.addEventListener("".concat(a,"leave"),(function(){return x.call(t,!0)})),r.Z.tv&&(i.addEventListener("focus",(function(){return g.call(t,!0)})),i.addEventListener("blur",(function(){return x.call(t,!0)})),setTimeout((function(){i.classList.add("focusable"),i.enableKeyboardDragging()}),0),v.ZP.parentWithTag(e.element.querySelector("#inputTextColor"),"DIV").classList.add("hide"),v.ZP.parentWithTag(e.element.querySelector("#selectTextColor"),"DIV").classList.remove("hide")),e.element.querySelector(".chkPreview").addEventListener("change",(function(e){e.target.checked?g.call(t,!0):x.call(t,!0)}))}t.loadData(),e.autoFocus&&s.Z.autoFocus(e.element)}(t,this)}var t,i;return t=e,i=[{key:"loadData",value:function(){var e=this,t=e.options.element;u.ZP.show();var i=e.options.userId,a=f.Z.getApiClient(e.options.serverId),n=e.options.userSettings;a.getUser(i).then((function(s){n.setUserInfo(i,a).then((function(){e.dataLoaded=!0;var i=n.getSubtitleAppearanceSettings(e.options.appearanceKey);!function(e,t,i,a,n){n.getCultures().then((function(i){l.M.supports("subtitleburnsettings")&&t.Policy.EnableVideoPlaybackTranscoding&&e.querySelector(".fldBurnIn").classList.remove("hide");var n=e.querySelector("#selectSubtitleLanguage");p(n,i),n.value=t.Configuration.SubtitleLanguagePreference||"",e.querySelector("#selectSubtitlePlaybackMode").value=t.Configuration.SubtitleMode||"",e.querySelector("#selectSubtitlePlaybackMode").dispatchEvent(new CustomEvent("change",{})),e.querySelector("#selectTextSize").value=a.textSize||"",e.querySelector("#selectTextWeight").value=a.textWeight||"normal",e.querySelector("#selectDropShadow").value=a.dropShadow||"",e.querySelector("#inputTextBackground").value=a.textBackground||"transparent",e.querySelector("#selectTextColor").value=a.textColor||"#ffffff",e.querySelector("#inputTextColor").value=a.textColor||"#ffffff",e.querySelector("#selectFont").value=a.font||"",e.querySelector("#sliderVerticalPosition").value=a.verticalPosition,e.querySelector("#selectSubtitleBurnIn").value=o.Z.get("subtitleburnin")||"",y({target:e.querySelector("#selectTextSize")}),u.ZP.hide()}))}(t,s,0,i,a)}))}))}},{key:"submit",value:function(){this.onSubmit(null)}},{key:"destroy",value:function(){this.options=null}},{key:"onSubmit",value:function(e){var t=this,i=f.Z.getApiClient(t.options.serverId),a=t.options.userId,l=t.options.userSettings;return l.setUserInfo(a,i).then((function(){var e=t.options.enableSaveConfirmation;!function(e,t,i,a,l,s){u.ZP.show(),o.Z.set("subtitleburnin",t.querySelector("#selectSubtitleBurnIn").value),l.getUser(i).then((function(i){(function(e,t,i,a,n){var l=i.getSubtitleAppearanceSettings(a);return l=Object.assign(l,h(e)),i.setSubtitleAppearanceSettings(l,a),t.Configuration.SubtitleLanguagePreference=e.querySelector("#selectSubtitleLanguage").value,t.Configuration.SubtitleMode=e.querySelector("#selectSubtitlePlaybackMode").value,n.updateUserConfiguration(t.Id,t.Configuration)})(t,i,a,e.appearanceKey,l).then((function(){u.ZP.hide(),s&&(0,b.Z)(n.ZP.translate("SettingsSaved")),d.Events.trigger(e,"saved")}),(function(){u.ZP.hide()}))}))}(t,t.options.element,a,l,i,e)})),e&&e.preventDefault(),!1}}],i&&m(t.prototype,i),Object.defineProperty(t,"prototype",{writable:!1}),e}(),C=w,$=i(60934),k=i(87680),L=$.UserSettings;function P(e,t){var i,a=t.userId||ApiClient.getCurrentUserId(),n=a===ApiClient.getCurrentUserId()?$:new L;e.addEventListener("viewshow",(function(){i?i.loadData():i=new C({serverId:ApiClient.serverId(),userId:a,element:e.querySelector(".settingsContainer"),userSettings:n,enableSaveButton:!0,enableSaveConfirmation:!0,autoFocus:k.default.isEnabled()})})),e.addEventListener("viewdestroy",(function(){i&&(i.destroy(),i=null)}))}}}]);