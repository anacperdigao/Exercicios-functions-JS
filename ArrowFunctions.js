// Variedades de arrow function

// 1- Sem a palavra RETURN mas retorna, precisa tirar os colchetes
const soma = (valor1, valor2) => valor1 + valor2;

console.log(soma(5, 7))


// 2- Sem parâmetro usando RETURN
const community = () => {
    return 'CollabCode'
};

console.log(community())


// 3- Sem parâmetro e sem RETURN
const community2 = () => 'Discord Code';

console.log(community2())


// 4- Só com um parâmetro com RETURN
const dobro = (valor) => {
    return valor * 2;
}

console.log(dobro(8));


// 5- Só com um parâmetro com RETURN e com parenteses inicial
const triplo = (valor) => valor * 3;

console.log(triplo(8));


// 6- Só com um parâmetro com RETURN e sem parentes inicial
const quadruplo = valor => valor * 4;

console.log(quadruplo(8));


// 7- Caso que as chaves se confudem quando voce utiliza um objeto JSON
// Caso original:
const getPerson = () => {
    return {name: 'Ana'}
};

console.log(getPerson());


// Caso que dá problema retirando a palavra return, aí substitui as chaves da função por parenteses (a chave do objeto continua):
const getPerson2 = () => ({name: 'Julio'});

console.log(getPerson2());

