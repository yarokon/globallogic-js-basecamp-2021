(this["webpackJsonp04-redux-toolkit"]=this["webpackJsonp04-redux-toolkit"]||[]).push([[0],{17:function(e){e.exports=JSON.parse('[{"id":1,"username":"yaroslav","role":"admin","timestamp":1627934490151},{"id":2,"username":"test-user","role":"user","timestamp":1627934784096}]')},35:function(e){e.exports=JSON.parse('["user","super-user","admin"]')},44:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var r=n(24),c=n.n(r),a=n(4),s=n(14),i=(n(44),n(1));var u,o,d=function(){return Object(i.jsx)("aside",{className:"SideBar",children:Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:Object(i.jsx)(s.c,{to:"/users",activeClassName:"bold",children:"Users"})}),Object(i.jsx)("li",{children:Object(i.jsx)(s.c,{to:"/todo-list",activeClassName:"bold",children:"Todo List"})})]})})},l="view",j="create",b="edit",f=n(8),p=n(0),O=function(e){Object(p.useEffect)(e,[])},x=n(9),h=Object(x.c)({name:"users",initialState:{list:[],isFetched:!1},reducers:{getUsers:function(e,t){return{list:t.payload,isFetched:!0}},getUser:function(e,t){e.list=e.isFetched?e.list:[t.payload]},createUser:function(e,t){e.list.push(t.payload)},editUser:function(e,t){e.list=e.list.map((function(e){return e.id===t.payload.id?t.payload:e}))}}}),m=h.actions,v=h.reducer,g=n(3),w=n.n(g),k=n(6),y=n(11),U=n(39),C=n(16),N=n(29),S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;return new Promise((function(t){setTimeout(t,e)}))},L=function(){return Date.now()},T=function(e){throw new Error("Record with ID ".concat(e," does not exist"))},R=function(e,t){var n=Object(N.a)(t,1)[0];return Object.keys(e).filter((function(e){return!n.includes(e)})).reduce((function(t,n){return Object(y.a)(Object(y.a)({},t),{},Object(C.a)({},n,e[n]))}),{})},F=n(17),A=(u=F.length,function(){return++u}),I={getUsers:function(){return Object(k.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(2e3);case 2:return e.abrupt("return",Object(U.a)(F));case 3:case"end":return e.stop()}}),e)})))()},getUser:function(e){return Object(k.a)(w.a.mark((function t(){var n;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S();case 2:if(!(n=F.find((function(t){return t.id===e})))){t.next=7;break}return t.abrupt("return",n);case 7:T(e);case 8:case"end":return t.stop()}}),t)})))()},createUser:function(e){return Object(k.a)(w.a.mark((function t(){var n;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S();case 2:return n=Object(y.a)(Object(y.a)({id:A()},R(e,["id","timestamp"])),{},{timestamp:L()}),F.push(n),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))()},editUser:function(e){return Object(k.a)(w.a.mark((function t(){var n;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S();case 2:if(!~(n=F.findIndex((function(t){return t.id===e.id})))){t.next=8;break}return F[n]=Object(y.a)(Object(y.a)({},e),{},{timestamp:L()}),t.abrupt("return",F[n]);case 8:T(e.id);case 9:case"end":return t.stop()}}),t)})))()},deleteUser:function(e){return Object(k.a)(w.a.mark((function t(){var n;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S();case 2:if(!~(n=F.findIndex((function(t){return t===e.id})))){t.next=7;break}return t.abrupt("return",F.splice(n,1));case 7:T(e.id);case 8:case"end":return t.stop()}}),t)})))()}},q=Object(x.c)({name:"loading",initialState:0,reducers:{incrementRequestCount:function(e){return e+1},decrementRequestCount:function(e){return e-1}}}),D=q.actions,E=D.incrementRequestCount,J=D.decrementRequestCount,V=q.reducer,B=function(e){return function(){var t=Object(k.a)(w.a.mark((function t(n){var r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(E()),t.next=4,I.createUser(e);case 4:r=t.sent,n(m.createUser(r)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),window.alert("Failed to create user: ".concat(t.t0.message));case 11:return t.prev=11,n(J()),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(e){return t.apply(this,arguments)}}()},P=function(e){return function(){var t=Object(k.a)(w.a.mark((function t(n){var r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(E()),t.next=4,I.editUser(e);case 4:r=t.sent,n(m.editUser(r)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),window.alert("Failed to edit user: ".concat(t.t0.message));case 11:return t.prev=11,n(J()),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(e){return t.apply(this,arguments)}}()},M=function(e){return e.users},X="username",z="role",G=(o={},Object(C.a)(o,X,""),Object(C.a)(o,z,""),o);var H=function(e){var t=e.id,n=Object(a.i)().url,r=Object(a.g)(),c=function(e){return function(){r.push("".concat(n,"/user/").concat(e,"/").concat(t))}};return Object(i.jsxs)("div",{className:"Actions",children:[Object(i.jsx)("button",{onClick:c(l),children:"View"})," ",Object(i.jsx)("button",{onClick:c(b),children:"Edit"})]})};n(51);var K,Q=function(){var e=Object(a.i)().url,t=Object(f.b)(),n=Object(f.c)((function(e){return e.users}));return O((function(){n.isFetched||t(function(){var e=Object(k.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(E()),e.next=4,I.getUsers();case 4:n=e.sent,t(m.getUsers(n)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),window.alert("Failed to fetch users: ".concat(e.t0.message));case 11:return e.prev=11,t(J()),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(t){return e.apply(this,arguments)}}())})),Object(i.jsxs)("div",{className:"UsersTable",children:[Object(i.jsx)(s.b,{to:"".concat(e,"/user/").concat(j),children:"Create User"}),Object(i.jsxs)("table",{children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"ID"}),Object(i.jsx)("th",{children:"Username"}),Object(i.jsx)("th",{children:"Role"}),Object(i.jsx)("th",{children:"Last Updated At"}),Object(i.jsx)("th",{children:"Actions"})]})}),Object(i.jsx)("tbody",{children:n.list.map((function(e){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:e.id}),Object(i.jsx)("td",{children:e.username}),Object(i.jsx)("td",{children:e.role}),Object(i.jsx)("td",{children:e.timestamp}),Object(i.jsx)("td",{children:Object(i.jsx)(H,{id:e.id})})]},e.id)}))})]})]})},W=n(35),Y={getRoles:function(){return Object(k.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:return e.abrupt("return",W);case 3:case"end":return e.stop()}}),e)})))()}},Z=Object(x.b)("roles/getRoles",Y.getRoles),$=Object(x.c)({name:"roles",initialState:{list:[],status:"idle"},extraReducers:(K={},Object(C.a)(K,Z.pending,(function(e){e.status="loading"})),Object(C.a)(K,Z.fulfilled,(function(e,t){return{list:t.payload,status:"succeeded"}})),Object(C.a)(K,Z.rejected,(function(e){e.status="failed"})),K)}).reducer,_=function(e){return e.roles},ee=n(21);n(52);var te=function(e){var t=e.name,n=e.label,r=e.validate,c=e.type,a=void 0===c?"text":c,s=e.disabled,u=void 0!==s&&s,o=e.loading,d=Object(ee.d)({name:t,validate:r}),l=Object(N.a)(d,1)[0];return Object(i.jsxs)("div",{className:"Input",children:[Object(i.jsxs)("label",{children:[Object(i.jsx)("div",{children:n}),Object(i.jsx)("input",Object(y.a)({type:a,disabled:!!o||u,placeholder:o?"loading...":""},l))]}),Object(i.jsx)(ee.a,{name:t,className:"error",component:"div"})]})};var ne=function(e){var t=e.mode,n=Object(a.g)(),r=Object(ee.e)().isSubmitting;return Object(i.jsxs)("div",{children:[(t===j||t===b)&&Object(i.jsx)("button",{type:"submit",disabled:r,children:"Save"}),Object(i.jsx)("button",{type:"button",onClick:function(){return n.push("/users")},children:"Cancel"})]})};var re=function(e){var t=e.initialValues,n=e.onSubmit,r=e.mode,c=e.roles;return Object(i.jsx)(ee.c,{initialValues:t,onSubmit:n,children:Object(i.jsxs)(ee.b,{children:[Object(i.jsx)(te,{name:X,label:"Username",disabled:r===l}),Object(i.jsx)(te,{name:z,label:"Role",disabled:r===l,loading:"loading"===c.status,validate:function(e){if(!c.list.includes(e))return"Allowed roles: ".concat(c.list.join(", "))}}),Object(i.jsx)("br",{}),Object(i.jsx)(ne,{mode:r})]})})};var ce=function(){var e=Object(a.h)(),t=e.mode,n=e.id,r=Object(a.g)(),c=Object(f.b)(),s=Object(f.c)(M),u=Object(f.c)(_),o=s.list.find((function(e){return e.id===Number(n)}));O((function(){t!==l&&t!==b||o||c(function(e){return function(){var t=Object(k.a)(w.a.mark((function t(n){var r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(E()),t.next=4,I.getUser(e);case 4:r=t.sent,n(m.getUser(r)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),window.alert("Failed to fetch user: ".concat(t.t0.message));case 11:return t.prev=11,n(J()),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(e){return t.apply(this,arguments)}}()}(Number(n))),"idle"===u.status&&c(Z())}));var d=function(){var e=Object(k.a)(w.a.mark((function e(n){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,a=n,e.t0=t,e.next=e.t0===j?5:e.t0===b?8:11;break;case 5:return e.next=7,c(B(a));case 7:return e.abrupt("break",12);case 8:return e.next=10,c(P(a));case 10:return e.abrupt("break",12);case 11:console.error("Failed to execute this request for ".concat(t," mode"));case 12:e.next=17;break;case 14:e.prev=14,e.t1=e.catch(0),window.alert(e.t1.message);case 17:r.push("/users");case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),p=function(e){return e||G}(o);return Object(i.jsx)(re,{initialValues:p,onSubmit:d,mode:t,roles:u},"".concat(t,":").concat(p.id))};var ae=function(){var e=Object(a.i)().path;return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)(a.d,{children:[Object(i.jsx)(a.b,{exact:!0,path:e,children:Object(i.jsx)(Q,{})}),Object(i.jsx)(a.b,{exact:!0,path:"".concat(e,"/user/:mode(").concat(l,"|").concat(j,"|").concat(b,")/:id?"),children:Object(i.jsx)(ce,{})})]})})},se=Object(x.c)({name:"todos",initialState:{title:"",todoList:[]},reducers:{setTitle:function(e,t){e.title=t.payload},addTodo:{reducer:function(e,t){e.title="",e.todoList.push(t.payload)},prepare:function(e){return{payload:{id:Object(x.d)(),title:e.trim(),isCompleted:!1}}}},toggleTodo:function(e,t){e.todoList=e.todoList.map((function(e){return e.id===t.payload?Object(y.a)(Object(y.a)({},e),{},{isCompleted:!e.isCompleted}):e}))},deleteTodo:function(e,t){e.todoList=e.todoList.filter((function(e){return e.id!==t.payload}))}}}),ie=se.actions,ue=ie.setTitle,oe=ie.addTodo,de=ie.toggleTodo,le=ie.deleteTodo,je=se.reducer;n(53);var be=function(){var e=Object(f.b)(),t=Object(f.c)((function(e){return e.todos})),n=t.title,r=t.todoList,c=function(t){return function(n){n.stopPropagation(),e(le(t))}};return Object(i.jsxs)("div",{className:"TodoList",children:[Object(i.jsx)("form",{onSubmit:function(t){t.preventDefault(),n.trim()&&e(oe(n))},children:Object(i.jsx)("input",{type:"text",value:n,onChange:function(t){return e(ue(t.target.value))}})}),Object(i.jsx)("ul",{children:r.map((function(t){var n=t.id,r=t.title,a=t.isCompleted;return Object(i.jsxs)("li",{onClick:function(){return e(de(n))},children:[Object(i.jsx)("span",{style:{textDecoration:a?"line-through":"auto"},children:r}),Object(i.jsx)("button",{type:"button",onClick:c(n),children:"X"})]},n)}))})]})},fe=function(e){return e.loading},pe=n.p+"static/media/logo.6ce24c58.svg";n(54);var Oe=function(){return 0===Object(f.c)(fe)?null:Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:"Loading",children:Object(i.jsx)("img",{src:pe,className:"logo",alt:"logo"})}),Object(i.jsx)("div",{className:"overlay"})]})};var xe=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(d,{}),Object(i.jsx)("main",{children:Object(i.jsxs)(a.d,{children:[Object(i.jsx)(a.a,{exact:!0,from:"/",to:"/users"}),Object(i.jsx)(a.b,{path:"/users",children:Object(i.jsx)(ae,{})}),Object(i.jsx)(a.b,{path:"/todo-list",children:Object(i.jsx)(be,{})})]})}),Object(i.jsx)(Oe,{})]})},he=n(38),me=Object(he.createLogger)({collapsed:!0}),ve=Object(x.a)({reducer:{loading:V,users:v,roles:$,todos:je},middleware:function(e){return e().concat(me)}});var ge=function(e){var t=e.children;return Object(i.jsx)(p.StrictMode,{children:Object(i.jsx)(f.a,{store:ve,children:Object(i.jsx)(s.a,{basename:"/globallogic-js-basecamp-2021/react/04-redux-toolkit/build",children:t})})})},we=(n(55),document.getElementById("root"));c.a.render(Object(i.jsx)(ge,{children:Object(i.jsx)(xe,{})}),we)}},[[56,1,2]]]);
//# sourceMappingURL=main.9c1f9fee.chunk.js.map