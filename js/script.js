/* ================================
                Preloader
===================================*/

$(window).on('load', function () {

    'use strict';



    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut();

});



/* ================================
                skills
===================================*/

$(function () {

    'use strict';

    $("#skillpics").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {

            0: {
                item: 1
            },

            480: {
                item: 2
            }
        }
    });
});



/* ================================
                Progress bar
===================================*/


$(function () {
    $(".progress-elements").waypoint(function () {


        $(".progress-bar").each(function () {

            $(this).animate({
                width: $(this).attr("aria-valuenow")
            }, 1000);

        });

        this.destroy();




    }, {
        offset: '67%'
    });
});




/* ================================
                Navigation
===================================*/



/* Show & Hide White Navigation*/
$(function () {

    showHideNav();

    $(window).scroll(function () {

        $(window).scroll(function () {


            showHideNav();



        });

    });

    function showHideNav() {
        if ($(window).scrollTop() > 50) {

            $("nav").addClass("white-nav-top");

            $(".navbar-brand img").attr("src", "img/logo/LogoMakr_2WA2222F0Z.png");

            $("#back-to-top").fadeIn();


        } else {

            $("nav").removeClass("white-nav-top");

            $(".navbar-brand img").attr("src", "img/logo/LogoMakr_2WAF0Z.png");

            $("#back-to-top").fadeOut();
        }

    }




});

// Smooth Scrolling


$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();
        // get section id like #about, #services and etc.
        var section_id = $(this).attr("href");

        $("html, body").animate({

            scrollTop: $(section_id).offset().top - 64


        }, 1250, "easeInOutExpo");



    });


});








/* ================================

 Mobile menu
===================================*/

$(function () {
    //show mobile navgation
    $("#mobile-nav-open-btn").click(function () {

        $("#mobile-nav").css("height", "100%");


    });
    //hide mobile nav
    $("#mobile-nav-close-btn, #mobile-nav a").click(function () {

        $("#mobile-nav").css("height", "0%");


    });
});




/* ================================
           Animation
===================================*/

//animate on scroll
$(function () {

    new WOW().init();


});



$(window).on("load", function () {

    $("#home-heading-2").addClass("animated fadeInDown");
    $("#home-btn").addClass("animated zoomIn");
    $(".typewriter h1").addClass("animated fadeInLeft");
    $("#arrow-down i").addClass("animated zoomInDown infinite");
});







