// Задание 1

/* Инструкции
1 - найти блоки на странице и засунуть их в переменные
2 - повесить обработчики на три события: mousedown, mousemove, mouseup
3 - прекратить отслеживать движение мыши после mouseup (mouseMove = false)
4 - вычислить на сколько пикселей переместилась мышь (на столько же потом двигать блок)
5 - отследить курсор: pageX и pageY - это координаты курсора в момент срабатывания события
6 - отследить координаты элементов на странице на перед перетягиванием: 
	метод Element.getBoundingClientRect() покажет все характеристики элемента(размеры, расположение)
	Измерять элементы в событии mousedown, а использовать потом в mousemove
7 - написать функцию, которая отследит на сколько пикселей отодвинулся курсор от границы оборачивающего блока 
	после нажатия на него:
	из общего расстояния мыши по Х вычесть растояние до границы wrapper по Х, аналогично по Y
8 - для передачи данных об измерении элементов в mousemove создадим пустой объект coords,
	куда запишутся 2 объекта (blockObj и wrapperObj) с необходимыми данными элементов:
	расстояние от левого края, от верха, ширина, высота 
9 - посмотреть где произошло событие относительно ближайшего блока (где кликнули):
	свойства объекта события мыши: layerX и layerY
10 - вычесть то что кликнули (clickedX, clickedY), чтобы при перетаскивании блок не "скакал"
11 - не пускать внутренний блок за пределы внешнего:
		1) запретить вытягивать вверх и влево - до того как начали изменять стили
		2) запретить вытягивать вправо: ширина обёртки минус ширина блока
		3) запретить вытягивать вниз: высота обёртки минус высота блока 
12 - чтобы блок не прилипал к курсору снова после того как курсор отпустили:
	повесить события mousemove и mouseup не на wrapper, а на document

*/

var wrapper = document.getElementById('wrapper');
var block = document.getElementById('block');

var mouseMove = false; // движение мыши не отслеживается

var coords = {};

block.addEventListener('mousedown', function (e) {
	mouseMove = true;

	var wrapperRect = wrapper.getBoundingClientRect();
	var blockRect = block.getBoundingClientRect();

	coords.blockObj = {
		offsetLeft : blockRect.left,
		offsetTop : blockRect.top,
		clickedX : e.layerX,
		clickedY : e.layerY,
		width : blockRect.width,
		height : blockRect.height
	}

	coords.wrapperObj = {
		offsetLeft : wrapperRect.left,
		offsetTop : wrapperRect.top,
		width : wrapperRect.width,
		height : wrapperRect.height
	}
});

document.addEventListener('mousemove', function (e) {
	if (!mouseMove) return; //if (mouseMove == true)

	var blockPositionX = e.pageX - coords.wrapperObj.offsetLeft - coords.blockObj.clickedX;
	var blockPositionY = e.pageY - coords.wrapperObj.offsetTop - coords.blockObj.clickedY;

	var borderWidth = getComputedStyle(wrapper).borderRightWidth.slice(0,1)*2;
	
	if (blockPositionX < 0) {
		blockPositionX = 0;
	}

	if (blockPositionY < 0) {
		blockPositionY = 0;
	}

	if (blockPositionX > (coords.wrapperObj.width - coords.blockObj.width - borderWidth)) {
		blockPositionX = coords.wrapperObj.width - coords.blockObj.width - borderWidth;
	}

	if (blockPositionY > (coords.wrapperObj.height - coords.blockObj.height - borderWidth)) {
		blockPositionY = coords.wrapperObj.height - coords.blockObj.height - borderWidth;
	}

	block.style.left = blockPositionX + "px";
	block.style.top = blockPositionY + "px";

	//console.log('mousemove');
});

document.addEventListener('mouseup', function () {
	mouseMove = false;

	//console.log('mouseup');
});


