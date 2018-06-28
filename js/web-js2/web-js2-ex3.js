// Задание 3. Пятнашки

var game = document.getElementById('game');
var dottsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var arrayLength = dottsArray.length;
var blackDot;

// подбор случайного числа
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

// функция для создания кубиков
function createBlock(text, additionClass) {
	var block = document.createElement('div');
	  
	block.className = 'game__item';

	if (additionClass) block.classList.add(additionClass);

	block.innerText = text;
	game.appendChild(block);
}

// создаём и заполняем кубики случайными номерами из заданного массива
for (var i = 0; i < arrayLength; i++) {
	var randomInt = getRandomInt(0, dottsArray.length);

	createBlock(dottsArray[randomInt]);
	dottsArray.splice(randomInt, 1); // вырезать элемент который уже использовали
}

createBlock('', 'game__item_black') // добавляем черный кубик

// прослушка кубиков через делегирование
game.addEventListener('click', function (e) {
	var elem = e.target; // где сейчас происходит событие
	var allElems = game.children; // массив с кубиками

	// если кликнули на любой кубик
	if (elem.className == 'game__item') {

		// если другой кубик является активным
	    if (blackDot.classList.contains('game__item_active')) {
	      blackDot.innerText = elem.innerText; // переместить цифру в предыдущий
	      blackDot.classList.remove('game__item_black', 'game__item_active'); // убрать активность и закраску

	      elem.classList.add('game__item_black'); // добавить активность тому, на который кликнули
	    }
	}

	// если это черный кубик, то добавить ему белую обводку
	if (elem.classList.contains('game__item_black')) {
	    elem.classList.toggle('game__item_active');
	    blackDot = elem; // черный кубик
	}

});



