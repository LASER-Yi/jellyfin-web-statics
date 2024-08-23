"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[57965],{31900:function(e,t,a){a.d(t,{Z:function(){return h}}),a(29305),a(32733),a(84701),a(81678),a(24776),a(84734),a(44962),a(86584),a(4754),a(94),a(36947),a(78557),a(83994),a(82367);var n=a(9164),r=a(46782),i=a(47629),o=a(5898);function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,u(n.key),n)}}function u(e){var t=function(e,t){if("object"!=l(e)||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,"string");if("object"!=l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==l(t)?t:t+""}a(15453);var c="alphaPickerButton-selected";function d(){var e=this.querySelector(".".concat(c));e?n.A.focus(e):n.A.autoFocus(this,!0)}function v(e){var t="alphaPickerButton";return r.A.tv&&(t+=" alphaPickerButton-tv"),e&&(t+=" alphaPickerButton-vertical"),t}function y(e,t){return e.map((function(e){return function(e,t){return'<button data-value="'.concat(e,'" class="').concat(v(t),'">').concat(e,"</button>")}(e,t)}))}var h=function(){return e=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var a=this;this.options=t;var n,l,s,u,c=t.element,h=t.itemsContainer,f=t.itemClass;function m(){l=null,a.value(n)}function p(){if(u=null,document.activeElement===s){var e=s.getAttribute("data-value");a.value(e,!0)}}function b(e){var t=i.Ay.parentWithClass(e.target,"alphaPickerButton");if(t){var a=t.getAttribute("data-value");c.dispatchEvent(new CustomEvent("alphavalueclicked",{cancelable:!1,detail:{value:a}}))}}function g(e){var t=i.Ay.parentWithClass(e.target,"alphaPickerButton");if(t){var a=t.getAttribute("data-value");(this._currentValue||"").toUpperCase()===a.toUpperCase()?this.value(null,!0):this.value(a,!0)}}function S(e){u&&(clearTimeout(u),u=null);var t=i.Ay.parentWithClass(e.target,"alphaPickerButton");t&&(s=t,u=setTimeout(p,600))}function w(e){var t=i.Ay.parentWithClass(e.target,f);if(t){var a=t.getAttribute("data-prefix");null!=a&&a.length&&(n=a[0],l&&clearTimeout(l),l=setTimeout(m,100))}}this.enabled=function(e){e?(h&&h.addEventListener("focus",w,!0),"keyboard"===t.mode&&c.addEventListener("click",b),"click"!==t.valueChangeEvent?c.addEventListener("focus",S,!0):c.addEventListener("click",g.bind(this))):(h&&h.removeEventListener("focus",w,!0),c.removeEventListener("click",b),c.removeEventListener("focus",S,!0),c.removeEventListener("click",g.bind(this)))},function(e,t){e.classList.add("alphaPicker"),r.A.tv&&e.classList.add("alphaPicker-tv");var a=e.classList.contains("alphaPicker-vertical");a||e.classList.add("focuscontainer-x");var n,i="",l=v(a),s="alphaPickerRow";a&&(s+=" alphaPickerRow-vertical"),i+='<div class="'.concat(s,'">'),"keyboard"===t.mode?i+='<button data-value=" " is="paper-icon-button-light" class="'.concat(l,'" aria-label="').concat(o.Ay.translate("ButtonSpace"),'"><span class="material-icons alphaPickerButtonIcon space_bar" aria-hidden="true"></span></button>'):i+=y(n=["#"],a).join(""),i+=y(n=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],a).join(""),"keyboard"===t.mode?(i+='<button data-value="backspace" is="paper-icon-button-light" class="'.concat(l,'" aria-label="').concat(o.Ay.translate("ButtonBackspace"),'"><span class="material-icons alphaPickerButtonIcon backspace" aria-hidden="true"></span></button>'),i+="</div>",n=["0","1","2","3","4","5","6","7","8","9"],i+='<div class="'.concat(s,'">'),i+="<br/>",i+=y(n,a).join(""),i+="</div>"):i+="</div>",e.innerHTML=i,e.classList.add("focusable"),e.focus=d}(c,t),this.enabled(!0),this.visible(!0)},(t=[{key:"value",value:function(e,t){var a,n,r=this.options.element;if(void 0!==e)if(null!=e){if(e=e.toUpperCase(),this._currentValue=e,"keyboard"!==this.options.mode){n=r.querySelector(".".concat(c));try{a=r.querySelector(".alphaPickerButton[data-value='".concat(e,"']"))}catch(e){console.error("error in querySelector:",e)}a&&a!==n&&a.classList.add(c),n&&n!==a&&n.classList.remove(c)}}else this._currentValue=e,(n=r.querySelector(".".concat(c)))&&n.classList.remove(c);return t&&r.dispatchEvent(new CustomEvent("alphavaluechanged",{cancelable:!1,detail:{value:e}})),this._currentValue}},{key:"on",value:function(e,t){this.options.element.addEventListener(e,t)}},{key:"off",value:function(e,t){this.options.element.removeEventListener(e,t)}},{key:"updateControls",value:function(e){e.NameLessThan?this.value("#"):this.value(e.NameStartsWith),this.visible(-1!==e.SortBy.indexOf("SortName"))}},{key:"visible",value:function(e){this.options.element.style.visibility=e?"visible":"hidden"}},{key:"values",value:function(){for(var e=this.options.element.querySelectorAll(".alphaPickerButton"),t=[],a=0,n=e.length;a<n;a++)t.push(e[a].getAttribute("data-value"));return t}},{key:"focus",value:function(){var e=this.options.element;n.A.autoFocus(e,!0)}},{key:"destroy",value:function(){var e=this.options.element;this.enabled(!1),e.classList.remove("focuscontainer-x"),this.options=null}}])&&s(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();t.A=h},45677:function(e,t,a){function n(e,t){var a=function(e){return Boolean(e.Filters||e.IsFavorite||e.VideoTypes||e.SeriesStatus||e.Is4K||void 0!==e.IsHD&&null!==e.IsHD||e.IsSD||e.Is3D||e.HasSubtitles||e.HasTrailer||e.HasSpecialFeature||e.HasThemeSong||e.HasThemeVideo||e.IsMissing||e.ParentIndexNumber||e.Genres||e.Tags||e.Years||e.OfficialRatings||e.IsUnaired)}(t),n=e.querySelector(".btnFilter-wrapper");if(n){var r=n.querySelector(".filterIndicator");!r&&a&&(n.insertAdjacentHTML("afterbegin",'<div class="filterIndicator">!</div>'),n.classList.add("btnFilterWithIndicator"),r=n.querySelector(".filterIndicator")),r&&r.classList.toggle("hide",!a)}}a.d(t,{j:function(){return n}})},57965:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}}),a(44962),a(29305),a(32733),a(84701),a(69892),a(89336),a(78557),a(90076),a(95021),a(73687),a(83994),a(82367);var n=a(56869),r=a(94592),i=a(58782),o=a(6940),l=a(24468),s=a(31900),u=a(82885),c=a(5898),d=a(62014),v=a(45677);function y(e,t){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(e){if("string"==typeof e)return h(e,t);var a={}.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?h(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,l=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return o=e.done,e},e:function(e){l=!0,i=e},f:function(){try{o||null==a.return||a.return()}finally{if(l)throw i}}}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=Array(t);a<t;a++)n[a]=e[a];return n}function f(e,t,h){var f=this;function m(){var e=b(),a=w[e];return a||(a=w[e]={query:{SortBy:"SortName",SortOrder:"Ascending",IncludeItemTypes:"Series",Recursive:!0,Fields:"PrimaryImageAspectRatio",ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Banner,Thumb",StartIndex:0},view:u.getSavedView(e)||"Poster"},u.libraryPageSize()>0&&(a.query.Limit=u.libraryPageSize()),a.query.ParentId=t.topParentId,u.loadQuerySettings(e,a.query)),a}function p(){return m().query}function b(){return"".concat(t.topParentId,"-series")}var g=function(){var e=f.getCurrentViewStyle(),t=h.querySelector(".itemsContainer");"List"==e?(t.classList.add("vertical-list"),t.classList.remove("vertical-wrap")):(t.classList.remove("vertical-list"),t.classList.add("vertical-wrap")),t.innerHTML=""},S=function(e){n.Ay.show(),A=!0;var t=p();(0,v.j)(e,t),ApiClient.getItems(ApiClient.getCurrentUserId(),t).then((function(s){var c,d;function v(){A||(u.libraryPageSize()>0&&(t.StartIndex+=t.Limit),S(h))}function m(){A||(u.libraryPageSize()>0&&(t.StartIndex=Math.max(0,t.StartIndex-t.Limit)),S(h))}window.scrollTo(0,0),null===(c=f.alphaPicker)||void 0===c||c.updateControls(t);var p=r.Ay.getQueryPagingHtml({startIndex:t.StartIndex,limit:t.Limit,totalRecordCount:s.TotalRecordCount,showLimit:!1,updatePageSizeSetting:!1,addLayoutButton:!1,sortButton:!1,filterButton:!1}),g=f.getCurrentViewStyle();d="Thumb"==g?l.default.getCardsHtml({items:s.Items,shape:"backdrop",preferThumb:!0,context:"tvshows",overlayMoreButton:!0,showTitle:!0,centerText:!0}):"ThumbCard"==g?l.default.getCardsHtml({items:s.Items,shape:"backdrop",preferThumb:!0,context:"tvshows",cardLayout:!0,showTitle:!0,showYear:!0,centerText:!0}):"Banner"==g?l.default.getCardsHtml({items:s.Items,shape:"banner",preferBanner:!0,context:"tvshows"}):"List"==g?o.A.getListViewHtml({items:s.Items,context:"tvshows",sortBy:t.SortBy}):"PosterCard"==g?l.default.getCardsHtml({items:s.Items,shape:"portrait",context:"tvshows",showTitle:!0,showYear:!0,centerText:!0,cardLayout:!0}):l.default.getCardsHtml({items:s.Items,shape:"portrait",context:"tvshows",centerText:!0,lazy:!0,overlayMoreButton:!0,showTitle:!0,showYear:!0});var w,k=h.querySelectorAll(".paging"),L=y(k);try{for(L.s();!(w=L.n()).done;)w.value.innerHTML=p}catch(e){L.e(e)}finally{L.f()}var P,C=y(k=h.querySelectorAll(".btnNextPage"));try{for(C.s();!(P=C.n()).done;)P.value.addEventListener("click",v)}catch(e){C.e(e)}finally{C.f()}var I,B=y(k=h.querySelectorAll(".btnPreviousPage"));try{for(B.s();!(I=B.n()).done;)I.value.addEventListener("click",m)}catch(e){B.e(e)}finally{B.f()}var T=h.querySelector(".itemsContainer");T.innerHTML=d,i.default.lazyChildren(T),u.saveQuerySettings(b(),t),n.Ay.hide(),A=!1,Promise.resolve().then(a.bind(a,84069)).then((function(t){t.default.autoFocus(e)}))}))},w={},A=!1;this.showFilterMenu=function(){a.e(44599).then(a.bind(a,44599)).then((function(e){var t=new(0,e.default)({query:p(),mode:"series",serverId:ApiClient.serverId()});d.A.on(t,"filterchange",(function(){p().StartIndex=0,S(h)})),t.show()}))},this.getCurrentViewStyle=function(){return m().view},function(e){var t=e.querySelector(".alphaPicker"),a=e.querySelector(".itemsContainer");t.addEventListener("alphavaluechanged",(function(t){var a=t.detail.value,n=p();"#"===a?(n.NameLessThan="A",delete n.NameStartsWith):(n.NameStartsWith=a,delete n.NameLessThan),n.StartIndex=0,S(e)})),f.alphaPicker=new s.A({element:t,valueChangeEvent:"click"}),e.querySelector(".alphaPicker").classList.add("alphabetPicker-right"),t.classList.add("alphaPicker-fixed-right"),a.classList.add("padded-right-withalphapicker"),e.querySelector(".btnFilter").addEventListener("click",(function(){f.showFilterMenu()})),e.querySelector(".btnSort").addEventListener("click",(function(t){r.Ay.showSortMenu({items:[{name:c.Ay.translate("Name"),id:"SortName"},{name:c.Ay.translate("OptionRandom"),id:"Random"},{name:c.Ay.translate("OptionCommunityRating"),id:"CommunityRating,SortName"},{name:c.Ay.translate("OptionDateShowAdded"),id:"DateCreated,SortName"},{name:c.Ay.translate("OptionDateEpisodeAdded"),id:"DateLastContentAdded,SortName"},{name:c.Ay.translate("OptionDatePlayed"),id:"SeriesDatePlayed,SortName"},{name:c.Ay.translate("OptionParentalRating"),id:"OfficialRating,SortName"},{name:c.Ay.translate("OptionReleaseDate"),id:"PremiereDate,SortName"}],callback:function(){p().StartIndex=0,S(e)},query:p(),button:t.target})}));var n=e.querySelector(".btnSelectView");n.addEventListener("click",(function(e){r.Ay.showLayoutMenu(e.target,f.getCurrentViewStyle(),"Banner,List,Poster,PosterCard,Thumb,ThumbCard".split(","))})),n.addEventListener("layoutchange",(function(t){var a=t.detail.viewStyle;m().view=a,u.saveViewSetting(b(),a),p().StartIndex=0,g(),S(e)}))}(h),g(),this.renderTab=function(){var e;S(h),null===(e=f.alphaPicker)||void 0===e||e.updateControls(p())}}a(1177)},94592:function(e,t,a){a(44962),a(29305),a(32733),a(84701),a(69892),a(86584),a(89336),a(78557),a(90076),a(95021),a(73687),a(83994),a(93062),a(82367);var n=a(5898);function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=Array(t);a<t;a++)n[a]=e[a];return n}var i={showLayoutMenu:function(e,t,r){var i=!0;r||(i=!1,r=(r=e.getAttribute("data-layouts"))?r.split(","):["List","Poster","PosterCard","Thumb","ThumbCard"]);var o=r.map((function(e){return{name:n.Ay.translate(e),id:e,selected:t==e}}));a.e(79617).then(a.bind(a,79617)).then((function(t){t.default.show({items:o,positionTo:e,callback:function(t){e.dispatchEvent(new CustomEvent("layoutchange",{detail:{viewStyle:t},bubbles:!0,cancelable:!1})),!i&&window.$&&$(e).trigger("layoutchange",[t])}})}))},getQueryPagingHtml:function(e){var t=e.startIndex,a=e.limit,r=e.totalRecordCount,i="",o=r?t+1:0,l=a?Math.min(t+a,r):r,s=a>0&&a<r;return i+='<div class="listPaging">',i+='<span style="vertical-align:middle;">',i+=n.Ay.translate("ListPaging",o,l,r),i+="</span>",(s||e.viewButton||e.filterButton||e.sortButton||e.addLayoutButton)&&(i+='<div style="display:inline-block;">',s&&(i+='<button is="paper-icon-button-light" class="btnPreviousPage autoSize" '+(t?"":"disabled")+'><span class="material-icons arrow_back" aria-hidden="true"></span></button>',i+='<button is="paper-icon-button-light" class="btnNextPage autoSize" '+(t+a>=r?"disabled":"")+'><span class="material-icons arrow_forward" aria-hidden="true"></span></button>'),e.addLayoutButton&&(i+='<button is="paper-icon-button-light" title="'+n.Ay.translate("ButtonSelectView")+'" class="btnChangeLayout autoSize" data-layouts="'+(e.layouts||"")+'" onclick="LibraryBrowser.showLayoutMenu(this, \''+(e.currentLayout||"")+'\');"><span class="material-icons view_comfy" aria-hidden="true"></span></button>'),e.sortButton&&(i+='<button is="paper-icon-button-light" class="btnSort autoSize" title="'+n.Ay.translate("Sort")+'"><span class="material-icons sort_by_alpha" aria-hidden="true"></span></button>'),e.filterButton&&(i+='<button is="paper-icon-button-light" class="btnFilter autoSize" title="'+n.Ay.translate("Filter")+'"><span class="material-icons filter_list" aria-hidden="true"></span></button>'),i+="</div>"),i+"</div>"},showSortMenu:function(e){Promise.all([Promise.resolve().then(a.bind(a,79754)),a.e(81613).then(a.bind(a,81613))]).then((function(t){var a,i,o=(a=t,i=1,function(e){if(Array.isArray(e))return e}(a)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,i,o,l=[],s=!0,u=!1;try{if(i=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;s=!1}else for(;!(s=(n=i.call(a)).done)&&(l.push(n.value),l.length!==t);s=!0);}catch(e){u=!0,r=e}finally{try{if(!s&&null!=a.return&&(o=a.return(),Object(o)!==o))return}finally{if(u)throw r}}return l}}(a,i)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var a={}.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?r(e,t):void 0}}(a,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0].default;function l(){var t=this.value;if(this.checked){var a=e.query.SortBy!=t;e.query.SortBy=t.replace("_",","),e.query.StartIndex=0,e.callback&&a&&e.callback()}}function s(){var t=this.value;if(this.checked){var a=e.query.SortOrder!=t;e.query.SortOrder=t,e.query.StartIndex=0,e.callback&&a&&e.callback()}}var u=o.createDialog({removeOnClose:!0,modal:!1,entryAnimationDuration:160,exitAnimationDuration:200});u.classList.add("ui-body-a"),u.classList.add("background-theme-a"),u.classList.add("formDialog");var c,d,v,y="";for(y+='<div style="margin:0;padding:1.25em 1.5em 1.5em;">',y+='<h2 style="margin:0 0 .5em;">',y+=n.Ay.translate("HeaderSortBy"),y+="</h2>",y+="<div>",c=0,d=e.items.length;c<d;c++){var h=e.items[c],f=h.id.replace(",","_");v=(e.query.SortBy||"").replace(",","_")==f?" checked":"",y+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortBy" data-id="'+h.id+'" value="'+f+'" class="menuSortBy" '+v+" /><span>"+h.name+"</span></label>"}y+="</div>",y+='<h2 style="margin: 1em 0 .5em;">',y+=n.Ay.translate("HeaderSortOrder"),y+="</h2>",y+="<div>",y+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Ascending" class="menuSortOrder" '+(v="Ascending"==e.query.SortOrder?" checked":"")+" /><span>"+n.Ay.translate("Ascending")+"</span></label>",y+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Descending" class="menuSortOrder" '+(v="Descending"==e.query.SortOrder?" checked":"")+" /><span>"+n.Ay.translate("Descending")+"</span></label>",y+="</div>",y+="</div>",u.innerHTML=y,o.open(u);var m=u.querySelectorAll(".menuSortBy");for(c=0,d=m.length;c<d;c++)m[c].addEventListener("change",l);var p=u.querySelectorAll(".menuSortOrder");for(c=0,d=p.length;c<d;c++)p[c].addEventListener("change",s)}))}};window.LibraryBrowser=i,t.Ay=i}}]);