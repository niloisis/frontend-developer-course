// Objeto 

// 1. Crie um objeto chamado "pessoa" com as propriedades "nome", "idade" e "endereço" e atribua valores a elas. 

var pessoa = {
    nome: "Bob",
    idade: 19,
    endereco: "Rua dos Bobos, 0"
}

// 2. Acesse o valor da propriedade "nome" do objeto "pessoa". 

console.log(pessoa.nome)

// 3. Adicione uma nova propriedade chamada "profissao" ao objeto pessoa e atribua um valor a ela. 4. Atualize o valor da propriedade "idade" do objeto pessoa para um novo valor. 

pessoa['profissao'] = "Cantor"

// 5. Crie outro objeto chamado "animal" com as propriedades "nome", "especie" e "cor" e atribua valores a elas. 

var animal = {
    nome: 'Xip',
    especie: 'Ave',
    cor: 'Preto'
}

// 6. Crie um objeto chamado "livro" com as propriedades "titulo", "autor" e "ano" e atribua valores a elas. 

var livro = {
    titulo: "A Escuridão Escrita",
    autor: "H. R. Oliveira",
    ano: 2016
}

// 7. Acesse o valor da propriedade "autor" do objeto livro. 

console.log(livro.autor)

// 8. Atualize o valor da propriedade "ano" do objeto livro para um novo valor. 

livro['ano'] = 2017
console.log(livro.ano)

// 9. Exclua a propriedade "titulo" do objeto utilizando o operador "delete".

delete(livro.titulo)
console.log(livro)

// 10. Crie um objeto chamado "carro" com as propriedades "marca", "modelo" e "ano" e atribua valores a elas. Em seguida, exiba todas as propriedades do objeto no console. 

var carro = {
    marca: "Renault",
    modelo: "Kwid",
    ano: "2020"
}

// 11. Atualize o valor da propriedade "modelo" para "undefined" do objeto "carro" e exiba todas as propriedades do objeto no console. 

carro['modelo'] = undefined
console.log(carro)
