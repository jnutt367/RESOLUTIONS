gsap.to("html", { backgroundColor: "black" })
gsap.fromTo("svg", { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 5, ease: "elastic" })