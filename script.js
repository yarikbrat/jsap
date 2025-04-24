document.addEventListener("DOMContentLoaded", function () {
  gsap.to(".selector", {
    x: 100,
    // x: () => window.innerWidth - 100,
    y: 50,
    background: "orange",
    duration: 1,
    delay: 0.5,
    repeat: 5,
    repeatDelay: 1,
    yoyo: true,
    stagger: 0.1,
    ease: "power2.inOut",
    // ease: "sine.inOut",
    // paused: true,
    onStart: function () {
      console.log("start");
    },
    onCompleted: function () {
      console.log("end");
    },
  });

  //les two

  gsap.set(".les-two", {
    width: "100px",
    height: "100px",
    backgroundColor: "#1ba877",
    transformOrigin: "center center",
    rotation: 0,
  });

  const element = document.querySelector(".les-two");
  let hoverTween = gsap.to(element, {
    rotation: 360,
    backgroundColor: "#a8871b",
    duration: 1,
    ease: "power2.out",
    paused: true,
    reversed: true,
  });

  element.addEventListener("mouseenter", () => {
    if (hoverTween.reversed()) {
      hoverTween.play();
    }
  });

  element.addEventListener("mouseleave", () => {
    if (!hoverTween.reversed()) {
      hoverTween.reverse();
    }
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
  const applyStyles = (element, styles) => {
    for (const key in styles) {
      element.style[key] = styles[key];
    }
  };

  const start = {
    width: "50%",
    height: "50%",
    backgroundColor: "#74a81b",
    display: "none",
    bottom: "25%",
    right: "25%",
    transform: "translateY(10px)",
    opacity: "0",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
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
  };

  const lesTwoTwo = document.querySelector(".les-two-two");

  // Устанавливаем начальные стили
  applyStyles(lesTwoTwo, start);

  document
    .querySelector(".les-two-two__wrap")
    .addEventListener("mouseenter", () => {
      gsap.to(lesTwoTwo, {
        ...hoverStyles,
        duration: 0.5,
      });
    });

  document
    .querySelector(".les-two-two__wrap")
    .addEventListener("mouseleave", () => {
      gsap.to(lesTwoTwo, {
        ...start,
        duration: 0.5,
      });
    });
});
