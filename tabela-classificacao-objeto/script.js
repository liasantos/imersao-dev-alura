//cria um objeto
var paulo = {
  nome: "Paulo",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0,
};
//console.log(paulo);
//console.log(paulo.vitorias);

var rafa = {
  nome: "Rafa",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0,
};
//console.log(rafa);

//console.log(rafa.pontos);
rafa.pontos = calculaPontos(rafa);
//console.log(rafa.pontos);
paulo.pontos = calculaPontos(paulo);

function calculaPontos(jogador) {
  //console.log(jogador.vitorias);
  var pontos = jogador.vitorias * 3 + jogador.empates;
  //console.log(pontos);
  return pontos;
}

var jogadores = [rafa, paulo];

exibirJogadoresNaTela(jogadores);

function exibirJogadoresNaTela(jogadores) {
  var html = "";
  for (var i = 0; i < jogadores.length; i++) {
    html += "<tr><td>" + jogadores[i].nome + "</td>";
    html += "<td>" + jogadores[i].vitorias + "</td>";
    html += "<td>" + jogadores[i].empates + "</td>";
    html += "<td>" + jogadores[i].derrotas + "</td>";
    html += "<td>" + jogadores[i].pontos + "</td>";
    html +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    html +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    html +=
      "<td><button onClick='adicionarDerrota(" +
      i +
      ")'>Derrota</button></td></tr>";
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = html;
}

function adicionarVitoria(i) {
  //console.log("clicou botão vitoria");
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibirJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
  //console.log("clicou botão derrota");
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibirJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  //console.log("clicou botão empate");
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibirJogadoresNaTela(jogadores);
}
