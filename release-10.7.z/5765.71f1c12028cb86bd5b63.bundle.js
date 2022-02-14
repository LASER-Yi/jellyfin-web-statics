"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5765],{25765:function(e,t,r){r.r(t),r(61013),r(48410);var s=r(66056),i=r(61097),a=r(91081),o=r(53754),n=(r(32420),r(78066),r(53913));function l(e,t,r,s){switch(s){case"Program":d(r,t,s,{MediaTypes:"",IncludeItemTypes:"Program",PersonTypes:"",ArtistIds:"",AlbumArtistIds:"",Limit:10,SortBy:"StartDate"},{shape:"overflowBackdrop",showTitle:!0,centerText:!0,overlayMoreButton:!0,preferThumb:!0,overlayText:!1,showAirTime:!0,showAirDateTime:!0,showChannelName:!0});break;case"Movie":d(r,t,s,{MediaTypes:"",IncludeItemTypes:"Movie",PersonTypes:"",ArtistIds:"",AlbumArtistIds:"",Limit:10,SortBy:"SortName"},{shape:"overflowPortrait",showTitle:!0,centerText:!0,overlayMoreButton:!0,overlayText:!1,showYear:!0});break;case"MusicVideo":d(r,t,s,{MediaTypes:"",IncludeItemTypes:"MusicVideo",PersonTypes:"",ArtistIds:"",AlbumArtistIds:"",Limit:10,SortBy:"SortName"},{shape:"overflowBackdrop",showTitle:!0,centerText:!0,overlayPlayButton:!0});break;case"Trailer":d(r,t,s,{MediaTypes:"",IncludeItemTypes:"Trailer",PersonTypes:"",ArtistIds:"",AlbumArtistIds:"",Limit:10,SortBy:"SortName"},{shape:"overflowPortrait",showTitle:!0,centerText:!0,overlayPlayButton:!0});break;case"Series":d(r,t,s,{MediaTypes:"",IncludeItemTypes:"Series",PersonTypes:"",ArtistIds:"",AlbumArtistIds:"",Limit:10,SortBy:"SortName"},{shape:"overflowPortrait",showTitle:!0,centerText:!0,overlayMoreButton:!0});break;case"MusicAlbum":d(r,t,s,{MediaTypes:"",IncludeItemTypes:"MusicAlbum",PersonTypes:"",ArtistIds:"",AlbumArtistIds:"",SortOrder:"Descending",SortBy:"PremiereDate,ProductionYear,Sortname"},{shape:"overflowSquare",playFromHere:!0,showTitle:!0,showYear:!0,coverImage:!0,centerText:!0,overlayPlayButton:!0});break;case"MusicArtist":d(r,t,s,{MediaTypes:"",IncludeItemTypes:"MusicArtist",PersonTypes:"",ArtistIds:"",AlbumArtistIds:"",Limit:8,SortBy:"SortName"},{shape:"overflowSquare",playFromHere:!0,showTitle:!0,showParentTitle:!0,coverImage:!0,centerText:!0,overlayPlayButton:!0});break;case"Episode":d(r,t,s,{MediaTypes:"",IncludeItemTypes:"Episode",PersonTypes:"",ArtistIds:"",AlbumArtistIds:"",Limit:6,SortBy:"SortName"},{shape:"overflowBackdrop",showTitle:!0,showParentTitle:!0,centerText:!0,overlayPlayButton:!0});break;case"Audio":d(r,t,s,{MediaTypes:"",IncludeItemTypes:"Audio",PersonTypes:"",ArtistIds:"",AlbumArtistIds:"",SortBy:"AlbumArtist,Album,SortName"},{playFromHere:!0,action:"playallfromhere",smallIcon:!0,artist:!0})}}function d(e,t,r,o,l){(function(e,t){var r=u(e,t);return function(e,s,i){r.StartIndex=e,r.Limit=s,i&&(r.Fields+=","+i);var a=n.Z.getApiClient(t.ServerId);return"MusicArtist"===r.IncludeItemTypes?(r.IncludeItemTypes=null,a.getAlbumArtists(a.getCurrentUserId(),r)):a.getItems(a.getCurrentUserId(),r)}})(o=u(o,t),t)(o.StartIndex,o.Limit,o.Fields).then((function(n){var d="";if(o.Limit&&n.TotalRecordCount>o.Limit){var u=e.querySelector("a");u.classList.remove("hide"),u.setAttribute("href",function(e,t){return"Genre"===e.Type?"#!/list.html?type="+t+"&genreId="+e.Id+"&serverId="+e.ServerId:"MusicGenre"===e.Type?"#!/list.html?type="+t+"&musicGenreId="+e.Id+"&serverId="+e.ServerId:"Studio"===e.Type?"#!/list.html?type="+t+"&studioId="+e.Id+"&serverId="+e.ServerId:"MusicArtist"===e.Type?"#!/list.html?type="+t+"&artistId="+e.Id+"&serverId="+e.ServerId:"Person"===e.Type?"#!/list.html?type="+t+"&personId="+e.Id+"&serverId="+e.ServerId:"#!/list.html?type="+t+"&parentId="+e.Id+"&serverId="+e.ServerId}(t,r))}else e.querySelector("a").classList.add("hide");l.items=n.Items;var c=e.querySelector(".itemsContainer");"Audio"===r?(d=s.Z.getListViewHtml(l),c.classList.remove("vertical-wrap"),c.classList.add("vertical-list")):(d=i.default.getCardsHtml(l),c.classList.add("vertical-wrap"),c.classList.remove("vertical-list")),c.innerHTML=d,a.default.lazyChildren(c)}))}function u(e,t){var r={SortOrder:"Ascending",IncludeItemTypes:"",Recursive:!0,Fields:"AudioInfo,ParentId,PrimaryImageAspectRatio,BasicSyncInfo",Limit:100,StartIndex:0,CollapseBoxSetItems:!1};return function(e,t){"Person"===t.Type?e.PersonIds=t.Id:"Genre"===t.Type||"MusicGenre"===t.Type||"GameGenre"===t.Type?e.Genres=t.Name:"Studio"===t.Type?e.StudioIds=t.Id:"MusicArtist"===t.Type&&(e.ArtistIds=t.Id)}(r=Object.assign(r,e||{}),t),r}window.ItemsByName={renderItems:function(e,t){var r=[];t.ArtistCount&&r.push({name:o.ZP.translate("Artists"),type:"MusicArtist"}),t.ProgramCount&&"Person"===t.Type&&r.push({name:o.ZP.translate("HeaderUpcomingOnTV"),type:"Program"}),t.MovieCount&&r.push({name:o.ZP.translate("Movies"),type:"Movie"}),t.SeriesCount&&r.push({name:o.ZP.translate("Shows"),type:"Series"}),t.EpisodeCount&&r.push({name:o.ZP.translate("Episodes"),type:"Episode"}),t.TrailerCount&&r.push({name:o.ZP.translate("Trailers"),type:"Trailer"}),t.AlbumCount&&r.push({name:o.ZP.translate("Albums"),type:"MusicAlbum"}),t.MusicVideoCount&&r.push({name:o.ZP.translate("MusicVideos"),type:"MusicVideo"});var s=e.querySelector("#childrenContent");s.innerHTML=r.map((function(e){var t="",r="verticalSection";return"Audio"===e.type&&(r+=" verticalSection-extrabottompadding"),t+='<div class="'+r+'" data-type="'+e.type+'">',t+='<div class="sectionTitleContainer sectionTitleContainer-cards">',t+='<h2 class="sectionTitle sectionTitle-cards">',t+=e.name,t+="</h2>",t+='<a is="emby-linkbutton" href="#" class="clearLink hide" style="margin-left:1em;vertical-align:middle;"><button is="emby-button" type="button" class="raised more raised-mini noIcon">'+o.ZP.translate("ButtonMore")+"</button></a>",t+="</div>",t+='<div is="emby-itemscontainer" class="itemsContainer padded-right">',(t+="</div>")+"</div>"})).join("");for(var i=s.querySelectorAll(".verticalSection"),a=0,n=i.length;a<n;a++)l(0,t,i[a],i[a].getAttribute("data-type"))}}}}]);