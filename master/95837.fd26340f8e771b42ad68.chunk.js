"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[95837,72232,22907,94891,94250,73710,23945,95671],{72232:function(e,n,t){t(33096),t(13227),t(81414),t(11431),Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return function(n,t){var a;if("formatting"===(null!=t&&t.context?String(t.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,r=null!=t&&t.width?String(t.width):i;a=e.formattingValues[r]||e.formattingValues[i]}else{var d=e.defaultWidth,o=null!=t&&t.width?String(t.width):e.defaultWidth;a=e.values[o]||e.values[d]}return a[e.argumentCallback?e.argumentCallback(n):n]}},e.exports=n.default},95837:function(e,n,t){t(33096);var a=t(73203).default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(t(72232)),r={ordinalNumber:function(e){return String(e)},era:(0,i.default)({values:{narrow:["ق","ب"],abbreviated:["ق.م.","ب.م."],wide:["قبل الميلاد","بعد الميلاد"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["ر1","ر2","ر3","ر4"],wide:["الربع الأول","الربع الثاني","الربع الثالث","الربع الرابع"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,i.default)({values:{narrow:["ي","ف","م","أ","م","ي","ي","أ","س","أ","ن","د"],abbreviated:["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],wide:["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["ح","ن","ث","ر","خ","ج","س"],short:["أحد","اثنين","ثلاثاء","أربعاء","خميس","جمعة","سبت"],abbreviated:["أحد","اثنين","ثلاثاء","أربعاء","خميس","جمعة","سبت"],wide:["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"ص",pm:"م",morning:"الصباح",noon:"الظهر",afternoon:"بعد الظهر",evening:"المساء",night:"الليل",midnight:"منتصف الليل"},abbreviated:{am:"ص",pm:"م",morning:"الصباح",noon:"الظهر",afternoon:"بعد الظهر",evening:"المساء",night:"الليل",midnight:"منتصف الليل"},wide:{am:"ص",pm:"م",morning:"الصباح",noon:"الظهر",afternoon:"بعد الظهر",evening:"المساء",night:"الليل",midnight:"منتصف الليل"}},defaultWidth:"wide",formattingValues:{narrow:{am:"ص",pm:"م",morning:"في الصباح",noon:"الظهر",afternoon:"بعد الظهر",evening:"في المساء",night:"في الليل",midnight:"منتصف الليل"},abbreviated:{am:"ص",pm:"م",morning:"في الصباح",noon:"الظهر",afternoon:"بعد الظهر",evening:"في المساء",night:"في الليل",midnight:"منتصف الليل"},wide:{am:"ص",pm:"م",morning:"في الصباح",noon:"الظهر",afternoon:"بعد الظهر",evening:"في المساء",night:"في الليل",midnight:"منتصف الليل"}},defaultFormattingWidth:"wide"})};n.default=r,e.exports=n.default}}]);