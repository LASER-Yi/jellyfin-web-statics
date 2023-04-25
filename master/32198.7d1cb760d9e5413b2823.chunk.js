"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[32198,42490,72232,15995,68931,79829,22907,82563,5526,94891,73653,46879,94250,70053,46058,76076,48966,17396,80745,42796,73710,61791,78688,23945,80289,43821,5054,95671,74735],{42490:function(e,a,t){t(99785),Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=a.width?String(a.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}},e.exports=a.default},72232:function(e,a,t){t(99785),t(5769),t(63238),t(14078),Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a,t){var n;if("formatting"===(null!=t&&t.context?String(t.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,i=null!=t&&t.width?String(t.width):r;n=e.formattingValues[i]||e.formattingValues[r]}else{var d=e.defaultWidth,o=null!=t&&t.width?String(t.width):e.defaultWidth;n=e.values[o]||e.values[d]}return n[e.argumentCallback?e.argumentCallback(a):a]}},e.exports=a.default},15995:function(e,a,t){t(99785),t(52077),t(1203),t(72410),Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.width,r=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],i=a.match(r);if(!i)return null;var d,o=i[0],u=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(u)?function(e,a){for(var t=0;t<e.length;t++)if(e[t].test(o))return t}(u):function(e,a){for(var t in e)if(e.hasOwnProperty(t)&&e[t].test(o))return t}(u);return d=e.valueCallback?e.valueCallback(l):l,{value:d=t.valueCallback?t.valueCallback(d):d,rest:a.slice(o.length)}}},e.exports=a.default},68931:function(e,a,t){t(99785),t(52077),t(1203),t(72410),Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.match(e.matchPattern);if(!n)return null;var r=n[0],i=a.match(e.parsePattern);if(!i)return null;var d=e.valueCallback?e.valueCallback(i[0]):i[0];return{value:d=t.valueCallback?t.valueCallback(d):d,rest:a.slice(r.length)}}},e.exports=a.default},46058:function(e,a,t){t(99785),t(52077),t(911),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={lessThanXSeconds:{one:"mens d’una segonda",other:"mens de {{count}} segondas"},xSeconds:{one:"1 segonda",other:"{{count}} segondas"},halfAMinute:"30 segondas",lessThanXMinutes:{one:"mens d’una minuta",other:"mens de {{count}} minutas"},xMinutes:{one:"1 minuta",other:"{{count}} minutas"},aboutXHours:{one:"environ 1 ora",other:"environ {{count}} oras"},xHours:{one:"1 ora",other:"{{count}} oras"},xDays:{one:"1 jorn",other:"{{count}} jorns"},aboutXWeeks:{one:"environ 1 setmana",other:"environ {{count}} setmanas"},xWeeks:{one:"1 setmana",other:"{{count}} setmanas"},aboutXMonths:{one:"environ 1 mes",other:"environ {{count}} meses"},xMonths:{one:"1 mes",other:"{{count}} meses"},aboutXYears:{one:"environ 1 an",other:"environ {{count}} ans"},xYears:{one:"1 an",other:"{{count}} ans"},overXYears:{one:"mai d’un an",other:"mai de {{count}} ans"},almostXYears:{one:"gaireben un an",other:"gaireben {{count}} ans"}};a.default=function(e,a,t){var r,i=n[e];return r="string"==typeof i?i:1===a?i.one:i.other.replace("{{count}}",String(a)),null!=t&&t.addSuffix?t.comparison&&t.comparison>0?"d’aquí "+r:"fa "+r:r},e.exports=a.default},76076:function(e,a,t){t(99785),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n,r=(n=t(42490))&&n.__esModule?n:{default:n},i={date:(0,r.default)({formats:{full:"EEEE d 'de' MMMM y",long:"d 'de' MMMM y",medium:"d MMM y",short:"dd/MM/y"},defaultWidth:"full"}),time:(0,r.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,r.default)({formats:{full:"{{date}} 'a' {{time}}",long:"{{date}} 'a' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};a.default=i,e.exports=a.default},48966:function(e,a,t){t(99785),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={lastWeek:"eeee 'passat a' p",yesterday:"'ièr a' p",today:"'uèi a' p",tomorrow:"'deman a' p",nextWeek:"eeee 'a' p",other:"P"};a.default=function(e,a,t,r){return n[e]},e.exports=a.default},17396:function(e,a,t){t(99785),t(95163),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n,r=(n=t(72232))&&n.__esModule?n:{default:n},i={ordinalNumber:function(e,a){var t,n=Number(e),r=null==a?void 0:a.unit;switch(n){case 1:t="èr";break;case 2:t="nd";break;default:t="en"}return"year"!==r&&"week"!==r&&"hour"!==r&&"minute"!==r&&"second"!==r||(t+="a"),n+t},era:(0,r.default)({values:{narrow:["ab. J.C.","apr. J.C."],abbreviated:["ab. J.C.","apr. J.C."],wide:["abans Jèsus-Crist","après Jèsus-Crist"]},defaultWidth:"wide"}),quarter:(0,r.default)({values:{narrow:["T1","T2","T3","T4"],abbreviated:["1èr trim.","2nd trim.","3en trim.","4en trim."],wide:["1èr trimèstre","2nd trimèstre","3en trimèstre","4en trimèstre"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,r.default)({values:{narrow:["GN","FB","MÇ","AB","MA","JN","JL","AG","ST","OC","NV","DC"],abbreviated:["gen.","febr.","març","abr.","mai","junh","jul.","ag.","set.","oct.","nov.","dec."],wide:["genièr","febrièr","març","abril","mai","junh","julhet","agost","setembre","octòbre","novembre","decembre"]},defaultWidth:"wide"}),day:(0,r.default)({values:{narrow:["dg.","dl.","dm.","dc.","dj.","dv.","ds."],short:["dg.","dl.","dm.","dc.","dj.","dv.","ds."],abbreviated:["dg.","dl.","dm.","dc.","dj.","dv.","ds."],wide:["dimenge","diluns","dimars","dimècres","dijòus","divendres","dissabte"]},defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:{narrow:{am:"am",pm:"pm",midnight:"mièjanuèch",noon:"miègjorn",morning:"matin",afternoon:"aprèp-miègjorn",evening:"vèspre",night:"nuèch"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"mièjanuèch",noon:"miègjorn",morning:"matin",afternoon:"aprèp-miègjorn",evening:"vèspre",night:"nuèch"},wide:{am:"a.m.",pm:"p.m.",midnight:"mièjanuèch",noon:"miègjorn",morning:"matin",afternoon:"aprèp-miègjorn",evening:"vèspre",night:"nuèch"}},defaultWidth:"wide",formattingValues:{narrow:{am:"am",pm:"pm",midnight:"mièjanuèch",noon:"miègjorn",morning:"del matin",afternoon:"de l’aprèp-miègjorn",evening:"del ser",night:"de la nuèch"},abbreviated:{am:"AM",pm:"PM",midnight:"mièjanuèch",noon:"miègjorn",morning:"del matin",afternoon:"de l’aprèp-miègjorn",evening:"del ser",night:"de la nuèch"},wide:{am:"ante meridiem",pm:"post meridiem",midnight:"mièjanuèch",noon:"miègjorn",morning:"del matin",afternoon:"de l’aprèp-miègjorn",evening:"del ser",night:"de la nuèch"}},defaultFormattingWidth:"wide"})};a.default=i,e.exports=a.default},80745:function(e,a,t){t(99785),t(32081),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(t(15995));function r(e){return e&&e.__esModule?e:{default:e}}var i={ordinalNumber:(0,r(t(68931)).default)({matchPattern:/^(\d+)(èr|nd|en)?[a]?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,n.default)({matchPatterns:{narrow:/^(ab\.J\.C|apr\.J\.C|apr\.J\.-C)/i,abbreviated:/^(ab\.J\.-C|ab\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,wide:/^(abans Jèsus-Crist|après Jèsus-Crist)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^ab/i,/^ap/i]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^T[1234]/i,abbreviated:/^[1234](èr|nd|en)? trim\.?/i,wide:/^[1234](èr|nd|en)? trimèstre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,n.default)({matchPatterns:{narrow:/^(GN|FB|MÇ|AB|MA|JN|JL|AG|ST|OC|NV|DC)/i,abbreviated:/^(gen|febr|març|abr|mai|junh|jul|ag|set|oct|nov|dec)\.?/i,wide:/^(genièr|febrièr|març|abril|mai|junh|julhet|agost|setembre|octòbre|novembre|decembre)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^g/i,/^f/i,/^ma[r?]|MÇ/i,/^ab/i,/^ma[i?]/i,/^ju[n?]|JN/i,/^ju[l?]|JL/i,/^ag/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:{narrow:/^d[glmcjvs]\.?/i,short:/^d[glmcjvs]\.?/i,abbreviated:/^d[glmcjvs]\.?/i,wide:/^(dimenge|diluns|dimars|dimècres|dijòus|divendres|dissabte)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^dg/i,/^dl/i,/^dm/i,/^dc/i,/^dj/i,/^dv/i,/^ds/i],short:[/^dg/i,/^dl/i,/^dm/i,/^dc/i,/^dj/i,/^dv/i,/^ds/i],abbreviated:[/^dg/i,/^dl/i,/^dm/i,/^dc/i,/^dj/i,/^dv/i,/^ds/i],any:[/^dg|dime/i,/^dl|dil/i,/^dm|dima/i,/^dc|dimè/i,/^dj|dij/i,/^dv|div/i,/^ds|dis/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{any:/(^(a\.?m|p\.?m))|(ante meridiem|post meridiem)|((del |de la |de l’)(matin|aprèp-miègjorn|vèspre|ser|nuèch))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/(^a)|ante meridiem/i,pm:/(^p)|post meridiem/i,midnight:/^mièj/i,noon:/^mièg/i,morning:/matin/i,afternoon:/aprèp-miègjorn/i,evening:/vèspre|ser/i,night:/nuèch/i}},defaultParseWidth:"any"})};a.default=i,e.exports=a.default},32198:function(e,a,t){t(99785),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=u(t(46058)),r=u(t(76076)),i=u(t(48966)),d=u(t(17396)),o=u(t(80745));function u(e){return e&&e.__esModule?e:{default:e}}var l={code:"oc",formatDistance:n.default,formatLong:r.default,formatRelative:i.default,localize:d.default,match:o.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};a.default=l,e.exports=a.default}}]);