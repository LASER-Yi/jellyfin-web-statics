"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9346],{39346:function(t,e,l){l.r(e),l(23938),l(52077),l(911),l(32081),l(67752),l(61414);var s=l(94994),r=Object.create(HTMLDivElement.prototype);function n(t){var e="",l="left"===t?"chevron_left":"chevron_right",r="left"===t?s.ZP.translate("Previous"):s.ZP.translate("Next");return e+='<button type="button" is="paper-icon-button-light" data-ripple="false" data-direction="'.concat(t,'" title="').concat(r,'" class="emby-scrollbuttons-button">'),(e+='<span class="material-icons '+l+'" aria-hidden="true"></span>')+"</button>"}function i(t){return t.getScrollPosition?t.getScrollPosition():0}function o(){var t,e=this.scroller;!function(t,e,l,r){var n=l;s.ZP.getIsElementRTL(t)&&(n*=-1),r<=e+20?(t.scrollButtonsLeft.classList.add("hide"),t.scrollButtonsRight.classList.add("hide")):(t.scrollButtonsLeft.classList.remove("hide"),t.scrollButtonsRight.classList.remove("hide")),t.scrollButtonsLeft.disabled=!(n>0);var i=n+e;t.scrollButtonsRight.disabled=r>0&&i>=r}(this,c(e),i(e),(t=e).getScrollSize?t.getScrollSize():0)}function a(t,e){var l=t.getPropertyValue(e);return l&&(l=l.replace("px",""))?(l=parseInt(l),isNaN(l)?0:l):0}function c(t){var e=t.offsetWidth,l=window.getComputedStyle(t,null),s=a(l,"padding-left");s&&(e-=s);var r=a(l,"padding-right");r&&(e-=r);var n=t.getScrollSlider();return(s=a(l=window.getComputedStyle(n,null),"padding-left"))&&(e-=s),(r=a(l,"padding-right"))&&(e-=r),e}function d(){var t,e=this.parentNode.nextSibling,l=this.getAttribute("data-direction"),r=c(e),n=i(e);t="left"===l?Math.max(0,n-r):n+r,s.ZP.getIsRTL()&&"left"===l?t=n+r:s.ZP.getIsRTL()&&(t=Math.min(0,n-r)),e.scrollToPosition(t,!1)}r.createdCallback=function(){},r.attachedCallback=function(){var t=this.nextSibling;this.scroller=t,this.parentNode.classList.add("emby-scroller-container"),this.innerHTML=n("left")+n("right");var e=this.querySelectorAll(".emby-scrollbuttons-button");e[0].addEventListener("click",d),e[1].addEventListener("click",d),this.scrollButtonsLeft=e[0],this.scrollButtonsRight=e[1];var l=o.bind(this);this.scrollHandler=l,t.addScrollEventListener(l,{capture:!1,passive:!0})},r.detachedCallback=function(){var t=this.scroller;this.scroller=null;var e=this.scrollHandler;t&&e&&t.removeScrollEventListener(e,{capture:!1,passive:!0}),this.scrollHandler=null,this.scrollButtonsLeft=null,this.scrollButtonsRight=null},document.registerElement("emby-scrollbuttons",{prototype:r,extends:"div"})}}]);