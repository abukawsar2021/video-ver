(function($) {
    "use strict";
	
	
	
	/*-------------------HOME-SLIDER----------------------*/	
	
		var heroSlider = $('.slickSlider');	
		
				heroSlider.slick({				
					slidesToShow:1,
					slidesToScroll:1,
					draggable: true,
					arrows: true,
					autoplaySpeed:5000,
					autoplay:true,
					fade: true,
					dots:false,
					focusOnSelect:true,
					cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
				});		 
	

	
	/*------------------OFF-CANVAS-MENU---------------------*/	 
			
        
          var menuOpenTrigger 			=  $('#menu-trigger');	
          var offCanvasMenu 			=  $('.off-canvas-menu');	
          var offCanvasMenuOverlay  	=  $('.off-canvas-menu-overlay');	
          var menuCloseBtn 				=  $('span.close-btn');	
          var multipleTriggerForMenu 	=  $('.close-btn,.off-canvas-menu-overlay,.off-canvas-menu li a');	
			
		
	      menuOpenTrigger.on('click',function(){
		   
		   offCanvasMenu.addClass("show");
		   offCanvasMenuOverlay.addClass("active");
		    menuCloseBtn.addClass("active");
					   
	   });
			   
		multipleTriggerForMenu.on('click',function(){
			
		   offCanvasMenu.removeClass("show");
			offCanvasMenuOverlay.removeClass("active");
			menuCloseBtn.removeClass("active");
			$(this).removeClass("active");
		   
		   
	   }); 


	   
	   
	/*------------------SERCH-BAR--------------------*/	 
	
	      var searchBarOpenTrigger 		=  $('#search-trigger');	
          var searchBarWrapper 			=  $('.search-bar-wrap');	
          var searchBarOverlay  		=  $('.search-bar-wrap-overlay');	
          var searchBarCloseTrigger	 	=  $('span.search-close-btn');	
          var multipleTriggerForSearch  =  $('.search-close-btn,.search-bar-wrap-overlay');	
								 

	    searchBarOpenTrigger.on('click',function(){
		   
		    searchBarWrapper.addClass("active");
		    searchBarOverlay.addClass("active");
		    searchBarCloseTrigger.addClass("active");
					   
	    });
			   
		multipleTriggerForSearch.on('click',function(){
			 
		    searchBarWrapper.removeClass("active");
		    searchBarOverlay.removeClass("active");
		    searchBarCloseTrigger.removeClass("active");
			$(this).removeClass("active");
					   
	    }); 
	
	
	
	
	
	/*-------------------CLIENT-SLIDER----------------------*/
	
	
	       var clientSlider = $('.client-slider');		
			
			clientSlider.slick({
			slidesToShow:3,
			slidesToScroll:1,	
			draggable: true,
			arrows: false,
			speed:1000,
			autoplay: true,
			variableWidth: true,
			dots:true,
			focusOnSelect:true,
			cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
			touchThreshold: 100
		  })
			
	 
	

	/*-------------------SERVICE-SLIDER----------------------*/
			
			
			var serviceSlider = $('.service-slider');		
			
			serviceSlider.slick({
			slidesToShow: 3,
			centerMode: true,
			slidesToScroll: 1,	
			draggable: true,
			arrows: false,
			speed:1000,
			autoplay: true,
			dots:true,
			focusOnSelect:true,
			cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
			
			responsive: [
					{
					  breakpoint:1200,
					  settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						centerMode: true,
						centerPadding: '40px',
						dots: true
					  }
					},
					{
					  breakpoint:768,
					  settings: {
						slidesToShow:3,
						slidesToScroll:1,
						centerMode: true,
						centerPadding: '40px'
					  }
					},
					{
					  breakpoint: 767,
					  settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						centerMode: true,
						centerPadding: '40px'
					  }
					}
					
			]
			
			
		  })
			
			
			
	/*-------------------WORK-SLIDER----------------------*/
			
			
			var workSlider = $('.work-slider');		
			
			workSlider.slick({
			slidesToShow: 3,
			centerMode: true,
			slidesToScroll: 1,	
			draggable: true,
			arrows: true,
			speed:1000,
			autoplay: true,
			variableWidth: true,
			dots:false,
			focusOnSelect:true,
			cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
			navText: ["<i class='zmdi zmdi-chevron-left'></i>",
					"<i class='zmdi zmdi-chevron-right'></i>"
				]
		  })
			
	
	
	
		
	
	
	/*-------------------PANEL-ACCORDION-BG-COLOR----------------------*/	

		
		/*------ 1st panel ---------*/	
		
	     var panelColorText1	= $(' span.color-text1');	 		 	  	   		 	  
	     var panelBody 			= $('.panel-body');	
		 var panelTrigger1		= $('h4#panelOne.panel-title.faq-title');
		   
	     panelTrigger1.on('click', function(event) {				

			panelBody.toggleClass("activeBg");			
			panelColorText1.toggleClass("activeColor");
			$(this).toggleClass("activeBg");
			
			
		});
	

	
	
		/*------ 2nd panel ---------*/
	
	
	    var panelColorText2 	= $('span.color-text2');	 		 	  	   		 	  
	    var panelBody 			= $('.panel-body');	
		var panelTrigger2 		= $('h4#panelTwo.panel-title.faq-title');	
		
	    panelTrigger2.on('click', function(event) {				

			panelBody.toggleClass("activeBg");			
			panelColorText2.toggleClass("activeColor");
			$(this).toggleClass("activeBg");
			
			
		});
		
		
		/*------ 3rd panel ---------*/	
	
		var panelColorText3		= $('span.color-text3');	 		 	  	   		 	  
	    var panelBody 			= $('.panel-body');	
		var panelTrigger3 		= $('h4#panelThree.panel-title.faq-title');	
		
	     panelTrigger3.on('click', function(event) {				

			panelBody.toggleClass("activeBg");			
			panelColorText3.toggleClass("activeColor");
			$(this).toggleClass("activeBg");
			
			
		});
		
	
		/*------ 4th panel ---------*/	

		 		 	  	   		 	  
		var panelColorText4 	= $('span.color-text4');	 		 	  	   		 	  
	    var panelBody 			= $('.panel-body');	
		var panelTrigger4 		= $('h4#panelFour.panel-title.faq-title');	
		
	     panelTrigger4.on('click', function(event) {				

			panelBody.toggleClass("activeBg");		
			panelColorText4.toggleClass("activeColor");
			$(this).toggleClass("activeBg");
			
			
		});
	

		/*------ 5th panel ---------*/
	
	
	     var panelColorText5	= $('span.color-text5');	 		 	  	   		 	  
	     var panelBody 			= $('.panel-body');	
		 var panelTrigger5 		= $('h4#panelFive.panel-title.faq-title');
		 
	     panelTrigger5.on('click', function(event) {				

			panelBody.toggleClass("activeBg");			
			panelColorText5.toggleClass("activeColor");
			$(this).toggleClass("activeBg");
			
			
		});
		
		
	
		/*------ 6th panel ---------*/
	
	
		var panelColorText6		= $(' span.color-text6');	 		 	  	   		 	  
	    var panelBody 			= $('.panel-body');	
		var panelTrigger6		= $('h4#panelSix.panel-title.faq-title');	 
		
	     panelTrigger6.on('click', function(event) {				

			panelBody.toggleClass("activeBg");			
			panelColorText6.toggleClass("activeColor");
			$(this).toggleClass("activeBg");
			
			
		});
		
		
		
		/*------ 7th panel ---------*/	
		
		
		var panelColorText7 	= $('span.color-text7');	 		 	  	   		 	  
	    var panelBody 			= $('.panel-body');	
		var panelTrigger7 		= $('h4#panelSeven.panel-title.faq-title');	 		 
	     
		panelTrigger7.on('click', function(event) {				

			panelBody.toggleClass("activeBg");		
			panelColorText7.toggleClass("activeColor");
			$(this).toggleClass("activeBg");
			
			
		});
	
	
	
		/*------ 8th panel ---------*/
	

	     var panelColorText8 	= $('span.color-text8');	 		 	  	   		 	  
	     var panelBody 			= $('.panel-body');	
		 var panelTrigger8		= $('h4#panelEight.panel-title.faq-title');
		
	     panelTrigger8.on('click', function(event) {				

			panelBody.toggleClass("activeBg");			
			panelColorText8.toggleClass("activeColor");
			$(this).toggleClass("activeBg");
			
			
		});
		
		
		
		/*------ 9th panel ---------*/
	
		var panelColorText9		= $(' span.color-text9');	 		 	  	   		 	  
	    var panelBody 			= $('.panel-body');	
		var panelTrigger9		= $('h4#panelNine.panel-title.faq-title');	
		   
	     panelTrigger9.on('click', function(event) {				

			panelBody.toggleClass("activeBg");			
			panelColorText9.toggleClass("activeColor");
			$(this).toggleClass("activeBg");
			
			
		});
	
	
	
	
	
	/*----------------------BLOG-SLIDER----------------------*/
	
	
			var blogSlider = $('.blogSlider');		
			
			blogSlider.slick({
			slidesToShow: 3,
			centerMode: true,
			slidesToScroll:1,	
			draggable: true,
			arrows:true,
			speed:1000,
			autoplay: true,
			variableWidth: true,
			adaptiveHeight:true,
			dots:true,
			focusOnSelect:true,
			navText: ["<i class='zmdi zmdi-chevron-left'></i>",
					"<i class='zmdi zmdi-chevron-right'></i>"
				]
		  })
			  
	
	

    /*------------------SECTION-SCROLL-------------------------*/
	
		  var sectionScroll = $('a.section-scroll');	  
		  sectionScroll.on('click', function(event) {				
				var $anchor = $(this);				
				$('html, body').stop().animate({
					scrollTop: $($anchor.attr('href')).offset().top
						
				}, 1500, 'easeInOutExpo');				
				event.preventDefault();
			});
		
	  
	  
	 /*------------------------------- SINGLE-NEWS-BOX-ACTIVE ----------------------------*/
	
			var singleNewsBoxHover = $('.single-news-wrapper');	
			singleNewsBoxHover.hover(function(){
				singleNewsBoxHover.removeClass('active');
				$(this).addClass('active');

			}); 
			  
	  
	  
	/*------------------------------- MENU-FIXED-TOP-ON-SCROLL ----------------------------*/
	
			var windows = $(window);
			var customMenubarOffsetTop = $("#custom-menubar");
			var customMenubarFixedTop = $(".menubar-fixed-top");
			
				windows.on('scroll',function() {
				if (customMenubarOffsetTop.offset().top > 80) {
						customMenubarFixedTop.addClass("top-nav-collapse");
					} else {
						customMenubarFixedTop.removeClass("top-nav-collapse");
					}
				});
				
		
		
	/*------------------------------- MENU-COLLASP-ON-CLICK ----------------------------*/
	
			var mainMenuCollasp = $(".mymenu");		
			mainMenuCollasp.find("li").on('click', "a", function (event) {
				$('.navbar-collapse.in').collapse('hide');
			});
		

   /*---------------------------- WOW-JS -------------------------------*/
   
			var wow = new WOW({
				mobile: false // trigger animations on mobile devices (default is true)
				});
				wow.init();
   
    /*-------------------------------- FANCYBOX ----------------------------*/
	
			var fancyboxImage = $('.fancybox').attr('rel', 'gallery');
			var fancyboxVideo = $('.fancybox-media');
			
			fancyboxImage.fancybox({
				'speedIn': 600,
				'speedOut': 200,
				'transitionIn': 'elastic',
				'transitionOut': 'elastic',
				

			});

			fancyboxVideo.fancybox({
				'speedIn': 600,
				'speedOut': 200,
				'autoScale': true,
				'titleShow': true,
				'type': 'iframe',
				helpers		: {
					title	: { type : 'inside' },
					buttons	: {}
				}
			});



    /*-------------------------------------SCROLL-TOP-------------------------------------*/

		$.scrolltop({
			template: '<i class="zmdi zmdi-chevron-up"></i>',
			class: 'scrolltop'
		});

		 
 
	 
	
	
	 /*------------------------------------------FLICKER------------------------------*/
	 
	 var flickerPhotoGal = $('#photo-gallery');		 
	 flickerPhotoGal.jflickrfeed({
		 limit:8,
		 qstrings: {id: '47264806@N00'},
		 itemTemplate: '<li>' +'<a class="fancybox" rel="gallery" href="{{image_b}}"><img src="{{image_s}}" alt="{{title}}" /></a>' +'</li>'
     });
	
	
	   
	
	
	/*-------------------------------  VIDEO RESPONSIVE ---------------------------*/
	
       var body = $('body');
		body.fitVids();
	  

	 
	
	  /*-------------------------------  PARALLAX  ---------------------------*/
      
	  var parallaxActivate = $("[data-paroller-factor]");
	  
	   parallaxActivate.paroller();
	
	

}(jQuery));