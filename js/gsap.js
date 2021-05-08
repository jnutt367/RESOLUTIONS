gsap.to("#Tentacle_1", { duration: 3, y: 30, x: 10, ease: "elastic.out", repeat: -1 }, 0);
gsap.to("#Tentacle_2", { duration: 4, y: 30, x: 10, ease: "elastic.out", repeat: -1 }, 0);
gsap.to("#Tentacle_3", { duration: 3.5, y: 10, x: 10, ease: "elastic.out", repeat: -1 }, 0);
gsap.to("#Tentacle_4", { duration: 4, y: 10, x: 10, ease: "elastic.out", repeat: -1 }), 0;
gsap.to("#Tentacle_5", { duration: 6, ease: "elastic.out", y: -10, repeat: -1 }, 0);
gsap.to("#Control_Ring", { duration: 3, rotate: 360, ease: "bounce.out" });
gsap.fromTo("#Magic_Symbols", { opacity: 0 }, { ease: "bounce", x: -30, y: -30, scale: 1.1, duration: 10, opacity: 1 });