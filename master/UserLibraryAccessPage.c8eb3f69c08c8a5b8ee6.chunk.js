/*! For license information please see UserLibraryAccessPage.c8eb3f69c08c8a5b8ee6.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6637],{71426:function(e,n,t){t(62525);var a=t(27378),c=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var r=Symbol.for;c=r("react.element"),n.Fragment=r("react.fragment")}var l=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,i={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,t){var a,r={},o=null,d=null;for(a in void 0!==t&&(o=""+t),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(d=n.ref),n)s.call(n,a)&&!i.hasOwnProperty(a)&&(r[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===r[a]&&(r[a]=n[a]);return{$$typeof:c,type:e,key:o,ref:d,props:r,_owner:l.current}}n.jsx=o,n.jsxs=o},24246:function(e,n,t){e.exports=t(71426)},4007:function(e,n,t){var a=t(24246),c=t(44614),r=function(e){var n=e.type,t=e.className,a=e.title;return{__html:'<button\n        is="emby-button"\n        type="'.concat(n,'"\n        class="').concat(t,'"\n        >\n        <span>').concat(a,"</span>\n    </button>")}};n.Z=function(e){var n=e.type,t=e.className,l=e.title;return(0,a.jsx)("div",{dangerouslySetInnerHTML:r({type:n,className:t,title:c.ZP.translate(l)})})}},89663:function(e,n,t){var a=t(24246),c=t(44614),r=function(e){var n=e.labelClassName,t=e.type,a=e.className,c=e.title;return{__html:'<label class="'.concat(n,'">\n        <input\n            is="emby-checkbox"\n            type="').concat(t,'"\n            class="').concat(a,'"\n        />\n        <span>').concat(c,"</span>\n    </label>")}};n.Z=function(e){var n=e.labelClassName,t=e.type,l=e.className,s=e.title;return(0,a.jsx)("div",{className:"sectioncheckbox",dangerouslySetInnerHTML:r({labelClassName:n||"",type:t,className:l,title:c.ZP.translate(s)})})}},56883:function(e,n,t){var a=t(24246),c=function(e){var n=e.className,t=e.Name,a=e.dataAttributes,c=e.AppName,r=e.checkedAttribute;return{__html:'<label>\n        <input\n            type="checkbox"\n            is="emby-checkbox"\n            class="'.concat(n,'"\n            ').concat(a," ").concat(r,"\n        />\n        <span>").concat(t," ").concat(c,"</span>\n    </label>")}};n.Z=function(e){var n=e.className,t=e.Name,r=e.Id,l=e.ItemType,s=e.AppName,i=e.checkedAttribute;return(0,a.jsx)("div",{className:"sectioncheckbox",dangerouslySetInnerHTML:c({className:n,Name:t,dataAttributes:l?"data-itemtype='".concat(l,"'"):"data-id='".concat(r,"'"),AppName:s?"- ".concat(s):"",checkedAttribute:i})})}},44243:function(e,n,t){var a=t(24246),c=t(44614),r=function(e){return{__html:'<a href="#"\n        is="emby-linkbutton"\n        data-role="button"\n        class="'.concat("useredit"===e?"ui-btn-active":"",'"\n        onclick="Dashboard.navigate(\'useredit.html\', true);">\n        ').concat(c.ZP.translate("Profile"),'\n    </a>\n    <a href="#"\n        is="emby-linkbutton"\n        data-role="button"\n        class="').concat("userlibraryaccess"===e?"ui-btn-active":"",'"\n        onclick="Dashboard.navigate(\'userlibraryaccess.html\', true);">\n        ').concat(c.ZP.translate("TabAccess"),'\n    </a>\n    <a href="#"\n        is="emby-linkbutton"\n        data-role="button"\n        class="').concat("userparentalcontrol"===e?"ui-btn-active":"",'"\n        onclick="Dashboard.navigate(\'userparentalcontrol.html\', true);">\n        ').concat(c.ZP.translate("TabParentalControl"),'\n    </a>\n    <a href="#"\n        is="emby-linkbutton"\n        data-role="button"\n        class="').concat("userpassword"===e?"ui-btn-active":"",'"\n        onclick="Dashboard.navigate(\'userpassword.html\', true);">\n        ').concat(c.ZP.translate("HeaderPassword"),"\n    </a>")}};n.Z=function(e){var n=e.activeTab;return(0,a.jsx)("div",{"data-role":"controlgroup","data-type":"horizontal",className:"localnav",dangerouslySetInnerHTML:r(n)})}},45754:function(e,n,t){var a=t(24246),c=t(44614),r=function(e){var n=e.className,t=e.title,a=e.href;return{__html:'<a\n        is="emby-linkbutton"\n        rel="noopener noreferrer"\n        class="'.concat(n,'"\n        target="_blank"\n        href="').concat(a,'"\n        >\n        ').concat(t,"\n    </a>")}};n.Z=function(e){var n=e.className,t=e.title,l=e.url;return(0,a.jsx)("div",{dangerouslySetInnerHTML:r({className:n,title:c.ZP.translate(t),href:l})})}},9368:function(e,n,t){t.r(n);var a=t(24246),c=t(27378),r=t(56705),l=t(3319),s=t(44614),i=t(25152),o=t(86628),d=t(45754),u=t(44243),h=t(89663),b=t(56883),m=t(4007),f=function(){return f=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var c in n=arguments[t])Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c]);return e},f.apply(this,arguments)},p=function(e,n){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var a,c,r=t.call(e),l=[];try{for(;(void 0===n||n-- >0)&&!(a=r.next()).done;)l.push(a.value)}catch(e){c={error:e}}finally{try{a&&!a.done&&(t=r.return)&&t.call(r)}finally{if(c)throw c.error}}return l},y=function(e){var n="function"==typeof Symbol&&Symbol.iterator,t=n&&e[n],a=0;if(t)return t.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&a>=e.length&&(e=void 0),{value:e&&e[a++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")};n.default=function(){var e=p((0,c.useState)(""),2),n=e[0],t=e[1],v=p((0,c.useState)([]),2),A=v[0],k=v[1],x=p((0,c.useState)([]),2),N=x[0],C=x[1],P=p((0,c.useState)([]),2),j=P[0],E=P[1],g=(0,c.useRef)(null),L=function(e){var n=document.createEvent("HTMLEvents");n.initEvent("change",!1,!0),e.dispatchEvent(n)},S=(0,c.useCallback)((function(e,n){var t,a,c=g.current;if(c){var r=[];try{for(var l=y(n),s=l.next();!s.done;s=l.next()){var i=s.value,o=e.Policy.EnableAllFolders||-1!=e.Policy.EnabledFolders.indexOf(i.Id)?' checked="checked"':"";r.push({Id:i.Id,Name:i.Name,checkedAttribute:o})}}catch(e){t={error:e}}finally{try{s&&!s.done&&(a=l.return)&&a.call(l)}finally{if(t)throw t.error}}C(r);var d=c.querySelector(".chkEnableAllFolders");d.checked=e.Policy.EnableAllFolders,L(d)}else console.error("Unexpected null reference")}),[]),w=(0,c.useCallback)((function(e,n){var t,a,c=g.current;if(c){var r=[];try{for(var l=y(n),s=l.next();!s.done;s=l.next()){var i=s.value,o=e.Policy.EnableAllChannels||-1!=e.Policy.EnabledChannels.indexOf(i.Id)?' checked="checked"':"";r.push({Id:i.Id,Name:i.Name,checkedAttribute:o})}}catch(e){t={error:e}}finally{try{s&&!s.done&&(a=l.return)&&a.call(l)}finally{if(t)throw t.error}}k(r),n.length?c.querySelector(".channelAccessContainer").classList.remove("hide"):c.querySelector(".channelAccessContainer").classList.add("hide");var d=c.querySelector(".chkEnableAllChannels");d.checked=e.Policy.EnableAllChannels,L(d)}else console.error("Unexpected null reference")}),[]),I=(0,c.useCallback)((function(e,n){var t,a,c=g.current;if(c){var r=[];try{for(var l=y(n),s=l.next();!s.done;s=l.next()){var i=s.value,o=e.Policy.EnableAllDevices||-1!=e.Policy.EnabledDevices.indexOf(i.Id)?' checked="checked"':"";r.push({Id:i.Id,Name:i.Name,AppName:i.AppName,checkedAttribute:o})}}catch(e){t={error:e}}finally{try{s&&!s.done&&(a=l.return)&&a.call(l)}finally{if(t)throw t.error}}E(r);var d=c.querySelector(".chkEnableAllDevices");d.checked=e.Policy.EnableAllDevices,L(d),e.Policy.IsAdministrator?c.querySelector(".deviceAccessContainer").classList.add("hide"):c.querySelector(".deviceAccessContainer").classList.remove("hide")}else console.error("Unexpected null reference")}),[]),Z=(0,c.useCallback)((function(e,n,a,c){t(e.Name),l.Z.setTitle(e.Name),w(e,a),S(e,n),I(e,c),r.ZP.hide()}),[w,I,S]),D=(0,c.useCallback)((function(){r.ZP.show();var e=o.appRouter.param("userId"),n=e?window.ApiClient.getUser(e):Promise.resolve({Configuration:{}}),t=window.ApiClient.getJSON(window.ApiClient.getUrl("Library/MediaFolders",{IsHidden:!1})),a=window.ApiClient.getJSON(window.ApiClient.getUrl("Channels")),c=window.ApiClient.getJSON(window.ApiClient.getUrl("Devices"));Promise.all([n,t,a,c]).then((function(e){Z(e[0],e[1].Items,e[2].Items,e[3].Items)}))}),[Z]);return(0,c.useEffect)((function(){var e=g.current;if(e){D();var n=function(){r.ZP.hide(),(0,i.Z)(s.ZP.translate("SettingsSaved"))};e.querySelector(".chkEnableAllDevices").addEventListener("change",(function(){e.querySelector(".deviceAccessListContainer").classList.toggle("hide",this.checked)})),e.querySelector(".chkEnableAllChannels").addEventListener("change",(function(){e.querySelector(".channelAccessListContainer").classList.toggle("hide",this.checked)})),e.querySelector(".chkEnableAllFolders").addEventListener("change",(function(){e.querySelector(".folderAccessListContainer").classList.toggle("hide",this.checked)})),e.querySelector(".userLibraryAccessForm").addEventListener("submit",(function(t){r.ZP.show();var a=o.appRouter.param("userId");return window.ApiClient.getUser(a).then((function(t){!function(t){if(!t.Id)throw new Error("Unexpected null user.Id");if(!t.Policy)throw new Error("Unexpected null user.Policy");t.Policy.EnableAllFolders=e.querySelector(".chkEnableAllFolders").checked,t.Policy.EnabledFolders=t.Policy.EnableAllFolders?[]:Array.prototype.filter.call(e.querySelectorAll(".chkFolder"),(function(e){return e.checked})).map((function(e){return e.getAttribute("data-id")})),t.Policy.EnableAllChannels=e.querySelector(".chkEnableAllChannels").checked,t.Policy.EnabledChannels=t.Policy.EnableAllChannels?[]:Array.prototype.filter.call(e.querySelectorAll(".chkChannel"),(function(e){return e.checked})).map((function(e){return e.getAttribute("data-id")})),t.Policy.EnableAllDevices=e.querySelector(".chkEnableAllDevices").checked,t.Policy.EnabledDevices=t.Policy.EnableAllDevices?[]:Array.prototype.filter.call(e.querySelectorAll(".chkDevice"),(function(e){return e.checked})).map((function(e){return e.getAttribute("data-id")})),t.Policy.BlockedChannels=null,t.Policy.BlockedMediaFolders=null,window.ApiClient.updateUserPolicy(t.Id,t.Policy).then((function(){n()}))}(t)})),t.preventDefault(),t.stopPropagation(),!1}))}else console.error("Unexpected null reference")}),[D]),(0,a.jsx)("div",f({ref:g},{children:(0,a.jsxs)("div",f({className:"content-primary"},{children:[(0,a.jsx)("div",f({className:"verticalSection"},{children:(0,a.jsxs)("div",f({className:"sectionTitleContainer flex align-items-center"},{children:[(0,a.jsx)("h2",f({className:"sectionTitle username"},{children:n})),(0,a.jsx)(d.Z,{className:"raised button-alt headerHelpButton",title:"Help",url:"https://docs.jellyfin.org/general/server/users/"})]}))})),(0,a.jsx)(u.Z,{activeTab:"userlibraryaccess"}),(0,a.jsxs)("form",f({className:"userLibraryAccessForm"},{children:[(0,a.jsxs)("div",f({className:"folderAccessContainer"},{children:[(0,a.jsx)("h2",{children:s.ZP.translate("HeaderLibraryAccess")}),(0,a.jsx)(h.Z,{labelClassName:"checkboxContainer",type:"checkbox",className:"chkEnableAllFolders",title:"OptionEnableAccessToAllLibraries"}),(0,a.jsxs)("div",f({className:"folderAccessListContainer"},{children:[(0,a.jsxs)("div",f({className:"folderAccess"},{children:[(0,a.jsx)("h3",f({className:"checkboxListLabel"},{children:s.ZP.translate("HeaderLibraries")})),(0,a.jsx)("div",f({className:"checkboxList paperList checkboxList-paperList"},{children:N.map((function(e){return(0,a.jsx)(b.Z,{className:"chkFolder",Id:e.Id,Name:e.Name,checkedAttribute:e.checkedAttribute},e.Id)}))}))]})),(0,a.jsx)("div",f({className:"fieldDescription"},{children:s.ZP.translate("LibraryAccessHelp")}))]}))]})),(0,a.jsxs)("div",f({className:"channelAccessContainer hide"},{children:[(0,a.jsx)("h2",{children:s.ZP.translate("HeaderChannelAccess")}),(0,a.jsx)(h.Z,{labelClassName:"checkboxContainer",type:"checkbox",className:"chkEnableAllChannels",title:"OptionEnableAccessToAllChannels"}),(0,a.jsxs)("div",f({className:"channelAccessListContainer"},{children:[(0,a.jsxs)("div",f({className:"channelAccess"},{children:[(0,a.jsx)("h3",f({className:"checkboxListLabel"},{children:s.ZP.translate("Channels")})),(0,a.jsx)("div",f({className:"checkboxList paperList",style:{padding:".5em 1em"}},{children:A.map((function(e){return(0,a.jsx)(b.Z,{className:"chkChannel",Id:e.Id,Name:e.Name,checkedAttribute:e.checkedAttribute},e.Id)}))}))]})),(0,a.jsx)("div",f({className:"fieldDescription"},{children:s.ZP.translate("ChannelAccessHelp")}))]}))]})),(0,a.jsx)("br",{}),(0,a.jsxs)("div",f({className:"deviceAccessContainer hide"},{children:[(0,a.jsx)("h2",{children:s.ZP.translate("HeaderDeviceAccess")}),(0,a.jsx)(h.Z,{labelClassName:"checkboxContainer",type:"checkbox",className:"chkEnableAllDevices",title:"OptionEnableAccessFromAllDevices"}),(0,a.jsxs)("div",f({className:"deviceAccessListContainer"},{children:[(0,a.jsxs)("div",f({className:"deviceAccess"},{children:[(0,a.jsx)("h3",f({className:"checkboxListLabel"},{children:s.ZP.translate("HeaderDevices")})),(0,a.jsx)("div",f({className:"checkboxList paperList",style:{padding:".5em 1em"}},{children:j.map((function(e){return(0,a.jsx)(b.Z,{className:"chkDevice",Id:e.Id,Name:e.Name,AppName:e.AppName,checkedAttribute:e.checkedAttribute},e.Id)}))}))]})),(0,a.jsx)("div",f({className:"fieldDescription"},{children:s.ZP.translate("DeviceAccessHelp")}))]})),(0,a.jsx)("br",{})]})),(0,a.jsx)("br",{}),(0,a.jsx)("div",{children:(0,a.jsx)(m.Z,{type:"submit",className:"raised button-submit block",title:"Save"})})]}))]}))}))}}}]);