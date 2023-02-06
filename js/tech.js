let $window = $(window);
let scrollAmt = $window.scrollTop();

// orange video section
let Video = $(".key_expression video");
let VideoTop = Video.offset().top;
$window.scroll(function () {
  if (scrollAmt > VideoTop) {
  }
});

// function play(){
//     video.get(0).currentTime = 0;
//     video.get(0).play();
//   }
//   function pause(){
//     video.get(0).pause();
//   }
//   function stop(){
//     video.get(0).pause();
//     video.get(0).currentTime = 0;
//   }

// orange video key expression section
// oled panner 스크롤에 따라 펼쳐지는 것
// let oled = $window.innerHeight();
// let oledLayer = $(".oled-layer-list");
// let oledLayerTop = oledLayer.offset().top;
// $window.scroll(function () {
//   if (scrollAmt >= oledLayerTop / 2) {
//     $(".oled-layer-list").addClass("unfold");
//   } else {
//     $(".oled-layer-list").removeClass("unfold");
//   }
// });

// 다크모드 스크롤에 따라 white에서 black화면으로 바뀌는 것
let darkmord = $(".darkmode");
let darkmordTop = darkmord.offset().top;
let blackWindow = $(".darkmode .laptop_wrap .laptop_black");
console.log(blackWindow);
$window.scroll(function () {
  if (scrollAmt >= darkmordTop) {
    blackWindow.css({ left: "0" });
  } else {
    blackWindow.css({ left: "-100%" });
  }
});

// folderble 스크롤에 따라서 화면이 접히는 것
// flex device 스크롤에 따라서 위 아래로 이동하는
