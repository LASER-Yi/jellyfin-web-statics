"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[36662],{36662:function(t,e,a){a.r(e);var i=a(44038),l=a(94994),s=a(74131),d=a(38228),n=a(18613);function r(){var t=this,e=t.getAttribute("data-id"),a=t.getAttribute("data-serverid"),i=n.Z.getApiClient(a);t.classList.contains("playstatebutton-played")?(i.markUnplayed(i.getCurrentUserId(),e,new Date),u(t,!1)):(i.markPlayed(i.getCurrentUserId(),e,new Date),u(t,!0))}function c(t,e,a){a.ItemId===this.getAttribute("data-id")&&u(this,a.Played)}function u(t,e,a){var i=t.iconElement;i||(t.iconElement=t.querySelector(".material-icons"),i=t.iconElement),e?(t.classList.add("playstatebutton-played"),i&&(i.classList.add("playstatebutton-icon-played"),i.classList.remove("playstatebutton-icon-unplayed"))):(t.classList.remove("playstatebutton-played"),i&&(i.classList.remove("playstatebutton-icon-played"),i.classList.add("playstatebutton-icon-unplayed"))),!1!==a&&t.setAttribute("data-played",e),function(t,e,a){t.title="AudioBook"!==e&&"AudioPodcast"!==e?a?l.ZP.translate("Watched"):l.ZP.translate("MarkPlayed"):a?l.ZP.translate("Played"):l.ZP.translate("MarkPlayed");var i=t.querySelector(".button-text");i&&(i.innerText=t.title)}(t,t.getAttribute("data-type"),e)}function o(t){var e,a,l;t.removeEventListener("click",r),(l=(e=t)[a="UserDataChanged"])&&(s.Z.off(i.default,a,l),e[a]=null)}function b(t){var e,a,l;o(t),t.addEventListener("click",r),e=t,a="UserDataChanged",l=c.bind(e),s.Z.on(i.default,a,l),e[a]=l}var h=Object.create(d.Z);h.createdCallback=function(){d.Z.createdCallback&&d.Z.createdCallback.call(this)},h.attachedCallback=function(){d.Z.attachedCallback&&d.Z.attachedCallback.call(this);var t=this.getAttribute("data-id"),e=this.getAttribute("data-serverid");t&&e&&(u(this,"true"===this.getAttribute("data-played"),!1),b(this))},h.detachedCallback=function(){d.Z.detachedCallback&&d.Z.detachedCallback.call(this),o(this),this.iconElement=null},h.setItem=function(t){var e;t?(this.setAttribute("data-id",t.Id),this.setAttribute("data-serverid",t.ServerId),this.setAttribute("data-type",t.Type),u(this,null===(e=t.UserData)||void 0===e?void 0:e.Played),b(this)):(this.removeAttribute("data-id"),this.removeAttribute("data-serverid"),this.removeAttribute("data-type"),this.removeAttribute("data-played"),o(this))},document.registerElement("emby-playstatebutton",{prototype:h,extends:"button"})}}]);