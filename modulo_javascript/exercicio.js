// const a = 5
// const b = 9

// console.log(a + b)

// const valorA = 9
// const valorB = 19
// const valorC = 11

// if(valorA > valorB) {
//     console.log("Valor A é maior") 
// }
// else{
//     console.log("Valor B é maior") 
// }

// if(valorA > valorB && valorA > valorC){
//     console.log("O valor A é o maior")
// }
// else if(valorB > valorA && valorB > valorC){
//     console.log("O valor B é o maior")
// }
// else{
//     console.log("O valor C é o maior")
// }

// let valor = 1

// if(valor > 0){
//     console.log("Positive")
// }
// else if(valor < 0){
//     console.log("Negative")
// }
// else{
//     console.log("Zero")
// }

// let angulo1 = 10;
// let angulo2 = 90;
// let angulo3 = 42;
// let somaAngulo = angulo1 + angulo2 + angulo3;

// if(somaAngulo === 180){
//     console.log('true');
// }
// else if(somaAngulo < 180){
//     console.log('False');
// }
// else if(angulo1 <= 0 || angulo2 <= 0 || angulo3 <= 0 || !angulo1 || !angulo2 || !angulo3){
//     console.log('Ângulo Invalido');
// }

let chess = 'BISHOP';
let chesslowercase = chess.toLowerCase();
let movement = '?';
    switch(chesslowercase){
        case 'bishop':
            movement = 'Moves diagonally';
            break;
        case 'pawn':
            movement = 'One Square Straight Ahead';
            break;
        case 'rook':
            movement = 'Its line or row';
            break;
        case 'knight':
            movement = 'Jumps in making the shortest move that is not a straight one';
            break;
        case 'queen':
            movement = 'May move like a Rook or a Bishop';
            break;
        case 'king':
            movement = 'Moves from its square to a neighboring square';
            break;
        default: 
            movement = 'Not a valid piece';
          }

        console.log(movement)