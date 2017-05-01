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
    // $('body').on('click', '[data-anchor]', function(e) {
    //     e.preventDefault();
    //     var href = $(this).attr('href');
    //     var section = $(href);
    //     $('body, html').animate({
    //         scrollTop: section.offset().top
    //     }, 1000)
    // });


    $('.header-menu_link').on('click', function() {

        var scrollAnchor = $(this).attr('data-scroll'),
            scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 80;

        $('body,html').animate({
            scrollTop: scrollPoint
        }, 600);

        return false;

    });


    $(window).scroll(function() {
        var windscroll = $(window).scrollTop();
        if (windscroll >= 100) {
            $('.header-menu_list').addClass('fixed');
            $('section').each(function(i) {
                if ($(this).position().top <= windscroll - 60) {
                    $('.header-menu_link.active').removeClass('active');
                    $('.header-menu_link').eq(i).addClass('active');
                }
            });

        } else {

            $('.header-menu_list').removeClass('fixed');
            $('.header-menu_link.active').removeClass('active');
            $('.header-menu_link:first').addClass('active');
        }

    }).scroll();


});