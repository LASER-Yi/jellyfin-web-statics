"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1581],{50418:function(e,t,n){function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,l=function(e,t){if("object"!==u(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===u(l)?l:String(l)),r)}var l}n.r(t),n(19068),n(87211),n(25901),n(92189),n(63238),n(95163),n(99785),n(91047),n(5769),n(17460),n(14078);var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.queueCore=t.getQueueCore()}var t,n;return t=e,(n=[{key:"getPlaylist",value:function(){return this.queueCore.getPlaylist()}},{key:"setPlaylist",value:function(){}},{key:"queue",value:function(){}},{key:"shufflePlaylist",value:function(){}},{key:"sortShuffledPlaylist",value:function(){}},{key:"clearPlaylist",value:function(){}},{key:"queueNext",value:function(){}},{key:"getCurrentPlaylistIndex",value:function(){return this.queueCore.getCurrentPlaylistIndex()}},{key:"getCurrentItem",value:function(){var e=this.getCurrentPlaylistIndex();return e>=0?this.getPlaylist()[e]:null}},{key:"getCurrentPlaylistItemId",value:function(){return this.queueCore.getCurrentPlaylistItemId()}},{key:"setPlaylistState",value:function(){}},{key:"setPlaylistIndex",value:function(){}},{key:"removeFromPlaylist",value:function(){}},{key:"movePlaylistItem",value:function(){return{result:"noop"}}},{key:"reset",value:function(){}},{key:"setRepeatMode",value:function(){}},{key:"getRepeatMode",value:function(){return this.queueCore.getRepeatMode()}},{key:"setShuffleMode",value:function(){}},{key:"toggleShuffleMode",value:function(){}},{key:"getShuffleMode",value:function(){return this.queueCore.getShuffleMode()}},{key:"getNextItemInfo",value:function(){var e,t=this.getPlaylist();switch(this.getRepeatMode()){case"RepeatOne":e=this.getCurrentPlaylistIndex();break;case"RepeatAll":(e=this.getCurrentPlaylistIndex()+1)>=t.length&&(e=0);break;default:e=this.getCurrentPlaylistIndex()+1}if(e<0||e>=t.length)return null;var n=t[e];return n?{item:n,index:e}:null}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.default=l}}]);