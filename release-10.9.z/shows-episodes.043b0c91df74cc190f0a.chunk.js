/*! For license information please see shows-episodes.043b0c91df74cc190f0a.chunk.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[10442,95947,26949],{96747:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}}),r(44962),r(78557),r(90076),r(83994),r(82367);var n=r(56869),i=r(94592),a=r(58782),s=r(6940),o=r(24468),l=r(82885),d=r(9482),u=r(89100),c=r(62014);function h(e,t,h){function f(){var e=y(),r=p[e];return r||(r=p[e]={query:{SortBy:"SeriesSortName,SortName",SortOrder:"Ascending",IncludeItemTypes:"Episode",Recursive:!0,Fields:"PrimaryImageAspectRatio,MediaSourceCount",IsMissing:!1,ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Thumb",StartIndex:0},view:l.getSavedView(e)||"Poster"},l.libraryPageSize()>0&&(r.query.Limit=l.libraryPageSize()),r.query.ParentId=t.topParentId,l.loadQuerySettings(e,r.query)),r}function m(){return f().query}function y(){return"".concat(t.topParentId,"-episodes")}function v(){var e=g.getCurrentViewStyle(),t=h.querySelector(".itemsContainer");"List"==e?(t.classList.add("vertical-list"),t.classList.remove("vertical-wrap")):(t.classList.remove("vertical-list"),t.classList.add("vertical-wrap")),t.innerHTML=""}function b(e){n.Ay.show(),S=!0;var t=m();ApiClient.getItems(u.default.getCurrentUserId(),t).then((function(d){function u(){S||(l.libraryPageSize()>0&&(t.StartIndex+=t.Limit),b(h))}function c(){S||(l.libraryPageSize()>0&&(t.StartIndex=Math.max(0,t.StartIndex-t.Limit)),b(h))}var f;window.scrollTo(0,0);var m,v=i.Ay.getQueryPagingHtml({startIndex:t.StartIndex,limit:t.Limit,totalRecordCount:d.TotalRecordCount,showLimit:!1,updatePageSizeSetting:!1,addLayoutButton:!1,sortButton:!1,filterButton:!1}),p=g.getCurrentViewStyle(),A=h.querySelector(".itemsContainer");f="List"==p?s.A.getListViewHtml({items:d.Items,sortBy:t.SortBy,showParentTitle:!0}):"PosterCard"==p?o.default.getCardsHtml({items:d.Items,shape:"backdrop",showTitle:!0,showParentTitle:!0,scalable:!0,cardLayout:!0}):o.default.getCardsHtml({items:d.Items,shape:"backdrop",showTitle:!0,showParentTitle:!0,overlayText:!1,centerText:!0,scalable:!0,overlayPlayButton:!0});for(var w=0,I=(m=h.querySelectorAll(".paging")).length;w<I;w++)m[w].innerHTML=v;for(var C=0,L=(m=h.querySelectorAll(".btnNextPage")).length;C<L;C++)m[C].addEventListener("click",u);for(var P=0,T=(m=h.querySelectorAll(".btnPreviousPage")).length;P<T;P++)m[P].addEventListener("click",c);A.innerHTML=f,a.default.lazyChildren(A),l.saveQuerySettings(y(),t),n.Ay.hide(),S=!1,Promise.resolve().then(r.bind(r,84069)).then((function(t){t.default.autoFocus(e)}))}))}var g=this,p={},S=!1;g.showFilterMenu=function(){r.e(44599).then(r.bind(r,44599)).then((function(e){var t=new(0,e.default)({query:m(),mode:"episodes",serverId:ApiClient.serverId()});c.A.on(t,"filterchange",(function(){b(h)})),t.show()}))},g.getCurrentViewStyle=function(){return f().view},function(e){e.querySelector(".btnFilter").addEventListener("click",(function(){g.showFilterMenu()})),e.querySelector(".btnSort").addEventListener("click",(function(t){i.Ay.showSortMenu({items:[{name:d.Ay.translate("Name"),id:"SeriesSortName,SortName"},{name:d.Ay.translate("OptionTvdbRating"),id:"CommunityRating,SeriesSortName,SortName"},{name:d.Ay.translate("OptionDateAdded"),id:"DateCreated,SeriesSortName,SortName"},{name:d.Ay.translate("OptionPremiereDate"),id:"PremiereDate,SeriesSortName,SortName"},{name:d.Ay.translate("OptionDatePlayed"),id:"DatePlayed,SeriesSortName,SortName"},{name:d.Ay.translate("OptionParentalRating"),id:"OfficialRating,SeriesSortName,SortName"},{name:d.Ay.translate("OptionPlayCount"),id:"PlayCount,SeriesSortName,SortName"},{name:d.Ay.translate("Runtime"),id:"Runtime,SeriesSortName,SortName"}],callback:function(){b(e)},query:m(),button:t.target})}));var t=e.querySelector(".btnSelectView");t.addEventListener("click",(function(e){i.Ay.showLayoutMenu(e.target,g.getCurrentViewStyle(),"List,Poster,PosterCard".split(","))})),t.addEventListener("layoutchange",(function(t){var r=t.detail.viewStyle;f().view=r,l.saveViewSetting(y(),r),v(),b(e)}))}(h),v(),g.renderTab=function(){b(h)}}r(1177)},1177:function(e,t,r){"use strict";r(44962),r(84734),r(78557),r(96054),r(90076),r(83994),r(82367);var n=r(22832),i=r(38490),a=r(80669),s=r(58782),o=r(46782),l=r(34789),d=r(47629),u=r(56869),c=r(83775),h=r(10736),f=r(62014),m=(r(69177),r(86191)),y=r(65210),v=Object.create(HTMLDivElement.prototype);function b(e){var t=this,r=t.multiSelect;!1!==(null==r?void 0:r.onContainerClick.call(t,e))&&n.Ay.onClick.call(t,e)}function g(e){return e.preventDefault(),e.stopPropagation(),!1}function p(e){var t=e.target,r=d.Ay.parentWithAttribute(t,"data-id");if(null!=r&&r.getAttribute("data-serverid"))return i.default.handleCommand("menu",{sourceElement:r}),e.preventDefault(),e.stopPropagation(),!1}function S(e,t,n){var i=this;Promise.all([r.e(45642),r.e(24468),r.e(95947)]).then(r.bind(r,24468)).then((function(e){e.onUserDataChanged(n,i)}));var a=A(i);-1===a.indexOf("markfavorite")&&-1===a.indexOf("markplayed")||i.notifyRefreshNeeded()}function A(e){var t=e.getAttribute("data-monitor");return t?t.split(","):[]}function w(e,t,n){var i=this;if(-1===A(i).indexOf("timers")){var a=n.ProgramId,s=n.Id;Promise.all([r.e(45642),r.e(24468),r.e(95947)]).then(r.bind(r,24468)).then((function(e){e.onTimerCreated(a,s,i)}))}else i.notifyRefreshNeeded()}function I(){-1!==A(this).indexOf("seriestimers")&&this.notifyRefreshNeeded()}function C(e,t,n){var i=this;-1===A(i).indexOf("timers")?Promise.all([r.e(45642),r.e(24468),r.e(95947)]).then(r.bind(r,24468)).then((function(e){e.onTimerCancelled(n.Id,i)})):i.notifyRefreshNeeded()}function L(e,t,n){var i=this;-1===A(i).indexOf("seriestimers")?Promise.all([r.e(45642),r.e(24468),r.e(95947)]).then(r.bind(r,24468)).then((function(e){e.onSeriesTimerCancelled(n.Id,i)})):i.notifyRefreshNeeded()}function P(e,t,r){var n=this,i=A(n);if(-1===i.indexOf("seriestimers")&&-1===i.indexOf("timers")){var a=r.ItemsAdded||[],s=r.ItemsRemoved||[];if(a.length||s.length){var o=n.getAttribute("data-parentid");if(o){var l=r.FoldersAddedTo||[],d=r.FoldersRemovedFrom||[],u=r.CollectionFolders||[];if(-1===l.indexOf(o)&&-1===d.indexOf(o)&&-1===u.indexOf(o))return}n.notifyRefreshNeeded()}}}function T(e,t){var r,n=this,i=t.state,a=A(n);if(i.NowPlayingItem&&"Video"===i.NowPlayingItem.MediaType){if(-1!==a.indexOf("videoplayback"))return void n.notifyRefreshNeeded(!0)}else if("Audio"===(null===(r=i.NowPlayingItem)||void 0===r?void 0:r.MediaType)&&-1!==a.indexOf("audioplayback"))return void n.notifyRefreshNeeded(!0)}function k(e,t,r,n){var i=r.bind(e);n=n||h.default,f.A.on(n,t,i),e["event_"+t]=i}function x(e,t,r){var n=e["event_"+t];n&&(r=r||h.default,f.A.off(r,t,n),e["event_"+t]=null)}function O(e,t){e.refreshInterval&&(clearInterval(e.refreshInterval),e.refreshInterval=null,t||(e.refreshIntervalEndTime=null))}function N(e,t){O(e),t||(t=parseInt(e.getAttribute("data-refreshinterval")||"0",10)),t&&(e.refreshInterval=setInterval(e.notifyRefreshNeeded.bind(e),t),e.refreshIntervalEndTime=(new Date).getTime()+t)}function R(e){var t=e.Items||e,r=this.parentContainer;r&&(t.length?r.classList.remove("hide"):r.classList.add("hide"));var n,i,a=document.activeElement;this.contains(a)&&(i=!0,n=a.getAttribute("data-id")),this.innerHTML=this.getItemsHtml(t),s.default.lazyChildren(this),i&&function(e,t){if(t){var r=e.querySelector('[data-id="'+t+'"]');if(r)try{return void c.A.focus(r)}catch(e){console.error(e)}}c.A.autoFocus(e)}(this,n),N(this),this.afterRefresh&&this.afterRefresh(e)}v.enableMultiSelect=function(e){var t=this.multiSelect;if(e){if(!t){var n=this;r.e(35308).then(r.bind(r,35308)).then((function(e){var t=e.default;n.multiSelect=new t({container:n,bindOnClick:!1})}))}}else t&&(t.destroy(),this.multiSelect=null)},v.enableDragReordering=function(e){var t=this.sortable;if(e){if(!t){var r=this;r.sortable=new y.Ay(r,{draggable:".listItem",handle:".listViewDragHandle",onEnd:function(e){return function(e,t){var r=e.item,n=e.newIndex,i=r.getAttribute("data-playlistitemid"),a=r.getAttribute("data-playlistid");if(a){var s=r.getAttribute("data-serverid"),o=m.A.getApiClient(s);u.Ay.show(),o.ajax({url:o.getUrl("Playlists/"+a+"/Items/"+i+"/Move/"+n),type:"POST"}).then((function(){u.Ay.hide()}),(function(){u.Ay.hide(),t.refreshItems()}))}else{var l=e.oldIndex;r.dispatchEvent(new CustomEvent("itemdrop",{detail:{oldIndex:l,newIndex:n,playlistItemId:i},bubbles:!0,cancelable:!1}))}}(e,r)}})}}else t&&(t.destroy(),this.sortable=null)},v.createdCallback=function(){this.classList.add("itemsContainer")},v.attachedCallback=function(){this.addEventListener("click",b),l.A.touch?this.addEventListener("contextmenu",g):"false"!==this.getAttribute("data-contextmenu")&&this.addEventListener("contextmenu",p),(o.A.desktop||o.A.mobile&&"false"!==this.getAttribute("data-multiselect"))&&this.enableMultiSelect(!0),o.A.tv&&this.classList.add("itemsContainer-tv"),n.Ay.on(this,{click:!1}),k(this,"UserDataChanged",S),k(this,"TimerCreated",w),k(this,"SeriesTimerCreated",I),k(this,"TimerCancelled",C),k(this,"SeriesTimerCancelled",L),k(this,"LibraryChanged",P),k(this,"playbackstop",T,a.f),"true"===this.getAttribute("data-dragreorder")&&this.enableDragReordering(!0)},v.detachedCallback=function(){O(this),this.enableMultiSelect(!1),this.enableDragReordering(!1),this.removeEventListener("click",b),this.removeEventListener("contextmenu",p),this.removeEventListener("contextmenu",g),n.Ay.off(this,{click:!1}),x(this,"UserDataChanged"),x(this,"TimerCreated"),x(this,"SeriesTimerCreated"),x(this,"TimerCancelled"),x(this,"SeriesTimerCancelled"),x(this,"LibraryChanged"),x(this,"playbackstop",a.f),this.fetchData=null,this.getItemsHtml=null,this.parentContainer=null},v.pause=function(){O(this,!0),this.paused=!0},v.resume=function(e){this.paused=!1;var t=this.refreshIntervalEndTime;if(t){var r=t-(new Date).getTime();r>0&&!this.needsRefresh?N(this,r):(this.needsRefresh=!0,this.refreshIntervalEndTime=null)}return this.needsRefresh||null!=e&&e.refresh?this.refreshItems():Promise.resolve()},v.refreshItems=function(){return this.fetchData?this.paused?(this.needsRefresh=!0,Promise.resolve()):(this.needsRefresh=!1,this.fetchData().then(R.bind(this))):Promise.resolve()},v.notifyRefreshNeeded=function(e){if(this.paused)this.needsRefresh=!0;else{var t=this.refreshTimeout;t&&clearTimeout(t),!0===e?this.refreshItems():this.refreshTimeout=setTimeout(this.refreshItems.bind(this),1e4)}},document.registerElement("emby-itemscontainer",{prototype:v,extends:"div"})},94592:function(e,t,r){"use strict";r(44962),r(29305),r(32733),r(84701),r(69892),r(86584),r(89336),r(78557),r(90076),r(95021),r(73687),r(83994),r(93062),r(82367);var n=r(9482);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var a={showLayoutMenu:function(e,t,i){var a=!0;i||(a=!1,i=(i=e.getAttribute("data-layouts"))?i.split(","):["List","Poster","PosterCard","Thumb","ThumbCard"]);var s=i.map((function(e){return{name:n.Ay.translate(e),id:e,selected:t==e}}));r.e(79617).then(r.bind(r,79617)).then((function(t){t.default.show({items:s,positionTo:e,callback:function(t){e.dispatchEvent(new CustomEvent("layoutchange",{detail:{viewStyle:t},bubbles:!0,cancelable:!1})),!a&&window.$&&$(e).trigger("layoutchange",[t])}})}))},getQueryPagingHtml:function(e){var t=e.startIndex,r=e.limit,i=e.totalRecordCount,a="",s=i?t+1:0,o=r?Math.min(t+r,i):i,l=r>0&&r<i;return a+='<div class="listPaging">',a+='<span style="vertical-align:middle;">',a+=n.Ay.translate("ListPaging",s,o,i),a+="</span>",(l||e.viewButton||e.filterButton||e.sortButton||e.addLayoutButton)&&(a+='<div style="display:inline-block;">',l&&(a+='<button is="paper-icon-button-light" class="btnPreviousPage autoSize" '+(t?"":"disabled")+'><span class="material-icons arrow_back" aria-hidden="true"></span></button>',a+='<button is="paper-icon-button-light" class="btnNextPage autoSize" '+(t+r>=i?"disabled":"")+'><span class="material-icons arrow_forward" aria-hidden="true"></span></button>'),e.addLayoutButton&&(a+='<button is="paper-icon-button-light" title="'+n.Ay.translate("ButtonSelectView")+'" class="btnChangeLayout autoSize" data-layouts="'+(e.layouts||"")+'" onclick="LibraryBrowser.showLayoutMenu(this, \''+(e.currentLayout||"")+'\');"><span class="material-icons view_comfy" aria-hidden="true"></span></button>'),e.sortButton&&(a+='<button is="paper-icon-button-light" class="btnSort autoSize" title="'+n.Ay.translate("Sort")+'"><span class="material-icons sort_by_alpha" aria-hidden="true"></span></button>'),e.filterButton&&(a+='<button is="paper-icon-button-light" class="btnFilter autoSize" title="'+n.Ay.translate("Filter")+'"><span class="material-icons filter_list" aria-hidden="true"></span></button>'),a+="</div>"),a+"</div>"},showSortMenu:function(e){Promise.all([Promise.resolve().then(r.bind(r,79754)),r.e(81613).then(r.bind(r,87642))]).then((function(t){var r=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,i,a,s,o=[],l=!0,d=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(o.push(n.value),o.length!==t);l=!0);}catch(e){d=!0,i=e}finally{try{if(!l&&null!=r.return&&(s=r.return(),Object(s)!==s))return}finally{if(d)throw i}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t,1)[0].default;function a(){var t=this.value;if(this.checked){var r=e.query.SortBy!=t;e.query.SortBy=t.replace("_",","),e.query.StartIndex=0,e.callback&&r&&e.callback()}}function s(){var t=this.value;if(this.checked){var r=e.query.SortOrder!=t;e.query.SortOrder=t,e.query.StartIndex=0,e.callback&&r&&e.callback()}}var o=r.createDialog({removeOnClose:!0,modal:!1,entryAnimationDuration:160,exitAnimationDuration:200});o.classList.add("ui-body-a"),o.classList.add("background-theme-a"),o.classList.add("formDialog");var l,d,u,c="";for(c+='<div style="margin:0;padding:1.25em 1.5em 1.5em;">',c+='<h2 style="margin:0 0 .5em;">',c+=n.Ay.translate("HeaderSortBy"),c+="</h2>",c+="<div>",l=0,d=e.items.length;l<d;l++){var h=e.items[l],f=h.id.replace(",","_");u=(e.query.SortBy||"").replace(",","_")==f?" checked":"",c+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortBy" data-id="'+h.id+'" value="'+f+'" class="menuSortBy" '+u+" /><span>"+h.name+"</span></label>"}c+="</div>",c+='<h2 style="margin: 1em 0 .5em;">',c+=n.Ay.translate("HeaderSortOrder"),c+="</h2>",c+="<div>",c+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Ascending" class="menuSortOrder" '+(u="Ascending"==e.query.SortOrder?" checked":"")+" /><span>"+n.Ay.translate("Ascending")+"</span></label>",c+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Descending" class="menuSortOrder" '+(u="Descending"==e.query.SortOrder?" checked":"")+" /><span>"+n.Ay.translate("Descending")+"</span></label>",c+="</div>",c+="</div>",o.innerHTML=c,r.open(o);var m=o.querySelectorAll(".menuSortBy");for(l=0,d=m.length;l<d;l++)m[l].addEventListener("change",a);var y=o.querySelectorAll(".menuSortOrder");for(l=0,d=y.length;l<d;l++)y[l].addEventListener("change",s)}))}};window.LibraryBrowser=a,t.Ay=a},4452:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=s(e,a(r)))}return e}function a(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return i.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=s(t,r));return t}function s(e,t){return t?e?e+" "+t:e+t:e}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r)}()}}]);