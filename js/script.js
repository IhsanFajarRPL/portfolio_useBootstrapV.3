$('.page-scroll').on('click', function (e) {

    var tujuan = $(this).attr('href');

    var elemenTujuan = $(tujuan);

    $('html , body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 900, 'swing');

    e.preventDefault();
});


//parallax
$(window).scroll(function () {
    var wScroll = $(this).scrollTop();


    //jumbotron
    $('.jumbotron img').css({
        'transform': 'translate(0px, ' + wScroll / 4 + '%)'
    });

    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + wScroll / 2 + '%)'
    });

    $('.jumbotron p').css({
        'transform': 'translate(0px, ' + wScroll / 1 + '%)'
    });


    //portfolio
    if (wScroll > $('.portfolio').offset().top - 250) {

        $('.portfolio .thumbnail').addClass('muncul');

    }

});