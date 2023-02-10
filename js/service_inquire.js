// location.href : 현재 페이지에 url을 뜻함.
let url = new URL(location.href);

/*인풋 hidden에 value값에 param 값 넣기 */
let param = url.searchParams.get("type");
$("#type").attr("value", param);

$("#submit_btn").click(function () {
  let username = $("#username").val(); //get : 값을 가져옴
  let phone = $("#phone").val();
  let email = $("#email").val();
  let company = $("#company").val();
  let title = $("#title").val();
  let content = $("#textbox").val();
  let nationLang = $("#nation_lang").val();
  let newsBtn = $("#news_chk").val();
  let newsChk = $("#news_chk").is(":checked");
  let type = $("#type").val();
  let regexPhone = /^[0-9]+$/; //숫자만 가능한 정규식
  let regexEmail =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  if (username == "") {
    setWarning(
      $("#username"),
      "성명 필수 입력 사항입니다.",
      "성명 ( 10자 이내로 작성해주세요 )"
    );
    return false;
  } else if (phone == "") {
    setWarning(
      $("#phone"),
      "연락처 필수 입력 사항입니다.",
      "연락처 ( '-' 빼고 입력해주세요. )"
    );
    return false;
  } else if (regexPhone.test(phone) == false) {
    $("#phone").val(""); //set : 값을 설정
    setWarning(
      $("#phone"),
      "연락처는 숫자만 입력해주세요.",
      "연락처 ( '-' 빼고 입력해주세요. )"
    );
    return false;
  } else if (email == "") {
    setWarning(
      $("#email"),
      "이메일 필수 입력 사항입니다.",
      "이메일 ( abc@samsung.com )"
    );
    return false;
  } else if (regexEmail.test(email) == false) {
    $("#email").val("");
    setWarning(
      $("#email"),
      "이메일 양식을 확인해주세요 ( abc@samsung.com )",
      "이메일 ( abc@samsung.com )"
    );
    return false;
  } else if (title == "") {
    setWarning(
      $("#title"),
      "제목 필수 입력 사항입니다.",
      "제목을 입력해 주십시오. ( 30자 이내로 입력해주세요. )"
    );
    return false;
  } else if (content == "") {
    setWarning(
      $("#textbox"),
      "내용 필수 입력 사항입니다.",
      "문의 내용을 입력해 주십시오."
    );
    return false;
  }
});

function setWarning(e, value, placeholder) {
  e.focus()
    .attr("placeholder", value)
    .addClass("warning")
    .keydown(function () {
      e.removeClass("warning").attr("placeholder", placeholder);
    });
}

$("#email").blur(function () {});

/* ----- HEADER SCROLL color change ----- */

header = $("header");
menuText_1 = header.find($(".menu_title p"));
menuText_2 = header.find($(".menu_title a"));
menuIcon = $('.icon-menu div');
function bannerWhite() {
  $(".sub-title").css({ color: "#333" });
  header.css({ color: "#333" });
  menuText_1.css({ color: "#333" });
  menuText_2.css({ color: "#333" });
  menuIcon.css({ background: "#333" });
  header.css({ background: "#fff" });
}
bannerWhite();
$window.scroll(bannerWhite);

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
