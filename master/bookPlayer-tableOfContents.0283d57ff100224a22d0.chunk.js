"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[414],{65055:function(e,t,o){o.r(t),o.d(t,{default:function(){return l}}),o(63238),o(55849),o(90938),o(72410),o(23938),o(19068),o(87211),o(25901),o(92189),o(95163),o(99785),o(91047),o(5769),o(17460),o(14078);var n=o(93355);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function r(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,r=function(e,t){if("object"!==i(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,"string");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===i(r)?r:String(r)),n)}var r}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.bookPlayer=t,this.rendition=t.rendition,this.onDialogClosed=this.onDialogClosed.bind(this),this.createMediaElement()}var t,o;return t=e,(o=[{key:"destroy",value:function(){var e=this.elem;e&&(this.unbindEvents(),n.default.close(e)),this.bookPlayer.tocElement=null}},{key:"bindEvents",value:function(){var e=this.elem;e.addEventListener("close",this.onDialogClosed,{once:!0}),e.querySelector(".btnBookplayerTocClose").addEventListener("click",this.onDialogClosed,{once:!0})}},{key:"unbindEvents",value:function(){var e=this.elem;e.removeEventListener("close",this.onDialogClosed),e.querySelector(".btnBookplayerTocClose").removeEventListener("click",this.onDialogClosed)}},{key:"onDialogClosed",value:function(){this.destroy()}},{key:"replaceLinks",value:function(e,t){e.querySelectorAll("a[href]").forEach((function(e){var o=e.getAttribute("href");e.onclick=function(){return t(o),!1}}))}},{key:"createMediaElement",value:function(){var e=this,t=this.rendition,o=n.default.createDialog({size:"small",autoFocus:!1,removeOnClose:!0});o.id="dialogToc";var i='<div class="topRightActionButtons">';i+='<button is="paper-icon-button-light" class="autoSize bookplayerButton btnBookplayerTocClose hide-mouse-idle-tv" tabindex="-1"><span class="material-icons bookplayerButtonIcon close" aria-hidden="true"></span></button>',i+="</div>",i+='<ul class="toc">',t.book.navigation.forEach((function(e){i+="<li>";var o=e.href.startsWith("../")?e.href.slice(3):e.href;i+='<a href="'.concat(t.book.path.directory+o,'">').concat(e.label,"</a>"),i+="</li>"})),i+="</ul>",o.innerHTML=i,this.replaceLinks(o,(function(o){var n=t.book.path.relative(o);t.display(n),e.destroy()})),this.elem=o,this.bindEvents(),n.default.open(o)}}])&&r(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}()}}]);