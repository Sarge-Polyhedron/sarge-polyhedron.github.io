$(function() {

		//menubar Липнет к верху экрана при прокрутке
	$(window).scroll(function() {
		if ($(this).scrollTop() > 102) {
			$('.menubar').addClass('menubar_scroll');
			$('.uppanel').css('margin-bottom', '40px');
		} else {
			$('.menubar').removeClass('menubar_scroll');
			$('.uppanel').css('margin-bottom', '0');
		}
	});



 //Выезжает моб МЕНЮ при нажатии кнопки
	$('.mobile-btn').on('click', function(e) {
		e.preventDefault();
    e.stopPropagation();

		$('.mobile').toggleClass('mobile-active');
		//Закрываем меню на нажатие ВНЕ МЕНЮ
		$(document).one('click', function closeMenu (e){
      if($('.mobile').has(e.target).length === 0){
          $('.mobile').removeClass('mobile-active');
      } else {
          $(document).one('click', closeMenu);
      }
    });
    //Закрываем меню при нажатии на ссылки меню
    $('.mobile__menu-link').on('click', function() {
   		$('.mobile').removeClass('mobile-active');
   });
  });




	//Инициализация. Slick слайдера
	$('.slider').slick({
		dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  adaptiveHeight: true,
	  prevArrow: '<button type="button" class="slick-prev-custom"><i class="fas fa-chevron-left"></i></button>',
	  nextArrow: '<button type="button" class="slick-next-custom"><i class="fas fa-chevron-right"></i></button>',
  });

	//Инициализация. WORKS CARUSEL слайдера
	$('.works__carusel').slick({
		dots: true,
	  infinite: true,
	  speed: 500,
	  slidesToShow: 4,
	  slidesToScroll: 2,
	  prevArrow: '<button type="button" class="slick-custom2 slick-prev-custom2"><i class="fas fa-chevron-left"></i></button>',
	  nextArrow: '<button type="button" class="slick-custom2 slick-next-custom2"><i class="fas fa-chevron-right"></i></button>',
	  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,

      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });

//E-mail Ajax Send
	$("form.footer-subscribe").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$('.subscribe-success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				// Done Functions
				$('.subscribe-success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 4000);
		});
		return false;
	});

		//Кнопка НАВЕРХ выезжает
	$(window).scroll(function() {
		if ($(this).scrollTop() > $(this).height()) {
			$('.button_top').addClass('active');
		} else {
			$('.button_top').removeClass('active');
		}
	});
	//Кнопка НАВЕРХ скролит НАВЕРХ
	$('.button_top').click(function() {
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});

});
