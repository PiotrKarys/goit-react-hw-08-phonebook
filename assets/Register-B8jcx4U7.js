import{r as t,e as x,j as e,B as p,d as g,s as j}from"./index-HDLPoZPJ.js";import{H as b}from"./chunk-7OLJDQMT-DgC3Vhk2.js";import{V as R}from"./chunk-NTCQBYKE-D6onLzWA.js";import{F as r,a,I as i}from"./chunk-6CVSDS6C-DaF6acHM.js";import"./chunk-G72KV6MB-DVR9u_X4.js";const f=()=>{const[o,d]=t.useState(""),[l,m]=t.useState(""),[n,c]=t.useState(""),u=x(),h=s=>{s.preventDefault(),u(j({name:o,email:l,password:n}))};return e.jsxs(p,{p:6,borderWidth:1,borderRadius:"md",boxShadow:"lg",maxWidth:"400px",width:"100%",mx:"auto",mt:100,bg:"rgba(255, 255, 255, 0.9)",children:[e.jsx(b,{as:"h2",size:"lg",mb:6,textAlign:"center",children:"Register"}),e.jsx("form",{onSubmit:h,children:e.jsxs(R,{spacing:4,align:"stretch",children:[e.jsxs(r,{mb:4,isRequired:!0,children:[e.jsx(a,{children:"Name"}),e.jsx(i,{type:"text",value:o,onChange:s=>d(s.target.value),placeholder:"Name"})]}),e.jsxs(r,{mb:4,isRequired:!0,children:[e.jsx(a,{children:"Email"}),e.jsx(i,{type:"email",value:l,onChange:s=>m(s.target.value),placeholder:"Email"})]}),e.jsxs(r,{mb:4,isRequired:!0,children:[e.jsx(a,{children:"Password"}),e.jsx(i,{type:"password",value:n,onChange:s=>c(s.target.value),placeholder:"Password"})]}),e.jsx(g,{type:"submit",colorScheme:"teal",width:"full",size:"lg",children:"Register"})]})})]})},C=()=>e.jsx(f,{});export{C as default};