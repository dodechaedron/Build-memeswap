(this["webpackJsonp1tronic-frontend"]=this["webpackJsonp1tronic-frontend"]||[]).push([[18],{1467:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c(29),s=c(255),i=c(3),o=c(55),l=c(771),a=c(139),b=c(351),j=c(50),d=c(301),u=c(357),x=c(51),h=c(355),O=c(35);var p=()=>{const[e,t]=Object(n.useState)(x.a.BigNumber.from(0)),{lastUpdated:c,setLastUpdated:r}=Object(h.a)();return Object(n.useEffect)((()=>{(async()=>{const e=Object(O.h)(),c=await e.latestAnswer();t(c)})()}),[c,t]),{price:e,lastUpdated:c,refresh:r}};var m=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:30;const{price:t,refresh:c}=p(),r=Object(o.b)();Object(n.useEffect)((()=>{c();const t=setInterval((()=>{c()}),1e3*e);return()=>{clearInterval(t)}}),[e,c]),Object(n.useEffect)((()=>{r(Object(b.m)(t.toJSON()))}),[t,r])},f=c(172);var g=()=>{const e=Object(n.useRef)(null),t=Object(o.b)(),{account:c}=Object(r.c)(),s=Object(l.c)(),i=Object(l.e)(),a=Object(l.m)();Object(n.useEffect)((()=>(e.current&&clearInterval(e.current),a===j.c.LIVE&&(e.current=setInterval((async()=>{const e=[s,s-1];if(t(Object(b.g)(e)),t(Object(b.f)()),c){const e=Object(f.range)(i,s+1);t(Object(b.e)({account:c,epochs:e})),t(Object(b.c)({account:c,epochs:e}))}}),1e4)),()=>{e.current&&clearInterval(e.current)})),[e,c,a,s,i,t])},v=c(4);var y=v.e.div`
  background: ${e=>{let{theme:t}=e;return t.colors.gradients.violetAlt}};
  height: calc(100vh - 64px);
  min-height: calc(100vh - 64px);
  overflow: hidden;
  position: relative;
`,w=c(767),k=c(10),S=c(77),C=c(0);const B=v.f`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,L=v.f`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,E=v.d`
  animation: ${B} 1s;
`,V=v.d`
  animation: ${L} 1s;
`,I=v.e.div`
  align-items: center;
  bottom: 72px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  left: 0;
  padding-left: 16px;
  padding-right: 16px;
  position: absolute;
  width: 100%;
  z-index: 50;

  &.popup-enter-active {
    ${E}
  }

  &.popup-enter-done {
    bottom: 72px;
  }

  &.popup-exit-done {
    bottom: -2000px;
  }

  &.popup-exit-active {
    ${V}
  }

  ${e=>{let{theme:t}=e;return t.mediaQueries.md}} {
    bottom: 16px;
    justify-content: flex-end;

    &.popup-enter-done {
      bottom: 16px;
    }
  }
`,A=v.e.div`
  align-items: center;
  background-color: ${e=>{let{theme:t}=e;return t.colors.secondary}};
  border-radius: 32px;
  color: #ffffff;
  display: flex;
  max-width: 320px;
  padding: 16px 8px;
`;var $=()=>{const[e,t]=Object(n.useState)(!1),{t:c}=Object(k.b)(),s=Object(n.useRef)(null),a=Object(n.useRef)(null),{account:j}=Object(r.c)(),d=Object(l.m)(),u=Object(l.r)(),x=Object(o.b)();return Object(n.useEffect)((()=>{let e=!1;return j&&(a.current=setInterval((async()=>{const c=await Object(S.b)({user:j.toLowerCase(),claimed:!1});if(!e){const e=c.filter((e=>e.position===e.round.position));u||t(e.length>0)}}),3e4)),()=>{clearInterval(a.current),e=!0}}),[j,a,d,t,u]),Object(n.useEffect)((()=>{u&&t(!1)}),[u,t]),Object(C.jsx)(w.a,{in:e,unmountOnExit:!0,nodeRef:s,timeout:1e3,classNames:"popup",children:Object(C.jsx)(I,{ref:s,children:Object(C.jsxs)(A,{children:[Object(C.jsx)(i.dc,{width:"64px",style:{flex:"none"},mr:"8px"}),Object(C.jsx)(i.q,{style:{flex:1},onClick:()=>{x(Object(b.l)(!0))},children:c("Collect Winnings")}),Object(C.jsx)(i.Y,{variant:"text",onClick:()=>{t(!1),clearInterval(a.current)},children:Object(C.jsx)(i.K,{color:"primary",width:"24px"})})]})})})};const N=Object(n.createContext)(void 0);var T=e=>{let{children:t}=e;const[c,r]=Object(n.useState)(null);return Object(C.jsx)(N.Provider,{value:{swiper:c,setSwiper:r,destroySwiper:()=>{c&&(c.destroy(),r(null))}},children:t})},P=c(1047),R=c(249),U=c.n(R),D=c(1048),F=c.n(D);const z=async()=>new Promise((e=>Object.defineProperty(window,"TradingView",{configurable:!0,set(t){this.tv=t,e(t)}}))),H=(e,t,c)=>{new e.widget({autosize:!0,height:"100%",symbol:"BINANCE:BNBUSDT",interval:"5",timezone:"Etc/UTC",theme:t.isDark?"dark":"light",style:"1",locale:c,toolbar_bg:"#f1f3f6",enable_publishing:!1,allow_symbol_change:!0,container_id:"tradingview_b239c"})};var M=()=>{const{currentLanguage:e}=Object(k.b)(),t=Object(v.g)();return Object(n.useEffect)((()=>{window.TradingView?H(window.TradingView,t,e.code):z().then((c=>{H(c,t,e.code)}))}),[t,e]),Object(C.jsx)(i.m,{overflow:"hidden",className:"tradingview_container",children:Object(C.jsx)("div",{id:"tradingview_b239c"})})};const Y=v.e.div`
  align-items: center;
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
`,W=v.e.div`
  position: relative;
  width: 320px;
`,q=v.e.div`
  position: absolute;
  top: -130px;
  left: 0px;
  text-align: center;
  width: 100%;
  z-index: 5;
`;var _=e=>{let{title:t,children:c}=e;return Object(C.jsx)(Y,{children:Object(C.jsxs)(W,{children:[Object(C.jsx)(q,{children:Object(C.jsx)("img",{src:"/images/decorations/hiccup-bunny.png",alt:"bunny decoration",height:"121px",width:"130px"})}),Object(C.jsx)(i.u,{children:Object(C.jsxs)(i.v,{children:[Object(C.jsx)(i.V,{mb:"24px",children:t}),c]})})]})})};var Q=()=>{const{t:e}=Object(k.b)(),t=Object(o.b)();return Object(C.jsxs)(_,{title:e("Error"),children:[Object(C.jsx)(i.Vb,{as:"p",mb:"24px",children:e("This page can\u2019t be displayed right now due to an error. Please check back soon.")}),Object(C.jsx)(i.q,{variant:"primary",width:"100%",onClick:()=>{t(Object(b.l)(!0))},children:e("Show History")})]})};var G=()=>{const{t:e}=Object(k.b)(),t=Object(o.b)();return Object(C.jsxs)(_,{title:e("Markets Paused"),children:[Object(C.jsxs)(i.m,{mb:"24px",children:[Object(C.jsx)(i.Vb,{as:"p",children:e("Prediction markets have been paused due to an error.")}),Object(C.jsx)(i.Vb,{as:"p",children:e("All open positions have been canceled.")}),Object(C.jsx)(i.Vb,{as:"p",children:e("You can reclaim any funds entered into existing positions via the History tab on this page.")})]}),Object(C.jsx)(i.q,{variant:"primary",width:"100%",onClick:()=>{t(Object(b.l)(!0))},children:e("Show History")})]})},Z=c(102),J=c(28);const K=e=>`$${Object(J.d)(e||0,3,3)}`,X=e=>e?e.toLocaleString(void 0,{minimumFractionDigits:3,maximumFractionDigits:3}):"0",ee=(e,t)=>0===e||0===t?0:e/t,te=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(!e||!e.round)return 0;const{bullAmount:c,bearAmount:n,totalAmount:r}=e.round,s=ee(r,e.position===j.a.BULL?c:n);return e.amount*s*t},ce=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(!e||!e.round)return 0;const c=te(e,t);return c-e.amount};var ne=c(30),re=c(79),se=c(82),ie=c(33);const oe=Object(v.e)(i.vb)`
  overflow: visible;
`,le=v.e.div`
  position: absolute;
  top: -116px; // line up bunny at the top of the modal
  left: 0px;
  text-align: center;
  width: 100%;
`;var ae=e=>{let{payout:t,betAmount:c,epoch:s,onDismiss:l,onSuccess:a}=e;const[j,d]=Object(n.useState)(!1),{account:u}=Object(r.c)(),{t:x}=Object(k.b)(),{toastSuccess:h,toastError:O}=Object(se.a)(),p=Object(ie.r)(),m=Object(re.f)(),f=Object(o.b)(),g=parseFloat(t),v=parseFloat(c);return Object(C.jsxs)(oe,{minWidth:"288px",position:"relative",mt:"124px",children:[Object(C.jsx)(le,{children:Object(C.jsx)("img",{src:"/images/decorations/prize-bunny.png",alt:"bunny decoration",height:"124px",width:"168px"})}),Object(C.jsxs)(i.wb,{children:[Object(C.jsx)(i.yb,{children:Object(C.jsx)(i.V,{children:x("Collect Winnings")})}),Object(C.jsx)(i.ub,{onDismiss:l})]}),Object(C.jsxs)(i.tb,{p:"24px",children:[Object(C.jsx)(i.dc,{width:"96px",mx:"auto",mb:"24px"}),Object(C.jsxs)(i.T,{alignItems:"start",justifyContent:"space-between",mb:"8px",children:[Object(C.jsx)(i.Vb,{children:x("Your position")}),Object(C.jsxs)(i.m,{style:{textAlign:"right"},children:[Object(C.jsx)(i.Vb,{children:`${c} BNB`}),Object(C.jsx)(i.Vb,{fontSize:"12px",color:"textSubtle",children:`~$${m.times(v).toFormat(2)}`})]})]}),Object(C.jsxs)(i.T,{alignItems:"start",justifyContent:"space-between",mb:"24px",children:[Object(C.jsx)(i.Vb,{children:x("Your winnings")}),Object(C.jsxs)(i.m,{style:{textAlign:"right"},children:[Object(C.jsx)(i.Vb,{children:`${t} BNB`}),Object(C.jsx)(i.Vb,{fontSize:"12px",color:"textSubtle",children:`~$${m.times(g).toFormat(2)}`})]})]}),Object(C.jsx)(i.q,{width:"100%",mb:"8px",onClick:async()=>{try{const e=await p.claim(s);d(!0);const t=await e.wait();a&&await a(),await f(Object(b.c)({account:u,epochs:[s]})),l(),d(!1),h(x("Winnings collected!"),Object(C.jsxs)(i.m,{children:[Object(C.jsx)(i.Vb,{as:"p",mb:"8px",children:x("Your prizes have been sent to your wallet")}),t.transactionHash&&Object(C.jsx)(i.fb,{href:Object(ne.e)(t.transactionHash,"transaction"),children:x("View on BscScan")})]}))}catch{O(x("Error"),x("Please try again. Confirm the transaction and make sure you are paying enough gas!"))}finally{d(!1)}},isLoading:j,endIcon:j?Object(C.jsx)(i.g,{spin:!0,color:"currentColor"}):null,children:x("Confirm")})]})]})};var be=e=>{let{payout:t,betAmount:c,epoch:n,hasClaimed:r,onSuccess:s,children:o,...l}=e;const[a]=Object(i.rc)(Object(C.jsx)(ae,{payout:t,betAmount:c,epoch:n,onSuccess:s}),!1);return Object(C.jsx)(i.q,{onClick:a,disabled:r,...l,children:o})};var je=e=>{let{epoch:t,onSuccess:c,children:r,...s}=e;const[o,l]=Object(n.useState)(!1),{t:a}=Object(k.b)(),b=Object(ie.r)(),{toastSuccess:j,toastError:d}=Object(se.a)();return Object(C.jsx)(i.q,{onClick:async()=>{const e=await b.claim(t);l(!0);(await e.wait()).status?(c&&await c(),l(!1),j(a("Position reclaimed!"))):(l(!1),d(a("Error"),a("Please try again. Confirm the transaction and make sure you are paying enough gas!")))},isLoading:o,endIcon:o?Object(C.jsx)(i.g,{spin:!0,color:"white"}):null,...s,children:r||a("Reclaim Position")})},de=c(358);const ue=e=>`$${Object(J.b)(e,3,8)}`,xe=e=>{const t=e||x.a.BigNumber.from(0);return Object(J.b)(t,4)},he=e=>e.toString().padStart(2,"0"),Oe=e=>{const{hours:t,minutes:c,seconds:n}=Object(de.a)(e),r=`${he(c)}:${he(n)}`;return t>0?`${he(t)}:${r}`:r},pe=(e,t)=>{if(!e)return x.a.FixedNumber.from(0);if(e.eq(0)||t.eq(0))return x.a.FixedNumber.from(0);const c=x.a.FixedNumber.from(e),n=x.a.FixedNumber.from(t);return c.divUnsafe(n)},me=(e,t)=>{if(!e||!t)return x.a.FixedNumber.from(0);const c=((e,t)=>{if(!e||!t)return x.a.FixedNumber.from(0);const{bullAmount:c,bearAmount:n,rewardAmount:r}=t,{amount:s,position:i}=e,o=x.a.FixedNumber.from(Object(J.a)(s)),l=pe(r,i===j.a.BULL?c:n);return o.mulUnsafe(l)})(e,t),n=x.a.FixedNumber.from(Object(J.a)(e.amount));return c.subUnsafe(n)},fe=(e,t)=>e&&t?e.sub(t):x.a.BigNumber.from(0),ge=Object(v.e)(i.T)`
  background-color: ${e=>{let{bg:t,theme:c}=e;return c.colors[t]}};
  display: inline-flex;
`,ve=e=>{let{bg:t="success",startIcon:c,children:n,onClick:r,...s}=e;const o=c||Object(C.jsx)(i.f,{color:"white"});return Object(C.jsxs)(ge,{alignItems:"center",justifyContent:"center",borderRadius:"4px",bg:t,py:"4px",px:"8px",onClick:r,style:{cursor:r?"pointer":"normal"},...s,children:[o,Object(C.jsx)(i.Vb,{textTransform:"uppercase",color:"white",ml:"4px",children:n})]})};var ye=e=>{let{betPosition:t,children:c,...n}=e;const r=t===j.a.BULL,s=r?Object(C.jsx)(i.f,{color:"white"}):Object(C.jsx)(i.c,{color:"white"});return Object(C.jsx)(ve,{bg:r?"success":"failure",startIcon:s,...n,children:c})};const we=e=>e?xe(e):"0",ke=e=>{let{children:t,...c}=e;return Object(C.jsx)(i.T,{alignItems:"center",justifyContent:"space-between",...c,children:t})},Se=e=>{let{totalAmount:t,...c}=e;const{t:n}=Object(k.b)();return Object(C.jsxs)(ke,{...c,children:[Object(C.jsxs)(i.Vb,{bold:!0,children:[n("Prize Pool"),":"]}),Object(C.jsx)(i.Vb,{bold:!0,children:`${we(t)} BNB`})]})},Ce=e=>{let{positionLabel:t,multiplier:c,amount:n,...r}=e;const{t:s}=Object(k.b)(),o=`${c.toLocaleString(void 0,{maximumFractionDigits:2})}x`;return Object(C.jsxs)(ke,{height:"18px",...r,children:[Object(C.jsxs)(i.Vb,{fontSize:"12px",textTransform:"uppercase",children:[t,":"]}),Object(C.jsxs)(i.T,{alignItems:"center",children:[Object(C.jsx)(i.Vb,{fontSize:"12px",lineHeight:"18px",bold:!0,children:s("%multiplier% Payout",{multiplier:o})}),Object(C.jsx)(i.Vb,{mx:"4px",children:"|"}),Object(C.jsx)(i.Vb,{fontSize:"12px",lineHeight:"18px",children:`${X(n)} BNB`})]})]})},Be=e=>{let{lockPrice:t,...c}=e;const{t:n}=Object(k.b)();return Object(C.jsxs)(ke,{...c,children:[Object(C.jsxs)(i.Vb,{fontSize:"14px",children:[n("Locked Price"),":"]}),Object(C.jsx)(i.Vb,{fontSize:"14px",children:ue(t)})]})},Le=Object(v.e)(i.m)`
  background: ${e=>{let{theme:t,betPosition:c,isNext:n,isLive:r,hasEntered:s}=e;return n?"linear-gradient(180deg, #53DEE9 0%, #7645D9 100%)":s||r?t.colors.secondary:c===j.a.BULL?t.colors.success:c===j.a.BEAR?t.colors.failure:t.colors.cardBorder}};
  border-radius: 8px;;
  padding: 2px;
`,Ee=v.e.div`
  background: ${e=>{let{theme:t}=e;return t.card.background}};
  border-radius: 14px;
  padding: 16px;
`,Ve=e=>{let{isNext:t=!1,hasEntered:c=!1,isLive:n=!1,children:r,...s}=e;return Object(C.jsx)(Le,{isNext:t,hasEntered:c,isLive:n,...s,children:Object(C.jsx)(Ee,{children:r})})},Ie=e=>e?X(e):"0",Ae=e=>{let{totalAmount:t,...c}=e;const{t:n}=Object(k.b)();return Object(C.jsxs)(ke,{...c,children:[Object(C.jsxs)(i.Vb,{bold:!0,children:[n("Prize Pool"),":"]}),Object(C.jsx)(i.Vb,{bold:!0,children:`${Ie(t)} BNB`})]})},$e=e=>{let{lockPrice:t,...c}=e;const{t:n}=Object(k.b)();return Object(C.jsxs)(ke,{...c,children:[Object(C.jsxs)(i.Vb,{fontSize:"14px",children:[n("Locked Price"),":"]}),Object(C.jsx)(i.Vb,{fontSize:"14px",children:K(t)})]})};var Ne=e=>{let{round:t,hasFailed:c=!1,children:n,...r}=e;const{lockPrice:s,closePrice:o,totalAmount:l}=t,a=((e,t)=>e?e.eq(t)?j.a.HOUSE:e.gt(t)?j.a.BULL:j.a.BEAR:null)(o,s),b=a===j.a.BULL,{t:d}=Object(k.b)(),u=fe(o,s);return Object(C.jsxs)(Ve,{betPosition:a,...r,children:[Object(C.jsx)(i.Vb,{color:"textSubtle",fontSize:"12px",bold:!0,textTransform:"uppercase",mb:"8px",children:d("Closed Price")}),c?Object(C.jsx)(i.Vb,{bold:!0,textTransform:"uppercase",color:"textDisabled",mb:"16px",fontSize:"24px",children:d("Canceled")}):Object(C.jsxs)(i.T,{alignItems:"center",justifyContent:"space-between",mb:"16px",children:[o?Object(C.jsx)(i.Vb,{color:b?"success":"failure",bold:!0,fontSize:"24px",children:ue(o)}):Object(C.jsx)(i.Lb,{height:"34px",my:"1px"}),Object(C.jsx)(ye,{betPosition:a,children:ue(u)})]}),s&&Object(C.jsx)(Be,{lockPrice:s}),Object(C.jsx)(Se,{totalAmount:l}),n]})};var Te=e=>{let{round:t,children:c,...n}=e;const{lockPrice:r,closePrice:s,totalAmount:o}=t,l=s>r?j.a.BULL:j.a.BEAR,a=l===j.a.BULL,{t:b}=Object(k.b)(),d=s-r;return Object(C.jsxs)(Ve,{betPosition:l,...n,children:[Object(C.jsx)(i.Vb,{color:"textSubtle",fontSize:"12px",bold:!0,textTransform:"uppercase",mb:"8px",children:b("Closed Price")}),t.failed?Object(C.jsx)(i.Vb,{bold:!0,textTransform:"uppercase",color:"textDisabled",mb:"16px",fontSize:"24px",children:b("Canceled")}):Object(C.jsxs)(i.T,{alignItems:"center",justifyContent:"space-between",mb:"16px",children:[Object(C.jsx)(i.Vb,{color:a?"success":"failure",bold:!0,fontSize:"24px",children:K(s)}),Object(C.jsx)(ye,{betPosition:l,children:K(d)})]}),r&&Object(C.jsx)($e,{lockPrice:r}),Object(C.jsx)(Ae,{totalAmount:o}),c]})};var Pe=e=>{const[t,c]=Object(n.useState)(!1),{account:s}=Object(r.c)();return Object(n.useEffect)((()=>{s&&(async()=>{const t=Object(O.u)();if(await t.claimable(e,s)){const n=await t.refundable(e,s);c(n)}else c(!1)})()}),[s,e,c]),{isRefundable:t,setIsRefundable:c}};const Re=Object(v.e)(i.m)`
  border: 2px solid ${e=>{let{theme:t}=e;return t.colors.textDisabled}};
  border-radius: 8px;;
  margin-bottom: 24px;
  padding: 16px;
`,Ue=v.e.hr`
  border: 1px solid ${e=>{let{theme:t}=e;return t.colors.cardBorder}};
`;var De=e=>{let{bet:t,result:c}=e;const{t:n}=Object(k.b)(),s=Object(o.b)(),{account:a}=Object(r.c)(),{isRefundable:d}=Pe(t.round.epoch),u=Object(re.f)(),x=!t.claimed&&t.position===t.round.position,h=Object(l.n)(),{targetRef:O,tooltip:p,tooltipVisible:m}=Object(i.tc)(Object(C.jsx)(i.Vb,{as:"p",children:n("Includes your original position and your winnings, minus the %fee% fee.",{fee:"3%"})}),{placement:"auto"}),f=c===S.a.WIN,g=f?ce(t,h):t.amount,v=g+t.amount,y=()=>{switch(c){case S.a.WIN:return"warning";case S.a.LOSE:return"textSubtle";case S.a.CANCELED:return"textDisabled";default:return"text"}};return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(i.T,{alignItems:"center",justifyContent:"space-between",mb:"8px",children:[Object(C.jsx)(i.V,{children:n("Your History")}),Object(C.jsxs)(i.T,{alignItems:"center",children:[Object(C.jsx)(i.V,{as:"h3",color:y(),textTransform:"uppercase",bold:!0,mr:"4px",children:(()=>{switch(c){case S.a.WIN:return n("Win");case S.a.LOSE:return n("Lose");case S.a.CANCELED:return n("Canceled");default:return""}})()}),(()=>{switch(c){case S.a.WIN:return Object(C.jsx)(i.Fb,{color:y()});case S.a.LOSE:case S.a.CANCELED:return Object(C.jsx)(i.k,{color:y()});default:return null}})()]})]}),Object(C.jsxs)(Re,{children:[c===S.a.WIN&&!x&&Object(C.jsx)(be,{payout:X(g),betAmount:t.amount.toString(),epoch:t.round.epoch,hasClaimed:!x,width:"100%",mb:"16px",onSuccess:async()=>{s(Object(b.i)({account:a,betId:t.id})),s(Object(b.e)({account:a,epochs:[t.round.epoch]}))},children:t.claimed?n("Already Collected"):n("Collect Winnings")}),t.claimed&&Object(C.jsx)(i.T,{justifyContent:"center",children:Object(C.jsx)(i.fb,{href:Object(ne.e)(t.claimedHash,"transaction"),mb:"16px",children:n("View on BscScan")})}),c===S.a.CANCELED&&d&&Object(C.jsx)(je,{epoch:t.round.epoch,width:"100%",mb:"16px"}),Object(C.jsxs)(i.T,{alignItems:"center",justifyContent:"space-between",mb:"16px",children:[Object(C.jsxs)(i.Vb,{children:[n("Your direction"),":"]}),Object(C.jsx)(ye,{betPosition:t.position,children:t.position===j.a.BULL?n("Up"):n("Down")})]}),Object(C.jsxs)(i.T,{alignItems:"center",justifyContent:"space-between",mb:"16px",children:[Object(C.jsx)(i.Vb,{children:n("Your position")}),Object(C.jsx)(i.Vb,{children:`${X(t.amount)} BNB`})]}),Object(C.jsxs)(i.T,{alignItems:"start",justifyContent:"space-between",children:[Object(C.jsxs)(i.Vb,{bold:!0,children:[n(f?"Your winnings":"Your Result"),":"]}),Object(C.jsxs)(i.m,{style:{textAlign:"right"},children:[Object(C.jsx)(i.Vb,{bold:!0,color:(()=>{switch(c){case S.a.WIN:return"success";case S.a.LOSE:return"failure";case S.a.CANCELED:default:return"text"}})(),children:`${f?"+":"-"}${X(g)} BNB`}),Object(C.jsx)(i.Vb,{fontSize:"12px",color:"textSubtle",children:`~$${X(u.times(g).toNumber())}`})]})]}),f&&Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(Ue,{}),Object(C.jsxs)(i.T,{alignItems:"start",justifyContent:"space-between",children:[Object(C.jsxs)(i.Vb,{fontSize:"14px",color:"textSubtle",children:[n("Amount to collect"),":"]}),Object(C.jsxs)(i.T,{justifyContent:"end",children:[Object(C.jsx)(i.Vb,{fontSize:"14px",color:"textSubtle",children:`${X(v)} BNB`}),Object(C.jsx)("span",{ref:O,children:Object(C.jsx)(i.ab,{color:"textSubtle",ml:"4px"})})]}),m&&p]})]})]})]})};const Fe=v.e.div`
  background-color: ${e=>{let{theme:t}=e;return t.colors.dropdown}};
  border-bottom: 2px solid ${e=>{let{theme:t}=e;return t.colors.cardBorder}};
  padding: 24px;
`;var ze=e=>{let{bet:t,result:c}=e;const{t:n}=Object(k.b)(),{totalAmount:r,bullAmount:s,bearAmount:o}=t.round,l=ee(r,s),a=ee(r,o);return Object(C.jsxs)(Fe,{children:[c===S.a.CANCELED&&Object(C.jsx)(i.Vb,{as:"p",color:"failure",mb:"24px",children:n("This round was automatically canceled due to an error. If you entered a position, please reclaim your funds below.")}),c!==S.a.LIVE&&Object(C.jsx)(De,{bet:t,result:c}),Object(C.jsx)(i.V,{mb:"8px",children:n("Round History")}),Object(C.jsxs)(Te,{round:t.round,mb:"24px",children:[Object(C.jsx)(Ce,{positionLabel:n("Up"),multiplier:l,amount:s}),Object(C.jsx)(Ce,{positionLabel:n("Down"),multiplier:a,amount:o})]}),Object(C.jsxs)(i.T,{alignItems:"center",justifyContent:"space-between",mb:"8px",children:[Object(C.jsx)(i.Vb,{children:n("Opening Block")}),Object(C.jsx)(i.eb,{href:Object(ne.e)(t.round.lockBlock,"block"),external:!0,children:t.round.lockBlock})]}),Object(C.jsxs)(i.T,{alignItems:"center",justifyContent:"space-between",children:[Object(C.jsx)(i.Vb,{children:n("Closing Block")}),Object(C.jsx)(i.eb,{href:Object(ne.e)(t.round.endBlock,"block"),external:!0,children:t.round.endBlock})]})]})};const He=Object(v.e)(i.T).attrs({alignItems:"center",p:"16px"})`
  background-color: ${e=>{let{theme:t}=e;return t.card.background}};
  border-bottom: 2px solid ${e=>{let{theme:t}=e;return t.colors.cardBorder}};
  cursor: pointer;
`,Me=Object(v.e)(i.m)`
  flex: 1;
`;var Ye=e=>{let{bet:t}=e;const[c,s]=Object(n.useState)(!1),{amount:a,round:d}=t,{t:u}=Object(k.b)(),x=Object(l.c)(),h=Object(l.m)(),O=Object(l.n)(),p=Object(o.b)(),{account:m}=Object(r.c)(),f=Object(S.f)(t,x),g=(e=>{switch(e){case S.a.WIN:return"success";case S.a.LOSE:return"failure";case S.a.CANCELED:return"textDisabled";default:return"text"}})(f),v=(y=f)===S.a.LOSE?"-":y===S.a.WIN?"+":"";var y;const w=d.epoch===x,B=h===j.c.LIVE&&d.epoch===x-1,L=!t.claimed&&t.position===t.round.position,E=f===S.a.WIN?ce(t,O):a;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(He,{onClick:()=>s(!c),role:"button",children:[Object(C.jsx)(i.m,{width:"48px",children:Object(C.jsxs)(i.Vb,{textAlign:"center",children:[Object(C.jsx)(i.Vb,{fontSize:"12px",color:"textSubtle",children:u("Round")}),Object(C.jsx)(i.Vb,{bold:!0,lineHeight:1,children:d.epoch.toLocaleString()})]})}),Object(C.jsx)(Me,{px:"24px",children:w?Object(C.jsxs)(i.T,{alignItems:"center",children:[Object(C.jsx)(i.jc,{color:"primary",mr:"6px",width:"24px"}),Object(C.jsx)(i.Vb,{color:"primary",bold:!0,children:u("Starting Soon")})]}):B?Object(C.jsxs)(i.T,{alignItems:"center",children:[Object(C.jsx)(i.Cb,{color:"secondary",mr:"6px",width:"24px"}),Object(C.jsx)(i.Vb,{color:"secondary",bold:!0,children:u("Live Now")})]}):Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(i.Vb,{fontSize:"12px",color:"textSubtle",children:u("Your Result")}),Object(C.jsx)(i.Vb,{bold:!0,color:g,lineHeight:1,children:f===S.a.CANCELED?u("Canceled"):`${v}${X(E)}`})]})}),f===S.a.WIN&&L&&Object(C.jsx)(be,{hasClaimed:!L,epoch:t.round.epoch,payout:X(E),onSuccess:async()=>{p(Object(b.i)({account:m,betId:t.id})),p(Object(b.e)({account:m,epochs:[t.round.epoch]}))},betAmount:t.amount.toString(),scale:"sm",mr:"8px",children:u("Collect")}),f===S.a.CANCELED&&L&&Object(C.jsx)(je,{epoch:t.round.epoch,scale:"sm",mr:"8px",children:u("Reclaim")}),!w&&!B&&Object(C.jsx)(i.Y,{variant:"text",scale:"sm",children:c?Object(C.jsx)(i.I,{}):Object(C.jsx)(i.F,{})})]}),c&&Object(C.jsx)(ze,{bet:t,result:Object(S.f)(t,x)})]})};const We=v.e.label`
  align-items: center;
  cursor: pointer;
  display: inline-flex;
  margin-right: 16px;
`,qe=Object(v.e)(i.m)`
  background: ${e=>{let{theme:t}=e;return t.colors.gradients.bubblegum}};
  flex: none;
  padding: 16px;
`,_e=v.e.div`
  width: 100%;
  & > div {
    width: 100%;
  }

  & button {
    width: 100%;
  }
`,Qe=e=>{switch(e){case j.b.COLLECTED:return!0;case j.b.UNCOLLECTED:return!1;case j.b.ALL:default:return}};let Ge;!function(e){e[e.ROUNDS=0]="ROUNDS",e[e.PNL=1]="PNL"}(Ge||(Ge={}));var Ze=e=>{let{activeTab:t,setActiveTab:c}=e;const n=Object(l.g)(),s=Object(l.j)(),{t:a}=Object(k.b)(),d=Object(o.b)(),{account:u}=Object(r.c)(),x=e=>async()=>{e!==n&&(await d(Object(b.d)({account:u,claimed:Qe(e)})),d(Object(b.k)(e)))};return Object(C.jsxs)(qe,{children:[Object(C.jsxs)(i.T,{alignItems:"center",justifyContent:"space-between",mb:"16px",children:[Object(C.jsx)(i.V,{as:"h3",size:"md",children:a("History")}),Object(C.jsx)(i.q,{onClick:()=>{d(Object(b.l)(!1))},variant:"text",endIcon:Object(C.jsx)(i.e,{color:"primary"}),px:"0",children:a("Close")})]}),Object(C.jsx)(_e,{children:Object(C.jsxs)(i.r,{activeIndex:t,scale:"sm",variant:"subtle",onItemClick:async e=>{c(e),await x(j.b.ALL)()},children:[Object(C.jsx)(i.s,{children:a("Rounds")}),Object(C.jsx)(i.s,{children:a("PNL")})]})}),t===Ge.ROUNDS&&Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(i.Vb,{color:"textSubtle",fontSize:"12px",mb:"8px",children:a("Filter")}),Object(C.jsxs)(i.T,{alignItems:"center",children:[Object(C.jsxs)(We,{children:[Object(C.jsx)(i.Ib,{scale:"sm",checked:n===j.b.ALL,disabled:s||!u,onChange:x(j.b.ALL)}),Object(C.jsx)(i.Vb,{ml:"4px",children:a("All")})]}),Object(C.jsxs)(We,{children:[Object(C.jsx)(i.Ib,{scale:"sm",checked:n===j.b.COLLECTED,disabled:s||!u,onChange:x(j.b.COLLECTED)}),Object(C.jsx)(i.Vb,{ml:"4px",children:a("Collected")})]}),Object(C.jsxs)(We,{children:[Object(C.jsx)(i.Ib,{scale:"sm",checked:n===j.b.UNCOLLECTED,disabled:s||!u,onChange:x(j.b.UNCOLLECTED)}),Object(C.jsx)(i.Vb,{ml:"4px",children:a("Uncollected")})]})]})]})]})};var Je=e=>{let{hasBetHistory:t,bets:c}=e;const{t:n}=Object(k.b)();return t?Object(C.jsx)(C.Fragment,{children:Object(f.orderBy)(c,["round.epoch"],["desc"]).map((e=>Object(C.jsx)(Ye,{bet:e},e.id)))}):Object(C.jsxs)(i.m,{p:"24px",children:[Object(C.jsx)(i.V,{size:"lg",textAlign:"center",mb:"8px",children:n("No prediction history available")}),Object(C.jsx)(i.Vb,{as:"p",textAlign:"center",children:n("If you are sure you should see history here, make sure you\u2019re connected to the correct wallet and try again.")})]})};const Ke=v.f`
  from {
    stroke-dasharray: 0, 339.292
  }
  to {
    stroke-dasharray: ${e=>{let{length:t}=e;return t}} 339.292;
  }
`,Xe=v.f`
  from {
    stroke-dashoffset: 0
  }
  to {
    stroke-dashoffset: ${e=>-e.offset};
  }
`,et=v.e.svg`
  width: 128px;
  height: 128px;
  transform: rotate(-90deg);
`,tt=v.e.circle`
  fill: none;
  stroke-width: 16;
  stroke-dasharray: ${e=>`${e.length} 339.292`};
`,ct=Object(v.e)(tt)`
  stroke: #ed4b9e;
  animation: ${Ke} 1s ease;
`,nt=Object(v.e)(tt)`
  stroke: #31d0aa;
  stroke-dashoffset: ${e=>-e.offset};
  animation: ${Ke} 1s ease, ${Xe} 1s ease;
`,rt=v.e.div`
  position: relative;
  width: 128px;
  height: 128px;
`,st=v.e.div`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,it=339.292;var ot=e=>{let{lost:t,won:c}=e;const{t:n}=Object(k.b)(),r=(100*c/(t+c)).toFixed(2),s=t/(c+t)*it,o=it-s;return Object(C.jsxs)(rt,{children:[Object(C.jsxs)(et,{viewBox:"0 0 128 128",children:[Object(C.jsx)(ct,{r:"54",cx:"64",cy:"64",length:s}),Object(C.jsx)(nt,{r:"54",cx:"64",cy:"64",length:o,offset:s})]}),Object(C.jsxs)(st,{children:[Object(C.jsx)(i.Vb,{small:!0,lineHeight:"1",children:n("Won")}),Object(C.jsxs)(i.Vb,{bold:!0,fontSize:"20px",lineHeight:"1",children:[c,"/",c+t]}),Object(C.jsxs)(i.Vb,{small:!0,lineHeight:"1",color:"textSubtle",children:[r,"%"]})]})]})};const lt={won:"success",lost:"failure",entered:"text"},at={won:"+",lost:"-",entered:""};var bt=e=>{let{type:t,summary:c,bnbBusdPrice:n}=e;const{t:r}=Object(k.b)(),s=lt[t],{rounds:o,amount:l}=c[t],a=(100*o/c.entered.rounds).toFixed(2),b=t.charAt(0).toUpperCase()+t.slice(1),j="won"===t?c[t].payout:l;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(i.Vb,{mt:"16px",bold:!0,color:"textSubtle",children:r(b)}),Object(C.jsxs)(i.T,{children:[Object(C.jsxs)(i.T,{flex:"2",flexDirection:"column",children:[Object(C.jsxs)(i.Vb,{bold:!0,fontSize:"20px",color:s,children:[o," ",r("Rounds").toLocaleLowerCase()]}),Object(C.jsx)(i.Vb,{fontSize:"12px",color:"textSubtle",children:"entered"===t?r("Total").toLocaleLowerCase():`${a}%`})]}),Object(C.jsxs)(i.T,{flex:"3",flexDirection:"column",children:[Object(C.jsx)(i.Vb,{bold:!0,fontSize:"20px",color:s,children:`${at[t]}${X(j)} BNB`}),Object(C.jsx)(i.Vb,{fontSize:"12px",color:"textSubtle",children:`~$${X(n.times(j).toNumber())}`})]})]})]})};const jt=v.e.div`
  background-color: ${e=>{let{theme:t}=e;return t.colors.backgroundDisabled}};
  height: 1px;
  margin: 24px auto;
  width: 100%;
