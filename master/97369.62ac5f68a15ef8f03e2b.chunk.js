"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[97369,72232,22907,94891,94250,73710,23945,95671],{72232:function(e,t,n){n(33096),n(13227),n(81414),n(11431),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n){var a;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&e.formattingValues){var d=e.defaultFormattingWidth||e.defaultWidth,r=null!=n&&n.width?String(n.width):d;a=e.formattingValues[r]||e.formattingValues[d]}else{var i=e.defaultWidth,u=null!=n&&n.width?String(n.width):e.defaultWidth;a=e.values[u]||e.values[i]}return a[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},97369:function(e,t,n){n(33096),n(11908);var a=n(73203).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var d=a(n(72232)),r={ordinalNumber:function(e,t){return Number(e)+"."},era:(0,d.default)({values:{narrow:["ie.","isz."],abbreviated:["i. e.","i. sz."],wide:["Krisztus előtt","időszámításunk szerint"]},defaultWidth:"wide"}),quarter:(0,d.default)({values:{narrow:["1.","2.","3.","4."],abbreviated:["1. n.év","2. n.év","3. n.év","4. n.év"],wide:["1. negyedév","2. negyedév","3. negyedév","4. negyedév"]},defaultWidth:"wide",argumentCallback:function(e){return e-1},formattingValues:{narrow:["I.","II.","III.","IV."],abbreviated:["I. n.év","II. n.év","III. n.év","IV. n.év"],wide:["I. negyedév","II. negyedév","III. negyedév","IV. negyedév"]},defaultFormattingWidth:"wide"}),month:(0,d.default)({values:{narrow:["J","F","M","Á","M","J","J","A","Sz","O","N","D"],abbreviated:["jan.","febr.","márc.","ápr.","máj.","jún.","júl.","aug.","szept.","okt.","nov.","dec."],wide:["január","február","március","április","május","június","július","augusztus","szeptember","október","november","december"]},defaultWidth:"wide"}),day:(0,d.default)({values:{narrow:["V","H","K","Sz","Cs","P","Sz"],short:["V","H","K","Sze","Cs","P","Szo"],abbreviated:["V","H","K","Sze","Cs","P","Szo"],wide:["vasárnap","hétfő","kedd","szerda","csütörtök","péntek","szombat"]},defaultWidth:"wide"}),dayPeriod:(0,d.default)({values:{narrow:{am:"de.",pm:"du.",midnight:"éjfél",noon:"dél",morning:"reggel",afternoon:"du.",evening:"este",night:"éjjel"},abbreviated:{am:"de.",pm:"du.",midnight:"éjfél",noon:"dél",morning:"reggel",afternoon:"du.",evening:"este",night:"éjjel"},wide:{am:"de.",pm:"du.",midnight:"éjfél",noon:"dél",morning:"reggel",afternoon:"délután",evening:"este",night:"éjjel"}},defaultWidth:"wide"})};t.default=r,e.exports=t.default}}]);