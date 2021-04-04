var cartaPaulo = {
  nome: "Seiya de Pegaso",
  imagem:
    "https://i.pinimg.com/originals/c2/1a/ac/c21aacd5d092bf17cfff269091f04606.jpg",
  atributos: {
    ataque: 80,
    defesa: 60,
    magia: 90,
  },
};

var cartaRafa = {
  nome: "Bulbasauro",
  imagem:
    "https://universoreverso.com.br/wp-content/uploads/2018/03/bulbassauro.jpg",
  atributos: {
    ataque: 70,
    defesa: 65,
    magia: 85,
  },
};

var cartaGui = {
  nome: "Lorde Darth Vader",
  imagem:
    "https://images-na.ssl-images-amazon.com/images/I/51VJBqMZVAL._SX328_BO1,204,203,200_.jpg",
  atributos: {
    ataque: 88,
    defesa: 62,
    magia: 90,
  },
};

var cartaMaquina;
var cartaJogador;
var cartas = [cartaPaulo, cartaRafa, cartaGui];
// 0          1           2

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 3);
  while (numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random() * 3);
  }
  cartaJogador = cartas[numeroCartaJogador];
  //console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibeCartaJogador();
  //exibirOpcoes();
}

function exibeCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';

  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;

  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "</br>";
  }
  //opcoes.innerHTML = opcoesTexto;

  var html = "<div id ='opcoes' class='carta-status'>";

  divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + "</div>";
}

//function exibirOpcoes() {
//    var opcoes = document.getElementById('opcoes');
//    var opcoesTexto = "";
//    for (var atributo in cartaJogador.atributos) {
//        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo;
//    }
//    opcoes.innerHTML = opcoesTexto;
//}

function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value;
    }
  }
}

function jogar() {
  var divResultado = document.getElementById("resultado");
  var atributoSelecionado = obtemAtributoSelecionado();

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    //alert('Venceu a carta máquina');
    htmlResultado = '<p class="resultado-final">Venceu</p>';
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    //alert('Perdeu. Carta da máquina é maior');
    htmlResultado = '<p class="resultado-final">Perdeu</p>';
  } else {
    //alert('Empatou!');
    htmlResultado = '<p class="resultado-final">Empatou</p>';
  }
  //console.log(cartaMaquina);
  divResultado.innerHTML = htmlResultado;
  exibeCartaMaquina();
}

function exibeCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';

  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;

  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  var opcoesTexto = "";

  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</br>";
  }
  //opcoes.innerHTML = opcoesTexto;

  var html = "<div id ='opcoes' class='carta-status'>";

  divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + "</div>";
}