`,dt={won:{rounds:0,amount:0,payout:0,bestRound:{id:"0",payout:0,multiplier:0}},lost:{rounds:0,amount:0},entered:{rounds:0,amount:0}};var ut=e=>{let{hasBetHistory:t,bets:c}=e;const{t:n}=Object(k.b)(),{account:s}=Object(r.c)(),a=Object(l.c)(),b=Object(re.f)(),d=((e,t)=>{const c=o.a.getState().predictions.rewardRate/100;return e.reduce(((e,n)=>{const r=Object(S.f)(n,t);if(r===S.a.WIN){const t=ce(n,c);let{bestRound:r}=e.won;if(t>r.payout){const{bullAmount:e,bearAmount:c,totalAmount:s}=n.round,i=ee(s,n.position===j.a.BULL?e:c);r={id:n.round.id,payout:t,multiplier:i}}return{won:{rounds:e.won.rounds+1,amount:e.won.amount+n.amount,payout:e.won.payout+t,bestRound:r},entered:{rounds:e.entered.rounds+1,amount:e.entered.amount+n.amount},lost:e.lost}}return r===S.a.LOSE?{lost:{rounds:e.lost.rounds+1,amount:e.lost.amount+n.amount},entered:{rounds:e.entered.rounds+1,amount:e.entered.amount+n.amount},won:e.won}:e}),dt)})(c,a),u=d.won.payout-d.lost.amount,x=u>0,h=d.entered.amount/d.entered.rounds,O=u/d.entered.rounds,p=O>0,m=0!==d.won.bestRound.payout;return t?Object(C.jsxs)(i.m,{p:"16px",children:[Object(C.jsx)(i.Vb,{bold:!0,fontSize:"24px",color:"secondary",pb:"24px",children:n("Your history")}),Object(C.jsxs)(i.T,{children:[Object(C.jsx)(ot,{lost:d.lost.rounds,won:d.won.rounds}),Object(C.jsxs)(i.T,{flexDirection:"column",justifyContent:"center",pl:"24px",children:[Object(C.jsx)(i.Vb,{bold:!0,color:"textSubtle",children:n("Net results")}),Object(C.jsx)(i.Vb,{bold:!0,fontSize:"24px",lineHeight:"1",color:x?"success":"failure",children:`${x?"+":""}${X(u)} BNB`}),Object(C.jsx)(i.Vb,{small:!0,color:"textSubtle",children:`~$${X(b.times(u).toNumber())}`})]})]}),Object(C.jsxs)(i.m,{pl:"8px",children:[Object(C.jsx)(i.Vb,{mt:"24px",bold:!0,color:"textSubtle",children:n("Average return / round")}),Object(C.jsx)(i.Vb,{bold:!0,color:p?"success":"failure",children:`${p?"+":""}${X(O)} BNB`}),Object(C.jsx)(i.Vb,{small:!0,color:"textSubtle",children:`~$${X(b.times(O).toNumber())}`}),m&&Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(i.Vb,{mt:"16px",bold:!0,color:"textSubtle",children:n("Best round: #%roundId%",{roundId:d.won.bestRound.id})}),Object(C.jsxs)(i.T,{alignItems:"flex-end",children:[Object(C.jsx)(i.Vb,{bold:!0,color:"success",children:`+${X(d.won.bestRound.payout)} BNB`}),Object(C.jsxs)(i.Vb,{ml:"4px",small:!0,color:"textSubtle",children:["(",d.won.bestRound.multiplier.toFixed(2),"x)"]})]}),Object(C.jsx)(i.Vb,{small:!0,color:"textSubtle",children:`~$${X(b.times(d.won.bestRound.payout).toNumber())}`})]}),Object(C.jsx)(i.Vb,{mt:"16px",bold:!0,color:"textSubtle",children:n("Average position entered / round")}),Object(C.jsx)(i.Vb,{bold:!0,children:`${X(h)} BNB`}),Object(C.jsx)(i.Vb,{small:!0,color:"textSubtle",children:`~$${X(b.times(h).toNumber())}`}),Object(C.jsx)(jt,{}),Object(C.jsx)(bt,{type:"won",summary:d,bnbBusdPrice:b}),Object(C.jsx)(bt,{type:"lost",summary:d,bnbBusdPrice:b}),Object(C.jsx)(bt,{type:"entered",summary:d,bnbBusdPrice:b}),Object(C.jsx)(i.T,{justifyContent:"center",mt:"24px",children:Object(C.jsx)(i.eb,{href:`${Object(ne.e)(s,"address")}#internaltx`,mb:"16px",external:!0,children:Object(C.jsxs)(i.q,{mt:"8px",width:"100%",children:[n("View Reclaimed & Won"),Object(C.jsx)(i.Bb,{color:"white",ml:"4px"})]})})})]})]}):Object(C.jsxs)(i.m,{p:"24px",children:[Object(C.jsx)(i.V,{size:"lg",textAlign:"center",mb:"8px",children:n("No prediction history available")}),Object(C.jsx)(i.Vb,{as:"p",textAlign:"center",children:n("If you are sure you should see history here, make sure you\u2019re connected to the correct wallet and try again.")})]})};const xt=v.e.div`
  background-color: ${e=>{let{theme:t}=e;return t.card.background}};
  display: flex;
  flex-direction: column;
  height: 100%;
