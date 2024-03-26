"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[66781,49213],{70621:function(e,r,t){t.r(r);var a=t(24246),i=t(86808),n=t(27378),l=t(60635),o=t(94994),s=t(71487),c=t(92811),d=t(3137),u=t(83636),m=t(15796),g=t(34862),f=t(56663),p=t(91888),h=t(32459);r.default=function(){var e=(0,p.a)("userId"),r=function(e,r){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var a,i,n=t.call(e),l=[];try{for(;(void 0===r||r-- >0)&&!(a=n.next()).done;)l.push(a.value)}catch(e){i={error:e}}finally{try{a&&!a.done&&(t=n.return)&&t.call(n)}finally{if(i)throw i.error}}return l}((0,n.useState)(""),2),t=r[0],y=r[1],v=(0,n.useRef)(null),P=(0,n.useCallback)((function(){var r=v.current;r?(g.ZP.show(),window.ApiClient.getUser(e).then((function(e){if(!e.Name||!e.Id)throw new Error("Unexpected null user name or id");y(e.Name),s.default.setTitle(e.Name);var t="assets/img/avatar.png";e.PrimaryImageTag&&(t=window.ApiClient.getUserImageUrl(e.Id,{tag:e.PrimaryImageTag,type:"Primary"})),r.querySelector("#image").style.backgroundImage="url("+t+")",l.default.getCurrentUser().then((function(t){var a;if(!e.Policy)throw new Error("Unexpected null user.Policy");e.PrimaryImageTag?(r.querySelector("#btnAddImage").classList.add("hide"),r.querySelector("#btnDeleteImage").classList.remove("hide")):c.M.supports("fileinput")&&((null===(a=null==t?void 0:t.Policy)||void 0===a?void 0:a.IsAdministrator)||e.Policy.EnableUserPreferenceAccess)&&(r.querySelector("#btnDeleteImage").classList.add("hide"),r.querySelector("#btnAddImage").classList.remove("hide"))})).catch((function(e){console.error("[userprofile] failed to get current user",e)})),g.ZP.hide()})).catch((function(e){console.error("[userprofile] failed to load data",e)}))):console.error("Unexpected null reference")}),[e]);return(0,n.useEffect)((function(){var r=v.current;if(r){P();var t=function(e){var r,t;switch(g.ZP.hide(),null===(t=null===(r=e.target)||void 0===r?void 0:r.error)||void 0===t?void 0:t.code){case DOMException.NOT_FOUND_ERR:(0,f.Z)(o.ZP.translate("FileNotFound"));break;case DOMException.ABORT_ERR:a();break;default:(0,f.Z)(o.ZP.translate("FileReadError"))}},a=function(){g.ZP.hide(),(0,f.Z)(o.ZP.translate("FileReadCancelled"))};r.querySelector("#btnDeleteImage").addEventListener("click",(function(){(0,d.Z)(o.ZP.translate("DeleteImageConfirmation"),o.ZP.translate("DeleteImage")).then((function(){g.ZP.show(),window.ApiClient.deleteUserImage(e,i._.Primary).then((function(){g.ZP.hide(),P()})).catch((function(e){console.error("[userprofile] failed to delete image",e)}))})).catch((function(){}))})),r.querySelector("#btnAddImage").addEventListener("click",(function(){var e=r.querySelector("#uploadImage");e.value="",e.click()})),r.querySelector("#uploadImage").addEventListener("change",(function(n){!function(n){var l=r.querySelector("#image"),o=n.target.files[0];if(!o||!/image.*/.exec(o.type))return!1;var s=new FileReader;s.onerror=t,s.onabort=a,s.onload=function(){l.style.backgroundImage="url("+s.result+")",window.ApiClient.uploadUserImage(e,i._.Primary,o).then((function(){g.ZP.hide(),P()})).catch((function(e){console.error("[userprofile] failed to upload image",e)}))},s.readAsDataURL(o)}(n)}))}else console.error("Unexpected null reference")}),[P,e]),(0,a.jsx)(h.Z,{id:"userProfilePage",title:o.ZP.translate("Profile"),className:"mainAnimatedPage libraryPage userPreferencesPage userPasswordPage noSecondaryNavPage",children:(0,a.jsxs)("div",{ref:v,className:"padded-left padded-right padded-bottom-page",children:[(0,a.jsxs)("div",{className:"readOnlyContent",style:{margin:"0 auto",marginBottom:"1.8em",padding:"0 1em",display:"flex",flexDirection:"row",alignItems:"center"},children:[(0,a.jsxs)("div",{className:"imagePlaceHolder",style:{position:"relative",display:"inline-block",maxWidth:200},children:[(0,a.jsx)("input",{id:"uploadImage",type:"file",accept:"image/*",style:{position:"absolute",right:0,width:"100%",height:"100%",opacity:0,cursor:"pointer"}}),(0,a.jsx)("div",{id:"image",style:{width:200,height:200,backgroundRepeat:"no-repeat",backgroundPosition:"center",borderRadius:"100%",backgroundSize:"cover"}})]}),(0,a.jsxs)("div",{style:{verticalAlign:"top",margin:"1em 2em",display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,a.jsx)("h2",{className:"username",style:{margin:0,fontSize:"xx-large"},children:t}),(0,a.jsx)("br",{}),(0,a.jsx)(u.Z,{type:"button",id:"btnAddImage",className:"raised button-submit hide",title:"ButtonAddImage"}),(0,a.jsx)(u.Z,{type:"button",id:"btnDeleteImage",className:"raised hide",title:"DeleteImage"})]})]}),(0,a.jsx)(m.Z,{userId:e})]})})}}}]);