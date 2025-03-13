# 📂 AltOS

## 📝 Introduction

Un système d'exploitation cloud accessible depuis un navigateur, hébergé sur GitHub Pages.

### 🔹 Objectifs :

- Fournir une interface intuitive rappelant un OS traditionnel
- Permettre aux utilisateurs de gérer des fichiers et des applications
- Offrir une expérience rapide et fluide grâce au stockage local

### 🔹 Technologies envisagées :

- **Frontend** : HTML, CSS, JavaScript (sans backend)
- **Stockage** : IndexedDB pour les fichiers, LocalStorage pour les préférences
- **Déploiement** : GitHub Pages

---

## 🎨 Interface utilisateur

### 📌 Design général

- Barre des tâches avec horloge, raccourcis et menu principal
- Gestion des fenêtres avec redimensionnement et superposition
- Système de bureau avec icônes et fond d'écran personnalisable

### 📌 Idées supplémentaires :

- Mode sombre
- Système de widgets (météo, notes rapides...)
- Gestion multi-utilisateurs avec profils locaux

---

## 🔧 Fonctionnalités principales

### 📂 Gestion des fichiers

- Création, suppression, renommage et déplacement des fichiers
- Stockage local avec IndexedDB
- Système de dossiers virtuels
- Exportation et importation de fichiers
- Possibilité d'organiser les fichiers en favoris
- Prise en charge des fichiers compressés (ZIP)
- Aperçu des fichiers (images, PDF, textes)

### 🖊️ Applications intégrées

- **Éditeur de texte** : prise en charge du Markdown, coloration syntaxique pour le code
- **Explorateur de fichiers** : gestion avancée des fichiers et dossiers
- **Terminal basique** : commandes simulées en JavaScript, gestion des fichiers via terminal
- **Navigateur web simplifié** : possibilité d'ouvrir des pages internes et externes
- **Bloc-notes** : stockage rapide de notes temporaires
- **Gestionnaire de tâches** : suivi des processus actifs dans l'OS cloud
- **Lecteur multimédia** : prise en charge des fichiers audio et vidéo

### 🚀 Optimisation des performances

- Chargement rapide grâce au cache du navigateur
- Compression des ressources statiques
- Système de mise en veille pour les applications inactives
- Préchargement des applications fréquemment utilisées
- Mode hors ligne avec synchronisation des fichiers lorsque la connexion est rétablie

---

## ⚙️ Architecture technique

### 📌 Stockage

- IndexedDB pour les fichiers
- LocalStorage pour les paramètres et préférences

### 📌 Sécurité

- Sandbox JavaScript pour éviter l’exécution de scripts malveillants
- Permissions pour limiter l’accès aux données

---

## 🚀 Déploiement et mises à jour

- Hébergement via GitHub Pages
- Utilisation de PWA pour un mode hors ligne
- Versioning des mises à jour via Git

---

## 🛠️ Roadmap du projet

### 📌 Étapes de développement :

1. **Maquette de l’interface**
2. **Développement du système de fenêtres et du bureau**
3. **Implémentation de l’explorateur de fichiers avec IndexedDB**
4. **Ajout des applications de base (éditeur, terminal, navigateur, gestionnaire de tâches)**
5. **Optimisation des performances et mode hors ligne**
6. **Déploiement sur GitHub Pages**

---

