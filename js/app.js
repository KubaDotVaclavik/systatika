$( document ).ready(function() {
    $('body').scrollspy({ target: '#navbar'})
});

$(window).scroll(function(e){
    parallax();
});

function parallax(){
    var scrolled = $(window).scrollTop();
    $('.parallax').css('bottom',-(scrolled*0.3)+'px');
}