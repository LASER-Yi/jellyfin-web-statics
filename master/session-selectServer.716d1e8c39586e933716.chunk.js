"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5319],{98515:function(e,a,t){t.r(a),t.d(a,{default:function(){return S}}),t(61013),t(98010),t(63238);var n=t(65009),r=t.n(n),s=t(28540),i=t(52050),d=t(30325),c=t(71487),l=t(59858),o=t(34643),u=t(94994),v=t(12801),h=t(72365),f=t(57366),g=(t(24432),t(82427),t(38228),t(60635)),Z=t(18613),m=t(37099),p=t(61570),P=!f.Z.slow&&!f.Z.edge;function b(e){(0,m.Z)(e)}function S(e,a){function t(e){var a=[];a.push({name:u.ZP.translate("Connect"),id:"connect"}),a.push({name:u.ZP.translate("Delete"),id:"delete"}),v.default.show({items:a,title:e.Name}).then((function(a){switch(a){case"connect":!function(e){s.ZP.show(),Z.Z.connectToServer(e,{enableAutoLogin:l.Z.enableAutoLogin()}).then((function(e){s.ZP.hide();var a=e.ApiClient;switch(e.State){case"SignedIn":g.ZP.onServerChanged(a.getCurrentUserId(),a.accessToken(),a),g.ZP.navigate("home.html");break;case"ServerSignIn":g.ZP.onServerChanged(null,null,a),g.ZP.navigate("login.html?serverid="+e.Servers[0].Id);break;case"ServerUpdateNeeded":b({text:u.ZP.translate("core#ServerUpdateNeeded","https://github.com/jellyfin/jellyfin"),html:u.ZP.translate("core#ServerUpdateNeeded",'<a href="https://github.com/jellyfin/jellyfin">https://github.com/jellyfin/jellyfin</a>')});break;default:b({text:u.ZP.translate("MessageUnableToConnectToServer")})}}))}(e);break;case"delete":!function(e){s.ZP.show(),Z.Z.deleteServer(e.Id).then((function(){s.ZP.hide(),f()}))}(e)}}))}function n(a){m=a,function(e,a){var t=a.map((function(e){return{name:e.Name,showIcon:!0,icon:"cast",cardType:"",id:e.Id,server:e}})),n=t.map((function(e){var a;a=e.showIcon?'<span class="cardImageIcon material-icons '+e.icon+'" aria-hidden="true"></span>':'<div class="cardImage" style="'+e.cardImageStyle+'"></div>';var t="card overflowSquareCard loginSquareCard scalableCard overflowSquareCard-scalable";d.Z.tv&&(t+=" show-focus",P&&(t+=" show-animation"));var n="";return n+='<button raised class="'+t+'" style="display:inline-block;" data-id="'+e.id+'" data-url="'+(e.url||"")+'" data-cardtype="'+e.cardType+'">',n+='<div class="cardBox">',n+='<div class="cardScalable">',n+='<div class="cardPadder cardPadder-square">',n+="</div>",n+='<div class="cardContent">',n+='<div class="cardImageContainer coveredImage '.concat(p.default.getDefaultBackgroundClass(),'">'),n+=a,n+="</div>",n+="</div>",n+="</div>",n+='<div class="cardFooter">',(n+='<div class="cardText cardTextCentered">'+r()(e.name)+"</div>")+"</div></div></button>"})).join(""),i=e.querySelector(".servers");t.length||(n="<p>"+u.ZP.translate("MessageNoServersAvailable")+"</p>"),i.innerHTML=n,s.ZP.hide()}(e,a),d.Z.tv&&o.Z.autoFocus(e)}function f(){s.ZP.show(),Z.Z.getAvailableServers().then(n)}var m;!function(e,a){"1"==a.showuser?(e.classList.add("libraryPage"),e.classList.remove("standalonePage"),e.classList.add("noSecondaryNavPage")):(e.classList.add("standalonePage"),e.classList.remove("libraryPage"),e.classList.remove("noSecondaryNavPage"))}(e,a),e.addEventListener("viewshow",(function(e){var a=e.detail.isRestored;c.Z.setTitle(null),c.Z.setTransparentMenu(!0),a||f()})),e.querySelector(".servers").addEventListener("click",(function(e){var a=h.ZP.parentWithClass(e.target,"card");if(a){var n=a.getAttribute("data-url");if(n)i.appRouter.show(n);else{var r=a.getAttribute("data-id");t(m.filter((function(e){return e.Id===r}))[0])}}}))}}}]);