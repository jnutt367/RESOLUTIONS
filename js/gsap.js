let pageLoad = gsap.timeline()

.to("#Control_Ring", { duration: 3, y: -50, ease: "bounce.out" })
    .fromTo("#Magic_Symbols", { opacity: 0 }, { ease: "elastic.inOut", strokeWidth: "2", x: -50, y: -30, scale: 1.1, duration: 5, opacity: 1 })
    .to("#Magic_Symbols", { stroke: "#e4196e", ease: "elastic", duration: 5 }, 5)
    .to("#Tentacle_1", { duration: 3, y: 30, x: 10, ease: "elastic.out", repeat: -1 }, 5)
    .to("#Tentacle_2", { duration: 4, y: 30, x: 10, ease: "elastic.out", repeat: -1 }, 5)
    .to("#Tentacle_3", { duration: 3.5, y: 10, x: 10, ease: "elastic.out", repeat: -1 }, 5)
    .to("#Tentacle_4", { duration: 4, y: 10, x: 10, ease: "elastic.out", repeat: -1 }, 5)
    .to("#Tentacle_5", { duration: 6, ease: "elastic.out", y: -10, repeat: -1 }, 5)

.to("#Eye_Stalk_3", { x: -50, y: 20 }, 1)
    .to("#Eye_Stalk_2", { x: -50, y: 70 }, 1)
    .to("#Eye_Stalk_1", { x: 0, y: 50 }, 1)
    .to("#Small_Box", { y: 30 }, 2)
    .to("#Tumblers", { y: 30 }, 2)
    .to("#Buttons", { y: 30 }, 2)
    .to("#Small_Box_Jet", { y: 30 }, 2)
    .to("#Tumblers", { stroke: "#e4196e;" }) //fill:#e4196e;
    .to("#lever5", { y: -10, duration: 4, repeat: 2 })
    .to("#lever3", { y: 10, duration: 2, repeat: 3 })
    .to("#lever4", { y: -20, duration: 2 });

let crystallBall = gsap.timeline()


.to("#Slot_Lever", { x: 30, y: 40, rotate: 45 }, 3)
    .to("#Buttons", { stroke: "black" })
    .to("#slide", { duration: 3, x: 190, ease: "elastic.out" })
    .to("#Arm_Top", { duration: 3, x: 55, y: -50, ease: "elastic.out" }, 4)
    .to("#arm", { duration: 3, x: 0, y: 10, ease: "elastic.out", rotate: -25 }, 4)
    .fromTo(".ball1", { opacity: 0, x: 0, y: 0 }, { scale: 1.2, ease: "bounce", duration: 2, opacity: 1 }, 6)
    .fromTo(".ball2", { opacity: 0, x: 0, y: 0 }, { scale: 1.1, ease: "bounce", duration: 3, opacity: 1 }, 5)
    .fromTo(".ball3", { opacity: 0, x: 0, y: 0 }, { scale: 1.2, ease: "bounce", duration: 3.5, opacity: 1 }, 6)
    .fromTo(".ball4", { opacity: 0, x: 0, y: 0 }, { scale: 1.1, ease: "bounce", duration: 2.5, opacity: 1 }, 6)
    .fromTo(".ball5", { opacity: 0, x: 0, y: 0 }, { scale: 1.2, ease: "bounce", duration: 1.5, opacity: 1 }, 5)
    .fromTo(".ball6", { opacity: 0, x: 0, y: 0 }, { scale: 1.1, ease: "bounce", duration: 4, opacity: 1 }, 6)


let cloudsMove = gsap.timeline()
    .fromTo("#Clouds_Back", { display: "none" }, { display: "grid", duration: 2.5, opacity: 1, ease: "elastic", scale: 1.1, x: -3, y: -6, repeat: -1 }, 6)
    .fromTo("#Clouds_Front", { display: "none" }, { display: "grid", duration: 2, opacity: 1, ease: "elastic", scale: 1.1, x: -3, y: -6, repeat: -1 }, 6)
    .fromTo("#Flame", { opacity: 0 }, { duration: 0.1, opacity: 1, repeat: -1 }, 5.5)