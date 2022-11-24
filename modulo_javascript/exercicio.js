const a = 5
const b = 9

console.log(a + b)

const valorA = 9
const valorB = 19
const valorC = 11

if(valorA > valorB) {
    console.log("Valor A é maior") 
}
else{
    console.log("Valor B é maior") 
}

if(valorA > valorB && valorA > valorC){
    console.log("O valor A é o maior")
}
else if(valorB > valorA && valorB > valorC){
    console.log("O valor B é o maior")
}
else{
    console.log("O valor C é o maior")
}

let valor = 1

if(valor > 0){
    console.log("Positive")
}
else if(valor < 0){
    console.log("Negative")
}
else{
    console.log("Zero")
}

let angulo1 = 10;
let angulo2 = 90;
let angulo3 = 42;
let somaAngulo = angulo1 + angulo2 + angulo3;

if(somaAngulo === 180){
    console.log('true');
}
else if(somaAngulo < 180){
    console.log('False');
}
else if(angulo1 <= 0 || angulo2 <= 0 || angulo3 <= 0 || !angulo1 || !angulo2 || !angulo3){
    console.log('Ângulo Invalido');
}

let chess = '?';
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

let porcentagem = 11;
let nota = '';
    if(porcentagem >= 90){
        nota = 'A';
    }
    else if(porcentagem >= 80 && porcentagem < 90){
        nota = 'B';
    }
    else if(porcentagem >= 70 && porcentagem < 80){
        nota = 'C';
    }
    else if(porcentagem >= 60 && porcentagem < 70){
        nota = 'D';
    }
    else if(porcentagem >= 50 && porcentagem < 60){
        nota = 'E';
    }
    else if(porcentagem <= 50 && porcentagem >= 0){
        nota = 'F';
    }
    else if(porcentagem >= 100 || porcentagem < 0){
        nota = 'Maior que 100 ou menor que 100 nota ínvalida';
    }
    console.log(nota)

const numeroA = 19;
const numeroB = 42;
const numeroC = 12;
    if(numeroA % 2 === 0|| numeroB % 2 === 0 || numeroC % 2 === 0){
        console.log('True')
    }
    else{
        console.log('False')
    }
    
    if(numeroA % 2 === 1|| numeroB % 2 === 1 || numeroC % 2 === 1){
        console.log('True')
    }
    else{
        console.log('False')
    }

const valorDeCompra = 14;
const valorDeVenda = 19;
const imposto = 0.2;
let custoDoProduto = 14 * imposto;
let lucro
if(valorDeCompra <= 0 || valorDeVenda <= 0){
    console.log('Você precisa colocar um valor valido')
}
else{
    lucro = valorDeVenda - custoDoProduto
    console.log(lucro)
}

let desconto = '?';
let salarioBruto = 3000;
let descontoINSS
let descontoIR
let salarioINSS
let salarioLiquido

if(salarioBruto <= 1556.94){
    descontoINSS = salarioBruto * 0.08;
    salarioINSS = salarioBruto - descontoINSS;
}
else if(salarioBruto > 1556.95 && salarioBruto < 2594.92){
    descontoINSS = salarioBruto * 0.09;
    salarioINSS = salarioBruto - descontoINSS;
}
else if(salarioBruto > 2594.93 && salarioBruto < 5189.82){
    descontoINSS = salarioBruto * 0.11;
    salarioINSS = salarioBruto - descontoINSS;
}
else if(salarioBruto >= 5189.82){
    descontoINSS = salarioBruto - 570.88;
    salarioINSS = salarioBruto - descontoINSS;
}
if(salarioINSS <= 1903.98){
    salarioLiquido = salarioINSS;
}
else if(salarioINSS > 1903.98 && salarioINSS <= 2826.65){
    descontoIR = (salarioINSS * 0.075) - 142.80;
    salarioLiquido = salarioINSS - descontoIR;
}
else if(salarioINSS >= 2826.66 && salarioINSS <= 3751.05){
    descontoIR = (salarioINSS * 0.15) - 354.80;
    salarioLiquido = salarioINSS - descontoIR;
}
else if(salarioINSS >= 3751.06 && salarioINSS <= 4664.68){
    descontoIR = (salarioINSS * 0.225) - 636.13;
    salarioLiquido = salarioINSS - descontoIR;
}
else if(salarioINSS > 4664.68){
    descontoIR = (salarioINSS * 0.275) - 869.36;
    salarioLiquido = salarioINSS - descontoIR;
}


console.log(salarioLiquido.toFixed(2))


