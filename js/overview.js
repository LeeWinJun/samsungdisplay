AOS.init();

let aboutImg = $(".about_wrap");

$(".about_sm").css({ visibility: "hidden" });
$("table").css({ visibility: "hidden" });

$(window).scroll(function () {
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

$window.scroll(function () {
  console.log(offsetTop);
  console.log($(this).scrollTop());
  //header color change
  if ($(this).scrollTop() >= offsetTop) {
    $(".sub-title").css({ color: "#333" });
    header.css({ color: "#333" });
    menuText_1.css({ color: "#333" });
    menuText_2.css({ color: "#333" });
    header.css({ background: "#fff" });
  } else {
    bannerWhite();
    header.css({ background: "rgba(174, 174, 174, 0.2)" });
  }
});
$window.scroll(function () {
  console.log(offsetTop);
  console.log($(this).scrollTop());
  //header color change
  if ($(this).scrollTop() >= offsetTop) {
    $(".sub-title").css({ color: "#333" });
    header.css({ color: "#333" });
    menuText_1.css({ color: "#333" });
    menuText_2.css({ color: "#333" });
    header.css({ background: "#fff" });
  } else {
    bannerWhite();
    header.css({ background: "rgba(174, 174, 174, 0.2)" });
  }
});
const buttons = document.querySelectorAll(".overlay-m-menu-list > li");

buttons.forEach(function (button, index) {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    //let buttonsNum = buttons[i];

    this.childNodes[3].classList.toggle("on");
    this.childNodes[1].classList.toggle("rotate");
    buttons.forEach(function (button2, index2) {
      if (index !== index2) {
        button2.childNodes[3].classList.remove("on");
      }
    });
  });
});

/* ----- header scroll ----- */
let offsetTop4 = $(".gaeyo").offset().top;

$window.scroll(function () {
  console.log(offsetTop4);
  console.log($(this).scrollTop());
  //header color change
  if ($(this).scrollTop() >= offsetTop4) {
    $(".icon-menu div").css({ background: "#333" });
  } else {
    $(".sub-title").css({ color: "#fff" });
    header.css({ color: "#fff" });
    menuText_1.css({ color: "#fff" });
    menuText_2.css({ color: "#fff" });
    $(".icon-menu div").css({ background: "#fff" });
    header.css({ background: "rgba(174, 174, 174, 0.2)" });
  }
});
