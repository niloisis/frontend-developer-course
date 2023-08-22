// 1. Escreva um programa que leia um número inteiro e verifique se ele é positivo, negativo ou igual a zero.

let number = parseInt(prompt('Digite um número'));

if (number > 0) {
    console.log(`O número ${number} é positivo.`);
} else if (number < 0) {
    console.log(`O número ${number} é negativo`);
} else {
    console.log(`O número ${number} é igual a zero.`);
}

// 2. Crie um programa que receba a idade de uma pessoa e exiba se ela é maior de idade ou menor de idade.

let idade = parseInt(prompt('idade'));

if (idade => 18) {
    console.log(`Você é maior de idade.`);
} else {
    console.log(`Você é menor de idade`);
}

// 3. Desenvolva um programa que leia dois números inteiros e mostre qual deles é o maior, ou se são iguais.

let numero1 = parseInt(prompt('Numero 1'));
let numero2 = parseInt(prompt('Numero 2'));

if (numero1 > numero2) {
    console.log(`${numero1} é maior que ${numero2}`);
} else if (numero1 < numero2) {
    console.log(`${numero1} é menor que ${numero2}`);
} else {
    console.log(`${numero1} é igual à ${numero2}`);
}

// 4. Faça um programa que verifique se um número é par ou ímpar.

let numero = parseInt(prompt('Número'));

if (numero % 2 === 0) {
    console.log(`O número ${numero} é par`);
} else {
    console.log(`O número ${numero} é impar`);
}

// 5. Elabore um programa que leia três notas de um aluno e calcule a média. Em seguida, exiba se o aluno está aprovado (média maior ou igual a 7) ou reprovado.

let nota1 = parseInt(prompt('Nota 1'));
let nota2 = parseInt(prompt('Nota 2'));
let nota3 = parseInt(prompt('Nota 3'));

const media = (nota1 + nota2 + nota3)/3;

if (media => 7) {
    console.log(`O aluno foi aprovado com média ${media.toFixed(2)}`);
} else {
    console.log(`O aluno foi reprovado com média ${media.toFixed(2)}`);
}

// 6. Crie um programa que receba o nome de duas pessoas e exiba qual delas possui o maior número de caracteres em seu nome.

let person1 = prompt('Nome da primeira pessoa:');
let person2 = prompt('Nome da segunda pessoa:');

if (person1.length > person2.length) {
    console.log(`${person1} tem o maior nome.`)
} else if (person1.length < person2.length) {
    console.log(`${person2} tem o maior nome.`)
} else {
    console.log(`${person1} tem o nome de tamanho igual ao de ${person2}`);
}

// 7. Desenvolva um programa que leia um caractere e verifique se ele é uma vogal ou uma consoante.

let char = prompt('Digite um caractere');

if ((char == 'a') || (char == 'e') || (char == 'i') || (char == 'o') || (char == 'u')) {
    console.log(`"${char}" é vogal`);
} else {
    console.log(`"${char}" é consoante`);
}

// 8. Faça um programa que receba três números e os imprima em ordem crescente.

let num1 = parseInt(prompt('Number 1'));
let num2 = parseInt(prompt('Number 2'));
let num3 = parseInt(prompt('Number 3'));

if ((num1 > num2) && (num1 > num3)) {
    if (num2 > num3) {
        console.log(`${num3}, ${num2}, ${num1}`);
    } else {
        console.log(`${num3}, ${num3}, ${num1}`);
    }
} else if ((num2 > num1) && (num2 > num3)) {
    if (num1 > num3) {
        console.log(`${num3}, ${num1}, ${num2}`);
    } else {
        console.log(`${num1}, ${num3}, ${num2}`);
    }
} else if ((num3 > num1) && (num3 > num2)) {
    if (num1 > num2) {
        console.log(`${num2}, ${num1}, ${num3}`);
    } else {
        console.log(`${num1}, ${num2}, ${num3}`);
    }
}

// 9. Elabore um programa que calcule o IMC (Índice de Massa Corporal) de uma pessoa, dado o peso e a altura. Em seguida, exiba se a pessoa está abaixo do peso, com peso normal, com sobrepeso, obesa ou muito obesa.

