"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[84051,15995,68931,82563,73653,70053,61791,80289,74735],{15995:function(e,a,t){t(99785),t(52077),t(1203),t(72410),Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.width,r=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],n=a.match(r);if(!n)return null;var s,u=n[0],l=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth],d=Array.isArray(l)?function(e,a){for(var t=0;t<e.length;t++)if(e[t].test(u))return t}(l):function(e,a){for(var t in e)if(e.hasOwnProperty(t)&&e[t].test(u))return t}(l);return s=e.valueCallback?e.valueCallback(d):d,{value:s=t.valueCallback?t.valueCallback(s):s,rest:a.slice(u.length)}}},e.exports=a.default},68931:function(e,a,t){t(99785),t(52077),t(1203),t(72410),Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=a.match(e.matchPattern);if(!i)return null;var r=i[0],n=a.match(e.parsePattern);if(!n)return null;var s=e.valueCallback?e.valueCallback(n[0]):n[0];return{value:s=t.valueCallback?t.valueCallback(s):s,rest:a.slice(r.length)}}},e.exports=a.default},84051:function(e,a,t){t(99785),t(32081),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=r(t(15995));function r(e){return e&&e.__esModule?e:{default:e}}var n={ordinalNumber:(0,r(t(68931)).default)({matchPattern:/^(\d+)\.?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,i.default)({matchPatterns:{narrow:/^(ie\.|isz\.)/i,abbreviated:/^(i\.\s?e\.?|b?\s?c\s?e|i\.\s?sz\.?)/i,wide:/^(Krisztus előtt|időszámításunk előtt|időszámításunk szerint|i\. sz\.)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/ie/i,/isz/i],abbreviated:[/^(i\.?\s?e\.?|b\s?ce)/i,/^(i\.?\s?sz\.?|c\s?e)/i],any:[/előtt/i,/(szerint|i. sz.)/i]},defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:{narrow:/^[1234]\.?/i,abbreviated:/^[1234]?\.?\s?n\.év/i,wide:/^([1234]|I|II|III|IV)?\.?\s?negyedév/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1|I$/i,/2|II$/i,/3|III/i,/4|IV/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,i.default)({matchPatterns:{narrow:/^[jfmaásond]|sz/i,abbreviated:/^(jan\.?|febr\.?|márc\.?|ápr\.?|máj\.?|jún\.?|júl\.?|aug\.?|szept\.?|okt\.?|nov\.?|dec\.?)/i,wide:/^(január|február|március|április|május|június|július|augusztus|szeptember|október|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a|á/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s|sz/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^már/i,/^áp/i,/^máj/i,/^jún/i,/^júl/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:{narrow:/^([vhkpc]|sz|cs|sz)/i,short:/^([vhkp]|sze|cs|szo)/i,abbreviated:/^([vhkp]|sze|cs|szo)/i,wide:/^(vasárnap|hétfő|kedd|szerda|csütörtök|péntek|szombat)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^v/i,/^h/i,/^k/i,/^sz/i,/^c/i,/^p/i,/^sz/i],any:[/^v/i,/^h/i,/^k/i,/^sze/i,/^c/i,/^p/i,/^szo/i]},defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:{any:/^((de|du)\.?|éjfél|délután|dél|reggel|este|éjjel)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^de\.?/i,pm:/^du\.?/i,midnight:/^éjf/i,noon:/^dé/i,morning:/reg/i,afternoon:/^délu\.?/i,evening:/es/i,night:/éjj/i}},defaultParseWidth:"any"})};a.default=n,e.exports=a.default}}]);