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

  //buttons
  const started = document.getElementById("start");
  const pause = document.getElementById("pause");
  const play = document.getElementById("play");
  const reverse = document.getElementById("reverse");
  const restart = document.getElementById("restart");
  const range = document.getElementById("range");
  let tween = gsap.to(".stager", {
    duration: 5,
    background: "orange",
    scale: 0.01,
    borderRadius: "100%",
    paused: true,
    repeat: 1,
    stagger: {
      each: 0.1,
      // from: "center",
      from: 56,
      grid: "auto",
      // grid: [9, 23],
      // axis: "x",
    },
    onUpdate: function () {
      range.value = tween.progress() * 100;
    },
    onComplete: function () {
      console.log("end");
    },
    onRepeat: function () {
      console.log("repet");
    },
    onReverseComplete: function () {
      console.log("end reverse");
    },
    onStart: function () {
      console.log("start");
    },
  });

  // let state = false;
  // started.addEventListener("click", function (e) {
  //   e.preventDefault();

  //   if (state) {
  //     tween.pause();
  //   } else {
  //     tween.play();
  //   }

  //   state = !state;
  // });

  started.addEventListener("click", function (e) {
    e.preventDefault();
    tween.play();
  });

  pause.addEventListener("click", function (e) {
    e.preventDefault();
    tween.pause();
  });

  play.addEventListener("click", function (e) {
    e.preventDefault();
    tween.resume();
  });

  reverse.addEventListener("click", function (e) {
    e.preventDefault();
    tween.reverse();
  });

  restart.addEventListener("click", function (e) {
    e.preventDefault();
    tween.restart();
  });

  range.addEventListener("input", function (e) {
    tween.progress(e.target.value / 100);
  });

  //timeline

  const anim = gsap.timeline({
    repeat: 0,
    repeatDelay: 1,
  });

  anim.to("h2", {
    x: 0,
    ease: "bounce",
    duration: 2,
  });

  anim.to(
    "h2",
    {
      duration: 0.1,
      fontSize: "6rem",
      color: "rgb(136, 206, 2)",
    },
    "+=1"
  );
  anim.to(
    ".el",
    {
      y: 0,
      opacity: 1,
      scale: 1,
      ease: "back.out",
      stagger: 0.055,
    },
    "-=3.1"
  );

  anim.to(
    "footer",
    {
      x: 0,
      ease: "bounce",
      duration: 2,
    },
    "-=2"
  );

  anim.to("footer", {
    rotation: -10,
  });

  //draggable
  // Draggable.create(".drag-el", {
  //   type: "x,y",
  //   bounds: "#draggable", //граница
  //   edgeResistance: 0.65,
  //   liveSnap: {
  //     x: function (endValue) {
  //       return Math.round(endValue / 100) * 100;
  //     },
  //     y: function (endValue) {
  //       return Math.round(endValue / 100) * 100;
  //     },
  //   },
  // });
  Draggable.create(".drag-el", {
    // type: "rotation",
    type: "x,y",
    bounds: "#draggable",
    edgeResistance: 0.65,
    // lockAxis: true, // движение по 1 оси до окончания клика
    onDragEnd: function () {
      const snappedX = Math.round(this.x / 100) * 100;
      const snappedY = Math.round(this.y / 100) * 100;

      gsap.to(this.target, {
        x: snappedX,
        y: snappedY,
        duration: 0.3,
        ease: "power2.out",
      });
    },
    onDragStart: function () {
      console.log("start");
    },
    onDrag: function () {
      console.log("drag");
    },
    onClick: function () {
      console.log("click");
    },
  });
});
