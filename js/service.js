AOS.init();

//이용약관
$(".service_info_que").click(function () {
  $(this).next(".service_info_anw").stop().slideToggle(300);
  $(this).toggleClass("on").siblings().removeClass("on");
  $(this).next(".service_info_anw").siblings(".service_info_anw").slideUp(300); // 1개씩 펼치기
});

//탭
$(".service_tab h4").click(function () {
  $(this).addClass("on").siblings().removeClass("on");
});

let checkBox = $("#service_checkbox");
let inquireBtn = $("#service_btn");
let checked;

checkBox.click(function () {
  checked = checkBox.is(":checked");
});

inquireBtn.click(function () {
  if (checked == true) {
    /*클래스명 on 일때 data-type의 값을 가져온다 */
    let dataType = $(".service_tab .on").attr("data-type");
    location.href = `./service_inquire.html?type=${dataType}`;
    // if (dataType == 1) {
    //   alert("'제품' 문의페이지로 이동합니다.");
    // } else {
    //   alert("'기타' 문의페이지로 이동합니다.");
    // }
  } else {
    $("#agreeMsg").css({ visibility: "visible" }); //alert 대신!
  }
});

//overlay menu
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

//header scroll
let lastScrollTop = 0;
$(window).scroll(function () {
  let scrollTop = $(this).scrollTop();
  // Math.abs: 주어진 숫자의 절대값을 반환
  if (Math.abs(lastScrollTop - scrollTop) <= 20) return;
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

  //header color change
  header = $("header");
  menuText_1 = header.find($(".menu_title p"));
  menuText_2 = header.find($(".menu_title a"));
  if (window.pageYOffset >= 500) {
    $(".sub-title").css({ color: "#333" });
    header.css({ color: "#333" });
    menuText_1.css({ color: "#333" });
    menuText_2.css({ color: "#333" });
  } else {
    $(".sub-title").css({ color: "#fff" });
    header.css({ color: "#fff" });
    menuText_1.css({ color: "#fff" });
    menuText_2.css({ color: "#fff" });
  }
  if (matchMedia("screen and (max-width: 768px)").matches) {
    if (window.pageYOffset >= 200) {
      $(".sub-title").css({ color: "#333" });
      header.css({ color: "#333" });
      menuText_1.css({ color: "#333" });
      menuText_2.css({ color: "#333" });
    } else {
      $(".sub-title").css({ color: "#fff" });
      header.css({ color: "#fff" });
      menuText_1.css({ color: "#fff" });
      menuText_2.css({ color: "#fff" });
    }
  }
});

$btt.click(function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, 700, "easeInOutCubic");
});
