"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1181],{23628:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var a=n(53754),i=n(6594),r=n(17025),o=(n(65219),n(78066),n(76543));function l(){return[{href:"#!/library.html",name:a.ZP.translate("HeaderLibraries")},{href:"#!/librarydisplay.html",name:a.ZP.translate("Display")},{href:"#!/metadataimages.html",name:a.ZP.translate("Metadata")},{href:"#!/metadatanfo.html",name:a.ZP.translate("TabNfoSettings")}]}function d(e,t){e.querySelector("form").addEventListener("submit",(function(e){i.ZP.show();var t=this;return ApiClient.getServerConfiguration().then((function(e){e.EnableFolderView=t.querySelector(".chkFolderView").checked,e.EnableGroupingIntoCollections=t.querySelector(".chkGroupMoviesIntoCollections").checked,e.DisplaySpecialsWithinSeasons=t.querySelector(".chkDisplaySpecialsWithinSeasons").checked,e.EnableExternalContentInSuggestions=t.querySelector(".chkExternalContentInSuggestions").checked,e.SaveMetadataHidden=t.querySelector("#chkSaveMetadataHidden").checked,ApiClient.updateServerConfiguration(e).then(o.ZP.processServerConfigurationUpdateResult)})),ApiClient.getNamedConfiguration("metadata").then((function(e){e.UseFileCreationTimeForDateAdded="1"===$("#selectDateAdded",t).val(),ApiClient.updateNamedConfiguration("metadata",e)})),e.preventDefault(),i.ZP.hide(),!1})),e.addEventListener("viewshow",(function(){r.Z.setTabs("librarysetup",1,l),ApiClient.getServerConfiguration().then((function(t){e.querySelector(".chkFolderView").checked=t.EnableFolderView,e.querySelector(".chkGroupMoviesIntoCollections").checked=t.EnableGroupingIntoCollections,e.querySelector(".chkDisplaySpecialsWithinSeasons").checked=t.DisplaySpecialsWithinSeasons,e.querySelector(".chkExternalContentInSuggestions").checked=t.EnableExternalContentInSuggestions,e.querySelector("#chkSaveMetadataHidden").checked=t.SaveMetadataHidden})),ApiClient.getNamedConfiguration("metadata").then((function(t){e.querySelector("#selectDateAdded").selectedIndex=t.UseFileCreationTimeForDateAdded?1:0})),ApiClient.getSystemInfo().then((function(t){"Windows"===t.OperatingSystem?e.querySelector(".fldSaveMetadataHidden").classList.remove("hide"):e.querySelector(".fldSaveMetadataHidden").classList.add("hide")}))}))}}}]);