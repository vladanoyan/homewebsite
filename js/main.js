// Menu
$(document).ready(function () {

/*__________Tooltip Initialization Starts__________*/
var startTooltip= function() {
    var hideAllTooltips = function() {
        $('[data-toggle="tooltip"]').each(function() {
            $(this).tooltip('hide');
            $(this).attr('data-visible',false);
        });
    };

    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="tooltip"]').bind('click', function(e) {

        e.preventDefault();
        e.stopPropagation();
        if($(this).attr('data-visible')=='true')
        {
            $(this).tooltip('hide');
            $(this).attr('data-visible',false);
        }
        else
        {
            $(this).tooltip('show');
            $(this).attr('data-visible',true);
        }

    });

    $(document).click(function (e) {
        $('[data-toggle="tooltip"]').attr('data-visible',false);
    });
}

$(function() {
    startTooltip();
});
$(document).ajaxComplete(function() {
    startTooltip();
});
/*__________Tooltip Initialization Ends__________*/


/*_________Changing Toggle Button Active State Starts__________*/
$(".navbar-toggle").click(function(){
    if($("div .navbar-collapse").attr("aria-expanded")=="true")
    {
        $(".navbar-toggle .icon-bar").addClass('navbar-toggle-normal');
        $(".navbar-toggle .icon-bar").removeClass('navbar-toggle-active');
    }
    else
    {
        $(".navbar-toggle .icon-bar").removeClass('navbar-toggle-normal');
        $(".navbar-toggle .icon-bar").addClass('navbar-toggle-active');
    }

});
/*_________Changing Toggle Button Active State Ends__________*/




    
    $('.menuToggle').click(function () {
        $('.mainNavbarMenu').slideToggle(500, function () {
        });
    });
});
// /Menu

// Carousels
$('.mainSlider').owlCarousel({
    loop:true,
    nav:false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
    animateOut: 'fadeOut',
    smartSpeed: 450,
});
$('.coupsDeCoeurSlider').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:5000,
    margin:50,
    nav:true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    responsiveClass:true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
});
$('.ficheItemCoverImage').owlCarousel({
    items:1,
    center:true,
    URLhashListener:true,
    startPosition: 'URLHash',
    dots:false,
    nav:true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
});
// /Carousels

var inputs = document.querySelectorAll( '.fileUpload' );
Array.prototype.forEach.call( inputs, function( input )
{
	var label	 = ('.fileUploadLabel'),
		labelVal = label.innerHTML;

	input.addEventListener( 'change', function( e )
	{
		var fileName = '';

		if( fileName )
			label.querySelector( 'span' ).innerHTML = fileName;
		else
			label.innerHTML = labelVal;
	});
});
