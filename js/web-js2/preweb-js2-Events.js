// Events
//Делегирование
/*
var container = document.getElementById('container');

container.addEventListener('click', function(e) {

	console.log(e);

	var link = e.target;

	link.style.color = 'red';
});
*/

var container = document.getElementById('container');

container.addEventListener('click', function (e) {
	var link = e.target;

	if (link.classList.contains('test_link')) {
		container.firstElementChild.style.color = 'red';
	}
});

