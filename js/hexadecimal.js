/*Hexadecimal

Writes a function that convert a hexadecimal color, "blue" for example 
"#0000FF" in its RGB representation rgb(0,0,255)". Give the function the 
name getRGB() and test it with this code */

function hexadecimal(a){
 var r = parseInt(a.slice(1,3),16)
 var g = parseInt(a.slice(3,5),16)
 var b = parseInt(a.slice(5),16)
 return 'rgb' + '(' + r +','+ g +',' + b +')'
}
hexadecimal("#0000FF")