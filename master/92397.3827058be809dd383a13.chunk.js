"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[92397,15995,68931,82563,73653,70053,61791,80289,74735],{15995:function(a,e,i){i(99785),i(52077),i(1203),i(72410),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=i.width,t=r&&a.matchPatterns[r]||a.matchPatterns[a.defaultMatchWidth],n=e.match(t);if(!n)return null;var d,l=n[0],h=r&&a.parsePatterns[r]||a.parsePatterns[a.defaultParseWidth],u=Array.isArray(h)?function(a,e){for(var i=0;i<a.length;i++)if(a[i].test(l))return i}(h):function(a,e){for(var i in a)if(a.hasOwnProperty(i)&&a[i].test(l))return i}(h);return d=a.valueCallback?a.valueCallback(u):u,{value:d=i.valueCallback?i.valueCallback(d):d,rest:e.slice(l.length)}}},a.exports=e.default},68931:function(a,e,i){i(99785),i(52077),i(1203),i(72410),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.match(a.matchPattern);if(!r)return null;var t=r[0],n=e.match(a.parsePattern);if(!n)return null;var d=a.valueCallback?a.valueCallback(n[0]):n[0];return{value:d=i.valueCallback?i.valueCallback(d):d,rest:e.slice(t.length)}}},a.exports=e.default},92397:function(a,e,i){i(99785),i(32081);var r=i(73203).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=r(i(15995)),n={ordinalNumber:(0,r(i(68931)).default)({matchPattern:/^(\d+)(af|ail|ydd|ed|fed|eg|ain)?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:(0,t.default)({matchPatterns:{narrow:/^(c|o)/i,abbreviated:/^(c\.?\s?c\.?|o\.?\s?c\.?)/i,wide:/^(cyn christ|ar ôl crist|ar ol crist)/i},defaultMatchWidth:"wide",parsePatterns:{wide:[/^c/i,/^(ar ôl crist|ar ol crist)/i],any:[/^c/i,/^o/i]},defaultParseWidth:"any"}),quarter:(0,t.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^ch[1234]/i,wide:/^(chwarter 1af)|([234](ail|ydd)? chwarter)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,t.default)({matchPatterns:{narrow:/^(i|ch|m|e|g|a|h|t|rh)/i,abbreviated:/^(ion|chwe|maw|ebr|mai|meh|gor|aws|med|hyd|tach|rhag)/i,wide:/^(ionawr|chwefror|mawrth|ebrill|mai|mehefin|gorffennaf|awst|medi|hydref|tachwedd|rhagfyr)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^i/i,/^ch/i,/^m/i,/^e/i,/^m/i,/^m/i,/^g/i,/^a/i,/^m/i,/^h/i,/^t/i,/^rh/i],any:[/^io/i,/^ch/i,/^maw/i,/^e/i,/^mai/i,/^meh/i,/^g/i,/^a/i,/^med/i,/^h/i,/^t/i,/^rh/i]},defaultParseWidth:"any"}),day:(0,t.default)({matchPatterns:{narrow:/^(s|ll|m|i|g)/i,short:/^(su|ll|ma|me|ia|gw|sa)/i,abbreviated:/^(sul|llun|maw|mer|iau|gwe|sad)/i,wide:/^dydd (sul|llun|mawrth|mercher|iau|gwener|sadwrn)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^ll/i,/^m/i,/^m/i,/^i/i,/^g/i,/^s/i],wide:[/^dydd su/i,/^dydd ll/i,/^dydd ma/i,/^dydd me/i,/^dydd i/i,/^dydd g/i,/^dydd sa/i],any:[/^su/i,/^ll/i,/^ma/i,/^me/i,/^i/i,/^g/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:(0,t.default)({matchPatterns:{narrow:/^(b|h|hn|hd|(yn y|y|yr|gyda'r) (bore|prynhawn|nos|hwyr))/i,any:/^(y\.?\s?[bh]\.?|hanner nos|hanner dydd|(yn y|y|yr|gyda'r) (bore|prynhawn|nos|hwyr))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^b|(y\.?\s?b\.?)/i,pm:/^h|(y\.?\s?h\.?)|(yr hwyr)/i,midnight:/^hn|hanner nos/i,noon:/^hd|hanner dydd/i,morning:/bore/i,afternoon:/prynhawn/i,evening:/^gyda'r nos$/i,night:/blah/i}},defaultParseWidth:"any"})};e.default=n,a.exports=e.default}}]);