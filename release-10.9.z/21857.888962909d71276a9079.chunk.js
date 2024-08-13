"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[21857],{21857:function(e,t,a){a.r(t),a(78557),a(96054),a(23630);var i,n=a(80669),r=a(65875),s=a(62014),o=a(86191),u=a(13615);function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(t.type=t.type||"Primary","Episode"!==e.Type)return null;if("Primary"===t.type&&e.SeriesPrimaryImageTag)return t.tag=e.SeriesPrimaryImageTag,o.A.getApiClient(e.ServerId).getScaledImageUrl(e.SeriesId,t);if("Thumb"===t.type){if(e.SeriesThumbImageTag)return t.tag=e.SeriesThumbImageTag,o.A.getApiClient(e.ServerId).getScaledImageUrl(e.SeriesId,t);if(e.ParentThumbImageTag)return t.tag=e.ParentThumbImageTag,o.A.getApiClient(e.ServerId).getScaledImageUrl(e.ParentThumbItemId,t)}return null}function m(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return a.type=a.type||"Primary",null!==(t=e.ImageTags)&&void 0!==t&&t[a.type]?(a.tag=e.ImageTags[a.type],o.A.getApiClient(e.ServerId).getScaledImageUrl(e.Id,a)):e.AlbumId&&e.AlbumPrimaryImageTag?(a.tag=e.AlbumPrimaryImageTag,o.A.getApiClient(e.ServerId).getScaledImageUrl(e.AlbumId,a)):null}function d(e){var t=[];return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[96,128,192,256,384,512]).forEach((function(a){var i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=l(e,t)||m(e,t);if(a){var i=t.height||t.maxHeight;return{src:a,sizes:i+"x"+i}}return null}(e,{height:a});null!==i&&t.push(i)})),t}function g(e,t,a){if("timeupdate"!==a){var i=t.NowPlayingItem;if(i){"init"===a&&(a="timeupdate");var n="Video"===i.MediaType,s=e.isLocalPlayer||!1;if(!s||!n){var o=t.PlayState||{},g=r.A.getNowPlayingNames(i),c=g[g.length-1].text,f=1===g.length?"":g[0].text,p=i.Album||"",I=i.Id,y=parseInt(i.RunTimeTicks?i.RunTimeTicks/1e4:0,10),S=parseInt(o.PositionTicks?o.PositionTicks/1e4:0,10),v=o.IsPaused||!1,h=o.CanSeek||!1;if("mediaSession"in navigator)navigator.mediaSession.metadata=new MediaMetadata({title:f,artist:c,album:p,artwork:d(i)});else{var T=l(i,{maxHeight:3e3})||m(i,{maxHeight:3e3});u.A.updateMediaSession({action:a,isLocalPlayer:s,itemId:I,title:f,artist:c,album:p,duration:y,position:S,imageUrl:T,canSeek:h,isPaused:v})}}}else A()}}function c(e){g(this,n.f.getPlayerState(this),e.type)}function f(e,t){g(this,t,"statechange")}function p(e,t){g(this,t,e.type)}function I(){A()}function A(){"mediaSession"in navigator?navigator.mediaSession.metadata=null:u.A.hideMediaSession()}function y(e){i&&(s.A.off(i,"playbackstart",p),s.A.off(i,"playbackstop",I),s.A.off(i,"unpause",c),s.A.off(i,"pause",c),s.A.off(i,"statechange",f),s.A.off(i,"timeupdate",c),i=null,A()),e&&(i=e,g(e,n.f.getPlayerState(e),"init"),s.A.on(i,"playbackstart",p),s.A.on(i,"playbackstop",I),s.A.on(i,"unpause",c),s.A.on(i,"pause",c),s.A.on(i,"statechange",f),s.A.on(i,"timeupdate",c))}function S(e){n.f[e](i)}"mediaSession"in navigator&&(navigator.mediaSession.setActionHandler("previoustrack",(function(){S("previousTrack")})),navigator.mediaSession.setActionHandler("nexttrack",(function(){S("nextTrack")})),navigator.mediaSession.setActionHandler("play",(function(){S("unpause")})),navigator.mediaSession.setActionHandler("pause",(function(){S("pause")})),navigator.mediaSession.setActionHandler("seekbackward",(function(){S("rewind")})),navigator.mediaSession.setActionHandler("seekforward",(function(){S("fastForward")})),navigator.mediaSession.setActionHandler("seekto",(function(e){var t=n.f.getPlayerState(i).NowPlayingItem,a=parseInt(t.RunTimeTicks?t.RunTimeTicks/1e4:0,10),r=1e3*e.seekTime;n.f.seekPercent(r/a*100,i)}))),s.A.on(n.f,"playerchange",(function(){y(n.f.getCurrentPlayer())})),y(n.f.getCurrentPlayer())},65875:function(e,t,a){a(86584),t.A={getNowPlayingNames:function(e,t){var a,i,n=e,r=null,s=e.Name;e.AlbumId&&"Audio"===e.MediaType&&(n={Id:e.AlbumId,Name:e.Album,Type:"MusicAlbum",IsFolder:!0}),"Video"===e.MediaType&&(null!=e.IndexNumber&&(s=e.IndexNumber+" - "+s),null!=e.ParentIndexNumber&&(s=e.ParentIndexNumber+"."+s));var o="";null!==(a=e.ArtistItems)&&void 0!==a&&a.length?(r={Id:e.ArtistItems[0].Id,Name:e.ArtistItems[0].Name,Type:"MusicArtist",IsFolder:!0},o=e.ArtistItems.map((function(e){return e.Name})).join(", ")):null!==(i=e.Artists)&&void 0!==i&&i.length?o=e.Artists.join(", "):e.SeriesName||e.Album?(o=s,s=e.SeriesName||e.Album,r=n,n=e.SeriesId?{Id:e.SeriesId,Name:e.SeriesName,Type:"Series",IsFolder:!0}:null):e.ProductionYear&&!1!==t&&(o=e.ProductionYear);var u=[];return u.push({text:s,item:n}),o&&u.push({text:o,item:r}),u}}}}]);