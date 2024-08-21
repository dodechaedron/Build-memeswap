(this["webpackJsonp1tronic-frontend"]=this["webpackJsonp1tronic-frontend"]||[]).push([[27],{1470:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return zt}));var a=r(2),i=r.n(a),n=r(57),c=r(12),s=r.n(c),l=r(29),d=r(3),o=r(6),b=r(4),j=r(371),x=r(229),p=r(79),u=r(301),h=r(10),m=r(28),O=r(368),g=r(172),f=r(424),y=r(340),v=r(359),k=r(376),w=r(372),S=r(30),C=r(0);const T=b.e.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    fill: ${e=>{let{theme:t}=e;return t.colors.primary}};
  }
`,A=e=>{let{onClick:t,expanded:r}=e;const{t:a}=Object(h.b)();return Object(C.jsxs)(T,{"aria-label":a("Hide or show expandable content"),role:"button",onClick:()=>t(),children:[Object(C.jsx)(d.Vb,{color:"primary",bold:!0,children:a(r?"Hide":"Details")}),r?Object(C.jsx)(d.I,{}):Object(C.jsx)(d.F,{})]})};A.defaultProps={expanded:!1};var $=A,q=r(56),L=r(17);var D=e=>{let{quoteTokenAddress:t,tokenAddress:r}=e;const a=Object(L.u)(),i=t?t[97]:null,n=r?r[97]:null;return`${i&&i!==a?i:"BNB"}/${n&&n!==a?n:"BNB"}`};const V=b.e.div`
  margin-top: 24px;
`,R=Object(b.e)(d.fb)`
  font-weight: 400;
`;var P=e=>{let{bscScanAddress:t,infoAddress:r,removed:a,totalValueFormatted:i,lpLabel:n,addLiquidityUrl:c}=e;const{t:s}=Object(h.b)();return Object(C.jsxs)(V,{children:[Object(C.jsxs)(d.T,{justifyContent:"space-between",children:[Object(C.jsxs)(d.Vb,{children:[s("Total Liquidity"),":"]}),i?Object(C.jsx)(d.Vb,{children:i}):Object(C.jsx)(d.Lb,{width:75,height:25})]}),!a&&Object(C.jsx)(R,{href:c,children:s("Get %symbol%",{symbol:n})}),Object(C.jsx)(R,{href:t,children:s("View Contract")}),Object(C.jsx)(R,{href:r,children:s("See Pair Info")})]})},E=r(179),F=r(235);const B=Object(b.e)(d.T)`
  svg {
    margin-right: 4px;
  }
`,N=Object(b.e)(d.Tb)`
  margin-left: 4px;
`;var z=e=>{let{lpLabel:t,multiplier:r,isCommunityFarm:a,token:i,quoteToken:n}=e;return Object(C.jsxs)(B,{justifyContent:"space-between",alignItems:"center",mb:"12px",children:[Object(C.jsx)(F.b,{variant:"inverted",primaryToken:i,secondaryToken:n,width:64,height:64}),Object(C.jsxs)(d.T,{flexDirection:"column",alignItems:"flex-end",children:[Object(C.jsx)(d.V,{mb:"4px",children:t.split(" ")[0]}),Object(C.jsxs)(d.T,{justifyContent:"center",children:[a?Object(C.jsx)(E.b,{}):Object(C.jsx)(E.d,{}),Object(C.jsx)(N,{variant:"secondary",children:r})]})]})]})},U=r(55),I=r(119),Q=r(33),M=r(102),K=r(34);const W=b.e.div`
  height: ${e=>e.size}px;
  width: ${e=>e.size}px;
`;var Y=e=>{let{size:t="md"}=e;const{spacing:r}=Object(a.useContext)(b.a);let i;switch(t){case"lg":i=r[6];break;case"sm":i=r[2];break;case"md":default:i=r[4]}return Object(C.jsx)(W,{size:i})};const G=b.e.div`
  align-items: center;
  background-color: ${e=>e.theme.colors.primaryDark}00;
  display: flex;
  margin: 0;
  padding: ${e=>e.theme.spacing[4]}px 0;
`,H=b.e.div`
  flex: 1;
`;var _=e=>{let{children:t}=e;const r=i.a.Children.toArray(t).length;return Object(C.jsx)(G,{children:i.a.Children.map(t,((e,t)=>Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(H,{children:e}),t<r-1&&Object(C.jsx)(Y,{})]})))})};const X=b.e.div`
  display: flex;
  flex-direction: column;
  background-color: ${e=>{let{theme:t}=e;return t.colors.input}};
  border-radius: 8px;;
  box-shadow: ${e=>{let{isWarning:t=!1,theme:r}=e;return t?r.shadows.warning:r.shadows.inset}};
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  padding: 8px 16px 8px 0;
  width: 100%;
`,Z=Object(b.e)(d.bb)`
  box-shadow: none;
  width: 60px;
  margin: 0 8px;
  padding: 0 8px;

  ${e=>{let{theme:t}=e;return t.mediaQueries.xs}} {
    width: 80px;
  }

  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    width: auto;
  }
`,J=Object(b.e)(d.Vb)`
  position: absolute;
  bottom: -22px;
  a {
    display: inline;
  }
