(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6defc6fd"],{"3bee":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[0==e.radios.length?n("div",{staticStyle:{"margin-left":"20px","font-size":"15px"}},[e._v(" 新界面没有适配该设备的无线配置，如果设备带无线请进入"),n("a",{staticStyle:{color:"blue"},attrs:{href:"cgi-bin/luci"}},[e._v("专业模式")]),e._v("进行无线配置。 ")]):n("div",{staticStyle:{"margin-left":"20px","font-size":"14px"}},[n("p",[e._v("无线(WiFi)设置")])]),n("div",{staticStyle:{position:"relative"}},[n("el-tabs",{attrs:{type:"card"},on:{"tab-remove":e.removeTab},model:{value:e.selectGroup,callback:function(t){e.selectGroup=t},expression:"selectGroup"}},e._l(e.radios,(function(t,a){return n("el-tab-pane",{key:t.name,attrs:{label:t.name,name:t.name}},[n("el-form",{ref:"wifiForm",refInFor:!0,attrs:{model:t.iface_list[0],rules:e.ssidRules,"label-width":"20%",size:"small"}},[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",placement:"top"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("span",[e._v(" 可以将两个频段无线名称、加密方式、加密算法设置成一样实现双频合一，")]),n("br")]),n("el-form-item",{attrs:{label:"无线名称:",prop:"ssid"}},[n("el-input",{staticStyle:{width:"300px"},model:{value:t.iface_list[0].ssid,callback:function(n){e.$set(t.iface_list[0],"ssid",n)},expression:"item.iface_list[0].ssid"}})],1)],1),n("el-form-item",{attrs:{label:"加密方式:"}},[n("el-select",{staticStyle:{width:"300px"},model:{value:t.iface_list[0].auth_mode,callback:function(n){e.$set(t.iface_list[0],"auth_mode",n)},expression:"item.iface_list[0].auth_mode"}},e._l(e.auth_mode_options,(function(e){return n("el-option",{key:e.auth_mode,attrs:{label:e.name,value:e.auth_mode,width:"139px"}})})),1)],1),"OPEN"!=t.iface_list[0].auth_mode?n("el-form-item",{attrs:{label:"加密算法:"}},[n("el-radio",{attrs:{label:"TKIP"},model:{value:t.iface_list[0].encry_type,callback:function(n){e.$set(t.iface_list[0],"encry_type",n)},expression:"item.iface_list[0].encry_type"}},[e._v("TKIP")]),n("el-radio",{attrs:{label:"AES"},model:{value:t.iface_list[0].encry_type,callback:function(n){e.$set(t.iface_list[0],"encry_type",n)},expression:"item.iface_list[0].encry_type"}},[e._v("AES")]),n("el-radio",{attrs:{label:"TKIPAES"},model:{value:t.iface_list[0].encry_type,callback:function(n){e.$set(t.iface_list[0],"encry_type",n)},expression:"item.iface_list[0].encry_type"}},[e._v("TKIP&AES(推荐)")])],1):e._e(),"OPEN"!=t.iface_list[0].auth_mode?n("el-form-item",{attrs:{label:"无线密码:",prop:"key"}},[n("el-input",{staticStyle:{width:"300px"},attrs:{type:"password","show-password":""},model:{value:t.iface_list[0].key,callback:function(n){e.$set(t.iface_list[0],"key",n)},expression:"item.iface_list[0].key"}})],1):e._e(),n("el-form-item",{attrs:{label:"信道:"}},[n("el-select",{staticStyle:{width:"300px"},model:{value:t.channel,callback:function(n){e.$set(t,"channel",n)},expression:"item.channel"}},[0==t.band?n("div",e._l(e.channel_24g_options,(function(e){return n("el-option",{key:e.channel,attrs:{label:e.name,value:e.channel,width:"139px"}})})),1):e._e(),1==t.band?n("div",e._l(e.channel_5g_options,(function(e){return n("el-option",{key:e.channel,attrs:{label:e.name,value:e.channel,width:"139px"}})})),1):e._e()])],1),n("el-form-item",[n("el-button",{staticStyle:{width:"300px"},attrs:{type:"primary"},on:{click:function(n){return e.onSubmit(t.band)}}},[e._v("保存")])],1)],1)],1)})),1)],1)])},i=[],l=n("2435"),r=n("ab10"),c={data:function(){var e=function(e,t,n){0==t.length?n(new Error("请输入无线名称")):n()},t=function(e,t,n){t.length<8?n(new Error("密码至少为8位")):n()};return{ssidRules:{ssid:[{required:!0,trigger:"blur",validator:e}],key:[{required:!0,trigger:"blur",validator:t}]},auth_mode_options:[{auth_mode:"OPEN",name:"不加密"},{auth_mode:"WPAPSK",name:"WPAPSK"},{auth_mode:"WPA2PSK",name:"WPA2PSK"},{auth_mode:"WPAPSKWPA2PSK",name:"WPAPSK/WPA2PSK(推荐)"}],encry_type_options:[{encry_type:"TKIP",name:"TKIP"},{encry_type:"AES",name:"AES"},{encry_type:"TKIPAES",name:"TKIP&AES(推荐)"}],channel_24g_options:[{channel:1,name:"1"},{channel:2,name:"2"},{channel:3,name:"3"},{channel:4,name:"4"},{channel:5,name:"5"},{channel:6,name:"6"},{channel:7,name:"7"},{channel:8,name:"8"},{channel:9,name:"9"},{channel:10,name:"10"},{channel:11,name:"11"},{channel:12,name:"12"},{channel:13,name:"13"}],channel_5g_options:[{channel:36,name:"36"},{channel:40,name:"40"},{channel:44,name:"44"},{channel:48,name:"48"},{channel:149,name:"149"},{channel:153,name:"153"},{channel:157,name:"157"},{channel:161,name:"161"}],selectGroup:"2.4G",multipleSelection:{},radios:[],dev_list:[],tabIndex:0}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;Object(r["d"])().then((function(t){e.radios=t.data.radio_list,e.radio_num=t.data.radio_num}))},addTab:function(e){},removeTab:function(e){},onSubmit:function(e){var t=this,n={data:{}};if(n.data=this.radios[e],this.radios[e].iface_list[0].key.length<8&&"OPEN"!=this.radios[e].iface_list[0].auth_mode||0==this.radios[e].iface_list[0].key.ssid)return this.$message({message:"参数错误",type:"error"}),!1;var a=this.$loading({lock:l["d"].loading.save.lock,text:"无线正在重启,请稍后...",spinner:l["d"].loading.save.spinner,background:l["d"].loading.save.background});Object(r["i"])(n).then((function(e){}));var i=setInterval((function(){t.fetchData(),clearInterval(i),a.close()}),1e4)}}},o=c,s=(n("e80a"),n("2877")),u=Object(s["a"])(o,a,i,!1,null,"05eb71fe",null);t["default"]=u.exports},8664:function(e,t,n){},ab10:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"g",(function(){return l})),n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return c})),n.d(t,"e",(function(){return o})),n.d(t,"f",(function(){return s})),n.d(t,"h",(function(){return u})),n.d(t,"d",(function(){return d})),n.d(t,"i",(function(){return m}));var a=n("b775");function i(e){return Object(a["a"])({url:"/get_network_base",method:"get",params:e})}function l(e){return Object(a["a"])({url:"/set_network_base",method:"post",data:e})}function r(e){return Object(a["a"])({url:"/get_lan_info",method:"get",params:e})}function c(e){return Object(a["a"])({url:"/get_wan_info",method:"get",params:e})}function o(e){return Object(a["a"])({url:"/set_lan_info",method:"post",data:e})}function s(e){return Object(a["a"])({url:"/set_lan_mac",method:"post",data:e})}function u(e){return Object(a["a"])({url:"/set_wan_info",method:"post",data:e})}function d(e){return Object(a["a"])({url:"/get_wireless_info",method:"get",params:e})}function m(e){return Object(a["a"])({url:"/set_wireless_ssid1",method:"post",data:e})}},e80a:function(e,t,n){"use strict";n("8664")}}]);