gsap.to("#Control_Ring", { duration: 3, rotate: 360, ease: "bounce.out" });
gsap.fromTo("#Magic_Symbols", { opacity: 0 }, { ease: "elastic.inOut", strokeWidth: "5", x: -50, y: -30, scale: 1.1, duration: 5, opacity: 1 });
gsap.to("#Magic_Symbols", { stroke: "#e4196e", ease: "elastic", duration: 5 }, 5)
gsap.to("#Tentacle_1", { duration: 3, y: 30, x: 10, ease: "elastic.out", repeat: -1 }, 5);
gsap.to("#Tentacle_2", { duration: 4, y: 30, x: 10, ease: "elastic.out", repeat: -1 }, 5);
gsap.to("#Tentacle_3", { duration: 3.5, y: 10, x: 10, ease: "elastic.out", repeat: -1 }, 5);
gsap.to("#Tentacle_4", { duration: 4, y: 10, x: 10, ease: "elastic.out", repeat: -1 }, 5);
gsap.to("#Tentacle_5", { duration: 6, ease: "elastic.out", y: -10, repeat: -1 }, 5);

gsap.to("#Eye_Stalk_3", { x: -50, y: 20 }, 1)
gsap.to("#Eye_Stalk_2", { x: -50, y: 70 }, 1)
gsap.to("#Eye_Stalk_1", { x: 0, y: 50 }, 1)
gsap.to("#Small_Box", { y: 30 }, 2)
gsap.to("#Small_Box_Jet", { y: 30 }, 2)
gsap.to("#Tumblers", { stroke: "#e4196e;" }) //fill:#e4196e;
gsap.to("#lever5", { y: -10, duration: 4, repeat: 2 })
gsap.to("#lever3", { y: 10, duration: 2, repeat: 3 })
gsap.to("#lever4", { y: -20, duration: 2 })