`;var ee=e=>{let{max:t,symbol:r,onChange:a,onSelectMax:i,value:n,addLiquidityUrl:s,inputTitle:l,decimals:o=18}=e;const{t:b}=Object(h.b)(),j="0"===t||!t;return Object(C.jsxs)("div",{style:{position:"relative"},children:[Object(C.jsxs)(X,{isWarning:j,children:[Object(C.jsxs)(d.T,{justifyContent:"space-between",pl:"16px",children:[Object(C.jsx)(d.Vb,{fontSize:"14px",children:l}),Object(C.jsx)(d.Vb,{fontSize:"14px",children:b("Balance: %balance%",{balance:(e=>{if(j)return"0";const t=new c.BigNumber(e);return t.gt(0)&&t.lt(1e-4)?t.toLocaleString():t.toFixed(3,c.BigNumber.ROUND_DOWN)})(t)})})]}),Object(C.jsxs)(d.T,{alignItems:"flex-end",justifyContent:"space-around",children:[Object(C.jsx)(Z,{pattern:`^[0-9]*[.,]?[0-9]{0,${o}}$`,inputMode:"decimal",step:"any",min:"0",onChange:a,placeholder:"0",value:n}),Object(C.jsx)(d.q,{scale:"sm",onClick:i,mr:"8px",children:b("Max")}),Object(C.jsx)(d.Vb,{fontSize:"16px",children:r})]})]}),j&&Object(C.jsxs)(J,{fontSize:"14px",color:"failure",children:[b("No tokens to stake"),":"," ",Object(C.jsx)(d.eb,{fontSize:"14px",bold:!1,href:s,external:!0,color:"failure",children:b("Get %symbol%",{symbol:r})})]})]})},te=r(82);var re=e=>{let{max:t,onConfirm:r,onDismiss:i,tokenName:n="",addLiquidityUrl:c}=e;const[l,o]=Object(a.useState)(""),{toastSuccess:b,toastError:j}=Object(te.a)(),[x,p]=Object(a.useState)(!1),{t:u}=Object(h.b)(),O=Object(a.useMemo)((()=>Object(m.h)(t)),[t]),g=new s.a(l),f=new s.a(O),y=Object(a.useCallback)((e=>{e.currentTarget.validity.valid&&o(e.currentTarget.value.replace(/,/g,"."))}),[o]),v=Object(a.useCallback)((()=>{o(O)}),[O,o]);return Object(C.jsxs)(d.rb,{title:u("Stake LP tokens"),onDismiss:i,children:[Object(C.jsx)(ee,{value:l,onSelectMax:v,onChange:y,max:O,symbol:n,addLiquidityUrl:c,inputTitle:u("Stake")}),Object(C.jsxs)(_,{children:[Object(C.jsx)(d.q,{variant:"secondary",onClick:i,width:"100%",disabled:x,children:u("Cancel")}),Object(C.jsx)(d.q,{width:"100%",disabled:x||!g.isFinite()||g.eq(0)||g.gt(f),onClick:async()=>{p(!0);try{await r(l),b(u("Staked!"),u("Your funds have been staked in the farm")),i()}catch(e){j(u("Error"),u("Please try again. Confirm the transaction and make sure you are paying enough gas!")),console.error(e)}finally{p(!1)}},children:u(x?"Pending Confirmation":"Confirm")})]}),Object(C.jsx)(d.fb,{href:c,style:{alignSelf:"center"},children:u("Get %symbol%",{symbol:n})})]})};var ae=e=>{let{onConfirm:t,onDismiss:r,max:i,tokenName:n=""}=e;const[c,l]=Object(a.useState)(""),{toastSuccess:o,toastError:b}=Object(te.a)(),[j,x]=Object(a.useState)(!1),{t:p}=Object(h.b)(),u=Object(a.useMemo)((()=>Object(m.h)(i)),[i]),O=new s.a(c),g=new s.a(u),f=Object(a.useCallback)((e=>{e.currentTarget.validity.valid&&l(e.currentTarget.value.replace(/,/g,"."))}),[l]),y=Object(a.useCallback)((()=>{l(u)}),[u,l]);return Object(C.jsxs)(d.rb,{title:p("Unstake LP tokens"),onDismiss:r,children:[Object(C.jsx)(ee,{onSelectMax:y,onChange:f,value:c,max:u,symbol:n,inputTitle:p("Unstake")}),Object(C.jsxs)(_,{children:[Object(C.jsx)(d.q,{variant:"secondary",onClick:r,width:"100%",disabled:j,children:p("Cancel")}),Object(C.jsx)(d.q,{disabled:j||!O.isFinite()||O.eq(0)||O.gt(g),onClick:async()=>{x(!0);try{await t(c),o(p("Unstaked!"),p("Your earnings have also been harvested to your wallet")),r()}catch(e){b(p("Error"),p("Please try again. Confirm the transaction and make sure you are paying enough gas!")),console.error(e)}finally{x(!1)}},width:"100%",children:p(j?"Pending Confirmation":"Confirm")})]})]})},ie=r(174);var ne=e=>{const t=Object(Q.n)();return{onUnstake:Object(a.useCallback)((async r=>{await Object(ie.e)(t,e,r)}),[t,e])}};var ce=e=>{const t=Object(Q.n)();return{onStake:Object(a.useCallback)((async r=>{const a=await Object(ie.d)(t,e,r);console.info(a)}),[t,e])}};const se=b.e.div`
  display: flex;
  svg {
    width: 20px;
  }
`;var le=e=>{let{stakedBalance:t,tokenBalance:r,tokenName:i,pid:c,addLiquidityUrl:o}=e;const{t:b}=Object(h.b)(),{onStake:j}=ce(c),{onUnstake:x}=ne(c),u=Object(n.h)(),O=Object(U.b)(),{account:g}=Object(l.c)(),f=Object(p.c)(i),y=Object(a.useCallback)((()=>{const e=Object(m.e)(t);return e.gt(0)&&e.lt(1e-4)?Object(m.h)(t).toLocaleString():e.toFixed(3,s.a.ROUND_DOWN)}),[t]),[v]=Object(d.rc)(Object(C.jsx)(re,{max:r,onConfirm:async e=>{await j(e),O(Object(I.b)({account:g,pids:[c]}))},tokenName:i,addLiquidityUrl:o})),[k]=Object(d.rc)(Object(C.jsx)(ae,{max:t,onConfirm:async e=>{await x(e),O(Object(I.b)({account:g,pids:[c]}))},tokenName:i}));return Object(C.jsxs)(d.T,{justifyContent:"space-between",alignItems:"center",children:[Object(C.jsxs)(d.T,{flexDirection:"column",alignItems:"flex-start",children:[Object(C.jsx)(d.V,{color:t.eq(0)?"textDisabled":"text",children:y()}),t.gt(0)&&f.gt(0)&&Object(C.jsx)(K.a,{fontSize:"12px",color:"textSubtle",decimals:2,value:Object(m.f)(f.times(t)),unit:" USD",prefix:"~"})]}),t.eq(0)?Object(C.jsx)(d.q,{onClick:v,disabled:["history","archived"].some((e=>u.pathname.includes(e))),children:b("Stake LP")}):Object(C.jsxs)(se,{children:[Object(C.jsx)(d.Y,{variant:"tertiary",onClick:k,mr:"6px",children:Object(C.jsx)(d.qb,{color:"primary",width:"14px"})}),Object(C.jsx)(d.Y,{variant:"tertiary",onClick:v,disabled:["history","archived"].some((e=>u.pathname.includes(e))),children:Object(C.jsx)(d.a,{color:"primary",width:"14px"})})]})]})},de=r(25);var oe=e=>{const t=Object(Q.n)();return{onReward:Object(a.useCallback)((async()=>{await Object(ie.c)(t,e)}),[e,t])}};var be=e=>{let{earnings:t,pid:r}=e;const{account:i}=Object(l.c)(),{toastSuccess:n,toastError:c}=Object(te.a)(),{t:o}=Object(h.b)(),[b,j]=Object(a.useState)(!1),{onReward:x}=oe(r),u=Object(p.g)(),O=Object(U.b)(),g=i?Object(m.e)(t):de.d,f=g.toFixed(3,s.a.ROUND_DOWN),y=g?g.multipliedBy(u).toNumber():0;return Object(C.jsxs)(d.T,{mb:"8px",justifyContent:"space-between",alignItems:"center",children:[Object(C.jsxs)(d.T,{flexDirection:"column",alignItems:"flex-start",children:[Object(C.jsx)(d.V,{color:g.eq(0)?"textDisabled":"text",children:f}),y>0&&Object(C.jsx)(K.a,{fontSize:"12px",color:"textSubtle",decimals:2,value:y,unit:" USD",prefix:"~"})]}),Object(C.jsx)(d.q,{disabled:g.eq(0)||b,onClick:async()=>{j(!0);try{await x(),n(`${o("Harvested")}!`,o("Your %symbol% earnings have been sent to your wallet!",{symbol:"CAKE"}))}catch(e){c(o("Error"),o("Please try again. Confirm the transaction and make sure you are paying enough gas!")),console.error(e)}finally{j(!1)}O(Object(I.b)({account:i,pids:[r]}))},children:o("Harvest")})]})},je=r(51);var xe=e=>{const t=Object(Q.n)();return{onApprove:Object(a.useCallback)((async()=>{try{const r=await e.approve(t.address,je.a.constants.MaxUint256);return(await r.wait()).status}catch(r){return!1}}),[e,t])}};const pe=b.e.div`
  padding-top: 16px;
