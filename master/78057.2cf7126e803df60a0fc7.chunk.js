(self.webpackChunk=self.webpackChunk||[]).push([[78057,72232,69051,8705,24125,46664,7671,24749],{72232:function(e,n,t){"use strict";t(99785),t(5769),t(63238),t(14078),Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return function(n,t){var a;if("formatting"===(null!=t&&t.context?String(t.context):"standalone")&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,r=null!=t&&t.width?String(t.width):o;a=e.formattingValues[r]||e.formattingValues[o]}else{var i=e.defaultWidth,d=null!=t&&t.width?String(t.width):e.defaultWidth;a=e.values[d]||e.values[i]}return a[e.argumentCallback?e.argumentCallback(n):n]}},e.exports=n.default},78057:function(e,n,t){"use strict";t(99785),t(95163);var a=t(73203).default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(t(72232)),r={ordinalNumber:function(e,n){return Number(e)+"."},era:(0,o.default)({values:{narrow:["pred Kr.","po Kr."],abbreviated:["pred Kr.","po Kr."],wide:["pred Kristom","po Kristovi"]},defaultWidth:"wide"}),quarter:(0,o.default)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. štvrťrok","2. štvrťrok","3. štvrťrok","4. štvrťrok"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,o.default)({values:{narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","feb","mar","apr","máj","jún","júl","aug","sep","okt","nov","dec"],wide:["január","február","marec","apríl","máj","jún","júl","august","september","október","november","december"]},defaultWidth:"wide",formattingValues:{narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","feb","mar","apr","máj","jún","júl","aug","sep","okt","nov","dec"],wide:["januára","februára","marca","apríla","mája","júna","júla","augusta","septembra","októbra","novembra","decembra"]},defaultFormattingWidth:"wide"}),day:(0,o.default)({values:{narrow:["n","p","u","s","š","p","s"],short:["ne","po","ut","st","št","pi","so"],abbreviated:["ne","po","ut","st","št","pi","so"],wide:["nedeľa","pondelok","utorok","streda","štvrtok","piatok","sobota"]},defaultWidth:"wide"}),dayPeriod:(0,o.default)({values:{narrow:{am:"AM",pm:"PM",midnight:"poln.",noon:"pol.",morning:"ráno",afternoon:"pop.",evening:"več.",night:"noc"},abbreviated:{am:"AM",pm:"PM",midnight:"poln.",noon:"pol.",morning:"ráno",afternoon:"popol.",evening:"večer",night:"noc"},wide:{am:"AM",pm:"PM",midnight:"polnoc",noon:"poludnie",morning:"ráno",afternoon:"popoludnie",evening:"večer",night:"noc"}},defaultWidth:"wide",formattingValues:{narrow:{am:"AM",pm:"PM",midnight:"o poln.",noon:"nap.",morning:"ráno",afternoon:"pop.",evening:"več.",night:"v n."},abbreviated:{am:"AM",pm:"PM",midnight:"o poln.",noon:"napol.",morning:"ráno",afternoon:"popol.",evening:"večer",night:"v noci"},wide:{am:"AM",pm:"PM",midnight:"o polnoci",noon:"napoludnie",morning:"ráno",afternoon:"popoludní",evening:"večer",night:"v noci"}},defaultFormattingWidth:"wide"})};n.default=r,e.exports=n.default},73203:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);