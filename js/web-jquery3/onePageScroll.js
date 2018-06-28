//Реализация нестандартного скролла страницы - по движению колёсика мыши, скролятся целые секции

(function () {

	var display = $('.maincontent'); //то, что будем двигать
	var sections = $('.section');
	var inScroll = false; //чтобы предотвратить множественное срабатывание событий
	
	//общая функция для навигации по странице

	//спец комментарии к функции : 

	/**
	 * Скроллинг до секции
	 * @param {integer} sectionIndex
	 */

	var performTransition = function (sectionIndex) {
		if (inScroll) return;
		inScroll = true;

		var sectionPosition = (sectionIndex * -100) + '%';

		sections.eq(sectionIndex).addClass('active')
			.siblings().removeClass('active');


		display.css({
			'transform' : 'translate(0,' + sectionPosition + ')'
		});

		/*теперь надо inScroll снова сделать false*/
		setTimeout(function () {
			inScroll = false; 

			/*подкрасим меню*/
			var reqNavItem = $('.list__item').eq(sectionIndex);
			reqNavItem.find('.list__link').addClass('active');
			reqNavItem.siblings().find('.list__link').removeClass('active');
			
		}, 1300); /*т.к. в css стоит "transition: 1s;" */
	};

	/* отследить куда скроллим - вниз или вверх:
		Событие мыши 'wheel' - слелит за скроллом колёсика мыши */
	$('.wrapper').on('wheel', function (e) {
		var activeSection = sections.filter('.active');
		var nextSection = activeSection.next();
		var prevSection = activeSection.prev();

		/* deltaX и deltaY - показывают на сколько проскролии в ту или иную сторону:
			Если скролим вверх, то deltaY будет отрицательным, если вверх - положительное */
		if (e.originalEvent.deltaY > 0 && nextSection.length) { //скроллим вниз
			performTransition(nextSection.index());
		}

		if (e.originalEvent.deltaY < 0 && prevSection.length) { //скроллим вверх
			performTransition(prevSection.index());
		}
	});

	//Скролл по клику в меню
	$('.list__link').on('click', function (e) {
		e.preventDefault();

		var href = parseInt($(this).attr('href'));

		performTransition(href);
	});

}());