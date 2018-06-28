/*
$(document).ready(function () {
	$('.test-link').on('click', function (e) {
		e.preventDefault(); //запретили переход по ссылкам

		console.log($(this).text()); //получим текст ссылки

		console.log($('.test-link').attr('href')); // получить href

		$('.test-link').attr('href', 'http://google.com'); // поменять ссылку в href

		$('.test-link').css('color', 'red'); // по клику на одну ссылку поменятет цвет всех ссылок с таким классом

		$(this).css('color', 'blue'); // цыет поменяте только та ссылка, на которую кликнули

		console.log($(this).hasClass('another-link'));// выведет true если у ссылки, на которую кликнули есть такой класс, для остальных будет false

		var elem = $(this).find('.inner-inner-class');
		console.log(elem);

		var elem2 = $(this).closest('.wrapper');
		console.log(elem2);
	})	
});
*/

$(document).ready(function () {

	$('.start').on('click', function (e) {

		// Перебор (цикл)
		$('.test-link').each(function(index) {
			//$(this).text(index); // в каждый элемент положить текст - индекс элемента

			var textLink = $(this).text(); //текущий текст ссылки
			$(this).text(textLink + ' ' + index); //текст ссылки поменяется на: текущий текст + индекс
		});

		//Фильтрация - способ 1
		var anotherLink = $('.test-link').filter('#another'); //найти элемент с заданным id
		console.log(anotherLink);

		//Фильтрация - способ 2
		var anotherLink2 = $('.test-link').filter(function() {
			return $(this).attr('id') == 'another'; //если вернётся true для данного условия
		});
		console.log(anotherLink2);
	});

	$('.add-new-link').on('click', function(e) {

		//Создание элементов (разметки)
		var newLink = $('<a>', {
			attr : {
				href : 'http://google.com',
				class : 'test-link'
			},
			text : 'Новая ссылка'
		});

		//$('.container').html(newLink); // заменит весь контент контейнера новой ссылкой

		//$('.container').append(newLink); // добавит ссылку в конец контейнера
		//$('.container').prepend(newLink); // добавит ссылку в начало контейнера
		//$('.container').before(newLink); // перед контейнером
		$('.container').after(newLink); // после контейнера
	});

});