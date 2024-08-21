(this["webpackJsonp1tronic-frontend"]=this["webpackJsonp1tronic-frontend"]||[]).push([[25],{1040:function(e,t,n){var i=n(481),r=n(482),c=n(158);e.exports=function(e){return e&&e.length?i(e,c,r):void 0}},1472:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return K}));var i=n(2),r=n(4),c=n(3),o=n(10),s=n(229),a=n(59),l=n(29),b=n(12),j=n.n(b),x=n(39),p=n(17),d=n(167),h=n(31),u=n(156);var g=()=>{const[e,t]=Object(i.useState)([]),{account:n}=Object(l.c)(),{fastRefresh:r}=Object(u.a)();return Object(i.useEffect)((()=>{n&&(async()=>{const e=h.w.map((e=>({address:Object(p.l)(),name:"pendingCake",params:[e.pid,n]}))),i=await Object(x.a)(d,e),r=h.w.map(((e,t)=>({...e,balance:new j.a(i[t])})));t(r)})()}),[n,r]),e},O=n(79),m=n(56),f=n(102),v=n(360),S=n(0);var w=e=>{let{value:t,decimals:n,fontSize:r="24px",lineHeight:o="1",prefix:s="",bold:a=!0,color:l="secondary"}=e;const{countUp:b,update:j}=Object(v.useCountUp)({start:0,end:t,duration:1,separator:",",decimals:void 0!==n?n:t<0?4:t>1e5?0:3}),x=Object(i.useRef)(j);return Object(i.useEffect)((()=>{x.current(t)}),[t,x]),Object(S.jsxs)(c.Vb,{bold:a,fontSize:r,style:{lineHeight:o},color:l,textTransform:"uppercase",children:[s,b]})};var y=e=>Object(S.jsx)(w,{fontSize:"14px",lineHeight:"32px",color:"textSubtle",prefix:"~$",bold:!1,decimals:2,...e});const H=r.e.div`
  margin-top: 5px;
  display: flex;
`;var z=e=>{let{farmsWithBalance:t}=e;const{account:n}=Object(l.c)(),i=t.reduce(((e,t)=>{const n=new j.a(t.balance);return n.eq(0)?e:e+n.div(m.i).toNumber()}),0),r=Object(O.g)(),c=new j.a(i).multipliedBy(r).toNumber();return n?Object(S.jsxs)(H,{children:[Object(S.jsx)(w,{value:i,lineHeight:"32px"}),r.gt(0)&&Object(S.jsx)(y,{value:c,color:"textSubtle"})]}):Object(S.jsx)(H,{children:Object(S.jsx)(f.a,{width:"100%"})})};var V=e=>{let{text:t,fontSize:n="40px",lineHeight:i="1",bold:r=!0,color:o="secondary"}=e;return Object(S.jsx)(c.Vb,{bold:r,fontSize:n,style:{lineHeight:i},color:o,textTransform:"uppercase",children:t})};const W=Object(r.e)(c.u)`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  min-height: 104px;
`,T=r.e.div`
`;var k=()=>{const{account:e}=Object(l.c)(),{t:t}=Object(o.b)(),n=g().filter((e=>e.balance.gt(0)));return Object(S.jsx)(W,{children:e?Object(S.jsx)(a.b,{exact:!0,activeClassName:"active",to:"/pools",id:"farm-apr-cta",children:Object(S.jsx)(c.v,{children:Object(S.jsxs)(T,{children:[Object(S.jsx)(V,{fontSize:"14px",lineHeight:"1.1",color:"textSubtle",bold:!1,text:t("Coin to Harvest")}),Object(S.jsx)(z,{farmsWithBalance:n})]})})}):Object(S.jsx)(c.v,{children:Object(S.jsxs)(T,{children:[Object(S.jsx)(V,{fontSize:"14px",lineHeight:"1.1",color:"textSubtle",bold:!1,text:t("Coin to Harvest")}),Object(S.jsx)(z,{farmsWithBalance:n})]})})})};const C=Object(r.e)(c.u)`
  // text-align: center;
  padding-top: 60px;
  border-color: transparent;
  box-shadow: none;
`;var I=()=>{const{t:e}=Object(o.b)(),t=(()=>{const[e,t]=Object(i.useState)(null);return Object(i.useEffect)((()=>{(async()=>{try{const e=await fetch("https://openapi.debank.com/v1/protocol?id=bsc_pancakeswap"),n=await e.json();t(n)}catch(e){console.error("Unable to fetch data:",e)}})()}),[t]),e})(),n=t?t.tvl.toLocaleString("en-US",{maximumFractionDigits:0}):null;return Object(S.jsxs)(C,{children:[Object(S.jsx)(c.Vb,{color:"primaryDark",fontSize:"20px",fontWeight:"700",mb:"8px",textTransform:"uppercase",children:e("Total Value Locked (TVL)")}),t?Object(S.jsx)(S.Fragment,{children:Object(S.jsx)(c.Vb,{color:"text",fontWeight:"800",fontSize:"32px",lineHeight:"36px",decoration:"none solid rgb(255, 255, 255)",shadow:"0px 2px 1px rgba(0,0,0,0.5)",children:`$${n}`})}):Object(S.jsx)(c.Vb,{color:"text",fontWeight:"800",fontSize:"32px",lineHeight:"36px",decoration:"none solid rgb(255, 255, 255)",shadow:"0px 2px 1px rgba(0,0,0,0.5)",children:"$"})]})},$=n(6),R=n(1040),A=n.n(R),E=n(55),L=n(119),N=n(368);var B=()=>{const e=Object(i.useRef)(null),[t,n]=Object(i.useState)(!1),[r,c]=Object(i.useState)(!1);return Object(i.useEffect)((()=>{if(!t){new IntersectionObserver((e=>{let[t]=e;c(t.isIntersecting)}),{rootMargin:"0px",threshold:1}).observe(e.current),n(!0)}}),[t]),{observerRef:e,isIntersecting:r}};const F=Object(r.e)(c.u)`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  min-height: 104px;
  padding-left: 24px;
  padding-right: 24px;
  position: relative;
  background-color: transparent;
`,U=r.e.div`
  position: absolute;
  top: 50%;
  width: calc( 100% - 48px);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
`,D=r.e.div`
  position: absolute;
  bottom: calc(50% - 16px);
  right: 0;
`,Q=Object(r.e)(c.Vb).attrs({fontWeight:"700",fontSize:"24px",lineHeight:"24px"})`
`;var Y=()=>{const[e,t]=Object(i.useState)(!0),{t:n}=Object(o.b)(),{data:r}=Object(O.b)(),s=Object(O.g)(),l=Object(E.b)(),{observerRef:b,isIntersecting:x}=B();Object(i.useEffect)((()=>{x&&(async()=>{try{await l(Object(L.c)(L.d.map((e=>e.pid))))}finally{t(!1)}})()}),[l,t,x]);const p=Object(i.useMemo)((()=>{if(s.gt(0)){const e=r.map((e=>{if(0!==e.pid&&"0X"!==e.multiplier&&e.lpTotalInQuoteToken&&e.quoteToken.busdPrice){const t=new j.a(e.lpTotalInQuoteToken).times(e.quoteToken.busdPrice),{cakeRewardsApr:n,lpRewardsApr:i}=Object(N.a)(new j.a(e.poolWeight),s,t,e.lpAddresses[$.a.MAINNET]);return n+i}return null})),t=A()(e);return null===t||void 0===t?void 0:t.toLocaleString("en-US",{maximumFractionDigits:2})}return null}),[s,r]),d=p||"-",h=n("Earn from %highestApr% APR",{highestApr:d}),[u,g]=h.split(d);return Object(S.jsx)(F,{children:Object(S.jsx)(a.b,{exact:!0,activeClassName:"active",to:"/farms",id:"farm-apr-cta",children:Object(S.jsxs)(U,{children:[Object(S.jsx)(c.Vb,{color:"textSubtle",fontWeight:"400",fontSize:"14px",lineHeight:"24px",children:u}),Object(S.jsxs)(c.T,{justifyContent:"space-between",children:[Object(S.jsx)(Q,{color:"secondary",children:p&&!e?`${g} ${p}%`:Object(S.jsxs)(S.Fragment,{children:[`${g}`,Object(S.jsx)("div",{ref:b})]})}),Object(S.jsx)(D,{children:Object(S.jsx)(c.e,{color:"primary",width:"32px"})})]})]})})})};const q=Object(r.e)(c.u)`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  min-height: 104px;
  padding-left: 24px;
  padding-right: 24px;
  position: relative;
  background-color: ${e=>{let{invert:t,theme:n}=e;return t?n.colors.secondary:"transparent"}};
  ${e=>{let{decorationImage:t}=e;return""===t?"":`&:before{\n      content: "";\n      position: absolute;\n      width: 133px;\n      height: 165px;\n      top: -14%;\n      right: -25px;\n      z-index: -1;\n      background: url(${t}) 0 0 no-repeat;\n      transform: rotate(-10deg);\n    }`}}  
`,M=r.e.div`
  position: absolute;
  top: 50%;
  width: calc( 100% - 48px);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
`,P=r.e.div`
  position: absolute;
  bottom: calc(50% - 16px);
  right: 0;
`;var J=e=>{let{text:t,title:n,invert:i=!1,redirect:r="",decorationImage:o=""}=e;return Object(S.jsx)(q,{invert:i,decorationImage:o,children:""===r?Object(S.jsxs)(M,{children:[n&&Object(S.jsx)(c.Vb,{color:"textSubtle",fontWeight:"400",fontSize:"14px",lineHeight:"24px",children:n}),Object(S.jsx)(c.T,{justifyContent:"space-between",children:Object(S.jsx)(c.Vb,{color:i?"text":"secondary",fontWeight:"700",fontSize:"24px",lineHeight:"24px",children:t})})]}):Object(S.jsx)(a.b,{exact:!0,activeClassName:"active",to:r,id:"farm-apr-cta",children:Object(S.jsxs)(M,{children:[n&&Object(S.jsx)(c.Vb,{color:"textSubtle",fontWeight:"400",fontSize:"14px",lineHeight:"24px",children:n}),Object(S.jsxs)(c.T,{justifyContent:"space-between",children:[Object(S.jsx)(c.Vb,{color:i?"text":"secondary",fontWeight:"700",fontSize:"24px",lineHeight:"24px",children:t}),Object(S.jsx)(P,{children:Object(S.jsx)(c.e,{color:i?"background":"primary",width:"32px"})})]})]})})})};const X=r.e.div`
  align-items: stretch;
  justify-content: stretch;
`,_=r.e.div`
  // min-width: 300px
`,G=Object(r.e)(c.i)`
  align-items: start;
  margin-top: 128px;
  margin-bottom: 24px;
  column-gap: 22px;
  row-gap: 24px;

  & > div {
    grid-column: span 6;
  }

  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    & > div {
      grid-column: span 8;
    }
  }

  ${e=>{let{theme:t}=e;return t.mediaQueries.lg}} {
    margin-bottom: 32px;
    grid-gap: 32px;

    & > div {
      grid-column: span 4;
    }
  }
`;var K=()=>{const{t:e}=Object(o.b)();return Object(S.jsx)(s.a,{children:Object(S.jsxs)("div",{children:[Object(S.jsx)(X,{children:Object(S.jsx)(I,{})}),Object(S.jsxs)(G,{children:[Object(S.jsxs)(_,{children:[Object(S.jsx)(c.Vb,{color:"primary",mb:"12px",fontWeight:"600",fontSize:"20px",lineHeight:"24px",children:e("Swap")}),Object(S.jsx)(J,{text:e("1TRC"),title:e("LISTED"),decorationImage:"images/decorations/cryptonews.svg"})]}),Object(S.jsxs)(_,{children:[Object(S.jsx)(c.Vb,{color:"primary",mb:"12px",fontWeight:"600",fontSize:"20px",lineHeight:"24px",children:e("Staking")}),Object(S.jsx)(k,{})]}),Object(S.jsxs)(_,{children:[Object(S.jsx)(c.Vb,{color:"primary",mb:"12px",fontWeight:"600",fontSize:"20px",lineHeight:"24px",children:e("Farming")}),Object(S.jsx)(Y,{})]}),Object(S.jsxs)(_,{children:[Object(S.jsx)(c.Vb,{color:"primary",mb:"12px",fontWeight:"600",fontSize:"20px",lineHeight:"24px",children:e("Launchpad")}),Object(S.jsx)(J,{text:e("1TRC Live Now!")})]}),Object(S.jsxs)(_,{children:[Object(S.jsx)(c.Vb,{color:"primary",mb:"12px",fontWeight:"600",fontSize:"20px",lineHeight:"24px",children:e("Lending & Borrowing")}),Object(S.jsx)(J,{text:e("Comming Soon")})]}),Object(S.jsxs)(_,{children:[Object(S.jsx)(c.Vb,{color:"primary",mb:"12px",fontWeight:"600",fontSize:"20px",lineHeight:"24px",children:e("Advertising")}),Object(S.jsx)(J,{text:e("Advertise your projects here"),redirect:"/advert",invert:!0})]})]})]})})}}}]);
//# sourceMappingURL=25.8c76736f.chunk.js.map