"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[80419,42490,72232,15995,68931,79829,22907,82563,5526,94891,73653,46879,94250,70053,42796,73710,61791,78688,23945,80289,43821,29232,38976,67523,80751,22e3,5054,95671,74735],{42490:function(a,e,t){t(33096),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.width?String(e.width):a.defaultWidth;return a.formats[t]||a.formats[a.defaultWidth]}},a.exports=e.default},72232:function(a,e,t){t(33096),t(13227),t(81414),t(11431),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e,t){var n;if("formatting"===(null!=t&&t.context?String(t.context):"standalone")&&a.formattingValues){var i=a.defaultFormattingWidth||a.defaultWidth,r=null!=t&&t.width?String(t.width):i;n=a.formattingValues[r]||a.formattingValues[i]}else{var l=a.defaultWidth,o=null!=t&&t.width?String(t.width):a.defaultWidth;n=a.values[o]||a.values[l]}return n[a.argumentCallback?a.argumentCallback(e):e]}},a.exports=e.default},15995:function(a,e,t){t(33096),t(59139),t(81597),t(88646),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.width,i=n&&a.matchPatterns[n]||a.matchPatterns[a.defaultMatchWidth],r=e.match(i);if(!r)return null;var l,o=r[0],u=n&&a.parsePatterns[n]||a.parsePatterns[a.defaultParseWidth],d=Array.isArray(u)?function(a,e){for(var t=0;t<a.length;t++)if(a[t].test(o))return t}(u):function(a,e){for(var t in a)if(a.hasOwnProperty(t)&&a[t].test(o))return t}(u);return l=a.valueCallback?a.valueCallback(d):d,{value:l=t.valueCallback?t.valueCallback(l):l,rest:e.slice(o.length)}}},a.exports=e.default},68931:function(a,e,t){t(33096),t(59139),t(81597),t(88646),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(a.matchPattern);if(!n)return null;var i=n[0],r=e.match(a.parsePattern);if(!r)return null;var l=a.valueCallback?a.valueCallback(r[0]):r[0];return{value:l=t.valueCallback?t.valueCallback(l):l,rest:e.slice(i.length)}}},a.exports=e.default},29232:function(a,e,t){t(33096),t(59139),t(86028),t(81414),t(54134),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={lessThanXSeconds:{one:"bir saniyeden az",other:"{{count}} saniyeden az"},xSeconds:{one:"1 saniye",other:"{{count}} saniye"},halfAMinute:"yarım dakika",lessThanXMinutes:{one:"bir dakikadan az",other:"{{count}} dakikadan az"},xMinutes:{one:"1 dakika",other:"{{count}} dakika"},aboutXHours:{one:"yaklaşık 1 saat",other:"yaklaşık {{count}} saat"},xHours:{one:"1 saat",other:"{{count}} saat"},xDays:{one:"1 gün",other:"{{count}} gün"},aboutXWeeks:{one:"yaklaşık 1 hafta",other:"yaklaşık {{count}} hafta"},xWeeks:{one:"1 hafta",other:"{{count}} hafta"},aboutXMonths:{one:"yaklaşık 1 ay",other:"yaklaşık {{count}} ay"},xMonths:{one:"1 ay",other:"{{count}} ay"},aboutXYears:{one:"yaklaşık 1 yıl",other:"yaklaşık {{count}} yıl"},xYears:{one:"1 yıl",other:"{{count}} yıl"},overXYears:{one:"1 yıldan fazla",other:"{{count}} yıldan fazla"},almostXYears:{one:"neredeyse 1 yıl",other:"neredeyse {{count}} yıl"}};e.default=function(a,e,t){var i,r=n[a];return i="string"==typeof r?r:1===e?r.one:r.other.replace("{{count}}",e.toString()),null!=t&&t.addSuffix?t.comparison&&t.comparison>0?i+" sonra":i+" önce":i},a.exports=e.default},38976:function(a,e,t){t(33096);var n=t(73203).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(t(42490)),r={date:(0,i.default)({formats:{full:"d MMMM y EEEE",long:"d MMMM y",medium:"d MMM y",short:"dd.MM.yyyy"},defaultWidth:"full"}),time:(0,i.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,i.default)({formats:{full:"{{date}} 'saat' {{time}}",long:"{{date}} 'saat' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};e.default=r,a.exports=e.default},67523:function(a,e,t){t(33096),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={lastWeek:"'geçen hafta' eeee 'saat' p",yesterday:"'dün saat' p",today:"'bugün saat' p",tomorrow:"'yarın saat' p",nextWeek:"eeee 'saat' p",other:"P"};e.default=function(a,e,t,i){return n[a]},a.exports=e.default},80751:function(a,e,t){t(33096),t(11908);var n=t(73203).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(t(72232)),r={ordinalNumber:function(a,e){return Number(a)+"."},era:(0,i.default)({values:{narrow:["MÖ","MS"],abbreviated:["MÖ","MS"],wide:["Milattan Önce","Milattan Sonra"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["1Ç","2Ç","3Ç","4Ç"],wide:["İlk çeyrek","İkinci Çeyrek","Üçüncü çeyrek","Son çeyrek"]},defaultWidth:"wide",argumentCallback:function(a){return Number(a)-1}}),month:(0,i.default)({values:{narrow:["O","Ş","M","N","M","H","T","A","E","E","K","A"],abbreviated:["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara"],wide:["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["P","P","S","Ç","P","C","C"],short:["Pz","Pt","Sa","Ça","Pe","Cu","Ct"],abbreviated:["Paz","Pzt","Sal","Çar","Per","Cum","Cts"],wide:["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"öö",pm:"ös",midnight:"gy",noon:"ö",morning:"sa",afternoon:"ös",evening:"ak",night:"ge"},abbreviated:{am:"ÖÖ",pm:"ÖS",midnight:"gece yarısı",noon:"öğle",morning:"sabah",afternoon:"öğleden sonra",evening:"akşam",night:"gece"},wide:{am:"Ö.Ö.",pm:"Ö.S.",midnight:"gece yarısı",noon:"öğle",morning:"sabah",afternoon:"öğleden sonra",evening:"akşam",night:"gece"}},defaultWidth:"wide",formattingValues:{narrow:{am:"öö",pm:"ös",midnight:"gy",noon:"ö",morning:"sa",afternoon:"ös",evening:"ak",night:"ge"},abbreviated:{am:"ÖÖ",pm:"ÖS",midnight:"gece yarısı",noon:"öğlen",morning:"sabahleyin",afternoon:"öğleden sonra",evening:"akşamleyin",night:"geceleyin"},wide:{am:"ö.ö.",pm:"ö.s.",midnight:"gece yarısı",noon:"öğlen",morning:"sabahleyin",afternoon:"öğleden sonra",evening:"akşamleyin",night:"geceleyin"}},defaultFormattingWidth:"wide"})};e.default=r,a.exports=e.default},22e3:function(a,e,t){t(33096),t(54112);var n=t(73203).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(t(15995)),r={ordinalNumber:(0,n(t(68931)).default)({matchPattern:/^(\d+)(\.)?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:(0,i.default)({matchPatterns:{narrow:/^(mö|ms)/i,abbreviated:/^(mö|ms)/i,wide:/^(milattan önce|milattan sonra)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/(^mö|^milattan önce)/i,/(^ms|^milattan sonra)/i]},defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234]ç/i,wide:/^((i|İ)lk|(i|İ)kinci|üçüncü|son) çeyrek/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i],abbreviated:[/1ç/i,/2ç/i,/3ç/i,/4ç/i],wide:[/^(i|İ)lk çeyrek/i,/(i|İ)kinci çeyrek/i,/üçüncü çeyrek/i,/son çeyrek/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,i.default)({matchPatterns:{narrow:/^[oşmnhtaek]/i,abbreviated:/^(oca|şub|mar|nis|may|haz|tem|ağu|eyl|eki|kas|ara)/i,wide:/^(ocak|şubat|mart|nisan|mayıs|haziran|temmuz|ağustos|eylül|ekim|kasım|aralık)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^o/i,/^ş/i,/^m/i,/^n/i,/^m/i,/^h/i,/^t/i,/^a/i,/^e/i,/^e/i,/^k/i,/^a/i],any:[/^o/i,/^ş/i,/^mar/i,/^n/i,/^may/i,/^h/i,/^t/i,/^ağ/i,/^ey/i,/^ek/i,/^k/i,/^ar/i]},defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:{narrow:/^[psçc]/i,short:/^(pz|pt|sa|ça|pe|cu|ct)/i,abbreviated:/^(paz|pzt|sal|çar|per|cum|cts)/i,wide:/^(pazar(?!tesi)|pazartesi|salı|çarşamba|perşembe|cuma(?!rtesi)|cumartesi)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^p/i,/^p/i,/^s/i,/^ç/i,/^p/i,/^c/i,/^c/i],any:[/^pz/i,/^pt/i,/^sa/i,/^ça/i,/^pe/i,/^cu/i,/^ct/i],wide:[/^pazar(?!tesi)/i,/^pazartesi/i,/^salı/i,/^çarşamba/i,/^perşembe/i,/^cuma(?!rtesi)/i,/^cumartesi/i]},defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:{narrow:/^(öö|ös|gy|ö|sa|ös|ak|ge)/i,any:/^(ö\.?\s?[ös]\.?|öğleden sonra|gece yarısı|öğle|(sabah|öğ|akşam|gece)(leyin))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^ö\.?ö\.?/i,pm:/^ö\.?s\.?/i,midnight:/^(gy|gece yarısı)/i,noon:/^öğ/i,morning:/^sa/i,afternoon:/^öğleden sonra/i,evening:/^ak/i,night:/^ge/i}},defaultParseWidth:"any"})};e.default=r,a.exports=e.default},80419:function(a,e,t){t(33096);var n=t(73203).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(t(29232)),r=n(t(38976)),l=n(t(67523)),o=n(t(80751)),u=n(t(22e3)),d={code:"tr",formatDistance:i.default,formatLong:r.default,formatRelative:l.default,localize:o.default,match:u.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};e.default=d,a.exports=e.default}}]);