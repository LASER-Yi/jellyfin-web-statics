"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[45408,42490,72232,15995,68931,79829,22907,82563,5526,94891,73653,46879,94250,70053,42796,73710,61791,78688,23945,80289,43821,45024,89043,12816,35301,16499,5054,95671,74735],{42490:function(e,t,a){a(99785),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}},e.exports=t.default},72232:function(e,t,a){a(99785),a(5769),a(63238),a(14078),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var n;if("formatting"===(null!=a&&a.context?String(a.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,r=null!=a&&a.width?String(a.width):i;n=e.formattingValues[r]||e.formattingValues[i]}else{var o=e.defaultWidth,u=null!=a&&a.width?String(a.width):e.defaultWidth;n=e.values[u]||e.values[o]}return n[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},15995:function(e,t,a){a(99785),a(52077),a(1203),a(72410),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.width,i=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],r=t.match(i);if(!r)return null;var o,u=r[0],d=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(d)?function(e,t){for(var a=0;a<e.length;a++)if(e[a].test(u))return a}(d):function(e,t){for(var a in e)if(e.hasOwnProperty(a)&&e[a].test(u))return a}(d);return o=e.valueCallback?e.valueCallback(l):l,{value:o=a.valueCallback?a.valueCallback(o):o,rest:t.slice(u.length)}}},e.exports=t.default},68931:function(e,t,a){a(99785),a(52077),a(1203),a(72410),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(e.matchPattern);if(!n)return null;var i=n[0],r=t.match(e.parsePattern);if(!r)return null;var o=e.valueCallback?e.valueCallback(r[0]):r[0];return{value:o=a.valueCallback?a.valueCallback(o):o,rest:t.slice(i.length)}}},e.exports=t.default},45024:function(e,t,a){a(99785),a(52077),a(911),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={lessThanXSeconds:{one:"بىر سىكۇنت ئىچىدە",other:"سىكۇنت ئىچىدە {{count}}"},xSeconds:{one:"بىر سىكۇنت",other:"سىكۇنت {{count}}"},halfAMinute:"يىرىم مىنۇت",lessThanXMinutes:{one:"بىر مىنۇت ئىچىدە",other:"مىنۇت ئىچىدە {{count}}"},xMinutes:{one:"بىر مىنۇت",other:"مىنۇت {{count}}"},aboutXHours:{one:"تەخمىنەن بىر سائەت",other:"سائەت {{count}} تەخمىنەن"},xHours:{one:"بىر سائەت",other:"سائەت {{count}}"},xDays:{one:"بىر كۈن",other:"كۈن {{count}}"},aboutXWeeks:{one:"تەخمىنەن بىرھەپتە",other:"ھەپتە {{count}} تەخمىنەن"},xWeeks:{one:"بىرھەپتە",other:"ھەپتە {{count}}"},aboutXMonths:{one:"تەخمىنەن بىر ئاي",other:"ئاي {{count}} تەخمىنەن"},xMonths:{one:"بىر ئاي",other:"ئاي {{count}}"},aboutXYears:{one:"تەخمىنەن بىر يىل",other:"يىل {{count}} تەخمىنەن"},xYears:{one:"بىر يىل",other:"يىل {{count}}"},overXYears:{one:"بىر يىلدىن ئارتۇق",other:"يىلدىن ئارتۇق {{count}}"},almostXYears:{one:"ئاساسەن بىر يىل",other:"يىل {{count}} ئاساسەن"}};t.default=function(e,t,a){var i,r=n[e];return i="string"==typeof r?r:1===t?r.one:r.other.replace("{{count}}",String(t)),null!=a&&a.addSuffix?a.comparison&&a.comparison>0?i:i+" بولدى":i},e.exports=t.default},89043:function(e,t,a){a(99785),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,i=(n=a(42490))&&n.__esModule?n:{default:n},r={date:(0,i.default)({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:(0,i.default)({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:(0,i.default)({formats:{full:"{{date}} 'دە' {{time}}",long:"{{date}} 'دە' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};t.default=r,e.exports=t.default},12816:function(e,t,a){a(99785),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={lastWeek:"'ئ‍ۆتكەن' eeee 'دە' p",yesterday:"'تۈنۈگۈن دە' p",today:"'بۈگۈن دە' p",tomorrow:"'ئەتە دە' p",nextWeek:"eeee 'دە' p",other:"P"};t.default=function(e,t,a,i){return n[e]},e.exports=t.default},35301:function(e,t,a){a(99785),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,i=(n=a(72232))&&n.__esModule?n:{default:n},r={ordinalNumber:function(e,t){return String(e)},era:(0,i.default)({values:{narrow:["ب","ك"],abbreviated:["ب","ك"],wide:["مىيلادىدىن بۇرۇن","مىيلادىدىن كىيىن"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["1","2","3","4"],wide:["بىرىنجى چارەك","ئىككىنجى چارەك","ئۈچىنجى چارەك","تۆتىنجى چارەك"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,i.default)({values:{narrow:["ي","ف","م","ا","م","ى","ى","ا","س","ۆ","ن","د"],abbreviated:["يانۋار","فېۋىرال","مارت","ئاپرىل","ماي","ئىيۇن","ئىيول","ئاۋغۇست","سىنتەبىر","ئۆكتەبىر","نويابىر","دىكابىر"],wide:["يانۋار","فېۋىرال","مارت","ئاپرىل","ماي","ئىيۇن","ئىيول","ئاۋغۇست","سىنتەبىر","ئۆكتەبىر","نويابىر","دىكابىر"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["ي","د","س","چ","پ","ج","ش"],short:["ي","د","س","چ","پ","ج","ش"],abbreviated:["يەكشەنبە","دۈشەنبە","سەيشەنبە","چارشەنبە","پەيشەنبە","جۈمە","شەنبە"],wide:["يەكشەنبە","دۈشەنبە","سەيشەنبە","چارشەنبە","پەيشەنبە","جۈمە","شەنبە"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"ئە",pm:"چ",midnight:"ك",noon:"چ",morning:"ئەتىگەن",afternoon:"چۈشتىن كىيىن",evening:"ئاخشىم",night:"كىچە"},abbreviated:{am:"ئە",pm:"چ",midnight:"ك",noon:"چ",morning:"ئەتىگەن",afternoon:"چۈشتىن كىيىن",evening:"ئاخشىم",night:"كىچە"},wide:{am:"ئە",pm:"چ",midnight:"ك",noon:"چ",morning:"ئەتىگەن",afternoon:"چۈشتىن كىيىن",evening:"ئاخشىم",night:"كىچە"}},defaultWidth:"wide",formattingValues:{narrow:{am:"ئە",pm:"چ",midnight:"ك",noon:"چ",morning:"ئەتىگەندە",afternoon:"چۈشتىن كىيىن",evening:"ئاخشامدا",night:"كىچىدە"},abbreviated:{am:"ئە",pm:"چ",midnight:"ك",noon:"چ",morning:"ئەتىگەندە",afternoon:"چۈشتىن كىيىن",evening:"ئاخشامدا",night:"كىچىدە"},wide:{am:"ئە",pm:"چ",midnight:"ك",noon:"چ",morning:"ئەتىگەندە",afternoon:"چۈشتىن كىيىن",evening:"ئاخشامدا",night:"كىچىدە"}},defaultFormattingWidth:"wide"})};t.default=r,e.exports=t.default},16499:function(e,t,a){a(99785),a(32081),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(15995));function i(e){return e&&e.__esModule?e:{default:e}}var r={ordinalNumber:(0,i(a(68931)).default)({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,n.default)({matchPatterns:{narrow:/^(ب|ك)/i,wide:/^(مىيلادىدىن بۇرۇن|مىيلادىدىن كىيىن)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^بۇرۇن/i,/^كىيىن/i]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^چ[1234]/i,wide:/^چارەك [1234]/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,n.default)({matchPatterns:{narrow:/^[يفمئامئ‍ئاسۆند]/i,abbreviated:/^(يانۋار|فېۋىرال|مارت|ئاپرىل|ماي|ئىيۇن|ئىيول|ئاۋغۇست|سىنتەبىر|ئۆكتەبىر|نويابىر|دىكابىر)/i,wide:/^(يانۋار|فېۋىرال|مارت|ئاپرىل|ماي|ئىيۇن|ئىيول|ئاۋغۇست|سىنتەبىر|ئۆكتەبىر|نويابىر|دىكابىر)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^ي/i,/^ف/i,/^م/i,/^ا/i,/^م/i,/^ى‍/i,/^ى‍/i,/^ا‍/i,/^س/i,/^ۆ/i,/^ن/i,/^د/i],any:[/^يان/i,/^فېۋ/i,/^مار/i,/^ئاپ/i,/^ماي/i,/^ئىيۇن/i,/^ئىيول/i,/^ئاۋ/i,/^سىن/i,/^ئۆك/i,/^نوي/i,/^دىك/i]},defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:{narrow:/^[دسچپجشي]/i,short:/^(يە|دۈ|سە|چا|پە|جۈ|شە)/i,abbreviated:/^(يە|دۈ|سە|چا|پە|جۈ|شە)/i,wide:/^(يەكشەنبە|دۈشەنبە|سەيشەنبە|چارشەنبە|پەيشەنبە|جۈمە|شەنبە)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^ي/i,/^د/i,/^س/i,/^چ/i,/^پ/i,/^ج/i,/^ش/i],any:[/^ي/i,/^د/i,/^س/i,/^چ/i,/^پ/i,/^ج/i,/^ش/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{narrow:/^(ئە|چ|ك|چ|(دە|ئەتىگەن) ( ئە‍|چۈشتىن كىيىن|ئاخشىم|كىچە))/i,any:/^(ئە|چ|ك|چ|(دە|ئەتىگەن) ( ئە‍|چۈشتىن كىيىن|ئاخشىم|كىچە))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^ئە/i,pm:/^چ/i,midnight:/^ك/i,noon:/^چ/i,morning:/ئەتىگەن/i,afternoon:/چۈشتىن كىيىن/i,evening:/ئاخشىم/i,night:/كىچە/i}},defaultParseWidth:"any"})};t.default=r,e.exports=t.default},45408:function(e,t,a){a(99785),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(a(45024)),i=d(a(89043)),r=d(a(12816)),o=d(a(35301)),u=d(a(16499));function d(e){return e&&e.__esModule?e:{default:e}}var l={code:"ug",formatDistance:n.default,formatLong:i.default,formatRelative:r.default,localize:o.default,match:u.default,options:{weekStartsOn:0,firstWeekContainsDate:1}};t.default=l,e.exports=t.default}}]);