"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3767,7184,83518,9911,32292,65149,87530,99435,21816],{7184:function(a,e,t){t(89336),t(36947),t(95021),t(53819),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.width,i=r&&a.matchPatterns[r]||a.matchPatterns[a.defaultMatchWidth],n=e.match(i);if(!n)return null;var s,d=n[0],l=r&&a.parsePatterns[r]||a.parsePatterns[a.defaultParseWidth],u=Array.isArray(l)?function(a,e){for(var t=0;t<a.length;t++)if(a[t].test(d))return t}(l):function(a,e){for(var t in a)if(a.hasOwnProperty(t)&&a[t].test(d))return t}(l);return s=a.valueCallback?a.valueCallback(u):u,{value:s=t.valueCallback?t.valueCallback(s):s,rest:e.slice(d.length)}}},a.exports=e.default},83518:function(a,e,t){t(89336),t(36947),t(95021),t(53819),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.match(a.matchPattern);if(!r)return null;var i=r[0],n=e.match(a.parsePattern);if(!n)return null;var s=a.valueCallback?a.valueCallback(n[0]):n[0];return{value:s=t.valueCallback?t.valueCallback(s):s,rest:e.slice(i.length)}}},a.exports=e.default},3767:function(a,e,t){t(36947),t(96054);var r=t(96784).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(t(7184)),n={ordinalNumber:(0,r(t(83518)).default)({matchPattern:/^(\d+)(-rë|-të|t|)?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:(0,i.default)({matchPatterns:{narrow:/^(p|m)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(para krishtit|mbas krishtit)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(p|m)/i]},defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]-mujori (i{1,3}|iv)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,i.default)({matchPatterns:{narrow:/^[jsmpqkftnd]/i,abbreviated:/^(jan|shk|mar|pri|maj|qer|kor|gus|sht|tet|nën|dhj)/i,wide:/^(janar|shkurt|mars|prill|maj|qershor|korrik|gusht|shtator|tetor|nëntor|dhjetor)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^s/i,/^m/i,/^p/i,/^m/i,/^q/i,/^k/i,/^g/i,/^s/i,/^t/i,/^n/i,/^d/i],any:[/^ja/i,/^shk/i,/^mar/i,/^pri/i,/^maj/i,/^qer/i,/^kor/i,/^gu/i,/^sht/i,/^tet/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:{narrow:/^[dhmeps]/i,short:/^(di|hë|ma|më|en|pr|sh)/i,abbreviated:/^(die|hën|mar|mër|enj|pre|sht)/i,wide:/^(dielë|hënë|martë|mërkurë|enjte|premte|shtunë)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^d/i,/^h/i,/^m/i,/^m/i,/^e/i,/^p/i,/^s/i],any:[/^d/i,/^h/i,/^ma/i,/^më/i,/^e/i,/^p/i,/^s/i]},defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:{narrow:/^(p|m|me|në (mëngjes|mbasdite|mbrëmje|mesnatë))/i,any:/^([pm]\.?\s?d\.?|drek|në (mëngjes|mbasdite|mbrëmje|mesnatë))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^p/i,pm:/^m/i,midnight:/^me/i,noon:/^dr/i,morning:/mëngjes/i,afternoon:/mbasdite/i,evening:/mbrëmje/i,night:/natë/i}},defaultParseWidth:"any"})};e.default=n,a.exports=e.default}}]);