(this["webpackJsonpcovid-app-v1"]=this["webpackJsonpcovid-app-v1"]||[]).push([[0],{11:function(e,c,s){"use strict";s.r(c);var a=s(1),t=s.n(a),i=s(4),n=s.n(i),d=(s(9),s(3)),r=s(0);var l=function(){var e,c,s=Object(a.useRef)("all"),t=Object(a.useState)([]),i=Object(d.a)(t,2),n=i[0],l=i[1],o=Object(a.useState)(!1),j=Object(d.a)(o,2),h=j[0],v=j[1],b=new Date;return Object(a.useEffect)((function(){fetch("https://coronavirus-19-api.herokuapp.com/".concat(s.current)).then((function(e){return e.json()})).then((function(e){l(e)}))}),[h]),Object(r.jsx)("div",{className:"app",children:Object(r.jsxs)("main",{children:[Object(r.jsxs)("div",{className:"search-box",children:[Object(r.jsx)("div",{className:"covid-svg ico",children:Object(r.jsx)("img",{src:"images/covid-19.svg",className:"nav-icon",alt:"covid-icon"})}),Object(r.jsx)("div",{className:"search-input",children:Object(r.jsx)("input",{type:"text",className:"search-input",onChange:function(e){s.current="countries/"+e.target.value}})}),Object(r.jsx)("div",{className:"search-icon ico",onClick:function(){v(!h)},children:Object(r.jsx)("img",{src:"images/search.svg",className:"nav-icon",alt:"search-icon"})}),Object(r.jsx)("div",{className:"location-icon ico",children:Object(r.jsx)("img",{src:"images/location.svg",className:"nav-icon",alt:"location-icon"})})]}),"undefined"!==typeof n.cases?Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("div",{className:"country-header",children:null!==(e=n.country)&&void 0!==e?e:"Global"}),Object(r.jsxs)("div",{className:"current-time",children:[b.toLocaleString("default",{month:"long"})," ",b.getDate(),",",b.getFullYear()]}),Object(r.jsxs)("div",{className:"total-cases",children:[Object(r.jsx)("div",{className:"tc-header",children:"Total Cases"}),Object(r.jsx)("div",{className:"tc-cases",children:n.cases})]}),Object(r.jsxs)("div",{className:"card active-cases",children:[Object(r.jsx)("div",{className:"card-header",children:"Active Cases"}),Object(r.jsx)("div",{className:"card-body",children:null!==(c=n.active)&&void 0!==c?c:"n/a"})]}),Object(r.jsxs)("div",{className:"card recovered-cases",children:[Object(r.jsx)("div",{className:"card-header",children:"Recovered"}),Object(r.jsx)("div",{className:"card-body",children:n.recovered})]}),Object(r.jsxs)("div",{className:"card death-cases",children:[Object(r.jsx)("div",{className:"card-header",children:"Death"}),Object(r.jsx)("div",{className:"card-body",children:n.deaths})]})]}):Object(r.jsx)("h2",{children:"Loading"}),Object(r.jsx)("div",{className:"footer",children:"Made with \u2764\ufe0f\ufe0f by tsensei"})]})})};n.a.render(Object(r.jsx)(t.a.StrictMode,{children:Object(r.jsx)(l,{})}),document.getElementById("root"))},9:function(e,c,s){}},[[11,1,2]]]);
//# sourceMappingURL=main.cb6d0a05.chunk.js.map