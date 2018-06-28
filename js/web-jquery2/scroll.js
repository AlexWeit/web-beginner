// click button - up

(function() {
	var btnTop = $('.scroll-to-top-btn');

	$(window).scroll(function() {
		var windowScrollTop = $(window).scrollTop();
		showBtn(windowScrollTop);
	});

	$(document).ready(function () {
		var windowScrollTop = $(window).scrollTop();
		showBtn(windowScrollTop);

		btnTop.on('click', function (e) {
			e.preventDefault();

			$('body, html').animate({
				scrollTop : 0
			}, 2000);
		});
	});

	/*функция показа кнопки, которую проверяем по скроллу и по загрузке страницы*/
	function showBtn(scrollTop) {
		if(scrollTop > 400) {
			btnTop.css('opacity', '1');
			btnTop.fadeIn();
		} else {
			btnTop.fadeOut();
		}
	};
}());

// landing navigation
(function() {
	$('.list__link').on('click', function (e) {
		e.preventDefault();

		var href = $(this).attr('href'),
			sections = $('.section'),
			section = sections.filter('#' + href),
			reqOffset = section.offset().top;

		$('html, body').animate({
			scrollTop : reqOffset
		}, 1000);

		/* 
		-- после того как актив проставляется по скроллу(см.ниже),
			  то по клику можно не ставить -- 
			  
		$(this).addClass('active')
			.closest('.list__item').siblings()
			.find('.list__link')
			.removeClass('active');
		*/
	});

	$(window).scroll(function () {
		var windowScrollTop = $(window).scrollTop();

		$('.section').each(function () {
			var $this = $(this),
				windowMargin = 200, //расстояние от верхней границы окна до секции
				sectionPosition = $this.offset().top - windowMargin,
				sectionBottomEdge = sectionPosition + $this.height();

			if (windowScrollTop > sectionPosition && windowScrollTop < sectionBottomEdge) {
				var id = $this.attr('id'),
					links = $('.list__link');

				var reqLink = links.filter(function () {
					return $(this).attr('href') == id
				});

				links.removeClass('active');
				reqLink.addClass('active');
			}
		});
	});
}());