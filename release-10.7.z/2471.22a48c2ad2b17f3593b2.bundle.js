"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2471],{82471:function(e,n,t){t.r(n),t(27471);var a=t(38102),o=!1,i=!1,c=!1,d=!1,r=!1,u=!1,s=!1,f=!1,m=!1,p=!1,g=[12,13,14,15,0,1],v=function(){return m},w=function(e){U(m,e,"GamepadA",0,!1,!0),m=e},l=function(){return p},k=function(e){U(p,e,"GamepadB",27),p=e},h=function(e){U(o,e,"GamepadLeftThumbStickUp",38,!0),o=e},b=function(e){U(i,e,"GamepadLeftThumbStickDown",40,!0),i=e},G=function(e){U(c,e,"GamepadLeftThumbStickLeft",37,!0),c=e},E=function(e){U(d,e,"GamepadLeftThumbStickRight",39,!0),d=e},L=function(){return r},D=function(e){U(r,e,"GamepadDPadUp",38,!0),r=e},T=function(){return u},y=function(e){U(u,e,"GamepadDPadDown",40,!0),u=e},S=function(){return s},A=function(e){U(s,e,"GamepadDPadLeft",37,!0),s=e},C=function(){return f},F=function(e){U(f,e,"GamepadDPadRight",39,!0),f=e},P={};function x(e){P[e]=(new Date).getTime()}var I,M=-1!==navigator.userAgent.toLowerCase().indexOf("electron");function O(){return!(!M&&document.hidden)&&"Minimized"!==a.M.getWindowState()}function R(e,n,t){if(O()){var a=document.createEvent("Event");a.initEvent(e,!0,!0),a.key=n,a.keyCode=t,(document.activeElement||document.body).dispatchEvent(a)}}function U(e,n,t,a,o,i){if(!0===n){var c=!1;!1===e?(c=!0,x(t)):o&&(c=function(e){var n=P[e]||0;return(new Date).getTime()-n>=200}(t)),c&&a&&R("keydown",t,a)}else!1===n&&!0===e&&(x(t),a&&R("keyup",t,a),i&&(d=document.activeElement||window,O()&&d.click()));var d}function q(){for(var e=navigator.getGamepads(),n=0,t=e.length;n<t;n++){var a=e[n];if(a){var o=a.axes,i=o[0],c=o[1];i>.75?E(!0):i<-.75?G(!0):c<-.75?h(!0):c>.75?b(!0):(G(!1),E(!1),h(!1),b(!1));for(var d=a.buttons,r=0,u=d.length;r<u;r++)if(-1!==g.indexOf(r))if(d[r].pressed)switch(r){case 12:D(!0);break;case 13:y(!0);break;case 14:A(!0);break;case 15:F(!0);break;case 0:w(!0);break;case 1:k(!0)}else switch(r){case 12:L()&&D(!1);break;case 13:T()&&y(!1);break;case 14:S()&&A(!1);break;case 15:C()&&F(!1);break;case 0:v()&&w(!1);break;case 1:l()&&k(!1)}}}I=requestAnimationFrame(q)}function z(){for(var e=navigator.getGamepads(),n=0,t=e.length;n<t;n++){var a=e[n];if(a&&a.connected)return!0}return!1}function B(e){z()&&document.hasFocus()&&(console.log("Gamepad connected! Starting input loop"),I||q())}function N(e){z()&&document.hasFocus()?console.log("Gamepad disconnected! There are gamepads still connected."):(console.log("Gamepad disconnected! No other gamepads are connected, stopping input loop"),cancelAnimationFrame(I),I=void 0)}window.addEventListener("gamepaddisconnected",N),window.addEventListener("gamepadconnected",B),window.addEventListener("blur",N),window.addEventListener("focus",B),B(),window.navigator&&"string"==typeof window.navigator.gamepadInputEmulation&&(window.navigator.gamepadInputEmulation="gamepad")}}]);