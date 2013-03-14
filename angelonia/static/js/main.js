
function initializeMap() {
    var b = new google.maps.LatLng(37.449955, -122.161338);
    var c = {zoom: 15,center: b,scrollwheel: false,disableDefaultUI: true,zoomControl: true,zoomControlOptions: {position: google.maps.ControlPosition.RIGHT_CENTER},mapTypeId: google.maps.MapTypeId.ROADMAP};
    var d = new google.maps.Map(document.getElementById("map_canvas"), c);
    var a = new google.maps.Marker({position: b, map: d ,title: "Chalet Angelonia"});
}

function loadMap() {
    var a = document.createElement("script");
    a.type = "text/javascript";
    a.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyBHqogVLcYQoFI3MZP45Ton2R7l2x2RH28&sensor=false&callback=initializeMap";
    document.body.appendChild(a);
}

window.onload = loadMap;

$(document).ready(function () {

    var path_name = document.location.pathname.replace('/','');
    if (path_name === "" ) {
        path_name = "home";
    }
    $('#nav li').click(function () {
        document.location = $(this).attr('data-href');
        return false;
    });

    $('#nav li.' + path_name).addClass('active');


    // TOP MENU BAR
    var sticky = $('#banner .inner'),
        origOffsetY = sticky.offset().top,
        origWidth = sticky.width();

    function resizeWidth() {
        var margin = ((document.body.offsetWidth - origWidth) / 2) - 5;
        if (margin <= 0) {
            sticky.css('margin-left', 0);
            sticky.css('width', '100%');
        } else {
            sticky.css('margin-left',  margin + 'px');
        }
    }

    function onScroll(e) {
        if (window.scrollY >= origOffsetY + sticky.height()) {
            if (!sticky.hasClass('sticky')) {
                resizeWidth();
            }
            sticky.addClass('sticky');
            window.setTimeout(function () {
                sticky.addClass("animate-sticky");
            }, 1);
        }
        if (window.scrollY < origOffsetY) {
            sticky.css('margin-left', 'auto');
            sticky.css('width', origWidth + 'px');
            sticky.removeClass("sticky").removeClass("animate-sticky");
        }
    }

    $(window).resize(function () {
        if (window.scrollY >= origOffsetY + sticky.height()) {
            resizeWidth();
        }
    });
    if (document.addEventListener) {
        document.addEventListener('scroll', onScroll);
    } else {
        window.attachEvent('onscroll', onScroll);
    }

});
