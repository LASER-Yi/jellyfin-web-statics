/*! For license information please see search.53771e3d899ac374eff7.chunk.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[66464,85441],{12658:function(e,t,n){"use strict";n.d(t,{w:function(){return v}}),n(84159),n(96626),n(44901),n(26031),n(95822),n(56187),n(38690),n(81414),n(11908),n(33096),n(89228),n(13227),n(14011),n(11431);var r=n(34643),i=n(30325),a=n(72365),s=n(94994);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,c(r.key),r)}}function c(e){var t=function(e,t){if("object"!=o(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==o(t)?t:String(t)}n(61414);var u="alphaPickerButton-selected";function d(){var e=this.querySelector(".".concat(u));e?r.Z.focus(e):r.Z.autoFocus(this,!0)}function f(e){var t="alphaPickerButton";return i.Z.tv&&(t+=" alphaPickerButton-tv"),e&&(t+=" alphaPickerButton-vertical"),t}function h(e,t){return e.map((function(e){return function(e,t){return'<button data-value="'.concat(e,'" class="').concat(f(t),'">').concat(e,"</button>")}(e,t)}))}var v=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var n=this;this.options=t;var r,o,l,c,u=t.element,v=t.itemsContainer,m=t.itemClass;function p(){o=null,n.value(r)}function y(){if(c=null,document.activeElement===l){var e=l.getAttribute("data-value");n.value(e,!0)}}function b(e){var t=a.ZP.parentWithClass(e.target,"alphaPickerButton");if(t){var n=t.getAttribute("data-value");u.dispatchEvent(new CustomEvent("alphavalueclicked",{cancelable:!1,detail:{value:n}}))}}function g(e){var t=a.ZP.parentWithClass(e.target,"alphaPickerButton");if(t){var n=t.getAttribute("data-value");(this._currentValue||"").toUpperCase()===n.toUpperCase()?this.value(null,!0):this.value(n,!0)}}function I(e){c&&(clearTimeout(c),c=null);var t=a.ZP.parentWithClass(e.target,"alphaPickerButton");t&&(l=t,c=setTimeout(y,600))}function S(e){var t=a.ZP.parentWithClass(e.target,m);if(t){var n=t.getAttribute("data-prefix");null!=n&&n.length&&(r=n[0],o&&clearTimeout(o),o=setTimeout(p,100))}}this.enabled=function(e){e?(v&&v.addEventListener("focus",S,!0),"keyboard"===t.mode&&u.addEventListener("click",b),"click"!==t.valueChangeEvent?u.addEventListener("focus",I,!0):u.addEventListener("click",g.bind(this))):(v&&v.removeEventListener("focus",S,!0),u.removeEventListener("click",b),u.removeEventListener("focus",I,!0),u.removeEventListener("click",g.bind(this)))},function(e,t){e.classList.add("alphaPicker"),i.Z.tv&&e.classList.add("alphaPicker-tv");var n=e.classList.contains("alphaPicker-vertical");n||e.classList.add("focuscontainer-x");var r,a="",o=f(n),l="alphaPickerRow";n&&(l+=" alphaPickerRow-vertical"),a+='<div class="'.concat(l,'">'),"keyboard"===t.mode?a+='<button data-value=" " is="paper-icon-button-light" class="'.concat(o,'" aria-label="').concat(s.ZP.translate("ButtonSpace"),'"><span class="material-icons alphaPickerButtonIcon space_bar" aria-hidden="true"></span></button>'):a+=h(r=["#"],n).join(""),a+=h(r=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],n).join(""),"keyboard"===t.mode?(a+='<button data-value="backspace" is="paper-icon-button-light" class="'.concat(o,'" aria-label="').concat(s.ZP.translate("ButtonBackspace"),'"><span class="material-icons alphaPickerButtonIcon backspace" aria-hidden="true"></span></button>'),a+="</div>",r=["0","1","2","3","4","5","6","7","8","9"],a+='<div class="'.concat(l,'">'),a+="<br/>",a+=h(r,n).join(""),a+="</div>"):a+="</div>",e.innerHTML=a,e.classList.add("focusable"),e.focus=d}(u,t),this.enabled(!0),this.visible(!0)}var t,n;return t=e,(n=[{key:"value",value:function(e,t){var n,r,i=this.options.element;if(void 0!==e)if(null!=e){if(e=e.toUpperCase(),this._currentValue=e,"keyboard"!==this.options.mode){r=i.querySelector(".".concat(u));try{n=i.querySelector(".alphaPickerButton[data-value='".concat(e,"']"))}catch(e){console.error("error in querySelector:",e)}n&&n!==r&&n.classList.add(u),r&&r!==n&&r.classList.remove(u)}}else this._currentValue=e,(r=i.querySelector(".".concat(u)))&&r.classList.remove(u);return t&&i.dispatchEvent(new CustomEvent("alphavaluechanged",{cancelable:!1,detail:{value:e}})),this._currentValue}},{key:"on",value:function(e,t){this.options.element.addEventListener(e,t)}},{key:"off",value:function(e,t){this.options.element.removeEventListener(e,t)}},{key:"updateControls",value:function(e){e.NameLessThan?this.value("#"):this.value(e.NameStartsWith),this.visible(-1!==e.SortBy.indexOf("SortName"))}},{key:"visible",value:function(e){this.options.element.style.visibility=e?"visible":"hidden"}},{key:"values",value:function(){for(var e=this.options.element.querySelectorAll(".alphaPickerButton"),t=[],n=0,r=e.length;n<r;n++)t.push(e[n].getAttribute("data-value"));return t}},{key:"focus",value:function(){var e=this.options.element;r.Z.autoFocus(e,!0)}},{key:"destroy",value:function(){var e=this.options.element;this.enabled(!1),e.classList.remove("focuscontainer-x"),this.options=null}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.Z=v},82427:function(e,t,n){"use strict";n(13227),n(81414),n(37666),n(14011),n(11431),n(44901),n(54112);var r=n(61008),i=n(58517),a=n(2513),s=n(85432),o=n(30325),l=n(57366),c=n(72365),u=n(34862),d=n(34643),f=n(44038),h=n(74131),v=(n(67752),n(18613)),m=n(28172),p=Object.create(HTMLDivElement.prototype);function y(e){var t=this,n=t.multiSelect;!1!==(null==n?void 0:n.onContainerClick.call(t,e))&&r.ZP.onClick.call(t,e)}function b(e){return e.preventDefault(),e.stopPropagation(),!1}function g(e){var t=e.target,n=c.ZP.parentWithAttribute(t,"data-id");if(null!=n&&n.getAttribute("data-serverid"))return i.default.handleCommand("menu",{sourceElement:n}),e.preventDefault(),e.stopPropagation(),!1}function I(e,t,r){var i=this;Promise.all([n.e(61570),n.e(85441)]).then(n.bind(n,61570)).then((function(e){e.onUserDataChanged(r,i)}));var a=S(i);-1===a.indexOf("markfavorite")&&-1===a.indexOf("markplayed")||i.notifyRefreshNeeded()}function S(e){var t=e.getAttribute("data-monitor");return t?t.split(","):[]}function P(e,t,r){var i=this;if(-1===S(i).indexOf("timers")){var a=r.ProgramId,s=r.Id;Promise.all([n.e(61570),n.e(85441)]).then(n.bind(n,61570)).then((function(e){e.onTimerCreated(a,s,i)}))}else i.notifyRefreshNeeded()}function T(){-1!==S(this).indexOf("seriestimers")&&this.notifyRefreshNeeded()}function x(e,t,r){var i=this;-1===S(i).indexOf("timers")?Promise.all([n.e(61570),n.e(85441)]).then(n.bind(n,61570)).then((function(e){e.onTimerCancelled(r.Id,i)})):i.notifyRefreshNeeded()}function C(e,t,r){var i=this;-1===S(i).indexOf("seriestimers")?Promise.all([n.e(61570),n.e(85441)]).then(n.bind(n,61570)).then((function(e){e.onSeriesTimerCancelled(r.Id,i)})):i.notifyRefreshNeeded()}function w(e,t,n){var r=this,i=S(r);if(-1===i.indexOf("seriestimers")&&-1===i.indexOf("timers")){var a=n.ItemsAdded||[],s=n.ItemsRemoved||[];if(a.length||s.length){var o=r.getAttribute("data-parentid");if(o){var l=n.FoldersAddedTo||[],c=n.FoldersRemovedFrom||[],u=n.CollectionFolders||[];if(-1===l.indexOf(o)&&-1===c.indexOf(o)&&-1===u.indexOf(o))return}r.notifyRefreshNeeded()}}}function k(e,t){var n,r=this,i=t.state,a=S(r);if(i.NowPlayingItem&&"Video"===i.NowPlayingItem.MediaType){if(-1!==a.indexOf("videoplayback"))return void r.notifyRefreshNeeded(!0)}else if("Audio"===(null===(n=i.NowPlayingItem)||void 0===n?void 0:n.MediaType)&&-1!==a.indexOf("audioplayback"))return void r.notifyRefreshNeeded(!0)}function j(e,t,n,r){var i=n.bind(e);r=r||f.default,h.Z.on(r,t,i),e["event_"+t]=i}function E(e,t,n){var r=e["event_"+t];r&&(n=n||f.default,h.Z.off(n,t,r),e["event_"+t]=null)}function Z(e,t){e.refreshInterval&&(clearInterval(e.refreshInterval),e.refreshInterval=null,t||(e.refreshIntervalEndTime=null))}function O(e,t){Z(e),t||(t=parseInt(e.getAttribute("data-refreshinterval")||"0",10)),t&&(e.refreshInterval=setInterval(e.notifyRefreshNeeded.bind(e),t),e.refreshIntervalEndTime=(new Date).getTime()+t)}function A(e){var t=e.Items||e,n=this.parentContainer;n&&(t.length?n.classList.remove("hide"):n.classList.add("hide"));var r,i,a=document.activeElement;this.contains(a)&&(i=!0,r=a.getAttribute("data-id")),this.innerHTML=this.getItemsHtml(t),s.default.lazyChildren(this),i&&function(e,t){if(t){var n=e.querySelector('[data-id="'+t+'"]');if(n)try{return void d.Z.focus(n)}catch(e){console.error(e)}}d.Z.autoFocus(e)}(this,r),O(this),this.afterRefresh&&this.afterRefresh(e)}p.enableMultiSelect=function(e){var t=this.multiSelect;if(e){if(!t){var r=this;n.e(52943).then(n.bind(n,8156)).then((function(e){var t=e.default;r.multiSelect=new t({container:r,bindOnClick:!1})}))}}else t&&(t.destroy(),this.multiSelect=null)},p.enableDragReordering=function(e){var t=this.sortable;if(e){if(!t){var n=this;n.sortable=new m.ZP(n,{draggable:".listItem",handle:".listViewDragHandle",onEnd:function(e){return function(e,t){var n=e.item,r=e.newIndex,i=n.getAttribute("data-playlistitemid"),a=n.getAttribute("data-playlistid");if(a){var s=n.getAttribute("data-serverid"),o=v.Z.getApiClient(s);u.ZP.show(),o.ajax({url:o.getUrl("Playlists/"+a+"/Items/"+i+"/Move/"+r),type:"POST"}).then((function(){u.ZP.hide()}),(function(){u.ZP.hide(),t.refreshItems()}))}else{var l=e.oldIndex;n.dispatchEvent(new CustomEvent("itemdrop",{detail:{oldIndex:l,newIndex:r,playlistItemId:i},bubbles:!0,cancelable:!1}))}}(e,n)}})}}else t&&(t.destroy(),this.sortable=null)},p.createdCallback=function(){this.classList.add("itemsContainer")},p.attachedCallback=function(){this.addEventListener("click",y),l.Z.touch?this.addEventListener("contextmenu",b):"false"!==this.getAttribute("data-contextmenu")&&this.addEventListener("contextmenu",g),(o.Z.desktop||o.Z.mobile&&"false"!==this.getAttribute("data-multiselect"))&&this.enableMultiSelect(!0),o.Z.tv&&this.classList.add("itemsContainer-tv"),r.ZP.on(this,{click:!1}),j(this,"UserDataChanged",I),j(this,"TimerCreated",P),j(this,"SeriesTimerCreated",T),j(this,"TimerCancelled",x),j(this,"SeriesTimerCancelled",C),j(this,"LibraryChanged",w),j(this,"playbackstop",k,a.O),"true"===this.getAttribute("data-dragreorder")&&this.enableDragReordering(!0)},p.detachedCallback=function(){Z(this),this.enableMultiSelect(!1),this.enableDragReordering(!1),this.removeEventListener("click",y),this.removeEventListener("contextmenu",g),this.removeEventListener("contextmenu",b),r.ZP.off(this,{click:!1}),E(this,"UserDataChanged"),E(this,"TimerCreated"),E(this,"SeriesTimerCreated"),E(this,"TimerCancelled"),E(this,"SeriesTimerCancelled"),E(this,"LibraryChanged"),E(this,"playbackstop",a.O),this.fetchData=null,this.getItemsHtml=null,this.parentContainer=null},p.pause=function(){Z(this,!0),this.paused=!0},p.resume=function(e){this.paused=!1;var t=this.refreshIntervalEndTime;if(t){var n=t-(new Date).getTime();n>0&&!this.needsRefresh?O(this,n):(this.needsRefresh=!0,this.refreshIntervalEndTime=null)}return this.needsRefresh||null!=e&&e.refresh?this.refreshItems():Promise.resolve()},p.refreshItems=function(){return this.fetchData?this.paused?(this.needsRefresh=!0,Promise.resolve()):(this.needsRefresh=!1,this.fetchData().then(A.bind(this))):Promise.resolve()},p.notifyRefreshNeeded=function(e){if(this.paused)this.needsRefresh=!0;else{var t=this.refreshTimeout;t&&clearTimeout(t),!0===e?this.refreshItems():this.refreshTimeout=setTimeout(this.refreshItems.bind(this),1e4)}},document.registerElement("emby-itemscontainer",{prototype:p,extends:"div"})},24432:function(e,t,n){"use strict";n(13227),n(81414),n(37666),n(14011),n(11431);var r=n(15723),i=n(72365),a=n(30325),s=n(58517),o=n(34643),l=n(57366),c=(n(67752),Object.create(HTMLDivElement.prototype));function u(e){var t=e.detail.command;"end"===t?(o.Z.focusLast(this,"."+this.getAttribute("data-navcommands")),e.preventDefault(),e.stopPropagation()):"pageup"===t?(o.Z.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),-12),e.preventDefault(),e.stopPropagation()):"pagedown"===t&&(o.Z.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),12),e.preventDefault(),e.stopPropagation())}c.createdCallback=function(){this.classList.add("emby-scroller")},c.scrollToBeginning=function(){this.scroller&&this.scroller.slideTo(0,!0)},c.toStart=function(e,t){this.scroller&&this.scroller.toStart(e,t)},c.toCenter=function(e,t){this.scroller&&this.scroller.toCenter(e,t)},c.scrollToPosition=function(e,t){this.scroller&&this.scroller.slideTo(e,t)},c.getScrollPosition=function(){if(this.scroller)return this.scroller.getScrollPosition()},c.getScrollSize=function(){if(this.scroller)return this.scroller.getScrollSize()},c.getScrollEventName=function(){if(this.scroller)return this.scroller.getScrollEventName()},c.getScrollSlider=function(){if(this.scroller)return this.scroller.getScrollSlider()},c.addScrollEventListener=function(e,t){this.scroller&&i.ZP.addEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},c.removeScrollEventListener=function(e,t){this.scroller&&i.ZP.removeEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},c.attachedCallback=function(){this.getAttribute("data-navcommands")&&s.default.on(this,u);var e="false"!==this.getAttribute("data-horizontal"),t=this.querySelector(".scrollSlider");e&&(t.style["white-space"]="nowrap");var c,d,f=a.Z.desktop&&e&&"false"!==this.getAttribute("data-scrollbuttons"),h={horizontal:e,mouseDragging:1,mouseWheel:"false"!==this.getAttribute("data-mousewheel"),touchDragging:1,slidee:t,scrollBy:200,speed:e?270:240,elasticBounds:1,dragHandle:1,autoImmediate:!0,skipSlideToWhenVisible:"true"===this.getAttribute("data-skipfocuswhenvisible"),dispatchScrollEvent:f||"true"===this.getAttribute("data-scrollevent"),hideScrollbar:f||"true"===this.getAttribute("data-hidescrollbar"),allowNativeSmoothScroll:"true"===this.getAttribute("data-allownativesmoothscroll")&&!f,allowNativeScroll:!f,forceHideScrollbars:f,requireAnimation:f&&l.Z.edge};this.scroller=new r.Z(this,h),this.scroller.init(),this.scroller.reload(),a.Z.tv&&this.getAttribute("data-centerfocus")&&(this,c=this.scroller,i.ZP.addEventListener(this,"focus",(function(e){var t=o.Z.focusableParent(e.target);t&&c.toCenter(t)}),{capture:!0,passive:!0})),f&&(d=this,n.e(39346).then(n.bind(n,39346)).then((function(){d.insertAdjacentHTML("beforebegin",'<div is="emby-scrollbuttons" class="emby-scrollbuttons padded-right"></div>')})))},c.pause=function(){var e=this.headroom;e&&e.pause()},c.resume=function(){var e=this.headroom;e&&e.resume()},c.detachedCallback=function(){this.getAttribute("data-navcommands")&&s.default.off(this,u);var e=this.headroom;e&&(e.destroy(),this.headroom=null);var t=this.scroller;t&&(t.destroy(),this.scroller=null)},document.registerElement("emby-scroller",{prototype:c,extends:"div"})},33198:function(e,t,n){var r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,s=/^0o[0-7]+$/i,o=parseInt,l="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,c="object"==typeof self&&self&&self.Object===Object&&self,u=l||c||Function("return this")(),d=Object.prototype.toString,f=Math.max,h=Math.min,v=function(){return u.Date.now()};function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(m(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=m(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=a.test(e);return n||s.test(e)?o(e.slice(2),n?2:8):i.test(e)?NaN:+e}e.exports=function(e,t,n){var r,i,a,s,o,l,c=0,u=!1,d=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,a=i;return r=i=void 0,c=t,s=e.apply(a,n)}function g(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function I(){var e=v();if(g(e))return S(e);o=setTimeout(I,function(e){var n=t-(e-l);return d?h(n,a-(e-c)):n}(e))}function S(e){return o=void 0,y&&r?b(e):(r=i=void 0,s)}function P(){var e=v(),n=g(e);if(r=arguments,i=this,l=e,n){if(void 0===o)return function(e){return c=e,o=setTimeout(I,t),u?b(e):s}(l);if(d)return o=setTimeout(I,t),b(l)}return void 0===o&&(o=setTimeout(I,t)),s}return t=p(t)||0,m(n)&&(u=!!n.leading,a=(d="maxWait"in n)?f(p(n.maxWait)||0,t):a,y="trailing"in n?!!n.trailing:y),P.cancel=function(){void 0!==o&&clearTimeout(o),c=0,r=l=i=o=void 0},P.flush=function(){return void 0===o?s:S(v())},P}},6489:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return X}});var r=n(24246),i=n(27378),a=n(27851),s=n(32459),o=n(12658),l=function(e){var t=e.onAlphaPicked,n=void 0===t?function(){}:t,a=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,a=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)s.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(i)throw i.error}}return s}((0,i.useState)(),2),s=a[0],l=a[1],c=(0,i.useRef)(null);return(0,i.useEffect)((function(){var e;return l(new o.Z({element:c.current,mode:"keyboard"})),null===(e=c.current)||void 0===e||e.addEventListener("alphavalueclicked",n),function(){null==s||s.destroy()}}),[]),(0,r.jsx)("div",{ref:c,className:"alphaPicker align-items-center"})},c=n(90005),u=n.n(c),d=function(){return d=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},d.apply(this,arguments)},f=function(e){var t=e.id,n=e.label,a=e.className,s=e.onBlur,o=e.onFocus,l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(e,["id","label","className","onBlur","onFocus"]),c=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,a=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)s.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(i)throw i.error}}return s}((0,i.useState)(!1),2),f=c[0],h=c[1],v=(0,i.useCallback)((function(e){h(!1),null==s||s(e)}),[s]),m=(0,i.useCallback)((function(e){h(!0),null==o||o(e)}),[o]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("label",{htmlFor:t,className:u()("inputLabel",{inputLabelUnfocused:!f,inputLabelFocused:f}),children:n}),(0,r.jsx)("input",d({id:t,className:u()("emby-input",a),onBlur:v,onFocus:m},l))]})},h=n(94994),v=n(30325),m=n(57366),p=function(e){var t=e.onSearch,n=void 0===t?function(){}:t,a=e.query,s=(0,i.useCallback)((function(e){var t=e.detail.value;n("backspace"===t?a.length?a.substring(0,a.length-1):"":a+t)}),[n,a]),o=(0,i.useCallback)((function(e){n(e.target.value)}),[n]);return(0,r.jsxs)("div",{className:"padded-left padded-right searchFields",children:[(0,r.jsxs)("div",{className:"searchFieldsInner flex align-items-center justify-content-center",children:[(0,r.jsx)("span",{className:"searchfields-icon material-icons search","aria-hidden":"true"}),(0,r.jsx)("div",{className:"inputContainer flex-grow",style:{marginBottom:0},children:(0,r.jsx)(f,{id:"searchTextInput",className:"searchfields-txtSearch",type:"text","data-keyboard":"true",placeholder:h.ZP.translate("Search"),autoComplete:"off",maxLength:40,autoFocus:!0,value:a,onChange:o})})]}),v.Z.tv&&!m.Z.tv&&(0,r.jsx)(l,{onAlphaPicked:s})]})},y=n(13868),b=n(12140),g=n(18613),I=n(61570),S=(n(24432),n(82427),function(){return S=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},S.apply(this,arguments)}),P=function(e){var t=e.title;return{__html:'<h2 class="sectionTitle sectionTitle-cards focuscontainer-x padded-left padded-right">'.concat(void 0===t?"":t,'</h2>\n    <div is="emby-scroller" data-horizontal="true" data-centerfocus="card" class="padded-top-focusscale padded-bottom-focusscale">\n    <div is="emby-itemscontainer" class="focuscontainer-x itemsContainer scrollSlider"></div>\n</div>')}},T=function(e){var t=e.title,n=e.items,a=void 0===n?[]:n,s=e.cardOptions,o=void 0===s?{}:s,l=(0,i.useRef)(null);return(0,i.useEffect)((function(){var e;I.default.buildCards(a,S({itemsContainer:null===(e=l.current)||void 0===e?void 0:e.querySelector(".itemsContainer"),parentContainer:l.current,shape:"autooverflow",scalable:!0,showTitle:!0,overlayText:!1,centerText:!0,allowBottomPadding:!1},o))}),[o,a]),(0,r.jsx)("div",{ref:l,className:"verticalSection",dangerouslySetInnerHTML:P({title:t})})},x=n(81905),C=function(){return C=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},C.apply(this,arguments)},w=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,a=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)s.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(i)throw i.error}}return s},k=function(e){return C(C({},e),{Items:e.Items||[]})},j=function(e){return e===y.y.Movies},E=function(e){return e===y.y.Tvshows},Z=function(e){var t=e.serverId,n=void 0===t?window.ApiClient.serverId():t,a=e.parentId,s=e.collectionType,o=e.query,l=w((0,i.useState)([]),2),c=l[0],d=l[1],f=w((0,i.useState)([]),2),v=f[0],m=f[1],p=w((0,i.useState)([]),2),I=p[0],S=p[1],P=w((0,i.useState)([]),2),Z=P[0],O=P[1],A=w((0,i.useState)([]),2),L=A[0],N=A[1],R=w((0,i.useState)([]),2),M=R[0],B=R[1],D=w((0,i.useState)([]),2),F=D[0],q=D[1],H=w((0,i.useState)([]),2),U=H[0],_=H[1],V=w((0,i.useState)([]),2),W=V[0],z=V[1],K=w((0,i.useState)([]),2),$=K[0],G=K[1],X=w((0,i.useState)([]),2),Y=X[0],J=X[1],Q=w((0,i.useState)([]),2),ee=Q[0],te=Q[1],ne=w((0,i.useState)([]),2),re=ne[0],ie=ne[1],ae=w((0,i.useState)([]),2),se=ae[0],oe=ae[1],le=w((0,i.useState)([]),2),ce=le[0],ue=le[1],de=w((0,i.useState)([]),2),fe=de[0],he=de[1],ve=w((0,i.useState)(!1),2),me=ve[0],pe=ve[1],ye=w((0,b.nj)(o,500),1)[0],be=(0,i.useCallback)((function(){return{ParentId:a,searchTerm:ye,Limit:100,Fields:"PrimaryImageAspectRatio,CanDelete,MediaSourceCount",Recursive:!0,EnableTotalRecordCount:!1,ImageTypeLimit:1,IncludePeople:!1,IncludeMedia:!1,IncludeGenres:!1,IncludeStudios:!1,IncludeArtists:!1}}),[a,ye]),ge=(0,i.useCallback)((function(e,t){return void 0===t&&(t={}),null==e?void 0:e.getArtists(e.getCurrentUserId(),C(C(C({},be()),{IncludeArtists:!0}),t)).then(k)}),[be]),Ie=(0,i.useCallback)((function(e,t){return void 0===t&&(t={}),null==e?void 0:e.getItems(e.getCurrentUserId(),C(C(C({},be()),{IncludeMedia:!0}),t)).then(k)}),[be]),Se=(0,i.useCallback)((function(e,t){return void 0===t&&(t={}),null==e?void 0:e.getPeople(e.getCurrentUserId(),C(C(C({},be()),{IncludePeople:!0}),t)).then(k)}),[be]);(0,i.useEffect)((function(){o&&pe(!0)}),[o]),(0,i.useEffect)((function(){if(d([]),m([]),S([]),O([]),N([]),B([]),q([]),_([]),z([]),G([]),J([]),te([]),ie([]),oe([]),ue([]),he([]),ye){var e=g.Z.getApiClient(n),t=[];s&&!j(s)||t.push(Ie(e,{IncludeItemTypes:"Movie"}).then((function(e){return d(e.Items)})).catch((function(){return d([])}))),s&&!E(s)||t.push(Ie(e,{IncludeItemTypes:"Series"}).then((function(e){return m(e.Items)})).catch((function(){return m([])})),Ie(e,{IncludeItemTypes:"Episode"}).then((function(e){return S(e.Items)})).catch((function(){return S([])}))),(!s||j(s)||E(s))&&t.push(Se(e).then((function(e){return ue(e.Items)})).catch((function(){return ue([])}))),s&&!function(e){return e===y.y.Music}(s)||t.push(Ie(e,{IncludeItemTypes:"Playlist"}).then((function(e){return q(e.Items)})).catch((function(){return q([])})),ge(e).then((function(e){return _(e.Items)})).catch((function(){return _([])})),Ie(e,{IncludeItemTypes:"MusicAlbum"}).then((function(e){return z(e.Items)})).catch((function(){return z([])})),Ie(e,{IncludeItemTypes:"Audio"}).then((function(e){return G(e.Items)})).catch((function(){return G([])}))),s||t.push(Ie(e,{MediaTypes:"Video",ExcludeItemTypes:"Movie,Episode,TvChannel"}).then((function(e){return O(e.Items)})).catch((function(){return O([])})),Ie(e,{IncludeItemTypes:"LiveTvProgram"}).then((function(e){return N(e.Items)})).catch((function(){return N([])})),Ie(e,{IncludeItemTypes:"TvChannel"}).then((function(e){return B(e.Items)})).catch((function(){return B([])})),Ie(e,{IncludeItemTypes:"PhotoAlbum"}).then((function(e){return J(e.Items)})).catch((function(){return J([])})),Ie(e,{IncludeItemTypes:"Photo"}).then((function(e){return te(e.Items)})).catch((function(){return te([])})),Ie(e,{IncludeItemTypes:"AudioBook"}).then((function(e){return ie(e.Items)})).catch((function(){return ie([])})),Ie(e,{IncludeItemTypes:"Book"}).then((function(e){return oe(e.Items)})).catch((function(){return oe([])})),Ie(e,{IncludeItemTypes:"BoxSet"}).then((function(e){return he(e.Items)})).catch((function(){return he([])}))),Promise.all(t).then((function(){pe(!1)})).catch((function(e){console.error("An error occurred while fetching data:",e),pe(!1)}))}else pe(!1)}),[s,ge,Ie,Se,ye,n]);var Pe=[c,v,I,Z,L,M,F,U,W,$,Y,ee,re,se,ce,fe].every((function(e){return 0===e.length}));return(0,r.jsx)("div",{className:u()("searchResults","padded-bottom-page","padded-top",{hide:!ye||s===y.y.Livetv}),children:me?(0,r.jsx)(x.Z,{}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(T,{title:h.ZP.translate("Movies"),items:c,cardOptions:{showYear:!0}}),(0,r.jsx)(T,{title:h.ZP.translate("Shows"),items:v,cardOptions:{showYear:!0}}),(0,r.jsx)(T,{title:h.ZP.translate("Episodes"),items:I,cardOptions:{coverImage:!0,showParentTitle:!0}}),(0,r.jsx)(T,{title:h.ZP.translate("HeaderVideos"),items:Z,cardOptions:{showParentTitle:!0}}),(0,r.jsx)(T,{title:h.ZP.translate("Programs"),items:L,cardOptions:{preferThumb:!0,inheritThumb:!1,showParentTitleOrTitle:!0,showTitle:!1,coverImage:!0,overlayMoreButton:!0,showAirTime:!0,showAirDateTime:!0,showChannelName:!0}}),(0,r.jsx)(T,{title:h.ZP.translate("Channels"),items:M,cardOptions:{shape:"square"}}),(0,r.jsx)(T,{title:h.ZP.translate("Playlists"),items:F}),(0,r.jsx)(T,{title:h.ZP.translate("Artists"),items:U,cardOptions:{coverImage:!0}}),(0,r.jsx)(T,{title:h.ZP.translate("Albums"),items:W,cardOptions:{showParentTitle:!0}}),(0,r.jsx)(T,{title:h.ZP.translate("Songs"),items:$,cardOptions:{showParentTitle:!0}}),(0,r.jsx)(T,{title:h.ZP.translate("HeaderPhotoAlbums"),items:Y}),(0,r.jsx)(T,{title:h.ZP.translate("Photos"),items:ee}),(0,r.jsx)(T,{title:h.ZP.translate("HeaderAudioBooks"),items:re}),(0,r.jsx)(T,{title:h.ZP.translate("Books"),items:se}),(0,r.jsx)(T,{title:h.ZP.translate("Collections"),items:fe}),(0,r.jsx)(T,{title:h.ZP.translate("People"),items:ce,cardOptions:{coverImage:!0}}),Pe&&ye&&!me&&(0,r.jsx)("div",{className:"noItemsMessage centerMessage",children:h.ZP.translate("SearchResultsEmpty",ye)})]})})},O=n(16918),A=n(74775),L=n(4877),N=n(65009),R=n.n(N),M=n(66560),B=n(48215),D=(n(38228),function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,a=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)s.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(i)throw i.error}}return s}),F=function(e){var t=e.name,n=e.href;return{__html:"<a\n    is='emby-linkbutton'\n    class='button-link'\n    style='display: inline-block; padding: 0.5em 1em;'\n    href='".concat(n,"'\n>").concat(R()(t),"</a>")}},q=function(e){var t=e.parentId,n=D((0,i.useState)([]),2),a=n[0],s=n[1],o=(0,B.h_)(),l=o.api,c=o.user;return(0,i.useEffect)((function(){l&&(null==c?void 0:c.Id)&&(0,A.$)(l).getItems({userId:c.Id,sortBy:[L.X.IsFavoriteOrLiked,L.X.Random],includeItemTypes:[O.k.Movie,O.k.Series,O.k.MusicArtist],limit:20,recursive:!0,imageTypeLimit:0,enableImages:!1,parentId:t||void 0,enableTotalRecordCount:!1}).then((function(e){return s(e.data.Items||[])})).catch((function(e){console.error("[SearchSuggestions] failed to fetch search suggestions",e),s([])}))}),[l,t,c]),(0,r.jsxs)("div",{className:"verticalSection searchSuggestions",style:{textAlign:"center"},children:[(0,r.jsx)("div",{children:(0,r.jsx)("h2",{className:"sectionTitle padded-left padded-right",children:h.ZP.translate("Suggestions")})}),(0,r.jsx)("div",{className:"searchSuggestionsList padded-left padded-right",children:a.map((function(e){return(0,r.jsx)("div",{dangerouslySetInnerHTML:F({name:e.Name||"",href:M.appRouter.getRouteUrl(e)})},"suggestion-".concat(e.Id))}))})]})},H=function(){return H=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},H.apply(this,arguments)},U=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,a=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)s.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(i)throw i.error}}return s},_={preferThumb:!0,inheritThumb:!1,showParentTitleOrTitle:!0,showTitle:!1,coverImage:!0,overlayMoreButton:!0,showAirTime:!0,showAirDateTime:!0,showChannelName:!0},V=function(e){var t=e.serverId,n=void 0===t?window.ApiClient.serverId():t,a=e.parentId,s=e.collectionType,o=e.query,l=U((0,i.useState)([]),2),c=l[0],d=l[1],f=U((0,i.useState)([]),2),v=f[0],m=f[1],p=U((0,i.useState)([]),2),I=p[0],S=p[1],P=U((0,i.useState)([]),2),x=P[0],C=P[1],w=U((0,i.useState)([]),2),k=w[0],j=w[1],E=U((0,i.useState)([]),2),Z=E[0],O=E[1],A=U((0,i.useState)([]),2),L=A[0],N=A[1],R=U((0,b.nj)(o,500),1)[0],M=(0,i.useCallback)((function(){return{ParentId:a,searchTerm:R,Limit:24,Fields:"PrimaryImageAspectRatio,CanDelete,MediaSourceCount",Recursive:!0,EnableTotalRecordCount:!1,ImageTypeLimit:1,IncludePeople:!1,IncludeMedia:!1,IncludeGenres:!1,IncludeStudios:!1,IncludeArtists:!1}}),[a,R]);return(0,i.useEffect)((function(){var e=function(e,t){return void 0===t&&(t={}),null==e?void 0:e.getItems(null==e?void 0:e.getCurrentUserId(),H(H(H({},M()),{IncludeMedia:!0}),t))};if(d([]),m([]),S([]),C([]),j([]),O([]),N([]),R&&s===y.y.Livetv){var t=g.Z.getApiClient(n);e(t,{IncludeItemTypes:"LiveTvProgram",IsMovie:!0}).then((function(e){return d(e.Items||[])})).catch((function(){return d([])})),e(t,{IncludeItemTypes:"LiveTvProgram",IsMovie:!1,IsSeries:!0,IsSports:!1,IsKids:!1,IsNews:!1}).then((function(e){return m(e.Items||[])})).catch((function(){return m([])})),e(t,{IncludeItemTypes:"LiveTvProgram",IsSports:!0}).then((function(e){return S(e.Items||[])})).catch((function(){return S([])})),e(t,{IncludeItemTypes:"LiveTvProgram",IsKids:!0}).then((function(e){return C(e.Items||[])})).catch((function(){return C([])})),e(t,{IncludeItemTypes:"LiveTvProgram",IsNews:!0}).then((function(e){return j(e.Items||[])})).catch((function(){return j([])})),e(t,{IncludeItemTypes:"LiveTvProgram",IsMovie:!1,IsSeries:!1,IsSports:!1,IsKids:!1,IsNews:!1}).then((function(e){return O(e.Items||[])})).catch((function(){return O([])})),e(t,{IncludeItemTypes:"TvChannel"}).then((function(e){return N(e.Items||[])})).catch((function(){return N([])}))}}),[s,R,M,a,n]),(0,r.jsxs)("div",{className:u()("searchResults","padded-bottom-page","padded-top",{hide:!R||s!==y.y.Livetv}),children:[(0,r.jsx)(T,{title:h.ZP.translate("Movies"),items:c,cardOptions:H(H({},_),{shape:"overflowPortrait"})}),(0,r.jsx)(T,{title:h.ZP.translate("Episodes"),items:v,cardOptions:_}),(0,r.jsx)(T,{title:h.ZP.translate("Sports"),items:I,cardOptions:_}),(0,r.jsx)(T,{title:h.ZP.translate("Kids"),items:x,cardOptions:_}),(0,r.jsx)(T,{title:h.ZP.translate("News"),items:k,cardOptions:_}),(0,r.jsx)(T,{title:h.ZP.translate("Programs"),items:Z,cardOptions:_}),(0,r.jsx)(T,{title:h.ZP.translate("Channels"),items:L,cardOptions:{shape:"square"}})]})},W=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,a=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)s.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(i)throw i.error}}return s},z="collectionType",K="parentId",$="query",G="serverId",X=function(){var e,t,n=W((0,a.lr)(),2),o=n[0],l=n[1],c=o.get($)||"",u=W((0,i.useState)(c),2),d=u[0],f=u[1],v=(e=d,"",t=(0,i.useRef)(""),(0,i.useEffect)((function(){t.current=e}),[e]),t.current);return(0,i.useEffect)((function(){d!==v?""===d&&""!==c?(o.delete($),l(o,{replace:!0})):d!==c&&(o.set($,d),l(o,{replace:!0})):d!==c&&(c||(o.delete($),l(o,{replace:!0})),f(c))}),[d,v,o,l,c]),(0,r.jsxs)(s.Z,{id:"searchPage",title:h.ZP.translate("Search"),className:"mainAnimatedPage libraryPage allLibraryPage noSecondaryNavPage",children:[(0,r.jsx)(p,{query:d,onSearch:f}),!d&&(0,r.jsx)(q,{parentId:o.get(K)}),(0,r.jsx)(Z,{serverId:o.get(G)||window.ApiClient.serverId(),parentId:o.get(K),collectionType:o.get(z),query:d}),(0,r.jsx)(V,{serverId:o.get(G)||window.ApiClient.serverId(),parentId:o.get(K),collectionType:o.get(z),query:d})]})}},32459:function(e,t,n){"use strict";var r=n(24246),i=n(27378),a=n(93110);t.Z=function(e){var t=e.children,n=e.id,s=e.className,o=void 0===s?"":s,l=e.title,c=e.isBackButtonEnabled,u=void 0===c||c,d=e.isMenuButtonEnabled,f=void 0!==d&&d,h=e.isNowPlayingBarEnabled,v=void 0===h||h,m=e.isThemeMediaSupported,p=void 0!==m&&m,y=e.backDropType,b=(0,i.useRef)(null);return(0,i.useEffect)((function(){a.Z.hideView()}),[]),(0,i.useEffect)((function(){var e,t,n,r,i={bubbles:!0,cancelable:!1,detail:{isRestored:!1,options:{enableMediaControl:v,supportsThemeMedia:p}}};null===(e=b.current)||void 0===e||e.dispatchEvent(new CustomEvent("viewbeforeshow",i)),null===(t=b.current)||void 0===t||t.dispatchEvent(new CustomEvent("pagebeforeshow",i)),null===(n=b.current)||void 0===n||n.dispatchEvent(new CustomEvent("viewshow",i)),null===(r=b.current)||void 0===r||r.dispatchEvent(new CustomEvent("pageshow",i))}),[b,v,p]),(0,r.jsx)("div",{ref:b,id:n,"data-role":"page",className:"page ".concat(o),"data-title":l,"data-backbutton":u,"data-menubutton":f,"data-backdroptype":y,children:t})}},90005:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=s(e,a(n)))}return e}function a(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return i.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=s(t,n));return t}function s(e,t){return t?e?e+" "+t:e+t:e}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()}}]);