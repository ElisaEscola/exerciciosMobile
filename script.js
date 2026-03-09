const botaoFoda = document.getElementById("botaoFoda");
const editar = document.getElementById("editar");

const nome = document.querySelector(".nome");
const descricao = document.querySelector(".descricao");

botaoFoda.addEventListener("click", function () {
  alert("O meu nome é " + nome.textContent);
});