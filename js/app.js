gsap.to("html", { backgroundColor: "black" })


gsap.to("#Wizard_Action_Layer", { opacity: 0 })
gsap.to("#Magic_Symbols", { opacity: 0 })

let doubleBoxLift = gsap.timeline(

    )
    .fromTo("#Tentacles", { y: 500, scale: 0.1, y: 600, x: 100, opacity: 0 }, { x: 0, scale: 1, opacity: 1, duration: 5, y: 0 }, 2)
    .fromTo("#Tentacle_5", { y: 700, x: 0, scale: 0, opacity: 0 }, { scale: 1, opacity: 0, duration: 5, y: 0 }, 0)
    .fromTo("#Main_Floater", { y: 500 }, { duration: 3, y: 0, ease: "elastic.inOut" }, 0)
    .fromTo("#slide", { x: 0 }, { duration: 3, x: 230, ease: "elastic.inOut" }, 0)
    .fromTo("#Jet", { opacity: 0 }, { opacity: 1, stroke: "red", duration: 4, repeat: -1 }, 0)
    .fromTo("#Clouds_Back", { opacity: 0 }, { duration: 4, opacity: 1, ease: "elastic", repeat: -1 }, 2)
    .fromTo("#Clouds_Front", { opacity: 0 }, { duration: 4, opacity: 1, ease: "elastic", repeat: -1 }, 1.8)
    .fromTo("#Wizard", { opacity: 0 }, { duration: 3, opacity: 1 }, 6)
    .fromTo("#Hand_Left", { opacity: 0 }, { duration: 3, opacity: 1 }, 6)
    .fromTo("#Hand_Right", { opacity: 0 }, { duration: 3, opacity: 1 }, 6)
    .fromTo("#Flame", { opacity: 0 }, { duration: 3, opacity: 0 }, 6)
    .fromTo("#Speech_Bubble", { opacity: 0 }, { duration: 3, opacity: 0 }, 6)