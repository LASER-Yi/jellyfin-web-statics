/*! For license information please see NewUserPage.8c8bff453fd00bc56d59.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9629],{71426:function(e,n,t){t(62525);var a=t(27378),r=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var l=Symbol.for;r=l("react.element"),n.Fragment=l("react.fragment")}var c=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,i={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,t){var a,l={},o=null,d=null;for(a in void 0!==t&&(o=""+t),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(d=n.ref),n)s.call(n,a)&&!i.hasOwnProperty(a)&&(l[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===l[a]&&(l[a]=n[a]);return{$$typeof:r,type:e,key:o,ref:d,props:l,_owner:c.current}}n.jsx=o,n.jsxs=o},24246:function(e,n,t){e.exports=t(71426)},4007:function(e,n,t){var a=t(24246),r=t(44614),l=function(e){var n=e.type,t=e.className,a=e.title;return{__html:'<button\n        is="emby-button"\n        type="'.concat(n,'"\n        class="').concat(t,'"\n        >\n        <span>').concat(a,"</span>\n    </button>")}};n.Z=function(e){var n=e.type,t=e.className,c=e.title;return(0,a.jsx)("div",{dangerouslySetInnerHTML:l({type:n,className:t,title:r.ZP.translate(c)})})}},89663:function(e,n,t){var a=t(24246),r=t(44614),l=function(e){var n=e.labelClassName,t=e.type,a=e.className,r=e.title;return{__html:'<label class="'.concat(n,'">\n        <input\n            is="emby-checkbox"\n            type="').concat(t,'"\n            class="').concat(a,'"\n        />\n        <span>').concat(r,"</span>\n    </label>")}};n.Z=function(e){var n=e.labelClassName,t=e.type,c=e.className,s=e.title;return(0,a.jsx)("div",{className:"sectioncheckbox",dangerouslySetInnerHTML:l({labelClassName:n||"",type:t,className:c,title:r.ZP.translate(s)})})}},56883:function(e,n,t){var a=t(24246),r=function(e){var n=e.className,t=e.Name,a=e.dataAttributes,r=e.AppName,l=e.checkedAttribute;return{__html:'<label>\n        <input\n            type="checkbox"\n            is="emby-checkbox"\n            class="'.concat(n,'"\n            ').concat(a," ").concat(l,"\n        />\n        <span>").concat(t," ").concat(r,"</span>\n    </label>")}};n.Z=function(e){var n=e.className,t=e.Name,l=e.Id,c=e.ItemType,s=e.AppName,i=e.checkedAttribute;return(0,a.jsx)("div",{className:"sectioncheckbox",dangerouslySetInnerHTML:r({className:n,Name:t,dataAttributes:c?"data-itemtype='".concat(c,"'"):"data-id='".concat(l,"'"),AppName:s?"- ".concat(s):"",checkedAttribute:i})})}},26670:function(e,n,t){var a=t(24246),r=t(44614),l=function(e){var n=e.type,t=e.id,a=e.label,r=e.options;return{__html:'<input\n        is="emby-input"\n        type="'.concat(n,'"\n        id="').concat(t,'"\n        label="').concat(a,'"\n        ').concat(r,"\n    />")}};n.Z=function(e){var n=e.type,t=e.id,c=e.label,s=e.options;return(0,a.jsx)("div",{dangerouslySetInnerHTML:l({type:n,id:t,label:r.ZP.translate(c),options:s||""})})}},45754:function(e,n,t){var a=t(24246),r=t(44614),l=function(e){var n=e.className,t=e.title,a=e.href;return{__html:'<a\n        is="emby-linkbutton"\n        rel="noopener noreferrer"\n        class="'.concat(n,'"\n        target="_blank"\n        href="').concat(a,'"\n        >\n        ').concat(t,"\n    </a>")}};n.Z=function(e){var n=e.className,t=e.title,c=e.url;return(0,a.jsx)("div",{dangerouslySetInnerHTML:l({className:n,title:r.ZP.translate(t),href:c})})}},42699:function(e,n,t){t.r(n);var a=t(24246),r=t(27378),l=t(76543),c=t(44614),s=t(56705),i=t(25152),o=t(45754),d=t(26670),u=t(89663),h=t(56883),p=t(4007),m=function(){return m=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},m.apply(this,arguments)},f=function(e,n){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var a,r,l=t.call(e),c=[];try{for(;(void 0===n||n-- >0)&&!(a=l.next()).done;)c.push(a.value)}catch(e){r={error:e}}finally{try{a&&!a.done&&(t=l.return)&&t.call(l)}finally{if(r)throw r.error}}return c};n.default=function(){var e=f((0,r.useState)([]),2),n=e[0],t=e[1],y=f((0,r.useState)([]),2),b=y[0],v=y[1],x=(0,r.useRef)(null),N=function(e){return e.map((function(e){return{Id:e.Id,Name:e.Name}}))},A=(0,r.useCallback)((function(e){var n=x.current;if(n){var t=N(e);v(t),n.querySelector(".folderAccess").dispatchEvent(new CustomEvent("create")),n.querySelector(".chkEnableAllFolders").checked=!1}else console.error("Unexpected null reference")}),[]),k=(0,r.useCallback)((function(e){var n=x.current;if(n){var a=N(e);t(a),n.querySelector(".channelAccess").dispatchEvent(new CustomEvent("create"));var r=n.querySelector(".channelAccessContainer");a.length?r.classList.remove("hide"):r.classList.add("hide"),n.querySelector(".chkEnableAllChannels").checked=!1}else console.error("Unexpected null reference")}),[]),C=(0,r.useCallback)((function(){var e=x.current;if(e){e.querySelector("#txtUsername").value="",e.querySelector("#txtPassword").value="",s.ZP.show();var n=window.ApiClient.getJSON(window.ApiClient.getUrl("Library/MediaFolders",{IsHidden:!1})),t=window.ApiClient.getJSON(window.ApiClient.getUrl("Channels"));Promise.all([n,t]).then((function(e){A(e[0].Items),k(e[1].Items),s.ZP.hide()}))}else console.error("Unexpected null reference")}),[k,A]);return(0,r.useEffect)((function(){var e=x.current;e?(C(),e.querySelector(".chkEnableAllChannels").addEventListener("change",(function(){var n=e.querySelector(".channelAccessListContainer");this.checked?n.classList.add("hide"):n.classList.remove("hide")})),e.querySelector(".chkEnableAllFolders").addEventListener("change",(function(){var n=e.querySelector(".folderAccessListContainer");this.checked?n.classList.add("hide"):n.classList.remove("hide")})),e.querySelector(".newUserProfileForm").addEventListener("submit",(function(n){var t;return s.ZP.show(),(t={}).Name=e.querySelector("#txtUsername").value,t.Password=e.querySelector("#txtPassword").value,window.ApiClient.createUser(t).then((function(n){if(!n.Id)throw new Error("Unexpected null user.Id");if(!n.Policy)throw new Error("Unexpected null user.Policy");n.Policy.EnableAllFolders=e.querySelector(".chkEnableAllFolders").checked,n.Policy.EnabledFolders=[],n.Policy.EnableAllFolders||(n.Policy.EnabledFolders=Array.prototype.filter.call(e.querySelectorAll(".chkFolder"),(function(e){return e.checked})).map((function(e){return e.getAttribute("data-id")}))),n.Policy.EnableAllChannels=e.querySelector(".chkEnableAllChannels").checked,n.Policy.EnabledChannels=[],n.Policy.EnableAllChannels||(n.Policy.EnabledChannels=Array.prototype.filter.call(e.querySelectorAll(".chkChannel"),(function(e){return e.checked})).map((function(e){return e.getAttribute("data-id")}))),window.ApiClient.updateUserPolicy(n.Id,n.Policy).then((function(){l.ZP.navigate("useredit.html?userId="+n.Id)}))}),(function(){(0,i.Z)(c.ZP.translate("ErrorDefault")),s.ZP.hide()})),n.preventDefault(),n.stopPropagation(),!1})),e.querySelector(".button-cancel").addEventListener("click",(function(){window.history.back()}))):console.error("Unexpected null reference")}),[C]),(0,a.jsx)("div",m({ref:x},{children:(0,a.jsxs)("div",m({className:"content-primary"},{children:[(0,a.jsx)("div",m({className:"verticalSection"},{children:(0,a.jsxs)("div",m({className:"sectionTitleContainer flex align-items-center"},{children:[(0,a.jsx)("h2",m({className:"sectionTitle"},{children:c.ZP.translate("ButtonAddUser")})),(0,a.jsx)(o.Z,{className:"raised button-alt headerHelpButton",title:"Help",url:"https://docs.jellyfin.org/general/server/users/"})]}))})),(0,a.jsxs)("form",m({className:"newUserProfileForm"},{children:[(0,a.jsx)("div",m({className:"inputContainer"},{children:(0,a.jsx)(d.Z,{type:"text",id:"txtUsername",label:"LabelName",options:"required"})})),(0,a.jsx)("div",m({className:"inputContainer"},{children:(0,a.jsx)(d.Z,{type:"password",id:"txtPassword",label:"LabelPassword"})})),(0,a.jsxs)("div",m({className:"folderAccessContainer"},{children:[(0,a.jsx)("h2",{children:c.ZP.translate("HeaderLibraryAccess")}),(0,a.jsx)(u.Z,{type:"checkbox",className:"chkEnableAllFolders",title:"OptionEnableAccessToAllLibraries"}),(0,a.jsxs)("div",m({className:"folderAccessListContainer"},{children:[(0,a.jsxs)("div",m({className:"folderAccess"},{children:[(0,a.jsx)("h3",m({className:"checkboxListLabel"},{children:c.ZP.translate("HeaderLibraries")})),(0,a.jsx)("div",m({className:"checkboxList paperList",style:{padding:".5em 1em"}},{children:b.map((function(e){return(0,a.jsx)(h.Z,{className:"chkFolder",Id:e.Id,Name:e.Name,checkedAttribute:""},e.Id)}))}))]})),(0,a.jsx)("div",m({className:"fieldDescription"},{children:c.ZP.translate("LibraryAccessHelp")}))]}))]})),(0,a.jsxs)("div",m({className:"channelAccessContainer verticalSection-extrabottompadding hide"},{children:[(0,a.jsx)("h2",{children:c.ZP.translate("HeaderChannelAccess")}),(0,a.jsx)(u.Z,{type:"checkbox",className:"chkEnableAllChannels",title:"OptionEnableAccessToAllChannels"}),(0,a.jsxs)("div",m({className:"channelAccessListContainer"},{children:[(0,a.jsxs)("div",m({className:"channelAccess"},{children:[(0,a.jsx)("h3",m({className:"checkboxListLabel"},{children:c.ZP.translate("Channels")})),(0,a.jsx)("div",m({className:"checkboxList paperList",style:{padding:".5em 1em"}},{children:n.map((function(e){return(0,a.jsx)(h.Z,{className:"chkChannel",Id:e.Id,Name:e.Name,checkedAttribute:""},e.Id)}))}))]})),(0,a.jsx)("div",m({className:"fieldDescription"},{children:c.ZP.translate("ChannelAccessHelp")}))]}))]})),(0,a.jsxs)("div",{children:[(0,a.jsx)(p.Z,{type:"submit",className:"raised button-submit block",title:"Save"}),(0,a.jsx)(p.Z,{type:"button",className:"raised button-cancel block btnCancel",title:"ButtonCancel"})]})]}))]}))}))}}}]);