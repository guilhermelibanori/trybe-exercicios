let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

//   Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: ‘Tio Patinhas’, ‘Christmas on Bear Mountain, Dell’s Four Color Comics #178’, ‘O último MacPatinhas’, ‘Sim’.
//    Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves. Valor esperado no console:
  let infoo = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
  };
info.recorrente = "Sim";
infoo.recorrente = "Sim";
//   Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console.
//    Use a sintaxe meuObjeto['chave'] = valor. Valor esperado no console:
//   Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
//    Use a sintaxe meuObjeto.chave. Valor esperado no console:

console.log(info.recorrente)

// Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
let infoOne = [];
let infoTwo = [];
let together = [];
for (let index in info){
    infoOne.push(info[index])
}

for (let index in infoo){
    infoTwo.push(infoo[index])
}
for (index = 0; index < infoOne.length; index += 1){
    if(index === 3 && infoOne[3] === 'Sim' && infoTwo[3] === 'Sim'){
        together.push('Ambos recorrentes')
    }
    else {
    together.push(infoOne[index] + ' e ' + infoTwo[index])
}
}

console.log(together)

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

//   Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte 
//   formato: “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”.

console.log("O livro favorito de " + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo + ' ')

// Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a essa chave um objeto contendo as seguintes informações:
let obj = {titulo: 'Harry Potter e o Prisioneiro de Azkaban', autor: 'JK Rowling', editora: 'Rocco'}
leitor.livrosFavoritos.push(obj)
let quantity = Math.floor(Math.random() * 1000)


console.log(leitor.nome + ' tem ' + quantity + ' livros favoritos')