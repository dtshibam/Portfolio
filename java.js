window.addEventListener('load', () => {
    const tl = gsap.timeline();
    
    // Smooth entrance for Hero elements
    tl.from(".badge", { opacity: 0, y: 20, duration: 0.6 })
      .from(".hero h1", { opacity: 0, y: 30, duration: 0.8 }, "-=0.4")
      .from(".subline", { opacity: 0, y: 20, duration: 0.6 }, "-=0.4")
      .from(".cta-button", { opacity: 0, scale: 0.9, duration: 0.5 }, "-=0.3");

    // Staggered entrance for uniform cards as you scroll
    gsap.from(".project-card", {
        opacity: 0,
        y: 60,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out"
    });
});
