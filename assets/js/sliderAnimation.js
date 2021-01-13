$(document).ready(function() {
    $('.slickSlider').on('init', function(e, slick) {
        var $firstAnimatingElements = $('div.single-slide-item:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);    
    });
    $('.slickSlider').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
              var $animatingElements = $('div.single-slide-item[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
              doAnimations($animatingElements);    
    });
   
    function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function() {
            var $this = $(this);
            var $animationDelay = $this.data('delay');
            var $animationType = 'animated ' + $this.data('animation');
            $this.css({
                'animation-delay': $animationDelay,
                '-webkit-animation-delay': $animationDelay
            });
            $this.addClass($animationType).one(animationEndEvents, function() {
                $this.removeClass($animationType);
            });
        });
    }
});