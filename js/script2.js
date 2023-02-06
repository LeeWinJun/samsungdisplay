gsap.registerPlugin(ScrollTrigger);

const pageContainer = document.querySelector("#container");

/* smooth scroll */
const scroller = new LocomotiveScroll({
  el: pageContainer,
  smooth: true,
});

scroller.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(pageContainer, {
  scrollTop(value) {
    return arguments.length
      ? scroller.scrollTo(value, 0, 0)
      : scroller.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: pageContainer.style.transform ? "trnasform" : "fixed",
});

window.addEventListener("load", function () {
  let pinWrap = document.querySelector(".pin-wrap");
  let pinWrapWidth = pinWrap.offsetWidth;
  let horizontalScrollLength = pinWrapWidth - window.innerWidth;
  console.log(pinWrapWidth);
  // Pinning and horizontal scrolling

  //   let timeline = gsap.timelin(".pin-wrap", {
  //     scrollTrigger: {
  //       scroller: pageContainer, //locomotive-scroll
  //       scrub: 1,
  //       trigger: "#sectionPin",
  //       pin: true,
  //       // anticipatePin: 1,
  //       start: "top top",
  //       markers: true,
  //       end: pinWrapWidth,
  //     },
  //     x: -horizontalScrollLength,
  //     ease: "none",
  //   });
  //   timeline
  //     .addLabel("horizon")
  //     .fromTo(
  //       ".pin-wrap",
  //       {
  //         xPercent: 0,
  //         x: "0",
  //       },
  //       {
  //         xPercent: -100,
  //         x: "100vw",
  //         ease: "none",
  //         delay: 0.15,
  //       }
  //     )
  //     .fromTo(
  //       "sectionPin",
  //       {
  //         delay: 0,
  //       },
  //       {
  //         delay: 0.09,
  //       },
  //       "horizon+=0.15"
  //     );

  function HorizontalScroll() {
    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: pageContainer,
        start: "top top",
        end: pinWrapWidth,
        scrub: 1,
        pin: true,
        ease: "none",
      },
    });
    timeline
      .addLabel("horizon")
      .fromTo(
        ".section",
        {
          xPercent: 0,
          x: "0",
        },
        {
          xPercent: -100,
          x: "100vw",
          ease: "none",
          delay: 0.15,
        }
      )
      .fromTo(
        "#sectionPin",
        {
          delay: 0,
        },
        {
          delay: 0.09,
        },
        "horizon+=0.15"
      );
  }

  HorizontalScroll();
  ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll

  ScrollTrigger.refresh();
});
const tabItem = document.querySelectorAll(".tab-btn");
const tabInner = document.querySelectorAll(".main-media");

tabItem.forEach((tab, idx) => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();
    tabInner.forEach((inner) => {
      inner.classList.remove("tab-on");
    });
    tabItem.forEach((item) => {
      item.classList.remove("active");
    });
    tabItem[idx].classList.add("active");
    tabInner[idx].classList.add("tab-on");
  });
});

let menuBtn = document.querySelector(".menu-btn"),
  closeBtn = document.querySelector(".close-btn"),
  overlayMenu = document.querySelector(".overlay-menu"),
  bodyScrollNone = document.querySelector("body");

menuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  overlayMenu.classList.add("active");
  bodyScrollNone.classList.add("scroll-none");
});

closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  overlayMenu.classList.remove("active");
  bodyScrollNone.classList.remove("scroll-none");
});
