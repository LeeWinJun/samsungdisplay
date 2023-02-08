$(".read_more").click(function (e) {
    e.preventDefault();
});
$("#newsroom_link").click(function (e) {
    e.preventDefault();
});

/* ----- SLIDE ----- */

let sliderWrapper = $(".slide-wrapper"),
    slideContainer = sliderWrapper.find(".slide-container"),
    slides = slideContainer.find("li"),
    pager = sliderWrapper.find(".navigator .pager"),
    slideCount = slides.length,
    currentIdx = 0,
    pagerHtml = "",
    timer = undefined,
    currentNum = sliderWrapper.find(".navigator .controler .current_num"),
    navPrev = sliderWrapper.find(".navigator .controler .prev"),
    navNext = sliderWrapper.find(".navigator .controler .next");

// 슬라이드 가로배치
slides.each(function (i) {
    $(this).css({ left: `${i * 100}%` });
    pagerHtml += `<a href="">${i}</a>`;
    pager.html(pagerHtml);
    //console.log(pagerHtml);
});

let pagerBtn = pager.find("a");

//슬라이드 이동 함수
/* 함수 gotoSlide(i) */
function gotoSlide(i) {
    slideContainer.animate({ left: `-${i * 100}%` });
    currentIdx = i;
    slideUpdate();
}

//pager 클릭 시 이동
pagerBtn.click(function (e) {
    e.preventDefault();
    gotoSlide($(this).index());
});

//슬라이드 업데이트
function slideUpdate() {
    pagerBtn.removeClass("active");
    pagerBtn.eq(currentIdx).addClass("active");
    currentNum.text(`0${currentIdx + 1}`);
}

slideUpdate();

//버튼을 클릭하면 슬라이드 이동
navNext.click(function (e) {
    e.preventDefault();
    let ni = currentIdx + 1;
    if (ni > slideCount - 1) {
        gotoSlide(0);
    } else {
        gotoSlide(ni);
    }
});
navPrev.click(function (e) {
    e.preventDefault();
    let ni = currentIdx - 1;
    if (ni < 0) {
        gotoSlide(slideCount - 1);
    } else {
        gotoSlide(ni);
    }
});

//자동 슬라이드
function startAutoSlide() {
    if (timer == undefined) {
        timer = setInterval(function () {
            let ni = (currentIdx + 1) % slideCount;
            gotoSlide(ni);
        }, 5000);
    }
}
startAutoSlide();

sliderWrapper.mouseenter(function () {
    clearInterval(timer);
    timer = undefined;
});
sliderWrapper.mouseleave(function () {
    startAutoSlide();
});


/* ----- TAB ----- */

let tabMenu = $(".tab-menu li"),
    tabContent = $("#tab-content > section");

tabContent.hide();
tabContent.eq(0).show();


tabMenu.click(function (e) {
    e.preventDefault();

    let targetIdx = $(this).index();

    tabMenu.find("a").removeClass("active");
    $(this).find("a").addClass("active");

    tabContent.hide();
    tabContent.eq(targetIdx).fadeIn();

    $(".article_list .article_content").slideUp();
    $(".article_list .article_title").removeClass("active");

});

/* ----- PAGINATION ----- */

tabContent.each(function () {
    let rowsPerPage = 5;
    let pagination = $(this).find(".pagination");
    let rows = $(this).find(">ul li");
    let rowsCount = rows.length;
    let pageCount = Math.ceil(rowsCount / rowsPerPage);
    let numbers = $(this).find(".numbers");

    let prevPageBtn = pagination.find(".fa-chevron-left");
    let nextPageBtn = pagination.find(".fa-chevron-right");

    let maxPageNum = 5;
    let pageActiveIdx = 0; //현재 보고 있는 페이지그룹 번호
    // console.log(rowsCount);
    // console.log(pageCount);

    for (let i = 1; i <= pageCount; i++) {
        numbers.append(`<li><a href="">${i}</a></li>`);
    }
 
    let numberBtn = numbers.find("a");

    numberBtn.click((e) => {
        e.preventDefault();
        displayRow($(e.target).parent().index());
        $(".article_list .article_content").slideUp();
        $(".article_list .article_title").removeClass("active");
    });

    function displayRow(num) {
        rows.hide();

        let start = num * rowsPerPage;
        let end = start + rowsPerPage;

        rows.slice(start, end).show();

        numberBtn.removeClass("active");
        numberBtn.eq(num).addClass("active");
    }
    displayRow(0);

    function displayPage(num) {
        //모든 페이지네이션 안보이도록
        numberBtn.hide();
        let totalPageCount = Math.ceil(pageCount / maxPageNum);
        let start = num * maxPageNum;
        let end = start + maxPageNum;
        numberBtn.slice(start, end).show();

        if (pageActiveIdx === 0) {
            prevPageBtn.hide();
        } else {
            prevPageBtn.show();
        }
        if (pageActiveIdx === totalPageCount - 1) {
            nextPageBtn.hide();
        } else {
            nextPageBtn.show();
        }
    }

    nextPageBtn.click(() => {
        ++pageActiveIdx;
        displayRow(pageActiveIdx * maxPageNum);
        displayPage(pageActiveIdx);
    });

    prevPageBtn.click(() => {
        --pageActiveIdx;
        displayRow(pageActiveIdx * maxPageNum);
        displayPage(pageActiveIdx);
    });
    displayPage(0);


    /* ----- RESIZE EVENT ----- */

    let windowSize = $(window).innerWidth;
    $(window).resize(function(){
        if(windowSize > 768 && window.innerWidth <= 768){
            displayRow(0);
            displayPage(0);
        }
        if(windowSize <= 768 && window.innerWidth > 768){
            displayRow(0);
            displayPage(0);
        }
        windowSize = window.innerWidth;
    });

    /* ----- LOAD MORE ----- */

    $(".load-more").click(function () {
        rows.filter(':hidden').slice(0, 5).slideDown();
        
        if (rows.filter(':hidden').length == 0) {
            $(".load-more").fadeOut();
        }
    });

    tabMenu.click(function(e){
        e.preventDefault();
        displayRow(0);
        displayPage(0);
    })

});


/* ----- ACCORDION ----- */

let articleList = $(".article_list");

articleList.find(".article_content").slideUp();

articleList.each(function () {
    let title = $(this).find(".article_title");

    title.click(function () {
        $(this).next().slideToggle();
        $(this).parent("li").siblings().find(".article_content").slideUp();

        $(this).toggleClass("active");
        $(this).parent("li").siblings().find(".article_title").removeClass("active");
    });
});
