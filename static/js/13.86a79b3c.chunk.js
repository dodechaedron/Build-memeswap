(this["webpackJsonp1tronic-frontend"]=this["webpackJsonp1tronic-frontend"]||[]).push([[13],{1483:function(e,t,r){"use strict";r.r(t);r(2);var i=r(229),c=r(57),s=r(59),n=r(3),o=r(357),a=r(213),l=r(10),b=r(816),d=r(4),j=r(852),x=r(910),u=r(0);const p=d.e.div`
  padding-top: 16px;

  ${e=>{let{theme:t}=e;return t.mediaQueries.md}} {
    padding-top: 24px;
  }
`,m=d.e.img`
  border-radius: 50%;
  height: 64px;
  margin-top: -12px;
  width: 64px;
  border: solid 2px white;

  ${e=>{let{theme:t}=e;return t.mediaQueries.md}} {
    height: 128px;
    margin-top: -24px;
    width: 128px;
  }
`,O=d.e.div`
  margin-bottom: 8px;
  text-align: center;
`,h=Object(d.e)(n.u)`
  overflow: visible;
`,g=Object(d.e)(n.x)`
  position: relative;
  background: url(${e=>{let{bg:t}=e;return t}});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 32px 32px 0 0;
  padding-top: 0;
  text-align: center;
`,f=Object(d.e)(n.V).attrs({as:"h2"})`
  font-size: 24px;

  ${e=>{let{theme:t}=e;return t.mediaQueries.md}} {
    font-size: 40px;
  }
`,v=d.e.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr;
  margin-bottom: 16px;

  ${e=>{let{theme:t}=e;return t.mediaQueries.md}} {
    grid-gap: 32px;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 32px;
  }
`;var w=e=>{let{team:t}=e;const{t:r}=Object(l.b)();return Object(u.jsx)(p,{children:Object(u.jsxs)(h,{children:[Object(u.jsxs)(g,{bg:`/images/teams/${t.background}`,children:[Object(u.jsx)(O,{children:Object(u.jsx)(m,{src:`/images/teams/${t.images.md}`,alt:"team avatar"})}),Object(u.jsx)(f,{color:t.textColor,children:t.name}),Object(u.jsx)(n.Vb,{as:"p",color:t.textColor,children:r(t.description)})]}),Object(u.jsxs)(n.v,{children:[Object(u.jsxs)(v,{children:[Object(u.jsx)(x.a,{icon:n.M,title:t.users,subtitle:r("Active Members")}),Object(u.jsx)(x.a,{icon:n.Fb,title:r("Coming Soon"),subtitle:r("Team Points"),isDisabled:!0})]}),Object(u.jsx)(n.V,{as:"h3",children:r("Team Achievements")}),Object(u.jsx)(j.a,{})]})]})})},y=r(908);t.default=()=>{const{id:e}=Object(c.i)(),t=Number(e),{t:r}=Object(l.b)(),d=-1!==a.a.findIndex((e=>e.id===t)),j=Object(b.a)(t);return d?j?Object(u.jsxs)(i.a,{children:[Object(u.jsx)(y.a,{}),Object(u.jsx)(n.T,{mb:"24px",children:Object(u.jsx)(s.a,{to:"/teams",children:Object(u.jsxs)(n.T,{alignItems:"center",children:[Object(u.jsx)(n.G,{color:"primary"}),Object(u.jsx)(n.Vb,{color:"primary",children:r("Teams Overview")})]})})}),Object(u.jsx)(w,{team:j})]}):Object(u.jsx)(o.a,{}):Object(u.jsx)(c.a,{to:"/404"})}},816:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return a}));var i=r(2),c=r(27),s=r(55),n=r(157);const o=e=>{const t=Object(c.c)((t=>t.teams.data[e])),r=Object(s.b)();return Object(i.useEffect)((()=>{r(Object(n.b)(e))}),[e,r]),t},a=()=>{const{isInitialized:e,isLoading:t,data:r}=Object(c.c)((e=>e.teams)),o=Object(s.b)();return Object(i.useEffect)((()=>{o(Object(n.c)())}),[o]),{teams:r,isInitialized:e,isLoading:t}}},817:function(e,t,r){"use strict";const i=r(4).e.div`
  border-bottom: 2px solid ${e=>{let{theme:t}=e;return t.colors.textSubtle}};
  margin-bottom: 24px;
  padding-bottom: 24px;
`;t.a=i},852:function(e,t,r){"use strict";r(2);var i=r(3),c=r(10),s=r(0);t.a=e=>{let{children:t}=e;const{t:r}=Object(c.b)();return Object(s.jsxs)(i.T,{flexDirection:"column",alignItems:"center",justifyContent:"center",p:"24px",children:[Object(s.jsx)(i.p,{width:"72px",height:"72px"}),Object(s.jsx)(i.V,{as:"h5",scale:"md",color:"textDisabled",children:t||r("Coming Soon!")})]})}},908:function(e,t,r){"use strict";r(2);var i=r(3),c=r(227),s=r(10),n=r(817),o=r(59),a=r(0);var l=()=>{const{t:e}=Object(s.b)();return Object(a.jsx)(i.u,{mb:"32px",isActive:!0,children:Object(a.jsx)(i.v,{children:Object(a.jsxs)(i.T,{alignItems:["start",null,"center"],justifyContent:["start",null,"space-between"],flexDirection:["column",null,"row"],children:[Object(a.jsxs)("div",{children:[Object(a.jsx)(i.V,{scale:"lg",mb:"8px",children:e("You haven\u2019t set up your profile yet!")}),Object(a.jsx)(i.Vb,{children:e("You can do this at any time by clicking on your profile picture in the menu")})]}),Object(a.jsx)(i.q,{as:o.a,to:"/profile",id:"teamsPageSetUpProfile",mt:["16px",null,0],children:e("Set up now")})]})})})};t.a=()=>{const{t:e}=Object(s.b)(),{isInitialized:t,profile:r}=Object(c.b)(),o=t&&!r;return Object(a.jsxs)(a.Fragment,{children:[o&&Object(a.jsx)(l,{}),Object(a.jsxs)(n.a,{children:[Object(a.jsx)(i.V,{as:"h1",scale:"xxl",color:"secondary",children:e("Teams & Profiles")}),Object(a.jsx)(i.Vb,{bold:!0,children:e("Show off your stats and collectibles with your unique profile. Team features will be revealed soon!")})]})]})}},910:function(e,t,r){"use strict";r(2);var i=r(3),c=r(4);const s=Object(c.e)(i.Vb)`
  border: 2px solid ${e=>{let{theme:t}=e;return t.colors.tertiary}};
  border-radius: 8px;;
`;s.defaultProps={p:"24px"};var n=s,o=r(0);t.a=e=>{let{icon:t,title:r,subtitle:c,isDisabled:s=!1,...a}=e;return Object(o.jsx)(n,{...a,children:Object(o.jsxs)(i.T,{alignItems:"start",children:[Object(o.jsx)(t,{width:"44px",mr:"24px",color:s?"textDisabled":"currentColor"}),Object(o.jsxs)("div",{children:[Object(o.jsx)(i.V,{as:"h3",scale:"xl",color:s?"textDisabled":"text",children:r}),Object(o.jsx)(i.Vb,{textTransform:"uppercase",color:s?"textDisabled":"textSubtle",fontSize:"12px",bold:!0,children:c})]})]})})}}}]);
//# sourceMappingURL=13.86a79b3c.chunk.js.map