// let fora = 30;
// function imprimeIdade() {
//     for (let idade = 30; idade <= 40; idade += 1) {
//       fora += 1
//       console.log('Idade dentro do for:', idade)
//     }
//     return console.log('Idade fora do for:', fora) // retire essa linha ao implementar o tipo de variável correta.
//   }
//   imprimeIdade()


  // Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
//   const pessoa = {
//     nome: 'Henri',
//     idade: 20
//   }
//   pessoa.nome = 'Luna'
//   pessoa.idade = 19
//  // Altere essa estrutura para corrigir o erro.
//   console.log('Nome:', pessoa.nome);
//   console.log('Idade:', pessoa.idade);

// let favoriteFood = 'Lasanha';
// favoriteFood = 'Hamburguer';
// console.log(favoriteFood);

// const name = 'Adriana';
// const lastName = 'Soares';
// console.log(`Olá, ${name} ${lastName}!`);
// function soma(a,b) {
//   let resultado = a + b;
//   return resultado;
// }
// let a = 3;
// let b = 5;
// console.log(`O resultado da soma de a + b é: ${soma(a,b)}`);

//   console.log((() => Math.random())());
let nome = 'Ivan';

  console.log((nome => `Olá, ${nome}!`)(nome))