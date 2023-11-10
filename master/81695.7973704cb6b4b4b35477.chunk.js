"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[81695,15995,68931,82563,73653,70053,61791,80289,74735],{15995:function(a,e,t){t(33096),t(59139),t(81597),t(88646),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.width,r=i&&a.matchPatterns[i]||a.matchPatterns[a.defaultMatchWidth],n=e.match(r);if(!n)return null;var d,l=n[0],u=i&&a.parsePatterns[i]||a.parsePatterns[a.defaultParseWidth],s=Array.isArray(u)?function(a,e){for(var t=0;t<a.length;t++)if(a[t].test(l))return t}(u):function(a,e){for(var t in a)if(a.hasOwnProperty(t)&&a[t].test(l))return t}(u);return d=a.valueCallback?a.valueCallback(s):s,{value:d=t.valueCallback?t.valueCallback(d):d,rest:e.slice(l.length)}}},a.exports=e.default},68931:function(a,e,t){t(33096),t(59139),t(81597),t(88646),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.match(a.matchPattern);if(!i)return null;var r=i[0],n=e.match(a.parsePattern);if(!n)return null;var d=a.valueCallback?a.valueCallback(n[0]):n[0];return{value:d=t.valueCallback?t.valueCallback(d):d,rest:e.slice(r.length)}}},a.exports=e.default},81695:function(a,e,t){t(33096),t(54112);var i=t(73203).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(t(68931)),n=i(t(15995)),d={ordinalNumber:(0,r.default)({matchPattern:/^(\d+)(º)?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:(0,n.default)({matchPatterns:{narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,wide:/^(antes de cristo|antes de la era com[uú]n|despu[eé]s de cristo|era com[uú]n)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^ac/i,/^dc/i],wide:[/^(antes de cristo|antes de la era com[uú]n)/i,/^(despu[eé]s de cristo|era com[uú]n)/i]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](º)? trimestre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,n.default)({matchPatterns:{narrow:/^[efmajsond]/i,abbreviated:/^(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i,wide:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^e/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^en/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i]},defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:{narrow:/^[dlmjvs]/i,short:/^(do|lu|ma|mi|ju|vi|s[áa])/i,abbreviated:/^(dom|lun|mar|mi[ée]|jue|vie|s[áa]b)/i,wide:/^(domingo|lunes|martes|mi[ée]rcoles|jueves|viernes|s[áa]bado)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^do/i,/^lu/i,/^ma/i,/^mi/i,/^ju/i,/^vi/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{narrow:/^(a|p|mn|md|(de la|a las) (mañana|tarde|noche))/i,any:/^([ap]\.?\s?m\.?|medianoche|mediodia|(de la|a las) (mañana|tarde|noche))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mn/i,noon:/^md/i,morning:/mañana/i,afternoon:/tarde/i,evening:/tarde/i,night:/noche/i}},defaultParseWidth:"any"})};e.default=d,a.exports=e.default}}]);