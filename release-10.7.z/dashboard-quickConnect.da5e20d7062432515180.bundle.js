"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7199],{41295:function(e,t,n){n.r(t),n.d(t,{default:function(){return a}});var c,o=n(6594),i=n(38440),u=n(53754),r="Available";function a(e){e.addEventListener("viewshow",(function(){c=this,o.ZP.show(),c.querySelector("#btnQuickConnectSubmit").onclick=l,s()}))}function l(){o.ZP.show();var e=c.querySelector("#chkQuickConnectAvailable").checked?r:"Unavailable",t=ApiClient.getUrl("/QuickConnect/Available?Status="+e);return ApiClient.ajax({type:"POST",url:t},!0).then((function(){return(0,i.Z)(u.ZP.translate("SettingsSaved")),setTimeout(s,500),!0})).catch((function(e){console.error("Unable to set quick connect status. error:",e)})),o.ZP.hide(),!1}function s(){ApiClient.getQuickConnect("Status").then((function(e){var t,n;return n=(t=e)===r||"Active"===t,c.querySelector("#quickConnectStatus").textContent=t.toLocaleLowerCase(),c.querySelector("#chkQuickConnectAvailable").checked=n,o.ZP.hide(),!0})).catch((function(e){console.error("Unable to get quick connect status. error:",e)}))}}}]);