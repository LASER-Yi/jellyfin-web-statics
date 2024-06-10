"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[97200,96084,72521,40367],{72521:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}}),n(29305),n(32733),n(78557),n(90076),n(95021),n(93062),n(97747);var a=n(34789),r=n(79754),i=n(46782),l=n(46345),o=n(9482),c=n(47629),s=(n(10353),n(15453),n(98959),(a.A.tv||a.A.xboxOne)&&window.confirm?function(e){"string"==typeof e&&(e={label:"",text:e});var t=(e.label||"").replaceAll("<br/>","\n"),n=prompt(t,e.text||"");return n?Promise.resolve(n):Promise.reject(n)}:function(e){return"string"==typeof e&&(e={title:"",text:e}),function(e){var t={removeOnClose:!0,scrollY:!1};i.A.tv&&(t.size="fullscreen");var n,a=r.default.createDialog(t);return a.classList.add("formDialog"),a.innerHTML=o.Ay.translateHtml('<div class="formDialogHeader"> <button is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1" title="${ButtonBack}"> <span class="material-icons arrow_back" aria-hidden="true"></span> </button> <h3 class="formDialogHeaderTitle"></h3> </div> <div class="formDialogContent smoothScrollY"> <div class="dialogContentInner dialog-content-centered" style="padding-top:2em"> <form> <div class="inputContainer"> <input is="emby-input" type="text" id="txtInput" label=""/> <div class="fieldDescription"></div> </div> <div class="formDialogFooter"> <button is="emby-button" type="submit" class="raised btnSubmit block formDialogFooterItem button-submit"> <span class="submitText"></span> </button> </div> </form> </div> </div> ',"core"),i.A.tv?l.default.centerFocus.on(a.querySelector(".formDialogContent"),!1):(a.querySelector(".dialogContentInner").classList.add("dialogContentInner-mini"),a.classList.add("dialog-fullscreen-lowres")),a.querySelector(".btnCancel").addEventListener("click",(function(){r.default.close(a)})),a.querySelector(".formDialogHeaderTitle").innerText=e.title||"",e.description?a.querySelector(".fieldDescription").innerText=e.description:a.querySelector(".fieldDescription").classList.add("hide"),function(e,t){var n=e.querySelector("#txtInput");n.label?n.label(t.label||""):n.setAttribute("label",t.label||""),n.value=t.value||""}(a,e),a.querySelector("form").addEventListener("submit",(function(e){return n=a.querySelector("#txtInput").value,e.preventDefault(),e.stopPropagation(),setTimeout((function(){r.default.close(a)}),300),!1})),a.querySelector(".submitText").innerText=e.confirmText||o.Ay.translate("ButtonOk"),a.style.minWidth="".concat(Math.min(400,c.Ay.getWindowSize().innerWidth-50),"px"),r.default.open(a).then((function(){return i.A.tv&&l.default.centerFocus.off(a.querySelector(".formDialogContent"),!1),n||Promise.reject()}))}(e)})},11401:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var a=n(62540),r=n(36657),i=n(50117),l=n(63696),o=n(22696),c=n.n(o),s=n(9482),u=n(73233),d=n(98320),v=n(96268);function f(e){void 0===e&&(e=0);var t=0,n=e%1;return n&&(t=Math.floor(60*n)),d.Ay.getDisplayTime(new Date(2e3,1,1,e,t,0,0))}var m=function(e){var t=e.index,n=e.DayOfWeek,r=e.StartHour,i=e.EndHour;return(0,a.jsxs)("div",{className:"liSchedule listItem","data-day":n,"data-start":r,"data-end":i,children:[(0,a.jsxs)("div",{className:"listItemBody two-line",children:[(0,a.jsx)("h3",{className:"listItemBodyText",children:s.Ay.translate(n)}),(0,a.jsx)("div",{className:"listItemBodyText secondary",children:f(r)+" - "+f(i)})]}),(0,a.jsx)(v.A,{is:"paper-icon-button-light",className:"btnDelete listItemButton",title:"Delete",icon:"delete",dataIndex:t})]})},b=function(e){var t=e.tag,n=e.tagType;return(0,a.jsx)("div",{className:"paperList",children:(0,a.jsxs)("div",{className:"listItem",children:[(0,a.jsx)("div",{className:"listItemBody",children:(0,a.jsx)("h3",{className:"listItemBodyText",children:t})}),(0,a.jsx)(v.A,{is:"paper-icon-button-light",className:"".concat(n," btnDeleteTag listItemButton"),title:"Delete",icon:"delete",dataTag:t})]})})},h=n(76165),y=n(85757),p=n(87159),g=n(56869),A=n(50764),x=n(95154),S=n(14948),k=n(70749),T=n(7397),N=n(72521),I=n(86191),C=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var a,r,i=n.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(a=i.next()).done;)l.push(a.value)}catch(e){r={error:e}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}return l},w=function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],a=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&a>=e.length&&(e=void 0),{value:e&&e[a++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},j=function(){var e=C((0,l.useState)(""),2),t=e[0],o=e[1],d=C((0,l.useState)([]),2),v=d[0],f=d[1],j=C((0,l.useState)([]),2),D=j[0],P=j[1],L=C((0,l.useState)([]),2),E=L[0],B=L[1],H=C((0,l.useState)([]),2),q=H[0],M=H[1],_=C((0,l.useState)([]),2),V=_[0],U=_[1],O=(0,l.useRef)(null),R=(0,l.useCallback)((function(e){for(var t,n=[],a=0,r=e.length;a<r;a++){if(t=e[a],n.length){var i=n[n.length-1];if(i.Value===t.Value){i.Name+="/"+t.Name;continue}}n.push({Name:t.Name,Value:t.Value})}f(n)}),[]),W=(0,l.useCallback)((function(e){var t,n,a,i,l=O.current;if(l){var o=[{name:s.Ay.translate("Books"),value:r.d.Book},{name:s.Ay.translate("Channels"),value:r.d.ChannelContent},{name:s.Ay.translate("LiveTV"),value:r.d.LiveTvChannel},{name:s.Ay.translate("Movies"),value:r.d.Movie},{name:s.Ay.translate("Music"),value:r.d.Music},{name:s.Ay.translate("Trailers"),value:r.d.Trailer},{name:s.Ay.translate("Shows"),value:r.d.Series}],c=[];try{for(var u=w(o),d=u.next();!d.done;d=u.next()){var v=d.value,f=-1!=(null===(i=null===(a=e.Policy)||void 0===a?void 0:a.BlockUnratedItems)||void 0===i?void 0:i.indexOf(v.value))?' checked="checked"':"";c.push({value:v.value,name:v.name,checkedAttribute:f})}}catch(e){t={error:e}}finally{try{d&&!d.done&&(n=u.return)&&n.call(u)}finally{if(t)throw t.error}}P(c),l.querySelector(".blockUnratedItems").dispatchEvent(new CustomEvent("create"))}else console.error("Unexpected null reference")}),[]),F=(0,l.useCallback)((function(e){var t,n,a=O.current;if(a){M(e);var r=a.querySelector(".allowedTags"),i=function(t){t.addEventListener("click",(function(){var n=t.getAttribute("data-tag"),a=e.filter((function(e){return e!==n}));F(a)}))};try{for(var l=w(r.querySelectorAll(".btnDeleteTag")),o=l.next();!o.done;o=l.next())i(o.value)}catch(e){t={error:e}}finally{try{o&&!o.done&&(n=l.return)&&n.call(l)}finally{if(t)throw t.error}}}else console.error("Unexpected null reference")}),[]),J=(0,l.useCallback)((function(e){var t,n,a=O.current;if(a){U(e);var r=a.querySelector(".blockedTags"),i=function(t){t.addEventListener("click",(function(){var n=t.getAttribute("data-tag"),a=e.filter((function(e){return e!==n}));J(a)}))};try{for(var l=w(r.querySelectorAll(".btnDeleteTag")),o=l.next();!o.done;o=l.next())i(o.value)}catch(e){t={error:e}}finally{try{o&&!o.done&&(n=l.return)&&n.call(l)}finally{if(t)throw t.error}}}else console.error("Unexpected null reference")}),[]),z=(0,l.useCallback)((function(e){var t,n,a=O.current;if(a){B(e);var r=a.querySelector(".accessScheduleList"),i=function(t){t.addEventListener("click",(function(){var n,a=parseInt(null!==(n=t.getAttribute("data-index"))&&void 0!==n?n:"0",10);e.splice(a,1);var r=e.filter((function(e,t){return t!=a}));z(r)}))};try{for(var l=w(r.querySelectorAll(".btnDelete")),o=l.next();!o.done;o=l.next())i(o.value)}catch(e){t={error:e}}finally{try{o&&!o.done&&(n=l.return)&&n.call(l)}finally{if(t)throw t.error}}}else console.error("Unexpected null reference")}),[]),K=(0,l.useCallback)((function(e,t){var n,a,r,i,l,c=O.current;if(c){o(e.Name||""),u.default.setTitle(e.Name),W(e),F((null===(n=e.Policy)||void 0===n?void 0:n.AllowedTags)||[]),J((null===(a=e.Policy)||void 0===a?void 0:a.BlockedTags)||[]),R(t);var s="";(null===(r=e.Policy)||void 0===r?void 0:r.MaxParentalRating)&&t.forEach((function(t){var n;t.Value&&(null===(n=e.Policy)||void 0===n?void 0:n.MaxParentalRating)&&e.Policy.MaxParentalRating>=t.Value&&(s="".concat(t.Value))})),c.querySelector("#selectMaxParentalRating").value=String(s),(null===(i=e.Policy)||void 0===i?void 0:i.IsAdministrator)?c.querySelector(".accessScheduleSection").classList.add("hide"):c.querySelector(".accessScheduleSection").classList.remove("hide"),z((null===(l=e.Policy)||void 0===l?void 0:l.AccessSchedules)||[]),g.Ay.hide()}else console.error("Unexpected null reference")}),[F,J,W,R,z]),Y=(0,l.useCallback)((function(){g.Ay.show();var e=(0,x.E)("userId"),t=window.ApiClient.getUser(e),n=window.ApiClient.getParentalRatings();Promise.all([t,n]).then((function(e){K(e[0],e[1])})).catch((function(e){console.error("[userparentalcontrol] failed to load data",e)}))}),[K]);return(0,l.useEffect)((function(){var e=O.current;if(e){Y();var t=function(){return Array.prototype.map.call(e.querySelectorAll(".liSchedule"),(function(e){return{DayOfWeek:e.getAttribute("data-day"),StartHour:e.getAttribute("data-start"),EndHour:e.getAttribute("data-end")}}))},a=function(){return Array.prototype.map.call(e.querySelectorAll(".allowedTag"),(function(e){return e.getAttribute("data-tag")}))},r=function(){return Array.prototype.map.call(e.querySelectorAll(".blockedTag"),(function(e){return e.getAttribute("data-tag")}))},l=function(e,t,n,a,r){return function(r){var i=r.Id,l=r.Policy;if(!i||!l)throw new Error("Unexpected null user id or policy");var o=parseInt(e.querySelector("#selectMaxParentalRating").value,10);l.MaxParentalRating=Number.isNaN(o)?null:o,l.BlockUnratedItems=Array.prototype.filter.call(e.querySelectorAll(".chkUnratedItem"),(function(e){return e.checked})).map((function(e){return e.getAttribute("data-itemtype")})),l.AccessSchedules=t(),l.AllowedTags=n(),l.BlockedTags=a(),I.A.getCurrentApiClientAsync().then((function(e){return e.updateUserPolicy(i,l)})).then((function(){return g.Ay.hide(),void(0,A.A)(s.Ay.translate("SettingsSaved"))})).catch((function(e){console.error("[userparentalcontrol] failed to update user policy",e)}))}}(e,t,a,r);e.querySelector("#btnAddSchedule").addEventListener("click",(function(){var e,a;e={Id:0,UserId:"",DayOfWeek:i.H.Sunday,StartHour:0,EndHour:0},a=-1,e=e||{},n.e(52361).then(n.bind(n,52361)).then((function(n){n.default.show({schedule:e}).then((function(e){var n=t();-1==a&&(a=n.length),n[a]=e,z(n)})).catch((function(){}))})).catch((function(e){console.error("[userparentalcontrol] failed to load access schedule",e)}))})),e.querySelector("#btnAddAllowedTag").addEventListener("click",(function(){(0,N.default)({label:s.Ay.translate("LabelTag")}).then((function(e){var t=a();-1==t.indexOf(e)&&(t.push(e),F(t))})).catch((function(){}))})),e.querySelector("#btnAddBlockedTag").addEventListener("click",(function(){(0,N.default)({label:s.Ay.translate("LabelTag")}).then((function(e){var t=r();-1==t.indexOf(e)&&(t.push(e),J(t))})).catch((function(){}))})),e.querySelector(".userParentalControlForm").addEventListener("submit",(function(e){g.Ay.show();var t=(0,x.E)("userId");return window.ApiClient.getUser(t).then((function(e){l(e)})).catch((function(e){console.error("[userparentalcontrol] failed to fetch user",e)})),e.preventDefault(),e.stopPropagation(),!1}))}else console.error("Unexpected null reference")}),[F,J,Y,z]),(0,a.jsx)(T.A,{id:"userParentalControlPage",className:"mainAnimatedPage type-interior",children:(0,a.jsxs)("div",{ref:O,className:"content-primary",children:[(0,a.jsx)("div",{className:"verticalSection",children:(0,a.jsx)(y.A,{title:t,url:"https://jellyfin.org/docs/general/server/users/"})}),(0,a.jsx)(p.A,{activeTab:"userparentalcontrol"}),(0,a.jsxs)("form",{className:"userParentalControlForm",children:[(0,a.jsxs)("div",{className:"selectContainer",children:[(0,a.jsx)(k.A,{id:"selectMaxParentalRating",label:"LabelMaxParentalRating",children:function(){var e,t,n="";n+="<option value=''></option>";try{for(var a=w(v),r=a.next();!r.done;r=a.next()){var i=r.value;n+="<option value='".concat(i.Value,"'>").concat(c()(i.Name),"</option>")}}catch(t){e={error:t}}finally{try{r&&!r.done&&(t=a.return)&&t.call(a)}finally{if(e)throw e.error}}return n}()}),(0,a.jsx)("div",{className:"fieldDescription",children:s.Ay.translate("MaxParentalRatingHelp")})]}),(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:"blockUnratedItems",children:[(0,a.jsx)("h3",{className:"checkboxListLabel",children:s.Ay.translate("HeaderBlockItemsWithNoRating")}),(0,a.jsx)("div",{className:"checkboxList paperList",style:{padding:".5em 1em"},children:D.map((function(e){return(0,a.jsx)(S.A,{className:"chkUnratedItem",itemType:e.value,itemName:e.name,itemCheckedAttribute:e.checkedAttribute},e.value)}))})]})}),(0,a.jsx)("br",{}),(0,a.jsxs)("div",{className:"verticalSection",style:{marginBottom:"2em"},children:[(0,a.jsx)(y.A,{SectionClassName:"detailSectionHeader",title:s.Ay.translate("LabelAllowContentWithTags"),isBtnVisible:!0,btnId:"btnAddAllowedTag",btnClassName:"fab submit sectionTitleButton",btnTitle:"Add",btnIcon:"add",isLinkVisible:!1}),(0,a.jsx)("div",{className:"fieldDescription",children:s.Ay.translate("AllowContentWithTagsHelp")}),(0,a.jsx)("div",{className:"allowedTags",style:{marginTop:".5em"},children:null==q?void 0:q.map((function(e){return(0,a.jsx)(b,{tag:e,tagType:"allowedTag"},e)}))})]}),(0,a.jsxs)("div",{className:"verticalSection",style:{marginBottom:"2em"},children:[(0,a.jsx)(y.A,{SectionClassName:"detailSectionHeader",title:s.Ay.translate("LabelBlockContentWithTags"),isBtnVisible:!0,btnId:"btnAddBlockedTag",btnClassName:"fab submit sectionTitleButton",btnTitle:"Add",btnIcon:"add",isLinkVisible:!1}),(0,a.jsx)("div",{className:"fieldDescription",children:s.Ay.translate("BlockContentWithTagsHelp")}),(0,a.jsx)("div",{className:"blockedTags",style:{marginTop:".5em"},children:V.map((function(e){return(0,a.jsx)(b,{tag:e,tagType:"blockedTag"},e)}))})]}),(0,a.jsxs)("div",{className:"accessScheduleSection verticalSection",style:{marginBottom:"2em"},children:[(0,a.jsx)(y.A,{title:s.Ay.translate("HeaderAccessSchedule"),isBtnVisible:!0,btnId:"btnAddSchedule",btnClassName:"fab submit sectionTitleButton",btnTitle:"Add",btnIcon:"add",isLinkVisible:!1}),(0,a.jsx)("p",{children:s.Ay.translate("HeaderAccessScheduleHelp")}),(0,a.jsx)("div",{className:"accessScheduleList paperList",children:E.map((function(e,t){return(0,a.jsx)(m,{index:t,DayOfWeek:e.DayOfWeek,StartHour:e.StartHour,EndHour:e.EndHour},e.Id)}))})]}),(0,a.jsx)("div",{children:(0,a.jsx)(h.A,{type:"submit",className:"raised button-submit block",title:"Save"})})]})]})})}},7397:function(e,t,n){var a=n(62540),r=n(63696),i=n(62156);t.A=function(e){var t=e.children,n=e.id,l=e.className,o=void 0===l?"":l,c=e.title,s=e.isBackButtonEnabled,u=void 0===s||s,d=e.isMenuButtonEnabled,v=void 0!==d&&d,f=e.isNowPlayingBarEnabled,m=void 0===f||f,b=e.isThemeMediaSupported,h=void 0!==b&&b,y=e.backDropType,p=(0,r.useRef)(null);return(0,r.useEffect)((function(){i.A.hideView()}),[]),(0,r.useEffect)((function(){var e,t,n,a,r={bubbles:!0,cancelable:!1,detail:{isRestored:!1,options:{enableMediaControl:m,supportsThemeMedia:h}}};null===(e=p.current)||void 0===e||e.dispatchEvent(new CustomEvent("viewbeforeshow",r)),null===(t=p.current)||void 0===t||t.dispatchEvent(new CustomEvent("pagebeforeshow",r)),null===(n=p.current)||void 0===n||n.dispatchEvent(new CustomEvent("viewshow",r)),null===(a=p.current)||void 0===a||a.dispatchEvent(new CustomEvent("pageshow",r))}),[p,m,h]),(0,a.jsx)("div",{ref:p,id:n,"data-role":"page",className:"page ".concat(o),"data-title":c,"data-backbutton":u,"data-menubutton":v,"data-backdroptype":y,children:t})}},87159:function(e,t,n){var a=n(62540),r=(n(63696),n(9482)),i=function(e){return{__html:'<a href="#"\n        is="emby-linkbutton"\n        data-role="button"\n        class="'.concat("useredit"===e?"ui-btn-active":"",'"\n        onclick="Dashboard.navigate(\'/dashboard/users/profile\', true);">\n        ').concat(r.Ay.translate("Profile"),'\n    </a>\n    <a href="#"\n        is="emby-linkbutton"\n        data-role="button"\n        class="').concat("userlibraryaccess"===e?"ui-btn-active":"",'"\n        onclick="Dashboard.navigate(\'/dashboard/users/access\', true);">\n        ').concat(r.Ay.translate("TabAccess"),'\n    </a>\n    <a href="#"\n        is="emby-linkbutton"\n        data-role="button"\n        class="').concat("userparentalcontrol"===e?"ui-btn-active":"",'"\n        onclick="Dashboard.navigate(\'/dashboard/users/parentalcontrol\', true);">\n        ').concat(r.Ay.translate("TabParentalControl"),'\n    </a>\n    <a href="#"\n        is="emby-linkbutton"\n        data-role="button"\n        class="').concat("userpassword"===e?"ui-btn-active":"",'"\n        onclick="Dashboard.navigate(\'/dashboard/users/password\', true);">\n        ').concat(r.Ay.translate("HeaderPassword"),"\n    </a>")}};t.A=function(e){var t=e.activeTab;return(0,a.jsx)("div",{"data-role":"controlgroup","data-type":"horizontal",className:"localnav",dangerouslySetInnerHTML:i(t)})}},76165:function(e,t,n){var a=n(62540),r=(n(63696),n(9482)),i=function(e){var t=e.type,n=e.id,a=e.className,r=e.title,i=e.leftIcon,l=e.rightIcon;return{__html:'<button\n        is="emby-button"\n        type="'.concat(t,'"\n        ').concat(n,'\n        class="').concat(a,'"\n        >\n        ').concat(i,"\n        <span>").concat(r,"</span>\n        ").concat(l,"\n    </button>")}};t.A=function(e){var t=e.type,n=e.id,l=e.className,o=e.title,c=e.leftIcon,s=e.rightIcon;return(0,a.jsx)("div",{dangerouslySetInnerHTML:i({type:t,id:n?'id="'.concat(n,'"'):"",className:l,title:r.Ay.translate(o),leftIcon:c?'<span class="material-icons '.concat(c,'" aria-hidden="true"></span>'):"",rightIcon:s?'<span class="material-icons '.concat(s,'" aria-hidden="true"></span>'):""})})}},14948:function(e,t,n){var a=n(62540),r=n(22696),i=n.n(r),l=(n(63696),n(9482)),o=function(e){var t=e.labelClassName,n=e.className,a=e.id,r=e.dataFilter,i=e.dataItemType,l=e.dataId,o=e.checkedAttribute,c=e.renderContent;return{__html:"<label ".concat(t,'>\n        <input\n            is="emby-checkbox"\n            type="checkbox"\n            class="').concat(n,'"\n            ').concat(a,"\n            ").concat(r,"\n            ").concat(i,"\n            ").concat(l,"\n            ").concat(o,"\n        />\n        ").concat(c,"\n    </label>")}};t.A=function(e){var t=e.labelClassName,n=e.className,r=e.elementId,c=e.dataFilter,s=e.itemType,u=e.itemId,d=e.itemAppName,v=e.itemCheckedAttribute,f=e.itemName,m=e.title,b=d?"- ".concat(d):"",h=f?"<span>".concat(i()(f||"")," ").concat(b,"</span>"):"<span>".concat(l.Ay.translate(m),"</span>");return(0,a.jsx)("div",{className:"sectioncheckbox",dangerouslySetInnerHTML:o({labelClassName:t?"class='".concat(t,"'"):"",className:n,id:r?"id='".concat(r,"'"):"",dataFilter:c?"data-filter='".concat(c,"'"):"",dataItemType:s?"data-itemtype='".concat(s,"'"):"",dataId:u?"data-id='".concat(u,"'"):"",checkedAttribute:v||"",renderContent:h})})}},96268:function(e,t,n){var a=n(62540),r=(n(63696),n(9482)),i=function(e){var t=e.is,n=e.id,a=e.className,r=e.title,i=e.icon,l=e.dataIndex,o=e.dataTag,c=e.dataProfileid;return{__html:'<button\n        is="'.concat(t,'"\n        type="button"\n        ').concat(n,'\n        class="').concat(a,'"\n        ').concat(r,"\n        ").concat(l,"\n        ").concat(o,"\n        ").concat(c,'\n    >\n        <span class="material-icons ').concat(i,'" aria-hidden="true"></span>\n    </button>')}};t.A=function(e){var t=e.is,n=e.id,l=e.className,o=e.title,c=e.icon,s=e.dataIndex,u=e.dataTag,d=e.dataProfileid;return(0,a.jsx)("div",{dangerouslySetInnerHTML:i({is:t,id:n?'id="'.concat(n,'"'):"",className:l,title:o?'title="'.concat(r.Ay.translate(o),'"'):"",icon:c,dataIndex:s?'data-index="'.concat(s,'"'):"",dataTag:u?'data-tag="'.concat(u,'"'):"",dataProfileid:d?'data-profileid="'.concat(d,'"'):""})})}},85757:function(e,t,n){n.d(t,{A:function(){return c}});var a=n(62540),r=(n(63696),n(96268)),i=n(9482),l=function(e){var t=e.className,n=e.title,a=e.href;return{__html:'<a\n        is="emby-linkbutton"\n        rel="noopener noreferrer"\n        class="'.concat(t,'"\n        target="_blank"\n        href="').concat(a,'"\n        >\n        ').concat(n,"\n    </a>")}},o=function(e){var t=e.className,n=e.title,r=e.url;return(0,a.jsx)("div",{dangerouslySetInnerHTML:l({className:t,title:i.Ay.translate(n),href:r})})},c=function(e){var t=e.SectionClassName,n=e.title,i=e.isBtnVisible,l=void 0!==i&&i,c=e.btnId,s=e.btnClassName,u=e.btnTitle,d=e.btnIcon,v=e.isLinkVisible,f=void 0===v||v,m=e.url;return(0,a.jsxs)("div",{className:"".concat(t," sectionTitleContainer flex align-items-center"),children:[(0,a.jsx)("h2",{className:"sectionTitle",children:n}),l&&(0,a.jsx)(r.A,{is:"emby-button",id:c,className:s,title:u,icon:d}),f&&(0,a.jsx)(o,{className:"raised button-alt headerHelpButton",title:"Help",url:m})]})}},70749:function(e,t,n){var a=n(62540),r=(n(63696),n(9482)),i=function(e){var t=e.name,n=e.id,a=e.required,r=e.label,i=e.option;return{__html:'<select\n        is="emby-select"\n        '.concat(t,'\n        id="').concat(n,'"\n        ').concat(a,'\n        label="').concat(r,'"\n    >\n        ').concat(i,"\n    </select>")}};t.A=function(e){var t=e.name,n=e.id,l=e.required,o=e.label,c=e.children;return(0,a.jsx)("div",{dangerouslySetInnerHTML:i({name:t?"name='".concat(t,"'"):"",id:n,required:l?"required='".concat(l,"'"):"",label:r.Ay.translate(o),option:c})})}},40782:function(e,t,n){var a=n(11444),r="assets/img/devices/";t.Ay={getDeviceIcon:function(e){var t;switch(e.AppName||e.Client){case"Samsung Smart TV":return r+"samsung.svg";case"Xbox One":return r+"xbox.svg";case"Sony PS4":return r+"playstation.svg";case"Kodi":case"Kodi JellyCon":return r+"kodi.svg";case"Jellyfin Android":case"AndroidTV":case"Android TV":return r+"android.svg";case"Jellyfin Mobile (iOS)":case"Jellyfin Mobile (iPadOS)":case"Jellyfin iOS":case"Infuse":return r+"apple.svg";case"Home Assistant":return r+"home-assistant.svg";case"Jellyfin Roku":return r+"roku.svg";case"Finamp":return r+"finamp.svg";case"Jellyfin Web":return function(e){switch(e){case"Opera":case"Opera TV":case"Opera Android":return r+"opera.svg";case"Chrome":case"Chrome Android":return r+"chrome.svg";case"Firefox":case"Firefox Android":return r+"firefox.svg";case"Safari":case"Safari iPad":case"Safari iPhone":return r+"safari.svg";case"Edge Chromium":case"Edge Chromium Android":case"Edge Chromium iPad":case"Edge Chromium iPhone":return r+"edgechromium.svg";case"Edge":return r+"edge.svg";case"Internet Explorer":return r+"msie.svg";default:return r+"html5.svg"}}(e.Name||e.DeviceName);default:if(null===(t=e.Capabilities)||void 0===t?void 0:t.IconUrl)try{return new URL(e.Capabilities.IconUrl).toString()}catch(t){console.error("[getDeviceIcon] device capabilities has invalid IconUrl",e,t)}return r+"other.svg"}},getLibraryIcon:function(e){switch(e){case"movies":return"video_library";case"music":return"library_music";case"photos":case"homevideos":return"photo_library";case"livetv":return"live_tv";case"tvshows":return"tv";case"trailers":return"local_movies";case"musicvideos":return"music_video";case"books":return"library_books";case"channels":return"videocam";case"playlists":return"view_list";default:return"folder"}},getItemTypeIcon:function(e){switch(e){case a.D.MusicAlbum:return"album";case a.D.MusicArtist:case a.D.Person:return"person";case a.D.Audio:return"audiotrack";case a.D.Movie:return"movie";case a.D.Episode:case a.D.Series:return"tv";case a.D.Program:return"live_tv";case a.D.Book:return"book";case a.D.Folder:return"folder";case a.D.BoxSet:return"collections";case a.D.Playlist:return"view_list";case a.D.Photo:return"photo";case a.D.PhotoAlbum:return"photo_album";default:return"folder"}}}}}]);