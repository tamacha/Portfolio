//$(function(){
//	$(window).on('scroll',function(){
//        scrolled = $( window ).scrollTop();
//        weight1 = 0.5;
//        weight2 = 0.12;
//        
//        $('.parallax2').css('top',300 - scrolled * weight1 + 'px' );
//        
//        $('.parallax1').css('top',100 - scrolled * weight2 + 'px' );
//    });
//});
(function($){
	$jInverScroll(['.parallax1'],
							{
	onscroll: function(percent){
		console.log(percent);
	}
});
}(jQuery));