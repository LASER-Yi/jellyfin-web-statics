"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[85177,49213,5662],{84468:function(e,n,t){t.r(n);var a=t(24246),r=t(27378),o=t(27851),u=t(94994),i=t(71487),l=t(57084),s=t(30325),c=t(67345),d=(t(21694),t(38228),t(24432),t(6055)),f=function(){return f=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},f.apply(this,arguments)};n.default=function(){var e=function(e,n){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var a,r,o=t.call(e),u=[];try{for(;(void 0===n||n-- >0)&&!(a=o.next()).done;)u.push(a.value)}catch(e){r={error:e}}finally{try{a&&!a.done&&(t=o.return)&&t.call(o)}finally{if(r)throw r.error}}return u}((0,o.lr)(),1)[0],n=parseInt(e.get("tab")||"0",10),v=(0,r.useRef)(),b=(0,r.useMemo)((function(){return[]}),[]),h=(0,r.useRef)(null),p=function(){return[{name:u.ZP.translate("Home")},{name:u.ZP.translate("Favorites")}]},m=function(){var e;return null===(e=h.current)||void 0===e?void 0:e.querySelectorAll(".tabContent")},y=(0,r.useCallback)((function(e){if(null==e)throw new Error("index cannot be null");var n="";switch(e){case 0:n="hometab";break;case 1:n="favorites"}return t(23935)("./".concat(n)).then((function(n){var t,a=n.default,r=b[e];return r||(r=new a(null===(t=h.current)||void 0===t?void 0:t.querySelector(".tabContent[data-index='"+e+"']"),null),b[e]=r),r}))}),[b]),w=(0,r.useCallback)((function(){b&&b.forEach((function(e){e.destroy&&e.destroy()})),v.current=null}),[b]),k=(0,r.useCallback)((function(e,n){y(e).then((function(e){var t=!e.refreshed;e.onResume({autoFocus:null==n&&s.Z.tv,refresh:t}),e.refreshed=!0,v.current=e})).catch((function(e){console.error("[Home] failed to get tab controller",e)}))}),[y]),g=(0,r.useCallback)((function(e){var n=parseInt(e.detail.selectedTabIndex,10),t=e.detail.previousIndex,a=null==t?null:b[t];a&&a.onPause&&a.onPause(),k(n,t)}),[k,b]),C=(0,r.useCallback)((function(){i.default.setTitle(null),(0,l.rs)();var e=v.current;e?e&&e.onResume&&e.onResume({}):c.selectedTabIndex(n),document.querySelector(".skinHeader").classList.add("noHomeButtonHeader")}),[n]),E=(0,r.useCallback)((function(){var e=v.current;e&&e.onPause&&e.onPause(),document.querySelector(".skinHeader").classList.remove("noHomeButtonHeader")}),[]);return(0,r.useEffect)((function(){return c.setTabs(h.current,n,p,m,null,g,!1),C(),function(){E()}}),[n,E,C,g,w]),(0,a.jsx)("div",f({ref:h},{children:(0,a.jsxs)(d.Z,f({id:"indexPage",className:"mainAnimatedPage homePage libraryPage allLibraryPage backdropPage pageWithAbsoluteTabs withTabs",isBackButtonEnabled:!1,backDropType:"movie,series,book"},{children:[(0,a.jsx)("div",f({className:"tabContent pageTabContent",id:"homeTab","data-index":"0"},{children:(0,a.jsx)("div",{className:"sections"})})),(0,a.jsx)("div",f({className:"tabContent pageTabContent",id:"favoritesTab","data-index":"1"},{children:(0,a.jsx)("div",{className:"sections"})}))]}))}))}},6055:function(e,n,t){var a=t(24246),r=t(27378),o=t(53424),u=function(){return u=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},u.apply(this,arguments)};n.Z=function(e){var n=e.children,t=e.id,i=e.className,l=void 0===i?"":i,s=e.title,c=e.isBackButtonEnabled,d=void 0===c||c,f=e.isMenuButtonEnabled,v=void 0!==f&&f,b=e.isNowPlayingBarEnabled,h=void 0===b||b,p=e.isThemeMediaSupported,m=void 0!==p&&p,y=e.backDropType,w=(0,r.useRef)(null);return(0,r.useEffect)((function(){o.Z.hideView()}),[]),(0,r.useEffect)((function(){var e,n,t,a,r={bubbles:!0,cancelable:!1,detail:{isRestored:!1,options:{enableMediaControl:h,supportsThemeMedia:m}}};null===(e=w.current)||void 0===e||e.dispatchEvent(new CustomEvent("viewbeforeshow",r)),null===(n=w.current)||void 0===n||n.dispatchEvent(new CustomEvent("pagebeforeshow",r)),null===(t=w.current)||void 0===t||t.dispatchEvent(new CustomEvent("viewshow",r)),null===(a=w.current)||void 0===a||a.dispatchEvent(new CustomEvent("pageshow",r))}),[w,h,m]),(0,a.jsx)("div",u({ref:w,id:t,"data-role":"page",className:"page ".concat(l),"data-title":s,"data-backbutton":d,"data-menubutton":v,"data-backdroptype":y},{children:n}))}}}]);