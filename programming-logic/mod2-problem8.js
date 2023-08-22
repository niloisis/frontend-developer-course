let candidatoX = 0;
let candidatoY = 0;
let candidatoZ = 0;
let branco = 0;
  
while (true) {
  let voto = prompt("Digite o número correspondente ao voto. Para finalizar a votação, digite 'sair':");

  if (voto === 'sair') {
    break;
  } else {
    let votoNumero = parseInt(voto);
  
    if (isNaN(votoNumero)) {
      alert("Voto inválido! Por favor, vote novamente com um número.");
    } else {
      if (votoNumero > 889) {
        candidatoX++;
      } else if (votoNumero > 847) {
        candidatoY++;
      } else if (votoNumero > 515) {
        candidatoZ++;
      } else {
        branco++;
      }
    }
  }
}

let vencedor;
if (candidatoX > candidatoY && candidatoX > candidatoZ) {
   vencedor = "Candidato_X";
} else if (candidatoY > candidatoX && candidatoY > candidatoZ) {
  vencedor = "Candidato_Y";
} else if (candidatoZ > candidatoX && candidatoZ > candidatoY) {
  vencedor = "Candidato_Z";
} else {
  vencedor = "Empate";
}
  
console.log('Resultado das Eleições: ', vencedor);