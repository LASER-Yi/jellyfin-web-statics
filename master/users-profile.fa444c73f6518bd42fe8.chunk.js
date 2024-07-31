"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[18373,96084,40367],{40293:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var a=n(62540),i=n(22696),c=n.n(i),l=n(63696),o=n(9055),r=n(89100),s=n(9482),d=n(73233),u=n(76165),h=n(14948),v=n(39057),m=function(e){var t=e.className,n=e.title;return{__html:'<a\n        is="emby-linkbutton"\n        class="'.concat(t,"\"\n        href='#'\n        >\n        ").concat(n,"\n    </a>")}},b=function(e){var t=e.className,n=e.title;return(0,a.jsx)("div",{dangerouslySetInnerHTML:m({className:t,title:s.Ay.translate(n)})})},y=n(85757),p=n(87159),f=n(56869),A=n(50764),k=n(70749),x=n(7397),g=function(){return g=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},g.apply(this,arguments)},S=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var a,i,c=n.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(a=c.next()).done;)l.push(a.value)}catch(e){i={error:e}}finally{try{a&&!a.done&&(n=c.return)&&n.call(c)}finally{if(i)throw i.error}}return l},P=function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],a=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&a>=e.length&&(e=void 0),{value:e&&e[a++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},N=function(){var e=S((0,o.ok)(),1)[0].get("userId"),t=S((0,l.useState)(""),2),n=t[0],i=t[1],m=S((0,l.useState)([]),2),N=m[0],C=m[1],j=S((0,l.useState)([]),2),L=j[0],w=j[1],E=S((0,l.useState)([]),2),D=E[0],I=E[1],q=S((0,l.useState)(""),2),T=q[0],R=q[1],M=S((0,l.useState)(""),2),O=M[0],U=M[1],H=(0,l.useRef)(null),F=function(){if(!e)throw new Error("missing user id");return window.ApiClient.getUser(e)},B=(0,l.useCallback)((function(e,t,n){var a;e.querySelector(".fldSelectLoginProvider").classList.toggle("hide",n.length<=1),w(n);var i=(null===(a=t.Policy)||void 0===a?void 0:a.AuthenticationProviderId)||"";R(i)}),[]),_=(0,l.useCallback)((function(e,t,n){var a;e.querySelector(".fldSelectPasswordResetProvider").classList.toggle("hide",n.length<=1),I(n);var i=(null===(a=t.Policy)||void 0===a?void 0:a.PasswordResetProviderId)||"";U(i)}),[]),V=(0,l.useCallback)((function(e,t,n){window.ApiClient.getJSON(window.ApiClient.getUrl("Channels",{SupportsMediaDeletion:!0})).then((function(a){var i,c,l,o,r,s,d,u,h,v,m,b,y=[];try{for(var p=P(n),f=p.next();!f.done;f=p.next()){var A=f.value;b=(null===(r=t.Policy)||void 0===r?void 0:r.EnableContentDeletion)||-1!=(null===(d=null===(s=t.Policy)||void 0===s?void 0:s.EnableContentDeletionFromFolders)||void 0===d?void 0:d.indexOf(A.Id||""))?' checked="checked"':"",y.push(g(g({},A),{checkedAttribute:b}))}}catch(e){i={error:e}}finally{try{f&&!f.done&&(c=p.return)&&c.call(p)}finally{if(i)throw i.error}}try{for(var k=P(a.Items),x=k.next();!x.done;x=k.next()){var S=x.value;b=(null===(u=t.Policy)||void 0===u?void 0:u.EnableContentDeletion)||-1!=(null===(v=null===(h=t.Policy)||void 0===h?void 0:h.EnableContentDeletionFromFolders)||void 0===v?void 0:v.indexOf(S.Id||""))?' checked="checked"':"",y.push(g(g({},S),{checkedAttribute:b}))}}catch(e){l={error:e}}finally{try{x&&!x.done&&(o=k.return)&&o.call(k)}finally{if(l)throw l.error}}C(y);var N,j,L=e.querySelector(".chkEnableDeleteAllFolders");L.checked=(null===(m=t.Policy)||void 0===m?void 0:m.EnableContentDeletion)||!1,N=L,j=new Event("change",{bubbles:!1,cancelable:!0}),N.dispatchEvent(j)})).catch((function(e){console.error("[useredit] failed to fetch channels",e)}))}),[]),J=(0,l.useCallback)((function(e){var t,n,a,c,l,o,r,s,u,h,v,m,b,y,p,A,k,x,g,S,P,N,C,j,L=H.current;if(L){window.ApiClient.getJSON(window.ApiClient.getUrl("Auth/Providers")).then((function(t){B(L,e,t)})).catch((function(e){console.error("[useredit] failed to fetch auth providers",e)})),window.ApiClient.getJSON(window.ApiClient.getUrl("Auth/PasswordResetProviders")).then((function(t){_(L,e,t)})).catch((function(e){console.error("[useredit] failed to fetch password reset providers",e)})),window.ApiClient.getJSON(window.ApiClient.getUrl("Library/MediaFolders",{IsHidden:!1})).then((function(t){V(L,e,t.Items)})).catch((function(e){console.error("[useredit] failed to fetch media folders",e)})),L.querySelector(".disabledUserBanner").classList.toggle("hide",!(null===(t=e.Policy)||void 0===t?void 0:t.IsDisabled));var w=L.querySelector("#txtUserName");w.disabled=!1,w.removeAttribute("disabled"),L.querySelector(".lnkEditUserPreferences").setAttribute("href","mypreferencesmenu.html?userId="+e.Id),d.default.setTitle(e.Name),i(e.Name||""),L.querySelector("#txtUserName").value=e.Name||"",L.querySelector(".chkIsAdmin").checked=!!(null===(n=e.Policy)||void 0===n?void 0:n.IsAdministrator),L.querySelector(".chkDisabled").checked=!!(null===(a=e.Policy)||void 0===a?void 0:a.IsDisabled),L.querySelector(".chkIsHidden").checked=!!(null===(c=e.Policy)||void 0===c?void 0:c.IsHidden),L.querySelector(".chkEnableCollectionManagement").checked=!!(null===(l=e.Policy)||void 0===l?void 0:l.EnableCollectionManagement),L.querySelector(".chkEnableSubtitleManagement").checked=!!(null===(o=e.Policy)||void 0===o?void 0:o.EnableSubtitleManagement),L.querySelector(".chkRemoteControlSharedDevices").checked=!!(null===(r=e.Policy)||void 0===r?void 0:r.EnableSharedDeviceControl),L.querySelector(".chkEnableRemoteControlOtherUsers").checked=!!(null===(s=e.Policy)||void 0===s?void 0:s.EnableRemoteControlOfOtherUsers),L.querySelector(".chkEnableDownloading").checked=!!(null===(u=e.Policy)||void 0===u?void 0:u.EnableContentDownloading),L.querySelector(".chkManageLiveTv").checked=!!(null===(h=e.Policy)||void 0===h?void 0:h.EnableLiveTvManagement),L.querySelector(".chkEnableLiveTvAccess").checked=!!(null===(v=e.Policy)||void 0===v?void 0:v.EnableLiveTvAccess),L.querySelector(".chkEnableMediaPlayback").checked=!!(null===(m=e.Policy)||void 0===m?void 0:m.EnableMediaPlayback),L.querySelector(".chkEnableAudioPlaybackTranscoding").checked=!!(null===(b=e.Policy)||void 0===b?void 0:b.EnableAudioPlaybackTranscoding),L.querySelector(".chkEnableVideoPlaybackTranscoding").checked=!!(null===(y=e.Policy)||void 0===y?void 0:y.EnableVideoPlaybackTranscoding),L.querySelector(".chkEnableVideoPlaybackRemuxing").checked=!!(null===(p=e.Policy)||void 0===p?void 0:p.EnablePlaybackRemuxing),L.querySelector(".chkForceRemoteSourceTranscoding").checked=!!(null===(A=e.Policy)||void 0===A?void 0:A.ForceRemoteSourceTranscoding),L.querySelector(".chkRemoteAccess").checked=null==(null===(k=e.Policy)||void 0===k?void 0:k.EnableRemoteAccess)||(null===(x=e.Policy)||void 0===x?void 0:x.EnableRemoteAccess),L.querySelector("#txtRemoteClientBitrateLimit").value=(null===(g=e.Policy)||void 0===g?void 0:g.RemoteClientBitrateLimit)&&(null===(S=e.Policy)||void 0===S?void 0:S.RemoteClientBitrateLimit)>0?((null===(P=e.Policy)||void 0===P?void 0:P.RemoteClientBitrateLimit)/1e6).toLocaleString(void 0,{maximumFractionDigits:6}):"",L.querySelector("#txtLoginAttemptsBeforeLockout").value=String(null===(N=e.Policy)||void 0===N?void 0:N.MaxActiveSessions)||"0",L.querySelector("#txtMaxActiveSessions").value=String(null===(C=e.Policy)||void 0===C?void 0:C.SyncPlayAccess)||"0",window.ApiClient.isMinServerVersion("10.6.0")&&(L.querySelector("#selectSyncPlayAccess").value=String(null===(j=e.Policy)||void 0===j?void 0:j.SyncPlayAccess)),f.Ay.hide()}else console.error("[useredit] Unexpected null page reference")}),[B,_,V]),G=(0,l.useCallback)((function(){f.Ay.show(),F().then((function(e){J(e)})).catch((function(e){console.error("[useredit] failed to load data",e)}))}),[J]);(0,l.useEffect)((function(){var e=H.current;if(e){G();e.querySelector(".chkEnableDeleteAllFolders").addEventListener("change",(function(){e.querySelector(".deleteAccess").classList.toggle("hide",this.checked)})),window.ApiClient.getNamedConfiguration("network").then((function(t){e.querySelector(".fldRemoteAccess").classList.toggle("hide",!t.EnableRemoteAccess)})).catch((function(e){console.error("[useredit] failed to load network config",e)})),e.querySelector(".editUserProfileForm").addEventListener("submit",(function(t){return f.Ay.show(),F().then((function(t){!function(t){if(!t.Id||!t.Policy)throw new Error("Unexpected null user id or policy");var n;t.Name=e.querySelector("#txtUserName").value,t.Policy.IsAdministrator=e.querySelector(".chkIsAdmin").checked,t.Policy.IsHidden=e.querySelector(".chkIsHidden").checked,t.Policy.IsDisabled=e.querySelector(".chkDisabled").checked,t.Policy.EnableRemoteControlOfOtherUsers=e.querySelector(".chkEnableRemoteControlOtherUsers").checked,t.Policy.EnableLiveTvManagement=e.querySelector(".chkManageLiveTv").checked,t.Policy.EnableLiveTvAccess=e.querySelector(".chkEnableLiveTvAccess").checked,t.Policy.EnableSharedDeviceControl=e.querySelector(".chkRemoteControlSharedDevices").checked,t.Policy.EnableMediaPlayback=e.querySelector(".chkEnableMediaPlayback").checked,t.Policy.EnableAudioPlaybackTranscoding=e.querySelector(".chkEnableAudioPlaybackTranscoding").checked,t.Policy.EnableVideoPlaybackTranscoding=e.querySelector(".chkEnableVideoPlaybackTranscoding").checked,t.Policy.EnablePlaybackRemuxing=e.querySelector(".chkEnableVideoPlaybackRemuxing").checked,t.Policy.EnableCollectionManagement=e.querySelector(".chkEnableCollectionManagement").checked,t.Policy.EnableSubtitleManagement=e.querySelector(".chkEnableSubtitleManagement").checked,t.Policy.ForceRemoteSourceTranscoding=e.querySelector(".chkForceRemoteSourceTranscoding").checked,t.Policy.EnableContentDownloading=e.querySelector(".chkEnableDownloading").checked,t.Policy.EnableRemoteAccess=e.querySelector(".chkRemoteAccess").checked,t.Policy.RemoteClientBitrateLimit=Math.floor(1e6*parseFloat(e.querySelector("#txtRemoteClientBitrateLimit").value||"0")),t.Policy.LoginAttemptsBeforeLockout=parseInt(e.querySelector("#txtLoginAttemptsBeforeLockout").value||"0",10),t.Policy.MaxActiveSessions=parseInt(e.querySelector("#txtMaxActiveSessions").value||"0",10),t.Policy.AuthenticationProviderId=e.querySelector("#selectLoginProvider").value,t.Policy.PasswordResetProviderId=e.querySelector("#selectPasswordResetProvider").value,t.Policy.EnableContentDeletion=e.querySelector(".chkEnableDeleteAllFolders").checked,t.Policy.EnableContentDeletionFromFolders=t.Policy.EnableContentDeletion?[]:(n=e.querySelectorAll(".chkFolder"),Array.prototype.filter.call(n,(function(e){return e.checked})).map((function(e){return e.getAttribute("data-id")}))),t.Policy.SyncPlayAccess=e.querySelector("#selectSyncPlayAccess").value,window.ApiClient.updateUser(t).then((function(){return window.ApiClient.updateUserPolicy(t.Id||"",t.Policy||{PasswordResetProviderId:"",AuthenticationProviderId:""})})).then((function(){r.default.navigate("/dashboard/users").catch((function(e){console.error("[useredit] failed to navigate to user profile",e)})),f.Ay.hide(),(0,A.A)(s.Ay.translate("SettingsSaved"))})).catch((function(e){console.error("[useredit] failed to update user",e)}))}(t)})).catch((function(e){console.error("[useredit] failed to fetch user",e)})),t.preventDefault(),t.stopPropagation(),!1})),e.querySelector("#btnCancel").addEventListener("click",(function(){window.history.back()}))}else console.error("[useredit] Unexpected null page reference")}),[G]);var K,z=L.map((function(e){var t=e.Id===T||L.length<2?" selected":"";return'<option value="'.concat(e.Id,'"').concat(t,">").concat(c()(e.Name),"</option>")})),W=D.map((function(e){var t=e.Id===O||D.length<2?" selected":"";return'<option value="'.concat(e.Id,'"').concat(t,">").concat(c()(e.Name),"</option>")}));return(0,a.jsx)(x.A,{id:"editUserPage",className:"mainAnimatedPage type-interior",children:(0,a.jsxs)("div",{ref:H,className:"content-primary",children:[(0,a.jsx)("div",{className:"verticalSection",children:(0,a.jsx)(y.A,{title:n,url:"https://jellyfin.org/docs/general/server/users/"})}),(0,a.jsx)(p.A,{activeTab:"useredit"}),(0,a.jsx)("div",{className:"lnkEditUserPreferencesContainer",style:{paddingBottom:"1em"},children:(0,a.jsx)(b,{className:"lnkEditUserPreferences button-link",title:"ButtonEditOtherUserPreferences"})}),(0,a.jsxs)("form",{className:"editUserProfileForm",children:[(0,a.jsx)("div",{className:"disabledUserBanner hide",children:(0,a.jsxs)("div",{className:"btn btnDarkAccent btnStatic",children:[(0,a.jsx)("div",{children:s.Ay.translate("HeaderThisUserIsCurrentlyDisabled")}),(0,a.jsx)("div",{style:{marginTop:5},children:s.Ay.translate("MessageReenableUser")})]})}),(0,a.jsx)("div",{id:"fldUserName",className:"inputContainer",children:(0,a.jsx)(v.A,{type:"text",id:"txtUserName",label:"LabelName",options:"required"})}),(0,a.jsxs)("div",{className:"selectContainer fldSelectLoginProvider hide",children:[(0,a.jsx)(k.A,{id:"selectLoginProvider",label:"LabelAuthProvider",children:z}),(0,a.jsx)("div",{className:"fieldDescription",children:s.Ay.translate("AuthProviderHelp")})]}),(0,a.jsxs)("div",{className:"selectContainer fldSelectPasswordResetProvider hide",children:[(0,a.jsx)(k.A,{id:"selectPasswordResetProvider",label:"LabelPasswordResetProvider",children:W}),(0,a.jsx)("div",{className:"fieldDescription",children:s.Ay.translate("PasswordResetProviderHelp")})]}),(0,a.jsxs)("div",{className:"checkboxContainer checkboxContainer-withDescription fldRemoteAccess hide",children:[(0,a.jsx)(h.A,{className:"chkRemoteAccess",title:"AllowRemoteAccess"}),(0,a.jsx)("div",{className:"fieldDescription checkboxFieldDescription",children:s.Ay.translate("AllowRemoteAccessHelp")})]}),(0,a.jsx)(h.A,{labelClassName:"checkboxContainer",className:"chkIsAdmin",title:"OptionAllowUserToManageServer"}),(0,a.jsx)(h.A,{labelClassName:"checkboxContainer",className:"chkEnableCollectionManagement",title:"AllowCollectionManagement"}),(0,a.jsx)(h.A,{labelClassName:"checkboxContainer",className:"chkEnableSubtitleManagement",title:"AllowSubtitleManagement"}),(0,a.jsxs)("div",{id:"featureAccessFields",className:"verticalSection",children:[(0,a.jsx)("h2",{className:"paperListLabel",children:s.Ay.translate("HeaderFeatureAccess")}),(0,a.jsxs)("div",{className:"checkboxList paperList",style:{padding:".5em 1em"},children:[(0,a.jsx)(h.A,{className:"chkEnableLiveTvAccess",title:"OptionAllowBrowsingLiveTv"}),(0,a.jsx)(h.A,{className:"chkManageLiveTv",title:"OptionAllowManageLiveTv"})]})]}),(0,a.jsxs)("div",{className:"verticalSection",children:[(0,a.jsx)("h2",{className:"paperListLabel",children:s.Ay.translate("HeaderPlayback")}),(0,a.jsxs)("div",{className:"checkboxList paperList",style:{padding:".5em 1em"},children:[(0,a.jsx)(h.A,{className:"chkEnableMediaPlayback",title:"OptionAllowMediaPlayback"}),(0,a.jsx)(h.A,{className:"chkEnableAudioPlaybackTranscoding",title:"OptionAllowAudioPlaybackTranscoding"}),(0,a.jsx)(h.A,{className:"chkEnableVideoPlaybackTranscoding",title:"OptionAllowVideoPlaybackTranscoding"}),(0,a.jsx)(h.A,{className:"chkEnableVideoPlaybackRemuxing",title:"OptionAllowVideoPlaybackRemuxing"}),(0,a.jsx)(h.A,{className:"chkForceRemoteSourceTranscoding",title:"OptionForceRemoteSourceTranscoding"})]}),(0,a.jsx)("div",{className:"fieldDescription",children:s.Ay.translate("OptionAllowMediaPlaybackTranscodingHelp")})]}),(0,a.jsx)("br",{}),(0,a.jsx)("div",{className:"verticalSection",children:(0,a.jsxs)("div",{className:"inputContainer",children:[(0,a.jsx)(v.A,{type:"number",id:"txtRemoteClientBitrateLimit",label:"LabelRemoteClientBitrateLimit",options:'inputMode="decimal" pattern="[0-9]*(.[0-9]+)?" min="{0}" step=".25"'}),(0,a.jsx)("div",{className:"fieldDescription",children:s.Ay.translate("LabelRemoteClientBitrateLimitHelp")}),(0,a.jsx)("div",{className:"fieldDescription",children:s.Ay.translate("LabelUserRemoteClientBitrateLimitHelp")})]})}),(0,a.jsx)("div",{className:"verticalSection",children:(0,a.jsxs)("div",{className:"selectContainer fldSelectSyncPlayAccess",children:[(0,a.jsx)(k.A,{id:"selectSyncPlayAccess",label:"LabelSyncPlayAccess",children:(K="",K+="<option value='CreateAndJoinGroups'>".concat(s.Ay.translate("LabelSyncPlayAccessCreateAndJoinGroups"),"</option>"),K+="<option value='JoinGroups'>".concat(s.Ay.translate("LabelSyncPlayAccessJoinGroups"),"</option>"),K+="<option value='None'>".concat(s.Ay.translate("LabelSyncPlayAccessNone"),"</option>"))}),(0,a.jsx)("div",{className:"fieldDescription",children:s.Ay.translate("SyncPlayAccessHelp")})]})}),(0,a.jsxs)("div",{className:"verticalSection",children:[(0,a.jsx)("h2",{className:"checkboxListLabel",style:{marginBottom:"1em"},children:s.Ay.translate("HeaderAllowMediaDeletionFrom")}),(0,a.jsxs)("div",{className:"checkboxList paperList checkboxList-paperList",children:[(0,a.jsx)(h.A,{labelClassName:"checkboxContainer",className:"chkEnableDeleteAllFolders",title:"AllLibraries"}),(0,a.jsx)("div",{className:"deleteAccess",children:N.map((function(e){return(0,a.jsx)(h.A,{className:"chkFolder",itemId:e.Id,itemName:e.Name,itemCheckedAttribute:e.checkedAttribute},e.Id)}))})]})]}),(0,a.jsxs)("div",{className:"verticalSection",children:[(0,a.jsx)("h2",{className:"checkboxListLabel",children:s.Ay.translate("HeaderRemoteControl")}),(0,a.jsxs)("div",{className:"checkboxList paperList",style:{padding:".5em 1em"},children:[(0,a.jsx)(h.A,{className:"chkEnableRemoteControlOtherUsers",title:"OptionAllowRemoteControlOthers"}),(0,a.jsx)(h.A,{className:"chkRemoteControlSharedDevices",title:"OptionAllowRemoteSharedDevices"})]}),(0,a.jsx)("div",{className:"fieldDescription",children:s.Ay.translate("OptionAllowRemoteSharedDevicesHelp")})]}),(0,a.jsx)("h2",{className:"checkboxListLabel",children:s.Ay.translate("Other")}),(0,a.jsxs)("div",{className:"checkboxContainer checkboxContainer-withDescription",children:[(0,a.jsx)(h.A,{className:"chkEnableDownloading",title:"OptionAllowContentDownload"}),(0,a.jsx)("div",{className:"fieldDescription checkboxFieldDescription",children:s.Ay.translate("OptionAllowContentDownloadHelp")})]}),(0,a.jsxs)("div",{className:"checkboxContainer checkboxContainer-withDescription",id:"fldIsEnabled",children:[(0,a.jsx)(h.A,{className:"chkDisabled",title:"OptionDisableUser"}),(0,a.jsx)("div",{className:"fieldDescription checkboxFieldDescription",children:s.Ay.translate("OptionDisableUserHelp")})]}),(0,a.jsxs)("div",{className:"checkboxContainer checkboxContainer-withDescription",id:"fldIsHidden",children:[(0,a.jsx)(h.A,{className:"chkIsHidden",title:"OptionHideUser"}),(0,a.jsx)("div",{className:"fieldDescription checkboxFieldDescription",children:s.Ay.translate("OptionHideUserFromLoginHelp")})]}),(0,a.jsx)("br",{}),(0,a.jsx)("div",{className:"verticalSection",children:(0,a.jsxs)("div",{className:"inputContainer",id:"fldLoginAttemptsBeforeLockout",children:[(0,a.jsx)(v.A,{type:"number",id:"txtLoginAttemptsBeforeLockout",label:"LabelUserLoginAttemptsBeforeLockout",options:"min={-1} step={1}"}),(0,a.jsx)("div",{className:"fieldDescription",children:s.Ay.translate("OptionLoginAttemptsBeforeLockout")}),(0,a.jsx)("div",{className:"fieldDescription",children:s.Ay.translate("OptionLoginAttemptsBeforeLockoutHelp")})]})}),(0,a.jsx)("br",{}),(0,a.jsx)("div",{className:"verticalSection",children:(0,a.jsxs)("div",{className:"inputContainer",id:"fldMaxActiveSessions",children:[(0,a.jsx)(v.A,{type:"number",id:"txtMaxActiveSessions",label:"LabelUserMaxActiveSessions",options:"min={0} step={1}"}),(0,a.jsx)("div",{className:"fieldDescription",children:s.Ay.translate("OptionMaxActiveSessions")}),(0,a.jsx)("div",{className:"fieldDescription",children:s.Ay.translate("OptionMaxActiveSessionsHelp")})]})}),(0,a.jsx)("br",{}),(0,a.jsxs)("div",{children:[(0,a.jsx)(u.A,{type:"submit",className:"raised button-submit block",title:"Save"}),(0,a.jsx)(u.A,{type:"button",id:"btnCancel",className:"raised button-cancel block",title:"ButtonCancel"})]})]})]})})}},87159:function(e,t,n){var a=n(62540),i=(n(63696),n(9482)),c=function(e){return{__html:'<a href="#"\n        is="emby-linkbutton"\n        data-role="button"\n        class="'.concat("useredit"===e?"ui-btn-active":"",'"\n        onclick="Dashboard.navigate(\'/dashboard/users/profile\', true);">\n        ').concat(i.Ay.translate("Profile"),'\n    </a>\n    <a href="#"\n        is="emby-linkbutton"\n        data-role="button"\n        class="').concat("userlibraryaccess"===e?"ui-btn-active":"",'"\n        onclick="Dashboard.navigate(\'/dashboard/users/access\', true);">\n        ').concat(i.Ay.translate("TabAccess"),'\n    </a>\n    <a href="#"\n        is="emby-linkbutton"\n        data-role="button"\n        class="').concat("userparentalcontrol"===e?"ui-btn-active":"",'"\n        onclick="Dashboard.navigate(\'/dashboard/users/parentalcontrol\', true);">\n        ').concat(i.Ay.translate("TabParentalControl"),'\n    </a>\n    <a href="#"\n        is="emby-linkbutton"\n        data-role="button"\n        class="').concat("userpassword"===e?"ui-btn-active":"",'"\n        onclick="Dashboard.navigate(\'/dashboard/users/password\', true);">\n        ').concat(i.Ay.translate("HeaderPassword"),"\n    </a>")}};t.A=function(e){var t=e.activeTab;return(0,a.jsx)("div",{"data-role":"controlgroup","data-type":"horizontal",className:"localnav",dangerouslySetInnerHTML:c(t)})}},76165:function(e,t,n){var a=n(62540),i=(n(63696),n(9482)),c=function(e){var t=e.type,n=e.id,a=e.className,i=e.title,c=e.leftIcon,l=e.rightIcon;return{__html:'<button\n        is="emby-button"\n        type="'.concat(t,'"\n        ').concat(n,'\n        class="').concat(a,'"\n        >\n        ').concat(c,"\n        <span>").concat(i,"</span>\n        ").concat(l,"\n    </button>")}};t.A=function(e){var t=e.type,n=e.id,l=e.className,o=e.title,r=e.leftIcon,s=e.rightIcon;return(0,a.jsx)("div",{dangerouslySetInnerHTML:c({type:t,id:n?'id="'.concat(n,'"'):"",className:l,title:i.Ay.translate(o),leftIcon:r?'<span class="material-icons '.concat(r,'" aria-hidden="true"></span>'):"",rightIcon:s?'<span class="material-icons '.concat(s,'" aria-hidden="true"></span>'):""})})}},14948:function(e,t,n){var a=n(62540),i=n(22696),c=n.n(i),l=(n(63696),n(9482)),o=function(e){var t=e.labelClassName,n=e.className,a=e.id,i=e.dataFilter,c=e.dataItemType,l=e.dataId,o=e.checkedAttribute,r=e.renderContent;return{__html:"<label ".concat(t,'>\n        <input\n            is="emby-checkbox"\n            type="checkbox"\n            class="').concat(n,'"\n            ').concat(a,"\n            ").concat(i,"\n            ").concat(c,"\n            ").concat(l,"\n            ").concat(o,"\n        />\n        ").concat(r,"\n    </label>")}};t.A=function(e){var t=e.labelClassName,n=e.className,i=e.elementId,r=e.dataFilter,s=e.itemType,d=e.itemId,u=e.itemAppName,h=e.itemCheckedAttribute,v=e.itemName,m=e.title,b=u?"- ".concat(u):"",y=v?"<span>".concat(c()(v||"")," ").concat(b,"</span>"):"<span>".concat(l.Ay.translate(m),"</span>");return(0,a.jsx)("div",{className:"sectioncheckbox",dangerouslySetInnerHTML:o({labelClassName:t?"class='".concat(t,"'"):"",className:n,id:i?"id='".concat(i,"'"):"",dataFilter:r?"data-filter='".concat(r,"'"):"",dataItemType:s?"data-itemtype='".concat(s,"'"):"",dataId:d?"data-id='".concat(d,"'"):"",checkedAttribute:h||"",renderContent:y})})}},96268:function(e,t,n){var a=n(62540),i=(n(63696),n(9482)),c=function(e){var t=e.is,n=e.id,a=e.className,i=e.title,c=e.icon,l=e.dataIndex,o=e.dataTag,r=e.dataProfileid;return{__html:'<button\n        is="'.concat(t,'"\n        type="button"\n        ').concat(n,'\n        class="').concat(a,'"\n        ').concat(i,"\n        ").concat(l,"\n        ").concat(o,"\n        ").concat(r,'\n    >\n        <span class="material-icons ').concat(c,'" aria-hidden="true"></span>\n    </button>')}};t.A=function(e){var t=e.is,n=e.id,l=e.className,o=e.title,r=e.icon,s=e.dataIndex,d=e.dataTag,u=e.dataProfileid;return(0,a.jsx)("div",{dangerouslySetInnerHTML:c({is:t,id:n?'id="'.concat(n,'"'):"",className:l,title:o?'title="'.concat(i.Ay.translate(o),'"'):"",icon:r,dataIndex:s?'data-index="'.concat(s,'"'):"",dataTag:d?'data-tag="'.concat(d,'"'):"",dataProfileid:u?'data-profileid="'.concat(u,'"'):""})})}},39057:function(e,t,n){var a=n(62540),i=n(63696),c=n(9482);t.A=function(e){var t=e.containerClassName,n=e.initialValue,l=e.onChange,o=void 0===l?function(){}:l,r=e.type,s=e.id,d=e.label,u=e.options,h=void 0===u?"":u,v=(0,i.useRef)(null),m=(0,i.useMemo)((function(){return function(e){var t=e.id,n=e.label,a=e.initialValue,i=e.options;return{__html:'<input\n        is="emby-input"\n        type="'.concat(e.type,'"\n        id="').concat(t,'"\n        label="').concat(n,'"\n        value="').concat(a,'"\n        ').concat(i,"\n    />")}}({type:r,id:s,label:c.Ay.translate(d),initialValue:n,options:h})}),[]),b=(0,i.useCallback)((function(e){o(e.target.value)}),[o]);return(0,i.useEffect)((function(){var e,t=null===(e=null==v?void 0:v.current)||void 0===e?void 0:e.querySelector("input");return null==t||t.addEventListener("input",b),function(){null==t||t.removeEventListener("input",b)}}),[v,b]),(0,a.jsx)("div",{ref:v,className:t,dangerouslySetInnerHTML:m})}},85757:function(e,t,n){n.d(t,{A:function(){return r}});var a=n(62540),i=(n(63696),n(96268)),c=n(9482),l=function(e){var t=e.className,n=e.title,a=e.href;return{__html:'<a\n        is="emby-linkbutton"\n        rel="noopener noreferrer"\n        class="'.concat(t,'"\n        target="_blank"\n        href="').concat(a,'"\n        >\n        ').concat(n,"\n    </a>")}},o=function(e){var t=e.className,n=e.title,i=e.url;return(0,a.jsx)("div",{dangerouslySetInnerHTML:l({className:t,title:c.Ay.translate(n),href:i})})},r=function(e){var t=e.SectionClassName,n=e.title,c=e.isBtnVisible,l=void 0!==c&&c,r=e.btnId,s=e.btnClassName,d=e.btnTitle,u=e.btnIcon,h=e.isLinkVisible,v=void 0===h||h,m=e.url;return(0,a.jsxs)("div",{className:"".concat(t," sectionTitleContainer flex align-items-center"),children:[(0,a.jsx)("h2",{className:"sectionTitle",children:n}),l&&(0,a.jsx)(i.A,{is:"emby-button",id:r,className:s,title:d,icon:u}),v&&(0,a.jsx)(o,{className:"raised button-alt headerHelpButton",title:"Help",url:m})]})}},70749:function(e,t,n){var a=n(62540),i=(n(63696),n(9482)),c=function(e){var t=e.name,n=e.id,a=e.required,i=e.label,c=e.option;return{__html:'<select\n        is="emby-select"\n        '.concat(t,'\n        id="').concat(n,'"\n        ').concat(a,'\n        label="').concat(i,'"\n    >\n        ').concat(c,"\n    </select>")}};t.A=function(e){var t=e.name,n=e.id,l=e.required,o=e.label,r=e.children;return(0,a.jsx)("div",{dangerouslySetInnerHTML:c({name:t?"name='".concat(t,"'"):"",id:n,required:l?"required='".concat(l,"'"):"",label:i.Ay.translate(o),option:r})})}},40782:function(e,t,n){var a=n(11444),i="assets/img/devices/";t.Ay={getDeviceIcon:function(e){var t;switch(e.AppName||e.Client){case"Samsung Smart TV":return i+"samsung.svg";case"Xbox One":return i+"xbox.svg";case"Sony PS4":return i+"playstation.svg";case"Kodi":case"Kodi JellyCon":return i+"kodi.svg";case"Jellyfin Android":case"AndroidTV":case"Android TV":return i+"android.svg";case"Jellyfin Mobile (iOS)":case"Jellyfin Mobile (iPadOS)":case"Jellyfin iOS":case"Infuse":return i+"apple.svg";case"Home Assistant":return i+"home-assistant.svg";case"Jellyfin Roku":return i+"roku.svg";case"Finamp":return i+"finamp.svg";case"Jellyfin Web":return function(e){switch(e){case"Opera":case"Opera TV":case"Opera Android":return i+"opera.svg";case"Chrome":case"Chrome Android":return i+"chrome.svg";case"Firefox":case"Firefox Android":return i+"firefox.svg";case"Safari":case"Safari iPad":case"Safari iPhone":return i+"safari.svg";case"Edge Chromium":case"Edge Chromium Android":case"Edge Chromium iPad":case"Edge Chromium iPhone":return i+"edgechromium.svg";case"Edge":return i+"edge.svg";case"Internet Explorer":return i+"msie.svg";default:return i+"html5.svg"}}(e.Name||e.DeviceName);default:if(null===(t=e.Capabilities)||void 0===t?void 0:t.IconUrl)try{return new URL(e.Capabilities.IconUrl).toString()}catch(t){console.error("[getDeviceIcon] device capabilities has invalid IconUrl",e,t)}return i+"other.svg"}},getLibraryIcon:function(e){switch(e){case"movies":return"video_library";case"music":return"library_music";case"photos":case"homevideos":return"photo_library";case"livetv":return"live_tv";case"tvshows":return"tv";case"trailers":return"local_movies";case"musicvideos":return"music_video";case"books":return"library_books";case"channels":return"videocam";case"playlists":return"view_list";default:return"folder"}},getItemTypeIcon:function(e){switch(e){case a.D.MusicAlbum:return"album";case a.D.MusicArtist:case a.D.Person:return"person";case a.D.Audio:return"audiotrack";case a.D.Movie:return"movie";case a.D.Episode:case a.D.Series:return"tv";case a.D.Program:return"live_tv";case a.D.Book:return"book";case a.D.Folder:return"folder";case a.D.BoxSet:return"collections";case a.D.Playlist:return"view_list";case a.D.Photo:return"photo";case a.D.PhotoAlbum:return"photo_album";default:return"folder"}}}}}]);