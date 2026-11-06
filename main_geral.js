const botaoTema = document.getElementById("botao-tema");

if (localStorage.getItem("tema") === "night") {
  document.body.classList.add("night");
}

// liga/desliga o modo escuro ao clicar
botaoTema.addEventListener("click", () => {
  const escuro = document.body.classList.toggle("night");
  localStorage.setItem("tema", escuro ? "night" : "claro");
});