let peso = parseFloat(prompt('Peso:'));
let altura = parseFloat(prompt('Altura:'));

const imc = peso / (altura*altura);

if (imc < 18.5) {
    console.log(`Abaixo do Peso.`)
} else if (18,5 <= imc && imc <= 24.9) {
    console.log(`Peso normal`);
} else if (24,9 < imc && imc < 30) {
    console.log(`Sobrepeso`);
} else {
    console.log(`Obesidade`);
}

// 10. Escreva um programa que receba um número de mês (1 a 12) e exiba o nome do mês correspondente.

let mes = parseInt(prompt('Digite o numero do mes'));

if (mes == 1) {
    console.log('Janeiro')
} else if (mes == 2) {
    console.log('Feveiro')
} else if (mes == 3) {
    console.log('Março')
} else if (mes == 4) {
    console.log('Abril')
} else if (mes == 5) {
    console.log('Maio')
} else if (mes == 6) {
    console.log('Junho')
} else if (mes == 7) {
    console.log('Julho')
} else if (mes == 8) {
    console.log('Agosto')
} else if (mes == 9) {
    console.log('Setembro')
} else if (mes == 10) {
    console.log('Outubro')
} else if (mes == 11) {
    console.log('Novembro')
} else if (mes == 12) {
    console.log('Dezembro')
} else {
    console.log('Não existe um mês correspondente a esse número.');
}

// 11. Desenvolva um programa que leia o salário de um funcionário e calcule o valor do seu aumento. Para salários superiores a R$ 1.500,00, o aumento deve ser de 10%. Caso contrário, o aumento é de 15%.

let salario = parseFloat(prompt("Digite seu salário"));
if (salario > 1500.0) {
    console.log("Seu novo salário equivale a R$", (salario*1.1).toFixed(2))
} else {
    console.log("Seu novo salário equivale a R$", (salario*1.15).toFixed(2))
}

// 12. Receba um número inteiro do usuário e verifique se ele é divisível por 3 e por 5 ao mesmo tempo, exibindo uma mensagem apropriada.

let inteiro = parseInt(prompt("numero inteiro"));
if (inteiro % 3 === 0 && inteiro % 5 === 0){
    console.log(`O número ${inteiro} é divisível por 3 e por 5.`)
} else {
    console.log(`O número ${inteiro} não é divisível por 3 e por 5 ao mesmo tempo.`)
}

// 13. Peça ao usuário que insira o dia da semana (por extenso) e, em seguida, exiba uma mensagem informando se é um dia útil ou um fim de semana.

let dia = prompt("Diga o dia da semana (sem o - feira)");
if (dia == 'sábado' || dia == 'domingo') {
    console.log("O dia é um fim de semana")
} else {
    console.log("O dia é útil")
}

// 14. Elabore um programa que leia um número inteiro de 1 a 5 e exiba a mensagem "Muito bom", "Bom", "Regular", "Insuficiente" ou "Muito insuficiente", de acordo com o valor lido, utilizando switch/case.

let numInteiro = parseInt(prompt("Digite um número de 1 a 5"));

switch (numInteiro) {
    case 1:
        console.log("Muito insuficiente");
        break;
    case 2:
        console.log("Insuficiente");
        break;
    case 3:
        console.log("Regular");
        break;
    case 4:
        console.log("Bom");
        break;
    case 5:
        console.log("Muito bom");
        break;
    default:
        console.log("Número inválido.");
}

// 15. Peça ao usuário que digite um número entre 1 e 7 e exiba o dia da semana correspondente (1 - Domingo, 2 - Segunda-feira, etc.).

let diaSemana = parseInt(prompt("Digite um número de 1 a 7 (dia da semana)"));
switch (diaSemana) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break
    case 4:
        console.log("Quarta");
        break;
    case 5: 
        console.log("Quinta");
        break;
    case 6:
        console.log("Sexta");
        break;
    case 7: 
        console.log("Sábado");
        break;
    default:
        console.log("Número Inválido.")
}