`,ht=v.e.div`
  flex: 1;
  height: 100%;
  overflow-y: auto;
  position: relative;
`,Ot=v.e.div`
  align-items: center;
  background-color: ${e=>{let{theme:t}=e;return t.card.background}};
  display: flex;
  left: 0;
  height: 100%;
  justify-content: center;
  position: absolute;
  top: 0;
  width: 100%;
`;var pt=()=>{const{account:e}=Object(r.c)(),t=Object(o.b)(),c=Object(l.r)(),s=Object(l.j)(),a=Object(l.g)(),d=Object(l.c)(),{t:u}=Object(k.b)(),x=Object(l.f)(e),[h,O]=Object(n.useState)(Ge.ROUNDS);Object(n.useEffect)((()=>{e&&c&&t(Object(b.d)({account:e}))}),[e,d,c,t]);const p=a===j.b.UNCOLLECTED?Object(S.h)(x):x,m=p&&p.length>0;let f=null;switch(h){case Ge.PNL:f=Object(C.jsx)(ut,{hasBetHistory:m,bets:p});break;case Ge.ROUNDS:default:f=Object(C.jsx)(Je,{hasBetHistory:m,bets:p})}return e||(f=Object(C.jsxs)(i.T,{justifyContent:"center",alignItems:"center",flexDirection:"column",mt:"32px",children:[Object(C.jsx)(Z.a,{}),Object(C.jsx)(i.Vb,{mt:"8px",children:u("Connect your wallet to view your prediction history")})]})),Object(C.jsxs)(xt,{children:[Object(C.jsx)(Ze,{activeTab:h,setActiveTab:O}),Object(C.jsx)(ht,{children:s?Object(C.jsx)(Ot,{children:Object(C.jsx)(i.Nb,{size:72})}):f})]})},mt=c(1466),ft=c(1458),gt=c(1459),vt=c(1476),yt=c(1460);c(1050);const wt=e=>{let{isActive:t,...c}=e;const n=Object(v.g)().colors[t?"failure":"tertiary"];return Object(C.jsxs)(i.Qb,{height:"65px",width:"240px",viewBox:"0 0 240 65",...c,children:[Object(C.jsx)("g",{filter:"url(#filter0_i)",children:Object(C.jsx)("path",{d:"M10.0001 15.7243L10.0003 1H234L234 15.7247C234 22.4864 229.749 28.5181 223.381 30.7923L138.48 61.1141C127.823 64.9203 116.177 64.9203 105.519 61.1141L20.6188 30.7924C14.2508 28.5181 10.0001 22.4862 10.0001 15.7243Z",fill:n})}),Object(C.jsx)("defs",{children:Object(C.jsxs)("filter",{id:"filter0_i",x:"10.0001",y:"1",width:"224",height:"62.9688",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[Object(C.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),Object(C.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),Object(C.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),Object(C.jsx)("feOffset",{}),Object(C.jsx)("feGaussianBlur",{stdDeviation:"1"}),Object(C.jsx)("feComposite",{in2:"hardAlpha",operator:"arithmetic",k2:"-1",k3:"1"}),Object(C.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"}),Object(C.jsx)("feBlend",{mode:"normal",in2:"shape",result:"effect1_innerShadow"})]})})]})},kt=e=>{let{isActive:t,...c}=e;const n=Object(v.g)().colors[t?"success":"tertiary"];return Object(C.jsxs)(i.Qb,{height:"65px",width:"240px",viewBox:"0 0 240 65",...c,children:[Object(C.jsx)("g",{filter:"url(#filter0_i)",children:Object(C.jsx)("path",{d:"M10.0001 49.2757L10.0003 64H234L234 49.2753C234 42.5136 229.749 36.4819 223.381 34.2077L138.48 3.8859C127.823 0.0796983 116.177 0.0796931 105.519 3.8859L20.6188 34.2076C14.2508 36.4819 10.0001 42.5138 10.0001 49.2757Z",fill:n})}),Object(C.jsx)("defs",{children:Object(C.jsxs)("filter",{id:"filter0_i",x:"10.0001",y:"1.03125",width:"224",height:"62.9688",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[Object(C.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),Object(C.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),Object(C.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),Object(C.jsx)("feOffset",{}),Object(C.jsx)("feGaussianBlur",{stdDeviation:"1"}),Object(C.jsx)("feComposite",{in2:"hardAlpha",operator:"arithmetic",k2:"-1",k3:"1"}),Object(C.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"}),Object(C.jsx)("feBlend",{mode:"normal",in2:"shape",result:"effect1_innerShadow"})]})})]})},St=Object(v.e)(i.Tb).attrs({variant:"secondary",startIcon:Object(C.jsx)(i.D,{width:"18px"})})`
  font-weight: bold;
  text-transform: uppercase;
