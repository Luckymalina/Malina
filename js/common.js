$(document).ready(function() {

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

    // $('.header-menu_link').on('click', function() {
    //
    //     var scrollAnchor = $(this).attr('data-scroll'),
    //         scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 80;
    //
    //     $('body,html').animate({
    //         scrollTop: scrollPoint
    //     }, 600);
    //
    //     return false;
    // });
    //
    // $(window).scroll(function() {
    //     var windscroll = $(window).scrollTop();
    //     if (windscroll >= 50) {
    //         $('.header-menu_list').addClass('fixed');
    //         $('.content-wrapper section').each(function(i) {
    //             if ($(this).position().top <= windscroll - 10) {
    //                 $('.header-menu_link.active').removeClass('active');
    //                 $('.header-menu_link').eq(i).addClass('active');
    //             }
    //         });
    //
    //     } else {
    //
    //         $('.header-menu_list').removeClass('fixed');
    //         $('.header-menu_link.active').removeClass('active');
    //         $('.header-menu_link:first').addClass('active');
    //     }
    //
    // }).scroll();

    $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        });
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

    function onScroll(event){
        var scrollPos = $(document).scrollTop();
        $('.header-menu_link').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.header-menu_link').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });
    }





    $(".menu-opener").click(function(){
        $(".mobile-menu, .menu-opener-inner").toggleClass("open");
    });

    $("#contacts-form").validate({
        rules: {
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Пожалуйста укажите ваше имя",
                minlength: "Ваше имя должно содержать хотя бы 2 символа"
            } ,
            email: {
                required: "Пожалуйста укажите ваш email"
            },
            phone:  {
                required: "Пожалуйста укажите ваш телефон"
            },
            message:  {
                required: "Добавьте текст вашего сообщения"
            }
        },
        submitHandler: function(form) {

            var to = $('input#to').val();
            var name = $('input#name').val();
            var phone = $('input#phone').val();
            var email = $('input#email').val();
            var message = $('textarea#message').val();

            // Create variables that will be sent in a URL string to mail.php
            var dataString = 'to=' + to + '&name='+ name + '&email=' + email + '&phone=' + phone + '&message=' + message;

            $.ajax({
                type: 'POST',
                url: './form.php',
                data: dataString,
                success: function() {
                    $('.contacts-form').css('display','none');
                    $('.footer-form_title').css('display','none');
                    $('.success-message').css('display','block');
                }
            });
            return false;
        }
    });



});