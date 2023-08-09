// Fila (dequeue): remover um elemento do início da fila.

let fila = [3, 7, 9, 1, 0];

function empty() {
    return fila.length === 0;
}

function dequeue() {
    if (empty()) {
        return null;
    }
    return fila.shift();
}

console.log(fila)
dequeue(fila);
dequeue(fila);
dequeue(fila);
dequeue(fila);
dequeue(fila);
console.log(fila)


// Lista (remover/deletion): remove um elemento específico da lista.

let lista = [3, 7, 9, 1, 0];

function remove(element) {
    const indice = lista.indexOf(element);
    if (indice !== -1) {
        lista.splice(indice, 1);
        return true;
    } else {
        return false;
    }
}

console.log(lista)
remove(3)
remove(7)
remove(9)
remove(1)
remove(0)
console.log(lista)

// Pilha (desempilhar/pop): remove o último elemento da pilha

let pilha = [3, 7, 9, 1, 0];

function isempty() {
    return pilha.length === 0;
}

function desempilhar(){
    if (isempty()) {
        return null;
    }
    return pilha.pop();
}

console.log(pilha)
desempilhar(pilha)
desempilhar(pilha)
desempilhar(pilha)
desempilhar(pilha)
desempilhar(pilha)
console.log(pilha)