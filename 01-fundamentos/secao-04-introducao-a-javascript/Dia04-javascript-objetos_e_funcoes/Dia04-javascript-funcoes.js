// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
// Exemplo de palíndromo: arara
// verificaPalindrome('arara')
// Retorno esperado: true
// verificaPalindrome('desenvolvimento')
// Retorno esperado: false

// let wordBackwards = ''

// function palindromo(param){
//     for (let index = param.length; index >= 0; index -= 1){
//         wordBackwards += param.charAt(index)
//     }
//     if (wordBackwards === param){
//         return true
//     }
//     else{
//         return false
//     }
// }

// console.log(palindromo('arara'))

// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.


// let array = [2, 3, 6, 7, 10, 1];
// let highestNumber = array[0];

// function higherNumber(number){
//     for (index = 0; index < number.length; index += 1){
//         checkNumber = number[index];
//         if(checkNumber > highestNumber){
//             highestNumber = index;
//         }
//     }
//     return highestNumber
// }
// console.log(higherNumber(array))

// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

// let array = [2, 4, 6, 7, 10, 0, -3];
// let lowestNumber = array[0];

// function lowerNumber(number){
//     for (index = 0; index < number.length; index += 1){
//         checkNumber = number[index];
//         if(checkNumber < lowestNumber){
//             lowestNumber = index;
//         }
//     }
//     return lowestNumber
// }

// console.log(lowerNumber(array))


// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

// let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
// let biggestName = array[0];

// function biggest(param){
//     for (index = 0; index < param.length; index += 1){
//         checkWord = param[index];
//         if(checkWord.length > biggestName.length){
//             biggestName = checkWord;
//         }
//     }
//     return biggestName
// }

// console.log(biggest(array))

// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

// let array = [2, 3, 2, 5, 8, 2, 3];
// let repeats = 0;

// function repeat(param){
//     for (let index = 0; index < param.length; index += 1) {
//         checkNumber = param[index];
//         for (let i = 0; i < param.length; i += 1){
//             checkAgain = param[i]
//             if(checkNumber === checkAgain){
//                 repeats += checkAgain
//                 break;
//             }
//         }
//     }
//     return repeats
// }

// console.log(repeat(array))

// Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

// let sum = 0;

// function sumNaturals(n){
//     for (index = 1; index <= n; index += 1){
//         sum += index
//     }
//     return sum
// }

// console.log(sumNaturals(5))


// Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word.
//  Considere que a string ending sempre será menor que a string word.

function checkEnding(word, ending){
    if (word.endsWith(ending)){
        return true
    }
    else{
        return false
    }
}

console.log(checkEnding('joaofernando', 'fernan'))