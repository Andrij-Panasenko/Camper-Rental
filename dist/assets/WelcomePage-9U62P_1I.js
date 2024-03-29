import{u as n,N as r,j as e}from"./index-FsY68_Lt.js";const t="/camper-rental/assets/Banner-Images-DVxRIAoc.jpg",a=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-image: url(${t});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin: 0;
`,i=n.h1`
color: #fff7ed;
  font-size: 55px;
  max-width: 600px;
  text-align: center;
  margin-bottom: 60px;
`,c=n(r)`
  font-weight: 500;
  font-size: 25px;
  line-height: 1, 5;
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
`,s=()=>e.jsxs(a,{children:[e.jsx(i,{children:"Discover Freedom on the Road: Rent Your Perfect Camper Now!"}),e.jsx(c,{to:"/catalog",children:"Find your own VAN"})]}),d=()=>e.jsx(e.Fragment,{children:e.jsx(s,{})});function g(){return e.jsx("div",{children:e.jsx(d,{})})}export{g as default};
