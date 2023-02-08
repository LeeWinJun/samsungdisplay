AOS.init();

let aboutImg = $(".about_wrap");

$(".about_sm").css({ visibility: "hidden" });
$("table").css({ visibility: "hidden" });

$(window).scroll(function () {
  console.log(aboutImg.offset().top);
  console.log($(window).scrollTop());

  if ($(window).scrollTop() >= 600) {
    $(".about_sm").css({ visibility: "visible" });
  } else {
    //aboutImg.css({ backgroundAttachment: "scroll" });
    $(".about_sm").css({ visibility: "hidden" });
  }
  if ($(window).scrollTop() >= 870) {
    $("table").css({ visibility: "visible" });
  } else {
    $("table").css({ visibility: "hidden" });
  }
  $(".about_sm").css({ visibility: "visible" });
  $("table").css({ visibility: "visible" });
});
// 반응형
function AOS_MOBILE() {
  if (matchMedia("screen and (max-width: 768px)").matches) {
    $(".about_sm").css({ visibility: "visible" });
    $("table").css({ visibility: "visible" });
    $(".about_sm").attr("data-aos-duration", "3000");
    $(".goal_img img").attr("data-aos", "fade-up");
    $(".vision_img img").attr("data-aos", "fade-up");
  }
}
AOS_MOBILE();

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

//팝업 생성
let popupDialog = document.querySelector("dialog"),
  dayCheck = document.querySelector("#oneday_close"),
  popupClose = popupDialog.querySelector("button");

function setCookie(name, value, day) {
  let date = new Date();
  date.setDate(date.getDate() + day);
  document.cookie = `${name}=${value};expires=${date.toUTCString()}`;
}

//쿠키확인
function checkCookie(name) {
  let cookieArr = document.cookie.split(";");
  let visited = false;

  for (let cookie of cookieArr) {
    if (cookie.search(name) > -1) {
      visited = true;
      break;
    }
  }

  //dialog 표시여부
  if (!visited) {
    popupDialog.setAttribute("open", "");
  }
}
checkCookie("ABC");

//닫기버튼
popupClose.addEventListener("click", () => {
  popupDialog.removeAttribute("open");
  if (dayCheck.checked) {
    setCookie("ABC", "home", 1);
  } else {
    setCookie("ABC", "home", -1);
  }
});

// console.log(dayCheck.checked);

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
