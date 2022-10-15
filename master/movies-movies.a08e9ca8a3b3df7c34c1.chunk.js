"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7488],{35508:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}}),r(5769),r(63238),r(61418),r(17460),r(14078),r(72410),r(15610),r(52077),r(25901),r(92189),r(91047);var a=r(28540),n=r(60934),i=r(92609),o=r(12658),l=r(63873),s=r(61570),u=r(94994),c=r(81643),d=r(48957);function m(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var a=0,n=function(){};return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return o=e.done,e},e:function(e){l=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(l)throw i}}}}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function h(e,t,y,h){var f=this,v=function(){"List"==f.getCurrentViewStyle()?(P.classList.add("vertical-list"),P.classList.remove("vertical-wrap")):(P.classList.remove("vertical-list"),P.classList.add("vertical-wrap")),P.innerHTML=""};function p(){return C=!0,a.ZP.show(),ApiClient.getItems(ApiClient.getCurrentUserId(),I)}function b(){ApiClient.getItem(ApiClient.getCurrentUserId(),t.topParentId).then((function(e){d.O.shuffle(e)}))}var g=function(e){var t;function o(){C||(n.libraryPageSize()>0&&(I.StartIndex+=I.Limit),P.refreshItems())}function l(){C||(n.libraryPageSize()>0&&(I.StartIndex=Math.max(0,I.StartIndex-I.Limit)),P.refreshItems())}window.scrollTo(0,0),null===(t=f.alphaPicker)||void 0===t||t.updateControls(I);var s,u=i.ZP.getQueryPagingHtml({startIndex:I.StartIndex,limit:I.Limit,totalRecordCount:e.TotalRecordCount,showLimit:!1,updatePageSizeSetting:!1,addLayoutButton:!1,sortButton:!1,filterButton:!1}),c=m(y.querySelectorAll(".paging"));try{for(c.s();!(s=c.n()).done;)s.value.innerHTML=u}catch(e){c.e(e)}finally{c.f()}var d,h=m(y.querySelectorAll(".btnNextPage"));try{for(h.s();!(d=h.n()).done;)d.value.addEventListener("click",o)}catch(e){h.e(e)}finally{h.f()}var v,p=m(y.querySelectorAll(".btnPreviousPage"));try{for(p.s();!(v=p.n()).done;)v.value.addEventListener("click",l)}catch(e){p.e(e)}finally{p.f()}y.querySelector(".btnShuffle").classList.toggle("hide",e.TotalRecordCount<1),C=!1,a.ZP.hide(),Promise.resolve().then(r.bind(r,87680)).then((function(e){e.default.autoFocus(y)}))},S=function(e){var t=f.getCurrentViewStyle();return"Thumb"==t?s.default.getCardsHtml({items:e,shape:"backdrop",preferThumb:!0,context:"movies",lazy:!0,overlayPlayButton:!0,showTitle:!0,showYear:!0,centerText:!0}):"ThumbCard"==t?s.default.getCardsHtml({items:e,shape:"backdrop",preferThumb:!0,context:"movies",lazy:!0,cardLayout:!0,showTitle:!0,showYear:!0,centerText:!0}):"Banner"==t?s.default.getCardsHtml({items:e,shape:"banner",preferBanner:!0,context:"movies",lazy:!0}):"List"==t?l.Z.getListViewHtml({items:e,context:"movies",sortBy:I.SortBy}):"PosterCard"==t?s.default.getCardsHtml({items:e,shape:"portrait",context:"movies",showTitle:!0,showYear:!0,centerText:!0,lazy:!0,cardLayout:!0}):s.default.getCardsHtml({items:e,shape:"portrait",context:"movies",overlayPlayButton:!0,showTitle:!0,showYear:!0,centerText:!0})},P=y.querySelector(".itemsContainer"),w=t.topParentId+"-"+h.mode,L=w+"-view",I={SortBy:"SortName,ProductionYear",SortOrder:"Ascending",IncludeItemTypes:"Movie",Recursive:!0,Fields:"PrimaryImageAspectRatio,MediaSourceCount,BasicSyncInfo",ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb",StartIndex:0,ParentId:t.topParentId};n.libraryPageSize()>0&&(I.Limit=n.libraryPageSize());var C=!1;"favorites"===h.mode&&(I.IsFavorite=!0),I=n.loadQuerySettings(w,I),this.showFilterMenu=function(){r.e(3751).then(r.bind(r,3751)).then((function(e){var t=new(0,e.default)({query:I,mode:"movies",serverId:ApiClient.serverId()});c.Z.on(t,"filterchange",(function(){I.StartIndex=0,P.refreshItems()})),t.show()}))},this.getCurrentViewStyle=function(){return n.get(L)||"Poster"},this.initTab=function(){!function(e){P.fetchData=p,P.getItemsHtml=S,P.afterRefresh=g;var t=e.querySelector(".alphaPicker");t&&(t.addEventListener("alphavaluechanged",(function(e){var t=e.detail.value;"#"===t?(I.NameLessThan="A",delete I.NameStartsWith):(I.NameStartsWith=t,delete I.NameLessThan),I.StartIndex=0,P.refreshItems()})),f.alphaPicker=new o.w({element:t,valueChangeEvent:"click"}),e.querySelector(".alphaPicker").classList.add("alphabetPicker-right"),t.classList.add("alphaPicker-fixed-right"),P.classList.add("padded-right-withalphapicker"));var r=e.querySelector(".btnFilter");r&&r.addEventListener("click",(function(){f.showFilterMenu()}));var a=e.querySelector(".btnSort");a&&a.addEventListener("click",(function(e){i.ZP.showSortMenu({items:[{name:u.ZP.translate("Name"),id:"SortName,ProductionYear"},{name:u.ZP.translate("OptionRandom"),id:"Random"},{name:u.ZP.translate("OptionImdbRating"),id:"CommunityRating,SortName,ProductionYear"},{name:u.ZP.translate("OptionCriticRating"),id:"CriticRating,SortName,ProductionYear"},{name:u.ZP.translate("OptionDateAdded"),id:"DateCreated,SortName,ProductionYear"},{name:u.ZP.translate("OptionDatePlayed"),id:"DatePlayed,SortName,ProductionYear"},{name:u.ZP.translate("OptionParentalRating"),id:"OfficialRating,SortName,ProductionYear"},{name:u.ZP.translate("OptionPlayCount"),id:"PlayCount,SortName,ProductionYear"},{name:u.ZP.translate("OptionReleaseDate"),id:"PremiereDate,SortName,ProductionYear"},{name:u.ZP.translate("Runtime"),id:"Runtime,SortName,ProductionYear"}],callback:function(){I.StartIndex=0,n.saveQuerySettings(w,I),P.refreshItems()},query:I,button:e.target})}));var l=e.querySelector(".btnSelectView");l.addEventListener("click",(function(e){i.ZP.showLayoutMenu(e.target,f.getCurrentViewStyle(),"Banner,List,Poster,PosterCard,Thumb,ThumbCard".split(","))})),l.addEventListener("layoutchange",(function(e){var t=e.detail.viewStyle;n.set(L,t),I.StartIndex=0,v(),P.refreshItems()})),e.querySelector(".btnShuffle").addEventListener("click",b)}(y),v()},this.renderTab=function(){var e;P.refreshItems(),null===(e=f.alphaPicker)||void 0===e||e.updateControls(I)},this.destroy=function(){P=null}}r(82427)},92609:function(e,t,r){r(25901),r(92189),r(91047),r(72410),r(15610),r(5769),r(48410),r(61013),r(63238),r(61418),r(17460),r(14078),r(52077),r(911);var a=r(60934),n=r(94994);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}var o={getSavedQueryKey:function(e){return window.location.href.split("#")[0]+(e||"")},loadSavedQueryValues:function(e,t){var r=a.get(e);return r?(r=JSON.parse(r),Object.assign(t,r)):t},saveQueryValues:function(e,t){var r={};t.SortBy&&(r.SortBy=t.SortBy),t.SortOrder&&(r.SortOrder=t.SortOrder),a.set(e,JSON.stringify(r))},saveViewSetting:function(e,t){a.set(e+"-_view",t)},getSavedView:function(e){return a.get(e+"-_view")},showLayoutMenu:function(e,t,a){var i=!0;a||(i=!1,a=(a=e.getAttribute("data-layouts"))?a.split(","):["List","Poster","PosterCard","Thumb","ThumbCard"]);var o=a.map((function(e){return{name:n.ZP.translate(e),id:e,selected:t==e}}));Promise.resolve().then(r.bind(r,12801)).then((function(t){t.default.show({items:o,positionTo:e,callback:function(t){e.dispatchEvent(new CustomEvent("layoutchange",{detail:{viewStyle:t},bubbles:!0,cancelable:!1})),!i&&window.$&&$(e).trigger("layoutchange",[t])}})}))},getQueryPagingHtml:function(e){var t=e.startIndex,r=e.limit,a=e.totalRecordCount,i="",o=Math.min(t+r,a),l=r<a;return i+='<div class="listPaging">',l&&(i+='<span style="vertical-align:middle;">',i+=n.ZP.translate("ListPaging",a?t+1:0,o,a),i+="</span>"),(l||e.viewButton||e.filterButton||e.sortButton||e.addLayoutButton)&&(i+='<div style="display:inline-block;">',l&&(i+='<button is="paper-icon-button-light" class="btnPreviousPage autoSize" '+(t?"":"disabled")+'><span class="material-icons arrow_back" aria-hidden="true"></span></button>',i+='<button is="paper-icon-button-light" class="btnNextPage autoSize" '+(t+r>=a?"disabled":"")+'><span class="material-icons arrow_forward" aria-hidden="true"></span></button>'),e.addLayoutButton&&(i+='<button is="paper-icon-button-light" title="'+n.ZP.translate("ButtonSelectView")+'" class="btnChangeLayout autoSize" data-layouts="'+(e.layouts||"")+'" onclick="LibraryBrowser.showLayoutMenu(this, \''+(e.currentLayout||"")+'\');"><span class="material-icons view_comfy" aria-hidden="true"></span></button>'),e.sortButton&&(i+='<button is="paper-icon-button-light" class="btnSort autoSize" title="'+n.ZP.translate("Sort")+'"><span class="material-icons sort_by_alpha" aria-hidden="true"></span></button>'),e.filterButton&&(i+='<button is="paper-icon-button-light" class="btnFilter autoSize" title="'+n.ZP.translate("Filter")+'"><span class="material-icons filter_list" aria-hidden="true"></span></button>'),i+="</div>"),i+"</div>"},showSortMenu:function(e){Promise.all([Promise.resolve().then(r.bind(r,93355)),r.e(2144).then(r.bind(r,92144))]).then((function(t){var r=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a,n,i=[],o=!0,l=!1;try{for(r=r.call(e);!(o=(a=r.next()).done)&&(i.push(a.value),!t||i.length!==t);o=!0);}catch(e){l=!0,n=e}finally{try{o||null==r.return||r.return()}finally{if(l)throw n}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t,1)[0].default;function a(){var t=this.value;if(this.checked){var r=e.query.SortBy!=t;e.query.SortBy=t.replace("_",","),e.query.StartIndex=0,e.callback&&r&&e.callback()}}function o(){var t=this.value;if(this.checked){var r=e.query.SortOrder!=t;e.query.SortOrder=t,e.query.StartIndex=0,e.callback&&r&&e.callback()}}var l=r.createDialog({removeOnClose:!0,modal:!1,entryAnimationDuration:160,exitAnimationDuration:200});l.classList.add("ui-body-a"),l.classList.add("background-theme-a"),l.classList.add("formDialog");var s,u,c,d="";for(d+='<div style="margin:0;padding:1.25em 1.5em 1.5em;">',d+='<h2 style="margin:0 0 .5em;">',d+=n.ZP.translate("HeaderSortBy"),d+="</h2>",d+="<div>",s=0,u=e.items.length;s<u;s++){var m=e.items[s],y=m.id.replace(",","_");c=(e.query.SortBy||"").replace(",","_")==y?" checked":"",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortBy" data-id="'+m.id+'" value="'+y+'" class="menuSortBy" '+c+" /><span>"+m.name+"</span></label>"}d+="</div>",d+='<h2 style="margin: 1em 0 .5em;">',d+=n.ZP.translate("HeaderSortOrder"),d+="</h2>",d+="<div>",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Ascending" class="menuSortOrder" '+(c="Ascending"==e.query.SortOrder?" checked":"")+" /><span>"+n.ZP.translate("Ascending")+"</span></label>",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Descending" class="menuSortOrder" '+(c="Descending"==e.query.SortOrder?" checked":"")+" /><span>"+n.ZP.translate("Descending")+"</span></label>",d+="</div>",d+="</div>",l.innerHTML=d,r.open(l);var h=l.querySelectorAll(".menuSortBy");for(s=0,u=h.length;s<u;s++)h[s].addEventListener("change",a);var f=l.querySelectorAll(".menuSortOrder");for(s=0,u=f.length;s<u;s++)f[s].addEventListener("change",o)}))}};window.LibraryBrowser=o,t.ZP=o}}]);