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

//header color change
let offsetTop = $(".service").offset().top;
header = $("header");
menuText_1 = header.find($(".menu_title p"));
menuText_2 = header.find($(".menu_title a"));
function bannerWhite() {
  $(".sub-title").css({ color: "#fff" });
  header.css({ color: "#fff" });
  menuText_1.css({ color: "#fff" });
  menuText_2.css({ color: "#fff" });
}
bannerWhite();

$window.scroll(function () {
  console.log(offsetTop);
  console.log($(this).scrollTop());
  //header color change
  if ($(this).scrollTop() >= offsetTop) {
    $(".sub-title").css({ color: "#333" });
    header.css({ color: "#333" });
    menuText_1.css({ color: "#333" });
    menuText_2.css({ color: "#333" });
  } else {
    bannerWhite();
  }
});
