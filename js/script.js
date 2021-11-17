$(document).ready(function(){


	// mobile-menu icon code

	
	var status = true;
	$('.nav-icon').click(function(){

		if(status == true){
			$('.nav-icon i').removeClass('fas fa-bars');
			$('.nav-icon i').addClass('fas fa-times');
			status = false;
		}else{
			$('.nav-icon i').removeClass('fas fa-times');
			$('.nav-icon i').addClass('fas fa-bars');
			status = true;

		}

          $('.nav-menu').slideToggle();

	});



	// Typewriter plugin code
	
	var typed = new Typed('.type', {
  strings: [
   "Hi , I'm <br>Abdul Sami!",
   ' A   D e s i g n e r !',
   ' A   D e v e l o p e r !',
   ' A   Programmer !',
   
   ],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true,
    fadeOut: false,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 1000,


});


	// Animation on scroll initializer
	 AOS.init({
	 	offset: 150,
	 	easing: 'ease-out-cubic',
	 	duration: 1500,
	 	loop:true
	 });
	
})