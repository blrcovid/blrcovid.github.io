(this.webpackJsonpblrcovid=this.webpackJsonpblrcovid||[]).push([[0],{16:function(e,t,i){},17:function(e,t,i){},18:function(e,t,i){},25:function(e,t,i){},26:function(e,t,i){},27:function(e,t,i){"use strict";i.r(t);var n=i(3),c=i.n(n),s=i(10),o=i.n(s),a=(i(16),i(5)),r=(i(17),i(18),i(2)),d=i(4),l=i(11),j=i(7),b=i(0);var x=function(e){return Object(b.jsxs)("div",{className:"card",children:[e.verified?Object(b.jsx)("div",{className:"status",style:{width:"70px",backgroundColor:"rgba(5, 194, 46, 0.3)"},children:"Verified"}):Object(b.jsx)("div",{className:"status",style:{width:"100px",backgroundColor:"rgba(185, 19, 7, 0.2)",color:"rgb(220,38,38)"},children:"Not Verified"}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{style:{margin:"5px",fontWeight:700,fontSize:"25px"},children:e.title}),Object(b.jsxs)("div",{style:{textAlign:"right",marginTop:"10px"},children:[Object(b.jsx)(r.a,{icon:j.b}),"\xa0\xa0",Object(b.jsx)(r.a,{icon:j.a}),"\xa0\xa0",Object(b.jsx)(r.a,{icon:j.c}),"\xa0\xa0",Object(b.jsx)(r.a,{icon:l.a}),"\xa0\xa0"]}),Object(b.jsxs)("div",{style:{marginTop:"10px"},children:["\xa0\xa0",Object(b.jsx)(r.a,{icon:d.d,size:"1x"}),"\xa0\xa0",Object(b.jsx)("span",{style:{fontSize:"18px"},children:e.loc})]}),Object(b.jsxs)("div",{style:{marginTop:"10px",textAlign:"right"},children:[Object(b.jsx)(r.a,{icon:d.e}),"\xa0\xa0",Object(b.jsx)("a",{href:"tel:".concat(e.phno),children:e.phno})]}),Object(b.jsx)("div",{style:{marginTop:"10px",paddingLeft:"10px"},children:e.desc}),Object(b.jsxs)("div",{style:{textAlign:"right"},children:["Last ",e.verified?"Verified":"Checked"," - ",Object(b.jsx)("b",{children:e.time})]})]})};i(25);var g=function(e){return Object(b.jsxs)("div",{id:"beds",children:[Object(b.jsx)("div",{style:{fontWeight:700,fontSize:"30px",margin:"10px"},children:e.mode}),Object(b.jsx)(x,{verified:!0,title:"Mallige Hospital",loc:"Kaggadasapura",phno:6230326108,desc:"Oxygen Beds: 10 ICU Beds: 10",src:"https://www.google.com",time:"2.40PM, 1st May 2021"}),Object(b.jsx)(x,{verified:!1,title:"NRR Hospital",loc:"Bommanahalli",phno:6230326108,desc:"Oxygen available at Kaggadasapura",src:"https://www.google.com",time:"2.40PM, 1st May 2021"}),Object(b.jsx)(x,{verified:!1,title:"NRR Hospital",loc:"Bommanahalli",phno:6230326108,desc:"Oxygen available at Kaggadasapura",src:"https://www.google.com",time:"2.40PM, 1st May 2021"}),Object(b.jsx)(x,{verified:!1,title:"NRR Hospital",loc:"Bommanahalli",phno:6230326108,desc:"Oxygen available at Kaggadasapura",src:"https://www.google.com",time:"2.40PM, 1st May 2021"})]})};var u=function(){var e=Object(n.useState)([0,0]),t=Object(a.a)(e,2),i=t[0],c=t[1];return Object(n.useLayoutEffect)((function(){function e(){c([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),i};i(26);var h=function(e){var t=u(),i=Object(a.a)(t,1)[0];console.log(i);var n=[["Beds","List of hospitals with type and number of beds available"],["Oxygen","Contacts of people who deliver or provide Oxygen"],["Ambulance","List of Ambulances to contact in case of emergency"],["Blood & Plasma","Contacts of people ready to donate blood and plasma"]],c=[Object(b.jsx)(r.a,{icon:d.b,size:"2x"}),Object(b.jsx)(r.a,{icon:d.c,size:"2x"}),Object(b.jsx)(r.a,{icon:d.a,size:"2x"}),Object(b.jsx)(r.a,{icon:d.f,size:"2x"})],s=[Object(b.jsx)(r.a,{icon:d.b,size:"1x"}),Object(b.jsx)(r.a,{icon:d.c,size:"1x"}),Object(b.jsx)(r.a,{icon:d.a,size:"1x"}),Object(b.jsx)(r.a,{icon:d.f,size:"1x"})];return i>=1e3?Object(b.jsx)("div",{id:"menu-vert",children:n.map((function(t,i){return Object(b.jsxs)("div",{style:e.mode!==t[0]?{backgroundColor:"white"}:{backgroundColor:"#b2ceee"},onClick:function(){e.setMode(t[0])},className:"row",children:[Object(b.jsx)("div",{style:{textAlign:"center",gridRowStart:1,gridRowEnd:3,gridColumnStart:1,gridColumnEnd:1},children:c[i]}),Object(b.jsx)("div",{style:{gridRowStart:1,gridColumnStart:2},children:Object(b.jsx)("b",{children:t[0]})}),Object(b.jsx)("div",{style:{gridRowStart:2,gridColumnStart:2},children:Object(b.jsx)("div",{children:t[1]})})]},t[0])}))}):Object(b.jsx)("div",{id:"menu-horiz",children:n.map((function(t,i){return Object(b.jsxs)("div",{style:e.mode!==t[0]?{backgroundColor:"white"}:{backgroundColor:"#b2ceee"},onClick:function(){e.setMode(t[0])},className:"button",children:[Object(b.jsx)("div",{style:{textAlign:"center",gridRowStart:1,gridRowEnd:3,gridColumnStart:1,gridColumnEnd:1},children:s[i]}),Object(b.jsx)("div",{style:{gridRowStart:1,gridColumnStart:2},children:Object(b.jsx)("b",{children:t[0]})})]},t[0])}))})};var O=function(){var e=Object(n.useState)("Beds"),t=Object(a.a)(e,2),i=t[0],c=t[1];return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("div",{id:"heading",children:"Bengaluru Covid Resources"}),Object(b.jsx)(h,{mode:i,setMode:c}),Object(b.jsx)(g,{mode:i})]})},v=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,28)).then((function(t){var i=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;i(e),n(e),c(e),s(e),o(e)}))};o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),v()}},[[27,1,2]]]);
//# sourceMappingURL=main.896610fc.chunk.js.map