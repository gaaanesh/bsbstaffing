$(document).ready(function(){


	$('.dropdownDot').click(function(){
		// $('.dropdownDotOuter ul').toggle();
		$(this).next("ul").toggle();
	});

	$('#postModal').modal();

	$('.communitySearch').click(function(){
		$('.comSearchOuter').toggle();
	});

	$('.postContent .commentIcon').click(function(){
		$(this).parents().children('.commentingOuter').toggle();
		// $('.commentingOuter').toggle();
	});

	$('.mobileHmburger a').click(function(){
		$('.mbleftPanel').toggleClass('mbleftPanelOpen');
	});

	$('.panelclose').click(function(){
		$('.mbleftPanel').removeClass('mbleftPanelOpen');
	});

	$('.mbSearch').click(function(){
		$('.comSearchOuter').toggleClass('comSearchOuterOpen');
	});

	$(".tabphotogallery1").slick({
 	 	infinite: true, 
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 769,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		]
	});	

	var owl = $('.tabvideogallery1');
      owl.owlCarousel({
        margin: 10,
        loop: true,
        nav:true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 3
          }
        }
      });

      var owl = $('.experienceSlider');
      owl.owlCarousel({
        margin: 10,
        loop: true,
        nav:true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 3
          }
        }
      });

});