"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[13077,83264],{99661:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var a=n(24246),r=n(27378),i=n(60635),s=n(94994),c=n(28540),o=n(72365),l=n(3137),d=n(20990),u=n(15039),f=n(61570),p=n(43771),v=n(65009),h=n.n(v),m=function(){return m=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},m.apply(this,arguments)},b=function(e){var t=e.user,n=e.renderImgUrl;return{__html:'<a\n        is="emby-linkbutton"\n        class="cardContent"\n        href="#/useredit.html?userId='.concat(t.Id,'"\n        >\n        ').concat(n,"\n    </a>")}},g=function(e){var t,n,r,i=e.user,c=void 0===i?{}:i,o="card squareCard scalableCard squareCard-scalable";(null===(t=c.Policy)||void 0===t?void 0:t.IsDisabled)&&(o+=" grayscale"),c.PrimaryImageTag&&c.Id&&(r=window.ApiClient.getUserImageUrl(c.Id,{width:300,tag:c.PrimaryImageTag,type:"Primary"}));var l="cardImage";(null===(n=c.Policy)||void 0===n?void 0:n.IsDisabled)&&(l+=" disabledUser");var v,g=(v=c.LastActivityDate)?s.ZP.translate("LastSeen",(0,d.Z)(Date.parse(v),(0,u.LP)())):"",y=r?"<div class='".concat(l,"' style='background-image:url(").concat(r,")'></div>"):"<div class='".concat(l," ").concat(f.default.getDefaultBackgroundClass(c.Name)," flex align-items-center justify-content-center'>\n            <span class='material-icons cardImageIcon person' aria-hidden='true'></span>\n        </div>");return(0,a.jsx)("div",m({"data-userid":c.Id,className:o},{children:(0,a.jsxs)("div",m({className:"cardBox visualCardBox"},{children:[(0,a.jsxs)("div",m({className:"cardScalable visualCardBox-cardScalable"},{children:[(0,a.jsx)("div",{className:"cardPadder cardPadder-square"}),(0,a.jsx)("div",{dangerouslySetInnerHTML:b({user:c,renderImgUrl:y})})]})),(0,a.jsxs)("div",m({className:"cardFooter visualCardBox-cardFooter"},{children:[(0,a.jsx)("div",m({style:{textAlign:"right",float:"right",paddingTop:"5px"}},{children:(0,a.jsx)(p.Z,{is:"paper-icon-button-light",className:"btnUserMenu flex-shrink-zero",icon:"more_vert"})})),(0,a.jsx)("div",m({className:"cardText"},{children:(0,a.jsx)("span",{children:h()(c.Name)})})),(0,a.jsx)("div",m({className:"cardText cardText-secondary"},{children:(0,a.jsx)("span",{children:""!=g?g:""})}))]}))]}))}))},y=n(51361),x=(n(38228),n(61414),n(6055)),P=function(){return P=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},P.apply(this,arguments)},j=function(){var e=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var a,r,i=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(a=i.next()).done;)s.push(a.value)}catch(e){r={error:e}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}return s}((0,r.useState)([]),2),t=e[0],d=e[1],u=(0,r.useRef)(null),f=function(){c.ZP.show(),window.ApiClient.getUsers().then((function(e){d(e),c.ZP.hide()})).catch((function(e){console.error("[userprofiles] failed to fetch users",e)}))};return(0,r.useEffect)((function(){var e=u.current;if(e){f();e.addEventListener("click",(function(e){var t=o.ZP.parentWithClass(e.target,"btnUserMenu");t&&function(e){var t=o.ZP.parentWithClass(e,"card"),a=t.getAttribute("data-userid");if(a){var r=[];r.push({name:s.ZP.translate("ButtonOpen"),id:"open",icon:"mode_edit"}),r.push({name:s.ZP.translate("ButtonLibraryAccess"),id:"access",icon:"lock"}),r.push({name:s.ZP.translate("ButtonParentalControl"),id:"parentalcontrol",icon:"person"}),r.push({name:s.ZP.translate("Delete"),id:"delete",icon:"delete"}),n.e(12801).then(n.bind(n,12801)).then((function(e){e.default.show({items:r,positionTo:t,callback:function(e){switch(e){case"open":i.default.navigate("useredit.html?userId="+a).catch((function(e){console.error("[userprofiles] failed to navigate to user edit page",e)}));break;case"access":i.default.navigate("userlibraryaccess.html?userId="+a).catch((function(e){console.error("[userprofiles] failed to navigate to user library page",e)}));break;case"parentalcontrol":i.default.navigate("userparentalcontrol.html?userId="+a).catch((function(e){console.error("[userprofiles] failed to navigate to parental control page",e)}));break;case"delete":!function(e){var t=s.ZP.translate("DeleteUserConfirmation");(0,l.Z)({title:s.ZP.translate("DeleteUser"),text:t,confirmText:s.ZP.translate("Delete"),primary:"delete"}).then((function(){c.ZP.show(),window.ApiClient.deleteUser(e).then((function(){f()})).catch((function(e){console.error("[userprofiles] failed to delete user",e)}))})).catch((function(){}))}(a)}}}).catch((function(){}))})).catch((function(e){console.error("[userprofiles] failed to load action sheet",e)}))}else console.error("Unexpected null user id")}(t)})),e.querySelector("#btnAddUser").addEventListener("click",(function(){i.default.navigate("usernew.html").catch((function(e){console.error("[userprofiles] failed to navigate to new user page",e)}))}))}else console.error("Unexpected null reference")}),[]),(0,a.jsx)(x.Z,P({id:"userProfilesPage",className:"mainAnimatedPage type-interior userProfilesPage fullWidthContent"},{children:(0,a.jsxs)("div",P({ref:u,className:"content-primary"},{children:[(0,a.jsx)("div",P({className:"verticalSection"},{children:(0,a.jsx)(y.Z,{title:s.ZP.translate("HeaderUsers"),isBtnVisible:!0,btnId:"btnAddUser",btnClassName:"fab submit sectionTitleButton",btnTitle:"ButtonAddUser",btnIcon:"add",url:"https://jellyfin.org/docs/general/server/users/adding-managing-users"})})),(0,a.jsx)("div",P({className:"localUsers itemsContainer vertical-wrap"},{children:t.map((function(e){return(0,a.jsx)(g,{user:e},e.Id)}))}))]}))}))}},6055:function(e,t,n){var a=n(24246),r=n(27378),i=n(53424),s=function(){return s=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},s.apply(this,arguments)};t.Z=function(e){var t=e.children,n=e.id,c=e.className,o=void 0===c?"":c,l=e.title,d=e.isBackButtonEnabled,u=void 0===d||d,f=e.isMenuButtonEnabled,p=void 0!==f&&f,v=e.isNowPlayingBarEnabled,h=void 0===v||v,m=e.isThemeMediaSupported,b=void 0!==m&&m,g=e.backDropType,y=(0,r.useRef)(null);return(0,r.useEffect)((function(){i.Z.hideView()}),[]),(0,r.useEffect)((function(){var e,t,n,a,r={bubbles:!0,cancelable:!1,detail:{isRestored:!1,options:{enableMediaControl:h,supportsThemeMedia:b}}};null===(e=y.current)||void 0===e||e.dispatchEvent(new CustomEvent("viewbeforeshow",r)),null===(t=y.current)||void 0===t||t.dispatchEvent(new CustomEvent("pagebeforeshow",r)),null===(n=y.current)||void 0===n||n.dispatchEvent(new CustomEvent("viewshow",r)),null===(a=y.current)||void 0===a||a.dispatchEvent(new CustomEvent("pageshow",r))}),[y,h,b]),(0,a.jsx)("div",s({ref:y,id:n,"data-role":"page",className:"page ".concat(o),"data-title":l,"data-backbutton":u,"data-menubutton":p,"data-backdroptype":g},{children:t}))}},43771:function(e,t,n){var a=n(24246),r=n(94994),i=function(e){var t=e.is,n=e.id,a=e.className,r=e.title,i=e.icon,s=e.dataIndex,c=e.dataTag,o=e.dataProfileid;return{__html:'<button\n        is="'.concat(t,'"\n        type="button"\n        ').concat(n,'\n        class="').concat(a,'"\n        ').concat(r,"\n        ").concat(s,"\n        ").concat(c,"\n        ").concat(o,'\n    >\n        <span class="material-icons ').concat(i,'" aria-hidden="true"></span>\n    </button>')}};t.Z=function(e){var t=e.is,n=e.id,s=e.className,c=e.title,o=e.icon,l=e.dataIndex,d=e.dataTag,u=e.dataProfileid;return(0,a.jsx)("div",{dangerouslySetInnerHTML:i({is:t,id:n?'id="'.concat(n,'"'):"",className:s,title:c?'title="'.concat(r.ZP.translate(c),'"'):"",icon:o,dataIndex:l?'data-index="'.concat(l,'"'):"",dataTag:d?'data-tag="'.concat(d,'"'):"",dataProfileid:u?'data-profileid="'.concat(u,'"'):""})})}},51361:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(24246),r=n(43771),i=n(94994),s=function(e){var t=e.className,n=e.title,a=e.href;return{__html:'<a\n        is="emby-linkbutton"\n        rel="noopener noreferrer"\n        class="'.concat(t,'"\n        target="_blank"\n        href="').concat(a,'"\n        >\n        ').concat(n,"\n    </a>")}},c=function(e){var t=e.className,n=e.title,r=e.url;return(0,a.jsx)("div",{dangerouslySetInnerHTML:s({className:t,title:i.ZP.translate(n),href:r})})},o=function(){return o=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},o.apply(this,arguments)},l=function(e){var t=e.SectionClassName,n=e.title,i=e.isBtnVisible,s=void 0!==i&&i,l=e.btnId,d=e.btnClassName,u=e.btnTitle,f=e.btnIcon,p=e.isLinkVisible,v=void 0===p||p,h=e.url;return(0,a.jsxs)("div",o({className:"".concat(t," sectionTitleContainer flex align-items-center")},{children:[(0,a.jsx)("h2",o({className:"sectionTitle"},{children:n})),s&&(0,a.jsx)(r.Z,{is:"emby-button",id:l,className:d,title:u,icon:f}),v&&(0,a.jsx)(c,{className:"raised button-alt headerHelpButton",title:"Help",url:h})]}))}}}]);