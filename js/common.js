let toggle = $("#openmenubtn");
let overlay = $(".overlay-menu");
let openMobileMenu = $(".overlay-m");
let closeBtn = $(".close-btn");
let $window = $(window);

$window.resize(function () {
    if ($window.width() <= 768) {
        toggle.on("click", function () {
            if (toggle.prop("checked")) {
                overlay.removeClass("active");
                openMobileMenu.css({
                    opacity: "1",
                    visibility: "visible",
                });
            } else {
                openMobileMenu.css({
                    opacity: "0",
                    visibility: "hidden",
                });
            }
        });
    } else {
        toggle.on("click", function () {
            if (toggle.prop("checked")) {
                overlay.addClass("active");
                console.log("1");
            } else {
                overlay.removeClass("active");
            }
        });
    }
});

$window.trigger("resize");

/* header-bg-black */
window.addEventListener("onload", () => {
  let headerBg = document.querySelector("header");
  if (headerBg.classList.contains("h-bg")) {
    headerBg.style.background = "rgba(255,255,255,0.3)";
  }
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

/* ----- HEADER SCROLL color change ----- */

let offsetTop = $(".banner").innerHeight();
header = $("header");
menuText_1 = header.find($(".menu_title p"));
menuText_2 = header.find($(".menu_title a"));
menuIcon = $('.icon-menu div');
function bannerWhite() {
    $(".sub-title").css({ color: "#fff" });
    header.css({ color: "#fff" });
    menuText_1.css({ color: "#fff" });
    menuText_2.css({ color: "#fff" });
    menuIcon.css({ background: "#fff" });
}
bannerWhite();
$window.scroll(function () {
    //header color change
    if ($(this).scrollTop() >= offsetTop) {
        if (header.hasClass("black")) {
            $(".sub-title").css({ color: "#fff" });
            header.css({ color: "#fff" });
            menuText_1.css({ color: "#fff" });
            menuText_2.css({ color: "#fff" });
            menuIcon.css({ background: "#fff" });
            header.css({ background: "#000" });
        } else {
            $(".sub-title").css({ color: "#333" });
            header.css({ color: "#333" });
            menuText_1.css({ color: "#333" });
            menuText_2.css({ color: "#333" });
            menuIcon.css({ background: "#333" });
            header.css({ background: "#fff" });
        }
    } else {
        bannerWhite();
        header.css({ background: "rgba(174, 174, 174, 0.2)" });
    }
});

$window.trigger("scroll");

  $('.overlay-m-menu-list > li').click(function(){
    console.log($(this));
    $(this).find('ul').slideDown();
    $(this).siblings().find('ul').slideUp();
  })

/* ----- GO TO TOP ----- */

let $btt = $("#go-top");

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
