"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[46725],{67345:function(e,t,r){r.r(t),r.d(t,{getTabsElement:function(){return v},selectedTabIndex:function(){return h},setTabs:function(){return f}}),r(5769),r(63238),r(61418),r(17460),r(14078),r(61013);var n,i,s,o=r(72365),a=r(57366),l=r(81643),c=(r(21694),r(38228),document.querySelector(".skinHeader"));function u(){this.selectedIndex(this.readySelectedIndex),this.readySelectedIndex=null}function d(e){function t(e){if(o.ZP.parentWithTag(e,"input"))return!1;var t=e.classList;return!t||!t.contains("scrollX")&&!t.contains("animatedScrollX")}for(var r=e;null!=r;){if(!t(r))return!1;r=r.parentNode}return!0}function f(e,t,o,f,h,v,b){if(i||(i=c.querySelector(".headerTabs")),!e)return n&&(document.body.classList.remove("withSectionTabs"),i.innerHTML="",i.classList.add("hide"),n=null),{tabsContainer:i,replaced:!1};var m=i;if(n||m.classList.remove("hide"),n!==e){var p=0,y='<div is="emby-tabs"'+(null==t?"":' data-index="'+t+'"')+' class="tabs-viewmenubar"><div class="emby-tabs-slider" style="white-space:nowrap;">'+o().map((function(e){var t,r="emby-tab-button";return!1===e.enabled&&(r+=" hide"),e.cssClass&&(r+=" "+e.cssClass),t=e.href?'<a href="'+e.href+'" is="emby-linkbutton" class="'+r+'" data-index="'+p+'"><div class="emby-button-foreground">'+e.name+"</div></a>":'<button type="button" is="emby-button" class="'+r+'" data-index="'+p+'"><div class="emby-button-foreground">'+e.name+"</div></button>",p++,t})).join("")+"</div></div>";return m.innerHTML=y,window.CustomElements.upgradeSubtree(m),document.body.classList.add("withSectionTabs"),n=e,function(e,t){if(a.Z.touch){var n=function(r,n){d(n)&&e.contains(n)&&t.selectNext()},i=function(r,n){d(n)&&e.contains(n)&&t.selectPrevious()};r.e(14810).then(r.bind(r,14810)).then((function(t){var r=new(0,t.default)(e.parentNode.parentNode);l.Z.on(r,"swipeleft",n),l.Z.on(r,"swiperight",i),e.addEventListener("viewdestroy",(function(){r.destroy()}))}))}}(e,s=m.querySelector('[is="emby-tabs"]')),f&&s.addEventListener("beforetabchange",(function(e){var t=f();if(null!=e.detail.previousIndex){var r=t[e.detail.previousIndex];r&&r.classList.remove("is-active")}var n=t[e.detail.selectedTabIndex];n&&n.classList.add("is-active")})),h&&s.addEventListener("beforetabchange",h),v&&s.addEventListener("tabchange",v),!1!==b&&(s.selectedIndex?s.selectedIndex(t):(s.readySelectedIndex=t,s.addEventListener("ready",u))),{tabsContainer:m,tabs:s,replaced:!0}}return s.selectedIndex(t),{tabsContainer:m,tabs:s,replaced:!1}}function h(e){null!=e?s.selectedIndex(e):s.triggerTabChange()}function v(){return document.querySelector(".tabs-viewmenubar")}},15586:function(e,t,r){r.r(t),r.d(t,{default:function(){return y}}),r(5769),r(63238),r(61418),r(17460),r(14078),r(50987),r(12274),r(3214),r(99785),r(83011),r(20252),r(19068),r(87211),r(25901),r(92189),r(95163),r(91047),r(55849),r(32081);var n=r(57084),i=r(67345),s=r(30325),o=(r(21694),r(71487));function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==a(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===a(i)?i:String(i)),n)}var i}function c(){var e=this.tabControllers;e&&(e.forEach((function(e){e.destroy&&e.destroy()})),this.tabControllers=null),this.view=null,this.params=null,this.currentTabController=null,this.initialTabIndex=null}var u=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.tabControllers=[],this.view=t,this.params=r;var n=this,o=parseInt(r.tab||this.getDefaultTabIndex(r.parentId),10);function a(){return t.querySelectorAll(".tabContent")}function l(e){var t=parseInt(e.detail.selectedTabIndex,10),r=e.detail.previousIndex,i=null==r?null:n.tabControllers[r];i&&i.onPause&&i.onPause(),function(e,t){(function(e){return n.validateTabLoad?n.validateTabLoad(e):Promise.resolve()})(e).then((function(){n.getTabController(e).then((function(r){var i=!r.refreshed;r.onResume({autoFocus:null==t&&s.Z.tv,refresh:i}),r.refreshed=!0,o=e,n.currentTabController=r}))}))}(t,r)}this.initialTabIndex=o,t.addEventListener("viewbeforehide",this.onPause.bind(this)),t.addEventListener("viewbeforeshow",(function(){i.setTabs(t,o,n.getTabs,a,null,l,!1)})),t.addEventListener("viewshow",(function(e){n.onResume(e.detail)})),t.addEventListener("viewdestroy",c.bind(this))}var t,r;return t=e,(r=[{key:"onResume",value:function(){this.setTitle(),(0,n.rs)();var e=this.currentTabController;e?e&&e.onResume&&e.onResume({}):i.selectedTabIndex(this.initialTabIndex)}},{key:"onPause",value:function(){var e=this.currentTabController;e&&e.onPause&&e.onPause()}},{key:"setTitle",value:function(){o.default.setTitle("")}}])&&l(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),d=r(94994);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==f(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===f(i)?i:String(i)),n)}var i}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=m(e)););return e}(e,t);if(n){var i=Object.getOwnPropertyDescriptor(n,t);return i.get?i.get.call(arguments.length<3?e:r):i.value}},v.apply(this,arguments)}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}r(38228),r(24432);var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(l,e);var t,n,i,s,a=(i=l,s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(i);if(s){var r=m(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function l(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),a.apply(this,arguments)}return t=l,(n=[{key:"setTitle",value:function(){o.default.setTitle(null)}},{key:"onPause",value:function(){v(m(l.prototype),"onPause",this).call(this,this),document.querySelector(".skinHeader").classList.remove("noHomeButtonHeader")}},{key:"onResume",value:function(e){v(m(l.prototype),"onResume",this).call(this,this,e),document.querySelector(".skinHeader").classList.add("noHomeButtonHeader")}},{key:"getDefaultTabIndex",value:function(){return 0}},{key:"getTabs",value:function(){return[{name:d.ZP.translate("Home")},{name:d.ZP.translate("Favorites")}]}},{key:"getTabController",value:function(e){if(null==e)throw new Error("index cannot be null");var t="";switch(e){case 0:t="hometab";break;case 1:t="favorites"}var n=this;return r(23935)("./".concat(t)).then((function(t){var r=t.default,i=n.tabControllers[e];return i||(i=new r(n.view.querySelector(".tabContent[data-index='"+e+"']"),n.params),n.tabControllers[e]=i),i}))}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),l}(u),y=p},24432:function(e,t,r){r(5769),r(63238),r(61418),r(17460),r(14078);var n=r(15723),i=r(72365),s=r(30325),o=r(58517),a=r(34643),l=r(57366),c=(r(67752),Object.create(HTMLDivElement.prototype));function u(e){var t=e.detail.command;"end"===t?(a.Z.focusLast(this,"."+this.getAttribute("data-navcommands")),e.preventDefault(),e.stopPropagation()):"pageup"===t?(a.Z.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),-12),e.preventDefault(),e.stopPropagation()):"pagedown"===t&&(a.Z.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),12),e.preventDefault(),e.stopPropagation())}c.createdCallback=function(){this.classList.add("emby-scroller")},c.scrollToBeginning=function(){this.scroller&&this.scroller.slideTo(0,!0)},c.toStart=function(e,t){this.scroller&&this.scroller.toStart(e,t)},c.toCenter=function(e,t){this.scroller&&this.scroller.toCenter(e,t)},c.scrollToPosition=function(e,t){this.scroller&&this.scroller.slideTo(e,t)},c.getScrollPosition=function(){if(this.scroller)return this.scroller.getScrollPosition()},c.getScrollSize=function(){if(this.scroller)return this.scroller.getScrollSize()},c.getScrollEventName=function(){if(this.scroller)return this.scroller.getScrollEventName()},c.getScrollSlider=function(){if(this.scroller)return this.scroller.getScrollSlider()},c.addScrollEventListener=function(e,t){this.scroller&&i.ZP.addEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},c.removeScrollEventListener=function(e,t){this.scroller&&i.ZP.removeEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},c.attachedCallback=function(){this.getAttribute("data-navcommands")&&o.default.on(this,u);var e="false"!==this.getAttribute("data-horizontal"),t=this.querySelector(".scrollSlider");e&&(t.style["white-space"]="nowrap");var c,d,f=s.Z.desktop&&e&&"false"!==this.getAttribute("data-scrollbuttons"),h={horizontal:e,mouseDragging:1,mouseWheel:"false"!==this.getAttribute("data-mousewheel"),touchDragging:1,slidee:t,scrollBy:200,speed:e?270:240,elasticBounds:1,dragHandle:1,autoImmediate:!0,skipSlideToWhenVisible:"true"===this.getAttribute("data-skipfocuswhenvisible"),dispatchScrollEvent:f||"true"===this.getAttribute("data-scrollevent"),hideScrollbar:f||"true"===this.getAttribute("data-hidescrollbar"),allowNativeSmoothScroll:"true"===this.getAttribute("data-allownativesmoothscroll")&&!f,allowNativeScroll:!f,forceHideScrollbars:f,requireAnimation:f&&l.Z.edge};this.scroller=new n.Z(this,h),this.scroller.init(),this.scroller.reload(),s.Z.tv&&this.getAttribute("data-centerfocus")&&(this,c=this.scroller,i.ZP.addEventListener(this,"focus",(function(e){var t=a.Z.focusableParent(e.target);t&&c.toCenter(t)}),{capture:!0,passive:!0})),f&&(d=this,r.e(39346).then(r.bind(r,39346)).then((function(){d.insertAdjacentHTML("beforebegin",'<div is="emby-scrollbuttons" class="emby-scrollbuttons padded-right"></div>')})))},c.pause=function(){var e=this.headroom;e&&e.pause()},c.resume=function(){var e=this.headroom;e&&e.resume()},c.detachedCallback=function(){this.getAttribute("data-navcommands")&&o.default.off(this,u);var e=this.headroom;e&&(e.destroy(),this.headroom=null);var t=this.scroller;t&&(t.destroy(),this.scroller=null)},document.registerElement("emby-scroller",{prototype:c,extends:"div"})},21694:function(e,t,r){r(32081),r(67752);var n=r(72365),i=r(15723),s=r(57366),o=r(34643),a=r(30325),l=Object.create(HTMLDivElement.prototype),c="emby-tab-button",u=c+"-active";function d(e){e.classList.add(u)}function f(e,t,r){var n;e.dispatchEvent(new CustomEvent("beforetabchange",{detail:{selectedTabIndex:t,previousIndex:r}})),null!=r&&r!==t&&(n=null)&&n.classList.remove("is-active")}function h(e){var t=this,r=t.querySelector("."+u),i=n.ZP.parentWithClass(e.target,c);if(i&&i!==r){r&&r.classList.remove(u);var s=r?parseInt(r.getAttribute("data-index"),10):null;d(i);var o=parseInt(i.getAttribute("data-index"),10);f(t,o,s),setTimeout((function(){t.selectedTabIndex=o,t.dispatchEvent(new CustomEvent("tabchange",{detail:{selectedTabIndex:o,previousIndex:s}}))}),120),t.scroller&&t.scroller.toCenter(i,!1)}}function v(e){var t=n.ZP.parentWithClass(e.target,c);t&&this.scroller&&this.scroller.toCenter(t,!1)}function b(e){var t=e.target.parentNode.querySelector(".lastFocused");t&&t.classList.remove("lastFocused"),e.target.classList.add("lastFocused")}function m(e){return e.querySelector("."+u)}function p(e,t){for(var r=e[t];r;){if(r.classList.contains(c)&&!r.classList.contains("hide"))return r;r=r[t]}return null}l.createdCallback=function(){this.classList.contains("emby-tabs")||(this.classList.add("emby-tabs"),this.classList.add("focusable"),n.ZP.addEventListener(this,"click",h,{passive:!0}),a.Z.tv&&n.ZP.addEventListener(this,"focusin",v,{passive:!0}),n.ZP.addEventListener(this,"focusout",b))},l.focus=function(){var e=this.querySelector("."+u),t=this.querySelector(".lastFocused");t?o.Z.focus(t):e?o.Z.focus(e):o.Z.autoFocus(this)},l.refresh=function(){this.scroller&&this.scroller.reload()},l.attachedCallback=function(){!function(e){if(!e.scroller){var t=e.querySelector(".emby-tabs-slider");t?(e.scroller=new i.Z(e,{horizontal:1,itemNav:0,mouseDragging:1,touchDragging:1,slidee:t,smart:!0,releaseSwing:!0,scrollBy:200,speed:120,elasticBounds:1,dragHandle:1,dynamicHandle:1,clickBar:1,hiddenScroll:!0,requireAnimation:!s.Z.safari,allowNativeSmoothScroll:!0}),e.scroller.init()):(e.classList.add("scrollX"),e.classList.add("hiddenScrollX"),e.classList.add("smoothScrollX"))}}(this);var e=this.querySelector("."+u),t=e?parseInt(e.getAttribute("data-index"),10):parseInt(this.getAttribute("data-index")||"0",10);if(-1!==t){this.selectedTabIndex=t;var r=this.querySelectorAll("."+c)[t];r&&d(r)}this.readyFired||(this.readyFired=!0,this.dispatchEvent(new CustomEvent("ready",{})))},l.detachedCallback=function(){this.scroller&&(this.scroller.destroy(),this.scroller=null),n.ZP.removeEventListener(this,"click",h,{passive:!0}),a.Z.tv&&n.ZP.removeEventListener(this,"focusin",v,{passive:!0})},l.selectedIndex=function(e,t){var r=this;if(null==e)return r.selectedTabIndex||0;var n=r.selectedIndex();r.selectedTabIndex=e;var i=r.querySelectorAll("."+c);if(n===e||!1===t){f(r,e,n),r.dispatchEvent(new CustomEvent("tabchange",{detail:{selectedTabIndex:e}}));var s=i[n];d(i[e]),n!==e&&s&&s.classList.remove(u)}else h.call(r,{target:i[e]})},l.selectNext=function(){var e=p(m(this),"nextSibling");e&&h.call(this,{target:e})},l.selectPrevious=function(){var e=p(m(this),"previousSibling");e&&h.call(this,{target:e})},l.triggerBeforeTabChange=function(){f(this,this.selectedIndex())},l.triggerTabChange=function(){this.dispatchEvent(new CustomEvent("tabchange",{detail:{selectedTabIndex:this.selectedIndex()}}))},l.setTabEnabled=function(e,t){var r=this.querySelector('.emby-tab-button[data-index="'+e+'"]');t?r.classList.remove("hide"):r.classList.remove("add")},document.registerElement("emby-tabs",{prototype:l,extends:"div"})},51869:function(e,t,r){var n="assets/img/devices/";t.ZP={getDeviceIcon:function(e){switch(e.AppName||e.Client){case"Samsung Smart TV":return n+"samsung.svg";case"Xbox One":return n+"xbox.svg";case"Sony PS4":return n+"playstation.svg";case"Kodi":case"Kodi JellyCon":return n+"kodi.svg";case"Jellyfin Android":case"AndroidTV":case"Android TV":return n+"android.svg";case"Jellyfin Mobile (iOS)":case"Jellyfin Mobile (iPadOS)":case"Jellyfin iOS":case"Infuse":return n+"apple.svg";case"Home Assistant":return n+"home-assistant.svg";case"Jellyfin Roku":return n+"roku.svg";case"Finamp":return n+"finamp.svg";case"Jellyfin Web":return function(e){switch(e){case"Opera":case"Opera TV":case"Opera Android":return n+"opera.svg";case"Chrome":case"Chrome Android":return n+"chrome.svg";case"Firefox":case"Firefox Android":return n+"firefox.svg";case"Safari":case"Safari iPad":case"Safari iPhone":return n+"safari.svg";case"Edge Chromium":case"Edge Chromium Android":case"Edge Chromium iPad":case"Edge Chromium iPhone":return n+"edgechromium.svg";case"Edge":return n+"edge.svg";case"Internet Explorer":return n+"msie.svg";default:return n+"html5.svg"}}(e.Name||e.DeviceName);default:return n+"other.svg"}},getLibraryIcon:function(e){switch(e){case"movies":return"video_library";case"music":return"library_music";case"photos":case"homevideos":return"photo_library";case"livetv":return"live_tv";case"tvshows":return"tv";case"trailers":return"local_movies";case"musicvideos":return"music_video";case"books":return"library_books";case"channels":return"videocam";case"playlists":return"view_list";default:return"folder"}}}}}]);