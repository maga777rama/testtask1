var Re=e=>{throw TypeError(e)};var ne=(e,t,s)=>t.has(e)||Re("Cannot "+s);var a=(e,t,s)=>(ne(e,t,"read from private field"),s?s.call(e):t.get(e)),b=(e,t,s)=>t.has(e)?Re("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),y=(e,t,s,r)=>(ne(e,t,"write to private field"),r?r.call(e,s):t.set(e,s),s),g=(e,t,s)=>(ne(e,t,"access private method"),s);import{as as Me,at as Ee,au as D,av as ce,aw as X,ax as _e,ay as le,az as Ce,aA as ze,aB as Ae,aC as Le,aD as Oe,aE as ke,r as u,aF as Be,aG as He,aH as $,aI as F,aJ as Ne,an as We,ao as Ve,j as oe,aK as qe}from"./index-D8xV5Edm.js";var E,l,K,w,j,A,Q,I,G,L,B,P,U,k,H,d,V,ue,de,he,fe,pe,me,ye,Fe,Qe,Ke=(Qe=class extends Me{constructor(t,s){super();b(this,d);b(this,E);b(this,l);b(this,K);b(this,w);b(this,j);b(this,A);b(this,Q);b(this,I);b(this,G);b(this,L);b(this,B);b(this,P);b(this,U);b(this,k);b(this,H,new Set);this.options=s,y(this,E,t),y(this,I,null),y(this,Q,Ee()),this.options.experimental_prefetchInRender||a(this,Q).reject(new Error("experimental_prefetchInRender feature flag is not enabled")),this.bindMethods(),this.setOptions(s)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(a(this,l).addObserver(this),Se(a(this,l),this.options)?g(this,d,V).call(this):this.updateResult(),g(this,d,fe).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return ge(a(this,l),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return ge(a(this,l),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,g(this,d,pe).call(this),g(this,d,me).call(this),a(this,l).removeObserver(this)}setOptions(t,s){const r=this.options,n=a(this,l);if(this.options=a(this,E).defaultQueryOptions(t),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof D(this.options.enabled,a(this,l))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");g(this,d,ye).call(this),a(this,l).setOptions(this.options),r._defaulted&&!ce(this.options,r)&&a(this,E).getQueryCache().notify({type:"observerOptionsUpdated",query:a(this,l),observer:this});const i=this.hasListeners();i&&Ie(a(this,l),n,this.options,r)&&g(this,d,V).call(this),this.updateResult(s),i&&(a(this,l)!==n||D(this.options.enabled,a(this,l))!==D(r.enabled,a(this,l))||X(this.options.staleTime,a(this,l))!==X(r.staleTime,a(this,l)))&&g(this,d,ue).call(this);const o=g(this,d,de).call(this);i&&(a(this,l)!==n||D(this.options.enabled,a(this,l))!==D(r.enabled,a(this,l))||o!==a(this,k))&&g(this,d,he).call(this,o)}getOptimisticResult(t){const s=a(this,E).getQueryCache().build(a(this,E),t),r=this.createResult(s,t);return Je(this,r)&&(y(this,w,r),y(this,A,this.options),y(this,j,a(this,l).state)),r}getCurrentResult(){return a(this,w)}trackResult(t,s){const r={};return Object.keys(t).forEach(n=>{Object.defineProperty(r,n,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(n),s==null||s(n),t[n])})}),r}trackProp(t){a(this,H).add(t)}getCurrentQuery(){return a(this,l)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const s=a(this,E).defaultQueryOptions(t),r=a(this,E).getQueryCache().build(a(this,E),s);return r.fetch().then(()=>this.createResult(r,s))}fetch(t){return g(this,d,V).call(this,{...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),a(this,w)))}createResult(t,s){var we;const r=a(this,l),n=this.options,i=a(this,w),o=a(this,j),c=a(this,A),m=t!==r?t.state:a(this,K),{state:v}=t;let h={...v},O=!1,p;if(s._optimisticResults){const x=this.hasListeners(),_=!x&&Se(t,s),z=x&&Ie(t,r,s,n);(_||z)&&(h={...h,...Le(v.data,t.options)}),s._optimisticResults==="isRestoring"&&(h.fetchStatus="idle")}let{error:T,errorUpdatedAt:N,status:C}=h;if(s.select&&h.data!==void 0)if(i&&h.data===(o==null?void 0:o.data)&&s.select===a(this,G))p=a(this,L);else try{y(this,G,s.select),p=s.select(h.data),p=Oe(i==null?void 0:i.data,p,s),y(this,L,p),y(this,I,null)}catch(x){y(this,I,x)}else p=h.data;if(s.placeholderData!==void 0&&p===void 0&&C==="pending"){let x;if(i!=null&&i.isPlaceholderData&&s.placeholderData===(c==null?void 0:c.placeholderData))x=i.data;else if(x=typeof s.placeholderData=="function"?s.placeholderData((we=a(this,B))==null?void 0:we.state.data,a(this,B)):s.placeholderData,s.select&&x!==void 0)try{x=s.select(x),y(this,I,null)}catch(_){y(this,I,_)}x!==void 0&&(C="success",p=Oe(i==null?void 0:i.data,x,s),O=!0)}a(this,I)&&(T=a(this,I),p=a(this,L),N=Date.now(),C="error");const W=h.fetchStatus==="fetching",ae=C==="pending",ie=C==="error",ve=ae&&W,xe=p!==void 0,S={status:C,fetchStatus:h.fetchStatus,isPending:ae,isSuccess:C==="success",isError:ie,isInitialLoading:ve,isLoading:ve,data:p,dataUpdatedAt:h.dataUpdatedAt,error:T,errorUpdatedAt:N,failureCount:h.fetchFailureCount,failureReason:h.fetchFailureReason,errorUpdateCount:h.errorUpdateCount,isFetched:h.dataUpdateCount>0||h.errorUpdateCount>0,isFetchedAfterMount:h.dataUpdateCount>m.dataUpdateCount||h.errorUpdateCount>m.errorUpdateCount,isFetching:W,isRefetching:W&&!ae,isLoadingError:ie&&!xe,isPaused:h.fetchStatus==="paused",isPlaceholderData:O,isRefetchError:ie&&xe,isStale:be(t,s),refetch:this.refetch,promise:a(this,Q)};if(this.options.experimental_prefetchInRender){const x=Y=>{S.status==="error"?Y.reject(S.error):S.data!==void 0&&Y.resolve(S.data)},_=()=>{const Y=y(this,Q,S.promise=Ee());x(Y)},z=a(this,Q);switch(z.status){case"pending":t.queryHash===r.queryHash&&x(z);break;case"fulfilled":(S.status==="error"||S.data!==z.value)&&_();break;case"rejected":(S.status!=="error"||S.error!==z.reason)&&_();break}}return S}updateResult(t){const s=a(this,w),r=this.createResult(a(this,l),this.options);if(y(this,j,a(this,l).state),y(this,A,this.options),a(this,j).data!==void 0&&y(this,B,a(this,l)),ce(r,s))return;y(this,w,r);const n={},i=()=>{if(!s)return!0;const{notifyOnChangeProps:o}=this.options,c=typeof o=="function"?o():o;if(c==="all"||!c&&!a(this,H).size)return!0;const f=new Set(c??a(this,H));return this.options.throwOnError&&f.add("error"),Object.keys(a(this,w)).some(m=>{const v=m;return a(this,w)[v]!==s[v]&&f.has(v)})};(t==null?void 0:t.listeners)!==!1&&i()&&(n.listeners=!0),g(this,d,Fe).call(this,{...n,...t})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&g(this,d,fe).call(this)}},E=new WeakMap,l=new WeakMap,K=new WeakMap,w=new WeakMap,j=new WeakMap,A=new WeakMap,Q=new WeakMap,I=new WeakMap,G=new WeakMap,L=new WeakMap,B=new WeakMap,P=new WeakMap,U=new WeakMap,k=new WeakMap,H=new WeakMap,d=new WeakSet,V=function(t){g(this,d,ye).call(this);let s=a(this,l).fetch(this.options,t);return t!=null&&t.throwOnError||(s=s.catch(_e)),s},ue=function(){g(this,d,pe).call(this);const t=X(this.options.staleTime,a(this,l));if(le||a(this,w).isStale||!Ce(t))return;const r=ze(a(this,w).dataUpdatedAt,t)+1;y(this,P,setTimeout(()=>{a(this,w).isStale||this.updateResult()},r))},de=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(a(this,l)):this.options.refetchInterval)??!1},he=function(t){g(this,d,me).call(this),y(this,k,t),!(le||D(this.options.enabled,a(this,l))===!1||!Ce(a(this,k))||a(this,k)===0)&&y(this,U,setInterval(()=>{(this.options.refetchIntervalInBackground||Ae.isFocused())&&g(this,d,V).call(this)},a(this,k)))},fe=function(){g(this,d,ue).call(this),g(this,d,he).call(this,g(this,d,de).call(this))},pe=function(){a(this,P)&&(clearTimeout(a(this,P)),y(this,P,void 0))},me=function(){a(this,U)&&(clearInterval(a(this,U)),y(this,U,void 0))},ye=function(){const t=a(this,E).getQueryCache().build(a(this,E),this.options);if(t===a(this,l))return;const s=a(this,l);y(this,l,t),y(this,K,t.state),this.hasListeners()&&(s==null||s.removeObserver(this),t.addObserver(this))},Fe=function(t){ke.batch(()=>{t.listeners&&this.listeners.forEach(s=>{s(a(this,w))}),a(this,E).getQueryCache().notify({query:a(this,l),type:"observerResultsUpdated"})})},Qe);function Ge(e,t){return D(t.enabled,e)!==!1&&e.state.data===void 0&&!(e.state.status==="error"&&t.retryOnMount===!1)}function Se(e,t){return Ge(e,t)||e.state.data!==void 0&&ge(e,t,t.refetchOnMount)}function ge(e,t,s){if(D(t.enabled,e)!==!1){const r=typeof s=="function"?s(e):s;return r==="always"||r!==!1&&be(e,t)}return!1}function Ie(e,t,s,r){return(e!==t||D(r.enabled,e)===!1)&&(!s.suspense||e.state.status!=="error")&&be(e,s)}function be(e,t){return D(t.enabled,e)!==!1&&e.isStaleByTime(X(t.staleTime,e))}function Je(e,t){return!ce(e.getCurrentResult(),t)}var je=u.createContext(!1),Ye=()=>u.useContext(je);je.Provider;function Ze(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}var Xe=u.createContext(Ze()),et=()=>u.useContext(Xe);function tt(e,t){return typeof e=="function"?e(...t):!!e}function De(){}var st=(e,t)=>{(e.suspense||e.throwOnError||e.experimental_prefetchInRender)&&(t.isReset()||(e.retryOnMount=!1))},rt=e=>{u.useEffect(()=>{e.clearReset()},[e])},at=({result:e,errorResetBoundary:t,throwOnError:s,query:r,suspense:n})=>e.isError&&!t.isReset()&&!e.isFetching&&r&&(n&&e.data===void 0||tt(s,[e.error,r])),it=e=>{const t=e.staleTime;e.suspense&&(e.staleTime=typeof t=="function"?(...s)=>Math.max(t(...s),1e3):Math.max(t??1e3,1e3),typeof e.gcTime=="number"&&(e.gcTime=Math.max(e.gcTime,1e3)))},nt=(e,t)=>e.isLoading&&e.isFetching&&!t,ot=(e,t)=>(e==null?void 0:e.suspense)&&t.isPending,Te=(e,t,s)=>t.fetchOptimistic(e).catch(()=>{s.clearReset()});function ct(e,t,s){var h,O,p,T,N;const r=Be(),n=Ye(),i=et(),o=r.defaultQueryOptions(e);(O=(h=r.getDefaultOptions().queries)==null?void 0:h._experimental_beforeQuery)==null||O.call(h,o),o._optimisticResults=n?"isRestoring":"optimistic",it(o),st(o,i),rt(i);const c=!r.getQueryCache().get(o.queryHash),[f]=u.useState(()=>new t(r,o)),m=f.getOptimisticResult(o),v=!n&&e.subscribed!==!1;if(u.useSyncExternalStore(u.useCallback(C=>{const W=v?f.subscribe(ke.batchCalls(C)):De;return f.updateResult(),W},[f,v]),()=>f.getCurrentResult(),()=>f.getCurrentResult()),u.useEffect(()=>{f.setOptions(o,{listeners:!1})},[o,f]),ot(o,m))throw Te(o,f,i);if(at({result:m,errorResetBoundary:i,throwOnError:o.throwOnError,query:r.getQueryCache().get(o.queryHash),suspense:o.suspense}))throw m.error;if((T=(p=r.getDefaultOptions().queries)==null?void 0:p._experimental_afterQuery)==null||T.call(p,o,m),o.experimental_prefetchInRender&&!le&&nt(m,n)){const C=c?Te(o,f,i):(N=r.getQueryCache().get(o.queryHash))==null?void 0:N.promise;C==null||C.catch(De).finally(()=>{f.updateResult()})}return o.notifyOnChangeProps?m:f.trackResult(m)}function Gt(e,t){return ct(e,Ke)}var lt=e=>typeof e=="function",se=(e,t)=>lt(e)?e(t):e,ut=(()=>{let e=0;return()=>(++e).toString()})(),Pe=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),dt=20,Ue=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,dt)};case 1:return{...e,toasts:e.toasts.map(i=>i.id===t.toast.id?{...i,...t.toast}:i)};case 2:let{toast:s}=t;return Ue(e,{type:e.toasts.find(i=>i.id===s.id)?1:0,toast:s});case 3:let{toastId:r}=t;return{...e,toasts:e.toasts.map(i=>i.id===r||r===void 0?{...i,dismissed:!0,visible:!1}:i)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(i=>i.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let n=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(i=>({...i,pauseDuration:i.pauseDuration+n}))}}},ee=[],te={toasts:[],pausedAt:void 0},M=e=>{te=Ue(te,e),ee.forEach(t=>{t(te)})},ht={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},ft=(e={})=>{let[t,s]=u.useState(te);u.useEffect(()=>(ee.push(s),()=>{let n=ee.indexOf(s);n>-1&&ee.splice(n,1)}),[t]);let r=t.toasts.map(n=>{var i,o,c;return{...e,...e[n.type],...n,removeDelay:n.removeDelay||((i=e[n.type])==null?void 0:i.removeDelay)||(e==null?void 0:e.removeDelay),duration:n.duration||((o=e[n.type])==null?void 0:o.duration)||(e==null?void 0:e.duration)||ht[n.type],style:{...e.style,...(c=e[n.type])==null?void 0:c.style,...n.style}}});return{...t,toasts:r}},pt=(e,t="blank",s)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...s,id:(s==null?void 0:s.id)||ut()}),J=e=>(t,s)=>{let r=pt(t,e,s);return M({type:2,toast:r}),r.id},R=(e,t)=>J("blank")(e,t);R.error=J("error");R.success=J("success");R.loading=J("loading");R.custom=J("custom");R.dismiss=e=>{M({type:3,toastId:e})};R.remove=e=>M({type:4,toastId:e});R.promise=(e,t,s)=>{let r=R.loading(t.loading,{...s,...s==null?void 0:s.loading});return typeof e=="function"&&(e=e()),e.then(n=>{let i=t.success?se(t.success,n):void 0;return i?R.success(i,{id:r,...s,...s==null?void 0:s.success}):R.dismiss(r),n}).catch(n=>{let i=t.error?se(t.error,n):void 0;i?R.error(i,{id:r,...s,...s==null?void 0:s.error}):R.dismiss(r)}),e};var mt=(e,t)=>{M({type:1,toast:{id:e,height:t}})},yt=()=>{M({type:5,time:Date.now()})},q=new Map,gt=1e3,bt=(e,t=gt)=>{if(q.has(e))return;let s=setTimeout(()=>{q.delete(e),M({type:4,toastId:e})},t);q.set(e,s)},vt=e=>{let{toasts:t,pausedAt:s}=ft(e);u.useEffect(()=>{if(s)return;let i=Date.now(),o=t.map(c=>{if(c.duration===1/0)return;let f=(c.duration||0)+c.pauseDuration-(i-c.createdAt);if(f<0){c.visible&&R.dismiss(c.id);return}return setTimeout(()=>R.dismiss(c.id),f)});return()=>{o.forEach(c=>c&&clearTimeout(c))}},[t,s]);let r=u.useCallback(()=>{s&&M({type:6,time:Date.now()})},[s]),n=u.useCallback((i,o)=>{let{reverseOrder:c=!1,gutter:f=8,defaultPosition:m}=o||{},v=t.filter(p=>(p.position||m)===(i.position||m)&&p.height),h=v.findIndex(p=>p.id===i.id),O=v.filter((p,T)=>T<h&&p.visible).length;return v.filter(p=>p.visible).slice(...c?[O+1]:[0,O]).reduce((p,T)=>p+(T.height||0)+f,0)},[t]);return u.useEffect(()=>{t.forEach(i=>{if(i.dismissed)bt(i.id,i.removeDelay);else{let o=q.get(i.id);o&&(clearTimeout(o),q.delete(i.id))}})},[t]),{toasts:t,handlers:{updateHeight:mt,startPause:yt,endPause:r,calculateOffset:n}}},xt=$`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,wt=$`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Rt=$`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Et=F("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${xt} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${wt} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Rt} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Ct=$`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Ot=F("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Ct} 1s linear infinite;
`,St=$`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,It=$`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Dt=F("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${St} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${It} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Tt=F("div")`
  position: absolute;
`,$t=F("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Qt=$`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,kt=F("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Qt} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Ft=({toast:e})=>{let{icon:t,type:s,iconTheme:r}=e;return t!==void 0?typeof t=="string"?u.createElement(kt,null,t):t:s==="blank"?null:u.createElement($t,null,u.createElement(Ot,{...r}),s!=="loading"&&u.createElement(Tt,null,s==="error"?u.createElement(Et,{...r}):u.createElement(Dt,{...r})))},jt=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Pt=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Ut="0%{opacity:0;} 100%{opacity:1;}",Mt="0%{opacity:1;} 100%{opacity:0;}",_t=F("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,zt=F("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,At=(e,t)=>{let s=e.includes("top")?1:-1,[r,n]=Pe()?[Ut,Mt]:[jt(s),Pt(s)];return{animation:t?`${$(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${$(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Lt=u.memo(({toast:e,position:t,style:s,children:r})=>{let n=e.height?At(e.position||t||"top-center",e.visible):{opacity:0},i=u.createElement(Ft,{toast:e}),o=u.createElement(zt,{...e.ariaProps},se(e.message,e));return u.createElement(_t,{className:e.className,style:{...n,...s,...e.style}},typeof r=="function"?r({icon:i,message:o}):u.createElement(u.Fragment,null,i,o))});Ne(u.createElement);var Bt=({id:e,className:t,style:s,onHeightUpdate:r,children:n})=>{let i=u.useCallback(o=>{if(o){let c=()=>{let f=o.getBoundingClientRect().height;r(e,f)};c(),new MutationObserver(c).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return u.createElement("div",{ref:i,className:t,style:s},n)},Ht=(e,t)=>{let s=e.includes("top"),r=s?{top:0}:{bottom:0},n=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Pe()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(s?1:-1)}px)`,...r,...n}},Nt=He`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Z=16,Wt=({reverseOrder:e,position:t="top-center",toastOptions:s,gutter:r,children:n,containerStyle:i,containerClassName:o})=>{let{toasts:c,handlers:f}=vt(s);return u.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:Z,left:Z,right:Z,bottom:Z,pointerEvents:"none",...i},className:o,onMouseEnter:f.startPause,onMouseLeave:f.endPause},c.map(m=>{let v=m.position||t,h=f.calculateOffset(m,{reverseOrder:e,gutter:r,defaultPosition:t}),O=Ht(v,h);return u.createElement(Bt,{id:m.id,key:m.id,onHeightUpdate:f.updateHeight,className:m.visible?Nt:"",style:O},m.type==="custom"?se(m.message,m):n?n(m):u.createElement(Lt,{toast:m,position:v}))}))};const $e=We()(Ve(e=>({cards:[],toggleCard:t=>{e(s=>({cards:s.cards.includes(t)?s.cards.filter(r=>r!==t):[...s.cards,t]}))}}),{name:"favouriteCards-storage"})),Jt=e=>{const t=$e(c=>c.cards),s=$e(c=>c.toggleCard),r=t.includes(e.id),n=r?"Удалить из избранного":"Добавить в избранное",i=()=>R.success(r?"Удален из избранного":"Добавлен в избранное"),o=c=>{c.preventDefault(),c.stopPropagation(),s(e.id),i()};return oe.jsxs("div",{children:[oe.jsx(qe,{type:"primary",style:{backgroundColor:"gray",border:`2px solid ${r?"orange":"gray"}`,zIndex:1e3},onClick:o,children:n}),oe.jsx(Wt,{toastOptions:{className:"",success:{style:{background:"#3c3e44",color:"#fff",fontWeight:"normal",fontSize:"14px"}}}})]})},re="https://rickandmortyapi.com/api/character",Yt=async e=>{try{return await(await fetch(`${re}?page=${e}`)).json()}catch(t){console.error(t)}},Zt=async(e,t)=>{try{return await(await fetch(`${re}?page=${e}&name=${t}`)).json()}catch(s){throw console.error(s),s}},Xt=async e=>{try{return await(await fetch(`${re}/${e.length!==0?e:""}`)).json()}catch(t){console.error(t)}},es=async e=>{try{return await(await fetch(`${re}/${e}`)).json()}catch(t){console.error(t)}},ts=async e=>{const t=e.map(r=>r.split("/").pop()).join(",");return await(await fetch(`https://rickandmortyapi.com/api/episode/${t}`)).json()};export{Jt as T,Gt as a,Zt as b,Yt as c,es as d,ts as e,Xt as g,$e as u};
