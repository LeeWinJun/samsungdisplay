// location.href : 현재 페이지에 url을 뜻함.
// 따라서 href가 변경되니까 URL주소가 변경되는 것을 뜻함.
// 사실상 이동하는 개념보다는 URL을 변경한다고 생각해야함.
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

  // console.log(newsBtn); // 0
  // console.log(newsChk); //false
  //newsBtn 값 0(false), 1(true)
  /*
  if (newsChk == false) {
    newsBtn = 0;
    $("#news_chk").val("0");
  } else {
    // newsBtn = 1;
    $("#news_chk").val("1");
  }
  console.log(newsBtn);
  */

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