`;var ue=e=>{let{farm:t,account:r,addLiquidityUrl:i}=e;const{t:n}=Object(h.b)(),[c,l]=Object(a.useState)(!1),{pid:o,lpAddresses:b}=t,{allowance:j=0,tokenBalance:x=0,stakedBalance:p=0,earnings:u=0}=t.userData||{},m=new s.a(j),O=new s.a(x),g=new s.a(p),f=new s.a(u),y=Object(L.a)(b),v=r&&m&&m.isGreaterThan(0),k=Object(U.b)(),w=Object(Q.h)(y),{onApprove:S}=xe(w),T=Object(a.useCallback)((async()=>{try{l(!0),await S(),k(Object(I.b)({account:r,pids:[o]})),l(!1)}catch(e){console.error(e)}}),[S,k,r,o]);return Object(C.jsxs)(pe,{children:[Object(C.jsxs)(d.T,{children:[Object(C.jsx)(d.Vb,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"4px",children:"CAKE"}),Object(C.jsx)(d.Vb,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:n("Earned")})]}),Object(C.jsx)(be,{earnings:f,pid:o}),Object(C.jsxs)(d.T,{children:[Object(C.jsx)(d.Vb,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"4px",children:t.lpSymbol}),Object(C.jsx)(d.Vb,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:n("Staked")})]}),r?v?Object(C.jsx)(le,{stakedBalance:g,tokenBalance:O,tokenName:t.lpSymbol,pid:o,addLiquidityUrl:i}):Object(C.jsx)(d.q,{mt:"8px",width:"100%",disabled:c,onClick:T,children:n("Approve Contract")}):Object(C.jsx)(M.a,{mt:"8px",width:"100%"})]})},he=r(256);var me=e=>{let{lpLabel:t,cakePrice:r,apr:a,displayApr:i,addLiquidityUrl:n}=e;const{t:c}=Object(h.b)(),[s]=Object(d.rc)(Object(C.jsx)(he.a,{linkLabel:c("Get %symbol%",{symbol:t}),tokenPrice:r.toNumber(),apr:a,displayApr:i,linkHref:n,isFarm:!0}));return Object(C.jsx)(d.Y,{onClick:e=>{e.stopPropagation(),s()},variant:"text",scale:"sm",ml:"4px",children:Object(C.jsx)(d.t,{width:"18px"})})};const Oe=b.f`  
  0% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 100%;
  }
  100% {
    background-position: 50% 0%;
  }
`,ge=b.e.div`
  background: ${e=>{let{theme:t}=e;return`linear-gradient(180deg, ${t.colors.primaryBright}, ${t.colors.secondary})`}};
  background-size: 400% 400%;
  animation: ${Oe} 2s linear infinite;
  border-radius: 32px;
  position: absolute;
  top: -1px;
  right: -1px;
  bottom: -3px;
  left: -1px;
  z-index: -1;
`,fe=b.e.div`
  align-self: baseline;
  background: ${e=>e.theme.card.background};
  border-radius: ${e=>{let{theme:t,isPromotedFarm:r}=e;return r?"31px":t.radii.card}};
  box-shadow: 0px 1px 4px rgba(25, 19, 38, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 24px;
  position: relative;
  text-align: center;
`,ye=b.e.div`
  background-color: ${e=>{let{theme:t}=e;return t.colors.cardBorder}};
  height: 1px;
  margin: 28px auto;
  width: 100%;
`,ve=b.e.div`
  height: ${e=>e.expanded?"100%":"0px"};
  overflow: hidden;
`;var ke=e=>{let{farm:t,displayApr:r,removed:i,cakePrice:n,account:c}=e;const{t:s}=Object(h.b)(),[l,o]=Object(a.useState)(!1),b=t.liquidity&&t.liquidity.gt(0)?`$${t.liquidity.toNumber().toLocaleString(void 0,{maximumFractionDigits:0})}`:"",j=t.lpSymbol&&t.lpSymbol.toUpperCase().replace("PANCAKE",""),x=t.dual?t.dual.earnLabel:s("CAKE + Fees"),p=D({quoteTokenAddress:t.quoteToken.address,tokenAddress:t.token.address}),u=`${q.a}/${p}`,m=Object(L.a)(t.lpAddresses),O="CAKE"===t.token.symbol;return Object(C.jsxs)(fe,{isPromotedFarm:O,children:[O&&Object(C.jsx)(ge,{}),Object(C.jsx)(z,{lpLabel:j,multiplier:t.multiplier,isCommunityFarm:t.isCommunity,token:t.token,quoteToken:t.quoteToken}),!i&&Object(C.jsxs)(d.T,{justifyContent:"space-between",alignItems:"center",children:[Object(C.jsxs)(d.Vb,{children:[s("APR"),":"]}),Object(C.jsx)(d.Vb,{bold:!0,style:{display:"flex",alignItems:"center"},children:t.apr?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(me,{lpLabel:j,addLiquidityUrl:u,cakePrice:n,apr:t.apr,displayApr:r}),r,"%"]}):Object(C.jsx)(d.Lb,{height:24,width:80})})]}),Object(C.jsxs)(d.T,{justifyContent:"space-between",children:[Object(C.jsxs)(d.Vb,{children:[s("Earn"),":"]}),Object(C.jsx)(d.Vb,{bold:!0,children:x})]}),Object(C.jsx)(ue,{farm:t,account:c,addLiquidityUrl:u}),Object(C.jsx)(ye,{}),Object(C.jsx)($,{onClick:()=>o(!l),expanded:l}),Object(C.jsx)(ve,{expanded:l,children:Object(C.jsx)(P,{removed:i,bscScanAddress:Object(S.e)(m,"address"),infoAddress:`https://pancakeswap.info/pool/${m}`,totalValueFormatted:b,lpLabel:j,addLiquidityUrl:u})})]})},we=r(428);const Se=b.e.div`
  display: flex;
  align-items: center;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};

  button {
    width: 20px;
    height: 20px;

    svg {
      path {
        fill: ${e=>{let{theme:t}=e;return t.colors.textSubtle}};
      }
    }
  }
