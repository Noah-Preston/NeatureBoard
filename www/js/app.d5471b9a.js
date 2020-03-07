(function(t){function a(a){for(var s,i,n=a[0],d=a[1],c=a[2],u=0,p=[];u<n.length;u++)i=n[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(s in d)Object.prototype.hasOwnProperty.call(d,s)&&(t[s]=d[s]);l&&l(a);while(p.length)p.shift()();return r.push.apply(r,c||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],s=!0,n=1;n<e.length;n++){var d=e[n];0!==o[d]&&(s=!1)}s&&(r.splice(a--,1),t=i(i.s=e[0]))}return t}var s={},o={app:0},r=[];function i(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=s,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)i.d(e,s,function(a){return t[a]}.bind(null,s));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],d=n.push.bind(n);n.push=a,n=n.slice();for(var c=0;c<n.length;c++)a(n[c]);var l=d;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"014f":function(t,a,e){},"080e":function(t,a,e){"use strict";var s=e("8c5f"),o=e.n(s);o.a},"1a12":function(t,a,e){},"24fa":function(t,a,e){},2931:function(t,a,e){"use strict";var s=e("d687"),o=e.n(s);o.a},3712:function(t,a,e){},"3b8a":function(t,a,e){"use strict";var s=e("3712"),o=e.n(s);o.a},"56d7":function(t,a,e){"use strict";e.r(a);var s=e("2b0e"),o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},r=[],i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",{staticClass:"mb navbar navbar-expand-lg navbar-light bg-light container-fluid",attrs:{id:"mb"}},[s("div",{staticClass:"col-3 col-md-1"},[s("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"boards"}}},[s("img",{staticClass:"logo img-responsive",attrs:{src:e("cf05")}})])],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"collapse navbar-collapse justify-content-end",attrs:{id:"navbarText"}},[s("span",{staticClass:"navbar-text"},[s("button",{staticClass:"btn btn-danger",on:{click:t.logout}},[t._v("logout")])])])])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-6 col-md-10 justify-content-center text-center d-flex mx-auto logoFont neat"},[e("strong",[t._v("NeatureBoard")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],d=e("bc3a"),c=e.n(d),l=e("3d20"),u=e.n(l);class p{static async confirmDelete(){let t=await u.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"});return!!t.value}static async confirmLog(){let t=await u.a.fire({title:"Are you sure you want to log out?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, log out!"});return!!t.value}static toast(t=""){u.a.fire({position:"top-end",icon:"success",title:t,showConfirmButton:!1,timer:1500})}}c.a.create({baseURL:"https://localhost:3000",withCredentials:!0});var h={name:"Navbar",methods:{async logout(){await p.confirmLog()&&(await this.$auth.logout({returnTo:"/"}),this.$store.dispatch("resetBearer"),this.$router.push({name:"home"}))}}},m=h,v=(e("5dfc"),e("2877")),f=Object(v["a"])(m,i,n,!1,null,null,null),b=f.exports,g=e("335d"),_={name:"App",async beforeCreate(){try{await Object(g["c"])(),this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile")}catch(t){this.$router.push({name:"home"})}},components:{Navbar:b}},w=_,k=(e("5c0b"),Object(v["a"])(w,o,r,!1,null,null,null)),y=k.exports,C=e("8c4f"),B=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home text-center container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 d-flex align-items-center homev justify-content-center"},[e("div",{staticClass:"row"},[t._m(0),t._v(" "),e("div",{staticClass:"col-12"},[e("button",{staticClass:"btn btn-light btn-lg",on:{click:t.login}},[t._v("Log In")])])])])])])},$=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-12"},[e("h4",{staticClass:"text-secondary logoFont"},[t._v("Welcome to NeatureBoard")])])}];c.a.create({baseURL:"https://localhost:3000",withCredentials:!0});var x={name:"home",data(){return{}},methods:{async login(){await this.$auth.loginWithPopup(),this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile"),this.$router.push({name:"boards"}),console.log("this.$auth.user: "),console.log(this.$auth.user)}},computed:{},components:{}},T=x,I=(e("2931"),Object(v["a"])(T,B,$,!1,null,"10b8486c",null)),N=I.exports,D=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("navbar"),t._v(" "),e("div",{staticClass:"container-fluid boards boardsBackground"},[e("form",{staticClass:"p-3",on:{submit:function(a){return a.preventDefault(),t.addBoard(a)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.title,expression:"newBoard.title"}],staticClass:"rounded",attrs:{type:"text",placeholder:"title",required:""},domProps:{value:t.newBoard.title},on:{input:function(a){a.target.composing||t.$set(t.newBoard,"title",a.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.description,expression:"newBoard.description"}],staticClass:"rounded",attrs:{type:"text",placeholder:"description"},domProps:{value:t.newBoard.description},on:{input:function(a){a.target.composing||t.$set(t.newBoard,"description",a.target.value)}}}),t._v(" "),e("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[t._v("Create Board")])]),t._v(" "),t._l(t.boards,(function(a){return e("div",{key:a.id},[e("div",{staticClass:"row p-2"},[e("div",{staticClass:"col-4"}),t._v(" "),e("router-link",{staticClass:"col-4 card text-white board-card",attrs:{to:{name:"board",params:{boardId:a._id}}}},[e("h5",[t._v(t._s(a.title))]),t._v(" "),e("span",[t._v(t._s(a.description))])])],1),t._v(" "),e("div",{staticClass:"col-4"})])}))],2)],1)},L=[],j={name:"boards",mounted(){this.$store.dispatch("getBoards")},data(){return{newBoard:{title:"",description:""}}},computed:{boards(){return this.$store.state.boards}},methods:{addBoard(){this.$store.dispatch("addBoard",this.newBoard),this.newBoard={title:"",description:""},p.toast("What a beaut!")}},components:{Navbar:b}},O=j,E=(e("3b8a"),Object(v["a"])(O,D,L,!1,null,null,null)),P=E.exports,U=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"vw bg-img"},[e("navbar"),t._v(" "),e("div",{staticClass:"row container-fluid",attrs:{id:"paddingRight"}},[e("div",{staticClass:"col-1"},[e("button",{staticClass:"trash btn bg-trasparent",attrs:{id:"trash"},on:{click:t.deleteBoard}},[e("i",{staticClass:"text-danger far fa-trash-alt fa-2x"})])]),t._v(" "),e("div",{staticClass:"col-10"},[e("div",{staticClass:"board text-light board-font"},[t.board.title?e("h3",{attrs:{id:"board-title"}},[t._v(t._s(t.board.title))]):e("h1",[t._v("Loading...")]),t._v(" "),e("h1",{staticClass:"marginbot"},[t._v(t._s(t.board.description))])])])]),t._v(" "),e("div",{attrs:{id:"formpad"}},[e("form",{staticClass:"p-3",on:{submit:function(a){return a.preventDefault(),t.addList(a)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newList.title,expression:"newList.title"}],staticClass:"rounded",attrs:{type:"text",placeholder:"title",required:""},domProps:{value:t.newList.title},on:{input:function(a){a.target.composing||t.$set(t.newList,"title",a.target.value)}}}),t._v(" "),e("button",{staticClass:"btn btn-dark",attrs:{type:"submit"}},[t._v("Create List")])])]),t._v(" "),e("div",{staticClass:"row list-area"},t._l(t.lists,(function(t,a){return e("list",{key:t.id,attrs:{listData:t,listIndex:a}})})))],1)},A=[],S=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"list-height col-11 col-md-3 card list-card mx-3",on:{dragover:function(t){t.preventDefault()},drop:function(a){return a.preventDefault(),t.moveTask(a)}}},[e("h3",{staticClass:"pt-3 list-font"},[t._v(t._s(t.listData.title))]),t._v(" "),e("hr",{staticStyle:{width:"1",size:"60",background:"black","margin-top":"0"}}),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col card-width"},[e("form",{staticClass:"form-width",on:{submit:function(a){return a.preventDefault(),t.addTask(a)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newTask.content,expression:"newTask.content"}],staticClass:"rounded form-width",attrs:{type:"text",placeholder:" add a new task",required:"",id:"formv"},domProps:{value:t.newTask.content},on:{input:function(a){a.target.composing||t.$set(t.newTask,"content",a.target.value)}}}),t._v(" "),e("button",{staticClass:"btn btn-sm btn-info",attrs:{type:"submit"}},[t._v("+")])]),t._v(" "),e("div",{staticClass:"row text-center align-items-center"},t._l(t.tasks,(function(t,a){return e("Task",{key:t.id,attrs:{taskData:t,taskIndex:a}})})))])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-1 col-pad align-self-end"},[e("button",{staticClass:"btn btn-lg bg-trasparent bottom",on:{click:t.deleteList}},[e("i",{staticClass:"text-danger far fa-trash-alt"})])])])])},R=[],M=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-12 py-1 card-width"},[e("div",{staticClass:"card",staticStyle:{width:"auto"},attrs:{draggable:"true"},on:{dragstart:t.pickUp,dragover:function(t){t.preventDefault()}}},[e("ul",{staticClass:"list-group list list-group-flush"},[e("li",[e("span",{staticClass:"pl-1"},[t._v(t._s(this.taskData.content))]),t._v(" "),e("i",{staticClass:"text-danger far fa-trash-alt mouse float-right pt-1 pr-1",on:{click:t.deleteTask}}),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"pl-1 float-left note-count",attrs:{"data-toggle":"modal","data-target":"#taskmodal"+this.taskData.id}},[e("strong",[t._v("Notes:"+t._s(this.notes.length))])])])])]),t._v(" "),e("div",{staticClass:"modal fade",attrs:{id:"taskmodal"+this.taskData.id,tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header misty"},[e("h1",{staticClass:"modal-title text-center taskFont d-flex align-self-center",attrs:{id:"exampleModalLabel"}},[e("strong",[t._v(t._s(this.taskData.content))])]),t._v(" "),t._m(0)]),t._v(" "),e("div",{staticClass:"modal-body"},[e("ul",{staticClass:"list"},t._l(t.notes,(function(t,a){return e("Note",{key:t.id,attrs:{noteData:t,noteIndex:a}})}))),t._v(" "),e("form",[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newNote.content,expression:"newNote.content"}],staticClass:"rounded form-width",attrs:{type:"text",placeholder:"Add Note..",required:""},domProps:{value:t.newNote.content},on:{input:function(a){a.target.composing||t.$set(t.newNote,"content",a.target.value)}}}),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.addNote}},[t._v("+")])])])]),t._v(" "),t._m(1)])])])])},q=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-footer misty-bottom"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")])])}],Y=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",[e("i",{staticClass:"float-left fas fa-angle-right"}),t._v("\n  "+t._s(this.noteData.content)+"\n  "),e("i",{staticClass:"text-danger far fa-trash-alt float-right trash",on:{click:t.deleteNote}})])},F=[],z={name:"Note",props:["noteData","noteIndex"],computed:{notes(){let t=this.$store.state.notes;return t}},methods:{async deleteNote(){await p.confirmDelete()&&this.$store.dispatch("deleteNote",this.noteData)}}},J=z,W=(e("080e"),Object(v["a"])(J,Y,F,!1,null,null,null)),G=W.exports,H={name:"Task",props:["taskData","taskIndex"],mounted(){return this.$store.dispatch("getNotes",this.taskData._id)},data(){return{newNote:{taskId:this.taskData.id}}},components:{Note:G},computed:{tasks(){let t=this.$store.state.tasks;return t},notes(){return this.$store.state.notes[this.taskData._id]||[]}},methods:{async deleteTask(){await p.confirmDelete()&&this.$store.dispatch("deleteTask",this.taskData)},addNote(){let t={taskId:this.taskData.id,content:this.newNote.content};this.$store.dispatch("addNote",t)},pickUp(){this.$store.dispatch("pickUp",this.taskData)}}},K=H,V=(e("fcc1"),Object(v["a"])(K,M,q,!1,null,null,null)),Z=V.exports,Q={components:{Task:Z},props:["listData","listIndex"],data(){return{newTask:{listId:this.listData.id}}},mounted(){return this.$store.dispatch("getTasks",this.listData._id)},name:"List",computed:{lists(){let t=this.$store.state.lists;return t},tasks(){return this.$store.state.tasks[this.listData._id]},activeBoard(){return this.$store.state.activeBoard}},methods:{addTask(){let t={listId:this.listData.id,content:this.newTask.content};this.$store.dispatch("addTask",t),p.toast("That's pretty NEAT!")},async deleteList(){await p.confirmDelete()&&this.$store.dispatch("deleteList",this.listData)},moveTask(){let t={listId:this.listData.id};this.$store.dispatch("moveTask",t)}}},X=Q,tt=(e("f62b"),Object(v["a"])(X,S,R,!1,null,null,null)),at=tt.exports,et={data(){return{newList:{boardId:this.$route.params.boardId}}},mounted(){this.$store.dispatch("getBoardById",{id:this.$route.params.boardId}),this.$store.dispatch("getListsByBoardId",{id:this.$route.params.boardId})},name:"board",computed:{board(){return this.$store.state.activeBoard},lists(){let t=this.$store.state.lists;return t}},props:["boardId"],components:{Navbar:b,List:at},methods:{addList(){let t={boardId:this.$route.params.boardId,title:this.newList.title};this.$store.dispatch("addList",t),this.$store.dispatch("getListsByBoardId",{id:this.$route.params.boardId}),p.toast("How NEAT is that!")},async deleteBoard(){await p.confirmDelete()&&this.$store.dispatch("deleteBoard",this.$route.params.boardId)}}},st=et,ot=(e("7593"),Object(v["a"])(st,U,A,!1,null,"eace65fa",null)),rt=ot.exports;s["a"].use(C["a"]);var it=new C["a"]({routes:[{path:"/",name:"home",component:N},{path:"/boards",name:"boards",component:P,beforeEnter:g["b"]},{path:"/boards/:boardId",name:"board",component:rt,beforeEnter:g["b"]},{path:"*",redirect:"/"}]}),nt=e("2f62");s["a"].use(nt["a"]);let dt=window.location.host.includes("localhost")?"//localhost:3000/":"/",ct=c.a.create({baseURL:dt+"api/",timeout:3e3,withCredentials:!0});var lt=new nt["a"].Store({state:{user:{},boards:[],activeBoard:{},lists:[],tasks:{},notes:{},temp:[]},mutations:{setUser(t,a){t.user=a},setBoards(t,a){t.boards=a},setActiveBoard(t,a){t.activeBoard=a},setLists(t,a){t.lists=a},setTasks(t,a){s["a"].set(t.tasks,a.id,a.data)},addTask(t,a){t.tasks[a.listId].push(a)},setNotes(t,a){s["a"].set(t.notes,a.id,a.data)},addNote(t,a){t.notes[a.taskId].push(a)},removeList(t,a){t.lists=t.lists.filter(t=>t.id!=a)},removeBoard(t,a){t.boards=t.boards.filter(t=>t.id!=a)},pickUp(t,a){let e=t.tasks[a.listId].find(t=>t.id==a.id);t.temp.push(e)},moveTask(t,a){t.temp=[]}},actions:{setBearer({},t){ct.defaults.headers.authorization=t},resetBearer(){ct.defaults.headers.authorization=""},async getProfile({commit:t}){try{let a=await ct.get("/profile");t("setUser",a.data)}catch(a){console.error(a)}},getBoards({commit:t,dispatch:a}){ct.get("boards").then(a=>{t("setBoards",a.data)})},addBoard({commit:t,dispatch:a},e){ct.post("boards",e).then(t=>{a("getBoards")})},setActiveBoard({commit:t,dispatch:a},e){t("setActiveBoard",e)},async getBoardById({commit:t,dispatch:a},e){try{let a=await ct.get("boards/"+e.id);t("setActiveBoard",a.data)}catch(s){console.error(s),it.push({name:"boards"})}},async deleteBoard({commit:t,dispatch:a},e){try{await ct.delete("boards/"+e);t("removeBoard",e),t("setActiveBoard",{}),it.push({name:"boards"})}catch(s){console.error(s),it.push({name:"boards"})}},async addList({commit:t,dispatch:a},e){try{ct.post("lists",e);let a=await ct.get("boards/"+e.boardId+"/lists");t("setLists",a.data)}catch(s){console.error(s),it.push({name:"boards"})}},async getListsByBoardId({commit:t,dispatch:a},e){try{let a=await ct.get("boards/"+e.id+"/lists");t("setLists",a.data)}catch(s){console.error(s),it.push({name:"Boards"})}},async deleteList({commit:t,dispatch:a},e){try{await ct.delete("lists/"+e.id);let a=await ct.get("boards/"+e.boardId+"/lists");t("removeList",e.id),t("setLists",a.data)}catch(s){console.error(s)}},async deleteTask({commit:t,dispatch:a},e){try{await ct.delete("tasks/"+e.id);a("getTasks",e.listId)}catch(s){console.error(s)}},async addTask({commit:t,dispatch:a},e){try{let a=await ct.post("tasks",e);t("addTask",a.data)}catch(s){console.error(s),it.push({name:"boards"})}},async getTasks({commit:t,dispatch:a},e){try{let a=await ct.get("lists/"+e+"/tasks");t("setTasks",{id:e,data:a.data})}catch(s){console.error(s),it.push({name:"Boards"})}},pickUp({commit:t,dispatch:a},e){t("pickUp",e)},async moveTask({commit:t,dispatch:a,state:e},s){await ct.put("tasks/"+e.temp[0].id,s),a("getTasks",s.listId),a("getTasks",e.temp[0].listId),t("moveTask",s.listId)},async deleteNote({commit:t,dispatch:a},e){try{await ct.delete("notes/"+e.id);a("getNotes",e.taskId)}catch(s){console.error(s)}},async addNote({commit:t,dispatch:a},e){try{let a=await ct.post("notes",e);t("addNote",a.data)}catch(s){console.error(s),it.push({name:"boards"})}},async getNotes({commit:t,dispatch:a},e){try{let a=await ct.get("tasks/"+e+"/notes");t("setNotes",{id:e,data:a.data})}catch(s){console.error(s),it.push({name:"Boards"})}}}});const ut="noah-preston.auth0.com",pt="https://KhanBhan.com",ht="V7rGgFR8Y1GrZgJBuDCqSjRnL4YrBfrr";s["a"].use(g["a"],{domain:ut,clientId:ht,audience:pt,onRedirectCallback:t=>{it.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),new s["a"]({router:it,store:lt,render:function(t){return t(y)}}).$mount("#app")},"5c0b":function(t,a,e){"use strict";var s=e("9c0c"),o=e.n(s);o.a},"5dfc":function(t,a,e){"use strict";var s=e("1a12"),o=e.n(s);o.a},"65da":function(t,a,e){},7593:function(t,a,e){"use strict";var s=e("014f"),o=e.n(s);o.a},"8c5f":function(t,a,e){},"9c0c":function(t,a,e){},cf05:function(t,a,e){t.exports=e.p+"img/logo.ca1f4255.png"},d687:function(t,a,e){},f62b:function(t,a,e){"use strict";var s=e("65da"),o=e.n(s);o.a},fcc1:function(t,a,e){"use strict";var s=e("24fa"),o=e.n(s);o.a}});