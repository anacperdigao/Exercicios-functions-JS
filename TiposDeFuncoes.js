// 1 - Declaração de função
function Somar (valor1, valor2) {
    return valor1 + valor2;
}

console.log(Somar(5, 1))


// 2 - Expressão de função
const soma = function (valor1, valor2) {
    return valor1 + valor2;
}

console.log(soma(8, 9))


// 3 - Arrow Function (é sempre uma função anônima)
const dobro = (valor1) => {
    return valor1 * 2;
}

console.log(dobro(8))