let circle = '<svg xmlns="http://www.w3.org/2000/svg" style="width: 50px;height: auto;" viewBox="0 0 512 512" fill=red><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>';

let cross = '<svg xmlns="http://www.w3.org/2000/svg" style="width: 50px;height: auto;" fill=blue viewBox="0 0 384 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>';

let mark = circle;

let boxList = document.getElementsByClassName('game-box');

let matrix = [[0,0,0],[0,0,0],[0,0,0]];
let reversMatrix = [[0,0,0],[0,0,0],[0,0,0]];
let diagonal = [0,0,0];
let reversDiagonal = [0,0,0];
let x,y=0;
let counter = 0;
let wizzard = false;

function startGame(player)
{
	if(player == 1) wizzard = true;

	initialGame.classList.add("hidden");
}

Array.from(boxList).forEach(function(element){
	element.addEventListener('click',function(){
		if(!this.classList.contains('game-box__disabled'))
		{
			counter++
			this.innerHTML = mark;
			this.classList.add('game-box__disabled');
			x = this.dataset.row;
			y = this.dataset.column;

			addBoxValue(x,y)
			wizardGame();
			
			mark = (mark==circle)?cross:circle;
		}
	})
});

function arraySum(arr)
{
	return arr.reduce((a,c)=>a+c,0)
}

function wizardMark(a,b)
{
	box = document.querySelector('[data-row="'+a+'"][data-column="'+b+'"]');

	box.innerHTML = mark
	addBoxValue(a,b);
}

function addBoxValue(x,y)
{
	let boxValue = 1;
	if(mark == circle){ boxValue = -1;}
	x = parseInt(x);
	y = parseInt(y);

	matrix[x][y] = boxValue;
	reversMatrix[y][x] = boxValue;
	if(x==y) diagonal[x] = boxValue;
	if(x+y==2) {
		reversDiagonal[x] = boxValue;
	}

	checkGame(x,y);
}

function wizardGame()
{
	if(!wizzard) return true;
	if(!curtain.classList.contains('hidden'))
	{
		return true;
	}
	mark=cross;
	counter++

	let a,b=0;

	if(arraySum(diagonal)==2)
	{
		a = diagonal.indexOf(0);
		b = a;
		wizardMark(a,b)
		return true
	}

	if(arraySum(reversDiagonal)==2)
	{
		a = reversDiagonal.indexOf(0);
		b = Math.abs(2-a);
		wizardMark(a,b)
		return true
	}

	for (var i = 0; i < 3; i++) {
		if(arraySum(matrix[i])==2)
		{
			a = i;
			b = matrix[i].indexOf(0);
			wizardMark(a,b)
			return true
		}

		if(arraySum(reversMatrix[i])==2)
		{
			b = i;
			a = reversMatrix[i].indexOf(0);
			wizardMark(a,b)
			return true
		}
	}

	if(arraySum(diagonal)==-2)
	{
		a = diagonal.indexOf(0);
		b = a;
		wizardMark(a,b)
		return true
	}

	if(arraySum(reversDiagonal)==-2)
	{
		a = reversDiagonal.indexOf(0);
		b = Math.abs(2-a);
		wizardMark(a,b)
		return true
	}

	for (var i = 0; i < 3; i++) {
		if(arraySum(matrix[i])==-2)
		{
			a = i;
			b = matrix[i].indexOf(0);
			wizardMark(a,b)
			return true
		}

		if(arraySum(reversMatrix[i])==-2)
		{
			b = i;
			a = reversMatrix[i].indexOf(0);
			wizardMark(a,b)
			return true
		}
	}

	father: for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 3; j++) {
			if(matrix[i][j]==0)
			{
				box = document.querySelector('[data-row="'+i+'"][data-column="'+j+'"]');

				box.innerHTML = mark
				addBoxValue(i,j);
				break father;
			}else{
				continue;
			}
			
		}
	}

}

function checkGame(x,y)
{
	if(matrix[x].every((e)=>e==matrix[x][0]&&e!=0))
	{
		winner.innerHTML = mark;
		curtain.classList.remove('hidden');

		return true;
	}

	if(reversMatrix[y].every((e)=>e==reversMatrix[y][0]&&e!=0))
	{
		winner.innerHTML = mark;
		curtain.classList.remove('hidden');
		return true;
	}

	if(diagonal.every((e)=>e==diagonal[0]&&e!=0))
	{
		winner.innerHTML = mark;
		curtain.classList.remove('hidden');
		return true;
	}

	if(reversDiagonal.every((e)=>e==reversDiagonal[0]&&e!=0))
	{
		winner.innerHTML = mark;
		curtain.classList.remove('hidden');
		return true;
	}

	if(counter == 9)
	{
		winnerBox.innerHTML = "EMPATE";
		curtain.classList.remove('hidden');
	}
}