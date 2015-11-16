$(document).ready(function(){
    $(".has-sub").click(function(){
        $(this).parent().toggleClass("tap");
    });

    $('#body').localScroll();
    $('footer').localScroll();
});
