let toggle = $("#openmenubtn");
let overlay = $(".overlay-menu");
let openMobileMenu = $(".overlay-m");
let closeBtn = $(".close-btn");
let $window = $(window);

$window.resize(function () {
    if ($window.width() <= 768) {
        toggle.on("click", function () {
            if (toggle.prop("checked")) {
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
