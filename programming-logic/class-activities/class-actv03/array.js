// ARRAY

// 1. Crie um array vazio chamado "numeros".

var numeros = []
console.log(numeros)

// 2. Adicione os números 1, 2, 3 e 4 ao array "numeros".

var adicionar = numeros.push('1', '2', '3', '4')
console.log(numeros)

// 3. Acesse o valor do segundo elemento do array "numeros".

var segundo = numeros[1]
console.log('Segundo elemento: ', segundo)

// 4. Atualize o valor do terceiro elemento do array "numeros" para 10.

numeros[2] = 10
console.log(numeros)

// 5. Remova o último elemento do array "numeros" utilizando a função ".pop".

numeros.pop()
console.log(numeros)

// 6. Verifique o comprimento do array "numeros".

console.log('Comprimento do Array: ', numeros.length)

// 7. Crie um novo array chamado "frutas" contendo as strings "maçã", "banana" e "laranja".

var frutas = ['maça', 'banana', 'laranja']

// 8. Acesse o valor do primeiro elemento do array frutas.

var primeiro = frutas[0]

// 9. Adicione a string "uva" ao final do array frutas utilizando a função ".push".

numeros.push('uva')

// 10. Crie um objeto chamado "aluno" com as propriedades "nome" e "idade" e atribua valores a elas. Em seguida, crie um array chamado "alunos" e adicione o objeto "aluno" a esse array.

var aluno = {
    nome: 'Bibo',
    idade: 4,
}

var alunos = []
alunos.push(aluno)

console.log(alunos)

// 11. Acesse o valor da propriedade "nome" do primeiro elemento do array "alunos".

var primeiroAluno = alunos[0].nome
console.log(primeiroAluno)

// 12. Adicione mais três objetos do tipo "aluno" ao array "alunos".

alunos.push('Pedro', 'Lola', 'Chico')
console.log(alunos)

// 13. Crie um array chamando "produtos" contendo 10 produtos de supermercado. Em seguida, exiba no terminal apenas os produtos que ficaram em posições pares.

var produtos = ['sabão', 'maionese', 'bolinho ana maria', 'luvas', 'hersheys', 'nuggets', 'salsicha', 'bolo de rolo', 'alho', 'shampoo']

console.log(produtos[1], ',', produtos[3], ',', produtos[5], ',', produtos[7], ',', produtos[9]);
