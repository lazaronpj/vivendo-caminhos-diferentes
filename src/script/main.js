const form = document.querySelector("form");
let msg = document.getElementById("msg");
let contador = document.getElementById("contador");

// Adicionando um evento blur para desfocar o campo assim que o elemento perde o foco
form.addEventListener(
  "blur",
  function (blur) {
    blur.target.style.background = "#fff5e9";
  },
  true
);

// Adicionando um evento focus para focar o campo que receber o foco
form.addEventListener(
  "focus",
  function (focus) {
    focus.target.style.background = "#e3fffe";
  },
  true
);

// Adicionando um evento submit para aparecer (mensagem enviada)
form.addEventListener("submit", function (event) {
  // Prevenindo o comportamento padrão do formulário (evitando que a página seja recarregada)
  event.preventDefault();
  msg.innerHTML = "Mensagem enviada com sucesso!";
});

// Adicionando um evento de input para contar os caracteres da textarea
document.getElementById("areaTexto").addEventListener("input", function () {
  // Obtendo o valor da textarea
  let texto = this.value;
  // Atualizando o contador de caracteres
  contador.textContent = texto.length;
});
