gsap.registerPlugin(ScrollTrigger);

gsap.to(".square",{
    x: 700,
    duration: 3,
    scrollTrigger: {
        trigger: ".square",
        start: "top 80%",
        end: "top 30%",
        scrub: true,
        markers: true,
        toggleActions: "restart none none none"
        // toggleClass: "red"
    }
})