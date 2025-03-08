# Argent Bank - Banking Application

![Argent Bank Logo](./src/assets/argentBankLogo.png)

## 🇬🇧 English

### Overview

Argent Bank is a React-based banking application that allows users to log in, view their accounts, and manage their profile information. Phase 2 of the project includes transaction management API modeling.

### Features

- User authentication (login/logout)
- User profile management
- Account dashboard
- Transaction viewing and management
- Redux state management
- JWT authentication
- Responsive design

### Technologies

- React 19
- Redux Toolkit
- React Router
- Axios for API calls
- Vite build tool
- ESLint for code quality

### Prerequisites

- Node.js (version 18 or higher)
- npm (version 8 or higher)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/argent-bank.git
cd argent-bank/argent-bank-frontend
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables (if needed):
   Create a `.env` file in the root directory of the project:

```
VITE_API_URL=http://localhost:3001/api/v1
```

### Running the Application

1. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

2. For production build:

```bash
npm run build
npm run preview
```

### Project Structure

```
argent-bank-frontend/
├── public/             # Static files
├── src/
│   ├── app/            # Redux store configuration
│   ├── assets/         # Images and static assets
│   ├── components/     # Reusable components
│   ├── config/         # Environment variables
│   ├── data/           # Mock data
│   ├── features/       # Redux slices
│   ├── pages/          # Main application pages
│   ├── services/       # API service calls
│   ├── App.jsx         # Main application component
│   ├── main.jsx        # Application entry point
│   └── main.css        # Global styles
├── .gitignore          # Git ignore rules
├── eslint.config.js    # ESLint configuration
├── package.json        # Project dependencies
├── vite.config.js      # Vite configuration
└── README.md           # Project documentation
```

### API Documentation

The API documentation is available in OpenAPI (Swagger) format.

---

## 🇫🇷 Français

### Aperçu

Argent Bank est une application bancaire basée sur React qui permet aux utilisateurs de se connecter, de visualiser leurs comptes et de gérer leurs informations de profil. La phase 2 du projet inclut la modélisation de l'API de gestion des transactions.

### Fonctionnalités

- Authentification utilisateur (connexion/déconnexion)
- Gestion du profil utilisateur
- Tableau de bord des comptes
- Visualisation et gestion des transactions
- Gestion d'état avec Redux
- Authentification JWT
- Design responsive

### Technologies

- React 19
- Redux Toolkit
- React Router
- Axios pour les appels API
- Outil de build Vite
- ESLint pour la qualité du code

### Prérequis

- Node.js (version 18 ou supérieure)
- npm (version 8 ou supérieure)

### Installation

1. Cloner le dépôt :

```bash
git clone https://github.com/votrenomutilisateur/argent-bank.git
cd argent-bank/argent-bank-frontend
```

2. Installer les dépendances :

```bash
npm install
```

3. Configurer les variables d'environnement (si nécessaire) :
   Créez un fichier `.env` dans le répertoire racine du projet :

```
VITE_API_URL=http://localhost:3001/api/v1
```

### Exécution de l'application

1. Démarrer le serveur de développement :

```bash
npm run dev
```

L'application sera disponible à l'adresse `http://localhost:5173`

2. Pour la build de production :

```bash
npm run build
npm run preview
```

### Structure du projet

```
argent-bank-frontend/
├── public/             # Fichiers statiques
├── src/
│   ├── app/            # Configuration du store Redux
│   ├── assets/         # Images et ressources statiques
│   ├── components/     # Composants réutilisables
│   ├── config/         # Variables d'environnement
│   ├── data/           # Données mockées
│   ├── features/       # Slices Redux
│   ├── pages/          # Pages principales de l'application
│   ├── services/       # Appels de service API
│   ├── App.jsx         # Composant principal de l'application
│   ├── main.jsx        # Point d'entrée de l'application
│   └── main.css        # Styles globaux
├── .gitignore          # Règles git ignore
├── eslint.config.js    # Configuration ESLint
├── package.json        # Dépendances du projet
├── vite.config.js      # Configuration Vite
└── README.md           # Documentation du projet
```

### Documentation API

La documentation de l'API est disponible au format OpenAPI (Swagger).

---

_Ce projet fait partie de la formation Développeur Front-end JavaScript React chez OpenClassrooms._