`,Ce=b.e.div`
  min-width: 60px;
  text-align: left;
`;var Te=e=>{let{value:t,lpLabel:r,tokenAddress:a,quoteTokenAddress:i,cakePrice:n,originalValue:c,hideButton:s=!1}=e;const l=D({quoteTokenAddress:i,tokenAddress:a}),o=`${q.a}/${l}`;return 0!==c?Object(C.jsx)(Se,{children:c?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(Ce,{children:[t,"%"]}),!s&&Object(C.jsx)(me,{lpLabel:r,cakePrice:n,apr:c,displayApr:t,addLiquidityUrl:o})]}):Object(C.jsx)(Ce,{children:Object(C.jsx)(d.Lb,{width:60})})}):Object(C.jsx)(Se,{children:Object(C.jsxs)(Ce,{children:[c,"%"]})})};const Ae=b.e.div`
  padding-left: 16px;
  display: flex;
  align-items: center;

  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    padding-left: 32px;
  }
`,$e=b.e.div`
  padding-right: 8px;
  width: 24px;

  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    width: 40px;
  }
`;var qe=e=>{let{token:t,quoteToken:r,label:a,pid:i}=e;const{stakedBalance:n}=Object(p.a)(i),{t:c}=Object(h.b)(),s=Object(m.f)(n);return Object(C.jsxs)(Ae,{children:[Object(C.jsx)($e,{children:Object(C.jsx)(F.b,{variant:"inverted",primaryToken:t,secondaryToken:r,width:40,height:40})}),Object(C.jsxs)("div",{children:[s?Object(C.jsx)(d.Vb,{color:"secondary",fontSize:"12px",bold:!0,textTransform:"uppercase",children:c("Farming")}):null,Object(C.jsx)(d.Vb,{bold:!0,children:a})]})]})};const Le=b.e.span`
  color: ${e=>{let{earned:t,theme:r}=e;return t?r.colors.text:r.colors.textDisabled}};
  display: flex;
  align-items: center;
