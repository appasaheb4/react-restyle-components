"use strict";"use client";import{jsx as c,jsxs as G,Fragment as Q}from"react/jsx-runtime";import{useState as _,useCallback as B,useEffect as d,useRef as f}from"react";import{styled as M,css as U}from"styled-components";import{tokens as i}from"../../utils/designTokens";import{useDebouncedValue as H}from"../../utils/hooks/useDebouncedValue";const X=M.div`
  display: flex;
  align-items: center;
  gap: 3px;
`,Y=M.input`
  width: 100%;
  height: 22px;
  padding: 0 5px;
  font-size: 10px;
  font-weight: normal;
  color: #000000;
  border: 1px solid ${i.outline||"#e2e8f0"};
  border-radius: 2px;
  background: white;
  transition: all 0.15s ease;

  &:hover {
    border-color: ${i.primary||"#94a3b8"};
  }

  &:focus {
    outline: none;
    border-color: ${i.primary||"#3b82f6"};
    box-shadow: 0 0 0 1px
      ${i.primary?`${i.primary}20`:"#3b82f620"};
  }

  &::placeholder {
    color: ${i.onSurface?`${i.onSurface}50`:"#94a3af"};
    font-size: 9px;
  }
`,ne=M.select`
  width: 100%;
  height: 22px;
  padding: 0 5px;
  font-size: 10px;
  font-weight: normal;
  color: #000000;
  border: 1px solid ${i.outline||"#e2e8f0"};
  border-radius: 2px;
  background: white;
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    border-color: ${i.primary||"#94a3b8"};
  }

  &:focus {
    outline: none;
    border-color: ${i.primary||"#3b82f6"};
    box-shadow: 0 0 0 1px
      ${i.primary?`${i.primary}20`:"#3b82f620"};
  }
`,Z=M.select`
  width: 38px;
  height: 22px;
  padding: 0 2px;
  font-size: 9px;
  font-weight: normal;
  border: 1px solid ${i.outline||"#e2e8f0"};
  border-radius: 2px;
  background: white;
  cursor: pointer;
  flex-shrink: 0;
  text-align: center;
  transition: all 0.15s ease;

  &:hover {
    border-color: ${i.primary||"#94a3b8"};
  }

  &:focus {
    outline: none;
    border-color: ${i.primary||"#3b82f6"};
  }
`,O=M.input`
  flex: 1;
  height: 22px;
  padding: 0 4px;
  font-size: 10px;
  border: 1px solid ${i.outline||"#e2e8f0"};
  border-radius: 2px;
  background: white;
  min-width: 80px;
  transition: all 0.15s ease;

  &:hover {
    border-color: ${i.primary||"#94a3b8"};
  }

  &:focus {
    outline: none;
    border-color: ${i.primary||"#3b82f6"};
    box-shadow: 0 0 0 1px
      ${i.primary?`${i.primary}20`:"#3b82f620"};
  }
`,ae=M.button`
  height: 22px;
  padding: 0 5px;
  font-size: 9px;
  font-weight: normal;
  border: 1px solid ${i.outline||"#e2e8f0"};
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.15s ease;
  white-space: nowrap;

  ${({$active:e})=>e?U`
          background: ${i.primary||"#3b82f6"};
          color: white;
          border-color: ${i.primary||"#3b82f6"};
        `:U`
          background: white;
          color: ${i.onSurface||"#374151"};

          &:hover {
            background: #f8fafc;
            border-color: ${i.primary||"#94a3b8"};
          }
        `}
`,P=({column:e,value:n,onChange:s,options:h})=>{const{placeholder:x,className:z,style:S,defaultValue:W,delay:V=500,getFilter:C,onFilter:w,id:k,disabled:$}=h||{},[D,b]=_(n||W||""),F=f(D),y=f(null),o=f(s),p=f(w),l=f(D);d(()=>{F.current=D},[D]),d(()=>{o.current=s,p.current=w},[s,w]),d(()=>{const u=n||"";u!==l.current&&(b(u),l.current=u)},[n]);const[g]=H(D,{wait:V});d(()=>{l.current=g||"",o.current(g||null),p.current?.(g)},[g]),d(()=>{C&&C({get value(){return F.current},setValue:u=>{b(u),o.current(u||null),p.current?.(u)},clear:()=>{b(""),o.current(null),p.current?.("")}})},[C]);const m=f(!1),R=B(u=>{b(u.target.value)},[]),v=B(()=>{m.current=!0},[]),r=B(()=>{m.current=!1},[]);d(()=>{m.current&&y.current&&requestAnimationFrame(()=>{m.current&&y.current&&y.current.focus()})});const N={fontWeight:400,...S};return z?c("input",{ref:y,type:"text",id:k,"data-filter-field":e.dataField,value:D,onChange:R,onFocus:v,onBlur:r,placeholder:x||e.filterPlaceholder||`Filter ${e.text}...`,className:z,style:{width:"100%",fontWeight:400,...S},disabled:$}):c(Y,{ref:y,type:"text",id:k,"data-filter-field":e.dataField,value:D,onChange:R,onFocus:v,onBlur:r,placeholder:x||e.filterPlaceholder||`Filter ${e.text}...`,style:N,disabled:$})};export function TextFilter(e){if(!("column"in e)&&!("value"in e)&&!("onChange"in e)){const s=e,h=x=>c(P,{...x,options:s});return h.displayName="TextFilter",h}return c(P,{...e})}const ee=({column:e,value:n,onChange:s,options:h})=>{const{placeholder:x,className:z,style:S,defaultValue:W,delay:V=500,defaultComparator:C="=",allowDecimal:w=!0,getFilter:k,onFilter:$,id:D,disabled:b,hideComparator:F,comparators:y=["=","!=",">",">=","<","<="]}=h||{},[o,p]=_(n?.number||W?.number||""),[l,g]=_(n?.comparator||W?.comparator||C),m=f(o),R=f(l),v=f(null),r=f(s),N=f($),u=f(o),I=f(l);d(()=>{m.current=o,R.current=l},[o,l]),d(()=>{r.current=s,N.current=$},[s,$]),d(()=>{const t=n?.number||"",j=n?.comparator||C;t!==u.current&&(p(t),u.current=t),j!==I.current&&(g(j),I.current=j)},[n,C]);const[E]=H(o,{wait:V});d(()=>{u.current=E||"",I.current=R.current;const t=E?{number:E,comparator:R.current}:null;r.current(t),N.current?.(t)},[E]),d(()=>{k&&k({get value(){return m.current?{number:m.current,comparator:R.current}:null},setValue:t=>{t?(p(t.number),g(t.comparator),r.current(t),N.current?.(t)):(p(""),r.current(null),N.current?.(null))},clear:()=>{p(""),g(C),r.current(null),N.current?.(null)}})},[k]);const q=f(!1),J=B(()=>{q.current=!0},[]),K=B(()=>{q.current=!1},[]);d(()=>{q.current&&v.current&&requestAnimationFrame(()=>{q.current&&v.current&&v.current.focus()})});const L=B(t=>{if(g(t),o){const j={number:o,comparator:t};r.current(j),N.current?.(j)}},[o]),a={"=":"=","!=":"\u2260",">":">",">=":"\u2265","<":"<","<=":"\u2264"},T={flex:1,fontWeight:400,...S},A={type:"text",id:D,"data-filter-field":e.dataField,value:o,onChange:t=>{const j=t.target.value;(w?/^[0-9.,]*$/:/^[0-9]*$/).test(j)&&p(j)},onFocus:J,onBlur:K,placeholder:x||e.filterPlaceholder||"Number...",disabled:b};return G(X,{children:[!F&&c(Z,{value:l,onChange:t=>L(t.target.value),disabled:b,children:y.map(t=>c("option",{value:t,children:a[t]||t},t))}),z?c("input",{ref:v,...A,className:z,style:{flex:1,width:"100%",fontWeight:400,...S}}):c(Y,{ref:v,...A,style:T})]})};export function NumberFilter(e){if(!("column"in e)&&!("value"in e)&&!("onChange"in e)){const s=e,h=x=>c(ee,{...x,options:s});return h.displayName="NumberFilter",h}return c(ee,{...e})}const te=({column:e,value:n,onChange:s,options:h})=>{const{className:x,style:z,defaultValue:S,defaultComparator:W="=",defaultRangeMode:V=!1,getFilter:C,onFilter:w,id:k,disabled:$,minDate:D,maxDate:b}=h||{},[F,y]=_(n?.startDate||S?.startDate||""),[o,p]=_(n?.endDate||S?.endDate||""),[l,g]=_(n?.diffFlag??S?.diffFlag??V),[m,R]=_(n?.comparator||S?.comparator||W),v=f({startDate:F,endDate:o,diffFlag:l,comparator:m}),r=f(s),N=f(w),u=f({startDate:F,endDate:o,diffFlag:l,comparator:m});d(()=>{v.current={startDate:F,endDate:o,diffFlag:l,comparator:m}},[F,o,l,m]),d(()=>{r.current=s,N.current=w},[s,w]),d(()=>{const a=n?.startDate||"",T=n?.endDate||"",A=n?.diffFlag??V,t=n?.comparator||W;a!==u.current.startDate&&(y(a),u.current.startDate=a),T!==u.current.endDate&&(p(T),u.current.endDate=T),A!==u.current.diffFlag&&(g(A),u.current.diffFlag=A),t!==u.current.comparator&&(R(t),u.current.comparator=t)},[n,V,W]);const[I]=H(F,{wait:500}),[E]=H(o,{wait:500});d(()=>{u.current={startDate:I,endDate:E,diffFlag:l,comparator:m};const a=I||E?{startDate:I,endDate:E,diffFlag:l,comparator:m}:null;r.current(a),N.current?.(a)},[I,E,l,m]),d(()=>{C&&C({get value(){const{startDate:a,endDate:T,diffFlag:A,comparator:t}=v.current;return a||T?{startDate:a,endDate:T,diffFlag:A,comparator:t}:null},setValue:a=>{a?(y(a.startDate||""),p(a.endDate||""),g(a.diffFlag??V),R(a.comparator||W),r.current(a),N.current?.(a)):(y(""),p(""),r.current(null),N.current?.(null))},clear:()=>{y(""),p(""),g(V),R(W),r.current(null),N.current?.(null)}})},[C]);const q=B(a=>{y(a.target.value)},[]),J=B(a=>{p(a.target.value)},[]),K=B(()=>{g(a=>!a)},[]),L=B(a=>{R(a.target.value)},[]);return G(X,{className:x,style:z,children:[c(ae,{$active:l,onClick:K,title:"Date range mode",disabled:$,children:l?"Range":"Single"}),!l&&G(Z,{value:m,onChange:L,disabled:$,style:{fontWeight:400},children:[c("option",{value:"=",children:"="}),c("option",{value:">=",children:"\u2265"}),c("option",{value:"<",children:"<"})]}),c(O,{type:"date",id:k,value:F,onChange:q,disabled:$,min:D,max:b,style:{fontWeight:400}}),l&&G(Q,{children:[c("span",{style:{color:"#6b7280",fontSize:12,fontWeight:400},children:"to"}),c(O,{type:"date",value:o,onChange:J,disabled:$,min:D,max:b,style:{fontWeight:400}})]})]})};export function DateFilter(e){if(!("column"in e)&&!("value"in e)&&!("onChange"in e)){const s=e,h=x=>c(te,{...x,options:s});return h.displayName="DateFilter",h}return c(te,{...e})}const re=({column:e,value:n,onChange:s,options:h})=>{const{placeholder:x="All",className:z,style:S,defaultValue:W,delay:V=300,options:C,getFilter:w,onFilter:k,id:$,disabled:D}=h||{},[b,F]=_(n||W||""),y=f(b),o=f(s),p=f(k),l=f(b);d(()=>{y.current=b},[b]),d(()=>{o.current=s,p.current=k},[s,k]),d(()=>{const r=n||"";r!==l.current&&(F(r),l.current=r)},[n]);const[g]=H(b,{wait:V});d(()=>{l.current=g||"",o.current(g||null),p.current?.(g||null)},[g]),d(()=>{w&&w({get value(){return y.current||null},setValue:r=>{F(r||""),o.current(r),p.current?.(r)},clear:()=>{F(""),o.current(null),p.current?.(null)}})},[w]);const m=B(r=>{F(r.target.value)},[]),R=C||e.filterOptions||[],v=G(Q,{children:[c("option",{value:"",children:x}),R.map(r=>c("option",{value:r.value,children:r.label},r.value))]});return z?c("select",{id:$,value:b,onChange:m,className:z,style:{width:"100%",fontWeight:400,...S},disabled:D,children:v}):c(ne,{id:$,value:b,onChange:m,style:{fontWeight:400,...S},disabled:D,children:v})};export function SelectFilter(e){if(!("column"in e)&&!("value"in e)&&!("onChange"in e)){const s=e,h=x=>c(re,{...x,options:s});return h.displayName="SelectFilter",h}return c(re,{...e})}export const getFilterComponent=e=>{switch(e){case"number":return NumberFilter;case"date":case"dateRange":return DateFilter;case"select":return SelectFilter;default:return TextFilter}};
