document.addEventListener("DOMContentLoaded", function () {
  // gsap.to(".selector", {
  //   x: 100,
  //   // x: () => window.innerWidth - 100,
  //   y: 50,
  //   background: "orange",
  //   duration: 1,
  //   delay: 0.5,
  //   repeat: 5,
  //   repeatDelay: 1,
  //   yoyo: true,
  //   stagger: 0.1,
  //   ease: "power2.inOut",
  //   // ease: "sine.inOut",
  //   // paused: true,
  //   onStart: function () {
  //     console.log("start");
  //   },
  //   onCompleted: function () {
  //     console.log("end");
  //   },
  // });

  //les two

  gsap.set(".les-two", {
    width: "100px",
    height: "100px",
    backgroundColor: "#1ba877",
    transformOrigin: "center center",
    rotation: 0,
  });

  const element = document.querySelector(".les-two");

  let hoverTween;

  element.addEventListener("mouseenter", () => {
    if (hoverTween) hoverTween.kill();

    hoverTween = gsap.to(element, {
      rotation: 360,
      backgroundColor: "#a8871b",
      duration: 1,
      ease: "bounce.out",
    });
  });

  element.addEventListener("mouseleave", () => {
    if (hoverTween) hoverTween.kill();

    hoverTween = gsap.to(element, {
      rotation: 0,
      backgroundColor: "#1ba877",
      duration: 1,
      ease: "none",
    });
  });

  //les two two

  // const showLesTwo = (selector, obj) => {
  //   const el = document.querySelector(selector);
  //   el.innerHTML = JSON.stringify(
  //     {
  //       width: obj.width,
  //       heith: obj.heth,
  //       color: obj.color,
  //       display: obj.display,
  //       bottom: obj.bottom,
  //       right: obj.right,
  //       transform: obj.transform,
  //       opacity: obj.opacity,
  //       position: obj.position,
  //     },
  //     null,
  //     " "
  //   );
  // };

  // const start = {
  //   width: "50%",
  //   heith: "50%",
  //   color: "#74a81b",
  //   display: "none",
  //   bottom: "8%",
  //   right: 0,
  //   transform: " translateY(10px)",
  //   opacity: 0,
  //   position: "absolute",
  // };

  // const hover = gsap.to(start, {
  //   width: "50%",
  //   heith: "50%",
  //   color: "#f60142",
  //   display: "flex",
  //   bottom: "8%",
  //   right: 0,
  //   transform: " translateY(0px)",
  //   position: "absolute",
  //   opacity: 1,
  //   duration: 10,
  //   onUpdate: function () {
  //     showLesTwo(".les-two-two", start);
  //   },
  // });

  /////////////////////////////////////////////////////////////////
  // const applyStyles = (element, styles) => {
  //   for (const key in styles) {
  //     element.style[key] = styles[key];
  //   }
  // };

  const start = {
    width: "50%",
    height: "50%",
    backgroundColor: "transparent",
    display: "none",
    bottom: "25%",
    right: "25%",
    transform: "translateY(10px)",
    opacity: "0",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    color: "#000",
  };

  const hoverStyles = {
    width: "50%",
    height: "50%",
    backgroundColor: "#f60142",
    display: "flex",
    bottom: "25%",
    right: "25%",
    transform: "translateY(0px)",
    position: "absolute",
    opacity: "1",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  };

  const { color: initialColor, ...initialStyles } = start;
  const { color, ...hoverStylesWithoutColor } = hoverStyles;

  const lesTwoTwo = document.querySelector(".les-two-two");
  const textEl = lesTwoTwo.querySelector("p");

  gsap.set(lesTwoTwo, start);
  gsap.set(textEl, { color: start.color });

  // applyStyles(lesTwoTwo, start);

  document
    .querySelector(".les-two-two__wrap")
    .addEventListener("mouseenter", () => {
      gsap.to(lesTwoTwo, {
        ...hoverStylesWithoutColor,
        duration: 0.3,
      });
      gsap.to(textEl, {
        color: color,
        delay: 0.2,
        duration: 0.3,
      });
    });

  document
    .querySelector(".les-two-two__wrap")
    .addEventListener("mouseleave", () => {
      gsap.to(lesTwoTwo, {
        ...initialStyles,
        duration: 0.3,
      });
      gsap.to(textEl, {
        color: initialColor,
        delay: 0.2,
        duration: 0.3,
      });
    });

  //title
  const title = document.querySelector(".title");
  const letters = title.textContent.split("");

  title.innerHTML = "";
  title.style.opacity = 1;

  let spanArray = [];

  letters.forEach((letter) => {
    const span = document.createElement("span");
    span.classList.add("letter");
    span.textContent = letter === " " ? "\u00A0" : letter;
    title.appendChild(span);
    spanArray.push(span);
  });

  const totalWidth = spanArray.reduce(
    (sum, span) => sum + span.getBoundingClientRect().width,
    0
  );

  const offsetX = (title.clientWidth - totalWidth) / 2;
  let currentX = offsetX;

  spanArray.forEach((span) => {
    const width = span.getBoundingClientRect().width;

    span.style.left = `${currentX}px`;
    span.style.top = `0px`;

    currentX += width;
  });

  setTimeout(() => {
    gsap.to(".letter", {
      duration: 1,
      opacity: 1,
      color: "rgb(136, 206, 2)",
      top: "+=50",
      rotation: () => (Math.random() - 0.5) * 20,
      ease: "bounce.out",
      // delay: (i) => i * 0.2,
      stagger: {
        each: 0.1,
        from: "random",
      },
    });
  }, 1000);

  //stager
  // gsap.to(".stager", {
  //   duration: 2,
  //   y: 100,
  //   // x: 100,
  //   background: "orange",
  //   opacity: 0.8,
  //   // delay: function (i) {
  //   //   return i * 0.5;
  //   // }, замість можна

  //   // stagger: 0.5,
  //   // ease: "bounce.out",
  //   stagger: {
  //     each: 0.5,
  //     from: "random",
  //     repeat: 3,
  //     yoyo: true,
  //   },
  // });
  gsap.to(".stager", {
    duration: 2,
    background: "orange",
    scale: 0.2,
    stagger: {
      each: 0.1,
      // from: "center",
      from: 56,
      grid: "auto",
      // grid: [9, 23],
      // axis: "x",
    },
  });
});
