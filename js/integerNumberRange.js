/*Integer Numbers Range

Write a function in Javascript that having two integers x1 and x2 returns all the integers between them. 
If x2 es lower than x1 it should return -1 */

function havingIntegers(a, b){
  var result =""
  if (a>b){
  	return -1;
  }
  for (var i=a+1; i<b; i++){
  console.log(i);
	}	
}
havingIntegers(2, 9);