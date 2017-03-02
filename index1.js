

$(document).ready(function(){
    var slider = $('.sliderhome').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{

            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }

        }, {

            breakpoint: 650,
            settings: {
                slidesToShow: 2
            }

        }, {

            breakpoint: 485,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    $('[data-toggle="popover"]').popover({container: 'body'});


    window.onscroll = function() {
        if (window.pageYOffset >= 266){
            $('.background').css({position: 'fixed',top:0});
        }
        else {
            $('.background').css({position: 'relative',top:0});
    }
    }

    $('#nav-icon3').click(function(){
        $(this).toggleClass('open');
    });





});


