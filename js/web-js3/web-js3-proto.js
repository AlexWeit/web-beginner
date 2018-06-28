// Прототипное наследлование

(function(params) {
	var obj = {
		prop : 'val',
		prop2 : 'val2'
	}

	var test = {
		hello : 'world'
	}

	test.__proto__ = obj; //скрытому свойству __proto__ присвоили свойства объекта obj

	console.log(test.prop2);
})();

(function(params) {
	var obj = {
		one : 'one1',
		two : 'two2'
	}

	// Функция-конструктор
	function CreateObject() {
		this.one = 'one1';
		this.two = 'two2';
	}

	console.log(CreateObject.prototype);

	CreateObject.prototype.toAnotherCase = function(params) {
		return this.one.toUpperCase();
	}

	console.log(CreateObject.prototype);

	var objFromFunc = new CreateObject();

	console.log(objFromFunc);

	console.log(objFromFunc.toAnotherCase());
})();