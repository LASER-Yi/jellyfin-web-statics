"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[94170,42490,72232,15995,68931,79829,22907,82563,5526,94891,73653,15763,30012,452,63947,38781,46879,10156,94250,70053,70999,42796,71097,73710,61791,76797,78688,23945,80289,43821,5054,95671,74735],{42490:function(e,t,a){a(33096),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}},e.exports=t.default},72232:function(e,t,a){a(33096),a(13227),a(81414),a(11431),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var n;if("formatting"===(null!=a&&a.context?String(a.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=null!=a&&a.width?String(a.width):i;n=e.formattingValues[o]||e.formattingValues[i]}else{var r=e.defaultWidth,d=null!=a&&a.width?String(a.width):e.defaultWidth;n=e.values[d]||e.values[r]}return n[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},15995:function(e,t,a){a(33096),a(59139),a(81597),a(88646),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.width,i=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],o=t.match(i);if(!o)return null;var r,d=o[0],u=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(u)?function(e,t){for(var a=0;a<e.length;a++)if(e[a].test(d))return a}(u):function(e,t){for(var a in e)if(e.hasOwnProperty(a)&&e[a].test(d))return a}(u);return r=e.valueCallback?e.valueCallback(l):l,{value:r=a.valueCallback?a.valueCallback(r):r,rest:t.slice(d.length)}}},e.exports=t.default},68931:function(e,t,a){a(33096),a(59139),a(81597),a(88646),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(e.matchPattern);if(!n)return null;var i=n[0],o=t.match(e.parsePattern);if(!o)return null;var r=e.valueCallback?e.valueCallback(o[0]):o[0];return{value:r=a.valueCallback?a.valueCallback(r):r,rest:t.slice(i.length)}}},e.exports=t.default},15763:function(e,t,a){a(33096);var n=a(73203).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(42490)),o={date:(0,i.default)({formats:{full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"dd.MM.y"},defaultWidth:"full"}),time:(0,i.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,i.default)({formats:{full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};t.default=o,e.exports=t.default},46236:function(e,t,a){a(33096);var n=a(73203).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(30012)),o=n(a(90847)),r=n(a(63947)),d=n(a(38781)),u=n(a(15763)),l={code:"it-CH",formatDistance:i.default,formatLong:u.default,formatRelative:o.default,localize:r.default,match:d.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=l,e.exports=t.default},30012:function(e,t,a){a(33096),a(59139),a(86028),a(81414),a(54134),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={lessThanXSeconds:{one:"meno di un secondo",other:"meno di {{count}} secondi"},xSeconds:{one:"un secondo",other:"{{count}} secondi"},halfAMinute:"alcuni secondi",lessThanXMinutes:{one:"meno di un minuto",other:"meno di {{count}} minuti"},xMinutes:{one:"un minuto",other:"{{count}} minuti"},aboutXHours:{one:"circa un'ora",other:"circa {{count}} ore"},xHours:{one:"un'ora",other:"{{count}} ore"},xDays:{one:"un giorno",other:"{{count}} giorni"},aboutXWeeks:{one:"circa una settimana",other:"circa {{count}} settimane"},xWeeks:{one:"una settimana",other:"{{count}} settimane"},aboutXMonths:{one:"circa un mese",other:"circa {{count}} mesi"},xMonths:{one:"un mese",other:"{{count}} mesi"},aboutXYears:{one:"circa un anno",other:"circa {{count}} anni"},xYears:{one:"un anno",other:"{{count}} anni"},overXYears:{one:"più di un anno",other:"più di {{count}} anni"},almostXYears:{one:"quasi un anno",other:"quasi {{count}} anni"}};t.default=function(e,t,a){var i,o=n[e];return i="string"==typeof o?o:1===t?o.one:o.other.replace("{{count}}",t.toString()),null!=a&&a.addSuffix?a.comparison&&a.comparison>0?"tra "+i:i+" fa":i},e.exports=t.default},90847:function(e,t,a){a(33096);var n=a(73203).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(42298)),o=["domenica","lunedì","martedì","mercoledì","giovedì","venerdì","sabato"];function r(e){return"'"+o[e]+" alle' p"}var d={lastWeek:function(e,t,a){var n=e.getUTCDay();return(0,i.default)(e,t,a)?r(n):function(e){return 0===e?"'domenica scorsa alle' p":"'"+o[e]+" scorso alle' p"}(n)},yesterday:"'ieri alle' p",today:"'oggi alle' p",tomorrow:"'domani alle' p",nextWeek:function(e,t,a){var n=e.getUTCDay();return(0,i.default)(e,t,a)?r(n):function(e){return 0===e?"'domenica prossima alle' p":"'"+o[e]+" prossimo alle' p"}(n)},other:"P"};t.default=function(e,t,a,n){var i=d[e];return"function"==typeof i?i(t,a,n):i},e.exports=t.default},63947:function(e,t,a){a(33096),a(11908);var n=a(73203).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(72232)),o={ordinalNumber:function(e,t){var a=Number(e);return String(a)},era:(0,i.default)({values:{narrow:["aC","dC"],abbreviated:["a.C.","d.C."],wide:["avanti Cristo","dopo Cristo"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1º trimestre","2º trimestre","3º trimestre","4º trimestre"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,i.default)({values:{narrow:["G","F","M","A","M","G","L","A","S","O","N","D"],abbreviated:["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"],wide:["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["D","L","M","M","G","V","S"],short:["dom","lun","mar","mer","gio","ven","sab"],abbreviated:["dom","lun","mar","mer","gio","ven","sab"],wide:["domenica","lunedì","martedì","mercoledì","giovedì","venerdì","sabato"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"m.",pm:"p.",midnight:"mezzanotte",noon:"mezzogiorno",morning:"mattina",afternoon:"pomeriggio",evening:"sera",night:"notte"},abbreviated:{am:"AM",pm:"PM",midnight:"mezzanotte",noon:"mezzogiorno",morning:"mattina",afternoon:"pomeriggio",evening:"sera",night:"notte"},wide:{am:"AM",pm:"PM",midnight:"mezzanotte",noon:"mezzogiorno",morning:"mattina",afternoon:"pomeriggio",evening:"sera",night:"notte"}},defaultWidth:"wide",formattingValues:{narrow:{am:"m.",pm:"p.",midnight:"mezzanotte",noon:"mezzogiorno",morning:"di mattina",afternoon:"del pomeriggio",evening:"di sera",night:"di notte"},abbreviated:{am:"AM",pm:"PM",midnight:"mezzanotte",noon:"mezzogiorno",morning:"di mattina",afternoon:"del pomeriggio",evening:"di sera",night:"di notte"},wide:{am:"AM",pm:"PM",midnight:"mezzanotte",noon:"mezzogiorno",morning:"di mattina",afternoon:"del pomeriggio",evening:"di sera",night:"di notte"}},defaultFormattingWidth:"wide"})};t.default=o,e.exports=t.default},38781:function(e,t,a){a(33096),a(54112);var n=a(73203).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(15995)),o={ordinalNumber:(0,n(a(68931)).default)({matchPattern:/^(\d+)(º)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,i.default)({matchPatterns:{narrow:/^(aC|dC)/i,abbreviated:/^(a\.?\s?C\.?|a\.?\s?e\.?\s?v\.?|d\.?\s?C\.?|e\.?\s?v\.?)/i,wide:/^(avanti Cristo|avanti Era Volgare|dopo Cristo|Era Volgare)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^a/i,/^(d|e)/i]},defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^t[1234]/i,wide:/^[1234](º)? trimestre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,i.default)({matchPatterns:{narrow:/^[gfmalsond]/i,abbreviated:/^(gen|feb|mar|apr|mag|giu|lug|ago|set|ott|nov|dic)/i,wide:/^(gennaio|febbraio|marzo|aprile|maggio|giugno|luglio|agosto|settembre|ottobre|novembre|dicembre)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^g/i,/^f/i,/^m/i,/^a/i,/^m/i,/^g/i,/^l/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ge/i,/^f/i,/^mar/i,/^ap/i,/^mag/i,/^gi/i,/^l/i,/^ag/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:{narrow:/^[dlmgvs]/i,short:/^(do|lu|ma|me|gi|ve|sa)/i,abbreviated:/^(dom|lun|mar|mer|gio|ven|sab)/i,wide:/^(domenica|luned[i|ì]|marted[i|ì]|mercoled[i|ì]|gioved[i|ì]|venerd[i|ì]|sabato)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^g/i,/^v/i,/^s/i],any:[/^d/i,/^l/i,/^ma/i,/^me/i,/^g/i,/^v/i,/^s/i]},defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:{narrow:/^(a|m\.|p|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i,any:/^([ap]\.?\s?m\.?|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mezza/i,noon:/^mezzo/i,morning:/mattina/i,afternoon:/pomeriggio/i,evening:/sera/i,night:/notte/i}},defaultParseWidth:"any"})};t.default=o,e.exports=t.default},10156:function(e,t,a){a(33096),a(81414),a(54134);var n=a(73203).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,o.default)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===(0,i.default)(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))};var i=n(a(7501)),o=n(a(76525));e.exports=t.default}}]);