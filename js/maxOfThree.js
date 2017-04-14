/*maxOfThree() function

Define a function maxOfThree() 
that takes three numbers as arguments and returns the largest of them.t*/
function max(a, b, c){
	
	var strA= " " + a
	var strB= " " + b
	var strC= " " + c
	var numA = strA.length;
	var numB = strB.length;
	var numC = strC.length;
	if (numA>numB && numA>numC){
		return a;
	}else if(numB>numA && numB>numC){
		return b;
	}else if(numC>numA && numC>numA){
		return c;
	}
}
max(10, 200, 0.90000000);

// way 2
function maxOfThree(a, b, c){
	return Math.max(a,b,c)
}
