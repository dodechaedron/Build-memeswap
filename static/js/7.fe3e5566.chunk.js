(this["webpackJsonp1tronic-frontend"]=this["webpackJsonp1tronic-frontend"]||[]).push([[7],{1044:function(e,t,n){var c=n(1045),r=n(1046),i=n(85);e.exports=function(e){return(i(e)?c:r)(e)}},1045:function(e,t,n){var c=n(479),r=n(911);e.exports=function(e){return r(c(e))}},1046:function(e,t,n){var c=n(911),r=n(476);e.exports=function(e){return c(r(e))}},1468:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n(57),i=n(29),s=n(229),a=n(357),o=n(227),l=n(27),b=n(55),d=n(375);var j=n(4),u=n(3),p=n(10),m=n(12),x=n.n(m),h=n(35),O=n(56);const f=.5,g=["sleepy","dollop","twinkle","churro","sunny"];var v=n(0);const y={isInitialized:!1,currentStep:0,teamId:null,selectedNft:{nftAddress:null,tokenId:null},userName:"",minimumCakeRequired:new x.a(1.5).multipliedBy(O.i),allowance:new x.a(7.5).multipliedBy(O.i)},C=(e,t)=>{switch(t.type){case"initialize":return{...e,isInitialized:!0,currentStep:t.step};case"next_step":return{...e,currentStep:e.currentStep+1};case"set_team":return{...e,teamId:t.teamId};case"set_selected_nft":return{...e,selectedNft:{tokenId:t.tokenId,nftAddress:t.nftAddress}};case"set_username":return{...e,userName:t.userName};default:return e}},w=Object(c.createContext)(null);var S=e=>{let{children:t}=e;const[n,r]=Object(c.useReducer)(C,y),{account:s}=Object(i.c)();Object(c.useEffect)((()=>{let e=!0;return s&&(async()=>{const t=Object(h.b)(),n=await t.canMint(s);r({type:"initialize",step:n?0:1}),e&&r({type:"initialize",step:n?0:1})})(),()=>{e=!1}}),[s,r]);const a=Object(c.useMemo)((()=>({nextStep:()=>r({type:"next_step"}),setTeamId:e=>r({type:"set_team",teamId:e}),setSelectedNft:(e,t)=>r({type:"set_selected_nft",tokenId:e,nftAddress:t}),setUserName:e=>r({type:"set_username",userName:e})})),[r]);return Object(v.jsx)(w.Provider,{value:{...n,actions:a},children:t})};const k=j.e.div`
  border-bottom: 2px solid ${e=>{let{theme:t}=e;return t.colors.textSubtle}};
  margin-bottom: 24px;
  padding-bottom: 24px;
`,T=["Get Starter Collectible","Set Profile Picture","Join Team","Set Name"];var V=()=>{const{t:e}=Object(p.b)(),{currentStep:t}=Object(c.useContext)(w);return Object(v.jsxs)(k,{children:[Object(v.jsx)(u.V,{as:"h1",scale:"xxl",color:"secondary",mb:"8px",children:e("Profile Setup")}),Object(v.jsx)(u.V,{as:"h2",scale:"lg",mb:"8px",children:e("Show off your stats and collectibles with your unique profile")}),Object(v.jsx)(u.Vb,{color:"textSubtle",mb:"24px",children:e("Total cost: 1.5 CAKE")}),Object(v.jsx)(u.n,{children:T.map(((n,c)=>Object(v.jsx)(u.Vb,{color:c<=t?"text":"textDisabled",children:e(n)},n)))})]})},A=n(102);var E=()=>{const{t:e}=Object(p.b)();return Object(v.jsxs)("div",{children:[Object(v.jsx)(u.V,{scale:"xl",mb:"8px",children:e("Oops!")}),Object(v.jsx)(u.Vb,{as:"p",mb:"16px",children:e("Please connect your wallet to continue")}),Object(v.jsx)(A.a,{})]})},I=n(792),D=n(33),P=n(17),N=n(787);var R=e=>{const{balance:t}=Object(N.b)(Object(P.f)());return t.gte(e)},$=n(142);const F=Object(j.e)(u.u)`
  ${e=>{let{isSuccess:t}=e;return!t&&"box-shadow: none;"}}
  border-radius: 8px;;
  margin-bottom: 16px;
`,q=j.e.label`
  cursor: ${e=>{let{isDisabled:t}=e;return t?"not-allowed":"pointer"}};
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: ${e=>{let{isDisabled:t}=e;return t?"0.6":"1"}};
`,_=j.e.div`
  align-items: center;
  border: 2px solid ${e=>{let{theme:t}=e;return t.colors.tertiary}};
  border-radius: 8px; 0 0 16px;
  display: flex;
  flex-grow: 1;
  height: 80px;
  padding: 8px 16px;
`,z=j.e.div`
  margin-left: 16px;
`,L=j.e.div`
  align-self: stretch;
  background-image: url('${e=>{let{src:t}=e;return t}}');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  flex: none;
  width: 80px;
`;var M=e=>{let{name:t,value:n,isChecked:c=!1,image:r,onChange:i,disabled:s,children:a,...o}=e;return Object(v.jsx)(F,{isSuccess:c,isDisabled:s,mb:"16px",...o,children:Object(v.jsxs)(q,{isDisabled:s,children:[Object(v.jsxs)(_,{children:[Object(v.jsx)(u.Ib,{name:t,checked:c,value:n,onChange:e=>i(e.target.value),disabled:s,style:{flex:"none"}}),Object(v.jsx)(z,{children:a})]}),Object(v.jsx)(L,{src:r})]})})};var B=e=>Object(v.jsx)(u.q,{endIcon:Object(v.jsx)(u.e,{color:"currentColor"}),...e}),Q=n(793);var W=()=>Object(c.useContext)(w);const U=$.b.filter((e=>g.includes(e.identifier))),Y=new x.a(1).multipliedBy(O.i);var K=()=>{const[e,t]=Object(c.useState)(null),{actions:n,minimumCakeRequired:r,allowance:s}=W(),{account:a}=Object(i.c)(),o=Object(D.c)(),l=Object(D.a)(),{t:b}=Object(p.b)(),d=R(Y),{isApproving:j,isApproved:m,isConfirmed:h,isConfirming:O,handleApprove:f,handleConfirm:g}=Object(I.a)({onRequiresApproval:async()=>{try{const e=await o.allowance(a,l.address);return new x.a(e.toString()).gte(r)}catch(e){return!1}},onApprove:()=>o.approve(l.address,s.toJSON()),onConfirm:()=>l.mintNFT(e),onSuccess:()=>n.nextStep()});return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(u.Vb,{fontSize:"20px",color:"textSubtle",bold:!0,children:b("Step %num%",{num:1})}),Object(v.jsx)(u.V,{as:"h3",scale:"xl",mb:"24px",children:b("Get Starter Collectible")}),Object(v.jsx)(u.Vb,{as:"p",children:b("Every profile starts by making a \u201cstarter\u201d collectible (NFT).")}),Object(v.jsx)(u.Vb,{as:"p",children:b("This starter will also become your first profile picture.")}),Object(v.jsx)(u.Vb,{as:"p",mb:"24px",children:b("You can change your profile pic later if you get another approved Pancake Collectible.")}),Object(v.jsx)(u.u,{mb:"24px",children:Object(v.jsxs)(u.v,{children:[Object(v.jsx)(u.V,{as:"h4",scale:"lg",mb:"8px",children:b("Choose your Starter!")}),Object(v.jsx)(u.Vb,{as:"p",color:"textSubtle",children:b("Choose wisely: you can only ever make one starter collectible!")}),Object(v.jsx)(u.Vb,{as:"p",mb:"24px",color:"textSubtle",children:b("Cost: %num% CAKE",{num:1})}),U.map((n=>Object(v.jsx)(M,{name:"mintStarter",value:n.variationId,image:`/images/nfts/${n.images.md}`,isChecked:e===n.variationId,onChange:e=>t(Number(e)),disabled:j||O||h||!d,children:Object(v.jsx)(u.Vb,{bold:!0,children:n.name})},n.identifier))),!d&&Object(v.jsx)(u.Vb,{color:"failure",mb:"16px",children:b("A minimum of %num% CAKE is required",{num:1})}),Object(v.jsx)(Q.b,{isApproveDisabled:null===e||h||O||m,isApproving:j,isConfirmDisabled:!m||h||!d,isConfirming:O,onApprove:f,onConfirm:g})]})}),Object(v.jsx)(B,{onClick:n.nextStep,disabled:!h,children:b("Next Step")})]})},H=n(59),J=n(233),X=n(771),G=n(82);const Z=Object(j.e)(H.a)`
  color: ${e=>{let{theme:t}=e;return t.colors.primary}};
`,ee=j.e.div`
  margin-bottom: 24px;
`;var te=()=>{const{library:e}=Object(i.c)(),[t,n]=Object(c.useState)(!1),[r,s]=Object(c.useState)(!1),{selectedNft:a,actions:o}=Object(c.useContext)(w),{t:l}=Object(p.b)(),{isLoading:b,nftsInWallet:d,tokenIds:j}=Object(X.b)(),{toastError:m}=Object(G.a)();return b||0!==d.length?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(u.Vb,{fontSize:"20px",color:"textSubtle",bold:!0,children:l("Step %num%",{num:2})}),Object(v.jsx)(u.V,{as:"h3",scale:"xl",mb:"24px",children:l("Set Profile Picture")}),Object(v.jsx)(u.u,{mb:"24px",children:Object(v.jsxs)(u.v,{children:[Object(v.jsx)(u.V,{as:"h4",scale:"lg",mb:"8px",children:l("Choose collectible")}),Object(v.jsx)(u.Vb,{as:"p",color:"textSubtle",children:l("Choose a profile picture from the eligible collectibles (NFT) in your wallet, shown below.")}),Object(v.jsxs)(u.Vb,{as:"p",color:"textSubtle",mb:"24px",children:[l("Only approved Pancake Collectibles can be used."),Object(v.jsx)(Z,{to:"/collectibles",style:{marginLeft:"4px"},children:l("See the list >")})]}),Object(v.jsx)(ee,{children:b?Object(v.jsx)(u.Lb,{height:"80px",mb:"16px"}):d.map((e=>{const[t]=j[e.identifier],n=Object(J.a)(e.type);return Object(v.jsx)(M,{name:"profilePicture",value:t,image:`/images/nfts/${e.images.md}`,isChecked:t===a.tokenId,onChange:e=>o.setSelectedNft(parseInt(e,10),n),children:Object(v.jsx)(u.Vb,{bold:!0,children:e.name})},e.identifier)}))}),Object(v.jsx)(u.V,{as:"h4",scale:"lg",mb:"8px",children:l("Allow collectible to be locked")}),Object(v.jsx)(u.Vb,{as:"p",color:"textSubtle",mb:"16px",children:l("The collectible you've chosen will be locked in a smart contract while it\u2019s being used as your profile picture. Don't worry - you'll be able to get it back at any time.")}),Object(v.jsx)(u.q,{isLoading:r,disabled:t||r||null===a.tokenId,onClick:async()=>{const t=Object(h.k)(a.nftAddress,e.getSigner()),c=await t.approve(Object(P.p)(),a.tokenId);s(!0);(await c.wait()).status?(s(!1),n(!0)):(m(l("Error"),l("Please try again. Confirm the transaction and make sure you are paying enough gas!")),s(!1))},endIcon:r?Object(v.jsx)(u.g,{spin:!0,color:"currentColor"}):void 0,id:"approveStarterCollectible",children:l("Approve")})]})}),Object(v.jsx)(B,{onClick:o.nextStep,disabled:null===a.tokenId||!t||r,children:l("Next Step")})]}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(u.V,{scale:"xl",mb:"24px",children:l("Oops!")}),Object(v.jsx)(u.Vb,{bold:!0,fontSize:"20px",mb:"24px",children:l("We couldn\u2019t find any Pancake Collectibles in your wallet.")}),Object(v.jsx)(u.Vb,{as:"p",children:l("You need a Pancake Collectible to finish setting up your profile. If you sold or transferred your starter collectible to another wallet, you\u2019ll need to get it back or acquire a new one somehow. You can\u2019t make a new starter with this wallet address.")})]})},ne=n(1044),ce=n.n(ne),re=n(816);var ie=()=>{const{teamId:e,actions:t}=W(),{t:n}=Object(p.b)(),{teams:r}=Object(re.b)(),i=e=>t.setTeamId(parseInt(e,10)),s=Object(c.useMemo)((()=>ce()(Object.values(r))),[r]);return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(u.Vb,{fontSize:"20px",color:"textSubtle",bold:!0,children:n("Step %num%",{num:3})}),Object(v.jsx)(u.V,{as:"h3",scale:"xl",mb:"24px",children:n("Join a Team")}),Object(v.jsx)(u.Vb,{as:"p",mb:"24px",children:n("It won\u2019t be possible to undo the choice you make for the foreseeable future!")}),Object(v.jsx)(u.u,{mb:"24px",children:Object(v.jsxs)(u.v,{children:[Object(v.jsx)(u.V,{as:"h4",scale:"lg",mb:"8px",children:n("Join a Team")}),Object(v.jsx)(u.Vb,{as:"p",color:"textSubtle",mb:"24px",children:n("There\u2019s currently no big difference between teams, and no benefit of joining one team over another for now. So pick whichever one you like!")}),s&&s.map((t=>Object(v.jsxs)(M,{name:"teams-selection",value:t.id,isChecked:e===t.id,image:`/images/teams/${t.images.md}`,onChange:i,disabled:!t.isJoinable,children:[Object(v.jsx)(u.Vb,{bold:!0,children:t.name}),Object(v.jsxs)(u.T,{children:[Object(v.jsx)(u.M,{mr:"8px"}),Object(v.jsx)(u.Vb,{children:t.users.toLocaleString()})]})]},t.name)))]})}),Object(v.jsx)(B,{onClick:t.nextStep,disabled:null===e,children:n("Next Step")})]})},se=n(14),ae=n(11);function oe(e,t){Object(ae.a)(2,arguments);var n=Object(se.default)(e),c=Object(se.default)(t),r=n.getTime()-c.getTime();return r<0?-1:r>0?1:r}var le=n(483),be=n(484),de=n(485);function je(e){Object(ae.a)(1,arguments);var t=Object(se.default)(e);return Object(be.default)(t).getTime()===Object(de.default)(t).getTime()}function ue(e,t){Object(ae.a)(2,arguments);var n,c=Object(se.default)(e),r=Object(se.default)(t),i=oe(c,r),s=Math.abs(Object(le.default)(c,r));if(s<1)n=0;else{1===c.getMonth()&&c.getDate()>27&&c.setDate(30),c.setMonth(c.getMonth()-i*s);var a=oe(c,r)===-i;je(Object(se.default)(e))&&1===s&&1===oe(e,r)&&(a=!1),n=i*(s-Number(a))}return 0===n?0:n}function pe(e,t){Object(ae.a)(2,arguments);var n=Object(se.default)(e),c=Object(se.default)(t);return n.getTime()-c.getTime()}function me(e,t){Object(ae.a)(2,arguments);var n=pe(e,t)/1e3;return n>0?Math.floor(n):Math.ceil(n)}var xe=n(260),he=n(427);function Oe(e){return Object(he.a)({},e)}var fe=n(127),ge=1440,ve=43200;var ye=n(729),Ce=n(181),we=n(23),Se=n(249),ke=n.n(Se),Te=n(120);var Ve,Ae=e=>{let{account:t,teamId:n,selectedNft:c,minimumCakeRequired:r,allowance:i,onDismiss:s}=e;const{t:a}=Object(p.b)(),o=Object(D.s)(),l=Object(b.b)(),{toastSuccess:d}=Object(G.a)(),j=Object(D.c)(),{isApproving:m,isApproved:h,isConfirmed:O,isConfirming:g,handleApprove:y,handleConfirm:C}=Object(I.a)({onRequiresApproval:async()=>{try{const e=await j.allowance(t,o.address);return new x.a(e.toString()).gte(r)}catch(e){return!1}},onApprove:()=>j.approve(o.address,i.toJSON()),onConfirm:()=>o.createProfile(n,c.nftAddress,c.tokenId),onSuccess:async()=>{await l(Object(Te.c)(t)),s(),d(a("Profile created!"))}});return Object(v.jsxs)(u.rb,{title:a("Complete Profile"),onDismiss:s,children:[Object(v.jsx)(u.Vb,{color:"textSubtle",mb:"8px",children:a("Submitting NFT to contract and confirming User Name and Team.")}),Object(v.jsxs)(u.T,{justifyContent:"space-between",mb:"16px",children:[Object(v.jsx)(u.Vb,{children:a("Cost")}),Object(v.jsx)(u.Vb,{children:a("%num% CAKE",{num:f})})]}),Object(v.jsx)(Q.b,{isApproveDisabled:O||g||h,isApproving:m,isConfirmDisabled:!h||O,isConfirming:g,onApprove:y,onConfirm:C})]})};!function(e){e.IDLE="idle",e.CREATED="created",e.NEW="new"}(Ve||(Ve={}));const Ee="https://profile.pancakeswap.com",Ie=new x.a(f).multipliedBy(O.i),De=j.e.div`
  position: relative;
  max-width: 240px;
`,Pe=Object(j.e)(u.bb)`
  padding-right: 40px;
`,Ne=Object(j.e)(u.T)`
  align-items: center;
  height: 24px;
  justify-content: center;
  margin-top: -12px;
  position: absolute;
  right: 16px;
  top: 50%;
  width: 24px;
`;var Re=()=>{const[e,t]=Object(c.useState)(!1),{teamId:n,selectedNft:r,userName:s,actions:a,minimumCakeRequired:o,allowance:l}=W(),{t:b}=Object(p.b)(),{account:d}=Object(i.c)(),{toastError:j}=Object(G.a)(),{library:m}=Object(we.a)(),[x,h]=Object(c.useState)(Ve.IDLE),[O,g]=Object(c.useState)(!1),[y,C]=Object(c.useState)(!1),[w,S]=Object(c.useState)(""),k=R(Ie),[T]=Object(u.rc)(Object(v.jsx)(Ae,{userName:s,selectedNft:r,account:d,teamId:n,minimumCakeRequired:o,allowance:l}),!1),V=x===Ve.CREATED,A=ke()((async e=>{try{C(!0);const n=await fetch(`${Ee}/api/users/valid/${e}`);if(n.ok)g(!0),S("");else{var t;const e=await n.json();g(!1),S(null===e||void 0===e||null===(t=e.error)||void 0===t?void 0:t.message)}}finally{C(!1)}}),200);return Object(c.useEffect)((()=>{d&&(async()=>{try{const e=await fetch(`${Ee}/api/users/${d}`),t=await e.json();if(e.ok){const e=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};Object(ae.a)(2,arguments);var c=n.locale||xe.a;if(!c.formatDistance)throw new RangeError("locale must contain formatDistance property");var r=oe(e,t);if(isNaN(r))throw new RangeError("Invalid time value");var i,s,a=Oe(n);a.addSuffix=Boolean(n.addSuffix),a.comparison=r,r>0?(i=Object(se.default)(t),s=Object(se.default)(e)):(i=Object(se.default)(e),s=Object(se.default)(t));var o,l=me(s,i),b=(Object(fe.a)(s)-Object(fe.a)(i))/1e3,d=Math.round((l-b)/60);if(d<2)return n.includeSeconds?l<5?c.formatDistance("lessThanXSeconds",5,a):l<10?c.formatDistance("lessThanXSeconds",10,a):l<20?c.formatDistance("lessThanXSeconds",20,a):l<40?c.formatDistance("halfAMinute",null,a):l<60?c.formatDistance("lessThanXMinutes",1,a):c.formatDistance("xMinutes",1,a):0===d?c.formatDistance("lessThanXMinutes",1,a):c.formatDistance("xMinutes",d,a);if(d<45)return c.formatDistance("xMinutes",d,a);if(d<90)return c.formatDistance("aboutXHours",1,a);if(d<ge){var j=Math.round(d/60);return c.formatDistance("aboutXHours",j,a)}if(d<2520)return c.formatDistance("xDays",1,a);if(d<ve){var u=Math.round(d/ge);return c.formatDistance("xDays",u,a)}if(d<86400)return o=Math.round(d/ve),c.formatDistance("aboutXMonths",o,a);if((o=ue(s,i))<12){var p=Math.round(d/ve);return c.formatDistance("xMonths",p,a)}var m=o%12,x=Math.floor(o/12);return m<3?c.formatDistance("aboutXYears",x,a):m<9?c.formatDistance("overXYears",x,a):c.formatDistance("almostXYears",x+1,a)}(Object(ye.default)(t.created_at),new Date);S(b("Created %dateCreated% ago",{dateCreated:e})),a.setUserName(t.username),h(Ve.CREATED),g(!0)}else h(Ve.NEW)}catch(e){j(b("Error"),b("Unable to verify username"))}})()}),[d,h,g,S,a,j,b]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(u.Vb,{fontSize:"20px",color:"textSubtle",bold:!0,children:b("Step %num%",{num:4})}),Object(v.jsx)(u.V,{as:"h3",scale:"xl",mb:"24px",children:b("Set Your Name")}),Object(v.jsx)(u.Vb,{as:"p",mb:"24px",children:b("This name will be shown in team leaderboards and search results as long as your profile is active.")}),Object(v.jsx)(u.u,{mb:"24px",children:Object(v.jsxs)(u.v,{children:[Object(v.jsx)(u.V,{as:"h4",scale:"lg",mb:"8px",children:b("Set Your Name")}),Object(v.jsx)(u.Vb,{as:"p",color:"textSubtle",mb:"24px",children:b("Your name must be at least 3 and at most 15 standard letters and numbers long. You can\u2019t change this once you click Confirm.")}),x===Ve.IDLE?Object(v.jsx)(u.Lb,{height:"40px",width:"240px"}):Object(v.jsxs)(De,{children:[Object(v.jsx)(Pe,{onChange:e=>{const{value:t}=e.target;a.setUserName(t),A(t)},isWarning:s&&!O,isSuccess:s&&O,minLength:3,maxLength:15,disabled:V,placeholder:b("Enter your name..."),value:s}),Object(v.jsxs)(Ne,{children:[y&&Object(v.jsx)(u.g,{spin:!0}),!y&&O&&s&&Object(v.jsx)(u.E,{color:"success"}),!y&&!O&&s&&Object(v.jsx)(u.kc,{color:"failure"})]})]}),Object(v.jsx)(u.Vb,{color:"textSubtle",fontSize:"14px",py:"4px",mb:"16px",style:{minHeight:"30px"},children:w}),Object(v.jsx)(u.Vb,{as:"p",color:"failure",mb:"8px",children:b("Only reuse a name from other social media if you're OK with people viewing your wallet. You can't change your name once you click Confirm.")}),Object(v.jsx)("label",{htmlFor:"checkbox",style:{display:"block",cursor:"pointer",marginBottom:"24px"},children:Object(v.jsxs)(u.T,{alignItems:"center",children:[Object(v.jsx)("div",{style:{flex:"none"},children:Object(v.jsx)(u.C,{id:"checkbox",scale:"sm",checked:e,onChange:()=>t(!e)})}),Object(v.jsx)(u.Vb,{ml:"8px",children:b("I understand that people can view my wallet if they know my username")})]})}),Object(v.jsx)(u.q,{onClick:async()=>{try{C(!0);const t=await Object(Ce.c)(m,d,s),n=await fetch(`${Ee}/api/users/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({address:d,username:s,signature:t})});if(n.ok)h(Ve.CREATED);else{var e;const t=await n.json();j(b("Error"),null===t||void 0===t||null===(e=t.error)||void 0===e?void 0:e.message)}}catch(t){j((null===t||void 0===t?void 0:t.message)?t.message:JSON.stringify(t))}finally{C(!1)}},disabled:!O||V||y||!e,children:b("Confirm")})]})}),Object(v.jsx)(u.q,{onClick:T,disabled:!O||!V,id:"completeProfileCreation",children:b("Complete Profile")}),!k&&Object(v.jsx)(u.Vb,{color:"failure",mt:"16px",children:b("A minimum of %num% CAKE is required",{num:f})})]})};var $e=()=>{const{t:e}=Object(p.b)(),{isInitialized:t,currentStep:n}=Object(c.useContext)(w),{account:r}=Object(i.c)();return r?t?0===n?Object(v.jsx)(K,{}):1===n?Object(v.jsx)(te,{}):2===n?Object(v.jsx)(ie,{}):3===n?Object(v.jsx)(Re,{}):null:Object(v.jsx)("div",{children:e("Loading...")}):Object(v.jsx)(E,{})};var Fe=()=>Object(v.jsx)(S,{children:Object(v.jsxs)(s.a,{children:[Object(v.jsx)(V,{}),Object(v.jsx)($e,{})]})});const qe=()=>{const[e,t]=Object(c.useState)(!1),[n,r]=Object(c.useState)(1),{account:s}=Object(i.c)(),a=Object(c.useCallback)((()=>{r((e=>e+1))}),[r]);return Object(c.useEffect)((()=>{s&&(async()=>{const e=Object(h.i)(),n=await e.canClaim(s);t(n)})()}),[s,n,t]),{canClaim:e,checkClaimStatus:a}};var _e=e=>{let{onSuccess:t,onDismiss:n}=e;const[r,i]=Object(c.useState)(!1),{t:s}=Object(p.b)(),{canClaim:a}=qe(),o=Object(D.e)(),{toastSuccess:l,toastError:b}=Object(G.a)();return Object(v.jsx)(u.rb,{title:s("Claim your Gift!"),onDismiss:n,children:Object(v.jsxs)("div",{style:{maxWidth:"640px"},children:[Object(v.jsx)(u.Vb,{as:"p",children:s("Thank you for being a day-one user of Pancake Profiles!")}),Object(v.jsx)(u.Vb,{as:"p",mb:"8px",children:s("If you haven't already noticed, we made a mistake and the starter bunny you chose got mixed up and changed into another bunny. Oops!")}),Object(v.jsx)(u.Vb,{as:"p",children:s("To make it up to you, we\u2019ll refund you the full 4 CAKE it cost to make your bunny.")}),Object(v.jsx)(u.Vb,{as:"p",mb:"8px",children:s("We\u2019re also preparing an all-new collectible for you to claim (for free!) in the near future.")}),Object(v.jsx)(u.Vb,{as:"p",mb:"24px",children:s("Once you claim the refund, you can make another account with another wallet, mint a new bunny, and send it to your main account via the NFT page.")}),Object(v.jsx)(u.q,{endIcon:r?Object(v.jsx)(u.g,{spin:!0,color:"currentColor"}):null,isLoading:r,onClick:async()=>{const e=await o.getCakeBack();i(!0);(await e.wait()).status?(l(s("Success!")),t(),n()):(i(!1),b(s("Error"),s("Please try again. Confirm the transaction and make sure you are paying enough gas!")))},disabled:!a,children:s("Claim Your CAKE")})]})})},ze=n(817);let Le;!function(e){e.START="start",e.CHANGE="change",e.REMOVE="remove",e.APPROVE="approve"}(Le||(Le={}));const Me=(e,t)=>{switch(t.type){case"set_view":return{...e,currentView:t.view,previousView:e.currentView};case"go_previous":return{...e,currentView:e.previousView,previousView:e.currentView};default:return e}};var Be=()=>{const[e,t]=Object(c.useReducer)(Me,{currentView:Le.START,previousView:null});return{...e,goToStart:()=>t({type:"set_view",view:Le.START}),goToChange:()=>t({type:"set_view",view:Le.CHANGE}),goToRemove:()=>t({type:"set_view",view:Le.REMOVE}),goToApprove:()=>t({type:"set_view",view:Le.APPROVE}),goPrevious:()=>t({type:"go_previous"})}},Qe=n(28),We=n(25),Ue=n(39),Ye=n(254);var Ke=()=>{const{t:e}=Object(p.b)(),[t,n]=Object(c.useState)({numberCakeToReactivate:We.d,numberCakeToRegister:We.d,numberCakeToUpdate:We.d}),{toastError:r}=Object(G.a)();return Object(c.useEffect)((()=>{(async()=>{try{const e=["numberCakeToReactivate","numberCakeToRegister","numberCakeToUpdate"].map((e=>({address:Object(P.p)(),name:e}))),[[t],[c],[r]]=await Object(Ue.b)(Ye,e);n({numberCakeToReactivate:new x.a(t.toString()),numberCakeToRegister:new x.a(c.toString()),numberCakeToUpdate:new x.a(r.toString())})}catch(t){r(e("Error"),e("Could not retrieve CAKE costs for profile"))}})()}),[n,r,e]),t},He=n(818);const Je=Object(j.e)(u.q).attrs({variant:"secondary"})`
  border-color: ${e=>{let{theme:t}=e;return t.colors.failure}};
  color: ${e=>{let{theme:t}=e;return t.colors.failure}};
  margin-bottom: 24px;

  &:hover:not(:disabled):not(.button--disabled):not(:active) {
    border-color: ${e=>{let{theme:t}=e;return t.colors.failure}};
    opacity: 0.8;
  }
`,Xe=j.e.div`
  height: 64px;
  width: 64px;

  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    height: 128px;
    width: 128px;
  }
`;var Ge=e=>{let{goToApprove:t,goToChange:n,goToRemove:r,onDismiss:s}=e;const[a,l]=Object(c.useState)(null),{profile:b}=Object(o.b)(),{numberCakeToUpdate:d,numberCakeToReactivate:j}=Ke(),m=b.isActive?d:j,h=R(m),{t:O}=Object(p.b)(),{account:f}=Object(i.c)(),g=Object(D.c)(),y=b.isActive?d:j;return Object(c.useEffect)((()=>{f&&(async()=>{const e=await g.allowance(f,Object(P.p)()),t=new x.a(e.toString());l(t.lt(y))})()}),[f,y,l,g]),b?Object(v.jsxs)(u.T,{alignItems:"center",justifyContent:"center",flexDirection:"column",children:[Object(v.jsx)(Xe,{children:Object(v.jsx)(He.a,{profile:b})}),Object(v.jsx)(u.T,{alignItems:"center",style:{height:"48px"},justifyContent:"center",children:Object(v.jsx)(u.Vb,{as:"p",color:"failure",children:!h&&O("%minimum% CAKE required to change profile pic",{minimum:Object(Qe.h)(m)})})}),b.isActive?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(u.q,{width:"100%",mb:"8px",onClick:!0===a?t:n,disabled:!h||null===a,children:O("Change Profile Pic")}),Object(v.jsx)(Je,{width:"100%",onClick:r,children:O("Remove Profile Pic")})]}):Object(v.jsx)(u.q,{width:"100%",mb:"8px",onClick:!0===a?t:n,disabled:!h||null===a,children:O("Reactivate Profile")}),Object(v.jsx)(u.q,{variant:"text",width:"100%",onClick:s,children:O("Close Window")})]}):null};var Ze=e=>{let{onDismiss:t}=e;const[n,r]=Object(c.useState)(!1),[s,a]=Object(c.useState)(!1),{profile:l}=Object(o.b)(),{numberCakeToReactivate:d}=Ke(),{t:j}=Object(p.b)(),m=Object(D.s)(),{account:x}=Object(i.c)(),{toastSuccess:h,toastError:O}=Object(G.a)(),f=Object(b.b)();return l?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(u.Vb,{as:"p",color:"failure",mb:"24px",children:j("This will suspend your profile and send your Collectible back to your wallet")}),Object(v.jsx)(u.Vb,{as:"p",color:"textSubtle",mb:"24px",children:j("While your profile is suspended, you won't be able to earn points, but your achievements and points will stay associated with your profile")}),Object(v.jsx)(u.Vb,{as:"p",color:"textSubtle",mb:"24px",children:j("Cost to reactivate in the future: %cost% CAKE",{cost:Object(Qe.f)(d)})}),Object(v.jsx)("label",{htmlFor:"acknowledgement",style:{cursor:"pointer",display:"block",marginBottom:"24px"},children:Object(v.jsxs)(u.T,{alignItems:"center",children:[Object(v.jsx)(u.C,{id:"acknowledgement",checked:n,onChange:()=>r(!n),scale:"sm"}),Object(v.jsx)(u.Vb,{ml:"8px",children:j("I understand")})]})}),Object(v.jsx)(u.q,{width:"100%",isLoading:s,endIcon:s?Object(v.jsx)(u.g,{spin:!0,color:"currentColor"}):null,disabled:!n||s,onClick:async()=>{const e=await m.pauseProfile();a(!0);(await e.wait()).status?(await f(Object(Te.c)(x)),h(j("Profile Paused!")),t()):(O(j("Error"),j("Please try again. Confirm the transaction and make sure you are paying enough gas!")),a(!1))},mb:"8px",children:j("Confirm")}),Object(v.jsx)(u.q,{variant:"text",width:"100%",onClick:t,children:j("Close Window")})]}):null};var et=e=>{let{onDismiss:t}=e;const[n,r]=Object(c.useState)({tokenId:null,nftAddress:null}),{t:s}=Object(p.b)(),{isLoading:a,tokenIds:l,nftsInWallet:d}=Object(X.b)(),j=Object(b.b)(),{profile:m}=Object(o.b)(),x=Object(D.s)(),{account:O,library:f}=Object(i.c)(),{toastSuccess:g}=Object(G.a)(),{isApproving:y,isApproved:C,isConfirmed:w,isConfirming:S,handleApprove:k,handleConfirm:T}=Object(I.a)({onApprove:()=>Object(h.k)(n.nftAddress,f.getSigner()).approve(Object(P.p)(),n.tokenId),onConfirm:()=>m.isActive?x.updateProfile(n.nftAddress,n.tokenId):x.reactivateProfile(n.nftAddress,n.tokenId),onSuccess:async()=>{await j(Object(Te.c)(O)),g(s("Profile Updated!")),t()}});return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(u.Vb,{as:"p",color:"textSubtle",mb:"24px",children:s("Choose a new Collectible to use as your profile pic.")}),a?Object(v.jsx)(u.Lb,{height:"80px",mb:"16px"}):d.map((e=>{const[t]=l[e.identifier];return Object(v.jsx)(M,{name:"profilePicture",value:t,image:`/images/nfts/${e.images.md}`,isChecked:t===n.tokenId,onChange:t=>{r({tokenId:Number(t),nftAddress:Object(J.a)(e.type)})},disabled:y||S||w,children:Object(v.jsx)(u.Vb,{bold:!0,children:e.name})},e.identifier)})),!a&&0===d.length&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(u.Vb,{as:"p",color:"textSubtle",mb:"16px",children:s("Sorry! You don\u2019t have any eligible Collectibles in your wallet to use!")}),Object(v.jsx)(u.Vb,{as:"p",color:"textSubtle",mb:"24px",children:s("Make sure you have a Pancake Collectible in your wallet and try again!")})]}),Object(v.jsx)(Q.b,{isApproveDisabled:w||S||C||null===n.tokenId,isApproving:y,isConfirmDisabled:!C||w||null===n.tokenId,isConfirming:S,onApprove:k,onConfirm:T}),Object(v.jsx)(u.q,{variant:"text",width:"100%",onClick:t,disabled:y||S,children:s("Close Window")})]})};var tt=e=>{let{goToChange:t,onDismiss:n}=e;const[r,i]=Object(c.useState)(!1),{profile:s}=Object(o.b)(),{t:a}=Object(p.b)(),{numberCakeToUpdate:l,numberCakeToReactivate:b}=Ke(),d=Object(D.c)(),{toastError:j}=Object(G.a)(),m=s.isActive?l:b;return s?Object(v.jsxs)(u.T,{flexDirection:"column",children:[Object(v.jsxs)(u.T,{alignItems:"center",justifyContent:"space-between",mb:"24px",children:[Object(v.jsx)(u.Vb,{children:s.isActive?a("Cost to update:"):a("Cost to reactivate:")}),Object(v.jsxs)(u.Vb,{children:[Object(Qe.h)(m)," CAKE"]})]}),Object(v.jsx)(u.q,{disabled:r,isLoading:r,endIcon:r?Object(v.jsx)(u.g,{spin:!0,color:"currentColor"}):null,width:"100%",mb:"8px",onClick:async()=>{const e=await d.approve(Object(P.p)(),m.times(2).toJSON());i(!0);(await e.wait()).status?t():(j(a("Error"),a("Please try again. Confirm the transaction and make sure you are paying enough gas!")),i(!1))},children:a("Approve")}),Object(v.jsx)(u.q,{variant:"text",width:"100%",onClick:n,disabled:r,children:a("Close Window")})]}):null};const nt={[Le.START]:"Edit Profile",[Le.CHANGE]:"Change Profile Pic",[Le.REMOVE]:"Remove Profile Pic",[Le.APPROVE]:"Approve CAKE"};var ct=e=>{let{onDismiss:t}=e;const{currentView:n,goToChange:c,goToRemove:r,goToApprove:i,goPrevious:s}=Be(),{t:a}=Object(p.b)(),o=nt[n],l=n===Le.START,b=l?null:()=>s();return Object(v.jsx)(u.rb,{title:a(o),onBack:b,onDismiss:t,hideCloseButton:!l,children:Object(v.jsxs)("div",{style:{maxWidth:"400px"},children:[n===Le.START&&Object(v.jsx)(Ge,{goToApprove:i,goToChange:c,goToRemove:r,onDismiss:t}),n===Le.REMOVE&&Object(v.jsx)(Ze,{onDismiss:t}),n===Le.CHANGE&&Object(v.jsx)(et,{onDismiss:t}),n===Le.APPROVE&&Object(v.jsx)(tt,{goToChange:c,onDismiss:t})]})})};var rt=()=>{const{t:e}=Object(p.b)(),{canClaim:t,checkClaimStatus:n}=qe(),[c]=Object(u.rc)(Object(v.jsx)(_e,{onSuccess:n})),[r]=Object(u.rc)(Object(v.jsx)(ct,{}),!1),{hasProfile:i}=Object(o.b)();return Object(v.jsx)(ze.a,{children:Object(v.jsxs)(u.T,{flexDirection:["column",null,"row"],alignItems:["start",null,"center"],justifyContent:"space-between",children:[Object(v.jsxs)("div",{children:[Object(v.jsx)(u.V,{as:"h1",scale:"xxl",mb:"8px",color:"secondary",children:e("Your Profile")}),Object(v.jsx)(u.V,{as:"h2",scale:"lg",mb:"16px",children:e("Check your stats and collect achievements")}),i&&Object(v.jsx)(u.q,{onClick:r,children:e("Edit Profile")})]}),t&&Object(v.jsx)(u.q,{variant:"tertiary",onClick:c,startIcon:Object(v.jsx)(u.Eb,{}),children:e("You\u2019ve got a gift to claim!")})]})})};const it=Object(j.e)(u.p)`
  height: 48px;
  width: 48px;

  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    height: 64px;
    width: 64px;
  }
`,st=j.e.img`
  height: 48px;
  width: 48px;

  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    height: 64px;
    width: 64px;
  }
`;var at=e=>{let{badge:t,...n}=e;return t?Object(v.jsx)(st,{src:`/images/achievements/${t}`,alt:"achievement badge",...n}):Object(v.jsx)(it,{})};var ot=e=>{let{title:t,...n}=e;const{t:c}=Object(p.b)();if("string"===typeof t)return Object(v.jsx)(u.Vb,{bold:!0,...n,children:t});const{key:r,data:i={}}=t;return Object(v.jsx)(u.Vb,{bold:!0,...n,children:c(r,i)})};const lt=Object(j.e)(u.Vb).attrs({as:"p",fontSize:"14px"})`
  display: none;

  ${e=>{let{theme:t}=e;return t.mediaQueries.md}} {
    display: block;
  }
`;var bt=e=>{let{description:t,...n}=e;const{t:c}=Object(p.b)();if(!t)return null;if("string"===typeof t)return Object(v.jsx)(u.Vb,{as:"p",color:"textSubtle",fontSize:"14px",...n,children:t});const{key:r,data:i={}}=t;return Object(v.jsx)(lt,{color:"textSubtle",...n,children:c(r,i)})};const dt=Object(j.e)(u.T)`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding-left: 8px;
  padding-right: 8px;
`;var jt=e=>{let{achievement:t}=e;return Object(v.jsxs)(u.T,{children:[Object(v.jsx)(at,{badge:t.badge}),Object(v.jsxs)(dt,{children:[Object(v.jsx)(ot,{title:t.title}),Object(v.jsx)(bt,{description:t.description})]}),Object(v.jsxs)(u.T,{alignItems:"center",children:[Object(v.jsx)(u.Fb,{width:"18px",color:"textSubtle",mr:"4px"}),Object(v.jsx)(u.Vb,{color:"textSubtle",children:t.points.toLocaleString()})]})]})};const ut=j.e.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr;

  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    grid-template-columns: repeat(2, 1fr);
  }
`;var pt=()=>{const{t:e}=Object(p.b)(),t=Object(l.c)((e=>e.achievements.data));return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(ut,{children:t.map((e=>Object(v.jsx)(jt,{achievement:e},e.id)))}),0===t.length&&Object(v.jsx)(u.T,{alignItems:"center",justifyContent:"center",style:{height:"64px"},children:Object(v.jsx)(u.V,{as:"h5",scale:"md",color:"textDisabled",children:e("No achievements yet!")})})]})},mt=n(172),xt=n(333);var ht=j.e.div`
  flex: none;
  width: 100%;

  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    max-width: 160px;

    & > button {
      width: 100%;
    }
  }
`;var Ot=e=>{let{points:t,...n}=e;const{t:c}=Object(p.b)(),r=t.toLocaleString();return Object(v.jsxs)(u.T,{alignItems:"center",...n,children:[Object(v.jsx)(u.Fb,{mr:"4px",color:"textSubtle"}),Object(v.jsx)(u.Vb,{color:"textSubtle",children:c("%num% points",{num:r})})]})};const ft=Object(j.e)(u.T)`
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.colors.cardBorder}};
  padding-bottom: 16px;
  padding-top: 16px;
`,gt=j.e.div`
  flex: 1;
`,vt=Object(j.e)(u.T)`
  flex-direction: column;
  flex: 1;
  margin-left: 8px;

  ${e=>{let{theme:t}=e;return t.mediaQueries.md}} {
    align-items: center;
    flex-direction: row;
  }
`;var yt=e=>{let{achievement:t,onCollectSuccess:n}=e;const[r,i]=Object(c.useState)(!1),{t:s}=Object(p.b)(),a=Object(D.q)(),{toastError:o,toastSuccess:l}=Object(G.a)();return Object(v.jsxs)(ft,{children:[Object(v.jsx)(at,{badge:t.badge}),Object(v.jsxs)(vt,{children:[Object(v.jsxs)(gt,{children:[Object(v.jsx)(ot,{title:t.title}),Object(v.jsx)(bt,{description:t.description})]}),Object(v.jsx)(Ot,{points:t.points,px:[0,null,null,"32px"],mb:["16px",null,null,0]}),Object(v.jsx)(ht,{children:Object(v.jsx)(u.q,{onClick:async()=>{const e=await a.getPoints(t.address);i(!0);(await e.wait()).status?(i(!1),n(t),l(s("Points Collected!"))):(o(s("Error"),s("Please try again. Confirm the transaction and make sure you are paying enough gas!")),i(!1))},isLoading:r,endIcon:r?Object(v.jsx)(u.g,{spin:!0,color:"currentColor"}):null,disabled:r,variant:"secondary",children:s("Collect")})})]})]})};var Ct=()=>{const[e,t]=Object(c.useState)([]),{t:n}=Object(p.b)(),r=Object(b.b)(),{profile:s}=Object(o.b)(),{account:a}=Object(i.c)();Object(c.useEffect)((()=>{a&&(async()=>{const e=await Object(xt.c)(a);t(e)})()}),[a,r,t]);const l=e=>{r(Object(d.a)(e)),r(Object(Te.a)(e.points)),t((t=>t.filter((t=>t.id!==e.id))))};if(!(null===s||void 0===s?void 0:s.isActive))return null;if(0===e.length)return null;const j=Object(mt.sumBy)(e,"points");return Object(v.jsxs)(u.u,{isActive:!0,mb:"32px",children:[Object(v.jsx)(u.x,{children:Object(v.jsx)(u.T,{flexDirection:["column",null,"row"],justifyContent:["start",null,"space-between"],children:Object(v.jsxs)(u.T,{alignItems:"center",mb:["16px",null,0],children:[Object(v.jsx)(u.Fb,{width:"32px",mr:"8px"}),Object(v.jsx)(u.V,{scale:"lg",children:n("%num% Points to Collect",{num:j})})]})})}),Object(v.jsx)(u.v,{children:e.map((e=>Object(v.jsx)(yt,{achievement:e,onCollectSuccess:l},e.address)))})]})},wt=n(852);var St=e=>{let{activeIndex:t=0}=e;const{t:n}=Object(p.b)();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(u.T,{mb:"24px",children:Object(v.jsx)(H.a,{to:"/teams",children:Object(v.jsxs)(u.T,{alignItems:"center",children:[Object(v.jsx)(u.G,{color:"primary"}),Object(v.jsx)(u.Vb,{color:"primary",children:n("Teams Overview")})]})})}),Object(v.jsx)(u.T,{mb:"24px",justifyContent:"center",children:Object(v.jsxs)(u.r,{activeIndex:t,variant:"subtle",scale:"sm",children:[Object(v.jsx)(u.s,{as:H.a,to:"/profile/tasks",children:n("Task Center")}),Object(v.jsx)(u.s,{as:H.a,to:"/profile",children:n("Public Profile")})]})})]})};var kt=()=>{const{t:e}=Object(p.b)();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(St,{}),Object(v.jsx)(Ct,{}),Object(v.jsxs)(u.u,{mb:"32px",children:[Object(v.jsx)(u.x,{children:Object(v.jsx)(u.T,{alignItems:"center",justifyContent:"space-between",children:Object(v.jsxs)("div",{children:[Object(v.jsx)(u.V,{scale:"lg",mb:"8px",children:e("Achievements")}),Object(v.jsx)(u.Vb,{as:"p",children:e("Earn more points for completing larger quests!")})]})})}),Object(v.jsx)(u.v,{children:Object(v.jsx)(pt,{})})]}),Object(v.jsxs)(u.u,{mb:"32px",children:[Object(v.jsx)(u.x,{children:Object(v.jsx)(u.T,{alignItems:"center",justifyContent:"space-between",children:Object(v.jsxs)("div",{children:[Object(v.jsx)(u.V,{scale:"lg",mb:"8px",children:e("Task Center")}),Object(v.jsx)(u.Vb,{as:"p",children:e("Earn points by completing regular tasks!")}),Object(v.jsx)(u.Vb,{as:"p",children:e("Collecting points for these tasks makes them available again.")})]})})}),Object(v.jsx)(u.v,{children:Object(v.jsx)(wt.a,{})})]})]})},Tt=n(301),Vt=n(30);var At=Object(j.e)(u.x)`
  background: ${e=>{let{theme:t}=e;return(e=>e.isDark?"linear-gradient(139.73deg, #142339 0%, #24243D 47.4%, #37273F 100%)":"linear-gradient(139.73deg, #E6FDFF 0%, #EFF4F5 46.87%, #F3EFFF 100%)")(t)}};
  position: relative;
`;const Et=j.e.img`
  border-radius: 4px;
  margin-bottom: 8px;
`;var It=e=>{let{nft:t}=e;return Object(v.jsxs)("div",{children:[Object(v.jsx)(Et,{src:`/images/nfts/${t.images.lg}`}),Object(v.jsx)(u.Vb,{bold:!0,mb:"8px",children:t.name}),Object(v.jsx)(u.Vb,{as:"p",fontSize:"12px",color:"textSubtle",children:t.description})]})};const Dt=j.e.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(2, 1fr);
  padding: 16px 0;

  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    grid-gap: 24px;
    grid-template-columns: repeat(3, 1fr);
    padding: 24px 0;
  }

  ${e=>{let{theme:t}=e;return t.mediaQueries.md}} {
    grid-template-columns: repeat(4, 1fr);
  }

  ${e=>{let{theme:t}=e;return t.mediaQueries.lg}} {
    grid-template-columns: repeat(5, 1fr);
  }
