(self.webpackChunk=self.webpackChunk||[]).push([[73124,72232,69051,8705,24125,46664,7671,24749],{72232:function(e,a,t){"use strict";t(99785),t(5769),t(63238),t(14078),Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a,t){var n;if("formatting"===(null!=t&&t.context?String(t.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,d=null!=t&&t.width?String(t.width):i;n=e.formattingValues[d]||e.formattingValues[i]}else{var r=e.defaultWidth,o=null!=t&&t.width?String(t.width):e.defaultWidth;n=e.values[o]||e.values[r]}return n[e.argumentCallback?e.argumentCallback(a):a]}},e.exports=a.default},73124:function(e,a,t){"use strict";t(99785),t(95163);var n=t(73203).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(t(72232)),d={ordinalNumber:function(e,a){return Number(e)+"º"},era:(0,i.default)({values:{narrow:["AC","DC"],abbreviated:["AC","DC"],wide:["antes de cristo","despois de cristo"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1º trimestre","2º trimestre","3º trimestre","4º trimestre"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,i.default)({values:{narrow:["e","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["xan","feb","mar","abr","mai","xun","xul","ago","set","out","nov","dec"],wide:["xaneiro","febreiro","marzo","abril","maio","xuño","xullo","agosto","setembro","outubro","novembro","decembro"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["d","l","m","m","j","v","s"],short:["do","lu","ma","me","xo","ve","sa"],abbreviated:["dom","lun","mar","mer","xov","ven","sab"],wide:["domingo","luns","martes","mércores","xoves","venres","sábado"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"mañá",afternoon:"tarde",evening:"tarde",night:"noite"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoite",noon:"mediodía",morning:"mañá",afternoon:"tarde",evening:"tardiña",night:"noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoite",noon:"mediodía",morning:"mañá",afternoon:"tarde",evening:"tardiña",night:"noite"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"da mañá",afternoon:"da tarde",evening:"da tardiña",night:"da noite"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoite",noon:"mediodía",morning:"da mañá",afternoon:"da tarde",evening:"da tardiña",night:"da noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoite",noon:"mediodía",morning:"da mañá",afternoon:"da tarde",evening:"da tardiña",night:"da noite"}},defaultFormattingWidth:"wide"})};a.default=d,e.exports=a.default},73203:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);