(self.webpackChunk=self.webpackChunk||[]).push([[38454,72232,69051,8705,32540,24125,46664,7671,24749],{72232:function(e,n,t){"use strict";t(99785),t(5769),t(63238),t(14078),Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return function(n,t){var o;if("formatting"===(null!=t&&t.context?String(t.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,a=null!=t&&t.width?String(t.width):r;o=e.formattingValues[a]||e.formattingValues[r]}else{var u=e.defaultWidth,i=null!=t&&t.width?String(t.width):e.defaultWidth;o=e.values[i]||e.values[u]}return o[e.argumentCallback?e.argumentCallback(n):n]}},e.exports=n.default},38454:function(e,n,t){"use strict";t(99785),t(52077),t(911),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=t(32540),r={lessThanXSeconds:{one:"१ सेकंड से कम",other:"{{count}} सेकंड से कम"},xSeconds:{one:"१ सेकंड",other:"{{count}} सेकंड"},halfAMinute:"आधा मिनट",lessThanXMinutes:{one:"१ मिनट से कम",other:"{{count}} मिनट से कम"},xMinutes:{one:"१ मिनट",other:"{{count}} मिनट"},aboutXHours:{one:"लगभग १ घंटा",other:"लगभग {{count}} घंटे"},xHours:{one:"१ घंटा",other:"{{count}} घंटे"},xDays:{one:"१ दिन",other:"{{count}} दिन"},aboutXWeeks:{one:"लगभग १ सप्ताह",other:"लगभग {{count}} सप्ताह"},xWeeks:{one:"१ सप्ताह",other:"{{count}} सप्ताह"},aboutXMonths:{one:"लगभग १ महीना",other:"लगभग {{count}} महीने"},xMonths:{one:"१ महीना",other:"{{count}} महीने"},aboutXYears:{one:"लगभग १ वर्ष",other:"लगभग {{count}} वर्ष"},xYears:{one:"१ वर्ष",other:"{{count}} वर्ष"},overXYears:{one:"१ वर्ष से अधिक",other:"{{count}} वर्ष से अधिक"},almostXYears:{one:"लगभग १ वर्ष",other:"लगभग {{count}} वर्ष"}};n.default=function(e,n,t){var a,u=r[e];return a="string"==typeof u?u:1===n?u.one:u.other.replace("{{count}}",(0,o.numberToLocale)(n)),null!=t&&t.addSuffix?t.comparison&&t.comparison>0?a+"मे ":a+" पहले":a},e.exports=n.default},32540:function(e,n,t){"use strict";t(99785),t(95163),t(52077),t(911),t(63238),t(40895);var o=t(73203).default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,n.localeToNumber=function(e){var n=e.toString().replace(/[१२३४५६७८९०]/g,(function(e){return a.number[e]}));return Number(n)},n.numberToLocale=u;var r=o(t(72232)),a={locale:{1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"},number:{"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"}};function u(e){return e.toString().replace(/\d/g,(function(e){return a.locale[e]}))}var i={ordinalNumber:function(e,n){return u(Number(e))},era:(0,r.default)({values:{narrow:["ईसा-पूर्व","ईस्वी"],abbreviated:["ईसा-पूर्व","ईस्वी"],wide:["ईसा-पूर्व","ईसवी सन"]},defaultWidth:"wide"}),quarter:(0,r.default)({values:{narrow:["1","2","3","4"],abbreviated:["ति1","ति2","ति3","ति4"],wide:["पहली तिमाही","दूसरी तिमाही","तीसरी तिमाही","चौथी तिमाही"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,r.default)({values:{narrow:["ज","फ़","मा","अ","मई","जू","जु","अग","सि","अक्टू","न","दि"],abbreviated:["जन","फ़र","मार्च","अप्रैल","मई","जून","जुल","अग","सित","अक्टू","नव","दिस"],wide:["जनवरी","फ़रवरी","मार्च","अप्रैल","मई","जून","जुलाई","अगस्त","सितंबर","अक्टूबर","नवंबर","दिसंबर"]},defaultWidth:"wide"}),day:(0,r.default)({values:{narrow:["र","सो","मं","बु","गु","शु","श"],short:["र","सो","मं","बु","गु","शु","श"],abbreviated:["रवि","सोम","मंगल","बुध","गुरु","शुक्र","शनि"],wide:["रविवार","सोमवार","मंगलवार","बुधवार","गुरुवार","शुक्रवार","शनिवार"]},defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:{narrow:{am:"पूर्वाह्न",pm:"अपराह्न",midnight:"मध्यरात्रि",noon:"दोपहर",morning:"सुबह",afternoon:"दोपहर",evening:"शाम",night:"रात"},abbreviated:{am:"पूर्वाह्न",pm:"अपराह्न",midnight:"मध्यरात्रि",noon:"दोपहर",morning:"सुबह",afternoon:"दोपहर",evening:"शाम",night:"रात"},wide:{am:"पूर्वाह्न",pm:"अपराह्न",midnight:"मध्यरात्रि",noon:"दोपहर",morning:"सुबह",afternoon:"दोपहर",evening:"शाम",night:"रात"}},defaultWidth:"wide",formattingValues:{narrow:{am:"पूर्वाह्न",pm:"अपराह्न",midnight:"मध्यरात्रि",noon:"दोपहर",morning:"सुबह",afternoon:"दोपहर",evening:"शाम",night:"रात"},abbreviated:{am:"पूर्वाह्न",pm:"अपराह्न",midnight:"मध्यरात्रि",noon:"दोपहर",morning:"सुबह",afternoon:"दोपहर",evening:"शाम",night:"रात"},wide:{am:"पूर्वाह्न",pm:"अपराह्न",midnight:"मध्यरात्रि",noon:"दोपहर",morning:"सुबह",afternoon:"दोपहर",evening:"शाम",night:"रात"}},defaultFormattingWidth:"wide"})};n.default=i},73203:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);