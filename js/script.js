$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.nav-bar').addClass('sticky');
        }else{
            $('.nav-bar').removeClass('sticky');
        }
    });
    //toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.nav-bar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});