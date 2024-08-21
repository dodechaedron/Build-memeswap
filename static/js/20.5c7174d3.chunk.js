(this["webpackJsonp1tronic-frontend"]=this["webpackJsonp1tronic-frontend"]||[]).push([[20],{1462:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return E}));var n,o=c(2),r=c(6),i=c(3),l=c(4),j=c(10),d=c(96),s=c(24),b=c(45),a=c(361),x=c(15),O=c(259),u=c(124),h=c(23),p=c(52),g=c(87),f=c(868),m=c(149),v=c(208),y=c(182),T=c(236),I=c(0);!function(e){e[e.TOKEN0=0]="TOKEN0",e[e.TOKEN1=1]="TOKEN1"}(n||(n={}));const k=Object(l.e)(i.q)`
  background-color: ${e=>{let{theme:t}=e;return t.colors.input}};
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  :hover{
    div{
      color: ${e=>{let{theme:t}=e;return t.colors.background}};
      div{
        color: ${e=>{let{theme:t}=e;return t.colors.background}};
      }
    }    
  }
  box-shadow: none;
  border-radius: 8px;;
`;function E(){var e;const{account:t}=Object(h.a)(),{t:c}=Object(j.b)(),[l,E]=Object(o.useState)(n.TOKEN1),[N,S]=Object(o.useState)(r.d),[V,A]=Object(o.useState)(null),[C,w]=Object(u.b)(null!==N&&void 0!==N?N:void 0,null!==V&&void 0!==V?V:void 0),K=Object(p.f)();Object(o.useEffect)((()=>{w&&K(w)}),[w,K]);const $=C===u.a.NOT_EXISTS||Boolean(C===u.a.EXISTS&&w&&r.e.equal(w.reserve0.raw,r.e.BigInt(0))&&r.e.equal(w.reserve1.raw,r.e.BigInt(0))),q=Object(g.d)(null!==t&&void 0!==t?t:void 0,null===w||void 0===w?void 0:w.liquidityToken),B=Boolean(q&&r.e.greaterThan(q.raw,r.e.BigInt(0))),L=Object(o.useCallback)((e=>{l===n.TOKEN0?S(e):A(e)}),[l]),F=Object(I.jsx)(d.b,{padding:"45px 10px",children:Object(I.jsx)(i.Vb,{textAlign:"center",children:c(t?"Select a token to find your liquidity.":"Connect to a wallet to find pools")})}),[X]=Object(i.rc)(Object(I.jsx)(O.a,{onCurrencySelect:L,showCommonBases:!0,selectedCurrency:null!==(e=l===n.TOKEN0?V:N)&&void 0!==e?e:void 0}),!0,!0,"selectCurrencyModal");return Object(I.jsx)(T.a,{children:Object(I.jsxs)(y.a,{children:[Object(I.jsx)(y.b,{title:c("Import Pool"),subtitle:c("Import an existing pool"),backTo:"/pool"}),Object(I.jsxs)(s.a,{style:{padding:"1rem"},gap:"md",children:[Object(I.jsx)(k,{endIcon:Object(I.jsx)(i.F,{}),onClick:()=>{X(),E(n.TOKEN0)},children:N?Object(I.jsxs)(x.d,{children:[Object(I.jsx)(b.a,{currency:N}),Object(I.jsx)(i.Vb,{ml:"8px",children:N.symbol})]}):Object(I.jsx)(i.Vb,{ml:"8px",children:c("Select a Token")})}),Object(I.jsx)(s.b,{children:Object(I.jsx)(i.a,{})}),Object(I.jsx)(k,{endIcon:Object(I.jsx)(i.F,{}),onClick:()=>{X(),E(n.TOKEN1)},children:V?Object(I.jsxs)(x.d,{children:[Object(I.jsx)(b.a,{currency:V}),Object(I.jsx)(i.Vb,{ml:"8px",children:V.symbol})]}):Object(I.jsx)(i.Vb,{as:x.d,children:c("Select a Token")})}),B&&Object(I.jsxs)(s.b,{style:{justifyItems:"center",backgroundColor:"",padding:"12px 0px",borderRadius:"12px"},children:[Object(I.jsx)(i.Vb,{textAlign:"center",children:c("Pool Found!")}),Object(I.jsx)(f.a,{to:"/pool",children:Object(I.jsx)(i.Vb,{textAlign:"center",children:c("Manage this pool.")})})]}),N&&V?C===u.a.EXISTS?B&&w?Object(I.jsx)(a.a,{pair:w}):Object(I.jsx)(d.b,{padding:"45px 10px",children:Object(I.jsxs)(s.a,{gap:"sm",justify:"center",children:[Object(I.jsx)(i.Vb,{textAlign:"center",children:c("You don\u2019t have liquidity in this pool yet.")}),Object(I.jsx)(f.a,{to:`/add/${Object(m.a)(N)}/${Object(m.a)(V)}`,children:Object(I.jsx)(i.Vb,{textAlign:"center",children:c("Add Liquidity")})})]})}):$?Object(I.jsx)(d.b,{padding:"45px 10px",children:Object(I.jsxs)(s.a,{gap:"sm",justify:"center",children:[Object(I.jsx)(i.Vb,{textAlign:"center",children:c("No pool found.")}),Object(I.jsx)(f.a,{to:`/add/${Object(m.a)(N)}/${Object(m.a)(V)}`,children:c("Create pool.")})]})}):C===u.a.INVALID?Object(I.jsx)(d.b,{padding:"45px 10px",children:Object(I.jsx)(s.a,{gap:"sm",justify:"center",children:Object(I.jsx)(i.Vb,{textAlign:"center",fontWeight:500,children:c("Invalid pair.")})})}):C===u.a.LOADING?Object(I.jsx)(d.b,{padding:"45px 10px",children:Object(I.jsx)(s.a,{gap:"sm",justify:"center",children:Object(I.jsxs)(i.Vb,{textAlign:"center",children:[c("Loading"),Object(I.jsx)(v.a,{})]})})}):null:F]})]})})}},868:function(e,t,c){"use strict";var n=c(59),o=c(4);const r=Object(o.e)(n.a)`
  text-decoration: none;
  cursor: pointer;
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
  font-weight: 500;

  :hover {
    text-decoration: underline;
  }

  :focus {
    outline: none;
    text-decoration: underline;
  }

  :active {
    text-decoration: none;
  }
`;t.a=r}}]);
//# sourceMappingURL=20.5c7174d3.chunk.js.map