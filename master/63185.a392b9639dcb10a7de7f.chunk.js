(self.webpackChunk=self.webpackChunk||[]).push([[63185,42490,72232,15995,68931,6217,69051,53374,4033,8705,96595,55456,24125,66097,31696,45293,38664,13298,63712,61825,46664,27984,4302,7671,54802,80341,1727,24749,98703],{42490:function(t,e,a){"use strict";a(99785),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.width?String(e.width):t.defaultWidth;return t.formats[a]||t.formats[t.defaultWidth]}},t.exports=e.default},72232:function(t,e,a){"use strict";a(99785),a(5769),a(63238),a(14078),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e,a){var n;if("formatting"===(null!=a&&a.context?String(a.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,r=null!=a&&a.width?String(a.width):i;n=t.formattingValues[r]||t.formattingValues[i]}else{var u=t.defaultWidth,d=null!=a&&a.width?String(a.width):t.defaultWidth;n=t.values[d]||t.values[u]}return n[t.argumentCallback?t.argumentCallback(e):e]}},t.exports=e.default},15995:function(t,e,a){"use strict";a(99785),a(52077),a(1203),a(72410),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.width,i=n&&t.matchPatterns[n]||t.matchPatterns[t.defaultMatchWidth],r=e.match(i);if(!r)return null;var u,d=r[0],o=n&&t.parsePatterns[n]||t.parsePatterns[t.defaultParseWidth],l=Array.isArray(o)?function(t,e){for(var a=0;a<t.length;a++)if(t[a].test(d))return a}(o):function(t,e){for(var a in t)if(t.hasOwnProperty(a)&&t[a].test(d))return a}(o);return u=t.valueCallback?t.valueCallback(l):l,{value:u=a.valueCallback?a.valueCallback(u):u,rest:e.slice(d.length)}}},t.exports=e.default},68931:function(t,e,a){"use strict";a(99785),a(52077),a(1203),a(72410),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(t.matchPattern);if(!n)return null;var i=n[0],r=e.match(t.parsePattern);if(!r)return null;var u=t.valueCallback?t.valueCallback(r[0]):r[0];return{value:u=a.valueCallback?a.valueCallback(u):u,rest:e.slice(i.length)}}},t.exports=e.default},31696:function(t,e,a){"use strict";a(99785),a(52077),a(911),a(63238),a(40895),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={lessThanXSeconds:"តិចជាង {{count}} វិនាទី",xSeconds:"{{count}} វិនាទី",halfAMinute:"កន្លះនាទី",lessThanXMinutes:"តិចជាង {{count}} នាទី",xMinutes:"{{count}} នាទី",aboutXHours:"ប្រហែល {{count}} ម៉ោង",xHours:"{{count}} ម៉ោង",xDays:"{{count}} ថ្ងៃ",aboutXWeeks:"ប្រហែល {{count}} សប្តាហ៍",xWeeks:"{{count}} សប្តាហ៍",aboutXMonths:"ប្រហែល {{count}} ខែ",xMonths:"{{count}} ខែ",aboutXYears:"ប្រហែល {{count}} ឆ្នាំ",xYears:"{{count}} ឆ្នាំ",overXYears:"ជាង {{count}} ឆ្នាំ",almostXYears:"ជិត {{count}} ឆ្នាំ"};e.default=function(t,e,a){var i=n[t];return"number"==typeof e&&(i=i.replace("{{count}}",e.toString())),null!=a&&a.addSuffix?a.comparison&&a.comparison>0?"ក្នុងរយៈពេល "+i:i+"មុន":i},t.exports=e.default},45293:function(t,e,a){"use strict";a(99785);var n=a(73203).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a(42490)),r={date:(0,i.default)({formats:{full:"EEEE do MMMM y",long:"do MMMM y",medium:"d MMM y",short:"dd/MM/yyyy"},defaultWidth:"full"}),time:(0,i.default)({formats:{full:"h:mm:ss a",long:"h:mm:ss a",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:(0,i.default)({formats:{full:"{{date}} 'ម៉ោង' {{time}}",long:"{{date}} 'ម៉ោង' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};e.default=r,t.exports=e.default},38664:function(t,e,a){"use strict";a(99785),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={lastWeek:"'ថ្ងៃ'eeee'ស​ប្តា​ហ៍​មុនម៉ោង' p",yesterday:"'ម្សិលមិញនៅម៉ោង' p",today:"'ថ្ងៃនេះម៉ោង' p",tomorrow:"'ថ្ងៃស្អែកម៉ោង' p",nextWeek:"'ថ្ងៃ'eeee'ស​ប្តា​ហ៍​ក្រោយម៉ោង' p",other:"P"};e.default=function(t,e,a,i){return n[t]},t.exports=e.default},13298:function(t,e,a){"use strict";a(99785),a(95163),a(63238),a(40895);var n=a(73203).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a(72232)),r={ordinalNumber:function(t,e){return Number(t).toString()},era:(0,i.default)({values:{narrow:["ម.គស","គស"],abbreviated:["មុនគ.ស","គ.ស"],wide:["មុនគ្រិស្តសករាជ","នៃគ្រិស្តសករាជ"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["ត្រីមាសទី 1","ត្រីមាសទី 2","ត្រីមាសទី 3","ត្រីមាសទី 4"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:(0,i.default)({values:{narrow:["ម.ក","ក.ម","មិ","ម.ស","ឧ.ស","ម.ថ","ក.ដ","សី","កញ","តុ","វិ","ធ"],abbreviated:["មករា","កុម្ភៈ","មីនា","មេសា","ឧសភា","មិថុនា","កក្កដា","សីហា","កញ្ញា","តុលា","វិច្ឆិកា","ធ្នូ"],wide:["មករា","កុម្ភៈ","មីនា","មេសា","ឧសភា","មិថុនា","កក្កដា","សីហា","កញ្ញា","តុលា","វិច្ឆិកា","ធ្នូ"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["អា","ច","អ","ព","ព្រ","សុ","ស"],short:["អា","ច","អ","ព","ព្រ","សុ","ស"],abbreviated:["អា","ច","អ","ព","ព្រ","សុ","ស"],wide:["អាទិត្យ","ចន្ទ","អង្គារ","ពុធ","ព្រហស្បតិ៍","សុក្រ","សៅរ៍"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"ព្រឹក",pm:"ល្ងាច",midnight:"​ពេលកណ្ដាលអធ្រាត្រ",noon:"ពេលថ្ងៃត្រង់",morning:"ពេលព្រឹក",afternoon:"ពេលរសៀល",evening:"ពេលល្ងាច",night:"ពេលយប់"},abbreviated:{am:"ព្រឹក",pm:"ល្ងាច",midnight:"​ពេលកណ្ដាលអធ្រាត្រ",noon:"ពេលថ្ងៃត្រង់",morning:"ពេលព្រឹក",afternoon:"ពេលរសៀល",evening:"ពេលល្ងាច",night:"ពេលយប់"},wide:{am:"ព្រឹក",pm:"ល្ងាច",midnight:"​ពេលកណ្ដាលអធ្រាត្រ",noon:"ពេលថ្ងៃត្រង់",morning:"ពេលព្រឹក",afternoon:"ពេលរសៀល",evening:"ពេលល្ងាច",night:"ពេលយប់"}},defaultWidth:"wide",formattingValues:{narrow:{am:"ព្រឹក",pm:"ល្ងាច",midnight:"​ពេលកណ្ដាលអធ្រាត្រ",noon:"ពេលថ្ងៃត្រង់",morning:"ពេលព្រឹក",afternoon:"ពេលរសៀល",evening:"ពេលល្ងាច",night:"ពេលយប់"},abbreviated:{am:"ព្រឹក",pm:"ល្ងាច",midnight:"​ពេលកណ្ដាលអធ្រាត្រ",noon:"ពេលថ្ងៃត្រង់",morning:"ពេលព្រឹក",afternoon:"ពេលរសៀល",evening:"ពេលល្ងាច",night:"ពេលយប់"},wide:{am:"ព្រឹក",pm:"ល្ងាច",midnight:"​ពេលកណ្ដាលអធ្រាត្រ",noon:"ពេលថ្ងៃត្រង់",morning:"ពេលព្រឹក",afternoon:"ពេលរសៀល",evening:"ពេលល្ងាច",night:"ពេលយប់"}},defaultFormattingWidth:"wide"})};e.default=r,t.exports=e.default},63712:function(t,e,a){"use strict";a(99785),a(32081);var n=a(73203).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a(15995)),r={ordinalNumber:(0,n(a(68931)).default)({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}}),era:(0,i.default)({matchPatterns:{narrow:/^(ម\.)?គស/i,abbreviated:/^(មុន)?គ\.ស/i,wide:/^(មុន|នៃ)គ្រិស្តសករាជ/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^(ម|មុន)គ\.?ស/i,/^(នៃ)?គ\.?ស/i]},defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^(ត្រីមាស)(ទី)?\s?[1234]/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:(0,i.default)({matchPatterns:{narrow:/^(ម\.ក|ក\.ម|មិ|ម\.ស|ឧ\.ស|ម\.ថ|ក\.ដ|សី|កញ|តុ|វិ|ធ)/i,abbreviated:/^(មករា|កុម្ភៈ|មីនា|មេសា|ឧសភា|មិថុនា|កក្កដា|សីហា|កញ្ញា|តុលា|វិច្ឆិកា|ធ្នូ)/i,wide:/^(មករា|កុម្ភៈ|មីនា|មេសា|ឧសភា|មិថុនា|កក្កដា|សីហា|កញ្ញា|តុលា|វិច្ឆិកា|ធ្នូ)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^ម\.ក/i,/^ក\.ម/i,/^មិ/i,/^ម\.ស/i,/^ឧ\.ស/i,/^ម\.ថ/i,/^ក\.ដ/i,/^សី/i,/^កញ/i,/^តុ/i,/^វិ/i,/^ធ/i],any:[/^មក/i,/^កុ/i,/^មីន/i,/^មេ/i,/^ឧស/i,/^មិថ/i,/^កក/i,/^សី/i,/^កញ/i,/^តុ/i,/^វិច/i,/^ធ/i]},defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:{narrow:/^(អា|ច|អ|ព|ព្រ|សុ|ស)/i,short:/^(អា|ច|អ|ព|ព្រ|សុ|ស)/i,abbreviated:/^(អា|ច|អ|ព|ព្រ|សុ|ស)/i,wide:/^(អាទិត្យ|ចន្ទ|អង្គារ|ពុធ|ព្រហស្បតិ៍|សុក្រ|សៅរ៍)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^អា/i,/^ច/i,/^អ/i,/^ព/i,/^ព្រ/i,/^សុ/i,/^ស/i],any:[/^អា/i,/^ច/i,/^អ/i,/^ព/i,/^ព្រ/i,/^សុ/i,/^សៅ/i]},defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:{narrow:/^(ព្រឹក|ល្ងាច|ពេលព្រឹក|ពេលថ្ងៃត្រង់|ពេលល្ងាច|ពេលរសៀល|ពេលយប់|ពេលកណ្ដាលអធ្រាត្រ)/i,any:/^(ព្រឹក|ល្ងាច|ពេលព្រឹក|ពេលថ្ងៃត្រង់|ពេលល្ងាច|ពេលរសៀល|ពេលយប់|ពេលកណ្ដាលអធ្រាត្រ)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^ព្រឹក/i,pm:/^ល្ងាច/i,midnight:/^ពេលកណ្ដាលអធ្រាត្រ/i,noon:/^ពេលថ្ងៃត្រង់/i,morning:/ពេលព្រឹក/i,afternoon:/ពេលរសៀល/i,evening:/ពេលល្ងាច/i,night:/ពេលយប់/i}},defaultParseWidth:"any"})};e.default=r,t.exports=e.default},63185:function(t,e,a){"use strict";a(99785);var n=a(73203).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a(31696)),r=n(a(45293)),u=n(a(38664)),d=n(a(13298)),o=n(a(63712)),l={code:"km",formatDistance:i.default,formatLong:r.default,formatRelative:u.default,localize:d.default,match:o.default,options:{weekStartsOn:0,firstWeekContainsDate:1}};e.default=l,t.exports=e.default},73203:function(t){t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.__esModule=!0,t.exports.default=t.exports}}]);