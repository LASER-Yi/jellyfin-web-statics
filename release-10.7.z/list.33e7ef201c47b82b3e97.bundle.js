"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3093],{71033:function(e,t,r){r.d(t,{w:function(){return m},Z:function(){return v}}),r(23938),r(61013),r(99785);var i=r(27515),a=r(78695),n=r(83094),s=r(1892),o=r.n(s),l=r(97672);function u(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}o()(l.Z,{insert:"head",singleton:!1}),l.Z.locals,r(21865),r(56561);var c="alphaPickerButton-selected";function d(){var e=this.querySelector(".".concat(c));e?i.Z.focus(e):i.Z.autoFocus(this,!0)}function p(e){var t="alphaPickerButton";return a.Z.tv&&(t+=" alphaPickerButton-tv"),e&&(t+=" alphaPickerButton-vertical"),t}function h(e,t){return e.map((function(e){return function(e,t){return'<button data-value="'.concat(e,'" class="').concat(p(t),'">').concat(e,"</button>")}(e,t)}))}var m=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var r=this;this.options=t;var i,s,o,l,u=t.element,c=t.itemsContainer,m=t.itemClass;function v(){s=null,r.value(i)}function f(){if(l=null,document.activeElement===o){var e=o.getAttribute("data-value");r.value(e,!0)}}function y(e){var t=n.ZP.parentWithClass(e.target,"alphaPickerButton");if(t){var r=t.getAttribute("data-value");u.dispatchEvent(new CustomEvent("alphavalueclicked",{cancelable:!1,detail:{value:r}}))}}function g(e){var t=n.ZP.parentWithClass(e.target,"alphaPickerButton");if(t){var r=t.getAttribute("data-value");(this._currentValue||"").toUpperCase()===r.toUpperCase()?this.value(null,!0):this.value(r,!0)}}function I(e){l&&(clearTimeout(l),l=null);var t=n.ZP.parentWithClass(e.target,"alphaPickerButton");t&&(o=t,l=setTimeout(f,600))}function b(e){var t=n.ZP.parentWithClass(e.target,m);if(t){var r=t.getAttribute("data-prefix");r&&r.length&&(i=r[0],s&&clearTimeout(s),s=setTimeout(v,100))}}this.enabled=function(e){e?(c&&c.addEventListener("focus",b,!0),"keyboard"===t.mode&&u.addEventListener("click",y),"click"!==t.valueChangeEvent?u.addEventListener("focus",I,!0):u.addEventListener("click",g.bind(this))):(c&&c.removeEventListener("focus",b,!0),u.removeEventListener("click",y),u.removeEventListener("focus",I,!0),u.removeEventListener("click",g.bind(this)))},function(e,t){e.classList.add("alphaPicker"),a.Z.tv&&e.classList.add("alphaPicker-tv");var r=e.classList.contains("alphaPicker-vertical");r||e.classList.add("focuscontainer-x");var i,n="",s=p(r),o="alphaPickerRow";r&&(o+=" alphaPickerRow-vertical"),n+='<div class="'.concat(o,'">'),"keyboard"===t.mode?n+='<button data-value=" " is="paper-icon-button-light" class="'.concat(s,'"><span class="material-icons alphaPickerButtonIcon space_bar"></span></button>'):n+=h(i=["#"],r).join(""),n+=h(i=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],r).join(""),"keyboard"===t.mode?(n+='<button data-value="backspace" is="paper-icon-button-light" class="'.concat(s,'"><span class="material-icons alphaPickerButtonIcon backspace"></span></button>'),n+="</div>",i=["0","1","2","3","4","5","6","7","8","9"],n+='<div class="'.concat(o,'">'),n+="<br/>",n+=h(i,r).join(""),n+="</div>"):n+="</div>",e.innerHTML=n,e.classList.add("focusable"),e.focus=d}(u,t),this.enabled(!0),this.visible(!0)}var t,r;return t=e,(r=[{key:"value",value:function(e,t){var r,i,a=this.options.element;if(void 0!==e)if(null!=e){if(e=e.toUpperCase(),this._currentValue=e,"keyboard"!==this.options.mode){i=a.querySelector(".".concat(c));try{r=a.querySelector(".alphaPickerButton[data-value='".concat(e,"']"))}catch(e){console.error("error in querySelector:",e)}r&&r!==i&&r.classList.add(c),i&&i!==r&&i.classList.remove(c)}}else this._currentValue=e,(i=a.querySelector(".".concat(c)))&&i.classList.remove(c);return t&&a.dispatchEvent(new CustomEvent("alphavaluechanged",{cancelable:!1,detail:{value:e}})),this._currentValue}},{key:"on",value:function(e,t){this.options.element.addEventListener(e,t)}},{key:"off",value:function(e,t){this.options.element.removeEventListener(e,t)}},{key:"visible",value:function(e){this.options.element.style.visibility=e?"visible":"hidden"}},{key:"values",value:function(){for(var e=this.options.element.querySelectorAll(".alphaPickerButton"),t=[],r=0,i=e.length;r<i;r++)t.push(e[r].getAttribute("data-value"));return t}},{key:"focus",value:function(){var e=this.options.element;i.Z.autoFocus(e,!0)}},{key:"destroy",value:function(){var e=this.options.element;this.enabled(!1),e.classList.remove("focuscontainer-x"),this.options=null}}])&&u(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),v=m},68739:function(e,t,r){r.r(t),r.d(t,{default:function(){return D}}),r(72410),r(15610),r(52077),r(25901),r(92189),r(91047),r(99785),r(5769),r(63238),r(61418),r(17460),r(14078),r(48410);var i,a=r(53754),n=r(66056),s=r(78695),o=r(28978),l=r(27515),u=r(61097),c=r(6594),d=(r(40895),r(1203),r(83094));function p(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var h,m,v="";function f(e){if(!e.ctrlKey&&!e.shiftKey&&!e.altKey){var t,r=e.key,a=r?(t=/^[0-9a-zA-Z]+$/,r.match(t)):null;a&&1===(a=a.toString().toUpperCase()).length&&(h=this.options.itemsContainer,function(e,t){v.length>=3||(i||((i=document.createElement("div")).classList.add("alphanumeric-shortcut"),i.classList.add("hide"),document.body.appendChild(i)),v+=t,i.innerHTML=v,i.classList.remove("hide"),y(),m=setTimeout(g,2e3))}(0,a))}}function y(){m&&(clearTimeout(m),m=null)}function g(){var e=v,t=h;v="",h=null,i.innerHTML="",i.classList.add("hide"),y(),function(e,t){var r;"#"===(t=t.toUpperCase())&&(r=e.querySelector("*[data-prefix]")),r||(r=e.querySelector("*[data-prefix^='"+t+"']")),r&&l.Z.focus(r)}(t,e)}var I=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=t;var r=f.bind(this);d.ZP.addEventListener(window,"keydown",r,{passive:!0}),this.keyDownHandler=r}var t,r;return t=e,(r=[{key:"destroy",value:function(){var e=this.keyDownHandler;e&&(d.ZP.removeEventListener(window,"keydown",e,{passive:!0}),this.keyDownHandler=null),this.options=null}}])&&p(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),b=r(53218),S=r(71033),P=(r(32420),r(48366),r(53913)),w=r(6383);function k(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function T(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return C(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?C(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,a=function(){};return{s:a,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,s=!0,o=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return s=e.done,e},e:function(e){o=!0,n=e},f:function(){try{s||null==r.return||r.return()}finally{if(o)throw n}}}}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function A(e,t){var r={UserId:P.Z.getApiClient(t.serverId).getCurrentUserId(),StartIndex:0,Fields:"ChannelInfo,PrimaryImageAspectRatio",Limit:300};return"Recordings"===t.type?r.IsInProgress=!1:r.HasAired=!1,t.genreId&&(r.GenreIds=t.genreId),"true"===t.IsMovie?r.IsMovie=!0:"false"===t.IsMovie&&(r.IsMovie=!1),"true"===t.IsSeries?r.IsSeries=!0:"false"===t.IsSeries&&(r.IsSeries=!1),"true"===t.IsNews?r.IsNews=!0:"false"===t.IsNews&&(r.IsNews=!1),"true"===t.IsSports?r.IsSports=!0:"false"===t.IsSports&&(r.IsSports=!1),"true"===t.IsKids?r.IsKids=!0:"false"===t.IsKids&&(r.IsKids=!1),"true"===t.IsAiring?r.IsAiring=!0:"false"===t.IsAiring&&(r.IsAiring=!1),L(e,r)}function L(e,t){var r,i=e.getSortValues();t.SortBy||(t.SortBy=i.sortBy,t.SortOrder=i.sortOrder),t.Fields=t.Fields?t.Fields+",PrimaryImageAspectRatio":"PrimaryImageAspectRatio",t.ImageTypeLimit=1;var a=[],n=e.getFilters();return n.IsPlayed&&(a.push("IsPlayed"),r=!0),n.IsUnplayed&&(a.push("IsUnplayed"),r=!0),n.IsFavorite&&(a.push("IsFavorite"),r=!0),n.IsResumable&&(a.push("IsResumable"),r=!0),n.VideoTypes&&(r=!0,t.VideoTypes=n.VideoTypes),n.GenreIds&&(r=!0,t.GenreIds=n.GenreIds),n.Is4K&&(t.Is4K=!0,r=!0),n.IsHD&&(t.IsHD=!0,r=!0),n.IsSD&&(t.IsHD=!1,r=!0),n.Is3D&&(t.Is3D=!0,r=!0),n.HasSubtitles&&(t.HasSubtitles=!0,r=!0),n.HasTrailer&&(t.HasTrailer=!0,r=!0),n.HasSpecialFeature&&(t.HasSpecialFeature=!0,r=!0),n.HasThemeSong&&(t.HasThemeSong=!0,r=!0),n.HasThemeVideo&&(t.HasThemeVideo=!0,r=!0),t.Filters=a.length?a.join(","):null,e.setFilterStatus(r),e.alphaPicker&&(t.NameStartsWith=e.alphaPicker.value()),t}function Z(e){var t=e.btnSortText;if(t){var r,i=e.getSortMenuOptions(),n=e.getSortValues(),s=n.sortBy,o=T(i);try{for(o.s();!(r=o.n()).done;){var l=r.value;if(s===l.value){t.innerHTML=a.ZP.translate("SortByValue",l.name);break}}}catch(e){o.e(e)}finally{o.f()}var u=e.btnSortIcon;u&&function(e,t){e.classList.remove("arrow_downward"),e.classList.remove("arrow_upward"),e.classList.add(t)}(u,"Descending"===n.sortOrder?"arrow_downward":"arrow_upward")}}function F(e){"list"===e.getViewSettings().imageType?(e.itemsContainer.classList.remove("vertical-wrap"),e.itemsContainer.classList.add("vertical-list")):(e.itemsContainer.classList.add("vertical-wrap"),e.itemsContainer.classList.remove("vertical-list"))}function x(e,t){if(e.alphaPicker){var r=e.alphaPickerElement;if(r){var i=e.getSortValues();null==t&&(t=100),"SortName"===i.sortBy&&"Ascending"===i.sortOrder&&t>40?(r.classList.remove("hide"),e.itemsContainer.parentNode.classList.add("padded-right-withalphapicker")):(r.classList.add("hide"),e.itemsContainer.parentNode.classList.remove("padded-right-withalphapicker"))}}}function E(e,t,r,i,a,n){var s=P.Z.getApiClient(t.serverId);if(e.queryRecursive=!1,"Recordings"===t.type)return s.getLiveTvRecordings(A(e,t));if("Programs"===t.type)return"true"===t.IsAiring?s.getLiveTvRecommendedPrograms(A(e,t)):s.getLiveTvPrograms(A(e,t));if("nextup"===t.type)return s.getNextUpEpisodes(L(e,{Limit:n,Fields:"PrimaryImageAspectRatio,DateCreated,BasicSyncInfo",UserId:s.getCurrentUserId(),ImageTypeLimit:1,EnableImageTypes:"Primary,Backdrop,Thumb",EnableTotalRecordCount:!1,SortBy:i}));if(!r){e.queryRecursive=!0;var o="getItems";return"MusicArtist"===t.type?o="getArtists":"Person"===t.type&&(o="getPeople"),s[o](s.getCurrentUserId(),L(e,{StartIndex:a,Limit:n,Fields:"PrimaryImageAspectRatio,SortName",ImageTypeLimit:1,IncludeItemTypes:"MusicArtist"===t.type||"Person"===t.type?null:t.type,Recursive:!0,IsFavorite:"true"===t.IsFavorite||null,ArtistIds:t.artistId||null,SortBy:i}))}if("Genre"===r.Type||"MusicGenre"===r.Type||"Studio"===r.Type||"Person"===r.Type){e.queryRecursive=!0;var l={StartIndex:a,Limit:n,Fields:"PrimaryImageAspectRatio,SortName",Recursive:!0,parentId:t.parentId,SortBy:i};return"Studio"===r.Type?l.StudioIds=r.Id:"Genre"===r.Type||"MusicGenre"===r.Type?l.GenreIds=r.Id:"Person"===r.Type&&(l.PersonIds=r.Id),"MusicGenre"===r.Type?l.IncludeItemTypes="MusicAlbum":"GameGenre"===r.Type?l.IncludeItemTypes="Game":"movies"===r.CollectionType?l.IncludeItemTypes="Movie":"tvshows"===r.CollectionType?l.IncludeItemTypes="Series":"Genre"===r.Type?l.IncludeItemTypes="Movie,Series,Video":"Person"===r.Type&&(l.IncludeItemTypes=t.type),s.getItems(s.getCurrentUserId(),L(e,l))}return s.getItems(s.getCurrentUserId(),L(e,{StartIndex:a,Limit:n,Fields:"PrimaryImageAspectRatio,SortName,Path",ImageTypeLimit:1,ParentId:r.Id,SortBy:i}))}function B(){var e=this;r.e(9008).then(r.bind(r,19008)).then((function(t){(new(0,t.default)).show({settingsKey:e.getSettingsKey(),settings:e.getViewSettings(),visibleSettings:e.getVisibleViewSettings()}).then((function(){F(e),e.itemsContainer.refreshItems()}))}))}function N(){var e=this;r.e(7786).then(r.bind(r,87786)).then((function(t){(new(0,t.default)).show({settingsKey:e.getSettingsKey(),settings:e.getFilters(),visibleSettings:e.getVisibleFilters(),onChange:e.itemsContainer.refreshItems.bind(e.itemsContainer),parentId:e.params.parentId,itemTypes:e.getItemTypes(),serverId:e.params.serverId,filterMenuOptions:e.getFilterMenuOptions()}).then((function(){e.itemsContainer.refreshItems()}))}))}function R(){var e=this;r.e(4201).then(r.bind(r,84201)).then((function(t){(new(0,t.default)).show({settingsKey:e.getSettingsKey(),settings:e.getSortValues(),onChange:e.itemsContainer.refreshItems.bind(e.itemsContainer),serverId:e.params.serverId,sortOptions:e.getSortMenuOptions()}).then((function(){Z(e),x(e),e.itemsContainer.refreshItems()}))}))}function M(){var e=this;r.e(8013).then(r.bind(r,8013)).then((function(t){new(0,t.default)({items:[],serverId:e.params.serverId})}))}function H(e,t){var r,i=T(e);try{for(i.s();!(r=i.n()).done;){var a=r.value;t?a.classList.add("hide"):a.classList.remove("hide")}}catch(e){i.e(e)}finally{i.f()}}function O(e,t,r){var i,a=T(e);try{for(a.s();!(i=a.n()).done;)i.value.addEventListener(t,r)}catch(e){a.e(e)}finally{a.f()}}var D=function(){function e(t,r){function i(){m.alphaPicker.value(),m.itemsContainer.refreshItems()}function o(e){w.appRouter.setTitle(function(e){return"Recordings"===r.type?a.ZP.translate("Recordings"):"Programs"===r.type?"true"===r.IsMovie?a.ZP.translate("Movies"):"true"===r.IsSports?a.ZP.translate("Sports"):"true"===r.IsKids?a.ZP.translate("HeaderForKids"):"true"===r.IsAiring?a.ZP.translate("HeaderOnNow"):"true"===r.IsSeries?a.ZP.translate("Shows"):"true"===r.IsNews?a.ZP.translate("News"):a.ZP.translate("Programs"):"nextup"===r.type?a.ZP.translate("NextUp"):"favoritemovies"===r.type?a.ZP.translate("FavoriteMovies"):e?e.Name:"Movie"===r.type?a.ZP.translate("Movies"):"Series"===r.type?a.ZP.translate("Shows"):"Season"===r.type?a.ZP.translate("Seasons"):"Episode"===r.type?a.ZP.translate("Episodes"):"MusicArtist"===r.type?a.ZP.translate("Artists"):"MusicAlbum"===r.type?a.ZP.translate("Albums"):"Audio"===r.type?a.ZP.translate("Songs"):"Video"===r.type?a.ZP.translate("Videos"):void 0}(e)||""),e&&"playlists"===e.CollectionType?H(t.querySelectorAll(".btnNewItem"),!1):H(t.querySelectorAll(".btnNewItem"),!0)}function d(){var e=m.currentItem;e&&!m.hasFilters?b.O.play({items:[e]}):E(m,m.params,e,null,null,300).then((function(e){b.O.play({items:e.Items})}))}function p(){var e=m.currentItem;e&&!m.hasFilters?b.O.queue({items:[e]}):E(m,m.params,e,null,null,300).then((function(e){b.O.queue({items:e.Items})}))}function h(){var e=m.currentItem;e&&!m.hasFilters?b.O.shuffle(e):E(m,m.params,e,"Random",null,300).then((function(e){b.O.play({items:e.Items})}))}!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var m=this;m.params=r,this.itemsContainer=t.querySelector(".itemsContainer"),r.parentId?this.itemsContainer.setAttribute("data-parentid",r.parentId):"nextup"===r.type?this.itemsContainer.setAttribute("data-monitor","videoplayback"):"favoritemovies"===r.type?this.itemsContainer.setAttribute("data-monitor","markfavorite"):"Programs"===r.type&&this.itemsContainer.setAttribute("data-refreshinterval","300000");var v,f=T(t.querySelectorAll(".btnViewSettings"));try{for(f.s();!(v=f.n()).done;)v.value.addEventListener("click",B.bind(this))}catch(e){f.e(e)}finally{f.f()}var y=t.querySelectorAll(".btnFilter");this.filterButtons=y;var g,k=this.getVisibleFilters().length,C=T(y);try{for(C.s();!(g=C.n()).done;){var A=g.value;A.addEventListener("click",N.bind(this)),k?A.classList.remove("hide"):A.classList.add("hide")}}catch(e){C.e(e)}finally{C.f()}var L=t.querySelectorAll(".btnSort");this.sortButtons=L;var D,V=T(L);try{for(V.s();!(D=V.n()).done;){var q=D.value;q.addEventListener("click",R.bind(this)),"nextup"!==r.type&&q.classList.remove("hide")}}catch(e){V.e(e)}finally{V.f()}this.btnSortText=t.querySelector(".btnSortText"),this.btnSortIcon=t.querySelector(".btnSortIcon"),O(t.querySelectorAll(".btnNewItem"),"click",M.bind(this)),this.alphaPickerElement=t.querySelector(".alphaPicker"),m.itemsContainer.fetchData=function(){return E(m,r,m.currentItem).then((function(e){return null==m.totalItemCount&&(m.totalItemCount=e.Items?e.Items.length:e.length),x(m,m.totalItemCount),e}))},m.itemsContainer.getItemsHtml=function(e){var t,i,a,s,o,l=m.getViewSettings();if("list"===l.imageType)return n.Z.getListViewHtml({items:e});var c=m.currentItem,d=l.showTitle?2:0;"banner"===l.imageType?t="banner":"disc"===l.imageType?(t="square",a=!0):"logo"===l.imageType?(t="backdrop",s=!0):"thumb"===l.imageType?(t="backdrop",i=!0):"nextup"===r.type?(t="backdrop",i="thumb"===l.imageType):"Programs"===r.type||"Recordings"===r.type?(t="true"===r.IsMovie?"portrait":"autoVertical",i="true"!==r.IsMovie&&"auto",o="true"===r.IsMovie?"portrait":"backdrop"):t="autoVertical";var p={shape:t,showTitle:l.showTitle,showYear:l.showTitle,centerText:!0,coverImage:!0,preferThumb:i,preferDisc:a,preferLogo:s,overlayPlayButton:!1,overlayMoreButton:!0,overlayText:!l.showTitle,defaultShape:o,action:"Audio"===r.type?"playallfromhere":null};if("nextup"===r.type)p.showParentTitle=l.showTitle;else if("Person"===r.type)p.showYear=!1,p.showParentTitle=!1,d=1;else if("Audio"===r.type)p.showParentTitle=l.showTitle;else if("MusicAlbum"===r.type)p.showParentTitle=l.showTitle;else if("Episode"===r.type)p.showParentTitle=l.showTitle;else if("MusicArtist"===r.type)p.showYear=!1,d=1;else if("Programs"===r.type){d=l.showTitle?1:0;var h=l.showTitle&&"true"!==r.IsMovie;h&&d++;var v=l.showTitle&&"Recordings"!==r.type;v&&d++;var f=l.showTitle&&"true"===r.IsMovie&&"Recordings"===r.type;f&&d++,p=Object.assign(p,{inheritThumb:"Recordings"===r.type,context:"livetv",showParentTitle:h,showAirTime:v,showAirDateTime:v,overlayPlayButton:!1,overlayMoreButton:!0,showYear:f,coverImage:!0})}else p.showParentTitle=l.showTitle;return p.lines=d,p.items=e,c&&"folders"===c.CollectionType&&(p.context="folders"),u.default.getCardsHtml(p)},t.addEventListener("viewshow",(function(e){var a=e.detail.isRestored;a||(c.ZP.show(),Z(m),F(m)),o(null),function(e){if("Recordings"===e.type||"Programs"===e.type||"nextup"===e.type)return Promise.resolve(null);var t=P.Z.getApiClient(e.serverId),r=e.genreId||e.musicGenreId||e.studioId||e.personId||e.parentId;return r?t.getItem(t.getCurrentUserId(),r):Promise.resolve(null)}(r).then((function(e){o(e),m.currentItem=e;var n=!a;m.itemsContainer.resume({refresh:n}).then((function(){c.ZP.hide(),n&&l.Z.autoFocus(m.itemsContainer)})),!a&&e&&"PhotoAlbum"!==e.Type&&function(){m.scroller=t.querySelector(".scrollFrameY");var e=m.alphaPickerElement;e.classList.add("alphaPicker-fixed-right"),e.classList.add("focuscontainer-right"),m.itemsContainer.parentNode.classList.add("padded-right-withalphapicker"),m.alphaPicker=new S.Z({element:e,itemsContainer:s.Z.tv?m.itemsContainer:null,itemClass:"card",valueChangeEvent:s.Z.tv?null:"click"}),m.alphaPicker.on("alphavaluechanged",i)}();var u=e?e.Type:null;"MusicGenre"===u||"Programs"!==r.type&&"Channel"!==u?H(t.querySelectorAll(".btnPlay"),!1):H(t.querySelectorAll(".btnPlay"),!0),"MusicGenre"===u||"Programs"!==r.type&&"nextup"!==r.type&&"Channel"!==u?H(t.querySelectorAll(".btnShuffle"),!1):H(t.querySelectorAll(".btnShuffle"),!0),e&&b.O.canQueue(e)?H(t.querySelectorAll(".btnQueue"),!1):H(t.querySelectorAll(".btnQueue"),!0)})),a||(O(t.querySelectorAll(".btnPlay"),"click",d),O(t.querySelectorAll(".btnQueue"),"click",p),O(t.querySelectorAll(".btnShuffle"),"click",h)),m.alphaNumericShortcuts=new I({itemsContainer:m.itemsContainer})})),t.addEventListener("viewhide",(function(e){var t=m.itemsContainer;t&&t.pause();var r=m.alphaNumericShortcuts;r&&(r.destroy(),m.alphaNumericShortcuts=null)})),t.addEventListener("viewdestroy",(function(){m.listController&&m.listController.destroy(),m.alphaPicker&&(m.alphaPicker.off("alphavaluechanged",i),m.alphaPicker.destroy()),m.currentItem=null,m.scroller=null,m.itemsContainer=null,m.filterButtons=null,m.sortButtons=null,m.btnSortText=null,m.btnSortIcon=null,m.alphaPickerElement=null}))}var t,r;return t=e,(r=[{key:"getFilters",value:function(){var e=this.getSettingsKey();return{IsPlayed:"true"===o.getFilter(e+"-filter-IsPlayed"),IsUnplayed:"true"===o.getFilter(e+"-filter-IsUnplayed"),IsFavorite:"true"===o.getFilter(e+"-filter-IsFavorite"),IsResumable:"true"===o.getFilter(e+"-filter-IsResumable"),Is4K:"true"===o.getFilter(e+"-filter-Is4K"),IsHD:"true"===o.getFilter(e+"-filter-IsHD"),IsSD:"true"===o.getFilter(e+"-filter-IsSD"),Is3D:"true"===o.getFilter(e+"-filter-Is3D"),VideoTypes:o.getFilter(e+"-filter-VideoTypes"),SeriesStatus:o.getFilter(e+"-filter-SeriesStatus"),HasSubtitles:o.getFilter(e+"-filter-HasSubtitles"),HasTrailer:o.getFilter(e+"-filter-HasTrailer"),HasSpecialFeature:o.getFilter(e+"-filter-HasSpecialFeature"),HasThemeSong:o.getFilter(e+"-filter-HasThemeSong"),HasThemeVideo:o.getFilter(e+"-filter-HasThemeVideo"),GenreIds:o.getFilter(e+"-filter-GenreIds")}}},{key:"getSortValues",value:function(){var e=this.getSettingsKey();return{sortBy:o.getFilter(e+"-sortby")||this.getDefaultSortBy(),sortOrder:"Descending"===o.getFilter(e+"-sortorder")?"Descending":"Ascending"}}},{key:"getDefaultSortBy",value:function(){var e=this.getNameSortOption(this.params);return this.params.type?e.value:"IsFolder,"+e.value}},{key:"getSortMenuOptions",value:function(){var e=[];"Programs"===this.params.type&&e.push({name:a.ZP.translate("AirDate"),value:"StartDate,SortName"});var t=this.getNameSortOption(this.params);return t&&e.push(t),(t=this.getCommunityRatingSortOption())&&e.push(t),(t=this.getCriticRatingSortOption())&&e.push(t),"Programs"!==this.params.type&&e.push({name:a.ZP.translate("DateAdded"),value:"DateCreated,SortName"}),(t=this.getDatePlayedSortOption())&&e.push(t),this.params.type||(t=this.getNameSortOption(this.params),e.push({name:a.ZP.translate("Folders"),value:"IsFolder,"+t.value})),e.push({name:a.ZP.translate("ParentalRating"),value:"OfficialRating,SortName"}),(t=this.getPlayCountSortOption())&&e.push(t),e.push({name:a.ZP.translate("ReleaseDate"),value:"ProductionYear,PremiereDate,SortName"}),e.push({name:a.ZP.translate("Runtime"),value:"Runtime,SortName"}),e}},{key:"getNameSortOption",value:function(e){return"Episode"===e.type?{name:a.ZP.translate("Name"),value:"SeriesName,SortName"}:{name:a.ZP.translate("Name"),value:"SortName"}}},{key:"getPlayCountSortOption",value:function(){return"Programs"===this.params.type?null:{name:a.ZP.translate("PlayCount"),value:"PlayCount,SortName"}}},{key:"getDatePlayedSortOption",value:function(){return"Programs"===this.params.type?null:{name:a.ZP.translate("DatePlayed"),value:"DatePlayed,SortName"}}},{key:"getCriticRatingSortOption",value:function(){return"Programs"===this.params.type?null:{name:a.ZP.translate("CriticRating"),value:"CriticRating,SortName"}}},{key:"getCommunityRatingSortOption",value:function(){return{name:a.ZP.translate("CommunityRating"),value:"CommunityRating,SortName"}}},{key:"getVisibleFilters",value:function(){var e=[],t=this.params;return"nextup"!==t.type&&("Programs"===t.type?e.push("Genres"):(e.push("IsUnplayed"),e.push("IsPlayed"),t.IsFavorite||e.push("IsFavorite"),e.push("IsResumable"),e.push("VideoType"),e.push("HasSubtitles"),e.push("HasTrailer"),e.push("HasSpecialFeature"),e.push("HasThemeSong"),e.push("HasThemeVideo"))),e}},{key:"setFilterStatus",value:function(e){this.hasFilters=e;var t=this.filterButtons;if(t.length){var r,i=T(t);try{for(i.s();!(r=i.n()).done;){var a=r.value,n=a.querySelector(".filterButtonBubble");if(!n){if(!e)continue;a.insertAdjacentHTML("afterbegin",'<div class="filterButtonBubble">!</div>'),a.classList.add("btnFilterWithBubble"),n=a.querySelector(".filterButtonBubble")}e?n.classList.remove("hide"):n.classList.add("hide")}}catch(e){i.e(e)}finally{i.f()}}}},{key:"getFilterMenuOptions",value:function(){var e=this.params;return{IsAiring:e.IsAiring,IsMovie:e.IsMovie,IsSports:e.IsSports,IsKids:e.IsKids,IsNews:e.IsNews,IsSeries:e.IsSeries,Recursive:this.queryRecursive}}},{key:"getVisibleViewSettings",value:function(){var e=(this.params,this.currentItem),t=["showTitle"];return(!e||"PhotoAlbum"!==e.Type&&"ChannelFolderItem"!==e.Type)&&t.push("imageType"),t.push("viewType"),t}},{key:"getViewSettings",value:function(){var e=this.getSettingsKey(),t=this.params,r=this.currentItem,i=o.get(e+"-showTitle");"true"===i?i=!0:"false"===i?i=!1:("Programs"===t.type||"Recordings"===t.type||"Person"===t.type||"nextup"===t.type||"Audio"===t.type||"MusicAlbum"===t.type||"MusicArtist"===t.type||r&&"PhotoAlbum"!==r.Type)&&(i=!0);var a=o.get(e+"-imageType");return a||"nextup"!==t.type||(a="thumb"),{showTitle:i,showYear:"false"!==o.get(e+"-showYear"),imageType:a||"primary",viewType:o.get(e+"-viewType")||"images"}}},{key:"getItemTypes",value:function(){var e=this.params;return"nextup"===e.type?["Episode"]:"Programs"===e.type?["Program"]:[]}},{key:"getSettingsKey",value:function(){var e=[];e.push("items");var t=this.params;return t.type?e.push(t.type):t.parentId&&e.push(t.parentId),t.IsAiring&&e.push("IsAiring"),t.IsMovie&&e.push("IsMovie"),t.IsKids&&e.push("IsKids"),t.IsSports&&e.push("IsSports"),t.IsNews&&e.push("IsNews"),t.IsSeries&&e.push("IsSeries"),t.IsFavorite&&e.push("IsFavorite"),t.genreId&&e.push("Genre"),t.musicGenreId&&e.push("MusicGenre"),t.studioId&&e.push("Studio"),t.personId&&e.push("Person"),t.parentId&&e.push("Folder"),e.join("-")}}])&&k(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}()},48366:function(e,t,r){r(5769),r(63238),r(61418),r(17460),r(14078);var i=r(13800),a=r(83094),n=r(78695),s=r(12392),o=r(27515),l=r(47518),u=(r(67752),r(1892)),c=r.n(u),d=r(75869),p=(c()(d.Z,{insert:"head",singleton:!1}),d.Z.locals,Object.create(HTMLDivElement.prototype));function h(e){var t=e.detail.command;"end"===t?(o.Z.focusLast(this,"."+this.getAttribute("data-navcommands")),e.preventDefault(),e.stopPropagation()):"pageup"===t?(o.Z.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),-12),e.preventDefault(),e.stopPropagation()):"pagedown"===t&&(o.Z.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),12),e.preventDefault(),e.stopPropagation())}p.createdCallback=function(){this.classList.add("emby-scroller")},p.scrollToBeginning=function(){this.scroller&&this.scroller.slideTo(0,!0)},p.toStart=function(e,t){this.scroller&&this.scroller.toStart(e,t)},p.toCenter=function(e,t){this.scroller&&this.scroller.toCenter(e,t)},p.scrollToPosition=function(e,t){this.scroller&&this.scroller.slideTo(e,t)},p.getScrollPosition=function(){if(this.scroller)return this.scroller.getScrollPosition()},p.getScrollSize=function(){if(this.scroller)return this.scroller.getScrollSize()},p.getScrollEventName=function(){if(this.scroller)return this.scroller.getScrollEventName()},p.getScrollSlider=function(){if(this.scroller)return this.scroller.getScrollSlider()},p.addScrollEventListener=function(e,t){this.scroller&&a.ZP.addEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},p.removeScrollEventListener=function(e,t){this.scroller&&a.ZP.removeEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},p.attachedCallback=function(){this.getAttribute("data-navcommands")&&s.ZP.on(this,h);var e="false"!==this.getAttribute("data-horizontal"),t=this.querySelector(".scrollSlider");e&&(t.style["white-space"]="nowrap");var u,c=n.Z.desktop&&e&&"false"!==this.getAttribute("data-scrollbuttons"),d={horizontal:e,mouseDragging:1,mouseWheel:"false"!==this.getAttribute("data-mousewheel"),touchDragging:1,slidee:t,scrollBy:200,speed:e?270:240,elasticBounds:1,dragHandle:1,autoImmediate:!0,skipSlideToWhenVisible:"true"===this.getAttribute("data-skipfocuswhenvisible"),dispatchScrollEvent:c||"true"===this.getAttribute("data-scrollevent"),hideScrollbar:c||"true"===this.getAttribute("data-hidescrollbar"),allowNativeSmoothScroll:"true"===this.getAttribute("data-allownativesmoothscroll")&&!c,allowNativeScroll:!c,forceHideScrollbars:c,requireAnimation:c&&l.Z.edge};this.scroller=new i.Z(this,d),this.scroller.init(),this.scroller.reload(),n.Z.tv&&this.getAttribute("data-centerfocus")&&(this,u=this.scroller,a.ZP.addEventListener(this,"focus",(function(e){var t=o.Z.focusableParent(e.target);t&&u.toCenter(t)}),{capture:!0,passive:!0})),c&&function(e){r.e(6229).then(r.bind(r,6229)).then((function(){e.insertAdjacentHTML("beforebegin",'<div is="emby-scrollbuttons" class="emby-scrollbuttons padded-right"></div>')}))}(this)},p.pause=function(){var e=this.headroom;e&&e.pause()},p.resume=function(){var e=this.headroom;e&&e.resume()},p.detachedCallback=function(){this.getAttribute("data-navcommands")&&s.ZP.off(this,h);var e=this.headroom;e&&(e.destroy(),this.headroom=null);var t=this.scroller;t&&(t.destroy(),this.scroller=null)},document.registerElement("emby-scroller",{prototype:p,extends:"div"})},97672:function(e,t,r){var i=r(93476),a=r.n(i)()((function(e){return e[1]}));a.push([e.id,".alphaPicker{text-align:center;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-align-self:center;align-self:center}.alphaPicker-vertical{line-height:1}.alphaPicker-fixed{position:fixed;bottom:5.5em}.alphaPickerRow{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-direction:row;flex-direction:row}.alphaPickerRow-vertical{-webkit-flex-direction:column;flex-direction:column}.alphaPickerButton{border:0!important;cursor:pointer;outline:none!important;vertical-align:middle;font-family:inherit;font-size:inherit;min-width:0;margin:0;padding:.1em .4em;width:auto;border-radius:.1em;font-weight:400;-webkit-flex-shrink:0;flex-shrink:0;-webkit-flex-grow:1;flex-grow:1}@media (max-height:50em){.alphaPicker-fixed{bottom:5em}.alphaPickerButton-vertical{padding-top:1px!important;padding-bottom:1px!important}}@media (max-height:49em){.alphaPicker-vertical{font-size:94%}}@media (max-height:44em){.alphaPicker-vertical{font-size:90%}.alphaPickerButton-vertical{padding-top:0!important;padding-bottom:0!important}}@media (max-height:37em){.alphaPicker-vertical{font-size:82%}}@media (max-height:32em){.alphaPicker-vertical{font-size:74%}}.alphaPicker-vertical.alphaPicker-tv{font-size:86%}.alphaPickerButton-tv.alphaPickerButton-vertical{padding:0}.alphaPickerButton-vertical{width:1.5em;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;text-align:center}.alphaPickerButtonIcon{font-size:100%!important}.alphaPicker-fixed.alphaPicker-tv{bottom:1%}.alphaPicker-fixed-right{right:.4em}@media (min-width:62.5em){.alphaPicker-fixed-right{right:1em}}@media (max-height:31.25em){.alphaPicker-fixed{display:none!important}}",""]),t.Z=a},75869:function(e,t,r){var i=r(93476),a=r.n(i)()((function(e){return e[1]}));a.push([e.id,".emby-scroller-container{position:relative}.emby-scroller{margin-left:3.3%;margin-right:3.3%}.itemsContainer>.card>.cardBox{margin-left:0;margin-right:1.2em}.servers>.card>.cardBox{margin-left:.6em;margin-right:.6em}.layout-mobile .emby-scroller,.layout-tv .emby-scroller{padding-left:3.3%;padding-right:3.3%;margin-left:0;margin-right:0}",""]),t.Z=a}}]);