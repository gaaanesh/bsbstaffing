$(document).ready(function(){

	//mail open
	$(".mailrow").click(function(){
	    $(this).parents('.mailbox-holder').children('.mailbox-messages').hide();
	    $(this).parents('.mailbox-holder').children('.mail-content').show();

	    $(this).parents('.mailBlock').children('.box-header').hide();
	  });

	$(".back").click(function(){ 
		$(this).parents('.mailbox-holder').children('.mailbox-messages').show();
	    $(this).parents('.mailbox-holder').children('.mail-content').hide();
	    $(this).parents('.mailBlock').children('.box-header').show();
	  });
 
	//mail reply 
	$(".reply").click(function(){
	    $('.composemailhold').show(); 
	});

	$(".cancel").click(function(){
	    $(this).parents('.composemailhold').hide(); 
	  });

	//slot
	$('.slotdiff').hide();
	 $(".slot").click(function(){
	    $(this).parents('.diffsec').slideUp(1000);
	    $('.slotdiff').show().slideDown(1000);
	  });

	 //slotpanel remove
	  $(".slotcross").click(function(){
	    $(this).parents('.slotdiff').slideUp(1000).hide();
	    $('.normdiff').slideDown(1000);
	  });

	//edit
	$('.editable').hide();
	 $(".edit").click(function(){
	    $(this).parents('.profileInfoOuter').children('.noraml').slideUp(1000);
	    $(this).parents('.profileInfoOuter').children('.editable').show().slideDown(1000);
	     $(this).parents('.employeeProfileWrap').children('.noraml').slideUp(1000);
	    $(this).parents('.employeeProfileWrap').children('.editable').show().slideDown(1000);
	  });
	$('.editable1').hide();
	 $(".edit1").click(function(){
	    $(this).parents('.profileInfoOuter').children('.noraml').slideUp(1000);
	    $(this).parents('.profileInfoOuter').children('.editable1').show().slideDown(1000);
	  });
	 $(".cross").click(function(){
	 	$(this).parents('.profileInfoOuter').children('.noraml').show();
	    $(this).parents('.profileInfoOuter').children('.editable').hide();
	    $(this).parents('.profileInfoOuter').children('.addsecable').hide();
	    $(this).parents('.profileInfoOuter').children('.addsecable1').hide();
	    $(this).parents('.profileInfoOuter').children('.editable1').hide();
	    $(this).parents('.employeeProfileWrap').children('.noraml').show();
	    $(this).parents('.employeeProfileWrap').children('.editable').hide();
	  });

	//add
	 $('.addsecable').hide();
	 $(".addicon").click(function(){
	    $(this).parents('.profileInfoOuter').children('.noraml').slideUp(1000);
	    $(this).parents('.profileInfoOuter').children('.addsecable').show().slideDown(1000);
	  });

	$('.addsecable1').hide();
	$(".addicon1").click(function(){
	    $(this).parents('.profileInfoOuter').children('.noraml').slideUp(1000);
	    $(this).parents('.profileInfoOuter').children('.addsecable1').show().slideDown(1000);
	});
 	
	//delete
 	

 	//select
 	$('.slctdv').formSelect();



 	//photo gallery 
 	$(".tabphotogallery").slick({
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
		        slidesToShow: 3,
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
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		]
	});	

 	 //video gallery   
	var owl = $('.tabvideogallery');
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
            items: 4
          }
        }
      })

	// viewbox
	$('image-link').fancybox({
		// Options will go here
	});
	$('image-link1').fancybox({
		// Options will go here
	});

	//smooth scroll
	var headerheight = $('header').height(); 

	$("a.ql").on('click', function(event) { 
    	if (this.hash !== "") { 
	      event.preventDefault(); 
	      var hash = this.hash; 
	      $('html, body').animate({
	        scrollTop: $(hash).offset().top  -headerheight
	      }, 800, function(){
	    
	       // window.location.hash = hash;
	      });
    	}  
  	});

	$("a.qlink1").on('click', function(event) { 
    	if (this.hash !== "") { 
	      event.preventDefault(); 
	      var hash = this.hash; 
	      $('html, body').animate({
	        scrollTop: $(hash).offset().top  -headerheight
	      }, 800, function(){
	    
	       // window.location.hash = hash;
	      });
    	}  
  	});

	// cycle-add-remove 
	$(".cycleico").click(function(){
	  $(this).parents().toggleClass("cycleon");
	});

	// Sticky Header
	$(window).scroll(function() {
	    stickyHeader();
	});

	function stickyHeader() {
	    if ($(this).scrollTop() > 1){
	        // if ($(window).width() > 767) {
	           $('header').addClass("sticky");
	        // }
	    } else {
	        $('header').removeClass("sticky");
	    }
	}

	// Banner Slider
	$(".bannerSlider").slick({
	    dots: false, 
	    centerMode: true,
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    autoplay:true,
		autoplaySpeed:3000,
		fade: true,
	});	
 
	// Client Slider
    $('.clientLogo').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:false,
	    autoplay:true,
	    animateOut: 'fadeOut',
	    responsive:{
	        0:{
	            items:2
	        },
	        375:{
	            items:3
	        },
	        600:{
	            items:4
	        },
	        991:{
	            items:5
	        },
	        1000:{
	            items:6
	        }
	    }
	});	



    


	// Gallery Slider
	$(".gallerySlider").slick({
	    dots: true, 
	    centerMode: true,
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    autoplay:true,
		autoplaySpeed:1500,
		responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 991,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 374,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }    
		]
	});

	
	$('.input-field').removeClass('activeIcon');
	$('.registrationFormInner input').focus(function(){
		$('.input-field').removeClass('activeIcon');
		$(this).parent('.input-field').addClass('activeIcon');
	});

	$('.registrationFormInner select').focus(function(){
		$('.input-field').removeClass('activeIcon');
		$(this).parent('.input-field').addClass('activeIcon');
	});

	$('.registrationFormInner textarea').focus(function(){
		$('.input-field').removeClass('activeIcon');
		$(this).parent('.input-field').addClass('activeIcon');
	});

	// Radio Check
	


	//wow
	// new WOW().init();

	$('.menuhold').click(function(){
		var sum = 0;
		
		$(".mobileMenu > li").each(function(li_len) {
			var time = .1;
			sum += +time;
	            $(this).attr("style", "transition-delay:" + sum +"s");
	      });
	});



  	$('.menu-wrap ul.mobileMenu li.hasDropdown').click(function(){
  		$(this).find('ul').toggle();
  		$(this).toggleClass('submenuOpened');
  	});

  	$('.profileMenu > a').click(function(){
  		$('.profileMenu ul').toggle();
  	});

  	$('.multipleSelect').formSelect();

  	// Radio value
  	$('.portfolioType').click(function() {
        var selValue = $('input[name=porttype]:checked').val(); 
  		var targetBox = $("." + selValue);
        $(".box").not(targetBox).hide();
        $(targetBox).show();
    });

    $('.chips').chips();

    //profiledrodown
	 $(".user").click(function(){
	    $('.profiledorpdown').toggle(); 
	});
    
    // Share job
    $('.btnListing li').click(function(){
    	$('.btnListing li .share').toggle();
    });

	//in-view-js
    function check_if_in_view() {
      var $animation_elements = $('.animation-element');
      var $window = $(window);
      var window_height = $window.height();
      var window_top_position = $window.scrollTop();
      var window_bottom_position = (window_top_position + window_height);
     
      $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);
     
        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
          $element.addClass('in-view');
        } else {
          $element.removeClass('in-view');
        }
      });
    }
  	$(document).ready(function(){
		var $animation_elements = $('.animation-element');
		var $window = $(window);

		$window.on('scroll resize', check_if_in_view);
		$window.trigger('scroll');
  	});


  	$('.loadmoreOuter a').click(function(){
  		$('.loadmoreCity ').append('<div class="row"><div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6"><div class="findjobContent"><a href="#"><div class="findjobOuter"><img src="images/cityImg1.png"><div class="findjobInner"><h4>India</h4><h5>3,107 Jobs Posted</h5></div><div class="findjobHover"><span></span><h4>India</h4><h5>3,107 Jobs Posted</h5></div></div></a></div></div><div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6"><div class="findjobContent"><a href="#"><div class="findjobOuter"><img src="images/cityImg2.png"><div class="findjobInner"><h4>United kingdom</h4><h5>3,107 Jobs Posted</h5></div><div class="findjobHover"><span></span><h4>United kingdom</h4><h5>3,107 Jobs Posted</h5></div></div></a></div></div><div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6"><div class="findjobContent"><a href="#"><div class="findjobOuter"><img src="images/cityImg3.png"><div class="findjobInner"><h4>Australia</h4><h5>3,107 Jobs Posted</h5></div><div class="findjobHover"><span></span><h4>Australia</h4><h5>3,107 Jobs Posted</h5></div></div></a></div></div><div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6"><div class="findjobContent"><a href="#"><div class="findjobOuter"><img src="images/cityImg4.png"><div class="findjobInner"><h4>New Zealand</h4><h5>3,107 Jobs Posted</h5></div><div class="findjobHover"><span></span><h4>New Zealand</h4><h5>3,107 Jobs Posted</h5></div></div></a></div></div><div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6"><div class="findjobContent"><a href="#"><div class="findjobOuter"><img src="images/cityImg5.png"><div class="findjobInner"><h4>CHINA</h4><h5>3,107 Jobs Posted</h5></div><div class="findjobHover"><span></span><h4>CHINA</h4><h5>3,107 Jobs Posted</h5></div></div></a></div></div><div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-6"><div class="findjobContent"><a href="#"><div class="findjobOuter"><img src="images/cityImg6.png"><div class="findjobInner"><h4>Hongkong </h4><h5>3,107 Jobs Posted</h5></div><div class="findjobHover"><span></span><h4>Hongkong </h4><h5>3,107 Jobs Posted</h5></div></div></a></div></div></div>');
  	});


  	$('.registerBtn').click(function(){ 
  		$(".loginmodalOuter").addClass('reginmodalOuter');
  	});

  	$('.loginBtn').click(function(){
  		$(".loginmodalOuter").removeClass('reginmodalOuter');
  	});


  	// $('.registerBtn').click(function(){
  	// 	$('.regSection').removeClass('deactiveSection');
  	// 	$('.regSection').addClass('activeSection');
  	// 	$('.loginSection').removeClass('activeSection');
  	// 	$('.loginSection').addClass('deactiveSection');
  	// });

  	// $('.loginBtn').click(function(){
  	// 	$('.loginSection').removeClass('deactiveSection');
  	// 	$('.loginSection').addClass('activeSection');
  	// 	$('.regSection').removeClass('activeSection');
  	// 	$('.regSection').addClass('deactiveSection');
  	// });

  	$('.forgotPass').click(function(){
  		$('.forgotSection').removeClass('deactiveSection');
  		$('.forgotSection').addClass('activeSection');
  		$('.loginSection').removeClass('activeSection');
  		$('.loginSection').addClass('deactiveSection');
  	});

  	$('.bckloginBtn').click(function(){
  		$('.forgotSection').removeClass('activeSection');
  		$('.loginSection').addClass('activeSection');
  	});


  	$('.moreOptionBtn').click(function(){
  		$('.filterSection').toggleClass('filterActive');
  	});

  	$('.exsistingJobEmail .checkboxOuter input[type="checkbox"]').click(function(){
            if($(this).prop("checked") == true){
                $('.exsistingJobEmail .prevDropdown').show();
            }
            else if($(this).prop("checked") == false){
                $('.exsistingJobEmail .prevDropdown').hide();
            }
    });

    $('#chooseDate1').datepicker();
    $('#formdate').datepicker();
  	$('#todate').datepicker();


  	$('.desktopIcon').click(function(){
  		$('body').addClass('noScroll');
  		$('.desktopVersionOuter').addClass('desktopVersionOpen');
  		$('.desktopVersionTop').addClass('desktopVersionTopOpen');
  	});

  	$('.desktopCross').click(function(){
  		$('body').removeClass('noScroll');
  		$('.desktopVersionOuter').removeClass('desktopVersionOpen');
  		$('.desktopVersionTop').removeClass('desktopVersionTopOpen');
  	});

  	$('.tabletIcon').click(function(){
  		$('body').addClass('noScroll');
  		$('.desktopVersionTop').addClass('desktopVersionTopOpen');
  		$('.tabletOuter').addClass('tabletOuterOpen');
  	});

  	$('.desktopCross').click(function(){
  		$('body').removeClass('noScroll');
  		$('.tabletOuter').removeClass('tabletOuterOpen');
  		$('.desktopVersionTop').removeClass('desktopVersionTopOpen');
  	});

  	$('.mobileIcon').click(function(){
  		$('.smartphone1').toggleClass('smartphone1Open');
  	});

  	$('.scheduleSelectDayCol input[type="checkbox"]').click(function(){
        if($(this).prop("checked") == true){
            // alert("Checkbox is checked.");
            $('.timeSelect').css('display' , 'block');
        }
        else if($(this).prop("checked") == false){
            // alert("Checkbox is unchecked.");
             // $('.timeSelect').css('display' , 'none');
        }
    });


    // Menu    
    

	$(document.body).append("<div class='menuClose'></div>");

	$('.hmburger').click(function(){ 
		$('.menu-wrap').addClass( "menuadd" );
		$('.menuClose').addClass('menuCloseoverlay');			
	});

	$(".menuClose").click(function(){
		console.log('guyg');
	    $('.menu-wrap').removeClass( "menuadd" );
	    $('.menuClose').removeClass('menuCloseoverlay');
	});


	$('.pending_action h4').click(function(){
		$('.pendingList').toggle();
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

 	$('.mobileQuick h3').click(function(){
 		$('.mobileQuick ul').toggle();
 	});

 	// Filter Mobile
 	$('.filterLeftOuter h4').click(function(){
 		$('.filterContent').toggleClass('filteropen');
 	});

 	$('.mobilefilterTobar h4').click(function(){
 		$('.filterContent').removeClass('filteropen');
 	});

        
});

