"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[43531],{31900:function(e,t,a){a.d(t,{Z:function(){return y}}),a(29305),a(32733),a(84701),a(81678),a(24776),a(84734),a(44962),a(86584),a(4754),a(94),a(36947),a(78557),a(83994),a(82367);var r=a(9164),n=a(46782),i=a(47629),o=a(5898);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,c(r.key),r)}}function c(e){var t=function(e,t){if("object"!=l(e)||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,"string");if("object"!=l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==l(t)?t:t+""}a(15453);var u="alphaPickerButton-selected";function d(){var e=this.querySelector(".".concat(u));e?r.A.focus(e):r.A.autoFocus(this,!0)}function v(e){var t="alphaPickerButton";return n.A.tv&&(t+=" alphaPickerButton-tv"),e&&(t+=" alphaPickerButton-vertical"),t}function h(e,t){return e.map((function(e){return function(e,t){return'<button data-value="'.concat(e,'" class="').concat(v(t),'">').concat(e,"</button>")}(e,t)}))}var y=function(){return e=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var a=this;this.options=t;var r,l,s,c,u=t.element,y=t.itemsContainer,f=t.itemClass;function p(){l=null,a.value(r)}function m(){if(c=null,document.activeElement===s){var e=s.getAttribute("data-value");a.value(e,!0)}}function b(e){var t=i.Ay.parentWithClass(e.target,"alphaPickerButton");if(t){var a=t.getAttribute("data-value");u.dispatchEvent(new CustomEvent("alphavalueclicked",{cancelable:!1,detail:{value:a}}))}}function g(e){var t=i.Ay.parentWithClass(e.target,"alphaPickerButton");if(t){var a=t.getAttribute("data-value");(this._currentValue||"").toUpperCase()===a.toUpperCase()?this.value(null,!0):this.value(a,!0)}}function S(e){c&&(clearTimeout(c),c=null);var t=i.Ay.parentWithClass(e.target,"alphaPickerButton");t&&(s=t,c=setTimeout(m,600))}function k(e){var t=i.Ay.parentWithClass(e.target,f);if(t){var a=t.getAttribute("data-prefix");null!=a&&a.length&&(r=a[0],l&&clearTimeout(l),l=setTimeout(p,100))}}this.enabled=function(e){e?(y&&y.addEventListener("focus",k,!0),"keyboard"===t.mode&&u.addEventListener("click",b),"click"!==t.valueChangeEvent?u.addEventListener("focus",S,!0):u.addEventListener("click",g.bind(this))):(y&&y.removeEventListener("focus",k,!0),u.removeEventListener("click",b),u.removeEventListener("focus",S,!0),u.removeEventListener("click",g.bind(this)))},function(e,t){e.classList.add("alphaPicker"),n.A.tv&&e.classList.add("alphaPicker-tv");var a=e.classList.contains("alphaPicker-vertical");a||e.classList.add("focuscontainer-x");var r,i="",l=v(a),s="alphaPickerRow";a&&(s+=" alphaPickerRow-vertical"),i+='<div class="'.concat(s,'">'),"keyboard"===t.mode?i+='<button data-value=" " is="paper-icon-button-light" class="'.concat(l,'" aria-label="').concat(o.Ay.translate("ButtonSpace"),'"><span class="material-icons alphaPickerButtonIcon space_bar" aria-hidden="true"></span></button>'):i+=h(r=["#"],a).join(""),i+=h(r=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],a).join(""),"keyboard"===t.mode?(i+='<button data-value="backspace" is="paper-icon-button-light" class="'.concat(l,'" aria-label="').concat(o.Ay.translate("ButtonBackspace"),'"><span class="material-icons alphaPickerButtonIcon backspace" aria-hidden="true"></span></button>'),i+="</div>",r=["0","1","2","3","4","5","6","7","8","9"],i+='<div class="'.concat(s,'">'),i+="<br/>",i+=h(r,a).join(""),i+="</div>"):i+="</div>",e.innerHTML=i,e.classList.add("focusable"),e.focus=d}(u,t),this.enabled(!0),this.visible(!0)},(t=[{key:"value",value:function(e,t){var a,r,n=this.options.element;if(void 0!==e)if(null!=e){if(e=e.toUpperCase(),this._currentValue=e,"keyboard"!==this.options.mode){r=n.querySelector(".".concat(u));try{a=n.querySelector(".alphaPickerButton[data-value='".concat(e,"']"))}catch(e){console.error("error in querySelector:",e)}a&&a!==r&&a.classList.add(u),r&&r!==a&&r.classList.remove(u)}}else this._currentValue=e,(r=n.querySelector(".".concat(u)))&&r.classList.remove(u);return t&&n.dispatchEvent(new CustomEvent("alphavaluechanged",{cancelable:!1,detail:{value:e}})),this._currentValue}},{key:"on",value:function(e,t){this.options.element.addEventListener(e,t)}},{key:"off",value:function(e,t){this.options.element.removeEventListener(e,t)}},{key:"updateControls",value:function(e){e.NameLessThan?this.value("#"):this.value(e.NameStartsWith),this.visible(-1!==e.SortBy.indexOf("SortName"))}},{key:"visible",value:function(e){this.options.element.style.visibility=e?"visible":"hidden"}},{key:"values",value:function(){for(var e=this.options.element.querySelectorAll(".alphaPickerButton"),t=[],a=0,r=e.length;a<r;a++)t.push(e[a].getAttribute("data-value"));return t}},{key:"focus",value:function(){var e=this.options.element;r.A.autoFocus(e,!0)}},{key:"destroy",value:function(){var e=this.options.element;this.enabled(!1),e.classList.remove("focuscontainer-x"),this.options=null}}])&&s(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();t.A=y},45677:function(e,t,a){function r(e,t){var a=function(e){return Boolean(e.Filters||e.IsFavorite||e.VideoTypes||e.SeriesStatus||e.Is4K||void 0!==e.IsHD&&null!==e.IsHD||e.IsSD||e.Is3D||e.HasSubtitles||e.HasTrailer||e.HasSpecialFeature||e.HasThemeSong||e.HasThemeVideo||e.IsMissing||e.ParentIndexNumber||e.Genres||e.Tags||e.Years||e.OfficialRatings||e.IsUnaired)}(t),r=e.querySelector(".btnFilter-wrapper");if(r){var n=r.querySelector(".filterIndicator");!n&&a&&(r.insertAdjacentHTML("afterbegin",'<div class="filterIndicator">!</div>'),r.classList.add("btnFilterWithIndicator"),n=r.querySelector(".filterIndicator")),n&&n.classList.toggle("hide",!a)}}a.d(t,{j:function(){return r}})},43531:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}}),a(44962),a(24776),a(78557),a(90076),a(83994),a(82367);var r=a(8566),n=a(94592),i=a(76542),o=a(31900),l=a(6940),s=a(24468),c=a(82885),u=a(44797),d=a(45677);function v(e,t,v,h){var y=this;function f(){var e=m(),a=S[e];if(!a){var r={SortBy:"SortName",SortOrder:"Ascending",Recursive:!0,Fields:"PrimaryImageAspectRatio,SortName",StartIndex:0,ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb"};c.libraryPageSize()>0&&(r.Limit=c.libraryPageSize()),(a=S[e]={query:r,view:c.getSavedView(e)||"Poster"}).query.ParentId=t.topParentId,c.loadQuerySettings(e,a.query)}return a}function p(){return f().query}function m(){return"".concat(t.topParentId,"-").concat(h.mode)}var b=function(){var e=y.getCurrentViewStyle(),t=v.querySelector(".itemsContainer");"List"==e?(t.classList.add("vertical-list"),t.classList.remove("vertical-wrap")):(t.classList.remove("vertical-list"),t.classList.add("vertical-wrap")),t.innerHTML=""},g=function(){r.Ay.show(),k=!0;var e=p();(0,d.j)(v,e),("albumartists"==h.mode?ApiClient.getAlbumArtists(ApiClient.getCurrentUserId(),e):ApiClient.getArtists(ApiClient.getCurrentUserId(),e)).then((function(t){var o,u;function d(){k||(c.libraryPageSize()>0&&(e.StartIndex+=e.Limit),g())}function h(){k||(c.libraryPageSize()>0&&(e.StartIndex=Math.max(0,e.StartIndex-e.Limit)),g())}window.scrollTo(0,0),null===(o=y.alphaPicker)||void 0===o||o.updateControls(e);var f=n.Ay.getQueryPagingHtml({startIndex:e.StartIndex,limit:e.Limit,totalRecordCount:t.TotalRecordCount,showLimit:!1,updatePageSizeSetting:!1,addLayoutButton:!1,sortButton:!1,filterButton:!1}),p=y.getCurrentViewStyle();u="List"==p?l.A.getListViewHtml({items:t.Items,sortBy:e.SortBy}):"PosterCard"==p?s.default.getCardsHtml({items:t.Items,shape:"square",context:"music",showTitle:!0,coverImage:!0,cardLayout:!0}):s.default.getCardsHtml({items:t.Items,shape:"square",context:"music",showTitle:!0,coverImage:!0,lazy:!0,centerText:!0,overlayPlayButton:!0});for(var b=v.querySelectorAll(".paging"),S=0,L=b.length;S<L;S++)b[S].innerHTML=f;for(var A=0,w=(b=v.querySelectorAll(".btnNextPage")).length;A<w;A++)b[A].addEventListener("click",d);for(var P=0,C=(b=v.querySelectorAll(".btnPreviousPage")).length;P<C;P++)b[P].addEventListener("click",h);var I=v.querySelector(".itemsContainer");I.innerHTML=u,i.default.lazyChildren(I),c.saveQuerySettings(m(),e),r.Ay.hide(),k=!1,Promise.resolve().then(a.bind(a,84069)).then((function(e){e.default.autoFocus(v)}))}))},S={},k=!1;this.showFilterMenu=function(){a.e(44599).then(a.bind(a,44599)).then((function(e){var t=new(0,e.default)({query:p(),mode:h.mode,serverId:ApiClient.serverId()});u.A.on(t,"filterchange",(function(){p().StartIndex=0,g()})),t.show()}))},this.getCurrentViewStyle=function(){return f().view},function(e){var t=e.querySelector(".alphaPicker"),a=e.querySelector(".itemsContainer");t.addEventListener("alphavaluechanged",(function(e){var t=e.detail.value,a=p();"#"===t?(a.NameLessThan="A",delete a.NameStartsWith):(a.NameStartsWith=t,delete a.NameLessThan),a.StartIndex=0,g()})),y.alphaPicker=new o.Z({element:t,valueChangeEvent:"click"}),e.querySelector(".alphaPicker").classList.add("alphabetPicker-right"),t.classList.add("alphaPicker-fixed-right"),a.classList.add("padded-right-withalphapicker"),e.querySelector(".btnFilter").addEventListener("click",(function(){y.showFilterMenu()}));var r=e.querySelector(".btnSelectView");r.addEventListener("click",(function(e){n.Ay.showLayoutMenu(e.target,y.getCurrentViewStyle(),"List,Poster,PosterCard".split(","))})),r.addEventListener("layoutchange",(function(e){var t=e.detail.viewStyle;f().view=t,c.saveViewSetting(m(),t),p().StartIndex=0,b(),g()}))}(v),b(),this.renderTab=function(){var e;g(),null===(e=y.alphaPicker)||void 0===e||e.updateControls(p())}}a(1177)},94592:function(e,t,a){a(44962),a(29305),a(32733),a(84701),a(69892),a(86584),a(89336),a(78557),a(90076),a(95021),a(73687),a(83994),a(93062),a(82367);var r=a(5898);function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=Array(t);a<t;a++)r[a]=e[a];return r}var i={showLayoutMenu:function(e,t,n){var i=!0;n||(i=!1,n=(n=e.getAttribute("data-layouts"))?n.split(","):["List","Poster","PosterCard","Thumb","ThumbCard"]);var o=n.map((function(e){return{name:r.Ay.translate(e),id:e,selected:t==e}}));a.e(62882).then(a.bind(a,62882)).then((function(t){t.default.show({items:o,positionTo:e,callback:function(t){e.dispatchEvent(new CustomEvent("layoutchange",{detail:{viewStyle:t},bubbles:!0,cancelable:!1})),!i&&window.$&&$(e).trigger("layoutchange",[t])}})}))},getQueryPagingHtml:function(e){var t=e.startIndex,a=e.limit,n=e.totalRecordCount,i="",o=n?t+1:0,l=a?Math.min(t+a,n):n,s=a>0&&a<n;return i+='<div class="listPaging">',i+='<span style="vertical-align:middle;">',i+=r.Ay.translate("ListPaging",o,l,n),i+="</span>",(s||e.viewButton||e.filterButton||e.sortButton||e.addLayoutButton)&&(i+='<div style="display:inline-block;">',s&&(i+='<button is="paper-icon-button-light" class="btnPreviousPage autoSize" '+(t?"":"disabled")+'><span class="material-icons arrow_back" aria-hidden="true"></span></button>',i+='<button is="paper-icon-button-light" class="btnNextPage autoSize" '+(t+a>=n?"disabled":"")+'><span class="material-icons arrow_forward" aria-hidden="true"></span></button>'),e.addLayoutButton&&(i+='<button is="paper-icon-button-light" title="'+r.Ay.translate("ButtonSelectView")+'" class="btnChangeLayout autoSize" data-layouts="'+(e.layouts||"")+'" onclick="LibraryBrowser.showLayoutMenu(this, \''+(e.currentLayout||"")+'\');"><span class="material-icons view_comfy" aria-hidden="true"></span></button>'),e.sortButton&&(i+='<button is="paper-icon-button-light" class="btnSort autoSize" title="'+r.Ay.translate("Sort")+'"><span class="material-icons sort_by_alpha" aria-hidden="true"></span></button>'),e.filterButton&&(i+='<button is="paper-icon-button-light" class="btnFilter autoSize" title="'+r.Ay.translate("Filter")+'"><span class="material-icons filter_list" aria-hidden="true"></span></button>'),i+="</div>"),i+"</div>"},showSortMenu:function(e){Promise.all([Promise.resolve().then(a.bind(a,79754)),a.e(81613).then(a.bind(a,81613))]).then((function(t){var a,i,o=(a=t,i=1,function(e){if(Array.isArray(e))return e}(a)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r,n,i,o,l=[],s=!0,c=!1;try{if(i=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;s=!1}else for(;!(s=(r=i.call(a)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(e){c=!0,n=e}finally{try{if(!s&&null!=a.return&&(o=a.return(),Object(o)!==o))return}finally{if(c)throw n}}return l}}(a,i)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var a={}.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}}(a,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0].default;function l(){var t=this.value;if(this.checked){var a=e.query.SortBy!=t;e.query.SortBy=t.replace("_",","),e.query.StartIndex=0,e.callback&&a&&e.callback()}}function s(){var t=this.value;if(this.checked){var a=e.query.SortOrder!=t;e.query.SortOrder=t,e.query.StartIndex=0,e.callback&&a&&e.callback()}}var c=o.createDialog({removeOnClose:!0,modal:!1,entryAnimationDuration:160,exitAnimationDuration:200});c.classList.add("ui-body-a"),c.classList.add("background-theme-a"),c.classList.add("formDialog");var u,d,v,h="";for(h+='<div style="margin:0;padding:1.25em 1.5em 1.5em;">',h+='<h2 style="margin:0 0 .5em;">',h+=r.Ay.translate("HeaderSortBy"),h+="</h2>",h+="<div>",u=0,d=e.items.length;u<d;u++){var y=e.items[u],f=y.id.replace(",","_");v=(e.query.SortBy||"").replace(",","_")==f?" checked":"",h+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortBy" data-id="'+y.id+'" value="'+f+'" class="menuSortBy" '+v+" /><span>"+y.name+"</span></label>"}h+="</div>",h+='<h2 style="margin: 1em 0 .5em;">',h+=r.Ay.translate("HeaderSortOrder"),h+="</h2>",h+="<div>",h+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Ascending" class="menuSortOrder" '+(v="Ascending"==e.query.SortOrder?" checked":"")+" /><span>"+r.Ay.translate("Ascending")+"</span></label>",h+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Descending" class="menuSortOrder" '+(v="Descending"==e.query.SortOrder?" checked":"")+" /><span>"+r.Ay.translate("Descending")+"</span></label>",h+="</div>",h+="</div>",c.innerHTML=h,o.open(c);var p=c.querySelectorAll(".menuSortBy");for(u=0,d=p.length;u<d;u++)p[u].addEventListener("change",l);var m=c.querySelectorAll(".menuSortOrder");for(u=0,d=m.length;u<d;u++)m[u].addEventListener("change",s)}))}};window.LibraryBrowser=i,t.Ay=i}}]);