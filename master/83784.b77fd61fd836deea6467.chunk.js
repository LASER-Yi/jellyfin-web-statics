"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[83784,15995,68931,82563,73653,70053,61791,80289,74735],{15995:function(a,t,e){e(99785),e(52077),e(1203),e(72410),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(a){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.width,n=i&&a.matchPatterns[i]||a.matchPatterns[a.defaultMatchWidth],r=t.match(n);if(!r)return null;var l,u=r[0],d=i&&a.parsePatterns[i]||a.parsePatterns[a.defaultParseWidth],s=Array.isArray(d)?function(a,t){for(var e=0;e<a.length;e++)if(a[e].test(u))return e}(d):function(a,t){for(var e in a)if(a.hasOwnProperty(e)&&a[e].test(u))return e}(d);return l=a.valueCallback?a.valueCallback(s):s,{value:l=e.valueCallback?e.valueCallback(l):l,rest:t.slice(u.length)}}},a.exports=t.default},68931:function(a,t,e){e(99785),e(52077),e(1203),e(72410),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(a){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.match(a.matchPattern);if(!i)return null;var n=i[0],r=t.match(a.parsePattern);if(!r)return null;var l=a.valueCallback?a.valueCallback(r[0]):r[0];return{value:l=e.valueCallback?e.valueCallback(l):l,rest:t.slice(n.length)}}},a.exports=t.default},83784:function(a,t,e){e(99785),e(32081),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(e(15995));function n(a){return a&&a.__esModule?a:{default:a}}var r={ordinalNumber:(0,n(e(68931)).default)({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:(0,i.default)({matchPatterns:{narrow:/^(ق|ب)/i,abbreviated:/^(ق\.?\s?م\.?|ق\.?\s?م\.?\s?|a\.?\s?d\.?|c\.?\s?)/i,wide:/^(قبل الميلاد|قبل الميلاد|بعد الميلاد|بعد الميلاد)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^قبل/i,/^بعد/i]},defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^ر[1234]/i,wide:/^الربع [1234]/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,i.default)({matchPatterns:{narrow:/^[يفمأمسند]/i,abbreviated:/^(ين|ف|مار|أب|ماي|يون|يول|أغ|س|أك|ن|د)/i,wide:/^(ين|ف|مار|أب|ماي|يون|يول|أغ|س|أك|ن|د)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^ي/i,/^ف/i,/^م/i,/^أ/i,/^م/i,/^ي/i,/^ي/i,/^أ/i,/^س/i,/^أ/i,/^ن/i,/^د/i],any:[/^ين/i,/^ف/i,/^مار/i,/^أب/i,/^ماي/i,/^يون/i,/^يول/i,/^أغ/i,/^س/i,/^أك/i,/^ن/i,/^د/i]},defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:{narrow:/^[حنثرخجس]/i,short:/^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,abbreviated:/^(أحد|اثن|ثلا|أرب|خمي|جمعة|سبت)/i,wide:/^(الأحد|الاثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^ح/i,/^ن/i,/^ث/i,/^ر/i,/^خ/i,/^ج/i,/^س/i],wide:[/^الأحد/i,/^الاثنين/i,/^الثلاثاء/i,/^الأربعاء/i,/^الخميس/i,/^الجمعة/i,/^السبت/i],any:[/^أح/i,/^اث/i,/^ث/i,/^أر/i,/^خ/i,/^ج/i,/^س/i]},defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};t.default=r,a.exports=t.default}}]);