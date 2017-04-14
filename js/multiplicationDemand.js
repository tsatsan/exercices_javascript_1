/*Multiplications table on demand

Write a function that writes in the console 
the multiplication table (in one column) of any number passed as parameter */

function multiplicationDemand(a){
		for(var j=1; j<=10; j++){
		var result= a*j;
		console.log(a + " * " + j + " " + " = " + result) 
		}
}
multiplicationDemand(4);