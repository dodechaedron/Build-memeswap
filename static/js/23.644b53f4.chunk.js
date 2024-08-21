(this["webpackJsonp1tronic-frontend"]=this["webpackJsonp1tronic-frontend"]||[]).push([[23],{1463:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return T}));var c=n(2),i=n(59),r=n(4),o=n(29),a=n(3),l=n(102),s=n(10),d=n(869),b=n(229),u=n(359),j=n(186),p=n(257),x=n(70),h=n(0);const f=r.f`
  0% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 100%;
  }
  100% {
    background-position: 50% 0%;
  }
`,O=r.e.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,g=Object(r.e)(a.x)`
  background: ${e=>{let{background:t}=e;return`url(${t})`}};
  background-size: cover;
  background-repeat: no-repeat;
  height: 130px;
  border-radius: ${e=>{let{theme:t}=e;return`${t.radii.card} ${t.radii.card} 0 0`}};
`,m=Object(r.e)(a.u)`
  width: 50%;
  max-width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-self: baseline;
  position: relative;
  color: ${e=>{let{isFinished:t,theme:n}=e;return n.colors[t?"textDisabled":"secondary"]}};
  box-shadow: 0px 1px 4px rgba(25, 19, 38, 0.15);

  ${e=>{let{isPromoted:t,theme:n}=e;return t?r.d`
          background: linear-gradient(180deg, ${n.colors.primaryBright}, ${n.colors.secondary});
          padding: 1px 1px 3px 1px;
          background-size: 400% 400%;
        `:`background: ${e=>e.theme.card.background};`}}

  ${e=>{let{isPromoted:t}=e;return t&&t.isDesktop&&r.d`
      animation: ${f} 3s ease infinite;
    `}}
`,v=Object(r.e)(a.m)`
  background: ${e=>{let{theme:t}=e;return t.card.background}};
  border-radius: ${e=>{let{theme:t}=e;return t.radii.card}};
`;function T(e){let{match:{params:{projectId:t}}}=e;const{t:n}=Object(s.b)(),{account:r}=Object(o.c)(),{launchpads:f}=Object(d.d)(r),T=f.filter((e=>e.projectId===parseInt(t)))[0],{currencyBalances:y,currencies:I,parsedAmount:k}=Object(d.a)(),{onCurrencySelection:S,onUserInput:C}=Object(d.b)(),{typedValue:U}=Object(d.c)(),P=Object(p.a)(y[x.a.INPUT]),w=Boolean(P&&(null===k||void 0===k?void 0:k.equalTo(P))),V=Object(c.useCallback)((e=>{C(x.a.INPUT,e)}),[C]),B=Object(c.useCallback)((()=>{P&&C(x.a.INPUT,P.toExact())}),[P,C]),$=Object(c.useCallback)((e=>{S(x.a.INPUT,e)}),[S]);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(u.a,{children:Object(h.jsx)(a.T,{justifyContent:"space-between",flexDirection:["column",null,null,"row"],children:Object(h.jsxs)(a.T,{alignItems:"center",children:[Object(h.jsx)(a.Y,{as:i.a,to:"/launchpads",children:Object(h.jsx)(a.b,{width:"32px"})}),Object(h.jsxs)(a.T,{flex:"1",flexDirection:"column",mr:["8px",0],children:[Object(h.jsx)(a.V,{as:"h1",scale:"xl",color:"primary",mb:"24px",children:T.projectTitle}),Object(h.jsx)(a.Vb,{color:"text",fontWeight:"400",fontSize:"24px",lineHeight:"24px",children:T.projectTagline})]})]})})}),Object(h.jsx)(b.a,{children:Object(h.jsx)(O,{children:Object(h.jsx)(m,{isFinished:"ended"===T.status,ribbon:Object(h.jsx)(a.y,{variantColor:"ended"===T.status?"textSubtle":"secondary",text:T.status}),children:Object(h.jsxs)(v,{children:[Object(h.jsx)(g,{isFinished:!1,background:T.projectBannerUrl}),Object(h.jsxs)(a.v,{children:[Object(h.jsx)(a.T,{mb:"24px",flexDirection:"column",children:Object(h.jsx)(j.a,{label:n("Amount"),value:U,showMaxButton:!w,currency:I[x.a.INPUT],onUserInput:V,onMax:B,onCurrencySelect:$,id:"launchpad-currency-input"})}),r?Object(h.jsx)(a.q,{disabled:!(parseInt(U)>0)||!I[x.a.INPUT],variant:"primary",width:"100%",mb:"24px",children:parseInt(U)>0?I[x.a.INPUT]?n("Participate"):n("Select a token"):n("Enter an amount")}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(a.Vb,{mb:"10px",textTransform:"uppercase",fontSize:"12px",color:"textSubtle",bold:!0,children:n("Participate")}),Object(h.jsx)(l.a,{})]}),Object(h.jsxs)(a.T,{alignItems:"center",justifyContent:"space-between",children:[Object(h.jsx)(a.Vb,{color:"textSubtle",fontWeight:"400",fontSize:"14px",lineHeight:"16px",children:n("Amount :")}),Object(h.jsxs)(a.Vb,{color:"secondary",fontWeight:"800",fontSize:"16px",lineHeight:"16px",children:[T.amount,T.symbol]})]}),Object(h.jsxs)(a.T,{alignItems:"center",justifyContent:"space-between",children:[Object(h.jsx)(a.Vb,{color:"textSubtle",fontWeight:"400",fontSize:"14px",lineHeight:"16px",children:n("Time :")}),Object(h.jsx)(a.Vb,{color:"secondary",fontWeight:"800",fontSize:"16px",lineHeight:"16px",children:n("0 (07.19 7:00 UTC)")})]}),Object(h.jsxs)(a.T,{alignItems:"center",justifyContent:"space-between",children:[Object(h.jsx)(a.Vb,{color:"textSubtle",fontWeight:"400",fontSize:"14px",lineHeight:"16px",children:n("Supported Coin:")}),Object(h.jsx)(a.Vb,{color:"secondary",fontWeight:"800",fontSize:"16px",lineHeight:"16px",children:T.supportedCoin[0]})]}),Object(h.jsxs)(a.T,{alignItems:"center",justifyContent:"space-between",children:[Object(h.jsx)(a.Vb,{color:"textSubtle",fontWeight:"400",fontSize:"14px",lineHeight:"16px",children:n("Price:")}),Object(h.jsxs)(a.Vb,{color:"secondary",fontWeight:"800",fontSize:"16px",lineHeight:"16px",children:[T.price,T.supportedCoin[0]]})]}),Object(h.jsxs)(a.T,{alignItems:"center",justifyContent:"space-between",children:[Object(h.jsx)(a.Vb,{color:"textSubtle",fontWeight:"400",fontSize:"14px",lineHeight:"16px",children:n("Start Block:")}),Object(h.jsx)(a.Vb,{color:"secondary",fontWeight:"800",fontSize:"16px",lineHeight:"16px",children:T.startBlock})]}),Object(h.jsx)(a.T,{alignItems:"center",justifyContent:"space-between",mt:"16px",children:Object(h.jsx)(a.Vb,{color:"textSubtle",fontWeight:"400",fontSize:"14px",lineHeight:"16px",textAlign:"justify",mb:"16px",children:T.projectDescription})}),Object(h.jsx)(a.T,{mb:"2px",justifyContent:"flex-end",mt:"16px",children:Object(h.jsx)(a.fb,{href:T.projectWebsiteUrl,bold:!1,small:!0,children:n("View Project Site")})})]})]})})})})]})}},869:function(e,t,n){"use strict";n.d(t,"c",(function(){return g})),n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return y})),n.d(t,"d",(function(){return I}));var c=n(133),i=n(6),r=n(2),o=n(27),a=n(164),l=n(23),s=n(44),d=n(165),b=(n(373),n(30)),u=n(71),j=n(156),p=n(55),x=n(87),h=n(70),f=n(52),O=n(374);function g(){return Object(o.c)((e=>e.launchpad))}function m(){const e=Object(o.b)(),t=Object(r.useCallback)(((t,n)=>{e(Object(h.c)({field:t,currencyId:n instanceof i.j?n.address:n===i.d?"BNB":""}))}),[e]);return{onSwitchTokens:Object(r.useCallback)((()=>{e(Object(h.e)())}),[e]),onCurrencySelection:t,onUserInput:Object(r.useCallback)(((t,n)=>{e(Object(h.f)({field:t,typedValue:n}))}),[e]),onChangeRecipient:Object(r.useCallback)((t=>{e(Object(h.d)({recipient:t}))}),[e])}}const v=["0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f","0xf164fC0Ec4E93095b804a4795bBe1e041497b92a","0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"];function T(e,t){return e.route.path.some((e=>e.address===t))||e.route.pairs.some((e=>e.liquidityToken.address===t))}function y(){var e,t;const{account:n}=Object(l.a)(),{independentField:r,typedValue:o,[h.a.INPUT]:{currencyId:j},[h.a.OUTPUT]:{currencyId:p},recipient:O}=g(),m=Object(s.c)(j),y=Object(s.c)(p),I=Object(a.a)(null!==O&&void 0!==O?O:void 0),k=null!==(e=null===O?n:I.address)&&void 0!==e?e:null,S=Object(x.c)(null!==n&&void 0!==n?n:void 0,[null!==m&&void 0!==m?m:void 0,null!==y&&void 0!==y?y:void 0]),C=r===h.a.INPUT,U=function(e,t){if(e&&t)try{const n=Object(c.parseUnits)(e,t.decimals).toString();if("0"!==n)return t instanceof i.j?new i.k(t,i.e.BigInt(n)):i.c.ether(i.e.BigInt(n))}catch(n){console.debug(`Failed to parse input amount: "${e}"`,n)}}(o,null!==(t=C?m:y)&&void 0!==t?t:void 0),P=Object(d.b)(C?U:void 0,null!==y&&void 0!==y?y:void 0),w=Object(d.c)(null!==m&&void 0!==m?m:void 0,C?void 0:U),V=C?P:w,B={[h.a.INPUT]:S[0],[h.a.OUTPUT]:S[1]},$={[h.a.INPUT]:null!==m&&void 0!==m?m:void 0,[h.a.OUTPUT]:null!==y&&void 0!==y?y:void 0};let z;var N,W;(n||(z="Connect Wallet"),U)||(z=null!==(N=z)&&void 0!==N?N:"Enter an amount");$[h.a.INPUT]&&$[h.a.OUTPUT]||(z=null!==(W=z)&&void 0!==W?W:"Select a token");const D=Object(b.h)(k);var H;if(k&&D){if(-1!==v.indexOf(D)||P&&T(P,D)||w&&T(w,D)){var E;z=null!==(E=z)&&void 0!==E?E:"Invalid recipient"}}else z=null!==(H=z)&&void 0!==H?H:"Enter a recipient";const[F]=Object(f.j)(),A=V&&F&&Object(u.a)(V,F),[L,q]=[B[h.a.INPUT],A?A[h.a.INPUT]:null];return L&&q&&L.lessThan(q)&&(z=`Insufficient ${q.currency.symbol} balance`),{currencies:$,currencyBalances:B,parsedAmount:U,v2Trade:null!==V&&void 0!==V?V:void 0,inputError:z}}const I=e=>{const{fastRefresh:t}=Object(j.a)(),n=Object(p.b)();Object(r.useEffect)((()=>{e&&n(Object(O.b)(e))}),[e,n,t]);const{launchpads:c,userDataLoaded:i}=Object(o.c)((e=>({launchpads:e.launchpad.data,userDataLoaded:e.launchpad.userDataLoaded})));return{launchpads:c,userDataLoaded:i}}}}]);
//# sourceMappingURL=23.644b53f4.chunk.js.map