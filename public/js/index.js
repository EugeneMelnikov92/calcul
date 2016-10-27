$(function() {
	var number = 0;
	this.a = 5;
	var that = this;
	$('.keyboard td').click(function (e) {
		that.b = 10;
		//console.log('a',that.a);
		//console.log(e.currentTarget.innerText);
		number = e.currentTarget.innerText;
		$('.number').append(number); 
		
		$.ajax({
			url: '/number',
			type: 'POST',
			data: {number:number}
		}).success(function(res){
			//console.log(res);
		}).error(function(res){
			//console.log(res);
		});


		$.ajax({
			url: '/name',
			type: 'GET'
		}).success(function(res){
			//console.log(res);
		}).error(function(res){
			//console.log(res);
		});
	});
	var submit = function (e) {
		var name = $('.username').val();
		//console.log(name);
		var pas = $('.password').val();
		//console.log(pas);
		$.ajax({
			url: '/signup',
			type: 'POST',
			data: {username:name,password:pas}
		}).success(function(res){
			//console.log(res);
		}).error(function(res){
			//console.log(res);
		});
		return false;
	}
	$('.submit').click(submit);
	
	//var a = 24;
	/*var b = '24';
	var c = ' hello';
	a = a+3;
	a++;
	a +=1;
	a--;
	a-=1;
	var d = a == b ? 'less' : 'more';
	console.log(d);*/

	/*for(var i = 0; i<10; ++i){
		console.log(i);
	}*/
	/*var i = 0;
	while (i<5){
		console.log(i);
		i++;
	}


*/
	/*var message = 'i call from outside';
	var showMessage = function(msg){
		var a = msg || 'Hello World!';
		message = 'i call from function';
		alert(message);
	} 
	showMessage();  //вызывает функцию
	console.log(message);

	function showMessage(msg){
		var a = msg || 'Hello World!';
		message = 'i call from function';
		alert(message);
	}
	showMessage();*/


	var menu = {
		width: 300,
		height: 200,
		title: 'Menu'
	}
	
	menu.color = 'red';
	menu.width = 100;
	//console.log(menu);
	var key;
	//console.log(menu.width);
	//console.log(menu['height']);
	for(key in menu){
		//console.log('key '+ key);
		//console.log(menu[key]);
	}




	var first_name = 'Mike';
	var last_name = ' Tyson';
	var username = first_name + last_name;
	var user1 = {
		first_name: 'Mike',
		last_name: ' Tyson',
		getUserFirstName: function(){
			return this.first_name;
		},
		getUserLastName: function(){
			return this.last_name;
		}
	};
	var user2 = {
		first_name: 'Tro',
		last_name: 'Lolo'
	};
	var key = 'first_name';
	var getUsername = function(user){
		return user.first_name + user.last_name;
	};
	var user3 = {
		first_name: 'ira',
		last_name: 'irina'
	}
	var user4 = {
		first_name: 'nina',
		last_name: 'lina'
	}

	var users = [user1,user2,user3];

	users.push(user4);
	users.splice(1,1);
	//console.log(users);
	var age;
	user1.age = function(){
		user1.indexOf('Mike' * 10);
	}
	console.log(age);
	//var number = users.indexOf(first_name);
	console.log(users);
	//for(users)
	//console.log(getUsername(user1));
	//console.log(getUsername(user2));
	//console.log(user.key);
	//console.log(user.getUserLastName());






		//Split
/*	var names = 'ivan boris petr';
	var numbers = [1,2,3,4];
	var array = names.split(' ');  //разделяет строку по разделителю
	array.push('igor');  //добавляет в массив эл-нт
	array.splice(0,2,'masha');  //удалить эл-ент   (0-с какого начать, 2-сколько эл-ов)  3 элемент добавляет в массив вместо удаленных
	var new_array = array.slice(0); //копирует эл-нты 
	
	array.reverse();      //переворачивает элементы(меняет порядок)
	console.log(array.indexOf('petr')); // говорит индекс элемента
	console.log(array);

*/
	/*			//THIS
	this.name = 'gleb';   // создает переменную, которая видна глобальна
	var name = 'foma';
	//console.log(this);
	//console.log(name);
*/


				//конструкторы
	/*function Animal(name){
		this.name = name;
	}			
	var zebra = new Animal('Zebra');
	var korova = new Animal('korova');*/
	/*console.log(zebra.name);
	console.log(korova.name);*/


	/*function Figur(name,width,height){
		this.name = name;
		this.width = width;
		this.height = height;*/
		/*this.square = function(){
			return this.width * this.height;
		}*/
	/*}*/
		/*var kvadrat = new Figur('kvadrat', 20, 20);
		var pryamougol = new Figur('pryamougol', 30, 15);
		Figur.prototype.square = function(){   //прототайп позволяет вынести функцию за пределы Figur(объекта)
			return this.width * this.height;
		}
		Figur.prototype.perimetr = function(){
			return this.width + this.height;
		}

		console.log(kvadrat.perimetr());
		console.log(pryamougol.perimetr());*/
});