`;var Pt=()=>{const{t:e}=Object(p.b)(),{nftsInWallet:t}=Object(X.b)();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(u.V,{as:"h4",scale:"md",mb:"8px",children:e("Pancake Collectibles")}),Object(v.jsx)(u.Vb,{as:"p",children:e("Pancake Collectibles are special ERC-721 NFTs that can be used on the 1TronicSwap platform.")}),Object(v.jsx)(u.Vb,{as:"p",children:e("NFTs in this user\u2019s wallet that aren\u2019t approved Pancake Collectibles won\u2019t be shown here.")}),t.length>0&&Object(v.jsx)(Dt,{children:t.map((e=>Object(v.jsx)(It,{nft:e},e.identifier)))}),0===t.length&&Object(v.jsx)(u.T,{justifyContent:"center",p:"32px",children:Object(v.jsx)(u.Vb,{fontSize:"20px",bold:!0,color:"textDisabled",children:e("No NFTs Found")})}),Object(v.jsxs)(u.T,{alignItems:"center",justifyContent:"flex-end",children:[Object(v.jsx)(H.a,{to:"/collectibles",children:e("See all approved Pancake Collectibles")}),Object(v.jsx)(u.H,{})]})]})},Nt=n(910);const Rt=j.e.div`
  background: rgba(0, 0, 0, 0.6) url('/images/camera.svg') no-repeat center center;
  background-size: 24px;
  border-radius: 50%;
  left: 0;
  height: 100%;
  opacity: 0;
  position: absolute;
  top: 0;
  transition: opacity 300ms;
  width: 100%;
  z-index: 3;

  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    background-size: 48px;
  }
