//Advantages popup plagin
//autor: psih2131
//email: psih213141@gmail.com

$(function advantagesPopup (){
	let advantagesElement = $('.advantages-popap'); 
	if(advantagesElement.length > 0){
		createPopupsConteiner(advantagesElement);
		$(document).on('click', '.open_advantages-popup',function(){
			$('.advantages-popap').removeClass('popupOpen');
			let openPopup_dataAdvantagesTarget = $(this).attr('data-advantages-open');
			openPopupElement(openPopup_dataAdvantagesTarget);
		});
		$('.advantages-popup__close-element').on('click',function(){
			let activePopup = $(this).closest('.advantages-popap');
			closePopupElement(activePopup);
		})
	}
	else{
		return
	}
	
	function createPopupsConteiner(popupElement){
		let advantagesPopupConteiner = $('<div class="advantages-popup__conteiner"></div>');
		let advantagesPopupClose = $('<div class="advantages-popup__close-element"></div>');
		let footerElement = $('footer');
		if(footerElement.length > 0){
			$(footerElement).after(advantagesPopupConteiner);
			advantagesPopupConteiner.append(popupElement);
			popupElement.prepend(advantagesPopupClose);
		}
		else{
			alert('На странице не найден элемент Footer, добавте его на сайт и все заработает')
		}
	}

	function openPopupElement(popupTarget){
		$('.advantages-popup__conteiner').addClass('popupConteinerActive');
		$('#'+popupTarget+'').addClass('popupOpen');
	}

	function closePopupElement(activPopup){
		activPopup.removeClass('popupOpen');
		let visiblePopups = $('.popupOpen');
		if(!visiblePopups.length > 0){
			setTimeout(closePopupConteiner, 400);
		}
	}

	function closePopupConteiner(){
		$('.advantages-popup__conteiner').removeClass('popupConteinerActive');
	}
});
	
