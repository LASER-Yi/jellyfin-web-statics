"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[75311,83264,53260],{25054:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}}),n(13227),n(81414),n(37666),n(14011),n(11431);var r=n(92609),i=n(81038),a=n(63873),s=n(28540),l=n(48957),o=n(60934),d=n(94994),u=n(60635),c=n(67561);function h(e,t,h){function f(){var e=v(),n=p[e];return n||(n=p[e]={query:{SortBy:"Album,SortName",SortOrder:"Ascending",IncludeItemTypes:"Audio",Recursive:!0,Fields:"AudioInfo,ParentId",StartIndex:0,ImageTypeLimit:1,EnableImageTypes:"Primary"}},o.libraryPageSize()>0&&(n.query.Limit=o.libraryPageSize()),n.query.ParentId=t.topParentId,o.loadQuerySettings(e,n.query)),n}function m(){return f().query}function v(){return"".concat(t.topParentId,"-songs")}function b(e){s.ZP.show(),S=!0;var t=m();ApiClient.getItems(u.default.getCurrentUserId(),t).then((function(l){function d(){S||(o.libraryPageSize()>0&&(t.StartIndex+=t.Limit),b(h))}function u(){S||(o.libraryPageSize()>0&&(t.StartIndex=Math.max(0,t.StartIndex-t.Limit)),b(h))}window.scrollTo(0,0);for(var c=r.ZP.getQueryPagingHtml({startIndex:t.StartIndex,limit:t.Limit,totalRecordCount:l.TotalRecordCount,showLimit:!1,updatePageSizeSetting:!1,addLayoutButton:!1,sortButton:!1,filterButton:!1}),f=a.Z.getListViewHtml({items:l.Items,action:"playallfromhere",smallIcon:!0,artist:!0,addToListButton:!0}),m=h.querySelectorAll(".paging"),y=0,g=m.length;y<g;y++)m[y].innerHTML=c;for(var p=0,P=(m=h.querySelectorAll(".btnNextPage")).length;p<P;p++)m[p].addEventListener("click",d);for(var I=0,A=(m=h.querySelectorAll(".btnPreviousPage")).length;I<A;I++)m[I].addEventListener("click",u);var C=h.querySelector(".itemsContainer");C.innerHTML=f,i.default.lazyChildren(C),o.saveQuerySettings(v(),t),h.querySelector(".btnShuffle").classList.toggle("hide",l.TotalRecordCount<1),s.ZP.hide(),S=!1,Promise.resolve().then(n.bind(n,87680)).then((function(t){t.default.autoFocus(e)}))}))}var y,g=this,p={},S=!1;g.showFilterMenu=function(){n.e(3751).then(n.bind(n,3751)).then((function(e){var t=new(0,e.default)({query:m(),mode:"songs",serverId:ApiClient.serverId()});c.Z.on(t,"filterchange",(function(){m().StartIndex=0,b()})),t.show()}))},g.getCurrentViewStyle=function(){return f().view},(y=h).querySelector(".btnFilter").addEventListener("click",(function(){g.showFilterMenu()})),y.querySelector(".btnSort").addEventListener("click",(function(e){r.ZP.showSortMenu({items:[{name:d.ZP.translate("OptionTrackName"),id:"Name"},{name:d.ZP.translate("Album"),id:"Album,SortName"},{name:d.ZP.translate("AlbumArtist"),id:"AlbumArtist,Album,SortName"},{name:d.ZP.translate("Artist"),id:"Artist,Album,SortName"},{name:d.ZP.translate("OptionDateAdded"),id:"DateCreated,SortName"},{name:d.ZP.translate("OptionDatePlayed"),id:"DatePlayed,SortName"},{name:d.ZP.translate("OptionPlayCount"),id:"PlayCount,SortName"},{name:d.ZP.translate("OptionReleaseDate"),id:"PremiereDate,AlbumArtist,Album,SortName"},{name:d.ZP.translate("Runtime"),id:"Runtime,AlbumArtist,Album,SortName"},{name:d.ZP.translate("OptionRandom"),id:"Random,SortName"}],callback:function(){m().StartIndex=0,b()},query:m(),button:e.target})})),y.querySelector(".btnShuffle").addEventListener("click",(function(){ApiClient.getItem(ApiClient.getCurrentUserId(),t.topParentId).then((function(e){l.O.shuffle(e)}))})),g.renderTab=function(){b(h)}}n(82427)},82427:function(e,t,n){n(13227),n(81414),n(37666),n(14011),n(11431),n(44901),n(54112);var r=n(61008),i=n(58517),a=n(48957),s=n(81038),l=n(30325),o=n(57366),d=n(72365),u=n(28540),c=n(34643),h=n(44038),f=n(67561),m=(n(67752),n(18613)),v=n(28172),b=Object.create(HTMLDivElement.prototype);function y(e){var t=this,n=t.multiSelect;!1!==(null==n?void 0:n.onContainerClick.call(t,e))&&r.ZP.onClick.call(t,e)}function g(e){return e.preventDefault(),e.stopPropagation(),!1}function p(e){var t=e.target,n=d.ZP.parentWithAttribute(t,"data-id");if(null!=n&&n.getAttribute("data-serverid"))return i.default.handleCommand("menu",{sourceElement:n}),e.preventDefault(),e.stopPropagation(),!1}function S(e,t,r){var i=this;Promise.all([n.e(61570),n.e(83264)]).then(n.bind(n,61570)).then((function(e){e.onUserDataChanged(r,i)}));var a=P(i);-1===a.indexOf("markfavorite")&&-1===a.indexOf("markplayed")||i.notifyRefreshNeeded()}function P(e){var t=e.getAttribute("data-monitor");return t?t.split(","):[]}function I(e,t,r){var i=this;if(-1===P(i).indexOf("timers")){var a=r.ProgramId,s=r.Id;Promise.all([n.e(61570),n.e(83264)]).then(n.bind(n,61570)).then((function(e){e.onTimerCreated(a,s,i)}))}else i.notifyRefreshNeeded()}function A(){-1!==P(this).indexOf("seriestimers")&&this.notifyRefreshNeeded()}function C(e,t,r){var i=this;-1===P(i).indexOf("timers")?Promise.all([n.e(61570),n.e(83264)]).then(n.bind(n,61570)).then((function(e){e.onTimerCancelled(r.Id,i)})):i.notifyRefreshNeeded()}function w(e,t,r){var i=this;-1===P(i).indexOf("seriestimers")?Promise.all([n.e(61570),n.e(83264)]).then(n.bind(n,61570)).then((function(e){e.onSeriesTimerCancelled(r.Id,i)})):i.notifyRefreshNeeded()}function L(e,t,n){var r=this,i=P(r);if(-1===i.indexOf("seriestimers")&&-1===i.indexOf("timers")){var a=n.ItemsAdded||[],s=n.ItemsRemoved||[];if(a.length||s.length){var l=r.getAttribute("data-parentid");if(l){var o=n.FoldersAddedTo||[],d=n.FoldersRemovedFrom||[],u=n.CollectionFolders||[];if(-1===o.indexOf(l)&&-1===d.indexOf(l)&&-1===u.indexOf(l))return}r.notifyRefreshNeeded()}}}function k(e,t){var n,r=this,i=t.state,a=P(r);if(i.NowPlayingItem&&"Video"===i.NowPlayingItem.MediaType){if(-1!==a.indexOf("videoplayback"))return void r.notifyRefreshNeeded(!0)}else if("Audio"===(null===(n=i.NowPlayingItem)||void 0===n?void 0:n.MediaType)&&-1!==a.indexOf("audioplayback"))return void r.notifyRefreshNeeded(!0)}function T(e,t,n,r){var i=n.bind(e);r=r||h.default,f.Z.on(r,t,i),e["event_"+t]=i}function Z(e,t,n){var r=e["event_"+t];r&&(n=n||h.default,f.Z.off(n,t,r),e["event_"+t]=null)}function O(e,t){e.refreshInterval&&(clearInterval(e.refreshInterval),e.refreshInterval=null,t||(e.refreshIntervalEndTime=null))}function x(e,t){O(e),t||(t=parseInt(e.getAttribute("data-refreshinterval")||"0",10)),t&&(e.refreshInterval=setInterval(e.notifyRefreshNeeded.bind(e),t),e.refreshIntervalEndTime=(new Date).getTime()+t)}function R(e){var t=e.Items||e,n=this.parentContainer;n&&(t.length?n.classList.remove("hide"):n.classList.add("hide"));var r,i,a=document.activeElement;this.contains(a)&&(i=!0,r=a.getAttribute("data-id")),this.innerHTML=this.getItemsHtml(t),s.default.lazyChildren(this),i&&function(e,t){if(t){var n=e.querySelector('[data-id="'+t+'"]');if(n)try{return void c.Z.focus(n)}catch(e){console.error(e)}}c.Z.autoFocus(e)}(this,r),x(this),this.afterRefresh&&this.afterRefresh(e)}b.enableMultiSelect=function(e){var t=this.multiSelect;if(e){if(!t){var r=this;Promise.all([n.e(52943),n.e(9245)]).then(n.bind(n,8156)).then((function(e){var t=e.default;r.multiSelect=new t({container:r,bindOnClick:!1})}))}}else t&&(t.destroy(),this.multiSelect=null)},b.enableDragReordering=function(e){var t=this.sortable;if(e){if(!t){var n=this;n.sortable=new v.ZP(n,{draggable:".listItem",handle:".listViewDragHandle",onEnd:function(e){return function(e,t){var n=e.item,r=e.newIndex,i=n.getAttribute("data-playlistitemid"),a=n.getAttribute("data-playlistid");if(a){var s=n.getAttribute("data-serverid"),l=m.Z.getApiClient(s);u.ZP.show(),l.ajax({url:l.getUrl("Playlists/"+a+"/Items/"+i+"/Move/"+r),type:"POST"}).then((function(){u.ZP.hide()}),(function(){u.ZP.hide(),t.refreshItems()}))}else{var o=e.oldIndex;n.dispatchEvent(new CustomEvent("itemdrop",{detail:{oldIndex:o,newIndex:r,playlistItemId:i},bubbles:!0,cancelable:!1}))}}(e,n)}})}}else t&&(t.destroy(),this.sortable=null)},b.createdCallback=function(){this.classList.add("itemsContainer")},b.attachedCallback=function(){this.addEventListener("click",y),o.Z.touch?this.addEventListener("contextmenu",g):"false"!==this.getAttribute("data-contextmenu")&&this.addEventListener("contextmenu",p),(l.Z.desktop||l.Z.mobile&&"false"!==this.getAttribute("data-multiselect"))&&this.enableMultiSelect(!0),l.Z.tv&&this.classList.add("itemsContainer-tv"),r.ZP.on(this,{click:!1}),T(this,"UserDataChanged",S),T(this,"TimerCreated",I),T(this,"SeriesTimerCreated",A),T(this,"TimerCancelled",C),T(this,"SeriesTimerCancelled",w),T(this,"LibraryChanged",L),T(this,"playbackstop",k,a.O),"true"===this.getAttribute("data-dragreorder")&&this.enableDragReordering(!0)},b.detachedCallback=function(){O(this),this.enableMultiSelect(!1),this.enableDragReordering(!1),this.removeEventListener("click",y),this.removeEventListener("contextmenu",p),this.removeEventListener("contextmenu",g),r.ZP.off(this,{click:!1}),Z(this,"UserDataChanged"),Z(this,"TimerCreated"),Z(this,"SeriesTimerCreated"),Z(this,"TimerCancelled"),Z(this,"SeriesTimerCancelled"),Z(this,"LibraryChanged"),Z(this,"playbackstop",a.O),this.fetchData=null,this.getItemsHtml=null,this.parentContainer=null},b.pause=function(){O(this,!0),this.paused=!0},b.resume=function(e){this.paused=!1;var t=this.refreshIntervalEndTime;if(t){var n=t-(new Date).getTime();n>0&&!this.needsRefresh?x(this,n):(this.needsRefresh=!0,this.refreshIntervalEndTime=null)}return this.needsRefresh||null!=e&&e.refresh?this.refreshItems():Promise.resolve()},b.refreshItems=function(){return this.fetchData?this.paused?(this.needsRefresh=!0,Promise.resolve()):(this.needsRefresh=!1,this.fetchData().then(R.bind(this))):Promise.resolve()},b.notifyRefreshNeeded=function(e){if(this.paused)this.needsRefresh=!0;else{var t=this.refreshTimeout;t&&clearTimeout(t),!0===e?this.refreshItems():this.refreshTimeout=setTimeout(this.refreshItems.bind(this),1e4)}},document.registerElement("emby-itemscontainer",{prototype:b,extends:"div"})},92609:function(e,t,n){n(56187),n(38690),n(89228),n(88646),n(54134),n(91270),n(13227),n(96626),n(81414),n(37666),n(14011),n(11431),n(59139),n(86028);var r=n(94994);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var a={showLayoutMenu:function(e,t,i){var a=!0;i||(a=!1,i=(i=e.getAttribute("data-layouts"))?i.split(","):["List","Poster","PosterCard","Thumb","ThumbCard"]);var s=i.map((function(e){return{name:r.ZP.translate(e),id:e,selected:t==e}}));n.e(12801).then(n.bind(n,12801)).then((function(t){t.default.show({items:s,positionTo:e,callback:function(t){e.dispatchEvent(new CustomEvent("layoutchange",{detail:{viewStyle:t},bubbles:!0,cancelable:!1})),!a&&window.$&&$(e).trigger("layoutchange",[t])}})}))},getQueryPagingHtml:function(e){var t=e.startIndex,n=e.limit,i=e.totalRecordCount,a="",s=i?t+1:0,l=n?Math.min(t+n,i):i,o=n>0&&n<i;return a+='<div class="listPaging">',a+='<span style="vertical-align:middle;">',a+=r.ZP.translate("ListPaging",s,l,i),a+="</span>",(o||e.viewButton||e.filterButton||e.sortButton||e.addLayoutButton)&&(a+='<div style="display:inline-block;">',o&&(a+='<button is="paper-icon-button-light" class="btnPreviousPage autoSize" '+(t?"":"disabled")+'><span class="material-icons arrow_back" aria-hidden="true"></span></button>',a+='<button is="paper-icon-button-light" class="btnNextPage autoSize" '+(t+n>=i?"disabled":"")+'><span class="material-icons arrow_forward" aria-hidden="true"></span></button>'),e.addLayoutButton&&(a+='<button is="paper-icon-button-light" title="'+r.ZP.translate("ButtonSelectView")+'" class="btnChangeLayout autoSize" data-layouts="'+(e.layouts||"")+'" onclick="LibraryBrowser.showLayoutMenu(this, \''+(e.currentLayout||"")+'\');"><span class="material-icons view_comfy" aria-hidden="true"></span></button>'),e.sortButton&&(a+='<button is="paper-icon-button-light" class="btnSort autoSize" title="'+r.ZP.translate("Sort")+'"><span class="material-icons sort_by_alpha" aria-hidden="true"></span></button>'),e.filterButton&&(a+='<button is="paper-icon-button-light" class="btnFilter autoSize" title="'+r.ZP.translate("Filter")+'"><span class="material-icons filter_list" aria-hidden="true"></span></button>'),a+="</div>"),a+"</div>"},showSortMenu:function(e){Promise.all([Promise.resolve().then(n.bind(n,93355)),n.e(92144).then(n.bind(n,92144))]).then((function(t){var n=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a,s,l=[],o=!0,d=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;o=!1}else for(;!(o=(r=a.call(n)).done)&&(l.push(r.value),l.length!==t);o=!0);}catch(e){d=!0,i=e}finally{try{if(!o&&null!=n.return&&(s=n.return(),Object(s)!==s))return}finally{if(d)throw i}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t,1)[0].default;function a(){var t=this.value;if(this.checked){var n=e.query.SortBy!=t;e.query.SortBy=t.replace("_",","),e.query.StartIndex=0,e.callback&&n&&e.callback()}}function s(){var t=this.value;if(this.checked){var n=e.query.SortOrder!=t;e.query.SortOrder=t,e.query.StartIndex=0,e.callback&&n&&e.callback()}}var l=n.createDialog({removeOnClose:!0,modal:!1,entryAnimationDuration:160,exitAnimationDuration:200});l.classList.add("ui-body-a"),l.classList.add("background-theme-a"),l.classList.add("formDialog");var o,d,u,c="";for(c+='<div style="margin:0;padding:1.25em 1.5em 1.5em;">',c+='<h2 style="margin:0 0 .5em;">',c+=r.ZP.translate("HeaderSortBy"),c+="</h2>",c+="<div>",o=0,d=e.items.length;o<d;o++){var h=e.items[o],f=h.id.replace(",","_");u=(e.query.SortBy||"").replace(",","_")==f?" checked":"",c+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortBy" data-id="'+h.id+'" value="'+f+'" class="menuSortBy" '+u+" /><span>"+h.name+"</span></label>"}c+="</div>",c+='<h2 style="margin: 1em 0 .5em;">',c+=r.ZP.translate("HeaderSortOrder"),c+="</h2>",c+="<div>",c+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Ascending" class="menuSortOrder" '+(u="Ascending"==e.query.SortOrder?" checked":"")+" /><span>"+r.ZP.translate("Ascending")+"</span></label>",c+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Descending" class="menuSortOrder" '+(u="Descending"==e.query.SortOrder?" checked":"")+" /><span>"+r.ZP.translate("Descending")+"</span></label>",c+="</div>",c+="</div>",l.innerHTML=c,n.open(l);var m=l.querySelectorAll(".menuSortBy");for(o=0,d=m.length;o<d;o++)m[o].addEventListener("change",a);var v=l.querySelectorAll(".menuSortOrder");for(o=0,d=v.length;o<d;o++)v[o].addEventListener("change",s)}))}};window.LibraryBrowser=a,t.ZP=a}}]);