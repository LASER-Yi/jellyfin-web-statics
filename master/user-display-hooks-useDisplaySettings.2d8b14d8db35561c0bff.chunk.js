"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[19630],{84119:function(e,n,a){a.r(n),a.d(n,{useDisplaySettings:function(){return b}});var t=a(27378),r=a(92811),s=a(30325),i=a(48215),o=a(45220),l=a(60934),u=function(e,n,a,t){return new(a||(a=Promise))((function(r,s){function i(e){try{l(t.next(e))}catch(e){s(e)}}function o(e){try{l(t.throw(e))}catch(e){s(e)}}function l(e){var n;e.done?r(e.value):(n=e.value,n instanceof a?n:new a((function(e){e(n)}))).then(i,o)}l((t=t.apply(e,n||[])).next())}))},c=function(e,n){var a,t,r,s,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return s={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function o(o){return function(l){return function(o){if(a)throw new TypeError("Generator is already executing.");for(;s&&(s=0,o[0]&&(i=0)),i;)try{if(a=1,t&&(r=2&o[0]?t.return:o[0]?t.throw||((r=t.return)&&r.call(t),0):t.next)&&!(r=r.call(t,o[1])).done)return r;switch(t=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,t=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!((r=(r=i.trys).length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){i.label=o[1];break}if(6===o[0]&&i.label<r[1]){i.label=r[1],r=o;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(o);break}r[2]&&i.ops.pop(),i.trys.pop();continue}o=n.call(e,i)}catch(e){o=[6,e],t=0}finally{a=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},d=function(e,n){var a="function"==typeof Symbol&&e[Symbol.iterator];if(!a)return e;var t,r,s=a.call(e),i=[];try{for(;(void 0===n||n-- >0)&&!(t=s.next()).done;)i.push(t.value)}catch(e){r={error:e}}finally{try{t&&!t.done&&(a=s.return)&&a.call(s)}finally{if(r)throw r.error}}return i};function b(e){var n=this,a=e.userId,r=d((0,t.useState)(!0),2),s=r[0],o=r[1],l=d((0,t.useState)(),2),b=l[0],f=l[1],g=d((0,t.useState)(),2),y=g[0],m=g[1],v=(0,i.h_)(),S=v.__legacyApiClient__,I=v.user;return(0,t.useEffect)((function(){if(a&&I&&S)return o(!0),u(n,void 0,void 0,(function(){var e;return c(this,(function(n){switch(n.label){case 0:return[4,p({api:S,currentUser:I,userId:a})];case 1:return e=n.sent(),m(e.displaySettings),f(e.userSettings),o(!1),[2]}}))})),function(){o(!1)}}),[S,I,a]),{displaySettings:y,loading:s,saveDisplaySettings:(0,t.useCallback)((function(e){return u(n,void 0,void 0,(function(){return c(this,(function(n){return a&&b&&S?[2,h({api:S,newDisplaySettings:e,userSettings:b,userId:a})]:[2]}))}))}),[S,b,a])}}function p(e){var n,a,t=e.currentUser,r=e.userId,i=e.api;return u(this,void 0,void 0,(function(){var e,o,u;return c(this,(function(c){switch(c.label){case 0:return e=r&&r!==(null==t?void 0:t.Id)?new l.UserSettings:l.currentSettings,r&&r!==(null==t?void 0:t.Id)?[3,1]:(u=t,[3,3]);case 1:return[4,i.getUser(r)];case 2:u=c.sent(),c.label=3;case 3:return o=u,[4,e.setUserInfo(r,i)];case 4:return c.sent(),[2,{displaySettings:{customCss:e.customCss(),dashboardTheme:e.dashboardTheme()||"auto",dateTimeLocale:e.dateTimeLocale()||"auto",disableCustomCss:Boolean(e.disableCustomCss()),displayMissingEpisodes:null!==(a=null===(n=null==o?void 0:o.Configuration)||void 0===n?void 0:n.DisplayMissingEpisodes)&&void 0!==a&&a,enableBlurHash:Boolean(e.enableBlurhash()),enableFasterAnimation:Boolean(e.enableFastFadein()),enableItemDetailsBanner:Boolean(e.detailsBanner()),enableLibraryBackdrops:Boolean(e.enableBackdrops()),enableLibraryThemeSongs:Boolean(e.enableThemeSongs()),enableLibraryThemeVideos:Boolean(e.enableThemeVideos()),enableRewatchingInNextUp:Boolean(e.enableRewatchingInNextUp()),episodeImagesInNextUp:Boolean(e.useEpisodeImagesInNextUpAndResume()),language:e.language()||"auto",layout:s.Z.getSavedLayout()||"auto",libraryPageSize:e.libraryPageSize(),maxDaysForNextUp:e.maxDaysForNextUp(),screensaver:e.screensaver()||"none",screensaverInterval:e.backdropScreensaverInterval(),theme:e.theme()},userSettings:e}]}}))}))}function h(e){var n=e.api,a=e.newDisplaySettings,t=e.userSettings,i=e.userId;return u(this,void 0,void 0,(function(){var e,l;return c(this,(function(u){switch(u.label){case 0:return[4,n.getUser(i)];case 1:return e=u.sent(),r.M.supports("displaylanguage")&&t.language(f(a.language)),t.customCss(f(a.customCss)),t.dashboardTheme(f(a.dashboardTheme)),t.dateTimeLocale(f(a.dateTimeLocale)),t.disableCustomCss(a.disableCustomCss),t.enableBlurhash(a.enableBlurHash),t.enableFastFadein(a.enableFasterAnimation),t.detailsBanner(a.enableItemDetailsBanner),t.enableBackdrops(a.enableLibraryBackdrops),t.enableThemeSongs(a.enableLibraryThemeSongs),t.enableThemeVideos(a.enableLibraryThemeVideos),t.enableRewatchingInNextUp(a.enableRewatchingInNextUp),t.useEpisodeImagesInNextUpAndResume(a.episodeImagesInNextUp),t.libraryPageSize(a.libraryPageSize),t.maxDaysForNextUp(a.maxDaysForNextUp),t.screensaver(f(a.screensaver)),t.backdropScreensaverInterval(a.screensaverInterval),t.theme(a.theme),s.Z.setLayout(f(a.layout)),l=[o.Z.setTheme(t.theme())],e.Id&&e.Configuration&&(e.Configuration.DisplayMissingEpisodes=a.displayMissingEpisodes,l.push(n.updateUserConfiguration(e.Id,e.Configuration))),[4,Promise.all(l)];case 2:return u.sent(),[2]}}))}))}function f(e){return/^(auto|none)$/.test(e)?"":e}}}]);