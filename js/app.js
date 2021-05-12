gsap.to("html", { backgroundColor: "black" })


gsap.to("#First_Circle", { opacity: 1, display: "grid" })


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

.fromTo("#slide", { x: 0 }, { duration: 3, ease: "power1.out", x: 230 }, 7)
    .fromTo("#Layer_6", { opacity: 0 }, { opacity: 1 }, 7.1)
    .fromTo("#Letter_Shadow", { opacity: 0 }, { duration: 2, opacity: 1 }, 7.5)
    .fromTo("#Letter_Siding", { opacity: 0 }, { duration: 1.5, opacity: 1 }, 8)
    .fromTo("#Letter", { opacity: 0 }, { duration: 1.5, opacity: 1 }, 9)
    .to("#Speech_Bubble", { opacity: 1 })

.fromTo("#Magic_Symbols", { opacity: 0 }, { opacity: 1 })
    .fromTo("#First_Circle", { opacity: 0 }, { duration: 1, opacity: 1 }, 0)
    .fromTo("#Second_Circle", { opacity: 0 }, { duration: 1, opacity: 1 }, )
    .fromTo("#Third_Circle", { opacity: 0 }, { duration: 1, opacity: 1 }, )
    .fromTo("#Fourth_Circle", { opacity: 0 }, { duration: 1, opacity: 1 }, )
    .fromTo("#Fifth_Circle", { opacity: 0 }, { duration: 1, opacity: 1 }, )

.fromTo("#First_Circle_Inner", { opacity: 0 }, { duration: 1, opacity: 1 }, )
    .fromTo("#Second_Circle_Inner", { opacity: 0 }, { duration: 1, opacity: 1 }, )
    .fromTo("#Third_Circle_Inner", { opacity: 0 }, { duration: 1, opacity: 1 }, )
    .fromTo("#Fourth_Circle_Inner", { opacity: 0 }, { duration: 1, opacity: 1 }, )
    .fromTo("#Fifth_Circle_Inner", { opacity: 0 }, { duration: 1, opacity: 1 }, )
    .fromTo("#Outer_Circle", { opacity: 0 }, { duration: 1, opacity: 1 });



let eyesMove = gsap.timeline()

.to("#eyes", { y: -10 }, 10)
    .to("#eyes", { y: 10, x: -13 }, 11)

.fromTo("#symbol", { opacity: 0 }, { opacity: 1 })
    .fromTo("#Flame", { opacity: 0 }, { opacity: 1 })

.to("#eyes", { duration: 1, y: -10, x: 0 })
    .to("#Speech_Bubble", { duration: 1, opacity: 0, ease: "back" })
    .to("#eyes", { duration: 1, x: 3, y: 5 }, 14)
    .to("#eyes", { duration: 1, y: 10, x: -15 })
    .to("#eyes", { duration: 1, y: 0, x: -10 })
    .to("#eyes", { duration: 1, y: -5, x: 0 })
    .to("#eyes", { duration: 1, y: 0, x: 2 })
    .to("#eyes", { duration: 1, x: 2, y: 12 })
    .to("#eyes", { duration: 1, x: -3 })
    .to("#eyes", { duration: 5, ease: "elastic.inOut", x: -6, repeat: -1 })
    .to("#Eyeball", )


let tumblersSipn = gsap.timeline()

.to("#Slot_Lever", { x: 50, y: 10, rotate: 45 }, 20)
    .to("#Crop", { duration: .3, y: -15, opacity: 0, repeat: -1, ease: "bounce" })
    .to("#Share", { duration: .2, y: 15, opacity: 0, repeat: -1, ease: "bounce" })
    .to("#Export", { duration: .3, y: -15, opacity: 0, repeat: -1, ease: "bounce" })
    .to(".Button_Class", { y: -70 })