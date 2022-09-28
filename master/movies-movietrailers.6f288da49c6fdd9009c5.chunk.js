"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3479],{14857:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}}),r(5769),r(63238),r(61418),r(17460),r(14078),r(72410),r(15610),r(52077),r(25901),r(92189),r(91047);var a=r(51161),n=r(47005),i=r(92609),o=r(38737),l=r(79448),s=r(63873),u=r(61570),d=r(60934),c=r(94994);function y(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var a=0,n=function(){};return{s:n,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return o=e.done,e},e:function(e){l=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(l)throw i}}}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function h(e,t,m){var h=this;function v(e){var t=p(e),r=b[t];return r||(r=b[t]={query:{SortBy:"SortName",SortOrder:"Ascending",IncludeItemTypes:"Trailer",Recursive:!0,Fields:"PrimaryImageAspectRatio,SortName,BasicSyncInfo",ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb",StartIndex:0},view:i.ZP.getSavedView(t)||"Poster"},d.libraryPageSize()>0&&(r.query.Limit=d.libraryPageSize()),i.ZP.loadSavedQueryValues(t,r.query)),r}function f(e){return v(e).query}function p(e){return e.savedQueryKey||(e.savedQueryKey=i.ZP.getSavedQueryKey("trailers")),e.savedQueryKey}var g=function e(){a.ZP.show(),S=!0;var t=f(m);ApiClient.getItems(ApiClient.getCurrentUserId(),t).then((function(r){var n;function l(){S||(d.libraryPageSize()>0&&(t.StartIndex+=t.Limit),e())}function v(){S||(d.libraryPageSize()>0&&(t.StartIndex=Math.max(0,t.StartIndex-t.Limit)),e())}window.scrollTo(0,0),null===(n=h.alphaPicker)||void 0===n||n.updateControls(t);var f,g=i.ZP.getQueryPagingHtml({startIndex:t.StartIndex,limit:t.Limit,totalRecordCount:r.TotalRecordCount,showLimit:!1,updatePageSizeSetting:!1,addLayoutButton:!1,sortButton:!1,filterButton:!1}),b=h.getCurrentViewStyle();f="Thumb"==b?u.default.getCardsHtml({items:r.Items,shape:"backdrop",preferThumb:!0,context:"movies",overlayPlayButton:!0}):"ThumbCard"==b?u.default.getCardsHtml({items:r.Items,shape:"backdrop",preferThumb:!0,context:"movies",cardLayout:!0,showTitle:!0,showYear:!0,centerText:!0}):"Banner"==b?u.default.getCardsHtml({items:r.Items,shape:"banner",preferBanner:!0,context:"movies"}):"List"==b?s.Z.getListViewHtml({items:r.Items,context:"movies",sortBy:t.SortBy}):"PosterCard"==b?u.default.getCardsHtml({items:r.Items,shape:"portrait",context:"movies",showTitle:!0,showYear:!0,cardLayout:!0,centerText:!0}):u.default.getCardsHtml({items:r.Items,shape:"portrait",context:"movies",centerText:!0,overlayPlayButton:!0,showTitle:!0,showYear:!0});var P,w=m.querySelectorAll(".paging"),L=y(w);try{for(L.s();!(P=L.n()).done;)P.value.innerHTML=g}catch(e){L.e(e)}finally{L.f()}var k,I=y(w=m.querySelectorAll(".btnNextPage"));try{for(I.s();!(k=I.n()).done;)k.value.addEventListener("click",l)}catch(e){I.e(e)}finally{I.f()}var C,B=y(w=m.querySelectorAll(".btnPreviousPage"));try{for(B.s();!(C=B.n()).done;)C.value.addEventListener("click",v)}catch(e){B.e(e)}finally{B.f()}r.Items.length||(f="",f+='<div class="noItemsMessage centerMessage">',f+="<h1>"+c.ZP.translate("MessageNothingHere")+"</h1>",f+="<p>"+c.ZP.translate("MessageNoTrailersFound")+"</p>",f+="</div>");var A=m.querySelector(".itemsContainer");A.innerHTML=f,o.default.lazyChildren(A),i.ZP.saveQueryValues(p(m),t),a.ZP.hide(),S=!1}))},b={},S=!1;this.showFilterMenu=function(){r.e(2493).then(r.bind(r,23816)).then((function(e){var t=new(0,e.default)({query:f(m),mode:"movies",serverId:ApiClient.serverId()});n.Events.on(t,"filterchange",(function(){f(m).StartIndex=0,g()})),t.show()}))},this.getCurrentViewStyle=function(){return v(m).view},function(e){var t=e.querySelector(".alphaPicker"),r=e.querySelector(".itemsContainer");t.addEventListener("alphavaluechanged",(function(t){var r=t.detail.value,a=f(e);"#"===r?(a.NameLessThan="A",delete a.NameStartsWith):(a.NameStartsWith=r,delete a.NameLessThan),a.StartIndex=0,g()})),h.alphaPicker=new l.w({element:t,valueChangeEvent:"click"}),e.querySelector(".alphaPicker").classList.add("alphabetPicker-right"),t.classList.add("alphaPicker-fixed-right"),r.classList.add("padded-right-withalphapicker"),e.querySelector(".btnFilter").addEventListener("click",(function(){h.showFilterMenu()})),e.querySelector(".btnSort").addEventListener("click",(function(t){i.ZP.showSortMenu({items:[{name:c.ZP.translate("Name"),id:"SortName"},{name:c.ZP.translate("OptionImdbRating"),id:"CommunityRating,SortName"},{name:c.ZP.translate("OptionDateAdded"),id:"DateCreated,SortName"},{name:c.ZP.translate("OptionDatePlayed"),id:"DatePlayed,SortName"},{name:c.ZP.translate("OptionParentalRating"),id:"OfficialRating,SortName"},{name:c.ZP.translate("OptionPlayCount"),id:"PlayCount,SortName"},{name:c.ZP.translate("OptionReleaseDate"),id:"PremiereDate,SortName"}],callback:function(){f(e).StartIndex=0,g()},query:f(e),button:t.target})}))}(m),this.renderTab=function(){var e;g(),null===(e=h.alphaPicker)||void 0===e||e.updateControls(f(m))}}r(82427)},92609:function(e,t,r){r(25901),r(92189),r(91047),r(72410),r(15610),r(5769),r(52077),r(72482),r(48410),r(61013),r(63238),r(61418),r(17460),r(14078),r(911);var a=r(60934),n=r(94994);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}var o={getSavedQueryKey:function(e){return window.location.href.split("#")[0]+(e||"")},loadSavedQueryValues:function(e,t){var r=a.get(e);return r?(r=JSON.parse(r),Object.assign(t,r)):t},saveQueryValues:function(e,t){var r={};t.SortBy&&(r.SortBy=t.SortBy),t.SortOrder&&(r.SortOrder=t.SortOrder),a.set(e,JSON.stringify(r))},saveViewSetting:function(e,t){a.set(e+"-_view",t)},getSavedView:function(e){return a.get(e+"-_view")},showLayoutMenu:function(e,t,a){var i=!0;a||(i=!1,a=(a=e.getAttribute("data-layouts"))?a.split(","):["List","Poster","PosterCard","Thumb","ThumbCard"]);var o=a.map((function(e){return{name:n.ZP.translate(e),id:e,selected:t==e}}));Promise.resolve().then(r.bind(r,27074)).then((function(t){t.default.show({items:o,positionTo:e,callback:function(t){e.dispatchEvent(new CustomEvent("layoutchange",{detail:{viewStyle:t},bubbles:!0,cancelable:!1})),i||window.$&&$(e).trigger("layoutchange",[t])}})}))},getQueryPagingHtml:function(e){var t=e.startIndex,r=e.limit,a=e.totalRecordCount,i="",o=Math.min(t+r,a),l=r<a;return i+='<div class="listPaging">',l&&(i+='<span style="vertical-align:middle;">',i+=n.ZP.translate("ListPaging",a?t+1:0,o,a),i+="</span>"),(l||e.viewButton||e.filterButton||e.sortButton||e.addLayoutButton)&&(i+='<div style="display:inline-block;">',l&&(i+='<button is="paper-icon-button-light" class="btnPreviousPage autoSize" '+(t?"":"disabled")+'><span class="material-icons arrow_back" aria-hidden="true"></span></button>',i+='<button is="paper-icon-button-light" class="btnNextPage autoSize" '+(t+r>=a?"disabled":"")+'><span class="material-icons arrow_forward" aria-hidden="true"></span></button>'),e.addLayoutButton&&(i+='<button is="paper-icon-button-light" title="'+n.ZP.translate("ButtonSelectView")+'" class="btnChangeLayout autoSize" data-layouts="'+(e.layouts||"")+'" onclick="LibraryBrowser.showLayoutMenu(this, \''+(e.currentLayout||"")+'\');"><span class="material-icons view_comfy" aria-hidden="true"></span></button>'),e.sortButton&&(i+='<button is="paper-icon-button-light" class="btnSort autoSize" title="'+n.ZP.translate("Sort")+'"><span class="material-icons sort_by_alpha" aria-hidden="true"></span></button>'),e.filterButton&&(i+='<button is="paper-icon-button-light" class="btnFilter autoSize" title="'+n.ZP.translate("Filter")+'"><span class="material-icons filter_list" aria-hidden="true"></span></button>'),i+="</div>"),i+"</div>"},showSortMenu:function(e){Promise.all([Promise.resolve().then(r.bind(r,48102)),r.e(2697).then(r.bind(r,62697))]).then((function(t){var r=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a,n,i=[],o=!0,l=!1;try{for(r=r.call(e);!(o=(a=r.next()).done)&&(i.push(a.value),!t||i.length!==t);o=!0);}catch(e){l=!0,n=e}finally{try{o||null==r.return||r.return()}finally{if(l)throw n}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t,1)[0].default;function a(){var t=this.value;if(this.checked){var r=e.query.SortBy!=t;e.query.SortBy=t.replace("_",","),e.query.StartIndex=0,e.callback&&r&&e.callback()}}function o(){var t=this.value;if(this.checked){var r=e.query.SortOrder!=t;e.query.SortOrder=t,e.query.StartIndex=0,e.callback&&r&&e.callback()}}var l=r.createDialog({removeOnClose:!0,modal:!1,entryAnimationDuration:160,exitAnimationDuration:200});l.classList.add("ui-body-a"),l.classList.add("background-theme-a"),l.classList.add("formDialog");var s,u,d,c="";for(c+='<div style="margin:0;padding:1.25em 1.5em 1.5em;">',c+='<h2 style="margin:0 0 .5em;">',c+=n.ZP.translate("HeaderSortBy"),c+="</h2>",c+="<div>",s=0,u=e.items.length;s<u;s++){var y=e.items[s],m=y.id.replace(",","_");d=(e.query.SortBy||"").replace(",","_")==m?" checked":"",c+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortBy" data-id="'+y.id+'" value="'+m+'" class="menuSortBy" '+d+" /><span>"+y.name+"</span></label>"}c+="</div>",c+='<h2 style="margin: 1em 0 .5em;">',c+=n.ZP.translate("HeaderSortOrder"),c+="</h2>",c+="<div>",c+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Ascending" class="menuSortOrder" '+(d="Ascending"==e.query.SortOrder?" checked":"")+" /><span>"+n.ZP.translate("Ascending")+"</span></label>",c+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Descending" class="menuSortOrder" '+(d="Descending"==e.query.SortOrder?" checked":"")+" /><span>"+n.ZP.translate("Descending")+"</span></label>",c+="</div>",c+="</div>",l.innerHTML=c,r.open(l);var h=l.querySelectorAll(".menuSortBy");for(s=0,u=h.length;s<u;s++)h[s].addEventListener("change",a);var v=l.querySelectorAll(".menuSortOrder");for(s=0,u=v.length;s<u;s++)v[s].addEventListener("change",o)}))}};window.LibraryBrowser=o,t.ZP=o}}]);