`,$t=j.e.div`
  position: relative;

  &:hover {
    cursor: pointer;

    ${Rt} {
      opacity: 1;
    }
  }
`,Ft=j.e.div`
  height: 64px;
  width: 64px;

  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    height: 128px;
    width: 128px;
  }
`;var qt=e=>{let{profile:t}=e;const[n]=Object(u.rc)(Object(v.jsx)(ct,{}),!1);return Object(v.jsxs)($t,{onClick:n,children:[Object(v.jsx)(Ft,{children:Object(v.jsx)(He.a,{profile:t})}),Object(v.jsx)(Rt,{})]})};const _t=j.e.div`
  flex: 1;
  padding: 16px 0;

  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    padding: 0 16px;
  }
`,zt=Object(j.e)(u.V)`
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 8px;

  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    font-size: 40px;
    line-height: 44px;
  }
`,Lt=j.e.div`
  position: absolute;
  right: 24px;
  top: 24px;
`,Mt=Object(j.e)(u.Vb)`
  font-size: 12px;

  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    font-size: 16px;
  }
`,Bt=Object(j.e)(u.eb)`
  display: inline-block;
  font-weight: 400;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80px;
  white-space: nowrap;

  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    font-size: 16px;
    width: auto;
  }
`,Qt=j.e.div`
  margin-bottom: 40px;
