"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[66968],{30473:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}}),n(19131),n(2663),n(81414),n(56187),n(38690),n(48349),n(13227),n(37666),n(14011),n(11431),n(88646),n(54134),n(91270),n(59139),n(89228),n(51789);var r=n(76728),i=n(31699),o=n.n(i),a=n(28540),s=n(94994),l=(n(38228),n(60635)),u=n(37099),c=n(3137);function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function v(e,t,n){var i=t.filter((function(t){return t.Name==e.name}))[0];if(function(e,t,n){var r="";e.versions.sort((function(e,t){return t.timestamp<e.timestamp?-1:1}));var i,o=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw o}}}}(e.versions);try{for(o.s();!(i=o.n()).done;){var a=i.value;r+='<option value="'+a.version+'">'+s.ZP.translate("PluginFromRepo",a.version,a.repositoryName)+"</option>"}}catch(e){o.e(e)}finally{o.f()}var l=$("#selectVersion",t).html(r);n||$("#pCurrentVersion",t).hide().html("");var u=e.versions[0];u&&l.val(u.version)}(e,n,i),function(e,t){for(var n="",i=Math.min(e.versions.length,10),a=0;a<i;a++){var s=e.versions[a];n+='<h2 style="margin:.5em 0;">'+s.version+"</h2>",n+='<div style="margin-bottom:1.5em;">'+o().sanitize((0,r.TU)(s.changelog))+"</div>"}$("#revisionHistory",t).html(n)}(e,n),$(".pluginName",n).text(e.name),$("#btnInstallDiv",n).removeClass("hide"),$("#pSelectVersion",n).removeClass("hide"),e.overview?$("#overview",n).show().text(e.overview):$("#overview",n).hide(),$("#description",n).text(e.description),$("#developer",n).text(e.owner),e.versions.length?($("#repositoryName",n).text(e.versions[0].repositoryName),$("#repositoryUrl",n).text(e.versions[0].repositoryUrl)):($("#repositoryName",n).text(s.ZP.translate("Unknown")),$("#repositoryUrl",n).text(s.ZP.translate("Unknown"))),i){var l=s.ZP.translate("MessageYouHaveVersionInstalled","<strong>"+i.Version+"</strong>");$("#pCurrentVersion",n).show().html(l)}else $("#pCurrentVersion",n).hide().text("");a.ZP.hide()}function h(e){(0,u.Z)(e)}function d(e,t){$(".addPluginForm",e).on("submit",(function(){a.ZP.show();var e=$(this).parents("#addPluginPage")[0],n=t.name,r=t.guid;return ApiClient.getInstalledPlugins().then((function(t){var i=t.filter((function(e){return e.Name==n}))[0],o=$("#selectVersion",e).val();i&&i.Version===o?(a.ZP.hide(),l.default.alert({message:s.ZP.translate("MessageAlreadyInstalled"),title:s.ZP.translate("HeaderPluginInstallation")})):function(e,t,n,r){var i=$("#repositoryUrl",e).html().toLowerCase(),o=function(){a.ZP.show(),e.querySelector("#btnInstall").disabled=!0,ApiClient.installPlugin(t,n,r).then((function(){a.ZP.hide(),h(s.ZP.translate("MessagePluginInstalled"))})).catch((function(){h(s.ZP.translate("MessagePluginInstallError"))}))};if(i.startsWith("https://repo.jellyfin.org/"))o();else{a.ZP.hide();var l=s.ZP.translate("MessagePluginInstallDisclaimer");l+="<br/>",l+="<br/>",l+=s.ZP.translate("PleaseConfirmPluginInstallation"),(0,c.Z)(l,s.ZP.translate("HeaderConfirmPluginInstallation")).then((function(){o()})).catch((function(){console.debug("plugin not installed")}))}}(e,n,r,o)})).catch((function(){h(s.ZP.translate("MessageGetInstalledPluginsError"))})),!1})),e.addEventListener("viewshow",(function(){var e=this;a.ZP.show();var n=t.name,r=t.guid,i=ApiClient.getPackageInfo(n,r),o=ApiClient.getInstalledPlugins();Promise.all([i,o]).then((function(t){v(t[0],t[1],e)}))}))}}}]);