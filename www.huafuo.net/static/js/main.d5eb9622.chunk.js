(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(56)},28:function(e,t,a){},30:function(e,t,a){},51:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(18),r=a.n(c);a(28),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(57),i=a(6),s=a(7),m=a(9),u=a(8),d=a(10),E=a(58),p=(a(30),a(19)),b=a.n(p),_=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={indexData:""},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this;b.a.get("http://localhost:3030/data",{}).then(function(t){e.setState(function(){return{indexData:t.data}})})}},{key:"render",value:function(){for(var e=[],t=0;t<this.state.indexData.length;t++)e.push(l.a.createElement("li",{key:t},l.a.createElement("div",null,l.a.createElement("img",{src:this.state.indexData[t].url,alt:"userImg"})),l.a.createElement("p",{className:"user_name_box"},this.state.indexData[t].username),l.a.createElement("p",{className:"user_content_font"},this.state.indexData[t].content)));return l.a.createElement("div",null,l.a.createElement("div",{className:"index_box_div"},l.a.createElement("ul",{className:"ul_box_list"},l.a.createElement("li",null,"\u7559\u8a00\u677f"),l.a.createElement("li",null,"\u60bb\u60bb\u4e4b\u5149"),l.a.createElement("li",null,"\u957f\u591c\u6f2b\u6f2b"),l.a.createElement("li",null,"\u8bba\u575b"),l.a.createElement("li",null,"\u5173\u4e8e\u6b64\u7ad9")),l.a.createElement("div",{className:"body_box_div"},l.a.createElement("p",null,"\u6b22\u8fce\u6765\u5230\u5fae\u8a00\u677f"),l.a.createElement("p",null,"\u8ff0\u8bf4\u4f60\u7684\u6545\u4e8b\uff0c\u6211\u5728\u8fd9\u7ec6\u7ec6\u8046\u542c"),l.a.createElement("p",null,"\u6ca1\u5173\u7cfb\uff0c\u957f\u591c\u6f2b\u6f2b\u603b\u4f1a\u5929\u4eae\u7684"),l.a.createElement("div",null,l.a.createElement("input",{placeholder:"#\u5fae\u5149#"}),l.a.createElement("button",null,"\u641c\u7d22")),l.a.createElement("p",{className:"font_box"},"\u6b22\u8fce\u4f60")),l.a.createElement("div",{className:"user_content_box"},l.a.createElement("ul",null,e))))}}]),t}(n.Component),v=(a(51),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"login_backgrund_box"},l.a.createElement("div",{className:"login_left_box"},l.a.createElement("p",{className:"left_box_font"},"Hi! Stranger "),l.a.createElement("p",{className:"bottom_box_font"},"@2018-2019 \u534e\u5e9c\u79d1\u6280\u6709\u9650\u516c\u53f8")),l.a.createElement("div",{className:"login_right_box"},l.a.createElement("div",{className:"margin_center_box"},l.a.createElement("span",{className:"font_box"},"Tell \xa0",l.a.createElement("span",null,"Your"),"\xa0 Story"),l.a.createElement("div",{className:"body_header_box"},l.a.createElement("p",{className:"title_box"},"\u8bf4\u51fa\u4f60\u7684\u6545\u4e8b "),l.a.createElement("p",{className:"china_font"}," \u8046\u542c\u4f60\u7684\u8fc7\u5f80")),l.a.createElement("div",{className:"input_Div"},l.a.createElement("div",{className:"Input_box_cont"},l.a.createElement("input",{placeholder:"you name"}))),l.a.createElement("div",{className:"input_Div"},l.a.createElement("div",{className:"Input_box_cont"},l.a.createElement("input",{placeholder:"you Email"}))),l.a.createElement("div",{className:"input_Div"},l.a.createElement("div",{className:"Input_box_cont"},l.a.createElement("input",{placeholder:"you Password",type:"password"}))),l.a.createElement("div",{className:"login_btn"},"Login"))))}}]),t}(n.Component)),h=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement(E.a,{exact:!0,path:"/",component:_}),l.a.createElement(E.a,{path:"/login",component:v})))}}]),t}(n.Component);r.a.render(l.a.createElement(o.a,null,l.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,2,1]]]);
//# sourceMappingURL=main.d5eb9622.chunk.js.map