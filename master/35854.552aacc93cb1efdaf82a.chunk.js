"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[35854],{35854:function(e,t,r){r.r(t),r.d(t,{deleteItem:function(){return l}}),r(81414),r(37666);var n=r(3137),a=r(66560),u=r(94994),i=r(18613),o=r(37099);function l(e){var t=e.item,r=t.SeasonId||t.SeriesId||t.ParentId,l=i.Z.getApiClient(t.ServerId);return(0,n.Z)({title:u.ZP.translate("HeaderDeleteItem"),text:u.ZP.translate("ConfirmDeleteItem"),confirmText:u.ZP.translate("Delete"),primary:"delete"}).then((function(){return l.deleteItem(t.Id).then((function(){e.navigate&&(r?a.appRouter.showItem(r,t.ServerId):a.appRouter.goHome())}),(function(e){var t=function(){return Promise.reject(e)};return function(e){return(0,o.Z)(e)}(u.ZP.translate("ErrorDeletingItem")).then(t,t)}))}))}t.default={deleteItem:l}}}]);