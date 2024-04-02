"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[97112],{97112:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}}),a(29305),a(32733),a(84701),a(81678),a(14382),a(76281),a(44962),a(86584),a(4754),a(94),a(36947),a(78557),a(99425),a(83994),a(82367);var i=a(9482),n=a(47629),r=a(79754);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function c(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,l(i.key),i)}}function l(e){var t=function(e,t){if("object"!=o(e)||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var i=a.call(e,"string");if("object"!=o(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==o(t)?t:t+""}function s(e,t){return e.filter((function(e){return e.Type==t}))[0]}function p(e,t,a,i){return s(e.ImageOptions||[],a)||s(t.DefaultImageOptions||[],a)||{Type:n=a,MinWidth:0,Limit:"Primary"===n?1:0};var n}a(77157),a(63001),a(98959);var u=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)},(t=[{key:"show",value:function(e,t,a){var o=r.default.createDialog({size:"small",removeOnClose:!0,scrollY:!1});o.classList.add("formDialog"),o.innerHTML=i.Ay.translateHtml('<div class="formDialogHeader"> <button type="button" is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1" title="${ButtonBack}"> <span class="material-icons arrow_back" aria-hidden="true"></span> </button> <h3 class="formDialogHeaderTitle"> ${HeaderImageOptions} </h3> </div> <div class="formDialogContent scrollY"> <div class="dialogContentInner dialog-content-centered"> <form style="margin:1.5em auto 0"> <div class="verticalSection"> <h3 class="checkboxListLabel">${HeaderFetchImages}</h3> <div class="imageSelections checkboxList"> <label> <input type="checkbox" is="emby-checkbox" class="imageType" data-imagetype="Primary"/> <span>${Primary}</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="imageType" data-imagetype="Art"/> <span>${Art}</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="imageType" data-imagetype="BoxRear"/> <span>${Back}</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="imageType" data-imagetype="Banner"/> <span>${Banner}</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="imageType" data-imagetype="Box"/> <span>${Box}</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="imageType" data-imagetype="Disc"/> <span>${Disc}</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="imageType" data-imagetype="Logo"/> <span>${Logo}</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="imageType" data-imagetype="Menu"/> <span>${Menu}</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="imageType" data-imagetype="Thumb"/> <span>${Thumb}</span> </label> </div> </div> <div class="backdropFields"> <div class="inputContainer"> <input is="emby-input" type="number" id="txtMaxBackdrops" pattern="[0-9]*" required="required" min="0" label="${LabelMaxBackdropsPerItem}"/> </div> <div class="inputContainer"> <input is="emby-input" type="number" id="txtMinBackdropDownloadWidth" pattern="[0-9]*" required="required" min="0" label="${LabelMinBackdropDownloadWidth}"/> </div> </div> </form> </div> </div> '),o.addEventListener("close",(function(){!function(e,t){t.ImageOptions=Array.prototype.map.call(e.querySelectorAll(".imageType:not(.hide)"),(function(e){return{Type:e.getAttribute("data-imagetype"),Limit:e.checked?1:0,MinWidth:0}})),t.ImageOptions.push({Type:"Backdrop",Limit:e.querySelector("#txtMaxBackdrops").value,MinWidth:e.querySelector("#txtMinBackdropDownloadWidth").value})}(o,t)})),function(e,t,a,i){var r,o=i.SupportedImageTypes||[];r=e.querySelector(".backdropFields"),o.includes("Backdrop")?(r.classList.remove("hide"),r.querySelector("input").setAttribute("required","required")):(r.classList.add("hide"),r.querySelector("input").setAttribute("required",""),r.querySelector("input").removeAttribute("required")),Array.prototype.forEach.call(e.querySelectorAll(".imageType"),(function(e){var t=e.getAttribute("data-imagetype"),r=n.Ay.parentWithTag(e,"LABEL");o.includes(t)?r.classList.remove("hide"):r.classList.add("hide"),p(a,i,t).Limit?e.checked=!0:e.checked=!1}));var c=p(a,i,"Backdrop");e.querySelector("#txtMaxBackdrops").value=c.Limit,e.querySelector("#txtMinBackdropDownloadWidth").value=c.MinWidth}(o,0,t,a),r.default.open(o).then((function(){})).catch((function(){})),o.querySelector(".btnCancel").addEventListener("click",(function(){r.default.close(o)}))}}])&&c(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}()}}]);