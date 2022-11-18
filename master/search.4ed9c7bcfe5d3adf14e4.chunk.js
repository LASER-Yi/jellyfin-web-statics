/*! For license information please see search.4ed9c7bcfe5d3adf14e4.chunk.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[66464],{12658:function(e,t,n){"use strict";n.d(t,{w:function(){return v}}),n(23938),n(61013),n(27471),n(99785);var r=n(34643),i=n(30325),a=n(72365),s=n(94994);function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n(61414);var l="alphaPickerButton-selected";function c(){var e=this.querySelector(".".concat(l));e?r.Z.focus(e):r.Z.autoFocus(this,!0)}function u(e){var t="alphaPickerButton";return i.Z.tv&&(t+=" alphaPickerButton-tv"),e&&(t+=" alphaPickerButton-vertical"),t}function d(e,t){return e.map((function(e){return function(e,t){return'<button data-value="'.concat(e,'" class="').concat(u(t),'">').concat(e,"</button>")}(e,t)}))}var v=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var n=this;this.options=t;var r,o,l,v,h=t.element,f=t.itemsContainer,p=t.itemClass;function m(){o=null,n.value(r)}function y(){if(v=null,document.activeElement===l){var e=l.getAttribute("data-value");n.value(e,!0)}}function g(e){var t=a.ZP.parentWithClass(e.target,"alphaPickerButton");if(t){var n=t.getAttribute("data-value");h.dispatchEvent(new CustomEvent("alphavalueclicked",{cancelable:!1,detail:{value:n}}))}}function b(e){var t=a.ZP.parentWithClass(e.target,"alphaPickerButton");if(t){var n=t.getAttribute("data-value");(this._currentValue||"").toUpperCase()===n.toUpperCase()?this.value(null,!0):this.value(n,!0)}}function I(e){v&&(clearTimeout(v),v=null);var t=a.ZP.parentWithClass(e.target,"alphaPickerButton");t&&(l=t,v=setTimeout(y,600))}function S(e){var t=a.ZP.parentWithClass(e.target,p);if(t){var n=t.getAttribute("data-prefix");n&&n.length&&(r=n[0],o&&clearTimeout(o),o=setTimeout(m,100))}}this.enabled=function(e){e?(f&&f.addEventListener("focus",S,!0),"keyboard"===t.mode&&h.addEventListener("click",g),"click"!==t.valueChangeEvent?h.addEventListener("focus",I,!0):h.addEventListener("click",b.bind(this))):(f&&f.removeEventListener("focus",S,!0),h.removeEventListener("click",g),h.removeEventListener("focus",I,!0),h.removeEventListener("click",b.bind(this)))},function(e,t){e.classList.add("alphaPicker"),i.Z.tv&&e.classList.add("alphaPicker-tv");var n=e.classList.contains("alphaPicker-vertical");n||e.classList.add("focuscontainer-x");var r,a="",o=u(n),l="alphaPickerRow";n&&(l+=" alphaPickerRow-vertical"),a+='<div class="'.concat(l,'">'),"keyboard"===t.mode?a+='<button data-value=" " is="paper-icon-button-light" class="'.concat(o,'" aria-label="').concat(s.ZP.translate("ButtonSpace"),'"><span class="material-icons alphaPickerButtonIcon space_bar" aria-hidden="true"></span></button>'):a+=d(r=["#"],n).join(""),a+=d(r=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],n).join(""),"keyboard"===t.mode?(a+='<button data-value="backspace" is="paper-icon-button-light" class="'.concat(o,'" aria-label="').concat(s.ZP.translate("ButtonBackspace"),'"><span class="material-icons alphaPickerButtonIcon backspace" aria-hidden="true"></span></button>'),a+="</div>",r=["0","1","2","3","4","5","6","7","8","9"],a+='<div class="'.concat(l,'">'),a+="<br/>",a+=d(r,n).join(""),a+="</div>"):a+="</div>",e.innerHTML=a,e.classList.add("focusable"),e.focus=c}(h,t),this.enabled(!0),this.visible(!0)}var t,n;return t=e,(n=[{key:"value",value:function(e,t){var n,r,i=this.options.element;if(void 0!==e)if(null!=e){if(e=e.toUpperCase(),this._currentValue=e,"keyboard"!==this.options.mode){r=i.querySelector(".".concat(l));try{n=i.querySelector(".alphaPickerButton[data-value='".concat(e,"']"))}catch(e){console.error("error in querySelector:",e)}n&&n!==r&&n.classList.add(l),r&&r!==n&&r.classList.remove(l)}}else this._currentValue=e,(r=i.querySelector(".".concat(l)))&&r.classList.remove(l);return t&&i.dispatchEvent(new CustomEvent("alphavaluechanged",{cancelable:!1,detail:{value:e}})),this._currentValue}},{key:"on",value:function(e,t){this.options.element.addEventListener(e,t)}},{key:"off",value:function(e,t){this.options.element.removeEventListener(e,t)}},{key:"updateControls",value:function(e){e.NameLessThan?this.value("#"):this.value(e.NameStartsWith),this.visible(-1!==e.SortBy.indexOf("SortName"))}},{key:"visible",value:function(e){this.options.element.style.visibility=e?"visible":"hidden"}},{key:"values",value:function(){for(var e=this.options.element.querySelectorAll(".alphaPickerButton"),t=[],n=0,r=e.length;n<r;n++)t.push(e[n].getAttribute("data-value"));return t}},{key:"focus",value:function(){var e=this.options.element;r.Z.autoFocus(e,!0)}},{key:"destroy",value:function(){var e=this.options.element;this.enabled(!1),e.classList.remove("focuscontainer-x"),this.options=null}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.Z=v},24432:function(e,t,n){"use strict";n(5769),n(63238),n(61418),n(17460),n(14078);var r=n(15723),i=n(72365),a=n(30325),s=n(58517),o=n(34643),l=n(57366),c=(n(67752),Object.create(HTMLDivElement.prototype));function u(e){var t=e.detail.command;"end"===t?(o.Z.focusLast(this,"."+this.getAttribute("data-navcommands")),e.preventDefault(),e.stopPropagation()):"pageup"===t?(o.Z.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),-12),e.preventDefault(),e.stopPropagation()):"pagedown"===t&&(o.Z.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),12),e.preventDefault(),e.stopPropagation())}c.createdCallback=function(){this.classList.add("emby-scroller")},c.scrollToBeginning=function(){this.scroller&&this.scroller.slideTo(0,!0)},c.toStart=function(e,t){this.scroller&&this.scroller.toStart(e,t)},c.toCenter=function(e,t){this.scroller&&this.scroller.toCenter(e,t)},c.scrollToPosition=function(e,t){this.scroller&&this.scroller.slideTo(e,t)},c.getScrollPosition=function(){if(this.scroller)return this.scroller.getScrollPosition()},c.getScrollSize=function(){if(this.scroller)return this.scroller.getScrollSize()},c.getScrollEventName=function(){if(this.scroller)return this.scroller.getScrollEventName()},c.getScrollSlider=function(){if(this.scroller)return this.scroller.getScrollSlider()},c.addScrollEventListener=function(e,t){this.scroller&&i.ZP.addEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},c.removeScrollEventListener=function(e,t){this.scroller&&i.ZP.removeEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},c.attachedCallback=function(){this.getAttribute("data-navcommands")&&s.default.on(this,u);var e="false"!==this.getAttribute("data-horizontal"),t=this.querySelector(".scrollSlider");e&&(t.style["white-space"]="nowrap");var c,d,v=a.Z.desktop&&e&&"false"!==this.getAttribute("data-scrollbuttons"),h={horizontal:e,mouseDragging:1,mouseWheel:"false"!==this.getAttribute("data-mousewheel"),touchDragging:1,slidee:t,scrollBy:200,speed:e?270:240,elasticBounds:1,dragHandle:1,autoImmediate:!0,skipSlideToWhenVisible:"true"===this.getAttribute("data-skipfocuswhenvisible"),dispatchScrollEvent:v||"true"===this.getAttribute("data-scrollevent"),hideScrollbar:v||"true"===this.getAttribute("data-hidescrollbar"),allowNativeSmoothScroll:"true"===this.getAttribute("data-allownativesmoothscroll")&&!v,allowNativeScroll:!v,forceHideScrollbars:v,requireAnimation:v&&l.Z.edge};this.scroller=new r.Z(this,h),this.scroller.init(),this.scroller.reload(),a.Z.tv&&this.getAttribute("data-centerfocus")&&(this,c=this.scroller,i.ZP.addEventListener(this,"focus",(function(e){var t=o.Z.focusableParent(e.target);t&&c.toCenter(t)}),{capture:!0,passive:!0})),v&&(d=this,n.e(39346).then(n.bind(n,39346)).then((function(){d.insertAdjacentHTML("beforebegin",'<div is="emby-scrollbuttons" class="emby-scrollbuttons padded-right"></div>')})))},c.pause=function(){var e=this.headroom;e&&e.pause()},c.resume=function(){var e=this.headroom;e&&e.resume()},c.detachedCallback=function(){this.getAttribute("data-navcommands")&&s.default.off(this,u);var e=this.headroom;e&&(e.destroy(),this.headroom=null);var t=this.scroller;t&&(t.destroy(),this.scroller=null)},document.registerElement("emby-scroller",{prototype:c,extends:"div"})},60042:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var s=i.apply(null,n);s&&e.push(s)}}else if("object"===a){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var o in n)r.call(n,o)&&n[o]&&e.push(o)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},6055:function(e,t,n){"use strict";var r=n(24246),i=n(27378),a=n(53424),s=function(){return s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},s.apply(this,arguments)};t.Z=function(e){var t=e.children,n=e.id,o=e.className,l=void 0===o?"":o,c=e.title,u=e.isBackButtonEnabled,d=void 0===u||u,v=e.isMenuButtonEnabled,h=void 0!==v&&v,f=e.isNowPlayingBarEnabled,p=void 0===f||f,m=e.isThemeMediaSupported,y=void 0!==m&&m,g=e.backDropType,b=(0,i.useRef)(null);return(0,i.useEffect)((function(){a.Z.hideView()}),[]),(0,i.useEffect)((function(){var e,t,n,r,i={bubbles:!0,cancelable:!1,detail:{isRestored:!1,options:{enableMediaControl:p,supportsThemeMedia:y}}};null===(e=b.current)||void 0===e||e.dispatchEvent(new CustomEvent("viewbeforeshow",i)),null===(t=b.current)||void 0===t||t.dispatchEvent(new CustomEvent("pagebeforeshow",i)),null===(n=b.current)||void 0===n||n.dispatchEvent(new CustomEvent("viewshow",i)),null===(r=b.current)||void 0===r||r.dispatchEvent(new CustomEvent("pageshow",i))}),[b,p,y]),(0,r.jsx)("div",s({ref:b,id:n,"data-role":"page",className:"page ".concat(l),"data-title":c,"data-backbutton":d,"data-menubutton":h,"data-backdroptype":g},{children:t}))}},57409:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return R}});var r=n(24246),i=n(27378),a=n(27851),s=n(6055),o=n(25883),l=n(12658),c=function(e){var t=e.onAlphaPicked,n=void 0===t?function(){}:t,a=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,a=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)s.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(i)throw i.error}}return s}((0,i.useState)(),2),s=a[0],o=a[1],c=(0,i.useRef)(null);return(0,i.useEffect)((function(){var e;return o(new l.Z({element:c.current,mode:"keyboard"})),null===(e=c.current)||void 0===e||e.addEventListener("alphavalueclicked",n),function(){null==s||s.destroy()}}),[]),(0,r.jsx)("div",{ref:c,className:"alphaPicker align-items-center"})},u=n(94994),d=(n(62033),n(30325)),v=n(57366),h=function(){return h=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},h.apply(this,arguments)},f=function(e){var t=e.onSearch,n=void 0===t?function(){}:t,a=(0,i.useRef)(null),s=function(){var e;return null===(e=null==a?void 0:a.current)||void 0===e?void 0:e.querySelector(".searchfields-txtSearch")},l=(0,i.useMemo)((function(){return(0,o.Z)(n,400)}),[n]);return(0,i.useEffect)((function(){var e,t;return null===(e=s())||void 0===e||e.addEventListener("input",(function(e){var t;l((void 0===(t=e.target.value)&&(t=""),t.trim()))})),null===(t=s())||void 0===t||t.focus(),function(){l.cancel()}}),[l]),(0,r.jsxs)("div",h({className:"padded-left padded-right searchFields",ref:a},{children:[(0,r.jsxs)("div",h({className:"searchFieldsInner flex align-items-center justify-content-center"},{children:[(0,r.jsx)("span",{className:"searchfields-icon material-icons search","aria-hidden":"true"}),(0,r.jsx)("div",{className:"inputContainer flex-grow",style:{marginBottom:0},dangerouslySetInnerHTML:{__html:'<input\n    is="emby-input"\n    class="searchfields-txtSearch"\n    type="text"\n    data-keyboard="true"\n    placeholder="'.concat(u.ZP.translate("Search"),'"\n    autocomplete="off"\n    maxlength="40"\n    autofocus\n/>')}})]})),d.Z.tv&&!v.Z.tv&&(0,r.jsx)(c,{onAlphaPicked:function(e){var t=e.detail.value,n=s();if(n){if("backspace"===t){var r=n.value;n.value=r.length?r.substring(0,r.length-1):""}else n.value+=t;n.dispatchEvent(new CustomEvent("input",{bubbles:!0}))}else console.error("Unexpected null reference")}})]}))},p=n(60042),m=n.n(p),y=n(18613),g=n(61570),b=(n(24432),n(82427),function(){return b=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},b.apply(this,arguments)}),I=function(e){var t=e.title;return{__html:'<h2 class="sectionTitle sectionTitle-cards focuscontainer-x padded-left padded-right">'.concat(void 0===t?"":t,'</h2>\n    <div is="emby-scroller" data-horizontal="true" data-centerfocus="card" class="padded-top-focusscale padded-bottom-focusscale">\n    <div is="emby-itemscontainer" class="focuscontainer-x itemsContainer scrollSlider"></div>\n</div>')}},S=function(e){var t=e.title,n=e.items,a=void 0===n?[]:n,s=e.cardOptions,o=void 0===s?{}:s,l=(0,i.useRef)(null);return(0,i.useEffect)((function(){var e;g.default.buildCards(a,b({itemsContainer:null===(e=l.current)||void 0===e?void 0:e.querySelector(".itemsContainer"),parentContainer:l.current,shape:"autooverflow",scalable:!0,showTitle:!0,overlayText:!1,centerText:!0,allowBottomPadding:!1},o))}),[o,a]),(0,r.jsx)("div",{ref:l,className:"verticalSection",dangerouslySetInnerHTML:I({title:t})})},P=function(){return P=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},P.apply(this,arguments)},T=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,a=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)s.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(i)throw i.error}}return s},w=function(e){var t=e.serverId,n=void 0===t?window.ApiClient.serverId():t,a=e.parentId,s=e.collectionType,o=e.query,l=T((0,i.useState)([]),2),c=l[0],d=l[1],v=T((0,i.useState)([]),2),h=v[0],f=v[1],p=T((0,i.useState)([]),2),g=p[0],b=p[1],I=T((0,i.useState)([]),2),w=I[0],x=I[1],j=T((0,i.useState)([]),2),k=j[0],C=j[1],E=T((0,i.useState)([]),2),Z=E[0],A=E[1],L=T((0,i.useState)([]),2),O=L[0],B=L[1],N=T((0,i.useState)([]),2),M=N[0],R=N[1],q=T((0,i.useState)([]),2),D=q[0],F=q[1],H=T((0,i.useState)([]),2),U=H[0],_=H[1],V=T((0,i.useState)([]),2),W=V[0],z=V[1],K=T((0,i.useState)([]),2),G=K[0],Y=K[1],J=T((0,i.useState)([]),2),Q=J[0],X=J[1],$=T((0,i.useState)([]),2),ee=$[0],te=$[1],ne=T((0,i.useState)([]),2),re=ne[0],ie=ne[1],ae=T((0,i.useState)([]),2),se=ae[0],oe=ae[1];return(0,i.useEffect)((function(){var e=function(){return{ParentId:a,searchTerm:o,Limit:24,Fields:"PrimaryImageAspectRatio,CanDelete,BasicSyncInfo,MediaSourceCount",Recursive:!0,EnableTotalRecordCount:!1,ImageTypeLimit:1,IncludePeople:!1,IncludeMedia:!1,IncludeGenres:!1,IncludeStudios:!1,IncludeArtists:!1}},t=function(t,n){return void 0===n&&(n={}),null==t?void 0:t.getItems(null==t?void 0:t.getCurrentUserId(),P(P(P({},e()),{IncludeMedia:!0}),n))},r=function(){return"movies"===s},i=function(){return"tvshows"===s||"tv"===s};if(d([]),f([]),b([]),x([]),C([]),A([]),B([]),R([]),F([]),_([]),z([]),Y([]),X([]),te([]),ie([]),oe([]),o){var l=y.Z.getApiClient(n);s&&!r()||t(l,{IncludeItemTypes:"Movie"}).then((function(e){return d(e.Items||[])})),s&&!i()||(t(l,{IncludeItemTypes:"Series"}).then((function(e){return f(e.Items||[])})),t(l,{IncludeItemTypes:"Episode"}).then((function(e){return b(e.Items||[])}))),(!s||r()||i())&&function(t,n){return void 0===n&&(n={}),null==t?void 0:t.getPeople(null==t?void 0:t.getCurrentUserId(),P(P(P({},e()),{IncludePeople:!0}),n))}(l).then((function(e){return ie(e.Items||[])})),s&&"music"!==s||(t(l,{IncludeItemTypes:"Playlist"}).then((function(e){return B(e.Items||[])})),function(t,n){return void 0===n&&(n={}),null==t?void 0:t.getArtists(null==t?void 0:t.getCurrentUserId(),P(P(P({},e()),{IncludeArtists:!0}),n))}(l).then((function(e){return R(e.Items||[])})),t(l,{IncludeItemTypes:"MusicAlbum"}).then((function(e){return F(e.Items||[])})),t(l,{IncludeItemTypes:"Audio"}).then((function(e){return _(e.Items||[])}))),s||(t(l,{MediaTypes:"Video",ExcludeItemTypes:"Movie,Episode,TvChannel"}).then((function(e){return x(e.Items||[])})),t(l,{IncludeItemTypes:"LiveTvProgram"}).then((function(e){return C(e.Items||[])})),t(l,{IncludeItemTypes:"TvChannel"}).then((function(e){return A(e.Items||[])})),t(l,{IncludeItemTypes:"PhotoAlbum"}).then((function(e){return z(e.Items||[])})),t(l,{IncludeItemTypes:"Photo"}).then((function(e){return Y(e.Items||[])})),t(l,{IncludeItemTypes:"AudioBook"}).then((function(e){return X(e.Items||[])})),t(l,{IncludeItemTypes:"Book"}).then((function(e){return te(e.Items||[])})),t(l,{IncludeItemTypes:"BoxSet"}).then((function(e){return oe(e.Items||[])})))}}),[s,a,o,n]),(0,r.jsxs)("div",P({className:m()("searchResults","padded-bottom-page","padded-top",{hide:!o||"livetv"===s})},{children:[(0,r.jsx)(S,{title:u.ZP.translate("Movies"),items:c,cardOptions:{showYear:!0}}),(0,r.jsx)(S,{title:u.ZP.translate("Shows"),items:h,cardOptions:{showYear:!0}}),(0,r.jsx)(S,{title:u.ZP.translate("Episodes"),items:g,cardOptions:{coverImage:!0,showParentTitle:!0}}),(0,r.jsx)(S,{title:u.ZP.translate("HeaderVideos"),items:w,cardOptions:{showParentTitle:!0}}),(0,r.jsx)(S,{title:u.ZP.translate("Programs"),items:k,cardOptions:{preferThumb:!0,inheritThumb:!1,showParentTitleOrTitle:!0,showTitle:!1,coverImage:!0,overlayMoreButton:!0,showAirTime:!0,showAirDateTime:!0,showChannelName:!0}}),(0,r.jsx)(S,{title:u.ZP.translate("Channels"),items:Z,cardOptions:{shape:"square"}}),(0,r.jsx)(S,{title:u.ZP.translate("Playlists"),items:O}),(0,r.jsx)(S,{title:u.ZP.translate("Artists"),items:M,cardOptions:{coverImage:!0}}),(0,r.jsx)(S,{title:u.ZP.translate("Albums"),items:D,cardOptions:{showParentTitle:!0}}),(0,r.jsx)(S,{title:u.ZP.translate("Songs"),items:U,cardOptions:{showParentTitle:!0}}),(0,r.jsx)(S,{title:u.ZP.translate("HeaderPhotoAlbums"),items:W}),(0,r.jsx)(S,{title:u.ZP.translate("Photos"),items:G}),(0,r.jsx)(S,{title:u.ZP.translate("HeaderAudioBooks"),items:Q}),(0,r.jsx)(S,{title:u.ZP.translate("Books"),items:ee}),(0,r.jsx)(S,{title:u.ZP.translate("Collections"),items:se}),(0,r.jsx)(S,{title:u.ZP.translate("People"),items:re,cardOptions:{coverImage:!0}})]}))},x=n(65009),j=n.n(x),k=n(52050),C=(n(38228),function(){return C=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},C.apply(this,arguments)}),E=function(e){var t=e.name,n=e.href;return{__html:"<a\n    is='emby-linkbutton'\n    class='button-link'\n    style='display: inline-block; padding: 0.5em 1em;'\n    href='".concat(n,"'\n>").concat(j()(t),"</a>")}},Z=function(e){var t=e.serverId,n=void 0===t?window.ApiClient.serverId():t,a=e.parentId,s=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,a=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)s.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(i)throw i.error}}return s}((0,i.useState)([]),2),o=s[0],l=s[1];return(0,i.useEffect)((function(){var e=y.Z.getApiClient(n);e.getItems(e.getCurrentUserId(),{SortBy:"IsFavoriteOrLiked,Random",IncludeItemTypes:"Movie,Series,MusicArtist",Limit:20,Recursive:!0,ImageTypeLimit:0,EnableImages:!1,ParentId:a,EnableTotalRecordCount:!1}).then((function(e){return l(e.Items||[])}))}),[a,n]),(0,r.jsxs)("div",C({className:"verticalSection searchSuggestions",style:{textAlign:"center"}},{children:[(0,r.jsx)("div",{children:(0,r.jsx)("h2",C({className:"sectionTitle padded-left padded-right"},{children:u.ZP.translate("Suggestions")}))}),(0,r.jsx)("div",C({className:"searchSuggestionsList padded-left padded-right"},{children:o.map((function(e){return(0,r.jsx)("div",{dangerouslySetInnerHTML:E({name:e.Name||"",href:k.appRouter.getRouteUrl(e)})},"suggestion-".concat(e.Id))}))}))]}))},A=function(){return A=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},A.apply(this,arguments)},L=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,a=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)s.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(i)throw i.error}}return s},O={preferThumb:!0,inheritThumb:!1,showParentTitleOrTitle:!0,showTitle:!1,coverImage:!0,overlayMoreButton:!0,showAirTime:!0,showAirDateTime:!0,showChannelName:!0},B=function(e){var t=e.serverId,n=void 0===t?window.ApiClient.serverId():t,a=e.parentId,s=e.collectionType,o=e.query,l=L((0,i.useState)([]),2),c=l[0],d=l[1],v=L((0,i.useState)([]),2),h=v[0],f=v[1],p=L((0,i.useState)([]),2),g=p[0],b=p[1],I=L((0,i.useState)([]),2),P=I[0],T=I[1],w=L((0,i.useState)([]),2),x=w[0],j=w[1],k=L((0,i.useState)([]),2),C=k[0],E=k[1],Z=L((0,i.useState)([]),2),B=Z[0],N=Z[1];return(0,i.useEffect)((function(){var e=function(e,t){return void 0===t&&(t={}),null==e?void 0:e.getItems(null==e?void 0:e.getCurrentUserId(),A(A(A({},{ParentId:a,searchTerm:o,Limit:24,Fields:"PrimaryImageAspectRatio,CanDelete,BasicSyncInfo,MediaSourceCount",Recursive:!0,EnableTotalRecordCount:!1,ImageTypeLimit:1,IncludePeople:!1,IncludeMedia:!1,IncludeGenres:!1,IncludeStudios:!1,IncludeArtists:!1}),{IncludeMedia:!0}),t))};if(d([]),f([]),b([]),T([]),j([]),E([]),N([]),o&&"livetv"===s){var t=y.Z.getApiClient(n);e(t,{IncludeItemTypes:"LiveTvProgram",IsMovie:!0}).then((function(e){return d(e.Items||[])})),e(t,{IncludeItemTypes:"LiveTvProgram",IsMovie:!1,IsSeries:!0,IsSports:!1,IsKids:!1,IsNews:!1}).then((function(e){return f(e.Items||[])})),e(t,{IncludeItemTypes:"LiveTvProgram",IsSports:!0}).then((function(e){return b(e.Items||[])})),e(t,{IncludeItemTypes:"LiveTvProgram",IsKids:!0}).then((function(e){return T(e.Items||[])})),e(t,{IncludeItemTypes:"LiveTvProgram",IsNews:!0}).then((function(e){return j(e.Items||[])})),e(t,{IncludeItemTypes:"LiveTvProgram",IsMovie:!1,IsSeries:!1,IsSports:!1,IsKids:!1,IsNews:!1}).then((function(e){return E(e.Items||[])})),e(t,{IncludeItemTypes:"TvChannel"}).then((function(e){return N(e.Items||[])}))}}),[s,a,o,n]),(0,r.jsxs)("div",A({className:m()("searchResults","padded-bottom-page","padded-top",{hide:!(o&&"livetv"===s)})},{children:[(0,r.jsx)(S,{title:u.ZP.translate("Movies"),items:c,cardOptions:A(A({},O),{shape:"overflowPortrait"})}),(0,r.jsx)(S,{title:u.ZP.translate("Episodes"),items:h,cardOptions:O}),(0,r.jsx)(S,{title:u.ZP.translate("Sports"),items:g,cardOptions:O}),(0,r.jsx)(S,{title:u.ZP.translate("Kids"),items:P,cardOptions:O}),(0,r.jsx)(S,{title:u.ZP.translate("News"),items:x,cardOptions:O}),(0,r.jsx)(S,{title:u.ZP.translate("Programs"),items:C,cardOptions:O}),(0,r.jsx)(S,{title:u.ZP.translate("Channels"),items:B,cardOptions:{shape:"square"}})]}))},N=function(){return N=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},N.apply(this,arguments)},M=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,a=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)s.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(i)throw i.error}}return s},R=function(){var e=M((0,i.useState)(),2),t=e[0],n=e[1],o=M((0,a.lr)(),1)[0];return(0,r.jsxs)(s.Z,N({id:"searchPage",title:u.ZP.translate("Search"),className:"mainAnimatedPage libraryPage allLibraryPage noSecondaryNavPage"},{children:[(0,r.jsx)(f,{onSearch:n}),!t&&(0,r.jsx)(Z,{serverId:o.get("serverId")||window.ApiClient.serverId(),parentId:o.get("parentId")}),(0,r.jsx)(w,{serverId:o.get("serverId")||window.ApiClient.serverId(),parentId:o.get("parentId"),collectionType:o.get("collectionType"),query:t}),(0,r.jsx)(B,{serverId:o.get("serverId")||window.ApiClient.serverId(),parentId:o.get("parentId"),collectionType:o.get("collectionType"),query:t})]}))}}}]);