var num = parseInt(prompt('digite um numero: '))
var num2 = parseInt(prompt('digite outro numero: '))
var num3 = parseInt(prompt('digite outro numero: '))

if ((num > num2) && (num > num3 )){
  alert('o numero 1 é maior')
}else if((num2 > num)&&(num2 > num3)){
  alert('o numero 2 é maior')
}else{
  alert('o numero 3 é maior')
}
if ((num < num2) && (num < num3 )){
  alert('o numero 1 é menor')
}else if((num2 < num)&&(num2 < num3)){
  alert('o numero 2 é menor')
}else{
  alert('o numero 3 é menor')
}
