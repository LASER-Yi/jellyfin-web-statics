"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[51909],{35106:function(e,t,n){n.r(t);var a=n(24246),i=n(94222),o=n(62664),s=n(79073),d=(n(27378),n(27851)),r=n(87143),c=n(94994);t.default=function(){return(0,a.jsx)(r.Z,{id:"notificationSettingPage",title:c.ZP.translate("Notifications"),className:"mainAnimatedPage type-interior",children:(0,a.jsxs)("div",{className:"content-primary",children:[(0,a.jsx)("h2",{children:c.ZP.translate("Notifications")}),(0,a.jsxs)(i.Z,{severity:"info",children:[(0,a.jsx)(o.Z,{sx:{marginBottom:2},children:c.ZP.translate("NotificationsMovedMessage")}),(0,a.jsx)(s.Z,{component:d.rU,to:"/dashboard/plugins/add?name=Webhook&guid=71552a5a5c5c4350a2aeebe451a30173",children:c.ZP.translate("GetThePlugin")})]})]})})}},87143:function(e,t,n){var a=n(24246),i=n(27378),o=n(93110);t.Z=function(e){var t=e.children,n=e.id,s=e.className,d=void 0===s?"":s,r=e.title,c=e.isBackButtonEnabled,l=void 0===c||c,u=e.isMenuButtonEnabled,v=void 0!==u&&u,h=e.isNowPlayingBarEnabled,p=void 0===h||h,f=e.isThemeMediaSupported,b=void 0!==f&&f,m=e.backDropType,w=(0,i.useRef)(null);return(0,i.useEffect)((function(){o.Z.hideView()}),[]),(0,i.useEffect)((function(){var e,t,n,a,i={bubbles:!0,cancelable:!1,detail:{isRestored:!1,options:{enableMediaControl:p,supportsThemeMedia:b}}};null===(e=w.current)||void 0===e||e.dispatchEvent(new CustomEvent("viewbeforeshow",i)),null===(t=w.current)||void 0===t||t.dispatchEvent(new CustomEvent("pagebeforeshow",i)),null===(n=w.current)||void 0===n||n.dispatchEvent(new CustomEvent("viewshow",i)),null===(a=w.current)||void 0===a||a.dispatchEvent(new CustomEvent("pageshow",i))}),[w,p,b]),(0,a.jsx)("div",{ref:w,id:n,"data-role":"page",className:"page ".concat(d),"data-title":r,"data-backbutton":l,"data-menubutton":v,"data-backdroptype":m,children:t})}}}]);