`;var De=e=>{let{earnings:t,userDataReady:r}=e;return r?Object(C.jsx)(Le,{earned:t,children:t.toLocaleString()}):Object(C.jsx)(Le,{earned:0,children:Object(C.jsx)(d.Lb,{width:60})})};const Ve=b.e.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding-right: 8px;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};

  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    padding-right: 0px;
  }
`,Re=Object(b.e)(d.F)`
  transform: ${e=>{let{toggled:t}=e;return t?"rotate(180deg)":"rotate(0)"}};
  height: 20px;
`;var Pe=e=>{let{actionPanelToggled:t}=e;const{t:r}=Object(h.b)(),{isXl:a}=Object(d.qc)(),i=!a;return Object(C.jsxs)(Ve,{children:[!i&&r("Details"),Object(C.jsx)(Re,{color:"primary",toggled:t})]})};const Ee=b.e.div`
  display: inline-block;
`,Fe=b.e.div`
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  width: 36px;
  text-align: right;
  margin-right: 14px;

  ${e=>{let{theme:t}=e;return t.mediaQueries.lg}} {
    text-align: left;
    margin-right: 0;
  }
`,Be=b.e.div`
  display: flex;
  align-items: center;
`;var Ne=e=>{let{multiplier:t}=e;const r=t?t.toLowerCase():Object(C.jsx)(d.Lb,{width:30}),{t:a}=Object(h.b)(),i=Object(C.jsxs)(C.Fragment,{children:[a("The multiplier represents the amount of CAKE rewards each farm gets."),Object(C.jsx)("br",{}),Object(C.jsx)("br",{}),a("For example, if a 1x farm was getting 1 CAKE per block, a 40x farm would be getting 40 CAKE per block.")]}),{targetRef:n,tooltip:c,tooltipVisible:s}=Object(d.tc)(i,{placement:"top-end",tooltipOffset:[20,10]});return Object(C.jsxs)(Be,{children:[Object(C.jsx)(Fe,{children:r}),Object(C.jsx)(Ee,{ref:n,children:Object(C.jsx)(d.W,{color:"textSubtle"})}),s&&c]})};const ze=b.e.div`
  display: inline-block;
`,Ue=b.e.div`
  min-width: 110px;
  font-weight: 600;
  text-align: right;
  margin-right: 14px;

  ${e=>{let{theme:t}=e;return t.mediaQueries.lg}} {
    text-align: left;
    margin-right: 0;
  }
`,Ie=b.e.div`
  display: flex;
  align-items: center;
`;var Qe=e=>{let{liquidity:t}=e;const r=t&&t.gt(0)?`$${Number(t).toLocaleString(void 0,{maximumFractionDigits:0})}`:Object(C.jsx)(d.Lb,{width:60}),{t:a}=Object(h.b)(),{targetRef:i,tooltip:n,tooltipVisible:c}=Object(d.tc)(a("Total value of the funds in this farm\u2019s liquidity pool"),{placement:"top-end",tooltipOffset:[20,10]});return Object(C.jsxs)(Ie,{children:[Object(C.jsx)(Ue,{children:Object(C.jsx)(d.Vb,{children:r})}),Object(C.jsx)(ze,{ref:i,children:Object(C.jsx)(d.W,{color:"textSubtle"})}),c&&n]})};const Me=b.e.div`
  padding: 16px;
  border: 2px solid ${e=>{let{theme:t}=e;return t.colors.input}};
  border-radius: 8px;;
  flex-grow: 1;
  flex-basis: 0;
  margin-bottom: 16px;

  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    margin-left: 12px;
    margin-right: 12px;
    margin-bottom: 0;
    max-height: 100px;
  }

  ${e=>{let{theme:t}=e;return t.mediaQueries.xl}} {
    margin-left: 48px;
    margin-right: 0;
    margin-bottom: 0;
    max-height: 100px;
  }
`,Ke=b.e.div`
  display: flex;
`,We=b.e.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Ye=b.e.div`
  font-weight: 600;
  font-size: 20px;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
`;var Ge=e=>{let{pid:t,userData:r,userDataReady:i}=e;const{toastSuccess:n,toastError:c}=Object(te.a)(),o=new s.a(r.earnings),b=Object(p.g)();let j=de.d,x=0,u=i?j.toLocaleString():Object(C.jsx)(d.Lb,{width:60});o.isZero()||(j=Object(m.e)(o),x=j.multipliedBy(b).toNumber(),u=j.toFixed(3,s.a.ROUND_DOWN));const[O,g]=Object(a.useState)(!1),{onReward:f}=oe(t),{t:y}=Object(h.b)(),v=Object(U.b)(),{account:k}=Object(l.c)();return Object(C.jsxs)(Me,{children:[Object(C.jsxs)(Ke,{children:[Object(C.jsx)(d.Vb,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"4px",children:"CAKE"}),Object(C.jsx)(d.Vb,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:y("Earned")})]}),Object(C.jsxs)(We,{children:[Object(C.jsxs)("div",{children:[Object(C.jsx)(Ye,{children:u}),x>0&&Object(C.jsx)(K.a,{fontSize:"12px",color:"textSubtle",decimals:2,value:x,unit:" USD",prefix:"~"})]}),Object(C.jsx)(d.q,{disabled:j.eq(0)||O||!i,onClick:async()=>{g(!0);try{await f(),n(`${y("Harvested")}!`,y("Your %symbol% earnings have been sent to your wallet!",{symbol:"CAKE"}))}catch(e){c(y("Error"),y("Please try again. Confirm the transaction and make sure you are paying enough gas!")),console.error(e)}finally{g(!1)}v(Object(I.b)({account:k,pids:[t]}))},ml:"4px",children:y("Harvest")})]})]})};const He=b.e.div`
  display: flex;
`;var _e=e=>{let{pid:t,lpSymbol:r,lpAddresses:i,quoteToken:s,token:o,userDataReady:b}=e;const{t:j}=Object(h.b)(),{account:x}=Object(l.c)(),[u,O]=Object(a.useState)(!1),{allowance:g,tokenBalance:f,stakedBalance:y}=Object(p.a)(t),{onStake:v}=ce(t),{onUnstake:k}=ne(t),w=Object(n.h)(),S=Object(p.c)(r),T=x&&g&&g.isGreaterThan(0),A=Object(L.a)(i),$=D({quoteTokenAddress:s.address,tokenAddress:o.address}),V=`${q.a}/${$}`,R=Object(a.useCallback)((()=>{const e=Object(m.e)(y);return e.gt(0)&&e.lt(1e-4)?Object(m.h)(y).toLocaleString():e.toFixed(3,c.BigNumber.ROUND_DOWN)}),[y]),[P]=Object(d.rc)(Object(C.jsx)(re,{max:f,onConfirm:async e=>{await v(e),B(Object(I.b)({account:x,pids:[t]}))},tokenName:r,addLiquidityUrl:V})),[E]=Object(d.rc)(Object(C.jsx)(ae,{max:y,onConfirm:async e=>{await k(e),B(Object(I.b)({account:x,pids:[t]}))},tokenName:r})),F=Object(Q.h)(A),B=Object(U.b)(),{onApprove:N}=xe(F),z=Object(a.useCallback)((async()=>{try{O(!0),await N(),B(Object(I.b)({account:x,pids:[t]})),O(!1)}catch(e){console.error(e)}}),[N,B,x,t]);return x?T?y.gt(0)?Object(C.jsxs)(Me,{children:[Object(C.jsxs)(Ke,{children:[Object(C.jsx)(d.Vb,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",pr:"4px",children:r}),Object(C.jsx)(d.Vb,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:j("Staked")})]}),Object(C.jsxs)(We,{children:[Object(C.jsxs)("div",{children:[Object(C.jsx)(Ye,{children:R()}),y.gt(0)&&S.gt(0)&&Object(C.jsx)(K.a,{fontSize:"12px",color:"textSubtle",decimals:2,value:Object(m.f)(S.times(y)),unit:" USD",prefix:"~"})]}),Object(C.jsxs)(He,{children:[Object(C.jsx)(d.Y,{variant:"secondary",onClick:E,mr:"6px",children:Object(C.jsx)(d.qb,{color:"primary",width:"14px"})}),Object(C.jsx)(d.Y,{variant:"secondary",onClick:P,disabled:["history","archived"].some((e=>w.pathname.includes(e))),children:Object(C.jsx)(d.a,{color:"primary",width:"14px"})})]})]})]}):Object(C.jsxs)(Me,{children:[Object(C.jsxs)(Ke,{children:[Object(C.jsx)(d.Vb,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",pr:"4px",children:j("Stake").toUpperCase()}),Object(C.jsx)(d.Vb,{bold:!0,textTransform:"uppercase",color:"secondary",fontSize:"12px",children:r})]}),Object(C.jsx)(We,{children:Object(C.jsx)(d.q,{width:"100%",onClick:P,variant:"secondary",disabled:["history","archived"].some((e=>w.pathname.includes(e))),children:j("Stake LP")})})]}):b?Object(C.jsxs)(Me,{children:[Object(C.jsx)(Ke,{children:Object(C.jsx)(d.Vb,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:j("Enable Farm")})}),Object(C.jsx)(We,{children:Object(C.jsx)(d.q,{width:"100%",disabled:u,onClick:z,variant:"secondary",children:j("Enable")})})]}):Object(C.jsxs)(Me,{children:[Object(C.jsx)(Ke,{children:Object(C.jsx)(d.Vb,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:j("Start Farming")})}),Object(C.jsx)(We,{children:Object(C.jsx)(d.Lb,{width:180,marginBottom:28,marginTop:14})})]}):Object(C.jsxs)(Me,{children:[Object(C.jsx)(Ke,{children:Object(C.jsx)(d.Vb,{bold:!0,textTransform:"uppercase",color:"textSubtle",fontSize:"12px",children:j("Start Farming")})}),Object(C.jsx)(We,{children:Object(C.jsx)(M.a,{width:"100%"})})]})};const Xe=b.f`
  from {
    max-height: 0px;
  }
  to {
    max-height: 500px;
  }
`,Ze=b.f`
  from {
    max-height: 500px;
  }
  to {
    max-height: 0px;
  }
`,Je=b.e.div`
  animation: ${e=>{let{expanded:t}=e;return t?b.d`
          ${Xe} 300ms linear forwards
        `:b.d`
          ${Ze} 300ms linear forwards
        `}};
  overflow: hidden;
  background: ${e=>{let{theme:t}=e;return t.colors.background}};
  display: flex;
  width: 100%;
  flex-direction: column-reverse;
  padding: 24px;

  ${e=>{let{theme:t}=e;return t.mediaQueries.lg}} {
    flex-direction: row;
    padding: 16px 32px;
  }
`,et=Object(b.e)(d.fb)`
  font-weight: 400;
`,tt=b.e.div`
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  align-items: center;
  display: flex;
  justify-content: space-between;

  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    justify-content: flex-start;
  }
`,rt=b.e.div`
  display: flex;
  align-items: center;
  margin-top: 25px;

  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    margin-top: 16px;
  }

  > div {
    height: 24px;
    padding: 0 6px;
    font-size: 14px;
    margin-right: 4px;

    svg {
      width: 14px;
    }
  }
`,at=b.e.div`
  display: flex;
  flex-direction: column;

  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    flex-direction: row;
    align-items: center;
    flex-grow: 1;
    flex-basis: 0;
  }
`,it=b.e.div`
  min-width: 200px;
`,nt=b.e.div`
  display: block;

  ${e=>{let{theme:t}=e;return t.mediaQueries.lg}} {
    display: none;
  }
`,ct=b.e.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4px 0px;
`;var st=e=>{let{details:t,apr:r,multiplier:a,liquidity:i,userDataReady:n,expanded:c}=e;const s=t,{t:l}=Object(h.b)(),o="0X"!==s.multiplier,{quoteToken:b,token:j,dual:x}=s,p=s.lpSymbol&&s.lpSymbol.toUpperCase().replace("PANCAKE",""),u=D({quoteTokenAddress:b.address,tokenAddress:j.address}),m=Object(L.a)(s.lpAddresses),O=Object(S.e)(m,"address"),g=`https://pancakeswap.info/pool/${m}`;return Object(C.jsxs)(Je,{expanded:c,children:[Object(C.jsxs)(it,{children:[o&&Object(C.jsx)(tt,{children:Object(C.jsx)(et,{href:`/add/${u}`,children:l("Get %symbol%",{symbol:p})})}),Object(C.jsx)(et,{href:O,children:l("View Contract")}),Object(C.jsx)(et,{href:g,children:l("See Pair Info")}),Object(C.jsxs)(rt,{children:[s.isCommunity?Object(C.jsx)(E.b,{}):Object(C.jsx)(E.d,{}),x?Object(C.jsx)(E.e,{}):null]})]}),Object(C.jsxs)(nt,{children:[Object(C.jsxs)(ct,{children:[Object(C.jsx)(d.Vb,{children:l("APR")}),Object(C.jsx)(Te,{...r})]}),Object(C.jsxs)(ct,{children:[Object(C.jsx)(d.Vb,{children:l("Multiplier")}),Object(C.jsx)(Ne,{...a})]}),Object(C.jsxs)(ct,{children:[Object(C.jsx)(d.Vb,{children:l("Liquidity")}),Object(C.jsx)(Qe,{...i})]})]}),Object(C.jsxs)(at,{children:[Object(C.jsx)(Ge,{...s,userDataReady:n}),Object(C.jsx)(_e,{...s,userDataReady:n})]})]})};const lt=b.e.div`
  font-size: 12px;
  color: ${e=>{let{theme:t}=e;return t.colors.textSubtle}};
  text-align: left;
