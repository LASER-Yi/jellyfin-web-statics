(self.webpackChunk=self.webpackChunk||[]).push([[56661,72232,69051,8705,24125,46664,7671,24749],{72232:function(a,n,e){"use strict";e(99785),e(5769),e(63238),e(14078),Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(a){return function(n,e){var i;if("formatting"===(null!=e&&e.context?String(e.context):"standalone")&&a.formattingValues){var t=a.defaultFormattingWidth||a.defaultWidth,r=null!=e&&e.width?String(e.width):t;i=a.formattingValues[r]||a.formattingValues[t]}else{var l=a.defaultWidth,o=null!=e&&e.width?String(e.width):a.defaultWidth;i=a.values[o]||a.values[l]}return i[a.argumentCallback?a.argumentCallback(n):n]}},a.exports=n.default},56661:function(a,n,e){"use strict";e(99785),e(95163);var i=e(73203).default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=i(e(72232)),r={ordinalNumber:function(a,n){return Number(a)+"º"},era:(0,t.default)({values:{narrow:["Q","W"],abbreviated:["QK","WK"],wide:["qabel Kristu","wara Kristu"]},defaultWidth:"wide"}),quarter:(0,t.default)({values:{narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1. kwart","2. kwart","3. kwart","4. kwart"]},defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:(0,t.default)({values:{narrow:["J","F","M","A","M","Ġ","L","A","S","O","N","D"],abbreviated:["Jan","Fra","Mar","Apr","Mej","Ġun","Lul","Aww","Set","Ott","Nov","Diċ"],wide:["Jannar","Frar","Marzu","April","Mejju","Ġunju","Lulju","Awwissu","Settembru","Ottubru","Novembru","Diċembru"]},defaultWidth:"wide"}),day:(0,t.default)({values:{narrow:["Ħ","T","T","E","Ħ","Ġ","S"],short:["Ħa","Tn","Tl","Er","Ħa","Ġi","Si"],abbreviated:["Ħad","Tne","Tli","Erb","Ħam","Ġim","Sib"],wide:["Il-Ħadd","It-Tnejn","It-Tlieta","L-Erbgħa","Il-Ħamis","Il-Ġimgħa","Is-Sibt"]},defaultWidth:"wide"}),dayPeriod:(0,t.default)({values:{narrow:{am:"a",pm:"p",midnight:"nofsillejl",noon:"nofsinhar",morning:"għodwa",afternoon:"wara nofsinhar",evening:"filgħaxija",night:"lejl"},abbreviated:{am:"AM",pm:"PM",midnight:"nofsillejl",noon:"nofsinhar",morning:"għodwa",afternoon:"wara nofsinhar",evening:"filgħaxija",night:"lejl"},wide:{am:"a.m.",pm:"p.m.",midnight:"nofsillejl",noon:"nofsinhar",morning:"għodwa",afternoon:"wara nofsinhar",evening:"filgħaxija",night:"lejl"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"f'nofsillejl",noon:"f'nofsinhar",morning:"filgħodu",afternoon:"wara nofsinhar",evening:"filgħaxija",night:"billejl"},abbreviated:{am:"AM",pm:"PM",midnight:"f'nofsillejl",noon:"f'nofsinhar",morning:"filgħodu",afternoon:"wara nofsinhar",evening:"filgħaxija",night:"billejl"},wide:{am:"a.m.",pm:"p.m.",midnight:"f'nofsillejl",noon:"f'nofsinhar",morning:"filgħodu",afternoon:"wara nofsinhar",evening:"filgħaxija",night:"billejl"}},defaultFormattingWidth:"wide"})};n.default=r,a.exports=n.default},73203:function(a){a.exports=function(a){return a&&a.__esModule?a:{default:a}},a.exports.__esModule=!0,a.exports.default=a.exports}}]);