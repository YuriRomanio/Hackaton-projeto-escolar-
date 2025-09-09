
    document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;

    // Carrega o estado do tema salvo no localStorage
    const temaSalvo = localStorage.getItem("tema");
    if (temaSalvo === "escuro") {
        body.classList.add("tema-escuro");
        if (darkModeToggle) {
            darkModeToggle.checked = true;
        }
    } else {
        body.classList.remove("tema-escuro");
        if (darkModeToggle) {
            darkModeToggle.checked = false;
        }
    }

    // Adiciona o evento de mudança ao slider
    if (darkModeToggle) {
        darkModeToggle.addEventListener("change", () => {
            if (darkModeToggle.checked) {
                body.classList.add("tema-escuro");
                localStorage.setItem("tema", "escuro");
            } else {
                body.classList.remove("tema-escuro");
                localStorage.setItem("tema", "claro");
            }
        });
    }
});
