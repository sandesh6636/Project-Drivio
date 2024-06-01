// gsap.to("#nav", {
//     backgroundColor: "#000",
//     height: "110px",
//     duration: 0.5,
//     scrollTrigger: {
//       trigger: "#nav",
//       scroller: "body",
//       markers: true,
//       start: "top -10%",
//       end: "top -11%",
//       scrub: 1,
//     },
//   });ss
let crs = document.querySelector("#cursor");
let blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (delts) {
  crs.style.left = delts.x + 20 + "px";
  crs.style.top = delts.y + "px";
  blur.style.left = delts.x - 150 + "px";
  blur.style.top = delts.y - 150 + "px";
});

function navAnimation() {
  let nav = document.querySelector("nav");
  nav.addEventListener("mouseenter", function () {
    // gsap.to("#nav-bottom", {
    //   height: "12vh",
    // });

    let tl = gsap.timeline();
    tl.to("#nav-bottom", {
      height: "12vh",
    });
    tl.to(".nav-part2 h5", {
      display: "block",
      // opacity: "100%",
    });
    tl.to(".nav-part2 h5 span", {
      y: 0,
      // duration: 0.4,
      stagger: {
        amount: 0.2,
      },
    });
  });
  nav.addEventListener("mouseleave", function () {
    let tl = gsap.timeline();

    tl.to(".nav-part2 h5 span", {
      y: 25,
      // duration: 0.4,
      stagger: {
        amount: 0.2,
      },
    });
    tl.to(".nav-part2 h5", {
      display: "none",
      duration: 0.1,
    });
    tl.to("#nav-bottom", {
      height: 0,
      duration: 0.2,
    });
  });
}
navAnimation();
