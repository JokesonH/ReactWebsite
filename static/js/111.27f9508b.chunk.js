"use strict";(self.webpackChunkwibe_test=self.webpackChunkwibe_test||[]).push([[111],{5111:(e,t,i)=>{i.r(t),i.d(t,{default:()=>m});var l=i(5043),a=i(6867),o=i(1345),n=i(3840),r=i(579);const s=(0,a.Ay)(o.P.div)`
  width: 100vw;
  z-index: 6;
  position: absolute;
  top: ${e=>e.click?"0":`-${e.theme.navHeight}`};

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.3s ease;

  @media (max-width: 40em) {
    top: ${e=>e.click?"0":"calc(-50vh - 4rem)"};
  }
`,c=(0,a.Ay)(o.P.ul)`
  position: relative;
  height: ${e=>e.theme.navHeight};
  background-color: ${e=>e.theme.body};
  color: ${e=>e.theme.text};
  list-style: none;

  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  padding: 0 10rem;

  @media (max-width: 40em) {
    flex-direction: column;
    padding: 2rem 0;
    height: 50vh;
  }
`,h=a.Ay.li`
  background-color: ${e=>`rgba(${e.theme.textRgba}, 0.7)`};
  list-style-type: style none;
  color: ${e=>e.theme.body};
  width: 15rem;
  height: 2.5rem;

  clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);

  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${e=>e.theme.fontmd};
  font-weight: 600;
  text-transform: uppercase;

  cursor: pointer;

  @media (max-width: 40em) {
    width: 10rem;
    height: 2rem;
  }
`,d=(0,a.Ay)(o.P.li)`
  text-transform: uppercase;
  color: ${e=>e.theme.text};
  cursor: pointer;
  @media (max-width: 40em) {
    flex-direction: column;
    padding: 0.5rem 0;
  }
`,m=()=>{const[e,t]=(0,l.useState)(!1),{scroll:i}=(0,n.g7)(),a=l=>{let a=document.querySelector(l);t(!e),i.scrollTo(a,{offset:"-100",duration:"2000",easing:[.25,0,.35,1]})};return(0,r.jsx)(s,{click:+e,initial:{y:"-100%"},animate:{y:0},transition:{duration:2,delay:5},children:(0,r.jsxs)(c,{drag:"y",dragConstraints:{top:0,bottom:70},dragElastic:.05,dragSnapToOrigin:!0,children:[(0,r.jsx)(h,{onClick:()=>t(!e),children:"Menu"}),(0,r.jsx)(d,{onClick:()=>a("#home"),whileHover:{scale:1.1,y:-5},whileTap:{scale:.9,Y:0},children:"Home"}),(0,r.jsx)(d,{onClick:()=>a(".about"),whileHover:{scale:1.1,y:-5},whileTap:{scale:.9,Y:0},children:"about"}),(0,r.jsx)(d,{onClick:()=>a("#shop"),whileHover:{scale:1.1,y:-5},whileTap:{scale:.9,Y:0},children:"past projects"}),(0,r.jsx)(d,{onClick:()=>a("#new-arrival"),whileHover:{scale:1.1,y:-5},whileTap:{scale:.9,Y:0},children:"available designs"})]})})}}}]);
//# sourceMappingURL=111.27f9508b.chunk.js.map