import{j as e,N as c,R as i,a as o,r as a,O as d}from"./index-83f7d5be.js";import{L as A,a as m}from"./LazyImage-ebaf8488.js";const x="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABzklEQVR4nO3WT4iNURjH8TvMTCQl0SQ2NhYWQzY2FkIyI1FKSZKFlISVrGQ9C0U2Y4jUlM2UhVhYTJGFhUasrBQ7lD9F/mQ+OjmvHtc7d+6d5r53c7/L87z3/H7nec7z3FOrdWkDuIzjWNIJ8XX45Q93O3X6gv1Viy/Fpyz+Gr0h1ouedhs49ffsnKuLjeABBtol3oOXWfwrVoTYbkzn2FRbMoHhcPprYX0N3uX1ZGLvXAUW4QAu4TYuYhcW5Pi9YGBjXuvD47A+0mwqN2AfdqSaYTteKecJhkLrPQumUt2F1PfNJj4U6iikrdi8Wd6kMoS6FzzCppnED5X8oJ7redD0YzMmtU66oHvqxQfwOX+QTIzjcG6rhzkDJ0tMJyP38R1XcQxX8CPv9RYXcBR3gokPWB43Oh2C50uE1jco20oMlnTE+D8i/0/JEzGQUluwrNYmsDrojMbAmOoZiwbOdsDAmWggDZSq2RoNLMaXCsVTF/TXX5CJCg3cLLuhWyoSn240DScrMDDRqE/XhonYDt5j1WzD4uAc/nyaIY3r4YbiBTiCn/Mo/q3lhwgG8XQexKeKB0rLYCF24hZe4GMTgumb57iBbcXjpEuX2gz8BgR1bqgIxoXjAAAAAElFTkSuQmCC";function h(){return e.jsxs("div",{className:"flex justify-center items-center gap-2 ",children:[e.jsx("div",{className:"w-8 h-8",children:e.jsx(A,{src:x,alt:"logotype"})}),e.jsx(c,{to:i.index,children:e.jsx("h6",{className:"text-lg font-bold text-primary",children:"FlavorVerse"})})]})}const u=[{title:"Home",link:i.index},{title:"Favorites",link:i.favorites}];function l(){const s=o();return e.jsx("nav",{children:e.jsx("ul",{className:"flex flex-col md:flex-row gap-2 md:gap-5",children:u.map(({title:n,link:r})=>e.jsx("li",{onClick:()=>s(r),className:"cursor-pointer hover:text-primary ",children:n},n))})})}function j({clickHandler:s}){return e.jsx("div",{className:"absolute left-0 top-20 w-full min-h-screen bg-[rgba(0,0,0,0.8)]",onClick:s,children:e.jsx("div",{className:"pl-3",children:e.jsx(l,{})})})}const p="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAATklEQVR4nO3Uuw0AMQgEUQqhLfovZS6woyvASzBPIiJZiU+VpAtoYB5V1x+n8cqsDNDREUikl5AFZzjpAO0fUBTpJWTBGU46QPsHpAr4AG8LwMko0jbkAAAAAElFTkSuQmCC";function g(){const[s,n]=a.useState(!1),r=()=>{n(t=>!t)};return e.jsxs("header",{className:"flex justify-between items-center py-4 px-2 h-20 min-h-20",children:[e.jsxs("div",{className:"block md:hidden",children:[e.jsx("div",{className:"w-8 h-8",onClick:r,children:e.jsx(A,{src:p,alt:"menu icon"})}),s?e.jsx(j,{clickHandler:r}):null]}),e.jsx(h,{}),e.jsx("div",{className:"hidden md:block",children:e.jsx(l,{})}),e.jsx("div",{className:"rounded-2xl border-2 border-white  py-1 px-6 text-center cursor-pointer hover:border-primary hover:text-primary",children:"Sign in"})]})}function N(){return e.jsxs(e.Fragment,{children:[e.jsx(g,{}),e.jsx("main",{children:e.jsx(a.Suspense,{fallback:e.jsx(m,{}),children:e.jsx("section",{className:"flex flex-col items-center",children:e.jsx(d,{})})})})]})}export{N as default};