`,dt=b.e.div`
  min-height: 24px;
  display: flex;
  align-items: center;
`;var ot=e=>{let{label:t="",children:r}=e;return Object(C.jsxs)("div",{children:[t&&Object(C.jsx)(lt,{children:t}),Object(C.jsx)(dt,{children:r})]})};const bt=[{id:1,name:"farm",sortable:!0,label:""},{id:2,name:"earned",sortable:!0,label:"Earned"},{id:3,name:"apr",sortable:!0,label:"APR"},{id:6,name:"details",sortable:!0,label:""}],jt=[{id:1,name:"farm",sortable:!0,label:""},{id:2,name:"earned",sortable:!0,label:"Earned"},{id:3,name:"apr",sortable:!0,label:"APR"},{id:4,name:"liquidity",sortable:!0,label:"Liquidity"},{id:5,name:"multiplier",sortable:!0,label:"Multiplier"},{id:6,name:"details",sortable:!0,label:""}];let xt;!function(e){e.TABLE="TABLE",e.CARD="CARD"}(xt||(xt={}));const pt={apr:Te,farm:qe,earned:De,details:Pe,multiplier:Ne,liquidity:Qe},ut=b.e.div`
  padding: 24px 0px;
  display: flex;
  width: 100%;
  align-items: center;
  padding-right: 8px;

  ${e=>{let{theme:t}=e;return t.mediaQueries.xl}} {
    padding-right: 32px;
  }
`,ht=b.e.tr`
  cursor: pointer;
  border-bottom: 2px solid ${e=>{let{theme:t}=e;return t.colors.cardBorder}};
`,mt=b.e.td`
  padding: 16px 0 24px 16px;
`,Ot=b.e.td`
  padding-top: 16px;
  padding-bottom: 24px;
`,gt=b.e.td`
  padding-top: 24px;
