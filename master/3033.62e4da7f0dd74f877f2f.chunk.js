"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3033],{53033:function(e,t,r){r.r(t);var n=r(66056);var a={render:function(e,t){e.playlistInit||(e.playlistInit=!0,function(e,t){var r,a=e.querySelector("#childrenContent .itemsContainer");a.classList.add("vertical-list"),a.classList.remove("vertical-wrap"),a.enableDragReordering(!0),a.fetchData=(r=t.Id,function(){var e={Fields:"PrimaryImageAspectRatio",EnableImageTypes:"Primary,Backdrop,Banner,Thumb",UserId:ApiClient.getCurrentUserId()};return ApiClient.getJSON(ApiClient.getUrl("Playlists/".concat(r,"/Items"),e))}),a.getItemsHtml=function(e){return function(t){return n.Z.getListViewHtml({items:t,showIndex:!1,showRemoveFromPlaylist:!0,playFromHere:!0,action:"playallfromhere",smallIcon:!0,dragHandle:!0,playlistId:e})}}(t.Id)}(e,t)),e.querySelector("#childrenContent").classList.add("verticalSection-extrabottompadding"),e.querySelector("#childrenContent .itemsContainer").refreshItems()}};t.default=a}}]);