`;var Wt=()=>{const{account:e}=Object(i.c)(),{profile:t}=Object(o.b)(),[n,c]=Object(Tt.a)(!1,{localStorageKey:"username_visibility_toggled"}),{t:r}=Object(p.b)();if(!e)return Object(v.jsx)(E,{});const{username:s,team:a,isActive:l,points:b}=t,d=n?u.gc:u.hc;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(St,{activeIndex:1}),Object(v.jsx)("div",{children:Object(v.jsxs)(u.u,{children:[Object(v.jsxs)(At,{children:[Object(v.jsxs)(u.T,{alignItems:["start",null,"center"],flexDirection:["column",null,"row"],children:[Object(v.jsx)(qt,{profile:t}),Object(v.jsxs)(_t,{children:[Object(v.jsxs)(u.T,{alignItems:"center",children:[Object(v.jsxs)(zt,{children:["@",n?s:s.replace(/./g,"*")]}),Object(v.jsx)(d,{ml:"4px",onClick:()=>{c(!n)},cursor:"pointer"})]}),Object(v.jsx)(u.T,{alignItems:"center",children:Object(v.jsxs)(Bt,{href:Object(Vt.e)(e,"address"),color:"text",external:!0,children:[e,Object(v.jsx)(u.Bb,{ml:"4px"})]})}),Object(v.jsx)(Mt,{bold:!0,children:a.name})]})]}),Object(v.jsx)(Lt,{children:l?Object(v.jsx)(u.Tb,{startIcon:Object(v.jsx)(u.D,{width:"18px"}),outline:!0,children:r("Active")}):Object(v.jsx)(u.Tb,{variant:"failure",startIcon:Object(v.jsx)(u.k,{width:"18px"}),outline:!0,children:r("Paused")})})]}),Object(v.jsxs)(u.v,{children:[Object(v.jsx)(Nt.a,{icon:u.Fb,title:b,subtitle:r("Points"),mb:"24px"}),Object(v.jsxs)(Qt,{children:[Object(v.jsx)(u.V,{as:"h4",scale:"md",mb:"16px",children:r("Achievements")}),Object(v.jsx)(pt,{})]}),Object(v.jsx)(Pt,{})]})]})})]})};t.default=()=>{const{isInitialized:e,isLoading:t,hasProfile:n}=Object(o.b)(),{account:l}=Object(i.c)();return(()=>{const{account:e}=Object(i.c)(),t=Object(b.b)();Object(c.useEffect)((()=>{e&&t(Object(d.c)(e))}),[e,t])})(),!e||t?Object(v.jsx)(a.a,{}):l&&!n?Object(v.jsx)(s.a,{children:Object(v.jsx)(Fe,{})}):Object(v.jsxs)(s.a,{children:[Object(v.jsx)(rt,{}),Object(v.jsx)(r.b,{exact:!0,path:"/profile",children:Object(v.jsx)(Wt,{})}),Object(v.jsx)(r.b,{path:"/profile/tasks",children:Object(v.jsx)(kt,{})})]})}},771:function(e,t,n){"use strict";n.d(t,"o",(function(){return j})),n.d(t,"a",(function(){return u})),n.d(t,"i",(function(){return p})),n.d(t,"e",(function(){return m})),n.d(t,"r",(function(){return x})),n.d(t,"q",(function(){return h})),n.d(t,"c",(function(){return O})),n.d(t,"h",(function(){return f})),n.d(t,"p",(function(){return g})),n.d(t,"m",(function(){return v})),n.d(t,"g",(function(){return y})),n.d(t,"d",(function(){return C})),n.d(t,"l",(function(){return w})),n.d(t,"n",(function(){return S})),n.d(t,"j",(function(){return k})),n.d(t,"f",(function(){return T})),n.d(t,"k",(function(){return V})),n.d(t,"b",(function(){return A}));var c=n(2),r=n(29),i=n(27),s=n(51),a=n(172),o=n(55),l=n(142),b=n(356),d=n(77);const j=()=>{const e=(()=>{const e=Object(i.c)((e=>e.predictions.rounds));return Object.keys(e).reduce(((t,n)=>({...t,[n]:Object(d.l)(e[n])})),{})})();return Object(a.orderBy)(Object.values(e),["epoch"],["asc"])},u=(e,t)=>{const n=Object(i.c)((e=>e.predictions.ledgers));return n[e]&&n[e][t]?Object(d.l)(n[e][t]):null},p=e=>Object(i.c)((e=>e.predictions.claimableStatuses))[e]||!1,m=()=>Object(i.c)((e=>{const t=Object(a.minBy)(Object.values(e.predictions.rounds),"epoch");return null===t||void 0===t?void 0:t.epoch})),x=()=>Object(i.c)((e=>e.predictions.isHistoryPaneOpen)),h=()=>Object(i.c)((e=>e.predictions.isChartPaneOpen)),O=()=>Object(i.c)((e=>e.predictions.currentEpoch)),f=()=>Object(i.c)((e=>e.predictions.intervalBlocks)),g=()=>f()+Object(i.c)((e=>e.predictions.bufferBlocks)),v=()=>Object(i.c)((e=>e.predictions.status)),y=()=>Object(i.c)((e=>e.predictions.historyFilter)),C=()=>Object(i.c)((e=>e.predictions.currentRoundStartBlockNumber)),w=()=>{const e=Object(i.c)((e=>e.predictions.minBetAmount));return Object(c.useMemo)((()=>s.a.BigNumber.from(e)),[e])},S=()=>Object(i.c)((e=>e.predictions.rewardRate))/100,k=()=>Object(i.c)((e=>e.predictions.isFetchingHistory)),T=e=>{const t=Object(i.c)((e=>e.predictions.history));return t?t[e]:[]},V=()=>{const e=Object(i.c)((e=>e.predictions.lastOraclePrice));return Object(c.useMemo)((()=>s.a.BigNumber.from(e)),[e])},A=()=>{const{account:e}=Object(r.c)(),t=Object(o.b)(),{isInitialized:n,isLoading:s,data:a}=Object(i.c)((e=>e.collectibles)),d=Object.keys(a);return Object(c.useEffect)((()=>{n||t(Object(b.b)(e))}),[n,e,t]),{isInitialized:n,isLoading:s,tokenIds:a,nftsInWallet:l.b.filter((e=>d.includes(e.identifier)))}}},787:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"c",(function(){return u}));var c=n(2),r=n(12),i=n.n(r),s=n(29),a=n(35),o=n(25),l=n(86),b=n(156),d=n(355);let j;!function(e){e.NOT_FETCHED="not-fetched",e.SUCCESS="success",e.FAILED="failed"}(j||(j={}));const u=()=>{const[e,t]=Object(c.useState)(o.d),{account:n}=Object(s.c)(),{lastUpdated:r,setLastUpdated:a}=Object(d.a)();return Object(c.useEffect)((()=>{n&&(async()=>{const e=await l.a.getBalance(n);t(new i.a(e.toString()))})()}),[n,r,t]),{balance:e,refresh:a}};t.b=e=>{const{NOT_FETCHED:t,SUCCESS:n,FAILED:r}=j,[l,d]=Object(c.useState)({balance:o.d,fetchStatus:t}),{account:u}=Object(s.c)(),{fastRefresh:p}=Object(b.a)();return Object(c.useEffect)((()=>{u&&(async()=>{const t=Object(a.a)(e);try{const e=await t.balanceOf(u);d({balance:new i.a(e.toString()),fetchStatus:n})}catch(c){console.error(c),d((e=>({...e,fetchStatus:r})))}})()}),[u,e,p,n,r]),l}},792:function(e,t,n){"use strict";var c=n(2),r=n(172),i=n(29),s=n(82),a=n(10);const o={approvalState:"idle",confirmState:"idle"},l=(e,t)=>{switch(t.type){case"requires_approval":return{...e,approvalState:"success"};case"approve_sending":return{...e,approvalState:"loading"};case"approve_receipt":return{...e,approvalState:"success"};case"approve_error":return{...e,approvalState:"fail"};case"confirm_sending":return{...e,confirmState:"loading"};case"confirm_receipt":return{...e,confirmState:"success"};case"confirm_error":return{...e,confirmState:"fail"};default:return e}};t.a=e=>{let{onApprove:t,onConfirm:n,onRequiresApproval:b,onSuccess:d=r.noop,onApproveSuccess:j=r.noop}=e;const{t:u}=Object(a.b)(),{account:p}=Object(i.c)(),[m,x]=Object(c.useReducer)(l,o),h=Object(c.useRef)(b),{toastError:O}=Object(s.a)();return Object(c.useEffect)((()=>{p&&h.current&&h.current().then((e=>{e&&x({type:"requires_approval"})}))}),[p,h,x]),{isApproving:"loading"===m.approvalState,isApproved:"success"===m.approvalState,isConfirming:"loading"===m.confirmState,isConfirmed:"success"===m.confirmState,handleApprove:async()=>{try{const e=await t();x({type:"approve_sending"});(await e.wait()).status&&(x({type:"approve_receipt"}),j(m))}catch(e){x({type:"approve_error"}),O(u("Error"),u("Please try again. Confirm the transaction and make sure you are paying enough gas!"))}},handleConfirm:async()=>{x({type:"confirm_sending"});try{const e=await n();(await e.wait()).status&&(x({type:"confirm_receipt"}),d(m))}catch(e){x({type:"confirm_error"}),O(u("Error"),u("Please try again. Confirm the transaction and make sure you are paying enough gas!"))}}}}},793:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(2);var c=n(4),r=n(3),i=n(10),s=n(0);let a;!function(e){e.ROW="row",e.SEQUENTIAL="sequential"}(a||(a={}));const o=c.e.div`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;

  ${e=>{let{theme:t}=e;return t.mediaQueries.md}} {
    grid-template-columns: 1fr 24px 1fr;
  }
