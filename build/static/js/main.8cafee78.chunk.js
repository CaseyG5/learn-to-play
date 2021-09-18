(this["webpackJsonplearn-to-play"]=this["webpackJsonplearn-to-play"]||[]).push([[0],{38:function(e,t,s){},67:function(e,t,s){"use strict";s.r(t);var c=s(31),n=s.n(c),r=s(9),a=s(4),l=(s(38),s(3)),i=s(2),o=s(8),j=s(0),b=function(e){e.page;var t=e.setPage;return Object(j.jsxs)("div",{className:"my-4 px-4 flex justify-between",children:[Object(j.jsx)("button",{onClick:function(){t("home")},children:Object(j.jsx)(o.a,{size:30})}),Object(j.jsx)("button",{onClick:function(){t("dashboard")},children:Object(j.jsx)(o.d,{size:30})})]})};function u(){return Object(j.jsx)("div",{className:"h-32 flex justify-center bg-gray-500"})}var d=s(1),m=s.n(d),x=s(10);function h(){return Object(j.jsxs)("div",{className:"my-5",children:[Object(j.jsx)("h3",{className:"font-bold underline",children:"Your practice plan:"}),Object(j.jsxs)("p",{className:"my-1",children:[Object(j.jsx)("strong",{children:"Instrument: \xa0"})," electric guitar"]}),Object(j.jsxs)("p",{className:"my-1",children:[Object(j.jsx)("strong",{children:"Session: \xa0"})," 1 short hour"]}),Object(j.jsxs)("p",{className:"my-1",children:[Object(j.jsx)("strong",{children:"Days: \xa0"})," SUN thru THURS"]}),Object(j.jsx)("p",{className:"my-1",children:"You practiced 5 hours last week, that's great!"}),Object(j.jsx)("p",{className:"mt-12 text-sm",children:Object(j.jsx)("em",{children:"\u201cA journey of 1,000 miles begins with a single step.\u201d"})})]})}function O(e){var t=e.member,s=e.setEditing;return Object(j.jsxs)("div",{children:[Object(j.jsxs)("h3",{className:"mb-4 font-semibold text-lg text-center",children:["Hi ",t.name,", welcome."]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("strong",{children:Object(j.jsx)("u",{children:"Your details:"})})," \xa0"]}),Object(j.jsxs)("p",{className:"my-1",children:[Object(j.jsx)("strong",{children:"About: \xa0"})," ",t.about]}),Object(j.jsxs)("p",{className:"my-1",children:[Object(j.jsx)("strong",{children:"Location: \xa0"})," ",t.location]}),Object(j.jsxs)("p",{className:"my-1",children:[Object(j.jsx)("strong",{children:"Instrument(s): \xa0"})," ",t.instruments]}),Object(j.jsxs)("p",{className:"my-1",children:[Object(j.jsx)("strong",{children:"Acct status: \xa0"})," active"]}),Object(j.jsxs)("p",{className:"my-1",children:[Object(j.jsx)("strong",{children:"Date joined: \xa0"})," Jan 1st 2000"]}),Object(j.jsxs)("p",{className:"my-1",children:[Object(j.jsx)("strong",{children:"Last login: \xa0"})," Nov 11 2025"]}),Object(j.jsx)(h,{}),Object(j.jsx)("div",{className:"flex flex-col items-center",children:Object(j.jsx)("button",{className:"w-32 h-8 my-4 border border-black rounded-md bg-purple-300 font-bold",onClick:function(){s(!0)},children:"Edit profile"})})]})}function f(e){var t=e.member,s=e.setMember,c=e.updateProfile,n=e.setEditing,r=Object(i.useRef)("".concat(t.name)),a=Object(i.useRef)(t.about),l=Object(i.useRef)(t.location),o=Object(i.useRef)(t.instruments);console.log(t.name+" - "+t.about+" - "+t.location),console.log(r+" - "+r.current+" - "+r.current.value);return Object(j.jsxs)("form",{className:"mb-72 flex flex-col",onSubmit:function(e){e.preventDefault();var t={name:r.current.value,about:a.current.value,location:l.current.value,instruments:o.current.value};s(t),c(t),n(!1)},children:[Object(j.jsx)("h3",{className:"mb-4 font-semibold text-lg text-center",children:"Enter your changes below."}),Object(j.jsxs)("p",{children:[Object(j.jsx)("strong",{children:Object(j.jsx)("u",{children:"Info to update:"})})," \xa0"]}),Object(j.jsxs)("label",{className:"my-0.5 flex justify-between",htmlFor:"name",children:[Object(j.jsx)("strong",{children:"Name:"})," \xa0",Object(j.jsx)("input",{className:"w-56 border border-black rounded-sm",type:"text",name:"name",ref:r,autoComplete:"off"})]}),Object(j.jsxs)("label",{className:"my-0.5 flex justify-between",htmlFor:"about",children:[Object(j.jsx)("strong",{children:"About:"})," \xa0",Object(j.jsx)("input",{className:"w-56 border border-black rounded-sm",type:"text",name:"about",ref:a,autoComplete:"off"})]}),Object(j.jsxs)("label",{className:"my-0.5 flex justify-between",htmlFor:"location",children:[Object(j.jsx)("strong",{children:"Location:"})," \xa0",Object(j.jsx)("input",{className:"w-56 border border-black rounded-sm",type:"text",name:"location",ref:l,autoComplete:"off"})]}),Object(j.jsxs)("label",{className:"mt-0.5 flex justify-between",htmlFor:"instruments",children:[Object(j.jsx)("strong",{children:"Instruments:"})," \xa0",Object(j.jsx)("input",{className:"w-56 border border-black rounded-sm",type:"text",name:"instruments",ref:o,autoComplete:"off"})]}),Object(j.jsxs)("div",{className:"mt-6 mb-3.5 flex justify-around",children:[Object(j.jsx)("button",{className:"w-32 h-8  border border-black rounded-md bg-green-300 font-bold",type:"submit",children:"Change"}),Object(j.jsx)("button",{className:"w-32 h-8 border border-black rounded-md bg-red-300 font-bold",onClick:function(){n(!1)},children:"Cancel"})]})]})}var p=s(18),g=Object(p.a)("https://ycwmaxsxjguznhpxtooy.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjMxMTI1Njk0LCJleHAiOjE5NDY3MDE2OTR9.Zs6mQF5Gi0vZLvx9EdQmg0t4h9mw80z_lq1_kLuqQ84");var v=function(e){var t=e.member,s=e.setMember,c=e.setLoggedIn,n=Object(i.useState)(!1),r=Object(a.a)(n,2),l=r[0],b=r[1],u=function(){var e=Object(x.a)(m.a.mark((function e(t){var s,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.from("members").upsert(t,{returning:"minimal",ignoreDuplicates:!0});case 3:if(s=e.sent,!(c=s.upsertError)){e.next=7;break}throw c;case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert(e.t0.description||e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"flex flex-col justify-between",children:[Object(j.jsxs)("div",{className:"",children:[Object(j.jsx)("h3",{className:"mb-6 text-center text-xl font-bold",children:"Profile"}),l?Object(j.jsx)(f,{member:t,setMember:s,updateProfile:u,setEditing:b}):Object(j.jsx)(O,{member:t,setEditing:b})]}),Object(j.jsx)("div",{className:"flex justify-center",children:Object(j.jsxs)("button",{className:" flex",onClick:Object(x.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.auth.signOut();case 2:t=e.sent,t.soError&&alert(error.description||error.message),c(!1);case 6:case"end":return e.stop()}}),e)}))),children:["Log out"," \xa0 ",Object(j.jsx)(o.c,{size:30})," "]})})]})},N=s(17),y=s.n(N);function w(e){var t=e.handleSearch,s=Object(i.useRef)();return Object(j.jsxs)("form",{className:"mb-6 flex flex-col items-center",onSubmit:function(e){e.preventDefault(),""!==s.current.value?t(s.current.value):console.log("Nothing to search for")},children:[Object(j.jsx)("span",{className:"font-bold underline",children:"Search for sheets/lessons"}),Object(j.jsxs)("div",{className:"my-4 flex flex-col",children:[Object(j.jsxs)("label",{htmlFor:"videos",children:[Object(j.jsx)("input",{type:"checkbox",name:"videos"}),"\xa0Video lessons"]}),Object(j.jsxs)("label",{htmlFor:"tabs",children:[Object(j.jsx)("input",{type:"checkbox",name:"tabs",disabled:!0}),"\xa0Tablature"]}),Object(j.jsxs)("label",{htmlFor:"trad-sheet",children:[Object(j.jsx)("input",{type:"checkbox",name:"trad-sheet",disabled:!0}),"\xa0Traditional sheet"]})]}),Object(j.jsx)("label",{className:"",htmlFor:"skill-level",children:"Choose skill level:"}),Object(j.jsxs)("select",{className:"border",name:"skill-level",disabled:!0,children:[Object(j.jsx)("option",{value:"",children:"any"}),Object(j.jsx)("option",{value:"",children:"Just starting"}),"             ",Object(j.jsx)("option",{value:"",children:"Beginner-Intermediate"}),"     ",Object(j.jsx)("option",{value:"",children:"Intermediate-Advanced"}),"     "]}),Object(j.jsxs)("div",{className:"mt-6 flex",children:[Object(j.jsx)("input",{className:"w-64 border px-3 focus:outline-none",ref:s,type:"text",placeholder:"blues guitar"}),Object(j.jsx)("button",{className:"w-20 rounded-r bg-yellow-300 flex justify-center items-center",type:"submit",children:Object(j.jsx)(o.b,{})})]})]})}var I=function(e){var t=e.setPage;return Object(j.jsxs)("form",{className:"mb-6 flex flex-col items-center",onSubmit:function(e){e.preventDefault(),t("practice")},children:[Object(j.jsx)("h3",{className:"font-bold underline",children:"Ready to progress?"}),Object(j.jsx)("h4",{className:"text-md",children:"Set a goal and make a plan."}),Object(j.jsx)("input",{type:"submit",value:"Begin",className:"w-20 mt-4 rounded bg-green-300 cursor-pointer"})]})},k=function(e){var t=e.setPage;return Object(j.jsxs)("form",{className:"mb-6 flex flex-col items-center",onSubmit:function(e){e.preventDefault(),t("partner")},children:[Object(j.jsx)("h3",{className:"font-bold underline",children:"Already practicing?"}),Object(j.jsx)("h4",{className:"text-md",children:"Find a practice partner or"}),Object(j.jsx)("h4",{className:"text-md",children:"accountability buddy."}),Object(j.jsx)("button",{type:"submit",className:"w-20 h-6 mt-4 rounded bg-blue-400 flex justify-center items-center",children:Object(j.jsx)(o.b,{})})]})},S=function(e){var t=e.handleSearch,s=e.setPage;return Object(j.jsxs)("div",{className:"flex flex-col items-center",children:[Object(j.jsx)("h1",{className:"p-2 text-3xl font-bold bg-indigo-100",children:"L2P logo"}),Object(j.jsx)("h2",{className:"text-xl",children:"Learn to Play"}),Object(j.jsx)("h3",{className:"mb-8 text-xl",children:"ANY instrument"}),Object(j.jsx)(w,{handleSearch:t}),Object(j.jsx)(I,{setPage:s}),Object(j.jsx)(k,{setPage:s})]})};function C(e){var t=e.imgURL,s=e.vidTitle,c=(e.vidDesc,e.vidID),n="https://www.youtube.com/watch?v=".concat(c);return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("img",{src:t,width:"550",alt:"thumbnail"})}),Object(j.jsx)("td",{className:"pl-8 py-2 text-blue-600 underline",children:Object(j.jsx)("a",{href:n,target:"_blank",children:s})})]})}function E(e){var t=e.content;if(void 0===t[0])return console.log("didn't get the data in time"),Object(j.jsx)("div",{children:"Nothing to show"});for(var s="",c="",n="",r="",a=[],l=0;l<6;l++)s=t[l].id.videoId,c=t[l].snippet.title,n=t[l].snippet.description,r=t[l].snippet.thumbnails.medium.url,a.push(Object(j.jsx)(C,{imgURL:r,vidTitle:c,vidDesc:n,vidID:s},s));return Object(j.jsx)("table",{children:Object(j.jsx)("tbody",{children:a})})}var P=function(e){var t=e.data,s=e.query;return Object(j.jsxs)("div",{className:"text-center",children:[Object(j.jsx)("h3",{className:"font-bold underline",children:"Showing search results:"}),Object(j.jsxs)("h4",{className:"mb-6 text-md",children:["videos for: ",Object(j.jsx)("em",{children:s})]}),Object(j.jsx)(E,{content:t})]})};function A(e){var t=e.handleLogin,s=Object(i.useRef)(),c=Object(i.useRef)();return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==s.current.value&&""!==c.current.value&&(t(s.current.value,c.current.value),s.current.value="",c.current.value="")},className:"w-80 my-8 flex flex-col items-center justify-between",children:[Object(j.jsxs)("label",{htmlFor:"email",className:"w-full mb-4 flex flex-col items-center",children:[Object(j.jsx)("input",{name:"email",type:"text",ref:s,className:"w-64 border-2",autoComplete:"off"}),Object(j.jsx)("span",{className:"text-sm",children:"Email"})]}),Object(j.jsxs)("label",{htmlFor:"password",className:"w-full flex flex-col items-center",children:[Object(j.jsx)("input",{name:"password",type:"password",ref:c,className:"w-64 border-2",autoComplete:"off"}),Object(j.jsx)("span",{className:"text-sm",children:"Password"})]}),Object(j.jsx)("input",{type:"submit",value:"Login",className:"w-32 h-8 mt-6 border border-black rounded-md bg-blue-300 font-bold"})]})})}var R=function(e){var t=e.setMember,s=e.setLoggedIn,c=e.setPage,n=Object(i.useState)(""),r=Object(a.a)(n,2),l=(r[0],r[1],function(){var e=Object(x.a)(m.a.mark((function e(c,n){var r,a,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.auth.signIn({email:c,password:n});case 3:if(r=e.sent,a=r.user,r.session,!(l=r.signInError)){e.next=9;break}throw l;case 9:console.log(a),a.id,t({name:"Casey Geist",location:"Boston, MA, USA",about:"developer & musician",instruments:"guitar, piano"}),s(!0),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),alert(e.t0.description||e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t,s){return e.apply(this,arguments)}}());return Object(j.jsxs)("div",{className:"flex flex-col items-center",children:[Object(j.jsx)("h1",{className:"my-8 p-2 text-3xl font-bold bg-indigo-100",children:"L2P logo"}),Object(j.jsx)("h2",{className:"text-xl",children:"Please log in to continue."}),Object(j.jsx)(A,{handleLogin:l}),Object(j.jsxs)("span",{children:["Haven't yet joined? Register ",Object(j.jsx)("button",{className:"text-blue-500 underline",onClick:function(){c("register")},children:"here"}),"."]})]})};var L=function(e){var t=Object(i.useRef)(),s=Object(i.useRef)(),c=Object(i.useRef)();return Object(j.jsxs)("form",{onSubmit:function(n){if(n.preventDefault(),""!==t.current.value&&""!==s.current.value&&""!==c.current.value){var r={};r.name=t.current.value,r.email=s.current.value,r.password=c.current.value,t.current.value="",s.current.value="",c.current.value="",e.addUser(r)}},className:"w-80 my-8 flex flex-col items-center justify-between",children:[Object(j.jsxs)("label",{htmlFor:"name",className:"w-full mb-4 flex flex-col items-center",children:[Object(j.jsx)("input",{name:"name",type:"text",ref:t,className:"w-64 border-2",autoComplete:"off"}),Object(j.jsx)("span",{className:"text-sm",children:"Name"})]}),Object(j.jsxs)("label",{htmlFor:"email",className:"w-full mb-4 flex flex-col items-center",children:[Object(j.jsx)("input",{name:"email",type:"text",ref:s,className:"w-64 border-2",autoComplete:"off"}),Object(j.jsx)("span",{className:"text-sm",children:"Email"})]}),Object(j.jsxs)("label",{htmlFor:"password",className:"w-full flex flex-col items-center",children:[Object(j.jsx)("input",{name:"password",type:"password",ref:c,className:"w-64 border-2",autoComplete:"off"}),Object(j.jsx)("span",{className:"text-sm",children:"Password"})]}),Object(j.jsx)("input",{type:"submit",value:"Register",className:"w-32 h-8 mt-6 border border-black rounded-md bg-green-300 font-bold"})]})};var _=function(e){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{className:"text-xl text-center",children:e.message})})},T=function(e){var t=e.setPage,s=Object(i.useState)("Please join the community to continue."),c=Object(a.a)(s,2),n=c[0],r=(c[1],function(){var e=Object(x.a)(m.a.mark((function e(t){var s,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.auth.signUp({email:t.email,password:t.password});case 3:if(s=e.sent,s.user1,s.session,!(c=s.signupError)){e.next=9;break}throw c;case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),alert(e.t0.description||e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}());return Object(j.jsxs)("div",{className:"flex flex-col items-center",children:[Object(j.jsx)("h1",{className:"my-8 p-2 text-3xl font-bold bg-indigo-100",children:"L2P logo"}),Object(j.jsx)(_,{message:n}),Object(j.jsx)(L,{addUser:r}),Object(j.jsxs)("span",{children:["Already joined? Log in ",Object(j.jsx)("button",{className:"text-blue-500 underline",onClick:function(){t("login")},children:"here"}),"."]})]})};var D=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SUPABASE_ANON_KEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMTEyNTY5NCwiZXhwIjoxOTQ2NzAxNjk0fQ.Dwop7_6Y9byFYud7JfPTA_RMQrLBLKS7YD5Cm9OtWm4",REACT_APP_SUPABASE_SERV_KEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjMxMTI1Njk0LCJleHAiOjE5NDY3MDE2OTR9.Zs6mQF5Gi0vZLvx9EdQmg0t4h9mw80z_lq1_kLuqQ84",REACT_APP_SUPABASE_URL:"https://ycwmaxsxjguznhpxtooy.supabase.co"}).YOUTUBE_DATA_KEY,F=function(e){var t=e.page,s=e.setPage,c=Object(i.useState)([]),n=Object(a.a)(c,2),r=n[0],l=n[1],o=Object(i.useState)(!1),b=Object(a.a)(o,2),u=b[0],d=b[1],h=Object(i.useState)({}),O=Object(a.a)(h,2),f=O[0],p=O[1],g=Object(i.useState)(!1),N=Object(a.a)(g,2),w=(N[0],N[1],Object(i.useState)("")),I=Object(a.a)(w,2),k=I[0],C=I[1];switch(t){case"results":return Object(j.jsx)(P,{data:r,query:k});case"login":case"dashboard":return u?Object(j.jsx)(v,{member:f,setMember:p,setLoggedIn:d}):Object(j.jsx)(R,{setMember:p,setLoggedIn:d,setPage:s});case"register":return Object(j.jsx)(T,{setPage:s});default:return Object(j.jsx)(S,{handleSearch:function(e){C(e);var t=e.replaceAll(" ","%2C");console.log(t);var c="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&order=rating&q=".concat(t,"&key=").concat(D);!function(){var e=Object(x.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get(c).catch((function(e){return console.log(e)}));case 2:t=e.sent,console.log(t),l(t.data.items),200===t.status&&s("results");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()},setPage:s})}};function J(){var e=Object(i.useState)("home"),t=Object(a.a)(e,2),s=t[0],c=t[1];return Object(j.jsxs)("div",{className:"bg-gray-500 h-screen",children:[Object(j.jsx)(u,{}),Object(j.jsxs)("div",{className:"w-96 h-mobile bg-white p-6  mx-auto rounded",children:[Object(j.jsx)(b,{page:s,setPage:c}),Object(j.jsx)(l.c,{children:Object(j.jsx)(l.a,{exact:!0,path:"/",children:Object(j.jsx)(F,{page:s,setPage:c})})})]})]})}var U=document.getElementById("root");n.a.render(Object(j.jsx)(r.a,{children:Object(j.jsx)(J,{})}),U)}},[[67,1,2]]]);
//# sourceMappingURL=main.8cafee78.chunk.js.map