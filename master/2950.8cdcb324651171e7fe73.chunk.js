"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2950],{17149:function(e,t,n){n.r(t),n(72410),n(63238),n(15610),n(17460),n(52077),n(25901),n(92189),n(91047),n(5769),n(14078);var a,r=n(44038),o=n(48957),i=n(81643),l=n(94994),c=n.p+"d6ecf2254db85ff3b545.png";function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function d(){document.removeEventListener("click",d),document.removeEventListener("keydown",d),window.Notification&&"default"===window.Notification.permission&&Notification.requestPermission()}function f(){var e=navigator.serviceWorker;e&&e.ready.then((function(e){a=e}))}function u(e,t,n){try{var a=new Notification(e,t);a.show&&a.show(),n&&function(e,t){setTimeout((function(){e.close?e.close():e.cancel&&e.cancel()}),t)}(a,n)}catch(a){if(!t.actions)throw a;t.actions=[],u(e,t,n)}}function m(e,t,n){var r=e.title;e.data=e.data||{},e.data.serverId=n.serverInfo().Id,e.icon=e.icon||c,e.badge=e.badge||c,f(),a?function(e,t){a.showNotification(e,t)}(r,e):u(r,e,t)}function g(e,t){if(!o.O.isPlayingLocally(["Video"])){var n=e.Name;e.SeriesName&&(n=e.SeriesName+" - "+n);var a={title:"New "+e.Type,body:n,vibrate:!0,tag:"newItem"+e.Id,data:{}},r=e.ImageTags||{};r.Primary&&(a.icon=t.getScaledImageUrl(e.Id,{width:80,tag:r.Primary,type:"Primary"})),m(a,15e3,t)}}function v(e,t,n){e.getCurrentUser().then((function(a){if(a.Policy.IsAdministrator){var r={tag:"install"+t.Id,data:{}};if("completed"===n?(r.title=l.ZP.translate("PackageInstallCompleted",t.Name,t.Version),r.vibrate=!0):"cancelled"===n?r.title=l.ZP.translate("PackageInstallCancelled",t.Name,t.Version):"failed"===n?(r.title=l.ZP.translate("PackageInstallFailed",t.Name,t.Version),r.vibrate=!0):"progress"===n&&(r.title=l.ZP.translate("InstallingPackage",t.Name,t.Version),r.actions=[{action:"cancel-install",title:l.ZP.translate("ButtonCancel"),icon:c}],r.data.id=t.id),"progress"===n){var o=Math.round(t.PercentComplete||0);r.body=o+"% complete."}m(r,"cancelled"===n?5e3:0,e)}}))}document.addEventListener("click",d),document.addEventListener("keydown",d),f(),i.Z.on(r.default,"LibraryChanged",(function(e,t,n){!function(e,t){var n=e.ItemsAdded;n.length&&(n.length>12&&(n.length=12),t.getItems(t.getCurrentUserId(),{Recursive:!0,Limit:3,Filters:"IsNotFolder",SortBy:"DateCreated",SortOrder:"Descending",Ids:n.join(","),MediaTypes:"Audio,Video",EnableTotalRecordCount:!1}).then((function(e){var n,a=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){l=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw o}}}}(e.Items);try{for(a.s();!(n=a.n()).done;)g(n.value,t)}catch(e){a.e(e)}finally{a.f()}})))}(n,t)})),i.Z.on(r.default,"PackageInstallationCompleted",(function(e,t,n){v(t,n,"completed")})),i.Z.on(r.default,"PackageInstallationFailed",(function(e,t,n){v(t,n,"failed")})),i.Z.on(r.default,"PackageInstallationCancelled",(function(e,t,n){v(t,n,"cancelled")})),i.Z.on(r.default,"PackageInstalling",(function(e,t,n){v(t,n,"progress")})),i.Z.on(r.default,"ServerShuttingDown",(function(e,t){m({tag:"restart"+t.serverInfo().Id,title:l.ZP.translate("ServerNameIsShuttingDown",t.serverInfo().Name)},0,t)})),i.Z.on(r.default,"ServerRestarting",(function(e,t){m({tag:"restart"+t.serverInfo().Id,title:l.ZP.translate("ServerNameIsRestarting",t.serverInfo().Name)},0,t)})),i.Z.on(r.default,"RestartRequired",(function(e,t){var n={tag:"restart"+t.serverInfo().Id,title:l.ZP.translate("PleaseRestartServerName",t.serverInfo().Name)};n.actions=[{action:"restart",title:l.ZP.translate("Restart"),icon:c}],m(n,0,t)}))}}]);