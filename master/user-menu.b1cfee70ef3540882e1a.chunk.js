"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9030],{29411:function(e,t,r){r.r(t),r.d(t,{default:function(){return l}}),r(5769),r(63238),r(61418),r(17460),r(14078);var s=r(84881),n=(r(38228),r(30325)),c=r(60635);function l(e,t){e.querySelector(".btnLogout").addEventListener("click",(function(){c.default.logout()})),e.querySelector(".selectServer").addEventListener("click",(function(){c.default.selectServer()})),e.querySelector(".clientSettings").addEventListener("click",(function(){window.NativeShell.openClientSettings()})),e.querySelector(".exitApp").addEventListener("click",(function(){s.M.exit()})),e.addEventListener("viewshow",(function(){var l=t.userId||c.default.getCurrentUserId(),i=this;i.querySelector(".lnkUserProfile").setAttribute("href","#/userprofile.html?userId="+l),i.querySelector(".lnkDisplayPreferences").setAttribute("href","#/mypreferencesdisplay.html?userId="+l),i.querySelector(".lnkHomePreferences").setAttribute("href","#/mypreferenceshome.html?userId="+l),i.querySelector(".lnkPlaybackPreferences").setAttribute("href","#/mypreferencesplayback.html?userId="+l),i.querySelector(".lnkSubtitlePreferences").setAttribute("href","#/mypreferencessubtitles.html?userId="+l),i.querySelector(".lnkQuickConnectPreferences").setAttribute("href","#/mypreferencesquickconnect.html?userId="+l),i.querySelector(".lnkControlsPreferences").setAttribute("href","#/mypreferencescontrols.html?userId="+l);var u=s.M.supports("clientsettings");i.querySelector(".clientSettings").classList.toggle("hide",!u);var o=s.M.supports("exitmenu");i.querySelector(".exitApp").classList.toggle("hide",!o);var d=s.M.supports("multiserver");i.querySelector(".selectServer").classList.toggle("hide",!d),i.querySelector(".lnkControlsPreferences").classList.toggle("hide",n.Z.mobile),ApiClient.getQuickConnect("Enabled").then((function(e){!0===e&&i.querySelector(".lnkQuickConnectPreferences").classList.remove("hide")})).catch((function(){console.debug("Failed to get QuickConnect status")})),ApiClient.getUser(l).then((function(e){i.querySelector(".headerUsername").innerText=e.Name,e.Policy.IsAdministrator&&!n.Z.tv&&i.querySelector(".adminSection").classList.remove("hide")})),t.userId&&t.userId!==c.default.getCurrentUserId&&(i.querySelector(".userSection").classList.add("hide"),i.querySelector(".adminSection").classList.add("hide"),i.querySelector(".lnkControlsPreferences").classList.add("hide")),Promise.resolve().then(r.bind(r,87680)).then((function(t){t.default.autoFocus(e)}))}))}}}]);