(self.webpackChunk=self.webpackChunk||[]).push([[41056,72232,69051,8705,24125,46664,7671,24749],{72232:function(e,t,a){"use strict";a(99785),a(5769),a(63238),a(14078),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var n;if("formatting"===(null!=a&&a.context?String(a.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,i=null!=a&&a.width?String(a.width):r;n=e.formattingValues[i]||e.formattingValues[r]}else{var d=e.defaultWidth,o=null!=a&&a.width?String(a.width):e.defaultWidth;n=e.values[o]||e.values[d]}return n[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},41056:function(e,t,a){"use strict";a(99785),a(95163);var n=a(73203).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(72232)),i={ordinalNumber:function(e,t){var a=Number(e),n=a%100;if(n>20||n<10)switch(n%10){case 1:case 2:return a+":a"}return a+":e"},era:(0,r.default)({values:{narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["före Kristus","efter Kristus"]},defaultWidth:"wide"}),quarter:(0,r.default)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1:a kvartalet","2:a kvartalet","3:e kvartalet","4:e kvartalet"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,r.default)({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mars","apr.","maj","juni","juli","aug.","sep.","okt.","nov.","dec."],wide:["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december"]},defaultWidth:"wide"}),day:(0,r.default)({values:{narrow:["S","M","T","O","T","F","L"],short:["sö","må","ti","on","to","fr","lö"],abbreviated:["sön","mån","tis","ons","tors","fre","lör"],wide:["söndag","måndag","tisdag","onsdag","torsdag","fredag","lördag"]},defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:{narrow:{am:"fm",pm:"em",midnight:"midnatt",noon:"middag",morning:"morg.",afternoon:"efterm.",evening:"kväll",night:"natt"},abbreviated:{am:"f.m.",pm:"e.m.",midnight:"midnatt",noon:"middag",morning:"morgon",afternoon:"efterm.",evening:"kväll",night:"natt"},wide:{am:"förmiddag",pm:"eftermiddag",midnight:"midnatt",noon:"middag",morning:"morgon",afternoon:"eftermiddag",evening:"kväll",night:"natt"}},defaultWidth:"wide",formattingValues:{narrow:{am:"fm",pm:"em",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på efterm.",evening:"på kvällen",night:"på natten"},abbreviated:{am:"fm",pm:"em",midnight:"midnatt",noon:"middag",morning:"på morg.",afternoon:"på efterm.",evening:"på kvällen",night:"på natten"},wide:{am:"fm",pm:"em",midnight:"midnatt",noon:"middag",morning:"på morgonen",afternoon:"på eftermiddagen",evening:"på kvällen",night:"på natten"}},defaultFormattingWidth:"wide"})};t.default=i,e.exports=t.default},73203:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);