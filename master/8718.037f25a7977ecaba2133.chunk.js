"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8718],{12658:function(t,e,a){a.d(e,{w:function(){return f}}),a(23938),a(61013),a(27471),a(19068),a(87211),a(25901),a(92189),a(63238),a(95163),a(99785),a(91047),a(5769),a(17460),a(14078);var n=a(34643),r=a(30325),i=a(72365),o=a(94994);function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==l(t)||null===t)return t;var a=t[Symbol.toPrimitive];if(void 0!==a){var n=a.call(t,"string");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===l(r)?r:String(r)),n)}var r}a(61414);var u="alphaPickerButton-selected";function c(){var t=this.querySelector(".".concat(u));t?n.Z.focus(t):n.Z.autoFocus(this,!0)}function d(t){var e="alphaPickerButton";return r.Z.tv&&(e+=" alphaPickerButton-tv"),t&&(e+=" alphaPickerButton-vertical"),e}function v(t,e){return t.map((function(t){return function(t,e){return'<button data-value="'.concat(t,'" class="').concat(d(e),'">').concat(t,"</button>")}(t,e)}))}var f=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var a=this;this.options=e;var n,l,s,u,f=e.element,y=e.itemsContainer,m=e.itemClass;function h(){l=null,a.value(n)}function p(){if(u=null,document.activeElement===s){var t=s.getAttribute("data-value");a.value(t,!0)}}function b(t){var e=i.ZP.parentWithClass(t.target,"alphaPickerButton");if(e){var a=e.getAttribute("data-value");f.dispatchEvent(new CustomEvent("alphavalueclicked",{cancelable:!1,detail:{value:a}}))}}function S(t){var e=i.ZP.parentWithClass(t.target,"alphaPickerButton");if(e){var a=e.getAttribute("data-value");(this._currentValue||"").toUpperCase()===a.toUpperCase()?this.value(null,!0):this.value(a,!0)}}function g(t){u&&(clearTimeout(u),u=null);var e=i.ZP.parentWithClass(t.target,"alphaPickerButton");e&&(s=e,u=setTimeout(p,600))}function P(t){var e=i.ZP.parentWithClass(t.target,m);if(e){var a=e.getAttribute("data-prefix");a&&a.length&&(n=a[0],l&&clearTimeout(l),l=setTimeout(h,100))}}this.enabled=function(t){t?(y&&y.addEventListener("focus",P,!0),"keyboard"===e.mode&&f.addEventListener("click",b),"click"!==e.valueChangeEvent?f.addEventListener("focus",g,!0):f.addEventListener("click",S.bind(this))):(y&&y.removeEventListener("focus",P,!0),f.removeEventListener("click",b),f.removeEventListener("focus",g,!0),f.removeEventListener("click",S.bind(this)))},function(t,e){t.classList.add("alphaPicker"),r.Z.tv&&t.classList.add("alphaPicker-tv");var a=t.classList.contains("alphaPicker-vertical");a||t.classList.add("focuscontainer-x");var n,i="",l=d(a),s="alphaPickerRow";a&&(s+=" alphaPickerRow-vertical"),i+='<div class="'.concat(s,'">'),"keyboard"===e.mode?i+='<button data-value=" " is="paper-icon-button-light" class="'.concat(l,'" aria-label="').concat(o.ZP.translate("ButtonSpace"),'"><span class="material-icons alphaPickerButtonIcon space_bar" aria-hidden="true"></span></button>'):i+=v(n=["#"],a).join(""),i+=v(n=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],a).join(""),"keyboard"===e.mode?(i+='<button data-value="backspace" is="paper-icon-button-light" class="'.concat(l,'" aria-label="').concat(o.ZP.translate("ButtonBackspace"),'"><span class="material-icons alphaPickerButtonIcon backspace" aria-hidden="true"></span></button>'),i+="</div>",n=["0","1","2","3","4","5","6","7","8","9"],i+='<div class="'.concat(s,'">'),i+="<br/>",i+=v(n,a).join(""),i+="</div>"):i+="</div>",t.innerHTML=i,t.classList.add("focusable"),t.focus=c}(f,e),this.enabled(!0),this.visible(!0)}var e,a;return e=t,(a=[{key:"value",value:function(t,e){var a,n,r=this.options.element;if(void 0!==t)if(null!=t){if(t=t.toUpperCase(),this._currentValue=t,"keyboard"!==this.options.mode){n=r.querySelector(".".concat(u));try{a=r.querySelector(".alphaPickerButton[data-value='".concat(t,"']"))}catch(t){console.error("error in querySelector:",t)}a&&a!==n&&a.classList.add(u),n&&n!==a&&n.classList.remove(u)}}else this._currentValue=t,(n=r.querySelector(".".concat(u)))&&n.classList.remove(u);return e&&r.dispatchEvent(new CustomEvent("alphavaluechanged",{cancelable:!1,detail:{value:t}})),this._currentValue}},{key:"on",value:function(t,e){this.options.element.addEventListener(t,e)}},{key:"off",value:function(t,e){this.options.element.removeEventListener(t,e)}},{key:"updateControls",value:function(t){t.NameLessThan?this.value("#"):this.value(t.NameStartsWith),this.visible(-1!==t.SortBy.indexOf("SortName"))}},{key:"visible",value:function(t){this.options.element.style.visibility=t?"visible":"hidden"}},{key:"values",value:function(){for(var t=this.options.element.querySelectorAll(".alphaPickerButton"),e=[],a=0,n=t.length;a<n;a++)e.push(t[a].getAttribute("data-value"));return e}},{key:"focus",value:function(){var t=this.options.element;n.Z.autoFocus(t,!0)}},{key:"destroy",value:function(){var t=this.options.element;this.enabled(!1),t.classList.remove("focuscontainer-x"),this.options=null}}])&&s(e.prototype,a),Object.defineProperty(e,"prototype",{writable:!1}),t}();e.Z=f},8718:function(t,e,a){a.r(e),a.d(e,{default:function(){return m}}),a(5769),a(63238),a(61418),a(17460),a(14078),a(72410),a(15610),a(52077),a(25901),a(92189),a(91047);var n=a(48957),r=a(28540),i=a(92609),o=a(98301),l=a(12658),s=a(63873),u=a(61570),c=a(60934),d=a(94994),v=a(81643);function f(t,e){var a="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!a){if(Array.isArray(t)||(a=function(t,e){if(t){if("string"==typeof t)return y(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?y(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){a&&(t=a);var n=0,r=function(){};return{s:r,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,l=!1;return{s:function(){a=a.call(t)},n:function(){var t=a.next();return o=t.done,t},e:function(t){l=!0,i=t},f:function(){try{o||null==a.return||a.return()}finally{if(l)throw i}}}}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}function m(t,e,y){var m=this;function h(){ApiClient.getItem(ApiClient.getCurrentUserId(),e.topParentId).then((function(t){n.O.play({items:[t]})}))}function p(){ApiClient.getItem(ApiClient.getCurrentUserId(),e.topParentId).then((function(t){S(),n.O.shuffle(t)}))}function b(){var t=g();return k||(k={query:{SortBy:"SortName",SortOrder:"Ascending",IncludeItemTypes:"MusicAlbum",Recursive:!0,Fields:"PrimaryImageAspectRatio,SortName,BasicSyncInfo",ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb",StartIndex:0},view:i.ZP.getSavedView(t)||"Poster"},c.libraryPageSize()>0&&(k.query.Limit=c.libraryPageSize()),k.query.ParentId=e.topParentId,i.ZP.loadSavedQueryValues(t,k.query)),k}function S(){return b().query}function g(){return P||(P=i.ZP.getSavedQueryKey("musicalbums")),P}var P,k,w=function(){var t=m.getCurrentViewStyle(),e=y.querySelector(".itemsContainer");"List"==t?(e.classList.add("vertical-list"),e.classList.remove("vertical-wrap")):(e.classList.remove("vertical-list"),e.classList.add("vertical-wrap")),e.innerHTML=""},L=function t(){r.ZP.show(),C=!0;var e=S();ApiClient.getItems(ApiClient.getCurrentUserId(),e).then((function(n){var l,d;function v(){C||(c.libraryPageSize()>0&&(e.StartIndex+=e.Limit),t())}function h(){C||(c.libraryPageSize()>0&&(e.StartIndex=Math.max(0,e.StartIndex-e.Limit)),t())}window.scrollTo(0,0),null===(l=m.alphaPicker)||void 0===l||l.updateControls(e);var p=i.ZP.getQueryPagingHtml({startIndex:e.StartIndex,limit:e.Limit,totalRecordCount:n.TotalRecordCount,showLimit:!1,updatePageSizeSetting:!1,addLayoutButton:!1,sortButton:!1,filterButton:!1}),b=m.getCurrentViewStyle();d="List"==b?s.Z.getListViewHtml({items:n.Items,context:"music",sortBy:e.SortBy,addToListButton:!0}):"PosterCard"==b?u.default.getCardsHtml({items:n.Items,shape:"square",context:"music",showTitle:!0,coverImage:!0,showParentTitle:!0,lazy:!0,cardLayout:!0}):u.default.getCardsHtml({items:n.Items,shape:"square",context:"music",showTitle:!0,showParentTitle:!0,lazy:!0,centerText:!0,overlayPlayButton:!0});var S,P=y.querySelectorAll(".paging"),k=f(P);try{for(k.s();!(S=k.n()).done;)S.value.innerHTML=p}catch(t){k.e(t)}finally{k.f()}var w,L=f(P=y.querySelectorAll(".btnNextPage"));try{for(L.s();!(w=L.n()).done;)w.value.addEventListener("click",v)}catch(t){L.e(t)}finally{L.f()}var A,B=f(P=y.querySelectorAll(".btnPreviousPage"));try{for(B.s();!(A=B.n()).done;)A.value.addEventListener("click",h)}catch(t){B.e(t)}finally{B.f()}var I=y.querySelector(".itemsContainer");I.innerHTML=d,o.default.lazyChildren(I),i.ZP.saveQueryValues(g(),e),r.ZP.hide(),C=!1,Promise.resolve().then(a.bind(a,87680)).then((function(t){t.default.autoFocus(y)}))}))},C=!1;this.showFilterMenu=function(){a.e(3751).then(a.bind(a,3751)).then((function(t){var e=new(0,t.default)({query:S(),mode:"albums",serverId:ApiClient.serverId()});v.Z.on(e,"filterchange",(function(){S().StartIndex=0,L()})),e.show()}))},this.getCurrentViewStyle=function(){return b().view},function(t){var e=t.querySelector(".alphaPicker"),a=t.querySelector(".itemsContainer");e.addEventListener("alphavaluechanged",(function(t){var e=t.detail.value,a=S();"#"===e?(a.NameLessThan="A",delete a.NameStartsWith):(a.NameStartsWith=e,delete a.NameLessThan),a.StartIndex=0,L()})),m.alphaPicker=new l.Z({element:e,valueChangeEvent:"click"}),t.querySelector(".alphaPicker").classList.add("alphabetPicker-right"),e.classList.add("alphaPicker-fixed-right"),a.classList.add("padded-right-withalphapicker"),t.querySelector(".btnFilter").addEventListener("click",(function(){m.showFilterMenu()})),t.querySelector(".btnSort").addEventListener("click",(function(t){i.ZP.showSortMenu({items:[{name:d.ZP.translate("Name"),id:"SortName"},{name:d.ZP.translate("AlbumArtist"),id:"AlbumArtist,SortName"},{name:d.ZP.translate("OptionCommunityRating"),id:"CommunityRating,SortName"},{name:d.ZP.translate("OptionCriticRating"),id:"CriticRating,SortName"},{name:d.ZP.translate("OptionDateAdded"),id:"DateCreated,SortName"},{name:d.ZP.translate("OptionReleaseDate"),id:"ProductionYear,PremiereDate,SortName"},{name:d.ZP.translate("OptionRandom"),id:"Random,SortName"}],callback:function(){S().StartIndex=0,L()},query:S(),button:t.target})}));var n=t.querySelector(".btnSelectView");n.addEventListener("click",(function(t){i.ZP.showLayoutMenu(t.target,m.getCurrentViewStyle(),"List,Poster,PosterCard".split(","))})),n.addEventListener("layoutchange",(function(t){var e=t.detail.viewStyle;b().view=e,i.ZP.saveViewSetting(g(),e),S().StartIndex=0,w(),L()})),t.querySelector(".btnPlayAll").addEventListener("click",h),t.querySelector(".btnShuffle").addEventListener("click",p)}(y),w(),this.renderTab=function(){var t;L(),null===(t=m.alphaPicker)||void 0===t||t.updateControls(S())}}a(82427)},92609:function(t,e,a){a(25901),a(92189),a(91047),a(72410),a(15610),a(5769),a(48410),a(61013),a(63238),a(61418),a(17460),a(14078),a(52077),a(911);var n=a(60934),r=a(94994);function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}var o={getSavedQueryKey:function(t){return window.location.href.split("#")[0]+(t||"")},loadSavedQueryValues:function(t,e){var a=n.get(t);return a?(a=JSON.parse(a),Object.assign(e,a)):e},saveQueryValues:function(t,e){var a={};e.SortBy&&(a.SortBy=e.SortBy),e.SortOrder&&(a.SortOrder=e.SortOrder),n.set(t,JSON.stringify(a))},saveViewSetting:function(t,e){n.set(t+"-_view",e)},getSavedView:function(t){return n.get(t+"-_view")},showLayoutMenu:function(t,e,n){var i=!0;n||(i=!1,n=(n=t.getAttribute("data-layouts"))?n.split(","):["List","Poster","PosterCard","Thumb","ThumbCard"]);var o=n.map((function(t){return{name:r.ZP.translate(t),id:t,selected:e==t}}));a.e(12801).then(a.bind(a,12801)).then((function(e){e.default.show({items:o,positionTo:t,callback:function(e){t.dispatchEvent(new CustomEvent("layoutchange",{detail:{viewStyle:e},bubbles:!0,cancelable:!1})),!i&&window.$&&$(t).trigger("layoutchange",[e])}})}))},getQueryPagingHtml:function(t){var e=t.startIndex,a=t.limit,n=t.totalRecordCount,i="",o=n?e+1:0,l=a?Math.min(e+a,n):n,s=a>0&&a<n;return i+='<div class="listPaging">',i+='<span style="vertical-align:middle;">',i+=r.ZP.translate("ListPaging",o,l,n),i+="</span>",(s||t.viewButton||t.filterButton||t.sortButton||t.addLayoutButton)&&(i+='<div style="display:inline-block;">',s&&(i+='<button is="paper-icon-button-light" class="btnPreviousPage autoSize" '+(e?"":"disabled")+'><span class="material-icons arrow_back" aria-hidden="true"></span></button>',i+='<button is="paper-icon-button-light" class="btnNextPage autoSize" '+(e+a>=n?"disabled":"")+'><span class="material-icons arrow_forward" aria-hidden="true"></span></button>'),t.addLayoutButton&&(i+='<button is="paper-icon-button-light" title="'+r.ZP.translate("ButtonSelectView")+'" class="btnChangeLayout autoSize" data-layouts="'+(t.layouts||"")+'" onclick="LibraryBrowser.showLayoutMenu(this, \''+(t.currentLayout||"")+'\');"><span class="material-icons view_comfy" aria-hidden="true"></span></button>'),t.sortButton&&(i+='<button is="paper-icon-button-light" class="btnSort autoSize" title="'+r.ZP.translate("Sort")+'"><span class="material-icons sort_by_alpha" aria-hidden="true"></span></button>'),t.filterButton&&(i+='<button is="paper-icon-button-light" class="btnFilter autoSize" title="'+r.ZP.translate("Filter")+'"><span class="material-icons filter_list" aria-hidden="true"></span></button>'),i+="</div>"),i+"</div>"},showSortMenu:function(t){Promise.all([Promise.resolve().then(a.bind(a,93355)),a.e(92144).then(a.bind(a,92144))]).then((function(e){var a=function(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var a=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=a){var n,r,i,o,l=[],s=!0,u=!1;try{if(i=(a=a.call(t)).next,0===e){if(Object(a)!==a)return;s=!1}else for(;!(s=(n=i.call(a)).done)&&(l.push(n.value),l.length!==e);s=!0);}catch(t){u=!0,r=t}finally{try{if(!s&&null!=a.return&&(o=a.return(),Object(o)!==o))return}finally{if(u)throw r}}return l}}(t,e)||function(t,e){if(t){if("string"==typeof t)return i(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?i(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(e,1)[0].default;function n(){var e=this.value;if(this.checked){var a=t.query.SortBy!=e;t.query.SortBy=e.replace("_",","),t.query.StartIndex=0,t.callback&&a&&t.callback()}}function o(){var e=this.value;if(this.checked){var a=t.query.SortOrder!=e;t.query.SortOrder=e,t.query.StartIndex=0,t.callback&&a&&t.callback()}}var l=a.createDialog({removeOnClose:!0,modal:!1,entryAnimationDuration:160,exitAnimationDuration:200});l.classList.add("ui-body-a"),l.classList.add("background-theme-a"),l.classList.add("formDialog");var s,u,c,d="";for(d+='<div style="margin:0;padding:1.25em 1.5em 1.5em;">',d+='<h2 style="margin:0 0 .5em;">',d+=r.ZP.translate("HeaderSortBy"),d+="</h2>",d+="<div>",s=0,u=t.items.length;s<u;s++){var v=t.items[s],f=v.id.replace(",","_");c=(t.query.SortBy||"").replace(",","_")==f?" checked":"",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortBy" data-id="'+v.id+'" value="'+f+'" class="menuSortBy" '+c+" /><span>"+v.name+"</span></label>"}d+="</div>",d+='<h2 style="margin: 1em 0 .5em;">',d+=r.ZP.translate("HeaderSortOrder"),d+="</h2>",d+="<div>",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Ascending" class="menuSortOrder" '+(c="Ascending"==t.query.SortOrder?" checked":"")+" /><span>"+r.ZP.translate("Ascending")+"</span></label>",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Descending" class="menuSortOrder" '+(c="Descending"==t.query.SortOrder?" checked":"")+" /><span>"+r.ZP.translate("Descending")+"</span></label>",d+="</div>",d+="</div>",l.innerHTML=d,a.open(l);var y=l.querySelectorAll(".menuSortBy");for(s=0,u=y.length;s<u;s++)y[s].addEventListener("change",n);var m=l.querySelectorAll(".menuSortOrder");for(s=0,u=m.length;s<u;s++)m[s].addEventListener("change",o)}))}};window.LibraryBrowser=o,e.ZP=o}}]);