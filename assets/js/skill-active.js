(function($) {
    "use strict";
   
   
   	/*------------------------------- PROGRESS BAR ---------------------------*/
	 var skillBar = $('.progressbar');
	
		function animateElements() {
			skillBar.each(function () {
				var elementPos = $(this).offset().top;
				var topOfWindow = $(window).scrollTop();
				var percent = $(this).find('.circle').attr('data-percent');
				var percentage = parseInt(percent, 10) / parseInt(100, 10);
				var animate = $(this).data('animate');
				if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
					$(this).data('animate', true);
					$(this).find('.circle').circleProgress({
						startAngle: -Math.PI / 2,
						value: percent / 100,
						size:200,
						lineCap: "round",
						thickness:10,
						emptyFill: "#2f2f2f",
						fill: {
							color: ["#f26c4f"]
						}
					}).on('circle-animation-progress', function (event, progress, stepValue) {
						$(this).find('div').text((stepValue*100).toFixed(1) + "%");
					}).stop();
				}
			});
		}

		// Show animated elements
		animateElements();
		$(window).scroll(animateElements);
	 
	  
	  
}(jQuery));