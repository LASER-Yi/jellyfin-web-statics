"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[35508],{12658:function(t,e,a){a.d(e,{w:function(){return f}}),a(23938),a(61013),a(27471),a(19068),a(87211),a(25901),a(92189),a(63238),a(95163),a(99785),a(91047),a(5769),a(17460),a(14078);var r=a(34643),n=a(30325),i=a(72365),o=a(94994);function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var a=0;a<e.length;a++){var r=e[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,n=function(t,e){if("object"!==l(t)||null===t)return t;var a=t[Symbol.toPrimitive];if(void 0!==a){var r=a.call(t,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===l(n)?n:String(n)),r)}var n}a(61414);var u="alphaPickerButton-selected";function c(){var t=this.querySelector(".".concat(u));t?r.Z.focus(t):r.Z.autoFocus(this,!0)}function d(t){var e="alphaPickerButton";return n.Z.tv&&(e+=" alphaPickerButton-tv"),t&&(e+=" alphaPickerButton-vertical"),e}function v(t,e){return t.map((function(t){return function(t,e){return'<button data-value="'.concat(t,'" class="').concat(d(e),'">').concat(t,"</button>")}(t,e)}))}var f=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var a=this;this.options=e;var r,l,s,u,f=e.element,h=e.itemsContainer,m=e.itemClass;function y(){l=null,a.value(r)}function p(){if(u=null,document.activeElement===s){var t=s.getAttribute("data-value");a.value(t,!0)}}function b(t){var e=i.ZP.parentWithClass(t.target,"alphaPickerButton");if(e){var a=e.getAttribute("data-value");f.dispatchEvent(new CustomEvent("alphavalueclicked",{cancelable:!1,detail:{value:a}}))}}function g(t){var e=i.ZP.parentWithClass(t.target,"alphaPickerButton");if(e){var a=e.getAttribute("data-value");(this._currentValue||"").toUpperCase()===a.toUpperCase()?this.value(null,!0):this.value(a,!0)}}function S(t){u&&(clearTimeout(u),u=null);var e=i.ZP.parentWithClass(t.target,"alphaPickerButton");e&&(s=e,u=setTimeout(p,600))}function P(t){var e=i.ZP.parentWithClass(t.target,m);if(e){var a=e.getAttribute("data-prefix");a&&a.length&&(r=a[0],l&&clearTimeout(l),l=setTimeout(y,100))}}this.enabled=function(t){t?(h&&h.addEventListener("focus",P,!0),"keyboard"===e.mode&&f.addEventListener("click",b),"click"!==e.valueChangeEvent?f.addEventListener("focus",S,!0):f.addEventListener("click",g.bind(this))):(h&&h.removeEventListener("focus",P,!0),f.removeEventListener("click",b),f.removeEventListener("focus",S,!0),f.removeEventListener("click",g.bind(this)))},function(t,e){t.classList.add("alphaPicker"),n.Z.tv&&t.classList.add("alphaPicker-tv");var a=t.classList.contains("alphaPicker-vertical");a||t.classList.add("focuscontainer-x");var r,i="",l=d(a),s="alphaPickerRow";a&&(s+=" alphaPickerRow-vertical"),i+='<div class="'.concat(s,'">'),"keyboard"===e.mode?i+='<button data-value=" " is="paper-icon-button-light" class="'.concat(l,'" aria-label="').concat(o.ZP.translate("ButtonSpace"),'"><span class="material-icons alphaPickerButtonIcon space_bar" aria-hidden="true"></span></button>'):i+=v(r=["#"],a).join(""),i+=v(r=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],a).join(""),"keyboard"===e.mode?(i+='<button data-value="backspace" is="paper-icon-button-light" class="'.concat(l,'" aria-label="').concat(o.ZP.translate("ButtonBackspace"),'"><span class="material-icons alphaPickerButtonIcon backspace" aria-hidden="true"></span></button>'),i+="</div>",r=["0","1","2","3","4","5","6","7","8","9"],i+='<div class="'.concat(s,'">'),i+="<br/>",i+=v(r,a).join(""),i+="</div>"):i+="</div>",t.innerHTML=i,t.classList.add("focusable"),t.focus=c}(f,e),this.enabled(!0),this.visible(!0)}var e,a;return e=t,(a=[{key:"value",value:function(t,e){var a,r,n=this.options.element;if(void 0!==t)if(null!=t){if(t=t.toUpperCase(),this._currentValue=t,"keyboard"!==this.options.mode){r=n.querySelector(".".concat(u));try{a=n.querySelector(".alphaPickerButton[data-value='".concat(t,"']"))}catch(t){console.error("error in querySelector:",t)}a&&a!==r&&a.classList.add(u),r&&r!==a&&r.classList.remove(u)}}else this._currentValue=t,(r=n.querySelector(".".concat(u)))&&r.classList.remove(u);return e&&n.dispatchEvent(new CustomEvent("alphavaluechanged",{cancelable:!1,detail:{value:t}})),this._currentValue}},{key:"on",value:function(t,e){this.options.element.addEventListener(t,e)}},{key:"off",value:function(t,e){this.options.element.removeEventListener(t,e)}},{key:"updateControls",value:function(t){t.NameLessThan?this.value("#"):this.value(t.NameStartsWith),this.visible(-1!==t.SortBy.indexOf("SortName"))}},{key:"visible",value:function(t){this.options.element.style.visibility=t?"visible":"hidden"}},{key:"values",value:function(){for(var t=this.options.element.querySelectorAll(".alphaPickerButton"),e=[],a=0,r=t.length;a<r;a++)e.push(t[a].getAttribute("data-value"));return e}},{key:"focus",value:function(){var t=this.options.element;r.Z.autoFocus(t,!0)}},{key:"destroy",value:function(){var t=this.options.element;this.enabled(!1),t.classList.remove("focuscontainer-x"),this.options=null}}])&&s(e.prototype,a),Object.defineProperty(e,"prototype",{writable:!1}),t}();e.Z=f},35508:function(t,e,a){a.r(e),a.d(e,{default:function(){return h}}),a(5769),a(63238),a(61418),a(17460),a(14078),a(72410),a(15610),a(52077),a(25901),a(92189),a(91047);var r=a(28540),n=a(60934),i=a(92609),o=a(12658),l=a(63873),s=a(61570),u=a(94994),c=a(81643),d=a(48957);function v(t,e){var a="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!a){if(Array.isArray(t)||(a=function(t,e){if(t){if("string"==typeof t)return f(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?f(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){a&&(t=a);var r=0,n=function(){};return{s:n,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,l=!1;return{s:function(){a=a.call(t)},n:function(){var t=a.next();return o=t.done,t},e:function(t){l=!0,i=t},f:function(){try{o||null==a.return||a.return()}finally{if(l)throw i}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,r=new Array(e);a<e;a++)r[a]=t[a];return r}function h(t,e,f,h){var m=this,y=function(){"List"==m.getCurrentViewStyle()?(P.classList.add("vertical-list"),P.classList.remove("vertical-wrap")):(P.classList.remove("vertical-list"),P.classList.add("vertical-wrap")),P.innerHTML=""};function p(){return C=!0,r.ZP.show(),ApiClient.getItems(ApiClient.getCurrentUserId(),L)}function b(){ApiClient.getItem(ApiClient.getCurrentUserId(),e.topParentId).then((function(t){d.O.shuffle(t)}))}var g=function(t){var e;function o(){C||(n.libraryPageSize()>0&&(L.StartIndex+=L.Limit),P.refreshItems())}function l(){C||(n.libraryPageSize()>0&&(L.StartIndex=Math.max(0,L.StartIndex-L.Limit)),P.refreshItems())}window.scrollTo(0,0),null===(e=m.alphaPicker)||void 0===e||e.updateControls(L);var s,u=i.ZP.getQueryPagingHtml({startIndex:L.StartIndex,limit:L.Limit,totalRecordCount:t.TotalRecordCount,showLimit:!1,updatePageSizeSetting:!1,addLayoutButton:!1,sortButton:!1,filterButton:!1}),c=v(f.querySelectorAll(".paging"));try{for(c.s();!(s=c.n()).done;)s.value.innerHTML=u}catch(t){c.e(t)}finally{c.f()}var d,h=v(f.querySelectorAll(".btnNextPage"));try{for(h.s();!(d=h.n()).done;)d.value.addEventListener("click",o)}catch(t){h.e(t)}finally{h.f()}var y,p=v(f.querySelectorAll(".btnPreviousPage"));try{for(p.s();!(y=p.n()).done;)y.value.addEventListener("click",l)}catch(t){p.e(t)}finally{p.f()}f.querySelector(".btnShuffle").classList.toggle("hide",t.TotalRecordCount<1),C=!1,r.ZP.hide(),Promise.resolve().then(a.bind(a,87680)).then((function(t){t.default.autoFocus(f)}))},S=function(t){var e=m.getCurrentViewStyle();return"Thumb"==e?s.default.getCardsHtml({items:t,shape:"backdrop",preferThumb:!0,context:"movies",lazy:!0,overlayPlayButton:!0,showTitle:!0,showYear:!0,centerText:!0}):"ThumbCard"==e?s.default.getCardsHtml({items:t,shape:"backdrop",preferThumb:!0,context:"movies",lazy:!0,cardLayout:!0,showTitle:!0,showYear:!0,centerText:!0}):"Banner"==e?s.default.getCardsHtml({items:t,shape:"banner",preferBanner:!0,context:"movies",lazy:!0}):"List"==e?l.Z.getListViewHtml({items:t,context:"movies",sortBy:L.SortBy}):"PosterCard"==e?s.default.getCardsHtml({items:t,shape:"portrait",context:"movies",showTitle:!0,showYear:!0,centerText:!0,lazy:!0,cardLayout:!0}):s.default.getCardsHtml({items:t,shape:"portrait",context:"movies",overlayPlayButton:!0,showTitle:!0,showYear:!0,centerText:!0})},P=f.querySelector(".itemsContainer"),k=e.topParentId+"-"+h.mode,w=k+"-view",L={SortBy:"SortName,ProductionYear",SortOrder:"Ascending",IncludeItemTypes:"Movie",Recursive:!0,Fields:"PrimaryImageAspectRatio,MediaSourceCount,BasicSyncInfo",ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb",StartIndex:0,ParentId:e.topParentId};n.libraryPageSize()>0&&(L.Limit=n.libraryPageSize());var C=!1;"favorites"===h.mode&&(L.IsFavorite=!0),L=n.loadQuerySettings(k,L),this.showFilterMenu=function(){a.e(3751).then(a.bind(a,3751)).then((function(t){var e=new(0,t.default)({query:L,mode:"movies",serverId:ApiClient.serverId()});c.Z.on(e,"filterchange",(function(){L.StartIndex=0,P.refreshItems()})),e.show()}))},this.getCurrentViewStyle=function(){return n.get(w)||"Poster"},this.initTab=function(){!function(t){P.fetchData=p,P.getItemsHtml=S,P.afterRefresh=g;var e=t.querySelector(".alphaPicker");e&&(e.addEventListener("alphavaluechanged",(function(t){var e=t.detail.value;"#"===e?(L.NameLessThan="A",delete L.NameStartsWith):(L.NameStartsWith=e,delete L.NameLessThan),L.StartIndex=0,P.refreshItems()})),m.alphaPicker=new o.w({element:e,valueChangeEvent:"click"}),t.querySelector(".alphaPicker").classList.add("alphabetPicker-right"),e.classList.add("alphaPicker-fixed-right"),P.classList.add("padded-right-withalphapicker"));var a=t.querySelector(".btnFilter");a&&a.addEventListener("click",(function(){m.showFilterMenu()}));var r=t.querySelector(".btnSort");r&&r.addEventListener("click",(function(t){i.ZP.showSortMenu({items:[{name:u.ZP.translate("Name"),id:"SortName,ProductionYear"},{name:u.ZP.translate("OptionRandom"),id:"Random"},{name:u.ZP.translate("OptionImdbRating"),id:"CommunityRating,SortName,ProductionYear"},{name:u.ZP.translate("OptionCriticRating"),id:"CriticRating,SortName,ProductionYear"},{name:u.ZP.translate("OptionDateAdded"),id:"DateCreated,SortName,ProductionYear"},{name:u.ZP.translate("OptionDatePlayed"),id:"DatePlayed,SortName,ProductionYear"},{name:u.ZP.translate("OptionParentalRating"),id:"OfficialRating,SortName,ProductionYear"},{name:u.ZP.translate("OptionPlayCount"),id:"PlayCount,SortName,ProductionYear"},{name:u.ZP.translate("OptionReleaseDate"),id:"PremiereDate,SortName,ProductionYear"},{name:u.ZP.translate("Runtime"),id:"Runtime,SortName,ProductionYear"}],callback:function(){L.StartIndex=0,n.saveQuerySettings(k,L),P.refreshItems()},query:L,button:t.target})}));var l=t.querySelector(".btnSelectView");l.addEventListener("click",(function(t){i.ZP.showLayoutMenu(t.target,m.getCurrentViewStyle(),"Banner,List,Poster,PosterCard,Thumb,ThumbCard".split(","))})),l.addEventListener("layoutchange",(function(t){var e=t.detail.viewStyle;n.set(w,e),L.StartIndex=0,y(),P.refreshItems()})),t.querySelector(".btnShuffle").addEventListener("click",b)}(f),y()},this.renderTab=function(){var t;P.refreshItems(),null===(t=m.alphaPicker)||void 0===t||t.updateControls(L)},this.destroy=function(){P=null}}a(82427)},92609:function(t,e,a){a(25901),a(92189),a(91047),a(72410),a(15610),a(5769),a(48410),a(61013),a(63238),a(61418),a(17460),a(14078),a(52077),a(911);var r=a(60934),n=a(94994);function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,r=new Array(e);a<e;a++)r[a]=t[a];return r}var o={getSavedQueryKey:function(t){return window.location.href.split("#")[0]+(t||"")},loadSavedQueryValues:function(t,e){var a=r.get(t);return a?(a=JSON.parse(a),Object.assign(e,a)):e},saveQueryValues:function(t,e){var a={};e.SortBy&&(a.SortBy=e.SortBy),e.SortOrder&&(a.SortOrder=e.SortOrder),r.set(t,JSON.stringify(a))},saveViewSetting:function(t,e){r.set(t+"-_view",e)},getSavedView:function(t){return r.get(t+"-_view")},showLayoutMenu:function(t,e,r){var i=!0;r||(i=!1,r=(r=t.getAttribute("data-layouts"))?r.split(","):["List","Poster","PosterCard","Thumb","ThumbCard"]);var o=r.map((function(t){return{name:n.ZP.translate(t),id:t,selected:e==t}}));a.e(12801).then(a.bind(a,12801)).then((function(e){e.default.show({items:o,positionTo:t,callback:function(e){t.dispatchEvent(new CustomEvent("layoutchange",{detail:{viewStyle:e},bubbles:!0,cancelable:!1})),!i&&window.$&&$(t).trigger("layoutchange",[e])}})}))},getQueryPagingHtml:function(t){var e=t.startIndex,a=t.limit,r=t.totalRecordCount,i="",o=r?e+1:0,l=a?Math.min(e+a,r):r,s=a>0&&a<r;return i+='<div class="listPaging">',i+='<span style="vertical-align:middle;">',i+=n.ZP.translate("ListPaging",o,l,r),i+="</span>",(s||t.viewButton||t.filterButton||t.sortButton||t.addLayoutButton)&&(i+='<div style="display:inline-block;">',s&&(i+='<button is="paper-icon-button-light" class="btnPreviousPage autoSize" '+(e?"":"disabled")+'><span class="material-icons arrow_back" aria-hidden="true"></span></button>',i+='<button is="paper-icon-button-light" class="btnNextPage autoSize" '+(e+a>=r?"disabled":"")+'><span class="material-icons arrow_forward" aria-hidden="true"></span></button>'),t.addLayoutButton&&(i+='<button is="paper-icon-button-light" title="'+n.ZP.translate("ButtonSelectView")+'" class="btnChangeLayout autoSize" data-layouts="'+(t.layouts||"")+'" onclick="LibraryBrowser.showLayoutMenu(this, \''+(t.currentLayout||"")+'\');"><span class="material-icons view_comfy" aria-hidden="true"></span></button>'),t.sortButton&&(i+='<button is="paper-icon-button-light" class="btnSort autoSize" title="'+n.ZP.translate("Sort")+'"><span class="material-icons sort_by_alpha" aria-hidden="true"></span></button>'),t.filterButton&&(i+='<button is="paper-icon-button-light" class="btnFilter autoSize" title="'+n.ZP.translate("Filter")+'"><span class="material-icons filter_list" aria-hidden="true"></span></button>'),i+="</div>"),i+"</div>"},showSortMenu:function(t){Promise.all([Promise.resolve().then(a.bind(a,93355)),a.e(92144).then(a.bind(a,92144))]).then((function(e){var a=function(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var a=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=a){var r,n,i,o,l=[],s=!0,u=!1;try{if(i=(a=a.call(t)).next,0===e){if(Object(a)!==a)return;s=!1}else for(;!(s=(r=i.call(a)).done)&&(l.push(r.value),l.length!==e);s=!0);}catch(t){u=!0,n=t}finally{try{if(!s&&null!=a.return&&(o=a.return(),Object(o)!==o))return}finally{if(u)throw n}}return l}}(t,e)||function(t,e){if(t){if("string"==typeof t)return i(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?i(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(e,1)[0].default;function r(){var e=this.value;if(this.checked){var a=t.query.SortBy!=e;t.query.SortBy=e.replace("_",","),t.query.StartIndex=0,t.callback&&a&&t.callback()}}function o(){var e=this.value;if(this.checked){var a=t.query.SortOrder!=e;t.query.SortOrder=e,t.query.StartIndex=0,t.callback&&a&&t.callback()}}var l=a.createDialog({removeOnClose:!0,modal:!1,entryAnimationDuration:160,exitAnimationDuration:200});l.classList.add("ui-body-a"),l.classList.add("background-theme-a"),l.classList.add("formDialog");var s,u,c,d="";for(d+='<div style="margin:0;padding:1.25em 1.5em 1.5em;">',d+='<h2 style="margin:0 0 .5em;">',d+=n.ZP.translate("HeaderSortBy"),d+="</h2>",d+="<div>",s=0,u=t.items.length;s<u;s++){var v=t.items[s],f=v.id.replace(",","_");c=(t.query.SortBy||"").replace(",","_")==f?" checked":"",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortBy" data-id="'+v.id+'" value="'+f+'" class="menuSortBy" '+c+" /><span>"+v.name+"</span></label>"}d+="</div>",d+='<h2 style="margin: 1em 0 .5em;">',d+=n.ZP.translate("HeaderSortOrder"),d+="</h2>",d+="<div>",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Ascending" class="menuSortOrder" '+(c="Ascending"==t.query.SortOrder?" checked":"")+" /><span>"+n.ZP.translate("Ascending")+"</span></label>",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Descending" class="menuSortOrder" '+(c="Descending"==t.query.SortOrder?" checked":"")+" /><span>"+n.ZP.translate("Descending")+"</span></label>",d+="</div>",d+="</div>",l.innerHTML=d,a.open(l);var h=l.querySelectorAll(".menuSortBy");for(s=0,u=h.length;s<u;s++)h[s].addEventListener("change",r);var m=l.querySelectorAll(".menuSortOrder");for(s=0,u=m.length;s<u;s++)m[s].addEventListener("change",o)}))}};window.LibraryBrowser=o,e.ZP=o}}]);