`,l=Object(c.e)(r.q)`
  width: 100%;

  ${e=>{let{theme:t}=e;return t.mediaQueries.md}} {
    min-width: 160px;
  }
`,b={width:"24px",color:"textDisabled"},d=Object(c.e)(r.H).attrs(b)`
  display: none;

  ${e=>{let{theme:t}=e;return t.mediaQueries.md}} {
    display: block;
  }
`,j=Object(c.e)(r.F).attrs(b)`
  display: block;

  ${e=>{let{theme:t}=e;return t.mediaQueries.md}} {
    display: none;
  }
`,u=Object(s.jsx)(r.g,{spin:!0,color:"currentColor"});t.b=e=>{let{isApproveDisabled:t,isApproving:n,isConfirming:c,isConfirmDisabled:b,onApprove:p,onConfirm:m,buttonArrangement:x=a.ROW,confirmLabel:h}=e;const{t:O}=Object(i.b)(),f=null!==h&&void 0!==h?h:O("Confirm");return x===a.ROW?Object(s.jsxs)(o,{children:[Object(s.jsx)(r.m,{children:Object(s.jsx)(l,{disabled:t,onClick:p,endIcon:n?u:void 0,isLoading:n,children:O(n?"Enabling":"Enable")})}),Object(s.jsxs)(r.T,{justifyContent:"center",children:[Object(s.jsx)(d,{}),Object(s.jsx)(j,{})]}),Object(s.jsx)(r.m,{children:Object(s.jsx)(l,{onClick:m,disabled:b,isLoading:c,endIcon:c?u:void 0,children:c?O("Confirming"):f})})]}):Object(s.jsx)(s.Fragment,{children:t?Object(s.jsx)(r.m,{children:Object(s.jsx)(l,{onClick:m,disabled:b,isLoading:c,endIcon:c?u:void 0,children:c?O("Confirming"):f})}):Object(s.jsx)(r.m,{children:Object(s.jsx)(l,{onClick:p,endIcon:n?u:void 0,isLoading:n,children:O(n?"Enabling":"Enable")})})})}},816:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var c=n(2),r=n(27),i=n(55),s=n(157);const a=e=>{const t=Object(r.c)((t=>t.teams.data[e])),n=Object(i.b)();return Object(c.useEffect)((()=>{n(Object(s.b)(e))}),[e,n]),t},o=()=>{const{isInitialized:e,isLoading:t,data:n}=Object(r.c)((e=>e.teams)),a=Object(i.b)();return Object(c.useEffect)((()=>{a(Object(s.c)())}),[a]),{teams:n,isInitialized:e,isLoading:t}}},817:function(e,t,n){"use strict";const c=n(4).e.div`
  border-bottom: 2px solid ${e=>{let{theme:t}=e;return t.colors.textSubtle}};
  margin-bottom: 24px;
  padding-bottom: 24px;
