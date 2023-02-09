// skrollr library
AOS.init();
var s = skrollr.init({
  skrollrBody: "skrollr-body",
});

if (window.innerWidth < 800) {
  s.destroy();
}

// 변수
let expression = $(".key_expression");
let Video = $(".key_expression video");
let expressionTop = expression.offset().top - 500;
let oledFlex = $(".self_luminous .oled_flex");
let oledFlexTop = oledFlex.offset().top - 500;
let oledItem = $(".oled-layer-item");
let darkmord = $(".darkmode");
let darkmordTop = darkmord.offset().top;
let blackWindow = $(".darkmode .laptop_wrap figure");
let folderble = $(".folding-area");
let folderbleTop = folderble.offset().top - 500;
let foldingItem = $(".folding-img-item");
let excuted = false;

//TECH SCROLL EVENT
$window.scroll(function () {
  let scrollAmt = $window.scrollTop();
  // orange video section
  if (scrollAmt > expressionTop) {
    Video.addClass("active");
    Video.get(0).play();
  } else {
    Video.removeClass("active");
    Video.get(0).pause();
    Video.get(0).currentTime = 0;
  }
  // OLED panner layer
  // console.log("scrollAmt", scrollAmt);
  // console.log("oledFlexTop", oledFlexTop);
  if (scrollAmt > oledFlexTop) {
    console.log("true");
    oledItem.filter(".nth-3").stop().animate({ left: "68px" }, 500);
    oledItem.filter(".nth-2").stop().animate({ left: "136px" }, 500);
    oledItem.filter(".nth-1").stop().animate({ left: "204px" }, 500);
    oledItem.find("p").css({ opacity: "1" });
  } else {
    oledItem.filter(".nth-3").stop().animate({ left: "2px" }, 500);
    oledItem.filter(".nth-2").stop().animate({ left: "4px" }, 500);
    oledItem.filter(".nth-1").stop().animate({ left: "6px" }, 500);
    oledItem.find("p").css({ opacity: "0" });
  }
  // Darkmode section_from white to black
  if (scrollAmt > darkmordTop) {
    blackWindow.addClass("active");
  } else {
    blackWindow.removeClass("active");
  }
  // folderble
  if (scrollAmt > folderbleTop) {
    if (excuted == false) {
      showFolding();
      excuted = true;
    }
  } else {
    excuted = false;
  }
});

// folderble(function)
function showFolding() {
  let i = 0;
  setInterval(() => {
    if (foldingItem.length > i) {
      foldingItem.removeClass("on");
      foldingItem.eq(i++).addClass("on");
    }
  }, 200);
}
