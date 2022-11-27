




let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let biggestNumber = 0;
let impar = 0;
let lowestNumber = numbers[0];
for (let index = 0; index < numbers.length; index += 1){
    soma += numbers[index];
    // Calcule e imprima a média aritmética dos valores contidos no array;
    soma = soma / numbers.length;
    checkNumber = numbers[index];
    // Utilizando for, descubra qual o maior valor contido no array e imprima-o;
    if (biggestNumber < checkNumber){
        biggestNumber = checkNumber;
        console.log(biggestNumber)
    }
    // Utilizando for, descubra qual o menor valor contido no array e imprima-o;
        if (numbers[index] < lowestNumber){
            lowestNumber = numbers[index]
            console.log(lowestNumber)
        }
    
// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;
    if(checkNumber % 2 !== 0){
        impar += 1;
    }

}
    if(impar !== 0){
        console.log("Existe " + impar + " Números ímpares");
    }
    else if(impar === 0){
        console.log("Nenhum valor ímpar encontrado");
    }

// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;
if(soma > 20) {
    console.log("Valor maior que 20")
}
else{
    console.log("Valor menor ou igual a 20")
}


// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
let array = [];
let somaa = 0;
for (let i = 1; i <= 25; i += 1){
    checkNumbers = array.push(i);
    // Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.
    divisao = checkNumbers / 2;
    console.log(divisao)
    // Percorra o array imprimindo todos os valores nele contidos com a função console.log();
    console.log(checkNumbers)
    // Some todos os valores contidos no array e imprima o resultado;
    somaa += checkNumbers
    console.log(somaa)
}


