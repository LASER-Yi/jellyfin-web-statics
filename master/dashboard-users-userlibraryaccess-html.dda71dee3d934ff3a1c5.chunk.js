"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[39120],{34218:function(e,s,a){a.r(s),s.default='<div id="userLibraryAccessPage" data-role="page" class="page type-interior"> <div> <div class="content-primary"> <div class="verticalSection"> <div class="sectionTitleContainer flex align-items-center"> <h2 class="sectionTitle username"></h2> <a is="emby-linkbutton" rel="noopener noreferrer" class="raised button-alt headerHelpButton" target="_blank" href="https://jellyfin.org/docs/general/server/users/">${Help}</a> </div> </div> <div data-role="controlgroup" data-type="horizontal" class="localnav" data-mini="true"> <a is="emby-linkbutton" href="#" data-role="button" onclick=\'Dashboard.navigate("useredit.html",!0)\'>${Profile}</a> <a is="emby-linkbutton" href="#" data-role="button" onclick=\'Dashboard.navigate("userlibraryaccess.html",!0)\' class="ui-btn-active">${TabAccess}</a> <a is="emby-linkbutton" href="#" data-role="button" onclick=\'Dashboard.navigate("userparentalcontrol.html",!0)\'>${TabParentalControl}</a> <a is="emby-linkbutton" href="#" data-role="button" onclick=\'Dashboard.navigate("userpassword.html",!0)\'>${HeaderPassword}</a> </div> <form class="userLibraryAccessForm"> <div class="folderAccessContainer"> <h2>${HeaderLibraryAccess}</h2> <label class="checkboxContainer"> <input type="checkbox" is="emby-checkbox" id="chkEnableAllFolders"/> <span>${OptionEnableAccessToAllLibraries}</span> </label> <div class="folderAccessListContainer"> <div class="folderAccess"> </div> <div class="fieldDescription">${LibraryAccessHelp}</div> </div> </div> <div class="channelAccessContainer" style="display:none"> <h2>${HeaderChannelAccess}</h2> <label class="checkboxContainer"> <input type="checkbox" is="emby-checkbox" id="chkEnableAllChannels"/> <span>${OptionEnableAccessToAllChannels}</span> </label> <div class="channelAccessListContainer"> <div class="channelAccess"> </div> <div class="fieldDescription">${ChannelAccessHelp}</div> </div> </div> <br/> <div class="deviceAccessContainer hide"> <h2>${HeaderDeviceAccess}</h2> <label class="checkboxContainer"> <input type="checkbox" is="emby-checkbox" id="chkEnableAllDevices"/> <span>${OptionEnableAccessFromAllDevices}</span> </label> <div class="deviceAccessListContainer"> <div class="deviceAccess"> </div> <div class="fieldDescription">${DeviceAccessHelp}</div> </div> <br/> </div> <br/> <div> <button is="emby-button" type="submit" class="raised button-submit block"> <span>${Save}</span> </button> </div> </form> </div> </div> </div> '}}]);