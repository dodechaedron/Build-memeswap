(this["webpackJsonp1tronic-frontend"]=this["webpackJsonp1tronic-frontend"]||[]).push([[16],{1482:function(e,t,i){"use strict";i.r(t);i(2);var n=i(3),s=i(234),c=i.n(s),r=i(816),l=i(229),a=i(10),d=i(4),o=i(59),b=i(0);const j=d.e.div`
  align-self: stretch;
  background: ${e=>{let{theme:t}=e;return(e=>e.isDark?"linear-gradient(139.73deg, #142339 0%, #24243D 47.4%, #37273F 100%)":"linear-gradient(139.73deg, #E6FDFF 0%, #EFF4F5 46.87%, #F3EFFF 100%)")(t)}};
  flex: none;
  padding: 16px 0;
  text-align: center;
  width: 56px;
`,x=d.e.div`
  align-items: start;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 24px;

  ${e=>{let{theme:t}=e;return t.mediaQueries.md}} {
    align-items: center;
    flex-direction: row;
    font-size: 40px;
  }
`,m=d.e.div`
  flex: 1;
`,p=d.e.img`
  border-radius: 50%;
`,u=Object(d.e)(n.V).attrs({as:"h3"})`
  font-size: 24px;

  ${e=>{let{theme:t}=e;return t.mediaQueries.md}} {
    font-size: 40px;
  }
`,h=d.e.div`
  flex: none;
  margin-right: 8px;

  ${p} {
    height: 64px;
    width: 64px;
  }

  ${e=>{let{theme:t}=e;return t.mediaQueries.md}} {
    display: none;
  }
`,O=d.e.div`
  display: none;

  ${e=>{let{theme:t}=e;return t.mediaQueries.md}} {
    display: block;
    margin-left: 24px;

    ${p} {
      height: 128px;
      width: 128px;
    }
  }
`,f=Object(d.e)(n.u)`
  display: flex;
  margin-bottom: 16px;
`;var g=e=>{let{rank:t,team:i}=e;const{t:s}=Object(a.b)(),c=Object(b.jsx)(p,{src:`/images/teams/${i.images.md}`,alt:"team avatar"});return Object(b.jsxs)(f,{children:[Object(b.jsx)(j,{children:Object(b.jsx)(n.Vb,{bold:!0,fontSize:"24px",children:t})}),Object(b.jsxs)(x,{children:[Object(b.jsxs)(m,{children:[Object(b.jsxs)(n.T,{alignItems:"center",mb:"16px",children:[Object(b.jsx)(h,{children:c}),Object(b.jsx)(u,{children:i.name})]}),Object(b.jsx)(n.Vb,{as:"p",color:"textSubtle",pr:"24px",mb:"16px",children:s(i.description)}),Object(b.jsxs)(n.T,{children:[Object(b.jsxs)(n.T,{children:[Object(b.jsx)(n.Fb,{width:"24px",mr:"8px",style:{alignSelf:"center"}}),Object(b.jsx)(n.Vb,{fontSize:"24px",bold:!0,children:i.points.toLocaleString()})]}),Object(b.jsxs)(n.T,{ml:"24px",children:[Object(b.jsx)(n.M,{width:"24px",mr:"8px",style:{alignSelf:"center"}}),Object(b.jsx)(n.Vb,{fontSize:"24px",bold:!0,children:i.users.toLocaleString()})]})]})]}),Object(b.jsx)(n.q,{as:o.a,to:`/teams/${null===i||void 0===i?void 0:i.id}`,variant:"secondary",scale:"sm",children:s("See More")}),Object(b.jsx)(O,{children:c})]})]})},v=i(908);t.default=()=>{const{t:e}=Object(a.b)(),{teams:t,isLoading:i}=Object(r.b)(),s=Object.values(t),d=c()(s,["points","id","name"],["desc","asc","asc"]);return Object(b.jsxs)(l.a,{children:[Object(b.jsx)(v.a,{}),Object(b.jsxs)(n.T,{alignItems:"center",justifyContent:"space-between",mb:"32px",children:[Object(b.jsx)(n.V,{scale:"xl",children:e("Teams")}),i&&Object(b.jsx)(n.g,{spin:!0})]}),d.map(((e,t)=>Object(b.jsx)(g,{rank:t+1,team:e},e.id)))]})}},816:function(e,t,i){"use strict";i.d(t,"a",(function(){return l})),i.d(t,"b",(function(){return a}));var n=i(2),s=i(27),c=i(55),r=i(157);const l=e=>{const t=Object(s.c)((t=>t.teams.data[e])),i=Object(c.b)();return Object(n.useEffect)((()=>{i(Object(r.b)(e))}),[e,i]),t},a=()=>{const{isInitialized:e,isLoading:t,data:i}=Object(s.c)((e=>e.teams)),l=Object(c.b)();return Object(n.useEffect)((()=>{l(Object(r.c)())}),[l]),{teams:i,isInitialized:e,isLoading:t}}},817:function(e,t,i){"use strict";const n=i(4).e.div`
  border-bottom: 2px solid ${e=>{let{theme:t}=e;return t.colors.textSubtle}};
  margin-bottom: 24px;
  padding-bottom: 24px;
`;t.a=n},908:function(e,t,i){"use strict";i(2);var n=i(3),s=i(227),c=i(10),r=i(817),l=i(59),a=i(0);var d=()=>{const{t:e}=Object(c.b)();return Object(a.jsx)(n.u,{mb:"32px",isActive:!0,children:Object(a.jsx)(n.v,{children:Object(a.jsxs)(n.T,{alignItems:["start",null,"center"],justifyContent:["start",null,"space-between"],flexDirection:["column",null,"row"],children:[Object(a.jsxs)("div",{children:[Object(a.jsx)(n.V,{scale:"lg",mb:"8px",children:e("You haven\u2019t set up your profile yet!")}),Object(a.jsx)(n.Vb,{children:e("You can do this at any time by clicking on your profile picture in the menu")})]}),Object(a.jsx)(n.q,{as:l.a,to:"/profile",id:"teamsPageSetUpProfile",mt:["16px",null,0],children:e("Set up now")})]})})})};t.a=()=>{const{t:e}=Object(c.b)(),{isInitialized:t,profile:i}=Object(s.b)(),l=t&&!i;return Object(a.jsxs)(a.Fragment,{children:[l&&Object(a.jsx)(d,{}),Object(a.jsxs)(r.a,{children:[Object(a.jsx)(n.V,{as:"h1",scale:"xxl",color:"secondary",children:e("Teams & Profiles")}),Object(a.jsx)(n.Vb,{bold:!0,children:e("Show off your stats and collectibles with your unique profile. Team features will be revealed soon!")})]})]})}}}]);
//# sourceMappingURL=16.2aed291c.chunk.js.map