// JavaScript Document
/* mobile gnb fixed */
$(document).ready(function() {
	// Header Scroll
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			$('#header').addClass('fixed');
		} else {
			$('#header').removeClass('fixed');
		}
	});
});

/* mobile gnb dropdown */
$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;
		// Variables privadas
		var links = this.el.find('.dropdown');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}
	
	var arrow;   
		target = $(this);
		/*Accessing DOM*/
		dHeading = $(".dropdown");
		arrow = $("<span></span>");
		/*Dropdown Arrow*/
		$(arrow).addClass("d-arrow").html("��").appendTo(dHeading);
	
	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();
		$next.slideToggle();
		$this.parent().toggleClass('open');
		$(this).find(".d-arrow").toggleClass("d-down");
		/*if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
			$(this).find(".d-arrow").toggleClass("d-down");
		}; 硫붾돱 1媛쒖뵫 �ㅽ뵂 */
	}
	
	var accordion = new Accordion($('#nav'), false);	
	
});

/*footer FamilySite Link*/
function goLink() {
	var frm = document.link_form;
	if(frm.link.value != "") {
		window.open(frm.link.value);
	}
}

<!-- footer call -->
function callNumber(num){
   location.href="tel:"+027232233;
}

/*Main Visual Image Background*/
var settings = {
	banner: {

		// Transition delay (in ms)
			delay: 5000,
	}
};

(function($) {	
	$.fn._parallax = (skel.vars.browser == 'ie' || skel.vars.mobile) ? function() { return $(this) } : function(intensity) {
		$this.each(function() {
			var $t = $(this),
				on, off;
			on = function() {
				$t.css('background-position', 'center 100%, center 100%, center 0px');
				$window
					.on('scroll._parallax', function() {
						var pos = parseInt($window.scrollTop()) - parseInt($t.position().top);
						$t.css('background-position', 'center ' + (pos * (-1 * intensity)) + 'px');
					});
			};
			off = function() {
				$t
					.css('background-position', '');
				$window
					.off('scroll._parallax');
			};
			skel.on('change', function() {
				if (skel.breakpoint('medium').active)
					(off)();
				else
					(on)();
			});
		});

		$windows
			.off('load._parallax resize._parallax')
			.on('load._parallax resize._parallax', function() {
				$window.trigger('scroll');
			});
		return $(this);
	};

 	$.fn._slider = function(options) {

		var	$window = $(window),
			$this = $(this);

		if (this.length == 0)
			return $this;

		if (this.length > 1) {

			for (var i=0; i < this.length; i++)
				$(this[i])._slider(options);

			return $this;

		}

		// Vars.
			var	current = 0, pos = 0, lastPos = 0,
				slides = [], indicators = [],
				$indicators,
				$slides = $this.children('.swiper-slide'),
				intervalId,
				isLocked = false,
				i = 0;

		// Slides.
			$slides
				.each(function() {
					var $slide = $(this),
						$img = $slide.find('img');
					// Slide.
						$slide
							.css('background-image', 'url("' + $img.attr('src') + '")')
							.css('background-position', ($slide.data('position') ? $slide.data('position') : 'center'));
					// Add to slides.
						slides.push($slide);					
				})
				._parallax(options.parallax);
	};

	$(function() {
		var	$window 	= $(window),
			$body 		= $('body'),
			$header 	= $('#header'),
			$banner 	= $('.banner');
		// Banner.
			$banner._slider(settings.banner);
	});
})(jQuery);

/*main_business*/
$(document).ready(function() {
	// Waypoints
	$('.work').waypoint(function() {
		$('.work').addClass('animated fadeIn');
	}, {
		offset: '75%'
	});
	
	// Waypoints - vision
	$('.vision .step01').waypoint(function() {
		$('.vision_waypoint01').addClass('animated fadeInUp');
	}, {
		offset: '100%'
	});

	$('.vision .step02').waypoint(function() {
		$('.vision_waypoint02').addClass('animated fadeInUp');
	}, {
		offset: '100%'
	});
	
	$('.vision .step03').waypoint(function() {
		$('.vision_waypoint03').addClass('animated fadeInUp');
	}, {
		offset: '100%'
	});

	$('.vision .step04').waypoint(function() {
		$('.vision_waypoint04').addClass('animated fadeInUp');
	}, {
		offset: '100%'
	});
	
	$('.history').waypoint(function() {
		$('dl').addClass('animated fadeInUp');
	}, {
		offset: '100%'
	});
			
			
	// Flexslider
	$('.flexslider').flexslider({
		animation: "fade",
		directionNav: false,
	});
});
