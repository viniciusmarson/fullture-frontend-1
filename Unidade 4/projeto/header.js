$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $("header").addClass("scrolled");
        $(".menu").addClass("scrolled");
        $(".logo").attr('src','./images/logo.svg');
        $(".logo").height(58);
    } else {
       $("header").removeClass("scrolled");
       $(".menu").removeClass("scrolled");
       $(".logo").attr('src','./images/logo-white.svg');
       $(".logo").height(80);
    }
});