`;var Ct=e=>{let{amount:t}=e;const{t:c}=Object(k.b)(),{targetRef:n,tooltipVisible:r,tooltip:s}=Object(i.tc)(Object(C.jsx)("div",{style:{whiteSpace:"nowrap"},children:`${xe(t)} BNB`}),{placement:"bottom"});return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("span",{ref:n,children:[Object(C.jsx)(St,{children:c("Entered")})," "]})," ",r&&s]})};const Bt=v.e.div`
  height: 65px;
  margin: 0 auto;
  width: 240px;
`,Lt=v.e.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  left: 0;
  height: 100%;
  justify-content: center;
  position: absolute;
  top: 0;
  width: 100%;
`,Et=v.e.div`
  position: absolute;
  z-index: 10;
`,Vt=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"textSubtle";return(t,c)=>c?"textDisabled":t?"white":e};var It=e=>{let{betAmount:t,multiplier:c,hasEntered:n=!1,betPosition:r=j.a.BULL,isDisabled:s=!1,isActive:o=!1}=e;const{t:l}=Object(k.b)(),a=Vt("success")(o,s),b=Vt("failure")(o,s),d=Vt()(o,s),u=Object(C.jsx)(i.m,{children:Object(C.jsxs)(i.T,{justifyContent:"center",height:"14px",children:[Object(C.jsx)(i.Vb,{fontSize:"14px",color:d,bold:!0,lineHeight:"14x",children:void 0!==c?`${c}x`:"-"}),Object(C.jsx)(i.Vb,{fontSize:"14px",color:d,lineHeight:"14x",ml:"4px",children:l("Payout")})]})}),x=e=>n?Object(C.jsx)(Et,{style:e,children:Object(C.jsx)(Ct,{amount:t})}):null;return r===j.a.BEAR?Object(C.jsx)(i.m,{position:"relative",children:Object(C.jsxs)(Bt,{children:[Object(C.jsx)(wt,{isActive:o}),x({bottom:0,right:0}),Object(C.jsxs)(Lt,{children:[!s&&u,Object(C.jsx)(i.Vb,{bold:!0,fontSize:"20px",mb:"8px",color:b,textTransform:"uppercase",children:l("Down")})]})]})}):Object(C.jsx)(i.m,{position:"relative",children:Object(C.jsxs)(Bt,{children:[Object(C.jsx)(kt,{isActive:o}),x({top:0,left:0}),Object(C.jsxs)(Lt,{children:[Object(C.jsx)(i.Vb,{bold:!0,fontSize:"20px",lineHeight:"21px",color:a,textTransform:"uppercase",children:l("Up")}),!s&&u]})]})})};var At=Object(v.e)(i.u)`
  border-radius: 8px;;
`;const $t=(e,t)=>{switch(e){case"expired":return"textDisabled";case"next":return"white";case"live":return"secondary";case"canceled":case"calculating":return"text";default:return t}},Nt=v.e.div`
  align-items: center;
  background: ${e=>{let{theme:t,status:c}=e;return((e,t)=>{switch(t){case"calculating":return e.colors.gradients.cardHeader;case"live":return"transparent";case"canceled":return e.colors.warning;case"next":return e.colors.secondary;case"expired":case"soon":default:return e.colors.cardBorder}})(t,c)}};
  border-radius: 8px; 16px 0 0;
  display: flex;
  justify-content: space-between;
  padding: ${e=>{let{status:t}=e;return"live"===t?"16px":"8px"}};
`,Tt=v.e.div`
  justify-self: center;
`;var Pt=e=>{let{status:t,title:c,epoch:n,icon:r}=e;const s=$t(t,"text"),o="live"===t;return Object(C.jsxs)(Nt,{status:t,children:[Object(C.jsxs)(i.T,{alignItems:"center",children:[r,Object(C.jsx)(i.Vb,{color:s,bold:o,textTransform:o?"uppercase":"capitalize",lineHeight:"21px",children:c})]}),Object(C.jsx)(Tt,{children:Object(C.jsx)(i.Vb,{fontSize:o?"14px":"12px",color:$t(t,"textSubtle"),textAlign:"center",children:`#${n}`})})]})};const Rt=Object(v.e)(i.T)`
  background-color: ${e=>{let{theme:t}=e;return t.colors.secondary}};
  left: 0;
  position: absolute;
  width: 100%;
  z-index: 30;

  ${e=>{let{isBottom:t}=e;return t?"\n      border-radius: 0 0 16px 16px;\n      bottom: 0;\n    ":"\n      top: 37px; // Card header height\n    "}}
`;var Ut=e=>{let{epoch:t,payout:c,betAmount:n,isBottom:r=!1,...s}=e;const{t:o}=Object(k.b)();return Object(l.i)(t)?Object(C.jsxs)(Rt,{alignItems:"center",p:"16px",isBottom:r,...s,children:[Object(C.jsx)(i.dc,{width:"64px",style:{flex:"none"},mr:"8px"}),Object(C.jsx)(be,{payout:c,betAmount:n,epoch:t,hasClaimed:!1,width:"100%",children:o("Collect Winnings")})]}):null};var Dt=e=>{let{round:t}=e;const{t:c}=Object(k.b)(),n=Object(l.p)(),{isRefundable:r,setIsRefundable:s}=Pe(t.epoch),{epoch:o,startBlock:a}=t,b=a+n;return Object(C.jsxs)(At,{children:[Object(C.jsx)(Pt,{status:"canceled",icon:Object(C.jsx)(i.k,{mr:"4px",width:"21px"}),title:c("Canceled"),epoch:t.epoch,blockNumber:b}),Object(C.jsxs)(i.v,{p:"16px",children:[Object(C.jsx)(It,{isDisabled:!0}),Object(C.jsx)(Ve,{children:Object(C.jsxs)(i.T,{flexDirection:"column",alignItems:"center",children:[Object(C.jsx)(i.Vb,{bold:!0,color:r?"text":"textDisabled",children:c("Round Canceled")}),r&&Object(C.jsx)(je,{epoch:o,onSuccess:async()=>{s(!1)},width:"100%",my:"8px"}),Object(C.jsx)(i.fb,{href:"https://docs.pancakeswap.finance/products/prediction",external:!0,children:c("Learn More")})]})}),Object(C.jsx)(It,{betPosition:j.a.BEAR,isDisabled:!0})]})]})};const Ft=Object(v.e)(At)`
  opacity: 0.7;
  transition: opacity 300ms;

  &:hover {
    opacity: 1;
  }
`;var zt=e=>{let{round:t,betAmount:c,hasEnteredUp:n,hasEnteredDown:s,bullMultiplier:o,bearMultiplier:b}=e;const{t:d}=Object(k.b)(),{account:u}=Object(r.c)(),{initialBlock:x}=Object(a.a)(),{epoch:h,endBlock:O,lockPrice:p,closePrice:m}=t,f=m>p?j.a.BULL:j.a.BEAR,g=Object(l.a)(u,h),v=me(g,t).toUnsafeFloat().toFixed(4),y=((e,t)=>!!e.endBlock&&t>e.endBlock&&!1===e.oracleCalled)(t,x);return y?Object(C.jsx)(Dt,{round:t}):Object(C.jsxs)(i.m,{position:"relative",children:[Object(C.jsxs)(Ft,{children:[Object(C.jsx)(Pt,{status:"expired",icon:Object(C.jsx)(i.k,{mr:"4px",width:"21px",color:"textDisabled"}),title:d("Expired"),blockNumber:O,epoch:t.epoch}),Object(C.jsxs)(i.v,{p:"16px",style:{position:"relative"},children:[Object(C.jsx)(It,{betAmount:c,multiplier:o,isActive:f===j.a.BULL,hasEntered:n}),Object(C.jsx)(Ne,{round:t,hasFailed:y}),Object(C.jsx)(It,{betAmount:c,multiplier:b,betPosition:j.a.BEAR,isActive:f===j.a.BEAR,hasEntered:s})]})]}),Object(C.jsx)(Ut,{epoch:h,payout:v,betAmount:c?Object(J.b)(c,4):"0",isBottom:s})]})},Ht=c(360);var Mt=e=>{let{startBlock:t,endBlock:c,...n}=e;const{currentBlock:r}=Object(a.a)(),s=(r-t)/(c-t)*100,o=s<=100?s:100;return Object(C.jsx)(i.Gb,{primaryStep:o,...n})};var Yt=e=>{let{round:t}=e;const{t:c}=Object(k.b)(),n=Object(l.p)(),r=t.startBlock+n,{targetRef:s,tooltip:o,tooltipVisible:a}=Object(i.tc)(c("This round\u2019s closing transaction has been submitted to the blockchain, and is awaiting confirmation."),{placement:"bottom"});return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(At,{children:[Object(C.jsx)(Pt,{status:"calculating",icon:Object(C.jsx)(i.jc,{mr:"4px",width:"21px"}),title:c("Calculating"),epoch:t.epoch,blockNumber:r}),Object(C.jsxs)(i.v,{p:"16px",children:[Object(C.jsx)(It,{isDisabled:!0}),Object(C.jsx)(Ve,{children:Object(C.jsxs)(i.T,{alignItems:"center",justifyContent:"center",flexDirection:"column",children:[Object(C.jsx)(i.Nb,{size:96}),Object(C.jsxs)(i.T,{mt:"8px",ref:s,children:[Object(C.jsx)(i.cc,{children:c("Calculating")}),Object(C.jsx)(i.ab,{ml:"4px"})]})]})}),Object(C.jsx)(It,{betPosition:j.a.BEAR,isDisabled:!0})]})]}),a&&o]})};const Wt=v.e.div`
  background: linear-gradient(180deg, #53dee9 0%, #7645d9 100%);
  border-radius: 8px;;
  padding: 1px;
`,qt=Object(v.e)(At)`
  background: ${e=>{let{theme:t}=e;return t.colors.gradients.bubblegum}};
`;var _t=e=>{let{round:t,betAmount:c,hasEnteredUp:r,hasEnteredDown:s,bullMultiplier:o,bearMultiplier:d}=e;const{t:u}=Object(k.b)(),{lockPrice:x,lockBlock:h,endBlock:O,totalAmount:p}=t,{currentBlock:m}=Object(a.a)(),f=Object(l.k)(),g=x&&f.gt(x),v=g?"success":"failure",y=O+b.a,w=fe(f,x),S=parseFloat(Object(J.b)(f,3,8)),{countUp:B,update:L}=Object(Ht.useCountUp)({start:0,end:S,duration:1,decimals:3}),{targetRef:E,tooltip:V,tooltipVisible:I}=Object(i.tc)(u("Last price from Chainlink Oracle"),{placement:"bottom"}),A=Object(n.useRef)(L);return Object(n.useEffect)((()=>{A.current(S)}),[S,A]),m>y?Object(C.jsx)(Yt,{round:t}):Object(C.jsxs)(Wt,{children:[Object(C.jsxs)(qt,{children:[Object(C.jsx)(Pt,{status:"live",icon:Object(C.jsx)(i.Cb,{mr:"4px",width:"24px",color:"secondary"}),title:u("Live"),epoch:t.epoch,blockNumber:y}),Object(C.jsx)(Mt,{variant:"flat",scale:"sm",startBlock:h,endBlock:y}),Object(C.jsxs)(i.v,{p:"16px",children:[Object(C.jsx)(It,{betAmount:c,multiplier:o,hasEntered:r,isActive:g}),Object(C.jsxs)(Ve,{betPosition:g?j.a.BULL:j.a.BEAR,children:[Object(C.jsx)(i.Vb,{color:"textSubtle",fontSize:"12px",bold:!0,textTransform:"uppercase",mb:"8px",children:u("Last Price")}),Object(C.jsxs)(i.T,{alignItems:"center",justifyContent:"space-between",mb:"16px",height:"36px",children:[Object(C.jsx)("div",{ref:E,children:Object(C.jsx)(i.cc,{bold:!0,color:v,fontSize:"24px",style:{minHeight:"36px"},children:f.gt(0)?`$${B}`:Object(C.jsx)(i.Lb,{height:"36px",width:"94px"})})}),Object(C.jsx)(ye,{betPosition:g?j.a.BULL:j.a.BEAR,children:ue(w)})]}),x&&Object(C.jsx)(Be,{lockPrice:x}),Object(C.jsx)(Se,{totalAmount:p})]}),Object(C.jsx)(It,{betAmount:c,multiplier:d,betPosition:j.a.BEAR,hasEntered:s,isActive:!g})]})]}),I&&V]})};const Qt=v.e.div`
  align-items: center;
  backface-visibility: hidden;
  display: flex;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: z-index 600ms;
  width: 100%;

  & > div {
    flex: 1;
  }
`,Gt=Object(v.e)(Qt)`
  transform: rotateY(180deg);
`,Zt=v.e.div`
  height: 100%;
  position: relative;
  transform: rotateY(${e=>{let{isFlipped:t}=e;return t?180:0}}deg);
  transform-style: preserve-3d;
  transition: transform 600ms;

  ${Qt} {
    z-index: ${e=>{let{isFlipped:t}=e;return t?5:10}};
  }

  ${Gt} {
    z-index: ${e=>{let{isFlipped:t}=e;return t?10:5}};
  }
`,Jt=v.e.div`
  perspective: 1000px;
  z-index: auto;
`;var Kt=e=>{let{isFlipped:t,height:c,children:n}=e;const[r,s]=(e=>{if(2!==e.length)throw new Error("CardFlip: Two children are required");return e})(n);return Object(C.jsx)(Jt,{style:{height:c},children:Object(C.jsxs)(Zt,{isFlipped:t,children:[Object(C.jsx)(Qt,{children:r}),Object(C.jsx)(Gt,{children:s})]})})},Xt=c(98),ec=c(787);var tc=()=>{const e=Object(n.useContext)(N);if(void 0===e)throw new Error("Swiper not found");return e};var cc=Object(v.e)(i.T).attrs({alignItems:"center"})`
  flex: 1;
`;const nc=Object(Xt.parseUnits)("6","gwei"),rc=Object(Xt.parseUnits)("0.01",18),sc=[10,25,50,75],ic=e=>{const t=parseFloat(e);return Number.isNaN(t)?x.a.BigNumber.from(0):Object(Xt.parseUnits)(e)};var oc=e=>{let{position:t,togglePosition:c,onBack:s,onSuccess:o}=e;const[a,b]=Object(n.useState)(""),[d,u]=Object(n.useState)(!1),[h,O]=Object(n.useState)(null),[p,m]=Object(n.useState)(0),{account:f}=Object(r.c)(),{swiper:g}=tc(),{balance:v}=Object(ec.c)(),y=Object(l.l)(),{t:w}=Object(k.b)(),{toastError:S}=Object(se.a)(),B=Object(ie.r)(),L=Object(n.useMemo)((()=>x.a.BigNumber.from(v.toString())),[v]),E=Object(n.useMemo)((()=>L.gt(rc)?L.sub(rc):rc),[L]),V=Object(J.a)(L),I=ic(a),A=f&&I.gt(0)&&null!==h,$=e=>{if(e>0){const t=x.a.FixedNumber.from(E),c=x.a.FixedNumber.from(100),n=x.a.FixedNumber.from(e.toFixed(18)).divUnsafe(c),r=t.mulUnsafe(n);b(Object(J.c)(r))}else b("");m(e)},{key:N,disabled:T}=((e,t,c)=>(e.gt(0)?e.lte(t):t.gt(0))?e.eq(0)?{key:"Enter an amount",disabled:!0}:{key:"Confirm",disabled:e.lt(c)}:{key:"Insufficient BNB balance",disabled:!0})(I,E,y);return Object(n.useEffect)((()=>{const e=ic(a);e.gt(0)&&e.lte(E)?e.gt(0)&&e.lt(y)?O({key:"A minimum amount of %num% %token% is required",data:{num:Object(J.a)(y),token:"BNB"}}):O(null):O({key:"Insufficient BNB balance"})}),[a,E,y,O]),Object(C.jsxs)(At,{onMouseOver:()=>{g.keyboard.disable(),g.mousewheel.disable(),g.detachEvents()},onMouseOut:()=>{g.keyboard.enable(),g.mousewheel.enable(),g.attachEvents()},children:[Object(C.jsx)(i.x,{p:"16px",children:Object(C.jsxs)(i.T,{alignItems:"center",children:[Object(C.jsx)(i.Y,{variant:"text",scale:"sm",onClick:()=>{b(""),m(0),s()},mr:"8px",children:Object(C.jsx)(i.b,{width:"24px"})}),Object(C.jsx)(cc,{children:Object(C.jsx)(i.V,{scale:"md",children:w("Set Position")})}),Object(C.jsx)(ye,{betPosition:t,onClick:c,children:t===j.a.BULL?w("Up"):w("Down")})]})}),Object(C.jsxs)(i.v,{py:"16px",children:[Object(C.jsxs)(i.T,{alignItems:"center",justifyContent:"space-between",mb:"8px",children:[Object(C.jsxs)(i.Vb,{textAlign:"right",color:"textSubtle",children:[w("Commit"),":"]}),Object(C.jsxs)(i.T,{alignItems:"center",children:[Object(C.jsx)(i.j,{mr:"4px  "}),Object(C.jsx)(i.Vb,{bold:!0,textTransform:"uppercase",children:"BNB"})]})]}),Object(C.jsx)(i.h,{value:a,onUserInput:e=>{const t=ic(e);if(t.eq(0))m(0);else{const e=x.a.FixedNumber.from(t),c=x.a.FixedNumber.from(E),n=x.a.FixedNumber.from(100),r=e.divUnsafe(c).mulUnsafe(n).toUnsafeFloat();m(r>100?100:r)}b(e)},isWarning:A,inputProps:{disabled:!f||d}}),A&&Object(C.jsx)(i.Vb,{color:"failure",fontSize:"12px",mt:"4px",textAlign:"right",children:w(h.key,h.data)}),Object(C.jsx)(i.Vb,{textAlign:"right",mb:"16px",color:"textSubtle",fontSize:"12px",style:{height:"18px"},children:f&&w("Balance: %balance%",{balance:V})}),Object(C.jsx)(i.Mb,{name:"balance",min:0,max:100,value:p,onValueChanged:$,valueLabel:f?`${p.toFixed(p>0?1:0)}%`:"",step:.01,disabled:!f||d,mb:"4px",className:!f||d?"":"swiper-no-swiping"}),Object(C.jsxs)(i.T,{alignItems:"center",justifyContent:"space-between",mb:"16px",children:[sc.map((e=>Object(C.jsx)(i.q,{scale:"xs",variant:"tertiary",onClick:()=>{$(e)},disabled:!f||d,style:{flex:1},children:`${e}%`},e))),Object(C.jsx)(i.q,{scale:"xs",variant:"tertiary",onClick:()=>$(100),disabled:!f||d,children:w("Max")})]}),Object(C.jsx)(i.m,{mb:"8px",children:f?Object(C.jsx)(i.q,{width:"100%",disabled:!f||T,onClick:async()=>{const e=t===j.a.BULL?"betBull":"betBear";try{const t=await B[e]({value:I.toString(),gasPrice:nc});u(!0);const c=await t.wait();o(I.toString(),c.transactionHash)}catch{S(w("Error"),w("Please try again. Confirm the transaction and make sure you are paying enough gas!"))}finally{u(!1)}},isLoading:d,endIcon:d?Object(C.jsx)(i.g,{color:"currentColor",spin:!0}):null,children:w(N)}):Object(C.jsx)(Z.a,{width:"100%"})}),Object(C.jsx)(i.Vb,{as:"p",fontSize:"12px",lineHeight:1,color:"textSubtle",children:w("You won\u2019t be able to remove or change your position once you enter it.")})]})]})};var lc=e=>{let{round:t,betAmount:c,hasEnteredUp:s,hasEnteredDown:d,bullMultiplier:u,bearMultiplier:x}=e;const[h,O]=Object(n.useState)({isSettingPosition:!1,position:j.a.BULL}),{t:p}=Object(k.b)(),m=Object(l.h)(),{toastSuccess:f}=Object(se.a)(),{account:g}=Object(r.c)(),v=Object(o.b)(),{currentBlock:y}=Object(a.a)(),{isSettingPosition:w,position:S}=h,B=y>=t.startBlock+(m+b.a),L=S===j.a.BULL?p("Up").toUpperCase():p("Down").toUpperCase(),{targetRef:E,tooltipVisible:V,tooltip:I}=Object(i.tc)(Object(C.jsx)("div",{style:{whiteSpace:"nowrap"},children:`${xe(c)} BNB`}),{placement:"top"}),A=t.startBlock+(m+b.a),$=!s&&!d&&null===t.lockPrice,N=()=>O((e=>({...e,isSettingPosition:!1}))),T=e=>{O((t=>({...t,isSettingPosition:!0,position:e})))};return Object(C.jsxs)(Kt,{isFlipped:w,height:"404px",children:[Object(C.jsxs)(At,{children:[Object(C.jsx)(Pt,{status:"next",epoch:t.epoch,blockNumber:A,icon:Object(C.jsx)(i.Cb,{color:"white",mr:"4px",width:"21px"}),title:p("Next")}),Object(C.jsxs)(i.v,{p:"16px",children:[Object(C.jsx)(It,{betAmount:c,multiplier:u,hasEntered:s}),Object(C.jsx)(Ve,{isNext:$,isLive:!$,children:$?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(Se,{totalAmount:t.totalAmount,mb:"8px"}),Object(C.jsx)(i.q,{variant:"success",width:"100%",onClick:()=>T(j.a.BULL),mb:"4px",disabled:!$||B,children:p("Enter UP")}),Object(C.jsx)(i.q,{variant:"danger",width:"100%",onClick:()=>T(j.a.BEAR),disabled:!$||B,children:p("Enter DOWN")})]}):Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("div",{ref:E,children:Object(C.jsx)(i.q,{disabled:!0,startIcon:S===j.a.BULL?Object(C.jsx)(i.f,{color:"currentColor"}):Object(C.jsx)(i.c,{color:"currentColor"}),width:"100%",mb:"8px",children:p("%position% Entered",{position:L})})}),Object(C.jsx)(Se,{totalAmount:t.totalAmount}),V&&I]})}),Object(C.jsx)(It,{betAmount:c,multiplier:x,betPosition:j.a.BEAR,hasEntered:d})]})]}),Object(C.jsx)(oc,{onBack:N,onSuccess:async()=>{await v(Object(b.e)({account:g,epochs:[t.epoch]})),N(),f(p("Success!"),p("%position% position entered",{position:L}))},position:S,togglePosition:()=>{O((e=>({...e,position:e.position===j.a.BULL?j.a.BEAR:j.a.BULL})))}})]})},ac=c(56),bc=c(86);var jc=e=>{const t=Object(n.useRef)(null),[c,r]=Object(n.useState)(0);return Object(n.useEffect)((()=>((async()=>{const c=await bc.a.getBlockNumber();e>c&&(r((e-c)*ac.f),t.current&&clearInterval(t.current),t.current=setInterval((()=>{r((e=>(1===e&&clearInterval(t.current),e-1)))}),1e3))})(),()=>{clearInterval(t.current)})),[r,e,t]),c};var dc=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;const t=Object(l.h)(),c=Object(l.d)(),n=e*t,r=jc(c+n);return r};var uc=e=>{let{round:t}=e;const{t:c}=Object(k.b)(),n=Object(l.p)(),r=Object(l.c)(),s=t.startBlock+n,o=dc(t.epoch-r+1),a=Oe(o);return Object(C.jsxs)(At,{children:[Object(C.jsx)(Pt,{status:"soon",icon:Object(C.jsx)(i.jc,{mr:"4px",width:"21px"}),title:c("Later"),epoch:t.epoch,blockNumber:s}),Object(C.jsxs)(i.v,{p:"16px",children:[Object(C.jsx)(It,{isDisabled:!0}),Object(C.jsx)(Ve,{children:Object(C.jsxs)(i.Vb,{textAlign:"center",children:[Object(C.jsx)(i.Vb,{bold:!0,children:c("Entry starts")}),Object(C.jsx)(i.Vb,{fontSize:"24px",bold:!0,children:`~${a}`})]})}),Object(C.jsx)(It,{betPosition:j.a.BEAR,isDisabled:!0})]})]})};var xc=e=>{let{round:t}=e;const{epoch:c,lockPrice:n,closePrice:s,totalAmount:i,bullAmount:o,bearAmount:a}=t,b=Object(l.c)(),{account:d}=Object(r.c)(),u=Object(l.a)(d,c),x=!!u&&u.amount.gt(0),h=x&&u.position===j.a.BULL,O=x&&u.position===j.a.BEAR,p=pe(i,o),m=pe(i,a),f=p.toUnsafeFloat().toFixed(p.isZero()?0:2),g=m.toUnsafeFloat().toFixed(m.isZero()?0:2);return c===b&&null===n?Object(C.jsx)(lc,{round:t,hasEnteredDown:O,hasEnteredUp:h,betAmount:null===u||void 0===u?void 0:u.amount,bullMultiplier:f,bearMultiplier:g}):null===s&&c===b-1?Object(C.jsx)(_t,{betAmount:null===u||void 0===u?void 0:u.amount,hasEnteredDown:O,hasEnteredUp:h,round:t,bullMultiplier:f,bearMultiplier:g}):c>b?Object(C.jsx)(uc,{round:t}):Object(C.jsx)(zt,{round:t,hasEnteredDown:O,hasEnteredUp:h,betAmount:null===u||void 0===u?void 0:u.amount,bullMultiplier:f,bearMultiplier:g})};const hc=Object(v.e)(i.m)`
  margin-top: -24px;
  position: absolute;
  top: 50%;
  z-index: 30;

  & > svg {
    height: 48px;
    width: 48px;
  }

  ${e=>{let{theme:t}=e;return t.mediaQueries.lg}} {
    margin-top: -32px;

    & > svg {
      height: 64px;
      width: 64px;
    }
  }
`,Oc=Object(v.e)(i.Vb)`
  font-size: 16px;
  line-height: 21px;

  ${e=>{let{theme:t}=e;return t.mediaQueries.lg}} {
    font-size: 20px;
    line-height: 22px;
  }
`,pc=Object(v.e)(i.Vb)`
  height: 18px;
  justify-self: start;
  width: 70px;

  ${e=>{let{theme:t}=e;return t.mediaQueries.lg}} {
    text-align: center;
  }
`,mc=Object(v.e)(i.Vb)`
  ${e=>{let{theme:t}=e;return t.mediaQueries.lg}} {
    text-align: center;
    width: 32px;
  }
`,fc=Object(v.e)(i.u)`
  align-items: ${e=>{let{dir:t}=e;return"right"===t?"flex-end":"flex-start"}};
  border-radius: ${e=>{let{dir:t}=e;return"right"===t?"8px 8px 8px 24px":"8px 8px 24px 8px"}};
  display: flex;
  flex-direction: column;
  overflow: initial;
  padding: ${e=>{let{dir:t}=e;return"right"===t?"0 28px 0 8px":"0 8px 0 24px"}};

  ${e=>{let{theme:t}=e;return t.mediaQueries.lg}} {
    align-items: center;
    border-radius: 8px;;
    flex-direction: row;
    padding: ${e=>{let{dir:t}=e;return"right"===t?"8px 40px 8px 8px":"8px 8px 8px 40px"}};
  }
`,gc=()=>{const e=Object(l.k)(),t=parseFloat(Object(J.b)(e,3,8)),{countUp:c,update:r}=Object(Ht.useCountUp)({start:0,end:t,duration:1,decimals:3}),s=Object(n.useRef)(r);return Object(n.useEffect)((()=>{s.current(t)}),[t,s]),Object(C.jsxs)(i.m,{pl:"24px",position:"relative",display:"inline-block",children:[Object(C.jsx)(hc,{left:0,children:Object(C.jsx)(i.l,{})}),Object(C.jsxs)(fc,{dir:"left",children:[Object(C.jsx)(Oc,{bold:!0,textTransform:"uppercase",children:"BNBUSDT"}),Object(C.jsx)(pc,{fontSize:"12px",children:`$${c}`})]})]})},vc=e=>{let{interval:t,unit:c}=e;const n=dc(),r=Oe(n),{t:s}=Object(k.b)();return Object(C.jsxs)(i.m,{pr:"24px",position:"relative",children:[Object(C.jsxs)(fc,{dir:"right",children:[Object(C.jsx)(Oc,{bold:!0,color:"secondary",children:0===n?s("Closing"):r}),Object(C.jsx)(mc,{fontSize:"12px",children:`${t}${s(c)}`})]}),Object(C.jsx)(hc,{right:0,children:Object(C.jsx)(i.Db,{})})]})},yc=Object(v.e)(i.u)`
  align-items: center;
  display: none;
  justify-content: space-between;
  overflow: initial;
  position: relative;
  width: 128px;

  ${e=>{let{theme:t}=e;return t.mediaQueries.lg}} {
    display: flex;
  }
`,wc=v.e.div`
  cursor: pointer;
  left: 50%;
  margin-left: -32px;
  position: absolute;
`;var kc=()=>{const{swiper:e}=tc(),t=Object(l.c)(),c=Object(l.o)();return Object(C.jsxs)(yc,{children:[Object(C.jsx)(i.Y,{variant:"text",scale:"sm",onClick:()=>{e.slidePrev()},children:Object(C.jsx)(i.b,{color:"primary",width:"24px"})}),Object(C.jsx)(wc,{onClick:()=>{const n=c.findIndex((e=>e.epoch===t));e.slideTo(n-1),e.update()},children:Object(C.jsx)(i.o,{width:"64px"})}),Object(C.jsx)(i.Y,{variant:"text",scale:"sm",onClick:()=>{e.slideNext()},children:Object(C.jsx)(i.e,{color:"primary",width:"24px"})})]})};var Sc=()=>{const e=Object(l.j)(),t=Object(o.b)(),{account:c}=Object(r.c)();return Object(C.jsx)(i.Y,{variant:"subtle",ml:"8px",onClick:()=>{t(Object(b.l)(!0))},isLoading:e,disabled:!c,children:e?Object(C.jsx)(i.g,{spin:!0,color:"white"}):Object(C.jsx)(i.X,{width:"24px",color:"white"})})};const Cc=v.e.div`
  flex: none;
  width: auto;

  ${e=>{let{theme:t}=e;return t.mediaQueries.lg}} {
    width: 270px;
  }
`,Bc=v.e.div`
  order: 1;
  margin: 0 8px 0 0;

  ${e=>{let{theme:t}=e;return t.mediaQueries.lg}} {
    order: 2;
    margin: 0 0 0 8px;
  }
`,Lc=v.e.div`
  order: 2;

  ${e=>{let{theme:t}=e;return t.mediaQueries.lg}} {
    order: 1;
  }
`,Ec=v.e.div`
  display: none;
  order: 3;

  ${e=>{let{theme:t}=e;return t.mediaQueries.lg}} {
    display: initial;
  }
`;var Vc=()=>Object(C.jsxs)(cc,{alignItems:"center",p:"16px",children:[Object(C.jsx)(Cc,{children:Object(C.jsx)(gc,{})}),Object(C.jsx)(cc,{justifyContent:"center",children:Object(C.jsx)(kc,{})}),Object(C.jsx)(Cc,{children:Object(C.jsxs)(i.T,{alignItems:"center",justifyContent:"flex-end",children:[Object(C.jsx)(Lc,{children:Object(C.jsx)(vc,{interval:"5",unit:"m"})}),Object(C.jsx)(Bc,{children:Object(C.jsx)(i.Y,{variant:"subtle",as:"a",href:"https://docs.pancakeswap.finance/products/prediction",target:"_blank",rel:"noreferrer noopener",children:Object(C.jsx)(i.W,{width:"24px",color:"white"})})}),Object(C.jsx)(Ec,{children:Object(C.jsx)(Sc,{})})]})})]}),Ic=c(250);var Ac=()=>{const e=Object(l.c)(),t=Object(l.o)(),{account:c}=Object(r.c)(),s=Object(Ic.a)(e),{swiper:i}=tc(),a=Object(o.b)();Object(n.useEffect)((()=>{if(i&&void 0!==e&&void 0!==s&&e!==s){const c=t.findIndex((t=>t.epoch===e));i.slideTo(c-1),i.update()}}),[s,e,t,i,c,a])};mt.a.use([ft.a,gt.a]);const $c=v.e.div`
  .swiper-wrapper {
    align-items: center;
    display: flex;
  }

  .swiper-slide {
    width: 320px;
  }
`;var Nc=()=>{const{setSwiper:e}=tc(),t=Object(l.o)(),c=Math.floor(t.length/2);return Ac(),Object(C.jsxs)(i.m,{overflow:"hidden",children:[Object(C.jsx)(Vc,{}),Object(C.jsx)($c,{children:Object(C.jsx)(vt.a,{initialSlide:c,onSwiper:e,spaceBetween:16,slidesPerView:"auto",freeMode:!0,freeModeSticky:!0,centeredSlides:!0,freeModeMomentumRatio:.25,freeModeMomentumVelocityRatio:.5,mousewheel:!0,keyboard:!0,resizeObserver:!0,children:t.map((e=>Object(C.jsx)(yt.a,{children:Object(C.jsx)(xc,{round:e})},e.epoch)))})})]})};const Tc=Object(v.e)(i.q)`
  background-color: ${e=>{let{theme:t}=e;return t.card.background}};
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  bottom: 12px;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  display: none;
  left: 32px;
  position: absolute;
  z-index: 50;

  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {
    background-color: ${e=>{let{theme:t}=e;return t.card.background}};
    opacity: 1;
  }

  ${e=>{let{theme:t}=e;return t.mediaQueries.lg}} {
    display: inline-flex;
  }
`,Pc=v.e.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 12px 0;
  flex: 1;
  overflow: hidden;
