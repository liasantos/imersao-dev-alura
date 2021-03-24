var valorEmDolarTexto = prompt("Qual o valor em dolar que você quer converter?")

var valorEmDolarNumero = parseFloat(valorEmDolarTexto) //Transforma texto em numero real

// alert(valorEmDolarNumero) //teste

var valorEmReal = valorEmDolarNumero * 5.50
var valorEmRealFixado = valorEmReal.toFixed(2) //fixando que a saída será com apenas duas casas decimais

alert(valorEmRealFixado)

// Revisão
// variáveis var int - float - string
// alert - parseInt - parseFloat - prompt
// operações + somar * multiplicar
// comentários