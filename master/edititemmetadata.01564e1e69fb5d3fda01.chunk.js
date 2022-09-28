"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6344],{19048:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}}),n(5769),n(63238),n(61418),n(17460),n(14078);var r=n(51161),a=(n(61013),n(27471),n(98010),n(65009)),i=n.n(a),o=(n(72326),n(94994)),d=(n(85427),n(60635)),l=n(85951);function s(e,t,n){var r=c(e),a={id:e.Id,text:r,state:{opened:e.IsFolder&&"open"==t,selected:n},li_attr:{serveritemtype:e.Type,collectiontype:e.CollectionType}};return e.IsFolder?(a.children=[{text:"Loading...",icon:!1}],a.icon=!1):a.icon=!1,a.state.opened&&(a.li_attr.loadedFromServer=!0),n&&(g=e.Id),a}function c(e){var t=e.Name;e.Number&&(t=e.Number+" - "+t),null!=e.IndexNumber&&"Season"!=e.Type&&(t=e.IndexNumber+" - "+t);var n="<div class='editorNode'>";return e.IsFolder?n+='<span class="material-icons metadataSidebarIcon folder" aria-hidden="true"></span>':"Video"===e.MediaType?n+='<span class="material-icons metadataSidebarIcon movie" aria-hidden="true"></span>':"Audio"===e.MediaType?n+='<span class="material-icons metadataSidebarIcon audiotrack" aria-hidden="true"></span>':"TvChannel"===e.Type?n+='<span class="material-icons metadataSidebarIcon live_tv" aria-hidden="true"></span>':"Photo"===e.MediaType?n+='<span class="material-icons metadataSidebarIcon photo" aria-hidden="true"></span>':"Book"===e.MediaType&&(n+='<span class="material-icons metadataSidebarIcon book" aria-hidden="true"></span>'),e.LockData&&(n+='<span class="material-icons metadataSidebarIcon lock" aria-hidden="true"></span>'),(n+=i()(t))+"</div>"}function u(e,t,r,a){Promise.all([n.e(8344).then(n.t.bind(n,20679,23)),Promise.all([n.e(8344),n.e(7755)]).then(n.bind(n,5098))]).then((function(){!function(e,t,n,r){y=[],g=null,$.jstree.destroy(),$(".libraryTree",e).jstree({plugins:["wholerow"],core:{check_callback:!0,data:function(e,t){!function(e,t,n,r,a,i,l){var c=n.id;if("#"!=c)if("livetv"!=c)if("MediaFolders"!=c){var u={ParentId:c,Fields:"Settings",IsVirtualUnaired:!1,IsMissing:!1,EnableTotalRecordCount:!1,EnableImages:!1,EnableUserData:!1},f=n.li_attr.itemtype;"Season"!=f&&"Series"!=f&&(u.SortBy="SortName"),ApiClient.getItems(d.ZP.getCurrentUserId(),u).then((function(e){var n=e.Items.map((function(e){return s(e,-1==r.indexOf(e.Id)?"closed":"open",e.Id==a)}));l.call(t,n);for(var i=0,o=n.length;i<o;i++)n[i].state.opened&&y.push(n[i].id)}))}else!function(e,t,n,r){ApiClient.getJSON(ApiClient.getUrl("Library/MediaFolders")).then((function(e){var a=e.Items.map((function(e){return s(e,-1==n.indexOf(e.Id)?"closed":"open",!1)}));r.call(t,a);for(var i=0,o=a.length;i<o;i++)a[i].state.opened&&y.push(a[i].id)}))}(0,t,r,l);else!function(e,t,n){ApiClient.getLiveTvChannels({ServiceName:e,AddCurrentProgram:!1}).then((function(e){var r=e.Items.map((function(e){return s(e,-1==t.indexOf(e.Id)?"closed":"open",!1)}));n(r)}))}(c,r,l);else!function(e,t,n){ApiClient.getLiveTvChannels({limit:0}).then((function(e){var r=[];r.push({id:"MediaFolders",text:o.ZP.translate("HeaderMediaFolders"),state:{opened:!0},li_attr:{itemtype:"mediafolders",loadedFromServer:!0},icon:!1}),e.TotalRecordCount&&r.push({id:"livetv",text:o.ZP.translate("LiveTV"),state:{opened:!1},li_attr:{itemtype:"livetv"},children:[{text:"Loading...",icon:!1}],icon:!1}),n.call(t,r),y.push("MediaFolders")}))}(0,t,l)}(0,this,e,n,r,0,t)},themes:{variant:"large"}}}).off("select_node.jstree",f).on("select_node.jstree",f).off("open_node.jstree",p).on("open_node.jstree",p).off("load_node.jstree",m).on("load_node.jstree",m)}(e,0,r,a)}))}function f(e,t){var n=t.node,r={id:n.id,itemType:n.li_attr.itemtype,serverItemType:n.li_attr.serveritemtype,collectionType:n.li_attr.collectiontype};"livetv"!=r.itemType&&"mediafolders"!=r.itemType?(this.dispatchEvent(new CustomEvent("itemclicked",{detail:r,bubbles:!0,cancelable:!1})),document.querySelector(".editPageSidebar").classList.add("editPageSidebar-withcontent")):document.querySelector(".editPageSidebar").classList.remove("editPageSidebar-withcontent")}function p(e,t){var n=$(this).parents(".page")[0],r=t.node;r.children&&v(n,r),r.li_attr&&"#"!=r.id&&!r.li_attr.loadedFromServer&&(r.li_attr.loadedFromServer=!0,$.jstree.reference(".libraryTree",n).load_node(r.id,h))}function m(e,t){var n=$(this).parents(".page")[0],r=t.node;r.children&&v(n,r),r.li_attr&&"#"!=r.id&&!r.li_attr.loadedFromServer&&(r.li_attr.loadedFromServer=!0,$.jstree.reference(".libraryTree",n).load_node(r.id,h))}function v(e,t){for(var n=t.children,r=function(t,r){var a=n[t];-1!=y.indexOf(a)&&(y=y.filter((function(e){return e!=a})),$.jstree.reference(".libraryTree",e).load_node(a,h))},a=0,i=n.length;a<i;a++)r(a)}function h(e){g&&e.children&&-1!=e.children.indexOf(g)&&setTimeout((function(){var e;(e=$("#"+g)[0])&&e.scrollIntoView()}),500)}function I(){return b||(0,l.a)("id")}var g,b,y=[];function C(e,t){r.ZP.show(),t?n.e(4076).then(n.bind(n,64076)).then((function(n){n.default.embed(e.querySelector(".editPageInnerContent"),t,ApiClient.serverInfo().Id)})):(e.querySelector(".editPageInnerContent").innerHTML="",r.ZP.hide())}function _(e){e.addEventListener("viewshow",(function(){C(this,MetadataEditor.getCurrentItemId())})),MetadataEditor.setCurrentItemId(null),e.querySelector(".libraryTree").addEventListener("itemclicked",(function(t){var n=t.detail;n.id!=MetadataEditor.getCurrentItemId()&&(MetadataEditor.setCurrentItemId(n.id),C(e,n.id))}))}$(document).on("itemsaved",".metadataEditorPage",(function(e,t){!function(e,t){var n=$("#"+t.Id+">a",e)[0];if(null!=n&&($(".editorNode",n).remove(),$(n).append(c(t)),t.IsFolder)){var r=jQuery.jstree._reference(".libraryTree"),a=r._get_node(null,!1);r.refresh(a)}}(this,t)})).on("pagebeforeshow",".metadataEditorPage",(function(){n.e(4614).then(n.bind(n,43890))})).on("pagebeforeshow",".metadataEditorPage",(function(){var e=this;d.ZP.getCurrentUser().then((function(t){var n=I();n?ApiClient.getAncestorItems(n,t.Id).then((function(t){var r=t.map((function(e){return e.Id}));u(e,0,r,n)})):u(e,0,[])}))})).on("pagebeforehide",".metadataEditorPage",(function(){$(".libraryTree",this).off("select_node.jstree",f).off("open_node.jstree",p).off("load_node.jstree",m)})),window.MetadataEditor={getItemPromise:function(){var e=I();return e?ApiClient.getItem(d.ZP.getCurrentUserId(),e):ApiClient.getRootFolder(d.ZP.getCurrentUserId())},getCurrentItemId:I,setCurrentItemId:function(e){b=e}}}}]);