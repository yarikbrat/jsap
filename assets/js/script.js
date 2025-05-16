document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  if (ScrollTrigger.isTouch !== 1) {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    function headerToSpan(elSelector, spanClass = "") {
      const el = document.querySelector(elSelector);
      if (!el) return;

      const text = el.textContent.replace(/\s+/g, " ").trim();
      el.textContent = "";

      const frag = document.createDocumentFragment();
      let line = document.createElement("div");
      line.style.display = "flex";
      line.style.flexWrap = "nowrap";
      line.style.gap = "0.05em";

      text.split("").forEach((char) => {
        if (char === " ") {
          frag.appendChild(line);
          line = document.createElement("div");
          line.style.display = "flex";
          line.style.flexWrap = "nowrap";
          line.style.gap = "0.05em";
        } else {
          const span = document.createElement("span");
          span.textContent = char;
          span.style.display = "inline-block";
          if (spanClass) span.classList.add(spanClass);
          line.appendChild(span);
        }
      });

      frag.appendChild(line);
      el.appendChild(frag);
    }

    headerToSpan(".wcl-hero__main-header-title", "char");

    // ScrollSmoother
    if (ScrollTrigger.isTouch !== 1) {
      ScrollSmoother.create({
        wrapper: ".wrapper",
        content: ".content",
        smooth: 1.5,
        effects: true,
      });

      gsap.fromTo(
        ".wcl-hero",
        { opacity: 1 },
        {
          opacity: 0,
          scrollTrigger: {
            trigger: ".wcl-hero",
            start: "top top",
            end: "bottom",
            scrub: true,
          },
        }
      );

      const chars = gsap.utils.toArray(".wcl-hero__main-header-title .char");

      gsap.to(chars, {
        y: -80,
        opacity: 0,
        ease: "none",
        stagger: {
          each: 0.05,
          from: "random",
        },
        scrollTrigger: {
          trigger: ".wcl-hero",
          start: "top top",
          end: "bottom",
          scrub: true,
        },
      });
    }

    let itemsL = gsap.utils.toArray(
      ".wcl-gallery__content-left .wcl-gallery__item"
    );
    itemsL.forEach((item) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
          x: "-150",
        },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: item,
            scrub: true,
            // markers: true,
          },
        }
      );
    });

    let itemsR = gsap.utils.toArray(
      ".wcl-gallery__content-right .wcl-gallery__item"
    );
    itemsR.forEach((item) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
          x: "150",
        },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: item,
            scrub: true,
            // markers: true,
          },
        }
      );
    });
  }
});
