"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[47830],{47830:function(s,e,n){n.r(e);var i,t,r,a,o,c,d=n(48957),h=n(72365),l=n(57366),u=n(67561);function g(){this.classList.add("hide")}function f(){c&&(clearTimeout(c),c=null)}function m(){f();var s=t;s&&(o?(s.offsetWidth,requestAnimationFrame((function(){s.classList.add("iconOsd-hidden"),h.ZP.addEventListener(s,h.ZP.whichTransitionEvent(),g,{once:!0})}))):g.call(s))}function v(){var s,e,n,i;(s=t)||(o=l.Z.supportsCssAnimation(),(s=document.createElement("div")).classList.add("hide"),s.classList.add("iconOsd"),s.classList.add("iconOsd-hidden"),s.classList.add("brightnessOsd"),s.innerHTML='<span class="material-icons iconOsdIcon brightness_high" aria-hidden="true"></span><div class="iconOsdProgressOuter"><div class="iconOsdProgressInner brightnessOsdProgressInner"></div></div>',r=s.querySelector(".material-icons"),a=s.querySelector(".iconOsdProgressInner"),document.body.appendChild(s),t=s),e=d.O.getBrightness(this),r&&(i=e>=80?"brightness_high":e>=20?"brightness_medium":"brightness_low",(n=r).classList.remove("brightness_high","brightness_medium","brightness_low"),n.classList.add(i)),a&&(a.style.width=(e||0)+"%"),function(){f();var s=t;h.ZP.removeEventListener(s,h.ZP.whichTransitionEvent(),g,{once:!0}),s.classList.remove("hide"),s.offsetWidth,requestAnimationFrame((function(){s.classList.remove("iconOsd-hidden"),c=setTimeout(m,3e3)}))}()}function b(s){s!==i&&(function(){var s=i;s&&(u.Z.off(s,"brightnesschange",v),u.Z.off(s,"playbackstop",m),i=null)}(),i=s,s&&(m(),u.Z.on(s,"brightnesschange",v),u.Z.on(s,"playbackstop",m)))}u.Z.on(d.O,"playerchange",(function(){b(d.O.getCurrentPlayer())})),b(d.O.getCurrentPlayer())}}]);