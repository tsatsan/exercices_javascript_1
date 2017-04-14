/*Hexadecimal enhanced

Improves the previous function so besides the conversion also identifies 
some basic colors:

Black: #000000
White: #FFFFFF
Red: #FF0000
Green: #00FF00
Blue: #0000FF
So the result can be (for these cases):

>>> var a = getRGB ('#00FF00'); 
>>> a;
“rgb(0,255,0)   verde”; */

function getRGB(a){
 var r = parseInt(a.slice(1,3),16)
 var g = parseInt(a.slice(3,5),16)
 var b = parseInt(a.slice(5),16)
 switch (a){
 	case "#000000":
 		return 'rgb' + '(' + r +','+ g +',' + b +')' + '\t' + 'black'
 		break;
 	case "#FFFFFF":	
 		return 'rgb' + '(' + r +','+ g +',' + b +')' + '\t' + 'white'
 		break;
 	case "#FF0000":
 		return 'rgb' + '(' + r +','+ g +',' + b +')' + '\t' + 'green'
 		break;
 	case "#00FF00":
 		return 'rgb' + '(' + r +','+ g +',' + b +')' + '\t' + 'blue'
 		break;
 		default:
 		return  'rgb' + '(' + r +','+ g +',' + b +')' + '\t'
 }
}
getRGB("#0000FF")