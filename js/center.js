/* ----- TAB ----- */

let tabMenu = $(".tab-menu li"),
    tabMap = $(".map_img img"),
    tabContent = $("#tab-content > div");

tabContent.hide();
tabContent.eq(0).show();

tabMenu.click(function (e) {
    e.preventDefault();

    let targetIdx = $(this).index();

    tabMenu.removeClass("active");
    $(this).addClass("active");

    tabContent.hide();
    tabContent.eq(targetIdx).show();
    tabContent.removeClass("active");
    tabContent.eq(targetIdx).addClass("active");

    tabMap.removeClass("active");
    tabMap.eq(targetIdx).addClass("active");

    $(".center_accordion .center_map").slideUp();
    $(".center_accordion .center_name").removeClass("active");
});

/* ----- ACCORDION ----- */

let centerWarp = $(".center_accordion");

centerWarp.each(function () {
    let title = $(this).find(".center_name");

    title.click(function () {
        $(this).next().slideToggle();
        $(this).parent("li").siblings().find(".center_map").slideUp();

        $(this).toggleClass("active");
        $(this).parent("li").siblings().find(".center_name").removeClass("active");
    });
});

/* ----- MAP-LOAD ----- */
let maps = [];
let markers = [];
function initMap() {
    let $maps = $('.center_map');
    $.each($maps, function (i, value) {
        //console.log("lat: "+$(value).attr('data-lat'));
        let coordinate = { lat: parseFloat($(value).attr('data-lat')), lng: parseFloat($(value).attr('data-lng')) };

        let mapAttrId = $(value).attr('id');

        maps[mapAttrId] = new google.maps.Map(document.getElementById(mapAttrId), {
            zoom: 15,
            center: coordinate
        });

        markers[mapAttrId] = new google.maps.Marker({
            position: coordinate,
            map: maps[mapAttrId],
            animation:google.maps.Animation.BOUNCE
        });

    })

};
