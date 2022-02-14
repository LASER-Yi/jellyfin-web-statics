"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[570],{16735:function(t,e,a){a.r(e),a.d(e,{default:function(){return v}}),a(69217),a(76056),a(71848);var s=a(6594),n=a(47005),i=a(53754),l=a(1197),r=a(19502),o=a(57971),d=a(9785);function c(t){ApiClient.getScheduledTasks({isHidden:!1}).then((function(e){!function(t,e){var a;e=e.sort((function(t,e){return(t=t.Category+" "+t.Name)==(e=e.Category+" "+e.Name)?0:t<e?-1:1}));for(var s="",n=0;n<e.length;n++){var l=e[n];l.Category!=a&&((a=l.Category)&&(s+="</div>",s+="</div>"),s+='<div class="verticalSection verticalSection-extrabottompadding">',s+='<div class="sectionTitleContainer" style="margin-bottom:1em;">',s+='<h2 class="sectionTitle">',s+=a,s+="</h2>",0===n&&(s+='<a is="emby-linkbutton" class="raised button-alt headerHelpButton" target="_blank" href="https://docs.jellyfin.org/general/server/tasks.html">'+i.ZP.translate("Help")+"</a>"),s+="</div>",s+='<div class="paperList">'),s+='<div class="listItem listItem-border scheduledTaskPaperIconItem" data-status="'+l.State+'">',s+="<a is='emby-linkbutton' style='margin:0;padding:0;' class='clearLink listItemIconContainer' href='scheduledtask.html?id="+l.Id+"'>",s+='<span class="material-icons listItemIcon schedule"></span>',s+="</a>",s+='<div class="listItemBody two-line">',s+="<a class='clearLink' style='margin:0;padding:0;display:block;text-align:left;' is='emby-linkbutton' href='scheduledtask.html?id="+l.Id+"'>",s+="<h3 class='listItemBodyText'>"+l.Name+"</h3>",s+="<div class='secondary listItemBodyText' id='taskProgress"+l.Id+"'>"+u(l)+"</div>",s+="</a>",s+="</div>","Running"===l.State?s+='<button type="button" is="paper-icon-button-light" id="btnTask'+l.Id+'" class="btnStopTask" data-taskid="'+l.Id+'" title="'+i.ZP.translate("ButtonStop")+'"><span class="material-icons stop"></span></button>':"Idle"===l.State&&(s+='<button type="button" is="paper-icon-button-light" id="btnTask'+l.Id+'" class="btnStartTask" data-taskid="'+l.Id+'" title="'+i.ZP.translate("ButtonStart")+'"><span class="material-icons play_arrow"></span></button>'),s+="</div>"}e.length&&(s+="</div>",s+="</div>"),t.querySelector(".divScheduledTasks").innerHTML=s}(t,e),s.ZP.hide()}))}function u(t){var e="";if("Idle"===t.State){if(t.LastExecutionResult){var a=Date.parse(t.LastExecutionResult.EndTimeUtc),s=Date.parse(t.LastExecutionResult.StartTimeUtc);e+=i.ZP.translate("LabelScheduledTaskLastRan",(0,r.Z)(a,d.mF),(0,o.Z)(s,a,{locale:(0,d.Kd)()})),"Failed"===t.LastExecutionResult.Status?e+=" <span style='color:#FF0000;'>("+i.ZP.translate("LabelFailed")+")</span>":"Cancelled"===t.LastExecutionResult.Status?e+=" <span style='color:#0026FF;'>("+i.ZP.translate("LabelCancelled")+")</span>":"Aborted"===t.LastExecutionResult.Status&&(e+=" <span style='color:#FF0000;'>"+i.ZP.translate("LabelAbortedByServerShutdown")+"</span>")}}else if("Running"===t.State){var n=(t.CurrentProgressPercentage||0).toFixed(1);e+='<div style="display:flex;align-items:center;">',e+='<div class="taskProgressOuter" title="'+n+'%" style="flex-grow:1;">',e+='<div class="taskProgressInner" style="width:'+n+'%;">',e+="</div>",e+="</div>",e+="<span style='color:#00a4dc;margin-left:5px;'>"+n+"%</span>",e+="</div>"}else e+="<span style='color:#FF0000;'>"+i.ZP.translate("LabelStopping")+"</span>";return e}function Z(t,e){var a=t.querySelector(".material-icons");a.classList.remove("stop","play_arrow"),a.classList.add(e)}function p(t,e){"Running"===e?(t.classList.remove("btnStartTask"),t.classList.add("btnStopTask"),Z(t,"stop"),t.title=i.ZP.translate("ButtonStop")):"Idle"===e&&(t.classList.add("btnStartTask"),t.classList.remove("btnStopTask"),Z(t,"play_arrow"),t.title=i.ZP.translate("ButtonStart")),$(t).parents(".listItem")[0].setAttribute("data-status",e)}function v(t,e){function a(){ApiClient.isMessageChannelOpen()||c(t)}function i(e,a,s){a.serverId()===o&&function(e){for(var a=0;a<e.length;a++){var s=e[a];t.querySelector("#taskProgress"+s.Id).innerHTML=u(s),p(t.querySelector("#btnTask"+s.Id),s.State)}}(s)}var r,o=ApiClient.serverId();$(".divScheduledTasks",t).on("click",".btnStartTask",(function(){var e=this,a=e.getAttribute("data-taskid");ApiClient.startScheduledTask(a).then((function(){p(e,"Running"),c(t)}))})),$(".divScheduledTasks",t).on("click",".btnStopTask",(function(){var e=this,a=e.getAttribute("data-taskid");ApiClient.stopScheduledTask(a).then((function(){p(e,""),c(t)}))})),t.addEventListener("viewbeforehide",(function(){n.Events.off(l.default,"ScheduledTasksInfo",i),ApiClient.sendMessage("ScheduledTasksInfoStop"),r&&clearInterval(r)})),t.addEventListener("viewshow",(function(){s.ZP.show(),ApiClient.sendMessage("ScheduledTasksInfoStart","1000,1000"),r&&clearInterval(r),r=setInterval(a,1e4),c(t),n.Events.on(l.default,"ScheduledTasksInfo",i)}))}a(17734),a(78066)},9785:function(t,e,a){a.d(e,{Kd:function(){return X},mF:function(){return Y}});var s=a(77946),n=a(12496),i=a(11401),l=a(84146),r=a(59996),o=a(78210),d=a(9477),c=a(33026),u=a(91814),Z=a(88303),p=a(22410),v=a(35997),f=a(73956),h=a(86496),k=a(6902),b=a(35163),g=a(36749),S=a(89310),m=a(22481),y=a(75710),I=a(11109),T=a(74270),L=a(37159),P=a(27324),C=a(68490),x=a(19046),w=a(81905),F=a(19656),A=a(5905),E=a(64660),R=a(69509),B=a(24770),H=a(84216),M=a(77411),q=a(23282),_=a(60754),z=a(21430),N=a(45614),$=a(83305),j=a(95861),D=a(37405),K=a(6148),O=a(63258),U=a(50281),W=a(67889),G=a(44362),J=a(69244),Q=a(96730),V=a(53754);function X(){return t=V.ZP.getCurrentLocale(),{af:s.Z,ar:n.Z,"be-by":i.Z,"bg-bg":l.Z,bn:r.Z,ca:o.Z,cs:d.Z,da:c.Z,de:u.Z,el:Z.Z,"en-gb":p.Z,"en-us":v.Z,eo:f.Z,es:h.Z,"es-ar":h.Z,"es-do":h.Z,"es-mx":h.Z,fa:k.Z,fi:b.Z,fr:g.Z,"fr-ca":S.Z,gl:m.Z,gsw:u.Z,he:y.Z,"hi-in":I.Z,hr:T.Z,hu:L.Z,id:P.Z,is:C.Z,it:x.Z,ja:w.Z,kk:F.Z,ko:A.Z,"lt-lt":E.Z,ms:R.Z,nb:B.Z,nl:H.Z,pl:M.Z,pt:q.Z,"pt-br":_.Z,"pt-pt":q.Z,ro:z.Z,ru:N.Z,sk:$.Z,"sl-si":j.Z,sv:D.Z,ta:K.Z,th:O.Z,tr:U.Z,uk:W.Z,vi:G.Z,"zh-cn":J.Z,"zh-hk":J.Z,"zh-tw":Q.Z}[t]||v.Z;var t}var Y={addSuffix:!0,locale:X()};e.ZP={getLocale:X,localeWithSuffix:Y}}}]);