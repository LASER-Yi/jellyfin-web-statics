(self.webpackChunk=self.webpackChunk||[]).push([[6508],{66508:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return Y}}),i(5769),i(61013),i(98010),i(63238),i(52077),i(72482),i(20266),i(27471),i(48410),i(61418),i(17460),i(14078),i(911),i(32081),i(38217),i(72410),i(69217);var a,n,l,r=i(83094),s=i(78695),o=i(1115),d=i(28469),u=i(6594),c=i(27515),p=i(53754),b=i(29856),v=(i(65219),i(30983),i(50447),i(17734),i(92303),i(78066),i(21865),i(16589),i(1892)),y=i.n(v),m=i(58329),f=(y()(m.Z,{insert:"head",singleton:!1}),m.Z.locals,i(93462),i(53913)),h=i(38440),g=i(6383),S=i(60417),x=i.n(S);function C(e){a.classList.contains("dialog")&&o.default.close(a)}function A(e){var t=e.querySelectorAll(".chkAirDay:checked")||[];return Array.prototype.map.call(t,(function(e){return e.getAttribute("data-day")}))}function T(e){return e.querySelector("#txtAlbumArtist").value.trim().split(";").filter((function(e){return e.length>0})).map((function(e){return{Name:e}}))}function L(e){return e.querySelector("#txtArtist").value.trim().split(";").filter((function(e){return e.length>0})).map((function(e){return{Name:e}}))}function P(e,t,i){var a=e.querySelector(t).value;if(!a)return null;if(l[i]){var n=d.ZP.parseISO8601Date(l[i],!0).toISOString().split("T");0===n[0].indexOf(a)&&(a+="T"+n[1])}return a}function D(e){u.ZP.show();var t=this,i={Id:l.Id,Name:t.querySelector("#txtName").value,OriginalTitle:t.querySelector("#txtOriginalName").value,ForcedSortName:t.querySelector("#txtSortName").value,CommunityRating:t.querySelector("#txtCommunityRating").value,CriticRating:t.querySelector("#txtCriticRating").value,IndexNumber:t.querySelector("#txtIndexNumber").value||null,AirsBeforeSeasonNumber:t.querySelector("#txtAirsBeforeSeason").value,AirsAfterSeasonNumber:t.querySelector("#txtAirsAfterSeason").value,AirsBeforeEpisodeNumber:t.querySelector("#txtAirsBeforeEpisode").value,ParentIndexNumber:t.querySelector("#txtParentIndexNumber").value||null,DisplayOrder:t.querySelector("#selectDisplayOrder").value,Album:t.querySelector("#txtAlbum").value,AlbumArtists:T(t),ArtistItems:L(t),Overview:t.querySelector("#txtOverview").value,Status:t.querySelector("#selectStatus").value,AirDays:A(t),AirTime:t.querySelector("#txtAirTime").value,Genres:q(t.querySelector("#listGenres")),Tags:q(t.querySelector("#listTags")),Studios:q(t.querySelector("#listStudios")).map((function(e){return{Name:e}})),PremiereDate:P(t,"#txtPremiereDate","PremiereDate"),DateCreated:P(t,"#txtDateAdded","DateCreated"),EndDate:P(t,"#txtEndDate","EndDate"),ProductionYear:t.querySelector("#txtProductionYear").value,AspectRatio:t.querySelector("#txtOriginalAspectRatio").value,Video3DFormat:t.querySelector("#select3dFormat").value,OfficialRating:t.querySelector("#selectOfficialRating").value,CustomRating:t.querySelector("#selectCustomRating").value,People:l.People,LockData:t.querySelector("#chkLockData").checked,LockedFields:Array.prototype.filter.call(t.querySelectorAll(".selectLockedField"),(function(e){return!e.checked})).map((function(e){return e.getAttribute("data-value")}))};i.ProviderIds=Object.assign({},l.ProviderIds);var a=t.querySelectorAll(".txtExternalId");if(Array.prototype.map.call(a,(function(e){var t=e.getAttribute("data-providerkey");i.ProviderIds[t]=e.value})),i.PreferredMetadataLanguage=t.querySelector("#selectLanguage").value,i.PreferredMetadataCountryCode=t.querySelector("#selectCountry").value,"Person"===l.Type){var r=t.querySelector("#txtPlaceOfBirth").value;i.ProductionLocations=r?[r]:[]}if("Series"===l.Type){var s=t.querySelector("#txtSeriesRuntime").value;i.RunTimeTicks=s?6e8*s:null}var o=t.querySelector("#txtTagline").value;return i.Taglines=o?[o]:[],function(e,t){function i(){(0,h.Z)(p.ZP.translate("MessageItemSaved")),u.ZP.hide(),C()}var a=O();a.updateItem(t).then((function(){var l=e.querySelector("#selectContentType").value||"";(n.ContentType||"")!==l?a.ajax({url:a.getUrl("Items/"+t.Id+"/ContentType",{ContentType:l}),type:"POST"}).then((function(){i()})):i()}))}(t,i),e.preventDefault(),e.stopPropagation(),!1}function q(e){return Array.prototype.map.call(e.querySelectorAll(".textValue"),(function(e){return e.textContent}))}function I(e,t,a){i.e(9302).then(i.bind(i,79302)).then((function(i){i.default.show(t).then((function(t){-1===a&&l.People.push(t),M(e,l.People)}))}))}function k(e){var t,a,n=r.ZP.parentWithClass(e.target,"btnRemoveFromEditorList");if(n)return t=n,void(a=r.ZP.parentWithClass(t,"listItem")).parentNode.removeChild(a);var l=r.ZP.parentWithClass(e.target,"btnAddTextItem");l&&function(e,t){i.e(5506).then(i.bind(i,95506)).then((function(t){(0,t.default)({label:"Value:"}).then((function(t){var i=r.ZP.parentWithClass(e,"editableListviewContainer").querySelector(".paperList"),a=q(i);a.push(t),H(i,a,undefined)}))}))}(l)}function O(){return f.Z.getApiClient(l.ServerId)}function N(e,t){e.querySelector(".externalIds").addEventListener("click",(function(t){var i=r.ZP.parentWithClass(t.target,"btnOpenExternalId");if(i){var a=e.querySelector("#"+i.getAttribute("data-fieldid")),n=a.getAttribute("data-formatstring");a.value&&b.Z.openUrl(n.replace("{0}",a.value))}})),s.Z.desktop||(e.querySelector(".btnBack").classList.remove("hide"),e.querySelector(".btnClose").classList.add("hide")),function(e,t,i){for(var a=0,n=e.length;a<n;a++)e[a].addEventListener("click",i)}(e.querySelectorAll(".btnCancel"),0,(function(e){e.preventDefault(),C()})),e.querySelector(".btnMore").addEventListener("click",(function(t){O().getCurrentUser().then((function(a){!function(e,t,a){i.e(7046).then(i.bind(i,27046)).then((function(i){var n=i.default,r=l;n.show({item:r,positionTo:t,edit:!1,editImages:!0,editSubtitles:!0,sync:!1,share:!1,play:!1,queue:!1,user:a}).then((function(t){t.deleted?function(e,t){var i=t.ParentId||t.SeasonId||t.SeriesId;i?F(e,i,t.ServerId):g.appRouter.goHome()}(e,r):t.updated&&F(e,r.Id,r.ServerId)}))}))}(e,t.target,a)}))})),e.querySelector(".btnHeaderSave").addEventListener("click",(function(t){e.querySelector(".btnSave").click()})),e.querySelector("#chkLockData").addEventListener("click",(function(e){e.target.checked?Z(".providerSettingsContainer"):$(".providerSettingsContainer")})),e.removeEventListener("click",k),e.addEventListener("click",k);var a=e.querySelector("form");a.removeEventListener("submit",D),a.addEventListener("submit",D),e.querySelector("#btnAddPerson").addEventListener("click",(function(t,i){I(e,{},-1)})),e.querySelector("#peopleList").addEventListener("click",(function(t){var i,a=r.ZP.parentWithClass(t.target,"btnDeletePerson");a&&(i=parseInt(a.getAttribute("data-index")),l.People.splice(i,1),M(e,l.People));var n=r.ZP.parentWithClass(t.target,"btnEditPerson");n&&(i=parseInt(n.getAttribute("data-index")),I(e,l.People[i],i))}))}function E(e,t){var i=f.Z.getApiClient(t);return e?i.getItem(i.getCurrentUserId(),e):i.getRootFolder(i.getCurrentUserId())}function R(e,t){var i=f.Z.getApiClient(t);return e?i.getJSON(i.getUrl("Items/"+e+"/MetadataEditor")):Promise.resolve({})}function Z(e,t,i){if(t=t||document,"string"==typeof e){var a=i?t.querySelectorAll(e):[t.querySelector(e)];Array.prototype.forEach.call(a,(function(e){e&&e.classList.add("hide")}))}else e.classList.add("hide")}function $(e,t,i){if(t=t||document,"string"==typeof e){var a=i?t.querySelectorAll(e):[t.querySelector(e)];Array.prototype.forEach.call(a,(function(e){e&&e.classList.remove("hide")}))}else e.classList.remove("hide")}function w(e,t,i){var a="";a+="<option value=''></option>";for(var n,l=[],r=!1,s=0,o=e.length;s<o;s++)n=e[s],l.push({Name:n.Name,Value:n.Name}),n.Name===i&&(r=!0);i&&!r&&l.push({Name:i,Value:i});for(var d=0,u=l.length;d<u;d++)a+="<option value='"+(n=l[d]).Value+"'>"+n.Name+"</option>";t.innerHTML=a}function H(e,t,i){t=t||[],void 0===i?t.sort((function(e,t){return e.toLowerCase().localeCompare(t.toLowerCase())})):t=i(t);for(var a="",n=0;n<t.length;n++)a+='<div class="listItem">',a+='<span class="material-icons listItemIcon live_tv" style="background-color:#333;"></span>',a+='<div class="listItemBody">',a+='<div class="textValue">',a+=t[n],a+="</div>",a+="</div>",a+='<button type="button" is="paper-icon-button-light" data-index="'+n+'" class="btnRemoveFromEditorList autoSize"><span class="material-icons delete"></span></button>',a+="</div>";e.innerHTML=a}function M(e,t){for(var i="",a=e.querySelector("#peopleList"),n=0,l=t.length;n<l;n++){var r=t[n];i+='<div class="listItem">',i+='<span class="material-icons listItemIcon person" style="background-color:#333;"></span>',i+='<div class="listItemBody">',i+='<button style="text-align:left;" type="button" class="btnEditPerson clearButton" data-index="'+n+'">',i+='<div class="textValue">',i+=r.Name||"",i+="</div>",r.Role&&""!==r.Role&&(i+='<div class="secondary">'+r.Role+"</div>"),i+="</button>",i+="</div>",i+='<button type="button" is="paper-icon-button-light" data-index="'+n+'" class="btnDeletePerson autoSize"><span class="material-icons delete"></span></button>',i+="</div>"}a.innerHTML=i}function F(e,t,i){u.ZP.show(),Promise.all([E(t,i),R(t,i)]).then((function(t){var i=t[0];n=t[1],l=i;var a=n.Cultures,r=n.Countries;!function(e,t){t.ContentTypeOptions.length?$("#fldContentType",e):Z("#fldContentType",e);var i=t.ContentTypeOptions.map((function(e){return'<option value="'+e.Value+'">'+e.Name+"</option>"})).join(""),a=e.querySelector("#selectContentType");a.innerHTML=i,a.value=t.ContentType||""}(e,n),function(e,t,i){for(var a="",n=t.ProviderIds||{},l=0,r=i.length;l<r;l++){var s=i[l],o="txt1"+s.Key,d=s.UrlFormatString||"",u=s.Name;s.Type&&(u=s.Name+" "+p.ZP.translate(s.Type));var c=p.ZP.translate("LabelDynamicExternalId",u);a+='<div class="inputContainer">',a+='<div class="flex align-items-center">',a+='<div class="flex-grow">',a+='<input is="emby-input" class="txtExternalId" value="'+(n[s.Key]||"")+'" data-providerkey="'+s.Key+'" data-formatstring="'+d+'" id="'+o+'" label="'+c+'"/>',a+="</div>",d&&(a+='<button type="button" is="paper-icon-button-light" class="btnOpenExternalId align-self-flex-end" data-fieldid="'+o+'"><span class="material-icons open_in_browser"></span></button>'),a+="</div>",a+="</div>"}e.querySelector(".externalIds",e).innerHTML=a,i.length?e.querySelector(".externalIdsSection").classList.remove("hide"):e.querySelector(".externalIdsSection").classList.add("hide")}(e,i,n.ExternalIdInfos),function(e,t){var i="";i+="<option value=''></option>";for(var a=0,n=t.length;a<n;a++){var l=t[a];i+="<option value='"+l.TwoLetterISOLanguageName+"'>"+l.DisplayName+"</option>"}e.innerHTML=i}(e.querySelector("#selectLanguage"),a),function(e,t){var i="";i+="<option value=''></option>";for(var a=0,n=t.length;a<n;a++){var l=t[a];i+="<option value='"+l.TwoLetterISORegionName+"'>"+l.DisplayName+"</option>"}e.innerHTML=i}(e.querySelector("#selectCountry"),r),function(e,t){t.Path&&!1!==t.EnableMediaSourceDisplay?$("#fldPath",e):Z("#fldPath",e),"Series"===t.Type||"Movie"===t.Type||"Trailer"===t.Type?$("#fldOriginalName",e):Z("#fldOriginalName",e),"Series"===t.Type?$("#fldSeriesRuntime",e):Z("#fldSeriesRuntime",e),"Series"===t.Type||"Person"===t.Type?$("#fldEndDate",e):Z("#fldEndDate",e),"MusicAlbum"===t.Type?$("#albumAssociationMessage",e):Z("#albumAssociationMessage",e),"Movie"===t.Type||"Trailer"===t.Type?$("#fldCriticRating",e):Z("#fldCriticRating",e),"Series"===t.Type?($("#fldStatus",e),$("#fldAirDays",e),$("#fldAirTime",e)):(Z("#fldStatus",e),Z("#fldAirDays",e),Z("#fldAirTime",e)),"Video"===t.MediaType&&"TvChannel"!==t.Type?$("#fld3dFormat",e):Z("#fld3dFormat",e),"Audio"===t.Type?$("#fldAlbumArtist",e):Z("#fldAlbumArtist",e),"Audio"===t.Type||"MusicVideo"===t.Type?($("#fldArtist",e),$("#fldAlbum",e)):(Z("#fldArtist",e),Z("#fldAlbum",e)),"Episode"===t.Type&&0===t.ParentIndexNumber?$("#collapsibleSpecialEpisodeInfo",e):Z("#collapsibleSpecialEpisodeInfo",e),"Person"===t.Type||"Genre"===t.Type||"Studio"===t.Type||"MusicGenre"===t.Type||"TvChannel"===t.Type||"Book"===t.Type?Z("#peopleCollapsible",e):$("#peopleCollapsible",e),"Person"===t.Type||"Genre"===t.Type||"Studio"===t.Type||"MusicGenre"===t.Type||"TvChannel"===t.Type?(Z("#fldCommunityRating",e),Z("#genresCollapsible",e),Z("#studiosCollapsible",e),"TvChannel"===t.Type?$("#fldOfficialRating",e):Z("#fldOfficialRating",e),Z("#fldCustomRating",e)):($("#fldCommunityRating",e),$("#genresCollapsible",e),$("#studiosCollapsible",e),$("#fldOfficialRating",e),$("#fldCustomRating",e)),$("#tagsCollapsible",e),"TvChannel"===t.Type?(Z("#metadataSettingsCollapsible",e),Z("#fldPremiereDate",e),Z("#fldDateAdded",e),Z("#fldYear",e)):($("#metadataSettingsCollapsible",e),$("#fldPremiereDate",e),$("#fldDateAdded",e),$("#fldYear",e)),"TvChannel"===t.Type?Z(".overviewContainer",e):$(".overviewContainer",e),"Person"===t.Type?(e.querySelector("#txtProductionYear").label(p.ZP.translate("LabelBirthYear")),e.querySelector("#txtPremiereDate").label(p.ZP.translate("LabelBirthDate")),e.querySelector("#txtEndDate").label(p.ZP.translate("LabelDeathDate")),$("#fldPlaceOfBirth")):(e.querySelector("#txtProductionYear").label(p.ZP.translate("LabelYear")),e.querySelector("#txtPremiereDate").label(p.ZP.translate("LabelReleaseDate")),e.querySelector("#txtEndDate").label(p.ZP.translate("LabelEndDate")),Z("#fldPlaceOfBirth")),"Video"===t.MediaType&&"TvChannel"!==t.Type?$("#fldOriginalAspectRatio"):Z("#fldOriginalAspectRatio"),"Audio"===t.Type||"Episode"===t.Type||"Season"===t.Type?($("#fldIndexNumber"),"Episode"===t.Type?e.querySelector("#txtIndexNumber").label(p.ZP.translate("LabelEpisodeNumber")):"Season"===t.Type?e.querySelector("#txtIndexNumber").label(p.ZP.translate("LabelSeasonNumber")):"Audio"===t.Type?e.querySelector("#txtIndexNumber").label(p.ZP.translate("LabelTrackNumber")):e.querySelector("#txtIndexNumber").label(p.ZP.translate("LabelNumber"))):Z("#fldIndexNumber"),"Audio"===t.Type||"Episode"===t.Type?($("#fldParentIndexNumber"),"Episode"===t.Type?e.querySelector("#txtParentIndexNumber").label(p.ZP.translate("LabelSeasonNumber")):"Audio"===t.Type?e.querySelector("#txtParentIndexNumber").label(p.ZP.translate("LabelDiscNumber")):e.querySelector("#txtParentIndexNumber").label(p.ZP.translate("LabelParentNumber"))):Z("#fldParentIndexNumber",e),"BoxSet"===t.Type?($("#fldDisplayOrder",e),Z(".seriesDisplayOrderDescription",e),e.querySelector("#selectDisplayOrder").innerHTML='<option value="SortName">'+p.ZP.translate("SortName")+'</option><option value="PremiereDate">'+p.ZP.translate("ReleaseDate")+"</option>"):"Series"===t.Type?($("#fldDisplayOrder",e),$(".seriesDisplayOrderDescription",e),e.querySelector("#selectDisplayOrder").innerHTML='<option value="">'+p.ZP.translate("Aired")+'</option><option value="absolute">'+p.ZP.translate("Absolute")+'</option><option value="dvd">Dvd</option>'):(e.querySelector("#selectDisplayOrder").innerHTML="",Z("#fldDisplayOrder",e))}(e,i),function(e,t,i){var a=e.querySelector("#selectOfficialRating");w(i,a,t.OfficialRating),a.value=t.OfficialRating||"",w(i,a=e.querySelector("#selectCustomRating"),t.CustomRating),a.value=t.CustomRating||"";var n=e.querySelector("#selectStatus");!function(e){var t="";t+="<option value=''></option>",t+="<option value='Continuing'>"+p.ZP.translate("Continuing")+"</option>",t+="<option value='Ended'>"+p.ZP.translate("Ended")+"</option>",e.innerHTML=t}(n),n.value=t.Status||"",e.querySelector("#select3dFormat",e).value=t.Video3DFormat||"",Array.prototype.forEach.call(e.querySelectorAll(".chkAirDay",e),(function(e){e.checked=-1!==(t.AirDays||[]).indexOf(e.getAttribute("data-day"))})),H(e.querySelector("#listGenres"),t.Genres),M(e,t.People||[]),H(e.querySelector("#listStudios"),(t.Studios||[]).map((function(e){return e.Name||""}))),H(e.querySelector("#listTags"),t.Tags);var l,r=t.LockData||!1,s=e.querySelector("#chkLockData");if(s.checked=r,s.checked?Z(".providerSettingsContainer",e):$(".providerSettingsContainer",e),function(e,t,i){var a=e.querySelector(".providerSettingsContainer");i=i||[];var n=[{name:p.ZP.translate("Name"),value:"Name"},{name:p.ZP.translate("Overview"),value:"Overview"},{name:p.ZP.translate("Genres"),value:"Genres"},{name:p.ZP.translate("ParentalRating"),value:"OfficialRating"},{name:p.ZP.translate("People"),value:"Cast"}];"Person"===t.Type?n.push({name:p.ZP.translate("BirthLocation"),value:"ProductionLocations"}):n.push({name:p.ZP.translate("ProductionLocations"),value:"ProductionLocations"}),"Series"===t.Type&&n.push({name:p.ZP.translate("Runtime"),value:"Runtime"}),n.push({name:p.ZP.translate("Studios"),value:"Studios"}),n.push({name:p.ZP.translate("Tags"),value:"Tags"});var l="";l+="<h2>"+p.ZP.translate("HeaderEnabledFields")+"</h2>",l+="<p>"+p.ZP.translate("HeaderEnabledFieldsHelp")+"</p>",l+=function(e,t){for(var i="",a=0;a<e.length;a++){var n=e[a],l=n.name,r=n.value||n.name;i+="<label>",i+='<input type="checkbox" is="emby-checkbox" class="selectLockedField" data-value="'+r+'"'+(-1===t.indexOf(r)?" checked":"")+"/>",i+="<span>"+l+"</span>",i+="</label>"}return i}(n,i),a.innerHTML=l}(e,t,t.LockedFields),e.querySelector("#txtPath").value=t.Path||"",e.querySelector("#txtName").value=t.Name||"",e.querySelector("#txtOriginalName").value=t.OriginalTitle||"",e.querySelector("#txtOverview").value=t.Overview||"",e.querySelector("#txtTagline").value=t.Taglines&&t.Taglines.length?t.Taglines[0]:"",e.querySelector("#txtSortName").value=t.ForcedSortName||"",e.querySelector("#txtCommunityRating").value=t.CommunityRating||"",e.querySelector("#txtCriticRating").value=t.CriticRating||"",e.querySelector("#txtIndexNumber").value=null==t.IndexNumber?"":t.IndexNumber,e.querySelector("#txtParentIndexNumber").value=null==t.ParentIndexNumber?"":t.ParentIndexNumber,e.querySelector("#txtAirsBeforeSeason").value="AirsBeforeSeasonNumber"in t?t.AirsBeforeSeasonNumber:"",e.querySelector("#txtAirsAfterSeason").value="AirsAfterSeasonNumber"in t?t.AirsAfterSeasonNumber:"",e.querySelector("#txtAirsBeforeEpisode").value="AirsBeforeEpisodeNumber"in t?t.AirsBeforeEpisodeNumber:"",e.querySelector("#txtAlbum").value=t.Album||"",e.querySelector("#txtAlbumArtist").value=(t.AlbumArtists||[]).map((function(e){return e.Name})).join(";"),e.querySelector("#selectDisplayOrder").value=t.DisplayOrder||"",e.querySelector("#txtArtist").value=(t.ArtistItems||[]).map((function(e){return e.Name})).join(";"),t.DateCreated)try{l=d.ZP.parseISO8601Date(t.DateCreated,!0),e.querySelector("#txtDateAdded").value=l.toISOString().slice(0,10)}catch(t){e.querySelector("#txtDateAdded").value=""}else e.querySelector("#txtDateAdded").value="";if(t.PremiereDate)try{l=d.ZP.parseISO8601Date(t.PremiereDate,!0),e.querySelector("#txtPremiereDate").value=l.toISOString().slice(0,10)}catch(t){e.querySelector("#txtPremiereDate").value=""}else e.querySelector("#txtPremiereDate").value="";if(t.EndDate)try{l=d.ZP.parseISO8601Date(t.EndDate,!0),e.querySelector("#txtEndDate").value=l.toISOString().slice(0,10)}catch(t){e.querySelector("#txtEndDate").value=""}else e.querySelector("#txtEndDate").value="";e.querySelector("#txtProductionYear").value=t.ProductionYear||"",e.querySelector("#txtAirTime").value=t.AirTime||"";var o=t.ProductionLocations&&t.ProductionLocations.length?t.ProductionLocations[0]:"";if(e.querySelector("#txtPlaceOfBirth").value=o,e.querySelector("#txtOriginalAspectRatio").value=t.AspectRatio||"",e.querySelector("#selectLanguage").value=t.PreferredMetadataLanguage||"",e.querySelector("#selectCountry").value=t.PreferredMetadataCountryCode||"",t.RunTimeTicks){var u=t.RunTimeTicks/6e8;e.querySelector("#txtSeriesRuntime").value=Math.round(u)}else e.querySelector("#txtSeriesRuntime",e).value=""}(e,i,n.ParentalRatingOptions),"Video"===i.MediaType&&"Episode"!==i.Type&&"TvChannel"!==i.Type?$("#fldTagline",e):Z("#fldTagline",e),u.ZP.hide()}))}function B(e,t,a){Promise.resolve().then(i.bind(i,74227)).then((function(i){var n=a?"on":"off";i.centerFocus[n](e,t)}))}var Y={show:function(e,t){return new Promise((function(i,n){return function(e,t,i,n){u.ZP.show();var l={removeOnClose:!0,scrollY:!1};s.Z.tv?l.size="fullscreen":l.size="small";var r=o.default.createDialog(l);r.classList.add("formDialog");var d="";d+=p.ZP.translateHtml(x(),"core"),r.innerHTML=d,s.Z.tv&&B(r.querySelector(".formDialogContent"),!1,!0),o.default.open(r),r.addEventListener("close",(function(){s.Z.tv&&B(r.querySelector(".formDialogContent"),!1,!1),i()})),a=r,N(r,f.Z.getApiClient(t)),F(r,e,t)}(e,t,i)}))},embed:function(e,t,i){return new Promise((function(n,l){u.ZP.show(),e.innerHTML=p.ZP.translateHtml(x(),"core"),e.querySelector(".formDialogFooter").classList.remove("formDialogFooter"),e.querySelector(".btnClose").classList.add("hide"),e.querySelector(".btnHeaderSave").classList.remove("hide"),e.querySelector(".btnCancel").classList.add("hide"),a=e,N(e,f.Z.getApiClient(i)),F(e,t,i),c.Z.autoFocus(e)}))}}},92303:function(e,t,i){"use strict";i(32081),i(20252),i(99785);var a=i(1892),n=i.n(a),l=i(8254);function r(e,t){var i,a=this;function n(){if((!a.lineHeight||a.lineHeight<=0)&&(e.rows=1,i=a.getOffset(e),a.rows=e.rows||1,a.lineHeight=e.scrollHeight/a.rows-i/a.rows,a.maxAllowedHeight=a.lineHeight*t-i),a.lineHeight<=0)return e.style.overflowY="scroll",e.style.height="auto",void(e.rows=3);var n=0;e.scrollHeight-i>a.maxAllowedHeight?(e.style.overflowY="scroll",n=a.maxAllowedHeight):(e.style.overflowY="hidden",e.style.height="auto",n=e.scrollHeight),$(".customCssContainer").css("height",n+"px"),e.style.height=n+"px"}void 0===t&&(t=999),a.getOffset=function(e){for(var t=window.getComputedStyle(e,null),i=["paddingTop","paddingBottom"],a=0,n=0;n<i.length;n++)a+=parseInt(t[i[n]]);return a},e.addEventListener("input",n),e.addEventListener("focus",n),e.addEventListener("valueset",n),n()}n()(l.Z,{insert:"head",singleton:!1}),l.Z.locals,i(67752),i(30983);var s=Object.create(HTMLTextAreaElement.prototype),o=0;if(Object.getOwnPropertyDescriptor&&Object.defineProperty){var d=Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype,"value");if(d&&d.configurable){var u=d.set;d.set=function(e){u.call(this,e),this.dispatchEvent(new CustomEvent("valueset",{bubbles:!1,cancelable:!1}))},Object.defineProperty(HTMLTextAreaElement.prototype,"value",d)}}s.createdCallback=function(){this.id||(this.id="embytextarea"+o,o++)},s.attachedCallback=function(){if(!this.classList.contains("emby-textarea")){this.rows=1,this.classList.add("emby-textarea");var e=this.parentNode,t=this.ownerDocument.createElement("label");t.innerHTML=this.getAttribute("label")||"",t.classList.add("textareaLabel"),t.htmlFor=this.id,e.insertBefore(t,this),this.addEventListener("focus",(function(){t.classList.add("textareaLabelFocused"),t.classList.remove("textareaLabelUnfocused")})),this.addEventListener("blur",(function(){t.classList.remove("textareaLabelFocused"),t.classList.add("textareaLabelUnfocused")})),this.label=function(e){t.innerHTML=e},new r(this)}},document.registerElement("emby-textarea",{prototype:s,extends:"textarea"})},58329:function(e,t,i){"use strict";var a=i(93476),n=i.n(a)()((function(e){return e[1]}));n.push([e.id,".clearButton{background:transparent;border:0!important;padding:0!important;cursor:pointer;outline:none!important;color:inherit;width:100%;vertical-align:middle;font-family:inherit;font-size:inherit}",""]),t.Z=n},8254:function(e,t,i){"use strict";var a=i(93476),n=i.n(a)()((function(e){return e[1]}));n.push([e.id,".emby-textarea{display:block;margin:0;margin-bottom:0!important;font-size:inherit;font-family:inherit;font-weight:inherit;color:inherit;padding:.35em .25em;box-sizing:border-box;outline:none!important;-webkit-tap-highlight-color:rgba(0,0,0,0);width:100%}.emby-textarea::-moz-focus-inner{border:0}.textareaLabel{display:inline-block;transition:all .2s ease-out;margin-bottom:.25em}.emby-textarea+.fieldDescription{margin-top:.25em}",""]),t.Z=n},60417:function(e){e.exports='<div class="formDialogHeader"> <button is="paper-icon-button-light" class="btnCancel btnBack autoSize hide" tabindex="-1"><span class="material-icons arrow_back"></span></button> <h3 class="formDialogHeaderTitle"> ${Edit} </h3> <div style="margin-left:auto" class="flex align-items-center justify-content-center"> <button is="emby-button" type="button" class="btnHeaderSave button-accent-flat button-flat hide" tabindex="-1"> <span class="material-icons check"></span> <span>${Save}</span> </button> <button is="paper-icon-button-light" class="btnMore autoSize" tabindex="-1"> <span class="material-icons more_vert"></span> </button> <button is="paper-icon-button-light" class="btnCancel btnClose autoSize" tabindex="-1"> <span class="material-icons close"></span> </button> </div> </div> <div class="formDialogContent smoothScrollY" style="padding-top:2em"> <form class="editItemMetadataForm editMetadataForm dialogContentInner dialog-content-centered"> <div class="metadataFormFields"> <div style="padding:0 0 10px"> <div id="fldContentType" class="selectContainer hide"> <select is="emby-select" id="selectContentType" label="${LabelContentType}"></select> </div> <div id="fldPath" class="inputContainer"> <div class="align-items-center flex"> <div class="flex-grow"> <input is="emby-input" id="txtPath" type="text" label="${LabelPath}" class="flex-grow" readonly="readonly"/> </div> </div> </div> <div class="inputContainer"> <input is="emby-input" id="txtName" type="text" label="${LabelTitle}" required="required"/> </div> <div id="fldOriginalName" class="inputContainer"> <input is="emby-input" id="txtOriginalName" type="text" label="${LabelOriginalTitle}"/> </div> <div class="inputContainer"> <input is="emby-input" id="txtSortName" type="text" label="${LabelSortTitle}"/> </div> <div id="fldDateAdded" class="hide inputContainer"> <input is="emby-input" id="txtDateAdded" type="date" label="${LabelDateAdded}"/> <div class="fieldDescription">${ConfigureDateAdded}</div> </div> <div id="fldStatus" class="hide selectContainer"> <select is="emby-select" id="selectStatus" label="${LabelStatus}"></select> </div> <div id="fldArtist" class="hide inputContainer"> <input is="emby-input" id="txtArtist" type="text" label="${LabelArtists}"/> <div class="fieldDescription">${LabelArtistsHelp}</div> </div> <div id="fldAlbumArtist" class="hide inputContainer"> <input is="emby-input" id="txtAlbumArtist" type="text" label="${LabelAlbumArtists}"/> <div class="fieldDescription">${LabelArtistsHelp}</div> </div> <div id="fldAlbum" class="hide inputContainer"> <input is="emby-input" id="txtAlbum" type="text" label="${LabelAlbum}"/> </div> <div class="inlineForm"> <div id="fldParentIndexNumber" class="hide inputContainer"> <input is="emby-input" id="txtParentIndexNumber" type="number"/> </div> <div id="fldIndexNumber" class="hide inputContainer"> <input is="emby-input" id="txtIndexNumber" type="number" pattern="[0-9]*"/> </div> </div> <div id="fldCommunityRating" class="hide inputContainer"> <input is="emby-input" id="txtCommunityRating" type="number" step=".1" min="0" max="10" label="${LabelCommunityRating}"/> </div> <div id="fldCriticRating" class="hide inputContainer"> <input is="emby-input" id="txtCriticRating" type="number" step=".1" label="${LabelCriticRating}"/> </div> <div id="fldTagline" class="hide inputContainer"> <input is="emby-input" id="txtTagline" type="text" label="${LabelTagline}"/> </div> <div class="inputContainer overviewContainer hide"> <textarea is="emby-textarea" id="txtOverview" label="${LabelOverview}"></textarea> </div> <div id="fldPremiereDate" class="inputContainer"> <input is="emby-input" id="txtPremiereDate" label="${LabelReleaseDate}" type="date"/> </div> <div id="fldYear" class="hide inputContainer"> <input is="emby-input" id="txtProductionYear" type="number" label="${LabelYear}"/> </div> <div id="fldPlaceOfBirth" class="hide inputContainer"> <input is="emby-input" id="txtPlaceOfBirth" type="text" label="${LabelPlaceOfBirth}"/> </div> <div id="fldEndDate" class="inputContainer"> <input is="emby-input" id="txtEndDate" label="${LabelEndDate}" type="date"/> </div> <div id="fldAirDays" class="hide"> <p>${LabelAirDays}</p> <div class="checkboxList"> <label> <input type="checkbox" is="emby-checkbox" class="chkAirDay" data-day="Sunday"/> <span>${Sunday}</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkAirDay" data-day="Monday"/> <span>${Monday}</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkAirDay" data-day="Tuesday"/> <span>${Tuesday}</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkAirDay" data-day="Wednesday"/> <span>${Wednesday}</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkAirDay" data-day="Thursday"/> <span>${Thursday}</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkAirDay" data-day="Friday"/> <span>${Friday}</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkAirDay" data-day="Saturday"/> <span>${Saturday}</span> </label> </div> <br/> </div> <div id="fldAirTime" class="inputContainer hide"> <input is="emby-input" id="txtAirTime" type="text" label="${LabelAirTime}"/> </div> <div id="fldSeriesRuntime" class="inputContainer hide"> <input is="emby-input" id="txtSeriesRuntime" type="number" label="${LabelRuntimeMinutes}"/> </div> <div class="inlineForm"> <div id="fldOfficialRating" class="selectContainer hide"> <select is="emby-select" id="selectOfficialRating" label="${LabelParentalRating}"></select> </div> <div id="fldCustomRating" class="selectContainer hide"> <select is="emby-select" id="selectCustomRating" label="${LabelCustomRating}"></select> </div> </div> <div class="inlineForm"> <div id="fldOriginalAspectRatio" class="inputContainer hide"> <input is="emby-input" id="txtOriginalAspectRatio" type="text" label="${LabelOriginalAspectRatio}"/> </div> <div id="fld3dFormat" class="selectContainer hide"> <select is="emby-select" id="select3dFormat" label="${Label3DFormat}"> <option value=""></option> <option value="HalfSideBySide">HSBS</option> <option value="HalfTopAndBottom">HTAB</option> <option value="FullSideBySide">FSBS</option> <option value="FullTopAndBottom">FTAB</option> <option value="MVC">MVC</option> </select> </div> </div> <div id="fldDisplayOrder" class="fldDisplaySetting selectContainer hide"> <select is="emby-select" id="selectDisplayOrder" label="${LabelDisplayOrder}"></select> <div class="fieldDescription seriesDisplayOrderDescription">${SeriesDisplayOrderHelp}</div> </div> </div> <div class="detailSection hide" id="collapsibleSpecialEpisodeInfo"> <h2> ${HeaderSpecialEpisodeInfo} </h2> <div class="inlineForm"> <div class="inputContainer"> <input is="emby-input" id="txtAirsBeforeSeason" type="number" pattern="[0-9]*" label="${LabelAirsBeforeSeason}"/> </div> <div class="inputContainer"> <input is="emby-input" id="txtAirsAfterSeason" type="number" pattern="[0-9]*" label="${LabelAirsAfterSeason}"/> </div> <div class="inputContainer"> <input is="emby-input" id="txtAirsBeforeEpisode" type="number" pattern="[0-9]*" label="${LabelAirsBeforeEpisode}"/> </div> </div> </div> <div class="detailSection externalIdsSection hide"> <h2> ${HeaderExternalIds} </h2> <div class="externalIds editorFieldset"> </div> </div> <div id="genresCollapsible" class="editableListviewContainer hide" style="margin-top:3em"> <h2 style="margin:.6em 0;vertical-align:middle;display:inline-block"> ${Genres} </h2> <button is="emby-button" type="button" class="fab btnAddTextItem submit" style="margin-left:1em" title="${Add}"> <span class="material-icons add"></span> </button> <div class="paperList" id="listGenres"></div> </div> <div id="peopleCollapsible" style="margin-top:3em" class="hide"> <h2 style="margin:.6em 0;vertical-align:middle;display:inline-block"> ${People} </h2> <button is="emby-button" type="button" id="btnAddPerson" class="fab btnAddPerson" style="margin-left:1em" title="${Add}"> <span class="material-icons add"></span> </button> <div id="peopleList" class="paperList"> </div> </div> <div id="studiosCollapsible" class="editableListviewContainer hide" style="margin-top:3em"> <h2 style="margin:.6em 0;vertical-align:middle;display:inline-block"> ${Studios} </h2> <button is="emby-button" type="button" class="fab btnAddTextItem submit" style="margin-left:1em" title="${Add}"> <span class="material-icons add"></span> </button> <div class="paperList" id="listStudios"></div> </div> <div id="tagsCollapsible" class="editableListviewContainer hide" style="margin-top:3em"> <h2 style="margin:.6em 0;vertical-align:middle;display:inline-block"> ${Tags} </h2> <button is="emby-button" type="button" class="fab btnAddTextItem submit" style="margin-left:1em" title="${Add}"> <span class="material-icons add"></span> </button> <div class="paperList" id="listTags"></div> </div> <div id="metadataSettingsCollapsible" style="margin-top:3em" class="hide"> <h2>${HeaderMetadataSettings}</h2> <div> <div class="selectContainer"> <select is="emby-select" id="selectLanguage" label="${LabelMetadataDownloadLanguage}"></select> <div class="fieldDescription editorfieldDescription">${MessageLeaveEmptyToInherit}</div> </div> <div class="selectContainer"> <select is="emby-select" id="selectCountry" label="${LabelCountry}"></select> </div> <div class="fieldDescription editorfieldDescription">${MessageLeaveEmptyToInherit}</div> <br/><br/> <label class="checkboxContainer"> <input type="checkbox" is="emby-checkbox" id="chkLockData"/> <span>${LabelLockItemToPreventChanges}</span> </label> <div class="providerSettingsContainer checkboxList hide"> </div> </div> </div> <br/> <div class="formDialogFooter"> <button is="emby-button" type="button" class="raised button-cancel block btnCancel formDialogFooterItem"> <span>${Cancel}</span> </button> <button is="emby-button" type="submit" class="raised button-submit block btnSave formDialogFooterItem"> <span>${SaveChanges}</span> </button> </div> </div> </form> </div> '}}]);