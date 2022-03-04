(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{23:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),d=n(7),i=n.n(d),s=(n(23),n(3)),a=function(e){return e.todo.filter((function(e){return!1===e.done}))},r=function(e){return e.todo.filter((function(e){return!0===e.done}))},l="ADD_TODO",j="CHECK_TODO",u="UNCHECK_TODO",b="DELETE_TODO",h=function(e){return{type:b,payload:e}},O=(n(30),n(1)),m={doDeleteTodo:h,doCheckTodo:function(e){return{type:j,payload:e}}},f=Object(s.b)(null,m)((function(e){var t=e.todoItem,n=t.id,c=t.task,o=e.doDeleteTodo,d=e.doCheckTodo;return Object(O.jsxs)("div",{className:"todo-item",children:[Object(O.jsx)("h6",{className:"todo-item-task",children:c}),Object(O.jsxs)("div",{className:"todo-item-button-container",children:[Object(O.jsx)("button",{className:"todo-item-delete",onClick:function(){return o(e.todoItem)},children:"Delete"}),Object(O.jsx)("button",{className:"todo-item-check",onClick:function(){return d(e.todoItem)},children:"Mark as checked"})]})]},n)})),x=(n(32),Object(s.b)((function(e){return{todo:a(e)}}))((function(e){var t=e.todo;return Object(O.jsxs)("div",{className:"todo-list-container",children:[Object(O.jsx)("div",{className:"todo-list-title",children:Object(O.jsx)("h5",{children:"Todo List"})}),Object(O.jsx)("div",{className:"todo-items",children:t.length?t.map((function(e){return Object(O.jsx)(f,{todoItem:e},e.id)})):Object(O.jsx)("h6",{children:"There is no item"})})]})}))),k=(n(33),{doUncheckTodo:function(e){return{type:u,payload:e}},doDeleteTodo:h}),p=Object(s.b)(null,k)((function(e){var t=e.doUncheckTodo,n=e.doDeleteTodo,c=e.checkedItem,o=c.id,d=c.task;return Object(O.jsxs)("div",{className:"done-item",children:[Object(O.jsx)("h6",{className:"todo-item-task",children:d}),Object(O.jsx)("button",{className:"done-item-delete",onClick:function(){return n(e.checkedItem)},children:"Delete"}),Object(O.jsx)("button",{className:"done-item-uncheck",onClick:function(){return t(e.checkedItem)},children:"Mark as unchecked"})]},o)})),v=(n(34),Object(s.b)((function(e){return{checked:r(e)}}))((function(e){var t=e.checked;return Object(O.jsxs)("div",{className:"done-list-container",children:[Object(O.jsx)("div",{className:"done-list-title",children:Object(O.jsx)("h5",{children:"Done List"})}),Object(O.jsx)("div",{className:"done-items",children:t.length?t.map((function(e){return Object(O.jsx)(p,{checkedItem:e},t.id)})):Object(O.jsx)("h6",{children:"There is no item "})})]})}))),N=n(17),T=(n(35),{doAddTodo:function(e){return{type:l,payload:{task:e}}}}),y=Object(s.b)(null,T)((function(e){var t=Object(c.useState)(""),n=Object(N.a)(t,2),o=n[0],d=n[1],i=e.doAddTodo;return Object(O.jsxs)("div",{className:"add-todo",children:[Object(O.jsx)("input",{onChange:function(e){d(e.target.value)},className:"add-todo-input",placeholder:"Enter new todo"}),Object(O.jsx)("button",{className:"add-todo-button",onClick:function(){return""!==o&&i(o)},children:"+"})]})})),C=function(){return Object(O.jsxs)("div",{className:"app",children:[Object(O.jsx)("div",{className:"title",children:Object(O.jsx)("h6",{children:"Todo App with Redux / Typescript"})}),Object(O.jsxs)("div",{className:"main-container",children:[Object(O.jsx)("div",{className:"add-todo-container",children:Object(O.jsx)(y,{})}),Object(O.jsxs)("div",{className:"list-container",children:[Object(O.jsx)("div",{className:"unchecked-container",children:Object(O.jsx)(x,{})}),Object(O.jsx)("div",{className:"checked-container",children:Object(O.jsx)(v,{})})]})]})]})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,d=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),d(e),i(e)}))},g=n(5),I=n(18),E=n(4),w=n(41),L={todo:[]},A=function(e){return{id:Object(w.a)(),task:e.task,done:!1}},F=function(e,t){return e.todo.map((function(e){return e.id===t.id?Object(E.a)(Object(E.a)({},e),{},{done:!e.done}):e}))},_=function(e,t){return e.todo.filter((function(e){return e.id!==t.id}))},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(E.a)(Object(E.a)({},e),{},{todo:[].concat(Object(I.a)(e.todo),[A(t.payload)])});case j:case u:return Object(E.a)(Object(E.a)({},e),{},{todo:F(e,t.payload)});case b:return Object(E.a)(Object(E.a)({},e),{},{todo:_(e,t.payload)});default:return e}},S=n(13),U=n.n(S),B=n(16),H=n(14),J=n.n(H),K=n(8),P={key:"root",storage:J.a},R=Object(B.a)(P,M),q=Object(g.c)(R,Object(g.a)(U.a)),z=Object(K.a)(q),G=n(15);i.a.render(Object(O.jsx)(o.a.StrictMode,{children:Object(O.jsx)(s.a,{store:q,children:Object(O.jsx)(G.a,{loading:null,persistor:z,children:Object(O.jsx)(C,{})})})}),document.getElementById("root")),D()}},[[39,1,2]]]);
//# sourceMappingURL=main.9b5ccf16.chunk.js.map