"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[50115,15995,68931,82563,73653,70053,61791,80289,74735],{15995:function(a,t,e){e(33096),e(59139),e(81597),e(88646),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(a){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.width,i=r&&a.matchPatterns[r]||a.matchPatterns[a.defaultMatchWidth],n=t.match(i);if(!n)return null;var d,u=n[0],l=r&&a.parsePatterns[r]||a.parsePatterns[a.defaultParseWidth],s=Array.isArray(l)?function(a,t){for(var e=0;e<a.length;e++)if(a[e].test(u))return e}(l):function(a,t){for(var e in a)if(a.hasOwnProperty(e)&&a[e].test(u))return e}(l);return d=a.valueCallback?a.valueCallback(s):s,{value:d=e.valueCallback?e.valueCallback(d):d,rest:t.slice(u.length)}}},a.exports=t.default},68931:function(a,t,e){e(33096),e(59139),e(81597),e(88646),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(a){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.match(a.matchPattern);if(!r)return null;var i=r[0],n=t.match(a.parsePattern);if(!n)return null;var d=a.valueCallback?a.valueCallback(n[0]):n[0];return{value:d=e.valueCallback?e.valueCallback(d):d,rest:t.slice(i.length)}}},a.exports=t.default},50115:function(a,t,e){e(33096),e(54112);var r=e(73203).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(e(15995)),n={ordinalNumber:(0,r(e(68931)).default)({matchPattern:/^(\d+)\.?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:(0,i.default)({matchPatterns:{narrow:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,abbreviated:/^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,wide:/^(før Kristus|før vår tid|etter Kristus|vår tid)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^f/i,/^e/i]},defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartal/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,i.default)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,wide:/^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:{narrow:/^[smtofl]/i,short:/^(su|må|ty|on|to|fr|la)/i,abbreviated:/^(sun|mån|tys|ons|tor|fre|laur)/i,wide:/^(sundag|måndag|tysdag|onsdag|torsdag|fredag|laurdag)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^s/i,/^m/i,/^ty/i,/^o/i,/^to/i,/^f/i,/^l/i]},defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:{narrow:/^(midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta)|[ap])/i,any:/^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgonen|ettermiddagen|kvelden|natta))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^midn/i,noon:/^midd/i,morning:/morgon/i,afternoon:/ettermiddag/i,evening:/kveld/i,night:/natt/i}},defaultParseWidth:"any"})};t.default=n,a.exports=t.default}}]);