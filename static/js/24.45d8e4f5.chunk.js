(this["webpackJsonp1tronic-frontend"]=this["webpackJsonp1tronic-frontend"]||[]).push([[24],{1481:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n(4),i=n(29),o=n(3),a=n(234),l=n.n(a),s=n(10),d=n(869),u=n(371),b=n(229),j=n(359),x=n(376),p=n(372),h=n(59),O=n(102);const f=r.f`
  0% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 100%;
  }
  100% {
    background-position: 50% 0%;
  }
`,m=Object(r.e)(o.u)`
  max-width: 352px;
  margin: 0 8px 24px;
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

  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    margin: 0 12px 46px;
  }
`,g=Object(r.e)(o.m)`
  background: ${e=>{let{theme:t}=e;return t.card.background}};
  border-radius: ${e=>{let{theme:t}=e;return t.radii.card}};
`;var v=n(0);const T=Object(r.e)(o.x)`
  background: ${e=>{let{background:t}=e;return`url(${t})`}};
  background-size: cover;
  background-repeat: no-repeat;
  height: 90px;
  border-radius: ${e=>{let{theme:t}=e;return`${t.radii.card} ${t.radii.card} 0 0`}};
`;var y=e=>{let{launchpad:t,account:n}=e;const{projectId:c,projectTitle:r,projectTagline:i,projectBannerUrl:a,symbol:l,amount:d,status:u}=t,{t:b}=Object(s.b)();return Object(v.jsx)(m,{isFinished:"ended"===u,ribbon:Object(v.jsx)(o.y,{variantColor:"ended"===u?"textSubtle":"secondary",text:u}),children:Object(v.jsxs)(g,{children:[Object(v.jsx)(T,{isFinished:!1,background:a}),Object(v.jsxs)(o.v,{children:[Object(v.jsx)(o.T,{alignItems:"center",justifyContent:"space-between",children:Object(v.jsxs)(o.T,{flexDirection:"column",children:[Object(v.jsx)(o.V,{color:"primary",scale:"lg",children:r}),Object(v.jsx)(o.Vb,{color:"text",mt:"8px",mb:"8px",children:i})]})}),Object(v.jsxs)(o.T,{alignItems:"center",justifyContent:"space-between",children:[Object(v.jsx)(o.Vb,{color:"textSubtle",fontWeight:"400",fontSize:"14px",lineHeight:"16px",children:b("Amount :")}),Object(v.jsxs)(o.Vb,{color:"secondary",fontWeight:"800",fontSize:"16px",lineHeight:"16px",children:[d,l]})]}),Object(v.jsxs)(o.T,{alignItems:"center",justifyContent:"space-between",children:[Object(v.jsx)(o.Vb,{color:"textSubtle",fontWeight:"400",fontSize:"14px",lineHeight:"16px",children:b("Time :")}),Object(v.jsx)(o.Vb,{color:"secondary",fontWeight:"800",fontSize:"16px",lineHeight:"16px",children:b("0 (07.19 7:00 UTC)")})]}),Object(v.jsx)(o.T,{mt:"24px",flexDirection:"column",children:n?Object(v.jsx)(o.q,{as:h.a,to:`/launchpad/${c}`,variant:"primary",width:"100%",mb:"8px",children:b("Participate")}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(o.Vb,{mb:"10px",textTransform:"uppercase",fontSize:"12px",color:"textSubtle",bold:!0,children:b("Participate")}),Object(v.jsx)(O.a,{})]})})]})]})})};const k=Object(r.e)(u.a)`
  justify-content: center;
`,S=Object(r.e)(o.T)`
  flex-direction: column;
  margin-bottom: 24px;
  ${e=>{let{theme:t}=e;return t.mediaQueries.md}} {
    flex-direction: row;
  }
`,w=Object(r.e)(o.T)`
  gap: 10px;
  justify-content: space-between;
`,C=Object(r.e)(o.T)`
  > div {
    flex: 1;
  }
`;t.default=()=>{const{t:e}=Object(s.b)(),{account:t}=Object(i.c)(),{launchpads:n}=Object(d.d)(t),[r,a]=Object(c.useState)(12),[u,h]=Object(c.useState)(!1),O=Object(c.useRef)(null),[f,m]=Object(c.useState)(""),[g,T]=Object(c.useState)("hot");Object(c.useEffect)((()=>{if(!u){new IntersectionObserver((e=>{const[t]=e;t.isIntersecting&&a((e=>e+12))}),{rootMargin:"0px",threshold:1}).observe(O.current),h(!0)}}),[u]);return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(j.a,{children:Object(v.jsx)(o.T,{justifyContent:"space-between",flexDirection:["column",null,null,"row"],children:Object(v.jsxs)(o.T,{flex:"1",flexDirection:"column",mr:["8px",0],children:[Object(v.jsx)(o.V,{as:"h1",scale:"xl",color:"primary",mb:"24px",children:e("Lauchpad")}),Object(v.jsx)(o.Vb,{color:"text",fontWeight:"400",fontSize:"24px",lineHeight:"24px",children:e("Participate in new project.")})]})})}),Object(v.jsxs)(b.a,{children:[Object(v.jsx)(S,{justifyContent:"flex-end",children:Object(v.jsxs)(w,{children:[Object(v.jsxs)(o.T,{flexDirection:"column",width:"50%",children:[Object(v.jsx)(o.Vb,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",children:e("Sort by")}),Object(v.jsx)(C,{children:Object(v.jsx)(p.a,{options:[{label:e("Hot"),value:"hot"},{label:e("amount"),value:"amount"}],onChange:e=>{T(e.value)}})})]}),Object(v.jsxs)(o.T,{flexDirection:"column",width:"50%",children:[Object(v.jsx)(o.Vb,{fontSize:"12px",bold:!0,color:"textSubtle",textTransform:"uppercase",children:e("Search")}),Object(v.jsx)(C,{children:Object(v.jsx)(x.a,{onChange:e=>{m(e.target.value)},placeholder:"Search Launchpads"})})]})]})}),Object(v.jsx)(k,{children:(()=>{let e=[];if(e=n,f){const t=f.toLowerCase();e=n.filter((e=>e.projectTitle.toLowerCase().includes(t)))}return(e=>{switch(g){case"amount":return l()(e,(e=>e.amount),"desc");default:return e}})(e).slice(0,r)})().map((e=>Object(v.jsx)(y,{launchpad:e,account:t},e.projectId)))}),Object(v.jsx)("div",{ref:O}),Object(v.jsx)(o.Z,{mx:"auto",mt:"12px",src:"/images/decorations/3d-syrup-bunnies.png",alt:"Pancake illustration",width:192,height:184.5})]})]})}},869:function(e,t,n){"use strict";n.d(t,"c",(function(){return m})),n.d(t,"b",(function(){return g})),n.d(t,"a",(function(){return y})),n.d(t,"d",(function(){return k}));var c=n(133),r=n(6),i=n(2),o=n(27),a=n(164),l=n(23),s=n(44),d=n(165),u=(n(373),n(30)),b=n(71),j=n(156),x=n(55),p=n(87),h=n(70),O=n(52),f=n(374);function m(){return Object(o.c)((e=>e.launchpad))}function g(){const e=Object(o.b)(),t=Object(i.useCallback)(((t,n)=>{e(Object(h.c)({field:t,currencyId:n instanceof r.j?n.address:n===r.d?"BNB":""}))}),[e]);return{onSwitchTokens:Object(i.useCallback)((()=>{e(Object(h.e)())}),[e]),onCurrencySelection:t,onUserInput:Object(i.useCallback)(((t,n)=>{e(Object(h.f)({field:t,typedValue:n}))}),[e]),onChangeRecipient:Object(i.useCallback)((t=>{e(Object(h.d)({recipient:t}))}),[e])}}const v=["0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f","0xf164fC0Ec4E93095b804a4795bBe1e041497b92a","0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"];function T(e,t){return e.route.path.some((e=>e.address===t))||e.route.pairs.some((e=>e.liquidityToken.address===t))}function y(){var e,t;const{account:n}=Object(l.a)(),{independentField:i,typedValue:o,[h.a.INPUT]:{currencyId:j},[h.a.OUTPUT]:{currencyId:x},recipient:f}=m(),g=Object(s.c)(j),y=Object(s.c)(x),k=Object(a.a)(null!==f&&void 0!==f?f:void 0),S=null!==(e=null===f?n:k.address)&&void 0!==e?e:null,w=Object(p.c)(null!==n&&void 0!==n?n:void 0,[null!==g&&void 0!==g?g:void 0,null!==y&&void 0!==y?y:void 0]),C=i===h.a.INPUT,I=function(e,t){if(e&&t)try{const n=Object(c.parseUnits)(e,t.decimals).toString();if("0"!==n)return t instanceof r.j?new r.k(t,r.e.BigInt(n)):r.c.ether(r.e.BigInt(n))}catch(n){console.debug(`Failed to parse input amount: "${e}"`,n)}}(o,null!==(t=C?g:y)&&void 0!==t?t:void 0),U=Object(d.b)(C?I:void 0,null!==y&&void 0!==y?y:void 0),$=Object(d.c)(null!==g&&void 0!==g?g:void 0,C?void 0:I),P=C?U:$,D={[h.a.INPUT]:w[0],[h.a.OUTPUT]:w[1]},V={[h.a.INPUT]:null!==g&&void 0!==g?g:void 0,[h.a.OUTPUT]:null!==y&&void 0!==y?y:void 0};let B;var z,F;(n||(B="Connect Wallet"),I)||(B=null!==(z=B)&&void 0!==z?z:"Enter an amount");V[h.a.INPUT]&&V[h.a.OUTPUT]||(B=null!==(F=B)&&void 0!==F?F:"Select a token");const E=Object(u.h)(S);var L;if(S&&E){if(-1!==v.indexOf(E)||U&&T(U,E)||$&&T($,E)){var N;B=null!==(N=B)&&void 0!==N?N:"Invalid recipient"}}else B=null!==(L=B)&&void 0!==L?L:"Enter a recipient";const[H]=Object(O.j)(),W=P&&H&&Object(b.a)(P,H),[A,R]=[D[h.a.INPUT],W?W[h.a.INPUT]:null];return A&&R&&A.lessThan(R)&&(B=`Insufficient ${R.currency.symbol} balance`),{currencies:V,currencyBalances:D,parsedAmount:I,v2Trade:null!==P&&void 0!==P?P:void 0,inputError:B}}const k=e=>{const{fastRefresh:t}=Object(j.a)(),n=Object(x.b)();Object(i.useEffect)((()=>{e&&n(Object(f.b)(e))}),[e,n,t]);const{launchpads:c,userDataLoaded:r}=Object(o.c)((e=>({launchpads:e.launchpad.data,userDataLoaded:e.launchpad.userDataLoaded})));return{launchpads:c,userDataLoaded:r}}}}]);
//# sourceMappingURL=24.45d8e4f5.chunk.js.map