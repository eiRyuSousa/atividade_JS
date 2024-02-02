var num = parseInt(prompt('digite um numero: '))
var num2 = parseInt(prompt('digite outro numero: '))
var num3 = parseInt(prompt('digite outro numero: '))

media = (num + num2 + num3)/3

if (media<=6){
  alert('reprovado')
}else if(media==7){
  alert('esta na media')
}else if(media>=7){
  alert('aprovado')
}
