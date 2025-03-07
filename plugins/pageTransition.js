export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("page:start", async () => {
    if (process.client) {
      const gsap = (await import("gsap")).default;

      const exitTl = gsap.timeline();

      exitTl
        .to(".nav-links a", {
          y: -20,
          opacity: 0,
          stagger: 0.05,
          duration: 0.5,
          ease: "power2.in",
        })
        .to(
          ".home-header .char",
          {
            y: "100%",
            opacity: 0,
            stagger: 0.02,
            duration: 0.5,
            ease: "power2.in",
          },
          "-=0.3"
        )
        .to(
          [".home-page-img", ".hpi-overlay"],
          {
            scale: 1.2,
            opacity: 0,
            stagger: 0.05,
            duration: 0.5,
            ease: "power2.in",
          },
          "-=0.3"
        );
    }
  });
});
