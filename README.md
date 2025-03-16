# 📂 AltOS

## 📝 Introduction

**AltOS** est un OS cloud accessible depuis un navigateur, développé en **HTML, CSS et JavaScript**. Il est hébergé sur **GitHub Pages** et fonctionne sans backend grâce au stockage local avec **IndexedDB**.

🔗 [Dépôt GitHub](https://github.com/maelgruand1/AltOS)

## 🚀 Fonctionnalités principales

### 🔹 Interface utilisateur
- Bureau avec icônes et fond d’écran personnalisable
- Barre des tâches avec menu principal, horloge et raccourcis
- Gestion des fenêtres (redimensionnement, superposition)
- Mode sombre
- Écran de connexion avec authentification PIN (optionnelle)

### 🔹 Gestion des fichiers
- Création, suppression, renommage et déplacement des fichiers
- Stockage local avec IndexedDB
- Organisation par dossiers virtuels
- Importation/exportation de fichiers
- Aperçu des fichiers (images, PDF, textes)

### 🔹 Applications intégrées
- **Explorateur de fichiers** 📂 : gestion avancée des fichiers
- **Éditeur de texte** 📝 : prise en charge du Markdown et du code
- **Terminal basique** 💻 : exécution de commandes en JS
- **Lecteur multimédia** 🎵🎥 : support des fichiers audio et vidéo
- **Bloc-notes** 🗒️ : notes temporaires
- **Navigateur interne** 🌐 : affichage de pages Web locales et externes
- **Gestionnaire de tâches** 🛠️ : suivi des processus actifs

## 🛠️ Installation et exécution

### 🔹 Accès en ligne
AltOS est hébergé sur GitHub Pages. Il suffit de visiter :  
➡️ **[AltOS en ligne](https://maelgruand1.github.io/AltOS/)**

### 🔹 Exécution locale
Si tu veux l’exécuter en local :
1. Clone le projet :
   ```sh
   git clone https://github.com/maelgruand1/AltOS.git
   ```
2. Ouvre `index.html` dans un navigateur **ou** lance un serveur local :
   ```sh
   python -m http.server 8000
   ```
3. Accède à `http://localhost:8000`

## 📦 PWA (Progressive Web App)

AltOS est une **PWA**, ce qui permet une utilisation hors ligne.

- **Installation** : Sur Chrome, Edge ou Android → clic sur l’icône `+` dans la barre d’adresse.
- **Mode hors ligne** : Fonctionne grâce à **IndexedDB** et un **Service Worker**.

## 🔧 Développement

### 🔹 Technologies utilisées
- **Frontend** : HTML, CSS, JavaScript (sans framework)
- **Stockage** : IndexedDB pour les fichiers, LocalStorage pour les préférences
- **Déploiement** : GitHub Pages
- **Service Worker** : Cache des fichiers pour mode hors ligne

### 🔹 Structure du projet
```
AltOS/
├── index.html          # Page principale
├── styles.css          # Feuille de style
├── script.js           # Gestion principale du système
├── terminal.js         # Logique du terminal
├── service-worker.js   # Gestion du cache
├── manifest.json       # Configuration PWA
├── assets/             # Images et icônes
└── apps/               # Applications intégrées
```

## 🛠️ Roadmap

✅ Interface de base (bureau, fenêtres, barre des tâches)  
✅ Explorateur de fichiers avec IndexedDB  
✅ Applications essentielles (éditeur, terminal, lecteur multimédia)  
⬜ Amélioration du terminal avec commandes avancées  
⬜ Ajout d’un système multi-utilisateurs  
⬜ Intégration d’une gestion des permissions sur les fichiers  

## 📜 Licence

Projet sous licence **MIT** – Utilisation et modification libres.

---

💡 **Développé par [Mael Gruand](https://github.com/maelgruand1)** 🚀

