"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9656],{9656:function(e,t,n){n.r(t),n.d(t,{default:function(){return T}}),n(5769),n(63238),n(61418),n(99785),n(17460),n(14078);var r=n(94994),i=n(47005),s=n(44038),o=n(51161),a=n(72365),d=n(30531),c=(n(38228),n(61414),n(48085),n(15359),n(18613)),l=n(29016);function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e){var t=e.options,n=c.Z.getApiClient(t.serverId);return t.parent.querySelector(".recordingFields").classList.remove("hide"),n.getLiveTvProgram(t.programId,n.getCurrentUserId()).then((function(n){e.TimerId=n.TimerId,e.Status=n.Status,e.SeriesTimerId=n.SeriesTimerId,function(e,t){t.IsSeries?e.querySelector(".recordSeriesContainer").classList.remove("hide"):e.querySelector(".recordSeriesContainer").classList.add("hide"),t.SeriesTimerId?(e.querySelector(".btnManageSeriesRecording").classList.remove("hide"),e.querySelector(".seriesRecordingButton .recordingIcon").classList.add("recordingIcon-active"),e.querySelector(".seriesRecordingButton .buttonText").innerHTML=r.ZP.translate("CancelSeries")):(e.querySelector(".btnManageSeriesRecording").classList.add("hide"),e.querySelector(".seriesRecordingButton .recordingIcon").classList.remove("recordingIcon-active"),e.querySelector(".seriesRecordingButton .buttonText").innerHTML=r.ZP.translate("RecordSeries")),t.TimerId&&"Cancelled"!==t.Status?(e.querySelector(".btnManageRecording").classList.remove("hide"),e.querySelector(".singleRecordingButton .recordingIcon").classList.add("recordingIcon-active"),"InProgress"===t.Status?e.querySelector(".singleRecordingButton .buttonText").innerHTML=r.ZP.translate("StopRecording"):e.querySelector(".singleRecordingButton .buttonText").innerHTML=r.ZP.translate("DoNotRecord")):(e.querySelector(".btnManageRecording").classList.add("hide"),e.querySelector(".singleRecordingButton .recordingIcon").classList.remove("recordingIcon-active"),e.querySelector(".singleRecordingButton .buttonText").innerHTML=r.ZP.translate("Record"))}(t.parent,n)}))}function h(e,t,n){var r=this.options,i=!1;n.Id&&this.TimerId===n.Id&&(i=!0),n.ProgramId&&r&&r.programId===n.ProgramId&&(i=!0),i&&this.refresh()}function m(e,t,n){var r=this.options,i=!1;n.Id&&this.SeriesTimerId===n.Id&&(i=!0),n.ProgramId&&r&&r.programId===n.ProgramId&&(i=!0),i&&this.refresh()}function f(){var e=this.options;if(this.TimerId&&"Cancelled"!==this.Status){var t=this;n.e(1341).then(n.bind(n,21341)).then((function(n){n.default.show(t.TimerId,e.serverId,{enableCancel:!1}).then((function(){t.changed=!0}))}))}}function v(){var e=this.options;if(this.SeriesTimerId){var t=this;n.e(4896).then(n.bind(n,4896)).then((function(n){n.default.show(t.SeriesTimerId,e.serverId,{enableCancel:!1}).then((function(){t.changed=!0}))}))}}function b(e){this.changed=!0;var t=this,n=this.options,r=c.Z.getApiClient(n.serverId),s=!a.ZP.parentWithTag(e.target,"BUTTON").querySelector(".material-icons").classList.contains("recordingIcon-active"),l=this.TimerId&&"Cancelled"!==this.Status;s?l||(o.ZP.show(),d.default.createRecording(r,n.programId,!1).then((function(){i.Events.trigger(t,"recordingchanged"),g(t),o.ZP.hide()}))):l&&(o.ZP.show(),d.default.cancelTimer(r,this.TimerId,!0).then((function(){i.Events.trigger(t,"recordingchanged"),g(t),o.ZP.hide()})))}function S(e){this.changed=!0;var t=this,n=this.options,i=c.Z.getApiClient(n.serverId);a.ZP.parentWithTag(e.target,"BUTTON").querySelector(".material-icons").classList.contains("recordingIcon-active")?this.SeriesTimerId&&i.cancelLiveTvSeriesTimer(this.SeriesTimerId).then((function(){(0,l.Z)(r.ZP.translate("RecordingCancelled")),g(t)})):(n.parent.querySelector(".recordSeriesContainer").classList.remove("hide"),this.SeriesTimerId||(this.TimerId?d.default.changeRecordingToSeries(i,this.TimerId,n.programId):d.default.createRecording(i,n.programId,!0)).then((function(){g(t)})))}var T=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=t,this.embed();var n=h.bind(this);this.timerChangedHandler=n,i.Events.on(s.default,"TimerCreated",n),i.Events.on(s.default,"TimerCancelled",n);var r=m.bind(this);this.seriesTimerChangedHandler=r,i.Events.on(s.default,"SeriesTimerCreated",r),i.Events.on(s.default,"SeriesTimerCancelled",r)}var t,n;return t=e,(n=[{key:"embed",value:function(){var e=this;return new Promise((function(t){var n=e.options.parent;n.innerHTML=r.ZP.translateHtml('<div class="recordingFields hide"> <div class="recordSeriesContainer recordingFields-buttons flex align-items-center hide"> <div> <button is="emby-button" type="button" class="raised recordingButton seriesRecordingButton"> <span class="material-icons recordingIcon fiber_smart_record" aria-hidden="true"></span> <span class="buttonText">${RecordSeries}</span> </button> </div> <button is="emby-button" type="button" class="button-flat secondaryText manageRecordingButton btnManageSeriesRecording hide"> <span class="manageButtonText">${SeriesSettings}</span> </button> </div> <div class="recordingFields-buttons flex align-items-center"> <div> <button is="emby-button" type="button" class="raised recordingButton singleRecordingButton"> <span class="material-icons recordingIcon fiber_manual_record" aria-hidden="true"></span> <span class="buttonText">${Record}</span> </button> </div> <button is="emby-button" type="button" class="button-flat secondaryText manageRecordingButton btnManageRecording hide"> <span class="manageButtonText">${Settings}</span> </button> </div> </div> ',"core"),n.querySelector(".singleRecordingButton").addEventListener("click",b.bind(e)),n.querySelector(".seriesRecordingButton").addEventListener("click",S.bind(e)),n.querySelector(".btnManageRecording").addEventListener("click",f.bind(e)),n.querySelector(".btnManageSeriesRecording").addEventListener("click",v.bind(e)),g(e).then(t)}))}},{key:"hasChanged",value:function(){return this.changed}},{key:"refresh",value:function(){g(this)}},{key:"destroy",value:function(){var e=this.timerChangedHandler;this.timerChangedHandler=null,i.Events.off(s.default,"TimerCreated",e),i.Events.off(s.default,"TimerCancelled",e);var t=this.seriesTimerChangedHandler;this.seriesTimerChangedHandler=null,i.Events.off(s.default,"SeriesTimerCreated",t),i.Events.off(s.default,"SeriesTimerCancelled",t)}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}()},7547:function(e,t,n){var r=n(54933),i=n.n(r),s=n(93476),o=n.n(s)()(i());o.push([e.id,".recordingButton{margin-left:0;min-width:10em}.recordingIcon-active{color:#c33}.recordSeriesContainer{margin-bottom:.8em}",""]),t.Z=o},48085:function(e,t,n){var r=n(1892),i=n.n(r),s=n(95760),o=n.n(s),a=n(38311),d=n.n(a),c=n(58192),l=n.n(c),u=n(38060),g=n.n(u),h=n(54865),m=n.n(h),f=n(7547),v={};v.styleTagTransform=m(),v.setAttributes=l(),v.insert=d().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=g(),i()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals}}]);