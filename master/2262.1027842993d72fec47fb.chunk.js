"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2262],{2262:function(e,s,n){n.r(s);var i,t,o,a,c,d,r=n(47005),l=n(48957),u=n(72365),v=n(57366);function f(){this.classList.add("hide")}function m(){d&&(clearTimeout(d),d=null)}function h(){m();var e=t;e&&(c?(e.offsetWidth,requestAnimationFrame((function(){e.classList.add("iconOsd-hidden"),u.ZP.addEventListener(e,u.ZP.whichTransitionEvent(),f,{once:!0})}))):f.call(e))}function p(){var e,s,n;(e=t)||(c=v.Z.supportsCssAnimation(),(e=document.createElement("div")).classList.add("hide"),e.classList.add("iconOsd"),e.classList.add("iconOsd-hidden"),e.classList.add("volumeOsd"),e.innerHTML='<span class="material-icons iconOsdIcon volume_up" aria-hidden="true"></span><div class="iconOsdProgressOuter"><div class="iconOsdProgressInner"></div></div>',o=e.querySelector(".material-icons"),a=e.querySelector(".iconOsdProgressInner"),document.body.appendChild(e),t=e),s=this.isMuted(),n=this.getVolume(),o&&(o.classList.remove("volume_off","volume_up"),o.classList.add(s?"volume_off":"volume_up")),a&&(a.style.width=(n||0)+"%"),function(){m();var e=t;u.ZP.removeEventListener(e,u.ZP.whichTransitionEvent(),f,{once:!0}),e.classList.remove("hide"),e.offsetWidth,requestAnimationFrame((function(){e.classList.remove("iconOsd-hidden"),d=setTimeout(h,3e3)}))}()}function L(e){e!==i&&(function(){var e=i;e&&(r.Events.off(e,"volumechange",p),r.Events.off(e,"playbackstop",h),i=null)}(),i=e,e&&(h(),r.Events.on(e,"volumechange",p),r.Events.on(e,"playbackstop",h)))}r.Events.on(l.O,"playerchange",(function(){L(l.O.getCurrentPlayer())})),L(l.O.getCurrentPlayer())}}]);