"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3793],{63793:function(n,o,e){e.r(o);var i,r=e(53218),t=e(78695),c=e(47005);function a(){i=!0}function s(n){i=!1,console.error("error locking orientation: "+n)}c.Events.on(r.O,"playbackstart",(function(n,o,e){if(o.isLocalPlayer&&!o.isExternalPlayer&&r.O.isPlayingVideo(o)&&t.Z.mobile){var c=window.screen.lockOrientation||window.screen.mozLockOrientation||window.screen.msLockOrientation||window.screen.orientation&&window.screen.orientation.lock;if(c)try{var w=c("landscape");w.then?w.then(a,s):i=w}catch(n){s(n)}}})),c.Events.on(r.O,"playbackstop",(function(n,o){if(i&&!o.nextMediaType){var e=window.screen.unlockOrientation||window.screen.mozUnlockOrientation||window.screen.msUnlockOrientation||window.screen.orientation&&window.screen.orientation.unlock;if(e){try{e()}catch(n){console.error("error unlocking orientation: "+n)}i=!1}}}))}}]);