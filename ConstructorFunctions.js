// Faz a mesma coisa que a função fábrica que criam novos objetos, 
// mas função fábrica é uma função normal que a gente faz ela retornar um objeto. 
// Na função construtora ela já faz automaticamente, a gente só precisa criar ela certa.
// A função construtora começa seu nome com letra maiúscula e o JS já entende que ela vai criar objetos. 
// Depois na hora de chamar a função eu preciso adicionar a palavra NEW. 
// A palavra NEW tira a necessidade do return.

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.nomeCompleto = () => {
        return `${nome} ${sobrenome}`
    };

}

const pessoa1 = new Pessoa('Ana Carolina', 'Perdigão');

console.log(pessoa1)
console.log(pessoa1.nome)
console.log(pessoa1.nomeCompleto())



