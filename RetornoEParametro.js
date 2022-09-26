// 1- Função sem retorno e sem parâmetro
function cumprimentar () {
    console.log('Oi, pessoal!');
}

cumprimentar();


// 2- Função sem retorno e com parâmetro
function cumprimentaPessoa (pessoa){
    console.log(`Oi, ${pessoa}!`);
}

cumprimentaPessoa('Ana');


// 3- Função com retorno e sem parâmetro
function cumprimentar2 () {
    return 'Oi, pessoal!'
}

function cumprimentarPessoa2 (nome) {
    console.log(`${cumprimentar2()} Meu nome é ${nome}.`);
}

cumprimentarPessoa2('Carol');

// 4- Função com retorno e com parâmetro
function somar (valor1, valor2) {
    return valor1 + valor2;
}

console.log(somar(3, 5));

// 5- Função com mais de um retorno
function somaNumerosPequenos (valor1, valor2) {
    if(valor1 > 10 || valor2 > 10){
        return 'Somente números de 1 a 9.';
    } else {
        return valor1 + valor2;
    }
};

console.log(somaNumerosPequenos(5,9))