//Uma função callback é uma função passada a outra função como argumento,
// que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.

function greeting(name) {
    console.log('Olá, ' + name + '!');
  }
  

function processUserInput(callback) {
    var name = 'Ana Carolina';
    callback(name);
}


processUserInput(greeting);
  