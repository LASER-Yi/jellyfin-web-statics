"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[838],{93683:function(t,e,i){i(23938),i(61013),i(32081),i(98010),i(63238),i(40895),i(99785);var n=i(65009),r=i.n(n),a=i(47005),s=i(94994),o=i(72365),c=i(94401),l=i(80632),d=i(44038),v=(i(38228),i(18613)),u=i(37099),y=i(98555);function m(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function p(t,e,i,n,a){null==n&&(n=parseInt(e.getAttribute("data-activitystartindex")||"0")),a=a||parseInt(e.getAttribute("data-activitylimit")||"7");var d=new Date,v=(0,y.s)(e.getAttribute("data-useractivity"),!0);v?d.setTime(d.getTime()-864e5):d.setTime(d.getTime()-6048e5),ApiClient.getJSON(ApiClient.getUrl("System/ActivityLog/Entries",{startIndex:n,limit:a,minDate:d.toISOString(),hasUserId:v})).then((function(d){if(e.setAttribute("data-activitystartindex",n),e.setAttribute("data-activitylimit",a),!n){var v=o.ZP.parentWithClass(e,"activityContainer");v&&(d.Items.length?v.classList.remove("hide"):v.classList.add("hide"))}t.items=d.Items,function(t,e,i){t.innerHTML=i.Items.map((function(t){return function(t,e){var i="";i+='<div class="listItem listItem-border">';var n="#00a4dc",a="notifications";return"Error"!=t.Severity&&"Fatal"!=t.Severity&&"Warn"!=t.Severity||(n="#cc0000",a="notification_important"),t.UserId&&t.UserPrimaryImageTag?i+='<span class="listItemIcon material-icons dvr" aria-hidden="true" style="width:2em!important;height:2em!important;padding:0;color:transparent;background-color:'+n+";background-image:url('"+e.getUserImageUrl(t.UserId,{type:"Primary",tag:t.UserPrimaryImageTag})+"');background-repeat:no-repeat;background-position:center center;background-size: cover;\"></span>":i+='<span class="listItemIcon material-icons '+a+'" aria-hidden="true" style="background-color:'+n+'"></span>',i+='<div class="listItemBody three-line">',i+='<div class="listItemBodyText">',i+=r()(t.Name),i+="</div>",i+='<div class="listItemBodyText secondary">',i+=c.Z(Date.parse(t.Date),Date.parse(new Date),{locale:l.ZP.getLocale()}),i+="</div>",i+='<div class="listItemBodyText secondary listItemBodyText-nowrap">',i+=r()(t.ShortOverview||""),i+="</div>",i+="</div>",t.Overview&&(i+='<button type="button" is="paper-icon-button-light" class="btnEntryInfo" data-id="'.concat(t.Id,'" title="').concat(s.ZP.translate("Info"),'">\n                       <span class="material-icons info" aria-hidden="true"></span>\n                    </button>')),i+"</div>"}(t,e)})).join("")}(e,i,d)}))}function f(t,e){var i=this.options;i&&i.serverId===e.serverId()&&p(this,i.element,e)}function g(t){var e=o.ZP.parentWithClass(t.target,"btnEntryInfo");if(e){var i=e.getAttribute("data-id"),n=this.items;if(n){var r=n.filter((function(t){return t.Id.toString()===i}))[0];r&&function(t){(0,u.Z)({text:t.Overview})}(r)}}}var I=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=e;var i=e.element;i.classList.add("activityLogListWidget"),i.addEventListener("click",g.bind(this));var n=v.Z.getApiClient(e.serverId);p(this,i,n);var r=f.bind(this);this.updateFn=r,a.Events.on(d.default,"ActivityLogEntry",r),n.sendMessage("ActivityLogEntryStart","0,1500")}var e,i;return e=t,(i=[{key:"destroy",value:function(){var t=this.options;t&&(t.element.classList.remove("activityLogListWidget"),v.Z.getApiClient(t.serverId).sendMessage("ActivityLogEntryStop","0,1500"));var e=this.updateFn;e&&a.Events.off(d.default,"ActivityLogEntry",e),this.items=null,this.options=null}}])&&m(e.prototype,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();e.Z=I},44226:function(t,e,i){i.r(e),i.d(e,{default:function(){return s}});var n=i(93683),r=i(94994),a=i(98555);function s(t,e){var i;(0,a.s)(e.useractivity,!0)?(t.querySelector(".activityItems").setAttribute("data-useractivity","true"),t.querySelector(".sectionTitle").innerHTML=r.ZP.translate("HeaderActivity")):(t.querySelector(".activityItems").setAttribute("data-useractivity","false"),t.querySelector(".sectionTitle").innerHTML=r.ZP.translate("Alerts")),t.addEventListener("viewshow",(function(){i||(i=new n.Z({serverId:ApiClient.serverId(),element:t.querySelector(".activityItems")}))})),t.addEventListener("viewdestroy",(function(){i&&i.destroy(),i=null}))}}}]);