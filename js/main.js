wow = new WOW();
wow.init();
$(document).ready(function (e) {
    $("#video-icon").on("click", function (e) {
        e.preventDefault();
        $(".video-popup").css("display", "flex");
        $(".iframe-src").slideDown();
    });
    $(".video-popup").on("click", function (e) {
        var $target = e.target.nodeName;
        var video_src = $(this).find("iframe").attr("src");
        if ($target != "IFRAME") {
            $(".video-popup").fadeOut();
            $(".iframe-src").slideUp();
            $(".video-popup iframe").attr("src", " ");
            $(".video-popup iframe").attr("src", video_src);
        }
    });

    $(".slider").bxSlider({
        pager: false,
    });
});

$(window).on("scroll", function () {
    var bodyScroll = $(window).scrollTop(),
        navbar = $(".navbar");

    if (bodyScroll > 50) {
        $(".navbar-logo img").attr("src", "images/holAvaGreen.png");
        navbar.addClass("nav-scroll");
    } else {
        $(".navbar-logo img").attr("src", "images/holAvaWhite.png");
        navbar.removeClass("nav-scroll");
    }
});
$(window).on("load", function () {
    var bodyScroll = $(window).scrollTop(),
        navbar = $(".navbar");

    if (bodyScroll > 50) {
        $(".navbar-logo img").attr("src", "images/holAvaWhite.png");
        navbar.addClass("nav-scroll");
    } else {
        $(".navbar-logo img").attr("src", "images/holAvaWhite.png");
        navbar.removeClass("nav-scroll");
    }

    $.scrollIt({
        easing: "swing", 
        scrollTime: 900, 
        activeClass: "active", 
        onPageChange: null, 
        topOffset: -63,
    });
});