"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[89445],{89445:function(e,t,n){n(33096),n(59139),n(86028),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={lessThanXSeconds:{one:"mindre enn eitt sekund",other:"mindre enn {{count}} sekund"},xSeconds:{one:"eitt sekund",other:"{{count}} sekund"},halfAMinute:"eit halvt minutt",lessThanXMinutes:{one:"mindre enn eitt minutt",other:"mindre enn {{count}} minutt"},xMinutes:{one:"eitt minutt",other:"{{count}} minutt"},aboutXHours:{one:"omtrent ein time",other:"omtrent {{count}} timar"},xHours:{one:"ein time",other:"{{count}} timar"},xDays:{one:"ein dag",other:"{{count}} dagar"},aboutXWeeks:{one:"omtrent ei veke",other:"omtrent {{count}} veker"},xWeeks:{one:"ei veke",other:"{{count}} veker"},aboutXMonths:{one:"omtrent ein månad",other:"omtrent {{count}} månader"},xMonths:{one:"ein månad",other:"{{count}} månader"},aboutXYears:{one:"omtrent eitt år",other:"omtrent {{count}} år"},xYears:{one:"eitt år",other:"{{count}} år"},overXYears:{one:"over eitt år",other:"over {{count}} år"},almostXYears:{one:"nesten eitt år",other:"nesten {{count}} år"}},r=["null","ein","to","tre","fire","fem","seks","sju","åtte","ni","ti","elleve","tolv"];t.default=function(e,t,n){var u,i=o[e];return u="string"==typeof i?i:1===t?i.one:n&&n.onlyNumeric?i.other.replace("{{count}}",String(t)):i.other.replace("{{count}}",t<13?r[t]:String(t)),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"om "+u:u+" sidan":u},e.exports=t.default}}]);