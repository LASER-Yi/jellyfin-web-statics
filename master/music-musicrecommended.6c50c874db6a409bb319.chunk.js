(self.webpackChunk=self.webpackChunk||[]).push([[61353,67345,7293],{67345:function(e,t,n){"use strict";n.r(t),n.d(t,{getTabsElement:function(){return m},selectedTabIndex:function(){return f},setTabs:function(){return h}}),n(5769),n(63238),n(61418),n(17460),n(14078),n(61013);var i,s,r,a=n(72365),l=n(57366),o=n(81643),d=(n(21694),n(38228),document.querySelector(".skinHeader"));function c(){this.selectedIndex(this.readySelectedIndex),this.readySelectedIndex=null}function u(e){function t(e){if(a.ZP.parentWithTag(e,"input"))return!1;var t=e.classList;return!t||!t.contains("scrollX")&&!t.contains("animatedScrollX")}for(var n=e;null!=n;){if(!t(n))return!1;n=n.parentNode}return!0}function h(e,t,a,h,f,m,v){if(s||(s=d.querySelector(".headerTabs")),!e)return i&&(document.body.classList.remove("withSectionTabs"),s.innerHTML="",s.classList.add("hide"),i=null),{tabsContainer:s,replaced:!1};var b=s;if(i||b.classList.remove("hide"),i!==e){var g=0,y='<div is="emby-tabs"'+(null==t?"":' data-index="'+t+'"')+' class="tabs-viewmenubar"><div class="emby-tabs-slider" style="white-space:nowrap;">'+a().map((function(e){var t,n="emby-tab-button";return!1===e.enabled&&(n+=" hide"),e.cssClass&&(n+=" "+e.cssClass),t=e.href?'<a href="'+e.href+'" is="emby-linkbutton" class="'+n+'" data-index="'+g+'"><div class="emby-button-foreground">'+e.name+"</div></a>":'<button type="button" is="emby-button" class="'+n+'" data-index="'+g+'"><div class="emby-button-foreground">'+e.name+"</div></button>",g++,t})).join("")+"</div></div>";return b.innerHTML=y,window.CustomElements.upgradeSubtree(b),document.body.classList.add("withSectionTabs"),i=e,function(e,t){if(l.Z.touch){var i=function(n,i){u(i)&&e.contains(i)&&t.selectNext()},s=function(n,i){u(i)&&e.contains(i)&&t.selectPrevious()};n.e(14810).then(n.bind(n,14810)).then((function(t){var n=new(0,t.default)(e.parentNode.parentNode);o.Z.on(n,"swipeleft",i),o.Z.on(n,"swiperight",s),e.addEventListener("viewdestroy",(function(){n.destroy()}))}))}}(e,r=b.querySelector('[is="emby-tabs"]')),h&&r.addEventListener("beforetabchange",(function(e){var t=h();if(null!=e.detail.previousIndex){var n=t[e.detail.previousIndex];n&&n.classList.remove("is-active")}var i=t[e.detail.selectedTabIndex];i&&i.classList.add("is-active")})),f&&r.addEventListener("beforetabchange",f),m&&r.addEventListener("tabchange",m),!1!==v&&(r.selectedIndex?r.selectedIndex(t):(r.readySelectedIndex=t,r.addEventListener("ready",c))),{tabsContainer:b,tabs:r,replaced:!0}}return r.selectedIndex(t),{tabsContainer:b,tabs:r,replaced:!1}}function f(e){null!=e?r.selectedIndex(e):r.triggerTabChange()}function m(){return document.querySelector(".tabs-viewmenubar")}},4608:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}}),n(5769),n(63238),n(61418),n(17460),n(14078),n(32081),n(27471);var i=n(57366),s=n(30325),r=n(60934),a=n(58517),l=n(28540),o=n(61570),d=n(72365),c=n(98301),u=n(71487),h=n(67345),f=n(94994),m=(n(82427),n(21694),n(38228),n(60635));function v(){var e=d.ZP.getWindowSize().innerWidth;return e>=1920?9:e>=1200?12:e>=1e3?10:8}function b(){return!s.Z.desktop}function g(){return b()?"overflowSquare":"square"}function y(){return[{name:f.ZP.translate("Albums")},{name:f.ZP.translate("Suggestions")},{name:f.ZP.translate("HeaderAlbumArtists")},{name:f.ZP.translate("Artists")},{name:f.ZP.translate("Playlists")},{name:f.ZP.translate("Songs")},{name:f.ZP.translate("Genres")}]}function p(e,t){var d=this;function p(t){var n,i;n=e,i=parseInt(t.detail.selectedTabIndex,10),C(n,i,(function(e){-1==S.indexOf(i)&&e.preRender&&e.preRender()}))}function I(t){var n,i;n=e,i=parseInt(t.detail.selectedTabIndex,10),P=i,C(n,i,(function(e){-1==S.indexOf(i)&&(S.push(i),e.renderTab())}))}function T(){return e.querySelectorAll(".pageTabContent")}var C=function(i,s,r){var a;switch(s){case 0:a="musicalbums";break;case 1:a="musicrecommended";break;case 2:case 3:a="musicartists";break;case 4:a="musicplaylists";break;case 5:a="songs";break;case 6:a="musicgenres"}n(97181)("./".concat(a)).then((function(n){var i,a=n.default;1==s&&(i=e.querySelector(".pageTabContent[data-index='"+s+"']"),d.tabContent=i);var l=x[s];l||(i=e.querySelector(".pageTabContent[data-index='"+s+"']"),l=1===s?d:new a(e,t,i),2==s?l.mode="albumartists":3==s&&(l.mode="artists"),x[s]=l,l.initTab&&l.initTab()),r(l)}))};function L(e){"search"===e.detail.command&&(e.preventDefault(),m.default.navigate("search.html?collectionType=music&parentId="+t.topParentId))}var P=parseInt(t.tab||function(e){switch(r.get("landing-"+e)){case"suggestions":return 1;case"albumartists":return 2;case"artists":return 3;case"playlists":return 4;case"songs":return 5;case"genres":return 6;default:return 0}}(t.topParentId),10);this.initTab=function(){for(var t,n=e.querySelector(".pageTabContent[data-index='1']").querySelectorAll(".itemsContainer"),r=0,a=n.length;r<a;r++)t=n[r],i.Z.mobile?(t.classList.add("hiddenScrollX"),s.Z.tv&&t.classList.add("smoothScrollX"),t.classList.add("scrollX"),t.classList.remove("vertical-wrap")):(t.classList.remove("hiddenScrollX"),t.classList.remove("smoothScrollX"),t.classList.remove("scrollX"),t.classList.add("vertical-wrap"))},this.renderTab=function(){var i,s;l.ZP.show(),i=e.querySelector(".pageTabContent[data-index='1']"),s=t.topParentId,console.debug("loadSuggestionsTab"),function(e,t){l.ZP.show();var i=ApiClient.getCurrentUserId(),s={IncludeItemTypes:"Audio",Limit:b()?3*v():2*v(),Fields:"PrimaryImageAspectRatio,BasicSyncInfo",ParentId:t,ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb",EnableTotalRecordCount:!1};ApiClient.getJSON(ApiClient.getUrl("Users/"+i+"/Items/Latest",s)).then((function(t){var i=e.querySelector("#recentlyAddedSongs");i.innerHTML=o.default.getCardsHtml({items:t,showUnplayedIndicator:!1,showLatestItemsPopup:!1,shape:g(),showTitle:!0,showParentTitle:!0,lazy:!0,centerText:!0,overlayPlayButton:!0,allowBottomPadding:!b(),cardLayout:!1,coverImage:!0}),c.default.lazyChildren(i),l.ZP.hide(),Promise.resolve().then(n.bind(n,87680)).then((function(t){t.default.autoFocus(e)}))}))}(i,s),function(e,t){var n={SortBy:"DatePlayed",SortOrder:"Descending",IncludeItemTypes:"Audio",Limit:v(),Recursive:!0,Fields:"PrimaryImageAspectRatio,AudioInfo",Filters:"IsPlayed",ParentId:t,ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb",EnableTotalRecordCount:!1};ApiClient.getItems(ApiClient.getCurrentUserId(),n).then((function(t){var n=e.querySelector("#recentlyPlayed");t.Items.length?n.classList.remove("hide"):n.classList.add("hide");var i=n.querySelector(".itemsContainer");i.innerHTML=o.default.getCardsHtml({items:t.Items,showUnplayedIndicator:!1,shape:g(),showTitle:!0,showParentTitle:!0,action:"instantmix",lazy:!0,centerText:!0,overlayMoreButton:!0,allowBottomPadding:!b(),cardLayout:!1,coverImage:!0}),c.default.lazyChildren(i)}))}(i,s),function(e,t){var n={SortBy:"PlayCount",SortOrder:"Descending",IncludeItemTypes:"Audio",Limit:v(),Recursive:!0,Fields:"PrimaryImageAspectRatio,AudioInfo",Filters:"IsPlayed",ParentId:t,ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb",EnableTotalRecordCount:!1};ApiClient.getItems(ApiClient.getCurrentUserId(),n).then((function(t){var n=e.querySelector("#topPlayed");t.Items.length?n.classList.remove("hide"):n.classList.add("hide");var i=n.querySelector(".itemsContainer");i.innerHTML=o.default.getCardsHtml({items:t.Items,showUnplayedIndicator:!1,shape:g(),showTitle:!0,showParentTitle:!0,action:"instantmix",lazy:!0,centerText:!0,overlayMoreButton:!0,allowBottomPadding:!b(),cardLayout:!1,coverImage:!0}),c.default.lazyChildren(i)}))}(i,s),n.e(76709).then(n.bind(n,76709)).then((function(e){e.default.render(i,ApiClient.getCurrentUserId(),s,["favoriteArtists","favoriteAlbums","favoriteSongs"])}))};var x=[],S=[];e.addEventListener("viewshow",(function(){if(h.setTabs(e,P,y,T,p,I),!e.getAttribute("data-title")){var n=t.topParentId;n?ApiClient.getItem(ApiClient.getCurrentUserId(),n).then((function(t){e.setAttribute("data-title",t.Name),u.Z.setTitle(t.Name)})):(e.setAttribute("data-title",f.ZP.translate("TabMusic")),u.Z.setTitle(f.ZP.translate("TabMusic")))}a.default.on(window,L)})),e.addEventListener("viewbeforehide",(function(){a.default.off(window,L)})),e.addEventListener("viewdestroy",(function(){x.forEach((function(e){e.destroy&&e.destroy()}))}))}},82427:function(e,t,n){"use strict";n(5769),n(63238),n(61418),n(17460),n(14078),n(27471),n(32081);var i=n(61008),s=n(58517),r=n(48957),a=n(98301),l=n(30325),o=n(57366),d=n(72365),c=n(28540),u=n(34643),h=n(44038),f=n(81643),m=(n(67752),n(18613)),v=n(28172),b=Object.create(HTMLDivElement.prototype);function g(e){var t=this,n=t.multiSelect;!1!==(null==n?void 0:n.onContainerClick.call(t,e))&&i.ZP.onClick.call(t,e)}function y(e){return e.preventDefault(),e.stopPropagation(),!1}function p(e){var t=e.target,n=d.ZP.parentWithAttribute(t,"data-id");if(n&&n.getAttribute("data-serverid"))return s.default.handleCommand("menu",{sourceElement:n}),e.preventDefault(),e.stopPropagation(),!1}function I(e,t,i){var s=this;Promise.all([n.e(61570),n.e(7293)]).then(n.bind(n,61570)).then((function(e){e.onUserDataChanged(i,s)}));var r=T(s);-1===r.indexOf("markfavorite")&&-1===r.indexOf("markplayed")||s.notifyRefreshNeeded()}function T(e){var t=e.getAttribute("data-monitor");return t?t.split(","):[]}function C(e,t,i){var s=this;if(-1===T(s).indexOf("timers")){var r=i.ProgramId,a=i.Id;Promise.all([n.e(61570),n.e(7293)]).then(n.bind(n,61570)).then((function(e){e.onTimerCreated(r,a,s)}))}else s.notifyRefreshNeeded()}function L(){-1!==T(this).indexOf("seriestimers")&&this.notifyRefreshNeeded()}function P(e,t,i){var s=this;-1===T(s).indexOf("timers")?Promise.all([n.e(61570),n.e(7293)]).then(n.bind(n,61570)).then((function(e){e.onTimerCancelled(i.Id,s)})):s.notifyRefreshNeeded()}function x(e,t,i){var s=this;-1===T(s).indexOf("seriestimers")?Promise.all([n.e(61570),n.e(7293)]).then(n.bind(n,61570)).then((function(e){e.onSeriesTimerCancelled(i.Id,s)})):s.notifyRefreshNeeded()}function S(e,t,n){var i=this,s=T(i);if(-1===s.indexOf("seriestimers")&&-1===s.indexOf("timers")){var r=n.ItemsAdded||[],a=n.ItemsRemoved||[];if(r.length||a.length){var l=i.getAttribute("data-parentid");if(l){var o=n.FoldersAddedTo||[],d=n.FoldersRemovedFrom||[],c=n.CollectionFolders||[];if(-1===o.indexOf(l)&&-1===d.indexOf(l)&&-1===c.indexOf(l))return}i.notifyRefreshNeeded()}}}function w(e,t){var n,i=this,s=t.state,r=T(i);if(s.NowPlayingItem&&"Video"===s.NowPlayingItem.MediaType){if(-1!==r.indexOf("videoplayback"))return void i.notifyRefreshNeeded(!0)}else if("Audio"===(null===(n=s.NowPlayingItem)||void 0===n?void 0:n.MediaType)&&-1!==r.indexOf("audioplayback"))return void i.notifyRefreshNeeded(!0)}function E(e,t,n,i){var s=n.bind(e);i=i||h.default,f.Z.on(i,t,s),e["event_"+t]=s}function A(e,t,n){var i=e["event_"+t];i&&(n=n||h.default,f.Z.off(n,t,i),e["event_"+t]=null)}function Z(e,t){e.refreshInterval&&(clearInterval(e.refreshInterval),e.refreshInterval=null,t||(e.refreshIntervalEndTime=null))}function k(e,t){Z(e),t||(t=parseInt(e.getAttribute("data-refreshinterval")||"0",10)),t&&(e.refreshInterval=setInterval(e.notifyRefreshNeeded.bind(e),t),e.refreshIntervalEndTime=(new Date).getTime()+t)}function R(e){var t=e.Items||e,n=this.parentContainer;n&&(t.length?n.classList.remove("hide"):n.classList.add("hide"));var i,s,r=document.activeElement;this.contains(r)&&(s=!0,i=r.getAttribute("data-id")),this.innerHTML=this.getItemsHtml(t),a.default.lazyChildren(this),s&&function(e,t){if(t){var n=e.querySelector('[data-id="'+t+'"]');if(n)try{return void u.Z.focus(n)}catch(e){console.error(e)}}u.Z.autoFocus(e)}(this,i),k(this),this.afterRefresh&&this.afterRefresh(e)}b.enableMultiSelect=function(e){var t=this.multiSelect;if(e){if(!t){var i=this;n.e(52943).then(n.bind(n,52943)).then((function(e){var t=e.default;i.multiSelect=new t({container:i,bindOnClick:!1})}))}}else t&&(t.destroy(),this.multiSelect=null)},b.enableDragReordering=function(e){var t=this.sortable;if(e){if(!t){var n=this;n.sortable=new v.ZP(n,{draggable:".listItem",handle:".listViewDragHandle",onEnd:function(e){return function(e,t){var n=e.item,i=e.newIndex,s=n.getAttribute("data-playlistitemid"),r=n.getAttribute("data-playlistid");if(r){var a=n.getAttribute("data-serverid"),l=m.Z.getApiClient(a);c.ZP.show(),l.ajax({url:l.getUrl("Playlists/"+r+"/Items/"+s+"/Move/"+i),type:"POST"}).then((function(){c.ZP.hide()}),(function(){c.ZP.hide(),t.refreshItems()}))}else{var o=e.oldIndex;n.dispatchEvent(new CustomEvent("itemdrop",{detail:{oldIndex:o,newIndex:i,playlistItemId:s},bubbles:!0,cancelable:!1}))}}(e,n)}})}}else t&&(t.destroy(),this.sortable=null)},b.createdCallback=function(){this.classList.add("itemsContainer")},b.attachedCallback=function(){this.addEventListener("click",g),o.Z.touch?this.addEventListener("contextmenu",y):"false"!==this.getAttribute("data-contextmenu")&&this.addEventListener("contextmenu",p),(l.Z.desktop||l.Z.mobile&&"false"!==this.getAttribute("data-multiselect"))&&this.enableMultiSelect(!0),l.Z.tv&&this.classList.add("itemsContainer-tv"),i.ZP.on(this,{click:!1}),E(this,"UserDataChanged",I),E(this,"TimerCreated",C),E(this,"SeriesTimerCreated",L),E(this,"TimerCancelled",P),E(this,"SeriesTimerCancelled",x),E(this,"LibraryChanged",S),E(this,"playbackstop",w,r.O),"true"===this.getAttribute("data-dragreorder")&&this.enableDragReordering(!0)},b.detachedCallback=function(){Z(this),this.enableMultiSelect(!1),this.enableDragReordering(!1),this.removeEventListener("click",g),this.removeEventListener("contextmenu",p),this.removeEventListener("contextmenu",y),i.ZP.off(this,{click:!1}),A(this,"UserDataChanged"),A(this,"TimerCreated"),A(this,"SeriesTimerCreated"),A(this,"TimerCancelled"),A(this,"SeriesTimerCancelled"),A(this,"LibraryChanged"),A(this,"playbackstop",r.O),this.fetchData=null,this.getItemsHtml=null,this.parentContainer=null},b.pause=function(){Z(this,!0),this.paused=!0},b.resume=function(e){this.paused=!1;var t=this.refreshIntervalEndTime;if(t){var n=t-(new Date).getTime();n>0&&!this.needsRefresh?k(this,n):(this.needsRefresh=!0,this.refreshIntervalEndTime=null)}return this.needsRefresh||e&&e.refresh?this.refreshItems():Promise.resolve()},b.refreshItems=function(){return this.fetchData?this.paused?(this.needsRefresh=!0,Promise.resolve()):(this.needsRefresh=!1,this.fetchData().then(R.bind(this))):Promise.resolve()},b.notifyRefreshNeeded=function(e){if(this.paused)this.needsRefresh=!0;else{var t=this.refreshTimeout;t&&clearTimeout(t),!0===e?this.refreshItems():this.refreshTimeout=setTimeout(this.refreshItems.bind(this),1e4)}},document.registerElement("emby-itemscontainer",{prototype:b,extends:"div"})},21694:function(e,t,n){"use strict";n(32081),n(67752);var i=n(72365),s=n(15723),r=n(57366),a=n(34643),l=n(30325),o=Object.create(HTMLDivElement.prototype),d="emby-tab-button",c=d+"-active";function u(e){e.classList.add(c)}function h(e,t,n){var i;e.dispatchEvent(new CustomEvent("beforetabchange",{detail:{selectedTabIndex:t,previousIndex:n}})),null!=n&&n!==t&&(i=null)&&i.classList.remove("is-active")}function f(e){var t=this,n=t.querySelector("."+c),s=i.ZP.parentWithClass(e.target,d);if(s&&s!==n){n&&n.classList.remove(c);var r=n?parseInt(n.getAttribute("data-index"),10):null;u(s);var a=parseInt(s.getAttribute("data-index"),10);h(t,a,r),setTimeout((function(){t.selectedTabIndex=a,t.dispatchEvent(new CustomEvent("tabchange",{detail:{selectedTabIndex:a,previousIndex:r}}))}),120),t.scroller&&t.scroller.toCenter(s,!1)}}function m(e){var t=i.ZP.parentWithClass(e.target,d);t&&this.scroller&&this.scroller.toCenter(t,!1)}function v(e){var t=e.target.parentNode.querySelector(".lastFocused");t&&t.classList.remove("lastFocused"),e.target.classList.add("lastFocused")}function b(e){return e.querySelector("."+c)}function g(e,t){for(var n=e[t];n;){if(n.classList.contains(d)&&!n.classList.contains("hide"))return n;n=n[t]}return null}o.createdCallback=function(){this.classList.contains("emby-tabs")||(this.classList.add("emby-tabs"),this.classList.add("focusable"),i.ZP.addEventListener(this,"click",f,{passive:!0}),l.Z.tv&&i.ZP.addEventListener(this,"focusin",m,{passive:!0}),i.ZP.addEventListener(this,"focusout",v))},o.focus=function(){var e=this.querySelector("."+c),t=this.querySelector(".lastFocused");t?a.Z.focus(t):e?a.Z.focus(e):a.Z.autoFocus(this)},o.refresh=function(){this.scroller&&this.scroller.reload()},o.attachedCallback=function(){!function(e){if(!e.scroller){var t=e.querySelector(".emby-tabs-slider");t?(e.scroller=new s.Z(e,{horizontal:1,itemNav:0,mouseDragging:1,touchDragging:1,slidee:t,smart:!0,releaseSwing:!0,scrollBy:200,speed:120,elasticBounds:1,dragHandle:1,dynamicHandle:1,clickBar:1,hiddenScroll:!0,requireAnimation:!r.Z.safari,allowNativeSmoothScroll:!0}),e.scroller.init()):(e.classList.add("scrollX"),e.classList.add("hiddenScrollX"),e.classList.add("smoothScrollX"))}}(this);var e=this.querySelector("."+c),t=e?parseInt(e.getAttribute("data-index"),10):parseInt(this.getAttribute("data-index")||"0",10);if(-1!==t){this.selectedTabIndex=t;var n=this.querySelectorAll("."+d)[t];n&&u(n)}this.readyFired||(this.readyFired=!0,this.dispatchEvent(new CustomEvent("ready",{})))},o.detachedCallback=function(){this.scroller&&(this.scroller.destroy(),this.scroller=null),i.ZP.removeEventListener(this,"click",f,{passive:!0}),l.Z.tv&&i.ZP.removeEventListener(this,"focusin",m,{passive:!0})},o.selectedIndex=function(e,t){var n=this;if(null==e)return n.selectedTabIndex||0;var i=n.selectedIndex();n.selectedTabIndex=e;var s=n.querySelectorAll("."+d);if(i===e||!1===t){h(n,e,i),n.dispatchEvent(new CustomEvent("tabchange",{detail:{selectedTabIndex:e}}));var r=s[i];u(s[e]),i!==e&&r&&r.classList.remove(c)}else f.call(n,{target:s[e]})},o.selectNext=function(){var e=g(b(this),"nextSibling");e&&f.call(this,{target:e})},o.selectPrevious=function(){var e=g(b(this),"previousSibling");e&&f.call(this,{target:e})},o.triggerBeforeTabChange=function(){h(this,this.selectedIndex())},o.triggerTabChange=function(){this.dispatchEvent(new CustomEvent("tabchange",{detail:{selectedTabIndex:this.selectedIndex()}}))},o.setTabEnabled=function(e,t){var n=this.querySelector('.emby-tab-button[data-index="'+e+'"]');t?n.classList.remove("hide"):n.classList.remove("add")},document.registerElement("emby-tabs",{prototype:o,extends:"div"})},97181:function(e,t,n){var i={"./music.html":[91693,9107],"./musicalbums":[8718,63873,8718,25696],"./musicalbums.js":[8718,63873,8718,25696],"./musicartists":[23504,63873,23504,90768],"./musicartists.js":[23504,63873,23504,90768],"./musicgenres":[43416,43416],"./musicgenres.js":[43416,43416],"./musicplaylists":[43208,43208],"./musicplaylists.js":[43208,43208],"./musicrecommended":[4608],"./musicrecommended.js":[4608],"./songs":[25054,63873,74722],"./songs.js":[25054,63873,74722]};function s(e){if(!n.o(i,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],s=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(s)}))}s.keys=function(){return Object.keys(i)},s.id=97181,e.exports=s}}]);