$(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
        $("header").addClass("active");
        $("a").addClass("active");
        $(".logo").attr('src', './images/logo.svg');
        $(".logo").height(58);
    } else {
        $("header").removeClass("active");
        $("a").removeClass("active");
        $(".logo").attr('src', './images/logo-white.svg');
        $(".logo").height(80);
    }
});