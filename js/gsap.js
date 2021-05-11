gsap.to("#blue", { stroke: "blue", strokeWidth: 5, fill: "green" })
gsap.fromTo("svg", { opacity: 0, scale: 0 }, { duration: 15, margin: "10", stroke: "black", autoAlpha: 2, scale: 1, opacity: 1, ease: "elastic", borderRadius: "50%", duration: 1, display: "grid" }, 0)
gsap.to("html", { backgroundColor: "black" })
gsap.from("html", { autoAlpha: 1 })



let pageLoad = gsap.timeline()


.to("#Control_Ring", { duration: 3, y: -50, ease: "bounce.out" })
    .fromTo("#Magic_Symbols", { autoAlpha: 0, opacity: 0 }, { autoAlpha: 1, ease: "elastic.inOut", strokeWidth: "2", x: -50, y: -30, scale: 1.1, duration: 5, opacity: 1 })
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
    .fromTo("#Layer_6", { opacity: 0, x: 0 }, { duration: 4, x: 10, ease: "elastic.out", opacity: 1 }, 4)

let jetFire = gsap.timeline()

.fromTo("#Jet", { opacity: 0 }, { duration: 2, x: -5, y: 7, opacity: 1, stroke: "red", repeat: -1 }, 5.5)
    .fromTo("#bg", { y: 0 }, { y: 0, stroke: "orange", strokeWidth: 5, fill: "black", }, 6.9)
    .to("svg", { scale: 1, opacity: 1, ease: "elastic.out", duration: "20", borderRadius: "5" }, 5.6)
    .to("#Wizard", { duration: 4, x: 10, repeat: 1 }, 5.5)
    .to("#Magic_Symbols", { stroke: "black", strokeWidth: 3, repeat: -1 }, 10)



let cloudsMove = gsap.timeline()
    .fromTo("#Clouds_Back", { display: "none" }, { display: "grid", duration: 2.5, opacity: 1, ease: "elastic", scale: 1.1, x: -3, y: -6, repeat: -1 }, 6)
    .fromTo("#Clouds_Front", { display: "none" }, { display: "grid", duration: 2, opacity: 1, ease: "elastic", scale: 1.1, x: -3, y: -6, repeat: -1 }, 6)
    .fromTo("#Flame", { opacity: 0 }, { scale: 1, duration: 2, opacity: 1, repeat: -1 }, 10)
    .to("#eyes", { x: 2 }, 11)
    .to("#Hand_Left", { duration: 3, ease: "elastic.inOut", x: 100, y: -460, rotate: 90, stroke: "orangered" }, 11)
    .to("#eyes", { y: -2 }, 12)

let wizardTalk = gsap.timeline()
    .fromTo("#Speech_Bubble", { opacity: 0 }, { duration: 4, opacity: 1 }, 7)
    .fromTo("#h", { opacity: 0 }, { fill: "white", opacity: 1 }, +8)
    .fromTo("#o", { opacity: 0 }, { fill: "white", opacity: 1 }, +8)
    .fromTo("#c", { opacity: 0 }, { fill: "white", opacity: 1 }, +8)
    .fromTo("#u", { opacity: 0 }, { fill: "white", opacity: 1 }, +8)
    .fromTo("#s", { opacity: 0 }, { fill: "white", opacity: 1 }, +8)
    .fromTo("#r", { opacity: 0 }, { fill: "white", opacity: 1 }, +8.5)
    .fromTo("#e", { opacity: 0 }, { fill: "white", opacity: 1 }, +8.7)
    .fromTo("#f", { opacity: 0 }, { fill: "white", opacity: 1 }, +8.9)
    .fromTo("#colon", { opacity: 0 }, { fill: "white", opacity: 1 }, +9.1)
    .fromTo("#second-o", { opacity: 0 }, { fill: "white", opacity: 1 }, +9.3)
    .fromTo("#c2", { opacity: 0 }, { fill: "white", opacity: 1 }, +9.5)
    .fromTo("#u2", { opacity: 0 }, { fill: "white", opacity: 1 }, +9.7)
    .fromTo("#s2", { opacity: 0 }, { fill: "white", opacity: 1 }, +9.9)
    .fromTo("#exclaimation", { opacity: 0 }, { fill: "white", opacity: 1, y: -20, scale: 1.3 }, +11)



let eyeballsLook = gsap.timeline()

.to("#eyes", { x: -10, y: 10 }, 9.5)
    .to("#eyeball", { scale: 1.005, y: -10, ease: "bounce.out" }, 5.5)
    .to("#pupil", { duration: 1, x: -70, y: 25, ease: "bounce.in" }, 5)
    .to("#iris", { duration: 1, x: -65, y: 27, ease: "bounce.in" }, 5)
    .to("#eye", { duration: 1, x: -69, y: 30, ease: "bounce.in" }, 5)

let displayProject = gsap.timeline()

.fromTo("svg", { display: "grid" }, { scale: 1, ease: "elastic.inOut", repeat: -1 }, 13)
    .fromTo("h1", { opacity: 0, margin: 10, fontSize: 20 }, { opacity: 1, textAlign: "center", display: "grid", duration: 10, ease: "bounce", fontFamily: "Raleway" }, 3)
    //.to("h1", { y: 200, color: "white", textShadow: "2px 2px purple", fontSize: 50, textContent: "Now let's get to work making magic HAPPEN!!" }, 23)