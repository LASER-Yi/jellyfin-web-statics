(self.webpackChunk=self.webpackChunk||[]).push([[80187,14980],{31900:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}}),n(29305),n(32733),n(84701),n(81678),n(24776),n(84734),n(44962),n(86584),n(4754),n(94),n(36947),n(78557),n(83994),n(82367);var r=n(9164),i=n(46782),a=n(47629),s=n(5898);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,c(r.key),r)}}function c(e){var t=function(e,t){if("object"!=o(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==o(t)?t:t+""}n(15453);var u="alphaPickerButton-selected";function d(){var e=this.querySelector(".".concat(u));e?r.A.focus(e):r.A.autoFocus(this,!0)}function f(e){var t="alphaPickerButton";return i.A.tv&&(t+=" alphaPickerButton-tv"),e&&(t+=" alphaPickerButton-vertical"),t}function h(e,t){return e.map((function(e){return function(e,t){return'<button data-value="'.concat(e,'" class="').concat(f(t),'">').concat(e,"</button>")}(e,t)}))}var v=function(){return e=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var n=this;this.options=t;var r,o,l,c,u=t.element,v=t.itemsContainer,m=t.itemClass;function p(){o=null,n.value(r)}function y(){if(c=null,document.activeElement===l){var e=l.getAttribute("data-value");n.value(e,!0)}}function b(e){var t=a.Ay.parentWithClass(e.target,"alphaPickerButton");if(t){var n=t.getAttribute("data-value");u.dispatchEvent(new CustomEvent("alphavalueclicked",{cancelable:!1,detail:{value:n}}))}}function g(e){var t=a.Ay.parentWithClass(e.target,"alphaPickerButton");if(t){var n=t.getAttribute("data-value");(this._currentValue||"").toUpperCase()===n.toUpperCase()?this.value(null,!0):this.value(n,!0)}}function I(e){c&&(clearTimeout(c),c=null);var t=a.Ay.parentWithClass(e.target,"alphaPickerButton");t&&(l=t,c=setTimeout(y,600))}function T(e){var t=a.Ay.parentWithClass(e.target,m);if(t){var n=t.getAttribute("data-prefix");null!=n&&n.length&&(r=n[0],o&&clearTimeout(o),o=setTimeout(p,100))}}this.enabled=function(e){e?(v&&v.addEventListener("focus",T,!0),"keyboard"===t.mode&&u.addEventListener("click",b),"click"!==t.valueChangeEvent?u.addEventListener("focus",I,!0):u.addEventListener("click",g.bind(this))):(v&&v.removeEventListener("focus",T,!0),u.removeEventListener("click",b),u.removeEventListener("focus",I,!0),u.removeEventListener("click",g.bind(this)))},function(e,t){e.classList.add("alphaPicker"),i.A.tv&&e.classList.add("alphaPicker-tv");var n=e.classList.contains("alphaPicker-vertical");n||e.classList.add("focuscontainer-x");var r,a="",o=f(n),l="alphaPickerRow";n&&(l+=" alphaPickerRow-vertical"),a+='<div class="'.concat(l,'">'),"keyboard"===t.mode?a+='<button data-value=" " is="paper-icon-button-light" class="'.concat(o,'" aria-label="').concat(s.Ay.translate("ButtonSpace"),'"><span class="material-icons alphaPickerButtonIcon space_bar" aria-hidden="true"></span></button>'):a+=h(r=["#"],n).join(""),a+=h(r=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],n).join(""),"keyboard"===t.mode?(a+='<button data-value="backspace" is="paper-icon-button-light" class="'.concat(o,'" aria-label="').concat(s.Ay.translate("ButtonBackspace"),'"><span class="material-icons alphaPickerButtonIcon backspace" aria-hidden="true"></span></button>'),a+="</div>",r=["0","1","2","3","4","5","6","7","8","9"],a+='<div class="'.concat(l,'">'),a+="<br/>",a+=h(r,n).join(""),a+="</div>"):a+="</div>",e.innerHTML=a,e.classList.add("focusable"),e.focus=d}(u,t),this.enabled(!0),this.visible(!0)},(t=[{key:"value",value:function(e,t){var n,r,i=this.options.element;if(void 0!==e)if(null!=e){if(e=e.toUpperCase(),this._currentValue=e,"keyboard"!==this.options.mode){r=i.querySelector(".".concat(u));try{n=i.querySelector(".alphaPickerButton[data-value='".concat(e,"']"))}catch(e){console.error("error in querySelector:",e)}n&&n!==r&&n.classList.add(u),r&&r!==n&&r.classList.remove(u)}}else this._currentValue=e,(r=i.querySelector(".".concat(u)))&&r.classList.remove(u);return t&&i.dispatchEvent(new CustomEvent("alphavaluechanged",{cancelable:!1,detail:{value:e}})),this._currentValue}},{key:"on",value:function(e,t){this.options.element.addEventListener(e,t)}},{key:"off",value:function(e,t){this.options.element.removeEventListener(e,t)}},{key:"updateControls",value:function(e){e.NameLessThan?this.value("#"):this.value(e.NameStartsWith),this.visible(-1!==e.SortBy.indexOf("SortName"))}},{key:"visible",value:function(e){this.options.element.style.visibility=e?"visible":"hidden"}},{key:"values",value:function(){for(var e=this.options.element.querySelectorAll(".alphaPickerButton"),t=[],n=0,r=e.length;n<r;n++)t.push(e[n].getAttribute("data-value"));return t}},{key:"focus",value:function(){var e=this.options.element;r.A.autoFocus(e,!0)}},{key:"destroy",value:function(){var e=this.options.element;this.enabled(!1),e.classList.remove("focuscontainer-x"),this.options=null}}])&&l(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();t.A=v},1177:function(e,t,n){"use strict";n(84734),n(44962),n(78557),n(96054),n(90076),n(83994),n(82367);var r=n(22832),i=n(38490),a=n(56142),s=n(76542),o=n(46782),l=n(34789),c=n(47629),u=n(8566),d=n(9164),f=n(10736),h=n(44797),v=(n(69177),n(86191)),m=n(65210),p=Object.create(HTMLDivElement.prototype);function y(e){var t=this,n=t.multiSelect;!1!==(null==n?void 0:n.onContainerClick.call(t,e))&&r.Ay.onClick.call(t,e)}function b(e){return e.preventDefault(),e.stopPropagation(),!1}function g(e){var t=e.target,n=c.Ay.parentWithAttribute(t,"data-id");if(null!=n&&n.getAttribute("data-serverid"))return i.default.handleCommand("menu",{sourceElement:n}),e.preventDefault(),e.stopPropagation(),!1}function I(e,t,r){var i=this;Promise.all([n.e(45642),n.e(24468),n.e(14980)]).then(n.bind(n,24468)).then((function(e){e.onUserDataChanged(r,i)}));var a=T(i);-1===a.indexOf("markfavorite")&&-1===a.indexOf("markplayed")||i.notifyRefreshNeeded()}function T(e){var t=e.getAttribute("data-monitor");return t?t.split(","):[]}function A(e,t,r){var i=this;if(-1===T(i).indexOf("timers")){var a=r.ProgramId,s=r.Id;Promise.all([n.e(45642),n.e(24468),n.e(14980)]).then(n.bind(n,24468)).then((function(e){e.onTimerCreated(a,s,i)}))}else i.notifyRefreshNeeded()}function w(){-1!==T(this).indexOf("seriestimers")&&this.notifyRefreshNeeded()}function S(e,t,r){var i=this;-1===T(i).indexOf("timers")?Promise.all([n.e(45642),n.e(24468),n.e(14980)]).then(n.bind(n,24468)).then((function(e){e.onTimerCancelled(r.Id,i)})):i.notifyRefreshNeeded()}function k(e,t,r){var i=this;-1===T(i).indexOf("seriestimers")?Promise.all([n.e(45642),n.e(24468),n.e(14980)]).then(n.bind(n,24468)).then((function(e){e.onSeriesTimerCancelled(r.Id,i)})):i.notifyRefreshNeeded()}function x(e,t,n){var r=this,i=T(r);if(-1===i.indexOf("seriestimers")&&-1===i.indexOf("timers")){var a=n.ItemsAdded||[],s=n.ItemsRemoved||[];if(a.length||s.length){var o=r.getAttribute("data-parentid");if(o){var l=n.FoldersAddedTo||[],c=n.FoldersRemovedFrom||[],u=n.CollectionFolders||[];if(-1===l.indexOf(o)&&-1===c.indexOf(o)&&-1===u.indexOf(o))return}r.notifyRefreshNeeded()}}}function P(e,t){var n,r=this,i=t.state,a=T(r);if(i.NowPlayingItem&&"Video"===i.NowPlayingItem.MediaType){if(-1!==a.indexOf("videoplayback"))return void r.notifyRefreshNeeded(!0)}else if("Audio"===(null===(n=i.NowPlayingItem)||void 0===n?void 0:n.MediaType)&&-1!==a.indexOf("audioplayback"))return void r.notifyRefreshNeeded(!0)}function C(e,t,n,r){var i=n.bind(e);r=r||f.default,h.A.on(r,t,i),e["event_"+t]=i}function E(e,t,n){var r=e["event_"+t];r&&(n=n||f.default,h.A.off(n,t,r),e["event_"+t]=null)}function O(e,t){e.refreshInterval&&(clearInterval(e.refreshInterval),e.refreshInterval=null,t||(e.refreshIntervalEndTime=null))}function j(e,t){O(e),t||(t=parseInt(e.getAttribute("data-refreshinterval")||"0",10)),t&&(e.refreshInterval=setInterval(e.notifyRefreshNeeded.bind(e),t),e.refreshIntervalEndTime=(new Date).getTime()+t)}function L(e){var t=e.Items||e,n=this.parentContainer;n&&(t.length?n.classList.remove("hide"):n.classList.add("hide"));var r,i,a=document.activeElement;this.contains(a)&&(i=!0,r=a.getAttribute("data-id")),this.innerHTML=this.getItemsHtml(t),s.default.lazyChildren(this),i&&function(e,t){if(t){var n=e.querySelector('[data-id="'+t+'"]');if(n)try{return void d.A.focus(n)}catch(e){console.error(e)}}d.A.autoFocus(e)}(this,r),j(this),this.afterRefresh&&this.afterRefresh(e)}p.enableMultiSelect=function(e){var t=this.multiSelect;if(e){if(!t){var r=this;n.e(35308).then(n.bind(n,35308)).then((function(e){var t=e.default;r.multiSelect=new t({container:r,bindOnClick:!1})}))}}else t&&(t.destroy(),this.multiSelect=null)},p.enableDragReordering=function(e){var t=this.sortable;if(e){if(!t){var n=this;n.sortable=new m.Ay(n,{draggable:".listItem",handle:".listViewDragHandle",onEnd:function(e){return function(e,t){var n=e.item,r=e.newIndex,i=n.getAttribute("data-playlistitemid"),a=n.getAttribute("data-playlistid");if(a){var s=n.getAttribute("data-serverid"),o=v.A.getApiClient(s);u.Ay.show(),o.ajax({url:o.getUrl("Playlists/"+a+"/Items/"+i+"/Move/"+r),type:"POST"}).then((function(){u.Ay.hide()}),(function(){u.Ay.hide(),t.refreshItems()}))}else{var l=e.oldIndex;n.dispatchEvent(new CustomEvent("itemdrop",{detail:{oldIndex:l,newIndex:r,playlistItemId:i},bubbles:!0,cancelable:!1}))}}(e,n)}})}}else t&&(t.destroy(),this.sortable=null)},p.createdCallback=function(){this.classList.add("itemsContainer")},p.attachedCallback=function(){this.addEventListener("click",y),l.A.touch?this.addEventListener("contextmenu",b):"false"!==this.getAttribute("data-contextmenu")&&this.addEventListener("contextmenu",g),(o.A.desktop||o.A.mobile&&"false"!==this.getAttribute("data-multiselect"))&&this.enableMultiSelect(!0),o.A.tv&&this.classList.add("itemsContainer-tv"),r.Ay.on(this,{click:!1}),C(this,"UserDataChanged",I),C(this,"TimerCreated",A),C(this,"SeriesTimerCreated",w),C(this,"TimerCancelled",S),C(this,"SeriesTimerCancelled",k),C(this,"LibraryChanged",x),C(this,"playbackstop",P,a.f),"true"===this.getAttribute("data-dragreorder")&&this.enableDragReordering(!0)},p.detachedCallback=function(){O(this),this.enableMultiSelect(!1),this.enableDragReordering(!1),this.removeEventListener("click",y),this.removeEventListener("contextmenu",g),this.removeEventListener("contextmenu",b),r.Ay.off(this,{click:!1}),E(this,"UserDataChanged"),E(this,"TimerCreated"),E(this,"SeriesTimerCreated"),E(this,"TimerCancelled"),E(this,"SeriesTimerCancelled"),E(this,"LibraryChanged"),E(this,"playbackstop",a.f),this.fetchData=null,this.getItemsHtml=null,this.parentContainer=null},p.pause=function(){O(this,!0),this.paused=!0},p.resume=function(e){this.paused=!1;var t=this.refreshIntervalEndTime;if(t){var n=t-(new Date).getTime();n>0&&!this.needsRefresh?j(this,n):(this.needsRefresh=!0,this.refreshIntervalEndTime=null)}return this.needsRefresh||null!=e&&e.refresh?this.refreshItems():Promise.resolve()},p.refreshItems=function(){return this.fetchData?this.paused?(this.needsRefresh=!0,Promise.resolve()):(this.needsRefresh=!1,this.fetchData().then(L.bind(this))):Promise.resolve()},p.notifyRefreshNeeded=function(e){if(this.paused)this.needsRefresh=!0;else{var t=this.refreshTimeout;t&&clearTimeout(t),!0===e?this.refreshItems():this.refreshTimeout=setTimeout(this.refreshItems.bind(this),1e4)}},document.registerElement("emby-itemscontainer",{prototype:p,extends:"div"})},41765:function(e,t,n){"use strict";n(44962),n(78557),n(90076),n(83994),n(82367);var r=n(4113),i=n(47629),a=n(46782),s=n(38490),o=n(9164),l=n(34789),c=(n(69177),Object.create(HTMLDivElement.prototype));function u(e){var t=e.detail.command;"end"===t?(o.A.focusLast(this,"."+this.getAttribute("data-navcommands")),e.preventDefault(),e.stopPropagation()):"pageup"===t?(o.A.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),-12),e.preventDefault(),e.stopPropagation()):"pagedown"===t&&(o.A.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),12),e.preventDefault(),e.stopPropagation())}c.createdCallback=function(){this.classList.add("emby-scroller")},c.scrollToBeginning=function(){this.scroller&&this.scroller.slideTo(0,!0)},c.toStart=function(e,t){this.scroller&&this.scroller.toStart(e,t)},c.toCenter=function(e,t){this.scroller&&this.scroller.toCenter(e,t)},c.scrollToPosition=function(e,t){this.scroller&&this.scroller.slideTo(e,t)},c.getScrollPosition=function(){if(this.scroller)return this.scroller.getScrollPosition()},c.getScrollSize=function(){if(this.scroller)return this.scroller.getScrollSize()},c.getScrollEventName=function(){if(this.scroller)return this.scroller.getScrollEventName()},c.getScrollSlider=function(){if(this.scroller)return this.scroller.getScrollSlider()},c.addScrollEventListener=function(e,t){this.scroller&&i.Ay.addEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},c.removeScrollEventListener=function(e,t){this.scroller&&i.Ay.removeEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},c.attachedCallback=function(){this.getAttribute("data-navcommands")&&s.default.on(this,u);var e="false"!==this.getAttribute("data-horizontal"),t=this.querySelector(".scrollSlider");e&&(t.style["white-space"]="nowrap");var c,d,f=a.A.desktop&&e&&"false"!==this.getAttribute("data-scrollbuttons"),h={horizontal:e,mouseDragging:1,mouseWheel:"false"!==this.getAttribute("data-mousewheel"),touchDragging:1,slidee:t,scrollBy:200,speed:e?270:240,elasticBounds:1,dragHandle:1,autoImmediate:!0,skipSlideToWhenVisible:"true"===this.getAttribute("data-skipfocuswhenvisible"),dispatchScrollEvent:f||"true"===this.getAttribute("data-scrollevent"),hideScrollbar:f||"true"===this.getAttribute("data-hidescrollbar"),allowNativeSmoothScroll:"true"===this.getAttribute("data-allownativesmoothscroll")&&!f,allowNativeScroll:!f,forceHideScrollbars:f,requireAnimation:f&&l.A.edge};this.scroller=new r.A(this,h),this.scroller.init(),this.scroller.reload(),a.A.tv&&this.getAttribute("data-centerfocus")&&(this,c=this.scroller,i.Ay.addEventListener(this,"focus",(function(e){var t=o.A.focusableParent(e.target);t&&c.toCenter(t)}),{capture:!0,passive:!0})),f&&(d=this,n.e(49275).then(n.bind(n,49275)).then((function(){d.insertAdjacentHTML("beforebegin",'<div is="emby-scrollbuttons" class="emby-scrollbuttons padded-right"></div>')})))},c.pause=function(){var e=this.headroom;e&&e.pause()},c.resume=function(){var e=this.headroom;e&&e.resume()},c.detachedCallback=function(){this.getAttribute("data-navcommands")&&s.default.off(this,u);var e=this.headroom;e&&(e.destroy(),this.headroom=null);var t=this.scroller;t&&(t.destroy(),this.scroller=null)},document.registerElement("emby-scroller",{prototype:c,extends:"div"})},28601:function(e,t,n){var r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,s=/^0o[0-7]+$/i,o=parseInt,l="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,c="object"==typeof self&&self&&self.Object===Object&&self,u=l||c||Function("return this")(),d=Object.prototype.toString,f=Math.max,h=Math.min,v=function(){return u.Date.now()};function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(m(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=m(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=a.test(e);return n||s.test(e)?o(e.slice(2),n?2:8):i.test(e)?NaN:+e}e.exports=function(e,t,n){var r,i,a,s,o,l,c=0,u=!1,d=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,a=i;return r=i=void 0,c=t,s=e.apply(a,n)}function g(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function I(){var e=v();if(g(e))return T(e);o=setTimeout(I,function(e){var n=t-(e-l);return d?h(n,a-(e-c)):n}(e))}function T(e){return o=void 0,y&&r?b(e):(r=i=void 0,s)}function A(){var e=v(),n=g(e);if(r=arguments,i=this,l=e,n){if(void 0===o)return function(e){return c=e,o=setTimeout(I,t),u?b(e):s}(l);if(d)return o=setTimeout(I,t),b(l)}return void 0===o&&(o=setTimeout(I,t)),s}return t=p(t)||0,m(n)&&(u=!!n.leading,a=(d="maxWait"in n)?f(p(n.maxWait)||0,t):a,y="trailing"in n?!!n.trailing:y),A.cancel=function(){void 0!==o&&clearTimeout(o),c=0,r=l=i=o=void 0},A.flush=function(){return void 0===o?s:T(v())},A}},13789:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return J}});var r=n(62540),i=n(63696),a=n(9055),s=n(1161),o=n(5898),l=n(65242),c=n(31900),u=function(e){var t=e.onAlphaPicked,n=void 0===t?function(){}:t,a=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,a=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)s.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(i)throw i.error}}return s}((0,i.useState)(),2),s=a[0],o=a[1],l=(0,i.useRef)(null);return(0,i.useEffect)((function(){var e;return o(new c.A({element:l.current,mode:"keyboard"})),null===(e=l.current)||void 0===e||e.addEventListener("alphavalueclicked",n),function(){null==s||s.destroy()}}),[]),(0,r.jsx)("div",{ref:l,className:"alphaPicker align-items-center"})},d=n(4452),f=n.n(d),h=function(){return h=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},h.apply(this,arguments)},v=(0,i.forwardRef)((function(e,t){var n=e.id,a=e.label,s=e.className,o=e.onBlur,l=e.onFocus,c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(e,["id","label","className","onBlur","onFocus"]),u=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,a=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)s.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(i)throw i.error}}return s}((0,i.useState)(!1),2),d=u[0],v=u[1],m=(0,i.useCallback)((function(e){v(!1),null==o||o(e)}),[o]),p=(0,i.useCallback)((function(e){v(!0),null==l||l(e)}),[l]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("label",{htmlFor:n,className:f()("inputLabel",{inputLabelUnfocused:!d,inputLabelFocused:d}),children:a}),(0,r.jsx)("input",h({ref:t,id:n,className:f()("emby-input",s),onBlur:m,onFocus:p},c))]})}));v.displayName="Input";var m=v,p=n(46782),y=n(34789),b=function(e){var t=e.onSearch,n=void 0===t?function(){}:t,a=e.query,s=(0,i.useRef)(null),l=(0,i.useCallback)((function(e){var t,r=e.detail.value,i=(null===(t=s.current)||void 0===t?void 0:t.value)||"";n("backspace"===r?i.length?i.substring(0,i.length-1):"":i+r)}),[n]),c=(0,i.useCallback)((function(e){n(e.target.value)}),[n]);return(0,r.jsxs)("div",{className:"padded-left padded-right searchFields",children:[(0,r.jsxs)("div",{className:"searchFieldsInner flex align-items-center justify-content-center",children:[(0,r.jsx)("span",{className:"searchfields-icon material-icons search","aria-hidden":"true"}),(0,r.jsx)("div",{className:"inputContainer flex-grow",style:{marginBottom:0},children:(0,r.jsx)(m,{ref:s,id:"searchTextInput",className:"searchfields-txtSearch",type:"text","data-keyboard":"true",placeholder:o.Ay.translate("Search"),autoComplete:"off",maxLength:40,autoFocus:!0,value:a,onChange:c})})]}),p.A.tv&&!y.A.tv&&(0,r.jsx)(u,{onAlphaPicked:l})]})},g=n(11444),I=n(65369),T=n(36873),A=n(45251),w=n(32215),S=n(9789),k=n(48727),x=n(61586),P=n(69410),C=n(76942),E=function(){return E=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},E.apply(this,arguments)},O=function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function s(e){try{l(r.next(e))}catch(e){a(e)}}function o(e){try{l(r.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,o)}l((r=r.apply(e,t||[])).next())}))},j=function(e,t){var n,r,i,a,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function o(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,o[0]&&(s=0)),s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},L={limit:100,fields:[T.z.PrimaryImageAspectRatio,T.z.CanDelete,T.z.MediaSourceCount],enableTotalRecordCount:!1,imageTypeLimit:1},N=function(e,t,n,r){return O(void 0,void 0,void 0,(function(){return j(this,(function(i){switch(i.label){case 0:return[4,(0,w.n)(e).getItems(E(E(E({},L),{userId:t,recursive:!0}),n),r)];case 1:return[2,i.sent().data]}}))}))},D=function(e,t,n,r){return O(void 0,void 0,void 0,(function(){return j(this,(function(i){switch(i.label){case 0:return[4,(0,S.p)(e).getPersons(E(E(E({},L),{userId:t}),n),r)];case 1:return[2,i.sent().data]}}))}))},R=function(e,t,n,r){return O(void 0,void 0,void 0,(function(){return j(this,(function(i){switch(i.label){case 0:return[4,(0,k.v)(e).getArtists(E(E(E({},L),{userId:t}),n),r)];case 1:return[2,i.sent().data]}}))}))},B=function(e){return e===I.X.Movies},M=function(e){return e===I.X.Tvshows},F={preferThumb:!0,inheritThumb:!1,showParentTitleOrTitle:!0,showTitle:!1,coverImage:!0,overlayMoreButton:!0,showAirTime:!0,showAirDateTime:!0,showChannelName:!0},q=n(98471),H=function(e){var t=(0,P.gf)(),n=t.api,r=t.user,i=null==r?void 0:r.Id;return(0,x.I)({queryKey:["SearchSuggestions",{parentId:e}],queryFn:function(t){var r=t.signal;return function(e,t,n,r){return i=void 0,a=void 0,o=function(){return function(e,t){var n,r,i,a,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function o(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,o[0]&&(s=0)),s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}}(this,(function(i){switch(i.label){case 0:if(!e)throw new Error("No API instance available");if(!t)throw new Error("No User ID provided");return[4,(0,w.n)(e).getItems({userId:t,sortBy:[q.BBu.IsFavoriteOrLiked,q.BBu.Random],includeItemTypes:[g.D.Movie,g.D.Series,g.D.MusicArtist],limit:20,recursive:!0,imageTypeLimit:0,enableImages:!1,parentId:n,enableTotalRecordCount:!1},r)];case 1:return[2,i.sent().data.Items||[]]}}))},new((s=void 0)||(s=Promise))((function(e,t){function n(e){try{l(o.next(e))}catch(e){t(e)}}function r(e){try{l(o.throw(e))}catch(e){t(e)}}function l(t){var i;t.done?e(t.value):(i=t.value,i instanceof s?i:new s((function(e){e(i)}))).then(n,r)}l((o=o.apply(i,a||[])).next())}));var i,a,s,o}(n,i,e,{signal:r})},enabled:!!n&&!!i})},U=n(84849),W=n(70267),z=n(84851),V=(n(10353),function(e){var t=e.parentId,n=H(t),i=n.isLoading,a=n.data;return i?(0,r.jsx)(U.A,{}):(0,r.jsxs)("div",{className:"verticalSection searchSuggestions",style:{textAlign:"center"},children:[(0,r.jsx)("div",{children:(0,r.jsx)("h2",{className:"sectionTitle padded-left padded-right",children:o.Ay.translate("Suggestions")})}),(0,r.jsx)("div",{className:"searchSuggestionsList padded-left padded-right",children:null==a?void 0:a.map((function(e){return(0,r.jsx)("div",{children:(0,r.jsx)(z.A,{className:"button-link",href:W.appRouter.getRouteUrl(e),style:{display:"inline-block",padding:"0.5em 1em"},children:e.Name})},"suggestion-".concat(e.Id))}))})]})}),_=n(24468),K=(n(41765),n(1177),function(){return K=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},K.apply(this,arguments)}),G=function(e){var t=e.title;return{__html:'<h2 class="sectionTitle sectionTitle-cards focuscontainer-x padded-left padded-right">'.concat(void 0===t?"":t,'</h2>\n    <div is="emby-scroller" data-horizontal="true" data-centerfocus="card" class="padded-top-focusscale padded-bottom-focusscale">\n    <div is="emby-itemscontainer" class="focuscontainer-x itemsContainer scrollSlider"></div>\n</div>')}},X=function(e){var t=e.title,n=e.items,a=void 0===n?[]:n,s=e.cardOptions,o=void 0===s?{}:s,l=(0,i.useRef)(null);return(0,i.useEffect)((function(){var e;_.default.buildCards(a,K({itemsContainer:null===(e=l.current)||void 0===e?void 0:e.querySelector(".itemsContainer")},o))}),[o,a]),(0,r.jsx)("div",{ref:l,className:"verticalSection",dangerouslySetInnerHTML:G({title:t})})},Y=function(){return Y=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Y.apply(this,arguments)},$=function(e){var t=e.parentId,n=e.collectionType,i=e.query,a=function(e,t,n){var r=(0,P.gf)(),i=r.api,a=r.user,s=null==a?void 0:a.Id;return(0,x.I)({queryKey:["SearchItems",{parentId:e,collectionType:t,searchTerm:n}],queryFn:function(r){return O(void 0,[r],void 0,(function(r){var o,l,c,u,d,f,h,v,m,p,y,b,T,w,S,k,x,P,O,L,q,H,U=r.signal;return j(this,(function(r){switch(r.label){case 0:if(!i)throw new Error("No API instance available");if(!s)throw new Error("No User ID provided");return o=[],l=function(e,t,n){t&&(null==t?void 0:t.length)>0&&o.push({title:e,items:t,cardOptions:n})},t&&function(e){return e===I.X.Livetv}(t)?[4,N(i,s,{includeItemTypes:[g.D.LiveTvProgram],isMovie:!0,searchTerm:n},{signal:U})]:[3,8];case 1:return f=r.sent(),l("Movies",f.Items,E(E({},F),{shape:C.G8.PortraitOverflow})),[4,N(i,s,{includeItemTypes:[g.D.LiveTvProgram],isMovie:!1,isSeries:!0,isSports:!1,isKids:!1,isNews:!1,searchTerm:n},{signal:U})];case 2:return v=r.sent(),l("Episodes",v.Items,E({},F)),[4,N(i,s,{includeItemTypes:[g.D.LiveTvProgram],isSports:!0,searchTerm:n},{signal:U})];case 3:return c=r.sent(),l("Sports",c.Items,E({},F)),[4,N(i,s,{includeItemTypes:[g.D.LiveTvProgram],isKids:!0,searchTerm:n},{signal:U})];case 4:return u=r.sent(),l("Kids",u.Items,E({},F)),[4,N(i,s,{includeItemTypes:[g.D.LiveTvProgram],isNews:!0,searchTerm:n},{signal:U})];case 5:return d=r.sent(),l("News",d.Items,E({},F)),[4,N(i,s,{includeItemTypes:[g.D.LiveTvProgram],isMovie:!1,isSeries:!1,isSports:!1,isKids:!1,isNews:!1,searchTerm:n},{signal:U})];case 6:return S=r.sent(),l("Programs",S.Items,E({},F)),[4,N(i,s,{includeItemTypes:[g.D.TvChannel],searchTerm:n},{signal:U})];case 7:k=r.sent(),l("Channels",k.Items),r.label=8;case 8:return t&&!B(t)?[3,10]:[4,N(i,s,{includeItemTypes:[g.D.Movie],parentId:e,searchTerm:n},{signal:U})];case 9:f=r.sent(),l("Movies",f.Items,{showYear:!0}),r.label=10;case 10:return t&&!M(t)?[3,13]:[4,N(i,s,{includeItemTypes:[g.D.Series],parentId:e,searchTerm:n},{signal:U})];case 11:return h=r.sent(),l("Shows",h.Items,{showYear:!0}),[4,N(i,s,{includeItemTypes:[g.D.Episode],parentId:e,isMissing:null===(H=null==a?void 0:a.Configuration)||void 0===H?void 0:H.DisplayMissingEpisodes,searchTerm:n},{signal:U})];case 12:v=r.sent(),l("Episodes",v.Items,{coverImage:!0,showParentTitle:!0}),r.label=13;case 13:return!t||B(t)||M(t)?[4,D(i,s,{searchTerm:n},{signal:U})]:[3,15];case 14:m=r.sent(),l("People",m.Items,{coverImage:!0}),r.label=15;case 15:return t&&!function(e){return e===I.X.Music}(t)?[3,20]:[4,N(i,s,{includeItemTypes:[g.D.Playlist],parentId:e,searchTerm:n},{signal:U})];case 16:return p=r.sent(),l("Playlists",p.Items),[4,R(i,s,{parentId:e,searchTerm:n},{signal:U})];case 17:return y=r.sent(),l("Artists",y.Items,{coverImage:!0}),[4,N(i,s,{includeItemTypes:[g.D.MusicAlbum],parentId:e,searchTerm:n},{signal:U})];case 18:return b=r.sent(),l("Albums",b.Items,{showYear:!0}),[4,N(i,s,{includeItemTypes:[g.D.Audio],parentId:e,searchTerm:n},{signal:U})];case 19:T=r.sent(),l("Songs",T.Items,{showParentTitle:!0,shape:C.G8.SquareOverflow}),r.label=20;case 20:return t?[3,29]:[4,N(i,s,{mediaTypes:[A.z.Video],excludeItemTypes:[g.D.Movie,g.D.Episode,g.D.TvChannel],parentId:e,searchTerm:n},{signal:U})];case 21:return w=r.sent(),l("HeaderVideos",w.Items,{showParentTitle:!0}),[4,N(i,s,{includeItemTypes:[g.D.LiveTvProgram],parentId:e,searchTerm:n},{signal:U})];case 22:return S=r.sent(),l("Programs",S.Items,E({},F)),[4,N(i,s,{includeItemTypes:[g.D.TvChannel],parentId:e,searchTerm:n},{signal:U})];case 23:return k=r.sent(),l("Channels",k.Items),[4,N(i,s,{includeItemTypes:[g.D.PhotoAlbum],parentId:e,searchTerm:n},{signal:U})];case 24:return x=r.sent(),l("HeaderPhotoAlbums",x.Items),[4,N(i,s,{includeItemTypes:[g.D.Photo],parentId:e,searchTerm:n},{signal:U})];case 25:return P=r.sent(),l("Photos",P.Items),[4,N(i,s,{includeItemTypes:[g.D.AudioBook],parentId:e,searchTerm:n},{signal:U})];case 26:return O=r.sent(),l("HeaderAudioBooks",O.Items),[4,N(i,s,{includeItemTypes:[g.D.Book],parentId:e,searchTerm:n},{signal:U})];case 27:return L=r.sent(),l("Books",L.Items),[4,N(i,s,{includeItemTypes:[g.D.BoxSet],parentId:e,searchTerm:n},{signal:U})];case 28:q=r.sent(),l("Collections",q.Items),r.label=29;case 29:return[2,o]}}))}))},enabled:!!i&&!!s})}(t,n,i),s=a.isLoading,l=a.data;return s?(0,r.jsx)(U.A,{}):(null==l?void 0:l.length)?(0,r.jsx)("div",{className:"searchResults, padded-top, padded-bottom-page",children:l.map((function(e,t){return function(e,t){return(0,r.jsx)(X,{title:o.Ay.translate(e.title),items:e.items,cardOptions:Y({shape:C.G8.AutoOverflow,scalable:!0,showTitle:!0,overlayText:!1,centerText:!0,allowBottomPadding:!1},e.cardOptions)},"".concat(e.title,"-").concat(t))}(e,t)}))}):(0,r.jsx)("div",{className:"noItemsMessage centerMessage",children:o.Ay.translate("SearchResultsEmpty",i)})},Q=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,a=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)s.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(i)throw i.error}}return s},Z="query",J=function(){var e,t,n=Q((0,a.ok)(),2),c=n[0],u=n[1],d=c.get("parentId")||void 0,f=c.get("collectionType")||void 0,h=c.get(Z)||"",v=Q((0,i.useState)(h),2),m=v[0],p=v[1],y=(e=m,"",t=(0,i.useRef)(""),(0,i.useEffect)((function(){t.current=e}),[e]),t.current),g=Q((0,s.Q3)(m,500),1)[0];return(0,i.useEffect)((function(){m!==y?""===m&&""!==h?(c.delete(Z),u(c,{replace:!0})):m!==h&&(c.set(Z,m),u(c,{replace:!0})):m!==h&&(h||(c.delete(Z),u(c,{replace:!0})),p(h))}),[m,y,c,u,h]),(0,r.jsxs)(l.A,{id:"searchPage",title:o.Ay.translate("Search"),className:"mainAnimatedPage libraryPage allLibraryPage noSecondaryNavPage",children:[(0,r.jsx)(b,{query:m,onSearch:p}),m?(0,r.jsx)($,{parentId:d,collectionType:f,query:g}):(0,r.jsx)(V,{parentId:d})]})}},84851:function(e,t,n){"use strict";var r=n(62540),i=n(63696),a=n(4452),s=n.n(a),o=n(46782),l=n(13615),c=n(70267),u=n(22622),d=function(){return d=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},d.apply(this,arguments)};t.A=function(e){var t=e.className,n=e.isAutoHideEnabled,a=e.href,f=e.target,h=e.children,v=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(e,["className","isAutoHideEnabled","href","target","children"]),m=(0,i.useCallback)((function(e){var t=a||"";"#"!==t?f?u.g.supports("targetblank")||(e.preventDefault(),l.A.openUrl(t)):(e.preventDefault(),c.appRouter.show(t).catch((function(e){console.error("[LinkButton] failed to show url",t,e)}))):e.preventDefault()}),[a,f]);if(!0===n&&!u.g.supports("externallinks"))return null;var p=s()("emby-button",t,{"show-focus":o.A.tv});return(0,r.jsx)("a",d({className:p,href:a,target:f,onClick:m},v,{children:h}))}}}]);