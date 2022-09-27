//É só criar uma função sem nome e na hora de chamar
//chamar apenas com parêteses E PRECISA ENVOLVER ELA TODA NO PARÊNTESES TAMBEM.

// 1- AQUI VOU PROTEGER A FUNÇÃO getPerson e com o parênteses no final

(function () {
    const getPerson = () => ({name: 'Henri', eye: 'blue'});

    console.log(getPerson())
})();


// 2- AQUI VOU PROTEGER A FUNÇÃO getPerson e com o parênteses dentro, antes de fechar ela toda

(function () {
    const getPerson2 = () => ({name: 'Henri', eye: 'blue'});

    console.log(getPerson2())
}());


// 3- Fazendo arrow function duas vezes eu SÓ POSSO USAR O PARÊNTESES NO FINAL

( () => {
    const getPerson3 = () => ({name: 'Henri', eye: 'blue'});

    console.log(getPerson3())
})();