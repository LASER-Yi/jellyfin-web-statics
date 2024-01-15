"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[66968],{30473:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}}),n(19131),n(2663),n(81414),n(56187),n(38690),n(48349),n(13227),n(37666),n(14011),n(11431),n(88646),n(54134),n(91270),n(59139),n(89228),n(51789);var r=n(16191),i=n.n(r),o=n(31699),a=n.n(o),s=n(84597),l=n(94994),u=(n(38228),n(60635)),c=n(37099),f=n(3137);function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(e,t,n){var r=t.filter((function(t){return t.Name==e.name}))[0];if(function(e,t,n){var r="";e.versions.sort((function(e,t){return t.timestamp<e.timestamp?-1:1}));var i,o=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw o}}}}(e.versions);try{for(o.s();!(i=o.n()).done;){var a=i.value;r+='<option value="'+a.version+'">'+l.ZP.translate("PluginFromRepo",a.version,a.repositoryName)+"</option>"}}catch(e){o.e(e)}finally{o.f()}var s=$("#selectVersion",t).html(r);n||$("#pCurrentVersion",t).hide().html("");var u=e.versions[0];u&&s.val(u.version)}(e,n,r),function(e,t){for(var n="",r=Math.min(e.versions.length,10),o=0;o<r;o++){var s=e.versions[o];n+='<h2 style="margin:.5em 0;">'+s.version+"</h2>",n+='<div style="margin-bottom:1.5em;">'+a().sanitize(i()({html:!0}).render(s.changelog))+"</div>"}$("#revisionHistory",t).html(n)}(e,n),$(".pluginName",n).text(e.name),$("#btnInstallDiv",n).removeClass("hide"),$("#pSelectVersion",n).removeClass("hide"),e.overview?$("#overview",n).show().text(e.overview):$("#overview",n).hide(),$("#description",n).text(e.description),$("#developer",n).text(e.owner),e.versions.length?($("#repositoryName",n).text(e.versions[0].repositoryName),$("#repositoryUrl",n).text(e.versions[0].repositoryUrl)):($("#repositoryName",n).text(l.ZP.translate("Unknown")),$("#repositoryUrl",n).text(l.ZP.translate("Unknown"))),r){var o=l.ZP.translate("MessageYouHaveVersionInstalled","<strong>"+r.Version+"</strong>");$("#pCurrentVersion",n).show().html(o)}else $("#pCurrentVersion",n).hide().text("");s.ZP.hide()}function d(e){(0,c.Z)(e)}function m(e,t){$(".addPluginForm",e).on("submit",(function(){s.ZP.show();var e=$(this).parents("#addPluginPage")[0],n=t.name,r=t.guid;return ApiClient.getInstalledPlugins().then((function(t){var i=t.filter((function(e){return e.Name==n}))[0],o=$("#selectVersion",e).val();i&&i.Version===o?(s.ZP.hide(),u.default.alert({message:l.ZP.translate("MessageAlreadyInstalled"),title:l.ZP.translate("HeaderPluginInstallation")})):function(e,t,n,r){var i=$("#repositoryUrl",e).html().toLowerCase(),o=function(){s.ZP.show(),e.querySelector("#btnInstall").disabled=!0,ApiClient.installPlugin(t,n,r).then((function(){s.ZP.hide(),d(l.ZP.translate("MessagePluginInstalled"))})).catch((function(){d(l.ZP.translate("MessagePluginInstallError"))}))};if(i.startsWith("https://repo.jellyfin.org/"))o();else{s.ZP.hide();var a=l.ZP.translate("MessagePluginInstallDisclaimer");a+="<br/>",a+="<br/>",a+=l.ZP.translate("PleaseConfirmPluginInstallation"),(0,f.Z)(a,l.ZP.translate("HeaderConfirmPluginInstallation")).then((function(){o()})).catch((function(){console.debug("plugin not installed")}))}}(e,n,r,o)})).catch((function(){d(l.ZP.translate("MessageGetInstalledPluginsError"))})),!1})),e.addEventListener("viewshow",(function(){var e=this;s.ZP.show();var n=t.name,r=t.guid,i=ApiClient.getPackageInfo(n,r),o=ApiClient.getInstalledPlugins();Promise.all([i,o]).then((function(t){h(t[0],t[1],e)}))}))}}}]);