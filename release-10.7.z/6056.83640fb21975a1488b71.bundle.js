"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6056,5150,6560],{66056:function(t,e,a){a(27471),a(5769),a(63238),a(14078),a(23938),a(61013),a(52077),a(911),a(72410),a(15610),a(17460),a(25901),a(92189),a(91047);var i=a(71616),n=a(48734),r=a(61160),o=a(78695),s=a(53754),l=a(28469),c=a(61097),d=(a(17734),a(76560),a(5150),a(53913));function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var a=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=a){var i,n,r=[],o=!0,s=!1;try{for(a=a.call(t);!(o=(i=a.next()).done)&&(r.push(i.value),!e||r.length!==e);o=!0);}catch(t){s=!0,n=t}finally{try{o||null==a.return||a.return()}finally{if(s)throw n}}return r}}(t,e)||m(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e){if(t){if("string"==typeof t)return p(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?p(t,e):void 0}}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,i=new Array(e);a<e;a++)i[a]=t[a];return i}function f(t,e){if("disc"===e.index)return null==t.ParentIndexNumber?"":s.ZP.translate("ValueDiscNumber",t.ParentIndexNumber);var a,i,n=(e.sortBy||"").toLowerCase();return 0===n.indexOf("sortname")?"Episode"===t.Type?"":(a=(i=(t.SortName||t.Name||"?")[0].toUpperCase()).charCodeAt(0))<65||a>90?"#":i.toUpperCase():0===n.indexOf("officialrating")?t.OfficialRating||s.ZP.translate("Unrated"):0===n.indexOf("communityrating")?null==t.CommunityRating?s.ZP.translate("Unrated"):Math.floor(t.CommunityRating):0===n.indexOf("criticrating")?null==t.CriticRating?s.ZP.translate("Unrated"):Math.floor(t.CriticRating):0===n.indexOf("albumartist")&&t.AlbumArtist?(a=(i=t.AlbumArtist[0].toUpperCase()).charCodeAt(0))<65||a>90?"#":i.toUpperCase():""}function g(t,e){var a,i=d.Z.getApiClient(t.ServerId),n={fillWidth:e,fillHeight:e,type:"Primary"};return t.ImageTags&&t.ImageTags.Primary?(n.tag=t.ImageTags.Primary,a=t.Id):t.AlbumId&&t.AlbumPrimaryImageTag?(n.tag=t.AlbumPrimaryImageTag,a=t.AlbumId):t.SeriesId&&t.SeriesPrimaryImageTag?(n.tag=t.SeriesPrimaryImageTag,a=t.SeriesId):t.ParentPrimaryImageTag&&(n.tag=t.ParentPrimaryImageTag,a=t.ParentPrimaryImageItemId),a?i.getScaledImageUrl(a,n):null}function h(t,e){var a=d.Z.getApiClient(t.ServerId),i={fillWidth:e,fillHeight:e,type:"Primary"};if(t.ChannelId&&t.ChannelPrimaryImageTag&&(i.tag=t.ChannelPrimaryImageTag),t.ChannelId)return a.getScaledImageUrl(t.ChannelId,i)}function I(t,e){var a,i="",n=o.Z.tv?"h2":"div",r=function(t,e){var a="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!a){if(Array.isArray(t)||(a=m(t))){a&&(t=a);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o=!0,s=!1;return{s:function(){a=a.call(t)},n:function(){var t=a.next();return o=t.done,t},e:function(t){s=!0,r=t},f:function(){try{o||null==a.return||a.return()}finally{if(s)throw r}}}}(t.entries());try{for(r.s();!(a=r.n()).done;){var s=u(a.value,2),l=s[0];s[1]&&(i+=0===l?e?"<".concat(n,' class="listItemBodyText">'):'<div class="listItemBodyText">':'<div class="secondary listItemBodyText">',i+=t[l]||"&nbsp;",i+=0===l&&e?"</".concat(n,">"):"</div>")}}catch(t){r.e(t)}finally{r.f()}return i}function v(t){for(var e="",a=0,i=t.rightButtons.length;a<i;a++){var n=t.rightButtons[a];e+='<button is="paper-icon-button-light" class="listItemButton itemAction" data-action="custom" data-customaction="'.concat(n.id,'" title="').concat(n.title,'"><span class="material-icons ').concat(n.icon,'"></span></button>')}return e}function y(t){return t.Id}e.Z={getListViewHtml:function(t){for(var e=t.items,a="",s=t.action||"link",d="large"===t.imageSize,u=t.enableOverview,m=!!o.Z.tv,p=m?"button":"div",b=null==t.enableSideMediaInfo||t.enableSideMediaInfo,P="",T=t.enableOverview&&!o.Z.tv,C=((t.containerAlbumArtists||[]).map(y),0),A=e.length;C<A;C++){var D=e[C],S="";if(t.showIndex){var Z=f(D,t);Z!==a&&(S&&(S+="</div>"),S+=0===C?'<h2 class="listGroupHeader listGroupHeader-first">':'<h2 class="listGroupHeader">',S+=Z,S+="</h2>",S+="<div>",a=Z)}var k="listItem";(t.border||!1!==t.highlight&&!o.Z.tv)&&(k+=" listItem-border"),m&&(k+=" itemAction listItem-button"),o.Z.tv&&(k+=" listItem-focusscale");var w=80;d&&(k+=" listItem-largeImage",w=500);var x=D.PlaylistItemId?' data-playlistitemid="'.concat(D.PlaylistItemId,'"'):"",R=D.UserData&&D.UserData.PlaybackPositionTicks?' data-positionticks="'.concat(D.UserData.PlaybackPositionTicks,'"'):"",M=t.collectionId?' data-collectionid="'.concat(t.collectionId,'"'):"",L=t.playlistId?' data-playlistid="'.concat(t.playlistId,'"'):"",B=D.MediaType?' data-mediatype="'.concat(D.MediaType,'"'):"",E=D.CollectionType?' data-collectiontype="'.concat(D.CollectionType,'"'):"",O=D.ChannelId?' data-channelid="'.concat(D.ChannelId,'"'):"";if(T&&(k+=" listItem-withContentWrapper"),S+="<".concat(p,' class="').concat(k,'"').concat(x,' data-action="').concat(s,'" data-isfolder="').concat(D.IsFolder,'" data-id="').concat(D.Id,'" data-serverid="').concat(D.ServerId,'" data-type="').concat(D.Type,'"').concat(B).concat(E).concat(O).concat(R).concat(M).concat(L,">"),T&&(S+='<div class="listItem-content">'),!m&&t.dragHandle&&(S+='<span class="listViewDragHandle material-icons listItemIcon listItemIcon-transparent drag_handle"></span>'),!1!==t.image){var N="channel"===t.imageSource?h(D,w):g(D,w),U=d?"listItemImage listItemImage-large":"listItemImage";d&&o.Z.tv&&(U+=" listItemImage-large-tv");var H=t.imagePlayButton&&!o.Z.tv;m||(U+=" itemAction"),S+=N?'<div data-action="'+(H?"link":s)+'" class="'+U+' lazy" data-src="'+N+'" item-icon>':'<div class="'+U+" cardImageContainer "+c.default.getDefaultBackgroundClass(D.Name)+'">'+c.default.getDefaultText(D,t);var F="";(F+=r.ZP.getPlayedIndicatorHtml(D))&&(S+='<div class="indicators listItemIndicators">'.concat(F,"</div>")),H&&(S+='<button is="paper-icon-button-light" class="listItemImageButton itemAction" data-action="resume"><span class="material-icons listItemImageButton-icon play_arrow"></span></button>');var Y=r.ZP.getProgressBarHtml(D,{containerClass:"listItemProgressBar"});Y&&(S+=Y),S+="</div>"}t.showIndexNumberLeft&&(S+='<div class="listItem-indexnumberleft">',S+=D.IndexNumber||"&nbsp;",S+="</div>");var j=[];t.showProgramDateTime&&j.push(l.ZP.toLocaleString(l.ZP.parseISO8601Date(D.StartDate),{weekday:"long",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})),t.showProgramTime&&j.push(l.ZP.getDisplayTime(l.ZP.parseISO8601Date(D.StartDate))),t.showChannel&&D.ChannelName&&j.push(D.ChannelName);var V=null;t.showParentTitle&&("Episode"===D.Type?V=D.SeriesName:(D.IsSeries||D.EpisodeTitle&&D.Name)&&(V=D.Name));var _=i.ZP.getDisplayName(D,{includeParentInfo:t.includeParentInfoInTitle});if(t.showIndexNumber&&null!=D.IndexNumber&&(_="".concat(D.IndexNumber,". ").concat(_)),t.showParentTitle&&t.parentTitleWithTitle?(_&&(V&&(V+=" - "),V=(V||"")+_),j.push(V||"")):t.showParentTitle&&j.push(V||""),_&&!t.parentTitleWithTitle&&j.push(_),D.IsFolder)!1!==t.artist&&D.AlbumArtist&&"MusicAlbum"===D.Type&&j.push(D.AlbumArtist);else if(t.artist){var W=D.ArtistItems;W&&"MusicAlbum"!==D.Type&&j.push(W.map((function(t){return t.Name})).join(", "))}if("TvChannel"===D.Type&&D.CurrentProgram&&j.push(i.ZP.getDisplayName(D.CurrentProgram)),k="listItemBody",m||(k+=" itemAction"),!1===t.image&&(k+=" listItemBody-noleftpadding"),S+='<div class="'.concat(k,'">'),S+=I(j,d),!1===t.mediaInfo||b||(S+='<div class="'.concat("secondary listItemMediaInfo listItemBodyText",'">'),S+=n.ZP.getPrimaryMediaInfoHtml(D,{episodeTitle:!1,originalAirDate:!1,subtitles:!1}),S+="</div>"),u&&D.Overview&&(S+='<div class="secondary listItem-overview listItemBodyText">',S+=D.Overview,S+="</div>"),S+="</div>",!1!==t.mediaInfo&&b&&(S+='<div class="secondary listItemMediaInfo">',S+=n.ZP.getPrimaryMediaInfoHtml(D,{year:!1,container:!1,episodeTitle:!1,criticRating:!1,endsAt:!1}),S+="</div>"),t.recordButton||"Timer"!==D.Type&&"Program"!==D.Type||(S+=r.ZP.getTimerIndicator(D).replace("indicatorIcon","indicatorIcon listItemAside")),S+='<div class="listViewUserDataButtons">',!m){if(t.addToListButton&&(S+='<button is="paper-icon-button-light" class="listItemButton itemAction" data-action="addtoplaylist"><span class="material-icons playlist_add"></span></button>'),t.infoButton&&(S+='<button is="paper-icon-button-light" class="listItemButton itemAction" data-action="link"><span class="material-icons info_outline"></span></button>'),t.rightButtons&&(S+=v(t)),!1!==t.enableUserDataButtons){var z=D.UserData||{},q=null==z.Likes?"":z.Likes;i.ZP.canMarkPlayed(D)&&!1!==t.enablePlayedButton&&(S+='<button is="emby-playstatebutton" type="button" class="listItemButton paper-icon-button-light" data-id="'+D.Id+'" data-serverid="'+D.ServerId+'" data-itemtype="'+D.Type+'" data-played="'+z.Played+'"><span class="material-icons check"></span></button>'),i.ZP.canRate(D)&&!1!==t.enableRatingButton&&(S+='<button is="emby-ratingbutton" type="button" class="listItemButton paper-icon-button-light" data-id="'+D.Id+'" data-serverid="'+D.ServerId+'" data-itemtype="'+D.Type+'" data-likes="'+q+'" data-isfavorite="'+z.IsFavorite+'"><span class="material-icons favorite"></span></button>')}!1!==t.moreButton&&(S+='<button is="paper-icon-button-light" class="listItemButton itemAction" data-action="menu"><span class="material-icons more_vert"></span></button>')}S+="</div>",T&&(S+="</div>",u&&D.Overview&&(S+='<div class="listItem-bottomoverview secondary">',S+=D.Overview,S+="</div>")),P+=S+="</".concat(p,">")}return P}}},48734:function(t,e,a){a.d(e,{ZP:function(){return b}}),a(23938),a(61013),a(76056),a(98010),a(63238);var i=a(28469),n=a(53754),r=a(6383),o=a(71616),s=a(61160),l=(a(56561),a(1892)),c=a.n(l),d=a(29802);function u(t){var e,a,r,l,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},d="",u=[],g="MusicAlbum"===t.Type||"MusicArtist"===t.MediaType||"Playlist"===t.MediaType||"MusicGenre"===t.MediaType;if(g?((l=t.SongCount||t.ChildCount)&&u.push(n.ZP.translate("TrackCount",l)),t.RunTimeTicks&&u.push(i.ZP.getDisplayRunningTime(t.RunTimeTicks))):"PhotoAlbum"!==t.Type&&"BoxSet"!==t.Type||(l=t.ChildCount)&&u.push(n.ZP.translate("ItemCount",l)),("Episode"===t.Type||"Photo"===t.MediaType)&&!1!==c.originalAirDate&&t.PremiereDate)try{a=i.ZP.parseISO8601Date(t.PremiereDate),e=i.ZP.toLocaleDateString(a),u.push(e)}catch(e){console.error("error parsing date:",t.PremiereDate)}if("SeriesTimer"===t.Type&&(t.RecordAnyTime?u.push(n.ZP.translate("Anytime")):u.push(i.ZP.getDisplayTime(t.StartDate)),t.RecordAnyChannel?u.push(n.ZP.translate("AllChannels")):u.push(t.ChannelName||n.ZP.translate("OneChannel"))),t.StartDate&&"Program"!==t.Type&&"SeriesTimer"!==t.Type)try{a=i.ZP.parseISO8601Date(t.StartDate),e=i.ZP.toLocaleDateString(a),u.push(e),"Recording"!==t.Type&&(e=i.ZP.getDisplayTime(a),u.push(e))}catch(e){console.error("error parsing date:",t.StartDate)}if(!1!==c.year&&t.ProductionYear&&"Series"===t.Type)if("Continuing"===t.Status)u.push(n.ZP.translate("SeriesYearToPresent",t.ProductionYear));else if(t.ProductionYear){if(e=t.ProductionYear,t.EndDate)try{var h=i.ZP.parseISO8601Date(t.EndDate).getFullYear();h!==t.ProductionYear&&(e+="-".concat(i.ZP.parseISO8601Date(t.EndDate).getFullYear()))}catch(e){console.error("error parsing date:",t.EndDate)}u.push(e)}if("Program"===t.Type)if(!1!==c.programIndicator&&(t.IsLive?u.push({html:'<div class="mediaInfoProgramAttribute mediaInfoItem liveTvProgram">'.concat(n.ZP.translate("Live"),"</div>")}):t.IsPremiere?u.push({html:'<div class="mediaInfoProgramAttribute mediaInfoItem premiereTvProgram">'.concat(n.ZP.translate("Premiere"),"</div>")}):t.IsSeries&&!t.IsRepeat?u.push({html:'<div class="mediaInfoProgramAttribute mediaInfoItem newTvProgram">'.concat(n.ZP.translate("New"),"</div>")}):t.IsSeries&&t.IsRepeat&&u.push({html:'<div class="mediaInfoProgramAttribute mediaInfoItem repeatTvProgram">'.concat(n.ZP.translate("Repeat"),"</div>")})),(t.IsSeries||t.EpisodeTitle)&&!1!==c.episodeTitle)(e=o.ZP.getDisplayName(t,{includeIndexNumber:c.episodeTitleIndexNumber}))&&u.push(e);else if(t.IsMovie&&t.ProductionYear&&!1!==c.originalAirDate)u.push(t.ProductionYear);else if(t.PremiereDate&&!1!==c.originalAirDate)try{a=i.ZP.parseISO8601Date(t.PremiereDate),e=n.ZP.translate("OriginalAirDateValue",i.ZP.toLocaleDateString(a)),u.push(e)}catch(e){console.error("error parsing date:",t.PremiereDate)}else t.ProductionYear&&u.push(t.ProductionYear);if(!1!==c.year&&"Series"!==t.Type&&"Episode"!==t.Type&&"Person"!==t.Type&&"Photo"!==t.MediaType&&"Program"!==t.Type&&"Season"!==t.Type)if(t.ProductionYear)u.push(t.ProductionYear);else if(t.PremiereDate)try{e=i.ZP.parseISO8601Date(t.PremiereDate).getFullYear(),u.push(e)}catch(e){console.error("error parsing date:",t.PremiereDate)}if(t.RunTimeTicks&&"Series"!==t.Type&&"Program"!==t.Type&&"Book"!==t.Type&&!g&&!1!==c.runtime&&("Audio"===t.Type?u.push(i.ZP.getDisplayRunningTime(t.RunTimeTicks)):(r=(r=t.RunTimeTicks/6e8)||1,u.push("".concat(Math.round(r)," mins")))),t.OfficialRating&&"Season"!==t.Type&&"Episode"!==t.Type&&u.push({text:t.OfficialRating,cssClass:"mediaInfoOfficialRating"}),t.Video3DFormat&&u.push("3D"),"Photo"===t.MediaType&&t.Width&&t.Height&&u.push("".concat(t.Width,"x").concat(t.Height)),!1!==c.container&&"Audio"===t.Type&&t.Container&&u.push(t.Container),d+=u.map((function(t){return p(t)})).join(""),!1!==c.starRating&&(d+=f(t)),t.HasSubtitles&&!1!==c.subtitles&&(d+='<div class="mediaInfoItem mediaInfoText closedCaptionMediaInfoText">CC</div>'),t.CriticRating&&!1!==c.criticRating&&(t.CriticRating>=60?d+='<div class="mediaInfoItem mediaInfoCriticRating mediaInfoCriticRatingFresh">'.concat(t.CriticRating,"</div>"):d+='<div class="mediaInfoItem mediaInfoCriticRating mediaInfoCriticRatingRotten">'.concat(t.CriticRating,"</div>")),!1!==c.endsAt){var I=m(t);I&&(d+=p(I,"endsAt"))}return d+s.ZP.getMissingIndicator(t)}function m(t){if("Video"===t.MediaType&&t.RunTimeTicks&&!t.StartDate){var e=(new Date).getTime()+t.RunTimeTicks/1e4;e=new Date(e);var a=i.ZP.getDisplayTime(e);return n.ZP.translate("EndsAtValue",a)}return null}function p(t,e){e=e?"".concat(e," mediaInfoItem"):"mediaInfoItem";var a=t;if("string"!=typeof t&&"number"!=typeof t){if(t.html)return t.html;a=t.text,e+=" ".concat(t.cssClass)}return'<div class="'.concat(e,'">').concat(a,"</div>")}function f(t){var e="";return t.CommunityRating&&(e+='<div class="starRatingContainer mediaInfoItem">',e+='<span class="material-icons starIcon star"></span>',e+=t.CommunityRating.toFixed(1),e+="</div>"),e}function g(t,e,a){if(!1!==a.endsAt){var i=t.querySelector(".endsAt");i&&function(t,e){var a=setInterval((function(){document.body.contains(t)?t.innerHTML=m(e):clearInterval(a)}),6e4)}(i,e)}var n=t.querySelector(".lnkChannel");n&&n.addEventListener("click",h)}function h(t){var e=this.getAttribute("data-id"),a=this.getAttribute("data-serverid");return r.appRouter.showItem(e,a),t.preventDefault(),!1}function I(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return void 0===e.interactive&&(e.interactive=!1),u(t,e)}function v(t,e){return null==(e=e||{}).interactive&&(e.interactive=!1),"Program"===t.Type?function(t,e){var a,n,o=[];if(t.StartDate&&!1!==e.programTime)try{a="",n=i.ZP.parseISO8601Date(t.StartDate),!1!==e.startDate&&(a+=i.ZP.toLocaleDateString(n,{weekday:"short",month:"short",day:"numeric"})),a+=" ".concat(i.ZP.getDisplayTime(n)),t.EndDate&&(n=i.ZP.parseISO8601Date(t.EndDate),a+=" - ".concat(i.ZP.getDisplayTime(n))),o.push(a)}catch(e){console.error("error parsing date:",t.StartDate)}if(t.ChannelNumber&&o.push("CH ".concat(t.ChannelNumber)),t.ChannelName&&(e.interactive&&t.ChannelId?o.push({html:'<a is="emby-linkbutton" class="button-flat mediaInfoItem" href="'.concat(r.appRouter.getRouteUrl({ServerId:t.ServerId,Type:"TvChannel",Name:t.ChannelName,Id:t.ChannelId}),'">').concat(t.ChannelName,"</a>")}):o.push(t.ChannelName)),!1!==e.timerIndicator){var s=function(t){var e;if("SeriesTimer"===t.Type)return'<span class="material-icons mediaInfoItem mediaInfoIconItem mediaInfoTimerIcon fiber_smart_record"></span>';if(t.TimerId||t.SeriesTimerId)e=t.Status||"Cancelled";else{if("Timer"!==t.Type)return"";e=t.Status}return t.SeriesTimerId?"Cancelled"!==e?'<span class="material-icons mediaInfoItem mediaInfoIconItem mediaInfoTimerIcon fiber_smart_record"></span>':'<span class="material-icons mediaInfoItem mediaInfoIconItem fiber_smart_record"></span>':'<span class="material-icons mediaInfoItem mediaInfoIconItem mediaInfoTimerIcon fiber_manual_record"></span>'}(t);s&&o.push({html:s})}return""+o.map((function(t){return p(t)})).join("")}(t,e):""}function y(t){var e=t.Width,a=t.Height;if(e&&a){if(e>=3800||a>=2e3)return"4K";if(e>=2500||a>=1400)return t.IsInterlaced?"1440i":"1440p";if(e>=1800||a>=1e3)return t.IsInterlaced?"1080i":"1080p";if(e>=1200||a>=700)return t.IsInterlaced?"720i":"720p";if(e>=700||a>=400)return t.IsInterlaced?"480i":"480p"}return null}c()(d.Z,{insert:"head",singleton:!1}),d.Z.locals,a(52178),a(78066);var b={getMediaInfoHtml:I,getEndsAt:m,getEndsAtFromPosition:function(t,e,a){var r=(new Date).getTime()+(t-(e||0))/1e4;r=new Date(r);var o=i.ZP.getDisplayTime(r);return!1===a?o:n.ZP.translate("EndsAtValue",o)},getPrimaryMediaInfoHtml:I,getSecondaryMediaInfoHtml:v,fillPrimaryMediaInfo:function(t,e,a){var i=I(e,a);t.innerHTML=i,g(t,e,a)},fillSecondaryMediaInfo:function(t,e,a){var i=v(e,a);t.innerHTML=i,g(t,e,a)},getMediaInfoStats:function(t,e){e=e||{};var a=[],r=(((t.MediaSources||[])[0]||{}).MediaStreams||[]).filter((function(t){return"Video"===t.Type}))[0]||{},s=function(t){if(!t.MediaSources)return null;var e=t.MediaSources[0];return e?(e.MediaStreams||[]).filter((function(t){return"Audio"===t.Type&&(t.Index===e.DefaultAudioStreamIndex||null==e.DefaultAudioStreamIndex)}))[0]:null}(t)||{};"Dvd"===t.VideoType&&a.push({type:"mediainfo",text:"Dvd"}),"BluRay"===t.VideoType&&a.push({type:"mediainfo",text:"BluRay"});var l=y(r);l&&a.push({type:"mediainfo",text:l}),r.Codec&&a.push({type:"mediainfo",text:r.Codec});var c,d=s.Channels;8===d?c="7.1":7===d?c="6.1":6===d?c="5.1":2===d&&(c="2.0"),c&&a.push({type:"mediainfo",text:c});var u=(s.Codec||"").toLowerCase();if("dca"!==u&&"dts"!==u||!s.Profile?s.Codec&&a.push({type:"mediainfo",text:s.Codec}):a.push({type:"mediainfo",text:s.Profile}),t.DateCreated&&o.ZP.enableDateAddedDisplay(t)){var m=i.ZP.parseISO8601Date(t.DateCreated);a.push({type:"added",text:n.ZP.translate("AddedOnValue","".concat(i.ZP.toLocaleDateString(m)," ").concat(i.ZP.getDisplayTime(m)))})}return a},getResolutionText:y}},5150:function(t,e,a){a.r(e);var i=a(1197),n=a(47005),r=a(53754),o=a(78066),s=a(53913);function l(t){var e=this,a=e.getAttribute("data-id"),i=e.getAttribute("data-serverid"),n=s.Z.getApiClient(i);e.classList.contains("playstatebutton-played")?(n.markUnplayed(n.getCurrentUserId(),a,new Date),d(e,!1)):(n.markPlayed(n.getCurrentUserId(),a,new Date),d(e,!0))}function c(t,e,a){a.ItemId===this.getAttribute("data-id")&&d(this,a.Played)}function d(t,e,a){var i=t.iconElement;i||(t.iconElement=t.querySelector(".material-icons"),i=t.iconElement),e?(t.classList.add("playstatebutton-played"),i&&(i.classList.add("playstatebutton-icon-played"),i.classList.remove("playstatebutton-icon-unplayed"))):(t.classList.remove("playstatebutton-played"),i&&(i.classList.remove("playstatebutton-icon-played"),i.classList.add("playstatebutton-icon-unplayed"))),!1!==a&&t.setAttribute("data-played",e)}function u(t,e){t.title="AudioBook"!==e&&"AudioPodcast"!==e?r.ZP.translate("Watched"):r.ZP.translate("Played");var a=t.querySelector(".button-text");a&&(a.innerHTML=t.title)}function m(t){var e,a,r;t.removeEventListener("click",l),(r=(e=t)[a="UserDataChanged"])&&(n.Events.off(i.default,a,r),e[a]=null)}function p(t){var e,a,r;m(t),t.addEventListener("click",l),e=t,a="UserDataChanged",r=c.bind(e),n.Events.on(i.default,a,r),e[a]=r}var f=Object.create(o.Z);f.createdCallback=function(){o.Z.createdCallback&&o.Z.createdCallback.call(this)},f.attachedCallback=function(){o.Z.attachedCallback&&o.Z.attachedCallback.call(this);var t=this.getAttribute("data-id"),e=this.getAttribute("data-serverid");t&&e&&(d(this,"true"===this.getAttribute("data-played"),!1),p(this),u(this,this.getAttribute("data-type")))},f.detachedCallback=function(){o.Z.detachedCallback&&o.Z.detachedCallback.call(this),m(this),this.iconElement=null},f.setItem=function(t){t?(this.setAttribute("data-id",t.Id),this.setAttribute("data-serverid",t.ServerId),d(this,t.UserData&&t.UserData.Played),p(this),u(this,t.Type)):(this.removeAttribute("data-id"),this.removeAttribute("data-serverid"),this.removeAttribute("data-played"),m(this))},document.registerElement("emby-playstatebutton",{prototype:f,extends:"button"})},76560:function(t,e,a){a.r(e);var i=a(1197),n=a(47005),r=a(53754),o=a(78066),s=a(53913);function l(t){var e=this,a=e.getAttribute("data-id"),i=e.getAttribute("data-serverid"),n=s.Z.getApiClient(i),r=this.getAttribute("data-likes");r="true"===r||"false"!==r&&null,function(t,e,a,i,n){return e.updateFavoriteStatus(e.getCurrentUserId(),a,!n)}(0,n,a,0,"true"===this.getAttribute("data-isfavorite")).then((function(t){d(e,t.Likes,t.IsFavorite)}))}function c(t,e,a){a.ItemId===this.getAttribute("data-id")&&d(this,a.Likes,a.IsFavorite)}function d(t,e,a,i){var n=t.querySelector(".material-icons");a?(n&&(n.classList.add("favorite"),n.classList.add("ratingbutton-icon-withrating")),t.classList.add("ratingbutton-withrating")):(n&&(n.classList.add("favorite"),n.classList.remove("ratingbutton-icon-withrating")),t.classList.remove("ratingbutton-withrating")),!1!==i&&(t.setAttribute("data-isfavorite",a),t.setAttribute("data-likes",null===e?"":e))}function u(t){var e,a,r;t.removeEventListener("click",l),(r=(e=t)[a="UserDataChanged"])&&(n.Events.off(i.default,a,r),e[a]=null)}function m(t){var e,a,r;u(t),t.addEventListener("click",l),e=t,a="UserDataChanged",r=c.bind(e),n.Events.on(i.default,a,r),e[a]=r}var p=Object.create(o.Z);p.createdCallback=function(){o.Z.createdCallback&&o.Z.createdCallback.call(this)},p.attachedCallback=function(){o.Z.attachedCallback&&o.Z.attachedCallback.call(this);var t=this.getAttribute("data-id"),e=this.getAttribute("data-serverid");if(t&&e){var a=this.getAttribute("data-likes");d(this,a="true"===a||"false"!==a&&null,"true"===this.getAttribute("data-isfavorite"),!1),m(this)}!function(t){t.title=r.ZP.translate("Favorite");var e=t.querySelector(".button-text");e&&(e.innerHTML=t.title)}(this)},p.detachedCallback=function(){o.Z.detachedCallback&&o.Z.detachedCallback.call(this),u(this)},p.setItem=function(t){if(t){this.setAttribute("data-id",t.Id),this.setAttribute("data-serverid",t.ServerId);var e=t.UserData||{};d(this,e.Likes,e.IsFavorite),m(this)}else this.removeAttribute("data-id"),this.removeAttribute("data-serverid"),this.removeAttribute("data-likes"),this.removeAttribute("data-isfavorite"),u(this)},document.registerElement("emby-ratingbutton",{prototype:p,extends:"button"})},29802:function(t,e,a){var i=a(93476),n=a.n(i),r=a(91678),o=a.n(r),s=a(29318),l=a(85789),c=n()((function(t){return t[1]})),d=o()(s.Z),u=o()(l.Z);c.push([t.id,".mediaInfoItem{margin:0 1em 0 0;padding:0}.mediaInfoText{padding:.22em .5em;border-radius:.25em;font-size:92%;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;white-space:nowrap;margin:0 .5em 0 0}.mediaInfoText-upper{text-transform:uppercase}.mediaInfoIconItem{width:auto;height:auto;font-size:1.6em;margin-right:.6em}.mediaInfoItem:last-child{margin-right:0}.starRatingContainer{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center;vertical-align:middle;padding-top:0;padding-bottom:0}.starIcon{width:auto!important;height:auto!important;font-size:1.4em;margin-right:.125em;color:#f2b01e}.mediaInfoCriticRating{padding-left:1.5em;background-position:0;background-repeat:no-repeat;background-size:auto 1.2em;min-height:1.2em;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center}.mediaInfoCriticRatingFresh{background-image:url("+d+")}.mediaInfoCriticRatingRotten{background-image:url("+u+")}.mediaInfoProgramAttribute{text-transform:uppercase;padding:.16em .6em;border-radius:.15em;font-size:80%}.closedCaptionMediaInfoText{font-weight:700}.mediaInfoOfficialRating{border:.09em solid;padding:0 .6em;height:1.3em;line-height:1.8em;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center;border-radius:.1em;font-size:96%}",""]),e.Z=c},29318:function(t,e,a){e.Z=a.p+"cb6e840e08726299bf8f968fe08d7ead.svg"},85789:function(t,e,a){e.Z=a.p+"0d2b37694d352e7e4c591afc205984ff.svg"}}]);