// 16. Receba um número decimal do usuário e arredonde-o para o inteiro mais próximo usando a estrutura de controle try/catch para tratar exceções.

try {
    const numDecimal = parseFloat(prompt("Digite um número decimal:"));
    if (isNaN(numDecimal)) {
        throw new Error("Entrada inválida. Digite um número.");
    }
    console.log(`O número inteiro mais próximo de ${numDecimal} é ${Math.round(numDecimal)}`);
}   catch (error) {    
    console.error("Ocorreu um erro:", error.message);   
}

// 17. Peça ao usuário que insira a sua idade e verifique se ele é um bebê (0 a 1 ano), criança (1 a 12 anos), adolescente (13 a 18 anos) ou adulto (mais de 18 anos).

const age = parseInt(prompt("Qual a sua idade?"));
if (age < 1) {
    console.log("Bebê");
} else if (age >= 1 && age < 12)  {
    console.log("Criança");
} else if (age >= 12 && age < 18) {
    console.log("Adolescente");
} else {
    console.log("Adulto");
}

// 18. Peça ao usuário que insira o seu estado civil e, usando a estrutura switch/case, exiba uma mensagem informando se é solteiro, casado, divorciado ou viúvo.

const estadoCivil = prompt("Informe o seu estado civil:").toLowerCase();
switch (estadoCivil) {
  case "solteiro":
    console.log("Você é solteiro.");
    break;
  case "casado":
    console.log("Você é casado.");
    break;
  case "divorciado":
    console.log("Você é divorciado.");
    break;
  case "viúvo":
    console.log("Você é viúvo.");
    break;
  default:
    console.log("Estado civil não reconhecido.");
}

// 19. Solicite ao usuário dois números inteiros e, usando a estrutura switch/case, exiba o resultado da operação escolhida pelo usuário (1 - soma, 2 - subtração, 3 - multiplicação, 4 - divisão).

const number1 = parseInt(prompt("Digite o primeiro número"));
const number2 = parseInt(prompt("Digite o segundo número"));
const operacao = parseInt(prompt(`Escolha a operação: 1 - soma, 2 - subtração, 3 - multiplicação, 4 - divisão`));

let calculo; 

switch (operacao) {
    case 1: 
        calculo = number1 + number2;
        console.log(`Soma: ${calculo}`);
        break;
    case 2: 
        calculo = number1 - number2;
        console.log(`Subtração: ${calculo}`);
        break;
    case 3: 
        calculo = number1 * number2;
        console.log(`Multiplicação: ${calculo}`);
        break;
    case 4:
        if (numero2 !== 0) {
            calculo = number1 / number2;
            console.log(`Divisão: ${calculo}`);
          } else {
            console.log("Operação Inválida");
          }
        break;
    default:
        console.log("Número de operação inválido.")
}

// 20. Desenvolva um programa que leia o nome e a idade de uma pessoa. Utilize o bloco try/catch para garantir que a idade digitada seja um valor inteiro válido.

const name = prompt("Informe seu nome:");
try {
    const idade = parseInt(prompt("Informe sua idade:"));
    if (isNaN(idade)) {
        throw new Error("Entrada inválida. Digite um número.");
    } else {
        console.log("Obrigado por informar!");
    }
} catch (error) {
    console.log("Ocorreu um erro:", error.message)
}

// 21. Crie um programa que leia um valor em metros e o converta para centímetros, milímetros e quilômetros. Utilize o bloco try/catch para tratar possíveis exceções durante os cálculos.

let metros = parseFloat(prompt("Digite o valor em metros:"));
const centimetros = metros * 100;
const milimetros = metros * 1000;
const quilometros = metros / 1000;

try {
    if (isNaN(metros)) {
        throw new Error("Valor inválido. Digite um número.")
    } else {
        console.log("Centímetros: ", centimetros, " cm");
        console.log("Milímetros: ", milimetros, " mm");
        console.log("Quilômetros: ", quilometros, " km");
    }
} catch (error) {
    console.log("Ocorreu um erro:", error.message)
}