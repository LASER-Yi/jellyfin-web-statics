"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[85177,67345],{67345:function(e,t,n){n.r(t),n.d(t,{getTabsElement:function(){return b},selectedTabIndex:function(){return v},setTabs:function(){return h}}),n(5769),n(63238),n(61418),n(17460),n(14078),n(61013);var r,s,a,i=n(72365),o=n(57366),l=n(81643),c=(n(21694),n(38228),document.querySelector(".skinHeader"));function d(){this.selectedIndex(this.readySelectedIndex),this.readySelectedIndex=null}function u(e){function t(e){if(i.ZP.parentWithTag(e,"input"))return!1;var t=e.classList;return!t||!t.contains("scrollX")&&!t.contains("animatedScrollX")}for(var n=e;null!=n;){if(!t(n))return!1;n=n.parentNode}return!0}function h(e,t,i,h,v,b,f){if(s||(s=c.querySelector(".headerTabs")),!e)return r&&(document.body.classList.remove("withSectionTabs"),s.innerHTML="",s.classList.add("hide"),r=null),{tabsContainer:s,replaced:!1};var m=s;if(r||m.classList.remove("hide"),r!==e){var p=0,g='<div is="emby-tabs"'+(null==t?"":' data-index="'+t+'"')+' class="tabs-viewmenubar"><div class="emby-tabs-slider" style="white-space:nowrap;">'+i().map((function(e){var t,n="emby-tab-button";return!1===e.enabled&&(n+=" hide"),e.cssClass&&(n+=" "+e.cssClass),t=e.href?'<a href="'+e.href+'" is="emby-linkbutton" class="'+n+'" data-index="'+p+'"><div class="emby-button-foreground">'+e.name+"</div></a>":'<button type="button" is="emby-button" class="'+n+'" data-index="'+p+'"><div class="emby-button-foreground">'+e.name+"</div></button>",p++,t})).join("")+"</div></div>";return m.innerHTML=g,window.CustomElements.upgradeSubtree(m),document.body.classList.add("withSectionTabs"),r=e,function(e,t){if(o.Z.touch){var r=function(n,r){u(r)&&e.contains(r)&&t.selectNext()},s=function(n,r){u(r)&&e.contains(r)&&t.selectPrevious()};n.e(14810).then(n.bind(n,14810)).then((function(t){var n=new(0,t.default)(e.parentNode.parentNode);l.Z.on(n,"swipeleft",r),l.Z.on(n,"swiperight",s),e.addEventListener("viewdestroy",(function(){n.destroy()}))}))}}(e,a=m.querySelector('[is="emby-tabs"]')),h&&a.addEventListener("beforetabchange",(function(e){var t=h();if(null!=e.detail.previousIndex){var n=t[e.detail.previousIndex];n&&n.classList.remove("is-active")}var r=t[e.detail.selectedTabIndex];r&&r.classList.add("is-active")})),v&&a.addEventListener("beforetabchange",v),b&&a.addEventListener("tabchange",b),!1!==f&&(a.selectedIndex?a.selectedIndex(t):(a.readySelectedIndex=t,a.addEventListener("ready",d))),{tabsContainer:m,tabs:a,replaced:!0}}return a.selectedIndex(t),{tabsContainer:m,tabs:a,replaced:!1}}function v(e){null!=e?a.selectedIndex(e):a.triggerTabChange()}function b(){return document.querySelector(".tabs-viewmenubar")}},24432:function(e,t,n){n(5769),n(63238),n(61418),n(17460),n(14078);var r=n(15723),s=n(72365),a=n(30325),i=n(58517),o=n(34643),l=n(57366),c=(n(67752),Object.create(HTMLDivElement.prototype));function d(e){var t=e.detail.command;"end"===t?(o.Z.focusLast(this,"."+this.getAttribute("data-navcommands")),e.preventDefault(),e.stopPropagation()):"pageup"===t?(o.Z.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),-12),e.preventDefault(),e.stopPropagation()):"pagedown"===t&&(o.Z.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),12),e.preventDefault(),e.stopPropagation())}c.createdCallback=function(){this.classList.add("emby-scroller")},c.scrollToBeginning=function(){this.scroller&&this.scroller.slideTo(0,!0)},c.toStart=function(e,t){this.scroller&&this.scroller.toStart(e,t)},c.toCenter=function(e,t){this.scroller&&this.scroller.toCenter(e,t)},c.scrollToPosition=function(e,t){this.scroller&&this.scroller.slideTo(e,t)},c.getScrollPosition=function(){if(this.scroller)return this.scroller.getScrollPosition()},c.getScrollSize=function(){if(this.scroller)return this.scroller.getScrollSize()},c.getScrollEventName=function(){if(this.scroller)return this.scroller.getScrollEventName()},c.getScrollSlider=function(){if(this.scroller)return this.scroller.getScrollSlider()},c.addScrollEventListener=function(e,t){this.scroller&&s.ZP.addEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},c.removeScrollEventListener=function(e,t){this.scroller&&s.ZP.removeEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},c.attachedCallback=function(){this.getAttribute("data-navcommands")&&i.default.on(this,d);var e="false"!==this.getAttribute("data-horizontal"),t=this.querySelector(".scrollSlider");e&&(t.style["white-space"]="nowrap");var c,u,h=a.Z.desktop&&e&&"false"!==this.getAttribute("data-scrollbuttons"),v={horizontal:e,mouseDragging:1,mouseWheel:"false"!==this.getAttribute("data-mousewheel"),touchDragging:1,slidee:t,scrollBy:200,speed:e?270:240,elasticBounds:1,dragHandle:1,autoImmediate:!0,skipSlideToWhenVisible:"true"===this.getAttribute("data-skipfocuswhenvisible"),dispatchScrollEvent:h||"true"===this.getAttribute("data-scrollevent"),hideScrollbar:h||"true"===this.getAttribute("data-hidescrollbar"),allowNativeSmoothScroll:"true"===this.getAttribute("data-allownativesmoothscroll")&&!h,allowNativeScroll:!h,forceHideScrollbars:h,requireAnimation:h&&l.Z.edge};this.scroller=new r.Z(this,v),this.scroller.init(),this.scroller.reload(),a.Z.tv&&this.getAttribute("data-centerfocus")&&(this,c=this.scroller,s.ZP.addEventListener(this,"focus",(function(e){var t=o.Z.focusableParent(e.target);t&&c.toCenter(t)}),{capture:!0,passive:!0})),h&&(u=this,n.e(39346).then(n.bind(n,39346)).then((function(){u.insertAdjacentHTML("beforebegin",'<div is="emby-scrollbuttons" class="emby-scrollbuttons padded-right"></div>')})))},c.pause=function(){var e=this.headroom;e&&e.pause()},c.resume=function(){var e=this.headroom;e&&e.resume()},c.detachedCallback=function(){this.getAttribute("data-navcommands")&&i.default.off(this,d);var e=this.headroom;e&&(e.destroy(),this.headroom=null);var t=this.scroller;t&&(t.destroy(),this.scroller=null)},document.registerElement("emby-scroller",{prototype:c,extends:"div"})},21694:function(e,t,n){n(32081),n(67752);var r=n(72365),s=n(15723),a=n(57366),i=n(34643),o=n(30325),l=Object.create(HTMLDivElement.prototype),c="emby-tab-button",d=c+"-active";function u(e){e.classList.add(d)}function h(e,t,n){var r;e.dispatchEvent(new CustomEvent("beforetabchange",{detail:{selectedTabIndex:t,previousIndex:n}})),null!=n&&n!==t&&(r=null)&&r.classList.remove("is-active")}function v(e){var t=this,n=t.querySelector("."+d),s=r.ZP.parentWithClass(e.target,c);if(s&&s!==n){n&&n.classList.remove(d);var a=n?parseInt(n.getAttribute("data-index"),10):null;u(s);var i=parseInt(s.getAttribute("data-index"),10);h(t,i,a),setTimeout((function(){t.selectedTabIndex=i,t.dispatchEvent(new CustomEvent("tabchange",{detail:{selectedTabIndex:i,previousIndex:a}}))}),120),t.scroller&&t.scroller.toCenter(s,!1)}}function b(e){var t=r.ZP.parentWithClass(e.target,c);t&&this.scroller&&this.scroller.toCenter(t,!1)}function f(e){var t=e.target.parentNode.querySelector(".lastFocused");t&&t.classList.remove("lastFocused"),e.target.classList.add("lastFocused")}function m(e){return e.querySelector("."+d)}function p(e,t){for(var n=e[t];n;){if(n.classList.contains(c)&&!n.classList.contains("hide"))return n;n=n[t]}return null}l.createdCallback=function(){this.classList.contains("emby-tabs")||(this.classList.add("emby-tabs"),this.classList.add("focusable"),r.ZP.addEventListener(this,"click",v,{passive:!0}),o.Z.tv&&r.ZP.addEventListener(this,"focusin",b,{passive:!0}),r.ZP.addEventListener(this,"focusout",f))},l.focus=function(){var e=this.querySelector("."+d),t=this.querySelector(".lastFocused");t?i.Z.focus(t):e?i.Z.focus(e):i.Z.autoFocus(this)},l.refresh=function(){this.scroller&&this.scroller.reload()},l.attachedCallback=function(){!function(e){if(!e.scroller){var t=e.querySelector(".emby-tabs-slider");t?(e.scroller=new s.Z(e,{horizontal:1,itemNav:0,mouseDragging:1,touchDragging:1,slidee:t,smart:!0,releaseSwing:!0,scrollBy:200,speed:120,elasticBounds:1,dragHandle:1,dynamicHandle:1,clickBar:1,hiddenScroll:!0,requireAnimation:!a.Z.safari,allowNativeSmoothScroll:!0}),e.scroller.init()):(e.classList.add("scrollX"),e.classList.add("hiddenScrollX"),e.classList.add("smoothScrollX"))}}(this);var e=this.querySelector("."+d),t=e?parseInt(e.getAttribute("data-index"),10):parseInt(this.getAttribute("data-index")||"0",10);if(-1!==t){this.selectedTabIndex=t;var n=this.querySelectorAll("."+c)[t];n&&u(n)}this.readyFired||(this.readyFired=!0,this.dispatchEvent(new CustomEvent("ready",{})))},l.detachedCallback=function(){this.scroller&&(this.scroller.destroy(),this.scroller=null),r.ZP.removeEventListener(this,"click",v,{passive:!0}),o.Z.tv&&r.ZP.removeEventListener(this,"focusin",b,{passive:!0})},l.selectedIndex=function(e,t){var n=this;if(null==e)return n.selectedTabIndex||0;var r=n.selectedIndex();n.selectedTabIndex=e;var s=n.querySelectorAll("."+c);if(r===e||!1===t){h(n,e,r),n.dispatchEvent(new CustomEvent("tabchange",{detail:{selectedTabIndex:e}}));var a=s[r];u(s[e]),r!==e&&a&&a.classList.remove(d)}else v.call(n,{target:s[e]})},l.selectNext=function(){var e=p(m(this),"nextSibling");e&&v.call(this,{target:e})},l.selectPrevious=function(){var e=p(m(this),"previousSibling");e&&v.call(this,{target:e})},l.triggerBeforeTabChange=function(){h(this,this.selectedIndex())},l.triggerTabChange=function(){this.dispatchEvent(new CustomEvent("tabchange",{detail:{selectedTabIndex:this.selectedIndex()}}))},l.setTabEnabled=function(e,t){var n=this.querySelector('.emby-tab-button[data-index="'+e+'"]');t?n.classList.remove("hide"):n.classList.remove("add")},document.registerElement("emby-tabs",{prototype:l,extends:"div"})},6055:function(e,t,n){var r=n(24246),s=n(27378),a=n(53424),i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},i.apply(this,arguments)};t.Z=function(e){var t=e.children,n=e.id,o=e.className,l=void 0===o?"":o,c=e.title,d=e.isBackButtonEnabled,u=void 0===d||d,h=e.isMenuButtonEnabled,v=void 0!==h&&h,b=e.isNowPlayingBarEnabled,f=void 0===b||b,m=e.isThemeMediaSupported,p=void 0!==m&&m,g=e.backDropType,y=(0,s.useRef)(null);return(0,s.useEffect)((function(){a.Z.hideView()}),[]),(0,s.useEffect)((function(){var e,t,n,r,s={bubbles:!0,cancelable:!1,detail:{isRestored:!1,options:{enableMediaControl:f,supportsThemeMedia:p}}};null===(e=y.current)||void 0===e||e.dispatchEvent(new CustomEvent("viewbeforeshow",s)),null===(t=y.current)||void 0===t||t.dispatchEvent(new CustomEvent("pagebeforeshow",s)),null===(n=y.current)||void 0===n||n.dispatchEvent(new CustomEvent("viewshow",s)),null===(r=y.current)||void 0===r||r.dispatchEvent(new CustomEvent("pageshow",s))}),[y,f,p]),(0,r.jsx)("div",i({ref:y,id:n,"data-role":"page",className:"page ".concat(l),"data-title":c,"data-backbutton":u,"data-menubutton":v,"data-backdroptype":g},{children:t}))}},3727:function(e,t,n){n.r(t);var r=n(24246),s=n(27378),a=n(27851),i=n(94994),o=n(71487),l=n(57084),c=n(30325),d=n(67345),u=(n(21694),n(38228),n(24432),n(6055)),h=function(){return h=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},h.apply(this,arguments)};t.default=function(){var e=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,s,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(e){s={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(s)throw s.error}}return i}((0,a.lr)(),1)[0],t=parseInt(e.get("tab")||"0",10),v=(0,s.useRef)(),b=(0,s.useMemo)((function(){return[]}),[]),f=(0,s.useRef)(null),m=function(){return[{name:i.ZP.translate("Home")},{name:i.ZP.translate("Favorites")}]},p=function(){var e;return null===(e=f.current)||void 0===e?void 0:e.querySelectorAll(".tabContent")},g=(0,s.useCallback)((function(e){if(null==e)throw new Error("index cannot be null");var t="";switch(e){case 0:t="hometab";break;case 1:t="favorites"}return n(23935)("./".concat(t)).then((function(t){var n,r=t.default,s=b[e];return s||(s=new r(null===(n=f.current)||void 0===n?void 0:n.querySelector(".tabContent[data-index='"+e+"']"),null),b[e]=s),s}))}),[b]),y=(0,s.useCallback)((function(){b&&b.forEach((function(e){e.destroy&&e.destroy()})),v.current=null}),[b]),S=(0,s.useCallback)((function(e,t){g(e).then((function(e){var n=!e.refreshed;e.onResume({autoFocus:null==t&&c.Z.tv,refresh:n}),e.refreshed=!0,v.current=e}))}),[g]),x=(0,s.useCallback)((function(e){var t=parseInt(e.detail.selectedTabIndex,10),n=e.detail.previousIndex,r=null==n?null:b[n];r&&r.onPause&&r.onPause(),S(t,n)}),[S,b]),E=(0,s.useCallback)((function(){o.Z.setTitle(null),(0,l.rs)();var e=v.current;e?e&&e.onResume&&e.onResume({}):d.selectedTabIndex(t),document.querySelector(".skinHeader").classList.add("noHomeButtonHeader")}),[t]),w=(0,s.useCallback)((function(){var e=v.current;e&&e.onPause&&e.onPause(),document.querySelector(".skinHeader").classList.remove("noHomeButtonHeader")}),[]);return(0,s.useEffect)((function(){return d.setTabs(f.current,t,m,p,null,x,!1),E(),function(){w()}}),[t,w,E,x,y]),(0,r.jsx)("div",h({ref:f},{children:(0,r.jsxs)(u.Z,h({id:"indexPage",className:"mainAnimatedPage homePage libraryPage allLibraryPage backdropPage pageWithAbsoluteTabs withTabs",isBackButtonEnabled:!1,backDropType:"movie,series,book"},{children:[(0,r.jsx)("div",h({className:"tabContent pageTabContent",id:"homeTab","data-index":"0"},{children:(0,r.jsx)("div",{className:"sections"})})),(0,r.jsx)("div",h({className:"tabContent pageTabContent",id:"favoritesTab","data-index":"1"},{children:(0,r.jsx)("div",{className:"sections"})}))]}))}))}}}]);