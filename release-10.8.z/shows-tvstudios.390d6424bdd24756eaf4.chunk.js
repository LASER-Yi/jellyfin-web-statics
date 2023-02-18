"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[858],{39313:function(t,e,r){r.r(e),r.d(e,{default:function(){return s}}),r(5769),r(63238),r(61418),r(17460),r(14078);var a=r(56705),n=r(2587),i=r(61097);var o={};function s(t,e,s){var l;this.preRender=function(){l=function(t,e){var r=function(t){var e=n.ZP.getSavedQueryKey("studios"),r=o[e];return r||((r=o[e]={query:{SortBy:"SortName",SortOrder:"Ascending",IncludeItemTypes:"Series",Recursive:!0,Fields:"DateCreated,PrimaryImageAspectRatio",StartIndex:0}}).query.ParentId=t.topParentId),r.query}(e);return a.ZP.show(),ApiClient.getStudios(ApiClient.getCurrentUserId(),r)}(0,e)},this.renderTab=function(){!function(t,e,n){n.then((function(e){var n=t.querySelector("#items");i.default.buildCards(e.Items,{itemsContainer:n,shape:"backdrop",preferThumb:!0,showTitle:!0,scalable:!0,centerText:!0,overlayMoreButton:!0,context:"tvshows"}),a.ZP.hide(),Promise.resolve().then(r.bind(r,6610)).then((function(e){e.default.autoFocus(t)}))}))}(s,0,l)}}},2587:function(t,e,r){r(25901),r(92189),r(91047),r(72410),r(15610),r(5769),r(52077),r(72482),r(48410),r(61013),r(63238),r(61418),r(17460),r(14078),r(911);var a=r(28978),n=r(44614);function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,a=new Array(e);r<e;r++)a[r]=t[r];return a}var o={getSavedQueryKey:function(t){return window.location.href.split("#")[0]+(t||"")},loadSavedQueryValues:function(t,e){var r=a.get(t);return r?(r=JSON.parse(r),Object.assign(e,r)):e},saveQueryValues:function(t,e){var r={};e.SortBy&&(r.SortBy=e.SortBy),e.SortOrder&&(r.SortOrder=e.SortOrder),a.set(t,JSON.stringify(r))},saveViewSetting:function(t,e){a.set(t+"-_view",e)},getSavedView:function(t){return a.get(t+"-_view")},showLayoutMenu:function(t,e,a){var i=!0;a||(i=!1,a=(a=t.getAttribute("data-layouts"))?a.split(","):["List","Poster","PosterCard","Thumb","ThumbCard"]);var o=a.map((function(t){return{name:n.ZP.translate(t),id:t,selected:e==t}}));Promise.resolve().then(r.bind(r,78407)).then((function(e){e.default.show({items:o,positionTo:t,callback:function(e){t.dispatchEvent(new CustomEvent("layoutchange",{detail:{viewStyle:e},bubbles:!0,cancelable:!1})),i||window.$&&$(t).trigger("layoutchange",[e])}})}))},getQueryPagingHtml:function(t){var e=t.startIndex,r=t.limit,a=t.totalRecordCount,i="",o=Math.min(e+r,a),s=r<a;return i+='<div class="listPaging">',s&&(i+='<span style="vertical-align:middle;">',i+=n.ZP.translate("ListPaging",a?e+1:0,o,a),i+="</span>"),(s||t.viewButton||t.filterButton||t.sortButton||t.addLayoutButton)&&(i+='<div style="display:inline-block;">',s&&(i+='<button is="paper-icon-button-light" class="btnPreviousPage autoSize" '+(e?"":"disabled")+'><span class="material-icons arrow_back" aria-hidden="true"></span></button>',i+='<button is="paper-icon-button-light" class="btnNextPage autoSize" '+(e+r>=a?"disabled":"")+'><span class="material-icons arrow_forward" aria-hidden="true"></span></button>'),t.addLayoutButton&&(i+='<button is="paper-icon-button-light" title="'+n.ZP.translate("ButtonSelectView")+'" class="btnChangeLayout autoSize" data-layouts="'+(t.layouts||"")+'" onclick="LibraryBrowser.showLayoutMenu(this, \''+(t.currentLayout||"")+'\');"><span class="material-icons view_comfy" aria-hidden="true"></span></button>'),t.sortButton&&(i+='<button is="paper-icon-button-light" class="btnSort autoSize" title="'+n.ZP.translate("Sort")+'"><span class="material-icons sort_by_alpha" aria-hidden="true"></span></button>'),t.filterButton&&(i+='<button is="paper-icon-button-light" class="btnFilter autoSize" title="'+n.ZP.translate("Filter")+'"><span class="material-icons filter_list" aria-hidden="true"></span></button>'),i+="</div>"),i+"</div>"},showSortMenu:function(t){Promise.all([Promise.resolve().then(r.bind(r,90914)),r.e(2987).then(r.bind(r,82987))]).then((function(e){var r=function(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var a,n,i=[],o=!0,s=!1;try{for(r=r.call(t);!(o=(a=r.next()).done)&&(i.push(a.value),!e||i.length!==e);o=!0);}catch(t){s=!0,n=t}finally{try{o||null==r.return||r.return()}finally{if(s)throw n}}return i}}(t,e)||function(t,e){if(t){if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(e,1)[0].default;function a(){var e=this.value;if(this.checked){var r=t.query.SortBy!=e;t.query.SortBy=e.replace("_",","),t.query.StartIndex=0,t.callback&&r&&t.callback()}}function o(){var e=this.value;if(this.checked){var r=t.query.SortOrder!=e;t.query.SortOrder=e,t.query.StartIndex=0,t.callback&&r&&t.callback()}}var s=r.createDialog({removeOnClose:!0,modal:!1,entryAnimationDuration:160,exitAnimationDuration:200});s.classList.add("ui-body-a"),s.classList.add("background-theme-a"),s.classList.add("formDialog");var l,u,c,d="";for(d+='<div style="margin:0;padding:1.25em 1.5em 1.5em;">',d+='<h2 style="margin:0 0 .5em;">',d+=n.ZP.translate("HeaderSortBy"),d+="</h2>",d+="<div>",l=0,u=t.items.length;l<u;l++){var y=t.items[l],b=y.id.replace(",","_");c=(t.query.SortBy||"").replace(",","_")==b?" checked":"",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortBy" data-id="'+y.id+'" value="'+b+'" class="menuSortBy" '+c+" /><span>"+y.name+"</span></label>"}d+="</div>",d+='<h2 style="margin: 1em 0 .5em;">',d+=n.ZP.translate("HeaderSortOrder"),d+="</h2>",d+="<div>",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Ascending" class="menuSortOrder" '+(c="Ascending"==t.query.SortOrder?" checked":"")+" /><span>"+n.ZP.translate("Ascending")+"</span></label>",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Descending" class="menuSortOrder" '+(c="Descending"==t.query.SortOrder?" checked":"")+" /><span>"+n.ZP.translate("Descending")+"</span></label>",d+="</div>",d+="</div>",s.innerHTML=d,r.open(s);var h=s.querySelectorAll(".menuSortBy");for(l=0,u=h.length;l<u;l++)h[l].addEventListener("change",a);var v=s.querySelectorAll(".menuSortOrder");for(l=0,u=v.length;l<u;l++)v[l].addEventListener("change",o)}))}};window.LibraryBrowser=o,e.ZP=o}}]);