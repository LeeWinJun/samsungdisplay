AOS.init();

let aboutImg = $(".about_wrap");

$(".about_sm").css({ visibility: "hidden" });
$("table").css({ visibility: "hidden" });

$(window).scroll(function () {
  if ($(window).scrollTop() >= 600) {
    $(".about_sm").css({ visibility: "visible" });
  } else {
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

/* tech */
let closeBtns = document.querySelectorAll(".modal-close");
let modalItem = document.querySelectorAll(".item-modal");
let modalBtns = document.querySelectorAll(".modal-btn");

const itemModals = document.querySelectorAll(".item-modal");

modalBtns.forEach((btn, index) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    itemModals[index].style.display = "block";
  });
});

for (let i = 0; i < closeBtns.length; i++) {
  closeBtns[i].addEventListener("click", function (e) {
    e.preventDefault();
    let modalItem = this.closest(".item-modal");
    modalItem.style.display = "none";
  });
}


