// oled panner 스크롤에 따라 펼쳐지는 것
let $window = $(window);
let oled = $window.innerHeight();
let oledLayer = $('.oled-layer-list');
let oledLayerTop = oledLayer.offset().top;
let scrollAmt = $window.scrollTop();
$window.scroll(function() {
    if(scrollAmt >= oledLayerTop/2){
        $('.oled-layer-list').addClass('unfold');
    }else{
        $('.oled-layer-list').removeClass('unfold');
    }
});

// 다크모드 스크롤에 따라 white에서 black화면으로 바뀌는 것
let fold
let foldingList = $('.folding-img-list')
let foldingListTop = foldingList.offset().top;
$window.scroll(function() {
if(scrollAmt >= foldingListTop/2){
    $(".folding-img-item").addClass("on");
}else{
    $(".folding-img-item").removeClass("on");
}
});


    $(".folding-img-item").each(function(){
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+400) {
        $(this).addClass("fadeIn");
    }
    });
