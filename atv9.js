var peso = parseFloat(prompt('informe o seu peso : '))
var altura = parseFloat(prompt('informe sua altura: '))

var imc  = peso / (altura * altura)

if (imc < 18.5){
  alert('Abaixo do peso')
}else if((imc >=18.5)||(imc <24.9)){
  alert('normal')
}else if ((imc >=25) || (imc<=29.9)){
  alert('sobrepeso')
}else if((imc >=30)||(imc<=34.9)){
  alert('obesidade grau 1')
}else if((imc >= 35)||(imc<=39.9)){
  alert('obesidade grau 2')
}else if (imc>=40){
  alert('obesidade grau 3')
}
