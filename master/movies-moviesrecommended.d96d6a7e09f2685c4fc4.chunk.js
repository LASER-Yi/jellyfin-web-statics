(self.webpackChunk=self.webpackChunk||[]).push([[7578],{12341:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return P}}),a(72410),a(15610),a(52077),a(25901),a(92189),a(91047),a(5769),a(61013),a(63238),a(61418),a(17460),a(14078),a(32081),a(27471);var n=a(65009),r=a.n(n),i=a(30325),o=a(58517),s=a(60934),l=a(71487),c=a(67345),d=a(61570),u=a(72365),m=a(98301),f=a(48957),v=a(94994),y=a(60635),p=a(81643);function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function b(){return!i.Z.desktop}function g(){return b()?"overflowPortrait":"portrait"}function I(e){var t="",a="";switch(e.RecommendationType){case"SimilarToRecentlyPlayed":a=v.ZP.translate("RecommendationBecauseYouWatched",e.BaselineItemName);break;case"SimilarToLikedItem":a=v.ZP.translate("RecommendationBecauseYouLike",e.BaselineItemName);break;case"HasDirectorFromRecentlyPlayed":case"HasLikedDirector":a=v.ZP.translate("RecommendationDirectedBy",e.BaselineItemName);break;case"HasActorFromRecentlyPlayed":case"HasLikedActor":a=v.ZP.translate("RecommendationStarring",e.BaselineItemName)}return t+='<div class="verticalSection">',t+='<h2 class="sectionTitle sectionTitle-cards padded-left">'+r()(a)+"</h2>",b()?(t+='<div is="emby-scroller" class="padded-top-focusscale padded-bottom-focusscale" data-mousewheel="false" data-centerfocus="true">',t+='<div is="emby-itemscontainer" class="itemsContainer scrollSlider focuscontainer-x">'):t+='<div is="emby-itemscontainer" class="itemsContainer focuscontainer-x padded-left padded-right vertical-wrap">',t+=d.default.getCardsHtml(e.Items,{shape:g(),scalable:!0,overlayPlayButton:!0,allowBottomPadding:!0,showTitle:!0,showYear:!0,centerText:!0}),b()&&(t+="</div>"),(t+="</div>")+"</div>"}function T(e){Promise.resolve().then(a.bind(a,87680)).then((function(t){t.default.autoFocus(e)}))}function S(){return[{name:v.ZP.translate("Movies")},{name:v.ZP.translate("Suggestions")},{name:v.ZP.translate("Trailers")},{name:v.ZP.translate("Favorites")},{name:v.ZP.translate("Collections")},{name:v.ZP.translate("Genres")}]}function P(e,t){var n=this;function r(t){var a,n;a=e,n=parseInt(t.detail.selectedTabIndex),C(a,n,(function(e){-1==R.indexOf(n)&&e.preRender&&e.preRender()}))}function P(t){var a,n=parseInt(t.detail.selectedTabIndex);B=a=n,C(e,a,(function(e){-1==R.indexOf(a)&&(R.push(a),e.renderTab())}))}function w(){return e.querySelectorAll(".pageTabContent")}var C=function(r,i,o){var s="";switch(i){case 0:case 3:s="movies";break;case 1:s="moviesrecommended.js";break;case 2:s="movietrailers";break;case 4:s="moviecollections";break;case 5:s="moviegenres"}a(69576)("./".concat(s)).then((function(a){var r,s=a.default;i===k&&(r=e.querySelector(".pageTabContent[data-index='"+i+"']"),n.tabContent=r);var l=Z[i];l||(r=e.querySelector(".pageTabContent[data-index='"+i+"']"),l=i===k?n:0==i||3==i?new s(e,t,r,{mode:i?"favorites":"movies"}):new s(e,t,r),Z[i]=l,l.initTab&&l.initTab()),o(l)}))};function L(e,t){t.NowPlayingItem&&"Video"==t.NowPlayingItem.MediaType&&(R=[],c.getTabsElement().triggerTabChange())}function A(e){"search"===e.detail.command&&(e.preventDefault(),y.ZP.navigate("search.html?collectionType=movies&parentId="+t.topParentId))}var B=parseInt(t.tab||function(e){switch(s.get("landing-"+e)){case"suggestions":return 1;case"favorites":return 3;case"collections":return 4;case"genres":return 5;default:return 0}}(t.topParentId)),k=1;this.initTab=function(){!function(e,t){var a,n,r=function(e,t){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(e){if("string"==typeof e)return h(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?h(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==a.return||a.return()}finally{if(s)throw i}}}}(t.querySelectorAll(".itemsContainer"));try{for(r.s();!(a=r.n()).done;)n=a.value,b()?(n.classList.add("hiddenScrollX"),i.Z.tv&&(n.classList.add("smoothScrollX"),n.classList.add("padded-top-focusscale"),n.classList.add("padded-bottom-focusscale")),n.classList.add("scrollX"),n.classList.remove("vertical-wrap")):(n.classList.remove("hiddenScrollX"),n.classList.remove("smoothScrollX"),n.classList.remove("scrollX"),n.classList.add("vertical-wrap"))}catch(e){r.e(e)}finally{r.f()}}(0,e.querySelector(".pageTabContent[data-index='"+k+"']"))},this.renderTab=function(){var a=e.querySelector(".pageTabContent[data-index='"+k+"']");!function(e,t,a){var n=t.topParentId,r=ApiClient.getCurrentUserId();!function(e,t,a){var n={SortBy:"DatePlayed",SortOrder:"Descending",IncludeItemTypes:"Movie",Filters:"IsResumable",Limit:u.ZP.getWindowSize().innerWidth>=1600?5:3,Recursive:!0,Fields:"PrimaryImageAspectRatio,MediaSourceCount,BasicSyncInfo",CollapseBoxSetItems:!1,ParentId:a,ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb",EnableTotalRecordCount:!1};ApiClient.getItems(t,n).then((function(t){t.Items.length?e.querySelector("#resumableSection").classList.remove("hide"):e.querySelector("#resumableSection").classList.add("hide");var a=!b(),n=e.querySelector("#resumableItems");d.default.buildCards(t.Items,{itemsContainer:n,preferThumb:!0,shape:b()?"overflowBackdrop":"backdrop",scalable:!0,overlayPlayButton:!0,allowBottomPadding:a,cardLayout:!1,showTitle:!0,showYear:!0,centerText:!0}),T(e)}))}(a,r,n),function(e,t,a){var n={IncludeItemTypes:"Movie",Limit:18,Fields:"PrimaryImageAspectRatio,MediaSourceCount,BasicSyncInfo",ParentId:a,ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb",EnableTotalRecordCount:!1};ApiClient.getJSON(ApiClient.getUrl("Users/"+t+"/Items/Latest",n)).then((function(t){var a=!b(),n=e.querySelector("#recentlyAddedItems");d.default.buildCards(t,{itemsContainer:n,shape:g(),scalable:!0,overlayPlayButton:!0,allowBottomPadding:a,showTitle:!0,showYear:!0,centerText:!0}),T(e)}))}(a,r,n),function(e,t){var a=u.ZP.getWindowSize().innerWidth,n=5;a>=1600?n=8:a>=1200&&(n=6);var r=ApiClient.getUrl("Movies/Recommendations",{userId:t,categoryLimit:6,ItemLimit:n,Fields:"PrimaryImageAspectRatio,MediaSourceCount,BasicSyncInfo",ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb"});ApiClient.getJSON(r).then((function(t){if(!t.length)return e.querySelector(".noItemsMessage").classList.remove("hide"),void(e.querySelector(".recommendations").innerHTML="");var a=t.map(I).join("");e.querySelector(".noItemsMessage").classList.add("hide");var n=e.querySelector(".recommendations");n.innerHTML=a,m.default.lazyChildren(n),T(e)}))}(a,r)}(0,t,a)};var Z=[],R=[];e.addEventListener("viewshow",(function(){if(c.setTabs(e,B,S,w,r,P),!e.getAttribute("data-title")){var a=t.topParentId;a?ApiClient.getItem(ApiClient.getCurrentUserId(),a).then((function(t){e.setAttribute("data-title",t.Name),l.Z.setTitle(t.Name)})):(e.setAttribute("data-title",v.ZP.translate("Movies")),l.Z.setTitle(v.ZP.translate("Movies")))}p.Z.on(f.O,"playbackstop",L),o.default.on(window,A)})),e.addEventListener("viewbeforehide",(function(){o.default.off(window,A)}));for(var x=0,M=Z;x<M.length;x++){var q=M[x];q.destroy&&q.destroy()}}a(24432),a(82427),a(21694),a(38228)},69576:function(e,t,a){var n={"./moviecollections":[90330,3873,2831],"./moviecollections.js":[90330,3873,2831],"./moviegenres":[6452,1575],"./moviegenres.js":[6452,1575],"./movies":[35508,3873,7488],"./movies.html":[72839,7988],"./movies.js":[35508,3873,7488],"./moviesrecommended":[12341],"./moviesrecommended.js":[12341],"./movietrailers":[14857,3873,3479],"./movietrailers.js":[14857,3873,3479]};function r(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return Promise.all(t.slice(1).map(a.e)).then((function(){return a(r)}))}r.keys=function(){return Object.keys(n)},r.id=69576,e.exports=r}}]);