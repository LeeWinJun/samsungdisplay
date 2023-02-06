/* ----- TAB ----- */

let tabMenu = $(".tab-menu li"),
    tabMap = $('.map_img img'),
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
});


/* ----- ACCORDION & MAP-LOAD ----- */

let centerList = $('.center_accordion');

centerList.each(function(){
    let title = $(this).find(".center_name");

    title.click(function () {
        let centerMap = $(this).next(".center_map");
        console.log(centerMap);
        $(this).next().slideToggle();
        $(this).parent('li').siblings().find('.center_map').slideUp();

        $(this).toggleClass("active");
        $(this).parent('li').siblings().find(".center_name").removeClass("active");

        let centerLat = $(this).attr('data-lat'),
            centerLng = $(this).attr('data-lng');

        console.log(centerLat);
        console.log(centerLng);
        
        initMap(centerMap, centerLat, centerLng);

        let map;
        function initMap(centerMap, centerLat, centerLng) {
            let mapProp= {
                center:new google.maps.LatLng(centerLat,centerLng),
                zoom:17,
              };
            // let marker = new google.maps.Marker({
            //     position: { lat: `${centerLat}`, lng: `${centerLng}` },
            //     map: mapProp,
            // });
            map = new google.maps.Map(centerMap,mapProp);
    
        }    
       // $(window).initMap = initMap;
    });




});