`;var ft=e=>{const{details:t,userDataReady:r}=e,n=!!Object(p.a)(t.pid).stakedBalance.toNumber(),[c,s]=Object(a.useState)(n),l=Object(we.a)(c,300),{t:o}=Object(h.b)(),b=()=>{s(!c)};Object(a.useEffect)((()=>{s(n)}),[n]);const{isXl:j,isXs:x}=Object(d.qc)(),u=!j,m=u?bt:jt,O=m.map((e=>e.name));return Object(C.jsxs)(C.Fragment,{children:[x?Object(C.jsxs)(ht,{onClick:b,children:[Object(C.jsxs)("td",{children:[Object(C.jsx)("tr",{children:Object(C.jsx)(gt,{children:Object(C.jsx)(ot,{children:Object(C.jsx)(qe,{...e.farm})})})}),Object(C.jsxs)("tr",{children:[Object(C.jsx)(mt,{children:Object(C.jsx)(ot,{label:o("Earned"),children:Object(C.jsx)(De,{...e.earned,userDataReady:r})})}),Object(C.jsx)(Ot,{children:Object(C.jsx)(ot,{label:o("APR"),children:Object(C.jsx)(Te,{...e.apr,hideButton:!0})})})]})]}),Object(C.jsx)("td",{children:Object(C.jsx)(ut,{children:Object(C.jsx)(ot,{children:Object(C.jsx)(Pe,{actionPanelToggled:c})})})})]}):Object(C.jsx)(ht,{onClick:b,children:Object.keys(e).map((t=>{const a=O.indexOf(t);if(-1===a)return null;switch(t){case"details":return Object(C.jsx)("td",{children:Object(C.jsx)(ut,{children:Object(C.jsx)(ot,{children:Object(C.jsx)(Pe,{actionPanelToggled:c})})})},t);case"apr":return Object(C.jsx)("td",{children:Object(C.jsx)(ut,{children:Object(C.jsx)(ot,{label:o("APR"),children:Object(C.jsx)(Te,{...e.apr,hideButton:u})})})},t);default:return Object(C.jsx)("td",{children:Object(C.jsx)(ut,{children:Object(C.jsx)(ot,{label:o(m[a].label),children:i.a.createElement(pt[t],{...e[t],userDataReady:r})})})},t)}}))}),l&&Object(C.jsx)("tr",{children:Object(C.jsx)("td",{colSpan:6,children:Object(C.jsx)(st,{...e,expanded:c})})})]})};const yt=b.e.div`
  filter: ${e=>{let{theme:t}=e;return t.card.dropShadow}};
  width: 100%;
  background: ${e=>{let{theme:t}=e;return t.card.background}};
  border-radius: 8px;;
  margin: 16px 0px;
`,vt=b.e.div`
  overflow: visible;

  &::-webkit-scrollbar {
    display: none;
  }
`,kt=b.e.table`
  border-collapse: collapse;
  font-size: 14px;
  border-radius: 4px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`,wt=b.e.tbody`
  & tr {
    td {
      font-size: 16px;
      vertical-align: middle;
    }
  }
`,St=b.e.div`
  position: relative;
`,Ct=b.e.div`
  display: flex;
  justify-content: center;
  padding-top: 5px;
  padding-bottom: 5px;
`;var Tt=e=>{const t=Object(a.useRef)(null),{t:r}=Object(h.b)(),{data:i,columns:n,userDataReady:c}=e,{rows:s}=Object(d.sc)(n,i,{sortable:!0,sortColumn:"farm"});return Object(C.jsx)(yt,{children:Object(C.jsxs)(St,{children:[Object(C.jsx)(vt,{ref:t,children:Object(C.jsx)(kt,{children:Object(C.jsx)(wt,{children:s.map((e=>Object(a.createElement)(ft,{...e.original,userDataReady:c,key:`table-row-${e.id}`})))})})}),Object(C.jsx)(Ct,{children:Object(C.jsxs)(d.q,{variant:"text",onClick:()=>{t.current.scrollIntoView({behavior:"smooth"})},children:[r("To Top"),Object(C.jsx)(d.I,{color:"primary"})]})})]})})},At=r(59);var $t=e=>{let{hasStakeInFinishedFarms:t}=e;const{url:r}=Object(n.j)(),a=Object(n.h)(),{t:i}=Object(h.b)();let c;switch(a.pathname){case"/farms":c=0;break;case"/farms/history":c=1;break;case"/farms/archived":c=2;break;default:c=0}return Object(C.jsx)(qt,{children:Object(C.jsxs)(d.r,{activeIndex:c,scale:"sm",variant:"primary_contrast",children:[Object(C.jsx)(d.s,{as:At.a,to:`${r}`,children:i("Live")}),Object(C.jsx)(d.Ab,{show:t,children:Object(C.jsx)(d.s,{as:At.a,to:`${r}/history`,children:i("Finished")})})]})})};const qt=b.e.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    padding-left: 12px;
    padding-right: 12px;
  }

  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    margin-left: 16px;
  }
`,Lt=b.e.div`
  margin-left: -8px;

  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    margin-left: 0;
  }
`;var Dt=e=>{let{viewMode:t,onToggle:r}=e;const a=e=>{t!==e&&r(e)};return Object(C.jsxs)(Lt,{children:[Object(C.jsx)(d.Y,{variant:"text",scale:"sm",id:"clickFarmCardView",onClick:()=>a(xt.CARD),children:Object(C.jsx)(d.z,{color:t===xt.CARD?"primary":"textDisabled"})}),Object(C.jsx)(d.Y,{variant:"text",scale:"sm",id:"clickFarmTableView",onClick:()=>a(xt.TABLE),children:Object(C.jsx)(d.gb,{color:t===xt.TABLE?"primary":"textDisabled"})})]})};const Vt=b.e.div`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;

  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 32px;

  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    flex-direction: row;
    flex-wrap: wrap;
    padding: 16px 32px;
    margin-bottom: 0;
  }
`,Rt=b.e.div`
  display: flex;
  align-items: center;
  margin-left: 10px;

  ${d.Vb} {
    margin-left: 8px;
  }
`,Pt=b.e.div`
  > ${d.Vb} {
    font-size: 12px;
  }
`,Et=b.e.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 0px;

  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    width: auto;
    padding: 0;
  }
`,Ft=b.e.div`
  flex-wrap: wrap;
  justify-content: space-between;
  display: flex;
  align-items: center;
  width: 100%;

  > div {
    padding: 8px 0px;
  }

  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    justify-content: flex-start;
    width: auto;

    > div {
      padding: 0;
    }
  }
`,Bt=Object(b.e)(d.Z)`
  margin-left: auto;
  margin-right: auto;
  margin-top: 58px;
