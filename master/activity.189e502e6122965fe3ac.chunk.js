(self.webpackChunk=self.webpackChunk||[]).push([[31471],{17094:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}}),n(27378);var r=n(10043),a=n(24246);function i(e){var t=e.styles,n=e.defaultTheme,i=void 0===n?{}:n,o="function"==typeof t?function(e){return t(null==(n=e)||0===Object.keys(n).length?i:e);var n}:t;return(0,a.jsx)(r.xB,{styles:o})}},58772:function(e,t,n){"use strict";var r=n(90331);function a(){}function i(){}i.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,i,o){if(o!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:a};return n.PropTypes=n,n}},23615:function(e,t,n){e.exports=n(58772)()},90331:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},44905:function(e,t,n){"use strict";n.d(t,{PW:function(){return i}});var r="NOT_FOUND",a=function(e,t){return e===t};function i(e,t){var n,i,o="object"==typeof t?t:{equalityCheck:t},l=o.equalityCheck,u=void 0===l?a:l,c=o.maxSize,s=void 0===c?1:c,f=o.resultEqualityCheck,d=function(e){return function(t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,a=0;a<r;a++)if(!e(t[a],n[a]))return!1;return!0}}(u),v=1===s?(n=d,{get:function(e){return i&&n(i.key,e)?i.value:r},put:function(e,t){i={key:e,value:t}},getEntries:function(){return i?[i]:[]},clear:function(){i=void 0}}):function(e,t){var n=[];function a(e){var a=n.findIndex((function(n){return t(e,n.key)}));if(a>-1){var i=n[a];return a>0&&(n.splice(a,1),n.unshift(i)),i.value}return r}return{get:a,put:function(t,i){a(t)===r&&(n.unshift({key:t,value:i}),n.length>e&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(s,d);function p(){var t=v.get(arguments);if(t===r){if(t=e.apply(null,arguments),f){var n=v.getEntries().find((function(e){return f(e.value,t)}));n&&(t=n.value)}v.put(arguments,t)}return t}return p.clearCache=function(){return v.clear()},p}},80406:function(e,t,n){"use strict";function r(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];var i,o=0,l={memoizeOptions:void 0},u=r.pop();if("object"==typeof u&&(l=u,u=r.pop()),"function"!=typeof u)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof u+"]");var c=l.memoizeOptions,s=void 0===c?n:c,f=Array.isArray(s)?s:[s],d=function(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"==typeof e}))){var n=t.map((function(e){return"function"==typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}(r),v=e.apply(void 0,[function(){return o++,u.apply(null,arguments)}].concat(f)),p=e((function(){for(var e=[],t=d.length,n=0;n<t;n++)e.push(d[n].apply(null,arguments));return i=v.apply(null,e)}));return Object.assign(p,{resultFunc:u,memoizedResultFunc:v,dependencies:d,lastResult:function(){return i},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),p}}n.d(t,{P1:function(){return a}});var a=r(n(44905).PW)},82408:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return F}});var r,a=n(24246),i=n(27378),o=n(94634),l=n(31991),u=n(33834),c=n(16677),s=n(12192),f=n(77901),d=n(84320),v=n(87891),p=n(70224),h=n(27851),y=n(87143),b=n(12015),m=n(2943),w=n(61693),g=n(94994),x=n(23472),j=n(16121),O=n(24009),P=function(e){var t,n=e.level;switch(n){case j.i.Information:t="info";break;case j.i.Warning:t="warning";break;case j.i.Error:case j.i.Critical:t="error"}var r=g.ZP.translate("LogLevel.".concat(n));return(0,a.jsx)(O.Z,{size:"small",color:t,label:r,title:r})},S=n(21800),Z=n(64647),E=n(56176),k=function(){return k=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},k.apply(this,arguments)},C=function(e){var t=e.Overview,n=e.ShortOverview,r=null!=n?n:t,o=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,i=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)o.push(r.value)}catch(e){a={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(a)throw a.error}}return o}((0,i.useState)(!1),2),l=o[0],u=o[1],f=(0,i.useCallback)((function(){u(!1)}),[]),d=(0,i.useCallback)((function(){u(!0)}),[]);return r?(0,a.jsxs)(c.Z,k({sx:{display:"flex",width:"100%",alignItems:"center"}},{children:[(0,a.jsx)(c.Z,k({sx:{flexGrow:1,overflow:"hidden",textOverflow:"ellipsis"},component:"div",title:r},{children:r})),n&&t&&(0,a.jsx)(Z.Z,k({onClickAway:f},{children:(0,a.jsx)(E.Z,k({title:t,placement:"top",arrow:!0,onClose:f,open:l,disableFocusListener:!0,disableHoverListener:!0,disableTouchListener:!0},{children:(0,a.jsx)(s.Z,k({onClick:d},{children:(0,a.jsx)(S.Z,{})}))}))}))]})):null},I=n(65927),T=function(){return T=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},T.apply(this,arguments)},A=function(e){var t=e.to,n=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["to"]);return(0,a.jsx)(h.rU,T({to:t},{children:(0,a.jsx)(I.u,T({},n))}))},L=function(){return L=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},L.apply(this,arguments)},U=function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function o(e){try{u(r.next(e))}catch(e){i(e)}}function l(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}u((r=r.apply(e,t||[])).next())}))},N=function(e,t){var n,r,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(l){return function(u){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,l[0]&&(o=0)),o;)try{if(n=1,r&&(a=2&l[0]?r.return:l[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,l[1])).done)return a;switch(r=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,r=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){o.label=l[1];break}if(6===l[0]&&o.label<a[1]){o.label=a[1],a=l;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(l);break}a[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],r=0}finally{n=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,u])}}},R=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,a,i=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)o.push(r.value)}catch(e){a={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(a)throw a.error}}return o},_=function(e,t,n){if(n||2===arguments.length)for(var r,a=0,i=t.length;a<i;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))},z="useractivity";!function(e){e[e.All=0]="All",e[e.User=1]="User",e[e.System=2]="System"}(r||(r={}));var D=function(e){return null===e?r.All:(0,x.s)(e)?r.User:r.System},M=function(e){var t;return null!==(t=e.Id)&&void 0!==t?t:-1},F=function(){var e=(0,m.h_)().api,t=R((0,h.lr)(),2),n=t[0],x=t[1],j=R((0,i.useState)(D(n.get(z))),2),O=j[0],S=j[1],Z=R((0,i.useState)(!0),2),E=Z[0],k=Z[1],I=R((0,i.useState)({page:0,pageSize:25}),2),T=I[0],F=I[1],G=R((0,i.useState)(0),2),B=G[0],W=G[1],H=R((0,i.useState)([]),2),q=H[0],Y=H[1],V=R((0,i.useState)({}),2),K=V[0],X=V[1],J=O!==r.System?[{field:"User",headerName:g.ZP.translate("LabelUser"),width:60,valueGetter:function(e){var t,n=e.row;return null===(t=K[n.UserId])||void 0===t?void 0:t.Name},renderCell:function(e){var t,n,r=e.row;return(0,a.jsx)(s.Z,L({size:"large",color:"inherit",sx:{padding:0},title:null!==(n=null===(t=K[r.UserId])||void 0===t?void 0:t.Name)&&void 0!==n?n:void 0,component:h.rU,to:"/dashboard/users/profile?userId=".concat(r.UserId)},{children:(0,a.jsx)(b.Z,{user:K[r.UserId]})}))}}]:[],Q=_(_([{field:"Date",headerName:g.ZP.translate("LabelDate"),width:90,type:"date",valueGetter:function(e){var t=e.value;return(0,w.Ym)(t)},valueFormatter:function(e){var t=e.value;return(0,w.ww)(t)}},{field:"Time",headerName:g.ZP.translate("LabelTime"),width:100,type:"dateTime",valueGetter:function(e){var t=e.row;return(0,w.Ym)(t.Date)},valueFormatter:function(e){var t=e.value;return(0,w.Kb)(t)}},{field:"Severity",headerName:g.ZP.translate("LabelLevel"),width:110,renderCell:function(e){var t=e.value;return t?(0,a.jsx)(P,{level:t}):void 0}}],R(J),!1),[{field:"Name",headerName:g.ZP.translate("LabelName"),width:200},{field:"Overview",headerName:g.ZP.translate("LabelOverview"),width:200,valueGetter:function(e){var t,n=e.row;return null!==(t=n.ShortOverview)&&void 0!==t?t:n.Overview},renderCell:function(e){var t=e.row;return(0,a.jsx)(C,L({},t))}},{field:"Type",headerName:g.ZP.translate("LabelType"),width:120},{field:"actions",type:"actions",getActions:function(e){var t=e.row,n=[];return t.ItemId&&n.push((0,a.jsx)(A,{size:"large",icon:(0,a.jsx)(u.Z,{}),label:g.ZP.translate("LabelMediaDetails"),title:g.ZP.translate("LabelMediaDetails"),to:"/details?id=".concat(t.ItemId)})),n}}],!1),$=(0,i.useCallback)((function(e,t){null!==t&&S(t)}),[]);return(0,i.useEffect)((function(){e&&U(void 0,void 0,void 0,(function(){var t,n;return N(this,(function(r){switch(r.label){case 0:return[4,(0,l.X)(e).getUsers()];case 1:return t=r.sent().data,n={},t.forEach((function(e){e.Id&&(n[e.Id]=e)})),X(n),[2]}}))})).catch((function(e){console.error("[activity] failed to fetch users",e)}))}),[e]),(0,i.useEffect)((function(){e&&(k(!0),U(void 0,void 0,void 0,(function(){var t,n,a,i;return N(this,(function(l){switch(l.label){case 0:return t={startIndex:T.page*T.pageSize,limit:T.pageSize},O!==r.All&&(t.hasUserId=O===r.User),[4,(0,o.d)(e).getLogEntries(t)];case 1:return n=l.sent().data,W(null!==(a=n.TotalRecordCount)&&void 0!==a?a:0),Y(null!==(i=n.Items)&&void 0!==i?i:[]),k(!1),[2]}}))})).catch((function(e){console.error("[activity] failed to fetch activity log entries",e)})))}),[O,e,T]),(0,i.useEffect)((function(){D(n.get(z))!==O&&(O===r.All?n.delete(z):n.set(z,"".concat(O===r.User)),x(n))}),[O,n,x]),(0,a.jsx)(y.Z,L({id:"serverActivityPage",title:g.ZP.translate("HeaderActivity"),className:"mainAnimatedPage type-interior"},{children:(0,a.jsxs)("div",L({className:"content-primary"},{children:[(0,a.jsxs)(c.Z,L({sx:{display:"flex",alignItems:"baseline",marginY:2}},{children:[(0,a.jsx)(c.Z,L({sx:{flexGrow:1}},{children:(0,a.jsx)(v.Z,L({variant:"h2"},{children:g.ZP.translate("HeaderActivity")}))})),(0,a.jsxs)(d.Z,L({value:O,onChange:$,exclusive:!0},{children:[(0,a.jsx)(f.Z,L({value:r.All},{children:g.ZP.translate("All")})),(0,a.jsx)(f.Z,L({value:r.User},{children:g.ZP.translate("LabelUser")})),(0,a.jsx)(f.Z,L({value:r.System},{children:g.ZP.translate("LabelSystem")}))]}))]})),(0,a.jsx)(p._,{columns:Q,rows:q,pageSizeOptions:[10,25,50,100],paginationMode:"server",paginationModel:T,onPaginationModelChange:F,rowCount:B,getRowId:M,loading:E,sx:{minHeight:500}})]}))}))}},87143:function(e,t,n){"use strict";var r=n(24246),a=n(27378),i=n(93110),o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},o.apply(this,arguments)};t.Z=function(e){var t=e.children,n=e.id,l=e.className,u=void 0===l?"":l,c=e.title,s=e.isBackButtonEnabled,f=void 0===s||s,d=e.isMenuButtonEnabled,v=void 0!==d&&d,p=e.isNowPlayingBarEnabled,h=void 0===p||p,y=e.isThemeMediaSupported,b=void 0!==y&&y,m=e.backDropType,w=(0,a.useRef)(null);return(0,a.useEffect)((function(){i.Z.hideView()}),[]),(0,a.useEffect)((function(){var e,t,n,r,a={bubbles:!0,cancelable:!1,detail:{isRestored:!1,options:{enableMediaControl:h,supportsThemeMedia:b}}};null===(e=w.current)||void 0===e||e.dispatchEvent(new CustomEvent("viewbeforeshow",a)),null===(t=w.current)||void 0===t||t.dispatchEvent(new CustomEvent("pagebeforeshow",a)),null===(n=w.current)||void 0===n||n.dispatchEvent(new CustomEvent("viewshow",a)),null===(r=w.current)||void 0===r||r.dispatchEvent(new CustomEvent("pageshow",a))}),[w,h,b]),(0,r.jsx)("div",o({ref:w,id:n,"data-role":"page",className:"page ".concat(u),"data-title":c,"data-backbutton":f,"data-menubutton":v,"data-backdroptype":m},{children:t}))}}}]);