const tl = gsap.timeline();
tl.from("nav",{
  y:200,
  opacity:0,
  duration:1
})
tl.from("nav img,nav .brand,nav .navmiddle,nav .navlast a,nav .navlast button",{
  y:-100,
  duration:1,
  delay:1,
  opacity:0,
  stagger:0.2,
})
tl.from(".main h1",{
  y:600,
  opacity:0,
  stagger:0.6,
})
tl.from(".main>img",{
  scale:0,

})
tl.from(".scrolldown",{
  opacity:0,
  y:50,
  yoyo:true,
  repeat:-1,
})

