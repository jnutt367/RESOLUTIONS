gsap.to("html", { backgroundColor: "black" })
gsap.from("html", { duration: 1.5, y: -500, ease: "bounce.out", fill: "black", opacity: .4, skewX: 45 });


gsap.to("#Speech_Bubble", { opacity: 0 })
var animation = gsap.timeline()

//let doubleBoxLift = gsap.timeline(  )
.to("#Eye_Stalk_1", { x: -50, y: 110 })
    .to("#Eye_Stalk_2", { x: -100, y: 100 })
    .to("#Eye_Stalk_3", { x: -70, y: 50 })
    .fromTo("#Tentacle_5", { y: 700, x: 0, scale: 0, opacity: 0 }, { scale: 1, opacity: 0, duration: 5, y: 0 }, 0)
    .fromTo("#Main_Floater", { y: 150 }, { duration: 6, y: 0, ease: "elastic.inOut" }, 0)
    .fromTo("#lever1", { y: 24 }, { duration: 6, y: -18, ease: "elastic.inOut" }, 0)
    .fromTo("#lever2", { y: 10 }, { duration: 6, y: -27, ease: "elastic.inOut" }, .2)
    .fromTo("#Jet", { opacity: 0 }, { opacity: 1, stroke: "red", duration: 4, repeat: -1 }, 1)
    .fromTo("#Clouds_Back", { opacity: 1 }, { duration: 4, opacity: 1, ease: "elastic", repeat: -1 }, 6)
    .fromTo("#Clouds_Front", { opacity: 1 }, { duration: 4, opacity: 1, ease: "elastic", repeat: -1 }, 6.8)
    .fromTo("#Wizard", { opacity: 1, y: 150 }, { duration: 6, y: 0, ease: "elastic.inOut" }, 0)
    .fromTo("#Hand_Left", { opacity: 1, y: 150 }, { duration: 6, y: 0, ease: "elastic.inOut" }, 0)
    .fromTo("#Hand_Right", { opacity: 1, y: 150 }, { duration: 6, y: 0, ease: "elastic.inOut" }, 0)
    .fromTo("#Flame", { opacity: 0 }, { duration: 3, opacity: 0 }, 6)

//let sliderShowText = gsap.timeline()

.fromTo("#slide", { x: 0 }, { duration: 1, ease: "power1.out", x: 230 }, 5.8)
    .fromTo("#Layer_6", { opacity: 0 }, { opacity: 1 }, 6)
    .fromTo("#Letter_Shadow", { opacity: 0 }, { duration: 1, opacity: 1 }, 6.6)
    .fromTo("#Letter_Siding", { opacity: 0 }, { duration: 1, opacity: 1 }, 6.6)
    .fromTo("#Letter", { opacity: 0 }, { duration: 1, opacity: 1 }, 6)
    .fromTo("#Tentacle_1", { opacity: 1, y: 200, x: 180 }, { duration: 1.5, y: 0, x: 0, ease: "bounce.inOut", opacity: 1 }, 8)
    .fromTo("#Tentacle_2", { y: 444, x: 200, opacity: 1 }, { duration: 1.5, y: 0, x: 0, ease: "bounce.inOut", opacity: 1 }, 8)
    .fromTo("#Tentacle_3", { y: 400, x: -300, opacity: 1 }, { duration: 1.5, y: 0, x: 0, ease: "bounce.inOut", opacity: 1 }, 7)
    .fromTo("#Tentacle_4", { y: 180, x: -190, opacity: 1 }, { duration: 1.5, y: 0, x: 0, ease: "bounce.inOut", opacity: 1 }, )

.fromTo("#Magic_Symbols", { opacity: 0 }, { opacity: 1 }, 9)
    .fromTo("#First_Circle", { opacity: 0 }, { duration: 1, opacity: .3 }, )
    .fromTo("#Second_Circle", { opacity: 0 }, { duration: 1, opacity: .3 }, )
    .fromTo("#Third_Circle", { opacity: 0 }, { duration: 1, opacity: .3 }, )
    .fromTo("#Fourth_Circle", { opacity: 0 }, { duration: 1, opacity: .3 }, )
    .fromTo("#Fifth_Circle", { opacity: 0 }, { duration: 1, opacity: .3 }, )

.fromTo("#First_Circle_Inner", { opacity: 0 }, { duration: 1, opacity: 1 }, )
    .fromTo("#Second_Circle_Inner", { opacity: 0 }, { duration: 1, opacity: 1 }, )
    .fromTo("#Third_Circle_Inner", { opacity: 0 }, { duration: 1, opacity: 1 }, )
    .fromTo("#Fourth_Circle_Inner", { opacity: 0 }, { duration: 1, opacity: 1 }, )
    .fromTo("#Fifth_Circle_Inner", { opacity: 0 }, { duration: 1, opacity: 1 }, )
    .fromTo("#Outer_Circle", { opacity: 0 }, { duration: 1, opacity: 1 })



