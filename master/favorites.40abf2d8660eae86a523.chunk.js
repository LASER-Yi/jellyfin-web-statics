"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[30205,83264],{4126:function(e,t,r){r.r(t),r(5769),r(63238),r(61418),r(17460),r(14078),r(55849),r(15610),r(72410),r(52077),r(25901),r(92189),r(91047),r(19068),r(87211),r(95163),r(99785);var i=r(66560),n=r(61570),o=r(72365),a=r(94994),s=r(84881),l=r(30325),c=r(34643),u=(r(82427),r(24432),r(18613));function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function d(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(void 0,n=function(e,t){if("object"!==h(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,"string");if("object"!==h(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(i.key),"symbol"===h(n)?n:String(n)),i)}var n}function f(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==r.return||r.return()}finally{if(s)throw o}}}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function v(e){return function(){var t=this.apiClient,r={SortBy:"SeriesName,SortName",SortOrder:"Ascending",Filters:"IsFavorite",Recursive:!0,Fields:"PrimaryImageAspectRatio,BasicSyncInfo",CollapseBoxSetItems:!1,ExcludeLocationTypes:"Virtual",EnableTotalRecordCount:!1,Limit:20},i=t.getCurrentUserId();return"MusicArtist"===e.types?t.getArtists(i,r):"Person"===e.types?t.getPeople(i,r):(r.IncludeItemTypes=e.types,t.getItems(i,r))}}function y(e,t){return i.appRouter.getRouteUrl("list",{serverId:t,itemTypes:e.types,isFavorite:!0})}function p(e){return function(t){s.M.preferVisualCards&&e.autoCardLayout&&e.showTitle;var r=this.apiClient.serverId(),i=l.Z.tv?[{name:a.ZP.translate("All"),id:"more",icon:"favorite",routeUrl:y(e,r)}]:null,o=0;return e.showTitle&&o++,e.showYear&&o++,e.showParentTitle&&o++,n.default.getCardsHtml({items:t,preferThumb:e.preferThumb,shape:e.shape,centerText:e.centerText&&!0,overlayText:!1!==e.overlayText,showTitle:e.showTitle,showYear:e.showYear,showParentTitle:e.showParentTitle,scalable:!0,coverImage:e.coverImage,overlayPlayButton:e.overlayPlayButton,overlayMoreButton:e.overlayMoreButton&&!0,action:e.action,allowBottomPadding:!1,cardLayout:false,leadingButtons:i,lines:o})}}var b=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.view=t,this.params=r,this.apiClient=u.Z.currentApiClient(),this.sectionsContainer=t.querySelector(".sections"),function(e,t,r){var i,n=[{name:"Movies",types:"Movie",shape:"overflowPortrait",showTitle:!0,showYear:!0,overlayPlayButton:!0,overlayText:!1,centerText:!0},{name:"Shows",types:"Series",shape:"overflowPortrait",showTitle:!0,showYear:!0,overlayPlayButton:!0,overlayText:!1,centerText:!0},{name:"Episodes",types:"Episode",shape:"overflowBackdrop",preferThumb:!1,showTitle:!0,showParentTitle:!0,overlayPlayButton:!0,overlayText:!1,centerText:!0},{name:"Videos",types:"Video",shape:"overflowBackdrop",preferThumb:!0,showTitle:!0,overlayPlayButton:!0,overlayText:!1,centerText:!0},{name:"Collections",types:"BoxSet",shape:"overflowPortrait",showTitle:!0,overlayPlayButton:!0,overlayText:!1,centerText:!0},{name:"Playlists",types:"Playlist",shape:"overflowSquare",preferThumb:!1,showTitle:!0,overlayText:!1,showParentTitle:!1,centerText:!0,overlayPlayButton:!0,coverImage:!0},{name:"People",types:"Person",shape:"overflowPortrait",preferThumb:!1,showTitle:!0,overlayText:!1,showParentTitle:!1,centerText:!0,overlayPlayButton:!0,coverImage:!0},{name:"Artists",types:"MusicArtist",shape:"overflowSquare",preferThumb:!1,showTitle:!0,overlayText:!1,showParentTitle:!1,centerText:!0,overlayPlayButton:!0,coverImage:!0},{name:"Albums",types:"MusicAlbum",shape:"overflowSquare",preferThumb:!1,showTitle:!0,overlayText:!1,showParentTitle:!0,centerText:!0,overlayPlayButton:!0,coverImage:!0},{name:"Songs",types:"Audio",shape:"overflowSquare",preferThumb:!1,showTitle:!0,overlayText:!1,showParentTitle:!0,centerText:!0,overlayMoreButton:!0,action:"instantmix",coverImage:!0},{name:"Books",types:"Book",shape:"overflowPortrait",showTitle:!0,showYear:!0,overlayPlayButton:!0,overlayText:!1,centerText:!0}],s="",c=f(n);try{for(c.s();!(i=c.n()).done;){var u=i.value,h="verticalSection";u.showTitle||(h+=" verticalSection-extrabottompadding"),s+='<div class="'+h+' hide">',s+='<div class="sectionTitleContainer sectionTitleContainer-cards padded-left">',l.Z.tv?s+='<h2 class="sectionTitle sectionTitle-cards">'+a.ZP.translate(u.name)+"</h2>":(s+='<a is="emby-linkbutton" href="'+y(u,r.serverId())+'" class="more button-flat button-flat-mini sectionTitleTextButton">',s+='<h2 class="sectionTitle sectionTitle-cards">',s+=a.ZP.translate(u.name),s+="</h2>",s+='<span class="material-icons chevron_right" aria-hidden="true"></span>',s+="</a>"),s+="</div>",s+='<div is="emby-scroller" class="padded-top-focusscale padded-bottom-focusscale" data-centerfocus="true"><div is="emby-itemscontainer" class="itemsContainer scrollSlider focuscontainer-x" data-monitor="markfavorite"></div></div>',s+="</div>"}}catch(e){c.e(e)}finally{c.f()}t.innerHTML=s,window.CustomElements.upgradeSubtree(t);for(var d=t.querySelectorAll(".itemsContainer"),m=0,b=d.length;m<b;m++){var g=d[m];g.fetchData=v(n[m]).bind(e),g.getItemsHtml=p(n[m]).bind(e),g.parentContainer=o.ZP.parentWithClass(g,"verticalSection")}}(this,this.sectionsContainer,this.apiClient)}var t,r;return t=e,(r=[{key:"onResume",value:function(e){var t,r=[],i=this.view,n=f(this.sectionsContainer.querySelectorAll(".itemsContainer"));try{for(n.s();!(t=n.n()).done;){var o=t.value;r.push(o.resume(e))}}catch(e){n.e(e)}finally{n.f()}Promise.all(r).then((function(){e.autoFocus&&c.Z.autoFocus(i)}))}},{key:"onPause",value:function(){this.sectionsContainer&&Array.from(this.sectionsContainer.querySelectorAll(".itemsContainer")).forEach((function(e){e.pause()}))}},{key:"destroy",value:function(){this.view=null,this.params=null,this.apiClient=null;var e,t=f(this.sectionsContainer.querySelectorAll(".itemsContainer"));try{for(t.s();!(e=t.n()).done;){var r=e.value;r.fetchData=null,r.getItemsHtml=null,r.parentContainer=null}}catch(e){t.e(e)}finally{t.f()}this.sectionsContainer=null}}])&&d(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.default=b},82427:function(e,t,r){r(5769),r(63238),r(61418),r(17460),r(14078),r(27471),r(32081);var i=r(61008),n=r(58517),o=r(48957),a=r(98301),s=r(30325),l=r(57366),c=r(72365),u=r(28540),h=r(34643),d=r(44038),f=r(81643),m=(r(67752),r(18613)),v=r(28172),y=Object.create(HTMLDivElement.prototype);function p(e){var t=this,r=t.multiSelect;!1!==(null==r?void 0:r.onContainerClick.call(t,e))&&i.ZP.onClick.call(t,e)}function b(e){return e.preventDefault(),e.stopPropagation(),!1}function g(e){var t=e.target,r=c.ZP.parentWithAttribute(t,"data-id");if(null!=r&&r.getAttribute("data-serverid"))return n.default.handleCommand("menu",{sourceElement:r}),e.preventDefault(),e.stopPropagation(),!1}function T(e,t,i){var n=this;Promise.all([r.e(61570),r.e(83264)]).then(r.bind(r,61570)).then((function(e){e.onUserDataChanged(i,n)}));var o=w(n);-1===o.indexOf("markfavorite")&&-1===o.indexOf("markplayed")||n.notifyRefreshNeeded()}function w(e){var t=e.getAttribute("data-monitor");return t?t.split(","):[]}function S(e,t,i){var n=this;if(-1===w(n).indexOf("timers")){var o=i.ProgramId,a=i.Id;Promise.all([r.e(61570),r.e(83264)]).then(r.bind(r,61570)).then((function(e){e.onTimerCreated(o,a,n)}))}else n.notifyRefreshNeeded()}function P(){-1!==w(this).indexOf("seriestimers")&&this.notifyRefreshNeeded()}function C(e,t,i){var n=this;-1===w(n).indexOf("timers")?Promise.all([r.e(61570),r.e(83264)]).then(r.bind(r,61570)).then((function(e){e.onTimerCancelled(i.Id,n)})):n.notifyRefreshNeeded()}function I(e,t,i){var n=this;-1===w(n).indexOf("seriestimers")?Promise.all([r.e(61570),r.e(83264)]).then(r.bind(r,61570)).then((function(e){e.onSeriesTimerCancelled(i.Id,n)})):n.notifyRefreshNeeded()}function x(e,t,r){var i=this,n=w(i);if(-1===n.indexOf("seriestimers")&&-1===n.indexOf("timers")){var o=r.ItemsAdded||[],a=r.ItemsRemoved||[];if(o.length||a.length){var s=i.getAttribute("data-parentid");if(s){var l=r.FoldersAddedTo||[],c=r.FoldersRemovedFrom||[],u=r.CollectionFolders||[];if(-1===l.indexOf(s)&&-1===c.indexOf(s)&&-1===u.indexOf(s))return}i.notifyRefreshNeeded()}}}function A(e,t){var r,i=this,n=t.state,o=w(i);if(n.NowPlayingItem&&"Video"===n.NowPlayingItem.MediaType){if(-1!==o.indexOf("videoplayback"))return void i.notifyRefreshNeeded(!0)}else if("Audio"===(null===(r=n.NowPlayingItem)||void 0===r?void 0:r.MediaType)&&-1!==o.indexOf("audioplayback"))return void i.notifyRefreshNeeded(!0)}function E(e,t,r,i){var n=r.bind(e);i=i||d.default,f.Z.on(i,t,n),e["event_"+t]=n}function k(e,t,r){var i=e["event_"+t];i&&(r=r||d.default,f.Z.off(r,t,i),e["event_"+t]=null)}function Z(e,t){e.refreshInterval&&(clearInterval(e.refreshInterval),e.refreshInterval=null,t||(e.refreshIntervalEndTime=null))}function B(e,t){Z(e),t||(t=parseInt(e.getAttribute("data-refreshinterval")||"0",10)),t&&(e.refreshInterval=setInterval(e.notifyRefreshNeeded.bind(e),t),e.refreshIntervalEndTime=(new Date).getTime()+t)}function R(e){var t=e.Items||e,r=this.parentContainer;r&&(t.length?r.classList.remove("hide"):r.classList.add("hide"));var i,n,o=document.activeElement;this.contains(o)&&(n=!0,i=o.getAttribute("data-id")),this.innerHTML=this.getItemsHtml(t),a.default.lazyChildren(this),n&&function(e,t){if(t){var r=e.querySelector('[data-id="'+t+'"]');if(r)try{return void h.Z.focus(r)}catch(e){console.error(e)}}h.Z.autoFocus(e)}(this,i),B(this),this.afterRefresh&&this.afterRefresh(e)}y.enableMultiSelect=function(e){var t=this.multiSelect;if(e){if(!t){var i=this;Promise.all([r.e(52943),r.e(9245)]).then(r.bind(r,52943)).then((function(e){var t=e.default;i.multiSelect=new t({container:i,bindOnClick:!1})}))}}else t&&(t.destroy(),this.multiSelect=null)},y.enableDragReordering=function(e){var t=this.sortable;if(e){if(!t){var r=this;r.sortable=new v.ZP(r,{draggable:".listItem",handle:".listViewDragHandle",onEnd:function(e){return function(e,t){var r=e.item,i=e.newIndex,n=r.getAttribute("data-playlistitemid"),o=r.getAttribute("data-playlistid");if(o){var a=r.getAttribute("data-serverid"),s=m.Z.getApiClient(a);u.ZP.show(),s.ajax({url:s.getUrl("Playlists/"+o+"/Items/"+n+"/Move/"+i),type:"POST"}).then((function(){u.ZP.hide()}),(function(){u.ZP.hide(),t.refreshItems()}))}else{var l=e.oldIndex;r.dispatchEvent(new CustomEvent("itemdrop",{detail:{oldIndex:l,newIndex:i,playlistItemId:n},bubbles:!0,cancelable:!1}))}}(e,r)}})}}else t&&(t.destroy(),this.sortable=null)},y.createdCallback=function(){this.classList.add("itemsContainer")},y.attachedCallback=function(){this.addEventListener("click",p),l.Z.touch?this.addEventListener("contextmenu",b):"false"!==this.getAttribute("data-contextmenu")&&this.addEventListener("contextmenu",g),(s.Z.desktop||s.Z.mobile&&"false"!==this.getAttribute("data-multiselect"))&&this.enableMultiSelect(!0),s.Z.tv&&this.classList.add("itemsContainer-tv"),i.ZP.on(this,{click:!1}),E(this,"UserDataChanged",T),E(this,"TimerCreated",S),E(this,"SeriesTimerCreated",P),E(this,"TimerCancelled",C),E(this,"SeriesTimerCancelled",I),E(this,"LibraryChanged",x),E(this,"playbackstop",A,o.O),"true"===this.getAttribute("data-dragreorder")&&this.enableDragReordering(!0)},y.detachedCallback=function(){Z(this),this.enableMultiSelect(!1),this.enableDragReordering(!1),this.removeEventListener("click",p),this.removeEventListener("contextmenu",g),this.removeEventListener("contextmenu",b),i.ZP.off(this,{click:!1}),k(this,"UserDataChanged"),k(this,"TimerCreated"),k(this,"SeriesTimerCreated"),k(this,"TimerCancelled"),k(this,"SeriesTimerCancelled"),k(this,"LibraryChanged"),k(this,"playbackstop",o.O),this.fetchData=null,this.getItemsHtml=null,this.parentContainer=null},y.pause=function(){Z(this,!0),this.paused=!0},y.resume=function(e){this.paused=!1;var t=this.refreshIntervalEndTime;if(t){var r=t-(new Date).getTime();r>0&&!this.needsRefresh?B(this,r):(this.needsRefresh=!0,this.refreshIntervalEndTime=null)}return this.needsRefresh||null!=e&&e.refresh?this.refreshItems():Promise.resolve()},y.refreshItems=function(){return this.fetchData?this.paused?(this.needsRefresh=!0,Promise.resolve()):(this.needsRefresh=!1,this.fetchData().then(R.bind(this))):Promise.resolve()},y.notifyRefreshNeeded=function(e){if(this.paused)this.needsRefresh=!0;else{var t=this.refreshTimeout;t&&clearTimeout(t),!0===e?this.refreshItems():this.refreshTimeout=setTimeout(this.refreshItems.bind(this),1e4)}},document.registerElement("emby-itemscontainer",{prototype:y,extends:"div"})},24432:function(e,t,r){r(5769),r(63238),r(61418),r(17460),r(14078);var i=r(15723),n=r(72365),o=r(30325),a=r(58517),s=r(34643),l=r(57366),c=(r(67752),Object.create(HTMLDivElement.prototype));function u(e){var t=e.detail.command;"end"===t?(s.Z.focusLast(this,"."+this.getAttribute("data-navcommands")),e.preventDefault(),e.stopPropagation()):"pageup"===t?(s.Z.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),-12),e.preventDefault(),e.stopPropagation()):"pagedown"===t&&(s.Z.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),12),e.preventDefault(),e.stopPropagation())}c.createdCallback=function(){this.classList.add("emby-scroller")},c.scrollToBeginning=function(){this.scroller&&this.scroller.slideTo(0,!0)},c.toStart=function(e,t){this.scroller&&this.scroller.toStart(e,t)},c.toCenter=function(e,t){this.scroller&&this.scroller.toCenter(e,t)},c.scrollToPosition=function(e,t){this.scroller&&this.scroller.slideTo(e,t)},c.getScrollPosition=function(){if(this.scroller)return this.scroller.getScrollPosition()},c.getScrollSize=function(){if(this.scroller)return this.scroller.getScrollSize()},c.getScrollEventName=function(){if(this.scroller)return this.scroller.getScrollEventName()},c.getScrollSlider=function(){if(this.scroller)return this.scroller.getScrollSlider()},c.addScrollEventListener=function(e,t){this.scroller&&n.ZP.addEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},c.removeScrollEventListener=function(e,t){this.scroller&&n.ZP.removeEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},c.attachedCallback=function(){this.getAttribute("data-navcommands")&&a.default.on(this,u);var e="false"!==this.getAttribute("data-horizontal"),t=this.querySelector(".scrollSlider");e&&(t.style["white-space"]="nowrap");var c,h,d=o.Z.desktop&&e&&"false"!==this.getAttribute("data-scrollbuttons"),f={horizontal:e,mouseDragging:1,mouseWheel:"false"!==this.getAttribute("data-mousewheel"),touchDragging:1,slidee:t,scrollBy:200,speed:e?270:240,elasticBounds:1,dragHandle:1,autoImmediate:!0,skipSlideToWhenVisible:"true"===this.getAttribute("data-skipfocuswhenvisible"),dispatchScrollEvent:d||"true"===this.getAttribute("data-scrollevent"),hideScrollbar:d||"true"===this.getAttribute("data-hidescrollbar"),allowNativeSmoothScroll:"true"===this.getAttribute("data-allownativesmoothscroll")&&!d,allowNativeScroll:!d,forceHideScrollbars:d,requireAnimation:d&&l.Z.edge};this.scroller=new i.Z(this,f),this.scroller.init(),this.scroller.reload(),o.Z.tv&&this.getAttribute("data-centerfocus")&&(this,c=this.scroller,n.ZP.addEventListener(this,"focus",(function(e){var t=s.Z.focusableParent(e.target);t&&c.toCenter(t)}),{capture:!0,passive:!0})),d&&(h=this,r.e(39346).then(r.bind(r,39346)).then((function(){h.insertAdjacentHTML("beforebegin",'<div is="emby-scrollbuttons" class="emby-scrollbuttons padded-right"></div>')})))},c.pause=function(){var e=this.headroom;e&&e.pause()},c.resume=function(){var e=this.headroom;e&&e.resume()},c.detachedCallback=function(){this.getAttribute("data-navcommands")&&a.default.off(this,u);var e=this.headroom;e&&(e.destroy(),this.headroom=null);var t=this.scroller;t&&(t.destroy(),this.scroller=null)},document.registerElement("emby-scroller",{prototype:c,extends:"div"})}}]);