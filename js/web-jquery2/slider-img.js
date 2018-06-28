$(document).ready(function () {

	/*закрашивание точек активного слайда*/
	var coloringDots = function (indexOfActiveSlide) {
		$('.slider')
			.find('.slider__dot-item')
			.eq(indexOfActiveSlide)
			.addClass('active')
			.siblings()
			.removeClass('active');
	};

	/*функция генерации нужного количества точек в соответствии с количесивом слайдов*/
	var generateDots = function () {
		$('.slider__item').each(function () {
			var dot = $('<li>', {
				attr : {
					class : 'slider__dot-item'
				},
				html : '<div class="slider__dot-circle"></div>'
			});

			$('.slider__dots').append(dot);
		});
	};

	generateDots();

	/*чтобы не повторять код нужна общая функция анимации*/
	var moveSlide = function (container, slideNum) {
		var 
			items = container.find('.slider__item'),
			activeSlide = items.filter('.active'),
			/*
			далее нужно знать порядковый номер необходимого слайда
			внутри нашего списка для того, чтобы его порядковый номер
			умножить на 100, добавить туда строку процент и передать
			это в метод .animate() и тогда jQuery пролистнёт весь
			наш список до нужного слайда
			*/
			reqItem = items.eq(slideNum), /*следующий/предыдущий слайд*/
			reqIndex = reqItem.index(), /*индекс необходимого элемента (следующейго слайда)*/
			list = container.find('.slider__list'),/*то, что мы будем двигать*/
			duration = 500; /*время нашей анимации*/

		/*проверить существование слайда и только тогда выполнять анимацию*/
		if (reqItem.length != 0) { // reqItem.length
			list.animate({
				'left' : -reqIndex * 100 + '%'
			}, duration, function () { /*то произойдет после завершения анимации*/
				activeSlide.removeClass('active');
				reqItem.addClass('active');
				coloringDots(slideNum);
			});
		}	
	};

	$('.slider__btn').on('click', function (e) {
		e.preventDefault();

		var $this = $(this),
			reqContainer = $this.closest('.slider'),
			items = reqContainer.find('.slider__item'), // items = $('.slider__item', reqContainer)
			activeSlide = items.filter('.active'),
			nextItem = activeSlide.next(),
			prevItem = activeSlide.prev();

		if ($this.hasClass('slider__btn-next')) { //вперед

			/*чтобы закольцевать листание*/
			if (nextItem.length) {
				moveSlide(reqContainer, nextItem.index());
			} else {
				moveSlide(reqContainer, items.first().index());
			}
		} 

		if ($this.hasClass('slider__btn-prev')){ //назад
			if (prevItem.length) {
				moveSlide(reqContainer, prevItem.index());
			} else {
				moveSlide(reqContainer, items.last().index());
			}
		}
		
	});

	/*
	обработка точек
	Обработчик вешаем на боди, тк при загрузке документа точек еще нет
	Дополнительным параметром в обработчик передаем элемент, на котором надо ловить "всплытие"
	*/
	$('body').on('click', '.slider__dot-item', function () {
		var $this = $(this),
			reqContainer = $this.closest('.slider'),
			dotIndex = $this.index();

		moveSlide(reqContainer, dotIndex);
		coloringDots(dotIndex);
	});
});