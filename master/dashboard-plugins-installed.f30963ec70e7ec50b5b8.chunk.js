/*! For license information please see dashboard-plugins-installed.f30963ec70e7ec50b5b8.chunk.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[56728,49213,59841],{38903:function(e,t,r){"use strict";r.r(t),r(88646),r(54134),r(91270),r(59139),r(56187),r(38690),r(89228),r(13227),r(2663),r(81414),r(84159),r(19131),r(96626),r(37666),r(14011),r(11431),r(66066),r(33370);var n=r(28540),a=r(71487),i=r(72365),s=r(94994),c=(r(38228),r(60635)),o=r(3137),u=r(26059);function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function d(e,t){ApiClient.getJSON(ApiClient.getUrl("web/configurationpages")+"?pageType=PluginConfiguration").then((function(r){!function(e,t,r){var a=(t=t.sort((function(e,t){return e.Name>t.Name?1:-1}))).map((function(e){return function(e,t){var r=t.filter((function(t){return t.PluginId==e.Id}))[0],n=r?c.default.getPluginUrl(r.Name):null,a="";if(a+="<div data-id='".concat(e.Id,"' data-version='").concat(e.Version,"' data-name='").concat(e.Name,"' data-removable='").concat(e.CanUninstall,"' data-status='").concat(e.Status,"' class='card backdropCard'>"),a+='<div class="cardBox visualCardBox">',a+='<div class="cardScalable">',a+='<div class="cardPadder cardPadder-backdrop"></div>',a+='<div class="cardContent">',a+=n?'<a class="cardImageContainer" is="emby-linkbutton" style="margin:0;padding:0" href="'.concat(n,'">'):'<div class="cardImageContainer noConfigPluginCard noHoverEffect emby-button" style="margin:0;padding:0">',e.HasImage){var i=ApiClient.getUrl("/Plugins/".concat(e.Id,"/").concat(e.Version,"/Image"));a+='<img src="'.concat(i,'" style="width:100%" />')}else a+='<div class="cardImage flex align-items-center justify-content-center '.concat((0,u.Rk)(),'">'),a+='<span class="cardImageIcon material-icons extension" aria-hidden="true"></span>',a+="</div>";return a+=n?"</a>":"</div>",a+="</div>",a+="</div>",a+='<div class="cardFooter">',(r||e.CanUninstall)&&(s.ZP.getIsRTL()?a+='<div style="text-align:left; float:left;padding-top:5px;">':a+='<div style="text-align:right; float:right;padding-top:5px;">',a+='<button type="button" is="paper-icon-button-light" class="btnCardMenu autoSize"><span class="material-icons more_vert" aria-hidden="true"></span></button>',a+="</div>"),a+='<div class="cardText">',a+="".concat(e.Name,"<span class='cardText cardText-secondary'>").concat(e.Version,"</span>"),a+="</div>",a+='<div class="cardText">'.concat(s.ZP.translate("LabelStatus")," ").concat(e.Status,"</div>"),a+="</div>",(a+="</div>")+"</div>"}(e,r)})).join(""),i=e.querySelector(".installedPlugins");i.removeEventListener("click",v),i.addEventListener("click",v),t.length?(i.classList.add("itemsContainer"),i.classList.add("vertical-wrap")):(a+='<div class="centerMessage">',a+="<h1>"+s.ZP.translate("MessageNoPluginsInstalled")+"</h1>",a+='<p><a is="emby-linkbutton" class="button-link" href="#/dashboard/plugins/catalog">',a+=s.ZP.translate("MessageBrowsePluginCatalog"),a+="</a></p>",a+="</div>");var o=e.querySelector("#txtSearchPlugins");o&&o.addEventListener("input",(function(){return function(e,t){var r,n=t.value.toLowerCase(),a=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return s=e.done,e},e:function(e){c=!0,i=e},f:function(){try{s||null==r.return||r.return()}finally{if(c)throw i}}}}(e.querySelectorAll(".card"));try{for(a.s();!(r=a.n()).done;){var i=r.value;n&&""!=n&&!i.textContent.toLowerCase().includes(n)?i.style.display="none":i.style.display="unset"}}catch(e){a.e(e)}finally{a.f()}}(e,o)})),i.innerHTML=a,n.ZP.hide()}(e,t,r)}))}function f(e){n.ZP.show(),ApiClient.getInstalledPlugins().then((function(t){d(e,t)}))}function g(){return[{href:"#/dashboard/plugins",name:s.ZP.translate("TabMyPlugins")},{href:"#/dashboard/plugins/catalog",name:s.ZP.translate("TabCatalog")},{href:"#/dashboard/plugins/repositories",name:s.ZP.translate("TabRepositories")}]}function v(e){if(i.ZP.parentWithClass(e.target,"noConfigPluginCard"))c.default.alert({message:s.ZP.translate("MessageNoPluginConfiguration")});else if(i.ZP.parentWithClass(e.target,"connectModePluginCard"))c.default.alert({message:s.ZP.translate("MessagePluginConfigurationRequiresLocalAccess")});else{var t=i.ZP.parentWithClass(e.target,"btnCardMenu");t&&(a=i.ZP.parentWithClass(t,"page"),u=t,l=i.ZP.parentWithClass(u,"card"),d=l.getAttribute("data-id"),g=l.getAttribute("data-name"),v=l.getAttribute("data-removable"),p=l.querySelector(".cardImageContainer").getAttribute("href"),h=l.getAttribute("data-status"),m=l.getAttribute("data-version"),b=[],p&&b.push({name:s.ZP.translate("Settings"),id:"open",icon:"mode_edit"}),"true"===v&&("Disabled"===h&&b.push({name:s.ZP.translate("EnablePlugin"),id:"enable",icon:"check_circle_outline"}),"Active"===h&&b.push({name:s.ZP.translate("DisablePlugin"),id:"disable",icon:"do_not_disturb"}),b.push({name:s.ZP.translate("ButtonUninstall"),id:"delete",icon:"delete"})),Promise.resolve().then(r.bind(r,12801)).then((function(e){e.show({items:b,positionTo:u,callback:function(e){switch(e){case"open":c.default.navigate(p);break;case"delete":!function(e,t,r,a){var i=s.ZP.translate("UninstallPluginConfirmation",a);(0,o.Z)({title:s.ZP.translate("HeaderUninstallPlugin"),text:i,primary:"delete",confirmText:s.ZP.translate("HeaderUninstallPlugin")}).then((function(){n.ZP.show(),ApiClient.uninstallPluginByVersion(t,r).then((function(){f(e)}))}))}(a,d,m,g);break;case"enable":!function(e,t,r){n.ZP.show(),ApiClient.enablePlugin(t,r).then((function(){f(e)}))}(a,d,m);break;case"disable":!function(e,t,r){n.ZP.show(),ApiClient.disablePlugin(t,r).then((function(){f(e)}))}(a,d,m)}}})})))}var a,u,l,d,g,v,p,h,m,b}(0,c.pageIdOn)("pageshow","pluginsPage",(function(){a.default.setTabs("plugins",0,g),f(this)})),window.PluginsPage={renderPlugins:d}},60042:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var s=a.apply(null,r);s&&e.push(s)}}else if("object"===i){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},26059:function(e,t,r){"use strict";r.d(t,{IH:function(){return f},Qi:function(){return d},Rk:function(){return g},XE:function(){return p},Yg:function(){return c},aI:function(){return h},aQ:function(){return s},gG:function(){return o},jL:function(){return l},nm:function(){return u}});var n=r(34706),a=r(60042),i=r.n(a),s=function(e){return"Program"===e||"Timer"===e||"Recording"===e},c=function(e){return"play"===e.defaultAction&&e.isFolder?"link":e.isPhoto?"play":e.defaultAction},o=function(e){var t=window.screen;return!!(t&&t.availWidth-e>20)},u=function(e){return null==e?"mixedSquare":e>=1.33?"mixedBackdrop":e>.71?"mixedSquare":"mixedPortrait"},l=function(e){var t;return i()(((t={card:!0})["".concat(e.shape,"Card")]=e.shape,t["".concat(e.cardCssClass)]=e.cardCssClass,t["".concat(e.cardClass)]=e.cardClass,t["card-hoverable"]=e.isDesktop,t["show-focus"]=e.isTV,t["show-animation"]=e.isTV&&e.enableFocusTransform,t.groupedCard=e.showChildCountIndicator&&e.childCount,t["card-withuserdata"]=!["MusicAlbum","MusicArtist","Audio"].includes(e.itemType),t.itemAction="button"===e.tagName,t))},d=function(e){var t;return i()(((t={cardImageContainer:!0,coveredImage:e.hasCoverImage,"coveredImage-contain":e.hasCoverImage&&"TvChannel"===e.itemType})[g(e.itemName)]=!e.imgUrl,t))},f=function(e){return i()({cardBox:!0,visualCardBox:e.cardLayout,"cardBox-bottompadded":e.hasOuterCardFooter&&!e.cardLayout})},g=function(e){return"defaultCardBackground defaultCardBackground".concat(v(e))},v=function(e){if(e){for(var t=Math.floor(e.length/2),r=String(e.slice(t,t+1).charCodeAt(0)),a=0,i=0;i<r.length;i++)a+=parseInt(r.charAt(i),10);return parseInt(String(a).slice(-1),10)%5+1}return(0,n.Iy)(1,5)},p=function(e){return e?-1!==(e=e.toLowerCase()).indexOf("portrait")?.6666666666666666:-1!==e.indexOf("backdrop")?1.7777777777777777:-1!==e.indexOf("square")?1:-1!==e.indexOf("banner")?5.405405405405405:null:null},h=function(e,t,r,n){switch(e){case"portrait":return m(t,n);case"square":return b(t,n);case"banner":return y(t);case"backdrop":return C(t,n);case"smallBackdrop":return P(t);case"overflowSmallBackdrop":return w(t,r,n);case"overflowPortrait":return A(t,r,n);case"overflowSquare":return S(t,r,n);case"overflowBackdrop":return x(t,r,n);default:return 4}},m=function(e,t){switch(!0){case t:return 5.9999999988;case e>=2200:return 10;case e>=1920:return 9.000000000009;case e>=1600:return 8;case e>=1400:return 7.0000000000021;case e>=1200:return 5.9999999988;case e>=800:return 5;case e>=700:return 4;default:return 3.0000000003}},b=function(e,t){switch(!0){case t:return 5.9999999988;case e>=2200:return 10;case e>=1920:return 9.000000000009;case e>=1600:return 8;case e>=1400:return 7.0000000000021;case e>=1200:return 5.9999999988;case e>=800:return 5;case e>=700:return 4;case e>=500:return 3.0000000003;default:return 2}},y=function(e){switch(!0){case e>=2200:return 4;case e>=1200:return 3.0000000003;case e>=800:return 2;default:return 1}},C=function(e,t){switch(!0){case t:return 4;case e>=2500:return 6;case e>=1600:return 5;case e>=1200:return 4;case e>=770:return 3;case e>=420:return 2;default:return 1}},P=function(e){switch(!0){case e>=1600:return 8;case e>=1400:return 7.000000000007001;case e>=1200:return 5.9999999988;case e>=1e3:return 5;case e>=800:return 4;case e>=500:return 3.0000000003;default:return 2}},w=function(e,t,r){switch(!0){case r:return 100/18.9;case t&&e>=800:return 100/15.5;case t:return 100/23.3;case e>=540:return 100/30;default:return 100/72}},A=function(e,t,r){switch(!0){case r:return 100/15.5;case t&&e>=1700:return 100/11.6;case t:return 100/15.5;case e>=1400:return 100/15;case e>=1200:return 100/18;case e>=760:return 100/23;case e>=400:return 100/31.5;default:return 100/42}},S=function(e,t,r){switch(!0){case r:return 100/15.5;case t&&e>=1700:return 100/11.6;case t:return 100/15.5;case e>=1400:return 100/15;case e>=1200:return 100/18;case e>=760:return 100/23;case e>=540:return 100/31.5;default:return 100/42}},x=function(e,t,r){switch(!0){case r:return 100/23.3;case t&&e>=1700:return 100/18.5;case t:return 100/23.3;case e>=1800:return 100/23.5;case e>=1400:return 100/30;case e>=760:return 2.5;case e>=640:return 100/56;default:return 100/72}}},23509:function(e,t,r){"use strict";var n="assets/img/devices/";t.ZP={getDeviceIcon:function(e){var t;switch(e.AppName||e.Client){case"Samsung Smart TV":return n+"samsung.svg";case"Xbox One":return n+"xbox.svg";case"Sony PS4":return n+"playstation.svg";case"Kodi":case"Kodi JellyCon":return n+"kodi.svg";case"Jellyfin Android":case"AndroidTV":case"Android TV":return n+"android.svg";case"Jellyfin Mobile (iOS)":case"Jellyfin Mobile (iPadOS)":case"Jellyfin iOS":case"Infuse":return n+"apple.svg";case"Home Assistant":return n+"home-assistant.svg";case"Jellyfin Roku":return n+"roku.svg";case"Finamp":return n+"finamp.svg";case"Jellyfin Web":return function(e){switch(e){case"Opera":case"Opera TV":case"Opera Android":return n+"opera.svg";case"Chrome":case"Chrome Android":return n+"chrome.svg";case"Firefox":case"Firefox Android":return n+"firefox.svg";case"Safari":case"Safari iPad":case"Safari iPhone":return n+"safari.svg";case"Edge Chromium":case"Edge Chromium Android":case"Edge Chromium iPad":case"Edge Chromium iPhone":return n+"edgechromium.svg";case"Edge":return n+"edge.svg";case"Internet Explorer":return n+"msie.svg";default:return n+"html5.svg"}}(e.Name||e.DeviceName);default:if(null===(t=e.Capabilities)||void 0===t?void 0:t.IconUrl)try{return new URL(e.Capabilities.IconUrl).toString()}catch(t){console.error("[getDeviceIcon] device capabilities has invalid IconUrl",e,t)}return n+"other.svg"}},getLibraryIcon:function(e){switch(e){case"movies":return"video_library";case"music":return"library_music";case"photos":case"homevideos":return"photo_library";case"livetv":return"live_tv";case"tvshows":return"tv";case"trailers":return"local_movies";case"musicvideos":return"music_video";case"books":return"library_books";case"channels":return"videocam";case"playlists":return"view_list";default:return"folder"}}}}}]);