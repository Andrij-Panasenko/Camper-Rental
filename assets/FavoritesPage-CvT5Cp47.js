import{u as o,N as r,j as e,b as i}from"./index-CQmN5GHo.js";import{c as n,C as a}from"./CampersItem-k4RJ4d5X.js";const c=o.div`
  display: flex;
  justify-content: center;
`,l=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`,p=o.p`
  max-width: 700px;
  margin-top: 40px;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  text-align: center;
  color: ${t=>t.theme.colors.black};
`,d=o(r)`
  font-size: 30px;
  font-weight: 700;
  text-decoration: none;
  color: ${t=>t.theme.colors.red};
  position: relative;

  &::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -5px;
    right: 0;
    width: 0;
    height: 4px;
    border-radius: 10px;
    background-color: ${t=>t.theme.colors.red};
    transition: ${t=>t.theme.transition};
  }

  &:hover,
  :focus {
    &::before {
      width: 100%;
      left: 0;
    }
  }
`,h=()=>e.jsx(d,{to:"/catalog",children:"Back to catalog"}),x=()=>{const t=i(n);return e.jsx(e.Fragment,{children:t.length===0?e.jsxs(l,{children:[e.jsx(p,{children:"Hi there! It seems like the list for chosen campers is empty. Could you please add them first? Thank you!"}),e.jsx(h,{})]}):e.jsx("ul",{children:t.map(s=>e.jsx(a,{value:s},s._id))})})},m=()=>e.jsx(c,{children:e.jsx(x,{})});function g(){return e.jsx("section",{children:e.jsx(m,{})})}export{g as default};
