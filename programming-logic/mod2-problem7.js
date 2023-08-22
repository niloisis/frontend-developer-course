function calcularIdade() {
      let nome = prompt("Digite seu nome:");
      let anoNascimento = prompt("Digite seu ano de nascimento (entre 1922 e 2021):");
      
      while (isNaN(anoNascimento) || anoNascimento < 1922 || anoNascimento > 2021) {
        anoNascimento = parseInt(prompt("Erro! Digite novamente seu ano de nascimento (entre 1922 e 2021):"));
      }

      let idade = 2022 - anoNascimento;

      alert(`Olá, ${nome}! Você completa ${idade} anos em 2022.`);
    }

    calcularIdade();