//test 1
/*
var whatName = prompt('Как вас зовут?');

alert('Ваше имя: ' + whatName.toUpperCase());
*/

//test 2
/*
var etoStroka = 'This is String variable';
var resultString = '';

console.log(etoStroka);
console.log(etoStroka.length);
console.log(resultString);

for (i = 0; i <= etoStroka.length; i++) {
	if (i%2==0) {
		resultString = resultString + etoStroka[i];
	}
}

console.log(resultString);
*/

//test 3
/*
var string = 'Это строчная переменная'
var vowels = ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"];

var reqString = "";

for (var i = 0; i < string.length; i++) {
  var currentLetter = string[i].toLowerCase();

  if (vowels.indexOf(currentLetter) >= 0) {
    reqString += currentLetter;
  }
}

console.log(reqString);
*/

//test 4_1
/*
var string = function() {
	var result = "";
	var array = ["Это", "произвольный", "массив"];

	console.log(array);

	var arrayElement = function(element) {
		result += array[element]; // result = result + array[element];
	};

	var space = function(element) {
		for (var i = 0; i < element; i++)
			result += " "; // result = result + " ";
	};

	arrayElement(0);
	space(1);
	arrayElement(1);
	space(1);
	arrayElement(2);

	return result;
};

console.log(string());
*/

//test 4_2
/*
var string = function (){
	var myArray = ["Это", "произвольный", "массив"];

	var result = "";

	var getStringFromArray = function(array) {
		for (var i = 0; i < array.length; i++) {
			result += array[i] + " ";
		}
	};

	getStringFromArray(myArray);

	return result;
};

console.log(string());
*/

//test 5
/*
var string = function () {
	var users = [
		{
			name: "Alex",
			salary: 500
		},
		{
			name: "Bin",
			salary: 800
		},
		{
			name: "Serg",
			salary: 1200
		},
		{
			name: "Oleg",
			salary: 2000
		}
	];

	var result = "";

	var getHeightSalary = function(arrayOfObjects, heightSalary) {
		
		for (i = 0; i < arrayOfObjects.length; i++ ) {
			var object = arrayOfObjects[i];

			if (object.salary >= heightSalary) {
				result = result + object.name + ',';
			}
		}
	};

	getHeightSalary(users, 1000);

	return result;
};

console.log(string());
*/

//test 6
/*
var letters = {
  'a': 'ф',
  'b': 'и',
  'c': 'с',
  'd': 'в',
  'e': 'у',
  'f': 'а',
  'g': 'п',
  'h': 'р',
  'i': 'ш',
  'j': 'о',
  'k': 'л',
  'l': 'д',
  'm': 'ь',
  'n': 'т',
  'o': 'щ',
  'p': 'з',
  'q': 'й',
  'r': 'к',
  's': 'ы',
  't': 'е',
  'u': 'г',
  'v': 'м',
  'w': 'ц',
  'x': 'ч',
  'y': 'н',
  'z': 'я'
};

function translate(string) {
  var resultString = "";

  for (var i = 0; i < string.length; i++) {
    var currentLetter = string[i];

    if (currentLetter == ' ') {
      resultString += " ";
    }

    for (var engLetter in letters) {
      if (letters[engLetter] == currentLetter) {
        resultString += engLetter;
      }
    }
  }

  //engLetter выступает в качестве имени свойства объекта letters, а русские буквы - значение свойства 

  return resultString;
}

var engString = translate('цудсщьу ещ еру огтпду');

console.log(engString);
*/

//test 7
/*
function formatDate(dateString, dateFormat) {
	var date = new Date(dateString);

	var year = date.getFullYear(),
		month = date.getMonth() + 1,
		day = date.getDate();

	var resultString = dateFormat.replace('dd', day)
		.replace('mm', month)
		.replace('yyyy', year);
	return resultString;
};

var resultDate = formatDate('2015-02-01', 'dd/mm/yyyy');

console.log(resultDate);
*/

//test 8
/*
function link(string){
	var vorLink = string.substr(-5); //вернет последние 4 символа

	return vorLink === ".html";
}

var isHtml = link('/users/test/index.html');

console.log(isHtml);
*/

//test 9
/*
function isPrime(num) {
  if (num == 1) return false;

  for (var d = 2; d < num; d++) {
    if (num % d == 0) return false;
  }

  return true;
}

var isPrimeNumber = isPrime(13);

console.log(isPrimeNumber);
*/

//test 10
/*
function generateABC() {
  var abc = [];

  for (var i = 97; i <= 122; i++) {
    abc.push(String.fromCharCode(i));
  }

  return abc;
}

function generateDigits() {
  var digits = [];

  for (var i = 0; i < 10; i++) {
    digits.push(i)
  }

  return digits;
}

function generateFullString(items) {
  var string = "";

  items.forEach(function(item) {
    var joinedString = item.join('');

    string += joinedString;
  });

  return string;
}



var lowerCaseAbc = generateABC();
var upperCaseAbc = lowerCaseAbc.map(function(letter){
  return letter.toUpperCase();
});
var digits = generateDigits();
var fullString = generateFullString([lowerCaseAbc, digits, upperCaseAbc]);


fullString += '_';


function generatePassword(n) {
  var password = "";

  for (var i = 0; i < n; i++) {
    var randomInt = getRandomInt(0, fullString.length);

    password += fullString[randomInt];
  }

  return password;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(generatePassword(10));
*/

//test 11
/*
function testNumber(num){
	return num % 2 == 0;
}

console.log(testNumber(12));

var allNumbers = [3, 20, 5, 54, 85, 9, 7, 2, 68];

var evenNumbers = allNumbers.filter(testNumber);

console.log(evenNumbers);
*/








//intrerview test 1
/*
var obj = {a:1};
(function(_obj){
	_obj = {a:2};
})(obj);
console.log(obj);
*/

//intrerview test 2
/*
(function(){
	console.log(a);
	console.log(f());
	var a = 1;
	function f(){return 2}
	var f = function(){return 3}
})();
*/

