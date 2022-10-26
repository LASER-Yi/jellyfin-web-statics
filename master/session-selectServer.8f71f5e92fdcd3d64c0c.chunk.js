"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5319],{98515:function(e,a,t){t.r(a),t.d(a,{default:function(){return S}}),t(61013),t(98010),t(63238);var n=t(65009),r=t.n(n),s=t(28540),i=t(52050),d=t(30325),l=t(71487),c=t(59858),o=t(34643),u=t(94994),v=t(12801),f=t(72365),h=t(57366),g=(t(24432),t(82427),t(38228),t(60635)),Z=t(18613),p=t(37099),P=t(61570),b=!h.Z.slow&&!h.Z.edge;function m(e){(0,p.Z)(e)}function S(e,a){function t(e){var a=[];a.push({name:u.ZP.translate("Connect"),id:"connect"}),a.push({name:u.ZP.translate("Delete"),id:"delete"}),v.default.show({items:a,title:e.Name}).then((function(a){switch(a){case"connect":!function(e){s.ZP.show(),Z.Z.connectToServer(e,{enableAutoLogin:c.Z.enableAutoLogin()}).then((function(e){s.ZP.hide();var a=e.ApiClient;switch(e.State){case"SignedIn":g.ZP.onServerChanged(a.getCurrentUserId(),a.accessToken(),a),g.ZP.navigate("home.html");break;case"ServerSignIn":g.ZP.onServerChanged(null,null,a),g.ZP.navigate("login.html?serverid="+e.Servers[0].Id);break;case"ServerUpdateNeeded":m({text:u.ZP.translate("core#ServerUpdateNeeded","https://github.com/jellyfin/jellyfin"),html:u.ZP.translate("core#ServerUpdateNeeded",'<a href="https://github.com/jellyfin/jellyfin">https://github.com/jellyfin/jellyfin</a>')});break;default:m({text:u.ZP.translate("MessageUnableToConnectToServer")})}}))}(e);break;case"delete":!function(e){s.ZP.show(),Z.Z.deleteServer(e.Id).then((function(){s.ZP.hide(),h()}))}(e)}}))}function n(a){p=a,function(e,a){var t=a.map((function(e){return{name:e.Name,icon:"storage",cardType:"",id:e.Id,server:e}})),n=t.map((function(e){var a='<span class="cardImageIcon material-icons '+e.icon+'" aria-hidden="true"></span>',t="card overflowSquareCard loginSquareCard scalableCard overflowSquareCard-scalable";d.Z.tv&&(t+=" show-focus",b&&(t+=" show-animation"));var n="";return n+='<button raised class="'+t+'" style="display:inline-block;" data-id="'+e.id+'" data-url="'+(e.url||"")+'" data-cardtype="'+e.cardType+'">',n+='<div class="cardBox">',n+='<div class="cardScalable">',n+='<div class="cardPadder cardPadder-square">',n+="</div>",n+='<div class="cardContent">',n+='<div class="cardImageContainer coveredImage '.concat(P.default.getDefaultBackgroundClass(),'">'),n+=a,n+="</div>",n+="</div>",n+="</div>",n+='<div class="cardFooter">',(n+='<div class="cardText cardTextCentered">'+r()(e.name)+"</div>")+"</div></div></button>"})).join(""),i=e.querySelector(".servers");t.length||(n="<p>"+u.ZP.translate("MessageNoServersAvailable")+"</p>"),i.innerHTML=n,s.ZP.hide()}(e,a),d.Z.tv&&o.Z.autoFocus(e)}function h(){s.ZP.show(),Z.Z.getAvailableServers().then(n)}var p;!function(e,a){"1"==a.showuser?(e.classList.add("libraryPage"),e.classList.remove("standalonePage"),e.classList.add("noSecondaryNavPage")):(e.classList.add("standalonePage"),e.classList.remove("libraryPage"),e.classList.remove("noSecondaryNavPage"))}(e,a),e.addEventListener("viewshow",(function(e){var a=e.detail.isRestored;l.Z.setTitle(null),l.Z.setTransparentMenu(!0),a||h()})),e.querySelector(".servers").addEventListener("click",(function(e){var a=f.ZP.parentWithClass(e.target,"card");if(a){var n=a.getAttribute("data-url");if(n)i.appRouter.show(n);else{var r=a.getAttribute("data-id");t(p.filter((function(e){return e.Id===r}))[0])}}}))}}}]);