"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[71655,72232,22907,94891,94250,73710,23945,95671],{72232:function(a,n,e){e(99785),e(5769),e(63238),e(14078),Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(a){return function(n,e){var t;if("formatting"===(null!=e&&e.context?String(e.context):"standalone")&&a.formattingValues){var i=a.defaultFormattingWidth||a.defaultWidth,r=null!=e&&e.width?String(e.width):i;t=a.formattingValues[r]||a.formattingValues[i]}else{var u=a.defaultWidth,d=null!=e&&e.width?String(e.width):a.defaultWidth;t=a.values[d]||a.values[u]}return t[a.argumentCallback?a.argumentCallback(n):n]}},a.exports=n.default},71655:function(a,n,e){e(99785),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t,i=(t=e(72232))&&t.__esModule?t:{default:t},r={ordinalNumber:function(a,n){return String(a)},era:(0,i.default)({values:{narrow:["M.A","M."],abbreviated:["M.A","M."],wide:["Miloddan Avvalgi","Milodiy"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["CH.1","CH.2","CH.3","CH.4"],wide:["1-chi chorak","2-chi chorak","3-chi chorak","4-chi chorak"]},defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:(0,i.default)({values:{narrow:["Y","F","M","A","M","I","I","A","S","O","N","D"],abbreviated:["Yan","Fev","Mar","Apr","May","Iyun","Iyul","Avg","Sen","Okt","Noy","Dek"],wide:["Yanvar","Fevral","Mart","Aprel","May","Iyun","Iyul","Avgust","Sentabr","Oktabr","Noyabr","Dekabr"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["Y","D","S","CH","P","J","SH"],short:["Ya","Du","Se","Cho","Pa","Ju","Sha"],abbreviated:["Yak","Dush","Sesh","Chor","Pay","Jum","Shan"],wide:["Yakshanba","Dushanba","Seshanba","Chorshanba","Payshanba","Juma","Shanba"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"a",pm:"p",midnight:"y.t",noon:"p.",morning:"ertalab",afternoon:"tushdan keyin",evening:"kechqurun",night:"tun"},abbreviated:{am:"AM",pm:"PM",midnight:"yarim tun",noon:"peshin",morning:"ertalab",afternoon:"tushdan keyin",evening:"kechqurun",night:"tun"},wide:{am:"a.m.",pm:"p.m.",midnight:"yarim tun",noon:"peshin",morning:"ertalab",afternoon:"tushdan keyin",evening:"kechqurun",night:"tun"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"y.t",noon:"p.",morning:"ertalab",afternoon:"tushdan keyin",evening:"kechqurun",night:"tun"},abbreviated:{am:"AM",pm:"PM",midnight:"yarim tun",noon:"peshin",morning:"ertalab",afternoon:"tushdan keyin",evening:"kechqurun",night:"tun"},wide:{am:"a.m.",pm:"p.m.",midnight:"yarim tun",noon:"peshin",morning:"ertalab",afternoon:"tushdan keyin",evening:"kechqurun",night:"tun"}},defaultFormattingWidth:"wide"})};n.default=r,a.exports=n.default}}]);