"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[42831,83264,15439],{90330:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}}),n(5769),n(63238),n(61418),n(17460),n(14078),n(72410),n(15610),n(52077),n(25901),n(92189),n(91047);var r=n(28540),i=n(92609),a=n(98301),s=n(63873),o=n(61570),l=n(60934),d=n(94994);function u(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,o=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){o=!0,a=e},f:function(){try{s||null==n.return||n.return()}finally{if(o)throw a}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(e,t,c){var h=this;function f(){var e=v(),n=g[e];return n||(n=g[e]={query:{SortBy:"SortName",SortOrder:"Ascending",IncludeItemTypes:"BoxSet",Recursive:!0,Fields:"PrimaryImageAspectRatio,SortName",ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb",StartIndex:0},view:l.getSavedView(e)||"Poster"},l.libraryPageSize()>0&&(n.query.Limit=l.libraryPageSize()),n.query.ParentId=t.topParentId,l.loadQuerySettings(e,n.query)),n}function m(){return f().query}function v(){return t.topParentId+"-moviecollections"}var y=function(){var e=h.getCurrentViewStyle(),t=c.querySelector(".itemsContainer");"List"==e?(t.classList.add("vertical-list"),t.classList.remove("vertical-wrap")):(t.classList.remove("vertical-list"),t.classList.add("vertical-wrap")),t.innerHTML=""},b=function e(t){r.ZP.show(),p=!0;var f=m();ApiClient.getItems(ApiClient.getCurrentUserId(),f).then((function(m){function y(){p||(l.libraryPageSize()>0&&(f.StartIndex+=f.Limit),e(c))}function b(){p||(l.libraryPageSize()>0&&(f.StartIndex=Math.max(0,f.StartIndex-f.Limit)),e(c))}var g;window.scrollTo(0,0);var S=i.ZP.getQueryPagingHtml({startIndex:f.StartIndex,limit:f.Limit,totalRecordCount:m.TotalRecordCount,showLimit:!1,updatePageSizeSetting:!1,addLayoutButton:!1,sortButton:!1,filterButton:!1}),P=h.getCurrentViewStyle();g="Thumb"==P?o.default.getCardsHtml({items:m.Items,shape:"backdrop",preferThumb:!0,context:"movies",overlayPlayButton:!0,centerText:!0,showTitle:!0}):"ThumbCard"==P?o.default.getCardsHtml({items:m.Items,shape:"backdrop",preferThumb:!0,context:"movies",lazy:!0,cardLayout:!0,showTitle:!0}):"Banner"==P?o.default.getCardsHtml({items:m.Items,shape:"banner",preferBanner:!0,context:"movies",lazy:!0}):"List"==P?s.Z.getListViewHtml({items:m.Items,context:"movies",sortBy:f.SortBy}):"PosterCard"==P?o.default.getCardsHtml({items:m.Items,shape:"auto",context:"movies",showTitle:!0,centerText:!1,cardLayout:!0}):o.default.getCardsHtml({items:m.Items,shape:"auto",context:"movies",centerText:!0,overlayPlayButton:!0,showTitle:!0});var I,w=c.querySelectorAll(".paging"),C=u(w);try{for(C.s();!(I=C.n()).done;)I.value.innerHTML=S}catch(e){C.e(e)}finally{C.f()}var L,T=u(w=c.querySelectorAll(".btnNextPage"));try{for(T.s();!(L=T.n()).done;)L.value.addEventListener("click",y)}catch(e){T.e(e)}finally{T.f()}var x,k=u(w=c.querySelectorAll(".btnPreviousPage"));try{for(k.s();!(x=k.n()).done;)x.value.addEventListener("click",b)}catch(e){k.e(e)}finally{k.f()}m.Items.length||(g="",g+='<div class="noItemsMessage centerMessage">',g+="<h1>"+d.ZP.translate("MessageNothingHere")+"</h1>",g+="<p>"+d.ZP.translate("MessageNoCollectionsAvailable")+"</p>",g+="</div>");var A=c.querySelector(".itemsContainer");A.innerHTML=g,a.default.lazyChildren(A),l.saveQuerySettings(v(),f),r.ZP.hide(),p=!1,Promise.resolve().then(n.bind(n,87680)).then((function(e){e.default.autoFocus(t)}))}))},g={},p=!1;this.getCurrentViewStyle=function(){return f().view},function(e){e.querySelector(".btnSort").addEventListener("click",(function(t){i.ZP.showSortMenu({items:[{name:d.ZP.translate("Name"),id:"SortName"},{name:d.ZP.translate("OptionImdbRating"),id:"CommunityRating,SortName"},{name:d.ZP.translate("OptionDateAdded"),id:"DateCreated,SortName"},{name:d.ZP.translate("OptionParentalRating"),id:"OfficialRating,SortName"},{name:d.ZP.translate("OptionReleaseDate"),id:"PremiereDate,SortName"}],callback:function(){m().StartIndex=0,b(e)},query:m(),button:t.target})}));var t=e.querySelector(".btnSelectView");t.addEventListener("click",(function(e){i.ZP.showLayoutMenu(e.target,h.getCurrentViewStyle(),"List,Poster,PosterCard,Thumb,ThumbCard".split(","))})),t.addEventListener("layoutchange",(function(t){var n=t.detail.viewStyle;f().view=n,l.saveViewSetting(v(),n),m().StartIndex=0,y(),b(e)})),e.querySelector(".btnNewCollection").addEventListener("click",(function(){n.e(19449).then(n.bind(n,19449)).then((function(e){var t=e.default,n=ApiClient.serverInfo().Id;(new t).show({items:[],serverId:n})}))}))}(c),y(),this.renderTab=function(){b(c)}}n(82427)},82427:function(e,t,n){n(5769),n(63238),n(61418),n(17460),n(14078),n(27471),n(32081);var r=n(61008),i=n(58517),a=n(48957),s=n(98301),o=n(30325),l=n(57366),d=n(72365),u=n(28540),c=n(34643),h=n(44038),f=n(81643),m=(n(67752),n(18613)),v=n(28172),y=Object.create(HTMLDivElement.prototype);function b(e){var t=this,n=t.multiSelect;!1!==(null==n?void 0:n.onContainerClick.call(t,e))&&r.ZP.onClick.call(t,e)}function g(e){return e.preventDefault(),e.stopPropagation(),!1}function p(e){var t=e.target,n=d.ZP.parentWithAttribute(t,"data-id");if(null!=n&&n.getAttribute("data-serverid"))return i.default.handleCommand("menu",{sourceElement:n}),e.preventDefault(),e.stopPropagation(),!1}function S(e,t,r){var i=this;Promise.all([n.e(61570),n.e(83264)]).then(n.bind(n,61570)).then((function(e){e.onUserDataChanged(r,i)}));var a=P(i);-1===a.indexOf("markfavorite")&&-1===a.indexOf("markplayed")||i.notifyRefreshNeeded()}function P(e){var t=e.getAttribute("data-monitor");return t?t.split(","):[]}function I(e,t,r){var i=this;if(-1===P(i).indexOf("timers")){var a=r.ProgramId,s=r.Id;Promise.all([n.e(61570),n.e(83264)]).then(n.bind(n,61570)).then((function(e){e.onTimerCreated(a,s,i)}))}else i.notifyRefreshNeeded()}function w(){-1!==P(this).indexOf("seriestimers")&&this.notifyRefreshNeeded()}function C(e,t,r){var i=this;-1===P(i).indexOf("timers")?Promise.all([n.e(61570),n.e(83264)]).then(n.bind(n,61570)).then((function(e){e.onTimerCancelled(r.Id,i)})):i.notifyRefreshNeeded()}function L(e,t,r){var i=this;-1===P(i).indexOf("seriestimers")?Promise.all([n.e(61570),n.e(83264)]).then(n.bind(n,61570)).then((function(e){e.onSeriesTimerCancelled(r.Id,i)})):i.notifyRefreshNeeded()}function T(e,t,n){var r=this,i=P(r);if(-1===i.indexOf("seriestimers")&&-1===i.indexOf("timers")){var a=n.ItemsAdded||[],s=n.ItemsRemoved||[];if(a.length||s.length){var o=r.getAttribute("data-parentid");if(o){var l=n.FoldersAddedTo||[],d=n.FoldersRemovedFrom||[],u=n.CollectionFolders||[];if(-1===l.indexOf(o)&&-1===d.indexOf(o)&&-1===u.indexOf(o))return}r.notifyRefreshNeeded()}}}function x(e,t){var n,r=this,i=t.state,a=P(r);if(i.NowPlayingItem&&"Video"===i.NowPlayingItem.MediaType){if(-1!==a.indexOf("videoplayback"))return void r.notifyRefreshNeeded(!0)}else if("Audio"===(null===(n=i.NowPlayingItem)||void 0===n?void 0:n.MediaType)&&-1!==a.indexOf("audioplayback"))return void r.notifyRefreshNeeded(!0)}function k(e,t,n,r){var i=n.bind(e);r=r||h.default,f.Z.on(r,t,i),e["event_"+t]=i}function A(e,t,n){var r=e["event_"+t];r&&(n=n||h.default,f.Z.off(n,t,r),e["event_"+t]=null)}function O(e,t){e.refreshInterval&&(clearInterval(e.refreshInterval),e.refreshInterval=null,t||(e.refreshIntervalEndTime=null))}function Z(e,t){O(e),t||(t=parseInt(e.getAttribute("data-refreshinterval")||"0",10)),t&&(e.refreshInterval=setInterval(e.notifyRefreshNeeded.bind(e),t),e.refreshIntervalEndTime=(new Date).getTime()+t)}function R(e){var t=e.Items||e,n=this.parentContainer;n&&(t.length?n.classList.remove("hide"):n.classList.add("hide"));var r,i,a=document.activeElement;this.contains(a)&&(i=!0,r=a.getAttribute("data-id")),this.innerHTML=this.getItemsHtml(t),s.default.lazyChildren(this),i&&function(e,t){if(t){var n=e.querySelector('[data-id="'+t+'"]');if(n)try{return void c.Z.focus(n)}catch(e){console.error(e)}}c.Z.autoFocus(e)}(this,r),Z(this),this.afterRefresh&&this.afterRefresh(e)}y.enableMultiSelect=function(e){var t=this.multiSelect;if(e){if(!t){var r=this;Promise.all([n.e(52943),n.e(9245)]).then(n.bind(n,52943)).then((function(e){var t=e.default;r.multiSelect=new t({container:r,bindOnClick:!1})}))}}else t&&(t.destroy(),this.multiSelect=null)},y.enableDragReordering=function(e){var t=this.sortable;if(e){if(!t){var n=this;n.sortable=new v.ZP(n,{draggable:".listItem",handle:".listViewDragHandle",onEnd:function(e){return function(e,t){var n=e.item,r=e.newIndex,i=n.getAttribute("data-playlistitemid"),a=n.getAttribute("data-playlistid");if(a){var s=n.getAttribute("data-serverid"),o=m.Z.getApiClient(s);u.ZP.show(),o.ajax({url:o.getUrl("Playlists/"+a+"/Items/"+i+"/Move/"+r),type:"POST"}).then((function(){u.ZP.hide()}),(function(){u.ZP.hide(),t.refreshItems()}))}else{var l=e.oldIndex;n.dispatchEvent(new CustomEvent("itemdrop",{detail:{oldIndex:l,newIndex:r,playlistItemId:i},bubbles:!0,cancelable:!1}))}}(e,n)}})}}else t&&(t.destroy(),this.sortable=null)},y.createdCallback=function(){this.classList.add("itemsContainer")},y.attachedCallback=function(){this.addEventListener("click",b),l.Z.touch?this.addEventListener("contextmenu",g):"false"!==this.getAttribute("data-contextmenu")&&this.addEventListener("contextmenu",p),(o.Z.desktop||o.Z.mobile&&"false"!==this.getAttribute("data-multiselect"))&&this.enableMultiSelect(!0),o.Z.tv&&this.classList.add("itemsContainer-tv"),r.ZP.on(this,{click:!1}),k(this,"UserDataChanged",S),k(this,"TimerCreated",I),k(this,"SeriesTimerCreated",w),k(this,"TimerCancelled",C),k(this,"SeriesTimerCancelled",L),k(this,"LibraryChanged",T),k(this,"playbackstop",x,a.O),"true"===this.getAttribute("data-dragreorder")&&this.enableDragReordering(!0)},y.detachedCallback=function(){O(this),this.enableMultiSelect(!1),this.enableDragReordering(!1),this.removeEventListener("click",b),this.removeEventListener("contextmenu",p),this.removeEventListener("contextmenu",g),r.ZP.off(this,{click:!1}),A(this,"UserDataChanged"),A(this,"TimerCreated"),A(this,"SeriesTimerCreated"),A(this,"TimerCancelled"),A(this,"SeriesTimerCancelled"),A(this,"LibraryChanged"),A(this,"playbackstop",a.O),this.fetchData=null,this.getItemsHtml=null,this.parentContainer=null},y.pause=function(){O(this,!0),this.paused=!0},y.resume=function(e){this.paused=!1;var t=this.refreshIntervalEndTime;if(t){var n=t-(new Date).getTime();n>0&&!this.needsRefresh?Z(this,n):(this.needsRefresh=!0,this.refreshIntervalEndTime=null)}return this.needsRefresh||null!=e&&e.refresh?this.refreshItems():Promise.resolve()},y.refreshItems=function(){return this.fetchData?this.paused?(this.needsRefresh=!0,Promise.resolve()):(this.needsRefresh=!1,this.fetchData().then(R.bind(this))):Promise.resolve()},y.notifyRefreshNeeded=function(e){if(this.paused)this.needsRefresh=!0;else{var t=this.refreshTimeout;t&&clearTimeout(t),!0===e?this.refreshItems():this.refreshTimeout=setTimeout(this.refreshItems.bind(this),1e4)}},document.registerElement("emby-itemscontainer",{prototype:y,extends:"div"})},92609:function(e,t,n){n(25901),n(92189),n(91047),n(72410),n(15610),n(5769),n(61013),n(63238),n(61418),n(17460),n(14078),n(52077),n(911);var r=n(94994);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var a={showLayoutMenu:function(e,t,i){var a=!0;i||(a=!1,i=(i=e.getAttribute("data-layouts"))?i.split(","):["List","Poster","PosterCard","Thumb","ThumbCard"]);var s=i.map((function(e){return{name:r.ZP.translate(e),id:e,selected:t==e}}));n.e(12801).then(n.bind(n,12801)).then((function(t){t.default.show({items:s,positionTo:e,callback:function(t){e.dispatchEvent(new CustomEvent("layoutchange",{detail:{viewStyle:t},bubbles:!0,cancelable:!1})),!a&&window.$&&$(e).trigger("layoutchange",[t])}})}))},getQueryPagingHtml:function(e){var t=e.startIndex,n=e.limit,i=e.totalRecordCount,a="",s=i?t+1:0,o=n?Math.min(t+n,i):i,l=n>0&&n<i;return a+='<div class="listPaging">',a+='<span style="vertical-align:middle;">',a+=r.ZP.translate("ListPaging",s,o,i),a+="</span>",(l||e.viewButton||e.filterButton||e.sortButton||e.addLayoutButton)&&(a+='<div style="display:inline-block;">',l&&(a+='<button is="paper-icon-button-light" class="btnPreviousPage autoSize" '+(t?"":"disabled")+'><span class="material-icons arrow_back" aria-hidden="true"></span></button>',a+='<button is="paper-icon-button-light" class="btnNextPage autoSize" '+(t+n>=i?"disabled":"")+'><span class="material-icons arrow_forward" aria-hidden="true"></span></button>'),e.addLayoutButton&&(a+='<button is="paper-icon-button-light" title="'+r.ZP.translate("ButtonSelectView")+'" class="btnChangeLayout autoSize" data-layouts="'+(e.layouts||"")+'" onclick="LibraryBrowser.showLayoutMenu(this, \''+(e.currentLayout||"")+'\');"><span class="material-icons view_comfy" aria-hidden="true"></span></button>'),e.sortButton&&(a+='<button is="paper-icon-button-light" class="btnSort autoSize" title="'+r.ZP.translate("Sort")+'"><span class="material-icons sort_by_alpha" aria-hidden="true"></span></button>'),e.filterButton&&(a+='<button is="paper-icon-button-light" class="btnFilter autoSize" title="'+r.ZP.translate("Filter")+'"><span class="material-icons filter_list" aria-hidden="true"></span></button>'),a+="</div>"),a+"</div>"},showSortMenu:function(e){Promise.all([Promise.resolve().then(n.bind(n,93355)),n.e(92144).then(n.bind(n,92144))]).then((function(t){var n=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a,s,o=[],l=!0,d=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=a.call(n)).done)&&(o.push(r.value),o.length!==t);l=!0);}catch(e){d=!0,i=e}finally{try{if(!l&&null!=n.return&&(s=n.return(),Object(s)!==s))return}finally{if(d)throw i}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t,1)[0].default;function a(){var t=this.value;if(this.checked){var n=e.query.SortBy!=t;e.query.SortBy=t.replace("_",","),e.query.StartIndex=0,e.callback&&n&&e.callback()}}function s(){var t=this.value;if(this.checked){var n=e.query.SortOrder!=t;e.query.SortOrder=t,e.query.StartIndex=0,e.callback&&n&&e.callback()}}var o=n.createDialog({removeOnClose:!0,modal:!1,entryAnimationDuration:160,exitAnimationDuration:200});o.classList.add("ui-body-a"),o.classList.add("background-theme-a"),o.classList.add("formDialog");var l,d,u,c="";for(c+='<div style="margin:0;padding:1.25em 1.5em 1.5em;">',c+='<h2 style="margin:0 0 .5em;">',c+=r.ZP.translate("HeaderSortBy"),c+="</h2>",c+="<div>",l=0,d=e.items.length;l<d;l++){var h=e.items[l],f=h.id.replace(",","_");u=(e.query.SortBy||"").replace(",","_")==f?" checked":"",c+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortBy" data-id="'+h.id+'" value="'+f+'" class="menuSortBy" '+u+" /><span>"+h.name+"</span></label>"}c+="</div>",c+='<h2 style="margin: 1em 0 .5em;">',c+=r.ZP.translate("HeaderSortOrder"),c+="</h2>",c+="<div>",c+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Ascending" class="menuSortOrder" '+(u="Ascending"==e.query.SortOrder?" checked":"")+" /><span>"+r.ZP.translate("Ascending")+"</span></label>",c+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Descending" class="menuSortOrder" '+(u="Descending"==e.query.SortOrder?" checked":"")+" /><span>"+r.ZP.translate("Descending")+"</span></label>",c+="</div>",c+="</div>",o.innerHTML=c,n.open(o);var m=o.querySelectorAll(".menuSortBy");for(l=0,d=m.length;l<d;l++)m[l].addEventListener("change",a);var v=o.querySelectorAll(".menuSortOrder");for(l=0,d=v.length;l<d;l++)v[l].addEventListener("change",s)}))}};window.LibraryBrowser=a,t.ZP=a}}]);