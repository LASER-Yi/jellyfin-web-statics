"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[12950],{17149:function(e,t,n){n.r(t),n(88646),n(81414),n(54134),n(91270),n(14011),n(59139),n(56187),n(38690),n(89228),n(13227),n(11431);var a,r,i=n(44038),o=n(2513),l=n(74131),c=n(94994),s=n(98048),d=n(18613),u=n.p+"d6ecf2254db85ff3b545.png";function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function g(){document.removeEventListener("click",g),document.removeEventListener("keydown",g),window.Notification&&"default"===window.Notification.permission&&Notification.requestPermission()}function m(){l.Z.off(d.Z,"localusersignedin",m),document.addEventListener("click",g),document.addEventListener("keydown",g)}function v(){var e=navigator.serviceWorker;e&&e.ready.then((function(e){r=e}))}function I(e,t,n){try{var a=new Notification(e,t);a.show&&a.show(),n&&function(e,t){setTimeout((function(){e.close?e.close():e.cancel&&e.cancel()}),t)}(a,n)}catch(a){if(!t.actions)throw a;t.actions=[],I(e,t,n)}}function y(e,t,n){var a=e.title;e.data=e.data||{},e.data.serverId=n.serverInfo().Id,e.icon=e.icon||u,e.badge=e.badge||u,v(),r?function(e,t){r.showNotification(e,t)}(a,e):I(a,e,t)}function h(e,t){if(!o.O.isPlayingLocally(["Video"])){var n=e.Name;e.SeriesName&&(n=e.SeriesName+" - "+n);var a={title:"New "+e.Type,body:n,vibrate:!0,tag:"newItem"+e.Id,data:{}},r=e.ImageTags||{};r.Primary&&(a.icon=t.getScaledImageUrl(e.Id,{width:80,tag:r.Primary,type:"Primary"})),y(a,15e3,t)}}function p(e,t,n){e.getCurrentUser().then((function(a){if(a.Policy.IsAdministrator){var r={tag:"install"+t.Id,data:{}};if("completed"===n?(r.title=c.ZP.translate("PackageInstallCompleted",t.Name,t.Version),r.vibrate=!0):"cancelled"===n?r.title=c.ZP.translate("PackageInstallCancelled",t.Name,t.Version):"failed"===n?(r.title=c.ZP.translate("PackageInstallFailed",t.Name,t.Version),r.vibrate=!0):"progress"===n&&(r.title=c.ZP.translate("InstallingPackage",t.Name,t.Version),r.actions=[{action:"cancel-install",title:c.ZP.translate("ButtonCancel"),icon:u}],r.data.id=t.id),"progress"===n){var i=Math.round(t.PercentComplete||0);r.body=i+"% complete."}y(r,"cancelled"===n?5e3:0,e)}}))}(a=d.Z.currentApiClient())?a.getCurrentUser().then((function(){return m()})).catch((function(){l.Z.on(d.Z,"localusersignedin",m)})):m(),v(),l.Z.on(i.default,"LibraryChanged",(function(e,t,n){!function(e,t){var n=e.ItemsAdded;n.length&&(n.length>12&&(n.length=12),(0,s.k)(t,t.getCurrentUserId(),{Recursive:!0,Limit:3,Filters:"IsNotFolder",SortBy:"DateCreated",SortOrder:"Descending",Ids:n.join(","),MediaTypes:"Audio,Video",EnableTotalRecordCount:!1}).then((function(e){var n,a=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){l=!0,i=e},f:function(){try{o||null==n.return||n.return()}finally{if(l)throw i}}}}(e.Items);try{for(a.s();!(n=a.n()).done;)h(n.value,t)}catch(e){a.e(e)}finally{a.f()}})))}(n,t)})),l.Z.on(i.default,"PackageInstallationCompleted",(function(e,t,n){p(t,n,"completed")})),l.Z.on(i.default,"PackageInstallationFailed",(function(e,t,n){p(t,n,"failed")})),l.Z.on(i.default,"PackageInstallationCancelled",(function(e,t,n){p(t,n,"cancelled")})),l.Z.on(i.default,"PackageInstalling",(function(e,t,n){p(t,n,"progress")})),l.Z.on(i.default,"ServerShuttingDown",(function(e,t){y({tag:"restart"+t.serverInfo().Id,title:c.ZP.translate("ServerNameIsShuttingDown",t.serverInfo().Name)},0,t)})),l.Z.on(i.default,"ServerRestarting",(function(e,t){y({tag:"restart"+t.serverInfo().Id,title:c.ZP.translate("ServerNameIsRestarting",t.serverInfo().Name)},0,t)})),l.Z.on(i.default,"RestartRequired",(function(e,t){var n={tag:"restart"+t.serverInfo().Id,title:c.ZP.translate("PleaseRestartServerName",t.serverInfo().Name)};n.actions=[{action:"restart",title:c.ZP.translate("Restart"),icon:u}],y(n,0,t)}))}}]);