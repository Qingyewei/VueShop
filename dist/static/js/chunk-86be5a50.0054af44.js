(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-86be5a50"],{4424:function(t,a,s){t.exports=s.p+"static/img/login.8735d1a2.jpg"},"70c7":function(t,a,s){},9406:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"m-dashboard m-window"},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:8}},[e("el-card",{staticClass:"mgb20",staticStyle:{height:"252px"},attrs:{shadow:"hover"}},[e("div",{staticClass:"user-info"},[e("img",{staticClass:"user-avator",attrs:{src:s("4424"),alt:""}}),e("div",{staticClass:"user-info-cont"},[e("div",{staticClass:"user-info-name"},[t._v(t._s(t.name))]),e("div",[t._v(t._s(t.role))])])]),e("div",{staticClass:"user-info-list"},[t._v(" 上次登录时间： "),e("span",[t._v("2020-07-25")])]),e("div",{staticClass:"user-info-list"},[t._v(" 上次登录地点： "),e("span",[t._v("佛山")])])]),e("el-card",{staticStyle:{height:"252px"},attrs:{shadow:"hover"}},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[t._v("语言详情")])]),t._v("Vue "),e("el-progress",{attrs:{percentage:71.3,color:"#42b983"}}),t._v("JavaScript "),e("el-progress",{attrs:{percentage:24.1,color:"#f1e05a"}}),t._v("CSS "),e("el-progress",{attrs:{percentage:13.7}}),t._v("HTML "),e("el-progress",{attrs:{percentage:5.9,color:"#f56c6c"}})],1)],1),e("el-col",{attrs:{span:16}},[e("el-row",{staticClass:"mgb20",attrs:{gutter:20}},[e("el-col",{attrs:{span:8}},[e("el-card",{attrs:{shadow:"hover","body-style":{padding:"0px"}}},[e("div",{staticClass:"grid-content grid-con-1"},[e("i",{staticClass:"el-icon-lx-people grid-con-icon"}),e("div",{staticClass:"grid-cont-right"},[e("div",{staticClass:"grid-num"},[t._v("1234")]),e("div",[t._v("用户访问量")])])])])],1),e("el-col",{attrs:{span:8}},[e("el-card",{attrs:{shadow:"hover","body-style":{padding:"0px"}}},[e("div",{staticClass:"grid-content grid-con-2"},[e("i",{staticClass:"el-icon-lx-notice grid-con-icon"}),e("div",{staticClass:"grid-cont-right"},[e("div",{staticClass:"grid-num"},[t._v("321")]),e("div",[t._v("系统消息")])])])])],1),e("el-col",{attrs:{span:8}},[e("el-card",{attrs:{shadow:"hover","body-style":{padding:"0px"}}},[e("div",{staticClass:"grid-content grid-con-3"},[e("i",{staticClass:"el-icon-lx-goods grid-con-icon"}),e("div",{staticClass:"grid-cont-right"},[e("div",{staticClass:"grid-num"},[t._v("5000")]),e("div",[t._v("数量")])])])])],1)],1),e("el-card",{staticStyle:{height:"403px"},attrs:{shadow:"hover"}},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("span",[t._v("待办事项")]),e("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"}},[t._v("添加")])],1),e("el-table",{staticStyle:{width:"100%"},attrs:{"show-header":!1,data:t.todoList}},[e("el-table-column",{attrs:{width:"40"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-checkbox",{model:{value:a.row.status,callback:function(s){t.$set(a.row,"status",s)},expression:"scope.row.status"}})]}}])}),e("el-table-column",{scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",{staticClass:"todo-item",class:{"todo-item-del":a.row.status}},[t._v(t._s(a.row.title))])]}}])}),e("el-table-column",{attrs:{width:"60"}},[[e("i",{staticClass:"el-icon-edit"}),e("i",{staticClass:"el-icon-delete"})]],2)],1)],1)],1)],1),e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:12}},[e("el-card",{attrs:{shadow:"hover"}},[e("schart",{ref:"bar",staticClass:"schart",attrs:{canvasId:"bar",options:t.options}})],1)],1),e("el-col",{attrs:{span:12}},[e("el-card",{attrs:{shadow:"hover"}},[e("schart",{ref:"line",staticClass:"schart",attrs:{canvasId:"line",options:t.options2}})],1)],1)],1)],1)},i=[],l=(s("99af"),s("4160"),s("b0c0"),s("159b"),s("f5ac")),o=s("a026"),r=(new o["default"],{props:{addTab:{type:Function},removeTab:{type:Function}},data:function(){return{name:"admin",todoList:[{title:"今天要修复100个bug",status:!1},{title:"今天要修复100个bug",status:!1},{title:"今天要写100行代码加几个bug吧",status:!1},{title:"今天要修复100个bug",status:!1},{title:"今天要修复100个bug",status:!0},{title:"今天要写100行代码加几个bug吧",status:!0}],data:[{name:"2018/09/04",value:1083},{name:"2018/09/05",value:941},{name:"2018/09/06",value:1139},{name:"2018/09/07",value:816},{name:"2018/09/08",value:327},{name:"2018/09/09",value:228},{name:"2018/09/10",value:1065}],options:{type:"bar",title:{text:"最近一周各品类销售图"},xRorate:25,labels:["周一","周二","周三","周四","周五"],datasets:[{label:"家电",data:[234,278,270,190,230]},{label:"百货",data:[164,178,190,135,160]},{label:"食品",data:[144,198,150,235,120]}]},options2:{type:"line",title:{text:"最近几个月各品类销售趋势图"},labels:["6月","7月","8月","9月","10月"],datasets:[{label:"家电",data:[234,278,270,190,230]},{label:"百货",data:[164,178,150,135,160]},{label:"食品",data:[74,118,200,235,90]}]}}},components:{Schart:l["a"]},computed:{role:function(){return"admin"===this.name?"超级管理员":"普通用户"}},methods:{changeDate:function(){var t=(new Date).getTime();this.data.forEach((function(a,s){var e=new Date(t-864e5*(6-s));a.name="".concat(e.getFullYear(),"/").concat(e.getMonth()+1,"/").concat(e.getDate())}))}}}),c=r,n=(s("cda4"),s("2877")),d=Object(n["a"])(c,e,i,!1,null,null,null);a["default"]=d.exports},cda4:function(t,a,s){"use strict";var e=s("70c7"),i=s.n(e);i.a}}]);