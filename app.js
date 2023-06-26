gsap.set("h1 div", {yPercent: -103})
const tl = gsap.timeline()

tl.to("h1 div ", {duration: .8, yPercent: 0, stagger: 0.05, ease: "expo.inOut"})

.to("h1 div:not([data-char='.'])", {duration: .5, yPercent: 103, stagger: 0.05, ease:"expo.inOut"})
// GSDeveTools.create({animation:tl})
console.log(tl);
