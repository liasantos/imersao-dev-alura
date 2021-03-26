var primeiroValor = parseInt(prompt("Digite o primeiro valor:")); //transforma em inteiro já na entrada
var segundoValor = parseInt(prompt("Digite o segundo valor:"));
//prompt solicita dados de entrada
var operacao = prompt(
  "Digite 1 para fazer uma divisão, 2 para multiplicação, 3 para soma, 4 para subtração: "
);

if (operacao == 1) {
  var resultado = primeiroValor / segundoValor;
  document.write(
    "<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado + "</h2>"
  );
} else if (operacao == 2) {
  var resultado = primeiroValor * segundoValor;
  document.write(
    "<h2>" + primeiroValor + " x " + segundoValor + " = " + resultado + "</h2>"
  );
} else if (operacao == 3) {
  var resultado = primeiroValor + segundoValor;
  document.write(
    "<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado + "</h2>"
  );
} else if (operacao == 4) {
  var resultado = primeiroValor - segundoValor;
  document.write(
    "<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado + "</h2>"
  );
} else {
  document.write("<h2>Opção inválida</h2>");
}

//Revisão
//escrevendo na tela - document.write
//concatenação (juntar palavras com variáveis) - ("palavra" + variavel)
// == comparação é diferente do = atribuição
// if = se
// else = senão
// else if = senão se

//document.write("<h2>" + primeiroValor + " x " + segundoValor + " = " + resultado + "</h2>"); //escreve dentro da calculadora, na tag h2

//desafio
//quem é esse pokemón?
//Exibir um pokemon na tela e pedir para o usuario escrever o nome desse pokemon. Exibir se acertou ou errou o nome.
//qual pokemon vc quer evoluir? digita o nome e mostra a evolução
