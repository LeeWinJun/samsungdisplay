$(".read_more").click(function(e){
    e.preventDefault();
})
$("#newsroom_link").click(function(e){
    e.preventDefault();
})


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
    });

    function displayRow(num) {
        rows.hide();

        let start = num * rowsPerPage;
        let end = start + rowsPerPage;

        rows.slice(start, end).fadeIn();

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


});

/* ----- LOAD MORE ----- */

/*
let container = $(".article_list"),
loadMoreBtn = $(".load-more"),
addItemCount = 5, //표시할 개수
added = 0, //표시된 개수
allData = []; //json 파일내 내용을 담을 배열

$.getJSON("./data/content.json", initArticle);

function initArticle(result) {
allData = result;
addItems(); //목록 추가
loadMoreBtn.on("click", addItems);
} //initGallery

function addItems() {
let itemHTML = "",
  slicedData = allData.slice(added, added + addItemCount);

$.each(slicedData, function (i, item) {
  itemHTML += `<li>
                    <div class="article_title">
                        <h3>${item.title}</h3>
                        <h4>${item.yymm}<strong>${item.dd}</strong></h4>
                        <span>
                            <i class="fa-solid fa-plus"></i>
                        </span>
                    </div>
                    <div class="article_content">
                        <article class="d-flex">
                            <img src="${item.image}" alt="" />
                            <div class="d-flex">
                                <div class="article_text d-flex">
                                    <h3>${item.title}</h3>
                                    <h4>${item.date}</h4>
                                    <p>${item.p1}</p>
                                    <p>${item.p2}</p>
                                    <p>${item.p3}</p>
                                </div>
                                <a href="" class="read_more">read more <i class="fa-solid fa-arrow-right"></i></a>
                            </div>  
                        </article>
                    </div>
                </li>`;
});
container.append(itemHTML);
added += addItemCount;

if (added < allData.length) {
  loadMoreBtn.show();
} else {
  loadMoreBtn.hide();
}
} //addItems

*/



/* ----- ACCORDION ----- */

let articleList = $(".article_list");

articleList.each(function () {
    let title = $(this).find(".article_title"),
        content = $(this).find(".article_content");

    title.click(function () {
        $(this).next().slideToggle();
        $(this).parent("li").siblings().find(".article_content").slideUp();

        $(this).toggleClass("active");
        $(this).parent("li").siblings().find(".article_title").removeClass("active");
    });
});
