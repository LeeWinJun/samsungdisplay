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
  } else {
    $("#agreeMsg").css({ visibility: "visible" }); //alert 대신!
  }
});
