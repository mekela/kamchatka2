$(document).ready(function() {
	//fancybox
	$('.fancybox').fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
	
	//bxslider
	$('.top_slider ul').bxSlider();
	$('.rev_slider ul').bxSlider();


	//scroll
	 $('.totop a').on('click',function(){
		$('html,body').animate({scrollTop:$($(this).attr('href')).offset().top-55},800);
		return false;
	});

	 //menu
	 $( ".menu_trigger" ).click(function() {
	  $( ".menu ul" ).slideToggle( "slow");
	});

	 //tab
	 $(document).ready(function() {
    
	    $('.gallery_nav  a').click(function(event){
	        event.preventDefault();
	        $('.gallery_nav a').removeClass('active');
	        $(this).addClass('active');
	        $('.tab').hide();
	        $($(this).attr('href')).show();
	    });
	    
	});
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 400) {
        $(".menu").addClass("fixed");
    } else {
        $(".menu").removeClass("fixed");
    }
});