`;t.a=c},818:function(e,t,n){"use strict";n(2);var c=n(3),r=n(4),i=n(0);const s=r.e.img`
  border: 1px solid ${e=>{let{theme:t}=e;return t.card.background}};
  border-radius: 50%;
  bottom: 0px;
  position: absolute;
  right: 0px;
  min-width: 20px;
  min-height: 20px;
  width: 37.5%;
  height: 37.5%;
  z-index: 5;

  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    border-width: 2px;
  }
`,a=r.e.div`
  background: url('${e=>{let{bg:t}=e;return t}}');
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
  position: relative;
  width: 100%;
  height: 100%;

  & > img {
    border-radius: 50%;
  }
`,o=Object(r.e)(c.zb)`
  width: 100%;
  height: 100%;
`;t.a=e=>{var t,n;let{profile:c}=e;return Object(i.jsxs)(a,{bg:`/images/nfts/${null===(t=c.nft)||void 0===t||null===(n=t.images)||void 0===n?void 0:n.md}`,children:[!c.isActive&&Object(i.jsx)(o,{}),Object(i.jsx)(s,{src:`/images/teams/${c.team.images.alt}`,alt:c.team.name})]})}},852:function(e,t,n){"use strict";n(2);var c=n(3),r=n(10),i=n(0);t.a=e=>{let{children:t}=e;const{t:n}=Object(r.b)();return Object(i.jsxs)(c.T,{flexDirection:"column",alignItems:"center",justifyContent:"center",p:"24px",children:[Object(i.jsx)(c.p,{width:"72px",height:"72px"}),Object(i.jsx)(c.V,{as:"h5",scale:"md",color:"textDisabled",children:t||n("Coming Soon!")})]})}},910:function(e,t,n){"use strict";n(2);var c=n(3),r=n(4);const i=Object(r.e)(c.Vb)`
  border: 2px solid ${e=>{let{theme:t}=e;return t.colors.tertiary}};
  border-radius: 8px;;
`;i.defaultProps={p:"24px"};var s=i,a=n(0);t.a=e=>{let{icon:t,title:n,subtitle:r,isDisabled:i=!1,...o}=e;return Object(a.jsx)(s,{...o,children:Object(a.jsxs)(c.T,{alignItems:"start",children:[Object(a.jsx)(t,{width:"44px",mr:"24px",color:i?"textDisabled":"currentColor"}),Object(a.jsxs)("div",{children:[Object(a.jsx)(c.V,{as:"h3",scale:"xl",color:i?"textDisabled":"text",children:n}),Object(a.jsx)(c.Vb,{textTransform:"uppercase",color:i?"textDisabled":"textSubtle",fontSize:"12px",bold:!0,children:r})]})]})})}},911:function(e,t,n){var c=n(475);e.exports=function(e,t){var n=-1,r=e.length,i=r-1;for(t=void 0===t?r:t;++n<t;){var s=c(n,i),a=e[s];e[s]=e[n],e[n]=a}return e.length=t,e}}}]);
//# sourceMappingURL=7.fe3e5566.chunk.js.map