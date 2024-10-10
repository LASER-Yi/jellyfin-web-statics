"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[97636],{61726:function(e,t,n){n.r(t);var a=n(62540),r=n(63696),c=n(9055),l=n(8566),i=n(5898),s=n(50764),o=n(58702),d=n(86068),u=n(30658),h=n(76116),f=n(91281),b=n(65242),y=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var a,r,c=n.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(a=c.next()).done;)l.push(a.value)}catch(e){r={error:e}}finally{try{a&&!a.done&&(n=c.return)&&n.call(c)}finally{if(r)throw r.error}}return l},v=function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],a=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&a>=e.length&&(e=void 0),{value:e&&e[a++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")};t.default=function(){var e=y((0,c.ok)(),1)[0].get("userId"),t=y((0,r.useState)(""),2),m=t[0],p=t[1],A=y((0,r.useState)([]),2),C=A[0],k=A[1],N=y((0,r.useState)([]),2),x=N[0],g=N[1],w=y((0,r.useState)([]),2),I=w[0],E=w[1],j=(0,r.useMemo)((function(){return e=void 0,t=void 0,r=function(){return function(e,t){var n,a,r,c={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]},l=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return l.next=i(0),l.throw=i(1),l.return=i(2),"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function i(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;l&&(l=0,i[0]&&(c=0)),c;)try{if(n=1,a&&(r=2&i[0]?a.return:i[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,i[1])).done)return r;switch(a=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,a=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!((r=(r=c.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){c.label=i[1];break}if(6===i[0]&&c.label<r[1]){c.label=r[1],r=i;break}if(r&&c.label<r[2]){c.label=r[2],c.ops.push(i);break}r[2]&&c.ops.pop(),c.trys.pop();continue}i=t.call(e,c)}catch(e){i=[6,e],a=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}(this,(function(e){switch(e.label){case 0:return[4,Promise.all([n.e(45642),n.e(45568),n.e(73233),n.e(47027)]).then(n.bind(n,73233))];case 1:return[2,e.sent().default]}}))},new((a=void 0)||(a=Promise))((function(n,c){function l(e){try{s(r.next(e))}catch(e){c(e)}}function i(e){try{s(r.throw(e))}catch(e){c(e)}}function s(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(l,i)}s((r=r.apply(e,t||[])).next())}));var e,t,a,r}),[]),S=(0,r.useRef)(null),P=function(e){var t=new Event("change",{bubbles:!1,cancelable:!0});e.dispatchEvent(t)},L=(0,r.useCallback)((function(e,t){var n,a,r,c,l,i,s=S.current;if(s){var o=[];try{for(var d=v(t),u=d.next();!u.done;u=d.next()){var h=u.value,f=(null===(r=e.Policy)||void 0===r?void 0:r.EnableAllFolders)||-1!=(null===(l=null===(c=e.Policy)||void 0===c?void 0:c.EnabledFolders)||void 0===l?void 0:l.indexOf(h.Id||""))?' checked="checked"':"";o.push({Id:h.Id,Name:h.Name,checkedAttribute:f})}}catch(e){n={error:e}}finally{try{u&&!u.done&&(a=d.return)&&a.call(d)}finally{if(n)throw n.error}}g(o);var b=s.querySelector(".chkEnableAllFolders");b.checked=Boolean(null===(i=e.Policy)||void 0===i?void 0:i.EnableAllFolders),P(b)}else console.error("[userlibraryaccess] Unexpected null page reference")}),[]),T=(0,r.useCallback)((function(e,t){var n,a,r,c,l,i,s=S.current;if(s){var o=[];try{for(var d=v(t),u=d.next();!u.done;u=d.next()){var h=u.value,f=(null===(r=e.Policy)||void 0===r?void 0:r.EnableAllChannels)||-1!=(null===(l=null===(c=e.Policy)||void 0===c?void 0:c.EnabledChannels)||void 0===l?void 0:l.indexOf(h.Id||""))?' checked="checked"':"";o.push({Id:h.Id,Name:h.Name,checkedAttribute:f})}}catch(e){n={error:e}}finally{try{u&&!u.done&&(a=d.return)&&a.call(d)}finally{if(n)throw n.error}}k(o),t.length?s.querySelector(".channelAccessContainer").classList.remove("hide"):s.querySelector(".channelAccessContainer").classList.add("hide");var b=s.querySelector(".chkEnableAllChannels");b.checked=Boolean(null===(i=e.Policy)||void 0===i?void 0:i.EnableAllChannels),P(b)}else console.error("[userlibraryaccess] Unexpected null page reference")}),[]),O=(0,r.useCallback)((function(e,t){var n,a,r,c,l,i,s,o=S.current;if(o){var d=[];try{for(var u=v(t),h=u.next();!h.done;h=u.next()){var f=h.value,b=(null===(r=e.Policy)||void 0===r?void 0:r.EnableAllDevices)||-1!=(null===(l=null===(c=e.Policy)||void 0===c?void 0:c.EnabledDevices)||void 0===l?void 0:l.indexOf(f.Id||""))?' checked="checked"':"";d.push({Id:f.Id,Name:f.Name,AppName:f.AppName,CustomName:f.CustomName,checkedAttribute:b})}}catch(e){n={error:e}}finally{try{h&&!h.done&&(a=u.return)&&a.call(u)}finally{if(n)throw n.error}}E(d);var y=o.querySelector(".chkEnableAllDevices");y.checked=Boolean(null===(i=e.Policy)||void 0===i?void 0:i.EnableAllDevices),P(y),(null===(s=e.Policy)||void 0===s?void 0:s.IsAdministrator)?o.querySelector(".deviceAccessContainer").classList.add("hide"):o.querySelector(".deviceAccessContainer").classList.remove("hide")}else console.error("[userlibraryaccess] Unexpected null page reference")}),[]),D=(0,r.useCallback)((function(e,t,n,a){p(e.Name||""),j.then((function(t){return t.setTitle(e.Name)})),T(e,n),L(e,t),O(e,a),l.Ay.hide()}),[T,O,L]),q=(0,r.useCallback)((function(){l.Ay.show();var t=e?window.ApiClient.getUser(e):Promise.resolve({Configuration:{}}),n=window.ApiClient.getJSON(window.ApiClient.getUrl("Library/MediaFolders",{IsHidden:!1})),a=window.ApiClient.getJSON(window.ApiClient.getUrl("Channels")),r=window.ApiClient.getJSON(window.ApiClient.getUrl("Devices"));Promise.all([t,n,a,r]).then((function(e){D(e[0],e[1].Items,e[2].Items,e[3].Items)})).catch((function(e){console.error("[userlibraryaccess] failed to load data",e)}))}),[D,e]);return(0,r.useEffect)((function(){var t=S.current;if(t){q();var n=function(){l.Ay.hide(),(0,s.A)(i.Ay.translate("SettingsSaved"))};t.querySelector(".chkEnableAllDevices").addEventListener("change",(function(){t.querySelector(".deviceAccessListContainer").classList.toggle("hide",this.checked)})),t.querySelector(".chkEnableAllChannels").addEventListener("change",(function(){t.querySelector(".channelAccessListContainer").classList.toggle("hide",this.checked)})),t.querySelector(".chkEnableAllFolders").addEventListener("change",(function(){t.querySelector(".folderAccessListContainer").classList.toggle("hide",this.checked)})),t.querySelector(".userLibraryAccessForm").addEventListener("submit",(function(a){if(e)return l.Ay.show(),window.ApiClient.getUser(e).then((function(e){!function(e){if(!e.Id)throw new Error("Unexpected null user.Id");if(!e.Policy)throw new Error("Unexpected null user.Policy");e.Policy.EnableAllFolders=t.querySelector(".chkEnableAllFolders").checked,e.Policy.EnabledFolders=e.Policy.EnableAllFolders?[]:Array.prototype.filter.call(t.querySelectorAll(".chkFolder"),(function(e){return e.checked})).map((function(e){return e.getAttribute("data-id")})),e.Policy.EnableAllChannels=t.querySelector(".chkEnableAllChannels").checked,e.Policy.EnabledChannels=e.Policy.EnableAllChannels?[]:Array.prototype.filter.call(t.querySelectorAll(".chkChannel"),(function(e){return e.checked})).map((function(e){return e.getAttribute("data-id")})),e.Policy.EnableAllDevices=t.querySelector(".chkEnableAllDevices").checked,e.Policy.EnabledDevices=e.Policy.EnableAllDevices?[]:Array.prototype.filter.call(t.querySelectorAll(".chkDevice"),(function(e){return e.checked})).map((function(e){return e.getAttribute("data-id")})),e.Policy.BlockedChannels=null,e.Policy.BlockedMediaFolders=null,window.ApiClient.updateUserPolicy(e.Id,e.Policy).then((function(){n()})).catch((function(e){console.error("[userlibraryaccess] failed to update user policy",e)}))}(e)})).catch((function(e){console.error("[userlibraryaccess] failed to fetch user",e)})),a.preventDefault(),a.stopPropagation(),!1;console.error("[userlibraryaccess] missing user id")}))}else console.error("[userlibraryaccess] Unexpected null page reference")}),[q]),(0,a.jsx)(b.A,{id:"userLibraryAccessPage",className:"mainAnimatedPage type-interior",children:(0,a.jsxs)("div",{ref:S,className:"content-primary",children:[(0,a.jsx)("div",{className:"verticalSection",children:(0,a.jsx)(u.A,{title:m,url:"https://jellyfin.org/docs/general/server/users/"})}),(0,a.jsx)(o.A,{activeTab:"userlibraryaccess"}),(0,a.jsxs)("form",{className:"userLibraryAccessForm",children:[(0,a.jsx)(h.A,{containerClassName:"folderAccessContainer",headerTitle:"HeaderLibraryAccess",checkBoxClassName:"chkEnableAllFolders",checkBoxTitle:"OptionEnableAccessToAllLibraries",listContainerClassName:"folderAccessListContainer",accessClassName:"folderAccess",listTitle:"HeaderLibraries",description:"LibraryAccessHelp",children:x.map((function(e){return(0,a.jsx)(f.A,{className:"chkFolder",itemId:e.Id,itemName:e.Name,itemCheckedAttribute:e.checkedAttribute},e.Id)}))}),(0,a.jsx)(h.A,{containerClassName:"channelAccessContainer hide",headerTitle:"HeaderChannelAccess",checkBoxClassName:"chkEnableAllChannels",checkBoxTitle:"OptionEnableAccessToAllChannels",listContainerClassName:"channelAccessListContainer",accessClassName:"channelAccess",listTitle:"Channels",description:"ChannelAccessHelp",children:C.map((function(e){return(0,a.jsx)(f.A,{className:"chkChannel",itemId:e.Id,itemName:e.Name,itemCheckedAttribute:e.checkedAttribute},e.Id)}))}),(0,a.jsx)(h.A,{containerClassName:"deviceAccessContainer hide",headerTitle:"HeaderDeviceAccess",checkBoxClassName:"chkEnableAllDevices",checkBoxTitle:"OptionEnableAccessFromAllDevices",listContainerClassName:"deviceAccessListContainer",accessClassName:"deviceAccess",listTitle:"HeaderDevices",description:"DeviceAccessHelp",children:I.map((function(e){return(0,a.jsx)(f.A,{className:"chkDevice",itemId:e.Id,itemName:e.CustomName||e.Name,itemAppName:e.AppName,itemCheckedAttribute:e.checkedAttribute},e.Id)}))}),(0,a.jsx)("br",{}),(0,a.jsx)("div",{children:(0,a.jsx)(d.A,{type:"submit",className:"raised button-submit block",title:"Save"})})]})]})})}},76116:function(e,t,n){var a=n(62540),r=(n(63696),n(5898)),c=n(91281);t.A=function(e){var t=e.containerClassName,n=e.headerTitle,l=e.checkBoxClassName,i=e.checkBoxTitle,s=e.listContainerClassName,o=e.accessClassName,d=e.listTitle,u=e.description,h=e.children;return(0,a.jsxs)("div",{className:t,children:[(0,a.jsx)("h2",{children:r.Ay.translate(n)}),(0,a.jsx)(c.A,{labelClassName:"checkboxContainer",className:l,title:i}),(0,a.jsxs)("div",{className:s,children:[(0,a.jsxs)("div",{className:o,children:[(0,a.jsx)("h3",{className:"checkboxListLabel",children:r.Ay.translate(d)}),(0,a.jsx)("div",{className:"checkboxList paperList",style:{padding:".5em 1em"},children:h})]}),(0,a.jsx)("div",{className:"fieldDescription",children:r.Ay.translate(u)})]})]})}},58702:function(e,t,n){var a=n(62540),r=n(63696),c=n(5898),l=n(89100),i=n(84851);function s(e){return r.useCallback((function(){(0,l.navigate)(e,!0).catch((function(e){console.warn("Error navigating to dashboard url",e)}))}),[e])}t.A=function(e){var t=e.activeTab,n=s("/dashboard/users/profile"),r=s("/dashboard/users/access"),l=s("/dashboard/users/parentalcontrol"),o=s("/dashboard/users/password");return(0,a.jsxs)("div",{"data-role":"controlgroup","data-type":"horizontal",className:"localnav",children:[(0,a.jsx)(i.A,{href:"#","data-role":"button",className:"useredit"===t?"ui-btn-active":"",onClick:n,children:c.Ay.translate("Profile")}),(0,a.jsx)(i.A,{href:"#","data-role":"button",className:"userlibraryaccess"===t?"ui-btn-active":"",onClick:r,children:c.Ay.translate("TabAccess")}),(0,a.jsx)(i.A,{href:"#","data-role":"button",className:"userparentalcontrol"===t?"ui-btn-active":"",onClick:l,children:c.Ay.translate("TabParentalControl")}),(0,a.jsx)(i.A,{href:"#","data-role":"button",className:"userpassword"===t?"ui-btn-active":"",onClick:o,children:c.Ay.translate("HeaderPassword")})]})}},86068:function(e,t,n){var a=n(62540),r=(n(63696),n(5898)),c=function(e){var t=e.type,n=e.id,a=e.className,r=e.title,c=e.leftIcon,l=e.rightIcon;return{__html:'<button\n        is="emby-button"\n        type="'.concat(t,'"\n        ').concat(n,'\n        class="').concat(a,'"\n        >\n        ').concat(c,"\n        <span>").concat(r,"</span>\n        ").concat(l,"\n    </button>")}};t.A=function(e){var t=e.type,n=e.id,l=e.className,i=e.title,s=e.leftIcon,o=e.rightIcon;return(0,a.jsx)("div",{dangerouslySetInnerHTML:c({type:t,id:n?'id="'.concat(n,'"'):"",className:l,title:r.Ay.translate(i),leftIcon:s?'<span class="material-icons '.concat(s,'" aria-hidden="true"></span>'):"",rightIcon:o?'<span class="material-icons '.concat(o,'" aria-hidden="true"></span>'):""})})}},91281:function(e,t,n){var a=n(62540),r=n(22696),c=n.n(r),l=(n(63696),n(5898)),i=function(e){var t=e.labelClassName,n=e.className,a=e.id,r=e.dataFilter,c=e.dataItemType,l=e.dataId,i=e.checkedAttribute,s=e.renderContent;return{__html:"<label ".concat(t,'>\n        <input\n            is="emby-checkbox"\n            type="checkbox"\n            class="').concat(n,'"\n            ').concat(a,"\n            ").concat(r,"\n            ").concat(c,"\n            ").concat(l,"\n            ").concat(i,"\n        />\n        ").concat(s,"\n    </label>")}};t.A=function(e){var t=e.labelClassName,n=e.className,r=e.elementId,s=e.dataFilter,o=e.itemType,d=e.itemId,u=e.itemAppName,h=e.itemCheckedAttribute,f=e.itemName,b=e.title,y=u?"- ".concat(u):"",v=f?"<span>".concat(c()(f||"")," ").concat(y,"</span>"):"<span>".concat(l.Ay.translate(b),"</span>");return(0,a.jsx)("div",{className:"sectioncheckbox",dangerouslySetInnerHTML:i({labelClassName:t?"class='".concat(t,"'"):"",className:n,id:r?"id='".concat(r,"'"):"",dataFilter:s?"data-filter='".concat(s,"'"):"",dataItemType:o?"data-itemtype='".concat(o,"'"):"",dataId:d?"data-id='".concat(d,"'"):"",checkedAttribute:h||"",renderContent:v})})}},85817:function(e,t,n){var a=n(62540),r=(n(63696),n(5898)),c=function(e){var t=e.is,n=e.id,a=e.className,r=e.title,c=e.icon,l=e.dataIndex,i=e.dataTag,s=e.dataProfileid;return{__html:'<button\n        is="'.concat(t,'"\n        type="button"\n        ').concat(n,'\n        class="').concat(a,'"\n        ').concat(r,"\n        ").concat(l,"\n        ").concat(i,"\n        ").concat(s,'\n    >\n        <span class="material-icons ').concat(c,'" aria-hidden="true"></span>\n    </button>')}};t.A=function(e){var t=e.is,n=e.id,l=e.className,i=e.title,s=e.icon,o=e.dataIndex,d=e.dataTag,u=e.dataProfileid;return(0,a.jsx)("div",{dangerouslySetInnerHTML:c({is:t,id:n?'id="'.concat(n,'"'):"",className:l,title:i?'title="'.concat(r.Ay.translate(i),'"'):"",icon:s,dataIndex:o||0===o?'data-index="'.concat(o,'"'):"",dataTag:d?'data-tag="'.concat(d,'"'):"",dataProfileid:u?'data-profileid="'.concat(u,'"'):""})})}},30658:function(e,t,n){var a=n(62540),r=(n(63696),n(85817)),c=n(84851),l=n(5898);t.A=function(e){var t=e.SectionClassName,n=e.title,i=e.isBtnVisible,s=void 0!==i&&i,o=e.btnId,d=e.btnClassName,u=e.btnTitle,h=e.btnIcon,f=e.isLinkVisible,b=void 0===f||f,y=e.url;return(0,a.jsxs)("div",{className:"".concat(t," sectionTitleContainer flex align-items-center"),children:[(0,a.jsx)("h2",{className:"sectionTitle",children:n}),s&&(0,a.jsx)(r.A,{is:"emby-button",id:o,className:d,title:u,icon:h}),b&&(0,a.jsx)(c.A,{className:"raised button-alt headerHelpButton",target:"_blank",rel:"noopener noreferrer",href:y,children:l.Ay.translate("Help")})]})}},84851:function(e,t,n){var a=n(62540),r=n(63696),c=n(4452),l=n.n(c),i=n(46782),s=n(13615),o=n(70267),d=n(22622),u=function(){return u=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},u.apply(this,arguments)};t.A=function(e){var t=e.className,n=e.isAutoHideEnabled,c=e.href,h=e.target,f=e.onClick,b=e.children,y=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}(e,["className","isAutoHideEnabled","href","target","onClick","children"]),v=(0,r.useCallback)((function(e){var t=c||"";"#"!==t?h?d.g.supports("targetblank")||(e.preventDefault(),s.A.openUrl(t)):(e.preventDefault(),o.appRouter.show(t).catch((function(e){console.error("[LinkButton] failed to show url",t,e)}))):e.preventDefault(),null==f||f(e)}),[c,h,f]);if(!0===n&&!d.g.supports("externallinks"))return null;var m=l()("emby-button",t,{"show-focus":i.A.tv});return(0,a.jsx)("a",u({className:m,href:c,target:h,onClick:v},y,{children:b}))}}}]);