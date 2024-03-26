"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[42855],{42855:function(e,t,r){r(86225),r(33096),r(63241),r(48914),r(84159),r(59139),r(86028),r(81414),r(47134),r(96626),r(88646),r(54134),r(91270),r(14011),r(56187),r(38690),r(89228),r(13227),r(11431);var n=r(57366),a=r(72365),i=r(30325),s=r(84280),l=(r(67752),r(62033),r(94994)),o=r(1934);function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var c=Object.create(HTMLInputElement.prototype),u=!1;if(Object.getOwnPropertyDescriptor&&Object.defineProperty){var h=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value");null!=h&&h.configurable&&(u=!0)}function m(e,t){return t>0||(t=parseFloat(e.step))>0?t:1}function v(e,t){var r=e.sliderBubbleTrack.getBoundingClientRect(),n=(t-r.left)/r.width;l.ZP.getIsElementRTL(e)&&(n=(r.right-t)/r.width);var a=e.max-e.min;if("any"!==e.step&&0!==a){var i=m(e)/a;n=Math.round(n/i)*i}return Math.min(Math.max(n,0),1)}function b(e,t){var r=(e.max-e.min)*t,n=null;if("any"!==e.step){var a=m(e);n=(0,o.SN)(a),r=Math.round(r/a)*a}var i=parseFloat(e.min);return r+=i,null!=n&&(n=Math.max(n,(0,o.SN)(i)),r=parseFloat(r.toFixed(n))),Math.min(Math.max(r,e.min),e.max)}function g(e){if(!e||!this.keyboardDragging&&!this.touched){var t=this,r=t.value;cancelAnimationFrame(t.updateValuesFrame),t.updateValuesFrame=requestAnimationFrame((function(){var e=t.backgroundLower;if(e){var n=(r-t.min)/(t.max-t.min);n*=100,e.style.width=n+"%"}t.markerContainerElement&&(t.triedAddingMarkers||function(e){e.markerInfo=[],e.getMarkerInfo&&(e.markerInfo=e.getMarkerInfo()),e.markerInfo.forEach((function(t){var r,n;e.markerContainerElement.insertAdjacentHTML("beforeend",(n="","chapterMarker"===(r=t).className&&(n=r.className,"string"==typeof r.name&&r.name.length&&(n="".concat(r.className," marker-").concat(r.name.substring(0,100).toLowerCase().replace(" ","-")))),'<span class="material-icons sliderMarker '.concat(n,'" aria-hidden="true"></span>')))})),e.markerElements=e.markerContainerElement.querySelectorAll(".sliderMarker"),e.triedAddingMarkers=!0}(t),function(e,t){var r,n;if(null!==(r=e.markerInfo)&&void 0!==r&&r.length&&null!==(n=e.markerElements)&&void 0!==n&&n.length)for(var a=0,i=e.markerElements.length;a<i;a++)e.markerInfo.length>a&&p(e,b(e,e.markerInfo[a].progress),e.markerElements[a],t)}(t,r))}))}}function f(e,t,r,n){requestAnimationFrame((function(){var a,i,s=e.sliderBubbleTrack.getBoundingClientRect(),o=n.getBoundingClientRect(),d=s.width*t/100;l.ZP.getIsElementRTL(e)&&(d=s.width-d),d=Math.min(Math.max(d,o.width/2),s.width-o.width/2),n.style.left=d+"px",null!==(a=e.updateBubbleHtml)&&void 0!==a&&a.call(e,n,r)||(i=e.getBubbleHtml?e.getBubbleHtml(t,r):'<h1 class="sliderBubbleText">'+(i=e.getBubbleText?e.getBubbleText(t,r):r.toLocaleString())+"</h1>",n.innerHTML=i)}))}function p(e,t,r,n){requestAnimationFrame((function(){var a=e.sliderBubbleTrack.getBoundingClientRect(),i=r.getBoundingClientRect();if(a.width&&i.width){var s=a.width*t/100-i.width/2;s=Math.min(Math.max(s,-i.width/2),a.width-i.width/2),r.style.left=s+"px",n>=t?(r.classList.remove("unwatched"),r.classList.add("watched")):(r.classList.add("unwatched"),r.classList.remove("watched"))}}))}c.attachedCallback=function(){if("true"!==this.getAttribute("data-embyslider")){this.setAttribute("data-embyslider","true"),this.classList.add("mdl-slider"),this.classList.add("mdl-js-slider"),n.Z.edge&&this.classList.add("slider-browser-edge"),i.Z.mobile||this.classList.add("mdl-slider-hoverthumb"),i.Z.tv&&this.classList.add("show-focus");var e=a.ZP.parentWithClass(this,"sliderContainer-settings");if(e&&this.getAttribute("label")){var t=this.ownerDocument.createElement("label");t.innerText=this.getAttribute("label"),t.classList.add("sliderLabel"),t.htmlFor=this.id,e.insertBefore(t,e.firstChild)}var r=this.parentNode;r.classList.add("mdl-slider-container"),r.insertAdjacentHTML("beforeend",'<div class="mdl-slider-background-flex-container"><div class="mdl-slider-background-flex"><div class="mdl-slider-background-flex-inner"><div class="mdl-slider-background-upper"></div><div class="mdl-slider-background-lower"></div></div></div></div><div class="sliderBubbleTrack"><div class="sliderBubble hide"></div></div>'),this.sliderBubbleTrack=r.querySelector(".sliderBubbleTrack"),this.backgroundLower=r.querySelector(".mdl-slider-background-lower"),this.backgroundUpper=r.querySelector(".mdl-slider-background-upper");var s=r.querySelector(".sliderBubble"),l=s.classList.contains("hide");this.markerContainerElement=r.querySelector(".sliderMarkerContainer"),a.ZP.addEventListener(this,"input",(function(){var e,t,r,n;this.dragging=!0,"true"!==this.dataset.sliderKeepProgress&&g.call(this),f(this,100*(e=this,t=this.value,n=0!==(r=e.max-e.min)?(t-e.min)/r:0,Math.min(Math.max(n,0),1)),parseFloat(this.value),s),l&&(s.classList.remove("hide"),l=!1)}),{passive:!0}),a.ZP.addEventListener(this,"change",(function(){this.dragging=!1,"true"===this.dataset.sliderKeepProgress&&g.call(this),s.classList.add("hide"),l=!0}),{passive:!0}),a.ZP.addEventListener(this,window.PointerEvent?"pointermove":"mousemove",(function(e){if(!this.dragging){var t=v(this,e.clientX);f(this,100*t,b(this,t),s),l&&(s.classList.remove("hide"),l=!1)}}),{passive:!0}),a.ZP.addEventListener(this,window.PointerEvent?"pointerleave":"mouseleave",(function(){s.classList.add("hide"),l=!0}),{passive:!0}),n.Z.iOS&&(a.ZP.addEventListener(this,"touchstart",(function(e){if(1===e.targetTouches.length){this.touched=!0;var t=v(this,e.targetTouches[0].clientX);this.value=b(this,t),this.dispatchEvent(new Event("input",{bubbles:!0,cancelable:!1})),e.preventDefault()}}),{capture:!0}),a.ZP.addEventListener(this,"touchmove",(function(e){if(this.touched&&1===e.targetTouches.length){var t=v(this,e.targetTouches[0].clientX);this.value=b(this,t),this.dispatchEvent(new Event("input",{bubbles:!0,cancelable:!1}))}}),{passive:!0}),a.ZP.addEventListener(this,"touchend",(function(){var e=this;setTimeout((function(){e.touched=!1,e.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!1}))}),0)}),{passive:!0})),u?this.addEventListener("valueset",g.bind(this,!0)):((d=(o=this).interval)&&clearInterval(d),o.interval=setInterval(g.bind(o,!0),100)),g.call(this)}var o,d};var k,w=1e3;function y(e){clearTimeout(k),k=void 0,e.keyboardDragging=!1;var t=new Event("change",{bubbles:!0,cancelable:!1});e.dispatchEvent(t)}function L(e,t){!function(e){e.keyboardDragging=!0,clearTimeout(k),k=setTimeout((function(){y(e)}),w)}(e),e.value=Math.max(e.min,Math.min(e.max,parseFloat(e.value)+t));var r=new Event("input",{bubbles:!0,cancelable:!1});e.dispatchEvent(r)}function E(e){switch(s.ZP.getKeyName(e)){case"ArrowLeft":case"Left":L(this,-m(this,this.keyboardStepDown)),e.preventDefault(),e.stopPropagation();break;case"ArrowRight":case"Right":L(this,m(this,this.keyboardStepUp)),e.preventDefault(),e.stopPropagation();break;case"Enter":this.keyboardDragging&&(y(this),e.preventDefault(),e.stopPropagation())}}function M(e,t,r){var n=e.style;l.ZP.getIsRTL()?n.right=Math.max(t,0)+"%":n.left=Math.max(t,0)+"%";var a=r-t;n.width=Math.max(Math.min(a,100),0)+"%"}c.enableKeyboardDragging=function(){this.keyboardDraggingEnabled||(this.addEventListener("keydown",E),this.keyboardDraggingEnabled=!0)},c.setKeyboardSteps=function(e,t){this.keyboardStepDown=e||t||1,this.keyboardStepUp=t||e||1},c.setBufferedRanges=function(e,t,r){var n=this.backgroundUpper;if(n){null!=t&&(e=function(e,t){return t?e.map((function(e){return{start:e.start/t*100,end:e.end/t*100}})):[]}(e,t),r=r/t*100);var a,i=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return s=e.done,e},e:function(e){l=!0,i=e},f:function(){try{s||null==r.return||r.return()}finally{if(l)throw i}}}}(e);try{for(i.s();!(a=i.n()).done;){var s=a.value;if(!(null!=r&&r>=s.end))return void M(n,s.start,s.end)}}catch(e){i.e(e)}finally{i.f()}M(n,0,0)}},c.setIsClear=function(e){var t=this.backgroundLower;t&&(e?t.classList.add("mdl-slider-background-lower-clear"):t.classList.remove("mdl-slider-background-lower-clear"))},c.detachedCallback=function(){var e=this.interval;e&&clearInterval(e),this.interval=null,this.backgroundUpper=null,this.backgroundLower=null},document.registerElement("emby-slider",{prototype:c,extends:"input"})}}]);