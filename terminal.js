// Récupérer les éléments du DOM
const terminalBtn = document.getElementById("terminal-btn");
const terminal = document.getElementById("terminal");
const closeTerminal = document.getElementById("close-terminal");
const terminalInput = document.getElementById("terminal-input");
const terminalOutput = document.getElementById("terminal-output");

// Ouvrir le terminal
terminalBtn.addEventListener("click", () => {
    terminal.style.display = "flex";
    terminalInput.focus();
});

// Fermer le terminal
closeTerminal.addEventListener("click", () => {
    terminal.style.display = "none";
});

// Fonction pour exécuter la commande dans le terminal
terminalInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault(); // Empêche le comportement par défaut du formulaire
        
        const command = terminalInput.value.trim(); // Supprimer les espaces vides autour de la commande
        
        if (command === "") return; // Ne rien faire si la commande est vide
        
        terminalOutput.innerHTML += `<p><span style="color: #00FF00;">$ ${command}</span></p>`; // Afficher la commande entrée
        
        // Logique de traitement de la commande
        if (command === "hello") {
            terminalOutput.innerHTML += "<p>Bonjour, utilisateur d'AltOS !</p>";
        } else if (command === "clear") {
            terminalOutput.innerHTML = ""; // Effacer l'écran du terminal
        } else if (command === "help") {
            terminalOutput.innerHTML += "<p>Voici les commandes disponibles :</p>";
            terminalOutput.innerHTML += "<p><span style='color: #00FF00;'>hello</span> - Affiche un message de bienvenue.</p>";
            terminalOutput.innerHTML += "<p><span style='color: #00FF00;'>clear</span> - Efface l'écran du terminal.</p>";
            terminalOutput.innerHTML += "<p><span style='color: #00FF00;'>date</span> - Affiche la date et l'heure actuelle.</p>";
            terminalOutput.innerHTML += "<p><span style='color: #00FF00;'>whoami</span> - Affiche le nom d'utilisateur actuel.</p>";
        } else if (command === "date") {
            const currentDate = new Date();
            const formattedDate = currentDate.toLocaleString(); // Affiche la date et l'heure locale
            terminalOutput.innerHTML += `<p>La date et l'heure actuelles sont : ${formattedDate}</p>`;
        } else if (command === "whoami") {
            terminalOutput.innerHTML += "<p>Nom d'utilisateur : utilisateur d'AltOS</p>";
        } else {
            terminalOutput.innerHTML += "<p>Commande inconnue. Tapez 'help' pour la liste des commandes.</p>";
        }

        // Remettre le curseur au bas et effacer le champ de saisie
        terminalInput.value = "";
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }
});
