"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5523],{28718:function(e,t,r){r.r(t),r.d(t,{default:function(){return s}}),r(5769),r(63238),r(61418),r(17460),r(14078),r(52077),r(72482);var n=r(2587),a=r(61097),i=r(91081),o=r(6594);function s(e,t,s){var l=this;function u(){var e=d(),r=m[e];return r||((r=m[e]={query:{SortBy:"SortName",SortOrder:"Ascending",Recursive:!0,Fields:"PrimaryImageAspectRatio,ItemCounts",StartIndex:0},view:n.ZP.getSavedView(e)||"Poster"}).query.ParentId=t.topParentId,n.ZP.loadSavedQueryValues(e,r.query)),r}function c(){return u().query}function d(){return n.ZP.getSavedQueryKey("genres")}var y,m={};this.getViewStyles=function(){return"Poster,PosterCard,Thumb,ThumbCard".split(",")},this.getCurrentViewStyle=function(){return u().view},this.setCurrentViewStyle=function(e){u().view=e,n.ZP.saveViewSetting(d(),e),function(){this.preRender(),this.renderTab()}()},this.enableViewSelection=!0,this.preRender=function(){y=function(){o.ZP.show();var e=c();return ApiClient.getGenres(ApiClient.getCurrentUserId(),e)}()},this.renderTab=function(){!function(e,t){var s=c();t.then((function(t){var u="",c=l.getCurrentViewStyle();"Thumb"==c?u=a.default.getCardsHtml({items:t.Items,shape:"backdrop",preferThumb:!0,context:"music",centerText:!0,overlayMoreButton:!0,showTitle:!0}):"ThumbCard"==c?u=a.default.getCardsHtml({items:t.Items,shape:"backdrop",preferThumb:!0,context:"music",cardLayout:!0,showTitle:!0}):"PosterCard"==c?u=a.default.getCardsHtml({items:t.Items,shape:"auto",context:"music",cardLayout:!0,showTitle:!0}):"Poster"==c&&(u=a.default.getCardsHtml({items:t.Items,shape:"auto",context:"music",centerText:!0,overlayMoreButton:!0,showTitle:!0}));var y=e.querySelector("#items");y.innerHTML=u,i.default.lazyChildren(y),n.ZP.saveQueryValues(d(),s),o.ZP.hide(),Promise.resolve().then(r.bind(r,6610)).then((function(t){t.default.autoFocus(e)}))}))}(s,y)}}},2587:function(e,t,r){r(25901),r(92189),r(91047),r(72410),r(15610),r(5769),r(52077),r(72482),r(48410),r(61013),r(63238),r(61418),r(17460),r(14078),r(911);var n=r(28978),a=r(53754);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var o={getSavedQueryKey:function(e){return window.location.href.split("#")[0]+(e||"")},loadSavedQueryValues:function(e,t){var r=n.get(e);return r?(r=JSON.parse(r),Object.assign(t,r)):t},saveQueryValues:function(e,t){var r={};t.SortBy&&(r.SortBy=t.SortBy),t.SortOrder&&(r.SortOrder=t.SortOrder),n.set(e,JSON.stringify(r))},saveViewSetting:function(e,t){n.set(e+"-_view",t)},getSavedView:function(e){return n.get(e+"-_view")},showLayoutMenu:function(e,t,n){var i=!0;n||(i=!1,n=(n=e.getAttribute("data-layouts"))?n.split(","):["List","Poster","PosterCard","Thumb","ThumbCard"]);var o=n.map((function(e){return{name:a.ZP.translate(e),id:e,selected:t==e}}));Promise.resolve().then(r.bind(r,32465)).then((function(t){t.default.show({items:o,positionTo:e,callback:function(t){e.dispatchEvent(new CustomEvent("layoutchange",{detail:{viewStyle:t},bubbles:!0,cancelable:!1})),i||window.$&&$(e).trigger("layoutchange",[t])}})}))},getQueryPagingHtml:function(e){var t=e.startIndex,r=e.limit,n=e.totalRecordCount,i="",o=Math.min(t+r,n),s=r<n;return i+='<div class="listPaging">',s&&(i+='<span style="vertical-align:middle;">',i+=a.ZP.translate("ListPaging",n?t+1:0,o,n),i+="</span>"),(s||e.viewButton||e.filterButton||e.sortButton||e.addLayoutButton)&&(i+='<div style="display:inline-block;">',s&&(i+='<button is="paper-icon-button-light" class="btnPreviousPage autoSize" '+(t?"":"disabled")+'><span class="material-icons arrow_back"></span></button>',i+='<button is="paper-icon-button-light" class="btnNextPage autoSize" '+(t+r>=n?"disabled":"")+'><span class="material-icons arrow_forward"></span></button>'),e.addLayoutButton&&(i+='<button is="paper-icon-button-light" title="'+a.ZP.translate("ButtonSelectView")+'" class="btnChangeLayout autoSize" data-layouts="'+(e.layouts||"")+'" onclick="LibraryBrowser.showLayoutMenu(this, \''+(e.currentLayout||"")+'\');"><span class="material-icons view_comfy"></span></button>'),e.sortButton&&(i+='<button is="paper-icon-button-light" class="btnSort autoSize" title="'+a.ZP.translate("Sort")+'"><span class="material-icons sort_by_alpha"></span></button>'),e.filterButton&&(i+='<button is="paper-icon-button-light" class="btnFilter autoSize" title="'+a.ZP.translate("Filter")+'"><span class="material-icons filter_list"></span></button>'),i+="</div>"),i+"</div>"},showSortMenu:function(e){Promise.all([Promise.resolve().then(r.bind(r,1115)),r.e(1674).then(r.bind(r,21674))]).then((function(t){var r=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,i=[],o=!0,s=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);o=!0);}catch(e){s=!0,a=e}finally{try{o||null==r.return||r.return()}finally{if(s)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t,1)[0].default;function n(){var t=this.value;if(this.checked){var r=e.query.SortBy!=t;e.query.SortBy=t.replace("_",","),e.query.StartIndex=0,e.callback&&r&&e.callback()}}function o(){var t=this.value;if(this.checked){var r=e.query.SortOrder!=t;e.query.SortOrder=t,e.query.StartIndex=0,e.callback&&r&&e.callback()}}var s=r.createDialog({removeOnClose:!0,modal:!1,entryAnimationDuration:160,exitAnimationDuration:200});s.classList.add("ui-body-a"),s.classList.add("background-theme-a"),s.classList.add("formDialog");var l,u,c,d="";for(d+='<div style="margin:0;padding:1.25em 1.5em 1.5em;">',d+='<h2 style="margin:0 0 .5em;">',d+=a.ZP.translate("HeaderSortBy"),d+="</h2>",d+="<div>",l=0,u=e.items.length;l<u;l++){var y=e.items[l],m=y.id.replace(",","_");c=(e.query.SortBy||"").replace(",","_")==m?" checked":"",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortBy" data-id="'+y.id+'" value="'+m+'" class="menuSortBy" '+c+" /><span>"+y.name+"</span></label>"}d+="</div>",d+='<h2 style="margin: 1em 0 .5em;">',d+=a.ZP.translate("HeaderSortOrder"),d+="</h2>",d+="<div>",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Ascending" class="menuSortOrder" '+(c="Ascending"==e.query.SortOrder?" checked":"")+" /><span>"+a.ZP.translate("Ascending")+"</span></label>",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Descending" class="menuSortOrder" '+(c="Descending"==e.query.SortOrder?" checked":"")+" /><span>"+a.ZP.translate("Descending")+"</span></label>",d+="</div>",d+="</div>",s.innerHTML=d,r.open(s);var h=s.querySelectorAll(".menuSortBy");for(l=0,u=h.length;l<u;l++)h[l].addEventListener("change",n);var b=s.querySelectorAll(".menuSortOrder");for(l=0,u=b.length;l<u;l++)b[l].addEventListener("change",o)}))}};window.LibraryBrowser=o,t.ZP=o}}]);