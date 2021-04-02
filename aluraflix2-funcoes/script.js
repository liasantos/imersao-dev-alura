function adicionarFilme() {
  var campoFilmeFavorito = document.querySelector("#filme");
  //console.log("clicou");
  //console.log(campoFilmeFavorito);
  var filmeFavorito = campoFilmeFavorito.value;
  //console.log(filmeFavorito);
  //document.write("<img src=" + filmeFavorito + ">");
  if (filmeFavorito.endsWith(".jpg")) {
    listarFilmesNaTela(filmeFavorito);
  } else {
    alert("Imagem Inválida");
  }
  campoFilmeFavorito.value = "";
}

function listarFilmesNaTela(filme) {
  var listaFilmes = document.querySelector("#listaFilmes");
  var elementoFilme = "<img src=" + filme + ">";
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme;
}
