gsap.to("html", { backgroundColor: "black" })


gsap.to("#Layer_6", { opacity: 0 })
gsap.to("#Magic_Symbols", { opacity: 0 })

let doubleBoxLift = gsap.timeline(

    )
    .to("#Eye_Stalk_1", { x: -50, y: 110 })
    .to("#Eye_Stalk_2", { x: -100, y: 100 })
    .to("#Eye_Stalk_3", { x: -70, y: 50 })
    .fromTo("#Tentacles", { y: 500, scale: 0.1, y: 600, x: 100, opacity: 0 }, { x: 0, scale: 1, opacity: 1, duration: 5, y: 0 }, 7)
    .fromTo("#Tentacle_5", { y: 700, x: 0, scale: 0, opacity: 0 }, { scale: 1, opacity: 0, duration: 5, y: 0 }, 0)
    .fromTo("#Main_Floater", { y: 300 }, { duration: 6, y: 0, ease: "elastic.inOut" }, 0)
    .fromTo("#lever1", { y: 24 }, { duration: 6, y: -18, ease: "elastic.inOut" }, 0)
    .fromTo("#lever2", { y: 10 }, { duration: 6, y: -27, ease: "elastic.inOut" }, .2)
    .fromTo("#Jet", { opacity: 0 }, { opacity: 1, stroke: "red", duration: 4, repeat: -1 }, 0)
    .fromTo("#Clouds_Back", { opacity: 0 }, { duration: 4, opacity: 1, ease: "elastic", repeat: -1 }, 6)
    .fromTo("#Clouds_Front", { opacity: 0 }, { duration: 4, opacity: 1, ease: "elastic", repeat: -1 }, 6.8)
    .fromTo("#Wizard", { opacity: 0 }, { duration: 3, opacity: 1 }, 6)
    .fromTo("#Hand_Left", { opacity: 0 }, { duration: 3, opacity: 1 }, 6)
    .fromTo("#Hand_Right", { opacity: 0 }, { duration: 3, opacity: 1 }, 6)
    .fromTo("#Flame", { opacity: 0 }, { duration: 3, opacity: 0 }, 6)
    .fromTo("#Speech_Bubble", { opacity: 0 }, { duration: 3, opacity: 0 }, 6);

let sliderShowText = gsap.timeline(

    )
    .to("#Letter_Shadow", { opacity: 0 })
    .to("#Letter_Siding", { opacity: 0 })
    .fromTo("#slide", { x: 0 }, { duration: 6, x: 230 }, 6)
    .to("#Layer_6", { opacity: 1 }, 6)

.fromTo("#Letter_Shadow", { opacity: 0 }, { duration: 3, opacity: 1 }, 6.2)
    .fromTo("#Letter_Siding", { opacity: 0 }, { duration: 3, opacity: 1 }, 8)
    .fromTo("#Letter", { opacity: 0 }, { duration: 3, opacity: 1 }, 10)