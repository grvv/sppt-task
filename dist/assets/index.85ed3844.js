var j=Object.defineProperty,B=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var O=(e,t,r)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,g=(e,t)=>{for(var r in t||(t={}))U.call(t,r)&&O(e,r,t[r]);if(A)for(var r of A(t))z.call(t,r)&&O(e,r,t[r]);return e},E=(e,t)=>B(e,K(t));import{p as Q,c as W,a as H,b as J,d as X,t as Y,j as s,e as N,f as c,r as d,g as Z,h as F,q as b,u as T,i as S,k as ee,l as k,m as C,n as R,F as L,o as te,T as _,D as w,s as se,S as re,R as ne,v as ae,w as oe,P as ie,B as le}from"./vendor.08eb7476.js";const ce=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}};ce();var p;(function(e){e.GET_EVENTS_LOADING="GET_EVENTS_LOADING",e.GET_EVENTS_SUCCESS="GET_EVENTS_SUCCESS",e.GET_EVENTS_FAIL="GET_EVENTS_FAIL",e.SET_EVENT_OFFSET="SET_EVENT_OFFSET",e.RESET_EVENTS_DATA="RESET_EVENTS_DATA"})(p||(p={}));const de={loading:!0,events:[],offset:0,error:""},ue=Q((e,t)=>{switch(t.type){case p.GET_EVENTS_LOADING:e.loading=!0;break;case p.GET_EVENTS_SUCCESS:{const{items:r}=t.payload;e.loading=!1,e.events=[...e.events,...r];break}case p.GET_EVENTS_FAIL:{e.loading=!1,e.error=`${t.payload}`;break}case p.SET_EVENT_OFFSET:{e.offset=parseInt(t.payload,10);break}case p.RESET_EVENTS_DATA:{e.loading=!0,e.events=[],e.error="",e.offset=0;break}}},de),pe=W({events:ue}),me=H(pe,J(X(Y)));function I({data:e,columns:t,children:r,idExtractor:o,className:n="",rowClickHandler:a}){return s("div",{className:N("flex flex-col",n),children:s("div",{className:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",children:s("div",{className:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",children:c("div",{className:"overflow-hidden border-gray-200",children:[c("table",{className:"min-w-full divide-y divide-gray-200",children:[s("thead",{className:"bg-gray-50",children:s("tr",{children:t.map(i=>s("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:i.header},`th_${i.header}`))})}),s("tbody",{className:"bg-white divide-y divide-gray-200",children:e==null?void 0:e.map(i=>s("tr",{className:N(a&&"cursor-pointer"),onClick:l=>a&&a(l,i),children:t.map((l,u)=>{const m=typeof l.value!="function"?i[l.value]:l.value(i);return s("td",{className:"px-6 py-4 whitespace-nowrap",children:s("div",{className:"flex items-center",children:m})},`td_${o(i)}_${l.uniqueKey(i,u)}`)})},`tr_${o(i)}`))})]}),r]})})})})}function V({children:e,onClick:t}){return s("button",{type:"button",onClick:t,className:"p-2 pl-5 pr-5 bg-transparent border-2 border-purple-500 text-purple-500 text-lg rounded-lg hover:bg-purple-500 hover:text-gray-100 focus:border-4 focus:border-purple-300",children:e})}function x({className:e}){return s("div",{style:{borderTopColor:"transparent"},className:N("w-12 h-12 border-4 border-purple-400 border-solid rounded-full animate-spin",e)})}x.defaultProps={className:""};function G(e){const t=d.exports.useRef(e),r=d.exports.useRef(0);return Z(e,t.current)||(t.current=e,r.current+=1),d.exports.useMemo(()=>t.current,[r.current])}const D=F.create({baseURL:"https://fyx8bq1lpa.execute-api.eu-central-1.amazonaws.com/Prod",headers:{"Content-type":"application/json"}});D.defaults.headers.common.Authorization=`Basic ${window.btoa("frontend@shyftplan.com:api_test_auth_token")}`;function he(e){const[t,r]=d.exports.useState(""),[o,n]=d.exports.useState(!0),[a,i]=d.exports.useState(null),l=G(e);return d.exports.useEffect(()=>{n(!0);let u=!1;const m=F.CancelToken.source();return(async h=>{try{const f=await D.request(E(g({},h),{cancelToken:m.token}));u||i(f)}catch(f){u||r(f.message)}finally{u||n(!1)}})(l),()=>{u=!0,m.cancel("Cancelling in cleanup")}},[l]),{response:a,error:t,loading:o}}function fe(){return b.parse(T().search)}function ge(){return G(b.parse(T().search))}const q=e=>{const{startDate:t,endDate:r}=e;return{startDate:t?S(t):new Date,endDate:r?S(r):new Date,key:"selection"}},v=e=>ee(S(e),"PPpp"),ye=[{header:"Position",value:e=>e.position.name,uniqueKey:(e,t)=>e.position.id.toString()+t},{header:"Start Time",value:e=>v(e.startsAt),uniqueKey:(e,t)=>e.startsAt+t},{header:"End Time",value:e=>v(e.endsAt),uniqueKey:(e,t)=>e.endsAt+t}],Ee=e=>async t=>{try{t({type:p.GET_EVENTS_LOADING});const r=await D.get("/events",{params:g({},e)});t({type:p.GET_EVENTS_SUCCESS,payload:r.data})}catch(r){t({type:p.GET_EVENTS_FAIL,payload:r.message})}},P=()=>({type:p.RESET_EVENTS_DATA}),xe=e=>({type:p.SET_EVENT_OFFSET,payload:e}),ve=e=>e.events,Ne=e=>e.events.offset,M=10;function be(){const e=k(),t=ge(),r=C(),{loading:o,events:n}=R(ve),a=R(Ne);d.exports.useEffect(()=>{r(Ee(E(g({},t),{offset:a,limit:M})))},[t,r,a]),d.exports.useEffect(()=>()=>{r(P())},[r]);const i=(l,u)=>{const{id:m}=u;e.push(`/event/${m}`)};return s(L,{children:n.length?s(I,{data:n,className:"overflow-auto",columns:ye,rowClickHandler:i,idExtractor:l=>l.id.toString(),children:s("div",{className:"flex justify-center",children:o?s(x,{}):s(V,{onClick:()=>r(xe(a+M)),children:"Load More"})})}):s("div",{className:"flex justify-center",children:o?s(x,{}):"No Events found!"})})}const Te=[{header:"ID",value:({id:e})=>e.toString(),uniqueKey:({id:e})=>e.toString()},{header:"Name",value:({firstName:e,lastName:t,image:r})=>c(L,{children:[s("div",{className:"flex-shrink-0 h-10 w-10",children:s("img",{className:"h-10 w-10 rounded-full",src:r,alt:""})}),s("div",{className:"ml-4",children:c("div",{className:"text-sm font-medium text-gray-900",children:[e," ",t]})})]}),uniqueKey:({firstName:e,lastName:t},r)=>`${e}-${t}-${r}`}];function Se(){const{id:e}=te(),{loading:t,error:r,response:o}=he({url:`/events/${+e}`});if(t||r)return s("div",{className:"flex justify-center",children:t?s(x,{}):"No Details found"});const{position:n,startsAt:a,endsAt:i,employees:l}=(o==null?void 0:o.data)||{};return c("div",{className:"bg-white shadow overflow-auto sm:rounded-lg",children:[c("div",{className:"px-4 py-5 sm:px-6 my-2",children:[s("h2",{className:"text-base my-3 text-indigo-600 font-semibold tracking-wide uppercase",children:"Event Details"}),s("h3",{className:"text-lg leading-6 font-medium text-gray-900",children:n==null?void 0:n.name}),c("p",{className:"mt-1 max-w-2xl text-sm text-gray-500",children:["Starts At: ",v(a||"")]}),c("p",{className:"mt-1 max-w-2xl text-sm text-gray-500",children:["Ends At: ",v(i||"")]})]}),c("div",{className:"border-t border-gray-200 px-6 my-2",children:[s("h2",{className:"text-base my-3 text-indigo-600 font-semibold tracking-wide uppercase",children:"Employees"}),(l==null?void 0:l.length)?s(I,{data:l,columns:Te,idExtractor:({id:u})=>u.toString()}):s("div",{className:"flex justify-center my-10",children:"No Employees in this event."})]})]})}function _e(){return c("div",{className:"border-t border-gray-200 text-center pt-8",children:[s("h1",{className:"text-9xl font-bold text-purple-400",children:"404"}),s("h1",{className:"text-6xl font-medium py-8",children:"Oops! Page not found"})]})}const we=[{path:"/",exact:!0,component:be},{path:"/event/:id",exact:!0,component:Se},{path:"*",exact:!0,component:_e}];function De({children:e}){return c("div",{className:"flex justify-between flex-shrink-0 px-8 py-4 border-gray-300",children:[s("img",{className:"h-10",alt:"Shyftplan Logo",src:"https://shyftplan.com/resources/images/shyftplan-logo.svg"}),e]})}function Ae({isOpen:e,closeModal:t}){const r=k(),o=fe(),n=C(),[a,i]=d.exports.useState(()=>q(o)),l=y=>{const{startDate:h,endDate:f}=y.selection;i($=>E(g({},$),{startDate:h,endDate:f}))},u=()=>{t(),i(g({},q(o)))},m=()=>{n(P()),t();const{startDate:y,endDate:h}=a,f=b.stringify(E(g({},o),{startDate:y==null?void 0:y.toISOString(),endDate:h==null?void 0:h.toISOString()}));r.push(`?${f}`)};return s(_,{appear:!0,show:e,as:d.exports.Fragment,children:s(w,{as:"div",className:"fixed inset-0 z-10 overflow-y-auto",onClose:u,children:c("div",{className:"min-h-screen px-4 text-center",children:[s(_.Child,{as:d.exports.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:s(w.Overlay,{className:"fixed inset-0"})}),s("span",{className:"inline-block h-screen align-middle","aria-hidden":"true",children:"\u200B"}),s(_.Child,{as:d.exports.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:c("div",{className:"inline-block w-full max-w-max p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl",children:[s(w.Title,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900 mb-3 pb-3 border-b",children:"Select Date Filters"}),s(se.DateRangePicker,{ranges:[a],onChange:l,rangeColors:["#9864f6"]}),s("div",{className:"mt-4 text-right",children:s("button",{type:"button",className:"inline-flex justify-center px-4 py-2 text-sm font-medium text-purple-900 bg-purple-100 border border-transparent rounded-md hover:bg-purple-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-500",onClick:m,children:"Submit"})})]})})]})})})}const Oe="/",Fe=()=>{const e=T(),[t,r]=d.exports.useState(!1);return c("div",{className:"flex flex-col w-screen h-screen px-4",children:[s(De,{children:e.pathname===Oe&&s(V,{onClick:()=>r(!t),children:"Select Date Filters"})}),s(re,{children:we.map(o=>s(ne,{path:o.path,exact:o.exact,component:o.component},o.path))}),s(Ae,{isOpen:t,closeModal:()=>r(!t)})]})};ae.render(s(oe.StrictMode,{children:s(ie,{store:me,children:s(le,{basename:"/sppt-task",children:s(Fe,{})})})}),document.getElementById("root"));