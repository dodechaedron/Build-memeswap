(this["webpackJsonp1tronic-frontend"]=this["webpackJsonp1tronic-frontend"]||[]).push([[22],{1475:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n(4),i=n(3),s=n(10),o=n(229),a=n(234),d=n.n(a),l=n(29),b=n(142),j=n(55),u=n(356),O=n(771),p=n(227);var f=r.e.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`,m=n(51),h=n(233),x=n(82),g=n(33),v=n(0);const y=Object(r.e)(i.Vb)`
  font-weight: 600;
`,w=r.e.div`
  margin-bottom: 16px;
`,k=r.e.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 8px;
`,C=r.e.label`
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  display: block;
  margin-bottom: 8px;
  margin-top: 24px;
`;var S=e=>{let{nft:t,tokenIds:n,onSuccess:r,onDismiss:o}=e;const[a,d]=Object(c.useState)(!1),[b,j]=Object(c.useState)(""),[u,O]=Object(c.useState)(null),{t:p}=Object(s.b)(),{account:S}=Object(l.c)(),I=Object(g.i)(Object(h.a)(t.type)),{toastSuccess:N}=Object(x.a)();return Object(v.jsxs)(i.rb,{title:p("Transfer NFT"),onDismiss:o,children:[Object(v.jsxs)(w,{children:[u&&Object(v.jsx)(i.Vb,{color:"failure",mb:"8px",children:u}),Object(v.jsxs)(f,{children:[Object(v.jsxs)(i.Vb,{children:[p("Transferring"),":"]}),Object(v.jsx)(y,{children:p("1x %nftName% NFT",{nftName:t.name})})]}),Object(v.jsxs)(C,{htmlFor:"transferAddress",children:[p("Receiving address"),":"]}),Object(v.jsx)(i.bb,{id:"transferAddress",name:"address",type:"text",placeholder:p("Paste address"),value:b,onChange:e=>{const{value:t}=e.target;j(t)},isWarning:u,disabled:a})]}),Object(v.jsxs)(k,{children:[Object(v.jsx)(i.q,{width:"100%",variant:"secondary",onClick:o,children:p("Cancel")}),Object(v.jsx)(i.q,{width:"100%",onClick:async()=>{try{if(m.a.utils.isAddress(b)){const e=await I.transferFrom(S,b,n[0]);d(!0);(await e.wait()).status?(o(),r(),N(p("NFT successfully transferred!"))):(O(p("Unable to transfer NFT")),d(!1))}else O(p("Please enter a valid wallet address"))}catch(e){console.error("Unable to transfer NFT:",e)}},disabled:!S||a||!b,children:p("Confirm")})]})]})};const I=r.e.div`
  margin-bottom: 16px;
`,N=r.e.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 8px;
`;var T=e=>{let{nft:t,onSuccess:n,onClaim:r,onDismiss:o}=e;const[a,d]=Object(c.useState)(!1),{t:b}=Object(s.b)(),{account:j}=Object(l.c)(),{toastError:u,toastSuccess:O}=Object(x.a)();return Object(v.jsxs)(i.rb,{title:b("Claim Collectible"),onDismiss:o,children:[Object(v.jsx)(I,{children:Object(v.jsxs)(i.T,{alignItems:"center",mb:"8px",justifyContent:"space-between",children:[Object(v.jsxs)(i.Vb,{children:[b("You will receive"),":"]}),Object(v.jsx)(i.Vb,{bold:!0,children:b("1x %nftName% Collectible",{nftName:t.name})})]})}),Object(v.jsxs)(N,{children:[Object(v.jsx)(i.q,{width:"100%",variant:"secondary",onClick:o,children:b("Cancel")}),Object(v.jsx)(i.q,{width:"100%",onClick:async()=>{const e=await r();d(!0);(await e.wait()).status?(O(b("Successfully claimed!")),o(),n()):(u(b("Error"),b("Please try again. Confirm the transaction and make sure you are paying enough gas!")),d(!1))},disabled:!j,isLoading:a,endIcon:a?Object(v.jsx)(i.g,{color:"currentColor",spin:!0}):null,children:b("Confirm")})]})]})};const F=r.e.div`
  background-color: ${e=>{let{theme:t}=e;return t.colors.cardBorder}};
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-bottom: 100%;
`,P=r.e.img`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  transition: opacity 1s linear;
  height: 100%;
  object-fit: cover;
  border-radius: 24px 24px 0 0;
`,B=r.e.video`
  height: 100%;
  width: 100%;
`;var q=e=>{let{nft:t,isOwned:n=!1}=e;const{images:c,name:r,video:i}=t,s=`/images/nfts/${c.lg}`;if(i){const e=Object(v.jsxs)(B,{autoPlay:!0,controls:!1,loop:!0,muted:!0,poster:s,children:[Object(v.jsx)("source",{src:i.webm,type:"video/webm"}),Object(v.jsx)("source",{src:i.mp4,type:"video/mp4"})]});return n?Object(v.jsx)("a",{href:c.ipfs,target:"_blank",rel:"noreferrer noopener",children:e}):e}const o=Object(v.jsx)(P,{src:s,alt:r});return Object(v.jsx)(F,{children:n?Object(v.jsx)("a",{href:c.ipfs,target:"_blank",rel:"noreferrer noopener",children:o}):o})};const V=Object(r.e)(f)`
  min-height: 28px;
`,A=Object(r.e)(i.q).attrs({variant:"text"})`
  height: auto;
  padding: 16px 24px;

  &:hover:not(:disabled):not(:active) {
    background-color: transparent;
  }

  &:focus:not(:active) {
    box-shadow: none;
  }
`,$=r.e.div`
  padding: 24px;
`;var D=e=>{var t;let{nft:n,canClaim:r=!1,tokenIds:o=[],onClaim:a,refresh:d}=e;const[l,b]=Object(c.useState)(!1),{t:j}=Object(s.b)(),{profile:u}=Object(p.b)(),{identifier:O,name:f,description:m}=n,h=o.length>0,x=l?i.I:i.F,g=()=>{d()},[y]=Object(i.rc)(Object(v.jsx)(S,{nft:n,tokenIds:o,onSuccess:g})),[w]=Object(i.rc)(Object(v.jsx)(T,{nft:n,onSuccess:g,onClaim:a}));return Object(v.jsxs)(i.u,{isActive:h,children:[Object(v.jsx)(q,{nft:n,isOwned:h}),Object(v.jsxs)(i.v,{children:[Object(v.jsxs)(V,{children:[Object(v.jsx)(i.V,{children:f}),h&&Object(v.jsx)(i.Tb,{outline:!0,variant:"secondary",children:j("In Wallet")}),(null===u||void 0===u||null===(t=u.nft)||void 0===t?void 0:t.identifier)===O&&Object(v.jsx)(i.Tb,{outline:!0,variant:"success",children:j("Profile Pic")})]}),r&&Object(v.jsx)(i.q,{width:"100%",mt:"24px",onClick:w,children:j("Claim this NFT")}),h&&Object(v.jsx)(i.q,{width:"100%",variant:"secondary",mt:"24px",onClick:y,children:j("Transfer")})]}),Object(v.jsxs)(i.w,{p:"0",children:[Object(v.jsx)(A,{width:"100%",endIcon:Object(v.jsx)(x,{width:"24px",color:"primary"}),onClick:async()=>{b(!l)},children:j("Details")}),l&&Object(v.jsx)($,{children:Object(v.jsx)(i.Vb,{as:"p",color:"textSubtle",style:{textAlign:"center"},children:j(m)})})]})]})};var E=r.e.div`
  display: grid;
  grid-gap: 32px;
  grid-template-columns: 1fr;
  padding-bottom: 24px;
  padding-top: 24px;

  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${e=>{let{theme:t}=e;return t.mediaQueries.md}} {
    grid-template-columns: repeat(3, 1fr);
  }
`;const L={"easter-storm":1,"easter-flipper":2,"easter-caker":3};var R=e=>{let{nft:t,...n}=e;const[r,i]=Object(c.useState)(!1),{account:s}=Object(l.c)(),{profile:o}=Object(p.b)(),{identifier:a}=t,{team:d}=null!==o&&void 0!==o?o:{},b=Object(g.j)();return Object(c.useEffect)((()=>{s&&d&&(async()=>{const e=await b.canClaim(s);i(!!e&&d.id===L[a])})()}),[s,a,d,b,i]),Object(v.jsx)(D,{nft:t,...n,canClaim:r,onClaim:async()=>{const e=await b.mintNFT();return await e.wait(),e}})};const W={"easter-storm":R,"easter-flipper":R,"easter-caker":R};var z=()=>{const{tokenIds:e}=Object(O.b)(),t=Object(j.b)(),{account:n}=Object(l.c)(),c=()=>{t(Object(u.b)(n))};return Object(v.jsx)(E,{children:d()(b.b,"sortOrder").map((t=>{const n=W[t.identifier]||D;return Object(v.jsx)("div",{children:Object(v.jsx)(n,{nft:t,tokenIds:e[t.identifier],refresh:c})},t.name)}))})};const H=r.e.div`
  border-bottom: 2px solid ${e=>{let{theme:t}=e;return t.colors.textSubtle}};
  margin-bottom: 24px;
  padding-bottom: 32px;
`;t.default=()=>{const{t:e}=Object(s.b)();return Object(v.jsxs)(o.a,{children:[Object(v.jsx)(H,{children:Object(v.jsx)(i.V,{as:"h1",scale:"xxl",color:"secondary",children:e("Pancake Collectibles")})}),Object(v.jsx)(z,{})]})}},771:function(e,t,n){"use strict";n.d(t,"o",(function(){return j})),n.d(t,"a",(function(){return u})),n.d(t,"i",(function(){return O})),n.d(t,"e",(function(){return p})),n.d(t,"r",(function(){return f})),n.d(t,"q",(function(){return m})),n.d(t,"c",(function(){return h})),n.d(t,"h",(function(){return x})),n.d(t,"p",(function(){return g})),n.d(t,"m",(function(){return v})),n.d(t,"g",(function(){return y})),n.d(t,"d",(function(){return w})),n.d(t,"l",(function(){return k})),n.d(t,"n",(function(){return C})),n.d(t,"j",(function(){return S})),n.d(t,"f",(function(){return I})),n.d(t,"k",(function(){return N})),n.d(t,"b",(function(){return T}));var c=n(2),r=n(29),i=n(27),s=n(51),o=n(172),a=n(55),d=n(142),l=n(356),b=n(77);const j=()=>{const e=(()=>{const e=Object(i.c)((e=>e.predictions.rounds));return Object.keys(e).reduce(((t,n)=>({...t,[n]:Object(b.l)(e[n])})),{})})();return Object(o.orderBy)(Object.values(e),["epoch"],["asc"])},u=(e,t)=>{const n=Object(i.c)((e=>e.predictions.ledgers));return n[e]&&n[e][t]?Object(b.l)(n[e][t]):null},O=e=>Object(i.c)((e=>e.predictions.claimableStatuses))[e]||!1,p=()=>Object(i.c)((e=>{const t=Object(o.minBy)(Object.values(e.predictions.rounds),"epoch");return null===t||void 0===t?void 0:t.epoch})),f=()=>Object(i.c)((e=>e.predictions.isHistoryPaneOpen)),m=()=>Object(i.c)((e=>e.predictions.isChartPaneOpen)),h=()=>Object(i.c)((e=>e.predictions.currentEpoch)),x=()=>Object(i.c)((e=>e.predictions.intervalBlocks)),g=()=>x()+Object(i.c)((e=>e.predictions.bufferBlocks)),v=()=>Object(i.c)((e=>e.predictions.status)),y=()=>Object(i.c)((e=>e.predictions.historyFilter)),w=()=>Object(i.c)((e=>e.predictions.currentRoundStartBlockNumber)),k=()=>{const e=Object(i.c)((e=>e.predictions.minBetAmount));return Object(c.useMemo)((()=>s.a.BigNumber.from(e)),[e])},C=()=>Object(i.c)((e=>e.predictions.rewardRate))/100,S=()=>Object(i.c)((e=>e.predictions.isFetchingHistory)),I=e=>{const t=Object(i.c)((e=>e.predictions.history));return t?t[e]:[]},N=()=>{const e=Object(i.c)((e=>e.predictions.lastOraclePrice));return Object(c.useMemo)((()=>s.a.BigNumber.from(e)),[e])},T=()=>{const{account:e}=Object(r.c)(),t=Object(a.b)(),{isInitialized:n,isLoading:s,data:o}=Object(i.c)((e=>e.collectibles)),b=Object.keys(o);return Object(c.useEffect)((()=>{n||t(Object(l.b)(e))}),[n,e,t]),{isInitialized:n,isLoading:s,tokenIds:o,nftsInWallet:d.b.filter((e=>b.includes(e.identifier)))}}}}]);
//# sourceMappingURL=22.d1782531.chunk.js.map