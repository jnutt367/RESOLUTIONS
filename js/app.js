gsap.to("html", { backgroundColor: "black" })
gsap.fromTo("#Layer_6", { opacity: 0 }, { opacity: 0 }, 0)
gsap.to("#Clouds_Front", { opacity: 0 })
gsap.to("#Clouds_Back", { opacity: 0 })
gsap.to("#Wizard_Action_Layer", { opacity: 0 })
gsap.to("#Magic_Symbols", { opacity: 0 })
let doubleBoxLift = gsap.timeline(

    )
    .fromTo("#Tentacles", { y: 500, scale: 0.1, y: 600, x: 100, opacity: 0 }, { x: 0, scale: 1, opacity: 1, duration: 5, y: 0 }, 2)
    .fromTo("#Tentacle_5", { y: 700, x: 0, scale: 0, opacity: 0 }, { scale: 1, opacity: 0, duration: 5, y: 0 }, 0)
    .fromTo("#Main_Floater", { y: 500 }, { duration: 3, y: 0, ease: "elastic.inOut" }, 0)
    .fromTo("#slide", { x: 0 }, { duration: 3, x: 230, ease: "elastic.inOut" }, 0)
    .fromTo("#Jet", { opacity: 0 }, { opacity: 1 }, 0)