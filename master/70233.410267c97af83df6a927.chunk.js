"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[70233,42490,72232,15995,68931,79829,22907,82563,5526,94891,73653,5983,59904,7169,26897,76530,46879,94250,70053,42796,73710,61791,78688,23945,80289,43821,5054,95671,74735],{42490:function(e,t,a){a(33096),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}},e.exports=t.default},72232:function(e,t,a){a(33096),a(13227),a(81414),a(11431),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var n;if("formatting"===(null!=a&&a.context?String(a.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,r=null!=a&&a.width?String(a.width):i;n=e.formattingValues[r]||e.formattingValues[i]}else{var o=e.defaultWidth,d=null!=a&&a.width?String(a.width):e.defaultWidth;n=e.values[d]||e.values[o]}return n[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},15995:function(e,t,a){a(33096),a(59139),a(81597),a(88646),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.width,i=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],r=t.match(i);if(!r)return null;var o,d=r[0],u=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(u)?function(e,t){for(var a=0;a<e.length;a++)if(e[a].test(d))return a}(u):function(e,t){for(var a in e)if(e.hasOwnProperty(a)&&e[a].test(d))return a}(u);return o=e.valueCallback?e.valueCallback(s):s,{value:o=a.valueCallback?a.valueCallback(o):o,rest:t.slice(d.length)}}},e.exports=t.default},68931:function(e,t,a){a(33096),a(59139),a(81597),a(88646),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(e.matchPattern);if(!n)return null;var i=n[0],r=t.match(e.parsePattern);if(!r)return null;var o=e.valueCallback?e.valueCallback(r[0]):r[0];return{value:o=a.valueCallback?a.valueCallback(o):o,rest:t.slice(i.length)}}},e.exports=t.default},5983:function(e,t,a){a(33096),a(59139),a(86028),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={lessThanXSeconds:{one:"minder as 1 sekonde",other:"minder as {{count}} sekonden"},xSeconds:{one:"1 sekonde",other:"{{count}} sekonden"},halfAMinute:"oardel minút",lessThanXMinutes:{one:"minder as 1 minút",other:"minder as {{count}} minuten"},xMinutes:{one:"1 minút",other:"{{count}} minuten"},aboutXHours:{one:"sawat 1 oere",other:"sawat {{count}} oere"},xHours:{one:"1 oere",other:"{{count}} oere"},xDays:{one:"1 dei",other:"{{count}} dagen"},aboutXWeeks:{one:"sawat 1 wike",other:"sawat {{count}} wiken"},xWeeks:{one:"1 wike",other:"{{count}} wiken"},aboutXMonths:{one:"sawat 1 moanne",other:"sawat {{count}} moannen"},xMonths:{one:"1 moanne",other:"{{count}} moannen"},aboutXYears:{one:"sawat 1 jier",other:"sawat {{count}} jier"},xYears:{one:"1 jier",other:"{{count}} jier"},overXYears:{one:"mear as 1 jier",other:"mear as {{count}}s jier"},almostXYears:{one:"hast 1 jier",other:"hast {{count}} jier"}};t.default=function(e,t,a){var i,r=n[e];return i="string"==typeof r?r:1===t?r.one:r.other.replace("{{count}}",String(t)),null!=a&&a.addSuffix?a.comparison&&a.comparison>0?"oer "+i:i+" lyn":i},e.exports=t.default},59904:function(e,t,a){a(33096);var n=a(73203).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(42490)),r={date:(0,i.default)({formats:{full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"dd-MM-y"},defaultWidth:"full"}),time:(0,i.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,i.default)({formats:{full:"{{date}} 'om' {{time}}",long:"{{date}} 'om' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};t.default=r,e.exports=t.default},7169:function(e,t,a){a(33096),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={lastWeek:"'ôfrûne' eeee 'om' p",yesterday:"'juster om' p",today:"'hjoed om' p",tomorrow:"'moarn om' p",nextWeek:"eeee 'om' p",other:"P"};t.default=function(e,t,a,i){return n[e]},e.exports=t.default},26897:function(e,t,a){a(33096),a(11908);var n=a(73203).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(72232)),r={ordinalNumber:function(e,t){return Number(e)+"e"},era:(0,i.default)({values:{narrow:["f.K.","n.K."],abbreviated:["f.Kr.","n.Kr."],wide:["foar Kristus","nei Kristus"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1e fearnsjier","2e fearnsjier","3e fearnsjier","4e fearnsjier"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,i.default)({values:{narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan.","feb.","mrt.","apr.","mai.","jun.","jul.","aug.","sep.","okt.","nov.","des."],wide:["jannewaris","febrewaris","maart","april","maaie","juny","july","augustus","septimber","oktober","novimber","desimber"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["s","m","t","w","t","f","s"],short:["si","mo","ti","wo","to","fr","so"],abbreviated:["snein","moa","tii","woa","ton","fre","sneon"],wide:["snein","moandei","tiisdei","woansdei","tongersdei","freed","sneon"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"AM",pm:"PM",midnight:"middernacht",noon:"middei",morning:"moarns",afternoon:"middeis",evening:"jûns",night:"nachts"},abbreviated:{am:"AM",pm:"PM",midnight:"middernacht",noon:"middei",morning:"moarns",afternoon:"middeis",evening:"jûns",night:"nachts"},wide:{am:"AM",pm:"PM",midnight:"middernacht",noon:"middei",morning:"moarns",afternoon:"middeis",evening:"jûns",night:"nachts"}},defaultWidth:"wide"})};t.default=r,e.exports=t.default},76530:function(e,t,a){a(33096),a(54112);var n=a(73203).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(15995)),r={ordinalNumber:(0,n(a(68931)).default)({matchPattern:/^(\d+)e?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,i.default)({matchPatterns:{narrow:/^([fn]\.? ?K\.?)/,abbreviated:/^([fn]\. ?Kr\.?)/,wide:/^((foar|nei) Kristus)/},defaultMatchWidth:"wide",parsePatterns:{any:[/^f/,/^n/]},defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^K[1234]/i,wide:/^[1234]e fearnsjier/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,i.default)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan.|feb.|mrt.|apr.|mai.|jun.|jul.|aug.|sep.|okt.|nov.|des.)/i,wide:/^(jannewaris|febrewaris|maart|april|maaie|juny|july|augustus|septimber|oktober|novimber|desimber)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^jan/i,/^feb/i,/^m(r|a)/i,/^apr/i,/^mai/i,/^jun/i,/^jul/i,/^aug/i,/^sep/i,/^okt/i,/^nov/i,/^des/i]},defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:{narrow:/^[smtwf]/i,short:/^(si|mo|ti|wo|to|fr|so)/i,abbreviated:/^(snein|moa|tii|woa|ton|fre|sneon)/i,wide:/^(snein|moandei|tiisdei|woansdei|tongersdei|freed|sneon)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^sn/i,/^mo/i,/^ti/i,/^wo/i,/^to/i,/^fr/i,/^sn/i]},defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:{any:/^(am|pm|middernacht|middeis|moarns|middei|jûns|nachts)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^am/i,pm:/^pm/i,midnight:/^middernacht/i,noon:/^middei/i,morning:/moarns/i,afternoon:/^middeis/i,evening:/jûns/i,night:/nachts/i}},defaultParseWidth:"any"})};t.default=r,e.exports=t.default},70233:function(e,t,a){a(33096);var n=a(73203).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(5983)),r=n(a(59904)),o=n(a(7169)),d=n(a(26897)),u=n(a(76530)),s={code:"fy",formatDistance:i.default,formatLong:r.default,formatRelative:o.default,localize:d.default,match:u.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=s,e.exports=t.default}}]);