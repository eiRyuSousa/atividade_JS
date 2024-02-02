var idade = parseInt(prompt('digite sua idade: '))

if (idade <= 16){
  alert("Você ainda não tem idade para votar")
}else if ((idade >= 16)&&(idade <=17)){
  alert("Seu voto é opcional")
}else if (idade >= 18){
  alert( "Você é elegível para votar")
}else if(idade==70){
  alert('Seu voto é opcional devido à idade avançada')
}
