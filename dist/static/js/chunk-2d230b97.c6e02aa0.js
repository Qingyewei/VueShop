(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d230b97"],{ee01:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"m-producList m-window"},[e.firstStep?n("div",[n("div",[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:8}},[n("el-input",{attrs:{placeholder:"请输入内容",clearable:""},on:{clear:e.getGoodsList},model:{value:e.queryInfo.query,callback:function(t){e.$set(e.queryInfo,"query",t)},expression:"queryInfo.query"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.getGoodsList},slot:"append"})],1)],1),n("el-col",{attrs:{span:4}},[n("el-button",{attrs:{type:"primary"},on:{click:e.goAddpage}},[e._v("添加商品")])],1)],1),n("div",{staticClass:"m-table"},[n("el-table",{attrs:{data:e.goodsList,border:"",stripe:""}},[n("el-table-column",{attrs:{type:"index"}}),n("el-table-column",{attrs:{"header-align":"center",align:"center",prop:"goods_name",label:"商品名称"}}),n("el-table-column",{attrs:{"header-align":"center",align:"center",prop:"goods_price",label:"商品价格（元）",width:"95px"}}),n("el-table-column",{attrs:{"header-align":"center",align:"center",prop:"goods_weight",label:"商品重量",width:"70px"}}),n("el-table-column",{attrs:{"header-align":"center",align:"center",prop:"add_time",label:"创建时间",width:"140px"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("dateFormat")(t.row.add_time))+" ")]}}],null,!1,1503903544)}),n("el-table-column",{attrs:{"header-align":"center",align:"center",width:"130px",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"}}),n("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(n){return e.removeById(t.row.goods_id)}}})]}}],null,!1,2928434199)})],1)],1),n("div",{staticClass:"m-pagination"},[n("el-pagination",{attrs:{"current-page":e.queryInfo.pagenum,"page-sizes":[5,10,15,20],"page-size":e.queryInfo.pagesize,layout:"total,sizes,prev, pager, next,jumper",total:e.total,background:""},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)]):n("addPage",{attrs:{addTab:e.addTab,removeTab:e.removeTab}})],1)},r=[],o=(n("d3b7"),n("96cf"),n("1da1")),s={props:{addTab:{type:Function},removeTab:{type:Function}},data:function(){return{queryInfo:{query:"",pagenum:1,pagesize:10},goodsList:[],total:0,firstStep:!0}},components:{addPage:function(){return Promise.all([n.e("chunk-0b759c92"),n.e("chunk-02f8af2d")]).then(n.bind(null,"44d8"))}},created:function(){this.getGoodsList()},methods:{getGoodsList:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("goods",{params:e.queryInfo});case 2:if(n=t.sent,a=n.data,200===a.meta.status){t.next=6;break}return t.abrupt("return",e.$message.error("获取商品列表失败!"));case 6:e.$message.success("获取商品列表成功！"),console.log("goods",a.data),e.goodsList=a.data.goods,e.total=a.data.total;case 10:case"end":return t.stop()}}),t)})))()},handleSizeChange:function(e){this.queryInfo.pagesize=e,this.getGoodsList()},handleCurrentChange:function(e){this.queryInfo.pagenum=e,this.getGoodsList()},removeById:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var a,r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$confirm("此操作将永久删除该商品，是否继续？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch((function(e){return e}));case 2:if(a=n.sent,"confirm"===a){n.next=5;break}return n.abrupt("return",t.$message.info("已经取消删除！"));case 5:return n.next=7,t.$http.delete("goods/".concat(e));case 7:if(r=n.sent,o=r.data,200===o.meta.status){n.next=11;break}return n.abrupt("return",t.$message.error("删除失败！"));case 11:t.$message.success("删除成功！"),t.getGoodsList();case 13:case"end":return n.stop()}}),n)})))()},goAddpage:function(){this.addTab({authName:"添加商品",path:"addpage"})}}},i=s,c=n("2877"),l=Object(c["a"])(i,a,r,!1,null,null,null);t["default"]=l.exports}}]);