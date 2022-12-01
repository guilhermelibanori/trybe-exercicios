// Crie uma variável para armazenar o valor de status do seu motor (lembre-se de armazenar o tipo de variável da forma correta);
// Crie a função ligarDesligar utilizando arrow functions. Ela não receberá nenhum parâmetro;
// Crie a lógica para ligar e desligar o motor (a lógica deverá utilizar uma condicional para ligar e desligar o motor);
// Imprima no terminal “O motor está ligado“ e “O motor está desligado“ (lembre-se de utilizar o template literals nesse momento).
// Bônus (opcional): tente fazer o mesmo exercício utilizando ternary operator.

// let onOrOff = 'off'
// const onOff = () => (onOrOff === 'off' ? onOrOff = 'on' : onOrOff = 'off'
// )
// // console.log((onOff => onOrOff === 'off' ? onOrOff = 'on' : onOrOff === 'off')())
// console.log(`The engine is ${onOff()}`)
// console.log(`The engine is ${onOff()}`)

let pi = 3.14159265359

const circleArea = radius => (pi * radius * radius)

console.log(`Essa é a área do círculo: ${circleArea(5).toFixed(2)}`)