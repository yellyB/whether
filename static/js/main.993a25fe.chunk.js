(this.webpackJsonpwhether=this.webpackJsonpwhether||[]).push([[0],{29:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a,r,c,s,i=n(1),o=n.n(i),u=n(24),l=n.n(u),m=(n(29),n(4)),d=n.n(m),f=n(6),h=n(2),j=(n(31),n(32),n(5)),p=n.n(j),b=n(7);!function(e){e.POP="POP",e.PTY="PTY",e.PCP="PCP",e.REH="REH",e.SNO="SNO",e.SKY="SKY",e.TMP="TMP",e.TMN="TMN",e.TMX="TMX",e.UUU="UUU",e.VVV="VVV",e.WAV="WAV",e.VEC="VEC",e.WSD="WSD"}(a||(a={})),function(e){e[e["\ub9d1\uc74c"]=1]="\ub9d1\uc74c",e[e["\uad6c\ub984\ub9ce\uc74c"]=3]="\uad6c\ub984\ub9ce\uc74c",e[e["\ud750\ub9bc"]=4]="\ud750\ub9bc"}(r||(r={})),function(e){e[e["\uc5c6\uc74c"]=0]="\uc5c6\uc74c",e[e["\ube44"]=1]="\ube44",e[e["\ube44\ub208"]=2]="\ube44\ub208",e[e["\ub208"]=3]="\ub208",e[e["\uc18c\ub098\uae30"]=4]="\uc18c\ub098\uae30"}(c||(c={})),function(e){e.sun="sun",e.sunny="sunny",e.rain="rain",e.rain1="rain1",e.rainny="rainny",e.rainny1="rainny1",e.snow="snow",e.snowy="snowy",e.cloud="cloud",e.cloudy="cloudy",e.wind="wind",e.windy="windy",e.lightning="lightning",e.lightning1="lightning1",e.moon="moon",e.moony="moony"}(s||(s={}));var g=function(e){return Math.round(Number(e))},v=function(e){if(e.sky===r.\uad6c\ub984\ub9ce\uc74c||e.sky===r.\ud750\ub9bc)switch(e.pty){case c.\ube44:return s.rainny1;case c.\ube44\ub208:case c.\ub208:return s.snowy;case c.\uc18c\ub098\uae30:return s.rainny1;default:return e.sky===r.\uad6c\ub984\ub9ce\uc74c?s.cloud:s.cloudy}else switch(e.pty){case c.\ube44:return s.rainny;case c.\ube44\ub208:case c.\ub208:return s.snow;case c.\uc18c\ub098\uae30:return s.rainny;default:return s.sun}},O=function(e){switch(e){case 1:return"\ub0b4\uc77c";case 2:return"\ubaa8\ub808";case 3:return"\uae00\ud53c";default:return"\uc9c0\uae08"}},x=n(0),y=function(e){var t=e.values;return Object(i.useEffect)((function(){t.length>0&&(function(){var e=document.getElementById("chart");if(e.getContext){var t=e.getContext("2d"),n=t.createLinearGradient(0,0,0,250);n.addColorStop(0,"rgb(243 205 194 / 10%)"),n.addColorStop(.4,"white"),n.addColorStop(.6,"white"),n.addColorStop(1,"rgb(202 229 239 / 10%)"),t.fillStyle=n,t.fillRect(0,0,3400,250)}}(),function(){var e=document.getElementById("chart"),n=document.getElementById("chart");if(e.getContext){var a=e.getContext("2d"),r=(n.getContext("2d"),new Image),c=new Image,i=new Image,o=new Image,u=new Image,l=new Image,m=new Image,d=new Image,f=new Image,h=new Image;r.src="/whether/images/whether/sun.png",c.src="/whether/images/whether/sunny.png",i.src="/whether/images/whether/rain.png",o.src="/whether/images/whether/rain1.png",u.src="/whether/images/whether/rainny.png",l.src="/whether/images/whether/rainny1.png",m.src="/whether/images/whether/snow.png",d.src="/whether/images/whether/snowy.png",f.src="/whether/images/whether/cloud.png",h.src="/whether/images/whether/cloudy.png",h.onload=function(){var e=0,n=80;n+=5*t[0].tmp*2,a.strokeStyle="pink",a.lineWidth=3,a.beginPath();var c,i=Math.PI+2*Math.PI/2,o="",j=Object(b.a)(t);try{for(j.s();!(c=j.n()).done;){var g=c.value;e+=50;var x=n-5*g.tmp;a.lineTo(e,x),a.arc(e,x,3,0,i,!0);var y=v(g);if(a.drawImage(y===s.sun?r:y===s.rainny?u:y===s.rainny1?l:y===s.snow?m:y===s.snowy?d:y===s.cloud?f:y===s.cloudy?h:"",e-10,x-50,20,20),a.font="14px nexonGothic_Bold",a.fillStyle="red",a.fillText(g.tmp+"\u02da",e-10,x-10),a.font="10px nexonGothic",a.fillStyle=g.pop>=60?"skyblue":"gray",a.fillText(g.pop+"%",e-5,x+25),o===g.fcstDate){a.font="12px nexonGothic",a.fillStyle="darkgray";var w=g.fcstTime.substring(0,2)+"\uc2dc";a.fillText(w,e-10,220)}else{o=g.fcstDate;var N=p()(g.fcstDate).diff(p()().format("YYYYMMDD"),"days");a.font="12px nexonGothic_Bold",a.fillStyle="black",a.fillText(O(N),e-10,220)}}}catch(_){j.e(_)}finally{j.f()}a.stroke()}}}())}),[t]),Object(x.jsx)("div",{className:"chart_wrapper",children:Object(x.jsx)("canvas",{id:"chart",className:"chart",width:3400-3*t.length,height:250})})},w=function(e){var t=e.value,n=e.min,a=e.max,r=Object(i.useState)(s.sun),c=Object(h.a)(r,2),o=c[0],u=c[1];return Object(i.useEffect)((function(){u(v(t))}),[t]),Object(x.jsxs)("div",{className:"present_wrapper",children:[Object(x.jsx)("img",{alt:"sunny",src:"/whether/images/whether/"+o+".png",className:"present_whether_img"}),Object(x.jsxs)("div",{className:"present_text",children:[Object(x.jsxs)("div",{className:"present_current_text",children:[t.tmp,"\u2103"]}),Object(x.jsxs)("div",{className:"present_other_text",children:[n,"\u02da/ ",a,"\u02da",Object(x.jsx)("br",{}),Object(x.jsx)("img",{alt:"rainPer",src:"/whether/images/whether/rainPer.png",className:"present_rainPer_img"}),t.pop,"%"]})]})]})},N=w;w.defaultProps={value:{fcstDate:"",fcstTime:"",tmp:0,pop:0,pty:0,sky:1},min:0,max:0};n(34);var _=function(){var e=Object(i.useState)("0000\ub144 00\uc6d4 00\uc77c"),t=Object(h.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)("00:00:00"),c=Object(h.a)(r,2),s=c[0],o=c[1],u=function(){var e=new Date,t=String(e.getHours()).padStart(2,"0"),n=String(e.getMinutes()).padStart(2,"0"),a=String(e.getSeconds()).padStart(2,"0");o("".concat(t,":").concat(n,":").concat(a))};Object(i.useEffect)((function(){!function(){var e=new Date,t=(String(e.getFullYear()),String(e.getMonth())),n=String(e.getDate()),r=function(e){var t="";switch(e){case 0:t="\uc77c";break;case 1:t="\uc6d4";break;case 2:t="\ud654";break;case 3:t="\uc218";break;case 4:t="\ubaa9";break;case 5:t="\uae08";break;case 6:t="\ud1a0"}return t}(e.getDay());a("".concat(t,"\uc6d4 ").concat(n,"\uc77c ").concat(r,"\uc694\uc77c"))}(),setInterval(u,1e3)}),[]);var l=Object(i.useState)("dark"),m=Object(h.a)(l,2),d=m[0],f=m[1];return Object(i.useEffect)((function(){!function(){var e=document.getElementById("clock"),t="zero one two three four five six seven eight nine".split(" "),n={},a=["h1","h2",":","m1","m2",":","s1","s2"],r=e.getElementsByClassName("digits")[0];for(var c in a){var s=a[c];if(":"===s){var i=document.createElement("div");i.setAttribute("class","dots"),r.appendChild(i)}else{for(var o=document.createElement("div"),u=1;u<8;u++){var l=document.createElement("span");l.setAttribute("class","d"+u),o.appendChild(l)}n[s]=o,r.append(o)}}var m,d="MON TUE WED THU FRI SAT SUN".split(" "),f=e.getElementsByClassName("weekdays")[0],h=Object(b.a)(d);try{for(h.s();!(m=h.n()).done;){var j=m.value,g=document.createElement("span");g.innerHTML=j,f.appendChild(g)}}catch(O){h.e(O)}finally{h.f()}var v=e.getElementsByClassName("weekdays")[0];!function e(){var a=p()().format("HHmmssdA");n.h1.setAttribute("class",t[a[0]]),n.h2.setAttribute("class",t[a[1]]),n.m1.setAttribute("class",t[a[2]]),n.m2.setAttribute("class",t[a[3]]),n.s1.setAttribute("class",t[a[4]]),n.s2.setAttribute("class",t[a[5]]);var r=a[6];--r<0&&(r=6),v.classList.remove("active"),v.childNodes[r].setAttribute("class","active"),setTimeout(e,1e3)}()}()}),[]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"time_wrapper",children:[Object(x.jsx)("div",{id:"clock",className:d,children:Object(x.jsxs)("div",{className:"display",children:[Object(x.jsx)("div",{className:"weekdays"}),Object(x.jsx)("div",{className:"ampm"}),Object(x.jsx)("div",{className:"digits"})]})}),Object(x.jsx)("div",{className:"time_date",children:n}),Object(x.jsx)("div",{children:Object(x.jsx)("button",{className:"time_theme_btn",onClick:function(){f("dark"===d?"light":"dark")},children:"\ubaa8\ub4dc \ubcc0\uacbd"})})]}),Object(x.jsxs)("div",{className:"time_wrapper",children:[Object(x.jsx)("span",{className:"time_nowTime_time",children:s}),Object(x.jsx)("br",{}),Object(x.jsx)("span",{className:"time_nowTime_date",children:n})]})]})},S=function(){var e=Object(i.useState)(1),t=Object(h.a)(e,2),n=t[0],a=t[1],r=function(){a((function(e){return e<3?e+1:0}))};return Object(i.useEffect)((function(){setInterval(r,500)}),[]),Object(x.jsx)("div",{className:"app_loading",children:Object(x.jsx)("div",{className:"app_loading_imgs",children:Array.from({length:n},(function(e,t){return t})).map((function(e){return Object(x.jsx)("img",{alt:"loading",src:"/whether/images/icon/loading"+e+".png",className:"loading_img"})}))})})},k=function(){return Object(x.jsx)("div",{className:"footer",children:"\ub0a0\uc528\uc758 \ucc38\uacac by.yellyB"})},T=n(14),E=n(11),M=n.n(E),C=n(13),D=n.n(C),I=function(){var e=Object(f.a)(d.a.mark((function e(t){var n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={data:[],min:0,max:0},r="http://apis.data.go.kr",console.log("https://yelly-cors-anywhere.herokuapp.com/"+r+t),e.next=5,M.a.get("https://yelly-cors-anywhere.herokuapp.com/"+r+t).then(function(){var e=Object(f.a)(d.a.mark((function e(t){var r,c,s,i,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("<"===t.data[0]?"\uc2e4\ud328":"\uc131\uacf5"),200!==t.status){e.next=20;break}return r=t.data.response.body.items.item,console.log(r),c=[],s={fcstDate:r[0].fcstDate,fcstTime:r[0].fcstTime,tmp:Number(r[0].fcstValue),pop:0,pty:0,sky:0},r.forEach((function(e){p()().isBefore(p()(e.fcstDate+" "+e.fcstTime.substring(0,2)+"59"))&&(s.fcstTime!==e.fcstTime?(s.fcstDate=e.fcstDate,s.fcstTime=e.fcstTime,s.tmp=Number(e.fcstValue),c.push(Object(T.a)({},s))):"POP"===e.category?s.pop=Number(e.fcstValue):"PTY"===e.category?s.pty=Number(e.fcstValue):"SKY"===e.category&&(s.sky=Number(e.fcstValue)))})),c.push(Object(T.a)({},s)),console.log(c),e.next=11,D.a.find(r,(function(e){return e.category===a.TMN}));case 11:return i=e.sent,e.next=14,D.a.find(r,(function(e){return e.category===a.TMX}));case 14:o=e.sent,n.min=g(i.fcstValue),n.max=g(o.fcstValue),n.data=c,e.next=21;break;case 20:console.log("response error");case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return console.log("error:",e)}));case 5:return e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(f.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,M.a.get("/whether/datas/cody.json").then((function(e){t=e.data,console.log(t)})).catch((function(e){return console.log("error:",e)}));case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(f.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,M.a.get("/whether/datas/items.json").then((function(e){t=e.data})).catch((function(e){return console.log("error:",e)}));case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(e){var t=e.value,n=e.keys,a=e.setKey,r=Object(i.useState)([]),c=Object(h.a)(r,2),s=c[0],o=c[1];return Object(i.useEffect)((function(){P().then((function(e){return e})).then((function(e){var n,a=e[e.length-1],r=Object(b.a)(e);try{for(r.s();!(n=r.n()).done;){var c=n.value;if(t.tmp>=c.value)return void(a=t)}}catch(s){r.e(s)}finally{r.f()}o(a.cloths.split(","))})).catch((function(){console.log("error from component [Recommand]")}))}),[t]),Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"recommand_flex_wrapper",children:s.map((function(e,t){return Object(x.jsx)("div",{className:n===t?"recommand_flex_item recommand_flex_item_selected":"recommand_flex_item",onClick:function(e){return a(t)},children:e},t)}))})})},B=function(e){var t,n=e.data;return Object(x.jsxs)("div",{className:"siteList_items",children:[Object(x.jsx)("div",{className:"item_flex-container",children:Object(x.jsx)("img",{className:"item_img",alt:"img",src:"/whether/images/items/"+n.idx+".jpg"})}),Object(x.jsxs)("div",{className:"item_flex-container",children:[Object(x.jsx)("span",{className:"item_font1",children:n.name}),Object(x.jsx)("br",{}),Object(x.jsxs)("span",{className:"item_font2",children:[n.brand," [",n.itemNo,"]"]}),Object(x.jsx)("br",{}),Object(x.jsx)("span",{className:"item_font3",children:(t=n.price,String(t).replace(/\B(?=(\d{3})+(?!\d))/g,","))}),Object(x.jsx)("br",{}),Object(x.jsxs)("span",{className:"item_font4",children:["\uad6c\ub9e4\ud558\ub7ec \uac00\uae30 ",">"," "]})]})]})},A=function(){var e=Object(i.useState)([]),t=Object(h.a)(e,2),n=t[0],a=t[1];return Object(i.useEffect)((function(){V().then((function(e){return e})).then((function(e){a(e)})).catch((function(){console.log("error from component [SiteList]")}))}),[]),Object(x.jsx)("div",{className:"siteList_wrapper",children:n.length>0&&Array.from({length:4},(function(e,t){return t})).map((function(e){return Object(x.jsx)(B,{data:n[(t=10*e,a=10*(e+1),t=Math.ceil(t),a=Math.floor(a),Math.floor(Math.random()*(a-t))+t)]});var t,a}))})},H=function(){return Object(x.jsxs)("div",{className:"divider_wrapper",children:[Object(x.jsx)("div",{className:"divider"}),Object(x.jsx)("div",{className:"recommand_text",children:"\ucd94\ucc9c \uc544\uc774\ud15c"}),Object(x.jsx)("div",{className:"divider"})]})},K=function(e){var t=Object(i.useState)(0),n=Object(h.a)(t,2),a=n[0],r=n[1];return Object(x.jsxs)("div",{className:"recommand_container",children:[Object(x.jsx)(H,{}),Object(x.jsxs)("div",{className:"recommand_n_site",children:[Object(x.jsx)(Y,{value:e.value,keys:a,setKey:function(e){r(e)}}),Object(x.jsx)(A,{},a)]})]})},U=function(){var e=Object(i.useState)(!0),t=Object(h.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)({serviceKey:"rSzra4lWkesK5rHQ2eKEjLr46yqb%2BstwqooY4ckqtC%2FL26xtiLJpHsugsba3jq2BfWyHdzC4DEYXU%2Bfsf41a7w%3D%3D",numOfRows:1e3,pageNo:1,dataType:"JSON",base_date:p()().format("YYYYMMDD"),base_time:"0200",nx:55,ny:127}),c=Object(h.a)(r,1)[0],s=Object(i.useState)([]),o=Object(h.a)(s,2),u=o[0],l=o[1],m=Object(i.useState)({}),j=Object(h.a)(m,2),b=j[0],g=j[1],v=Object(i.useState)(0),O=Object(h.a)(v,2),w=O[0],T=O[1],E=Object(i.useState)(0),M=Object(h.a)(E,2),C=M[0],D=M[1],P=function(){var e=Object(f.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(t).then((function(e){var t=e.data;l(e.data),g(void 0!==t&&t[0]),T(e.min),D(e.max)}));case 2:return e.abrupt("return",!0);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){var e="/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=".concat(c.serviceKey,"&pageNo=1&numOfRows=").concat(c.numOfRows,"&dataType=").concat(c.dataType,"&base_date=").concat(c.base_date,"&base_time=").concat(c.base_time,"&nx=").concat(c.nx,"&ny=").concat(c.ny);P(e).then((function(e){e&&a(!1)})),document.querySelector("title").innerText="\ub0a0\uc528\uc758 \ucc38\uacac"}),[]),Object(x.jsxs)("div",{className:"app_wrapper",children:[n&&Object(x.jsx)(S,{}),Object(x.jsxs)("div",{className:"app_content",children:[Object(x.jsxs)("div",{className:"upper_part",children:[Object(x.jsxs)("div",{className:"time_n_present_wrapper",children:[Object(x.jsx)(_,{}),Object(x.jsx)(N,{value:b,min:w,max:C})]}),Object(x.jsx)(y,{values:u})]}),Object(x.jsx)(K,{value:b})]}),Object(x.jsx)(k,{})]})};l.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(U,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.993a25fe.chunk.js.map