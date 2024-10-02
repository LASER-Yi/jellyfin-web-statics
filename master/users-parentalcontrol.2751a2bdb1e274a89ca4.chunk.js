"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[97200,96084,47027,72521],{72521:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}}),n(29305),n(32733),n(78557),n(90076),n(95021),n(93062),n(97747);var a=n(34789),r=n(79754),l=n(46782),i=n(10838),o=n(5898),c=n(47629),s=(n(10353),n(15453),n(98959),(a.A.tv||a.A.xboxOne)&&window.confirm?function(e){"string"==typeof e&&(e={label:"",text:e});var t=(e.label||"").replaceAll("<br/>","\n"),n=prompt(t,e.text||"");return n?Promise.resolve(n):Promise.reject(n)}:function(e){return"string"==typeof e&&(e={title:"",text:e}),function(e){var t={removeOnClose:!0,scrollY:!1};l.A.tv&&(t.size="fullscreen");var n,a=r.default.createDialog(t);return a.classList.add("formDialog"),a.innerHTML=o.Ay.translateHtml('<div class="formDialogHeader"> <button is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1" title="${ButtonBack}"> <span class="material-icons arrow_back" aria-hidden="true"></span> </button> <h3 class="formDialogHeaderTitle"></h3> </div> <div class="formDialogContent smoothScrollY"> <div class="dialogContentInner dialog-content-centered" style="padding-top:2em"> <form> <div class="inputContainer"> <input is="emby-input" type="text" id="txtInput" label=""/> <div class="fieldDescription"></div> </div> <div class="formDialogFooter"> <button is="emby-button" type="submit" class="raised btnSubmit block formDialogFooterItem button-submit"> <span class="submitText"></span> </button> </div> </form> </div> </div> ',"core"),l.A.tv?i.default.centerFocus.on(a.querySelector(".formDialogContent"),!1):(a.querySelector(".dialogContentInner").classList.add("dialogContentInner-mini"),a.classList.add("dialog-fullscreen-lowres")),a.querySelector(".btnCancel").addEventListener("click",(function(){r.default.close(a)})),a.querySelector(".formDialogHeaderTitle").innerText=e.title||"",e.description?a.querySelector(".fieldDescription").innerText=e.description:a.querySelector(".fieldDescription").classList.add("hide"),function(e,t){var n=e.querySelector("#txtInput");n.label?n.label(t.label||""):n.setAttribute("label",t.label||""),n.value=t.value||""}(a,e),a.querySelector("form").addEventListener("submit",(function(e){return n=a.querySelector("#txtInput").value,e.preventDefault(),e.stopPropagation(),setTimeout((function(){r.default.close(a)}),300),!1})),a.querySelector(".submitText").innerText=e.confirmText||o.Ay.translate("ButtonOk"),a.style.minWidth="".concat(Math.min(400,c.Ay.getWindowSize().innerWidth-50),"px"),r.default.open(a).then((function(){return l.A.tv&&i.default.centerFocus.off(a.querySelector(".formDialogContent"),!1),n||Promise.reject()}))}(e)})},78304:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var a=n(62540),r=n(36657),l=n(50117),i=n(22696),o=n.n(i),c=n(63696),s=n(9055),u=n(5898),d=n(73233),f=n(98320),v=n(85817);function m(e){void 0===e&&(e=0);var t=0,n=e%1;return n&&(t=Math.floor(60*n)),f.Ay.getDisplayTime(new Date(2e3,1,1,e,t,0,0))}var p=function(e){var t=e.index,n=e.DayOfWeek,r=e.StartHour,l=e.EndHour;return(0,a.jsxs)("div",{className:"liSchedule listItem","data-day":n,"data-start":r,"data-end":l,children:[(0,a.jsxs)("div",{className:"listItemBody two-line",children:[(0,a.jsx)("h3",{className:"listItemBodyText",children:u.Ay.translate(n)}),(0,a.jsx)("div",{className:"listItemBodyText secondary",children:m(r)+" - "+m(l)})]}),(0,a.jsx)(v.A,{is:"paper-icon-button-light",className:"btnDelete listItemButton",title:"Delete",icon:"delete",dataIndex:t})]})},h=function(e){var t=e.tag,n=e.tagType;return(0,a.jsx)("div",{className:"paperList",children:(0,a.jsxs)("div",{className:"listItem",children:[(0,a.jsx)("div",{className:"listItemBody",children:(0,a.jsx)("h3",{className:"listItemBodyText",children:t})}),(0,a.jsx)(v.A,{is:"paper-icon-button-light",className:"".concat(n," btnDeleteTag listItemButton"),title:"Delete",icon:"delete",dataTag:t})]})})},b=n(86068),y=n(30658),g=n(58702),A=n(8566),x=n(50764),S=n(91281),k=n(67692),T=n(65242),N=n(72521),C=n(86191),I=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var a,r,l=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(a=l.next()).done;)i.push(a.value)}catch(e){r={error:e}}finally{try{a&&!a.done&&(n=l.return)&&n.call(l)}finally{if(r)throw r.error}}return i},j=function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],a=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&a>=e.length&&(e=void 0),{value:e&&e[a++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},w=function(){var e=I((0,s.ok)(),1)[0].get("userId"),t=I((0,c.useState)(""),2),i=t[0],f=t[1],v=I((0,c.useState)([]),2),m=v[0],w=v[1],P=I((0,c.useState)([]),2),D=P[0],L=P[1],q=I((0,c.useState)([]),2),B=q[0],H=q[1],E=I((0,c.useState)([]),2),O=E[0],M=E[1],U=I((0,c.useState)([]),2),V=U[0],_=U[1],R=(0,c.useRef)(null),W=(0,c.useCallback)((function(e){for(var t,n=[],a=0,r=e.length;a<r;a++){if(t=e[a],n.length){var l=n[n.length-1];if(l.Value===t.Value){l.Name+="/"+t.Name;continue}}n.push({Name:t.Name,Value:t.Value})}w(n)}),[]),F=(0,c.useCallback)((function(e){var t,n,a,l,i=R.current;if(i){var o=[{name:u.Ay.translate("Books"),value:r.d.Book},{name:u.Ay.translate("Channels"),value:r.d.ChannelContent},{name:u.Ay.translate("LiveTV"),value:r.d.LiveTvChannel},{name:u.Ay.translate("Movies"),value:r.d.Movie},{name:u.Ay.translate("Music"),value:r.d.Music},{name:u.Ay.translate("Trailers"),value:r.d.Trailer},{name:u.Ay.translate("Shows"),value:r.d.Series}],c=[];try{for(var s=j(o),d=s.next();!d.done;d=s.next()){var f=d.value,v=-1!=(null===(l=null===(a=e.Policy)||void 0===a?void 0:a.BlockUnratedItems)||void 0===l?void 0:l.indexOf(f.value))?' checked="checked"':"";c.push({value:f.value,name:f.name,checkedAttribute:v})}}catch(e){t={error:e}}finally{try{d&&!d.done&&(n=s.return)&&n.call(s)}finally{if(t)throw t.error}}L(c),i.querySelector(".blockUnratedItems").dispatchEvent(new CustomEvent("create"))}else console.error("[userparentalcontrol] Unexpected null page reference")}),[]),X=(0,c.useCallback)((function(e){var t,n,a=R.current;if(a){M(e);var r=a.querySelector(".allowedTags"),l=function(t){t.addEventListener("click",(function(){var n=t.getAttribute("data-tag"),a=e.filter((function(e){return e!==n}));X(a)}))};try{for(var i=j(r.querySelectorAll(".btnDeleteTag")),o=i.next();!o.done;o=i.next())l(o.value)}catch(e){t={error:e}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}}else console.error("[userparentalcontrol] Unexpected null page reference")}),[]),J=(0,c.useCallback)((function(e){var t,n,a=R.current;if(a){_(e);var r=a.querySelector(".blockedTags"),l=function(t){t.addEventListener("click",(function(){var n=t.getAttribute("data-tag"),a=e.filter((function(e){return e!==n}));J(a)}))};try{for(var i=j(r.querySelectorAll(".btnDeleteTag")),o=i.next();!o.done;o=i.next())l(o.value)}catch(e){t={error:e}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}}else console.error("[userparentalcontrol] Unexpected null page reference")}),[]),z=(0,c.useCallback)((function(e){var t,n,a=R.current;if(a){H(e);var r=a.querySelector(".accessScheduleList"),l=function(t){t.addEventListener("click",(function(){var n,a=parseInt(null!==(n=t.getAttribute("data-index"))&&void 0!==n?n:"0",10);e.splice(a,1);var r=e.filter((function(e,t){return t!=a}));z(r)}))};try{for(var i=j(r.querySelectorAll(".btnDelete")),o=i.next();!o.done;o=i.next())l(o.value)}catch(e){t={error:e}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}}else console.error("[userparentalcontrol] Unexpected null page reference")}),[]),K=(0,c.useCallback)((function(e,t){var n,a,r,l,i,o=R.current;if(o){f(e.Name||""),d.default.setTitle(e.Name),F(e),X((null===(n=e.Policy)||void 0===n?void 0:n.AllowedTags)||[]),J((null===(a=e.Policy)||void 0===a?void 0:a.BlockedTags)||[]),W(t);var c="";(null===(r=e.Policy)||void 0===r?void 0:r.MaxParentalRating)&&t.forEach((function(t){var n;t.Value&&(null===(n=e.Policy)||void 0===n?void 0:n.MaxParentalRating)&&e.Policy.MaxParentalRating>=t.Value&&(c="".concat(t.Value))})),o.querySelector("#selectMaxParentalRating").value=String(c),(null===(l=e.Policy)||void 0===l?void 0:l.IsAdministrator)?o.querySelector(".accessScheduleSection").classList.add("hide"):o.querySelector(".accessScheduleSection").classList.remove("hide"),z((null===(i=e.Policy)||void 0===i?void 0:i.AccessSchedules)||[]),A.Ay.hide()}else console.error("[userparentalcontrol] Unexpected null page reference")}),[X,J,F,W,z]),Y=(0,c.useCallback)((function(){if(e){A.Ay.show();var t=window.ApiClient.getUser(e),n=window.ApiClient.getParentalRatings();Promise.all([t,n]).then((function(e){K(e[0],e[1])})).catch((function(e){console.error("[userparentalcontrol] failed to load data",e)}))}else console.error("[userparentalcontrol.loadData] missing user id")}),[K,e]);return(0,c.useEffect)((function(){var t=R.current;if(t){Y();var a=function(){return Array.prototype.map.call(t.querySelectorAll(".liSchedule"),(function(e){return{DayOfWeek:e.getAttribute("data-day"),StartHour:e.getAttribute("data-start"),EndHour:e.getAttribute("data-end")}}))},r=function(){return Array.prototype.map.call(t.querySelectorAll(".allowedTag"),(function(e){return e.getAttribute("data-tag")}))},i=function(){return Array.prototype.map.call(t.querySelectorAll(".blockedTag"),(function(e){return e.getAttribute("data-tag")}))},o=function(e,t,n,a,r){return function(r){var l=r.Id,i=r.Policy;if(!l||!i)throw new Error("Unexpected null user id or policy");var o=parseInt(e.querySelector("#selectMaxParentalRating").value,10);i.MaxParentalRating=Number.isNaN(o)?null:o,i.BlockUnratedItems=Array.prototype.filter.call(e.querySelectorAll(".chkUnratedItem"),(function(e){return e.checked})).map((function(e){return e.getAttribute("data-itemtype")})),i.AccessSchedules=t(),i.AllowedTags=n(),i.BlockedTags=a(),C.A.getCurrentApiClientAsync().then((function(e){return e.updateUserPolicy(l,i)})).then((function(){return A.Ay.hide(),void(0,x.A)(u.Ay.translate("SettingsSaved"))})).catch((function(e){console.error("[userparentalcontrol] failed to update user policy",e)}))}}(t,a,r,i);t.querySelector("#btnAddSchedule").addEventListener("click",(function(){var e,t;e={Id:0,UserId:"",DayOfWeek:l.H.Sunday,StartHour:0,EndHour:0},t=-1,e=e||{},n.e(52361).then(n.bind(n,52361)).then((function(n){n.default.show({schedule:e}).then((function(e){var n=a();-1==t&&(t=n.length),n[t]=e,z(n)})).catch((function(){}))})).catch((function(e){console.error("[userparentalcontrol] failed to load access schedule",e)}))})),t.querySelector("#btnAddAllowedTag").addEventListener("click",(function(){(0,N.default)({label:u.Ay.translate("LabelTag")}).then((function(e){var t=r();-1==t.indexOf(e)&&(t.push(e),X(t))})).catch((function(){}))})),t.querySelector("#btnAddBlockedTag").addEventListener("click",(function(){(0,N.default)({label:u.Ay.translate("LabelTag")}).then((function(e){var t=i();-1==t.indexOf(e)&&(t.push(e),J(t))})).catch((function(){}))})),t.querySelector(".userParentalControlForm").addEventListener("submit",(function(t){if(e)return A.Ay.show(),window.ApiClient.getUser(e).then((function(e){o(e)})).catch((function(e){console.error("[userparentalcontrol] failed to fetch user",e)})),t.preventDefault(),t.stopPropagation(),!1;console.error("[userparentalcontrol.onSubmit] missing user id")}))}else console.error("[userparentalcontrol] Unexpected null page reference")}),[X,J,Y,z]),(0,a.jsx)(T.A,{id:"userParentalControlPage",className:"mainAnimatedPage type-interior",children:(0,a.jsxs)("div",{ref:R,className:"content-primary",children:[(0,a.jsx)("div",{className:"verticalSection",children:(0,a.jsx)(y.A,{title:i,url:"https://jellyfin.org/docs/general/server/users/"})}),(0,a.jsx)(g.A,{activeTab:"userparentalcontrol"}),(0,a.jsxs)("form",{className:"userParentalControlForm",children:[(0,a.jsxs)("div",{className:"selectContainer",children:[(0,a.jsx)(k.A,{id:"selectMaxParentalRating",label:"LabelMaxParentalRating",children:function(){var e,t,n="";n+="<option value=''></option>";try{for(var a=j(m),r=a.next();!r.done;r=a.next()){var l=r.value;n+="<option value='".concat(l.Value,"'>").concat(o()(l.Name),"</option>")}}catch(t){e={error:t}}finally{try{r&&!r.done&&(t=a.return)&&t.call(a)}finally{if(e)throw e.error}}return n}()}),(0,a.jsx)("div",{className:"fieldDescription",children:u.Ay.translate("MaxParentalRatingHelp")})]}),(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:"blockUnratedItems",children:[(0,a.jsx)("h3",{className:"checkboxListLabel",children:u.Ay.translate("HeaderBlockItemsWithNoRating")}),(0,a.jsx)("div",{className:"checkboxList paperList",style:{padding:".5em 1em"},children:D.map((function(e){return(0,a.jsx)(S.A,{className:"chkUnratedItem",itemType:e.value,itemName:e.name,itemCheckedAttribute:e.checkedAttribute},e.value)}))})]})}),(0,a.jsx)("br",{}),(0,a.jsxs)("div",{className:"verticalSection",style:{marginBottom:"2em"},children:[(0,a.jsx)(y.A,{SectionClassName:"detailSectionHeader",title:u.Ay.translate("LabelAllowContentWithTags"),isBtnVisible:!0,btnId:"btnAddAllowedTag",btnClassName:"fab submit sectionTitleButton",btnTitle:"Add",btnIcon:"add",isLinkVisible:!1}),(0,a.jsx)("div",{className:"fieldDescription",children:u.Ay.translate("AllowContentWithTagsHelp")}),(0,a.jsx)("div",{className:"allowedTags",style:{marginTop:".5em"},children:null==O?void 0:O.map((function(e){return(0,a.jsx)(h,{tag:e,tagType:"allowedTag"},e)}))})]}),(0,a.jsxs)("div",{className:"verticalSection",style:{marginBottom:"2em"},children:[(0,a.jsx)(y.A,{SectionClassName:"detailSectionHeader",title:u.Ay.translate("LabelBlockContentWithTags"),isBtnVisible:!0,btnId:"btnAddBlockedTag",btnClassName:"fab submit sectionTitleButton",btnTitle:"Add",btnIcon:"add",isLinkVisible:!1}),(0,a.jsx)("div",{className:"fieldDescription",children:u.Ay.translate("BlockContentWithTagsHelp")}),(0,a.jsx)("div",{className:"blockedTags",style:{marginTop:".5em"},children:V.map((function(e){return(0,a.jsx)(h,{tag:e,tagType:"blockedTag"},e)}))})]}),(0,a.jsxs)("div",{className:"accessScheduleSection verticalSection",style:{marginBottom:"2em"},children:[(0,a.jsx)(y.A,{title:u.Ay.translate("HeaderAccessSchedule"),isBtnVisible:!0,btnId:"btnAddSchedule",btnClassName:"fab submit sectionTitleButton",btnTitle:"Add",btnIcon:"add",isLinkVisible:!1}),(0,a.jsx)("p",{children:u.Ay.translate("HeaderAccessScheduleHelp")}),(0,a.jsx)("div",{className:"accessScheduleList paperList",children:B.map((function(e,t){return(0,a.jsx)(p,{index:t,DayOfWeek:e.DayOfWeek,StartHour:e.StartHour,EndHour:e.EndHour},e.Id)}))})]}),(0,a.jsx)("div",{children:(0,a.jsx)(b.A,{type:"submit",className:"raised button-submit block",title:"Save"})})]})]})})}},58702:function(e,t,n){var a=n(62540),r=n(63696),l=n(5898),i=n(89100),o=n(84851);function c(e){return r.useCallback((function(){(0,i.navigate)(e,!0).catch((function(e){console.warn("Error navigating to dashboard url",e)}))}),[e])}t.A=function(e){var t=e.activeTab,n=c("/dashboard/users/profile"),r=c("/dashboard/users/access"),i=c("/dashboard/users/parentalcontrol"),s=c("/dashboard/users/password");return(0,a.jsxs)("div",{"data-role":"controlgroup","data-type":"horizontal",className:"localnav",children:[(0,a.jsx)(o.A,{href:"#","data-role":"button",className:"useredit"===t?"ui-btn-active":"",onClick:n,children:l.Ay.translate("Profile")}),(0,a.jsx)(o.A,{href:"#","data-role":"button",className:"userlibraryaccess"===t?"ui-btn-active":"",onClick:r,children:l.Ay.translate("TabAccess")}),(0,a.jsx)(o.A,{href:"#","data-role":"button",className:"userparentalcontrol"===t?"ui-btn-active":"",onClick:i,children:l.Ay.translate("TabParentalControl")}),(0,a.jsx)(o.A,{href:"#","data-role":"button",className:"userpassword"===t?"ui-btn-active":"",onClick:s,children:l.Ay.translate("HeaderPassword")})]})}},86068:function(e,t,n){var a=n(62540),r=(n(63696),n(5898)),l=function(e){var t=e.type,n=e.id,a=e.className,r=e.title,l=e.leftIcon,i=e.rightIcon;return{__html:'<button\n        is="emby-button"\n        type="'.concat(t,'"\n        ').concat(n,'\n        class="').concat(a,'"\n        >\n        ').concat(l,"\n        <span>").concat(r,"</span>\n        ").concat(i,"\n    </button>")}};t.A=function(e){var t=e.type,n=e.id,i=e.className,o=e.title,c=e.leftIcon,s=e.rightIcon;return(0,a.jsx)("div",{dangerouslySetInnerHTML:l({type:t,id:n?'id="'.concat(n,'"'):"",className:i,title:r.Ay.translate(o),leftIcon:c?'<span class="material-icons '.concat(c,'" aria-hidden="true"></span>'):"",rightIcon:s?'<span class="material-icons '.concat(s,'" aria-hidden="true"></span>'):""})})}},91281:function(e,t,n){var a=n(62540),r=n(22696),l=n.n(r),i=(n(63696),n(5898)),o=function(e){var t=e.labelClassName,n=e.className,a=e.id,r=e.dataFilter,l=e.dataItemType,i=e.dataId,o=e.checkedAttribute,c=e.renderContent;return{__html:"<label ".concat(t,'>\n        <input\n            is="emby-checkbox"\n            type="checkbox"\n            class="').concat(n,'"\n            ').concat(a,"\n            ").concat(r,"\n            ").concat(l,"\n            ").concat(i,"\n            ").concat(o,"\n        />\n        ").concat(c,"\n    </label>")}};t.A=function(e){var t=e.labelClassName,n=e.className,r=e.elementId,c=e.dataFilter,s=e.itemType,u=e.itemId,d=e.itemAppName,f=e.itemCheckedAttribute,v=e.itemName,m=e.title,p=d?"- ".concat(d):"",h=v?"<span>".concat(l()(v||"")," ").concat(p,"</span>"):"<span>".concat(i.Ay.translate(m),"</span>");return(0,a.jsx)("div",{className:"sectioncheckbox",dangerouslySetInnerHTML:o({labelClassName:t?"class='".concat(t,"'"):"",className:n,id:r?"id='".concat(r,"'"):"",dataFilter:c?"data-filter='".concat(c,"'"):"",dataItemType:s?"data-itemtype='".concat(s,"'"):"",dataId:u?"data-id='".concat(u,"'"):"",checkedAttribute:f||"",renderContent:h})})}},85817:function(e,t,n){var a=n(62540),r=(n(63696),n(5898)),l=function(e){var t=e.is,n=e.id,a=e.className,r=e.title,l=e.icon,i=e.dataIndex,o=e.dataTag,c=e.dataProfileid;return{__html:'<button\n        is="'.concat(t,'"\n        type="button"\n        ').concat(n,'\n        class="').concat(a,'"\n        ').concat(r,"\n        ").concat(i,"\n        ").concat(o,"\n        ").concat(c,'\n    >\n        <span class="material-icons ').concat(l,'" aria-hidden="true"></span>\n    </button>')}};t.A=function(e){var t=e.is,n=e.id,i=e.className,o=e.title,c=e.icon,s=e.dataIndex,u=e.dataTag,d=e.dataProfileid;return(0,a.jsx)("div",{dangerouslySetInnerHTML:l({is:t,id:n?'id="'.concat(n,'"'):"",className:i,title:o?'title="'.concat(r.Ay.translate(o),'"'):"",icon:c,dataIndex:s?'data-index="'.concat(s,'"'):"",dataTag:u?'data-tag="'.concat(u,'"'):"",dataProfileid:d?'data-profileid="'.concat(d,'"'):""})})}},30658:function(e,t,n){var a=n(62540),r=(n(63696),n(85817)),l=n(84851),i=n(5898);t.A=function(e){var t=e.SectionClassName,n=e.title,o=e.isBtnVisible,c=void 0!==o&&o,s=e.btnId,u=e.btnClassName,d=e.btnTitle,f=e.btnIcon,v=e.isLinkVisible,m=void 0===v||v,p=e.url;return(0,a.jsxs)("div",{className:"".concat(t," sectionTitleContainer flex align-items-center"),children:[(0,a.jsx)("h2",{className:"sectionTitle",children:n}),c&&(0,a.jsx)(r.A,{is:"emby-button",id:s,className:u,title:d,icon:f}),m&&(0,a.jsx)(l.A,{className:"raised button-alt headerHelpButton",target:"_blank",rel:"noopener noreferrer",href:p,children:i.Ay.translate("Help")})]})}},67692:function(e,t,n){var a=n(62540),r=(n(63696),n(5898)),l=function(e){var t=e.name,n=e.id,a=e.required,r=e.label,l=e.option;return{__html:'<select\n        is="emby-select"\n        '.concat(t,'\n        id="').concat(n,'"\n        ').concat(a,'\n        label="').concat(r,'"\n    >\n        ').concat(l,"\n    </select>")}};t.A=function(e){var t=e.name,n=e.id,i=e.required,o=e.label,c=e.children;return(0,a.jsx)("div",{dangerouslySetInnerHTML:l({name:t?"name='".concat(t,"'"):"",id:n,required:i?"required='".concat(i,"'"):"",label:r.Ay.translate(o),option:c})})}},84851:function(e,t,n){var a=n(62540),r=n(63696),l=n(4452),i=n.n(l),o=n(46782),c=n(13615),s=n(70267),u=n(22622),d=function(){return d=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},d.apply(this,arguments)};t.A=function(e){var t=e.className,n=e.isAutoHideEnabled,l=e.href,f=e.target,v=e.onClick,m=e.children,p=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}(e,["className","isAutoHideEnabled","href","target","onClick","children"]),h=(0,r.useCallback)((function(e){var t=l||"";"#"!==t?f?u.g.supports("targetblank")||(e.preventDefault(),c.A.openUrl(t)):(e.preventDefault(),s.appRouter.show(t).catch((function(e){console.error("[LinkButton] failed to show url",t,e)}))):e.preventDefault(),null==v||v(e)}),[l,f,v]);if(!0===n&&!u.g.supports("externallinks"))return null;var b=i()("emby-button",t,{"show-focus":o.A.tv});return(0,a.jsx)("a",d({className:b,href:l,target:f,onClick:h},p,{children:m}))}},32203:function(e,t,n){n.d(t,{Bq:function(){return o},Jd:function(){return i}});var a=n(65369),r=n(11444),l="assets/img/devices/";function i(e){switch(e){case a.X.Movies:return"movie";case a.X.Music:return"music_note";case a.X.Homevideos:case a.X.Photos:return"photo";case a.X.Livetv:return"live_tv";case a.X.Tvshows:return"tv";case a.X.Trailers:return"theaters";case a.X.Musicvideos:return"music_video";case a.X.Books:return"book";case a.X.Boxsets:return"video_library";case a.X.Playlists:return"queue";case"channels":return"videocam";case void 0:return"quiz";default:return"folder"}}function o(e,t){switch(e){case r.D.MusicAlbum:return"album";case r.D.MusicArtist:case r.D.Person:return"person";case r.D.Audio:return"audiotrack";case r.D.Movie:return"movie";case r.D.Episode:case r.D.Series:return"tv";case r.D.Program:return"live_tv";case r.D.Book:return"book";case r.D.Folder:return"folder";case r.D.BoxSet:return"video_library";case r.D.Playlist:return"queue";case r.D.Photo:return"photo";case r.D.PhotoAlbum:return"photo_album";default:return t}}t.Ay={getDeviceIcon:function(e){var t;switch(e.AppName||e.Client){case"Samsung Smart TV":return l+"samsung.svg";case"Xbox One":return l+"xbox.svg";case"Sony PS4":return l+"playstation.svg";case"Kodi":case"Kodi JellyCon":return l+"kodi.svg";case"Jellyfin Android":case"AndroidTV":case"Android TV":return l+"android.svg";case"Jellyfin Mobile (iOS)":case"Jellyfin Mobile (iPadOS)":case"Jellyfin iOS":case"Infuse":return l+"apple.svg";case"Home Assistant":return l+"home-assistant.svg";case"Jellyfin Roku":return l+"roku.svg";case"Finamp":return l+"finamp.svg";case"Jellyfin Web":return function(e){switch(e){case"Opera":case"Opera TV":case"Opera Android":return l+"opera.svg";case"Chrome":case"Chrome Android":return l+"chrome.svg";case"Firefox":case"Firefox Android":return l+"firefox.svg";case"Safari":case"Safari iPad":case"Safari iPhone":return l+"safari.svg";case"Edge Chromium":case"Edge Chromium Android":case"Edge Chromium iPad":case"Edge Chromium iPhone":return l+"edgechromium.svg";case"Edge":return l+"edge.svg";case"Internet Explorer":return l+"msie.svg";default:return l+"html5.svg"}}(e.Name||e.DeviceName);default:if(null===(t=e.Capabilities)||void 0===t?void 0:t.IconUrl)try{return new URL(e.Capabilities.IconUrl).toString()}catch(t){console.error("[getDeviceIcon] device capabilities has invalid IconUrl",e,t)}return l+"other.svg"}},getLibraryIcon:i,getItemTypeIcon:o}}}]);