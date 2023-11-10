"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[48498,72232,22907,94891,94250,73710,23945,95671],{72232:function(e,n,t){t(33096),t(13227),t(81414),t(11431),Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return function(n,t){var a;if("formatting"===(null!=t&&t.context?String(t.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,i=null!=t&&t.width?String(t.width):r;a=e.formattingValues[i]||e.formattingValues[r]}else{var o=e.defaultWidth,u=null!=t&&t.width?String(t.width):e.defaultWidth;a=e.values[u]||e.values[o]}return a[e.argumentCallback?e.argumentCallback(n):n]}},e.exports=n.default},48498:function(e,n,t){t(33096),t(11908);var a=t(73203).default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(72232)),i={ordinalNumber:function(e,n){var t=Number(e);switch(String(null==n?void 0:n.unit)){case"year":return"".concat(t,"年");case"quarter":return"第".concat(t,"四半期");case"month":return"".concat(t,"月");case"week":return"第".concat(t,"週");case"date":return"".concat(t,"日");case"hour":return"".concat(t,"時");case"minute":return"".concat(t,"分");case"second":return"".concat(t,"秒");default:return"".concat(t)}},era:(0,r.default)({values:{narrow:["BC","AC"],abbreviated:["紀元前","西暦"],wide:["紀元前","西暦"]},defaultWidth:"wide"}),quarter:(0,r.default)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["第1四半期","第2四半期","第3四半期","第4四半期"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,r.default)({values:{narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],abbreviated:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],wide:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]},defaultWidth:"wide"}),day:(0,r.default)({values:{narrow:["日","月","火","水","木","金","土"],short:["日","月","火","水","木","金","土"],abbreviated:["日","月","火","水","木","金","土"],wide:["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"]},defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:{narrow:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"},abbreviated:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"},wide:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"}},defaultWidth:"wide",formattingValues:{narrow:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"},abbreviated:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"},wide:{am:"午前",pm:"午後",midnight:"深夜",noon:"正午",morning:"朝",afternoon:"午後",evening:"夜",night:"深夜"}},defaultFormattingWidth:"wide"})};n.default=i,e.exports=n.default}}]);