`,Rc=v.e.div`
  overflow: hidden;
  position: relative;
`,Uc=v.e.div`
  flex: none;
  overflow: hidden;
  transition: width 200ms ease-in-out;
  width: ${e=>{let{isHistoryPaneOpen:t}=e;return t?"384px":0}};
`,Dc=v.e.div`
  display: none;

  ${e=>{let{theme:t}=e;return t.mediaQueries.lg}} {
    display: flex;
    height: 100%;
  }
`,Fc=v.e.div`
  align-items: center;
  display: flex;
  max-width: 100%;
  overflow-y: auto;
  overflow-x: hidden;

  & > div {
    flex: 1;
    overflow: hidden;
  }
`,zc=v.e.div`
  background: ${e=>{let{theme:t}=e;return t.colors.dropdown}};
  cursor: row-resize;
  height: 12px;
  position: relative;

  &:before {
    background-color: ${e=>{let{theme:t}=e;return t.colors.textSubtle}};
    border-radius: 8px;
    content: '';
    height: 4px;
    left: 50%;
    margin-left: -32px;
    position: absolute;
    top: 4px;
    width: 64px;
  }
`;var Hc=()=>{const e=Object(n.useRef)(),t=Object(n.useRef)(),c=Object(n.useRef)(),r=Object(l.r)(),s=Object(l.q)(),a=Object(o.b)(),{t:d}=Object(k.b)(),u=Object(l.m)();return Object(n.useEffect)((()=>{const e=U()((()=>{const{height:e}=t.current.getBoundingClientRect();a(Object(b.j)(e>100))}),50),n=Object(P.a)({dragInterval:1,snapOffset:100,onDrag:e,rowGutters:[{track:1,element:c.current}]});return()=>{n.destroy()}}),[c,t,a]),Object(C.jsxs)(C.Fragment,{children:[!s&&Object(C.jsx)(Tc,{variant:"tertiary",scale:"sm",startIcon:s?Object(C.jsx)(i.c,{}):Object(C.jsx)(i.B,{}),onClick:()=>{const t=!s;t&&(e.current.style.transition="grid-template-rows 150ms",e.current.style.gridTemplateRows="1.2fr 12px .8fr",F()((()=>{e.current.style.transition=""}),150)),a(Object(b.j)(t))},children:d(s?"Close":"Charts")}),Object(C.jsxs)(Dc,{children:[Object(C.jsxs)(Pc,{ref:e,children:[Object(C.jsxs)(Fc,{children:[u===j.c.ERROR&&Object(C.jsx)(Q,{}),u===j.c.PAUSED&&Object(C.jsx)(G,{}),u===j.c.LIVE&&Object(C.jsx)("div",{children:Object(C.jsx)(Nc,{})})]}),Object(C.jsx)(zc,{ref:c}),Object(C.jsx)(Rc,{ref:t,children:Object(C.jsx)(M,{})})]}),Object(C.jsx)(Uc,{isHistoryPaneOpen:r,children:Object(C.jsx)(pt,{})})]})]})};const Mc=v.e.div`
  flex: none;
