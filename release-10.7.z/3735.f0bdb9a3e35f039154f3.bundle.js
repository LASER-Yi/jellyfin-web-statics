(self.webpackChunk=self.webpackChunk||[]).push([[3735],{53735:function(e,t,i){"use strict";i.r(t),i.d(t,{editor:function(){return m}}),i(98010),i(63238),i(95623),i(61514),i(61013),i(19068),i(87211),i(25901),i(92189),i(95163),i(99785),i(91047),i(5769),i(17460),i(14078);var a=i(53754),n=i(83094),r=i(1115),o=(i(65219),i(50447),i(30983),i(90906)),c=i.n(o);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,(void 0,n=function(e,t){if("object"!==l(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var a=i.call(e,t);if("object"!==l(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(a.key,"string"),"symbol"===l(n)?n:String(n)),a)}var n}function p(e,t,i){return t&&s(e.prototype,t),i&&s(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function u(e,t){return e.filter((function(e){return e.Type==t}))[0]}function d(e,t,i,a){return u(e.ImageOptions||[],i)||u(t.DefaultImageOptions||[],i)||{Type:n=i,MinWidth:0,Limit:"Primary"===n?1:0};var n}function b(e,t){t?(e.classList.remove("hide"),e.querySelector("input").setAttribute("required","required")):(e.classList.add("hide"),e.querySelector("input").setAttribute("required",""),e.querySelector("input").removeAttribute("required"))}function y(e,t,i){var o=r.default.createDialog({size:"small",removeOnClose:!0,scrollY:!1});o.classList.add("formDialog"),o.innerHTML=a.ZP.translateHtml(c()),o.addEventListener("close",(function(){!function(e,t){t.ImageOptions=Array.prototype.map.call(e.querySelectorAll(".imageType:not(.hide)"),(function(e){return{Type:e.getAttribute("data-imagetype"),Limit:e.checked?1:0,MinWidth:0}})),t.ImageOptions.push({Type:"Backdrop",Limit:e.querySelector("#txtMaxBackdrops").value,MinWidth:e.querySelector("#txtMinBackdropDownloadWidth").value}),t.ImageOptions.push({Type:"Screenshot",Limit:e.querySelector("#txtMaxScreenshots").value,MinWidth:e.querySelector("#txtMinScreenshotDownloadWidth").value})}(o,t)})),function(e,t,i,a){var r=a.SupportedImageTypes||[];b(e.querySelector(".backdropFields"),r.includes("Backdrop")),b(e.querySelector(".screenshotFields"),r.includes("Screenshot")),Array.prototype.forEach.call(e.querySelectorAll(".imageType"),(function(e){var t=e.getAttribute("data-imagetype"),o=n.ZP.parentWithTag(e,"LABEL");r.includes(t)?o.classList.remove("hide"):o.classList.add("hide"),d(i,a,t).Limit?e.checked=!0:e.checked=!1}));var o=d(i,a,"Backdrop");e.querySelector("#txtMaxBackdrops").value=o.Limit,e.querySelector("#txtMinBackdropDownloadWidth").value=o.MinWidth;var c=d(i,a,"Screenshot");e.querySelector("#txtMaxScreenshots").value=c.Limit,e.querySelector("#txtMinScreenshotDownloadWidth").value=c.MinWidth}(o,0,t,i),r.default.open(o).then((function(){})).catch((function(){})),o.querySelector(".btnCancel").addEventListener("click",(function(){r.default.close(o)}))}var m=p((function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.show=y}));t.default=m},90906:function(e){e.exports='<div class="formDialogHeader"> <button type="button" is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1"><span class="material-icons arrow_back"></span></button> <h3 class="formDialogHeaderTitle"> ${HeaderImageOptions} </h3> </div> <div class="formDialogContent scrollY"> <div class="dialogContentInner dialog-content-centered"> <form style="margin:1.5em auto 0"> <div class="verticalSection"> <h3 class="checkboxListLabel">${HeaderFetchImages}</h3> <div class="imageSelections checkboxList"> <label> <input type="checkbox" is="emby-checkbox" class="imageType" data-imagetype="Primary"/> <span>${Primary}</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="imageType" data-imagetype="Art"/> <span>${Art}</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="imageType" data-imagetype="BoxRear"/> <span>${Back}</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="imageType" data-imagetype="Banner"/> <span>${Banner}</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="imageType" data-imagetype="Box"/> <span>${Box}</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="imageType" data-imagetype="Disc"/> <span>${Disc}</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="imageType" data-imagetype="Logo"/> <span>${Logo}</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="imageType" data-imagetype="Menu"/> <span>${Menu}</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="imageType" data-imagetype="Thumb"/> <span>${Thumb}</span> </label> </div> </div> <div class="backdropFields"> <div class="inputContainer"> <input is="emby-input" type="number" id="txtMaxBackdrops" pattern="[0-9]*" required="required" min="0" label="${LabelMaxBackdropsPerItem}"/> </div> <div class="inputContainer"> <input is="emby-input" type="number" id="txtMinBackdropDownloadWidth" pattern="[0-9]*" required="required" min="0" label="${LabelMinBackdropDownloadWidth}"/> </div> </div> <div class="screenshotFields"> <div class="inputContainer"> <input is="emby-input" type="number" id="txtMaxScreenshots" pattern="[0-9]*" required="required" min="0" label="${LabelMaxScreenshotsPerItem}"/> </div> <div class="inputContainer"> <input is="emby-input" type="number" id="txtMinScreenshotDownloadWidth" pattern="[0-9]*" required="required" min="0" label="${LabelMinScreenshotDownloadWidth}"/> </div> </div> </form> </div> </div> '}}]);