"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[46286,72232,22907,94891,94250,73710,23945,95671],{72232:function(e,n,a){a(33096),a(13227),a(81414),a(11431),Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return function(n,a){var t;if("formatting"===(null!=a&&a.context?String(a.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,o=null!=a&&a.width?String(a.width):r;t=e.formattingValues[o]||e.formattingValues[r]}else{var u=e.defaultWidth,i=null!=a&&a.width?String(a.width):e.defaultWidth;t=e.values[i]||e.values[u]}return t[e.argumentCallback?e.argumentCallback(n):n]}},e.exports=n.default},46286:function(e,n,a){a(33096),a(11908);var t=a(73203).default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t(a(72232)),o={ordinalNumber:function(e,n){var a=Number(e);return String(a)+"."},era:(0,r.default)({values:{narrow:["pr.n.e.","AD"],abbreviated:["pr. Hr.","po. Hr."],wide:["Prije Hrista","Poslije Hrista"]},defaultWidth:"wide"}),quarter:(0,r.default)({values:{narrow:["1.","2.","3.","4."],abbreviated:["1. kv.","2. kv.","3. kv.","4. kv."],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,r.default)({values:{narrow:["1.","2.","3.","4.","5.","6.","7.","8.","9.","10.","11.","12."],abbreviated:["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec"],wide:["januar","februar","mart","april","maj","juni","juli","avgust","septembar","oktobar","novembar","decembar"]},defaultWidth:"wide",formattingValues:{narrow:["1.","2.","3.","4.","5.","6.","7.","8.","9.","10.","11.","12."],abbreviated:["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec"],wide:["januar","februar","mart","april","maj","juni","juli","avgust","septembar","oktobar","novembar","decembar"]},defaultFormattingWidth:"wide"}),day:(0,r.default)({values:{narrow:["N","P","U","S","Č","P","S"],short:["ned","pon","uto","sre","čet","pet","sub"],abbreviated:["ned","pon","uto","sre","čet","pet","sub"],wide:["nedjelja","ponedjeljak","utorak","srijeda","četvrtak","petak","subota"]},defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:{narrow:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutru",afternoon:"popodne",evening:"uveče",night:"noću"},abbreviated:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutru",afternoon:"popodne",evening:"uveče",night:"noću"},wide:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutru",afternoon:"poslije podne",evening:"uveče",night:"noću"}},defaultWidth:"wide",formattingValues:{narrow:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutru",afternoon:"popodne",evening:"uveče",night:"noću"},abbreviated:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutru",afternoon:"popodne",evening:"uveče",night:"noću"},wide:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutru",afternoon:"poslije podne",evening:"uveče",night:"noću"}},defaultFormattingWidth:"wide"})};n.default=o,e.exports=n.default}}]);