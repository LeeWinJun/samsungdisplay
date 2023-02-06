gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load",()=>{
  let moveTitle = document.querySelector(".number-one"),
      moveSubtitle = document.querySelector(".l-sub-title");
      
  moveTitle.classList.add("active");
  moveSubtitle.classList.add("active");

  
});


function HorizontalScroll() {
  let targetEl = document.querySelector("#container");
  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: targetEl,
      start: function start() {
        return "top top";
      },
      end: function end() {
        return "+=".concat(targetEl.offsetWidth, "px");
      },
      onEnter: function(element) {
        // 스크롤 위치가 지정한 영역에 들어왔을 때 실행될 코드
        TweenMax.to(element, 1, { translateX: 100 });
      },
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
      "#container",
      {
        delay: 0,
      },
      {
        delay: 0.09,
      },
      "horizon+=0.15"
    );
}


window.addEventListener("scroll",()=>{
  console.log(window.pageYOffset);
  if(window.pageYOffset >= 810){
    document.querySelector('section').style.background="#050505";
    document.querySelector('.change-txt').style.background="#050505";
  }else{
    document.querySelector('section').style.background="#fff";
    document.querySelector('.change-txt').style.background="#fff";
  }

  if(window.pageYOffset >= 1600){
    document.querySelector(".section02 h2").classList.add("active");
  }
});


/* 모바일 버전 스크롤 트리거 삭제 */
ScrollTrigger.matchMedia({
  "(min-width:769px)" : function minWidth769px(){
    HorizontalScroll();
  }
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
