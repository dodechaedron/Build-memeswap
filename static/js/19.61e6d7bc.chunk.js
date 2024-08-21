(this["webpackJsonp1tronic-frontend"]=this["webpackJsonp1tronic-frontend"]||[]).push([[19],{1451:function(e,r){},1464:function(e,r,t){"use strict";t.r(r);var o=t(2),n=t(1439),c=t.n(n),d=t(4),s=t(131),l=t.n(s),u=(t(1453),t(0));const a=d.e.div`
  .EasyMDEContainer .CodeMirror {
    background: ${e=>{let{theme:r}=e;return r.colors.input}};
    border-color: ${e=>{let{theme:r}=e;return r.colors.cardBorder}};
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    box-shadow: ${e=>{let{theme:r}=e;return r.shadows.inset}};
    padding: 16px;
  }

  .CodeMirror-code {
    color: ${e=>{let{theme:r}=e;return r.colors.text}};
  }

  .editor-toolbar {
    background: ${e=>{let{theme:r}=e;return r.card.background}};
    border-color: ${e=>{let{theme:r}=e;return r.colors.cardBorder}};
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    color: ${e=>{let{theme:r}=e;return r.colors.text}};

    a,
    button {
      color: ${e=>{let{theme:r}=e;return r.colors.text}};

      &:hover,
      &.active {
        background: ${e=>{let{theme:r}=e;return r.colors.background}};
        border: 0;
      }
    }
  }
`,i={autofocus:!1,status:!1,hideIcons:["guide","fullscreen","preview","side-by-side"],spellChecker:!1,styleSelectedText:!1};r.default=e=>{let{options:r,onTextChange:t,...n}=e;const d=Object(o.useRef)(),s=Object(o.useRef)(t);return Object(o.useEffect)((()=>{let e=new c.a(l()({element:d.current},i,r));return e.codemirror.on("change",(()=>{s.current(e.value())})),()=>{e&&(e.toTextArea(),e=null)}}),[r,s,d]),Object(u.jsx)(a,{children:Object(u.jsx)("textarea",{ref:d,readOnly:!0,...n})})}}}]);
//# sourceMappingURL=19.61e6d7bc.chunk.js.map