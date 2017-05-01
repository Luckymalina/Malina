$( document ).ready(function() {


    $('.portfolio-slider').slick({
        // variableWidth: true,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3
        // responsive: [
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             arrows: false,
        //             centerMode: true,
        //             centerPadding: '40px',
        //             slidesToShow: 3
        //         }
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             arrows: false,
        //             centerMode: true,
        //             centerPadding: '40px',
        //             slidesToShow: 1
        //         }
        //     }
        // ]
    });

    $('input[type=tel]').mask("+7 (999) 999-99-99");

    //nav to anchor
    $('.header-menu__link').on('click', function() {

        var scrollAnchor = $(this).attr('data-scroll'),
            scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 10;

        $('body,html').animate({
            scrollTop: scrollPoint
        }, 500);

        return false;
    });

    $(window).scroll(function() {
        var windscroll = $(window).scrollTop();
        if (windscroll >= 100) {
            $('.header-menu__list').addClass('fixed');
            $('section').each(function(i) {
                if ($(this).position().top <= windscroll - 10) {
                    $('.header-menu__link.active').removeClass('active');
                    $('.header-menu__link').eq(i).addClass('active');
                }
            });

        } else {

            $('.header-menu__list').removeClass('fixed');
            $('.header-menu__link.active').removeClass('active');
            $('.header-menu__link:first').addClass('active');
        }

    }).scroll();


});