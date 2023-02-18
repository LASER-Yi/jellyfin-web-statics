"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7182],{53787:function(e,c,l){l.r(c),l(27471),l(61013),l(98010),l(63238),l(5769),l(61418),l(17460),l(14078),l(71848);var n=l(6594),i=l(17025),s=l(53754),t=l(76543),a=l(38440);function r(e){var c=document.createEvent("HTMLEvents");c.initEvent("change",!1,!0),e.dispatchEvent(c)}function o(){var e=$(this).parents(".page");n.ZP.show();var c=getParameterByName("userId");return ApiClient.getUser(c).then((function(c){!function(e,c){e.Policy.EnableAllFolders=$("#chkEnableAllFolders",c).is(":checked"),e.Policy.EnabledFolders=e.Policy.EnableAllFolders?[]:$(".chkFolder",c).get().filter((function(e){return e.checked})).map((function(e){return e.getAttribute("data-id")})),e.Policy.EnableAllChannels=$("#chkEnableAllChannels",c).is(":checked"),e.Policy.EnabledChannels=e.Policy.EnableAllChannels?[]:$(".chkChannel",c).get().filter((function(e){return e.checked})).map((function(e){return e.getAttribute("data-id")})),e.Policy.EnableAllDevices=$("#chkEnableAllDevices",c).is(":checked"),e.Policy.EnabledDevices=e.Policy.EnableAllDevices?[]:$(".chkDevice",c).get().filter((function(e){return e.checked})).map((function(e){return e.getAttribute("data-id")})),e.Policy.BlockedChannels=null,e.Policy.BlockedMediaFolders=null,ApiClient.updateUserPolicy(e.Id,e.Policy).then((function(){n.ZP.hide(),(0,a.Z)(s.ZP.translate("SettingsSaved"))}))}(c,e)})),!1}$(document).on("pageinit","#userLibraryAccessPage",(function(){var e=this;$("#chkEnableAllDevices",e).on("change",(function(){this.checked?$(".deviceAccessListContainer",e).hide():$(".deviceAccessListContainer",e).show()})),$("#chkEnableAllChannels",e).on("change",(function(){this.checked?$(".channelAccessListContainer",e).hide():$(".channelAccessListContainer",e).show()})),e.querySelector("#chkEnableAllFolders").addEventListener("change",(function(){this.checked?e.querySelector(".folderAccessListContainer").classList.add("hide"):e.querySelector(".folderAccessListContainer").classList.remove("hide")})),$(".userLibraryAccessForm").off("submit",o).on("submit",o)})).on("pageshow","#userLibraryAccessPage",(function(){var e,c=this;n.ZP.show();var l=getParameterByName("userId");if(l)e=ApiClient.getUser(l);else{var a=$.Deferred();a.resolveWith(null,[{Configuration:{}}]),e=a.promise()}var o=t.ZP.getCurrentUser(),h=ApiClient.getJSON(ApiClient.getUrl("Library/MediaFolders",{IsHidden:!1})),d=ApiClient.getJSON(ApiClient.getUrl("Channels")),b=ApiClient.getJSON(ApiClient.getUrl("Devices"));Promise.all([e,o,h,d,b]).then((function(e){!function(e,c,l,t,a,o){e.querySelector(".username").innerHTML=c.Name,i.Z.setTitle(c.Name),function(e,c,l){var n="";n+='<h3 class="checkboxListLabel">'+s.ZP.translate("Channels")+"</h3>",n+='<div class="checkboxList paperList checkboxList-paperList">';for(var i=0,t=l.length;i<t;i++){var a=l[i],o=c.Policy.EnableAllChannels||-1!=c.Policy.EnabledChannels.indexOf(a.Id)?' checked="checked"':"";n+='<label><input type="checkbox" is="emby-checkbox" class="chkChannel" data-id="'+a.Id+'" '+o+"><span>"+a.Name+"</span></label>"}n+="</div>",$(".channelAccess",e).show().html(n),l.length?$(".channelAccessContainer",e).show():$(".channelAccessContainer",e).hide();var h=e.querySelector("#chkEnableAllChannels");h.checked=c.Policy.EnableAllChannels,r(h)}(e,c,a),function(e,c,l){var n="";n+='<h3 class="checkboxListLabel">'+s.ZP.translate("HeaderLibraries")+"</h3>",n+='<div class="checkboxList paperList checkboxList-paperList">';for(var i=0,t=l.length;i<t;i++){var a=l[i],o=c.Policy.EnableAllFolders||-1!=c.Policy.EnabledFolders.indexOf(a.Id)?' checked="checked"':"";n+='<label><input type="checkbox" is="emby-checkbox" class="chkFolder" data-id="'+a.Id+'" '+o+"><span>"+a.Name+"</span></label>"}n+="</div>",e.querySelector(".folderAccess").innerHTML=n;var h=e.querySelector("#chkEnableAllFolders");h.checked=c.Policy.EnableAllFolders,r(h)}(e,c,t),function(e,c,l){var n="";n+='<h3 class="checkboxListLabel">'+s.ZP.translate("HeaderDevices")+"</h3>",n+='<div class="checkboxList paperList checkboxList-paperList">';for(var i=0,t=l.length;i<t;i++){var a=l[i],o=c.Policy.EnableAllDevices||-1!=c.Policy.EnabledDevices.indexOf(a.Id)?' checked="checked"':"";n+='<label><input type="checkbox" is="emby-checkbox" class="chkDevice" data-id="'+a.Id+'" '+o+"><span>"+a.Name+" - "+a.AppName+"</span></label>"}n+="</div>",$(".deviceAccess",e).show().html(n);var h=e.querySelector("#chkEnableAllDevices");h.checked=c.Policy.EnableAllDevices,r(h),c.Policy.IsAdministrator?e.querySelector(".deviceAccessContainer").classList.add("hide"):e.querySelector(".deviceAccessContainer").classList.remove("hide")}(e,c,o),n.ZP.hide()}(c,e[0],e[1],e[2].Items,e[3].Items,e[4].Items)}))}))}}]);