`,Yc=v.e.div`
  flex: 1;
  text-align: center;
`,Wc=v.e.div`
  align-items: center;
  background-color: ${e=>{let{theme:t}=e;return t.card.background}};
  display: flex;
  flex: none;
  height: 64px;

  ${e=>{let{theme:t}=e;return t.mediaQueries.lg}} {
    display: none;
  }
`;var qc=()=>{const{swiper:e}=tc(),t=Object(l.r)(),c=Object(l.q)(),n=Object(l.m)(),s=((e,t)=>e?2:t?1:0)(t,c),a=Object(o.b)(),{account:d}=Object(r.c)();return Object(C.jsxs)(Wc,{children:[Object(C.jsx)(Mc,{children:Object(C.jsx)(i.Y,{variant:"text",onClick:()=>e.slidePrev(),disabled:n!==j.c.LIVE,children:Object(C.jsx)(i.b,{width:"24px",color:"primary"})})}),Object(C.jsx)(Yc,{children:Object(C.jsxs)(i.r,{activeIndex:s,scale:"sm",variant:"subtle",onItemClick:e=>{switch(e){case 2:a(Object(b.l)(!0));break;case 1:a(Object(b.j)(!0)),a(Object(b.l)(!1));break;case 0:default:a(Object(b.l)(!1)),a(Object(b.j)(!1))}},children:[Object(C.jsx)(i.s,{children:Object(C.jsx)(i.A,{color:"currentColor"})}),Object(C.jsx)(i.s,{children:Object(C.jsx)(i.B,{color:"currentColor"})}),Object(C.jsx)(i.s,{disabled:!d,children:Object(C.jsx)(i.X,{color:"currentColor"})})]})}),Object(C.jsx)(Mc,{children:Object(C.jsx)(i.Y,{variant:"text",onClick:()=>e.slideNext(),disabled:n!==j.c.LIVE,children:Object(C.jsx)(i.e,{width:"24px",color:"primary"})})})]})};const _c=v.e.div`
  flex: none;
