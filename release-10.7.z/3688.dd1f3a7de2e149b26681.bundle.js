"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3688],{63688:function(t,e,r){r.r(e),r.d(e,{default:function(){return g}}),r(63238),r(61418),r(5769),r(17460),r(14078),r(23938),r(99785);var i=r(6594),n=r(1115),a=r(83094),o=r(53754),l=(r(17734),r(30983),r(21865),r(1892)),s=r.n(l),c=r(19936),u=(s()(c.Z,{insert:"head",singleton:!1}),c.Z.locals,r(16589),r(78066),r(61642));function d(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function p(t,e,r){return e&&d(t.prototype,e),r&&d(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function h(){i.ZP.hide()}function v(t,e,r,n){if(e&&"string"!=typeof e)throw new Error("invalid path");i.ZP.show();var a=[];"Network"===e?a.push(ApiClient.getNetworkDevices()):e?(a.push(ApiClient.getDirectoryContents(e,r)),a.push(ApiClient.getParentPath(e))):a.push(ApiClient.getDrives()),Promise.all(a).then((function(r){var n=r[0],a=r[1]||"",l="";t.querySelector(".results").scrollTop=0,t.querySelector("#txtDirectoryPickerPath").value=e||"",e&&(l+=f("lnkPath lnkDirectory","",a,"..."));for(var s=0,c=n.length;s<c;s++){var u=n[s];l+=f("File"===u.Type?"lnkPath lnkFile":"lnkPath lnkDirectory",u.Type,u.Path,u.Name)}e||(l+=f("lnkPath lnkDirectory","","Network",o.ZP.translate("ButtonNetwork"))),t.querySelector(".results").innerHTML=l,i.ZP.hide()}),(function(){n&&(t.querySelector("#txtDirectoryPickerPath").value="",t.querySelector(".results").innerHTML="",i.ZP.hide())}))}function f(t,e,r,i){var n="";return n+='<div class="listItem listItem-border '.concat(t,'" data-type="').concat(e,'" data-path="').concat(r,'">'),n+='<div class="listItemBody" style="padding-left:0;padding-top:.5em;padding-bottom:.5em;">',n+='<div class="listItemBodyText">',n+=i,n+="</div>",n+="</div>",(n+='<span class="material-icons arrow_forward" style="font-size:inherit;"></span>')+"</div>"}function P(t){!function(t){(0,u.Z)(t)}({text:t})}function y(t){return t.path?Promise.resolve(t.path):ApiClient.getJSON(ApiClient.getUrl("Environment/DefaultDirectoryBrowser")).then((function(t){return t.Path||""}),(function(){return""}))}var b,m=p((function t(){var e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.show=function(t){var r={includeDirectories:!0};null!=(t=t||{}).includeDirectories&&(r.includeDirectories=t.includeDirectories),null!=t.includeFiles&&(r.includeFiles=t.includeFiles),Promise.all([b?Promise.resolve(b):ApiClient.getPublicSystemInfo().then((function(t){return b=t,t})),y(t)]).then((function(i){var l=i[0],s=i[1],c=n.default.createDialog({size:"small",removeOnClose:!0,scrollY:!1});c.classList.add("ui-body-a"),c.classList.add("background-theme-a"),c.classList.add("directoryPicker"),c.classList.add("formDialog");var u="";u+='<div class="formDialogHeader">',u+='<button is="paper-icon-button-light" class="btnCloseDialog autoSize" tabindex="-1"><span class="material-icons arrow_back"></span></button>',u+='<h3 class="formDialogHeaderTitle">',u+=t.header||o.ZP.translate("HeaderSelectPath"),u+="</h3>",u+="</div>",u+=function(t,e){var r,i="";i+='<div class="formDialogContent scrollY">',i+='<div class="dialogContentInner dialog-content-centered" style="padding-top:2em;">',t.pathReadOnly||(i+='<div class="infoBanner" style="margin-bottom:1.5em;">',i+=t.instruction?"".concat(t.instruction,"<br/><br/>"):"","bsd"===e.OperatingSystem.toLowerCase()?(i+="<br/>",i+="<br/>",i+=o.ZP.translate("MessageDirectoryPickerBSDInstruction"),i+="<br/>"):"linux"===e.OperatingSystem.toLowerCase()&&(i+="<br/>",i+="<br/>",i+=o.ZP.translate("MessageDirectoryPickerLinuxInstruction"),i+="<br/>"),i+="</div>"),i+='<form style="margin:auto;">',i+='<div class="inputContainer" style="display: flex; align-items: center;">',i+='<div style="flex-grow:1;">',r=!0!==t.includeFiles?"LabelFolder":"LabelPath";var n=t.pathReadOnly?" readonly":"";return i+='<input is="emby-input" id="txtDirectoryPickerPath" type="text" required="required" '.concat(n,' label="').concat(o.ZP.translate(r),'"/>'),i+="</div>",n||(i+='<button type="button" is="paper-icon-button-light" class="btnRefreshDirectories emby-input-iconbutton" title="'.concat(o.ZP.translate("Refresh"),'"><span class="material-icons search"></span></button>')),i+="</div>",n||(i+='<div class="results paperList" style="max-height: 200px; overflow-y: auto;"></div>'),t.enableNetworkSharePath&&(i+='<div class="inputContainer" style="margin-top:2em;">',i+='<input is="emby-input" id="txtNetworkPath" type="text" label="'.concat(o.ZP.translate("LabelOptionalNetworkPath"),'"/>'),i+='<div class="fieldDescription">',i+=o.ZP.translate("LabelOptionalNetworkPathHelp","<b>\\\\server</b>","<b>\\\\192.168.1.101</b>"),i+="</div>",i+="</div>"),i+='<div class="formDialogFooter">',i+='<button is="emby-button" type="submit" class="raised button-submit block formDialogFooterItem">'.concat(o.ZP.translate("ButtonOk"),"</button>"),i+="</div>",i+="</form>",i+="</div>",(i+="</div>")+"</div>"}(t,l),c.innerHTML=u,function(t,e,r){t.addEventListener("click",(function(e){var i=a.ZP.parentWithClass(e.target,"lnkPath");if(i){var n=i.getAttribute("data-path");i.classList.contains("lnkFile")?t.querySelector("#txtDirectoryPickerPath").value=n:v(t,n,r,!0)}})),t.addEventListener("click",(function(e){if(a.ZP.parentWithClass(e.target,"btnRefreshDirectories")){var i=t.querySelector("#txtDirectoryPickerPath").value;v(t,i,r)}})),t.addEventListener("change",(function(e){var i=a.ZP.parentWithTag(e.target,"INPUT");i&&"txtDirectoryPickerPath"===i.id&&v(t,i.value,r)})),t.querySelector("form").addEventListener("submit",(function(t){if(e.callback){var r=this.querySelector("#txtNetworkPath");r=r?r.value:null;var i=this.querySelector("#txtDirectoryPickerPath").value;(function(t,e,r){return r.ajax({type:"POST",url:r.getUrl("Environment/ValidatePath"),data:JSON.stringify({ValidateWriteable:e,Path:t}),contentType:"application/json"}).catch((function(t){if(t){if(404===t.status)return P(o.ZP.translate("PathNotFound")),Promise.reject();if(500===t.status)return P(e?o.ZP.translate("WriteAccessRequired"):o.ZP.translate("PathNotFound")),Promise.reject()}return Promise.resolve()}))})(i,e.validateWriteable,ApiClient).then(e.callback(i,r))}return t.preventDefault(),t.stopPropagation(),!1}))}(c,t,r),c.addEventListener("close",h),n.default.open(c),c.querySelector(".btnCloseDialog").addEventListener("click",(function(){n.default.close(c)})),e=c,c.querySelector("#txtDirectoryPickerPath").value=s;var d=c.querySelector("#txtNetworkPath");d&&(d.value=t.networkSharePath||""),t.pathReadOnly||v(c,s,r,!0)}))},this.close=function(){e&&n.default.close(e)}})),g=m},19936:function(t,e,r){var i=r(93476),n=r.n(i)()((function(t){return t[1]}));n.push([t.id,"#ulDirectoryPickerList a{padding-top:.4em;padding-bottom:.4em}.lblDirectoryPickerPath{white-space:nowrap}",""]),e.Z=n}}]);