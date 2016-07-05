
function main() {

(function () {
   'use strict';

	// Hide .navbar first
	$(".navbar").hide();
	
	// Fade in .navbar
	$(function () {
		$(window).scroll(function () {
      // set distance user needs to scroll before we fadeIn navbar
			if ($(this).scrollTop() > 50) {
				$('.navbar').fadeIn();
			} else {
				$('.navbar').fadeOut();
			}
		});
	});
	
  // Preloader */
  $(window).load(function() {
    // will first fade out the loading animation 
    $("#status").fadeOut("slow"); 
    // will fade out the whole DIV that covers the website. 
    $("#preloader").delay(500).fadeOut("slow").remove();      
  }) 

 // Page scroll
	$('a.page-scroll').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 40
        }, 900);
        return false;
      }
    }
  });

  // Show Menu on Book
  $(window).bind('scroll', function() {
    var navHeight = $(window).height() - 100;
    if ($(window).scrollTop() > navHeight) {
      $('.navbar-default').addClass('on');
    } else {
      $('.navbar-default').removeClass('on');
    }
  });

  $('body').scrollspy({ 
    target: '.navbar-default',
    offset: 80
  })

  	$(document).ready(function() {
	    $(".testimonial").owlCarousel({
        navigation: false, // Show next and prev buttons
        pagination: false,
        autoPlay: true,
        stopOnHover: true,
        slideSpeed: 700,
        paginationSpeed: 400,
        singleItem: true
      });
  	});

  // Parallax
  function initParallax() {
    $('#intro').parallax("40%", 0.3, true);
    $('#pricing').parallax("100%", 0.3, true);	
    // $('#testimonials').parallax("85%", 0.1, true);
    $('#team').parallax("100%", 0.3, true);
    $('#hiring-image').parallax("50%", 0.3, true)
  };
  initParallax();

  // Pretty Photo
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false,
    theme: 'facebook',
    default_width: 600,
    default_height: 444
	});	

  // Sign Up/Login Modal - Correct Tab Selection
  $(function() {
    $('.btn-login').on('click', function() {
      var tab = $(this).index();
      $('#sign a:eq(' + tab + ')').tab('show');
    });
  });

  // Wow
  var wow = new WOW ({
    offset: 75,   // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
  });
  wow.init();

}());


}
main();