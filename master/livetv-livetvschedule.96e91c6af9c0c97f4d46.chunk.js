"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[11438],{57197:function(e,t,r){r.r(t),r.d(t,{default:function(){return c}}),r(48410);var s=r(30325),o=r(61570),i=r(98301),n=r(28540),a=(r(41392),r(38228),r(82427),r(60635));function l(){return!s.Z.desktop}function c(e,t,r){var c,d,u=this;r.querySelector("#upcomingRecordings .recordingItems").addEventListener("timercancelled",(function(){u.preRender(),u.renderTab()})),u.preRender=function(){c=ApiClient.getLiveTvRecordings({UserId:a.ZP.getCurrentUserId(),IsInProgress:!0,Fields:"CanDelete,PrimaryImageAspectRatio,BasicSyncInfo",EnableTotalRecordCount:!1,EnableImageTypes:"Primary,Thumb,Backdrop"}),d=ApiClient.getLiveTvTimers({IsActive:!1,IsScheduled:!0})},u.renderTab=function(){var e;n.ZP.show(),e=r,c.then((function(t){!function(e,t,r){t.length?e.classList.remove("hide"):e.classList.add("hide");var n=e.querySelector(".recordingItems");l()?(n.classList.add("scrollX"),s.Z.tv&&n.classList.add("smoothScrollX"),n.classList.add("hiddenScrollX"),n.classList.remove("vertical-wrap")):(n.classList.remove("scrollX"),n.classList.remove("smoothScrollX"),n.classList.remove("hiddenScrollX"),n.classList.add("vertical-wrap")),n.innerHTML=o.default.getCardsHtml(Object.assign({items:t,shape:l()?"autooverflow":"auto",showTitle:!0,showParentTitle:!0,coverImage:!0,cardLayout:!1,centerText:!0,allowBottomPadding:!l(),preferThumb:"auto"},r||{})),i.default.lazyChildren(n)}(e.querySelector("#activeRecordings"),t.Items,{shape:l()?"autooverflow":"auto",defaultShape:l()?"overflowBackdrop":"backdrop",showParentTitle:!1,showParentTitleOrTitle:!0,showTitle:!0,showAirTime:!0,showAirEndTime:!0,showChannelName:!0,coverImage:!0,overlayText:!1,overlayMoreButton:!0})})),function(e,t){t.then((function(t){!function(e,t,r){LiveTvHelpers.getTimersHtml(t,void 0).then((function(t){var r=e;t?r.classList.remove("hide"):r.classList.add("hide"),r.querySelector(".recordingItems").innerHTML=t,i.default.lazyChildren(r)}))}(e.querySelector("#upcomingRecordings"),t.Items),n.ZP.hide()}))}(r,d)}}}}]);