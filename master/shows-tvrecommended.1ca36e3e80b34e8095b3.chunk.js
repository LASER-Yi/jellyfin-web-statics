(self.webpackChunk=self.webpackChunk||[]).push([[5240],{56612:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return I}}),a(5769),a(32081),a(63238),a(61418),a(17460),a(14078),a(27471);var n=a(58517),r=a(71487),s=a(30325),o=a(28540),i=a(72365),d=a(60934),l=a(61570),c=a(48957),u=a(67345),m=a(94994),p=(a(82427),a(38228),a(60635)),f=a(81643),h=a(87680);function v(){return[{name:m.ZP.translate("Shows")},{name:m.ZP.translate("Suggestions")},{name:m.ZP.translate("TabUpcoming")},{name:m.ZP.translate("Genres")},{name:m.ZP.translate("TabNetworks")},{name:m.ZP.translate("Episodes")}]}function g(){return!s.Z.desktop}function I(e,t){function I(e){var t;T(0,t=parseInt(e.detail.selectedTabIndex),(function(e){-1==x.indexOf(t)&&e.preRender&&e.preRender()}))}function b(e){var t,a=parseInt(e.detail.selectedTabIndex);L=t=a,T(0,t,(function(e){-1==x.indexOf(t)&&(x.push(t),e.renderTab())}))}function y(){return e.querySelectorAll(".pageTabContent")}function T(n,r,s){var o;switch(r){case 0:o="tvshows";break;case 1:o="tvrecommended";break;case 2:o="tvupcoming";break;case 3:o="tvgenres";break;case 4:o="tvstudios";break;case 5:o="episodes"}a(73210)("./".concat(o)).then((function(a){var n,o=a.default;1===r&&(n=e.querySelector(".pageTabContent[data-index='"+r+"']"),S.tabContent=n);var i=k[r];i||(n=e.querySelector(".pageTabContent[data-index='"+r+"']"),i=1===r?S:new o(e,t,n),k[r]=i,i.initTab&&i.initTab()),s(i)}))}function w(e,t){t.NowPlayingItem&&"Video"==t.NowPlayingItem.MediaType&&(x=[],u.getTabsElement().triggerTabChange())}function C(e,t){var a=t;"UserDataChanged"===a.MessageType&&a.Data.UserId==ApiClient.getCurrentUserId()&&(x=[])}function P(e){"search"===e.detail.command&&(e.preventDefault(),p.ZP.navigate("search.html?collectionType=tv&parentId="+t.topParentId))}var S=this,L=parseInt(t.tab||function(e){switch(d.get("landing-"+e)){case"suggestions":return 1;case"upcoming":return 2;case"genres":return 3;case"networks":return 4;case"episodes":return 5;default:return 0}}(t.topParentId));S.initTab=function(){!function(e,t){for(var a,n=t.querySelectorAll(".itemsContainer"),r=0,o=n.length;r<o;r++)a=n[r],g()?(a.classList.add("hiddenScrollX"),s.Z.tv&&a.classList.add("smoothScrollX"),a.classList.add("scrollX"),a.classList.remove("vertical-wrap")):(a.classList.remove("hiddenScrollX"),a.classList.remove("smoothScrollX"),a.classList.remove("scrollX"),a.classList.add("vertical-wrap"))}(0,e.querySelector(".pageTabContent[data-index='1']"))},S.renderTab=function(){var a=e.querySelector(".pageTabContent[data-index='1']");!function(e,t,a){var n=t.topParentId,s=ApiClient.getCurrentUserId();console.debug("loadSuggestionsTab"),function(e,t,a){var n={SortBy:"DatePlayed",SortOrder:"Descending",IncludeItemTypes:"Episode",Filters:"IsResumable",Limit:i.ZP.getWindowSize().innerWidth>=1600?5:3,Recursive:!0,Fields:"PrimaryImageAspectRatio,MediaSourceCount,BasicSyncInfo",CollapseBoxSetItems:!1,ParentId:a,ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb",EnableTotalRecordCount:!1};ApiClient.getItems(t,n).then((function(t){t.Items.length?e.querySelector("#resumableSection").classList.remove("hide"):e.querySelector("#resumableSection").classList.add("hide");var a=!g(),n=e.querySelector("#resumableItems");l.default.buildCards(t.Items,{itemsContainer:n,preferThumb:!0,inheritThumb:!d.useEpisodeImagesInNextUpAndResume(),shape:g()?"overflowBackdrop":"backdrop",scalable:!0,overlayPlayButton:!0,allowBottomPadding:a,cardLayout:!1,showTitle:!0,showYear:!0,centerText:!0}),o.ZP.hide(),h.default.autoFocus(e)}))}(a,s,n),function(e,t,a){var n={userId:t,IncludeItemTypes:"Episode",Limit:30,Fields:"PrimaryImageAspectRatio,BasicSyncInfo",ParentId:a,ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Thumb"};ApiClient.getLatestItems(n).then((function(t){var a=e.querySelector("#latestItemsSection"),n=!g(),r=a.querySelector("#latestEpisodesItems");l.default.buildCards(t,{parentContainer:a,itemsContainer:r,items:t,shape:"backdrop",preferThumb:!0,showTitle:!0,showSeriesYear:!0,showParentTitle:!0,overlayText:!1,cardLayout:!1,allowBottomPadding:n,showUnplayedIndicator:!1,showChildCountIndicator:!0,centerText:!0,lazy:!0,overlayPlayButton:!0,lines:2}),o.ZP.hide(),h.default.autoFocus(e)}))}(a,s,n),function(e,t,a){var n={userId:t,Limit:24,Fields:"PrimaryImageAspectRatio,DateCreated,BasicSyncInfo,MediaSourceCount",ParentId:a,ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Thumb",EnableTotalRecordCount:!1};n.ParentId=r.Z.getTopParentId(),ApiClient.getNextUpEpisodes(n).then((function(t){t.Items.length?e.querySelector(".noNextUpItems").classList.add("hide"):e.querySelector(".noNextUpItems").classList.remove("hide");var a=e.querySelector("#nextUpItemsSection"),n=a.querySelector("#nextUpItems");l.default.buildCards(t.Items,{parentContainer:a,itemsContainer:n,preferThumb:!0,inheritThumb:!d.useEpisodeImagesInNextUpAndResume(),shape:"backdrop",scalable:!0,showTitle:!0,showParentTitle:!0,overlayText:!1,centerText:!0,overlayPlayButton:!0,cardLayout:!1}),o.ZP.hide(),h.default.autoFocus(e)}))}(a,s,n)}(0,t,a)};var k=[],x=[];e.addEventListener("viewshow",(function(){if(u.setTabs(e,L,v,y,I,b),!e.getAttribute("data-title")){var a=t.topParentId;a?ApiClient.getItem(ApiClient.getCurrentUserId(),a).then((function(t){e.setAttribute("data-title",t.Name),r.Z.setTitle(t.Name)})):(e.setAttribute("data-title",m.ZP.translate("Shows")),r.Z.setTitle(m.ZP.translate("Shows")))}f.Z.on(c.O,"playbackstop",w),f.Z.on(ApiClient,"message",C),n.default.on(window,P)})),e.addEventListener("viewbeforehide",(function(){n.default.off(window,P),f.Z.off(c.O,"playbackstop",w),f.Z.off(ApiClient,"message",C)})),e.addEventListener("viewdestroy",(function(){k.forEach((function(e){e.destroy&&e.destroy()}))}))}},73210:function(e,t,a){var n={"./episodes":[39873,3873,3064],"./episodes.js":[39873,3873,3064],"./tvgenres":[19372,9322],"./tvgenres.js":[19372,9322],"./tvrecommended":[56612],"./tvrecommended.html":[26623,8601],"./tvrecommended.js":[56612],"./tvshows":[63648,3873,5815],"./tvshows.js":[63648,3873,5815],"./tvstudios":[9300,858],"./tvstudios.js":[9300,858],"./tvupcoming":[34968,8541],"./tvupcoming.js":[34968,8541]};function r(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return Promise.all(t.slice(1).map(a.e)).then((function(){return a(r)}))}r.keys=function(){return Object.keys(n)},r.id=73210,e.exports=r}}]);