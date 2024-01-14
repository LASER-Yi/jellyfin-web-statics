"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[20102,12801,49213,31473,10763],{12801:function(e,t,n){n.r(t),n.d(t,{show:function(){return v}}),n(13227),n(81414),n(37666),n(14011),n(11431),n(44901),n(88646),n(54134),n(91270),n(59139),n(56187),n(38690),n(89228);var i=n(65009),a=n.n(i),r=n(93355),l=n(30325),o=n(94994),s=n(72365);function u(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,a=function(){};return{s:a,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,o=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){o=!0,r=e},f:function(){try{l||null==n.return||n.return()}finally{if(o)throw r}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function d(e,t,i){Promise.resolve().then(n.bind(n,54517)).then((function(n){var a=i?"on":"off";n.centerFocus[a](e,t)}))}function v(e){var t,n={removeOnClose:!0,enableHistory:e.enableHistory,scrollY:!1};l.Z.tv?(n.size="fullscreen",t=!0,n.autoFocus=!0):(n.modal=!1,n.entryAnimation=e.entryAnimation,n.exitAnimation=e.exitAnimation,n.entryAnimationDuration=e.entryAnimationDuration||140,n.exitAnimationDuration=e.exitAnimationDuration||100,n.autoFocus=!1);var i=r.default.createDialog(n);t?i.classList.add("actionsheet-fullscreen"):i.classList.add("actionsheet-not-fullscreen"),i.classList.add("actionSheet"),e.dialogClass&&i.classList.add(e.dialogClass);var c="",v=l.Z.tv?"scrollY smoothScrollY hiddenScrollY":"scrollY",p="";e.items.length>20&&(p+="min-width:"+(s.ZP.getWindowSize().innerWidth>=300?240:200)+"px;");var m,f,h=!1,b=[],g=u(e.items);try{for(g.s();!(f=g.n()).done;){var y=f.value;(m=y.icon||(y.selected?"check":null))&&(h=!0),b.push(m||"")}}catch(e){g.e(e)}finally{g.f()}l.Z.tv&&(c+='<button is="paper-icon-button-light" class="btnCloseActionSheet hide-mouse-idle-tv" tabindex="-1" title="'.concat(o.ZP.translate("ButtonBack"),'">\n                     <span class="material-icons arrow_back" aria-hidden="true"></span>\n                 </button>'));var S=e.title&&!h;S||l.Z.tv?c+='<div class="actionSheetContent actionSheetContent-centered">':c+='<div class="actionSheetContent">',e.title&&(c+='<h1 class="actionSheetTitle">'+a()(e.title)+"</h1>"),e.text&&(c+='<p class="actionSheetText">'+a()(e.text)+"</p>");var w="actionSheetScroller";l.Z.tv&&(w+=" actionSheetScroller-tv focuscontainer-x focuscontainer-y"),c+='<div class="'+w+" "+v+'" style="'+p+'">';var x="listItem listItem-button actionSheetMenuItem";(e.border||e.shaded)&&(x+=" listItem-border"),e.menuItemClass&&(x+=" "+e.menuItemClass),l.Z.tv&&(x+=" listItem-focusscale"),l.Z.mobile&&(x+=" actionsheet-xlargeFont");for(var L=0;L<e.items.length;L++){var k=e.items[L];k.divider?c+='<div class="actionsheetDivider"></div>':(c+="<button"+(k.selected&&l.Z.tv?" autoFocus":"")+' is="emby-button" type="button" class="'+x+'" data-id="'+(null==k.id||""===k.id?k.value:k.id)+'">',(m=b[L])?c+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons '.concat(m,'" aria-hidden="true"></span>'):h&&!S&&(c+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons check" aria-hidden="true" style="visibility:hidden;"></span>'),c+='<div class="listItemBody actionsheetListItemBody">',c+='<div class="listItemBodyText actionSheetItemText">',c+=a()(k.name||k.textContent||k.innerText),c+="</div>",k.secondaryText&&(c+='<div class="listItemBodyText secondary">'.concat(a()(k.secondaryText),"</div>")),c+="</div>",k.asideText&&(c+='<div class="listItemAside actionSheetItemAsideText">'.concat(a()(k.asideText),"</div>")),c+="</button>")}e.showCancel&&(c+='<div class="buttons">',c+='<button is="emby-button" type="button" class="btnCloseActionSheet">'.concat(o.ZP.translate("ButtonCancel"),"</button>"),c+="</div>"),c+="</div>",i.innerHTML=c,l.Z.tv&&d(i.querySelector(".actionSheetScroller"),!1,!0);var C,T,E=i.querySelector(".btnCloseActionSheet");return E&&E.addEventListener("click",(function(){r.default.close(i)})),e.timeout&&(T=setTimeout((function(){r.default.close(i)}),e.timeout)),new Promise((function(t,a){var o;i.addEventListener("click",(function(n){var a=s.ZP.parentWithClass(n.target,"actionSheetMenuItem");a&&(C=a.getAttribute("data-id"),e.resolveOnClick&&(e.resolveOnClick.indexOf?-1!==e.resolveOnClick.indexOf(C)&&(t(C),o=!0):(t(C),o=!0)),r.default.close(i))})),i.addEventListener("close",(function(){l.Z.tv&&d(i.querySelector(".actionSheetScroller"),!1,!1),T&&(clearTimeout(T),T=null),o||(null!=C?(e.callback&&e.callback(C),t(C)):a("ActionSheet closed without resolving"))})),r.default.open(i);var c=e.positionTo&&"fullscreen"!==n.size?function(e,t){var n=s.ZP.getWindowSize(),i=n.innerHeight,a=n.innerWidth,r=function(e){var t=[];if(!document)return t;var n,i=u(e);try{for(i.s();!(n=i.n()).done;){var a=n.value.getBoundingClientRect();t.push({top:a.top,left:a.left,width:a.width,height:a.height})}}catch(e){i.e(e)}finally{i.f()}return t}([e.positionTo])[0];"top"!==e.positionY&&(r.top+=(r.height||0)/2),r.left+=(r.width||0)/2;var l=t.offsetHeight||300,o=t.offsetWidth||160;r.top-=l/2,r.left-=o/2;var c=r.left+o-a,d=r.top+l-i;return c>0&&(r.left-=c+20),d>0&&(r.top-=d+20),r.top+=e.offsetTop||0,r.left+=e.offsetLeft||0,r.top=Math.max(r.top,10),r.left=Math.max(r.left,10),r}(e,i):null;c&&(i.style.position="fixed",i.style.margin=0,i.style.left=c.left+"px",i.style.top=c.top+"px")}))}n(38228),t.default={show:v}},10763:function(e,t,n){function i(e,t){var n=[];switch(e.textSize||""){case"smaller":n.push({name:"font-size",value:".8em"});break;case"small":n.push({name:"font-size",value:"inherit"});break;case"larger":n.push({name:"font-size",value:"2em"});break;case"extralarge":n.push({name:"font-size",value:"2.2em"});break;case"large":n.push({name:"font-size",value:"1.72em"});break;default:n.push({name:"font-size",value:"1.36em"})}switch("bold"===(e.textWeight||"")?n.push({name:"font-weight",value:"bold"}):n.push({name:"font-weight",value:"normal"}),e.dropShadow||""){case"raised":n.push({name:"text-shadow",value:"-0.04em -0.04em #fff, 0px -0.04em #fff, -0.04em 0px #fff, 0.04em 0.04em #000, 0px 0.04em #000, 0.04em 0px #000"});break;case"depressed":n.push({name:"text-shadow",value:"0.04em 0.04em #fff, 0px 0.04em #fff, 0.04em 0px #fff, -0.04em -0.04em #000, 0px -0.04em #000, -0.04em 0px #000"});break;case"uniform":n.push({name:"text-shadow",value:"#000 0px 0.03em, #000 0px -0.03em, #000 0px 0.05em, #000 0px -0.05em, #000 0.03em 0px, #000 -0.03em 0px, #000 0.03em 0.03em, #000 -0.03em 0.03em, #000 0.03em -0.03em, #000 -0.03em -0.03em, #000 0.03em 0.05em, #000 -0.03em 0.05em, #000 0.03em -0.05em, #000 -0.03em -0.05em, #000 0.05em 0px, #000 -0.05em 0px, #000 0.05em 0.03em, #000 -0.05em 0.03em, #000 0.05em -0.03em, #000 -0.05em -0.03em"});break;case"none":n.push({name:"text-shadow",value:"none"});break;default:n.push({name:"text-shadow",value:"#000000 0px 0px 7px"})}var i=e.textBackground||"transparent";i&&n.push({name:"background-color",value:i});var a=e.textColor||"#ffffff";switch(a&&n.push({name:"color",value:a}),e.font||""){case"typewriter":n.push({name:"font-family",value:'"Courier New",monospace'}),n.push({name:"font-variant",value:"none"});break;case"print":n.push({name:"font-family",value:"Georgia,Times New Roman,Arial,Helvetica,serif"}),n.push({name:"font-variant",value:"none"});break;case"console":n.push({name:"font-family",value:"Consolas,Lucida Console,Menlo,Monaco,monospace"}),n.push({name:"font-variant",value:"none"});break;case"cursive":n.push({name:"font-family",value:"Lucida Handwriting,Brush Script MT,Segoe Script,cursive,Quintessential,system-ui,-apple-system,BlinkMacSystemFont,sans-serif"}),n.push({name:"font-variant",value:"none"});break;case"casual":n.push({name:"font-family",value:"Gabriola,Segoe Print,Comic Sans MS,Chalkboard,Short Stack,system-ui,-apple-system,BlinkMacSystemFont,sans-serif"}),n.push({name:"font-variant",value:"none"});break;case"smallcaps":n.push({name:"font-family",value:"Copperplate Gothic,Copperplate Gothic Bold,Copperplate,system-ui,-apple-system,BlinkMacSystemFont,sans-serif"}),n.push({name:"font-variant",value:"small-caps"});break;default:n.push({name:"font-family",value:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol"}),n.push({name:"font-variant",value:"none"})}if(!t){var r=parseInt(e.verticalPosition,10),l=Math.abs(1.35*r);r<0?(n.push({name:"min-height",value:"".concat(l,"em")}),n.push({name:"margin-top",value:""})):(n.push({name:"min-height",value:""}),n.push({name:"margin-top",value:"".concat(l,"em")}))}return n}function a(e,t){var n=[];return t||(parseInt(e.verticalPosition,10)<0?(n.push({name:"top",value:""}),n.push({name:"bottom",value:"0"})):(n.push({name:"top",value:"0"}),n.push({name:"bottom",value:""}))),n}function r(e,t){return{text:i(e,t),window:a(e,t)}}function l(e,t){for(var n=0,i=e.length;n<i;n++){var a=e[n];t.style[a.name]=a.value}}function o(e,t){var n=r(t,!!e.preview);e.text&&l(n.text,e.text),e.window&&l(n.window,e.window)}n.r(t),n.d(t,{applyStyles:function(){return o},getStyles:function(){return r}}),n(54112),t.default={getStyles:r,applyStyles:o}},11237:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}}),n(62659),n(26031),n(95822),n(56187),n(38690),n(81414),n(11908),n(33096),n(89228),n(13227),n(14011),n(11431);var i=n(94994),a=n(84881),r=n(59858),l=n(34643),o=n(30325),s=n(84597),u=n(10763),c=function(e,t){var n="";n+="<option value=''>"+i.ZP.translate("AnyLanguage")+"</option>";for(var a=0,r=t.length;a<r;a++){var l=t[a];n+="<option value='"+l.ThreeLetterISOLanguageName+"'>"+l.DisplayName+"</option>"}e.innerHTML=n},d=n(72365),v=n(67561),p=(n(15856),n(42855),n(62033),n(12291),n(18613)),m=n(56663);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function h(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,b(i.key),i)}}function b(e){var t=function(e,t){if("object"!=f(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,"string");if("object"!=f(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==f(t)?t:String(t)}function g(e){return{textSize:e.querySelector("#selectTextSize").value,textWeight:e.querySelector("#selectTextWeight").value,dropShadow:e.querySelector("#selectDropShadow").value,font:e.querySelector("#selectFont").value,textBackground:e.querySelector("#inputTextBackground").value,textColor:o.Z.tv?e.querySelector("#selectTextColor").value:e.querySelector("#inputTextColor").value,verticalPosition:e.querySelector("#sliderVerticalPosition").value}}function y(e){for(var t=d.ZP.parentWithClass(e.target,"subtitlesettings"),n=t.querySelectorAll(".subtitlesHelp"),i=0,a=n.length;i<a;i++)n[i].classList.add("hide");t.querySelector(".subtitles"+this.value+"Help").classList.remove("hide")}function S(e){var t=d.ZP.parentWithClass(e.target,"subtitlesettings"),n=g(t),i={window:t.querySelector(".subtitleappearance-preview-window"),text:t.querySelector(".subtitleappearance-preview-text"),preview:!0};u.default.applyStyles(i,n),u.default.applyStyles({window:t.querySelector(".subtitleappearance-fullpreview-window"),text:t.querySelector(".subtitleappearance-fullpreview-text")},n)}var w;function x(e){clearTimeout(w),this._fullPreview.classList.remove("subtitleappearance-fullpreview-hide"),e&&this._refFullPreview++,0===this._refFullPreview&&(w=setTimeout(L.bind(this),1e3))}function L(e){clearTimeout(w),e&&this._refFullPreview--,0===this._refFullPreview&&this._fullPreview.classList.add("subtitleappearance-fullpreview-hide")}var k=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=t,function(e,t){if(e.element.classList.add("subtitlesettings"),e.element.innerHTML=i.ZP.translateHtml('<form style="margin:0 auto"> <div class="verticalSection"> <h2 class="sectionTitle"> ${Subtitles} </h2> <div class="selectContainer"> <select is="emby-select" id="selectSubtitleLanguage" label="${LabelPreferredSubtitleLanguage}"></select> </div> <div class="selectContainer"> <select is="emby-select" id="selectSubtitlePlaybackMode" label="${LabelSubtitlePlaybackMode}"> <option value="Default">${Default}</option> <option value="Smart">${Smart}</option> <option value="OnlyForced">${OnlyForcedSubtitles}</option> <option value="Always">${AlwaysPlaySubtitles}</option> <option value="None">${None}</option> </select> <div class="fieldDescription subtitlesDefaultHelp subtitlesHelp hide">${DefaultSubtitlesHelp}</div> <div class="fieldDescription subtitlesSmartHelp subtitlesHelp hide">${SmartSubtitlesHelp}</div> <div class="fieldDescription subtitlesAlwaysHelp subtitlesHelp hide">${AlwaysPlaySubtitlesHelp}</div> <div class="fieldDescription subtitlesOnlyForcedHelp subtitlesHelp hide">${OnlyForcedSubtitlesHelp}</div> <div class="fieldDescription subtitlesNoneHelp subtitlesHelp hide">${NoSubtitlesHelp}</div> </div> <div class="selectContainer fldBurnIn hide"> <select is="emby-select" id="selectSubtitleBurnIn" label="${LabelBurnSubtitles}"> <option value="">${Auto}</option> <option value="onlyimageformats">${OnlyImageFormats}</option> <option value="allcomplexformats">${AllComplexFormats}</option> <option value="all">${All}</option> </select> <div class="fieldDescription">${BurnSubtitlesHelp}</div> </div> </div> <div class="verticalSection subtitleAppearanceSection hide"> <h2 class="sectionTitle"> ${HeaderSubtitleAppearance} </h2> <div class="subtitleappearance-fullpreview subtitleappearance-fullpreview-hide"> <div class="subtitleappearance-fullpreview-window"> <div class="subtitleappearance-fullpreview-text"> ${HeaderSubtitleAppearance} <br> ${TheseSettingsAffectSubtitlesOnThisDevice} </div> </div> </div> <div style="margin:2em 0 2em"> <div class="subtitleappearance-preview flex align-items-center justify-content-center" style="margin:2em 0;padding:1.6em;color:#000;background:linear-gradient(140deg,#aa5cc3,#00a4dc)"> <div class="subtitleappearance-preview-window flex align-items-center justify-content-center" style="width:90%;padding:.25em"> <div class="subtitleappearance-preview-text flex align-items-center justify-content-center"> ${TheseSettingsAffectSubtitlesOnThisDevice} </div> </div> </div> <div class="fieldDescription">${SubtitleAppearanceSettingsDisclaimer}</div> <div class="fieldDescription">${SubtitleAppearanceSettingsAlsoPassedToCastDevices}</div> </div> <div class="selectContainer"> <select is="emby-select" id="selectTextSize" label="${LabelTextSize}"> <option value="smaller">${Smaller}</option> <option value="small">${Small}</option> <option value="">${Normal}</option> <option value="large">${Large}</option> <option value="larger">${Larger}</option> <option value="extralarge">${ExtraLarge}</option> </select> </div> <div class="selectContainer"> <select is="emby-select" id="selectTextWeight" label="${LabelTextWeight}"> <option value="normal">${Normal}</option> <option value="bold">${Bold}</option> </select> </div> <div class="selectContainer"> <select is="emby-select" id="selectFont" label="${LabelFont}"> <option value="">${Default}</option> <option value="typewriter">${Typewriter}</option> <option value="print">${Print}</option> <option value="console">${Console}</option> <option value="cursive">${Cursive}</option> <option value="casual">${Casual}</option> <option value="smallcaps">${SmallCaps}</option> </select> </div> <div class="inputContainer hide"> <input is="emby-input" id="inputTextBackground" label="${LabelTextBackgroundColor}" type="text"/> </div> <div class="selectContainer"> <input is="emby-input" id="inputTextColor" label="${LabelTextColor}" type="color"/> </div> <div class="selectContainer hide"> <select is="emby-select" id="selectTextColor" label="${LabelTextColor}"> <option value="#ffffff">${SubtitleWhite}</option> <option value="#d3d3d3">${SubtitleLightGray}</option> <option value="#808080">${SubtitleGray}</option> <option value="#ffff00">${SubtitleYellow}</option> <option value="#008000">${SubtitleGreen}</option> <option value="#00ffff">${SubtitleCyan}</option> <option value="#0000ff">${SubtitleBlue}</option> <option value="#ff00ff">${SubtitleMagenta}</option> <option value="#ff0000">${SubtitleRed}</option> <option value="#000000">${SubtitleBlack}</option> </select> </div> <div class="selectContainer"> <select is="emby-select" id="selectDropShadow" label="${LabelDropShadow}"> <option value="none">${None}</option> <option value="raised">${Raised}</option> <option value="depressed">${Depressed}</option> <option value="uniform">${Uniform}</option> <option value="">${DropShadow}</option> </select> </div> <div class="sliderContainer-settings"> <div class="sliderContainer"> <input is="emby-slider" id="sliderVerticalPosition" label="${LabelSubtitleVerticalPosition}" type="range" min="-16" max="16"/> </div> <div class="fieldDescription">${SubtitleVerticalPositionHelp}</div> </div> <div class="checkboxContainer"> <label> <input is="emby-checkbox" type="checkbox" class="chkPreview"/> <span>${Preview}</span> </label> </div> </div> <button is="emby-button" type="submit" class="raised button-submit block btnSave hide"> <span>${Save}</span> </button> </form> ',"core"),e.element.querySelector("form").addEventListener("submit",t.onSubmit.bind(t)),e.element.querySelector("#selectSubtitlePlaybackMode").addEventListener("change",y),e.element.querySelector("#selectTextSize").addEventListener("change",S),e.element.querySelector("#selectTextWeight").addEventListener("change",S),e.element.querySelector("#selectDropShadow").addEventListener("change",S),e.element.querySelector("#selectFont").addEventListener("change",S),e.element.querySelector("#selectTextColor").addEventListener("change",S),e.element.querySelector("#inputTextColor").addEventListener("change",S),e.element.querySelector("#inputTextBackground").addEventListener("change",S),e.enableSaveButton&&e.element.querySelector(".btnSave").classList.remove("hide"),a.M.supports("subtitleappearancesettings")){e.element.querySelector(".subtitleAppearanceSection").classList.remove("hide"),t._fullPreview=e.element.querySelector(".subtitleappearance-fullpreview"),t._refFullPreview=0;var n=e.element.querySelector("#sliderVerticalPosition");n.addEventListener("input",S),n.addEventListener("input",(function(){return x.call(t)}));var r=window.PointerEvent?"pointer":"mouse";n.addEventListener("".concat(r,"enter"),(function(){return x.call(t,!0)})),n.addEventListener("".concat(r,"leave"),(function(){return L.call(t,!0)})),o.Z.tv&&(n.addEventListener("focus",(function(){return x.call(t,!0)})),n.addEventListener("blur",(function(){return L.call(t,!0)})),setTimeout((function(){n.classList.add("focusable"),n.enableKeyboardDragging()}),0),d.ZP.parentWithTag(e.element.querySelector("#inputTextColor"),"DIV").classList.add("hide"),d.ZP.parentWithTag(e.element.querySelector("#selectTextColor"),"DIV").classList.remove("hide")),e.element.querySelector(".chkPreview").addEventListener("change",(function(e){e.target.checked?x.call(t,!0):L.call(t,!0)}))}t.loadData(),e.autoFocus&&l.Z.autoFocus(e.element)}(t,this)}var t,n;return t=e,n=[{key:"loadData",value:function(){var e=this,t=e.options.element;s.ZP.show();var n=e.options.userId,i=p.Z.getApiClient(e.options.serverId),l=e.options.userSettings;i.getUser(n).then((function(o){l.setUserInfo(n,i).then((function(){e.dataLoaded=!0;var n=l.getSubtitleAppearanceSettings(e.options.appearanceKey);!function(e,t,n,i,l){l.getCultures().then((function(n){a.M.supports("subtitleburnsettings")&&t.Policy.EnableVideoPlaybackTranscoding&&e.querySelector(".fldBurnIn").classList.remove("hide");var l=e.querySelector("#selectSubtitleLanguage");c(l,n),l.value=t.Configuration.SubtitleLanguagePreference||"",e.querySelector("#selectSubtitlePlaybackMode").value=t.Configuration.SubtitleMode||"",e.querySelector("#selectSubtitlePlaybackMode").dispatchEvent(new CustomEvent("change",{})),e.querySelector("#selectTextSize").value=i.textSize||"",e.querySelector("#selectTextWeight").value=i.textWeight||"normal",e.querySelector("#selectDropShadow").value=i.dropShadow||"",e.querySelector("#inputTextBackground").value=i.textBackground||"transparent",e.querySelector("#selectTextColor").value=i.textColor||"#ffffff",e.querySelector("#inputTextColor").value=i.textColor||"#ffffff",e.querySelector("#selectFont").value=i.font||"",e.querySelector("#sliderVerticalPosition").value=i.verticalPosition,e.querySelector("#selectSubtitleBurnIn").value=r.Z.get("subtitleburnin")||"",S({target:e.querySelector("#selectTextSize")}),s.ZP.hide()}))}(t,o,0,n,i)}))}))}},{key:"submit",value:function(){this.onSubmit(null)}},{key:"destroy",value:function(){this.options=null}},{key:"onSubmit",value:function(e){var t=this,n=p.Z.getApiClient(t.options.serverId),a=t.options.userId,l=t.options.userSettings;return l.setUserInfo(a,n).then((function(){var e=t.options.enableSaveConfirmation;!function(e,t,n,a,l,o){s.ZP.show(),r.Z.set("subtitleburnin",t.querySelector("#selectSubtitleBurnIn").value),l.getUser(n).then((function(n){(function(e,t,n,i,a){var r=n.getSubtitleAppearanceSettings(i);return r=Object.assign(r,g(e)),n.setSubtitleAppearanceSettings(r,i),t.Configuration.SubtitleLanguagePreference=e.querySelector("#selectSubtitleLanguage").value,t.Configuration.SubtitleMode=e.querySelector("#selectSubtitlePlaybackMode").value,a.updateUserConfiguration(t.Id,t.Configuration)})(t,n,a,e.appearanceKey,l).then((function(){s.ZP.hide(),o&&(0,m.Z)(i.ZP.translate("SettingsSaved")),v.Z.trigger(e,"saved")}),(function(){s.ZP.hide()}))}))}(t,t.options.element,a,l,n,e)})),e&&e.preventDefault(),!1}}],n&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),C=k,T=n(60934),E=n(87680),P=T.UserSettings;function I(e,t){var n,i=t.userId||ApiClient.getCurrentUserId(),a=i===ApiClient.getCurrentUserId()?T:new P;e.addEventListener("viewshow",(function(){n?n.loadData():n=new C({serverId:ApiClient.serverId(),userId:i,element:e.querySelector(".settingsContainer"),userSettings:a,enableSaveButton:!0,enableSaveConfirmation:!0,autoFocus:E.default.isEnabled()})})),e.addEventListener("viewdestroy",(function(){n&&(n.destroy(),n=null)}))}},15856:function(e,t,n){var i=n(30325),a=n(57366),r=n(12801),l=(n(67752),Object.create(HTMLSelectElement.prototype));function o(){return!(!a.Z.edgeUwp&&!a.Z.xboxOne&&(a.Z.tizen||a.Z.orsay||a.Z.web0s||!a.Z.tv&&i.Z.tv))}function s(e){var t=u(e),n=t?t.textContent||t.innerText:null;r.default.show({items:e.options,positionTo:e,title:n}).then((function(t){!function(e,t){e.value=t}(e,t),function(e){var t=document.createEvent("HTMLEvents");t.initEvent("change",!1,!0),e.dispatchEvent(t)}(e)}))}function u(e){for(var t=e.previousSibling;t&&"LABEL"!==t.tagName;)t=t.previousSibling;return t}function c(){var e=u(this);e&&e.classList.add("selectLabelFocused")}function d(){var e=u(this);e&&e.classList.remove("selectLabelFocused")}function v(e){e.button||o()||(e.preventDefault(),s(this))}function p(e){switch(e.keyCode){case 13:return void(o()||(e.preventDefault(),s(this)));case 37:case 38:case 39:case 40:return void(i.Z.tv&&e.preventDefault())}}var m=0;l.createdCallback=function(){this.id||(this.id="embyselect"+m,m++),this.classList.add("emby-select-withcolor"),i.Z.tv&&this.classList.add("emby-select-focusscale"),this.addEventListener("mousedown",v),this.addEventListener("keydown",p),this.addEventListener("focus",c),this.addEventListener("blur",d)},l.attachedCallback=function(){var e;if(!this.classList.contains("emby-select")){this.classList.add("emby-select");var t,n=this.ownerDocument.createElement("label");n.innerText=this.getAttribute("label")||"",n.classList.add("selectLabel"),n.htmlFor=this.id,null===(e=this.parentNode)||void 0===e||e.insertBefore(n,this),this.classList.contains("emby-select-withcolor")&&(null===(t=this.parentNode)||void 0===t||t.insertAdjacentHTML("beforeend",'<div class="selectArrowContainer"><div style="visibility:hidden;display:none;">0</div><span class="selectArrow material-icons keyboard_arrow_down" aria-hidden="true"></span></div>'))}},l.setLabel=function(e){var t;(null===(t=this.parentNode)||void 0===t?void 0:t.querySelector("label")).innerText=e},document.registerElement("emby-select",{prototype:l,extends:"select"})},42855:function(e,t,n){n(86225),n(33096),n(63241),n(48914),n(84159),n(59139),n(86028),n(81414),n(47134),n(96626),n(88646),n(54134),n(91270),n(14011),n(56187),n(38690),n(89228),n(13227),n(11431);var i=n(57366),a=n(72365),r=n(30325),l=n(84280),o=(n(67752),n(62033),n(94994)),s=n(34706);function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}var c=Object.create(HTMLInputElement.prototype),d=!1;if(Object.getOwnPropertyDescriptor&&Object.defineProperty){var v=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value");null!=v&&v.configurable&&(d=!0)}function p(e,t){return t>0||(t=parseFloat(e.step))>0?t:1}function m(e,t){var n=e.sliderBubbleTrack.getBoundingClientRect(),i=(t-n.left)/n.width;o.ZP.getIsElementRTL(e)&&(i=(n.right-t)/n.width);var a=e.max-e.min;if("any"!==e.step&&0!==a){var r=p(e)/a;i=Math.round(i/r)*r}return Math.min(Math.max(i,0),1)}function f(e,t){var n=(e.max-e.min)*t,i=null;if("any"!==e.step){var a=p(e);i=(0,s.SN)(a),n=Math.round(n/a)*a}var r=parseFloat(e.min);return n+=r,null!=i&&(i=Math.max(i,(0,s.SN)(r)),n=parseFloat(n.toFixed(i))),Math.min(Math.max(n,e.min),e.max)}function h(e){if(!e||!this.keyboardDragging&&!this.touched){var t=this,n=t.value;cancelAnimationFrame(t.updateValuesFrame),t.updateValuesFrame=requestAnimationFrame((function(){var e=t.backgroundLower;if(e){var i=(n-t.min)/(t.max-t.min);i*=100,e.style.width=i+"%"}t.markerContainerElement&&(t.triedAddingMarkers||function(e){e.markerInfo=[],e.getMarkerInfo&&(e.markerInfo=e.getMarkerInfo()),e.markerInfo.forEach((function(t){var n,i;e.markerContainerElement.insertAdjacentHTML("beforeend",(i="","chapterMarker"===(n=t).className&&(i=n.className,"string"==typeof n.name&&n.name.length&&(i="".concat(n.className," marker-").concat(n.name.substring(0,100).toLowerCase().replace(" ","-")))),'<span class="material-icons sliderMarker '.concat(i,'" aria-hidden="true"></span>')))})),e.markerElements=e.markerContainerElement.querySelectorAll(".sliderMarker"),e.triedAddingMarkers=!0}(t),function(e,t){var n,i;if(null!==(n=e.markerInfo)&&void 0!==n&&n.length&&null!==(i=e.markerElements)&&void 0!==i&&i.length)for(var a=0,r=e.markerElements.length;a<r;a++)e.markerInfo.length>a&&g(e,f(e,e.markerInfo[a].progress),e.markerElements[a],t)}(t,n))}))}}function b(e,t,n,i){requestAnimationFrame((function(){var a,r=e.sliderBubbleTrack.getBoundingClientRect(),l=i.getBoundingClientRect(),s=r.width*t/100;o.ZP.getIsElementRTL(e)&&(s=r.width-s),s=Math.min(Math.max(s,l.width/2),r.width-l.width/2),i.style.left=s+"px",a=e.getBubbleHtml?e.getBubbleHtml(t,n):'<h1 class="sliderBubbleText">'+(a=e.getBubbleText?e.getBubbleText(t,n):n.toLocaleString())+"</h1>",i.innerHTML=a}))}function g(e,t,n,i){requestAnimationFrame((function(){var a=e.sliderBubbleTrack.getBoundingClientRect(),r=n.getBoundingClientRect();if(a.width&&r.width){var l=a.width*t/100-r.width/2;l=Math.min(Math.max(l,-r.width/2),a.width-r.width/2),n.style.left=l+"px",i>=t?(n.classList.remove("unwatched"),n.classList.add("watched")):(n.classList.add("unwatched"),n.classList.remove("watched"))}}))}c.attachedCallback=function(){if("true"!==this.getAttribute("data-embyslider")){this.setAttribute("data-embyslider","true"),this.classList.add("mdl-slider"),this.classList.add("mdl-js-slider"),i.Z.edge&&this.classList.add("slider-browser-edge"),r.Z.mobile||this.classList.add("mdl-slider-hoverthumb"),r.Z.tv&&this.classList.add("show-focus");var e=a.ZP.parentWithClass(this,"sliderContainer-settings");if(e&&this.getAttribute("label")){var t=this.ownerDocument.createElement("label");t.innerText=this.getAttribute("label"),t.classList.add("sliderLabel"),t.htmlFor=this.id,e.insertBefore(t,e.firstChild)}var n=this.parentNode;n.classList.add("mdl-slider-container"),n.insertAdjacentHTML("beforeend",'<div class="mdl-slider-background-flex-container"><div class="mdl-slider-background-flex"><div class="mdl-slider-background-flex-inner"><div class="mdl-slider-background-upper"></div><div class="mdl-slider-background-lower"></div></div></div></div><div class="sliderBubbleTrack"><div class="sliderBubble hide"></div></div>'),this.sliderBubbleTrack=n.querySelector(".sliderBubbleTrack"),this.backgroundLower=n.querySelector(".mdl-slider-background-lower"),this.backgroundUpper=n.querySelector(".mdl-slider-background-upper");var l=n.querySelector(".sliderBubble"),o=l.classList.contains("hide");this.markerContainerElement=n.querySelector(".sliderMarkerContainer"),a.ZP.addEventListener(this,"input",(function(){var e,t,n,i;this.dragging=!0,"true"!==this.dataset.sliderKeepProgress&&h.call(this),b(this,100*(e=this,t=this.value,i=0!==(n=e.max-e.min)?(t-e.min)/n:0,Math.min(Math.max(i,0),1)),parseFloat(this.value),l),o&&(l.classList.remove("hide"),o=!1)}),{passive:!0}),a.ZP.addEventListener(this,"change",(function(){this.dragging=!1,"true"===this.dataset.sliderKeepProgress&&h.call(this),l.classList.add("hide"),o=!0}),{passive:!0}),a.ZP.addEventListener(this,window.PointerEvent?"pointermove":"mousemove",(function(e){if(!this.dragging){var t=m(this,e.clientX);b(this,100*t,f(this,t),l),o&&(l.classList.remove("hide"),o=!1)}}),{passive:!0}),a.ZP.addEventListener(this,window.PointerEvent?"pointerleave":"mouseleave",(function(){l.classList.add("hide"),o=!0}),{passive:!0}),i.Z.iOS&&(a.ZP.addEventListener(this,"touchstart",(function(e){if(1===e.targetTouches.length){this.touched=!0;var t=m(this,e.targetTouches[0].clientX);this.value=f(this,t),this.dispatchEvent(new Event("input",{bubbles:!0,cancelable:!1})),e.preventDefault()}}),{capture:!0}),a.ZP.addEventListener(this,"touchmove",(function(e){if(this.touched&&1===e.targetTouches.length){var t=m(this,e.targetTouches[0].clientX);this.value=f(this,t),this.dispatchEvent(new Event("input",{bubbles:!0,cancelable:!1}))}}),{passive:!0}),a.ZP.addEventListener(this,"touchend",(function(){var e=this;setTimeout((function(){e.touched=!1,e.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!1}))}),0)}),{passive:!0})),d?this.addEventListener("valueset",h.bind(this,!0)):((u=(s=this).interval)&&clearInterval(u),s.interval=setInterval(h.bind(s,!0),100)),h.call(this)}var s,u};var y,S=1e3;function w(e){clearTimeout(y),y=void 0,e.keyboardDragging=!1;var t=new Event("change",{bubbles:!0,cancelable:!1});e.dispatchEvent(t)}function x(e,t){!function(e){e.keyboardDragging=!0,clearTimeout(y),y=setTimeout((function(){w(e)}),S)}(e),e.value=Math.max(e.min,Math.min(e.max,parseFloat(e.value)+t));var n=new Event("input",{bubbles:!0,cancelable:!1});e.dispatchEvent(n)}function L(e){switch(l.ZP.getKeyName(e)){case"ArrowLeft":case"Left":x(this,-p(this,this.keyboardStepDown)),e.preventDefault(),e.stopPropagation();break;case"ArrowRight":case"Right":x(this,p(this,this.keyboardStepUp)),e.preventDefault(),e.stopPropagation();break;case"Enter":this.keyboardDragging&&(w(this),e.preventDefault(),e.stopPropagation())}}function k(e,t,n){var i=e.style;o.ZP.getIsRTL()?i.right=Math.max(t,0)+"%":i.left=Math.max(t,0)+"%";var a=n-t;i.width=Math.max(Math.min(a,100),0)+"%"}c.enableKeyboardDragging=function(){this.keyboardDraggingEnabled||(this.addEventListener("keydown",L),this.keyboardDraggingEnabled=!0)},c.setKeyboardSteps=function(e,t){this.keyboardStepDown=e||t||1,this.keyboardStepUp=t||e||1},c.setBufferedRanges=function(e,t,n){var i=this.backgroundUpper;if(i){null!=t&&(e=function(e,t){return t?e.map((function(e){return{start:e.start/t*100,end:e.end/t*100}})):[]}(e,t),n=n/t*100);var a,r=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,a=function(){};return{s:a,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,o=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){o=!0,r=e},f:function(){try{l||null==n.return||n.return()}finally{if(o)throw r}}}}(e);try{for(r.s();!(a=r.n()).done;){var l=a.value;if(!(null!=n&&n>=l.end))return void k(i,l.start,l.end)}}catch(e){r.e(e)}finally{r.f()}k(i,0,0)}},c.setIsClear=function(e){var t=this.backgroundLower;t&&(e?t.classList.add("mdl-slider-background-lower-clear"):t.classList.remove("mdl-slider-background-lower-clear"))},c.detachedCallback=function(){var e=this.interval;e&&clearInterval(e),this.interval=null,this.backgroundUpper=null,this.backgroundLower=null},document.registerElement("emby-slider",{prototype:c,extends:"input"})}}]);