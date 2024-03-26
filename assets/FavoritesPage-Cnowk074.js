import{u as r,a as o,j as e}from"./index-CYjzjvXM.js";import{c as i,C as a}from"./CampersItem-B2LQuWNo.js";const n=r.div`
  display: flex;
  justify-content: center;
`,c=r.p`
  max-width: 700px;
  margin-top: 40px;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: ${t=>t.theme.colors.black};
`,l=()=>{const t=o(i);return e.jsx(e.Fragment,{children:t.length===0?e.jsx(c,{children:"Hi there! It seems like the list for chosen campers is empty. Could you please add them first? Thank you!"}):e.jsx("ul",{children:t.map(s=>e.jsx(a,{value:s},s._id))})})},p=()=>e.jsx(n,{children:e.jsx(l,{})});function x(){return e.jsx("section",{children:e.jsx(p,{})})}export{x as default};
