"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[41236],{35115:function(t,e,r){r.r(e),r.d(e,{default:function(){return y}}),r(44962),r(29305),r(32733),r(84701),r(69892),r(89336),r(78557),r(90076),r(95021),r(73687),r(83994),r(82367);var n=r(8566),a=r(94592),i=r(76542),o=r(6940),l=r(24468),s=r(82885),u=r(5898);function c(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return d(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return o=t.done,t},e:function(t){l=!0,i=t},f:function(){try{o||null==r.return||r.return()}finally{if(l)throw i}}}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function y(t,e,d){var y=this;function m(){var t=v(),r=g[t];return r||(r=g[t]={query:{SortBy:"SortName",SortOrder:"Ascending",IncludeItemTypes:"BoxSet",Recursive:!0,Fields:"PrimaryImageAspectRatio,SortName",ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb",StartIndex:0},view:s.getSavedView(t)||"Poster"},s.libraryPageSize()>0&&(r.query.Limit=s.libraryPageSize()),r.query.ParentId=e.topParentId,s.loadQuerySettings(t,r.query)),r}function f(){return m().query}function v(){return e.topParentId+"-moviecollections"}var h=function(){var t=y.getCurrentViewStyle(),e=d.querySelector(".itemsContainer");"List"==t?(e.classList.add("vertical-list"),e.classList.remove("vertical-wrap")):(e.classList.remove("vertical-list"),e.classList.add("vertical-wrap")),e.innerHTML=""},b=function(t){n.Ay.show(),p=!0;var e=f();ApiClient.getItems(ApiClient.getCurrentUserId(),e).then((function(m){function f(){p||(s.libraryPageSize()>0&&(e.StartIndex+=e.Limit),b(d))}function h(){p||(s.libraryPageSize()>0&&(e.StartIndex=Math.max(0,e.StartIndex-e.Limit)),b(d))}var g;window.scrollTo(0,0);var S=a.Ay.getQueryPagingHtml({startIndex:e.StartIndex,limit:e.Limit,totalRecordCount:m.TotalRecordCount,showLimit:!1,updatePageSizeSetting:!1,addLayoutButton:!1,sortButton:!1,filterButton:!1}),w=y.getCurrentViewStyle();g="Thumb"==w?l.default.getCardsHtml({items:m.Items,shape:"backdrop",preferThumb:!0,context:"movies",overlayPlayButton:!0,centerText:!0,showTitle:!0}):"ThumbCard"==w?l.default.getCardsHtml({items:m.Items,shape:"backdrop",preferThumb:!0,context:"movies",lazy:!0,cardLayout:!0,showTitle:!0}):"Banner"==w?l.default.getCardsHtml({items:m.Items,shape:"banner",preferBanner:!0,context:"movies",lazy:!0}):"List"==w?o.A.getListViewHtml({items:m.Items,context:"movies",sortBy:e.SortBy}):"PosterCard"==w?l.default.getCardsHtml({items:m.Items,shape:"auto",context:"movies",showTitle:!0,centerText:!1,cardLayout:!0}):l.default.getCardsHtml({items:m.Items,shape:"auto",context:"movies",centerText:!0,overlayPlayButton:!0,showTitle:!0});var A,L=d.querySelectorAll(".paging"),I=c(L);try{for(I.s();!(A=I.n()).done;)A.value.innerHTML=S}catch(t){I.e(t)}finally{I.f()}var C,P=c(L=d.querySelectorAll(".btnNextPage"));try{for(P.s();!(C=P.n()).done;)C.value.addEventListener("click",f)}catch(t){P.e(t)}finally{P.f()}var k,B=c(L=d.querySelectorAll(".btnPreviousPage"));try{for(B.s();!(k=B.n()).done;)k.value.addEventListener("click",h)}catch(t){B.e(t)}finally{B.f()}m.Items.length||(g="",g+='<div class="noItemsMessage centerMessage">',g+="<h1>"+u.Ay.translate("MessageNothingHere")+"</h1>",g+="<p>"+u.Ay.translate("MessageNoCollectionsAvailable")+"</p>",g+="</div>");var T=d.querySelector(".itemsContainer");T.innerHTML=g,i.default.lazyChildren(T),s.saveQuerySettings(v(),e),n.Ay.hide(),p=!1,Promise.resolve().then(r.bind(r,84069)).then((function(e){e.default.autoFocus(t)}))}))},g={},p=!1;this.getCurrentViewStyle=function(){return m().view},function(t){t.querySelector(".btnSort").addEventListener("click",(function(e){a.Ay.showSortMenu({items:[{name:u.Ay.translate("Name"),id:"SortName"},{name:u.Ay.translate("OptionCommunityRating"),id:"CommunityRating,SortName"},{name:u.Ay.translate("OptionDateAdded"),id:"DateCreated,SortName"},{name:u.Ay.translate("OptionParentalRating"),id:"OfficialRating,SortName"},{name:u.Ay.translate("OptionReleaseDate"),id:"PremiereDate,SortName"}],callback:function(){f().StartIndex=0,b(t)},query:f(),button:e.target})}));var e=t.querySelector(".btnSelectView");e.addEventListener("click",(function(t){a.Ay.showLayoutMenu(t.target,y.getCurrentViewStyle(),"List,Poster,PosterCard,Thumb,ThumbCard".split(","))})),e.addEventListener("layoutchange",(function(e){var r=e.detail.viewStyle;m().view=r,s.saveViewSetting(v(),r),f().StartIndex=0,h(),b(t)})),t.querySelector(".btnNewCollection").addEventListener("click",(function(){r.e(3380).then(r.bind(r,3380)).then((function(t){var e=t.default,r=ApiClient.serverInfo().Id;(new e).show({items:[],serverId:r})}))}))}(d),h(),this.renderTab=function(){b(d)}}r(1177)},94592:function(t,e,r){r(44962),r(29305),r(32733),r(84701),r(69892),r(86584),r(89336),r(78557),r(90076),r(95021),r(73687),r(83994),r(93062),r(82367);var n=r(5898);function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var i={showLayoutMenu:function(t,e,a){var i=!0;a||(i=!1,a=(a=t.getAttribute("data-layouts"))?a.split(","):["List","Poster","PosterCard","Thumb","ThumbCard"]);var o=a.map((function(t){return{name:n.Ay.translate(t),id:t,selected:e==t}}));r.e(62882).then(r.bind(r,62882)).then((function(e){e.default.show({items:o,positionTo:t,callback:function(e){t.dispatchEvent(new CustomEvent("layoutchange",{detail:{viewStyle:e},bubbles:!0,cancelable:!1})),!i&&window.$&&$(t).trigger("layoutchange",[e])}})}))},getQueryPagingHtml:function(t){var e=t.startIndex,r=t.limit,a=t.totalRecordCount,i="",o=a?e+1:0,l=r?Math.min(e+r,a):a,s=r>0&&r<a;return i+='<div class="listPaging">',i+='<span style="vertical-align:middle;">',i+=n.Ay.translate("ListPaging",o,l,a),i+="</span>",(s||t.viewButton||t.filterButton||t.sortButton||t.addLayoutButton)&&(i+='<div style="display:inline-block;">',s&&(i+='<button is="paper-icon-button-light" class="btnPreviousPage autoSize" '+(e?"":"disabled")+'><span class="material-icons arrow_back" aria-hidden="true"></span></button>',i+='<button is="paper-icon-button-light" class="btnNextPage autoSize" '+(e+r>=a?"disabled":"")+'><span class="material-icons arrow_forward" aria-hidden="true"></span></button>'),t.addLayoutButton&&(i+='<button is="paper-icon-button-light" title="'+n.Ay.translate("ButtonSelectView")+'" class="btnChangeLayout autoSize" data-layouts="'+(t.layouts||"")+'" onclick="LibraryBrowser.showLayoutMenu(this, \''+(t.currentLayout||"")+'\');"><span class="material-icons view_comfy" aria-hidden="true"></span></button>'),t.sortButton&&(i+='<button is="paper-icon-button-light" class="btnSort autoSize" title="'+n.Ay.translate("Sort")+'"><span class="material-icons sort_by_alpha" aria-hidden="true"></span></button>'),t.filterButton&&(i+='<button is="paper-icon-button-light" class="btnFilter autoSize" title="'+n.Ay.translate("Filter")+'"><span class="material-icons filter_list" aria-hidden="true"></span></button>'),i+="</div>"),i+"</div>"},showSortMenu:function(t){Promise.all([Promise.resolve().then(r.bind(r,79754)),r.e(81613).then(r.bind(r,81613))]).then((function(e){var r,i,o=(r=e,i=1,function(t){if(Array.isArray(t))return t}(r)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,a,i,o,l=[],s=!0,u=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=i.call(r)).done)&&(l.push(n.value),l.length!==e);s=!0);}catch(t){u=!0,a=t}finally{try{if(!s&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(u)throw a}}return l}}(r,i)||function(t,e){if(t){if("string"==typeof t)return a(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,e):void 0}}(r,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0].default;function l(){var e=this.value;if(this.checked){var r=t.query.SortBy!=e;t.query.SortBy=e.replace("_",","),t.query.StartIndex=0,t.callback&&r&&t.callback()}}function s(){var e=this.value;if(this.checked){var r=t.query.SortOrder!=e;t.query.SortOrder=e,t.query.StartIndex=0,t.callback&&r&&t.callback()}}var u=o.createDialog({removeOnClose:!0,modal:!1,entryAnimationDuration:160,exitAnimationDuration:200});u.classList.add("ui-body-a"),u.classList.add("background-theme-a"),u.classList.add("formDialog");var c,d,y,m="";for(m+='<div style="margin:0;padding:1.25em 1.5em 1.5em;">',m+='<h2 style="margin:0 0 .5em;">',m+=n.Ay.translate("HeaderSortBy"),m+="</h2>",m+="<div>",c=0,d=t.items.length;c<d;c++){var f=t.items[c],v=f.id.replace(",","_");y=(t.query.SortBy||"").replace(",","_")==v?" checked":"",m+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortBy" data-id="'+f.id+'" value="'+v+'" class="menuSortBy" '+y+" /><span>"+f.name+"</span></label>"}m+="</div>",m+='<h2 style="margin: 1em 0 .5em;">',m+=n.Ay.translate("HeaderSortOrder"),m+="</h2>",m+="<div>",m+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Ascending" class="menuSortOrder" '+(y="Ascending"==t.query.SortOrder?" checked":"")+" /><span>"+n.Ay.translate("Ascending")+"</span></label>",m+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Descending" class="menuSortOrder" '+(y="Descending"==t.query.SortOrder?" checked":"")+" /><span>"+n.Ay.translate("Descending")+"</span></label>",m+="</div>",m+="</div>",u.innerHTML=m,o.open(u);var h=u.querySelectorAll(".menuSortBy");for(c=0,d=h.length;c<d;c++)h[c].addEventListener("change",l);var b=u.querySelectorAll(".menuSortOrder");for(c=0,d=b.length;c<d;c++)b[c].addEventListener("change",s)}))}};window.LibraryBrowser=i,e.Ay=i}}]);