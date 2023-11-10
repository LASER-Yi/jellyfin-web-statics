"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[75281,42490,72232,15995,68931,79829,22907,82563,5526,94891,73653,46879,94250,70053,69312,91867,38351,65737,34568,42796,73710,61791,78688,23945,80289,43821,5054,95671,74735],{42490:function(e,a,t){t(33096),Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=a.width?String(a.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}},e.exports=a.default},72232:function(e,a,t){t(33096),t(13227),t(81414),t(11431),Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a,t){var n;if("formatting"===(null!=t&&t.context?String(t.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,d=null!=t&&t.width?String(t.width):r;n=e.formattingValues[d]||e.formattingValues[r]}else{var i=e.defaultWidth,o=null!=t&&t.width?String(t.width):e.defaultWidth;n=e.values[o]||e.values[i]}return n[e.argumentCallback?e.argumentCallback(a):a]}},e.exports=a.default},15995:function(e,a,t){t(33096),t(59139),t(81597),t(88646),Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.width,r=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],d=a.match(r);if(!d)return null;var i,o=d[0],u=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(u)?function(e,a){for(var t=0;t<e.length;t++)if(e[t].test(o))return t}(u):function(e,a){for(var t in e)if(e.hasOwnProperty(t)&&e[t].test(o))return t}(u);return i=e.valueCallback?e.valueCallback(l):l,{value:i=t.valueCallback?t.valueCallback(i):i,rest:a.slice(o.length)}}},e.exports=a.default},68931:function(e,a,t){t(33096),t(59139),t(81597),t(88646),Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.match(e.matchPattern);if(!n)return null;var r=n[0],d=a.match(e.parsePattern);if(!d)return null;var i=e.valueCallback?e.valueCallback(d[0]):d[0];return{value:i=t.valueCallback?t.valueCallback(i):i,rest:a.slice(r.length)}}},e.exports=a.default},69312:function(e,a,t){t(33096),t(59139),t(86028),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={lessThanXSeconds:{one:"minder dan een seconde",other:"minder dan {{count}} seconden"},xSeconds:{one:"1 seconde",other:"{{count}} seconden"},halfAMinute:"een halve minuut",lessThanXMinutes:{one:"minder dan een minuut",other:"minder dan {{count}} minuten"},xMinutes:{one:"een minuut",other:"{{count}} minuten"},aboutXHours:{one:"ongeveer 1 uur",other:"ongeveer {{count}} uur"},xHours:{one:"1 uur",other:"{{count}} uur"},xDays:{one:"1 dag",other:"{{count}} dagen"},aboutXWeeks:{one:"ongeveer 1 week",other:"ongeveer {{count}} weken"},xWeeks:{one:"1 week",other:"{{count}} weken"},aboutXMonths:{one:"ongeveer 1 maand",other:"ongeveer {{count}} maanden"},xMonths:{one:"1 maand",other:"{{count}} maanden"},aboutXYears:{one:"ongeveer 1 jaar",other:"ongeveer {{count}} jaar"},xYears:{one:"1 jaar",other:"{{count}} jaar"},overXYears:{one:"meer dan 1 jaar",other:"meer dan {{count}} jaar"},almostXYears:{one:"bijna 1 jaar",other:"bijna {{count}} jaar"}};a.default=function(e,a,t){var r,d=n[e];return r="string"==typeof d?d:1===a?d.one:d.other.replace("{{count}}",String(a)),null!=t&&t.addSuffix?t.comparison&&t.comparison>0?"over "+r:r+" geleden":r},e.exports=a.default},91867:function(e,a,t){t(33096);var n=t(73203).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(42490)),d={date:(0,r.default)({formats:{full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"dd-MM-y"},defaultWidth:"full"}),time:(0,r.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,r.default)({formats:{full:"{{date}} 'om' {{time}}",long:"{{date}} 'om' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};a.default=d,e.exports=a.default},38351:function(e,a,t){t(33096),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={lastWeek:"'afgelopen' eeee 'om' p",yesterday:"'gisteren om' p",today:"'vandaag om' p",tomorrow:"'morgen om' p",nextWeek:"eeee 'om' p",other:"P"};a.default=function(e,a,t,r){return n[e]},e.exports=a.default},65737:function(e,a,t){t(33096),t(11908);var n=t(73203).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(72232)),d={ordinalNumber:function(e,a){return Number(e)+"e"},era:(0,r.default)({values:{narrow:["v.C.","n.C."],abbreviated:["v.Chr.","n.Chr."],wide:["voor Christus","na Christus"]},defaultWidth:"wide"}),quarter:(0,r.default)({values:{narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1e kwartaal","2e kwartaal","3e kwartaal","4e kwartaal"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,r.default)({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mrt.","apr.","mei","jun.","jul.","aug.","sep.","okt.","nov.","dec."],wide:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"]},defaultWidth:"wide"}),day:(0,r.default)({values:{narrow:["Z","M","D","W","D","V","Z"],short:["zo","ma","di","wo","do","vr","za"],abbreviated:["zon","maa","din","woe","don","vri","zat"],wide:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"]},defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:{narrow:{am:"AM",pm:"PM",midnight:"middernacht",noon:"het middaguur",morning:"'s ochtends",afternoon:"'s middags",evening:"'s avonds",night:"'s nachts"},abbreviated:{am:"AM",pm:"PM",midnight:"middernacht",noon:"het middaguur",morning:"'s ochtends",afternoon:"'s middags",evening:"'s avonds",night:"'s nachts"},wide:{am:"AM",pm:"PM",midnight:"middernacht",noon:"het middaguur",morning:"'s ochtends",afternoon:"'s middags",evening:"'s avonds",night:"'s nachts"}},defaultWidth:"wide"})};a.default=d,e.exports=a.default},34568:function(e,a,t){t(33096),t(54112);var n=t(73203).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(15995)),d={ordinalNumber:(0,n(t(68931)).default)({matchPattern:/^(\d+)e?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^([vn]\.? ?C\.?)/,abbreviated:/^([vn]\. ?Chr\.?)/,wide:/^((voor|na) Christus)/},defaultMatchWidth:"wide",parsePatterns:{any:[/^v/,/^n/]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^K[1234]/i,wide:/^[1234]e kwartaal/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,r.default)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan.|feb.|mrt.|apr.|mei|jun.|jul.|aug.|sep.|okt.|nov.|dec.)/i,wide:/^(januari|februari|maart|april|mei|juni|juli|augustus|september|oktober|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^jan/i,/^feb/i,/^m(r|a)/i,/^apr/i,/^mei/i,/^jun/i,/^jul/i,/^aug/i,/^sep/i,/^okt/i,/^nov/i,/^dec/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^[zmdwv]/i,short:/^(zo|ma|di|wo|do|vr|za)/i,abbreviated:/^(zon|maa|din|woe|don|vri|zat)/i,wide:/^(zondag|maandag|dinsdag|woensdag|donderdag|vrijdag|zaterdag)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^z/i,/^m/i,/^d/i,/^w/i,/^d/i,/^v/i,/^z/i],any:[/^zo/i,/^ma/i,/^di/i,/^wo/i,/^do/i,/^vr/i,/^za/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{any:/^(am|pm|middernacht|het middaguur|'s (ochtends|middags|avonds|nachts))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^am/i,pm:/^pm/i,midnight:/^middernacht/i,noon:/^het middaguur/i,morning:/ochtend/i,afternoon:/middag/i,evening:/avond/i,night:/nacht/i}},defaultParseWidth:"any"})};a.default=d,e.exports=a.default},75281:function(e,a,t){t(33096);var n=t(73203).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(69312)),d=n(t(91867)),i=n(t(38351)),o=n(t(65737)),u=n(t(34568)),l={code:"nl",formatDistance:r.default,formatLong:d.default,formatRelative:i.default,localize:o.default,match:u.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};a.default=l,e.exports=a.default}}]);