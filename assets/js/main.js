// Menu mobile: abre e fecha a lista de links no celular
document.addEventListener("DOMContentLoaded", function () {
  var botao = document.querySelector(".menu-botao");
  var menu = document.getElementById("menu-principal");

  function alternarMenu(abrir) {
    menu.classList.toggle("aberto", abrir);
    botao.setAttribute("aria-expanded", abrir ? "true" : "false");
    botao.setAttribute("aria-label", abrir ? "Fechar menu" : "Abrir menu");
  }

  if (botao && menu) {
    botao.addEventListener("click", function () {
      alternarMenu(!menu.classList.contains("aberto"));
    });

    document.addEventListener("keydown", function (evento) {
      if (evento.key === "Escape" && menu.classList.contains("aberto")) {
        alternarMenu(false);
        botao.focus();
      }
    });
  }

  // Ícones Lucide (carregados via CDN)
  if (window.lucide) {
    window.lucide.createIcons({ attrs: { class: "icone" } });
  }
});