`,Qc=v.e.div`
  flex: 1;
  height: 100%;
`;var Gc,Zc=()=>Object(C.jsxs)(i.T,{flexDirection:"column",height:"100%",children:[Object(C.jsx)(_c,{children:Object(C.jsx)(Vc,{})}),Object(C.jsx)(Qc,{children:Object(C.jsx)(M,{})})]});!function(e){e.POSITIONS="positions",e.HISTORY="history",e.CHART="chart"}(Gc||(Gc={}));const Jc=v.e.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 100%;

  ${e=>{let{theme:t}=e;return t.mediaQueries.xl}} {
    display: none;
  }
`,Kc=v.e.div`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  visibility: ${e=>{let{isVisible:t}=e;return t?"visible":"hidden"}};
`;var Xc=()=>{const e=((e,t)=>e?Gc.HISTORY:t?Gc.CHART:Gc.POSITIONS)(Object(l.r)(),Object(l.q)()),t=Object(l.m)();return Object(C.jsxs)(Jc,{children:[Object(C.jsxs)(i.m,{height:"100%",overflow:"hidden",position:"relative",children:[Object(C.jsx)(Kc,{isVisible:e===Gc.POSITIONS,children:Object(C.jsxs)(i.T,{alignItems:"center",height:"100%",children:[t===j.c.ERROR&&Object(C.jsx)(Q,{}),t===j.c.PAUSED&&Object(C.jsx)(G,{}),t===j.c.LIVE&&Object(C.jsx)(Nc,{})]})}),Object(C.jsx)(Kc,{isVisible:e===Gc.CHART,children:Object(C.jsx)(Zc,{})}),Object(C.jsx)(Kc,{isVisible:e===Gc.HISTORY,children:Object(C.jsx)(pt,{})})]}),Object(C.jsx)(qc,{})]})};const en=Object(v.e)(i.wb)`
  background: ${e=>{let{theme:t}=e;return t.colors.gradients.bubblegum}};
  padding-bottom: 24px;
  padding-top: 24px;
`;var tn=e=>{let{onSuccess:t,onDismiss:c}=e;const[r,s]=Object(n.useState)(!1),[o,l]=Object(n.useState)(!1),{t:a}=Object(k.b)();return Object(C.jsxs)(i.vb,{title:a("Welcome!"),minWidth:"320px",children:[Object(C.jsx)(en,{children:Object(C.jsx)(i.yb,{children:Object(C.jsx)(i.V,{scale:"lg",children:a("Welcome!")})})}),Object(C.jsxs)(i.tb,{p:"24px",maxWidth:"400px",children:[Object(C.jsxs)(i.m,{maxHeight:"300px",overflowY:"auto",children:[Object(C.jsx)(i.V,{as:"h3",mb:"24px",children:a("This Product is in beta.")}),Object(C.jsx)(i.Vb,{as:"p",color:"textSubtle",mb:"24px",children:a("Once you enter a position, you cannot cancel or adjust it.")}),Object(C.jsx)("label",{htmlFor:"checkbox",style:{display:"block",cursor:"pointer",marginBottom:"24px"},children:Object(C.jsxs)(i.T,{alignItems:"center",children:[Object(C.jsx)("div",{style:{flex:"none"},children:Object(C.jsx)(i.C,{id:"checkbox",scale:"sm",checked:r,onChange:()=>{s(!r)}})}),Object(C.jsx)(i.Vb,{ml:"8px",children:a("I understand that I am using this product at my own risk. Any losses incurred due to my actions are my own responsibility.")})]})}),Object(C.jsx)("label",{htmlFor:"checkbox1",style:{display:"block",cursor:"pointer",marginBottom:"24px"},children:Object(C.jsxs)(i.T,{alignItems:"center",children:[Object(C.jsx)("div",{style:{flex:"none"},children:Object(C.jsx)(i.C,{id:"checkbox1",scale:"sm",checked:o,onChange:()=>{l(!o)}})}),Object(C.jsx)(i.Vb,{ml:"8px",children:a("I understand that this product is still in beta. I am participating at my own risk")})]})})]}),Object(C.jsx)(i.q,{width:"100%",onClick:()=>{t(),c()},disabled:!r||!o,children:a("Continue")})]})]})};var cn=e=>{let{onSuccess:t,onDismiss:c}=e;const{t:n}=Object(k.b)();return Object(C.jsx)(i.vb,{title:n("Welcome!"),minWidth:"320px",children:Object(C.jsxs)(i.tb,{p:"24px",maxWidth:"400px",children:[Object(C.jsx)(i.Vb,{as:"p",mb:"16px",children:n("Charts are provided for reference only and do not reflect rounds\u2019 final outcome.")}),Object(C.jsx)(i.Vb,{as:"p",mb:"16px",children:n("Please refer to the prices shown on the cards for the final outcome.")}),Object(C.jsx)(i.q,{width:"100%",onClick:()=>{t(),c()},mb:"16px",children:n("I understand")}),Object(C.jsx)(i.T,{justifyContent:"center",alignItems:"center",children:Object(C.jsx)(i.fb,{href:"https://docs.pancakeswap.finance/products/prediction/prediction-faq#what-are-you-using-for-your-price-feed",external:!0,children:n("Learn More")})})]})})};t.default=()=>{const{isXl:e}=Object(i.qc)(),[t,c]=Object(d.a)(!1,{localStorageKey:"pancake_predictions_accepted_risk"}),[x,h]=Object(d.a)(!1,{localStorageKey:"pancake_predictions_chart"}),{account:O}=Object(r.c)(),p=Object(l.m)(),f=Object(l.q)(),v=Object(o.b)(),w=Object(a.b)(),k=e,[S]=Object(i.rc)(Object(C.jsx)(tn,{onSuccess:()=>c(!0)}),!1),[B]=Object(i.rc)(Object(C.jsx)(cn,{onSuccess:()=>h(!0)}),!1),L=Object(n.useRef)(S),E=Object(n.useRef)(B);return Object(n.useEffect)((()=>{t||L.current()}),[t,L]),Object(n.useEffect)((()=>{!x&&f&&E.current()}),[E,x,f]),Object(n.useEffect)((()=>{w>0&&v(Object(b.h)(O))}),[w,v,O]),g(),m(),p===j.c.INITIAL?Object(C.jsx)(u.a,{}):Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(s.a,{children:Object(C.jsx)("script",{src:"https://s3.tradingview.com/tv.js",type:"text/javascript",id:"tradingViewWidget"})}),Object(C.jsx)(T,{children:Object(C.jsxs)(y,{children:[k?Object(C.jsx)(Hc,{}):Object(C.jsx)(Xc,{}),Object(C.jsx)($,{})]})})]})}},771:function(e,t,c){"use strict";c.d(t,"o",(function(){return d})),c.d(t,"a",(function(){return u})),c.d(t,"i",(function(){return x})),c.d(t,"e",(function(){return h})),c.d(t,"r",(function(){return O})),c.d(t,"q",(function(){return p})),c.d(t,"c",(function(){return m})),c.d(t,"h",(function(){return f})),c.d(t,"p",(function(){return g})),c.d(t,"m",(function(){return v})),c.d(t,"g",(function(){return y})),c.d(t,"d",(function(){return w})),c.d(t,"l",(function(){return k})),c.d(t,"n",(function(){return S})),c.d(t,"j",(function(){return C})),c.d(t,"f",(function(){return B})),c.d(t,"k",(function(){return L})),c.d(t,"b",(function(){return E}));var n=c(2),r=c(29),s=c(27),i=c(51),o=c(172),l=c(55),a=c(142),b=c(356),j=c(77);const d=()=>{const e=(()=>{const e=Object(s.c)((e=>e.predictions.rounds));return Object.keys(e).reduce(((t,c)=>({...t,[c]:Object(j.l)(e[c])})),{})})();return Object(o.orderBy)(Object.values(e),["epoch"],["asc"])},u=(e,t)=>{const c=Object(s.c)((e=>e.predictions.ledgers));return c[e]&&c[e][t]?Object(j.l)(c[e][t]):null},x=e=>Object(s.c)((e=>e.predictions.claimableStatuses))[e]||!1,h=()=>Object(s.c)((e=>{const t=Object(o.minBy)(Object.values(e.predictions.rounds),"epoch");return null===t||void 0===t?void 0:t.epoch})),O=()=>Object(s.c)((e=>e.predictions.isHistoryPaneOpen)),p=()=>Object(s.c)((e=>e.predictions.isChartPaneOpen)),m=()=>Object(s.c)((e=>e.predictions.currentEpoch)),f=()=>Object(s.c)((e=>e.predictions.intervalBlocks)),g=()=>f()+Object(s.c)((e=>e.predictions.bufferBlocks)),v=()=>Object(s.c)((e=>e.predictions.status)),y=()=>Object(s.c)((e=>e.predictions.historyFilter)),w=()=>Object(s.c)((e=>e.predictions.currentRoundStartBlockNumber)),k=()=>{const e=Object(s.c)((e=>e.predictions.minBetAmount));return Object(n.useMemo)((()=>i.a.BigNumber.from(e)),[e])},S=()=>Object(s.c)((e=>e.predictions.rewardRate))/100,C=()=>Object(s.c)((e=>e.predictions.isFetchingHistory)),B=e=>{const t=Object(s.c)((e=>e.predictions.history));return t?t[e]:[]},L=()=>{const e=Object(s.c)((e=>e.predictions.lastOraclePrice));return Object(n.useMemo)((()=>i.a.BigNumber.from(e)),[e])},E=()=>{const{account:e}=Object(r.c)(),t=Object(l.b)(),{isInitialized:c,isLoading:i,data:o}=Object(s.c)((e=>e.collectibles)),j=Object.keys(o);return Object(n.useEffect)((()=>{c||t(Object(b.b)(e))}),[c,e,t]),{isInitialized:c,isLoading:i,tokenIds:o,nftsInWallet:a.b.filter((e=>j.includes(e.identifier)))}}},787:function(e,t,c){"use strict";c.d(t,"a",(function(){return d})),c.d(t,"c",(function(){return u}));var n=c(2),r=c(12),s=c.n(r),i=c(29),o=c(35),l=c(25),a=c(86),b=c(156),j=c(355);let d;!function(e){e.NOT_FETCHED="not-fetched",e.SUCCESS="success",e.FAILED="failed"}(d||(d={}));const u=()=>{const[e,t]=Object(n.useState)(l.d),{account:c}=Object(i.c)(),{lastUpdated:r,setLastUpdated:o}=Object(j.a)();return Object(n.useEffect)((()=>{c&&(async()=>{const e=await a.a.getBalance(c);t(new s.a(e.toString()))})()}),[c,r,t]),{balance:e,refresh:o}};t.b=e=>{const{NOT_FETCHED:t,SUCCESS:c,FAILED:r}=d,[a,j]=Object(n.useState)({balance:l.d,fetchStatus:t}),{account:u}=Object(i.c)(),{fastRefresh:x}=Object(b.a)();return Object(n.useEffect)((()=>{u&&(async()=>{const t=Object(o.a)(e);try{const e=await t.balanceOf(u);j({balance:new s.a(e.toString()),fetchStatus:c})}catch(n){console.error(n),j((e=>({...e,fetchStatus:r})))}})()}),[u,e,x,c,r]),a}}}]);
//# sourceMappingURL=18.f7c8635e.chunk.js.map