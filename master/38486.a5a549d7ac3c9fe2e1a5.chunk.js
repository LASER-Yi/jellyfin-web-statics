(self.webpackChunk=self.webpackChunk||[]).push([[38486,72232,69051,8705,24125,46664,7671,24749],{72232:function(e,n,t){"use strict";t(99785),t(5769),t(63238),t(14078),Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return function(n,t){var a;if("formatting"===(null!=t&&t.context?String(t.context):"standalone")&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,r=null!=t&&t.width?String(t.width):o;a=e.formattingValues[r]||e.formattingValues[o]}else{var i=e.defaultWidth,u=null!=t&&t.width?String(t.width):e.defaultWidth;a=e.values[u]||e.values[i]}return a[e.argumentCallback?e.argumentCallback(n):n]}},e.exports=n.default},38486:function(e,n,t){"use strict";t(99785),t(95163);var a=t(73203).default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(t(72232)),r={ordinalNumber:function(e,n){return Number(e)+"."},era:(0,o.default)({values:{narrow:["pr.n.e.","AD"],abbreviated:["pr. Kr.","po. Kr."],wide:["Prije Krista","Poslije Krista"]},defaultWidth:"wide"}),quarter:(0,o.default)({values:{narrow:["1.","2.","3.","4."],abbreviated:["1. kv.","2. kv.","3. kv.","4. kv."],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,o.default)({values:{narrow:["1.","2.","3.","4.","5.","6.","7.","8.","9.","10.","11.","12."],abbreviated:["sij","velj","ožu","tra","svi","lip","srp","kol","ruj","lis","stu","pro"],wide:["siječanj","veljača","ožujak","travanj","svibanj","lipanj","srpanj","kolovoz","rujan","listopad","studeni","prosinac"]},defaultWidth:"wide",formattingValues:{narrow:["1.","2.","3.","4.","5.","6.","7.","8.","9.","10.","11.","12."],abbreviated:["sij","velj","ožu","tra","svi","lip","srp","kol","ruj","lis","stu","pro"],wide:["siječnja","veljače","ožujka","travnja","svibnja","lipnja","srpnja","kolovoza","rujna","listopada","studenog","prosinca"]},defaultFormattingWidth:"wide"}),day:(0,o.default)({values:{narrow:["N","P","U","S","Č","P","S"],short:["ned","pon","uto","sri","čet","pet","sub"],abbreviated:["ned","pon","uto","sri","čet","pet","sub"],wide:["nedjelja","ponedjeljak","utorak","srijeda","četvrtak","petak","subota"]},defaultWidth:"wide"}),dayPeriod:(0,o.default)({values:{narrow:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutro",afternoon:"popodne",evening:"navečer",night:"noću"},abbreviated:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutro",afternoon:"popodne",evening:"navečer",night:"noću"},wide:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutro",afternoon:"poslije podne",evening:"navečer",night:"noću"}},defaultWidth:"wide",formattingValues:{narrow:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutro",afternoon:"popodne",evening:"navečer",night:"noću"},abbreviated:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutro",afternoon:"popodne",evening:"navečer",night:"noću"},wide:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutro",afternoon:"poslije podne",evening:"navečer",night:"noću"}},defaultFormattingWidth:"wide"})};n.default=r,e.exports=n.default},73203:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);