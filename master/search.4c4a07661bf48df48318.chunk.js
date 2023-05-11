/*! For license information please see search.4c4a07661bf48df48318.chunk.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[66464,83264],{24432:function(e,t,n){"use strict";n(5769),n(63238),n(61418),n(17460),n(14078);var r=n(15723),i=n(72365),s=n(30325),o=n(58517),a=n(34643),l=n(57366),c=(n(67752),Object.create(HTMLDivElement.prototype));function u(e){var t=e.detail.command;"end"===t?(a.Z.focusLast(this,"."+this.getAttribute("data-navcommands")),e.preventDefault(),e.stopPropagation()):"pageup"===t?(a.Z.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),-12),e.preventDefault(),e.stopPropagation()):"pagedown"===t&&(a.Z.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),12),e.preventDefault(),e.stopPropagation())}c.createdCallback=function(){this.classList.add("emby-scroller")},c.scrollToBeginning=function(){this.scroller&&this.scroller.slideTo(0,!0)},c.toStart=function(e,t){this.scroller&&this.scroller.toStart(e,t)},c.toCenter=function(e,t){this.scroller&&this.scroller.toCenter(e,t)},c.scrollToPosition=function(e,t){this.scroller&&this.scroller.slideTo(e,t)},c.getScrollPosition=function(){if(this.scroller)return this.scroller.getScrollPosition()},c.getScrollSize=function(){if(this.scroller)return this.scroller.getScrollSize()},c.getScrollEventName=function(){if(this.scroller)return this.scroller.getScrollEventName()},c.getScrollSlider=function(){if(this.scroller)return this.scroller.getScrollSlider()},c.addScrollEventListener=function(e,t){this.scroller&&i.ZP.addEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},c.removeScrollEventListener=function(e,t){this.scroller&&i.ZP.removeEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},c.attachedCallback=function(){this.getAttribute("data-navcommands")&&o.default.on(this,u);var e="false"!==this.getAttribute("data-horizontal"),t=this.querySelector(".scrollSlider");e&&(t.style["white-space"]="nowrap");var c,d,h=s.Z.desktop&&e&&"false"!==this.getAttribute("data-scrollbuttons"),f={horizontal:e,mouseDragging:1,mouseWheel:"false"!==this.getAttribute("data-mousewheel"),touchDragging:1,slidee:t,scrollBy:200,speed:e?270:240,elasticBounds:1,dragHandle:1,autoImmediate:!0,skipSlideToWhenVisible:"true"===this.getAttribute("data-skipfocuswhenvisible"),dispatchScrollEvent:h||"true"===this.getAttribute("data-scrollevent"),hideScrollbar:h||"true"===this.getAttribute("data-hidescrollbar"),allowNativeSmoothScroll:"true"===this.getAttribute("data-allownativesmoothscroll")&&!h,allowNativeScroll:!h,forceHideScrollbars:h,requireAnimation:h&&l.Z.edge};this.scroller=new r.Z(this,f),this.scroller.init(),this.scroller.reload(),s.Z.tv&&this.getAttribute("data-centerfocus")&&(this,c=this.scroller,i.ZP.addEventListener(this,"focus",(function(e){var t=a.Z.focusableParent(e.target);t&&c.toCenter(t)}),{capture:!0,passive:!0})),h&&(d=this,n.e(39346).then(n.bind(n,39346)).then((function(){d.insertAdjacentHTML("beforebegin",'<div is="emby-scrollbuttons" class="emby-scrollbuttons padded-right"></div>')})))},c.pause=function(){var e=this.headroom;e&&e.pause()},c.resume=function(){var e=this.headroom;e&&e.resume()},c.detachedCallback=function(){this.getAttribute("data-navcommands")&&o.default.off(this,u);var e=this.headroom;e&&(e.destroy(),this.headroom=null);var t=this.scroller;t&&(t.destroy(),this.scroller=null)},document.registerElement("emby-scroller",{prototype:c,extends:"div"})},60042:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var s=typeof n;if("string"===s||"number"===s)e.push(n);else if(Array.isArray(n)){if(n.length){var o=i.apply(null,n);o&&e.push(o)}}else if("object"===s){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var a in n)r.call(n,a)&&n[a]&&e.push(a)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},5099:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return z}});var r=n(24246),i=n(27378),s=n(27851),o=n(6055),a=n(25883),l=n(12658),c=function(e){var t=e.onAlphaPicked,n=void 0===t?function(){}:t,s=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,s=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=s.next()).done;)o.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=s.return)&&n.call(s)}finally{if(i)throw i.error}}return o}((0,i.useState)(),2),o=s[0],a=s[1],c=(0,i.useRef)(null);return(0,i.useEffect)((function(){var e;return a(new l.Z({element:c.current,mode:"keyboard"})),null===(e=c.current)||void 0===e||e.addEventListener("alphavalueclicked",n),function(){null==o||o.destroy()}}),[]),(0,r.jsx)("div",{ref:c,className:"alphaPicker align-items-center"})},u=n(94994),d=(n(62033),n(30325)),h=n(57366),f=function(){return f=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},f.apply(this,arguments)},v=function(e){var t=e.onSearch,n=void 0===t?function(){}:t,s=(0,i.useRef)(null),o=function(){var e;return null===(e=null==s?void 0:s.current)||void 0===e?void 0:e.querySelector(".searchfields-txtSearch")},l=(0,i.useMemo)((function(){return(0,a.Z)(n,400)}),[n]);(0,i.useEffect)((function(){var e,t;return null===(e=o())||void 0===e||e.addEventListener("input",(function(e){var t;l((void 0===(t=e.target.value)&&(t=""),t.trim()))})),null===(t=o())||void 0===t||t.focus(),function(){l.cancel()}}),[l]);var v=(0,i.useCallback)((function(e){var t=e.detail.value,n=o();if(n){if("backspace"===t){var r=n.value;n.value=r.length?r.substring(0,r.length-1):""}else n.value+=t;n.dispatchEvent(new CustomEvent("input",{bubbles:!0}))}else console.error("Unexpected null reference")}),[]);return(0,r.jsxs)("div",f({className:"padded-left padded-right searchFields",ref:s},{children:[(0,r.jsxs)("div",f({className:"searchFieldsInner flex align-items-center justify-content-center"},{children:[(0,r.jsx)("span",{className:"searchfields-icon material-icons search","aria-hidden":"true"}),(0,r.jsx)("div",{className:"inputContainer flex-grow",style:{marginBottom:0},dangerouslySetInnerHTML:{__html:'<input\n    is="emby-input"\n    class="searchfields-txtSearch"\n    type="text"\n    data-keyboard="true"\n    placeholder="'.concat(u.ZP.translate("Search"),'"\n    autocomplete="off"\n    maxlength="40"\n    autofocus\n/>')}})]})),d.Z.tv&&!h.Z.tv&&(0,r.jsx)(c,{onAlphaPicked:v})]}))},p=n(60042),m=n.n(p),g=n(18613),I=n(61570),y=(n(24432),n(82427),function(){return y=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},y.apply(this,arguments)}),b=function(e){var t=e.title;return{__html:'<h2 class="sectionTitle sectionTitle-cards focuscontainer-x padded-left padded-right">'.concat(void 0===t?"":t,'</h2>\n    <div is="emby-scroller" data-horizontal="true" data-centerfocus="card" class="padded-top-focusscale padded-bottom-focusscale">\n    <div is="emby-itemscontainer" class="focuscontainer-x itemsContainer scrollSlider"></div>\n</div>')}},S=function(e){var t=e.title,n=e.items,s=void 0===n?[]:n,o=e.cardOptions,a=void 0===o?{}:o,l=(0,i.useRef)(null);return(0,i.useEffect)((function(){var e;I.default.buildCards(s,y({itemsContainer:null===(e=l.current)||void 0===e?void 0:e.querySelector(".itemsContainer"),parentContainer:l.current,shape:"autooverflow",scalable:!0,showTitle:!0,overlayText:!1,centerText:!0,allowBottomPadding:!1},a))}),[a,s]),(0,r.jsx)("div",{ref:l,className:"verticalSection",dangerouslySetInnerHTML:b({title:t})})},P=function(){return P=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},P.apply(this,arguments)},T=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,s=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=s.next()).done;)o.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=s.return)&&n.call(s)}finally{if(i)throw i.error}}return o},w=function(e){return P(P({},e),{Items:e.Items||[]})},x=function(e){return"movies"===e},j=function(e){return"tvshows"===e||"tv"===e},C=function(e){var t=e.serverId,n=void 0===t?window.ApiClient.serverId():t,s=e.parentId,o=e.collectionType,a=e.query,l=T((0,i.useState)([]),2),c=l[0],d=l[1],h=T((0,i.useState)([]),2),f=h[0],v=h[1],p=T((0,i.useState)([]),2),I=p[0],y=p[1],b=T((0,i.useState)([]),2),C=b[0],A=b[1],Z=T((0,i.useState)([]),2),O=Z[0],E=Z[1],k=T((0,i.useState)([]),2),L=k[0],M=k[1],N=T((0,i.useState)([]),2),B=N[0],R=N[1],D=T((0,i.useState)([]),2),q=D[0],H=D[1],F=T((0,i.useState)([]),2),U=F[0],_=F[1],z=T((0,i.useState)([]),2),K=z[0],V=z[1],G=T((0,i.useState)([]),2),W=G[0],X=G[1],Y=T((0,i.useState)([]),2),$=Y[0],J=Y[1],Q=T((0,i.useState)([]),2),ee=Q[0],te=Q[1],ne=T((0,i.useState)([]),2),re=ne[0],ie=ne[1],se=T((0,i.useState)([]),2),oe=se[0],ae=se[1],le=T((0,i.useState)([]),2),ce=le[0],ue=le[1],de=(0,i.useCallback)((function(){return{ParentId:s,searchTerm:a,Limit:24,Fields:"PrimaryImageAspectRatio,CanDelete,BasicSyncInfo,MediaSourceCount",Recursive:!0,EnableTotalRecordCount:!1,ImageTypeLimit:1,IncludePeople:!1,IncludeMedia:!1,IncludeGenres:!1,IncludeStudios:!1,IncludeArtists:!1}}),[s,a]),he=(0,i.useCallback)((function(e,t){return void 0===t&&(t={}),null==e?void 0:e.getArtists(e.getCurrentUserId(),P(P(P({},de()),{IncludeArtists:!0}),t)).then(w)}),[de]),fe=(0,i.useCallback)((function(e,t){return void 0===t&&(t={}),null==e?void 0:e.getItems(e.getCurrentUserId(),P(P(P({},de()),{IncludeMedia:!0}),t)).then(w)}),[de]),ve=(0,i.useCallback)((function(e,t){return void 0===t&&(t={}),null==e?void 0:e.getPeople(e.getCurrentUserId(),P(P(P({},de()),{IncludePeople:!0}),t)).then(w)}),[de]);return(0,i.useEffect)((function(){if(d([]),v([]),y([]),A([]),E([]),M([]),R([]),H([]),_([]),V([]),X([]),J([]),te([]),ie([]),ae([]),ue([]),a){var e=g.Z.getApiClient(n);o&&!x(o)||fe(e,{IncludeItemTypes:"Movie"}).then((function(e){return d(e.Items)})).catch((function(){return d([])})),o&&!j(o)||(fe(e,{IncludeItemTypes:"Series"}).then((function(e){return v(e.Items)})).catch((function(){return v([])})),fe(e,{IncludeItemTypes:"Episode"}).then((function(e){return y(e.Items)})).catch((function(){return y([])}))),(!o||x(o)||j(o))&&ve(e).then((function(e){return ae(e.Items)})).catch((function(){return ae([])})),o&&!function(e){return"music"===e}(o)||(fe(e,{IncludeItemTypes:"Playlist"}).then((function(e){return R(e.Items)})).catch((function(){return R([])})),he(e).then((function(e){return H(e.Items)})).catch((function(){return H([])})),fe(e,{IncludeItemTypes:"MusicAlbum"}).then((function(e){return _(e.Items)})).catch((function(){return _([])})),fe(e,{IncludeItemTypes:"Audio"}).then((function(e){return V(e.Items)})).catch((function(){return V([])}))),o||(fe(e,{MediaTypes:"Video",ExcludeItemTypes:"Movie,Episode,TvChannel"}).then((function(e){return A(e.Items)})).catch((function(){return A([])})),fe(e,{IncludeItemTypes:"LiveTvProgram"}).then((function(e){return E(e.Items)})).catch((function(){return E([])})),fe(e,{IncludeItemTypes:"TvChannel"}).then((function(e){return M(e.Items)})).catch((function(){return M([])})),fe(e,{IncludeItemTypes:"PhotoAlbum"}).then((function(e){return X(e.Items)})).catch((function(){return X([])})),fe(e,{IncludeItemTypes:"Photo"}).then((function(e){return J(e.Items)})).catch((function(){return J([])})),fe(e,{IncludeItemTypes:"AudioBook"}).then((function(e){return te(e.Items)})).catch((function(){return te([])})),fe(e,{IncludeItemTypes:"Book"}).then((function(e){return ie(e.Items)})).catch((function(){return ie([])})),fe(e,{IncludeItemTypes:"BoxSet"}).then((function(e){return ue(e.Items)})).catch((function(){return ue([])})))}}),[o,he,fe,ve,a,n]),(0,r.jsxs)("div",P({className:m()("searchResults","padded-bottom-page","padded-top",{hide:!a||"livetv"===o})},{children:[(0,r.jsx)(S,{title:u.ZP.translate("Movies"),items:c,cardOptions:{showYear:!0}}),(0,r.jsx)(S,{title:u.ZP.translate("Shows"),items:f,cardOptions:{showYear:!0}}),(0,r.jsx)(S,{title:u.ZP.translate("Episodes"),items:I,cardOptions:{coverImage:!0,showParentTitle:!0}}),(0,r.jsx)(S,{title:u.ZP.translate("HeaderVideos"),items:C,cardOptions:{showParentTitle:!0}}),(0,r.jsx)(S,{title:u.ZP.translate("Programs"),items:O,cardOptions:{preferThumb:!0,inheritThumb:!1,showParentTitleOrTitle:!0,showTitle:!1,coverImage:!0,overlayMoreButton:!0,showAirTime:!0,showAirDateTime:!0,showChannelName:!0}}),(0,r.jsx)(S,{title:u.ZP.translate("Channels"),items:L,cardOptions:{shape:"square"}}),(0,r.jsx)(S,{title:u.ZP.translate("Playlists"),items:B}),(0,r.jsx)(S,{title:u.ZP.translate("Artists"),items:q,cardOptions:{coverImage:!0}}),(0,r.jsx)(S,{title:u.ZP.translate("Albums"),items:U,cardOptions:{showParentTitle:!0}}),(0,r.jsx)(S,{title:u.ZP.translate("Songs"),items:K,cardOptions:{showParentTitle:!0}}),(0,r.jsx)(S,{title:u.ZP.translate("HeaderPhotoAlbums"),items:W}),(0,r.jsx)(S,{title:u.ZP.translate("Photos"),items:$}),(0,r.jsx)(S,{title:u.ZP.translate("HeaderAudioBooks"),items:ee}),(0,r.jsx)(S,{title:u.ZP.translate("Books"),items:re}),(0,r.jsx)(S,{title:u.ZP.translate("Collections"),items:ce}),(0,r.jsx)(S,{title:u.ZP.translate("People"),items:oe,cardOptions:{coverImage:!0}})]}))},A=n(16918),Z=n(74775),O=n(4877),E=n(65009),k=n.n(E),L=n(66560),M=n(99998),N=(n(38228),function(){return N=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},N.apply(this,arguments)}),B=function(e){var t=e.name,n=e.href;return{__html:"<a\n    is='emby-linkbutton'\n    class='button-link'\n    style='display: inline-block; padding: 0.5em 1em;'\n    href='".concat(n,"'\n>").concat(k()(t),"</a>")}},R=function(e){var t=e.parentId,n=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,s=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=s.next()).done;)o.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=s.return)&&n.call(s)}finally{if(i)throw i.error}}return o}((0,i.useState)([]),2),s=n[0],o=n[1],a=(0,M.h_)(),l=a.api,c=a.user;return(0,i.useEffect)((function(){l&&(null==c?void 0:c.Id)&&(0,Z.$)(l).getItemsByUserId({userId:c.Id,sortBy:[O.X.IsFavoriteOrLiked,O.X.Random],includeItemTypes:[A.k.Movie,A.k.Series,A.k.MusicArtist],limit:20,recursive:!0,imageTypeLimit:0,enableImages:!1,parentId:t||void 0,enableTotalRecordCount:!1}).then((function(e){return o(e.data.Items||[])})).catch((function(e){console.error("[SearchSuggestions] failed to fetch search suggestions",e),o([])}))}),[l,t,c]),(0,r.jsxs)("div",N({className:"verticalSection searchSuggestions",style:{textAlign:"center"}},{children:[(0,r.jsx)("div",{children:(0,r.jsx)("h2",N({className:"sectionTitle padded-left padded-right"},{children:u.ZP.translate("Suggestions")}))}),(0,r.jsx)("div",N({className:"searchSuggestionsList padded-left padded-right"},{children:s.map((function(e){return(0,r.jsx)("div",{dangerouslySetInnerHTML:B({name:e.Name||"",href:L.appRouter.getRouteUrl(e)})},"suggestion-".concat(e.Id))}))}))]}))},D=function(){return D=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},D.apply(this,arguments)},q=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,s=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=s.next()).done;)o.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=s.return)&&n.call(s)}finally{if(i)throw i.error}}return o},H={preferThumb:!0,inheritThumb:!1,showParentTitleOrTitle:!0,showTitle:!1,coverImage:!0,overlayMoreButton:!0,showAirTime:!0,showAirDateTime:!0,showChannelName:!0},F=function(e){var t=e.serverId,n=void 0===t?window.ApiClient.serverId():t,s=e.parentId,o=e.collectionType,a=e.query,l=q((0,i.useState)([]),2),c=l[0],d=l[1],h=q((0,i.useState)([]),2),f=h[0],v=h[1],p=q((0,i.useState)([]),2),I=p[0],y=p[1],b=q((0,i.useState)([]),2),P=b[0],T=b[1],w=q((0,i.useState)([]),2),x=w[0],j=w[1],C=q((0,i.useState)([]),2),A=C[0],Z=C[1],O=q((0,i.useState)([]),2),E=O[0],k=O[1];return(0,i.useEffect)((function(){var e=function(e,t){return void 0===t&&(t={}),null==e?void 0:e.getItems(null==e?void 0:e.getCurrentUserId(),D(D(D({},{ParentId:s,searchTerm:a,Limit:24,Fields:"PrimaryImageAspectRatio,CanDelete,BasicSyncInfo,MediaSourceCount",Recursive:!0,EnableTotalRecordCount:!1,ImageTypeLimit:1,IncludePeople:!1,IncludeMedia:!1,IncludeGenres:!1,IncludeStudios:!1,IncludeArtists:!1}),{IncludeMedia:!0}),t))};if(d([]),v([]),y([]),T([]),j([]),Z([]),k([]),a&&"livetv"===o){var t=g.Z.getApiClient(n);e(t,{IncludeItemTypes:"LiveTvProgram",IsMovie:!0}).then((function(e){return d(e.Items||[])})).catch((function(){return d([])})),e(t,{IncludeItemTypes:"LiveTvProgram",IsMovie:!1,IsSeries:!0,IsSports:!1,IsKids:!1,IsNews:!1}).then((function(e){return v(e.Items||[])})).catch((function(){return v([])})),e(t,{IncludeItemTypes:"LiveTvProgram",IsSports:!0}).then((function(e){return y(e.Items||[])})).catch((function(){return y([])})),e(t,{IncludeItemTypes:"LiveTvProgram",IsKids:!0}).then((function(e){return T(e.Items||[])})).catch((function(){return T([])})),e(t,{IncludeItemTypes:"LiveTvProgram",IsNews:!0}).then((function(e){return j(e.Items||[])})).catch((function(){return j([])})),e(t,{IncludeItemTypes:"LiveTvProgram",IsMovie:!1,IsSeries:!1,IsSports:!1,IsKids:!1,IsNews:!1}).then((function(e){return Z(e.Items||[])})).catch((function(){return Z([])})),e(t,{IncludeItemTypes:"TvChannel"}).then((function(e){return k(e.Items||[])})).catch((function(){return k([])}))}}),[o,s,a,n]),(0,r.jsxs)("div",D({className:m()("searchResults","padded-bottom-page","padded-top",{hide:!a||"livetv"!==o})},{children:[(0,r.jsx)(S,{title:u.ZP.translate("Movies"),items:c,cardOptions:D(D({},H),{shape:"overflowPortrait"})}),(0,r.jsx)(S,{title:u.ZP.translate("Episodes"),items:f,cardOptions:H}),(0,r.jsx)(S,{title:u.ZP.translate("Sports"),items:I,cardOptions:H}),(0,r.jsx)(S,{title:u.ZP.translate("Kids"),items:P,cardOptions:H}),(0,r.jsx)(S,{title:u.ZP.translate("News"),items:x,cardOptions:H}),(0,r.jsx)(S,{title:u.ZP.translate("Programs"),items:A,cardOptions:H}),(0,r.jsx)(S,{title:u.ZP.translate("Channels"),items:E,cardOptions:{shape:"square"}})]}))},U=function(){return U=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},U.apply(this,arguments)},_=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,s=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=s.next()).done;)o.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=s.return)&&n.call(s)}finally{if(i)throw i.error}}return o},z=function(){var e=_((0,i.useState)(),2),t=e[0],n=e[1],a=_((0,s.lr)(),1)[0];return(0,r.jsxs)(o.Z,U({id:"searchPage",title:u.ZP.translate("Search"),className:"mainAnimatedPage libraryPage allLibraryPage noSecondaryNavPage"},{children:[(0,r.jsx)(v,{onSearch:n}),!t&&(0,r.jsx)(R,{parentId:a.get("parentId")}),(0,r.jsx)(C,{serverId:a.get("serverId")||window.ApiClient.serverId(),parentId:a.get("parentId"),collectionType:a.get("collectionType"),query:t}),(0,r.jsx)(F,{serverId:a.get("serverId")||window.ApiClient.serverId(),parentId:a.get("parentId"),collectionType:a.get("collectionType"),query:t})]}))}},6055:function(e,t,n){"use strict";var r=n(24246),i=n(27378),s=n(53424),o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},o.apply(this,arguments)};t.Z=function(e){var t=e.children,n=e.id,a=e.className,l=void 0===a?"":a,c=e.title,u=e.isBackButtonEnabled,d=void 0===u||u,h=e.isMenuButtonEnabled,f=void 0!==h&&h,v=e.isNowPlayingBarEnabled,p=void 0===v||v,m=e.isThemeMediaSupported,g=void 0!==m&&m,I=e.backDropType,y=(0,i.useRef)(null);return(0,i.useEffect)((function(){s.Z.hideView()}),[]),(0,i.useEffect)((function(){var e,t,n,r,i={bubbles:!0,cancelable:!1,detail:{isRestored:!1,options:{enableMediaControl:p,supportsThemeMedia:g}}};null===(e=y.current)||void 0===e||e.dispatchEvent(new CustomEvent("viewbeforeshow",i)),null===(t=y.current)||void 0===t||t.dispatchEvent(new CustomEvent("pagebeforeshow",i)),null===(n=y.current)||void 0===n||n.dispatchEvent(new CustomEvent("viewshow",i)),null===(r=y.current)||void 0===r||r.dispatchEvent(new CustomEvent("pageshow",i))}),[y,p,g]),(0,r.jsx)("div",o({ref:y,id:n,"data-role":"page",className:"page ".concat(l),"data-title":c,"data-backbutton":d,"data-menubutton":f,"data-backdroptype":I},{children:t}))}}}]);