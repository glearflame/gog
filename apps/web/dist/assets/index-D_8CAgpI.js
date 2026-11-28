(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const f of l)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const f={};return l.integrity&&(f.integrity=l.integrity),l.referrerPolicy&&(f.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?f.credentials="include":l.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(l){if(l.ep)return;l.ep=!0;const f=i(l);fetch(l.href,f)}})();function Fx(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var pd={exports:{}},ul={};var _0;function tE(){if(_0)return ul;_0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,f){var h=null;if(f!==void 0&&(h=""+f),l.key!==void 0&&(h=""+l.key),"key"in l){f={};for(var d in l)d!=="key"&&(f[d]=l[d])}else f=l;return l=f.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:f}}return ul.Fragment=e,ul.jsx=i,ul.jsxs=i,ul}var v0;function eE(){return v0||(v0=1,pd.exports=tE()),pd.exports}var b=eE(),md={exports:{}},le={};var x0;function nE(){if(x0)return le;x0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),p=Symbol.for("react.activity"),x=Symbol.for("react.view_transition"),M=Symbol.iterator;function A(F){return F===null||typeof F!="object"?null:(F=M&&F[M]||F["@@iterator"],typeof F=="function"?F:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,S={};function B(F,ft,tt){this.props=F,this.context=ft,this.refs=S,this.updater=tt||C}B.prototype.isReactComponent={},B.prototype.setState=function(F,ft){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,ft,"setState")},B.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function z(){}z.prototype=B.prototype;function N(F,ft,tt){this.props=F,this.context=ft,this.refs=S,this.updater=tt||C}var X=N.prototype=new z;X.constructor=N,y(X,B.prototype),X.isPureReactComponent=!0;var V=Array.isArray;function P(){}var q={H:null,A:null,T:null,S:null},D=Object.prototype.hasOwnProperty;function w(F,ft,tt){var rt=tt.ref;return{$$typeof:o,type:F,key:ft,ref:rt!==void 0?rt:null,props:tt}}function H(F,ft){return w(F.type,ft,F.props)}function nt(F){return typeof F=="object"&&F!==null&&F.$$typeof===o}function ct(F){var ft={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(tt){return ft[tt]})}var ht=/\/+/g;function ut(F,ft){return typeof F=="object"&&F!==null&&F.key!=null?ct(""+F.key):ft.toString(36)}function W(F){switch(F.status){case"fulfilled":return F.value;case"rejected":throw F.reason;default:switch(typeof F.status=="string"?F.then(P,P):(F.status="pending",F.then(function(ft){F.status==="pending"&&(F.status="fulfilled",F.value=ft)},function(ft){F.status==="pending"&&(F.status="rejected",F.reason=ft)})),F.status){case"fulfilled":return F.value;case"rejected":throw F.reason}}throw F}function O(F,ft,tt,rt,Mt){var Ut=typeof F;(Ut==="undefined"||Ut==="boolean")&&(F=null);var Rt=!1;if(F===null)Rt=!0;else switch(Ut){case"bigint":case"string":case"number":Rt=!0;break;case"object":switch(F.$$typeof){case o:case e:Rt=!0;break;case v:return Rt=F._init,O(Rt(F._payload),ft,tt,rt,Mt)}}if(Rt)return Mt=Mt(F),Rt=rt===""?"."+ut(F,0):rt,V(Mt)?(tt="",Rt!=null&&(tt=Rt.replace(ht,"$&/")+"/"),O(Mt,ft,tt,"",function(I){return I})):Mt!=null&&(nt(Mt)&&(Mt=H(Mt,tt+(Mt.key==null||F&&F.key===Mt.key?"":(""+Mt.key).replace(ht,"$&/")+"/")+Rt)),ft.push(Mt)),1;Rt=0;var Et=rt===""?".":rt+":";if(V(F))for(var qt=0;qt<F.length;qt++)rt=F[qt],Ut=Et+ut(rt,qt),Rt+=O(rt,ft,tt,Ut,Mt);else if(qt=A(F),typeof qt=="function")for(F=qt.call(F),qt=0;!(rt=F.next()).done;)rt=rt.value,Ut=Et+ut(rt,qt++),Rt+=O(rt,ft,tt,Ut,Mt);else if(Ut==="object"){if(typeof F.then=="function")return O(W(F),ft,tt,rt,Mt);throw ft=String(F),Error("Objects are not valid as a React child (found: "+(ft==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":ft)+"). If you meant to render a collection of children, use an array instead.")}return Rt}function Y(F,ft,tt){if(F==null)return F;var rt=[],Mt=0;return O(F,rt,"","",function(Ut){return ft.call(tt,Ut,Mt++)}),rt}function vt(F){if(F._status===-1){var ft=F._result,tt=ft();tt.then(function(rt){(F._status===0||F._status===-1)&&(F._status=1,F._result=rt,tt.status===void 0&&(tt.status="fulfilled",tt.value=rt))},function(rt){(F._status===0||F._status===-1)&&(F._status=2,F._result=rt,tt.status===void 0&&(tt.status="rejected",tt.reason=rt))}),F._status===-1&&(F._status=0,F._result=tt)}if(F._status===1)return F._result.default;throw F._result}var St=typeof reportError=="function"?reportError:function(F){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ft=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof F=="object"&&F!==null&&typeof F.message=="string"?String(F.message):String(F),error:F});if(!window.dispatchEvent(ft))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",F);return}console.error(F)};function Gt(F){var ft=q.T,tt={};tt.types=ft!==null?ft.types:null,q.T=tt;try{var rt=F(),Mt=q.S;Mt!==null&&Mt(tt,rt),typeof rt=="object"&&rt!==null&&typeof rt.then=="function"&&rt.then(P,St)}catch(Ut){St(Ut)}finally{ft!==null&&tt.types!==null&&(ft.types=tt.types),q.T=ft}}function re(F){var ft=q.T;if(ft!==null){var tt=ft.types;tt===null?ft.types=[F]:tt.indexOf(F)===-1&&tt.push(F)}else Gt(re.bind(null,F))}var Re={map:Y,forEach:function(F,ft,tt){Y(F,function(){ft.apply(this,arguments)},tt)},count:function(F){var ft=0;return Y(F,function(){ft++}),ft},toArray:function(F){return Y(F,function(ft){return ft})||[]},only:function(F){if(!nt(F))throw Error("React.Children.only expected to receive a single React element child.");return F}};return le.Activity=p,le.Children=Re,le.Component=B,le.Fragment=i,le.Profiler=l,le.PureComponent=N,le.StrictMode=s,le.Suspense=_,le.ViewTransition=x,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=q,le.__COMPILER_RUNTIME={__proto__:null,c:function(F){return q.H.useMemoCache(F)}},le.addTransitionType=re,le.cache=function(F){return function(){return F.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(F,ft,tt){if(F==null)throw Error("The argument must be a React element, but you passed "+F+".");var rt=y({},F.props),Mt=F.key;if(ft!=null)for(Ut in ft.key!==void 0&&(Mt=""+ft.key),ft)!D.call(ft,Ut)||Ut==="key"||Ut==="__self"||Ut==="__source"||Ut==="ref"&&ft.ref===void 0||(rt[Ut]=ft[Ut]);var Ut=arguments.length-2;if(Ut===1)rt.children=tt;else if(1<Ut){for(var Rt=Array(Ut),Et=0;Et<Ut;Et++)Rt[Et]=arguments[Et+2];rt.children=Rt}return w(F.type,Mt,rt)},le.createContext=function(F){return F={$$typeof:h,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null},F.Provider=F,F.Consumer={$$typeof:f,_context:F},F},le.createElement=function(F,ft,tt){var rt,Mt={},Ut=null;if(ft!=null)for(rt in ft.key!==void 0&&(Ut=""+ft.key),ft)D.call(ft,rt)&&rt!=="key"&&rt!=="__self"&&rt!=="__source"&&(Mt[rt]=ft[rt]);var Rt=arguments.length-2;if(Rt===1)Mt.children=tt;else if(1<Rt){for(var Et=Array(Rt),qt=0;qt<Rt;qt++)Et[qt]=arguments[qt+2];Mt.children=Et}if(F&&F.defaultProps)for(rt in Rt=F.defaultProps,Rt)Mt[rt]===void 0&&(Mt[rt]=Rt[rt]);return w(F,Ut,Mt)},le.createRef=function(){return{current:null}},le.forwardRef=function(F){return{$$typeof:d,render:F}},le.isValidElement=nt,le.lazy=function(F){return{$$typeof:v,_payload:{_status:-1,_result:F},_init:vt}},le.memo=function(F,ft){return{$$typeof:m,type:F,compare:ft===void 0?null:ft}},le.startTransition=Gt,le.unstable_useCacheRefresh=function(){return q.H.useCacheRefresh()},le.use=function(F){return q.H.use(F)},le.useActionState=function(F,ft,tt){return q.H.useActionState(F,ft,tt)},le.useCallback=function(F,ft){return q.H.useCallback(F,ft)},le.useContext=function(F){return q.H.useContext(F)},le.useDebugValue=function(){},le.useDeferredValue=function(F,ft){return q.H.useDeferredValue(F,ft)},le.useEffect=function(F,ft){return q.H.useEffect(F,ft)},le.useEffectEvent=function(F){return q.H.useEffectEvent(F)},le.useId=function(){return q.H.useId()},le.useImperativeHandle=function(F,ft,tt){return q.H.useImperativeHandle(F,ft,tt)},le.useInsertionEffect=function(F,ft){return q.H.useInsertionEffect(F,ft)},le.useLayoutEffect=function(F,ft){return q.H.useLayoutEffect(F,ft)},le.useMemo=function(F,ft){return q.H.useMemo(F,ft)},le.useOptimistic=function(F,ft){return q.H.useOptimistic(F,ft)},le.useReducer=function(F,ft,tt){return q.H.useReducer(F,ft,tt)},le.useRef=function(F){return q.H.useRef(F)},le.useState=function(F){return q.H.useState(F)},le.useSyncExternalStore=function(F,ft,tt){return q.H.useSyncExternalStore(F,ft,tt)},le.useTransition=function(){return q.H.useTransition()},le.version="19.3.1",le}var S0;function Kp(){return S0||(S0=1,md.exports=nE()),md.exports}var ce=Kp();const iE=Fx(ce);var gd={exports:{}},cl={},_d={exports:{}},vd={};var y0;function aE(){return y0||(y0=1,(function(o){function e(W,O){var Y=W.length;W.push(O);t:for(;0<Y;){var vt=Y-1>>>1,St=W[vt];if(0<l(St,O))W[vt]=O,W[Y]=St,Y=vt;else break t}}function i(W){return W.length===0?null:W[0]}function s(W){if(W.length===0)return null;var O=W[0],Y=W.pop();if(Y!==O){W[0]=Y;t:for(var vt=0,St=W.length,Gt=St>>>1;vt<Gt;){var re=2*(vt+1)-1,Re=W[re],F=re+1,ft=W[F];if(0>l(Re,Y))F<St&&0>l(ft,Re)?(W[vt]=ft,W[F]=Y,vt=F):(W[vt]=Re,W[re]=Y,vt=re);else if(F<St&&0>l(ft,Y))W[vt]=ft,W[F]=Y,vt=F;else break t}}return O}function l(W,O){var Y=W.sortIndex-O.sortIndex;return Y!==0?Y:W.id-O.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var _=[],m=[],v=1,p=null,x=3,M=!1,A=!1,C=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function N(W){for(var O=i(m);O!==null;){if(O.callback===null)s(m);else if(O.startTime<=W)s(m),O.sortIndex=O.expirationTime,e(_,O);else break;O=i(m)}}function X(W){if(C=!1,N(W),!A)if(i(_)!==null)A=!0,V||(V=!0,nt());else{var O=i(m);O!==null&&ut(X,O.startTime-W)}}var V=!1,P=-1,q=5,D=-1;function w(){return y?!0:!(o.unstable_now()-D<q)}function H(){if(y=!1,V){var W=o.unstable_now();D=W;var O=!0;try{t:{A=!1,C&&(C=!1,B(P),P=-1),M=!0;var Y=x;try{e:{for(N(W),p=i(_);p!==null&&!(p.expirationTime>W&&w());){var vt=p.callback;if(typeof vt=="function"){p.callback=null,x=p.priorityLevel;var St=vt(p.expirationTime<=W);if(W=o.unstable_now(),typeof St=="function"){p.callback=St,N(W),O=!0;break e}p===i(_)&&s(_),N(W)}else s(_);p=i(_)}if(p!==null)O=!0;else{var Gt=i(m);Gt!==null&&ut(X,Gt.startTime-W),O=!1}}break t}finally{p=null,x=Y,M=!1}O=void 0}}finally{O?nt():V=!1}}}var nt;if(typeof z=="function")nt=function(){z(H)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,ht=ct.port2;ct.port1.onmessage=H,nt=function(){ht.postMessage(null)}}else nt=function(){S(H,0)};function ut(W,O){P=S(function(){W(o.unstable_now())},O)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(W){W.callback=null},o.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<W?Math.floor(1e3/W):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(W){switch(x){case 1:case 2:case 3:var O=3;break;default:O=x}var Y=x;x=O;try{return W()}finally{x=Y}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(W,O){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var Y=x;x=W;try{return O()}finally{x=Y}},o.unstable_scheduleCallback=function(W,O,Y){var vt=o.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?vt+Y:vt):Y=vt,W){case 1:var St=-1;break;case 2:St=250;break;case 5:St=1073741823;break;case 4:St=1e4;break;default:St=5e3}return St=Y+St,W={id:v++,callback:O,priorityLevel:W,startTime:Y,expirationTime:St,sortIndex:-1},Y>vt?(W.sortIndex=Y,e(m,W),i(_)===null&&W===i(m)&&(C?(B(P),P=-1):C=!0,ut(X,Y-vt))):(W.sortIndex=St,e(_,W),A||M||(A=!0,V||(V=!0,nt()))),W},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(W){var O=x;return function(){var Y=x;x=O;try{return W.apply(this,arguments)}finally{x=Y}}}})(vd)),vd}var M0;function sE(){return M0||(M0=1,_d.exports=aE()),_d.exports}var xd={exports:{}},Dn={};var E0;function rE(){if(E0)return Dn;E0=1;var o=Kp();function e(v){var p="https://react.dev/errors/"+v;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+v+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(v,p,x){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:M==null?null:M===h?h:""+M,children:v,containerInfo:p,implementation:x}}var _=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(v,p){if(v==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Dn.browser=function(v){return{$$typeof:f,_reason:v}},Dn.createPortal=function(v,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return d(v,p,null,x)},Dn.flushSync=function(v){var p=_.T,x=s.p;try{if(_.T=null,s.p=2,v)return v()}finally{_.T=p,s.p=x,s.d.f()}},Dn.preconnect=function(v,p){typeof v=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(v,p))},Dn.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},Dn.preinit=function(v,p){if(typeof v=="string"&&p&&typeof p.as=="string"){var x=p.as,M=m(x,p.crossOrigin),A=typeof p.integrity=="string"?p.integrity:void 0,C=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?s.d.S(v,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:M,integrity:A,fetchPriority:C}):x==="script"&&s.d.X(v,{crossOrigin:M,integrity:A,fetchPriority:C,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dn.preinitModule=function(v,p){if(typeof v=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=m(p.as,p.crossOrigin);s.d.M(v,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0})}}else p==null&&s.d.M(v)},Dn.preload=function(v,p){if(typeof v=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,M=m(x,p.crossOrigin);s.d.L(v,x,{crossOrigin:M,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dn.preloadModule=function(v,p){if(typeof v=="string")if(p){var x=m(p.as,p.crossOrigin);s.d.m(v,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0})}else s.d.m(v)},Dn.requestFormReset=function(v){s.d.r(v)},Dn.unstable_batchedUpdates=function(v,p){return v(p)},Dn.useFormState=function(v,p,x){return _.H.useFormState(v,p,x)},Dn.useFormStatus=function(){return _.H.useHostTransitionStatus()},Dn.version="19.3.1",Dn}var T0;function oE(){if(T0)return xd.exports;T0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),xd.exports=rE(),xd.exports}var b0;function lE(){if(b0)return cl;b0=1;var o=sE(),e=Kp(),i=oE();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function _(t){if(f(t)!==t)throw Error(s(188))}function m(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var u=a.return;if(u===null)break;var c=u.alternate;if(c===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===c.child){for(c=u.child;c;){if(c===a)return _(u),t;if(c===r)return _(u),n;c=c.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=c;else{for(var g=!1,E=u.child;E;){if(E===a){g=!0,a=u,r=c;break}if(E===r){g=!0,r=u,a=c;break}E=E.sibling}if(!g){for(E=c.child;E;){if(E===a){g=!0,a=c,r=u;break}if(E===r){g=!0,r=c,a=u;break}E=E.sibling}if(!g)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}function p(t,n,a,r,u,c){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,r,u,c)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&p(t.child,n,a,r,u,c))return!0;t=t.sibling}return!1}function x(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function M(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function A(t){var n=[null,null],a=x(t);return a===null||C(n,t,a.child,{foundSelf:!1}),n}function C(t,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&C(t,n,a.child,r))return!0;a=a.sibling}return!1}function y(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var S=null,B=null;function z(t,n,a){return t===a?!0:t===n?(S=t,!0):!1}function N(t,n,a){return t===a?(B=t,!1):t===n?(B!==null&&(S=t),!0):!1}function X(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function V(t,n,a){for(var r=0,u=t;u;u=a(u))r++;u=0;for(var c=n;c;c=a(c))u++;for(;0<r-u;)t=a(t),r--;for(;0<u-r;)n=a(n),u--;for(;r--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var P=Object.assign,q=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),nt=Symbol.for("react.strict_mode"),ct=Symbol.for("react.profiler"),ht=Symbol.for("react.consumer"),ut=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),vt=Symbol.for("react.memo"),St=Symbol.for("react.lazy"),Gt=Symbol.for("react.activity"),re=Symbol.for("react.legacy_hidden"),Re=Symbol.for("react.memo_cache_sentinel"),F=Symbol.for("react.view_transition"),ft=Symbol.for("react.recoverable"),tt=Symbol.iterator;function rt(t){return t===null||typeof t!="object"?null:(t=tt&&t[tt]||t["@@iterator"],typeof t=="function"?t:null)}var Mt=Symbol.for("react.client.reference");function Ut(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Mt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case H:return"Fragment";case ct:return"Profiler";case nt:return"StrictMode";case O:return"Suspense";case Y:return"SuspenseList";case Gt:return"Activity";case F:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case w:return"Portal";case ut:return t.displayName||"Context";case ht:return(t._context.displayName||"Context")+".Consumer";case W:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case vt:return n=t.displayName||null,n!==null?n:Ut(t.type)||"Memo";case St:n=t._payload,t=t._init;try{return Ut(t(n))}catch{}}return null}var Rt=Array.isArray,Et=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,qt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},Ge=[],se=-1;function Qt(t){return{current:t}}function Lt(t){0>se||(t.current=Ge[se],Ge[se]=null,se--)}function ie(t,n){se++,Ge[se]=t.current,t.current=n}var Ft=Qt(null),oe=Qt(null),qe=Qt(null),Ze=Qt(null);function U(t,n){switch(ie(qe,n),ie(oe,t),ie(Ft,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Av(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Av(n),t=Rv(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Lt(Ft),ie(Ft,t)}function T(){Lt(Ft),Lt(oe),Lt(qe)}function it(t){var n=t.memoizedState;n!==null&&(Ir._currentValue=n.memoizedState,ie(Ze,t)),n=Ft.current;var a=Rv(n,t.type);n!==a&&(ie(oe,t),ie(Ft,a))}function mt(t){oe.current===t&&(Lt(Ft),Lt(oe)),Ze.current===t&&(Lt(Ze),Ir._currentValue=I)}var xt,dt;function kt(t){if(xt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);xt=n&&n[1]||"",dt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+xt+t+dt}var Ct=!1;function Wt(t,n){if(!t||Ct)return"";Ct=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(Nt){var j=Nt}Reflect.construct(t,[],gt)}else{try{gt.call()}catch(Nt){j=Nt}gt=!1;try{var et=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),gt=!0,new t}finally{gt&&(et!==void 0?Object.defineProperty(t.prototype,"props",et):delete t.prototype.props)}}}else{try{throw Error()}catch(Nt){j=Nt}(gt=t())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(Nt){if(Nt&&j&&typeof Nt.stack=="string")return[Nt.stack,j.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),g=c[0],E=c[1];if(g&&E){var L=g.split(`
`),K=E.split(`
`);for(u=r=0;r<L.length&&!L[r].includes("DetermineComponentFrameRoot");)r++;for(;u<K.length&&!K[u].includes("DetermineComponentFrameRoot");)u++;if(r===L.length||u===K.length)for(r=L.length-1,u=K.length-1;1<=r&&0<=u&&L[r]!==K[u];)u--;for(;1<=r&&0<=u;r--,u--)if(L[r]!==K[u]){if(r!==1||u!==1)do if(r--,u--,0>u||L[r]!==K[u]){var st=`
`+L[r].replace(" at new "," at ");return t.displayName&&st.includes("<anonymous>")&&(st=st.replace("<anonymous>",t.displayName)),st}while(1<=r&&0<=u);break}}}finally{Ct=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?kt(a):""}function Kt(t,n){switch(t.tag){case 26:case 27:case 5:return kt(t.type);case 16:return kt("Lazy");case 13:return t.child!==n&&n!==null?kt("Suspense Fallback"):kt("Suspense");case 19:return kt("SuspenseList");case 0:case 15:return Wt(t.type,!1);case 11:return Wt(t.type.render,!1);case 1:return Wt(t.type,!0);case 31:return kt("Activity");case 30:return kt("ViewTransition");default:return""}}function bt(t){try{var n="",a=null;do n+=Kt(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Ot=Object.prototype.hasOwnProperty,ne=o.unstable_scheduleCallback,Zt=o.unstable_cancelCallback,Pt=o.unstable_shouldYield,fe=o.unstable_requestPaint,k=o.unstable_now,At=o.unstable_getCurrentPriorityLevel,Dt=o.unstable_ImmediatePriority,Vt=o.unstable_UserBlockingPriority,yt=o.unstable_NormalPriority,_t=o.unstable_LowPriority,Yt=o.unstable_IdlePriority,ue=o.log,Ve=o.unstable_setDisableYieldValue,Ee=null,en=null;function mn(t){if(typeof ue=="function"&&Ve(t),en&&typeof en.setStrictMode=="function")try{en.setStrictMode(Ee,t)}catch{}}var Nn=Math.clz32?Math.clz32:Nl,na=Math.log,xo=Math.LN2;function Nl(t){return t>>>=0,t===0?32:31-(na(t)/xo|0)|0}var ds=256,ia=262144,ps=4194304;function ci(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ms(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var u=0,c=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var E=r&134217727;return E!==0?(r=E&~c,r!==0?u=ci(r):(g&=E,g!==0?u=ci(g):a||(a=E&~t,a!==0&&(u=ci(a))))):(E=r&~c,E!==0?u=ci(E):g!==0?u=ci(g):a||(a=r&~t,a!==0&&(u=ci(a)))),u===0?0:n!==0&&n!==u&&(n&c)===0&&(c=u&-u,a=n&-n,c>=a||c===32&&(a&4194048)!==0)?n:u}function Ra(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ul(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var r=31-Nn(a),u=1<<r;n|=t[r],a&=~u}return n}function Gc(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ll(){var t=ps;return ps<<=1,(ps&62914560)===0&&(ps=4194304),t}function So(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function gs(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Vc(t,n,a,r,u,c){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,L=t.expirationTimes,K=t.hiddenUpdates;for(a=g&~a;0<a;){var st=31-Nn(a),gt=1<<st;E[st]=0,L[st]=-1;var j=K[st];if(j!==null)for(K[st]=null,st=0;st<j.length;st++){var et=j[st];et!==null&&(et.lane&=-536870913)}a&=~gt}r!==0&&R(t,r,0),c!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=c&~(g&~n))}function R(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Nn(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function Q(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-Nn(a),u=1<<r;u&n|t[r]&n&&(t[r]|=n),a&=~u}}function ot(t,n){var a=n&-n;return a=(a&42)!==0?1:lt(a),(a&(t.suspendedLanes|n))!==0?0:a}function lt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function J(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Tt(){var t=qt.p;return t!==0?t:(t=window.event,t===void 0?32:c0(t.type))}function zt(t,n){var a=qt.p;try{return qt.p=t,n()}finally{qt.p=a}}var Bt=Math.random().toString(36).slice(2),wt="__reactFiber$"+Bt,Xt="__reactProps$"+Bt,ee="__reactContainer$"+Bt,$t="__reactEvents$"+Bt,ve="__reactListeners$"+Bt,ze="__reactHandles$"+Bt,$e="__reactResources$"+Bt,Le="__reactMarker$"+Bt,we="__reactLoad$"+Bt;function te(t){delete t[wt],delete t[Xt],delete t[ve],delete t[ze]}function Oe(t){var n;if(n=t[wt])return n;for(var a=t.parentNode;a;){if(n=a[ee]||a[wt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Xv(t);t!==null;){if(a=t[wt])return a;t=Xv(t)}return n}t=a,a=t.parentNode}return null}function ge(t){if(t=t[wt]||t[ee]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function gn(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Jn(t){var n=t[$e];return n||(n=t[$e]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function De(t){t[Le]=!0}function Ca(t){t[we]=void 0}var Ke=new Set,Bn={};function un(t,n){an(t,n),an(t+"Capture",n)}function an(t,n){for(Bn[t]=n,t=0;t<n.length;t++)Ke.add(n[t])}var Un=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),tr={},Bi={};function xS(t){return Ot.call(Bi,t)?!0:Ot.call(tr,t)?!1:Un.test(t)?Bi[t]=!0:(tr[t]=!0,!1)}var Ne=!1;function hm(){var t=Ne;return Ne=!1,t}function Ol(t,n,a){if(xS(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function Pl(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function aa(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,r)}}function $n(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function dm(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function SS(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,c=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(g){a=""+g,c.call(this,g)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function kc(t){if(!t._valueTracker){var n=dm(t)?"checked":"value";t._valueTracker=SS(t,n,""+t[n])}}function pm(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=dm(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}var yS=/[\n"\\]/g;function fi(t){return t.replace(yS,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Xc(t,n,a,r,u,c,g,E){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+$n(n)):t.value!==""+$n(n)&&(t.value=""+$n(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?g==="number"&&t.value==n?jc(t,$n(t.value)):jc(t,$n(n)):a!=null?jc(t,$n(a)):r!=null&&t.removeAttribute("value"),u==null&&c!=null&&(t.defaultChecked=!!c),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+$n(E):t.removeAttribute("name")}function mm(t,n,a,r,u,c,g,E){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),n!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){kc(t);return}a=a!=null?""+$n(a):"",n=n!=null?""+$n(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=E?t.checked:!!r,t.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),kc(t)}function jc(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function er(t,n,a,r){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&r&&(t[a].defaultSelected=!0)}else{for(a=""+$n(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,r&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function gm(t,n,a){if(n!=null&&(n=""+$n(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+$n(a):""}function _m(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(Rt(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=$n(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),kc(t)}function nr(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var MS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function vm(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||MS.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function xm(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",Ne=!0);for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&(vm(t,u,r),Ne=!0)}else for(var c in n)n.hasOwnProperty(c)&&vm(t,c,n[c])}function qc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ES=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),TS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function zl(t){return TS.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Fi(){}var Yc=null;function Wc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ir=null,ar=null;function Sm(t){var n=ge(t);if(n&&(t=n.stateNode)){var a=t[Xt]||null;t:switch(t=n.stateNode,n.type){case"input":if(Xc(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+fi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var u=r[Xt]||null;if(!u)throw Error(s(90));Xc(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&pm(r)}break t;case"textarea":gm(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&er(t,!!a.multiple,n,!1)}}}var Zc=!1;function ym(t,n,a){if(Zc)return t(n,a);Zc=!0;try{var r=t(n);return r}finally{if(Zc=!1,(ir!==null||ar!==null)&&(zu(),ir&&(n=ir,t=ar,ar=ir=null,Sm(n),t)))for(n=0;n<t.length;n++)Sm(t[n])}}function yo(t,n){var a=t.stateNode;if(a===null)return null;var r=a[Xt]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var sa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kc=!1;if(sa)try{var Mo={};Object.defineProperty(Mo,"passive",{get:function(){Kc=!0}}),window.addEventListener("test",Mo,Mo),window.removeEventListener("test",Mo,Mo)}catch{Kc=!1}var wa=null,Qc=null,Il=null;function Mm(){if(Il)return Il;var t,n=Qc,a=n.length,r,u="value"in wa?wa.value:wa.textContent,c=u.length;for(t=0;t<a&&n[t]===u[t];t++);var g=a-t;for(r=1;r<=g&&n[a-r]===u[c-r];r++);return Il=u.slice(t,1<r?1-r:void 0)}function Bl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Fl(){return!0}function Em(){return!1}function Fn(t){function n(a,r,u,c,g){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=c,this.target=g,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(c):c[E]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Fl:Em,this.isPropagationStopped=Em,this}return P(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Fl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Fl)},persist:function(){},isPersistent:Fl}),n}var Da={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hl=Fn(Da),Eo=P({},Da,{view:0,detail:0}),bS=Fn(Eo),Jc,$c,To,Gl=P({},Eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ef,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==To&&(To&&t.type==="mousemove"?(Jc=t.screenX-To.screenX,$c=t.screenY-To.screenY):$c=Jc=0,To=t),Jc)},movementY:function(t){return"movementY"in t?t.movementY:$c}}),Tm=Fn(Gl),AS=P({},Gl,{dataTransfer:0}),RS=Fn(AS),CS=P({},Eo,{relatedTarget:0}),tf=Fn(CS),wS=P({},Da,{animationName:0,elapsedTime:0,pseudoElement:0}),DS=Fn(wS),NS=P({},Da,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),US=Fn(NS),LS=P({},Da,{data:0}),bm=Fn(LS),OS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},PS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function IS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=zS[t])?!!n[t]:!1}function ef(){return IS}var BS=P({},Eo,{key:function(t){if(t.key){var n=OS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Bl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?PS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ef,charCode:function(t){return t.type==="keypress"?Bl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Bl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),FS=Fn(BS),HS=P({},Gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Am=Fn(HS),GS=P({},Da,{submitter:0}),VS=Fn(GS),kS=P({},Eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ef}),XS=Fn(kS),jS=P({},Da,{propertyName:0,elapsedTime:0,pseudoElement:0}),qS=Fn(jS),YS=P({},Gl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),WS=Fn(YS),ZS=P({},Da,{newState:0,oldState:0,source:0}),KS=Fn(ZS),QS=[9,13,27,32],nf=sa&&"CompositionEvent"in window,bo=null;sa&&"documentMode"in document&&(bo=document.documentMode);var JS=sa&&"TextEvent"in window&&!bo,Rm=sa&&(!nf||bo&&8<bo&&11>=bo),Cm=" ",wm=!1;function Dm(t,n){switch(t){case"keyup":return QS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var sr=!1;function $S(t,n){switch(t){case"compositionend":return Nm(n);case"keypress":return n.which!==32?null:(wm=!0,Cm);case"textInput":return t=n.data,t===Cm&&wm?null:t;default:return null}}function ty(t,n){if(sr)return t==="compositionend"||!nf&&Dm(t,n)?(t=Mm(),Il=Qc=wa=null,sr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Rm&&n.locale!=="ko"?null:n.data;default:return null}}var ey={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Um(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!ey[t.type]:n==="textarea"}function Lm(t,n,a,r){ir?ar?ar.push(r):ar=[r]:ir=r,n=Vu(n,"onChange"),0<n.length&&(a=new Hl("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var Ao=null,Ro=null;function ny(t){Sv(t,0)}function Vl(t){var n=gn(t);if(pm(n))return t}function Om(t,n){if(t==="change")return n}var Pm=!1;if(sa){var af;if(sa){var sf="oninput"in document;if(!sf){var zm=document.createElement("div");zm.setAttribute("oninput","return;"),sf=typeof zm.oninput=="function"}af=sf}else af=!1;Pm=af&&(!document.documentMode||9<document.documentMode)}function Im(){Ao&&(Ao.detachEvent("onpropertychange",Bm),Ro=Ao=null)}function Bm(t){if(t.propertyName==="value"&&Vl(Ro)){var n=[];Lm(n,Ro,t,Wc(t)),ym(ny,n)}}function iy(t,n,a){t==="focusin"?(Im(),Ao=n,Ro=a,Ao.attachEvent("onpropertychange",Bm)):t==="focusout"&&Im()}function ay(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vl(Ro)}function sy(t,n){if(t==="click")return Vl(n)}function ry(t,n){if(t==="input"||t==="change")return Vl(n)}function oy(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ti=typeof Object.is=="function"?Object.is:oy;function Co(t,n){if(ti(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!Ot.call(n,u)||!ti(t[u],n[u]))return!1}return!0}function rf(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Fm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Hm(t,n){var a=Fm(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Fm(a)}}function Gm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Gm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Vm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=rf(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=rf(t.document)}return n}function of(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var ly=sa&&"documentMode"in document&&11>=document.documentMode,rr=null,lf=null,wo=null,uf=!1;function km(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;uf||rr==null||rr!==rf(r)||(r=rr,"selectionStart"in r&&of(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wo&&Co(wo,r)||(wo=r,r=Vu(lf,"onSelect"),0<r.length&&(n=new Hl("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=rr)))}function _s(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var or={animationend:_s("Animation","AnimationEnd"),animationiteration:_s("Animation","AnimationIteration"),animationstart:_s("Animation","AnimationStart"),transitionrun:_s("Transition","TransitionRun"),transitionstart:_s("Transition","TransitionStart"),transitioncancel:_s("Transition","TransitionCancel"),transitionend:_s("Transition","TransitionEnd")},cf={},Xm={};sa&&(Xm=document.createElement("div").style,"AnimationEvent"in window||(delete or.animationend.animation,delete or.animationiteration.animation,delete or.animationstart.animation),"TransitionEvent"in window||delete or.transitionend.transition);function vs(t){if(cf[t])return cf[t];if(!or[t])return t;var n=or[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Xm)return cf[t]=n[a];return t}var jm=vs("animationend"),qm=vs("animationiteration"),Ym=vs("animationstart"),uy=vs("transitionrun"),cy=vs("transitionstart"),fy=vs("transitioncancel"),Wm=vs("transitionend"),Zm=new Map,ff="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ff.push("scrollEnd");function bi(t,n){Zm.set(t,n),un(n,[t])}var hy=0;function ra(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=wi.identifierPrefix;var a=hy++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function Km(t){if(t==null||typeof t=="string")return t;var n=null,a=Rr;if(a!==null)for(var r=0;r<a.length;r++){var u=t[a[r]];if(u!=null){if(u==="none")return"none";n=n==null?u:n+(" "+u)}}return n??t.default}function oa(t,n){return t=Km(t),n=Km(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var kl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},hi=[],lr=0,hf=0;function Xl(){for(var t=lr,n=hf=lr=0;n<t;){var a=hi[n];hi[n++]=null;var r=hi[n];hi[n++]=null;var u=hi[n];hi[n++]=null;var c=hi[n];if(hi[n++]=null,r!==null&&u!==null){var g=r.pending;g===null?u.next=u:(u.next=g.next,g.next=u),r.pending=u}c!==0&&Qm(a,u,c)}}function jl(t,n,a,r){hi[lr++]=t,hi[lr++]=n,hi[lr++]=a,hi[lr++]=r,hf|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function df(t,n,a,r){return jl(t,n,a,r),ql(t)}function xs(t,n){return jl(t,null,null,n),ql(t)}function Qm(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var u=!1,c=t.return;c!==null;)c.childLanes|=a,r=c.alternate,r!==null&&(r.childLanes|=a),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(u=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,u&&n!==null&&(u=31-Nn(a),t=c.hiddenUpdates,r=t[u],r===null?t[u]=[n]:r.push(n),n.lane=a|536870912),c):null}function ql(t){if(50<Qo)throw Qo=0,Pu=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ur={};function dy(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,n,a,r){return new dy(t,n,a,r)}function pf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function la(t,n){var a=t.alternate;return a===null?(a=jn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Jm(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Yl(t,n,a,r,u,c){var g=0;if(r=t,typeof r=="function")pf(r)&&(g=1);else if(typeof r=="string")g=GM(t,a,Ft.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(r){case Gt:return t=jn(31,a,n,u),t.elementType=Gt,t.lanes=c,t;case H:return Ss(a.children,u,c,n);case nt:g=8,u|=24;break;case ct:return t=jn(12,a,n,u|2),t.elementType=ct,t.lanes=c,t;case O:return t=jn(13,a,n,u),t.elementType=O,t.lanes=c,t;case Y:return t=jn(19,a,n,u),t.elementType=Y,t.lanes=c,t;case re:case F:return t=u|32,t=jn(30,a,n,t),t.elementType=F,t.lanes=c,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case ut:g=10;break t;case ht:g=9;break t;case W:g=11;break t;case vt:g=14;break t;case St:g=16,r=null;break t}g=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=jn(g,a,n,u),n.elementType=t,n.type=r,n.lanes=c,n}function Ss(t,n,a,r){return t=jn(7,t,r,n),t.lanes=a,t}function mf(t,n,a){return t=jn(6,t,null,n),t.lanes=a,t}function $m(t){var n=jn(18,null,null,0);return n.stateNode=t,n}function gf(t,n,a){return n=jn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var tg=new WeakMap;function di(t,n){if(typeof t=="object"&&t!==null){var a=tg.get(t);return a!==void 0?a:(n={value:t,source:n,stack:bt(n)},tg.set(t,n),n)}return{value:t,source:n,stack:bt(n)}}var cr=[],fr=0,Wl=null,Do=0,pi=[],mi=0,Na=null,Hi=1,Gi="";function ua(t,n){cr[fr++]=Do,cr[fr++]=Wl,Wl=t,Do=n}function eg(t,n,a){pi[mi++]=Hi,pi[mi++]=Gi,pi[mi++]=Na,Na=t;var r=Hi;t=Gi;var u=32-Nn(r)-1;r&=~(1<<u),a+=1;var c=32-Nn(n)+u;if(30<c){var g=u-u%5;c=(r&(1<<g)-1).toString(32),r>>=g,u-=g,Hi=1<<32-Nn(n)+u|a<<u|r,Gi=c+t}else Hi=1<<c|a<<u|r,Gi=t}function Zl(t){t.return!==null&&(ua(t,1),eg(t,1,0))}function _f(t){for(;t===Wl;)Wl=cr[--fr],cr[fr]=null,Do=cr[--fr],cr[fr]=null;for(;t===Na;)Na=pi[--mi],pi[mi]=null,Gi=pi[--mi],pi[mi]=null,Hi=pi[--mi],pi[mi]=null}function ng(t,n){pi[mi++]=Hi,pi[mi++]=Gi,pi[mi++]=Na,Hi=n.id,Gi=n.overflow,Na=t}var yn=null,Qe=null,_e=!1,Ua=null,gi=!1,vf=Error(s(519));function La(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw No(di(n,t)),vf}function ig(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[wt]=t,n[Xt]=r,a){case"dialog":ye("cancel",n),ye("close",n);break;case"iframe":case"object":case"embed":ye("load",n);break;case"video":case"audio":for(a=0;a<$o.length;a++)ye($o[a],n);break;case"source":ye("error",n);break;case"img":case"image":case"link":ye("error",n),ye("load",n);break;case"details":ye("toggle",n);break;case"input":ye("invalid",n),mm(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":ye("invalid",n);break;case"textarea":ye("invalid",n),_m(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||Tv(n.textContent,a)?(r.popover!=null&&(ye("beforetoggle",n),ye("toggle",n)),r.onScroll!=null&&ye("scroll",n),r.onScrollEnd!=null&&ye("scrollend",n),r.onClick!=null&&(n.onclick=Fi),n=!0):n=!1,n||La(t,!0)}function Kl(t){for(yn=t.return;yn;)switch(yn.tag){case 5:case 31:case 13:gi=!1;return;case 27:case 3:gi=!0;return;default:yn=yn.return}}function hr(t){if(t!==yn)return!1;if(!_e)return Kl(t),_e=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Wh(t.type,t.memoizedProps)),a=!a),a&&Qe&&La(t),Kl(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Qe=kv(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Qe=kv(t)}else n===27?(n=Qe,Za(t.type)?(t=id,id=null,Qe=t):Qe=n):Qe=yn?vi(t.stateNode.nextSibling):null;return!0}function ys(){Qe=yn=null,_e=!1}function xf(){var t=Ua;return t!==null&&(Wn===null?Wn=t:Wn.push.apply(Wn,t),Ua=null),t}function No(t){Ua===null?Ua=[t]:Ua.push(t)}var Sf=Qt(null),Ms=null,ca=null;function Oa(t,n,a){ie(Sf,n._currentValue),n._currentValue=a}function fa(t){t._currentValue=Sf.current,Lt(Sf)}function Ql(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function yf(t,n,a,r){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var c=u.dependencies;if(c!==null){var g=u.child;c=c.firstContext;t:for(;c!==null;){var E=c;c=u;for(var L=0;L<n.length;L++)if(E.context===n[L]){c.lanes|=a,E=c.alternate,E!==null&&(E.lanes|=a),Ql(c.return,a,t),r||(g=null);break t}c=E.next}}else if(u.tag===18){if(g=u.return,g===null)throw Error(s(341));g.lanes|=a,c=g.alternate,c!==null&&(c.lanes|=a),Ql(g,a,t),g=null}else u.tag===13&&u.memoizedState!==null&&u.memoizedState.dehydrated===null?(u.lanes|=a,g=u.alternate,g!==null&&(g.lanes|=a),Ql(u.return,a,t),g=u.child,g=g!==null?g.sibling:null):g=u.child;if(g!==null)g.return=u;else for(g=u;g!==null;){if(g===t){g=null;break}if(u=g.sibling,u!==null){u.return=g.return,g=u;break}g=g.return}u=g}}function Es(t,n,a,r){t=null;for(var u=n,c=!1;u!==null;){if(!c){if((u.flags&524288)!==0)c=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var g=u.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var E=u.type;ti(u.pendingProps.value,g.value)||(t!==null?t.push(E):t=[E])}}else if(u===Ze.current){if(g=u.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Ir):t=[Ir])}u=u.return}return t!==null&&yf(n,t,a,r),n.flags|=262144,t!==null}function Jl(t){for(t=t.firstContext;t!==null;){if(!ti(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ts(t){Ms=t,ca=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function bn(t){return ag(Ms,t)}function $l(t,n){return Ms===null&&Ts(t),ag(t,n)}function ag(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ca===null){if(t===null)throw Error(s(308));ca=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ca=ca.next=n;return a}var py=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},my=o.unstable_scheduleCallback,gy=o.unstable_NormalPriority,cn={$$typeof:ut,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mf(){return{controller:new py,data:new Map,refCount:0}}function Uo(t){t.refCount--,t.refCount===0&&my(gy,function(){t.controller.abort()})}function sg(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var r=n[t];a.indexOf(r)===-1&&a.push(r)}}}var Lo=null;function _y(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Oo=null,Ef=0,bs=0,dr=null;function vy(t,n){if(Oo===null){var a=Oo=[];Ef=0,bs=Fh(),dr={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Ef++,n.then(rg,rg),n}function rg(){if(--Ef===0&&(Lo=null,Oo!==null)){dr!==null&&(dr.status="fulfilled");var t=Oo;Oo=null,bs=0,dr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function xy(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var og=Et.S;Et.S=function(t,n){if($_=k(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&vy(t,n),Lo!==null)for(var a=Nr;a!==null;)sg(a,Lo),a=a.next;if(a=t.types,a!==null){for(var r=Nr;r!==null;)sg(r,a),r=r.next;if(bs!==0){r=Lo,r===null&&(r=Lo=[]);for(var u=0;u<a.length;u++){var c=a[u];r.indexOf(c)===-1&&r.push(c)}}}og!==null&&og(t,n)};var As=Qt(null);function Tf(){var t=As.current;return t!==null?t:Ye.pooledCache}function tu(t,n){n===null?ie(As,As.current):ie(As,n.pool)}function lg(){var t=Tf();return t===null?null:{parent:cn._currentValue,pool:t}}var pr=Error(s(460)),bf=Error(s(474)),eu=Error(s(542)),nu={then:function(){}};function ug(t){return t=t.status,t==="fulfilled"||t==="rejected"}function cg(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Fi,Fi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,hg(t),t===void 0&&!("reason"in n)?Error(s(600)):t;default:if(typeof n.status=="string")n.then(Fi,Fi);else{if(t=Ye,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,hg(t),t}throw Cs=n,pr}}function Rs(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Cs=a,pr):a}}var Cs=null;function fg(){if(Cs===null)throw Error(s(459));var t=Cs;return Cs=null,t}function hg(t){if(t===pr||t===eu)throw Error(s(483))}var mr=null,Po=0;function iu(t){var n=Po;return Po+=1,mr===null&&(mr=[]),cg(mr,t,n)}function Pa(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function au(t,n){throw n.$$typeof===q?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function dg(t){function n(Z,G){if(t){var $=Z.deletions;$===null?(Z.deletions=[G],Z.flags|=16):$.push(G)}}function a(Z,G){if(!t)return null;for(;G!==null;)n(Z,G),G=G.sibling;return null}function r(Z){for(var G=new Map;Z!==null;)Z.key===null?G.set(Z.index,Z):G.set(Z.key,Z),Z=Z.sibling;return G}function u(Z,G){return Z=la(Z,G),Z.index=0,Z.sibling=null,Z}function c(Z,G,$){return Z.index=$,t?($=Z.alternate,$!==null?($=$.index,$<G?(Z.flags|=2,G):$):(Z.flags|=134217730,G)):(Z.flags|=1048576,G)}function g(Z){return t&&Z.alternate===null&&(Z.flags|=134217730),Z}function E(Z,G,$,pt){return G===null||G.tag!==6?(G=mf($,Z.mode,pt),G.return=Z,G):(G=u(G,$),G.return=Z,G)}function L(Z,G,$,pt){var Ht=$.type;return Ht===H?(Z=st(Z,G,$.props.children,pt,$.key),Pa(Z,$),Z):G!==null&&(G.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===St&&Rs(Ht)===G.type)?(G=u(G,$.props),Pa(G,$),G.return=Z,G):(G=Yl($.type,$.key,$.props,null,Z.mode,pt),Pa(G,$),G.return=Z,G)}function K(Z,G,$,pt){return G===null||G.tag!==4||G.stateNode.containerInfo!==$.containerInfo||G.stateNode.implementation!==$.implementation?(G=gf($,Z.mode,pt),G.return=Z,G):(G=u(G,$.children||[]),G.return=Z,G)}function st(Z,G,$,pt,Ht){return G===null||G.tag!==7?(G=Ss($,Z.mode,pt,Ht),G.return=Z,G):(G=u(G,$),G.return=Z,G)}function gt(Z,G,$){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=mf(""+G,Z.mode,$),G.return=Z,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case D:return $=Yl(G.type,G.key,G.props,null,Z.mode,$),Pa($,G),$.return=Z,$;case w:return G=gf(G,Z.mode,$),G.return=Z,G;case St:return G=Rs(G),gt(Z,G,$)}if(Rt(G)||rt(G))return G=Ss(G,Z.mode,$,null),G.return=Z,G;if(typeof G.then=="function")return gt(Z,iu(G),$);if(G.$$typeof===ut)return gt(Z,$l(Z,G),$);au(Z,G)}return null}function j(Z,G,$,pt){var Ht=G!==null?G.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Ht!==null?null:E(Z,G,""+$,pt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case D:return $.key===Ht?L(Z,G,$,pt):null;case w:return $.key===Ht?K(Z,G,$,pt):null;case St:return $=Rs($),j(Z,G,$,pt)}if(Rt($)||rt($))return Ht!==null?null:st(Z,G,$,pt,null);if(typeof $.then=="function")return j(Z,G,iu($),pt);if($.$$typeof===ut)return j(Z,G,$l(Z,$),pt);au(Z,$)}return null}function et(Z,G,$,pt,Ht){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return Z=Z.get($)||null,E(G,Z,""+pt,Ht);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case D:return Z=Z.get(pt.key===null?$:pt.key)||null,L(G,Z,pt,Ht);case w:return Z=Z.get(pt.key===null?$:pt.key)||null,K(G,Z,pt,Ht);case St:return pt=Rs(pt),et(Z,G,$,pt,Ht)}if(Rt(pt)||rt(pt))return Z=Z.get($)||null,st(G,Z,pt,Ht,null);if(typeof pt.then=="function")return et(Z,G,$,iu(pt),Ht);if(pt.$$typeof===ut)return et(Z,G,$,$l(G,pt),Ht);au(G,pt)}return null}function Nt(Z,G,$,pt){for(var Ht=null,be=null,Jt=G,ae=G=0,dn=null;Jt!==null&&ae<$.length;ae++){Jt.index>ae?(dn=Jt,Jt=null):dn=Jt.sibling;var Ce=j(Z,Jt,$[ae],pt);if(Ce===null){Jt===null&&(Jt=dn);break}t&&Jt&&Ce.alternate===null&&n(Z,Jt),G=c(Ce,G,ae),be===null?Ht=Ce:be.sibling=Ce,be=Ce,Jt=dn}if(ae===$.length)return a(Z,Jt),_e&&ua(Z,ae),Ht;if(Jt===null){for(;ae<$.length;ae++)Jt=gt(Z,$[ae],pt),Jt!==null&&(G=c(Jt,G,ae),be===null?Ht=Jt:be.sibling=Jt,be=Jt);return _e&&ua(Z,ae),Ht}for(Jt=r(Jt);ae<$.length;ae++)dn=et(Jt,Z,ae,$[ae],pt),dn!==null&&(t&&(Ce=dn.alternate,Ce!==null&&Jt.delete(Ce.key===null?ae:Ce.key)),G=c(dn,G,ae),be===null?Ht=dn:be.sibling=dn,be=dn);return t&&Jt.forEach(function(ts){return n(Z,ts)}),_e&&ua(Z,ae),Ht}function jt(Z,G,$,pt){if($==null)throw Error(s(151));for(var Ht=null,be=null,Jt=G,ae=G=0,dn=null,Ce=$.next();Jt!==null&&!Ce.done;ae++,Ce=$.next()){Jt.index>ae?(dn=Jt,Jt=null):dn=Jt.sibling;var ts=j(Z,Jt,Ce.value,pt);if(ts===null){Jt===null&&(Jt=dn);break}t&&Jt&&ts.alternate===null&&n(Z,Jt),G=c(ts,G,ae),be===null?Ht=ts:be.sibling=ts,be=ts,Jt=dn}if(Ce.done)return a(Z,Jt),_e&&ua(Z,ae),Ht;if(Jt===null){for(;!Ce.done;ae++,Ce=$.next())Ce=gt(Z,Ce.value,pt),Ce!==null&&(G=c(Ce,G,ae),be===null?Ht=Ce:be.sibling=Ce,be=Ce);return _e&&ua(Z,ae),Ht}for(Jt=r(Jt);!Ce.done;ae++,Ce=$.next())Ce=et(Jt,Z,ae,Ce.value,pt),Ce!==null&&(t&&(dn=Ce.alternate,dn!==null&&Jt.delete(dn.key===null?ae:dn.key)),G=c(Ce,G,ae),be===null?Ht=Ce:be.sibling=Ce,be=Ce);return t&&Jt.forEach(function($M){return n(Z,$M)}),_e&&ua(Z,ae),Ht}function de(Z,G,$,pt){if(typeof $=="object"&&$!==null&&$.type===H&&$.key===null&&$.props.ref===void 0&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case D:t:{for(var Ht=$.key;G!==null;){if(G.key===Ht){if(Ht=$.type,Ht===H){if(G.tag===7){a(Z,G.sibling),pt=u(G,$.props.children),Pa(pt,$),pt.return=Z,Z=pt;break t}}else if(G.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===St&&Rs(Ht)===G.type){a(Z,G.sibling),pt=u(G,$.props),Pa(pt,$),pt.return=Z,Z=pt;break t}a(Z,G);break}else n(Z,G);G=G.sibling}$.type===H?(pt=Ss($.props.children,Z.mode,pt,$.key),Pa(pt,$),pt.return=Z,Z=pt):(pt=Yl($.type,$.key,$.props,null,Z.mode,pt),Pa(pt,$),pt.return=Z,Z=pt)}return g(Z);case w:t:{for(Ht=$.key;G!==null;){if(G.key===Ht)if(G.tag===4&&G.stateNode.containerInfo===$.containerInfo&&G.stateNode.implementation===$.implementation){a(Z,G.sibling),pt=u(G,$.children||[]),pt.return=Z,Z=pt;break t}else{a(Z,G);break}else n(Z,G);G=G.sibling}pt=gf($,Z.mode,pt),pt.return=Z,Z=pt}return g(Z);case St:return $=Rs($),de(Z,G,$,pt)}if(Rt($))return Nt(Z,G,$,pt);if(rt($)){if(Ht=rt($),typeof Ht!="function")throw Error(s(150));return $=Ht.call($),jt(Z,G,$,pt)}if(typeof $.then=="function")return de(Z,G,iu($),pt);if($.$$typeof===ut)return de(Z,G,$l(Z,$),pt);au(Z,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,G!==null&&G.tag===6?(a(Z,G.sibling),pt=u(G,$),pt.return=Z,Z=pt):(a(Z,G),pt=mf($,Z.mode,pt),pt.return=Z,Z=pt),g(Z)):a(Z,G)}return function(Z,G,$,pt){try{Po=0;var Ht=de(Z,G,$,pt);return mr=null,Ht}catch(Jt){if(Jt===pr||Jt===eu)throw Jt;var be=jn(29,Jt,null,Z.mode);return be.lanes=pt,be.return=Z,be}}}var ws=dg(!0),pg=dg(!1),za=!1;function Af(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Rf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ia(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ba(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Pe&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=ql(t),Qm(t,null,a),n}return jl(t,r,n,a),ql(t)}function zo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Q(t,a)}}function Cf(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?u=c=g:c=c.next=g,a=a.next}while(a!==null);c===null?u=c=n:c=c.next=n}else u=c=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var wf=!1;function Io(){if(wf){var t=dr;if(t!==null)throw t}}function Bo(t,n,a,r){wf=!1;var u=t.updateQueue;za=!1;var c=u.firstBaseUpdate,g=u.lastBaseUpdate,E=u.shared.pending;if(E!==null){u.shared.pending=null;var L=E,K=L.next;L.next=null,g===null?c=K:g.next=K,g=L;var st=t.alternate;st!==null&&(st=st.updateQueue,E=st.lastBaseUpdate,E!==g&&(E===null?st.firstBaseUpdate=K:E.next=K,st.lastBaseUpdate=L))}if(c!==null){var gt=u.baseState;g=0,st=K=L=null,E=c;do{var j=E.lane&-536870913,et=j!==E.lane;if(et?(Te&j)===j:(r&j)===j){j!==0&&j===bs&&(wf=!0),st!==null&&(st=st.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Nt=t,jt=E;j=n;var de=a;switch(jt.tag){case 1:if(Nt=jt.payload,typeof Nt=="function"){gt=Nt.call(de,gt,j);break t}gt=Nt;break t;case 3:Nt.flags=Nt.flags&-65537|128;case 0:if(Nt=jt.payload,j=typeof Nt=="function"?Nt.call(de,gt,j):Nt,j==null)break t;gt=P({},gt,j);break t;case 2:za=!0}}j=E.callback,j!==null&&(t.flags|=64,et&&(t.flags|=8192),et=u.callbacks,et===null?u.callbacks=[j]:et.push(j))}else et={lane:j,tag:E.tag,payload:E.payload,callback:E.callback,next:null},st===null?(K=st=et,L=gt):st=st.next=et,g|=j;if(E=E.next,E===null){if(E=u.shared.pending,E===null)break;et=E,E=et.next,et.next=null,u.lastBaseUpdate=et,u.shared.pending=null}}while(!0);st===null&&(L=gt),u.baseState=L,u.firstBaseUpdate=K,u.lastBaseUpdate=st,c===null&&(u.shared.lanes=0),ja|=g,t.lanes=g,t.memoizedState=gt}}function mg(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function gg(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)mg(a[t],n)}var Fa=Qt(null),su=Qt(0);function _g(t,n){t=ga,ie(su,t),ie(Fa,n),ga=t|n.baseLanes}function Df(){ie(su,ga),ie(Fa,Fa.current)}function Nf(){ga=su.current,Lt(Fa),Lt(su)}var An=Qt(null),Ln=null;function Ha(t){var n=t.alternate;ie(Rn,Rn.current&1),ie(An,t),Ln===null&&(n===null||Fa.current!==null||n.memoizedState!==null)&&(Ln=t)}function Uf(t){ie(Rn,Rn.current),ie(An,t),Ln===null&&(Ln=t)}function vg(t){t.tag===22?(ie(Rn,Rn.current),ie(An,t),Ln===null&&(Ln=t)):Ga()}function Ga(){ie(Rn,Rn.current),ie(An,An.current)}function ei(t){Lt(An),Ln===t&&(Ln=null),Lt(Rn)}var Rn=Qt(0);function Fo(t,n){ie(An,An.current),ie(Rn,n)}function Lf(t){Lt(Rn),Lt(An),Ln===t&&(Ln=null)}function ru(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ed(a)||nd(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ha=0,he=null,ke=null,fn=null,ou=!1,gr=!1,Ds=!1,lu=0,Ho=0,_r=null,Sy=0;function sn(){throw Error(s(321))}function Of(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ti(t[a],n[a]))return!1;return!0}function Pf(t,n,a,r,u,c){return ha=c,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Et.H=t===null||t.memoizedState===null?e_:n_,Ds=!1,c=a(r,u),Ds=!1,gr&&(c=Sg(n,a,r,u)),xg(t),c}function xg(t){Et.H=mu;var n=ke!==null&&ke.next!==null;if(ha=0,fn=ke=he=null,ou=!1,Ho=0,_r=null,n)throw Error(s(300));t===null||hn||(t=t.dependencies,t!==null&&Jl(t)&&(hn=!0))}function Sg(t,n,a,r){he=t;var u=0;do{if(gr&&(_r=null),Ho=0,gr=!1,25<=u)throw Error(s(301));if(u+=1,fn=ke=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}Et.H=Cy,c=n(a,r)}while(gr);return c}function yy(){var t=Et.H,n=t.useState()[0];return n=typeof n.then=="function"?Go(n):n,t=t.useState()[0],(ke!==null?ke.memoizedState:null)!==t&&(he.flags|=1024),n}function zf(){var t=lu!==0;return lu=0,t}function If(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Bf(t){if(ou){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}ou=!1}ha=0,fn=ke=he=null,gr=!1,Ho=lu=0,_r=null}function Hn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?he.memoizedState=fn=t:fn=fn.next=t,fn}function ln(){if(ke===null){var t=he.alternate;t=t!==null?t.memoizedState:null}else t=ke.next;var n=fn===null?he.memoizedState:fn.next;if(n!==null)fn=n,ke=t;else{if(t===null)throw he.alternate===null?Error(s(467)):Error(s(310));ke=t,t={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},fn===null?he.memoizedState=fn=t:fn=fn.next=t}return fn}function uu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Go(t){var n=Ho;return Ho+=1,_r===null&&(_r=[]),t=cg(_r,t,n),n=he,(fn===null?n.memoizedState:fn.next)===null&&(n=n.alternate,Et.H=n===null||n.memoizedState===null?e_:n_),t}function cu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Go(t);if(t.$$typeof===ft)return;if(t.$$typeof===ut)return bn(t)}throw Error(s(438,String(t)))}function Ff(t){var n=null,a=he.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=he.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=uu(),he.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=Re;return n.index++,a}function da(t,n){return typeof n=="function"?n(t):n}function fu(t){var n=ln();return Hf(n,ke,t)}function Hf(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=t.baseQueue,c=r.pending;if(c!==null){if(u!==null){var g=u.next;u.next=c.next,c.next=g}n.baseQueue=u=c,r.pending=null}if(c=t.baseState,u===null)t.memoizedState=c;else{n=u.next;var E=g=null,L=null,K=n,st=!1;do{var gt=K.lane&-536870913;if(gt!==K.lane?(Te&gt)===gt:(ha&gt)===gt){var j=K.revertLane;if(j===0)L!==null&&(L=L.next={lane:0,revertLane:0,gesture:null,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null}),gt===bs&&(st=!0);else if((ha&j)===j){K=K.next,j===bs&&(st=!0);continue}else gt={lane:0,revertLane:K.revertLane,gesture:null,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},L===null?(E=L=gt,g=c):L=L.next=gt,he.lanes|=j,ja|=j;gt=K.action,Ds&&a(c,gt),c=K.hasEagerState?K.eagerState:a(c,gt)}else j={lane:gt,revertLane:K.revertLane,gesture:K.gesture,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},L===null?(E=L=j,g=c):L=L.next=j,he.lanes|=gt,ja|=gt;K=K.next}while(K!==null&&K!==n);if(L===null?g=c:L.next=E,!ti(c,t.memoizedState)&&(hn=!0,st&&(a=dr,a!==null)))throw a;t.memoizedState=c,t.baseState=g,t.baseQueue=L,r.lastRenderedState=c}return u===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Gf(t){var n=ln(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,u=a.pending,c=n.memoizedState;if(u!==null){a.pending=null;var g=u=u.next;do c=t(c,g.action),g=g.next;while(g!==u);ti(c,n.memoizedState)||(hn=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),a.lastRenderedState=c}return[c,r]}function yg(t,n,a){var r=he,u=ln(),c=_e;if(c){if(a===void 0)throw Error(s(407));a=a()}else a=n();var g=!ti((ke||u).memoizedState,a);if(g&&(u.memoizedState=a,hn=!0),u=u.queue,Xf(Tg.bind(null,r,u,t),[t]),t=u.getSnapshot!==n||g||fn!==null&&(fn.memoizedState.tag&1)!==0,vr(t?9:8,{destroy:void 0},Eg.bind(null,r,u,a,n),null),t){if(r.flags|=2048,Ye===null)throw Error(s(349));c||(ha&127)!==0||Mg(r,n,a)}return a}function Mg(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=he.updateQueue,n===null?(n=uu(),he.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Eg(t,n,a,r){n.value=a,n.getSnapshot=r,bg(n)&&Ag(t)}function Tg(t,n,a){return a(function(){bg(n)&&Ag(t)})}function bg(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ti(t,a)}catch{return!0}}function Ag(t){var n=xs(t,2);n!==null&&Zn(n,t,2)}function Vf(t){var n=Hn();if(typeof t=="function"){var a=t;if(t=a(),Ds){mn(!0);try{a()}finally{mn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:t},n}function Rg(t,n,a,r){return t.baseState=a,Hf(t,ke,typeof r=="function"?r:da)}function My(t,n,a,r,u){if(pu(t))throw Error(s(485));if(t=n.action,t!==null){var c={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){c.listeners.push(g)}};Et.T!==null?a(!0):c.isTransition=!1,r(c),a=n.pending,a===null?(c.next=n.pending=c,Cg(n,c)):(c.next=a.next,n.pending=a.next=c)}}function Cg(t,n){var a=n.action,r=n.payload,u=t.state;if(n.isTransition){var c=Et.T,g={};g.types=c!==null?c.types:null,Et.T=g;try{var E=a(u,r),L=Et.S;L!==null&&L(g,E),wg(t,n,E)}catch(K){kf(t,n,K)}finally{c!==null&&g.types!==null&&(c.types=g.types),Et.T=c}}else try{c=a(u,r),wg(t,n,c)}catch(K){kf(t,n,K)}}function wg(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Dg(t,n,r)},function(r){return kf(t,n,r)}):Dg(t,n,a)}function Dg(t,n,a){n.status="fulfilled",n.value=a,Ng(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Cg(t,a)))}function kf(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Ng(n),n=n.next;while(n!==r)}t.action=null}function Ng(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Ug(t,n){return n}function Lg(t,n){if(_e){var a=Ye.formState;if(a!==null){t:{var r=he;if(_e){if(Qe){e:{for(var u=Qe,c=gi;u.nodeType!==8;){if(!c){u=null;break e}if(u=vi(u.nextSibling),u===null){u=null;break e}}c=u.data,u=c==="F!"||c==="F"?u:null}if(u){Qe=vi(u.nextSibling),r=u.data==="F!";break t}}La(r)}r=!1}r&&(n=a[0])}}return a=Hn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ug,lastRenderedState:n},a.queue=r,a=Jg.bind(null,he,r),r.dispatch=a,r=Vf(!1),c=Zf.bind(null,he,!1,r.queue),r=Hn(),u={state:n,dispatch:null,action:t,pending:null},r.queue=u,a=My.bind(null,he,u,c,a),u.dispatch=a,r.memoizedState=t,[n,a,!1]}function Og(t){var n=ln();return Pg(n,ke,t)}function Pg(t,n,a){if(n=Hf(t,n,Ug)[0],t=fu(da)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Go(n)}catch(g){throw g===pr?eu:g}else r=n;n=ln();var u=n.queue,c=u.dispatch;return a!==n.memoizedState&&(he.flags|=2048,vr(9,{destroy:void 0},Ey.bind(null,u,a),null)),[r,c,t]}function Ey(t,n){t.action=n}function zg(t){var n=ln(),a=ke;if(a!==null)return Pg(n,a,t);ln(),n=n.memoizedState,a=ln();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function vr(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=he.updateQueue,n===null&&(n=uu(),he.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function Ig(){return ln().memoizedState}function hu(t,n,a,r){var u=Hn();he.flags|=t,u.memoizedState=vr(1|n,{destroy:void 0},a,r===void 0?null:r)}function du(t,n,a,r){var u=ln();r=r===void 0?null:r;var c=u.memoizedState.inst;ke!==null&&r!==null&&Of(r,ke.memoizedState.deps)?u.memoizedState=vr(n,c,a,r):(he.flags|=t,u.memoizedState=vr(1|n,c,a,r))}function Bg(t,n){hu(8390656,8,t,n)}function Xf(t,n){du(2048,8,t,n)}function Ty(t){he.flags|=4;var n=he.updateQueue;if(n===null)n=uu(),he.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Fg(t){var n=ln().memoizedState;return Ty({ref:n,nextImpl:t}),function(){if((Pe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Hg(t,n){return du(4,2,t,n)}function Gg(t,n){return du(4,4,t,n)}function Vg(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function kg(t,n,a){a=a!=null?a.concat([t]):null,du(4,4,Vg.bind(null,n,t),a)}function jf(){}function Xg(t,n){var a=ln();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Of(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function jg(t,n){var a=ln();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Of(n,r[1]))return r[0];if(r=t(),Ds){mn(!0);try{t()}finally{mn(!1)}}return a.memoizedState=[r,n],r}function qf(t,n,a){return a===void 0||(ha&1073741824)!==0&&(Te&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=ev(),he.lanes|=t,ja|=t,a)}function qg(t,n,a,r){return ti(a,n)?a:Fa.current!==null?(t=qf(t,a,r),ti(t,n)||(hn=!0),t):(ha&106)===0||(ha&1073741824)!==0&&(Te&261930)===0?(hn=!0,t.memoizedState=a):(t=ev(),he.lanes|=t,ja|=t,n)}function Yg(t,n,a,r,u){var c=qt.p;qt.p=c!==0&&8>c?c:8;var g=Et.T,E={};E.types=g!==null?g.types:null,Et.T=E,Zf(t,!1,n,a);try{var L=u(),K=Et.S;if(K!==null&&K(E,L),L!==null&&typeof L=="object"&&typeof L.then=="function"){var st=xy(L,r);Vo(t,n,st,si(t))}else Vo(t,n,r,si(t))}catch(gt){Vo(t,n,{then:function(){},status:"rejected",reason:gt},si())}finally{qt.p=c,g!==null&&E.types!==null&&(g.types=E.types),Et.T=g}}function by(){}function Yf(t,n,a,r){if(t.tag!==5)throw Error(s(476));var u=Wg(t).queue;Yg(t,u,n,I,a===null?by:function(){return Zg(t),a(r)})}function Wg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:I},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Zg(t){var n=Wg(t);n.next===null&&(n=t.alternate.memoizedState),Vo(t,n.next.queue,{},si())}function Wf(){return bn(Ir)}function Kg(){return ln().memoizedState}function Qg(){return ln().memoizedState}function Ay(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=si();t=Ia(a);var r=Ba(n,t,a);r!==null&&(Zn(r,n,a),zo(r,n,a)),n={cache:Mf()},t.payload=n;return}n=n.return}}function Ry(t,n,a){var r=si();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},pu(t)?$g(n,a):(a=df(t,n,a,r),a!==null&&(Zn(a,t,r),t_(a,n,r)))}function Jg(t,n,a){var r=si();Vo(t,n,a,r)}function Vo(t,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(pu(t))$g(n,u);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var g=n.lastRenderedState,E=c(g,a);if(u.hasEagerState=!0,u.eagerState=E,ti(E,g))return jl(t,n,u,0),Ye===null&&Xl(),!1}catch{}if(a=df(t,n,u,r),a!==null)return Zn(a,t,r),t_(a,n,r),!0}return!1}function Zf(t,n,a,r){if(r={lane:2,revertLane:Fh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},pu(t)){if(n)throw Error(s(479))}else n=df(t,a,r,2),n!==null&&Zn(n,t,2)}function pu(t){var n=t.alternate;return t===he||n!==null&&n===he}function $g(t,n){gr=ou=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function t_(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Q(t,a)}}var mu={readContext:bn,use:cu,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn,useEffectEvent:sn},e_={readContext:bn,use:cu,useCallback:function(t,n){return Hn().memoizedState=[t,n===void 0?null:n],t},useContext:bn,useEffect:Bg,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,hu(4194308,4,Vg.bind(null,n,t),a)},useLayoutEffect:function(t,n){return hu(4194308,4,t,n)},useInsertionEffect:function(t,n){hu(4,2,t,n)},useMemo:function(t,n){var a=Hn();n=n===void 0?null:n;var r=t();if(Ds){mn(!0);try{t()}finally{mn(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Hn();if(a!==void 0){var u=a(n);if(Ds){mn(!0);try{a(n)}finally{mn(!1)}}}else u=n;return r.memoizedState=r.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},r.queue=t,t=t.dispatch=Ry.bind(null,he,t),[r.memoizedState,t]},useRef:function(t){var n=Hn();return t={current:t},n.memoizedState=t},useState:function(t){t=Vf(t);var n=t.queue,a=Jg.bind(null,he,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:jf,useDeferredValue:function(t,n){var a=Hn();return qf(a,t,n)},useTransition:function(){var t=Vf(!1);return t=Yg.bind(null,he,t.queue,!0,!1),Hn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=he,u=Hn();if(_e){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ye===null)throw Error(s(349));(Te&127)!==0||Mg(r,n,a)}u.memoizedState=a;var c={value:a,getSnapshot:n};return u.queue=c,Bg(Tg.bind(null,r,c,t),[t]),r.flags|=2048,vr(9,{destroy:void 0},Eg.bind(null,r,c,a,n),null),a},useId:function(){var t=Hn(),n=Ye.identifierPrefix;if(_e){var a=Gi,r=Hi;a=(r&~(1<<32-Nn(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=lu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Sy++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Wf,useFormState:Lg,useActionState:Lg,useOptimistic:function(t){var n=Hn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Zf.bind(null,he,!0,a),a.dispatch=n,[t,n]},useMemoCache:Ff,useCacheRefresh:function(){return Hn().memoizedState=Ay.bind(null,he)},useEffectEvent:function(t){var n=Hn(),a={impl:t};return n.memoizedState=a,function(){if((Pe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},n_={readContext:bn,use:cu,useCallback:Xg,useContext:bn,useEffect:Xf,useImperativeHandle:kg,useInsertionEffect:Hg,useLayoutEffect:Gg,useMemo:jg,useReducer:fu,useRef:Ig,useState:function(){return fu(da)},useDebugValue:jf,useDeferredValue:function(t,n){var a=ln();return qg(a,ke.memoizedState,t,n)},useTransition:function(){var t=fu(da)[0],n=ln().memoizedState;return[typeof t=="boolean"?t:Go(t),n]},useSyncExternalStore:yg,useId:Kg,useHostTransitionStatus:Wf,useFormState:Og,useActionState:Og,useOptimistic:function(t,n){var a=ln();return Rg(a,ke,t,n)},useMemoCache:Ff,useCacheRefresh:Qg,useEffectEvent:Fg},Cy={readContext:bn,use:cu,useCallback:Xg,useContext:bn,useEffect:Xf,useImperativeHandle:kg,useInsertionEffect:Hg,useLayoutEffect:Gg,useMemo:jg,useReducer:Gf,useRef:Ig,useState:function(){return Gf(da)},useDebugValue:jf,useDeferredValue:function(t,n){var a=ln();return ke===null?qf(a,t,n):qg(a,ke.memoizedState,t,n)},useTransition:function(){var t=Gf(da)[0],n=ln().memoizedState;return[typeof t=="boolean"?t:Go(t),n]},useSyncExternalStore:yg,useId:Kg,useHostTransitionStatus:Wf,useFormState:zg,useActionState:zg,useOptimistic:function(t,n){var a=ln();return ke!==null?Rg(a,ke,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Ff,useCacheRefresh:Qg,useEffectEvent:Fg};function Kf(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:P({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Qf={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=si(),u=Ia(r);u.payload=n,a!=null&&(u.callback=a),n=Ba(t,u,r),n!==null&&(Zn(n,t,r),zo(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=si(),u=Ia(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ba(t,u,r),n!==null&&(Zn(n,t,r),zo(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=si(),r=Ia(a);r.tag=2,n!=null&&(r.callback=n),n=Ba(t,r,a),n!==null&&(Zn(n,t,a),zo(n,t,a))}};function i_(t,n,a,r,u,c,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,c,g):n.prototype&&n.prototype.isPureReactComponent?!Co(a,r)||!Co(u,c):!0}function a_(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&Qf.enqueueReplaceState(n,n.state,null)}function Ns(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=P({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function s_(t){kl(t)}function r_(t){console.error(t)}function o_(t){kl(t)}function gu(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function l_(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Jf(t,n,a){return a=Ia(a),a.tag=3,a.payload={element:null},a.callback=function(){gu(t,n)},a}function u_(t){return t=Ia(t),t.tag=3,t}function c_(t,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var c=r.value;t.payload=function(){return u(c)},t.callback=function(){l_(n,a,r)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){l_(n,a,r),typeof u!="function"&&(qa===null?qa=new Set([this]):qa.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})})}function wy(t,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Es(n,a,u,!0),a=An.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Ln===null?Iu():a.alternate===null&&rn===0&&(rn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===nu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),zh(t,r,u)),!1;case 22:return a.flags|=65536,r===nu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),zh(t,r,u)),!1}throw Error(s(435,a.tag))}return zh(t,r,u),Iu(),!1}if(_e)return n=An.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==vf&&(t=Error(s(422),{cause:r}),No(di(t,a)))):(r!==vf&&(n=Error(s(423),{cause:r}),No(di(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,r=di(r,a),u=Jf(t.stateNode,r,u),Cf(t,u),rn!==4&&(rn=2)),!1;var c=Error(s(520),{cause:r});if(c=di(c,a),Ko===null?Ko=[c]:Ko.push(c),rn!==4&&(rn=2),n===null)return!0;r=di(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Jf(a.stateNode,r,t),Cf(a,t),!1;case 1:if(n=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(qa===null||!qa.has(c))))return a.flags|=65536,u&=-u,a.lanes|=u,u=u_(u),c_(u,t,a,r),Cf(a,u),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var $f=Error(s(461)),hn=!1;function _n(t,n,a,r){n.child=t===null?pg(n,null,a,r):ws(n,t.child,a,r)}function f_(t,n,a,r,u){a=a.render;var c=n.ref;if("ref"in r){var g={};for(var E in r)E!=="ref"&&(g[E]=r[E])}else g=r;return Ts(n),r=Pf(t,n,a,g,c,u),E=zf(),t!==null&&!hn?(If(t,n,u),pa(t,n,u)):(_e&&E&&Zl(n),n.flags|=1,_n(t,n,r,u),n.child)}function h_(t,n,a,r,u){if(t===null){var c=a.type;return typeof c=="function"&&!pf(c)&&c.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=c,d_(t,n,c,r,u)):(t=Yl(a.type,null,r,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(c=t.child,!oh(t,u)){var g=c.memoizedProps;if(a=a.compare,a=a!==null?a:Co,a(g,r)&&t.ref===n.ref)return pa(t,n,u)}return n.flags|=1,t=la(c,r),t.ref=n.ref,t.return=n,n.child=t}function d_(t,n,a,r,u){if(t!==null){var c=t.memoizedProps;if(Co(c,r)&&t.ref===n.ref)if(hn=!1,n.pendingProps=r=c,oh(t,u))(t.flags&131072)!==0&&(hn=!0);else return n.lanes=t.lanes,pa(t,n,u)}return th(t,n,a,r,u)}function p_(t,n,a,r){var u=r.children,c=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,t!==null){for(r=n.child=t.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~c}else r=0,n.child=null;return m_(t,n,c,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&tu(n,c!==null?c.cachePool:null),c!==null?_g(n,c):Df(),vg(n);else return r=n.lanes=536870912,m_(t,n,c!==null?c.baseLanes|a:a,a,r)}else c!==null?(tu(n,c.cachePool),_g(n,c),Ga(),n.memoizedState=null):(t!==null&&tu(n,null),Df(),Ga());return _n(t,n,u,a),n.child}function ko(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function m_(t,n,a,r,u){var c=Tf();return c=c===null?null:{parent:cn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&tu(n,null),Df(),vg(n),t!==null&&Es(t,n,r,!0),n.childLanes=u,null}function _u(t,n){return n=vu({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function g_(t,n,a){return ws(n,t.child,null,a),t=_u(n,n.pendingProps),t.flags|=2,ei(n),n.memoizedState=null,t}function Dy(t,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(_e){if(r.mode==="hidden")return t=_u(n,r),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},ko(null,t);if(Uf(n),(t=Qe)?(t=Vv(t,gi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Na!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},a=$m(t),a.return=n,n.child=a,yn=n,Qe=null)):t=null,t===null)throw La(n);return n.lanes=536870912,null}return _u(n,r)}var c=t.memoizedState;if(c!==null){var g=c.dehydrated;if(Uf(n),u)if(n.flags&256)n.flags&=-257,n=g_(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(hn||Es(t,n,a,!1),u=(a&t.childLanes)!==0,hn||u){if(Fa.current===null){if(r=Ye,r!==null&&(g=ot(r,a),g!==0&&g!==c.retryLane))throw c.retryLane=g,xs(t,g),Zn(r,t,g),$f;Iu()}n=g_(t,n,a)}else t=c.treeContext,Qe=vi(g.nextSibling),yn=n,_e=!0,Ua=null,gi=!1,t!==null&&ng(n,t),n=_u(n,r),n.flags|=134221824;return n}return t=la(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function xr(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function th(t,n,a,r,u){return Ts(n),a=Pf(t,n,a,r,void 0,u),r=zf(),t!==null&&!hn?(If(t,n,u),pa(t,n,u)):(_e&&r&&Zl(n),n.flags|=1,_n(t,n,a,u),n.child)}function __(t,n,a,r,u,c){return Ts(n),n.updateQueue=null,a=Sg(n,r,a,u),xg(t),r=zf(),t!==null&&!hn?(If(t,n,c),pa(t,n,c)):(_e&&r&&Zl(n),n.flags|=1,_n(t,n,a,c),n.child)}function v_(t,n,a,r,u){if(Ts(n),n.stateNode===null){var c=ur,g=a.contextType;typeof g=="object"&&g!==null&&(c=bn(g)),c=new a(r,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Qf,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=r,c.state=n.memoizedState,c.refs={},Af(n),g=a.contextType,c.context=typeof g=="object"&&g!==null?bn(g):ur,c.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Kf(n,a,g,r),c.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(g=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),g!==c.state&&Qf.enqueueReplaceState(c,c.state,null),Bo(n,r,c,u),Io(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){c=n.stateNode;var E=n.memoizedProps,L=Ns(a,E);c.props=L;var K=c.context,st=a.contextType;g=ur,typeof st=="object"&&st!==null&&(g=bn(st));var gt=a.getDerivedStateFromProps;st=typeof gt=="function"||typeof c.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,st||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(E||K!==g)&&a_(n,c,r,g),za=!1;var j=n.memoizedState;c.state=j,Bo(n,r,c,u),Io(),K=n.memoizedState,E||j!==K||za?(typeof gt=="function"&&(Kf(n,a,gt,r),K=n.memoizedState),(L=za||i_(n,a,L,r,j,K,g))?(st||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=K),c.props=r,c.state=K,c.context=g,r=L):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{c=n.stateNode,Rf(t,n),g=n.memoizedProps,st=Ns(a,g),c.props=st,gt=n.pendingProps,j=c.context,K=a.contextType,L=ur,typeof K=="object"&&K!==null&&(L=bn(K)),E=a.getDerivedStateFromProps,(K=typeof E=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(g!==gt||j!==L)&&a_(n,c,r,L),za=!1,j=n.memoizedState,c.state=j,Bo(n,r,c,u),Io();var et=n.memoizedState;g!==gt||j!==et||za||t!==null&&t.dependencies!==null&&Jl(t.dependencies)?(typeof E=="function"&&(Kf(n,a,E,r),et=n.memoizedState),(st=za||i_(n,a,st,r,j,et,L)||t!==null&&t.dependencies!==null&&Jl(t.dependencies))?(K||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,et,L),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,et,L)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||g===t.memoizedProps&&j===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&j===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=et),c.props=r,c.state=et,c.context=L,r=st):(typeof c.componentDidUpdate!="function"||g===t.memoizedProps&&j===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&j===t.memoizedState||(n.flags|=1024),r=!1)}return c=r,xr(t,n),r=(n.flags&128)!==0,c||r?(c=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,t!==null&&r?(n.child=ws(n,t.child,null,u),n.child=ws(n,null,a,u)):_n(t,n,a,u),n.memoizedState=c.state,t=n.child):t=pa(t,n,u),t}function x_(t,n,a,r){return ys(),n.flags|=256,_n(t,n,a,r),n.child}var eh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nh(t){return{baseLanes:t,cachePool:lg()}}function ih(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ai),t}function S_(t,n,a){var r=n.pendingProps,u=!1,c=(n.flags&128)!==0,g;if((g=c)||(g=t!==null&&t.memoizedState===null?!1:(Rn.current&2)!==0),g&&(u=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(_e){if(u?Ha(n):Ga(),(t=Qe)?(t=Vv(t,gi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Na!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},a=$m(t),a.return=n,n.child=a,yn=n,Qe=null)):t=null,t===null)throw La(n);return nd(t)?n.lanes=32:n.lanes=536870912,null}return c=r.children,r=r.fallback,u?(Ga(),u=n.mode,c=vu({mode:"hidden",children:c},u),r=Ss(r,u,a,null),c.return=n,r.return=n,c.sibling=r,n.child=c,r=n.child,r.memoizedState=nh(a),r.childLanes=ih(t,g,a),n.memoizedState=eh,ko(null,r)):(Ha(n),ah(n,c))}var E=t.memoizedState;if(E!==null){var L=E.dehydrated;if(L!==null)return Ny(t,n,c,g,r,L,E,a)}return u?(Ga(),u=r.fallback,c=n.mode,E=t.child,L=E.sibling,r=la(E,{mode:"hidden",children:r.children}),r.subtreeFlags=E.subtreeFlags&1206910976,L!==null?u=la(L,u):(u=Ss(u,c,a,null),u.flags|=2),u.return=n,r.return=n,r.sibling=u,n.child=r,ko(null,r),r=n.child,u=t.child.memoizedState,u===null?u=nh(a):(c=u.cachePool,c!==null?(E=cn._currentValue,c=c.parent!==E?{parent:E,pool:E}:c):c=lg(),u={baseLanes:u.baseLanes|a,cachePool:c}),r.memoizedState=u,r.childLanes=ih(t,g,a),n.memoizedState=eh,ko(t.child,r)):(Ha(n),a=t.child,t=a.sibling,a=la(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function ah(t,n){return n=vu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function vu(t,n){return t=jn(22,t,null,n),t.lanes=0,t}function xu(t,n,a){return ws(n,t.child,null,a),t=ah(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Ny(t,n,a,r,u,c,g,E){if(a)return n.flags&256?(Ha(n),n.flags&=-257,xu(t,n,E)):n.memoizedState!==null?(Ga(),n.child=t.child,n.flags|=128,null):(Ga(),c=u.fallback,g=n.mode,u=vu({mode:"visible",children:u.children},g),c=Ss(c,g,E,null),c.flags|=2,u.return=n,c.return=n,u.sibling=c,n.child=u,ws(n,t.child,null,E),u=n.child,u.memoizedState=nh(E),u.childLanes=ih(t,r,E),n.memoizedState=eh,ko(null,u));if(Ha(n),nd(c)){if(r=c.nextSibling&&c.nextSibling.dataset,r)var L=r.dgst;return r=L,r!==""&&(u=Error(s(419)),u.stack="",u.digest=r,No({value:u,source:null,stack:null})),xu(t,n,E)}if(hn||Es(t,n,E,!1),r=(E&t.childLanes)!==0,hn||r){if(Fa.current!==null)return xu(t,n,E);if(r=Ye,r!==null&&(u=ot(r,E),u!==0&&u!==g.retryLane))throw g.retryLane=u,xs(t,u),Zn(r,t,u),$f;return ed(c)||Iu(),xu(t,n,E)}return ed(c)?(n.flags|=192,n.child=t.child,null):(t=g.treeContext,Qe=vi(c.nextSibling),yn=n,_e=!0,Ua=null,gi=!1,t!==null&&ng(n,t),n=ah(n,u.children),n.flags|=134221824,n)}function y_(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),Ql(t.return,n,a)}function M_(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&ru(a)===null&&(n=t),t=t.sibling}return n}function Su(t,n,a,r,u,c){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:c}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=r,g.tail=a,g.tailMode=u,g.treeForkCount=c)}function sh(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function rh(t,n,a){var r=n.pendingProps,u=r.revealOrder,c=r.tail;r=r.children;var g=Rn.current;if(n.flags&128)return Fo(n,g),null;var E=(g&2)!==0;if(E?(g=g&1|2,n.flags|=128):g&=1,Fo(n,g),u==="backwards"&&t!==null?(sh(t),_n(t,n,r,a),sh(t)):_n(t,n,r,a),r=_e?Do:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&y_(t,a,n);else if(t.tag===19)y_(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"backwards":a=M_(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null,sh(n)),Su(n,!0,u,null,c,r);break;case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&ru(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Su(n,!0,a,null,c,r);break;case"together":Su(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=M_(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Su(n,!1,u,a,c,r)}return n.child}function E_(t,n,a){var r=n.pendingProps;return Oa(n,n.type,r.value),_n(t,n,r.children,a),n.child}function pa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ja|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Es(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=la(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=la(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function oh(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Jl(t)))}function Uy(t,n,a){switch(n.tag){case 3:U(n,n.stateNode.containerInfo),Oa(n,cn,t.memoizedState.cache),ys();break;case 27:case 5:it(n);break;case 4:U(n,n.stateNode.containerInfo);break;case 10:Oa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Uf(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return Ha(n),n.flags|=128,null;r=Es(t,n,a,!1);var u=n.child.childLanes;return r||(a&u)!==0?S_(t,n,a):(Ha(n),t=pa(t,n,a),t!==null?t.sibling:null)}Ha(n);break;case 19:if(n.flags&128)return rh(t,n,a);if(u=(t.flags&128)!==0,r=(a&n.childLanes)!==0,r||(Es(t,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return rh(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Fo(n,Rn.current),r)break;return null;case 22:return n.lanes=0,p_(t,n,a,n.pendingProps);case 24:Oa(n,cn,t.memoizedState.cache)}return pa(t,n,a)}function T_(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)hn=!0;else{if(!oh(t,a)&&(n.flags&128)===0)return hn=!1,Uy(t,n,a);hn=(t.flags&131072)!==0}else hn=!1,_e&&(n.flags&1048576)!==0&&eg(n,Do,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=Rs(n.elementType),n.type=t,typeof t=="function")pf(t)?(r=Ns(t,r),n.tag=1,n=v_(null,n,t,r,a)):(n.tag=0,n=th(null,n,t,r,a));else{if(t!=null){var u=t.$$typeof;if(u===W){n.tag=11,n=f_(null,n,t,r,a);break t}else if(u===vt){n.tag=14,n=h_(null,n,t,r,a);break t}else if(u===ut){n.tag=10,n.type=t,n=E_(null,n,a);break t}}throw n=Ut(t)||t,Error(s(306,n,""))}}return n;case 0:return th(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=Ns(r,n.pendingProps),v_(t,n,r,u,a);case 3:t:{if(U(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var c=n.memoizedState;u=c.element,Rf(t,n),Bo(n,r,null,a);var g=n.memoizedState;if(r=g.cache,Oa(n,cn,r),r!==c.cache&&yf(n,[cn],a,!0),Io(),r=g.element,c.isDehydrated)if(c={element:r,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=x_(t,n,r,a);break t}else if(r!==u){u=di(Error(s(424)),n),No(u),n=x_(t,n,r,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Qe=vi(t.firstChild),yn=n,_e=!0,Ua=null,gi=!0,a=pg(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling;else{if(ys(),r===u){n=pa(t,n,a);break t}_n(t,n,r,a)}n=n.child}return n;case 26:return xr(t,n),t===null?(a=Zv(n.type,null,n.pendingProps,null))?n.memoizedState=a:_e||(n.stateNode=Cv(n.type,n.pendingProps,qe.current,n)):n.memoizedState=Zv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return it(n),t===null&&_e&&(r=n.stateNode=jv(n.type,n.pendingProps,qe.current),yn=n,gi=!0,u=Qe,Za(n.type)?(id=u,Qe=vi(r.firstChild)):Qe=u),_n(t,n,n.pendingProps.children,a),xr(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&_e&&((u=r=Qe)&&(r=AM(r,n.type,n.pendingProps,gi),r!==null?(n.stateNode=r,yn=n,Qe=vi(r.firstChild),gi=!1,u=!0):u=!1),u||La(n)),it(n),u=n.type,c=n.pendingProps,g=t!==null?t.memoizedProps:null,r=c.children,Wh(u,c)?r=null:g!==null&&Wh(u,g)&&(n.flags|=32),n.memoizedState!==null&&(u=Pf(t,n,yy,null,null,a),Ir._currentValue=u),xr(t,n),_n(t,n,r,a),n.child;case 6:return t===null&&_e&&((t=a=Qe)&&(a=RM(a,n.pendingProps,gi),a!==null?(n.stateNode=a,yn=n,Qe=null,t=!0):t=!1),t||La(n)),null;case 13:return S_(t,n,a);case 4:return U(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=ws(n,null,r,a):_n(t,n,r,a),n.child;case 11:return f_(t,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,xr(t,n),_n(t,n,r,a),n.child;case 8:return _n(t,n,n.pendingProps.children,a),n.child;case 12:return _n(t,n,n.pendingProps.children,a),n.child;case 10:return E_(t,n,a);case 9:return u=n.type._context,r=n.pendingProps.children,Ts(n),u=bn(u),r=r(u),n.flags|=1,_n(t,n,r,a),n.child;case 14:return h_(t,n,n.type,n.pendingProps,a);case 15:return d_(t,n,n.type,n.pendingProps,a);case 19:return rh(t,n,a);case 31:return Dy(t,n,a);case 22:return p_(t,n,a,n.pendingProps);case 24:return Ts(n),r=bn(cn),t===null?(u=Tf(),u===null&&(u=Ye,c=Mf(),u.pooledCache=c,c.refCount++,c!==null&&(u.pooledCacheLanes|=a),u=c),n.memoizedState={parent:r,cache:u},Af(n),Oa(n,cn,u)):((t.lanes&a)!==0&&(Rf(t,n),Bo(n,null,null,a),Io()),u=t.memoizedState,c=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Oa(n,cn,r)):(r=c.cache,Oa(n,cn,r),r!==u.cache&&yf(n,[cn],a,!0))),_n(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=t===null?18882560:18874368:_e&&Zl(n),t!==null&&t.memoizedProps.name!==r.name?n.flags|=4194816:xr(t,n),_n(t,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ma(t){t.flags|=4}function lh(t,n,a,r,u){var c;if((c=(t.mode&32)!==0)&&(c=a===null?$v(n,r):$v(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),c){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(sv())t.flags|=8192;else throw Cs=nu,bf}else t.flags&=-16777217}function b_(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!t0(n))if(sv())t.flags|=8192;else throw Cs=nu,bf}function yu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ll():536870912,t.lanes|=n,Tr|=n)}function Xo(t,n){if(!_e)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function Je(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&1206910976,r|=u.flags&1206910976,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function Ly(t,n,a){var r=n.pendingProps;switch(_f(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(n),null;case 1:return Je(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),fa(cn),T(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(hr(n)?ma(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,xf())),Je(n),null;case 26:var u=n.type,c=n.memoizedState;return t===null?(ma(n),c!==null?(Je(n),b_(n,c)):(Je(n),lh(n,u,null,r,a))):c?c!==t.memoizedState?(ma(n),Je(n),b_(n,c)):(Je(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&ma(n),Je(n),lh(n,u,t,r,a)),null;case 27:if(mt(n),a=qe.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ma(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Je(n),n.subtreeFlags&=-33554433,null}t=Ft.current,hr(n)?ig(n):(t=jv(u,r,a),n.stateNode=t,ma(n))}return Je(n),n.subtreeFlags&=-33554433,null;case 5:if(mt(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ma(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Je(n),n.subtreeFlags&=-33554433,null}if(c=Ft.current,hr(n))ig(n);else{var g=el(qe.current);switch(c){case 1:c=g.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:c=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":c=g.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":c=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":c=g.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof r.is=="string"?g.createElement("select",{is:r.is}):g.createElement("select"),r.multiple?c.multiple=!0:r.size&&(c.size=r.size);break;default:c=typeof r.is=="string"?g.createElement(u,{is:r.is}):g.createElement(u)}}c[wt]=n,c[Xt]=r;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)c.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=c;t:switch(wn(c,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ma(n)}}return Je(n),n.subtreeFlags&=-33554433,lh(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&ma(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=qe.current,hr(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,u=yn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}t[wt]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Tv(t.nodeValue,a)),t||La(n,!0)}else t=el(t).createTextNode(r),t[wt]=n,n.stateNode=t}return Je(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=hr(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[wt]=n}else ys(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),t=!1}else a=xf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ei(n),n):(ei(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Je(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=hr(n),r!==null&&r.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[wt]=n}else ys(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),u=!1}else u=xf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ei(n),n):(ei(n),null)}return ei(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==u&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),yu(n,n.updateQueue),Je(n),null);case 4:return T(),t===null&&kh(n.stateNode.containerInfo),n.flags|=67108864,Je(n),null;case 10:return fa(n.type),Je(n),null;case 19:if(Lf(n),r=n.memoizedState,r===null)return Je(n),null;if(u=(n.flags&128)!==0,c=r.rendering,c===null)if(u)Xo(r,!1);else{if(rn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(c=ru(t),c!==null){for(n.flags|=128,Xo(r,!1),t=c.updateQueue,n.updateQueue=t,yu(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Jm(a,t),a=a.sibling;return Fo(n,Rn.current&1|2),_e&&ua(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&k()>Lu&&(n.flags|=128,u=!0,Xo(r,!1),n.lanes=4194304)}else{if(!u)if(t=ru(c),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,yu(n,t),Xo(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!c.alternate&&!_e)return Je(n),null}else 2*k()-r.renderingStartTime>Lu&&a!==536870912&&(n.flags|=128,u=!0,Xo(r,!1),n.lanes=4194304);r.isBackwards?(c.sibling=n.child,n.child=c):(t=r.last,t!==null?t.sibling=c:n.child=c,r.last=c)}if(r.tail!==null){t=r.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=k(),t.sibling=null,c=Rn.current,c=u?c&1|2:c&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||_e?Fo(n,c):(a=c,ie(An,n),ie(Rn,a),Ln===null&&(Ln=n)),_e&&ua(n,r.treeForkCount),t}return Je(n),null;case 22:case 23:return ei(n),Nf(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Je(n),n.subtreeFlags&6&&(n.flags|=8192)):Je(n),a=n.updateQueue,a!==null&&yu(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&Lt(As),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),fa(cn),Je(n),null;case 25:return null;case 30:return n.flags|=33554432,Je(n),null}throw Error(s(156,n.tag))}function Oy(t,n){switch(_f(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return fa(cn),T(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return mt(n),null;case 31:if(n.memoizedState!==null){if(ei(n),n.alternate===null)throw Error(s(340));ys()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ei(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ys()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Lf(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return T(),null;case 10:return fa(n.type),null;case 22:case 23:return ei(n),Nf(),t!==null&&Lt(As),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return fa(cn),null;case 25:return null;default:return null}}function A_(t,n){switch(_f(n),n.tag){case 3:fa(cn),T();break;case 26:case 27:case 5:mt(n);break;case 4:T();break;case 31:n.memoizedState!==null&&ei(n);break;case 13:ei(n);break;case 19:Lf(n);break;case 10:fa(n.type);break;case 22:case 23:ei(n),Nf(),t!==null&&Lt(As);break;case 24:fa(cn)}}function jo(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&t)===t){r=void 0;var c=a.create,g=a.inst;r=c(),g.destroy=r}a=a.next}while(a!==u)}}catch(E){Fe(n,n.return,E)}}function Va(t,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var c=u.next;r=c;do{if((r.tag&t)===t){var g=r.inst,E=g.destroy;if(E!==void 0){g.destroy=void 0,u=n;var L=a,K=E;try{K()}catch(st){Fe(u,L,st)}}}r=r.next}while(r!==c)}}catch(st){Fe(n,n.return,st)}}function R_(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{gg(n,a)}catch(r){Fe(t,t.return,r)}}}function C_(t,n,a){a.props=Ns(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Fe(t,n,r)}}function Vi(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var u=t.stateNode,c=ra(t.memoizedProps,u);(u.ref===null||u.ref.name!==c)&&(u.ref=Pv(c)),r=u.ref;break;case 7:if(t.stateNode===null){var g=new ri(t);p(t.child,!1,TM,g,void 0,void 0),t.stateNode=g}r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(E){Fe(t,n,E)}}function Cn(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){Fe(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Fe(t,n,u)}else a.current=null}function Mu(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)Gv(t.stateNode,n[a])}function w_(t){for(var n=t.return;n!==null&&(ch(n)&&Gv(t.stateNode,n.stateNode),!uh(n));)n=n.return}function qo(t){for(var n=t.return;n!==null&&(ch(n)&&bM(t.stateNode,n.stateNode),!uh(n));)n=n.return}function uh(t){return t.tag===5||t.tag===3||t.tag===27}function ch(t){return t&&t.tag===7&&t.stateNode!==null}function fh(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){Fe(t,t.return,u)}}function hh(t,n,a){try{var r=t.stateNode;rM(r,t.type,a,n),r[Xt]=n}catch(u){Fe(t,t.return,u)}}function D_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Za(t.type)||t.tag===4}function dh(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||D_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Za(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ph(t,n,a,r){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(u,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(u),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Fi)),Mu(t,r),Ne=!0;else if(u!==4&&(u===27&&(Mu(t,r),r=null,Za(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(ph(t,n,a,r),t=t.sibling;t!==null;)ph(t,n,a,r),t=t.sibling}function Eu(t,n,a,r){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?a.insertBefore(u,n):a.appendChild(u),Mu(t,r),Ne=!0;else if(u!==4&&(u===27&&(Mu(t,r),r=null,Za(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(Eu(t,n,a,r),t=t.sibling;t!==null;)Eu(t,n,a,r),t=t.sibling}function N_(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);wn(n,r,a),n[wt]=t,n[Xt]=a}catch(c){Fe(t,t.return,c)}}var Tu=!1,ni=null;function U_(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(Tu=!0)}var ki=null;function L_(){var t=ki;return ki=null,t}var qn=0;function Sr(t,n,a,r,u){return qn=0,O_(t.child,n,a,r,u)}function O_(t,n,a,r,u){for(var c=!1;t!==null;){if(t.tag===5){var g=t.stateNode;if(r!==null){var E=Qh(g);r.push(E),E.view&&(c=!0)}else c||Qh(g).view&&(c=!0);Tu=!0,Lv(g,qn===0?n:n+"_"+qn,a),qn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&u||O_(t.child,n,a,r,u)&&(c=!0));t=t.sibling}return c}function Xi(t,n){for(;t!==null;)t.tag===5?Ov(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Xi(t.child,n)),t=t.sibling}function bu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(bu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=oa(n.default,n.share),n!=="none"&&(Sr(t,a,n,null,!1)||Xi(t.child,!1))}t=t.sibling}}function mh(t,n){if(t.tag===30){var a=t.stateNode,r=t.memoizedProps,u=ra(r,a),c=oa(r.default,a.paired?r.share:r.enter);c!=="none"?Sr(t,u,c,null,!1)?(bu(t),a.paired||n||Cr(t,r.onEnter)):Xi(t.child,!1):bu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)mh(t,n),t=t.sibling;else bu(t)}function gh(t){if(ni!==null&&ni.size!==0){var n=ni;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var u=n.get(r);if(u!==void 0){var c=oa(a.default,a.share);if(c!=="none"&&(Sr(t,r,c,null,!1)?(c=t.stateNode,u.paired=c,c.paired=u,Cr(t,a.onShare)):Xi(t.child,!1)),n.delete(r),n.size===0)break}}}gh(t)}t=t.sibling}}}function _h(t){if(t.tag===30){var n=t.memoizedProps,a=ra(n,t.stateNode),r=ni!==null?ni.get(a):void 0,u=oa(n.default,r!==void 0?n.share:n.exit);u!=="none"&&(Sr(t,a,u,null,!1)?r!==void 0?(u=t.stateNode,r.paired=u,u.paired=r,ni.delete(a),Cr(t,n.onShare)):Cr(t,n.onExit):Xi(t.child,!1)),ni!==null&&gh(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)_h(t),t=t.sibling;else ni!==null&&gh(t)}function P_(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=ra(n,t.stateNode);n=oa(n.default,n.update),t.flags&=-5,n!=="none"&&Sr(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&P_(t);t=t.sibling}}function vh(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Xi(t.child,!1))}vh(t)}t=t.sibling}}function Au(t){if(t.tag===30)t.stateNode.paired=null,Xi(t.child,!1),vh(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Au(t),t=t.sibling;else vh(t)}function z_(t){for(t=t.child;t!==null;)t.tag===30?Xi(t.child,!1):(t.subtreeFlags&33554432)!==0&&z_(t),t=t.sibling}function xh(t,n,a,r,u,c,g){for(var E=!1;n!==null;){if(n.tag===5){var L=n.stateNode;if(c!==null&&qn<c.length){var K=c[qn],st=Qh(L);(K.view||st.view)&&(E=!0);var gt;if(gt=(t.flags&4)===0)if(st.clip)gt=!0;else{gt=K.rect;var j=st.rect;gt=gt.y!==j.y||gt.x!==j.x||gt.height!==j.height||gt.width!==j.width}gt&&(t.flags|=4),st.abs?st=!K.abs:(K=K.rect,st=st.rect,st=K.height!==st.height||K.width!==st.width),st&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&Lv(L,qn===0?a:a+"_"+qn,u),E&&(t.flags&4)!==0||(ki===null&&(ki=[]),ki.push(L,qn===0?r:r+"_"+qn,n.memoizedProps)),qn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&g?t.flags|=n.flags&32:xh(t,n.child,a,r,u,c,g)&&(E=!0));n=n.sibling}return E}function I_(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,r=t.stateNode,u=ra(a,r),c=oa(a.default,a.update),g;g=t.memoizedState,t.memoizedState=null,r=t;var E=t.child;qn=0,u=xh(r,E,u,u,c,g,!1),(t.flags&4)!==0&&u&&Cr(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&I_(t);t=t.sibling}}var Mn=!1,Ie=!1,ji=!1,Sh=!1,B_=typeof WeakSet=="function"?WeakSet:Set,En=null,qi=!1,Yo=!1,Ru=!1,yh=!1;function Py(t,n,a){if(t=t.containerInfo,qh=Br,t=Vm(t),of(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var u=r.getSelection&&r.getSelection();if(u&&u.rangeCount!==0){r=u.anchorNode;var c=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{r.nodeType,g.nodeType}catch{r=null;break t}var E=0,L=-1,K=-1,st=0,gt=0,j=t,et=null;e:for(;;){for(var Nt;j!==r||c!==0&&j.nodeType!==3||(L=E+c),j!==g||u!==0&&j.nodeType!==3||(K=E+u),j.nodeType===3&&(E+=j.nodeValue.length),(Nt=j.firstChild)!==null;)et=j,j=Nt;for(;;){if(j===t)break e;if(et===r&&++st===c&&(L=E),et===g&&++gt===u&&(K=E),(Nt=j.nextSibling)!==null)break;j=et,et=j.parentNode}j=Nt}r=L===-1||K===-1?null:{start:L,end:K}}else r=null}r=r||{start:0,end:0}}else r=null;for(Yh={focusedElem:t,selectionRange:r},Br=!1,a=(a&335544064)===a,En=n,n=a?9270:1024;En!==null;){if(t=En,a&&(r=t.deletions,r!==null))for(c=0;c<r.length;c++)a&&_h(r[c]);if(t.alternate===null&&(t.flags&2)!==0)a&&U_(t),Cu(a);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&_h(r),Cu(a);continue}else if(r!==null&&r.memoizedState!==null){a&&U_(t),Cu(a);continue}}r=t.child,(t.subtreeFlags&n)!==0&&r!==null?(r.return=t,En=r):(a&&P_(t),Cu(a))}}ni=null}function Cu(t){for(;En!==null;){var n=En,a=t,r=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((u&1024)!==0&&r!==null){a=void 0,u=r.memoizedProps,r=r.memoizedState;var c=n.stateNode;try{var g=Ns(n.type,u);a=c.getSnapshotBeforeUpdate(g,r),c.__reactInternalSnapshotBeforeUpdate=a}catch(E){Fe(n,n.return,E)}}break;case 3:if((u&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)td(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":td(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=ra(r.memoizedProps,r.stateNode),u=n.memoizedProps,u=oa(u.default,u.update),u!=="none"&&Sr(r,a,u,r.memoizedState=[],!0));break;default:if((u&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,En=r;break}En=n.return}}function F_(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Yi(t,a),r&4&&jo(5,a);break;case 1:if(Yi(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){Fe(a,a.return,g)}else{var u=Ns(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Fe(a,a.return,g)}}r&64&&R_(a),r&512&&Vi(a,a.return);break;case 3:if(Yi(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{gg(t,n)}catch(g){Fe(a,a.return,g)}}break;case 27:n===null&&r&4&&N_(a);case 26:case 5:Yi(t,a),n===null&&r&4&&fh(a),r&512&&Vi(a,a.return);break;case 12:Yi(t,a);break;case 31:Yi(t,a),r&4&&k_(t,a);break;case 13:Yi(t,a),r&4&&X_(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Yy.bind(null,a),CM(t,a))));break;case 22:if(r=a.memoizedState!==null||Mn,!r){var c=n!==null&&n.memoizedState!==null||Ie;n=Mn,u=Ie,Mn=r,(Ie=c)&&!u?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),Ci(t,a,r)):Yi(t,a),Mn=n,Ie=u}break;case 30:Yi(t,a),r&512&&Vi(a,a.return);break;case 7:r&512&&Vi(a,a.return);default:Yi(t,a)}}function Mh(t,n){for(t=t.child;t!==null;)H_(t,n),t=t.sibling}function H_(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var u=t.stateNode,c=t.memoizedProps.style,g=c!=null&&c.hasOwnProperty("display")?c.display:null;u.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(L){Fe(t,t.return,L)}Eh(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,Ne=!0}catch(L){Fe(t,t.return,L)}break;case 18:try{var E=t.stateNode;n?Uv(E,!0):Uv(t.stateNode,!1)}catch(L){Fe(t,t.return,L)}break;case 22:case 23:t.memoizedState===null&&Mh(t,n);break;default:Mh(t,n)}}function Eh(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,r=n;switch(a.tag){case 4:H_(a,r);break t;case 22:a.memoizedState===null&&Eh(a,r);break t;default:Eh(a,r)}}t=t.sibling}}function G_(t){var n=t.alternate;n!==null&&(t.alternate=null,G_(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&te(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var tn=null,Yn=!1;function Ai(t,n,a){for(a=a.child;a!==null;)V_(t,n,a),a=a.sibling}function V_(t,n,a){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(Ee,a)}catch{}switch(a.tag){case 26:Ie||Cn(a,n),Ai(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Ie&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ie||Cn(a,n),qo(a);var r=tn,u=Yn;Za(a.type)&&(tn=a.stateNode,Yn=!1),Ai(t,n,a),qv(a.stateNode,a.type,a.memoizedProps),tn=r,Yn=u;break;case 5:Ie||Cn(a,n),qo(a);case 6:if(a.tag===6&&qo(a),r=tn,u=Yn,tn=null,Ai(t,n,a),tn=r,Yn=u,tn!==null)if(Yn)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(a.stateNode),Ne=!0}catch(c){Fe(a,n,c)}else try{tn.removeChild(a.stateNode),Ne=!0}catch(c){Fe(a,n,c)}break;case 18:tn!==null&&(Yn?(t=tn,Nv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Fr(t)):Nv(tn,a.stateNode));break;case 4:r=tn,u=Yn,tn=a.stateNode.containerInfo,Yn=!0,Ai(t,n,a),tn=r,Yn=u;break;case 0:case 11:case 14:case 15:Va(2,a,n),Ie||Va(4,a,n),Ai(t,n,a);break;case 1:Ie||(Cn(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&C_(a,n,r)),Ai(t,n,a);break;case 21:Ai(t,n,a);break;case 22:Ie=(r=Ie)||a.memoizedState!==null,Ai(t,n,a),Ie=r;break;case 30:Cn(a,n),Ai(t,n,a);break;case 7:Ie||Cn(a,n),Ai(t,n,a);break;default:Ai(t,n,a)}}function k_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Fr(t)}catch(a){Fe(n,n.return,a)}}}function X_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Fr(t)}catch(a){Fe(n,n.return,a)}}function zy(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new B_),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new B_),n;default:throw Error(s(435,t.tag))}}function wu(t,n){var a=zy(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=Wy.bind(null,t,r);r.then(u,u)}})}function Gn(t,n,a){var r=n.deletions;if(r!==null)for(var u=0;u<r.length;u++){var c=r[u],g=t,E=n,L=E;t:for(;L!==null;){switch(L.tag){case 27:if(Za(L.type)){tn=L.stateNode,Yn=!1;break t}break;case 5:tn=L.stateNode,Yn=!1;break t;case 3:case 4:tn=L.stateNode.containerInfo,Yn=!0;break t}L=L.return}if(tn===null)throw Error(s(160));V_(g,E,c),tn=null,Yn=!1,g=c.alternate,g!==null&&(g.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)j_(n,t,a),n=n.sibling}var Ri=null;function j_(t,n,a){var r=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(u&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var c=0;c<r.length;c++){var g=r[c];g.ref.impl=g.nextImpl}Gn(n,t,a),Vn(t),u&4&&(Va(3,t,t.return),jo(3,t),Va(5,t,t.return));break;case 1:Gn(n,t,a),Vn(t),u&512&&(Ie||r===null||Cn(r,r.return)),u&64&&Mn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(c=Ri,Gn(n,t,a),Vn(t),u&512&&(Ie||r===null||Cn(r,r.return)),u&4)if(u=r!==null?r.memoizedState:null,a=t.memoizedState,r===null)if(a===null)if(t.stateNode===null)if(Mn)t.stateNode=Cv(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,u=c.ownerDocument||c;e:switch(n){case"title":r=u.getElementsByTagName("title")[0],(!r||r[Le]||r[wt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=u.createElement(n),u.head.insertBefore(r,u.querySelector("head > title"))),wn(r,n,a),r[wt]=t,De(r),n=r;break t;case"link":if(c=Jv("link","href",u).get(n+(a.href||""))){for(g=0;g<c.length;g++)if(r=c[g],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(g,1);break e}}r=u.createElement(n),wn(r,n,a),u.head.appendChild(r);break;case"meta":if(c=Jv("meta","content",u).get(n+(a.content||""))){for(g=0;g<c.length;g++)if(r=c[g],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(g,1);break e}}r=u.createElement(n),wn(r,n,a),u.head.appendChild(r);break;default:throw Error(s(468,n))}r[wt]=t,De(r),n=r}t.stateNode=n}else Mn||od(c,t.type,t.stateNode);else t.stateNode=Qv(c,a,t.memoizedProps);else u!==a?(u===null?(n=r.stateNode,n===null||Ie||n.parentNode.removeChild(n)):u.count--,a===null?Mn||od(c,t.type,t.stateNode):Qv(c,a,t.memoizedProps)):a===null&&t.stateNode!==null&&hh(t,t.memoizedProps,r.memoizedProps);break;case 27:Gn(n,t,a),Vn(t),u&512&&(Ie||r===null||Cn(r,r.return)),r!==null&&u&4&&hh(t,t.memoizedProps,r.memoizedProps);break;case 5:if(c=ji,ji=!1,Gn(n,t,a),ji=c,Vn(t),u&512&&(Ie||r===null||Cn(r,r.return)),t.flags&32){n=t.stateNode;try{nr(n,""),Ne=!0}catch(st){Fe(t,t.return,st)}}u&4&&t.stateNode!=null&&(n=t.memoizedProps,hh(t,n,r!==null?r.memoizedProps:n)),u&1024&&(Sh=!0);break;case 6:if(Gn(n,t,a),Vn(t),u&4){if(t.stateNode===null)throw Error(s(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,Ne=!0}catch(st){Fe(t,t.return,st)}}break;case 3:if(Ne=!1,Xu=null,c=Ri,Ri=nl(n.containerInfo),Gn(n,t,a),Ri=c,Vn(t),u&4&&r!==null&&r.memoizedState.isDehydrated)try{Fr(n.containerInfo)}catch(st){Fe(t,t.return,st)}Sh&&(Sh=!1,q_(t)),Ne=!1;break;case 4:u=ji,ji=Mn,r=hm(),c=Ri,Ri=nl(t.stateNode.containerInfo),Gn(n,t,a),Vn(t),Ri=c,Ne&&Yo&&(Ru=!0),Ne=r,ji=u;break;case 12:Gn(n,t,a),Vn(t);break;case 31:Gn(n,t,a),Vn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,wu(t,n)));break;case 13:Gn(n,t,a),Vn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Uu=k()),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,wu(t,n)));break;case 22:c=t.memoizedState!==null,g=r!==null&&r.memoizedState!==null;var E=Mn,L=Ie,K=ji;Mn=E||c,ji=K||c,Ie=L||g,Gn(n,t,a),Ie=L,ji=K,Mn=E,Vn(t),u&8192&&(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,!c||r===null||g||Mn||Ie||(n=g||Ie,a=Mn,r=Ie,Mn=c||Mn,Ie=n,ka(t,2),Mn=a,Ie=r),!c&&ji||Mh(t,c)),u&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,wu(t,a))));break;case 19:Gn(n,t,a),Vn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,wu(t,n)));break;case 30:u&512&&(Ie||r===null||Cn(r,r.return)),u=hm(),c=Yo,g=(a&335544064)===a,E=t.memoizedProps,Yo=g&&oa(E.default,E.update)!=="none",Gn(n,t,a),Vn(t),g&&r!==null&&Ne&&(t.flags|=4),Yo=c,Ne=u;break;case 21:break;case 7:u&512&&(Ie||r===null||Cn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:Gn(n,t,a),Vn(t)}}function Vn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(D_(r)){a=r;break}r=r.return}r=null;for(var u=t.return;u!==null;){if(ch(u)){var c=u.stateNode;r===null?r=[c]:r.push(c)}if(uh(u))break;u=u.return}var g=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var E=a.stateNode,L=dh(t);Eu(t,L,E,g);break;case 5:var K=a.stateNode;a.flags&32&&(nr(K,""),a.flags&=-33);var st=dh(t);Eu(t,st,K,g);break;case 3:case 4:var gt=a.stateNode.containerInfo,j=dh(t);ph(t,j,gt,g);break;default:throw Error(s(161))}}catch(et){Fe(t,t.return,et)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function q_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;q_(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Br=!0,n.reset(),Br=!1),t=t.sibling}}function yr(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)Y_(n,t),n=n.sibling;else I_(n)}function Y_(t,n){var a=t.alternate;if(a===null)mh(t,!1);else switch(t.tag){case 3:if(yh=qi=!1,L_(),yr(n,t),!qi&&!Ru){if(t=ki,t!==null)for(var r=0;r<t.length;r+=3){a=t[r];var u=t[r+1];Ov(a,t[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+u+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),yh=!0}ki=null;break;case 5:yr(n,t);break;case 4:r=qi,qi=!1,yr(n,t),qi&&(Ru=!0),qi=r;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?mh(t,!1):yr(n,t));break;case 30:r=qi,u=L_(),qi=!1,yr(n,t),qi&&(t.flags|=4);var c=t.memoizedProps,g=t.stateNode;n=ra(c,g),g=ra(a.memoizedProps,g);var E=oa(c.default,c.update);E==="none"?n=!1:(c=a.memoizedState,a.memoizedState=null,a=t.child,qn=0,n=xh(t,a,n,g,E,c,!0),qn!==(c===null?0:c.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Cr(t,t.memoizedProps.onUpdate),ki=u):u!==null&&(u.push.apply(u,ki),ki=u),qi=(t.flags&32)!==0?!0:r;break;default:yr(n,t)}}function Yi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)F_(t,n.alternate,n),n=n.sibling}function ka(t,n){for(t=t.child;t!==null;){var a=t,r=n;switch(a.tag){case 0:case 11:case 14:case 15:Va(4,a,a.return),ka(a,r);break;case 1:Cn(a,a.return);var u=a.stateNode;typeof u.componentWillUnmount=="function"&&C_(a,a.return,u),ka(a,r);break;case 27:(r&2)!==0&&qv(a.stateNode,a.type,a.memoizedProps);case 5:Cn(a,a.return),a.tag!==5&&a.tag!==27||qo(a),ka(a,r);break;case 6:qo(a);break;case 26:Cn(a,a.return),u=a.stateNode,a.memoizedState!==null||u===null||Ie||u.parentNode.removeChild(u),ka(a,r);break;case 22:a.memoizedState===null&&ka(a,r);break;case 30:Cn(a,a.return),ka(a,r);break;case 7:Cn(a,a.return);default:ka(a,r)}t=t.sibling}}function Ci(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,u=t,c=n,g=c.flags,E=(a&1)!==0;switch(c.tag){case 0:case 11:case 15:Ci(u,c,a),jo(4,c);break;case 1:if(Ci(u,c,a),r=c,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(st){Fe(r,r.return,st)}if(r=c,u=r.updateQueue,u!==null){var L=r.stateNode;try{var K=u.shared.hiddenCallbacks;if(K!==null)for(u.shared.hiddenCallbacks=null,u=0;u<K.length;u++)mg(K[u],L)}catch(st){Fe(r,r.return,st)}}E&&g&64&&R_(c),Vi(c,c.return);break;case 27:(a&2)!==0&&N_(c);case 5:c.tag!==5&&c.tag!==27||w_(c),Ci(u,c,a),E&&r===null&&g&4&&fh(c),Vi(c,c.return);break;case 6:w_(c);break;case 26:L=c.stateNode,c.memoizedState!==null||L===null||Mn||od(nl(L.ownerDocument),c.type,L),Ci(u,c,a),E&&r===null&&g&4&&fh(c),Vi(c,c.return);break;case 12:Ci(u,c,a);break;case 31:Ci(u,c,a),E&&g&4&&k_(u,c);break;case 13:Ci(u,c,a),E&&g&4&&X_(u,c);break;case 22:c.memoizedState===null&&Ci(u,c,a),Vi(c,c.return);break;case 30:Ci(u,c,a),Vi(c,c.return);break;case 7:Vi(c,c.return);default:Ci(u,c,a)}n=n.sibling}}function Th(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Uo(a))}function bh(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Uo(t))}function _i(t,n,a,r){var u=(a&335544064)===a;if(n.subtreeFlags&(u?10262:10256))for(n=n.child;n!==null;)W_(t,n,a,r),n=n.sibling;else u&&z_(n)}function W_(t,n,a,r){var u=(a&335544064)===a;u&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Au(n);var c=n.flags;switch(n.tag){case 0:case 11:case 15:_i(t,n,a,r),c&2048&&jo(9,n);break;case 1:_i(t,n,a,r);break;case 3:_i(t,n,a,r),u&&yh&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),c&2048&&(c=null,n.alternate!==null&&(c=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==c&&(n.refCount++,c!=null&&Uo(c)));break;case 12:if(c&2048){_i(t,n,a,r),c=n.stateNode;try{var g=n.memoizedProps,E=g.id,L=g.onPostCommit;typeof L=="function"&&L(E,n.alternate===null?"mount":"update",c.passiveEffectDuration,-0)}catch(K){Fe(n,n.return,K)}}else _i(t,n,a,r);break;case 31:_i(t,n,a,r);break;case 13:_i(t,n,a,r);break;case 23:break;case 22:g=n.stateNode,E=n.alternate,n.memoizedState!==null?(u&&E!==null&&E.memoizedState===null&&Au(E),g._visibility&2?_i(t,n,a,r):Wo(t,n)):(u&&E!==null&&E.memoizedState!==null&&Au(n),g._visibility&2?_i(t,n,a,r):(g._visibility|=2,Mr(t,n,a,r,(n.subtreeFlags&10256)!==0||!1))),c&2048&&Th(E,n);break;case 24:_i(t,n,a,r),c&2048&&bh(n.alternate,n);break;case 30:u&&(c=n.alternate,c!==null&&(Xi(c.child,!0),Xi(n.child,!0))),_i(t,n,a,r);break;default:_i(t,n,a,r)}}function Mr(t,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=t,g=n,E=a,L=r,K=g.flags;switch(g.tag){case 0:case 11:case 15:Mr(c,g,E,L,u),jo(8,g);break;case 23:break;case 22:var st=g.stateNode;g.memoizedState!==null?st._visibility&2?Mr(c,g,E,L,u):Wo(c,g):(st._visibility|=2,Mr(c,g,E,L,u)),u&&K&2048&&Th(g.alternate,g);break;case 24:Mr(c,g,E,L,u),u&&K&2048&&bh(g.alternate,g);break;default:Mr(c,g,E,L,u)}n=n.sibling}}function Wo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,u=r.flags;switch(r.tag){case 22:Wo(a,r),u&2048&&Th(r.alternate,r);break;case 24:Wo(a,r),u&2048&&bh(r.alternate,r);break;default:Wo(a,r)}n=n.sibling}}var Us=8192;function Ls(t,n,a){if(t.subtreeFlags&Us)for(t=t.child;t!==null;)Z_(t,n,a),t=t.sibling}function Z_(t,n,a){switch(t.tag){case 26:Ls(t,n,a),t.flags&Us&&(t.memoizedState!==null?VM(a,Ri,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&n0(a,t)));break;case 5:Ls(t,n,a),t.flags&Us&&(t=t.stateNode,(n&335544128)===n&&n0(a,t));break;case 3:case 4:var r=Ri;Ri=nl(t.stateNode.containerInfo),Ls(t,n,a),Ri=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Us,Us=16777216,Ls(t,n,a),Us=r):Ls(t,n,a));break;case 30:if((t.flags&Us)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var u=t.stateNode;u.paired=null,ni===null&&(ni=new Map),ni.set(r,u)}Ls(t,n,a);break;default:Ls(t,n,a)}}function K_(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Zo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];En=r,J_(r,t)}K_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Q_(t),t=t.sibling}function Q_(t){switch(t.tag){case 0:case 11:case 15:Zo(t),t.flags&2048&&Va(9,t,t.return);break;case 3:Zo(t);break;case 12:Zo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Du(t)):Zo(t);break;default:Zo(t)}}function Du(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];En=r,J_(r,t)}K_(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Va(8,n,n.return),Du(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Du(n));break;default:Du(n)}t=t.sibling}}function J_(t,n){for(;En!==null;){var a=En;switch(a.tag){case 0:case 11:case 15:Va(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Uo(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,En=r;else t:for(a=t;En!==null;){r=En;var u=r.sibling,c=r.return;if(G_(r),r===a){En=null;break t}if(u!==null){u.return=c,En=u;break t}En=c}}}var Iy={getCacheForType:function(t){var n=bn(cn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return bn(cn).controller.signal}},By=typeof WeakMap=="function"?WeakMap:Map,Pe=0,Ye=null,Se=null,Te=0,Be=0,ii=null,Xa=!1,Er=!1,Ah=!1,ga=0,rn=0,ja=0,Os=0,Nu=0,ai=0,Tr=0,Ko=null,Wn=null,Rh=!1,Uu=0,$_=0,Lu=1/0,Ou=null,qa=null,nn=0,wi=null,Ps=null,Wi=0,Ch=0,wh=null,tv=null,br=null,Ar=null,Rr=null,Qo=0,Pu=null;function si(){return(Pe&2)!==0&&Te!==0?Te&-Te:Et.T!==null?Fh():Tt()}function ev(){if(ai===0)if((Te&536870912)===0||_e){var t=ia;ia<<=1,(ia&3932160)===0&&(ia=262144),ai=t}else ai=536870912;return t=An.current,t!==null&&(t.flags|=32),ai}function Cr(t,n){if(n!=null){var a=t.stateNode,r=a.ref;r===null&&(r=a.ref=Pv(ra(t.memoizedProps,a))),Ar===null&&(Ar=[]),Ar.push(n.bind(null,r))}}function Zn(t,n,a){(t===Ye&&(Be===2||Be===9)||t.cancelPendingCommit!==null)&&(wr(t,0),Ya(t,Te,ai,!1)),gs(t,a),((Pe&2)===0||t!==Ye)&&(t===Ye&&((Pe&2)===0&&(Os|=a),rn===4&&Ya(t,Te,ai,!1)),Zi(t))}function nv(t,n,a){if((Pe&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ra(t,n),u=r?Gy(t,n):Nh(t,n,!0),c=r;do{if(u===0){Er&&!r&&Ya(t,n,0,!1);break}else{if(a=t.current.alternate,c&&!Fy(a)){u=Nh(t,n,!1),c=!1;continue}if(u===2){if(c=n,t.errorRecoveryDisabledLanes&c)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var E=t;u=Ko;var L=E.current.memoizedState.isDehydrated;if(L&&(wr(E,g).flags|=256),g=Nh(E,g,!1),g!==2&&g!==6){if(Ah&&!L){E.errorRecoveryDisabledLanes|=c,Os|=c,u=4;break t}c=Wn,Wn=u,c!==null&&(Wn===null?Wn=c:Wn.push.apply(Wn,c))}u=g}if(c=!1,u!==2)continue}}if(u===1){wr(t,0),Ya(t,n,0,!0);break}t:{switch(r=t,c=u,c){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:Ya(r,n,ai,!Xa);break t;case 2:Wn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Uu+300-k(),10<u)){if(Ya(r,n,ai,!Xa),ms(r,0,!0)!==0)break t;Wi=n,r.timeoutHandle=Kh(iv.bind(null,r,a,Wn,Ou,Rh,n,ai,Os,Tr,Xa,c,"Throttled",-0,0),u);break t}iv(r,a,Wn,Ou,Rh,n,ai,Os,Tr,Xa,c,null,-0,0)}}break}while(!0);Zi(t)}function iv(t,n,a,r,u,c,g,E,L,K,st,gt,j,et){t.timeoutHandle=-1;var Nt=n.subtreeFlags,jt=(c&335544064)===c;if(gt=null,(jt||Nt&8192||(Nt&16785408)===16785408)&&(gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Fi},ni=null,Z_(n,c,gt),jt&&(Nt=gt,jt=t.containerInfo,jt=(jt.nodeType===9?jt:jt.ownerDocument).__reactViewTransition,jt!=null&&(Nt.count++,Nt.waitingForViewTransition=!0,Nt=sl.bind(Nt),jt.finished.then(Nt,Nt))),Nt=(c&62914560)===c?Uu-k():(c&4194048)===c?$_-k():0,Nt=kM(gt,Nt),Nt!==null)){Wi=c,t.cancelPendingCommit=Nt(fv.bind(null,t,n,c,a,r,u,g,E,L,K,st,gt,null,j,et)),Ya(t,c,g,!K);return}fv(t,n,c,a,r,u,g,E,L,K,st,gt)}function Fy(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],c=u.getSnapshot;u=u.value;try{if(!ti(c(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ya(t,n,a,r){n=Ul(t,n),n&=~Nu,n&=~Os,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var u=n;0<u;){var c=31-Nn(u),g=1<<c;r[c]=-1,u&=~g}a!==0&&R(t,a,n)}function zu(){return(Pe&6)===0?(Jo(0),!1):!0}function Dh(){if(Se!==null){if(Be===0)var t=Se.return;else t=Se,ca=Ms=null,Bf(t),mr=null,Po=0,t=Se;for(;t!==null;)A_(t.alternate,t),t=t.return;Se=null}}function wr(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,uM(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Wi=0,Dh(),Ye=t,Se=a=la(t.current,null),Te=n,Be=0,ii=null,Xa=!1,Er=Ra(t,n),Ah=!1,Tr=ai=Nu=Os=ja=rn=0,Wn=Ko=null,Rh=!1,ga=Ul(t,n),Xl(),a}function av(t,n){he=null,Et.H=mu,n===pr||n===eu?(n=fg(),Be=3):n===bf?(n=fg(),Be=4):Be=n===$f?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ii=n,Se===null&&(rn=1,gu(t,di(n,t.current)))}function sv(){var t=An.current;return t===null?!0:(Te&4194048)===Te?Ln===null:(Te&62914560)===Te||(Te&536870912)!==0?t===Ln:!1}function rv(){var t=Et.H;return Et.H=mu,t===null?mu:t}function ov(){var t=Et.A;return Et.A=Iy,t}function Iu(){rn=4,Xa||(Te&4194048)!==Te&&An.current!==null||(Er=!0),(ja&134217727)===0&&(Os&134217727)===0||Ye===null||Ya(Ye,Te,ai,!1)}function Nh(t,n,a){var r=Pe;Pe|=2;var u=rv(),c=ov();(Ye!==t||Te!==n)&&(Ou=null,wr(t,n)),n=!1;var g=rn;t:do try{if(Be!==0&&Se!==null){var E=Se,L=ii;switch(Be){case 8:Dh(),g=6;break t;case 3:case 2:case 9:case 6:An.current===null&&(n=!0);var K=Be;if(Be=0,ii=null,Dr(t,E,L,K),a&&Er){g=0;break t}break;default:K=Be,Be=0,ii=null,Dr(t,E,L,K)}}Hy(),g=rn;break}catch(st){av(t,st)}while(!0);return n&&t.shellSuspendCounter++,ca=Ms=null,Pe=r,Et.H=u,Et.A=c,Se===null&&(Ye=null,Te=0,Xl()),g}function Hy(){for(;Se!==null;)lv(Se)}function Gy(t,n){var a=Pe;Pe|=2;var r=rv(),u=ov();Ye!==t||Te!==n?(Ou=null,Lu=k()+500,wr(t,n)):Er=Ra(t,n);t:do try{if(Be!==0&&Se!==null){n=Se;var c=ii;e:switch(Be){case 1:Be=0,ii=null,Dr(t,n,c,1);break;case 2:case 9:if(ug(c)){Be=0,ii=null,uv(n);break}n=function(){Be!==2&&Be!==9||Ye!==t||(Be=7),Zi(t)},c.then(n,n);break t;case 3:Be=7;break t;case 4:Be=5;break t;case 7:ug(c)?(Be=0,ii=null,uv(n)):(Be=0,ii=null,Dr(t,n,c,7));break;case 5:var g=null;switch(Se.tag){case 26:g=Se.memoizedState;case 5:case 27:var E=Se;if(g?t0(g):E.stateNode.complete){Be=0,ii=null;var L=E.sibling;if(L!==null)Se=L;else{var K=E.return;K!==null?(Se=K,Bu(K)):Se=null}break e}}Be=0,ii=null,Dr(t,n,c,5);break;case 6:Be=0,ii=null,Dr(t,n,c,6);break;case 8:Dh(),rn=6;break t;default:throw Error(s(462))}}Vy();break}catch(st){av(t,st)}while(!0);return ca=Ms=null,Et.H=r,Et.A=u,Pe=a,Se!==null?0:(Ye=null,Te=0,Xl(),rn)}function Vy(){for(;Se!==null&&!Pt();)lv(Se)}function lv(t){var n=T_(t.alternate,t,ga);t.memoizedProps=t.pendingProps,n===null?Bu(t):Se=n}function uv(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=__(a,n,n.pendingProps,n.type,void 0,Te);break;case 11:n=__(a,n,n.pendingProps,n.type.render,n.ref,Te);break;case 5:Bf(n);var r=n;r===yn&&(_e?(Kl(r),r.tag===5&&r.stateNode!=null&&(Qe=r.stateNode)):(Kl(r),_e=!0));default:A_(a,n),n=Se=Jm(n,ga),n=T_(a,n,ga)}t.memoizedProps=t.pendingProps,n===null?Bu(t):Se=n}function Dr(t,n,a,r){ca=Ms=null,Bf(n),mr=null,Po=0;var u=n.return;try{if(wy(t,u,n,a,Te)){rn=1,gu(t,di(a,t.current)),Se=null;return}}catch(c){if(u!==null)throw Se=u,c;rn=1,gu(t,di(a,t.current)),Se=null;return}n.flags&32768?(_e||r===1?t=!0:Er||(Te&536870912)!==0?t=!1:(Xa=t=!0,(r===2||r===9||r===3||r===6)&&(r=An.current,r!==null&&r.tag===13&&(r.flags|=16384))),cv(n,t)):Bu(n)}function Bu(t){var n=t;do{if((n.flags&32768)!==0){cv(n,Xa);return}t=n.return;var a=Ly(n.alternate,n,ga);if(a!==null){Se=a;return}if(n=n.sibling,n!==null){Se=n;return}Se=n=t}while(n!==null);rn===0&&(rn=5)}function cv(t,n){do{var a=Oy(t.alternate,t);if(a!==null){a.flags&=32767,Se=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Se=t;return}Se=t=a}while(t!==null);rn=6,Se=null}function fv(t,n,a,r,u,c,g,E,L,K,st,gt){t.cancelPendingCommit=null;do Fu();while(nn!==0);if((Pe&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));t===Ye&&(Se=Ye=null,Te=0),Ps=n,wi=t,Wi=a,wh=u,tv=r,ky(t,n,a,g,E,L,gt)}}function ky(t,n,a,r,u,c,g){var E=n.lanes|n.childLanes;if(Ch=E,E|=hf,Vc(t,a,E,r,u,c),Ar=null,(a&335544064)===a?(Rr=_y(t),r=10262):(Rr=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,Zy(yt,function(){return Ph(),null})):(t.callbackNode=null,t.callbackPriority=0),Tu=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=Et.T,Et.T=null,u=qt.p,qt.p=2,c=Pe,Pe|=4;try{Py(t,n,a)}finally{Pe=c,qt.p=u,Et.T=r}}nn=1,Tu?br=mM(g,t.containerInfo,Rr,Uh,Lh,jy,Oh,Ph,Xy):(Uh(),Lh(),Oh())}function Xy(t){if(nn!==0){var n=wi.onRecoverableError;n(t,{componentStack:null})}}function jy(){nn===3&&(nn=0,Y_(Ps,wi),nn=4)}function Uh(){if(nn===1){nn=0;var t=wi,n=Ps,a=Wi,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=Et.T,Et.T=null;var u=qt.p;qt.p=2;var c=Pe;Pe|=4;try{Yo=Ru=!1,j_(n,t,a),a=Yh;var g=Vm(t.containerInfo),E=a.focusedElem,L=a.selectionRange;if(g!==E&&E&&E.ownerDocument&&Gm(E.ownerDocument.documentElement,E)){if(L!==null&&of(E)){var K=L.start,st=L.end;if(st===void 0&&(st=K),"selectionStart"in E)E.selectionStart=K,E.selectionEnd=Math.min(st,E.value.length);else{var gt=E.ownerDocument||document,j=gt&&gt.defaultView||window;if(j.getSelection){var et=j.getSelection(),Nt=E.textContent.length,jt=Math.min(L.start,Nt),de=L.end===void 0?jt:Math.min(L.end,Nt);!et.extend&&jt>de&&(g=de,de=jt,jt=g);var Z=Hm(E,jt),G=Hm(E,de);if(Z&&G&&(et.rangeCount!==1||et.anchorNode!==Z.node||et.anchorOffset!==Z.offset||et.focusNode!==G.node||et.focusOffset!==G.offset)){var $=gt.createRange();$.setStart(Z.node,Z.offset),et.removeAllRanges(),jt>de?(et.addRange($),et.extend(G.node,G.offset)):($.setEnd(G.node,G.offset),et.addRange($))}}}}for(gt=[],et=E;et=et.parentNode;)et.nodeType===1&&gt.push({element:et,left:et.scrollLeft,top:et.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<gt.length;E++){var pt=gt[E];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}Br=!!qh,Yh=qh=null}finally{Pe=c,qt.p=u,Et.T=r}}t.current=n,nn=2}}function Lh(){if(nn===2){nn=0;var t=wi,n=Ps,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=Et.T,Et.T=null;var r=qt.p;qt.p=2;var u=Pe;Pe|=4;try{F_(t,n.alternate,n)}finally{Pe=u,qt.p=r,Et.T=a}}nn=3}}function Oh(){if(nn===4||nn===3){nn=0;var t=br;br=null,fe();var n=wi,a=Ps,r=Wi,u=tv,c=(r&335544064)===r?10262:10256;if((a.subtreeFlags&c)!==0||(a.flags&c)!==0?nn=5:(nn=0,Ps=wi=null,hv(n,n.pendingLanes)),c=n.pendingLanes,c===0&&(qa=null),J(r),a=a.stateNode,en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(Ee,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=Et.T,c=qt.p,qt.p=2,Et.T=null;try{for(var g=n.onRecoverableError,E=0;E<u.length;E++){var L=u[E];g(L.value,{componentStack:L.stack})}}finally{Et.T=a,qt.p=c}}if(u=Ar,g=Rr,Rr=null,u!==null&&(Ar=null,g===null&&(g=[]),t!==null))for(L=0;L<u.length;L++)a=(0,u[L])(g),a!==void 0&&t.finished.finally(a);(Wi&3)!==0&&Fu(),Zi(n),c=n.pendingLanes,(r&261930)!==0&&(c&42)!==0?n===Pu?Qo++:(Qo=0,Pu=n):(Qo=0,Pu=null),Jo(0)}}function hv(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Uo(n)))}function Fu(){return br!==null&&(br.skipTransition(),br=null),Uh(),Lh(),Oh(),Ph()}function Ph(){if(nn!==5)return!1;var t=wi,n=Ch;Ch=0;var a=J(Wi),r=Et.T,u=qt.p;try{qt.p=32>a?32:a,Et.T=null,a=wh,wh=null;var c=wi,g=Wi;if(nn=0,Ps=wi=null,Wi=0,(Pe&6)!==0)throw Error(s(331));var E=Pe;if(Pe|=4,Q_(c.current),W_(c,c.current,g,a),Pe=E,Jo(0,!1),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(Ee,c)}catch{}return!0}finally{qt.p=u,Et.T=r,hv(t,n)}}function dv(t,n,a){n=di(a,n),n=Jf(t.stateNode,n,2),t=Ba(t,n,2),t!==null&&(gs(t,2),Zi(t))}function Fe(t,n,a){if(t.tag===3)dv(t,t,a);else for(;n!==null;){if(n.tag===3){dv(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qa===null||!qa.has(r))){t=di(a,t),a=u_(2),r=Ba(n,a,2),r!==null&&(c_(a,r,n,t),gs(r,2),Zi(r));break}}n=n.return}}function zh(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new By;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(Ah=!0,u.add(a),t=qy.bind(null,t,n,a),n.then(t,t))}function qy(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ye===t&&(Te&a)===a&&((rn===4||rn===3&&(Te&62914560)===Te&&300>k()-Uu)&&(Pe&2)===0?wr(t,0):Nu|=a,Tr===Te&&(Tr=0)),Zi(t)}function pv(t,n){n===0&&(n=Ll()),t=xs(t,n),t!==null&&(gs(t,n),Zi(t))}function Yy(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),pv(t,a)}function Wy(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),pv(t,a)}function Zy(t,n){return ne(t,n)}var Nr=null,Ur=null,Ih=!1,Hu=!1,Bh=!1,Wa=0;function Zi(t){t!==Ur&&t.next===null&&(Ur===null?Nr=Ur=t:Ur=Ur.next=t),Hu=!0,Ih||(Ih=!0,Qy())}function Jo(t,n){if(!Bh&&Hu){Bh=!0;do for(var a=!1,r=Nr;r!==null;){if(t!==0){var u=r.pendingLanes;if(u===0)var c=0;else{var g=r.suspendedLanes,E=r.pingedLanes;c=(1<<31-Nn(42|t)+1)-1,c&=u&~(g&~E),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,vv(r,c))}else c=Te,c=ms(r,r===Ye?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(c&3)===0||Ra(r,c)||(a=!0,vv(r,c));r=r.next}while(a);Bh=!1}}function Ky(){mv()}function mv(){Hu=Ih=!1;var t=0;Wa!==0&&lM()&&(t=Wa);for(var n=k(),a=null,r=Nr;r!==null;){var u=r.next,c=gv(r,n);c===0?(r.next=null,a===null?Nr=u:a.next=u,u===null&&(Ur=a)):(a=r,(t!==0||(c&3)!==0)&&(Hu=!0)),r=u}nn!==0&&nn!==5||Jo(t),Wa!==0&&(Wa=0)}function gv(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,u=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var g=31-Nn(c),E=1<<g,L=u[g];L===-1?((E&a)===0||(E&r)!==0)&&(u[g]=Gc(E,n)):L<=n&&(t.expiredLanes|=E),c&=~E}if(n=Ye,a=Te,a=ms(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Be===2||Be===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Zt(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ra(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&Zt(r),J(a)){case 2:case 8:a=Vt;break;case 32:a=yt;break;case 268435456:a=Yt;break;default:a=yt}return r=_v.bind(null,t),a=ne(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&Zt(r),t.callbackPriority=2,t.callbackNode=null,2}function _v(t,n){if(nn!==0&&nn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Fu()&&t.callbackNode!==a)return null;var r=Te;return r=ms(t,t===Ye?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(nv(t,r,n),gv(t,k()),t.callbackNode!=null&&t.callbackNode===a?_v.bind(null,t):null)}function vv(t,n){if(Fu())return null;nv(t,n,!0)}function Qy(){cM(function(){(Pe&6)!==0?ne(Dt,Ky):mv()})}function Fh(){if(Wa===0){var t=bs;t===0&&(t=ds,ds<<=1,(ds&261888)===0&&(ds=256)),Wa=t}return Wa}function xv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:zl(t)}function Jy(t,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var c=xv((u[Xt]||null).action),g=r.submitter;g&&(n=(n=g[Xt]||null)?xv(n.formAction):g.getAttribute("formAction"),n!==null&&(c=n,g=null));var E=new Hl("action","action",null,r,u);t.push({event:E,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Wa!==0){var L=new FormData(u,g);Yf(a,{pending:!0,data:L,method:u.method,action:c},null,L)}}else typeof c=="function"&&(E.preventDefault(),L=new FormData(u,g),Yf(a,{pending:!0,data:L,method:u.method,action:c},c,L))},currentTarget:u}]})}}for(var Hh=0;Hh<ff.length;Hh++){var Gh=ff[Hh],$y=Gh.toLowerCase(),tM=Gh[0].toUpperCase()+Gh.slice(1);bi($y,"on"+tM)}bi(jm,"onAnimationEnd"),bi(qm,"onAnimationIteration"),bi(Ym,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(uy,"onTransitionRun"),bi(cy,"onTransitionStart"),bi(fy,"onTransitionCancel"),bi(Wm,"onTransitionEnd"),an("onMouseEnter",["mouseout","mouseover"]),an("onMouseLeave",["mouseout","mouseover"]),an("onPointerEnter",["pointerout","pointerover"]),an("onPointerLeave",["pointerout","pointerover"]),un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),un("onBeforeInput",["compositionend","keypress","textInput","paste"]),un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),eM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat($o));function Sv(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],u=r.event;r=r.listeners;t:{var c=void 0;if(n)for(var g=r.length-1;0<=g;g--){var E=r[g],L=E.instance,K=E.currentTarget;if(E=E.listener,L!==c&&u.isPropagationStopped())break t;c=E,u.currentTarget=K;try{c(u)}catch(st){kl(st)}u.currentTarget=null,c=L}else for(g=0;g<r.length;g++){if(E=r[g],L=E.instance,K=E.currentTarget,E=E.listener,L!==c&&u.isPropagationStopped())break t;c=E,u.currentTarget=K;try{c(u)}catch(st){kl(st)}u.currentTarget=null,c=L}}}}function ye(t,n){var a=n[$t];a===void 0&&(a=n[$t]=new Set);var r=t+"__bubble";a.has(r)||(yv(n,t,2,!1),a.add(r))}function Vh(t,n,a){var r=0;n&&(r|=4),yv(a,t,r,n)}var Gu="_reactListening"+Math.random().toString(36).slice(2);function kh(t){if(!t[Gu]){t[Gu]=!0,Ke.forEach(function(a){a!=="selectionchange"&&(eM.has(a)||Vh(a,!1,t),Vh(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Gu]||(n[Gu]=!0,Vh("selectionchange",!1,n))}}function yv(t,n,a,r){switch(c0(n)){case 2:var u=YM;break;case 8:u=WM;break;default:u=ud}a=u.bind(null,n,a,t),u=void 0,!Kc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Xh(t,n,a,r,u){var c=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var E=r.stateNode.containerInfo;if(E===u)break;if(g===4)for(g=r.return;g!==null;){var L=g.tag;if((L===3||L===4)&&g.stateNode.containerInfo===u)return;g=g.return}for(;E!==null;){if(g=Oe(E),g===null)return;if(L=g.tag,L===5||L===6||L===26||L===27){r=c=g;continue t}E=E.parentNode}}r=r.return}ym(function(){var K=c,st=Wc(a),gt=[];t:{var j=Zm.get(t);if(j!==void 0){var et=Hl,Nt=t;switch(t){case"keypress":if(Bl(a)===0)break t;case"keydown":case"keyup":et=FS;break;case"focusin":Nt="focus",et=tf;break;case"focusout":Nt="blur",et=tf;break;case"beforeblur":case"afterblur":et=tf;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":et=Tm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":et=RS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":et=XS;break;case jm:case qm:case Ym:et=DS;break;case Wm:et=qS;break;case"scroll":case"scrollend":et=bS;break;case"wheel":et=WS;break;case"copy":case"cut":case"paste":et=US;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":et=Am;break;case"submit":et=VS;break;case"toggle":case"beforetoggle":et=KS}var jt=(n&4)!==0,de=!jt&&(t==="scroll"||t==="scrollend"),Z=jt?j!==null?j+"Capture":null:j;jt=[];for(var G=K,$;G!==null;){var pt=G;if($=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||$===null||Z===null||(pt=yo(G,Z),pt!=null&&jt.push(tl(G,pt,$))),de)break;G=G.return}0<jt.length&&(j=new et(j,Nt,null,a,st),gt.push({event:j,listeners:jt}))}}if((n&7)===0){t:{if(et=t==="mouseover"||t==="pointerover",j=t==="mouseout"||t==="pointerout",et&&a!==Yc&&(Nt=a.relatedTarget||a.fromElement)&&(Oe(Nt)||Nt[ee]))break t;(j||et)&&(Nt=st.window===st?st:(et=st.ownerDocument)?et.defaultView||et.parentWindow:window,j?(et=a.relatedTarget||a.toElement,j=K,et=et?Oe(et):null,et!==null&&(de=f(et),jt=et.tag,et!==de||jt!==5&&jt!==27&&jt!==6)&&(et=null)):(j=null,et=K),j!==et&&(jt=Tm,pt="onMouseLeave",Z="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(jt=Am,pt="onPointerLeave",Z="onPointerEnter",G="pointer"),de=j==null?Nt:gn(j),$=et==null?Nt:gn(et),Nt=new jt(pt,G+"leave",j,a,st),Nt.target=de,Nt.relatedTarget=$,pt=null,Oe(st)===K&&(jt=new jt(Z,G+"enter",et,a,st),jt.target=$,jt.relatedTarget=de,pt=jt),de=pt,jt=j&&et?V(j,et,nM):null,j!==null&&Mv(gt,Nt,j,jt,!1),et!==null&&de!==null&&Mv(gt,de,et,jt,!0)))}t:{if(j=K?gn(K):window,et=j.nodeName&&j.nodeName.toLowerCase(),et==="select"||et==="input"&&j.type==="file")var Ht=Om;else if(Um(j))if(Pm)Ht=ry;else{Ht=ay;var be=iy}else et=j.nodeName,!et||et.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?K&&qc(K.elementType)&&(Ht=Om):Ht=sy;if(Ht&&(Ht=Ht(t,K))){Lm(gt,Ht,a,st);break t}be&&be(t,j,K)}switch(be=K?gn(K):window,t){case"focusin":(Um(be)||be.contentEditable==="true")&&(rr=be,lf=K,wo=null);break;case"focusout":wo=lf=rr=null;break;case"mousedown":uf=!0;break;case"contextmenu":case"mouseup":case"dragend":uf=!1,km(gt,a,st);break;case"selectionchange":if(ly)break;case"keydown":case"keyup":km(gt,a,st)}var Jt;if(nf)t:{switch(t){case"compositionstart":var ae="onCompositionStart";break t;case"compositionend":ae="onCompositionEnd";break t;case"compositionupdate":ae="onCompositionUpdate";break t}ae=void 0}else sr?Dm(t,a)&&(ae="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ae="onCompositionStart");ae&&(Rm&&a.locale!=="ko"&&(sr||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&sr&&(Jt=Mm()):(wa=st,Qc="value"in wa?wa.value:wa.textContent,sr=!0)),be=Vu(K,ae),0<be.length&&(ae=new bm(ae,t,null,a,st),gt.push({event:ae,listeners:be}),Jt?ae.data=Jt:(Jt=Nm(a),Jt!==null&&(ae.data=Jt)))),(Jt=JS?$S(t,a):ty(t,a))&&(ae=Vu(K,"onBeforeInput"),0<ae.length&&(be=new bm("onBeforeInput","beforeinput",null,a,st),gt.push({event:be,listeners:ae}),be.data=Jt)),Jy(gt,t,K,a,st)}Sv(gt,n)})}function tl(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Vu(t,n){for(var a=n+"Capture",r=[];t!==null;){var u=t,c=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||c===null||(u=yo(t,a),u!=null&&r.unshift(tl(t,u,c)),u=yo(t,n),u!=null&&r.push(tl(t,u,c))),t.tag===3)return r;t=t.return}return[]}function nM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Mv(t,n,a,r,u){for(var c=n._reactName,g=[];a!==null&&a!==r;){var E=a,L=E.alternate,K=E.stateNode;if(E=E.tag,L!==null&&L===r)break;E!==5&&E!==26&&E!==27||K===null||(L=K,u?(K=yo(a,c),K!=null&&g.unshift(tl(a,K,L))):u||(K=yo(a,c),K!=null&&g.push(tl(a,K,L)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var iM=/\r\n?/g,aM=/\u0000|\uFFFD/g;function Ev(t){return(typeof t=="string"?t:""+t).replace(iM,`
`).replace(aM,"")}function Tv(t,n){return n=Ev(n),Ev(t)===n}function He(t,n,a,r,u,c){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||nr(t,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&nr(t,""+r);else return;break;case"className":Pl(t,"class",r);break;case"tabIndex":Pl(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Pl(t,a,r);break;case"style":xm(t,r,c);return;case"data":if(n!=="object"){Pl(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=zl(r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(n!=="input"&&He(t,n,"name",u.name,u,null),He(t,n,"formEncType",u.formEncType,u,null),He(t,n,"formMethod",u.formMethod,u,null),He(t,n,"formTarget",u.formTarget,u,null)):(He(t,n,"encType",u.encType,u,null),He(t,n,"method",u.method,u,null),He(t,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=zl(r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Fi);return;case"onScroll":r!=null&&ye("scroll",t);return;case"onScrollEnd":r!=null&&ye("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));c?.__html!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=zl(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":ye("beforetoggle",t),ye("toggle",t),Ol(t,"popover",r);break;case"xlinkActuate":aa(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":aa(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":aa(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":aa(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":aa(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":aa(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":aa(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":aa(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":aa(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Ol(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=ES.get(a)||a,Ol(t,a,r);else return}Ne=!0}function jh(t,n,a,r,u,c){switch(a){case"style":xm(t,r,c);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));c?.__html!==a&&(t.innerHTML=a)}}break;case"children":if(typeof r=="string")nr(t,r);else if(typeof r=="number"||typeof r=="bigint")nr(t,""+r);else return;break;case"onScroll":r!=null&&ye("scroll",t);return;case"onScrollEnd":r!=null&&ye("scrollend",t);return;case"onClick":r!=null&&(t.onclick=Fi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Bn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),c=a.slice(2,u?a.length-7:void 0),n=t[Xt]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(c,n,u),typeof r=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(c,r,u);break t}Ne=!0,a in t?t[a]=r:r===!0?t.setAttribute(a,""):Ol(t,a,r)}return}Ne=!0}function wn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",t),ye("load",t);var r=!1,u=!1,c;for(c in a)if(a.hasOwnProperty(c)){var g=a[c];if(g!=null)switch(c){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:He(t,n,c,g,a,null)}}u&&He(t,n,"srcSet",a.srcSet,a,null),r&&He(t,n,"src",a.src,a,null);return;case"input":ye("invalid",t);var E=c=g=u=null,L=null,K=null;for(r in a)if(a.hasOwnProperty(r)){var st=a[r];if(st!=null)switch(r){case"name":u=st;break;case"type":g=st;break;case"checked":L=st;break;case"defaultChecked":K=st;break;case"value":c=st;break;case"defaultValue":E=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,n));break;default:He(t,n,r,st,a,null)}}mm(t,c,E,L,K,g,u,!1);return;case"select":ye("invalid",t),r=g=c=null;for(u in a)if(a.hasOwnProperty(u)&&(E=a[u],E!=null))switch(u){case"value":c=E;break;case"defaultValue":g=E;break;case"multiple":r=E;default:He(t,n,u,E,a,null)}n=c,a=g,t.multiple=!!r,n!=null?er(t,!!r,n,!1):a!=null&&er(t,!!r,a,!0);return;case"textarea":ye("invalid",t),c=u=r=null;for(g in a)if(a.hasOwnProperty(g)&&(E=a[g],E!=null))switch(g){case"value":r=E;break;case"defaultValue":u=E;break;case"children":c=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:He(t,n,g,E,a,null)}_m(t,r,u,c);return;case"option":for(L in a)a.hasOwnProperty(L)&&(r=a[L],r!=null)&&(L==="selected"?t.selected=r&&typeof r!="function"&&typeof r!="symbol":He(t,n,L,r,a,null));return;case"dialog":ye("beforetoggle",t),ye("toggle",t),ye("cancel",t),ye("close",t);break;case"iframe":case"object":ye("load",t);break;case"video":case"audio":for(r=0;r<$o.length;r++)ye($o[r],t);break;case"image":ye("error",t),ye("load",t);break;case"details":ye("toggle",t);break;case"embed":case"source":case"link":ye("error",t),ye("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(K in a)if(a.hasOwnProperty(K)&&(r=a[K],r!=null))switch(K){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:He(t,n,K,r,a,null)}return;default:if(qc(n)){for(st in a)a.hasOwnProperty(st)&&(r=a[st],r!==void 0&&jh(t,n,st,r,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(r=a[E],r!=null&&He(t,n,E,r,a,null))}var sM={};function rM(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,c=null,g=null,E=null,L=null,K=null,st=null;for(et in a){var gt=a[et];if(a.hasOwnProperty(et)&&gt!=null)switch(et){case"checked":break;case"value":break;case"defaultValue":L=gt;default:r.hasOwnProperty(et)||He(t,n,et,null,r,gt)}}for(var j in r){var et=r[j];if(gt=a[j],r.hasOwnProperty(j)&&(et!=null||gt!=null))switch(j){case"type":et!==gt&&(Ne=!0),c=et;break;case"name":et!==gt&&(Ne=!0),u=et;break;case"checked":et!==gt&&(Ne=!0),K=et;break;case"defaultChecked":et!==gt&&(Ne=!0),st=et;break;case"value":et!==gt&&(Ne=!0),g=et;break;case"defaultValue":et!==gt&&(Ne=!0),E=et;break;case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(s(137,n));break;default:et!==gt&&He(t,n,j,et,r,gt)}}Xc(t,g,E,L,K,st,c,u);return;case"select":et=g=E=j=null;for(c in a)if(L=a[c],a.hasOwnProperty(c)&&L!=null)switch(c){case"value":break;case"multiple":et=L;default:r.hasOwnProperty(c)||He(t,n,c,null,r,L)}for(u in r)if(c=r[u],L=a[u],r.hasOwnProperty(u)&&(c!=null||L!=null))switch(u){case"value":c!==L&&(Ne=!0),j=c;break;case"defaultValue":c!==L&&(Ne=!0),E=c;break;case"multiple":c!==L&&(Ne=!0),g=c;default:c!==L&&He(t,n,u,c,r,L)}n=E,a=g,r=et,j!=null?er(t,!!a,j,!1):!!r!=!!a&&(n!=null?er(t,!!a,n,!0):er(t,!!a,a?[]:"",!1));return;case"textarea":et=j=null;for(E in a)if(u=a[E],a.hasOwnProperty(E)&&u!=null&&!r.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:He(t,n,E,null,r,u)}for(g in r)if(u=r[g],c=a[g],r.hasOwnProperty(g)&&(u!=null||c!=null))switch(g){case"value":u!==c&&(Ne=!0),j=u;break;case"defaultValue":u!==c&&(Ne=!0),et=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==c&&He(t,n,g,u,r,c)}gm(t,j,et);return;case"option":for(var Nt in a)j=a[Nt],a.hasOwnProperty(Nt)&&j!=null&&!r.hasOwnProperty(Nt)&&(Nt==="selected"?t.selected=!1:He(t,n,Nt,null,r,j));for(L in r)j=r[L],et=a[L],r.hasOwnProperty(L)&&j!==et&&(j!=null||et!=null)&&(L==="selected"?(j!==et&&(Ne=!0),t.selected=j&&typeof j!="function"&&typeof j!="symbol"):He(t,n,L,j,r,et));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var jt in a)j=a[jt],a.hasOwnProperty(jt)&&j!=null&&!r.hasOwnProperty(jt)&&He(t,n,jt,null,r,j);for(K in r)if(j=r[K],et=a[K],r.hasOwnProperty(K)&&j!==et&&(j!=null||et!=null))switch(K){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(s(137,n));break;default:He(t,n,K,j,r,et)}return;default:if(qc(n)){for(var de in a)j=a[de],a.hasOwnProperty(de)&&j!==void 0&&!r.hasOwnProperty(de)&&jh(t,n,de,void 0,r,j);for(st in r)j=r[st],et=a[st],!r.hasOwnProperty(st)||j===et||j===void 0&&et===void 0||jh(t,n,st,j,r,et);return}}for(var Z in a)j=a[Z],a.hasOwnProperty(Z)&&j!=null&&!r.hasOwnProperty(Z)&&He(t,n,Z,null,r,j);for(gt in r)j=r[gt],et=a[gt],!r.hasOwnProperty(gt)||j===et||j==null&&et==null||He(t,n,gt,j,r,et)}function bv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function oM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],c=u.transferSize,g=u.initiatorType,E=u.duration;if(c&&E&&bv(g)){for(g=0,E=u.responseEnd,r+=1;r<a.length;r++){var L=a[r],K=L.startTime;if(K>E)break;var st=L.transferSize,gt=L.initiatorType;st&&bv(gt)&&(L=L.responseEnd,g+=st*(L<E?1:(E-K)/(L-K)))}if(--r,n+=8*(c+g)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var qh=null,Yh=null;function el(t){return t.nodeType===9?t:t.ownerDocument}function Av(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Rv(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Cv(t,n,a,r){return a=el(a).createElement(t),a[wt]=r,a[Xt]=n,wn(a,t,n),De(a),a}function Wh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Zh=null;function lM(){var t=window.event;return t&&t.type==="popstate"?t===Zh?!1:(Zh=t,!0):(Zh=null,!1)}var Kh=typeof setTimeout=="function"?setTimeout:void 0,uM=typeof clearTimeout=="function"?clearTimeout:void 0,wv=typeof Promise=="function"?Promise:void 0,Dv=typeof requestAnimationFrame=="function"?requestAnimationFrame:Kh,cM=typeof queueMicrotask=="function"?queueMicrotask:typeof wv<"u"?function(t){return wv.resolve(null).then(t).catch(fM)}:Kh;function fM(t){setTimeout(function(){throw t})}function Za(t){return t==="head"}function Nv(t,n){var a=n,r=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(u),Fr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")ad(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,ad(a);for(var c=a.firstChild;c;){var g=c.nextSibling,E=c.nodeName;c[Le]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=g}}else a==="body"&&ad(t.ownerDocument.body);a=u}while(a);Fr(n)}function Uv(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function Lv(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var r=1;else for(var u=r=0;u<n.length;u++){var c=n[u];0<c.width&&0<c.height&&r++}r===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function Ov(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function hM(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function Qh(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return hM(n,a,t)}function dM(t){return t.documentElement.clientHeight}function pM(t){this.addEventListener("load",t),this.addEventListener("error",t)}function mM(t,n,a,r,u,c,g,E,L){var K=n.nodeType===9?n:n.ownerDocument;try{var st=K.startViewTransition({update:function(){var j=K.defaultView,et=j.navigation&&j.navigation.transition,Nt=K.fonts.status;r();var jt=[];if(Nt==="loaded"&&(dM(K),K.fonts.status==="loading"&&jt.push(K.fonts.ready)),Nt=jt.length,t!==null)for(var de=t.suspenseyImages,Z=0,G=0;G<de.length;G++){var $=de[G];if(!$.complete){var pt=$.getBoundingClientRect();if(0<pt.bottom&&0<pt.right&&pt.top<j.innerHeight&&pt.left<j.innerWidth){if(Z+=e0($),Z>ju){jt.length=Nt;break}$=new Promise(pM.bind($)),jt.push($)}}}if(0<jt.length)return j=Promise.race([Promise.all(jt),new Promise(function(Ht){return setTimeout(Ht,500)})]).then(u,u),(et?Promise.allSettled([et.finished,j]):j).then(c,c);if(u(),et)return et.finished.then(c,c);c()},types:a});K.__reactViewTransition=st;var gt=[];return st.ready.then(function(){for(var j=K.documentElement.getAnimations({subtree:!0}),et=0;et<j.length;et++){var Nt=j[et],jt=Nt.effect,de=jt.pseudoElement;if(de!=null&&de.startsWith("::view-transition")){gt.push(Nt),Nt=jt.getKeyframes();for(var Z=de=void 0,G=!0,$=0;$<Nt.length;$++){var pt=Nt[$],Ht=pt.width;if(de===void 0)de=Ht;else if(de!==Ht){G=!1;break}if(Ht=pt.height,Z===void 0)Z=Ht;else if(Z!==Ht){G=!1;break}delete pt.width,delete pt.height,pt.transform==="none"&&delete pt.transform}G&&de!==void 0&&Z!==void 0&&(jt.setKeyframes(Nt),G=getComputedStyle(jt.target,jt.pseudoElement),G.width!==de||G.height!==Z)&&(G=Nt[0],G.width=de,G.height=Z,G=Nt[Nt.length-1],G.width=de,G.height=Z,jt.setKeyframes(Nt))}}g()},function(j){K.__reactViewTransition===st&&(K.__reactViewTransition=null);try{typeof j=="object"&&j!==null&&j.name==="InvalidStateError"&&(j.message==="View transition was skipped because document visibility state is hidden."||j.message==="Skipping view transition because document visibility state has become hidden."||j.message==="Skipping view transition because viewport size changed."||j.message==="Transition was aborted because of invalid state")&&(j=null),j!==null&&L(j)}finally{r(),u(),g()}}),st.finished.finally(function(){for(var j=0;j<gt.length;j++)gt[j].cancel();K.__reactViewTransition===st&&(K.__reactViewTransition=null),E()}),st}catch{return r(),u(),g(),null}}function zs(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}zs.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:P({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},zs.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),r=[],u=0;u<a.length;u++){var c=a[u].effect;c!==null&&c.target===t&&c.pseudoElement===n&&r.push(a[u])}return r},zs.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Pv(t){return{name:t,group:new zs("group",t),imagePair:new zs("image-pair",t),old:new zs("old",t),new:new zs("new",t)}}function ri(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}ri.prototype.addEventListener=function(t,n,a){var r=null,u=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var c=this._eventListeners;if(Iv(c,t,n,a)===-1){var g=this,E=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(E=function(L){g.removeEventListener(t,n,a),typeof n=="function"?n.call(this,L):n.handleEvent(L)}),r!==null&&(u=g.removeEventListener.bind(g,t,n,a),r.addEventListener("abort",u,{once:!0}),u=r.removeEventListener.bind(r,"abort",u)),r=Lr(a),c.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:E,cleanup:u}),p(this._fragmentFiber.child,!1,gM,t,E,r)}this._eventListeners=c}};function gM(t,n,a,r){return y(t).addEventListener(n,a,r),!1}ri.prototype.removeEventListener=function(t,n,a){var r=this._eventListeners;if(r!==null&&(n=Iv(r,t,n,a),n!==-1)){var u=r[n];a=u.attachedListener;var c=u.cleanup;u=Lr(u.optionsOrUseCapture),p(this._fragmentFiber.child,!1,_M,t,a,u),r.splice(n,1),c!==null&&c()}};function _M(t,n,a,r){return y(t).removeEventListener(n,a,r),!1}function Lr(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function zv(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function Iv(t,n,a,r){if(t.length===0)return-1;r=zv(r);for(var u=0;u<t.length;u++){var c=t[u];if(c.type===n&&c.listener===a&&zv(c.optionsOrUseCapture)===r)return u}return-1}ri.prototype.dispatchEvent=function(t){var n=x(this._fragmentFiber);if(n===null)return!0;n=y(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var u=0;u<a.length;u++){var c=a[u];r.addEventListener(c.type,c.attachedListener,Lr(c.optionsOrUseCapture))}if(n.appendChild(r),t=r.dispatchEvent(t),a)for(u=0;u<a.length;u++)c=a[u],r.removeEventListener(c.type,c.attachedListener,Lr(c.optionsOrUseCapture));return n.removeChild(r),t}return n.dispatchEvent(t)},ri.prototype.focus=function(t){p(this._fragmentFiber.child,!0,Bv,t,void 0,void 0)};function Bv(t,n){return t.tag===6?!1:(t=y(t),wM(t,n))}ri.prototype.focusLast=function(t){var n=[];p(this._fragmentFiber.child,!0,Jh,n,void 0,void 0);for(var a=n.length-1;0<=a&&!Bv(n[a],t);a--);};function Jh(t,n){return n.push(t),!1}ri.prototype.blur=function(){var t=x(this._fragmentFiber);t!==null&&(t=y(t),t=el(t).activeElement,t!==null&&p(this._fragmentFiber.child,!1,vM,t,void 0,void 0))};function vM(t,n){return t.tag===6?!1:(t=y(t),t===n||t.contains(n)?(n.blur(),!0):!1)}ri.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),p(this._fragmentFiber.child,!1,xM,t,void 0,void 0)};function xM(t,n){return t.tag===6||(t=y(t),n.observe(t)),!1}ri.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),p(this._fragmentFiber.child,!1,SM,t,void 0,void 0);for(var a=n=0;a<Di.length;a++){var r=Di[a];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):Di[n++]=r}Di.length=n}};function SM(t,n){return t.tag===6||(t=y(t),n.unobserve(t)),!1}var Di=[],$h=!1;function yM(t,n,a){Di.push({fragmentInstance:t,observer:n,instance:a}),$h||($h=!0,DM(function(){$h=!1;var r=Di;Di=[];for(var u=0;u<r.length;u++){var c=r[u];c.observer.unobserve(c.instance)}}))}ri.prototype.getClientRects=function(){var t=[];return p(this._fragmentFiber.child,!1,MM,t,void 0,void 0),t};function MM(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=y(t),n.push.apply(n,t.getClientRects());return!1}ri.prototype.getRootNode=function(t){var n=x(this._fragmentFiber);return n===null?this:y(n).getRootNode(t)},ri.prototype.compareDocumentPosition=function(t){var n=x(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];p(this._fragmentFiber.child,!1,Jh,a,void 0,void 0);var r=y(n);if(a.length===0){if(a=r,M(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var u=r=a.compareDocumentPosition(t);return a===t?u=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=A(n)[1],a===null?u=Node.DOCUMENT_POSITION_PRECEDING:(t=y(a).compareDocumentPosition(t),u=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),u|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=y(a[0]),u=y(a[a.length-1]);var c=M(this._fragmentFiber)?n.parentElement:r;if(c==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=c.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,c=c.compareDocumentPosition(u)&Node.DOCUMENT_POSITION_CONTAINED_BY;var g=n.compareDocumentPosition(t),E=u.compareDocumentPosition(t),L=g&Node.DOCUMENT_POSITION_CONTAINED_BY||E&Node.DOCUMENT_POSITION_CONTAINED_BY;return E=r&&c&&g&Node.DOCUMENT_POSITION_FOLLOWING&&E&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===t||c&&u===t||L||E?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===t||!c&&u===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:g,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||EM(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function EM(t,n,a,r,u){var c=Oe(u);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!c)t:{for(;c!==null;){if(c.tag===7&&(c===n||c.alternate===n)){a=!0;break t}c=c.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(c===null)return c=u.ownerDocument,u===c||u===c.documentElement||u===c.body;t:{for(c=n,n=x(n);c!==null;){if(!(c.tag!==5&&c.tag!==3&&c.tag!==27||c!==n&&c.alternate!==n)){c=!0;break t}c=c.return}c=!1}return c}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!c)&&!(n=c===a)&&(n=V(a,c,X),n===null?n=!1:(p(n,!0,z,c,a),c=S,S=null,n=c!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!c)&&!(n=c===r)&&(n=V(r,c,X),n===null?n=!1:(p(n,!0,N,c,r),c=S,B=S=null,n=c!==null)),n):!1}function Fv(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}ri.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var n=[];p(this._fragmentFiber.child,!1,Jh,n,void 0,void 0);var a=t!==!1;if(n.length===0){var r=A(this._fragmentFiber);if(r=a?r[1]||r[0]||x(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=y(r),Fv(t,a);return}if(r=y(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var u=n[r];u.tag===6?(u=y(u),Fv(u,a)):y(u).scrollIntoView(t),r+=a?-1:1}};function TM(t,n){return t=y(t),Hv(t,n),!1}function Hv(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function Gv(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r];t.addEventListener(u.type,u.attachedListener,Lr(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){for(var g=0,E=0;E<Di.length;E++){var L=Di[E];(L.fragmentInstance!==n||L.observer!==c||L.instance!==t)&&(Di[g++]=L)}Di.length=g,c.observe(t)}),Hv(t,n))}function bM(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r];t.removeEventListener(u.type,u.attachedListener,Lr(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){typeof c.rootMargin=="string"?yM(n,c,t):c.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function td(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":td(a),te(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function AM(t,n,a,r){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Le])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var c=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=vi(t.nextSibling),t===null)break}return null}function RM(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=vi(t.nextSibling),t===null))return null;return t}function Vv(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=vi(t.nextSibling),t===null))return null;return t}function ed(t){return t.data==="$?"||t.data==="$~"}function nd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function CM(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function vi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var id=null;function kv(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return vi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Xv(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function wM(t,n){function a(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return r}function DM(t){Dv(function(){Dv(function(n){return t(n)})})}function jv(t,n,a){switch(n=el(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function qv(t,n,a){for(var r in a){var u=a[r];a.hasOwnProperty(r)&&u!=null&&He(t,n,r,null,sM,u)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Fi&&(t.onclick=null),te(t)}function ad(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);te(t)}var xi=new Map,Yv=new Set;function nl(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var _a=qt.d;qt.d={f:NM,r:UM,D:LM,C:OM,L:PM,m:zM,X:BM,S:IM,M:FM};function NM(){var t=_a.f(),n=zu();return t||n}function UM(t){var n=ge(t);n!==null&&n.tag===5&&n.type==="form"?Zg(n):_a.r(t)}var Or=typeof document>"u"?null:document;function Wv(t,n,a){var r=Or;if(r&&typeof n=="string"&&n){var u=fi(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Yv.has(u)||(Yv.add(u),t={rel:t,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),wn(n,"link",t),De(n),r.head.appendChild(n)))}}function LM(t){_a.D(t),Wv("dns-prefetch",t,null)}function OM(t,n){_a.C(t,n),Wv("preconnect",t,n)}function PM(t,n,a){_a.L(t,n,a);var r=Or;if(r&&t&&n){var u='link[rel="preload"][as="'+fi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+fi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+fi(a.imageSizes)+'"]')):u+='[href="'+fi(t)+'"]';var c=u;switch(n){case"style":c=Pr(t);break;case"script":c=zr(t)}if(!(xi.has(c)||(t=P({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),xi.set(c,t),r.querySelector(u)!==null||n==="style"&&r.querySelector(il(c))||n==="script"&&r.querySelector(al(c))))){var g=r.createElement("link");wn(g,"link",t),n==="style"&&(g[we]=!0,g.onload=g.onerror=function(){Ca(g)}),De(g),r.head.appendChild(g)}}}function zM(t,n){_a.m(t,n);var a=Or;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+fi(r)+'"][href="'+fi(t)+'"]',c=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=zr(t)}if(!xi.has(c)&&(t=P({rel:"modulepreload",href:t},n),xi.set(c,t),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(al(c)))return}r=a.createElement("link"),wn(r,"link",t),De(r),a.head.appendChild(r)}}}function IM(t,n,a){_a.S(t,n,a);var r=Or;if(r&&t){var u=Jn(r).hoistableStyles,c=Pr(t);n=n||"default";var g=u.get(c);if(!g){var E={loading:0,preload:null};if(g=r.querySelector(il(c)))E.loading=5;else{t=P({rel:"stylesheet",href:t,"data-precedence":n},a),(a=xi.get(c))&&sd(t,a);var L=g=r.createElement("link");De(L),wn(L,"link",t),L._p=new Promise(function(K,st){L.onload=K,L.onerror=st}),L.addEventListener("load",function(){E.loading|=1}),L.addEventListener("error",function(){E.loading|=2}),E.loading|=4,ku(g,n,r)}g={type:"stylesheet",instance:g,count:1,state:E},u.set(c,g)}}}function BM(t,n){_a.X(t,n);var a=Or;if(a&&t){var r=Jn(a).hoistableScripts,u=zr(t),c=r.get(u);c||(c=a.querySelector(al(u)),c||(t=P({src:t,async:!0},n),(n=xi.get(u))&&rd(t,n),c=a.createElement("script"),De(c),wn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(u,c))}}function FM(t,n){_a.M(t,n);var a=Or;if(a&&t){var r=Jn(a).hoistableScripts,u=zr(t),c=r.get(u);c||(c=a.querySelector(al(u)),c||(t=P({src:t,async:!0,type:"module"},n),(n=xi.get(u))&&rd(t,n),c=a.createElement("script"),De(c),wn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(u,c))}}function Zv(t,n,a,r){var u=(u=qe.current)?nl(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Pr(a.href),n=Jn(u).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Pr(a.href);var c=Jn(u).hoistableStyles,g=c.get(t);if(g||(u=u.ownerDocument||u,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,g),(c=u.querySelector(il(t)))?c._p||(g.instance=c,g.state.loading=5):(c=xi.get(t),c||(c={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},xi.set(t,c)),HM(u,t,c,g.state))),n&&r===null)throw Error(s(528,""));return g}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=zr(a),n=Jn(u).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Pr(t){return'href="'+fi(t)+'"'}function il(t){return'link[rel="stylesheet"]['+t+"]"}function Kv(t){return P({},t,{"data-precedence":t.precedence,precedence:null})}function HM(t,n,a,r){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[we]!==!0){r.loading=1;return}}else n=t.createElement("link"),n[we]=!0,n.onload=n.onerror=Ca.bind(null,n),wn(n,"link",a),De(n),t.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function zr(t){return'[src="'+fi(t)+'"]'}function al(t){return"script[async]"+t}function Qv(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+fi(a.href)+'"]');if(r)return n.instance=r,De(r),r;var u=P({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),De(r),wn(r,"style",u),ku(r,a.precedence,t),n.instance=r;case"stylesheet":u=Pr(a.href);var c=t.querySelector(il(u));if(c)return n.state.loading|=4,n.instance=c,De(c),c;r=Kv(a),(u=xi.get(u))&&sd(r,u),c=(t.ownerDocument||t).createElement("link"),De(c);var g=c;return g._p=new Promise(function(E,L){g.onload=E,g.onerror=L}),wn(c,"link",r),n.state.loading|=4,ku(c,a.precedence,t),n.instance=c;case"script":return c=zr(a.src),(u=t.querySelector(al(c)))?(n.instance=u,De(u),u):(r=a,(u=xi.get(c))&&(r=P({},a),rd(r,u)),t=t.ownerDocument||t,u=t.createElement("script"),De(u),wn(u,"link",r),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,ku(r,a.precedence,t));return n.instance}function ku(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,c=u,g=0;g<r.length;g++){var E=r[g];if(E.dataset.precedence===n)c=E;else if(c!==u)break}c?c.parentNode.insertBefore(t,c.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function sd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function rd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Xu=null;function Jv(t,n,a){if(Xu===null){var r=new Map,u=Xu=new Map;u.set(a,r)}else u=Xu,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var c=a[u];if(!(c[Le]||c[wt]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var g=c.getAttribute(n)||"";g=t+g;var E=r.get(g);E?E.push(c):r.set(g,[c])}}return r}function od(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function GM(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function $v(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function t0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function e0(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function n0(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=e0(n),t.suspenseyImages.push(n)),t=XM.bind(t),n.decode().then(t,t))}function VM(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Pr(r.href),c=n.querySelector(il(u));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=sl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=c,De(c);return}c=n.ownerDocument||n,r=Kv(r),(u=xi.get(u))&&sd(r,u),c=c.createElement("link"),De(c);var g=c;g._p=new Promise(function(E,L){g.onload=E,g.onerror=L}),wn(c,"link",r),a.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=sl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var ju=0;function kM(t,n){return t.stylesheets&&t.count===0&&Yu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&Yu(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+n);0<t.imgBytes&&ju===0&&(ju=62500*oM());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Yu(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>ju?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function i0(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Yu(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function sl(){this.count--,i0(this)}function XM(){this.imgCount--,i0(this)}var qu=null;function Yu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,qu=new Map,n.forEach(jM,t),qu=null,sl.call(t))}function jM(t,n){if(!(n.state.loading&4)){var a=qu.get(t);if(a)var r=a.get(null);else{a=new Map,qu.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<u.length;c++){var g=u[c];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),r=g)}r&&a.set(null,r)}u=n.instance,g=u.getAttribute("data-precedence"),c=a.get(g)||r,c===r&&a.set(null,u),a.set(g,u),this.count++,r=sl.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),c?c.parentNode.insertBefore(u,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Ir={$$typeof:ut,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function qM(t,n,a,r,u,c,g,E,L){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=So(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=So(0),this.hiddenUpdates=So(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=c,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=L,this.transitionTypes=null,this.incompleteTransitions=new Map}function a0(t,n,a,r,u,c,g,E,L,K,st,gt){return t=new qM(t,n,a,g,L,K,st,gt,E),n=1,c===!0&&(n|=24),c=jn(3,null,null,n),t.current=c,c.stateNode=t,n=Mf(),n.refCount++,t.pooledCache=n,n.refCount++,c.memoizedState={element:r,isDehydrated:a,cache:n},Af(c),t}function s0(t){return t?(t=ur,t):ur}function r0(t,n,a,r,u,c){u=s0(u),r.context===null?r.context=u:r.pendingContext=u,r=Ia(n),r.payload={element:a},c=c===void 0?null:c,c!==null&&(r.callback=c),a=Ba(t,r,n),a!==null&&(Zn(a,t,n),zo(a,t,n))}function o0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function ld(t,n){o0(t,n),(t=t.alternate)&&o0(t,n)}function l0(t){if(t.tag===13||t.tag===31){var n=xs(t,67108864);n!==null&&Zn(n,t,67108864),ld(t,67108864)}}function u0(t){if(t.tag===13||t.tag===31){var n=si();n=lt(n);var a=xs(t,n);a!==null&&Zn(a,t,n),ld(t,n)}}var Br=!0;function YM(t,n,a,r){var u=Et.T;Et.T=null;var c=qt.p;try{qt.p=2,ud(t,n,a,r)}finally{qt.p=c,Et.T=u}}function WM(t,n,a,r){var u=Et.T;Et.T=null;var c=qt.p;try{qt.p=8,ud(t,n,a,r)}finally{qt.p=c,Et.T=u}}function ud(t,n,a,r){if(Br){var u=cd(r);if(u===null)Xh(t,n,r,Wu,a),f0(t,r);else if(KM(u,t,n,a,r))r.stopPropagation();else if(f0(t,r),n&4&&-1<ZM.indexOf(t)){for(;u!==null;){var c=ge(u);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var g=ci(c.pendingLanes);if(g!==0){var E=c;for(E.pendingLanes|=2,E.entangledLanes|=2;g;){var L=1<<31-Nn(g);E.entanglements[1]|=L,g&=~L}Zi(c),(Pe&6)===0&&(Lu=k()+500,Jo(0))}}break;case 31:case 13:E=xs(c,2),E!==null&&Zn(E,c,2),zu(),ld(c,2)}if(c=cd(r),c===null&&Xh(t,n,r,Wu,a),c===u)break;u=c}u!==null&&r.stopPropagation()}else Xh(t,n,r,null,a)}}function cd(t){return t=Wc(t),fd(t)}var Wu=null;function fd(t){if(Wu=null,t=Oe(t),t!==null){var n=f(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Wu=t,null}function c0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(At()){case Dt:return 2;case Vt:return 8;case yt:case _t:return 32;case Yt:return 268435456;default:return 32}default:return 32}}var hd=!1,Ka=null,Qa=null,Ja=null,rl=new Map,ol=new Map,$a=[],ZM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function f0(t,n){switch(t){case"focusin":case"focusout":Ka=null;break;case"dragenter":case"dragleave":Qa=null;break;case"mouseover":case"mouseout":Ja=null;break;case"pointerover":case"pointerout":rl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ol.delete(n.pointerId)}}function ll(t,n,a,r,u,c){return t===null||t.nativeEvent!==c?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:c,targetContainers:[u]},n!==null&&(n=ge(n),n!==null&&l0(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function KM(t,n,a,r,u){switch(n){case"focusin":return Ka=ll(Ka,t,n,a,r,u),!0;case"dragenter":return Qa=ll(Qa,t,n,a,r,u),!0;case"mouseover":return Ja=ll(Ja,t,n,a,r,u),!0;case"pointerover":var c=u.pointerId;return rl.set(c,ll(rl.get(c)||null,t,n,a,r,u)),!0;case"gotpointercapture":return c=u.pointerId,ol.set(c,ll(ol.get(c)||null,t,n,a,r,u)),!0}return!1}function h0(t){var n=Oe(t.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,zt(t.priority,function(){u0(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,zt(t.priority,function(){u0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Zu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=cd(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Yc=r,a.target.dispatchEvent(r),Yc=null}else return n=ge(a),n!==null&&l0(n),t.blockedOn=a,!1;n.shift()}return!0}function d0(t,n,a){Zu(t)&&a.delete(n)}function QM(){hd=!1,Ka!==null&&Zu(Ka)&&(Ka=null),Qa!==null&&Zu(Qa)&&(Qa=null),Ja!==null&&Zu(Ja)&&(Ja=null),rl.forEach(d0),ol.forEach(d0)}function Ku(t,n){t.blockedOn===n&&(t.blockedOn=null,hd||(hd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,QM)))}var Qu=null;function p0(t){Qu!==t&&(Qu=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Qu===t&&(Qu=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],u=t[n+2];if(typeof r!="function"){if(fd(r||a)===null)continue;break}var c=ge(a);c!==null&&(t.splice(n,3),n-=3,Yf(c,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function Fr(t){function n(L){return Ku(L,t)}Ka!==null&&Ku(Ka,t),Qa!==null&&Ku(Qa,t),Ja!==null&&Ku(Ja,t),rl.forEach(n),ol.forEach(n);for(var a=0;a<$a.length;a++){var r=$a[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<$a.length&&(a=$a[0],a.blockedOn===null);)h0(a),a.blockedOn===null&&$a.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],c=a[r+1],g=u[Xt]||null;if(typeof c=="function")g||p0(a);else if(g){var E=null;if(c&&c.hasAttribute("formAction")){if(u=c,g=c[Xt]||null)E=g.formAction;else if(fd(u)!==null)continue}else E=g.action;typeof E=="function"?a[r+1]=E:(a.splice(r,3),r-=3),p0(a)}}}function m0(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(g){return u=g})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function dd(t){this._internalRoot=t}Ju.prototype.render=dd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=si();r0(a,r,t,n,null,null)},Ju.prototype.unmount=dd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;r0(t.current,2,null,t,null,null),zu(),n[ee]=null}};function Ju(t){this._internalRoot=t}Ju.prototype.unstable_scheduleHydration=function(t){if(t){var n=Tt();t={blockedOn:null,target:t,priority:n};for(var a=0;a<$a.length&&n!==0&&n<$a[a].priority;a++);$a.splice(a,0,t),a===0&&h0(t)}};var g0=e.version;if(g0!=="19.3.1")throw Error(s(527,g0,"19.3.1"));qt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=m(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var JM={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Et,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $u=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$u.isDisabled&&$u.supportsFiber)try{Ee=$u.inject(JM),en=$u}catch{}}return cl.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",u=s_,c=r_,g=o_;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=a0(t,1,!1,null,null,a,r,null,u,c,g,m0),t[ee]=n.current,kh(t),new dd(n)},cl.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,u="",c=s_,g=r_,E=o_,L=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(L=a.formState)),n=a0(t,1,!0,n,a??null,r,u,L,c,g,E,m0),n.context=s0(null),a=n.current,r=si(),r=lt(r),u=Ia(r),u.callback=null,Ba(a,u,r),a=r,n.current.lanes=a,gs(n,a),Zi(n),t[ee]=n.current,kh(t),new Ju(n)},cl.version="19.3.1",cl}var A0;function uE(){if(A0)return gd.exports;A0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),gd.exports=lE(),gd.exports}var cE=uE();const fE=Fx(cE);class hE extends Error{constructor(e,i){super(e),this.status=i}status}async function ba(o,e={}){const i=await fetch(o,{...e,credentials:"same-origin",headers:{"content-type":"application/json",...e.headers}}),s=await i.json().catch(()=>({}));if(!i.ok)throw new hE(s.error||"Não foi possível conectar ao servidor.",i.status);return s}class dE{socket=null;listeners=new Set;statusListeners=new Set;closed=!1;retry=null;connect(){if(this.closed||this.socket?.readyState===WebSocket.OPEN||this.socket?.readyState===WebSocket.CONNECTING)return;const e=location.protocol==="https:"?"wss":"ws",i=new WebSocket(`${e}://${location.host}/ws`);this.socket=i,i.onopen=()=>this.statusListeners.forEach(s=>s(!0)),i.onmessage=s=>{try{const l=JSON.parse(s.data);l.type==="ping"&&this.send("pong",{at:l.at}),this.listeners.forEach(f=>f(l))}catch{}},i.onclose=()=>{this.socket===i&&(this.socket=null),this.statusListeners.forEach(s=>s(!1)),this.closed||(this.retry=setTimeout(()=>this.connect(),2e3))},i.onerror=()=>i.close()}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}onStatus(e){return this.statusListeners.add(e),()=>this.statusListeners.delete(e)}send(e,i={}){return this.socket?.readyState!==WebSocket.OPEN?!1:(this.socket.send(JSON.stringify({type:e,payload:i})),!0)}close(){this.closed=!0,this.retry&&clearTimeout(this.retry),this.socket?.close(),this.socket=null,this.listeners.clear(),this.statusListeners.clear()}}function pE({onLogin:o}){const e=ce.useRef(null),[i,s]=ce.useState(null),[l,f]=ce.useState(""),[h,d]=ce.useState(""),[_,m]=ce.useState(!1);ce.useEffect(()=>{ba("/api/config").then(s).catch(p=>d(p.message))},[]),ce.useEffect(()=>{if(!i?.googleClientId||!e.current)return;let p=!1;const x=()=>{p||!window.google||!e.current||(window.google.accounts.id.initialize({client_id:i.googleClientId,callback:async({credential:M})=>{m(!0),d("");try{const A=await ba("/api/auth/google",{method:"POST",body:JSON.stringify({credential:M})});o(A.user)}catch(A){d(A instanceof Error?A.message:"Falha no login.")}finally{m(!1)}}}),e.current.replaceChildren(),window.google.accounts.id.renderButton(e.current,{theme:"filled_black",size:"large",text:"continue_with",shape:"rectangular",locale:"pt-BR",width:320}))};if(window.google)x();else{const M=document.createElement("script");M.src="https://accounts.google.com/gsi/client",M.async=!0,M.onload=x,M.onerror=()=>d("Não foi possível carregar o login Google."),document.head.append(M)}return()=>{p=!0}},[i,o]);const v=async p=>{p.preventDefault(),m(!0),d("");try{const x=await ba("/api/auth/dev",{method:"POST",body:JSON.stringify({name:l})});o(x.user)}catch(x){d(x instanceof Error?x.message:"Falha no login.")}finally{m(!1)}};return b.jsxs("main",{className:"login-screen",children:[b.jsxs("div",{className:"login-sky","aria-hidden":"true",children:[b.jsx("i",{}),b.jsx("i",{}),b.jsx("i",{}),b.jsx("i",{})]}),b.jsxs("section",{className:"login-hero",children:[b.jsx("div",{className:"brand-mark","aria-hidden":"true",children:b.jsx("span",{children:"G"})}),b.jsx("p",{className:"eyebrow",children:"OITO ENTRAM. UM SOBREVIVE."}),b.jsxs("h1",{children:[b.jsx("span",{children:"GoG"})," BATTLE",b.jsx("br",{}),"ROYALE"]}),b.jsx("p",{className:"login-copy",children:"Explore a arena voxel, encontre armas, construa barreiras e fique dentro da zona. Agora com partidas online de verdade."}),b.jsxs("div",{className:"feature-pills",children:[b.jsx("span",{children:"PC + CELULAR"}),b.jsx("span",{children:"SALAS PRIVADAS"}),b.jsx("span",{children:"SERVIDOR AUTORITATIVO"})]})]}),b.jsxs("section",{className:"login-card",children:[b.jsx("p",{className:"eyebrow",children:"SUA PRÓXIMA PARTIDA"}),b.jsx("h2",{children:"Entre na arena"}),b.jsx("p",{children:"Use sua conta Google para salvar perfil, estatísticas e histórico."}),i?.googleClientId?b.jsx("div",{ref:e,className:"google-button"}):b.jsxs("div",{className:"config-note",children:["Login Google aguardando configuração do ",b.jsx("code",{children:"GOOGLE_CLIENT_ID"}),"."]}),i?.devAuth&&b.jsxs(b.Fragment,{children:[b.jsx("div",{className:"divider",children:b.jsx("span",{children:"AMBIENTE DE TESTE"})}),b.jsxs("form",{onSubmit:v,className:"dev-login",children:[b.jsx("label",{htmlFor:"dev-name",children:"Nome de jogador local"}),b.jsx("input",{id:"dev-name",value:l,onChange:p=>f(p.target.value),placeholder:"Ex.: BlocoMiner",maxLength:24}),b.jsx("button",{className:"button secondary",disabled:_,children:"Entrar como teste"})]}),b.jsx("small",{children:"Esta opção não existe em produção e o banco em memória não preserva dados."})]}),_&&b.jsx("p",{role:"status",children:"Validando acesso…"}),h&&b.jsx("p",{className:"error",role:"alert",children:h})]})]})}const mE=["scout","forest","ocean","ember"];for(const[o,e]of[[-48,-44],[-18,-51],[19,-48],[49,-38],[-51,6],[50,12],[-44,47],[-9,51],[28,48],[52,49]]);for(const[o,e,i,s,l]of[[-25,-25,5,2.2,3],[7,-28,3,1.5,5],[29,-18,5,2.6,2],[-32,19,4,1.8,4],[4,22,6,1.4,2],[31,28,3,2.3,4],[-8,-2,4,2.1,4],[17,2,2.5,3,5]]);for(const[o,e]of[[-35,-5],[36,4],[2,-49],[-2,43]]);const Sd=[{id:"solo",name:"SOLO",detail:"8 jogadores · cada um por si"},{id:"duo",name:"DUO",detail:"4 duplas · sem fogo amigo"},{id:"squad",name:"ESQUADRÃO",detail:"2 esquadrões de 4"}],yd=o=>o==="solo"?"Solo":o==="duo"?"Duo":"Esquadrão",ap={scout:"Batedor",forest:"Floresta",ocean:"Oceano",ember:"Brasa"};function gE({client:o,user:e,connected:i,online:s,players:l,rooms:f,room:h,onLogout:d,onUser:_}){const[m,v]=ce.useState("play"),[p,x]=ce.useState("Arena dos amigos"),[M,A]=ce.useState("solo"),[C,y]=ce.useState("private"),[S,B]=ce.useState(""),[z,N]=ce.useState(""),[X,V]=ce.useState([]),[P,q]=ce.useState([]),[D,w]=ce.useState(e.name),[H,nt]=ce.useState(""),ct=h?.hostId===e.id;ce.useEffect(()=>{m==="ranking"&&ba("/api/leaderboard").then(O=>V(O.leaderboard)).catch(O=>nt(O.message)),m==="history"&&ba("/api/history").then(O=>q(O.history)).catch(O=>nt(O.message))},[m]);const ht=async()=>{if(!h)return;const O=`${location.origin}/convite/${h.code}`;try{await navigator.clipboard.writeText(O),nt("Link de convite copiado.")}catch{nt(O)}},ut=async O=>{O.preventDefault();try{const Y=await ba("/api/me",{method:"PATCH",body:JSON.stringify({name:D})});_(Y.user),nt("Perfil atualizado.")}catch(Y){nt(Y instanceof Error?Y.message:"Não foi possível salvar.")}},W=async O=>{try{const Y=await ba("/api/me",{method:"PATCH",body:JSON.stringify({skin:O})});_(Y.user),nt(`${ap[O]} equipada.`)}catch(Y){nt(Y instanceof Error?Y.message:"Não foi possível equipar.")}};return b.jsxs("div",{className:"app-shell",children:[b.jsxs("header",{className:"topbar",children:[b.jsxs("button",{className:"wordmark",onClick:()=>v("play"),children:[b.jsx("span",{children:"GoG"}),b.jsx("small",{children:"BATTLE ROYALE"})]}),b.jsxs("div",{className:"top-stats",children:[b.jsxs("span",{children:[b.jsx("i",{className:`status-dot ${i?"online":""}`}),i?`${s} online`:"Reconectando…"]}),b.jsxs("span",{children:[e.stats.rp," PR"]}),b.jsxs("span",{children:[e.stats.wins," vitórias"]})]}),b.jsxs("button",{className:"profile-chip",onClick:()=>v("profile"),children:[b.jsx(Md,{user:e}),b.jsxs("span",{children:[b.jsx("b",{children:e.name}),b.jsx("small",{children:e.publicId})]})]})]}),b.jsxs("nav",{className:"main-nav","aria-label":"Menu principal",children:[b.jsx("button",{"aria-pressed":m==="play",onClick:()=>v("play"),children:"Jogar"}),b.jsx("button",{"aria-pressed":m==="ranking",onClick:()=>v("ranking"),children:"Ranking"}),b.jsx("button",{"aria-pressed":m==="history",onClick:()=>v("history"),children:"Histórico"}),b.jsx("button",{"aria-pressed":m==="profile",onClick:()=>v("profile"),children:"Cofre & perfil"})]}),b.jsxs("main",{className:"lobby-content",children:[m==="play"&&(h?b.jsxs("section",{className:"room-layout",children:[b.jsxs("div",{className:"room-main panel",children:[b.jsxs("div",{className:"room-heading",children:[b.jsxs("div",{children:[b.jsx("p",{className:"eyebrow",children:h.matchmaking?"PARTIDA RÁPIDA RANQUEADA":h.visibility==="private"?"SALA PRIVADA":"SALA PÚBLICA"}),b.jsx("h1",{children:h.name})]}),b.jsx("span",{className:"room-code",children:h.code})]}),b.jsxs("div",{className:"room-progress",children:[b.jsxs("span",{children:[h.members.length,"/8 jogadores"]}),b.jsx("div",{children:b.jsx("i",{style:{width:`${h.members.length/8*100}%`}})})]}),b.jsx("div",{className:"member-grid",children:h.members.map(O=>b.jsxs("article",{className:"member-card",children:[b.jsx(Md,{user:O}),b.jsxs("div",{children:[b.jsx("b",{children:O.name}),b.jsx("small",{children:O.publicId})]}),O.id===h.hostId&&b.jsx("span",{title:"Dono da sala",children:"👑"}),b.jsx("i",{className:`skin-dot ${O.skin}`})]},O.id))}),h.status==="countdown"&&b.jsx("p",{className:"queue-status",children:"Sala cheia! A partida começa em instantes…"}),h.matchmaking&&h.status==="waiting"&&b.jsx("p",{className:"queue-status",children:"Na fila: entrada automática após 20 s com 2+ jogadores, ou 5 s com sala cheia."}),b.jsxs("div",{className:"room-actions",children:[!h.matchmaking&&ct&&b.jsx("button",{className:"button primary large",disabled:h.members.length<2,onClick:()=>o.send("room.start"),children:"Iniciar partida"}),!h.matchmaking&&b.jsx("button",{className:"button secondary",onClick:ht,children:"Copiar link de convite"}),b.jsx("button",{className:"button ghost",onClick:()=>o.send("room.leave"),children:h.matchmaking?"Sair da fila":"Sair da sala"})]})]}),b.jsxs("aside",{className:"room-settings panel",children:[b.jsx("p",{className:"eyebrow",children:"CONFIGURAÇÃO DA SALA"}),b.jsx("h2",{children:yd(h.mode)}),ct&&!h.matchmaking?b.jsxs(b.Fragment,{children:[b.jsxs("label",{children:["Modo",b.jsx("select",{value:h.mode,onChange:O=>o.send("room.update",{mode:O.target.value}),children:Sd.map(O=>b.jsx("option",{value:O.id,children:O.name},O.id))})]}),b.jsxs("label",{children:["Visibilidade",b.jsxs("select",{value:h.visibility,onChange:O=>o.send("room.update",{visibility:O.target.value}),children:[b.jsx("option",{value:"private",children:"Privada · por convite"}),b.jsx("option",{value:"public",children:"Pública · aparece na lista"})]})]}),b.jsxs("label",{children:["Convidar por ID público",b.jsxs("div",{className:"inline-field",children:[b.jsx("input",{value:z,onChange:O=>N(O.target.value.toUpperCase()),placeholder:"GOG-XXXXXXXX"}),b.jsx("button",{className:"button secondary",onClick:()=>{o.send("room.invite",{publicId:z}),N("")},children:"Enviar"})]})]})]}):b.jsx("p",{children:h.matchmaking?"O servidor organiza as equipes e valida o resultado para o ranking.":"Aguarde o dono configurar e iniciar a partida."}),b.jsxs("div",{className:"rules-note",children:[b.jsx("b",{children:"Regras competitivas"}),b.jsx("span",{children:"Dano, tiro, loot, zona e vitória calculados no servidor."}),b.jsx("span",{children:"Salas personalizadas não concedem PR."})]})]})]}):b.jsxs(b.Fragment,{children:[b.jsxs("section",{className:"play-column",children:[b.jsxs("div",{className:"hero-banner",children:[b.jsxs("div",{children:[b.jsx("p",{className:"eyebrow",children:"TEMPORADA BLOCOS · 8 JOGADORES"}),b.jsxs("h1",{children:["Entre. Equipe.",b.jsx("br",{}),b.jsx("span",{children:"Sobreviva."})]}),b.jsx("p",{children:"Partidas rápidas, arena voxel e nenhuma vantagem comprada."})]}),b.jsx(R0,{skin:e.skin})]}),b.jsx("div",{className:"quick-grid",children:Sd.map(O=>b.jsxs("button",{className:"mode-card",disabled:!i,onClick:()=>o.send("queue.join",{mode:O.id}),children:[b.jsx("span",{className:"mode-icon",children:O.id==="solo"?"◆":O.id==="duo"?"◆◆":"◆◆◆◆"}),b.jsx("b",{children:O.name}),b.jsx("small",{children:O.detail}),b.jsx("em",{children:"PARTIDA RÁPIDA · RANQUEADA"})]},O.id))}),b.jsxs("div",{className:"custom-grid",children:[b.jsxs("form",{className:"panel custom-form",onSubmit:O=>{O.preventDefault(),o.send("room.create",{name:p,mode:M,visibility:C})},children:[b.jsx("p",{className:"eyebrow",children:"JOGUE COM SEUS AMIGOS"}),b.jsx("h2",{children:"Criar sala personalizada"}),b.jsxs("label",{children:["Nome da sala",b.jsx("input",{value:p,onChange:O=>x(O.target.value),maxLength:28,required:!0})]}),b.jsxs("div",{className:"two-fields",children:[b.jsxs("label",{children:["Modo",b.jsx("select",{value:M,onChange:O=>A(O.target.value),children:Sd.map(O=>b.jsx("option",{value:O.id,children:O.name},O.id))})]}),b.jsxs("label",{children:["Acesso",b.jsxs("select",{value:C,onChange:O=>y(O.target.value),children:[b.jsx("option",{value:"private",children:"Privada"}),b.jsx("option",{value:"public",children:"Pública"})]})]})]}),b.jsx("button",{className:"button primary",disabled:!i,children:"Criar sala"})]}),b.jsxs("form",{className:"panel custom-form",onSubmit:O=>{O.preventDefault(),o.send("room.join",{code:S})},children:[b.jsx("p",{className:"eyebrow",children:"TEM UM CONVITE?"}),b.jsx("h2",{children:"Entrar com código"}),b.jsx("p",{children:"Use o código de seis caracteres enviado pelo seu amigo."}),b.jsxs("label",{children:["Código da sala",b.jsx("input",{className:"code-input",value:S,onChange:O=>B(O.target.value.toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,6)),placeholder:"ABC234",required:!0,minLength:6})]}),b.jsx("button",{className:"button secondary",disabled:!i,children:"Entrar na sala"})]})]})]}),b.jsxs("aside",{className:"sidebar-column",children:[b.jsxs("section",{className:"panel online-panel",children:[b.jsxs("div",{className:"section-heading",children:[b.jsx("h2",{children:"Jogadores online"}),b.jsx("span",{children:s})]}),b.jsxs("div",{className:"online-list",children:[l.map(O=>b.jsxs("div",{children:[b.jsx(Md,{user:O}),b.jsxs("span",{children:[b.jsx("b",{children:O.name}),b.jsx("small",{children:O.publicId})]}),b.jsx("i",{className:`status-dot ${O.status==="playing"?"busy":"online"}`,title:O.status})]},O.id)),!l.length&&b.jsx("p",{children:"Nenhum jogador conectado."})]})]}),b.jsxs("section",{className:"panel public-panel",children:[b.jsxs("div",{className:"section-heading",children:[b.jsx("h2",{children:"Salas públicas"}),b.jsx("span",{children:f.length})]}),f.map(O=>b.jsxs("button",{className:"public-room",onClick:()=>o.send("room.join",{code:O.code}),children:[b.jsxs("span",{children:[b.jsx("b",{children:O.name}),b.jsxs("small",{children:[yd(O.mode)," · ",O.players,"/",O.maxPlayers]})]}),b.jsx("em",{children:"Entrar"})]},O.code)),!f.length&&b.jsx("p",{children:"Nenhuma sala pública aguardando."})]})]})]})),m==="ranking"&&b.jsxs("section",{className:"panel data-panel",children:[b.jsx("p",{className:"eyebrow",children:"CLASSIFICAÇÃO GLOBAL"}),b.jsx("h1",{children:"Os melhores da arena"}),b.jsx("p",{children:"Somente partidas rápidas validadas pelo servidor alteram os Pontos de Ranking."}),b.jsxs("div",{className:"table-wrap",children:[b.jsxs("table",{children:[b.jsx("thead",{children:b.jsxs("tr",{children:[b.jsx("th",{children:"#"}),b.jsx("th",{children:"Jogador"}),b.jsx("th",{children:"PR"}),b.jsx("th",{children:"Vitórias"}),b.jsx("th",{children:"Eliminações"}),b.jsx("th",{children:"Partidas"})]})}),b.jsx("tbody",{children:X.map((O,Y)=>b.jsxs("tr",{children:[b.jsx("td",{children:Y+1}),b.jsxs("td",{children:[b.jsx("b",{children:O.name}),b.jsx("small",{children:O.publicId})]}),b.jsx("td",{children:O.rp}),b.jsx("td",{children:O.wins}),b.jsx("td",{children:O.kills}),b.jsx("td",{children:O.matches})]},O.publicId))})]}),!X.length&&b.jsx("p",{className:"empty-state",children:"O ranking aparecerá após as primeiras partidas."})]})]}),m==="history"&&b.jsxs("section",{className:"panel data-panel",children:[b.jsx("p",{className:"eyebrow",children:"SEU HISTÓRICO"}),b.jsx("h1",{children:"Partidas recentes"}),b.jsxs("div",{className:"history-list",children:[P.map(O=>b.jsxs("article",{children:[b.jsxs("span",{className:O.won?"victory":"",children:["#",O.placement]}),b.jsxs("div",{children:[b.jsxs("b",{children:[O.won?"Vitória":"Partida encerrada"," · ",yd(O.mode)]}),b.jsxs("small",{children:[new Date(O.endedAt).toLocaleString("pt-BR")," · ",O.ranked?"Ranqueada":"Personalizada"]})]}),b.jsxs("span",{children:[O.kills," elim."]}),b.jsxs("span",{children:[O.damage," dano"]}),O.ranked&&b.jsxs("span",{children:[O.rpDelta>=0?"+":"",O.rpDelta," PR"]})]},O.matchId)),!P.length&&b.jsx("p",{className:"empty-state",children:"Você ainda não concluiu uma partida online."})]})]}),m==="profile"&&b.jsxs("div",{className:"profile-layout",children:[b.jsxs("section",{className:"panel profile-preview",children:[b.jsx("p",{className:"eyebrow",children:"SEU PERSONAGEM"}),b.jsx(R0,{skin:e.skin,large:!0}),b.jsx("h1",{children:e.name}),b.jsx("p",{children:e.publicId}),b.jsxs("div",{className:"profile-numbers",children:[b.jsxs("span",{children:[b.jsx("b",{children:e.stats.matches})," partidas"]}),b.jsxs("span",{children:[b.jsx("b",{children:e.stats.wins})," vitórias"]}),b.jsxs("span",{children:[b.jsx("b",{children:e.stats.kills})," eliminações"]}),b.jsxs("span",{children:[b.jsx("b",{children:Math.round(e.stats.damage)})," dano"]})]})]}),b.jsxs("section",{className:"panel profile-settings",children:[b.jsx("p",{className:"eyebrow",children:"COFRE & PERFIL"}),b.jsx("h2",{children:"Personalização"}),b.jsx("p",{children:"As skins são apenas visuais e não alteram os atributos das armas."}),b.jsx("div",{className:"skin-grid",children:mE.map(O=>b.jsxs("button",{"aria-pressed":e.skin===O,onClick:()=>W(O),children:[b.jsx("i",{className:`skin-preview ${O}`}),b.jsx("b",{children:ap[O]}),b.jsx("small",{children:e.skin===O?"Equipada":"Disponível"})]},O))}),b.jsxs("form",{onSubmit:ut,children:[b.jsxs("label",{children:["Nome de jogador",b.jsx("input",{value:D,onChange:O=>w(O.target.value),minLength:2,maxLength:24,required:!0})]}),b.jsx("button",{className:"button primary",children:"Salvar nome"})]}),b.jsx("button",{className:"button ghost",onClick:d,children:"Sair da conta"})]})]})]}),H&&b.jsxs("button",{className:"inline-notice",onClick:()=>nt(""),children:[H," ",b.jsx("span",{children:"×"})]}),b.jsx("footer",{children:"GoG Battle Royale · pré-alpha online · resultados e progressão controlados pelo servidor"})]})}function Md({user:o}){return o.avatarUrl?b.jsx("img",{className:"avatar",src:o.avatarUrl,alt:"",referrerPolicy:"no-referrer"}):b.jsx("span",{className:"avatar fallback",children:o.name.slice(0,1).toUpperCase()})}function R0({skin:o,large:e=!1}){return b.jsxs("div",{className:`voxel-character ${o} ${e?"large":""}`,"aria-label":`Personagem voxel ${ap[o]}`,children:[b.jsxs("div",{className:"voxel-head",children:[b.jsx("i",{}),b.jsx("i",{})]}),b.jsx("div",{className:"voxel-body"}),b.jsx("div",{className:"voxel-arm left"}),b.jsx("div",{className:"voxel-arm right"}),b.jsx("div",{className:"voxel-leg left"}),b.jsx("div",{className:"voxel-leg right"}),b.jsx("div",{className:"character-shadow"})]})}const Qp="180",_E=0,C0=1,vE=2,Hx=1,xE=2,Ea=3,fs=0,Kn=1,Ta=2,ls=0,uo=1,w0=2,D0=3,N0=4,SE=5,js=100,yE=101,ME=102,EE=103,TE=104,bE=200,AE=201,RE=202,CE=203,sp=204,rp=205,wE=206,DE=207,NE=208,UE=209,LE=210,OE=211,PE=212,zE=213,IE=214,op=0,lp=1,up=2,fo=3,cp=4,fp=5,hp=6,dp=7,Gx=0,BE=1,FE=2,us=0,HE=1,GE=2,VE=3,kE=4,XE=5,jE=6,qE=7,Vx=300,ho=301,po=302,pp=303,mp=304,Bc=306,gp=1e3,Ys=1001,_p=1002,ui=1003,YE=1004,tc=1005,Ji=1006,Ed=1007,Ws=1008,ea=1009,kx=1010,Xx=1011,Tl=1012,Jp=1013,Zs=1014,$i=1015,wl=1016,$p=1017,tm=1018,bl=1020,jx=35902,qx=35899,Yx=1021,Wx=1022,Pi=1023,Al=1026,Rl=1027,em=1028,nm=1029,Zx=1030,im=1031,am=1033,Rc=33776,Cc=33777,wc=33778,Dc=33779,vp=35840,xp=35841,Sp=35842,yp=35843,Mp=36196,Ep=37492,Tp=37496,bp=37808,Ap=37809,Rp=37810,Cp=37811,wp=37812,Dp=37813,Np=37814,Up=37815,Lp=37816,Op=37817,Pp=37818,zp=37819,Ip=37820,Bp=37821,Fp=36492,Hp=36494,Gp=36495,Vp=36283,kp=36284,Xp=36285,jp=36286,WE=3200,ZE=3201,Kx=0,KE=1,os="",yi="srgb",mo="srgb-linear",Uc="linear",Xe="srgb",Hr=7680,U0=519,QE=512,JE=513,$E=514,Qx=515,tT=516,eT=517,nT=518,iT=519,qp=35044,L0="300 es",ta=2e3,Lc=2001;class Qs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const f=l.indexOf(i);f!==-1&&l.splice(f,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let f=0,h=l.length;f<h;f++)l[f].call(this,e);e.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Td=Math.PI/180,Yp=180/Math.PI;function cs(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(On[o&255]+On[o>>8&255]+On[o>>16&255]+On[o>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]).toLowerCase()}function Ae(o,e,i){return Math.max(e,Math.min(i,o))}function aT(o,e){return(o%e+e)%e}function bd(o,e,i){return(1-i)*o+i*e}function Qi(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function je(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class xe{constructor(e=0,i=0){xe.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ae(this.x,e.x,i.x),this.y=Ae(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ae(this.x,e,i),this.y=Ae(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ae(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ae(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),f=this.x-e.x,h=this.y-e.y;return this.x=f*s-h*l+e.x,this.y=f*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Dl{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,f,h,d){let _=s[l+0],m=s[l+1],v=s[l+2],p=s[l+3];const x=f[h+0],M=f[h+1],A=f[h+2],C=f[h+3];if(d===0){e[i+0]=_,e[i+1]=m,e[i+2]=v,e[i+3]=p;return}if(d===1){e[i+0]=x,e[i+1]=M,e[i+2]=A,e[i+3]=C;return}if(p!==C||_!==x||m!==M||v!==A){let y=1-d;const S=_*x+m*M+v*A+p*C,B=S>=0?1:-1,z=1-S*S;if(z>Number.EPSILON){const X=Math.sqrt(z),V=Math.atan2(X,S*B);y=Math.sin(y*V)/X,d=Math.sin(d*V)/X}const N=d*B;if(_=_*y+x*N,m=m*y+M*N,v=v*y+A*N,p=p*y+C*N,y===1-d){const X=1/Math.sqrt(_*_+m*m+v*v+p*p);_*=X,m*=X,v*=X,p*=X}}e[i]=_,e[i+1]=m,e[i+2]=v,e[i+3]=p}static multiplyQuaternionsFlat(e,i,s,l,f,h){const d=s[l],_=s[l+1],m=s[l+2],v=s[l+3],p=f[h],x=f[h+1],M=f[h+2],A=f[h+3];return e[i]=d*A+v*p+_*M-m*x,e[i+1]=_*A+v*x+m*p-d*M,e[i+2]=m*A+v*M+d*x-_*p,e[i+3]=v*A-d*p-_*x-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,f=e._z,h=e._order,d=Math.cos,_=Math.sin,m=d(s/2),v=d(l/2),p=d(f/2),x=_(s/2),M=_(l/2),A=_(f/2);switch(h){case"XYZ":this._x=x*v*p+m*M*A,this._y=m*M*p-x*v*A,this._z=m*v*A+x*M*p,this._w=m*v*p-x*M*A;break;case"YXZ":this._x=x*v*p+m*M*A,this._y=m*M*p-x*v*A,this._z=m*v*A-x*M*p,this._w=m*v*p+x*M*A;break;case"ZXY":this._x=x*v*p-m*M*A,this._y=m*M*p+x*v*A,this._z=m*v*A+x*M*p,this._w=m*v*p-x*M*A;break;case"ZYX":this._x=x*v*p-m*M*A,this._y=m*M*p+x*v*A,this._z=m*v*A-x*M*p,this._w=m*v*p+x*M*A;break;case"YZX":this._x=x*v*p+m*M*A,this._y=m*M*p+x*v*A,this._z=m*v*A-x*M*p,this._w=m*v*p-x*M*A;break;case"XZY":this._x=x*v*p-m*M*A,this._y=m*M*p-x*v*A,this._z=m*v*A+x*M*p,this._w=m*v*p+x*M*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],f=i[8],h=i[1],d=i[5],_=i[9],m=i[2],v=i[6],p=i[10],x=s+d+p;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(v-_)*M,this._y=(f-m)*M,this._z=(h-l)*M}else if(s>d&&s>p){const M=2*Math.sqrt(1+s-d-p);this._w=(v-_)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(f+m)/M}else if(d>p){const M=2*Math.sqrt(1+d-s-p);this._w=(f-m)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(_+v)/M}else{const M=2*Math.sqrt(1+p-s-d);this._w=(h-l)/M,this._x=(f+m)/M,this._y=(_+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ae(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,f=e._z,h=e._w,d=i._x,_=i._y,m=i._z,v=i._w;return this._x=s*v+h*d+l*m-f*_,this._y=l*v+h*_+f*d-s*m,this._z=f*v+h*m+s*_-l*d,this._w=h*v-s*d-l*_-f*m,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,f=this._z,h=this._w;let d=h*e._w+s*e._x+l*e._y+f*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=s,this._y=l,this._z=f,this;const _=1-d*d;if(_<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*f+i*this._z,this.normalize(),this}const m=Math.sqrt(_),v=Math.atan2(m,d),p=Math.sin((1-i)*v)/m,x=Math.sin(i*v)/m;return this._w=h*p+this._w*x,this._x=s*p+this._x*x,this._y=l*p+this._y*x,this._z=f*p+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),f=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),f*Math.sin(i),f*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class at{constructor(e=0,i=0,s=0){at.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(O0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(O0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[3]*s+f[6]*l,this.y=f[1]*i+f[4]*s+f[7]*l,this.z=f[2]*i+f[5]*s+f[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,f=e.elements,h=1/(f[3]*i+f[7]*s+f[11]*l+f[15]);return this.x=(f[0]*i+f[4]*s+f[8]*l+f[12])*h,this.y=(f[1]*i+f[5]*s+f[9]*l+f[13])*h,this.z=(f[2]*i+f[6]*s+f[10]*l+f[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,f=e.x,h=e.y,d=e.z,_=e.w,m=2*(h*l-d*s),v=2*(d*i-f*l),p=2*(f*s-h*i);return this.x=i+_*m+h*p-d*v,this.y=s+_*v+d*m-f*p,this.z=l+_*p+f*v-h*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l,this.y=f[1]*i+f[5]*s+f[9]*l,this.z=f[2]*i+f[6]*s+f[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ae(this.x,e.x,i.x),this.y=Ae(this.y,e.y,i.y),this.z=Ae(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ae(this.x,e,i),this.y=Ae(this.y,e,i),this.z=Ae(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ae(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,f=e.z,h=i.x,d=i.y,_=i.z;return this.x=l*_-f*d,this.y=f*h-s*_,this.z=s*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Ad.copy(this).projectOnVector(e),this.sub(Ad)}reflect(e){return this.sub(Ad.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ae(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ad=new at,O0=new Dl;class pe{constructor(e,i,s,l,f,h,d,_,m){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,f,h,d,_,m)}set(e,i,s,l,f,h,d,_,m){const v=this.elements;return v[0]=e,v[1]=l,v[2]=d,v[3]=i,v[4]=f,v[5]=_,v[6]=s,v[7]=h,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,f=this.elements,h=s[0],d=s[3],_=s[6],m=s[1],v=s[4],p=s[7],x=s[2],M=s[5],A=s[8],C=l[0],y=l[3],S=l[6],B=l[1],z=l[4],N=l[7],X=l[2],V=l[5],P=l[8];return f[0]=h*C+d*B+_*X,f[3]=h*y+d*z+_*V,f[6]=h*S+d*N+_*P,f[1]=m*C+v*B+p*X,f[4]=m*y+v*z+p*V,f[7]=m*S+v*N+p*P,f[2]=x*C+M*B+A*X,f[5]=x*y+M*z+A*V,f[8]=x*S+M*N+A*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],f=e[3],h=e[4],d=e[5],_=e[6],m=e[7],v=e[8];return i*h*v-i*d*m-s*f*v+s*d*_+l*f*m-l*h*_}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],f=e[3],h=e[4],d=e[5],_=e[6],m=e[7],v=e[8],p=v*h-d*m,x=d*_-v*f,M=m*f-h*_,A=i*p+s*x+l*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=p*C,e[1]=(l*m-v*s)*C,e[2]=(d*s-l*h)*C,e[3]=x*C,e[4]=(v*i-l*_)*C,e[5]=(l*f-d*i)*C,e[6]=M*C,e[7]=(s*_-m*i)*C,e[8]=(h*i-s*f)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,f,h,d){const _=Math.cos(f),m=Math.sin(f);return this.set(s*_,s*m,-s*(_*h+m*d)+h+e,-l*m,l*_,-l*(-m*h+_*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Rd.makeScale(e,i)),this}rotate(e){return this.premultiply(Rd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Rd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Rd=new pe;function Jx(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Oc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function sT(){const o=Oc("canvas");return o.style.display="block",o}const P0={};function Cl(o){o in P0||(P0[o]=!0,console.warn(o))}function rT(o,e,i){return new Promise(function(s,l){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:s()}}setTimeout(f,i)})}const z0=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),I0=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function oT(){const o={enabled:!0,workingColorSpace:mo,spaces:{},convert:function(l,f,h){return this.enabled===!1||f===h||!f||!h||(this.spaces[f].transfer===Xe&&(l.r=Aa(l.r),l.g=Aa(l.g),l.b=Aa(l.b)),this.spaces[f].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[f].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Xe&&(l.r=co(l.r),l.g=co(l.g),l.b=co(l.b))),l},workingToColorSpace:function(l,f){return this.convert(l,this.workingColorSpace,f)},colorSpaceToWorking:function(l,f){return this.convert(l,f,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===os?Uc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,f=this.workingColorSpace){return l.fromArray(this.spaces[f].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,f,h){return l.copy(this.spaces[f].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,f){return Cl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,f)},toWorkingColorSpace:function(l,f){return Cl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,f)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[mo]:{primaries:e,whitePoint:s,transfer:Uc,toXYZ:z0,fromXYZ:I0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:yi},outputColorSpaceConfig:{drawingBufferColorSpace:yi}},[yi]:{primaries:e,whitePoint:s,transfer:Xe,toXYZ:z0,fromXYZ:I0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:yi}}}),o}const Ue=oT();function Aa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function co(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Gr;class lT{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Gr===void 0&&(Gr=Oc("canvas")),Gr.width=e.width,Gr.height=e.height;const l=Gr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Gr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Oc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),f=l.data;for(let h=0;h<f.length;h++)f[h]=Aa(f[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Aa(i[s]/255)*255):i[s]=Aa(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let uT=0;class sm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uT++}),this.uuid=cs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let f;if(Array.isArray(l)){f=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?f.push(Cd(l[h].image)):f.push(Cd(l[h]))}else f=Cd(l);s.url=f}return i||(e.images[this.uuid]=s),s}}function Cd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?lT.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cT=0;const wd=new at;class In extends Qs{constructor(e=In.DEFAULT_IMAGE,i=In.DEFAULT_MAPPING,s=Ys,l=Ys,f=Ji,h=Ws,d=Pi,_=ea,m=In.DEFAULT_ANISOTROPY,v=os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cT++}),this.uuid=cs(),this.name="",this.source=new sm(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=f,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=_,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(wd).x}get height(){return this.source.getSize(wd).y}get depth(){return this.source.getSize(wd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gp:e.x=e.x-Math.floor(e.x);break;case Ys:e.x=e.x<0?0:1;break;case _p:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gp:e.y=e.y-Math.floor(e.y);break;case Ys:e.y=e.y<0?0:1;break;case _p:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=Vx;In.DEFAULT_ANISOTROPY=1;class on{constructor(e=0,i=0,s=0,l=1){on.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,f=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*f,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*f,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*f,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,f;const _=e.elements,m=_[0],v=_[4],p=_[8],x=_[1],M=_[5],A=_[9],C=_[2],y=_[6],S=_[10];if(Math.abs(v-x)<.01&&Math.abs(p-C)<.01&&Math.abs(A-y)<.01){if(Math.abs(v+x)<.1&&Math.abs(p+C)<.1&&Math.abs(A+y)<.1&&Math.abs(m+M+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const z=(m+1)/2,N=(M+1)/2,X=(S+1)/2,V=(v+x)/4,P=(p+C)/4,q=(A+y)/4;return z>N&&z>X?z<.01?(s=0,l=.707106781,f=.707106781):(s=Math.sqrt(z),l=V/s,f=P/s):N>X?N<.01?(s=.707106781,l=0,f=.707106781):(l=Math.sqrt(N),s=V/l,f=q/l):X<.01?(s=.707106781,l=.707106781,f=0):(f=Math.sqrt(X),s=P/f,l=q/f),this.set(s,l,f,i),this}let B=Math.sqrt((y-A)*(y-A)+(p-C)*(p-C)+(x-v)*(x-v));return Math.abs(B)<.001&&(B=1),this.x=(y-A)/B,this.y=(p-C)/B,this.z=(x-v)/B,this.w=Math.acos((m+M+S-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ae(this.x,e.x,i.x),this.y=Ae(this.y,e.y,i.y),this.z=Ae(this.z,e.z,i.z),this.w=Ae(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ae(this.x,e,i),this.y=Ae(this.y,e,i),this.z=Ae(this.z,e,i),this.w=Ae(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ae(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fT extends Qs{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ji,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new on(0,0,e,i),this.scissorTest=!1,this.viewport=new on(0,0,e,i);const l={width:e,height:i,depth:s.depth},f=new In(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=f.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:Ji,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,f=this.textures.length;l<f;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new sm(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ks extends fT{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class $x extends In{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=ui,this.minFilter=ui,this.wrapR=Ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hT extends In{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=ui,this.minFilter=ui,this.wrapR=Ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Js{constructor(e=new at(1/0,1/0,1/0),i=new at(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Ni.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Ni.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Ni.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const f=s.getAttribute("position");if(i===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=f.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Ni):Ni.fromBufferAttribute(f,h),Ni.applyMatrix4(e.matrixWorld),this.expandByPoint(Ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ec.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),ec.copy(s.boundingBox)),ec.applyMatrix4(e.matrixWorld),this.union(ec)}const l=e.children;for(let f=0,h=l.length;f<h;f++)this.expandByObject(l[f],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ni),Ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fl),nc.subVectors(this.max,fl),Vr.subVectors(e.a,fl),kr.subVectors(e.b,fl),Xr.subVectors(e.c,fl),es.subVectors(kr,Vr),ns.subVectors(Xr,kr),Is.subVectors(Vr,Xr);let i=[0,-es.z,es.y,0,-ns.z,ns.y,0,-Is.z,Is.y,es.z,0,-es.x,ns.z,0,-ns.x,Is.z,0,-Is.x,-es.y,es.x,0,-ns.y,ns.x,0,-Is.y,Is.x,0];return!Dd(i,Vr,kr,Xr,nc)||(i=[1,0,0,0,1,0,0,0,1],!Dd(i,Vr,kr,Xr,nc))?!1:(ic.crossVectors(es,ns),i=[ic.x,ic.y,ic.z],Dd(i,Vr,kr,Xr,nc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(va[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),va[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),va[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),va[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),va[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),va[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),va[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),va[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(va),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const va=[new at,new at,new at,new at,new at,new at,new at,new at],Ni=new at,ec=new Js,Vr=new at,kr=new at,Xr=new at,es=new at,ns=new at,Is=new at,fl=new at,nc=new at,ic=new at,Bs=new at;function Dd(o,e,i,s,l){for(let f=0,h=o.length-3;f<=h;f+=3){Bs.fromArray(o,f);const d=l.x*Math.abs(Bs.x)+l.y*Math.abs(Bs.y)+l.z*Math.abs(Bs.z),_=e.dot(Bs),m=i.dot(Bs),v=s.dot(Bs);if(Math.max(-Math.max(_,m,v),Math.min(_,m,v))>d)return!1}return!0}const dT=new Js,hl=new at,Nd=new at;class _o{constructor(e=new at,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):dT.setFromPoints(e).getCenter(s);let l=0;for(let f=0,h=e.length;f<h;f++)l=Math.max(l,s.distanceToSquared(e[f]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hl.subVectors(e,this.center);const i=hl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(hl,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hl.copy(e.center).add(Nd)),this.expandByPoint(hl.copy(e.center).sub(Nd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const xa=new at,Ud=new at,ac=new at,is=new at,Ld=new at,sc=new at,Od=new at;class rm{constructor(e=new at,i=new at(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=xa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(xa.copy(this.origin).addScaledVector(this.direction,i),xa.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Ud.copy(e).add(i).multiplyScalar(.5),ac.copy(i).sub(e).normalize(),is.copy(this.origin).sub(Ud);const f=e.distanceTo(i)*.5,h=-this.direction.dot(ac),d=is.dot(this.direction),_=-is.dot(ac),m=is.lengthSq(),v=Math.abs(1-h*h);let p,x,M,A;if(v>0)if(p=h*_-d,x=h*d-_,A=f*v,p>=0)if(x>=-A)if(x<=A){const C=1/v;p*=C,x*=C,M=p*(p+h*x+2*d)+x*(h*p+x+2*_)+m}else x=f,p=Math.max(0,-(h*x+d)),M=-p*p+x*(x+2*_)+m;else x=-f,p=Math.max(0,-(h*x+d)),M=-p*p+x*(x+2*_)+m;else x<=-A?(p=Math.max(0,-(-h*f+d)),x=p>0?-f:Math.min(Math.max(-f,-_),f),M=-p*p+x*(x+2*_)+m):x<=A?(p=0,x=Math.min(Math.max(-f,-_),f),M=x*(x+2*_)+m):(p=Math.max(0,-(h*f+d)),x=p>0?f:Math.min(Math.max(-f,-_),f),M=-p*p+x*(x+2*_)+m);else x=h>0?-f:f,p=Math.max(0,-(h*x+d)),M=-p*p+x*(x+2*_)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,p),l&&l.copy(Ud).addScaledVector(ac,x),M}intersectSphere(e,i){xa.subVectors(e.center,this.origin);const s=xa.dot(this.direction),l=xa.dot(xa)-s*s,f=e.radius*e.radius;if(l>f)return null;const h=Math.sqrt(f-l),d=s-h,_=s+h;return _<0?null:d<0?this.at(_,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,f,h,d,_;const m=1/this.direction.x,v=1/this.direction.y,p=1/this.direction.z,x=this.origin;return m>=0?(s=(e.min.x-x.x)*m,l=(e.max.x-x.x)*m):(s=(e.max.x-x.x)*m,l=(e.min.x-x.x)*m),v>=0?(f=(e.min.y-x.y)*v,h=(e.max.y-x.y)*v):(f=(e.max.y-x.y)*v,h=(e.min.y-x.y)*v),s>h||f>l||((f>s||isNaN(s))&&(s=f),(h<l||isNaN(l))&&(l=h),p>=0?(d=(e.min.z-x.z)*p,_=(e.max.z-x.z)*p):(d=(e.max.z-x.z)*p,_=(e.min.z-x.z)*p),s>_||d>l)||((d>s||s!==s)&&(s=d),(_<l||l!==l)&&(l=_),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,xa)!==null}intersectTriangle(e,i,s,l,f){Ld.subVectors(i,e),sc.subVectors(s,e),Od.crossVectors(Ld,sc);let h=this.direction.dot(Od),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;is.subVectors(this.origin,e);const _=d*this.direction.dot(sc.crossVectors(is,sc));if(_<0)return null;const m=d*this.direction.dot(Ld.cross(is));if(m<0||_+m>h)return null;const v=-d*is.dot(Od);return v<0?null:this.at(v/h,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class We{constructor(e,i,s,l,f,h,d,_,m,v,p,x,M,A,C,y){We.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,f,h,d,_,m,v,p,x,M,A,C,y)}set(e,i,s,l,f,h,d,_,m,v,p,x,M,A,C,y){const S=this.elements;return S[0]=e,S[4]=i,S[8]=s,S[12]=l,S[1]=f,S[5]=h,S[9]=d,S[13]=_,S[2]=m,S[6]=v,S[10]=p,S[14]=x,S[3]=M,S[7]=A,S[11]=C,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new We().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/jr.setFromMatrixColumn(e,0).length(),f=1/jr.setFromMatrixColumn(e,1).length(),h=1/jr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*f,i[5]=s[5]*f,i[6]=s[6]*f,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,f=e.z,h=Math.cos(s),d=Math.sin(s),_=Math.cos(l),m=Math.sin(l),v=Math.cos(f),p=Math.sin(f);if(e.order==="XYZ"){const x=h*v,M=h*p,A=d*v,C=d*p;i[0]=_*v,i[4]=-_*p,i[8]=m,i[1]=M+A*m,i[5]=x-C*m,i[9]=-d*_,i[2]=C-x*m,i[6]=A+M*m,i[10]=h*_}else if(e.order==="YXZ"){const x=_*v,M=_*p,A=m*v,C=m*p;i[0]=x+C*d,i[4]=A*d-M,i[8]=h*m,i[1]=h*p,i[5]=h*v,i[9]=-d,i[2]=M*d-A,i[6]=C+x*d,i[10]=h*_}else if(e.order==="ZXY"){const x=_*v,M=_*p,A=m*v,C=m*p;i[0]=x-C*d,i[4]=-h*p,i[8]=A+M*d,i[1]=M+A*d,i[5]=h*v,i[9]=C-x*d,i[2]=-h*m,i[6]=d,i[10]=h*_}else if(e.order==="ZYX"){const x=h*v,M=h*p,A=d*v,C=d*p;i[0]=_*v,i[4]=A*m-M,i[8]=x*m+C,i[1]=_*p,i[5]=C*m+x,i[9]=M*m-A,i[2]=-m,i[6]=d*_,i[10]=h*_}else if(e.order==="YZX"){const x=h*_,M=h*m,A=d*_,C=d*m;i[0]=_*v,i[4]=C-x*p,i[8]=A*p+M,i[1]=p,i[5]=h*v,i[9]=-d*v,i[2]=-m*v,i[6]=M*p+A,i[10]=x-C*p}else if(e.order==="XZY"){const x=h*_,M=h*m,A=d*_,C=d*m;i[0]=_*v,i[4]=-p,i[8]=m*v,i[1]=x*p+C,i[5]=h*v,i[9]=M*p-A,i[2]=A*p-M,i[6]=d*v,i[10]=C*p+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pT,e,mT)}lookAt(e,i,s){const l=this.elements;return oi.subVectors(e,i),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),as.crossVectors(s,oi),as.lengthSq()===0&&(Math.abs(s.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),as.crossVectors(s,oi)),as.normalize(),rc.crossVectors(oi,as),l[0]=as.x,l[4]=rc.x,l[8]=oi.x,l[1]=as.y,l[5]=rc.y,l[9]=oi.y,l[2]=as.z,l[6]=rc.z,l[10]=oi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,f=this.elements,h=s[0],d=s[4],_=s[8],m=s[12],v=s[1],p=s[5],x=s[9],M=s[13],A=s[2],C=s[6],y=s[10],S=s[14],B=s[3],z=s[7],N=s[11],X=s[15],V=l[0],P=l[4],q=l[8],D=l[12],w=l[1],H=l[5],nt=l[9],ct=l[13],ht=l[2],ut=l[6],W=l[10],O=l[14],Y=l[3],vt=l[7],St=l[11],Gt=l[15];return f[0]=h*V+d*w+_*ht+m*Y,f[4]=h*P+d*H+_*ut+m*vt,f[8]=h*q+d*nt+_*W+m*St,f[12]=h*D+d*ct+_*O+m*Gt,f[1]=v*V+p*w+x*ht+M*Y,f[5]=v*P+p*H+x*ut+M*vt,f[9]=v*q+p*nt+x*W+M*St,f[13]=v*D+p*ct+x*O+M*Gt,f[2]=A*V+C*w+y*ht+S*Y,f[6]=A*P+C*H+y*ut+S*vt,f[10]=A*q+C*nt+y*W+S*St,f[14]=A*D+C*ct+y*O+S*Gt,f[3]=B*V+z*w+N*ht+X*Y,f[7]=B*P+z*H+N*ut+X*vt,f[11]=B*q+z*nt+N*W+X*St,f[15]=B*D+z*ct+N*O+X*Gt,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],f=e[12],h=e[1],d=e[5],_=e[9],m=e[13],v=e[2],p=e[6],x=e[10],M=e[14],A=e[3],C=e[7],y=e[11],S=e[15];return A*(+f*_*p-l*m*p-f*d*x+s*m*x+l*d*M-s*_*M)+C*(+i*_*M-i*m*x+f*h*x-l*h*M+l*m*v-f*_*v)+y*(+i*m*p-i*d*M-f*h*p+s*h*M+f*d*v-s*m*v)+S*(-l*d*v-i*_*p+i*d*x+l*h*p-s*h*x+s*_*v)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],f=e[3],h=e[4],d=e[5],_=e[6],m=e[7],v=e[8],p=e[9],x=e[10],M=e[11],A=e[12],C=e[13],y=e[14],S=e[15],B=p*y*m-C*x*m+C*_*M-d*y*M-p*_*S+d*x*S,z=A*x*m-v*y*m-A*_*M+h*y*M+v*_*S-h*x*S,N=v*C*m-A*p*m+A*d*M-h*C*M-v*d*S+h*p*S,X=A*p*_-v*C*_-A*d*x+h*C*x+v*d*y-h*p*y,V=i*B+s*z+l*N+f*X;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/V;return e[0]=B*P,e[1]=(C*x*f-p*y*f-C*l*M+s*y*M+p*l*S-s*x*S)*P,e[2]=(d*y*f-C*_*f+C*l*m-s*y*m-d*l*S+s*_*S)*P,e[3]=(p*_*f-d*x*f-p*l*m+s*x*m+d*l*M-s*_*M)*P,e[4]=z*P,e[5]=(v*y*f-A*x*f+A*l*M-i*y*M-v*l*S+i*x*S)*P,e[6]=(A*_*f-h*y*f-A*l*m+i*y*m+h*l*S-i*_*S)*P,e[7]=(h*x*f-v*_*f+v*l*m-i*x*m-h*l*M+i*_*M)*P,e[8]=N*P,e[9]=(A*p*f-v*C*f-A*s*M+i*C*M+v*s*S-i*p*S)*P,e[10]=(h*C*f-A*d*f+A*s*m-i*C*m-h*s*S+i*d*S)*P,e[11]=(v*d*f-h*p*f-v*s*m+i*p*m+h*s*M-i*d*M)*P,e[12]=X*P,e[13]=(v*C*l-A*p*l+A*s*x-i*C*x-v*s*y+i*p*y)*P,e[14]=(A*d*l-h*C*l-A*s*_+i*C*_+h*s*y-i*d*y)*P,e[15]=(h*p*l-v*d*l+v*s*_-i*p*_-h*s*x+i*d*x)*P,this}scale(e){const i=this.elements,s=e.x,l=e.y,f=e.z;return i[0]*=s,i[4]*=l,i[8]*=f,i[1]*=s,i[5]*=l,i[9]*=f,i[2]*=s,i[6]*=l,i[10]*=f,i[3]*=s,i[7]*=l,i[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),f=1-s,h=e.x,d=e.y,_=e.z,m=f*h,v=f*d;return this.set(m*h+s,m*d-l*_,m*_+l*d,0,m*d+l*_,v*d+s,v*_-l*h,0,m*_-l*d,v*_+l*h,f*_*_+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,f,h){return this.set(1,s,f,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,f=i._x,h=i._y,d=i._z,_=i._w,m=f+f,v=h+h,p=d+d,x=f*m,M=f*v,A=f*p,C=h*v,y=h*p,S=d*p,B=_*m,z=_*v,N=_*p,X=s.x,V=s.y,P=s.z;return l[0]=(1-(C+S))*X,l[1]=(M+N)*X,l[2]=(A-z)*X,l[3]=0,l[4]=(M-N)*V,l[5]=(1-(x+S))*V,l[6]=(y+B)*V,l[7]=0,l[8]=(A+z)*P,l[9]=(y-B)*P,l[10]=(1-(x+C))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let f=jr.set(l[0],l[1],l[2]).length();const h=jr.set(l[4],l[5],l[6]).length(),d=jr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(f=-f),e.x=l[12],e.y=l[13],e.z=l[14],Ui.copy(this);const m=1/f,v=1/h,p=1/d;return Ui.elements[0]*=m,Ui.elements[1]*=m,Ui.elements[2]*=m,Ui.elements[4]*=v,Ui.elements[5]*=v,Ui.elements[6]*=v,Ui.elements[8]*=p,Ui.elements[9]*=p,Ui.elements[10]*=p,i.setFromRotationMatrix(Ui),s.x=f,s.y=h,s.z=d,this}makePerspective(e,i,s,l,f,h,d=ta,_=!1){const m=this.elements,v=2*f/(i-e),p=2*f/(s-l),x=(i+e)/(i-e),M=(s+l)/(s-l);let A,C;if(_)A=f/(h-f),C=h*f/(h-f);else if(d===ta)A=-(h+f)/(h-f),C=-2*h*f/(h-f);else if(d===Lc)A=-h/(h-f),C=-h*f/(h-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=v,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=p,m[9]=M,m[13]=0,m[2]=0,m[6]=0,m[10]=A,m[14]=C,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,s,l,f,h,d=ta,_=!1){const m=this.elements,v=2/(i-e),p=2/(s-l),x=-(i+e)/(i-e),M=-(s+l)/(s-l);let A,C;if(_)A=1/(h-f),C=h/(h-f);else if(d===ta)A=-2/(h-f),C=-(h+f)/(h-f);else if(d===Lc)A=-1/(h-f),C=-f/(h-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=v,m[4]=0,m[8]=0,m[12]=x,m[1]=0,m[5]=p,m[9]=0,m[13]=M,m[2]=0,m[6]=0,m[10]=A,m[14]=C,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const jr=new at,Ui=new We,pT=new at(0,0,0),mT=new at(1,1,1),as=new at,rc=new at,oi=new at,B0=new We,F0=new Dl;class Qn{constructor(e=0,i=0,s=0,l=Qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,f=l[0],h=l[4],d=l[8],_=l[1],m=l[5],v=l[9],p=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Ae(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-h,f)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(_,m)):(this._y=Math.atan2(-p,f),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-p,M),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(_,f));break;case"ZYX":this._y=Math.asin(-Ae(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(_,f)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(Ae(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-p,f)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Ae(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,f)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return B0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(B0,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return F0.setFromEuler(this),this.setFromQuaternion(F0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qn.DEFAULT_ORDER="XYZ";class om{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gT=0;const H0=new at,qr=new Dl,Sa=new We,oc=new at,dl=new at,_T=new at,vT=new Dl,G0=new at(1,0,0),V0=new at(0,1,0),k0=new at(0,0,1),X0={type:"added"},xT={type:"removed"},Yr={type:"childadded",child:null},Pd={type:"childremoved",child:null};class vn extends Qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gT++}),this.uuid=cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const e=new at,i=new Qn,s=new Dl,l=new at(1,1,1);function f(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(f),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new We},normalMatrix:{value:new pe}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new om,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return qr.setFromAxisAngle(e,i),this.quaternion.multiply(qr),this}rotateOnWorldAxis(e,i){return qr.setFromAxisAngle(e,i),this.quaternion.premultiply(qr),this}rotateX(e){return this.rotateOnAxis(G0,e)}rotateY(e){return this.rotateOnAxis(V0,e)}rotateZ(e){return this.rotateOnAxis(k0,e)}translateOnAxis(e,i){return H0.copy(e).applyQuaternion(this.quaternion),this.position.add(H0.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(G0,e)}translateY(e){return this.translateOnAxis(V0,e)}translateZ(e){return this.translateOnAxis(k0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?oc.copy(e):oc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),dl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sa.lookAt(dl,oc,this.up):Sa.lookAt(oc,dl,this.up),this.quaternion.setFromRotationMatrix(Sa),l&&(Sa.extractRotation(l.matrixWorld),qr.setFromRotationMatrix(Sa),this.quaternion.premultiply(qr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(X0),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(xT),Pd.child=e,this.dispatchEvent(Pd),Pd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sa.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(X0),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let f=0,h=l.length;f<h;f++)l[f].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dl,e,_T),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dl,vT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let f=0,h=l.length;f<h;f++)l[f].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function f(d,_){return d[_.uuid]===void 0&&(d[_.uuid]=_.toJSON(e)),_.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=f(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const _=d.shapes;if(Array.isArray(_))for(let m=0,v=_.length;m<v;m++){const p=_[m];f(e.shapes,p)}else f(e.shapes,_)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let _=0,m=this.material.length;_<m;_++)d.push(f(e.materials,this.material[_]));l.material=d}else l.material=f(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const _=this.animations[d];l.animations.push(f(e.animations,_))}}if(i){const d=h(e.geometries),_=h(e.materials),m=h(e.textures),v=h(e.images),p=h(e.shapes),x=h(e.skeletons),M=h(e.animations),A=h(e.nodes);d.length>0&&(s.geometries=d),_.length>0&&(s.materials=_),m.length>0&&(s.textures=m),v.length>0&&(s.images=v),p.length>0&&(s.shapes=p),x.length>0&&(s.skeletons=x),M.length>0&&(s.animations=M),A.length>0&&(s.nodes=A)}return s.object=l,s;function h(d){const _=[];for(const m in d){const v=d[m];delete v.metadata,_.push(v)}return _}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}vn.DEFAULT_UP=new at(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Li=new at,ya=new at,zd=new at,Ma=new at,Wr=new at,Zr=new at,j0=new at,Id=new at,Bd=new at,Fd=new at,Hd=new on,Gd=new on,Vd=new on;class Ei{constructor(e=new at,i=new at,s=new at){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Li.subVectors(e,i),l.cross(Li);const f=l.lengthSq();return f>0?l.multiplyScalar(1/Math.sqrt(f)):l.set(0,0,0)}static getBarycoord(e,i,s,l,f){Li.subVectors(l,i),ya.subVectors(s,i),zd.subVectors(e,i);const h=Li.dot(Li),d=Li.dot(ya),_=Li.dot(zd),m=ya.dot(ya),v=ya.dot(zd),p=h*m-d*d;if(p===0)return f.set(0,0,0),null;const x=1/p,M=(m*_-d*v)*x,A=(h*v-d*_)*x;return f.set(1-M-A,A,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Ma)===null?!1:Ma.x>=0&&Ma.y>=0&&Ma.x+Ma.y<=1}static getInterpolation(e,i,s,l,f,h,d,_){return this.getBarycoord(e,i,s,l,Ma)===null?(_.x=0,_.y=0,"z"in _&&(_.z=0),"w"in _&&(_.w=0),null):(_.setScalar(0),_.addScaledVector(f,Ma.x),_.addScaledVector(h,Ma.y),_.addScaledVector(d,Ma.z),_)}static getInterpolatedAttribute(e,i,s,l,f,h){return Hd.setScalar(0),Gd.setScalar(0),Vd.setScalar(0),Hd.fromBufferAttribute(e,i),Gd.fromBufferAttribute(e,s),Vd.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Hd,f.x),h.addScaledVector(Gd,f.y),h.addScaledVector(Vd,f.z),h}static isFrontFacing(e,i,s,l){return Li.subVectors(s,i),ya.subVectors(e,i),Li.cross(ya).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Li.subVectors(this.c,this.b),ya.subVectors(this.a,this.b),Li.cross(ya).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ei.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,f){return Ei.getInterpolation(e,this.a,this.b,this.c,i,s,l,f)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,f=this.c;let h,d;Wr.subVectors(l,s),Zr.subVectors(f,s),Id.subVectors(e,s);const _=Wr.dot(Id),m=Zr.dot(Id);if(_<=0&&m<=0)return i.copy(s);Bd.subVectors(e,l);const v=Wr.dot(Bd),p=Zr.dot(Bd);if(v>=0&&p<=v)return i.copy(l);const x=_*p-v*m;if(x<=0&&_>=0&&v<=0)return h=_/(_-v),i.copy(s).addScaledVector(Wr,h);Fd.subVectors(e,f);const M=Wr.dot(Fd),A=Zr.dot(Fd);if(A>=0&&M<=A)return i.copy(f);const C=M*m-_*A;if(C<=0&&m>=0&&A<=0)return d=m/(m-A),i.copy(s).addScaledVector(Zr,d);const y=v*A-M*p;if(y<=0&&p-v>=0&&M-A>=0)return j0.subVectors(f,l),d=(p-v)/(p-v+(M-A)),i.copy(l).addScaledVector(j0,d);const S=1/(y+C+x);return h=C*S,d=x*S,i.copy(s).addScaledVector(Wr,h).addScaledVector(Zr,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const tS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ss={h:0,s:0,l:0},lc={h:0,s:0,l:0};function kd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Me{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=yi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ue.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Ue.workingColorSpace){return this.r=e,this.g=i,this.b=s,Ue.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Ue.workingColorSpace){if(e=aT(e,1),i=Ae(i,0,1),s=Ae(s,0,1),i===0)this.r=this.g=this.b=s;else{const f=s<=.5?s*(1+i):s+i-s*i,h=2*s-f;this.r=kd(h,f,e+1/3),this.g=kd(h,f,e),this.b=kd(h,f,e-1/3)}return Ue.colorSpaceToWorking(this,l),this}setStyle(e,i=yi){function s(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=l[1],h=f.length;if(h===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(f,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=yi){const s=tS[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Aa(e.r),this.g=Aa(e.g),this.b=Aa(e.b),this}copyLinearToSRGB(e){return this.r=co(e.r),this.g=co(e.g),this.b=co(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yi){return Ue.workingToColorSpace(Pn.copy(this),e),Math.round(Ae(Pn.r*255,0,255))*65536+Math.round(Ae(Pn.g*255,0,255))*256+Math.round(Ae(Pn.b*255,0,255))}getHexString(e=yi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ue.workingColorSpace){Ue.workingToColorSpace(Pn.copy(this),i);const s=Pn.r,l=Pn.g,f=Pn.b,h=Math.max(s,l,f),d=Math.min(s,l,f);let _,m;const v=(d+h)/2;if(d===h)_=0,m=0;else{const p=h-d;switch(m=v<=.5?p/(h+d):p/(2-h-d),h){case s:_=(l-f)/p+(l<f?6:0);break;case l:_=(f-s)/p+2;break;case f:_=(s-l)/p+4;break}_/=6}return e.h=_,e.s=m,e.l=v,e}getRGB(e,i=Ue.workingColorSpace){return Ue.workingToColorSpace(Pn.copy(this),i),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=yi){Ue.workingToColorSpace(Pn.copy(this),e);const i=Pn.r,s=Pn.g,l=Pn.b;return e!==yi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(ss),this.setHSL(ss.h+e,ss.s+i,ss.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(ss),e.getHSL(lc);const s=bd(ss.h,lc.h,i),l=bd(ss.s,lc.s,i),f=bd(ss.l,lc.l,i);return this.setHSL(s,l,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,f=e.elements;return this.r=f[0]*i+f[3]*s+f[6]*l,this.g=f[1]*i+f[4]*s+f[7]*l,this.b=f[2]*i+f[5]*s+f[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new Me;Me.NAMES=tS;let ST=0;class $s extends Qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ST++}),this.uuid=cs(),this.name="",this.type="Material",this.blending=uo,this.side=fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sp,this.blendDst=rp,this.blendEquation=js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=fo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=U0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hr,this.stencilZFail=Hr,this.stencilZPass=Hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==uo&&(s.blending=this.blending),this.side!==fs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==sp&&(s.blendSrc=this.blendSrc),this.blendDst!==rp&&(s.blendDst=this.blendDst),this.blendEquation!==js&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==fo&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==U0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Hr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Hr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(f){const h=[];for(const d in f){const _=f[d];delete _.metadata,h.push(_)}return h}if(i){const f=l(e.textures),h=l(e.images);f.length>0&&(s.textures=f),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let f=0;f!==l;++f)s[f]=i[f].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class eS extends $s{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=Gx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pn=new at,uc=new xe;let yT=0;class Ti{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yT++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=qp,this.updateRanges=[],this.gpuType=$i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,f=this.itemSize;l<f;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)uc.fromBufferAttribute(this,i),uc.applyMatrix3(e),this.setXY(i,uc.x,uc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix3(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix4(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyNormalMatrix(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.transformDirection(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Qi(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=je(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Qi(i,this.array)),i}setX(e,i){return this.normalized&&(i=je(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Qi(i,this.array)),i}setY(e,i){return this.normalized&&(i=je(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Qi(i,this.array)),i}setZ(e,i){return this.normalized&&(i=je(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Qi(i,this.array)),i}setW(e,i){return this.normalized&&(i=je(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=je(i,this.array),s=je(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=je(i,this.array),s=je(s,this.array),l=je(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,f){return e*=this.itemSize,this.normalized&&(i=je(i,this.array),s=je(s,this.array),l=je(l,this.array),f=je(f,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qp&&(e.usage=this.usage),e}}class nS extends Ti{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class iS extends Ti{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class zi extends Ti{constructor(e,i,s){super(new Float32Array(e),i,s)}}let MT=0;const Si=new We,Xd=new vn,Kr=new at,li=new Js,pl=new Js,Tn=new at;class Ii extends Qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:MT++}),this.uuid=cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jx(e)?iS:nS)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const f=new pe().getNormalMatrix(e);s.applyNormalMatrix(f),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Si.makeRotationFromQuaternion(e),this.applyMatrix4(Si),this}rotateX(e){return Si.makeRotationX(e),this.applyMatrix4(Si),this}rotateY(e){return Si.makeRotationY(e),this.applyMatrix4(Si),this}rotateZ(e){return Si.makeRotationZ(e),this.applyMatrix4(Si),this}translate(e,i,s){return Si.makeTranslation(e,i,s),this.applyMatrix4(Si),this}scale(e,i,s){return Si.makeScale(e,i,s),this.applyMatrix4(Si),this}lookAt(e){return Xd.lookAt(e),Xd.updateMatrix(),this.applyMatrix4(Xd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,f=e.length;l<f;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new zi(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const f=e[l];i.setXYZ(l,f.x,f.y,f.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Js);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new at(-1/0,-1/0,-1/0),new at(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const f=i[s];li.setFromBufferAttribute(f),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _o);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new at,1/0);return}if(e){const s=this.boundingSphere.center;if(li.setFromBufferAttribute(e),i)for(let f=0,h=i.length;f<h;f++){const d=i[f];pl.setFromBufferAttribute(d),this.morphTargetsRelative?(Tn.addVectors(li.min,pl.min),li.expandByPoint(Tn),Tn.addVectors(li.max,pl.max),li.expandByPoint(Tn)):(li.expandByPoint(pl.min),li.expandByPoint(pl.max))}li.getCenter(s);let l=0;for(let f=0,h=e.count;f<h;f++)Tn.fromBufferAttribute(e,f),l=Math.max(l,s.distanceToSquared(Tn));if(i)for(let f=0,h=i.length;f<h;f++){const d=i[f],_=this.morphTargetsRelative;for(let m=0,v=d.count;m<v;m++)Tn.fromBufferAttribute(d,m),_&&(Kr.fromBufferAttribute(e,m),Tn.add(Kr)),l=Math.max(l,s.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,f=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ti(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],_=[];for(let q=0;q<s.count;q++)d[q]=new at,_[q]=new at;const m=new at,v=new at,p=new at,x=new xe,M=new xe,A=new xe,C=new at,y=new at;function S(q,D,w){m.fromBufferAttribute(s,q),v.fromBufferAttribute(s,D),p.fromBufferAttribute(s,w),x.fromBufferAttribute(f,q),M.fromBufferAttribute(f,D),A.fromBufferAttribute(f,w),v.sub(m),p.sub(m),M.sub(x),A.sub(x);const H=1/(M.x*A.y-A.x*M.y);isFinite(H)&&(C.copy(v).multiplyScalar(A.y).addScaledVector(p,-M.y).multiplyScalar(H),y.copy(p).multiplyScalar(M.x).addScaledVector(v,-A.x).multiplyScalar(H),d[q].add(C),d[D].add(C),d[w].add(C),_[q].add(y),_[D].add(y),_[w].add(y))}let B=this.groups;B.length===0&&(B=[{start:0,count:e.count}]);for(let q=0,D=B.length;q<D;++q){const w=B[q],H=w.start,nt=w.count;for(let ct=H,ht=H+nt;ct<ht;ct+=3)S(e.getX(ct+0),e.getX(ct+1),e.getX(ct+2))}const z=new at,N=new at,X=new at,V=new at;function P(q){X.fromBufferAttribute(l,q),V.copy(X);const D=d[q];z.copy(D),z.sub(X.multiplyScalar(X.dot(D))).normalize(),N.crossVectors(V,D);const H=N.dot(_[q])<0?-1:1;h.setXYZW(q,z.x,z.y,z.z,H)}for(let q=0,D=B.length;q<D;++q){const w=B[q],H=w.start,nt=w.count;for(let ct=H,ht=H+nt;ct<ht;ct+=3)P(e.getX(ct+0)),P(e.getX(ct+1)),P(e.getX(ct+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ti(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,M=s.count;x<M;x++)s.setXYZ(x,0,0,0);const l=new at,f=new at,h=new at,d=new at,_=new at,m=new at,v=new at,p=new at;if(e)for(let x=0,M=e.count;x<M;x+=3){const A=e.getX(x+0),C=e.getX(x+1),y=e.getX(x+2);l.fromBufferAttribute(i,A),f.fromBufferAttribute(i,C),h.fromBufferAttribute(i,y),v.subVectors(h,f),p.subVectors(l,f),v.cross(p),d.fromBufferAttribute(s,A),_.fromBufferAttribute(s,C),m.fromBufferAttribute(s,y),d.add(v),_.add(v),m.add(v),s.setXYZ(A,d.x,d.y,d.z),s.setXYZ(C,_.x,_.y,_.z),s.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),f.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),v.subVectors(h,f),p.subVectors(l,f),v.cross(p),s.setXYZ(x+0,v.x,v.y,v.z),s.setXYZ(x+1,v.x,v.y,v.z),s.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Tn.fromBufferAttribute(e,i),Tn.normalize(),e.setXYZ(i,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function e(d,_){const m=d.array,v=d.itemSize,p=d.normalized,x=new m.constructor(_.length*v);let M=0,A=0;for(let C=0,y=_.length;C<y;C++){d.isInterleavedBufferAttribute?M=_[C]*d.data.stride+d.offset:M=_[C]*v;for(let S=0;S<v;S++)x[A++]=m[M++]}return new Ti(x,v,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ii,s=this.index.array,l=this.attributes;for(const d in l){const _=l[d],m=e(_,s);i.setAttribute(d,m)}const f=this.morphAttributes;for(const d in f){const _=[],m=f[d];for(let v=0,p=m.length;v<p;v++){const x=m[v],M=e(x,s);_.push(M)}i.morphAttributes[d]=_}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,_=h.length;d<_;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const _=this.parameters;for(const m in _)_[m]!==void 0&&(e[m]=_[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const _ in s){const m=s[_];e.data.attributes[_]=m.toJSON(e.data)}const l={};let f=!1;for(const _ in this.morphAttributes){const m=this.morphAttributes[_],v=[];for(let p=0,x=m.length;p<x;p++){const M=m[p];v.push(M.toJSON(e.data))}v.length>0&&(l[_]=v,f=!0)}f&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const m in l){const v=l[m];this.setAttribute(m,v.clone(i))}const f=e.morphAttributes;for(const m in f){const v=[],p=f[m];for(let x=0,M=p.length;x<M;x++)v.push(p[x].clone(i));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let m=0,v=h.length;m<v;m++){const p=h[m];this.addGroup(p.start,p.count,p.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const _=e.boundingSphere;return _!==null&&(this.boundingSphere=_.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const q0=new We,Fs=new rm,cc=new _o,Y0=new at,fc=new at,hc=new at,dc=new at,jd=new at,pc=new at,W0=new at,mc=new at;class zn extends vn{constructor(e=new Ii,i=new eS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=l.length;f<h;f++){const d=l[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=f}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,f=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(f&&d){pc.set(0,0,0);for(let _=0,m=f.length;_<m;_++){const v=d[_],p=f[_];v!==0&&(jd.fromBufferAttribute(p,e),h?pc.addScaledVector(jd,v):pc.addScaledVector(jd.sub(i),v))}i.add(pc)}return i}raycast(e,i){const s=this.geometry,l=this.material,f=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),cc.copy(s.boundingSphere),cc.applyMatrix4(f),Fs.copy(e.ray).recast(e.near),!(cc.containsPoint(Fs.origin)===!1&&(Fs.intersectSphere(cc,Y0)===null||Fs.origin.distanceToSquared(Y0)>(e.far-e.near)**2))&&(q0.copy(f).invert(),Fs.copy(e.ray).applyMatrix4(q0),!(s.boundingBox!==null&&Fs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Fs)))}_computeIntersections(e,i,s){let l;const f=this.geometry,h=this.material,d=f.index,_=f.attributes.position,m=f.attributes.uv,v=f.attributes.uv1,p=f.attributes.normal,x=f.groups,M=f.drawRange;if(d!==null)if(Array.isArray(h))for(let A=0,C=x.length;A<C;A++){const y=x[A],S=h[y.materialIndex],B=Math.max(y.start,M.start),z=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let N=B,X=z;N<X;N+=3){const V=d.getX(N),P=d.getX(N+1),q=d.getX(N+2);l=gc(this,S,e,s,m,v,p,V,P,q),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),C=Math.min(d.count,M.start+M.count);for(let y=A,S=C;y<S;y+=3){const B=d.getX(y),z=d.getX(y+1),N=d.getX(y+2);l=gc(this,h,e,s,m,v,p,B,z,N),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(_!==void 0)if(Array.isArray(h))for(let A=0,C=x.length;A<C;A++){const y=x[A],S=h[y.materialIndex],B=Math.max(y.start,M.start),z=Math.min(_.count,Math.min(y.start+y.count,M.start+M.count));for(let N=B,X=z;N<X;N+=3){const V=N,P=N+1,q=N+2;l=gc(this,S,e,s,m,v,p,V,P,q),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),C=Math.min(_.count,M.start+M.count);for(let y=A,S=C;y<S;y+=3){const B=y,z=y+1,N=y+2;l=gc(this,h,e,s,m,v,p,B,z,N),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function ET(o,e,i,s,l,f,h,d){let _;if(e.side===Kn?_=s.intersectTriangle(h,f,l,!0,d):_=s.intersectTriangle(l,f,h,e.side===fs,d),_===null)return null;mc.copy(d),mc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(mc);return m<i.near||m>i.far?null:{distance:m,point:mc.clone(),object:o}}function gc(o,e,i,s,l,f,h,d,_,m){o.getVertexPosition(d,fc),o.getVertexPosition(_,hc),o.getVertexPosition(m,dc);const v=ET(o,e,i,s,fc,hc,dc,W0);if(v){const p=new at;Ei.getBarycoord(W0,fc,hc,dc,p),l&&(v.uv=Ei.getInterpolatedAttribute(l,d,_,m,p,new xe)),f&&(v.uv1=Ei.getInterpolatedAttribute(f,d,_,m,p,new xe)),h&&(v.normal=Ei.getInterpolatedAttribute(h,d,_,m,p,new at),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const x={a:d,b:_,c:m,normal:new at,materialIndex:0};Ei.getNormal(fc,hc,dc,x.normal),v.face=x,v.barycoord=p}return v}class Oi extends Ii{constructor(e=1,i=1,s=1,l=1,f=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:f,depthSegments:h};const d=this;l=Math.floor(l),f=Math.floor(f),h=Math.floor(h);const _=[],m=[],v=[],p=[];let x=0,M=0;A("z","y","x",-1,-1,s,i,e,h,f,0),A("z","y","x",1,-1,s,i,-e,h,f,1),A("x","z","y",1,1,e,s,i,l,h,2),A("x","z","y",1,-1,e,s,-i,l,h,3),A("x","y","z",1,-1,e,i,s,l,f,4),A("x","y","z",-1,-1,e,i,-s,l,f,5),this.setIndex(_),this.setAttribute("position",new zi(m,3)),this.setAttribute("normal",new zi(v,3)),this.setAttribute("uv",new zi(p,2));function A(C,y,S,B,z,N,X,V,P,q,D){const w=N/P,H=X/q,nt=N/2,ct=X/2,ht=V/2,ut=P+1,W=q+1;let O=0,Y=0;const vt=new at;for(let St=0;St<W;St++){const Gt=St*H-ct;for(let re=0;re<ut;re++){const Re=re*w-nt;vt[C]=Re*B,vt[y]=Gt*z,vt[S]=ht,m.push(vt.x,vt.y,vt.z),vt[C]=0,vt[y]=0,vt[S]=V>0?1:-1,v.push(vt.x,vt.y,vt.z),p.push(re/P),p.push(1-St/q),O+=1}}for(let St=0;St<q;St++)for(let Gt=0;Gt<P;Gt++){const re=x+Gt+ut*St,Re=x+Gt+ut*(St+1),F=x+(Gt+1)+ut*(St+1),ft=x+(Gt+1)+ut*St;_.push(re,Re,ft),_.push(Re,F,ft),Y+=6}d.addGroup(M,Y,D),M+=Y,x+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function go(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Xn(o){const e={};for(let i=0;i<o.length;i++){const s=go(o[i]);for(const l in s)e[l]=s[l]}return e}function TT(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function aS(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ue.workingColorSpace}const bT={clone:go,merge:Xn};var AT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,RT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hs extends $s{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=AT,this.fragmentShader=RT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=go(e.uniforms),this.uniformsGroups=TT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class sS extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=ta,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const rs=new at,Z0=new xe,K0=new xe;class Mi extends sS{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Yp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Td*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yp*2*Math.atan(Math.tan(Td*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rs.x,rs.y).multiplyScalar(-e/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(rs.x,rs.y).multiplyScalar(-e/rs.z)}getViewSize(e,i){return this.getViewBounds(e,Z0,K0),i.subVectors(K0,Z0)}setViewOffset(e,i,s,l,f,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Td*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,f=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const _=h.fullWidth,m=h.fullHeight;f+=h.offsetX*l/_,i-=h.offsetY*s/m,l*=h.width/_,s*=h.height/m}const d=this.filmOffset;d!==0&&(f+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Qr=-90,Jr=1;class CT extends vn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Mi(Qr,Jr,e,i);l.layers=this.layers,this.add(l);const f=new Mi(Qr,Jr,e,i);f.layers=this.layers,this.add(f);const h=new Mi(Qr,Jr,e,i);h.layers=this.layers,this.add(h);const d=new Mi(Qr,Jr,e,i);d.layers=this.layers,this.add(d);const _=new Mi(Qr,Jr,e,i);_.layers=this.layers,this.add(_);const m=new Mi(Qr,Jr,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,f,h,d,_]=i;for(const m of i)this.remove(m);if(e===ta)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),_.up.set(0,1,0),_.lookAt(0,0,-1);else if(e===Lc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),_.up.set(0,-1,0),_.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,h,d,_,m,v]=this.children,p=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,f),e.setRenderTarget(s,1,l),e.render(i,h),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,_),e.setRenderTarget(s,4,l),e.render(i,m),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,l),e.render(i,v),e.setRenderTarget(p,x,M),e.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class rS extends In{constructor(e=[],i=ho,s,l,f,h,d,_,m,v){super(e,i,s,l,f,h,d,_,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wT extends Ks{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new rS(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Oi(5,5,5),f=new hs({name:"CubemapFromEquirect",uniforms:go(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Kn,blending:ls});f.uniforms.tEquirect.value=i;const h=new zn(l,f),d=i.minFilter;return i.minFilter===Ws&&(i.minFilter=Ji),new CT(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const f=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(f)}}class Ml extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const DT={type:"move"};class qd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ml,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ml,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new at,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new at),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ml,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new at,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new at),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,f=null,h=null;const d=this._targetRay,_=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){h=!0;for(const C of e.hand.values()){const y=i.getJointPose(C,s),S=this._getHandJoint(m,C);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const v=m.joints["index-finger-tip"],p=m.joints["thumb-tip"],x=v.position.distanceTo(p.position),M=.02,A=.005;m.inputState.pinching&&x>M+A?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=M-A&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else _!==null&&e.gripSpace&&(f=i.getPose(e.gripSpace,s),f!==null&&(_.matrix.fromArray(f.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,f.linearVelocity?(_.hasLinearVelocity=!0,_.linearVelocity.copy(f.linearVelocity)):_.hasLinearVelocity=!1,f.angularVelocity?(_.hasAngularVelocity=!0,_.angularVelocity.copy(f.angularVelocity)):_.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&f!==null&&(l=f),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(DT)))}return d!==null&&(d.visible=l!==null),_!==null&&(_.visible=f!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Ml;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class lm{constructor(e,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Me(e),this.density=i}clone(){return new lm(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class NT extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class UT{constructor(e,i){this.isInterleavedBuffer=!0,this.array=e,this.stride=i,this.count=e!==void 0?e.length/i:0,this.usage=qp,this.updateRanges=[],this.version=0,this.uuid=cs()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,i,s){e*=this.stride,s*=i.stride;for(let l=0,f=this.stride;l<f;l++)this.array[e+l]=i.array[s+l];return this}set(e,i=0){return this.array.set(e,i),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cs()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=cs()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kn=new at;class Pc{constructor(e,i,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=i,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let i=0,s=this.data.count;i<s;i++)kn.fromBufferAttribute(this,i),kn.applyMatrix4(e),this.setXYZ(i,kn.x,kn.y,kn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)kn.fromBufferAttribute(this,i),kn.applyNormalMatrix(e),this.setXYZ(i,kn.x,kn.y,kn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)kn.fromBufferAttribute(this,i),kn.transformDirection(e),this.setXYZ(i,kn.x,kn.y,kn.z);return this}getComponent(e,i){let s=this.array[e*this.data.stride+this.offset+i];return this.normalized&&(s=Qi(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=je(s,this.array)),this.data.array[e*this.data.stride+this.offset+i]=s,this}setX(e,i){return this.normalized&&(i=je(i,this.array)),this.data.array[e*this.data.stride+this.offset]=i,this}setY(e,i){return this.normalized&&(i=je(i,this.array)),this.data.array[e*this.data.stride+this.offset+1]=i,this}setZ(e,i){return this.normalized&&(i=je(i,this.array)),this.data.array[e*this.data.stride+this.offset+2]=i,this}setW(e,i){return this.normalized&&(i=je(i,this.array)),this.data.array[e*this.data.stride+this.offset+3]=i,this}getX(e){let i=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(i=Qi(i,this.array)),i}getY(e){let i=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(i=Qi(i,this.array)),i}getZ(e){let i=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(i=Qi(i,this.array)),i}getW(e){let i=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(i=Qi(i,this.array)),i}setXY(e,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(i=je(i,this.array),s=je(s,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this}setXYZ(e,i,s,l){return e=e*this.data.stride+this.offset,this.normalized&&(i=je(i,this.array),s=je(s,this.array),l=je(l,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this.data.array[e+2]=l,this}setXYZW(e,i,s,l,f){return e=e*this.data.stride+this.offset,this.normalized&&(i=je(i,this.array),s=je(s,this.array),l=je(l,this.array),f=je(f,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this.data.array[e+2]=l,this.data.array[e+3]=f,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let f=0;f<this.itemSize;f++)i.push(this.data.array[l+f])}return new Ti(new this.array.constructor(i),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Pc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let f=0;f<this.itemSize;f++)i.push(this.data.array[l+f])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class oS extends $s{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let $r;const ml=new at,to=new at,eo=new at,no=new xe,gl=new xe,lS=new We,_c=new at,_l=new at,vc=new at,Q0=new xe,Yd=new xe,J0=new xe;class LT extends vn{constructor(e=new oS){if(super(),this.isSprite=!0,this.type="Sprite",$r===void 0){$r=new Ii;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new UT(i,5);$r.setIndex([0,1,2,0,2,3]),$r.setAttribute("position",new Pc(s,3,0,!1)),$r.setAttribute("uv",new Pc(s,2,3,!1))}this.geometry=$r,this.material=e,this.center=new xe(.5,.5),this.count=1}raycast(e,i){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),to.setFromMatrixScale(this.matrixWorld),lS.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),eo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&to.multiplyScalar(-eo.z);const s=this.material.rotation;let l,f;s!==0&&(f=Math.cos(s),l=Math.sin(s));const h=this.center;xc(_c.set(-.5,-.5,0),eo,h,to,l,f),xc(_l.set(.5,-.5,0),eo,h,to,l,f),xc(vc.set(.5,.5,0),eo,h,to,l,f),Q0.set(0,0),Yd.set(1,0),J0.set(1,1);let d=e.ray.intersectTriangle(_c,_l,vc,!1,ml);if(d===null&&(xc(_l.set(-.5,.5,0),eo,h,to,l,f),Yd.set(0,1),d=e.ray.intersectTriangle(_c,vc,_l,!1,ml),d===null))return;const _=e.ray.origin.distanceTo(ml);_<e.near||_>e.far||i.push({distance:_,point:ml.clone(),uv:Ei.getInterpolation(ml,_c,_l,vc,Q0,Yd,J0,new xe),face:null,object:this})}copy(e,i){return super.copy(e,i),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function xc(o,e,i,s,l,f){no.subVectors(o,i).addScalar(.5).multiply(s),l!==void 0?(gl.x=f*no.x-l*no.y,gl.y=l*no.x+f*no.y):gl.copy(no),o.copy(e),o.x+=gl.x,o.y+=gl.y,o.applyMatrix4(lS)}class OT extends In{constructor(e=null,i=1,s=1,l,f,h,d,_,m=ui,v=ui,p,x){super(null,h,d,_,m,v,l,f,p,x),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $0 extends Ti{constructor(e,i,s,l=1){super(e,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const io=new We,tx=new We,Sc=[],ex=new Js,PT=new We,vl=new zn,xl=new _o;class zT extends zn{constructor(e,i,s){super(e,i),this.isInstancedMesh=!0,this.instanceMatrix=new $0(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,PT)}computeBoundingBox(){const e=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new Js),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,io),ex.copy(e.boundingBox).applyMatrix4(io),this.boundingBox.union(ex)}computeBoundingSphere(){const e=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new _o),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,io),xl.copy(e.boundingSphere).applyMatrix4(io),this.boundingSphere.union(xl)}copy(e,i){return super.copy(e,i),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,i){i.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,i){i.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,f=s.length+1,h=e*f+1;for(let d=0;d<s.length;d++)s[d]=l[h+d]}raycast(e,i){const s=this.matrixWorld,l=this.count;if(vl.geometry=this.geometry,vl.material=this.material,vl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xl.copy(this.boundingSphere),xl.applyMatrix4(s),e.ray.intersectsSphere(xl)!==!1))for(let f=0;f<l;f++){this.getMatrixAt(f,io),tx.multiplyMatrices(s,io),vl.matrixWorld=tx,vl.raycast(e,Sc);for(let h=0,d=Sc.length;h<d;h++){const _=Sc[h];_.instanceId=f,_.object=this,i.push(_)}Sc.length=0}}setColorAt(e,i){this.instanceColor===null&&(this.instanceColor=new $0(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,i){i.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new OT(new Float32Array(l*this.count),l,this.count,em,$i));const f=this.morphTexture.source.data.data;let h=0;for(let m=0;m<s.length;m++)h+=s[m];const d=this.geometry.morphTargetsRelative?1:1-h,_=l*e;f[_]=d,f.set(s,_+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Wd=new at,IT=new at,BT=new pe;class ks{constructor(e=new at(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Wd.subVectors(s,i).cross(IT.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Wd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/l;return f<0||f>1?null:i.copy(e.start).addScaledVector(s,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||BT.getNormalMatrix(e),l=this.coplanarPoint(Wd).applyMatrix4(e),f=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hs=new _o,FT=new xe(.5,.5),yc=new at;class um{constructor(e=new ks,i=new ks,s=new ks,l=new ks,f=new ks,h=new ks){this.planes=[e,i,s,l,f,h]}set(e,i,s,l,f,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(f),d[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=ta,s=!1){const l=this.planes,f=e.elements,h=f[0],d=f[1],_=f[2],m=f[3],v=f[4],p=f[5],x=f[6],M=f[7],A=f[8],C=f[9],y=f[10],S=f[11],B=f[12],z=f[13],N=f[14],X=f[15];if(l[0].setComponents(m-h,M-v,S-A,X-B).normalize(),l[1].setComponents(m+h,M+v,S+A,X+B).normalize(),l[2].setComponents(m+d,M+p,S+C,X+z).normalize(),l[3].setComponents(m-d,M-p,S-C,X-z).normalize(),s)l[4].setComponents(_,x,y,N).normalize(),l[5].setComponents(m-_,M-x,S-y,X-N).normalize();else if(l[4].setComponents(m-_,M-x,S-y,X-N).normalize(),i===ta)l[5].setComponents(m+_,M+x,S+y,X+N).normalize();else if(i===Lc)l[5].setComponents(_,x,y,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Hs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hs)}intersectsSprite(e){Hs.center.set(0,0,0);const i=FT.distanceTo(e.center);return Hs.radius=.7071067811865476+i,Hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hs)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(yc.x=l.normal.x>0?e.max.x:e.min.x,yc.y=l.normal.y>0?e.max.y:e.min.y,yc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(yc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class cm extends $s{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const zc=new at,Ic=new at,nx=new We,Sl=new rm,Mc=new _o,Zd=new at,ix=new at;class uS extends vn{constructor(e=new Ii,i=new cm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,f=i.count;l<f;l++)zc.fromBufferAttribute(i,l-1),Ic.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=zc.distanceTo(Ic);e.setAttribute("lineDistance",new zi(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,f=e.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Mc.copy(s.boundingSphere),Mc.applyMatrix4(l),Mc.radius+=f,e.ray.intersectsSphere(Mc)===!1)return;nx.copy(l).invert(),Sl.copy(e.ray).applyMatrix4(nx);const d=f/((this.scale.x+this.scale.y+this.scale.z)/3),_=d*d,m=this.isLineSegments?2:1,v=s.index,x=s.attributes.position;if(v!==null){const M=Math.max(0,h.start),A=Math.min(v.count,h.start+h.count);for(let C=M,y=A-1;C<y;C+=m){const S=v.getX(C),B=v.getX(C+1),z=Ec(this,e,Sl,_,S,B,C);z&&i.push(z)}if(this.isLineLoop){const C=v.getX(A-1),y=v.getX(M),S=Ec(this,e,Sl,_,C,y,A-1);S&&i.push(S)}}else{const M=Math.max(0,h.start),A=Math.min(x.count,h.start+h.count);for(let C=M,y=A-1;C<y;C+=m){const S=Ec(this,e,Sl,_,C,C+1,C);S&&i.push(S)}if(this.isLineLoop){const C=Ec(this,e,Sl,_,A-1,M,A-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=l.length;f<h;f++){const d=l[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=f}}}}}function Ec(o,e,i,s,l,f,h){const d=o.geometry.attributes.position;if(zc.fromBufferAttribute(d,l),Ic.fromBufferAttribute(d,f),i.distanceSqToSegment(zc,Ic,Zd,ix)>s)return;Zd.applyMatrix4(o.matrixWorld);const m=e.ray.origin.distanceTo(Zd);if(!(m<e.near||m>e.far))return{distance:m,point:ix.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const ax=new at,sx=new at;class HT extends uS{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,f=i.count;l<f;l+=2)ax.fromBufferAttribute(i,l),sx.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+ax.distanceTo(sx);e.setAttribute("lineDistance",new zi(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class GT extends In{constructor(e,i,s,l,f,h,d,_,m){super(e,i,s,l,f,h,d,_,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class cS extends In{constructor(e,i,s=Zs,l,f,h,d=ui,_=ui,m,v=Al,p=1){if(v!==Al&&v!==Rl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:p};super(x,l,f,h,d,_,v,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class fS extends In{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Fc extends Ii{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const f=e/2,h=i/2,d=Math.floor(s),_=Math.floor(l),m=d+1,v=_+1,p=e/d,x=i/_,M=[],A=[],C=[],y=[];for(let S=0;S<v;S++){const B=S*x-h;for(let z=0;z<m;z++){const N=z*p-f;A.push(N,-B,0),C.push(0,0,1),y.push(z/d),y.push(1-S/_)}}for(let S=0;S<_;S++)for(let B=0;B<d;B++){const z=B+m*S,N=B+m*(S+1),X=B+1+m*(S+1),V=B+1+m*S;M.push(z,N,V),M.push(N,X,V)}this.setIndex(M),this.setAttribute("position",new zi(A,3)),this.setAttribute("normal",new zi(C,3)),this.setAttribute("uv",new zi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fc(e.width,e.height,e.widthSegments,e.heightSegments)}}class ao extends $s{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kx,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class VT extends $s{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=WE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kT extends $s{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class hS extends vn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Kd=new We,rx=new at,ox=new at;class XT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.mapType=ea,this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new um,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new on(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;rx.setFromMatrixPosition(e.matrixWorld),i.position.copy(rx),ox.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(ox),i.updateMatrixWorld(),Kd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Kd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class dS extends sS{constructor(e=-1,i=1,s=1,l=-1,f=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=f,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,f,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let f=s-e,h=s+e,d=l+i,_=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=m*this.view.offsetX,h=f+m*this.view.width,d-=v*this.view.offsetY,_=d-v*this.view.height}this.projectionMatrix.makeOrthographic(f,h,d,_,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class jT extends XT{constructor(){super(new dS(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qT extends hS{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.target=new vn,this.shadow=new jT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class YT extends hS{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class WT extends Mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const lx=new We;class ZT{constructor(e,i,s=0,l=1/0){this.ray=new rm(e,i),this.near=s,this.far=l,this.camera=null,this.layers=new om,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return lx.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(lx),this}intersectObject(e,i=!0,s=[]){return Wp(e,this,s,i),s.sort(ux),s}intersectObjects(e,i=!0,s=[]){for(let l=0,f=e.length;l<f;l++)Wp(e[l],this,s,i);return s.sort(ux),s}}function ux(o,e){return o.distance-e.distance}function Wp(o,e,i,s){let l=!0;if(o.layers.test(e.layers)&&o.raycast(e,i)===!1&&(l=!1),l===!0&&s===!0){const f=o.children;for(let h=0,d=f.length;h<d;h++)Wp(f[h],e,i,!0)}}class KT extends HT{constructor(e=10,i=10,s=4473924,l=8947848){s=new Me(s),l=new Me(l);const f=i/2,h=e/i,d=e/2,_=[],m=[];for(let x=0,M=0,A=-d;x<=i;x++,A+=h){_.push(-d,0,A,d,0,A),_.push(A,0,-d,A,0,d);const C=x===f?s:l;C.toArray(m,M),M+=3,C.toArray(m,M),M+=3,C.toArray(m,M),M+=3,C.toArray(m,M),M+=3}const v=new Ii;v.setAttribute("position",new zi(_,3)),v.setAttribute("color",new zi(m,3));const p=new cm({vertexColors:!0,toneMapped:!1});super(v,p),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class QT extends Qs{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function cx(o,e,i,s){const l=JT(s);switch(i){case Yx:return o*e;case em:return o*e/l.components*l.byteLength;case nm:return o*e/l.components*l.byteLength;case Zx:return o*e*2/l.components*l.byteLength;case im:return o*e*2/l.components*l.byteLength;case Wx:return o*e*3/l.components*l.byteLength;case Pi:return o*e*4/l.components*l.byteLength;case am:return o*e*4/l.components*l.byteLength;case Rc:case Cc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case wc:case Dc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case xp:case yp:return Math.max(o,16)*Math.max(e,8)/4;case vp:case Sp:return Math.max(o,8)*Math.max(e,8)/2;case Mp:case Ep:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Tp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case bp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ap:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Rp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Cp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case wp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Dp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Np:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Up:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Lp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Op:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Pp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case zp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Ip:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Bp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Fp:case Hp:case Gp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Vp:case kp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Xp:case jp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function JT(o){switch(o){case ea:case kx:return{byteLength:1,components:1};case Tl:case Xx:case wl:return{byteLength:2,components:1};case $p:case tm:return{byteLength:2,components:4};case Zs:case Jp:case $i:return{byteLength:4,components:1};case jx:case qx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qp);function pS(){let o=null,e=!1,i=null,s=null;function l(f,h){i(f,h),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function $T(o){const e=new WeakMap;function i(d,_){const m=d.array,v=d.usage,p=m.byteLength,x=o.createBuffer();o.bindBuffer(_,x),o.bufferData(_,m,v),d.onUploadCallback();let M;if(m instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)M=o.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=o.SHORT;else if(m instanceof Uint32Array)M=o.UNSIGNED_INT;else if(m instanceof Int32Array)M=o.INT;else if(m instanceof Int8Array)M=o.BYTE;else if(m instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:p}}function s(d,_,m){const v=_.array,p=_.updateRanges;if(o.bindBuffer(m,d),p.length===0)o.bufferSubData(m,0,v);else{p.sort((M,A)=>M.start-A.start);let x=0;for(let M=1;M<p.length;M++){const A=p[x],C=p[M];C.start<=A.start+A.count+1?A.count=Math.max(A.count,C.start+C.count-A.start):(++x,p[x]=C)}p.length=x+1;for(let M=0,A=p.length;M<A;M++){const C=p[M];o.bufferSubData(m,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}_.clearUpdateRanges()}_.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function f(d){d.isInterleavedBufferAttribute&&(d=d.data);const _=e.get(d);_&&(o.deleteBuffer(_.buffer),e.delete(d))}function h(d,_){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,i(d,_));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,d,_),m.version=d.version}}return{get:l,remove:f,update:h}}var tb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,nb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ib=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ab=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ob=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ub=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,db=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,gb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_b=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Eb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Tb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ab=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Db="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ub=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Lb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ob=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Pb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ib=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Vb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,qb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Yb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Jb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$b=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,eA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,uA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_A=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,MA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,EA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,TA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,AA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,RA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,CA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,wA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,DA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,NA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,UA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,LA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,OA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,PA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,zA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,IA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,BA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,FA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,HA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,GA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,VA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,XA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,YA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,WA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ZA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,KA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,QA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,JA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $A=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,t1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,r1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,o1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,l1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,u1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,c1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,h1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,d1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,p1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,v1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,S1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,y1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,T1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,C1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,w1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,N1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,U1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,me={alphahash_fragment:tb,alphahash_pars_fragment:eb,alphamap_fragment:nb,alphamap_pars_fragment:ib,alphatest_fragment:ab,alphatest_pars_fragment:sb,aomap_fragment:rb,aomap_pars_fragment:ob,batching_pars_vertex:lb,batching_vertex:ub,begin_vertex:cb,beginnormal_vertex:fb,bsdfs:hb,iridescence_fragment:db,bumpmap_pars_fragment:pb,clipping_planes_fragment:mb,clipping_planes_pars_fragment:gb,clipping_planes_pars_vertex:_b,clipping_planes_vertex:vb,color_fragment:xb,color_pars_fragment:Sb,color_pars_vertex:yb,color_vertex:Mb,common:Eb,cube_uv_reflection_fragment:Tb,defaultnormal_vertex:bb,displacementmap_pars_vertex:Ab,displacementmap_vertex:Rb,emissivemap_fragment:Cb,emissivemap_pars_fragment:wb,colorspace_fragment:Db,colorspace_pars_fragment:Nb,envmap_fragment:Ub,envmap_common_pars_fragment:Lb,envmap_pars_fragment:Ob,envmap_pars_vertex:Pb,envmap_physical_pars_fragment:qb,envmap_vertex:zb,fog_vertex:Ib,fog_pars_vertex:Bb,fog_fragment:Fb,fog_pars_fragment:Hb,gradientmap_pars_fragment:Gb,lightmap_pars_fragment:Vb,lights_lambert_fragment:kb,lights_lambert_pars_fragment:Xb,lights_pars_begin:jb,lights_toon_fragment:Yb,lights_toon_pars_fragment:Wb,lights_phong_fragment:Zb,lights_phong_pars_fragment:Kb,lights_physical_fragment:Qb,lights_physical_pars_fragment:Jb,lights_fragment_begin:$b,lights_fragment_maps:tA,lights_fragment_end:eA,logdepthbuf_fragment:nA,logdepthbuf_pars_fragment:iA,logdepthbuf_pars_vertex:aA,logdepthbuf_vertex:sA,map_fragment:rA,map_pars_fragment:oA,map_particle_fragment:lA,map_particle_pars_fragment:uA,metalnessmap_fragment:cA,metalnessmap_pars_fragment:fA,morphinstance_vertex:hA,morphcolor_vertex:dA,morphnormal_vertex:pA,morphtarget_pars_vertex:mA,morphtarget_vertex:gA,normal_fragment_begin:_A,normal_fragment_maps:vA,normal_pars_fragment:xA,normal_pars_vertex:SA,normal_vertex:yA,normalmap_pars_fragment:MA,clearcoat_normal_fragment_begin:EA,clearcoat_normal_fragment_maps:TA,clearcoat_pars_fragment:bA,iridescence_pars_fragment:AA,opaque_fragment:RA,packing:CA,premultiplied_alpha_fragment:wA,project_vertex:DA,dithering_fragment:NA,dithering_pars_fragment:UA,roughnessmap_fragment:LA,roughnessmap_pars_fragment:OA,shadowmap_pars_fragment:PA,shadowmap_pars_vertex:zA,shadowmap_vertex:IA,shadowmask_pars_fragment:BA,skinbase_vertex:FA,skinning_pars_vertex:HA,skinning_vertex:GA,skinnormal_vertex:VA,specularmap_fragment:kA,specularmap_pars_fragment:XA,tonemapping_fragment:jA,tonemapping_pars_fragment:qA,transmission_fragment:YA,transmission_pars_fragment:WA,uv_pars_fragment:ZA,uv_pars_vertex:KA,uv_vertex:QA,worldpos_vertex:JA,background_vert:$A,background_frag:t1,backgroundCube_vert:e1,backgroundCube_frag:n1,cube_vert:i1,cube_frag:a1,depth_vert:s1,depth_frag:r1,distanceRGBA_vert:o1,distanceRGBA_frag:l1,equirect_vert:u1,equirect_frag:c1,linedashed_vert:f1,linedashed_frag:h1,meshbasic_vert:d1,meshbasic_frag:p1,meshlambert_vert:m1,meshlambert_frag:g1,meshmatcap_vert:_1,meshmatcap_frag:v1,meshnormal_vert:x1,meshnormal_frag:S1,meshphong_vert:y1,meshphong_frag:M1,meshphysical_vert:E1,meshphysical_frag:T1,meshtoon_vert:b1,meshtoon_frag:A1,points_vert:R1,points_frag:C1,shadow_vert:w1,shadow_frag:D1,sprite_vert:N1,sprite_frag:U1},It={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},Ki={basic:{uniforms:Xn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:Xn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Me(0)}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:Xn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:Xn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:Xn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new Me(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:Xn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:Xn([It.points,It.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:Xn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:Xn([It.common,It.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:Xn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:Xn([It.sprite,It.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distanceRGBA:{uniforms:Xn([It.common,It.displacementmap,{referencePosition:{value:new at},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distanceRGBA_vert,fragmentShader:me.distanceRGBA_frag},shadow:{uniforms:Xn([It.lights,It.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};Ki.physical={uniforms:Xn([Ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const Tc={r:0,b:0,g:0},Gs=new Qn,L1=new We;function O1(o,e,i,s,l,f,h){const d=new Me(0);let _=f===!0?0:1,m,v,p=null,x=0,M=null;function A(z){let N=z.isScene===!0?z.background:null;return N&&N.isTexture&&(N=(z.backgroundBlurriness>0?i:e).get(N)),N}function C(z){let N=!1;const X=A(z);X===null?S(d,_):X&&X.isColor&&(S(X,1),N=!0);const V=o.xr.getEnvironmentBlendMode();V==="additive"?s.buffers.color.setClear(0,0,0,1,h):V==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||N)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(z,N){const X=A(N);X&&(X.isCubeTexture||X.mapping===Bc)?(v===void 0&&(v=new zn(new Oi(1,1,1),new hs({name:"BackgroundCubeMaterial",uniforms:go(Ki.backgroundCube.uniforms),vertexShader:Ki.backgroundCube.vertexShader,fragmentShader:Ki.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(V,P,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),Gs.copy(N.backgroundRotation),Gs.x*=-1,Gs.y*=-1,Gs.z*=-1,X.isCubeTexture&&X.isRenderTargetTexture===!1&&(Gs.y*=-1,Gs.z*=-1),v.material.uniforms.envMap.value=X,v.material.uniforms.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(L1.makeRotationFromEuler(Gs)),v.material.toneMapped=Ue.getTransfer(X.colorSpace)!==Xe,(p!==X||x!==X.version||M!==o.toneMapping)&&(v.material.needsUpdate=!0,p=X,x=X.version,M=o.toneMapping),v.layers.enableAll(),z.unshift(v,v.geometry,v.material,0,0,null)):X&&X.isTexture&&(m===void 0&&(m=new zn(new Fc(2,2),new hs({name:"BackgroundMaterial",uniforms:go(Ki.background.uniforms),vertexShader:Ki.background.vertexShader,fragmentShader:Ki.background.fragmentShader,side:fs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=X,m.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,m.material.toneMapped=Ue.getTransfer(X.colorSpace)!==Xe,X.matrixAutoUpdate===!0&&X.updateMatrix(),m.material.uniforms.uvTransform.value.copy(X.matrix),(p!==X||x!==X.version||M!==o.toneMapping)&&(m.material.needsUpdate=!0,p=X,x=X.version,M=o.toneMapping),m.layers.enableAll(),z.unshift(m,m.geometry,m.material,0,0,null))}function S(z,N){z.getRGB(Tc,aS(o)),s.buffers.color.setClear(Tc.r,Tc.g,Tc.b,N,h)}function B(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(z,N=1){d.set(z),_=N,S(d,_)},getClearAlpha:function(){return _},setClearAlpha:function(z){_=z,S(d,_)},render:C,addToRenderList:y,dispose:B}}function P1(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=x(null);let f=l,h=!1;function d(w,H,nt,ct,ht){let ut=!1;const W=p(ct,nt,H);f!==W&&(f=W,m(f.object)),ut=M(w,ct,nt,ht),ut&&A(w,ct,nt,ht),ht!==null&&e.update(ht,o.ELEMENT_ARRAY_BUFFER),(ut||h)&&(h=!1,N(w,H,nt,ct),ht!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ht).buffer))}function _(){return o.createVertexArray()}function m(w){return o.bindVertexArray(w)}function v(w){return o.deleteVertexArray(w)}function p(w,H,nt){const ct=nt.wireframe===!0;let ht=s[w.id];ht===void 0&&(ht={},s[w.id]=ht);let ut=ht[H.id];ut===void 0&&(ut={},ht[H.id]=ut);let W=ut[ct];return W===void 0&&(W=x(_()),ut[ct]=W),W}function x(w){const H=[],nt=[],ct=[];for(let ht=0;ht<i;ht++)H[ht]=0,nt[ht]=0,ct[ht]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:nt,attributeDivisors:ct,object:w,attributes:{},index:null}}function M(w,H,nt,ct){const ht=f.attributes,ut=H.attributes;let W=0;const O=nt.getAttributes();for(const Y in O)if(O[Y].location>=0){const St=ht[Y];let Gt=ut[Y];if(Gt===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(Gt=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(Gt=w.instanceColor)),St===void 0||St.attribute!==Gt||Gt&&St.data!==Gt.data)return!0;W++}return f.attributesNum!==W||f.index!==ct}function A(w,H,nt,ct){const ht={},ut=H.attributes;let W=0;const O=nt.getAttributes();for(const Y in O)if(O[Y].location>=0){let St=ut[Y];St===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(St=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(St=w.instanceColor));const Gt={};Gt.attribute=St,St&&St.data&&(Gt.data=St.data),ht[Y]=Gt,W++}f.attributes=ht,f.attributesNum=W,f.index=ct}function C(){const w=f.newAttributes;for(let H=0,nt=w.length;H<nt;H++)w[H]=0}function y(w){S(w,0)}function S(w,H){const nt=f.newAttributes,ct=f.enabledAttributes,ht=f.attributeDivisors;nt[w]=1,ct[w]===0&&(o.enableVertexAttribArray(w),ct[w]=1),ht[w]!==H&&(o.vertexAttribDivisor(w,H),ht[w]=H)}function B(){const w=f.newAttributes,H=f.enabledAttributes;for(let nt=0,ct=H.length;nt<ct;nt++)H[nt]!==w[nt]&&(o.disableVertexAttribArray(nt),H[nt]=0)}function z(w,H,nt,ct,ht,ut,W){W===!0?o.vertexAttribIPointer(w,H,nt,ht,ut):o.vertexAttribPointer(w,H,nt,ct,ht,ut)}function N(w,H,nt,ct){C();const ht=ct.attributes,ut=nt.getAttributes(),W=H.defaultAttributeValues;for(const O in ut){const Y=ut[O];if(Y.location>=0){let vt=ht[O];if(vt===void 0&&(O==="instanceMatrix"&&w.instanceMatrix&&(vt=w.instanceMatrix),O==="instanceColor"&&w.instanceColor&&(vt=w.instanceColor)),vt!==void 0){const St=vt.normalized,Gt=vt.itemSize,re=e.get(vt);if(re===void 0)continue;const Re=re.buffer,F=re.type,ft=re.bytesPerElement,tt=F===o.INT||F===o.UNSIGNED_INT||vt.gpuType===Jp;if(vt.isInterleavedBufferAttribute){const rt=vt.data,Mt=rt.stride,Ut=vt.offset;if(rt.isInstancedInterleavedBuffer){for(let Rt=0;Rt<Y.locationSize;Rt++)S(Y.location+Rt,rt.meshPerAttribute);w.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Rt=0;Rt<Y.locationSize;Rt++)y(Y.location+Rt);o.bindBuffer(o.ARRAY_BUFFER,Re);for(let Rt=0;Rt<Y.locationSize;Rt++)z(Y.location+Rt,Gt/Y.locationSize,F,St,Mt*ft,(Ut+Gt/Y.locationSize*Rt)*ft,tt)}else{if(vt.isInstancedBufferAttribute){for(let rt=0;rt<Y.locationSize;rt++)S(Y.location+rt,vt.meshPerAttribute);w.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let rt=0;rt<Y.locationSize;rt++)y(Y.location+rt);o.bindBuffer(o.ARRAY_BUFFER,Re);for(let rt=0;rt<Y.locationSize;rt++)z(Y.location+rt,Gt/Y.locationSize,F,St,Gt*ft,Gt/Y.locationSize*rt*ft,tt)}}else if(W!==void 0){const St=W[O];if(St!==void 0)switch(St.length){case 2:o.vertexAttrib2fv(Y.location,St);break;case 3:o.vertexAttrib3fv(Y.location,St);break;case 4:o.vertexAttrib4fv(Y.location,St);break;default:o.vertexAttrib1fv(Y.location,St)}}}}B()}function X(){q();for(const w in s){const H=s[w];for(const nt in H){const ct=H[nt];for(const ht in ct)v(ct[ht].object),delete ct[ht];delete H[nt]}delete s[w]}}function V(w){if(s[w.id]===void 0)return;const H=s[w.id];for(const nt in H){const ct=H[nt];for(const ht in ct)v(ct[ht].object),delete ct[ht];delete H[nt]}delete s[w.id]}function P(w){for(const H in s){const nt=s[H];if(nt[w.id]===void 0)continue;const ct=nt[w.id];for(const ht in ct)v(ct[ht].object),delete ct[ht];delete nt[w.id]}}function q(){D(),h=!0,f!==l&&(f=l,m(f.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:q,resetDefaultState:D,dispose:X,releaseStatesOfGeometry:V,releaseStatesOfProgram:P,initAttributes:C,enableAttribute:y,disableUnusedAttributes:B}}function z1(o,e,i){let s;function l(m){s=m}function f(m,v){o.drawArrays(s,m,v),i.update(v,s,1)}function h(m,v,p){p!==0&&(o.drawArraysInstanced(s,m,v,p),i.update(v,s,p))}function d(m,v,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,v,0,p);let M=0;for(let A=0;A<p;A++)M+=v[A];i.update(M,s,1)}function _(m,v,p,x){if(p===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let A=0;A<m.length;A++)h(m[A],v[A],x[A]);else{M.multiDrawArraysInstancedWEBGL(s,m,0,v,0,x,0,p);let A=0;for(let C=0;C<p;C++)A+=v[C]*x[C];i.update(A,s,1)}}this.setMode=l,this.render=f,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=_}function I1(o,e,i,s){let l;function f(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(P){return!(P!==Pi&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const q=P===wl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==ea&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==$i&&!q)}function _(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const v=_(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const p=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),B=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),z=o.getParameter(o.MAX_VARYING_VECTORS),N=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),X=A>0,V=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:_,textureFormatReadable:h,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:p,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:A,maxTextureSize:C,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:B,maxVaryings:z,maxFragmentUniforms:N,vertexTextures:X,maxSamples:V}}function B1(o){const e=this;let i=null,s=0,l=!1,f=!1;const h=new ks,d=new pe,_={value:null,needsUpdate:!1};this.uniform=_,this.numPlanes=0,this.numIntersection=0,this.init=function(p,x){const M=p.length!==0||x||s!==0||l;return l=x,s=p.length,M},this.beginShadows=function(){f=!0,v(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(p,x){i=v(p,x,0)},this.setState=function(p,x,M){const A=p.clippingPlanes,C=p.clipIntersection,y=p.clipShadows,S=o.get(p);if(!l||A===null||A.length===0||f&&!y)f?v(null):m();else{const B=f?0:s,z=B*4;let N=S.clippingState||null;_.value=N,N=v(A,x,z,M);for(let X=0;X!==z;++X)N[X]=i[X];S.clippingState=N,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=B}};function m(){_.value!==i&&(_.value=i,_.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(p,x,M,A){const C=p!==null?p.length:0;let y=null;if(C!==0){if(y=_.value,A!==!0||y===null){const S=M+C*4,B=x.matrixWorldInverse;d.getNormalMatrix(B),(y===null||y.length<S)&&(y=new Float32Array(S));for(let z=0,N=M;z!==C;++z,N+=4)h.copy(p[z]).applyMatrix4(B,d),h.normal.toArray(y,N),y[N+3]=h.constant}_.value=y,_.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}function F1(o){let e=new WeakMap;function i(h,d){return d===pp?h.mapping=ho:d===mp&&(h.mapping=po),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===pp||d===mp)if(e.has(h)){const _=e.get(h).texture;return i(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const m=new wT(_.height);return m.fromEquirectangularTexture(o,h),e.set(h,m),h.addEventListener("dispose",l),i(m.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const _=e.get(d);_!==void 0&&(e.delete(d),_.dispose())}function f(){e=new WeakMap}return{get:s,dispose:f}}const lo=4,fx=[.125,.215,.35,.446,.526,.582],qs=20,Qd=new dS,hx=new Me;let Jd=null,$d=0,tp=0,ep=!1;const Xs=(1+Math.sqrt(5))/2,so=1/Xs,dx=[new at(-Xs,so,0),new at(Xs,so,0),new at(-so,0,Xs),new at(so,0,Xs),new at(0,Xs,-so),new at(0,Xs,so),new at(-1,1,-1),new at(1,1,-1),new at(-1,1,1),new at(1,1,1)],H1=new at;class px{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100,f={}){const{size:h=256,position:d=H1}=f;Jd=this._renderer.getRenderTarget(),$d=this._renderer.getActiveCubeFace(),tp=this._renderer.getActiveMipmapLevel(),ep=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const _=this._allocateTargets();return _.depthBuffer=!0,this._sceneToCubeUV(e,s,l,_,d),i>0&&this._blur(_,0,0,i),this._applyPMREM(_),this._cleanup(_),_}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_x(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jd,$d,tp),this._renderer.xr.enabled=ep,e.scissorTest=!1,bc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===ho||e.mapping===po?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jd=this._renderer.getRenderTarget(),$d=this._renderer.getActiveCubeFace(),tp=this._renderer.getActiveMipmapLevel(),ep=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Ji,minFilter:Ji,generateMipmaps:!1,type:wl,format:Pi,colorSpace:mo,depthBuffer:!1},l=mx(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mx(e,i,s);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=G1(f)),this._blurMaterial=V1(f,e,i)}return l}_compileMaterial(e){const i=new zn(this._lodPlanes[0],e);this._renderer.compile(i,Qd)}_sceneToCubeUV(e,i,s,l,f){const _=new Mi(90,1,i,s),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],p=this._renderer,x=p.autoClear,M=p.toneMapping;p.getClearColor(hx),p.toneMapping=us,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(l),p.clearDepth(),p.setRenderTarget(null));const C=new eS({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1}),y=new zn(new Oi,C);let S=!1;const B=e.background;B?B.isColor&&(C.color.copy(B),e.background=null,S=!0):(C.color.copy(hx),S=!0);for(let z=0;z<6;z++){const N=z%3;N===0?(_.up.set(0,m[z],0),_.position.set(f.x,f.y,f.z),_.lookAt(f.x+v[z],f.y,f.z)):N===1?(_.up.set(0,0,m[z]),_.position.set(f.x,f.y,f.z),_.lookAt(f.x,f.y+v[z],f.z)):(_.up.set(0,m[z],0),_.position.set(f.x,f.y,f.z),_.lookAt(f.x,f.y,f.z+v[z]));const X=this._cubeSize;bc(l,N*X,z>2?X:0,X,X),p.setRenderTarget(l),S&&p.render(y,_),p.render(e,_)}y.geometry.dispose(),y.material.dispose(),p.toneMapping=M,p.autoClear=x,e.background=B}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===ho||e.mapping===po;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=_x()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gx());const f=l?this._cubemapMaterial:this._equirectMaterial,h=new zn(this._lodPlanes[0],f),d=f.uniforms;d.envMap.value=e;const _=this._cubeSize;bc(i,0,0,3*_,2*_),s.setRenderTarget(i),s.render(h,Qd)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let f=1;f<l;f++){const h=Math.sqrt(this._sigmas[f]*this._sigmas[f]-this._sigmas[f-1]*this._sigmas[f-1]),d=dx[(l-f-1)%dx.length];this._blur(e,f-1,f,h,d)}i.autoClear=s}_blur(e,i,s,l,f){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",f),this._halfBlur(h,e,s,s,l,"longitudinal",f)}_halfBlur(e,i,s,l,f,h,d){const _=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,p=new zn(this._lodPlanes[l],m),x=m.uniforms,M=this._sizeLods[s]-1,A=isFinite(f)?Math.PI/(2*M):2*Math.PI/(2*qs-1),C=f/A,y=isFinite(f)?1+Math.floor(v*C):qs;y>qs&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${qs}`);const S=[];let B=0;for(let P=0;P<qs;++P){const q=P/C,D=Math.exp(-q*q/2);S.push(D),P===0?B+=D:P<y&&(B+=2*D)}for(let P=0;P<S.length;P++)S[P]=S[P]/B;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=S,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:z}=this;x.dTheta.value=A,x.mipInt.value=z-s;const N=this._sizeLods[l],X=3*N*(l>z-lo?l-z+lo:0),V=4*(this._cubeSize-N);bc(i,X,V,3*N,2*N),_.setRenderTarget(i),_.render(p,Qd)}}function G1(o){const e=[],i=[],s=[];let l=o;const f=o-lo+1+fx.length;for(let h=0;h<f;h++){const d=Math.pow(2,l);i.push(d);let _=1/d;h>o-lo?_=fx[h-o+lo-1]:h===0&&(_=0),s.push(_);const m=1/(d-2),v=-m,p=1+m,x=[v,v,p,v,p,p,v,v,p,p,v,p],M=6,A=6,C=3,y=2,S=1,B=new Float32Array(C*A*M),z=new Float32Array(y*A*M),N=new Float32Array(S*A*M);for(let V=0;V<M;V++){const P=V%3*2/3-1,q=V>2?0:-1,D=[P,q,0,P+2/3,q,0,P+2/3,q+1,0,P,q,0,P+2/3,q+1,0,P,q+1,0];B.set(D,C*A*V),z.set(x,y*A*V);const w=[V,V,V,V,V,V];N.set(w,S*A*V)}const X=new Ii;X.setAttribute("position",new Ti(B,C)),X.setAttribute("uv",new Ti(z,y)),X.setAttribute("faceIndex",new Ti(N,S)),e.push(X),l>lo&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function mx(o,e,i){const s=new Ks(o,e,i);return s.texture.mapping=Bc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function bc(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function V1(o,e,i){const s=new Float32Array(qs),l=new at(0,1,0);return new hs({name:"SphericalGaussianBlur",defines:{n:qs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:fm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ls,depthTest:!1,depthWrite:!1})}function gx(){return new hs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ls,depthTest:!1,depthWrite:!1})}function _x(){return new hs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ls,depthTest:!1,depthWrite:!1})}function fm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function k1(o){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const _=d.mapping,m=_===pp||_===mp,v=_===ho||_===po;if(m||v){let p=e.get(d);const x=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new px(o)),p=m?i.fromEquirectangular(d,p):i.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{const M=d.image;return m&&M&&M.height>0||v&&M&&l(M)?(i===null&&(i=new px(o)),p=m?i.fromEquirectangular(d):i.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",f),p.texture):null}}}return d}function l(d){let _=0;const m=6;for(let v=0;v<m;v++)d[v]!==void 0&&_++;return _===m}function f(d){const _=d.target;_.removeEventListener("dispose",f);const m=e.get(_);m!==void 0&&(e.delete(_),m.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function X1(o){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Cl("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function j1(o,e,i,s){const l={},f=new WeakMap;function h(p){const x=p.target;x.index!==null&&e.remove(x.index);for(const A in x.attributes)e.remove(x.attributes[A]);x.removeEventListener("dispose",h),delete l[x.id];const M=f.get(x);M&&(e.remove(M),f.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(p,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function _(p){const x=p.attributes;for(const M in x)e.update(x[M],o.ARRAY_BUFFER)}function m(p){const x=[],M=p.index,A=p.attributes.position;let C=0;if(M!==null){const B=M.array;C=M.version;for(let z=0,N=B.length;z<N;z+=3){const X=B[z+0],V=B[z+1],P=B[z+2];x.push(X,V,V,P,P,X)}}else if(A!==void 0){const B=A.array;C=A.version;for(let z=0,N=B.length/3-1;z<N;z+=3){const X=z+0,V=z+1,P=z+2;x.push(X,V,V,P,P,X)}}else return;const y=new(Jx(x)?iS:nS)(x,1);y.version=C;const S=f.get(p);S&&e.remove(S),f.set(p,y)}function v(p){const x=f.get(p);if(x){const M=p.index;M!==null&&x.version<M.version&&m(p)}else m(p);return f.get(p)}return{get:d,update:_,getWireframeAttribute:v}}function q1(o,e,i){let s;function l(x){s=x}let f,h;function d(x){f=x.type,h=x.bytesPerElement}function _(x,M){o.drawElements(s,M,f,x*h),i.update(M,s,1)}function m(x,M,A){A!==0&&(o.drawElementsInstanced(s,M,f,x*h,A),i.update(M,s,A))}function v(x,M,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,f,x,0,A);let y=0;for(let S=0;S<A;S++)y+=M[S];i.update(y,s,1)}function p(x,M,A,C){if(A===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let S=0;S<x.length;S++)m(x[S]/h,M[S],C[S]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,f,x,0,C,0,A);let S=0;for(let B=0;B<A;B++)S+=M[B]*C[B];i.update(S,s,1)}}this.setMode=l,this.setIndex=d,this.render=_,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=p}function Y1(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(f,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(f/3);break;case o.LINES:i.lines+=d*(f/2);break;case o.LINE_STRIP:i.lines+=d*(f-1);break;case o.LINE_LOOP:i.lines+=d*f;break;case o.POINTS:i.points+=d*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function W1(o,e,i){const s=new WeakMap,l=new on;function f(h,d,_){const m=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,p=v!==void 0?v.length:0;let x=s.get(d);if(x===void 0||x.count!==p){let w=function(){q.dispose(),s.delete(d),d.removeEventListener("dispose",w)};var M=w;x!==void 0&&x.texture.dispose();const A=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],B=d.morphAttributes.normal||[],z=d.morphAttributes.color||[];let N=0;A===!0&&(N=1),C===!0&&(N=2),y===!0&&(N=3);let X=d.attributes.position.count*N,V=1;X>e.maxTextureSize&&(V=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);const P=new Float32Array(X*V*4*p),q=new $x(P,X,V,p);q.type=$i,q.needsUpdate=!0;const D=N*4;for(let H=0;H<p;H++){const nt=S[H],ct=B[H],ht=z[H],ut=X*V*4*H;for(let W=0;W<nt.count;W++){const O=W*D;A===!0&&(l.fromBufferAttribute(nt,W),P[ut+O+0]=l.x,P[ut+O+1]=l.y,P[ut+O+2]=l.z,P[ut+O+3]=0),C===!0&&(l.fromBufferAttribute(ct,W),P[ut+O+4]=l.x,P[ut+O+5]=l.y,P[ut+O+6]=l.z,P[ut+O+7]=0),y===!0&&(l.fromBufferAttribute(ht,W),P[ut+O+8]=l.x,P[ut+O+9]=l.y,P[ut+O+10]=l.z,P[ut+O+11]=ht.itemSize===4?l.w:1)}}x={count:p,texture:q,size:new xe(X,V)},s.set(d,x),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)_.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let A=0;for(let y=0;y<m.length;y++)A+=m[y];const C=d.morphTargetsRelative?1:1-A;_.getUniforms().setValue(o,"morphTargetBaseInfluence",C),_.getUniforms().setValue(o,"morphTargetInfluences",m)}_.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),_.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:f}}function Z1(o,e,i,s){let l=new WeakMap;function f(_){const m=s.render.frame,v=_.geometry,p=e.get(_,v);if(l.get(p)!==m&&(e.update(p),l.set(p,m)),_.isInstancedMesh&&(_.hasEventListener("dispose",d)===!1&&_.addEventListener("dispose",d),l.get(_)!==m&&(i.update(_.instanceMatrix,o.ARRAY_BUFFER),_.instanceColor!==null&&i.update(_.instanceColor,o.ARRAY_BUFFER),l.set(_,m))),_.isSkinnedMesh){const x=_.skeleton;l.get(x)!==m&&(x.update(),l.set(x,m))}return p}function h(){l=new WeakMap}function d(_){const m=_.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:f,dispose:h}}const mS=new In,vx=new cS(1,1),gS=new $x,_S=new hT,vS=new rS,xx=[],Sx=[],yx=new Float32Array(16),Mx=new Float32Array(9),Ex=new Float32Array(4);function vo(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let f=xx[l];if(f===void 0&&(f=new Float32Array(l),xx[l]=f),e!==0){s.toArray(f,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(f,d)}return f}function xn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function Sn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Hc(o,e){let i=Sx[e];i===void 0&&(i=new Int32Array(e),Sx[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function K1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function Q1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;o.uniform2fv(this.addr,e),Sn(i,e)}}function J1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(xn(i,e))return;o.uniform3fv(this.addr,e),Sn(i,e)}}function $1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;o.uniform4fv(this.addr,e),Sn(i,e)}}function tR(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(xn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),Sn(i,e)}else{if(xn(i,s))return;Ex.set(s),o.uniformMatrix2fv(this.addr,!1,Ex),Sn(i,s)}}function eR(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(xn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),Sn(i,e)}else{if(xn(i,s))return;Mx.set(s),o.uniformMatrix3fv(this.addr,!1,Mx),Sn(i,s)}}function nR(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(xn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),Sn(i,e)}else{if(xn(i,s))return;yx.set(s),o.uniformMatrix4fv(this.addr,!1,yx),Sn(i,s)}}function iR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function aR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;o.uniform2iv(this.addr,e),Sn(i,e)}}function sR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(xn(i,e))return;o.uniform3iv(this.addr,e),Sn(i,e)}}function rR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;o.uniform4iv(this.addr,e),Sn(i,e)}}function oR(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function lR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;o.uniform2uiv(this.addr,e),Sn(i,e)}}function uR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(xn(i,e))return;o.uniform3uiv(this.addr,e),Sn(i,e)}}function cR(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;o.uniform4uiv(this.addr,e),Sn(i,e)}}function fR(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let f;this.type===o.SAMPLER_2D_SHADOW?(vx.compareFunction=Qx,f=vx):f=mS,i.setTexture2D(e||f,l)}function hR(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||_S,l)}function dR(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||vS,l)}function pR(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||gS,l)}function mR(o){switch(o){case 5126:return K1;case 35664:return Q1;case 35665:return J1;case 35666:return $1;case 35674:return tR;case 35675:return eR;case 35676:return nR;case 5124:case 35670:return iR;case 35667:case 35671:return aR;case 35668:case 35672:return sR;case 35669:case 35673:return rR;case 5125:return oR;case 36294:return lR;case 36295:return uR;case 36296:return cR;case 35678:case 36198:case 36298:case 36306:case 35682:return fR;case 35679:case 36299:case 36307:return hR;case 35680:case 36300:case 36308:case 36293:return dR;case 36289:case 36303:case 36311:case 36292:return pR}}function gR(o,e){o.uniform1fv(this.addr,e)}function _R(o,e){const i=vo(e,this.size,2);o.uniform2fv(this.addr,i)}function vR(o,e){const i=vo(e,this.size,3);o.uniform3fv(this.addr,i)}function xR(o,e){const i=vo(e,this.size,4);o.uniform4fv(this.addr,i)}function SR(o,e){const i=vo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function yR(o,e){const i=vo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function MR(o,e){const i=vo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function ER(o,e){o.uniform1iv(this.addr,e)}function TR(o,e){o.uniform2iv(this.addr,e)}function bR(o,e){o.uniform3iv(this.addr,e)}function AR(o,e){o.uniform4iv(this.addr,e)}function RR(o,e){o.uniform1uiv(this.addr,e)}function CR(o,e){o.uniform2uiv(this.addr,e)}function wR(o,e){o.uniform3uiv(this.addr,e)}function DR(o,e){o.uniform4uiv(this.addr,e)}function NR(o,e,i){const s=this.cache,l=e.length,f=Hc(i,l);xn(s,f)||(o.uniform1iv(this.addr,f),Sn(s,f));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||mS,f[h])}function UR(o,e,i){const s=this.cache,l=e.length,f=Hc(i,l);xn(s,f)||(o.uniform1iv(this.addr,f),Sn(s,f));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||_S,f[h])}function LR(o,e,i){const s=this.cache,l=e.length,f=Hc(i,l);xn(s,f)||(o.uniform1iv(this.addr,f),Sn(s,f));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||vS,f[h])}function OR(o,e,i){const s=this.cache,l=e.length,f=Hc(i,l);xn(s,f)||(o.uniform1iv(this.addr,f),Sn(s,f));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||gS,f[h])}function PR(o){switch(o){case 5126:return gR;case 35664:return _R;case 35665:return vR;case 35666:return xR;case 35674:return SR;case 35675:return yR;case 35676:return MR;case 5124:case 35670:return ER;case 35667:case 35671:return TR;case 35668:case 35672:return bR;case 35669:case 35673:return AR;case 5125:return RR;case 36294:return CR;case 36295:return wR;case 36296:return DR;case 35678:case 36198:case 36298:case 36306:case 35682:return NR;case 35679:case 36299:case 36307:return UR;case 35680:case 36300:case 36308:case 36293:return LR;case 36289:case 36303:case 36311:case 36292:return OR}}class zR{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=mR(i.type)}}class IR{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=PR(i.type)}}class BR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let f=0,h=l.length;f!==h;++f){const d=l[f];d.setValue(e,i[d.id],s)}}}const np=/(\w+)(\])?(\[|\.)?/g;function Tx(o,e){o.seq.push(e),o.map[e.id]=e}function FR(o,e,i){const s=o.name,l=s.length;for(np.lastIndex=0;;){const f=np.exec(s),h=np.lastIndex;let d=f[1];const _=f[2]==="]",m=f[3];if(_&&(d=d|0),m===void 0||m==="["&&h+2===l){Tx(i,m===void 0?new zR(d,o,e):new IR(d,o,e));break}else{let p=i.map[d];p===void 0&&(p=new BR(d),Tx(i,p)),i=p}}}class Nc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const f=e.getActiveUniform(i,l),h=e.getUniformLocation(i,f.name);FR(f,h,this)}}setValue(e,i,s,l){const f=this.map[i];f!==void 0&&f.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let f=0,h=i.length;f!==h;++f){const d=i[f],_=s[d.id];_.needsUpdate!==!1&&d.setValue(e,_.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,f=e.length;l!==f;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function bx(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const HR=37297;let GR=0;function VR(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),f=Math.min(e+6,i.length);for(let h=l;h<f;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const Ax=new pe;function kR(o){Ue._getMatrix(Ax,Ue.workingColorSpace,o);const e=`mat3( ${Ax.elements.map(i=>i.toFixed(4))} )`;switch(Ue.getTransfer(o)){case Uc:return[e,"LinearTransferOETF"];case Xe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Rx(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),f=(o.getShaderInfoLog(e)||"").trim();if(s&&f==="")return"";const h=/ERROR: 0:(\d+)/.exec(f);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+f+`

`+VR(o.getShaderSource(e),d)}else return f}function XR(o,e){const i=kR(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function jR(o,e){let i;switch(e){case HE:i="Linear";break;case GE:i="Reinhard";break;case VE:i="Cineon";break;case kE:i="ACESFilmic";break;case jE:i="AgX";break;case qE:i="Neutral";break;case XE:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Ac=new at;function qR(){Ue.getLuminanceCoefficients(Ac);const o=Ac.x.toFixed(4),e=Ac.y.toFixed(4),i=Ac.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function YR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(El).join(`
`)}function WR(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function ZR(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const f=o.getActiveAttrib(e,l),h=f.name;let d=1;f.type===o.FLOAT_MAT2&&(d=2),f.type===o.FLOAT_MAT3&&(d=3),f.type===o.FLOAT_MAT4&&(d=4),i[h]={type:f.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function El(o){return o!==""}function Cx(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wx(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const KR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zp(o){return o.replace(KR,JR)}const QR=new Map;function JR(o,e){let i=me[e];if(i===void 0){const s=QR.get(e);if(s!==void 0)i=me[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Zp(i)}const $R=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dx(o){return o.replace($R,tC)}function tC(o,e,i,s){let l="";for(let f=parseInt(e);f<parseInt(i);f++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return l}function Nx(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function eC(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Hx?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===xE?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ea&&(e="SHADOWMAP_TYPE_VSM"),e}function nC(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ho:case po:e="ENVMAP_TYPE_CUBE";break;case Bc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function iC(o){let e="ENVMAP_MODE_REFLECTION";return o.envMap&&o.envMapMode===po&&(e="ENVMAP_MODE_REFRACTION"),e}function aC(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Gx:e="ENVMAP_BLENDING_MULTIPLY";break;case BE:e="ENVMAP_BLENDING_MIX";break;case FE:e="ENVMAP_BLENDING_ADD";break}return e}function sC(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function rC(o,e,i,s){const l=o.getContext(),f=i.defines;let h=i.vertexShader,d=i.fragmentShader;const _=eC(i),m=nC(i),v=iC(i),p=aC(i),x=sC(i),M=YR(i),A=WR(f),C=l.createProgram();let y,S,B=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(El).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(El).join(`
`),S.length>0&&(S+=`
`)):(y=[Nx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+_:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(El).join(`
`),S=[Nx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+v:"",i.envMap?"#define "+p:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+_:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==us?"#define TONE_MAPPING":"",i.toneMapping!==us?me.tonemapping_pars_fragment:"",i.toneMapping!==us?jR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,XR("linearToOutputTexel",i.outputColorSpace),qR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(El).join(`
`)),h=Zp(h),h=Cx(h,i),h=wx(h,i),d=Zp(d),d=Cx(d,i),d=wx(d,i),h=Dx(h),d=Dx(d),i.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",i.glslVersion===L0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===L0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const z=B+y+h,N=B+S+d,X=bx(l,l.VERTEX_SHADER,z),V=bx(l,l.FRAGMENT_SHADER,N);l.attachShader(C,X),l.attachShader(C,V),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function P(H){if(o.debug.checkShaderErrors){const nt=l.getProgramInfoLog(C)||"",ct=l.getShaderInfoLog(X)||"",ht=l.getShaderInfoLog(V)||"",ut=nt.trim(),W=ct.trim(),O=ht.trim();let Y=!0,vt=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(Y=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,X,V);else{const St=Rx(l,X,"vertex"),Gt=Rx(l,V,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ut+`
`+St+`
`+Gt)}else ut!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ut):(W===""||O==="")&&(vt=!1);vt&&(H.diagnostics={runnable:Y,programLog:ut,vertexShader:{log:W,prefix:y},fragmentShader:{log:O,prefix:S}})}l.deleteShader(X),l.deleteShader(V),q=new Nc(l,C),D=ZR(l,C)}let q;this.getUniforms=function(){return q===void 0&&P(this),q};let D;this.getAttributes=function(){return D===void 0&&P(this),D};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(C,HR)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=GR++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=X,this.fragmentShader=V,this}let oC=0;class lC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),f=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(f)===!1&&(h.add(f),f.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new uC(e),i.set(e,s)),s}}class uC{constructor(e){this.id=oC++,this.code=e,this.usedTimes=0}}function cC(o,e,i,s,l,f,h){const d=new om,_=new lC,m=new Set,v=[],p=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(D){return m.add(D),D===0?"uv":`uv${D}`}function y(D,w,H,nt,ct){const ht=nt.fog,ut=ct.geometry,W=D.isMeshStandardMaterial?nt.environment:null,O=(D.isMeshStandardMaterial?i:e).get(D.envMap||W),Y=O&&O.mapping===Bc?O.image.height:null,vt=A[D.type];D.precision!==null&&(M=l.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const St=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,Gt=St!==void 0?St.length:0;let re=0;ut.morphAttributes.position!==void 0&&(re=1),ut.morphAttributes.normal!==void 0&&(re=2),ut.morphAttributes.color!==void 0&&(re=3);let Re,F,ft,tt;if(vt){const Ee=Ki[vt];Re=Ee.vertexShader,F=Ee.fragmentShader}else Re=D.vertexShader,F=D.fragmentShader,_.update(D),ft=_.getVertexShaderID(D),tt=_.getFragmentShaderID(D);const rt=o.getRenderTarget(),Mt=o.state.buffers.depth.getReversed(),Ut=ct.isInstancedMesh===!0,Rt=ct.isBatchedMesh===!0,Et=!!D.map,qt=!!D.matcap,I=!!O,Ge=!!D.aoMap,se=!!D.lightMap,Qt=!!D.bumpMap,Lt=!!D.normalMap,ie=!!D.displacementMap,Ft=!!D.emissiveMap,oe=!!D.metalnessMap,qe=!!D.roughnessMap,Ze=D.anisotropy>0,U=D.clearcoat>0,T=D.dispersion>0,it=D.iridescence>0,mt=D.sheen>0,xt=D.transmission>0,dt=Ze&&!!D.anisotropyMap,kt=U&&!!D.clearcoatMap,Ct=U&&!!D.clearcoatNormalMap,Wt=U&&!!D.clearcoatRoughnessMap,Kt=it&&!!D.iridescenceMap,bt=it&&!!D.iridescenceThicknessMap,Ot=mt&&!!D.sheenColorMap,ne=mt&&!!D.sheenRoughnessMap,Zt=!!D.specularMap,Pt=!!D.specularColorMap,fe=!!D.specularIntensityMap,k=xt&&!!D.transmissionMap,At=xt&&!!D.thicknessMap,Dt=!!D.gradientMap,Vt=!!D.alphaMap,yt=D.alphaTest>0,_t=!!D.alphaHash,Yt=!!D.extensions;let ue=us;D.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(ue=o.toneMapping);const Ve={shaderID:vt,shaderType:D.type,shaderName:D.name,vertexShader:Re,fragmentShader:F,defines:D.defines,customVertexShaderID:ft,customFragmentShaderID:tt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:Rt,batchingColor:Rt&&ct._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&ct.instanceColor!==null,instancingMorph:Ut&&ct.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:rt===null?o.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:mo,alphaToCoverage:!!D.alphaToCoverage,map:Et,matcap:qt,envMap:I,envMapMode:I&&O.mapping,envMapCubeUVHeight:Y,aoMap:Ge,lightMap:se,bumpMap:Qt,normalMap:Lt,displacementMap:x&&ie,emissiveMap:Ft,normalMapObjectSpace:Lt&&D.normalMapType===KE,normalMapTangentSpace:Lt&&D.normalMapType===Kx,metalnessMap:oe,roughnessMap:qe,anisotropy:Ze,anisotropyMap:dt,clearcoat:U,clearcoatMap:kt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Wt,dispersion:T,iridescence:it,iridescenceMap:Kt,iridescenceThicknessMap:bt,sheen:mt,sheenColorMap:Ot,sheenRoughnessMap:ne,specularMap:Zt,specularColorMap:Pt,specularIntensityMap:fe,transmission:xt,transmissionMap:k,thicknessMap:At,gradientMap:Dt,opaque:D.transparent===!1&&D.blending===uo&&D.alphaToCoverage===!1,alphaMap:Vt,alphaTest:yt,alphaHash:_t,combine:D.combine,mapUv:Et&&C(D.map.channel),aoMapUv:Ge&&C(D.aoMap.channel),lightMapUv:se&&C(D.lightMap.channel),bumpMapUv:Qt&&C(D.bumpMap.channel),normalMapUv:Lt&&C(D.normalMap.channel),displacementMapUv:ie&&C(D.displacementMap.channel),emissiveMapUv:Ft&&C(D.emissiveMap.channel),metalnessMapUv:oe&&C(D.metalnessMap.channel),roughnessMapUv:qe&&C(D.roughnessMap.channel),anisotropyMapUv:dt&&C(D.anisotropyMap.channel),clearcoatMapUv:kt&&C(D.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&C(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Wt&&C(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Kt&&C(D.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&C(D.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&C(D.sheenColorMap.channel),sheenRoughnessMapUv:ne&&C(D.sheenRoughnessMap.channel),specularMapUv:Zt&&C(D.specularMap.channel),specularColorMapUv:Pt&&C(D.specularColorMap.channel),specularIntensityMapUv:fe&&C(D.specularIntensityMap.channel),transmissionMapUv:k&&C(D.transmissionMap.channel),thicknessMapUv:At&&C(D.thicknessMap.channel),alphaMapUv:Vt&&C(D.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(Lt||Ze),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:ct.isPoints===!0&&!!ut.attributes.uv&&(Et||Vt),fog:!!ht,useFog:D.fog===!0,fogExp2:!!ht&&ht.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Mt,skinning:ct.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:Gt,morphTextureStride:re,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:ue,decodeVideoTexture:Et&&D.map.isVideoTexture===!0&&Ue.getTransfer(D.map.colorSpace)===Xe,decodeVideoTextureEmissive:Ft&&D.emissiveMap.isVideoTexture===!0&&Ue.getTransfer(D.emissiveMap.colorSpace)===Xe,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Ta,flipSided:D.side===Kn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Yt&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&D.extensions.multiDraw===!0||Rt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Ve.vertexUv1s=m.has(1),Ve.vertexUv2s=m.has(2),Ve.vertexUv3s=m.has(3),m.clear(),Ve}function S(D){const w=[];if(D.shaderID?w.push(D.shaderID):(w.push(D.customVertexShaderID),w.push(D.customFragmentShaderID)),D.defines!==void 0)for(const H in D.defines)w.push(H),w.push(D.defines[H]);return D.isRawShaderMaterial===!1&&(B(w,D),z(w,D),w.push(o.outputColorSpace)),w.push(D.customProgramCacheKey),w.join()}function B(D,w){D.push(w.precision),D.push(w.outputColorSpace),D.push(w.envMapMode),D.push(w.envMapCubeUVHeight),D.push(w.mapUv),D.push(w.alphaMapUv),D.push(w.lightMapUv),D.push(w.aoMapUv),D.push(w.bumpMapUv),D.push(w.normalMapUv),D.push(w.displacementMapUv),D.push(w.emissiveMapUv),D.push(w.metalnessMapUv),D.push(w.roughnessMapUv),D.push(w.anisotropyMapUv),D.push(w.clearcoatMapUv),D.push(w.clearcoatNormalMapUv),D.push(w.clearcoatRoughnessMapUv),D.push(w.iridescenceMapUv),D.push(w.iridescenceThicknessMapUv),D.push(w.sheenColorMapUv),D.push(w.sheenRoughnessMapUv),D.push(w.specularMapUv),D.push(w.specularColorMapUv),D.push(w.specularIntensityMapUv),D.push(w.transmissionMapUv),D.push(w.thicknessMapUv),D.push(w.combine),D.push(w.fogExp2),D.push(w.sizeAttenuation),D.push(w.morphTargetsCount),D.push(w.morphAttributeCount),D.push(w.numDirLights),D.push(w.numPointLights),D.push(w.numSpotLights),D.push(w.numSpotLightMaps),D.push(w.numHemiLights),D.push(w.numRectAreaLights),D.push(w.numDirLightShadows),D.push(w.numPointLightShadows),D.push(w.numSpotLightShadows),D.push(w.numSpotLightShadowsWithMaps),D.push(w.numLightProbes),D.push(w.shadowMapType),D.push(w.toneMapping),D.push(w.numClippingPlanes),D.push(w.numClipIntersection),D.push(w.depthPacking)}function z(D,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),w.gradientMap&&d.enable(22),D.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),D.push(d.mask)}function N(D){const w=A[D.type];let H;if(w){const nt=Ki[w];H=bT.clone(nt.uniforms)}else H=D.uniforms;return H}function X(D,w){let H;for(let nt=0,ct=v.length;nt<ct;nt++){const ht=v[nt];if(ht.cacheKey===w){H=ht,++H.usedTimes;break}}return H===void 0&&(H=new rC(o,w,D,f),v.push(H)),H}function V(D){if(--D.usedTimes===0){const w=v.indexOf(D);v[w]=v[v.length-1],v.pop(),D.destroy()}}function P(D){_.remove(D)}function q(){_.dispose()}return{getParameters:y,getProgramCacheKey:S,getUniforms:N,acquireProgram:X,releaseProgram:V,releaseShaderCache:P,programs:v,dispose:q}}function fC(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,_){o.get(h)[d]=_}function f(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:f}}function hC(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Ux(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Lx(){const o=[];let e=0;const i=[],s=[],l=[];function f(){e=0,i.length=0,s.length=0,l.length=0}function h(p,x,M,A,C,y){let S=o[e];return S===void 0?(S={id:p.id,object:p,geometry:x,material:M,groupOrder:A,renderOrder:p.renderOrder,z:C,group:y},o[e]=S):(S.id=p.id,S.object=p,S.geometry=x,S.material=M,S.groupOrder=A,S.renderOrder=p.renderOrder,S.z=C,S.group=y),e++,S}function d(p,x,M,A,C,y){const S=h(p,x,M,A,C,y);M.transmission>0?s.push(S):M.transparent===!0?l.push(S):i.push(S)}function _(p,x,M,A,C,y){const S=h(p,x,M,A,C,y);M.transmission>0?s.unshift(S):M.transparent===!0?l.unshift(S):i.unshift(S)}function m(p,x){i.length>1&&i.sort(p||hC),s.length>1&&s.sort(x||Ux),l.length>1&&l.sort(x||Ux)}function v(){for(let p=e,x=o.length;p<x;p++){const M=o[p];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:f,push:d,unshift:_,finish:v,sort:m}}function dC(){let o=new WeakMap;function e(s,l){const f=o.get(s);let h;return f===void 0?(h=new Lx,o.set(s,[h])):l>=f.length?(h=new Lx,f.push(h)):h=f[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function pC(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new at,color:new Me};break;case"SpotLight":i={position:new at,direction:new at,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new at,color:new Me,distance:0,decay:0};break;case"HemisphereLight":i={direction:new at,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":i={color:new Me,position:new at,halfWidth:new at,halfHeight:new at};break}return o[e.id]=i,i}}}function mC(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let gC=0;function _C(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function vC(o){const e=new pC,i=mC(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new at);const l=new at,f=new We,h=new We;function d(m){let v=0,p=0,x=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let M=0,A=0,C=0,y=0,S=0,B=0,z=0,N=0,X=0,V=0,P=0;m.sort(_C);for(let D=0,w=m.length;D<w;D++){const H=m[D],nt=H.color,ct=H.intensity,ht=H.distance,ut=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)v+=nt.r*ct,p+=nt.g*ct,x+=nt.b*ct;else if(H.isLightProbe){for(let W=0;W<9;W++)s.probe[W].addScaledVector(H.sh.coefficients[W],ct);P++}else if(H.isDirectionalLight){const W=e.get(H);if(W.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const O=H.shadow,Y=i.get(H);Y.shadowIntensity=O.intensity,Y.shadowBias=O.bias,Y.shadowNormalBias=O.normalBias,Y.shadowRadius=O.radius,Y.shadowMapSize=O.mapSize,s.directionalShadow[M]=Y,s.directionalShadowMap[M]=ut,s.directionalShadowMatrix[M]=H.shadow.matrix,B++}s.directional[M]=W,M++}else if(H.isSpotLight){const W=e.get(H);W.position.setFromMatrixPosition(H.matrixWorld),W.color.copy(nt).multiplyScalar(ct),W.distance=ht,W.coneCos=Math.cos(H.angle),W.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),W.decay=H.decay,s.spot[C]=W;const O=H.shadow;if(H.map&&(s.spotLightMap[X]=H.map,X++,O.updateMatrices(H),H.castShadow&&V++),s.spotLightMatrix[C]=O.matrix,H.castShadow){const Y=i.get(H);Y.shadowIntensity=O.intensity,Y.shadowBias=O.bias,Y.shadowNormalBias=O.normalBias,Y.shadowRadius=O.radius,Y.shadowMapSize=O.mapSize,s.spotShadow[C]=Y,s.spotShadowMap[C]=ut,N++}C++}else if(H.isRectAreaLight){const W=e.get(H);W.color.copy(nt).multiplyScalar(ct),W.halfWidth.set(H.width*.5,0,0),W.halfHeight.set(0,H.height*.5,0),s.rectArea[y]=W,y++}else if(H.isPointLight){const W=e.get(H);if(W.color.copy(H.color).multiplyScalar(H.intensity),W.distance=H.distance,W.decay=H.decay,H.castShadow){const O=H.shadow,Y=i.get(H);Y.shadowIntensity=O.intensity,Y.shadowBias=O.bias,Y.shadowNormalBias=O.normalBias,Y.shadowRadius=O.radius,Y.shadowMapSize=O.mapSize,Y.shadowCameraNear=O.camera.near,Y.shadowCameraFar=O.camera.far,s.pointShadow[A]=Y,s.pointShadowMap[A]=ut,s.pointShadowMatrix[A]=H.shadow.matrix,z++}s.point[A]=W,A++}else if(H.isHemisphereLight){const W=e.get(H);W.skyColor.copy(H.color).multiplyScalar(ct),W.groundColor.copy(H.groundColor).multiplyScalar(ct),s.hemi[S]=W,S++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=It.LTC_FLOAT_1,s.rectAreaLTC2=It.LTC_FLOAT_2):(s.rectAreaLTC1=It.LTC_HALF_1,s.rectAreaLTC2=It.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=p,s.ambient[2]=x;const q=s.hash;(q.directionalLength!==M||q.pointLength!==A||q.spotLength!==C||q.rectAreaLength!==y||q.hemiLength!==S||q.numDirectionalShadows!==B||q.numPointShadows!==z||q.numSpotShadows!==N||q.numSpotMaps!==X||q.numLightProbes!==P)&&(s.directional.length=M,s.spot.length=C,s.rectArea.length=y,s.point.length=A,s.hemi.length=S,s.directionalShadow.length=B,s.directionalShadowMap.length=B,s.pointShadow.length=z,s.pointShadowMap.length=z,s.spotShadow.length=N,s.spotShadowMap.length=N,s.directionalShadowMatrix.length=B,s.pointShadowMatrix.length=z,s.spotLightMatrix.length=N+X-V,s.spotLightMap.length=X,s.numSpotLightShadowsWithMaps=V,s.numLightProbes=P,q.directionalLength=M,q.pointLength=A,q.spotLength=C,q.rectAreaLength=y,q.hemiLength=S,q.numDirectionalShadows=B,q.numPointShadows=z,q.numSpotShadows=N,q.numSpotMaps=X,q.numLightProbes=P,s.version=gC++)}function _(m,v){let p=0,x=0,M=0,A=0,C=0;const y=v.matrixWorldInverse;for(let S=0,B=m.length;S<B;S++){const z=m[S];if(z.isDirectionalLight){const N=s.directional[p];N.direction.setFromMatrixPosition(z.matrixWorld),l.setFromMatrixPosition(z.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(y),p++}else if(z.isSpotLight){const N=s.spot[M];N.position.setFromMatrixPosition(z.matrixWorld),N.position.applyMatrix4(y),N.direction.setFromMatrixPosition(z.matrixWorld),l.setFromMatrixPosition(z.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(y),M++}else if(z.isRectAreaLight){const N=s.rectArea[A];N.position.setFromMatrixPosition(z.matrixWorld),N.position.applyMatrix4(y),h.identity(),f.copy(z.matrixWorld),f.premultiply(y),h.extractRotation(f),N.halfWidth.set(z.width*.5,0,0),N.halfHeight.set(0,z.height*.5,0),N.halfWidth.applyMatrix4(h),N.halfHeight.applyMatrix4(h),A++}else if(z.isPointLight){const N=s.point[x];N.position.setFromMatrixPosition(z.matrixWorld),N.position.applyMatrix4(y),x++}else if(z.isHemisphereLight){const N=s.hemi[C];N.direction.setFromMatrixPosition(z.matrixWorld),N.direction.transformDirection(y),C++}}}return{setup:d,setupView:_,state:s}}function Ox(o){const e=new vC(o),i=[],s=[];function l(v){m.camera=v,i.length=0,s.length=0}function f(v){i.push(v)}function h(v){s.push(v)}function d(){e.setup(i)}function _(v){e.setupView(i,v)}const m={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:_,pushLight:f,pushShadow:h}}function xC(o){let e=new WeakMap;function i(l,f=0){const h=e.get(l);let d;return h===void 0?(d=new Ox(o),e.set(l,[d])):f>=h.length?(d=new Ox(o),h.push(d)):d=h[f],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const SC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function MC(o,e,i){let s=new um;const l=new xe,f=new xe,h=new on,d=new VT({depthPacking:ZE}),_=new kT,m={},v=i.maxTextureSize,p={[fs]:Kn,[Kn]:fs,[Ta]:Ta},x=new hs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:SC,fragmentShader:yC}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const A=new Ii;A.setAttribute("position",new Ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new zn(A,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hx;let S=this.type;this.render=function(V,P,q){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||V.length===0)return;const D=o.getRenderTarget(),w=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),nt=o.state;nt.setBlending(ls),nt.buffers.depth.getReversed()===!0?nt.buffers.color.setClear(0,0,0,0):nt.buffers.color.setClear(1,1,1,1),nt.buffers.depth.setTest(!0),nt.setScissorTest(!1);const ct=S!==Ea&&this.type===Ea,ht=S===Ea&&this.type!==Ea;for(let ut=0,W=V.length;ut<W;ut++){const O=V[ut],Y=O.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const vt=Y.getFrameExtents();if(l.multiply(vt),f.copy(Y.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(f.x=Math.floor(v/vt.x),l.x=f.x*vt.x,Y.mapSize.x=f.x),l.y>v&&(f.y=Math.floor(v/vt.y),l.y=f.y*vt.y,Y.mapSize.y=f.y)),Y.map===null||ct===!0||ht===!0){const Gt=this.type!==Ea?{minFilter:ui,magFilter:ui}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Ks(l.x,l.y,Gt),Y.map.texture.name=O.name+".shadowMap",Y.camera.updateProjectionMatrix()}o.setRenderTarget(Y.map),o.clear();const St=Y.getViewportCount();for(let Gt=0;Gt<St;Gt++){const re=Y.getViewport(Gt);h.set(f.x*re.x,f.y*re.y,f.x*re.z,f.y*re.w),nt.viewport(h),Y.updateMatrices(O,Gt),s=Y.getFrustum(),N(P,q,Y.camera,O,this.type)}Y.isPointLightShadow!==!0&&this.type===Ea&&B(Y,q),Y.needsUpdate=!1}S=this.type,y.needsUpdate=!1,o.setRenderTarget(D,w,H)};function B(V,P){const q=e.update(C);x.defines.VSM_SAMPLES!==V.blurSamples&&(x.defines.VSM_SAMPLES=V.blurSamples,M.defines.VSM_SAMPLES=V.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),V.mapPass===null&&(V.mapPass=new Ks(l.x,l.y)),x.uniforms.shadow_pass.value=V.map.texture,x.uniforms.resolution.value=V.mapSize,x.uniforms.radius.value=V.radius,o.setRenderTarget(V.mapPass),o.clear(),o.renderBufferDirect(P,null,q,x,C,null),M.uniforms.shadow_pass.value=V.mapPass.texture,M.uniforms.resolution.value=V.mapSize,M.uniforms.radius.value=V.radius,o.setRenderTarget(V.map),o.clear(),o.renderBufferDirect(P,null,q,M,C,null)}function z(V,P,q,D){let w=null;const H=q.isPointLight===!0?V.customDistanceMaterial:V.customDepthMaterial;if(H!==void 0)w=H;else if(w=q.isPointLight===!0?_:d,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const nt=w.uuid,ct=P.uuid;let ht=m[nt];ht===void 0&&(ht={},m[nt]=ht);let ut=ht[ct];ut===void 0&&(ut=w.clone(),ht[ct]=ut,P.addEventListener("dispose",X)),w=ut}if(w.visible=P.visible,w.wireframe=P.wireframe,D===Ea?w.side=P.shadowSide!==null?P.shadowSide:P.side:w.side=P.shadowSide!==null?P.shadowSide:p[P.side],w.alphaMap=P.alphaMap,w.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,w.map=P.map,w.clipShadows=P.clipShadows,w.clippingPlanes=P.clippingPlanes,w.clipIntersection=P.clipIntersection,w.displacementMap=P.displacementMap,w.displacementScale=P.displacementScale,w.displacementBias=P.displacementBias,w.wireframeLinewidth=P.wireframeLinewidth,w.linewidth=P.linewidth,q.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const nt=o.properties.get(w);nt.light=q}return w}function N(V,P,q,D,w){if(V.visible===!1)return;if(V.layers.test(P.layers)&&(V.isMesh||V.isLine||V.isPoints)&&(V.castShadow||V.receiveShadow&&w===Ea)&&(!V.frustumCulled||s.intersectsObject(V))){V.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,V.matrixWorld);const ct=e.update(V),ht=V.material;if(Array.isArray(ht)){const ut=ct.groups;for(let W=0,O=ut.length;W<O;W++){const Y=ut[W],vt=ht[Y.materialIndex];if(vt&&vt.visible){const St=z(V,vt,D,w);V.onBeforeShadow(o,V,P,q,ct,St,Y),o.renderBufferDirect(q,null,ct,St,V,Y),V.onAfterShadow(o,V,P,q,ct,St,Y)}}}else if(ht.visible){const ut=z(V,ht,D,w);V.onBeforeShadow(o,V,P,q,ct,ut,null),o.renderBufferDirect(q,null,ct,ut,V,null),V.onAfterShadow(o,V,P,q,ct,ut,null)}}const nt=V.children;for(let ct=0,ht=nt.length;ct<ht;ct++)N(nt[ct],P,q,D,w)}function X(V){V.target.removeEventListener("dispose",X);for(const q in m){const D=m[q],w=V.target.uuid;w in D&&(D[w].dispose(),delete D[w])}}}const EC={[op]:lp,[up]:hp,[cp]:dp,[fo]:fp,[lp]:op,[hp]:up,[dp]:cp,[fp]:fo};function TC(o,e){function i(){let k=!1;const At=new on;let Dt=null;const Vt=new on(0,0,0,0);return{setMask:function(yt){Dt!==yt&&!k&&(o.colorMask(yt,yt,yt,yt),Dt=yt)},setLocked:function(yt){k=yt},setClear:function(yt,_t,Yt,ue,Ve){Ve===!0&&(yt*=ue,_t*=ue,Yt*=ue),At.set(yt,_t,Yt,ue),Vt.equals(At)===!1&&(o.clearColor(yt,_t,Yt,ue),Vt.copy(At))},reset:function(){k=!1,Dt=null,Vt.set(-1,0,0,0)}}}function s(){let k=!1,At=!1,Dt=null,Vt=null,yt=null;return{setReversed:function(_t){if(At!==_t){const Yt=e.get("EXT_clip_control");_t?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT),At=_t;const ue=yt;yt=null,this.setClear(ue)}},getReversed:function(){return At},setTest:function(_t){_t?rt(o.DEPTH_TEST):Mt(o.DEPTH_TEST)},setMask:function(_t){Dt!==_t&&!k&&(o.depthMask(_t),Dt=_t)},setFunc:function(_t){if(At&&(_t=EC[_t]),Vt!==_t){switch(_t){case op:o.depthFunc(o.NEVER);break;case lp:o.depthFunc(o.ALWAYS);break;case up:o.depthFunc(o.LESS);break;case fo:o.depthFunc(o.LEQUAL);break;case cp:o.depthFunc(o.EQUAL);break;case fp:o.depthFunc(o.GEQUAL);break;case hp:o.depthFunc(o.GREATER);break;case dp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Vt=_t}},setLocked:function(_t){k=_t},setClear:function(_t){yt!==_t&&(At&&(_t=1-_t),o.clearDepth(_t),yt=_t)},reset:function(){k=!1,Dt=null,Vt=null,yt=null,At=!1}}}function l(){let k=!1,At=null,Dt=null,Vt=null,yt=null,_t=null,Yt=null,ue=null,Ve=null;return{setTest:function(Ee){k||(Ee?rt(o.STENCIL_TEST):Mt(o.STENCIL_TEST))},setMask:function(Ee){At!==Ee&&!k&&(o.stencilMask(Ee),At=Ee)},setFunc:function(Ee,en,mn){(Dt!==Ee||Vt!==en||yt!==mn)&&(o.stencilFunc(Ee,en,mn),Dt=Ee,Vt=en,yt=mn)},setOp:function(Ee,en,mn){(_t!==Ee||Yt!==en||ue!==mn)&&(o.stencilOp(Ee,en,mn),_t=Ee,Yt=en,ue=mn)},setLocked:function(Ee){k=Ee},setClear:function(Ee){Ve!==Ee&&(o.clearStencil(Ee),Ve=Ee)},reset:function(){k=!1,At=null,Dt=null,Vt=null,yt=null,_t=null,Yt=null,ue=null,Ve=null}}}const f=new i,h=new s,d=new l,_=new WeakMap,m=new WeakMap;let v={},p={},x=new WeakMap,M=[],A=null,C=!1,y=null,S=null,B=null,z=null,N=null,X=null,V=null,P=new Me(0,0,0),q=0,D=!1,w=null,H=null,nt=null,ct=null,ht=null;const ut=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,O=0;const Y=o.getParameter(o.VERSION);Y.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(Y)[1]),W=O>=1):Y.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),W=O>=2);let vt=null,St={};const Gt=o.getParameter(o.SCISSOR_BOX),re=o.getParameter(o.VIEWPORT),Re=new on().fromArray(Gt),F=new on().fromArray(re);function ft(k,At,Dt,Vt){const yt=new Uint8Array(4),_t=o.createTexture();o.bindTexture(k,_t),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Yt=0;Yt<Dt;Yt++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(At,0,o.RGBA,1,1,Vt,0,o.RGBA,o.UNSIGNED_BYTE,yt):o.texImage2D(At+Yt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,yt);return _t}const tt={};tt[o.TEXTURE_2D]=ft(o.TEXTURE_2D,o.TEXTURE_2D,1),tt[o.TEXTURE_CUBE_MAP]=ft(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[o.TEXTURE_2D_ARRAY]=ft(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),tt[o.TEXTURE_3D]=ft(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),h.setClear(1),d.setClear(0),rt(o.DEPTH_TEST),h.setFunc(fo),Qt(!1),Lt(C0),rt(o.CULL_FACE),Ge(ls);function rt(k){v[k]!==!0&&(o.enable(k),v[k]=!0)}function Mt(k){v[k]!==!1&&(o.disable(k),v[k]=!1)}function Ut(k,At){return p[k]!==At?(o.bindFramebuffer(k,At),p[k]=At,k===o.DRAW_FRAMEBUFFER&&(p[o.FRAMEBUFFER]=At),k===o.FRAMEBUFFER&&(p[o.DRAW_FRAMEBUFFER]=At),!0):!1}function Rt(k,At){let Dt=M,Vt=!1;if(k){Dt=x.get(At),Dt===void 0&&(Dt=[],x.set(At,Dt));const yt=k.textures;if(Dt.length!==yt.length||Dt[0]!==o.COLOR_ATTACHMENT0){for(let _t=0,Yt=yt.length;_t<Yt;_t++)Dt[_t]=o.COLOR_ATTACHMENT0+_t;Dt.length=yt.length,Vt=!0}}else Dt[0]!==o.BACK&&(Dt[0]=o.BACK,Vt=!0);Vt&&o.drawBuffers(Dt)}function Et(k){return A!==k?(o.useProgram(k),A=k,!0):!1}const qt={[js]:o.FUNC_ADD,[yE]:o.FUNC_SUBTRACT,[ME]:o.FUNC_REVERSE_SUBTRACT};qt[EE]=o.MIN,qt[TE]=o.MAX;const I={[bE]:o.ZERO,[AE]:o.ONE,[RE]:o.SRC_COLOR,[sp]:o.SRC_ALPHA,[LE]:o.SRC_ALPHA_SATURATE,[NE]:o.DST_COLOR,[wE]:o.DST_ALPHA,[CE]:o.ONE_MINUS_SRC_COLOR,[rp]:o.ONE_MINUS_SRC_ALPHA,[UE]:o.ONE_MINUS_DST_COLOR,[DE]:o.ONE_MINUS_DST_ALPHA,[OE]:o.CONSTANT_COLOR,[PE]:o.ONE_MINUS_CONSTANT_COLOR,[zE]:o.CONSTANT_ALPHA,[IE]:o.ONE_MINUS_CONSTANT_ALPHA};function Ge(k,At,Dt,Vt,yt,_t,Yt,ue,Ve,Ee){if(k===ls){C===!0&&(Mt(o.BLEND),C=!1);return}if(C===!1&&(rt(o.BLEND),C=!0),k!==SE){if(k!==y||Ee!==D){if((S!==js||N!==js)&&(o.blendEquation(o.FUNC_ADD),S=js,N=js),Ee)switch(k){case uo:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case w0:o.blendFunc(o.ONE,o.ONE);break;case D0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case N0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case uo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case w0:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case D0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case N0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}B=null,z=null,X=null,V=null,P.set(0,0,0),q=0,y=k,D=Ee}return}yt=yt||At,_t=_t||Dt,Yt=Yt||Vt,(At!==S||yt!==N)&&(o.blendEquationSeparate(qt[At],qt[yt]),S=At,N=yt),(Dt!==B||Vt!==z||_t!==X||Yt!==V)&&(o.blendFuncSeparate(I[Dt],I[Vt],I[_t],I[Yt]),B=Dt,z=Vt,X=_t,V=Yt),(ue.equals(P)===!1||Ve!==q)&&(o.blendColor(ue.r,ue.g,ue.b,Ve),P.copy(ue),q=Ve),y=k,D=!1}function se(k,At){k.side===Ta?Mt(o.CULL_FACE):rt(o.CULL_FACE);let Dt=k.side===Kn;At&&(Dt=!Dt),Qt(Dt),k.blending===uo&&k.transparent===!1?Ge(ls):Ge(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),f.setMask(k.colorWrite);const Vt=k.stencilWrite;d.setTest(Vt),Vt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ft(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?rt(o.SAMPLE_ALPHA_TO_COVERAGE):Mt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(k){w!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),w=k)}function Lt(k){k!==_E?(rt(o.CULL_FACE),k!==H&&(k===C0?o.cullFace(o.BACK):k===vE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Mt(o.CULL_FACE),H=k}function ie(k){k!==nt&&(W&&o.lineWidth(k),nt=k)}function Ft(k,At,Dt){k?(rt(o.POLYGON_OFFSET_FILL),(ct!==At||ht!==Dt)&&(o.polygonOffset(At,Dt),ct=At,ht=Dt)):Mt(o.POLYGON_OFFSET_FILL)}function oe(k){k?rt(o.SCISSOR_TEST):Mt(o.SCISSOR_TEST)}function qe(k){k===void 0&&(k=o.TEXTURE0+ut-1),vt!==k&&(o.activeTexture(k),vt=k)}function Ze(k,At,Dt){Dt===void 0&&(vt===null?Dt=o.TEXTURE0+ut-1:Dt=vt);let Vt=St[Dt];Vt===void 0&&(Vt={type:void 0,texture:void 0},St[Dt]=Vt),(Vt.type!==k||Vt.texture!==At)&&(vt!==Dt&&(o.activeTexture(Dt),vt=Dt),o.bindTexture(k,At||tt[k]),Vt.type=k,Vt.texture=At)}function U(){const k=St[vt];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function T(){try{o.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function it(){try{o.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function mt(){try{o.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xt(){try{o.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function dt(){try{o.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function kt(){try{o.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ct(){try{o.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Wt(){try{o.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Kt(){try{o.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function bt(){try{o.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ot(k){Re.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),Re.copy(k))}function ne(k){F.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),F.copy(k))}function Zt(k,At){let Dt=m.get(At);Dt===void 0&&(Dt=new WeakMap,m.set(At,Dt));let Vt=Dt.get(k);Vt===void 0&&(Vt=o.getUniformBlockIndex(At,k.name),Dt.set(k,Vt))}function Pt(k,At){const Vt=m.get(At).get(k);_.get(At)!==Vt&&(o.uniformBlockBinding(At,Vt,k.__bindingPointIndex),_.set(At,Vt))}function fe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},vt=null,St={},p={},x=new WeakMap,M=[],A=null,C=!1,y=null,S=null,B=null,z=null,N=null,X=null,V=null,P=new Me(0,0,0),q=0,D=!1,w=null,H=null,nt=null,ct=null,ht=null,Re.set(0,0,o.canvas.width,o.canvas.height),F.set(0,0,o.canvas.width,o.canvas.height),f.reset(),h.reset(),d.reset()}return{buffers:{color:f,depth:h,stencil:d},enable:rt,disable:Mt,bindFramebuffer:Ut,drawBuffers:Rt,useProgram:Et,setBlending:Ge,setMaterial:se,setFlipSided:Qt,setCullFace:Lt,setLineWidth:ie,setPolygonOffset:Ft,setScissorTest:oe,activeTexture:qe,bindTexture:Ze,unbindTexture:U,compressedTexImage2D:T,compressedTexImage3D:it,texImage2D:Kt,texImage3D:bt,updateUBOMapping:Zt,uniformBlockBinding:Pt,texStorage2D:Ct,texStorage3D:Wt,texSubImage2D:mt,texSubImage3D:xt,compressedTexSubImage2D:dt,compressedTexSubImage3D:kt,scissor:Ot,viewport:ne,reset:fe}}function bC(o,e,i,s,l,f,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,_=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new xe,v=new WeakMap;let p;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(U,T){return M?new OffscreenCanvas(U,T):Oc("canvas")}function C(U,T,it){let mt=1;const xt=Ze(U);if((xt.width>it||xt.height>it)&&(mt=it/Math.max(xt.width,xt.height)),mt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const dt=Math.floor(mt*xt.width),kt=Math.floor(mt*xt.height);p===void 0&&(p=A(dt,kt));const Ct=T?A(dt,kt):p;return Ct.width=dt,Ct.height=kt,Ct.getContext("2d").drawImage(U,0,0,dt,kt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+dt+"x"+kt+")."),Ct}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),U;return U}function y(U){return U.generateMipmaps}function S(U){o.generateMipmap(U)}function B(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function z(U,T,it,mt,xt=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let dt=T;if(T===o.RED&&(it===o.FLOAT&&(dt=o.R32F),it===o.HALF_FLOAT&&(dt=o.R16F),it===o.UNSIGNED_BYTE&&(dt=o.R8)),T===o.RED_INTEGER&&(it===o.UNSIGNED_BYTE&&(dt=o.R8UI),it===o.UNSIGNED_SHORT&&(dt=o.R16UI),it===o.UNSIGNED_INT&&(dt=o.R32UI),it===o.BYTE&&(dt=o.R8I),it===o.SHORT&&(dt=o.R16I),it===o.INT&&(dt=o.R32I)),T===o.RG&&(it===o.FLOAT&&(dt=o.RG32F),it===o.HALF_FLOAT&&(dt=o.RG16F),it===o.UNSIGNED_BYTE&&(dt=o.RG8)),T===o.RG_INTEGER&&(it===o.UNSIGNED_BYTE&&(dt=o.RG8UI),it===o.UNSIGNED_SHORT&&(dt=o.RG16UI),it===o.UNSIGNED_INT&&(dt=o.RG32UI),it===o.BYTE&&(dt=o.RG8I),it===o.SHORT&&(dt=o.RG16I),it===o.INT&&(dt=o.RG32I)),T===o.RGB_INTEGER&&(it===o.UNSIGNED_BYTE&&(dt=o.RGB8UI),it===o.UNSIGNED_SHORT&&(dt=o.RGB16UI),it===o.UNSIGNED_INT&&(dt=o.RGB32UI),it===o.BYTE&&(dt=o.RGB8I),it===o.SHORT&&(dt=o.RGB16I),it===o.INT&&(dt=o.RGB32I)),T===o.RGBA_INTEGER&&(it===o.UNSIGNED_BYTE&&(dt=o.RGBA8UI),it===o.UNSIGNED_SHORT&&(dt=o.RGBA16UI),it===o.UNSIGNED_INT&&(dt=o.RGBA32UI),it===o.BYTE&&(dt=o.RGBA8I),it===o.SHORT&&(dt=o.RGBA16I),it===o.INT&&(dt=o.RGBA32I)),T===o.RGB&&(it===o.UNSIGNED_INT_5_9_9_9_REV&&(dt=o.RGB9_E5),it===o.UNSIGNED_INT_10F_11F_11F_REV&&(dt=o.R11F_G11F_B10F)),T===o.RGBA){const kt=xt?Uc:Ue.getTransfer(mt);it===o.FLOAT&&(dt=o.RGBA32F),it===o.HALF_FLOAT&&(dt=o.RGBA16F),it===o.UNSIGNED_BYTE&&(dt=kt===Xe?o.SRGB8_ALPHA8:o.RGBA8),it===o.UNSIGNED_SHORT_4_4_4_4&&(dt=o.RGBA4),it===o.UNSIGNED_SHORT_5_5_5_1&&(dt=o.RGB5_A1)}return(dt===o.R16F||dt===o.R32F||dt===o.RG16F||dt===o.RG32F||dt===o.RGBA16F||dt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),dt}function N(U,T){let it;return U?T===null||T===Zs||T===bl?it=o.DEPTH24_STENCIL8:T===$i?it=o.DEPTH32F_STENCIL8:T===Tl&&(it=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Zs||T===bl?it=o.DEPTH_COMPONENT24:T===$i?it=o.DEPTH_COMPONENT32F:T===Tl&&(it=o.DEPTH_COMPONENT16),it}function X(U,T){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==ui&&U.minFilter!==Ji?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function V(U){const T=U.target;T.removeEventListener("dispose",V),q(T),T.isVideoTexture&&v.delete(T)}function P(U){const T=U.target;T.removeEventListener("dispose",P),w(T)}function q(U){const T=s.get(U);if(T.__webglInit===void 0)return;const it=U.source,mt=x.get(it);if(mt){const xt=mt[T.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&D(U),Object.keys(mt).length===0&&x.delete(it)}s.remove(U)}function D(U){const T=s.get(U);o.deleteTexture(T.__webglTexture);const it=U.source,mt=x.get(it);delete mt[T.__cacheKey],h.memory.textures--}function w(U){const T=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(T.__webglFramebuffer[mt]))for(let xt=0;xt<T.__webglFramebuffer[mt].length;xt++)o.deleteFramebuffer(T.__webglFramebuffer[mt][xt]);else o.deleteFramebuffer(T.__webglFramebuffer[mt]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[mt])}else{if(Array.isArray(T.__webglFramebuffer))for(let mt=0;mt<T.__webglFramebuffer.length;mt++)o.deleteFramebuffer(T.__webglFramebuffer[mt]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let mt=0;mt<T.__webglColorRenderbuffer.length;mt++)T.__webglColorRenderbuffer[mt]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[mt]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const it=U.textures;for(let mt=0,xt=it.length;mt<xt;mt++){const dt=s.get(it[mt]);dt.__webglTexture&&(o.deleteTexture(dt.__webglTexture),h.memory.textures--),s.remove(it[mt])}s.remove(U)}let H=0;function nt(){H=0}function ct(){const U=H;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),H+=1,U}function ht(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function ut(U,T){const it=s.get(U);if(U.isVideoTexture&&oe(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&it.__version!==U.version){const mt=U.image;if(mt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt(it,U,T);return}}else U.isExternalTexture&&(it.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,it.__webglTexture,o.TEXTURE0+T)}function W(U,T){const it=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&it.__version!==U.version){tt(it,U,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,it.__webglTexture,o.TEXTURE0+T)}function O(U,T){const it=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&it.__version!==U.version){tt(it,U,T);return}i.bindTexture(o.TEXTURE_3D,it.__webglTexture,o.TEXTURE0+T)}function Y(U,T){const it=s.get(U);if(U.version>0&&it.__version!==U.version){rt(it,U,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,it.__webglTexture,o.TEXTURE0+T)}const vt={[gp]:o.REPEAT,[Ys]:o.CLAMP_TO_EDGE,[_p]:o.MIRRORED_REPEAT},St={[ui]:o.NEAREST,[YE]:o.NEAREST_MIPMAP_NEAREST,[tc]:o.NEAREST_MIPMAP_LINEAR,[Ji]:o.LINEAR,[Ed]:o.LINEAR_MIPMAP_NEAREST,[Ws]:o.LINEAR_MIPMAP_LINEAR},Gt={[QE]:o.NEVER,[iT]:o.ALWAYS,[JE]:o.LESS,[Qx]:o.LEQUAL,[$E]:o.EQUAL,[nT]:o.GEQUAL,[tT]:o.GREATER,[eT]:o.NOTEQUAL};function re(U,T){if(T.type===$i&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ji||T.magFilter===Ed||T.magFilter===tc||T.magFilter===Ws||T.minFilter===Ji||T.minFilter===Ed||T.minFilter===tc||T.minFilter===Ws)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,vt[T.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,vt[T.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,vt[T.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,St[T.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,St[T.minFilter]),T.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,Gt[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ui||T.minFilter!==tc&&T.minFilter!==Ws||T.type===$i&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const it=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function Re(U,T){let it=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",V));const mt=T.source;let xt=x.get(mt);xt===void 0&&(xt={},x.set(mt,xt));const dt=ht(T);if(dt!==U.__cacheKey){xt[dt]===void 0&&(xt[dt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,it=!0),xt[dt].usedTimes++;const kt=xt[U.__cacheKey];kt!==void 0&&(xt[U.__cacheKey].usedTimes--,kt.usedTimes===0&&D(T)),U.__cacheKey=dt,U.__webglTexture=xt[dt].texture}return it}function F(U,T,it){return Math.floor(Math.floor(U/it)/T)}function ft(U,T,it,mt){const dt=U.updateRanges;if(dt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,T.width,T.height,it,mt,T.data);else{dt.sort((bt,Ot)=>bt.start-Ot.start);let kt=0;for(let bt=1;bt<dt.length;bt++){const Ot=dt[kt],ne=dt[bt],Zt=Ot.start+Ot.count,Pt=F(ne.start,T.width,4),fe=F(Ot.start,T.width,4);ne.start<=Zt+1&&Pt===fe&&F(ne.start+ne.count-1,T.width,4)===Pt?Ot.count=Math.max(Ot.count,ne.start+ne.count-Ot.start):(++kt,dt[kt]=ne)}dt.length=kt+1;const Ct=o.getParameter(o.UNPACK_ROW_LENGTH),Wt=o.getParameter(o.UNPACK_SKIP_PIXELS),Kt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,T.width);for(let bt=0,Ot=dt.length;bt<Ot;bt++){const ne=dt[bt],Zt=Math.floor(ne.start/4),Pt=Math.ceil(ne.count/4),fe=Zt%T.width,k=Math.floor(Zt/T.width),At=Pt,Dt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,fe),o.pixelStorei(o.UNPACK_SKIP_ROWS,k),i.texSubImage2D(o.TEXTURE_2D,0,fe,k,At,Dt,it,mt,T.data)}U.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ct),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Wt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Kt)}}function tt(U,T,it){let mt=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(mt=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(mt=o.TEXTURE_3D);const xt=Re(U,T),dt=T.source;i.bindTexture(mt,U.__webglTexture,o.TEXTURE0+it);const kt=s.get(dt);if(dt.version!==kt.__version||xt===!0){i.activeTexture(o.TEXTURE0+it);const Ct=Ue.getPrimaries(Ue.workingColorSpace),Wt=T.colorSpace===os?null:Ue.getPrimaries(T.colorSpace),Kt=T.colorSpace===os||Ct===Wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let bt=C(T.image,!1,l.maxTextureSize);bt=qe(T,bt);const Ot=f.convert(T.format,T.colorSpace),ne=f.convert(T.type);let Zt=z(T.internalFormat,Ot,ne,T.colorSpace,T.isVideoTexture);re(mt,T);let Pt;const fe=T.mipmaps,k=T.isVideoTexture!==!0,At=kt.__version===void 0||xt===!0,Dt=dt.dataReady,Vt=X(T,bt);if(T.isDepthTexture)Zt=N(T.format===Rl,T.type),At&&(k?i.texStorage2D(o.TEXTURE_2D,1,Zt,bt.width,bt.height):i.texImage2D(o.TEXTURE_2D,0,Zt,bt.width,bt.height,0,Ot,ne,null));else if(T.isDataTexture)if(fe.length>0){k&&At&&i.texStorage2D(o.TEXTURE_2D,Vt,Zt,fe[0].width,fe[0].height);for(let yt=0,_t=fe.length;yt<_t;yt++)Pt=fe[yt],k?Dt&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Pt.width,Pt.height,Ot,ne,Pt.data):i.texImage2D(o.TEXTURE_2D,yt,Zt,Pt.width,Pt.height,0,Ot,ne,Pt.data);T.generateMipmaps=!1}else k?(At&&i.texStorage2D(o.TEXTURE_2D,Vt,Zt,bt.width,bt.height),Dt&&ft(T,bt,Ot,ne)):i.texImage2D(o.TEXTURE_2D,0,Zt,bt.width,bt.height,0,Ot,ne,bt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){k&&At&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Vt,Zt,fe[0].width,fe[0].height,bt.depth);for(let yt=0,_t=fe.length;yt<_t;yt++)if(Pt=fe[yt],T.format!==Pi)if(Ot!==null)if(k){if(Dt)if(T.layerUpdates.size>0){const Yt=cx(Pt.width,Pt.height,T.format,T.type);for(const ue of T.layerUpdates){const Ve=Pt.data.subarray(ue*Yt/Pt.data.BYTES_PER_ELEMENT,(ue+1)*Yt/Pt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,ue,Pt.width,Pt.height,1,Ot,Ve)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,Pt.width,Pt.height,bt.depth,Ot,Pt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,yt,Zt,Pt.width,Pt.height,bt.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Dt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,Pt.width,Pt.height,bt.depth,Ot,ne,Pt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,yt,Zt,Pt.width,Pt.height,bt.depth,0,Ot,ne,Pt.data)}else{k&&At&&i.texStorage2D(o.TEXTURE_2D,Vt,Zt,fe[0].width,fe[0].height);for(let yt=0,_t=fe.length;yt<_t;yt++)Pt=fe[yt],T.format!==Pi?Ot!==null?k?Dt&&i.compressedTexSubImage2D(o.TEXTURE_2D,yt,0,0,Pt.width,Pt.height,Ot,Pt.data):i.compressedTexImage2D(o.TEXTURE_2D,yt,Zt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Dt&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Pt.width,Pt.height,Ot,ne,Pt.data):i.texImage2D(o.TEXTURE_2D,yt,Zt,Pt.width,Pt.height,0,Ot,ne,Pt.data)}else if(T.isDataArrayTexture)if(k){if(At&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Vt,Zt,bt.width,bt.height,bt.depth),Dt)if(T.layerUpdates.size>0){const yt=cx(bt.width,bt.height,T.format,T.type);for(const _t of T.layerUpdates){const Yt=bt.data.subarray(_t*yt/bt.data.BYTES_PER_ELEMENT,(_t+1)*yt/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,bt.width,bt.height,1,Ot,ne,Yt)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Ot,ne,bt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Zt,bt.width,bt.height,bt.depth,0,Ot,ne,bt.data);else if(T.isData3DTexture)k?(At&&i.texStorage3D(o.TEXTURE_3D,Vt,Zt,bt.width,bt.height,bt.depth),Dt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Ot,ne,bt.data)):i.texImage3D(o.TEXTURE_3D,0,Zt,bt.width,bt.height,bt.depth,0,Ot,ne,bt.data);else if(T.isFramebufferTexture){if(At)if(k)i.texStorage2D(o.TEXTURE_2D,Vt,Zt,bt.width,bt.height);else{let yt=bt.width,_t=bt.height;for(let Yt=0;Yt<Vt;Yt++)i.texImage2D(o.TEXTURE_2D,Yt,Zt,yt,_t,0,Ot,ne,null),yt>>=1,_t>>=1}}else if(fe.length>0){if(k&&At){const yt=Ze(fe[0]);i.texStorage2D(o.TEXTURE_2D,Vt,Zt,yt.width,yt.height)}for(let yt=0,_t=fe.length;yt<_t;yt++)Pt=fe[yt],k?Dt&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Ot,ne,Pt):i.texImage2D(o.TEXTURE_2D,yt,Zt,Ot,ne,Pt);T.generateMipmaps=!1}else if(k){if(At){const yt=Ze(bt);i.texStorage2D(o.TEXTURE_2D,Vt,Zt,yt.width,yt.height)}Dt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ot,ne,bt)}else i.texImage2D(o.TEXTURE_2D,0,Zt,Ot,ne,bt);y(T)&&S(mt),kt.__version=dt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function rt(U,T,it){if(T.image.length!==6)return;const mt=Re(U,T),xt=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+it);const dt=s.get(xt);if(xt.version!==dt.__version||mt===!0){i.activeTexture(o.TEXTURE0+it);const kt=Ue.getPrimaries(Ue.workingColorSpace),Ct=T.colorSpace===os?null:Ue.getPrimaries(T.colorSpace),Wt=T.colorSpace===os||kt===Ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);const Kt=T.isCompressedTexture||T.image[0].isCompressedTexture,bt=T.image[0]&&T.image[0].isDataTexture,Ot=[];for(let _t=0;_t<6;_t++)!Kt&&!bt?Ot[_t]=C(T.image[_t],!0,l.maxCubemapSize):Ot[_t]=bt?T.image[_t].image:T.image[_t],Ot[_t]=qe(T,Ot[_t]);const ne=Ot[0],Zt=f.convert(T.format,T.colorSpace),Pt=f.convert(T.type),fe=z(T.internalFormat,Zt,Pt,T.colorSpace),k=T.isVideoTexture!==!0,At=dt.__version===void 0||mt===!0,Dt=xt.dataReady;let Vt=X(T,ne);re(o.TEXTURE_CUBE_MAP,T);let yt;if(Kt){k&&At&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Vt,fe,ne.width,ne.height);for(let _t=0;_t<6;_t++){yt=Ot[_t].mipmaps;for(let Yt=0;Yt<yt.length;Yt++){const ue=yt[Yt];T.format!==Pi?Zt!==null?k?Dt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Yt,0,0,ue.width,ue.height,Zt,ue.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Yt,fe,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Yt,0,0,ue.width,ue.height,Zt,Pt,ue.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Yt,fe,ue.width,ue.height,0,Zt,Pt,ue.data)}}}else{if(yt=T.mipmaps,k&&At){yt.length>0&&Vt++;const _t=Ze(Ot[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Vt,fe,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(bt){k?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Ot[_t].width,Ot[_t].height,Zt,Pt,Ot[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,fe,Ot[_t].width,Ot[_t].height,0,Zt,Pt,Ot[_t].data);for(let Yt=0;Yt<yt.length;Yt++){const Ve=yt[Yt].image[_t].image;k?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Yt+1,0,0,Ve.width,Ve.height,Zt,Pt,Ve.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Yt+1,fe,Ve.width,Ve.height,0,Zt,Pt,Ve.data)}}else{k?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Zt,Pt,Ot[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,fe,Zt,Pt,Ot[_t]);for(let Yt=0;Yt<yt.length;Yt++){const ue=yt[Yt];k?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Yt+1,0,0,Zt,Pt,ue.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Yt+1,fe,Zt,Pt,ue.image[_t])}}}y(T)&&S(o.TEXTURE_CUBE_MAP),dt.__version=xt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function Mt(U,T,it,mt,xt,dt){const kt=f.convert(it.format,it.colorSpace),Ct=f.convert(it.type),Wt=z(it.internalFormat,kt,Ct,it.colorSpace),Kt=s.get(T),bt=s.get(it);if(bt.__renderTarget=T,!Kt.__hasExternalTextures){const Ot=Math.max(1,T.width>>dt),ne=Math.max(1,T.height>>dt);xt===o.TEXTURE_3D||xt===o.TEXTURE_2D_ARRAY?i.texImage3D(xt,dt,Wt,Ot,ne,T.depth,0,kt,Ct,null):i.texImage2D(xt,dt,Wt,Ot,ne,0,kt,Ct,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),Ft(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,mt,xt,bt.__webglTexture,0,ie(T)):(xt===o.TEXTURE_2D||xt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,mt,xt,bt.__webglTexture,dt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ut(U,T,it){if(o.bindRenderbuffer(o.RENDERBUFFER,U),T.depthBuffer){const mt=T.depthTexture,xt=mt&&mt.isDepthTexture?mt.type:null,dt=N(T.stencilBuffer,xt),kt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ct=ie(T);Ft(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ct,dt,T.width,T.height):it?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ct,dt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,dt,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,kt,o.RENDERBUFFER,U)}else{const mt=T.textures;for(let xt=0;xt<mt.length;xt++){const dt=mt[xt],kt=f.convert(dt.format,dt.colorSpace),Ct=f.convert(dt.type),Wt=z(dt.internalFormat,kt,Ct,dt.colorSpace),Kt=ie(T);it&&Ft(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Kt,Wt,T.width,T.height):Ft(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Kt,Wt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Wt,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Rt(U,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const mt=s.get(T.depthTexture);mt.__renderTarget=T,(!mt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ut(T.depthTexture,0);const xt=mt.__webglTexture,dt=ie(T);if(T.depthTexture.format===Al)Ft(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xt,0,dt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xt,0);else if(T.depthTexture.format===Rl)Ft(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xt,0,dt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xt,0);else throw new Error("Unknown depthTexture format")}function Et(U){const T=s.get(U),it=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const mt=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),mt){const xt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,mt.removeEventListener("dispose",xt)};mt.addEventListener("dispose",xt),T.__depthDisposeCallback=xt}T.__boundDepthTexture=mt}if(U.depthTexture&&!T.__autoAllocateDepthBuffer){if(it)throw new Error("target.depthTexture not supported in Cube render targets");const mt=U.texture.mipmaps;mt&&mt.length>0?Rt(T.__webglFramebuffer[0],U):Rt(T.__webglFramebuffer,U)}else if(it){T.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[mt]),T.__webglDepthbuffer[mt]===void 0)T.__webglDepthbuffer[mt]=o.createRenderbuffer(),Ut(T.__webglDepthbuffer[mt],U,!1);else{const xt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,dt=T.__webglDepthbuffer[mt];o.bindRenderbuffer(o.RENDERBUFFER,dt),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,dt)}}else{const mt=U.texture.mipmaps;if(mt&&mt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),Ut(T.__webglDepthbuffer,U,!1);else{const xt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,dt=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,dt),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,dt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function qt(U,T,it){const mt=s.get(U);T!==void 0&&Mt(mt.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),it!==void 0&&Et(U)}function I(U){const T=U.texture,it=s.get(U),mt=s.get(T);U.addEventListener("dispose",P);const xt=U.textures,dt=U.isWebGLCubeRenderTarget===!0,kt=xt.length>1;if(kt||(mt.__webglTexture===void 0&&(mt.__webglTexture=o.createTexture()),mt.__version=T.version,h.memory.textures++),dt){it.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(T.mipmaps&&T.mipmaps.length>0){it.__webglFramebuffer[Ct]=[];for(let Wt=0;Wt<T.mipmaps.length;Wt++)it.__webglFramebuffer[Ct][Wt]=o.createFramebuffer()}else it.__webglFramebuffer[Ct]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){it.__webglFramebuffer=[];for(let Ct=0;Ct<T.mipmaps.length;Ct++)it.__webglFramebuffer[Ct]=o.createFramebuffer()}else it.__webglFramebuffer=o.createFramebuffer();if(kt)for(let Ct=0,Wt=xt.length;Ct<Wt;Ct++){const Kt=s.get(xt[Ct]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&Ft(U)===!1){it.__webglMultisampledFramebuffer=o.createFramebuffer(),it.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let Ct=0;Ct<xt.length;Ct++){const Wt=xt[Ct];it.__webglColorRenderbuffer[Ct]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,it.__webglColorRenderbuffer[Ct]);const Kt=f.convert(Wt.format,Wt.colorSpace),bt=f.convert(Wt.type),Ot=z(Wt.internalFormat,Kt,bt,Wt.colorSpace,U.isXRRenderTarget===!0),ne=ie(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,ne,Ot,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,it.__webglColorRenderbuffer[Ct])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(it.__webglDepthRenderbuffer=o.createRenderbuffer(),Ut(it.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(dt){i.bindTexture(o.TEXTURE_CUBE_MAP,mt.__webglTexture),re(o.TEXTURE_CUBE_MAP,T);for(let Ct=0;Ct<6;Ct++)if(T.mipmaps&&T.mipmaps.length>0)for(let Wt=0;Wt<T.mipmaps.length;Wt++)Mt(it.__webglFramebuffer[Ct][Wt],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Wt);else Mt(it.__webglFramebuffer[Ct],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);y(T)&&S(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(kt){for(let Ct=0,Wt=xt.length;Ct<Wt;Ct++){const Kt=xt[Ct],bt=s.get(Kt);let Ot=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ot=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ot,bt.__webglTexture),re(Ot,Kt),Mt(it.__webglFramebuffer,U,Kt,o.COLOR_ATTACHMENT0+Ct,Ot,0),y(Kt)&&S(Ot)}i.unbindTexture()}else{let Ct=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ct=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ct,mt.__webglTexture),re(Ct,T),T.mipmaps&&T.mipmaps.length>0)for(let Wt=0;Wt<T.mipmaps.length;Wt++)Mt(it.__webglFramebuffer[Wt],U,T,o.COLOR_ATTACHMENT0,Ct,Wt);else Mt(it.__webglFramebuffer,U,T,o.COLOR_ATTACHMENT0,Ct,0);y(T)&&S(Ct),i.unbindTexture()}U.depthBuffer&&Et(U)}function Ge(U){const T=U.textures;for(let it=0,mt=T.length;it<mt;it++){const xt=T[it];if(y(xt)){const dt=B(U),kt=s.get(xt).__webglTexture;i.bindTexture(dt,kt),S(dt),i.unbindTexture()}}}const se=[],Qt=[];function Lt(U){if(U.samples>0){if(Ft(U)===!1){const T=U.textures,it=U.width,mt=U.height;let xt=o.COLOR_BUFFER_BIT;const dt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,kt=s.get(U),Ct=T.length>1;if(Ct)for(let Kt=0;Kt<T.length;Kt++)i.bindFramebuffer(o.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,kt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,kt.__webglMultisampledFramebuffer);const Wt=U.texture.mipmaps;Wt&&Wt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,kt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let Kt=0;Kt<T.length;Kt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(xt|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(xt|=o.STENCIL_BUFFER_BIT)),Ct){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,kt.__webglColorRenderbuffer[Kt]);const bt=s.get(T[Kt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,bt,0)}o.blitFramebuffer(0,0,it,mt,0,0,it,mt,xt,o.NEAREST),_===!0&&(se.length=0,Qt.length=0,se.push(o.COLOR_ATTACHMENT0+Kt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(se.push(dt),Qt.push(dt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Qt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,se))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ct)for(let Kt=0;Kt<T.length;Kt++){i.bindFramebuffer(o.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.RENDERBUFFER,kt.__webglColorRenderbuffer[Kt]);const bt=s.get(T[Kt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,kt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.TEXTURE_2D,bt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,kt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&_){const T=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function ie(U){return Math.min(l.maxSamples,U.samples)}function Ft(U){const T=s.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function oe(U){const T=h.render.frame;v.get(U)!==T&&(v.set(U,T),U.update())}function qe(U,T){const it=U.colorSpace,mt=U.format,xt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||it!==mo&&it!==os&&(Ue.getTransfer(it)===Xe?(mt!==Pi||xt!==ea)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",it)),T}function Ze(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(m.width=U.naturalWidth||U.width,m.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(m.width=U.displayWidth,m.height=U.displayHeight):(m.width=U.width,m.height=U.height),m}this.allocateTextureUnit=ct,this.resetTextureUnits=nt,this.setTexture2D=ut,this.setTexture2DArray=W,this.setTexture3D=O,this.setTextureCube=Y,this.rebindTextures=qt,this.setupRenderTarget=I,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Ft}function AC(o,e){function i(s,l=os){let f;const h=Ue.getTransfer(l);if(s===ea)return o.UNSIGNED_BYTE;if(s===$p)return o.UNSIGNED_SHORT_4_4_4_4;if(s===tm)return o.UNSIGNED_SHORT_5_5_5_1;if(s===jx)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===qx)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===kx)return o.BYTE;if(s===Xx)return o.SHORT;if(s===Tl)return o.UNSIGNED_SHORT;if(s===Jp)return o.INT;if(s===Zs)return o.UNSIGNED_INT;if(s===$i)return o.FLOAT;if(s===wl)return o.HALF_FLOAT;if(s===Yx)return o.ALPHA;if(s===Wx)return o.RGB;if(s===Pi)return o.RGBA;if(s===Al)return o.DEPTH_COMPONENT;if(s===Rl)return o.DEPTH_STENCIL;if(s===em)return o.RED;if(s===nm)return o.RED_INTEGER;if(s===Zx)return o.RG;if(s===im)return o.RG_INTEGER;if(s===am)return o.RGBA_INTEGER;if(s===Rc||s===Cc||s===wc||s===Dc)if(h===Xe)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(s===Rc)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Cc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===wc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Dc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(s===Rc)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Cc)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===wc)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Dc)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===vp||s===xp||s===Sp||s===yp)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(s===vp)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===xp)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Sp)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===yp)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Mp||s===Ep||s===Tp)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(s===Mp||s===Ep)return h===Xe?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(s===Tp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===bp||s===Ap||s===Rp||s===Cp||s===wp||s===Dp||s===Np||s===Up||s===Lp||s===Op||s===Pp||s===zp||s===Ip||s===Bp)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(s===bp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ap)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Rp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Cp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===wp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Dp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Np)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Up)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Lp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Op)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Pp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===zp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ip)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Bp)return h===Xe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Fp||s===Hp||s===Gp)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(s===Fp)return h===Xe?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Hp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Gp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Vp||s===kp||s===Xp||s===jp)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(s===Vp)return f.COMPRESSED_RED_RGTC1_EXT;if(s===kp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Xp)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===jp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===bl?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const RC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class wC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new fS(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new hs({vertexShader:RC,fragmentShader:CC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new zn(new Fc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class DC extends Qs{constructor(e,i){super();const s=this;let l=null,f=1,h=null,d="local-floor",_=1,m=null,v=null,p=null,x=null,M=null,A=null;const C=typeof XRWebGLBinding<"u",y=new wC,S={},B=i.getContextAttributes();let z=null,N=null;const X=[],V=[],P=new xe;let q=null;const D=new Mi;D.viewport=new on;const w=new Mi;w.viewport=new on;const H=[D,w],nt=new WT;let ct=null,ht=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let rt=X[tt];return rt===void 0&&(rt=new qd,X[tt]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(tt){let rt=X[tt];return rt===void 0&&(rt=new qd,X[tt]=rt),rt.getGripSpace()},this.getHand=function(tt){let rt=X[tt];return rt===void 0&&(rt=new qd,X[tt]=rt),rt.getHandSpace()};function ut(tt){const rt=V.indexOf(tt.inputSource);if(rt===-1)return;const Mt=X[rt];Mt!==void 0&&(Mt.update(tt.inputSource,tt.frame,m||h),Mt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function W(){l.removeEventListener("select",ut),l.removeEventListener("selectstart",ut),l.removeEventListener("selectend",ut),l.removeEventListener("squeeze",ut),l.removeEventListener("squeezestart",ut),l.removeEventListener("squeezeend",ut),l.removeEventListener("end",W),l.removeEventListener("inputsourceschange",O);for(let tt=0;tt<X.length;tt++){const rt=V[tt];rt!==null&&(V[tt]=null,X[tt].disconnect(rt))}ct=null,ht=null,y.reset();for(const tt in S)delete S[tt];e.setRenderTarget(z),M=null,x=null,p=null,l=null,N=null,ft.stop(),s.isPresenting=!1,e.setPixelRatio(q),e.setSize(P.width,P.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){f=tt,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){d=tt,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(tt){m=tt},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return p===null&&C&&(p=new XRWebGLBinding(l,i)),p},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(tt){if(l=tt,l!==null){if(z=e.getRenderTarget(),l.addEventListener("select",ut),l.addEventListener("selectstart",ut),l.addEventListener("selectend",ut),l.addEventListener("squeeze",ut),l.addEventListener("squeezestart",ut),l.addEventListener("squeezeend",ut),l.addEventListener("end",W),l.addEventListener("inputsourceschange",O),B.xrCompatible!==!0&&await i.makeXRCompatible(),q=e.getPixelRatio(),e.getSize(P),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Ut=null,Rt=null;B.depth&&(Rt=B.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=B.stencil?Rl:Al,Ut=B.stencil?bl:Zs);const Et={colorFormat:i.RGBA8,depthFormat:Rt,scaleFactor:f};p=this.getBinding(),x=p.createProjectionLayer(Et),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),N=new Ks(x.textureWidth,x.textureHeight,{format:Pi,type:ea,depthTexture:new cS(x.textureWidth,x.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:B.stencil,colorSpace:e.outputColorSpace,samples:B.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Mt={antialias:B.antialias,alpha:!0,depth:B.depth,stencil:B.stencil,framebufferScaleFactor:f};M=new XRWebGLLayer(l,i,Mt),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),N=new Ks(M.framebufferWidth,M.framebufferHeight,{format:Pi,type:ea,colorSpace:e.outputColorSpace,stencilBuffer:B.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(_),m=null,h=await l.requestReferenceSpace(d),ft.setContext(l),ft.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function O(tt){for(let rt=0;rt<tt.removed.length;rt++){const Mt=tt.removed[rt],Ut=V.indexOf(Mt);Ut>=0&&(V[Ut]=null,X[Ut].disconnect(Mt))}for(let rt=0;rt<tt.added.length;rt++){const Mt=tt.added[rt];let Ut=V.indexOf(Mt);if(Ut===-1){for(let Et=0;Et<X.length;Et++)if(Et>=V.length){V.push(Mt),Ut=Et;break}else if(V[Et]===null){V[Et]=Mt,Ut=Et;break}if(Ut===-1)break}const Rt=X[Ut];Rt&&Rt.connect(Mt)}}const Y=new at,vt=new at;function St(tt,rt,Mt){Y.setFromMatrixPosition(rt.matrixWorld),vt.setFromMatrixPosition(Mt.matrixWorld);const Ut=Y.distanceTo(vt),Rt=rt.projectionMatrix.elements,Et=Mt.projectionMatrix.elements,qt=Rt[14]/(Rt[10]-1),I=Rt[14]/(Rt[10]+1),Ge=(Rt[9]+1)/Rt[5],se=(Rt[9]-1)/Rt[5],Qt=(Rt[8]-1)/Rt[0],Lt=(Et[8]+1)/Et[0],ie=qt*Qt,Ft=qt*Lt,oe=Ut/(-Qt+Lt),qe=oe*-Qt;if(rt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(qe),tt.translateZ(oe),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Rt[10]===-1)tt.projectionMatrix.copy(rt.projectionMatrix),tt.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const Ze=qt+oe,U=I+oe,T=ie-qe,it=Ft+(Ut-qe),mt=Ge*I/U*Ze,xt=se*I/U*Ze;tt.projectionMatrix.makePerspective(T,it,mt,xt,Ze,U),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function Gt(tt,rt){rt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(rt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(l===null)return;let rt=tt.near,Mt=tt.far;y.texture!==null&&(y.depthNear>0&&(rt=y.depthNear),y.depthFar>0&&(Mt=y.depthFar)),nt.near=w.near=D.near=rt,nt.far=w.far=D.far=Mt,(ct!==nt.near||ht!==nt.far)&&(l.updateRenderState({depthNear:nt.near,depthFar:nt.far}),ct=nt.near,ht=nt.far),nt.layers.mask=tt.layers.mask|6,D.layers.mask=nt.layers.mask&3,w.layers.mask=nt.layers.mask&5;const Ut=tt.parent,Rt=nt.cameras;Gt(nt,Ut);for(let Et=0;Et<Rt.length;Et++)Gt(Rt[Et],Ut);Rt.length===2?St(nt,D,w):nt.projectionMatrix.copy(D.projectionMatrix),re(tt,nt,Ut)};function re(tt,rt,Mt){Mt===null?tt.matrix.copy(rt.matrixWorld):(tt.matrix.copy(Mt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(rt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(rt.projectionMatrix),tt.projectionMatrixInverse.copy(rt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Yp*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return nt},this.getFoveation=function(){if(!(x===null&&M===null))return _},this.setFoveation=function(tt){_=tt,x!==null&&(x.fixedFoveation=tt),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=tt)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(nt)},this.getCameraTexture=function(tt){return S[tt]};let Re=null;function F(tt,rt){if(v=rt.getViewerPose(m||h),A=rt,v!==null){const Mt=v.views;M!==null&&(e.setRenderTargetFramebuffer(N,M.framebuffer),e.setRenderTarget(N));let Ut=!1;Mt.length!==nt.cameras.length&&(nt.cameras.length=0,Ut=!0);for(let I=0;I<Mt.length;I++){const Ge=Mt[I];let se=null;if(M!==null)se=M.getViewport(Ge);else{const Lt=p.getViewSubImage(x,Ge);se=Lt.viewport,I===0&&(e.setRenderTargetTextures(N,Lt.colorTexture,Lt.depthStencilTexture),e.setRenderTarget(N))}let Qt=H[I];Qt===void 0&&(Qt=new Mi,Qt.layers.enable(I),Qt.viewport=new on,H[I]=Qt),Qt.matrix.fromArray(Ge.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(Ge.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(se.x,se.y,se.width,se.height),I===0&&(nt.matrix.copy(Qt.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale)),Ut===!0&&nt.cameras.push(Qt)}const Rt=l.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){p=s.getBinding();const I=p.getDepthInformation(Mt[0]);I&&I.isValid&&I.texture&&y.init(I,l.renderState)}if(Rt&&Rt.includes("camera-access")&&C){e.state.unbindTexture(),p=s.getBinding();for(let I=0;I<Mt.length;I++){const Ge=Mt[I].camera;if(Ge){let se=S[Ge];se||(se=new fS,S[Ge]=se);const Qt=p.getCameraImage(Ge);se.sourceTexture=Qt}}}}for(let Mt=0;Mt<X.length;Mt++){const Ut=V[Mt],Rt=X[Mt];Ut!==null&&Rt!==void 0&&Rt.update(Ut,rt,m||h)}Re&&Re(tt,rt),rt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:rt}),A=null}const ft=new pS;ft.setAnimationLoop(F),this.setAnimationLoop=function(tt){Re=tt},this.dispose=function(){}}}const Vs=new Qn,NC=new We;function UC(o,e){function i(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function s(y,S){S.color.getRGB(y.fogColor.value,aS(o)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function l(y,S,B,z,N){S.isMeshBasicMaterial||S.isMeshLambertMaterial?f(y,S):S.isMeshToonMaterial?(f(y,S),p(y,S)):S.isMeshPhongMaterial?(f(y,S),v(y,S)):S.isMeshStandardMaterial?(f(y,S),x(y,S),S.isMeshPhysicalMaterial&&M(y,S,N)):S.isMeshMatcapMaterial?(f(y,S),A(y,S)):S.isMeshDepthMaterial?f(y,S):S.isMeshDistanceMaterial?(f(y,S),C(y,S)):S.isMeshNormalMaterial?f(y,S):S.isLineBasicMaterial?(h(y,S),S.isLineDashedMaterial&&d(y,S)):S.isPointsMaterial?_(y,S,B,z):S.isSpriteMaterial?m(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function f(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,i(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===Kn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,i(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===Kn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,i(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,i(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const B=e.get(S),z=B.envMap,N=B.envMapRotation;z&&(y.envMap.value=z,Vs.copy(N),Vs.x*=-1,Vs.y*=-1,Vs.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(Vs.y*=-1,Vs.z*=-1),y.envMapRotation.value.setFromMatrix4(NC.makeRotationFromEuler(Vs)),y.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,y.aoMapTransform))}function h(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform))}function d(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function _(y,S,B,z){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*B,y.scale.value=z*.5,S.map&&(y.map.value=S.map,i(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function m(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function v(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function p(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function x(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function M(y,S,B){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Kn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=B.texture,y.transmissionSamplerSize.value.set(B.width,B.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,y.specularIntensityMapTransform))}function A(y,S){S.matcap&&(y.matcap.value=S.matcap)}function C(y,S){const B=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(B.matrixWorld),y.nearDistance.value=B.shadow.camera.near,y.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function LC(o,e,i,s){let l={},f={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function _(B,z){const N=z.program;s.uniformBlockBinding(B,N)}function m(B,z){let N=l[B.id];N===void 0&&(A(B),N=v(B),l[B.id]=N,B.addEventListener("dispose",y));const X=z.program;s.updateUBOMapping(B,X);const V=e.render.frame;f[B.id]!==V&&(x(B),f[B.id]=V)}function v(B){const z=p();B.__bindingPointIndex=z;const N=o.createBuffer(),X=B.__size,V=B.usage;return o.bindBuffer(o.UNIFORM_BUFFER,N),o.bufferData(o.UNIFORM_BUFFER,X,V),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,z,N),N}function p(){for(let B=0;B<d;B++)if(h.indexOf(B)===-1)return h.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(B){const z=l[B.id],N=B.uniforms,X=B.__cache;o.bindBuffer(o.UNIFORM_BUFFER,z);for(let V=0,P=N.length;V<P;V++){const q=Array.isArray(N[V])?N[V]:[N[V]];for(let D=0,w=q.length;D<w;D++){const H=q[D];if(M(H,V,D,X)===!0){const nt=H.__offset,ct=Array.isArray(H.value)?H.value:[H.value];let ht=0;for(let ut=0;ut<ct.length;ut++){const W=ct[ut],O=C(W);typeof W=="number"||typeof W=="boolean"?(H.__data[0]=W,o.bufferSubData(o.UNIFORM_BUFFER,nt+ht,H.__data)):W.isMatrix3?(H.__data[0]=W.elements[0],H.__data[1]=W.elements[1],H.__data[2]=W.elements[2],H.__data[3]=0,H.__data[4]=W.elements[3],H.__data[5]=W.elements[4],H.__data[6]=W.elements[5],H.__data[7]=0,H.__data[8]=W.elements[6],H.__data[9]=W.elements[7],H.__data[10]=W.elements[8],H.__data[11]=0):(W.toArray(H.__data,ht),ht+=O.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,nt,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(B,z,N,X){const V=B.value,P=z+"_"+N;if(X[P]===void 0)return typeof V=="number"||typeof V=="boolean"?X[P]=V:X[P]=V.clone(),!0;{const q=X[P];if(typeof V=="number"||typeof V=="boolean"){if(q!==V)return X[P]=V,!0}else if(q.equals(V)===!1)return q.copy(V),!0}return!1}function A(B){const z=B.uniforms;let N=0;const X=16;for(let P=0,q=z.length;P<q;P++){const D=Array.isArray(z[P])?z[P]:[z[P]];for(let w=0,H=D.length;w<H;w++){const nt=D[w],ct=Array.isArray(nt.value)?nt.value:[nt.value];for(let ht=0,ut=ct.length;ht<ut;ht++){const W=ct[ht],O=C(W),Y=N%X,vt=Y%O.boundary,St=Y+vt;N+=vt,St!==0&&X-St<O.storage&&(N+=X-St),nt.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),nt.__offset=N,N+=O.storage}}}const V=N%X;return V>0&&(N+=X-V),B.__size=N,B.__cache={},this}function C(B){const z={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(z.boundary=4,z.storage=4):B.isVector2?(z.boundary=8,z.storage=8):B.isVector3||B.isColor?(z.boundary=16,z.storage=12):B.isVector4?(z.boundary=16,z.storage=16):B.isMatrix3?(z.boundary=48,z.storage=48):B.isMatrix4?(z.boundary=64,z.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),z}function y(B){const z=B.target;z.removeEventListener("dispose",y);const N=h.indexOf(z.__bindingPointIndex);h.splice(N,1),o.deleteBuffer(l[z.id]),delete l[z.id],delete f[z.id]}function S(){for(const B in l)o.deleteBuffer(l[B]);h=[],l={},f={}}return{bind:_,update:m,dispose:S}}class Px{constructor(e={}){const{canvas:i=sT(),context:s=null,depth:l=!0,stencil:f=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:_=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const A=new Uint32Array(4),C=new Int32Array(4);let y=null,S=null;const B=[],z=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=us,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let X=!1;this._outputColorSpace=yi;let V=0,P=0,q=null,D=-1,w=null;const H=new on,nt=new on;let ct=null;const ht=new Me(0);let ut=0,W=i.width,O=i.height,Y=1,vt=null,St=null;const Gt=new on(0,0,W,O),re=new on(0,0,W,O);let Re=!1;const F=new um;let ft=!1,tt=!1;const rt=new We,Mt=new at,Ut=new on,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Et=!1;function qt(){return q===null?Y:1}let I=s;function Ge(R,Q){return i.getContext(R,Q)}try{const R={alpha:!0,depth:l,stencil:f,antialias:d,premultipliedAlpha:_,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:p};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Qp}`),i.addEventListener("webglcontextlost",Dt,!1),i.addEventListener("webglcontextrestored",Vt,!1),i.addEventListener("webglcontextcreationerror",yt,!1),I===null){const Q="webgl2";if(I=Ge(Q,R),I===null)throw Ge(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let se,Qt,Lt,ie,Ft,oe,qe,Ze,U,T,it,mt,xt,dt,kt,Ct,Wt,Kt,bt,Ot,ne,Zt,Pt,fe;function k(){se=new X1(I),se.init(),Zt=new AC(I,se),Qt=new I1(I,se,e,Zt),Lt=new TC(I,se),Qt.reversedDepthBuffer&&x&&Lt.buffers.depth.setReversed(!0),ie=new Y1(I),Ft=new fC,oe=new bC(I,se,Lt,Ft,Qt,Zt,ie),qe=new F1(N),Ze=new k1(N),U=new $T(I),Pt=new P1(I,U),T=new j1(I,U,ie,Pt),it=new Z1(I,T,U,ie),bt=new W1(I,Qt,oe),Ct=new B1(Ft),mt=new cC(N,qe,Ze,se,Qt,Pt,Ct),xt=new UC(N,Ft),dt=new dC,kt=new xC(se),Kt=new O1(N,qe,Ze,Lt,it,M,_),Wt=new MC(N,it,Qt),fe=new LC(I,ie,Qt,Lt),Ot=new z1(I,se,ie),ne=new q1(I,se,ie),ie.programs=mt.programs,N.capabilities=Qt,N.extensions=se,N.properties=Ft,N.renderLists=dt,N.shadowMap=Wt,N.state=Lt,N.info=ie}k();const At=new DC(N,I);this.xr=At,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const R=se.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=se.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(R){R!==void 0&&(Y=R,this.setSize(W,O,!1))},this.getSize=function(R){return R.set(W,O)},this.setSize=function(R,Q,ot=!0){if(At.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=R,O=Q,i.width=Math.floor(R*Y),i.height=Math.floor(Q*Y),ot===!0&&(i.style.width=R+"px",i.style.height=Q+"px"),this.setViewport(0,0,R,Q)},this.getDrawingBufferSize=function(R){return R.set(W*Y,O*Y).floor()},this.setDrawingBufferSize=function(R,Q,ot){W=R,O=Q,Y=ot,i.width=Math.floor(R*ot),i.height=Math.floor(Q*ot),this.setViewport(0,0,R,Q)},this.getCurrentViewport=function(R){return R.copy(H)},this.getViewport=function(R){return R.copy(Gt)},this.setViewport=function(R,Q,ot,lt){R.isVector4?Gt.set(R.x,R.y,R.z,R.w):Gt.set(R,Q,ot,lt),Lt.viewport(H.copy(Gt).multiplyScalar(Y).round())},this.getScissor=function(R){return R.copy(re)},this.setScissor=function(R,Q,ot,lt){R.isVector4?re.set(R.x,R.y,R.z,R.w):re.set(R,Q,ot,lt),Lt.scissor(nt.copy(re).multiplyScalar(Y).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(R){Lt.setScissorTest(Re=R)},this.setOpaqueSort=function(R){vt=R},this.setTransparentSort=function(R){St=R},this.getClearColor=function(R){return R.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor(...arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha(...arguments)},this.clear=function(R=!0,Q=!0,ot=!0){let lt=0;if(R){let J=!1;if(q!==null){const Tt=q.texture.format;J=Tt===am||Tt===im||Tt===nm}if(J){const Tt=q.texture.type,zt=Tt===ea||Tt===Zs||Tt===Tl||Tt===bl||Tt===$p||Tt===tm,Bt=Kt.getClearColor(),wt=Kt.getClearAlpha(),Xt=Bt.r,ee=Bt.g,$t=Bt.b;zt?(A[0]=Xt,A[1]=ee,A[2]=$t,A[3]=wt,I.clearBufferuiv(I.COLOR,0,A)):(C[0]=Xt,C[1]=ee,C[2]=$t,C[3]=wt,I.clearBufferiv(I.COLOR,0,C))}else lt|=I.COLOR_BUFFER_BIT}Q&&(lt|=I.DEPTH_BUFFER_BIT),ot&&(lt|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Dt,!1),i.removeEventListener("webglcontextrestored",Vt,!1),i.removeEventListener("webglcontextcreationerror",yt,!1),Kt.dispose(),dt.dispose(),kt.dispose(),Ft.dispose(),qe.dispose(),Ze.dispose(),it.dispose(),Pt.dispose(),fe.dispose(),mt.dispose(),At.dispose(),At.removeEventListener("sessionstart",mn),At.removeEventListener("sessionend",Nn),na.stop()};function Dt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),X=!0}function Vt(){console.log("THREE.WebGLRenderer: Context Restored."),X=!1;const R=ie.autoReset,Q=Wt.enabled,ot=Wt.autoUpdate,lt=Wt.needsUpdate,J=Wt.type;k(),ie.autoReset=R,Wt.enabled=Q,Wt.autoUpdate=ot,Wt.needsUpdate=lt,Wt.type=J}function yt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function _t(R){const Q=R.target;Q.removeEventListener("dispose",_t),Yt(Q)}function Yt(R){ue(R),Ft.remove(R)}function ue(R){const Q=Ft.get(R).programs;Q!==void 0&&(Q.forEach(function(ot){mt.releaseProgram(ot)}),R.isShaderMaterial&&mt.releaseShaderCache(R))}this.renderBufferDirect=function(R,Q,ot,lt,J,Tt){Q===null&&(Q=Rt);const zt=J.isMesh&&J.matrixWorld.determinant()<0,Bt=Ul(R,Q,ot,lt,J);Lt.setMaterial(lt,zt);let wt=ot.index,Xt=1;if(lt.wireframe===!0){if(wt=T.getWireframeAttribute(ot),wt===void 0)return;Xt=2}const ee=ot.drawRange,$t=ot.attributes.position;let ve=ee.start*Xt,ze=(ee.start+ee.count)*Xt;Tt!==null&&(ve=Math.max(ve,Tt.start*Xt),ze=Math.min(ze,(Tt.start+Tt.count)*Xt)),wt!==null?(ve=Math.max(ve,0),ze=Math.min(ze,wt.count)):$t!=null&&(ve=Math.max(ve,0),ze=Math.min(ze,$t.count));const $e=ze-ve;if($e<0||$e===1/0)return;Pt.setup(J,lt,Bt,ot,wt);let Le,we=Ot;if(wt!==null&&(Le=U.get(wt),we=ne,we.setIndex(Le)),J.isMesh)lt.wireframe===!0?(Lt.setLineWidth(lt.wireframeLinewidth*qt()),we.setMode(I.LINES)):we.setMode(I.TRIANGLES);else if(J.isLine){let te=lt.linewidth;te===void 0&&(te=1),Lt.setLineWidth(te*qt()),J.isLineSegments?we.setMode(I.LINES):J.isLineLoop?we.setMode(I.LINE_LOOP):we.setMode(I.LINE_STRIP)}else J.isPoints?we.setMode(I.POINTS):J.isSprite&&we.setMode(I.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)Cl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),we.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))we.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const te=J._multiDrawStarts,Oe=J._multiDrawCounts,ge=J._multiDrawCount,gn=wt?U.get(wt).bytesPerElement:1,Jn=Ft.get(lt).currentProgram.getUniforms();for(let De=0;De<ge;De++)Jn.setValue(I,"_gl_DrawID",De),we.render(te[De]/gn,Oe[De])}else if(J.isInstancedMesh)we.renderInstances(ve,$e,J.count);else if(ot.isInstancedBufferGeometry){const te=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Oe=Math.min(ot.instanceCount,te);we.renderInstances(ve,$e,Oe)}else we.render(ve,$e)};function Ve(R,Q,ot){R.transparent===!0&&R.side===Ta&&R.forceSinglePass===!1?(R.side=Kn,R.needsUpdate=!0,ci(R,Q,ot),R.side=fs,R.needsUpdate=!0,ci(R,Q,ot),R.side=Ta):ci(R,Q,ot)}this.compile=function(R,Q,ot=null){ot===null&&(ot=R),S=kt.get(ot),S.init(Q),z.push(S),ot.traverseVisible(function(J){J.isLight&&J.layers.test(Q.layers)&&(S.pushLight(J),J.castShadow&&S.pushShadow(J))}),R!==ot&&R.traverseVisible(function(J){J.isLight&&J.layers.test(Q.layers)&&(S.pushLight(J),J.castShadow&&S.pushShadow(J))}),S.setupLights();const lt=new Set;return R.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Tt=J.material;if(Tt)if(Array.isArray(Tt))for(let zt=0;zt<Tt.length;zt++){const Bt=Tt[zt];Ve(Bt,ot,J),lt.add(Bt)}else Ve(Tt,ot,J),lt.add(Tt)}),S=z.pop(),lt},this.compileAsync=function(R,Q,ot=null){const lt=this.compile(R,Q,ot);return new Promise(J=>{function Tt(){if(lt.forEach(function(zt){Ft.get(zt).currentProgram.isReady()&&lt.delete(zt)}),lt.size===0){J(R);return}setTimeout(Tt,10)}se.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Ee=null;function en(R){Ee&&Ee(R)}function mn(){na.stop()}function Nn(){na.start()}const na=new pS;na.setAnimationLoop(en),typeof self<"u"&&na.setContext(self),this.setAnimationLoop=function(R){Ee=R,At.setAnimationLoop(R),R===null?na.stop():na.start()},At.addEventListener("sessionstart",mn),At.addEventListener("sessionend",Nn),this.render=function(R,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(At.cameraAutoUpdate===!0&&At.updateCamera(Q),Q=At.getCamera()),R.isScene===!0&&R.onBeforeRender(N,R,Q,q),S=kt.get(R,z.length),S.init(Q),z.push(S),rt.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),F.setFromProjectionMatrix(rt,ta,Q.reversedDepth),tt=this.localClippingEnabled,ft=Ct.init(this.clippingPlanes,tt),y=dt.get(R,B.length),y.init(),B.push(y),At.enabled===!0&&At.isPresenting===!0){const Tt=N.xr.getDepthSensingMesh();Tt!==null&&xo(Tt,Q,-1/0,N.sortObjects)}xo(R,Q,0,N.sortObjects),y.finish(),N.sortObjects===!0&&y.sort(vt,St),Et=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,Et&&Kt.addToRenderList(y,R),this.info.render.frame++,ft===!0&&Ct.beginShadows();const ot=S.state.shadowsArray;Wt.render(ot,R,Q),ft===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const lt=y.opaque,J=y.transmissive;if(S.setupLights(),Q.isArrayCamera){const Tt=Q.cameras;if(J.length>0)for(let zt=0,Bt=Tt.length;zt<Bt;zt++){const wt=Tt[zt];ds(lt,J,R,wt)}Et&&Kt.render(R);for(let zt=0,Bt=Tt.length;zt<Bt;zt++){const wt=Tt[zt];Nl(y,R,wt,wt.viewport)}}else J.length>0&&ds(lt,J,R,Q),Et&&Kt.render(R),Nl(y,R,Q);q!==null&&P===0&&(oe.updateMultisampleRenderTarget(q),oe.updateRenderTargetMipmap(q)),R.isScene===!0&&R.onAfterRender(N,R,Q),Pt.resetDefaultState(),D=-1,w=null,z.pop(),z.length>0?(S=z[z.length-1],ft===!0&&Ct.setGlobalState(N.clippingPlanes,S.state.camera)):S=null,B.pop(),B.length>0?y=B[B.length-1]:y=null};function xo(R,Q,ot,lt){if(R.visible===!1)return;if(R.layers.test(Q.layers)){if(R.isGroup)ot=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Q);else if(R.isLight)S.pushLight(R),R.castShadow&&S.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||F.intersectsSprite(R)){lt&&Ut.setFromMatrixPosition(R.matrixWorld).applyMatrix4(rt);const zt=it.update(R),Bt=R.material;Bt.visible&&y.push(R,zt,Bt,ot,Ut.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||F.intersectsObject(R))){const zt=it.update(R),Bt=R.material;if(lt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ut.copy(R.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),Ut.copy(zt.boundingSphere.center)),Ut.applyMatrix4(R.matrixWorld).applyMatrix4(rt)),Array.isArray(Bt)){const wt=zt.groups;for(let Xt=0,ee=wt.length;Xt<ee;Xt++){const $t=wt[Xt],ve=Bt[$t.materialIndex];ve&&ve.visible&&y.push(R,zt,ve,ot,Ut.z,$t)}}else Bt.visible&&y.push(R,zt,Bt,ot,Ut.z,null)}}const Tt=R.children;for(let zt=0,Bt=Tt.length;zt<Bt;zt++)xo(Tt[zt],Q,ot,lt)}function Nl(R,Q,ot,lt){const J=R.opaque,Tt=R.transmissive,zt=R.transparent;S.setupLightsView(ot),ft===!0&&Ct.setGlobalState(N.clippingPlanes,ot),lt&&Lt.viewport(H.copy(lt)),J.length>0&&ia(J,Q,ot),Tt.length>0&&ia(Tt,Q,ot),zt.length>0&&ia(zt,Q,ot),Lt.buffers.depth.setTest(!0),Lt.buffers.depth.setMask(!0),Lt.buffers.color.setMask(!0),Lt.setPolygonOffset(!1)}function ds(R,Q,ot,lt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;S.state.transmissionRenderTarget[lt.id]===void 0&&(S.state.transmissionRenderTarget[lt.id]=new Ks(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?wl:ea,minFilter:Ws,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ue.workingColorSpace}));const Tt=S.state.transmissionRenderTarget[lt.id],zt=lt.viewport||H;Tt.setSize(zt.z*N.transmissionResolutionScale,zt.w*N.transmissionResolutionScale);const Bt=N.getRenderTarget(),wt=N.getActiveCubeFace(),Xt=N.getActiveMipmapLevel();N.setRenderTarget(Tt),N.getClearColor(ht),ut=N.getClearAlpha(),ut<1&&N.setClearColor(16777215,.5),N.clear(),Et&&Kt.render(ot);const ee=N.toneMapping;N.toneMapping=us;const $t=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),S.setupLightsView(lt),ft===!0&&Ct.setGlobalState(N.clippingPlanes,lt),ia(R,ot,lt),oe.updateMultisampleRenderTarget(Tt),oe.updateRenderTargetMipmap(Tt),se.has("WEBGL_multisampled_render_to_texture")===!1){let ve=!1;for(let ze=0,$e=Q.length;ze<$e;ze++){const Le=Q[ze],we=Le.object,te=Le.geometry,Oe=Le.material,ge=Le.group;if(Oe.side===Ta&&we.layers.test(lt.layers)){const gn=Oe.side;Oe.side=Kn,Oe.needsUpdate=!0,ps(we,ot,lt,te,Oe,ge),Oe.side=gn,Oe.needsUpdate=!0,ve=!0}}ve===!0&&(oe.updateMultisampleRenderTarget(Tt),oe.updateRenderTargetMipmap(Tt))}N.setRenderTarget(Bt,wt,Xt),N.setClearColor(ht,ut),$t!==void 0&&(lt.viewport=$t),N.toneMapping=ee}function ia(R,Q,ot){const lt=Q.isScene===!0?Q.overrideMaterial:null;for(let J=0,Tt=R.length;J<Tt;J++){const zt=R[J],Bt=zt.object,wt=zt.geometry,Xt=zt.group;let ee=zt.material;ee.allowOverride===!0&&lt!==null&&(ee=lt),Bt.layers.test(ot.layers)&&ps(Bt,Q,ot,wt,ee,Xt)}}function ps(R,Q,ot,lt,J,Tt){R.onBeforeRender(N,Q,ot,lt,J,Tt),R.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),J.onBeforeRender(N,Q,ot,lt,R,Tt),J.transparent===!0&&J.side===Ta&&J.forceSinglePass===!1?(J.side=Kn,J.needsUpdate=!0,N.renderBufferDirect(ot,Q,lt,J,R,Tt),J.side=fs,J.needsUpdate=!0,N.renderBufferDirect(ot,Q,lt,J,R,Tt),J.side=Ta):N.renderBufferDirect(ot,Q,lt,J,R,Tt),R.onAfterRender(N,Q,ot,lt,J,Tt)}function ci(R,Q,ot){Q.isScene!==!0&&(Q=Rt);const lt=Ft.get(R),J=S.state.lights,Tt=S.state.shadowsArray,zt=J.state.version,Bt=mt.getParameters(R,J.state,Tt,Q,ot),wt=mt.getProgramCacheKey(Bt);let Xt=lt.programs;lt.environment=R.isMeshStandardMaterial?Q.environment:null,lt.fog=Q.fog,lt.envMap=(R.isMeshStandardMaterial?Ze:qe).get(R.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&R.envMap===null?Q.environmentRotation:R.envMapRotation,Xt===void 0&&(R.addEventListener("dispose",_t),Xt=new Map,lt.programs=Xt);let ee=Xt.get(wt);if(ee!==void 0){if(lt.currentProgram===ee&&lt.lightsStateVersion===zt)return Ra(R,Bt),ee}else Bt.uniforms=mt.getUniforms(R),R.onBeforeCompile(Bt,N),ee=mt.acquireProgram(Bt,wt),Xt.set(wt,ee),lt.uniforms=Bt.uniforms;const $t=lt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&($t.clippingPlanes=Ct.uniform),Ra(R,Bt),lt.needsLights=Ll(R),lt.lightsStateVersion=zt,lt.needsLights&&($t.ambientLightColor.value=J.state.ambient,$t.lightProbe.value=J.state.probe,$t.directionalLights.value=J.state.directional,$t.directionalLightShadows.value=J.state.directionalShadow,$t.spotLights.value=J.state.spot,$t.spotLightShadows.value=J.state.spotShadow,$t.rectAreaLights.value=J.state.rectArea,$t.ltc_1.value=J.state.rectAreaLTC1,$t.ltc_2.value=J.state.rectAreaLTC2,$t.pointLights.value=J.state.point,$t.pointLightShadows.value=J.state.pointShadow,$t.hemisphereLights.value=J.state.hemi,$t.directionalShadowMap.value=J.state.directionalShadowMap,$t.directionalShadowMatrix.value=J.state.directionalShadowMatrix,$t.spotShadowMap.value=J.state.spotShadowMap,$t.spotLightMatrix.value=J.state.spotLightMatrix,$t.spotLightMap.value=J.state.spotLightMap,$t.pointShadowMap.value=J.state.pointShadowMap,$t.pointShadowMatrix.value=J.state.pointShadowMatrix),lt.currentProgram=ee,lt.uniformsList=null,ee}function ms(R){if(R.uniformsList===null){const Q=R.currentProgram.getUniforms();R.uniformsList=Nc.seqWithValue(Q.seq,R.uniforms)}return R.uniformsList}function Ra(R,Q){const ot=Ft.get(R);ot.outputColorSpace=Q.outputColorSpace,ot.batching=Q.batching,ot.batchingColor=Q.batchingColor,ot.instancing=Q.instancing,ot.instancingColor=Q.instancingColor,ot.instancingMorph=Q.instancingMorph,ot.skinning=Q.skinning,ot.morphTargets=Q.morphTargets,ot.morphNormals=Q.morphNormals,ot.morphColors=Q.morphColors,ot.morphTargetsCount=Q.morphTargetsCount,ot.numClippingPlanes=Q.numClippingPlanes,ot.numIntersection=Q.numClipIntersection,ot.vertexAlphas=Q.vertexAlphas,ot.vertexTangents=Q.vertexTangents,ot.toneMapping=Q.toneMapping}function Ul(R,Q,ot,lt,J){Q.isScene!==!0&&(Q=Rt),oe.resetTextureUnits();const Tt=Q.fog,zt=lt.isMeshStandardMaterial?Q.environment:null,Bt=q===null?N.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:mo,wt=(lt.isMeshStandardMaterial?Ze:qe).get(lt.envMap||zt),Xt=lt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,ee=!!ot.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),$t=!!ot.morphAttributes.position,ve=!!ot.morphAttributes.normal,ze=!!ot.morphAttributes.color;let $e=us;lt.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&($e=N.toneMapping);const Le=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,we=Le!==void 0?Le.length:0,te=Ft.get(lt),Oe=S.state.lights;if(ft===!0&&(tt===!0||R!==w)){const an=R===w&&lt.id===D;Ct.setState(lt,R,an)}let ge=!1;lt.version===te.__version?(te.needsLights&&te.lightsStateVersion!==Oe.state.version||te.outputColorSpace!==Bt||J.isBatchedMesh&&te.batching===!1||!J.isBatchedMesh&&te.batching===!0||J.isBatchedMesh&&te.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&te.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&te.instancing===!1||!J.isInstancedMesh&&te.instancing===!0||J.isSkinnedMesh&&te.skinning===!1||!J.isSkinnedMesh&&te.skinning===!0||J.isInstancedMesh&&te.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&te.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&te.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&te.instancingMorph===!1&&J.morphTexture!==null||te.envMap!==wt||lt.fog===!0&&te.fog!==Tt||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==Ct.numPlanes||te.numIntersection!==Ct.numIntersection)||te.vertexAlphas!==Xt||te.vertexTangents!==ee||te.morphTargets!==$t||te.morphNormals!==ve||te.morphColors!==ze||te.toneMapping!==$e||te.morphTargetsCount!==we)&&(ge=!0):(ge=!0,te.__version=lt.version);let gn=te.currentProgram;ge===!0&&(gn=ci(lt,Q,J));let Jn=!1,De=!1,Ca=!1;const Ke=gn.getUniforms(),Bn=te.uniforms;if(Lt.useProgram(gn.program)&&(Jn=!0,De=!0,Ca=!0),lt.id!==D&&(D=lt.id,De=!0),Jn||w!==R){Lt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ke.setValue(I,"projectionMatrix",R.projectionMatrix),Ke.setValue(I,"viewMatrix",R.matrixWorldInverse);const Un=Ke.map.cameraPosition;Un!==void 0&&Un.setValue(I,Mt.setFromMatrixPosition(R.matrixWorld)),Qt.logarithmicDepthBuffer&&Ke.setValue(I,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&Ke.setValue(I,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,De=!0,Ca=!0)}if(J.isSkinnedMesh){Ke.setOptional(I,J,"bindMatrix"),Ke.setOptional(I,J,"bindMatrixInverse");const an=J.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),Ke.setValue(I,"boneTexture",an.boneTexture,oe))}J.isBatchedMesh&&(Ke.setOptional(I,J,"batchingTexture"),Ke.setValue(I,"batchingTexture",J._matricesTexture,oe),Ke.setOptional(I,J,"batchingIdTexture"),Ke.setValue(I,"batchingIdTexture",J._indirectTexture,oe),Ke.setOptional(I,J,"batchingColorTexture"),J._colorsTexture!==null&&Ke.setValue(I,"batchingColorTexture",J._colorsTexture,oe));const un=ot.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&bt.update(J,ot,gn),(De||te.receiveShadow!==J.receiveShadow)&&(te.receiveShadow=J.receiveShadow,Ke.setValue(I,"receiveShadow",J.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(Bn.envMap.value=wt,Bn.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&Q.environment!==null&&(Bn.envMapIntensity.value=Q.environmentIntensity),De&&(Ke.setValue(I,"toneMappingExposure",N.toneMappingExposure),te.needsLights&&Gc(Bn,Ca),Tt&&lt.fog===!0&&xt.refreshFogUniforms(Bn,Tt),xt.refreshMaterialUniforms(Bn,lt,Y,O,S.state.transmissionRenderTarget[R.id]),Nc.upload(I,ms(te),Bn,oe)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(Nc.upload(I,ms(te),Bn,oe),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&Ke.setValue(I,"center",J.center),Ke.setValue(I,"modelViewMatrix",J.modelViewMatrix),Ke.setValue(I,"normalMatrix",J.normalMatrix),Ke.setValue(I,"modelMatrix",J.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const an=lt.uniformsGroups;for(let Un=0,tr=an.length;Un<tr;Un++){const Bi=an[Un];fe.update(Bi,gn),fe.bind(Bi,gn)}}return gn}function Gc(R,Q){R.ambientLightColor.needsUpdate=Q,R.lightProbe.needsUpdate=Q,R.directionalLights.needsUpdate=Q,R.directionalLightShadows.needsUpdate=Q,R.pointLights.needsUpdate=Q,R.pointLightShadows.needsUpdate=Q,R.spotLights.needsUpdate=Q,R.spotLightShadows.needsUpdate=Q,R.rectAreaLights.needsUpdate=Q,R.hemisphereLights.needsUpdate=Q}function Ll(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(R,Q,ot){const lt=Ft.get(R);lt.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),Ft.get(R.texture).__webglTexture=Q,Ft.get(R.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:ot,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Q){const ot=Ft.get(R);ot.__webglFramebuffer=Q,ot.__useDefaultFramebuffer=Q===void 0};const So=I.createFramebuffer();this.setRenderTarget=function(R,Q=0,ot=0){q=R,V=Q,P=ot;let lt=!0,J=null,Tt=!1,zt=!1;if(R){const wt=Ft.get(R);if(wt.__useDefaultFramebuffer!==void 0)Lt.bindFramebuffer(I.FRAMEBUFFER,null),lt=!1;else if(wt.__webglFramebuffer===void 0)oe.setupRenderTarget(R);else if(wt.__hasExternalTextures)oe.rebindTextures(R,Ft.get(R.texture).__webglTexture,Ft.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const $t=R.depthTexture;if(wt.__boundDepthTexture!==$t){if($t!==null&&Ft.has($t)&&(R.width!==$t.image.width||R.height!==$t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(R)}}const Xt=R.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(zt=!0);const ee=Ft.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ee[Q])?J=ee[Q][ot]:J=ee[Q],Tt=!0):R.samples>0&&oe.useMultisampledRTT(R)===!1?J=Ft.get(R).__webglMultisampledFramebuffer:Array.isArray(ee)?J=ee[ot]:J=ee,H.copy(R.viewport),nt.copy(R.scissor),ct=R.scissorTest}else H.copy(Gt).multiplyScalar(Y).floor(),nt.copy(re).multiplyScalar(Y).floor(),ct=Re;if(ot!==0&&(J=So),Lt.bindFramebuffer(I.FRAMEBUFFER,J)&&lt&&Lt.drawBuffers(R,J),Lt.viewport(H),Lt.scissor(nt),Lt.setScissorTest(ct),Tt){const wt=Ft.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+Q,wt.__webglTexture,ot)}else if(zt){const wt=Q;for(let Xt=0;Xt<R.textures.length;Xt++){const ee=Ft.get(R.textures[Xt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Xt,ee.__webglTexture,ot,wt)}}else if(R!==null&&ot!==0){const wt=Ft.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,wt.__webglTexture,ot)}D=-1},this.readRenderTargetPixels=function(R,Q,ot,lt,J,Tt,zt,Bt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Ft.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&zt!==void 0&&(wt=wt[zt]),wt){Lt.bindFramebuffer(I.FRAMEBUFFER,wt);try{const Xt=R.textures[Bt],ee=Xt.format,$t=Xt.type;if(!Qt.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qt.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=R.width-lt&&ot>=0&&ot<=R.height-J&&(R.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Bt),I.readPixels(Q,ot,lt,J,Zt.convert(ee),Zt.convert($t),Tt))}finally{const Xt=q!==null?Ft.get(q).__webglFramebuffer:null;Lt.bindFramebuffer(I.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(R,Q,ot,lt,J,Tt,zt,Bt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Ft.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&zt!==void 0&&(wt=wt[zt]),wt)if(Q>=0&&Q<=R.width-lt&&ot>=0&&ot<=R.height-J){Lt.bindFramebuffer(I.FRAMEBUFFER,wt);const Xt=R.textures[Bt],ee=Xt.format,$t=Xt.type;if(!Qt.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qt.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ve=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ve),I.bufferData(I.PIXEL_PACK_BUFFER,Tt.byteLength,I.STREAM_READ),R.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Bt),I.readPixels(Q,ot,lt,J,Zt.convert(ee),Zt.convert($t),0);const ze=q!==null?Ft.get(q).__webglFramebuffer:null;Lt.bindFramebuffer(I.FRAMEBUFFER,ze);const $e=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await rT(I,$e,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ve),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Tt),I.deleteBuffer(ve),I.deleteSync($e),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Q=null,ot=0){const lt=Math.pow(2,-ot),J=Math.floor(R.image.width*lt),Tt=Math.floor(R.image.height*lt),zt=Q!==null?Q.x:0,Bt=Q!==null?Q.y:0;oe.setTexture2D(R,0),I.copyTexSubImage2D(I.TEXTURE_2D,ot,0,0,zt,Bt,J,Tt),Lt.unbindTexture()};const gs=I.createFramebuffer(),Vc=I.createFramebuffer();this.copyTextureToTexture=function(R,Q,ot=null,lt=null,J=0,Tt=null){Tt===null&&(J!==0?(Cl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=J,J=0):Tt=0);let zt,Bt,wt,Xt,ee,$t,ve,ze,$e;const Le=R.isCompressedTexture?R.mipmaps[Tt]:R.image;if(ot!==null)zt=ot.max.x-ot.min.x,Bt=ot.max.y-ot.min.y,wt=ot.isBox3?ot.max.z-ot.min.z:1,Xt=ot.min.x,ee=ot.min.y,$t=ot.isBox3?ot.min.z:0;else{const un=Math.pow(2,-J);zt=Math.floor(Le.width*un),Bt=Math.floor(Le.height*un),R.isDataArrayTexture?wt=Le.depth:R.isData3DTexture?wt=Math.floor(Le.depth*un):wt=1,Xt=0,ee=0,$t=0}lt!==null?(ve=lt.x,ze=lt.y,$e=lt.z):(ve=0,ze=0,$e=0);const we=Zt.convert(Q.format),te=Zt.convert(Q.type);let Oe;Q.isData3DTexture?(oe.setTexture3D(Q,0),Oe=I.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(oe.setTexture2DArray(Q,0),Oe=I.TEXTURE_2D_ARRAY):(oe.setTexture2D(Q,0),Oe=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,Q.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,Q.unpackAlignment);const ge=I.getParameter(I.UNPACK_ROW_LENGTH),gn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Jn=I.getParameter(I.UNPACK_SKIP_PIXELS),De=I.getParameter(I.UNPACK_SKIP_ROWS),Ca=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Le.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Le.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Xt),I.pixelStorei(I.UNPACK_SKIP_ROWS,ee),I.pixelStorei(I.UNPACK_SKIP_IMAGES,$t);const Ke=R.isDataArrayTexture||R.isData3DTexture,Bn=Q.isDataArrayTexture||Q.isData3DTexture;if(R.isDepthTexture){const un=Ft.get(R),an=Ft.get(Q),Un=Ft.get(un.__renderTarget),tr=Ft.get(an.__renderTarget);Lt.bindFramebuffer(I.READ_FRAMEBUFFER,Un.__webglFramebuffer),Lt.bindFramebuffer(I.DRAW_FRAMEBUFFER,tr.__webglFramebuffer);for(let Bi=0;Bi<wt;Bi++)Ke&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ft.get(R).__webglTexture,J,$t+Bi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ft.get(Q).__webglTexture,Tt,$e+Bi)),I.blitFramebuffer(Xt,ee,zt,Bt,ve,ze,zt,Bt,I.DEPTH_BUFFER_BIT,I.NEAREST);Lt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(J!==0||R.isRenderTargetTexture||Ft.has(R)){const un=Ft.get(R),an=Ft.get(Q);Lt.bindFramebuffer(I.READ_FRAMEBUFFER,gs),Lt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Vc);for(let Un=0;Un<wt;Un++)Ke?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,un.__webglTexture,J,$t+Un):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,un.__webglTexture,J),Bn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,an.__webglTexture,Tt,$e+Un):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,an.__webglTexture,Tt),J!==0?I.blitFramebuffer(Xt,ee,zt,Bt,ve,ze,zt,Bt,I.COLOR_BUFFER_BIT,I.NEAREST):Bn?I.copyTexSubImage3D(Oe,Tt,ve,ze,$e+Un,Xt,ee,zt,Bt):I.copyTexSubImage2D(Oe,Tt,ve,ze,Xt,ee,zt,Bt);Lt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Bn?R.isDataTexture||R.isData3DTexture?I.texSubImage3D(Oe,Tt,ve,ze,$e,zt,Bt,wt,we,te,Le.data):Q.isCompressedArrayTexture?I.compressedTexSubImage3D(Oe,Tt,ve,ze,$e,zt,Bt,wt,we,Le.data):I.texSubImage3D(Oe,Tt,ve,ze,$e,zt,Bt,wt,we,te,Le):R.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Tt,ve,ze,zt,Bt,we,te,Le.data):R.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Tt,ve,ze,Le.width,Le.height,we,Le.data):I.texSubImage2D(I.TEXTURE_2D,Tt,ve,ze,zt,Bt,we,te,Le);I.pixelStorei(I.UNPACK_ROW_LENGTH,ge),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,gn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Jn),I.pixelStorei(I.UNPACK_SKIP_ROWS,De),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ca),Tt===0&&Q.generateMipmaps&&I.generateMipmap(Oe),Lt.unbindTexture()},this.initRenderTarget=function(R){Ft.get(R).__webglFramebuffer===void 0&&oe.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?oe.setTextureCube(R,0):R.isData3DTexture?oe.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?oe.setTexture2DArray(R,0):oe.setTexture2D(R,0),Lt.unbindTexture()},this.resetState=function(){V=0,P=0,q=null,Lt.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ta}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ue._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ue._getUnpackColorSpace()}}const ro=new Qn(0,0,0,"YXZ"),oo=new at,OC={type:"change"},PC={type:"lock"},zC={type:"unlock"},zx=.002,Ix=Math.PI/2;class IC extends QT{constructor(e,i=null){super(e,i),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=BC.bind(this),this._onPointerlockChange=FC.bind(this),this._onPointerlockError=HC.bind(this),this.domElement!==null&&this.connect(this.domElement)}connect(e){super.connect(e),this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(e){if(this.enabled===!1)return;const i=this.object;oo.setFromMatrixColumn(i.matrix,0),oo.crossVectors(i.up,oo),i.position.addScaledVector(oo,e)}moveRight(e){if(this.enabled===!1)return;const i=this.object;oo.setFromMatrixColumn(i.matrix,0),i.position.addScaledVector(oo,e)}lock(e=!1){this.domElement.requestPointerLock({unadjustedMovement:e})}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function BC(o){if(this.enabled===!1||this.isLocked===!1)return;const e=this.object;ro.setFromQuaternion(e.quaternion),ro.y-=o.movementX*zx*this.pointerSpeed,ro.x-=o.movementY*zx*this.pointerSpeed,ro.x=Math.max(Ix-this.maxPolarAngle,Math.min(Ix-this.minPolarAngle,ro.x)),e.quaternion.setFromEuler(ro),this.dispatchEvent(OC)}function FC(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(PC),this.isLocked=!0):(this.dispatchEvent(zC),this.isLocked=!1)}function HC(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}const yl=1.8,ip=1.6,Bx=20,GC={fists:"Punhos",carbine:"Carabina",shotgun:"Escopeta",smg:"Submetralhadora",sniper:"Rifle de precisão"},VC={scout:8368233,forest:2972199,ocean:2980506,ember:11557437};class kC{container;client;userId;setHud;scene;camera;renderer;controls;raycaster;keys=new Set;touchMove={x:0,y:0};pointerLocked=!1;inputSequence=0;lastInputTime=0;animationFrame=null;lastFrameTime=0;obstacles=[];remotePlayers=new Map;localMesh=null;localWeapon=null;localName=null;lootMeshes=new Map;buildMeshes=new Map;mySnapshot=null;matchStarted=!1;constructor(e,i,s,l,f){this.container=e,this.client=i,this.userId=l,this.setHud=f,this.scene=new NT,this.scene.background=new Me(1317914),this.scene.fog=new lm(1317914,.018),this.camera=new Mi(70,e.clientWidth/e.clientHeight||16/9,.1,200),this.camera.position.set(0,ip,0),this.renderer=new Px({antialias:!0,alpha:!0}),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.container.appendChild(this.renderer.domElement),this.controls=new IC(this.camera,document.body),this.raycaster=new ZT;const h=new YT(16777215,.5);this.scene.add(h);const d=new qT(16777215,1.2);d.position.set(50,80,40),d.castShadow=!0,d.shadow.camera.left=-90,d.shadow.camera.right=90,d.shadow.camera.top=90,d.shadow.camera.bottom=-90,d.shadow.mapSize.width=2048,d.shadow.mapSize.height=2048,this.scene.add(d);const _=new KT(160,40,2771520,1317914);_.position.y=.01,this.scene.add(_),this.addGroundDecoration(),window.addEventListener("resize",this.onResize),document.addEventListener("keydown",this.onKeyDown),document.addEventListener("keyup",this.onKeyUp),document.addEventListener("pointerlockchange",this.onPointerLockChange),document.addEventListener("pointerlockerror",()=>this.requestPointerLock()),document.addEventListener("mousemove",this.onMouseMove),this.renderer.domElement.addEventListener("click",()=>this.requestPointerLock()),this.renderer.domElement.addEventListener("mousedown",m=>{this.pointerLocked&&m.button===0&&this.fire()}),this.renderer.domElement.addEventListener("contextmenu",m=>m.preventDefault()),this.client.subscribe(m=>this.onMessage(m)),this.client.onStatus(m=>this.setHud({...this.hud(),connected:m})),this.matchStarted=!0,this.applyStart(s),this.animate()}hud(){const e=this.mySnapshot;return{hp:e?e.hp:100,ammo:e?e.ammo:0,reserve:e?e.reserve:0,weapon:e?GC[e.activeWeapon]:"Punhos",kits:e?e.kits:0,walls:e?e.walls:0,alive:this.mySnapshot&&this.mySnapshot.alive?1:0,zone:78,zoneText:"45 s",kills:e?e.kills:0,phase:e?e.phase:"drop",connected:!0}}onMessage(e){e.type==="match.snapshot"?this.applySnapshot(e.snapshot):e.type==="match.shot"?this.playShot(e.shot):e.type==="match.end"?this.matchStarted=!1:e.type==="match.notice"&&this.showNotice(e.message)}applyStart(e){this.scene.userData={roomCode:e.roomCode,mode:e.mode,ranked:e.ranked,seed:e.seed},this.clearWorld(),e.players.forEach(i=>this.addPlayerMesh(i,i.id===this.userId))}applySnapshot(e){const i=e.players.find(s=>s.id===this.userId);i&&(this.mySnapshot=i,this.syncLocalMesh(i),this.setHud({...this.hud(),zone:e.zone.radius,zoneText:String(Math.max(0,e.zone.timeLeft||0)),connected:!0})),e.players.forEach(s=>{s.id!==this.userId&&this.addOrUpdateRemote(s)}),this.cleanupPlayers(e.players.map(s=>s.id)),this.updateLoot(e.loot),this.updateBuilds(e.builds)}addPlayerMesh(e,i){const s=new Ml;s.position.set(e.x,e.y,e.z),s.rotation.y=e.yaw;const l=new zn(new Oi(.68,yl,.68),new ao({color:VC[e.skin],roughness:.8}));l.position.y=yl/2,l.castShadow=!0,l.receiveShadow=!0,s.add(l);const f=new zn(new Oi(.5,.5,.5),new ao({color:15389889,roughness:.6}));f.position.y=yl-.28,s.add(f);const h=document.createElement("canvas");h.width=256,h.height=64;const d=h.getContext("2d");d.fillStyle="rgba(20, 28, 26, 0.75)",d.fillRect(0,0,256,64),d.fillStyle="#fff",d.font="bold 40px sans-serif",d.textAlign="center",d.fillText(e.name,128,44);const _=new GT(h),m=new LT(new oS({map:_,depthWrite:!1}));if(m.scale.set(2.6,.65,1),m.position.set(0,yl+.5,0),s.add(m),i){this.localMesh=s,this.localName=m;const v=this.createWeaponMesh(e.activeWeapon,e.gun);v&&(v.position.set(.45,yl-.55,-.75),v.rotation.set(-.3,.2,0),this.camera.add(v),this.localWeapon=v)}else this.remotePlayers.set(e.id,{mesh:s,nameMesh:m,target:{x:e.x,y:e.y,z:e.z,yaw:e.yaw,pitch:e.pitch},receivedAt:Date.now()});this.scene.add(s)}createWeaponMesh(e,i){if(e==="fists"||!i)return null;const s=new Oi(.14,.14,.55),l=new ao({color:2236962,metalness:.4,roughness:.4});return new zn(s,l)}addOrUpdateRemote(e){let i=this.remotePlayers.get(e.id);i||(this.addPlayerMesh(e,!1),i=this.remotePlayers.get(e.id)),i.target={x:e.x,y:e.y,z:e.z,yaw:e.yaw,pitch:e.pitch},i.receivedAt=Date.now(),i.mesh.visible=e.alive&&e.connected}cleanupPlayers(e){for(const[i,s]of this.remotePlayers)e.includes(i)||(this.scene.remove(s.mesh),this.remotePlayers.delete(i))}syncLocalMesh(e){this.localMesh&&(this.localMesh.position.set(e.x,e.y,e.z),this.localMesh.rotation.y=e.yaw,this.camera.position.set(e.x,e.y+ip,e.z),this.camera.rotation.set(e.pitch,e.yaw,0,"YXZ"),this.localWeapon&&e.activeWeapon!=="fists"&&e.gun?this.localWeapon.visible=!0:this.localWeapon&&(this.localWeapon.visible=!1),this.controls.object.position.copy(this.camera.position),this.controls.object.rotation.copy(this.camera.rotation))}updateLoot(e){const i=new Set;e.forEach(s=>{i.add(s.id);let l=this.lootMeshes.get(s.id);if(!l){const f=new Oi(.4,.4,.4),h=new ao({color:s.kind==="weapon"?7252222:s.kind==="medkit"?16739179:16697943});l=new zn(f,h),l.position.set(s.x,s.y,s.z),this.scene.add(l),this.lootMeshes.set(s.id,l)}l.visible=s.active,l.position.set(s.x,s.y,s.z)});for(const[s,l]of this.lootMeshes)i.has(s)||(this.scene.remove(l),this.lootMeshes.delete(s))}updateBuilds(e){const i=new Set;e.forEach(s=>{i.add(s.id);let l=this.buildMeshes.get(s.id);if(!l){const f=new Oi(s.w,s.h,s.d),h=new ao({color:9412262,roughness:.9});l=new zn(f,h),l.position.set(s.x,s.h/2,s.z),l.castShadow=!0,l.receiveShadow=!0,this.scene.add(l),this.buildMeshes.set(s.id,l)}l.position.set(s.x,s.h/2,s.z),l.scale.set(s.w,s.h,s.d)});for(const[s,l]of this.buildMeshes)i.has(s)||(this.scene.remove(l),this.buildMeshes.delete(s))}playShot(e){const i=new at(...e.origin),s=new at(...e.end),l=new cm({color:16729156,linewidth:2}),f=new uS(new Ii().setFromPoints([i,s]),l);this.scene.add(f),setTimeout(()=>{this.scene.remove(f)},120)}showNotice(e){const i=document.createElement("div");i.textContent=e,i.style.position="fixed",i.style.top="50%",i.style.left="50%",i.style.transform="translate(-50%, -50%)",i.style.color="#fff",i.style.background="rgba(0,0,0,0.7)",i.style.padding="10px 18px",i.style.borderRadius="8px",i.style.pointerEvents="none",i.style.fontFamily="system-ui, sans-serif",document.body.appendChild(i),setTimeout(()=>i.remove(),2200)}clearWorld(){this.remotePlayers.forEach(e=>this.scene.remove(e.mesh)),this.remotePlayers.clear(),this.lootMeshes.forEach(e=>this.scene.remove(e)),this.lootMeshes.clear(),this.buildMeshes.forEach(e=>this.scene.remove(e)),this.buildMeshes.clear()}addGroundDecoration(){const e=new Oi(1,1,1),i=new ao({color:2046515}),s=new zT(e,i,40),l=new vn;for(let f=0;f<40;f++){const h=(Math.random()-.5)*150,d=(Math.random()-.5)*150;l.position.set(h,.5,d),l.updateMatrix(),s.setMatrixAt(f,l.matrix)}s.instanceMatrix.needsUpdate=!0,this.obstacles.push(s),this.scene.add(s)}onResize=()=>{const e=this.container.clientWidth||400,i=this.container.clientHeight||300;this.camera.aspect=e/i,this.camera.updateProjectionMatrix(),this.renderer instanceof Px&&this.renderer.setSize(e,i)};pointerEuler=new Qn(0,0,0,"YXZ");requestPointerLock=()=>{this.renderer.domElement.requestPointerLock()};exitPointerLock=()=>{document.exitPointerLock()};onPointerLockChange=()=>{this.pointerLocked=!!document.pointerLockElement};onMouseMove=e=>{this.pointerLocked&&(this.pointerEuler.setFromRotationMatrix(this.camera.rotation),this.pointerEuler.y-=e.movementX*.002,this.pointerEuler.x-=e.movementY*.002,this.pointerEuler.x=Math.max(-Math.PI/2+.05,Math.min(Math.PI/2-.05,this.pointerEuler.x)),this.camera.rotation.set(this.pointerEuler.x,this.pointerEuler.y,0,"YXZ"))};onKeyDown=e=>{if(this.keys.add(e.code),e.code==="KeyR"&&this.reload(),e.code==="KeyQ"&&this.heal(),e.code==="KeyB"&&this.build(),e.code==="Digit1"&&this.client.send("match.select",{weapon:"fists"}),e.code==="Digit2"){const i=this.mySnapshot?.gun;i&&this.client.send("match.select",{weapon:i})}e.code==="Space"&&this.jump(),e.code==="KeyV"&&this.cycleCamera()};onKeyUp=e=>{this.keys.delete(e.code)};cycleCamera=()=>{};setTouchMove(e,i){this.touchMove={x:e,y:i}}jump(){this.keys.add("Space"),setTimeout(()=>this.keys.delete("Space"),120)}reload(){this.client.send("match.reload",{})}heal(){this.client.send("match.heal",{})}build(){this.client.send("match.build",{})}fire(){this.client.send("match.fire",{yaw:this.camera.rotation.y,pitch:this.camera.rotation.x})}cycleWeapon(){this.client.send("match.select",{weapon:"fists"})}dispose(){this.matchStarted=!1,this.animationFrame&&cancelAnimationFrame(this.animationFrame),window.removeEventListener("resize",this.onResize),document.removeEventListener("keydown",this.onKeyDown),document.removeEventListener("keyup",this.onKeyUp),document.removeEventListener("pointerlockchange",this.onPointerLockChange),document.removeEventListener("mousemove",this.onMouseMove),this.pointerLocked&&this.exitPointerLock(),this.client.subscribe(()=>{}),this.renderer.dispose(),this.renderer.domElement.parentNode&&this.renderer.domElement.parentNode.removeChild(this.renderer.domElement)}sendInput(){const e=Date.now();if(e-this.lastInputTime<1e3/Bx)return;this.lastInputTime=e;const i=(this.keys.has("KeyA")?-1:0)+(this.keys.has("KeyD")?1:0),s=(this.keys.has("KeyW")?-1:0)+(this.keys.has("KeyS")?1:0);this.inputSequence++,this.client.send("match.input",{moveX:i,moveZ:s,yaw:this.camera.rotation.y,pitch:this.camera.rotation.x,sprint:this.keys.has("ShiftLeft")||this.keys.has("ShiftRight"),crouch:this.keys.has("ControlLeft")||this.keys.has("ControlRight"),jump:this.keys.has("Space"),sequence:this.inputSequence})}interpolateRemotes(e){for(const i of this.remotePlayers.values()){const s=Date.now()-i.receivedAt,l=i.mesh;l.position.x+=(i.target.x-l.position.x)*Math.min(1,e*12),l.position.z+=(i.target.z-l.position.z)*Math.min(1,e*12),l.position.y+=(i.target.y-l.position.y)*Math.min(1,e*12),l.rotation.y+=(i.target.yaw-l.rotation.y)*Math.min(1,e*10),i.mesh.visible=s<2e3}}animate=()=>{this.animationFrame=requestAnimationFrame(this.animate);const e=performance.now(),i=Math.min(.05,(e-this.lastFrameTime)/1e3||.016);if(this.lastFrameTime=e,this.pointerLocked&&this.matchStarted&&this.mySnapshot?.alive)this.controls.moveRight((this.keys.has("KeyD")?1:0)-(this.keys.has("KeyA")?1:0)),this.controls.moveForward((this.keys.has("KeyW")?1:0)-(this.keys.has("KeyS")?1:0)),this.sendInput();else if(this.touchMove.x!==0||this.touchMove.y!==0){const s=6*i,l=new at(0,0,-1).applyEuler(new Qn(0,this.camera.rotation.y,0,"YXZ")),f=new at(1,0,0).applyEuler(new Qn(0,this.camera.rotation.y,0,"YXZ"));this.camera.position.addScaledVector(l,this.touchMove.y*s),this.camera.position.addScaledVector(f,this.touchMove.x*s),this.camera.position.y=ip,this.controls.object.position.copy(this.camera.position),this.sendTouchInput()}this.interpolateRemotes(i),this.renderer.render(this.scene,this.camera)};sendTouchInput(){const e=Date.now();e-this.lastInputTime<1e3/Bx||(this.lastInputTime=e,this.inputSequence++,this.client.send("match.input",{moveX:this.touchMove.x,moveZ:-this.touchMove.y,yaw:this.camera.rotation.y,pitch:this.camera.rotation.x,sprint:!1,crouch:!1,jump:!1,sequence:this.inputSequence}))}}function XC({client:o,match:e,userId:i}){const s=ce.useRef(null),l=ce.useRef(null),f=ce.useRef(null),[h,d]=ce.useState({hp:100,ammo:0,reserve:0,weapon:"Punhos",kits:0,walls:8,alive:e.players.length,zone:78,zoneText:"45 s",kills:0,phase:"drop",connected:!0}),[_,m]=ce.useState({x:0,y:0});ce.useEffect(()=>{if(!s.current)return;const x=new kC(s.current,o,e,i,d);return l.current=x,()=>{x.dispose(),l.current=null}},[o,e,i]);const v=x=>{if(!f.current||f.current.id!==x.pointerId)return;const M=x.currentTarget.getBoundingClientRect(),A=x.clientX-(M.left+M.width/2),C=x.clientY-(M.top+M.height/2),y=Math.max(1,Math.hypot(A,C)),S=M.width*.32,B=Math.min(S,y)/y,z=A*B/S,N=C*B/S;m({x:z,y:N}),l.current?.setTouchMove(z,N)},p=x=>{f.current?.id===x.pointerId&&(f.current=null,m({x:0,y:0}),l.current?.setTouchMove(0,0))};return b.jsxs("div",{className:"game-shell",children:[b.jsx("div",{ref:s,className:"game-canvas"}),b.jsxs("div",{className:"game-top",children:[b.jsxs("span",{className:"game-brand",children:["GoG ",b.jsx("small",{children:"BR"})]}),b.jsxs("span",{children:[h.alive," VIVOS"]}),b.jsxs("span",{children:["ZONA ",Math.ceil(h.zone)," m · ",h.zoneText]}),b.jsxs("span",{children:[h.kills," ELIM."]})]}),b.jsx("div",{className:"crosshair","aria-hidden":"true",children:"+"}),b.jsxs("div",{className:"game-status",children:[!h.connected&&"CONEEXÃO PERDIDA · RECONECTANDO",h.phase==="drop"&&h.connected&&"QUEDA LIVRE · Mova-se para escolher o pouso"]}),b.jsxs("div",{className:"game-bottom",children:[b.jsxs("div",{className:"hp-block",children:[b.jsxs("span",{children:["HP ",b.jsx("b",{children:h.hp})]}),b.jsx("progress",{max:100,value:h.hp})]}),b.jsxs("div",{className:"weapon-block",children:[b.jsx("b",{children:h.weapon}),b.jsxs("span",{children:[h.ammo," / ",h.reserve]}),b.jsxs("small",{children:["Q kit ×",h.kits," · B parede ×",h.walls]})]})]}),b.jsx("div",{className:"desktop-help",children:"WASD mover · Mouse mirar · Clique atirar · Espaço pular · R recarregar · Q kit · B parede · 1/2 armas · V câmera"}),b.jsxs("div",{className:"touch-controls",children:[b.jsx("div",{className:"touch-pad",onPointerDown:x=>{x.currentTarget.setPointerCapture(x.pointerId),f.current={id:x.pointerId,x:0,y:0},v(x)},onPointerMove:v,onPointerUp:p,onPointerCancel:p,children:b.jsx("i",{style:{transform:`translate(${_.x*30}px,${_.y*30}px)`}})}),b.jsxs("div",{className:"touch-actions",children:[b.jsx("button",{onPointerDown:()=>l.current?.jump(),children:"PULAR"}),b.jsx("button",{onPointerDown:()=>l.current?.reload(),children:"R"}),b.jsx("button",{className:"fire-button",onPointerDown:()=>l.current?.fire(),children:"ATIRAR"}),b.jsx("button",{onPointerDown:()=>l.current?.heal(),children:"KIT"}),b.jsx("button",{onPointerDown:()=>l.current?.build(),children:"PAREDE"}),b.jsx("button",{onPointerDown:()=>l.current?.cycleWeapon(),children:"TROCAR"})]})]})]})}function jC({result:o,userId:e,user:i,onBack:s}){const l=o.players.find(p=>p.userId===e),f=!!l?.won,h=l?.placement??0,[d,_]=ce.useState(!1);ce.useEffect(()=>{const p=setTimeout(()=>_(!0),100);return()=>clearTimeout(p)},[]),o.players.reduce((p,x)=>p+x.damage,0),o.players.reduce((p,x)=>p+x.kills,0);const m=o.players.reduce((p,x)=>x.kills>p.kills||x.kills===p.kills&&x.damage>p.damage?x:p),v=h===1?"1º lugar":h===2?"2º lugar":h===3?"3º lugar":`#${h}`;return b.jsx("div",{className:"modal-backdrop",style:{animation:"fadeIn 250ms ease-out"},children:b.jsxs("section",{className:"result-card",style:{animation:d?"slideUp 400ms cubic-bezier(0.18, 0.89, 0.32, 1.28) forwards":"none",opacity:d?1:0,transform:d?"none":"translateY(24px)"},children:[b.jsxs("div",{className:"result-header",children:[b.jsxs("p",{className:"eyebrow",style:{color:f?"#8fd694":"#6ea8fe"},children:["PARTIDA ENCERRADA · ",o.mode.toUpperCase()]}),b.jsx("h2",{className:f?"victory":"defeat",children:f?"VITÓRIA!":"DERROTA"}),b.jsx("div",{className:"placement-badge",children:v})]}),b.jsxs("div",{className:"result-stats-row",children:[b.jsxs("div",{className:"result-stat",children:[b.jsx("div",{className:"stat-value",children:l?.kills??0}),b.jsx("div",{className:"stat-label",children:"Eliminações"})]}),b.jsxs("div",{className:"result-stat",children:[b.jsx("div",{className:"stat-value",children:Math.round(l?.damage??0)}),b.jsx("div",{className:"stat-label",children:"Dano"})]}),b.jsxs("div",{className:"result-stat",children:[b.jsx("div",{className:"stat-value",children:l?.placement??0}),b.jsx("div",{className:"stat-label",children:"Colocação"})]}),o.ranked&&b.jsxs("div",{className:"result-stat rp",children:[b.jsxs("div",{className:"stat-value",style:{color:(l?.rpDelta??0)>=0?"#8fd694":"#ff6b6b"},children:[(l?.rpDelta??0)>=0?"+":"",l?.rpDelta??0]}),b.jsx("div",{className:"stat-label",children:"Pontos de Ranking"})]})]}),b.jsx("div",{className:"result-table-wrap",children:b.jsxs("table",{className:"result-table",children:[b.jsx("thead",{children:b.jsxs("tr",{children:[b.jsx("th",{children:"#"}),b.jsx("th",{children:"Jogador"}),b.jsx("th",{children:"Equipe"}),b.jsx("th",{children:"Elim."}),b.jsx("th",{children:"Dano"}),o.ranked&&b.jsx("th",{children:"PR"})]})}),b.jsx("tbody",{children:o.players.map(p=>{const x=p.userId===e,M=p.userId===m.userId;return b.jsxs("tr",{className:`result-row ${x?"mine":""} ${M?"mvp":""}`,children:[b.jsx("td",{children:p.placement}),b.jsx("td",{children:b.jsxs("div",{className:"result-player-cell",children:[b.jsx("b",{children:p.name}),x&&b.jsx("span",{className:"me-tag",children:"(você)"}),M&&b.jsx("span",{className:"mvp-tag",children:"MVP"})]})}),b.jsxs("td",{children:["Equipe ",p.team+1]}),b.jsx("td",{children:p.kills}),b.jsx("td",{children:p.damage}),o.ranked&&b.jsxs("td",{style:{color:p.rpDelta>=0?"#8fd694":"#ff6b6b"},children:[p.rpDelta>=0?"+":"",p.rpDelta]})]},p.userId)})})]})}),o.ranked&&b.jsx("div",{className:"result-note",children:b.jsx("b",{children:"Resultado ranqueado validado pelo servidor."})}),!o.ranked&&b.jsx("div",{className:"result-note",children:"Partida personalizada: estatísticas salvas, sem alteração de PR."}),b.jsx("div",{className:"result-actions",children:b.jsx("button",{className:"button primary large",onClick:s,children:"Voltar ao lobby"})})]})})}function qC(){const[o,e]=ce.useState(null),[i,s]=ce.useState(!0),[l,f]=ce.useState(null),[h,d]=ce.useState(!1),[_,m]=ce.useState(0),[v,p]=ce.useState([]),[x,M]=ce.useState([]),[A,C]=ce.useState(null),[y,S]=ce.useState(null),[B,z]=ce.useState(null),[N,X]=ce.useState(null),[V,P]=ce.useState(null),q=ce.useRef(!1);ce.useEffect(()=>{ba("/api/me").then(H=>e(H.user)).catch(()=>{}).finally(()=>s(!1))},[]),ce.useEffect(()=>{if(!N)return;const H=setTimeout(()=>X(null),4200);return()=>clearTimeout(H)},[N]),ce.useEffect(()=>{if(!o)return;const H=new dE;f(H);const nt=H.onStatus(ht=>{if(d(ht),ht&&!q.current){const ut=location.pathname.match(/^\/convite\/([A-Z0-9]{4,8})$/i);ut?.[1]&&(q.current=!0,H.send("room.join",{code:ut[1]}),history.replaceState({},"","/"))}}),ct=H.subscribe(ht=>{switch(ht.type){case"hello":e(ht.user);break;case"presence":m(ht.online),p(ht.players);break;case"room.list":M(ht.rooms);break;case"room.state":C(ht.room);break;case"room.invite":P(ht);break;case"match.start":z(null),S(ht.match);break;case"match.end":S(null),z(ht.result);break;case"notice":X({message:ht.message,level:ht.level});break;case"match.notice":X({message:ht.message,level:"info"});break}});return H.connect(),()=>{nt(),ct(),H.close(),f(null),d(!1),S(null),C(null)}},[o?.id]);const D=ce.useCallback(H=>e(H),[]),w=async()=>{l?.close(),await ba("/api/auth/logout",{method:"POST"}).catch(()=>{}),e(null),C(null),S(null),z(null),p([]),m(0)};return i?b.jsxs("div",{className:"loading-screen",children:[b.jsx("div",{className:"brand-mark",children:b.jsx("span",{children:"G"})}),b.jsx("p",{children:"Carregando a arena…"})]}):o?b.jsxs(b.Fragment,{children:[y&&l?b.jsx(XC,{client:l,match:y,userId:o.id}):l&&b.jsx(gE,{client:l,user:o,connected:h,online:_,players:v,rooms:x,room:A,onLogout:w,onUser:e}),V&&l&&!y&&b.jsxs("div",{className:"invite-card",role:"alertdialog","aria-label":"Convite para sala",children:[b.jsx("p",{className:"eyebrow",children:"CONVITE RECEBIDO"}),b.jsxs("h3",{children:[V.from.name," chamou você!"]}),b.jsxs("p",{children:[V.roomName," · ",V.mode.toUpperCase()]}),b.jsxs("div",{className:"button-row",children:[b.jsx("button",{className:"button primary",onClick:()=>{l.send("room.join",{code:V.code}),P(null)},children:"Aceitar"}),b.jsx("button",{className:"button ghost",onClick:()=>P(null),children:"Agora não"})]})]}),B&&!y&&b.jsx(jC,{result:B,userId:o.id,user:o,onBack:()=>z(null)}),N&&b.jsx("div",{className:`toast ${N.level}`,role:"status",children:N.message})]}):b.jsx(pE,{onLogin:D})}fE.createRoot(document.getElementById("root")).render(b.jsx(iE.StrictMode,{children:b.jsx(qC,{})}));
