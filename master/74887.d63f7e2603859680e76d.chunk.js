/*! For license information please see 74887.d63f7e2603859680e76d.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[74887],{25091:function(e,t,r){r.r(t),r.d(t,{getTabsElement:function(){return h},selectedTabIndex:function(){return v},setTabs:function(){return f}}),r(44962),r(86584),r(78557),r(90076),r(83994),r(82367);var n,i,o,s=r(47629),a=r(34789),l=r(62014),c=(r(79845),r(10353),document.querySelector(".skinHeader"));function u(){this.selectedIndex(this.readySelectedIndex),this.readySelectedIndex=null}function d(e){function t(e){if(s.Ay.parentWithTag(e,"input"))return!1;var t=e.classList;return!t||!t.contains("scrollX")&&!t.contains("animatedScrollX")}for(var r=e;null!=r;){if(!t(r))return!1;r=r.parentNode}return!0}function f(e,t,s,f,v,h,b){if(i||(i=c.querySelector(".headerTabs")),!e)return n&&(document.body.classList.remove("withSectionTabs"),i.innerHTML="",i.classList.add("hide"),n=null),{tabsContainer:i,replaced:!1};var m=i;if(n||m.classList.remove("hide"),n!==e){var y=0,p='<div is="emby-tabs"'+(null==t?"":' data-index="'+t+'"')+' class="tabs-viewmenubar"><div class="emby-tabs-slider" style="white-space:nowrap;">'+s().map((function(e){var t,r="emby-tab-button";return!1===e.enabled&&(r+=" hide"),e.cssClass&&(r+=" "+e.cssClass),t=e.href?'<a href="'+e.href+'" is="emby-linkbutton" class="'+r+'" data-index="'+y+'"><div class="emby-button-foreground">'+e.name+"</div></a>":'<button type="button" is="emby-button" class="'+r+'" data-index="'+y+'"><div class="emby-button-foreground">'+e.name+"</div></button>",y++,t})).join("")+"</div></div>";return m.innerHTML=p,window.CustomElements.upgradeSubtree(m),document.body.classList.add("withSectionTabs"),n=e,function(e,t){if(a.A.touch){var n=function(r,n){d(n)&&e.contains(n)&&t.selectNext()},i=function(r,n){d(n)&&e.contains(n)&&t.selectPrevious()};r.e(19842).then(r.bind(r,19842)).then((function(t){var r=new(0,t.default)(e.parentNode.parentNode);l.A.on(r,"swipeleft",n),l.A.on(r,"swiperight",i),e.addEventListener("viewdestroy",(function(){r.destroy()}))}))}}(e,o=m.querySelector('[is="emby-tabs"]')),f&&o.addEventListener("beforetabchange",(function(e){var t=f();if(null!=e.detail.previousIndex){var r=t[e.detail.previousIndex];r&&r.classList.remove("is-active")}var n=t[e.detail.selectedTabIndex];n&&n.classList.add("is-active")})),v&&o.addEventListener("beforetabchange",v),h&&o.addEventListener("tabchange",h),!1!==b&&(o.selectedIndex?o.selectedIndex(t):(o.readySelectedIndex=t,o.addEventListener("ready",u))),{tabsContainer:m,tabs:o,replaced:!0}}return o.selectedIndex(t),{tabsContainer:m,tabs:o,replaced:!1}}function v(e){null!=e?o.selectedIndex(e):o.triggerTabChange()}function h(){return document.querySelector(".tabs-viewmenubar")}},15088:function(e,t,r){r.r(t),r.d(t,{default:function(){return A}}),r(44962),r(29305),r(32733),r(84701),r(81678),r(4754),r(94),r(36947),r(36457),r(26437),r(52697),r(78557),r(90076),r(21359),r(61642),r(83994),r(82367),r(96054),r(23630);var n=r(89166),i=r(25091),o=r(46782),s=(r(79845),r(73233));function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,c(n.key),n)}}function c(e){var t=function(e,t){if("object"!=a(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==a(t)?t:t+""}function u(){var e=this.tabControllers;e&&(e.forEach((function(e){e.destroy&&e.destroy()})),this.tabControllers=null),this.view=null,this.params=null,this.currentTabController=null,this.initialTabIndex=null}var d=function(){return e=function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.tabControllers=[],this.view=t,this.params=r;var n=this,s=parseInt(r.tab||this.getDefaultTabIndex(r.parentId),10);function a(){return t.querySelectorAll(".tabContent")}function l(e){var t=parseInt(e.detail.selectedTabIndex,10),r=e.detail.previousIndex,i=null==r?null:n.tabControllers[r];null!=i&&i.onPause&&i.onPause(),function(e,t){(function(e){return n.validateTabLoad?n.validateTabLoad(e):Promise.resolve()})(e).then((function(){n.getTabController(e).then((function(r){var i=!r.refreshed;r.onResume({autoFocus:null==t&&o.A.tv,refresh:i}),r.refreshed=!0,s=e,n.currentTabController=r}))}))}(t,r)}this.initialTabIndex=s,t.addEventListener("viewbeforehide",this.onPause.bind(this)),t.addEventListener("viewbeforeshow",(function(){i.setTabs(t,s,n.getTabs,a,null,l,!1)})),t.addEventListener("viewshow",(function(e){n.onResume(e.detail)})),t.addEventListener("viewdestroy",u.bind(this))},(t=[{key:"onResume",value:function(){this.setTitle(),(0,n.gJ)();var e=this.currentTabController;e?null!=e&&e.onResume&&e.onResume({}):i.selectedTabIndex(this.initialTabIndex)}},{key:"onPause",value:function(){var e=this.currentTabController;null!=e&&e.onPause&&e.onPause()}},{key:"setTitle",value:function(){s.default.setTitle("")}}])&&l(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}(),f=r(9482);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,b(n.key),n)}}function b(e){var t=function(e,t){if("object"!=v(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==v(t)?t:t+""}function m(e,t,r){return t=g(t),function(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,y()?Reflect.construct(t,r||[],g(e).constructor):t.apply(e,r))}function y(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(y=function(){return!!e})()}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}(e,t);if(n){var i=Object.getOwnPropertyDescriptor(n,t);return i.get?i.get.call(arguments.length<3?e:r):i.value}},p.apply(this,arguments)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}function S(e,t){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},S(e,t)}r(10353),r(41765);var w=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,t,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(t,e),n=t,(i=[{key:"setTitle",value:function(){s.default.setTitle(null)}},{key:"onPause",value:function(){p(g(t.prototype),"onPause",this).call(this,this),document.querySelector(".skinHeader").classList.remove("noHomeButtonHeader")}},{key:"onResume",value:function(e){p(g(t.prototype),"onResume",this).call(this,this,e),document.querySelector(".skinHeader").classList.add("noHomeButtonHeader")}},{key:"getDefaultTabIndex",value:function(){return 0}},{key:"getTabs",value:function(){return[{name:f.Ay.translate("Home")},{name:f.Ay.translate("Favorites")}]}},{key:"getTabController",value:function(e){if(null==e)throw new Error("index cannot be null");var t="";switch(e){case 0:t="hometab";break;case 1:t="favorites"}var n=this;return r(7062)("./".concat(t)).then((function(t){var r=t.default,i=n.tabControllers[e];return i||(i=new r(n.view.querySelector(".tabContent[data-index='"+e+"']"),n.params),n.tabControllers[e]=i),i}))}}])&&h(n.prototype,i),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,i}(d),A=w},41765:function(e,t,r){r(44962),r(78557),r(90076),r(83994),r(82367);var n=r(56422),i=r(47629),o=r(46782),s=r(38490),a=r(83775),l=r(34789),c=(r(69177),Object.create(HTMLDivElement.prototype));function u(e){var t=e.detail.command;"end"===t?(a.A.focusLast(this,"."+this.getAttribute("data-navcommands")),e.preventDefault(),e.stopPropagation()):"pageup"===t?(a.A.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),-12),e.preventDefault(),e.stopPropagation()):"pagedown"===t&&(a.A.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),12),e.preventDefault(),e.stopPropagation())}c.createdCallback=function(){this.classList.add("emby-scroller")},c.scrollToBeginning=function(){this.scroller&&this.scroller.slideTo(0,!0)},c.toStart=function(e,t){this.scroller&&this.scroller.toStart(e,t)},c.toCenter=function(e,t){this.scroller&&this.scroller.toCenter(e,t)},c.scrollToPosition=function(e,t){this.scroller&&this.scroller.slideTo(e,t)},c.getScrollPosition=function(){if(this.scroller)return this.scroller.getScrollPosition()},c.getScrollSize=function(){if(this.scroller)return this.scroller.getScrollSize()},c.getScrollEventName=function(){if(this.scroller)return this.scroller.getScrollEventName()},c.getScrollSlider=function(){if(this.scroller)return this.scroller.getScrollSlider()},c.addScrollEventListener=function(e,t){this.scroller&&i.Ay.addEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},c.removeScrollEventListener=function(e,t){this.scroller&&i.Ay.removeEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},c.attachedCallback=function(){this.getAttribute("data-navcommands")&&s.default.on(this,u);var e="false"!==this.getAttribute("data-horizontal"),t=this.querySelector(".scrollSlider");e&&(t.style["white-space"]="nowrap");var c,d,f=o.A.desktop&&e&&"false"!==this.getAttribute("data-scrollbuttons"),v={horizontal:e,mouseDragging:1,mouseWheel:"false"!==this.getAttribute("data-mousewheel"),touchDragging:1,slidee:t,scrollBy:200,speed:e?270:240,elasticBounds:1,dragHandle:1,autoImmediate:!0,skipSlideToWhenVisible:"true"===this.getAttribute("data-skipfocuswhenvisible"),dispatchScrollEvent:f||"true"===this.getAttribute("data-scrollevent"),hideScrollbar:f||"true"===this.getAttribute("data-hidescrollbar"),allowNativeSmoothScroll:"true"===this.getAttribute("data-allownativesmoothscroll")&&!f,allowNativeScroll:!f,forceHideScrollbars:f,requireAnimation:f&&l.A.edge};this.scroller=new n.A(this,v),this.scroller.init(),this.scroller.reload(),o.A.tv&&this.getAttribute("data-centerfocus")&&(this,c=this.scroller,i.Ay.addEventListener(this,"focus",(function(e){var t=a.A.focusableParent(e.target);t&&c.toCenter(t)}),{capture:!0,passive:!0})),f&&(d=this,r.e(49275).then(r.bind(r,49275)).then((function(){d.insertAdjacentHTML("beforebegin",'<div is="emby-scrollbuttons" class="emby-scrollbuttons padded-right"></div>')})))},c.pause=function(){var e=this.headroom;e&&e.pause()},c.resume=function(){var e=this.headroom;e&&e.resume()},c.detachedCallback=function(){this.getAttribute("data-navcommands")&&s.default.off(this,u);var e=this.headroom;e&&(e.destroy(),this.headroom=null);var t=this.scroller;t&&(t.destroy(),this.scroller=null)},document.registerElement("emby-scroller",{prototype:c,extends:"div"})},79845:function(e,t,r){r(96054),r(69177);var n=r(47629),i=r(56422),o=r(34789),s=r(83775),a=r(46782),l=Object.create(HTMLDivElement.prototype),c="emby-tab-button",u=c+"-active";function d(e){e.classList.add(u)}function f(e,t,r){var n;e.dispatchEvent(new CustomEvent("beforetabchange",{detail:{selectedTabIndex:t,previousIndex:r}})),null!=r&&r!==t&&(n=null)&&n.classList.remove("is-active")}function v(e){var t=this,r=t.querySelector("."+u),i=n.Ay.parentWithClass(e.target,c);if(i&&i!==r){r&&r.classList.remove(u);var o=r?parseInt(r.getAttribute("data-index"),10):null;d(i);var s=parseInt(i.getAttribute("data-index"),10);f(t,s,o),setTimeout((function(){t.selectedTabIndex=s,t.dispatchEvent(new CustomEvent("tabchange",{detail:{selectedTabIndex:s,previousIndex:o}}))}),120),t.scroller&&t.scroller.toCenter(i,!1)}}function h(e){var t=n.Ay.parentWithClass(e.target,c);t&&this.scroller&&this.scroller.toCenter(t,!1)}function b(e){var t=e.target.parentNode.querySelector(".lastFocused");t&&t.classList.remove("lastFocused"),e.target.classList.add("lastFocused")}function m(e){return e.querySelector("."+u)}function y(e,t){for(var r=e[t];r;){if(r.classList.contains(c)&&!r.classList.contains("hide"))return r;r=r[t]}return null}l.createdCallback=function(){this.classList.contains("emby-tabs")||(this.classList.add("emby-tabs"),this.classList.add("focusable"),n.Ay.addEventListener(this,"click",v,{passive:!0}),a.A.tv&&n.Ay.addEventListener(this,"focusin",h,{passive:!0}),n.Ay.addEventListener(this,"focusout",b))},l.focus=function(){var e=this.querySelector("."+u),t=this.querySelector(".lastFocused");t?s.A.focus(t):e?s.A.focus(e):s.A.autoFocus(this)},l.refresh=function(){this.scroller&&this.scroller.reload()},l.attachedCallback=function(){!function(e){if(!e.scroller){var t=e.querySelector(".emby-tabs-slider");t?(e.scroller=new i.A(e,{horizontal:1,itemNav:0,mouseDragging:1,touchDragging:1,slidee:t,smart:!0,releaseSwing:!0,scrollBy:200,speed:120,elasticBounds:1,dragHandle:1,dynamicHandle:1,clickBar:1,hiddenScroll:!0,requireAnimation:!o.A.safari,allowNativeSmoothScroll:!0}),e.scroller.init()):(e.classList.add("scrollX"),e.classList.add("hiddenScrollX"),e.classList.add("smoothScrollX"))}}(this);var e=this.querySelector("."+u),t=e?parseInt(e.getAttribute("data-index"),10):parseInt(this.getAttribute("data-index")||"0",10);if(-1!==t){this.selectedTabIndex=t;var r=this.querySelectorAll("."+c)[t];r&&d(r)}this.readyFired||(this.readyFired=!0,this.dispatchEvent(new CustomEvent("ready",{})))},l.detachedCallback=function(){this.scroller&&(this.scroller.destroy(),this.scroller=null),n.Ay.removeEventListener(this,"click",v,{passive:!0}),a.A.tv&&n.Ay.removeEventListener(this,"focusin",h,{passive:!0})},l.selectedIndex=function(e,t){var r=this;if(null==e)return r.selectedTabIndex||0;var n=r.selectedIndex();r.selectedTabIndex=e;var i=r.querySelectorAll("."+c);if(n===e||!1===t){f(r,e,n),r.dispatchEvent(new CustomEvent("tabchange",{detail:{selectedTabIndex:e}}));var o=i[n];d(i[e]),n!==e&&o&&o.classList.remove(u)}else v.call(r,{target:i[e]})},l.selectNext=function(){var e=y(m(this),"nextSibling");e&&v.call(this,{target:e})},l.selectPrevious=function(){var e=y(m(this),"previousSibling");e&&v.call(this,{target:e})},l.triggerBeforeTabChange=function(){f(this,this.selectedIndex())},l.triggerTabChange=function(){this.dispatchEvent(new CustomEvent("tabchange",{detail:{selectedTabIndex:this.selectedIndex()}}))},l.setTabEnabled=function(e,t){var r=this.querySelector('.emby-tab-button[data-index="'+e+'"]');t?r.classList.remove("hide"):r.classList.remove("add")},document.registerElement("emby-tabs",{prototype:l,extends:"div"})},40782:function(e,t,r){var n=r(11444),i="assets/img/devices/";t.Ay={getDeviceIcon:function(e){var t;switch(e.AppName||e.Client){case"Samsung Smart TV":return i+"samsung.svg";case"Xbox One":return i+"xbox.svg";case"Sony PS4":return i+"playstation.svg";case"Kodi":case"Kodi JellyCon":return i+"kodi.svg";case"Jellyfin Android":case"AndroidTV":case"Android TV":return i+"android.svg";case"Jellyfin Mobile (iOS)":case"Jellyfin Mobile (iPadOS)":case"Jellyfin iOS":case"Infuse":return i+"apple.svg";case"Home Assistant":return i+"home-assistant.svg";case"Jellyfin Roku":return i+"roku.svg";case"Finamp":return i+"finamp.svg";case"Jellyfin Web":return function(e){switch(e){case"Opera":case"Opera TV":case"Opera Android":return i+"opera.svg";case"Chrome":case"Chrome Android":return i+"chrome.svg";case"Firefox":case"Firefox Android":return i+"firefox.svg";case"Safari":case"Safari iPad":case"Safari iPhone":return i+"safari.svg";case"Edge Chromium":case"Edge Chromium Android":case"Edge Chromium iPad":case"Edge Chromium iPhone":return i+"edgechromium.svg";case"Edge":return i+"edge.svg";case"Internet Explorer":return i+"msie.svg";default:return i+"html5.svg"}}(e.Name||e.DeviceName);default:if(null===(t=e.Capabilities)||void 0===t?void 0:t.IconUrl)try{return new URL(e.Capabilities.IconUrl).toString()}catch(t){console.error("[getDeviceIcon] device capabilities has invalid IconUrl",e,t)}return i+"other.svg"}},getLibraryIcon:function(e){switch(e){case"movies":return"video_library";case"music":return"library_music";case"photos":case"homevideos":return"photo_library";case"livetv":return"live_tv";case"tvshows":return"tv";case"trailers":return"local_movies";case"musicvideos":return"music_video";case"books":return"library_books";case"channels":return"videocam";case"playlists":return"view_list";default:return"folder"}},getItemTypeIcon:function(e){switch(e){case n.D.MusicAlbum:return"album";case n.D.MusicArtist:case n.D.Person:return"person";case n.D.Audio:return"audiotrack";case n.D.Movie:return"movie";case n.D.Episode:case n.D.Series:return"tv";case n.D.Program:return"live_tv";case n.D.Book:return"book";case n.D.Folder:return"folder";case n.D.BoxSet:return"collections";case n.D.Playlist:return"view_list";case n.D.Photo:return"photo";case n.D.PhotoAlbum:return"photo_album";default:return"folder"}}}},35840:function(e,t,r){function n(e){return e}r.d(t,{j:function(){return n}})},78779:function(e,t,r){var n=r(63696),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=n.useState,s=n.useEffect,a=n.useLayoutEffect,l=n.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!i(e,r)}catch(e){return!0}}var u="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=o({inst:{value:r,getSnapshot:t}}),i=n[0].inst,u=n[1];return a((function(){i.value=r,i.getSnapshot=t,c(i)&&u({inst:i})}),[e,r,t]),s((function(){return c(i)&&u({inst:i}),e((function(){c(i)&&u({inst:i})}))}),[e]),l(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:u},43676:function(e,t,r){e.exports=r(78779)}}]);