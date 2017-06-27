$(document).ready(function() {

 $(".click").click(function() {
		$("html, body").animate({
			scrollTop : $(".team").offset().top }, 1200);
	});
		

 $(".click-cont").click(function() {
		$("html, body").animate({
			scrollTop : $(".contact").offset().top }, 1200);
	});


 $('.slaider').slick({
		    
		      arrows: true,
              prevArrow: '<img class="right-control slick-next" src="img/arrow-right.png">', 
              nextArrow:    '<img class="left-control slick-prev" src="img/arrow-left.png">',
			  infinite: true,
			  speed: 9000,
			  slidesToShow: 1,
			  autoplay: true,
			 
		  });
 $('.btn-buy').hover(function() {
$(this).closest('.plans-card').find('.plans-card__title').toggleClass('hover');
});

$(".menu").click(function() {
    $("ul").slideToggle("slow")
        return false;
    });
       

});


