//overlay menu
let menuBtn = document.querySelector(".menu-btn"),
  closeBtn = document.querySelector(".close-btn"),
  overlayMenu = document.querySelector(".overlay-menu"),
  bodyScrollNone = document.querySelector("body");

// menuBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   overlayMenu.classList.add("active");
//   bodyScrollNone.classList.add("scroll-none");
//   $(".overlay-menu").removeClass("active");

// });
menuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (matchMedia("screen and (max-width: 768px)").matches) {
    $(".overlay-m").css({
      opacity: "1",
      visibility: "visible",
    });
  } else {
    overlayMenu.classList.add("active");
    bodyScrollNone.classList.add("scroll-none");
    // $("header .menu_title > *").css({ width: "18%" });
  }
});

closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  overlayMenu.classList.remove("active");
  // bodyScrollNone.classList.remove("scroll-none");
});

//header scroll
let lastScrollTop = 0;
$(window).scroll(function () {
  let scrollTop = $(this).scrollTop();
  // Math.abs: 주어진 숫자의 절대값을 반환
  if (Math.abs(lastScrollTop - scrollTop) <= 10) return;
  if (scrollTop > lastScrollTop && lastScrollTop > 0) {
    $("header").css({ top: "-110px" });
  } else {
    $("header").css({ top: "0px" });
  }
  lastScrollTop = scrollTop;
});

/* ----- GO TO TOP ----- */

let $btt = $("#go-top");
let $window = $(window);

$btt.hide();

$window.scroll(function () {
  let scrollAmt = $(this).scrollTop();
  console.log(scrollAmt);
  scrollAmt > 300 ? $btt.fadeIn() : $btt.fadeOut();
});

$btt.click(function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, 700, "easeInOutCubic");
});
