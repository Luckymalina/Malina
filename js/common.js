$( document ).ready(function() {


    $('.portfolio-slider').slick({
        // variableWidth: true,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '10px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '10px',
                    slidesToShow: 2
                }
            }
        ]
    });

    $('input[type=tel]').mask("+7 (999) 999-99-99");

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

    $(".menu-opener").click(function(){
        $(".mobile-menu, .menu-opener-inner").toggleClass("open");
    });

    //Hide menu on click on page
    // $('.menu-opener').click(function(e) {
    //     var $menu = $('.mobile-menu');
    //
    //     if ($menu.css('left') != '0') {
    //         $menu.classList.add("open")
    //
    //         var firstClick = true;
    //         $(document).bind('click.myEvent', function(e) {
    //             if (!firstClick && $(e.target).closest('.mobile-menu').length == 0) {
    //                 $menu.hide();
    //                 $(document).unbind('click.myEvent');
    //             }
    //             firstClick = false;
    //         });
    //     }
    //
    //     e.preventDefault();
    // });

});