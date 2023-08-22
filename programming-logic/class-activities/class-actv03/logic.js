// OPERADORES LÓGICOS

// 1. Crie uma estrutura condicional que verifica se dois números são iguais utilizando o operador de igualdade ("==").

console.log("\nVerificar se 2 = 3")

if (2 == 3) {
    console.log(true)
} else {
    console.log(false)
}

// 2. Crie uma estrutura condicional que verifica se dois números são diferentes utilizando o operador de diferença ("!=").

console.log("\nVerificar se 2 != 3")

if (2 != 3) {
    console.log(true)
} else {
    console.log(false)
}

// 3. Crie uma estrutura condicional que verifica se um número é maior que outro utilizando o operador de maior que (">").

console.log("\nVerificar se 2 > 3")

if (2 > 3) {
    console.log(true)
} else {
    console.log(false)
}

// 4. Crie uma estrutura condicional que verifica se um número é menor que outro utilizando o operador de menor que ("<").

console.log("\nVerificar se 2 < 3")

if (2 < 3) {
    console.log(true)
} else {
    console.log(false)
}

// 5. Crie uma estrutura condicional que verifica se um número é maior ou igual a outro utilizando o operador de maior ou igual a (">=").

console.log("\nVerificar se 2 >= 3")

if (2 >= 3) {
    console.log(true)
} else {
    console.log(false)
}

// 6. Crie uma estrutura condicional que verifica se um número é menor ou igual a outro utilizando o operador de menor ou igual a ("<=").

console.log("\nVerificar se 2 <= 3")

if (2 <= 3) {
    console.log(true)
} else {
    console.log(false)
}

// 7. Crie uma estrutura condicional que verifica se duas condições são verdadeiras utilizando o operador lógico AND ("&&").

console.log("\nVerificar se 2 < 3 e 3 > 2")

if (2 < 3 && 3 > 2) {
    console.log(true)
} else {
    console.log(false)
}

// 8. Crie uma estrutura condicional que verifica se pelo menos uma das condições é verdadeira utilizando o operador lógico OR ("||").

console.log("\nVerificar se 2 < ou 3 < 2")

if (2 < 3 || 3 < 2) {
    console.log(true)
} else {
    console.log(false)
}

// 9. Crie uma estrutura condicional que nega uma condição utilizando o operador lógico NOT ("!").

var boolean = true

console.log("\nVerificar se NOT bola é true ou false")
console.log(!boolean)

// 10. Crie uma estrutura condicional que verifica se um número está dentro de um determinado intervalo, utilizando os operadores lógicos AND e os operadores de comparação (">=" e "<=").

var num = 2

console.log("\nVerificar se 0 >= num e num <= 5")

if (num >= 0 && num <= 5) {
    console.log(true)
} else {
    console.log(false)
}

// 11. Crie uma estrutura condicional que verifica se um número está fora de um determinado intervalo, utilizando os operadores lógicos OR e os operadores de comparação ("<" e ">").

console.log("\nVerificar se 0 > num ou num > 5")

if (0 > num || num > 5) {
    console.log(true)
} else {
    console.log(false)
}

// 12. Crie uma estrutura condicional que verifica se um número é positivo, utilizando o operador de maior que (">") e o operador de igualdade ("==") para verificar se o número é maior que zero.

console.log("\nVerificar se 2 é positivo")

if (num == 0) {
    console.log("O número é igual a 0")
} else if (num > 0) {
    console.log("O número é positivo")
} else {
    console.log("O número é negativo")
}

// 13. Crie uma estrutura condicional que verifica se uma string é vazia, utilizando o operador de igualdade ("==") e o operador de tamanho ("length") para verificar se o tamanho da string é igual a zero.

console.log("\nVerificar se a string 'string' é vazia")

var string = "string"
if (string.length == 0) {
    console.log("A string é vazia")
} else {
    console.log("A string não é vazia")
}

// 14. Crie uma estrutura condicional que verifica se uma variável é do tipo booleano, utilizando o operador "typeof" e o operador de igualdade ("==") para verificar se o tipo de dado é igual a "boolean".

console.log("\nVerificar se booleano é do tipo Boolean")

if (typeof boolean == 'boolean') { // typeof gera uma string
    console.log("É booleano")
} else {
    console.log("Não é booleano")
}
