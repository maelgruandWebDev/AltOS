document.addEventListener("DOMContentLoaded", () => { // Assurer que le DOM est complètement chargé

    // Récupérer les éléments du DOM
    const launcherBtn = document.getElementById("launcher-btn");
    const launcherModal = document.getElementById("launcher-modal");
    const closeLauncher = document.getElementById("close-launcher");

    // Ouvrir le launcher
    launcherBtn.addEventListener("click", () => {
        launcherModal.classList.add("show");
    });

    // Fermer le launcher
    closeLauncher.addEventListener("click", () => {
        launcherModal.classList.remove("show");
    });

    // Fermer en cliquant en dehors du contenu
    launcherModal.addEventListener("click", (event) => {
        if (event.target === launcherModal) {
            launcherModal.classList.remove("show");
        }
    });

    const terminalBtn = document.getElementById("terminal-btn");
    const terminal = document.getElementById("terminal");
    const closeTerminal = document.getElementById("close-terminal");

    // Assurer que le terminal est caché au départ
    terminal.style.display = "none"; // Ce style assure que le terminal est caché au départ

    // Ouvrir le terminal
    terminalBtn.addEventListener("click", () => {
        terminal.style.display = "flex"; // Affiche le terminal
    });

    // Fermer le terminal
    closeTerminal.addEventListener("click", () => {
        terminal.style.display = "none"; // Cache le terminal
    });

});
