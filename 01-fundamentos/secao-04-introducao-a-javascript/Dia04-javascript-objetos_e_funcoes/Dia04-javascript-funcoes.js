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

let array = [2, 4, 6, 7, 10, 0, -3];
let lowestNumber = array[0];

function lowerNumber(number){
    for (index = 0; index < number.length; index += 1){
        checkNumber = number[index]
        if(checkNumber < lowestNumber){
            lowestNumber = index
        }
    }
    return lowestNumber
}

console.log(lowerNumber(array))