//let eyesMove = gsap.timeline()
.to("#eyes", { y: 10, x: -6 }, 6)
    .to("#eyes", { y: 0, x: 0 }, 7)
    .fromTo("#Speech_Bubble", { x: -100 }, { duration: 1, y: -5, x: 30, opacity: 1, ease: "elastic.out" })
    .to("#eyes", { duration: 1.5, y: 10, x: -8 }, 8)
    .to("#eyes", { duration: .5, x: 2 })
    .fromTo("#symbol", { opacity: 0 }, { opacity: 1 })
    .fromTo("#Flame", { opacity: 0 }, { opacity: 1 }, 9)
    .to("#eyes", { duration: .3, y: 10, x: 2, repeat: 3, ease: "elastic.inOut" })
    .to("#eyes", { duration: 1, y: 7, x: -10 }, 11.5)
    .to("#eyes", { duration: 1, y: 0, x: -10 }, 11.9)
    .to("#eyes", { duration: 1, y: -3, x: 0 })
    .to("#eyes", { duration: 1, y: 0, x: 2 })
    .to("#eyes", { duration: 1, x: 2, y: 7 })
    .to("#eyes", { duration: 1, y: 7, x: -10 })
    .to("#eyes", { duration: 1, y: 0, x: -10 })
    .to("#eyes", { duration: 1, y: -3, x: 0 })
    .to("#eyes", { duration: 1, duration: 1, y: 0, x: 2 })
    .to("#eye", { y: 30, x: -50 }, 20)
    .to("#Eye_Stalk_1", { y: 80 }, 20)
    .to("#eyes", { duration: 1, y: 0, x: 0 })



//let tumblersSipn = gsap.timeline()

.to("#Slot_Lever", { x: 50, y: 10, rotate: 45 }, 23.3)
    .to("#Crop", { duration: .3, y: -35, opacity: 0, repeat: 50, ease: "bounce" })
    .to("#Share", { duration: .2, y: 35, opacity: 0, repeat: 50, ease: "bounce" }, 23.4)
    .to("#Export", { duration: .3, y: -35, opacity: 0, repeat: 50, ease: "bounce" }, 23.4)
    .to(".Button_Class", { y: -70 }, 20)
    .to("#Button_Top_Btm", { x: -10, y: 10 }, 21)
    .to("#Button_Top_Top", { x: -10, y: 10 }, 22)
    .to("#eyes", { y: -1 }, 23)
    //let powerGauge = gsap.timeline()
    .to("#Gauge_Handle", { scale: 0 })
    .to("#Gauge_Arrow", { duration: 1, x: 70, y: -20, ease: "power4" }, 16.1)
    .to("#Gauge_Arrow", { duration: 1, x: 160, rotate: 25, y: -25, ease: "power4" })
    .to("#Gauge_Arrow", { duration: 1, x: 300, rotate: 55, y: 25, ease: "power4" })
    .to("#Gauge_Arrow", { duration: 1, x: 400, rotate: 85, y: 130, ease: "power4" })
    .to("#Gauge_Arrow", { duration: 1, x: 430, rotate: 110, y: 280, ease: "power4" })
    .to("#Gauge_Arrow", { duration: .1, x: 430, rotate: 110, y: 270, ease: "power4" })


//let circlesIngnite = gsap.timeline()

.to("#First_Circle_Inner", { duration: 1, strokeWidth: "6" }, 16)
    .to("#Second_Circle_Inner", { duration: 1, repeat: -1, strokeWidth: "6" }, )
    .to("#Third_Circle_Inner", { duration: 1, repeat: -1, strokeWidth: "6" }, )
    .to("#Fourth_Circle_Inner", { duration: 1, repeat: -1, strokeWidth: "6" }, )
    .to("#Fifth_Circle_Inner", { duration: 1, repeat: -1, strokeWidth: "6", ease: "bounce" }, )
    .to("#Fifth_Circle", { duration: 1, repeat: -1, strokeWidth: "6", ease: "bounce" }, )


//let crystallBall = gsap.timeline()
.to("#arm", { y: 10 }, 21.5)
    .to("#Arm_Top", { y: 10 }, 21.5)
    .to("#Crystal_Power", { y: 10 }, 22)
    .fromTo("#Crystal_Power", { opacity: 0 }, { duration: 3, ease: "back", opacity: 1 }, 22.2)

document.getElementById("play").onclick = () => animation.play();
document.getElementById("pause").onclick = () => animation.pause();
document.getElementById("reverse").onclick = () => animation.reverse();
document.getElementById("restart").onclick = () => animation.restart();
document.getElementById("test").onclick = () => animation.test();