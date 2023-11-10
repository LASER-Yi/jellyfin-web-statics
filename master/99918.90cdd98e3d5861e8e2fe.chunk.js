"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[99918,12801,49213,31473],{12801:function(e,t,n){n.r(t),n.d(t,{show:function(){return v}}),n(13227),n(81414),n(37666),n(14011),n(11431),n(44901),n(88646),n(54134),n(91270),n(59139),n(56187),n(38690),n(89228);var i=n(65009),s=n.n(i),o=n(93355),r=n(30325),a=n(94994),l=n(72365);function c(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,s=function(){};return{s:s,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r=!0,a=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return r=e.done,e},e:function(e){a=!0,o=e},f:function(){try{r||null==n.return||n.return()}finally{if(a)throw o}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function d(e,t,i){Promise.resolve().then(n.bind(n,54517)).then((function(n){var s=i?"on":"off";n.centerFocus[s](e,t)}))}function v(e){var t,n={removeOnClose:!0,enableHistory:e.enableHistory,scrollY:!1};r.Z.tv?(n.size="fullscreen",t=!0,n.autoFocus=!0):(n.modal=!1,n.entryAnimation=e.entryAnimation,n.exitAnimation=e.exitAnimation,n.entryAnimationDuration=e.entryAnimationDuration||140,n.exitAnimationDuration=e.exitAnimationDuration||100,n.autoFocus=!1);var i=o.default.createDialog(n);t?i.classList.add("actionsheet-fullscreen"):i.classList.add("actionsheet-not-fullscreen"),i.classList.add("actionSheet"),e.dialogClass&&i.classList.add(e.dialogClass);var u="",v=r.Z.tv?"scrollY smoothScrollY hiddenScrollY":"scrollY",h="";e.items.length>20&&(h+="min-width:"+(l.ZP.getWindowSize().innerWidth>=300?240:200)+"px;");var f,m,p=!1,y=[],g=c(e.items);try{for(g.s();!(m=g.n()).done;){var b=m.value;(f=b.icon||(b.selected?"check":null))&&(p=!0),y.push(f||"")}}catch(e){g.e(e)}finally{g.f()}r.Z.tv&&(u+='<button is="paper-icon-button-light" class="btnCloseActionSheet hide-mouse-idle-tv" tabindex="-1" title="'.concat(a.ZP.translate("ButtonBack"),'">\n                     <span class="material-icons arrow_back" aria-hidden="true"></span>\n                 </button>'));var S=e.title&&!p;S||r.Z.tv?u+='<div class="actionSheetContent actionSheetContent-centered">':u+='<div class="actionSheetContent">',e.title&&(u+='<h1 class="actionSheetTitle">'+s()(e.title)+"</h1>"),e.text&&(u+='<p class="actionSheetText">'+s()(e.text)+"</p>");var L="actionSheetScroller";r.Z.tv&&(L+=" actionSheetScroller-tv focuscontainer-x focuscontainer-y"),u+='<div class="'+L+" "+v+'" style="'+h+'">';var C="listItem listItem-button actionSheetMenuItem";(e.border||e.shaded)&&(C+=" listItem-border"),e.menuItemClass&&(C+=" "+e.menuItemClass),r.Z.tv&&(C+=" listItem-focusscale"),r.Z.mobile&&(C+=" actionsheet-xlargeFont");for(var T=0;T<e.items.length;T++){var x=e.items[T];x.divider?u+='<div class="actionsheetDivider"></div>':(u+="<button"+(x.selected&&r.Z.tv?" autoFocus":"")+' is="emby-button" type="button" class="'+C+'" data-id="'+(null==x.id||""===x.id?x.value:x.id)+'">',(f=y[T])?u+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons '.concat(f,'" aria-hidden="true"></span>'):p&&!S&&(u+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons check" aria-hidden="true" style="visibility:hidden;"></span>'),u+='<div class="listItemBody actionsheetListItemBody">',u+='<div class="listItemBodyText actionSheetItemText">',u+=s()(x.name||x.textContent||x.innerText),u+="</div>",x.secondaryText&&(u+='<div class="listItemBodyText secondary">'.concat(s()(x.secondaryText),"</div>")),u+="</div>",x.asideText&&(u+='<div class="listItemAside actionSheetItemAsideText">'.concat(s()(x.asideText),"</div>")),u+="</button>")}e.showCancel&&(u+='<div class="buttons">',u+='<button is="emby-button" type="button" class="btnCloseActionSheet">'.concat(a.ZP.translate("ButtonCancel"),"</button>"),u+="</div>"),u+="</div>",i.innerHTML=u,r.Z.tv&&d(i.querySelector(".actionSheetScroller"),!1,!0);var w,A,Z=i.querySelector(".btnCloseActionSheet");return Z&&Z.addEventListener("click",(function(){o.default.close(i)})),e.timeout&&(A=setTimeout((function(){o.default.close(i)}),e.timeout)),new Promise((function(t,s){var a;i.addEventListener("click",(function(n){var s=l.ZP.parentWithClass(n.target,"actionSheetMenuItem");s&&(w=s.getAttribute("data-id"),e.resolveOnClick&&(e.resolveOnClick.indexOf?-1!==e.resolveOnClick.indexOf(w)&&(t(w),a=!0):(t(w),a=!0)),o.default.close(i))})),i.addEventListener("close",(function(){r.Z.tv&&d(i.querySelector(".actionSheetScroller"),!1,!1),A&&(clearTimeout(A),A=null),a||(null!=w?(e.callback&&e.callback(w),t(w)):s("ActionSheet closed without resolving"))})),o.default.open(i);var u=e.positionTo&&"fullscreen"!==n.size?function(e,t){var n=l.ZP.getWindowSize(),i=n.innerHeight,s=n.innerWidth,o=function(e){var t=[];if(!document)return t;var n,i=c(e);try{for(i.s();!(n=i.n()).done;){var s=n.value.getBoundingClientRect();t.push({top:s.top,left:s.left,width:s.width,height:s.height})}}catch(e){i.e(e)}finally{i.f()}return t}([e.positionTo])[0];"top"!==e.positionY&&(o.top+=(o.height||0)/2),o.left+=(o.width||0)/2;var r=t.offsetHeight||300,a=t.offsetWidth||160;o.top-=r/2,o.left-=a/2;var u=o.left+a-s,d=o.top+r-i;return u>0&&(o.left-=u+20),d>0&&(o.top-=d+20),o.top+=e.offsetTop||0,o.left+=e.offsetLeft||0,o.top=Math.max(o.top,10),o.left=Math.max(o.left,10),o}(e,i):null;u&&(i.style.position="fixed",i.style.margin=0,i.style.left=u.left+"px",i.style.top=u.top+"px")}))}n(38228),t.default={show:v}},99918:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}}),n(44901),n(2663),n(81414),n(19131),n(96626),n(51789);var i=n(28540),s=n(94994),o=(n(12291),n(62033),n(61414),n(15856),n(38228),n(60635)),r=n(67561);function a(e){switch(e.toLowerCase()){case"m3u":return"M3U Playlist";case"hdhomerun":return"HDHomerun";case"satip":return"DVB";default:return"Unknown"}}function l(e,t,n){function l(){i.ZP.show(),ApiClient.getNamedConfiguration("livetv").then((function(n){var r=n.ListingProviders.filter((function(e){return e.Id===t}))[0]||{};u=r.ListingsId,$("#selectListing",e).val(r.ListingsId||""),e.querySelector(".txtUser").value=r.Username||"",e.querySelector(".txtPass").value="",e.querySelector(".txtZipCode").value=r.ZipCode||"",r.Username&&r.Password?e.querySelector(".listingsSection").classList.remove("hide"):e.querySelector(".listingsSection").classList.add("hide"),e.querySelector(".chkAllTuners").checked=r.EnableAllTuners,r.EnableAllTuners?e.querySelector(".selectTunersSection").classList.add("hide"):e.querySelector(".selectTunersSection").classList.remove("hide"),function(t){ApiClient.getJSON(ApiClient.getUrl("LiveTv/ListingProviders/SchedulesDirect/Countries")).then((function(n){var i,s,o=[];for(var r in n){var a=n[r];if(a.length&&"ZZZ"!==r)for(i=0,s=a.length;i<s;i++)o.push({name:a[i].fullName,value:a[i].shortName})}o.sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0})),$("#selectCountry",e).html(o.map((function(e){return'<option value="'+e.value+'">'+e.name+"</option>"})).join("")).val(t.Country||""),$(e.querySelector(".txtZipCode")).trigger("change")}),(function(){o.default.alert({message:s.ZP.translate("ErrorGettingTvLineups")})})),i.ZP.hide()}(r),function(e,t,n){for(var i="",s=0,o=n.length;s<o;s++){var r=n[s];i+='<div class="listItem">';var l=t.EnabledTuners||[],c=t.EnableAllTuners||-1!==l.indexOf(r.Id)?" checked":"";i+='<label class="checkboxContainer listItemCheckboxContainer"><input type="checkbox" is="emby-checkbox" data-id="'+r.Id+'" class="chkTuner" '+c+"/><span></span></label>",i+='<div class="listItemBody two-line">',i+='<div class="listItemBodyText">',i+=r.FriendlyName||a(r.Type),i+="</div>",i+='<div class="listItemBodyText secondary">',i+=r.Url,i+="</div>",i+="</div>",i+="</div>"}e.querySelector(".tunerList").innerHTML=i}(e,r,n.TunerHosts)}))}function c(n){n?(i.ZP.show(),ApiClient.ajax({type:"GET",url:ApiClient.getUrl("LiveTv/ListingProviders/Lineups",{Id:t,Location:n,Country:$("#selectCountry",e).val()}),dataType:"json"}).then((function(t){$("#selectListing",e).html(t.map((function(e){return'<option value="'+e.Id+'">'+e.Name+"</option>"}))),u&&$("#selectListing",e).val(u),i.ZP.hide()}),(function(){o.default.alert({message:s.ZP.translate("ErrorGettingTvLineups")}),c(""),i.ZP.hide()}))):$("#selectListing",e).html("")}var u,d=this;d.submit=function(){e.querySelector(".btnSubmitListingsContainer").click()},d.init=function(){var a=!1===(n=n||{}).showCancelButton;e.querySelector(".btnCancel").classList.toggle("hide",a);var u=!1===n.showSubmitButton;e.querySelector(".btnSubmitListings").classList.toggle("hide",u),$(".formLogin",e).on("submit",(function(){return function(){i.ZP.show();var n={Type:"SchedulesDirect",Username:e.querySelector(".txtUser").value,EnableAllTuners:!0,Password:e.querySelector(".txtPass").value},r=t;r&&(n.Id=r),ApiClient.ajax({type:"POST",url:ApiClient.getUrl("LiveTv/ListingProviders",{ValidateLogin:!0}),data:JSON.stringify(n),contentType:"application/json",dataType:"json"}).then((function(e){o.default.processServerConfigurationUpdateResult(),t=e.Id,l()}),(function(){o.default.alert({message:s.ZP.translate("ErrorSavingTvProvider")})}))}(),!1})),$(".formListings",e).on("submit",(function(){return function(){var a=$("#selectListing",e).val();if(a){i.ZP.show();var l=t;ApiClient.getNamedConfiguration("livetv").then((function(t){var c=t.ListingProviders.filter((function(e){return e.Id===l}))[0];c.ZipCode=e.querySelector(".txtZipCode").value,c.Country=$("#selectCountry",e).val(),c.ListingsId=a,c.EnableAllTuners=e.querySelector(".chkAllTuners").checked,c.EnabledTuners=c.EnableAllTuners?[]:$(".chkTuner",e).get().filter((function(e){return e.checked})).map((function(e){return e.getAttribute("data-id")})),ApiClient.ajax({type:"POST",url:ApiClient.getUrl("LiveTv/ListingProviders",{ValidateListings:!0}),data:JSON.stringify(c),contentType:"application/json"}).then((function(){i.ZP.hide(),n.showConfirmation&&o.default.processServerConfigurationUpdateResult(),r.Z.trigger(d,"submitted")}),(function(){i.ZP.hide(),o.default.alert({message:s.ZP.translate("ErrorAddingListingsToSchedulesDirect")})}))}))}else o.default.alert({message:s.ZP.translate("ErrorPleaseSelectLineup")})}(),!1})),$(".txtZipCode",e).on("change",(function(){c(this.value)})),e.querySelector(".chkAllTuners").addEventListener("change",(function(t){t.target.checked?e.querySelector(".selectTunersSection").classList.add("hide"):e.querySelector(".selectTunersSection").classList.remove("hide")})),$(".createAccountHelp",e).html(s.ZP.translate("MessageCreateAccountAt",'<a is="emby-linkbutton" class="button-link" href="http://www.schedulesdirect.org" target="_blank">http://www.schedulesdirect.org</a>')),l()}}},15856:function(e,t,n){var i=n(30325),s=n(57366),o=n(12801),r=(n(67752),Object.create(HTMLSelectElement.prototype));function a(){return!(!s.Z.edgeUwp&&!s.Z.xboxOne&&(s.Z.tizen||s.Z.orsay||s.Z.web0s||!s.Z.tv&&i.Z.tv))}function l(e){var t=c(e),n=t?t.textContent||t.innerText:null;o.default.show({items:e.options,positionTo:e,title:n}).then((function(t){!function(e,t){e.value=t}(e,t),function(e){var t=document.createEvent("HTMLEvents");t.initEvent("change",!1,!0),e.dispatchEvent(t)}(e)}))}function c(e){for(var t=e.previousSibling;t&&"LABEL"!==t.tagName;)t=t.previousSibling;return t}function u(){var e=c(this);e&&e.classList.add("selectLabelFocused")}function d(){var e=c(this);e&&e.classList.remove("selectLabelFocused")}function v(e){e.button||a()||(e.preventDefault(),l(this))}function h(e){switch(e.keyCode){case 13:return void(a()||(e.preventDefault(),l(this)));case 37:case 38:case 39:case 40:return void(i.Z.tv&&e.preventDefault())}}var f=0;r.createdCallback=function(){this.id||(this.id="embyselect"+f,f++),this.classList.add("emby-select-withcolor"),i.Z.tv&&this.classList.add("emby-select-focusscale"),this.addEventListener("mousedown",v),this.addEventListener("keydown",h),this.addEventListener("focus",u),this.addEventListener("blur",d)},r.attachedCallback=function(){var e;if(!this.classList.contains("emby-select")){this.classList.add("emby-select");var t,n=this.ownerDocument.createElement("label");n.innerText=this.getAttribute("label")||"",n.classList.add("selectLabel"),n.htmlFor=this.id,null===(e=this.parentNode)||void 0===e||e.insertBefore(n,this),this.classList.contains("emby-select-withcolor")&&(null===(t=this.parentNode)||void 0===t||t.insertAdjacentHTML("beforeend",'<div class="selectArrowContainer"><div style="visibility:hidden;display:none;">0</div><span class="selectArrow material-icons keyboard_arrow_down" aria-hidden="true"></span></div>'))}},r.setLabel=function(e){var t;(null===(t=this.parentNode)||void 0===t?void 0:t.querySelector("label")).innerText=e},document.registerElement("emby-select",{prototype:r,extends:"select"})}}]);