`,Nt=(e,t)=>e&&t?(e+t).toLocaleString("en-US",{maximumFractionDigits:2}):e?e.toLocaleString("en-US",{maximumFractionDigits:2}):null;var zt=()=>{const{path:e}=Object(n.j)(),{pathname:t}=Object(n.h)(),{t:r}=Object(h.b)(),{data:i,userDataLoaded:c}=Object(p.b)(),b=Object(p.g)(),[S,T]=Object(a.useState)(""),[A,$]=Object(u.a)(xt.TABLE,{localStorageKey:"pancake_farm_view"}),{account:q}=Object(l.c)(),[L,D]=Object(a.useState)("hot"),V=t.includes("archived"),R=t.includes("history"),P=!R&&!V;Object(p.e)(V);const E=!q||!!q&&c,[F,B]=Object(a.useState)(!P);Object(a.useEffect)((()=>{B(!P)}),[P]);const N=i.filter((e=>0!==e.pid&&"0X"!==e.multiplier&&!Object(f.a)(e.pid))),z=i.filter((e=>0!==e.pid&&"0X"===e.multiplier&&!Object(f.a)(e.pid))),U=i.filter((e=>Object(f.a)(e.pid))),I=N.filter((e=>e.userData&&new s.a(e.userData.stakedBalance).isGreaterThan(0))),Q=z.filter((e=>e.userData&&new s.a(e.userData.stakedBalance).isGreaterThan(0))),M=U.filter((e=>e.userData&&new s.a(e.userData.stakedBalance).isGreaterThan(0))),K=Object(a.useCallback)((e=>{let t=e.map((e=>{if(!e.lpTotalInQuoteToken||!e.quoteToken.busdPrice)return e;const t=new s.a(e.lpTotalInQuoteToken).times(e.quoteToken.busdPrice),{cakeRewardsApr:r,lpRewardsApr:a}=P?Object(O.a)(new s.a(e.poolWeight),b,t,e.lpAddresses[o.a.MAINNET]):{cakeRewardsApr:0,lpRewardsApr:0};return{...e,apr:r,lpRewardsApr:a,liquidity:t}}));if(S){const e=Object(y.a)(S.toLowerCase());t=t.filter((t=>Object(y.a)(t.lpSymbol.toLowerCase()).includes(e)))}return t}),[b,S,P]),W=Object(a.useRef)(null),[Y,G]=Object(a.useState)(12),[H,_]=Object(a.useState)(!1),X=Object(a.useMemo)((()=>{let e=[];return P&&(e=K(F?I:N)),R&&(e=K(F?Q:z)),V&&(e=K(F?M:U)),(e=>{switch(L){case"apr":return Object(g.orderBy)(e,(e=>e.apr+e.lpRewardsApr),"desc");case"multiplier":return Object(g.orderBy)(e,(e=>e.multiplier?Number(e.multiplier.slice(0,-1)):0),"desc");case"earned":return Object(g.orderBy)(e,(e=>e.userData?Number(e.userData.earnings):0),"desc");case"liquidity":return Object(g.orderBy)(e,(e=>Number(e.liquidity)),"desc");default:return e}})(e).slice(0,Y)}),[L,N,K,z,U,P,R,V,M,Q,F,I,Y]);Object(a.useEffect)((()=>{if(!H){new IntersectionObserver((e=>{const[t]=e;t.isIntersecting&&G((e=>e+12))}),{rootMargin:"0px",threshold:1}).observe(W.current),_(!0)}}),[X,H]);const Z=X.map((e=>{const{token:t,quoteToken:r}=e,a=t.address,i=r.address,n=e.lpSymbol&&e.lpSymbol.split(" ")[0].toUpperCase().replace("PANCAKE","");return{apr:{value:Nt(e.apr,e.lpRewardsApr),multiplier:e.multiplier,lpLabel:n,tokenAddress:a,quoteTokenAddress:i,cakePrice:b,originalValue:e.apr},farm:{label:n,pid:e.pid,token:e.token,quoteToken:e.quoteToken},earned:{earnings:Object(m.f)(new s.a(e.userData.earnings)),pid:e.pid},liquidity:{liquidity:e.liquidity},multiplier:{multiplier:e.multiplier},details:e}}));return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(v.a,{children:[Object(C.jsx)(d.V,{as:"h1",scale:"xl",color:"primary",mb:"24px",children:r("Farms")}),Object(C.jsx)(d.Vb,{color:"text",fontWeight:"400",fontSize:"24px",lineHeight:"24px",children:r("Stake LP tokens to earn.")})]}),Object(C.jsxs)(x.a,{children:[Object(C.jsxs)(Vt,{children:[Object(C.jsxs)(Ft,{children:[Object(C.jsx)(Dt,{viewMode:A,onToggle:e=>$(e)}),Object(C.jsxs)(Rt,{children:[Object(C.jsx)(d.Zb,{checked:F,onChange:()=>B(!F),scale:"sm"}),Object(C.jsxs)(d.Vb,{children:[" ",r("Staked only")]})]}),Object(C.jsx)($t,{hasStakeInFinishedFarms:Q.length>0})]}),Object(C.jsxs)(Et,{children:[Object(C.jsxs)(Pt,{children:[Object(C.jsx)(d.Vb,{textTransform:"uppercase",children:r("Sort by")}),Object(C.jsx)(w.a,{options:[{label:r("Hot"),value:"hot"},{label:r("APR"),value:"apr"},{label:r("Multiplier"),value:"multiplier"},{label:r("Earned"),value:"earned"},{label:r("Liquidity"),value:"liquidity"}],onChange:e=>{D(e.value)}})]}),Object(C.jsxs)(Pt,{style:{marginLeft:16},children:[Object(C.jsx)(d.Vb,{textTransform:"uppercase",children:r("Search")}),Object(C.jsx)(k.a,{onChange:e=>{T(e.target.value)},placeholder:"Search Farms"})]})]})]}),(()=>{if(A===xt.TABLE&&Z.length){const e=jt.map((e=>({id:e.id,name:e.name,label:e.label,sort:(t,r)=>{switch(e.name){case"farm":return r.id-t.id;case"apr":return t.original.apr.value&&r.original.apr.value?Number(t.original.apr.value)-Number(r.original.apr.value):0;case"earned":return t.original.earned.earnings-r.original.earned.earnings;default:return 1}},sortable:e.sortable})));return Object(C.jsx)(Tt,{data:Z,columns:e,userDataReady:E})}return Object(C.jsx)("div",{children:Object(C.jsxs)(j.a,{children:[Object(C.jsx)(n.b,{exact:!0,path:`${e}`,children:X.map((e=>Object(C.jsx)(ke,{farm:e,displayApr:Nt(e.apr,e.lpRewardsApr),cakePrice:b,account:q,removed:!1},e.pid)))}),Object(C.jsx)(n.b,{exact:!0,path:`${e}/history`,children:X.map((e=>Object(C.jsx)(ke,{farm:e,displayApr:Nt(e.apr,e.lpRewardsApr),cakePrice:b,account:q,removed:!0},e.pid)))}),Object(C.jsx)(n.b,{exact:!0,path:`${e}/archived`,children:X.map((e=>Object(C.jsx)(ke,{farm:e,displayApr:Nt(e.apr,e.lpRewardsApr),cakePrice:b,account:q,removed:!0},e.pid)))})]})})})(),Object(C.jsx)("div",{ref:W}),Object(C.jsx)(Bt,{src:"/images/decorations/3dpan.png",alt:"Pancake illustration",width:120,height:103})]})]})}}}]);
//# sourceMappingURL=27.e467f81d.chunk.js.map