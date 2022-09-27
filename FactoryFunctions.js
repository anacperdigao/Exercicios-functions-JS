//São funções que retornam objetos. 

function criaPessoa(nome, sobrenome, a, p) {
    return {
      nome: nome, // quando a chave é igual ao valor, pode colocar só "nome,"
      sobrenome: sobrenome,
  
      // Getter - é um método pq é um função dentro de um objeto
      get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`; // o this aqui se refere a "criaPessoa", se substituir, dá certo
      },
  
      // Setter
      set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
      },
  
      fala(assunto = 'falando sobre NADA') {
        return `${this.nome} está ${assunto}.`;
      },
  
      altura: a,
      peso: p,
  
      // Getter
      get imc() {
        const indice = this.peso / (this.altura ** 2);
        return indice.toFixed(2);
      }
    };
  }
  
  const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
  
  console.log(p1);
  console.log(p1.imc);
  console.log(p1.nomeCompleto);
  console.log(p1.fala());


  