"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[72862,13526],{17094:function(l,a,e){e.d(a,{Z:function(){return r}}),e(27378);var n=e(10043),u=e(24246);function r(l){var a=l.styles,e=l.defaultTheme,r=void 0===e?{}:e,t="function"==typeof a?function(l){return a(null==(e=l)||0===Object.keys(e).length?r:l);var e}:a;return(0,u.jsx)(n.xB,{styles:t})}},6572:function(l,a,e){e.r(a),e.d(a,{LocalizationPreferences:function(){return y}});var n=e(24246),u=e(14264),r=e(38318),t=e(78972),i=e(52647),s=e(28103),v=e(55599),o=e(25468),b=e(87891),c=(e(27378),e(92811)),p=e(61693),d=e(94994),g=e(41731),h=function(l,a){var e="function"==typeof Symbol&&l[Symbol.iterator];if(!e)return l;var n,u,r=e.call(l),t=[];try{for(;(void 0===a||a-- >0)&&!(n=r.next()).done;)t.push(n.value)}catch(l){u={error:l}}finally{try{n&&!n.done&&(e=r.return)&&e.call(r)}finally{if(u)throw u.error}}return t},f=function(l,a,e){if(e||2===arguments.length)for(var n,u=0,r=a.length;u<r;u++)!n&&u in a||(n||(n=Array.prototype.slice.call(a,0,u)),n[u]=a[u]);return l.concat(n||Array.prototype.slice.call(a))};function y(l){var a=l.onChange,e=l.values;return c.M.supports("displaylanguage")||p.ZP.supportsLocalization()?(0,n.jsxs)(o.Z,{spacing:3,children:[(0,n.jsx)(b.Z,{variant:"h2",children:d.ZP.translate("Localization")}),c.M.supports("displaylanguage")&&(0,n.jsxs)(u.Z,{fullWidth:!0,children:[(0,n.jsx)(t.Z,{id:"display-settings-language-label",children:d.ZP.translate("LabelDisplayLanguage")}),(0,n.jsxs)(v.Z,{"aria-describedby":"display-settings-language-description",inputProps:{name:"language"},labelId:"display-settings-language-label",onChange:a,value:e.language,children:f([],h(g.LANGUAGE_OPTIONS.map((function(l){var a=l.value,e=l.label;return(0,n.jsx)(s.Z,{value:a,children:e},a)}))),!1)}),(0,n.jsxs)(r.Z,{component:o.Z,id:"display-settings-language-description",children:[(0,n.jsx)("span",{children:d.ZP.translate("LabelDisplayLanguageHelp")}),c.M.supports("externallinks")&&(0,n.jsx)(i.Z,{href:"https://github.com/jellyfin/jellyfin",rel:"noopener noreferrer",target:"_blank",children:d.ZP.translate("LearnHowYouCanContribute")})]})]}),p.ZP.supportsLocalization()&&(0,n.jsxs)(u.Z,{fullWidth:!0,children:[(0,n.jsx)(t.Z,{id:"display-settings-locale-label",children:d.ZP.translate("LabelDateTimeLocale")}),(0,n.jsxs)(v.Z,{inputProps:{name:"dateTimeLocale"},labelId:"display-settings-locale-label",onChange:a,value:e.dateTimeLocale,children:f([],h(g.DATE_LOCALE_OPTIONS.map((function(l){var a=l.value,e=l.label;return(0,n.jsx)(s.Z,{value:a,children:e},a)}))),!1)})]})]}):null}},41731:function(l,a,e){e.r(a),e.d(a,{DATE_LOCALE_OPTIONS:function(){return u},LANGUAGE_OPTIONS:function(){return n}});var n=[{value:"auto",label:e(94994).ZP.translate("Auto")},{value:"af",label:"Afrikaans"},{value:"ar",label:"العربية"},{value:"be-BY",label:"Беларуская"},{value:"bg-BG",label:"Български"},{value:"bn_BD",label:"বাংলা (বাংলাদেশ)"},{value:"ca",label:"Català"},{value:"cs",label:"Čeština"},{value:"cy",label:"Cymraeg"},{value:"da",label:"Dansk"},{value:"de",label:"Deutsch"},{value:"el",label:"Ελληνικά"},{value:"en-GB",label:"English (United Kingdom)"},{value:"en-US",label:"English"},{value:"eo",label:"Esperanto"},{value:"es",label:"Español"},{value:"es_419",label:"Español americano"},{value:"es-AR",label:"Español (Argentina)"},{value:"es_DO",label:"Español (Dominicana)"},{value:"es-MX",label:"Español (México)"},{value:"et",label:"Eesti"},{value:"eu",label:"Euskara"},{value:"fa",label:"فارسی"},{value:"fi",label:"Suomi"},{value:"fil",label:"Filipino"},{value:"fr",label:"Français"},{value:"fr-CA",label:"Français (Canada)"},{value:"gl",label:"Galego"},{value:"gsw",label:"Schwiizerdütsch"},{value:"he",label:"עִבְרִית"},{value:"hi-IN",label:"हिन्दी"},{value:"hr",label:"Hrvatski"},{value:"hu",label:"Magyar"},{value:"id",label:"Bahasa Indonesia"},{value:"is-IS",label:"Íslenska"},{value:"it",label:"Italiano"},{value:"ja",label:"日本語"},{value:"kk",label:"Qazaqşa"},{value:"ko",label:"한국어"},{value:"lt-LT",label:"Lietuvių"},{value:"lv",label:"Latviešu"},{value:"mk",label:"Македонски"},{value:"ml",label:"മലയാളം"},{value:"mr",label:"मराठी"},{value:"ms",label:"Bahasa Melayu"},{value:"nb",label:"Norsk bokmål"},{value:"ne",label:"नेपाली"},{value:"nl",label:"Nederlands"},{value:"nn",label:"Norsk nynorsk"},{value:"pa",label:"ਪੰਜਾਬੀ"},{value:"pl",label:"Polski"},{value:"pr",label:"Pirate"},{value:"pt",label:"Português"},{value:"pt-BR",label:"Português (Brasil)"},{value:"pt-PT",label:"Português (Portugal)"},{value:"ro",label:"Românește"},{value:"ru",label:"Русский"},{value:"sk",label:"Slovenčina"},{value:"sl-SI",label:"Slovenščina"},{value:"sq",label:"Shqip"},{value:"sr",label:"Српски"},{value:"sv",label:"Svenska"},{value:"ta",label:"தமிழ்"},{value:"te",label:"తెలుగు"},{value:"th",label:"ภาษาไทย"},{value:"tr",label:"Türkçe"},{value:"uk",label:"Українська"},{value:"ur_PK",label:" اُردُو"},{value:"vi",label:"Tiếng Việt"},{value:"zh-CN",label:"汉语 (简化字)"},{value:"zh-TW",label:"漢語 (繁体字)"},{value:"zh-HK",label:"廣東話 (香港)"}],u=n.filter((function(l){return"eu"!==l.value}))}}]);