import{u as t,a as L,r as x,j as e,c as P,e as R}from"./index-BU7zJJFQ.js";import{M as W,s as i,P as O,c as T}from"./index-BN3CZPdm.js";const E=t.div`
  display: flex;
  justify-content: center;
`,G=t.svg`
  /* cursor: pointer;
  width: 20px;
  height: 20px; */
`,V=t.svg`
  fill: ${s=>s.theme.colors.yellow};
  width: 20px;
  height: 20px;
`,D=t.svg`
  width: 20px;
  height: 20px;
`,A=t.li`
  display: flex;
  gap: 24px;
  padding: 24px;
  width: 840px;
  height: 310px;

  /* outline: 1px solid red; */
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 20px;

  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);

  &:not(:last-child) {
    margin-bottom: 32px;
  }
`,B=t.img`
  border-radius: 10px;
  width: 290px;
  height: 310px;
`,K=t.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: ${s=>s.theme.colors.black};
`,_=t.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: ${s=>s.theme.colors.black};
`,q=t.div`
  display: flex;
  gap: 10px;
  align-items: center;
`,J=t.div`
  width: 24px;
  height: 24px;
`,N=t.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`,Q=t.p`
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  color: ${s=>s.theme.colors.black};
`,U=t.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`,X=t.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,Y=t.p`
  font-size: 16px;
  line-height: 1.5;
  color: ${s=>s.theme.colors.black};
`,Z=t.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,ee=t.p`
  width: 525px;
  font-size: 16px;
  line-height: 1.5;
  color: ${s=>s.theme.colors.grey};
  margin-bottom: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,se=t.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 8px;
  column-gap: 8px;
  margin-bottom: 24px;
`,n=t.li`
  padding: 12px 18px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  gap: 8px;

  color: ${s=>s.theme.colors.black};
  background-color: ${s=>s.theme.colors.blockFeatures};
`,r=t.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
`,te=t.button`
  display: block;
  padding: 16px 40px;
  background-color: ${s=>s.theme.colors.red};
  color: #ffffff;
  border: none;
  border-radius: 200px;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;

  transition: background-color ${s=>s.theme.transition};

  &:hover,
  :focus {
    background-color: #d84343;
  }
`,ie=({data:s})=>{const o=L(),[a,c]=x.useState(!1),[h,p]=x.useState(!1),{adults:d,description:g,engine:j,location:f,name:l,price:m,rating:u,transmission:v,details:w,gallery:b,reviews:k}=s,y=e.jsx(V,{children:e.jsx("use",{xlinkHref:i+"#icon-Rating"})}),I=e.jsx(D,{children:e.jsx("use",{xlinkHref:i+"#icon-map-pin"})}),S=e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{xlinkHref:i+"#icon-adults"})}),F=e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{xlinkHref:i+"#icon-kitchen"})}),H=e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{xlinkHref:i+"#icon-trans"})}),$=e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{xlinkHref:i+"#icon-petrol"})}),z=e.jsx("svg",{width:"20",height:"20",children:e.jsx("use",{xlinkHref:i+"#icon-bed"})}),C=e.jsx(O,{style:{color:"#000000",width:"20px",height:"20px"}}),M=e.jsx(G,{width:"24",height:"24",onClick:()=>{o(P(s)),p(!h)},children:e.jsx("use",{xlinkHref:i+"#icon-red-heart"})});return e.jsxs(e.Fragment,{children:[e.jsxs(A,{children:[e.jsx(B,{src:b[0],alt:l}),e.jsxs("div",{children:[e.jsxs(N,{children:[e.jsx(K,{children:l}),e.jsxs(q,{children:[e.jsxs(_,{children:["€",m,".00"]}),e.jsx(J,{children:M})]})]}),e.jsxs(U,{children:[e.jsxs(X,{children:[y,e.jsxs(Q,{children:[u," (",k.length," Rewiews)"]})]}),e.jsxs(Z,{children:[I,e.jsx(Y,{children:f})]})]}),e.jsx(ee,{children:g}),e.jsxs(se,{children:[e.jsxs(n,{children:[S,e.jsxs(r,{children:[d," adults"]})]}),e.jsxs(n,{children:[H,e.jsx(r,{children:v})]}),e.jsxs(n,{children:[$,e.jsx(r,{children:j})]}),e.jsxs(n,{children:[F,"Kitchen"]}),e.jsxs(n,{children:[z,e.jsxs(r,{children:[w.beds," beds"]})]}),e.jsxs(n,{children:[C,"AC"]})]}),e.jsx(te,{type:"button",onClick:()=>{c(!0)},children:"Show more"})]})]}),e.jsx(W,{isModalOpen:a,setIsOpen:c,data:s})]})},ne=t.p`
  max-width: 700px;
  margin-top: 40px;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: ${s=>s.theme.colors.black};
`,oe=()=>{const s=R(T);return e.jsx(e.Fragment,{children:s.length===0?e.jsx(ne,{children:"Hi there! It seems like the list for chosen campers is empty. Could you please add them first? Thank you!"}):e.jsx("ul",{children:s.map(o=>e.jsx(ie,{data:o},o._id))})})},re=()=>e.jsx(E,{children:e.jsx(oe,{})});function xe(){return e.jsx("section",{children:e.jsx(re,{})})}export{xe as default};
