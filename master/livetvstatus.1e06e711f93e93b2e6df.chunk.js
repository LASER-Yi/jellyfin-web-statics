"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[20745,83264],{7204:function(e,t,i){i.r(t),i(5769),i(61013),i(63238),i(61418),i(17460),i(14078),i(51789);var n=i(94994),a=i(5607),r=i(72365),s=i(32991),d=i(30325),l=i(28540),o=i(57366),c=(i(82427),i(38228),i(60635)),u=i(3137),h=!o.Z.slow&&!o.Z.edge;function f(e){var t="card scalableCard backdropCard backdropCard-scalable",i="";return d.Z.tv&&(t+=" show-focus",h&&(t+=" show-animation")),i+='<div type="button" class="'+t+'" data-id="'+e.Id+'">',i+='<div class="cardBox visualCardBox">',i+='<div class="cardScalable visualCardBox-cardScalable">',i+='<div class="cardPadder-backdrop"></div>',i+='<div class="cardContent searchImage">',i+='<div class="cardImageContainer coveredImage '.concat(s.default.getDefaultBackgroundClass(),'"><span class="cardImageIcon material-icons dvr" aria-hidden="true"></span></div>'),i+="</div>",i+="</div>",i+='<div class="cardFooter visualCardBox-cardFooter">',i+='<button is="paper-icon-button-light" class="itemAction btnCardOptions autoSize" data-action="menu"><span class="material-icons more_vert" aria-hidden="true"></span></button>',i+='<div class="cardText">'+(e.FriendlyName||function(e){switch(e.toLowerCase()){case"m3u":return"M3U";case"hdhomerun":return"HDHomeRun";case"hauppauge":return"Hauppauge";case"satip":return"DVB";default:return"Unknown"}}(e.Type))+"</div>",i+='<div class="cardText cardText-secondary">',i+=e.Url||"&nbsp;",i+="</div>",i+="</div>",(i+="</div>")+"</div>"}function v(e){l.ZP.show(),ApiClient.getNamedConfiguration("livetv").then((function(t){!function(e,t){e.querySelector(".devicesList").innerHTML=t.map(f).join("")}(e,t.TunerHosts),function(e,t){var a="";if(t.length){a+='<div class="paperList">';for(var r=0,s=t.length;r<s;r++){var d=t[r];a+='<div class="listItem">',a+='<span class="listItemIcon material-icons dvr" aria-hidden="true"></span>',a+='<div class="listItemBody two-line">',a+='<a is="emby-linkbutton" style="display:block;padding:0;margin:0;text-align:left;" class="clearLink" href="'+p(d.Type)+"&id="+d.Id+'">',a+='<h3 class="listItemBodyText">',a+=m(d.Type),a+="</h3>",a+='<div class="listItemBodyText secondary">',a+=d.Path||d.ListingsId||"",a+="</div>",a+="</a>",a+="</div>",a+='<button type="button" is="paper-icon-button-light" class="btnOptions" data-id="'+d.Id+'"><span class="material-icons listItemAside more_vert" aria-hidden="true"></span></button>',a+="</div>"}a+="</div>"}var o=$(".providerList",e).html(a);$(".btnOptions",o).on("click",(function(){var t=this.getAttribute("data-id");!function(e,t,a){var r=[];r.push({name:n.ZP.translate("Delete"),id:"delete"}),r.push({name:n.ZP.translate("MapChannels"),id:"map"}),i.e(12801).then(i.bind(i,12801)).then((function(s){s.default.show({items:r,positionTo:a}).then((function(a){switch(a){case"delete":!function(e,t){var i=n.ZP.translate("MessageConfirmDeleteGuideProvider");(0,u.Z)(i,n.ZP.translate("HeaderDeleteProvider")).then((function(){l.ZP.show(),ApiClient.ajax({type:"DELETE",url:ApiClient.getUrl("LiveTv/ListingProviders",{Id:t})}).then((function(){v(e)}),(function(){v(e)}))}))}(e,t);break;case"map":!function(e,t){i.e(89394).then(i.bind(i,89394)).then((function(e){new(0,e.default)({serverId:ApiClient.serverInfo().Id,providerId:t}).show()}))}(0,t)}}))}))}(e,t,this)}))}(e,t.ListingProviders)})),l.ZP.hide()}function m(e){switch(e.toLowerCase()){case"schedulesdirect":return"Schedules Direct";case"xmltv":return"XMLTV";default:return"Unknown"}}function p(e){switch(e.toLowerCase()){case"xmltv":return"#/dashboard/livetv/guide?type=xmltv";case"schedulesdirect":return"#/dashboard/livetv/guide?type=schedulesdirect"}}function b(e){var t,a,s,d=r.ZP.parentWithClass(e.target,"card");if(d){var o=d.getAttribute("data-id"),h=r.ZP.parentWithClass(e.target,"btnCardOptions");h?(t=h,a=o,(s=[]).push({name:n.ZP.translate("Delete"),id:"delete"}),s.push({name:n.ZP.translate("Edit"),id:"edit"}),i.e(12801).then(i.bind(i,12801)).then((function(e){e.default.show({items:s,positionTo:t}).then((function(e){switch(e){case"delete":!function(e,t){var i=n.ZP.translate("MessageConfirmDeleteTunerDevice");(0,u.Z)(i,n.ZP.translate("HeaderDeleteDevice")).then((function(){l.ZP.show(),ApiClient.ajax({type:"DELETE",url:ApiClient.getUrl("LiveTv/TunerHosts",{Id:t})}).then((function(){v(e)}))}))}(r.ZP.parentWithClass(t,"page"),a);break;case"edit":c.default.navigate("dashboard/livetv/tuner?id="+a)}}))}))):c.default.navigate("dashboard/livetv/tuner?id="+o)}}$(document).on("pageinit","#liveTvStatusPage",(function(){var e=this;$(".btnAddDevice",e).on("click",(function(){c.default.navigate("dashboard/livetv/tuner")})),$(".formAddDevice",e).on("submit",(function(){return function(e){e.querySelector(".dlgAddDevice").close(),l.ZP.show(),ApiClient.ajax({type:"POST",url:ApiClient.getUrl("LiveTv/TunerHosts"),data:JSON.stringify({Type:$("#selectTunerDeviceType",e).val(),Url:$("#txtDevicePath",e).val()}),contentType:"application/json"}).then((function(){v(e)}),(function(){c.default.alert({message:n.ZP.translate("ErrorAddingTunerDevice")})}))}(e),!1})),$(".btnAddProvider",e).on("click",(function(){var e,t;e=this,(t=[]).push({name:"Schedules Direct",id:"SchedulesDirect"}),t.push({name:"XMLTV",id:"xmltv"}),i.e(12801).then(i.bind(i,12801)).then((function(i){i.default.show({items:t,positionTo:e,callback:function(e){c.default.navigate(p(e))}})}))})),e.querySelector(".devicesList").addEventListener("click",b)})).on("pageshow","#liveTvStatusPage",(function(){var e=this;v(e),(0,a.Z)({mode:"on",progressElem:e.querySelector(".refreshGuideProgress"),taskKey:"RefreshGuide",button:e.querySelector(".btnRefresh")})})).on("pagehide","#liveTvStatusPage",(function(){(0,a.Z)({mode:"off",progressElem:this.querySelector(".refreshGuideProgress"),taskKey:"RefreshGuide",button:this.querySelector(".btnRefresh")})}))},82427:function(e,t,i){i(5769),i(63238),i(61418),i(17460),i(14078),i(27471),i(32081);var n=i(61008),a=i(58517),r=i(48957),s=i(81038),d=i(30325),l=i(57366),o=i(72365),c=i(28540),u=i(34643),h=i(44038),f=i(67561),v=(i(67752),i(18613)),m=i(28172),p=Object.create(HTMLDivElement.prototype);function b(e){var t=this,i=t.multiSelect;!1!==(null==i?void 0:i.onContainerClick.call(t,e))&&n.ZP.onClick.call(t,e)}function g(e){return e.preventDefault(),e.stopPropagation(),!1}function y(e){var t=e.target,i=o.ZP.parentWithAttribute(t,"data-id");if(null!=i&&i.getAttribute("data-serverid"))return a.default.handleCommand("menu",{sourceElement:i}),e.preventDefault(),e.stopPropagation(),!1}function C(e,t,n){var a=this;Promise.all([i.e(32991),i.e(83264)]).then(i.bind(i,32991)).then((function(e){e.onUserDataChanged(n,a)}));var r=T(a);-1===r.indexOf("markfavorite")&&-1===r.indexOf("markplayed")||a.notifyRefreshNeeded()}function T(e){var t=e.getAttribute("data-monitor");return t?t.split(","):[]}function I(e,t,n){var a=this;if(-1===T(a).indexOf("timers")){var r=n.ProgramId,s=n.Id;Promise.all([i.e(32991),i.e(83264)]).then(i.bind(i,32991)).then((function(e){e.onTimerCreated(r,s,a)}))}else a.notifyRefreshNeeded()}function P(){-1!==T(this).indexOf("seriestimers")&&this.notifyRefreshNeeded()}function x(e,t,n){var a=this;-1===T(a).indexOf("timers")?Promise.all([i.e(32991),i.e(83264)]).then(i.bind(i,32991)).then((function(e){e.onTimerCancelled(n.Id,a)})):a.notifyRefreshNeeded()}function Z(e,t,n){var a=this;-1===T(a).indexOf("seriestimers")?Promise.all([i.e(32991),i.e(83264)]).then(i.bind(i,32991)).then((function(e){e.onSeriesTimerCancelled(n.Id,a)})):a.notifyRefreshNeeded()}function k(e,t,i){var n=this,a=T(n);if(-1===a.indexOf("seriestimers")&&-1===a.indexOf("timers")){var r=i.ItemsAdded||[],s=i.ItemsRemoved||[];if(r.length||s.length){var d=n.getAttribute("data-parentid");if(d){var l=i.FoldersAddedTo||[],o=i.FoldersRemovedFrom||[],c=i.CollectionFolders||[];if(-1===l.indexOf(d)&&-1===o.indexOf(d)&&-1===c.indexOf(d))return}n.notifyRefreshNeeded()}}}function w(e,t){var i,n=this,a=t.state,r=T(n);if(a.NowPlayingItem&&"Video"===a.NowPlayingItem.MediaType){if(-1!==r.indexOf("videoplayback"))return void n.notifyRefreshNeeded(!0)}else if("Audio"===(null===(i=a.NowPlayingItem)||void 0===i?void 0:i.MediaType)&&-1!==r.indexOf("audioplayback"))return void n.notifyRefreshNeeded(!0)}function D(e,t,i,n){var a=i.bind(e);n=n||h.default,f.Z.on(n,t,a),e["event_"+t]=a}function L(e,t,i){var n=e["event_"+t];n&&(i=i||h.default,f.Z.off(i,t,n),e["event_"+t]=null)}function A(e,t){e.refreshInterval&&(clearInterval(e.refreshInterval),e.refreshInterval=null,t||(e.refreshIntervalEndTime=null))}function S(e,t){A(e),t||(t=parseInt(e.getAttribute("data-refreshinterval")||"0",10)),t&&(e.refreshInterval=setInterval(e.notifyRefreshNeeded.bind(e),t),e.refreshIntervalEndTime=(new Date).getTime()+t)}function E(e){var t=e.Items||e,i=this.parentContainer;i&&(t.length?i.classList.remove("hide"):i.classList.add("hide"));var n,a,r=document.activeElement;this.contains(r)&&(a=!0,n=r.getAttribute("data-id")),this.innerHTML=this.getItemsHtml(t),s.default.lazyChildren(this),a&&function(e,t){if(t){var i=e.querySelector('[data-id="'+t+'"]');if(i)try{return void u.Z.focus(i)}catch(e){console.error(e)}}u.Z.autoFocus(e)}(this,n),S(this),this.afterRefresh&&this.afterRefresh(e)}p.enableMultiSelect=function(e){var t=this.multiSelect;if(e){if(!t){var n=this;Promise.all([i.e(52943),i.e(9245)]).then(i.bind(i,52943)).then((function(e){var t=e.default;n.multiSelect=new t({container:n,bindOnClick:!1})}))}}else t&&(t.destroy(),this.multiSelect=null)},p.enableDragReordering=function(e){var t=this.sortable;if(e){if(!t){var i=this;i.sortable=new m.ZP(i,{draggable:".listItem",handle:".listViewDragHandle",onEnd:function(e){return function(e,t){var i=e.item,n=e.newIndex,a=i.getAttribute("data-playlistitemid"),r=i.getAttribute("data-playlistid");if(r){var s=i.getAttribute("data-serverid"),d=v.Z.getApiClient(s);c.ZP.show(),d.ajax({url:d.getUrl("Playlists/"+r+"/Items/"+a+"/Move/"+n),type:"POST"}).then((function(){c.ZP.hide()}),(function(){c.ZP.hide(),t.refreshItems()}))}else{var l=e.oldIndex;i.dispatchEvent(new CustomEvent("itemdrop",{detail:{oldIndex:l,newIndex:n,playlistItemId:a},bubbles:!0,cancelable:!1}))}}(e,i)}})}}else t&&(t.destroy(),this.sortable=null)},p.createdCallback=function(){this.classList.add("itemsContainer")},p.attachedCallback=function(){this.addEventListener("click",b),l.Z.touch?this.addEventListener("contextmenu",g):"false"!==this.getAttribute("data-contextmenu")&&this.addEventListener("contextmenu",y),(d.Z.desktop||d.Z.mobile&&"false"!==this.getAttribute("data-multiselect"))&&this.enableMultiSelect(!0),d.Z.tv&&this.classList.add("itemsContainer-tv"),n.ZP.on(this,{click:!1}),D(this,"UserDataChanged",C),D(this,"TimerCreated",I),D(this,"SeriesTimerCreated",P),D(this,"TimerCancelled",x),D(this,"SeriesTimerCancelled",Z),D(this,"LibraryChanged",k),D(this,"playbackstop",w,r.O),"true"===this.getAttribute("data-dragreorder")&&this.enableDragReordering(!0)},p.detachedCallback=function(){A(this),this.enableMultiSelect(!1),this.enableDragReordering(!1),this.removeEventListener("click",b),this.removeEventListener("contextmenu",y),this.removeEventListener("contextmenu",g),n.ZP.off(this,{click:!1}),L(this,"UserDataChanged"),L(this,"TimerCreated"),L(this,"SeriesTimerCreated"),L(this,"TimerCancelled"),L(this,"SeriesTimerCancelled"),L(this,"LibraryChanged"),L(this,"playbackstop",r.O),this.fetchData=null,this.getItemsHtml=null,this.parentContainer=null},p.pause=function(){A(this,!0),this.paused=!0},p.resume=function(e){this.paused=!1;var t=this.refreshIntervalEndTime;if(t){var i=t-(new Date).getTime();i>0&&!this.needsRefresh?S(this,i):(this.needsRefresh=!0,this.refreshIntervalEndTime=null)}return this.needsRefresh||null!=e&&e.refresh?this.refreshItems():Promise.resolve()},p.refreshItems=function(){return this.fetchData?this.paused?(this.needsRefresh=!0,Promise.resolve()):(this.needsRefresh=!1,this.fetchData().then(E.bind(this))):Promise.resolve()},p.notifyRefreshNeeded=function(e){if(this.paused)this.needsRefresh=!0;else{var t=this.refreshTimeout;t&&clearTimeout(t),!0===e?this.refreshItems():this.refreshTimeout=setTimeout(this.refreshItems.bind(this),1e4)}},document.registerElement("emby-itemscontainer",{prototype:p,extends:"div"})}}]);