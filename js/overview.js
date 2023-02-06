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
