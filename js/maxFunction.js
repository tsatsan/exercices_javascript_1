/*max() function

Define a function max() that takes two numbers as 
arguments and returns the largest of them. Use the if-then-else 
construct available in Javascript.*/
function max(a, b){
	
	var strA= " " + a
	var strB= " " + b
	var numA = strA.length;
	var numB = strB.length;
	if (numA>numB){
		return a;
	}else{
		return b;
	}
}
max(10, 200);
