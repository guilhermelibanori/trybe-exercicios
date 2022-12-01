// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

// Exemplo de palíndromo: arara

// verificaPalindrome('arara')

// Retorno esperado: true
// verificaPalindrome('desenvolvimento')

// Retorno esperado: false

let wordBackwards = ''

function palindromo(param){
    for (let index = param.length; index >= 0; index -= 1){
        wordBackwards += param.charAt(index)
    }
    if (wordBackwards === param){
        return true
    }
    else{
        return false
    }
}

console.log(palindromo('arara'))
