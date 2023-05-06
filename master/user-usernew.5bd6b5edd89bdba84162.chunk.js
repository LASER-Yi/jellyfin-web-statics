"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7219],{92266:function(e,n,t){t.r(n);var a=t(24246),c=t(27378),r=t(60635),l=t(94994),s=t(28540),i=t(56663),o=t(51361),d=t(8121),u=t(48606),h=t(32677),p=t(76197),m=t(6055),f=function(){return f=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var c in n=arguments[t])Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c]);return e},f.apply(this,arguments)},b=function(e,n){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var a,c,r=t.call(e),l=[];try{for(;(void 0===n||n-- >0)&&!(a=r.next()).done;)l.push(a.value)}catch(e){c={error:e}}finally{try{a&&!a.done&&(t=r.return)&&t.call(r)}finally{if(c)throw c.error}}return l};n.default=function(){var e=b((0,c.useState)([]),2),n=e[0],t=e[1],v=b((0,c.useState)([]),2),y=v[0],C=v[1],N=(0,c.useRef)(null),x=function(e){return e.map((function(e){return{Id:e.Id,Name:e.Name}}))},k=(0,c.useCallback)((function(e){var n=N.current;if(n){var t=x(e);C(t),n.querySelector(".folderAccess").dispatchEvent(new CustomEvent("create")),n.querySelector(".chkEnableAllFolders").checked=!1}else console.error("Unexpected null reference")}),[]),w=(0,c.useCallback)((function(e){var n=N.current;if(n){var a=x(e);t(a),n.querySelector(".channelAccess").dispatchEvent(new CustomEvent("create"));var c=n.querySelector(".channelAccessContainer");a.length?c.classList.remove("hide"):c.classList.add("hide"),n.querySelector(".chkEnableAllChannels").checked=!1}else console.error("Unexpected null reference")}),[]),A=(0,c.useCallback)((function(){var e=N.current;if(e){e.querySelector("#txtUsername").value="",e.querySelector("#txtPassword").value="",s.ZP.show();var n=window.ApiClient.getJSON(window.ApiClient.getUrl("Library/MediaFolders",{IsHidden:!1})),t=window.ApiClient.getJSON(window.ApiClient.getUrl("Channels"));Promise.all([n,t]).then((function(e){k(e[0].Items),w(e[1].Items),s.ZP.hide()})).catch((function(e){console.error("[usernew] failed to load data",e)}))}else console.error("Unexpected null reference")}),[w,k]);return(0,c.useEffect)((function(){var e=N.current;e?(A(),e.querySelector(".chkEnableAllChannels").addEventListener("change",(function(){var n=e.querySelector(".channelAccessListContainer");this.checked?n.classList.add("hide"):n.classList.remove("hide")})),e.querySelector(".chkEnableAllFolders").addEventListener("change",(function(){var n=e.querySelector(".folderAccessListContainer");this.checked?n.classList.add("hide"):n.classList.remove("hide")})),e.querySelector(".newUserProfileForm").addEventListener("submit",(function(n){var t;return s.ZP.show(),(t={}).Name=e.querySelector("#txtUsername").value,t.Password=e.querySelector("#txtPassword").value,window.ApiClient.createUser(t).then((function(n){if(!n.Id||!n.Policy)throw new Error("Unexpected null user id or policy");n.Policy.EnableAllFolders=e.querySelector(".chkEnableAllFolders").checked,n.Policy.EnabledFolders=[],n.Policy.EnableAllFolders||(n.Policy.EnabledFolders=Array.prototype.filter.call(e.querySelectorAll(".chkFolder"),(function(e){return e.checked})).map((function(e){return e.getAttribute("data-id")}))),n.Policy.EnableAllChannels=e.querySelector(".chkEnableAllChannels").checked,n.Policy.EnabledChannels=[],n.Policy.EnableAllChannels||(n.Policy.EnabledChannels=Array.prototype.filter.call(e.querySelectorAll(".chkChannel"),(function(e){return e.checked})).map((function(e){return e.getAttribute("data-id")}))),window.ApiClient.updateUserPolicy(n.Id,n.Policy).then((function(){r.default.navigate("useredit.html?userId="+n.Id).catch((function(e){console.error("[usernew] failed to navigate to edit user page",e)}))})).catch((function(e){console.error("[usernew] failed to update user policy",e)}))}),(function(){(0,i.Z)(l.ZP.translate("ErrorDefault")),s.ZP.hide()})),n.preventDefault(),n.stopPropagation(),!1})),e.querySelector("#btnCancel").addEventListener("click",(function(){window.history.back()}))):console.error("Unexpected null reference")}),[A]),(0,a.jsx)(m.Z,f({id:"newUserPage",className:"mainAnimatedPage type-interior"},{children:(0,a.jsxs)("div",f({ref:N,className:"content-primary"},{children:[(0,a.jsx)("div",f({className:"verticalSection"},{children:(0,a.jsx)(o.Z,{title:l.ZP.translate("HeaderAddUser"),url:"https://jellyfin.org/docs/general/server/users/"})})),(0,a.jsxs)("form",f({className:"newUserProfileForm"},{children:[(0,a.jsx)("div",f({className:"inputContainer"},{children:(0,a.jsx)(d.Z,{type:"text",id:"txtUsername",label:"LabelName",options:"required"})})),(0,a.jsx)("div",f({className:"inputContainer"},{children:(0,a.jsx)(d.Z,{type:"password",id:"txtPassword",label:"LabelPassword"})})),(0,a.jsx)(h.Z,f({containerClassName:"folderAccessContainer",headerTitle:"HeaderLibraryAccess",checkBoxClassName:"chkEnableAllFolders",checkBoxTitle:"OptionEnableAccessToAllLibraries",listContainerClassName:"folderAccessListContainer",accessClassName:"folderAccess",listTitle:"HeaderLibraries",description:"LibraryAccessHelp"},{children:y.map((function(e){return(0,a.jsx)(p.Z,{className:"chkFolder",itemId:e.Id,itemName:e.Name},e.Id)}))})),(0,a.jsx)(h.Z,f({containerClassName:"channelAccessContainer verticalSection-extrabottompadding hide",headerTitle:"HeaderChannelAccess",checkBoxClassName:"chkEnableAllChannels",checkBoxTitle:"OptionEnableAccessToAllChannels",listContainerClassName:"channelAccessListContainer",accessClassName:"channelAccess",listTitle:"Channels",description:"ChannelAccessHelp"},{children:n.map((function(e){return(0,a.jsx)(p.Z,{className:"chkChannel",itemId:e.Id,itemName:e.Name},e.Id)}))})),(0,a.jsxs)("div",{children:[(0,a.jsx)(u.Z,{type:"submit",className:"raised button-submit block",title:"Save"}),(0,a.jsx)(u.Z,{type:"button",id:"btnCancel",className:"raised button-cancel block",title:"ButtonCancel"})]})]}))]}))}))}},6055:function(e,n,t){var a=t(24246),c=t(27378),r=t(53424),l=function(){return l=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var c in n=arguments[t])Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c]);return e},l.apply(this,arguments)};n.Z=function(e){var n=e.children,t=e.id,s=e.className,i=void 0===s?"":s,o=e.title,d=e.isBackButtonEnabled,u=void 0===d||d,h=e.isMenuButtonEnabled,p=void 0!==h&&h,m=e.isNowPlayingBarEnabled,f=void 0===m||m,b=e.isThemeMediaSupported,v=void 0!==b&&b,y=e.backDropType,C=(0,c.useRef)(null);return(0,c.useEffect)((function(){r.Z.hideView()}),[]),(0,c.useEffect)((function(){var e,n,t,a,c={bubbles:!0,cancelable:!1,detail:{isRestored:!1,options:{enableMediaControl:f,supportsThemeMedia:v}}};null===(e=C.current)||void 0===e||e.dispatchEvent(new CustomEvent("viewbeforeshow",c)),null===(n=C.current)||void 0===n||n.dispatchEvent(new CustomEvent("pagebeforeshow",c)),null===(t=C.current)||void 0===t||t.dispatchEvent(new CustomEvent("viewshow",c)),null===(a=C.current)||void 0===a||a.dispatchEvent(new CustomEvent("pageshow",c))}),[C,f,v]),(0,a.jsx)("div",l({ref:C,id:t,"data-role":"page",className:"page ".concat(i),"data-title":o,"data-backbutton":u,"data-menubutton":p,"data-backdroptype":y},{children:n}))}},32677:function(e,n,t){var a=t(24246),c=t(94994),r=t(76197),l=function(){return l=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var c in n=arguments[t])Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c]);return e},l.apply(this,arguments)};n.Z=function(e){var n=e.containerClassName,t=e.headerTitle,s=e.checkBoxClassName,i=e.checkBoxTitle,o=e.listContainerClassName,d=e.accessClassName,u=e.listTitle,h=e.description,p=e.children;return(0,a.jsxs)("div",l({className:n},{children:[(0,a.jsx)("h2",{children:c.ZP.translate(t)}),(0,a.jsx)(r.Z,{labelClassName:"checkboxContainer",className:s,title:i}),(0,a.jsxs)("div",l({className:o},{children:[(0,a.jsxs)("div",l({className:d},{children:[(0,a.jsx)("h3",l({className:"checkboxListLabel"},{children:c.ZP.translate(u)})),(0,a.jsx)("div",l({className:"checkboxList paperList",style:{padding:".5em 1em"}},{children:p}))]})),(0,a.jsx)("div",l({className:"fieldDescription"},{children:c.ZP.translate(h)}))]}))]}))}},48606:function(e,n,t){var a=t(24246),c=t(94994),r=function(e){var n=e.type,t=e.id,a=e.className,c=e.title,r=e.leftIcon,l=e.rightIcon;return{__html:'<button\n        is="emby-button"\n        type="'.concat(n,'"\n        ').concat(t,'\n        class="').concat(a,'"\n        >\n        ').concat(r,"\n        <span>").concat(c,"</span>\n        ").concat(l,"\n    </button>")}};n.Z=function(e){var n=e.type,t=e.id,l=e.className,s=e.title,i=e.leftIcon,o=e.rightIcon;return(0,a.jsx)("div",{dangerouslySetInnerHTML:r({type:n,id:t?'id="'.concat(t,'"'):"",className:l,title:c.ZP.translate(s),leftIcon:i?'<span class="material-icons '.concat(i,'" aria-hidden="true"></span>'):"",rightIcon:o?'<span class="material-icons '.concat(o,'" aria-hidden="true"></span>'):""})})}},76197:function(e,n,t){var a=t(24246),c=t(65009),r=t.n(c),l=t(94994),s=function(e){var n=e.labelClassName,t=e.className,a=e.id,c=e.dataFilter,r=e.dataItemType,l=e.dataId,s=e.checkedAttribute,i=e.renderContent;return{__html:"<label ".concat(n,'>\n        <input\n            is="emby-checkbox"\n            type="checkbox"\n            class="').concat(t,'"\n            ').concat(a,"\n            ").concat(c,"\n            ").concat(r,"\n            ").concat(l,"\n            ").concat(s,"\n        />\n        ").concat(i,"\n    </label>")}};n.Z=function(e){var n=e.labelClassName,t=e.className,c=e.elementId,i=e.dataFilter,o=e.itemType,d=e.itemId,u=e.itemAppName,h=e.itemCheckedAttribute,p=e.itemName,m=e.title,f=u?"- ".concat(u):"",b=p?"<span>".concat(r()(p||"")," ").concat(f,"</span>"):"<span>".concat(l.ZP.translate(m),"</span>");return(0,a.jsx)("div",{className:"sectioncheckbox",dangerouslySetInnerHTML:s({labelClassName:n?"class='".concat(n,"'"):"",className:t,id:c?"id='".concat(c,"'"):"",dataFilter:i?"data-filter='".concat(i,"'"):"",dataItemType:o?"data-itemtype='".concat(o,"'"):"",dataId:d?"data-id='".concat(d,"'"):"",checkedAttribute:h||"",renderContent:b})})}},43771:function(e,n,t){var a=t(24246),c=t(94994),r=function(e){var n=e.is,t=e.id,a=e.className,c=e.title,r=e.icon,l=e.dataIndex,s=e.dataTag,i=e.dataProfileid;return{__html:'<button\n        is="'.concat(n,'"\n        type="button"\n        ').concat(t,'\n        class="').concat(a,'"\n        ').concat(c,"\n        ").concat(l,"\n        ").concat(s,"\n        ").concat(i,'\n    >\n        <span class="material-icons ').concat(r,'" aria-hidden="true"></span>\n    </button>')}};n.Z=function(e){var n=e.is,t=e.id,l=e.className,s=e.title,i=e.icon,o=e.dataIndex,d=e.dataTag,u=e.dataProfileid;return(0,a.jsx)("div",{dangerouslySetInnerHTML:r({is:n,id:t?'id="'.concat(t,'"'):"",className:l,title:s?'title="'.concat(c.ZP.translate(s),'"'):"",icon:i,dataIndex:o?'data-index="'.concat(o,'"'):"",dataTag:d?'data-tag="'.concat(d,'"'):"",dataProfileid:u?'data-profileid="'.concat(u,'"'):""})})}},8121:function(e,n,t){var a=t(24246),c=t(94994),r=function(e){var n=e.type,t=e.id,a=e.label,c=e.options;return{__html:'<input\n        is="emby-input"\n        type="'.concat(n,'"\n        id="').concat(t,'"\n        label="').concat(a,'"\n        ').concat(c,"\n    />")}};n.Z=function(e){var n=e.type,t=e.id,l=e.label,s=e.options;return(0,a.jsx)("div",{dangerouslySetInnerHTML:r({type:n,id:t,label:c.ZP.translate(l),options:s||""})})}},51361:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(24246),c=t(43771),r=t(94994),l=function(e){var n=e.className,t=e.title,a=e.href;return{__html:'<a\n        is="emby-linkbutton"\n        rel="noopener noreferrer"\n        class="'.concat(n,'"\n        target="_blank"\n        href="').concat(a,'"\n        >\n        ').concat(t,"\n    </a>")}},s=function(e){var n=e.className,t=e.title,c=e.url;return(0,a.jsx)("div",{dangerouslySetInnerHTML:l({className:n,title:r.ZP.translate(t),href:c})})},i=function(){return i=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var c in n=arguments[t])Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c]);return e},i.apply(this,arguments)},o=function(e){var n=e.SectionClassName,t=e.title,r=e.isBtnVisible,l=void 0!==r&&r,o=e.btnId,d=e.btnClassName,u=e.btnTitle,h=e.btnIcon,p=e.isLinkVisible,m=void 0===p||p,f=e.url;return(0,a.jsxs)("div",i({className:"".concat(n," sectionTitleContainer flex align-items-center")},{children:[(0,a.jsx)("h2",i({className:"sectionTitle"},{children:t})),l&&(0,a.jsx)(c.Z,{is:"emby-button",id:o,className:d,title:u,icon:h}),m&&(0,a.jsx)(s,{className:"raised button-alt headerHelpButton",title:"Help",url:f})]}))}}}]);