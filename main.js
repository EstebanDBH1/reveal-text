
  gsap.registerPlugin(ScrollTrigger);

let reveal = gsap.to(".text p", {
    backgroundPositionX:"0%",
    stagger:1,
    duration: 2,
    delay: 4,
    ease: "Power2,InOut"
})


ScrollTrigger.create({
    trigger: ".text",
    start: "top center",
    end: "bottom center",
    markers: true,
    duration:2,
    scrub: 1,
    animation: reveal
})

