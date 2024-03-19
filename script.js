var tl = gsap.timeline()
gsap.set(".a",{opacity:0,y:10})
gsap.set(".right img",{opacity:0,y:10,scale:1.6})

tl
.from(".left",{
  width:0,
  duration:1,
  ease:Expo.easeInOut
})
.from(".right",{
  width:0,
  duration:1,
  ease:Expo.easeInOut
})
.to(".a",{
  stagger:.1,
  opacity:1,
  y:0,
  
  duration:1,
  ease:Expo.easeInOut
})
.to(".right img",{
  delay:-1,
  stagger:.5,
  opacity:1,
  y:0,
  scale:1,
  ease:Expo.easeInOut
})