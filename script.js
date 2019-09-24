/*

проблемный участок function swap.showAll
попробуй просто меняь height у свап элементов

*/
$('document').ready(function () {
	let lenght = $('.lenght').val();
	let max = $('.max').val();

	arr = new Array();
	for(let i = 0; i < lenght; i++) {
		arr[i] = rand(0,max);
	}
	let len = arr.length;


	let display = document.getElementById("display");
	display.style.width = (len*14+10)+"px";


	showArr(arr);
});

function Start (){//main
	let lenght = $('.lenght').val();
	let max = $('.max').val();

	arr = new Array();
	for(let i = 0; i < lenght; i++) {
		arr[i] = rand(0,max);
	}
	let len = arr.length;


	let display = document.getElementById("display");
	display.style.width = (len*14+10)+"px";


	showArr(arr);

	let sort = $('.sort').val();
	switch (sort) {
		case "BubleSort":
			bubleSort(arr);
			break;
		case "":
			insertionSort(arr);
			break;
	}
}

/*cycle template
	let i = 0;
	let len = arr.length;
	var timerId = setInterval(function() {
		mark(i, "red");
		let item = arr[i];
		{//cycle's body start
			//code
		}//cycle's body end
	  	if(i >= len)
	  		clearInterval(timerId);
	  		//done sort
	}, 10, i);
*/


function insertionSort(arr) {
	let i = 0;
	let len = arr.length;
	var timerId = setInterval(function() {
		mark(i, "red");
		let item = arr[i];
		{//cycle's body start
			if(arr[i] > arr[i-1])
			{
	  			clearInterval(timerI);


				var timerJ = setInterval(function() {
						mark(i, "red");
						let item = arr[i];
						{//cycle's body start
							if(arr[i] > arr[i-1])
							{
					  			clearInterval(timerJ);
					  			
							}
						}//cycle's body end
						i++;
					  	if(i >= len){
					  		clearInterval(timerJ);
					  		
					  	}
					}, 10, i);

			}
		}//cycle's body end
		i++;
	  	if(i >= len)
	  		clearInterval(timerI);
	}, 10, i);
}

function bubleSort(arr) {

	let i = 0;
	let len = arr.length;
	var timerId = setInterval(function() {
		mark(i, "red");
		let item = arr[i];
		{//cycle's body
			if(arr[i] < arr[i-1])
			{
				swap(arr, i, i-1);
				i = 0;
			}
		}
		
		i++;
	  	if(i >= len) {
	  		clearInterval(timerId);
	  		//done sort
	  	}
	}, 10, i);
}

function stopAll() {
	window.location.reload();
}


function swap (arr, ind1, ind2)
{
	/*вместо того чтобы обновлять на экране весь массив обнови только 2 свапнутых элемента*/
	let x = arr[ind1];
	arr[ind1] = arr[ind2]
	arr[ind2] = x;
	showArr(arr);
}

function mark (id, color, delay = 10) {
	setTimeout(function() {
		$("#idElem"+id).css("background-color", color);
	}, 0);
	setTimeout(function() {
		$("#idElem"+id).css("background-color", "white");
	}, delay);
	
}

function showArr (arr) {
	$('#display').html('<div class="elem" id="maxHeightOfElems"></div>');
	let max = Array.max(arr);
	let k = 100 / max;
	arr.forEach(function(item, i, arr) { 
		$('#display').append('<div class="elem" id="idElem'+i+'" style="height: '+item*k * 5+'px" title="'+i+': '+item+'"></div>');
	});
}

Array.max = function( array ){
    return Math.max.apply( Math, array );
};

function rand(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}