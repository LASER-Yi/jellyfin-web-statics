"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3895],{4007:function(e,t,n){var a=n(24246),r=n(44614),l=function(e){var t=e.type,n=e.className,a=e.title;return{__html:'<button\n        is="emby-button"\n        type="'.concat(t,'"\n        class="').concat(n,'"\n        >\n        <span>').concat(a,"</span>\n    </button>")}};t.Z=function(e){var t=e.type,n=e.className,c=e.title;return(0,a.jsx)("div",{dangerouslySetInnerHTML:l({type:t,className:n,title:r.ZP.translate(c)})})}},56883:function(e,t,n){var a=n(24246),r=function(e){var t=e.className,n=e.Name,a=e.dataAttributes,r=e.AppName,l=e.checkedAttribute;return{__html:'<label>\n        <input\n            type="checkbox"\n            is="emby-checkbox"\n            class="'.concat(t,'"\n            ').concat(a," ").concat(l,"\n        />\n        <span>").concat(n," ").concat(r,"</span>\n    </label>")}};t.Z=function(e){var t=e.className,n=e.Name,l=e.Id,c=e.ItemType,s=e.AppName,i=e.checkedAttribute;return(0,a.jsx)("div",{className:"sectioncheckbox",dangerouslySetInnerHTML:r({className:t,Name:n,dataAttributes:c?"data-itemtype='".concat(c,"'"):"data-id='".concat(l,"'"),AppName:s?"- ".concat(s):"",checkedAttribute:i})})}},44243:function(e,t,n){var a=n(24246),r=n(44614),l=function(e){return{__html:'<a href="#"\n        is="emby-linkbutton"\n        data-role="button"\n        class="'.concat("useredit"===e?"ui-btn-active":"",'"\n        onclick="Dashboard.navigate(\'useredit.html\', true);">\n        ').concat(r.ZP.translate("Profile"),'\n    </a>\n    <a href="#"\n        is="emby-linkbutton"\n        data-role="button"\n        class="').concat("userlibraryaccess"===e?"ui-btn-active":"",'"\n        onclick="Dashboard.navigate(\'userlibraryaccess.html\', true);">\n        ').concat(r.ZP.translate("TabAccess"),'\n    </a>\n    <a href="#"\n        is="emby-linkbutton"\n        data-role="button"\n        class="').concat("userparentalcontrol"===e?"ui-btn-active":"",'"\n        onclick="Dashboard.navigate(\'userparentalcontrol.html\', true);">\n        ').concat(r.ZP.translate("TabParentalControl"),'\n    </a>\n    <a href="#"\n        is="emby-linkbutton"\n        data-role="button"\n        class="').concat("userpassword"===e?"ui-btn-active":"",'"\n        onclick="Dashboard.navigate(\'userpassword.html\', true);">\n        ').concat(r.ZP.translate("HeaderPassword"),"\n    </a>")}};t.Z=function(e){var t=e.activeTab;return(0,a.jsx)("div",{"data-role":"controlgroup","data-type":"horizontal",className:"localnav",dangerouslySetInnerHTML:l(t)})}},62269:function(e,t,n){var a=n(24246),r=n(44614),l=function(e){var t=e.className,n=e.title,a=e.icon;return{__html:'<button\n        is="emby-button"\n        type="button"\n        class="'.concat(t,'"\n        style="margin-left:1em;"\n        title="').concat(n,'"\n    >\n        <span class="material-icons ').concat(a,'" aria-hidden="true"></span>\n    </button>')}};t.Z=function(e){var t=e.className,n=e.title,c=e.icon;return(0,a.jsx)("div",{dangerouslySetInnerHTML:l({className:t,title:r.ZP.translate(n),icon:c})})}},45754:function(e,t,n){var a=n(24246),r=n(44614),l=function(e){var t=e.className,n=e.title,a=e.href;return{__html:'<a\n        is="emby-linkbutton"\n        rel="noopener noreferrer"\n        class="'.concat(t,'"\n        target="_blank"\n        href="').concat(a,'"\n        >\n        ').concat(n,"\n    </a>")}};t.Z=function(e){var t=e.className,n=e.title,c=e.url;return(0,a.jsx)("div",{dangerouslySetInnerHTML:l({className:t,title:r.ZP.translate(n),href:c})})}},38902:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var a=n(24246),r=n(47584),l=n(27378),c=n(44614),s=n(3319),i=n(86628),o=n(28469),u=function(){return u=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},u.apply(this,arguments)},d=function(e){return{__html:"<button\n        type='button'\n        is='paper-icon-button-light'\n        class='btnDelete listItemButton'\n        data-index='".concat(e,"'\n    >\n        <span class='material-icons delete' aria-hidden='true' />\n    </button>")}};function m(e){void 0===e&&(e=0);var t=0,n=e%1;return n&&(t=Math.floor(60*n)),o.ZP.getDisplayTime(new Date(2e3,1,1,e,t,0,0))}var f=function(e){var t=e.index,n=e.DayOfWeek,r=e.StartHour,l=e.EndHour;return(0,a.jsxs)("div",u({className:"liSchedule listItem","data-day":n,"data-start":r,"data-end":l},{children:[(0,a.jsxs)("div",u({className:"listItemBody two-line"},{children:[(0,a.jsx)("h3",u({className:"listItemBodyText"},{children:c.ZP.translate(n)})),(0,a.jsx)("div",u({className:"listItemBodyText secondary"},{children:m(r)+" - "+m(l)}))]})),(0,a.jsx)("div",{dangerouslySetInnerHTML:d(t)})]}))},h=function(){return h=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},h.apply(this,arguments)},v=function(e){return{__html:"<button\n        type='button'\n        is='paper-icon-button-light'\n        class='blockedTag btnDeleteTag listItemButton'\n        data-tag='".concat(e,"'\n    >\n        <span class='material-icons delete' aria-hidden='true' />\n    </button>")}},y=function(e){var t=e.tag;return(0,a.jsx)("div",h({className:"paperList"},{children:(0,a.jsxs)("div",h({className:"listItem"},{children:[(0,a.jsx)("div",h({className:"listItemBody"},{children:(0,a.jsx)("h3",h({className:"listItemBodyText"},{children:t}))})),(0,a.jsx)("div",{dangerouslySetInnerHTML:v(t)})]}))}))},b=n(4007),p=n(56883),x=n(62269),g=n(45754),S=function(e){var t=e.className,n=e.label,a=e.option;return{__html:'<select\n        class="'.concat(t,'"\n        is="emby-select"\n        label="').concat(n,"\"\n    >\n        <option value=''></option>\n        ").concat(a,"\n    </select>")}},N=function(e){var t=e.className,n=e.label,r=e.parentalRatings;return(0,a.jsx)("div",{dangerouslySetInnerHTML:S({className:t,label:c.ZP.translate(n),option:function(){var e,t,n="";try{for(var a=function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],a=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&a>=e.length&&(e=void 0),{value:e&&e[a++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}(r),l=a.next();!l.done;l=a.next()){var c=l.value;n+="<option value='".concat(c.Value,"'>").concat(c.Name,"</option>")}}catch(t){e={error:t}}finally{try{l&&!l.done&&(t=a.return)&&t.call(a)}finally{if(e)throw e.error}}return n}()})})},k=n(44243),P=n(56705),j=n(25152),T=function(){return T=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},T.apply(this,arguments)},A=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var a,r,l=n.call(e),c=[];try{for(;(void 0===t||t-- >0)&&!(a=l.next()).done;)c.push(a.value)}catch(e){r={error:e}}finally{try{a&&!a.done&&(n=l.return)&&n.call(l)}finally{if(r)throw r.error}}return c},I=function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],a=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&a>=e.length&&(e=void 0),{value:e&&e[a++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},Z=function(){var e=A((0,l.useState)(""),2),t=e[0],o=e[1],u=A((0,l.useState)([]),2),d=u[0],m=u[1],h=A((0,l.useState)([]),2),v=h[0],S=h[1],Z=A((0,l.useState)([]),2),w=Z[0],L=Z[1],H=A((0,l.useState)([]),2),C=H[0],B=H[1],M=(0,l.useRef)(null),D=(0,l.useCallback)((function(e){for(var t,n=[],a=0,r=e.length;a<r;a++){if(t=e[a],n.length){var l=n[n.length-1];if(l.Value===t.Value){l.Name+="/"+t.Name;continue}}n.push({Name:t.Name,Value:t.Value})}m(n)}),[]),O=(0,l.useCallback)((function(e){var t,n,a=M.current;if(a){var r=[{name:c.ZP.translate("Books"),value:"Book"},{name:c.ZP.translate("Channels"),value:"ChannelContent"},{name:c.ZP.translate("LiveTV"),value:"LiveTvChannel"},{name:c.ZP.translate("Movies"),value:"Movie"},{name:c.ZP.translate("Music"),value:"Music"},{name:c.ZP.translate("Trailers"),value:"Trailer"},{name:c.ZP.translate("Shows"),value:"Series"}],l=[];try{for(var s=I(r),i=s.next();!i.done;i=s.next()){var o=i.value,u=-1!=e.Policy.BlockUnratedItems.indexOf(o.value)?' checked="checked"':"";l.push({value:o.value,name:o.name,checkedAttribute:u})}}catch(e){t={error:e}}finally{try{i&&!i.done&&(n=s.return)&&n.call(s)}finally{if(t)throw t.error}}S(l),a.querySelector(".blockUnratedItems").dispatchEvent(new CustomEvent("create"))}else console.error("Unexpected null reference")}),[]),E=(0,l.useCallback)((function(e){var t,n,a=M.current;if(a){B(e);var r=a.querySelector(".blockedTags"),l=function(t){t.addEventListener("click",(function(){var n=t.getAttribute("data-tag"),a=e.filter((function(e){return e!=n}));E(a)}))};try{for(var c=I(r.querySelectorAll(".btnDeleteTag")),s=c.next();!s.done;s=c.next())l(s.value)}catch(e){t={error:e}}finally{try{s&&!s.done&&(n=c.return)&&n.call(c)}finally{if(t)throw t.error}}}else console.error("Unexpected null reference")}),[]),U=(0,l.useCallback)((function(e){var t,n,a=M.current;if(a){L(e);var r=a.querySelector(".accessScheduleList"),l=function(t){t.addEventListener("click",(function(){var n=parseInt(t.getAttribute("data-index")||"0",10);e.splice(n,1);var a=e.filter((function(e){return e!=n}));U(a)}))};try{for(var c=I(r.querySelectorAll(".btnDelete")),s=c.next();!s.done;s=c.next())l(s.value)}catch(e){t={error:e}}finally{try{s&&!s.done&&(n=c.return)&&n.call(c)}finally{if(t)throw t.error}}}else console.error("Unexpected null reference")}),[]),_=(0,l.useCallback)((function(e,t){var n=M.current;if(n){o(e.Name),s.Z.setTitle(e.Name),O(e),E(e.Policy.BlockedTags),D(t);var a="";if(e.Policy.MaxParentalRating)for(var r=0,l=t.length;r<l;r++){var c=t[r];e.Policy.MaxParentalRating>=c.Value&&(a=c.Value)}n.querySelector(".selectMaxParentalRating").value=a,e.Policy.IsAdministrator?n.querySelector(".accessScheduleSection").classList.add("hide"):n.querySelector(".accessScheduleSection").classList.remove("hide"),U(e.Policy.AccessSchedules||[]),P.ZP.hide()}else console.error("Unexpected null reference")}),[E,O,D,U]),q=(0,l.useCallback)((function(){P.ZP.show();var e=i.appRouter.param("userId"),t=window.ApiClient.getUser(e),n=window.ApiClient.getParentalRatings();Promise.all([t,n]).then((function(e){_(e[0],e[1])}))}),[_]);return(0,l.useEffect)((function(){var e=M.current;if(e){q();var t=function(){return Array.prototype.map.call(e.querySelectorAll(".liSchedule"),(function(e){return{DayOfWeek:e.getAttribute("data-day"),StartHour:e.getAttribute("data-start"),EndHour:e.getAttribute("data-end")}}))},a=function(){return Array.prototype.map.call(e.querySelectorAll(".blockedTag"),(function(e){return e.getAttribute("data-tag")}))};e.querySelector(".btnAddSchedule").addEventListener("click",(function(){var e,a;e={Id:0,UserId:"",DayOfWeek:r.DynamicDayOfWeek.Sunday,StartHour:0,EndHour:0},a=-1,e=e||{},n.e(9969).then(n.bind(n,99969)).then((function(n){n.default.show({schedule:e}).then((function(e){var n=t();-1==a&&(a=n.length),n[a]=e,U(n)}))}))})),e.querySelector(".btnAddBlockedTag").addEventListener("click",(function(){n.e(8e3).then(n.bind(n,58e3)).then((function(e){(0,e.default)({label:c.ZP.translate("LabelTag")}).then((function(e){var t=a();-1==t.indexOf(e)&&(t.push(e),E(t))}))}))})),e.querySelector(".userParentalControlForm").addEventListener("submit",(function(n){P.ZP.show();var r=i.appRouter.param("userId");return window.ApiClient.getUser(r).then((function(n){!function(n){if(!n.Id)throw new Error("Unexpected null user.Id");if(!n.Policy)throw new Error("Unexpected null user.Policy");n.Policy.MaxParentalRating=parseInt(e.querySelector(".selectMaxParentalRating").value||"0",10)||null,n.Policy.BlockUnratedItems=Array.prototype.filter.call(e.querySelectorAll(".chkUnratedItem"),(function(e){return e.checked})).map((function(e){return e.getAttribute("data-itemtype")})),n.Policy.AccessSchedules=t(),n.Policy.BlockedTags=a(),window.ApiClient.updateUserPolicy(n.Id,n.Policy).then((function(){P.ZP.hide(),(0,j.Z)(c.ZP.translate("SettingsSaved"))}))}(n)})),n.preventDefault(),n.stopPropagation(),!1}))}else console.error("Unexpected null reference")}),[E,q,U]),(0,a.jsx)("div",T({ref:M},{children:(0,a.jsxs)("div",T({className:"content-primary"},{children:[(0,a.jsx)("div",T({className:"verticalSection"},{children:(0,a.jsxs)("div",T({className:"sectionTitleContainer flex align-items-center"},{children:[(0,a.jsx)("h2",T({className:"sectionTitle username"},{children:t})),(0,a.jsx)(g.Z,{className:"raised button-alt headerHelpButton",title:"Help",url:"https://docs.jellyfin.org/general/server/users/"})]}))})),(0,a.jsx)(k.Z,{activeTab:"userparentalcontrol"}),(0,a.jsxs)("form",T({className:"userParentalControlForm"},{children:[(0,a.jsxs)("div",T({className:"selectContainer"},{children:[(0,a.jsx)(N,{className:"selectMaxParentalRating",label:"LabelMaxParentalRating",parentalRatings:d}),(0,a.jsx)("div",T({className:"fieldDescription"},{children:c.ZP.translate("MaxParentalRatingHelp")}))]})),(0,a.jsx)("div",{children:(0,a.jsxs)("div",T({className:"blockUnratedItems"},{children:[(0,a.jsx)("h3",T({className:"checkboxListLabel"},{children:c.ZP.translate("HeaderBlockItemsWithNoRating")})),(0,a.jsx)("div",T({className:"checkboxList paperList",style:{padding:".5em 1em"}},{children:v.map((function(e){return(0,a.jsx)(p.Z,{className:"chkUnratedItem",ItemType:e.value,Name:e.name,checkedAttribute:e.checkedAttribute},e.value)}))}))]}))}),(0,a.jsx)("br",{}),(0,a.jsxs)("div",T({className:"verticalSection",style:{marginBottom:"2em"}},{children:[(0,a.jsxs)("div",T({className:"detailSectionHeader sectionTitleContainer",style:{display:"flex",alignItems:"center",paddingBottom:"1em"}},{children:[(0,a.jsx)("h2",T({className:"sectionTitle"},{children:c.ZP.translate("LabelBlockContentWithTags")})),(0,a.jsx)(x.Z,{className:"fab btnAddBlockedTag submit",title:"Add",icon:"add"})]})),(0,a.jsx)("div",T({className:"blockedTags",style:{marginTop:".5em"}},{children:C.map((function(e,t){return(0,a.jsx)(y,{tag:e},t)}))}))]})),(0,a.jsxs)("div",T({className:"accessScheduleSection verticalSection",style:{marginBottom:"2em"}},{children:[(0,a.jsxs)("div",T({className:"sectionTitleContainer",style:{display:"flex",alignItems:"center",paddingBottom:"1em"}},{children:[(0,a.jsx)("h2",T({className:"sectionTitle"},{children:c.ZP.translate("HeaderAccessSchedule")})),(0,a.jsx)(x.Z,{className:"fab btnAddSchedule submit",title:"Add",icon:"add"})]})),(0,a.jsx)("p",{children:c.ZP.translate("HeaderAccessScheduleHelp")}),(0,a.jsx)("div",T({className:"accessScheduleList paperList"},{children:w.map((function(e,t){return(0,a.jsx)(f,{index:t,Id:e.Id,DayOfWeek:e.DayOfWeek,StartHour:e.StartHour,EndHour:e.EndHour},t)}))}))]})),(0,a.jsx)("div",{children:(0,a.jsx)(b.Z,{type:"submit",className:"raised button-submit block",title:"Save"})})]}))]}))}))}}}]);