/*Multiplications table

Write a function that writes in the console the multiplication table (from 1 to 10)*/

function multiplication(){
	var result = '\n';
	for(var i=1; i<=10; i++){
		for(var j=1; j<=10; j++){
		result += i*j + '\t'; 
	
		}
		result += '\n'	
	}
	console.log(result);
}
multiplication();