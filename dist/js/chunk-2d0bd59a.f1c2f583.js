(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bd59a"],{"2c2e":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article-container"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("el-breadcrumb",[a("el-breadcrumb-item",{attrs:{to:"/"}},[t._v("首页")]),a("el-breadcrumb-item",[t._v("评论管理")])],1)],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{prop:"title",label:"文章标题"}}),a("el-table-column",{attrs:{prop:"total_comment_count",label:"总评论数"}}),a("el-table-column",{attrs:{prop:"fans_comment_count",label:"粉丝评论数"}}),a("el-table-column",{attrs:{label:"评论状态",prop:"comment_status"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{type:e.row.comment_status?"primary":"danger"}},[t._v(t._s(e.row.comment_status?"正常":"关闭"))])]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",type:e.row.comment_status?"danger":"primary"},on:{click:function(a){return t.openOrCloseFn(e.row,!e.row.comment_status)}}},[t._v(t._s(e.row.comment_status?"关闭评论":"打开评论"))])]}}])})],1),a("el-pagination",{staticStyle:{"margin-top":"10px"},attrs:{background:"",layout:"prev, pager, next","current-page":t.reqParams.page,total:t.total},on:{"current-change":t.changePage}})],1)],1)},n=[],o=(a("d3b7"),a("25f0"),a("3835")),s=(a("96cf"),a("1da1")),c=a("365c"),l={name:"Comment",data:function(){return{tableData:[],total:0,reqParams:{page:1,per_page:10}}},methods:{getCommentListFn:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a,r,n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["h"])(t.reqParams);case 2:if(a=e.sent,r=Object(o["a"])(a,2),n=r[0],s=r[1],!n){e.next=8;break}return e.abrupt("return");case 8:t.tableData=s.data.data.results,t.total=s.data.data.total_count;case 10:case"end":return e.stop()}}),e)})))()},openOrCloseFn:function(t,e){var a=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var n,s,l;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(c["m"])({article_id:t.id.toString()},{allow_comment:e});case 2:if(n=r.sent,s=Object(o["a"])(n,1),l=s[0],!l){r.next=7;break}return r.abrupt("return");case 7:a.getCommentListFn();case 8:case"end":return r.stop()}}),r)})))()},changePage:function(t){this.reqParams.page=t,this.getCommentListFn()}},created:function(){this.getCommentListFn()}},u=l,i=a("2877"),m=Object(i["a"])(u,r,n,!1,null,"1322f097",null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d0bd59a.f1c2f583.js.map