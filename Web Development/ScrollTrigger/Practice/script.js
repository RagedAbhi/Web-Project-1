// gsap.registerPlugin(ScrollTrigger);

gsap.to(".img",{
    x: 700,
    scrollTrigger: {
        trigger: ".spacefiller",
        scrub: true,
        markers: true,
        start: "40% top",
        end: "50% top"
    }
})

gsap.to(".content",{
    scale:"1",
    scrollTrigger: {
        trigger: ".spacefiller",
        scrub: true,
        markers: true,
        start: "40% top",
        end: "50% top"
    }
})