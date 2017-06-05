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
                if ($(this).position().top <= windscroll - 10) {
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