/* 
1. Descreva para que serve o comando "for".

    Serve para criar estruturas de repetição, ou seja, permite que você execute um bloco de código tantas vezes quantas necessárias de acordo com uma condição definida.

2. Como o comando "for" define o início de uma repetição?

    A inicialização é usada para configurar variáveis. (ex: for (let i = 0...) {})  

3. Como o comando "for" determina o fim da execução?

    A condição é lida antes de cada iteração (ex: i < 10) e, se for verdadeira, o bloco de código dentro do for é executado, mas caso a condição definida no bloco 'for' seja lida como falsa o loop é interrompido. 

4. Como ocorre a alteração do valor em cada repetição dentro da estrutura de repetição "for"?

    Geralmente é utilizado um contador (ex: i++ ou i--) que altera a variável de controle de loop definida na incialização. Sua atualização ocorre após cada iteração.

*/

// 5. Implemente o código do slide de número 18.

for (let i = 0; i < 10; i++) {
    console.log("Testando uma frase!");
}

// 6. Implemente o código do slide de número 26.

for (let i = 0; i < 10; i++) {
    console.log(i);
}

// 7. Implemente o código do slide de número 36.

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }
    console.log(i)
}

// 8. Implemente o código do slide de número 38.

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i)
}

// 9. Implemente o código do slide de número 44.

let nomes = ['Pedro', 'Isis', 'Jorge', 'Pooh', 'Xip'];

for (let n of nomes){
    console.log(n)
}

// 10. Faça um programa que exiba os números de 1 a 10 em ordem crescente.

for (let i = 1; i < 11; i++){
    console.log(i)
}

// 11. Crie um programa que exiba os números de 10 a 1 em ordem decrescente.

for (let i = 10; i > 0; i--){
    console.log(i)
}

// 12. Elabore um programa que calcule a soma dos números de 1 a 100.

let sum = 0;

for (let i = 1; i < 101; i++) {
    sum += i;
}

console.log(sum)
    
// 13. Desenvolva um programa que exiba todos os números pares de 1 a 50.

let par = [];

for (let i = 1; i < 51; i++){
    if (i % 2 === 0) {
        par.push(i);
    }
}

console.log(par)

// 14. Faça um programa que calcule o produto dos números de 1 a 5.

let produto = 1;
for (let i = 1; i <= 5; i++){
    produto *= i;
}
console.log(produto)

// 15. Crie um programa que exiba a tabuada do 7.

for (let i = 1; i <= 10; i++){
    console.log(`7 x ${i} = ${i*7}`);
}

// 16. Elabore um programa que calcule a média de 5 notas digitadas pelo usuário.

let soma = 0;

for (let i = 1; i <= 5; i++){
    let nota = parseFloat(prompt(`Nota ${i}`));
    soma += nota;
}

let media = soma / 5;
console.log(media)

// 17. Desenvolva um programa que exiba todos os múltiplos de 3 no intervalo de 1 a 50.

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

// 18. Crie um programa que leia 10 números do usuário e exiba o maior e o menor valor digitado.

let menor = 0;
let maior = 0;

for (let i = 0; i < 10; i++) {

    let numero = parseInt(prompt("Digite um número"));

    if (numero > maior) {
        maior = numero;
    } else if (numero < menor) {
        menor = numero;
    }
}

console.log(`Maior número: ${maior}`);
console.log(`Menor número: ${menor}`);

// 19. Faça um programa que exiba os números ímpares de 1 a 100.

let impares = [];

for (let i = 1; i <= 100; i++){
    if (i % 2 != 0) {
        impares.push(i);
    }
}

console.log(impares);

// 20. Crie um programa que leia 5 notas de alunos e exiba quantos deles foram aprovados (nota maior ou igual a 7).

for (let i = 1; i <= 5; i++){
    let nota = parseFloat(prompt(`Nota do Aluno ${i}`));
    if (nota >= 7){
        console.log(`Aluno ${i} aprovado.`)
    } else {
        console.log(`Aluno ${i} reprovado.`)
    }
}

// 21. Faça um programa que exiba a soma dos dígitos de um número inteiro fornecido pelo usuário.

let numDigitos = parseInt(prompt(`Digite um número inteiro`));
let sumDigitos = 0;

for (let i = 1; i <= numDigitos; i++){
    sumDigitos += i;
}

console.log(sumDigitos);

// 22. Elabore um programa que leia um número inteiro e exiba todos os seus divisores.

let numero = parseInt(prompt("Digite um número inteiro:"));
let divisores = [];

for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
        divisores.push(i);
    }
}

console.log(`Divisores de ${numero}: ${divisores}`);

// 23. Desenvolva um programa que calcule a média de altura de 5 pessoas.

let somaAltura = 0;

for (let i = 1; i <= 5; i++){
    let altura = parseFloat(prompt(`Altura ${i}`));
    somaAltura += altura;
}

let mediaAltura = soma / 5;
console.log(mediaAltura)

// 24. Faça um programa que exiba os números de 1 a 100, substituindo os múltiplos de 3 pela palavra "Fizz" e os múltiplos de 5 pela palavra "Buzz". Para os números que são múltiplos de ambos, utilize a palavra "FizzBuzz". 

let numeros = [];

for (let i = 1; i <= 100; i++) {
    numeros.push(i);
    if (i % 3 === 0) {
        if (i % 5 === 0) {
            numeros[i] = 'FizzBuzz' 
        } else {
            numeros[i] = 'Fizz';
        }
    } else if (i % 5 === 0) {
        numeros[i] = 'Buzz'
    }
}

console.log(numeros)

// 25. Elabore um programa que leia um número inteiro e exiba a soma dos dígitos pares desse número.

let numPares = parseInt(prompt(`Digite um número inteiro`));
let somaPares = 0;

for (let i = 1; i <= numPares; i++){
    if (i % 2 === 0 ) {
        somaPares += i;
    }
}

console.log(somaPares);

// 26. Faça um programa que leia um número inteiro e exiba o número invertido. Por exemplo, se o número lido for 123, o programa deve exibir 321.

let numeroInteiro = prompt("Digite um número para ser invertido");
let numeroInvertido = '';

for (let i = numeroInteiro.length - 1; i >= 0; i--) {
    numeroInvertido += numeroInteiro[i];
}

console.log("Número invertido:", numeroInvertido);