(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e2d85fc2"],{"14c3":function(t,e,r){var n=r("c6b6"),a=r("9263");t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var i=r.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"25f0":function(t,e,r){"use strict";var n=r("6eeb"),a=r("825a"),i=r("d039"),o=r("ad6d"),u="toString",l=RegExp.prototype,c=l[u],s=i((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),d=c.name!=u;(s||d)&&n(RegExp.prototype,u,(function(){var t=a(this),e=String(t.source),r=t.flags,n=String(void 0===r&&t instanceof RegExp&&!("flags"in l)?o.call(t):r);return"/"+e+"/"+n}),{unsafe:!0})},2648:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app-container"},[r("p",[t._v("如果是通过插件方式安装，请确保系统中集成了tc流量控制命令")]),t._v(" "),r("br"),r("div",{staticStyle:{"margin-top":"20px","font-size":"15px"}},[t._v(" 开启流量控制: "),r("el-switch",{staticStyle:{width:"400px"},attrs:{"active-value":1,"inactive-value":0},on:{change:function(e){return t.changeEnableHandle(e)}},model:{value:t.enable,callback:function(e){t.enable=e},expression:"enable"}})],1),r("div",{staticClass:"operation"},[r("el-button",{staticStyle:{"margin-right":"200px",top:"20px",width:"120px","margin-bottom":"10px"},attrs:{type:"primary",plain:"",icon:"el-icon-plus"},on:{click:t.handleCreate}},[t._v("添加规则")])],1),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{"font-size":"13px","margin-top":"20px"},attrs:{data:t.rules,"element-loading-text":"Loading",fit:"","row-style":{height:"50px"},"cell-style":{padding:"0px"},"highlight-current-row":""}},[r("el-table-column",{attrs:{label:"规则名",width:"150",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v(t._s(e.row.name))])]}}])}),r("el-table-column",{attrs:{label:"ip地址",width:"250",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._l(e.row.ip_list.slice(0,10),(function(e,n){return r("el-tag",{key:n,attrs:{size:"small"}},[t._v(t._s(e))])})),e.row.ip_list.length>10?r("el-tag",{attrs:{size:"small"}}):t._e()]}}])}),r("el-table-column",{attrs:{label:"上行(KB/s)",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v(t._s(e.row.up_rate))])]}}])}),r("el-table-column",{attrs:{label:"下行(KB/s)",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v(t._s(e.row.down_rate))])]}}])}),r("el-table-column",{attrs:{label:"启用状态",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v(t._s(1==e.row.enable?"已开启":"未开启"))])]}}])}),r("el-table-column",{attrs:{label:"操 作",align:"center",width:"250","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.row;e.$index;return[r("el-button",{attrs:{type:"primary",plain:"",size:"small",icon:"el-icon-edit"},on:{click:function(e){return t.handleUpdate(n)}}},[t._v(" 编辑 ")]),r("el-button",{attrs:{type:"danger",plain:"",size:"mini",icon:"el-icon-delete"},on:{click:function(e){return t.handleDeleteIpQosRule(n)}}},[t._v(" 删除 ")])]}}])}),r("template",{slot:"empty"},[r("div",{staticClass:"noData"},[t._v("暂无数据")])])],2),r("el-dialog",{attrs:{title:t.form.rule_title,"close-on-click-modal":!1,"close-on-press-escape":!1,visible:t.form.dialogFormVisible,width:"650px"},on:{"update:visible":function(e){return t.$set(t.form,"dialogFormVisible",e)}}},[r("el-form",{ref:"form",attrs:{model:t.form.tmp_rule,rules:t.urlRules,"label-width":"150px",size:"mini"}},[r("el-form-item",{attrs:{label:"启用:"}},[r("el-switch",{staticStyle:{width:"300px"},attrs:{"active-value":1,"inactive-value":0,size:"small"},model:{value:t.form.tmp_rule.enable,callback:function(e){t.$set(t.form.tmp_rule,"enable",e)},expression:"form.tmp_rule.enable"}})],1),r("el-form-item",{attrs:{label:"备注:"}},[r("el-input",{staticStyle:{width:"250px"},model:{value:t.form.tmp_rule.name,callback:function(e){t.$set(t.form.tmp_rule,"name",e)},expression:"form.tmp_rule.name"}})],1),r("el-form-item",{attrs:{label:"上行速率:"}},[r("el-input",{staticStyle:{width:"150px"},model:{value:t.form.tmp_rule.up_rate,callback:function(e){t.$set(t.form.tmp_rule,"up_rate",e)},expression:"form.tmp_rule.up_rate"}}),r("span",{staticStyle:{"margin-left":"15px"}},[t._v("KB/s")])],1),r("el-form-item",{attrs:{label:"下载速率:"}},[r("el-input",{staticStyle:{width:"150px"},model:{value:t.form.tmp_rule.down_rate,callback:function(e){t.$set(t.form.tmp_rule,"down_rate",e)},expression:"form.tmp_rule.down_rate"}}),r("span",{staticStyle:{"margin-left":"15px"}},[t._v("KB/s")])],1),r("el-form-item",{attrs:{label:"ip列表:",prop:"ip_range_str"}},[r("el-input",{staticStyle:{width:"300px"},attrs:{type:"textarea",rows:10,maxlength:"512","show-word-limit":"",placeholder:"支持单个ip和ip段(分隔符-)，每行一条记录，如192.168.66.2-192.168.66.3"},model:{value:t.form.tmp_rule.ip_range_str,callback:function(e){t.$set(t.form.tmp_rule,"ip_range_str",e)},expression:"form.tmp_rule.ip_range_str"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.form.dialogFormVisible=!1}}},[t._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:function(e){"create"===t.form.dialogStatus?t.createData():t.updateData()}}},[t._v(" 确定 ")])],1)],1),r("el-dialog",{attrs:{title:"当前用户组配置",visible:t.status.dialogMacGroupVisible,width:"650px"},on:{"update:visible":function(e){return t.$set(t.status,"dialogMacGroupVisible",e)}}},[r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"multipleTable",attrs:{data:t.status.macGroupRule.mac_list,"element-loading-text":"Loading","row-style":{height:"45px"},"cell-style":{padding:"0px"},"max-height":"400",border:"",fit:"","tooltip-effect":"dark","highlight-current-row":""}},[r("el-table-column",{attrs:{label:"Mac地址",width:"180",align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v(t._s(e.row.mac))])]}}])}),r("el-table-column",{attrs:{label:"主机名",width:"180",align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v(t._s(t.displayStr(e.row.hostname)))])]}}])}),r("el-table-column",{attrs:{label:"备注",width:"180",align:"left"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v(t._s(t.displayStr(e.row.nickname)))])]}}])})],1)],1),r("el-dialog",{attrs:{title:"当前时间组配置",visible:t.status.dialogTimeGroupVisible,width:"400px"},on:{"update:visible":function(e){return t.$set(t.status,"dialogTimeGroupVisible",e)}}},[r("el-form",{ref:"status",attrs:{model:t.status,"label-width":"10px"}},[r("el-form-item",t._l(t.status.timeGroupRule.weekdays,(function(e,n){return r("el-tag",{key:n,attrs:{size:"small"}},[t._v(" "+t._s(t.status.weekNameList[e])+" ")])})),1),r("el-form-item",t._l(t.status.timeGroupRule.time_list,(function(e,n){return r("el-tag",{key:n,attrs:{size:"small"}},[t._v(" "+t._s(e)+" ")])})),1)],1)],1)],1)},a=[],i=(r("4d63"),r("ac1f"),r("2c3e"),r("25f0"),r("466d"),r("b0c0"),r("f9b6"));function o(t,e,r){var n="^[0-9a-zA-z.-]{"+e+","+r+"}$",a=new RegExp(n);return!!t.match(a)}function u(t){var e=/^((25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))$/g,r=new RegExp(e);return!!t.match(r)||(console.log("check ip failed "+t),!1)}function l(t){var e=t.split("-");return 0!=e.length&&(!!u(e[0])&&(!(e.length>1)||u(e[1])))}var c={data:function(){var t=function(t,e,r){var n=e.split("\n"),a=0;for(var i in n)0!=n[i].length&&(l(n[i])||r(new Error("请输入合法的IP地址")),a++);0==a&&r(new Error("ip地址不能为空，格式x.x.x.x-x.x.x.x"))};return{urlRules:{ip_range_str:[{required:!0,trigger:"blur",validator:t}]},rules:[],mac_group_list:[],time_group_list:[],test_str:"hello",def_time_group:0,def_mac_group:0,app_table:{},enable:0,listLoading:!1,form:{dialogStatus:"",tmp_rule:{enable:0,id:"",name:"",ip_list:[],ip_range_str:"",up_rate:0,down_rate:0},rules:[],rule_title:"",dialogFormVisible:!1,dialogPvVisible:!1,checked:!0,options:[]},status:{macGroupRule:{},timeGroupRule:{time_list:[]},dialogMacGroupVisible:!1,dialogTimeGroupVisible:!1,weekNameList:["周日","周一","周二","周三","周四","周五","周六"]}}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;Object(i["y"])().then((function(e){if(t.rules=e.data.rules,t.rules.length>0)for(var r in t.rules)t.rules[r].ip_range_str="",console.log(t.rules[r].ip_range),t.rules[r].ip_list=t.rules[r].ip_range.split(","),console.log("ip list len = "+t.rules[r].ip_list.length);t.enable=e.data.enable,t.listLoading=!1})),this.listLoading=!0},onSubmit:function(){this.$message("保存成功!")},handleCreate:function(){this.form.dialogStatus="create",this.form.rule_title="添加规则",this.form.tmp_rule.enable=1,this.form.tmp_rule.id=0,this.form.tmp_rule.up_rate=1024,this.form.tmp_rule.down_rate=1024,this.form.tmp_rule.ip_range_str="",this.form.tmp_rule.name="",this.form.dialogFormVisible=!0},generate_rule_data:function(t){var e={data:{id:0,enable:0,up_rate:0,down_rate:0,name:"",ip_range:""}};e.data.id=t.id,e.data.enable=t.enable,e.data.name=t.name,e.data.up_rate=t.up_rate,e.data.down_rate=t.down_rate;var r=t.ip_range_str.split("\n");for(var n in r)0!=r[n].length&&o(r[n],0,r[n].length)&&(0==e.data.ip_range.length?e.data.ip_range+=r[n]:e.data.ip_range=e.data.ip_range+","+r[n],console.log("ip range = "+e.data.ip_range));return e},createData:function(){var t=this,e=Object.assign({},this.form.tmp_rule),r=this.generate_rule_data(e);Object(i["c"])(r).then((function(e){t.fetchData(),t.$notify({message:"添加成功",type:"success",duration:2e3})})),this.form.dialogFormVisible=!1},updateData:function(){var t=this,e=Object.assign({},this.form.tmp_rule),r=this.generate_rule_data(e);Object(i["O"])(r).then((function(e){t.fetchData(),t.$notify({message:"修改成功",type:"success",duration:2e3})})),this.form.dialogFormVisible=!1},handleDeleteIpQosRule:function(t){var e=this,r=Object.assign({},t),n={data:{id:0}};n.data.id=r.id,Object(i["m"])(n).then((function(t){e.fetchData(),e.$notify({message:"刪除成功",type:"success",duration:2e3})}))},handleUpdate:function(t){this.form.tmp_rule=Object.assign({},t);var e=this.form.tmp_rule.ip_range.split(",");if(e.length>0)for(var r in e)this.form.tmp_rule.ip_range_str=0==r?e[r]+"\n":this.form.tmp_rule.ip_range_str+e[r]+"\n";this.form.dialogStatus="update",this.form.rule_title="编辑规则",this.form.dialogFormVisible=!0},handleChange:function(t){},changeEnableHandle:function(t){var e=this,r={data:{enable:t}};Object(i["I"])(r).then((function(t){e.fetchData(),e.$notify({message:"修改成功",type:"success",duration:2e3})}))},displayStr:function(t){return t&&""!=t?t:"--"}}},s=c,d=(r("7509"),r("2877")),f=Object(d["a"])(s,n,a,!1,null,"07eb1260",null);e["default"]=f.exports},"2c3e":function(t,e,r){var n=r("83ab"),a=r("9f7f").UNSUPPORTED_Y,i=r("9bf2").f,o=r("69f3").get,u=RegExp.prototype;n&&a&&i(RegExp.prototype,"sticky",{configurable:!0,get:function(){if(this!==u){if(this instanceof RegExp)return!!o(this).sticky;throw TypeError("Incompatible receiver, RegExp required")}}})},"466d":function(t,e,r){"use strict";var n=r("d784"),a=r("825a"),i=r("50c4"),o=r("1d80"),u=r("8aa5"),l=r("14c3");n("match",1,(function(t,e,r){return[function(e){var r=o(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,r):new RegExp(e)[t](String(r))},function(t){var n=r(e,t,this);if(n.done)return n.value;var o=a(t),c=String(this);if(!o.global)return l(o,c);var s=o.unicode;o.lastIndex=0;var d,f=[],p=0;while(null!==(d=l(o,c))){var _=String(d[0]);f[p]=_,""===_&&(o.lastIndex=u(c,i(o.lastIndex),s)),p++}return 0===p?null:f}]}))},"4d63":function(t,e,r){var n=r("83ab"),a=r("da84"),i=r("94ca"),o=r("7156"),u=r("9bf2").f,l=r("241c").f,c=r("44e7"),s=r("ad6d"),d=r("9f7f"),f=r("6eeb"),p=r("d039"),_=r("69f3").set,m=r("2626"),g=r("b622"),h=g("match"),b=a.RegExp,v=b.prototype,x=/a/g,w=/a/g,y=new b(x)!==x,O=d.UNSUPPORTED_Y,j=n&&i("RegExp",!y||O||p((function(){return w[h]=!1,b(x)!=x||b(w)==w||"/a/i"!=b(x,"i")})));if(j){var E=function(t,e){var r,n=this instanceof E,a=c(t),i=void 0===e;if(!n&&a&&t.constructor===E&&i)return t;y?a&&!i&&(t=t.source):t instanceof E&&(i&&(e=s.call(t)),t=t.source),O&&(r=!!e&&e.indexOf("y")>-1,r&&(e=e.replace(/y/g,"")));var u=o(y?new b(t,e):b(t,e),n?this:v,E);return O&&r&&_(u,{sticky:r}),u},S=function(t){t in E||u(E,t,{configurable:!0,get:function(){return b[t]},set:function(e){b[t]=e}})},k=l(b),R=0;while(k.length>R)S(k[R++]);v.constructor=E,E.prototype=v,f(a,"RegExp",E)}m("RegExp")},"697f":function(t,e,r){},7156:function(t,e,r){var n=r("861d"),a=r("d2bb");t.exports=function(t,e,r){var i,o;return a&&"function"==typeof(i=e.constructor)&&i!==r&&n(o=i.prototype)&&o!==r.prototype&&a(t,o),t}},7509:function(t,e,r){"use strict";r("697f")},"8aa5":function(t,e,r){"use strict";var n=r("6547").charAt;t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},d784:function(t,e,r){"use strict";r("ac1f");var n=r("6eeb"),a=r("d039"),i=r("b622"),o=r("9263"),u=r("9112"),l=i("species"),c=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),s=function(){return"$0"==="a".replace(/./,"$0")}(),d=i("replace"),f=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),p=!a((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,e,r,d){var _=i(t),m=!a((function(){var e={};return e[_]=function(){return 7},7!=""[t](e)})),g=m&&!a((function(){var e=!1,r=/a/;return"split"===t&&(r={},r.constructor={},r.constructor[l]=function(){return r},r.flags="",r[_]=/./[_]),r.exec=function(){return e=!0,null},r[_](""),!e}));if(!m||!g||"replace"===t&&(!c||!s||f)||"split"===t&&!p){var h=/./[_],b=r(_,""[t],(function(t,e,r,n,a){return e.exec===o?m&&!a?{done:!0,value:h.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),v=b[0],x=b[1];n(String.prototype,t,v),n(RegExp.prototype,_,2==e?function(t,e){return x.call(t,this,e)}:function(t){return x.call(t,this)})}d&&u(RegExp.prototype[_],"sham",!0)}},f9b6:function(t,e,r){"use strict";r.d(e,"v",(function(){return a})),r.d(e,"G",(function(){return i})),r.d(e,"j",(function(){return o})),r.d(e,"i",(function(){return u})),r.d(e,"t",(function(){return l})),r.d(e,"A",(function(){return c})),r.d(e,"P",(function(){return s})),r.d(e,"s",(function(){return d})),r.d(e,"C",(function(){return f})),r.d(e,"g",(function(){return p})),r.d(e,"q",(function(){return _})),r.d(e,"R",(function(){return m})),r.d(e,"u",(function(){return g})),r.d(e,"z",(function(){return h})),r.d(e,"w",(function(){return b})),r.d(e,"x",(function(){return v})),r.d(e,"e",(function(){return x})),r.d(e,"o",(function(){return w})),r.d(e,"b",(function(){return y})),r.d(e,"l",(function(){return O})),r.d(e,"M",(function(){return j})),r.d(e,"k",(function(){return E})),r.d(e,"a",(function(){return S})),r.d(e,"E",(function(){return k})),r.d(e,"n",(function(){return R})),r.d(e,"d",(function(){return $})),r.d(e,"J",(function(){return D})),r.d(e,"p",(function(){return V})),r.d(e,"f",(function(){return L})),r.d(e,"K",(function(){return z})),r.d(e,"B",(function(){return G})),r.d(e,"Q",(function(){return T})),r.d(e,"F",(function(){return P})),r.d(e,"H",(function(){return C})),r.d(e,"N",(function(){return I})),r.d(e,"r",(function(){return F})),r.d(e,"h",(function(){return U})),r.d(e,"L",(function(){return N})),r.d(e,"D",(function(){return q})),r.d(e,"S",(function(){return A})),r.d(e,"y",(function(){return B})),r.d(e,"O",(function(){return K})),r.d(e,"m",(function(){return M})),r.d(e,"c",(function(){return H})),r.d(e,"I",(function(){return J}));var n=r("b775");function a(t){return Object(n["a"])({url:"/get_child_guard",method:"get",params:t})}function i(t){return Object(n["a"])({url:"/set_child_guard",method:"post",data:t})}function o(t){return Object(n["a"])({url:"/clear_child_guard_week_stats",method:"post",data:t})}function u(t){return Object(n["a"])({url:"/clear_child_guard_day_stats",method:"post",data:t})}function l(t){return Object(n["a"])({url:"/get_app_filter",method:"get",params:t})}function c(t){return Object(n["a"])({url:"/get_mac_filter",method:"get",params:t})}function s(t){return Object(n["a"])({url:"/update_mac_filter_rule",method:"post",data:t})}function d(t){return Object(n["a"])({url:"/get_app_class_list",method:"get",params:t})}function f(t){return Object(n["a"])({url:"/get_time_group",method:"get",params:t})}function p(t){return Object(n["a"])({url:"/add_time_group",method:"post",data:t})}function _(t){return Object(n["a"])({url:"/del_time_group",method:"post",data:t})}function m(t){return Object(n["a"])({url:"/update_time_group",method:"post",data:t})}function g(t){return Object(n["a"])({url:"/get_audit",method:"get",params:t})}function h(t){return Object(n["a"])({url:"/get_mac_group",method:"get",params:t})}function b(t){return Object(n["a"])({url:"/get_feature_config",method:"get",params:t})}function v(t){return Object(n["a"])({url:"/get_feature_info",method:"get",params:t})}function x(t){return Object(n["a"])({url:"/add_mac_group",method:"post",data:t})}function w(t){return Object(n["a"])({url:"/del_mac_group",method:"post",data:t})}function y(t){return Object(n["a"])({url:"/add_group_mac",method:"post",data:t})}function O(t){return Object(n["a"])({url:"/del_group_mac",method:"post",data:t})}function j(t){return Object(n["a"])({url:"/update_app_filter_rule",method:"post",data:t})}function E(t){return Object(n["a"])({url:"/del_app_filter_rule",method:"post",data:t})}function S(t){return Object(n["a"])({url:"/add_app_filter_rule",method:"post",data:t})}function k(t){return Object(n["a"])({url:"/set_app_filter",method:"post",data:t})}function R(t){return Object(n["a"])({url:"/del_mac_filter_rule",method:"post",data:t})}function $(t){return Object(n["a"])({url:"/add_mac_filter_rule",method:"post",data:t})}function D(t){return Object(n["a"])({url:"/set_mac_filter",method:"post",data:t})}function V(t){return Object(n["a"])({url:"/del_port_filter_rule",method:"post",data:t})}function L(t){return Object(n["a"])({url:"/add_port_filter_rule",method:"post",data:t})}function z(t){return Object(n["a"])({url:"/set_port_filter",method:"post",data:t})}function G(t){return Object(n["a"])({url:"/get_port_filter",method:"get",params:t})}function T(t){return Object(n["a"])({url:"/update_port_filter_rule",method:"post",data:t})}function P(t){return Object(n["a"])({url:"/set_audit",method:"post",data:t})}function C(t){return Object(n["a"])({url:"/set_feature_config",method:"post",data:t})}function I(t){return Object(n["a"])({url:"/update_feature",method:"post",data:t})}function F(t){return Object(n["a"])({url:"/del_url_filter_rule",method:"post",data:t})}function U(t){return Object(n["a"])({url:"/add_url_filter_rule",method:"post",data:t})}function N(t){return Object(n["a"])({url:"/set_url_filter",method:"post",data:t})}function q(t){return Object(n["a"])({url:"/get_url_filter",method:"get",params:t})}function A(t){return Object(n["a"])({url:"/update_url_filter_rule",method:"post",data:t})}function B(t){return Object(n["a"])({url:"/get_ip_qos",method:"get",params:t})}function K(t){return Object(n["a"])({url:"/update_ip_qos_rule",method:"post",data:t})}function M(t){return Object(n["a"])({url:"/del_ip_qos_rule",method:"post",data:t})}function H(t){return Object(n["a"])({url:"/add_ip_qos_rule",method:"post",data:t})}function J(t){return Object(n["a"])({url:"/set_ip_qos",method:"post",data:t})}}}]);