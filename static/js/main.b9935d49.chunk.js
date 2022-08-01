(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s=c(5),a=c.n(s),n=c(2),l=c(1),i=(c(10),c(11),c(4)),d=c.n(i),o=c(0),r=function(e){var t=e.todos,c=e.onSelectedTodo,s=e.selectedTodo;return Object(o.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"#"}),Object(o.jsx)("th",{children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("th",{children:"Title"}),Object(o.jsx)("th",{children:" "})]})}),Object(o.jsx)("tbody",{children:t.map((function(e){return Object(o.jsxs)("tr",{"data-cy":"todo",className:d()({"has-background-info-light":(null===s||void 0===s?void 0:s.id)===e.id}),children:[Object(o.jsx)("td",{className:"is-vcentered",children:e.id}),e.completed?Object(o.jsx)("td",{className:"is-vcentered",children:Object(o.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(o.jsx)("i",{className:"fas fa-check"})})}):Object(o.jsx)("td",{className:"is-vcentered"}),Object(o.jsx)("td",{className:"is-vcentered is-expanded",children:Object(o.jsx)("p",{className:d()(e.completed?"has-text-success":"has-text-danger"),children:e.title})}),Object(o.jsx)("td",{className:"has-text-right is-vcentered",children:(null===s||void 0===s?void 0:s.id)===e.id?Object(o.jsx)("button",{"data-cy":"selectButton",className:"button is-link",type:"button",onClick:function(){return c(null)},children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"far fa-eye-slash"})})}):Object(o.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e)},children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"far fa-eye"})})})})]},e.id)}))})]})},j=function(e){var t=e.query,c=e.setQuery,s=e.status,a=e.setStatus;return Object(o.jsxs)("form",{className:"field has-addons",children:[Object(o.jsx)("p",{className:"control",children:Object(o.jsx)("span",{className:"select",children:Object(o.jsxs)("select",{"data-cy":"statusSelect",value:s,onChange:function(e){a(e.target.value)},children:[Object(o.jsx)("option",{value:"all",children:"All"}),Object(o.jsx)("option",{value:"active",children:"Active"}),Object(o.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(o.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(o.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){c(e.target.value)}}),Object(o.jsx)("span",{className:"icon is-left",children:Object(o.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(o.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:t&&Object(o.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c("")}})})]})]})},b=(c(13),function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})});function u(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=1e3,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var h=function(e){var t=e.todo,c=e.onClose,s=Object(l.useState)(null),a=Object(n.a)(s,2),i=a[0],d=a[1];return Object(l.useEffect)((function(){var e;(e=t.userId,u("/users/".concat(e))).then((function(e){return d(e)}))}),[]),Object(o.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(o.jsx)("div",{className:"modal-background"}),i?Object(o.jsxs)("div",{className:"modal-card",children:[Object(o.jsxs)("header",{className:"modal-card-head",children:[Object(o.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(o.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(o.jsxs)("div",{className:"modal-card-body",children:[Object(o.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(o.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(o.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(o.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(o.jsx)("a",{href:"mailto:".concat(i.email),children:i.name})]})]})]}):Object(o.jsx)(b,{})]})},m=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(!1),i=Object(n.a)(a,2),d=i[0],m=i[1],O=Object(l.useState)(null),x=Object(n.a)(O,2),f=x[0],N=x[1],p=Object(l.useState)(""),v=Object(n.a)(p,2),y=v[0],g=v[1],k=Object(l.useState)(""),S=Object(n.a)(k,2),C=S[0],w=S[1],T=c.filter((function(e){return e.title.toLowerCase().includes(y.toLowerCase())})).filter((function(e){return function(e,t){switch(t){case"active":return!e.completed;case"completed":return e.completed;default:return e}}(e,C)}));return Object(l.useEffect)((function(){u("/todos").then((function(e){s(e),m(!0)}))}),[]),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"section",children:[Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("h1",{className:"title",children:"Todos:"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsx)(j,{query:y,setQuery:g,status:C,setStatus:w})}),Object(o.jsx)("div",{className:"block",children:d?Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(r,{todos:T,selectedTodo:f,onSelectedTodo:N})}):Object(o.jsx)(b,{})})]})}),f&&Object(o.jsx)(h,{todo:f,onClose:function(){N(null)}})]})})};a.a.render(Object(o.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.b9935d49.chunk.js.map