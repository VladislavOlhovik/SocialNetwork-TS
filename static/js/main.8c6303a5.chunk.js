(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return f}));var a=n(137),r=n(0),o=n.n(r),c=n(88),s=n(44),u=n.n(s),i=function(e){return function(t){var n=t.input,r=t.meta,c=r.touched,s=r.error,i=Object(a.a)(t,["input","meta"]),l=c&&s;return o.a.createElement("div",{className:l?u.a.error:""},o.a.createElement("div",null,o.a.createElement(e,Object.assign({},n,i))),l&&o.a.createElement("span",null,s))}},l=i("input"),p=i("textarea"),f=function(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(c.a,Object.assign({placeholder:e,name:t,validate:n,component:a},r)),s)}},128:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(43),r=n(5),o=n(25),c={dialogsData:[{id:Object(o.a)(),name:"Dimych"},{id:Object(o.a)(),name:"Andrey"},{id:Object(o.a)(),name:"Sveta"},{id:Object(o.a)(),name:"Sasha"},{id:Object(o.a)(),name:"Viktor"},{id:Object(o.a)(),name:"Valera"}],messagesData:[{id:Object(o.a)(),message:"Hi"},{id:Object(o.a)(),message:"How is your it-kamasutra"},{id:Object(o.a)(),message:"Yo"}]},s=function(e){return{type:"dialogs/ADD-MESSAGE",newMessage:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"dialogs/ADD-MESSAGE":var n={id:Object(o.a)(),message:t.newMessage};return Object(r.a)(Object(r.a)({},e),{},{messagesData:[].concat(Object(a.a)(e.messagesData),[n]),newMessage:""});default:return e}}},135:function(e,t,n){e.exports={item:"Post_item__1Kmi1"}},16:function(e,t,n){e.exports={nav:"Navbar_nav__3M06E",item:"Navbar_item__3wg9Q",active:"Navbar_active__2FGNY"}},164:function(e,t,n){e.exports=n(290)},169:function(e,t,n){},170:function(e,t,n){},27:function(e,t,n){e.exports={wrapper:"Users_wrapper__1r0iq",usersPhoto:"Users_usersPhoto__16JKw",content:"Users_content__1GZiT",preloader:"Users_preloader__1E-Qq",preloaderOn:"Users_preloaderOn__3lk0X",paginator:"Users_paginator__32fzi"}},290:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a,r=n(0),o=n.n(r),c=n(66),s=n.n(c),u=(n(169),n(30)),i=n(31),l=n(33),p=n(32),f=(n(170),n(16)),m=n.n(f),d=n(13),b=function(){return o.a.createElement("nav",{className:m.a.nav},o.a.createElement("div",{className:m.a.item},o.a.createElement(d.b,{to:"/profile",activeClassName:m.a.active},"Profile")),o.a.createElement("div",{className:m.a.item},o.a.createElement(d.b,{to:"/dialogs",activeClassName:m.a.active},"Messages")),o.a.createElement("div",{className:m.a.item},o.a.createElement(d.b,{to:"/chat",activeClassName:m.a.active},"Chat")),o.a.createElement("div",{className:m.a.item},o.a.createElement(d.b,{to:"/news",activeClassName:m.a.active},"News")),o.a.createElement("div",{className:m.a.item},o.a.createElement(d.b,{to:"/music",activeClassName:m.a.active},"Music")),o.a.createElement("div",{className:m.a.item},o.a.createElement(d.b,{to:"/users",activeClassName:m.a.active},"Find users")),o.a.createElement("div",{className:m.a.item},o.a.createElement(d.b,{to:"/setting",activeClassName:m.a.active},"Setting")))},h=n(11),g=function(){return o.a.createElement("div",null,"News")},v=function(){return o.a.createElement("div",null,"Music")},E=function(){return o.a.createElement("div",null,"Setting")},O=n(12),j=n(27),P=n.n(j),S=n(6),w=n.n(S),U=n(14),N=n(43),y=n(5),A=function(e,t,n,a){return e.map((function(e){return e[t]===n?Object(y.a)(Object(y.a)({},e),a):e}))},k=n(132),C=n.n(k).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"9209cc73-1dd6-4bef-bbf6-e01b3e14b107"}}),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return C.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},I=function(e){return C.delete("follow/".concat(e)).then((function(e){return e.data}))},F=function(e){return C.post("follow/".concat(e)).then((function(e){return e.data}))},T=function(){return C.get("security/get-captcha-url")},M=function(e){return C.get("profile/".concat(e))},q=function(e){return C.get("profile/status/".concat(e))},z=function(e){return C.put("profile/status",{status:e})},D=function(e){return C.put("profile",e)},_=function(e){var t=new FormData;return t.append("file",e),C.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})};!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error",e[e.captchIsReqired=10]="captchIsReqired"}(a||(a={}));var B=function(){return C.get("auth/me").then((function(e){return e.data}))},R=function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return C.post("auth/login",{email:e,password:t,rememberMe:n,captcha:a}).then((function(e){return e.data}))},V=function(){return C.post("auth/logout").then((function(e){return e.data}))},X={users:[],pageSize:15,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},W=function(e){return{type:"users/FOLLOW",userId:e}},Z=function(e){return{type:"users/UNFOLLOW",userId:e}},G=function(e){return{type:"users/SET_USERS",users:e}},J=function(e){return{type:"users/TOGGLE_IS_FETCHING",isFetching:e}},H=function(e,t){return{type:"users/TOGGLE_IS_FOLLOWING_PROGRESS",payload:{isFetching:e,userId:t}}},L=function(){var e=Object(U.a)(w.a.mark((function e(t,n,a,r){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(H(!0,t)),e.next=3,a(t);case 3:0===e.sent.resultCode&&n(r(t)),n(H(!1,t));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"users/FOLLOW":return Object(y.a)(Object(y.a)({},e),{},{users:A(e.users,"id",t.userId,{followed:!0})});case"users/UNFOLLOW":return Object(y.a)(Object(y.a)({},e),{},{users:A(e.users,"id",t.userId,{followed:!1})});case"users/SET_USERS":return Object(y.a)(Object(y.a)({},e),{},{users:t.users});case"users/SET_CURRENT_PAGE":return Object(y.a)(Object(y.a)({},e),{},{currentPage:t.pageNumber});case"users/SET_TOTAL_USERS_COUNT":return Object(y.a)(Object(y.a)({},e),{},{totalUsersCount:t.totalUsersCount});case"users/TOGGLE_IS_FETCHING":return Object(y.a)(Object(y.a)({},e),{},{isFetching:t.isFetching});case"users/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(y.a)(Object(y.a)({},e),{},{followingInProgress:t.payload.isFetching?[].concat(Object(N.a)(e.followingInProgress),[t.payload.userId]):e.followingInProgress.filter((function(e){return e!==t.payload.userId}))});default:return e}},Y=n(67),Q=n.n(Y),$=function(e){var t=e.user,n=e.followingInProgress,a=e.follow,r=e.unFollow;return o.a.createElement("div",{className:P.a.wrapper},o.a.createElement("span",null,o.a.createElement("div",null,o.a.createElement(d.b,{to:"/profile/"+t.id},o.a.createElement("img",{src:t.photos.small||Q.a,alt:"users",className:P.a.usersPhoto}))),o.a.createElement("div",null,t.followed?o.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)}},"Unfollow"):o.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)}},"Follow"))),o.a.createElement("span",{className:P.a.content},o.a.createElement("span",null,o.a.createElement("div",null,t.name),o.a.createElement("div",null,t.status?t.status:"not status")),o.a.createElement("span",null,o.a.createElement("div",null,"user.location.country"),o.a.createElement("div",null,"user.location.city"))))},ee=n(39),te=n(92),ne=n.n(te),ae=function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.onPageChanged,c=e.currentPage,s=e.portionSize,u=void 0===s?10:s,i=Math.ceil(t/n),l=[],p=1;p<=i;p++)l.push(p);var f=Math.ceil(i/u),m=Math.floor(c/u);m?m+=1:m=1;var d=Object(r.useState)(m),b=Object(ee.a)(d,2),h=b[0],g=b[1],v=(h-1)*u,E=h*u;return o.a.createElement("div",null,h>1&&o.a.createElement("button",{onClick:function(){return g((function(e){return e-1}))}},"prev"),l.filter((function(e){return e>=v&&e<=E})).map((function(e,t){return o.a.createElement("span",{onClick:function(){return a(e)},key:t,className:c===e?ne.a.selectedPage:ne.a.selected},"-",e,"-")})),h<f&&o.a.createElement("button",{onClick:function(){return g((function(e){return e+1}))}},"next"))},re=function(e){var t=e.users,n=e.pageSize,a=e.currentPage,r=e.totalUsersCount,c=e.followingInProgress,s=e.onPageChanged,u=e.follow,i=e.unFollow;return o.a.createElement("div",null,o.a.createElement("div",{className:P.a.paginator},o.a.createElement(ae,{portionSize:20,currentPage:a,onPageChanged:s,pageSize:n,totalItemsCount:r})),t.map((function(e){return o.a.createElement($,{key:e.id,follow:u,followingInProgress:c,unFollow:i,user:e})})))},oe=n(93),ce=n.n(oe),se=function(){return o.a.createElement("div",{className:ce.a.wrapper},o.a.createElement("div",{className:ce.a.ldshourglass}))},ue=n(8),ie=n(133),le=Object(ie.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),pe=function(e){return e.usersPage.pageSize},fe=function(e){return e.usersPage.totalUsersCount},me=function(e){return e.usersPage.currentPage},de=function(e){return e.usersPage.isFetching},be=function(e){return e.usersPage.followingInProgress},he=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){e.props.getUsersCurrentPage(t,e.props.pageSize)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"".concat(P.a.preloader," ").concat(this.props.isFetching&&P.a.preloaderOn)},o.a.createElement(se,null)),o.a.createElement(re,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,users:this.props.users,onPageChanged:this.onPageChanged,unFollow:this.props.unFollow,follow:this.props.follow,followingInProgress:this.props.followingInProgress}))}}]),n}(o.a.Component),ge=Object(ue.d)(Object(O.b)((function(e){return{users:le(e),pageSize:pe(e),totalUsersCount:fe(e),currentPage:me(e),isFetching:de(e),followingInProgress:be(e)}}),{follow:function(e){return function(){var t=Object(U.a)(w.a.mark((function t(n){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:L(e,n,F,W);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unFollow:function(e){return function(){var t=Object(U.a)(w.a.mark((function t(n){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:L(e,n,I,Z);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},requestUsers:function(e,t){return function(){var n=Object(U.a)(w.a.mark((function n(a){var r;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(J(!0)),n.next=3,x(e,t);case 3:r=n.sent,a(J(!1)),a(G(r.items)),a({type:"users/SET_TOTAL_USERS_COUNT",totalUsersCount:r.totalCount});case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},getUsersCurrentPage:function(e,t){return function(){var n=Object(U.a)(w.a.mark((function n(a){var r;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a({type:"users/SET_CURRENT_PAGE",pageNumber:e}),a(J(!0)),n.next=4,x(e,t);case 4:r=n.sent,a(J(!1)),a(G(r.items));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(he),ve=n(57),Ee=n.n(ve),Oe=function(e){var t=Object(r.useState)(!1),n=Object(ee.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(e.status),u=Object(ee.a)(s,2),i=u[0],l=u[1];Object(r.useEffect)((function(){l(e.status)}),[e.status]);return o.a.createElement("div",null,!a&&o.a.createElement("div",null,o.a.createElement("span",{style:{cursor:"pointer"},onDoubleClick:function(){e.isOwner&&c(!0)}},e.status||"-----")),a&&o.a.createElement("div",null,o.a.createElement("input",{autoFocus:!0,onBlur:function(){c(!1),e.updateUserStatus(i)},type:"text",value:i,onChange:function(e){l(e.currentTarget.value)}})))},je=n(129),Pe=n(10),Se=n(44),we=n.n(Se),Ue=Object(je.a)({form:"profileEdit"})((function(e){var t=e.handleSubmit,n=e.error,a=e.initialValues;return o.a.createElement("form",{onSubmit:t},o.a.createElement("div",null,o.a.createElement("b",null,"full Name: "),Object(Pe.c)("full Name","fullName",[],Pe.a)),o.a.createElement("div",null,o.a.createElement("b",null,"looking for a job: "),Object(Pe.c)("","lookingForAJob",[],Pe.a,{type:"checkbox"})),o.a.createElement("div",null,o.a.createElement("b",null,"My professional skills: "),Object(Pe.c)("My professional skills","lookingForAJobDescription",[],Pe.b)),o.a.createElement("div",null,o.a.createElement("b",null,"About Me: "),Object(Pe.c)("About Me","aboutMe",[],Pe.b)),o.a.createElement("div",null,o.a.createElement("b",null,"Contacts: "),a.contacts&&Object.keys(a.contacts).map((function(e,t){return o.a.createElement("div",{key:t},"-",o.a.createElement("b",null,e,": ")," ",Object(Pe.c)("".concat(e),"contacts.".concat(e),[],Pe.a))}))),n&&o.a.createElement("div",{className:n?we.a.formError:""},n),o.a.createElement("button",null,"save"))})),Ne=function(e){var t=Object(r.useState)(!1),n=Object(ee.a)(t,2),a=n[0],c=n[1];return e.profile?o.a.createElement("div",null,o.a.createElement("div",{className:Ee.a.descriptionBlock},o.a.createElement("div",{className:Ee.a.wrapper},o.a.createElement("span",null,o.a.createElement("div",null,o.a.createElement("img",{src:e.profile.photos.large||Q.a,alt:"users",className:Ee.a.usersPhoto})),e.isOwner&&o.a.createElement("input",{type:"file",onChange:function(t){t.target.files&&e.savePhoto(t.target.files[0])}})),o.a.createElement("span",{className:Ee.a.content},o.a.createElement("span",null,o.a.createElement("div",null,e.profile.fullName),o.a.createElement("div",null,e.profile.lookingForAJobDescription?e.profile.lookingForAJobDescription:"no status")))),o.a.createElement("b",null,"Status: "),o.a.createElement(Oe,{isOwner:e.isOwner,status:e.status,updateUserStatus:e.updateUserStatus}),o.a.createElement("div",null,a?o.a.createElement(Ue,{initialValues:e.profile,onSubmit:function(t){e.saveProfile(t).then((function(){c(!1)}))}}):o.a.createElement(ye,{isOwner:e.isOwner,profile:e.profile,goToEditMode:function(){return c(!0)}})))):o.a.createElement(se,null)},ye=function(e){var t=e.profile,n=e.goToEditMode,a=e.isOwner;return o.a.createElement("div",null,a&&o.a.createElement("div",null,o.a.createElement("button",{onClick:n},"edit")),o.a.createElement("div",null,o.a.createElement("b",null,"fullName: "),t.fullName),o.a.createElement("div",null,o.a.createElement("b",null,"looking for a job: "),t.lookingForAJob?"yes":"No"),t.lookingForAJob&&o.a.createElement("div",null,o.a.createElement("b",null,"My professional skills: "),t.lookingForAJobDescription),o.a.createElement("div",null,o.a.createElement("b",null,"About Me: "),t.aboutMe),o.a.createElement("div",null,o.a.createElement("b",null,"Contacts: "),Object.keys(t.contacts).map((function(e,n){return o.a.createElement(Ae,{key:n,contactTitle:e,contactValue:t.contacts[e]})}))))},Ae=function(e){var t=e.contactTitle,n=e.contactValue;return o.a.createElement("div",{style:{paddingLeft:"10px"}},"-",o.a.createElement("b",null,t,":"),n)},ke=n(25),Ce=n(26),xe={postData:[{id:Object(ke.a)(),message:"Hi, how are you?",likeCounts:12},{id:Object(ke.a)(),message:"It's my first post",likeCounts:11}],profile:null,status:""},Ie=function(e){return{type:"profile/SET_STATUS",status:e}},Fe=function(e){return function(){var t=Object(U.a)(w.a.mark((function t(n){var a;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M(e);case 2:a=t.sent,n({type:"profile/SET_USER_PROFILE",profile:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"profile/ADD-POST":var n={id:Object(ke.a)(),message:t.newPostText,likeCounts:0};return Object(y.a)(Object(y.a)({},e),{},{postData:[n].concat(Object(N.a)(e.postData))});case"profile/SET_USER_PROFILE":return Object(y.a)(Object(y.a)({},e),{},{profile:t.profile});case"profile/SET_STATUS":return Object(y.a)(Object(y.a)({},e),{},{status:t.status});case"profile/SET_PHOTOS":return Object(y.a)(Object(y.a)({},e),{},{profile:Object(y.a)(Object(y.a)({},e.profile),{},{photos:t.photos})});default:return e}},Me=n(96),qe=n.n(Me),ze=n(135),De=n.n(ze),_e=function(e){return o.a.createElement("div",{className:De.a.item},o.a.createElement("img",{src:"https://i.wpimg.pl/730x0/m.gadzetomania.pl/tumblr-kwh4eacbzu1qaptl6-a9d2590.jpg",alt:""}),e.message,o.a.createElement("div",null,o.a.createElement("span",null,"like")," ",e.likeCounts))},Be=n(88),Re=n(40),Ve=Object(Re.a)(10),Xe=Object(je.a)({form:"post"})((function(e){return o.a.createElement("form",{onSubmit:e.handleSubmit},o.a.createElement("div",null,o.a.createElement(Be.a,{placeholder:"Enter your New Post",component:Pe.b,validate:[Re.b,Ve],name:"newPostText"})),o.a.createElement("div",null,o.a.createElement("button",null,"Add post")))})),We=Object(O.b)((function(e){return{postdata:e.profilePage.postData}}),(function(e){return{addPost:function(t){return e(function(e){return{type:"profile/ADD-POST",newPostText:e}}(t))}}}))((function(e){return o.a.createElement("div",{className:qe.a.postsBlock},o.a.createElement("h3",null,"My post"),o.a.createElement(Xe,{onSubmit:function(t){e.addPost(t.newPostText)}}),o.a.createElement("div",{className:qe.a.posts},e.postdata.map((function(e){return o.a.createElement(_e,{key:e.id,message:e.message,likeCounts:e.likeCounts})}))))})),Ze=function(e){return o.a.createElement("div",null,o.a.createElement(Ne,{profile:e.profile,isOwner:e.isOwner,savePhoto:e.savePhoto,status:e.status,saveProfile:e.saveProfile,updateUserStatus:e.updateUserStatus}),o.a.createElement(We,null))},Ge=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.userID)||this.props.history.push("/login"),this.props.getUserStatus(e),this.props.getUserProfile(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(Ze,{profile:this.props.profile,isOwner:!this.props.match.params.userId,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile,status:this.props.status,updateUserStatus:this.props.updateUserStatus}))}}]),n}(o.a.Component),Je=Object(ue.d)(Object(O.b)((function(e){return{profile:e.profilePage.profile,userID:e.auth.id,status:e.profilePage.status}}),{getUserProfile:Fe,getUserStatus:function(e){return function(){var t=Object(U.a)(w.a.mark((function t(n){var a;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,q(e);case 2:a=t.sent,n(Ie(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateUserStatus:function(e){return function(){var t=Object(U.a)(w.a.mark((function t(n){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,z(e);case 2:0===t.sent.data.resultCode&&n(Ie(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},savePhoto:function(e){return function(){var t=Object(U.a)(w.a.mark((function t(n){var a;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(e);case 2:0===(a=t.sent).data.resultCode&&n({type:"profile/SET_PHOTOS",photos:a.data.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},saveProfile:function(e){return function(){var t=Object(U.a)(w.a.mark((function t(n,a){var r,o,c;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth.id,t.next=3,D(e);case 3:if(0!==(o=t.sent).data.resultCode){t.next=8;break}r&&n(Fe(String(r))),t.next=11;break;case 8:return c=o.data.messages.length>0?o.data.messages[0]:"Some error",n(Object(Ce.a)("profileEdit",{_error:c})),t.abrupt("return",Promise.reject());case 11:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}}),h.f)(Ge),He=n(97),Le=n.n(He),Ke=function(e){return o.a.createElement("header",{className:Le.a.header},o.a.createElement("img",{src:"https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg",alt:"img"}),o.a.createElement("div",{className:Le.a.loginBlock},e.isAuth?o.a.createElement("div",null,e.login," - ",o.a.createElement("button",{onClick:e.logout},"Log out")):o.a.createElement(d.b,{to:"/login"},"Login")))},Ye={id:null,login:null,email:null,isAuth:!1,captchaUrl:null},Qe=function(e,t,n,a){return{type:"auth/SET_USERS_DATA",payload:{id:e,login:t,email:n,isAuth:a}}},$e=function(e){return{type:"auth/SET_CAPTCHA_URL",payload:{captchaUrl:e}}},et=function(){return function(){var e=Object(U.a)(w.a.mark((function e(t){var n,a,r,o,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:0===(n=e.sent).resultCode&&(a=n.data,r=a.id,o=a.login,c=a.email,t(Qe(r,o,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},tt=function(){return function(){var e=Object(U.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:n=e.sent,t($e(n.data.url));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},nt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_CAPTCHA_URL":case"auth/SET_USERS_DATA":return Object(y.a)(Object(y.a)({},e),t.payload);default:return e}},at=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return o.a.createElement(Ke,this.props)}}]),n}(o.a.Component),rt=Object(O.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(U.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V();case 2:0===e.sent.resultCode&&t(Qe(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(at),ot=Object(je.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,a=e.captchaUrl;return o.a.createElement("form",{onSubmit:t},Object(Pe.c)("Login","login",[Re.b],Pe.a),Object(Pe.c)("Password","password",[Re.b],Pe.a,{type:"password"}),Object(Pe.c)(null,"rememberMe",[],Pe.a,{type:"checkbox"},"remember me"),a&&o.a.createElement("img",{src:a,alt:"captcha"}),a&&Object(Pe.c)("Captcha","captcha",[Re.b],Pe.a),o.a.createElement("div",{className:n?we.a.formError:""},n),o.a.createElement("div",null,o.a.createElement("button",null,"Login")))})),ct=Object(O.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{login:function(e,t,n,a){return function(){var r=Object(U.a)(w.a.mark((function r(o){var c,s;return w.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,R(e,t,n,a);case 2:0===(c=r.sent).resultCode?(o(et()),o($e(null))):(10===c.resultCode&&o(tt()),s=c.messages.length>0?c.messages[0]:"Some error",o(Object(Ce.a)("login",{_error:s})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){var t=e.isAuth,n=e.login,a=e.captchaUrl;return t?o.a.createElement(h.a,{to:"/profile"}):o.a.createElement("div",null,o.a.createElement("span",null,"To log in get registeredhere or use common test account credentials: Email: free@samuraijs.com Password: free"),o.a.createElement("h1",null,"Login"),o.a.createElement(ot,{captchaUrl:a,onSubmit:function(e){n(e.login,e.password,e.rememberMe,e.captcha)}}))})),st={initialized:!1},ut=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:st,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/INITIALIZED_SUCCESS":return Object(y.a)(Object(y.a)({},e),{},{initialized:!0});default:return e}},it=function(e){return function(t){return o.a.createElement(r.Suspense,{fallback:o.a.createElement("div",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...")},o.a.createElement(e,t))}},lt=o.a.lazy((function(){return n.e(4).then(n.bind(null,295))})),pt=o.a.lazy((function(){return n.e(3).then(n.bind(null,294))})),ft=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?o.a.createElement("div",{className:"app-wrapper"},o.a.createElement(rt,null),o.a.createElement(b,null),o.a.createElement("div",{className:"app-wrapper-content"},o.a.createElement(h.a,{from:"/",to:"/profile"}),o.a.createElement(h.b,{path:"/profile/:userId?",render:function(){return o.a.createElement(Je,null)}}),o.a.createElement(h.b,{path:"/dialogs",render:it(lt)}),o.a.createElement(h.b,{path:"/users",render:function(){return o.a.createElement(ge,null)}}),o.a.createElement(h.b,{path:"/login",render:function(){return o.a.createElement(ct,null)}}),o.a.createElement(h.b,{path:"/chat",render:it(pt)}),o.a.createElement(h.b,{path:"/news",component:g}),o.a.createElement(h.b,{path:"/music",component:v}),o.a.createElement(h.b,{path:"/setting",component:E}))):o.a.createElement(se,null)}}]),n}(o.a.Component),mt=Object(ue.d)(Object(O.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(et());Promise.all([t]).then((function(){e({type:"app/INITIALIZED_SUCCESS"})}))}}}))(ft),dt=n(136),bt=n(128),ht={},gt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ht;return e},vt=n(130),Et=Object(ue.c)({dialogsPage:bt.b,profilePage:Te,sidebar:gt,usersPage:K,auth:nt,form:vt.a,app:ut}),Ot=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ue.d,jt=Object(ue.e)(Et,Ot(Object(ue.a)(dt.a)));window.store=jt;var Pt=jt;s.a.render(o.a.createElement(d.a,null,o.a.createElement(O.a,{store:Pt},o.a.createElement(mt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},40:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," required")}}},44:function(e,t,n){e.exports={error:"FormsControls_error__4Rvo4",formError:"FormsControls_formError__3FC-d"}},57:function(e,t,n){e.exports={img:"ProfileInfo_img__d6L3v",descriptionBlock:"ProfileInfo_descriptionBlock__8Ue3k",wrapper:"ProfileInfo_wrapper__1yU9M",usersPhoto:"ProfileInfo_usersPhoto__1d2Cb",content:"ProfileInfo_content__3uuWP"}},67:function(e,t){e.exports="data:image/png;base64,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"},92:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__psSUO",selected:"Paginator_selected__1obCo"}},93:function(e,t,n){e.exports={ldshourglass:"Preloader_ldshourglass__363U5","lds-hourglass":"Preloader_lds-hourglass__2YfoA",wrapper:"Preloader_wrapper__15jgg"}},96:function(e,t,n){e.exports={postsBlock:"MyPost_postsBlock__2qNik",posts:"MyPost_posts__2-3ZU"}},97:function(e,t,n){e.exports={header:"Header_header__FC034",loginBlock:"Header_loginBlock__3_gkE"}}},[[164,1,2]]]);
//# sourceMappingURL=main.8c6303a5.chunk.js.map