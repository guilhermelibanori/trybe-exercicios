// O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// 4! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.
const number = 10;
let factorial = 1;
for(let index = 1; index <= number; index += 1){
    factorial *= index;
}
console.log(factorial)