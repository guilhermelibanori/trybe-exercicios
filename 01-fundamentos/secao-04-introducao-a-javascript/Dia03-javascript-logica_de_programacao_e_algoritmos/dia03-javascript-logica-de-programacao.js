// O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// 4! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.
const number = 10;
let factorial = 1;
for(let index = 1; index <= number; index += 1){
    factorial *= index;
}
console.log(factorial)


// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber';
let wordBackwards = '';

for(let index = word.length; index >= 0; index -= 1){
    wordBackwards += word.charAt(index)
    console.log(wordBackwards)
}

// Utilize a estrutura de repetição for para escrever dois algoritmos:
// um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let menorPalavra = array[0];
let maiorPalavra = array[0];

for(let index = 0; index < array.length; index += 1){
   checkWord = array[index];
  
   if(checkWord.length > maiorPalavra.length){
    maiorPalavra = checkWord
    console.log(maiorPalavra)
   }
   if(checkWord.length < menorPalavra.length){
    menorPalavra = checkWord
    console.log(menorPalavra)
   }
}

// Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo.
// Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.

let totalPrimeNumber = [];
let highestPrimeNumber = 0;
for (let index = 2; index <= 50; index += 1) {
  primeNumber = index;
  for (let i = 2; i <= Math.sqrt(index); i += 1) {
    if (index % i == 0) {
      primeNumber = false;
      break;
    }
  }
  if (primeNumber) {
    totalPrimeNumber.push(primeNumber)
  }
 highestPrimeNumber = totalPrimeNumber[totalPrimeNumber.length - 1];

}

console.log(highestPrimeNumber)


