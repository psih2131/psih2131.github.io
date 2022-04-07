$(document).ready(function() {
	//leasy load
	var i = 1;
	$(window).scroll(function () {
	    st = $(window).scrollTop()
	   if (st > 2 && i == 1){
	       $('[data-src]').each(function () {
	           var src = $(this).data('src');
	           $(this).attr('src',src);
	           i=2;
	       });
	   }
	});

	//header animation
	$(window).scroll(function() { 
	    let the_top = $(document).scrollTop();
	    if (the_top > 50) {
	        $('header').addClass('fixed_header');
	    }
	    else {
	        $('header').removeClass('fixed_header');
	    }
	 });

	//header mob nav
	$('.burger-meny').on('click',function(){
		let header = $('header')
		if(header.hasClass('activMobNav')){
			$('header').removeClass('activMobNav');
			$('.header__mobile-nav-wrapper').slideUp(800);
		}
		else{
			$('header').addClass('activMobNav');
			$('.header__mobile-nav-wrapper').slideDown(800);
		}	
	});

	//contact modul
	$('.cont-btn').on('click',function(){
		if($('.cont-btn__bg').hasClass('act-bg')){
			$('.cont-btn__bg').removeClass('act-bg');
		}
		else{
			$('.cont-btn__bg').addClass('act-bg');
		}
		$('.contact-modul__solial-conteiner').slideToggle(300, function(){
			if($(this).is(':visible')){
				$('.cont-btn__activ').css({
					'opacity': '1'
				})
				$('.cont-btn__def').css({
					'opacity': '0'
				})
				$('.cont-btn').removeClass('cont-btn_anim')
			}
			else{
				$('.cont-btn__activ').css({
					'opacity': '0'
				})
				$('.cont-btn__def').css({
					'opacity': '1'
				})
				$('.cont-btn').addClass('cont-btn_anim')
			}
		})
	})

    
    //services popup add info
    $(document).on('click', '.services-box .services-box__more-link', function(){
    	let titleThisBox = $(this).closest('.services-box').find('.services-box__title').text();
    	let textThisBox = $(this).closest('.services-box').find('.services-box__all-text-conteiner').html();
    	let titleThisImage = $(this).closest('.services-box').find('.services-box__image').attr('src');

    	$('.popup-services').find('.popup-services__title').text(titleThisBox);
    	$('.popup-services').find('.popup-services__text-wrapper').html(textThisBox);
    	$('.popup-services').find('.popup-services__image img').attr('src',titleThisImage);
    })

	//services slider
	$('.services-sec__row').slick({
	  infinite: true,
	  speed: 1000,
	  adaptiveHeight: true,
	  slidesToScroll: 1,
	  dots: false,                                                                                                                                                                                                               
	  slidesToShow: 4,
	  prevArrow: '<div class="ar_slier prev-ar_slide"><div class="ar-ic-slider"></div></div>', 
	  nextArrow: '<div class="ar_slier next-ar_slide"><div class="ar-ic-slider"></div></div>',
	  responsive: [
	  {
	      breakpoint: 1350,
	      settings: {
	        dots: true, 
	        arrows: false, 
	      }
	    },
	    {
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 3,
	        dots: true, 
	        arrows: false, 
	      }
	    },
	    {
	      breakpoint: 900,
	      settings: {
	        slidesToShow: 2,
	        dots: true, 
	        arrows: false, 
	      }
	    },
	    {
	      breakpoint: 580,
	      settings: {
	        slidesToShow: 1,
	        dots: true, 
	        arrows: false, 
	      }
	    }
	  ]  
	});

	//portfolio slider
	$('.portfolio-slider').slick({
	  infinite: true,
	  speed: 1000,
	  adaptiveHeight: true,
	  slidesToScroll: 1,
	  dots: false,                                                                                                                                                                                                               
	  slidesToShow: 3,
	  prevArrow: '<div class="ar_slier prev-ar_slide"><div class="ar-ic-slider"></div></div>', 
	  nextArrow: '<div class="ar_slier next-ar_slide"><div class="ar-ic-slider"></div></div>',
	  responsive: [
	    {
	      breakpoint: 1350,
	      settings: {
	        dots: true, 
	        arrows: false, 
	      }
	    },
	    {
	      breakpoint: 900,
	      settings: {
	        dots: true, 
	        arrows: false,
	        slidesToShow: 2, 
	      }
	    },
	    {
	      breakpoint: 580,
	      settings: {
	        dots: true, 
	        arrows: false,
	        slidesToShow: 1, 
	      }
	    },
	  ]  
	});

	//prise slider
	$('.prise-sec__slider').slick({
	  infinite: true,
	  speed: 1000,
	  adaptiveHeight: true,
	  slidesToScroll: 1,
	  dots: false,                                                                                                                                                                                                               
	  slidesToShow: 2,
	  prevArrow: '<div class="ar_slier prev-ar_slide"><div class="ar-ic-slider"></div></div>', 
	  nextArrow: '<div class="ar_slier next-ar_slide"><div class="ar-ic-slider"></div></div>',
	  responsive: [
	   {
	      breakpoint: 1350,
	      settings: {
	        dots: true, 
	        arrows: false, 
	      }
	    },
	    {
	      breakpoint: 1080,
	      settings: {
	        dots: true, 
	        arrows: false, 
	        slidesToShow: 3,
	      }
	    },
	    {
	      breakpoint: 1080,
	      settings: {
	        dots: true, 
	        arrows: false, 
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 580,
	      settings: {
	        dots: true, 
	        arrows: false, 
	        slidesToShow: 1,
	      }
	    },
	  ]  
	});

	//reviews slider
	$('.reviews-slider').slick({
	  infinite: true,
	  speed: 1000,
	  adaptiveHeight: true,
	  slidesToScroll: 1,
	  dots: false,                                                                                                                                                                                                               
	  slidesToShow: 4,
	  prevArrow: '<div class="ar_slier prev-ar_slide"><div class="ar-ic-slider"></div></div>', 
	  nextArrow: '<div class="ar_slier next-ar_slide"><div class="ar-ic-slider"></div></div>',
	  responsive: [
	    {
	      breakpoint: 1350,
	      settings: {
	        dots: true, 
	        arrows: false, 
	      }
	    },
	    {
	      breakpoint: 1080,
	      settings: {
	        dots: true, 
	        arrows: false, 
	        slidesToShow: 3,
	      }
	    },
	    {
	      breakpoint: 1080,
	      settings: {
	        dots: true, 
	        arrows: false, 
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 580,
	      settings: {
	        dots: true, 
	        arrows: false, 
	        slidesToShow: 1,
	      }
	    },
	  ]  
	});

	//reviews popup add info
    $(document).on('click', '.reviews-slider__read-more .services-box__more-link', function(){
    	let titleThisBox = $(this).closest('.reviews-slider__element').find('.reviews-slider__name-autor').text();
    	let companyThisBox = $(this).closest('.reviews-slider__element').find('.reviews-slider__company').text();
    	let textThisBox = $(this).closest('.reviews-slider__element').find('.reviews-slider__review-small-text').html();
    	let titleThisImage = $(this).closest('.reviews-slider__element').find('.reviews-slider__photo-wrapper-2 img').attr('src');

    	$('.popup-reviews-text').find('.reviews-slider__name-autor').text(titleThisBox);
    	$('.popup-reviews-text').find('.reviews-slider__company').text(companyThisBox);
    	$('.popup-reviews-text').find('.reviews-slider__review-small-text').html(textThisBox);
    	$('.popup-reviews-text').find('.reviews-slider__photo-wrapper-2 img').attr('src',titleThisImage);
    })



	//inpyt type file btn
	$('.file-hide').change(function() {
    if ($(this).val() != '') $(this).prev().text('Выбрано файлов: ' + $(this)[0].files.length);
	    else $(this).prev().text('Выберите файлы');
	});

	//seo read more
	$('.seo__read-more .services-box__more-link').on('click', function(){
		let readMoreSeoText = $(this).closest('.general-conteiner').find('.seo__row');
		if (readMoreSeoText.hasClass('open-read-more')) {
			readMoreSeoText.removeClass('open-read-more');
			$(this).find('svg').css({
				'transform':'rotate(0deg)'
			})
			$(this).find('p').text('Подробнее')

		}
		else{
			readMoreSeoText.addClass('open-read-more');
			$(this).find('svg').css({
				'transform':'rotate(-90deg)'
			})
			$(this).find('p').text('Скрыть')
		}
		
	});

	//Single work page Mobile slider START___
	$('.work-views-mobile__slider').slick({
	  infinite: true,
	  speed: 700,
	  adaptiveHeight: false,
	  slidesToScroll: 1,
	  dots: false,
	  asNavFor: '.work-views-mobile__name-sec-slider',                                                                                                                                                                                                               
	  slidesToShow: 1,
	  prevArrow: '<div class="ar_slier prev-ar_slide"><div class="ar-ic-slider"></div></div>', 
	  nextArrow: '<div class="ar_slier next-ar_slide"><div class="ar-ic-slider"></div></div>',
	  responsive: [
	    {
	      breakpoint: 359,
	      settings: {
	        slidesToShow: 1,
	        arrows: false,
	      }
	    },
	  ]  
	});

	$('.work-views-mobile__name-sec-slider').slick({
	  infinite: true,
	  fade:true,
	  speed: 700,
	  adaptiveHeight: false,
	  slidesToScroll: 1,
	  dots: false,
	  asNavFor: '.work-views-mobile__slider',                                                                                                                                                                                                               
	  slidesToShow: 1,
	  arrows: false,
	  responsive: [
	    {
	      breakpoint: 850,
	      settings: {
	        slidesToShow: 1,
	      }
	    },
	  ]  
	});
	//Single work page Mobile slider END___


	//Single work page Video
	$('.work-vievs-video__play').on('click',function(){
		let video = $(this).closest('.work-vievs-video__conteiner').find('video');
		video[0].setAttribute("controls","controls") 
		video[0].load();
  		video[0].play();
  		$(this).hide(300);

	})

	//animation link scroll
	jQuery(function($){
	$('a[href*="#"]').on('click.smoothscroll', function( e ){
	var hash    = this.hash, _hash   = hash.replace(/#/,''), theHref = $(this).attr('href').replace(/#.*/, '');
	if( theHref && location.href.replace(/#.*/,'') != theHref ) return;
	var $target = _hash === '' ? $('body') : $( hash + ', a[name="'+ _hash +'"]').first();
	if( ! $target.length ) return;
	e.preventDefault();
	$('html, body').stop().animate({ scrollTop: $target.offset().top - 0 }, 800, 'swing', function(){
	window.location.hash = hash;
	});
	});
	});

});
window.addEventListener('load', function(){
	let preloaderConteiner = document.querySelector('.preloader-conteiner');
	setTimeout(()=>{
		preloaderConteiner.classList.add('hidePreloader')
		animateController()
	}, 1000)

	
}); 

function animateController(){
	new Skroll({
	mobile:true,
})
  .add(".main-sec__title",{
    delay:300,
    duration:1000,
    animation:"slideInLeft"
  })
  .add(".main-sec__subtitle",{
    delay:300,
    duration:700,
    animation:"fadeInUp"
  })
  .add(".btn-anim",{
    delay:300,
    duration:700,
    animation:"fadeInUp"
  })
  .add(".main-sec__sotial-link",{
    delay:300,
    duration:700,
    animation:"fadeInUp"
  })
  .add(".report-row__box",{
    delay:300,
    duration:700,
    animation:"fadeInUp"
  })
  .add(".about-sec .general-title",{
    delay:300,
    duration:700,
    animation:"fadeInUp"
  })
  .add(".about-sec__text-wrapper",{
    delay:300,
    duration:700,
    animation:"fadeInUp"
  })
  .add(".btn-wrapper__buttonV2",{
    delay:300,
    duration:700,
    animation:"fadeInUp"
  })
  .add(".about-sec__image",{
    delay:300,
    duration:1000,
    animation:"slideInLeft"
  })
   .add(".services-sec .general-title",{
    delay:300,
    duration:1000,
    animation:"slideInLeft"
  })
   .add(".services-box",{
    delay:100,
    duration:1000,
    animation:"fadeInUp"
  })
   .add(".portfolio-sec .general-title",{
    delay:300,
    duration:700,
    animation:"slideInLeft"
  })
   .add(".portfolio-slider__element",{
    delay:100,
    duration:1000,
    animation:"fadeInUp"
  })
   .add(".portfolio-sec__soliat-box",{
    delay:300,
    duration:1000,
    animation:"fadeInUp"
  })
   .add(".prise-sec .general-title",{
    delay:300,
    duration:1000,
    animation:"slideInRight"
  })
   .add(".prise-sec__data-title",{
    delay:300,
    duration:1000,
    animation:"fadeInUp"
  })
   .add(".prise-sec__data-subtitle",{
    delay:300,
    duration:1000,
    animation:"fadeInUp"
  })
   .add(".prise-sec__data-row",{
    delay:300,
    duration:1000,
    animation:"fadeInUp"
  })
   .add(".prise-sec__slider",{
    delay:300,
    duration:1000,
    animation:"fadeInUp"
  })
   .add(".reviews-sec .general-title",{
    delay:300,
    duration:1000,
    animation:"slideInLeft"
  })
   .add(".reviews-slider__element",{
    delay:100,
    duration:1000,
    animation:"fadeInUp"
  })
   .add(".seo__title",{
    delay:100,
    duration:1000,
    animation:"fadeInUp"
  })
   .add(".seo__row",{
    delay:100,
    duration:1000,
    animation:"fadeInUp"
  })
   .add(".seo__read-more",{
    delay:100,
    duration:1000,
    animation:"fadeInUp"
  })
   .add(".gen-titleV2",{
    delay:300,
    duration:1000,
    animation:"slideInLeft"
  })
   .add(".gen-subtitleV2",{
    delay:300,
    duration:1000,
    animation:"slideInLeft"
  })
   .add(".portfolio-full-screan__name-page",{
    delay:300,
    duration:1000,
    animation:"slideInLeft"
  })
   .add(".portfolio-full-screan__title-page",{
    delay:400,
    duration:1000,
    animation:"slideInLeft"
  })
   .add(".portfolio-full-screan__last-work-subtitle",{
    delay:500,
    duration:1000,
    animation:"slideInLeft"
  })
   .add(".portfolio-full-screan__last-work-title",{
    delay:600,
    duration:1000,
    animation:"slideInLeft"
  })
   .add(".portfolio-full-screan__link-wrapper",{
    delay:700,
    duration:1000,
    animation:"slideInLeft"
  })
   .add(".portfolio-full-screan__down-icon",{
    delay:700,
    duration:1000,
    animation:"slideInLeft"
  })
   .add(".portfolio-full-screan__down-link p",{
    delay:700,
    duration:1000,
    animation:"slideInLeft"
  })
   .add(".single-full-screan__info-box",{
    delay:300,
    duration:1000,
    animation:"slideInLeft"
  })
   .add(".single-full-screan__subtitle",{
    delay:600,
    duration:1000,
    animation:"slideInLeft"
  })
   .add(".all-target .general-title",{
    delay:300,
    duration:1000,
    animation:"slideInLeft"
  })
   .add(".all-target__category-box",{
    delay:300,
    duration:1000,
    animation:"fadeInUp"
  })
   .add(".work-views-V1__page-title",{
    delay:300,
    duration:1000,
    animation:"slideInLeft"
  })
   .add(".work-views-V1 .general-title",{
    delay:300,
    duration:1000,
    animation:"slideInLeft"
  })
   .add(".work-views-V1__page-wrapper img",{
    delay:300,
    duration:1000,
    animation:"fadeInUp"
  })
   .add(".work-views-mobile__title",{
    delay:300,
    duration:1000,
    animation:"slideInLeft"
  })
   .add(".work-views-mobile__select-wrapper",{
    delay:300,
    duration:1000,
    animation:"slideInLeft"
  })
   .add(".work-views-mobile__slider-conteiner",{
    delay:300,
    duration:1000,
    animation:"fadeInUp"
  })
   .add(".work-views-mobile__section-counter",{
    delay:300,
    duration:1000,
    animation:"fadeInUp"
  })
   .add(".form-views-mod__title",{
    delay:300,
    duration:1000,
    animation:"slideInLeft"
  })
   .add(".form-claster__title",{
    delay:300,
    duration:1000,
    animation:"slideInLeft"
  })
   .add(".form-claster__text",{
    delay:300,
    duration:1000,
    animation:"slideInLeft"
  })
    .add(".work-vievs-fonts-color__title",{
    delay:300,
    duration:1000,
    animation:"slideInLeft"
  })
    .add(".work-vievs-fonts-color__font-title",{
    delay:300,
    duration:1000,
    animation:"slideInLeft"
  })
    .add(".work-vievs-fonts-color__font-element-wrapper",{
    delay:300,
    duration:1000,
    animation:"fadeInUp"
  })
    .add(".work-vievs-fonts-color__color-box",{
    delay:300,
    duration:1000,
    animation:"fadeInUp"
  })
    .add(".work-vievs-video__conteiner",{
    delay:300,
    duration:1000,
    animation:"fadeInUp"
  })

  .init()
  .recalcPosition() 
}

