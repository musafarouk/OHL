$(document).ready(function() {
	//Your code goes here.


	//The line below hides all the html elements 
	// $('html').hide();


	// //The line below slowly reveals the html elements after that guy up there hides them
	// $('html').fadeIn(2200);


	//From this line below you'll see many failed attempts at adjusting my scrolling speed
	//But i'll get it eventually
	$('[href]').on('click', function(event) {
		var target = $(this.getAttribute('href'));
		if (target.length) {
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	});
	//And we finally got it without having to write some bulky shit that loops

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
// particlesJS.load('particles-js', '../../particles.json', function() {
//   console.log('callback - particles.js config loaded');
// });

// Bouncy button
$(document).ready(function() {
    function loop() {
        $('.scroll').animate({top: "+=20"},500);
        $('.scroll').animate ({
            top: '-=20',
        }, 500, 'linear', function() {
            loop();
        });
        $('.top').animate({top: "+=20"},500);
        $('.top').animate ({
            top: '-=20',
        }, 500, 'linear', function() {
            loop();
        });
    }
    loop();
});

// Sticky scroll starts here
	//On Scroll Functionality
	$(window).scroll(() => {
		var windowTop = $(window).scrollTop();
		windowTop > 100 ? $('nav').addClass('navShadow') : $('nav').removeClass('navShadow');
		windowTop > 100 ? $('ul').css('top', '100px') : $('ul').css('top', '160px');
	});

	//Click Logo To Scroll To Top
	$('#logo').on('click', () => {
		$('html,body').animate({
			scrollTop: 0
		}, 500);
	});

	//Smooth Scrolling Using Navigation Menu
	$('a[href*="#"]').on('click', function (e) {
		$('html,body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 100
		}, 500);
		e.preventDefault();
	});

	//Toggle Menu
	$('#menu-toggle').on('click', () => {
		$('#menu-toggle').toggleClass('closeMenu');
		$('ul').toggleClass('showMenu');

		$('li').on('click', () => {
			$('ul').removeClass('showMenu');
			$('#menu-toggle').removeClass('closeMenu');
		});
	});



// Scroll reveal section
window.sr = ScrollReveal();
sr.reveal('.foo');
sr.reveal('.bar');

// Customizing a reveal set
sr.reveal('.bar', { duration: 1200 });

});



































