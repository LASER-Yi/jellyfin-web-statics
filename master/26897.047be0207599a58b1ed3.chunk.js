(self.webpackChunk=self.webpackChunk||[]).push([[26897,72232,69051,8705,24125,46664,7671,24749],{72232:function(e,t,n){"use strict";n(99785),n(5769),n(63238),n(14078),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n){var a;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,r=null!=n&&n.width?String(n.width):i;a=e.formattingValues[r]||e.formattingValues[i]}else{var d=e.defaultWidth,o=null!=n&&n.width?String(n.width):e.defaultWidth;a=e.values[o]||e.values[d]}return a[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},26897:function(e,t,n){"use strict";n(99785),n(95163);var a=n(73203).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(72232)),r={ordinalNumber:function(e,t){return Number(e)+"e"},era:(0,i.default)({values:{narrow:["f.K.","n.K."],abbreviated:["f.Kr.","n.Kr."],wide:["foar Kristus","nei Kristus"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1e fearnsjier","2e fearnsjier","3e fearnsjier","4e fearnsjier"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,i.default)({values:{narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan.","feb.","mrt.","apr.","mai.","jun.","jul.","aug.","sep.","okt.","nov.","des."],wide:["jannewaris","febrewaris","maart","april","maaie","juny","july","augustus","septimber","oktober","novimber","desimber"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["s","m","t","w","t","f","s"],short:["si","mo","ti","wo","to","fr","so"],abbreviated:["snein","moa","tii","woa","ton","fre","sneon"],wide:["snein","moandei","tiisdei","woansdei","tongersdei","freed","sneon"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"AM",pm:"PM",midnight:"middernacht",noon:"middei",morning:"moarns",afternoon:"middeis",evening:"jûns",night:"nachts"},abbreviated:{am:"AM",pm:"PM",midnight:"middernacht",noon:"middei",morning:"moarns",afternoon:"middeis",evening:"jûns",night:"nachts"},wide:{am:"AM",pm:"PM",midnight:"middernacht",noon:"middei",morning:"moarns",afternoon:"middeis",evening:"jûns",night:"nachts"}},defaultWidth:"wide"})};t.default=r,e.exports=t.default},73203:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);