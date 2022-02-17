"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3093],{13594:function(e,t,r){r.d(t,{w:function(){return T},Z:function(){return C}}),r(23938),r(61013),r(27471),r(99785);var i=r(27515),a=r(78695),n=r(83094),s=r(1892),o=r.n(s),l=r(95760),u=r.n(l),c=r(38311),d=r.n(c),p=r(58192),h=r.n(p),m=r(38060),v=r.n(m),f=r(54865),y=r.n(f),g=r(63421),b={};function S(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}b.styleTagTransform=y(),b.setAttributes=h(),b.insert=d().bind(null,"head"),b.domAPI=u(),b.insertStyleElement=v(),o()(g.Z,b),g.Z&&g.Z.locals&&g.Z.locals,r(21865),r(85427);var I="alphaPickerButton-selected";function P(){var e=this.querySelector(".".concat(I));e?i.Z.focus(e):i.Z.autoFocus(this,!0)}function w(e){var t="alphaPickerButton";return a.Z.tv&&(t+=" alphaPickerButton-tv"),e&&(t+=" alphaPickerButton-vertical"),t}function k(e,t){return e.map((function(e){return function(e,t){return'<button data-value="'.concat(e,'" class="').concat(w(t),'">').concat(e,"</button>")}(e,t)}))}var T=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var r=this;this.options=t;var i,s,o,l,u=t.element,c=t.itemsContainer,d=t.itemClass;function p(){s=null,r.value(i)}function h(){if(l=null,document.activeElement===o){var e=o.getAttribute("data-value");r.value(e,!0)}}function m(e){var t=n.ZP.parentWithClass(e.target,"alphaPickerButton");if(t){var r=t.getAttribute("data-value");u.dispatchEvent(new CustomEvent("alphavalueclicked",{cancelable:!1,detail:{value:r}}))}}function v(e){var t=n.ZP.parentWithClass(e.target,"alphaPickerButton");if(t){var r=t.getAttribute("data-value");(this._currentValue||"").toUpperCase()===r.toUpperCase()?this.value(null,!0):this.value(r,!0)}}function f(e){l&&(clearTimeout(l),l=null);var t=n.ZP.parentWithClass(e.target,"alphaPickerButton");t&&(o=t,l=setTimeout(h,600))}function y(e){var t=n.ZP.parentWithClass(e.target,d);if(t){var r=t.getAttribute("data-prefix");r&&r.length&&(i=r[0],s&&clearTimeout(s),s=setTimeout(p,100))}}this.enabled=function(e){e?(c&&c.addEventListener("focus",y,!0),"keyboard"===t.mode&&u.addEventListener("click",m),"click"!==t.valueChangeEvent?u.addEventListener("focus",f,!0):u.addEventListener("click",v.bind(this))):(c&&c.removeEventListener("focus",y,!0),u.removeEventListener("click",m),u.removeEventListener("focus",f,!0),u.removeEventListener("click",v.bind(this)))},function(e,t){e.classList.add("alphaPicker"),a.Z.tv&&e.classList.add("alphaPicker-tv");var r=e.classList.contains("alphaPicker-vertical");r||e.classList.add("focuscontainer-x");var i,n="",s=w(r),o="alphaPickerRow";r&&(o+=" alphaPickerRow-vertical"),n+='<div class="'.concat(o,'">'),"keyboard"===t.mode?n+='<button data-value=" " is="paper-icon-button-light" class="'.concat(s,'"><span class="material-icons alphaPickerButtonIcon space_bar"></span></button>'):n+=k(i=["#"],r).join(""),n+=k(i=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],r).join(""),"keyboard"===t.mode?(n+='<button data-value="backspace" is="paper-icon-button-light" class="'.concat(s,'"><span class="material-icons alphaPickerButtonIcon backspace"></span></button>'),n+="</div>",i=["0","1","2","3","4","5","6","7","8","9"],n+='<div class="'.concat(o,'">'),n+="<br/>",n+=k(i,r).join(""),n+="</div>"):n+="</div>",e.innerHTML=n,e.classList.add("focusable"),e.focus=P}(u,t),this.enabled(!0),this.visible(!0)}var t,r;return t=e,(r=[{key:"value",value:function(e,t){var r,i,a=this.options.element;if(void 0!==e)if(null!=e){if(e=e.toUpperCase(),this._currentValue=e,"keyboard"!==this.options.mode){i=a.querySelector(".".concat(I));try{r=a.querySelector(".alphaPickerButton[data-value='".concat(e,"']"))}catch(e){console.error("error in querySelector:",e)}r&&r!==i&&r.classList.add(I),i&&i!==r&&i.classList.remove(I)}}else this._currentValue=e,(i=a.querySelector(".".concat(I)))&&i.classList.remove(I);return t&&a.dispatchEvent(new CustomEvent("alphavaluechanged",{cancelable:!1,detail:{value:e}})),this._currentValue}},{key:"on",value:function(e,t){this.options.element.addEventListener(e,t)}},{key:"off",value:function(e,t){this.options.element.removeEventListener(e,t)}},{key:"updateControls",value:function(e){e.NameLessThan?this.value("#"):this.value(e.NameStartsWith),this.visible(-1!==e.SortBy.indexOf("SortName"))}},{key:"visible",value:function(e){this.options.element.style.visibility=e?"visible":"hidden"}},{key:"values",value:function(){for(var e=this.options.element.querySelectorAll(".alphaPickerButton"),t=[],r=0,i=e.length;r<i;r++)t.push(e[r].getAttribute("data-value"));return t}},{key:"focus",value:function(){var e=this.options.element;i.Z.autoFocus(e,!0)}},{key:"destroy",value:function(){var e=this.options.element;this.enabled(!1),e.classList.remove("focuscontainer-x"),this.options=null}}])&&S(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),C=T},68739:function(e,t,r){r.r(t),r.d(t,{default:function(){return q}}),r(72410),r(15610),r(52077),r(25901),r(92189),r(91047),r(99785),r(5769),r(27471),r(63238),r(61418),r(17460),r(14078),r(61370),r(48410);var i,a=r(44614),n=r(66056),s=r(28978),o=r(27515),l=r(61097),u=r(56705),c=(r(40895),r(1203),r(83094));function d(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var p,h,m="";function v(e){if(!e.ctrlKey&&!e.shiftKey&&!e.altKey){var t,r=e.key,a=r?(t=/^[0-9a-zA-Z]+$/,r.match(t)):null;a&&1===(a=a.toString().toUpperCase()).length&&(p=this.options.itemsContainer,function(e,t){m.length>=3||(i||((i=document.createElement("div")).classList.add("alphanumeric-shortcut"),i.classList.add("hide"),document.body.appendChild(i)),m+=t,i.innerHTML=m,i.classList.remove("hide"),f(),h=setTimeout(y,2e3))}(0,a))}}function f(){h&&(clearTimeout(h),h=null)}function y(){var e=m,t=p;m="",p=null,i.innerHTML="",i.classList.add("hide"),f(),function(e,t){var r;"#"===(t=t.toUpperCase())&&(r=e.querySelector("*[data-prefix]")),r||(r=e.querySelector("*[data-prefix^='"+t+"']")),r&&o.Z.focus(r)}(t,e)}var g=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=t;var r=v.bind(this);c.ZP.addEventListener(window,"keydown",r,{passive:!0}),this.keyDownHandler=r}var t,r;return t=e,(r=[{key:"destroy",value:function(){var e=this.keyDownHandler;e&&(c.ZP.removeEventListener(window,"keydown",e,{passive:!0}),this.keyDownHandler=null),this.options=null}}])&&d(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),b=r(2587),S=r(53218),I=r(13594),P=(r(32420),r(69523),r(53913)),w=r(86628);function k(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function T(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return C(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?C(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,a=function(){};return{s:a,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,s=!0,o=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return s=e.done,e},e:function(e){o=!0,n=e},f:function(){try{s||null==r.return||r.return()}finally{if(o)throw n}}}}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function A(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:300,a={UserId:P.Z.getApiClient(t.serverId).getCurrentUserId(),StartIndex:r,Fields:"ChannelInfo,PrimaryImageAspectRatio",Limit:i};return"Recordings"===t.type?a.IsInProgress=!1:a.HasAired=!1,t.genreId&&(a.GenreIds=t.genreId),"true"===t.IsMovie?a.IsMovie=!0:"false"===t.IsMovie&&(a.IsMovie=!1),"true"===t.IsSeries?a.IsSeries=!0:"false"===t.IsSeries&&(a.IsSeries=!1),"true"===t.IsNews?a.IsNews=!0:"false"===t.IsNews&&(a.IsNews=!1),"true"===t.IsSports?a.IsSports=!0:"false"===t.IsSports&&(a.IsSports=!1),"true"===t.IsKids?a.IsKids=!0:"false"===t.IsKids&&(a.IsKids=!1),"true"===t.IsAiring?a.IsAiring=!0:"false"===t.IsAiring&&(a.IsAiring=!1),L(e,a)}function L(e,t){var r,i=e.getSortValues();t.SortBy||(t.SortBy=i.sortBy,t.SortOrder=i.sortOrder),t.Fields=t.Fields?t.Fields+",PrimaryImageAspectRatio":"PrimaryImageAspectRatio",t.ImageTypeLimit=1;var a=[],n=e.getFilters();if(n.IsPlayed&&(a.push("IsPlayed"),r=!0),n.IsUnplayed&&(a.push("IsUnplayed"),r=!0),n.IsFavorite&&(a.push("IsFavorite"),r=!0),n.IsResumable&&(a.push("IsResumable"),r=!0),n.VideoTypes&&(r=!0,t.VideoTypes=n.VideoTypes),n.GenreIds&&(r=!0,t.GenreIds=n.GenreIds),n.Is4K&&(t.Is4K=!0,r=!0),n.IsHD&&(t.IsHD=!0,r=!0),n.IsSD&&(t.IsHD=!1,r=!0),n.Is3D&&(t.Is3D=!0,r=!0),n.HasSubtitles&&(t.HasSubtitles=!0,r=!0),n.HasTrailer&&(t.HasTrailer=!0,r=!0),n.HasSpecialFeature&&(t.HasSpecialFeature=!0,r=!0),n.HasThemeSong&&(t.HasThemeSong=!0,r=!0),n.HasThemeVideo&&(t.HasThemeVideo=!0,r=!0),t.Filters=a.length?a.join(","):null,e.setFilterStatus(r),e.alphaPicker){var s=e.alphaPicker.value();"#"===s?(t.NameLessThan="A",delete t.NameStartsWith):(t.NameStartsWith=s,delete t.NameLessThan)}return t}function x(e){var t=e.btnSortText;if(t){var r,i=e.getSortMenuOptions(),n=e.getSortValues(),s=n.sortBy,o=T(i);try{for(o.s();!(r=o.n()).done;){var l=r.value;if(s===l.value){t.innerHTML=a.ZP.translate("SortByValue",l.name);break}}}catch(e){o.e(e)}finally{o.f()}var u=e.btnSortIcon;u&&function(e,t){e.classList.remove("arrow_downward"),e.classList.remove("arrow_upward"),e.classList.add(t)}(u,"Descending"===n.sortOrder?"arrow_downward":"arrow_upward")}}function Z(e){"list"===e.getViewSettings().imageType?(e.itemsContainer.classList.remove("vertical-wrap"),e.itemsContainer.classList.add("vertical-list")):(e.itemsContainer.classList.add("vertical-wrap"),e.itemsContainer.classList.remove("vertical-list"))}function B(e){if(e.alphaPicker){var t=e.alphaPickerElement;t&&(-1!==e.getSortValues().sortBy.indexOf("SortName")?(t.classList.remove("hide"),e.itemsContainer.parentNode.classList.add("padded-right-withalphapicker")):(t.classList.add("hide"),e.itemsContainer.parentNode.classList.remove("padded-right-withalphapicker")))}}function F(e,t,r,i,a,n){var s=P.Z.getApiClient(t.serverId);if(e.queryRecursive=!1,"Recordings"===t.type)return s.getLiveTvRecordings(A(e,t,a,n));if("Programs"===t.type)return"true"===t.IsAiring?s.getLiveTvRecommendedPrograms(A(e,t,a,n)):s.getLiveTvPrograms(A(e,t,a,n));if("nextup"===t.type)return s.getNextUpEpisodes(L(e,{Limit:n,Fields:"PrimaryImageAspectRatio,DateCreated,BasicSyncInfo,MediaSourceCount",UserId:s.getCurrentUserId(),ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Thumb",EnableTotalRecordCount:!1,SortBy:i}));if(!r){e.queryRecursive=!0;var o="getItems";return"MusicArtist"===t.type?o="getArtists":"Person"===t.type&&(o="getPeople"),s[o](s.getCurrentUserId(),L(e,{StartIndex:a,Limit:n,Fields:"PrimaryImageAspectRatio,SortName",ImageTypeLimit:1,IncludeItemTypes:"MusicArtist"===t.type||"Person"===t.type?null:t.type,Recursive:!0,IsFavorite:"true"===t.IsFavorite||null,ArtistIds:t.artistId||null,SortBy:i}))}if("Genre"===r.Type||"MusicGenre"===r.Type||"Studio"===r.Type||"Person"===r.Type){e.queryRecursive=!0;var l={StartIndex:a,Limit:n,Fields:"PrimaryImageAspectRatio,SortName",Recursive:!0,parentId:t.parentId,SortBy:i};return"Studio"===r.Type?l.StudioIds=r.Id:"Genre"===r.Type||"MusicGenre"===r.Type?l.GenreIds=r.Id:"Person"===r.Type&&(l.PersonIds=r.Id),"MusicGenre"===r.Type?l.IncludeItemTypes="MusicAlbum":"movies"===r.CollectionType?l.IncludeItemTypes="Movie":"tvshows"===r.CollectionType?l.IncludeItemTypes="Series":"Genre"===r.Type?l.IncludeItemTypes="Movie,Series,Video":"Person"===r.Type&&(l.IncludeItemTypes=t.type),s.getItems(s.getCurrentUserId(),L(e,l))}return s.getItems(s.getCurrentUserId(),L(e,{StartIndex:a,Limit:n,Fields:"PrimaryImageAspectRatio,SortName,Path,SongCount,ChildCount,MediaSourceCount",ImageTypeLimit:1,ParentId:r.Id,SortBy:i}))}function E(){var e=this;r.e(107).then(r.bind(r,80107)).then((function(t){(new(0,t.default)).show({settingsKey:e.getSettingsKey(),settings:e.getViewSettings(),visibleSettings:e.getVisibleViewSettings()}).then((function(){Z(e),e.itemsContainer.refreshItems()}))}))}function N(){var e=this;r.e(9165).then(r.bind(r,69165)).then((function(t){(new(0,t.default)).show({settingsKey:e.getSettingsKey(),settings:e.getFilters(),visibleSettings:e.getVisibleFilters(),onChange:e.itemsContainer.refreshItems.bind(e.itemsContainer),parentId:e.params.parentId,itemTypes:e.getItemTypes(),serverId:e.params.serverId,filterMenuOptions:e.getFilterMenuOptions()}).then((function(){e.itemsContainer.refreshItems()}))}))}function O(){var e=this;r.e(8806).then(r.bind(r,88806)).then((function(t){(new(0,t.default)).show({settingsKey:e.getSettingsKey(),settings:e.getSortValues(),onChange:e.itemsContainer.refreshItems.bind(e.itemsContainer),serverId:e.params.serverId,sortOptions:e.getSortMenuOptions()}).then((function(){x(e),B(e),e.itemsContainer.refreshItems()}))}))}function M(){var e=this;r.e(8013).then(r.bind(r,8013)).then((function(t){new(0,t.default)({items:[],serverId:e.params.serverId})}))}function R(e,t){var r,i=T(e);try{for(i.s();!(r=i.n()).done;){var a=r.value;t?a.classList.add("hide"):a.classList.remove("hide")}}catch(e){i.e(e)}finally{i.f()}}function H(e,t,r){var i,a=T(e);try{for(a.s();!(i=a.n()).done;)i.value.addEventListener(t,r)}catch(e){a.e(e)}finally{a.f()}}var q=function(){function e(t,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var c={StartIndex:0,Limit:void 0};s.libraryPageSize()>0&&(c.Limit=s.libraryPageSize());var d=!1;function p(){!d&&c.Limit>0&&(c.StartIndex+=c.Limit,A.itemsContainer.refreshItems().then((function(){window.scrollTo(0,0),C()})))}function h(){!d&&c.Limit>0&&(c.StartIndex=Math.max(0,c.StartIndex-c.Limit),A.itemsContainer.refreshItems().then((function(){window.scrollTo(0,0),C()})))}function m(){c.StartIndex=0,A.itemsContainer.refreshItems()}function v(e){w.appRouter.setTitle(function(e){return"Recordings"===i.type?a.ZP.translate("Recordings"):"Programs"===i.type?"true"===i.IsMovie?a.ZP.translate("Movies"):"true"===i.IsSports?a.ZP.translate("Sports"):"true"===i.IsKids?a.ZP.translate("HeaderForKids"):"true"===i.IsAiring?a.ZP.translate("HeaderOnNow"):"true"===i.IsSeries?a.ZP.translate("Shows"):"true"===i.IsNews?a.ZP.translate("News"):a.ZP.translate("Programs"):"nextup"===i.type?a.ZP.translate("NextUp"):"favoritemovies"===i.type?a.ZP.translate("FavoriteMovies"):e?e.Name:"Movie"===i.type?a.ZP.translate("Movies"):"Series"===i.type?a.ZP.translate("Shows"):"Season"===i.type?a.ZP.translate("Seasons"):"Episode"===i.type?a.ZP.translate("Episodes"):"MusicArtist"===i.type?a.ZP.translate("Artists"):"MusicAlbum"===i.type?a.ZP.translate("Albums"):"Audio"===i.type?a.ZP.translate("Songs"):"Video"===i.type?a.ZP.translate("Videos"):void 0}(e)||""),e&&"playlists"===e.CollectionType?R(t.querySelectorAll(".btnNewItem"),!1):R(t.querySelectorAll(".btnNewItem"),!0)}function f(){var e=A.currentItem;e&&!A.hasFilters?S.O.play({items:[e],autoplay:!0}):F(A,A.params,e,null,0,300).then((function(e){S.O.play({items:e.Items,autoplay:!0})}))}function y(){var e=A.currentItem;e&&!A.hasFilters?S.O.queue({items:[e]}):F(A,A.params,e,null,0,300).then((function(e){S.O.queue({items:e.Items})}))}function k(){var e=A.currentItem;e&&!A.hasFilters?S.O.shuffle(e):F(A,A.params,e,"Random",0,300).then((function(e){S.O.play({items:e.Items,autoplay:!0})}))}function C(){Promise.resolve().then(r.bind(r,6610)).then((function(e){e.default.autoFocus(t)}))}var A=this;A.params=i,this.itemsContainer=t.querySelector(".itemsContainer"),i.parentId?this.itemsContainer.setAttribute("data-parentid",i.parentId):"nextup"===i.type?this.itemsContainer.setAttribute("data-monitor","videoplayback"):"favoritemovies"===i.type?this.itemsContainer.setAttribute("data-monitor","markfavorite"):"Programs"===i.type&&this.itemsContainer.setAttribute("data-refreshinterval","300000");var L,q=T(t.querySelectorAll(".btnViewSettings"));try{for(q.s();!(L=q.n()).done;)L.value.addEventListener("click",E.bind(this))}catch(e){q.e(e)}finally{q.f()}var D=t.querySelectorAll(".btnFilter");this.filterButtons=D;var V,K=this.getVisibleFilters().length,j=T(D);try{for(j.s();!(V=j.n()).done;){var U=V.value;U.addEventListener("click",N.bind(this)),K?U.classList.remove("hide"):U.classList.add("hide")}}catch(e){j.e(e)}finally{j.f()}var G=t.querySelectorAll(".btnSort");this.sortButtons=G;var z,_=T(G);try{for(_.s();!(z=_.n()).done;){var W=z.value;W.addEventListener("click",O.bind(this)),"nextup"!==i.type&&W.classList.remove("hide")}}catch(e){_.e(e)}finally{_.f()}this.btnSortText=t.querySelector(".btnSortText"),this.btnSortIcon=t.querySelector(".btnSortIcon"),H(t.querySelectorAll(".btnNewItem"),"click",M.bind(this)),this.alphaPickerElement=t.querySelector(".alphaPicker"),A.itemsContainer.fetchData=function(){return d=!0,F(A,i,A.currentItem,null,c.StartIndex,c.Limit).then((function(e){return null==A.totalItemCount&&(A.totalItemCount=e.Items?e.Items.length:e.length),B(A),function(e,r,i){var a,n=b.ZP.getQueryPagingHtml({startIndex:e,limit:i,totalRecordCount:r,showLimit:!1,updatePageSizeSetting:!1,addLayoutButton:!1,sortButton:!1,filterButton:!1}),s=T(t.querySelectorAll(".paging"));try{for(s.s();!(a=s.n()).done;)a.value.innerHTML=n}catch(e){s.e(e)}finally{s.f()}var o,l=T(t.querySelectorAll(".btnNextPage"));try{for(l.s();!(o=l.n()).done;)o.value.addEventListener("click",p)}catch(e){l.e(e)}finally{l.f()}var u,c=T(t.querySelectorAll(".btnPreviousPage"));try{for(c.s();!(u=c.n()).done;)u.value.addEventListener("click",h)}catch(e){c.e(e)}finally{c.f()}}(e.StartIndex,e.TotalRecordCount,c.Limit),e})).finally((function(){d=!1}))},A.itemsContainer.getItemsHtml=function(e){var t,r,a,s,o,u=A.getViewSettings();if("list"===u.imageType)return n.Z.getListViewHtml({items:e});var c=A.currentItem,d=u.showTitle?2:0;"banner"===u.imageType?t="banner":"disc"===u.imageType?(t="square",a=!0):"logo"===u.imageType?(t="backdrop",s=!0):"thumb"===u.imageType?(t="backdrop",r=!0):"nextup"===i.type?(t="backdrop",r="thumb"===u.imageType):"Programs"===i.type||"Recordings"===i.type?(t="true"===i.IsMovie?"portrait":"autoVertical",r="true"!==i.IsMovie&&"auto",o="true"===i.IsMovie?"portrait":"backdrop"):t="autoVertical";var p={shape:t,showTitle:u.showTitle,showYear:u.showTitle,centerText:!0,coverImage:!0,preferThumb:r,preferDisc:a,preferLogo:s,overlayPlayButton:!1,overlayMoreButton:!0,overlayText:!u.showTitle,defaultShape:o,action:"Audio"===i.type?"playallfromhere":null};if("nextup"===i.type)p.showParentTitle=u.showTitle;else if("Person"===i.type)p.showYear=!1,p.showParentTitle=!1,d=1;else if("Audio"===i.type)p.showParentTitle=u.showTitle;else if("MusicAlbum"===i.type)p.showParentTitle=u.showTitle;else if("Episode"===i.type)p.showParentTitle=u.showTitle;else if("MusicArtist"===i.type)p.showYear=!1,d=1;else if("Programs"===i.type){d=u.showTitle?1:0;var h=u.showTitle&&"true"!==i.IsMovie;h&&d++;var m=u.showTitle&&"Recordings"!==i.type;m&&d++;var v=u.showTitle&&"true"===i.IsMovie&&"Recordings"===i.type;v&&d++,p=Object.assign(p,{inheritThumb:"Recordings"===i.type,context:"livetv",showParentTitle:h,showAirTime:m,showAirDateTime:m,overlayPlayButton:!1,overlayMoreButton:!0,showYear:v,coverImage:!0})}else p.showParentTitle=u.showTitle;return p.lines=d,p.items=e,c&&"folders"===c.CollectionType&&(p.context="folders"),l.default.getCardsHtml(p)},t.addEventListener("viewshow",(function(e){var r=e.detail.isRestored;r||(u.ZP.show(),x(A),Z(A)),v(null),function(e){if("Recordings"===e.type||"Programs"===e.type||"nextup"===e.type)return Promise.resolve(null);var t=P.Z.getApiClient(e.serverId),r=e.genreId||e.musicGenreId||e.studioId||e.personId||e.parentId;return r?t.getItem(t.getCurrentUserId(),r):Promise.resolve(null)}(i).then((function(e){v(e),A.currentItem=e;var a=!r;A.itemsContainer.resume({refresh:a}).then((function(){u.ZP.hide(),a&&o.Z.autoFocus(A.itemsContainer)})),!r&&e&&"PhotoAlbum"!==e.Type&&function(){A.scroller=t.querySelector(".scrollFrameY");var e=A.alphaPickerElement;e.classList.add("alphaPicker-fixed-right"),e.classList.add("focuscontainer-right"),A.itemsContainer.parentNode.classList.add("padded-right-withalphapicker"),A.alphaPicker=new I.Z({element:e,valueChangeEvent:"click"}),A.alphaPicker.on("alphavaluechanged",m)}();var n=e?e.Type:null;"MusicGenre"!==n&&("Programs"===i.type||"Channel"===n)||"UserView"===n||"CollectionFolder"===n&&"homevideos"!==(null==e?void 0:e.CollectionType)?R(t.querySelectorAll(".btnPlay"),!0):R(t.querySelectorAll(".btnPlay"),!1),"MusicGenre"!==n&&("Programs"===i.type||"nextup"===i.type||"Channel"===n)||"UserView"===n||"CollectionFolder"===n&&"homevideos"!==(null==e?void 0:e.CollectionType)?R(t.querySelectorAll(".btnShuffle"),!0):R(t.querySelectorAll(".btnShuffle"),!1),e&&S.O.canQueue(e)?R(t.querySelectorAll(".btnQueue"),!1):R(t.querySelectorAll(".btnQueue"),!0)})),r||(H(t.querySelectorAll(".btnPlay"),"click",f),H(t.querySelectorAll(".btnQueue"),"click",y),H(t.querySelectorAll(".btnShuffle"),"click",k)),A.alphaNumericShortcuts=new g({itemsContainer:A.itemsContainer})})),t.addEventListener("viewhide",(function(){var e=A.itemsContainer;e&&e.pause();var t=A.alphaNumericShortcuts;t&&(t.destroy(),A.alphaNumericShortcuts=null)})),t.addEventListener("viewdestroy",(function(){A.listController&&A.listController.destroy(),A.alphaPicker&&(A.alphaPicker.off("alphavaluechanged",m),A.alphaPicker.destroy()),A.currentItem=null,A.scroller=null,A.itemsContainer=null,A.filterButtons=null,A.sortButtons=null,A.btnSortText=null,A.btnSortIcon=null,A.alphaPickerElement=null}))}var t,i;return t=e,(i=[{key:"getFilters",value:function(){var e=this.getSettingsKey();return{IsPlayed:"true"===s.getFilter(e+"-filter-IsPlayed"),IsUnplayed:"true"===s.getFilter(e+"-filter-IsUnplayed"),IsFavorite:"true"===s.getFilter(e+"-filter-IsFavorite"),IsResumable:"true"===s.getFilter(e+"-filter-IsResumable"),Is4K:"true"===s.getFilter(e+"-filter-Is4K"),IsHD:"true"===s.getFilter(e+"-filter-IsHD"),IsSD:"true"===s.getFilter(e+"-filter-IsSD"),Is3D:"true"===s.getFilter(e+"-filter-Is3D"),VideoTypes:s.getFilter(e+"-filter-VideoTypes"),SeriesStatus:s.getFilter(e+"-filter-SeriesStatus"),HasSubtitles:s.getFilter(e+"-filter-HasSubtitles"),HasTrailer:s.getFilter(e+"-filter-HasTrailer"),HasSpecialFeature:s.getFilter(e+"-filter-HasSpecialFeature"),HasThemeSong:s.getFilter(e+"-filter-HasThemeSong"),HasThemeVideo:s.getFilter(e+"-filter-HasThemeVideo"),GenreIds:s.getFilter(e+"-filter-GenreIds")}}},{key:"getSortValues",value:function(){var e=this.getSettingsKey();return{sortBy:s.getFilter(e+"-sortby")||this.getDefaultSortBy(),sortOrder:"Descending"===s.getFilter(e+"-sortorder")?"Descending":"Ascending"}}},{key:"getDefaultSortBy",value:function(){var e=this.getNameSortOption(this.params);return this.params.type?e.value:"IsFolder,"+e.value}},{key:"getSortMenuOptions",value:function(){var e=[];"Programs"===this.params.type&&e.push({name:a.ZP.translate("AirDate"),value:"StartDate,SortName"});var t=this.getNameSortOption(this.params);return t&&e.push(t),(t=this.getCommunityRatingSortOption())&&e.push(t),(t=this.getCriticRatingSortOption())&&e.push(t),"Programs"!==this.params.type&&e.push({name:a.ZP.translate("DateAdded"),value:"DateCreated,SortName"}),(t=this.getDatePlayedSortOption())&&e.push(t),this.params.type||(t=this.getNameSortOption(this.params),e.push({name:a.ZP.translate("Folders"),value:"IsFolder,"+t.value})),e.push({name:a.ZP.translate("ParentalRating"),value:"OfficialRating,SortName"}),(t=this.getPlayCountSortOption())&&e.push(t),e.push({name:a.ZP.translate("ReleaseDate"),value:"ProductionYear,PremiereDate,SortName"}),e.push({name:a.ZP.translate("Runtime"),value:"Runtime,SortName"}),e}},{key:"getNameSortOption",value:function(e){return"Episode"===e.type?{name:a.ZP.translate("Name"),value:"SeriesName,SortName"}:{name:a.ZP.translate("Name"),value:"SortName"}}},{key:"getPlayCountSortOption",value:function(){return"Programs"===this.params.type?null:{name:a.ZP.translate("PlayCount"),value:"PlayCount,SortName"}}},{key:"getDatePlayedSortOption",value:function(){return"Programs"===this.params.type?null:{name:a.ZP.translate("DatePlayed"),value:"DatePlayed,SortName"}}},{key:"getCriticRatingSortOption",value:function(){return"Programs"===this.params.type?null:{name:a.ZP.translate("CriticRating"),value:"CriticRating,SortName"}}},{key:"getCommunityRatingSortOption",value:function(){return{name:a.ZP.translate("CommunityRating"),value:"CommunityRating,SortName"}}},{key:"getVisibleFilters",value:function(){var e=[],t=this.params;return"nextup"!==t.type&&("Programs"===t.type?e.push("Genres"):(e.push("IsUnplayed"),e.push("IsPlayed"),t.IsFavorite||e.push("IsFavorite"),e.push("IsResumable"),e.push("VideoType"),e.push("HasSubtitles"),e.push("HasTrailer"),e.push("HasSpecialFeature"),e.push("HasThemeSong"),e.push("HasThemeVideo"))),e}},{key:"setFilterStatus",value:function(e){this.hasFilters=e;var t=this.filterButtons;if(t.length){var r,i=T(t);try{for(i.s();!(r=i.n()).done;){var a=r.value,n=a.querySelector(".filterButtonBubble");if(!n){if(!e)continue;a.insertAdjacentHTML("afterbegin",'<div class="filterButtonBubble">!</div>'),a.classList.add("btnFilterWithBubble"),n=a.querySelector(".filterButtonBubble")}e?n.classList.remove("hide"):n.classList.add("hide")}}catch(e){i.e(e)}finally{i.f()}}}},{key:"getFilterMenuOptions",value:function(){var e=this.params;return{IsAiring:e.IsAiring,IsMovie:e.IsMovie,IsSports:e.IsSports,IsKids:e.IsKids,IsNews:e.IsNews,IsSeries:e.IsSeries,Recursive:this.queryRecursive}}},{key:"getVisibleViewSettings",value:function(){var e=(this.params,this.currentItem),t=["showTitle"];return(!e||"PhotoAlbum"!==e.Type&&"ChannelFolderItem"!==e.Type)&&t.push("imageType"),t.push("viewType"),t}},{key:"getViewSettings",value:function(){var e=this.getSettingsKey(),t=this.params,r=this.currentItem,i=s.get(e+"-showTitle");"true"===i?i=!0:"false"===i?i=!1:("Programs"===t.type||"Recordings"===t.type||"Person"===t.type||"nextup"===t.type||"Audio"===t.type||"MusicAlbum"===t.type||"MusicArtist"===t.type||r&&"PhotoAlbum"!==r.Type)&&(i=!0);var a=s.get(e+"-imageType");return a||"nextup"!==t.type||(a=s.useEpisodeImagesInNextUpAndResume()?"primary":"thumb"),{showTitle:i,showYear:"false"!==s.get(e+"-showYear"),imageType:a||"primary",viewType:s.get(e+"-viewType")||"images"}}},{key:"getItemTypes",value:function(){var e=this.params;return"nextup"===e.type?["Episode"]:"Programs"===e.type?["Program"]:[]}},{key:"getSettingsKey",value:function(){var e=[];e.push("items");var t=this.params;return t.type?e.push(t.type):t.parentId&&e.push(t.parentId),t.IsAiring&&e.push("IsAiring"),t.IsMovie&&e.push("IsMovie"),t.IsKids&&e.push("IsKids"),t.IsSports&&e.push("IsSports"),t.IsNews&&e.push("IsNews"),t.IsSeries&&e.push("IsSeries"),t.IsFavorite&&e.push("IsFavorite"),t.genreId&&e.push("Genre"),t.musicGenreId&&e.push("MusicGenre"),t.studioId&&e.push("Studio"),t.personId&&e.push("Person"),t.parentId&&e.push("Folder"),e.join("-")}}])&&k(t.prototype,i),Object.defineProperty(t,"prototype",{writable:!1}),e}()},69523:function(e,t,r){r(5769),r(63238),r(61418),r(17460),r(14078);var i=r(13800),a=r(83094),n=r(78695),s=r(12392),o=r(27515),l=r(47518),u=(r(67752),r(1892)),c=r.n(u),d=r(95760),p=r.n(d),h=r(38311),m=r.n(h),v=r(58192),f=r.n(v),y=r(38060),g=r.n(y),b=r(54865),S=r.n(b),I=r(88101),P={};P.styleTagTransform=S(),P.setAttributes=f(),P.insert=m().bind(null,"head"),P.domAPI=p(),P.insertStyleElement=g(),c()(I.Z,P),I.Z&&I.Z.locals&&I.Z.locals;var w=Object.create(HTMLDivElement.prototype);function k(e){var t=e.detail.command;"end"===t?(o.Z.focusLast(this,"."+this.getAttribute("data-navcommands")),e.preventDefault(),e.stopPropagation()):"pageup"===t?(o.Z.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),-12),e.preventDefault(),e.stopPropagation()):"pagedown"===t&&(o.Z.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),12),e.preventDefault(),e.stopPropagation())}w.createdCallback=function(){this.classList.add("emby-scroller")},w.scrollToBeginning=function(){this.scroller&&this.scroller.slideTo(0,!0)},w.toStart=function(e,t){this.scroller&&this.scroller.toStart(e,t)},w.toCenter=function(e,t){this.scroller&&this.scroller.toCenter(e,t)},w.scrollToPosition=function(e,t){this.scroller&&this.scroller.slideTo(e,t)},w.getScrollPosition=function(){if(this.scroller)return this.scroller.getScrollPosition()},w.getScrollSize=function(){if(this.scroller)return this.scroller.getScrollSize()},w.getScrollEventName=function(){if(this.scroller)return this.scroller.getScrollEventName()},w.getScrollSlider=function(){if(this.scroller)return this.scroller.getScrollSlider()},w.addScrollEventListener=function(e,t){this.scroller&&a.ZP.addEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},w.removeScrollEventListener=function(e,t){this.scroller&&a.ZP.removeEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},w.attachedCallback=function(){this.getAttribute("data-navcommands")&&s.default.on(this,k);var e="false"!==this.getAttribute("data-horizontal"),t=this.querySelector(".scrollSlider");e&&(t.style["white-space"]="nowrap");var u,c=n.Z.desktop&&e&&"false"!==this.getAttribute("data-scrollbuttons"),d={horizontal:e,mouseDragging:1,mouseWheel:"false"!==this.getAttribute("data-mousewheel"),touchDragging:1,slidee:t,scrollBy:200,speed:e?270:240,elasticBounds:1,dragHandle:1,autoImmediate:!0,skipSlideToWhenVisible:"true"===this.getAttribute("data-skipfocuswhenvisible"),dispatchScrollEvent:c||"true"===this.getAttribute("data-scrollevent"),hideScrollbar:c||"true"===this.getAttribute("data-hidescrollbar"),allowNativeSmoothScroll:"true"===this.getAttribute("data-allownativesmoothscroll")&&!c,allowNativeScroll:!c,forceHideScrollbars:c,requireAnimation:c&&l.Z.edge};this.scroller=new i.Z(this,d),this.scroller.init(),this.scroller.reload(),n.Z.tv&&this.getAttribute("data-centerfocus")&&(this,u=this.scroller,a.ZP.addEventListener(this,"focus",(function(e){var t=o.Z.focusableParent(e.target);t&&u.toCenter(t)}),{capture:!0,passive:!0})),c&&function(e){r.e(2910).then(r.bind(r,22910)).then((function(){e.insertAdjacentHTML("beforebegin",'<div is="emby-scrollbuttons" class="emby-scrollbuttons padded-right"></div>')}))}(this)},w.pause=function(){var e=this.headroom;e&&e.pause()},w.resume=function(){var e=this.headroom;e&&e.resume()},w.detachedCallback=function(){this.getAttribute("data-navcommands")&&s.default.off(this,k);var e=this.headroom;e&&(e.destroy(),this.headroom=null);var t=this.scroller;t&&(t.destroy(),this.scroller=null)},document.registerElement("emby-scroller",{prototype:w,extends:"div"})},2587:function(e,t,r){r(25901),r(92189),r(91047),r(72410),r(15610),r(5769),r(52077),r(72482),r(48410),r(61013),r(63238),r(61418),r(17460),r(14078),r(911);var i=r(28978),a=r(44614);function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}var s={getSavedQueryKey:function(e){return window.location.href.split("#")[0]+(e||"")},loadSavedQueryValues:function(e,t){var r=i.get(e);return r?(r=JSON.parse(r),Object.assign(t,r)):t},saveQueryValues:function(e,t){var r={};t.SortBy&&(r.SortBy=t.SortBy),t.SortOrder&&(r.SortOrder=t.SortOrder),i.set(e,JSON.stringify(r))},saveViewSetting:function(e,t){i.set(e+"-_view",t)},getSavedView:function(e){return i.get(e+"-_view")},showLayoutMenu:function(e,t,i){var n=!0;i||(n=!1,i=(i=e.getAttribute("data-layouts"))?i.split(","):["List","Poster","PosterCard","Thumb","ThumbCard"]);var s=i.map((function(e){return{name:a.ZP.translate(e),id:e,selected:t==e}}));Promise.resolve().then(r.bind(r,78407)).then((function(t){t.default.show({items:s,positionTo:e,callback:function(t){e.dispatchEvent(new CustomEvent("layoutchange",{detail:{viewStyle:t},bubbles:!0,cancelable:!1})),n||window.$&&$(e).trigger("layoutchange",[t])}})}))},getQueryPagingHtml:function(e){var t=e.startIndex,r=e.limit,i=e.totalRecordCount,n="",s=Math.min(t+r,i),o=r<i;return n+='<div class="listPaging">',o&&(n+='<span style="vertical-align:middle;">',n+=a.ZP.translate("ListPaging",i?t+1:0,s,i),n+="</span>"),(o||e.viewButton||e.filterButton||e.sortButton||e.addLayoutButton)&&(n+='<div style="display:inline-block;">',o&&(n+='<button is="paper-icon-button-light" class="btnPreviousPage autoSize" '+(t?"":"disabled")+'><span class="material-icons arrow_back"></span></button>',n+='<button is="paper-icon-button-light" class="btnNextPage autoSize" '+(t+r>=i?"disabled":"")+'><span class="material-icons arrow_forward"></span></button>'),e.addLayoutButton&&(n+='<button is="paper-icon-button-light" title="'+a.ZP.translate("ButtonSelectView")+'" class="btnChangeLayout autoSize" data-layouts="'+(e.layouts||"")+'" onclick="LibraryBrowser.showLayoutMenu(this, \''+(e.currentLayout||"")+'\');"><span class="material-icons view_comfy"></span></button>'),e.sortButton&&(n+='<button is="paper-icon-button-light" class="btnSort autoSize" title="'+a.ZP.translate("Sort")+'"><span class="material-icons sort_by_alpha"></span></button>'),e.filterButton&&(n+='<button is="paper-icon-button-light" class="btnFilter autoSize" title="'+a.ZP.translate("Filter")+'"><span class="material-icons filter_list"></span></button>'),n+="</div>"),n+"</div>"},showSortMenu:function(e){Promise.all([Promise.resolve().then(r.bind(r,90914)),r.e(2987).then(r.bind(r,82987))]).then((function(t){var r=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var i,a,n=[],s=!0,o=!1;try{for(r=r.call(e);!(s=(i=r.next()).done)&&(n.push(i.value),!t||n.length!==t);s=!0);}catch(e){o=!0,a=e}finally{try{s||null==r.return||r.return()}finally{if(o)throw a}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t,1)[0].default;function i(){var t=this.value;if(this.checked){var r=e.query.SortBy!=t;e.query.SortBy=t.replace("_",","),e.query.StartIndex=0,e.callback&&r&&e.callback()}}function s(){var t=this.value;if(this.checked){var r=e.query.SortOrder!=t;e.query.SortOrder=t,e.query.StartIndex=0,e.callback&&r&&e.callback()}}var o=r.createDialog({removeOnClose:!0,modal:!1,entryAnimationDuration:160,exitAnimationDuration:200});o.classList.add("ui-body-a"),o.classList.add("background-theme-a"),o.classList.add("formDialog");var l,u,c,d="";for(d+='<div style="margin:0;padding:1.25em 1.5em 1.5em;">',d+='<h2 style="margin:0 0 .5em;">',d+=a.ZP.translate("HeaderSortBy"),d+="</h2>",d+="<div>",l=0,u=e.items.length;l<u;l++){var p=e.items[l],h=p.id.replace(",","_");c=(e.query.SortBy||"").replace(",","_")==h?" checked":"",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortBy" data-id="'+p.id+'" value="'+h+'" class="menuSortBy" '+c+" /><span>"+p.name+"</span></label>"}d+="</div>",d+='<h2 style="margin: 1em 0 .5em;">',d+=a.ZP.translate("HeaderSortOrder"),d+="</h2>",d+="<div>",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Ascending" class="menuSortOrder" '+(c="Ascending"==e.query.SortOrder?" checked":"")+" /><span>"+a.ZP.translate("Ascending")+"</span></label>",d+='<label class="radio-label-block"><input type="radio" is="emby-radio" name="SortOrder" value="Descending" class="menuSortOrder" '+(c="Descending"==e.query.SortOrder?" checked":"")+" /><span>"+a.ZP.translate("Descending")+"</span></label>",d+="</div>",d+="</div>",o.innerHTML=d,r.open(o);var m=o.querySelectorAll(".menuSortBy");for(l=0,u=m.length;l<u;l++)m[l].addEventListener("change",i);var v=o.querySelectorAll(".menuSortOrder");for(l=0,u=v.length;l<u;l++)v[l].addEventListener("change",s)}))}};window.LibraryBrowser=s,t.ZP=s},63421:function(e,t,r){var i=r(54933),a=r.n(i),n=r(93476),s=r.n(n)()(a());s.push([e.id,".alphaPicker{-webkit-align-self:center;align-self:center;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;text-align:center}.alphaPicker-vertical{line-height:1}.alphaPicker-fixed{bottom:5.5em;position:fixed}.alphaPickerRow{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;-webkit-justify-content:center;justify-content:center}.alphaPickerRow-vertical{-webkit-flex-direction:column;flex-direction:column}.alphaPickerButton{border:0!important;border-radius:.1em;cursor:pointer;-webkit-flex-grow:1;flex-grow:1;-webkit-flex-shrink:0;flex-shrink:0;font-family:inherit;font-size:inherit;font-weight:400;margin:0;min-width:0;min-width:auto;outline:none!important;padding:.1em .4em;vertical-align:middle;width:auto}@media (max-height:50em){.alphaPicker-fixed{bottom:5em}.alphaPickerButton-vertical{padding-bottom:1px!important;padding-top:1px!important}}@media (max-height:49em){.alphaPicker-vertical{font-size:94%}}@media (max-height:44em){.alphaPicker-vertical{font-size:90%}.alphaPickerButton-vertical{padding-bottom:0!important;padding-top:0!important}}@media (max-height:37em){.alphaPicker-vertical{font-size:82%}}@media (max-height:32em){.alphaPicker-vertical{font-size:74%}}.alphaPicker-vertical.alphaPicker-tv{font-size:86%}.alphaPickerButton-tv.alphaPickerButton-vertical{padding:0}.alphaPickerButton-vertical{display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;text-align:center;width:1.5em}.alphaPickerButtonIcon{font-size:100%!important}.alphaPicker-fixed.alphaPicker-tv{bottom:1%}.alphaPicker-fixed-right{right:.4em}@media (min-width:62.5em){.alphaPicker-fixed-right{right:1em}}@media (max-height:31.25em){.alphaPicker-fixed{display:none!important}}",""]),t.Z=s},88101:function(e,t,r){var i=r(54933),a=r.n(i),n=r(93476),s=r.n(n)()(a());s.push([e.id,".emby-scroller-container{position:relative}.emby-scroller{margin-left:3.3%;margin-right:3.3%}.itemsContainer>.card>.cardBox{margin-left:0;margin-right:1.2em}.servers>.card>.cardBox{margin-left:.6em;margin-right:.6em}.layout-mobile .emby-scroller,.layout-tv .emby-scroller{margin-left:0;margin-right:0;padding-left:3.3%;padding-right:3.3%}",""]),t.Z=s}}]);