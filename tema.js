document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const seletorTema = document.getElementById("tema");

  // Carregar tema salvo ou usar o padrão "claro"
  const temaSalvo = localStorage.getItem("tema") || "claro";
  body.classList.add("tema-" + temaSalvo);

  // Se o seletor de tema estiver presente (só na página de config),
  // configura o evento de mudança
  if (seletorTema) {
    seletorTema.value = temaSalvo;

    seletorTema.addEventListener("change", () => {
      const temaSelecionado = seletorTema.value;

      // Remove classes antigas para não acumular
      body.classList.remove("tema-claro", "tema-escuro");
      
      // Adiciona a nova classe
      body.classList.add("tema-" + temaSelecionado);

      // Salvar a nova escolha no localStorage
      localStorage.setItem("tema", temaSelecionado);
    });
  }
});