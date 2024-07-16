/*! For license information please see movies-moviesrecommended.8663d1bcc8a41298e7c1.chunk.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[48935,96084,32762,95947,25091],{25091:function(e,t,r){"use strict";r.r(t),r.d(t,{getTabsElement:function(){return m},selectedTabIndex:function(){return f},setTabs:function(){return h}}),r(44962),r(86584),r(78557),r(90076),r(83994),r(82367);var n,i,s,a=r(47629),o=r(34789),l=r(62014),c=(r(79845),r(10353),document.querySelector(".skinHeader"));function d(){this.selectedIndex(this.readySelectedIndex),this.readySelectedIndex=null}function u(e){function t(e){if(a.Ay.parentWithTag(e,"input"))return!1;var t=e.classList;return!t||!t.contains("scrollX")&&!t.contains("animatedScrollX")}for(var r=e;null!=r;){if(!t(r))return!1;r=r.parentNode}return!0}function h(e,t,a,h,f,m,v){if(i||(i=c.querySelector(".headerTabs")),!e)return n&&(document.body.classList.remove("withSectionTabs"),i.innerHTML="",i.classList.add("hide"),n=null),{tabsContainer:i,replaced:!1};var b=i;if(n||b.classList.remove("hide"),n!==e){var g=0,y='<div is="emby-tabs"'+(null==t?"":' data-index="'+t+'"')+' class="tabs-viewmenubar"><div class="emby-tabs-slider" style="white-space:nowrap;">'+a().map((function(e){var t,r="emby-tab-button";return!1===e.enabled&&(r+=" hide"),e.cssClass&&(r+=" "+e.cssClass),t=e.href?'<a href="'+e.href+'" is="emby-linkbutton" class="'+r+'" data-index="'+g+'"><div class="emby-button-foreground">'+e.name+"</div></a>":'<button type="button" is="emby-button" class="'+r+'" data-index="'+g+'"><div class="emby-button-foreground">'+e.name+"</div></button>",g++,t})).join("")+"</div></div>";return b.innerHTML=y,window.CustomElements.upgradeSubtree(b),document.body.classList.add("withSectionTabs"),n=e,function(e,t){if(o.A.touch){var n=function(r,n){u(n)&&e.contains(n)&&t.selectNext()},i=function(r,n){u(n)&&e.contains(n)&&t.selectPrevious()};r.e(19842).then(r.bind(r,19842)).then((function(t){var r=new(0,t.default)(e.parentNode.parentNode);l.A.on(r,"swipeleft",n),l.A.on(r,"swiperight",i),e.addEventListener("viewdestroy",(function(){r.destroy()}))}))}}(e,s=b.querySelector('[is="emby-tabs"]')),h&&s.addEventListener("beforetabchange",(function(e){var t=h();if(null!=e.detail.previousIndex){var r=t[e.detail.previousIndex];r&&r.classList.remove("is-active")}var n=t[e.detail.selectedTabIndex];n&&n.classList.add("is-active")})),f&&s.addEventListener("beforetabchange",f),m&&s.addEventListener("tabchange",m),!1!==v&&(s.selectedIndex?s.selectedIndex(t):(s.readySelectedIndex=t,s.addEventListener("ready",d))),{tabsContainer:b,tabs:s,replaced:!0}}return s.selectedIndex(t),{tabsContainer:b,tabs:s,replaced:!1}}function f(e){null!=e?s.selectedIndex(e):s.triggerTabChange()}function m(){return document.querySelector(".tabs-viewmenubar")}},4628:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return C}}),r(44962),r(84734),r(29305),r(32733),r(84701),r(69892),r(86584),r(89336),r(78557),r(96054),r(90076),r(95021),r(73687),r(83994),r(82367);var n=r(22696),i=r.n(n),s=r(24468),a=r(58782),o=r(46782),l=r(25091),c=r(80669),d=r(47629),u=r(9482),h=r(38490),f=r(73233),m=r(82885),v=r(17145),b=r(80633),g=r(89100),y=r(62014);function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function A(){return!o.A.desktop}function S(e){var t="",r="";switch(e.RecommendationType){case"SimilarToRecentlyPlayed":r=u.Ay.translate("RecommendationBecauseYouWatched",e.BaselineItemName);break;case"SimilarToLikedItem":r=u.Ay.translate("RecommendationBecauseYouLike",e.BaselineItemName);break;case"HasDirectorFromRecentlyPlayed":case"HasLikedDirector":r=u.Ay.translate("RecommendationDirectedBy",e.BaselineItemName);break;case"HasActorFromRecentlyPlayed":case"HasLikedActor":r=u.Ay.translate("RecommendationStarring",e.BaselineItemName)}return t+='<div class="verticalSection">',t+='<h2 class="sectionTitle sectionTitle-cards padded-left">'+i()(r)+"</h2>",A()?(t+='<div is="emby-scroller" class="padded-top-focusscale padded-bottom-focusscale" data-mousewheel="false" data-centerfocus="true">',t+='<div is="emby-itemscontainer" class="itemsContainer scrollSlider focuscontainer-x">'):t+='<div is="emby-itemscontainer" class="itemsContainer focuscontainer-x padded-left padded-right vertical-wrap">',t+=s.default.getCardsHtml(e.Items,{shape:(0,b.xK)(A()),scalable:!0,overlayPlayButton:!0,allowBottomPadding:!0,showTitle:!0,showYear:!0,centerText:!0}),A()&&(t+="</div>"),(t+="</div>")+"</div>"}function I(e){Promise.resolve().then(r.bind(r,84069)).then((function(t){t.default.autoFocus(e)}))}function T(){return[{name:u.Ay.translate("Movies")},{name:u.Ay.translate("Suggestions")},{name:u.Ay.translate("Trailers")},{name:u.Ay.translate("Favorites")},{name:u.Ay.translate("Collections")},{name:u.Ay.translate("Genres")}]}function C(e,t){var n=this;function i(t){var r,n;r=e,n=parseInt(t.detail.selectedTabIndex,10),x(r,n,(function(e){-1==D.indexOf(n)&&e.preRender&&e.preRender()}))}function C(t){var r,n=parseInt(t.detail.selectedTabIndex,10);k=r=n,x(e,r,(function(e){-1==D.indexOf(r)&&(D.push(r),e.renderTab())}))}function L(){return e.querySelectorAll(".pageTabContent")}var x=function(i,s,a){var o="";switch(s){case 0:case 3:o="movies";break;case 1:o="moviesrecommended.js";break;case 2:o="movietrailers";break;case 4:o="moviecollections";break;case 5:o="moviegenres"}r(85771)("./".concat(o)).then((function(r){var i,o=r.default;s===P&&(i=e.querySelector(".pageTabContent[data-index='"+s+"']"),n.tabContent=i);var l=R[s];l||(i=e.querySelector(".pageTabContent[data-index='"+s+"']"),l=s===P?n:0==s||3==s?new o(e,t,i,{mode:s?"favorites":"movies"}):new o(e,t,i),R[s]=l,l.initTab&&l.initTab()),a(l)}))};function w(e,t){t.NowPlayingItem&&"Video"==t.NowPlayingItem.MediaType&&(D=[],l.getTabsElement().triggerTabChange())}function E(e){"search"===e.detail.command&&(e.preventDefault(),g.default.navigate("search.html?collectionType=movies&parentId="+t.topParentId))}var k=parseInt(t.tab||function(e){switch(m.get("landing-"+e)){case v.D.Suggestions:return 1;case v.D.Favorites:return 3;case v.D.Collections:return 4;case v.D.Genres:return 5;default:return 0}}(t.topParentId),10),P=1;this.initTab=function(){!function(e,t){var r,n,i=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return p(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,o=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){o=!0,s=e},f:function(){try{a||null==r.return||r.return()}finally{if(o)throw s}}}}(t.querySelectorAll(".itemsContainer"));try{for(i.s();!(r=i.n()).done;)n=r.value,A()?(n.classList.add("hiddenScrollX"),o.A.tv&&(n.classList.add("smoothScrollX"),n.classList.add("padded-top-focusscale"),n.classList.add("padded-bottom-focusscale")),n.classList.add("scrollX"),n.classList.remove("vertical-wrap")):(n.classList.remove("hiddenScrollX"),n.classList.remove("smoothScrollX"),n.classList.remove("scrollX"),n.classList.add("vertical-wrap"))}catch(e){i.e(e)}finally{i.f()}}(0,e.querySelector(".pageTabContent[data-index='"+P+"']"))},this.renderTab=function(){var r=e.querySelector(".pageTabContent[data-index='"+P+"']");!function(e,t,r){var n=t.topParentId,i=ApiClient.getCurrentUserId();!function(e,t,r){var n={SortBy:"DatePlayed",SortOrder:"Descending",IncludeItemTypes:"Movie",Filters:"IsResumable",Limit:d.Ay.getWindowSize().innerWidth>=1600?5:3,Recursive:!0,Fields:"PrimaryImageAspectRatio,MediaSourceCount",CollapseBoxSetItems:!1,ParentId:r,ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb",EnableTotalRecordCount:!1};ApiClient.getItems(t,n).then((function(t){t.Items.length?e.querySelector("#resumableSection").classList.remove("hide"):e.querySelector("#resumableSection").classList.add("hide");var r=!A(),n=e.querySelector("#resumableItems");s.default.buildCards(t.Items,{itemsContainer:n,preferThumb:!0,shape:(0,b.UI)(A()),scalable:!0,overlayPlayButton:!0,allowBottomPadding:r,cardLayout:!1,showTitle:!0,showYear:!0,centerText:!0}),I(e)}))}(r,i,n),function(e,t,r){var n={IncludeItemTypes:"Movie",Limit:18,Fields:"PrimaryImageAspectRatio,MediaSourceCount",ParentId:r,ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb",EnableTotalRecordCount:!1};ApiClient.getJSON(ApiClient.getUrl("Users/"+t+"/Items/Latest",n)).then((function(t){var r=!A(),n=e.querySelector("#recentlyAddedItems");s.default.buildCards(t,{itemsContainer:n,shape:(0,b.xK)(A()),scalable:!0,overlayPlayButton:!0,allowBottomPadding:r,showTitle:!0,showYear:!0,centerText:!0}),I(e)}))}(r,i,n),function(e,t){var r=d.Ay.getWindowSize().innerWidth,n=5;r>=1600?n=8:r>=1200&&(n=6);var i=ApiClient.getUrl("Movies/Recommendations",{userId:t,categoryLimit:6,ItemLimit:n,Fields:"PrimaryImageAspectRatio,MediaSourceCount",ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb"});ApiClient.getJSON(i).then((function(t){if(!t.length)return e.querySelector(".noItemsMessage").classList.remove("hide"),void(e.querySelector(".recommendations").innerHTML="");var r=t.map(S).join("");e.querySelector(".noItemsMessage").classList.add("hide");var n=e.querySelector(".recommendations");n.innerHTML=r,a.default.lazyChildren(n),I(e)}))}(r,i)}(0,t,r)};var R=[],D=[];e.addEventListener("viewshow",(function(){if(l.setTabs(e,k,T,L,i,C),!e.getAttribute("data-title")){var r=t.topParentId;r?ApiClient.getItem(ApiClient.getCurrentUserId(),r).then((function(t){e.setAttribute("data-title",t.Name),f.default.setTitle(t.Name)})):(e.setAttribute("data-title",u.Ay.translate("Movies")),f.default.setTitle(u.Ay.translate("Movies")))}y.A.on(c.f,"playbackstop",w),h.default.on(window,E)})),e.addEventListener("viewbeforehide",(function(){h.default.off(window,E)}));for(var N=0,O=R;N<O.length;N++){var q=O[N];q.destroy&&q.destroy()}}r(41765),r(1177),r(79845),r(10353)},1177:function(e,t,r){"use strict";r(44962),r(84734),r(78557),r(96054),r(90076),r(83994),r(82367);var n=r(22832),i=r(38490),s=r(80669),a=r(58782),o=r(46782),l=r(34789),c=r(47629),d=r(56869),u=r(9164),h=r(10736),f=r(62014),m=(r(69177),r(86191)),v=r(65210),b=Object.create(HTMLDivElement.prototype);function g(e){var t=this,r=t.multiSelect;!1!==(null==r?void 0:r.onContainerClick.call(t,e))&&n.Ay.onClick.call(t,e)}function y(e){return e.preventDefault(),e.stopPropagation(),!1}function p(e){var t=e.target,r=c.Ay.parentWithAttribute(t,"data-id");if(null!=r&&r.getAttribute("data-serverid"))return i.default.handleCommand("menu",{sourceElement:r}),e.preventDefault(),e.stopPropagation(),!1}function A(e,t,n){var i=this;Promise.all([r.e(45642),r.e(24468),r.e(95947)]).then(r.bind(r,24468)).then((function(e){e.onUserDataChanged(n,i)}));var s=S(i);-1===s.indexOf("markfavorite")&&-1===s.indexOf("markplayed")||i.notifyRefreshNeeded()}function S(e){var t=e.getAttribute("data-monitor");return t?t.split(","):[]}function I(e,t,n){var i=this;if(-1===S(i).indexOf("timers")){var s=n.ProgramId,a=n.Id;Promise.all([r.e(45642),r.e(24468),r.e(95947)]).then(r.bind(r,24468)).then((function(e){e.onTimerCreated(s,a,i)}))}else i.notifyRefreshNeeded()}function T(){-1!==S(this).indexOf("seriestimers")&&this.notifyRefreshNeeded()}function C(e,t,n){var i=this;-1===S(i).indexOf("timers")?Promise.all([r.e(45642),r.e(24468),r.e(95947)]).then(r.bind(r,24468)).then((function(e){e.onTimerCancelled(n.Id,i)})):i.notifyRefreshNeeded()}function L(e,t,n){var i=this;-1===S(i).indexOf("seriestimers")?Promise.all([r.e(45642),r.e(24468),r.e(95947)]).then(r.bind(r,24468)).then((function(e){e.onSeriesTimerCancelled(n.Id,i)})):i.notifyRefreshNeeded()}function x(e,t,r){var n=this,i=S(n);if(-1===i.indexOf("seriestimers")&&-1===i.indexOf("timers")){var s=r.ItemsAdded||[],a=r.ItemsRemoved||[];if(s.length||a.length){var o=n.getAttribute("data-parentid");if(o){var l=r.FoldersAddedTo||[],c=r.FoldersRemovedFrom||[],d=r.CollectionFolders||[];if(-1===l.indexOf(o)&&-1===c.indexOf(o)&&-1===d.indexOf(o))return}n.notifyRefreshNeeded()}}}function w(e,t){var r,n=this,i=t.state,s=S(n);if(i.NowPlayingItem&&"Video"===i.NowPlayingItem.MediaType){if(-1!==s.indexOf("videoplayback"))return void n.notifyRefreshNeeded(!0)}else if("Audio"===(null===(r=i.NowPlayingItem)||void 0===r?void 0:r.MediaType)&&-1!==s.indexOf("audioplayback"))return void n.notifyRefreshNeeded(!0)}function E(e,t,r,n){var i=r.bind(e);n=n||h.default,f.A.on(n,t,i),e["event_"+t]=i}function k(e,t,r){var n=e["event_"+t];n&&(r=r||h.default,f.A.off(r,t,n),e["event_"+t]=null)}function P(e,t){e.refreshInterval&&(clearInterval(e.refreshInterval),e.refreshInterval=null,t||(e.refreshIntervalEndTime=null))}function R(e,t){P(e),t||(t=parseInt(e.getAttribute("data-refreshinterval")||"0",10)),t&&(e.refreshInterval=setInterval(e.notifyRefreshNeeded.bind(e),t),e.refreshIntervalEndTime=(new Date).getTime()+t)}function D(e){var t=e.Items||e,r=this.parentContainer;r&&(t.length?r.classList.remove("hide"):r.classList.add("hide"));var n,i,s=document.activeElement;this.contains(s)&&(i=!0,n=s.getAttribute("data-id")),this.innerHTML=this.getItemsHtml(t),a.default.lazyChildren(this),i&&function(e,t){if(t){var r=e.querySelector('[data-id="'+t+'"]');if(r)try{return void u.A.focus(r)}catch(e){console.error(e)}}u.A.autoFocus(e)}(this,n),R(this),this.afterRefresh&&this.afterRefresh(e)}b.enableMultiSelect=function(e){var t=this.multiSelect;if(e){if(!t){var n=this;r.e(35308).then(r.bind(r,35308)).then((function(e){var t=e.default;n.multiSelect=new t({container:n,bindOnClick:!1})}))}}else t&&(t.destroy(),this.multiSelect=null)},b.enableDragReordering=function(e){var t=this.sortable;if(e){if(!t){var r=this;r.sortable=new v.Ay(r,{draggable:".listItem",handle:".listViewDragHandle",onEnd:function(e){return function(e,t){var r=e.item,n=e.newIndex,i=r.getAttribute("data-playlistitemid"),s=r.getAttribute("data-playlistid");if(s){var a=r.getAttribute("data-serverid"),o=m.A.getApiClient(a);d.Ay.show(),o.ajax({url:o.getUrl("Playlists/"+s+"/Items/"+i+"/Move/"+n),type:"POST"}).then((function(){d.Ay.hide()}),(function(){d.Ay.hide(),t.refreshItems()}))}else{var l=e.oldIndex;r.dispatchEvent(new CustomEvent("itemdrop",{detail:{oldIndex:l,newIndex:n,playlistItemId:i},bubbles:!0,cancelable:!1}))}}(e,r)}})}}else t&&(t.destroy(),this.sortable=null)},b.createdCallback=function(){this.classList.add("itemsContainer")},b.attachedCallback=function(){this.addEventListener("click",g),l.A.touch?this.addEventListener("contextmenu",y):"false"!==this.getAttribute("data-contextmenu")&&this.addEventListener("contextmenu",p),(o.A.desktop||o.A.mobile&&"false"!==this.getAttribute("data-multiselect"))&&this.enableMultiSelect(!0),o.A.tv&&this.classList.add("itemsContainer-tv"),n.Ay.on(this,{click:!1}),E(this,"UserDataChanged",A),E(this,"TimerCreated",I),E(this,"SeriesTimerCreated",T),E(this,"TimerCancelled",C),E(this,"SeriesTimerCancelled",L),E(this,"LibraryChanged",x),E(this,"playbackstop",w,s.f),"true"===this.getAttribute("data-dragreorder")&&this.enableDragReordering(!0)},b.detachedCallback=function(){P(this),this.enableMultiSelect(!1),this.enableDragReordering(!1),this.removeEventListener("click",g),this.removeEventListener("contextmenu",p),this.removeEventListener("contextmenu",y),n.Ay.off(this,{click:!1}),k(this,"UserDataChanged"),k(this,"TimerCreated"),k(this,"SeriesTimerCreated"),k(this,"TimerCancelled"),k(this,"SeriesTimerCancelled"),k(this,"LibraryChanged"),k(this,"playbackstop",s.f),this.fetchData=null,this.getItemsHtml=null,this.parentContainer=null},b.pause=function(){P(this,!0),this.paused=!0},b.resume=function(e){this.paused=!1;var t=this.refreshIntervalEndTime;if(t){var r=t-(new Date).getTime();r>0&&!this.needsRefresh?R(this,r):(this.needsRefresh=!0,this.refreshIntervalEndTime=null)}return this.needsRefresh||null!=e&&e.refresh?this.refreshItems():Promise.resolve()},b.refreshItems=function(){return this.fetchData?this.paused?(this.needsRefresh=!0,Promise.resolve()):(this.needsRefresh=!1,this.fetchData().then(D.bind(this))):Promise.resolve()},b.notifyRefreshNeeded=function(e){if(this.paused)this.needsRefresh=!0;else{var t=this.refreshTimeout;t&&clearTimeout(t),!0===e?this.refreshItems():this.refreshTimeout=setTimeout(this.refreshItems.bind(this),1e4)}},document.registerElement("emby-itemscontainer",{prototype:b,extends:"div"})},41765:function(e,t,r){"use strict";r(44962),r(78557),r(90076),r(83994),r(82367);var n=r(56422),i=r(47629),s=r(46782),a=r(38490),o=r(9164),l=r(34789),c=(r(69177),Object.create(HTMLDivElement.prototype));function d(e){var t=e.detail.command;"end"===t?(o.A.focusLast(this,"."+this.getAttribute("data-navcommands")),e.preventDefault(),e.stopPropagation()):"pageup"===t?(o.A.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),-12),e.preventDefault(),e.stopPropagation()):"pagedown"===t&&(o.A.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),12),e.preventDefault(),e.stopPropagation())}c.createdCallback=function(){this.classList.add("emby-scroller")},c.scrollToBeginning=function(){this.scroller&&this.scroller.slideTo(0,!0)},c.toStart=function(e,t){this.scroller&&this.scroller.toStart(e,t)},c.toCenter=function(e,t){this.scroller&&this.scroller.toCenter(e,t)},c.scrollToPosition=function(e,t){this.scroller&&this.scroller.slideTo(e,t)},c.getScrollPosition=function(){if(this.scroller)return this.scroller.getScrollPosition()},c.getScrollSize=function(){if(this.scroller)return this.scroller.getScrollSize()},c.getScrollEventName=function(){if(this.scroller)return this.scroller.getScrollEventName()},c.getScrollSlider=function(){if(this.scroller)return this.scroller.getScrollSlider()},c.addScrollEventListener=function(e,t){this.scroller&&i.Ay.addEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},c.removeScrollEventListener=function(e,t){this.scroller&&i.Ay.removeEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},c.attachedCallback=function(){this.getAttribute("data-navcommands")&&a.default.on(this,d);var e="false"!==this.getAttribute("data-horizontal"),t=this.querySelector(".scrollSlider");e&&(t.style["white-space"]="nowrap");var c,u,h=s.A.desktop&&e&&"false"!==this.getAttribute("data-scrollbuttons"),f={horizontal:e,mouseDragging:1,mouseWheel:"false"!==this.getAttribute("data-mousewheel"),touchDragging:1,slidee:t,scrollBy:200,speed:e?270:240,elasticBounds:1,dragHandle:1,autoImmediate:!0,skipSlideToWhenVisible:"true"===this.getAttribute("data-skipfocuswhenvisible"),dispatchScrollEvent:h||"true"===this.getAttribute("data-scrollevent"),hideScrollbar:h||"true"===this.getAttribute("data-hidescrollbar"),allowNativeSmoothScroll:"true"===this.getAttribute("data-allownativesmoothscroll")&&!h,allowNativeScroll:!h,forceHideScrollbars:h,requireAnimation:h&&l.A.edge};this.scroller=new n.A(this,f),this.scroller.init(),this.scroller.reload(),s.A.tv&&this.getAttribute("data-centerfocus")&&(this,c=this.scroller,i.Ay.addEventListener(this,"focus",(function(e){var t=o.A.focusableParent(e.target);t&&c.toCenter(t)}),{capture:!0,passive:!0})),h&&(u=this,r.e(49275).then(r.bind(r,49275)).then((function(){u.insertAdjacentHTML("beforebegin",'<div is="emby-scrollbuttons" class="emby-scrollbuttons padded-right"></div>')})))},c.pause=function(){var e=this.headroom;e&&e.pause()},c.resume=function(){var e=this.headroom;e&&e.resume()},c.detachedCallback=function(){this.getAttribute("data-navcommands")&&a.default.off(this,d);var e=this.headroom;e&&(e.destroy(),this.headroom=null);var t=this.scroller;t&&(t.destroy(),this.scroller=null)},document.registerElement("emby-scroller",{prototype:c,extends:"div"})},79845:function(e,t,r){"use strict";r(96054),r(69177);var n=r(47629),i=r(56422),s=r(34789),a=r(9164),o=r(46782),l=Object.create(HTMLDivElement.prototype),c="emby-tab-button",d=c+"-active";function u(e){e.classList.add(d)}function h(e,t,r){var n;e.dispatchEvent(new CustomEvent("beforetabchange",{detail:{selectedTabIndex:t,previousIndex:r}})),null!=r&&r!==t&&(n=null)&&n.classList.remove("is-active")}function f(e){var t=this,r=t.querySelector("."+d),i=n.Ay.parentWithClass(e.target,c);if(i&&i!==r){r&&r.classList.remove(d);var s=r?parseInt(r.getAttribute("data-index"),10):null;u(i);var a=parseInt(i.getAttribute("data-index"),10);h(t,a,s),setTimeout((function(){t.selectedTabIndex=a,t.dispatchEvent(new CustomEvent("tabchange",{detail:{selectedTabIndex:a,previousIndex:s}}))}),120),t.scroller&&t.scroller.toCenter(i,!1)}}function m(e){var t=n.Ay.parentWithClass(e.target,c);t&&this.scroller&&this.scroller.toCenter(t,!1)}function v(e){var t=e.target.parentNode.querySelector(".lastFocused");t&&t.classList.remove("lastFocused"),e.target.classList.add("lastFocused")}function b(e){return e.querySelector("."+d)}function g(e,t){for(var r=e[t];r;){if(r.classList.contains(c)&&!r.classList.contains("hide"))return r;r=r[t]}return null}l.createdCallback=function(){this.classList.contains("emby-tabs")||(this.classList.add("emby-tabs"),this.classList.add("focusable"),n.Ay.addEventListener(this,"click",f,{passive:!0}),o.A.tv&&n.Ay.addEventListener(this,"focusin",m,{passive:!0}),n.Ay.addEventListener(this,"focusout",v))},l.focus=function(){var e=this.querySelector("."+d),t=this.querySelector(".lastFocused");t?a.A.focus(t):e?a.A.focus(e):a.A.autoFocus(this)},l.refresh=function(){this.scroller&&this.scroller.reload()},l.attachedCallback=function(){!function(e){if(!e.scroller){var t=e.querySelector(".emby-tabs-slider");t?(e.scroller=new i.A(e,{horizontal:1,itemNav:0,mouseDragging:1,touchDragging:1,slidee:t,smart:!0,releaseSwing:!0,scrollBy:200,speed:120,elasticBounds:1,dragHandle:1,dynamicHandle:1,clickBar:1,hiddenScroll:!0,requireAnimation:!s.A.safari,allowNativeSmoothScroll:!0}),e.scroller.init()):(e.classList.add("scrollX"),e.classList.add("hiddenScrollX"),e.classList.add("smoothScrollX"))}}(this);var e=this.querySelector("."+d),t=e?parseInt(e.getAttribute("data-index"),10):parseInt(this.getAttribute("data-index")||"0",10);if(-1!==t){this.selectedTabIndex=t;var r=this.querySelectorAll("."+c)[t];r&&u(r)}this.readyFired||(this.readyFired=!0,this.dispatchEvent(new CustomEvent("ready",{})))},l.detachedCallback=function(){this.scroller&&(this.scroller.destroy(),this.scroller=null),n.Ay.removeEventListener(this,"click",f,{passive:!0}),o.A.tv&&n.Ay.removeEventListener(this,"focusin",m,{passive:!0})},l.selectedIndex=function(e,t){var r=this;if(null==e)return r.selectedTabIndex||0;var n=r.selectedIndex();r.selectedTabIndex=e;var i=r.querySelectorAll("."+c);if(n===e||!1===t){h(r,e,n),r.dispatchEvent(new CustomEvent("tabchange",{detail:{selectedTabIndex:e}}));var s=i[n];u(i[e]),n!==e&&s&&s.classList.remove(d)}else f.call(r,{target:i[e]})},l.selectNext=function(){var e=g(b(this),"nextSibling");e&&f.call(this,{target:e})},l.selectPrevious=function(){var e=g(b(this),"previousSibling");e&&f.call(this,{target:e})},l.triggerBeforeTabChange=function(){h(this,this.selectedIndex())},l.triggerTabChange=function(){this.dispatchEvent(new CustomEvent("tabchange",{detail:{selectedTabIndex:this.selectedIndex()}}))},l.setTabEnabled=function(e,t){var r=this.querySelector('.emby-tab-button[data-index="'+e+'"]');t?r.classList.remove("hide"):r.classList.remove("add")},document.registerElement("emby-tabs",{prototype:l,extends:"div"})},10947:function(e,t,r){"use strict";var n;r.d(t,{B:function(){return n}}),function(e){e.SET_TABS="SET_TABS",e.SHOW_VIDEO_OSD="SHOW_VIDEO_OSD"}(n||(n={}))},17145:function(e,t,r){"use strict";var n;r.d(t,{D:function(){return n}}),function(e){e.Albums="albums",e.AlbumArtists="albumartists",e.Artists="artists",e.Channels="channels",e.Collections="collections",e.Episodes="episodes",e.Favorites="favorites",e.Genres="genres",e.Guide="guide",e.Movies="movies",e.Networks="networks",e.Playlists="playlists",e.Programs="programs",e.Recordings="recordings",e.Schedule="schedule",e.Series="series",e.SeriesTimers="seriestimers",e.Songs="songs",e.Suggestions="suggestions",e.Trailers="trailers",e.Upcoming="upcoming",e.PhotoAlbums="photoalbums",e.Photos="photos",e.Videos="videos",e.Books="books"}(n||(n={}))},85771:function(e,t,r){var n={"./moviecollections":[35115,28336,1820,32125,70712,6940,57989],"./moviecollections.js":[35115,28336,1820,32125,70712,6940,57989],"./moviegenres":[3776,3776],"./moviegenres.js":[3776,3776],"./movies":[70179,28336,1820,32125,70712,6940,70179,79718],"./movies.html":[98849,88300],"./movies.js":[70179,28336,1820,32125,70712,6940,70179,79718],"./moviesrecommended":[4628],"./moviesrecommended.js":[4628],"./movietrailers":[61772,28336,1820,32125,70712,6940,61772,57337],"./movietrailers.js":[61772,28336,1820,32125,70712,6940,61772,57337]};function i(e){if(!r.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],i=t[0];return Promise.all(t.slice(1).map(r.e)).then((function(){return r(i)}))}i.keys=function(){return Object.keys(n)},i.id=85771,e.exports=i},4452:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=a(e,s(r)))}return e}function s(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return i.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=a(t,r));return t}function a(e,t){return t?e?e+" "+t:e+t:e}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r)}()}}]);