/*! For license information please see dashboard-devices-devices.f73337a1db99bcd1a5bf.chunk.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[69375],{69552:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return x}}),r(13227),r(81414),r(37666),r(14011),r(11431),r(96626),r(2663),r(84159),r(33096),r(56187),r(38690),r(89228),r(9883),r(70753),r(61632),r(77337),r(39574),r(47134),r(43908),r(91162),r(88646);var n=r(65009),i=r.n(n),a=r(34862),o=r(72365),s=r(94994),c=r(31606),u=r(20990),l=r(45874),d=(r(38228),r(82427),r(60635)),f=r(3137),h=r(84483);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function m(){m=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var a=t&&t.prototype instanceof b?t:b,o=Object.create(a.prototype),s=new D(n||[]);return i(o,"_invoke",{value:A(e,r,s)}),o}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=l;var f="suspendedStart",h="suspendedYield",p="executing",g="completed",y={};function b(){}function w(){}function x(){}var k={};u(k,o,(function(){return this}));var C=Object.getPrototypeOf,P=C&&C(C(Z([])));P&&P!==r&&n.call(P,o)&&(k=P);var I=x.prototype=b.prototype=Object.create(k);function S(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function L(e,t){function r(i,a,o,s){var c=d(e[i],e,a);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==v(l)&&n.call(l,"__await")?t.resolve(l.__await).then((function(e){r("next",e,o,s)}),(function(e){r("throw",e,o,s)})):t.resolve(l).then((function(e){u.value=e,o(u)}),(function(e){return r("throw",e,o,s)}))}s(c.arg)}var a;i(this,"_invoke",{value:function(e,n){function i(){return new t((function(t,i){r(e,n,t,i)}))}return a=a?a.then(i,i):i()}})}function A(t,r,n){var i=f;return function(a,o){if(i===p)throw new Error("Generator is already running");if(i===g){if("throw"===a)throw o;return{value:e,done:!0}}for(n.method=a,n.arg=o;;){var s=n.delegate;if(s){var c=T(s,n);if(c){if(c===y)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===f)throw i=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=p;var u=d(t,r,n);if("normal"===u.type){if(i=n.done?g:h,u.arg===y)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(i=g,n.method="throw",n.arg=u.arg)}}}function T(t,r){var n=r.method,i=t.iterator[n];if(i===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,T(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var a=d(i,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,y;var o=a.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function D(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function Z(t){if(t||""===t){var r=t[o];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function r(){for(;++i<t.length;)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}throw new TypeError(v(t)+" is not iterable")}return w.prototype=x,i(I,"constructor",{value:x,configurable:!0}),i(x,"constructor",{value:w,configurable:!0}),w.displayName=u(x,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,x):(e.__proto__=x,u(e,c,"GeneratorFunction")),e.prototype=Object.create(I),e},t.awrap=function(e){return{__await:e}},S(L.prototype),u(L.prototype,s,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,i,a){void 0===a&&(a=Promise);var o=new L(l(e,r,n,i),a);return t.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},S(I),u(I,c,"Generator"),u(I,o,(function(){return this})),u(I,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=Z,D.prototype={constructor:D,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return s.type="throw",s.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),E(r),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;E(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:Z(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}function p(e,t,r,n,i,a,o){try{var s=e[a](o),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,i)}function g(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var a=e.apply(t,r);function o(e){p(a,n,i,o,s,"next",e)}function s(e){p(a,n,i,o,s,"throw",e)}o(void 0)}))}}var y=[];function b(e){return e!==ApiClient.deviceId()}function w(e){a.ZP.show(),ApiClient.getJSON(ApiClient.getUrl("Devices")).then((function(t){!function(e,t){var r=(0,l.LP)(),n="";n+=t.map((function(e){var t="";t+="<div data-id='"+i()(e.Id)+"' class='card backdropCard'>",t+='<div class="cardBox visualCardBox">',t+='<div class="cardScalable">',t+='<div class="cardPadder cardPadder-backdrop"></div>',t+='<a is="emby-linkbutton" href="#/dashboard/devices/edit?id='.concat(i()(e.Id),'" class="cardContent cardImageContainer ').concat((0,h.Rk)(),'">');var n=c.ZP.getDeviceIcon(e);return n?(t+='<div class="cardImage" style="background-image:url(\''+n+"');background-size: auto 64%;background-position:center center;\">",t+="</div>"):t+='<span class="cardImageIcon material-icons tablet_android" aria-hidden="true"></span>',t+="</a>",t+="</div>",t+='<div class="cardFooter">',b(e.Id)&&(s.ZP.getIsRTL()?t+='<div style="text-align:left; float:left;padding-top:5px;">':t+='<div style="text-align:right; float:right;padding-top:5px;">',t+='<button type="button" is="paper-icon-button-light" data-id="'+i()(e.Id)+'" title="'+s.ZP.translate("Menu")+'" class="btnDeviceMenu"><span class="material-icons more_vert" aria-hidden="true"></span></button>',t+="</div>"),t+="<div class='cardText'>",t+=i()(e.CustomName||e.Name),t+="</div>",t+="<div class='cardText cardText-secondary'>",t+=i()(e.AppName+" "+e.AppVersion),t+="</div>",t+="<div class='cardText cardText-secondary'>",e.LastUserName&&(t+=i()(e.LastUserName),t+=", "+(0,u.Z)(Date.parse(e.DateLastActivity),r)),t+="&nbsp;",t+="</div>",t+="</div>",(t+="</div>")+"</div>"})).join(""),e.querySelector(".devicesList").innerHTML=n}(e,t.Items),y=t.Items.map((function(e){return e.Id})),a.ZP.hide()}))}function x(e){e.querySelector(".devicesList").addEventListener("click",(function(t){var n=o.ZP.parentWithClass(t.target,"btnDeviceMenu");n&&function(e,t,n){var i=[{name:s.ZP.translate("Edit"),id:"open",icon:"mode_edit"}];b(n)&&i.push({name:s.ZP.translate("Delete"),id:"delete",icon:"delete"}),r.e(78130).then(r.bind(r,78130)).then((function(r){r.default.show({items:i,positionTo:t,callback:function(t){switch(t){case"open":d.default.navigate("dashboard/devices/edit?id="+n);break;case"delete":!function(e,t){var r=s.ZP.translate("DeleteDeviceConfirmation");(0,f.Z)({text:r,title:s.ZP.translate("HeaderDeleteDevice"),confirmText:s.ZP.translate("Delete"),primary:"delete"}).then(g(m().mark((function r(){return m().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a.ZP.show(),r.next=3,ApiClient.deleteDevice(t);case 3:w(e);case 4:case"end":return r.stop()}}),r)}))))}(e,n)}}})}))}(e,n,n.getAttribute("data-id"))})),e.addEventListener("viewshow",(function(){w(this)})),e.querySelector("#deviceDeleteAll").addEventListener("click",(function(){var t,r;t=e,r=s.ZP.translate("DeleteDevicesConfirmation"),(0,f.Z)({text:r,title:s.ZP.translate("HeaderDeleteDevices"),confirmText:s.ZP.translate("Delete"),primary:"delete"}).then(g(m().mark((function e(){return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.ZP.show(),e.next=3,Promise.all(y.filter(b).map((function(e){return ApiClient.deleteDevice(e)})));case 3:w(t);case 4:case"end":return e.stop()}}),e)}))))}))}},82427:function(e,t,r){"use strict";r(13227),r(81414),r(37666),r(14011),r(11431),r(44901),r(54112);var n=r(61008),i=r(58517),a=r(2513),o=r(85432),s=r(30325),c=r(57366),u=r(72365),l=r(34862),d=r(34643),f=r(44038),h=r(74131),v=(r(67752),r(18613)),m=r(28172),p=Object.create(HTMLDivElement.prototype);function g(e){var t=this,r=t.multiSelect;!1!==(null==r?void 0:r.onContainerClick.call(t,e))&&n.ZP.onClick.call(t,e)}function y(e){return e.preventDefault(),e.stopPropagation(),!1}function b(e){var t=e.target,r=u.ZP.parentWithAttribute(t,"data-id");if(null!=r&&r.getAttribute("data-serverid"))return i.default.handleCommand("menu",{sourceElement:r}),e.preventDefault(),e.stopPropagation(),!1}function w(e,t,n){var i=this;Promise.all([r.e(61570),r.e(85441)]).then(r.bind(r,61570)).then((function(e){e.onUserDataChanged(n,i)}));var a=x(i);-1===a.indexOf("markfavorite")&&-1===a.indexOf("markplayed")||i.notifyRefreshNeeded()}function x(e){var t=e.getAttribute("data-monitor");return t?t.split(","):[]}function k(e,t,n){var i=this;if(-1===x(i).indexOf("timers")){var a=n.ProgramId,o=n.Id;Promise.all([r.e(61570),r.e(85441)]).then(r.bind(r,61570)).then((function(e){e.onTimerCreated(a,o,i)}))}else i.notifyRefreshNeeded()}function C(){-1!==x(this).indexOf("seriestimers")&&this.notifyRefreshNeeded()}function P(e,t,n){var i=this;-1===x(i).indexOf("timers")?Promise.all([r.e(61570),r.e(85441)]).then(r.bind(r,61570)).then((function(e){e.onTimerCancelled(n.Id,i)})):i.notifyRefreshNeeded()}function I(e,t,n){var i=this;-1===x(i).indexOf("seriestimers")?Promise.all([r.e(61570),r.e(85441)]).then(r.bind(r,61570)).then((function(e){e.onSeriesTimerCancelled(n.Id,i)})):i.notifyRefreshNeeded()}function S(e,t,r){var n=this,i=x(n);if(-1===i.indexOf("seriestimers")&&-1===i.indexOf("timers")){var a=r.ItemsAdded||[],o=r.ItemsRemoved||[];if(a.length||o.length){var s=n.getAttribute("data-parentid");if(s){var c=r.FoldersAddedTo||[],u=r.FoldersRemovedFrom||[],l=r.CollectionFolders||[];if(-1===c.indexOf(s)&&-1===u.indexOf(s)&&-1===l.indexOf(s))return}n.notifyRefreshNeeded()}}}function L(e,t){var r,n=this,i=t.state,a=x(n);if(i.NowPlayingItem&&"Video"===i.NowPlayingItem.MediaType){if(-1!==a.indexOf("videoplayback"))return void n.notifyRefreshNeeded(!0)}else if("Audio"===(null===(r=i.NowPlayingItem)||void 0===r?void 0:r.MediaType)&&-1!==a.indexOf("audioplayback"))return void n.notifyRefreshNeeded(!0)}function A(e,t,r,n){var i=r.bind(e);n=n||f.default,h.Z.on(n,t,i),e["event_"+t]=i}function T(e,t,r){var n=e["event_"+t];n&&(r=r||f.default,h.Z.off(r,t,n),e["event_"+t]=null)}function O(e,t){e.refreshInterval&&(clearInterval(e.refreshInterval),e.refreshInterval=null,t||(e.refreshIntervalEndTime=null))}function E(e,t){O(e),t||(t=parseInt(e.getAttribute("data-refreshinterval")||"0",10)),t&&(e.refreshInterval=setInterval(e.notifyRefreshNeeded.bind(e),t),e.refreshIntervalEndTime=(new Date).getTime()+t)}function D(e){var t=e.Items||e,r=this.parentContainer;r&&(t.length?r.classList.remove("hide"):r.classList.add("hide"));var n,i,a=document.activeElement;this.contains(a)&&(i=!0,n=a.getAttribute("data-id")),this.innerHTML=this.getItemsHtml(t),o.default.lazyChildren(this),i&&function(e,t){if(t){var r=e.querySelector('[data-id="'+t+'"]');if(r)try{return void d.Z.focus(r)}catch(e){console.error(e)}}d.Z.autoFocus(e)}(this,n),E(this),this.afterRefresh&&this.afterRefresh(e)}p.enableMultiSelect=function(e){var t=this.multiSelect;if(e){if(!t){var n=this;r.e(52943).then(r.bind(r,8156)).then((function(e){var t=e.default;n.multiSelect=new t({container:n,bindOnClick:!1})}))}}else t&&(t.destroy(),this.multiSelect=null)},p.enableDragReordering=function(e){var t=this.sortable;if(e){if(!t){var r=this;r.sortable=new m.ZP(r,{draggable:".listItem",handle:".listViewDragHandle",onEnd:function(e){return function(e,t){var r=e.item,n=e.newIndex,i=r.getAttribute("data-playlistitemid"),a=r.getAttribute("data-playlistid");if(a){var o=r.getAttribute("data-serverid"),s=v.Z.getApiClient(o);l.ZP.show(),s.ajax({url:s.getUrl("Playlists/"+a+"/Items/"+i+"/Move/"+n),type:"POST"}).then((function(){l.ZP.hide()}),(function(){l.ZP.hide(),t.refreshItems()}))}else{var c=e.oldIndex;r.dispatchEvent(new CustomEvent("itemdrop",{detail:{oldIndex:c,newIndex:n,playlistItemId:i},bubbles:!0,cancelable:!1}))}}(e,r)}})}}else t&&(t.destroy(),this.sortable=null)},p.createdCallback=function(){this.classList.add("itemsContainer")},p.attachedCallback=function(){this.addEventListener("click",g),c.Z.touch?this.addEventListener("contextmenu",y):"false"!==this.getAttribute("data-contextmenu")&&this.addEventListener("contextmenu",b),(s.Z.desktop||s.Z.mobile&&"false"!==this.getAttribute("data-multiselect"))&&this.enableMultiSelect(!0),s.Z.tv&&this.classList.add("itemsContainer-tv"),n.ZP.on(this,{click:!1}),A(this,"UserDataChanged",w),A(this,"TimerCreated",k),A(this,"SeriesTimerCreated",C),A(this,"TimerCancelled",P),A(this,"SeriesTimerCancelled",I),A(this,"LibraryChanged",S),A(this,"playbackstop",L,a.O),"true"===this.getAttribute("data-dragreorder")&&this.enableDragReordering(!0)},p.detachedCallback=function(){O(this),this.enableMultiSelect(!1),this.enableDragReordering(!1),this.removeEventListener("click",g),this.removeEventListener("contextmenu",b),this.removeEventListener("contextmenu",y),n.ZP.off(this,{click:!1}),T(this,"UserDataChanged"),T(this,"TimerCreated"),T(this,"SeriesTimerCreated"),T(this,"TimerCancelled"),T(this,"SeriesTimerCancelled"),T(this,"LibraryChanged"),T(this,"playbackstop",a.O),this.fetchData=null,this.getItemsHtml=null,this.parentContainer=null},p.pause=function(){O(this,!0),this.paused=!0},p.resume=function(e){this.paused=!1;var t=this.refreshIntervalEndTime;if(t){var r=t-(new Date).getTime();r>0&&!this.needsRefresh?E(this,r):(this.needsRefresh=!0,this.refreshIntervalEndTime=null)}return this.needsRefresh||null!=e&&e.refresh?this.refreshItems():Promise.resolve()},p.refreshItems=function(){return this.fetchData?this.paused?(this.needsRefresh=!0,Promise.resolve()):(this.needsRefresh=!1,this.fetchData().then(D.bind(this))):Promise.resolve()},p.notifyRefreshNeeded=function(e){if(this.paused)this.needsRefresh=!0;else{var t=this.refreshTimeout;t&&clearTimeout(t),!0===e?this.refreshItems():this.refreshTimeout=setTimeout(this.refreshItems.bind(this),1e4)}},document.registerElement("emby-itemscontainer",{prototype:p,extends:"div"})},84483:function(e,t,r){"use strict";r.d(t,{IH:function(){return h},Qi:function(){return f},Rk:function(){return v},XE:function(){return p},Yg:function(){return c},aI:function(){return g},aQ:function(){return s},gG:function(){return u},jL:function(){return d},nm:function(){return l}});var n=r(42571),i=r(1934),a=r(90005),o=r.n(a),s=function(e){return"Program"===e||"Timer"===e||"Recording"===e},c=function(e){return"play"===e.defaultAction&&e.isFolder?"link":e.isPhoto?"play":e.defaultAction},u=function(e){var t=window.screen;return!!(t&&t.availWidth-e>20)},l=function(e){return null==e?n.Mg.MixedSquare:e>=1.33?n.Mg.MixedBackdrop:e>.71?n.Mg.MixedSquare:n.Mg.MixedPortrait},d=function(e){var t;return o()(((t={card:!0})["".concat(e.shape,"Card")]=e.shape,t["".concat(e.cardCssClass)]=e.cardCssClass,t["".concat(e.cardClass)]=e.cardClass,t["card-hoverable"]=e.isDesktop,t["show-focus"]=e.isTV,t["show-animation"]=e.isTV&&e.enableFocusTransform,t.groupedCard=e.showChildCountIndicator&&e.childCount,t["card-withuserdata"]=!["MusicAlbum","MusicArtist","Audio"].includes(e.itemType),t.itemAction="button"===e.tagName,t))},f=function(e){var t;return o()(((t={cardImageContainer:!0,coveredImage:e.hasCoverImage,"coveredImage-contain":e.hasCoverImage&&"TvChannel"===e.itemType})[v(e.itemName)]=!e.imgUrl,t))},h=function(e){return o()({cardBox:!0,visualCardBox:e.cardLayout,"cardBox-bottompadded":e.hasOuterCardFooter&&!e.cardLayout})},v=function(e){return"defaultCardBackground defaultCardBackground".concat(m(e))},m=function(e){if(e){for(var t=Math.floor(e.length/2),r=String(e.slice(t,t+1).charCodeAt(0)),n=0,a=0;a<r.length;a++)n+=parseInt(r.charAt(a),10);return parseInt(String(n).slice(-1),10)%5+1}return(0,i.Iy)(1,5)},p=function(e){return e?-1!==(e=e.toLowerCase()).indexOf("portrait")?.6666666666666666:-1!==e.indexOf("backdrop")?1.7777777777777777:-1!==e.indexOf("square")?1:-1!==e.indexOf("banner")?5.405405405405405:null:null},g=function(e,t,r,n){switch(e){case"portrait":return y(t,n);case"square":return b(t,n);case"banner":return w(t);case"backdrop":return x(t,n);case"smallBackdrop":return k(t);case"overflowSmallBackdrop":return C(t,r,n);case"overflowPortrait":return P(t,r,n);case"overflowSquare":return I(t,r,n);case"overflowBackdrop":return S(t,r,n);default:return 4}},y=function(e,t){switch(!0){case t:return 5.9999999988;case e>=2200:return 10;case e>=1920:return 9.000000000009;case e>=1600:return 8;case e>=1400:return 7.0000000000021;case e>=1200:return 5.9999999988;case e>=800:return 5;case e>=700:return 4;default:return 3.0000000003}},b=function(e,t){switch(!0){case t:return 5.9999999988;case e>=2200:return 10;case e>=1920:return 9.000000000009;case e>=1600:return 8;case e>=1400:return 7.0000000000021;case e>=1200:return 5.9999999988;case e>=800:return 5;case e>=700:return 4;case e>=500:return 3.0000000003;default:return 2}},w=function(e){switch(!0){case e>=2200:return 4;case e>=1200:return 3.0000000003;case e>=800:return 2;default:return 1}},x=function(e,t){switch(!0){case t:return 4;case e>=2500:return 6;case e>=1600:return 5;case e>=1200:return 4;case e>=770:return 3;case e>=420:return 2;default:return 1}},k=function(e){switch(!0){case e>=1600:return 8;case e>=1400:return 7.000000000007001;case e>=1200:return 5.9999999988;case e>=1e3:return 5;case e>=800:return 4;case e>=500:return 3.0000000003;default:return 2}},C=function(e,t,r){switch(!0){case r:return 100/18.9;case t&&e>=800:return 100/15.5;case t:return 100/23.3;case e>=540:return 100/30;default:return 100/72}},P=function(e,t,r){switch(!0){case r:return 100/15.5;case t&&e>=1700:return 100/11.6;case t:return 100/15.5;case e>=1400:return 100/15;case e>=1200:return 100/18;case e>=760:return 100/23;case e>=400:return 100/31.5;default:return 100/42}},I=function(e,t,r){switch(!0){case r:return 100/15.5;case t&&e>=1700:return 100/11.6;case t:return 100/15.5;case e>=1400:return 100/15;case e>=1200:return 100/18;case e>=760:return 100/23;case e>=540:return 100/31.5;default:return 100/42}},S=function(e,t,r){switch(!0){case r:return 100/23.3;case t&&e>=1700:return 100/18.5;case t:return 100/23.3;case e>=1800:return 100/23.5;case e>=1400:return 100/30;case e>=760:return 2.5;case e>=640:return 100/56;default:return 100/72}}},42571:function(e,t,r){"use strict";var n;function i(e){return void 0===e&&(e=!0),e?n.SquareOverflow:n.Square}function a(e){return void 0===e&&(e=!0),e?n.BackdropOverflow:n.Backdrop}function o(e){return void 0===e&&(e=!0),e?n.PortraitOverflow:n.Portrait}r.d(t,{Mg:function(){return n},gB:function(){return a},nY:function(){return i},pk:function(){return o}}),function(e){e.Backdrop="backdrop",e.BackdropOverflow="overflowBackdrop",e.Banner="banner",e.Portrait="portrait",e.PortraitOverflow="overflowPortrait",e.Square="square",e.SquareOverflow="overflowSquare",e.Auto="auto",e.AutoHome="autohome",e.AutoOverflow="autooverflow",e.AutoVertical="autoVertical",e.Mixed="mixed",e.MixedSquare="mixedSquare",e.MixedBackdrop="mixedBackdrop",e.MixedPortrait="mixedPortrait"}(n||(n={}))},31606:function(e,t,r){"use strict";var n=r(16918),i="assets/img/devices/";t.ZP={getDeviceIcon:function(e){var t;switch(e.AppName||e.Client){case"Samsung Smart TV":return i+"samsung.svg";case"Xbox One":return i+"xbox.svg";case"Sony PS4":return i+"playstation.svg";case"Kodi":case"Kodi JellyCon":return i+"kodi.svg";case"Jellyfin Android":case"AndroidTV":case"Android TV":return i+"android.svg";case"Jellyfin Mobile (iOS)":case"Jellyfin Mobile (iPadOS)":case"Jellyfin iOS":case"Infuse":return i+"apple.svg";case"Home Assistant":return i+"home-assistant.svg";case"Jellyfin Roku":return i+"roku.svg";case"Finamp":return i+"finamp.svg";case"Jellyfin Web":return function(e){switch(e){case"Opera":case"Opera TV":case"Opera Android":return i+"opera.svg";case"Chrome":case"Chrome Android":return i+"chrome.svg";case"Firefox":case"Firefox Android":return i+"firefox.svg";case"Safari":case"Safari iPad":case"Safari iPhone":return i+"safari.svg";case"Edge Chromium":case"Edge Chromium Android":case"Edge Chromium iPad":case"Edge Chromium iPhone":return i+"edgechromium.svg";case"Edge":return i+"edge.svg";case"Internet Explorer":return i+"msie.svg";default:return i+"html5.svg"}}(e.Name||e.DeviceName);default:if(null===(t=e.Capabilities)||void 0===t?void 0:t.IconUrl)try{return new URL(e.Capabilities.IconUrl).toString()}catch(t){console.error("[getDeviceIcon] device capabilities has invalid IconUrl",e,t)}return i+"other.svg"}},getLibraryIcon:function(e){switch(e){case"movies":return"video_library";case"music":return"library_music";case"photos":case"homevideos":return"photo_library";case"livetv":return"live_tv";case"tvshows":return"tv";case"trailers":return"local_movies";case"musicvideos":return"music_video";case"books":return"library_books";case"channels":return"videocam";case"playlists":return"view_list";default:return"folder"}},getItemTypeIcon:function(e){switch(e){case n.k.MusicAlbum:return"album";case n.k.MusicArtist:case n.k.Person:return"person";case n.k.Audio:return"audiotrack";case n.k.Movie:return"movie";case n.k.Episode:case n.k.Series:return"tv";case n.k.Program:return"live_tv";case n.k.Book:return"book";case n.k.Folder:return"folder";case n.k.BoxSet:return"collections";case n.k.Playlist:return"view_list";case n.k.Photo:return"photo";case n.k.PhotoAlbum:return"photo_album";default:return"folder"}}}},90005:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=o(e,a(r)))}return e}function a(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return i.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=o(t,r));return t}function o(e,t){return t?e?e+" "+t:e+t:e}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r)}()}}]);