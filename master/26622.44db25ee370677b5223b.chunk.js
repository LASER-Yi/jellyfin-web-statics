"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[26622,72232,22907,94891,94250,73710,23945,95671],{72232:function(a,e,t){t(99785),t(5769),t(63238),t(14078),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e,t){var n;if("formatting"===(null!=t&&t.context?String(t.context):"standalone")&&a.formattingValues){var d=a.defaultFormattingWidth||a.defaultWidth,i=null!=t&&t.width?String(t.width):d;n=a.formattingValues[i]||a.formattingValues[d]}else{var r=a.defaultWidth,u=null!=t&&t.width?String(t.width):a.defaultWidth;n=a.values[u]||a.values[r]}return n[a.argumentCallback?a.argumentCallback(e):e]}},a.exports=e.default},26622:function(a,e,t){t(99785),t(95163),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,d=(n=t(72232))&&n.__esModule?n:{default:n},i={ordinalNumber:function(a,e){return Number(a)+"e"},era:(0,d.default)({values:{narrow:["v.C.","n.C."],abbreviated:["v.Chr.","n.Chr."],wide:["voor Christus","na Christus"]},defaultWidth:"wide"}),quarter:(0,d.default)({values:{narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1e kwartaal","2e kwartaal","3e kwartaal","4e kwartaal"]},defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:(0,d.default)({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mrt.","apr.","mei","jun.","jul.","aug.","sep.","okt.","nov.","dec."],wide:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"]},defaultWidth:"wide"}),day:(0,d.default)({values:{narrow:["Z","M","D","W","D","V","Z"],short:["zo","ma","di","wo","do","vr","za"],abbreviated:["zon","maa","din","woe","don","vri","zat"],wide:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"]},defaultWidth:"wide"}),dayPeriod:(0,d.default)({values:{narrow:{am:"AM",pm:"PM",midnight:"middernacht",noon:"het middag",morning:"'s ochtends",afternoon:"'s namiddags",evening:"'s avonds",night:"'s nachts"},abbreviated:{am:"AM",pm:"PM",midnight:"middernacht",noon:"het middag",morning:"'s ochtends",afternoon:"'s namiddags",evening:"'s avonds",night:"'s nachts"},wide:{am:"AM",pm:"PM",midnight:"middernacht",noon:"het middag",morning:"'s ochtends",afternoon:"'s namiddags",evening:"'s avonds",night:"'s nachts"}},defaultWidth:"wide"})};e.default=i,a.exports=e.default}}]);