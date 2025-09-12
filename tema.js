document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    function applyTheme(theme) {
        if (theme === "light") {
            body.classList.add("light-mode");
            if (themeToggle) themeToggle.checked = true;
        } else {
            body.classList.remove("light-mode");
            if (themeToggle) themeToggle.checked = false;
        }
    }

    // Carrega o tema salvo no localStorage ou usa "dark" como padrão
    // Isso garante que, se nada foi salvo, ele comece no escuro (seu tema padrão)
    const savedTheme = localStorage.getItem("theme") || "dark"; 
    applyTheme(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener("change", () => {
            if (themeToggle.checked) {
                applyTheme("light");
                localStorage.setItem("theme", "light");
            } else {
                applyTheme("dark");
                localStorage.setItem("theme", "dark");
            }
        });
    }
});
