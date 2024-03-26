/*! For license information please see session-selectServer.426137a5fd354c4391e4.chunk.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[55319,49213,73287],{98515:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return w}}),r(96626),r(2663),r(81414);var n=r(65009),a=r.n(n),i=r(34862),s=r(66560),o=r(30325),c=r(71487),u=r(59858),l=r(34643),d=r(94994),f=r(78130),h=r(72365),v=r(57366),m=(r(24432),r(82427),r(38228),r(60635)),g=r(18613),p=r(37099),b=r(76443),S=r(84483),y=!v.Z.slow&&!v.Z.edge;function C(e){(0,p.Z)(e)}function w(e,t){function r(e){var t=[];t.push({name:d.ZP.translate("Connect"),id:"connect"}),t.push({name:d.ZP.translate("Delete"),id:"delete"}),f.default.show({items:t,title:e.Name}).then((function(t){switch(t){case"connect":!function(e){i.ZP.show(),g.Z.connectToServer(e,{enableAutoLogin:u.Z.enableAutoLogin()}).then((function(e){i.ZP.hide();var t=e.ApiClient;switch(e.State){case b.e.SignedIn:m.default.onServerChanged(t.getCurrentUserId(),t.accessToken(),t),m.default.navigate("home.html");break;case b.e.ServerSignIn:m.default.onServerChanged(null,null,t),m.default.navigate("login.html?serverid="+e.Servers[0].Id);break;case b.e.ServerUpdateNeeded:C({text:d.ZP.translate("core#ServerUpdateNeeded","https://github.com/jellyfin/jellyfin"),html:d.ZP.translate("core#ServerUpdateNeeded",'<a href="https://github.com/jellyfin/jellyfin">https://github.com/jellyfin/jellyfin</a>')});break;default:C({text:d.ZP.translate("MessageUnableToConnectToServer")})}}))}(e);break;case"delete":!function(e){i.ZP.show(),g.Z.deleteServer(e.Id).then((function(){i.ZP.hide(),v()}))}(e)}}))}function n(t){p=t,function(e,t){var r=t.map((function(e){return{name:e.Name,icon:"storage",cardType:"",id:e.Id,server:e}})),n=r.map((function(e){var t='<span class="cardImageIcon material-icons '+e.icon+'" aria-hidden="true"></span>',r="card overflowSquareCard loginSquareCard scalableCard overflowSquareCard-scalable";o.Z.tv&&(r+=" show-focus",y&&(r+=" show-animation"));var n="";return n+='<button raised class="'+r+'" style="display:inline-block;" data-id="'+e.id+'" data-url="'+(e.url||"")+'" data-cardtype="'+e.cardType+'">',n+='<div class="cardBox">',n+='<div class="cardScalable">',n+='<div class="cardPadder cardPadder-square">',n+="</div>",n+='<div class="cardContent">',n+='<div class="cardImageContainer coveredImage '.concat((0,S.Rk)(),'">'),n+=t,n+="</div>",n+="</div>",n+="</div>",n+='<div class="cardFooter">',(n+='<div class="cardText cardTextCentered">'+a()(e.name)+"</div>")+"</div></div></button>"})).join(""),s=e.querySelector(".servers");r.length||(n="<p>"+d.ZP.translate("MessageNoServersAvailable")+"</p>"),s.innerHTML=n,i.ZP.hide()}(e,t),o.Z.tv&&l.Z.autoFocus(e)}function v(){i.ZP.show(),g.Z.getAvailableServers().then(n)}var p;!function(e,t){"1"==t.showuser?(e.classList.add("libraryPage"),e.classList.remove("standalonePage"),e.classList.add("noSecondaryNavPage")):(e.classList.add("standalonePage"),e.classList.remove("libraryPage"),e.classList.remove("noSecondaryNavPage"))}(e,t),e.addEventListener("viewshow",(function(e){var t=e.detail.isRestored;c.default.setTitle(null),c.default.setTransparentMenu(!0),t||v()})),e.querySelector(".servers").addEventListener("click",(function(e){var t=h.ZP.parentWithClass(e.target,"card");if(t){var n=t.getAttribute("data-url");if(n)s.appRouter.show(n);else{var a=t.getAttribute("data-id");r(p.filter((function(e){return e.Id===a}))[0])}}}))}},82427:function(e,t,r){"use strict";r(13227),r(81414),r(37666),r(14011),r(11431),r(44901),r(54112);var n=r(61008),a=r(58517),i=r(2513),s=r(85432),o=r(30325),c=r(57366),u=r(72365),l=r(34862),d=r(34643),f=r(44038),h=r(74131),v=(r(67752),r(18613)),m=r(28172),g=Object.create(HTMLDivElement.prototype);function p(e){var t=this,r=t.multiSelect;!1!==(null==r?void 0:r.onContainerClick.call(t,e))&&n.ZP.onClick.call(t,e)}function b(e){return e.preventDefault(),e.stopPropagation(),!1}function S(e){var t=e.target,r=u.ZP.parentWithAttribute(t,"data-id");if(null!=r&&r.getAttribute("data-serverid"))return a.default.handleCommand("menu",{sourceElement:r}),e.preventDefault(),e.stopPropagation(),!1}function y(e,t,n){var a=this;Promise.all([r.e(61570),r.e(85441)]).then(r.bind(r,61570)).then((function(e){e.onUserDataChanged(n,a)}));var i=C(a);-1===i.indexOf("markfavorite")&&-1===i.indexOf("markplayed")||a.notifyRefreshNeeded()}function C(e){var t=e.getAttribute("data-monitor");return t?t.split(","):[]}function w(e,t,n){var a=this;if(-1===C(a).indexOf("timers")){var i=n.ProgramId,s=n.Id;Promise.all([r.e(61570),r.e(85441)]).then(r.bind(r,61570)).then((function(e){e.onTimerCreated(i,s,a)}))}else a.notifyRefreshNeeded()}function P(){-1!==C(this).indexOf("seriestimers")&&this.notifyRefreshNeeded()}function k(e,t,n){var a=this;-1===C(a).indexOf("timers")?Promise.all([r.e(61570),r.e(85441)]).then(r.bind(r,61570)).then((function(e){e.onTimerCancelled(n.Id,a)})):a.notifyRefreshNeeded()}function I(e,t,n){var a=this;-1===C(a).indexOf("seriestimers")?Promise.all([r.e(61570),r.e(85441)]).then(r.bind(r,61570)).then((function(e){e.onSeriesTimerCancelled(n.Id,a)})):a.notifyRefreshNeeded()}function A(e,t,r){var n=this,a=C(n);if(-1===a.indexOf("seriestimers")&&-1===a.indexOf("timers")){var i=r.ItemsAdded||[],s=r.ItemsRemoved||[];if(i.length||s.length){var o=n.getAttribute("data-parentid");if(o){var c=r.FoldersAddedTo||[],u=r.FoldersRemovedFrom||[],l=r.CollectionFolders||[];if(-1===c.indexOf(o)&&-1===u.indexOf(o)&&-1===l.indexOf(o))return}n.notifyRefreshNeeded()}}}function x(e,t){var r,n=this,a=t.state,i=C(n);if(a.NowPlayingItem&&"Video"===a.NowPlayingItem.MediaType){if(-1!==i.indexOf("videoplayback"))return void n.notifyRefreshNeeded(!0)}else if("Audio"===(null===(r=a.NowPlayingItem)||void 0===r?void 0:r.MediaType)&&-1!==i.indexOf("audioplayback"))return void n.notifyRefreshNeeded(!0)}function T(e,t,r,n){var a=r.bind(e);n=n||f.default,h.Z.on(n,t,a),e["event_"+t]=a}function Z(e,t,r){var n=e["event_"+t];n&&(r=r||f.default,h.Z.off(r,t,n),e["event_"+t]=null)}function E(e,t){e.refreshInterval&&(clearInterval(e.refreshInterval),e.refreshInterval=null,t||(e.refreshIntervalEndTime=null))}function O(e,t){E(e),t||(t=parseInt(e.getAttribute("data-refreshinterval")||"0",10)),t&&(e.refreshInterval=setInterval(e.notifyRefreshNeeded.bind(e),t),e.refreshIntervalEndTime=(new Date).getTime()+t)}function L(e){var t=e.Items||e,r=this.parentContainer;r&&(t.length?r.classList.remove("hide"):r.classList.add("hide"));var n,a,i=document.activeElement;this.contains(i)&&(a=!0,n=i.getAttribute("data-id")),this.innerHTML=this.getItemsHtml(t),s.default.lazyChildren(this),a&&function(e,t){if(t){var r=e.querySelector('[data-id="'+t+'"]');if(r)try{return void d.Z.focus(r)}catch(e){console.error(e)}}d.Z.autoFocus(e)}(this,n),O(this),this.afterRefresh&&this.afterRefresh(e)}g.enableMultiSelect=function(e){var t=this.multiSelect;if(e){if(!t){var n=this;r.e(52943).then(r.bind(r,8156)).then((function(e){var t=e.default;n.multiSelect=new t({container:n,bindOnClick:!1})}))}}else t&&(t.destroy(),this.multiSelect=null)},g.enableDragReordering=function(e){var t=this.sortable;if(e){if(!t){var r=this;r.sortable=new m.ZP(r,{draggable:".listItem",handle:".listViewDragHandle",onEnd:function(e){return function(e,t){var r=e.item,n=e.newIndex,a=r.getAttribute("data-playlistitemid"),i=r.getAttribute("data-playlistid");if(i){var s=r.getAttribute("data-serverid"),o=v.Z.getApiClient(s);l.ZP.show(),o.ajax({url:o.getUrl("Playlists/"+i+"/Items/"+a+"/Move/"+n),type:"POST"}).then((function(){l.ZP.hide()}),(function(){l.ZP.hide(),t.refreshItems()}))}else{var c=e.oldIndex;r.dispatchEvent(new CustomEvent("itemdrop",{detail:{oldIndex:c,newIndex:n,playlistItemId:a},bubbles:!0,cancelable:!1}))}}(e,r)}})}}else t&&(t.destroy(),this.sortable=null)},g.createdCallback=function(){this.classList.add("itemsContainer")},g.attachedCallback=function(){this.addEventListener("click",p),c.Z.touch?this.addEventListener("contextmenu",b):"false"!==this.getAttribute("data-contextmenu")&&this.addEventListener("contextmenu",S),(o.Z.desktop||o.Z.mobile&&"false"!==this.getAttribute("data-multiselect"))&&this.enableMultiSelect(!0),o.Z.tv&&this.classList.add("itemsContainer-tv"),n.ZP.on(this,{click:!1}),T(this,"UserDataChanged",y),T(this,"TimerCreated",w),T(this,"SeriesTimerCreated",P),T(this,"TimerCancelled",k),T(this,"SeriesTimerCancelled",I),T(this,"LibraryChanged",A),T(this,"playbackstop",x,i.O),"true"===this.getAttribute("data-dragreorder")&&this.enableDragReordering(!0)},g.detachedCallback=function(){E(this),this.enableMultiSelect(!1),this.enableDragReordering(!1),this.removeEventListener("click",p),this.removeEventListener("contextmenu",S),this.removeEventListener("contextmenu",b),n.ZP.off(this,{click:!1}),Z(this,"UserDataChanged"),Z(this,"TimerCreated"),Z(this,"SeriesTimerCreated"),Z(this,"TimerCancelled"),Z(this,"SeriesTimerCancelled"),Z(this,"LibraryChanged"),Z(this,"playbackstop",i.O),this.fetchData=null,this.getItemsHtml=null,this.parentContainer=null},g.pause=function(){E(this,!0),this.paused=!0},g.resume=function(e){this.paused=!1;var t=this.refreshIntervalEndTime;if(t){var r=t-(new Date).getTime();r>0&&!this.needsRefresh?O(this,r):(this.needsRefresh=!0,this.refreshIntervalEndTime=null)}return this.needsRefresh||null!=e&&e.refresh?this.refreshItems():Promise.resolve()},g.refreshItems=function(){return this.fetchData?this.paused?(this.needsRefresh=!0,Promise.resolve()):(this.needsRefresh=!1,this.fetchData().then(L.bind(this))):Promise.resolve()},g.notifyRefreshNeeded=function(e){if(this.paused)this.needsRefresh=!0;else{var t=this.refreshTimeout;t&&clearTimeout(t),!0===e?this.refreshItems():this.refreshTimeout=setTimeout(this.refreshItems.bind(this),1e4)}},document.registerElement("emby-itemscontainer",{prototype:g,extends:"div"})},24432:function(e,t,r){"use strict";r(13227),r(81414),r(37666),r(14011),r(11431);var n=r(15723),a=r(72365),i=r(30325),s=r(58517),o=r(34643),c=r(57366),u=(r(67752),Object.create(HTMLDivElement.prototype));function l(e){var t=e.detail.command;"end"===t?(o.Z.focusLast(this,"."+this.getAttribute("data-navcommands")),e.preventDefault(),e.stopPropagation()):"pageup"===t?(o.Z.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),-12),e.preventDefault(),e.stopPropagation()):"pagedown"===t&&(o.Z.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),12),e.preventDefault(),e.stopPropagation())}u.createdCallback=function(){this.classList.add("emby-scroller")},u.scrollToBeginning=function(){this.scroller&&this.scroller.slideTo(0,!0)},u.toStart=function(e,t){this.scroller&&this.scroller.toStart(e,t)},u.toCenter=function(e,t){this.scroller&&this.scroller.toCenter(e,t)},u.scrollToPosition=function(e,t){this.scroller&&this.scroller.slideTo(e,t)},u.getScrollPosition=function(){if(this.scroller)return this.scroller.getScrollPosition()},u.getScrollSize=function(){if(this.scroller)return this.scroller.getScrollSize()},u.getScrollEventName=function(){if(this.scroller)return this.scroller.getScrollEventName()},u.getScrollSlider=function(){if(this.scroller)return this.scroller.getScrollSlider()},u.addScrollEventListener=function(e,t){this.scroller&&a.ZP.addEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},u.removeScrollEventListener=function(e,t){this.scroller&&a.ZP.removeEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},u.attachedCallback=function(){this.getAttribute("data-navcommands")&&s.default.on(this,l);var e="false"!==this.getAttribute("data-horizontal"),t=this.querySelector(".scrollSlider");e&&(t.style["white-space"]="nowrap");var u,d,f=i.Z.desktop&&e&&"false"!==this.getAttribute("data-scrollbuttons"),h={horizontal:e,mouseDragging:1,mouseWheel:"false"!==this.getAttribute("data-mousewheel"),touchDragging:1,slidee:t,scrollBy:200,speed:e?270:240,elasticBounds:1,dragHandle:1,autoImmediate:!0,skipSlideToWhenVisible:"true"===this.getAttribute("data-skipfocuswhenvisible"),dispatchScrollEvent:f||"true"===this.getAttribute("data-scrollevent"),hideScrollbar:f||"true"===this.getAttribute("data-hidescrollbar"),allowNativeSmoothScroll:"true"===this.getAttribute("data-allownativesmoothscroll")&&!f,allowNativeScroll:!f,forceHideScrollbars:f,requireAnimation:f&&c.Z.edge};this.scroller=new n.Z(this,h),this.scroller.init(),this.scroller.reload(),i.Z.tv&&this.getAttribute("data-centerfocus")&&(this,u=this.scroller,a.ZP.addEventListener(this,"focus",(function(e){var t=o.Z.focusableParent(e.target);t&&u.toCenter(t)}),{capture:!0,passive:!0})),f&&(d=this,r.e(39346).then(r.bind(r,39346)).then((function(){d.insertAdjacentHTML("beforebegin",'<div is="emby-scrollbuttons" class="emby-scrollbuttons padded-right"></div>')})))},u.pause=function(){var e=this.headroom;e&&e.pause()},u.resume=function(){var e=this.headroom;e&&e.resume()},u.detachedCallback=function(){this.getAttribute("data-navcommands")&&s.default.off(this,l);var e=this.headroom;e&&(e.destroy(),this.headroom=null);var t=this.scroller;t&&(t.destroy(),this.scroller=null)},document.registerElement("emby-scroller",{prototype:u,extends:"div"})},84483:function(e,t,r){"use strict";r.d(t,{IH:function(){return h},Qi:function(){return f},Rk:function(){return v},XE:function(){return g},Yg:function(){return c},aI:function(){return p},aQ:function(){return o},gG:function(){return u},jL:function(){return d},nm:function(){return l}});var n=r(42571),a=r(1934),i=r(90005),s=r.n(i),o=function(e){return"Program"===e||"Timer"===e||"Recording"===e},c=function(e){return"play"===e.defaultAction&&e.isFolder?"link":e.isPhoto?"play":e.defaultAction},u=function(e){var t=window.screen;return!!(t&&t.availWidth-e>20)},l=function(e){return null==e?n.Mg.MixedSquare:e>=1.33?n.Mg.MixedBackdrop:e>.71?n.Mg.MixedSquare:n.Mg.MixedPortrait},d=function(e){var t;return s()(((t={card:!0})["".concat(e.shape,"Card")]=e.shape,t["".concat(e.cardCssClass)]=e.cardCssClass,t["".concat(e.cardClass)]=e.cardClass,t["card-hoverable"]=e.isDesktop,t["show-focus"]=e.isTV,t["show-animation"]=e.isTV&&e.enableFocusTransform,t.groupedCard=e.showChildCountIndicator&&e.childCount,t["card-withuserdata"]=!["MusicAlbum","MusicArtist","Audio"].includes(e.itemType),t.itemAction="button"===e.tagName,t))},f=function(e){var t;return s()(((t={cardImageContainer:!0,coveredImage:e.hasCoverImage,"coveredImage-contain":e.hasCoverImage&&"TvChannel"===e.itemType})[v(e.itemName)]=!e.imgUrl,t))},h=function(e){return s()({cardBox:!0,visualCardBox:e.cardLayout,"cardBox-bottompadded":e.hasOuterCardFooter&&!e.cardLayout})},v=function(e){return"defaultCardBackground defaultCardBackground".concat(m(e))},m=function(e){if(e){for(var t=Math.floor(e.length/2),r=String(e.slice(t,t+1).charCodeAt(0)),n=0,i=0;i<r.length;i++)n+=parseInt(r.charAt(i),10);return parseInt(String(n).slice(-1),10)%5+1}return(0,a.Iy)(1,5)},g=function(e){return e?-1!==(e=e.toLowerCase()).indexOf("portrait")?.6666666666666666:-1!==e.indexOf("backdrop")?1.7777777777777777:-1!==e.indexOf("square")?1:-1!==e.indexOf("banner")?5.405405405405405:null:null},p=function(e,t,r,n){switch(e){case"portrait":return b(t,n);case"square":return S(t,n);case"banner":return y(t);case"backdrop":return C(t,n);case"smallBackdrop":return w(t);case"overflowSmallBackdrop":return P(t,r,n);case"overflowPortrait":return k(t,r,n);case"overflowSquare":return I(t,r,n);case"overflowBackdrop":return A(t,r,n);default:return 4}},b=function(e,t){switch(!0){case t:return 5.9999999988;case e>=2200:return 10;case e>=1920:return 9.000000000009;case e>=1600:return 8;case e>=1400:return 7.0000000000021;case e>=1200:return 5.9999999988;case e>=800:return 5;case e>=700:return 4;default:return 3.0000000003}},S=function(e,t){switch(!0){case t:return 5.9999999988;case e>=2200:return 10;case e>=1920:return 9.000000000009;case e>=1600:return 8;case e>=1400:return 7.0000000000021;case e>=1200:return 5.9999999988;case e>=800:return 5;case e>=700:return 4;case e>=500:return 3.0000000003;default:return 2}},y=function(e){switch(!0){case e>=2200:return 4;case e>=1200:return 3.0000000003;case e>=800:return 2;default:return 1}},C=function(e,t){switch(!0){case t:return 4;case e>=2500:return 6;case e>=1600:return 5;case e>=1200:return 4;case e>=770:return 3;case e>=420:return 2;default:return 1}},w=function(e){switch(!0){case e>=1600:return 8;case e>=1400:return 7.000000000007001;case e>=1200:return 5.9999999988;case e>=1e3:return 5;case e>=800:return 4;case e>=500:return 3.0000000003;default:return 2}},P=function(e,t,r){switch(!0){case r:return 100/18.9;case t&&e>=800:return 100/15.5;case t:return 100/23.3;case e>=540:return 100/30;default:return 100/72}},k=function(e,t,r){switch(!0){case r:return 100/15.5;case t&&e>=1700:return 100/11.6;case t:return 100/15.5;case e>=1400:return 100/15;case e>=1200:return 100/18;case e>=760:return 100/23;case e>=400:return 100/31.5;default:return 100/42}},I=function(e,t,r){switch(!0){case r:return 100/15.5;case t&&e>=1700:return 100/11.6;case t:return 100/15.5;case e>=1400:return 100/15;case e>=1200:return 100/18;case e>=760:return 100/23;case e>=540:return 100/31.5;default:return 100/42}},A=function(e,t,r){switch(!0){case r:return 100/23.3;case t&&e>=1700:return 100/18.5;case t:return 100/23.3;case e>=1800:return 100/23.5;case e>=1400:return 100/30;case e>=760:return 2.5;case e>=640:return 100/56;default:return 100/72}}},42571:function(e,t,r){"use strict";var n;function a(e){return void 0===e&&(e=!0),e?n.SquareOverflow:n.Square}function i(e){return void 0===e&&(e=!0),e?n.BackdropOverflow:n.Backdrop}function s(e){return void 0===e&&(e=!0),e?n.PortraitOverflow:n.Portrait}r.d(t,{Mg:function(){return n},gB:function(){return i},nY:function(){return a},pk:function(){return s}}),function(e){e.Backdrop="backdrop",e.BackdropOverflow="overflowBackdrop",e.Banner="banner",e.Portrait="portrait",e.PortraitOverflow="overflowPortrait",e.Square="square",e.SquareOverflow="overflowSquare",e.Auto="auto",e.AutoHome="autohome",e.AutoOverflow="autooverflow",e.AutoVertical="autoVertical",e.Mixed="mixed",e.MixedSquare="mixedSquare",e.MixedBackdrop="mixedBackdrop",e.MixedPortrait="mixedPortrait"}(n||(n={}))},31606:function(e,t,r){"use strict";var n=r(16918),a="assets/img/devices/";t.ZP={getDeviceIcon:function(e){var t;switch(e.AppName||e.Client){case"Samsung Smart TV":return a+"samsung.svg";case"Xbox One":return a+"xbox.svg";case"Sony PS4":return a+"playstation.svg";case"Kodi":case"Kodi JellyCon":return a+"kodi.svg";case"Jellyfin Android":case"AndroidTV":case"Android TV":return a+"android.svg";case"Jellyfin Mobile (iOS)":case"Jellyfin Mobile (iPadOS)":case"Jellyfin iOS":case"Infuse":return a+"apple.svg";case"Home Assistant":return a+"home-assistant.svg";case"Jellyfin Roku":return a+"roku.svg";case"Finamp":return a+"finamp.svg";case"Jellyfin Web":return function(e){switch(e){case"Opera":case"Opera TV":case"Opera Android":return a+"opera.svg";case"Chrome":case"Chrome Android":return a+"chrome.svg";case"Firefox":case"Firefox Android":return a+"firefox.svg";case"Safari":case"Safari iPad":case"Safari iPhone":return a+"safari.svg";case"Edge Chromium":case"Edge Chromium Android":case"Edge Chromium iPad":case"Edge Chromium iPhone":return a+"edgechromium.svg";case"Edge":return a+"edge.svg";case"Internet Explorer":return a+"msie.svg";default:return a+"html5.svg"}}(e.Name||e.DeviceName);default:if(null===(t=e.Capabilities)||void 0===t?void 0:t.IconUrl)try{return new URL(e.Capabilities.IconUrl).toString()}catch(t){console.error("[getDeviceIcon] device capabilities has invalid IconUrl",e,t)}return a+"other.svg"}},getLibraryIcon:function(e){switch(e){case"movies":return"video_library";case"music":return"library_music";case"photos":case"homevideos":return"photo_library";case"livetv":return"live_tv";case"tvshows":return"tv";case"trailers":return"local_movies";case"musicvideos":return"music_video";case"books":return"library_books";case"channels":return"videocam";case"playlists":return"view_list";default:return"folder"}},getItemTypeIcon:function(e){switch(e){case n.k.MusicAlbum:return"album";case n.k.MusicArtist:case n.k.Person:return"person";case n.k.Audio:return"audiotrack";case n.k.Movie:return"movie";case n.k.Episode:case n.k.Series:return"tv";case n.k.Program:return"live_tv";case n.k.Book:return"book";case n.k.Folder:return"folder";case n.k.BoxSet:return"collections";case n.k.Playlist:return"view_list";case n.k.Photo:return"photo";case n.k.PhotoAlbum:return"photo_album";default:return"folder"}}}},22482:function(e,t,r){"use strict";function n(e){return e}r.d(t,{C:function(){return n}})},94047:function(e,t,r){"use strict";var n=r(27378),a="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=n.useState,s=n.useEffect,o=n.useLayoutEffect,c=n.useDebugValue;function u(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!a(e,r)}catch(e){return!0}}var l="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=i({inst:{value:r,getSnapshot:t}}),a=n[0].inst,l=n[1];return o((function(){a.value=r,a.getSnapshot=t,u(a)&&l({inst:a})}),[e,r,t]),s((function(){return u(a)&&l({inst:a}),e((function(){u(a)&&l({inst:a})}))}),[e]),c(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:l},70644:function(e,t,r){"use strict";e.exports=r(94047)},90005:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=s(e,i(r)))}return e}function i(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=s(t,r));return t}function s(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()}}]);