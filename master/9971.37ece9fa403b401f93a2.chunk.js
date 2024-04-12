"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9971],{7397:function(e,t,r){var n=r(62540),s=r(63696),a=r(62156);t.A=function(e){var t=e.children,r=e.id,o=e.className,i=void 0===o?"":o,c=e.title,l=e.isBackButtonEnabled,u=void 0===l||l,d=e.isMenuButtonEnabled,f=void 0!==d&&d,v=e.isNowPlayingBarEnabled,p=void 0===v||v,h=e.isThemeMediaSupported,m=void 0!==h&&h,w=e.backDropType,y=(0,s.useRef)(null);return(0,s.useEffect)((function(){a.A.hideView()}),[]),(0,s.useEffect)((function(){var e,t,r,n,s={bubbles:!0,cancelable:!1,detail:{isRestored:!1,options:{enableMediaControl:p,supportsThemeMedia:m}}};null===(e=y.current)||void 0===e||e.dispatchEvent(new CustomEvent("viewbeforeshow",s)),null===(t=y.current)||void 0===t||t.dispatchEvent(new CustomEvent("pagebeforeshow",s)),null===(r=y.current)||void 0===r||r.dispatchEvent(new CustomEvent("viewshow",s)),null===(n=y.current)||void 0===n||n.dispatchEvent(new CustomEvent("pageshow",s))}),[y,p,m]),(0,n.jsx)("div",{ref:y,id:r,"data-role":"page",className:"page ".concat(i),"data-title":c,"data-backbutton":u,"data-menubutton":f,"data-backdroptype":w,children:t})}},41600:function(e,t,r){var n=r(62540),s=r(63696),a=r(89100),o=r(9482),i=r(73233),c=r(40532),l=r(56869),u=r(50764),d=r(76165),f=r(39057);t.A=function(e){var t=e.userId,v=(0,s.useRef)(null),p=(0,s.useCallback)((function(){return e=void 0,n=void 0,o=function(){var e,n,s,o,c;return function(e,t){var r,n,s,a,o={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(i){return function(c){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,i[0]&&(o=0)),o;)try{if(r=1,n&&(s=2&i[0]?n.return:i[0]?n.throw||((s=n.return)&&s.call(n),0):n.next)&&!(s=s.call(n,i[1])).done)return s;switch(n=0,s&&(i=[2&i[0],s.value]),i[0]){case 0:case 1:s=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,n=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!((s=(s=o.trys).length>0&&s[s.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!s||i[1]>s[0]&&i[1]<s[3])){o.label=i[1];break}if(6===i[0]&&o.label<s[1]){o.label=s[1],s=i;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(i);break}s[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],n=0}finally{r=s=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}(this,(function(l){switch(l.label){case 0:return(e=v.current)?[4,window.ApiClient.getUser(t)]:(console.error("Unexpected null reference"),[2]);case 1:return n=l.sent(),[4,a.default.getCurrentUser()];case 2:if(s=l.sent(),!n.Policy||!n.Configuration)throw new Error("Unexpected null user policy or configuration");return i.default.setTitle(n.Name),n.HasConfiguredPassword?(e.querySelector("#btnResetPassword").classList.remove("hide"),e.querySelector("#fldCurrentPassword").classList.remove("hide")):(e.querySelector("#btnResetPassword").classList.add("hide"),e.querySelector("#fldCurrentPassword").classList.add("hide")),o=(null===(c=null==s?void 0:s.Policy)||void 0===c?void 0:c.IsAdministrator)||n.Policy.EnableUserPreferenceAccess,e.querySelector(".passwordSection").classList.toggle("hide",!o),Promise.resolve().then(r.bind(r,84069)).then((function(t){t.default.autoFocus(e)})).catch((function(e){console.error("[UserPasswordForm] failed to load autofocuser",e)})),e.querySelector("#txtCurrentPassword").value="",e.querySelector("#txtNewPassword").value="",e.querySelector("#txtNewPasswordConfirm").value="",[2]}}))},new((s=void 0)||(s=Promise))((function(t,r){function a(e){try{c(o.next(e))}catch(e){r(e)}}function i(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){var r;e.done?t(e.value):(r=e.value,r instanceof s?r:new s((function(e){e(r)}))).then(a,i)}c((o=o.apply(e,n||[])).next())}));var e,n,s,o}),[t]);return(0,s.useEffect)((function(){var e=v.current;if(e){p().catch((function(e){console.error("[UserPasswordForm] failed to load user",e)}));e.querySelector(".updatePasswordForm").addEventListener("submit",(function(r){return e.querySelector("#txtNewPassword").value!=e.querySelector("#txtNewPasswordConfirm").value?(0,u.A)(o.Ay.translate("PasswordMatchError")):(l.Ay.show(),n=e.querySelector("#txtCurrentPassword").value,s=e.querySelector("#txtNewPassword").value,e.querySelector("#fldCurrentPassword").classList.contains("hide")&&(n=""),window.ApiClient.updateUserPassword(t,n,s).then((function(){l.Ay.hide(),(0,u.A)(o.Ay.translate("PasswordSaved")),p().catch((function(e){console.error("[UserPasswordForm] failed to load user",e)}))}),(function(){l.Ay.hide(),a.default.alert({title:o.Ay.translate("HeaderLoginFailure"),message:o.Ay.translate("MessageInvalidUser")})}))),r.preventDefault(),!1;var n,s})),e.querySelector("#btnResetPassword").addEventListener("click",(function(){var e=o.Ay.translate("PasswordResetConfirmation");(0,c.A)(e,o.Ay.translate("ResetPassword")).then((function(){l.Ay.show(),window.ApiClient.resetUserPassword(t).then((function(){l.Ay.hide(),a.default.alert({message:o.Ay.translate("PasswordResetComplete"),title:o.Ay.translate("ResetPassword")}),p().catch((function(e){console.error("[UserPasswordForm] failed to load user",e)}))})).catch((function(e){console.error("[UserPasswordForm] failed to reset user password",e)}))})).catch((function(){}))}))}else console.error("Unexpected null reference")}),[p,t]),(0,n.jsx)("div",{ref:v,children:(0,n.jsx)("form",{className:"updatePasswordForm passwordSection hide",style:{margin:"0 auto 2em"},children:(0,n.jsxs)("div",{className:"detailSection",children:[(0,n.jsx)("div",{id:"fldCurrentPassword",className:"inputContainer hide",children:(0,n.jsx)(f.A,{type:"password",id:"txtCurrentPassword",label:"LabelCurrentPassword",options:'autoComplete="off"'})}),(0,n.jsx)("div",{className:"inputContainer",children:(0,n.jsx)(f.A,{type:"password",id:"txtNewPassword",label:"LabelNewPassword",options:'autoComplete="off"'})}),(0,n.jsx)("div",{className:"inputContainer",children:(0,n.jsx)(f.A,{type:"password",id:"txtNewPasswordConfirm",label:"LabelNewPasswordConfirm",options:'autoComplete="off"'})}),(0,n.jsx)("br",{}),(0,n.jsxs)("div",{children:[(0,n.jsx)(d.A,{type:"submit",className:"raised button-submit block",title:"Save"}),(0,n.jsx)(d.A,{type:"button",id:"btnResetPassword",className:"raised button-cancel block hide",title:"ResetPassword"})]})]})})})}},76165:function(e,t,r){var n=r(62540),s=(r(63696),r(9482)),a=function(e){var t=e.type,r=e.id,n=e.className,s=e.title,a=e.leftIcon,o=e.rightIcon;return{__html:'<button\n        is="emby-button"\n        type="'.concat(t,'"\n        ').concat(r,'\n        class="').concat(n,'"\n        >\n        ').concat(a,"\n        <span>").concat(s,"</span>\n        ").concat(o,"\n    </button>")}};t.A=function(e){var t=e.type,r=e.id,o=e.className,i=e.title,c=e.leftIcon,l=e.rightIcon;return(0,n.jsx)("div",{dangerouslySetInnerHTML:a({type:t,id:r?'id="'.concat(r,'"'):"",className:o,title:s.Ay.translate(i),leftIcon:c?'<span class="material-icons '.concat(c,'" aria-hidden="true"></span>'):"",rightIcon:l?'<span class="material-icons '.concat(l,'" aria-hidden="true"></span>'):""})})}},39057:function(e,t,r){var n=r(62540),s=r(63696),a=r(9482);t.A=function(e){var t=e.containerClassName,r=e.initialValue,o=e.onChange,i=void 0===o?function(){}:o,c=e.type,l=e.id,u=e.label,d=e.options,f=void 0===d?"":d,v=(0,s.useRef)(null),p=(0,s.useMemo)((function(){return function(e){var t=e.id,r=e.label,n=e.initialValue,s=e.options;return{__html:'<input\n        is="emby-input"\n        type="'.concat(e.type,'"\n        id="').concat(t,'"\n        label="').concat(r,'"\n        value="').concat(n,'"\n        ').concat(s,"\n    />")}}({type:c,id:l,label:a.Ay.translate(u),initialValue:r,options:f})}),[]),h=(0,s.useCallback)((function(e){i(e.target.value)}),[i]);return(0,s.useEffect)((function(){var e,t=null===(e=null==v?void 0:v.current)||void 0===e?void 0:e.querySelector("input");return null==t||t.addEventListener("input",h),function(){null==t||t.removeEventListener("input",h)}}),[v,h]),(0,n.jsx)("div",{ref:v,className:t,dangerouslySetInnerHTML:p})}},40782:function(e,t,r){var n=r(11444),s="assets/img/devices/";t.Ay={getDeviceIcon:function(e){var t;switch(e.AppName||e.Client){case"Samsung Smart TV":return s+"samsung.svg";case"Xbox One":return s+"xbox.svg";case"Sony PS4":return s+"playstation.svg";case"Kodi":case"Kodi JellyCon":return s+"kodi.svg";case"Jellyfin Android":case"AndroidTV":case"Android TV":return s+"android.svg";case"Jellyfin Mobile (iOS)":case"Jellyfin Mobile (iPadOS)":case"Jellyfin iOS":case"Infuse":return s+"apple.svg";case"Home Assistant":return s+"home-assistant.svg";case"Jellyfin Roku":return s+"roku.svg";case"Finamp":return s+"finamp.svg";case"Jellyfin Web":return function(e){switch(e){case"Opera":case"Opera TV":case"Opera Android":return s+"opera.svg";case"Chrome":case"Chrome Android":return s+"chrome.svg";case"Firefox":case"Firefox Android":return s+"firefox.svg";case"Safari":case"Safari iPad":case"Safari iPhone":return s+"safari.svg";case"Edge Chromium":case"Edge Chromium Android":case"Edge Chromium iPad":case"Edge Chromium iPhone":return s+"edgechromium.svg";case"Edge":return s+"edge.svg";case"Internet Explorer":return s+"msie.svg";default:return s+"html5.svg"}}(e.Name||e.DeviceName);default:if(null===(t=e.Capabilities)||void 0===t?void 0:t.IconUrl)try{return new URL(e.Capabilities.IconUrl).toString()}catch(t){console.error("[getDeviceIcon] device capabilities has invalid IconUrl",e,t)}return s+"other.svg"}},getLibraryIcon:function(e){switch(e){case"movies":return"video_library";case"music":return"library_music";case"photos":case"homevideos":return"photo_library";case"livetv":return"live_tv";case"tvshows":return"tv";case"trailers":return"local_movies";case"musicvideos":return"music_video";case"books":return"library_books";case"channels":return"videocam";case"playlists":return"view_list";default:return"folder"}},getItemTypeIcon:function(e){switch(e){case n.D.MusicAlbum:return"album";case n.D.MusicArtist:case n.D.Person:return"person";case n.D.Audio:return"audiotrack";case n.D.Movie:return"movie";case n.D.Episode:case n.D.Series:return"tv";case n.D.Program:return"live_tv";case n.D.Book:return"book";case n.D.Folder:return"folder";case n.D.BoxSet:return"collections";case n.D.Playlist:return"view_list";case n.D.Photo:return"photo";case n.D.PhotoAlbum:return"photo_album";default:return"folder"}}}}}]);