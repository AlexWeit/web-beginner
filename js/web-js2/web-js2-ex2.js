// Задание 2

// 1 - получить данные из полей форм
// 2 - создать новые блоки
// 3 - добавить новые блоки

var inputNumber = document.getElementById('number');
var inputColor = document.getElementById('color');
var container = document.getElementById('blocks__list');

var isOd = true; // нечетные блочки

inputNumber.addEventListener('input', function () {
	var number = inputNumber.value; // this.value
	var blocksHtml = "";

	for (i = 0; i < number; i++) {
		// создать новые блоки
		var block = document.createElement('div');

		block.className = "block__item";
		block.innerText = i + 1; // номера квадратиков

		blocksHtml += block.outerHTML; //создаем нужное количество блоков
	}

	container.innerHTML = blocksHtml; // засовываем блоки в контейнер
});


inputColor.addEventListener('change', function () {
	var color = inputColor.value;
	var coloredBlocks = container.children;

	if (isOd == true) {
		isOd = false;
	} else {
		isOd = true;
	}

	/* равносильно: при помощи тернарного оператора: 
		if (isOd == true) ? false : true;
	*/

	for (i = 0; i < coloredBlocks.length; i++) {

		if (isOd && i % 2 == 0) {
			coloredBlocks[i].style.backgroundColor = color;	
		}
		
		if (!isOd && i % 2 !== 0) {
			coloredBlocks[i].style.backgroundColor = color;	
		}
	}
});
