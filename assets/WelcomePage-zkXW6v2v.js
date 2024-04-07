import{u as n,N as r,j as e}from"./index-CQmN5GHo.js";const t="/camper-rental/assets/Banner-Images-DVxRIAoc.jpg",i=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100vh;
  width: 100%;
  background-image: url(${t});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin: 0;
`,a=n.h1`
color: #fff7ed;
  font-size: 55px;
  width: 100%;
  max-width: 600px;
  text-align: center;
  margin-bottom: 60px;
`,c=n(r)`
  font-weight: 500;
  font-size: 25px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  border-radius: 200px;
  padding: 20px 64px;
  text-decoration: none;
  color: #fff7ed;
  background-color: ${o=>o.theme.colors.red};
  transition: background-color ${o=>o.theme.transition};

  &:hover,
  :focus {
    background-color: ${o=>o.theme.colors.hoverRed};
  }
`,s=()=>e.jsxs(i,{children:[e.jsx(a,{children:"Discover Freedom on the Road: Rent Your Perfect Camper Now!"}),e.jsx(c,{to:"/catalog",children:"Find your own VAN"})]}),d=()=>e.jsx(e.Fragment,{children:e.jsx(s,{})});function g(){return e.jsx("section",{children:e.jsx(d,{})})}export{g as default};
