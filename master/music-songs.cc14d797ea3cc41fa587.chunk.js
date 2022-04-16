"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1949],{91498:function(e,t,r){r.r(t),r.d(t,{default:function(){return c}}),r(5769),r(63238),r(61418),r(17460),r(14078);var a=r(47005),n=r(2587),i=r(21361),o=r(66056),l=r(56705),u=r(28978),s=r(44614),d=(r(32420),r(93586));function c(e,t,c){function m(e){var r=b(e),a=f[r];return a||(a=f[r]={query:{SortBy:"Album,SortName",SortOrder:"Ascending",IncludeItemTypes:"Audio",Recursive:!0,Fields:"AudioInfo,ParentId",StartIndex:0,ImageTypeLimit:1,EnableImageTypes:"Primary"}},u.libraryPageSize()>0&&(a.query.Limit=u.libraryPageSize()),a.query.ParentId=t.topParentId,n.ZP.loadSavedQueryValues(r,a.query)),a}function y(e){return m(e).query}function b(e){return e.savedQueryKey||(e.savedQueryKey=n.ZP.getSavedQueryKey("songs")),e.savedQueryKey}function v(e){l.ZP.show(),g=!0;var t=y(e);ApiClient.getItems(d.ZP.getCurrentUserId(),t).then((function(a){function s(){g||(u.libraryPageSize()>0&&(t.StartIndex+=t.Limit),v(c))}function d(){g||(u.libraryPageSize()>0&&(t.StartIndex=Math.max(0,t.StartIndex-t.Limit)),v(c))}window.scrollTo(0,0);for(var m=n.ZP.getQueryPagingHtml({startIndex:t.StartIndex,limit:t.Limit,totalRecordCount:a.TotalRecordCount,showLimit:!1,updatePageSizeSetting:!1,addLayoutButton:!1,sortButton:!1,filterButton:!1}),y=o.Z.getListViewHtml({items:a.Items,action:"playallfromhere",smallIcon:!0,artist:!0,addToListButton:!0}),S=c.querySelectorAll(".paging"),f=0,h=S.length;f<h;f++)S[f].innerHTML=m;for(var p=0,P=(S=c.querySelectorAll(".btnNextPage")).length;p<P;p++)S[p].addEventListener("click",s);for(var w=0,A=(S=c.querySelectorAll(".btnPreviousPage")).length;w<A;w++)S[w].addEventListener("click",d);var L=c.querySelector(".itemsContainer");L.innerHTML=y,i.default.lazyChildren(L),n.ZP.saveQueryValues(b(e),t),l.ZP.hide(),g=!1,Promise.resolve().then(r.bind(r,6610)).then((function(t){t.default.autoFocus(e)}))}))}var S=this,f={},g=!1;S.showFilterMenu=function(){r.e(8872).then(r.bind(r,78872)).then((function(e){var t=new(0,e.default)({query:y(c),mode:"songs",serverId:ApiClient.serverId()});a.Events.on(t,"filterchange",(function(){y(c).StartIndex=0,v(c)})),t.show()}))},S.getCurrentViewStyle=function(){return m(c).view},function(e){e.querySelector(".btnFilter").addEventListener("click",(function(){S.showFilterMenu()})),e.querySelector(".btnSort").addEventListener("click",(function(t){n.ZP.showSortMenu({items:[{name:s.ZP.translate("OptionTrackName"),id:"Name"},{name:s.ZP.translate("Album"),id:"Album,SortName"},{name:s.ZP.translate("AlbumArtist"),id:"AlbumArtist,Album,SortName"},{name:s.ZP.translate("Artist"),id:"Artist,Album,SortName"},{name:s.ZP.translate("OptionDateAdded"),id:"DateCreated,SortName"},{name:s.ZP.translate("OptionDatePlayed"),id:"DatePlayed,SortName"},{name:s.ZP.translate("OptionPlayCount"),id:"PlayCount,SortName"},{name:s.ZP.translate("OptionReleaseDate"),id:"PremiereDate,AlbumArtist,Album,SortName"},{name:s.ZP.translate("Runtime"),id:"Runtime,AlbumArtist,Album,SortName"}],callback:function(){y(e).StartIndex=0,v(e)},query:y(e),button:t.target})}))}(c),S.renderTab=function(){v(c)}}},2587:function(e,t,r){r(25901),r(92189),r(91047),r(72410),r(15610),r(5769),r(52077),r(72482),r(48410),r(61013),r(63238),r(61418),r(17460),r(14078),r(911);var a=r(28978),n=r(44614);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}var o={getSavedQueryKey:function(e){return window.location.href.split("#")[0]+(e||"")},loadSavedQueryValues:function(e,t){var r=a.get(e);return r?(r=JSON.parse(r),Object.assign(t,r)):t},saveQueryValues:function(e,t){var r={};t.SortBy&&(r.SortBy=t.SortBy),t.SortOrder&&(r.SortOrder=t.SortOrder),a.set(e,JSON.stringify(r))},saveViewSetting:function(e,t){a.set(e+"-_view",t)},getSavedView:function(e){return a.get(e+"-_view")},showLayoutMenu:function(e,t,a){var i=!0;a||(i=!1,a=(a=e.getAttribute("data-layouts"))?a.split(","):["List","Poster","PosterCard","Thumb","ThumbCard"]);var o=a.map((function(e){return{name:n.ZP.translate(e),id:e,selected:t==e}}));Promise.resolve().then(r.bind(r,78407)).then((function(t){t.default.show({items:o,positionTo:e,callback:function(t){e.dispatchEvent(new CustomEvent("layoutchange",{detail:{viewStyle:t},bubbles:!0,cancelable:!1})),i||window.$&&$(e).trigger("layoutchange",[t])}})}))},getQueryPagingHtml:function(e){var t=e.startIndex,r=e.limit,a=e.totalRecordCount,i="",o=Math.min(t+r,a),l=r<a;return i+='<div class="listPaging">',l&&(i+='<span style="vertical-align:middle;">',i+=n.ZP.translate("ListPaging",a?t+1:0,o,a),i+="</span>"),(l||e.viewButton||e.filterButton||e.sortButton||e.addLayoutButton)&&(i+='<div style="display:inline-block;">',l&&(i+='<button is="paper-icon-button-light" class="btnPreviousPage autoSize" '+(t?"":"disabled")+'><span class="material-icons arrow_back" aria-hidden="true"></span></button>',i+='<button is="paper-icon-button-light" class="btnNextPage autoSize" '+(t+r>=a?"disabled":"")+'><span class="material-icons arrow_forward" aria-hidden="true"></span></button>'),e.addLayoutButton&&(i+='<button is="paper-icon-button-light" title="'+n.ZP.translate("ButtonSelectView")+'" class="btnChangeLayout autoSize" data-layouts="'+(e.layouts||"")+'" onclick="LibraryBrowser.showLayoutMenu(this, \''+(e.currentLayout||"")+'\');"><span class="material-icons view_comfy" aria-hidden="true"></span></button>'),e.sortButton&&(i+='<button is="paper-icon-button-light" class="btnSort autoSize" title="'+n.ZP.translate("Sort")+'"><span class="material-icons sort_by_alpha" aria-hidden="true"></span></button>'),e.filterButton&&(i+='<button is="paper-icon-button-light" class="btnFilter autoSize" title="'+n.ZP.translate("Filter")+'"><span class="material-icons filter_list" aria-hidden="true"></span></button>'),i+="</div>"),i+"</div>"},showSortMenu:function(e){Promise.all([Promise.resolve().then(r.bind(r,90914)),r.e(2987).then(r.bind(r,82987))]).then((function(t){var r=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a,n,i=[],o=!0,l=!1;try{for(r=r.call(e);!(o=(a=r.next()).done)&&(i.push(a.value),!t||i.length!==t);o=!0);}catch(e){l=!0,n=e}finally{try{o||null==r.return||r.return()}finally{if(l)throw n}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t,1)[0].default;function a(){var t=this.value;if(this.checked){var r=e.query.SortBy!=t;e.query.SortBy=t.replace("_",","),e.query.StartIndex=0,e.callback&&r&&e.callback()}}function o(){var t=this.value;if(this.checked){var r=e.query.SortOrder!=t;e.query.SortOrder=t,e.query.StartIndex=0,e.callback&&r&&e.callback()}}var l=r.createDialog({removeOnClose:!0,modal:!1,entryAnimationDuration:160,exitAnimationDuration:200});l.classList.add("ui-body-a"),l.classList.add("background-theme-a"),l.classList.add("formDialog");var u,s,d,c="";for(c+='<div style="margin:0;padding:1.25em 1.5em 1.5em;">',c+='<h2 style="margin:0 0 .5em;">',c+=n.ZP.translate("HeaderSortBy"),c+="</h2>",c+="<div>",u=0,s=e.items.length;u<s;u++){var m=e.items[u],y=m.id.replace(",","_");d=(e.query.SortBy||"").replace(",","_")==y?" checked":"",c+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortBy" data-id="'+m.id+'" value="'+y+'" class="menuSortBy" '+d+" /><span>"+m.name+"</span></label>"}c+="</div>",c+='<h2 style="margin: 1em 0 .5em;">',c+=n.ZP.translate("HeaderSortOrder"),c+="</h2>",c+="<div>",c+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Ascending" class="menuSortOrder" '+(d="Ascending"==e.query.SortOrder?" checked":"")+" /><span>"+n.ZP.translate("Ascending")+"</span></label>",c+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Descending" class="menuSortOrder" '+(d="Descending"==e.query.SortOrder?" checked":"")+" /><span>"+n.ZP.translate("Descending")+"</span></label>",c+="</div>",c+="</div>",l.innerHTML=c,r.open(l);var b=l.querySelectorAll(".menuSortBy");for(u=0,s=b.length;u<s;u++)b[u].addEventListener("change",a);var v=l.querySelectorAll(".menuSortOrder");for(u=0,s=v.length;u<s;u++)v[u].addEventListener("change",o)}))}};window.LibraryBrowser=o,t.ZP=o}}]);