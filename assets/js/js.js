$(document).scroll(function() {

    var top = $(window).scrollTop() + $(window).height(),
       isVisibletitle = top > $('.title').offset().top,
       isVisiblesubtitlesect3 = top > $('.subtitlesect3').offset().top;

    $("#navbar-mobile").toggleClass("showonscroll", $(document).scrollTop() >= 350);
    $(".title h2").toggleClass("titleshow", isVisibletitle);
    $(".subtitlesect3").toggleClass("subtitleshow", isVisiblesubtitlesect3);

    var y = $(this).scrollTop();
    if (y >= 200) {
        $(".mobile-comp-logo img").attr("src", "./assets/images/logo1-trans.png")
    } else {
        $(".mobile-comp-logo img").attr("src", "./assets/images/logo3-trans.png")
    }
});

function menuActive() {
    $(".menu-full").addClass("menu-active");
    $(".menu-full .wrapper .link-list").addClass("anim");
}

function menuNonactive() {
    $(".menu-full").removeClass("menu-active");
    $(".menu-full .wrapper .link-list").removeClass("anim");
}