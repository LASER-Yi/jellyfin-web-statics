"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5967],{69287:function(e,t,n){n.r(t),n(5769),n(63238),n(61418),n(17460),n(14078),n(72326);var o=n(56705),i=n(44614),r=(n(78066),n(93586)),c=n(61642);function a(){o.ZP.show();var e=this;return ApiClient.getNamedConfiguration("livetv").then((function(t){t.GuideDays=$("#selectGuideDays",e).val()||null;var n=e.querySelector("#txtRecordingPath").value||null,o=e.querySelector("#txtMovieRecordingPath").value||null,a=e.querySelector("#txtSeriesRecordingPath").value||null,s=n!=t.RecordingPath||o!=t.MovieRecordingPath||a!=t.SeriesRecordingPath;t.RecordingPath=n,t.MovieRecordingPath=o,t.SeriesRecordingPath=a,t.RecordingEncodingFormat="mkv",t.PrePaddingSeconds=60*$("#txtPrePaddingMinutes",e).val(),t.PostPaddingSeconds=60*$("#txtPostPaddingMinutes",e).val(),t.RecordingPostProcessor=$("#txtPostProcessor",e).val(),t.RecordingPostProcessorArguments=$("#txtPostProcessorArguments",e).val(),ApiClient.updateNamedConfiguration("livetv",t).then((function(){r.ZP.processServerConfigurationUpdateResult(),function(e){var t="";e&&(t+=i.ZP.translate("MessageChangeRecordingPath")),t&&(0,c.Z)(t)}(s)}))})),!1}$(document).on("pageinit","#liveTvSettingsPage",(function(){var e=this;$(".liveTvSettingsForm").off("submit",a).on("submit",a),$("#btnSelectRecordingPath",e).on("click.selectDirectory",(function(){Promise.resolve().then(n.bind(n,89618)).then((function(t){var n=new(0,t.default);n.show({callback:function(t){t&&$("#txtRecordingPath",e).val(t),n.close()},validateWriteable:!0})}))})),$("#btnSelectMovieRecordingPath",e).on("click.selectDirectory",(function(){Promise.resolve().then(n.bind(n,89618)).then((function(t){var n=new(0,t.default);n.show({callback:function(t){t&&$("#txtMovieRecordingPath",e).val(t),n.close()},validateWriteable:!0})}))})),$("#btnSelectSeriesRecordingPath",e).on("click.selectDirectory",(function(){Promise.resolve().then(n.bind(n,89618)).then((function(t){var n=new(0,t.default);n.show({callback:function(t){t&&$("#txtSeriesRecordingPath",e).val(t),n.close()},validateWriteable:!0})}))})),$("#btnSelectPostProcessorPath",e).on("click.selectDirectory",(function(){Promise.resolve().then(n.bind(n,89618)).then((function(t){var n=new(0,t.default);n.show({includeFiles:!0,callback:function(t){t&&$("#txtPostProcessor",e).val(t),n.close()}})}))}))})).on("pageshow","#liveTvSettingsPage",(function(){o.ZP.show();var e=this;ApiClient.getNamedConfiguration("livetv").then((function(t){!function(e,t){$(".liveTvSettingsForm",e).show(),$(".noLiveTvServices",e).hide(),$("#selectGuideDays",e).val(t.GuideDays||""),$("#txtPrePaddingMinutes",e).val(t.PrePaddingSeconds/60),$("#txtPostPaddingMinutes",e).val(t.PostPaddingSeconds/60),e.querySelector("#txtRecordingPath").value=t.RecordingPath||"",e.querySelector("#txtMovieRecordingPath").value=t.MovieRecordingPath||"",e.querySelector("#txtSeriesRecordingPath").value=t.SeriesRecordingPath||"",e.querySelector("#txtPostProcessor").value=t.RecordingPostProcessor||"",e.querySelector("#txtPostProcessorArguments").value=t.RecordingPostProcessorArguments||"",o.ZP.hide()}(e,t)}))}))}}]);