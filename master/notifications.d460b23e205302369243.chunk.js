"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[51909],{35106:function(e,t,n){n.r(t);var a=n(24246),i=(n(27378),n(87143)),o=n(94994),r=function(){return r=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)},s=function(){return(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:"<a\n                is='emby-linkbutton'\n                class='button-link'\n                href='#/dashboard/plugins/add?name=Webhook&guid=71552a5a5c5c4350a2aeebe451a30173'\n            >\n                ".concat(o.ZP.translate("GetThePlugin"),"\n            </a>")}})};t.default=function(){return(0,a.jsx)(i.Z,r({id:"notificationSettingPage",title:o.ZP.translate("Notifications"),className:"mainAnimatedPage type-interior"},{children:(0,a.jsxs)("div",r({className:"content-primary"},{children:[(0,a.jsx)("h2",{children:o.ZP.translate("Notifications")}),(0,a.jsx)("p",{children:o.ZP.translate("NotificationsMovedMessage")}),(0,a.jsx)(s,{})]}))}))}},87143:function(e,t,n){var a=n(24246),i=n(27378),o=n(93110),r=function(){return r=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)};t.Z=function(e){var t=e.children,n=e.id,s=e.className,c=void 0===s?"":s,l=e.title,u=e.isBackButtonEnabled,d=void 0===u||u,p=e.isMenuButtonEnabled,h=void 0!==p&&p,f=e.isNowPlayingBarEnabled,v=void 0===f||f,b=e.isThemeMediaSupported,g=void 0!==b&&b,m=e.backDropType,w=(0,i.useRef)(null);return(0,i.useEffect)((function(){o.Z.hideView()}),[]),(0,i.useEffect)((function(){var e,t,n,a,i={bubbles:!0,cancelable:!1,detail:{isRestored:!1,options:{enableMediaControl:v,supportsThemeMedia:g}}};null===(e=w.current)||void 0===e||e.dispatchEvent(new CustomEvent("viewbeforeshow",i)),null===(t=w.current)||void 0===t||t.dispatchEvent(new CustomEvent("pagebeforeshow",i)),null===(n=w.current)||void 0===n||n.dispatchEvent(new CustomEvent("viewshow",i)),null===(a=w.current)||void 0===a||a.dispatchEvent(new CustomEvent("pageshow",i))}),[w,v,g]),(0,a.jsx)("div",r({ref:w,id:n,"data-role":"page",className:"page ".concat(c),"data-title":l,"data-backbutton":d,"data-menubutton":h,"data-backdroptype":m},{children:t}))}}}]);