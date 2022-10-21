"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6728],{38903:function(t,a,e){e.r(a),e(5769),e(98010),e(63238),e(23938),e(69217),e(61013),e(61418),e(17460),e(14078);var n=e(28540),i=e(71487),s=e(72365),l=e(94994),r=e(61570),c=(e(38228),e(60635)),o=e(3137);function d(t,a){ApiClient.getJSON(ApiClient.getUrl("web/configurationpages")+"?pageType=PluginConfiguration").then((function(e){!function(t,a,e){var i=(a=a.sort((function(t,a){return t.Name>a.Name?1:-1}))).map((function(t){return function(t,a){var e=a.filter((function(a){return a.PluginId==t.Id}))[0],n=e?c.ZP.getPluginUrl(e.Name):null,i="";if(i+="<div data-id='".concat(t.Id,"' data-version='").concat(t.Version,"' data-name='").concat(t.Name,"' data-removable='").concat(t.CanUninstall,"' data-status='").concat(t.Status,"' class='card backdropCard'>"),i+='<div class="cardBox visualCardBox">',i+='<div class="cardScalable">',i+='<div class="cardPadder cardPadder-backdrop"></div>',i+='<div class="cardContent">',i+=n?'<a class="cardImageContainer" is="emby-linkbutton" style="margin:0;padding:0" href="'.concat(n,'">'):'<div class="cardImageContainer noConfigPluginCard noHoverEffect emby-button" style="margin:0;padding:0">',t.HasImage){var s=ApiClient.getUrl("/Plugins/".concat(t.Id,"/").concat(t.Version,"/Image"));i+='<img src="'.concat(s,'" style="width:100%" />')}else i+='<div class="cardImage flex align-items-center justify-content-center '.concat(r.getDefaultBackgroundClass(),'">'),i+='<span class="cardImageIcon material-icons extension" aria-hidden="true"></span>',i+="</div>";return i+=n?"</a>":"</div>",i+="</div>",i+="</div>",i+='<div class="cardFooter">',(e||t.CanUninstall)&&(l.ZP.getIsRTL()?i+='<div style="text-align:left; float:left;padding-top:5px;">':i+='<div style="text-align:right; float:right;padding-top:5px;">',i+='<button type="button" is="paper-icon-button-light" class="btnCardMenu autoSize"><span class="material-icons more_vert" aria-hidden="true"></span></button>',i+="</div>"),i+='<div class="cardText">',i+="".concat(t.Name,"<span class='cardText cardText-secondary'>").concat(t.Version,"</span>"),i+="</div>",i+='<div class="cardText">'.concat(l.ZP.translate("LabelStatus")," ").concat(t.Status,"</div>"),i+="</div>",(i+="</div>")+"</div>"}(t,e)})).join(""),s=t.querySelector(".installedPlugins");s.removeEventListener("click",P),s.addEventListener("click",P),a.length?(s.classList.add("itemsContainer"),s.classList.add("vertical-wrap")):(i+='<div class="centerMessage">',i+="<h1>"+l.ZP.translate("MessageNoPluginsInstalled")+"</h1>",i+='<p><a is="emby-linkbutton" class="button-link" href="#/availableplugins.html">',i+=l.ZP.translate("MessageBrowsePluginCatalog"),i+="</a></p>",i+="</div>"),s.innerHTML=i,n.ZP.hide()}(t,a,e)}))}function u(t){n.ZP.show(),ApiClient.getInstalledPlugins().then((function(a){d(t,a)}))}function g(){return[{href:"#/installedplugins.html",name:l.ZP.translate("TabMyPlugins")},{href:"#/availableplugins.html",name:l.ZP.translate("TabCatalog")},{href:"#/repositories.html",name:l.ZP.translate("TabRepositories")}]}function P(t){if(s.ZP.parentWithClass(t.target,"noConfigPluginCard"))c.ZP.alert({message:l.ZP.translate("MessageNoPluginConfiguration")});else if(s.ZP.parentWithClass(t.target,"connectModePluginCard"))c.ZP.alert({message:l.ZP.translate("MessagePluginConfigurationRequiresLocalAccess")});else{var a=s.ZP.parentWithClass(t.target,"btnCardMenu");a&&(i=s.ZP.parentWithClass(a,"page"),r=a,d=s.ZP.parentWithClass(r,"card"),g=d.getAttribute("data-id"),P=d.getAttribute("data-name"),p=d.getAttribute("data-removable"),f=d.querySelector(".cardImageContainer").getAttribute("href"),b=d.getAttribute("data-status"),h=d.getAttribute("data-version"),m=[],f&&m.push({name:l.ZP.translate("Settings"),id:"open",icon:"mode_edit"}),"true"===p&&("Disabled"===b&&m.push({name:l.ZP.translate("EnablePlugin"),id:"enable",icon:"check_circle_outline"}),"Active"===b&&m.push({name:l.ZP.translate("DisablePlugin"),id:"disable",icon:"do_not_disturb"}),m.push({name:l.ZP.translate("ButtonUninstall"),id:"delete",icon:"delete"})),Promise.resolve().then(e.bind(e,12801)).then((function(t){t.show({items:m,positionTo:r,callback:function(t){switch(t){case"open":c.ZP.navigate(f);break;case"delete":!function(t,a,e,i){var s=l.ZP.translate("UninstallPluginConfirmation",i);(0,o.Z)({title:l.ZP.translate("HeaderUninstallPlugin"),text:s,primary:"delete",confirmText:l.ZP.translate("HeaderUninstallPlugin")}).then((function(){n.ZP.show(),ApiClient.uninstallPluginByVersion(a,e).then((function(){u(t)}))}))}(i,g,h,P);break;case"enable":!function(t,a,e){n.ZP.show(),ApiClient.enablePlugin(a,e).then((function(){u(t)}))}(i,g,h);break;case"disable":!function(t,a,e){n.ZP.show(),ApiClient.disablePlugin(a,e).then((function(){u(t)}))}(i,g,h)}}})})))}var i,r,d,g,P,p,f,b,h,m}(0,c.Xz)("pageshow","pluginsPage",(function(){i.Z.setTabs("plugins",0,g),u(this)})),window.PluginsPage={renderPlugins:d}}}]);