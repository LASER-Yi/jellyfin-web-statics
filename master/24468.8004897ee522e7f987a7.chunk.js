(self.webpackChunk=self.webpackChunk||[]).push([[24468],{24468:function(e,r,a){"use strict";a.r(r),a.d(r,{buildCards:function(){return V},getCardImageUrl:function(){return L},getCardsHtml:function(){return k},getDefaultText:function(){return U},onSeriesTimerCancelled:function(){return G},onTimerCancelled:function(){return z},onTimerCreated:function(){return j},onUserDataChanged:function(){return H},setCardData:function(){return M}}),a(29305),a(32733),a(84701),a(81678),a(14382),a(69892),a(89336),a(4754),a(94),a(33087),a(36947),a(36457),a(88908),a(83810),a(95021),a(23630),a(44962),a(24776),a(76281),a(78557),a(90076),a(73687),a(99425),a(83994),a(82367);var t=a(79096),n=a(22696),i=a.n(n),o=a(34789),s=a(98320),c=a(47629),u=a(9482),l=a(80633),d=a(40782),m=a(9164),p=a(58782),h=a(51938),y=a(23648),g=a(46782),v=a(80669),f=a(70267),I=a(86191),T=a(22832),b=(a(15453),a(36668));function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function A(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function P(e,r,a){return(r=function(e){var r=function(e,r){if("object"!=C(e)||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var t=a.call(e,"string");if("object"!=C(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==C(r)?r:r+""}(r))in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function S(e,r){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=w(e))||r&&e&&"number"==typeof e.length){a&&(e=a);var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==a.return||a.return()}finally{if(s)throw i}}}}function w(e,r){if(e){if("string"==typeof e)return B(e,r);var a={}.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?B(e,r):void 0}}function B(e,r){(null==r||r>e.length)&&(r=e.length);for(var a=0,t=Array(r);a<r;a++)t[a]=e[a];return t}var O,D=!o.A.slow&&!o.A.edge;function k(e,r){return 1===arguments.length&&(e=(r=arguments[0]).items),x(e,r)}function M(e,r){r.shape=r.shape||"auto";var a=p.default.getPrimaryImageAspectRatio(e);if(["auto","autohome","autooverflow","autoVertical"].includes(r.shape)){var t=r.shape;r.shape=null,a&&(a>=3?(r.shape="banner",r.coverImage=!0):r.shape=a>=1.33?(0,l.UI)("autooverflow"===t):a>.8?(0,l.zP)("autooverflow"===t):(0,l.xK)("autooverflow"===t)),r.shape||(r.shape=r.defaultShape||(0,l.zP)("autooverflow"===t))}if("auto"===r.preferThumb&&(r.preferThumb="backdrop"===r.shape||"overflowBackdrop"===r.shape),r.uiAspect=(0,b.zo)(r.shape),r.primaryImageAspectRatio=a,!r.width&&r.widths&&(r.width=r.widths[r.shape]),r.rows&&"number"!=typeof r.rows&&(r.rows=r.rows[r.shape]),!r.width){var n=c.Ay.getWindowSize().innerWidth,i=c.Ay.getWindowSize().innerHeight;(0,b.w)(n)&&(n=100*Math.floor(n/100)),r.width=function(e,r,a){var t=(0,b.QW)(e,r,a,g.A.tv);return Math.round(r/t)}(r.shape,n,n>1.3*i)}}function x(e,r){var a=!1;"autoVertical"===r.shape&&(a=!0),M(e,r);var t,n,i,o,c,u,l,d,m="",p=0,h=r.sectionTitleTagName||"div",y=S(e.entries());try{for(y.s();!(u=y.n()).done;){var g=(l=u.value,d=2,function(e){if(Array.isArray(e))return e}(l)||function(e,r){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var t,n,i,o,s=[],c=!0,u=!1;try{if(i=(a=a.call(e)).next,0===r){if(Object(a)!==a)return;c=!1}else for(;!(c=(t=i.call(a)).done)&&(s.push(t.value),s.length!==r);c=!0);}catch(e){u=!0,n=e}finally{try{if(!c&&null!=a.return&&(o=a.return(),Object(o)!==o))return}finally{if(u)throw n}}return s}}(l,d)||w(l,d)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),v=g[0],f=g[1],T=f.ServerId||r.serverId;if(T!==c&&(c=T,o=I.A.getApiClient(c)),r.indexBy){var b="";if("PremiereDate"===r.indexBy){if(f.PremiereDate)try{b=s.Ay.toLocaleDateString(s.Ay.parseISO8601Date(f.PremiereDate),{weekday:"long",month:"long",day:"numeric"})}catch(e){console.error("error parsing timestamp for premiere date",e)}}else if("ProductionYear"===r.indexBy)b=f.ProductionYear;else if("CommunityRating"===r.indexBy){var C=f.CommunityRating%1>=.5?.5:0;b=f.CommunityRating?Math.floor(f.CommunityRating)+C+"+":null}b!==t&&(n&&(m+="</div>",n=!1,p=0),i&&(m+="</div>",a&&(m+="</div>"),i=!1),m+=a?'<div class="verticalSection">':'<div class="horizontalSection">',m+="<"+h+' class="sectionTitle">'+b+"</"+h+">",a&&(m+='<div class="itemsContainer vertical-wrap">'),t=b,i=!0)}r.rows&&0===p&&(n&&(m+="</div>",n=!1),m+='<div class="cardColumn">',n=!0),m+=R(v,f,o,r),p++,r.rows&&p>=r.rows&&(m+="</div>",n=!1,p=0)}}catch(e){y.e(e)}finally{y.f()}return n&&(m+="</div>"),i&&(m+="</div>",a&&(m+="</div>")),m}function L(e,r,a,t){var n,i,o,s,c;e=e.ProgramInfo||e;var u=a.width,l=null,d=e.PrimaryImageAspectRatio,m=!1,p=null,h=null,y=!1,g=(0,b.zo)(t),v=null,f=null;return a.preferThumb&&e.ImageTags&&e.ImageTags.Thumb?(v="Thumb",h=e.ImageTags.Thumb):(a.preferBanner||"banner"===t)&&e.ImageTags&&e.ImageTags.Banner?(v="Banner",h=e.ImageTags.Banner):a.preferDisc&&e.ImageTags&&e.ImageTags.Disc?(v="Disc",h=e.ImageTags.Disc):a.preferLogo&&e.ImageTags&&e.ImageTags.Logo?(v="Logo",h=e.ImageTags.Logo):a.preferLogo&&e.ParentLogoImageTag&&e.ParentLogoItemId?(v="Logo",h=e.ParentLogoImageTag,f=e.ParentLogoItemId):a.preferThumb&&e.SeriesThumbImageTag&&!1!==a.inheritThumb?(v="Thumb",h=e.SeriesThumbImageTag,f=e.SeriesId):a.preferThumb&&e.ParentThumbItemId&&!1!==a.inheritThumb&&"Photo"!==e.MediaType?(v="Thumb",h=e.ParentThumbImageTag,f=e.ParentThumbItemId):a.preferThumb&&e.BackdropImageTags&&e.BackdropImageTags.length?(v="Backdrop",h=e.BackdropImageTags[0],m=!0):a.preferThumb&&e.ParentBackdropImageTags&&e.ParentBackdropImageTags.length&&!1!==a.inheritThumb&&"Episode"===e.Type?(v="Backdrop",h=e.ParentBackdropImageTags[0],f=e.ParentBackdropItemId):null===(n=e.ImageTags)||void 0===n||!n.Primary||"Episode"===e.Type&&0===e.ChildCount?e.SeriesPrimaryImageTag?(v="Primary",h=e.SeriesPrimaryImageTag,f=e.SeriesId):e.PrimaryImageTag?(v="Primary",h=e.PrimaryImageTag,f=e.PrimaryImageItemId,l=u&&d?Math.round(u/d):null,a.preferThumb&&!1!==a.showTitle&&(m=!0),d&&g&&(y=Math.abs(d-g)/g<=.2)):e.ParentPrimaryImageTag?(v="Primary",h=e.ParentPrimaryImageTag,f=e.ParentPrimaryImageItemId):e.AlbumId&&e.AlbumPrimaryImageTag?(v="Primary",h=e.AlbumPrimaryImageTag,f=e.AlbumId,l=u&&d?Math.round(u/d):null,d&&g&&(y=Math.abs(d-g)/g<=.2)):"Season"===e.Type&&e.ImageTags&&e.ImageTags.Thumb?(v="Thumb",h=e.ImageTags.Thumb):null!==(i=e.BackdropImageTags)&&void 0!==i&&i.length?(v="Backdrop",h=e.BackdropImageTags[0]):null!==(o=e.ImageTags)&&void 0!==o&&o.Thumb?(v="Thumb",h=e.ImageTags.Thumb):e.SeriesThumbImageTag&&!1!==a.inheritThumb?(v="Thumb",h=e.SeriesThumbImageTag,f=e.SeriesId):e.ParentThumbItemId&&!1!==a.inheritThumb?(v="Thumb",h=e.ParentThumbImageTag,f=e.ParentThumbItemId):null!==(s=e.ParentBackdropImageTags)&&void 0!==s&&s.length&&!1!==a.inheritThumb&&(v="Backdrop",h=e.ParentBackdropImageTags[0],f=e.ParentBackdropItemId):(v="Primary",h=e.ImageTags.Primary,l=u&&d?Math.round(u/d):null,a.preferThumb&&!1!==a.showTitle&&(m=!0),d&&g&&(y=Math.abs(d-g)/g<=.2)),f||(f=e.Id),h&&v&&(!l&&u&&g&&(l=u/g),p=r.getScaledImageUrl(f,{type:v,fillHeight:l,fillWidth:u,quality:96,tag:h})),{imgUrl:p,blurhash:null===(c=(a.imageBlurhashes||e.ImageBlurHashes||{})[v])||void 0===c?void 0:c[h],forceName:m,coverImage:y}}function F(e,r,a){var t="";if(e.StartDate)try{var n=s.Ay.parseISO8601Date(e.StartDate);r&&(t+=s.Ay.toLocaleDateString(n,{weekday:"short",month:"short",day:"numeric"})+" "),t+=s.Ay.getDisplayTime(n),e.EndDate&&a&&(n=s.Ay.parseISO8601Date(e.EndDate),t+=" - "+s.Ay.getDisplayTime(n))}catch(r){console.error("error parsing date: "+e.StartDate)}return t}function N(e,r,a,n,o,c,l){e=e.ProgramInfo||e;var d="";l.logoUrl&&(d+='<div class="lazy cardFooterLogo" data-src="'+l.logoUrl+'"></div>');var m="auto"===a.showTitle||a.showTitle||"PhotoAlbum"===e.Type||"Folder"===e.Type,p=c.isOuterFooter?!c.overlayText:c.overlayText;c.isOuterFooter&&a.cardLayout&&g.A.mobile&&"none"!==a.cardFooterAside&&(d+='<button is="paper-icon-button-light" class="itemAction btnCardOptions cardText-secondary" data-action="menu" title="'.concat(u.Ay.translate("ButtonMore"),'"><span class="material-icons more_vert" aria-hidden="true"></span></button>'));var h,v=a.centerText?"cardText cardTextCentered":"cardText",f=e.ServerId||a.serverId,I=[],T="MusicAlbum"===e.Type||"Audio"===e.Type||"MusicVideo"===e.Type;if(p&&(a.showParentTitle||a.showParentTitleOrTitle)&&!T)if(c.isOuterFooter&&"Episode"===e.Type&&e.SeriesName)e.SeriesId?I.push(E({Id:e.SeriesId,ServerId:f,Name:e.SeriesName,Type:"Series",IsFolder:!0})):I.push(i()(e.SeriesName));else if((0,b.hn)(e.Type))I.push(i()(e.Name)),e.EpisodeTitle||e.IndexNumber||(h=!0);else{var C=e.SeriesName||e.Series||e.Album||e.AlbumArtist||"";(C||m)&&I.push(i()(C))}var A=m&&!h||a.showParentTitleOrTitle&&!I.length;if(A||h||!m&&!c.forceName||(A=!0),A){var P="auto"!==a.showTitle||e.IsFolder||"Photo"!==e.MediaType?y.Ay.getDisplayName(e,{includeParentInfo:a.includeParentInfoInTitle}):"";I.push(E({Id:e.Id,ServerId:f,Name:P,Type:e.Type,CollectionType:e.CollectionType,IsFolder:e.IsFolder}))}if(p){if(a.showParentTitle&&T&&(c.isOuterFooter&&e.AlbumArtists&&e.AlbumArtists.length?(e.AlbumArtists[0].Type="MusicArtist",e.AlbumArtists[0].IsFolder=!0,I.push(E(e.AlbumArtists[0],null,f))):I.push(i()((0,b.hn)(e.Type)?e.Name:e.SeriesName||e.Series||e.Album||e.AlbumArtist||""))),e.ExtraType&&"Unknown"!==e.ExtraType&&I.push(u.Ay.translate(e.ExtraType)),a.showItemCounts&&I.push(function(e,r){var a,t=[];if("Playlist"===r.Type){if(a="",r.RunTimeTicks){var n=r.RunTimeTicks/6e8;n=n||1,a+=u.Ay.translate("ValueMinutes",Math.round(n))}else a+=u.Ay.translate("ValueMinutes",0);t.push(a)}else"Genre"===r.Type||"Studio"===r.Type?(r.MovieCount&&(a=1===r.MovieCount?u.Ay.translate("ValueOneMovie"):u.Ay.translate("ValueMovieCount",r.MovieCount),t.push(a)),r.SeriesCount&&(a=1===r.SeriesCount?u.Ay.translate("ValueOneSeries"):u.Ay.translate("ValueSeriesCount",r.SeriesCount),t.push(a)),r.EpisodeCount&&(a=1===r.EpisodeCount?u.Ay.translate("ValueOneEpisode"):u.Ay.translate("ValueEpisodeCount",r.EpisodeCount),t.push(a))):"MusicGenre"===r.Type||"MusicArtist"===e.context?(r.AlbumCount&&(a=1===r.AlbumCount?u.Ay.translate("ValueOneAlbum"):u.Ay.translate("ValueAlbumCount",r.AlbumCount),t.push(a)),r.SongCount&&(a=1===r.SongCount?u.Ay.translate("ValueOneSong"):u.Ay.translate("ValueSongCount",r.SongCount),t.push(a)),r.MusicVideoCount&&(a=1===r.MusicVideoCount?u.Ay.translate("ValueOneMusicVideo"):u.Ay.translate("ValueMusicVideoCount",r.MusicVideoCount),t.push(a))):"Series"===r.Type&&(a=1===r.RecursiveItemCount?u.Ay.translate("ValueOneEpisode"):u.Ay.translate("ValueEpisodeCount",r.RecursiveItemCount),t.push(a));return t.join(", ")}(a,e)),a.textLines){var w,B=S(a.textLines(e));try{for(B.s();!(w=B.n()).done;){var O=w.value;I.push(O)}}catch(e){B.e(e)}finally{B.f()}}if(a.showSongCount){var D="";e.SongCount&&(D=1===e.SongCount?u.Ay.translate("ValueOneSong"):u.Ay.translate("ValueSongCount",e.SongCount)),I.push(D)}if(a.showPremiereDate)if(e.PremiereDate)try{I.push(s.Ay.toLocaleDateString(s.Ay.parseISO8601Date(e.PremiereDate),{weekday:"long",month:"long",day:"numeric"}))}catch(e){I.push("")}else I.push("");if(a.showYear||a.showSeriesYear){var k=e.ProductionYear&&s.Ay.toLocaleString(e.ProductionYear,{useGrouping:!1});if("Series"===e.Type)if("Continuing"===e.Status)I.push(u.Ay.translate("SeriesYearToPresent",k||""));else if(e.EndDate&&e.ProductionYear){var M=s.Ay.toLocaleString(s.Ay.parseISO8601Date(e.EndDate).getFullYear(),{useGrouping:!1});I.push(k+(M===k?"":" - "+M))}else I.push(k||"");else I.push(k||"")}a.showRuntime&&(e.RunTimeTicks?I.push(s.Ay.getDisplayRunningTime(e.RunTimeTicks)):I.push("")),a.showAirTime&&I.push(F(e,a.showAirDateTime,a.showAirEndTime)||""),a.showChannelName&&(e.ChannelId?I.push(E({Id:e.ChannelId,ServerId:f,Name:e.ChannelName,Type:"TvChannel",MediaType:e.MediaType,IsFolder:!1},e.ChannelName)):I.push(i()(e.ChannelName||"")||"&nbsp;")),a.showCurrentProgram&&"TvChannel"===e.Type&&(e.CurrentProgram?I.push(i()(e.CurrentProgram.Name)):I.push("")),a.showCurrentProgramTime&&"TvChannel"===e.Type&&(e.CurrentProgram?I.push(F(e.CurrentProgram,!1,!0)||""):I.push("")),a.showSeriesTimerTime&&(e.RecordAnyTime?I.push(u.Ay.translate("Anytime")):I.push(s.Ay.getDisplayTime(e.StartDate))),a.showSeriesTimerChannel&&(e.RecordAnyChannel?I.push(u.Ay.translate("AllChannels")):I.push(i()(e.ChannelName||"")||u.Ay.translate("OneChannel"))),a.showPersonRoleOrType&&e.Type&&(e.Role?[t.S.Actor,t.S.GuestStar].includes(e.Type)?I.push(u.Ay.translate("PersonRole",i()(e.Role))):e.Role.toLowerCase()===e.Type.toLowerCase()?I.push(i()(u.Ay.translate(e.Type))):(e.Role.toLowerCase().includes(e.Type.toLowerCase())||I.push(i()(u.Ay.translate(e.Type))),I.push(i()(e.Role))):I.push(i()(u.Ay.translate(e.Type))))}(m||!l.imgUrl)&&c.forceName&&c.overlayText&&1===I.length&&(I=[]),c.overlayText&&m&&(I=[i()(e.Name)]);var x=c.isOuterFooter&&a.cardLayout&&!a.centerText&&"none"!==a.cardFooterAside&&g.A.mobile;return d+=function(e,r,a,t,n,i,o){var s,c="",u=0,l=S(e);try{for(l.s();!(s=l.n()).done;){var d=s.value,m=r;if(u>0&&t?m+=" cardText-secondary":0===u&&t&&(m+=" cardText-first"),i&&(m+=" cardText-rightmargin"),d&&(c+="<div class='"+m+"'>",c+="<bdi>"+d+"</bdi>",c+="</div>",u++,o&&u>=o))break}}catch(e){l.e(e)}finally{l.f()}if(a)for(var p=o||Math.min(e.length,o||e.length);u<p;)c+="<div class='"+r+"'>&nbsp;</div>",u++;return c}(I,v,!a.overlayText,c.isOuterFooter,a.cardLayout,x,a.lines),o&&(d+=o),d&&(!c.isOuterFooter||l.logoUrl||a.cardLayout)&&(d='<div class="'+n+'">'+d,d+="</div>"),d}function E(e,r,a){if(r||(r=y.Ay.getDisplayName(e)),r=i()(r),g.A.tv)return r;var t='<a href="'+f.appRouter.getRouteUrl(e)+'" '+T.Ay.getShortcutAttributesHtml(e,a)+' class="itemAction textActionButton" title="'+r+'" data-action="link">';return(t+=r)+"</a>"}function R(e,r,t,n){var o,s=(0,b.n5)({defaultAction:n.action||"link",isFolder:r.IsFolder,isPhoto:"Photo"===r.MediaType}),c=n.shape;"mixed"===c&&(c=(0,b.Tj)(r.PrimaryImageAspectRatio));var l,d,m=L(r,t,n,c),p=m.imgUrl,I=m.blurhash,T=m.forceName,C=n.overlayText,S=(0,b.uA)({itemType:r.Type,itemName:r.Name,hasCoverImage:n.coverImage||m.coverImage,imgUrl:p}),w=h.Ay.getProgressBarHtml(r),B="",k=!1;n.showChannelLogo&&r.ChannelPrimaryImageTag?d=t.getScaledImageUrl(r.ChannelId,{type:"Primary",height:40,tag:r.ChannelPrimaryImageTag}):n.showLogo&&r.ParentLogoImageTag&&(d=t.getScaledImageUrl(r.ParentLogoItemId,{type:"Logo",height:40,tag:r.ParentLogoImageTag})),C?(B+=N(r,0,n,l=w?"innerCardFooter fullInnerCardFooter":"innerCardFooter",w,{forceName:T,overlayText:C,isOuterFooter:!1},{imgUrl:p,logoUrl:d=null}),k=!0):w&&(B+='<div class="innerCardFooter fullInnerCardFooter innerCardFooterClear">',B+=w,B+="</div>",w="");var M=r.MediaSourceCount||1;M>1&&!0!==n.disableIndicators&&(B+='<div class="mediaSourceIndicator">'+M+"</div>");var x="";C||k||(l=n.cardLayout?"cardFooter":"cardFooter cardFooter-transparent",d&&(l+=" cardFooter-withlogo"),n.cardLayout||(d=null),x=N(r,0,n,l,w,{forceName:T,overlayText:C,isOuterFooter:!0},{imgUrl:p,logoUrl:d}));var F,E=(0,b.Rn)({hasOuterCardFooter:x.length>0,cardLayout:n.cardLayout}),R="";if(g.A.mobile){var V=n.overlayPlayButton;null!=V||n.overlayMoreButton||n.overlayInfoButton||n.cardLayout||(V="Video"===r.MediaType);var _="cardOverlayButton cardOverlayButton-br itemAction";n.centerPlayButton&&(R+='<button is="paper-icon-button-light" class="'.concat(_,' cardOverlayButton-centered" data-action="play" title="').concat(u.Ay.translate("Play"),'"><span class="material-icons cardOverlayButtonIcon play_arrow" aria-hidden="true"></span></button>')),!V||r.IsPlaceHolder||"Virtual"===r.LocationType&&r.MediaType&&"Program"!==r.Type||"Person"===r.Type||(R+='<button is="paper-icon-button-light" class="'.concat(_,'" data-action="play" title="').concat(u.Ay.translate("Play"),'"><span class="material-icons cardOverlayButtonIcon play_arrow" aria-hidden="true"></span></button>')),n.overlayMoreButton&&(R+='<button is="paper-icon-button-light" class="'.concat(_,'" data-action="menu" title="').concat(u.Ay.translate("ButtonMore"),'"><span class="material-icons cardOverlayButtonIcon more_vert" aria-hidden="true"></span></button>'))}var q="",H="cardContent",j="";if(I&&I.length>0&&(j='data-blurhash="'+I+'"'),g.A.tv)F=p?'<div class="'+S+" "+H+' lazy" data-src="'+p+'" '+j+">":'<div class="'+S+" "+H+'">',q="</div>";else{var z=' aria-label="'.concat(i()(r.Name),'"'),G=f.appRouter.getRouteUrl(r);F=p?'<a href="'+G+'" data-action="'+s+'" class="'+S+" "+H+' itemAction lazy" data-src="'+p+'" '+j+z+">":'<a href="'+G+'" data-action="'+s+'" class="'+S+" "+H+' itemAction"'+z+">",q="</a>"}var Y="";if(p&&"TvChannel"!==r.Type&&(Y=U(r,function(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?A(Object(a),!0).forEach((function(r){P(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}({defaultCardImageIcon:"folder"},n))),F='<div class="'.concat(E,'"><div class="').concat("cardScalable",'"><div class="cardPadder cardPadder-').concat(c,'">').concat(Y,"</div>").concat(F),!0!==n.disableIndicators){var W="";!1!==n.missingIndicator&&(W+=h.Ay.getMissingIndicator(r)),W+=h.Ay.getSyncIndicator(r),W+=h.Ay.getTimerIndicator(r),W+=h.Ay.getTypeIndicator(r),n.showGroupCount?W+=h.Ay.getChildCountIndicatorHtml(r,{minCount:1}):W+=h.Ay.getPlayedIndicatorHtml(r),("CollectionFolder"===r.Type||r.CollectionType)&&(W+='<div is="emby-itemrefreshindicator"'+(r.RefreshProgress?"":' class="hide"')+' data-progress="'+(r.RefreshProgress||0)+'" data-status="'+r.RefreshStatus+'"></div>',O||(O=!0,a.e(84158).then(a.bind(a,84158)))),W&&(F+='<div class="cardIndicators">'+W+"</div>")}p||(F+=U(r,n));var J=g.A.tv&&!R?"button":"div",K=r.SortName||r.Name||"",Q=K.substring(0,Math.min(3,K.length));Q&&(Q=Q.toUpperCase());var X,$="";r.TimerId&&($+=' data-timerid="'+r.TimerId+'"'),r.SeriesTimerId&&($+=' data-seriestimerid="'+r.SeriesTimerId+'"');var Z="";"button"===J?(X=' data-action="'+s+'"',Z=' aria-label="'.concat(i()(r.Name),'"')):X="";var ee=(0,b.a_)({shape:c,cardCssClass:n.cardCssClass,cardClass:n.cardClass,isTV:g.A.tv,enableFocusTransform:D,isDesktop:g.A.desktop,showChildCountIndicator:n.showChildCountIndicator,childCount:r.ChildCount,tagName:J,itemType:r.Type}),re=null!==(o=r.UserData)&&void 0!==o&&o.PlaybackPositionTicks?' data-positionticks="'+r.UserData.PlaybackPositionTicks+'"':"",ae=n.collectionId?' data-collectionid="'+n.collectionId+'"':"",te=n.playlistId?' data-playlistid="'+n.playlistId+'"':"",ne=r.MediaType?' data-mediatype="'+r.MediaType+'"':"",ie=r.CollectionType?' data-collectiontype="'+r.CollectionType+'"':"",oe=r.ChannelId?' data-channelid="'+r.ChannelId+'"':"",se=r.Path?' data-path="'+i()(r.Path)+'"':"",ce=n.context?' data-context="'+n.context+'"':"",ue=n.parentId?' data-parentid="'+n.parentId+'"':"",le=r.StartDate?' data-startdate="'+r.StartDate.toString()+'"':"",de=r.EndDate?' data-enddate="'+r.EndDate.toString()+'"':"",me="";return g.A.desktop&&!n.disableHoverMenu&&(me+=function(e,r){var t="";t+='<div class="cardOverlayContainer itemAction" data-action="'+r+'">',t+='<a href="'+f.appRouter.getRouteUrl(e)+'" class="cardImageContainer"></a>';var n="cardOverlayButton cardOverlayButton-hover itemAction paper-icon-button-light";v.f.canPlay(e)&&(t+='<button is="paper-icon-button-light" class="'+n+' cardOverlayFab-primary" data-action="resume"><span class="material-icons cardOverlayButtonIcon cardOverlayButtonIcon-hover play_arrow" aria-hidden="true"></span></button>'),t+='<div class="cardOverlayButton-br flex">';var i=e.UserData||{};if(y.Ay.canMarkPlayed(e)&&(a.e(38965).then(a.bind(a,38965)),t+='<button is="emby-playstatebutton" type="button" data-action="none" class="'+n+'" data-id="'+e.Id+'" data-serverid="'+e.ServerId+'" data-itemtype="'+e.Type+'" data-played="'+i.Played+'"><span class="material-icons cardOverlayButtonIcon cardOverlayButtonIcon-hover check" aria-hidden="true"></span></button>'),y.Ay.canRate(e)){var o=null==i.Likes?"":i.Likes;a.e(15605).then(a.bind(a,15605)),t+='<button is="emby-ratingbutton" type="button" data-action="none" class="'+n+'" data-id="'+e.Id+'" data-serverid="'+e.ServerId+'" data-itemtype="'+e.Type+'" data-likes="'+o+'" data-isfavorite="'+i.IsFavorite+'"><span class="material-icons cardOverlayButtonIcon cardOverlayButtonIcon-hover favorite" aria-hidden="true"></span></button>'}return t+='<button is="paper-icon-button-light" class="'.concat(n,'" data-action="menu" title="').concat(u.Ay.translate("ButtonMore"),'"><span class="material-icons cardOverlayButtonIcon cardOverlayButtonIcon-hover more_vert" aria-hidden="true"></span></button>'),(t+="</div>")+"</div>"}(r,s)),"<"+J+' data-index="'+e+'"'+$+X+' data-isfolder="'+(r.IsFolder||!1)+'" data-serverid="'+(r.ServerId||n.serverId)+'" data-id="'+(r.Id||r.ItemId)+'" data-type="'+r.Type+'"'+ne+ie+oe+se+re+ae+te+ce+ue+le+de+' data-prefix="'+i()(Q)+'" class="'+ee+'"'+Z+">"+F+B+q+R+me+"</div>"+x+"</div></"+J+">"}function U(e,r){if(e.CollectionType)return'<span class="cardImageIcon material-icons '+d.Ay.getLibraryIcon(e.CollectionType)+'" aria-hidden="true"></span>';switch(e.Type){case"MusicAlbum":return'<span class="cardImageIcon material-icons album" aria-hidden="true"></span>';case"MusicArtist":case"Person":return'<span class="cardImageIcon material-icons person" aria-hidden="true"></span>';case"Audio":return'<span class="cardImageIcon material-icons audiotrack" aria-hidden="true"></span>';case"Movie":return'<span class="cardImageIcon material-icons movie" aria-hidden="true"></span>';case"Episode":case"Series":return'<span class="cardImageIcon material-icons tv" aria-hidden="true"></span>';case"Program":return'<span class="cardImageIcon material-icons live_tv" aria-hidden="true"></span>';case"Book":return'<span class="cardImageIcon material-icons book" aria-hidden="true"></span>';case"Folder":return'<span class="cardImageIcon material-icons folder" aria-hidden="true"></span>';case"BoxSet":return'<span class="cardImageIcon material-icons collections" aria-hidden="true"></span>';case"Playlist":return'<span class="cardImageIcon material-icons view_list" aria-hidden="true"></span>';case"Photo":return'<span class="cardImageIcon material-icons photo" aria-hidden="true"></span>';case"PhotoAlbum":return'<span class="cardImageIcon material-icons photo_album" aria-hidden="true"></span>'}if(null!=r&&r.defaultCardImageIcon)return'<span class="cardImageIcon material-icons '+r.defaultCardImageIcon+'" aria-hidden="true"></span>';var a=(0,b.hn)(e.Type)?e.Name:y.Ay.getDisplayName(e);return'<div class="cardText cardDefaultText">'+i()(a)+"</div>"}function V(e,r){if(document.body.contains(r.itemsContainer)){if(r.parentContainer){if(!e.length)return void r.parentContainer.classList.add("hide");r.parentContainer.classList.remove("hide")}var a=x(e,r);a?(r.itemsContainer.cardBuilderHtml!==a&&(r.itemsContainer.innerHTML=a,e.length<50?r.itemsContainer.cardBuilderHtml=a:r.itemsContainer.cardBuilderHtml=null),p.default.lazyChildren(r.itemsContainer)):(r.itemsContainer.innerHTML=a,r.itemsContainer.cardBuilderHtml=null),r.autoFocus&&m.A.autoFocus(r.itemsContainer,!0)}}function _(e,r){if(r)return r;if(!(r=e.querySelector(".cardIndicators"))){var a=e.querySelector(".cardImageContainer");(r=document.createElement("div")).classList.add("cardIndicators"),a.appendChild(r)}return r}function q(e,r){var a=e.getAttribute("data-type"),t="Series"===a||"BoxSet"===a||"Season"===a,n=null,i=null,o=null,s=null;r.Played?((i=e.querySelector(".playedIndicator"))||((i=document.createElement("div")).classList.add("playedIndicator","indicator"),(n=_(e,n)).appendChild(i)),i.innerHTML='<span class="material-icons indicatorIcon check" aria-hidden="true"></span>'):(i=e.querySelector(".playedIndicator"))&&i.parentNode.removeChild(i),r.UnplayedItemCount?((o=e.querySelector(".countIndicator"))||((o=document.createElement("div")).classList.add("countIndicator","indicator"),(n=_(e,n)).appendChild(o)),o.innerHTML=r.UnplayedItemCount):t&&(o=e.querySelector(".countIndicator"))&&o.parentNode.removeChild(o);var c=h.Ay.getProgressBarHtml({Type:a,UserData:r,MediaType:"Video"});if(c){if(!(s=e.querySelector(".itemProgressBar"))){(s=document.createElement("div")).classList.add("itemProgressBar");var u=e.querySelector(".innerCardFooter");u||((u=document.createElement("div")).classList.add("innerCardFooter"),e.querySelector(".cardImageContainer").appendChild(u)),u.appendChild(s)}s.innerHTML=c}else(s=e.querySelector(".itemProgressBar"))&&s.parentNode.removeChild(s)}function H(e,r){for(var a=(r||document.body).querySelectorAll('.card-withuserdata[data-id="'+e.ItemId+'"]'),t=0,n=a.length;t<n;t++)q(a[t],e)}function j(e,r,a){for(var t=a.querySelectorAll('.card[data-id="'+e+'"]'),n=0,i=t.length;n<i;n++){var o=t[n];o.querySelector(".timerIndicator")||_(o).insertAdjacentHTML("beforeend",'<span class="material-icons timerIndicator indicatorIcon fiber_manual_record" aria-hidden="true"></span>'),o.setAttribute("data-timerid",r)}}function z(e,r){var a,t=S(r.querySelectorAll('.card[data-timerid="'+e+'"]'));try{for(t.s();!(a=t.n()).done;){var n=a.value,i=n.querySelector(".timerIndicator");i&&i.parentNode.removeChild(i),n.removeAttribute("data-timerid")}}catch(e){t.e(e)}finally{t.f()}}function G(e,r){var a,t=S(r.querySelectorAll('.card[data-seriestimerid="'+e+'"]'));try{for(t.s();!(a=t.n()).done;){var n=a.value,i=n.querySelector(".timerIndicator");i&&i.parentNode.removeChild(i),n.removeAttribute("data-seriestimerid")}}catch(e){t.e(e)}finally{t.f()}}r.default={getCardsHtml:k,getDefaultText:U,buildCards:V,onUserDataChanged:H,onTimerCreated:j,onTimerCancelled:z,onSeriesTimerCancelled:G}},51938:function(e,r,a){"use strict";a(78557),a(73687);var t=a(98320),n=a(23648);function i(e){return"Video"===e.MediaType&&"TvChannel"!==e.Type||"AudioBook"===e.Type||"AudioPodcast"===e.Type}function o(e,r){var a="itemProgressBar";return null!=r&&r.containerClass&&(a+=" "+r.containerClass),'<div class="'+a+'"><div class="itemProgressBarForeground" style="width:'+e+'%;"></div></div>'}function s(e){return n.Ay.canMarkPlayed(e)}function c(e){return e>=100?"99+":e.toString()}a(12383),r.Ay={getProgressHtml:o,getProgressBarHtml:function(e,r){var a;if(i(e)&&"Recording"!==e.Type){var n=null!=r&&r.userData?r.userData:e.UserData;if(n&&(a=n.PlayedPercentage)&&a<100)return o(a,r)}if(("Program"===e.Type||"Timer"===e.Type||"Recording"===e.Type)&&e.StartDate&&e.EndDate){var s=0,c=1;try{s=t.Ay.parseISO8601Date(e.StartDate).getTime(),c=t.Ay.parseISO8601Date(e.EndDate).getTime()}catch(e){console.error(e)}if((a=((new Date).getTime()-s)/(c-s)*100)>0&&a<100)return function(e,r,a,t,n){var i="itemProgressBar";null!=r&&r.containerClass&&(i+=" "+r.containerClass);var o="itemProgressBarForeground";return a&&(o+=" itemProgressBarForeground-recording"),'<div is="emby-progressbar" data-automode="time" data-starttime="'+t+'" data-endtime="'+n+'" class="'+i+'"><div class="'+o+'" style="width:'+e+'%;"></div></div>'}(a,r,"Timer"===e.Type||"Recording"===e.Type||e.TimerId,s,c)}return""},getPlayedIndicatorHtml:function(e){if(s(e)){var r=e.UserData||{};if(r.UnplayedItemCount)return'<div class="countIndicator indicator">'+c(r.UnplayedItemCount)+"</div>";if(r.PlayedPercentage&&r.PlayedPercentage>=100||r.Played)return'<div class="playedIndicator indicator"><span class="material-icons indicatorIcon check" aria-hidden="true"></span></div>'}return""},getChildCountIndicatorHtml:function(e,r){var a=null!=r&&r.minCount?r.minCount:0;return e.ChildCount&&e.ChildCount>a?'<div class="countIndicator indicator">'+c(e.ChildCount)+"</div>":""},enableProgressIndicator:i,getTimerIndicator:function(e){var r;if("SeriesTimer"===e.Type)return'<span class="material-icons timerIndicator indicatorIcon fiber_smart_record" aria-hidden="true"></span>';if(e.TimerId||e.SeriesTimerId)r=e.Status||"Cancelled";else{if("Timer"!==e.Type)return"";r=e.Status}return e.SeriesTimerId?"Cancelled"!==r?'<span class="material-icons timerIndicator indicatorIcon fiber_smart_record" aria-hidden="true"></span>':'<span class="material-icons timerIndicator timerIndicator-inactive indicatorIcon fiber_smart_record" aria-hidden="true"></span>':'<span class="material-icons timerIndicator indicatorIcon fiber_manual_record" aria-hidden="true"></span>'},enablePlayedIndicator:s,getSyncIndicator:function(e){return 100===e.SyncPercent?'<div class="syncIndicator indicator fullSyncIndicator"><span class="material-icons indicatorIcon file_download" aria-hidden="true"></span></div>':null!=e.SyncPercent?'<div class="syncIndicator indicator emptySyncIndicator"><span class="material-icons indicatorIcon file_download" aria-hidden="true"></span></div>':""},getTypeIndicator:function(e){var r={Video:"videocam",Folder:"folder",PhotoAlbum:"photo_album",Photo:"photo"}[e.Type];return r?'<div class="indicator videoIndicator"><span class="material-icons indicatorIcon '+r+'" aria-hidden="true"></span></div>':""},getMissingIndicator:function(e){if("Episode"===e.Type&&"Virtual"===e.LocationType){if(e.PremiereDate)try{if(t.Ay.parseISO8601Date(e.PremiereDate).getTime()>(new Date).getTime())return'<div class="unairedIndicator">Unaired</div>'}catch(e){console.error(e)}return'<div class="missingIndicator">Missing</div>'}return""}}},12383:function(e,r,a){a(96054);var t=Object.create(HTMLDivElement.prototype);function n(){var e=parseInt(this.getAttribute("data-starttime"),10),r=parseInt(this.getAttribute("data-endtime"),10),a=((new Date).getTime()-e)/(r-e)*100;a=Math.min(100,a),a=Math.max(0,a),this.querySelector(".itemProgressBarForeground").style.width=a+"%"}t.attachedCallback=function(){this.timeInterval&&clearInterval(this.timeInterval),"time"===this.getAttribute("data-automode")&&(this.timeInterval=setInterval(n.bind(this),6e4))},t.detachedCallback=function(){this.timeInterval&&(clearInterval(this.timeInterval),this.timeInterval=null)},document.registerElement("emby-progressbar",{prototype:t,extends:"div"})},36668:function(e,r,a){"use strict";a.d(r,{QW:function(){return T},Qp:function(){return v},Rn:function(){return g},Tj:function(){return p},a_:function(){return h},hn:function(){return l},n5:function(){return d},uA:function(){return y},w:function(){return m},zo:function(){return I}});var t=a(80633),n=a(51686),i=a(4452),o=a.n(i),s=2/3,c=16/9,u=1e3/185,l=function(e){return"Program"===e||"Timer"===e||"Recording"===e},d=function(e){return"play"===e.defaultAction&&e.isFolder?"link":e.isPhoto?"play":e.defaultAction},m=function(e){var r=window.screen;return!!(r&&r.availWidth-e>20)},p=function(e){return null==e?t.G8.MixedSquare:e>=1.33?t.G8.MixedBackdrop:e>.8?t.G8.MixedSquare:t.G8.MixedPortrait},h=function(e){var r;return o()(((r={card:!0})["".concat(e.shape,"Card")]=e.shape,r["".concat(e.cardCssClass)]=e.cardCssClass,r["".concat(e.cardClass)]=e.cardClass,r["card-hoverable"]=e.isDesktop,r["show-focus"]=e.isTV,r["show-animation"]=e.isTV&&e.enableFocusTransform,r.groupedCard=e.showChildCountIndicator&&e.childCount,r["card-withuserdata"]=!["MusicAlbum","MusicArtist","Audio"].includes(e.itemType),r.itemAction="button"===e.tagName,r))},y=function(e){var r;return o()(((r={cardImageContainer:!0,coveredImage:e.hasCoverImage,"coveredImage-contain":e.hasCoverImage&&"TvChannel"===e.itemType})[v(e.itemName)]=!e.imgUrl,r))},g=function(e){return o()({cardBox:!0,visualCardBox:e.cardLayout,"cardBox-bottompadded":e.hasOuterCardFooter&&!e.cardLayout})},v=function(e){return"defaultCardBackground defaultCardBackground".concat(f(e))},f=function(e){if(e){for(var r=Math.floor(e.length/2),a=String(e.slice(r,r+1).charCodeAt(0)),t=0,i=0;i<a.length;i++)t+=parseInt(a.charAt(i),10);return parseInt(String(t).slice(-1),10)%5+1}return(0,n.HO)(1,5)},I=function(e){return e?-1!==(e=e.toLowerCase()).indexOf("portrait")?s:-1!==e.indexOf("backdrop")?c:-1!==e.indexOf("square")?1:-1!==e.indexOf("banner")?u:null:null},T=function(e,r,a,t){switch(e){case"portrait":return b(r,t);case"square":return C(r,t);case"banner":return A(r);case"backdrop":return P(r,t);case"smallBackdrop":return S(r);case"overflowSmallBackdrop":return w(r,a,t);case"overflowPortrait":return B(r,a,t);case"overflowSquare":return O(r,a,t);case"overflowBackdrop":return D(r,a,t);default:return 4}},b=function(e,r){switch(!0){case r:return 5.9999999988;case e>=2200:return 10;case e>=1920:return 9.000000000009;case e>=1600:return 8;case e>=1400:return 7.0000000000021;case e>=1200:return 5.9999999988;case e>=800:return 5;case e>=700:return 4;default:return 3.0000000003}},C=function(e,r){switch(!0){case r:return 5.9999999988;case e>=2200:return 10;case e>=1920:return 9.000000000009;case e>=1600:return 8;case e>=1400:return 7.0000000000021;case e>=1200:return 5.9999999988;case e>=800:return 5;case e>=700:return 4;case e>=500:return 3.0000000003;default:return 2}},A=function(e){switch(!0){case e>=2200:return 4;case e>=1200:return 3.0000000003;case e>=800:return 2;default:return 1}},P=function(e,r){switch(!0){case r:return 4;case e>=2500:return 6;case e>=1600:return 5;case e>=1200:return 4;case e>=770:return 3;case e>=420:return 2;default:return 1}},S=function(e){switch(!0){case e>=1600:return 8;case e>=1400:return 7.000000000007001;case e>=1200:return 5.9999999988;case e>=1e3:return 5;case e>=800:return 4;case e>=500:return 3.0000000003;default:return 2}},w=function(e,r,a){switch(!0){case a:return 100/18.9;case r&&e>=800:return 100/15.5;case r:return 100/23.3;case e>=540:return 100/30;default:return 100/72}},B=function(e,r,a){switch(!0){case a:return 100/15.5;case r&&e>=1700:return 100/11.6;case r:return 100/15.5;case e>=1400:return 100/15;case e>=1200:return 100/18;case e>=760:return 100/23;case e>=400:return 100/31.5;default:return 100/42}},O=function(e,r,a){switch(!0){case a:return 100/15.5;case r&&e>=1700:return 100/11.6;case r:return 100/15.5;case e>=1400:return 100/15;case e>=1200:return 100/18;case e>=760:return 100/23;case e>=540:return 100/31.5;default:return 100/42}},D=function(e,r,a){switch(!0){case a:return 100/23.3;case r&&e>=1700:return 100/18.5;case r:return 100/23.3;case e>=1800:return 100/23.5;case e>=1400:return 100/30;case e>=760:return 2.5;case e>=640:return 100/56;default:return 100/72}}},80633:function(e,r,a){"use strict";var t;function n(e){return void 0===e&&(e=!0),e?t.SquareOverflow:t.Square}function i(e){return void 0===e&&(e=!0),e?t.BackdropOverflow:t.Backdrop}function o(e){return void 0===e&&(e=!0),e?t.PortraitOverflow:t.Portrait}a.d(r,{G8:function(){return t},UI:function(){return i},xK:function(){return o},zP:function(){return n}}),function(e){e.Backdrop="backdrop",e.BackdropOverflow="overflowBackdrop",e.Banner="banner",e.Portrait="portrait",e.PortraitOverflow="overflowPortrait",e.Square="square",e.SquareOverflow="overflowSquare",e.Auto="auto",e.AutoHome="autohome",e.AutoOverflow="autooverflow",e.AutoVertical="autoVertical",e.Mixed="mixed",e.MixedSquare="mixedSquare",e.MixedBackdrop="mixedBackdrop",e.MixedPortrait="mixedPortrait"}(t||(t={}))},40782:function(e,r,a){"use strict";var t=a(11444),n="assets/img/devices/";r.Ay={getDeviceIcon:function(e){var r;switch(e.AppName||e.Client){case"Samsung Smart TV":return n+"samsung.svg";case"Xbox One":return n+"xbox.svg";case"Sony PS4":return n+"playstation.svg";case"Kodi":case"Kodi JellyCon":return n+"kodi.svg";case"Jellyfin Android":case"AndroidTV":case"Android TV":return n+"android.svg";case"Jellyfin Mobile (iOS)":case"Jellyfin Mobile (iPadOS)":case"Jellyfin iOS":case"Infuse":return n+"apple.svg";case"Home Assistant":return n+"home-assistant.svg";case"Jellyfin Roku":return n+"roku.svg";case"Finamp":return n+"finamp.svg";case"Jellyfin Web":return function(e){switch(e){case"Opera":case"Opera TV":case"Opera Android":return n+"opera.svg";case"Chrome":case"Chrome Android":return n+"chrome.svg";case"Firefox":case"Firefox Android":return n+"firefox.svg";case"Safari":case"Safari iPad":case"Safari iPhone":return n+"safari.svg";case"Edge Chromium":case"Edge Chromium Android":case"Edge Chromium iPad":case"Edge Chromium iPhone":return n+"edgechromium.svg";case"Edge":return n+"edge.svg";case"Internet Explorer":return n+"msie.svg";default:return n+"html5.svg"}}(e.Name||e.DeviceName);default:if(null===(r=e.Capabilities)||void 0===r?void 0:r.IconUrl)try{return new URL(e.Capabilities.IconUrl).toString()}catch(r){console.error("[getDeviceIcon] device capabilities has invalid IconUrl",e,r)}return n+"other.svg"}},getLibraryIcon:function(e){switch(e){case"movies":return"video_library";case"music":return"library_music";case"photos":case"homevideos":return"photo_library";case"livetv":return"live_tv";case"tvshows":return"tv";case"trailers":return"local_movies";case"musicvideos":return"music_video";case"books":return"library_books";case"channels":return"videocam";case"playlists":return"view_list";default:return"folder"}},getItemTypeIcon:function(e){switch(e){case t.D.MusicAlbum:return"album";case t.D.MusicArtist:case t.D.Person:return"person";case t.D.Audio:return"audiotrack";case t.D.Movie:return"movie";case t.D.Episode:case t.D.Series:return"tv";case t.D.Program:return"live_tv";case t.D.Book:return"book";case t.D.Folder:return"folder";case t.D.BoxSet:return"collections";case t.D.Playlist:return"view_list";case t.D.Photo:return"photo";case t.D.PhotoAlbum:return"photo_album";default:return"folder"}}}}}]);